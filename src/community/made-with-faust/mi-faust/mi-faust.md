# Faust Mass-Interaction

This project features a series of tools to design Mass-Interaction physical models in the [Faust programming language](https://faust.grame.fr). [MIMS](TODO:URL) (Mass Interaction Model Scripter) is at the heart of this system. This command-line tool written in Python can be used to generate structured Faust code from a textual description of a physical model. Models are described in a format similar to ACROE’s PNSL: each physical element has a specific label, specific physical parameters or initial conditions, etc.  Parameters can be added to this description and shared by any number of physical modules, allowing global variation of the physical attributes (stiffness, damping, mass, etc.) of a subset of modules in real-time.

## Source and Documentation

* Source: <https://github.com/rmichon/mi_faust>
* [LAC-19 Paper](TODO)

## Creating Models with MIMS

[Mass Interaction Model Scripter](TODO) is a simple graphical or command-line tool written in Python to generate structured Faust code from a textual description of a physical model.

Models are described in a format similar to the PNSL language: each physical element has a specific label, specific physical parameters and/or initial conditions, etc.
Parameters can be added to this description and shared by any number of physical modules, allowing global variation of the physical attributes (i.e., stiffness, damping, mass, etc.) of a subset of modules in real-time.

```
# Define global parameter attributes
@m_K param 0.1
@m_Z param 0.001

@nlK param 0.05
@nlScale param 0.01

# Create material points
@m_s0 ground 0.
@m_m0 mass 1. 0. 0.
@m_m1 mass 1. 0. 0.
@m_m2 mass 1. 0. 0.

# Create and connect interaction modules
@m_r0 spring @m_s0 @m_m0 0.05 0.01
@m_r1 spring @m_m0 @m_m1 m_K m_Z
@m_r2 spring @m_m1 @m_m2 m_K m_Z
@m_r2 spring @m_m2 @m_m0 m_K m_Z

# Inputs and outputs
@in1 posInput 0.
@out1 posOutput @m_m2

# Add plucking interaction
@pick nlPluck @in1 @m_m1 nlK nlScale 
```

MIMS' `physics2faust` tool compiles the model by:

* parsing all of the physical modules and noting any specific elements (i.e., position or force inputs, audio outputs, etc.)
* creating the routing matrix and translating it into the two dual Faust routing functions.
* ordering the resulting data into the output `.dsp` file. "Placeholder" functions are created for position / force inputs, allowing the user to describe his input functions directly in the Faust code. 

The graphical UI version of MIMS also provides basic tools for generating certain categories of physical structures (i.e., strings, membranes, etc.) and performing modal analysis of linear structures. 

The Faust code generated from the model above is presented in Code Listing below. The only hand-written element is the `inPos` function, that adds a graphical slider to control the position of the input mass. The control-rate output of the slider is smoothed to avoid artifacts.

```
import("stdfaust.lib");
import("mi.lib");

inPos = hslider("pos",1,-1,1,0.0001) : si.smoo;

OutGain = 10.;

m_K = 0.1;
m_Z = 0.001;
nlK = 0.05;
nlScale = 0.01;

model = (
    RoutingLinkToMass: 
        ground(0.),
        mass(1.,0., 0.),
        mass(1.,0., 0.),
        mass(1.,0., 0.),
        posInput(0.) :
    RoutingMassToLink : 
        spring(0.05,0.01, 0., 0.),
        spring(m_K,m_Z, 0., 0.),
        spring(m_K,m_Z, 0., 0.),
        spring(m_K,m_Z, 0., 0.),
        nlPluck(nlK,nlScale),
    par(i, 1,_)
)~par(i, 10, _): par(i, 10,!), par(i,  1, _)
with{
RoutingLinkToMass(l0_f1,l0_f2,l1_f1,l1_f2,l2_f1,l2_f2,l3_f1,l3_f2,l4_f1,l4_f2,in1) = 
  l0_f1, l0_f2+l1_f1+l3_f2, l1_f2+l2_f1+l4_f2, l2_f2+l3_f1, l4_f1, in1;
RoutingMassToLink(m0,m1,m2,m3,m4) = m0, m1, m1, m2, m2, m3, m3, m1, m4, m2,m3;
};
process = inPos : model: *(OutGain);
```

<img src="img/MIMS_screenshot.png" class="mx-auto d-block">

<center>
*The MIMS model editor prototype*
</center>

## Examples

The basic *mi_faust* package contains several examples of virtual instruments and use-cases of mass-interaction physics in Faust (click on them to try them in the Faust online editor):

* [`IPlayTheTriangle`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/IPlayTheTriangle.dsp): the demonstration model above.
* [`PolyTriangle`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/PolyTriangle.dsp): the same model (with a direct force impulse applied instead of a pluck system), using Faust's ability to automatically handle polyphonic voice allocation for MIDI instruments.
* [`PluckedHarmonics`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/IPlayPluckedHarmonics.dsp): a 150-mass string terminated by two fixed points. The first position input allows plucking the string, and three others are used to press down lightly on the string at specific areas in order to bring out natural harmonics.
* [`BowedString`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/BowedString.dsp): a bowed string, using the `nlBow` interaction. The user can control bow pressure and velocity, as well as the stiffness of the string.
* [`LargeTriangleMesh`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/LargeTriangleMesh.dsp): a big triangular mesh, fixed at one summit, excited by a plucking system and damped by user input.
* [`Resonator`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/Resonator.dsp): the audio input is fed into one end of a resonating physical model. The user can alter the properties of the resonator.
* [`PhysicalLFO`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/PhysicalLFO.dsp): Using a physical model with slow dynamics as a control variable for another synthesis process (here, the wave propagation of a very slow string used to modulate the amplitude of a white noise source, going from complex patterns to quasi-sinusoidal modulation).

In addition to these examples, two large structures (a 20 by 30 mass mesh: [`20x30mesh`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/20x30mesh.dsp) and a 1000 mass string: [`1000massString`](https://faust.grame.fr/tools/editor?code=https://faust.grame.fr/community/made-with-faust/mi-faust/code/1000massString.dsp)) were created for model complexity tests.

## Credits

This project is the fruit of a collaboration between [GIPSA-Lab](TODO:URL) (Grenoble INP, France) and [GRAME-CNCM](https://grame.fr) (Lyon, France). 
