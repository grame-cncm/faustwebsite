
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFrequencyGenerator() {
	return "{\"name\":\"Random Frequency Generator\",\"filename\":\"SRandomFrequencyGenerator\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"220\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SRandomFrequencyGenerator\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Frequency Generator\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Frequency Generator\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Random_Frequency_Generator/Instrument_Hand\",\"index\":\"116\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"8\",\"min\":\"0\",\"max\":\"15\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Random_Frequency_Generator/Hight\",\"index\":\"176\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"frequency range hight factor\"}],\"init\":\"1000\",\"min\":\"300\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/Random_Frequency_Generator/Speed\",\"index\":\"88\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"420\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSRandomFrequencyGenerator() { return "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ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJTUmFuZG9tRnJlcXVlbmN5R2VuZXJhdG9yIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJSYW5kb20gRnJlcXVlbmN5IEdlbmVyYXRvciJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBGcmVxdWVuY3kgR2VuZXJhdG9yIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL1JhbmRvbV9GcmVxdWVuY3lfR2VuZXJhdG9yL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiMTE2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn1dLCJpbml0IjoiOCIsIm1pbiI6IjAiLCJtYXgiOiIxNSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSGlnaHQiLCJhZGRyZXNzIjoiL1JhbmRvbV9GcmVxdWVuY3lfR2VuZXJhdG9yL0hpZ2h0IiwiaW5kZXgiOiIxNzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJmcmVxdWVuY3kgcmFuZ2UgaGlnaHQgZmFjdG9yIn1dLCJpbml0IjoiMTAwMCIsIm1pbiI6IjMwMCIsIm1heCI6IjI1MDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9SYW5kb21fRnJlcXVlbmN5X0dlbmVyYXRvci9TcGVlZCIsImluZGV4IjoiODgiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQyMCIsIm1pbiI6IjE4MCIsIm1heCI6IjcyMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomFrequencyGeneratorProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFrequencyGeneratorProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFrequencyGeneratorProcessor.parse_items(group.items, obj, callback);
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
            SRandomFrequencyGeneratorProcessor.parse_items(item.items, obj, callback);
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
            SRandomFrequencyGeneratorProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomFrequencyGeneratorProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomFrequencyGeneratorProcessor.parse_ui(JSON.parse(getJSONSRandomFrequencyGenerator()).ui, params, SRandomFrequencyGeneratorProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomFrequencyGenerator());

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
        
        this.SRandomFrequencyGenerator_instance = new WebAssembly.Instance(SRandomFrequencyGeneratorProcessor.wasm_module, SRandomFrequencyGeneratorProcessor.importObject);
  	   	this.factory = this.SRandomFrequencyGenerator_instance.exports;
        this.HEAP = this.SRandomFrequencyGenerator_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomFrequencyGeneratorProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomFrequencyGeneratorProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomFrequencyGeneratorProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomFrequencyGeneratorProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomFrequencyGeneratorProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFrequencyGeneratorProcessor.parse_ui(this.json_object.ui, this, SRandomFrequencyGeneratorProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SRandomFrequencyGeneratorProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
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
        this.factory.compute(this.dsp, SRandomFrequencyGeneratorProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomFrequencyGeneratorProcessor.buffer_size = 128;

SRandomFrequencyGeneratorProcessor.importObject = {
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
    if (SRandomFrequencyGeneratorProcessor.wasm_module == undefined) {
        SRandomFrequencyGeneratorProcessor.wasm_module = new WebAssembly.Module(SRandomFrequencyGeneratorProcessor.atob(getBase64CodeSRandomFrequencyGenerator()));
        registerProcessor('SRandomFrequencyGenerator', SRandomFrequencyGeneratorProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SRandomFrequencyGenerator cannot be loaded or compiled");
}

