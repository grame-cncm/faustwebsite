
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860888\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32972\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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QU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzMiJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiODgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk3MiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= BrassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBrass());

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
        
        this.factory = BrassProcessor.Brass_instance.exports;
        this.HEAP = BrassProcessor.Brass_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BrassProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, BrassProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, BrassProcessor.buffer_size, this.ins, this.outs);
        
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

BrassProcessor.buffer_size = 128;

BrassProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(BrassProcessor.atob(getBase64CodeBrass()));
    BrassProcessor.Brass_instance = new WebAssembly.Instance(wasm_module, BrassProcessor.importObject);
    registerProcessor('Brass', BrassProcessor);
} catch (e) {
    console.log(e); console.log("Faust Brass cannot be loaded or compiled");
}

