
/*
Code generated with Faust version 2.5.22
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"version\":\"2.5.22\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98840\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"152\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"272\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"33112\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"65968\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"268\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"33108\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"65964\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"100\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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b3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik1lb3cifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZhZWZmZWN0cy5saWIvbmFtZSI6IkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSJ9LHsidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTUVPVyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9NRU9XL09OL09GRiIsImluZGV4IjoiMTUyIiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiIyNzIiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzcwIiwibWluIjoiMjgwIiwibWF4IjoiMzgwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMiIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8yIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjY1OTY4IiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMjY4IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMiIsImluZGV4IjoiMzMxMDgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8zIiwiaW5kZXgiOiI2NTk2NCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9NRU9XL1dhaF9XYWgiLCJpbmRleCI6IjEwMCIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTUgMTAgMCJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0w"; }

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

