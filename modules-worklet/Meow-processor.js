
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98840\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"36\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"33024\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"65856\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"156\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"33020\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"65852\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"152\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"98768\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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dW1lbnQgZnJvbSBTVEsifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik1lb3cifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZhZWZmZWN0cy5saWIvbmFtZSI6IkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSJ9LHsidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTUVPVyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9NRU9XL09OL09GRiIsImluZGV4IjoiMzYiLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlcXVlbmNpZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzEiLCJpbmRleCI6IjMzMDI0IiwibWV0YSI6W3siYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjM3MCIsIm1pbiI6IjI4MCIsIm1heCI6IjM4MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMiIsImluZGV4IjoiNjU4NTYiLCJtZXRhIjpbeyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMzgwIiwibWF4IjoiNTUwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8zIiwiaW5kZXgiOiIxNTYiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIzMzAyMCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzIiLCJpbmRleCI6IjY1ODUyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiMTUyIiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCBXYWgiLCJhZGRyZXNzIjoiL01FT1cvV2FoX1dhaCIsImluZGV4IjoiOTg3NjgiLCJtZXRhIjpbeyJhY2MiOiIwIDAgLTE1IDEwIDAifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
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

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = MeowProcessor.Meow_instance.exports;
        this.HEAP = MeowProcessor.Meow_instance.exports.memory.buffer;
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
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, MeowProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, MeowProcessor.buffer_size, this.ins, this.outs);
        
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
    let wasm_module = new WebAssembly.Module(MeowProcessor.atob(getBase64CodeMeow()));
    MeowProcessor.Meow_instance = new WebAssembly.Instance(wasm_module, MeowProcessor.importObject);
    registerProcessor('Meow', MeowProcessor);
} catch (e) {
    console.log(e); console.log("Faust Meow cannot be loaded or compiled");
}

