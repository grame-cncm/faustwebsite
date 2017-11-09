
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONRandomRingModulation() {
	return "{\"name\":\"Random Ring Modulator\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"724\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Ring Modulator\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Ring Modulator\",\"items\":[{\"type\":\"hslider\",\"label\":\"Ring Modulation Speed Range\",\"address\":\"/Random_Ring_Modulator/Ring_Modulation_Speed_Range\",\"index\":\"672\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"scale\":\"log\"}],\"init\":\"20\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Occurrence Speed (Granulator)\",\"address\":\"/Random_Ring_Modulator/Occurrence_Speed_(Granulator)\",\"index\":\"80\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability(Granulator)\",\"address\":\"/Random_Ring_Modulator/Probability(Granulator)\",\"index\":\"48\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeRandomRingModulation() { return "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LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBSaW5nIE1vZHVsYXRvciIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmluZyBNb2R1bGF0aW9uIFNwZWVkIFJhbmdlIiwiYWRkcmVzcyI6Ii9SYW5kb21fUmluZ19Nb2R1bGF0b3IvUmluZ19Nb2R1bGF0aW9uX1NwZWVkX1JhbmdlIiwiaW5kZXgiOiI2NzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InNjYWxlIjoibG9nIn1dLCJpbml0IjoiMjAiLCJtaW4iOiIxMCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPY2N1cnJlbmNlIFNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1JpbmdfTW9kdWxhdG9yL09jY3VycmVuY2VfU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI4MCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eShHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1JpbmdfTW9kdWxhdG9yL1Byb2JhYmlsaXR5KEdyYW51bGF0b3IpIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfTA="; }

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
faust.RandomRingModulation_instance = null;

// Monophonic Faust DSP
class RandomRingModulationProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            RandomRingModulationProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            RandomRingModulationProcessor.parse_items(group.items, obj, callback);
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
            RandomRingModulationProcessor.parse_items(item.items, obj, callback);
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
            RandomRingModulationProcessor.parse_items(item.items, obj, callback);
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
        RandomRingModulationProcessor.parse_ui(JSON.parse(getJSONRandomRingModulation()).ui, params, RandomRingModulationProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONRandomRingModulation());
        
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
        
        this.factory = faust.RandomRingModulation_instance.exports;
        this.HEAP = faust.RandomRingModulation_instance.exports.memory.buffer;
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
            RandomRingModulationProcessor.parse_ui(this.json_object.ui, this, RandomRingModulationProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeRandomRingModulation()), faust.importObject)
            .then(dsp_module => {
                  faust.RandomRingModulation_instance = dsp_module.instance;
                  registerProcessor('RandomRingModulation', RandomRingModulationProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust RandomRingModulation cannot be loaded or compiled"); });
