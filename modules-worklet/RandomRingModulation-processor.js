
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONRandomRingModulation() {
	return "{\"name\":\"Random Ring Modulator\",\"filename\":\"RandomRingModulation\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"724\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"RandomRingModulation\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Ring Modulator\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Ring Modulator\",\"items\":[{\"type\":\"hslider\",\"label\":\"Ring Modulation Speed Range\",\"address\":\"/Random_Ring_Modulator/Ring_Modulation_Speed_Range\",\"index\":\"672\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"scale\":\"log\"}],\"init\":\"20\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Occurrence Speed (Granulator)\",\"address\":\"/Random_Ring_Modulator/Occurrence_Speed_(Granulator)\",\"index\":\"80\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability(Granulator)\",\"address\":\"/Random_Ring_Modulator/Probability(Granulator)\",\"index\":\"52\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeRandomRingModulation() { return "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IjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBSaW5nIE1vZHVsYXRvciIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmluZyBNb2R1bGF0aW9uIFNwZWVkIFJhbmdlIiwiYWRkcmVzcyI6Ii9SYW5kb21fUmluZ19Nb2R1bGF0b3IvUmluZ19Nb2R1bGF0aW9uX1NwZWVkX1JhbmdlIiwiaW5kZXgiOiI2NzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InNjYWxlIjoibG9nIn1dLCJpbml0IjoiMjAiLCJtaW4iOiIxMCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPY2N1cnJlbmNlIFNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1JpbmdfTW9kdWxhdG9yL09jY3VycmVuY2VfU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI4MCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eShHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX1JpbmdfTW9kdWxhdG9yL1Byb2JhYmlsaXR5KEdyYW51bGF0b3IpIiwiaW5kZXgiOiI1MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class RandomRingModulationProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            RandomRingModulationProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            RandomRingModulationProcessor.parse_items(group.items, obj, callback);
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
            RandomRingModulationProcessor.parse_items(item.items, obj, callback);
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
            RandomRingModulationProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= RandomRingModulationProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        RandomRingModulationProcessor.parse_ui(JSON.parse(getJSONRandomRingModulation()).ui, params, RandomRingModulationProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONRandomRingModulation());

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
        
        this.RandomRingModulation_instance = new WebAssembly.Instance(RandomRingModulationProcessor.wasm_module, RandomRingModulationProcessor.importObject);
  	   	this.factory = this.RandomRingModulation_instance.exports;
        this.HEAP = this.RandomRingModulation_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * RandomRingModulationProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((RandomRingModulationProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + RandomRingModulationProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((RandomRingModulationProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + RandomRingModulationProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            RandomRingModulationProcessor.parse_ui(this.json_object.ui, this, RandomRingModulationProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, RandomRingModulationProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, RandomRingModulationProcessor.buffer_size, this.ins, this.outs);
        
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

RandomRingModulationProcessor.buffer_size = 128;

RandomRingModulationProcessor.importObject = {
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
    if (RandomRingModulationProcessor.wasm_module == undefined) {
        RandomRingModulationProcessor.wasm_module = new WebAssembly.Module(RandomRingModulationProcessor.atob(getBase64CodeRandomRingModulation()));
        registerProcessor('RandomRingModulation', RandomRingModulationProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust RandomRingModulation cannot be loaded or compiled");
}

