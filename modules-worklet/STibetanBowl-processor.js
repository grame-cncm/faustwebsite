
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24568\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"312\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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KgIMlDgC2L4BQQBDV14PQkEAKgIMlTgC3L4BQQBD2w/JQEEAKgIMlTgCiL8BC5CAgIAAACAAIAEQDCAAEA4gABALC6+AgIAAAEEAQwAAAAA4AixBAEMAANxDOAK4AkEAQwrXozw4AvS+AUEAQwAAXEM4Aoy/AQuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuHkICAAAEAQQALgBB7Im5hbWUiOiJUaWJldGFuIEJvd2wiLCJ2ZXJzaW9uIjoiMi41LjE5Iiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiIyNDU2OCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGliZXRhbiBCb3dsIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiVGliZXRhbiBCb3dsIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvUGxheSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMzEyIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24iLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uIiwiaW5kZXgiOiIyNDQzNiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6Ik5vbmxpbmVhcml0eSBmYWN0b3IgKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6IjI0NDYwIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIxNTAiLCJtYXgiOiI1MDAiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= STibetanBowlProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTibetanBowl());

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
        
        this.factory = STibetanBowlProcessor.STibetanBowl_instance.exports;
        this.HEAP = STibetanBowlProcessor.STibetanBowl_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STibetanBowlProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, STibetanBowlProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, STibetanBowlProcessor.buffer_size, this.ins, this.outs);
        
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

STibetanBowlProcessor.buffer_size = 128;

STibetanBowlProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(STibetanBowlProcessor.atob(getBase64CodeSTibetanBowl()));
    STibetanBowlProcessor.STibetanBowl_instance = new WebAssembly.Instance(wasm_module, STibetanBowlProcessor.importObject);
    registerProcessor('STibetanBowl', STibetanBowlProcessor);
} catch (e) {
    console.log(e); console.log("Faust STibetanBowl cannot be loaded or compiled");
}

