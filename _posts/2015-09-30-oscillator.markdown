---
layout: post
title:  "A Sine Oscillator"
date:   2015-09-30 11:10:00
categories: examples
---

In this example we will see how to write a sine oscillator. The main component will be a "phase" generator.

### Phase generator

A _phase_ generator produces a periodic signal that goes from `0` to `1` at each period. For example the expression:

    0.1 : (+,1.0:fmod) ~ _

corresponding to the following block-diagram :

![oscillator](/images/phasor.svg){: .center-image }

produces the periodic signal :

    {0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 0.0}...

In this expression `0.1` is the increment between successive samples, and `fmod` is the floating point remainder operation used to wrap the signal between `0` and `1`.

By controlling the increment we can control the frequency of the generated signal. Let say that the sampling rate is `48000` samples per second. By using an increment of `1/48000` we will produce a signal at `1 Hz`, and by using an increment of `f/48000` we will produce at frequency `f Hz`.

We can therefore define our phase generator as:

    phasor(f)   = f/48000 : (+,1.0:fmod) ~ _ ;

### Sine Oscillator

Once we have a phase generator it is easy to define a sine oscillator by multiplying the phase signal by 2*PI and taking the sine:

    osc(f)      = phasor(f) * 6.28318530718 : sin;

We can complete our program with sliders to control the frequency and the level of the oscillator

    process     = osc(hslider("freq", 440, 20, 20000, 1)) * hslider("level", 0, 0, 1, 0.1);

### Final program

Instead of hardcoding the sampling rate we can use the foreign constant fSamplingFreq in the definition of `phasor`. This lead us to the following program.

    phasor(f)   = f/fconstant(int fSamplingFreq, <math.h>) : (+,1.0:fmod) ~ _;
    osc(f)      = phasor(f) * 6.28318530718 : sin;
    process     = osc(hslider("freq", 440, 20, 20000, 1)) * hslider("level", 0, 0, 1, 0.01);

![oscillator](/images/osc.svg)

You can try it by pasting the above code into the [online compiler](http://faust.grame.fr/onlinecompiler) and selecting the web/audio target in the _exec code_ tab will result in the following user interface:

![userinterface](/images/osc-ui.png)
