
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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UEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjEyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

