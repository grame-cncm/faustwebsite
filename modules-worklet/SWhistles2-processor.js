
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles2() {
	return "{\"name\":\"Whistles 2\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 2\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"197000\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"48\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"400\",\"min\":\"220\",\"max\":\"660\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"131264\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"131384\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"131252\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles2() { return "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IjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IldoaXN0bGVzIDIifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2hpc3RsZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1doaXN0bGVzL09OL09GRl8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjE5NzAwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTIgMCAyIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1doaXN0bGVzL0ZyZXF1ZW5jeSIsImluZGV4IjoiNDgiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQwMCIsIm1pbiI6IjIyMCIsIm1heCI6IjY2MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDAiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8wIiwiaW5kZXgiOiIxMzEyNjQiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMSIsImluZGV4IjoiMTMxMzg0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjEzMTI1MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
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

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = SWhistles2Processor.SWhistles2_instance.exports;
        this.HEAP = SWhistles2Processor.SWhistles2_instance.exports.memory.buffer;
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

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SWhistles2Processor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SWhistles2Processor.buffer_size, this.ins, this.outs);
        
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
    let wasm_module = new WebAssembly.Module(SWhistles2Processor.atob(getBase64CodeSWhistles2()));
    SWhistles2Processor.SWhistles2_instance = new WebAssembly.Instance(wasm_module, SWhistles2Processor.importObject);
    registerProcessor('SWhistles2', SWhistles2Processor);
} catch (e) {
    console.log(e); console.log("Faust SWhistles2 cannot be loaded or compiled");
}

