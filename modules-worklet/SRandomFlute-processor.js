
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"66460\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"32\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"728\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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cGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUmFuZG9tIEZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIEZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMiLCJtaW4iOiIxIiwibWF4IjoiNiIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjU5MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiNzI4IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMDUiLCJzdGVwIjoiMC4wMDAxIn1dfV19XX0w"; }

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
WebAssembly.instantiate(faust.atob(getBase64CodeSRandomFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.SRandomFlute_instance = dsp_module.instance;
                  registerProcessor('SRandomFlute', SRandomFluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SRandomFlute cannot be loaded or compiled"); });
