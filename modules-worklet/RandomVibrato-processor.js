
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONRandomVibrato() {
	return "{\"name\":\"Random Vibrato\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"728\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Vibrato\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Vibrato\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Speed Range\",\"address\":\"/Random_Vibrato/Vibrato_Speed_Range\",\"index\":\"684\",\"meta\":[{\"1\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"scale\":\"log\"}],\"init\":\"10\",\"min\":\"5\",\"max\":\"40\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Vibrato Intensity\",\"address\":\"/Random_Vibrato/Vibrato_Intensity\",\"index\":\"8\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"0.4\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Occurrence Speed (Granulator)\",\"address\":\"/Random_Vibrato/Occurrence_Speed_(Granulator)\",\"index\":\"92\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Vibrato/Probability_(Granulator)\",\"index\":\"64\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeRandomVibrato() { return "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YnJhdG8ifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSYW5kb20gVmlicmF0byIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBTcGVlZCBSYW5nZSIsImFkZHJlc3MiOiIvUmFuZG9tX1ZpYnJhdG8vVmlicmF0b19TcGVlZF9SYW5nZSIsImluZGV4IjoiNjg0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzY2FsZSI6ImxvZyJ9XSwiaW5pdCI6IjEwIiwibWluIjoiNSIsIm1heCI6IjQwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEludGVuc2l0eSIsImFkZHJlc3MiOiIvUmFuZG9tX1ZpYnJhdG8vVmlicmF0b19JbnRlbnNpdHkiLCJpbmRleCI6IjgiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIwLjQiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9jY3VycmVuY2UgU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fVmlicmF0by9PY2N1cnJlbmNlX1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiOTIiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuMDAxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fVmlicmF0by9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjY0IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI3NSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.importObject = {
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

faust.b64ToUint6 = function (nChr)
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

faust.atob = function (sBase64, nBlocksSize)
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
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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

// WebAssembly instance
faust.RandomVibrato_instance = null;

// Monophonic Faust DSP
class RandomVibratoProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            RandomVibratoProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            RandomVibratoProcessor.parse_items(group.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
            RandomVibratoProcessor.parse_items(item.items, obj, callback);
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
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        RandomVibratoProcessor.parse_ui(JSON.parse(getJSONRandomVibrato()).ui, params, RandomVibratoProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONRandomVibrato());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.RandomVibrato_instance.exports;
        this.HEAP = faust.RandomVibrato_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        // TODO: send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            RandomVibratoProcessor.parse_ui(this.json_object.ui, this, RandomVibratoProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, 128, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeRandomVibrato()), faust.importObject)
            .then(dsp_module => {
                  faust.RandomVibrato_instance = dsp_module.instance;
                  registerProcessor('RandomVibrato', RandomVibratoProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust RandomVibrato cannot be loaded or compiled"); });
