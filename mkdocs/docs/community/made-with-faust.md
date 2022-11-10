# Powered By Faust

This page lists the projects using Faust in different ways: musical pieces or artistic projects, plugins, standalone applications, integration in audio programming environments, development tools, research projects (possibly non musical), embedded devices, Web applications, etc.

## [tamgamp.lv2](https://github.com/sadko4u/tamgamp.lv2)

<div><a href="https://github.com/sadko4u/tamgamp.lv2"><img  width="55%" class="mx-auto d-block" src="img/tamgamp.png"></a>  </div>

Tamgamp (Rhymes with: "Damage Amp") is a LV2 guitar amp simulator that provides two plugins, with DSP code [developed with Faust](https://github.com/sadko4u/tamgamp.lv2/tree/master/src):

- Tamgamp - a plugin based on Guitarix DK Builder simulated chains.
- TamgampGX - a plugin based on tuned Guitarix internal amplifiers implementation.

## [ReverbZen](https://github.com/zeloe/ReverbZen)

<div><a href="https://github.com/zeloe/ReverbZen"><img  width="40%" class="mx-auto d-block" src="img/ReverbZen.png"></a>  </div>

A Reverb written with Faust and JUCE, based on [SchroederReverberators](https://ccrma.stanford.edu/~jos/pasp/Schroeder_Reverberators.html). This reverb effect uses different stages. It splits input signal in parallel and uses different types of delaylines. Different filters are provided to get rid of unwanted resonances. Check out [reverb.dsp](https://github.com/zeloe/ReverbZen/blob/main/Source/reverb.dsp) file to get more detailed insight.


## [Wingie2](https://www.mengqimusic.com/wingie2-introduction)

<div><a href="https://www.mengqimusic.com/wingie2-introduction"><img  width="30%" class="mx-auto d-block" src="img/Wingie2.png"></a>  </div>

[Wingie2](https://www.mengqimusic.com/wingie2-introduction) is a handheld stereo resonator that you can use as a development platform, and can be [programmed with Faust](https://github.com/mengqimusic/Wingie2). 

## [Slowmo.lv2](https://github.com/brummer10/slowmo.lv2)

<div><a href="https://github.com/brummer10/slowmo.lv2"><img  width="60%" class="mx-auto d-block" src="img/slowmo.png"></a>  </div>

A multiband slow gate with delay/echo. The C++ files for the effect are generated from Faust DSP files: [Bandsplit.cc](https://github.com/brummer10/slowmo.lv2/blob/main/slowmo/Bandsplit.cc), [Delay.cc](https://github.com/brummer10/slowmo.lv2/blob/main/slowmo/Delay.cc) and [Volume.cc](https://github.com/brummer10/slowmo.lv2/blob/main/slowmo/Volume.cc). 


## [Vocoder App](https://github.com/Rickr922/mobile-vocoder)

<div><a href="https://github.com/Rickr922/mobile-vocoder"><img  width="40%" class="mx-auto d-block" src="img/vocoderapp.png"></a>  </div>

Vocoder mobile app for Android made with Faust and its Smartkeyboard interface. This app was developed in the context of a project for the the Real Time Interaction and Performance exam (Sound and Music Computing MSc, Aalborg University, Copenhagen, 2020).

The paper A Faust-built Mobile Vocoder Instrument, included in the repo, provides more information on the algorithm, as well as the description of a case prototype.

## [Echoplex Ep-3 Simulator](https://github.com/Rickr922/echoplex-sim)

<div><a href="https://github.com/Rickr922/echoplex-sim"><img  width="40%" class="mx-auto d-block" src="img/echoplex.png"></a>  </div>

This archive contains a virtual model of the Echoplex Ep-3 tape delay. The effect has been developed using Faust in the context of a project for the Sound Processing exam (Sound and Music Computing MSc, Aalborg University, Copenhagen, 2019).

The paper Faust Model of the Echoplex Tape Delay, included in the repo, provides more information on the algorithm.

## [faust2smartphone](https://github.com/RuolunWeng/faust2smartphone)

faust2smartphone is a tool to generate interactive musical mobile application embeded Faust API.

## [DPF-Fadeli](https://github.com/DISTRHO/Fadeli)

An experiment with Faust Demo Library content as DPF plugins. Basically glueing a few different projects together, to compile Faust DSP programs in several plugins format: LV2, VST2, VSL3, [clap](https://www.bitwig.com/stories/clap-the-new-audio-plug-in-standard-201/):

1. [DPF](https://github.com/DISTRHO/DPF)
2. [faust](https://faust.grame.fr/)
3. [faustpp](https://github.com/jpcima/faustpp)
4. [faust examples](https://faustdoc.grame.fr/examples/reverb/)


## [TR8CK](https://github.com/bigmistqke/tr8ck)

<div><a href="https://github.com/bigmistqke/tr8ck"><img  width="50%" class="mx-auto d-block" src="img/TR8CK.gif"></a>  </div>

TR8CK is an experimental DAW/tracker with Faust live coding via [faust2webaudio](https://github.com/grame-cncm/faust2webaudio) and UI powered by [SolidJS](https://www.solidjs.com).


## [GuitarD](https://github.com/TobiasKozel/GuitarD)

<div><a href="https://github.com/TobiasKozel/GuitarD"><img  width="55%" class="mx-auto d-block" src="img/guitarD.png"></a>  </div>

It's a basic multi effects processor which follows a node based approach. Components are [developed with Faust](https://github.com/TobiasKozel/GuitarD/tree/master/src/nodes).


## [HISE](http://www.hise.audio)

<div><a href="http://www.hise.audio"><img  width="55%" class="mx-auto d-block" src="img/faust_hise.png"></a>  </div>

HISE is an open source framework for building sample based virtual instruments combining a highly performant Disk-Streaming Engine, a flexible DSP-Audio Module system and a handy Interface Designer. The implementation of the [Faust integration](https://resonant-bytes.de/blog/gsoc-final-submission/) was the result of a Google Summer of Code project done by [Roman Sommer](https://resonant-bytes.de/about/) with the help of [Christoph Hart](https://github.com/christophhart) as mentor. 


## [MBStereophony](https://github.com/marcecj/faust_mbstereophony)

<div><a href="https://github.com/marcecj/faust_mbstereophony"><img  width="40%" class="mx-auto d-block" src="img/mbstereophony.png"></a>  </div>

This is a simple implementation of a Regalia-Mitra filter bank using 3rd order Cauer low-pass filters as the base designs. There are four filter bank programs available which are described below. MBStereophony itself is a demo effect that down-mixes a stereo signal separately per frequency band.


## [Audiolab](https://github.com/hrtlacek/audiolab)

A docker based DSP learning/Experimentation environment including:

- Jupyter lab
- FAUST
- python 3.7 (at the moment. Depends on miniconda3 docker image)
- FAUSTpy to run FAUST code inside jupyter
- faustWidgets (to interactively control FAUST code )
- librosa (for MIR and feature extraction)
- scipy, pandas, numpy for general data science
- sox (encoding, batch processing etc)
- ffmpeg (encoding batch processing etc)
- seaborn (more beautiful plots)
- latex TODO (for exporting jupyter notebooks)

## [LR_Delay](https://github.com/butchwarns/LR_Delay)

<div><a href="https://github.com/butchwarns/LR_Delay"><img  width="20%" class="mx-auto d-block" src="img/LR_Delay.jpg"></a>  </div>

A stereo delay plugin which emphasizes free (non beat-synced) controls for the individual channels. Built with Faust and JUCE.

## [Leslie speaker simulator](https://github.com/miccio-dk/LeslieSim)

<div><a href="https://github.com/miccio-dk/LeslieSim"><img  width="35%" class="mx-auto d-block" src="img/leslie.png"></a>  </div>

This archive presents a virtual simulation of the Leslie Speaker commonly found in Hammond electric organs. The digital effect has been developed using the FAUST programming language, and then ported into a VST-compatible format using the JUCE C++ framework.


## [cookiecutter-dpf-faust](https://github.com/SpotlightKid/cookiecutter-dpf-faust)

<div><a href="https://github.com/SpotlightKid/cookiecutter-dpf-faust"><img  width="50%" class="mx-auto d-block" src="img/cookiecutter-dpf-faust.png"></a>  </div>

A [cookiecutter](https://github.com/cookiecutter/cookiecutter) project template for DISTRHO Plugin Framework ([DPF](https://github.com/DISTRHO/DPF)) audio effect plugins using FAUST for the implementation of the DSP pipeline. Look at the [demo video](https://asciinema.org/a/355004?speed=2&&theme=monokai&autoplay=1&size=medium).

## [DF Zita Rev1](https://github.com/SpotlightKid/dfzitarev1)

<div><a href="https://github.com/SpotlightKid/dfzitarev1"><img  width="35%" class="mx-auto d-block" src="img/dfzitarev1.png"></a>  </div>

A feedback-delay-network reverb plugin built with [DPF](https://github.com/DISTRHO/DPF) and based on a FAUST library demo.  Several other projects are developed using the same DPF/FAUST methothodolgy:

* [FAUST filters](https://github.com/SpotlightKid/faustfilters), a collection of virtual-analog filters from the FAUST standard library packaged as multi-format plugins via the DPF
* [SendMixer](https://github.com/SpotlightKid/sendmixer), a stereo channel strip plugin with one master gain and two pre/post-fader sends
* [Stereo Cross Delay](https://github.com/SpotlightKid/stereocrossdelay), a stereo delay plugin with feedback and cross-mixing.


## [Theremotion](https://github.com/plule/theremotion)

<div><a href="https://github.com/plule/theremotion"><img  width="60%" class="mx-auto d-block" src="img/theremotion.png"></a>  </div>

Theremotion is a virtual instrument inspired by the Theremin. Just like a Theremin, the position of your hand in the air controls the pitch and volume of the sound. However, you can also control much more dimensions of the sound with specific motions. With specific hand positions, you can control a low pass filter, a supersaw sound, a guitar sound and more. You can even make the instrument "stick" to a scale, making it much easier to control than a Theremin.

The hand tracking is provided by Ultraleap's [Leap Motion Controller](https://www.ultraleap.com/product/leap-motion-controller/). The sound generation is created with Grame's [Faust](https://faust.grame.fr). The program is built with [Rust](https://www.rust-lang.org).


## [Hypercurve](https://github.com/johannphilippe/hypercurve)

<div><a href="https://github.com/johannphilippe/hypercurve"><img  width="80%" class="mx-auto d-block" src="img/hybrid.png"></a>  </div>

Hypercurve is a library allowing you to combine several curve algorithms into a single 2D envelope. It is designed to be used in audio applications, for people who know how to enjoy a finely shaped curve. As shown above, you can perfectly combine gaussian curve with diocles cissoid curve, and plenty of other curve algorithms. The library can be used in C++, Lua, Csound and [Faust](https://github.com/johannphilippe/hypercurve/tree/main/faust_lib).


## [faust-mcp](https://github.com/agraef/faust-mcp)

This package provides a [Pd](http://puredata.info) abstraction mcp.pd (along with some helper abstractions and externals) which lets you control your [Faust](http://faust.grame.fr) instruments and effects more conveniently with control surfaces utilizing the Mackie Control Protocol (MCP).

## [Faust.quark](https://github.com/madskjeldgaard/faust.quark)

This SuperCollider package makes it possible to create SuperCollider packages (Quarks) containing plugins written in Faust code. With this, you can distribute plugins written in Faust and make it easy for others to install, compile or uninstall them. It also contains some simple interfaces for the `faust` and `faust2sc.py` commands used behind the scenes.


## [Komet](https://github.com/madskjeldgaard/komet)

<div><a href="https://github.com/madskjeldgaard/komet"><img  width="80%" class="mx-auto d-block" src="img/komet.png"></a>  </div>

Komet is a computer music / sound system by Mads Kjeldgaard written in [SuperCollider](https://github.com/supercollider/supercollider) and [Faust](https://faust.grame.fr).

Komet is a computer music system that makes advanced synthesis operations and composition easier. It auto generates thousands of synthesizer variations from simple recipes and offers a range of DAW-like features such as effect chains (like on channel strips) and other conveniences. It can work natively in stereo, multichannel or high order ambisonics mode with the flick of a switch, allowing the same compositions to be used in different sound systems.


## [Faug](https://github.com/t2techno/Faug)

<div><a href="https://github.com/t2techno/Faug"><img  width="60%" class="mx-auto d-block" src="img/faug.png"></a>  </div>

A Minimoog Model D emulation with the DSP portion written in Faust and using [JUCE](https://www.juce.com) framework. Moog + Faust = Faug.


## [Striso Studio](https://github.com/markmarijnissen/strisostudio)

<div><a href="https://github.com/markmarijnissen/strisostudio"><img  width="40%" class="mx-auto d-block" src="img/virtual-striso.png"></a>  </div>

A [virtual Web version](https://strisostudio.web.app/board/) of the [Striso](http://www.striso.org) board, using the Faust WebAssembly [compiled sythesizer code](https://github.com/markmarijnissen/strisostudio/tree/main/static). 

## [Sttera](https://github.com/luisArandas/xperimus)

<div><a href="https://github.com/luisArandas/xperimus"><img  width="60%" class="mx-auto d-block" src="img/sttera1.png"></a>  </div>

A Software for Audio Recognition and Orchestration as Medium for Music Ritual. Faust WebAssembly library [is used](https://github.com/luisArandas/xperimus/blob/master/static/scripts/main/main.js) internally with the [faust2webaudio](https://github.com/grame-cncm/faust2webaudio) project.

## [XUiDesigner](https://github.com/brummer10/XUiDesigner)

<div><a href="https://github.com/brummer10/XUiDesigner"><img  width="50%" class="mx-auto d-block" src="img/XUiDesigner.png"></a>  </div>

A WYSIWYG LV2 X11UI GUI creator tool.  Provide a easy to use GUI generator tool to create X11 UI's for LV2 plugins. Currently only libxputty is supported, but the generated GUI C file could be used probably with other widget tool-kits as well, just a wrapper file is needed to translate the generated file to the needs of a toolkit.

XUiDesigner could now parse faust (.dsp) files and generate a full LV2 Bundle for them. A faust (.dsp) file could be given by the command-line parameter -f or simply by drag it on the Designer window. It will create all control widgets which you could then rework to your needs before you save your Bundle.


## [DSP Speech Processor](http://homepages.ihug.com.au/~daz2002/tech/Faust/proc.html)

<div><a href="http://homepages.ihug.com.au/~daz2002/tech/Faust/proc.html"><img  width="40%" class="mx-auto d-block" src="img/speech-processor.png"></a>  </div>

A Faust based DSP Speech Processor. Based on the Daz DSP v2.1 Speech Processor firmware, with improvements. Compiled into Webassembly format. Runs in a web browser! 


## [Squaring Loop Synchronous AM ISB Demodulator](http://homepages.ihug.com.au/~daz2002/tech/Faust/AM.html)

<div><a href="http://homepages.ihug.com.au/~daz2002/tech/Faust/AM.html"><img  width="100%" class="mx-auto d-block" src="img/demodulator.png"></a>  </div>

This demodulator uses a squaring loop to regenerate the AM carrier from the sidebands during signal fades. This allows it to maintain carrier lock even without a carrier! The squaring loop multiplies the signal with itself, causing a 2F carrier to be generated. Carrier + carrier = 2F. LSB + USB = 2F.

## [eurorack-blocks](https://github.com/ohmtech-rdi/eurorack-blocks)

<div><a href="https://github.com/ohmtech-rdi/eurorack-blocks"><img  width="20%" class="mx-auto d-block" src="img/eurorack-blocks.png"></a>  </div>

The eurorack-blocks project allows to develop your own custom Eurorack module for either prototyping or fun in the comfort of your day-to-day IDE with the C++ or [Faust language](https://github.com/ohmtech-rdi/eurorack-blocks/tree/main/samples/faust), or using the Cycling '74 Max environment, testing and debugging in a virtual Eurorack environment, and when ready, to auto-magically generate all the needed files to manufacture the eurorack module for you to use in a real Eurorack modular system.

## [GameLAN](https://github.com/grame-cncm/GameLAN)

<div><a href="https://github.com/grame-cncm/GameLAN"><img  width="25%" class="mx-auto d-block" src="img/Gamelan.png"></a>  </div>

GameLAN is a set of musical applications designed by [Grame](https://www.grame.fr), National Center of Musical Creation. They are based on [Faust technology](https://faust.grame.fr/) and have been designed to be played using only the movements of the smartphone. No musical prerequisite, only your gestures will make you a musician!


## [Screamer](https://github.com/mzuther/Screamer)

<div><a href="https://github.com/mzuther/Screamer"><img  width="80%" class="mx-auto d-block" src="img/Screamer.png"></a>  </div>

Version 1.0 is the [accurate Faust reproduction](https://github.com/mzuther/Screamer/tree/master/modules) of a VST plug-in written in 2003. In later versions, the parameter ranges is modified  and some new functionality are added.

This signal mangler features a weird kind of overdrive (see source code for exact formula), a hard-clip distortion, LFO-modulated bit reduction and the possibility of calculating the modulo of a signal.


## [Typebeat](https://github.com/kofigumbs/typebeat)

<div><a href="https://github.com/kofigumbs/typebeat"><img  width="50%" class="mx-auto d-block" src="img/typebeat.png"></a>  </div>

Typebeat is a virtual groovebox that’s entirely keyboard-operated. Typebeat draws inspiration from two computing environments. Effects are developped in Faust then generated as [Rust modules](https://github.com/kofigumbs/typebeat/tree/main/src/effects). 

## [AFDN-reverb](https://github.com/nickgang/AFDN-reverb)

(High-Order) Ambisonics Feedback Delay Network Reverb. Code is [developed in Faust](https://github.com/nickgang/AFDN-reverb/tree/master/Source/Faust) and Max. 

## [Karpsichord](https://github.com/spaskalev/karpsichord/)

<div><a href="https://github.com/spaskalev/karpsichord/"><img  width="80%" class="mx-auto d-block" src="img/karpsichord.png"></a>  </div>

A virtual harpsichord based on Karplus-Strong string synthesis, implemented [in Faust](https://github.com/spaskalev/karpsichord/blob/main/karpsichord.dsp) and [running in the Web](https://spaskalev.com/Karpsichord/ ).

## [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)

Some basic header-only C++ classes that can be used for Audio Processing provided as Arduino Library. A simple Interface class to use Faust with Arduino Audio Tools [is provided](https://www.pschatzmann.ch/home/2022/04/22/using-faust-dsp-with-my-arduino-audio-tools/). Code can be written [using Faust](https://github.com/pschatzmann/arduino-audio-tools/wiki/Examples#faust-dsp).

## [Organelle](https://www.critterandguitari.com/organelle)

<div><a href="https://www.critterandguitari.com/organelle"><img  width="70%" class="mx-auto d-block" src="img/organelle.jpg"></a>  </div>

The Organelle makes it easy to explore new sounds and experiment with new ways of making music. It combines playful and intuitive controls with a powerful and flexible sound engine. The result is an instrument that is limitless in musical possibility and a joy to play.

At the heart of the Organelle's sound engine is a robust computer that runs patches. A patch allows the instrument to take on different forms. Onboard hardware for sound input and output and mappable knobs, keys and buttons enable patches to synthesize, sample, effect, and anything in between!

The Organelle can be programed with Faust as explained [here](https://forum.critterandguitari.com/t/faustgen-for-max7/1586) and with this [PD external using Faust](https://forum.critterandguitari.com/t/playing-patching-with-pd-and-organelle/8260/7). 

## [Zrythm](https://github.com/zrythm/zrythm)

<div><a href="https://github.com/zrythm/zrythm"><img  width="60%" class="mx-auto d-block" src="img/zrythm.png"></a>  </div>

Zrythm is a digital audio workstation designed to be featureful and easy to use. It offers streamlined editing workflows with flexible tools, limitless automation capabilities, powerful mixing features, chord assistance and support for various plugin and file formats. A set of [Faust effects](https://github.com/zrythm/zrythm/tree/master/data/plugins) are compiled as [LV2 plugins](https://github.com/zrythm/zrythm/tree/master/data/plugins/generated) and included in the application.

## [Patches for the OWL Pedal/Eurorack Module](https://github.com/olilarkin/OL-OWLPatches)

This is a collection of patches written or ported specifically for the OWL. Most of them were written using FAUST and if you want to modify them you'll need to have a working FAUST installation. C++ source code (the .hpp files) for the OWL can be generated by running the "updateFaustPatches.py" python script. Then you will need to rebuild the OWL firmware and upload it to the device.

## [Kiwi](https://github.com/Musicoll/Kiwi)

<div><a href="https://github.com/Musicoll/Kiwi"><img  width="60%" class="mx-auto d-block" src="img/kiwi.png"></a>  </div>

Kiwi is a graphical programming environment dedicated to music and sound creation, such as Max or Pure Data softwares, but offering a real-time collaborative approach: Kiwi allows several distant users to work simultaneously on the same patch hosted online.

Kiwi is part of the French ANR-funded MUSICOLL project that unites the CICM and OhmForce. The main goal of this project is to study how collaboration can enhance the way digital audio music composition is taught and more generally how it can renew music creation practices and improve its workflow.

Faust DSP programs can be dynamically compiled as objects included in the patch. An extended presentation of the system can be found in this [IFC 2020 paper](https://ifc20.sciencesconf.org/332586/document).

## [Brainwave Virtual Instrument](https://github.com/nicodaleman/brainwave_virtual_instrument)

<div><a href="https://github.com/nicodaleman/brainwave_virtual_instrument"><img  width="40%" class="mx-auto d-block" src="img/BVIGUI.png"></a>  </div>

The Brainwave Virtual Instrument (BVI) is an open-source software synthesizer built in the programming language Faust. Its purpose is to facilitate the exploration of electroencephalogram (EEG) and other brain data through sonification. Pre-recorded data is translated as parameter controls of the instrument in the form of Open Source Control (OSC) messages that are generated and streamed by a small python program. 

The instrument can easily be distributed and compiled to different targets thanks to Faust’s flexibility. Frequency Modulation synthesis provides a comprehensive approach to textural parameters of sounds, so that musical composition and improvisation based on a creative use of brain data become feasible. This is exemplified by the Brainwave Etudes (BE), a series of compositions inspired by measurements of brain activity during different states of mind. 

The BVI was created for two major purposes: on the one hand, to find musical structures that relate to each other in order to present an aesthetic proposal, and on the other, to create a tool that familiarizes scientists and researchers in the field of neuroscience with sonification techniques, and the exploration of brain activity through sound. An extended presentation of the system can be found in this [IFC 2020 paper](https://ifc20.sciencesconf.org/332720/document).

## [Mephisto](https://github.com/aonurdemir/Mephisto)

Mephisto is a transpiler for converting sound patches designed using the graphical computer music environment Pure Data to the functional DSP programming language Faust. Faust itself compiles into highly-optimized C++ code. The aim of the transpiler is to enable creating highly optimized C++ code embeddable in games or other interactive media for sound designers, musicians and sound engineers.

## [weather_organ](https://github.com/myklemykle/weather_organ)

<div><a href="https://github.com/myklemykle/weather_organ"><img  width="50%" class="mx-auto d-block" src="img/weather_organ.png"></a>  </div>

Weather Organ is a Faust instrument for manipulating sparse noise to imitate slowly-changing natural sound sources such as rain, wind, surf, fire, Geiger counters and volcanic activity, and to create interesting new textures of sound. It is the product of various discoveries made while using Faust to explore the definition, synthesis and experience of acoustic noise while, simultaneously using the exploration of noise as as focus for learning Faust.

## [Genius Eurorack Module](https://www.rebeltech.org/product/genius/)

<div><a href="https://www.rebeltech.org/product/genius/"><img  width="20%" class="mx-auto d-block" src="img/genius.jpg"></a>  </div>

The Genius is the next evolutionary step for the OWL platform, and the first product released based on a Cortex M7 microcontroller. It runs the OWL firmware and so can be programmed with Faust. A demo running bells from thee [physical library](https://faustlibraries.grame.fr/libs/physmodels/) can be [listened to here](https://www.youtube.com/watch?v=AnytPyN9mLE&feature=emb_imp_woyt). 


## [Dataflow Based FPGA Program Synthesis](https://github.com/jgelfman/Dataflow-Based-FPGA-Program-Synthesis-Capstone)

<div><a href="https://github.com/jgelfman/Dataflow-Based-FPGA-Program-Synthesis-Capstone"><img  width="70%" class="mx-auto d-block" src="img/Dataflow-FPGA.png"></a>  </div>

A Yale-NUS BSc. (Hons) in Mathematical, Computational, and Statistical Sciences Capstone: an FPGA Program Generator written in Python that takes dsp-sig XML Dataflow Graphs created using FAUST to produce FPGA programs in VHDL.

## [DSPedal](https://github.com/jmiskovic/DSPedal)

<div><a href="https://github.com/jmiskovic/DSPedal"><img  width="50%" class="mx-auto d-block" src="img/DSPedal.png"></a>  </div>

DSPedal is a custom hardware platform for real-time sound effects. It is operated by few knobs, external expression pedal, couple of buttons and a small graphical LCD.

Processing effect is written in Faust programming language and compiled into C code. So far the Cortex M4 core clocked at 204 MHz has proven to be capable of executing relatively complex effects like wah, but effect-chaining quickly reaches the limits of processing power.

## [Tambura](https://github.com/olilarkin/Tambura)

<div><a href="https://github.com/olilarkin/Tambura"><img  width="50%" class="mx-auto d-block" src="img/Tambura.png"></a>  </div>

Waveguide physical model of an Indian Tambura/Tanpura. This is a FAUST patch inspired by the Indian Tambura/Tanpura - a four string drone instrument, known for its unique rich harmonic timbre.

The model uses a few tricks to produce a Tambura-like sound, and should probably be referred to as a "pseudo" physical model, because it does not attempt to accurately recreate the physics of the string-bridge interaction. It includes a range of parameters selected to allow control of the qualities of the excitation/pluck, string behavior and sympathetic resonance. It can produce some beautiful evolving drones, which can vary from very synthetic to quite natural. The model can be [tested here](https://olilarkin.github.io/Tambura/). 

## [drumbox](https://drumbox.app/)

<div><a href="https://drumbox.app/"><img  width="30%" class="mx-auto d-block" src="img/drumbox.png"></a>  </div>

drumbox is a fun and powerful drum synthesizer for your Android device. Start from a preset and tweak the sounds and appearance to make it your own.
Freestyle on the drum pads, record a sequence or both...it's up to you! 

## [Granola](https://github.com/jlp6k/faust-things)

<div><a href="https://github.com/jlp6k/faust-things"><img  width="50%" class="mx-auto d-block" src="img/Granola.png"></a>  </div>

Granola is a monophonic granular live feed processor. The grain processor is inspired by the Mutable Instruments Beads. The grain window shape control is inspired by the GR-1 Granular synthesizer from Tasty Chips Electronics. The DSP code is written in Faust.

## [fverb](https://github.com/jpcima/fverb)

<div><a href="https://github.com/jpcima/fverb"><img  width="25%" class="mx-auto d-block" src="img/fverb.png"></a>  </div>

A stereo variant of the reverberator by Jon Dattorro coded in Faust. 

## [Sonification](https://github.com/face2Sato/Sonification)

<div><a href="https://github.com/face2Sato/Sonification"><img  width="50%" class="mx-auto d-block" src="img/sonification.png"></a>  </div>

This study has been developed as a proof-of-concept for data pattern sonification. We've implemented data pattern sonification using FM synthesis coded in Faust. Air pollution data, which is temporal, is retrieved from the server and is done pattern mining. Then  pattern data sonification is done.

## [GULA Plugins](https://github.com/steveb/gula-plugins)

A collection of guitar effect LV2 plugins ([The Vibey](https://github.com/steveb/gula-plugins#the-vibey), [The Splits](https://github.com/steveb/gula-plugins#the-splits), [The Fades](https://github.com/steveb/gula-plugins#the-fades), [SSaP Tone](https://github.com/steveb/gula-plugins#ssap-tone), [Sweabed](https://github.com/steveb/gula-plugins#sweabed), [Pequed](https://github.com/steveb/gula-plugins#pequed), [Peak audio to CV](https://github.com/steveb/gula-plugins#peak-audio-to-cv), [LFO CV](https://github.com/steveb/gula-plugins#lfo-cv)) with [MOD Devices](https://www.moddevices.com) user interfaces.

## [limiterStereo](https://github.com/dariosanfilippo/limiterStereo)

<div><a href="https://github.com/dariosanfilippo/limiterStereo"><img  width="50%" class="mx-auto d-block" src="img/limiterStereo.png"></a>  </div>

Yet another look-ahead limiter code in Faust. The novel aspect of this limiter is that it uses N cascaded one-pole filters for amplitude profiling, which improves smoothness in the first to N-1 order derivatives and reduces total harmonic distortion. This design uses four cascaded one-pole lowpass filters, following the cut-off correction formula (8.9) found in [Zavalishin 2012].  

## [Web Audio Modules](https://github.com/webaudiomodules)

<div><a href="https://github.com/webaudiomodules"><img  width="65%" class="mx-auto d-block" src="img/wam-modules.png"></a>  </div>

Web Audio Modules are an open source framework facilitating the development of high-performance Web Audio plugins (instruments, realtime audio effects and MIDI processors). They can be developed using JavaScript and Web standards or compiled from C, C++ code, and domain-specific languages such as Faust or Csound.
The [Faust Web IDE](https://faustide.grame.fr) contains an integrated GUI builder, read a [tutorial here](https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit?usp=sharing).

## [Kapitonov Plugins Pack](https://github.com/olegkapitonov/Kapitonov-Plugins-Pack)

<div><a href="https://github.com/olegkapitonov/Kapitonov-Plugins-Pack"><img  width="45%" class="mx-auto d-block" src="img/Kapitonov.jpg"></a>  </div>

Set of 7 plugins for guitar sound processing, compiled in LADSPA and LV2 formats. Compatible with hosts such as Ardour, Qtractor, Carla, guitarix, jack-rack. The DSP of all of them is written in Faust.

## [tubeAmp Designer](https://github.com/olegkapitonov/tubeAmp-Designer)

<div><a href="https://github.com/olegkapitonov/tubeAmp-Designer"><img  width="50%" class="mx-auto d-block" src="img/tAD.jpg"></a>  </div>

Standalone software guitar processor, editor of *.tapf profile files for tubeAmp (KPP) and guitar amp profiler.

## [BioSignals](https://github.com/pingdynasty/BioSignals)

<div><a href="https://github.com/pingdynasty/BioSignals"><img  width="50%" class="mx-auto d-block" src="img/BioSignalsTop.png"></a>  </div>

BioSignals is a data aquisition and processing device for EMG, ECG and EEG signals. Since it is using the [OpenWare](https://github.com/pingdynasty/OpenWare) firmware, it can be programmed with Faust.

## [Scale it](https://github.com/pavelhusa/Scaleit)

<div><a href="https://github.com/pavelhusa/Scaleit"><img  width="45%" class="mx-auto d-block" src="img/ScaleIt.png"></a>  </div>

*Scale it* is an open source program (written in graphical programming language Pure data and in Faust) that allows sonification of a signal distribution in real time. There are two different possibilities of sonification of the signal. One of the objects, tone, generates changes in pitch of a monophonic tone. The other object, chord, expresses the input value in width of polyphony. 

*Scale it*  is being developed primarily for neurofeedback purposes. To allow straightforward and customizable instruments to carry sonic feedback about EEG activity in specific regions of the neocortex.

## [JackTrip](https://www.jacktrip.com)

<div><a href="https://www.jacktrip.com"><img  width="40%" class="mx-auto d-block" src="img/jacktrip.png"></a>  </div>

[JackTrip](https://github.com/jacktrip/jacktrip) is a Linux, macOS, or Windows multi-machine audio system used for network music performance over the Internet. It supports any number of channels (as many as the computer/network can handle) of bidirectional, high quality, uncompressed audio signal streaming. Several DSP effects ([compressor](https://github.com/jacktrip/jacktrip/blob/main/faust-src/compressordsp.dsp), [freeverb](https://github.com/jacktrip/jacktrip/blob/main/faust-src/freeverbdsp.dsp), [zitarev](https://github.com/jacktrip/jacktrip/blob/main/faust-src/zitarevdsp.dsp), [limiter](https://github.com/jacktrip/jacktrip/blob/main/faust-src/limiterdsp.dsp)) are written in Faust,  compiled as C++ code, and included in [project sources](https://github.com/jacktrip/jacktrip/tree/main/src).

## [Level Rider](https://github.com/unicornsasfuel/levelrider)

<div><a href="https://github.com/unicornsasfuel/levelrider"><img  width="40%" class="mx-auto d-block" src="img/level-rider.png"></a>  </div>

This is an audio plugin [written in Faust](https://github.com/unicornsasfuel/levelrider/blob/main/levelrider.dsp) that automates gain level adjustments, based on a target gain level, a time window over which overall loudness is calculated via RMS, and a maximum adjustment threshold.

This plugin is comparable to Waves Vocal Rider or Waves Bass Rider in its functionality, but is free and open-source.

## [Whetstone Transient Shaper](https://github.com/unicornsasfuel/whetstone)

<div><a href="https://github.com/unicornsasfuel/whetstone"><img  width="30%" class="mx-auto d-block" src="img/whetstone.png"></a>  </div>

A free, open source transient shaping audio plugin that operates on a specified frequency band. Whetstone will extract a certain frequency band based on a low cutoff and high cutoff that you choose, apply transient shaping to it, and then reintegrate the shaped band back into the original signal. 

This plugin is meant to be comparable to the excellent Spiff plugin in its core functionality, but lacks many of the nice features and polished UI. The DSP is [coded in Faust](https://github.com/unicornsasfuel/whetstone/blob/main/whetstone.dsp).

## [Reverb Trickery](https://github.com/unicornsasfuel/reverb_trickery)

<div><a href="https://github.com/unicornsasfuel/reverb_trickery"><img  width="35%" class="mx-auto d-block" src="img/reverb-trickery.png"></a>  </div>

A free, open source audio plugin implementing various creative reverb effects, including octave-shifted, distorted, hi-pass/low-passed, gated, and narrowing reverb, [coded in Faust](https://github.com/unicornsasfuel/reverb_trickery/blob/main/reverbtrickery.dsp).

## [b259wf](https://github.com/yorgoszachos/b259wf)

<div><a href="https://github.com/yorgoszachos/b259wf"><img  width="40%" class="mx-auto d-block" src="img/b259wf.png"></a>  </div>

This is a model of the "tibre" circuit of the Buchla 259 Complex Wave Generator, made in [Faust](http://faust.grame.fr/). The model follows the circuit modelling
as seen on the paper  [Virtual Analog Buchkla 259 wavefolder](http://www.dafx17.eca.ed.ac.uk/papers/DAFx17_paper_82.pdf), using 5 folds. 

The proposed 2-point BLAMP antialiasing method has been attempted for arbitrary sources as shown [here](http://dafx16.vutbr.cz/dafxpapers/18-DAFx-16_paper_33-PN.pdf), but it is
not sufficient for high frequencies and/or more complex signals. Instead, filtering and light cubic nonlinearity distiorion has been used to round corners and for
clipping. 

The user interface consists of the controls **fold** for the folding amount, **offset** for offseting the signal before folding, and **lowpass** as a final stage one-pole filtering to control the character (too much folding might introduce unwanted higher harmonics for certain signals). The final output is dc-blocked.

## [string-machine](https://github.com/jpcima/string-machine)

<div><a href="https://github.com/jpcima/string-machine"><img  width="70%" class="mx-auto d-block" src="img/string-machine.png"></a>  </div>

This is a virtual-analog string ensemble synthesizer. The implementation is based on a digital model designed by Peter Whiting. The improvement of the model adds various abilities, in particular a virtual-analog emulation of the bucket brigade delay circuit. Most of the [DSP code](https://github.com/jpcima/string-machine/tree/master/sources/dsp) is developed using Faust. Three VST or LV2 are generated: **string-machine**, **string-machine-chorus** and **string-machine-chorus-stereo**. 

## [metaFx](https://github.com/dblanchemain/metaFx)

<div><a href="https://github.com/dblanchemain/metaFx"><img  width="35%" class="mx-auto d-block" src="img/metaFx.png"></a>  </div>

The [metaFx](http://blanchemain.info/Documents/Programmation/index.php?page=metaFx) is a control surface for continuous sound transformations in real time, just like the metaSurface64.

Like [metaSurface64](https://faust.grame.fr/community/made-with-faust/#metasurface64), it has both its own loop generator and a multi-effects FX engine, but its operation is different, especially for the management of plugin chains and pads.

Each mixer on this surface can directly control the gain and the attached plug-ins. It is also possible to control the tracks of an external sequencer (Ardour or Reaper). To do this, the application uses OSC controllable modules that come from the Faust language library that is embedded in the application. Its interest lies in the construction of a parallel sound processing chain in the form of a graph.

## [Kymatica.com](http://kymatica.com)

<div><a href="http://kymatica.com"><img  width="35%" class="mx-auto d-block" src="img/kymatica.png"></a>  </div>

Jonatan Liljedahl at [Kymatica AB](http://kymatica.com) makes iOS music apps, electronic music, and a little bit of audio hardware. The following [iOS applications](http://kymatica.com/apps/) have DSP code developed using Faust:

- [AU3FX:Push](http://kymatica.com/apps/au3fx_push): AUv3 dynamics processor with noise gate, compressor/expander with external side-chain input, brick-wall look-ahead limiter and hard/soft clipper.

- [AU3FX:Space](http://kymatica.com/apps/au3fx_space): High quality tweakable AUv3 reverb with resonant filters. For everything between small rooms, resonators, and infinitely large spaces.

- [AU3FX:Dub](http://kymatica.com/apps/au3fx_dub): Stereo AUv3 delay effect for everything from clean digital delays to filthy dub echoes, ping-pong flangers, and broken cassette tapes.

- [AUFX:PeakQ](http://kymatica.com/apps/aufx_peakq): A versatile 4-band parametric stereo equalizer for everything between subtle frequency enhancements and agressive boosting/cutting or special resonator effects.

## [Nemesis](https://github.com/modularev/Nemesis)

<div><a href="https://github.com/modularev/Nemesis"><img  width="50%" class="mx-auto d-block" src="img/nemesis.jpg"></a>  </div>

Nemesis is multichannel dsp platform for eurorack. It can be [programmed with Faust](https://github.com/modularev/Nemesis/tree/main/software). 

## [Sonobus](https://sonobus.net)

<div><a href="https://sonobus.net"><img  width="50%" class="mx-auto d-block" src="img/sonobus.png"></a>  </div>

SonoBus is an easy to use application for streaming high-quality, low-latency peer-to-peer audio between devices over the internet or a local network. Several DSP effects ([Compressor](https://github.com/sonosaurus/sonobus/blob/main/Source/faustCompressor.h), [Expander](https://github.com/sonosaurus/sonobus/blob/main/Source/faustExpander.h), [Limiter](https://github.com/sonosaurus/sonobus/blob/main/Source/faustLimiter.h), [ParametricEQ](https://github.com/sonosaurus/sonobus/blob/main/Source/faustParametricEQ.h), [Reverb](https://github.com/sonosaurus/sonobus/blob/main/Source/zitaRev.h)) have been [written in Faust](https://github.com/sonosaurus/sonobus/tree/main/scripts), compiled as C++ code, and included in the [JUCE project](https://github.com/sonosaurus/sonobus). 

## [XPlugs.lv2](https://github.com/brummer10/XPlugs.lv2)

<div><a href="https://github.com/brummer10/XPlugs.lv2"><img  width="45%" class="mx-auto d-block" src="img/HarmonicExciter.png"></a>  </div>

This repository contain the LV2 plugins developed using libxputty/XUidesigner. The included makfile allows the build of all plugins against a single checkout of libxputty. Each plugin exists as its own submodule under this repository. Some of the DSP code has been written with Faust.

## [Bass Preamp Drive](https://github.com/jujudusud/BPD)

<div><a href="https://github.com/jujudusud/BPD"><img  width="40%" class="mx-auto d-block" src="img/ampeg.jpeg"></a>  </div>

The goal of this project is to digitally reproduce the behavior of a well-known electric bass preamp: Ampeg SVT3 Pro. This preamp has been copied by several manufacturers. So we have an almost perfect copy with the Bugera BVP5500 which has four preamplifier tubes. An analog copy is also available as a pedal, the Tech 21 BDDI. The project is based on advances in the simulation of analog circuits made available by the Guitarix project and the excellent Faust from Grame cncm.

## [Drum Module](https://github.com/andreaco/miosix-drum)

<div><a href="https://github.com/andreaco/miosix-drum"><img  width="50%" class="mx-auto d-block" src="img/drum-module.jpeg"></a>  </div>

This project aims at integrating a digital drum synthesizer [using Faust](https://andreaco.github.io/miosix-drum/) and Miosix real time OS on an STM32F407VG Discovery Board. To do this, a user interface by means of buttons, sliders, encoders, and an LCD has been implemented to control the synthesizer. Moreover, a serial MIDI input port has been added in order to control the synthesizer externally by using an external sequencer or controller.

## [Daisy based audio boards](https://www.electro-smith.com/daisy)

<div><a href="https://www.electro-smith.com/daisy"><img  width="35%" class="mx-auto d-block" src="img/daisy.png"></a>  </div>

Daisy is an embedded platform for music. It features everything you need for creating high fidelity audio hardware devices. Just plug in a USB cable and start making sound! No soldering required. It can be programed with Faust using the [faust2daisy](https://github.com/grame-cncm/faust/tree/master-dev/architecture/daisy) tool.


## [Elk Audio OS](https://elk.audio/audio-os/)

<div><a href="https://elk.audio/audio-os/"><img  width="55%" class="mx-auto d-block" src="img/elk-audio.jpg"></a>  </div>

Elk is an Audio Operating System developed from the ground up to deliver real time audio performances in embedded systems and remote networks. It can run on [several hardware](https://elk.audio/store/). Faust can be used to [generate VST2 plugins](https://forum.elk.audio/t/writing-plugins-for-elk-using-faust/175) to run on the plaform.

## [ER-301 Sound Computer](http://www.orthogonaldevices.com/er-301.html)

<div><a href="http://www.orthogonaldevices.com/er-301.html"><img  width="40%" class="mx-auto d-block" src="img/er-301.png"></a>  </div>

The ER-301 is a voltage-controllable canvas for digital signal processing algorithms. It can be programed with Faust using the [faust2er301]( https://github.com/ljwall/faust2er301) tool and some units [are developed here](https://github.com/ljwall/er-301-units). Note that it is still a WIP, read the [discussion here](https://forum.orthogonaldevices.com/t/using-faust-for-er-301-dsp-development/5890).

## [Zynthian platform](https://zynthian.org)

<div><a href="https://zynthian.org"><img  width="50%" class="mx-auto d-block" src="img/Zynthian.png"></a>  </div>

Zynthian is a new class of musical device. A powerful multitimbral synthesizer and audio processor, capable of managing up to 16 audio chains simultaneously. Also, it's a MIDI processor and router, equipped with standard MIDI ports, USB, WIFI & wired networks.  Zynthian is a community-driven project and it's 100% open source. The Zynthian platform can be [programmed with Faust](https://francescoganassin.files.wordpress.com/2021/03/the-tale-of-faust-and-zynthian.pdf) with some [DSP examples here](https://github.com/francescoganassin/FaustDSP-synths).

## [GxPlugins.lv2](https://github.com/brummer10/GxPlugins.lv2)

<div><a href="https://github.com/brummer10/GxPlugins.lv2"><img  width="35%" class="mx-auto d-block" src="img/GxSuppaToneBender.png"></a>  </div>

GxPlugins.lv2 is a set of more than 40 extra standalone lv2 plugins designed to compliment the Guitarix project. Each plugin exists as its own submodule under this repository. The DSP code has been written with Faust.

## [Stone phaser](https://github.com/jpcima/stone-phaser)

<div><a href="https://github.com/jpcima/stone-phaser"><img  width="35%" class="mx-auto d-block" src="img/stone-phaser.png"></a>  </div>

A classic analog phaser effect. This is an analog phaser with similarity to the Small Stone. It has a color switch, which makes the phasing stronger when on, and adds some feedback controls. A stereo variant of the phaser is included. This effect is supported on MOD devices. The DSP code is [developed in Faust](https://github.com/jpcima/stone-phaser/tree/master/dsp).

## [sfizz](https://sfz.tools/sfizz/)

<div><a href="https://github.com/sfztools/sfizz"><img  width="55%" class="mx-auto d-block" src="img/sfizz.png"></a>  </div>

[sfizz](https://sfz.tools/sfizz/) is a sample-based musical synthesizer. It features the well-established SFZ instrument format at its core, which permits to use existing instrument libraries, or create personal instruments with ease. Not only is sfizz ready-to-use as an instrument plugin of its own, the library allows developers to create instruments of their own, taking advantage of the abilities of SFZ. 

The sfizz project uses the SFZ parser and synth c++ library, providing AU / LV2 / VST3 plugins and JACK standalone client. Some effects are [developed in Faust](https://github.com/sfztools/sfizz/tree/master/src/sfizz/effects/dsp) are well as [several filters](https://github.com/sfztools/sfizz/tree/master/src/sfizz/dsp/filters).

## [Antescofo](https://antescofo-doc.ircam.fr/UserGuide/intro/)

<div><a href="https://antescofo-doc.ircam.fr/UserGuide/intro"><img  width="55%" class="mx-auto d-block" src="img/antescofo.png"></a>  </div>

Antescofo is a coupling of a real-time listening machine with a reactive and timed synchronous language developed at [IRCAM](https://www.ircam.fr). The language is used for authoring of music pieces involving live musicians and computer processes, and the real-time system assures its correct performance and synchronization despite listening or performance errors. Antescofo audio DSP processes [can be described with Faust](https://hal.archives-ouvertes.fr/hal-01257524/document), using libfaust dynamic version of the Faust compiler. 

## [Motion Vox](https://motionvox.app/)

<div><a href="https://motionvox.app/"><img  width="35%" class="mx-auto d-block" src="img/motionvox.png"></a>  </div>

A mobile music creation and performance workstation with a built-in motion-based controller, sequencer and synthesis engine. The controller unites XY pad, accelerometer and gyroscope events with complex data ﬁltering engine. Performance process consists of touching the active area on the screen with the index finger and moving the cursor while moving the device in space. Smartphone position in space and finger movement on a screen affect various parameters of sound or generate realtime MIDI output. The app was inspired by the SmartFaust project of GRAME. The audio engine of the app is made with FAUST.


## [INScore](https://inscore.grame.fr)

<div><a href="https://inscore.grame.fr"><img  width="70%" class="mx-auto d-block" src="img/inscore.jpg"></a>  </div>

INScore is an open source framework for the design of interactive, augmented, live music scores. Augmented music scores are graphic spaces providing representation, composition and manipulation of heterogeneous and arbitrary music objects (music scores but also images, text, signals...), both in the graphic and time domains. Audio DSP processes and effects can be described using Faust. 
The environment runs as a native application but also in the Web. Faust programs are only supported by the [online version](https://inscoreweb.grame.fr).

## [Virtual Rhizome](https://www.vrcarinola.com/virtual-rhizome)

<div><a href="https://www.youtube.com/watch?v=cGZB44KI9Y0"><img  width="60%" class="mx-auto d-block" src="img/virtual-rhizome.png"></a>  </div>

By [Vincent Carinola](https://www.vrcarinola.com). [Virtual Rhizome](https://www.vrcarinola.com/virtual-rhizome) responds to a proposal by [Christophe Lebreton and Jean Geoffroy](https://www.lisilog.com/shc/) to compose a work for the original Smart Hand Computer system, developed at the GRAME-CNCM using the Faust language and allowing to play smartphones as an instrument.

The work takes the form of a labyrinth, a kind of virtual architecture that could be compared to Borges' "garden of branching paths", within which the musician evolves by adapting his gestures to the constraints of different types of situations. Each situation is characterized by an autonomous functioning of the system, that the musician must apprehend in order to find the key allowing him to modify it and to move towards another situation. But in order to orientate himself well, he must create a mental representation of the structure of the work. The performer then becomes an explorer of a world that he unveils, but isn't that what he has always been?

Virtual rhizome owes much to the availability and enthusiasm of Jean Geoffroy and Christophe Lebreton. It is amicably dedicated to them.

## [SmartFaust](https://www.grame.fr/articles/smartfaust-5d839e9c3a877)

<div><a href="https://www.grame.fr/articles/smartfaust-5d839e9c3a877"><img  width="50%" class="mx-auto d-block" src="img/smartfaust.jpg"></a>  </div>

SmartFaust is a concept of musical applications for smartphones. These applications have the particularity of only using the user's gestures and not by tapping on the device's screen. Made for iOS and Android, they can also use the motion sensors of these devices to make them real musical instruments.

Smartfaust applications are based on the Faust (Functional Audio Stream) programming language developed by Grame over the last 15 years and recognized as a standard in the field of real-time signal processing for audio. 

The SmartFaust applications were first used for the creation of the pieces Mephisto (for drums and cell phone ensemble), Belzebuth (participative piece for public equipped with Smartphones), Iblis (for clarinet and cell phone ensemble) and Bélial (for harp and cell phone ensemble) written by the composer Xavier Garcia.

From this same technology were later created the applications "Geek Bagatelles" (2016) and "GameLan" (2019).

Download here: [Android](https://play.google.com/store/search?q=smartfaust&c=apps) & [iOS](https://www.apple.com/fr/search/smartfaust?src=globalnav)

## [Trombone Simulator](https://nuchi.github.io/trombone/)

<div><a href="https://nuchi.github.io/trombone/"><img  width="60%" class="mx-auto d-block" src="img/trombone.jpg"></a>  </div>

This simulator is a physical model of a trombone. Physical models of the lips, mouthpiece, slide, and bell are digitally simulated. The controls are listed at the top. The main controls are to move the cursor (or your finger on a touch device) left and right on the picture to adjust the embouchure, and up and down to extend and retract the slide. The diagonal colored lines are a guide to where the resonances are: playing over a resonance means that the embouchure and slide length are matched. Playing over white space means that one is between resonances and the note quality won't be as good. The big gray wedge on the upper right indicates that the resonances are very close together there. The vertical dashed lines indicate the rough locations of B-flat (thick lines) and F (thin lines). Other notes are unmarked, and likewise the slide positions. (Just like on a real trombone!) The off-key resonances (7th, 11th, 13th, and 14th) are marked in red. The g and f keys can be used to growl and flutter-tongue, respectively.

The audio simulation is written in Faust, which conveniently compiles to WebAssembly and a Web Audio API wrapper. The overall approach used was a digital waveguide model, as described in J. O. Smith III's Digital Waveguide Theory. The lips and bell are adapted from F. Scott's masters thesis.


## [Integrating 1-DoF force feedback interactions in self-contained DMIs](https://escholarship.mcgill.ca/concern/theses/b5644x49k)

<div><a href="https://escholarship.mcgill.ca/concern/theses/b5644x49k"><img  width="50%" class="mx-auto d-block" src="img/thesis-kirkegaard.png"></a>  </div>

By [Mathias Kirkegaard](http://www-new.idmil.org/people/mathias-kirkegaard/). This thesis presents a system for designers of Digital Musical Instruments (DMIs) to explore the integration of 1 degree of freedom (DoF) force feedback interactions in new self-contained instruments. The system developed consists of an open-source graphical tool and a rotary force-feedback device made from commercially available components to facilitate the authoring of audio-haptic applications. Implementing an early prototype is used to inform the development of the graphical editing tool and its integration in an embedded audio-haptic environment using the functional programming language Faust for real-time signal processing.

## [Beyond Key Velocity: Continuous Sensing for Expressive Control on the Hammond Organ and Digital Keyboards](http://instrumentslab.org/data/giulio/giulioMoroThesis.pdf)

<div><a href="http://instrumentslab.org/data/giulio/giulioMoroThesis.pdf"><img  width="50%" class="mx-auto d-block" src="img/thesis-moro.png"></a>  </div>

By [Giulio Moro](https://scholar.google.co.uk/citations?user=1P92P3kAAAAJ&hl=en). In this thesis we seek to explore the potential for continuous key position to be used as an expressive control in keyboard musical instruments, and how pre- existing skills can be adapted to leverage this additional control. The nonlinear waveguide physical model of a flute has been developed in Faust.


## [Guide de la synthèse sonore](https://sebastien-clara.github.io/guide_de_la_synthese_sonore/index.html)

<a href="https://sebastien-clara.github.io/guide_de_la_synthese_sonore/index.html"><img  width="60%" class="mx-auto d-block" src="img/guide-clara.png"></a>  

By [Sebastien Clara](https://sebastienclara.wordpress.com/). In this guide, I try to demystify how sound synthesis works. To do so, I present the fundamental principles of sound synthesis. I accompany these explanations with small sound applications that you can manipulate in your web browser and thus, you will be able to notice the impact of a parameter on the sound.

Most of the sound examples are written in Faust and run in the web pages. This guide is currently only in french.

## [PICO DSP](https://www.crowdsupply.com/ohmic/pico-dsp)

<a href="https://www.crowdsupply.com/ohmic/pico-dsp"><img  width="60%" class="mx-auto d-block" src="img/pico-dsp.png"></a>  

PICO DSP is an open-source, Arduino-compatible ESP32 development board for audio and digital signal processing (DSP) applications. It offers an expansive audio-processing feature set on a small-format, breadboard-friendly device that provides audio inputs, audio outputs, a low-noise microphone array, an integrated test-speaker option, additional memory, battery-charge management, and ESD protection all on one tiny PCB. The board can be programmed [using Faust](https://github.com/ohmic-net/pico_dsp).


## [Soundjack](https://www.soundjack.eu)

<a href="https://www.soundjack.eu"><img  width="50%" class="mx-auto d-block" src="img/soundjack.png"></a>  

The Soundjack realtime communication application is extended by a server cloud to handle up to 60 musicians of an orchestra, developed with the Faust programming language.  Each musician is connected to a Soundjack UDP client. An individual stereo mix of the multiple audio streams originating from the multiple Soundjack clients has to be provided to each listening musician. An extended presentation of the system can be found in this [IFC 2018 paper](http://www.ifc18.uni-mainz.de/papers/kuhr.pdf).

## [studiox-switcher](https://github.com/Frando/studiox-switcher)

<a href="https://github.com/Frando/studiox-switcher"><img  width="22%" class="mx-auto d-block" src="img/studiox-switcher.png"></a>  

 Studiox-switcher is an input switcher and silence detector for JACK. It can switch between 3 stereo inputs, a fallback channel is activated if the active input is below a volume threshold for some amount of seconds, and channels may be switched via OSC and HTTP. The core DSP engine is done via Faust for switching, silence detection and level metering.

## [SynthSpace](https://synthspace.rocks)

<a href="https://synthspace.rocks"><img  width="60%" class="mx-auto d-block" src="img/synthspace.png"></a>  

Synthspace is the ultimate virtual synthesizer. It combines the familiarity of real instruments with the possibilities of virtual worlds. Nodes for  Synthspace [can be developed in Faust](https://github.com/brightlightrx/synthspace-audio-layer). 

## [Bass21](https://github.com/jpcima/Bass21)

<a href="https://github.com/jpcima/Bass21"><img  width="70%" class="mx-auto d-block" src="img/bass21.png"></a>  

This VST3 is a virtual-analog simulation of the famous Bass Driver DI Version 1 preamp pedal from Tech21. The discretization, while far from being exact, is moderately close to the original.
The potentiometers are identical to these physically present on the BDDI pedal, apart from the pregain which is specific to this digital version. The DSP code is written in Faust.

## [EchoMatrix](https://improvoid.github.io)

<a href="https://improvoid.github.io"><img  width="40%" class="mx-auto d-block" src="img/echomatrix.png"></a>  

The EchoMatrix was designed to provide some of the functionality of the Yamaha UD Stomp pedal as used be Alan Holdsworth. This project will be submitted to the KVR Developer Challenge 2021 contest to highlight the power of the Faust DSP development environment and the JUCE framework to create a non-trivial effect VST3 using a managable amount of [Faust DSP code](https://github.com/improvoid/EchoMatrix).

## [The Striso board](https://www.striso.org)

<a href="https://www.striso.org"><img  width="50%" class="mx-auto d-block" src="img/striso.jpg"></a>  

The Striso board is a very expressive music instrument which combines multidimensionally sensitive keys with an innovative note layout that helps understand the structures in music. The keys capture each subtle finger movement, which allows for levels of musical expression previously only known to acoustic instruments. Additionally, accents and sound effects can be added by shaking and moving the instrument as a whole. 

The internal sound is written in Faust, and is controlled directly by the signals from the keys and motion sensor. External synthesizers can be controlled using MPE MIDI, or using OSC which is easier to set up for Faust synthesizers. The [firmware source code](https://github.com/striso/striso-control-firmware) is released as open source.


## [Live concatenative granular processing](https://github.com/dariosanfilippo/concatenative_granulation)

<a href="https://github.com/dariosanfilippo/concatenative_granulation"><img  width="40%" class="mx-auto d-block" src="img/concatenative-granular.png"></a>  

This algorithm addresses signal discontinuity and concatenation artefacts in real-time granular processing with rectangular windowing. By combining zero-crossing synchronicity, first-order derivative analysis, and Lagrange polynomials, we can generate streams of uncorrelated and non-overlapping sonic fragments with minimal low-order derivatives discontinuities. 

The resulting open-source algorithm, implemented in the Faust language, provides a versatile real-time software for dynamical looping, wavetable oscillation, and granulation with reduced artefacts due to rectangular windowing and no artefacts from overlap-add-to-one techniques commonly deployed in granular processing.

## [fb_suppression](https://github.com/dariosanfilippo/automatic_larsen_suppression)

<a href="https://github.com/dariosanfilippo/automatic_larsen_suppression"><img  width="40%" class="mx-auto d-block" src="img/automatic-larsen.png"></a>  

ALS - Automatic Larsen Suppression algorithms implementing adaptive filtering through spectral centroid calculation, and adaptive frequency shifting through RMS calculation.

## [ossia score](https://ossia.io)

<a href="https://ossia.io"><img  width="55%" class="mx-auto d-block" src="img/ossia-score.png"></a>  

Ossia score is a sequencer for audio-visual artists, designed to enable the creation of interactive shows, museum installations, intermedia digital artworks, interactive music and more in an intuitive user interface. Faust can be used to [create advanced audio processes](https://ossia.io/score/about.html). A demo video of the Faust integration can be [seen here](https://www.youtube.com/watch?time_continue=1&v=yvTjJMrFxR0&feature=emb_logo).

## [FASELUNARE Microcosmos](http://www.faselunare.com)

<a href="http://www.faselunare.com"><img  width="55%" class="mx-auto d-block" src="img/microcosmos.png"></a>  

Microcosmos is a small open-source electronic board, developed by ​Faselunare (Italy), aimed at prototyping electronic musical instruments and learning electronics, microcontroller programming and audio DSP, and programmable with Faust. A demo video of the project can be [seen here](https://www.youtube.com/watch?v=bsdKUMoJwOM).

## [Audio Anywhere](https://muses-dmi.github.io/audio_anywhere/overview/)

<a href="https://muses-dmi.github.io/audio_anywhere/overview/"><img  width="60%" class="mx-auto d-block" src="img/audio-anywhere.png"></a>  

The goal of Audio Anywhere is to explore the idea of compile once, run anywhere for audio DSP code. Audio Anywhere combines Faust, for audio DSP code, and HTML5 to enable development of modern audio synthesis and effects tools. There are currently three main repos for this work:

- [AA examples](https://github.com/bgaster/aa_examples)
- [AA standalone app](https://github.com/bgaster/aa_standalone)
- [AA Wasmtime runtime](https://github.com/bgaster/aa_wasmtime)

## [The KeyWi](https://ccrma.stanford.edu/~mcaren/keyWI/)

<a href="https://ccrma.stanford.edu/~mcaren/keyWI/"><img  width="60%" class="mx-auto d-block" src="img/keywi-image-transparent.jpg"></a>  

An Expressive and Accessible Electronic Wind Instrument, where the sound is synthesized with Faust running on the Bela Mini processing board.

## [React Web Audio Guitar Studio](https://github.com/Kutalia/react-webaudio-5150)

<a href="https://github.com/Kutalia/react-webaudio-5150"><img  width="65%" class="mx-auto d-block" src="img/reactwebaudio5150.png"></a>  

React Web Audio Guitar Studio is an online real-time Web Audio based all-in-one guitar studio, using native plugins written on Faust, compiled on-demand, and ran in a browser.

## [JSPatcher](https://github.com/Fr0stbyteR/jspatcher)

<a href="https://github.com/Fr0stbyteR/jspatcher"><img  width="70%" class="mx-auto d-block" src="img/jspatcher.png"></a>  

JSPatcher is a Visual Programming Language (VPL) in Max/PureData style on the web with following features:

- Patch WebAudio native AudioNodes
- Play with JavaScript Web APIs
- Import and patch external JavaScript modules
- Customize AudioWorklet DSPs with Faust


A presentation video can be [seen here]( https://www.youtube.com/watch?v=ttdXz_hjbAM). 

## [Gwion](https://github.com/Gwion/Gwion)

<a href="https://github.com/Gwion/gwion-plug/tree/master/Faust"><img  width="80%" class="mx-auto d-block" src="img/gwion.png"></a>  

Gwion is a programming language aimed at making music. It is strongly inspired by [ChucK](http://chuck.stanford.edu) and can use a set of [plugins for Gwion](https://github.com/Gwion/gwion-plug). One allows to use the [libfaust](https://github.com/Gwion/gwion-plug/tree/master/Faust) library to JIT compile and run DSP code on the fly. The [faust2gw](https://github.com/Gwion/gwion-plug/tree/master/faust2gw) tool allows to produce statically compiled modules.

## sonejostudios

A set of tools written using Faust.

### [Panoramix](https://github.com/sonejostudios/Panoramix)

<a href="https://github.com/sonejostudios/Panoramix"><img  width="40%" class="mx-auto d-block" src="img/panoramix.png"></a>  

Stereo Panorama/Balance and Volume Automation Tool.

### [Mixer4x](https://github.com/sonejostudios/Mixer4x)

<a href="https://github.com/sonejostudios/Mixer4x"><img  width="40%" class="mx-auto d-block" src="img/mixer4x11.png"></a>  

A simple 4-channel stereo mixer. The main goal is to use it as a submixer on a 4 channel track, but you can use it everywhere you need a small 4 channel stereo mixer.

### [faustdrumseq](https://github.com/sonejostudios/faustdrumseq)

<a href="https://github.com/sonejostudios/faustdrumseq"><img  width="40%" class="mx-auto d-block" src="img/faustdrumseq.png"></a>  

A very simple drum sequencer written with Faust, using the new soundfile object.

### [MidiClockClick](https://github.com/sonejostudios/MidiClockClick)

<a href="https://github.com/sonejostudios/MidiClockClick"><img  width="30%" class="mx-auto d-block" src="img/midiclockclick.png"></a>  

A simple metronom driven by MidiClock.

### [SuperBeatRepeater](https://github.com/sonejostudios/SuperBeatRepeater)

<a href="https://github.com/sonejostudios/SuperBeatRepeater"><img  width="40%" class="mx-auto d-block" src="img/SuperBeatRepeater.png"></a>  

Beat Repeater with Sidechain Beat Recognation and Midi-Clock Sync. Very useful i.e to add musical diversity by looping short parts of the stream (i.e drums).

### [SuperCutSequencer](https://github.com/sonejostudios/SuperCutSequencer)

<a href="https://github.com/sonejostudios/SuperCutSequencer"><img  width="50%" class="mx-auto d-block" src="img/SuperCutSequencer.png"></a>  

Cut "On/Off" Sequencer (8 steps with smooth) synced to Midi-Clock Beats and Midi-Clock Start/Stop. Very useful i.e to add musical diversity in looped tracks (very nice with i.e bass lines).

###  [DeLooper](https://github.com/sonejostudios/DeLooper)

<a href="https://github.com/sonejostudios/DeLooper"><img  width="30%" class="mx-auto d-block" src="img/DeLooper.png"></a>  

Sample-accurate Looper/Delay with free mode and midi-clock sync mode.

### [XYMatrix](https://github.com/sonejostudios/XYMatrix)

<a href="https://github.com/sonejostudios/XYMatrix"><img  width="60%" class="mx-auto d-block" src="img/xymatrix.png"></a>  

XY Surround Matrix for one Source (Mono Input) with 4 Outputs (Left, Right, Surround Left, Surround Right) and Position Lock.

## [stm32-faust-synth](https://github.com/Jacajack/stm32-faust-synth)

<a href="https://github.com/Jacajack/stm32-faust-synth"><img  width="70%" class="mx-auto d-block" src="img/stm32synth.png"></a>  

[STM32 synthesizer video](https://www.youtube.com/watch?v=7w-DwwoFKhU) is a short presentation of a polyphonic synthesizer based on STM32F405 µC. Faust is used for signal processing and a TLV320AIC23B stereo codec serves as DAC. Another more recent video is [here](https://www.youtube.com/watch?v=sdmgSUM9pkg).

## [faustgen2~](https://github.com/agraef/pd-faustgen)

<a href="https://github.com/agraef/pd-faustgen"><img  width="60%" class="mx-auto d-block" src="img/faustgen2.png"></a>  

The faustgen2~ object is a Faust external for Pd a.k.a. [Pure Data](http://msp.ucsd.edu/software.html), Miller Puckette's interactive multimedia programming environment. 

## [Amati](https://github.com/glocq/Amati)

<a href="https://github.com/glocq/Amati"><img  width="70%" class="mx-auto d-block" src="img/amati.png"></a>  

Amati is a VST plugin for live-coding effects in the Faust programming language. As of now it only provides basic functionality. 

## [PureTones](https://puretones.sadharani.com)

<a href="https://puretones.sadharani.com"><img  width="50%" class="mx-auto d-block" src="img/puretones.png"></a>  

[PureTones](https://puretones.sadharani.com) PureTones is a family of software tools for Indian Classical music. They are built based on an in-depth study and exploration of Indian Classical music to understand the role of harmonics, microtones and consonance in Indian Ragas and musical scales:

- [PureTones Drone (using first tab)](https://puretones.sadharani.com/app/), is a digital Tanpura with controls for fine tuning the strings and adjusting their harmonic envelope.
- [PureTones Musical Scale (using second tab)](https://puretones.sadharani.com/app/) is a digital 12 note keyboard with controls for fine tuning each key to be consonant with an accompanying drone track.
- [PureTones Sequencer (using third tab)](https://puretones.sadharani.com/app/) is a sequencer which enables composition of melodies and musical works in Indian Classical music using notes from a fine tuned musical scale.

The [Ragatronics project](https://ragatronics.sadharani.com) combines Ragas from Indian Classical music with elements from Rock, Jazz and Electronic music.

All applications [have been developed](https://github.com/aravind-sadharani/puretones-music-room) using Faust and WebAudio tools.

## [Making Sound Machines](https://makingsoundmachines.com)

<a href="https://makingsoundmachines.com"><img  width="60%" class="mx-auto d-block" src="img/makingsoundmachines.png"></a>  

Making Sound Machines are a duo of makers from Düsseldorf, Germany. We build kits, modules and DIY projects, and use the projects we’ve built to make music. Faust is used in several projects.

## [master_me](https://github.com/trummerschlunk/master_me)

<a href="https://github.com/trummerschlunk/master_me"><img  width="70%" class="mx-auto d-block" src="img/master_me_gui.png"></a>  

Automatic audio mastering plugin for live-streaming, podcasting and internet radio stations.

With the first Covid-19 related lock-downs in 2020, many real-life concerts, conferences and festivals were forced into the digital domain - and sounded pretty crappy. Having worked for almost 20 years in audio mastering, Berlin based engineer Klaus Scheuermann started to develop master_me - a word fusion of automatic mastering and mini-me - in order to make open source streaming sound better. After a few weeks of learning and development, master_me was first used at the 'Quarantine Sessions' - a weekly distributed electro-acoustic improvised concert, hosted at Stanford's CCRMA Institute. 

master_me was developed further to be an easy-to-use tool for all live streaming applications. In 2022 it was funded by the Prototype Fund, an open source software funding initiative by the german ministry of education and research. A stable release is available since September 2022.

## [metaSurface64](http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface)

<a href="http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface"><img  width="60%" class="mx-auto d-block" src="img/metaSurface.png"></a>  

metaSurface64 is a real-time continuous sound transformation control surface that features both its own loop generator for up to 64 voices and a multi-effects FX engine. The application embeds the libfaust dynamic version of the Faust compiler.

## [Fragment Audio Server](https://github.com/grz0zrg/fas) and Fragment

<a href="https://github.com/grz0zrg/fas"><img  width="70%" class="mx-auto d-block" src="img/fas.png"></a>  

Fragment Audio Server (FAS) is a high performance pixels-based graphical audio synthesizer implemented as a WebSocket server with the C language (C11). [Faust](https://faust.grame.fr/), is embedded (when compiled with `WITH_FAUST`) and allow to dynamically extend FAS bank generators and effects with custom one written with the Faust DSP specification language. FAS is the audio engine used in [Fragment](https://github.com/grz0zrg/fsynth) , the Collaborative Graphical Audio Synthesizer. Follow the [demo here](https://www.youtube.com/watch?v=Tm6TkQdTYPk).

## [Swanky Amp](https://github.com/resonantdsp/swankyamp)

<a href="https://github.com/resonantdsp/swankyamp"><img  width="70%" class="mx-auto d-block" src="img/swankyamp.png"></a>  

Swanky Amp is a tube amplifier simulation DSP plugin which aims to capture the details in the dynamics of tube amplifiers. The DSP is primarily written in [Faust](https://faust.grame.fr/), whereas the UI is written in C++ using the [JUCE](https://www.juce.com). Follow the [demo here](https://www.youtube.com/watch?v=pz3v87VMQfk). A commercial version is [available here](https://www.resonantdsp.com/swankyamp/).

## [Web Synth](https://github.com/Ameobea/web-synth)

<a href="https://github.com/Ameobea/web-synth"><img  width="80%" class="mx-auto d-block" src="img/web_synth.png"></a>  

This is a web-based DAW (Digital Audio Workstation) written in Rust/WebAssembly and TypeScript with extensive Faust language integration with dynamic remote code compilation and executing via WebAssembly. Follow the [demo here](https://www.youtube.com/watch?v=DDWYhueiqOc).

## [DawDreamer](https://github.com/DBraun/DawDreamer/)

<a href="https://github.com/DBraun/DawDreamer/"><img  width="80%" class="mx-auto d-block" src="img/dawdreamer.png"></a>  

DawDreamer is an audio-processing Python framework supporting core [DAW](https://en.wikipedia.org/wiki/Digital_audio_workstation) features such as audio playback, VST MIDI instruments, VST effects, [Faust](http://faust.grame.fr/), and parameter automation. DawDreamer is written with [JUCE](https://github.com/julianstorer/JUCE), with a user-friendly Python interface thanks to [pybind11](https://github.com/pybind/pybind11). DawDreamer draws from an earlier VSTi audio "renderer", [RenderMan](https://github.com/fedden/RenderMan).

## [TD-Faust](https://github.com/DBraun/TD-Faust/)

<a href="https://github.com/DBraun/TD-Faust/"><img  width="60%" class="mx-auto d-block" src="img/touchdesigner.png"></a>  

TD-Faust enables Faust code to run inside [TouchDesigner](https://derivative.ca). Follow the [demo here](https://www.youtube.com/watch?v=0qi2lp_TgE0).

## [Mephisto LV2](https://open-music-kontrollers.ch/lv2/mephisto/)

<a href="https://open-music-kontrollers.ch/lv2/mephisto/"><img  width="50%" class="mx-auto d-block" src="img/mephisto.png"></a>  

Mephisto LV2 a Just-in-Time Faust compiler embedded in an LV2 plugin. Write LV2 audio/cv instruments/filters directly in your host in Faust DSP language without any need to restart/reload host or plugin upon code changes.

## [iPlug2](https://iplug2.github.io)

<a href="https://iplug2.github.io"><img  width="70%" class="mx-auto d-block" src="img/iplug2.png"></a>  

iPlug 2 is a simple-to-use C++ framework for developing cross platform audio plug-ins/apps and targeting multiple plug-in APIs with the same minimalistic code, support for the Faust programming language, and the libfaust JIT compiler.

## [pMix](https://github.com/olilarkin/pMix2)

<a href="https://github.com/olilarkin/pMix2"><img  class="mx-auto d-block" src="img/pmix.jpg"></a>  

pMix (short for preset mixer) is a sound design, composition and performance tool that facilitates the control of multiple parameters using an intuitive graphical interface. It includes a graphical patcher for creating a network of audio synthesis or processing nodes. A node could be a VST2, VST3, AU or LADSPA plug-in or it could a JIT compiled FAUST script. FAUST is a first class citizen in pMix and an integrated code editor and SVG display makes it a nice environment for FAUST development.

## [Temper JUCE plugin](https://github.com/creativeintent/temper)

<a href="https://github.com/creativeintent/temper"><img  width="70%" class="mx-auto d-block" src="img/temper.jpg"></a>  

Temper is a digital distortion audio plugin targeting VST, VST3, and AU for OS X and Windows. It builds upon traditional waveshaping techniques using modulated filter coefficients to produce a unique phase distortion. The primary signal processing loop is written with Faust, and compiled with JUCE for the various build targets.

## [Faust Mass-Interaction](http://mi-creative.eu/tool_miFaust.html)

<a href="http://mi-creative.eu/tool_miFaust.html"><img  class="mx-auto d-block" src="img/topo.jpg"></a>  

mi_faust implements 1D mass-interaction models in the FAUST programming language. Starting from a scripted model description (see MIMS), mi_faust compiles a physical model into FAUST code. It handles this by generating routing functions between all the masses and all the interactions in the model.

Head over to the FAUST community page to see examples of a series of instruments created in mi_faust, and available as web-apps !

## [Dynamic PedalBoard](https://wasabi.i3s.unice.fr/dynamicPedalboard/)

<a href="https://wasabi.i3s.unice.fr/dynamicPedalboard/"><img  class="mx-auto d-block" src="img/wasabi.jpg"></a>  

Dynamic PedalBoard allows users to plug different stompboxes together in a web browser.

## [SHARC DSP Board](https://wiki.analog.com/resources/tools-software/sharc-audio-module/faust)

<a href="https://wiki.analog.com/resources/tools-software/sharc-audio-module/faust"><img  class="mx-auto d-block" src="img/sam.jpg"></a>  

The ADI SHARC DSP board fully supports Faust.              

## [Nuance](https://ccrma.stanford.edu/~rmichon/nuance/)

<a href="https://ccrma.stanford.edu/~rmichon/nuance/"><img  class="mx-auto d-block" src="img/nuance.jpg"></a>  

Nuance is a pressure sensitive music controller that uses Faust for sound synthesis and processing.

## [The PlateAxe](https://ccrma.stanford.edu/~rmichon/bladeaxe/)

<a href="https://ccrma.stanford.edu/~rmichon/bladeaxe/"><img  class="mx-auto d-block" src="img/plateaxe.jpg  "></a>  

The PlateAxe is a percussion instrument physical model controller using Faust for sound synthesis and processing.

## [The BladeAxe](https://ccrma.stanford.edu/~rmichon/bladeaxe/)

<a href="https://ccrma.stanford.edu/~rmichon/bladeaxe/"><img  class="mx-auto d-block" src="img/ba.jpg"></a>  

The BladeAxe is an electric guitar physical model controller using Faust for sound synthesis and processing.

## [Bart Brouns' Projects](https://github.com/magnetophon)

<a href="https://github.com/magnetophon"><img  class="mx-auto d-block" src="img/brouns.jpg"></a>  

A collection of projects by Bart Brouns and based on Faust.

## [EarTone Toolbox](https://ccrma.stanford.edu/~chechile/eartonetoolbox/main.html)

<a href="https://ccrma.stanford.edu/~chechile/eartonetoolbox/main.html"><img  class="mx-auto d-block" src="img/eartone.jpg  "></a>  

The Ear Tone Toolbox is a collection of unit generators for the production of auditory distortion product synthesis. 

## [AudioKit](https://audiokit.io/)

<a href="https://audiokit.io/"><img  class="mx-auto d-block" src="img/audiokit.jpg"></a>  

AudioKit allows developers to quickly add professional audio functionality to iOS, macOS, and Apple Watch apps.

## [Radium](http://users.notam02.no/~kjetism/radium/)

<a href="http://users.notam02.no/~kjetism/radium/"><img  class="mx-auto d-block" src="img/radium.jpg"></a>  

Radium is a music editor with a new type of interface. It includes a Faust audio DSP development environment.

- Compared to the normal sequencer interface editing is quicker and more musical data fits on the screen. 
- Compared to trackers, note positions and effects are edited graphically, which should be quicker, provide more vertical space and give a better musically overview. (Everything can also be edited by text, like in a normal tracker)
- Radium can also be used as a normal multitracker to mix and record audio.
                  
                  
## [BELA](http://bela.io/)

<a href="http://bela.io/"><img  class="mx-auto d-block" src="img/bela.jpg  "></a>  

Bela is a maker platform for creating beautifully responsive audio and interactive applications. Designed for artists, musicians, researchers and makers, Bela brings the power of ultra-low latency interactive audio and sensors to your digital projects. It can be [programmed with Faust](https://learn.bela.io/using-bela/languages/faust-experimental/).



## [HOA Library](http://hoalibrary.mshparisnord.fr/en)

<a href="http://hoalibrary.mshparisnord.fr/en"><img  class="mx-auto d-block" src="img/hoa.jpg"></a>  

HOA Library allows musicians and composers to synthesize, transform and render sound fields in a creative and artistic way. This library facilitates the understanding and the appropriation of key concepts of ambisonics. Thanks to original graphical interfaces a lot of new signal processings are allowed like diffuse sound field synthesis, perspective distorsion or spatial filtering. HOA library is open-source and free and offers a set of C++ and [FAUST classes](http://hoalibrary.mshparisnord.fr/en/downloads/faust/) and implementation for Max, PureData and Unity.

## [Ambitools](http://www.sekisushai.net/ambitools/)

<a href="http://www.sekisushai.net/ambitools/"><img  class="mx-auto d-block" src="img/ambitools.jpg"></a>  

Ambitools is a collection of plug-ins and  tools for 3D sound field synthesis using Higher Order Ambisonics (HOA). The plugins are [written in the Faust language](http://sekisushai.net/git/sekisushai/ambitools), which allows them to be compiled for a multitude of architectures and platforms (Windows, Mac, Linux, WebAudio, embedded systems, etc.)

Moreover, the code is written in a scalable way: there is no limit to the maximum Ambisonic order! Other tools are also available, such as a 3D Visualizer written in the Processing language. 

## [Ambisonic Decoder Toolbox](https://bitbucket.org/ambidecodertoolbox/adt.git)

<a href="https://bitbucket.org/ambidecodertoolbox/adt.git"><img  class="mx-auto d-block" src="img/ambbox.jpg  "></a>  

The Ambisonic Decoder Toolbox is a collection of MATLAB and GNU Octave functions for creating Ambisonic Decoders.  Currently, it implements: (1) the AllRAD design technique, (2) inversion or mode-matching, (3) truncated mode-matching, constant energy, (4) linear combinations of 2 and 3, and (5) Slepian function basis (EPAD). The DSP code is written in  MATLAB and Faust.         

## [Ambisonic.xyz](http://ambisonic.xyz/)

<a href="http://ambisonic.xyz/"><img  class="mx-auto d-block" src="img/xyz.jpg"></a>  

A set of tools around Ambisonics.
                
## [FaustPy](https://github.com/marcecj/faust_python)       

<a href="https://github.com/marcecj/faust_python"><img  class="mx-auto d-block" src="img/python.jpg"></a>  

FaustPy is a Python wrapper for Faust. It is implemented using the CFFI and hence creates the wrapper dynamically at run-time.
        
## [Rebel Technology](https://www.rebeltech.org/)

<a href="https://www.rebeltech.org/"><img  class="mx-auto d-block" src="img/owl.jpg"></a>  

The OWL Pedal is an open source, programmable stage effects pedal, made for guitarists, musicians, hackers and programmers. Users can program their own effects, or download ready-made patches from our growing online patch library.

## [faust-vst](https://bitbucket.org/agraef/faust-vst)

<a href="https://bitbucket.org/agraef/faust-vst"><img  class="mx-auto d-block" src="img/vst.svg" alt="Card image cap"></a>  

This project provides a VST plugin architecture for the Faust programming language. The package contains the Faust architecture, faustvst.cpp, the faust2faustvst helper script which provides a quick way to compile a plugin, a collection of sample plugins written in Faust, and a generic GNU Makefile for compiling and installing the plugins. 
                
## [faust-lv2](https://bitbucket.org/agraef/faust-lv2)

<a href="https://bitbucket.org/agraef/faust-lv2"><img  class="mx-auto d-block" src="img/lv2.jpg" alt="Card image cap"></a>  

This project provides an LV2 plugin architecture for the Faust programming language. The package contains the Faust architecture and templates for the needed LV2 manifest (ttl) files, a collection of sample plugins written in Faust, and a generic GNU Makefile as well as a shell script to compile plugins using the architecture.

## [RDK](http://chiselapp.com/user/jcage/repository/rdk/doc/www/www/revdev.html)

<a href="http://chiselapp.com/user/jcage/repository/rdk/doc/www/www/revdev.html"><img  class="mx-auto d-block" src="img/reverb.jpg"></a>  

Reverb Design is about creating a spacial impression aimed at sweetening the listening experience for a given context. The ambiguity of auditory and visual cues in reproduced sound makes it necessary to create an auditory illusion: To make this illusion work, I propose an aesthetic concept of simplicity and intelligibility based on psychoacoustic facts and recording practice as professional producer.
        
## [Foo YC20](http://foo-yc20.codeforcode.com/)

<a href="http://foo-yc20.codeforcode.com/"><img  class="mx-auto d-block" src="img/yc20.jpg" alt="Card image cap"></a>  

The Foo YC20 is an open source implementation of the Yamaha YC-20 combo organ from 1969. Processing for the organ is based on original schematics and measurements from a working specimen. This instrument simulates the circutry as a whole to realisticly reproduce the features and flaws of the real deal.
                  
## [FaucK](https://ccrma.stanford.edu/~rmichon/fauck/)

<a href="https://ccrma.stanford.edu/~rmichon/fauck/"><img  class="mx-auto d-block" src="img/fauck.jpg" alt="Card image cap"></a>  

FaucK is a Chugin allowing to combine the powerful, succinct Functional AUdio STream (Faust) language with the strongly-timed ChucK audio programming language. FaucK allows programmers to on-the-fly evaluate Faust code directly from ChucK code and control Faust signal processors using ChucK's sample-precise timing and concurrency mechanisms. The goal is to create an amalgam that plays to the strengths of each language, giving rise to new possibilities for rapid prototyping, interaction design and controller mapping, pedagogy, and new ways of working with both Faust and ChucK.

## [Snd-RT](https://github.com/kmatheussen/snd-rt)

<a href="https://github.com/kmatheussen/snd-rt"><img  class="mx-auto d-block" src="img/sndrt.jpg" alt="Card image cap"></a>  

Snd-RT is the realtime extension for the sound editor SND and consists of two parts:

- the RT Engine - An engine for doing realtime signal processing.
- the RT Compiler - A compiler for a scheme-like programming language to generate realtime-safe code understood by the RT Engine.

## [Pure Language](https://agraef.github.io/pure-lang/)

<a href="https://agraef.github.io/pure-lang/"><img  class="mx-auto d-block" src="img/pure.jpg" alt="Card image cap"></a>  

[Pure is a modern-style functional programming language based on term rewriting. It offers equational definitions with pattern matching, full symbolic rewriting capabilities, dynamic typing, eager and lazy evaluation, lexical closures, built-in list and matrix support and an easy-to-use C interface. The interpreter uses LLVM as a backend to JIT-compile Pure programs to fast native code. It has been created by Albert Gräf.

[pd-faust](https://github.com/agraef/pure-lang/wiki/Addons#pd-faust) is a collection of Pd objects written using pd-pure which lets you run Faust programs inside Pd. It combines the functionality of pure-faust and faust2pd in a single package, and also features dynamic reloading of Faust plugins, automatic generation of controller GUIs and MIDI/OSC controller mappings, as well as OSC-based controller automation. It thus provides a complete solution for interactively developing Faust dsps in Pd.

## [Guitarix](http://guitarix.org/)        

<a href="http://guitarix.org/"><img  class="mx-auto d-block" src="img/guitarix.jpg" alt="Card image cap"></a>  

An audio plug-in for guitar effects who's sound processing engine is written in Faust.

## [moForte GeoShred](http://www.moforte.com/)

<a href="http://www.moforte.com/"><img class="mx-auto d-block" src="img/geo.jpg" alt="Card image cap"></a>    

An electric guitar app using physical modeling. Faust was used to implement its sound synthesis/processing engine.

## [moForte PowerStomp](http://www.moforte.com/powerstomp-fall-2016/)

<a href="http://www.moforte.com/powerstomp-fall-2016/"><img  class="mx-auto d-block" src="img/powerstomp.jpg"></a>  

An app implementing various guitar effects to be used on stage.

## [moForte Guitar](http://www.moforte.com/moforte-guitar-app/)

<a href="http://www.moforte.com/moforte-guitar-app/"><img  class="mx-auto d-block" src="img/moforteg.jpg"></a>  

An app that can be used as an electric guitar and whose sound synthesis engine is implemented in Faust.

## [FaustWorks](https://github.com/grame-cncm/faustworks)

<a href="https://github.com/grame-cncm/faustworks"><img  class="mx-auto d-block" src="img/faustworks.jpg" alt="Card image cap"></a>    

FaustWorks is an IDE (Integrated Development Environment) for the Faust dsp programming language. You must have Faust installed to 
be able to use FaustWorks. Platforms supported are Linux and OSX.

## [FaustLive](https://github.com/grame-cncm/faustlive)

<a href="https://github.com/grame-cncm/faustlive"><img  class="mx-auto d-block" src="img/faustlive.jpg" alt="Card image cap"></a>  

FaustLive is an advanced self-contained prototyping environment for the Faust programming language with an ultra-short edit-compile-run cycle. Thanks to its fully embedded compilation chain, FaustLive is simple to install and doesn't require any external compiler, development toolchain or SDK to run.

FaustLive is the ideal tool for fast prototyping. Faust programs can be compiled and run on the fly by simple drag and drop. They can even be edited and recompiled while running, without sound interruption. It supports also native applications generation using the Faust online compiler.

FaustLive is based on the Faust library and on LLVM.

​                  

