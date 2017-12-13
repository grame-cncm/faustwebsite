
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"33208\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"0\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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zEw+OAJgC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC/CLgIAAAQBBAAvpC3sibmFtZSI6Ildvb2RlbiBLZXlib2FyZCIsInZlcnNpb24iOiIyLjUuMTIiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjMzMjA4IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiRVIifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJXb29kZW4gS2V5Ym9hcmQifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXb29kZW4gS2V5Ym9hcmQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJIaWdodCIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL0hpZ2h0IiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAzMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4zIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTm90ZSBEdXJhdGlvbiAoQlBGIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL05vdGVfRHVyYXRpb25fKEJQRl9FbnZlbG9wZSkiLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMSIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRWNobyBJbnRlbnNpdHkiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9FY2hvX0ludGVuc2l0eSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxNSJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class WoodenKeyboardProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            WoodenKeyboardProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            WoodenKeyboardProcessor.parse_items(group.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= WoodenKeyboardProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        WoodenKeyboardProcessor.parse_ui(JSON.parse(getJSONWoodenKeyboard()).ui, params, WoodenKeyboardProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONWoodenKeyboard());

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
        
        this.factory = WoodenKeyboardProcessor.WoodenKeyboard_instance.exports;
        this.HEAP = WoodenKeyboardProcessor.WoodenKeyboard_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * WoodenKeyboardProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            WoodenKeyboardProcessor.parse_ui(this.json_object.ui, this, WoodenKeyboardProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, WoodenKeyboardProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, WoodenKeyboardProcessor.buffer_size, this.ins, this.outs);
        
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

WoodenKeyboardProcessor.buffer_size = 128;

WoodenKeyboardProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(WoodenKeyboardProcessor.atob(getBase64CodeWoodenKeyboard()));
    WoodenKeyboardProcessor.WoodenKeyboard_instance = new WebAssembly.Instance(wasm_module, WoodenKeyboardProcessor.importObject);
    registerProcessor('WoodenKeyboard', WoodenKeyboardProcessor);
} catch (e) {
    console.log(e); console.log("Faust WoodenKeyboard cannot be loaded or compiled");
}

