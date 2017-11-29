
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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bWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQmlyZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjA4IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIyNDAiLCJtaW4iOiIxMjAiLCJtYXgiOiI0ODAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiNTAiLCJtaW4iOiIyNSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

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
faust.SBird_instance = null;

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSBird());
        
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
        
        this.factory = faust.SBird_instance.exports;
        this.HEAP = faust.SBird_instance.exports.memory.buffer;
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
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
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
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeSBird()));
	faust.SBird_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('SBird', SBirdProcessor);
} catch (e) {
	console.log(e); console.log("Faust SBird cannot be loaded or compiled")
}

