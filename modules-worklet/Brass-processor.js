
/*
Code generated with Faust version 2.5.15
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.15\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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ZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkJyYXNzIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9CcmFzc2VzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMzIifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMwMCIsIm1pbiI6IjE3MCIsIm1heCI6IjcwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxdWVuY3kgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1BhcmFtZXRlcnMvMHgwMC9WaWJyYXRvX0ZyZXF1ZW5jeV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzI5NjQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTIifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

