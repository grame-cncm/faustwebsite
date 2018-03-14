
/*
Code generated with Faust version 2.5.24
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"filename\":\"Brass\",\"version\":\"2.5.24\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"860888\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Brass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"32\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"12\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"88\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32972\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfdGFuZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYeAgIAAAQCQgICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAAq06YCAAA6CgICAAAALyb+AgAACDH+gAX1BACEEQwAAAAAhEEMAAAAAIRFBACEFQQAhBkEAIQdDAAAAACESQwAAAAAhE0EAIQhDAAAAACEUQwAAAAAhFUMAAAAAIRZDAAAAACEXQwAAAAAhGEMAAAAAIRlDAAAAACEaQwAAAAAhG0MAAAAAIRxDAAAAACEdQwAAAAAhHkMAAAAAIR9DAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQQAhCUMAAAAAIV1DAAAAACFeQQAhCkMAAAAAIV9BACELQQAhDEEAIQ1DAAAAACFgQwAAAAAhYUMAAAAAIWJBACEOQwAAAAAhY0MAAAAAIWRDAAAAACFlQwAAAAAhZkEAIQ9DAAAAACFnQwAAAAAhaEMAAAAAIWlDAAAAACFqQwAAAAAha0MAAAAAIWxDAAAAACFtQwAAAAAhbkMAAAAAIW9DAAAAACFwQwAAAAAhcUMAAAAAIXJDAAAAACFzQwAAAAAhdEMAAAAAIXVDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFDAAAAACGEAUMAAAAAIYUBQwAAAAAhhgFDAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BIANBAGooAgAhBENvEoM6QQAqAgyUIRBBACoCICERIBFDAAAAAF4hBSAFQQBKIQYgEUMAAAAAW0EASiEHQQAqAkAgEUMAAIC/kpQhEkEAKgJUQQAqAliUIRMgEUMAAAAAXyEIQ83MTD1DmpnZP0EAKgLMgQKWlyEUQQAqAsiBAiAUlRABIRUgFUMAAABAEAIhFkMAAIA/QQAqAryBAiAWlJMhF0MAAIA/IBaTIRggFyAYlSEZQwAAAAAgF0MAAABAEAIgGEMAAABAEAKVQwAAgL+Sl5EhGiAZIBqTIRsgFSAaQwAAgD8gGZOSlCEcQQAqAtCBAiAUlRABIBWVQwAAgL+SIR1BACoClMIKIBSVEAEhHiAeQwAAAEAQAiEfQwAAgD9BACoCvIECIB+UkyEgQwAAgD8gH5MhISAgICGVISJDAAAAACAgQwAAAEAQAiAhQwAAAEAQApVDAACAv5KXkSEjICIgI5MhJCAeICNDAACAPyAik5KUISVBACoCmMIKIBSVEAEgHpVDAACAv5IhJkEAKgLIwhMgFJUQASEnICdDAAAAQBACIShDAACAP0EAKgK8gQIgKJSTISlDAACAPyAokyEqICkgKpUhK0MAAAAAIClDAAAAQBACICpDAAAAQBAClUMAAIC/kpeRISwgKyAskyEtICcgLEMAAIA/ICuTkpQhLkEAKgLMwhMgFJUQASAnlUMAAIC/kiEvQQAqAvzCGCAUlRABITAgMEMAAABAEAIhMUMAAIA/QQAqAryBAiAxlJMhMkMAAIA/IDGTITMgMiAzlSE0QwAAAAAgMkMAAABAEAIgM0MAAABAEAKVQwAAgL+Sl5EhNSA0IDWTITYgMCA1QwAAgD8gNJOSlCE3QQAqAoDDGCAUlRABIDCVQwAAgL+SIThBACoCsMMhIBSVEAEhOSA5QwAAAEAQAiE6QwAAgD9BACoCvIECIDqUkyE7QwAAgD8gOpMhPCA7IDyVIT1DAAAAACA7QwAAAEAQAiA8QwAAAEAQApVDAACAv5KXkSE+ID0gPpMhPyA5ID5DAACAPyA9k5KUIUBBACoCtMMhIBSVEAEgOZVDAACAv5IhQUEAKgLkgyYgFJUQASFCIEJDAAAAQBACIUNDAACAP0EAKgK8gQIgQ5STIURDAACAPyBDkyFFIEQgRZUhRkMAAAAAIERDAAAAQBACIEVDAAAAQBAClUMAAIC/kpeRIUcgRiBHkyFIIEIgR0MAAIA/IEaTkpQhSUEAKgLogyYgFJUQASBClUMAAIC/kiFKQQAqApiEKyAUlRABIUsgS0MAAABAEAIhTEMAAIA/QQAqAryBAiBMlJMhTUMAAIA/IEyTIU4gTSBOlSFPQwAAAAAgTUMAAABAEAIgTkMAAABAEAKVQwAAgL+Sl5EhUCBPIFCTIVEgSyBQQwAAgD8gT5OSlCFSQQAqApyEKyAUlRABIEuVQwAAgL+SIVNBACoCzIQwIBSVEAEhVCBUQwAAAEAQAiFVQwAAgD9BACoCvIECIFWUkyFWQwAAgD8gVZMhVyBWIFeVIVhDAAAAACBWQwAAAEAQAiBXQwAAAEAQApVDAACAv5KXkSFZIFggWZMhWiBUIFlDAACAPyBYk5KUIVtBACoC0IQwIBSVEAEgVJVDAACAv5IhXEEAIQkDQAJAQQBBATYCECAQQ3e+fz9BACoCHJSSIV1BACBdQwAAAAAgXbxBgICA/AdxGzgCGEP6fgo/QQAqAghBACoCGJVDAABAQJKUIV4gXqghCiBejiFfIApBAWohCyAKQQBBACAKSBshDCALQQBBACALSBshDUG8AUEAKAK4AUGBICAMQYEgIAxIG0EBamtB/z9xQQJ0aioCACBfQwAAgD8gXpOSlCBeIF+TQbwBQQAoArgBQYEgIA1BgSAgDUgbQQFqa0H/P3FBAnRqKgIAlJIhYEMAAAAAQQAqAiRBACoCLEMAAIA/kpYgBhshYUEAIGFDAAAAACBhvEGAgID8B3EbOAIoQwAAAABBACoCMEEAKgI4QwAAgD+SliAHGyFiQQAgYkMAAAAAIGK8QYCAgPwHcRs4AjRBACoCNEEAKgI8XSEOIAWyQwAAAABBACoCREEAKgI0lEMAAIA/IA4bQQAqAjRDAAAAAF0bIBJBACoCNEEAKgI8k5RDAACAP5IgEUEAKgI0QQAqAjBdGyAOG5RBACoCTCAFGyFjQQAgY0MAAAAAIGO8QYCAgPwHcRs4AkhBACoCYCATQwAAAABBACoCcJOUkiFkQQAgZEMAAAAAIGS8QYCAgPwHcRs4AlxBACoCaCATQQAqAlyUkkEBQQAoAhRrspIhZUEAIGVDAAAAACBlvEGAgID8B3EbOAJkQQAqAmQhZkEAIGZDAAAAACBmvEGAgID8B3EbOAJsQQAgBUEAKAJ4QQAqApQBQwAAgD9gcnE2AnRBACAFQQAoAoABQQFqbDYCfCAIQQAqApQBQwAAAABecSEPIA9BAEZBACoClAFDvTeGNWByskEAKgKEAUEAKAJ4QQBGIAVxQQAqApQBQwAAgD9dcUEAKAKAAbJBACoCiAFecUEBQQAoAoABskEAKgKIAV1rbLKUQQAqApQBQwAAgD9BACoCjAEgD7KUk5SSlCFnQQAgZ0MAAAAAIGe8QYCAgPwHcRs4ApABQQAqAkhBACoCSEEAKgJQQQAqAihDAAAAAEEAKgJIk5SUkkMAAAAAQQAqAihBACoCJF0bQQAqAihDAAAAAF0bQ83MTD1BACoCbEEAKgKQAZSUkiFoQ4/C9TxDmpmZPiBolEOamVk/IGCUk5RBACoCoAFDAAAAAENkO/8/QQAqApgBQQAqAhiUEACUk5RDYHd+P0EAKgKkAZSSkyFpQQAgaUMAAAAAIGm8QYCAgPwHcRs4ApwBQQAqApwBQwAAAEAQAiFqIGpDAACAP16yIGogakMAAIA/X7KUkiFrQ5qZWT8gYEMAAIA/IGuTlJQhbEOamZk+IGgga5SUIW1BACBtIGySOAKoASBsQ1K4fj9BACoCtAGUIG2SkkEAKgKsAZMhbkEAIG5DAAAAACBuvEGAgID8B3EbOAKwAUEAKgKwASFvQbwBQQAoArgBQf8/cUECdGogb0MAAAAAIG+8QYCAgPwHcRs4AgBBACoC3IECQQAqAuiBApRBACoC4IECQQAqAtDFNEEAKgLUxTSSlJIhcEEAIHBDAAAAACBwvEGAgID8B3EbOALkgQIgG0EAKgLwgQKUIBxBACoC0MU0IB1BACoC5IEClJKUkiFxQQAgcUMAAAAAIHG8QYCAgPwHcRs4AuyBAkH0gQJBACgCuAFB//8BcUECdGpD8wS1PkEAKgLsgQKUQwjlPB6SOAIAQ4/C9T5BvAFBACgCuAFBACgC/IEKa0H/P3FBAnRqKgIAlCFyQ5qZGT9BACoCiMIKlEH0gQJBACgCuAFBACgC+IEKa0H//wFxQQJ0aioCAJIgcpMhc0GAggpBACgCuAFB/w9xQQJ0aiBzOAIAQYCCCkEAKAK4AUEAKAKAwgprQf8PcUECdGoqAgAhdEEAIHRDAAAAACB0vEGAgID8B3EbOAKEwgpDAAAAAEOamRk/IHOUkyF1IHVDAAAAACB1vEGAgID8B3EbIXZBACoC3IECQQAqAqDCCpRBACoC4IECQQAqAqDFNEEAKgKkxTSSlJIhd0EAIHdDAAAAACB3vEGAgID8B3EbOAKcwgogJEEAKgKowgqUICVBACoCoMU0ICZBACoCnMIKlJKUkiF4QQAgeEMAAAAAIHi8QYCAgPwHcRs4AqTCCkGswgpBACgCuAFB//8BcUECdGpD8wS1PkEAKgKkwgqUQwjlPB6SOAIAQ5qZGT9BACoCvMITlEGswgpBACgCuAFBACgCsMISa0H//wFxQQJ0aioCAJIgcpMheUG0whJBACgCuAFB/x9xQQJ0aiB5OAIAQbTCEkEAKAK4AUEAKAK0whNrQf8fcUECdGoqAgAhekEAIHpDAAAAACB6vEGAgID8B3EbOAK4whNDAAAAAEOamRk/IHmUkyF7IHtDAAAAACB7vEGAgID8B3EbIXxBACoC3IECQQAqAtTCE5RBACoC4IECQQAqArjFNEEAKgK8xTSSlJIhfUEAIH1DAAAAACB9vEGAgID8B3EbOALQwhMgLUEAKgLcwhOUIC5BACoCuMU0IC9BACoC0MITlJKUkiF+QQAgfkMAAAAAIH68QYCAgPwHcRs4AtjCE0HgwhNBACgCuAFB//8AcUECdGpD8wS1PkEAKgLYwhOUQwjlPB6SOAIAQeDCE0EAKAK4AUEAKALkwhdrQf//AHFBAnRqKgIAIHJDmpkZP0EAKgLwwhiUkpIhf0HowhdBACgCuAFB/x9xQQJ0aiB/OAIAQejCF0EAKAK4AUEAKALowhhrQf8fcUECdGoqAgAhgAFBACCAAUMAAAAAIIABvEGAgID8B3EbOALswhhDAAAAAEOamRk/IH+UkyGBASCBAUMAAAAAIIEBvEGAgID8B3EbIYIBQQAqAtyBAkEAKgKIwxiUQQAqAuCBAkEAKgKIxTRBACoCjMU0kpSSIYMBQQAggwFDAAAAACCDAbxBgICA/AdxGzgChMMYIDZBACoCkMMYlCA3QQAqAojFNCA4QQAqAoTDGJSSlJIhhAFBACCEAUMAAAAAIIQBvEGAgID8B3EbOAKMwxhBlMMYQQAoArgBQf//AXFBAnRqQ/MEtT5BACoCjMMYlEMI5TwekjgCAEGUwxhBACgCuAFBACgCmMMga0H//wFxQQJ0aioCACByQ5qZGT9BACoCpMMhlJKSIYUBQZzDIEEAKAK4AUH/H3FBAnRqIIUBOAIAQZzDIEEAKAK4AUEAKAKcwyFrQf8fcUECdGoqAgAhhgFBACCGAUMAAAAAIIYBvEGAgID8B3EbOAKgwyFDAAAAAEOamRk/IIUBlJMhhwEghwFDAAAAACCHAbxBgICA/AdxGyGIAUEAKgLcgQJBACoCvMMhlEEAKgLggQJBACoCxMU0QQAqAsjFNJKUkiGJAUEAIIkBQwAAAAAgiQG8QYCAgPwHcRs4ArjDISA/QQAqAsTDIZQgQEEAKgLExTQgQUEAKgK4wyGUkpSSIYoBQQAgigFDAAAAACCKAbxBgICA/AdxGzgCwMMhQcjDIUEAKAK4AUH//wBxQQJ0akPzBLU+QQAqAsDDIZRDCOU8HpI4AgBByMMhQQAoArgBQQAoAszDJWtB//8AcUECdGoqAgAgckOamRk/QQAqAtiDJpSSkyGLAUHQwyVBACgCuAFB/w9xQQJ0aiCLATgCAEHQwyVBACgCuAFBACgC0IMma0H/D3FBAnRqKgIAIYwBQQAgjAFDAAAAACCMAbxBgICA/AdxGzgC1IMmQ5qZGT8giwGUIY0BII0BQwAAAAAgjQG8QYCAgPwHcRshjgFBACoC3IECQQAqAvCDJpRBACoC4IECQQAqApTFNEEAKgKYxTSSlJIhjwFBACCPAUMAAAAAII8BvEGAgID8B3EbOALsgyYgSEEAKgL4gyaUIElBACoClMU0IEpBACoC7IMmlJKUkiGQAUEAIJABQwAAAAAgkAG8QYCAgPwHcRs4AvSDJkH8gyZBACgCuAFB//8AcUECdGpD8wS1PkEAKgL0gyaUQwjlPB6SOAIAQfyDJkEAKAK4AUEAKAKAhCprQf//AHFBAnRqKgIAIHJDmpkZP0EAKgKMhCuUkpMhkQFBhIQqQQAoArgBQf8fcUECdGogkQE4AgBBhIQqQQAoArgBQQAoAoSEK2tB/x9xQQJ0aioCACGSAUEAIJIBQwAAAAAgkgG8QYCAgPwHcRs4AoiEK0OamRk/IJEBlCGTASCTAUMAAAAAIJMBvEGAgID8B3EbIZQBQQAqAtyBAkEAKgKkhCuUQQAqAuCBAkEAKgKsxTRBACoCsMU0kpSSIZUBQQAglQFDAAAAACCVAbxBgICA/AdxGzgCoIQrIFFBACoCrIQrlCBSQQAqAqzFNCBTQQAqAqCEK5SSlJIhlgFBACCWAUMAAAAAIJYBvEGAgID8B3EbOAKohCtBsIQrQQAoArgBQf//AHFBAnRqQ/MEtT5BACoCqIQrlEMI5TwekjgCACByQbCEK0EAKAK4AUEAKAK0hC9rQf//AHFBAnRqKgIAkkOamRk/QQAqAsCEMJSTIZcBQbiEL0EAKAK4AUH/H3FBAnRqIJcBOAIAQbiEL0EAKAK4AUEAKAK4hDBrQf8fcUECdGoqAgAhmAFBACCYAUMAAAAAIJgBvEGAgID8B3EbOAK8hDBDmpkZPyCXAZQhmQEgmQFDAAAAACCZAbxBgICA/AdxGyGaAUEAKgLcgQJBACoC2IQwlEEAKgLggQJBACoC/MQ0QQAqAoDFNJKUkiGbAUEAIJsBQwAAAAAgmwG8QYCAgPwHcRs4AtSEMCBaQQAqAuCEMJQgW0EAKgL8xDQgXEEAKgLUhDCUkpSSIZwBQQAgnAFDAAAAACCcAbxBgICA/AdxGzgC3IQwQeSEMEEAKAK4AUH//wBxQQJ0akPzBLU+QQAqAtyEMJRDCOU8HpI4AgBB5IQwQQAoArgBQQAoAuiENGtB//8AcUECdGoqAgAgcpJDmpkZP0EAKgL0xDSUkyGdAUHshDRBACgCuAFB/w9xQQJ0aiCdATgCAEHshDRBACgCuAFBACgC7MQ0a0H/D3FBAnRqKgIAIZ4BQQAgngFDAAAAACCeAbxBgICA/AdxGzgC8MQ0Q5qZGT8gnQGUIZ8BIJ8BQwAAAAAgnwG8QYCAgPwHcRshoAEgoAEgmgGSIaEBII4BIJQBIKEBkpIhogFBACoCiMIKQQAqArzCE0EAKgLwwhhBACoCpMMhQQAqAtiDJkEAKgKMhCtBACoCwIQwQQAqAvTENCB2IHwgggEgiAEgogGSkpKSkpKSkpKSkpIhowFBACCjAUMAAAAAIKMBvEGAgID8B3EbOAL4xDRBACoC2IMmQQAqAoyEK0EAKgLAhDBBACoC9MQ0IKIBkpKSkkEAKgKIwgpBACoCvMITQQAqAvDCGEEAKgKkwyEgdiB8IIgBIIIBkpKSkpKSkpMhpAFBACCkAUMAAAAAIKQBvEGAgID8B3EbOAKExTQglAEgjgGSIaUBQQAqAvDCGEEAKgKkwyFBACoCwIQwQQAqAvTENCCCASCIASChAZKSkpKSkkEAKgKIwgpBACoCvMITQQAqAtiDJkEAKgKMhCsgdiB8IKUBkpKSkpKSkyGmAUEAIKYBQwAAAAAgpgG8QYCAgPwHcRs4ApDFNEEAKgKIwgpBACoCvMITQQAqAsCEMEEAKgL0xDQgdiB8IKEBkpKSkpKSQQAqAvDCGEEAKgKkwyFBACoC2IMmQQAqAoyEKyCCASCIASClAZKSkpKSkpMhpwFBACCnAUMAAAAAIKcBvEGAgID8B3EbOAKcxTQgoAEglAGSIagBIJoBII4BkiGpAUEAKgK8whNBACoCpMMhQQAqAoyEK0EAKgL0xDQgfCCIASCoAZKSkpKSkkEAKgKIwgpBACoC8MIYQQAqAtiDJkEAKgLAhDAgdiCCASCpAZKSkpKSkpMhqgFBACCqAUMAAAAAIKoBvEGAgID8B3EbOAKoxTRBACoCiMIKQQAqAvDCGEEAKgKMhCtBACoC9MQ0IHYgggEgqAGSkpKSkpJBACoCvMITQQAqAqTDIUEAKgLYgyZBACoCwIQwIHwgiAEgqQGSkpKSkpKTIasBQQAgqwFDAAAAACCrAbxBgICA/AdxGzgCtMU0IKABII4BkiGsASCaASCUAZIhrQFBACoCiMIKQQAqAqTDIUEAKgLYgyZBACoC9MQ0IHYgiAEgrAGSkpKSkpJBACoCvMITQQAqAvDCGEEAKgKMhCtBACoCwIQwIHwgggEgrQGSkpKSkpKTIa4BQQAgrgFDAAAAACCuAbxBgICA/AdxGzgCwMU0QQAqArzCE0EAKgLwwhhBACoC2IMmQQAqAvTENCB8IIIBIKwBkpKSkpKSQQAqAojCCkEAKgKkwyFBACoCjIQrQQAqAsCEMCB2IIgBIK0BkpKSkpKSkyGvAUEAIK8BQwAAAAAgrwG8QYCAgPwHcRs4AszFNCAEIAlqQ83MTEBBvAFBACgCuAFBAGtB/z9xQQJ0aioCAJRDpHC9PkEAKgKExTRBACoCkMU0kkEAKgKExTRBACoCkMU0k5KUkjgCAEEAQQAoAhA2AhRBAEEAKgIYOAIcQQBBACoCKDgCLEEAQQAqAjQ4AjhBAEEAKgJIOAJMQQBBACoCXDgCYEEAQQAqAmQ4AmhBAEEAKgJsOAJwQQBBACgCdDYCeEEAQQAoAnw2AoABQQBBACoCkAE4ApQBQQBBACoCoAE4AqQBQQBBACoCnAE4AqABQQBBACoCqAE4AqwBQQBBACoCsAE4ArQBQQBBACgCuAFBAWo2ArgBQQBBACoC5IECOALogQJBAEEAKgLsgQI4AvCBAkEAQQAqAoTCCjgCiMIKQQBBACoCnMIKOAKgwgpBAEEAKgKkwgo4AqjCCkEAQQAqArjCEzgCvMITQQBBACoC0MITOALUwhNBAEEAKgLYwhM4AtzCE0EAQQAqAuzCGDgC8MIYQQBBACoChMMYOAKIwxhBAEEAKgKMwxg4ApDDGEEAQQAqAqDDITgCpMMhQQBBACoCuMMhOAK8wyFBAEEAKgLAwyE4AsTDIUEAQQAqAtSDJjgC2IMmQQBBACoC7IMmOALwgyZBAEEAKgL0gyY4AviDJkEAQQAqAoiEKzgCjIQrQQBBACoCoIQrOAKkhCtBAEEAKgKohCs4AqyEK0EAQQAqAryEMDgCwIQwQQBBACoC1IQwOALYhDBBAEEAKgLchDA4AuCEMEEAQQAqAvDENDgC9MQ0QQBBACoC/MQ0OAKAxTRBAEEAKgL4xDQ4AvzENEEAQQAqAojFNDgCjMU0QQBBACoChMU0OAKIxTRBAEEAKgKUxTQ4ApjFNEEAQQAqApDFNDgClMU0QQBBACoCoMU0OAKkxTRBAEEAKgKcxTQ4AqDFNEEAQQAqAqzFNDgCsMU0QQBBACoCqMU0OAKsxTRBAEEAKgK4xTQ4ArzFNEEAQQAqArTFNDgCuMU0QQBBACoCxMU0OALIxTRBAEEAKgLAxTQ4AsTFNEEAQQAqAtDFNDgC1MU0QQBBACoCzMU0OALQxTQgCUEEaiEJIAlBBCABbEgEQAwCDAELCwsLhYCAgAAAQQAPC4WAgIAAAEEBDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAgAPC46AgIAAACAAIAEQBCAAIAEQDQuXmYCAAAE/f0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEgQQAhIUEAISJBACEjQQAhJEEAISVBACEmQQAhJ0EAIShBACEpQQAhKkEAIStBACEsQQAhLUEAIS5BACEvQQAhMEEAITFBACEyQQAhM0EAITRBACE1QQAhNkEAITdBACE4QQAhOUEAITpBACE7QQAhPEEAIT1BACE+QQAhP0EAIQEDQAJAQRAgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQRggAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQSggA0ECdGpDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAQTQgBEECdGpDAAAAADgCACAEQQFqIQQgBEECSARADAIMAQsLC0EAIQUDQAJAQcgAIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHcACAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQJIBEAMAgwBCwsLQQAhBwNAAkBB5AAgB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQewAIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBAkgEQAwCDAELCwtBACEJA0ACQEH0ACAJQQJ0akEANgIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBB/AAgCkECdGpBADYCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQZABIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBAkgEQAwCDAELCwtBACEMA0ACQEGcASAMQQJ0akMAAAAAOAIAIAxBAWohDCAMQQNIBEAMAgwBCwsLQQAhDQNAAkBBqAEgDUECdGpDAAAAADgCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAQbABIA5BAnRqQwAAAAA4AgAgDkEBaiEOIA5BAkgEQAwCDAELCwtBAEEANgK4AUEAIQ8DQAJAQbwBIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BgMAASARADAIMAQsLC0EAIRADQAJAQeSBAiAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBB7IECIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEH0gQIgEkECdGpDAAAAADgCACASQQFqIRIgEkGAgAJIBEAMAgwBCwsLQQAhEwNAAkBBgIIKIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBgBBIBEAMAgwBCwsLQQAhFANAAkBBhMIKIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBAkgEQAwCDAELCwtBACEVA0ACQEGcwgogFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQaTCCiAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBrMIKIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBgIACSARADAIMAQsLC0EAIRgDQAJAQbTCEiAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQYAgSARADAIMAQsLC0EAIRkDQAJAQbjCEyAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBB0MITIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBAkgEQAwCDAELCwtBACEbA0ACQEHYwhMgG0ECdGpDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAQeDCEyAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQYCAAUgEQAwCDAELCwtBACEdA0ACQEHowhcgHUECdGpDAAAAADgCACAdQQFqIR0gHUGAIEgEQAwCDAELCwtBACEeA0ACQEHswhggHkECdGpDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAQYTDGCAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkBBjMMYICBBAnRqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQEGUwxggIUECdGpDAAAAADgCACAhQQFqISEgIUGAgAJIBEAMAgwBCwsLQQAhIgNAAkBBnMMgICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBgCBIBEAMAgwBCwsLQQAhIwNAAkBBoMMhICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQEG4wyEgJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQcDDISAlQQJ0akMAAAAAOAIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBByMMhICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBgIABSARADAIMAQsLC0EAIScDQAJAQdDDJSAnQQJ0akMAAAAAOAIAICdBAWohJyAnQYAQSARADAIMAQsLC0EAISgDQAJAQdSDJiAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkBB7IMmIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEH0gyYgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQfyDJiArQQJ0akMAAAAAOAIAICtBAWohKyArQYCAAUgEQAwCDAELCwtBACEsA0ACQEGEhCogLEECdGpDAAAAADgCACAsQQFqISwgLEGAIEgEQAwCDAELCwtBACEtA0ACQEGIhCsgLUECdGpDAAAAADgCACAtQQFqIS0gLUECSARADAIMAQsLC0EAIS4DQAJAQaCEKyAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQJIBEAMAgwBCwsLQQAhLwNAAkBBqIQrIC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BAkgEQAwCDAELCwtBACEwA0ACQEGwhCsgMEECdGpDAAAAADgCACAwQQFqITAgMEGAgAFIBEAMAgwBCwsLQQAhMQNAAkBBuIQvIDFBAnRqQwAAAAA4AgAgMUEBaiExIDFBgCBIBEAMAgwBCwsLQQAhMgNAAkBBvIQwIDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBAkgEQAwCDAELCwtBACEzA0ACQEHUhDAgM0ECdGpDAAAAADgCACAzQQFqITMgM0ECSARADAIMAQsLC0EAITQDQAJAQdyEMCA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QQJIBEAMAgwBCwsLQQAhNQNAAkBB5IQwIDVBAnRqQwAAAAA4AgAgNUEBaiE1IDVBgIABSARADAIMAQsLC0EAITYDQAJAQeyENCA2QQJ0akMAAAAAOAIAIDZBAWohNiA2QYAQSARADAIMAQsLC0EAITcDQAJAQfDENCA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QQJIBEAMAgwBCwsLQQAhOANAAkBB+MQ0IDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBA0gEQAwCDAELCwtBACE5A0ACQEGExTQgOUECdGpDAAAAADgCACA5QQFqITkgOUEDSARADAIMAQsLC0EAIToDQAJAQZDFNCA6QQJ0akMAAAAAOAIAIDpBAWohOiA6QQNIBEAMAgwBCwsLQQAhOwNAAkBBnMU0IDtBAnRqQwAAAAA4AgAgO0EBaiE7IDtBA0gEQAwCDAELCwtBACE8A0ACQEGoxTQgPEECdGpDAAAAADgCACA8QQFqITwgPEEDSARADAIMAQsLC0EAIT0DQAJAQbTFNCA9QQJ0akMAAAAAOAIAID1BAWohPSA9QQNIBEAMAgwBCwsLQQAhPgNAAkBBwMU0ID5BAnRqQwAAAAA4AgAgPkEBaiE+ID5BA0gEQAwCDAELCwtBACE/A0ACQEHMxTQgP0ECdGpDAAAAADgCACA/QQFqIT8gP0EDSARADAIMAQsLCwv+joCAAABBACABNgIAQQBDAIA7SEMAAIA/QQAoAgCyl5Y4AgRBAEMAAABAQQAqAgSUOAIIQQBDKVyPPUEAKgIElDgCJEEAQ6abxDtBACoCBJQ4AjBBAEMK16M7QQAqAgSUOAI8QQBDAAB6REEAKgIElTgCQEEAQwAASENBACoCBJU4AkRBAENJkmRBQQAqAgSVOAJQQQBD2w/JQEEAKgIElTgCVEEAQwAAAEBBACoCBJU4AoQBQQBDzcxMPUEAKgIElDgCiAFBAEMAAIA/QwAAgD9DAFDDR0MAACBBQQAqAgSVEAKVkzgCjAFBAENCgFpBQQAqAgSVOAKYAUEAQx1DE0dBACoCBJUQADgCvIECQQBDUkVhPkEAKgIElEMAAAA/ko44AsCBAkEAQwAAAABDVQzdQEEAKgLAgQKUk0EAKgIElTgCxIECQQBDAAAAP0EAKgLEgQKUOALIgQJBAEOrqqo+QQAqAsSBApQ4AtCBAkEAQwAAgD9DYxQdREEAKgIElRADlTgC1IECQQBBACoC1IECQwAAgD+SOALYgQJBAEMAAAAAQwAAgD9BACoC1IECk0EAKgLYgQKVkzgC3IECQQBDAACAP0EAKgLYgQKVOALggQJBAEPWp5w8QQAqAgSUQwAAAD+SjjgC9IEKQQBDAACARkMAAAAAQQAqAsCBAkEAKgL0gQqTl5aoNgL4gQpBAEMAAABGQwAAAABDCtejPEEAKgIElJeWqDYC/IEKQQBDAACAREMAAAAAQQAqAvSBCkMAAIC/kpeWqDYCgMIKQQBDOIeDPkEAKgIElEMAAAA/ko44AozCCkEAQwAAAABDVQzdQEEAKgKMwgqUk0EAKgIElTgCkMIKQQBDAAAAP0EAKgKQwgqUOAKUwgpBAEOrqqo+QQAqApDCCpQ4ApjCCkEAQ3Xp3zxBACoCBJRDAAAAP5KOOAKswhJBAEMAAIBGQwAAAABBACoCjMIKQQAqAqzCEpOXlqg2ArDCEkEAQwAAAEVDAAAAAEEAKgKswhJDAACAv5KXlqg2ArTCE0EAQxTrRD5BACoCBJRDAAAAP5KOOALAwhNBAEMAAAAAQ1UM3UBBACoCwMITlJNBACoCBJU4AsTCE0EAQwAAAD9BACoCxMITlDgCyMITQQBDq6qqPkEAKgLEwhOUOALMwhNBAEOu8+88QQAqAgSUQwAAAD+SjjgC4MIXQQBDAAAARkMAAAAAQQAqAsDCE0EAKgLgwheTl5aoNgLkwhdBAEMAAABFQwAAAABBACoC4MIXQwAAgL+Sl5aoNgLowhhBAEM3cFc+QQAqAgSUQwAAAD+SjjgC9MIYQQBDAAAAAENVDN1AQQAqAvTCGJSTQQAqAgSVOAL4whhBAEMAAAA/QQAqAvjCGJQ4AvzCGEEAQ6uqqj5BACoC+MIYlDgCgMMYQQBDjQ7IPEEAKgIElEMAAAA/ko44ApTDIEEAQwAAgEZDAAAAAEEAKgL0whhBACoClMMgk5eWqDYCmMMgQQBDAAAARUMAAAAAQQAqApTDIEMAAIC/kpeWqDYCnMMhQQBDAAAAPkEAKgIElEMAAAA/ko44AqjDIUEAQwAAAABDVQzdQEEAKgKowyGUk0EAKgIElTgCrMMhQQBDAAAAP0EAKgKswyGUOAKwwyFBAEOrqqo+QQAqAqzDIZQ4ArTDIUEAQ/F+XDxBACoCBJRDAAAAP5KOOALIwyVBAEMAAABGQwAAAABBACoCqMMhQQAqAsjDJZOXlqg2AszDJUEAQwAAgERDAAAAAEEAKgLIwyVDAACAv5KXlqg2AtCDJkEAQ7TnAj5BACoCBJRDAAAAP5KOOALcgyZBAEMAAAAAQ1UM3UBBACoC3IMmlJNBACoCBJU4AuCDJkEAQwAAAD9BACoC4IMmlDgC5IMmQQBDq6qqPkEAKgLggyaUOALogyZBAEMycwE9QQAqAgSUQwAAAD+SjjgC/IMqQQBDAAAARkMAAAAAQQAqAtyDJkEAKgL8gyqTl5aoNgKAhCpBAEMAAABFQwAAAABBACoC/IMqQwAAgL+Sl5aoNgKEhCtBAEP35zI+QQAqAgSUQwAAAD+SjjgCkIQrQQBDAAAAAENVDN1AQQAqApCEK5STQQAqAgSVOAKUhCtBAEMAAAA/QQAqApSEK5Q4ApiEK0EAQ6uqqj5BACoClIQrlDgCnIQrQQBDK6G7PEEAKgIElEMAAAA/ko44ArCEL0EAQwAAAEZDAAAAAEEAKgKQhCtBACoCsIQvk5eWqDYCtIQvQQBDAAAARUMAAAAAQQAqArCEL0MAAIC/kpeWqDYCuIQwQQBD2c0cPkEAKgIElEMAAAA/ko44AsSEMEEAQwAAAABDVQzdQEEAKgLEhDCUk0EAKgIElTgCyIQwQQBDAAAAP0EAKgLIhDCUOALMhDBBAEOrqqo+QQAqAsiEMJQ4AtCEMEEAQ6ispjxBACoCBJRDAAAAP5KOOALkhDRBAEMAAABGQwAAAABBACoCxIQwQQAqAuSENJOXlqg2AuiENEEAQwAAgERDAAAAAEEAKgLkhDRDAACAv5KXlqg2AuzENAuQgICAAAAgACABEAwgABAOIAAQCwusgICAAABBAEMAAJZDOAIMQQBDAAAAADgCIEEAQwAAoEA4AlhBAEPNzEw+OALMgQILjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL0JWAgAABAEEAC8kVeyJuYW1lIjoiQnJhc3MiLCJmaWxlbmFtZSI6IkJyYXNzIiwidmVyc2lvbiI6IjIuNS4yNCIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiODYwODg4IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IldhdmVHdWlkZSBCcmFzcyBpbnN0cnVtZW50IGZyb20gU1RLIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiQnJhc3MifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQnJhc3MifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0JyYXNzZXMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQnJhc3MgSW5zdHJ1bWVudCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIzMiJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiODgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMjk3MiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxMiJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

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
                nUint24 |= BrassProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        BrassProcessor.parse_ui(JSON.parse(getJSONBrass()).ui, params, BrassProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBrass());

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
        
        this.factory = BrassProcessor.Brass_instance.exports;
        this.HEAP = BrassProcessor.Brass_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BrassProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BrassProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BrassProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BrassProcessor.parse_ui(this.json_object.ui, this, BrassProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, BrassProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, BrassProcessor.buffer_size, this.ins, this.outs);
        
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

BrassProcessor.buffer_size = 128;

BrassProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(BrassProcessor.atob(getBase64CodeBrass()));
    BrassProcessor.Brass_instance = new WebAssembly.Instance(wasm_module, BrassProcessor.importObject);
    registerProcessor('Brass', BrassProcessor);
} catch (e) {
    console.log(e); console.log("Faust Brass cannot be loaded or compiled");
}

