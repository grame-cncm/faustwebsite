
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSModulation2() {
	return "{\"name\":\"Modulation 2\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"262332\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Modulation 2\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"NLFMs\",\"items\":[{\"type\":\"hslider\",\"label\":\"Modulation Type 2\",\"address\":\"/NLFMs/Modulation_Type_2\",\"index\":\"262204\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 1 -30 0 10\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/NLFMs/Frequency\",\"index\":\"262184\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 15\"},{\"unit\":\"Hz\"}],\"init\":\"330\",\"min\":\"100\",\"max\":\"1200\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Volume\",\"address\":\"/NLFMs/Volume\",\"index\":\"262312\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSModulation2() { return "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IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTW9kdWxhdGlvbiAyIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTkxGTXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gVHlwZSAyIiwiYWRkcmVzcyI6Ii9OTEZNcy9Nb2R1bGF0aW9uX1R5cGVfMiIsImluZGV4IjoiMjYyMjA0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMiAxIC0zMCAwIDEwIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL05MRk1zL0ZyZXF1ZW5jeSIsImluZGV4IjoiMjYyMTg0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDE1In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMzAiLCJtaW4iOiIxMDAiLCJtYXgiOiIxMjAwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSIsImFkZHJlc3MiOiIvTkxGTXMvVm9sdW1lIiwiaW5kZXgiOiIyNjIzMTIiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0w"; }

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
faust.SModulation2_instance = null;

// Monophonic Faust DSP
class SModulation2Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SModulation2Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SModulation2Processor.parse_items(group.items, obj, callback);
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
            SModulation2Processor.parse_items(item.items, obj, callback);
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
            SModulation2Processor.parse_items(item.items, obj, callback);
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
        SModulation2Processor.parse_ui(JSON.parse(getJSONSModulation2()).ui, params, SModulation2Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSModulation2());
        
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
        
        this.factory = faust.SModulation2_instance.exports;
        this.HEAP = faust.SModulation2_instance.exports.memory.buffer;
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
            SModulation2Processor.parse_ui(this.json_object.ui, this, SModulation2Processor.parse_item2);
            
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
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeSModulation2()));
	faust.SModulation2_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('SModulation2', SModulation2Processor);
} catch (e) {
	console.log(e); console.log("Faust SModulation2 cannot be loaded or compiled")
}

