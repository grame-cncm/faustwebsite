
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"66460\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"780\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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OiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJSYW5kb20gRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSYW5kb20gRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiNjAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjgiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6IjYwIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6Ijc4MCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjA1Iiwic3RlcCI6IjAuMDAwMSJ9XX1dfV19MA=="; }

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
faust.SRandomFlute_instance = null;

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSRandomFlute());
        
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
        
        this.factory = faust.SRandomFlute_instance.exports;
        this.HEAP = faust.SRandomFlute_instance.exports.memory.buffer;
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
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSRandomFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.SRandomFlute_instance = dsp_module.instance;
                  registerProcessor('SRandomFlute', SRandomFluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SRandomFlute cannot be loaded or compiled"); });
