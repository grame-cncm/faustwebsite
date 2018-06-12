
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"filename\":\"Brass\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860888\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Brass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"0\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"140\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"60\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32972\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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In0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiQnJhc3MifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIwIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxNDAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiNjAiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk3MiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

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
                nUint24 |= BrassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBrass());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.Brass_instance = new WebAssembly.Instance(BrassProcessor.wasm_module, BrassProcessor.importObject);
  	   	this.factory = this.Brass_instance.exports;
        this.HEAP = this.Brass_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BrassProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
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
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
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
        this.factory.compute(this.dsp, BrassProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

BrassProcessor.buffer_size = 128;

BrassProcessor.importObject = {
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
    if (BrassProcessor.wasm_module == undefined) {
        BrassProcessor.wasm_module = new WebAssembly.Module(BrassProcessor.atob(getBase64CodeBrass()));
        registerProcessor('Brass', BrassProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Brass cannot be loaded or compiled");
}

