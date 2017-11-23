
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"66460\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"780\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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eGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlJhbmRvbSBGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQdWxzZSIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzIiwibWluIjoiMSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyOCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiNzgwIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMDUiLCJzdGVwIjoiMC4wMDAxIn1dfV19XX0w"; }

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
