---
layout: post
title:  "FaustLive is released !"
date:   2014-06-14 15:10:00
categories: news
---

GRAME is happy to announce the official release of FaustLive !

FaustLive is an advanced self-contained prototyping environment for the Faust programming language with an ultra-short edit-compile-run cycle. Thanks to its fully embedded compilation chain, FaustLive is simple to install and doesn't require any external compiler, development toolchain or SDK to run. FaustLive is the ideal tool for fast prototyping. Faust programs can be compiled and run on the fly by simple drag and drop. They can even be edited and recompiled while running without sound interruption or JACK disconnection.

### Dynamic compilation ###

On FaustLive’s windows you can drop your Faust code as a file, a string or a url. The code will be dynamically compiled and executed. You can then choose to edit your code. It will be opened in the default editor for .dsp files (FOLLOW THE README TO CONFIGURE FILE ASSOCIATION). The application will be automatically recompiled, every time you save your document. A crossfade is calculated between two relaying applications in a window to avoid brutal sound interruptions.

#### Audio drivers ####

Depending on your Operation System, you will have different drivers available…

- on OSX : Coreaudio, JACK and NetJack
- on Linux : JACK and NetJack
- on Windows : Portaudio

#### Export your DSP ####

Exporting your DSP as plugins is easy, thanks to FaustWeb, compilation service. In FaustLive’s export menu, you can find every platform and architecture that Faust can target. As you choose your target, your code is sent to FaustWeb and you receive the requested binary in exchange.

#### Save snapshots ####

If you create a configuration you like, you can save it as a Snapshot. The state of FaustLive will be saved (running applications, JACK connections, interface parameters...). Later on, you will be able to whether:

- recall the snapshot : closing any running application to restore the saved state
- import the snapshot : adding the saved state to the current state.

#### Remote control interfaces (only on Linux and OSX) ####

In the Windows Option toolBar, you can open a UDP port for OSC control or a TCP port for HTTP control. Moreover, the HTLM interface can be accessed through a QrCode that you can create from «View QrCode » in the menu « Window ».

#### Download the binaries ####

- [OSX](http://sourceforge.net/projects/faudiostream/files/FaustLive.dmg)
- [Linux (64 bits)](http://sourceforge.net/projects/faudiostream/files/FaustLive_Linux.zip)
- [Windows](http://sourceforge.net/projects/faudiostream/files/FaustLive_Windows.rar)