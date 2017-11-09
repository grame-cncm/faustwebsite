
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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aWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzMiJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiODgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk2NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
faust.Brass_instance = null;

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONBrass());
        
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
        
        this.factory = faust.Brass_instance.exports;
        this.HEAP = faust.Brass_instance.exports.memory.buffer;
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
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeBrass()), faust.importObject)
            .then(dsp_module => {
                  faust.Brass_instance = dsp_module.instance;
                  registerProcessor('Brass', BrassProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Brass cannot be loaded or compiled"); });
