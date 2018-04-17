
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPulsaxophone() {
	return "{\"name\":\"Solo Pulsaxophone\",\"filename\":\"SPulsaxophone\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"17232\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SPulsaxophone\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Solo Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"PULSAXO\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/PULSAXO/Instrument/Frequency\",\"index\":\"708\",\"meta\":[{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/PULSAXO/Parameters/Vibrato_Frequency\",\"index\":\"672\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/PULSAXO/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/PULSAXO/Pulse/Probability_(Granulator)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}]}";
}
function getBase64CodeSPulsaxophone() { return "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cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlNQdWxzYXhvcGhvbmUifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJTb2xvIFB1bHNheG9waG9uZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlBVTFNBWE8iLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9QVUxTQVhPL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiI3MDgiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjExMCIsIm1pbiI6IjgwIiwibWF4IjoiODgwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUGFyYW1ldGVycy9WaWJyYXRvX0ZyZXF1ZW5jeSIsImluZGV4IjoiNjcyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjYiLCJtaW4iOiIxIiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlB1bHNlIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL1BVTFNBWE8vUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiI3Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUFVMU0FYTy9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI3NSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19XX0w"; }

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
        if (this.numIn > 0 && ((input === undefined) || (input[0][0] === undefined))) {
            console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0][0] === undefined))) {
            console.log("Process output error");
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

