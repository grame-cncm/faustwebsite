---
layout: post
title:  "Faust meets JUCE"
date:   2017-02-21 10:00:00
categories: news
---

[JUCE](http://www.juce.com)  is an open-source cross-platform C++ application framework, used for the development of desktop and mobile applications. JUCE is used in particular for its GUI and plugins libraries. A set of architecture files have been developed to deploy standalone or plugins built from Faust code. Polyphonic intruments are supported, MIDI and OSC control can be used. 

The architecture files are then combined to produce ready to compile JUCE applications or plugins. Tools to achieve that are part of the Faust distribution, but can also be accessed using the Faust online compiler.

### faust2juce script ###

**faust2juce** transforms a Faust DSP program into a fully working JUCE standalone application or plugin, which can possibly be controlled with MIDI or OSC messages. Read its complete description [here](https://github.com/grame-cncm/faust/tree/master-dev/architecture/juce). You'll have to get a recent github version of Faust tree to use it.

#### Using the online compiler #### 

The Faust [online compiler](http://faust.grame.fr/onlinecompiler/) has been updated to provide new 'juce' targets. Note that only some of the possible compilation options are availble for now: 

- the **application** target produces a standalone MIDI controlable application (using Faust polyphonic code if the Faust source code is polyphonic aware) 

- the **plug-in** target produces a MIDI controlable mono  or polyphonic plugin (using Faust polyphonic code if the Faust source code is polyphonic aware) 

- the **jsynth** target produces a MIDI controlable mono or polyphonic plugin (using JUCE polyphonic Synthesizer if the Faust source code is polyphonic aware) 

Directly using **faust2juce** provides the full control of the generated target with access to all possible compilation parameters. 

#### Graph of Faust generated plugins #### 

Here is an example of three Faust generated plugins running in JUCE plugin host:

![Patch](/images/faust_plugins.png){: .center-image }


#### Using libfaust and LLVM #### 

An alternative of the Faust to JUCE static compilation model done in faust2juce is to use **Oliver Larkin** [juce_faustllvm](https://github.com/olilarkin/juce_faustllvm/tree/master) module. Note that juce_faustllvm module is used in Oliver [pMix2 tool](https://github.com/olilarkin/pMix2). 


