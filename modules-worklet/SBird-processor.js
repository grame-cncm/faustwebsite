
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262200\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262228\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJiaXJkIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQmlyZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjAwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIyNDAiLCJtaW4iOiIxMjAiLCJtYXgiOiI0ODAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjI4IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiNTAiLCJtaW4iOiIyNSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBirdProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBird());

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
        
        this.SBird_instance = new WebAssembly.Instance(SBirdProcessor.wasm_module, SBirdProcessor.importObject);
  	   	this.factory = this.SBird_instance.exports;
        this.HEAP = this.SBird_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBirdProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SBirdProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SBirdProcessor.buffer_size, this.ins, this.outs);
        
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

SBirdProcessor.buffer_size = 128;

SBirdProcessor.importObject = {
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
    if (SBirdProcessor.wasm_module == undefined) {
        SBirdProcessor.wasm_module = new WebAssembly.Module(SBirdProcessor.atob(getBase64CodeSBird()));
        registerProcessor('SBird', SBirdProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SBird cannot be loaded or compiled");
}

