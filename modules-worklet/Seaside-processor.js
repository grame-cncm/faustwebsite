
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"filename\":\"Seaside\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"Seaside\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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LHsiZmlsZW5hbWUiOiJTZWFzaWRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTZWFzaWRlIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTZWFzaWRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJRIC0gRmlsdGVyIEJhbmR3aWR0aCAoQmFuZHBhc3MpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1FfLV9GaWx0ZXJfQmFuZHdpZHRoXyhCYW5kcGFzcykiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwIiwibWluIjoiMTAiLCJtYXgiOiIxNTAiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTEyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
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
        
        this.Seaside_instance = new WebAssembly.Instance(SeasideProcessor.wasm_module, SeasideProcessor.importObject);
  	   	this.factory = this.Seaside_instance.exports;
        this.HEAP = this.Seaside_instance.exports.memory.buffer;
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
        this.factory.compute(this.dsp, SeasideProcessor.buffer_size, this.ins, this.outs);
        
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
    if (SeasideProcessor.wasm_module == undefined) {
        SeasideProcessor.wasm_module = new WebAssembly.Module(SeasideProcessor.atob(getBase64CodeSeaside()));
        registerProcessor('Seaside', SeasideProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Seaside cannot be loaded or compiled");
}

