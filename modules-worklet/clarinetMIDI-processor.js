
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONclarinetMIDI() {
	return "{\"name\":\"ClarinetMIDI\",\"version\":\"2.5.19\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"16612\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple MIDI-controllable clarinet physical model with physical parameters.\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ClarinetMIDI\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"clarinet\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/clarinet/midi/freq\",\"index\":\"8380\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/clarinet/midi/bend\",\"index\":\"8384\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/clarinet/midi/gain\",\"index\":\"96\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"envAttack\",\"address\":\"/clarinet/midi/envAttack\",\"index\":\"104\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"30\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/clarinet/midi/sustain\",\"index\":\"84\",\"meta\":[{\"4\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"otherParams\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"reedStiffness\",\"address\":\"/clarinet/otherParams/reedStiffness\",\"index\":\"172\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bellOpening\",\"address\":\"/clarinet/otherParams/bellOpening\",\"index\":\"16\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoFreq\",\"address\":\"/clarinet/otherParams/vibratoFreq\",\"index\":\"52\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoGain\",\"address\":\"/clarinet/otherParams/vibratoGain\",\"index\":\"36\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/clarinet/otherParams/outGain\",\"index\":\"0\",\"meta\":[{\"4\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/clarinet/gate\",\"index\":\"80\",\"meta\":[{\"2\":\"\"}]}]}]}";
}
function getBase64CodeclarinetMIDI() { return "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b24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiU2ltcGxlIE1JREktY29udHJvbGxhYmxlIGNsYXJpbmV0IHBoeXNpY2FsIG1vZGVsIHdpdGggcGh5c2ljYWwgcGFyYW1ldGVycy4ifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJNSVQifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0TUlESSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiY2xhcmluZXQiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoibWlkaSIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZnJlcSIsImFkZHJlc3MiOiIvY2xhcmluZXQvbWlkaS9mcmVxIiwiaW5kZXgiOiI4MzgwIiwibWV0YSI6W3siMCI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNDQwIiwibWluIjoiNTAiLCJtYXgiOiIxMDAwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJiZW5kIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL2JlbmQiLCJpbmRleCI6IjgzODQiLCJtZXRhIjpbeyIxIjoiIn0seyJoaWRkZW4iOiIxIn0seyJtaWRpIjoicGl0Y2h3aGVlbCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZ2FpbiIsImFkZHJlc3MiOiIvY2xhcmluZXQvbWlkaS9nYWluIiwiaW5kZXgiOiI5NiIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJlbnZBdHRhY2siLCJhZGRyZXNzIjoiL2NsYXJpbmV0L21pZGkvZW52QXR0YWNrIiwiaW5kZXgiOiIxMDQiLCJtZXRhIjpbeyIzIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjMwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJzdXN0YWluIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL3N1c3RhaW4iLCJpbmRleCI6Ijg0IiwibWV0YSI6W3siNCI6IiJ9LHsiaGlkZGVuIjoiMSJ9LHsibWlkaSI6ImN0cmwgNjQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Im90aGVyUGFyYW1zIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJyZWVkU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9vdGhlclBhcmFtcy9yZWVkU3RpZmZuZXNzIiwiaW5kZXgiOiIxNzIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiYmVsbE9wZW5pbmciLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL2JlbGxPcGVuaW5nIiwiaW5kZXgiOiIxNiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2aWJyYXRvRnJlcSIsImFkZHJlc3MiOiIvY2xhcmluZXQvb3RoZXJQYXJhbXMvdmlicmF0b0ZyZXEiLCJpbmRleCI6IjUyIiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoidmlicmF0b0dhaW4iLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL3ZpYnJhdG9HYWluIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7IjMiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoib3V0R2FpbiIsImFkZHJlc3MiOiIvY2xhcmluZXQvb3RoZXJQYXJhbXMvb3V0R2FpbiIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjQiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvY2xhcmluZXQvZ2F0ZSIsImluZGV4IjoiODAiLCJtZXRhIjpbeyIyIjoiIn1dfV19XX0w"; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class clarinetMIDI_polyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	clarinetMIDI_polyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            clarinetMIDI_polyProcessor.parse_items(group.items, obj, callback);
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
            clarinetMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
            clarinetMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= clarinetMIDI_polyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        
        // Add instrument parameters
        clarinetMIDI_polyProcessor.parse_ui(JSON.parse(getJSONclarinetMIDI()).ui, params, clarinetMIDI_polyProcessor.parse_item1);
        
        // Possibly add effect parameters
        if (typeof (getJSONeffect) !== "undefined") {
             clarinetMIDI_polyProcessor.parse_ui(JSON.parse(getJSONeffect()).ui, params, clarinetMIDI_polyProcessor.parse_item1);
        }
        return params;
    }
    
    static createMemory(buffer_size, polyphony) 
    {
        // Memory allocator
        var ptr_size = 4;
        var sample_size = 4;
        
        function pow2limit(x)
        {
            var n = 65536; // Minimum = 64 kB
            while (n < x) { n = 2 * n; }
            return n;
        }
        
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONclarinetMIDI());
        } catch (e) {
            return null;
        }
        
        var effect_json_object_size = 0;
        if (typeof (getJSONeffect) !== "undefined") {
            var effect_json_object = null;
            try {
                effect_json_object = JSON.parse(getJSONeffect());
                effect_json_object_size = parseInt(effect_json_object.size);
            } catch (e) {
                faust.error_msg = "Error in JSON.parse: " + e;
                return null;
            }
        }
        
        var memory_size = pow2limit(effect_json_object_size + parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONclarinetMIDI());
        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }
        
        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.debug = false;
        
        this.ins = null;
        this.outs = null;
        this.mixing = null;
        this.compute_handler = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.fFreqLabel = "";
        this.fGateLabel = "";
        this.fGainLabel = "";
        this.fDate = 0;
        
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }
   
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = clarinetMIDI_polyProcessor.clarinetMIDI_instance.exports;
        this.HEAP = clarinetMIDI_polyProcessor.memory.buffer;
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
        // this.audio_heap_ptr = 0; Fails when 0...
        this.audio_heap_ptr = 65536;
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        this.audio_heap_ptr_mixing = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_mixing + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = clarinetMIDI_polyProcessor.mixer_instance.exports;
        
        // wasm effect
        this.effect = (clarinetMIDI_polyProcessor.effect_instance) ? clarinetMIDI_polyProcessor.effect_instance.exports : null;
        
        console.log(this.mixer);
        console.log(this.factory);
        console.log(this.effect);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = clarinetMIDI_polyProcessor.polyphony;
        this.dsp_voices = [];
        this.dsp_voices_state = [];
        this.dsp_voices_level = [];
        this.dsp_voices_date = [];
        this.dsp_voices_trigger = [];
        
        this.kActiveVoice = 0;
        this.kFreeVoice = -1;
        this.kReleaseVoice = -2;
        this.kNoVoice = -3;
     
        this.pathTable = [];
        
        // Allocate table for 'setParamValue'
        this.value_table = [];
        
        for (var i = 0; i <  this.polyphony; i++) {
            this.dsp_voices[i] = this.dsp_start + i * parseInt(this.json_object.size);
            this.dsp_voices_state[i] = this.kFreeVoice;
            this.dsp_voices_level[i] = 0;
            this.dsp_voices_date[i] = 0;
            this.dsp_voices_trigger[i] = false;
        }
        
        // Effect memory starts after last voice
        this.effect_start = this.dsp_voices[this.polyphony - 1] + parseInt(this.json_object.size);
    
        this.getPlayingVoice = function(pitch)
        {
            var voice_playing = this.kNoVoice;
            var oldest_date_playing = Number.MAX_VALUE;
            
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === pitch) {
                    // Keeps oldest playing voice
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            return voice_playing;
        }
        
        // Always returns a voice
        this.allocVoice = function(voice)
        {
            this.dsp_voices_date[voice] = this.fDate++;
            this.dsp_voices_trigger[voice] = true;    //so that envelop is always re-initialized
            this.dsp_voices_state[voice] = this.kActiveVoice;
            return voice;
        }
        
        this.getFreeVoice = function()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === this.kFreeVoice) {
                    return this.allocVoice(i);
                }
            }
            
            var voice_release = this.kNoVoice;
            var voice_playing = this.kNoVoice;
            var oldest_date_release = Number.MAX_VALUE;
            var oldest_date_playing = Number.MAX_VALUE;
            
            // Scan all voices
            for (var i = 0; i <  this.polyphony; i++) {
                // Try to steal a voice in kReleaseVoice mode...
                if (this.dsp_voices_state[i] === this.kReleaseVoice) {
                    // Keeps oldest release voice
                    if (this.dsp_voices_date[i] < oldest_date_release) {
                        oldest_date_release = this.dsp_voices_date[i];
                        voice_release = i;
                    }
                } else {
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            // Then decide which one to steal
            if (oldest_date_release != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
                return this.allocVoice(voice_playing);
            } else {
                return this.kNoVoice;
            }
        }
        
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.midiToFreq = function (note)
        {
            return 440.0 * Math.pow(2.0, (note - 69.0) / 12.0);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + clarinetMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + clarinetMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI part
            clarinetMIDI_polyProcessor.parse_ui(this.json_object.ui, this, clarinetMIDI_polyProcessor.parse_item2);
            
            if (this.effect) {
                clarinetMIDI_polyProcessor.parse_ui(this.effect_json_object.ui, this, clarinetMIDI_polyProcessor.parse_item2);
            }
     
            // keep 'keyOn/keyOff' labels
            for (i = 0; i < this.inputs_items.length; i++) {
                if (this.inputs_items[i].endsWith("/gate")) {
                    this.fGateLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGateLabel);
                } else if (this.inputs_items[i].endsWith("/freq")) {
                    this.fFreqLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fFreqLabel);
                } else if (this.inputs_items[i].endsWith("/gain")) {
                    this.fGainLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGainLabel);
                }
            }
            
            // Init DSP voices
            for (i = 0; i <  this.polyphony; i++) {
                this.factory.init(this.dsp_voices[i], sampleRate);  // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
            
            // Init effect
            if (this.effect) {
                this.effect.init(this.effect_start, sampleRate);
            }
        }
        
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            if (this.debug)
                console.log("keyOn voice %d", voice);
            this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel, this.midiToFreq(pitch));
            this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel, velocity/127.);
            this.dsp_voices_state[voice] = pitch;
        }
        
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                if (this.debug)
                    console.log("keyOff voice %d", voice);
                // No use of velocity for now...
                this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel, 0.0);
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                if (this.debug)
                    console.log("Playing voice not found...");
            }
        }
        
        this.allNotesOff = function ()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                this.dsp_voices_state[i] = this.kReleaseVoice;
            }
        }
        
        this.ctrlChange = function (channel, ctrl, value)
        {
            if (ctrl === 123 || ctrl === 120) {
                this.allNotesOff();
            }
            
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, clarinetMIDI_polyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            if (this.effect && getJSONeffect().includes(path)) {
                this.effect.setParamValue(this.effect_start, this.pathTable[path], val);
            } else {
                for (var i = 0; i < this.polyphony; i++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
                }
            }
        }

        this.getParamValue = function (path)
        {
            if (this.effect && getJSONeffect().includes(path)) {
                return this.effect.getParamValue(this.effect_start, this.pathTable[path]);
            } else {
                return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
            }
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
            this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
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
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(clarinetMIDI_polyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(clarinetMIDI_polyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], clarinetMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], clarinetMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(clarinetMIDI_polyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.001) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
        }
        
        // Apply effect
        if (this.effect) {
            this.effect.compute(this.effect_start, clarinetMIDI_polyProcessor.buffer_size, this.outs, this.outs);
        }
        
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

// Create memory block
clarinetMIDI_polyProcessor.buffer_size = 128;
clarinetMIDI_polyProcessor.polyphony = 16;

clarinetMIDI_polyProcessor.memory = clarinetMIDI_polyProcessor.createMemory(clarinetMIDI_polyProcessor.buffer_size, clarinetMIDI_polyProcessor.polyphony);

// Create Mixer
clarinetMIDI_polyProcessor.mixObject = { imports: { print: arg => console.log(arg) } }
clarinetMIDI_polyProcessor.mixObject["memory"] = { "memory": clarinetMIDI_polyProcessor.memory };

clarinetMIDI_polyProcessor.importObject = {
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
        
        memory: clarinetMIDI_polyProcessor.memory,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(clarinetMIDI_polyProcessor.atob(getBase64Mixer()));
    clarinetMIDI_polyProcessor.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, clarinetMIDI_polyProcessor.mixObject);
    let wasm_module = new WebAssembly.Module(clarinetMIDI_polyProcessor.atob(getBase64CodeclarinetMIDI()));
    clarinetMIDI_polyProcessor.clarinetMIDI_instance = new WebAssembly.Instance(wasm_module, clarinetMIDI_polyProcessor.importObject);
    // Possibly compile effect
    if (typeof (getBase64Codeeffect) !== "undefined") {
        let wasm_effect_module = new WebAssembly.Module(clarinetMIDI_polyProcessor.atob(getBase64Codeeffect()));
        clarinetMIDI_polyProcessor.effect_instance = new WebAssembly.Instance(wasm_effect_module, clarinetMIDI_polyProcessor.importObject);
    }
    registerProcessor('clarinetMIDI_poly', clarinetMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust clarinetMIDI_poly cannot be loaded or compiled");
}


