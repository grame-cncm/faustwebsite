
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"197000\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"48\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"131264\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"131384\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"131252\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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bnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV2hpc3RsZXMgMyJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGlzdGxlcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvT04vT0ZGXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTk3MDAwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMiAwIDIifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvRnJlcXVlbmN5IiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiODIwIiwibWluIjoiNjYwIiwibWF4IjoiMTEwMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDAiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8wIiwiaW5kZXgiOiIxMzEyNjQiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMSIsImluZGV4IjoiMTMxMzg0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjEzMTI1MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn1dfV19MA=="; }

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
faust.SWhistles3_instance = null;

// Monophonic Faust DSP
class SWhistles3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles3Processor.parse_items(group.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
        SWhistles3Processor.parse_ui(JSON.parse(getJSONSWhistles3()).ui, params, SWhistles3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSWhistles3());
        
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
        
        this.factory = faust.SWhistles3_instance.exports;
        this.HEAP = faust.SWhistles3_instance.exports.memory.buffer;
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
            SWhistles3Processor.parse_ui(this.json_object.ui, this, SWhistles3Processor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSWhistles3()), faust.importObject)
            .then(dsp_module => {
                  faust.SWhistles3_instance = dsp_module.instance;
                  registerProcessor('SWhistles3', SWhistles3Processor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SWhistles3 cannot be loaded or compiled"); });
