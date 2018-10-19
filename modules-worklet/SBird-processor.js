
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/oscillators.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"279160\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262192\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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zIQRC5CAgIAAACAAIAEQDCAAEA4gABALC5qAgIAAAEEAQwAASEI4ArCAEEEAQwAAcEM4AsCAEAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuKjYCAAAEAQQALgw17Im5hbWUiOiJiaXJkIiwiZmlsZW5hbWUiOiJTQmlyZCIsInZlcnNpb24iOiIyLjExLjEwIiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQiXSwic2l6ZSI6IjI3OTE2MCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IlBpZXJyZSBDb2NoYXJkIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJTQmlyZCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiYmlyZCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkJpcmQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvQmlyZC9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjI2MjIwOCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMjQwIiwibWluIjoiMTIwIiwibWF4IjoiNDgwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvQmlyZC9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjI2MjE5MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6IjUwIiwibWluIjoiMjUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBirdProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBird());

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
        
        this.SBird_instance = new WebAssembly.Instance(SBirdProcessor.wasm_module, SBirdProcessor.importObject);
  	   	this.factory = this.SBird_instance.exports;
        this.HEAP = this.SBird_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBirdProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SBirdProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SBirdProcessor.buffer_size, this.ins, this.outs);
        
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

SBirdProcessor.buffer_size = 128;

SBirdProcessor.importObject = {
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
    if (SBirdProcessor.wasm_module == undefined) {
        SBirdProcessor.wasm_module = new WebAssembly.Module(SBirdProcessor.atob(getBase64CodeSBird()));
        registerProcessor('SBird', SBirdProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SBird cannot be loaded or compiled");
}

