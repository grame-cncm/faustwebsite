
/*
Code generated with Faust version 2.5.33
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.5.33\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877264\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131280\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131300\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164072\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBDbGFyaW5ldCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkNsYXJpbmV0In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9Xb29kd2luZHMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ0xBUklORVQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNjAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ0xBUklORVQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTI4MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTQgMCAxMiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxMTAiLCJtYXgiOiIxMzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtNSAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjgiLCJtaW4iOiIwLjY1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMjA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMTIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0luc3RydW1lbnRfU3RpZmZuZXNzIiwiaW5kZXgiOiIxMzEzMDAiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjE2NDA3MiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4xMzciLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjQ1IiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class ClarinetProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ClarinetProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ClarinetProcessor.parse_items(group.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= ClarinetProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        ClarinetProcessor.parse_ui(JSON.parse(getJSONClarinet()).ui, params, ClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONClarinet());

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
        
        this.Clarinet_instance = new WebAssembly.Instance(ClarinetProcessor.wasm_module, ClarinetProcessor.importObject);
  	   	this.factory = this.Clarinet_instance.exports;
        this.HEAP = this.Clarinet_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ClarinetProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ClarinetProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ClarinetProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ClarinetProcessor.parse_ui(this.json_object.ui, this, ClarinetProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, ClarinetProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, ClarinetProcessor.buffer_size, this.ins, this.outs);
        
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

ClarinetProcessor.buffer_size = 128;

ClarinetProcessor.importObject = {
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
    if (ClarinetProcessor.wasm_module == undefined) {
        ClarinetProcessor.wasm_module = new WebAssembly.Module(ClarinetProcessor.atob(getBase64CodeClarinet()));
        registerProcessor('Clarinet', ClarinetProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Clarinet cannot be loaded or compiled");
}

