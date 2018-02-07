
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877264\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131188\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131280\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131264\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131300\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164072\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIENsYXJpbmV0In0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ2xhcmluZXQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL1dvb2R3aW5kcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDTEFSSU5FVCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTE4OCIsIm1ldGEiOlt7IjEiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjgwIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjExMCIsIm1heCI6IjEzMDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9QcmVzc3VyZSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siYWNjIjoiMSAwIC01IDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAuNjUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyNjQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBTdGlmZm5lc3MiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvSW5zdHJ1bWVudF9TdGlmZm5lc3MiLCJpbmRleCI6IjEzMTMwMCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yNSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTY0MDcyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjEzNyIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
        
        this.factory = ClarinetProcessor.Clarinet_instance.exports;
        this.HEAP = ClarinetProcessor.Clarinet_instance.exports.memory.buffer;
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
    let wasm_module = new WebAssembly.Module(ClarinetProcessor.atob(getBase64CodeClarinet()));
    ClarinetProcessor.Clarinet_instance = new WebAssembly.Instance(wasm_module, ClarinetProcessor.importObject);
    registerProcessor('Clarinet', ClarinetProcessor);
} catch (e) {
    console.log(e); console.log("Faust Clarinet cannot be loaded or compiled");
}

