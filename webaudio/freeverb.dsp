//======================================================
//
//                      Freeverb
//        
//
//======================================================

process = freeverb;


// Freeverb
//---------

freeverb = fxctrl(fixedgain, wetSlider, stereoReverb(combfeed, allpassfeed, dampSlider, stereospread))
	with {
		// Control Sliders
		//--------------------
		// Damp : filters the high frequencies of the echoes (especially active for great values of RoomSize)
		// RoomSize : size of the reverberation room
		// Dry : original signal
		// Wet : reverberated signal
		
		dampSlider 	= 0.75*scaledamp; 
		combfeed  	= 0.8*scaleroom + offsetroom; 
		wetSlider   = hslider("Reverb", 0.3333, 0, 1, 0.025);
		
		// Constant Parameters
		//--------------------
		fixedgain   = 0.05; //value of the gain of fxctrl
		scaledamp   = 0.4;
		scaleroom   = 0.28;
		offsetroom  = 0.7;
		stereospread= 23;
		allpassfeed = 0.5; //feedback of the delays used in allpass filters
	};



// fxctrl : add an input gain and a wet-dry control to a stereo FX
//----------------------------------------------------------------

fxctrl(g,w,Fx) =  _,_ <: (*(g),*(g) : Fx : *(w),*(w)), *(1-w), *(1-w) :> _,_;




// Reverb components
//------------------

stereoReverb(fb1, fb2, damp, spread)
    = + <:  monoReverb(fb1, fb2, damp, 0), monoReverb(fb1, fb2, damp, spread);



monoReverb(fb1, fb2, damp, spread)
    = _ <: par(i, 8, comb(combtuningL(i) + spread, fb1, damp))
        :> seq(i, 4, allpass (allpasstuningL(i) + spread, fb2))
    with {
		// Filter Parameters
		//------------------
		combtuningL(0)    = 1116;
		combtuningL(1)    = 1188;
		combtuningL(2)    = 1277;
		combtuningL(3)    = 1356;
		combtuningL(4)    = 1422;
		combtuningL(5)    = 1491;
		combtuningL(6)    = 1557;
		combtuningL(7)    = 1617;
		
		allpasstuningL(0) = 556;
		allpasstuningL(1) = 441;
		allpasstuningL(2) = 341;
		allpasstuningL(3) = 225;
    };





// Comb and Allpass filters
//-------------------------

allpass(dt,fb) = (_,_ <: (*(fb),_:+:@(dt)), -) ~ _ : (!,_);

comb(dt, fb, damp) = (+:@(dt)) ~ (*(1-damp) : (+ ~ *(damp)) : *(fb));



