
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"filename\":\"SRandomFlute\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"66456\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SRandomFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"780\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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dCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU1JhbmRvbUZsdXRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUmFuZG9tIEZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIEZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMiLCJtaW4iOiIxIiwibWF4IjoiNiIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjI4IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI2MCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiI3ODAiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4wNSIsInN0ZXAiOiIwLjAwMDEifV19XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomFlute());

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
        
        this.SRandomFlute_instance = new WebAssembly.Instance(SRandomFluteProcessor.wasm_module, SRandomFluteProcessor.importObject);
  	   	this.factory = this.SRandomFlute_instance.exports;
        this.HEAP = this.SRandomFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomFluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SRandomFluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SRandomFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomFluteProcessor.buffer_size = 128;

SRandomFluteProcessor.importObject = {
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
    if (SRandomFluteProcessor.wasm_module == undefined) {
        SRandomFluteProcessor.wasm_module = new WebAssembly.Module(SRandomFluteProcessor.atob(getBase64CodeSRandomFlute()));
        registerProcessor('SRandomFlute', SRandomFluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SRandomFlute cannot be loaded or compiled");
}

