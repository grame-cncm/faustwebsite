
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"filename\":\"STibetanBowl\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24568\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STibetanBowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"40\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"1076\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24432\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24456\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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QQAqAgSUOAK4vAFBAEM78aBCQQAqAgSVOAK8vAFBAEOKYjo9QQAqAgSUOALUvgFBAENXFApDQQAqAgSVOALYvgFBAEPbD8lAQQAqAgSVOAKEvwFBAEMAAAAAQwAAgD9BACoCCJNBACoCFJWTOALsvwELkICAgAAAIAAgARAMIAAQDiAAEAsLr4CAgAAAQQBDAAAAADgCKEEAQwAA3EM4ArQIQQBDCtejPDgC8L4BQQBDAABcQzgCiL8BC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC72QgIAAAQBBAAu2EHsibmFtZSI6IlRpYmV0YW4gQm93bCIsImZpbGVuYW1lIjoiU1RpYmV0YW5Cb3dsIiwidmVyc2lvbiI6IjIuNi4xIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiIyNDU2OCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbGVuYW1lIjoiU1RpYmV0YW5Cb3dsIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRpYmV0YW4gQm93bCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRpYmV0YW4gQm93bCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUGxheSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL1BsYXkiLCJpbmRleCI6IjQwIiwibWV0YSI6W3siMCI6IiJ9LHsiYWNjIjoiMiAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiMD1Cb3c7IDE9U3RyaWtlIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9GcmVxdWVuY3kiLCJpbmRleCI6IjEwNzYiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjE4MCIsIm1heCI6Ijc4MCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb24iLCJpbmRleCI6IjI0NDMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiTm9ubGluZWFyaXR5IGZhY3RvciAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uX0ZyZXF1ZW5jeSIsImluZGV4IjoiMjQ0NTYiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIyMCIsIm1pbiI6IjE1MCIsIm1heCI6IjUwMCIsInN0ZXAiOiIwLjEifV19XX0w"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STibetanBowlProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTibetanBowl());

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
        
        this.STibetanBowl_instance = new WebAssembly.Instance(STibetanBowlProcessor.wasm_module, STibetanBowlProcessor.importObject);
  	   	this.factory = this.STibetanBowl_instance.exports;
        this.HEAP = this.STibetanBowl_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STibetanBowlProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, STibetanBowlProcessor.buffer_size, this.ins, this.outs);
        
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

STibetanBowlProcessor.buffer_size = 128;

STibetanBowlProcessor.importObject = {
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
    if (STibetanBowlProcessor.wasm_module == undefined) {
        STibetanBowlProcessor.wasm_module = new WebAssembly.Module(STibetanBowlProcessor.atob(getBase64CodeSTibetanBowl()));
        registerProcessor('STibetanBowl', STibetanBowlProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STibetanBowl cannot be loaded or compiled");
}

