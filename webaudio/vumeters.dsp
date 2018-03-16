declare name 		"vumeters";
declare version 	"1.0";
declare author 		"Grame";
declare license 	"BSD";
declare copyright 	"(c)GRAME 2014";

//-------------------------------------------------
// A stereo vumeter
//-------------------------------------------------

import("math.lib");
import("music.lib");


vumeter(i)	= _ <: _, (envelop : vbargraph("Ch%i[unit:dB]", -70, +5)) : attach
	with {
		envelop = abs : max(db2linear(-70)) : linear2db : max ~ -(70.0/SR) ;
	};


process = vgroup("Monitor", hgroup("Vumeters", par(i, 2, vumeter(i)) ) : par(i, 2, *(checkbox("listen"))));
