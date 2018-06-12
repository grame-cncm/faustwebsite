
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98844\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"36\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"33028\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"65860\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"160\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"33024\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"65856\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"156\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"98772\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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dHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6Ik1lb3cifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNZW93In0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1FT1ciLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvTUVPVy9PTi9PRkYiLCJpbmRleCI6IjM2IiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiIzMzAyOCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjY1ODYwIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiMTYwIiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMzMwMjQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiI2NTg1NiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjE1NiIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9NRU9XL1dhaF9XYWgiLCJpbmRleCI6Ijk4NzcyIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xNSAxMCAwIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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

