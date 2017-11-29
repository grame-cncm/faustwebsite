
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"66460\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"32\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"732\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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ZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJSYW5kb20gRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSYW5kb20gRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiNTkyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI2MCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiI3MzIiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4wNSIsInN0ZXAiOiIwLjAwMDEifV19XX1dfTA="; }

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
faust.SRandomFlute_instance = null;

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSRandomFlute());
        
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
        
        this.factory = faust.SRandomFlute_instance.exports;
        this.HEAP = faust.SRandomFlute_instance.exports.memory.buffer;
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
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
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

// Synchronously compile and instantiate the WASM module
try {
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeSRandomFlute()));
	faust.SRandomFlute_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('SRandomFlute', SRandomFluteProcessor);
} catch (e) {
	console.log(e); console.log("Faust SRandomFlute cannot be loaded or compiled")
}

