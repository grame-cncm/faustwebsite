
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"33224\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"84\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"108\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"0\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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EoM6QQAqAhiUOAJoQQBDbCOJREEAKgIYlTgCiAELkICAgAAAIAAgARAJIAAQCyAAEAgLqoCAgAAAQQBDzczMPTgCAEEAQwAAoEA4AiBBAEMAAKBAOAJUQQBDzcxMPjgCbAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvxi4CAAAEAQQAL6gt7Im5hbWUiOiJXb29kZW4gS2V5Ym9hcmQiLCJ2ZXJzaW9uIjoiMi41LjE3Iiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiIzMzIyNCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV29vZGVuIEtleWJvYXJkIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV29vZGVuIEtleWJvYXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6Ijg0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSGlnaHQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9IaWdodCIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMzAifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMyJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik5vdGUgRHVyYXRpb24gKEJQRiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9Ob3RlX0R1cmF0aW9uXyhCUEZfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMDgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4xIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJFY2hvIEludGVuc2l0eSIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL0VjaG9fSW50ZW5zaXR5IiwiaW5kZXgiOiIwIiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDE1In1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

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

