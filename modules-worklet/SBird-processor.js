
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262192\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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eyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImJpcmQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJCaXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMDgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjI0MCIsIm1pbiI6IjEyMCIsIm1heCI6IjQ4MCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIxOTIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI1MCIsIm1pbiI6IjI1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0w"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBirdProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBird());

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
        
        this.SBird_instance = new WebAssembly.Instance(SBirdProcessor.wasm_module, SBirdProcessor.importObject);
  	   	this.factory = this.SBird_instance.exports;
        this.HEAP = this.SBird_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBirdProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, SBirdProcessor.buffer_size, this.ins, this.outs);
        
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

SBirdProcessor.buffer_size = 128;

SBirdProcessor.importObject = {
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
    if (SBirdProcessor.wasm_module == undefined) {
        SBirdProcessor.wasm_module = new WebAssembly.Module(SBirdProcessor.atob(getBase64CodeSBird()));
        registerProcessor('SBird', SBirdProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SBird cannot be loaded or compiled");
}

