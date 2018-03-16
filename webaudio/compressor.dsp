/* 
Stereo Audio Compressor
Based on code developed by Kjetil S. Matheussen and Julius O. Smith III
*/

import("filter.lib");
effect = library("effect.lib");


// Default values for the user interface

def_ratio 		= 2.0;
def_threshold 	= -20.0;

def_attack 		= 50.148;
def_release 	= 100.237;

def_ingain 		= 0.0;
def_outgain 	= 0.0;


// Compression Gain 

compression_gain(ratio,thresh,att,rel) = 
		  effect.amp_follower_ud(att,rel)
		: linear2db 
		: vbargraph("[0]in[unit:dB]",-50,10) 
		: outminusin_db(ratio,thresh) 
		: vbargraph("[8]K",-50,10) 
		: kneesmooth(att) 
		: db2linear
	with {
	  // kneesmooth(att) installs a "knee" in the dynamic-range compression,
	  // where knee smoothness is set equal to half that of the compression-attack.
	  // A general 'knee' parameter could be used instead of tying it to att/2:
	  kneesmooth(att)  = smooth(tau2pole(att/2.0));
	  // compression gain in dB:
	  outminusin_db(ratio,thresh,level) = max(level-thresh,0.0) * (1.0/float(ratio)-1.0);
	  // Note: "float(ratio)" REQUIRED when ratio is an integer > 1!
	};


// Stereo compressor using left right channel mix to drive the compressor

compressor_stereo(ratio,thresh,att,rel,x,y) = k*x, k*y 
	with {
  		k = abs(x)+abs(y) : compression_gain(ratio,thresh,att,rel);
	};


// Stereo compressor with GUI

compressor_stereo_gui 	= hgroup("STEREO COMPRESSOR", *(ingain), *(ingain) 
						: compressor_stereo(ratio, threshold, attack, release) 
						: *(outgain), *(outgain))
	with {
		ratio 		= vslider("[1] Ratio [style:knob]  [tooltip: A compression Ratio of N means that for each N dB increase in input signal level above Threshold, the output level goes up 1 dB]", def_ratio, 1, 20, 0.1);
		threshold 	= vslider("[2] Threshold [unit:dB] [style:knob]  [tooltip: When the signal level exceeds the Threshold (in dB), its level is compressed according to the Ratio]", def_threshold, -20, 20, 0.1);
		attack 		= vslider("[3] Attack [unit:ms] [style:knob]  [tooltip: Time constant in ms (1/e smoothing time) for the compression gain to approach (exponentially) a new lower target level (the compression `kicking in')]", def_attack, 0, 500, 0.1) : *(0.001) : max(1/SR);
		release 	= vslider("[4] Release [unit:ms] [style: knob]  [tooltip: Time constant in ms (1/e smoothing time) for the compression gain to approach (exponentially) a new higher target level (the compression 'releasing')]", def_release, 0, 1000, 0.1) : *(0.001) : max(1/SR);
		ingain 		= vslider("[5] Input Gain [unit:dB] [style: knob]  [tooltip: The input signal level is increased by this amount (in dB) to make up for the level lost due to compression]",def_ingain, -40, 40, 0.1) : db2linear : smooth(0.999);
		outgain 	= vslider("[6] Output Gain [unit:dB] [style: knob]  [tooltip: The compressed-signal output level is increased by this amount (in dB) to make up for the level lost due to compression]", def_outgain, -40, 40, 0.1) : db2linear : smooth(0.999);
	};


process = compressor_stereo_gui; 

