
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"filename\":\"STibetanBowl\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24568\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STibetanBowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"8248\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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bnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGliZXRhbiBCb3dsIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiVGliZXRhbiBCb3dsIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvUGxheSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiODI0OCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbiIsImluZGV4IjoiMjQ0MzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJOb25saW5lYXJpdHkgZmFjdG9yICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb25fRnJlcXVlbmN5IiwiaW5kZXgiOiIyNDQ2MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjIwIiwibWluIjoiMTUwIiwibWF4IjoiNTAwIiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STibetanBowlProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTibetanBowl());

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
        
        this.STibetanBowl_instance = new WebAssembly.Instance(STibetanBowlProcessor.wasm_module, STibetanBowlProcessor.importObject);
  	   	this.factory = this.STibetanBowl_instance.exports;
        this.HEAP = this.STibetanBowl_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STibetanBowlProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, STibetanBowlProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, STibetanBowlProcessor.buffer_size, this.ins, this.outs);
        
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

STibetanBowlProcessor.buffer_size = 128;

STibetanBowlProcessor.importObject = {
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
    if (STibetanBowlProcessor.wasm_module == undefined) {
        STibetanBowlProcessor.wasm_module = new WebAssembly.Module(STibetanBowlProcessor.atob(getBase64CodeSTibetanBowl()));
        registerProcessor('STibetanBowl', STibetanBowlProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STibetanBowl cannot be loaded or compiled");
}

