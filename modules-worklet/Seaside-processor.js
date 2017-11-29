
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTZWFzaWRlIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTZWFzaWRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJRIC0gRmlsdGVyIEJhbmR3aWR0aCAoQmFuZHBhc3MpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1FfLV9GaWx0ZXJfQmFuZHdpZHRoXyhCYW5kcGFzcykiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwIiwibWluIjoiMTAiLCJtYXgiOiIxNTAiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTEyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.Seaside_instance = null;

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
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SeasideProcessor.parse_ui(JSON.parse(getJSONSeaside()).ui, params, SeasideProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSeaside());
        
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
        
        this.factory = faust.Seaside_instance.exports;
        this.HEAP = faust.Seaside_instance.exports.memory.buffer;
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
            SeasideProcessor.parse_ui(this.json_object.ui, this, SeasideProcessor.parse_item2);
            
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
        this.factory.compute(this.dsp, faust.buffer_size, this.ins, this.outs);
        
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

// Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
try {
	registerProcessor('Seaside', SeasideProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeSeaside()), faust.importObject)
            .then(dsp_module => {
                  faust.Seaside_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('Seaside', SeasideProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Seaside cannot be loaded or compiled"); });
