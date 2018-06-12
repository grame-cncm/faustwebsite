
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"filename\":\"ZitaReverb\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"516480\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"ZitaReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"20\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "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aW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiIoYylHUkFNRSAyMDEzIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiWml0YVJldmVyYiJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibGljZW5zZSI6IkJTRCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRUtfVmVyYjIifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjAuMSJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkVLX1ZlcmIyIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJMb3cgRnJlcXVlbmNpZXMgRGVjYXkgVGltZSIsImFkZHJlc3MiOiIvRUtfVmVyYjIvTG93X0ZyZXF1ZW5jaWVzX0RlY2F5X1RpbWUiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIGxvdy1mcmVxdWVuY3kgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIxLjUiLCJtaW4iOiIwLjUiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNaWQgRnJlcXVlbmNpZXMgRGVjYXkgVGltZSIsImFkZHJlc3MiOiIvRUtfVmVyYjIvTWlkX0ZyZXF1ZW5jaWVzX0RlY2F5X1RpbWUiLCJpbmRleCI6IjIwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIG1pZGRsZSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjEuNSIsIm1pbiI6IjAuNSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

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
    
    static b64ToUint6(nChr)
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
    
    static atob(sBase64, nBlocksSize)
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
                nUint24 |= ZitaReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        ZitaReverbProcessor.parse_ui(JSON.parse(getJSONZitaReverb()).ui, params, ZitaReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONZitaReverb());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.ZitaReverb_instance = new WebAssembly.Instance(ZitaReverbProcessor.wasm_module, ZitaReverbProcessor.importObject);
  	   	this.factory = this.ZitaReverb_instance.exports;
        this.HEAP = this.ZitaReverb_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ZitaReverbProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ZitaReverbProcessor.parse_ui(this.json_object.ui, this, ZitaReverbProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, ZitaReverbProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

ZitaReverbProcessor.buffer_size = 128;

ZitaReverbProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (ZitaReverbProcessor.wasm_module == undefined) {
        ZitaReverbProcessor.wasm_module = new WebAssembly.Module(ZitaReverbProcessor.atob(getBase64CodeZitaReverb()));
        registerProcessor('ZitaReverb', ZitaReverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust ZitaReverb cannot be loaded or compiled");
}

