
/*
Code generated with Faust version 2.5.22
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.22\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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AEEAKgKAHjgChB5BAEEAKgL8HTgCgB5BAEEAKAKIHjYCjB5BAEEAKgKQHjgClB5BAEEAKgKcJjgCoCZBAEEAKgKYJjgCnCZBAEEAKAKkJjYCqCZBAEEAKgKsJjgCsCZBAEEAKgK4LjgCvC5BAEEAKgK0LjgCuC5BAEEAKALALjYCxC5BAEEAKgLILjgCzC5BAEEAKgLUPjgC2D5BAEEAKgLQPjgC1D5BAEEAKALcPjYC4D5BAEEAKgLkPjgC6D5BAEEAKgLwTjgC9E5BAEEAKgLsTjgC8E5BAEEAKAL4TjYC/E5BAEEAKgKATzgChE9BAEEAKgKMXzgCkF9BAEEAKgKIXzgCjF9BAEEAKAKUXzYCmF9BAEEAKgKcXzgCoF9BAEEAKgKoYzgCrGNBAEEAKgKkYzgCqGNBAEEAKAKwYzYCtGNBAEEAKgK4YzgCvGNBAEEAKgLEZzgCyGdBAEEAKgLAZzgCxGdBAEEAKALMZzYC0GdBAEEAKgLUZzgC2GdBAEEAKgLgazgC5GtBAEEAKgLcazgC4GtBAEEAKALoazYC7GtBAEEAKgLwazgC9GtBAEEAKgL8bzgCgHBBAEEAKgL4bzgC/G9BAEEAKAKEcDYCiHBBAEEAKgKMcDgCkHBBAEEAKgKYcjgCnHJBAEEAKgKUcjgCmHJBAEEAKAKgcjYCpHJBAEEAKgKocjgCrHJBAEEAKgK0dDgCuHRBAEEAKgKwdDgCtHRBAEEAKAK8dDYCwHRBAEEAKgLEdDgCyHRBAEEAKgLQdjgC1HZBAEEAKgLMdjgC0HZBAEEAKALYdjYC3HZBAEEAKgLgdjgC5HZBAEEAKgLseDgC8HhBAEEAKgLoeDgC7HhBAEEAKAL0eDYC+HhBAEEAKgL8eDgCgHlBAEEAKgKIezgCjHtBAEEAKgKEezgCiHtBAEEAKAKQezYClHtBAEEAKgKYezgCnHtBAEEAKgKkfDgCqHxBAEEAKgKgfDgCpHxBAEEAKAKsfDYCsHxBAEEAKgK0fDgCuHxBAEEAKgLAfTgCxH1BAEEAKgK8fTgCwH1BAEEAKALIfTYCzH1BAEEAKgLQfTgC1H1BAEEAKgLcfjgC4H5BAEEAKgLYfjgC3H4gCEEEaiEIIAhBBCABbEgEQAwCDAELCwsLhYCAgAAAQQAPC4WAgIAAAEECDwuLgICAAAAgACABaioCAA8L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bmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjEyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

