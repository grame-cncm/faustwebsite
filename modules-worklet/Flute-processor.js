
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131292\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131308\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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Yi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTY4IiwibWV0YSI6W3siMCI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9GbHV0ZS9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTIyNCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjI0NyIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9QcmVzc3VyZSIsImluZGV4IjoiMTMxMjM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjk2IiwibWluIjoiMC4yIiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTI5MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL1ZpYnJhdG9fRnJlcV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTMwOCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC41IiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjUiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43MiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
faust.Flute_instance = null;

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONFlute());
        
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
        
        this.factory = faust.Flute_instance.exports;
        this.HEAP = faust.Flute_instance.exports.memory.buffer;
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
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.Flute_instance = dsp_module.instance;
                  registerProcessor('Flute', FluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Flute cannot be loaded or compiled"); });
