
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"filename\":\"Seaside\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"844416\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"Seaside\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"112\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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LmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTZWFzaWRlIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTZWFzaWRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJRIC0gRmlsdGVyIEJhbmR3aWR0aCAoQmFuZHBhc3MpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1FfLV9GaWx0ZXJfQmFuZHdpZHRoXyhCYW5kcGFzcykiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwIiwibWluIjoiMTAiLCJtYXgiOiIxNTAiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTEyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SeasideProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SeasideProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SeasideProcessor.parse_items(group.items, obj, callback);
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
            SeasideProcessor.parse_items(item.items, obj, callback);
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
            SeasideProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SeasideProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SeasideProcessor.parse_ui(JSON.parse(getJSONSeaside()).ui, params, SeasideProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSeaside());

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
        
        this.Seaside_instance = new WebAssembly.Instance(SeasideProcessor.wasm_module, SeasideProcessor.importObject);
  	   	this.factory = this.Seaside_instance.exports;
        this.HEAP = this.Seaside_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SeasideProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SeasideProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SeasideProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SeasideProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SeasideProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SeasideProcessor.parse_ui(this.json_object.ui, this, SeasideProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SeasideProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SeasideProcessor.buffer_size, this.ins, this.outs);
        
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

SeasideProcessor.buffer_size = 128;

SeasideProcessor.importObject = {
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
    if (SeasideProcessor.wasm_module == undefined) {
        SeasideProcessor.wasm_module = new WebAssembly.Module(SeasideProcessor.atob(getBase64CodeSeaside()));
        registerProcessor('Seaside', SeasideProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Seaside cannot be loaded or compiled");
}

