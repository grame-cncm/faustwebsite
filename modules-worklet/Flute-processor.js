
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131200\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131176\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131188\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131256\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131272\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"196952\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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bmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTIwMCIsIm1ldGEiOlt7IjAiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvRmx1dGUvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzExNzYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyNDciLCJtYXgiOiIxMjAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvRmx1dGUvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTE4OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC45NiIsIm1pbiI6IjAuMiIsIm1heCI6IjAuOTkiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvRmx1dGUvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyNTYiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4yIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXEgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9WaWJyYXRvX0ZyZXFfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzEyNzIiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuNSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxOTY5NTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNzIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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
faust.Flute_instance = null;

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONFlute());
        
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
        
        this.factory = faust.Flute_instance.exports;
        this.HEAP = faust.Flute_instance.exports.memory.buffer;
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
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.Flute_instance = dsp_module.instance;
                  registerProcessor('Flute', FluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Flute cannot be loaded or compiled"); });
