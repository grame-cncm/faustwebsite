
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"filename\":\"SBird\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SBird\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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eyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImJpcmQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJCaXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMDgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjI0MCIsIm1pbiI6IjEyMCIsIm1heCI6IjQ4MCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI1MCIsIm1pbiI6IjI1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0w"; }

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

