
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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cyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTZWFzaWRlIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTZWFzaWRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJRIC0gRmlsdGVyIEJhbmR3aWR0aCAoQmFuZHBhc3MpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1FfLV9GaWx0ZXJfQmFuZHdpZHRoXyhCYW5kcGFzcykiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwIiwibWluIjoiMTAiLCJtYXgiOiIxNTAiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTEyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SeasideProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SeasideProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SeasideProcessor.parse_items(group.items, obj, callback);
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
            SeasideProcessor.parse_items(item.items, obj, callback);
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
            SeasideProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SeasideProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SeasideProcessor.parse_ui(JSON.parse(getJSONSeaside()).ui, params, SeasideProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSeaside());

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
        
        this.factory = SeasideProcessor.Seaside_instance.exports;
        this.HEAP = SeasideProcessor.Seaside_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SeasideProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SeasideProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SeasideProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SeasideProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SeasideProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SeasideProcessor.parse_ui(this.json_object.ui, this, SeasideProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SeasideProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SeasideProcessor.buffer_size, this.ins, this.outs);
        
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

SeasideProcessor.buffer_size = 128;

SeasideProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SeasideProcessor.atob(getBase64CodeSeaside()));
    SeasideProcessor.Seaside_instance = new WebAssembly.Instance(wasm_module, SeasideProcessor.importObject);
    registerProcessor('Seaside', SeasideProcessor);
} catch (e) {
    console.log(e); console.log("Faust Seaside cannot be loaded or compiled");
}

