
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877272\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131288\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131212\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131308\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164080\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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Y3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJDbGFyaW5ldCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTYwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODgiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTIxMiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzA4IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwODAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class ClarinetProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ClarinetProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ClarinetProcessor.parse_items(group.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= ClarinetProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        ClarinetProcessor.parse_ui(JSON.parse(getJSONClarinet()).ui, params, ClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONClarinet());

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
        
        this.Clarinet_instance = new WebAssembly.Instance(ClarinetProcessor.wasm_module, ClarinetProcessor.importObject);
  	   	this.factory = this.Clarinet_instance.exports;
        this.HEAP = this.Clarinet_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ClarinetProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ClarinetProcessor.parse_ui(this.json_object.ui, this, ClarinetProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * ClarinetProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, ClarinetProcessor.buffer_size, this.ins, this.outs);
        
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

ClarinetProcessor.buffer_size = 128;

ClarinetProcessor.importObject = {
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
    if (ClarinetProcessor.wasm_module == undefined) {
        ClarinetProcessor.wasm_module = new WebAssembly.Module(ClarinetProcessor.atob(getBase64CodeClarinet()));
        registerProcessor('Clarinet', ClarinetProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Clarinet cannot be loaded or compiled");
}

