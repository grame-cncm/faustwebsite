
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"24560\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"2104\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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DJU4Aty+AUEAQ9sPyUBBACoCDJU4Aoi/AQuQgICAAAAgACABEAwgABAOIAAQCwuvgICAAABBAEMAAAAAOAIsQQBDAADcQzgCuBBBAEMK16M8OAL0vgFBAEMAAFxDOAKMvwELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL/o+AgAABAEEAC/cPeyJuYW1lIjoiVGliZXRhbiBCb3dsIiwidmVyc2lvbiI6IjIuNS45Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiIyNDU2MCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGliZXRhbiBCb3dsIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiVGliZXRhbiBCb3dsIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvUGxheSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMjEwNCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbiIsImluZGV4IjoiMjQ0MzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJOb25saW5lYXJpdHkgZmFjdG9yICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb25fRnJlcXVlbmN5IiwiaW5kZXgiOiIyNDQ2MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjIwIiwibWluIjoiMTUwIiwibWF4IjoiNTAwIiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

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
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
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

