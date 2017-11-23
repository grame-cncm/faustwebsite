
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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Y2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBDbGFyaW5ldCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9Xb29kd2luZHMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ0xBUklORVQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNjAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ0xBUklORVQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTI4NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTQgMCAxMiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxMTAiLCJtYXgiOiIxMzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtNSAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjgiLCJtaW4iOiIwLjY1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMjA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMTIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0luc3RydW1lbnRfU3RpZmZuZXNzIiwiaW5kZXgiOiIxMzEzMDQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjE2NDA3NiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4xMzciLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjQ1IiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
