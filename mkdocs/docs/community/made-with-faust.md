# Powered With Faust

This page lists the projects using Faust in different ways: plugins, standalone applications, integration in audio programing environments, development tools, research projects, embedded devices, Web applications, etc.

## [PICO DSP](https://www.crowdsupply.com/ohmic/pico-dsp)

<a href="https://www.crowdsupply.com/ohmic/pico-dsp"><img  width="60%" class="mx-auto d-block" src="img/pico-dsp.png"></a>  

PICO DSP is an open-source, Arduino-compatible ESP32 development board for audio and digital signal processing (DSP) applications. It offers an expansive audio-processing feature set on a small-format, breadboard-friendly device that provides audio inputs, audio outputs, a low-noise microphone array, an integrated test-speaker option, additional memory, battery-charge management, and ESD protection all on one tiny PCB. The board can be programmed [using Faust](https://github.com/ohmic-net/pico_dsp).


## [Soundjack](https://www.soundjack.eu)

<a href="https://www.soundjack.eu"><img  width="50%" class="mx-auto d-block" src="img/soundjack.png"></a>  

The Soundjack realtime communication application is extended by a server cloud to handle up to 60 musicians of an orchestra, developed with the Faust programming language.  Each musician is connected to a Soundjack UDP client. An individual stereo mix of the multiple audio streams originating from the multiple Soundjack clients has to be provided to each listening musician. An extended presentation of the system can be found in this [IFC 2028 paper](http://www.ifc18.uni-mainz.de/papers/kuhr.pdf).

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

The EchoMatrix was designed to provide some of the functionality of the Yamaha UD Stomp pedal as used be Alan Holdsworth. This project will be submitted to the KVR Developer Challenge 2021 contest to highlight the power of the Faust DSP development environment and the JUCE framework to create a non-trivial effect VST3 using a managable amount of Faust DSP code.

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

Ossia score is a sequencer for audio-visual artists, designed to enable the creation of interactive shows, museum installations, intermedia digital artworks, interactive music and more in an intuitive user interface. Faust can be used to [create advanced audio processes](https://ossia.io/score/features.html). A demo video of the Faust integration can be [seen here](https://www.youtube.com/watch?time_continue=1&v=yvTjJMrFxR0&feature=emb_logo).

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

JSPatcher is a Visual Programming Language (VPL) in Max/PureData style on the web. Customized AudioWorklet DSPs can be written with Faust.

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

- [PureTones Drone](https://puretones.sadharani.com/drone/) is a digital Tanpura with controls for fine tuning the strings and adjusting their harmonic envelope.
- [PureTones Musical Scale](https://puretones.sadharani.com/scale/) is a digital 12 note keyboard with controls for fine tuning each key to be consonant with an accompanying drone track.
- [PureTones Sequencer](https://puretones.sadharani.com/sequencer/) is a sequencer which enables composition of melodies and musical works in Indian Classical music using notes from a fine tuned musical scale.

The [Ragatronics project](https://ragatronics.sadharani.com) combines Ragas from Indian Classical music with elements from Rock, Jazz and Electronic music.

All applications [have been developed](https://github.com/aravind-sadharani/puretones) using Faust and WebAudio tools.

## [Making Sound Machines](https://makingsoundmachines.com)

<a href="https://makingsoundmachines.com"><img  width="60%" class="mx-auto d-block" src="img/makingsoundmachines.png"></a>  

Making Sound Machines are a duo of makers from Düsseldorf, Germany. We build kits, modules and DIY projects, and use the projects we’ve built to make music. Faust is used in several projects.

## [master_me](https://github.com/trummerschlunk/master_me)

<a href="https://github.com/trummerschlunk/master_me"><img  width="80%" class="mx-auto d-block" src="img/master_me_gui.png"></a>  

master_me is an automatic audio dynamics processor that smoothly balances sound during streaming events and live recordings. Preventing clipping and distortion, the software connects an effective leveling process with a mastering chain modeled after the analog audio path of Berlin-based Mastering Engineer Klaus Scheuermann.

## [metaSurface64](http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface)

<a href="http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface"><img  width="60%" class="mx-auto d-block" src="img/metaSurface.png"></a>  

metaSurface64 is a real-time continuous sound transformation control surface that features both its own loop generator for up to 64 voices and a multi-effects FX engine. The application embeds the libfaust dynamic version of the Faust compiler.

## [Fragment Audio Server](https://github.com/grz0zrg/fas) and Fragment

<a href="https://github.com/grz0zrg/fas"><img  width="70%" class="mx-auto d-block" src="img/fas.png"></a>  

Fragment Audio Server (FAS) is a high performance pixels-based graphical audio synthesizer implemented as a WebSocket server with the C language (C11). [Faust](https://faust.grame.fr/), is embedded (when compiled with `WITH_FAUST`) and allow to dynamically extend FAS bank generators and effects with custom one written with the Faust DSP specification language. FAS is the audio engine used in [Fragment[(https://github.com/grz0zrg/fsynth) , the Collaborative Graphical Audio Synthesizer. Follow the [demo here](https://www.youtube.com/watch?v=Tm6TkQdTYPk).

## [Swanky Amp](https://github.com/resonantdsp/swankyamp)

<a href="https://github.com/resonantdsp/swankyamp"><img  width="70%" class="mx-auto d-block" src="img/swankyamp.png"></a>  

Swanky Amp is a tube amplifier simulation DSP plugin which aims to capture the details in the dynamics of tube amplifiers. The DSP is primarily written in [Faust](https://faust.grame.fr/), whereas the UI is written in C++ using the [JUCE](https://www.juce.com). Follow the [demo here](https://www.youtube.com/watch?v=pz3v87VMQfk).

## [Web Synth](https://github.com/Ameobea/web-synth)

<a href="https://github.com/Ameobea/web-synth"><img  width="80%" class="mx-auto d-block" src="img/web_synth.png"></a>  

This is a web-based DAW (Digital Audio Workstation) written in Rust/WebAssembly and TypeScript with extensive Faust language integration with dynamic remote code compilation and executing via WebAssembly. Follow the [demo here](https://www.youtube.com/watch?v=DDWYhueiqOc).

## [DawDreamer](https://github.com/DBraun/DawDreamer/)

<a href="https://github.com/DBraun/DawDreamer/"><img  width="80%" class="mx-auto d-block" src="img/dawdreamer.png"></a>  

DawDreamer is an audio-processing Python framework supporting core [DAW](https://en.wikipedia.org/wiki/Digital_audio_workstation) features such as audio playback, VST MIDI instruments, VST effects, [Faust](http://faust.grame.fr/), and parameter automation. DawDreamer is written with [JUCE](https://github.com/julianstorer/JUCE), with a user-friendly Python interface thanks to [pybind11](https://github.com/pybind/pybind11). DawDreamer draws from an earlier VSTi audio "renderer", [RenderMan](https://github.com/fedden/RenderMan).

## [TouchDesigner](https://github.com/DBraun/TD-Faust/)

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

pMix (short for preset mixer) is a sound design, composition and performance tool that facilitates the control of multiple parameters using an intuitive graphical interface.

## [Temper JUCE plugin](https://github.com/creativeintent/temper)

<a href="https://github.com/creativeintent/temper"><img  width="70%" class="mx-auto d-block" src="img/temper.jpg"></a>  

Temper is a digital distortion written with Faust, and compiled with JUCE for the various build targets.

## [Faust Mass-Interaction](http://mi-creative.eu/tool_miFaust.html)

<a href="http://mi-creative.eu/tool_miFaust.html"><img  class="mx-auto d-block" src="img/topo.jpg"></a>  

Collection of tools for mass-interaction physical modeling in Faust.

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

Radium is a music editor with a new type of interface.
                  
## [BELA](http://bela.io/)

<a href="http://bela.io/"><img  class="mx-auto d-block" src="img/bela.jpg  "></a>  

Bela is a maker platform for creating beautifully responsive audio and interactive applications.

## [HOA Library](http://hoalibrary.mshparisnord.fr/en)

<a href="http://hoalibrary.mshparisnord.fr/en"><img  class="mx-auto d-block" src="img/hoa.jpg"></a>  

HOA Library allows musicians and composers to synthesize, transform and render sound fields in a creative and artistic way.

## [Ambitools](http://www.sekisushai.net/ambitools/)

<a href="http://www.sekisushai.net/ambitools/"><img  class="mx-auto d-block" src="img/ambitools.jpg"></a>  

Ambitools is a collection of plug-ins and  tools for 3D sound field synthesis using Higher Order Ambisonics (HOA).

## [Ambisonic Decoder Toolbox](https://bitbucket.org/ambidecodertoolbox/adt.git)

<a href="https://bitbucket.org/ambidecodertoolbox/adt.git"><img  class="mx-auto d-block" src="img/ambbox.jpg  "></a>  

The Ambisonic Decoder Toolbox is a collection of MATLAB and GNU Octave functions for creating Ambisonic Decoders.                  

## [Ambisonic.xyz](http://ambisonic.xyz/)

<a href="http://ambisonic.xyz/"><img  class="mx-auto d-block" src="img/xyz.jpg"></a>  

A set of tools around Ambisonics.
                
## [FaustPy](https://github.com/marcecj/faust_python)       

<a href="https://github.com/marcecj/faust_python"><img  class="mx-auto d-block" src="img/python.jpg"></a>  

FaustPy is a Python wrapper for Faust. It is implemented using the CFFI and hence creates the wrapper dynamically at run-time.
        
## [OWL](https://www.rebeltech.org/)

<a href="https://www.rebeltech.org/"><img  class="mx-auto d-block" src="img/owl.jpg"></a>  

The OWL is an open source, programmable audio platform made for musicians, hackers and programmers alike.

## [faust-vst](https://bitbucket.org/agraef/faust-vst)

<a href="https://bitbucket.org/agraef/faust-vst"><img  class="mx-auto d-block" src="img/vst.svg" alt="Card image cap"></a>  

This project provides a VST plugin architecture for the Faust programming language.
                
## [faust-lv2](https://bitbucket.org/agraef/faust-lv2)

<a href="https://bitbucket.org/agraef/faust-lv2"><img  class="mx-auto d-block" src="img/lv2.jpg" alt="Card image cap"></a>  

This project provides an LV2 plugin architecture for the Faust programming language. 

## [RDK](http://chiselapp.com/user/jcage/repository/rdk/doc/www/www/revdev.html)

<a href="http://chiselapp.com/user/jcage/repository/rdk/doc/www/www/revdev.html"><img  class="mx-auto d-block" src="img/reverb.jpg"></a>  

A Reverberation Development Kit.
        
## [Foo YC20](http://foo-yc20.codeforcode.com/)

<a href="http://foo-yc20.codeforcode.com/"><img  class="mx-auto d-block" src="img/yc20.jpg" alt="Card image cap"></a>  

Foo YC20 is an open source implementation of the Yamaha YC-20 combo organ from 1969.
                  
## [FaucK](https://ccrma.stanford.edu/~rmichon/fauck/)

<a href="https://ccrma.stanford.edu/~rmichon/fauck/"><img  class="mx-auto d-block" src="img/fauck.jpg" alt="Card image cap"></a>  

FaucK is a Chugin allowing to combine the Faust language with the strongly-timed ChucK audio programming language.

## [Snd-RT](https://github.com/kmatheussen/snd-rt)

<a href="https://github.com/kmatheussen/snd-rt"><img  class="mx-auto d-block" src="img/sndrt.jpg" alt="Card image cap"></a>  

Snd-RT is the realtime extension for the sound editor SND.

## [Pure Language](https://agraef.github.io/pure-lang/)

<a href="https://agraef.github.io/pure-lang/"><img  class="mx-auto d-block" src="img/pure.jpg" alt="Card image cap"></a>  

Pure is a dynamically typed, functional programming language based on term rewriting. It has been created by Albert Gräf.

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

An IDE for Faust. Allows Faust programmers to visualize block diagrams, corresponding C++ code, compile to various Faust targets, etc.

## [FaustLive](https://github.com/grame-cncm/faustlive)

<a href="https://github.com/grame-cncm/faustlive"><img  class="mx-auto d-block" src="img/faustlive.jpg" alt="Card image cap"></a>  

An on-the-fly compiler for the Faust programming language using the LLVM technology.




​                  

