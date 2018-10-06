
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"1139396\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"393292\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"393404\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"393288\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"393344\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"393424\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"426196\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"262168\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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gIAAAQBBAAuFH3sibmFtZSI6IkNsYXJpbmV0IiwiZmlsZW5hbWUiOiJDbGFyaW5ldCIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9pbnN0cnVtZW50cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yZXZlcmJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JvdXRlcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIxMTM5Mzk2IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJDbGFyaW5ldCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMzkzMjkyIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIzOTM0MDQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIzOTMyODgiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjM5MzM0NCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMzkzNDI0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiI0MjYxOTYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIyNjIxNjgiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0="; }

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

