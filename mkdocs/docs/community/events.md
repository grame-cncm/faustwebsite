# Events

## Faust Physical Modeling Workshop

Faust has been used for the physical modeling of musical instruments for many years now. Different tools have been developed recently to address the needs of various modeling techniques (e.g., finite difference scheme, waveguides, mass interaction, etc.).

The goal of this one day workshop is to provide a series of interactive one-hour tutorials on these tools as well as some background on their related modeling techniques.

### When and Where?

This event will take place online on **Feb. 1, 2021, 3-9pm GMT-1**. 

### How to Participate?

To register for this free online event, just **fill up [this form](https://forms.gle/AzoPwBX7wwRcLBEf7)**.  

### Program

#### **3pm-4pm:** *Creating Circuit-Bendable Wave-Digital Models of Analog Audio Circuits in Faust* -- Dirk Roosenburg

Wave-digital models are a well researched and popular approach for creating virtual-analog models of audio circuits for use in audio processing. `wdmodels.lib` is a new addition to the Faust Libraries that supports easy creation of these models in Faust. In this workshop, we will introduce the technique of wave-digital modeling of circuits by analyzing several audio circuits and exploring their implementation in `wdmodels.lib`. We also will discuss library support of more complex implementation tasks associated with wave-digital models, such as R-type adaptors and Multiple/Multiport non-linearities. Finally, we will conclude by exploring the capacity of Faust to "circuit-bend" our wave-digital models.

#### **4pm-5pm:** *An Introduction to Mass-Interaction Modelling in Faust* -- James Leonard and Jérôme Villeneuve

This workshop proposes an introduction to mass-interaction (sometimes referred to as mass-spring) modelling for sound synthesis in the Faust environment. After a brief historic introduction to this field, we will give a hands on tutorial on the `mi_faust` library, which allows simulating modular physical constructions in Faust, as well as online model scripting tools that allow for efficient model design and code generation. We will conclude with ongoing developments and perspectives, in particular regarding performance issues, possible extensions to 3-DoF physics, and the importance of modelling frameworks that allow for a creative approach to physical model design.

#### **5pm-6pm:** *Finite Difference Schemes Synthesis in Faust* -- Riccardo Russo

Over the years, Faust proved to be a powerful tool for developing physical modeling synthesis. However, coding finite difference schemes models has always been complicated, in fact, their implementation in imperative programming languages is typically achieved using data structures, which are not available in Faust. This workshop will introduce the fds library, a new tool which allows to code linear, explicit finite difference schemes physical models in Faust, based on a cellular automata formalism.

We will start with a brief introduction on how finite difference schemes work and what is their place within the scope physical modeling techniques. Then, we will focus on how to implement the algorithms we obtained on paper in Faust and, lastly, we will see how the fds library can be used to code such algorithms in a much easier way.  

By the end of the tutorial you should have quite an understanding on the basic principles of finite difference schemes, on the roles of the different functions inside the fds library and on how they can be used to easily obtain a working fds physical model.

#### **6pm-7pm:** *break*

#### **7pm-8pm:** *Introduction to the Faust Physical Modeling Toolkit* -- Romain Michon

A series of tools to facilitate the implementation of waveguide and modal physical models of musical instruments have been developed over the years by the Faust team to become the "Faust Physical Modeling Toolkit." This comprises the Faust Physical Modeling library (`pm.lib`) as well as `mesh2faust`, a tool to convert 3D meshes into modal physical models compatible with `pm.lib`.

During this workshop, we will provide a step-by-step tutorial on how to use these different tools to implement various kinds of physical models from scratch.  

#### **8pm-9pm:** *Introduction to Physical Modeling Formulations and Faust Implementations* -- Julius O. Smith
