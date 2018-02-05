
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"67044\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"32\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"1388\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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ECAAEA0LooCAgAAAQQBDAABAQDgCIEEAQwAAsEI4AtAEQQBDCtejPDgC7AoLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL1JCAgAABAEEAC80QeyJuYW1lIjoiUmFuZG9tIEZsdXRlIiwidmVyc2lvbiI6IjIuNS4xNyIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiNjcwNDQiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUmFuZG9tIEZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmFuZG9tIEZsdXRlIiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjMiLCJtaW4iOiIxIiwibWF4IjoiNiIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjU5MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiJSJ9XSwiaW5pdCI6Ijg4IiwibWluIjoiNjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL1JhbmRvbV9GbHV0ZS9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTM4OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjA1Iiwic3RlcCI6IjAuMDAwMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SRandomFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SRandomFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SRandomFluteProcessor.parse_items(group.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
            SRandomFluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SRandomFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SRandomFluteProcessor.parse_ui(JSON.parse(getJSONSRandomFlute()).ui, params, SRandomFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSRandomFlute());

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
        
        this.factory = SRandomFluteProcessor.SRandomFlute_instance.exports;
        this.HEAP = SRandomFluteProcessor.SRandomFlute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SRandomFluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SRandomFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SRandomFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SRandomFluteProcessor.parse_ui(this.json_object.ui, this, SRandomFluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SRandomFluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SRandomFluteProcessor.buffer_size, this.ins, this.outs);
        
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

SRandomFluteProcessor.buffer_size = 128;

SRandomFluteProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SRandomFluteProcessor.atob(getBase64CodeSRandomFlute()));
    SRandomFluteProcessor.SRandomFlute_instance = new WebAssembly.Instance(wasm_module, SRandomFluteProcessor.importObject);
    registerProcessor('SRandomFlute', SRandomFluteProcessor);
} catch (e) {
    console.log(e); console.log("Faust SRandomFlute cannot be loaded or compiled");
}

