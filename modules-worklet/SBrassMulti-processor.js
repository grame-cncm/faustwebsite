
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"98688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"52\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"40\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"32996\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"65852\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"32992\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"65848\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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gAAAQQBDAAAAPzgCIEEAQwAAuUM4AihBAEMAAAAAOAI0QQBDAAAAPzgC4IECQQBDAADcQzgC5IECQQBDAAAAPzgCuIIEQQBDe9QSRDgCvIIEC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC4+XgIAAAQBBAAuIF3sibmFtZSI6Ik11bHRpcGxlIEJyYXNzIiwidmVyc2lvbiI6IjIuNS40Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiI5ODY4OCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9PTi9PRkYiLCJpbmRleCI6IjUyIiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiI0MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzcwIiwibWluIjoiMjgwIiwibWF4IjoiMzgwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8yIiwiaW5kZXgiOiIzMjk5NiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMzgwIiwibWF4IjoiNTUwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMyIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8zIiwiaW5kZXgiOiI2NTg1MiIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTAgMCAxMiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzIiLCJpbmRleCI6IjMyOTkyIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiNjU4NDgiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifV19XX1dfV19MA=="; }

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
