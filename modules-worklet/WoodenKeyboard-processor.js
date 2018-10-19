
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"filename\":\"WoodenKeyboard\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"295332\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"WoodenKeyboard\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"262176\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"262232\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"262200\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"262144\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "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Mjk1MzMyIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiRVIifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6Ildvb2RlbktleWJvYXJkIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJXb29kZW4gS2V5Ym9hcmQifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXb29kZW4gS2V5Ym9hcmQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL0luc3RydW1lbnRfSGFuZCIsImluZGV4IjoiMjYyMTc2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSGlnaHQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9IaWdodCIsImluZGV4IjoiMjYyMjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDMwIn1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjMifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJOb3RlIER1cmF0aW9uIChCUEYgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvTm90ZV9EdXJhdGlvbl8oQlBGX0VudmVsb3BlKSIsImluZGV4IjoiMjYyMjAwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMSIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRWNobyBJbnRlbnNpdHkiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9FY2hvX0ludGVuc2l0eSIsImluZGV4IjoiMjYyMTQ0IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDE1In1dLCJpbml0IjoiMC4xIiwibWluIjoiMC4wMSIsIm1heCI6IjAuOSIsInN0ZXAiOiIwLjAxIn1dfV19"; }

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

