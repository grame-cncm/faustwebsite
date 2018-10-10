
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"filename\":\"SBrassMulti\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"360808\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SBrassMulti\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"262184\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"262172\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"295112\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"327964\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"262164\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"295108\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"327960\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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P5KVOAKMghRBAEMAAIA/QQAqAoiCFEMAAIA/kpU4ApCCFEEAQwAAgD9BACoCiIIUkzgClIIUQQBBACoCiIIUQwAAgL+SQQAqAoSCFJVDAACAP5I4AsyCFkEAQwAAAEBDAACAP0MAAIA/QQAqAoSCFEMAAABAEAGVk5Q4AtCCFguQgICAAAAgACABEAwgABAOIAAQCwvWgICAAABBAEMAAAA/OAKUgBBBAEMAALlDOAKcgBBBAEMAAAAAOAKogBBBAEMAAAA/OALEgRJBAEMAANxDOALIgRJBAEMAAAA/OAKYghRBAEN71BJEOAKcghQLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLh5uAgAABAEEAC4AbeyJuYW1lIjoiTXVsdGlwbGUgQnJhc3MiLCJmaWxlbmFtZSI6IlNCcmFzc011bHRpIiwidmVyc2lvbiI6IjIuMTEuOCIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2luc3RydW1lbnRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiMzYwODA4IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiRVIifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiV2F2ZUd1aWRlIEJyYXNzIGluc3RydW1lbnQgZnJvbSBTVEsifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJTQnJhc3NNdWx0aSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik11bHRpcGxlIEJyYXNzIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L09OL09GRiIsImluZGV4IjoiMjYyMTg0IiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiIyNjIxNzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiMjk1MTEyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjMyNzk2NCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTAgMCAxMiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIyNjIxNjQiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIyOTUxMDgiLCJtZXRhIjpbeyJhY2MiOiIwIDAgLTEwIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDMiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8zIiwiaW5kZXgiOiIzMjc5NjAiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifV19XX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SBrassMultiProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBrassMultiProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBrassMultiProcessor.parse_items(group.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBrassMultiProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBrassMultiProcessor.parse_ui(JSON.parse(getJSONSBrassMulti()).ui, params, SBrassMultiProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBrassMulti());

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
        
        this.SBrassMulti_instance = new WebAssembly.Instance(SBrassMultiProcessor.wasm_module, SBrassMultiProcessor.importObject);
  	   	this.factory = this.SBrassMulti_instance.exports;
        this.HEAP = this.SBrassMulti_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBrassMultiProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBrassMultiProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBrassMultiProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBrassMultiProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBrassMultiProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBrassMultiProcessor.parse_ui(this.json_object.ui, this, SBrassMultiProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * SBrassMultiProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, SBrassMultiProcessor.buffer_size, this.ins, this.outs);
        
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

SBrassMultiProcessor.buffer_size = 128;

SBrassMultiProcessor.importObject = {
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
    if (SBrassMultiProcessor.wasm_module == undefined) {
        SBrassMultiProcessor.wasm_module = new WebAssembly.Module(SBrassMultiProcessor.atob(getBase64CodeSBrassMulti()));
        registerProcessor('SBrassMulti', SBrassMultiProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SBrassMulti cannot be loaded or compiled");
}

