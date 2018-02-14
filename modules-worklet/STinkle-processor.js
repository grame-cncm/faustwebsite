
/*
Code generated with Faust version 2.5.22
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"version\":\"2.5.22\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24444\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"1068\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "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C5CAgIAAACAAIAEQCyAAEA0gABAKC5eAgIAAAEEAQwAAgD84AiBBAEMAANxDOAKsCAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuxioCAAAEAQQALqgp7Im5hbWUiOiJUaW5rbGUiLCJ2ZXJzaW9uIjoiMi41LjIyIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiIyNDQ0NCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IkJhbmRlZCBXYXZlZ3VpZGUgTW9kZWxkIFRpYmV0YW4gQm93bCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaW5rbGUifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJUaW5rbGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGlua2xlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMTA2OCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaW5rbGUvUGxheSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
        
        this.factory = STinkleProcessor.STinkle_instance.exports;
        this.HEAP = STinkleProcessor.STinkle_instance.exports.memory.buffer;
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
    let wasm_module = new WebAssembly.Module(STinkleProcessor.atob(getBase64CodeSTinkle()));
    STinkleProcessor.STinkle_instance = new WebAssembly.Instance(wasm_module, STinkleProcessor.importObject);
    registerProcessor('STinkle', STinkleProcessor);
} catch (e) {
    console.log(e); console.log("Faust STinkle cannot be loaded or compiled");
}

