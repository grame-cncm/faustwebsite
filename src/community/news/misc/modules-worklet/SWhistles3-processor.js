
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles3() {
	return "{\"name\":\"Whistles 3\",\"filename\":\"SWhistles3\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/instruments.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"197020\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SWhistles3\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 3\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"72\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"820\",\"min\":\"660\",\"max\":\"1100\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"240\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"65856\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"65868\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles3() { return "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IjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV2hpc3RsZXMgMyJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGlzdGxlcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvT04vT0ZGXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTIgMCAyIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1doaXN0bGVzL0ZyZXF1ZW5jeSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjgyMCIsIm1pbiI6IjY2MCIsIm1heCI6IjExMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAwIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMCIsImluZGV4IjoiMjQwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzEiLCJpbmRleCI6IjY1ODU2IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjY1ODY4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles3Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles3Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles3Processor.parse_items(group.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
            SWhistles3Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SWhistles3Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SWhistles3Processor.parse_ui(JSON.parse(getJSONSWhistles3()).ui, params, SWhistles3Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles3());

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
        
        this.SWhistles3_instance = new WebAssembly.Instance(SWhistles3Processor.wasm_module, SWhistles3Processor.importObject);
  	   	this.factory = this.SWhistles3_instance.exports;
        this.HEAP = this.SWhistles3_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles3Processor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles3Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles3Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles3Processor.parse_ui(this.json_object.ui, this, SWhistles3Processor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SWhistles3Processor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SWhistles3Processor.buffer_size, this.ins, this.outs);
        
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

SWhistles3Processor.buffer_size = 128;

SWhistles3Processor.importObject = {
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
    if (SWhistles3Processor.wasm_module == undefined) {
        SWhistles3Processor.wasm_module = new WebAssembly.Module(SWhistles3Processor.atob(getBase64CodeSWhistles3()));
        registerProcessor('SWhistles3', SWhistles3Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SWhistles3 cannot be loaded or compiled");
}

