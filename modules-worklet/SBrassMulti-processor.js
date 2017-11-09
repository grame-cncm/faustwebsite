
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"98688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"80\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"65872\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"36\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"33016\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"65868\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"28\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"33012\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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IAI4AgALC5CXgIAAAQBBAAuJF3sibmFtZSI6Ik11bHRpcGxlIEJyYXNzIiwidmVyc2lvbiI6IjIuNC4xMiIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiOTg2ODgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTXVsdGlwbGUgQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvT04vT0ZGIiwiaW5kZXgiOiI4MCIsImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVxdWVuY2llcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMSIsImluZGV4IjoiNjU4NzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiMzMwMTYiLCJtZXRhIjpbeyJhY2MiOiIyIDAgLTEwIDAgMTIifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiNjU4NjgiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIyOCIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjMzMDEyIiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19XX1dfTA="; }

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
