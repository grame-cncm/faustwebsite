
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFreeverb() {
	return "{\"name\":\"freeverb\",\"filename\":\"Freeverb\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"149856\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Grame\"},{\"copyright\":\"(c) GRAME 2006\"},{\"filename\":\"Freeverb\"},{\"license\":\"BSD\"},{\"name\":\"freeverb\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Freeverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Intensity\",\"address\":\"/Freeverb/Reverberation_Intensity\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.3333\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Freeverb/Reverberation_Room_Size\",\"index\":\"12\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.5\",\"min\":\"0.1\",\"max\":\"0.9\",\"step\":\"0.025\"}]}]}";
}
function getBase64CodeFreeverb() { return "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ZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZyZWV2ZXJiLmh0bWwifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9GcmVldmVyYi9SZXZlcmJlcmF0aW9uX0ludGVuc2l0eSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMzMzMyIsIm1pbiI6IjAuMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9GcmVldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMjUifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class FreeverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FreeverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FreeverbProcessor.parse_items(group.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
            FreeverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= FreeverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        FreeverbProcessor.parse_ui(JSON.parse(getJSONFreeverb()).ui, params, FreeverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONFreeverb());

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
        
        this.Freeverb_instance = new WebAssembly.Instance(FreeverbProcessor.wasm_module, FreeverbProcessor.importObject);
  	   	this.factory = this.Freeverb_instance.exports;
        this.HEAP = this.Freeverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * FreeverbProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((FreeverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + FreeverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((FreeverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + FreeverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FreeverbProcessor.parse_ui(this.json_object.ui, this, FreeverbProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * FreeverbProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, FreeverbProcessor.buffer_size, this.ins, this.outs);
        
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

FreeverbProcessor.buffer_size = 128;

FreeverbProcessor.importObject = {
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
    if (FreeverbProcessor.wasm_module == undefined) {
        FreeverbProcessor.wasm_module = new WebAssembly.Module(FreeverbProcessor.atob(getBase64CodeFreeverb()));
        registerProcessor('Freeverb', FreeverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Freeverb cannot be loaded or compiled");
}

