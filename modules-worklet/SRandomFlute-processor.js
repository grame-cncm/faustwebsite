
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"filename\":\"SRandomFlute\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"66464\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SRandomFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"784\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJTUmFuZG9tRmx1dGUifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJSYW5kb20gRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSYW5kb20gRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiNjAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjgiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6IjYwIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6Ijc4NCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjA1Iiwic3RlcCI6IjAuMDAwMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomFlute());

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
        
        this.SRandomFlute_instance = new WebAssembly.Instance(SRandomFluteProcessor.wasm_module, SRandomFluteProcessor.importObject);
  	   	this.factory = this.SRandomFlute_instance.exports;
        this.HEAP = this.SRandomFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomFluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, SRandomFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomFluteProcessor.buffer_size = 128;

SRandomFluteProcessor.importObject = {
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
    if (SRandomFluteProcessor.wasm_module == undefined) {
        SRandomFluteProcessor.wasm_module = new WebAssembly.Module(SRandomFluteProcessor.atob(getBase64CodeSRandomFlute()));
        registerProcessor('SRandomFlute', SRandomFluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SRandomFlute cannot be loaded or compiled");
}

