
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjEyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

faust.asm2wasm = { // special asm2wasm imports
    "fmod": function(x, y) {
        return x % y;
    },
    "remainder": function(x, y) {
        return x - Math.round(x/y) * y;
    }
}

faust.importObject = { imports: { print: arg => console.log(arg) } }
faust.importObject["global.Math"] = Math;
faust.importObject["asm2wasm"] = faust.asm2wasm;

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
