
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"33208\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"20\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"84\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"424\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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AEPNzEw+OAJUQQBDzczMPTgCqAMLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL6IuAgAABAEEAC+ELeyJuYW1lIjoiV29vZGVuIEtleWJvYXJkIiwidmVyc2lvbiI6IjIuNS40Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiIzMzIwOCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV29vZGVuIEtleWJvYXJkIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV29vZGVuIEtleWJvYXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSGlnaHQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9IaWdodCIsImluZGV4IjoiMjAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMzAifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMyJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik5vdGUgRHVyYXRpb24gKEJQRiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9Ob3RlX0R1cmF0aW9uXyhCUEZfRW52ZWxvcGUpIiwiaW5kZXgiOiI4NCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjEiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkVjaG8gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvRWNob19JbnRlbnNpdHkiLCJpbmRleCI6IjQyNCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxNSJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.WoodenKeyboard_instance = null;

// Monophonic Faust DSP
class WoodenKeyboardProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            WoodenKeyboardProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            WoodenKeyboardProcessor.parse_items(group.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
        WoodenKeyboardProcessor.parse_ui(JSON.parse(getJSONWoodenKeyboard()).ui, params, WoodenKeyboardProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONWoodenKeyboard());
        
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
        
        this.factory = faust.WoodenKeyboard_instance.exports;
        this.HEAP = faust.WoodenKeyboard_instance.exports.memory.buffer;
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
            WoodenKeyboardProcessor.parse_ui(this.json_object.ui, this, WoodenKeyboardProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeWoodenKeyboard()), faust.importObject)
            .then(dsp_module => {
                  faust.WoodenKeyboard_instance = dsp_module.instance;
                  registerProcessor('WoodenKeyboard', WoodenKeyboardProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust WoodenKeyboard cannot be loaded or compiled"); });
