
/*
Code generated with Faust version 2.5.21
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.21\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ikluc3RyUmV2ZXJiIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemUiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWUiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class InstrReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            InstrReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            InstrReverbProcessor.parse_items(group.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= InstrReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        InstrReverbProcessor.parse_ui(JSON.parse(getJSONInstrReverb()).ui, params, InstrReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONInstrReverb());

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
        
        this.factory = InstrReverbProcessor.InstrReverb_instance.exports;
        this.HEAP = InstrReverbProcessor.InstrReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * InstrReverbProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            InstrReverbProcessor.parse_ui(this.json_object.ui, this, InstrReverbProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, InstrReverbProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, InstrReverbProcessor.buffer_size, this.ins, this.outs);
        
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

InstrReverbProcessor.buffer_size = 128;

InstrReverbProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(InstrReverbProcessor.atob(getBase64CodeInstrReverb()));
    InstrReverbProcessor.InstrReverb_instance = new WebAssembly.Instance(wasm_module, InstrReverbProcessor.importObject);
    registerProcessor('InstrReverb', InstrReverbProcessor);
} catch (e) {
    console.log(e); console.log("Faust InstrReverb cannot be loaded or compiled");
}

