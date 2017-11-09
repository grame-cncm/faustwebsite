
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"910144\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"131168\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"131224\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"131236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"131292\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"131308\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"131156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Flute/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -30 0 13\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeFlute() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQLbgICAAAULZ2xvYmFsLk1hdGgDY29zAAILZ2xvYmFsLk1hdGgDZXhwAAMLZ2xvYmFsLk1hdGgDcG93AA8LZ2xvYmFsLk1hdGgDc2luABELZ2xvYmFsLk1hdGgDdGFuABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAJCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACr/9gIAADoKAgIAAAAvIzYCAAAILf8MBfUEAIQRBACEFQwAAAAAhD0MAAAAAIRBDAAAAACERQwAAAAAhEkMAAAAAIRNDAAAAACEUQwAAAAAhFUMAAAAAIRZDAAAAACEXQwAAAAAhGEMAAAAAIRlDAAAAACEaQQAhBkEAIQdBACEIQwAAAAAhG0MAAAAAIRxDAAAAACEdQwAAAAAhHkMAAAAAIR9DAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEEAIQlDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSkMAAAAAIUtDAAAAACFMQwAAAAAhTUMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFDAAAAACFSQwAAAAAhU0MAAAAAIVRDAAAAACFVQwAAAAAhVkMAAAAAIVdDAAAAACFYQwAAAAAhWUMAAAAAIVpDAAAAACFbQwAAAAAhXEMAAAAAIV1DAAAAACFeQwAAAAAhX0MAAAAAIWBDAAAAACFhQwAAAAAhYkMAAAAAIWNBACEKQwAAAAAhZEMAAAAAIWVDAAAAACFmQwAAAAAhZ0MAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQwAAAAAhcEMAAAAAIXFDAAAAACFyQQAhC0MAAAAAIXNDAAAAACF0QwAAAAAhdUMAAAAAIXZBACEMQwAAAAAhd0MAAAAAIXhDAAAAACF5QQAhDUMAAAAAIXpDAAAAACF7QwAAAAAhfEEAIQ5DAAAAACF9QwAAAAAhfkMAAAAAIX9DAAAAACGAAUMAAAAAIYEBQwAAAAAhggFDAAAAACGDAUMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBQwAAAAAhlwFDAAAAACGYAUMAAAAAIZkBQwAAAAAhmgFDAAAAACGbAUMAAAAAIZwBQwAAAAAhnQFDAAAAACGeAUMAAAAAIZ8BQwAAAAAhoAFDAAAAACGhAUMAAAAAIaIBQwAAAAAhowFDAAAAACGkAUMAAAAAIaUBQwAAAAAhpgFDAAAAACGnAUMAAAAAIagBQwAAAAAhqQFDAAAAACGqAUMAAAAAIasBQwAAAAAhrAFDAAAAACGtAUMAAAAAIa4BQwAAAAAhrwFDAAAAACGwAUMAAAAAIbEBQwAAAAAhsgFDAAAAACGzAUMAAAAAIbQBQwAAAAAhtQFDAAAAACG2AUMAAAAAIbcBQwAAAAAhuAFDAAAAACG5AUMAAAAAIboBQwAAAAAhuwFDAAAAACG8AUMAAAAAIb0BQwAAAAAhvgFDAAAAACG/AUMAAAAAIcABQwAAAAAhwQFDAAAAACHCAUMAAAAAIcMBQwAAAAAhxAFDAAAAACHFAUMAAAAAIcYBQwAAAAAhxwFDAAAAACHIAUMAAAAAIckBQwAAAAAhygFDAAAAACHLAUMAAAAAIcwBQwAAAAAhzQFDAAAAACHOAUMAAAAAIc8BQwAAAAAh0AFDAAAAACHRASADQQBqKAIAIQQgA0EEaigCACEFQ83MTD1DmpnZP0EAKgIglpchD0EAKgIcIA+VEAEhECAQQwAAAEAQAiERQwAAgD9BACoCECARlJMhEkMAAIA/IBGTIRMgEiATlSEUQwAAAAAgEkMAAABAEAIgE0MAAABAEAKVQwAAgL+Sl5EhFSAUIBWTIRYgECAVQwAAgD8gFJOSlCEXQQAqAiQgD5UQASAQlUMAAIC/kiEYQ28SgzpBACoC1IAIlCEZQQAqAuCACCEaIBpDAAAAAF4hBiAGQQBKIQcgGkMAAAAAW0EASiEIQQAqAviACCAalCEbQ28SgzpBACoCmIEIlCEcQ28SgzpBACoCpIEIlCEdQ2ZmZj8gGpQhHkEAKgLEgQggHkMAAIC/kpQhH0NvEoM6QQAqAtyBCJQhIEEAKgLogQhBACoC7IEIlCEhICEQAyEiICEQACEjQwAAAAAgIpMhJCAaQwAAAABfIQlBACoC/MINIA+VEAEhJSAlQwAAAEAQAiEmQwAAgD9BACoCECAmlJMhJ0MAAIA/ICaTISggJyAolSEpQwAAAAAgJ0MAAABAEAIgKEMAAABAEAKVQwAAgL+Sl5EhKiApICqTISsgJSAqQwAAgD8gKZOSlCEsQQAqAoDDDSAPlRABICWVQwAAgL+SIS1BACoCsMMWIA+VEAEhLiAuQwAAAEAQAiEvQwAAgD9BACoCECAvlJMhMEMAAIA/IC+TITEgMCAxlSEyQwAAAAAgMEMAAABAEAIgMUMAAABAEAKVQwAAgL+Sl5EhMyAyIDOTITQgLiAzQwAAgD8gMpOSlCE1QQAqArTDFiAPlRABIC6VQwAAgL+SITZBACoC5MMbIA+VEAEhNyA3QwAAAEAQAiE4QwAAgD9BACoCECA4lJMhOUMAAIA/IDiTITogOSA6lSE7QwAAAAAgOUMAAABAEAIgOkMAAABAEAKVQwAAgL+Sl5EhPCA7IDyTIT0gNyA8QwAAgD8gO5OSlCE+QQAqAujDGyAPlRABIDeVQwAAgL+SIT9BACoCmMQkIA+VEAEhQCBAQwAAAEAQAiFBQwAAgD9BACoCECBBlJMhQkMAAIA/IEGTIUMgQiBDlSFEQwAAAAAgQkMAAABAEAIgQ0MAAABAEAKVQwAAgL+Sl5EhRSBEIEWTIUYgQCBFQwAAgD8gRJOSlCFHQQAqApzEJCAPlRABIECVQwAAgL+SIUhBACoCzIQpIA+VEAEhSSBJQwAAAEAQAiFKQwAAgD9BACoCECBKlJMhS0MAAIA/IEqTIUwgSyBMlSFNQwAAAAAgS0MAAABAEAIgTEMAAABAEAKVQwAAgL+Sl5EhTiBNIE6TIU8gSSBOQwAAgD8gTZOSlCFQQQAqAtCEKSAPlRABIEmVQwAAgL+SIVFBACoCgIUuIA+VEAEhUiBSQwAAAEAQAiFTQwAAgD9BACoCECBTlJMhVEMAAIA/IFOTIVUgVCBVlSFWQwAAAAAgVEMAAABAEAIgVUMAAABAEAKVQwAAgL+Sl5EhVyBWIFeTIVggUiBXQwAAgD8gVpOSlCFZQQAqAoSFLiAPlRABIFKVQwAAgL+SIVpBACoCtIUzIA+VEAEhWyBbQwAAAEAQAiFcQwAAgD9BACoCECBclJMhXUMAAIA/IFyTIV4gXSBelSFfQwAAAAAgXUMAAABAEAIgXkMAAABAEAKVQwAAgL+Sl5EhYCBfIGCTIWEgWyBgQwAAgD8gX5OSlCFiQQAqAriFMyAPlRABIFuVQwAAgL+SIWNBACEKA0ACQEEAQQE2AgBBACoCMEEAKgI8lEEAKgI0QQAqArjGN0EAKgK8xjeSlJIhZEEAIGRDAAAAACBkvEGAgID8B3EbOAI4IBZBACoCRJQgF0EAKgK4xjcgGEEAKgI4lJKUkiFlQQAgZUMAAAAAIGW8QYCAgPwHcRs4AkBBzABBACgCSEH//wFxQQJ0akPzBLU+QQAqAkCUQwjlPB6SOAIAIBlDd75/P0EAKgLcgAiUkiFmQQAgZkMAAAAAIGa8QYCAgPwHcRs4AtiACEPNzEw9QwAAgD9BACoC2IAIlpchZ0MAAAAAQQAqAuSACEEAKgLsgAhDAACAP5KWIAcbIWhBACBoQwAAAAAgaLxBgICA/AdxGzgC6IAIQwAAAABBACoC5IAIQQAqAvSACEMAAIA/kpYgCBshaUEAIGlDAAAAACBpvEGAgID8B3EbOALwgAggBrJDAAAAACAbQQAqAvCACJQgGkEAKgLwgAhBACoC5IAIXRtBACoC8IAIQwAAAABdG5RBACoCgIEIIAYbIWpBACBqQwAAAAAgarxBgICA/AdxGzgC/IAIQQAqAvyACEEAKgL8gAhBACoC+IAIQQAqAuiACEMAAAAAQQAqAvyACJOUlJJDAAAAAEEAKgLogAhBACoC5IAIXRtBACoC6IAIQwAAAABdGyFrIBxDd75/P0EAKgKggQiUkiFsQQAgbEMAAAAAIGy8QYCAgPwHcRs4ApyBCEEAKgKUgQhBACoCnIEIlSFtIG1DAAAAwJIhbiBujiFvIB1Dd75/P0EAKgKsgQiUkiFwQQAgcEMAAAAAIHC8QYCAgPwHcRs4AqiBCEMAAAAAQQAqApSBCEEAKgK0gQhDAACAP5KWIAcbIXFBACBxQwAAAAAgcbxBgICA/AdxGzgCsIEIQwAAAABBACoCuIEIQQAqAsCBCEMAAIA/kpYgCBshckEAIHJDAAAAACByvEGAgID8B3EbOAK8gQhBACoCvIEIQQAqAuSACF0hCyAGskMAAAAAQQAqAviACEEAKgK8gQiUQwAAgD8gCxtBACoCvIEIQwAAAABdGyAfQQAqAryBCEEAKgLkgAiTlEMAAIA/kiAeQQAqAryBCEEAKgK4gQhdGyALG5RBACoCzIEIIAYbIXNBACBzQwAAAAAgc7xBgICA/AdxGzgCyIEIQQBB7ZyZjgRBACgC2IEIbEG54ABqNgLUgQggIEN3vn8/QQAqAuSBCJSSIXRBACB0QwAAAAAgdLxBgICA/AdxGzgC4IEIICJBACoC/IEIlCAjQQAqAvSBCJSSIXVBACB1QwAAAAAgdbxBgICA/AdxGzgC8IEIICNBACoC/IEIlCAkQQAqAvSBCJSSQQFBACgCBGuykiF2QQAgdkMAAAAAIHa8QYCAgPwHcRs4AviBCEEAIAZBACgChIIIQQAqApiCCEMAAIA/YHJxNgKAgghBACAGQQAoAoyCCEEBamw2AoiCCCAJQQAqApiCCEMAAAAAXnEhDEEAKgLQgQhBACgChIIIQQBGIAZxQQAqApiCCEMAAIA/XXFBACgCjIIIskEAKgLkgAhecUEBQQAoAoyCCLJBACoC5IAIXWtsspRBACoCmIIIQwAAgD9BACoCkIIIIAyylJOUkiAMQQBGQQAqApiCCEO9N4Y1YHKylCF3QQAgd0MAAAAAIHe8QYCAgPwHcRs4ApSCCEEAKgIMQQAqApyBCJUheCB4QwAAAMCSIXkgeaghDSB5jiF6Q83MzD5BrIIKQQAoAkhBgSBBACANEBAQEUEBamtB/z9xQQJ0aioCACB6QwAAQEAgeJOSlCB4QwAAAMAgepOSQayCCkEAKAJIQYEgQQAgDUEBahAQEBFBAWprQf8/cUECdGoqAgCUkpQhe0PNzEw+Q6RwfT9BACoCqIEIlpdBACoCyIEIQQAqAsiBCEEAKgLQgQhBACoCsIEIQwAAAABBACoCyIEIk5SUkkMAAAAAQQAqArCBCEEAKgKUgQhdG0EAKgKwgQhDAAAAAF0blEPNzAwwQQAoAtSBCLJDCtcjPEPNzEw+QQAqAuCBCJaXlJRDzcyMP5KUQ83MTD1BACoC8IEIQQAqApSCCJSUkiB7kiF8QZyCCEEAKAJIQf8/cUECdGogfDgCACBuqCEOIG1DAAAAwCBvk5JBnIIIQQAoAkhBgSBBACAOQQFqEBAQEWtB/z9xQQJ0aioCAJQhfUGcgghBACgCSEGBIEEAIA4QEBARa0H/P3FBAnRqKgIAIG9DAABAQCBtk5KUIX4gfSB7IH6SkiB+IH2SQwAAQEAQApMhf0EAIH84ApyCCkEAKgKMgQhBACoCqIIKlEEAKgKQgQggf0EAKgKgggqSlJIhgAFBACCAAUMAAAAAIIABvEGAgID8B3EbOAKkggpBACoCpIIKIYEBQayCCkEAKAJIQf8/cUECdGoggQFDAAAAACCBAbxBgICA/AdxGzgCAEN3vn8/QQAqArCCDJQhggFBACCCAUMAAAAAIIIBvEGAgID8B3EbOAKsggxD2w9JQEGsggpBACgCSEEAa0H/P3FBAnRqKgIAQQAqAqyCDJQga5SUIYMBIIMBEAMhhAFDAAAAACCEAZMhhQEggwEQACGGAUEAKgLgggwghQGUQayCCkEAKAJIQQBrQf8/cUECdGoqAgAghgGUkiGHASCFAUEAKgLYggyUIIYBIIcBlJIhiAEghQFBACoC0IIMlCCGASCIAZSSIYkBIIUBQQAqAsiCDJQghgEgiQGUkiGKASCFAUEAKgLAggyUIIYBIIoBlJIhiwEghQFBACoCuIIMlCCGASCLAZSSIYwBQQAgjAFDAAAAACCMAbxBgICA/AdxGzgCtIIMIIQBIIsBlCCGAUEAKgK4ggyUkiGNAUEAII0BQwAAAAAgjQG8QYCAgPwHcRs4AryCDCCEASCKAZQghgFBACoCwIIMlJIhjgFBACCOAUMAAAAAII4BvEGAgID8B3EbOALEggwghAEgiQGUIIYBQQAqAsiCDJSSIY8BQQAgjwFDAAAAACCPAbxBgICA/AdxGzgCzIIMIIQBIIgBlCCGAUEAKgLQggyUkiGQAUEAIJABQwAAAAAgkAG8QYCAgPwHcRs4AtSCDCCEASCHAZQghgFBACoC2IIMlJIhkQFBACCRAUMAAAAAIJEBvEGAgID8B3EbOALcggxBrIIKQQAoAkhBAGtB/z9xQQJ0aioCAEMAAIA/QQAqAqyCDJOUQQAqAqyCDEGsggpBACgCSEEAa0H/P3FBAnRqKgIAIIQBlEEAKgLgggwghgGUkpSSIZIBQeSCDEEAKAJIQf8fcUECdGogZyBrlCCSAZQ4AgBDmpkZPkHkggxBACgCSEEAKALkgg1rQf8fcUECdGoqAgCUIZMBQ5qZGT9BACoC8MINlEHMAEEAKAJIQQAoAtCACGtB//8BcUECdGoqAgCSIJMBkyGUAUHogg1BACgCSEH/D3FBAnRqIJQBOAIAQeiCDUEAKAJIQQAoAujCDWtB/w9xQQJ0aioCACGVAUEAIJUBQwAAAAAglQG8QYCAgPwHcRs4AuzCDUMAAAAAQ5qZGT8glAGUkyGWASCWAUMAAAAAIJYBvEGAgID8B3EbIZcBQQAqAjBBACoCiMMNlEEAKgI0QQAqAojGN0EAKgKMxjeSlJIhmAFBACCYAUMAAAAAIJgBvEGAgID8B3EbOAKEww0gK0EAKgKQww2UICxBACoCiMY3IC1BACoChMMNlJKUkiGZAUEAIJkBQwAAAAAgmQG8QYCAgPwHcRs4AozDDUGUww1BACgCSEH//wFxQQJ0akPzBLU+QQAqAozDDZRDCOU8HpI4AgBDmpkZP0EAKgKkwxaUQZTDDUEAKAJIQQAoApjDFWtB//8BcUECdGoqAgCSIJMBkyGaAUGcwxVBACgCSEH/H3FBAnRqIJoBOAIAQZzDFUEAKAJIQQAoApzDFmtB/x9xQQJ0aioCACGbAUEAIJsBQwAAAAAgmwG8QYCAgPwHcRs4AqDDFkMAAAAAQ5qZGT8gmgGUkyGcASCcAUMAAAAAIJwBvEGAgID8B3EbIZ0BQQAqAjBBACoCvMMWlEEAKgI0QQAqAqDGN0EAKgKkxjeSlJIhngFBACCeAUMAAAAAIJ4BvEGAgID8B3EbOAK4wxYgNEEAKgLEwxaUIDVBACoCoMY3IDZBACoCuMMWlJKUkiGfAUEAIJ8BQwAAAAAgnwG8QYCAgPwHcRs4AsDDFkHIwxZBACgCSEH//wBxQQJ0akPzBLU+QQAqAsDDFpRDCOU8HpI4AgBByMMWQQAoAkhBACgCzMMaa0H//wBxQQJ0aioCACCTAUOamRk/QQAqAtjDG5SSkiGgAUHQwxpBACgCSEH/H3FBAnRqIKABOAIAQdDDGkEAKAJIQQAoAtDDG2tB/x9xQQJ0aioCACGhAUEAIKEBQwAAAAAgoQG8QYCAgPwHcRs4AtTDG0MAAAAAQ5qZGT8goAGUkyGiASCiAUMAAAAAIKIBvEGAgID8B3EbIaMBQQAqAjBBACoC8MMblEEAKgI0QQAqAvDFN0EAKgL0xTeSlJIhpAFBACCkAUMAAAAAIKQBvEGAgID8B3EbOALswxsgPUEAKgL4wxuUID5BACoC8MU3ID9BACoC7MMblJKUkiGlAUEAIKUBQwAAAAAgpQG8QYCAgPwHcRs4AvTDG0H8wxtBACgCSEH//wFxQQJ0akPzBLU+QQAqAvTDG5RDCOU8HpI4AgBB/MMbQQAoAkhBACgCgMQja0H//wFxQQJ0aioCACCTAUOamRk/QQAqAozEJJSSkiGmAUGExCNBACgCSEH/H3FBAnRqIKYBOAIAQYTEI0EAKAJIQQAoAoTEJGtB/x9xQQJ0aioCACGnAUEAIKcBQwAAAAAgpwG8QYCAgPwHcRs4AojEJEMAAAAAQ5qZGT8gpgGUkyGoASCoAUMAAAAAIKgBvEGAgID8B3EbIakBQQAqAjBBACoCpMQklEEAKgI0QQAqAqzGN0EAKgKwxjeSlJIhqgFBACCqAUMAAAAAIKoBvEGAgID8B3EbOAKgxCQgRkEAKgKsxCSUIEdBACoCrMY3IEhBACoCoMQklJKUkiGrAUEAIKsBQwAAAAAgqwG8QYCAgPwHcRs4AqjEJEGwxCRBACgCSEH//wBxQQJ0akPzBLU+QQAqAqjEJJRDCOU8HpI4AgBBsMQkQQAoAkhBACgCtMQoa0H//wBxQQJ0aioCACCTAUOamRk/QQAqAsCEKZSSkyGsAUG4xChBACgCSEH/D3FBAnRqIKwBOAIAQbjEKEEAKAJIQQAoAriEKWtB/w9xQQJ0aioCACGtAUEAIK0BQwAAAAAgrQG8QYCAgPwHcRs4AryEKUOamRk/IKwBlCGuASCuAUMAAAAAIK4BvEGAgID8B3EbIa8BQQAqAjBBACoC2IQplEEAKgI0QQAqAvzFN0EAKgKAxjeSlJIhsAFBACCwAUMAAAAAILABvEGAgID8B3EbOALUhCkgT0EAKgLghCmUIFBBACoC/MU3IFFBACoC1IQplJKUkiGxAUEAILEBQwAAAAAgsQG8QYCAgPwHcRs4AtyEKUHkhClBACgCSEH//wBxQQJ0akPzBLU+QQAqAtyEKZRDCOU8HpI4AgBB5IQpQQAoAkhBACgC6IQta0H//wBxQQJ0aioCACCTAUOamRk/QQAqAvSELpSSkyGyAUHshC1BACgCSEH/H3FBAnRqILIBOAIAQeyELUEAKAJIQQAoAuyELmtB/x9xQQJ0aioCACGzAUEAILMBQwAAAAAgswG8QYCAgPwHcRs4AvCELkOamRk/ILIBlCG0ASC0AUMAAAAAILQBvEGAgID8B3EbIbUBQQAqAjBBACoCjIUulEEAKgI0QQAqApTGN0EAKgKYxjeSlJIhtgFBACC2AUMAAAAAILYBvEGAgID8B3EbOAKIhS4gWEEAKgKUhS6UIFlBACoClMY3IFpBACoCiIUulJKUkiG3AUEAILcBQwAAAAAgtwG8QYCAgPwHcRs4ApCFLkGYhS5BACgCSEH//wBxQQJ0akPzBLU+QQAqApCFLpRDCOU8HpI4AgAgkwFBmIUuQQAoAkhBACgCnIUya0H//wBxQQJ0aioCAJJDmpkZP0EAKgKohTOUkyG4AUGghTJBACgCSEH/H3FBAnRqILgBOAIAQaCFMkEAKAJIQQAoAqCFM2tB/x9xQQJ0aioCACG5AUEAILkBQwAAAAAguQG8QYCAgPwHcRs4AqSFM0OamRk/ILgBlCG6ASC6AUMAAAAAILoBvEGAgID8B3EbIbsBQQAqAjBBACoCwIUzlEEAKgI0QQAqAuTFN0EAKgLoxTeSlJIhvAFBACC8AUMAAAAAILwBvEGAgID8B3EbOAK8hTMgYUEAKgLIhTOUIGJBACoC5MU3IGNBACoCvIUzlJKUkiG9AUEAIL0BQwAAAAAgvQG8QYCAgPwHcRs4AsSFM0HMhTNBACgCSEH//wBxQQJ0akPzBLU+QQAqAsSFM5RDCOU8HpI4AgBBzIUzQQAoAkhBACgC0IU3a0H//wBxQQJ0aioCACCTAZJDmpkZP0EAKgLcxTeUkyG+AUHUhTdBACgCSEH/D3FBAnRqIL4BOAIAQdSFN0EAKAJIQQAoAtTFN2tB/w9xQQJ0aioCACG/AUEAIL8BQwAAAAAgvwG8QYCAgPwHcRs4AtjFN0OamRk/IL4BlCHAASDAAUMAAAAAIMABvEGAgID8B3EbIcEBIMEBILsBkiHCASCvASC1ASDCAZKSIcMBQQAqAvDCDUEAKgKkwxZBACoC2MMbQQAqAozEJEEAKgLAhClBACoC9IQuQQAqAqiFM0EAKgLcxTcglwEgnQEgowEgqQEgwwGSkpKSkpKSkpKSkpIhxAFBACDEAUMAAAAAIMQBvEGAgID8B3EbOALgxTdBACoCwIQpQQAqAvSELkEAKgKohTNBACoC3MU3IMMBkpKSkkEAKgLwwg1BACoCpMMWQQAqAtjDG0EAKgKMxCQglwEgnQEgqQEgowGSkpKSkpKSkyHFAUEAIMUBQwAAAAAgxQG8QYCAgPwHcRs4AuzFNyC1ASCvAZIhxgFBACoC2MMbQQAqAozEJEEAKgKohTNBACoC3MU3IKMBIKkBIMIBkpKSkpKSQQAqAvDCDUEAKgKkwxZBACoCwIQpQQAqAvSELiCXASCdASDGAZKSkpKSkpMhxwFBACDHAUMAAAAAIMcBvEGAgID8B3EbOAL4xTdBACoC8MINQQAqAqTDFkEAKgKohTNBACoC3MU3IJcBIJ0BIMIBkpKSkpKSQQAqAtjDG0EAKgKMxCRBACoCwIQpQQAqAvSELiCjASCpASDGAZKSkpKSkpMhyAFBACDIAUMAAAAAIMgBvEGAgID8B3EbOAKExjcgwQEgtQGSIckBILsBIK8BkiHKAUEAKgKkwxZBACoCjMQkQQAqAvSELkEAKgLcxTcgnQEgqQEgyQGSkpKSkpJBACoC8MINQQAqAtjDG0EAKgLAhClBACoCqIUzIJcBIKMBIMoBkpKSkpKSkyHLAUEAIMsBQwAAAAAgywG8QYCAgPwHcRs4ApDGN0EAKgLwwg1BACoC2MMbQQAqAvSELkEAKgLcxTcglwEgowEgyQGSkpKSkpJBACoCpMMWQQAqAozEJEEAKgLAhClBACoCqIUzIJ0BIKkBIMoBkpKSkpKSkyHMAUEAIMwBQwAAAAAgzAG8QYCAgPwHcRs4ApzGNyDBASCvAZIhzQEguwEgtQGSIc4BQQAqAvDCDUEAKgKMxCRBACoCwIQpQQAqAtzFNyCXASCpASDNAZKSkpKSkkEAKgKkwxZBACoC2MMbQQAqAvSELkEAKgKohTMgnQEgowEgzgGSkpKSkpKTIc8BQQAgzwFDAAAAACDPAbxBgICA/AdxGzgCqMY3QQAqAqTDFkEAKgLYwxtBACoCwIQpQQAqAtzFNyCdASCjASDNAZKSkpKSkkEAKgLwwg1BACoCjMQkQQAqAvSELkEAKgKohTMglwEgqQEgzgGSkpKSkpKTIdABQQAg0AFDAAAAACDQAbxBgICA/AdxGzgCtMY3QwAAAD9DAACAPyBnkyBrlCCSAZSUIdEBIAQgCmpDpHC9PkEAKgLsxTdBACoC+MU3kpQg0QGSOAIAIAUgCmog0QFDpHC9PkEAKgLsxTdBACoC+MU3k5SSOAIAQQBBACgCADYCBEEAQQAqAjg4AjxBAEEAKgJAOAJEQQBBACgCSEEBajYCSEEAQQAqAtiACDgC3IAIQQBBACoC6IAIOALsgAhBAEEAKgLwgAg4AvSACEEAQQAqAvyACDgCgIEIQQBBACoCnIEIOAKggQhBAEEAKgKogQg4AqyBCEEAQQAqArCBCDgCtIEIQQBBACoCvIEIOALAgQhBAEEAKgLIgQg4AsyBCEEAQQAoAtSBCDYC2IEIQQBBACoC4IEIOALkgQhBAEEAKgLwgQg4AvSBCEEAQQAqAviBCDgC/IEIQQBBACgCgIIINgKEgghBAEEAKAKIggg2AoyCCEEAQQAqApSCCDgCmIIIQQBBACoCnIIKOAKgggpBAEEAKgKkggo4AqiCCkEAQQAqAqyCDDgCsIIMQQBBACoCtIIMOAK4ggxBAEEAKgK8ggw4AsCCDEEAQQAqAsSCDDgCyIIMQQBBACoCzIIMOALQggxBAEEAKgLUggw4AtiCDEEAQQAqAtyCDDgC4IIMQQBBACoC7MINOALwwg1BAEEAKgKEww04AojDDUEAQQAqAozDDTgCkMMNQQBBACoCoMMWOAKkwxZBAEEAKgK4wxY4ArzDFkEAQQAqAsDDFjgCxMMWQQBBACoC1MMbOALYwxtBAEEAKgLswxs4AvDDG0EAQQAqAvTDGzgC+MMbQQBBACoCiMQkOAKMxCRBAEEAKgKgxCQ4AqTEJEEAQQAqAqjEJDgCrMQkQQBBACoCvIQpOALAhClBAEEAKgLUhCk4AtiEKUEAQQAqAtyEKTgC4IQpQQBBACoC8IQuOAL0hC5BAEEAKgKIhS44AoyFLkEAQQAqApCFLjgClIUuQQBBACoCpIUzOAKohTNBAEEAKgK8hTM4AsCFM0EAQQAqAsSFMzgCyIUzQQBBACoC2MU3OALcxTdBAEEAKgLkxTc4AujFN0EAQQAqAuDFNzgC5MU3QQBBACoC8MU3OAL0xTdBAEEAKgLsxTc4AvDFN0EAQQAqAvzFNzgCgMY3QQBBACoC+MU3OAL8xTdBAEEAKgKIxjc4AozGN0EAQQAqAoTGNzgCiMY3QQBBACoClMY3OAKYxjdBAEEAKgKQxjc4ApTGN0EAQQAqAqDGNzgCpMY3QQBBACoCnMY3OAKgxjdBAEEAKgKsxjc4ArDGN0EAQQAqAqjGNzgCrMY3QQBBACoCuMY3OAK8xjdBAEEAKgK0xjc4ArjGNyAKQQRqIQogCkEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCCA8LjoCAgAAAIAAgARAFIAAgARAOC+2egIAAAU1/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhK0EAISxBACEtQQAhLkEAIS9BACEwQQAhMUEAITJBACEzQQAhNEEAITVBACE2QQAhN0EAIThBACE5QQAhOkEAITtBACE8QQAhPUEAIT5BACE/QQAhQEEAIUFBACFCQQAhQ0EAIURBACFFQQAhRkEAIUdBACFIQQAhSUEAIUpBACFLQQAhTEEAIU1BACEBA0ACQEEAIAFBAnRqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEE4IAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEHAACADQQJ0akMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQBBADYCSEEAIQQDQAJAQcwAIARBAnRqQwAAAAA4AgAgBEEBaiEEIARBgIACSARADAIMAQsLC0EAIQUDQAJAQdiACCAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB6IAIIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHwgAggB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQfyACCAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBBnIEIIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGogQggCkECdGpDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQbCBCCALQQJ0akMAAAAAOAIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQAhDANAAkBBvIEIIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQEHIgQggDUECdGpDAAAAADgCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAQdSBCCAOQQJ0akEANgIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkBB4IEIIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEHwgQggEEECdGpDAAAAADgCACAQQQFqIRAgEEECSARADAIMAQsLC0EAIREDQAJAQfiBCCARQQJ0akMAAAAAOAIAIBFBAWohESARQQJIBEAMAgwBCwsLQQAhEgNAAkBBgIIIIBJBAnRqQQA2AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEGIggggE0ECdGpBADYCACATQQFqIRMgE0ECSARADAIMAQsLC0EAIRQDQAJAQZSCCCAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQQJIBEAMAgwBCwsLQQAhFQNAAkBBnIIIIBVBAnRqQwAAAAA4AgAgFUEBaiEVIBVBgMAASARADAIMAQsLC0EAIRYDQAJAQZyCCiAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBpIIKIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBAkgEQAwCDAELCwtBACEYA0ACQEGsggogGEECdGpDAAAAADgCACAYQQFqIRggGEGAwABIBEAMAgwBCwsLQQAhGQNAAkBBrIIMIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBAkgEQAwCDAELCwtBACEaA0ACQEG0ggwgGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQbyCDCAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQJIBEAMAgwBCwsLQQAhHANAAkBBxIIMIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBAkgEQAwCDAELCwtBACEdA0ACQEHMggwgHUECdGpDAAAAADgCACAdQQFqIR0gHUECSARADAIMAQsLC0EAIR4DQAJAQdSCDCAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBB3IIMIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQEHkggwgIEECdGpDAAAAADgCACAgQQFqISAgIEGAIEgEQAwCDAELCwtBACEhA0ACQEHogg0gIUECdGpDAAAAADgCACAhQQFqISEgIUGAEEgEQAwCDAELCwtBACEiA0ACQEHswg0gIkECdGpDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQYTDDSAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkBBjMMNICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEGUww0gJUECdGpDAAAAADgCACAlQQFqISUgJUGAgAJIBEAMAgwBCwsLQQAhJgNAAkBBnMMVICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBgCBIBEAMAgwBCwsLQQAhJwNAAkBBoMMWICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBAkgEQAwCDAELCwtBACEoA0ACQEG4wxYgKEECdGpDAAAAADgCACAoQQFqISggKEECSARADAIMAQsLC0EAISkDQAJAQcDDFiApQQJ0akMAAAAAOAIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkBByMMWICpBAnRqQwAAAAA4AgAgKkEBaiEqICpBgIABSARADAIMAQsLC0EAISsDQAJAQdDDGiArQQJ0akMAAAAAOAIAICtBAWohKyArQYAgSARADAIMAQsLC0EAISwDQAJAQdTDGyAsQQJ0akMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkBB7MMbIC1BAnRqQwAAAAA4AgAgLUEBaiEtIC1BAkgEQAwCDAELCwtBACEuA0ACQEH0wxsgLkECdGpDAAAAADgCACAuQQFqIS4gLkECSARADAIMAQsLC0EAIS8DQAJAQfzDGyAvQQJ0akMAAAAAOAIAIC9BAWohLyAvQYCAAkgEQAwCDAELCwtBACEwA0ACQEGExCMgMEECdGpDAAAAADgCACAwQQFqITAgMEGAIEgEQAwCDAELCwtBACExA0ACQEGIxCQgMUECdGpDAAAAADgCACAxQQFqITEgMUECSARADAIMAQsLC0EAITIDQAJAQaDEJCAyQQJ0akMAAAAAOAIAIDJBAWohMiAyQQJIBEAMAgwBCwsLQQAhMwNAAkBBqMQkIDNBAnRqQwAAAAA4AgAgM0EBaiEzIDNBAkgEQAwCDAELCwtBACE0A0ACQEGwxCQgNEECdGpDAAAAADgCACA0QQFqITQgNEGAgAFIBEAMAgwBCwsLQQAhNQNAAkBBuMQoIDVBAnRqQwAAAAA4AgAgNUEBaiE1IDVBgBBIBEAMAgwBCwsLQQAhNgNAAkBBvIQpIDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBAkgEQAwCDAELCwtBACE3A0ACQEHUhCkgN0ECdGpDAAAAADgCACA3QQFqITcgN0ECSARADAIMAQsLC0EAITgDQAJAQdyEKSA4QQJ0akMAAAAAOAIAIDhBAWohOCA4QQJIBEAMAgwBCwsLQQAhOQNAAkBB5IQpIDlBAnRqQwAAAAA4AgAgOUEBaiE5IDlBgIABSARADAIMAQsLC0EAIToDQAJAQeyELSA6QQJ0akMAAAAAOAIAIDpBAWohOiA6QYAgSARADAIMAQsLC0EAITsDQAJAQfCELiA7QQJ0akMAAAAAOAIAIDtBAWohOyA7QQJIBEAMAgwBCwsLQQAhPANAAkBBiIUuIDxBAnRqQwAAAAA4AgAgPEEBaiE8IDxBAkgEQAwCDAELCwtBACE9A0ACQEGQhS4gPUECdGpDAAAAADgCACA9QQFqIT0gPUECSARADAIMAQsLC0EAIT4DQAJAQZiFLiA+QQJ0akMAAAAAOAIAID5BAWohPiA+QYCAAUgEQAwCDAELCwtBACE/A0ACQEGghTIgP0ECdGpDAAAAADgCACA/QQFqIT8gP0GAIEgEQAwCDAELCwtBACFAA0ACQEGkhTMgQEECdGpDAAAAADgCACBAQQFqIUAgQEECSARADAIMAQsLC0EAIUEDQAJAQbyFMyBBQQJ0akMAAAAAOAIAIEFBAWohQSBBQQJIBEAMAgwBCwsLQQAhQgNAAkBBxIUzIEJBAnRqQwAAAAA4AgAgQkEBaiFCIEJBAkgEQAwCDAELCwtBACFDA0ACQEHMhTMgQ0ECdGpDAAAAADgCACBDQQFqIUMgQ0GAgAFIBEAMAgwBCwsLQQAhRANAAkBB1IU3IERBAnRqQwAAAAA4AgAgREEBaiFEIERBgBBIBEAMAgwBCwsLQQAhRQNAAkBB2MU3IEVBAnRqQwAAAAA4AgAgRUEBaiFFIEVBAkgEQAwCDAELCwtBACFGA0ACQEHgxTcgRkECdGpDAAAAADgCACBGQQFqIUYgRkEDSARADAIMAQsLC0EAIUcDQAJAQezFNyBHQQJ0akMAAAAAOAIAIEdBAWohRyBHQQNIBEAMAgwBCwsLQQAhSANAAkBB+MU3IEhBAnRqQwAAAAA4AgAgSEEBaiFIIEhBA0gEQAwCDAELCwtBACFJA0ACQEGExjcgSUECdGpDAAAAADgCACBJQQFqIUkgSUEDSARADAIMAQsLC0EAIUoDQAJAQZDGNyBKQQJ0akMAAAAAOAIAIEpBAWohSiBKQQNIBEAMAgwBCwsLQQAhSwNAAkBBnMY3IEtBAnRqQwAAAAA4AgAgS0EBaiFLIEtBA0gEQAwCDAELCwtBACFMA0ACQEGoxjcgTEECdGpDAAAAADgCACBMQQFqIUwgTEEDSARADAIMAQsLC0EAIU0DQAJAQbTGNyBNQQJ0akMAAAAAOAIAIE1BAWohTSBNQQNIBEAMAgwBCwsLC4yPgIAAAEEAIAE2AghBAEMAgDtIQwAAgD9BACgCCLKXljgCDEEAQx1DE0dBACoCDJUQADgCEEEAQ1JFYT5BACoCDJRDAAAAP5KOOAIUQQBDAAAAAENVDN1AQQAqAhSUk0EAKgIMlTgCGEEAQwAAAD9BACoCGJQ4AhxBAEOrqqo+QQAqAhiUOAIkQQBDAACAP0NjFB1EQQAqAgyVEASVOAIoQQBBACoCKEMAAIA/kjgCLEEAQwAAAABDAACAP0EAKgIok0EAKgIslZM4AjBBAEMAAIA/QQAqAiyVOAI0QQBD1qecPEEAKgIMlEMAAAA/ko44AsyACEEAQwAAgEZDAAAAAEEAKgIUQQAqAsyACJOXlqg2AtCACEEAQ83MzD1BACoCDJQ4AuSACEEAQwAAIEFBACoCDJU4AviACEEAQwAAgD9DfFnERUEAKgIMlRAElTgChIEIQQBBACoChIEIQwAAgD+SOAKIgQhBAEMAAAAAQwAAgD9BACoChIEIk0EAKgKIgQiVkzgCjIEIQQBDAACAP0EAKgKIgQiVOAKQgQhBAEMAAAA/QQAqAgyUOAKUgQhBAEOamZk+QQAqAgyUOAK4gQhBAEMAAKBAQQAqAgyVOALEgQhBAEMAAABAQQAqAgyVOALQgQhBAEPbD8lAQQAqAgyVOALogQhBAEMAAIA/QwAAgD9DAFDDR0MAAKBAQQAqAgyVEAKVkzgCkIIIQQBDAAAARkMAAAAAQwrXozxBACoCDJSXlqg2AuSCDUEAQwAAgERDAAAAAEEAKgLMgAhDAACAv5KXlqg2AujCDUEAQziHgz5BACoCDJRDAAAAP5KOOAL0wg1BAEMAAAAAQ1UM3UBBACoC9MINlJNBACoCDJU4AvjCDUEAQwAAAD9BACoC+MINlDgC/MINQQBDq6qqPkEAKgL4wg2UOAKAww1BAEN16d88QQAqAgyUQwAAAD+SjjgClMMVQQBDAACARkMAAAAAQQAqAvTCDUEAKgKUwxWTl5aoNgKYwxVBAEMAAABFQwAAAABBACoClMMVQwAAgL+Sl5aoNgKcwxZBAEMU60Q+QQAqAgyUQwAAAD+SjjgCqMMWQQBDAAAAAENVDN1AQQAqAqjDFpSTQQAqAgyVOAKswxZBAEMAAAA/QQAqAqzDFpQ4ArDDFkEAQ6uqqj5BACoCrMMWlDgCtMMWQQBDrvPvPEEAKgIMlEMAAAA/ko44AsjDGkEAQwAAAEZDAAAAAEEAKgKowxZBACoCyMMak5eWqDYCzMMaQQBDAAAARUMAAAAAQQAqAsjDGkMAAIC/kpeWqDYC0MMbQQBDN3BXPkEAKgIMlEMAAAA/ko44AtzDG0EAQwAAAABDVQzdQEEAKgLcwxuUk0EAKgIMlTgC4MMbQQBDAAAAP0EAKgLgwxuUOALkwxtBAEOrqqo+QQAqAuDDG5Q4AujDG0EAQ40OyDxBACoCDJRDAAAAP5KOOAL8wyNBAEMAAIBGQwAAAABBACoC3MMbQQAqAvzDI5OXlqg2AoDEI0EAQwAAAEVDAAAAAEEAKgL8wyNDAACAv5KXlqg2AoTEJEEAQwAAAD5BACoCDJRDAAAAP5KOOAKQxCRBAEMAAAAAQ1UM3UBBACoCkMQklJNBACoCDJU4ApTEJEEAQwAAAD9BACoClMQklDgCmMQkQQBDq6qqPkEAKgKUxCSUOAKcxCRBAEPxflw8QQAqAgyUQwAAAD+SjjgCsMQoQQBDAAAARkMAAAAAQQAqApDEJEEAKgKwxCiTl5aoNgK0xChBAEMAAIBEQwAAAABBACoCsMQoQwAAgL+Sl5aoNgK4hClBAEO05wI+QQAqAgyUQwAAAD+SjjgCxIQpQQBDAAAAAENVDN1AQQAqAsSEKZSTQQAqAgyVOALIhClBAEMAAAA/QQAqAsiEKZQ4AsyEKUEAQ6uqqj5BACoCyIQplDgC0IQpQQBDMnMBPUEAKgIMlEMAAAA/ko44AuSELUEAQwAAAEZDAAAAAEEAKgLEhClBACoC5IQtk5eWqDYC6IQtQQBDAAAARUMAAAAAQQAqAuSELUMAAIC/kpeWqDYC7IQuQQBD9+cyPkEAKgIMlEMAAAA/ko44AviELkEAQwAAAABDVQzdQEEAKgL4hC6Uk0EAKgIMlTgC/IQuQQBDAAAAP0EAKgL8hC6UOAKAhS5BAEOrqqo+QQAqAvyELpQ4AoSFLkEAQyuhuzxBACoCDJRDAAAAP5KOOAKYhTJBAEMAAABGQwAAAABBACoC+IQuQQAqApiFMpOXlqg2ApyFMkEAQwAAAEVDAAAAAEEAKgKYhTJDAACAv5KXlqg2AqCFM0EAQ9nNHD5BACoCDJRDAAAAP5KOOAKshTNBAEMAAAAAQ1UM3UBBACoCrIUzlJNBACoCDJU4ArCFM0EAQwAAAD9BACoCsIUzlDgCtIUzQQBDq6qqPkEAKgKwhTOUOAK4hTNBAEOorKY8QQAqAgyUQwAAAD+SjjgCzIU3QQBDAAAARkMAAAAAQQAqAqyFM0EAKgLMhTeTl5aoNgLQhTdBAEMAAIBEQwAAAABBACoCzIU3QwAAgL+Sl5aoNgLUxTcLkICAgAAAIAAgARANIAAQDyAAEAwL1ICAgAAAQQBD7FE4PzgCIEEAQ83MTD44AtSACEEAQwAAAAA4AuCACEEAQwAA3EM4ApiBCEEAQ4/CdT84AqSBCEEAQwrXozw4AtyBCEEAQwAAgEA4AuyBCAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvQmICAAAEAQQALyRh7Im5hbWUiOiJGbHV0ZSIsInZlcnNpb24iOiIyLjQuMTIiLCJvcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjkxMDE0NCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIEZsdXRlIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNjgiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjI0IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNDQwIiwibWluIjoiMjQ3IiwibWF4IjoiMTIwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0ZsdXRlL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzEyMzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOTYiLCJtaW4iOiIwLjIiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0ZsdXRlL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMjkyIiwibWV0YSI6W3siMyI6IiJ9LHsiYWNjIjoiMiAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMC4wMSIsIm1heCI6IjAuMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVmlicmF0byBGcmVxIChWaWJyYXRvIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvVmlicmF0b19GcmVxXyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMzA4IiwibWV0YSI6W3siNCI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjUiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvRmx1dGUvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAxIC0zMCAwIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjcyIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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
faust.Flute_instance = null;

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
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        FluteProcessor.parse_ui(JSON.parse(getJSONFlute()).ui, params, FluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONFlute());
        
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
        
        this.factory = faust.Flute_instance.exports;
        this.HEAP = faust.Flute_instance.exports.memory.buffer;
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
            FluteProcessor.parse_ui(this.json_object.ui, this, FluteProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeFlute()), faust.importObject)
            .then(dsp_module => {
                  faust.Flute_instance = dsp_module.instance;
                  registerProcessor('Flute', FluteProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Flute cannot be loaded or compiled"); });
