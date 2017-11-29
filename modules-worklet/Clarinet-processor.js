
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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bmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIENsYXJpbmV0In0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ2xhcmluZXQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL1dvb2R3aW5kcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDTEFSSU5FVCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTE2MCIsIm1ldGEiOlt7IjEiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjg0IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjExMCIsIm1heCI6IjEzMDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9QcmVzc3VyZSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siYWNjIjoiMSAwIC01IDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAuNjUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyMDQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBTdGlmZm5lc3MiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvSW5zdHJ1bWVudF9TdGlmZm5lc3MiLCJpbmRleCI6IjEzMTMwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yNSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTY0MDc2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjEzNyIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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
        this.factory.compute(this.dsp, faust.buffer_size, this.ins, this.outs);
        
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

// Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
try {
	registerProcessor('Clarinet', ClarinetProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeClarinet()), faust.importObject)
            .then(dsp_module => {
                  faust.Clarinet_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('Clarinet', ClarinetProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Clarinet cannot be loaded or compiled"); });
