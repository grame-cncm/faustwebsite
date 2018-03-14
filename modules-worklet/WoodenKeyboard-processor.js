
/*
Code generated with Faust version 2.5.24
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"filename\":\"WoodenKeyboard\",\"version\":\"2.5.24\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"33224\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"WoodenKeyboard\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"20\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"440\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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EoM6QQAqAgyUOAJcQQBDBHGBREEAKgIMlTgCfAuQgICAAAAgACABEAkgABALIAAQCAurgICAAABBAEMAAKBAOAIUQQBDAACgQDgCSEEAQ83MTD44AmBBAEPNzMw9OAK4AwuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwusjICAAAEAQQALpQx7Im5hbWUiOiJXb29kZW4gS2V5Ym9hcmQiLCJmaWxlbmFtZSI6Ildvb2RlbktleWJvYXJkIiwidmVyc2lvbiI6IjIuNS4yNCIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiMzMyMjQiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiV29vZGVuS2V5Ym9hcmQifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ildvb2RlbiBLZXlib2FyZCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ildvb2RlbiBLZXlib2FyZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBIYW5kIiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvSW5zdHJ1bWVudF9IYW5kIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkhpZ2h0IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvSGlnaHQiLCJpbmRleCI6IjIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDMwIn1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjMifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJOb3RlIER1cmF0aW9uIChCUEYgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvTm90ZV9EdXJhdGlvbl8oQlBGX0VudmVsb3BlKSIsImluZGV4IjoiOTYiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4xIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJFY2hvIEludGVuc2l0eSIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL0VjaG9fSW50ZW5zaXR5IiwiaW5kZXgiOiI0NDAiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTUifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC45Iiwic3RlcCI6IjAuMDEifV19XX0w"; }

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

