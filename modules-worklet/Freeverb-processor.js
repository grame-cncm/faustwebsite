
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFreeverb() {
	return "{\"name\":\"freeverb\",\"filename\":\"Freeverb\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"149856\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Grame\"},{\"copyright\":\"(c) GRAME 2006\"},{\"filename\":\"Freeverb\"},{\"license\":\"BSD\"},{\"name\":\"freeverb\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Freeverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Intensity\",\"address\":\"/Freeverb/Reverberation_Intensity\",\"index\":\"149840\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.3333\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Freeverb/Reverberation_Room_Size\",\"index\":\"8\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.5\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"}]}]}";
}
function getBase64CodeFreeverb() { return "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biI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZWV2ZXJiIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIEludGVuc2l0eSIsImFkZHJlc3MiOiIvRnJlZXZlcmIvUmV2ZXJiZXJhdGlvbl9JbnRlbnNpdHkiLCJpbmRleCI6IjE0OTg0MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMzMzMyIsIm1pbiI6IjAuMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9GcmVldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiOCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAuMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAyNSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class FreeverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FreeverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FreeverbProcessor.parse_items(group.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= FreeverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        FreeverbProcessor.parse_ui(JSON.parse(getJSONFreeverb()).ui, params, FreeverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONFreeverb());

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
        
        this.Freeverb_instance = new WebAssembly.Instance(FreeverbProcessor.wasm_module, FreeverbProcessor.importObject);
  	   	this.factory = this.Freeverb_instance.exports;
        this.HEAP = this.Freeverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * FreeverbProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((FreeverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + FreeverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((FreeverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + FreeverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FreeverbProcessor.parse_ui(this.json_object.ui, this, FreeverbProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, FreeverbProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, FreeverbProcessor.buffer_size, this.ins, this.outs);
        
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

FreeverbProcessor.buffer_size = 128;

FreeverbProcessor.importObject = {
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
    if (FreeverbProcessor.wasm_module == undefined) {
        FreeverbProcessor.wasm_module = new WebAssembly.Module(FreeverbProcessor.atob(getBase64CodeFreeverb()));
        registerProcessor('Freeverb', FreeverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Freeverb cannot be loaded or compiled");
}

