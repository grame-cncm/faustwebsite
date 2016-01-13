---
layout: post
title:  "Creating polyphonic instruments"
date:   2016-01-13 11:10:00
categories: news
---

Polyphonic instruments can be created by "combining" several voices using a specific architecture file, whith the single voice described by a Faust program. The architecture file takes care of dynamic voice allocations and control MIDI messages decoding and mapping.

### Description of the polyphonic instrument ###

First you'll have to describe the voice in Faust then use the **mydsp_poly** class to combine several voices.

#### Programing the instrument voice ####

By convention Faust architecture files with polyphonic MIDI capabilities expect to find a `freq`, a `gain` and a `gate` user interface parameter. Look at the [A Simple Organ](http://faust.grame.fr/examples/2015/10/01/organ.html) post for a complete example.

#### Allocating a polyphonic instrument ####

Use the faust/dsp/poly-dsp.h file to wrap the dsp voice into the polyphonic architecture. This file defines the **mydsp_poly** class (a sub-class of base class **dsp**) that maintains and array of **mydsp** objects, manage dynamic voice allocations, control MIDI messages decoding and mapping, and mixing of all running voices (stopping a running voice, when its ouput level decreases below a given threshold). 

As a sub-class of dsp, the mydsp_poly class redefines the **buildUserInterface** method. By convention all allocated voices are groupe in a global "tabgroup", so that a user interface builder may display them separately. Then this dsp object can be used as usual and connected with the wanted audio driver and possibly other UI control objects like OSCUI, httpdUI, etc. Having this UI hierachical view  allows for instance complete OSC control of each single voice and its control parameters. 

Allocation of a polyphonic instrument takes a number of voices as parameter (`poly` parameter in `DSP = new mydsp_poly(poly, true);` expression). The second parameter here activates dynamic voice allocation control. Note that a polyphonic instrument may be used outside of a MIDI control context with the `DSP = new mydsp_poly(poly, false);` expression, so that all voices would be always running.

#### Controlling the polyphonic instrument ####

Note that mydsp_poly class is also ready for MIDI control and can react to `keyon/keyon` and `pitchWheel` messages. You can also add other MIDI control parameters directly in the dsp source code. See [Controlling with MIDI](http://faust.grame.fr/examples/2016/13/01/organ.html) post for more informations.

#### Testing polyphonic instruments ####

Several architecture files and associated scripts have been updated to handle polyphonic instruments:

- use **faustcaqt -poly foo.dsp** to create a polyphonic CoreAudio/QT application on OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance),
- use **faustcaqt -poly -midi foo.dsp** to create a polyphonic and MIDI controllable CoreAudio/QT application on OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance), 
- use **faustjaqt -poly  foo.dsp** to create a polyphonic JACK/QT application on Linux and OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance),
- use **faustjaqt -poly -midi foo.dsp** to create a polyphonic and MIDI controllable JACK/QT application on Linux and OSX. By default the application will create 4 voices. Use the --poly parameter at runtime to change the value (so **./foo --poly 8** for instance). 
 
### Polyphonic instrument as plugin ###

The previously described polyphonic architecture has been written to develop standalone applications and it still rather basic. Note that much more sophisticated polyphonic aware plugins have already been developed:

- Yan Michalevsky's VSTi support is part of the regular Faust distribution. Look at the **vsp.cpp** architecture file, to be used with the **faust2vsti** script.
- Albert Graef [LV2](https://bitbucket.org/agraef/faust-lv2) and [VSTi](https://bitbucket.org/agraef/faust-vst)

