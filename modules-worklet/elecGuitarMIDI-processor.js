
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONelecGuitarMIDI() {
	return "{\"name\":\"ElecGuitarMidi\",\"version\":\"2.5.12\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"33000\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple electric guitar model without effect chain.\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ElecGuitarMidi\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"elecGuitar\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/elecGuitar/midi/freq\",\"index\":\"28\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/elecGuitar/midi/bend\",\"index\":\"32\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/elecGuitar/midi/gain\",\"index\":\"8300\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/elecGuitar/midi/sustain\",\"index\":\"40\",\"meta\":[{\"3\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hslider\",\"label\":\"pluckPosition\",\"address\":\"/elecGuitar/pluckPosition\",\"index\":\"16\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 1\"}],\"init\":\"0.8\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/elecGuitar/outGain\",\"index\":\"0\",\"meta\":[{\"2\":\"\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/elecGuitar/gate\",\"index\":\"36\",\"meta\":[{\"3\":\"\"}]}]}]}";
}
function getBase64CodeelecGuitarMIDI() { return "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AGpDAAAAPzgCACAAQRBqQ83MTD84AgAgAEEcakMAANxDOAIAIABBIGpDAACAPzgCACAAQSRqQwAAAAA4AgAgAEEoakMAAAAAOAIAIABB7MAAakPNzEw/OAIAC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC/OSgIAAAQBBAAvsEnsibmFtZSI6IkVsZWNHdWl0YXJNaWRpIiwidmVyc2lvbiI6IjIuNS4xMiIsIm9wdGlvbnMiOiJ3YXNtLWViLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiMzMwMDAiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpUm9tYWluIE1pY2hvbiwgQ0NSTUEgKFN0YW5mb3JkIFVuaXZlcnNpdHkpLCBHUkFNRSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IlNpbXBsZSBlbGVjdHJpYyBndWl0YXIgbW9kZWwgd2l0aG91dCBlZmZlY3QgY2hhaW4uIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJNSVQifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkVsZWNHdWl0YXJNaWRpIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiZWxlY0d1aXRhciIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJtaWRpIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJmcmVxIiwiYWRkcmVzcyI6Ii9lbGVjR3VpdGFyL21pZGkvZnJlcSIsImluZGV4IjoiMjgiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0NDAiLCJtaW4iOiI1MCIsIm1heCI6IjEwMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbmQiLCJhZGRyZXNzIjoiL2VsZWNHdWl0YXIvbWlkaS9iZW5kIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjEiOiIifSx7ImhpZGRlbiI6IjEifSx7Im1pZGkiOiJwaXRjaHdoZWVsIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJnYWluIiwiYWRkcmVzcyI6Ii9lbGVjR3VpdGFyL21pZGkvZ2FpbiIsImluZGV4IjoiODMwMCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJzdXN0YWluIiwiYWRkcmVzcyI6Ii9lbGVjR3VpdGFyL21pZGkvc3VzdGFpbiIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyIzIjoiIn0seyJoaWRkZW4iOiIxIn0seyJtaWRpIjoiY3RybCA2NCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6InBsdWNrUG9zaXRpb24iLCJhZGRyZXNzIjoiL2VsZWNHdWl0YXIvcGx1Y2tQb3NpdGlvbiIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAxIn1dLCJpbml0IjoiMC44IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Im91dEdhaW4iLCJhZGRyZXNzIjoiL2VsZWNHdWl0YXIvb3V0R2FpbiIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiYnV0dG9uIiwibGFiZWwiOiJnYXRlIiwiYWRkcmVzcyI6Ii9lbGVjR3VpdGFyL2dhdGUiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siMyI6IiJ9XX1dfV19MA=="; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class elecGuitarMIDI_polyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	elecGuitarMIDI_polyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            elecGuitarMIDI_polyProcessor.parse_items(group.items, obj, callback);
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
            elecGuitarMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
            elecGuitarMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= elecGuitarMIDI_polyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        elecGuitarMIDI_polyProcessor.parse_ui(JSON.parse(getJSONelecGuitarMIDI()).ui, params, elecGuitarMIDI_polyProcessor.parse_item1);
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
        
        // Keep JSON parsed object
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONelecGuitarMIDI());
        } catch (e) {
            return null;
        }
        
        var memory_size = pow2limit(parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONelecGuitarMIDI());
        
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
        
        this.factory = elecGuitarMIDI_polyProcessor.elecGuitarMIDI_instance.exports;
        this.HEAP = elecGuitarMIDI_polyProcessor.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = elecGuitarMIDI_polyProcessor.mixer_instance.exports;
        
        console.log(this.mixer);
        console.log(this.factory);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = elecGuitarMIDI_polyProcessor.polyphony;
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
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + elecGuitarMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
             // Parse UI
            elecGuitarMIDI_polyProcessor.parse_ui(this.json_object.ui, this, elecGuitarMIDI_polyProcessor.parse_item2);
            
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
                    console.log("Playing voice not found...\n");
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
                    this.setParamValue(path, elecGuitarMIDI_polyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            for (var i = 0; i < this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
            }
        }

        this.getParamValue = function (path)
        {
            return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
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
            this.compute_handler(elecGuitarMIDI_polyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(elecGuitarMIDI_polyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], elecGuitarMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], elecGuitarMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(elecGuitarMIDI_polyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.001) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
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
elecGuitarMIDI_polyProcessor.buffer_size = 128;
elecGuitarMIDI_polyProcessor.polyphony = 16;

elecGuitarMIDI_polyProcessor.memory = elecGuitarMIDI_polyProcessor.createMemory(elecGuitarMIDI_polyProcessor.buffer_size, elecGuitarMIDI_polyProcessor.polyphony);

// Create Mixer
elecGuitarMIDI_polyProcessor.mixObject = { imports: { print: arg => console.log(arg) } }
elecGuitarMIDI_polyProcessor.mixObject["memory"] = { "memory": elecGuitarMIDI_polyProcessor.memory };

elecGuitarMIDI_polyProcessor.importObject = {
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
        
        memory: elecGuitarMIDI_polyProcessor.memory,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(elecGuitarMIDI_polyProcessor.atob(getBase64Mixer()));
    elecGuitarMIDI_polyProcessor.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, elecGuitarMIDI_polyProcessor.mixObject);
    let wasm_module = new WebAssembly.Module(elecGuitarMIDI_polyProcessor.atob(getBase64CodeelecGuitarMIDI()));
    elecGuitarMIDI_polyProcessor.elecGuitarMIDI_instance = new WebAssembly.Instance(wasm_module, elecGuitarMIDI_polyProcessor.importObject);
    registerProcessor('elecGuitarMIDI_poly', elecGuitarMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust elecGuitarMIDI_poly cannot be loaded or compiled");
}


