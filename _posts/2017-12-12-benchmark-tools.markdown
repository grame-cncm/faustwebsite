---
layout: post
title:  "WebAudio wasm benchmark pages and tools"
date:   2017-12-12 08:00:00
categories: news
---

WebAudio wasm benchmark pages and tools allow to test statically Faust generated HTML pages. Tools to generate new ones are also available.

### Simple pages ###

Simple pages can be used to test simple monophonic and polyphonic DSP, generated as ScriptProcessor or AudioWorklet WebAudio nodes. Here are statically or dynamically generated oscillator and MIDI controllable polyphonic organ pages:  

- [statically generated OSC as a ScriptProcessor node](https://faust.grame.fr/modules/osc-wasm.html)
- [dynamically compiled OSC as a ScriptProcessor node](https://faust.grame.fr/dynamic/dynamic-osc-wasm.html)
- [dynamically compiled MIDI controllable Organ as a ScriptProcessor node](https://faust.grame.fr/dynamic/dynamic-organ-wasm.html)

Note that as 12/12/17, AudioWorklet pages can ony be tested with Chrome Canary. Be sure to [active AudioWorklet mode](https://googlechromelabs.github.io/web-audio-samples/audio-worklet/) first. On a MacBook Pro OSX El Capitan 2,2 GHz Intel Core i7, **we still hear audio glitches when testing them**, for example when opening the JavaScript console, of interacting with other applications (like scrolling in the XCode editor, scrolling in the terminal...)

- [dynamically compiled OSC as an AudioWorlet node](https://faust.grame.fr/dynamic/dynamic-osc-worklet-wasm.html)
- [dynamically compiled MIDI controllable Organ as an AudioWorlet node](https://faust.grame.fr/dynamic/dynamic-organ-worklet-wasm.html)


### Benchmark pages ###

A set of statically generated pages allow to measure the DSP CPU use of Faust generated WebAssemby code. The **compute** method is repeatedly called in a loop, taking 100% of a core and which duration is measured. Results as MBytes/sec as well a DSP CPU load in % of a 1024 frames, 44.1 kHz audio buffer is displayed. 

On the following pages, just hit the *Start benchmark* button, and wait for the result to be displayed. Note that since the computation is done in the main JavaScript, don't disturb your machine too much to get a reliable result. This can be used to compare the performances of the different browsers:

- [http://faust.grame.fr/bench/clarinetMIDI.html](http://faust.grame.fr/bench/clarinetMIDI.html)
- [http://faust.grame.fr/bench/djembe.html](http://faust.grame.fr/bench/djembe.html)
- [http://faust.grame.fr/bench/filterBank.html](http://faust.grame.fr/bench/filterBank.html)
- [http://faust.grame.fr/bench/freeverb.html](http://faust.grame.fr/bench/freeverb.html)
- [http://faust.grame.fr/bench/frenchBell.html](http://faust.grame.fr/bench/frenchBell.html)
- [http://faust.grame.fr/bench/guitarEffectChain.html](http://faust.grame.fr/bench/guitarEffectChain.html)
- [http://faust.grame.fr/bench/karplus.html](http://faust.grame.fr/bench/karplus.html)
- [http://faust.grame.fr/bench/karplus32.html](http://faust.grame.fr/bench/karplus32.html)
- [http://faust.grame.fr/bench/kisana.html](http://faust.grame.fr/bench/kisana.html)
- [http://faust.grame.fr/bench/spectralLevel.html](http://faust.grame.fr/bench/spectralLevel.html)
- [http://faust.grame.fr/bench/stunedBar6.html](http://faust.grame.fr/bench/stunedBar6.html)
- [http://faust.grame.fr/bench/violinMIDI.html](http://faust.grame.fr/bench/violinMIDI.html)
- [http://faust.grame.fr/bench/zitaRev.html](http://faust.grame.fr/bench/zitaRev.html)


### Testing the denormal issue ###

A specific problem occurs when audio computation produces denormal float values, which is quite common with recursive filters, and can be extremely costly to compute on some processors like the Intel family for instance. Loog at the [following page](http://faust.grame.fr/news/2017/09/15/backend-benchmarks.html) for more explanations. Even with the software FTZ mode, we still see huge DSP CPU issue in some cases like this djembe physical model based on simple biquad filters:

- [http://faust.grame.fr/modules/djembe.html](http://faust.grame.fr/modules/djembe.html)

On OSX for instance, open the **Activity Monitor** tool and look as your browser CPU use. Then hit the checkbox to start playing, and hit it again to stop it. Silence should be produced, but actually very small sample values (= subnormals) are generated. If your machine uses an Intel CPU, you will see CPU raise quite rapidly ! (tested on a MacBook Pro OSX El Capitan 2,2 GHz Intel Core i7).

### Benchmark tools ###

For developers, benchmark tools allow to generate HTML pages to test your DSP. Look in particular at the [**faust2benchwasm** script.](https://github.com/grame-cncm/faust/tree/master-dev/tools/benchmark)

### Dynamic testing page ###

A more complete testig page for monophonic and polyphonic MIDI aware DSP, ScriptProcessor or AudioWorklet mode, FTZ selection mode is [available here](https://faust.grame.fr/dynamic/faustlive-wasm.html).

