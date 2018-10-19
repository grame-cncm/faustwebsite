
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSFlute() {
	return "{\"name\":\"Flute\",\"filename\":\"SFlute\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"327956\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"262144\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"262204\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"262216\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"262268\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"262324\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSFlute() { return "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OAKAgBBBAEMAANxDOAK8gBBBAEOPwnU/OALIgBBBAEMK16M8OAL8gBBBAEMAAIBAOAK0gRALjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL/paAgAABAEEAC/cWeyJuYW1lIjoiRmx1dGUiLCJmaWxlbmFtZSI6IlNGbHV0ZSIsInZlcnNpb24iOiIyLjExLjgiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvaW5zdHJ1bWVudHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjMyNzk1NiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIEZsdXRlIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0ZsdXRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIyNjIxNDQiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMjYyMjA0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNDQwIiwibWluIjoiMjQ3IiwibWF4IjoiMTIwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0ZsdXRlL1ByZXNzdXJlIiwiaW5kZXgiOiIyNjIyMTYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOTYiLCJtaW4iOiIwLjIiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0ZsdXRlL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMjYyMjY4IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvVmlicmF0b19GcmVxXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMjYyMzI0IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjUiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SFluteProcessor.parse_items(group.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SFluteProcessor.parse_ui(JSON.parse(getJSONSFlute()).ui, params, SFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSFlute());

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
        
        this.SFlute_instance = new WebAssembly.Instance(SFluteProcessor.wasm_module, SFluteProcessor.importObject);
  	   	this.factory = this.SFlute_instance.exports;
        this.HEAP = this.SFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SFluteProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SFluteProcessor.parse_ui(this.json_object.ui, this, SFluteProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SFluteProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SFluteProcessor.buffer_size = 128;

SFluteProcessor.importObject = {
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
    if (SFluteProcessor.wasm_module == undefined) {
        SFluteProcessor.wasm_module = new WebAssembly.Module(SFluteProcessor.atob(getBase64CodeSFlute()));
        registerProcessor('SFlute', SFluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SFlute cannot be loaded or compiled");
}

