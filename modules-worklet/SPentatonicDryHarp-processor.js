
/*
Code generated with Faust version 2.5.15
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.15\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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eyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjEyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

