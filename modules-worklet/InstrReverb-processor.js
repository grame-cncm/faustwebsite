
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONInstrReverb() {
	return "{\"name\":\"InstrReverb\",\"filename\":\"InstrReverb\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"844336\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"InstrReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"InstrReverb\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Reverb\",\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size\",\"address\":\"/Reverb/Reverberation_Room_Size\",\"index\":\"36\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Volume\",\"address\":\"/Reverb/Reverberation_Volume\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"0.1\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeInstrReverb() { return "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L3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yb3V0ZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiODQ0MzM2IiwiaW5wdXRzIjoiMSIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJJbnN0clJldmVyYiJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiSW5zdHJSZXZlcmIifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZSIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiIwLjEiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUiLCJhZGRyZXNzIjoiL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0="; }

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

