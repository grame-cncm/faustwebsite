---
layout: post
title:  "Faust Workshop at LOOP 2016 !"
date:   2016-11-04 15:10:00
categories: news
---
*Examples of the Faust Workshop at LOOP, November 4, 2016.*

## Simple volume control

    declare name "volume";
    declare author "yann";
    
    process = _, hslider("volume", 0.3, 0, 1, 0.01) : *;

A Faust program is a list of _statements_, here two `declare` metadata declarations, 
and the definition of `process`, the entry point of any Faust program. 
(the equivalent of main in C). 
A valid Faust program must at least define the key word `process`. 
Note that statements always end with `;`.

In this example we also see two signs: `,` and `:` that are part of the _block-diagram algebra_. 
The sign `,` indicates a parallel composition. The sign `:` indicates a sequential composition.

### Alternative notations
The previous example uses _core syntax_. 
Alternative notations (syntactic sugar) can be uses.

#### Infix

    declare name "volume";
    declare author "yann";
    
    process = _ * hslider("volume", 0.3, 0, 1, 0.01);

#### Partial application

    declare name "volume";
    declare author "yann";
    
    process = *(hslider("volume", 0.3, 0, 1, 0.01));
   

#### Naming signals

    declare name "volume";
    declare author "yann";
    
    process(x) = x * hslider("volume", 0.3, 0, 1, 0.01);
    
-	Pro : easier to write in some cases
-	Cons: less modular, diagram less readable
   

## Left right 

    declare name "leftright";
    declare author "yann";

    process     = _ <:  *(hslider("left", 0.5, 0, 1, 0.01)), 
                        *(hslider("right", 0.5, 0, 1, 0.01));


## Stereo Pan 

    declare name "pan";
    declare author "yann";

    pan(p)      = _ <: *(1-p), *(p);

    process     = pan( hslider("left-right", 0.5, 0, 1, 0.01) );


### Better Stero Pan

    declare name "pan";
    declare author "yann";

    pan(p)      = _ <: *(sqrt(1-p)), *(sqrt(p));

    process     = pan( hslider("left-right", 0.5, 0, 1, 0.01) );

## Simple Echo

    declare name "simpleEcho";
    declare author "yann";
    
    process = + ~ (@(10000) : *(hslider("feedback", 0.3, 0, 1, 0.01)));

Here `@(10000)` is a 10000 samples delay. 

## Auto pan
Pan controlled by a lfo.

    declare name "autopan5";
    declare author "yann";

    pan(p)      = _ <: *(sqrt(1-p)), *(sqrt(p));
    phase(f)	= f/44100.0 : (+,1:fmod)~_ ;
    lfo(f)		= phase(f) * 2 - 1 : abs;
    autopan(f)  = pan(lfo(f));

    process     = autopan( hslider("speed[unit:Hz]", 0.3, 0.1, 10, 0.01) );

## Combining echo and auto pan

    declare name "echoautopan";
    declare author "yann";
    
    echo    = + ~ (@(10000) : *(hslider("feedback", 0.3, 0, 1, 0.01)));
    
    autopan = pan(lfo(hslider("speed[unit:Hz]", 0.3, 0.1, 10, 0.01)))
                    with {
                        pan(p)      = _ <: *(1-p), *(p);
                        phase(f)	= f/44100.0 : (+,1:fmod)~_ ;
                        lfo(f)		= phase(f) * 2 - 1 : abs;
                    };

    process     = echo : autopan;


## comb filter

    declare name "combfilter";
    declare author "yann";
    
    transform = @(d) : *(c)
        with {
            d = hslider("delay", 1, 1, 20, 1);
            c = hslider("coef", 0, -1, 1, 0.01);
        };
    process = _ <: transform, _ :> _;


## fb comb filter

    declare name "fbcombfilter";
    declare author "yann";
    
    transform = @(d) : *(c)
        with {
            d = hslider("delay", 1, 1, 20, 1);
            c = hslider("coef", 0, -1, 1, 0.01);
        };
        
    process = + ~ transform;


## fb comb filter auto delay

    declare name "fbcombfilterauto";
    declare author "yann";
    
    lfo(f) = phase(f) * 2 - 1 : abs 
            with {
                phase(f) = f/44100.0 : (+,1:fmod)~_ : max(0) : min(1);
            };
    
    transform = @(d) : *(c)
        with {
            d =   hslider("delay", 1, 1, 20, 1) 
                * hslider("amp", 0, 0, 1, 0.1) 
                * lfo(hslider("freq", 1, 0.1, 10, 0.1));
            c = hslider("coef", 0, -1, 1, 0.01);
        };
        
    process = + ~ transform;

## flanger

    declare name "flangery5";
    declare author "yann";


    //---------------------------------------
    // lfo(f,a) -> [0..2]
    //  f: [>0] modulation frequency, 
    //  a: [0..1] modulation amplitude

    phase(f) = f/library("math.lib").SR : (+,1:fmod)~_;
    triangle(f) = phase(f)*4 - 2 : abs - 1;
    lfo(f,a) = 1 + a*triangle(f); 


    //---------------------------------------
    // flanger(d,f,a):
    //  d: max delay, 
    //  f: modulation frequency, 
    //  a: modulation amplitude

    flanger(d,f,a) = _ <:   _ - library("delay.lib").fdelay(65536, d*lfo(f,a)),
                            _ + library("delay.lib").fdelay(65536, d*(2-lfo(f,a)));

    process =   flanger(
                    hslider("delay", 10, 1, 100, 1)*44.1,
                    hslider("freq", 0.5, 0.05, 20, 0.01),
                    hslider("level", 0, 0, 1, 0.01)
                );


## Cry Baby

    declare name "crybaby";
    declare author "yann";


    import("stdfaust.lib");

    process = _<:_,ve.crybaby(wah):drywet
        with {
            wah = hslider("[1]Wah Wah", 0.6,0,1,0.01);
            bps = hslider("[2]Speed", 540, 360, 780, 0.1):si.smooth(0.999):min(780):max(360):int;
            drywet(x,y) = (1-c)*x + c*y;
            c = hslider("[3]Wah wah intensity", 60,0,100,0.01)*(0.01):si.smooth(0.999):min(1):max(0);
        };

## Auto Cry Baby

    declare name "autobaby";
    declare author "yann";


    import("stdfaust.lib");

    process = _<:_,ve.crybaby(wah):drywet
        with {
            //wah = hslider("[1]Wah Wah", 0.6,0,1,0.01) : ba.automat(bps, 15, 0.0);
            wah = hslider("[1]Wah Wah", 6, 0, 10, 1) : int : ba.automat(bps, 15, 0.0) : /(10);
            bps = hslider("[2]Speed", 540, 360, 780, 0.1):si.smooth(0.999):min(780):max(360):int;
            drywet(x,y) = (1-c)*x + c*y;
            c = hslider("[3]Wah wah intensity", 60,0,100,0.01)*(0.01):si.smooth(0.999):min(1):max(0);
        };