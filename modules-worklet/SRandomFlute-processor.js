
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSRandomFlute() {
	return "{\"name\":\"Random Flute\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"67044\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Random Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Random Flute\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Random_Flute/Pulse/Speed_(Granulator)\",\"index\":\"32\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"6\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Random_Flute/Pulse/Probability_(Granulator)\",\"index\":\"592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"60\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Random_Flute/Parameters/Breath_Noise\",\"index\":\"1284\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.05\",\"step\":\"0.0001\"}]}]}]}";
}
function getBase64CodeSRandomFlute() { return "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QwAAQEA4AiBBAEMAALBCOALQBEEAQwrXozw4AoQKC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC9SQgIAAAQBBAAvNEHsibmFtZSI6IlJhbmRvbSBGbHV0ZSIsInZlcnNpb24iOiIyLjUuMTkiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjY3MDQ0IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiRVIifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlJhbmRvbSBGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJhbmRvbSBGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQdWxzZSIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzIiwibWluIjoiMSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUHVsc2UvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiI1OTIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6IjYwIiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9SYW5kb21fRmx1dGUvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEyODQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4wNSIsInN0ZXAiOiIwLjAwMDEifV19XX1dfTA="; }

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

