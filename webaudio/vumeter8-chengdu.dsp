declare name 		"vumeter";
declare version 	"1.0";
declare author 		"Grame";
declare license 	"BSD";
declare copyright 	"(c)GRAME 2006"; 

//-------------------------------------------------
// Simple vumeter
//-------------------------------------------------

import("math.lib");
import("music.lib");


vumeter	= 0, (envelop : vbargraph("Vu[style:numerical][unit:dB]", -70, +5)) : attach
	with {
		envelop = abs : max(db2linear(-70)) : linear2db : max ~ -(70.0/SR) ;
	};


process = hgroup("vumeters", par(i,14,!), par(i,8,vumeter));
