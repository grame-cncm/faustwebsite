
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"860880\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32964\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQKzgICAAAUDZW52A2NvcwACA2VudgNleHAAAwNlbnYDcG93AA8DZW52A3NpbgARA2VudgN0YW4AEgOPgICAAA4AAQQFBgcICQoLDA0OEAWHgICAAAEAkICAgAAHuoGAgAAMB2NvbXB1dGUABgxnZXROdW1JbnB1dHMABw1nZXROdW1PdXRwdXRzAAgNZ2V0UGFyYW1WYWx1ZQAJDWdldFNhbXBsZVJhdGUACgRpbml0AAsNaW5zdGFuY2VDbGVhcgAMEWluc3RhbmNlQ29uc3RhbnRzAA0MaW5zdGFuY2VJbml0AA4aaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADw1zZXRQYXJhbVZhbHVlABIGbWVtb3J5AgAKuuiAgAAOgoCAgAAAC4K/gIAAAgx/nwF9QQAhBEMAAAAAIRBDAAAAACERQQAhBUEAIQZBACEHQwAAAAAhEkMAAAAAIRNDAAAAACEUQwAAAAAhFUMAAAAAIRZBACEIQwAAAAAhF0MAAAAAIRhDAAAAACEZQwAAAAAhGkMAAAAAIRtDAAAAACEcQwAAAAAhHUMAAAAAIR5DAAAAACEfQwAAAAAhIEMAAAAAISFDAAAAACEiQwAAAAAhI0MAAAAAISRDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSkMAAAAAIUtDAAAAACFMQwAAAAAhTUMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFDAAAAACFSQwAAAAAhU0MAAAAAIVRDAAAAACFVQwAAAAAhVkMAAAAAIVdDAAAAACFYQwAAAAAhWUMAAAAAIVpDAAAAACFbQwAAAAAhXEMAAAAAIV1DAAAAACFeQwAAAAAhX0EAIQlDAAAAACFgQwAAAAAhYUEAIQpDAAAAACFiQQAhC0EAIQxBACENQwAAAAAhY0MAAAAAIWRDAAAAACFlQQAhDkMAAAAAIWZDAAAAACFnQwAAAAAhaEEAIQ9DAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQwAAAAAhcEMAAAAAIXFDAAAAACFyQwAAAAAhc0MAAAAAIXRDAAAAACF1QwAAAAAhdkMAAAAAIXdDAAAAACF4QwAAAAAheUMAAAAAIXpDAAAAACF7QwAAAAAhfEMAAAAAIX1DAAAAACF+QwAAAAAhf0MAAAAAIYABQwAAAAAhgQFDAAAAACGCAUMAAAAAIYMBQwAAAAAhhAFDAAAAACGFAUMAAAAAIYYBQwAAAAAhhwFDAAAAACGIAUMAAAAAIYkBQwAAAAAhigFDAAAAACGLAUMAAAAAIYwBQwAAAAAhjQFDAAAAACGOAUMAAAAAIY8BQwAAAAAhkAFDAAAAACGRAUMAAAAAIZIBQwAAAAAhkwFDAAAAACGUAUMAAAAAIZUBQwAAAAAhlgFDAAAAACGXAUMAAAAAIZgBQwAAAAAhmQFDAAAAACGaAUMAAAAAIZsBQwAAAAAhnAFDAAAAACGdAUMAAAAAIZ4BQwAAAAAhnwFDAAAAACGgAUMAAAAAIaEBQwAAAAAhogFDAAAAACGjAUMAAAAAIaQBQwAAAAAhpQFDAAAAACGmAUMAAAAAIacBQwAAAAAhqAFDAAAAACGpAUMAAAAAIaoBQwAAAAAhqwFDAAAAACGsAUMAAAAAIa0BQwAAAAAhrgEgA0EAaigCACEEQ28SgzpBACoCDJQhEEEAKgIgIREgEUMAAAAAXiEFIAVBAEohBiARQwAAAABbQQBKIQdBACoCQCARQwAAgL+SlCESQQAqAlRBACoCWJQhEyATEAMhFCATEAAhFUMAAAAAIBSTIRYgEUMAAAAAXyEIQ83MTD1DmpnZP0EAKgLEgQKWlyEXQQAqAsCBAiAXlRABIRggGEMAAABAEAIhGUMAAIA/QQAqArSBAiAZlJMhGkMAAIA/IBmTIRsgGiAblSEcQwAAAAAgGkMAAABAEAIgG0MAAABAEAKVQwAAgL+Sl5EhHSAcIB2TIR4gGCAdQwAAgD8gHJOSlCEfQQAqAsiBAiAXlRABIBiVQwAAgL+SISBBACoCjMIKIBeVEAEhISAhQwAAAEAQAiEiQwAAgD9BACoCtIECICKUkyEjQwAAgD8gIpMhJCAjICSVISVDAAAAACAjQwAAAEAQAiAkQwAAAEAQApVDAACAv5KXkSEmICUgJpMhJyAhICZDAACAPyAlk5KUIShBACoCkMIKIBeVEAEgIZVDAACAv5IhKUEAKgLAwg8gF5UQASEqICpDAAAAQBACIStDAACAP0EAKgK0gQIgK5STISxDAACAPyArkyEtICwgLZUhLkMAAAAAICxDAAAAQBACIC1DAAAAQBAClUMAAIC/kpeRIS8gLiAvkyEwICogL0MAAIA/IC6TkpQhMUEAKgLEwg8gF5UQASAqlUMAAIC/kiEyQQAqAvTCGCAXlRABITMgM0MAAABAEAIhNEMAAIA/QQAqArSBAiA0lJMhNUMAAIA/IDSTITYgNSA2lSE3QwAAAAAgNUMAAABAEAIgNkMAAABAEAKVQwAAgL+Sl5EhOCA3IDiTITkgMyA4QwAAgD8gN5OSlCE6QQAqAvjCGCAXlRABIDOVQwAAgL+SITtBACoCqIMdIBeVEAEhPCA8QwAAAEAQAiE9QwAAgD9BACoCtIECID2UkyE+QwAAgD8gPZMhPyA+ID+VIUBDAAAAACA+QwAAAEAQAiA/QwAAAEAQApVDAACAv5KXkSFBIEAgQZMhQiA8IEFDAACAPyBAk5KUIUNBACoCrIMdIBeVEAEgPJVDAACAv5IhREEAKgLcgyIgF5UQASFFIEVDAAAAQBACIUZDAACAP0EAKgK0gQIgRpSTIUdDAACAPyBGkyFIIEcgSJUhSUMAAAAAIEdDAAAAQBACIEhDAAAAQBAClUMAAIC/kpeRIUogSSBKkyFLIEUgSkMAAIA/IEmTkpQhTEEAKgLggyIgF5UQASBFlUMAAIC/kiFNQQAqApCEJyAXlRABIU4gTkMAAABAEAIhT0MAAIA/QQAqArSBAiBPlJMhUEMAAIA/IE+TIVEgUCBRlSFSQwAAAAAgUEMAAABAEAIgUUMAAABAEAKVQwAAgL+Sl5EhUyBSIFOTIVQgTiBTQwAAgD8gUpOSlCFVQQAqApSEJyAXlRABIE6VQwAAgL+SIVZBACoCxMQrIBeVEAEhVyBXQwAAAEAQAiFYQwAAgD9BACoCtIECIFiUkyFZQwAAgD8gWJMhWkMAAAAAIFlDAAAAQBACIFpDAAAAQBAClUMAAIC/kpeRIVsgWSBalSFcIFtDAACAPyBck5IgV5QhXUEAKgLIxCsgF5UQASBXlUMAAIC/kiFeIFwgW5MhX0EAIQkDQAJAQQBBATYCECAQQ3e+fz9BACoCHJSSIWBBACBgQwAAAAAgYLxBgICA/AdxGzgCGEP6fgo/QQAqAghBACoCGJVDAABAQJKUIWEgYaghCiBhjiFiIApBAWohCyAKQQBBACAKSBshDCALQQBBACALSBshDUG0AUEAKAKwAUGBICAMQYEgIAxIG0EBamtB/z9xQQJ0aioCACBiQwAAgD8gYZOSlCBhIGKTQbQBQQAoArABQYEgIA1BgSAgDUgbQQFqa0H/P3FBAnRqKgIAlJIhY0MAAAAAQQAqAiRBACoCLEMAAIA/kpYgBhshZEEAIGRDAAAAACBkvEGAgID8B3EbOAIoQwAAAABBACoCMEEAKgI4QwAAgD+SliAHGyFlQQAgZUMAAAAAIGW8QYCAgPwHcRs4AjRBACoCNEEAKgI8XSEOIAWyQwAAAABBACoCREEAKgI0lEMAAIA/IA4bQQAqAjRDAAAAAF0bIBJBACoCNEEAKgI8k5RDAACAP5IgEUEAKgI0QQAqAjBdGyAOG5RBACoCTCAFGyFmQQAgZkMAAAAAIGa8QYCAgPwHcRs4AkggFEEAKgJolCAVQQAqAmCUkiFnQQAgZ0MAAAAAIGe8QYCAgPwHcRs4AlwgFUEAKgJolCAWQQAqAmCUkkEBQQAoAhRrspIhaEEAIGhDAAAAACBovEGAgID8B3EbOAJkQQAgBUEAKAJwQQAqAowBQwAAgD9gcnE2AmxBACAFQQAoAnhBAWpsNgJ0IAhBACoCjAFDAAAAAF5xIQ9BACoCfEEAKAJwQQBGIAVxQQAqAowBQwAAgD9dcUEAKAJ4skEAKgKAAV5xQQFBACgCeLJBACoCgAFda2yylEEAKgKMAUMAAIA/QQAqAoQBIA+ylJOUkiAPQQBGQQAqAowBQ703hjVgcrKUIWlBACBpQwAAAAAgabxBgICA/AdxGzgCiAFBACoCSEEAKgJIQQAqAlBBACoCKEMAAAAAQQAqAkiTlJSSQwAAAABBACoCKEEAKgIkXRtBACoCKEMAAAAAXRtDzcxMPUEAKgJcQQAqAogBlJSSIWpDj8L1PEOamZk+IGqUQ5qZWT8gY5STlEEAKgKYAUMAAAAAQ2Q7/z9BACoCkAFBACoCGJQQAJSTlENgd34/QQAqApwBlJKTIWtBACBrQwAAAAAga7xBgICA/AdxGzgClAFBACoClAFDAAAAQBACIWwgbEMAAIA/XrIgbCBsQwAAgD9fspSSIW1DmplZPyBjQwAAgD8gbZOUlCFuQ5qZmT4gaiBtlJQhb0EAIG8gbpI4AqABIG5DUrh+P0EAKgKsAZQgb5KSQQAqAqQBkyFwQQAgcEMAAAAAIHC8QYCAgPwHcRs4AqgBQQAqAqgBIXFBtAFBACgCsAFB/z9xQQJ0aiBxQwAAAAAgcbxBgICA/AdxGzgCAEEAKgLUgQJBACoC4IEClEEAKgLYgQJBACoCyMU0QQAqAszFNJKUkiFyQQAgckMAAAAAIHK8QYCAgPwHcRs4AtyBAiAeQQAqAuiBApQgH0EAKgLIxTQgIEEAKgLcgQKUkpSSIXNBACBzQwAAAAAgc7xBgICA/AdxGzgC5IECQeyBAkEAKAKwAUH//wFxQQJ0akPzBLU+QQAqAuSBApRDCOU8HpI4AgBDj8L1PkG0AUEAKAKwAUEAKAL0gQprQf8/cUECdGoqAgCUIXRDmpkZP0EAKgKAwgqUQeyBAkEAKAKwAUEAKALwgQprQf//AXFBAnRqKgIAkiB0kyF1QfiBCkEAKAKwAUH/D3FBAnRqIHU4AgBB+IEKQQAoArABQQAoAvjBCmtB/w9xQQJ0aioCACF2QQAgdkMAAAAAIHa8QYCAgPwHcRs4AvzBCkMAAAAAQ5qZGT8gdZSTIXcgd0MAAAAAIHe8QYCAgPwHcRsheEEAKgLUgQJBACoCmMIKlEEAKgLYgQJBACoCsMU0QQAqArTFNJKUkiF5QQAgeUMAAAAAIHm8QYCAgPwHcRs4ApTCCiAnQQAqAqDCCpQgKEEAKgKwxTQgKUEAKgKUwgqUkpSSIXpBACB6QwAAAAAgerxBgICA/AdxGzgCnMIKQaTCCkEAKAKwAUH//wBxQQJ0akPzBLU+QQAqApzCCpRDCOU8HpI4AgBDmpkZP0EAKgK0wg+UQaTCCkEAKAKwAUEAKAKowg5rQf//AHFBAnRqKgIAkiB0kiF7QazCDkEAKAKwAUH/H3FBAnRqIHs4AgBBrMIOQQAoArABQQAoAqzCD2tB/x9xQQJ0aioCACF8QQAgfEMAAAAAIHy8QYCAgPwHcRs4ArDCD0MAAAAAQ5qZGT8ge5STIX0gfUMAAAAAIH28QYCAgPwHcRshfkEAKgLUgQJBACoCzMIPlEEAKgLYgQJBACoCmMU0QQAqApzFNJKUkiF/QQAgf0MAAAAAIH+8QYCAgPwHcRs4AsjCDyAwQQAqAtTCD5QgMUEAKgKYxTQgMkEAKgLIwg+UkpSSIYABQQAggAFDAAAAACCAAbxBgICA/AdxGzgC0MIPQdjCD0EAKAKwAUH//wFxQQJ0akPzBLU+QQAqAtDCD5RDCOU8HpI4AgBDmpkZP0EAKgLowhiUQdjCD0EAKAKwAUEAKALcwhdrQf//AXFBAnRqKgIAkiB0kyGBAUHgwhdBACgCsAFB/x9xQQJ0aiCBATgCAEHgwhdBACgCsAFBACgC4MIYa0H/H3FBAnRqKgIAIYIBQQAgggFDAAAAACCCAbxBgICA/AdxGzgC5MIYQwAAAABDmpkZPyCBAZSTIYMBIIMBQwAAAAAggwG8QYCAgPwHcRshhAFBACoCtMIPQQAqAujCGJIhhQFBACoCgMIKIIUBkiGGAUEAKgLUgQJBACoCgMMYlEEAKgLYgQJBACoC9MQ0QQAqAvjENJKUkiGHAUEAIIcBQwAAAAAghwG8QYCAgPwHcRs4AvzCGCA5QQAqAojDGJQgOkEAKgL0xDQgO0EAKgL8whiUkpSSIYgBQQAgiAFDAAAAACCIAbxBgICA/AdxGzgChMMYQYzDGEEAKAKwAUH//wBxQQJ0akPzBLU+QQAqAoTDGJRDCOU8HpI4AgBBjMMYQQAoArABQQAoApDDHGtB//8AcUECdGoqAgAgdJJDmpkZP0EAKgKcgx2UkyGJAUGUwxxBACgCsAFB/w9xQQJ0aiCJATgCAEGUwxxBACgCsAFBACgClIMda0H/D3FBAnRqKgIAIYoBQQAgigFDAAAAACCKAbxBgICA/AdxGzgCmIMdQ5qZGT8giQGUIYsBIIsBQwAAAAAgiwG8QYCAgPwHcRshjAFBACoC1IECQQAqArSDHZRBACoC2IECQQAqAqTFNEEAKgKoxTSSlJIhjQFBACCNAUMAAAAAII0BvEGAgID8B3EbOAKwgx0gQkEAKgK8gx2UIENBACoCpMU0IERBACoCsIMdlJKUkiGOAUEAII4BQwAAAAAgjgG8QYCAgPwHcRs4AriDHUHAgx1BACgCsAFB//8AcUECdGpD8wS1PkEAKgK4gx2UQwjlPB6SOAIAIHRBwIMdQQAoArABQQAoAsSDIWtB//8AcUECdGoqAgCSQ5qZGT9BACoC0IMilJMhjwFByIMhQQAoArABQf8fcUECdGogjwE4AgBByIMhQQAoArABQQAoAsiDImtB/x9xQQJ0aioCACGQAUEAIJABQwAAAAAgkAG8QYCAgPwHcRs4AsyDIkOamRk/II8BlCGRASCRAUMAAAAAIJEBvEGAgID8B3EbIZIBQQAqAtSBAkEAKgLogyKUQQAqAtiBAkEAKgKMxTRBACoCkMU0kpSSIZMBQQAgkwFDAAAAACCTAbxBgICA/AdxGzgC5IMiIEtBACoC8IMilCBMQQAqAozFNCBNQQAqAuSDIpSSlJIhlAFBACCUAUMAAAAAIJQBvEGAgID8B3EbOALsgyJB9IMiQQAoArABQf//AHFBAnRqQ/MEtT5BACoC7IMilEMI5TwekjgCAEH0gyJBACgCsAFBACgC+IMma0H//wBxQQJ0aioCACB0Q5qZGT9BACoChIQnlJKTIZUBQfyDJkEAKAKwAUH/H3FBAnRqIJUBOAIAQfyDJkEAKAKwAUEAKAL8gydrQf8fcUECdGoqAgAhlgFBACCWAUMAAAAAIJYBvEGAgID8B3EbOAKAhCdDmpkZPyCVAZQhlwEglwFDAAAAACCXAbxBgICA/AdxGyGYAUEAKgLUgQJBACoCnIQnlEEAKgLYgQJBACoCvMU0QQAqAsDFNJKUkiGZAUEAIJkBQwAAAAAgmQG8QYCAgPwHcRs4ApiEJyBUQQAqAqSEJ5QgVUEAKgK8xTQgVkEAKgKYhCeUkpSSIZoBQQAgmgFDAAAAACCaAbxBgICA/AdxGzgCoIQnQaiEJ0EAKAKwAUH//wBxQQJ0akPzBLU+QQAqAqCEJ5RDCOU8HpI4AgBBqIQnQQAoArABQQAoAqyEK2tB//8AcUECdGoqAgAgdEOamRk/QQAqArjEK5SSkyGbAUGwhCtBACgCsAFB/w9xQQJ0aiCbATgCAEGwhCtBACgCsAFBACgCsMQra0H/D3FBAnRqKgIAIZwBQQAgnAFDAAAAACCcAbxBgICA/AdxGzgCtMQrQ5qZGT8gmwGUIZ0BIJ0BQwAAAAAgnQG8QYCAgPwHcRshngFBACoC1IECQQAqAtDEK5RBACoC2IECQQAqAoDFNEEAKgKExTSSlJIhnwFBACCfAUMAAAAAIJ8BvEGAgID8B3EbOALMxCsgXUEAKgKAxTQgXkEAKgLMxCuUkpQgX0EAKgLYxCuUkiGgAUEAIKABQwAAAAAgoAG8QYCAgPwHcRs4AtTEK0HcxCtBACgCsAFB//8BcUECdGpD8wS1PkEAKgLUxCuUQwjlPB6SOAIAQdzEK0EAKAKwAUEAKALgxDNrQf//AXFBAnRqKgIAIHSSQ5qZGT9BACoC7MQ0lJIhoQFB5MQzQQAoArABQf8fcUECdGogoQE4AgBB5MQzQQAoArABQQAoAuTENGtB/x9xQQJ0aioCACGiAUEAIKIBQwAAAAAgogG8QYCAgPwHcRs4AujENEMAAAAAQ5qZGT8goQGUkyGjASCjAUMAAAAAIKMBvEGAgID8B3EbIaQBIIYBIIwBkiCSAZIgmAGSIJ4BkiCkAZIgfpIghAGSIHiSQQAqApyDHZJBACoC0IMikkEAKgKEhCeSQQAqArjEK5JBACoC7MQ0kiGlAUEAIKUBQwAAAAAgpQG8QYCAgPwHcRs4AvDENEEAKgK4xCtBACoChIQnQQAqAtCDIkEAKgKcgx0gngEgmAEgjAEgkgGSkpKSkpKSIIYBIKQBkiB+kiCEAZIgeJJBACoC7MQ0kpMhpgFBACCmAUMAAAAAIKYBvEGAgID8B3EbOAL8xDRBACoC6MIYQQAqAoDCCpIhpwFBACoCtMIPIIwBkiCSAZIgpAGSIH6SQQAqApyDHZJBACoC0IMikkEAKgLsxDSSIKcBIJgBkiCeAZIghAGSIHiSQQAqAoSEJ5JBACoCuMQrkpMhqAFBACCoAUMAAAAAIKgBvEGAgID8B3EbOAKIxTQgpwEgjAGSIJIBkiCEAZIgeJJBACoCnIMdkkEAKgLQgyKSQQAqArTCDyCYAZIgngGSIKQBkiB+kkEAKgKEhCeSQQAqArjEK5JBACoC7MQ0kpMhqQFBACCpAUMAAAAAIKkBvEGAgID8B3EbOAKUxTRBACoCtMIPQQAqAoDCCpIhqgFBACoC6MIYIIwBkiCYAZIgpAGSIIQBkkEAKgKcgx2SQQAqAoSEJ5JBACoC7MQ0kiCqASCSAZIgngGSIH6SIHiSQQAqAtCDIpJBACoCuMQrkpMhqwFBACCrAUMAAAAAIKsBvEGAgID8B3EbOAKgxTQgqgEgjAGSIJgBkiB+kiB4kkEAKgKcgx2SQQAqAoSEJ5JBACoC6MIYIJIBkiCeAZIgpAGSIIQBkkEAKgLQgyKSQQAqArjEK5JBACoC7MQ0kpMhrAFBACCsAUMAAAAAIKwBvEGAgID8B3EbOAKsxTRBACoCgMIKIIwBkiCeAZIgpAGSIHiSQQAqApyDHZJBACoCuMQrkkEAKgLsxDSSIIUBIJIBkiCYAZIgfpIghAGSQQAqAtCDIpJBACoChIQnkpMhrQFBACCtAUMAAAAAIK0BvEGAgID8B3EbOAK4xTQghQEgjAGSIJ4BkiB+kiCEAZJBACoCnIMdkkEAKgK4xCuSQQAqAoDCCiCSAZIgmAGSIKQBkiB4kkEAKgLQgyKSQQAqAoSEJ5JBACoC7MQ0kpMhrgFBACCuAUMAAAAAIK4BvEGAgID8B3EbOALExTQgBCAJakPNzExAQbQBQQAoArABQQBrQf8/cUECdGoqAgCUQ6RwvT5BACoC/MQ0QQAqAojFNJJBACoC/MQ0QQAqAojFNJOSlJI4AgBBAEEAKAIQNgIUQQBBACoCGDgCHEEAQQAqAig4AixBAEEAKgI0OAI4QQBBACoCSDgCTEEAQQAqAlw4AmBBAEEAKgJkOAJoQQBBACgCbDYCcEEAQQAoAnQ2AnhBAEEAKgKIATgCjAFBAEEAKgKYATgCnAFBAEEAKgKUATgCmAFBAEEAKgKgATgCpAFBAEEAKgKoATgCrAFBAEEAKAKwAUEBajYCsAFBAEEAKgLcgQI4AuCBAkEAQQAqAuSBAjgC6IECQQBBACoC/MEKOAKAwgpBAEEAKgKUwgo4ApjCCkEAQQAqApzCCjgCoMIKQQBBACoCsMIPOAK0wg9BAEEAKgLIwg84AszCD0EAQQAqAtDCDzgC1MIPQQBBACoC5MIYOALowhhBAEEAKgL8whg4AoDDGEEAQQAqAoTDGDgCiMMYQQBBACoCmIMdOAKcgx1BAEEAKgKwgx04ArSDHUEAQQAqAriDHTgCvIMdQQBBACoCzIMiOALQgyJBAEEAKgLkgyI4AuiDIkEAQQAqAuyDIjgC8IMiQQBBACoCgIQnOAKEhCdBAEEAKgKYhCc4ApyEJ0EAQQAqAqCEJzgCpIQnQQBBACoCtMQrOAK4xCtBAEEAKgLMxCs4AtDEK0EAQQAqAtTEKzgC2MQrQQBBACoC6MQ0OALsxDRBAEEAKgL0xDQ4AvjENEEAQQAqAvDENDgC9MQ0QQBBACoCgMU0OAKExTRBAEEAKgL8xDQ4AoDFNEEAQQAqAozFNDgCkMU0QQBBACoCiMU0OAKMxTRBAEEAKgKYxTQ4ApzFNEEAQQAqApTFNDgCmMU0QQBBACoCpMU0OAKoxTRBAEEAKgKgxTQ4AqTFNEEAQQAqArDFNDgCtMU0QQBBACoCrMU0OAKwxTRBAEEAKgK8xTQ4AsDFNEEAQQAqArjFNDgCvMU0QQBBACoCyMU0OALMxTRBAEEAKgLExTQ4AsjFNCAJQQRqIQkgCUEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQEPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARAFIAAgARAOC+WYgIAAAT5/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhK0EAISxBACEtQQAhLkEAIS9BACEwQQAhMUEAITJBACEzQQAhNEEAITVBACE2QQAhN0EAIThBACE5QQAhOkEAITtBACE8QQAhPUEAIT5BACEBA0ACQEEQIAFBAnRqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEEYIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEEoIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEE0IARBAnRqQwAAAAA4AgAgBEEBaiEEIARBAkgEQAwCDAELCwtBACEFA0ACQEHIACAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB3AAgBkECdGpDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQeQAIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBAkgEQAwCDAELCwtBACEIA0ACQEHsACAIQQJ0akEANgIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBB9AAgCUECdGpBADYCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQYgBIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGUASALQQJ0akMAAAAAOAIAIAtBAWohCyALQQNIBEAMAgwBCwsLQQAhDANAAkBBoAEgDEECdGpDAAAAADgCACAMQQFqIQwgDEECSARADAIMAQsLC0EAIQ0DQAJAQagBIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBAEEANgKwAUEAIQ4DQAJAQbQBIA5BAnRqQwAAAAA4AgAgDkEBaiEOIA5BgMAASARADAIMAQsLC0EAIQ8DQAJAQdyBAiAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkBB5IECIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBAkgEQAwCDAELCwtBACERA0ACQEHsgQIgEUECdGpDAAAAADgCACARQQFqIREgEUGAgAJIBEAMAgwBCwsLQQAhEgNAAkBB+IEKIBJBAnRqQwAAAAA4AgAgEkEBaiESIBJBgBBIBEAMAgwBCwsLQQAhEwNAAkBB/MEKIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQEGUwgogFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQZzCCiAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQQJIBEAMAgwBCwsLQQAhFgNAAkBBpMIKIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBgIABSARADAIMAQsLC0EAIRcDQAJAQazCDiAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQYAgSARADAIMAQsLC0EAIRgDQAJAQbDCDyAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQQJIBEAMAgwBCwsLQQAhGQNAAkBByMIPIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBAkgEQAwCDAELCwtBACEaA0ACQEHQwg8gGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQdjCDyAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQYCAAkgEQAwCDAELCwtBACEcA0ACQEHgwhcgHEECdGpDAAAAADgCACAcQQFqIRwgHEGAIEgEQAwCDAELCwtBACEdA0ACQEHkwhggHUECdGpDAAAAADgCACAdQQFqIR0gHUECSARADAIMAQsLC0EAIR4DQAJAQfzCGCAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBBhMMYIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQEGMwxggIEECdGpDAAAAADgCACAgQQFqISAgIEGAgAFIBEAMAgwBCwsLQQAhIQNAAkBBlMMcICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBgBBIBEAMAgwBCwsLQQAhIgNAAkBBmIMdICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBAkgEQAwCDAELCwtBACEjA0ACQEGwgx0gI0ECdGpDAAAAADgCACAjQQFqISMgI0ECSARADAIMAQsLC0EAISQDQAJAQbiDHSAkQQJ0akMAAAAAOAIAICRBAWohJCAkQQJIBEAMAgwBCwsLQQAhJQNAAkBBwIMdICVBAnRqQwAAAAA4AgAgJUEBaiElICVBgIABSARADAIMAQsLC0EAISYDQAJAQciDISAmQQJ0akMAAAAAOAIAICZBAWohJiAmQYAgSARADAIMAQsLC0EAIScDQAJAQcyDIiAnQQJ0akMAAAAAOAIAICdBAWohJyAnQQJIBEAMAgwBCwsLQQAhKANAAkBB5IMiIChBAnRqQwAAAAA4AgAgKEEBaiEoIChBAkgEQAwCDAELCwtBACEpA0ACQEHsgyIgKUECdGpDAAAAADgCACApQQFqISkgKUECSARADAIMAQsLC0EAISoDQAJAQfSDIiAqQQJ0akMAAAAAOAIAICpBAWohKiAqQYCAAUgEQAwCDAELCwtBACErA0ACQEH8gyYgK0ECdGpDAAAAADgCACArQQFqISsgK0GAIEgEQAwCDAELCwtBACEsA0ACQEGAhCcgLEECdGpDAAAAADgCACAsQQFqISwgLEECSARADAIMAQsLC0EAIS0DQAJAQZiEJyAtQQJ0akMAAAAAOAIAIC1BAWohLSAtQQJIBEAMAgwBCwsLQQAhLgNAAkBBoIQnIC5BAnRqQwAAAAA4AgAgLkEBaiEuIC5BAkgEQAwCDAELCwtBACEvA0ACQEGohCcgL0ECdGpDAAAAADgCACAvQQFqIS8gL0GAgAFIBEAMAgwBCwsLQQAhMANAAkBBsIQrIDBBAnRqQwAAAAA4AgAgMEEBaiEwIDBBgBBIBEAMAgwBCwsLQQAhMQNAAkBBtMQrIDFBAnRqQwAAAAA4AgAgMUEBaiExIDFBAkgEQAwCDAELCwtBACEyA0ACQEHMxCsgMkECdGpDAAAAADgCACAyQQFqITIgMkECSARADAIMAQsLC0EAITMDQAJAQdTEKyAzQQJ0akMAAAAAOAIAIDNBAWohMyAzQQJIBEAMAgwBCwsLQQAhNANAAkBB3MQrIDRBAnRqQwAAAAA4AgAgNEEBaiE0IDRBgIACSARADAIMAQsLC0EAITUDQAJAQeTEMyA1QQJ0akMAAAAAOAIAIDVBAWohNSA1QYAgSARADAIMAQsLC0EAITYDQAJAQejENCA2QQJ0akMAAAAAOAIAIDZBAWohNiA2QQJIBEAMAgwBCwsLQQAhNwNAAkBB8MQ0IDdBAnRqQwAAAAA4AgAgN0EBaiE3IDdBA0gEQAwCDAELCwtBACE4A0ACQEH8xDQgOEECdGpDAAAAADgCACA4QQFqITggOEEDSARADAIMAQsLC0EAITkDQAJAQYjFNCA5QQJ0akMAAAAAOAIAIDlBAWohOSA5QQNIBEAMAgwBCwsLQQAhOgNAAkBBlMU0IDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBA0gEQAwCDAELCwtBACE7A0ACQEGgxTQgO0ECdGpDAAAAADgCACA7QQFqITsgO0EDSARADAIMAQsLC0EAITwDQAJAQazFNCA8QQJ0akMAAAAAOAIAIDxBAWohPCA8QQNIBEAMAgwBCwsLQQAhPQNAAkBBuMU0ID1BAnRqQwAAAAA4AgAgPUEBaiE9ID1BA0gEQAwCDAELCwtBACE+A0ACQEHExTQgPkECdGpDAAAAADgCACA+QQFqIT4gPkEDSARADAIMAQsLCwv9joCAAABBACABNgIAQQBDAIA7SEMAAIA/QQAoAgCyl5Y4AgRBAEMAAABAQQAqAgSUOAIIQQBDKVyPPUEAKgIElDgCJEEAQ6abxDtBACoCBJQ4AjBBAEMK16M7QQAqAgSUOAI8QQBDAAB6REEAKgIElTgCQEEAQwAASENBACoCBJU4AkRBAENJkmRBQQAqAgSVOAJQQQBD2w/JQEEAKgIElTgCVEEAQwAAAEBBACoCBJU4AnxBAEPNzEw9QQAqAgSUOAKAAUEAQwAAgD9DAACAP0MAUMNHQwAAIEFBACoCBJUQApWTOAKEAUEAQ0KAWkFBACoCBJU4ApABQQBDHUMTR0EAKgIElRAAOAK0gQJBAENSRWE+QQAqAgSUQwAAAD+SjjgCuIECQQBDAAAAAENVDN1AQQAqAriBApSTQQAqAgSVOAK8gQJBAEMAAAA/QQAqAryBApQ4AsCBAkEAQ6uqqj5BACoCvIEClDgCyIECQQBDAACAP0NjFB1EQQAqAgSVEASVOALMgQJBAEEAKgLMgQJDAACAP5I4AtCBAkEAQwAAAABDAACAP0EAKgLMgQKTQQAqAtCBApWTOALUgQJBAEMAAIA/QQAqAtCBApU4AtiBAkEAQ9annDxBACoCBJRDAAAAP5KOOALsgQpBAEMAAIBGQwAAAABBACoCuIECQQAqAuyBCpOXlqg2AvCBCkEAQwAAAEZDAAAAAEMK16M8QQAqAgSUl5aoNgL0gQpBAEMAAIBEQwAAAABBACoC7IEKQwAAgL+Sl5aoNgL4wQpBAEMU60Q+QQAqAgSUQwAAAD+SjjgChMIKQQBDAAAAAENVDN1AQQAqAoTCCpSTQQAqAgSVOAKIwgpBAEMAAAA/QQAqAojCCpQ4AozCCkEAQ6uqqj5BACoCiMIKlDgCkMIKQQBDrvPvPEEAKgIElEMAAAA/ko44AqTCDkEAQwAAAEZDAAAAAEEAKgKEwgpBACoCpMIOk5eWqDYCqMIOQQBDAAAARUMAAAAAQQAqAqTCDkMAAIC/kpeWqDYCrMIPQQBDOIeDPkEAKgIElEMAAAA/ko44ArjCD0EAQwAAAABDVQzdQEEAKgK4wg+Uk0EAKgIElTgCvMIPQQBDAAAAP0EAKgK8wg+UOALAwg9BAEOrqqo+QQAqArzCD5Q4AsTCD0EAQ3Xp3zxBACoCBJRDAAAAP5KOOALYwhdBAEMAAIBGQwAAAABBACoCuMIPQQAqAtjCF5OXlqg2AtzCF0EAQwAAAEVDAAAAAEEAKgLYwhdDAACAv5KXlqg2AuDCGEEAQ9nNHD5BACoCBJRDAAAAP5KOOALswhhBAEMAAAAAQ1UM3UBBACoC7MIYlJNBACoCBJU4AvDCGEEAQwAAAD9BACoC8MIYlDgC9MIYQQBDq6qqPkEAKgLwwhiUOAL4whhBAEOorKY8QQAqAgSUQwAAAD+SjjgCjMMcQQBDAAAARkMAAAAAQQAqAuzCGEEAKgKMwxyTl5aoNgKQwxxBAEMAAIBEQwAAAABBACoCjMMcQwAAgL+Sl5aoNgKUgx1BAEP35zI+QQAqAgSUQwAAAD+SjjgCoIMdQQBDAAAAAENVDN1AQQAqAqCDHZSTQQAqAgSVOAKkgx1BAEMAAAA/QQAqAqSDHZQ4AqiDHUEAQ6uqqj5BACoCpIMdlDgCrIMdQQBDK6G7PEEAKgIElEMAAAA/ko44AsCDIUEAQwAAAEZDAAAAAEEAKgKggx1BACoCwIMhk5eWqDYCxIMhQQBDAAAARUMAAAAAQQAqAsCDIUMAAIC/kpeWqDYCyIMiQQBDtOcCPkEAKgIElEMAAAA/ko44AtSDIkEAQwAAAABDVQzdQEEAKgLUgyKUk0EAKgIElTgC2IMiQQBDAAAAP0EAKgLYgyKUOALcgyJBAEOrqqo+QQAqAtiDIpQ4AuCDIkEAQzJzAT1BACoCBJRDAAAAP5KOOAL0gyZBAEMAAABGQwAAAABBACoC1IMiQQAqAvSDJpOXlqg2AviDJkEAQwAAAEVDAAAAAEEAKgL0gyZDAACAv5KXlqg2AvyDJ0EAQwAAAD5BACoCBJRDAAAAP5KOOAKIhCdBAEMAAAAAQ1UM3UBBACoCiIQnlJNBACoCBJU4AoyEJ0EAQwAAAD9BACoCjIQnlDgCkIQnQQBDq6qqPkEAKgKMhCeUOAKUhCdBAEPxflw8QQAqAgSUQwAAAD+SjjgCqIQrQQBDAAAARkMAAAAAQQAqAoiEJ0EAKgKohCuTl5aoNgKshCtBAEMAAIBEQwAAAABBACoCqIQrQwAAgL+Sl5aoNgKwxCtBAEM3cFc+QQAqAgSUQwAAAD+SjjgCvMQrQQBDAAAAAENVDN1AQQAqArzEK5STQQAqAgSVOALAxCtBAEMAAAA/QQAqAsDEK5Q4AsTEK0EAQ6uqqj5BACoCwMQrlDgCyMQrQQBDjQ7IPEEAKgIElEMAAAA/ko44AtzEM0EAQwAAgEZDAAAAAEEAKgK8xCtBACoC3MQzk5eWqDYC4MQzQQBDAAAARUMAAAAAQQAqAtzEM0MAAIC/kpeWqDYC5MQ0C5CAgIAAACAAIAEQDSAAEA8gABAMC6yAgIAAAEEAQwAAlkM4AgxBAEMAAAAAOAIgQQBDAACgQDgCWEEAQ83MTD44AsSBAguNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwuelYCAAAEAQQALlxV7Im5hbWUiOiJCcmFzcyIsInZlcnNpb24iOiIyLjUuNyIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiODYwODgwIiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzMiJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiODgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk2NCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
faust.Brass_instance = null;

// Monophonic Faust DSP
class BrassProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BrassProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BrassProcessor.parse_items(group.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
            BrassProcessor.parse_items(item.items, obj, callback);
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONBrass());
        
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
        
        this.factory = faust.Brass_instance.exports;
        this.HEAP = faust.Brass_instance.exports.memory.buffer;
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
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeBrass()), faust.importObject)
            .then(dsp_module => {
                  faust.Brass_instance = dsp_module.instance;
                  registerProcessor('Brass', BrassProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Brass cannot be loaded or compiled"); });
