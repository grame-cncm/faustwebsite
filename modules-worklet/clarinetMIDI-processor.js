
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONclarinetMIDI() {
	return "{\"name\":\"ClarinetMIDI\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"16604\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple MIDI-controllable clarinet physical model with physical parameters.\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ClarinetMIDI\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"clarinet\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/clarinet/midi/freq\",\"index\":\"8372\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/clarinet/midi/bend\",\"index\":\"8376\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/clarinet/midi/gain\",\"index\":\"88\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"envAttack\",\"address\":\"/clarinet/midi/envAttack\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"30\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/clarinet/midi/sustain\",\"index\":\"76\",\"meta\":[{\"4\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"otherParams\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"reedStiffness\",\"address\":\"/clarinet/otherParams/reedStiffness\",\"index\":\"164\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bellOpening\",\"address\":\"/clarinet/otherParams/bellOpening\",\"index\":\"16\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoFreq\",\"address\":\"/clarinet/otherParams/vibratoFreq\",\"index\":\"52\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoGain\",\"address\":\"/clarinet/otherParams/vibratoGain\",\"index\":\"36\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/clarinet/otherParams/outGain\",\"index\":\"0\",\"meta\":[{\"4\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/clarinet/gate\",\"index\":\"72\",\"meta\":[{\"2\":\"\"}]}]}]}";
}
function getBase64CodeclarinetMIDI() { return "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cGh5c2ljYWwgbW9kZWwgd2l0aCBwaHlzaWNhbCBwYXJhbWV0ZXJzLiJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibGljZW5zZSI6Ik1JVCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ2xhcmluZXRNSURJIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJjbGFyaW5ldCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJtaWRpIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJmcmVxIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL2ZyZXEiLCJpbmRleCI6IjgzNzIiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0NDAiLCJtaW4iOiI1MCIsIm1heCI6IjEwMDAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbmQiLCJhZGRyZXNzIjoiL2NsYXJpbmV0L21pZGkvYmVuZCIsImluZGV4IjoiODM3NiIsIm1ldGEiOlt7IjEiOiIifSx7ImhpZGRlbiI6IjEifSx7Im1pZGkiOiJwaXRjaHdoZWVsIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJnYWluIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL2dhaW4iLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC42IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImVudkF0dGFjayIsImFkZHJlc3MiOiIvY2xhcmluZXQvbWlkaS9lbnZBdHRhY2siLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMyI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIzMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoic3VzdGFpbiIsImFkZHJlc3MiOiIvY2xhcmluZXQvbWlkaS9zdXN0YWluIiwiaW5kZXgiOiI3NiIsIm1ldGEiOlt7IjQiOiIifSx7ImhpZGRlbiI6IjEifSx7Im1pZGkiOiJjdHJsIDY0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJvdGhlclBhcmFtcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoicmVlZFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvY2xhcmluZXQvb3RoZXJQYXJhbXMvcmVlZFN0aWZmbmVzcyIsImluZGV4IjoiMTY0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbGxPcGVuaW5nIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9vdGhlclBhcmFtcy9iZWxsT3BlbmluZyIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoidmlicmF0b0ZyZXEiLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL3ZpYnJhdG9GcmVxIiwiaW5kZXgiOiI1MiIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6InZpYnJhdG9HYWluIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9vdGhlclBhcmFtcy92aWJyYXRvR2FpbiIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyIzIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Im91dEdhaW4iLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL291dEdhaW4iLCJpbmRleCI6IjAiLCJtZXRhIjpbeyI0IjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6ImdhdGUiLCJhZGRyZXNzIjoiL2NsYXJpbmV0L2dhdGUiLCJpbmRleCI6IjcyIiwibWV0YSI6W3siMiI6IiJ9XX1dfV19MA=="; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

// Polyphony
faust.polyphony = 8;

faust.createMemory = function (buffer_size, polyphony) {
    
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
        json_object = JSON.parse(getJSONclarinetMIDI());
    } catch (e) {
        faust.error_msg = "Error in JSON.parse: " + e;
        return null;
    }
    
    var memory_size = pow2limit(parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
    memory_size = Math.max(2, memory_size); // As least 2
    return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
}

// Create memory block
faust.memory = faust.createMemory(faust.buffer_size, faust.polyphony);

faust.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder: function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
        
        memory: faust.memory,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

faust.b64ToUint6 = function (nChr)
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

faust.atob = function (sBase64, nBlocksSize)
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
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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

faust.mixObject = { imports: { print: arg => console.log(arg) } }
faust.mixObject["memory"] = { "memory": faust.memory };

// WebAssembly instance
faust.clarinetMIDI_instance = null;
faust.mixer_instance = null;

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
        }
    }

    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        clarinetMIDI_polyProcessor.parse_ui(JSON.parse(getJSONclarinetMIDI()).ui, params, clarinetMIDI_polyProcessor.parse_item1);
        return params;
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONclarinetMIDI());
        
        this.output_handler = null;
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
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.clarinetMIDI_instance.exports;
        this.HEAP = faust.memory.buffer;
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
        //this.audio_heap_ptr = 0;
        // Fails when 0...
        this.audio_heap_ptr = 65536;
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        this.audio_heap_ptr_mixing = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_mixing + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * faust.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * faust.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = faust.mixer_instance.exports;
        
        console.log(this.mixer);
        console.log(this.factory);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = faust.polyphony;
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
                console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
             // Parse UI
            clarinetMIDI_polyProcessor.parse_ui(this.json_object.ui, this, clarinetMIDI_polyProcessor.parse_item2);
            
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
        
        /**
         * Instantiates a new polyphonic voice.
         *
         * @param channel - the MIDI channel (0..15, not used for now)
         * @param pitch - the MIDI pitch (0..127)
         * @param velocity - the MIDI velocity (0..127)
         */
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            //console.log("keyOn voice %d", voice);
            this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel, this.midiToFreq(pitch));
            this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel, velocity/127.);
            this.dsp_voices_state[voice] = pitch;
        }
        
        /**
         * De-instantiates a polyphonic voice.
         *
         * @param channel - the MIDI channel (0..15, not used for now)
         * @param pitch - the MIDI pitch (0..127)
         * @param velocity - the MIDI velocity (0..127)
         */
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                //console.log("keyOff voice %d", voice);
                // No use of velocity for now...
                this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel, 0.0);
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                console.log("Playing voice not found...\n");
            }
        }
        
        /**
         * Gently terminates all the active voices.
         */
        this.allNotesOff = function ()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                this.dsp_voices_state[i] = this.kReleaseVoice;
            }
        }
        
        /**
         * Controller 123 allNoteOff only is handled.
         *
         * @param channel - the MIDI channel (0..15, not used for now)
         * @param ctrl - the MIDI controller number (0..127)
         * @param value - the MIDI controller value (0..127)
         */
        this.ctrlChange = function (channel, ctrl, value)
        {
            if (ctrl === 123 || ctrl === 120) {
                this.allNotesOff();
            }
        }
        
        /**
         * PitchWeel: empty for now.
         *
         */
        this.pitchWheel = function (channel, wheel)
        {}
        
        /**
         * Set parameter value.
         *
         * @param path - the path to the wanted parameter (retrieved using 'getParams' method)
         * @param val - the float value for the wanted parameter
         */
        this.setParamValue = function (path, val)
        {
            for (var i = 0; i < this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
            }
        }

        /**
         * Get parameter value.
         *
         * @param path - the path to the wanted parameter (retrieved using 'getParams' method)
         *
         * @return the float value
         */
        this.getParamValue = function (path)
        {
            return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
        }
            
        // Init resulting DSP
        this.initAux();
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    /*
      onmessage (e) {
    var msg  = e.data;
    switch (msg.type) {
      case "midi":  this.onmidi(msg.data[0], msg.data[1], msg.data[2]); break;
      case "patch": this.onpatch(msg.data); break;
      case "param": this.onparam(msg.key, msg.value); break;
    }
  }
 
  
  webmidiport.onmidimessage  = function (msg ) {
  node.port.postMessage({ type:"midi", data:msg.data });
}
   
    */
    
   
    handleMessage(event) {
        
        /*
        // MIDI event handling
        if (event.data.keyOn) {
        	var data = event.data.keyOn;
        	this.keyOn(data[0], data[1], data[2]);
        } else if (event.data.keyOff) {
        	var data = event.data.keyOff;
        	this.keyOff(data[0], data[1], data[2]);
        } else if (event.data.allNotesOff) {
        	this.allNotesOff();
            
        // Parameters change handling
        } else if (event.data.setParamValue) {
            var data = event.data.setParamValue;
            this.setParamValue(data[0], data[1]);
        }
        */
        var msg  = event.data;
   		switch (msg.type) {
      		case "midi":  this.midiMessage(msg.data); break;
      		case "param":  this.setParamValue(msg.key, msg.value); break;
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
        
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
      
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(faust.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(faust.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], faust.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], faust.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(faust.buffer_size, this.numOut, this.mixing, this.outs);
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
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

console.log("registerProcessor");

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(faust.atob(getBase64Mixer()));
    faust.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, faust.mixObject);
    let wasm_module = new WebAssembly.Module(faust.atob(getBase64CodeclarinetMIDI()));
    faust.clarinetMIDI_instance = new WebAssembly.Instance(wasm_module, faust.importObject);
    registerProcessor('clarinetMIDI_poly', clarinetMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust clarinetMIDI cannot be loaded or compiled");
}


