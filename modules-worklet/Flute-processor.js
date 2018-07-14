
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"filename\":\"Flute\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"910160\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Flute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131296\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131312\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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ZSBGbHV0ZSJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkZsdXRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTY4IiwibWV0YSI6W3siMCI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9GbHV0ZS9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTIyNCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjI0NyIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9QcmVzc3VyZSIsImluZGV4IjoiMTMxMjM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjk2IiwibWluIjoiMC4yIiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTI5NiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL1ZpYnJhdG9fRnJlcV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTMxMiIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC41IiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjUiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43MiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= FluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONFlute());

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
        
        this.Flute_instance = new WebAssembly.Instance(FluteProcessor.wasm_module, FluteProcessor.importObject);
  	   	this.factory = this.Flute_instance.exports;
        this.HEAP = this.Flute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * FluteProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * FluteProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, FluteProcessor.buffer_size, this.ins, this.outs);
        
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

FluteProcessor.buffer_size = 128;

FluteProcessor.importObject = {
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
    if (FluteProcessor.wasm_module == undefined) {
        FluteProcessor.wasm_module = new WebAssembly.Module(FluteProcessor.atob(getBase64CodeFlute()));
        registerProcessor('Flute', FluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Flute cannot be loaded or compiled");
}

