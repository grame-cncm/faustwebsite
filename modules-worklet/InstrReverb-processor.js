
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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OiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJJbnN0clJldmVyYiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSIsImFkZHJlc3MiOiIvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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

