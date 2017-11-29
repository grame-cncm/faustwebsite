
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"24560\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"312\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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AABBAEMAAAAAOAIsQQBDAADcQzgCuAJBAEMK16M8OAL0vgFBAEMAAFxDOAKMvwELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL/Y+AgAABAEEAC/YPeyJuYW1lIjoiVGliZXRhbiBCb3dsIiwidmVyc2lvbiI6IjIuNS45Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiIyNDU2MCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGliZXRhbiBCb3dsIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiVGliZXRhbiBCb3dsIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvUGxheSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMzEyIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24iLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uIiwiaW5kZXgiOiIyNDQzNiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6Ik5vbmxpbmVhcml0eSBmYWN0b3IgKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6IjI0NDYwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIxNTAiLCJtYXgiOiI1MDAiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

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
faust.STibetanBowl_instance = null;

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSTibetanBowl());
        
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
        
        this.factory = faust.STibetanBowl_instance.exports;
        this.HEAP = faust.STibetanBowl_instance.exports.memory.buffer;
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
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
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

// Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
try {
	registerProcessor('STibetanBowl', STibetanBowlProcessor);
} catch (error) {
	console.log(error);
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeSTibetanBowl()), faust.importObject)
            .then(dsp_module => {
                  faust.STibetanBowl_instance = dsp_module.instance;
                  // Hack : 11/28/17, registerProcessor done *before* compilation of the WASM module
                  //registerProcessor('STibetanBowl', STibetanBowlProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust STibetanBowl cannot be loaded or compiled"); });
