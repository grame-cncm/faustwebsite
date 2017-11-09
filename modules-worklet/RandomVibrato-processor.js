
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONRandomVibrato() {
	return "{\"name\":\"Random Vibrato\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"728\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Vibrato\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Vibrato\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Speed Range\",\"address\":\"/Random_Vibrato/Vibrato_Speed_Range\",\"index\":\"684\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"scale\":\"log\"}],\"init\":\"10\",\"min\":\"5\",\"max\":\"40\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Vibrato Intensity\",\"address\":\"/Random_Vibrato/Vibrato_Intensity\",\"index\":\"8\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"0.4\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Occurrence Speed (Granulator)\",\"address\":\"/Random_Vibrato/Occurrence_Speed_(Granulator)\",\"index\":\"92\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Vibrato/Probability_(Granulator)\",\"index\":\"60\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeRandomVibrato() { return "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bGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJSYW5kb20gVmlicmF0byJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBWaWJyYXRvIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIFNwZWVkIFJhbmdlIiwiYWRkcmVzcyI6Ii9SYW5kb21fVmlicmF0by9WaWJyYXRvX1NwZWVkX1JhbmdlIiwiaW5kZXgiOiI2ODQiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InNjYWxlIjoibG9nIn1dLCJpbml0IjoiMTAiLCJtaW4iOiI1IiwibWF4IjoiNDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9SYW5kb21fVmlicmF0by9WaWJyYXRvX0ludGVuc2l0eSIsImluZGV4IjoiOCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjAuNCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT2NjdXJyZW5jZSBTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9WaWJyYXRvL09jY3VycmVuY2VfU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI5MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9WaWJyYXRvL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiNjAiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6Ijc1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0w"; }

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
faust.RandomVibrato_instance = null;

// Monophonic Faust DSP
class RandomVibratoProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            RandomVibratoProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            RandomVibratoProcessor.parse_items(group.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
        RandomVibratoProcessor.parse_ui(JSON.parse(getJSONRandomVibrato()).ui, params, RandomVibratoProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONRandomVibrato());
        
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
        
        this.factory = faust.RandomVibrato_instance.exports;
        this.HEAP = faust.RandomVibrato_instance.exports.memory.buffer;
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
            RandomVibratoProcessor.parse_ui(this.json_object.ui, this, RandomVibratoProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeRandomVibrato()), faust.importObject)
            .then(dsp_module => {
                  faust.RandomVibrato_instance = dsp_module.instance;
                  registerProcessor('RandomVibrato', RandomVibratoProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust RandomVibrato cannot be loaded or compiled"); });
