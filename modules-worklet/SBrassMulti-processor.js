
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"98688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"52\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"40\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"32996\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"65852\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"32992\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"65848\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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NEEAQwAAAD84AuCBAkEAQwAA3EM4AuSBAkEAQwAAAD84AriCBEEAQ3vUEkQ4AryCBAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuPl4CAAAEAQQALiBd7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyIsInZlcnNpb24iOiIyLjUuOSIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiOTg2ODgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTXVsdGlwbGUgQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvT04vT0ZGIiwiaW5kZXgiOiI1MiIsImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVxdWVuY2llcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMSIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiMzI5OTYiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiNjU4NTIiLCJtZXRhIjpbeyJhY2MiOiIyIDAgLTEwIDAgMTIifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIzMjk5MiIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjY1ODQ4IiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19XX1dfTA="; }

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
faust.SBrassMulti_instance = null;

// Monophonic Faust DSP
class SBrassMultiProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBrassMultiProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBrassMultiProcessor.parse_items(group.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
        SBrassMultiProcessor.parse_ui(JSON.parse(getJSONSBrassMulti()).ui, params, SBrassMultiProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSBrassMulti());
        
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
        
        this.factory = faust.SBrassMulti_instance.exports;
        this.HEAP = faust.SBrassMulti_instance.exports.memory.buffer;
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
            SBrassMultiProcessor.parse_ui(this.json_object.ui, this, SBrassMultiProcessor.parse_item2);
            
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

// Synchronously compile and instantiate the WASM module
try {
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeSBrassMulti()));
	faust.SBrassMulti_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('SBrassMulti', SBrassMultiProcessor);
} catch (e) {
	console.log(e); console.log("Faust SBrassMulti cannot be loaded or compiled")
}

