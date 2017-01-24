---
layout: post
title:  "Creating polyphonic instruments"
date:   2016-01-13 11:10:00
categories: news
---

Polyphonic instruments can be created by "combining" several voices using a specific architecture file, with the single voice described by a Faust DSP program. The architecture file takes care of dynamic voice allocations and control MIDI messages decoding and mapping.

### Description of the polyphonic instrument ###

First you'll have to describe the voice in Faust, then use the **mydsp_poly** class to combine several voices.

#### Programing the instrument voice ####

By convention Faust architecture files with polyphonic capabilities expect to find a user interface parameter with the following `freq`, `gain` and a `gate` names. 

In case of MIDI control, the `freq` (which should be a frequency) will be automatically mapped to MIDI note numbers, `gain` (which should be a value between 0 and 1) to velocity and `freq` to note-on / note-off events. Thus, gate can be used as a trigger signal for any envelope generator, etc.

Look at the [A Simple Organ](http://faust.grame.fr/examples/2015/10/01/organ.html) post for a complete example.

#### Allocating the polyphonic instrument ####

Use the **faust/dsp/poly-dsp.h** file to wrap the dsp voice into the polyphonic architecture. This file defines the **mydsp_poly** class (a sub-class of base class **dsp**) that maintains and array of **mydsp** objects, manage dynamic voice allocations, control MIDI messages decoding and mapping, and mixing of all running voices (stopping a running voice, when its output level decreases below a given threshold). 

As a sub-class of dsp, the mydsp_poly class redefines the **buildUserInterface** method. By convention all allocated voices are grouped in a global "tabgroup", so that a user interface builder may display them separately. The first tab contains an 'All voices' group that can be used to change parameters on all voices at the same time. A "Panic" button can be used to stop running voices.

This dsp object can be used as usual and connected with the wanted audio driver and possibly other UI control objects like OSCUI, httpdUI, etc. Having this UI hierarchical view  allows for instance complete OSC control of each single voice and its control parameters. 

Allocation of a polyphonic instrument takes the wanted number of voices as first parameter, the dynamic voice allocation control state as second, and the 'group' state  which controls if the 'All voices' group as well as separated voices are displayed or not:

    DSP = new mydsp_poly(poly, true, false);
    
With the following the code, note that a polyphonic instrument may be used outside of a MIDI control context, so that all voices will be always running:

    DSP = new mydsp_poly(poly, false, true);

#### Controlling the polyphonic instrument ####

Note that mydsp_poly class is also ready for MIDI control and can react to `keyon/keyon` and `pitchWheel` messages. You can also add other MIDI control parameters directly in the dsp source code. See [Controlling with MIDI](http://faust.grame.fr/news/2016/01/14/controlling-with-midi.html) post for more informations.

#### Testing the polyphonic instrument ####

Several architecture files and associated scripts have been updated to handle polyphonic instruments:

- use **faustcaqt -poly foo.dsp** to create a polyphonic CoreAudio/QT application on OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance),
- use **faustcaqt -poly -midi foo.dsp** to create a polyphonic and MIDI controllable CoreAudio/QT application on OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance), 
- use **faustjaqt -poly foo.dsp** to create a polyphonic JACK/QT application on Linux and OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance),
- use **faustjaqt -poly -midi foo.dsp** to create a polyphonic and MIDI controllable JACK/QT application on Linux and OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance). 
- use **faustios -poly foo.dsp** to create a polyphonic iOS application. By default the application will create 4 voices,
- use **faustios -poly -midi foo.dsp** to create a polyphonic and MIDI controllable iOS application. By default the application will create 4 voices. 

### Adding an output effect ###

Polyphonic instruments can be used with a global output effect. Putting that effect in the main Faust code is not a good idea since it would be instantiated for each voice which would be very inefficient.

For a given `instrument.dsp` voice description, the output effect has to be defined in a file named `instrument_effect.dsp`, and the number of outputs of the instrument must the same as the number of inputs of the effect.

Polyphonic ready `faust2xx` scripts will then compile the polyphonic instrument and the effect,  combine them in sequence, and create a ready to use dsp. As an example **faustcaqt**  script can be used with the  **-poly2** parameter to combine the instrument and the output effect. 
 
### Polyphonic instrument as plugin ###

The previously described polyphonic architecture has been written to develop standalone applications and it still rather basic. Note that much more sophisticated polyphonic aware plugins have already been developed:

- Yan Michalevsky's VSTi support is part of the regular Faust distribution. Look at the **vsp.cpp** architecture file, to be used with the **faust2vsti** script.
- Albert Graef [LV2](https://bitbucket.org/agraef/faust-lv2) and [VSTi](https://bitbucket.org/agraef/faust-vst) separately developed but which are also part of the standard Faust distribution.

