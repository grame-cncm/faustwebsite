
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"0\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"132\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"72\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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PkEAKgLAxC+UOALIxC9BAEMrobs8QQAqAgiUQwAAAD+SjjgC3MQzQQBDAAAARkMAAAAAQQAqArzEL0EAKgLcxDOTl5aoNgLgxDNBAEMAAABFQwAAAABBACoC3MQzQwAAgL+Sl5aoNgLkxDQLkICAgAAAIAAgARANIAAQDyAAEAwLrYCAgAAAQQBDAAAAADgCAEEAQwAAoEA4AkhBAEMAAJZDOAKEAUEAQ83MTD44AsSBAguNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuelYCAAAEAQQALlxV7Im5hbWUiOiJCcmFzcyIsInZlcnNpb24iOiIyLjUuNyIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiODYwODgwIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIwIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk2NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
faust.Brass_instance = null;

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONBrass());
        
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
        
        this.factory = faust.Brass_instance.exports;
        this.HEAP = faust.Brass_instance.exports.memory.buffer;
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
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeBrass()), faust.importObject)
            .then(dsp_module => {
                  faust.Brass_instance = dsp_module.instance;
                  registerProcessor('Brass', BrassProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Brass cannot be loaded or compiled"); });
