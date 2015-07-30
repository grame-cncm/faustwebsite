---
layout: post
title:  "Your first Faust example"
date:   2015-07-29 11:10:00
categories: examples
---
Here is a very simple example of Faust program. It transforms a pair of input signals (a stereo signal) into a mono signal by adding the two input signals

	process = +;

The Faust compiler can generate a graphic block-diagram representation of our program (using `faust -svg example.dsp`)

![examples 1](/images/ex1.svg)

as well as a C++ implementation (using `faust example.dsp -o example.cpp`))

{% highlight c++ %}
class mydsp : public dsp {
  private:
  public:
	...
	virtual void compute (int count, FAUSTFLOAT** input, FAUSTFLOAT** output) {

		FAUSTFLOAT* input0 = input[0];
		FAUSTFLOAT* input1 = input[1];
		FAUSTFLOAT* output0 = output[0];

		for (int i=0; i<count; i++) {
			output0[i] = (FAUSTFLOAT)((float)input0[i] + (float)input1[i]);
		}
	}
};
{% endhighlight %}
