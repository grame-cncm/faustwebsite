
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98844\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"36\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"33028\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"65860\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"160\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"33024\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"65856\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"156\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"98772\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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dWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiTWVvdyJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik1lb3cifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZhZWZmZWN0cy5saWIvbmFtZSI6IkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSJ9LHsidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTUVPVyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9NRU9XL09OL09GRiIsImluZGV4IjoiMzYiLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlcXVlbmNpZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzEiLCJpbmRleCI6IjMzMDI4IiwibWV0YSI6W3siYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiNjU4NjAiLCJtZXRhIjpbeyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMzgwIiwibWF4IjoiNTUwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8zIiwiaW5kZXgiOiIxNjAiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIzMzAyNCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzIiLCJpbmRleCI6IjY1ODU2IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiMTU2IiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCBXYWgiLCJhZGRyZXNzIjoiL01FT1cvV2FoX1dhaCIsImluZGV4IjoiOTg3NzIiLCJtZXRhIjpbeyJhY2MiOiIwIDAgLTE1IDEwIDAifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class MeowProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            MeowProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            MeowProcessor.parse_items(group.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= MeowProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        MeowProcessor.parse_ui(JSON.parse(getJSONMeow()).ui, params, MeowProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONMeow());

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
        
        this.Meow_instance = new WebAssembly.Instance(MeowProcessor.wasm_module, MeowProcessor.importObject);
  	   	this.factory = this.Meow_instance.exports;
        this.HEAP = this.Meow_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * MeowProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((MeowProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + MeowProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((MeowProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + MeowProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            MeowProcessor.parse_ui(this.json_object.ui, this, MeowProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * MeowProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, MeowProcessor.buffer_size, this.ins, this.outs);
        
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

MeowProcessor.buffer_size = 128;

MeowProcessor.importObject = {
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
    if (MeowProcessor.wasm_module == undefined) {
        MeowProcessor.wasm_module = new WebAssembly.Module(MeowProcessor.atob(getBase64CodeMeow()));
        registerProcessor('Meow', MeowProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Meow cannot be loaded or compiled");
}

