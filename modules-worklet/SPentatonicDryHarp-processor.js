
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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LmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUGVudGF0b25pY0RyeUhhcnAifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiaGFycCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBIYW5kIiwiYWRkcmVzcyI6Ii9oYXJwL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiMTIwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMTEiLCJtaW4iOiIwIiwibWF4IjoiMjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQiLCJhZGRyZXNzIjoiL2hhcnAvUGFyYW1ldGVycy9TcGVlZCIsImluZGV4IjoiOTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEyIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQ4MCIsIm1pbiI6IjE4MCIsIm1heCI6IjcyMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmVzb25hbmNlIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvUmVzb25hbmNlIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMiAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMC4xIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(SPentatonicDryHarpProcessor.atob(getBase64CodeSPentatonicDryHarp()));
    SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance = new WebAssembly.Instance(wasm_module, SPentatonicDryHarpProcessor.importObject);
    registerProcessor('SPentatonicDryHarp', SPentatonicDryHarpProcessor);
} catch (e) {
    console.log(e); console.log("Faust SPentatonicDryHarp cannot be loaded or compiled");
}

