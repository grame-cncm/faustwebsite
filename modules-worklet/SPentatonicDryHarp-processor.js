
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"116\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"88\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"160\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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aWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUGVudGF0b25pY0RyeUhhcnAifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiaGFycCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBIYW5kIiwiYWRkcmVzcyI6Ii9oYXJwL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiMTE2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMTEiLCJtaW4iOiIwIiwibWF4IjoiMjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQiLCJhZGRyZXNzIjoiL2hhcnAvUGFyYW1ldGVycy9TcGVlZCIsImluZGV4IjoiODgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEyIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQ4MCIsIm1pbiI6IjE4MCIsIm1heCI6IjcyMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmVzb25hbmNlIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvUmVzb25hbmNlIiwiaW5kZXgiOiIxNjAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIyIDEgLTEyIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwLjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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
faust.SPentatonicDryHarp_instance = null;

// Monophonic Faust DSP
class SPentatonicDryHarpProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPentatonicDryHarpProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPentatonicDryHarpProcessor.parse_items(group.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
        SPentatonicDryHarpProcessor.parse_ui(JSON.parse(getJSONSPentatonicDryHarp()).ui, params, SPentatonicDryHarpProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSPentatonicDryHarp());
        
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
        
        this.factory = faust.SPentatonicDryHarp_instance.exports;
        this.HEAP = faust.SPentatonicDryHarp_instance.exports.memory.buffer;
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
            SPentatonicDryHarpProcessor.parse_ui(this.json_object.ui, this, SPentatonicDryHarpProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, 128, this.ins, this.outs);
        
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

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeSPentatonicDryHarp()), faust.importObject)
            .then(dsp_module => {
                  faust.SPentatonicDryHarp_instance = dsp_module.instance;
                  registerProcessor('SPentatonicDryHarp', SPentatonicDryHarpProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SPentatonicDryHarp cannot be loaded or compiled"); });
