
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPulsaxophone() {
	return "{\"name\":\"Solo Pulsaxophone\",\"filename\":\"SPulsaxophone\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"17232\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SPulsaxophone\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Solo Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"PULSAXO\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/PULSAXO/Instrument/Frequency\",\"index\":\"708\",\"meta\":[{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/PULSAXO/Parameters/Vibrato_Frequency\",\"index\":\"12\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/PULSAXO/Pulse/Speed_(Granulator)\",\"index\":\"100\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/PULSAXO/Pulse/Probability_(Granulator)\",\"index\":\"72\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}]}";
}
function getBase64CodeSPulsaxophone() { return "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Z2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJTUHVsc2F4b3Bob25lIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiU29sbyBQdWxzYXhvcGhvbmUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJQVUxTQVhPIiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUFVMU0FYTy9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiNzA4IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xMiAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIxMTAiLCJtaW4iOiI4MCIsIm1heCI6Ijg4MCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9QVUxTQVhPL1BhcmFtZXRlcnMvVmlicmF0b19GcmVxdWVuY3kiLCJpbmRleCI6IjEyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYiLCJtaW4iOiIxIiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIxMDAiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuMDAxIiwibWF4IjoiNyIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUHVsc2UvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNzUiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SPulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPulsaxophoneProcessor.parse_items(group.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SPulsaxophoneProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SPulsaxophoneProcessor.parse_ui(JSON.parse(getJSONSPulsaxophone()).ui, params, SPulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSPulsaxophone());

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
        
        this.SPulsaxophone_instance = new WebAssembly.Instance(SPulsaxophoneProcessor.wasm_module, SPulsaxophoneProcessor.importObject);
  	   	this.factory = this.SPulsaxophone_instance.exports;
        this.HEAP = this.SPulsaxophone_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SPulsaxophoneProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SPulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SPulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SPulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SPulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SPulsaxophoneProcessor.parse_ui(this.json_object.ui, this, SPulsaxophoneProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SPulsaxophoneProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SPulsaxophoneProcessor.buffer_size, this.ins, this.outs);
        
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

SPulsaxophoneProcessor.buffer_size = 128;

SPulsaxophoneProcessor.importObject = {
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
    if (SPulsaxophoneProcessor.wasm_module == undefined) {
        SPulsaxophoneProcessor.wasm_module = new WebAssembly.Module(SPulsaxophoneProcessor.atob(getBase64CodeSPulsaxophone()));
        registerProcessor('SPulsaxophone', SPulsaxophoneProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SPulsaxophone cannot be loaded or compiled");
}

