
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"filename\":\"STinkle\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24444\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STinkle\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"308\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"40\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "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C42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC9yKgIAAAQBBAAvVCnsibmFtZSI6IlRpbmtsZSIsImZpbGVuYW1lIjoiU1RpbmtsZSIsInZlcnNpb24iOiIyLjUuMzIiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0NDQ0IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiQmFuZGVkIFdhdmVndWlkZSBNb2RlbGQgVGliZXRhbiBCb3dsIn0seyJmaWxlbmFtZSI6IlNUaW5rbGUifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGlua2xlIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiVGlua2xlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpbmtsZS9GcmVxdWVuY3kiLCJpbmRleCI6IjMwOCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaW5rbGUvUGxheSIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STinkleProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STinkleProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STinkleProcessor.parse_items(group.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STinkleProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STinkleProcessor.parse_ui(JSON.parse(getJSONSTinkle()).ui, params, STinkleProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTinkle());

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
        
        this.STinkle_instance = new WebAssembly.Instance(STinkleProcessor.wasm_module, STinkleProcessor.importObject);
  	   	this.factory = this.STinkle_instance.exports;
        this.HEAP = this.STinkle_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STinkleProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STinkleProcessor.parse_ui(this.json_object.ui, this, STinkleProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, STinkleProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, STinkleProcessor.buffer_size, this.ins, this.outs);
        
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

STinkleProcessor.buffer_size = 128;

STinkleProcessor.importObject = {
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
    if (STinkleProcessor.wasm_module == undefined) {
        STinkleProcessor.wasm_module = new WebAssembly.Module(STinkleProcessor.atob(getBase64CodeSTinkle()));
        registerProcessor('STinkle', STinkleProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STinkle cannot be loaded or compiled");
}

