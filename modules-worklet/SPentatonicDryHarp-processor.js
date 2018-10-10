
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"filename\":\"SPentatonicDryHarp\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SPentatonicDryHarp\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "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OjgClDpBAEEAKgKcQjgCoEJBAEEAKgKYQjgCnEJBAEEAKAKkQjYCqEJBAEEAKgKsQjgCsEJBAEEAKgK4SjgCvEpBAEEAKgK0SjgCuEpBAEEAKALASjYCxEpBAEEAKgLISjgCzEpBAEEAKgLUUjgC2FJBAEEAKgLQUjgC1FJBAEEAKALcUjYC4FJBAEEAKgLkUjgC6FJBAEEAKgLwWjgC9FpBAEEAKgLsWjgC8FpBAEEAKAL4WjYC/FpBAEEAKgKAWzgChFtBAEEAKgKMXzgCkF9BAEEAKgKIXzgCjF9BAEEAKAKUXzYCmF9BAEEAKgKcXzgCoF9BAEEAKgKoYzgCrGNBAEEAKgKkYzgCqGNBAEEAKAKwYzYCtGNBAEEAKgK4YzgCvGNBAEEAKgLEZzgCyGdBAEEAKgLAZzgCxGdBAEEAKALMZzYC0GdBAEEAKgLUZzgC2GdBAEEAKgLgazgC5GtBAEEAKgLcazgC4GtBAEEAKALoazYC7GtBAEEAKgLwazgC9GtBAEEAKgL8bzgCgHBBAEEAKgL4bzgC/G9BAEEAKAKEcDYCiHBBAEEAKgKMcDgCkHBBAEEAKgKYcjgCnHJBAEEAKgKUcjgCmHJBAEEAKAKgcjYCpHJBAEEAKgKocjgCrHJBAEEAKgK0dDgCuHRBAEEAKgKwdDgCtHRBAEEAKAK8dDYCwHRBAEEAKgLEdDgCyHRBAEEAKgLQdjgC1HZBAEEAKgLMdjgC0HZBAEEAKALYdjYC3HZBAEEAKgLgdjgC5HZBAEEAKgLseDgC8HhBAEEAKgLoeDgC7HhBAEEAKAL0eDYC+HhBAEEAKgL8eDgCgHlBAEEAKgKIezgCjHtBAEEAKgKEezgCiHtBAEEAKAKQezYClHtBAEEAKgKYezgCnHtBAEEAKgKkfDgCqHxBAEEAKgKgfDgCpHxBAEEAKAKsfDYCsHxBAEEAKgK0fDgCuHxBAEEAKgLAfTgCxH1BAEEAKgK8fTgCwH1BAEEAKALIfTYCzH1BAEEAKgLQfTgC1H1BAEEAKgLcfjgC4H5BAEEAKgLYfjgC3H4gCEEEaiEIIAhBBCABbEgEQAwCDAELCwsLhYCAgAAAQQAPC4WAgIAAAEECDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAlQPC46AgIAAACAAIAEQAiAAIAEQCwuBpICAAAFcf0EA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IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJQZW50YXRvbmljRHJ5SGFycCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJoYXJwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL2hhcnAvSW5zdHJ1bWVudF9IYW5kIiwiaW5kZXgiOiIxMjAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifV0sImluaXQiOiIxMSIsIm1pbiI6IjAiLCJtYXgiOiIyMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1NwZWVkIiwiaW5kZXgiOiI5MiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNDgwIiwibWluIjoiMTgwIiwibWF4IjoiNzIwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXNvbmFuY2UiLCJhZGRyZXNzIjoiL2hhcnAvUGFyYW1ldGVycy9SZXNvbmFuY2UiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIyIDEgLTEyIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwLjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19XX0="; }

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

