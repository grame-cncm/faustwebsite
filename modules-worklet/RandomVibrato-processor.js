
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONRandomVibrato() {
	return "{\"name\":\"Random Vibrato\",\"filename\":\"RandomVibrato\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"736\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"RandomVibrato\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Vibrato\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Vibrato\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Speed Range\",\"address\":\"/Random_Vibrato/Vibrato_Speed_Range\",\"index\":\"684\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"scale\":\"log\"}],\"init\":\"10\",\"min\":\"5\",\"max\":\"40\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Vibrato Intensity\",\"address\":\"/Random_Vibrato/Vibrato_Intensity\",\"index\":\"8\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"0.4\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Occurrence Speed (Granulator)\",\"address\":\"/Random_Vibrato/Occurrence_Speed_(Granulator)\",\"index\":\"92\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Vibrato/Probability_(Granulator)\",\"index\":\"60\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeRandomVibrato() { return "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IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlJhbmRvbSBWaWJyYXRvIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIFZpYnJhdG8iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gU3BlZWQgUmFuZ2UiLCJhZGRyZXNzIjoiL1JhbmRvbV9WaWJyYXRvL1ZpYnJhdG9fU3BlZWRfUmFuZ2UiLCJpbmRleCI6IjY4NCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic2NhbGUiOiJsb2cifV0sImluaXQiOiIxMCIsIm1pbiI6IjUiLCJtYXgiOiI0MCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBJbnRlbnNpdHkiLCJhZGRyZXNzIjoiL1JhbmRvbV9WaWJyYXRvL1ZpYnJhdG9fSW50ZW5zaXR5IiwiaW5kZXgiOiI4IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMC40Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPY2N1cnJlbmNlIFNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1ZpYnJhdG8vT2NjdXJyZW5jZV9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1ZpYnJhdG8vUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class RandomVibratoProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            RandomVibratoProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            RandomVibratoProcessor.parse_items(group.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= RandomVibratoProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        RandomVibratoProcessor.parse_ui(JSON.parse(getJSONRandomVibrato()).ui, params, RandomVibratoProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONRandomVibrato());

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
        
        this.RandomVibrato_instance = new WebAssembly.Instance(RandomVibratoProcessor.wasm_module, RandomVibratoProcessor.importObject);
  	   	this.factory = this.RandomVibrato_instance.exports;
        this.HEAP = this.RandomVibrato_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * RandomVibratoProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((RandomVibratoProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + RandomVibratoProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((RandomVibratoProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + RandomVibratoProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            RandomVibratoProcessor.parse_ui(this.json_object.ui, this, RandomVibratoProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, RandomVibratoProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, RandomVibratoProcessor.buffer_size, this.ins, this.outs);
        
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

RandomVibratoProcessor.buffer_size = 128;

RandomVibratoProcessor.importObject = {
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
    if (RandomVibratoProcessor.wasm_module == undefined) {
        RandomVibratoProcessor.wasm_module = new WebAssembly.Module(RandomVibratoProcessor.atob(getBase64CodeRandomVibrato()));
        registerProcessor('RandomVibrato', RandomVibratoProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust RandomVibrato cannot be loaded or compiled");
}

