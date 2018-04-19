
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"SClarinet\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"32936\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SClarinet\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/CLARINET/ON/OFF\",\"index\":\"4\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"140\",\"meta\":[{\"acc\":\"1 1 -14 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.25\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"64\",\"meta\":[{\"acc\":\"0 1 -10 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"160\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSClarinet() { return "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IHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0NsYXJpbmV0In0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9Xb29kd2luZHMuaHRtbCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDTEFSSU5FVCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9PTi9PRkYiLCJpbmRleCI6IjQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ0xBUklORVQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjE0MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTQgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxMTAiLCJtYXgiOiIxMzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvUHJlc3N1cmUiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAuMjUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiI2NCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTYwIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SClarinetProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SClarinetProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SClarinetProcessor.parse_items(group.items, obj, callback);
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
            SClarinetProcessor.parse_items(item.items, obj, callback);
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
            SClarinetProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SClarinetProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SClarinetProcessor.parse_ui(JSON.parse(getJSONSClarinet()).ui, params, SClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSClarinet());

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
        
        this.SClarinet_instance = new WebAssembly.Instance(SClarinetProcessor.wasm_module, SClarinetProcessor.importObject);
  	   	this.factory = this.SClarinet_instance.exports;
        this.HEAP = this.SClarinet_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SClarinetProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SClarinetProcessor.parse_ui(this.json_object.ui, this, SClarinetProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SClarinetProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SClarinetProcessor.buffer_size, this.ins, this.outs);
        
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

SClarinetProcessor.buffer_size = 128;

SClarinetProcessor.importObject = {
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
    if (SClarinetProcessor.wasm_module == undefined) {
        SClarinetProcessor.wasm_module = new WebAssembly.Module(SClarinetProcessor.atob(getBase64CodeSClarinet()));
        registerProcessor('SClarinet', SClarinetProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SClarinet cannot be loaded or compiled");
}

