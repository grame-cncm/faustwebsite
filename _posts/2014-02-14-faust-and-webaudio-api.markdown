---
layout: post
title:  "Faust and the Web Audio API"
date:   2014-02-14 15:10:00
categories: news
---

We are happy to publish a new and improved version of the Faust to Web Audio API development.

Using the asm.js based technology, Faust DSP programs can now be compiled in efficient code to be deployed on the Web. Asm.js is an highly optimizable, low-level subset of JavaScript, that can be automatically produced from C/C++ code using the LLVM based [emscripten](http://kripken.github.io/emscripten-site/) compiler. Starting from the C++ class produced by the regular Faust compiler, the asm.js code is wrapped using additional C++ and JavaScript code to appear as a ScripProcessor (a pure JavaScript node in Web Audio API terminology) to be connected to other JavaScript or native audio nodes.

[Emscripten SDK](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) has to be installed before using the following scripts.

The JavaScript code alone can be produced using the following script to produce a foo.js file containing the emscripten runtime, some glue code and the "faust.foo" class.

    faust2asm karplus.dsp

When "faust.karplus" class is defined, instances can be created and used as regular Web Audio API nodes with the following code:

    var DSP1 = faust.karplus(audio_context, buffer_size, update_handler);
    DSP1.start();
    DSP1.scriptProcessor.connect(DSP2.scriptProcessor);
 

Update_handler is a function with a prototype (path_to_control, value) that will be called by the DSP code when control outputs (typically bargraphs) have changed.

The User Interface can change the value of any control using the following code, where 'path_to_control' denote a complete path to the control, and 'val' the value to be changed:  

    DSP1.setValue(path_to_control, val);

The JSON description of the DSP can be retrieved and typically parsed by the User Interface builder with the following code : 

    var json = DSP1.json();
 
The list of all input controls can be retrieved with the following code:

    var control_list = DSP1.controls();

For DSP with inputs, the client glue code would typically have to open the audio_context audio input and connect it with the node : 

    var audio_input = audio_context.createMediaStreamSource(device);
    audio_input.connect(DSP1.scriptProcessor);
 

Note that the -comb parameter allows to generate several Faust DSP in a single JavaScript file (named comb.js), thus sharing a single emscripten runtime :

    faust2asm -comb karplus.dsp freeverb.dsp zita_rev1.dsp 

Another script can be used to generate a fully working HTML page with a SVG based user interface (thanks to Mike Solomon developments). The following code will generate a karplus.html page to be loaded in a Web Audio aware browser :

    faust2webaudioasm karplus.dsp 

Polyphonic instruments can be produced : starting from a monophonic DSP, a polyphonic voice manager coded in C++ allocates voices, instantiates several DSP instances and is compiled in asm.js using the emscripten chain. Web MIDI inputs are connected and used to trigger the sound generation. Only keyOn and keyOff events are handled right now. Use the following command to generate a polyphonic version :

    faust2webaudioasm -poly piano.dsp 
 
The DSP has to be allocated and used with the following kind of code:

    var DSP1 = faust.piano_poly(audio_context, buffer_size, update_handler);
    DSP1.start();
    DSP1.keyOn(channel, pitch, velocity);
    DSP1.keyOff(channel, pitch);