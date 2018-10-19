
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"filename\":\"STinkle\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"24436\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STinkle\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"300\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "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Mi4xMS4xMCIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQiXSwic2l6ZSI6IjI0NDM2IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiQmFuZGVkIFdhdmVndWlkZSBNb2RlbGQgVGliZXRhbiBCb3dsIn0seyJmaWxlbmFtZSI6IlNUaW5rbGUifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGlua2xlIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiVGlua2xlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpbmtsZS9GcmVxdWVuY3kiLCJpbmRleCI6IjMwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaW5rbGUvUGxheSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STinkleProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STinkleProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STinkleProcessor.parse_items(group.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STinkleProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STinkleProcessor.parse_ui(JSON.parse(getJSONSTinkle()).ui, params, STinkleProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTinkle());

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
        
        this.STinkle_instance = new WebAssembly.Instance(STinkleProcessor.wasm_module, STinkleProcessor.importObject);
  	   	this.factory = this.STinkle_instance.exports;
        this.HEAP = this.STinkle_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STinkleProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STinkleProcessor.parse_ui(this.json_object.ui, this, STinkleProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * STinkleProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, STinkleProcessor.buffer_size, this.ins, this.outs);
        
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

STinkleProcessor.buffer_size = 128;

STinkleProcessor.importObject = {
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
    if (STinkleProcessor.wasm_module == undefined) {
        STinkleProcessor.wasm_module = new WebAssembly.Module(STinkleProcessor.atob(getBase64CodeSTinkle()));
        registerProcessor('STinkle', STinkleProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STinkle cannot be loaded or compiled");
}

