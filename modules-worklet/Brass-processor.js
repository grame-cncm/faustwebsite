
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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bG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzMiJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiODgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk2NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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

