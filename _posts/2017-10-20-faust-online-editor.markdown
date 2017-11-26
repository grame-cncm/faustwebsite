---
layout: post
title:  "New Faust Editor"
date:   2017-10-20 00:00:00
categories: news
---

We are very happy to announce the online [Faust Editor](https://faust.grame.fr/editor). It can be used to _edit_, _compile_ and _run_ Faust code from any recent Web Browser with [WebAssembly](http://webassembly.org) support. This editor works completely on the client side and it is therefore very convenient for situations with many simultaneous users (workshops, classrooms, etc.). It embeds the latest version of the Faust compiler with an efficient WebAssembly backend and offers polyphonic MIDI support.


![](/images/editor-help.png){: .center-image } 

## Features
The editor engine is based on [codemirror](https://codemirror.net/). It offers _syntax highlighting_, _auto completion_ and direct access to the _online documentation_. The documentation command (ctrl-d) uses the function name at the cursor position to locate to the relevant information.

![](/images/editor-doc.png){: .center-image } 

## Recommended Browsers

The recommended browsers are the latest versions of Firefox and Chrome. Chrome is recommended for MIDI, but it requires an https connexion to use the audio inputs. On the other hand MIDI is not supported by Firefox.

## Useful links

- [https://faust.grame.fr/editor](https://faust.grame.fr/editor): the official link,
- [https://grame-cncm.github.io/fausteditorweb/](https://grame-cncm.github.io/fausteditorweb/): an alternative link on GitHub. Because this is an https address, audio inputs will work (but not the export function),
- [https://github.com/grame-cncm/fausteditorweb](https://github.com/grame-cncm/fausteditorweb): the GitHub repository.
