
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWahWah() {
	return "{\"name\":\"WahWah\",\"filename\":\"WahWah\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"196\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"WahWah\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"WahWah\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"WahWah\",\"items\":[{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/WahWah/Wah_Wah\",\"index\":\"124\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/WahWah/Speed\",\"index\":\"96\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"540\",\"min\":\"360\",\"max\":\"780\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Wah wah intensity\",\"address\":\"/WahWah/Wah_wah_intensity\",\"index\":\"8\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"60\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWahWah() { return "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YXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IldhaFdhaCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZhZWZmZWN0cy5saWIvbmFtZSI6IkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSJ9LHsidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2FoV2FoIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9XYWhXYWgvV2FoX1dhaCIsImluZGV4IjoiMTI0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC42IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9XYWhXYWgvU3BlZWQiLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNTQwIiwibWluIjoiMzYwIiwibWF4IjoiNzgwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCB3YWggaW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9XYWhXYWgvV2FoX3dhaF9pbnRlbnNpdHkiLCJpbmRleCI6IjgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI2MCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class WahWahProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            WahWahProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            WahWahProcessor.parse_items(group.items, obj, callback);
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
            WahWahProcessor.parse_items(item.items, obj, callback);
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
            WahWahProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= WahWahProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        WahWahProcessor.parse_ui(JSON.parse(getJSONWahWah()).ui, params, WahWahProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONWahWah());

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
        
        this.WahWah_instance = new WebAssembly.Instance(WahWahProcessor.wasm_module, WahWahProcessor.importObject);
  	   	this.factory = this.WahWah_instance.exports;
        this.HEAP = this.WahWah_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * WahWahProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((WahWahProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + WahWahProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((WahWahProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + WahWahProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            WahWahProcessor.parse_ui(this.json_object.ui, this, WahWahProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, WahWahProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0][0] === undefined))) {
            console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0][0] === undefined))) {
            console.log("Process output error");
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
        this.factory.compute(this.dsp, WahWahProcessor.buffer_size, this.ins, this.outs);
        
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

WahWahProcessor.buffer_size = 128;

WahWahProcessor.importObject = {
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
    if (WahWahProcessor.wasm_module == undefined) {
        WahWahProcessor.wasm_module = new WebAssembly.Module(WahWahProcessor.atob(getBase64CodeWahWah()));
        registerProcessor('WahWah', WahWahProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust WahWah cannot be loaded or compiled");
}

