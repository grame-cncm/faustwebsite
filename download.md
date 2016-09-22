---
layout: page
title: Download
permalink: /download/
---


### FaustLive ###
FaustLive is the recommended tool to get started with Faust. Thanks to its embedded Faust compiler, FaustLive provides an ultra-short _edit-compile-run_ cycle. Moreover FaustLive is multi-platform and doesn't require any additional compiler or development tool (beside a simple code editor).

+ [FaustLive for Windows](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-2.30.zip/download)
+ [FaustLive for Windows+JACK](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-Jack-2.30.zip/download)
+ [FaustLive for OSX](https://sourceforge.net/projects/faudiostream/files/FaustLive-OSX-2.40.dmg/download)
+ [FaustLive for Ubuntu](http://sourceforge.net/projects/faudiostream/files/FaustLive-ubuntu-x86_64-2.43.zip/download)
+ [FaustLive sources (for Linux or Mac)](https://sourceforge.net/projects/faudiostream/files/FaustLive-sources-2.41.tgz/download)


### The Faust compiler ###
The Faust compiler itself comes in two flavors, Faust and Faust2:

+ [Faust (master branch)](https://sourceforge.net/projects/faudiostream/files/faust-0.9.80.tgz/download) is simple to compile and install as it has very few dependencies, but it can only generate C++ programs.
+ The [faust2 branch](https://sourceforge.net/projects/faudiostream/files/faust-2.0.a49.tgz/download) is more general and has backends for C++, C, Java, Javascript, asm.js, LLVM and Interpreter. But is has more dependencies, in particular LLVM. Faust2 is needed to compile FaustLive and other embedded Faust compilers.

You can also clone the git repository with the following command :

	git clone git://git.code.sf.net/p/faudiostream/code faust

Faust is easy to compile and to run on Mac and Linux. For Windows users we recommend to use [FaustLive](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-Jack-2.30.zip/download).

### Embedded Faust compilers ###
Several embedded Faust compilers are available thanks to libfaust and LLVM (the technology also used in FaustLive), in particular:

+ [Faustgen 1.10 for Max/MSP on OSX (32/64 bits) and Windows (32 bits)](https://sourceforge.net/projects/faudiostream/files/faustgen-1.10.zip/download), allows you to edit, compile and run Faust code from within Max/MSP.
+ [Faustgen 1.09 for Max/MSP on OSX (32/64 bits) and Windows (32 bits)](https://sourceforge.net/projects/faudiostream/files/faustgen-1.09.zip/download), allows you to edit, compile and run Faust code from within Max/MSP (using older library model).
+ [Faust for Processing on OSX](https://sourceforge.net/projects/faudiostream/files/faustProcessing.zip/download) allows you to embed Faust code into your Processing code. Use the power of Processing to build awesome user interfaces to control the audio part!  

Please note that Faust can also be used from [Csound6](http://www.youtube.com/watch?v=y8Hjl_LHHU4) and an experimental version of [Antescofo](https://www.youtube.com/watch?v=HFTw387rJto).

### FaustLive demo ###

Here is a short video explaining the main characteristics of the FaustLive application:

<iframe align="center" id="ytplayer" type="text/html" width="576" height="351" src="http://www.youtube.com/embed/8ZUD2c5D-PU" frameborder="0" />
