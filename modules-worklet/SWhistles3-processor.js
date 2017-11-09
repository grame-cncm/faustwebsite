
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"197040\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"116\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"48\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"268\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"65888\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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MS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJXaGlzdGxlcyAzIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IldoaXN0bGVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9PTi9PRkZfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMiAwIDIifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMTYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjgyMCIsIm1pbiI6IjY2MCIsIm1heCI6IjExMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAwIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMCIsImluZGV4IjoiNDgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMSIsImluZGV4IjoiMjY4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjY1ODg4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifV19XX0w"; }

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
