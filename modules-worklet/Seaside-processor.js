
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"84\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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cnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiU2Vhc2lkZSJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiU2Vhc2lkZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUSAtIEZpbHRlciBCYW5kd2lkdGggKEJhbmRwYXNzKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9RXy1fRmlsdGVyX0JhbmR3aWR0aF8oQmFuZHBhc3MpIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMCIsIm1pbiI6IjEwIiwibWF4IjoiMTUwIiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiODQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxMTIiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

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

