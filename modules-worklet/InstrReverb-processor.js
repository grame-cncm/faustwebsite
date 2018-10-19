
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"filename\":\"InstrReverb\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"844336\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"InstrReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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bGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQiXSwic2l6ZSI6Ijg0NDMzNiIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiSW5zdHJSZXZlcmIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ikluc3RyUmV2ZXJiIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemUiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWUiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class InstrReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            InstrReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            InstrReverbProcessor.parse_items(group.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
            InstrReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= InstrReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        InstrReverbProcessor.parse_ui(JSON.parse(getJSONInstrReverb()).ui, params, InstrReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONInstrReverb());

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
        
        this.InstrReverb_instance = new WebAssembly.Instance(InstrReverbProcessor.wasm_module, InstrReverbProcessor.importObject);
  	   	this.factory = this.InstrReverb_instance.exports;
        this.HEAP = this.InstrReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * InstrReverbProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((InstrReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + InstrReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            InstrReverbProcessor.parse_ui(this.json_object.ui, this, InstrReverbProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * InstrReverbProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, InstrReverbProcessor.buffer_size, this.ins, this.outs);
        
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

InstrReverbProcessor.buffer_size = 128;

InstrReverbProcessor.importObject = {
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
    if (InstrReverbProcessor.wasm_module == undefined) {
        InstrReverbProcessor.wasm_module = new WebAssembly.Module(InstrReverbProcessor.atob(getBase64CodeInstrReverb()));
        registerProcessor('InstrReverb', InstrReverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust InstrReverb cannot be loaded or compiled");
}

