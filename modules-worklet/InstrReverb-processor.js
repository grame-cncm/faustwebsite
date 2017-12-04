
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"844340\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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eyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiSW5zdHJSZXZlcmIifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class InstrReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            InstrReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            InstrReverbProcessor.parse_items(group.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= InstrReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        InstrReverbProcessor.parse_ui(JSON.parse(getJSONInstrReverb()).ui, params, InstrReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONInstrReverb());

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
        
        this.factory = InstrReverbProcessor.InstrReverb_instance.exports;
        this.HEAP = InstrReverbProcessor.InstrReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * InstrReverbProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            InstrReverbProcessor.parse_ui(this.json_object.ui, this, InstrReverbProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, InstrReverbProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, InstrReverbProcessor.buffer_size, this.ins, this.outs);
        
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

InstrReverbProcessor.buffer_size = 128;

InstrReverbProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(InstrReverbProcessor.atob(getBase64CodeInstrReverb()));
    InstrReverbProcessor.InstrReverb_instance = new WebAssembly.Instance(wasm_module, InstrReverbProcessor.importObject);
    registerProcessor('InstrReverb', InstrReverbProcessor);
} catch (e) {
    console.log(e); console.log("Faust InstrReverb cannot be loaded or compiled");
}

