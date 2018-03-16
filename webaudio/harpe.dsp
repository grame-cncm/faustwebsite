//-----------------------------------------------
// 		Harpe : simple string instrument
//		(based on Karplus-Strong)
//
//-----------------------------------------------

declare name  	"Harpe";
declare author  "Yann Orlarey";

import("music.lib"); 



KEY = 60;	// basic midi key
NCY = 15; 	// note cycle length
CCY = 15;	// control cycle length
BPS = 360;	// general tempo (beat per sec)

   


//-------------------------------Harpe----------------------------------
// Harpe is a simple string instrument. Move the "hand" to play the 
// various strings
//-----------------------------------------------------------------------

process = hgroup("harpe", h : harpe(C,N,K) :> *(l),*(l))
	with {
		N = 21; // number of strings
		K = 48; // Midi key of first string
		h = hslider("[1]hand", 0, 0, N, 1) : int;
		l = vslider("master[style:knob]", -20, -60, 0, 0.01) : db2linear;
		C = vslider("timbre[style:knob]", 0, 0, 1, 0.01);
	};
 


//----------------------------------Harpe--------------------------------
// USAGE:  hand : harpe(C,10,60) : _,_;
//		C is the filter coefficient 0..1
// 		Build a N (10) strings harpe using a pentatonic scale 
//		based on midi key b (60)
//		Each string is triggered by a specific
//		position of the "hand"
//-----------------------------------------------------------------------
harpe(C,N,b) = 	_ <: par(i, N, position(i+1)
							: string(C,Penta(b).degree2Hz(i), att, lvl)
							: pan((i+0.5)/N) )
				 	:> _,_
	with {
		att  = 4; 
		lvl  = 1;
		pan(p) = _ <: *(sqrt(1-p)), *(sqrt(p));
		position(a,x) = abs(x - a) < 0.5;
		db2linear(x)	= pow(10, x/20.0);

	};


//----------------------------------Penta-------------------------------
// Pentatonic scale with degree to midi and degree to Hz conversion
// USAGE: Penta(60).degree2midi(3) ==> 67 midikey
//        Penta(60).degree2Hz(4)   ==> 440 Hz
//-----------------------------------------------------------------------

Penta(key) = environment {

	A4Hz = 440; 
	
	degree2midi(0) = key+0;
	degree2midi(1) = key+2;
	degree2midi(2) = key+4;
	degree2midi(3) = key+7;
	degree2midi(4) = key+9;
	degree2midi(d) = degree2midi(d-5)+12;
	
	degree2Hz(d) = A4Hz*semiton(degree2midi(d)-69) with { semiton(n) = 2.0^(n/12.0); };

};   


//----------------------------------String-------------------------------
// A karplus-strong string.
//
// USAGE: string(440Hz, 4s, 1.0, button("play"))
// or	  button("play") : string(440Hz, 4s, 1.0)
//-----------------------------------------------------------------------

string(coef, freq, t60, level, trig) = noise*level
							: *(trig : trigger(freq2samples(freq)))
							: resonator(freq2samples(freq), att)
	with {
		resonator(d,a)	= (+ : @(d-1)) ~ (average : *(a));
		average(x)		= (x*(1+coef)+x'*(1-coef))/2;
		trigger(n) 		= upfront : + ~ decay(n) : >(0.0);
		upfront(x) 		= (x-x') > 0.0;
		decay(n,x)		= x - (x>0.0)/n;
		freq2samples(f) = 44100.0/f;
		att 			= pow(0.001,1.0/(freq*t60)); // attenuation coefficient
		random  		= +(12345)~*(1103515245);
		noise   		= random/2147483647.0;
	};

   
