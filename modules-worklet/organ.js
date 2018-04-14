
/*
Code generated with Faust version 2.5.32
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONorgan() {
	return "{\"name\":\"organ\",\"filename\":\"organ\",\"version\":\"2.5.32\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"68\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"filename\":\"organ\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"organ\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"organ\",\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/organ/freq\",\"index\":\"16\",\"meta\":[{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"20\",\"max\":\"20000\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/organ/gain\",\"index\":\"56\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/organ/gate\",\"index\":\"52\"},{\"type\":\"hslider\",\"label\":\"volume\",\"address\":\"/organ/volume\",\"index\":\"0\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64Codeorgan() { return "AGFzbQEAAAAB1oCAgAAQYAJ/fwBgBH9/f38AYAJ9fQF9YAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gA39/fQBgAX0BfQKogICAAAMDZW52Bm1lbW9yeQIAAQNlbnYGX2Ztb2RmAAIDZW52BV9zaW5mAA8Dj4CAgAAOAAEDBAUGBwgJCgsMDQ4HsYGAgAALB2NvbXB1dGUAAwxnZXROdW1JbnB1dHMABA1nZXROdW1PdXRwdXRzAAUNZ2V0UGFyYW1WYWx1ZQAGDWdldFNhbXBsZVJhdGUABwRpbml0AAgNaW5zdGFuY2VDbGVhcgAJEWluc3RhbmNlQ29uc3RhbnRzAAoMaW5zdGFuY2VJbml0AAsaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADA1zZXRQYXJhbVZhbHVlAA8Kv4iAgAAOgoCAgAAAC52EgIAAAgJ/Cn1BACEEQwAAAAAhBkMAAAAAIQdDAAAAACEIQwAAAAAhCUMAAAAAIQpDAAAAACELQQAhBUMAAAAAIQxDAAAAACENQwAAAAAhDkMAAAAAIQ8gA0EAaigCACEEIABBAGoqAgAhBiAAQRBqKgIAIQcgAEEMaioCACAHlCEIIABBHGoqAgAgB5QhCSAAQShqKgIAIAeUIQpDbxIDOiAAQTRqKgIAIABBOGoqAgCUlCELQQAhBQNAAkAgCCAAQRhqKgIAkkMAAIA/EAAhDCAAQRRqIAxDAAAAACAMvEGAgID8B3EbOAIAIAkgAEEkaioCAJJDAACAPxAAIQ0gAEEgaiANQwAAAAAgDbxBgICA/AdxGzgCACAKIABBMGoqAgCSQwAAgD8QACEOIABBLGogDkMAAAAAIA68QYCAgPwHcRs4AgAgC0M7338/IABBwABqKgIAlJIhDyAAQTxqIA9DAAAAACAPvEGAgID8B3EbOAIAIAQgBWogBkPbD8lAIABBFGoqAgCUEAFDAAAAP0PbD8lAIABBIGoqAgCUEAGUkkMAAIA+Q9sPyUAgAEEsaioCAJQQAZSSIABBPGoqAgCUlDgCACAAQRhqIABBFGoqAgA4AgAgAEEkaiAAQSBqKgIAOAIAIABBMGogAEEsaioCADgCACAAQcAAaiAAQTxqKgIAOAIAIAVBBGohBSAFQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4uAgIAAACAAQQRqKAIADwuOgICAAAAgACABEAIgACABEAsL1IGAgAABBH9BACEBQQAhAkEAIQNBACEEQQAhAQNAAkAgAEEUIAFBAnRqakMAAAAAOAIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkAgAEEgIAJBAnRqakMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkAgAEEsIANBAnRqakMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQAhBANAAkAgAEE8IARBAnRqakMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLC+uAgIAAACAAQQRqIAE2AgAgAEEIakMAgDtIQwAAgD8gAEEEaigCALKXljgCACAAQQxqQwAAgD8gAEEIaioCAJU4AgAgAEEcakMAAABAIABBCGoqAgCVOAIAIABBKGpDAABAQCAAQQhqKgIAlTgCAAuQgICAAAAgACABEAogABAMIAAQCQu2gICAAAAgAEEAakMAAAA/OAIAIABBEGpDAADcQzgCACAAQTRqQwAAAAA4AgAgAEE4akMAAAA/OAIAC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC9uGgIAAAQBBAAvUBnsibmFtZSI6Im9yZ2FuIiwiZmlsZW5hbWUiOiJvcmdhbiIsInZlcnNpb24iOiIyLjUuMzIiLCJvcHRpb25zIjoid2FzbS1lYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjY4IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siZmlsZW5hbWUiOiJvcmdhbiJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoib3JnYW4ifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJvcmdhbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZnJlcSIsImFkZHJlc3MiOiIvb3JnYW4vZnJlcSIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyMCIsIm1heCI6IjIwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJnYWluIiwiYWRkcmVzcyI6Ii9vcmdhbi9nYWluIiwiaW5kZXgiOiI1NiIsImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvb3JnYW4vZ2F0ZSIsImluZGV4IjoiNTIifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2b2x1bWUiLCJhZGRyZXNzIjoiL29yZ2FuL3ZvbHVtZSIsImluZGV4IjoiMCIsImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class organPolyNode extends AudioWorkletNode {
    
    constructor(context, options) 
    {
        var json_object = JSON.parse(getJSONorgan());
      
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";
        
        super(context, 'organPoly', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
            }
        }
        
        this.json_object = json_object;
        
        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }
        
        this.output_handler = null;
        
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
    
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        if (this.effect_json_object) {
            this.parse_ui(this.effect_json_object.ui, this);
        }
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    
    // Public API
  
    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        var res = "";
        res = res.concat("{\"name\":\""); res = res.concat(this.json_object.name); res = res.concat("\",");
        res = res.concat("\"version\":\""); res = res.concat(this.json_object.version); res = res.concat("\",");
        res = res.concat("\"options\":\""); res = res.concat(this.json_object.options); res = res.concat("\",");
        res = res.concat("\"inputs\":\""); res = res.concat(this.json_object.inputs); res = res.concat("\",");
        res = res.concat("\"outputs\":\""); res = res.concat(this.json_object.outputs); res = res.concat("\",");
        res = res.concat("\"meta\":"); res = res.concat(JSON.stringify(this.json_object.meta)); res = res.concat(",");

        if (this.effect_json_object) {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Sequencer\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Instrument\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("{\"type\":\"vgroup\",\"label\":\"Effect\",\"items\":");
            res = res.concat(JSON.stringify(this.effect_json_object.ui));
            res = res.concat("}");
            res = res.concat("]}]}");
            return res;
        } else {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Polyphonic\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Voices\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("]}]}");
            return res;
        }
    }
    
    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
     
    /**
     * Instantiates a new polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOn(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOn", data: [channel, pitch, velocity] });
    }
    
    /**
     * De-instantiates a polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOff(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOff", data: [channel, pitch, velocity] });
    }

    /**
     * Gently terminates all the active voices.
     */
    allNotesOff()
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, 123, 0] });
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
    	this.port.postMessage({ type:"midi", data:data });
    }
    
}

// Factory class

class organ {
    
    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseUrl - the baseUrl of the plugin folder
     */
    constructor(context, baseUrl)
    {
    	// Resume audio context each time...
    	context.resume();
    	
        this.context = context;
        this.baseUrl = baseUrl;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    load()
    {
    	return new Promise((resolve, reject) => {
        		this.context.audioWorklet.addModule(this.baseUrl + "organ-processor.js").then(() => {
        		this.node = new organPolyNode(this.context, {});
        		return (this.node);
        	}).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }
    
    loadGui() 
    {
        return new Promise((resolve, reject) => {
            try {
            	var link = document.createElement('link');
            	link.rel = 'import';
            	link.id = 'urlPlugin';
            	link.href = this.baseUrl + "main.html";
            	document.head.appendChild(link);
            	var element = document.createElement("faust-organ");
            	element._plug = this.node;
            	resolve(element);
        	} catch (e) {
            	console.log(e);
            	reject(e);
        	}
    	});
    };
}
