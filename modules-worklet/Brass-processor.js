
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkJyYXNzIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9CcmFzc2VzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMzIifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwMCIsIm1pbiI6IjE3MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxdWVuY3kgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1BhcmFtZXRlcnMvMHgwMC9WaWJyYXRvX0ZyZXF1ZW5jeV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzI5NjQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTIifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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
faust.Brass_instance = null;

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONBrass());
        
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
        
        this.factory = faust.Brass_instance.exports;
        this.HEAP = faust.Brass_instance.exports.memory.buffer;
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
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
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
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeBrass()));
	faust.Brass_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('Brass', BrassProcessor);
} catch (e) {
	console.log(e); console.log("Faust Brass cannot be loaded or compiled")
}

