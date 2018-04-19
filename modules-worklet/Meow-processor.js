
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"filename\":\"Meow\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98840\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Meow\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"172\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"160\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"33112\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"65968\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"152\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"33108\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"65964\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"100\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "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IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiTWVvdyJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6Ik1lb3cifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZhZWZmZWN0cy5saWIvbmFtZSI6IkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSJ9LHsidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiTUVPVyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9NRU9XL09OL09GRiIsImluZGV4IjoiMTcyIiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiIxNjAiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzcwIiwibWluIjoiMjgwIiwibWF4IjoiMzgwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMiIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8yIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIzODAiLCJtYXgiOiI1NTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAzIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzMiLCJpbmRleCI6IjY1OTY4IiwibWV0YSI6W3siYWNjIjoiMiAxIC0xMCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjU4Ny4zMiIsIm1pbiI6IjU1MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkdhaW4iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMSIsImluZGV4IjoiMTUyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMiIsImluZGV4IjoiMzMxMDgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8zIiwiaW5kZXgiOiI2NTk2NCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJXYWggV2FoIiwiYWRkcmVzcyI6Ii9NRU9XL1dhaF9XYWgiLCJpbmRleCI6IjEwMCIsIm1ldGEiOlt7ImFjYyI6IjAgMCAtMTUgMTAgMCJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX0w"; }

/*
 faust2wasm: GRAME 2017-2018
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
        
        this.Meow_instance = new WebAssembly.Instance(MeowProcessor.wasm_module, MeowProcessor.importObject);
  	   	this.factory = this.Meow_instance.exports;
        this.HEAP = this.Meow_instance.exports.memory.buffer;
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
        this.factory.compute(this.dsp, MeowProcessor.buffer_size, this.ins, this.outs);
        
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
    if (MeowProcessor.wasm_module == undefined) {
        MeowProcessor.wasm_module = new WebAssembly.Module(MeowProcessor.atob(getBase64CodeMeow()));
        registerProcessor('Meow', MeowProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Meow cannot be loaded or compiled");
}

