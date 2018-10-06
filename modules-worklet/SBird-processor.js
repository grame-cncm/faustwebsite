
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/oscillators.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"279160\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262200\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262228\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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lTgCxIQRC5CAgIAAACAAIAEQDCAAEA4gABALC5qAgIAAAEEAQwAAcEM4AriAEEEAQwAASEI4AtSAEAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvYjICAAAEAQQAL0Qx7Im5hbWUiOiJiaXJkIiwiZmlsZW5hbWUiOiJTQmlyZCIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIyNzkxNjAiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJQaWVycmUgQ29jaGFyZCJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0JpcmQifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImJpcmQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJCaXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMDAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjI0MCIsIm1pbiI6IjEyMCIsIm1heCI6IjQ4MCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMjgiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI1MCIsIm1pbiI6IjI1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0="; }

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

