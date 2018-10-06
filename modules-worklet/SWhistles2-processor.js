
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSWhistles2() {
	return "{\"name\":\"Whistles 2\",\"filename\":\"SWhistles2\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/instruments.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"197020\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"SWhistles2\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Whistles 2\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Whistles\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (Vibrato Envelope)\",\"address\":\"/Whistles/ON/OFF_(Vibrato_Envelope)\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -12 0 2\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Whistles/Frequency\",\"index\":\"104\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"400\",\"min\":\"220\",\"max\":\"660\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 0\",\"address\":\"/Whistles/Volume_0\",\"index\":\"131288\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Whistles/Volume_1\",\"index\":\"131408\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Whistles/Volume_2\",\"index\":\"48\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 15 0 0.5\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"2\",\"step\":\"0.001\"}]}]}";
}
function getBase64CodeSWhistles2() { return "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LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlNXaGlzdGxlczIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJXaGlzdGxlcyAyIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IldoaXN0bGVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9PTi9PRkZfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMiAwIDIifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvV2hpc3RsZXMvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMDQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQwMCIsIm1pbiI6IjIyMCIsIm1heCI6IjY2MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDAiLCJhZGRyZXNzIjoiL1doaXN0bGVzL1ZvbHVtZV8wIiwiaW5kZXgiOiIxMzEyODgiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDE1IDAgMC41In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMiIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9XaGlzdGxlcy9Wb2x1bWVfMSIsImluZGV4IjoiMTMxNDA4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvV2hpc3RsZXMvVm9sdW1lXzIiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAxNSAwIDAuNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMDEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SWhistles2Processor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SWhistles2Processor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SWhistles2Processor.parse_items(group.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
            SWhistles2Processor.parse_items(item.items, obj, callback);
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
                nUint24 |= SWhistles2Processor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SWhistles2Processor.parse_ui(JSON.parse(getJSONSWhistles2()).ui, params, SWhistles2Processor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSWhistles2());

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
        
        this.SWhistles2_instance = new WebAssembly.Instance(SWhistles2Processor.wasm_module, SWhistles2Processor.importObject);
  	   	this.factory = this.SWhistles2_instance.exports;
        this.HEAP = this.SWhistles2_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SWhistles2Processor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SWhistles2Processor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SWhistles2Processor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SWhistles2Processor.parse_ui(this.json_object.ui, this, SWhistles2Processor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SWhistles2Processor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SWhistles2Processor.buffer_size, this.ins, this.outs);
        
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

SWhistles2Processor.buffer_size = 128;

SWhistles2Processor.importObject = {
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
    if (SWhistles2Processor.wasm_module == undefined) {
        SWhistles2Processor.wasm_module = new WebAssembly.Module(SWhistles2Processor.atob(getBase64CodeSWhistles2()));
        registerProcessor('SWhistles2', SWhistles2Processor);
    }
} catch (e) {
    console.log(e); console.log("Faust SWhistles2 cannot be loaded or compiled");
}

