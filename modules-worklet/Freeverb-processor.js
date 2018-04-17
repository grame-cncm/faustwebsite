
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFreeverb() {
	return "{\"name\":\"freeverb\",\"filename\":\"Freeverb\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"149856\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Grame\"},{\"copyright\":\"(c) GRAME 2006\"},{\"filename\":\"Freeverb\"},{\"license\":\"BSD\"},{\"name\":\"freeverb\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Freeverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Intensity\",\"address\":\"/Freeverb/Reverberation_Intensity\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.3333\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Freeverb/Reverberation_Room_Size\",\"index\":\"20\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.5\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"}]}]}";
}
function getBase64CodeFreeverb() { return "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aW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9GcmVldmVyYi9SZXZlcmJlcmF0aW9uX0ludGVuc2l0eSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMzMzMyIsIm1pbiI6IjAuMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9GcmVldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiMjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMjUifV19XX0w"; }

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
        this.factory.compute(this.dsp, FreeverbProcessor.buffer_size, this.ins, this.outs);
        
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

