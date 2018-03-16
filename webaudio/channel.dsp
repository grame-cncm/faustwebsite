//-------------------------------------------------
// Simple 6x2 mixer
//-------------------------------------------------

vol 		= component("volume.dsp");
eql 		= component("equalizer.dsp");
pan 		= component("panpot.dsp");
vum 	 	= component("vumeter.dsp").vumeter;
mute		= *(1 - checkbox("mute"));        

channel(v) 	= vgroup("Ch %v",  mute : hgroup("[2]In", vol : vum : eql) : pan);
process		= channel(0);


