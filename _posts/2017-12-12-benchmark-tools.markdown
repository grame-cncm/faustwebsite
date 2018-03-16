---
layout: post
title:  "WebAudio wasm benchmark pages and tools"
date:   2017-12-12 08:00:00
categories: news
---

WebAudio wasm benchmark pages and tools allow to test statically generated HTML pages from Faust DSP. Audio generating pages in ScriptProcessor or AudioWorklet mode can be tested first. DSP CPU benchmark pages can be used to test the perfomance of wasm code across different browsers. 

Tools to generate new DSP CPU benchmark pages are also available, and finally a page allowing to test the dynamic compilation chain can be acccesed.

### Simple pages ###

Simple pages can be used to test simple monophonic and polyphonic DSP, generated as ScriptProcessor or AudioWorklet WebAudio nodes.

- [statically generated OSC as a ScriptProcessor node](/modules/osc-wasm.html)
- [statically generated MIDI controllable Organ as a ScriptProcessor node](/modules/organ-wasm.html)

Note that as 12/12/17, AudioWorklet pages can ony be tested with Chrome Canary. Be sure to [activate AudioWorklet mode](https://googlechromelabs.github.io/web-audio-samples/audio-worklet/) first. On a MacBook Pro OSX El Capitan 2,2 GHz Intel Core i7, **we still hear audio glitches when testing them**, for example when opening the JavaScript console, or interacting with other applications (like scrolling in the XCode editor, scrolling in the terminal...)

- [statically generated OSC as an AudioWorlet node](/modules-worklet/osc-wasm-worklet.html)
- [statically generated MIDI controllable Organ as an AudioWorlet node](/modules-worklet/organ-wasm-worklet.html)

### Polyphonic MIDI aware pages ###

More complex statically generated polyphonic MIDI aware pages can be tested.

ScriptProcessor based pages:

- [modules/clarinetMIDI.html](/modules/clarinetMIDI.html)
- [modules/elecGuitarMIDI.html](/modules/elecGuitarMIDI.html)
- [modules/violinMIDI.html](/modules/violinMIDI.html)

AudioWorklet based pages:

- [modules-worklet/clarinetMIDI.html](/modules-worklet/clarinetMIDI.html)
- [modules-worklet/elecGuitarMIDI.html](/modules-worklet/elecGuitarMIDI.html)
- [modules-worklet/violinMIDI.html](/modules-worklet/violinMIDI.html)

### Benchmark pages ###

A set of statically generated pages allow to measure the DSP CPU use of Faust generated WebAssemby code. The **compute** method is repeatedly called in a loop (taking 100% of a core) which duration is measured. Results as MBytes/sec as well a DSP CPU load in % of a 1024 frames, 44.1 kHz audio buffer are displayed. 

On the following pages, just hit the *Start benchmark* button, and wait for the result to be displayed. Note that since the computation is done in the main JavaScript thread, don't disturb your machine too much to get a reliable result. The pages can typically be used to compare the performances of different browsers:

- [bench/clarinetMIDI.html](/bench/clarinetMIDI.html)
- [bench/djembe.html](/bench/djembe.html)
- [bench/filterBank.html](/bench/filterBank.html)
- [bench/freeverb.html](/bench/freeverb.html)
- [bench/frenchBell.html](/bench/frenchBell.html)
- [bench/guitarEffectChain.html](/bench/guitarEffectChain.html)
- [bench/karplus.html](/bench/karplus.html)
- [bench/karplus32.html](/bench/karplus32.html)
- [bench/kisana.html](/bench/kisana.html)
- [bench/spectralLevel.html](/bench/spectralLevel.html)
- [bench/stunedBar6.html](/bench/stunedBar6.html)
- [bench/violinMIDI.html](/bench/violinMIDI.html)
- [bench/zitaRev.html](/bench/zitaRev.html)

### Testing the denormal issue ###

A specific problem occurs when audio computation produces denormal float values, which is quite common with recursive filters, and can be extremely costly to compute on some processors like the Intel family for instance. Loog at the [following page](/news/2017/09/15/backend-benchmarks.html) for more explanations. Even with the software FTZ mode, we still see huge DSP CPU issue in some cases like this djembe physical model based on simple biquad filters:

- [modules/djembe.html](/modules/djembe.html)

On OSX for instance, open the **Activity Monitor** tool and look as your browser CPU use. Then hit the checkbox to start playing, and hit it again to stop it. Silence should be produced, but actually very small sample values (= subnormals) are generated. If your machine uses an Intel CPU, you will see CPU raise quite rapidly ! (tested on a MacBook Pro OSX El Capitan 2,2 GHz Intel Core i7).

### Benchmark tools ###

For developers, benchmark tools allow to generate HTML pages to test your DSP. Look in particular at the [**faust2benchwasm** script.](https://github.com/grame-cncm/faust/tree/master-dev/tools/benchmark)

### Dynamic compilation chain testing page ###

A more complete testing page for monophonic and polyphonic MIDI aware DSP, ScriptProcessor or AudioWorklet mode, FTZ selection mode is [available here](/dynamic/faustlive-wasm.html).

