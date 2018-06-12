
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles2() {
	return "{\"name\":\"Whistles 2\",\"filename\":\"SWhistles2\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SWhistles2\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 2\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"197000\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"44\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"400\",\"min\":\"220\",\"max\":\"660\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"216\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"65836\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"196988\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles2() { return "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aWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV2hpc3RsZXMgMiJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGlzdGxlcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvT04vT0ZGXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTk3MDAwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMiAwIDIifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvRnJlcXVlbmN5IiwiaW5kZXgiOiI0NCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDAwIiwibWluIjoiMjIwIiwibWF4IjoiNjYwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMCIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzAiLCJpbmRleCI6IjIxNiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8xIiwiaW5kZXgiOiI2NTgzNiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8yIiwiaW5kZXgiOiIxOTY5ODgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles2Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles2Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles2Processor.parse_items(group.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SWhistles2Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SWhistles2Processor.parse_ui(JSON.parse(getJSONSWhistles2()).ui, params, SWhistles2Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles2());

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
        
        this.SWhistles2_instance = new WebAssembly.Instance(SWhistles2Processor.wasm_module, SWhistles2Processor.importObject);
  	   	this.factory = this.SWhistles2_instance.exports;
        this.HEAP = this.SWhistles2_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles2Processor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles2Processor.parse_ui(this.json_object.ui, this, SWhistles2Processor.parse_item2);
            
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
        this.factory.compute(this.dsp, SWhistles2Processor.buffer_size, this.ins, this.outs);
        
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

SWhistles2Processor.buffer_size = 128;

SWhistles2Processor.importObject = {
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
    if (SWhistles2Processor.wasm_module == undefined) {
        SWhistles2Processor.wasm_module = new WebAssembly.Module(SWhistles2Processor.atob(getBase64CodeSWhistles2()));
        registerProcessor('SWhistles2', SWhistles2Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SWhistles2 cannot be loaded or compiled");
}

