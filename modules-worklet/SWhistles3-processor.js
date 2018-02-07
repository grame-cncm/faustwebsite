
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"197000\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"44\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"65728\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"65716\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"196988\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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Y2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV2hpc3RsZXMgMyJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGlzdGxlcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvT04vT0ZGXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTk3MDAwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMiAwIDIifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvRnJlcXVlbmN5IiwiaW5kZXgiOiI0NCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiODIwIiwibWluIjoiNjYwIiwibWF4IjoiMTEwMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDAiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8wIiwiaW5kZXgiOiI2NTcyOCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8xIiwiaW5kZXgiOiI2NTcxNiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8yIiwiaW5kZXgiOiIxOTY5ODgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles3Processor.parse_items(group.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SWhistles3Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SWhistles3Processor.parse_ui(JSON.parse(getJSONSWhistles3()).ui, params, SWhistles3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles3());

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
        
        this.factory = SWhistles3Processor.SWhistles3_instance.exports;
        this.HEAP = SWhistles3Processor.SWhistles3_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles3Processor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles3Processor.parse_ui(this.json_object.ui, this, SWhistles3Processor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SWhistles3Processor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SWhistles3Processor.buffer_size, this.ins, this.outs);
        
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

SWhistles3Processor.buffer_size = 128;

SWhistles3Processor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SWhistles3Processor.atob(getBase64CodeSWhistles3()));
    SWhistles3Processor.SWhistles3_instance = new WebAssembly.Instance(wasm_module, SWhistles3Processor.importObject);
    registerProcessor('SWhistles3', SWhistles3Processor);
} catch (e) {
    console.log(e); console.log("Faust SWhistles3 cannot be loaded or compiled");
}

