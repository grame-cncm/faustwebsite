
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/vaeffects.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"360972\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"262312\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"262300\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"295240\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"328092\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"262292\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"295236\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"328088\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"262244\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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eV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvaW5zdHJ1bWVudHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3ZhZWZmZWN0cy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIzNjA5NzIiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6Ik1lb3cifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNZW93In0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1FT1ciLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvTUVPVy9PTi9PRkYiLCJpbmRleCI6IjI2MjMxMiIsImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGcmVxdWVuY2llcyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDEiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMSIsImluZGV4IjoiMjYyMzAwIiwibWV0YSI6W3siYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiMjk1MjQwIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiMzI4MDkyIiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMjYyMjkyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMiIsImluZGV4IjoiMjk1MjM2IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiMzI4MDg4IiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCBXYWgiLCJhZGRyZXNzIjoiL01FT1cvV2FoX1dhaCIsImluZGV4IjoiMjYyMjQ0IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xNSAxMCAwIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfQ=="; }

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

