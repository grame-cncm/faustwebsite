
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSFlute() {
	return "{\"name\":\"Flute\",\"filename\":\"SFlute\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"65832\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"0\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"84\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"144\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"160\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSFlute() { return "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Gw8LjICAgAAAIAAgAWogAjgCAAsLnJOAgAABAEEAC5UTeyJuYW1lIjoiRmx1dGUiLCJmaWxlbmFtZSI6IlNGbHV0ZSIsInZlcnNpb24iOiIyLjYuMSIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiNjU4MzIiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBGbHV0ZSJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlNGbHV0ZSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjAiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvRmx1dGUvRnJlcXVlbmN5IiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjI0NyIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9QcmVzc3VyZSIsImluZGV4IjoiODQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOTYiLCJtaW4iOiIwLjIiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0ZsdXRlL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTQ0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvVmlicmF0b19GcmVxXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTYwIiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjUiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SFluteProcessor.parse_items(group.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SFluteProcessor.parse_ui(JSON.parse(getJSONSFlute()).ui, params, SFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSFlute());

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
        
        this.SFlute_instance = new WebAssembly.Instance(SFluteProcessor.wasm_module, SFluteProcessor.importObject);
  	   	this.factory = this.SFlute_instance.exports;
        this.HEAP = this.SFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SFluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SFluteProcessor.parse_ui(this.json_object.ui, this, SFluteProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, SFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SFluteProcessor.buffer_size = 128;

SFluteProcessor.importObject = {
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
    if (SFluteProcessor.wasm_module == undefined) {
        SFluteProcessor.wasm_module = new WebAssembly.Module(SFluteProcessor.atob(getBase64CodeSFlute()));
        registerProcessor('SFlute', SFluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SFlute cannot be loaded or compiled");
}

