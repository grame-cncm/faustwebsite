
/*
Code generated with Faust version 2.7.0
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"filename\":\"STibetanBowl\",\"version\":\"2.7.0\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24568\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STibetanBowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"312\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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AsC2AUEAQ0iCMz5BACoCDJQ4Ati+AUEAQ1deD0JBACoCDJU4Aty+AUEAQ9sPyUBBACoCDJU4Aoi/AQuQgICAAAAgACABEAwgABAOIAAQCwuvgICAAABBAEMAAAAAOAIsQQBDAADcQzgCuAJBAEMK16M8OAL0vgFBAEMAAFxDOAKMvwELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLvJCAgAABAEEAC7UQeyJuYW1lIjoiVGliZXRhbiBCb3dsIiwiZmlsZW5hbWUiOiJTVGliZXRhbkJvd2wiLCJ2ZXJzaW9uIjoiMi43LjAiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0NTY4IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IkJhbmRlZCBXYXZlZ3VpZGUgTW9kZWxkIFRpYmV0YW4gQm93bCJ9LHsiZmlsZW5hbWUiOiJTVGliZXRhbkJvd2wifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGliZXRhbiBCb3dsIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiVGliZXRhbiBCb3dsIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvUGxheSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMzEyIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24iLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uIiwiaW5kZXgiOiIyNDQzNiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6Ik5vbmxpbmVhcml0eSBmYWN0b3IgKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6IjI0NDYwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIxNTAiLCJtYXgiOiI1MDAiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

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

