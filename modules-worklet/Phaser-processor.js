
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONPhaser() {
	return "{\"name\":\"Phaser\",\"filename\":\"Phaser\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"192\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"filename\":\"Phaser\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Phaser\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"phaflangers.lib/name\":\"Faust Phaser and Flanger Library\"},{\"phaflangers.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Phaser\",\"items\":[{\"type\":\"vgroup\",\"label\":\"PHASER2\",\"meta\":[{\"tooltip\":\"Reference: https://ccrma.stanford.edu/~jos/pasp/Flanging.html\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/Phaser/PHASER2/0x00/Speed\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.001\"}]}]},{\"type\":\"hslider\",\"label\":\"Phaser Intensity\",\"address\":\"/Phaser/Phaser_Intensity\",\"index\":\"8\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"10\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodePhaser() { return "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IExpYnJhcnkifSx7InBoYWZsYW5nZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlBoYXNlciIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQSEFTRVIyIiwibWV0YSI6W3sidG9vbHRpcCI6IlJlZmVyZW5jZTogaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZsYW5naW5nLmh0bWwifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCIsImFkZHJlc3MiOiIvUGhhc2VyL1BIQVNFUjIvMHgwMC9TcGVlZCIsImluZGV4IjoiNDgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMyIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAwMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQaGFzZXIgSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9QaGFzZXIvUGhhc2VyX0ludGVuc2l0eSIsImluZGV4IjoiOCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6IjEwIiwibWluIjoiMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class PhaserProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            PhaserProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            PhaserProcessor.parse_items(group.items, obj, callback);
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
            PhaserProcessor.parse_items(item.items, obj, callback);
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
            PhaserProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= PhaserProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        PhaserProcessor.parse_ui(JSON.parse(getJSONPhaser()).ui, params, PhaserProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONPhaser());

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
        
        this.Phaser_instance = new WebAssembly.Instance(PhaserProcessor.wasm_module, PhaserProcessor.importObject);
  	   	this.factory = this.Phaser_instance.exports;
        this.HEAP = this.Phaser_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * PhaserProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((PhaserProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + PhaserProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((PhaserProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + PhaserProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            PhaserProcessor.parse_ui(this.json_object.ui, this, PhaserProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, PhaserProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, PhaserProcessor.buffer_size, this.ins, this.outs);
        
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

PhaserProcessor.buffer_size = 128;

PhaserProcessor.importObject = {
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
    if (PhaserProcessor.wasm_module == undefined) {
        PhaserProcessor.wasm_module = new WebAssembly.Module(PhaserProcessor.atob(getBase64CodePhaser()));
        registerProcessor('Phaser', PhaserProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Phaser cannot be loaded or compiled");
}

