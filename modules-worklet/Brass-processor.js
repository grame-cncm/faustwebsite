
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"filename\":\"Brass\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"1123012\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Brass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"262168\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"262156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"262260\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"295092\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2luc3RydW1lbnRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yZXZlcmJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIvRG9jdW1lbnRzL2ZhdXN0d2Vic2l0ZS1naXRodWIvbW9kdWxlcy13b3JrbGV0Il0sInNpemUiOiIxMTIzMDEyIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiQnJhc3MifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIyNjIxNjgifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjI2MjE1NiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMDAiLCJtaW4iOiIxNzAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9QYXJhbWV0ZXJzLzB4MDAvVmlicmF0b19GcmVxdWVuY3lfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIyNjIyNjAiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIyOTUwOTIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTIifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= BrassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBrass());

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
        
        this.Brass_instance = new WebAssembly.Instance(BrassProcessor.wasm_module, BrassProcessor.importObject);
  	   	this.factory = this.Brass_instance.exports;
        this.HEAP = this.Brass_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BrassProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * BrassProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, BrassProcessor.buffer_size, this.ins, this.outs);
        
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

BrassProcessor.buffer_size = 128;

BrassProcessor.importObject = {
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
    if (BrassProcessor.wasm_module == undefined) {
        BrassProcessor.wasm_module = new WebAssembly.Module(BrassProcessor.atob(getBase64CodeBrass()));
        registerProcessor('Brass', BrassProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Brass cannot be loaded or compiled");
}

