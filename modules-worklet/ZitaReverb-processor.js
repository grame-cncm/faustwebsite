
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"filename\":\"ZitaReverb\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"516472\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"ZitaReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"72\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"60\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "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dC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjUxNjQ3MiIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkNMIEdSQU1FIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpR1JBTUUgMjAxMyJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlppdGFSZXZlcmIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJCU0QifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkVLX1ZlcmIyIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjEifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJFS19WZXJiMiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTG93IEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL0xvd19GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBsb3ctZnJlcXVlbmN5IGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMS41IiwibWluIjoiMC41IiwibWF4IjoiNiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTWlkIEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL01pZF9GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBtaWRkbGUgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIxLjUiLCJtaW4iOiIwLjUiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class ZitaReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ZitaReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ZitaReverbProcessor.parse_items(group.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= ZitaReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        ZitaReverbProcessor.parse_ui(JSON.parse(getJSONZitaReverb()).ui, params, ZitaReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONZitaReverb());

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
        
        this.ZitaReverb_instance = new WebAssembly.Instance(ZitaReverbProcessor.wasm_module, ZitaReverbProcessor.importObject);
  	   	this.factory = this.ZitaReverb_instance.exports;
        this.HEAP = this.ZitaReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ZitaReverbProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ZitaReverbProcessor.parse_ui(this.json_object.ui, this, ZitaReverbProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * ZitaReverbProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, ZitaReverbProcessor.buffer_size, this.ins, this.outs);
        
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

ZitaReverbProcessor.buffer_size = 128;

ZitaReverbProcessor.importObject = {
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
    if (ZitaReverbProcessor.wasm_module == undefined) {
        ZitaReverbProcessor.wasm_module = new WebAssembly.Module(ZitaReverbProcessor.atob(getBase64CodeZitaReverb()));
        registerProcessor('ZitaReverb', ZitaReverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust ZitaReverb cannot be loaded or compiled");
}

