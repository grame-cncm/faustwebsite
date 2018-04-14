
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBrassMulti() {
	return "{\"name\":\"Multiple Brass\",\"filename\":\"SBrassMulti\",\"version\":\"2.5.32\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"98684\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SBrassMulti\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Multiple Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/Brass_Instrument/ON/OFF\",\"index\":\"52\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_1\",\"index\":\"40\",\"meta\":[{\"acc\":\"1 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_2\",\"index\":\"32992\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/Brass_Instrument/Instrument/Frequencies/Frequency_3\",\"index\":\"65848\",\"meta\":[{\"acc\":\"2 0 -10 0 12\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_1\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_2\",\"index\":\"32988\",\"meta\":[{\"acc\":\"0 0 -10 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/Brass_Instrument/Instrument/Gain/Volume_3\",\"index\":\"65844\",\"meta\":[{\"acc\":\"2 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]}]}]}";
}
function getBase64CodeSBrassMulti() { return "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ABAKC9CAgIAAAEEAQwAAAD84AiBBAEMAALlDOAIoQQBDAAAAADgCNEEAQwAAAD84AtyBAkEAQwAA3EM4AuCBAkEAQwAAAD84ArSCBEEAQ3vUEkQ4AriCBAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvNl4CAAAEAQQALxhd7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyIsImZpbGVuYW1lIjoiU0JyYXNzTXVsdGkiLCJ2ZXJzaW9uIjoiMi41LjMyIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiI5ODY4NCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU0JyYXNzTXVsdGkifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJNdWx0aXBsZSBCcmFzcyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9PTi9PRkYiLCJpbmRleCI6IjUyIiwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZyZXF1ZW5jaWVzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8xIiwiaW5kZXgiOiI0MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzcwIiwibWluIjoiMjgwIiwibWF4IjoiMzgwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8yIiwiaW5kZXgiOiIzMjk5MiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMzgwIiwibWF4IjoiNTUwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kgMyIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jaWVzL0ZyZXF1ZW5jeV8zIiwiaW5kZXgiOiI2NTg0OCIsIm1ldGEiOlt7ImFjYyI6IjIgMCAtMTAgMCAxMiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMiIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzIiLCJpbmRleCI6IjMyOTg4IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZvbHVtZSAzIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvR2Fpbi9Wb2x1bWVfMyIsImluZGV4IjoiNjU4NDQiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMC41Iiwic3RlcCI6IjAuMDEifV19XX1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class SBrassMultiProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBrassMultiProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBrassMultiProcessor.parse_items(group.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
            SBrassMultiProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SBrassMultiProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SBrassMultiProcessor.parse_ui(JSON.parse(getJSONSBrassMulti()).ui, params, SBrassMultiProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBrassMulti());

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
        
        this.SBrassMulti_instance = new WebAssembly.Instance(SBrassMultiProcessor.wasm_module, SBrassMultiProcessor.importObject);
  	   	this.factory = this.SBrassMulti_instance.exports;
        this.HEAP = this.SBrassMulti_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBrassMultiProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBrassMultiProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBrassMultiProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBrassMultiProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBrassMultiProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBrassMultiProcessor.parse_ui(this.json_object.ui, this, SBrassMultiProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SBrassMultiProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SBrassMultiProcessor.buffer_size, this.ins, this.outs);
        
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

SBrassMultiProcessor.buffer_size = 128;

SBrassMultiProcessor.importObject = {
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
    if (SBrassMultiProcessor.wasm_module == undefined) {
        SBrassMultiProcessor.wasm_module = new WebAssembly.Module(SBrassMultiProcessor.atob(getBase64CodeSBrassMulti()));
        registerProcessor('SBrassMulti', SBrassMultiProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust SBrassMulti cannot be loaded or compiled");
}

