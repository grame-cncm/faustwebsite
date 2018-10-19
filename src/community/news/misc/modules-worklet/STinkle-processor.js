
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"filename\":\"STinkle\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"24436\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STinkle\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"296\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "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MTEuOCIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiMjQ0MzYiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbGVuYW1lIjoiU1RpbmtsZSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaW5rbGUifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJUaW5rbGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGlua2xlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMjk2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlBsYXkiLCJhZGRyZXNzIjoiL1RpbmtsZS9QbGF5IiwiaW5kZXgiOiIyOCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiMD1Cb3c7IDE9U3RyaWtlIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0="; }

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

