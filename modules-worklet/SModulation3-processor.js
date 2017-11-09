
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSModulation3() {
	return "{\"name\":\"Modulation 3\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"262372\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Modulation 3\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"NLFMs\",\"items\":[{\"type\":\"hslider\",\"label\":\"Modulation Type 3\",\"address\":\"/NLFMs/Modulation_Type_3\",\"index\":\"262244\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/NLFMs/Frequency\",\"index\":\"262184\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 15\"},{\"unit\":\"Hz\"}],\"init\":\"330\",\"min\":\"100\",\"max\":\"1200\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Volume\",\"address\":\"/NLFMs/Volume\",\"index\":\"262352\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Modulating Frequency\",\"address\":\"/NLFMs/Modulating_Frequency\",\"index\":\"262216\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"1200\",\"min\":\"900\",\"max\":\"1700\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSModulation3() { return "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TWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNb2R1bGF0aW9uIDMifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJOTEZNcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiBUeXBlIDMiLCJhZGRyZXNzIjoiL05MRk1zL01vZHVsYXRpb25fVHlwZV8zIiwiaW5kZXgiOiIyNjIyNDQiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvTkxGTXMvRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjIxODQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTUifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMzMCIsIm1pbiI6IjEwMCIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIiwiYWRkcmVzcyI6Ii9OTEZNcy9Wb2x1bWUiLCJpbmRleCI6IjI2MjM1MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpbmcgRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9OTEZNcy9Nb2R1bGF0aW5nX0ZyZXF1ZW5jeSIsImluZGV4IjoiMjYyMjE2IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjEyMDAiLCJtaW4iOiI5MDAiLCJtYXgiOiIxNzAwIiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

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
faust.SModulation3_instance = null;

// Monophonic Faust DSP
class SModulation3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SModulation3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SModulation3Processor.parse_items(group.items, obj, callback);
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
            SModulation3Processor.parse_items(item.items, obj, callback);
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
            SModulation3Processor.parse_items(item.items, obj, callback);
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
        SModulation3Processor.parse_ui(JSON.parse(getJSONSModulation3()).ui, params, SModulation3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSModulation3());
        
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
        
        this.factory = faust.SModulation3_instance.exports;
        this.HEAP = faust.SModulation3_instance.exports.memory.buffer;
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
            SModulation3Processor.parse_ui(this.json_object.ui, this, SModulation3Processor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSModulation3()), faust.importObject)
            .then(dsp_module => {
                  faust.SModulation3_instance = dsp_module.instance;
                  registerProcessor('SModulation3', SModulation3Processor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SModulation3 cannot be loaded or compiled"); });
