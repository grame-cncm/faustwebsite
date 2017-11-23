
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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In0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJJbnN0clJldmVyYiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
WebAssembly.instantiate(faust.atob(getBase64CodeInstrReverb()), faust.importObject)
            .then(dsp_module => {
                  faust.InstrReverb_instance = dsp_module.instance;
                  registerProcessor('InstrReverb', InstrReverbProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust InstrReverb cannot be loaded or compiled"); });
