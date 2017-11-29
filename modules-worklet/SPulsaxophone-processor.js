
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSPulsaxophone() {
	return "{\"name\":\"Solo Pulsaxophone\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"17216\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Solo Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"PULSAXO\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/PULSAXO/Instrument/Frequency\",\"index\":\"700\",\"meta\":[{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/PULSAXO/Parameters/Vibrato_Frequency\",\"index\":\"672\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/PULSAXO/Pulse/Speed_(Granulator)\",\"index\":\"36\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/PULSAXO/Pulse/Probability_(Granulator)\",\"index\":\"592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}]}";
}
function getBase64CodeSPulsaxophone() { return "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YnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTb2xvIFB1bHNheG9waG9uZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlBVTFNBWE8iLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9QVUxTQVhPL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiI3MDAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjExMCIsIm1pbiI6IjgwIiwibWF4IjoiODgwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUGFyYW1ldGVycy9WaWJyYXRvX0ZyZXF1ZW5jeSIsImluZGV4IjoiNjcyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYiLCJtaW4iOiIxIiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiI3Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUFVMU0FYTy9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjU5MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfV19MA=="; }

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
faust.SPulsaxophone_instance = null;

// Monophonic Faust DSP
class SPulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPulsaxophoneProcessor.parse_items(group.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
        SPulsaxophoneProcessor.parse_ui(JSON.parse(getJSONSPulsaxophone()).ui, params, SPulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSPulsaxophone());
        
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
        
        this.factory = faust.SPulsaxophone_instance.exports;
        this.HEAP = faust.SPulsaxophone_instance.exports.memory.buffer;
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
            SPulsaxophoneProcessor.parse_ui(this.json_object.ui, this, SPulsaxophoneProcessor.parse_item2);
            
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
	let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeSPulsaxophone()));
	faust.SPulsaxophone_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
	registerProcessor('SPulsaxophone', SPulsaxophoneProcessor);
} catch (e) {
	console.log(e); console.log("Faust SPulsaxophone cannot be loaded or compiled")
}

