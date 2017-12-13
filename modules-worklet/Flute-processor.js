
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131292\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131308\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK9gICAAAUDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDZW52BV90YW5mABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAJCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACqr+gIAADoKAgIAAAAuzzoCAAAIRf8MBfUEAIQRBACEFQwAAAAAhFUMAAAAAIRZDAAAAACEXQwAAAAAhGEMAAAAAIRlDAAAAACEaQwAAAAAhG0MAAAAAIRxDAAAAACEdQwAAAAAhHkMAAAAAIR9DAAAAACEgQQAhBkEAIQdBACEIQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkEAIQlDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSkMAAAAAIUtDAAAAACFMQwAAAAAhTUMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFDAAAAACFSQwAAAAAhU0MAAAAAIVRDAAAAACFVQwAAAAAhVkMAAAAAIVdDAAAAACFYQwAAAAAhWUMAAAAAIVpDAAAAACFbQwAAAAAhXEMAAAAAIV1DAAAAACFeQwAAAAAhX0MAAAAAIWBDAAAAACFhQwAAAAAhYkMAAAAAIWNDAAAAACFkQwAAAAAhZUMAAAAAIWZDAAAAACFnQwAAAAAhaEMAAAAAIWlBACEKQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQwAAAAAhcEMAAAAAIXFDAAAAACFyQwAAAAAhc0MAAAAAIXRDAAAAACF1QwAAAAAhdkMAAAAAIXdDAAAAACF4QQAhC0MAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxBACEMQwAAAAAhfUMAAAAAIX5DAAAAACF/QQAhDUMAAAAAIYABQQAhDkEAIQ9BACEQQwAAAAAhgQFDAAAAACGCAUEAIRFBACESQQAhE0MAAAAAIYMBQQAhFEMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBQwAAAAAhlwFDAAAAACGYAUMAAAAAIZkBQwAAAAAhmgFDAAAAACGbAUMAAAAAIZwBQwAAAAAhnQFDAAAAACGeAUMAAAAAIZ8BQwAAAAAhoAFDAAAAACGhAUMAAAAAIaIBQwAAAAAhowFDAAAAACGkAUMAAAAAIaUBQwAAAAAhpgFDAAAAACGnAUMAAAAAIagBQwAAAAAhqQFDAAAAACGqAUMAAAAAIasBQwAAAAAhrAFDAAAAACGtAUMAAAAAIa4BQwAAAAAhrwFDAAAAACGwAUMAAAAAIbEBQwAAAAAhsgFDAAAAACGzAUMAAAAAIbQBQwAAAAAhtQFDAAAAACG2AUMAAAAAIbcBQwAAAAAhuAFDAAAAACG5AUMAAAAAIboBQwAAAAAhuwFDAAAAACG8AUMAAAAAIb0BQwAAAAAhvgFDAAAAACG/AUMAAAAAIcABQwAAAAAhwQFDAAAAACHCAUMAAAAAIcMBQwAAAAAhxAFDAAAAACHFAUMAAAAAIcYBQwAAAAAhxwFDAAAAACHIAUMAAAAAIckBQwAAAAAhygFDAAAAACHLAUMAAAAAIcwBQwAAAAAhzQFDAAAAACHOAUMAAAAAIc8BQwAAAAAh0AFDAAAAACHRAUMAAAAAIdIBQwAAAAAh0wFDAAAAACHUAUMAAAAAIdUBQwAAAAAh1gFDAAAAACHXASADQQBqKAIAIQQgA0EEaigCACEFQ83MTD1DmpnZP0EAKgIglpchFUEAKgIcIBWVEAEhFiAWQwAAAEAQAiEXQwAAgD9BACoCECAXlJMhGEMAAIA/IBeTIRkgGCAZlSEaQwAAAAAgGEMAAABAEAIgGUMAAABAEAKVQwAAgL+Sl5EhGyAaIBuTIRwgFiAbQwAAgD8gGpOSlCEdQQAqAiQgFZUQASAWlUMAAIC/kiEeQ28SgzpBACoC1IAIlCEfQQAqAuCACCEgICBDAAAAAF4hBiAGQQBKIQcgIEMAAAAAW0EASiEIQQAqAviACCAglCEhQ28SgzpBACoCmIEIlCEiQ28SgzpBACoCpIEIlCEjQ2ZmZj8gIJQhJEEAKgLEgQggJEMAAIC/kpQhJUNvEoM6QQAqAtyBCJQhJkEAKgLogQhBACoC7IEIlCEnICcQAyEoICcQACEpQwAAAAAgKJMhKiAgQwAAAABfIQlBACoC/MINIBWVEAEhKyArQwAAAEAQAiEsQwAAgD9BACoCECAslJMhLUMAAIA/ICyTIS4gLSAulSEvQwAAAAAgLUMAAABAEAIgLkMAAABAEAKVQwAAgL+Sl5EhMCAvIDCTITEgKyAwQwAAgD8gL5OSlCEyQQAqAoDDDSAVlRABICuVQwAAgL+SITNBACoCsMMWIBWVEAEhNCA0QwAAAEAQAiE1QwAAgD9BACoCECA1lJMhNkMAAIA/IDWTITcgNiA3lSE4QwAAAAAgNkMAAABAEAIgN0MAAABAEAKVQwAAgL+Sl5EhOSA4IDmTITogNCA5QwAAgD8gOJOSlCE7QQAqArTDFiAVlRABIDSVQwAAgL+SITxBACoC5MMbIBWVEAEhPSA9QwAAAEAQAiE+QwAAgD9BACoCECA+lJMhP0MAAIA/ID6TIUAgPyBAlSFBQwAAAAAgP0MAAABAEAIgQEMAAABAEAKVQwAAgL+Sl5EhQiBBIEKTIUMgPSBCQwAAgD8gQZOSlCFEQQAqAujDGyAVlRABID2VQwAAgL+SIUVBACoCmMQkIBWVEAEhRiBGQwAAAEAQAiFHQwAAgD9BACoCECBHlJMhSEMAAIA/IEeTIUkgSCBJlSFKQwAAAAAgSEMAAABAEAIgSUMAAABAEAKVQwAAgL+Sl5EhSyBKIEuTIUwgRiBLQwAAgD8gSpOSlCFNQQAqApzEJCAVlRABIEaVQwAAgL+SIU5BACoCzIQpIBWVEAEhTyBPQwAAAEAQAiFQQwAAgD9BACoCECBQlJMhUUMAAIA/IFCTIVIgUSBSlSFTQwAAAAAgUUMAAABAEAIgUkMAAABAEAKVQwAAgL+Sl5EhVCBTIFSTIVUgTyBUQwAAgD8gU5OSlCFWQQAqAtCEKSAVlRABIE+VQwAAgL+SIVdBACoCgIUuIBWVEAEhWCBYQwAAAEAQAiFZQwAAgD9BACoCECBZlJMhWkMAAIA/IFmTIVsgWiBblSFcQwAAAAAgWkMAAABAEAIgW0MAAABAEAKVQwAAgL+Sl5EhXSBcIF2TIV4gWCBdQwAAgD8gXJOSlCFfQQAqAoSFLiAVlRABIFiVQwAAgL+SIWBBACoCtIUzIBWVEAEhYSBhQwAAAEAQAiFiQwAAgD9BACoCECBilJMhY0MAAIA/IGKTIWQgYyBklSFlQwAAAAAgY0MAAABAEAIgZEMAAABAEAKVQwAAgL+Sl5EhZiBlIGaTIWcgYSBmQwAAgD8gZZOSlCFoQQAqAriFMyAVlRABIGGVQwAAgL+SIWlBACEKA0ACQEEAQQE2AgBBACoCMEEAKgI8lEEAKgI0QQAqArjGN0EAKgK8xjeSlJIhakEAIGpDAAAAACBqvEGAgID8B3EbOAI4IBxBACoCRJQgHUEAKgK4xjcgHkEAKgI4lJKUkiFrQQAga0MAAAAAIGu8QYCAgPwHcRs4AkBBzABBACgCSEH//wFxQQJ0akPzBLU+QQAqAkCUQwjlPB6SOAIAIB9Dd75/P0EAKgLcgAiUkiFsQQAgbEMAAAAAIGy8QYCAgPwHcRs4AtiACEPNzEw9QwAAgD9BACoC2IAIlpchbUMAAAAAQQAqAuSACEEAKgLsgAhDAACAP5KWIAcbIW5BACBuQwAAAAAgbrxBgICA/AdxGzgC6IAIQwAAAABBACoC5IAIQQAqAvSACEMAAIA/kpYgCBshb0EAIG9DAAAAACBvvEGAgID8B3EbOALwgAggBrJDAAAAACAhQQAqAvCACJQgIEEAKgLwgAhBACoC5IAIXRtBACoC8IAIQwAAAABdG5RBACoCgIEIIAYbIXBBACBwQwAAAAAgcLxBgICA/AdxGzgC/IAIQQAqAvyACEEAKgL8gAhBACoC+IAIQQAqAuiACEMAAAAAQQAqAvyACJOUlJJDAAAAAEEAKgLogAhBACoC5IAIXRtBACoC6IAIQwAAAABdGyFxICJDd75/P0EAKgKggQiUkiFyQQAgckMAAAAAIHK8QYCAgPwHcRs4ApyBCEEAKgKUgQhBACoCnIEIlSFzIHNDAAAAwJIhdCB0jiF1ICNDd75/P0EAKgKsgQiUkiF2QQAgdkMAAAAAIHa8QYCAgPwHcRs4AqiBCEMAAAAAQQAqApSBCEEAKgK0gQhDAACAP5KWIAcbIXdBACB3QwAAAAAgd7xBgICA/AdxGzgCsIEIQwAAAABBACoCuIEIQQAqAsCBCEMAAIA/kpYgCBsheEEAIHhDAAAAACB4vEGAgID8B3EbOAK8gQhBACoCvIEIQQAqAuSACF0hCyAGskMAAAAAQQAqAviACEEAKgK8gQiUQwAAgD8gCxtBACoCvIEIQwAAAABdGyAlQQAqAryBCEEAKgLkgAiTlEMAAIA/kiAkQQAqAryBCEEAKgK4gQhdGyALG5RBACoCzIEIIAYbIXlBACB5QwAAAAAgebxBgICA/AdxGzgCyIEIQQBB7ZyZjgRBACgC2IEIbEG54ABqNgLUgQggJkN3vn8/QQAqAuSBCJSSIXpBACB6QwAAAAAgerxBgICA/AdxGzgC4IEIIChBACoC/IEIlCApQQAqAvSBCJSSIXtBACB7QwAAAAAge7xBgICA/AdxGzgC8IEIIClBACoC/IEIlCAqQQAqAvSBCJSSQQFBACgCBGuykiF8QQAgfEMAAAAAIHy8QYCAgPwHcRs4AviBCEEAIAZBACgChIIIQQAqApiCCEMAAIA/YHJxNgKAgghBACAGQQAoAoyCCEEBamw2AoiCCCAJQQAqApiCCEMAAAAAXnEhDEEAKgLQgQhBACgChIIIQQBGIAZxQQAqApiCCEMAAIA/XXFBACgCjIIIskEAKgLkgAhecUEBQQAoAoyCCLJBACoC5IAIXWtsspRBACoCmIIIQwAAgD9BACoCkIIIIAyylJOUkiAMQQBGQQAqApiCCEO9N4Y1YHKylCF9QQAgfUMAAAAAIH28QYCAgPwHcRs4ApSCCEEAKgIMQQAqApyBCJUhfiB+QwAAAMCSIX8gf6ghDSB/jiGAASANQQFqIQ4gDUEAQQAgDUgbIQ8gDkEAQQAgDkgbIRBDzczMPkGsggpBACgCSEGBICAPQYEgIA9IG0EBamtB/z9xQQJ0aioCACCAAUMAAEBAIH6TkpQgfkMAAADAIIABk5JBrIIKQQAoAkhBgSAgEEGBICAQSBtBAWprQf8/cUECdGoqAgCUkpQhgQFDzcxMPkOkcH0/QQAqAqiBCJaXQQAqAsiBCEEAKgLIgQhBACoC0IEIQQAqArCBCEMAAAAAQQAqAsiBCJOUlJJDAAAAAEEAKgKwgQhBACoClIEIXRtBACoCsIEIQwAAAABdG5RDzcwMMEEAKALUgQiyQwrXIzxDzcxMPkEAKgLggQiWl5SUQ83MjD+SlEPNzEw9QQAqAvCBCEEAKgKUggiUlJIggQGSIYIBQZyCCEEAKAJIQf8/cUECdGogggE4AgAgdKghESARQQFqIRIgEkEAQQAgEkgbIRMgc0MAAADAIHWTkkGcgghBACgCSEGBICATQYEgIBNIG2tB/z9xQQJ0aioCAJQhgwEgEUEAQQAgEUgbIRRBnIIIQQAoAkhBgSAgFEGBICAUSBtrQf8/cUECdGoqAgAgdUMAAEBAIHOTkpQhhAEggwEggQEghAGSkiCEASCDAZJDAABAQBACkyGFAUEAIIUBOAKcggpBACoCjIEIQQAqAqiCCpRBACoCkIEIIIUBQQAqAqCCCpKUkiGGAUEAIIYBQwAAAAAghgG8QYCAgPwHcRs4AqSCCkEAKgKkggohhwFBrIIKQQAoAkhB/z9xQQJ0aiCHAUMAAAAAIIcBvEGAgID8B3EbOAIAQ3e+fz9BACoCsIIMlCGIAUEAIIgBQwAAAAAgiAG8QYCAgPwHcRs4AqyCDEPbD0lAQayCCkEAKAJIQQBrQf8/cUECdGoqAgBBACoCrIIMlCBxlJQhiQEgiQEQAyGKAUMAAAAAIIoBkyGLASCJARAAIYwBQQAqAuCCDCCLAZRBrIIKQQAoAkhBAGtB/z9xQQJ0aioCACCMAZSSIY0BIIsBQQAqAtiCDJQgjAEgjQGUkiGOASCLAUEAKgLQggyUIIwBII4BlJIhjwEgiwFBACoCyIIMlCCMASCPAZSSIZABIIsBQQAqAsCCDJQgjAEgkAGUkiGRASCLAUEAKgK4ggyUIIwBIJEBlJIhkgFBACCSAUMAAAAAIJIBvEGAgID8B3EbOAK0ggwgigEgkQGUIIwBQQAqAriCDJSSIZMBQQAgkwFDAAAAACCTAbxBgICA/AdxGzgCvIIMIIoBIJABlCCMAUEAKgLAggyUkiGUAUEAIJQBQwAAAAAglAG8QYCAgPwHcRs4AsSCDCCKASCPAZQgjAFBACoCyIIMlJIhlQFBACCVAUMAAAAAIJUBvEGAgID8B3EbOALMggwgigEgjgGUIIwBQQAqAtCCDJSSIZYBQQAglgFDAAAAACCWAbxBgICA/AdxGzgC1IIMIIoBII0BlCCMAUEAKgLYggyUkiGXAUEAIJcBQwAAAAAglwG8QYCAgPwHcRs4AtyCDEGsggpBACgCSEEAa0H/P3FBAnRqKgIAQwAAgD9BACoCrIIMk5RBACoCrIIMQayCCkEAKAJIQQBrQf8/cUECdGoqAgAgigGUQQAqAuCCDCCMAZSSlJIhmAFB5IIMQQAoAkhB/x9xQQJ0aiBtIHGUIJgBlDgCAEOamRk+QeSCDEEAKAJIQQAoAuSCDWtB/x9xQQJ0aioCAJQhmQFDmpkZP0EAKgLwwg2UQcwAQQAoAkhBACgC0IAIa0H//wFxQQJ0aioCAJIgmQGTIZoBQeiCDUEAKAJIQf8PcUECdGogmgE4AgBB6IINQQAoAkhBACgC6MINa0H/D3FBAnRqKgIAIZsBQQAgmwFDAAAAACCbAbxBgICA/AdxGzgC7MINQwAAAABDmpkZPyCaAZSTIZwBIJwBQwAAAAAgnAG8QYCAgPwHcRshnQFBACoCMEEAKgKIww2UQQAqAjRBACoCiMY3QQAqAozGN5KUkiGeAUEAIJ4BQwAAAAAgngG8QYCAgPwHcRs4AoTDDSAxQQAqApDDDZQgMkEAKgKIxjcgM0EAKgKEww2UkpSSIZ8BQQAgnwFDAAAAACCfAbxBgICA/AdxGzgCjMMNQZTDDUEAKAJIQf//AXFBAnRqQ/MEtT5BACoCjMMNlEMI5TwekjgCAEOamRk/QQAqAqTDFpRBlMMNQQAoAkhBACgCmMMVa0H//wFxQQJ0aioCAJIgmQGTIaABQZzDFUEAKAJIQf8fcUECdGogoAE4AgBBnMMVQQAoAkhBACgCnMMWa0H/H3FBAnRqKgIAIaEBQQAgoQFDAAAAACChAbxBgICA/AdxGzgCoMMWQwAAAABDmpkZPyCgAZSTIaIBIKIBQwAAAAAgogG8QYCAgPwHcRshowFBACoCMEEAKgK8wxaUQQAqAjRBACoCoMY3QQAqAqTGN5KUkiGkAUEAIKQBQwAAAAAgpAG8QYCAgPwHcRs4ArjDFiA6QQAqAsTDFpQgO0EAKgKgxjcgPEEAKgK4wxaUkpSSIaUBQQAgpQFDAAAAACClAbxBgICA/AdxGzgCwMMWQcjDFkEAKAJIQf//AHFBAnRqQ/MEtT5BACoCwMMWlEMI5TwekjgCAEHIwxZBACgCSEEAKALMwxprQf//AHFBAnRqKgIAIJkBQ5qZGT9BACoC2MMblJKSIaYBQdDDGkEAKAJIQf8fcUECdGogpgE4AgBB0MMaQQAoAkhBACgC0MMba0H/H3FBAnRqKgIAIacBQQAgpwFDAAAAACCnAbxBgICA/AdxGzgC1MMbQwAAAABDmpkZPyCmAZSTIagBIKgBQwAAAAAgqAG8QYCAgPwHcRshqQFBACoCMEEAKgLwwxuUQQAqAjRBACoC8MU3QQAqAvTFN5KUkiGqAUEAIKoBQwAAAAAgqgG8QYCAgPwHcRs4AuzDGyBDQQAqAvjDG5QgREEAKgLwxTcgRUEAKgLswxuUkpSSIasBQQAgqwFDAAAAACCrAbxBgICA/AdxGzgC9MMbQfzDG0EAKAJIQf//AXFBAnRqQ/MEtT5BACoC9MMblEMI5TwekjgCAEH8wxtBACgCSEEAKAKAxCNrQf//AXFBAnRqKgIAIJkBQ5qZGT9BACoCjMQklJKSIawBQYTEI0EAKAJIQf8fcUECdGogrAE4AgBBhMQjQQAoAkhBACgChMQka0H/H3FBAnRqKgIAIa0BQQAgrQFDAAAAACCtAbxBgICA/AdxGzgCiMQkQwAAAABDmpkZPyCsAZSTIa4BIK4BQwAAAAAgrgG8QYCAgPwHcRshrwFBACoCMEEAKgKkxCSUQQAqAjRBACoCrMY3QQAqArDGN5KUkiGwAUEAILABQwAAAAAgsAG8QYCAgPwHcRs4AqDEJCBMQQAqAqzEJJQgTUEAKgKsxjcgTkEAKgKgxCSUkpSSIbEBQQAgsQFDAAAAACCxAbxBgICA/AdxGzgCqMQkQbDEJEEAKAJIQf//AHFBAnRqQ/MEtT5BACoCqMQklEMI5TwekjgCAEGwxCRBACgCSEEAKAK0xChrQf//AHFBAnRqKgIAIJkBQ5qZGT9BACoCwIQplJKTIbIBQbjEKEEAKAJIQf8PcUECdGogsgE4AgBBuMQoQQAoAkhBACgCuIQpa0H/D3FBAnRqKgIAIbMBQQAgswFDAAAAACCzAbxBgICA/AdxGzgCvIQpQ5qZGT8gsgGUIbQBILQBQwAAAAAgtAG8QYCAgPwHcRshtQFBACoCMEEAKgLYhCmUQQAqAjRBACoC/MU3QQAqAoDGN5KUkiG2AUEAILYBQwAAAAAgtgG8QYCAgPwHcRs4AtSEKSBVQQAqAuCEKZQgVkEAKgL8xTcgV0EAKgLUhCmUkpSSIbcBQQAgtwFDAAAAACC3AbxBgICA/AdxGzgC3IQpQeSEKUEAKAJIQf//AHFBAnRqQ/MEtT5BACoC3IQplEMI5TwekjgCAEHkhClBACgCSEEAKALohC1rQf//AHFBAnRqKgIAIJkBQ5qZGT9BACoC9IQulJKTIbgBQeyELUEAKAJIQf8fcUECdGoguAE4AgBB7IQtQQAoAkhBACgC7IQua0H/H3FBAnRqKgIAIbkBQQAguQFDAAAAACC5AbxBgICA/AdxGzgC8IQuQ5qZGT8guAGUIboBILoBQwAAAAAgugG8QYCAgPwHcRshuwFBACoCMEEAKgKMhS6UQQAqAjRBACoClMY3QQAqApjGN5KUkiG8AUEAILwBQwAAAAAgvAG8QYCAgPwHcRs4AoiFLiBeQQAqApSFLpQgX0EAKgKUxjcgYEEAKgKIhS6UkpSSIb0BQQAgvQFDAAAAACC9AbxBgICA/AdxGzgCkIUuQZiFLkEAKAJIQf//AHFBAnRqQ/MEtT5BACoCkIUulEMI5TwekjgCACCZAUGYhS5BACgCSEEAKAKchTJrQf//AHFBAnRqKgIAkkOamRk/QQAqAqiFM5STIb4BQaCFMkEAKAJIQf8fcUECdGogvgE4AgBBoIUyQQAoAkhBACgCoIUza0H/H3FBAnRqKgIAIb8BQQAgvwFDAAAAACC/AbxBgICA/AdxGzgCpIUzQ5qZGT8gvgGUIcABIMABQwAAAAAgwAG8QYCAgPwHcRshwQFBACoCMEEAKgLAhTOUQQAqAjRBACoC5MU3QQAqAujFN5KUkiHCAUEAIMIBQwAAAAAgwgG8QYCAgPwHcRs4AryFMyBnQQAqAsiFM5QgaEEAKgLkxTcgaUEAKgK8hTOUkpSSIcMBQQAgwwFDAAAAACDDAbxBgICA/AdxGzgCxIUzQcyFM0EAKAJIQf//AHFBAnRqQ/MEtT5BACoCxIUzlEMI5TwekjgCAEHMhTNBACgCSEEAKALQhTdrQf//AHFBAnRqKgIAIJkBkkOamRk/QQAqAtzFN5STIcQBQdSFN0EAKAJIQf8PcUECdGogxAE4AgBB1IU3QQAoAkhBACgC1MU3a0H/D3FBAnRqKgIAIcUBQQAgxQFDAAAAACDFAbxBgICA/AdxGzgC2MU3Q5qZGT8gxAGUIcYBIMYBQwAAAAAgxgG8QYCAgPwHcRshxwEgxwEgwQGSIcgBILUBILsBIMgBkpIhyQFBACoC8MINQQAqAqTDFkEAKgLYwxtBACoCjMQkQQAqAsCEKUEAKgL0hC5BACoCqIUzQQAqAtzFNyCdASCjASCpASCvASDJAZKSkpKSkpKSkpKSkiHKAUEAIMoBQwAAAAAgygG8QYCAgPwHcRs4AuDFN0EAKgLAhClBACoC9IQuQQAqAqiFM0EAKgLcxTcgyQGSkpKSQQAqAvDCDUEAKgKkwxZBACoC2MMbQQAqAozEJCCdASCjASCvASCpAZKSkpKSkpKTIcsBQQAgywFDAAAAACDLAbxBgICA/AdxGzgC7MU3ILsBILUBkiHMAUEAKgLYwxtBACoCjMQkQQAqAqiFM0EAKgLcxTcgqQEgrwEgyAGSkpKSkpJBACoC8MINQQAqAqTDFkEAKgLAhClBACoC9IQuIJ0BIKMBIMwBkpKSkpKSkyHNAUEAIM0BQwAAAAAgzQG8QYCAgPwHcRs4AvjFN0EAKgLwwg1BACoCpMMWQQAqAqiFM0EAKgLcxTcgnQEgowEgyAGSkpKSkpJBACoC2MMbQQAqAozEJEEAKgLAhClBACoC9IQuIKkBIK8BIMwBkpKSkpKSkyHOAUEAIM4BQwAAAAAgzgG8QYCAgPwHcRs4AoTGNyDHASC7AZIhzwEgwQEgtQGSIdABQQAqAqTDFkEAKgKMxCRBACoC9IQuQQAqAtzFNyCjASCvASDPAZKSkpKSkkEAKgLwwg1BACoC2MMbQQAqAsCEKUEAKgKohTMgnQEgqQEg0AGSkpKSkpKTIdEBQQAg0QFDAAAAACDRAbxBgICA/AdxGzgCkMY3QQAqAvDCDUEAKgLYwxtBACoC9IQuQQAqAtzFNyCdASCpASDPAZKSkpKSkkEAKgKkwxZBACoCjMQkQQAqAsCEKUEAKgKohTMgowEgrwEg0AGSkpKSkpKTIdIBQQAg0gFDAAAAACDSAbxBgICA/AdxGzgCnMY3IMcBILUBkiHTASDBASC7AZIh1AFBACoC8MINQQAqAozEJEEAKgLAhClBACoC3MU3IJ0BIK8BINMBkpKSkpKSQQAqAqTDFkEAKgLYwxtBACoC9IQuQQAqAqiFMyCjASCpASDUAZKSkpKSkpMh1QFBACDVAUMAAAAAINUBvEGAgID8B3EbOAKoxjdBACoCpMMWQQAqAtjDG0EAKgLAhClBACoC3MU3IKMBIKkBINMBkpKSkpKSQQAqAvDCDUEAKgKMxCRBACoC9IQuQQAqAqiFMyCdASCvASDUAZKSkpKSkpMh1gFBACDWAUMAAAAAINYBvEGAgID8B3EbOAK0xjdDAAAAP0MAAIA/IG2TIHGUIJgBlJQh1wEgBCAKakOkcL0+QQAqAuzFN0EAKgL4xTeSlCDXAZI4AgAgBSAKaiDXAUOkcL0+QQAqAuzFN0EAKgL4xTeTlJI4AgBBAEEAKAIANgIEQQBBACoCODgCPEEAQQAqAkA4AkRBAEEAKAJIQQFqNgJIQQBBACoC2IAIOALcgAhBAEEAKgLogAg4AuyACEEAQQAqAvCACDgC9IAIQQBBACoC/IAIOAKAgQhBAEEAKgKcgQg4AqCBCEEAQQAqAqiBCDgCrIEIQQBBACoCsIEIOAK0gQhBAEEAKgK8gQg4AsCBCEEAQQAqAsiBCDgCzIEIQQBBACgC1IEINgLYgQhBAEEAKgLggQg4AuSBCEEAQQAqAvCBCDgC9IEIQQBBACoC+IEIOAL8gQhBAEEAKAKAggg2AoSCCEEAQQAoAoiCCDYCjIIIQQBBACoClIIIOAKYgghBAEEAKgKcggo4AqCCCkEAQQAqAqSCCjgCqIIKQQBBACoCrIIMOAKwggxBAEEAKgK0ggw4AriCDEEAQQAqAryCDDgCwIIMQQBBACoCxIIMOALIggxBAEEAKgLMggw4AtCCDEEAQQAqAtSCDDgC2IIMQQBBACoC3IIMOALgggxBAEEAKgLswg04AvDCDUEAQQAqAoTDDTgCiMMNQQBBACoCjMMNOAKQww1BAEEAKgKgwxY4AqTDFkEAQQAqArjDFjgCvMMWQQBBACoCwMMWOALEwxZBAEEAKgLUwxs4AtjDG0EAQQAqAuzDGzgC8MMbQQBBACoC9MMbOAL4wxtBAEEAKgKIxCQ4AozEJEEAQQAqAqDEJDgCpMQkQQBBACoCqMQkOAKsxCRBAEEAKgK8hCk4AsCEKUEAQQAqAtSEKTgC2IQpQQBBACoC3IQpOALghClBAEEAKgLwhC44AvSELkEAQQAqAoiFLjgCjIUuQQBBACoCkIUuOAKUhS5BAEEAKgKkhTM4AqiFM0EAQQAqAryFMzgCwIUzQQBBACoCxIUzOALIhTNBAEEAKgLYxTc4AtzFN0EAQQAqAuTFNzgC6MU3QQBBACoC4MU3OALkxTdBAEEAKgLwxTc4AvTFN0EAQQAqAuzFNzgC8MU3QQBBACoC/MU3OAKAxjdBAEEAKgL4xTc4AvzFN0EAQQAqAojGNzgCjMY3QQBBACoChMY3OAKIxjdBAEEAKgKUxjc4ApjGN0EAQQAqApDGNzgClMY3QQBBACoCoMY3OAKkxjdBAEEAKgKcxjc4AqDGN0EAQQAqAqzGNzgCsMY3QQBBACoCqMY3OAKsxjdBAEEAKgK4xjc4ArzGN0EAQQAqArTGNzgCuMY3IApBBGohCiAKQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIIDwuOgICAAAAgACABEAUgACABEA4L7Z6AgAABTX9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACFAQQAhQUEAIUJBACFDQQAhREEAIUVBACFGQQAhR0EAIUhBACFJQQAhSkEAIUtBACFMQQAhTUEAIQEDQAJAQQAgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQTggAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQcAAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBAEEANgJIQQAhBANAAkBBzAAgBEECdGpDAAAAADgCACAEQQFqIQQgBEGAgAJIBEAMAgwBCwsLQQAhBQNAAkBB2IAIIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHogAggBkECdGpDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQfCACCAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBB/IAIIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBAkgEQAwCDAELCwtBACEJA0ACQEGcgQggCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQaiBCCAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBsIEIIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBAkgEQAwCDAELCwtBACEMA0ACQEG8gQggDEECdGpDAAAAADgCACAMQQFqIQwgDEECSARADAIMAQsLC0EAIQ0DQAJAQciBCCANQQJ0akMAAAAAOAIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBB1IEIIA5BAnRqQQA2AgAgDkEBaiEOIA5BAkgEQAwCDAELCwtBACEPA0ACQEHggQggD0ECdGpDAAAAADgCACAPQQFqIQ8gD0ECSARADAIMAQsLC0EAIRADQAJAQfCBCCAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBB+IEIIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEGAggggEkECdGpBADYCACASQQFqIRIgEkECSARADAIMAQsLC0EAIRMDQAJAQYiCCCATQQJ0akEANgIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQAhFANAAkBBlIIIIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBAkgEQAwCDAELCwtBACEVA0ACQEGcggggFUECdGpDAAAAADgCACAVQQFqIRUgFUGAwABIBEAMAgwBCwsLQQAhFgNAAkBBnIIKIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQEGkggogF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQayCCiAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQYDAAEgEQAwCDAELCwtBACEZA0ACQEGsggwgGUECdGpDAAAAADgCACAZQQFqIRkgGUECSARADAIMAQsLC0EAIRoDQAJAQbSCDCAaQQJ0akMAAAAAOAIAIBpBAWohGiAaQQJIBEAMAgwBCwsLQQAhGwNAAkBBvIIMIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQEHEggwgHEECdGpDAAAAADgCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAQcyCDCAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQQJIBEAMAgwBCwsLQQAhHgNAAkBB1IIMIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BAkgEQAwCDAELCwtBACEfA0ACQEHcggwgH0ECdGpDAAAAADgCACAfQQFqIR8gH0ECSARADAIMAQsLC0EAISADQAJAQeSCDCAgQQJ0akMAAAAAOAIAICBBAWohICAgQYAgSARADAIMAQsLC0EAISEDQAJAQeiCDSAhQQJ0akMAAAAAOAIAICFBAWohISAhQYAQSARADAIMAQsLC0EAISIDQAJAQezCDSAiQQJ0akMAAAAAOAIAICJBAWohIiAiQQJIBEAMAgwBCwsLQQAhIwNAAkBBhMMNICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQEGMww0gJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQZTDDSAlQQJ0akMAAAAAOAIAICVBAWohJSAlQYCAAkgEQAwCDAELCwtBACEmA0ACQEGcwxUgJkECdGpDAAAAADgCACAmQQFqISYgJkGAIEgEQAwCDAELCwtBACEnA0ACQEGgwxYgJ0ECdGpDAAAAADgCACAnQQFqIScgJ0ECSARADAIMAQsLC0EAISgDQAJAQbjDFiAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkBBwMMWIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEHIwxYgKkECdGpDAAAAADgCACAqQQFqISogKkGAgAFIBEAMAgwBCwsLQQAhKwNAAkBB0MMaICtBAnRqQwAAAAA4AgAgK0EBaiErICtBgCBIBEAMAgwBCwsLQQAhLANAAkBB1MMbICxBAnRqQwAAAAA4AgAgLEEBaiEsICxBAkgEQAwCDAELCwtBACEtA0ACQEHswxsgLUECdGpDAAAAADgCACAtQQFqIS0gLUECSARADAIMAQsLC0EAIS4DQAJAQfTDGyAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQJIBEAMAgwBCwsLQQAhLwNAAkBB/MMbIC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BgIACSARADAIMAQsLC0EAITADQAJAQYTEIyAwQQJ0akMAAAAAOAIAIDBBAWohMCAwQYAgSARADAIMAQsLC0EAITEDQAJAQYjEJCAxQQJ0akMAAAAAOAIAIDFBAWohMSAxQQJIBEAMAgwBCwsLQQAhMgNAAkBBoMQkIDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBAkgEQAwCDAELCwtBACEzA0ACQEGoxCQgM0ECdGpDAAAAADgCACAzQQFqITMgM0ECSARADAIMAQsLC0EAITQDQAJAQbDEJCA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QYCAAUgEQAwCDAELCwtBACE1A0ACQEG4xCggNUECdGpDAAAAADgCACA1QQFqITUgNUGAEEgEQAwCDAELCwtBACE2A0ACQEG8hCkgNkECdGpDAAAAADgCACA2QQFqITYgNkECSARADAIMAQsLC0EAITcDQAJAQdSEKSA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QQJIBEAMAgwBCwsLQQAhOANAAkBB3IQpIDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBAkgEQAwCDAELCwtBACE5A0ACQEHkhCkgOUECdGpDAAAAADgCACA5QQFqITkgOUGAgAFIBEAMAgwBCwsLQQAhOgNAAkBB7IQtIDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBgCBIBEAMAgwBCwsLQQAhOwNAAkBB8IQuIDtBAnRqQwAAAAA4AgAgO0EBaiE7IDtBAkgEQAwCDAELCwtBACE8A0ACQEGIhS4gPEECdGpDAAAAADgCACA8QQFqITwgPEECSARADAIMAQsLC0EAIT0DQAJAQZCFLiA9QQJ0akMAAAAAOAIAID1BAWohPSA9QQJIBEAMAgwBCwsLQQAhPgNAAkBBmIUuID5BAnRqQwAAAAA4AgAgPkEBaiE+ID5BgIABSARADAIMAQsLC0EAIT8DQAJAQaCFMiA/QQJ0akMAAAAAOAIAID9BAWohPyA/QYAgSARADAIMAQsLC0EAIUADQAJAQaSFMyBAQQJ0akMAAAAAOAIAIEBBAWohQCBAQQJIBEAMAgwBCwsLQQAhQQNAAkBBvIUzIEFBAnRqQwAAAAA4AgAgQUEBaiFBIEFBAkgEQAwCDAELCwtBACFCA0ACQEHEhTMgQkECdGpDAAAAADgCACBCQQFqIUIgQkECSARADAIMAQsLC0EAIUMDQAJAQcyFMyBDQQJ0akMAAAAAOAIAIENBAWohQyBDQYCAAUgEQAwCDAELCwtBACFEA0ACQEHUhTcgREECdGpDAAAAADgCACBEQQFqIUQgREGAEEgEQAwCDAELCwtBACFFA0ACQEHYxTcgRUECdGpDAAAAADgCACBFQQFqIUUgRUECSARADAIMAQsLC0EAIUYDQAJAQeDFNyBGQQJ0akMAAAAAOAIAIEZBAWohRiBGQQNIBEAMAgwBCwsLQQAhRwNAAkBB7MU3IEdBAnRqQwAAAAA4AgAgR0EBaiFHIEdBA0gEQAwCDAELCwtBACFIA0ACQEH4xTcgSEECdGpDAAAAADgCACBIQQFqIUggSEEDSARADAIMAQsLC0EAIUkDQAJAQYTGNyBJQQJ0akMAAAAAOAIAIElBAWohSSBJQQNIBEAMAgwBCwsLQQAhSgNAAkBBkMY3IEpBAnRqQwAAAAA4AgAgSkEBaiFKIEpBA0gEQAwCDAELCwtBACFLA0ACQEGcxjcgS0ECdGpDAAAAADgCACBLQQFqIUsgS0EDSARADAIMAQsLC0EAIUwDQAJAQajGNyBMQQJ0akMAAAAAOAIAIExBAWohTCBMQQNIBEAMAgwBCwsLQQAhTQNAAkBBtMY3IE1BAnRqQwAAAAA4AgAgTUEBaiFNIE1BA0gEQAwCDAELCwsLjI+AgAAAQQAgATYCCEEAQwCAO0hDAACAP0EAKAIIspeWOAIMQQBDHUMTR0EAKgIMlRAAOAIQQQBDUkVhPkEAKgIMlEMAAAA/ko44AhRBAEMAAAAAQ1UM3UBBACoCFJSTQQAqAgyVOAIYQQBDAAAAP0EAKgIYlDgCHEEAQ6uqqj5BACoCGJQ4AiRBAEMAAIA/Q2MUHURBACoCDJUQBJU4AihBAEEAKgIoQwAAgD+SOAIsQQBDAAAAAEMAAIA/QQAqAiiTQQAqAiyVkzgCMEEAQwAAgD9BACoCLJU4AjRBAEPWp5w8QQAqAgyUQwAAAD+SjjgCzIAIQQBDAACARkMAAAAAQQAqAhRBACoCzIAIk5eWqDYC0IAIQQBDzczMPUEAKgIMlDgC5IAIQQBDAAAgQUEAKgIMlTgC+IAIQQBDAACAP0N8WcRFQQAqAgyVEASVOAKEgQhBAEEAKgKEgQhDAACAP5I4AoiBCEEAQwAAAABDAACAP0EAKgKEgQiTQQAqAoiBCJWTOAKMgQhBAEMAAIA/QQAqAoiBCJU4ApCBCEEAQwAAAD9BACoCDJQ4ApSBCEEAQ5qZmT5BACoCDJQ4AriBCEEAQwAAoEBBACoCDJU4AsSBCEEAQwAAAEBBACoCDJU4AtCBCEEAQ9sPyUBBACoCDJU4AuiBCEEAQwAAgD9DAACAP0MAUMNHQwAAoEBBACoCDJUQApWTOAKQgghBAEMAAABGQwAAAABDCtejPEEAKgIMlJeWqDYC5IINQQBDAACAREMAAAAAQQAqAsyACEMAAIC/kpeWqDYC6MINQQBDOIeDPkEAKgIMlEMAAAA/ko44AvTCDUEAQwAAAABDVQzdQEEAKgL0wg2Uk0EAKgIMlTgC+MINQQBDAAAAP0EAKgL4wg2UOAL8wg1BAEOrqqo+QQAqAvjCDZQ4AoDDDUEAQ3Xp3zxBACoCDJRDAAAAP5KOOAKUwxVBAEMAAIBGQwAAAABBACoC9MINQQAqApTDFZOXlqg2ApjDFUEAQwAAAEVDAAAAAEEAKgKUwxVDAACAv5KXlqg2ApzDFkEAQxTrRD5BACoCDJRDAAAAP5KOOAKowxZBAEMAAAAAQ1UM3UBBACoCqMMWlJNBACoCDJU4AqzDFkEAQwAAAD9BACoCrMMWlDgCsMMWQQBDq6qqPkEAKgKswxaUOAK0wxZBAEOu8+88QQAqAgyUQwAAAD+SjjgCyMMaQQBDAAAARkMAAAAAQQAqAqjDFkEAKgLIwxqTl5aoNgLMwxpBAEMAAABFQwAAAABBACoCyMMaQwAAgL+Sl5aoNgLQwxtBAEM3cFc+QQAqAgyUQwAAAD+SjjgC3MMbQQBDAAAAAENVDN1AQQAqAtzDG5STQQAqAgyVOALgwxtBAEMAAAA/QQAqAuDDG5Q4AuTDG0EAQ6uqqj5BACoC4MMblDgC6MMbQQBDjQ7IPEEAKgIMlEMAAAA/ko44AvzDI0EAQwAAgEZDAAAAAEEAKgLcwxtBACoC/MMjk5eWqDYCgMQjQQBDAAAARUMAAAAAQQAqAvzDI0MAAIC/kpeWqDYChMQkQQBDAAAAPkEAKgIMlEMAAAA/ko44ApDEJEEAQwAAAABDVQzdQEEAKgKQxCSUk0EAKgIMlTgClMQkQQBDAAAAP0EAKgKUxCSUOAKYxCRBAEOrqqo+QQAqApTEJJQ4ApzEJEEAQ/F+XDxBACoCDJRDAAAAP5KOOAKwxChBAEMAAABGQwAAAABBACoCkMQkQQAqArDEKJOXlqg2ArTEKEEAQwAAgERDAAAAAEEAKgKwxChDAACAv5KXlqg2AriEKUEAQ7TnAj5BACoCDJRDAAAAP5KOOALEhClBAEMAAAAAQ1UM3UBBACoCxIQplJNBACoCDJU4AsiEKUEAQwAAAD9BACoCyIQplDgCzIQpQQBDq6qqPkEAKgLIhCmUOALQhClBAEMycwE9QQAqAgyUQwAAAD+SjjgC5IQtQQBDAAAARkMAAAAAQQAqAsSEKUEAKgLkhC2Tl5aoNgLohC1BAEMAAABFQwAAAABBACoC5IQtQwAAgL+Sl5aoNgLshC5BAEP35zI+QQAqAgyUQwAAAD+SjjgC+IQuQQBDAAAAAENVDN1AQQAqAviELpSTQQAqAgyVOAL8hC5BAEMAAAA/QQAqAvyELpQ4AoCFLkEAQ6uqqj5BACoC/IQulDgChIUuQQBDK6G7PEEAKgIMlEMAAAA/ko44ApiFMkEAQwAAAEZDAAAAAEEAKgL4hC5BACoCmIUyk5eWqDYCnIUyQQBDAAAARUMAAAAAQQAqApiFMkMAAIC/kpeWqDYCoIUzQQBD2c0cPkEAKgIMlEMAAAA/ko44AqyFM0EAQwAAAABDVQzdQEEAKgKshTOUk0EAKgIMlTgCsIUzQQBDAAAAP0EAKgKwhTOUOAK0hTNBAEOrqqo+QQAqArCFM5Q4AriFM0EAQ6ispjxBACoCDJRDAAAAP5KOOALMhTdBAEMAAABGQwAAAABBACoCrIUzQQAqAsyFN5OXlqg2AtCFN0EAQwAAgERDAAAAAEEAKgLMhTdDAACAv5KXlqg2AtTFNwuQgICAAAAgACABEA0gABAPIAAQDAvUgICAAABBAEPsUTg/OAIgQQBDzcxMPjgC1IAIQQBDAAAAADgC4IAIQQBDAADcQzgCmIEIQQBDj8J1PzgCpIEIQQBDCtejPDgC3IEIQQBDAACAQDgC7IEIC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC9mYgIAAAQBBAAvSGHsibmFtZSI6IkZsdXRlIiwidmVyc2lvbiI6IjIuNS4xMiIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiOTEwMTQ0IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgRmx1dGUifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJGbHV0ZSJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTE2OCIsIm1ldGEiOlt7IjAiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvRmx1dGUvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyMjQiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyNDciLCJtYXgiOiIxMjAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvRmx1dGUvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTIzNiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC45NiIsIm1pbiI6IjAuMiIsIm1heCI6IjAuOTkiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvRmx1dGUvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyOTIiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4yIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXEgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9WaWJyYXRvX0ZyZXFfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzEzMDgiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuNSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0ZsdXRlL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTMwIDAgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNzIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMS43Iiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class FluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            FluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            FluteProcessor.parse_items(group.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
            FluteProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= FluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONFlute());

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
        
        this.factory = FluteProcessor.Flute_instance.exports;
        this.HEAP = FluteProcessor.Flute_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * FluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((FluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + FluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, FluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, FluteProcessor.buffer_size, this.ins, this.outs);
        
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

FluteProcessor.buffer_size = 128;

FluteProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(FluteProcessor.atob(getBase64CodeFlute()));
    FluteProcessor.Flute_instance = new WebAssembly.Instance(wasm_module, FluteProcessor.importObject);
    registerProcessor('Flute', FluteProcessor);
} catch (e) {
    console.log(e); console.log("Faust Flute cannot be loaded or compiled");
}

