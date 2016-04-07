---
layout: post
title:  "Faust and the Web Audio API"
date:   2014-02-14 15:10:00
categories: news
---

We are happy to publish a new and improved version of the Faust to Web Audio API development.

Using the asm.js based technology, Faust DSP programs can now be compiled in efficient code to be deployed on the Web. Asm.js is an highly optimizable, low-level subset of JavaScript, that can be automatically produced from C/C++ code using the LLVM based [Emscripten](http://kripken.github.io/emscripten-site/) compiler. Starting from the C++ class produced by the regular Faust compiler, the asm.js code is wrapped using additional C++ and JavaScript code to appear as a ScripProcessor (a pure JavaScript node in Web Audio API terminology) to be connected to other JavaScript or native audio nodes.

While **faust1**  version (= master branch on GIT) [Emscripten SDK](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) has to be installed before using the following scripts.

Whith **faust2** development branch, a internal asm.js backend has been developed to directly generate the code starting from the DSP source. So you will be able to either generate the asm.js code using Emscripten (by adding the -emcc parameter in the following described commands), or using the internal asm.js backend.

The JavaScript code alone can be produced using the following script to produce a foo.js file containing the Emscripten runtime, some glue code and the "faust.foo" class.

    faust2asmjs karplus.dsp

When "faust.karplus" class is defined, instances can be created and used as regular Web Audio API nodes with the following code:

    var DSP = faust.karplus(audio_context, buffer_size);
    DSP.start();
    DSP.scriptProcessor.connect(DSP2.scriptProcessor);
 

The parameter 'audio_context' will be retrieved using the Web Audio API, and the given 'buffer_size' will be used to create the internal ScripProcessor JavaScript node running the actual asm.js generated DSP code. 

The list of all input controls can be retrieved with the following code:

    var control_list = DSP.controls();

The user interface can change the value of any control using the following code, where 'path_to_control' denotes a complete path to the control (retrieved using 'controls' function), and 'value' the value to be changed:  

    DSP.setValue(path_to_control, value);

The paramter value can ge read using the following code:

    var value = DSP.getValue(path_to_control);

A user interface may have to be periodically updated when output controls (typically bargraphs) have changed. You can use the following code to setup a handler callback:

    DSP.setHandler(update_handler);
  
Where 'update_handler' is a function with a prototype (path_to_control, value) that will be called once at each audio cycle with output control values.

The JSON description of the DSP can be retrieved and typically parsed by the user interface builder with the following code : 

    var json = DSP.json();

For DSP with inputs, the client glue code would typically have to open the audio_context audio input and connect it with the node : 

    var audio_input = audio_context.createMediaStreamSource(device);
    audio_input.connect(DSP.scriptProcessor);
 

Note that the -comb parameter allows to generate several Faust DSP in a single JavaScript file (named comb.js), thus sharing a single Emscripten runtime when compiled in Emscripten mode:

    faust2asmjs -comb karplus.dsp freeverb.dsp zita_rev1.dsp 

Another script can be used to generate a fully working HTML page with a SVG based user interface (thanks to Mike Solomon developments). This is a simple way for developers to produce a fully working HTML page that shows how to use the JavaScript API. The following code will generate a karplus.html page to be loaded in a Web Audio aware browser:

    faust2webaudioasm karplus.dsp 


Polyphonic instruments can be produced. Starting from a monophonic DSP, an when using Emscripten, a polyphonic voice manager coded in C++ allocates voices, instantiates several DSP instances and is compiled in asm.js using the Emscripten chain. When using the internal asm.js backend, the polyphonic code is written in JavaScript. Web MIDI inputs are connected and used to trigger the sound generation. Only keyOn and keyOff events are handled right now. Use the following command to generate a polyphonic version :

    faust2webaudioasm -poly piano.dsp 
 
The DSP has to be allocated and used with the following kind of code:

    var DSP = faust.piano_poly(audio_context, buffer_size);
    DSP.start();
    DSP.keyOn(channel, pitch, velocity);
    DSP.keyOff(channel, pitch);