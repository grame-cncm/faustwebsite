
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSModulation3() {
	return "{\"name\":\"Modulation 3\",\"filename\":\"SModulation3\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"262380\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SModulation3\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Modulation 3\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"NLFMs\",\"items\":[{\"type\":\"hslider\",\"label\":\"Modulation Type 3\",\"address\":\"/NLFMs/Modulation_Type_3\",\"index\":\"262252\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/NLFMs/Frequency\",\"index\":\"262184\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 15\"},{\"unit\":\"Hz\"}],\"init\":\"330\",\"min\":\"100\",\"max\":\"1200\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Volume\",\"address\":\"/NLFMs/Volume\",\"index\":\"262360\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Modulating Frequency\",\"address\":\"/NLFMs/Modulating_Frequency\",\"index\":\"262216\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"1200\",\"min\":\"900\",\"max\":\"1700\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSModulation3() { return "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aW9uMyJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik1vZHVsYXRpb24gMyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik5MRk1zIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIFR5cGUgMyIsImFkZHJlc3MiOiIvTkxGTXMvTW9kdWxhdGlvbl9UeXBlXzMiLCJpbmRleCI6IjI2MjI1MiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9OTEZNcy9GcmVxdWVuY3kiLCJpbmRleCI6IjI2MjE4NCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxNSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzMwIiwibWluIjoiMTAwIiwibWF4IjoiMTIwMCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUiLCJhZGRyZXNzIjoiL05MRk1zL1ZvbHVtZSIsImluZGV4IjoiMjYyMzYwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGluZyBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL05MRk1zL01vZHVsYXRpbmdfRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjIyMTYiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTIwMCIsIm1pbiI6IjkwMCIsIm1heCI6IjE3MDAiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SModulation3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SModulation3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SModulation3Processor.parse_items(group.items, obj, callback);
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
            SModulation3Processor.parse_items(item.items, obj, callback);
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
            SModulation3Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SModulation3Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SModulation3Processor.parse_ui(JSON.parse(getJSONSModulation3()).ui, params, SModulation3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSModulation3());

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
        
        this.SModulation3_instance = new WebAssembly.Instance(SModulation3Processor.wasm_module, SModulation3Processor.importObject);
  	   	this.factory = this.SModulation3_instance.exports;
        this.HEAP = this.SModulation3_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SModulation3Processor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SModulation3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SModulation3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SModulation3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SModulation3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SModulation3Processor.parse_ui(this.json_object.ui, this, SModulation3Processor.parse_item2);
            
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
        this.factory.compute(this.dsp, SModulation3Processor.buffer_size, this.ins, this.outs);
        
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

SModulation3Processor.buffer_size = 128;

SModulation3Processor.importObject = {
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
    if (SModulation3Processor.wasm_module == undefined) {
        SModulation3Processor.wasm_module = new WebAssembly.Module(SModulation3Processor.atob(getBase64CodeSModulation3()));
        registerProcessor('SModulation3', SModulation3Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SModulation3 cannot be loaded or compiled");
}

