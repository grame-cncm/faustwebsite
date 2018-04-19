
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"filename\":\"Flute\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"910152\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Flute\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131292\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131308\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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RSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkZsdXRlIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTY4IiwibWV0YSI6W3siMCI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9GbHV0ZS9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTIyNCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjI0NyIsIm1heCI6IjEyMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9QcmVzc3VyZSIsImluZGV4IjoiMTMxMjM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjk2IiwibWluIjoiMC4yIiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTI5MiIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL1ZpYnJhdG9fRnJlcV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTMwOCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC41IiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjUiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMzAgMCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43MiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= FluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONFlute());

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
        
        this.Flute_instance = new WebAssembly.Instance(FluteProcessor.wasm_module, FluteProcessor.importObject);
  	   	this.factory = this.Flute_instance.exports;
        this.HEAP = this.Flute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * FluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, FluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, FluteProcessor.buffer_size, this.ins, this.outs);
        
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

FluteProcessor.buffer_size = 128;

FluteProcessor.importObject = {
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
    if (FluteProcessor.wasm_module == undefined) {
        FluteProcessor.wasm_module = new WebAssembly.Module(FluteProcessor.atob(getBase64CodeFlute()));
        registerProcessor('Flute', FluteProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Flute cannot be loaded or compiled");
}

