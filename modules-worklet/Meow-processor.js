
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"98844\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"172\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"160\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"33116\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"65972\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"152\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"33112\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"65968\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"100\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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Yi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTWVvdyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmFlZmZlY3RzLmxpYi9uYW1lIjoiRmF1c3QgVmlydHVhbCBBbmFsb2cgRmlsdGVyIEVmZmVjdCBMaWJyYXJ5In0seyJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNRU9XIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL01FT1cvT04vT0ZGIiwiaW5kZXgiOiIxNzIiLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlcXVlbmNpZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzEiLCJpbmRleCI6IjE2MCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjMzMTE2IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiNjU5NzIiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIxNTIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjY1OTY4IiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCBXYWgiLCJhZGRyZXNzIjoiL01FT1cvV2FoX1dhaCIsImluZGV4IjoiMTAwIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xNSAxMCAwIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.Meow_instance = null;

// Monophonic Faust DSP
class MeowProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            MeowProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            MeowProcessor.parse_items(group.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
        MeowProcessor.parse_ui(JSON.parse(getJSONMeow()).ui, params, MeowProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONMeow());
        
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
        
        this.factory = faust.Meow_instance.exports;
        this.HEAP = faust.Meow_instance.exports.memory.buffer;
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
            MeowProcessor.parse_ui(this.json_object.ui, this, MeowProcessor.parse_item2);
            
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
	registerProcessor('Meow', MeowProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeMeow()), faust.importObject)
            .then(dsp_module => {
                  faust.Meow_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('Meow', MeowProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Meow cannot be loaded or compiled"); });
