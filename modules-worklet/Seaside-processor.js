
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"84\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlNlYXNpZGUifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlNlYXNpZGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlEgLSBGaWx0ZXIgQmFuZHdpZHRoIChCYW5kcGFzcykiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUV8tX0ZpbHRlcl9CYW5kd2lkdGhfKEJhbmRwYXNzKSIsImluZGV4IjoiNDgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAiLCJtaW4iOiIxMCIsIm1heCI6IjE1MCIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6Ijg0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTEyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
    let wasm_module = new WebAssembly.Module(SeasideProcessor.atob(getBase64CodeSeaside()));
    SeasideProcessor.Seaside_instance = new WebAssembly.Instance(wasm_module, SeasideProcessor.importObject);
    registerProcessor('Seaside', SeasideProcessor);
} catch (e) {
    console.log(e); console.log("Faust Seaside cannot be loaded or compiled");
}

