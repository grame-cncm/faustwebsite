
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"98688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"60\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"65872\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"152\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"33016\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"65868\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"148\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"33012\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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OAI8QQBDAAAAPzgClAFBAEMAANxDOAKYAUEAQwAAAD84AvSBAkEAQ3vUEkQ4AviBAkEAQwAAAD84AsyCBEEAQwAAuUM4AtCCBAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuRl4CAAAEAQQALihd7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyIsInZlcnNpb24iOiIyLjUuNCIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiOTg2ODgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTXVsdGlwbGUgQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvT04vT0ZGIiwiaW5kZXgiOiI2MCIsImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVxdWVuY2llcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMSIsImluZGV4IjoiNjU4NzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiMTUyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjMzMDE2IiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMCAwIDEyIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1ODcuMzIiLCJtaW4iOiI1NTAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJHYWluIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzEiLCJpbmRleCI6IjY1ODY4IiwibWV0YSI6W3siYWNjIjoiMSAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMiIsImluZGV4IjoiMTQ4IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiMzMwMTIiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifV19XX1dfV19MA=="; }

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
faust.SBrassMulti_instance = null;

// Monophonic Faust DSP
class SBrassMultiProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBrassMultiProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBrassMultiProcessor.parse_items(group.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
        SBrassMultiProcessor.parse_ui(JSON.parse(getJSONSBrassMulti()).ui, params, SBrassMultiProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSBrassMulti());
        
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
        
        this.factory = faust.SBrassMulti_instance.exports;
        this.HEAP = faust.SBrassMulti_instance.exports.memory.buffer;
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
            SBrassMultiProcessor.parse_ui(this.json_object.ui, this, SBrassMultiProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSBrassMulti()), faust.importObject)
            .then(dsp_module => {
                  faust.SBrassMulti_instance = dsp_module.instance;
                  registerProcessor('SBrassMulti', SBrassMultiProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SBrassMulti cannot be loaded or compiled"); });
