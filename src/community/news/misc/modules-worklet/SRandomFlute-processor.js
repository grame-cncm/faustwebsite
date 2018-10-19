
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"filename\":\"SRandomFlute\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"328572\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SRandomFlute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"262168\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"262720\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"262912\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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Y2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2luc3RydW1lbnRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjMyODU3MiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU1JhbmRvbUZsdXRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUmFuZG9tIEZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIEZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjI2MjE2OCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzIiwibWluIjoiMSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjI3MjAiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6IjYwIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjI2MjkxMiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjA1Iiwic3RlcCI6IjAuMDAwMSJ9XX1dfV19"; }

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

