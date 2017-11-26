
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"24560\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"100\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"368\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"28\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"52\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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IAAgAUgbDwuMgICAAAAgACABaiACOAIACwv4j4CAAAEAQQAL8Q97Im5hbWUiOiJUaWJldGFuIEJvd2wiLCJ2ZXJzaW9uIjoiMi41LjciLCJvcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0NTYwIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IkJhbmRlZCBXYXZlZ3VpZGUgTW9kZWxkIFRpYmV0YW4gQm93bCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaWJldGFuIEJvd2wifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJUaWJldGFuIEJvd2wiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlBsYXkiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9QbGF5IiwiaW5kZXgiOiIxMDAiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMzY4IiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24iLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uIiwiaW5kZXgiOiIyOCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6Ik5vbmxpbmVhcml0eSBmYWN0b3IgKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24gRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbl9GcmVxdWVuY3kiLCJpbmRleCI6IjUyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIxNTAiLCJtYXgiOiI1MDAiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

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

faust.importObject = {
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
