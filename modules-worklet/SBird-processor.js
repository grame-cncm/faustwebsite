
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/oscillators.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"279160\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262196\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262224\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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kzgC5IQRC5CAgIAAACAAIAEQDCAAEA4gABALC5qAgIAAAEEAQwAAcEM4ArSAEEEAQwAASEI4AtCAEAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvYjICAAAEAQQAL0Qx7Im5hbWUiOiJiaXJkIiwiZmlsZW5hbWUiOiJTQmlyZCIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIyNzkxNjAiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJQaWVycmUgQ29jaGFyZCJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0JpcmQifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImJpcmQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJCaXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIxOTYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjI0MCIsIm1pbiI6IjEyMCIsIm1heCI6IjQ4MCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMjQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI1MCIsIm1pbiI6IjI1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0="; }

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

