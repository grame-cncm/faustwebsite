
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"516480\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"56\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"20\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "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aWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpR1JBTUUgMjAxMyJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJsaWNlbnNlIjoiQlNEIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJFS19WZXJiMiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4xIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRUtfVmVyYjIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkxvdyBGcmVxdWVuY2llcyBEZWNheSBUaW1lIiwiYWRkcmVzcyI6Ii9FS19WZXJiMi9Mb3dfRnJlcXVlbmNpZXNfRGVjYXlfVGltZSIsImluZGV4IjoiNTYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbG93LWZyZXF1ZW5jeSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjEuNSIsIm1pbiI6IjAuNSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1pZCBGcmVxdWVuY2llcyBEZWNheSBUaW1lIiwiYWRkcmVzcyI6Ii9FS19WZXJiMi9NaWRfRnJlcXVlbmNpZXNfRGVjYXlfVGltZSIsImluZGV4IjoiMjAiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbWlkZGxlIGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMS41IiwibWluIjoiMC41IiwibWF4IjoiNiIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

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
