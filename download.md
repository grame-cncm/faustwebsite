---
layout: page
title: Download
permalink: /download/
---


### Faustlive ###
FaustLive is the recommended tool to get started with Faust. Thanks to its embedded Faust compiler, FaustLive provides an ultra-short _edit-compile-run_ cycle. Moreover FaustLive is multi-platform and doesn't require any additional compiler or development tool (beside a simple code editor).

+ [FaustLive for Windows](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-2.30.zip/download)
+ [FaustLive for Windows+jack](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-Jack-2.30.zip/download)
+ [FaustLive for Mac](https://sourceforge.net/projects/faudiostream/files/FaustLive-OSX-2.40.dmg/download)
+ [FaustLive sources (for Linux or Mac)](https://sourceforge.net/projects/faudiostream/files/FaustLive-sources-2.41.tgz/download)


### The Faust compiler ###
The Faust compiler itself comes in two flavors : Faust and Faust2 :

+ [Faust (master branch)](https://sourceforge.net/projects/faudiostream/files/faust-0.9.73.tgz/download) is simple to compile and install as it has very few dependencies, but it can only generate C++ programs.
+ The [faust2 branch](https://sourceforge.net/projects/faudiostream/files/faust-0.9.73.tgz/download) is more general and has backends for C++, C, Java, Javascript, asm.js, LLVM. But is has more dependencies, in particular LLVM. Faust2 is needed to compile FaustLive and other embedded Faust compilers.

You can also clone the git repository with the following command :

	git clone git://git.code.sf.net/p/faudiostream/code faust

Faust is easy to compile and to run on Mac and Linux. For Windows users we recommend to use [FaustLive](https://sourceforge.net/projects/faudiostream/files/FaustLive-Windows-Jack-2.30.zip/download).

### Embedded Faust compilers ###
Several embedded Faust compilers are available thanks to libfaust and LLVM (the technology also used in FaustLive), in particular:

+ [Faustgen 1.03 for Max/MSP](https://sourceforge.net/projects/faudiostream/files/faustgen-1.03-LLVM-3.4.mxo.zip/download), allows you to edit, compile and run Faust code from within Max/MSP.
+ [Faust for Processing](https://sourceforge.net/projects/faudiostream/files/faustProcessing.zip/download) allows you to embed Faust code into your Processing code. Use the power of Processing to build awesome user interfaces to control the audio part!  

Please note that Faust can also be used from [Csound6](http://www.youtube.com/watch?v=y8Hjl_LHHU4) and an experimental version of [Antescofo](https://www.youtube.com/watch?v=HFTw387rJto).

### FaustLive demo ###
<iframe id="ytplayer" type="text/html" width="320" height="195" src="http://www.youtube.com/embed/8ZUD2c5D-PU" frameborder="0" />
