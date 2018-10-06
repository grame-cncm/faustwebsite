
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSeaside() {
	return "{\"name\":\"Seaside\",\"filename\":\"Seaside\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"844420\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"autho\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"Seaside\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Seaside\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Seaside\",\"items\":[{\"type\":\"hslider\",\"label\":\"Q - Filter Bandwidth (Bandpass)\",\"address\":\"/Seaside/Q_-_Filter_Bandwidth_(Bandpass)\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"30\",\"min\":\"10\",\"max\":\"150\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Volume_(InstrReverb)\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Seaside/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"120\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeSeaside() { return "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c2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcmV2ZXJicy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JvdXRlcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiI4NDQ0MjAiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRobyI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlNlYXNpZGUifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlNlYXNpZGUifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlNlYXNpZGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlEgLSBGaWx0ZXIgQmFuZHdpZHRoIChCYW5kcGFzcykiLCJhZGRyZXNzIjoiL1NlYXNpZGUvUV8tX0ZpbHRlcl9CYW5kd2lkdGhfKEJhbmRwYXNzKSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAiLCJtaW4iOiIxMCIsIm1heCI6IjE1MCIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9TZWFzaWRlL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvU2Vhc2lkZS9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxMjAiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19"; }

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

