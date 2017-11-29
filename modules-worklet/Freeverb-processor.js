
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONFreeverb() {
	return "{\"name\":\"freeverb\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"149856\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Grame\"},{\"copyright\":\"(c) GRAME 2006\"},{\"license\":\"BSD\"},{\"name\":\"freeverb\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Freeverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Intensity\",\"address\":\"/Freeverb/Reverberation_Intensity\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.3333\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Freeverb/Reverberation_Room_Size\",\"index\":\"20\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.5\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"}]}]}";
}
function getBase64CodeFreeverb() { return "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ACA8QQFqITwgPEECSARADAIMAQsLC0EAIT0DQAJAQcTqCCA9QQJ0akMAAAAAOAIAID1BAWohPSA9QYAESARADAIMAQsLC0EAIT4DQAJAQcT6CCA+QQJ0akMAAAAAOAIAID5BAWohPiA+QQJIBEAMAgwBCwsLQQAhPwNAAkBBzPoIID9BAnRqQwAAAAA4AgAgP0EBaiE/ID9BgARIBEAMAgwBCwsLQQAhQANAAkBBzIoJIEBBAnRqQwAAAAA4AgAgQEEBaiFAIEBBAkgEQAwCDAELCwtBACFBA0ACQEHUigkgQUECdGpDAAAAADgCACBBQQFqIUEgQUGAAkgEQAwCDAELCwtBACFCA0ACQEHUkgkgQkECdGpDAAAAADgCACBCQQFqIUIgQkECSARADAIMAQsLCwuLgICAAABBACABNgLckgkLkICAgAAAIAAgARAIIAAQCiAAEAcLloCAgAAAQQBDTKaqPjgCAEEAQwAAAD84AhQLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLuYaAgAABAEEAC7IGeyJuYW1lIjoiZnJlZXZlcmIiLCJ2ZXJzaW9uIjoiMi41LjkiLCJvcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjE0OTg1NiIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkdyYW1lIn0seyJjb3B5cmlnaHQiOiIoYykgR1JBTUUgMjAwNiJ9LHsibGljZW5zZSI6IkJTRCJ9LHsibmFtZSI6ImZyZWV2ZXJiIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvRnJlZXZlcmIuaHRtbCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBJbnRlbnNpdHkiLCJhZGRyZXNzIjoiL0ZyZWV2ZXJiL1JldmVyYmVyYXRpb25fSW50ZW5zaXR5IiwiaW5kZXgiOiIwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4zMzMzIiwibWluIjoiMC4xIiwibWF4IjoiMC45Iiwic3RlcCI6IjAuMDI1In0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUiLCJhZGRyZXNzIjoiL0ZyZWV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplIiwiaW5kZXgiOiIyMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAuMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAyNSJ9XX1dfTA="; }

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
faust.Freeverb_instance = null;

// Monophonic Faust DSP
class FreeverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FreeverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FreeverbProcessor.parse_items(group.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
        FreeverbProcessor.parse_ui(JSON.parse(getJSONFreeverb()).ui, params, FreeverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONFreeverb());
        
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
        
        this.factory = faust.Freeverb_instance.exports;
        this.HEAP = faust.Freeverb_instance.exports.memory.buffer;
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
            FreeverbProcessor.parse_ui(this.json_object.ui, this, FreeverbProcessor.parse_item2);
            
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
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeFreeverb()));
	faust.Freeverb_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('Freeverb', FreeverbProcessor);
} catch (e) {
	console.log(e); console.log("Faust Freeverb cannot be loaded or compiled")
}

