# Events

## Faust Physical Modeling Workshop

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/xQ8aNgMaR5k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

Faust has been used for the physical modeling of musical instruments for many years now. Different tools have been developed recently to address the needs of various modeling techniques (e.g., finite difference scheme, waveguides, mass interaction, etc.).

The goal of this one day online workshop which took place on Feb. 1, 2021 was to provide a series of interactive one-hour tutorials on these tools as well as some background on their related modeling techniques.

### Creating Circuit-Bendable Wave-Digital Models of Analog Audio Circuits in Faust -- Dirk Roosenburg

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/TWsoXXJG-zU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
**Download this workshop's code [here](events/misc/dirk.zip)**
</center>

Wave-digital models are a well researched and popular approach for creating virtual-analog models of audio circuits for use in audio processing. `wdmodels.lib` is a new addition to the Faust Libraries that supports easy creation of these models in Faust. In this workshop, we will introduce the technique of wave-digital modeling of circuits by analyzing several audio circuits and exploring their implementation in `wdmodels.lib`. We also will discuss library support of more complex implementation tasks associated with wave-digital models, such as R-type adaptors and Multiple/Multiport non-linearities. Finally, we will conclude by exploring the capacity of Faust to "circuit-bend" our wave-digital models.

**Note**: the workshop's code has been adapted to work with the latest version of the `wdmodels.lib` library embedded in the Faust Web IDE. You'll see some tiny syntax differences between the video and the new syntax.

### An Introduction to Mass-Interaction Modelling in Faust -- James Leonard and Jérôme Villeneuve

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/zYL10nal29c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
**Download this workshop's code [here](https://github.com/mi-creative/FaustPM_2021_examples)**
</center>

This workshop proposes an introduction to mass-interaction (sometimes referred to as mass-spring) modelling for sound synthesis in the Faust environment. After a brief historic introduction to this field, we will give a hands on tutorial on the `mi_faust` library, which allows simulating modular physical constructions in Faust, as well as online model scripting tools that allow for efficient model design and code generation. We will conclude with ongoing developments and perspectives, in particular regarding performance issues, possible extensions to 3-DoF physics, and the importance of modelling frameworks that allow for a creative approach to physical model design.

### Finite Difference Schemes Synthesis in Faust -- Riccardo Russo

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/lfN_MG1Id74" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
**Download this workshop's code [here](https://github.com/Rickr922/Faust-FDS/tree/master/FaustPM_Workshop_2021)**
</center>

Over the years, Faust proved to be a powerful tool for developing physical modeling synthesis. However, coding finite difference schemes models has always been complicated, in fact, their implementation in imperative programming languages is typically achieved using data structures, which are not available in Faust. This workshop will introduce the fds library, a new tool which allows to code linear, explicit finite difference schemes physical models in Faust, based on a cellular automata formalism.

We will start with a brief introduction on how finite difference schemes work and what is their place within the scope physical modeling techniques. Then, we will focus on how to implement the algorithms we obtained on paper in Faust and, lastly, we will see how the fds library can be used to code such algorithms in a much easier way.  

By the end of the tutorial you should have quite an understanding on the basic principles of finite difference schemes, on the roles of the different functions inside the fds library and on how they can be used to easily obtain a working fds physical model.

### break

### Introduction to the Faust Physical Modeling Toolkit -- Romain Michon

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/u8WTnQPzL2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
**Download this workshop's code [here](events/misc/romain.zip)**
</center>

A series of tools to facilitate the implementation of waveguide and modal physical models of musical instruments have been developed over the years by the Faust team to become the "Faust Physical Modeling Toolkit." This comprises the Faust Physical Modeling library (`pm.lib`) as well as `mesh2faust`, a tool to convert 3D meshes into modal physical models compatible with `pm.lib`.

During this workshop, we will provide a step-by-step tutorial on how to use these different tools to implement various kinds of physical models from scratch.  

### *Overview of Physical Modeling Formulations and Faust Implementations* -- Julius O. Smith

<center>
<iframe width="800" height="450" src="https://www.youtube.com/embed/493vRGqx_pE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

<center>
**Download this workshop's code is available at <https://ccrma.stanford.edu/~jos/aspf/Appendix_A_State_Space_Models.html#code:statespace> and <https://ccrma.stanford.edu/~jos/aspf/State_Space_BiQuad_FAUST.html#code:statespaceBiquad>**
</center>

A summary of methods for physical modeling is followed by some examples in Faust.  Physical models normally start out as differential equations which are then digitized to yield finite-difference schemes as were discussed earlier in this workshop.  Wave digital and digital waveguide formulations were also discussed.  Two additional topics are state-space models and modal representations which can be obtained by diagonalizing state-space models.  As a result, this talk focuses primarily on state-space models and how to diagonalize them.

<center>
<img src="img/faust-pm.png" class="mx-auto d-block" width="80%">
</center>
