import("math.lib"); 
import("maxmsp.lib"); 
import("music.lib"); 
import("oscillator.lib"); 
import("reduce.lib"); 
import("filter.lib"); 
import("effect.lib"); 
 

//definition du phasor complet//
basicPhasor(freq) = (_,1. : fmod) ~ +(float(freq)/float(SR));
myPhasor(freq) = (if(freq>0', basicPhasor(freq), 1.+basicPhasor(freq)));

//definition du cycle nowrap_ramp_______________________________________________________//
//on utilise la table des sinus dans music.lib//
//seulement la première partie du sinus (cloche positive)//

cycle_harm(myPhase) = s1 +  d * (s2 - s1)
with {
		//indice i décimal (par exemple 12.3)
		i = (myPhase, 1.) : fmod : *(0.5) : *(float(tablesize));
		//j est la partie entière de i
		j = int(i);
		d = i - j;
		s1 = rdtable(tablesize+1, sinwaveform, j);//echantillon i
		s2 = rdtable(tablesize+1, sinwaveform, j+1);//echantillon i+1
};

//on utilise tablesize de music.lib 2 puissance 16//
//et la fonction decimal//
//
f_inv_modulo = (/(float(tablesize)), 1.) : fmod;

//interpolation notamment du retour à zéro//
cycle_nowrapramp(myPhase) = s1 +  d * (s2 - s1)
with {
		i = (myPhase, 1.) : fmod : *(float(tablesize)) : int;
		d = decimal(myPhase);
		s1 = f_inv_modulo(float(i));
		s2 = f_inv_modulo(float(i+1));
};

variableDelay(x, a) = interpolatedDelay 
with {
	millisecond = SR/1000.0; 
	d0 = a*millisecond;
	d1 = int(d0): &(int(2^18-1));
	d2 = d1+1;
	delta = d0 - int(d0);
	y1 = x@d1;
	y2 = x@d2;
	interpolatedDelay = y1+delta*(y2-y1);
};

//definition des sliders//
hamp = vslider("h_amp", 0.5, 0., 1., 0.01);
hdelay = vslider("h_delay", 0, 0, 5000, 10);
hfreq = vslider("h_freq", 1., -10., 10., 1.);
hwin = vslider("h_win", 200, 0, 1000, 10);

elementHarmo(x, ph, delta) = myHarmoElt
with {
		myHarmo1 = (ph, delta) : + : cycle_nowrapramp <: (_, hwin, _) : (*, _) : (_, hdelay, _) : (+, _) : (+(2.), _);
		myHarmoElt = (x, myHarmo1):(variableDelay, cycle_harm):*:*(hamp);
};

process = hgroup("harmo", (_, myPhasor(hfreq)) <: (_,_,0.,_,_,0.25,_,_,0.5,_,_, 0.75):(elementHarmo, elementHarmo, elementHarmo, elementHarmo):(+,+):+);
//process= (_, myPhasor(hfreq), 0.) : elementHarmo;		
//process= _<:(((_, myPhasor(hfreq), 0.):elementHarmo), ((_, myPhasor(hfreq), 0.25):elementHarmo), ((_, myPhasor(hfreq), 0.5):elementHarmo), ((_, myPhasor(hfreq), 0.75):elementHarmo)):(+,+):+;