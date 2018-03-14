
/*
Code generated with Faust version 2.5.24
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONPulsaxophone() {
	return "{\"name\":\"Pulsaxophone\",\"filename\":\"Pulsaxophone\",\"version\":\"2.5.24\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"861572\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Pulsaxophone\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Pulsaxo\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Pulsaxo/Frequency\",\"index\":\"768\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Speed_(Granulator)\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Probability_(Granulator)\",\"index\":\"604\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/Pulsaxo/Vibrato_Frequency\",\"index\":\"684\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Pulsaxo/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"33656\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.1\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodePulsaxophone() { return "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LXNjYWwgLWZ0eiAyIiwic2l6ZSI6Ijg2MTU3MiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiUHVsc2F4b3Bob25lIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUHVsc2F4b3Bob25lIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlB1bHNheG8iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9GcmVxdWVuY3kiLCJpbmRleCI6Ijc2OCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTIgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTEwIiwibWluIjoiODAiLCJtYXgiOiI4ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUHVsc2F4by9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjciLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9QdWxzYXhvL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiNjA0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI3NSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9WaWJyYXRvX0ZyZXF1ZW5jeSIsImluZGV4IjoiNjg0IiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYiLCJtaW4iOiIxIiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL1B1bHNheG8vUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMzNjU2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjcyIiwibWluIjoiMC4xIiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

