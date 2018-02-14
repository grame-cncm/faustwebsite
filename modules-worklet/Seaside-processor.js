
/*
Code generated with Faust version 2.5.22
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"version\":\"2.5.22\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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cy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiU2Vhc2lkZSJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiU2Vhc2lkZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUSAtIEZpbHRlciBCYW5kd2lkdGggKEJhbmRwYXNzKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9RXy1fRmlsdGVyX0JhbmR3aWR0aF8oQmFuZHBhc3MpIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMCIsIm1pbiI6IjEwIiwibWF4IjoiMTUwIiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjExMiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX0w"; }

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

