
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"40\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"132\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"12\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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eyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkJyYXNzIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9CcmFzc2VzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiNDAifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMDAiLCJtaW4iOiIxNzAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9QYXJhbWV0ZXJzLzB4MDAvVmlicmF0b19GcmVxdWVuY3lfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIxMiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyOTY0IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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

faust.asm2wasm = { // special asm2wasm imports
    "fmod": function(x, y) {
        return x % y;
    },
    "remainder": function(x, y) {
        return x - Math.round(x/y) * y;
    }
}

faust.importObject = { imports: { print: arg => console.log(arg) } }
faust.importObject["global.Math"] = Math;
faust.importObject["asm2wasm"] = faust.asm2wasm;

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
