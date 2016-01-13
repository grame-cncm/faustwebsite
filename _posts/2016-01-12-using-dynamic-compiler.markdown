---
layout: post
title:  "Using the dynamic compilation chain"
date:   2016-01-12 11:10:00
categories: news
---

The dynamic compilation chain allows developers to embed the Faust compiler technology directly in their application or plugins. Thanks to the awesome [LLVM](http://www.llvm.org) technology combined with **libfaust**, the new library version of the Faust compiler, Faust DSP programs can now directly be compiled and executed on the fly at full speed. 

### Dynamic compilation chain ###

Faust2 development branch uses an intermediate FIR representation (Faust Imperative Representation), which can be translated to several output languages.
The FIR language describes the computation performed on the samples in a generic manner. It contains primitives to read and write variables and arrays, do arithmetic operations, and define the necessary control structures (for and while loops, if structure etc.). The language of signals (internal to the Faust compiler) is now compiled in FIR intermediate language.

To generate various output languages, several backends have been developed: for C, C++, Java, JavaScript, asm.js, and LLVM IR. The native LLVM based compilation chain is particularly interesting: it provides direct compilation of a DSP source into executable code in memory, bypassing the external compiler requirement.

#### LLVM ####

[LLVM](http://www.llvm.org)  (formerly Low Level Virtual Machine) is a compiler infrastructure, designed for compile-time, link-time, run-time optimization of programs written in arbitrary programming languages. Executable code is produced dynamically using a “Just In Time” compiler from a specific code representation, called LLVM IR. Clang, the “LLVM native” C/C++/Objective- C compiler is a front-end for LLVM Compiler. It can, for instance, convert a C or C++ source file into LLVM IR code. Domain-specific languages like Faust can easily target the LLVM IR. This has been done by developing a special LLVM IR backend in the Faust compiler.

#### Compiling in memory ####

The complete chain goes from the Faust DSP source code, compiled in LLVM IR using the LLVM backend, to finally produce the executable code using the LLVM JIT. All steps take place in memory, getting rid of the classical file based approaches. Pointers to executable functions can be retrieved from the resulting LLVM module and the code directly called with the appropriate parameters.

In the Faust2 development branch, the Faust compiler has been packaged as an embeddable library called **libfaust**, published with an associated API that imitates the concept of oriented-object languages, like C++. Given a Faust source code (as a file or a string), calling the **createDSPFactoryXXX** function runs the compilation chain (Faust + LLVM JIT) and generates the “prototype” of the class, as a **llvm-dsp-factory** pointer.

{% highlight c++ %}

class llvm_dsp_factory {

 public: 
    
    /* Return Factory name */
    std::string getName();
    
    /* Return Factory LLVM target */
    std::string getTarget();
    
    /* Return Factory SHA key */
    std::string getSHAKey();

    /* Return Factory expanded DSP code */
    std::string getDSPCode();
};

{% endhighlight %}

Note that that the library keeps an internal cache of all allocated factories so that the compilation of the same DSP code, that is same source code and same set of 'normalized' (= sorted in a canonical order) compilations options, will return the same (reference counted) factory pointer. You will have to explicitly use **deleteDSPFactory** to properly decrement the reference counter when the factory is no more needed. You can get a unique SHA1 key of the created factory using its **getSHAKey** method. 

Next, the **createDSPInstance** function, corresponding to the **new className** of C++, instantiates a **llvm-dsp** pointer to be used through its interface, connected to the audio chain and controller interfaces. When finished, use **deleteDSPInstance** to destroy the dsp instance.


{% highlight c++ %}

class llvm_dsp : public dsp {
    
 public:
    
    void metadata(Meta* m);
    
    int getNumInputs();
    int getNumOutputs();
    
    void init(int samplingFreq);
    void buildUserInterface(UI* ui_interface);
    void compute(int count, FAUSTFLOAT** inputs, FAUSTFLOAT** outputs);
    
    llvm_dsp* copy();
};

{% endhighlight %}

Since **llvm_dsp** is a subclass of the **dsp** base class, an object of this type can be used with all already available audio and UI classes (see ...), in essence reusing all architecture files already developed for the static C++ class compilation scheme (like OSCUI, httpdUI interfaces etc.), see [Developing a new architecture file](http://faust.grame.fr/news/2016/01/11/developing-architecture.html).

#### Saving/restoring the factory ####

After the DSP factory has been compiled, your application or plugin may want to save/restore it in order to save Faust to LLVM IR compilation or even JIT compilation time at next use. To get the internal factory compiled code, several functions are available:

- **writeDSPFactoryToIR** allows to get the LLVM IR (in textual format) as a string, **writeDSPFactoryToIRFile** allows to save the LLVM IR (in textual format) in a file,
- **writeDSPFactoryToBitcode** allows to get the LLVM IR (in binary format) as a string, **writeDSPFactoryToBitcodeFile** allows to save the LLVM IR (in binary format) in a file,
-  **writeDSPFactoryToMachine** allows to get the executable machine code as a string, **writeDSPFactoryToMachineFile** allows to save the executable machine code in a file.

To re-create a DSP factory from a previously saved code, several functions are available:

- **readDSPFactoryFromIR** allows to create a DSP factory from a string containing the LLVM IR (in textual format), **readDSPFactoryFromIRFile** allows to create a DSP factory from a file containing the LLVM IR (in textual format),
- **readDSPFactoryFromBitcode** allows to create a DSP factory from a string containing the LLVM IR (in binary format), **readDSPFactoryFromBitcodeFile** allows to create a DSP factory from a file containing the LLVM IR (in binary format),
-  **readDSPFactoryFromMachine** allows to create a DSP factory from a string containing the executable machine code, **readDSPFactoryFromMachineFile** allows to create a DSP factory from a file containing the executable machine code.

#### Additional functions ####

Some additional functions are available in the API:

- **expandDSPFromString/expandDSPFromFile** creates a 'self-contained' DSP source string where all needed librairies have been included. All compilations options are 'normalized' and included as a comment in the expanded string,
- **generateAuxFilesFromString/generateAuxFilesFromFile**: from a DSP source string or file, generates auxiliary files : SVG, XML, ps... depending of the 'argv' parameters.

#### Using libfaust library ####

The libfaust library is part of the Faust2 developement branch. You'll have to [compile and install it](http://faust.grame.fr/download/). Then look at the installed faust/dsp/llvm-dsp.h header for a complete description of the API. Note that faust/dsp/llvm-c-dsp.h is a pure C version of the same API.

### Use case examples ###

The dynamic compilation chain has been used in several projects:

- [FaustLive](http://faust.grame.fr/download/), an IDE for Faust development
- [Faustgen](http://faust.grame.fr/download/), an external object for Cycling Max/MSP language
- [Csound6](https://csound.github.io/index.html), see this [demo video](http://www.youtube.com/watch?v=y8Hjl_LHHU4) 
- [LibAudioStream](https://github.com/sletz/libaudiostream/tree/inedit_mc2
), a framework to manipulate audio ressources through the concept of streams
- Oliver Larkin [JUCE framework integration](http://olilarkin.blogspot.fr/2015/11/juce-summit-presentation.html)
- an experimental version of [Antescofo](https://www.youtube.com/watch?v=HFTw387rJto)
- ...



