//-------------------------------------------------
// Simple 6x2 mixer
//-------------------------------------------------

vol 		= component("volume.dsp");
vum 	 	= component("vumeter.dsp").vumeter;
chan(c) 	= component("channel.dsp").channel(c);

stereo		= hgroup("Out", (vol, vol : vgroup("L", vum), vgroup("R", vum)));

process		= hgroup("mixer", par(i, 4, chan(i)) :> stereo );


