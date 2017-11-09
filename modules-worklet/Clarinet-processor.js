
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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RGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTYwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTIwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwNzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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
faust.Clarinet_instance = null;

// Monophonic Faust DSP
class ClarinetProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ClarinetProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ClarinetProcessor.parse_items(group.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
        ClarinetProcessor.parse_ui(JSON.parse(getJSONClarinet()).ui, params, ClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONClarinet());
        
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
        
        this.factory = faust.Clarinet_instance.exports;
        this.HEAP = faust.Clarinet_instance.exports.memory.buffer;
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
            ClarinetProcessor.parse_ui(this.json_object.ui, this, ClarinetProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeClarinet()), faust.importObject)
            .then(dsp_module => {
                  faust.Clarinet_instance = dsp_module.instance;
                  registerProcessor('Clarinet', ClarinetProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Clarinet cannot be loaded or compiled"); });
