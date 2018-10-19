
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"1139396\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"393292\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"393404\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"393288\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"393344\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"393424\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"426196\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"262168\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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ZmlsZW5hbWUiOiJDbGFyaW5ldCIsInZlcnNpb24iOiIyLjExLjEwIiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvaW5zdHJ1bWVudHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcmV2ZXJicy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yb3V0ZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi9Eb2N1bWVudHMvZmF1c3R3ZWJzaXRlLWdpdGh1Yi9tb2R1bGVzLXdvcmtsZXQiXSwic2l6ZSI6IjExMzkzOTYiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBDbGFyaW5ldCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkNsYXJpbmV0In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9Xb29kd2luZHMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ0xBUklORVQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzOTMyOTIiLCJtZXRhIjpbeyIxIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ0xBUklORVQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjM5MzQwNCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTQgMCAxMiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxMTAiLCJtYXgiOiIxMzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvUHJlc3N1cmUiLCJpbmRleCI6IjM5MzI4OCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtNSAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjgiLCJtaW4iOiIwLjY1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMzkzMzQ0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMTIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0luc3RydW1lbnRfU3RpZmZuZXNzIiwiaW5kZXgiOiIzOTM0MjQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjQyNjE5NiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4xMzciLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjI2MjE2OCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfQ=="; }

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

