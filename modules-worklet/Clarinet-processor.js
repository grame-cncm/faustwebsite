
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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ZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTYwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTIwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwNzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
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
    
    static atob(sBase64, nBlocksSize)
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
                nUint24 |= ClarinetProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        ClarinetProcessor.parse_ui(JSON.parse(getJSONClarinet()).ui, params, ClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONClarinet());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = ClarinetProcessor.Clarinet_instance.exports;
        this.HEAP = ClarinetProcessor.Clarinet_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ClarinetProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ClarinetProcessor.parse_ui(this.json_object.ui, this, ClarinetProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, ClarinetProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, ClarinetProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

ClarinetProcessor.buffer_size = 128;

ClarinetProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(ClarinetProcessor.atob(getBase64CodeClarinet()));
    ClarinetProcessor.Clarinet_instance = new WebAssembly.Instance(wasm_module, ClarinetProcessor.importObject);
    registerProcessor('Clarinet', ClarinetProcessor);
} catch (e) {
    console.log(e); console.log("Faust Clarinet cannot be loaded or compiled");
}

