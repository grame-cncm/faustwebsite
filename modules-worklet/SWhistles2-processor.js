
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles2() {
	return "{\"name\":\"Whistles 2\",\"filename\":\"SWhistles2\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/instruments.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"197020\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SWhistles2\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 2\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"112\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"400\",\"min\":\"220\",\"max\":\"660\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"48\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"252\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"65868\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles2() { return "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LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IldoaXN0bGVzIDIifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2hpc3RsZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL1doaXN0bGVzL09OL09GRl8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDAgLTEyIDAgMiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9GcmVxdWVuY3kiLCJpbmRleCI6IjExMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDAwIiwibWluIjoiMjIwIiwibWF4IjoiNjYwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMCIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzAiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzEiLCJpbmRleCI6IjI1MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8yIiwiaW5kZXgiOiI2NTg2OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMTUgMCAwLjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDAxIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles2Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles2Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles2Processor.parse_items(group.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SWhistles2Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SWhistles2Processor.parse_ui(JSON.parse(getJSONSWhistles2()).ui, params, SWhistles2Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles2());

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
        
        this.SWhistles2_instance = new WebAssembly.Instance(SWhistles2Processor.wasm_module, SWhistles2Processor.importObject);
  	   	this.factory = this.SWhistles2_instance.exports;
        this.HEAP = this.SWhistles2_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles2Processor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles2Processor.parse_ui(this.json_object.ui, this, SWhistles2Processor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SWhistles2Processor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SWhistles2Processor.buffer_size, this.ins, this.outs);
        
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

SWhistles2Processor.buffer_size = 128;

SWhistles2Processor.importObject = {
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
    if (SWhistles2Processor.wasm_module == undefined) {
        SWhistles2Processor.wasm_module = new WebAssembly.Module(SWhistles2Processor.atob(getBase64CodeSWhistles2()));
        registerProcessor('SWhistles2', SWhistles2Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SWhistles2 cannot be loaded or compiled");
}

