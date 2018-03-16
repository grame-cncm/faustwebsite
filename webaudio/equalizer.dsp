import("filter.lib");


process = vgroup("", lowshelf(LL,FL) : peak_eq(LP,FP,BP) : highshelf(LH,FH) )
with {

  	// HIGH FILTER PARAMETERS
  	highshelf(L0,fx) = _ <: lowpass(3,fx) + highpass(3,fx)*db2linear(L0);
	LH = vslider("[0] High [unit:dB][style:knob][size:-0.3][tooltip: Amount of high-frequency boost or cut in decibels]",
                0,-15,15,.1);
  	FH = 10000.0;

  	// MID FILTER PARAMETERS
  	Q = 2; //vslider("[1] Q [style:knob] [size:-0.3][tooltip: Quality factor (Q) of the peak = center-frequency/bandwidth]", 10,1,50,0.1);

  	FP = vslider("[2] Freq [unit:Hz][style:knob][size:-0.3][tooltip: Mid Frequency in Hz]", 2500,250,5000,1);

  	LP = vslider("[3] Mid [unit:dB] [style:knob] [size:-0.3] [tooltip: Amount of local boost or cut in decibels]", 0,-15,15,0.1);

  	BP = FP/Q;
  
  	// LOW FILTER PARAMETERS
  	lowshelf(L0,fx) = _ <: lowpass(3,fx)*db2linear(L0) + highpass(3,fx);
  	LL = vslider("[4] Low [unit:dB] [style:knob][size:-0.3][tooltip: Amount of low-frequency boost or cut in decibels]",
                0,-15,15,0.1);
  	FL = 300.0; 

};
