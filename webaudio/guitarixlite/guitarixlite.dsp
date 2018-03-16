declare name        "Guitarix";
declare version     "0.28";
declare author      "Guitarix project";

/****************************************************************
 ** Tube Preamp Emulation with
 *  tubescreamer -  tube stage 1 - 2 - tonestack - cabinet
 */


filter = library("filter.lib");
tube   = library("tube.lib");
tone   = library("tonestack.lib");

preamp = hgroup("Guitarix",
         hgroup("[0]TubeScreamer",ts9) :
         hgroup("[1]preamp: 12AX7", stage1 : stage2 ): 
         hgroup("[2]tonestack: jcm2000", tstack) :
         hgroup("[3]Cabinet", cab)) with {
    
    ts9 = component("ts9sim.dsp");

    stage1 = tube.T1_12AX7 : *(preamp): filter.lowpass(1,6531.0) : 
             tube.T2_12AX7 : *(preamp) with {
                preamp = vslider("[0] Pregain [style:knob]",-6,-20,20,0.1) : 
                  filter.db2linear : filter.smooth(0.999);
             }; 

    stage2 = filter.lowpass(1,6531.0) : tube.T3_12AX7 : *(gain) with {
                gain = vslider("[1] Gain [style:knob]",-6,-20.0,20.0,0.1) : 
                  filter.db2linear : filter.smooth(0.999);
             };

    tstack = tone.jcm2000(t, m, l) with {
        t = vslider("[2] Treble [style:knob]",0.5,0,1,0.01);
        m = vslider("[3] Middle [style:knob]",0.5,0,1,0.01);
        l = vslider("[4] Bass [style:knob]",0.5,0,1,0.01);
    };
    cab = component("cabinet.dsp");
};

process = preamp; 
