---
layout: post
title:  "Performances of audio DSP code compiled in WebAssembly"
date:   2017-09-15 12:00:00
categories: news
---

Porting and running large C/C++ code base on the Web have been the subject of several competing projects in the recent years, from Google NaCl/PNaCl to Mozilla [asm.js](http://asmjs.org). Recently standardized WebAssembly language inherits from ideas experimented in both approaches, with the Mozilla vision finnally winning as [Robert O'Callahan explains here](http://robert.ocallahan.org/2017/06/webassembly-mozilla-won.html). Coupled with the [WebAudio API](https://webaudio.github.io/web-audio-api/), running real-time audio code in the Web now appears to be an achievable goal.   

WebAssembly is a hot topic in the JavaScript ecosystem. The WebAudio community is eagerly waiting for the [AudioWorklet](https://webaudio.github.io/web-audio-api/#AudioWorklet) specification, with its promised reduced latency and glitch-free audio rendering, to land in browser development versions, and be tested. Porting well established C/C++ codebase with [Emscripten](http://kripken.github.io/emscripten-site/), like the [Csound](https://www.mansoft.nl/csound/) framework as an example, or using DSL languages like Faust, will then naturally beneficiate from improved and more stable performances. 

The Faust ecosystem already allows to generate [static or dynamically compiled WebAssembly based WebAudio nodes](http://faust.grame.fr/news/2017/08/18/using-webaudio-api.html). These nodes are still using the deprecated ScriptProcessor WebAudio interface. Premillinary work has been started to be ready as soon at the AudioWorklet model will be testable. 

In the meantime, work have been started using the [WAVM](https://github.com/AndrewScheidecker/WAVM), a standalone VM for WebAssembly, that can load both the standard binary and text wasm format, compiling it in native code using the LLVM chain (generating LLVM IR and compiling it on the fly to native code using LLVM JIT compiler), and running it at (near) native speed. 

[Glue code to load and run Faust generated wasm modules](https://github.com/sletz/WAVM/tree/faust/Source/Programs) has been written. Validation and benchmarking tools have been developed. Performances comparison with the C++ and LLVM IR Faust backends is the subject of this post.   

### Comparing the Faust C++, LLVM IR and wast/wasm backends ###

The WebAssembly approach promises *near native* performances for C/C++ written code compiled to WebAssembly using the Emscripten tool chain. Other languages like Rust (using the [mir2wasm](https://github.com/brson/mir2wasm) tool) experiment direct WebAssembly generation. It seems clear that as WebAssembly specification and implementation stabilize, more and more languages will directly generate wasm to be deployed in browsers. The question of the **quality of code generation at each step of the compilation chain** will rapidly emerge. 

While WebAssembly is initially designed to run on the Web,  it may [be deployed in non Web environnement like nodejs](http://webassembly.org/docs/non-web/), or even in [standalone VM like WAVM](https://github.com/AndrewScheidecker/WAVM). Thus WebAssembly becomes a portable binary format that can be used in a large variety of situations. This is especially of interest for a DSL language like Faust.  

#### Faust wast/wasm backend ####

Faust wast/wasm backend directly produce WebAssembly code from the Faust internal FIR (Faust Imperative Representation) code. Generated modules are rather light since they define a very simple ABI to be used by the loader code. Two generation models have been defined:

- in *monophonic* mode the wast/mast module internally allocates a memory block to be used for the DSP state (controllers, delays lines, waveforms...) as well as audio buffers. 

- in *polyphonic* mode, the memory block will be allocated by the loader environnement. This block will typically be sized to contain all the needed voices for the polyphonic DSP.

In both cases, a full description of the DSP state as a JSON string is generated in the [module data segment](http://webassembly.org/docs/modules/#data-section) (including memory indexes of all controllers). Loader code will get and decode this JSON description, and use whatever parts of the description it needs to run the DSP code. In particular, control memory zones (corresponding to the UI items like buttons, sliders, bargraph...) can be directly read/written by the wrapper code.     

#### Benchmark of C++, LLVM IR and wast/wasm generated code ####

Since Faust already generates C++ or LLVM IR code, the performances of those two backends can be compared with the new wasm one. Using the WAVM C++ written machine allows to deploy the [same measuring code](http://faust.grame.fr/news/2017/04/26/optimizing-compilation-parameters.html). The first benchmark compares the speed of C++, LLVM IR and wasm backends running a set of DSP, running on a MacBook Pro 2,2 GHz Core I7 with OSX El capitan. The same 4.0 version of LLVM toolchain has been used with the three backend.
C++ and LLVM IR code has been compiled with the *-Ofast* optimization flag, the WAVM runtime is the standard version one (without any specific audio optimization, see later):

![](/images/C++_LLVM_IR_WASM_OSX.png){: .center-image }

Doing the same tests on a Linux 3.1 GHz AMD machine gives a bit different results, with the wasm backend even winning in the *freeverb.dsp* example:

![](/images/C++_LLVM_IR_WASM_LINUX.png){: .center-image }

The diagrams clearly shows that the wasm code is still slower than C++ or LLVM IR code, but speed difference is not so high in most cases. Some DSP behaviours  need  to be understood in more details.   

#### Optimizing the WAVM runtime for audio code ####

The WAVM runtime strictly conforms to the WebAssembly specification, thus behaving as a interesting base reference. In the audio domain, the deployed code is usually compiled with specific optimization flags. Since C++ WAVM runtime can be hacked quite easily, we did several changes into the reference implementation to gain some speed:  

- removing the [*atomic* flag in all load/store](https://github.com/sletz/WAVM/commit/cf6011026aa75dfd0f88e051da271ce0c0d525a9) that are added to pass all spec WebAssembly tests.

- adding the equivalent of *-fast-math* compilation flag that [have to be done at LLVM IR and JIT (= native)](https://github.com/sletz/WAVM/commit/1aa96a2088ed1c6eb918b7f292f4571aecdfc6da) generation steps.

- and finally simplifying some mathematical operators, [using their standard definition](https://github.com/sletz/WAVM/commit/a9e2a91c53e79168fb7e193beb36e99d81d0be21) instead of the specific WAVM coded ones that striclty implement [WebAssembly official semantic](http://webassembly.org/docs/semantics/) (see for instance the definition of *f32.min/f32.max* operations).

Here is the diagram of DSP examples run with reference WAVM runtime, and the three specific optimizations:

![](/images/WAVM_optimizations.png){: .center-image }

After generating the LLVM IR code, the WAVM runtime runs a set of LLVM IR to IR optimizations passes. It remains to be tested if adding more optimization passes (especially the **auto-vectorizations** ones) could help producing even better code.

#### WebAssembly module optimization with Binaryen ####

Binaryen is a [compiler and toolchain infrastructure library for WebAssembly](https://github.com/WebAssembly/binaryen), written in C++. We tested the **wasm-opt** tool at **-O3** level on Faust generated wasm modules to estimate what speedup we can expect. The following diagram shows limited gains, with no more than 5% in some of the tested cases:

![](/images/Binaryen_optimization.png){: .center-image }

#### Comparing three browsers on OSX El Capitan####

[HTML test pages](http://faust.grame.fr/modules/bench/) were prepared to compare the performances of the three main browsers on OSX El Capitan. The DSP wasm module *compute* method is called repeatedly in a timed loop, using sucessive slices of a big allocated circular audio buffer to avoid cache effects. Here are the results:

![](/images/Browsers.png){: .center-image }

#### Float denormal handling ####

A specific problem occurs when audio computation produces denormal float values, which is quite common with recursive filters, and can be extremely costly to compute on some processors like the Intel family for instance. A Flush To Zero (FTZ) mode for denormals can usually be set at hardware level, but it not yet available in the WebAssembly MVP version, which strictly conform to the IEEE 754 norm 8. 

Thus an automatic software strategy which consists in adding FTZ code in all recursive loops has been implemented in the Faust compiler. To activate it, the **-ftz** compilation parameter must be used at compilation time. 

The **-ftz 1** mode adds a test in each recursive loop which uses the *fabs* function and a threshold to detect subnormal samples (slower). The **-ftz 2** mode adds a test in each recursive loop which uses a mask to detect subnormal samples (faster). 

Even if using software ftz is not strictly needed in our benchmark chain (since the C++ WAVM uses the ftz hardware protection mode), we can still compare the speed of the different ftz options. Here is the result of code generated with -ftz for 0 to 2:

![](/images/FTZ_modes.png){: .center-image }

### Comments and Conclusion ###

Testing wasm JIT machines inside browsers is not an easy task. The C++ WAVM runtime revealed to be an excellent tool to compare the Faust C++, LLVM IR and wasm backend. Since its code can be easily adapted, one can estimate also what can be expected **deploying wasm DSP modules in pure native environments**, outside of the browser, where some **audio  specific optimizations** may be considered.

Measures done on a set of Faust DSP show that WebAssembly code still run slower than C++ of LLVM IR generated code in most cases, **up to almost 66% slower** in the less favorable examples. This value will typically be a bit worse when deploying in browsers, since **float denormal protection code has to be used**. Benchmarks in browser wasm runtime still need to be done to confirm or refine these findings. 

Comparing the **Chrome**, **Firefox** and **WebKit** browsers on OSX El Capitan shows that Chrome is currently the fastest engine in most cases, with Firefox and WebKit quite similar (with a slight plus for WebKit). 

