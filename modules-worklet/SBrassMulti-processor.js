
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"filename\":\"SBrassMulti\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"360808\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SBrassMulti\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"262164\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"295124\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"262272\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"327964\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"295120\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"262268\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"327960\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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QQBDAACAP0EAKgKIghRDAACAP5KVOAKQghRBAEMAAIA/QQAqAoiCFJM4ApSCFEEAQQAqAoiCFEMAAIC/kkEAKgKEghSVQwAAgD+SOALMghZBAEMAAABAQwAAgD9DAACAP0EAKgKEghRDAAAAQBABlZOUOALQghYLkICAgAAAIAAgARAMIAAQDiAAEAsL1oCAgAAAQQBDAAAAADgClIAQQQBDAAAAPzgC/IAQQQBDAADcQzgCgIEQQQBDAAAAPzgC0IESQQBDAAC5QzgC1IESQQBDAAAAPzgCmIIUQQBDe9QSRDgCnIIUC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC4ebgIAAAQBBAAuAG3sibmFtZSI6Ik11bHRpcGxlIEJyYXNzIiwiZmlsZW5hbWUiOiJTQnJhc3NNdWx0aSIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjM2MDgwOCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0JyYXNzTXVsdGkifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9PTi9PRkYiLCJpbmRleCI6IjI2MjE2NCIsImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVxdWVuY2llcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMSIsImluZGV4IjoiMjk1MTI0IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjI2MjI3MiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMzgwIiwibWF4IjoiNTUwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMyIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8zIiwiaW5kZXgiOiIzMjc5NjQiLCJtZXRhIjpbeyJhY2MiOiIyIDAgLTEwIDAgMTIifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMjk1MTIwIiwibWV0YSI6W3siYWNjIjoiMSAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMiIsImluZGV4IjoiMjYyMjY4IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiMzI3OTYwIiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19XX1dfQ=="; }

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

