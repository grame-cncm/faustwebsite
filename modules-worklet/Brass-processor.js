
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvQnJhc3Nlcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjMyIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMDAiLCJtaW4iOiIxNzAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9QYXJhbWV0ZXJzLzB4MDAvVmlicmF0b19GcmVxdWVuY3lfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyOTY0IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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
