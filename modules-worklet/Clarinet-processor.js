
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877264\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131280\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131300\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164072\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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bGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIENsYXJpbmV0In0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiQ2xhcmluZXQifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ2xhcmluZXQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL1dvb2R3aW5kcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDTEFSSU5FVCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTE2MCIsIm1ldGEiOlt7IjEiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjgwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjExMCIsIm1heCI6IjEzMDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9QcmVzc3VyZSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siYWNjIjoiMSAwIC01IDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAuNjUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyMDQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBTdGlmZm5lc3MiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvSW5zdHJ1bWVudF9TdGlmZm5lc3MiLCJpbmRleCI6IjEzMTMwMCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yNSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTY0MDcyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjEzNyIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
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

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.Clarinet_instance = new WebAssembly.Instance(ClarinetProcessor.wasm_module, ClarinetProcessor.importObject);
  	   	this.factory = this.Clarinet_instance.exports;
        this.HEAP = this.Clarinet_instance.exports.memory.buffer;
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
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, ClarinetProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
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
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
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
            //console.log("output.length " + output.length);
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

