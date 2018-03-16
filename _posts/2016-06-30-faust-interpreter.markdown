---
layout: post
title:  "Faust interpreter backend"
date:   2016-06-30 15:10:00
categories: news
---

A new 'interpreter' backend has been added in the faust2 development branch. It allows to execute Faust programs without using the LLVM dynamic compiler chain.

### Interpreter compilation chain ###

The dynamic compilation chain allows developers to embed the Faust compiler technology directly in their application or plugins. Faust2 development branch uses an intermediate FIR representation (Faust Imperative Representation), which can be translated to several output languages. An LLVM backend has been previously developed to allows applications to compile a DSP source into executable code in memory, bypassing the external compiler requirement. 


In some specific situations, embedding the LLVM chain is not possible : for instance Apple does not allow to deploy dynamic compilers on iOS. Thus having an interpreter
backend allows to get around this problem and still make Faust code run on those platforms. 

#### Interpreter backend ####

The interpreter backend translates the FIR intermediate language into instructions for a virtual machine. A pure C++ interpreter for this instruction set has been
implemented. 

#### Running and performances ####

The interpreter backend translates the FIR intermediate language into bytecode for a virtual machine. It allows to run programs about **4 to 5 slower than native speed**. Moreover this interpreter can be compiled in a special 'trace' mode to automatically detect various execution errors : invalid heap access, mathematical errors or warnings (division by zero, integer overloading....) which helps us to check the compiler semantic and code generation quality.

#### Deployment for developers ####

Given a Faust source code (as a file or a string), calling the **createInterpreterDSPFactoryXXX** function runs the compilation chain (Faust + interpreter) and generates the “prototype” of the class, as a **interpreter-dsp-factory** pointer.

{% highlight c++ %}

class interpreter_dsp_factory : public dsp_factory {

    public: 

        /* Return Factory name */
        std::string getName();

        /* Return Factory SHA key */
        std::string getSHAKey();

        /* Return Factory expanded DSP code */
        std::string getDSPCode();

        /* Creates a new dsp instance */
        dsp* createDSPInstance();
};

{% endhighlight %}

Note that the library keeps an internal cache of all allocated factories so that the compilation of the same DSP code, that is same source code and same set of 'normalized' (= sorted in a canonical order) compilations options, will return the same (reference counted) factory pointer. You will have to explicitly use **deleteInterpreterDSPFactory** to properly decrement the reference counter when the factory is no more needed. You can get a unique SHA1 key of the created factory using its **getSHAKey** method. 

Next, the **createDSPInstance** function, corresponding to the **new className** of C++, instantiates a **interpreter-dsp** pointer to be used through its interface, connected to the audio chain and controller interfaces. When finished, simply use **delete** to destroy the dsp instance.


{% highlight c++ %}

class interpreter_dsp : public dsp {

    public:

        void metadata(Meta* m);

        int getNumInputs();
        int getNumOutputs();

        void init(int samplingRate);
        void instanceInit(int samplingRate);
        dsp* clone();

        void buildUserInterface(UI* inter);
        int getSampleRate();

        void compute(int count, FAUSTFLOAT** input, FAUSTFLOAT** output);

};

{% endhighlight %}

Since **interpreter_dsp** is a subclass of the **dsp** base class, an object of this type can be used with all already available audio and UI classes, in essence reusing all architecture files already developed for the static C++ class compilation scheme (like OSCUI, httpdUI interfaces etc.), see [Developing a new architecture file](/news/2016/01/11/developing-architecture.html).

#### Saving/restoring the factory ####

After the DSP factory has been compiled, your application or plugin may want to save/restore it in order to save Faust to interpreter bytecode compilation at next use. To get the internal factory compiled code, several functions are available:

- **writeInterpreterDSPFactoryToMachine** allows to get the interpreter bytecode as a string, **writeInterpreterDSPFactoryToMachineFile** allows to save the interpreter bytecode in a file,

To re-create a DSP factory from a previously saved code, several functions are available:

- **readInterpreterDSPFactoryFromMachine** allows to create a DSP factory from a string containing the interpreter bytecode, **readInterpreterDSPFactoryFromMachineFile** allows to create a DSP factory from a file containing the interpreter bytecode.

The complete API is available and documented in the installed **faust/dsp/interpreter-dsp.h** header.
