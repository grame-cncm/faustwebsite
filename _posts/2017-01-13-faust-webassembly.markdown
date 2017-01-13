---
layout: post
title:  "Faust WebAssembly backend"
date:   2017-01-13 10:00:00
categories: news
---

[WebAssembly](http://webassembly.org) was born with the premise of creating a safe, portable and fast to load and execute format suitable for the web. WebAssembly its not a programing language but a compilation target which a text and binary specs. That means that other low level languages like C/C++, Rust, Swift, etc. can compile to WebAssembly. 

Specified and developed by principal browser compagnies (Google, Mozilla, Microsoft and Apple), this new format aims to finally replace the more hackish "asm.js" format initialy developed by Mozilla. 

Development versions of Chrome and Firefox can already execute it. To get an early preview of this experimental technology, at your own risk:

- on [Chrome Canary](https://www.google.com/chrome/browser/canary.html), open **chrome://flags/#enable-webassembly** and enable the switch

- on [Firefox Nightly](https://nightly.mozilla.org/), open **about:config** and set **javascript.options.wasm** to true

See a [preview](http://blogs.windows.com/msedgedev/2016/03/15/previewing-webassembly-experiments) of [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) support and follow [Safari](http://www.apple.com/safari/) support on WebKit’s [feature status](https://www.microsoft.com/en-us/windows/microsoft-edge).

### WebAssembly backends ###

New WebAssembly backends have been added in the faust2 development branch. They allow to generate textual or binary WebAssembly code. 

#### 'wast' textual backend #### 

The 'wast' backend allows to generate textual WebAssembly code (in s-expression like format). Note that as of january 2017, the official textual format is not yet fully specified, thus we follow the format used in the [binaryen tool](https://github.com/WebAssembly/binaryen).

Use the following command to generate the textual output in the terminal for a given foo.dsp file. 

    faust -lang wast foo.dsp


The following command:

    faust -lang wast foo.dsp -o foo.wast

will generate the **foo.wast** textual WebAssembly output file as well as an additional **foo.js** JavaScript file containing glue code.

#### 'wasm' binary backend #### 

The 'wasm' backend allows to generate binary WebAssembly code.

Use the following command to generate the binary output in the terminal for a given foo.dsp file. 

    faust -lang wasm foo.dsp

The following command:

    faust -lang wasm foo.dsp -o foo.wasm

will generate the **foo.wast** binary WebAssembly output file as well as an additional **foo.js** JavaScript file containing glue code.

#### Generating static HTML pages ####

WebAssembly code can be feeded into WebAudio JavaScript nodes, which can then be used like any other native WebAudio node. Two scripts are available to generate static WebAudio html pages from a given foo.dsp source file with the generated html/css/svg user interface:

    faust2webaudiowast foo.dsp

will generate the textual WebAssembly output, use binaryen **wasm-as** tool to convert the wast to wasm format (you'll have to compile and install the binaryen tools on your machine), and produce a self-contained html page.

    faust2webaudiowasm foo.dsp

will generate the binary WebAssembly output that can directly be loaded by the produced self-contained html page.

Page containing [polyphonic instruments](http://faust.grame.fr/news/2016/01/13/polyphonic-instruments.html) can be generated with the following commands:

    faust2webaudiowast -poly foo.dsp 

to use the 'wast' backend and a polyphonic ready foo.dsp, and create a self-contained html page ready to be used with a MIDI instrument. 

    faust2webaudiowasm -poly foo.dsp 

to use the 'wasm' backend and a polyphonic ready foo.dsp, and create a self-contained html page ready to be used with a MIDI instrument. 

