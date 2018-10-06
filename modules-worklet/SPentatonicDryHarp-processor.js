
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"filename\":\"SPentatonicDryHarp\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SPentatonicDryHarp\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"116\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"88\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"160\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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LmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJQZW50YXRvbmljRHJ5SGFycCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJoYXJwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL2hhcnAvSW5zdHJ1bWVudF9IYW5kIiwiaW5kZXgiOiIxMTYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifV0sImluaXQiOiIxMSIsIm1pbiI6IjAiLCJtYXgiOiIyMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1NwZWVkIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNDgwIiwibWluIjoiMTgwIiwibWF4IjoiNzIwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXNvbmFuY2UiLCJhZGRyZXNzIjoiL2hhcnAvUGFyYW1ldGVycy9SZXNvbmFuY2UiLCJpbmRleCI6IjE2MCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SPentatonicDryHarpProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPentatonicDryHarpProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPentatonicDryHarpProcessor.parse_items(group.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
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
                nUint24 |= SPentatonicDryHarpProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SPentatonicDryHarpProcessor.parse_ui(JSON.parse(getJSONSPentatonicDryHarp()).ui, params, SPentatonicDryHarpProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSPentatonicDryHarp());

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
        this.integer_size = 4;
        
        this.SPentatonicDryHarp_instance = new WebAssembly.Instance(SPentatonicDryHarpProcessor.wasm_module, SPentatonicDryHarpProcessor.importObject);
  	   	this.factory = this.SPentatonicDryHarp_instance.exports;
        this.HEAP = this.SPentatonicDryHarp_instance.exports.memory.buffer;
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
        
        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SPentatonicDryHarpProcessor.buffer_size * this.sample_size);
        
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
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SPentatonicDryHarpProcessor.parse_ui(this.json_object.ui, this, SPentatonicDryHarpProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SPentatonicDryHarpProcessor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
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
        this.factory.compute(this.dsp, SPentatonicDryHarpProcessor.buffer_size, this.ins, this.outs);
        
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

SPentatonicDryHarpProcessor.buffer_size = 128;

SPentatonicDryHarpProcessor.importObject = {
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
    if (SPentatonicDryHarpProcessor.wasm_module == undefined) {
        SPentatonicDryHarpProcessor.wasm_module = new WebAssembly.Module(SPentatonicDryHarpProcessor.atob(getBase64CodeSPentatonicDryHarp()));
        registerProcessor('SPentatonicDryHarp', SPentatonicDryHarpProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SPentatonicDryHarp cannot be loaded or compiled");
}

