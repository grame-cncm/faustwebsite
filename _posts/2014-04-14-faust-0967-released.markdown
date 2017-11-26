---
layout: post
title:  "FAUST 0.9.67 released"
date:   2014-04-14 15:10:00
categories: news
---

GRAME is happy to announce the release of FAUST 0.9.67 !

This release provides many bug fixes and improvements in several architectures (Audio Units, VTSi, etc.) and libraries, as well as two very exiting new tools.

#### faust2webaudioasm ####

This tool, based on developments by Myles Borins at CCRMA, and by Mike Solomon and Stephane Letz at GRAME, allows to make realtime audio applications in a web browser ! faust2webaudioasm uses emscripten to translate Faust programs to efficient Javascript code (asm.js) embedded in a single HTML page. Check some examples (best results with firefox 29):

- [https://faust.grame.fr/webaudio/vumeters.html](https://faust.grame.fr/webaudio/vumeters.html)
- [https://faust.grame.fr/webaudio/compressor.html](https://faust.grame.fr/webaudio/compressor.html)
- [https://faust.grame.fr/webaudio/freeverb.html](https://faust.grame.fr/webaudio/freeverb.html)
- [https://faust.grame.fr/webaudio/harpe.html](https://faust.grame.fr/webaudio/harpe.html)
- [https://faust.grame.fr/webaudio/kisana.html](https://faust.grame.fr/webaudio/kisana.html)
- [https://faust.grame.fr/webaudio/wahwah.html](https://faust.grame.fr/webaudio/wahwah.html)
 
The two following ones are polyphonic instruments that can be controlled with MIDI. Check them with Chrome (don't forget to activate Web MIDI API).

- [https://faust.grame.fr/webaudio/piano.html](https://faust.grame.fr/webaudio/piano.html)
- [https://faust.grame.fr/webaudio/harpsi.html](https://faust.grame.fr/webaudio/harpsi.html)

#### faust2owl ####

faust2owl allows to develop effects for the OWL programmable effects pedal. See [http://hoxtonowl.com/](http://hoxtonowl.com/) for the pedal, and a short demo of a wah wah effect [here.](https://plus.google.com/u/0/photos/107719207245386120799/albums/5992899364872321153/5992899369025973874)
