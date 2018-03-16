import("effect.lib"); 

process = levelfilter(L,F),levelfilter(L,F) with {
	L  = hslider("dynamic_level[unit:dB]", -10, -60, 0, 1) : db2linear;
	F  = hslider("frequency[unit:Hz][scale:log]", 440, 20, 20000, 1);
};
