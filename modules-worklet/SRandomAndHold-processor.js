
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomAndHold() {
	return "{\"name\":\"Random and Hold\",\"filename\":\"SRandomAndHold\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"256\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SRandomAndHold\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random and Hold\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random and Hold\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument hand\",\"address\":\"/Random_and_Hold/Instrument_hand\",\"index\":\"124\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hold\",\"address\":\"/Random_and_Hold/Hold\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -8 0 12\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/Random_and_Hold/Speed\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"120\",\"max\":\"720\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSRandomAndHold() { return "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Yi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBhbmQgSG9sZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBoYW5kIiwiYWRkcmVzcyI6Ii9SYW5kb21fYW5kX0hvbGQvSW5zdHJ1bWVudF9oYW5kIiwiaW5kZXgiOiIxMjQiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJIb2xkIiwiYWRkcmVzcyI6Ii9SYW5kb21fYW5kX0hvbGQvSG9sZCIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtOCAwIDEyIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCIsImFkZHJlc3MiOiIvUmFuZG9tX2FuZF9Ib2xkL1NwZWVkIiwiaW5kZXgiOiI5NiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNDgwIiwibWluIjoiMTIwIiwibWF4IjoiNzIwIiwic3RlcCI6IjEifV19XX0w"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomAndHoldProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomAndHoldProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomAndHoldProcessor.parse_items(group.items, obj, callback);
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
            SRandomAndHoldProcessor.parse_items(item.items, obj, callback);
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
            SRandomAndHoldProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomAndHoldProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomAndHoldProcessor.parse_ui(JSON.parse(getJSONSRandomAndHold()).ui, params, SRandomAndHoldProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomAndHold());

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
        
        this.SRandomAndHold_instance = new WebAssembly.Instance(SRandomAndHoldProcessor.wasm_module, SRandomAndHoldProcessor.importObject);
  	   	this.factory = this.SRandomAndHold_instance.exports;
        this.HEAP = this.SRandomAndHold_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomAndHoldProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomAndHoldProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomAndHoldProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomAndHoldProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomAndHoldProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomAndHoldProcessor.parse_ui(this.json_object.ui, this, SRandomAndHoldProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, SRandomAndHoldProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomAndHoldProcessor.buffer_size = 128;

SRandomAndHoldProcessor.importObject = {
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
    if (SRandomAndHoldProcessor.wasm_module == undefined) {
        SRandomAndHoldProcessor.wasm_module = new WebAssembly.Module(SRandomAndHoldProcessor.atob(getBase64CodeSRandomAndHold()));
        registerProcessor('SRandomAndHold', SRandomAndHoldProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SRandomAndHold cannot be loaded or compiled");
}

