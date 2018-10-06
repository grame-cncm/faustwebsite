
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"filename\":\"SRandomFlute\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"328572\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SRandomFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"262188\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"262160\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"262940\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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dC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIzMjg1NzIiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlNSYW5kb21GbHV0ZSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlJhbmRvbSBGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQdWxzZSIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIxODgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMTYwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI2MCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvUmFuZG9tX0ZsdXRlL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIyNjI5NDAiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4wNSIsInN0ZXAiOiIwLjAwMDEifV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomFlute());

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
        
        this.SRandomFlute_instance = new WebAssembly.Instance(SRandomFluteProcessor.wasm_module, SRandomFluteProcessor.importObject);
  	   	this.factory = this.SRandomFlute_instance.exports;
        this.HEAP = this.SRandomFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomFluteProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SRandomFluteProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SRandomFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomFluteProcessor.buffer_size = 128;

SRandomFluteProcessor.importObject = {
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
    if (SRandomFluteProcessor.wasm_module == undefined) {
        SRandomFluteProcessor.wasm_module = new WebAssembly.Module(SRandomFluteProcessor.atob(getBase64CodeSRandomFlute()));
        registerProcessor('SRandomFlute', SRandomFluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SRandomFlute cannot be loaded or compiled");
}

