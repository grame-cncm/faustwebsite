---
layout: post
title:  "Optimizing the DSP CPU usage"
date:   2017-04-26 15:10:00
categories: news
---

The Faust compiler has as lot of different compilation parameters to play with. Discovering them for a given DSP program is something that can be automated. Two **measure_dsp** and **dsp_optimizer** classes are available for developers to measure DSP CPU use directly in their code. Two more friendly **faustbench** and **faustbench-llvm** tools have been developed using them. They allow to discover the best Faust compiler parameters, to be used later on with  **faust2xx** scripts or FaustLive.

### The measure_dsp and dsp_optimizer DSP decorator classes ###

The measure_dsp class defined in the **faust/dsp/dsp-bench.h** file allows to decorate a given DSP object and measure its **compute** method CPU consumption. Results are given in Megabytes/seconds (higher is better). Here is a C++ code example of its use: 

{% highlight c++ %}
static void bench(dsp* dsp, const string& name)
{
    // Init the DSP
    dsp->init(48000);
    // Wraps it with a 'measure_dsp' decorator
    measure_dsp mes(dsp, 1024, 5);
    // Measure the CPU use
    mes.measure();
    // Print the stats
    cout << name << " CPU use : " << mes.getStats() << endl;
}
{% endhighlight %}

Only part of the Faust2 branch and defined in the **faust/dsp/dsp-optimizer.h** file, the dsp_optimizer class allows to decorate a given DSP object, uses the libfaust library and its LLVM backend to dynamically compile DSP objects produced with different Faust compiler options, and then measure their DSP CPU. Here is a C++ code example of its use: 

{% highlight c++ %}

static void dynamic_bench(dsp* dsp)
{
    // Init the DSP optimizer
    dsp_optimizer optimizer(dsp, "/usr/local/share/faust", "", 1024);
    double value;
    // Discover the best set of parameters
    vector<string> options = optimizer.findOptimizedParameters(value);
    // Print the result
    cout << "Best value is for '" << argv[1] << "' is : " << value << " with ";
    for (int i = 0; i < options.size(); i++) {
        cout << options[i] << " ";
    }
    cout << endl;
}
{% endhighlight %}

### Using the faustbench tool ###

The **faustbench** tool uses the C++ backend to generate a set of C++ files produced with different Faust compiler options. All files are then compiled in a unique binary that will measure DSP CPU of all versions of the compiled DSP. The tool is supposed to be launched in a terminal, but it can be used to generate an iOS project, ready to be launched and tested in Xcode. Here are the available options:

{% highlight c++ %}

faustbench [-ios] [Additional Faust options (-vec -vs 8...)] <file.dsp>
Use '-ios' to generate an iOS project
Use 'export CXX=/path/to/compiler' before running faustbench to change the C++ compiler
Use 'export CXXFLAGS=options' before running faustbench to change the C++ compiler options

{% endhighlight %}

Here is a trace of its use:

{% highlight c++ %}

faustbench karplus32.dsp 
Selected compiler is g++ with CXXFLAGS = -Ofast
-scal : 77.5123
-vec -lv 0 -vs 4 : 64.2194
-vec -lv 0 -vs 8 : 80.8951
-vec -lv 0 -vs 16 : 106.244
.....
-vec -lv 1 -vs 128 -g : 130.635
-vec -lv 1 -vs 256 -g : 134.335
-vec -lv 1 -vs 512 -g : 135.352
Best value is : 136.235 with -vec -lv 0 -vs 512

{% endhighlight %}

### Using the faustbench-llvm tool ###

Available in the **faust2** branch only, the **faustbench-llvm** tool uses the libfaust library and its LLVM backend to dynamically compile DSP objects produced with different Faust compiler options, and then measure their DSP CPU. In the main Faust folder, use **make bench && sudo make install** to build and install the tool. Here is a trace of its use:

{% highlight c++ %}

faustbench-llvm karplus32.dsp 
Estimate timing parameters
-scal : 21.1269
duration = 0.102801 count = 24318
Discover best parameters option
-scal : 21.1034
-vec -lv 0 -vs 4 : 42.0734
-vec -lv 0 -vs 8 : 55.3725
-vec -lv 0 -vs 16 : 85.3855
.....
-vec -lv 1 -vs 128 -dfs : 133.974
-vec -lv 1 -vs 256 -dfs : 139.12
-vec -lv 1 -vs 512 -dfs : 91.8424
Refined with -mcd
-vec -lv 0 -vs 256 -g -mcd 2 : 83.5555
-vec -lv 0 -vs 256 -g -mcd 4 : 138.519
-vec -lv 0 -vs 256 -g -mcd 8 : 140.122
-vec -lv 0 -vs 256 -g -mcd 16 : 141.558
-vec -lv 0 -vs 256 -g -mcd 32 : 139.454
-vec -lv 0 -vs 256 -g -mcd 64 : 143.405
-vec -lv 0 -vs 256 -g -mcd 128 : 142.975
-vec -lv 0 -vs 256 -g -mcd 256 : 139.345
Best value is for 'karplus32.dsp' is : 142.473 with -vec -lv 0 -vs 256 -dfs -mcd 64 w

{% endhighlight %}

