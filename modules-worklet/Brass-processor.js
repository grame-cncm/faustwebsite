
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"filename\":\"Brass\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860888\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Brass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32972\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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TUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJCcmFzcyJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvQnJhc3Nlcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjMyIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMDAiLCJtaW4iOiIxNzAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9QYXJhbWV0ZXJzLzB4MDAvVmlicmF0b19GcmVxdWVuY3lfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyOTcyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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

