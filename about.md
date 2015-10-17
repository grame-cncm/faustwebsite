---
layout: page
title: About
permalink: /about/
---

FAUST (Functional Audio Stream) is a functional programming language specifically designed for real-time signal processing and synthesis. FAUST targets high-performance signal processing applications and audio plug-ins for a variety of platforms and standards.

A Faust program can be as simple as:

	process  = +(12345) ~ *(1103515245) : /(2147483647.0);

The above code fully describes a simple *white noise* generator. Here is a more sophisticated example with a slider to control the amount of noise:

	noise  = +(12345) ~ *(1103515245) : /(2147483647.0);
	process = noise * hslider("noise volume", 0, 0, 1, 0.01);

The Faust compiler translates Faust code into C++. For example the command:

	faust noise.dsp

will produce the following code:

	virtual void compute(int count, FAUSTFLOAT** inputs, FAUSTFLOAT** outputs) {
		FAUSTFLOAT* output0 = outputs[0];
		float fSlow0 = (4.65661e-10f * float(fHslider0));
		for (int i = 0; (i < count); i = (i + 1)) {
			iRec0[0] = (12345 + (1103515245 * iRec0[1]));
			output0[i] = FAUSTFLOAT((fSlow0 * float(iRec0[0])));
			iRec0[1] = iRec0[0];

		}
	}

In order to produce a running application or a plug-in one can use on of the many _faust2xxx_ scripts. For example:

	faust2jaqt noise.dsp

will produce a ready-to-run standalone application based on Jack and QT. Below you can try a web version of the noise generator:

[![noise example](/images/noise.png)](/images/noise/noise.html)
