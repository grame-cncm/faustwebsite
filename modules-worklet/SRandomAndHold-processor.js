
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONSRandomAndHold() {
	return "{\"name\":\"Random and Hold\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"240\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random and Hold\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random and Hold\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument hand\",\"address\":\"/Random_and_Hold/Instrument_hand\",\"index\":\"124\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hold\",\"address\":\"/Random_and_Hold/Hold\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -8 0 12\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/Random_and_Hold/Speed\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"120\",\"max\":\"720\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSRandomAndHold() { return "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AkEQSARADAIMAQsLC0EAQwAAcEJBACoCEJQ4AlwLkICAgAAAIAAgARAKIAAQDCAAEAkLoICAgAAAQQBDAAAAADgCAEEAQwAA8EM4AmBBAEMAAKBAOAJ8C42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC8KKgIAAAQBBAAu7CnsibmFtZSI6IlJhbmRvbSBhbmQgSG9sZCIsInZlcnNpb24iOiIyLjQuMTIiLCJvcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0MCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUmFuZG9tIGFuZCBIb2xkIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIGFuZCBIb2xkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IGhhbmQiLCJhZGRyZXNzIjoiL1JhbmRvbV9hbmRfSG9sZC9JbnN0cnVtZW50X2hhbmQiLCJpbmRleCI6IjEyNCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkhvbGQiLCJhZGRyZXNzIjoiL1JhbmRvbV9hbmRfSG9sZC9Ib2xkIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC04IDAgMTIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9SYW5kb21fYW5kX0hvbGQvU3BlZWQiLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxMjAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9XX1dfTA="; }

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
faust.SRandomAndHold_instance = null;

// Monophonic Faust DSP
class SRandomAndHoldProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomAndHoldProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomAndHoldProcessor.parse_items(group.items, obj, callback);
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
            SRandomAndHoldProcessor.parse_items(item.items, obj, callback);
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
            SRandomAndHoldProcessor.parse_items(item.items, obj, callback);
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
        SRandomAndHoldProcessor.parse_ui(JSON.parse(getJSONSRandomAndHold()).ui, params, SRandomAndHoldProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSRandomAndHold());
        
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
        
        this.factory = faust.SRandomAndHold_instance.exports;
        this.HEAP = faust.SRandomAndHold_instance.exports.memory.buffer;
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
            SRandomAndHoldProcessor.parse_ui(this.json_object.ui, this, SRandomAndHoldProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSRandomAndHold()), faust.importObject)
            .then(dsp_module => {
                  faust.SRandomAndHold_instance = dsp_module.instance;
                  registerProcessor('SRandomAndHold', SRandomAndHoldProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SRandomAndHold cannot be loaded or compiled"); });
