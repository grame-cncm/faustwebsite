
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUGVudGF0b25pY0RyeUhhcnAifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiaGFycCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBIYW5kIiwiYWRkcmVzcyI6Ii9oYXJwL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiMTIwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMTEiLCJtaW4iOiIwIiwibWF4IjoiMjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQiLCJhZGRyZXNzIjoiL2hhcnAvUGFyYW1ldGVycy9TcGVlZCIsImluZGV4IjoiOTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEyIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQ4MCIsIm1pbiI6IjE4MCIsIm1heCI6IjcyMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmVzb25hbmNlIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvUmVzb25hbmNlIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMiAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMC4xIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SPentatonicDryHarpProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPentatonicDryHarpProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPentatonicDryHarpProcessor.parse_items(group.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
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
                nUint24 |= SPentatonicDryHarpProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SPentatonicDryHarpProcessor.parse_ui(JSON.parse(getJSONSPentatonicDryHarp()).ui, params, SPentatonicDryHarpProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSPentatonicDryHarp());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance.exports;
        this.HEAP = SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SPentatonicDryHarpProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SPentatonicDryHarpProcessor.parse_ui(this.json_object.ui, this, SPentatonicDryHarpProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SPentatonicDryHarpProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
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

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
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
        this.factory.compute(this.dsp, SPentatonicDryHarpProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SPentatonicDryHarpProcessor.buffer_size = 128;

SPentatonicDryHarpProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SPentatonicDryHarpProcessor.atob(getBase64CodeSPentatonicDryHarp()));
    SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance = new WebAssembly.Instance(wasm_module, SPentatonicDryHarpProcessor.importObject);
    registerProcessor('SPentatonicDryHarp', SPentatonicDryHarpProcessor);
} catch (e) {
    console.log(e); console.log("Faust SPentatonicDryHarp cannot be loaded or compiled");
}

