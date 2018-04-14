
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98840\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"56\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"65864\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"148\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"33012\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"65860\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"144\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"33008\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"98768\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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cGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6Ik1lb3cifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNZW93In0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1FT1ciLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvTUVPVy9PTi9PRkYiLCJpbmRleCI6IjU2IiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiI2NTg2NCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjE0OCIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjMzMDEyIiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiNjU4NjAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIxNDQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8zIiwiaW5kZXgiOiIzMzAwOCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9NRU9XL1dhaF9XYWgiLCJpbmRleCI6Ijk4NzY4IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xNSAxMCAwIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
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

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

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

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

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

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, MeowProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
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

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
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
            //console.log("output.length " + output.length);
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

