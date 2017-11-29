
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131292\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131308\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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bG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNjgiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjI0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNDQwIiwibWluIjoiMjQ3IiwibWF4IjoiMTIwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0ZsdXRlL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzEyMzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOTYiLCJtaW4iOiIwLjIiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0ZsdXRlL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMjkyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvVmlicmF0b19GcmVxXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMzA4IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjUiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjcyIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

faust.b64ToUint6 = function (nChr)
{
    return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
}

faust.atob = function (sBase64, nBlocksSize)
{
    if (typeof atob === 'function') {
        return atob(sBase64);
    } else {
        
        var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
        var nInLen = sB64Enc.length;
        var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
        var taBytes = new Uint8Array(nOutLen);
        
        for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
            nMod4 = nInIdx & 3;
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
            if (nMod4 === 3 || nInLen - nInIdx === 1) {
                for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                    taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                }
                nUint24 = 0;
            }
        }
        return taBytes.buffer;
    }
}

// WebAssembly instance
faust.Flute_instance = null;

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            FluteProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            FluteProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONFlute());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.Flute_instance.exports;
        this.HEAP = faust.Flute_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);
        
        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);
        
        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];
        
        // input items
        this.inputs_items = [];
        
        // Start of HEAP index
        
        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        // TODO: send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, faust.buffer_size, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
try {
	registerProcessor('Flute', FluteProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.Flute_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('Flute', FluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Flute cannot be loaded or compiled"); });
