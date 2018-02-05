
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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L2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiSW5zdHJSZXZlcmIifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0w"; }

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

