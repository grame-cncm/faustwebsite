
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"65816\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"0\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"84\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"140\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"156\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSFlute() { return "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IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIEZsdXRlIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyNDciLCJtYXgiOiIxMjAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvRmx1dGUvUHJlc3N1cmUiLCJpbmRleCI6Ijg0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjk2IiwibWluIjoiMC4yIiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjE0MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL1ZpYnJhdG9fRnJlcV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjE1NiIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC41IiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifV19XX0w"; }

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
faust.SFlute_instance = null;

// Monophonic Faust DSP
class SFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SFluteProcessor.parse_items(group.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
        SFluteProcessor.parse_ui(JSON.parse(getJSONSFlute()).ui, params, SFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSFlute());
        
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
        
        this.factory = faust.SFlute_instance.exports;
        this.HEAP = faust.SFlute_instance.exports.memory.buffer;
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
            SFluteProcessor.parse_ui(this.json_object.ui, this, SFluteProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.SFlute_instance = dsp_module.instance;
                  registerProcessor('SFlute', SFluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SFlute cannot be loaded or compiled"); });
