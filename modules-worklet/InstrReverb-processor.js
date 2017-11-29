
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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TUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJJbnN0clJldmVyYiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.InstrReverb_instance = null;

// Monophonic Faust DSP
class InstrReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            InstrReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            InstrReverbProcessor.parse_items(group.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
        InstrReverbProcessor.parse_ui(JSON.parse(getJSONInstrReverb()).ui, params, InstrReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONInstrReverb());
        
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
        
        this.factory = faust.InstrReverb_instance.exports;
        this.HEAP = faust.InstrReverb_instance.exports.memory.buffer;
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
            InstrReverbProcessor.parse_ui(this.json_object.ui, this, InstrReverbProcessor.parse_item2);
            
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

// Synchronously compile and instantiate the WASM module
try {
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeInstrReverb()));
	faust.InstrReverb_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('InstrReverb', InstrReverbProcessor);
} catch (e) {
	console.log(e); console.log("Faust InstrReverb cannot be loaded or compiled")
}

