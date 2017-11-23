
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131200\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131176\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131188\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131256\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131272\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"196952\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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b3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTIwMCIsIm1ldGEiOlt7IjAiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvRmx1dGUvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzExNzYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyNDciLCJtYXgiOiIxMjAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvRmx1dGUvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTE4OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC45NiIsIm1pbiI6IjAuMiIsIm1heCI6IjAuOTkiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvRmx1dGUvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyNTYiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4yIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXEgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9WaWJyYXRvX0ZyZXFfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzEyNzIiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuNSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxOTY5NTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNzIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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
