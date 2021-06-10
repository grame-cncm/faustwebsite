# Using Faust

## faustgen2~

<a href="https://github.com/agraef/pd-faustgen"><img  width="60%" class="mx-auto d-block" src="img/faustgen2.png"></a>  

The [faustgen2~](https://github.com/agraef/pd-faustgen) object is a Faust external for Pd a.k.a. [Pure Data](http://msp.ucsd.edu/software.html), Miller Puckette's interactive multimedia programming environment. 

## Amati

<a href="https://github.com/glocq/Amati"><img  width="70%" class="mx-auto d-block" src="img/amati.png"></a>  

[Amati](https://github.com/glocq/Amati) is a VST plugin for live-coding effects in the Faust programming language. As of now it only provides basic functionality. 


## PureTones

<a href="https://puretones.sadharani.com"><img  width="50%" class="mx-auto d-block" src="img/puretones.png"></a>  

[PureTones](https://puretones.sadharani.com) PureTones is a family of software tools for Indian Classical music. They are built based on an in-depth study and exploration of Indian Classical music to understand the role of harmonics, microtones and consonance in Indian Ragas and musical scales:

- [PureTones Drone](https://puretones.sadharani.com/drone/) is a digital Tanpura with controls for fine tuning the strings and adjusting their harmonic envelope.
- [PureTones Musical Scale](https://puretones.sadharani.com/scale/) is a digital 12 note keyboard with controls for fine tuning each key to be consonant with an accompanying drone track.
- [PureTones Sequencer](https://puretones.sadharani.com/sequencer/) is a sequencer which enables composition of melodies and musical works in Indian Classical music using notes from a fine tuned musical scale.

All applications have been developed using Faust and WebAudio tools.

## Making Sound Machines

<a href="https://makingsoundmachines.com"><img  width="60%" class="mx-auto d-block" src="img/makingsoundmachines.png"></a>  

[Making Sound Machines](https://makingsoundmachines.com) are a duo of makers from Düsseldorf, Germany. We build kits, modules and DIY projects, and use the projects we’ve built to make music. Faust is used in several projects.

## master_me

<a href="https://github.com/trummerschlunk/master_me"><img  width="80%" class="mx-auto d-block" src="img/master_me_gui.png"></a>  

[master_me](https://github.com/trummerschlunk/master_me)  is an automatic audio dynamics processor that smoothly balances sound during streaming events and live recordings. Preventing clipping and distortion, the software connects an effective leveling process with a mastering chain modeled after the analog audio path of Berlin-based Mastering Engineer Klaus Scheuermann.

## metaSurface64

<a href="http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface"><img  width="60%" class="mx-auto d-block" src="img/metaSurface.png"></a>  

[metaSurface64](http://blanchemain.info/Documents/Programmation/index.php?page=metaSurface) is a real-time continuous sound transformation control surface that features both its own loop generator for up to 64 voices and a multi-effects FX engine.

## Fragment Audio Server and Fragment

<a href="https://github.com/grz0zrg/fas"><img  width="70%" class="mx-auto d-block" src="img/fas.png"></a>  

Fragment Audio Server (FAS) is a high performance pixels-based graphical audio synthesizer implemented as a WebSocket server with the C language (C11). [Faust](https://faust.grame.fr/), is embedded (when compiled with `WITH_FAUST`) and allow to dynamically extend FAS bank generators and effects with custom one written with the Faust DSP specification language. FAS is the audio engine used in [Fragment[(https://github.com/grz0zrg/fsynth) , the Collaborative Graphical Audio Synthesizer. Follow the [demo here](https://www.youtube.com/watch?v=Tm6TkQdTYPk).

## Swanky Amp

<a href="https://github.com/resonantdsp/swankyamp"><img  width="70%" class="mx-auto d-block" src="img/swankyamp.png"></a>  

Swanky Amp is a tube amplifier simulation DSP plugin which aims to capture the details in the dynamics of tube amplifiers. The DSP is primarily written in [Faust](https://faust.grame.fr/), whereas the UI is written in C++ using the [JUCE](https://www.juce.com). Follow the [demo here](https://www.youtube.com/watch?v=pz3v87VMQfk).

## Web Synth and Digital Audio Workstation

<a href="https://github.com/Ameobea/web-synth"><img  width="80%" class="mx-auto d-block" src="img/web_synth.png"></a>  

This is a web-based DAW (Digital Audio Workstation) written in Rust/WebAssembly and TypeScript with extensive Faust language integration with dynamic remote code compilation and executing via WebAssembly. Follow the [demo here](https://www.youtube.com/watch?v=DDWYhueiqOc).

## DawDreamer

<a href="https://github.com/DBraun/DawDreamer/"><img  width="80%" class="mx-auto d-block" src="img/dawdreamer.png"></a>  


[DawDreamer](https://github.com/DBraun/DawDreamer/) is an audio-processing Python framework supporting core [DAW](https://en.wikipedia.org/wiki/Digital_audio_workstation) features such as audio playback, VST MIDI instruments, VST effects, [Faust](http://faust.grame.fr/), and parameter automation. DawDreamer is written with [JUCE](https://github.com/julianstorer/JUCE), with a user-friendly Python interface thanks to [pybind11](https://github.com/pybind/pybind11). DawDreamer draws from an earlier VSTi audio "renderer", [RenderMan](https://github.com/fedden/RenderMan).

## TouchDesigner

<a href="https://github.com/DBraun/TD-Faust/"><img  width="60%" class="mx-auto d-block" src="img/touchdesigner.png"></a>  

TD-Faust enables Faust code to run inside [TouchDesigner](https://derivative.ca). Follow the [demo here](https://www.youtube.com/watch?v=0qi2lp_TgE0).

## Mephisto LV2 

<a href="https://open-music-kontrollers.ch/lv2/mephisto/"><img  width="50%" class="mx-auto d-block" src="img/mephisto.png"></a>  

Mephisto LV2 a Just-in-Time Faust compiler embedded in an LV2 plugin. Write LV2 audio/cv instruments/filters directly in your host in Faust DSP language without any need to restart/reload host or plugin upon code changes.

## iPlug2

<a href="https://iplug2.github.io"><img  width="70%" class="mx-auto d-block" src="img/iplug2.png"></a>  

iPlug 2 is a simple-to-use C++ framework for developing cross platform audio plug-ins/apps and targeting multiple plug-in APIs with the same minimalistic code, support for the Faust programming language, and the libfaust JIT compiler.

## pMix

<a href="https://github.com/olilarkin/pMix2"><img  class="mx-auto d-block" src="img/pmix.jpg"></a>  

pMix (short for preset mixer) is a sound design, composition and performance tool that facilitates the control of multiple parameters using an intuitive graphical interface.

## Temper JUCE plugin

<a href="https://github.com/creativeintent/temper"><img  width="70%" class="mx-auto d-block" src="img/temper.jpg"></a>  

Temper is a digital distortion written with Faust, and compiled with JUCE for the various build targets.

## Faust Mass-Interaction

<a href="http://mi-creative.eu/tool_miFaust.html"><img  class="mx-auto d-block" src="img/topo.jpg"></a>  

Collection of tools for mass-interaction physical modeling in Faust.

## Dynamic PedalBoard

<a href="https://wasabi.i3s.unice.fr/dynamicPedalboard/"><img  class="mx-auto d-block" src="img/wasabi.jpg"></a>  

Dynamic PedalBoard allows users to plug different stompboxes together in a web browser.


## SHARC DSP Board

<a href="https://wiki.analog.com/resources/tools-software/sharc-audio-module/faust"><img  class="mx-auto d-block" src="img/sam.jpg"></a>  

The ADI SHARC DSP board fully supports Faust.              

## Nuance

<a href="https://ccrma.stanford.edu/~rmichon/nuance/"><img  class="mx-auto d-block" src="img/nuance.jpg"></a>  

Nuance is a pressure sensitive music controller that uses Faust for sound synthesis and processing.

## The PlateAxe

<a href="https://ccrma.stanford.edu/~rmichon/bladeaxe/"><img  class="mx-auto d-block" src="img/plateaxe.jpg  "></a>  

The PlateAxe is a percussion instrument physical model controller using Faust for sound synthesis and processing.

## The BladeAxe

<a href="https://ccrma.stanford.edu/~rmichon/bladeaxe/"><img  class="mx-auto d-block" src="img/ba.jpg"></a>  

The BladeAxe is an electric guitar physical model controller using Faust for sound synthesis and processing.
                

## Bart Brouns' Projects

<a href="https://github.com/magnetophon"><img  class="mx-auto d-block" src="img/brouns.jpg"></a>  

A collection of projects by Bart Brouns and based on Faust.
                  

## EarTone Toolbox

<a href="https://ccrma.stanford.edu/~chechile/eartonetoolbox/main.html"><img  class="mx-auto d-block" src="img/eartone.jpg  "></a>  

The Ear Tone Toolbox is a collection of unit generators for the production of auditory distortion product synthesis. 

## AudioKit

<a href="https://audiokit.io/"><img  class="mx-auto d-block" src="img/audiokit.jpg"></a>  

AudioKit allows developers to quickly add professional audio functionality to iOS, macOS, and Apple Watch apps.

## Radium

<a href="http://users.notam02.no/~kjetism/radium/"><img  class="mx-auto d-block" src="img/radium.jpg"></a>  

Radium is a music editor with a new type of interface.
                  

## BELA

<a href="http://bela.io/"><img  class="mx-auto d-block" src="img/bela.jpg  "></a>  

Bela is a maker platform for creating beautifully responsive audio and interactive applications.

## HOA Library

<a href="http://hoalibrary.mshparisnord.fr/en"><img  class="mx-auto d-block" src="img/hoa.jpg"></a>  

HOA Library allows musicians and composers to synthesize, transform and render sound fields in a creative and artistic way.

## Ambitools

<a href="http://www.sekisushai.net/ambitools/"><img  class="mx-auto d-block" src="img/ambitools.jpg"></a>  

Ambitools is a collection of plug-ins and  tools for 3D sound field synthesis using Higher Order Ambisonics (HOA).

## Ambisonic Decoder Toolbox

<a href="https://bitbucket.org/ambidecodertoolbox/adt.git"><img  class="mx-auto d-block" src="img/ambbox.jpg  "></a>  

The Ambisonic Decoder Toolbox is a collection of MATLAB and GNU Octave functions for creating Ambisonic Decoders.                  

## Ambisonic.xyz

<a href="http://ambisonic.xyz/"><img  class="mx-auto d-block" src="img/xyz.jpg"></a>  

A set of tools around Ambisonics.
                

## FaustPy        

<a href="https://github.com/marcecj/faust_python"><img  class="mx-auto d-block" src="img/python.jpg"></a>  

FaustPy is a Python wrapper for Faust. It is implemented using the CFFI and hence creates the wrapper dynamically at run-time.
        

## OWL

<a href="https://www.rebeltech.org/"><img  class="mx-auto d-block" src="img/owl.jpg"></a>  

The OWL is an open source, programmable audio platform made for musicians, hackers and programmers alike.

## faust-vst

<a href="https://bitbucket.org/agraef/faust-vst"><img  class="mx-auto d-block" src="img/vst.svg" alt="Card image cap"></a>  

This project provides a VST plugin architecture for the Faust programming language.
                

## faust-lv2

<a href="https://bitbucket.org/agraef/faust-lv2"><img  class="mx-auto d-block" src="img/lv2.jpg" alt="Card image cap"></a>  

This project provides an LV2 plugin architecture for the Faust programming language. 
                  

## RDK

<a href="http://chiselapp.com/user/jcage/repository/rdk/doc/www/www/revdev.html"><img  class="mx-auto d-block" src="img/reverb.jpg"></a>  

A Reverberation Development Kit.
        

## Foo YC20

<a href="http://foo-yc20.codeforcode.com/"><img  class="mx-auto d-block" src="img/yc20.jpg" alt="Card image cap"></a>  

Foo YC20 is an open source implementation of the Yamaha YC-20 combo organ from 1969.
                  

## FaucK  

<a href="https://ccrma.stanford.edu/~rmichon/fauck/"><img  class="mx-auto d-block" src="img/fauck.jpg" alt="Card image cap"></a>  

FaucK is a Chugin allowing to combine the Faust language with the strongly-timed ChucK audio programming language.

## Snd-RT

<a href="https://github.com/kmatheussen/snd-rt"><img  class="mx-auto d-block" src="img/sndrt.jpg" alt="Card image cap"></a>  

Snd-RT is the realtime extension for the sound editor SND.

## Pure Language

<a href="https://agraef.github.io/pure-lang/"><img  class="mx-auto d-block" src="img/pure.jpg" alt="Card image cap"></a>  

Pure is a dynamically typed, functional programming language based on term rewriting. It has been created by Albert Gräf.

## Guitarix        

<a href="http://guitarix.org/"><img  class="mx-auto d-block" src="img/guitarix.jpg" alt="Card image cap"></a>  

An audio plug-in for guitar effects who's sound processing engine is written in Faust.

## moForte GeoShred

<a href="http://www.moforte.com/"><img class="mx-auto d-block" src="img/geo.jpg" alt="Card image cap"></a>    

An electric guitar app using physical modeling. Faust was used to implement its sound synthesis/processing engine.

## moForte PowerStomp

<a href="http://www.moforte.com/powerstomp-fall-2016/"><img  class="mx-auto d-block" src="img/powerstomp.jpg"></a>  

An app implementing various guitar effects to be used on stage.

## moForte Guitar

<a href="http://www.moforte.com/moforte-guitar-app/"><img  class="mx-auto d-block" src="img/moforteg.jpg"></a>  

An app that can be used as an electric guitar and whose sound synthesis engine is implemented in Faust.

## FaustWorks

<a href="https://github.com/grame-cncm/faustworks"><img  class="mx-auto d-block" src="img/faustworks.jpg" alt="Card image cap"></a>    

An IDE for Faust. Allows Faust programmers to visualize block diagrams, corresponding C++ code, compile to various Faust targets, etc.

## FaustLive

<a href="https://github.com/grame-cncm/faustlive"><img  class="mx-auto d-block" src="img/faustlive.jpg" alt="Card image cap"></a>  

An on-the-fly compiler for the Faust programming language using the LLVM technology.




                  

