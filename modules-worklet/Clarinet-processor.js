
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877264\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131280\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131300\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164072\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfdGFuZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYeAgIAAAQCQgICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAAqB64CAAA6CgICAAAALh8GAgAACDX+iAX1BACEEQQAhBUMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEEAIQZBACEHQQAhCEMAAAAAIR1DAAAAACEeQwAAAAAhH0EAIQlDAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFBACEKQwAAAAAhYkMAAAAAIWNDAAAAACFkQwAAAAAhZUEAIQtDAAAAACFmQwAAAAAhZ0MAAAAAIWhDAAAAACFpQQAhDEMAAAAAIWpDAAAAACFrQwAAAAAhbEMAAAAAIW1DAAAAACFuQQAhDUMAAAAAIW9BACEOQQAhD0EAIRBDAAAAACFwQwAAAAAhcUMAAAAAIXJDAAAAACFzQwAAAAAhdEMAAAAAIXVDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFDAAAAACGEAUMAAAAAIYUBQwAAAAAhhgFDAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBIANBAGooAgAhBCADQQRqKAIAIQVDzcxMPUMAAABAQQAqAiCWlyERQQAqAhwgEZUQASESIBJDAAAAQBACIRNDAACAP0EAKgIQIBOUkyEUQwAAgD8gE5MhFSAUIBWVIRZDAAAAACAUQwAAAEAQAiAVQwAAAEAQApVDAACAv5KXkSEXIBYgF5MhGCASIBdDAACAPyAWk5KUIRlBACoCJCARlRABIBKVQwAAgL+SIRpBACoC1IAIIRtBACoC2IAIIRwgHEMAAAAAXiEGIAZBAEohByAcQwAAAABbQQBKIQhDAADIQiAclCEdQQAqAviACCAdQwAAgL+SlCEeQ2Zm5i9BACoChIEIlCEfIBxDAAAAAF8hCUNvEoM6QQAqAtCBCJQhIEO4HoU+QQAqAuSBCJRDrkfhvpIhIUNvEoM6QQAqAuiBCpQhIkEAKgKMwgsgEZUQASEjICNDAAAAQBACISRDAACAP0EAKgIQICSUkyElQwAAgD8gJJMhJiAlICaVISdDAAAAACAlQwAAAEAQAiAmQwAAAEAQApVDAACAv5KXkSEoICcgKJMhKSAjIChDAACAPyAnk5KUISpBACoCkMILIBGVEAEgI5VDAACAv5IhK0EAKgLAwhAgEZUQASEsICxDAAAAQBACIS1DAACAP0EAKgIQIC2UkyEuQwAAgD8gLZMhLyAuIC+VITBDAAAAACAuQwAAAEAQAiAvQwAAAEAQApVDAACAv5KXkSExIDAgMZMhMiAsIDFDAACAPyAwk5KUITNBACoCxMIQIBGVEAEgLJVDAACAv5IhNEEAKgL0whkgEZUQASE1IDVDAAAAQBACITZDAACAP0EAKgIQIDaUkyE3QwAAgD8gNpMhOCA3IDiVITlDAAAAACA3QwAAAEAQAiA4QwAAAEAQApVDAACAv5KXkSE6IDkgOpMhOyA1IDpDAACAPyA5k5KUITxBACoC+MIZIBGVEAEgNZVDAACAv5IhPUEAKgKogx4gEZUQASE+ID5DAAAAQBACIT9DAACAP0EAKgIQID+UkyFAQwAAgD8gP5MhQSBAIEGVIUJDAAAAACBAQwAAAEAQAiBBQwAAAEAQApVDAACAv5KXkSFDIEIgQ5MhRCA+IENDAACAPyBCk5KUIUVBACoCrIMeIBGVEAEgPpVDAACAv5IhRkEAKgLcgyMgEZUQASFHIEdDAAAAQBACIUhDAACAP0EAKgIQIEiUkyFJQwAAgD8gSJMhSiBJIEqVIUtDAAAAACBJQwAAAEAQAiBKQwAAAEAQApVDAACAv5KXkSFMIEsgTJMhTSBHIExDAACAPyBLk5KUIU5BACoC4IMjIBGVEAEgR5VDAACAv5IhT0EAKgKQhCggEZUQASFQIFBDAAAAQBACIVFDAACAP0EAKgIQIFGUkyFSQwAAgD8gUZMhUyBSIFOVIVRDAAAAACBSQwAAAEAQAiBTQwAAAEAQApVDAACAv5KXkSFVIFQgVZMhViBQIFVDAACAPyBUk5KUIVdBACoClIQoIBGVEAEgUJVDAACAv5IhWEEAKgLExCwgEZUQASFZIFlDAAAAQBACIVpDAACAP0EAKgIQIFqUkyFbQwAAgD8gWpMhXCBbIFyVIV1DAAAAACBbQwAAAEAQAiBcQwAAAEAQApVDAACAv5KXkSFeIF0gXpMhXyBeQwAAgD8gXZOSIFmUIWBBACoCyMQsIBGVEAEgWZVDAACAv5IhYUEAIQoDQAJAQQBBATYCAEEAKgIwQQAqAjyUQQAqAjRBACoCyMU1QQAqAszFNZKUkiFiQQAgYkMAAAAAIGK8QYCAgPwHcRs4AjggGEEAKgJElCAZQQAqAsjFNSAaQQAqAjiUkpSSIWNBACBjQwAAAAAgY7xBgICA/AdxGzgCQEHMAEEAKAJIQf//AXFBAnRqQ/MEtT5BACoCQJRDCOU8HpI4AgBDAAAAAEEAKgLcgAhBACoC5IAIQwAAgD+SliAHGyFkQQAgZEMAAAAAIGS8QYCAgPwHcRs4AuCACEMAAAAAQQAqAuyACEEAKgL0gAhDAACAP5KWIAgbIWVBACBlQwAAAAAgZbxBgICA/AdxGzgC8IAIQQAqAvCACEEAKgLcgAhdIQsgBrJDAAAAAEEAKgLogAhBACoC8IAIlEMAAIA/IAsbQQAqAvCACEMAAAAAXRsgHkEAKgLwgAhBACoC3IAIk5RDAACAP5IgHUEAKgLwgAhBACoC7IAIXRsgCxuUQQAqAoCBCCAGGyFmQQAgZkMAAAAAIGa8QYCAgPwHcRs4AvyACEEAQe2cmY4EQQAoAoyBCGxBueAAajYCiIEIQQAqApiBCEEAKgKQgQhDAAAAAEEAKgKogQiTlJIhZ0EAIGdDAAAAACBnvEGAgID8B3EbOAKUgQhBACoCoIEIQQAqApCBCEEAKgKUgQiUkkEBQQAoAgRrspIhaEEAIGhDAAAAACBovEGAgID8B3EbOAKcgQhBACoCnIEIIWlBACBpQwAAAAAgabxBgICA/AdxGzgCpIEIQQAgBkEAKAKwgQhBACoCyIEIQwAAgD9gcnE2AqyBCEEAIAZBACgCuIEIQQFqbDYCtIEIIAlBACoCyIEIQwAAAABecSEMQQAqAryBCEEAKAKwgQhBAEYgBnFBACoCyIEIQwAAgD9dcUEAKAK4gQiyQQAqAtyACF5xQQFBACgCuIEIskEAKgLcgAhda2yylEEAKgLIgQhDAACAP0EAKgLAgQggDLKUk5SSIAxBAEZBACoCyIEIQ703hjVgcrKUIWpBACBqQwAAAAAgarxBgICA/AdxGzgCxIEIIBtBACoC/IAIQQAqAuiACEEAKgLggAhDAAAAAEEAKgL8gAiTlJRBACoC/IAIkkMAAAAAQQAqAuCACEEAKgLcgAhdG0EAKgLggAhDAAAAAF0bIB9BACgCiIEIspRDZmZmP5KUQ83MzD1BACoCpIEIQQAqAsSBCJSUQwAAgD+SlJQhayAgQ3e+fz9BACoC2IEIlJIhbEEAIGxDAAAAACBsvEGAgID8B3EbOALUgQhBACoCzIEIQQAqAtSBCJUhbSBtQwAAwL+SIW4gbqghDSBujiFvIA1BAWohDiAOQQBBACAOSBshDyANQQBBACANSBshEEMAAAA/QeiBCEEAKAJIQYEgIA9BgSAgD0gbQQFqa0H/P3FBAnRqKgIAIG1DAADAvyBvk5KUQeiBCEEAKAJIQYEgIBBBgSAgEEgbQQFqa0H/P3FBAnRqKgIAIG9DAAAgQCBtk5KUkkEAKgLggQiSlCFwQQAgcEMAAAAAIHC8QYCAgPwHcRs4AtyBCEMAAAAAQzMzcz9BACoC3IEIlCBrkpMhcSAhIHGUQzMzMz+SIXIgckMAAIA/XrIgciByQwAAgD9fspSSIXMgayBxIHMgc0MAAIC/YLKUIHNDAACAv12yk5SSIXRB6IEIQQAoAkhB/z9xQQJ0aiB0QwAAAAAgdLxBgICA/AdxGzgCACAiQ3e+fz9BACoC8IEKlJIhdUEAIHVDAAAAACB1vEGAgID8B3EbOALsgQpDzcxMPUMAAIA/QQAqAuyBCpaXIXZB9IEKQQAoAkhB/x9xQQJ0akHogQhBACgCSEEAa0H/P3FBAnRqKgIAIHaUOAIAQ2Zm5j5B9IEKQQAoAkhBACgC9IELa0H/H3FBAnRqKgIAlCF3Q5qZGT9BACoCgMILlEHMAEEAKAJIQQAoAtCACGtB//8BcUECdGoqAgCSIHeTIXhB+IELQQAoAkhB/w9xQQJ0aiB4OAIAQfiBC0EAKAJIQQAoAvjBC2tB/w9xQQJ0aioCACF5QQAgeUMAAAAAIHm8QYCAgPwHcRs4AvzBC0MAAAAAQ5qZGT8geJSTIXogekMAAAAAIHq8QYCAgPwHcRshe0EAKgIwQQAqApjCC5RBACoCNEEAKgKwxTVBACoCtMU1kpSSIXxBACB8QwAAAAAgfLxBgICA/AdxGzgClMILIClBACoCoMILlCAqQQAqArDFNSArQQAqApTCC5SSlJIhfUEAIH1DAAAAACB9vEGAgID8B3EbOAKcwgtBpMILQQAoAkhB//8AcUECdGpD8wS1PkEAKgKcwguUQwjlPB6SOAIAQ5qZGT9BACoCtMIQlEGkwgtBACgCSEEAKAKowg9rQf//AHFBAnRqKgIAkiB3kiF+QazCD0EAKAJIQf8fcUECdGogfjgCAEGswg9BACgCSEEAKAKswhBrQf8fcUECdGoqAgAhf0EAIH9DAAAAACB/vEGAgID8B3EbOAKwwhBDAAAAAEOamRk/IH6UkyGAASCAAUMAAAAAIIABvEGAgID8B3EbIYEBQQAqAjBBACoCzMIQlEEAKgI0QQAqApjFNUEAKgKcxTWSlJIhggFBACCCAUMAAAAAIIIBvEGAgID8B3EbOALIwhAgMkEAKgLUwhCUIDNBACoCmMU1IDRBACoCyMIQlJKUkiGDAUEAIIMBQwAAAAAggwG8QYCAgPwHcRs4AtDCEEHYwhBBACgCSEH//wFxQQJ0akPzBLU+QQAqAtDCEJRDCOU8HpI4AgBDmpkZP0EAKgLowhmUQdjCEEEAKAJIQQAoAtzCGGtB//8BcUECdGoqAgCSIHeTIYQBQeDCGEEAKAJIQf8fcUECdGoghAE4AgBB4MIYQQAoAkhBACgC4MIZa0H/H3FBAnRqKgIAIYUBQQAghQFDAAAAACCFAbxBgICA/AdxGzgC5MIZQwAAAABDmpkZPyCEAZSTIYYBIIYBQwAAAAAghgG8QYCAgPwHcRshhwFBACoCtMIQQQAqAujCGZIhiAFBACoCgMILIIgBkiGJAUEAKgIwQQAqAoDDGZRBACoCNEEAKgL0xDVBACoC+MQ1kpSSIYoBQQAgigFDAAAAACCKAbxBgICA/AdxGzgC/MIZIDtBACoCiMMZlCA8QQAqAvTENSA9QQAqAvzCGZSSlJIhiwFBACCLAUMAAAAAIIsBvEGAgID8B3EbOAKEwxlBjMMZQQAoAkhB//8AcUECdGpD8wS1PkEAKgKEwxmUQwjlPB6SOAIAQYzDGUEAKAJIQQAoApDDHWtB//8AcUECdGoqAgAgd5JDmpkZP0EAKgKcgx6UkyGMAUGUwx1BACgCSEH/D3FBAnRqIIwBOAIAQZTDHUEAKAJIQQAoApSDHmtB/w9xQQJ0aioCACGNAUEAII0BQwAAAAAgjQG8QYCAgPwHcRs4ApiDHkOamRk/IIwBlCGOASCOAUMAAAAAII4BvEGAgID8B3EbIY8BQQAqAjBBACoCtIMelEEAKgI0QQAqAqTFNUEAKgKoxTWSlJIhkAFBACCQAUMAAAAAIJABvEGAgID8B3EbOAKwgx4gREEAKgK8gx6UIEVBACoCpMU1IEZBACoCsIMelJKUkiGRAUEAIJEBQwAAAAAgkQG8QYCAgPwHcRs4AriDHkHAgx5BACgCSEH//wBxQQJ0akPzBLU+QQAqAriDHpRDCOU8HpI4AgAgd0HAgx5BACgCSEEAKALEgyJrQf//AHFBAnRqKgIAkkOamRk/QQAqAtCDI5STIZIBQciDIkEAKAJIQf8fcUECdGogkgE4AgBByIMiQQAoAkhBACgCyIMja0H/H3FBAnRqKgIAIZMBQQAgkwFDAAAAACCTAbxBgICA/AdxGzgCzIMjQ5qZGT8gkgGUIZQBIJQBQwAAAAAglAG8QYCAgPwHcRshlQFBACoCMEEAKgLogyOUQQAqAjRBACoCjMU1QQAqApDFNZKUkiGWAUEAIJYBQwAAAAAglgG8QYCAgPwHcRs4AuSDIyBNQQAqAvCDI5QgTkEAKgKMxTUgT0EAKgLkgyOUkpSSIZcBQQAglwFDAAAAACCXAbxBgICA/AdxGzgC7IMjQfSDI0EAKAJIQf//AHFBAnRqQ/MEtT5BACoC7IMjlEMI5TwekjgCAEH0gyNBACgCSEEAKAL4gydrQf//AHFBAnRqKgIAIHdDmpkZP0EAKgKEhCiUkpMhmAFB/IMnQQAoAkhB/x9xQQJ0aiCYATgCAEH8gydBACgCSEEAKAL8gyhrQf8fcUECdGoqAgAhmQFBACCZAUMAAAAAIJkBvEGAgID8B3EbOAKAhChDmpkZPyCYAZQhmgEgmgFDAAAAACCaAbxBgICA/AdxGyGbAUEAKgIwQQAqApyEKJRBACoCNEEAKgK8xTVBACoCwMU1kpSSIZwBQQAgnAFDAAAAACCcAbxBgICA/AdxGzgCmIQoIFZBACoCpIQolCBXQQAqArzFNSBYQQAqApiEKJSSlJIhnQFBACCdAUMAAAAAIJ0BvEGAgID8B3EbOAKghChBqIQoQQAoAkhB//8AcUECdGpD8wS1PkEAKgKghCiUQwjlPB6SOAIAQaiEKEEAKAJIQQAoAqyELGtB//8AcUECdGoqAgAgd0OamRk/QQAqArjELJSSkyGeAUGwhCxBACgCSEH/D3FBAnRqIJ4BOAIAQbCELEEAKAJIQQAoArDELGtB/w9xQQJ0aioCACGfAUEAIJ8BQwAAAAAgnwG8QYCAgPwHcRs4ArTELEOamRk/IJ4BlCGgASCgAUMAAAAAIKABvEGAgID8B3EbIaEBQQAqAjBBACoC0MQslEEAKgI0QQAqAoDFNUEAKgKExTWSlJIhogFBACCiAUMAAAAAIKIBvEGAgID8B3EbOALMxCwgX0EAKgLYxCyUIGBBACoCgMU1IGFBACoCzMQslJKUkiGjAUEAIKMBQwAAAAAgowG8QYCAgPwHcRs4AtTELEHcxCxBACgCSEH//wFxQQJ0akPzBLU+QQAqAtTELJRDCOU8HpI4AgBB3MQsQQAoAkhBACgC4MQ0a0H//wFxQQJ0aioCACB3kkOamRk/QQAqAuzENZSSIaQBQeTENEEAKAJIQf8fcUECdGogpAE4AgBB5MQ0QQAoAkhBACgC5MQ1a0H/H3FBAnRqKgIAIaUBQQAgpQFDAAAAACClAbxBgICA/AdxGzgC6MQ1QwAAAABDmpkZPyCkAZSTIaYBIKYBQwAAAAAgpgG8QYCAgPwHcRshpwEgiQEgjwGSIJUBkiCbAZIgoQGSIKcBkiCBAZIghwGSIHuSQQAqApyDHpJBACoC0IMjkkEAKgKEhCiSQQAqArjELJJBACoC7MQ1kiGoAUEAIKgBQwAAAAAgqAG8QYCAgPwHcRs4AvDENUEAKgK4xCxBACoChIQoQQAqAtCDI0EAKgKcgx4goQEgmwEgjwEglQGSkpKSkpKSIIkBIKcBkiCBAZIghwGSIHuSQQAqAuzENZKTIakBQQAgqQFDAAAAACCpAbxBgICA/AdxGzgC/MQ1QQAqAujCGUEAKgKAwguSIaoBQQAqApyDHiCBASCnASCVAUEAKgK0whAgjwGSkpKSkkEAKgLQgyOSQQAqAuzENZIgeyCHASChASCqASCbAZKSkpJBACoChIQokkEAKgK4xCySkyGrAUEAIKsBQwAAAAAgqwG8QYCAgPwHcRs4AojFNUEAKgKcgx4geyCHASCVASCqASCPAZKSkpKSQQAqAtCDI5IggQEgpwEgoQFBACoCtMIQIJsBkpKSkkEAKgKEhCiSQQAqArjELJJBACoC7MQ1kpMhrAFBACCsAUMAAAAAIKwBvEGAgID8B3EbOAKUxTVBACoCtMIQQQAqAoDCC5IhrQFBACoCnIMeIIcBIKcBIJsBQQAqAujCGSCPAZKSkpKSQQAqAoSEKJJBACoC7MQ1kiB7IIEBIKEBIJUBIK0BkpKSkkEAKgLQgyOSQQAqArjELJKTIa4BQQAgrgFDAAAAACCuAbxBgICA/AdxGzgCoMU1QQAqApyDHiB7IIEBIJsBII8BIK0BkpKSkpJBACoChIQokiCHASCnASChAUEAKgLowhkglQGSkpKSQQAqAtCDI5JBACoCuMQskkEAKgLsxDWSkyGvAUEAIK8BQwAAAAAgrwG8QYCAgPwHcRs4AqzFNUEAKgKcgx4geyCnASChAUEAKgKAwgsgjwGSkpKSkkEAKgK4xCySQQAqAuzENZIghwEggQEgmwEgiAEglQGSkpKSQQAqAtCDI5JBACoChIQokpMhsAFBACCwAUMAAAAAILABvEGAgID8B3EbOAK4xTVBACoCnIMeIIcBIIEBIKEBIIgBII8BkpKSkpJBACoCuMQskiB7IKcBIJsBQQAqAoDCCyCVAZKSkpJBACoC0IMjkkEAKgKEhCiSQQAqAuzENZKTIbEBQQAgsQFDAAAAACCxAbxBgICA/AdxGzgCxMU1QwAAwD9B6IEIQQAoAkhBAGtB/z9xQQJ0aioCAEMAAIA/IHaTlJQhsgEgBCAKakOkcL0+QQAqAvzENUEAKgKIxTWSlCCyAZI4AgAgBSAKaiCyAUOkcL0+QQAqAvzENUEAKgKIxTWTlJI4AgBBAEEAKAIANgIEQQBBACoCODgCPEEAQQAqAkA4AkRBAEEAKAJIQQFqNgJIQQBBACoC4IAIOALkgAhBAEEAKgLwgAg4AvSACEEAQQAqAvyACDgCgIEIQQBBACgCiIEINgKMgQhBAEEAKgKUgQg4ApiBCEEAQQAqApyBCDgCoIEIQQBBACoCpIEIOAKogQhBAEEAKAKsgQg2ArCBCEEAQQAoArSBCDYCuIEIQQBBACoCxIEIOALIgQhBAEEAKgLUgQg4AtiBCEEAQQAqAtyBCDgC4IEIQQBBACoC7IEKOALwgQpBAEEAKgL8wQs4AoDCC0EAQQAqApTCCzgCmMILQQBBACoCnMILOAKgwgtBAEEAKgKwwhA4ArTCEEEAQQAqAsjCEDgCzMIQQQBBACoC0MIQOALUwhBBAEEAKgLkwhk4AujCGUEAQQAqAvzCGTgCgMMZQQBBACoChMMZOAKIwxlBAEEAKgKYgx44ApyDHkEAQQAqArCDHjgCtIMeQQBBACoCuIMeOAK8gx5BAEEAKgLMgyM4AtCDI0EAQQAqAuSDIzgC6IMjQQBBACoC7IMjOALwgyNBAEEAKgKAhCg4AoSEKEEAQQAqApiEKDgCnIQoQQBBACoCoIQoOAKkhChBAEEAKgK0xCw4ArjELEEAQQAqAszELDgC0MQsQQBBACoC1MQsOALYxCxBAEEAKgLoxDU4AuzENUEAQQAqAvTENTgC+MQ1QQBBACoC8MQ1OAL0xDVBAEEAKgKAxTU4AoTFNUEAQQAqAvzENTgCgMU1QQBBACoCjMU1OAKQxTVBAEEAKgKIxTU4AozFNUEAQQAqApjFNTgCnMU1QQBBACoClMU1OAKYxTVBAEEAKgKkxTU4AqjFNUEAQQAqAqDFNTgCpMU1QQBBACoCsMU1OAK0xTVBAEEAKgKsxTU4ArDFNUEAQQAqArzFNTgCwMU1QQBBACoCuMU1OAK8xTVBAEEAKgLIxTU4AszFNUEAQQAqAsTFNTgCyMU1IApBBGohCiAKQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIIDwuOgICAAAAgACABEAQgACABEA0L1JmAgAABQH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACFAQQAhAQNAAkBBACABQQJ0akEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkBBOCACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBwAAgA0ECdGpDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAQQA2AkhBACEEA0ACQEHMACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQYCAAkgEQAwCDAELCwtBACEFA0ACQEHggAggBUECdGpDAAAAADgCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAQfCACCAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQJIBEAMAgwBCwsLQQAhBwNAAkBB/IAIIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBAkgEQAwCDAELCwtBACEIA0ACQEGIgQggCEECdGpBADYCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQZSBCCAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBBnIEIIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGkgQggC0ECdGpDAAAAADgCACALQQFqIQsgC0ECSARADAIMAQsLC0EAIQwDQAJAQayBCCAMQQJ0akEANgIAIAxBAWohDCAMQQJIBEAMAgwBCwsLQQAhDQNAAkBBtIEIIA1BAnRqQQA2AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQEHEgQggDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQdSBCCAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkBB3IEIIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBAkgEQAwCDAELCwtBACERA0ACQEHogQggEUECdGpDAAAAADgCACARQQFqIREgEUGAwABIBEAMAgwBCwsLQQAhEgNAAkBB7IEKIBJBAnRqQwAAAAA4AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEH0gQogE0ECdGpDAAAAADgCACATQQFqIRMgE0GAIEgEQAwCDAELCwtBACEUA0ACQEH4gQsgFEECdGpDAAAAADgCACAUQQFqIRQgFEGAEEgEQAwCDAELCwtBACEVA0ACQEH8wQsgFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQZTCCyAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBnMILIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBAkgEQAwCDAELCwtBACEYA0ACQEGkwgsgGEECdGpDAAAAADgCACAYQQFqIRggGEGAgAFIBEAMAgwBCwsLQQAhGQNAAkBBrMIPIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBgCBIBEAMAgwBCwsLQQAhGgNAAkBBsMIQIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBAkgEQAwCDAELCwtBACEbA0ACQEHIwhAgG0ECdGpDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAQdDCECAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQQJIBEAMAgwBCwsLQQAhHQNAAkBB2MIQIB1BAnRqQwAAAAA4AgAgHUEBaiEdIB1BgIACSARADAIMAQsLC0EAIR4DQAJAQeDCGCAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQYAgSARADAIMAQsLC0EAIR8DQAJAQeTCGSAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkBB/MIZICBBAnRqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQEGEwxkgIUECdGpDAAAAADgCACAhQQFqISEgIUECSARADAIMAQsLC0EAISIDQAJAQYzDGSAiQQJ0akMAAAAAOAIAICJBAWohIiAiQYCAAUgEQAwCDAELCwtBACEjA0ACQEGUwx0gI0ECdGpDAAAAADgCACAjQQFqISMgI0GAEEgEQAwCDAELCwtBACEkA0ACQEGYgx4gJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQbCDHiAlQQJ0akMAAAAAOAIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBBuIMeICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBAkgEQAwCDAELCwtBACEnA0ACQEHAgx4gJ0ECdGpDAAAAADgCACAnQQFqIScgJ0GAgAFIBEAMAgwBCwsLQQAhKANAAkBByIMiIChBAnRqQwAAAAA4AgAgKEEBaiEoIChBgCBIBEAMAgwBCwsLQQAhKQNAAkBBzIMjIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEHkgyMgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQeyDIyArQQJ0akMAAAAAOAIAICtBAWohKyArQQJIBEAMAgwBCwsLQQAhLANAAkBB9IMjICxBAnRqQwAAAAA4AgAgLEEBaiEsICxBgIABSARADAIMAQsLC0EAIS0DQAJAQfyDJyAtQQJ0akMAAAAAOAIAIC1BAWohLSAtQYAgSARADAIMAQsLC0EAIS4DQAJAQYCEKCAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQJIBEAMAgwBCwsLQQAhLwNAAkBBmIQoIC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BAkgEQAwCDAELCwtBACEwA0ACQEGghCggMEECdGpDAAAAADgCACAwQQFqITAgMEECSARADAIMAQsLC0EAITEDQAJAQaiEKCAxQQJ0akMAAAAAOAIAIDFBAWohMSAxQYCAAUgEQAwCDAELCwtBACEyA0ACQEGwhCwgMkECdGpDAAAAADgCACAyQQFqITIgMkGAEEgEQAwCDAELCwtBACEzA0ACQEG0xCwgM0ECdGpDAAAAADgCACAzQQFqITMgM0ECSARADAIMAQsLC0EAITQDQAJAQczELCA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QQJIBEAMAgwBCwsLQQAhNQNAAkBB1MQsIDVBAnRqQwAAAAA4AgAgNUEBaiE1IDVBAkgEQAwCDAELCwtBACE2A0ACQEHcxCwgNkECdGpDAAAAADgCACA2QQFqITYgNkGAgAJIBEAMAgwBCwsLQQAhNwNAAkBB5MQ0IDdBAnRqQwAAAAA4AgAgN0EBaiE3IDdBgCBIBEAMAgwBCwsLQQAhOANAAkBB6MQ1IDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBAkgEQAwCDAELCwtBACE5A0ACQEHwxDUgOUECdGpDAAAAADgCACA5QQFqITkgOUEDSARADAIMAQsLC0EAIToDQAJAQfzENSA6QQJ0akMAAAAAOAIAIDpBAWohOiA6QQNIBEAMAgwBCwsLQQAhOwNAAkBBiMU1IDtBAnRqQwAAAAA4AgAgO0EBaiE7IDtBA0gEQAwCDAELCwtBACE8A0ACQEGUxTUgPEECdGpDAAAAADgCACA8QQFqITwgPEEDSARADAIMAQsLC0EAIT0DQAJAQaDFNSA9QQJ0akMAAAAAOAIAID1BAWohPSA9QQNIBEAMAgwBCwsLQQAhPgNAAkBBrMU1ID5BAnRqQwAAAAA4AgAgPkEBaiE+ID5BA0gEQAwCDAELCwtBACE/A0ACQEG4xTUgP0ECdGpDAAAAADgCACA/QQFqIT8gP0EDSARADAIMAQsLC0EAIUADQAJAQcTFNSBAQQJ0akMAAAAAOAIAIEBBAWohQCBAQQNIBEAMAgwBCwsLC6iOgIAAAEEAIAE2AghBAEMAgDtIQwAAgD9BACgCCLKXljgCDEEAQx1DE0dBACoCDJUQADgCEEEAQ1JFYT5BACoCDJRDAAAAP5KOOAIUQQBDAAAAAENVDN1AQQAqAhSUk0EAKgIMlTgCGEEAQwAAAD9BACoCGJQ4AhxBAEOrqqo+QQAqAhiUOAIkQQBDAACAP0NjFB1EQQAqAgyVEAOVOAIoQQBBACoCKEMAAIA/kjgCLEEAQwAAAABDAACAP0EAKgIok0EAKgIslZM4AjBBAEMAAIA/QQAqAiyVOAI0QQBD1qecPEEAKgIMlEMAAAA/ko44AsyACEEAQwAAgEZDAAAAAEEAKgIUQQAqAsyACJOXlqg2AtCACEEAQ83MzD1BACoCDJQ4AtyACEEAQwAAIEFBACoCDJU4AuiACEEAQ5qZGT5BACoCDJQ4AuyACEEAQwAAoEFBACoCDJU4AviACEEAQ9FT+0FBACoCDJU4ApCBCEEAQ+Q4jj9BACoCDJU4AryBCEEAQwAAgD9DAACAP0MAUMNHQwAAyEJBACoCDJUQApWTOALAgQhBAEMAAAA/QQAqAgyUOALMgQhBAEMAAABGQwAAAABDCtejPEEAKgIMlJeWqDYC9IELQQBDAACAREMAAAAAQQAqAsyACEMAAIC/kpeWqDYC+MELQQBDFOtEPkEAKgIMlEMAAAA/ko44AoTCC0EAQwAAAABDVQzdQEEAKgKEwguUk0EAKgIMlTgCiMILQQBDAAAAP0EAKgKIwguUOAKMwgtBAEOrqqo+QQAqAojCC5Q4ApDCC0EAQ67z7zxBACoCDJRDAAAAP5KOOAKkwg9BAEMAAABGQwAAAABBACoChMILQQAqAqTCD5OXlqg2AqjCD0EAQwAAAEVDAAAAAEEAKgKkwg9DAACAv5KXlqg2AqzCEEEAQziHgz5BACoCDJRDAAAAP5KOOAK4whBBAEMAAAAAQ1UM3UBBACoCuMIQlJNBACoCDJU4ArzCEEEAQwAAAD9BACoCvMIQlDgCwMIQQQBDq6qqPkEAKgK8whCUOALEwhBBAEN16d88QQAqAgyUQwAAAD+SjjgC2MIYQQBDAACARkMAAAAAQQAqArjCEEEAKgLYwhiTl5aoNgLcwhhBAEMAAABFQwAAAABBACoC2MIYQwAAgL+Sl5aoNgLgwhlBAEPZzRw+QQAqAgyUQwAAAD+SjjgC7MIZQQBDAAAAAENVDN1AQQAqAuzCGZSTQQAqAgyVOALwwhlBAEMAAAA/QQAqAvDCGZQ4AvTCGUEAQ6uqqj5BACoC8MIZlDgC+MIZQQBDqKymPEEAKgIMlEMAAAA/ko44AozDHUEAQwAAAEZDAAAAAEEAKgLswhlBACoCjMMdk5eWqDYCkMMdQQBDAACAREMAAAAAQQAqAozDHUMAAIC/kpeWqDYClIMeQQBD9+cyPkEAKgIMlEMAAAA/ko44AqCDHkEAQwAAAABDVQzdQEEAKgKggx6Uk0EAKgIMlTgCpIMeQQBDAAAAP0EAKgKkgx6UOAKogx5BAEOrqqo+QQAqAqSDHpQ4AqyDHkEAQyuhuzxBACoCDJRDAAAAP5KOOALAgyJBAEMAAABGQwAAAABBACoCoIMeQQAqAsCDIpOXlqg2AsSDIkEAQwAAAEVDAAAAAEEAKgLAgyJDAACAv5KXlqg2AsiDI0EAQ7TnAj5BACoCDJRDAAAAP5KOOALUgyNBAEMAAAAAQ1UM3UBBACoC1IMjlJNBACoCDJU4AtiDI0EAQwAAAD9BACoC2IMjlDgC3IMjQQBDq6qqPkEAKgLYgyOUOALggyNBAEMycwE9QQAqAgyUQwAAAD+SjjgC9IMnQQBDAAAARkMAAAAAQQAqAtSDI0EAKgL0gyeTl5aoNgL4gydBAEMAAABFQwAAAABBACoC9IMnQwAAgL+Sl5aoNgL8gyhBAEMAAAA+QQAqAgyUQwAAAD+SjjgCiIQoQQBDAAAAAENVDN1AQQAqAoiEKJSTQQAqAgyVOAKMhChBAEMAAAA/QQAqAoyEKJQ4ApCEKEEAQ6uqqj5BACoCjIQolDgClIQoQQBD8X5cPEEAKgIMlEMAAAA/ko44AqiELEEAQwAAAEZDAAAAAEEAKgKIhChBACoCqIQsk5eWqDYCrIQsQQBDAACAREMAAAAAQQAqAqiELEMAAIC/kpeWqDYCsMQsQQBDN3BXPkEAKgIMlEMAAAA/ko44ArzELEEAQwAAAABDVQzdQEEAKgK8xCyUk0EAKgIMlTgCwMQsQQBDAAAAP0EAKgLAxCyUOALExCxBAEOrqqo+QQAqAsDELJQ4AsjELEEAQ40OyDxBACoCDJRDAAAAP5KOOALcxDRBAEMAAIBGQwAAAABBACoCvMQsQQAqAtzENJOXlqg2AuDENEEAQwAAAEVDAAAAAEEAKgLcxDRDAACAv5KXlqg2AuTENQuQgICAAAAgACABEAwgABAOIAAQCwvUgICAAABBAENmZuY+OAIgQQBDzcxMPzgC1IAIQQBDAAAAADgC2IAIQQBDCtejPDgChIEIQQBDAADcQzgC0IEIQQBDAACAPjgC5IEIQQBDukkMPjgC6IEKC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC8OagIAAAQBBAAu8GnsibmFtZSI6IkNsYXJpbmV0IiwidmVyc2lvbiI6IjIuNS4xOSIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiODc3MjY0IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTYwIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTIwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzAwIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwNzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
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
        
        this.factory = ClarinetProcessor.Clarinet_instance.exports;
        this.HEAP = ClarinetProcessor.Clarinet_instance.exports.memory.buffer;
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
    let wasm_module = new WebAssembly.Module(ClarinetProcessor.atob(getBase64CodeClarinet()));
    ClarinetProcessor.Clarinet_instance = new WebAssembly.Instance(wasm_module, ClarinetProcessor.importObject);
    registerProcessor('Clarinet', ClarinetProcessor);
} catch (e) {
    console.log(e); console.log("Faust Clarinet cannot be loaded or compiled");
}

