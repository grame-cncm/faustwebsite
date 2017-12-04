
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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bWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQmlyZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjA4IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIyNDAiLCJtaW4iOiIxMjAiLCJtYXgiOiI0ODAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiNTAiLCJtaW4iOiIyNSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBirdProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBird());

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
        
        this.factory = SBirdProcessor.SBird_instance.exports;
        this.HEAP = SBirdProcessor.SBird_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBirdProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SBirdProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SBirdProcessor.buffer_size, this.ins, this.outs);
        
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

SBirdProcessor.buffer_size = 128;

SBirdProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SBirdProcessor.atob(getBase64CodeSBird()));
    SBirdProcessor.SBird_instance = new WebAssembly.Instance(wasm_module, SBirdProcessor.importObject);
    registerProcessor('SBird', SBirdProcessor);
} catch (e) {
    console.log(e); console.log("Faust SBird cannot be loaded or compiled");
}

