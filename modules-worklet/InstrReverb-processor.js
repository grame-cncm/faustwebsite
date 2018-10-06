
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"filename\":\"InstrReverb\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"844336\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"InstrReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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YW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6Ijg0NDMzNiIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiSW5zdHJSZXZlcmIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ikluc3RyUmV2ZXJiIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemUiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIiwiYWRkcmVzcyI6Ii9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWUiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19"; }

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

