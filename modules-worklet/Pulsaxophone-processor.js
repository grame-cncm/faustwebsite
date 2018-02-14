
/*
Code generated with Faust version 2.5.22
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONPulsaxophone() {
	return "{\"name\":\"Pulsaxophone\",\"version\":\"2.5.22\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"861572\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Pulsaxo\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Pulsaxo/Frequency\",\"index\":\"720\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Speed_(Granulator)\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Probability_(Granulator)\",\"index\":\"604\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/Pulsaxo/Vibrato_Frequency\",\"index\":\"684\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Pulsaxo/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"33656\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.1\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodePulsaxophone() { return "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OiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUHVsc2F4b3Bob25lIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlB1bHNheG8iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9GcmVxdWVuY3kiLCJpbmRleCI6IjcyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTIgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTEwIiwibWluIjoiODAiLCJtYXgiOiI4ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUHVsc2F4by9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjciLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9QdWxzYXhvL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiNjA0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI3NSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9WaWJyYXRvX0ZyZXF1ZW5jeSIsImluZGV4IjoiNjg0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYiLCJtaW4iOiIxIiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1B1bHNheG8vUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMzNjU2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjcyIiwibWluIjoiMC4xIiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class PulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            PulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            PulsaxophoneProcessor.parse_items(group.items, obj, callback);
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
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= PulsaxophoneProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        PulsaxophoneProcessor.parse_ui(JSON.parse(getJSONPulsaxophone()).ui, params, PulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONPulsaxophone());

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
        
        this.factory = PulsaxophoneProcessor.Pulsaxophone_instance.exports;
        this.HEAP = PulsaxophoneProcessor.Pulsaxophone_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * PulsaxophoneProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((PulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + PulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((PulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + PulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            PulsaxophoneProcessor.parse_ui(this.json_object.ui, this, PulsaxophoneProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, PulsaxophoneProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, PulsaxophoneProcessor.buffer_size, this.ins, this.outs);
        
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

PulsaxophoneProcessor.buffer_size = 128;

PulsaxophoneProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(PulsaxophoneProcessor.atob(getBase64CodePulsaxophone()));
    PulsaxophoneProcessor.Pulsaxophone_instance = new WebAssembly.Instance(wasm_module, PulsaxophoneProcessor.importObject);
    registerProcessor('Pulsaxophone', PulsaxophoneProcessor);
} catch (e) {
    console.log(e); console.log("Faust Pulsaxophone cannot be loaded or compiled");
}

