
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"197000\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"44\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"216\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"65836\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"196988\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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LjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IldoaXN0bGVzIDMifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2hpc3RsZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1doaXN0bGVzL09OL09GRl8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjE5NzAwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTIgMCAyIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1doaXN0bGVzL0ZyZXF1ZW5jeSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjgyMCIsIm1pbiI6IjY2MCIsIm1heCI6IjExMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAwIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMCIsImluZGV4IjoiMjE2IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzEiLCJpbmRleCI6IjY1ODM2IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjE5Njk4OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn1dfV19MA=="; }

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
faust.SWhistles3_instance = null;

// Monophonic Faust DSP
class SWhistles3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles3Processor.parse_items(group.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
        SWhistles3Processor.parse_ui(JSON.parse(getJSONSWhistles3()).ui, params, SWhistles3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSWhistles3());
        
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
        
        this.factory = faust.SWhistles3_instance.exports;
        this.HEAP = faust.SWhistles3_instance.exports.memory.buffer;
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
            SWhistles3Processor.parse_ui(this.json_object.ui, this, SWhistles3Processor.parse_item2);
            
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
	registerProcessor('SWhistles3', SWhistles3Processor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeSWhistles3()), faust.importObject)
            .then(dsp_module => {
                  faust.SWhistles3_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('SWhistles3', SWhistles3Processor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SWhistles3 cannot be loaded or compiled"); });
