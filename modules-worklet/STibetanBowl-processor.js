
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"24560\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"312\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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lTgCiL8BC5CAgIAAACAAIAEQDCAAEA4gABALC6+AgIAAAEEAQwAAAAA4AixBAEMAANxDOAK4AkEAQwrXozw4AvS+AUEAQwAAXEM4Aoy/AQuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwv9j4CAAAEAQQAL9g97Im5hbWUiOiJUaWJldGFuIEJvd2wiLCJ2ZXJzaW9uIjoiMi41LjQiLCJvcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0NTYwIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IkJhbmRlZCBXYXZlZ3VpZGUgTW9kZWxkIFRpYmV0YW4gQm93bCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaWJldGFuIEJvd2wifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJUaWJldGFuIEJvd2wiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlBsYXkiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9QbGF5IiwiaW5kZXgiOiI0NCIsIm1ldGEiOlt7IjAiOiIifSx7ImFjYyI6IjIgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvRnJlcXVlbmN5IiwiaW5kZXgiOiIzMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjE4MCIsIm1heCI6Ijc4MCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb24iLCJpbmRleCI6IjI0NDM2IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiTm9ubGluZWFyaXR5IGZhY3RvciAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTW9kdWxhdGlvbiBGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uX0ZyZXF1ZW5jeSIsImluZGV4IjoiMjQ0NjAiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIyMCIsIm1pbiI6IjE1MCIsIm1heCI6IjUwMCIsInN0ZXAiOiIwLjEifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.asm2wasm = { // special asm2wasm imports
    "fmod": function(x, y) {
        return x % y;
    },
    "remainder": function(x, y) {
        return x - Math.round(x/y) * y;
    }
}

faust.importObject = { imports: { print: arg => console.log(arg) } }
faust.importObject["global.Math"] = Math;
faust.importObject["asm2wasm"] = faust.asm2wasm;

faust.b64ToUint6 = function (nChr)
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

faust.atob = function (sBase64, nBlocksSize)
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
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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

// WebAssembly instance
faust.STibetanBowl_instance = null;

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
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSTibetanBowl());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.STibetanBowl_instance.exports;
        this.HEAP = faust.STibetanBowl_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        // TODO: send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, 128, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeSTibetanBowl()), faust.importObject)
            .then(dsp_module => {
                  faust.STibetanBowl_instance = dsp_module.instance;
                  registerProcessor('STibetanBowl', STibetanBowlProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust STibetanBowl cannot be loaded or compiled"); });
