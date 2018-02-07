
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860888\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32972\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "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IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvQnJhc3Nlcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCcmFzcyBJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImNoZWNrYm94IiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjMyIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMDAiLCJtaW4iOiIxNzAiLCJtYXgiOiI3MDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9QYXJhbWV0ZXJzLzB4MDAvVmlicmF0b19GcmVxdWVuY3lfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI1IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyOTcyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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

