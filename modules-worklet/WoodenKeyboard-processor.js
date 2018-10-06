
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"filename\":\"WoodenKeyboard\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"295332\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"WoodenKeyboard\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"262200\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"262168\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"262224\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"262144\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJXb29kZW5LZXlib2FyZCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV29vZGVuIEtleWJvYXJkIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV29vZGVuIEtleWJvYXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjI2MjIwMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkhpZ2h0IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvSGlnaHQiLCJpbmRleCI6IjI2MjE2OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAzMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4zIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTm90ZSBEdXJhdGlvbiAoQlBGIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL05vdGVfRHVyYXRpb25fKEJQRl9FbnZlbG9wZSkiLCJpbmRleCI6IjI2MjIyNCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjEiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkVjaG8gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvRWNob19JbnRlbnNpdHkiLCJpbmRleCI6IjI2MjE0NCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxNSJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class WoodenKeyboardProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            WoodenKeyboardProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            WoodenKeyboardProcessor.parse_items(group.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= WoodenKeyboardProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        WoodenKeyboardProcessor.parse_ui(JSON.parse(getJSONWoodenKeyboard()).ui, params, WoodenKeyboardProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONWoodenKeyboard());

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
        
        this.WoodenKeyboard_instance = new WebAssembly.Instance(WoodenKeyboardProcessor.wasm_module, WoodenKeyboardProcessor.importObject);
  	   	this.factory = this.WoodenKeyboard_instance.exports;
        this.HEAP = this.WoodenKeyboard_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * WoodenKeyboardProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            WoodenKeyboardProcessor.parse_ui(this.json_object.ui, this, WoodenKeyboardProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * WoodenKeyboardProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, WoodenKeyboardProcessor.buffer_size, this.ins, this.outs);
        
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

WoodenKeyboardProcessor.buffer_size = 128;

WoodenKeyboardProcessor.importObject = {
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
    if (WoodenKeyboardProcessor.wasm_module == undefined) {
        WoodenKeyboardProcessor.wasm_module = new WebAssembly.Module(WoodenKeyboardProcessor.atob(getBase64CodeWoodenKeyboard()));
        registerProcessor('WoodenKeyboard', WoodenKeyboardProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust WoodenKeyboard cannot be loaded or compiled");
}

