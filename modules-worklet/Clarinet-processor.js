
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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eyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTYwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTIwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwNzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

faust.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

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
