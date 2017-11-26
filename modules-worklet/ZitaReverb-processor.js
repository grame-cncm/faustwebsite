
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"516480\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"100\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"64\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "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In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJsaWNlbnNlIjoiQlNEIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJFS19WZXJiMiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4xIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRUtfVmVyYjIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkxvdyBGcmVxdWVuY2llcyBEZWNheSBUaW1lIiwiYWRkcmVzcyI6Ii9FS19WZXJiMi9Mb3dfRnJlcXVlbmNpZXNfRGVjYXlfVGltZSIsImluZGV4IjoiMTAwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIGxvdy1mcmVxdWVuY3kgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIxLjUiLCJtaW4iOiIwLjUiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNaWQgRnJlcXVlbmNpZXMgRGVjYXkgVGltZSIsImFkZHJlc3MiOiIvRUtfVmVyYjIvTWlkX0ZyZXF1ZW5jaWVzX0RlY2F5X1RpbWUiLCJpbmRleCI6IjY0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIG1pZGRsZSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjEuNSIsIm1pbiI6IjAuNSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.ZitaReverb_instance = null;

// Monophonic Faust DSP
class ZitaReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ZitaReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ZitaReverbProcessor.parse_items(group.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
        ZitaReverbProcessor.parse_ui(JSON.parse(getJSONZitaReverb()).ui, params, ZitaReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONZitaReverb());
        
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
        
        this.factory = faust.ZitaReverb_instance.exports;
        this.HEAP = faust.ZitaReverb_instance.exports.memory.buffer;
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
            ZitaReverbProcessor.parse_ui(this.json_object.ui, this, ZitaReverbProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeZitaReverb()), faust.importObject)
            .then(dsp_module => {
                  faust.ZitaReverb_instance = dsp_module.instance;
                  registerProcessor('ZitaReverb', ZitaReverbProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust ZitaReverb cannot be loaded or compiled"); });
