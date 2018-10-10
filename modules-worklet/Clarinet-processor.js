
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"1139396\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"262180\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"262268\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"262144\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"262148\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"262288\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"295064\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"311480\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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b21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yZXZlcmJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JvdXRlcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIxMTM5Mzk2IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJDbGFyaW5ldCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMjYyMTgwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjIyNjgiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIyNjIxNDQiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjI2MjE0OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMjYyMjg4IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIyOTUwNjQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMTE0ODAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0="; }

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

