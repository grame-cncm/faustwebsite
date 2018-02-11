
/*
Code generated with Faust version 2.5.21
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.21\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"910156\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131156\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131216\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131344\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131332\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131232\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"196964\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "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bGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjE2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNDQwIiwibWluIjoiMjQ3IiwibWF4IjoiMTIwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0ZsdXRlL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzEzNDQiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOTYiLCJtaW4iOiIwLjIiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0ZsdXRlL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMzMyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvVmlicmF0b19GcmVxXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMjMyIiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjUiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTk2OTY0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjcyIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
        
        this.factory = FluteProcessor.Flute_instance.exports;
        this.HEAP = FluteProcessor.Flute_instance.exports.memory.buffer;
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
    let wasm_module = new WebAssembly.Module(FluteProcessor.atob(getBase64CodeFlute()));
    FluteProcessor.Flute_instance = new WebAssembly.Instance(wasm_module, FluteProcessor.importObject);
    registerProcessor('Flute', FluteProcessor);
} catch (e) {
    console.log(e); console.log("Faust Flute cannot be loaded or compiled");
}

