
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/vaeffects.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"360972\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"262200\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"327988\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"295148\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"262188\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"327984\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"295144\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"262180\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"360892\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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L2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2luc3RydW1lbnRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC92YWVmZmVjdHMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiMzYwOTcyIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiRVIifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiV2F2ZUd1aWRlIEJyYXNzIGluc3RydW1lbnQgZnJvbSBTVEsifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJNZW93In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTWVvdyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmFlZmZlY3RzLmxpYi9uYW1lIjoiRmF1c3QgVmlydHVhbCBBbmFsb2cgRmlsdGVyIEVmZmVjdCBMaWJyYXJ5In0seyJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNRU9XIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL01FT1cvT04vT0ZGIiwiaW5kZXgiOiIyNjIyMDAiLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlcXVlbmNpZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzEiLCJpbmRleCI6IjMyNzk4OCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjI5NTE0OCIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjI2MjE4OCIsIm1ldGEiOlt7ImFjYyI6IjIgMSAtMTAgMCAxMiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1ODcuMzIiLCJtaW4iOiI1NTAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJHYWluIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMSIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzEiLCJpbmRleCI6IjMyNzk4NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzIiLCJpbmRleCI6IjI5NTE0NCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjI2MjE4MCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9NRU9XL1dhaF9XYWgiLCJpbmRleCI6IjM2MDg5MiIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTUgMTAgMCJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0="; }

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
        this.integer_size = 4;
        
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
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * MeowProcessor.buffer_size * this.sample_size);
            
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

