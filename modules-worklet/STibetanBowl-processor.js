
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"filename\":\"STibetanBowl\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/basics.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"286688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STibetanBowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"262176\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"263212\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"286596\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"286568\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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sxFBAEMWKuM9QQAqAoSAEJQ4ApC4EUEAQ4uVYkJBACoChIAQlTgClLgRQQBDZOifPUEAKgKEgBCUOAKsvBFBAEM78aBCQQAqAoSAEJU4ArC8EUEAQ4piOj1BACoChIAQlDgCyL4RQQBDVxQKQ0EAKgKEgBCVOALMvhFBAEMAAIA/QQAqAoSAEJU4AuS+EQuQgICAAAAgACABEAwgABAOIAAQCwuygICAAABBAEMAAAAAOAKggBBBAEMAANxDOAKsiBBBAEMAAFxDOALovhFBAEMK16M8OAKEvxELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL+5OAgAABAEEAC/QTeyJuYW1lIjoiVGliZXRhbiBCb3dsIiwiZmlsZW5hbWUiOiJTVGliZXRhbkJvd2wiLCJ2ZXJzaW9uIjoiMi4xMS4xMCIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQiXSwic2l6ZSI6IjI4NjY4OCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbGVuYW1lIjoiU1RpYmV0YW5Cb3dsIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRpYmV0YW4gQm93bCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRpYmV0YW4gQm93bCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUGxheSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL1BsYXkiLCJpbmRleCI6IjI2MjE3NiIsIm1ldGEiOlt7IjAiOiIifSx7ImFjYyI6IjIgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjMyMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjE4MCIsIm1heCI6Ijc4MCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb24iLCJpbmRleCI6IjI4NjU5NiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6Ik5vbmxpbmVhcml0eSBmYWN0b3IgKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6IjI4NjU2OCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjIwIiwibWluIjoiMTUwIiwibWF4IjoiNTAwIiwic3RlcCI6IjAuMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STibetanBowlProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTibetanBowl());

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
        
        this.STibetanBowl_instance = new WebAssembly.Instance(STibetanBowlProcessor.wasm_module, STibetanBowlProcessor.importObject);
  	   	this.factory = this.STibetanBowl_instance.exports;
        this.HEAP = this.STibetanBowl_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STibetanBowlProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * STibetanBowlProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, STibetanBowlProcessor.buffer_size, this.ins, this.outs);
        
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

STibetanBowlProcessor.buffer_size = 128;

STibetanBowlProcessor.importObject = {
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
    if (STibetanBowlProcessor.wasm_module == undefined) {
        STibetanBowlProcessor.wasm_module = new WebAssembly.Module(STibetanBowlProcessor.atob(getBase64CodeSTibetanBowl()));
        registerProcessor('STibetanBowl', STibetanBowlProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STibetanBowl cannot be loaded or compiled");
}

