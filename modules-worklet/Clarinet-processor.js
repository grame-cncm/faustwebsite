
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"filename\":\"Clarinet\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877272\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Clarinet\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131288\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131212\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131308\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164080\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfdGFuZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYeAgIAAAQCQgICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAAra64CAAA6CgICAAAALuMGAgAACDX+kAX1BACEEQQAhBUMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEEAIQZBACEHQQAhCEMAAAAAIR1DAAAAACEeQQAhCUMAAAAAIR9DAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEEAIQpDAAAAACFhQwAAAAAhYkMAAAAAIWNDAAAAACFkQQAhC0MAAAAAIWVDAAAAACFmQwAAAAAhZ0MAAAAAIWhBACEMQwAAAAAhaUMAAAAAIWpDAAAAACFrQwAAAAAhbEMAAAAAIW1BACENQwAAAAAhbkEAIQ5BACEPQQAhEEMAAAAAIW9DAAAAACFwQwAAAAAhcUMAAAAAIXJDAAAAACFzQwAAAAAhdEMAAAAAIXVDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFDAAAAACGEAUMAAAAAIYUBQwAAAAAhhgFDAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBQwAAAAAhswFDAAAAACG0ASADQQBqKAIAIQQgA0EEaigCACEFQ83MTD1DAAAAQEEAKgIglpchEUEAKgIcIBGVEAEhEiASQwAAAEAQAiETQwAAgD9BACoCECATlJMhFEMAAIA/IBOTIRUgFCAVlSEWQwAAAAAgFEMAAABAEAIgFUMAAABAEAKVQwAAgL+Sl5EhFyAWIBeTIRggEiAXQwAAgD8gFpOSlCEZQQAqAiQgEZUQASASlUMAAIC/kiEaQQAqAtSACCEbQQAqAtiACCEcIBxDAAAAAF4hBiAGQQBKIQcgHEMAAAAAW0EASiEIQQAqAviACCAcQwAAgL+SlCEdQ2Zm5i9BACoCjIEIlCEeIBxDAAAAAF8hCUNvEoM6QQAqAtiBCJQhH0O4HoU+QQAqAuyBCJRDrkfhvpIhIENvEoM6QQAqAvCBCpQhIUEAKgKUwgsgEZUQASEiICJDAAAAQBACISNDAACAP0EAKgIQICOUkyEkQwAAgD8gI5MhJSAkICWVISZDAAAAACAkQwAAAEAQAiAlQwAAAEAQApVDAACAv5KXkSEnICYgJ5MhKCAiICdDAACAPyAmk5KUISlBACoCmMILIBGVEAEgIpVDAACAv5IhKkEAKgLIwhQgEZUQASErICtDAAAAQBACISxDAACAP0EAKgIQICyUkyEtQwAAgD8gLJMhLiAtIC6VIS9DAAAAACAtQwAAAEAQAiAuQwAAAEAQApVDAACAv5KXkSEwIC8gMJMhMSArIDBDAACAPyAvk5KUITJBACoCzMIUIBGVEAEgK5VDAACAv5IhM0EAKgL8whkgEZUQASE0IDRDAAAAQBACITVDAACAP0EAKgIQIDWUkyE2QwAAgD8gNZMhNyA2IDeVIThDAAAAACA2QwAAAEAQAiA3QwAAAEAQApVDAACAv5KXkSE5IDggOZMhOiA0IDlDAACAPyA4k5KUITtBACoCgMMZIBGVEAEgNJVDAACAv5IhPEEAKgKwwyIgEZUQASE9ID1DAAAAQBACIT5DAACAP0EAKgIQID6UkyE/QwAAgD8gPpMhQCA/IECVIUFDAAAAACA/QwAAAEAQAiBAQwAAAEAQApVDAACAv5KXkSFCIEEgQpMhQyA9IEJDAACAPyBBk5KUIURBACoCtMMiIBGVEAEgPZVDAACAv5IhRUEAKgLkgycgEZUQASFGIEZDAAAAQBACIUdDAACAP0EAKgIQIEeUkyFIQwAAgD8gR5MhSSBIIEmVIUpDAAAAACBIQwAAAEAQAiBJQwAAAEAQApVDAACAv5KXkSFLIEogS5MhTCBGIEtDAACAPyBKk5KUIU1BACoC6IMnIBGVEAEgRpVDAACAv5IhTkEAKgKYhCwgEZUQASFPIE9DAAAAQBACIVBDAACAP0EAKgIQIFCUkyFRQwAAgD8gUJMhUiBRIFKVIVNDAAAAACBRQwAAAEAQAiBSQwAAAEAQApVDAACAv5KXkSFUIFMgVJMhVSBPIFRDAACAPyBTk5KUIVZBACoCnIQsIBGVEAEgT5VDAACAv5IhV0EAKgLMhDEgEZUQASFYIFhDAAAAQBACIVlDAACAP0EAKgIQIFmUkyFaQwAAgD8gWZMhWyBaIFuVIVxDAAAAACBaQwAAAEAQAiBbQwAAAEAQApVDAACAv5KXkSFdIFwgXZMhXiBYIF1DAACAPyBck5KUIV9BACoC0IQxIBGVEAEgWJVDAACAv5IhYEEAIQoDQAJAQQBBATYCAEEAKgIwQQAqAjyUQQAqAjRBACoC0MU1QQAqAtTFNZKUkiFhQQAgYUMAAAAAIGG8QYCAgPwHcRs4AjggGEEAKgJElCAZQQAqAtDFNSAaQQAqAjiUkpSSIWJBACBiQwAAAAAgYrxBgICA/AdxGzgCQEHMAEEAKAJIQf//AXFBAnRqQ/MEtT5BACoCQJRDCOU8HpI4AgBDAAAAAEEAKgLggAhBACoC6IAIQwAAgD+SliAHGyFjQQAgY0MAAAAAIGO8QYCAgPwHcRs4AuSACEMAAAAAQQAqAuyACEEAKgL0gAhDAACAP5KWIAgbIWRBACBkQwAAAAAgZLxBgICA/AdxGzgC8IAIQQAqAvCACEEAKgLcgAhdIQsgBrJDAAAAAEEAKgL8gAhBACoC8IAIlEMAAIA/IAsbQQAqAvCACEMAAAAAXRsgHUEAKgLwgAhBACoC3IAIk5RDAACAP5IgHEEAKgLwgAhBACoC7IAIXRsgCxuUQQAqAoSBCCAGGyFlQQAgZUMAAAAAIGW8QYCAgPwHcRs4AoCBCEEAQe2cmY4EQQAoApSBCGxBueAAajYCkIEIQQAqAqCBCEEAKgKYgQhDAAAAAEEAKgKwgQiTlJIhZkEAIGZDAAAAACBmvEGAgID8B3EbOAKcgQhBACoCqIEIQQAqApiBCEEAKgKcgQiUkkEBQQAoAgRrspIhZ0EAIGdDAAAAACBnvEGAgID8B3EbOAKkgQhBACoCpIEIIWhBACBoQwAAAAAgaLxBgICA/AdxGzgCrIEIQQAgBkEAKAK4gQhBACoC0IEIQwAAgD9gcnE2ArSBCEEAIAZBACgCwIEIQQFqbDYCvIEIIAlBACoC0IEIQwAAAABecSEMIAxBAEZBACoC0IEIQ703hjVgcrJBACoCxIEIQQAoAriBCEEARiAGcUEAKgLQgQhDAACAP11xQQAoAsCBCLJBACoC3IAIXnFBAUEAKALAgQiyQQAqAtyACF1rbLKUQQAqAtCBCEMAAIA/QQAqAsiBCCAMspSTlJKUIWlBACBpQwAAAAAgabxBgICA/AdxGzgCzIEIIBtBACoCgIEIQQAqAoCBCEEAKgKIgQhBACoC5IAIQwAAAABBACoCgIEIk5SUkkMAAAAAQQAqAuSACEEAKgLggAhdG0EAKgLkgAhDAAAAAF0bIB5BACgCkIEIspRDZmZmP5KUQ83MzD1BACoCrIEIQQAqAsyBCJSUQwAAgD+SlJQhaiAfQ3e+fz9BACoC4IEIlJIha0EAIGtDAAAAACBrvEGAgID8B3EbOALcgQhBACoC1IEIQQAqAtyBCJUhbCBsQwAAwL+SIW0gbaghDSBtjiFuIA1BAWohDiANQQBBACANSBshDyAOQQBBACAOSBshEEMAAAA/QQAqAuiBCEHwgQhBACgCSEGBICAPQYEgIA9IG0EBamtB/z9xQQJ0aioCACBuQwAAIEAgbJOSlCBsQwAAwL8gbpOSQfCBCEEAKAJIQYEgIBBBgSAgEEgbQQFqa0H/P3FBAnRqKgIAlJKSlCFvQQAgb0MAAAAAIG+8QYCAgPwHcRs4AuSBCEMAAAAAQzMzcz9BACoC5IEIlCBqkpMhcCAgIHCUQzMzMz+SIXEgcUMAAIA/XrIgcSBxQwAAgD9fspSSIXIgaiBwIHIgckMAAIC/YLKUIHJDAACAv12yk5SSIXNB8IEIQQAoAkhB/z9xQQJ0aiBzQwAAAAAgc7xBgICA/AdxGzgCACAhQ3e+fz9BACoC+IEKlJIhdEEAIHRDAAAAACB0vEGAgID8B3EbOAL0gQpDzcxMPUMAAIA/QQAqAvSBCpaXIXVB/IEKQQAoAkhB/x9xQQJ0akHwgQhBACgCSEEAa0H/P3FBAnRqKgIAIHWUOAIAQ2Zm5j5B/IEKQQAoAkhBACgC/IELa0H/H3FBAnRqKgIAlCF2Q5qZGT9BACoCiMILlEHMAEEAKAJIQQAoAtCACGtB//8BcUECdGoqAgCSIHaTIXdBgIILQQAoAkhB/w9xQQJ0aiB3OAIAQYCCC0EAKAJIQQAoAoDCC2tB/w9xQQJ0aioCACF4QQAgeEMAAAAAIHi8QYCAgPwHcRs4AoTCC0MAAAAAQ5qZGT8gd5STIXkgeUMAAAAAIHm8QYCAgPwHcRshekEAKgIwQQAqAqDCC5RBACoCNEEAKgKgxTVBACoCpMU1kpSSIXtBACB7QwAAAAAge7xBgICA/AdxGzgCnMILIChBACoCqMILlCApQQAqAqDFNSAqQQAqApzCC5SSlJIhfEEAIHxDAAAAACB8vEGAgID8B3EbOAKkwgtBrMILQQAoAkhB//8BcUECdGpD8wS1PkEAKgKkwguUQwjlPB6SOAIAQ5qZGT9BACoCvMIUlEGswgtBACgCSEEAKAKwwhNrQf//AXFBAnRqKgIAkiB2kyF9QbTCE0EAKAJIQf8fcUECdGogfTgCAEG0whNBACgCSEEAKAK0whRrQf8fcUECdGoqAgAhfkEAIH5DAAAAACB+vEGAgID8B3EbOAK4whRDAAAAAEOamRk/IH2UkyF/IH9DAAAAACB/vEGAgID8B3EbIYABQQAqAjBBACoC1MIUlEEAKgI0QQAqArjFNUEAKgK8xTWSlJIhgQFBACCBAUMAAAAAIIEBvEGAgID8B3EbOALQwhQgMUEAKgLcwhSUIDJBACoCuMU1IDNBACoC0MIUlJKUkiGCAUEAIIIBQwAAAAAgggG8QYCAgPwHcRs4AtjCFEHgwhRBACgCSEH//wBxQQJ0akPzBLU+QQAqAtjCFJRDCOU8HpI4AgBB4MIUQQAoAkhBACgC5MIYa0H//wBxQQJ0aioCACB2Q5qZGT9BACoC8MIZlJKSIYMBQejCGEEAKAJIQf8fcUECdGoggwE4AgBB6MIYQQAoAkhBACgC6MIZa0H/H3FBAnRqKgIAIYQBQQAghAFDAAAAACCEAbxBgICA/AdxGzgC7MIZQwAAAABDmpkZPyCDAZSTIYUBIIUBQwAAAAAghQG8QYCAgPwHcRshhgFBACoCMEEAKgKIwxmUQQAqAjRBACoCiMU1QQAqAozFNZKUkiGHAUEAIIcBQwAAAAAghwG8QYCAgPwHcRs4AoTDGSA6QQAqApDDGZQgO0EAKgKIxTUgPEEAKgKEwxmUkpSSIYgBQQAgiAFDAAAAACCIAbxBgICA/AdxGzgCjMMZQZTDGUEAKAJIQf//AXFBAnRqQ/MEtT5BACoCjMMZlEMI5TwekjgCAEGUwxlBACgCSEEAKAKYwyFrQf//AXFBAnRqKgIAIHZDmpkZP0EAKgKkwyKUkpIhiQFBnMMhQQAoAkhB/x9xQQJ0aiCJATgCAEGcwyFBACgCSEEAKAKcwyJrQf8fcUECdGoqAgAhigFBACCKAUMAAAAAIIoBvEGAgID8B3EbOAKgwyJDAAAAAEOamRk/IIkBlJMhiwEgiwFDAAAAACCLAbxBgICA/AdxGyGMAUEAKgIwQQAqArzDIpRBACoCNEEAKgLExTVBACoCyMU1kpSSIY0BQQAgjQFDAAAAACCNAbxBgICA/AdxGzgCuMMiIENBACoCxMMilCBEQQAqAsTFNSBFQQAqArjDIpSSlJIhjgFBACCOAUMAAAAAII4BvEGAgID8B3EbOALAwyJByMMiQQAoAkhB//8AcUECdGpD8wS1PkEAKgLAwyKUQwjlPB6SOAIAQcjDIkEAKAJIQQAoAszDJmtB//8AcUECdGoqAgAgdkOamRk/QQAqAtiDJ5SSkyGPAUHQwyZBACgCSEH/D3FBAnRqII8BOAIAQdDDJkEAKAJIQQAoAtCDJ2tB/w9xQQJ0aioCACGQAUEAIJABQwAAAAAgkAG8QYCAgPwHcRs4AtSDJ0OamRk/II8BlCGRASCRAUMAAAAAIJEBvEGAgID8B3EbIZIBQQAqAjBBACoC8IMnlEEAKgI0QQAqApTFNUEAKgKYxTWSlJIhkwFBACCTAUMAAAAAIJMBvEGAgID8B3EbOALsgycgTEEAKgL4gyeUIE1BACoClMU1IE5BACoC7IMnlJKUkiGUAUEAIJQBQwAAAAAglAG8QYCAgPwHcRs4AvSDJ0H8gydBACgCSEH//wBxQQJ0akPzBLU+QQAqAvSDJ5RDCOU8HpI4AgBB/IMnQQAoAkhBACgCgIQra0H//wBxQQJ0aioCACB2Q5qZGT9BACoCjIQslJKTIZUBQYSEK0EAKAJIQf8fcUECdGoglQE4AgBBhIQrQQAoAkhBACgChIQsa0H/H3FBAnRqKgIAIZYBQQAglgFDAAAAACCWAbxBgICA/AdxGzgCiIQsQ5qZGT8glQGUIZcBIJcBQwAAAAAglwG8QYCAgPwHcRshmAFBACoCMEEAKgKkhCyUQQAqAjRBACoCrMU1QQAqArDFNZKUkiGZAUEAIJkBQwAAAAAgmQG8QYCAgPwHcRs4AqCELCBVQQAqAqyELJQgVkEAKgKsxTUgV0EAKgKghCyUkpSSIZoBQQAgmgFDAAAAACCaAbxBgICA/AdxGzgCqIQsQbCELEEAKAJIQf//AHFBAnRqQ/MEtT5BACoCqIQslEMI5TwekjgCACB2QbCELEEAKAJIQQAoArSEMGtB//8AcUECdGoqAgCSQ5qZGT9BACoCwIQxlJMhmwFBuIQwQQAoAkhB/x9xQQJ0aiCbATgCAEG4hDBBACgCSEEAKAK4hDFrQf8fcUECdGoqAgAhnAFBACCcAUMAAAAAIJwBvEGAgID8B3EbOAK8hDFDmpkZPyCbAZQhnQEgnQFDAAAAACCdAbxBgICA/AdxGyGeAUEAKgIwQQAqAtiEMZRBACoCNEEAKgL8xDVBACoCgMU1kpSSIZ8BQQAgnwFDAAAAACCfAbxBgICA/AdxGzgC1IQxIF5BACoC4IQxlCBfQQAqAvzENSBgQQAqAtSEMZSSlJIhoAFBACCgAUMAAAAAIKABvEGAgID8B3EbOALchDFB5IQxQQAoAkhB//8AcUECdGpD8wS1PkEAKgLchDGUQwjlPB6SOAIAQeSEMUEAKAJIQQAoAuiENWtB//8AcUECdGoqAgAgdpJDmpkZP0EAKgL0xDWUkyGhAUHshDVBACgCSEH/D3FBAnRqIKEBOAIAQeyENUEAKAJIQQAoAuzENWtB/w9xQQJ0aioCACGiAUEAIKIBQwAAAAAgogG8QYCAgPwHcRs4AvDENUOamRk/IKEBlCGjASCjAUMAAAAAIKMBvEGAgID8B3EbIaQBIKQBIJ4BkiGlASCSASCYASClAZKSIaYBQQAqAojCC0EAKgK8whRBACoC8MIZQQAqAqTDIkEAKgLYgydBACoCjIQsQQAqAsCEMUEAKgL0xDUgeiCAASCGASCMASCmAZKSkpKSkpKSkpKSkiGnAUEAIKcBQwAAAAAgpwG8QYCAgPwHcRs4AvjENUEAKgLYgydBACoCjIQsQQAqAsCEMUEAKgL0xDUgpgGSkpKSQQAqAojCC0EAKgK8whRBACoC8MIZQQAqAqTDIiB6IIABIIwBIIYBkpKSkpKSkpMhqAFBACCoAUMAAAAAIKgBvEGAgID8B3EbOAKExTUgmAEgkgGSIakBQQAqAvDCGUEAKgKkwyJBACoCwIQxQQAqAvTENSCGASCMASClAZKSkpKSkkEAKgKIwgtBACoCvMIUQQAqAtiDJ0EAKgKMhCwgeiCAASCpAZKSkpKSkpMhqgFBACCqAUMAAAAAIKoBvEGAgID8B3EbOAKQxTVBACoCiMILQQAqArzCFEEAKgLAhDFBACoC9MQ1IHoggAEgpQGSkpKSkpJBACoC8MIZQQAqAqTDIkEAKgLYgydBACoCjIQsIIYBIIwBIKkBkpKSkpKSkyGrAUEAIKsBQwAAAAAgqwG8QYCAgPwHcRs4ApzFNSCkASCYAZIhrAEgngEgkgGSIa0BQQAqArzCFEEAKgKkwyJBACoCjIQsQQAqAvTENSCAASCMASCsAZKSkpKSkkEAKgKIwgtBACoC8MIZQQAqAtiDJ0EAKgLAhDEgeiCGASCtAZKSkpKSkpMhrgFBACCuAUMAAAAAIK4BvEGAgID8B3EbOAKoxTVBACoCiMILQQAqAvDCGUEAKgKMhCxBACoC9MQ1IHoghgEgrAGSkpKSkpJBACoCvMIUQQAqAqTDIkEAKgLYgydBACoCwIQxIIABIIwBIK0BkpKSkpKSkyGvAUEAIK8BQwAAAAAgrwG8QYCAgPwHcRs4ArTFNSCkASCSAZIhsAEgngEgmAGSIbEBQQAqAojCC0EAKgKkwyJBACoC2IMnQQAqAvTENSB6IIwBILABkpKSkpKSQQAqArzCFEEAKgLwwhlBACoCjIQsQQAqAsCEMSCAASCGASCxAZKSkpKSkpMhsgFBACCyAUMAAAAAILIBvEGAgID8B3EbOALAxTVBACoCvMIUQQAqAvDCGUEAKgLYgydBACoC9MQ1IIABIIYBILABkpKSkpKSQQAqAojCC0EAKgKkwyJBACoCjIQsQQAqAsCEMSB6IIwBILEBkpKSkpKSkyGzAUEAILMBQwAAAAAgswG8QYCAgPwHcRs4AszFNUMAAMA/QfCBCEEAKAJIQQBrQf8/cUECdGoqAgBDAACAPyB1k5SUIbQBIAQgCmpDpHC9PkEAKgKExTVBACoCkMU1kpQgtAGSOAIAIAUgCmogtAFDpHC9PkEAKgKExTVBACoCkMU1k5SSOAIAQQBBACgCADYCBEEAQQAqAjg4AjxBAEEAKgJAOAJEQQBBACgCSEEBajYCSEEAQQAqAuSACDgC6IAIQQBBACoC8IAIOAL0gAhBAEEAKgKAgQg4AoSBCEEAQQAoApCBCDYClIEIQQBBACoCnIEIOAKggQhBAEEAKgKkgQg4AqiBCEEAQQAqAqyBCDgCsIEIQQBBACgCtIEINgK4gQhBAEEAKAK8gQg2AsCBCEEAQQAqAsyBCDgC0IEIQQBBACoC3IEIOALggQhBAEEAKgLkgQg4AuiBCEEAQQAqAvSBCjgC+IEKQQBBACoChMILOAKIwgtBAEEAKgKcwgs4AqDCC0EAQQAqAqTCCzgCqMILQQBBACoCuMIUOAK8whRBAEEAKgLQwhQ4AtTCFEEAQQAqAtjCFDgC3MIUQQBBACoC7MIZOALwwhlBAEEAKgKEwxk4AojDGUEAQQAqAozDGTgCkMMZQQBBACoCoMMiOAKkwyJBAEEAKgK4wyI4ArzDIkEAQQAqAsDDIjgCxMMiQQBBACoC1IMnOALYgydBAEEAKgLsgyc4AvCDJ0EAQQAqAvSDJzgC+IMnQQBBACoCiIQsOAKMhCxBAEEAKgKghCw4AqSELEEAQQAqAqiELDgCrIQsQQBBACoCvIQxOALAhDFBAEEAKgLUhDE4AtiEMUEAQQAqAtyEMTgC4IQxQQBBACoC8MQ1OAL0xDVBAEEAKgL8xDU4AoDFNUEAQQAqAvjENTgC/MQ1QQBBACoCiMU1OAKMxTVBAEEAKgKExTU4AojFNUEAQQAqApTFNTgCmMU1QQBBACoCkMU1OAKUxTVBAEEAKgKgxTU4AqTFNUEAQQAqApzFNTgCoMU1QQBBACoCrMU1OAKwxTVBAEEAKgKoxTU4AqzFNUEAQQAqArjFNTgCvMU1QQBBACoCtMU1OAK4xTVBAEEAKgLExTU4AsjFNUEAQQAqAsDFNTgCxMU1QQBBACoC0MU1OALUxTVBAEEAKgLMxTU4AtDFNSAKQQRqIQogCkEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCCA8LjoCAgAAAIAAgARAEIAAgARANC9SZgIAAAUB/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhK0EAISxBACEtQQAhLkEAIS9BACEwQQAhMUEAITJBACEzQQAhNEEAITVBACE2QQAhN0EAIThBACE5QQAhOkEAITtBACE8QQAhPUEAIT5BACE/QQAhQEEAIQEDQAJAQQAgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQTggAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQcAAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBAEEANgJIQQAhBANAAkBBzAAgBEECdGpDAAAAADgCACAEQQFqIQQgBEGAgAJIBEAMAgwBCwsLQQAhBQNAAkBB5IAIIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHwgAggBkECdGpDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQYCBCCAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBBkIEIIAhBAnRqQQA2AgAgCEEBaiEIIAhBAkgEQAwCDAELCwtBACEJA0ACQEGcgQggCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQaSBCCAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBrIEIIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBAkgEQAwCDAELCwtBACEMA0ACQEG0gQggDEECdGpBADYCACAMQQFqIQwgDEECSARADAIMAQsLC0EAIQ0DQAJAQbyBCCANQQJ0akEANgIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBBzIEIIA5BAnRqQwAAAAA4AgAgDkEBaiEOIA5BAkgEQAwCDAELCwtBACEPA0ACQEHcgQggD0ECdGpDAAAAADgCACAPQQFqIQ8gD0ECSARADAIMAQsLC0EAIRADQAJAQeSBCCAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBB8IEIIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBgMAASARADAIMAQsLC0EAIRIDQAJAQfSBCiASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB/IEKIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBgCBIBEAMAgwBCwsLQQAhFANAAkBBgIILIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBgBBIBEAMAgwBCwsLQQAhFQNAAkBBhMILIBVBAnRqQwAAAAA4AgAgFUEBaiEVIBVBAkgEQAwCDAELCwtBACEWA0ACQEGcwgsgFkECdGpDAAAAADgCACAWQQFqIRYgFkECSARADAIMAQsLC0EAIRcDQAJAQaTCCyAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQQJIBEAMAgwBCwsLQQAhGANAAkBBrMILIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBgIACSARADAIMAQsLC0EAIRkDQAJAQbTCEyAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQYAgSARADAIMAQsLC0EAIRoDQAJAQbjCFCAaQQJ0akMAAAAAOAIAIBpBAWohGiAaQQJIBEAMAgwBCwsLQQAhGwNAAkBB0MIUIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQEHYwhQgHEECdGpDAAAAADgCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAQeDCFCAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQYCAAUgEQAwCDAELCwtBACEeA0ACQEHowhggHkECdGpDAAAAADgCACAeQQFqIR4gHkGAIEgEQAwCDAELCwtBACEfA0ACQEHswhkgH0ECdGpDAAAAADgCACAfQQFqIR8gH0ECSARADAIMAQsLC0EAISADQAJAQYTDGSAgQQJ0akMAAAAAOAIAICBBAWohICAgQQJIBEAMAgwBCwsLQQAhIQNAAkBBjMMZICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEGUwxkgIkECdGpDAAAAADgCACAiQQFqISIgIkGAgAJIBEAMAgwBCwsLQQAhIwNAAkBBnMMhICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBgCBIBEAMAgwBCwsLQQAhJANAAkBBoMMiICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEG4wyIgJUECdGpDAAAAADgCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAQcDDIiAmQQJ0akMAAAAAOAIAICZBAWohJiAmQQJIBEAMAgwBCwsLQQAhJwNAAkBByMMiICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBgIABSARADAIMAQsLC0EAISgDQAJAQdDDJiAoQQJ0akMAAAAAOAIAIChBAWohKCAoQYAQSARADAIMAQsLC0EAISkDQAJAQdSDJyApQQJ0akMAAAAAOAIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkBB7IMnICpBAnRqQwAAAAA4AgAgKkEBaiEqICpBAkgEQAwCDAELCwtBACErA0ACQEH0gycgK0ECdGpDAAAAADgCACArQQFqISsgK0ECSARADAIMAQsLC0EAISwDQAJAQfyDJyAsQQJ0akMAAAAAOAIAICxBAWohLCAsQYCAAUgEQAwCDAELCwtBACEtA0ACQEGEhCsgLUECdGpDAAAAADgCACAtQQFqIS0gLUGAIEgEQAwCDAELCwtBACEuA0ACQEGIhCwgLkECdGpDAAAAADgCACAuQQFqIS4gLkECSARADAIMAQsLC0EAIS8DQAJAQaCELCAvQQJ0akMAAAAAOAIAIC9BAWohLyAvQQJIBEAMAgwBCwsLQQAhMANAAkBBqIQsIDBBAnRqQwAAAAA4AgAgMEEBaiEwIDBBAkgEQAwCDAELCwtBACExA0ACQEGwhCwgMUECdGpDAAAAADgCACAxQQFqITEgMUGAgAFIBEAMAgwBCwsLQQAhMgNAAkBBuIQwIDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBgCBIBEAMAgwBCwsLQQAhMwNAAkBBvIQxIDNBAnRqQwAAAAA4AgAgM0EBaiEzIDNBAkgEQAwCDAELCwtBACE0A0ACQEHUhDEgNEECdGpDAAAAADgCACA0QQFqITQgNEECSARADAIMAQsLC0EAITUDQAJAQdyEMSA1QQJ0akMAAAAAOAIAIDVBAWohNSA1QQJIBEAMAgwBCwsLQQAhNgNAAkBB5IQxIDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBgIABSARADAIMAQsLC0EAITcDQAJAQeyENSA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QYAQSARADAIMAQsLC0EAITgDQAJAQfDENSA4QQJ0akMAAAAAOAIAIDhBAWohOCA4QQJIBEAMAgwBCwsLQQAhOQNAAkBB+MQ1IDlBAnRqQwAAAAA4AgAgOUEBaiE5IDlBA0gEQAwCDAELCwtBACE6A0ACQEGExTUgOkECdGpDAAAAADgCACA6QQFqITogOkEDSARADAIMAQsLC0EAITsDQAJAQZDFNSA7QQJ0akMAAAAAOAIAIDtBAWohOyA7QQNIBEAMAgwBCwsLQQAhPANAAkBBnMU1IDxBAnRqQwAAAAA4AgAgPEEBaiE8IDxBA0gEQAwCDAELCwtBACE9A0ACQEGoxTUgPUECdGpDAAAAADgCACA9QQFqIT0gPUEDSARADAIMAQsLC0EAIT4DQAJAQbTFNSA+QQJ0akMAAAAAOAIAID5BAWohPiA+QQNIBEAMAgwBCwsLQQAhPwNAAkBBwMU1ID9BAnRqQwAAAAA4AgAgP0EBaiE/ID9BA0gEQAwCDAELCwtBACFAA0ACQEHMxTUgQEECdGpDAAAAADgCACBAQQFqIUAgQEEDSARADAIMAQsLCwvQjoCAAABBACABNgIIQQBDAIA7SEMAAIA/QQAoAgiyl5Y4AgxBAEMdQxNHQQAqAgyVEAA4AhBBAENSRWE+QQAqAgyUQwAAAD+SjjgCFEEAQwAAAABDVQzdQEEAKgIUlJNBACoCDJU4AhhBAEMAAAA/QQAqAhiUOAIcQQBDq6qqPkEAKgIYlDgCJEEAQwAAgD9DYxQdREEAKgIMlRADlTgCKEEAQQAqAihDAACAP5I4AixBAEMAAAAAQwAAgD9BACoCKJNBACoCLJWTOAIwQQBDAACAP0EAKgIslTgCNEEAQ9annDxBACoCDJRDAAAAP5KOOALMgAhBAEMAAIBGQwAAAABBACoCFEEAKgLMgAiTl5aoNgLQgAhBAEPNzMw9QQAqAgyUOALcgAhBAENvEoM6QQAqAtyACJc4AuCACEEAQ5qZGT5BACoCDJQ4AuyACEEAQwAAoEFBACoCDJU4AviACEEAQwAAIEFBACoCDJU4AvyACEEAQwAAgD9BACoC4IAIlTgCiIEIQQBD0VP7QUEAKgIMlTgCmIEIQQBD5DiOP0EAKgIMlTgCxIEIQQBDAACAP0MAAIA/QwBQw0dDAADIQkEAKgIMlRAClZM4AsiBCEEAQwAAAD9BACoCDJQ4AtSBCEEAQwAAAEZDAAAAAEMK16M8QQAqAgyUl5aoNgL8gQtBAEMAAIBEQwAAAABBACoCzIAIQwAAgL+Sl5aoNgKAwgtBAEM4h4M+QQAqAgyUQwAAAD+SjjgCjMILQQBDAAAAAENVDN1AQQAqAozCC5STQQAqAgyVOAKQwgtBAEMAAAA/QQAqApDCC5Q4ApTCC0EAQ6uqqj5BACoCkMILlDgCmMILQQBDdenfPEEAKgIMlEMAAAA/ko44AqzCE0EAQwAAgEZDAAAAAEEAKgKMwgtBACoCrMITk5eWqDYCsMITQQBDAAAARUMAAAAAQQAqAqzCE0MAAIC/kpeWqDYCtMIUQQBDFOtEPkEAKgIMlEMAAAA/ko44AsDCFEEAQwAAAABDVQzdQEEAKgLAwhSUk0EAKgIMlTgCxMIUQQBDAAAAP0EAKgLEwhSUOALIwhRBAEOrqqo+QQAqAsTCFJQ4AszCFEEAQ67z7zxBACoCDJRDAAAAP5KOOALgwhhBAEMAAABGQwAAAABBACoCwMIUQQAqAuDCGJOXlqg2AuTCGEEAQwAAAEVDAAAAAEEAKgLgwhhDAACAv5KXlqg2AujCGUEAQzdwVz5BACoCDJRDAAAAP5KOOAL0whlBAEMAAAAAQ1UM3UBBACoC9MIZlJNBACoCDJU4AvjCGUEAQwAAAD9BACoC+MIZlDgC/MIZQQBDq6qqPkEAKgL4whmUOAKAwxlBAEONDsg8QQAqAgyUQwAAAD+SjjgClMMhQQBDAACARkMAAAAAQQAqAvTCGUEAKgKUwyGTl5aoNgKYwyFBAEMAAABFQwAAAABBACoClMMhQwAAgL+Sl5aoNgKcwyJBAEMAAAA+QQAqAgyUQwAAAD+SjjgCqMMiQQBDAAAAAENVDN1AQQAqAqjDIpSTQQAqAgyVOAKswyJBAEMAAAA/QQAqAqzDIpQ4ArDDIkEAQ6uqqj5BACoCrMMilDgCtMMiQQBD8X5cPEEAKgIMlEMAAAA/ko44AsjDJkEAQwAAAEZDAAAAAEEAKgKowyJBACoCyMMmk5eWqDYCzMMmQQBDAACAREMAAAAAQQAqAsjDJkMAAIC/kpeWqDYC0IMnQQBDtOcCPkEAKgIMlEMAAAA/ko44AtyDJ0EAQwAAAABDVQzdQEEAKgLcgyeUk0EAKgIMlTgC4IMnQQBDAAAAP0EAKgLggyeUOALkgydBAEOrqqo+QQAqAuCDJ5Q4AuiDJ0EAQzJzAT1BACoCDJRDAAAAP5KOOAL8gytBAEMAAABGQwAAAABBACoC3IMnQQAqAvyDK5OXlqg2AoCEK0EAQwAAAEVDAAAAAEEAKgL8gytDAACAv5KXlqg2AoSELEEAQ/fnMj5BACoCDJRDAAAAP5KOOAKQhCxBAEMAAAAAQ1UM3UBBACoCkIQslJNBACoCDJU4ApSELEEAQwAAAD9BACoClIQslDgCmIQsQQBDq6qqPkEAKgKUhCyUOAKchCxBAEMrobs8QQAqAgyUQwAAAD+SjjgCsIQwQQBDAAAARkMAAAAAQQAqApCELEEAKgKwhDCTl5aoNgK0hDBBAEMAAABFQwAAAABBACoCsIQwQwAAgL+Sl5aoNgK4hDFBAEPZzRw+QQAqAgyUQwAAAD+SjjgCxIQxQQBDAAAAAENVDN1AQQAqAsSEMZSTQQAqAgyVOALIhDFBAEMAAAA/QQAqAsiEMZQ4AsyEMUEAQ6uqqj5BACoCyIQxlDgC0IQxQQBDqKymPEEAKgIMlEMAAAA/ko44AuSENUEAQwAAAEZDAAAAAEEAKgLEhDFBACoC5IQ1k5eWqDYC6IQ1QQBDAACAREMAAAAAQQAqAuSENUMAAIC/kpeWqDYC7MQ1C5CAgIAAACAAIAEQDCAAEA4gABALC9SAgIAAAEEAQ2Zm5j44AiBBAEPNzEw/OALUgAhBAEMAAAAAOALYgAhBAEMK16M8OAKMgQhBAEMAANxDOALYgQhBAEMAAIA+OALsgQhBAEO6SQw+OALwgQoLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL8JqAgAABAEEAC+kaeyJuYW1lIjoiQ2xhcmluZXQiLCJmaWxlbmFtZSI6IkNsYXJpbmV0IiwidmVyc2lvbiI6IjIuNi4xIiwib3B0aW9ucyI6Indhc20taWIsIC1zY2FsIC1mdHogMiIsInNpemUiOiI4NzcyNzIiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBDbGFyaW5ldCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkNsYXJpbmV0In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkNsYXJpbmV0In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9Xb29kd2luZHMuaHRtbCJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ0xBUklORVQiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIxMzExNjAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ0xBUklORVQvSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjEzMTI4OCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTQgMCAxMiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxMTAiLCJtYXgiOiIxMzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvUHJlc3N1cmUiLCJpbmRleCI6IjEzMTE1NiIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtNSAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjgiLCJtaW4iOiIwLjY1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0JyZWF0aF9Ob2lzZSIsImluZGV4IjoiMTMxMjEyIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjAyIiwibWluIjoiMCIsIm1heCI6IjAuMTIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL0luc3RydW1lbnRfU3RpZmZuZXNzIiwiaW5kZXgiOiIxMzEzMDgiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBWb2x1bWUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fVm9sdW1lXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjE2NDA4MCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4xMzciLCJtaW4iOiIwLjA1IiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUmV2ZXJiL1JldmVyYmVyYXRpb25fUm9vbV9TaXplXyhJbnN0clJldmVyYikiLCJpbmRleCI6IjMyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjQ1IiwibWluIjoiMC4wNSIsIm1heCI6IjIiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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

