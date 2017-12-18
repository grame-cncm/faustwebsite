
/*
Code generated with Faust version 2.5.15
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.15\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131160\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131204\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK9gICAAAUDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDZW52BV90YW5mABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAJCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACtbqgIAADoKAgIAAAAvbwICAAAINf6ABfUEAIQRBACEFQwAAAAAhEUMAAAAAIRJDAAAAACETQwAAAAAhFEMAAAAAIRVDAAAAACEWQwAAAAAhF0MAAAAAIRhDAAAAACEZQwAAAAAhGkMAAAAAIRtDAAAAACEcQQAhBkEAIQdBACEIQwAAAAAhHUMAAAAAIR5BACEJQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QwAAAAAhQEMAAAAAIUFDAAAAACFCQwAAAAAhQ0MAAAAAIURDAAAAACFFQwAAAAAhRkMAAAAAIUdDAAAAACFIQwAAAAAhSUMAAAAAIUpDAAAAACFLQwAAAAAhTEMAAAAAIU1DAAAAACFOQwAAAAAhT0MAAAAAIVBDAAAAACFRQwAAAAAhUkMAAAAAIVNDAAAAACFUQwAAAAAhVUMAAAAAIVZDAAAAACFXQwAAAAAhWEMAAAAAIVlDAAAAACFaQwAAAAAhW0MAAAAAIVxDAAAAACFdQwAAAAAhXkMAAAAAIV9DAAAAACFgQQAhCkMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRBACELQwAAAAAhZUMAAAAAIWZDAAAAACFnQQAhDEMAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQQAhDUMAAAAAIW1BACEOQQAhD0EAIRBDAAAAACFuQwAAAAAhb0MAAAAAIXBDAAAAACFxQwAAAAAhckMAAAAAIXNDAAAAACF0QwAAAAAhdUMAAAAAIXZDAAAAACF3QwAAAAAheEMAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9QwAAAAAhfkMAAAAAIX9DAAAAACGAAUMAAAAAIYEBQwAAAAAhggFDAAAAACGDAUMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBQwAAAAAhlwFDAAAAACGYAUMAAAAAIZkBQwAAAAAhmgFDAAAAACGbAUMAAAAAIZwBQwAAAAAhnQFDAAAAACGeAUMAAAAAIZ8BQwAAAAAhoAFDAAAAACGhAUMAAAAAIaIBQwAAAAAhowFDAAAAACGkAUMAAAAAIaUBQwAAAAAhpgFDAAAAACGnAUMAAAAAIagBQwAAAAAhqQFDAAAAACGqAUMAAAAAIasBQwAAAAAhrAFDAAAAACGtAUMAAAAAIa4BQwAAAAAhrwFDAAAAACGwASADQQBqKAIAIQQgA0EEaigCACEFQ83MTD1DAAAAQEEAKgIglpchEUEAKgIcIBGVEAEhEiASQwAAAEAQAiETQwAAgD9BACoCECATlJMhFEMAAIA/IBOTIRUgFCAVlSEWQwAAAAAgFEMAAABAEAIgFUMAAABAEAKVQwAAgL+Sl5EhFyAWIBeTIRggEiAXQwAAgD8gFpOSlCEZQQAqAiQgEZUQASASlUMAAIC/kiEaQQAqAtSACCEbQQAqAtiACCEcIBxDAAAAAF4hBiAGQQBKIQcgHEMAAAAAW0EASiEIQQAqAvSACCAcQwAAgL+SlCEdQ2Zm5i9BACoChIEIlCEeIBxDAAAAAF8hCUNvEoM6QQAqAtSBCJQhH0O4HoU+QQAqAuiBCJRDrkfhvpIhIENvEoM6QQAqAuyBCpQhIUEAKgKQwgsgEZUQASEiICJDAAAAQBACISNDAACAP0EAKgIQICOUkyEkQwAAgD8gI5MhJSAkICWVISZDAAAAACAkQwAAAEAQAiAlQwAAAEAQApVDAACAv5KXkSEnICYgJ5MhKCAiICdDAACAPyAmk5KUISlBACoClMILIBGVEAEgIpVDAACAv5IhKkEAKgLEghAgEZUQASErICtDAAAAQBACISxDAACAP0EAKgIQICyUkyEtQwAAgD8gLJMhLiAtIC6VIS9DAAAAACAtQwAAAEAQAiAuQwAAAEAQApVDAACAv5KXkSEwIC8gMJMhMSArIDBDAACAPyAvk5KUITJBACoCyIIQIBGVEAEgK5VDAACAv5IhM0EAKgL4ghUgEZUQASE0IDRDAAAAQBACITVDAACAP0EAKgIQIDWUkyE2QwAAgD8gNZMhNyA2IDeVIThDAAAAACA2QwAAAEAQAiA3QwAAAEAQApVDAACAv5KXkSE5IDggOZMhOiA0IDlDAACAPyA4k5KUITtBACoC/IIVIBGVEAEgNJVDAACAv5IhPEEAKgKsgxogEZUQASE9ID1DAAAAQBACIT5DAACAP0EAKgIQID6UkyE/QwAAgD8gPpMhQCA/IECVIUFDAAAAACA/QwAAAEAQAiBAQwAAAEAQApVDAACAv5KXkSFCIEEgQpMhQyA9IEJDAACAPyBBk5KUIURBACoCsIMaIBGVEAEgPZVDAACAv5IhRUEAKgLgwx4gEZUQASFGIEZDAAAAQBACIUdDAACAP0EAKgIQIEeUkyFIQwAAgD8gR5MhSSBIIEmVIUpDAAAAACBIQwAAAEAQAiBJQwAAAEAQApVDAACAv5KXkSFLIEogS5MhTCBGIEtDAACAPyBKk5KUIU1BACoC5MMeIBGVEAEgRpVDAACAv5IhTkEAKgKUxCcgEZUQASFPIE9DAAAAQBACIVBDAACAP0EAKgIQIFCUkyFRQwAAgD8gUJMhUiBRIFKVIVNDAAAAACBRQwAAAEAQAiBSQwAAAEAQApVDAACAv5KXkSFUIFMgVJMhVSBPIFRDAACAPyBTk5KUIVZBACoCmMQnIBGVEAEgT5VDAACAv5IhV0EAKgLIxCwgEZUQASFYIFhDAAAAQBACIVlDAACAP0EAKgIQIFmUkyFaQwAAgD8gWZMhWyBaIFuVIVxDAAAAACBaQwAAAEAQAiBbQwAAAEAQApVDAACAv5KXkSFdIFwgXZMhXiBYIF1DAACAPyBck5KUIV9BACoCzMQsIBGVEAEgWJVDAACAv5IhYEEAIQoDQAJAQQBBATYCAEEAKgIwQQAqAjyUQQAqAjRBACoCzMU1QQAqAtDFNZKUkiFhQQAgYUMAAAAAIGG8QYCAgPwHcRs4AjggGEEAKgJElCAZQQAqAszFNSAaQQAqAjiUkpSSIWJBACBiQwAAAAAgYrxBgICA/AdxGzgCQEHMAEEAKAJIQf//AXFBAnRqQ/MEtT5BACoCQJRDCOU8HpI4AgBDAAAAAEEAKgLcgAhBACoC5IAIQwAAgD+SliAHGyFjQQAgY0MAAAAAIGO8QYCAgPwHcRs4AuCACEMAAAAAQQAqAuiACEEAKgLwgAhDAACAP5KWIAgbIWRBACBkQwAAAAAgZLxBgICA/AdxGzgC7IAIQQAqAuyACEEAKgLcgAhdIQsgBrJDAAAAAEEAKgL4gAhBACoC7IAIlEMAAIA/IAsbQQAqAuyACEMAAAAAXRsgHUEAKgLsgAhBACoC3IAIk5RDAACAP5IgHEEAKgLsgAhBACoC6IAIXRsgCxuUQQAqAoCBCCAGGyFlQQAgZUMAAAAAIGW8QYCAgPwHcRs4AvyACEEAQe2cmY4EQQAoAoyBCGxBueAAajYCiIEIQQAqApSBCEEAKgKsgQiUQQAqApiBCEEAKgKggQiUkiFmQQAgZkMAAAAAIGa8QYCAgPwHcRs4ApyBCEEAKgKYgQhBACoCrIEIlEEAKgKkgQhBACoCoIEIlJJBAUEAKAIEa7KSIWdBACBnQwAAAAAgZ7xBgICA/AdxGzgCqIEIQQAgBkEAKAK0gQhBACoCzIEIQwAAgD9gcnE2ArCBCEEAIAZBACgCvIEIQQFqbDYCuIEIIAlBACoCzIEIQwAAAABecSEMQQAqAsCBCEEAKAK0gQhBAEYgBnFBACoCzIEIQwAAgD9dcUEAKAK8gQiyQQAqAtyACF5xQQFBACgCvIEIskEAKgLcgAhda2yylEEAKgLMgQhDAACAP0EAKgLEgQggDLKUk5SSIAxBAEZBACoCzIEIQ703hjVgcrKUIWhBACBoQwAAAAAgaLxBgICA/AdxGzgCyIEIIBtBACoC/IAIQQAqAvyACEEAKgL4gAhBACoC4IAIQwAAAABBACoC/IAIk5SUkkMAAAAAQQAqAuCACEEAKgLcgAhdG0EAKgLggAhDAAAAAF0bIB5BACgCiIEIspRDZmZmP5KUQ83MzD1BACoCnIEIQQAqAsiBCJSUQwAAgD+SlJQhaSAfQ3e+fz9BACoC3IEIlJIhakEAIGpDAAAAACBqvEGAgID8B3EbOALYgQhBACoC0IEIQQAqAtiBCJUhayBrQwAAwL+SIWwgbKghDSBsjiFtIA1BAWohDiANQQBBACANSBshDyAOQQBBACAOSBshEEMAAAA/QQAqAuSBCEHsgQhBACgCSEGBICAPQYEgIA9IG0EBamtB/z9xQQJ0aioCACBtQwAAIEAga5OSlCBrQwAAwL8gbZOSQeyBCEEAKAJIQYEgIBBBgSAgEEgbQQFqa0H/P3FBAnRqKgIAlJKSlCFuQQAgbkMAAAAAIG68QYCAgPwHcRs4AuCBCEMAAAAAQzMzcz9BACoC4IEIlCBpkpMhbyAgIG+UQzMzMz+SIXAgcEMAAIA/XrIgcCBwQwAAgD9fspSSIXEgaSBvIHEgcUMAAIC/YLKUIHFDAACAv12yk5SSIXJB7IEIQQAoAkhB/z9xQQJ0aiByQwAAAAAgcrxBgICA/AdxGzgCACAhQ3e+fz9BACoC9IEKlJIhc0EAIHNDAAAAACBzvEGAgID8B3EbOALwgQpDzcxMPUMAAIA/QQAqAvCBCpaXIXRB+IEKQQAoAkhB/x9xQQJ0akHsgQhBACgCSEEAa0H/P3FBAnRqKgIAIHSUOAIAQ2Zm5j5B+IEKQQAoAkhBACgC+IELa0H/H3FBAnRqKgIAlCF1Q5qZGT9BACoChMILlEHMAEEAKAJIQQAoAtCACGtB//8BcUECdGoqAgCSIHWTIXZB/IELQQAoAkhB/w9xQQJ0aiB2OAIAQfyBC0EAKAJIQQAoAvzBC2tB/w9xQQJ0aioCACF3QQAgd0MAAAAAIHe8QYCAgPwHcRs4AoDCC0MAAAAAQ5qZGT8gdpSTIXggeEMAAAAAIHi8QYCAgPwHcRsheUEAKgIwQQAqApzCC5RBACoCNEEAKgL4xDVBACoC/MQ1kpSSIXpBACB6QwAAAAAgerxBgICA/AdxGzgCmMILIChBACoCpMILlCApQQAqAvjENSAqQQAqApjCC5SSlJIhe0EAIHtDAAAAACB7vEGAgID8B3EbOAKgwgtBqMILQQAoAkhB//8AcUECdGpD8wS1PkEAKgKgwguUQwjlPB6SOAIAQajCC0EAKAJIQQAoAqzCD2tB//8AcUECdGoqAgAgdZJDmpkZP0EAKgK4ghCUkyF8QbDCD0EAKAJIQf8PcUECdGogfDgCAEGwwg9BACgCSEEAKAKwghBrQf8PcUECdGoqAgAhfUEAIH1DAAAAACB9vEGAgID8B3EbOAK0ghBDmpkZPyB8lCF+IH5DAAAAACB+vEGAgID8B3EbIX9BACoChMILIH+SIYABQQAqAjBBACoC0IIQlEEAKgI0QQAqAqjFNUEAKgKsxTWSlJIhgQFBACCBAUMAAAAAIIEBvEGAgID8B3EbOALMghAgMUEAKgLYghCUIDJBACoCqMU1IDNBACoCzIIQlJKUkiGCAUEAIIIBQwAAAAAgggG8QYCAgPwHcRs4AtSCEEHcghBBACgCSEH//wBxQQJ0akPzBLU+QQAqAtSCEJRDCOU8HpI4AgAgdUHcghBBACgCSEEAKALgghRrQf//AHFBAnRqKgIAkkOamRk/QQAqAuyCFZSTIYMBQeSCFEEAKAJIQf8fcUECdGoggwE4AgBB5IIUQQAoAkhBACgC5IIVa0H/H3FBAnRqKgIAIYQBQQAghAFDAAAAACCEAbxBgICA/AdxGzgC6IIVQ5qZGT8ggwGUIYUBIIUBQwAAAAAghQG8QYCAgPwHcRshhgEggAEghgGSIYcBQQAqAjBBACoChIMVlEEAKgI0QQAqApDFNUEAKgKUxTWSlJIhiAFBACCIAUMAAAAAIIgBvEGAgID8B3EbOAKAgxUgOkEAKgKMgxWUIDtBACoCkMU1IDxBACoCgIMVlJKUkiGJAUEAIIkBQwAAAAAgiQG8QYCAgPwHcRs4AoiDFUGQgxVBACgCSEH//wBxQQJ0akPzBLU+QQAqAoiDFZRDCOU8HpI4AgBBkIMVQQAoAkhBACgClIMZa0H//wBxQQJ0aioCACB1Q5qZGT9BACoCoIMalJKTIYoBQZiDGUEAKAJIQf8fcUECdGogigE4AgBBmIMZQQAoAkhBACgCmIMaa0H/H3FBAnRqKgIAIYsBQQAgiwFDAAAAACCLAbxBgICA/AdxGzgCnIMaQ5qZGT8gigGUIYwBIIwBQwAAAAAgjAG8QYCAgPwHcRshjQFBACoCMEEAKgK4gxqUQQAqAjRBACoCwMU1QQAqAsTFNZKUkiGOAUEAII4BQwAAAAAgjgG8QYCAgPwHcRs4ArSDGiBDQQAqAsCDGpQgREEAKgLAxTUgRUEAKgK0gxqUkpSSIY8BQQAgjwFDAAAAACCPAbxBgICA/AdxGzgCvIMaQcSDGkEAKAJIQf//AHFBAnRqQ/MEtT5BACoCvIMalEMI5TwekjgCAEHEgxpBACgCSEEAKALIgx5rQf//AHFBAnRqKgIAIHVDmpkZP0EAKgLUwx6UkpMhkAFBzIMeQQAoAkhB/w9xQQJ0aiCQATgCAEHMgx5BACgCSEEAKALMwx5rQf8PcUECdGoqAgAhkQFBACCRAUMAAAAAIJEBvEGAgID8B3EbOALQwx5DmpkZPyCQAZQhkgEgkgFDAAAAACCSAbxBgICA/AdxGyGTAUEAKgIwQQAqAuzDHpRBACoCNEEAKgKExTVBACoCiMU1kpSSIZQBQQAglAFDAAAAACCUAbxBgICA/AdxGzgC6MMeIExBACoC9MMelCBNQQAqAoTFNSBOQQAqAujDHpSSlJIhlQFBACCVAUMAAAAAIJUBvEGAgID8B3EbOALwwx5B+MMeQQAoAkhB//8BcUECdGpD8wS1PkEAKgLwwx6UQwjlPB6SOAIAQfjDHkEAKAJIQQAoAvzDJmtB//8BcUECdGoqAgAgdUOamRk/QQAqAojEJ5SSkiGWAUGAxCZBACgCSEH/H3FBAnRqIJYBOAIAQYDEJkEAKAJIQQAoAoDEJ2tB/x9xQQJ0aioCACGXAUEAIJcBQwAAAAAglwG8QYCAgPwHcRs4AoTEJ0MAAAAAQ5qZGT8glgGUkyGYASCYAUMAAAAAIJgBvEGAgID8B3EbIZkBQQAqAjBBACoCoMQnlEEAKgI0QQAqArTFNUEAKgK4xTWSlJIhmgFBACCaAUMAAAAAIJoBvEGAgID8B3EbOAKcxCcgVUEAKgKoxCeUIFZBACoCtMU1IFdBACoCnMQnlJKUkiGbAUEAIJsBQwAAAAAgmwG8QYCAgPwHcRs4AqTEJ0GsxCdBACgCSEH//wBxQQJ0akPzBLU+QQAqAqTEJ5RDCOU8HpI4AgBBrMQnQQAoAkhBACgCsMQra0H//wBxQQJ0aioCACB1Q5qZGT9BACoCvMQslJKSIZwBQbTEK0EAKAJIQf8fcUECdGognAE4AgBBtMQrQQAoAkhBACgCtMQsa0H/H3FBAnRqKgIAIZ0BQQAgnQFDAAAAACCdAbxBgICA/AdxGzgCuMQsQwAAAABDmpkZPyCcAZSTIZ4BIJ4BQwAAAAAgngG8QYCAgPwHcRshnwFBACoCMEEAKgLUxCyUQQAqAjRBACoCnMU1QQAqAqDFNZKUkiGgAUEAIKABQwAAAAAgoAG8QYCAgPwHcRs4AtDELCBeQQAqAtzELJQgX0EAKgKcxTUgYEEAKgLQxCyUkpSSIaEBQQAgoQFDAAAAACChAbxBgICA/AdxGzgC2MQsQeDELEEAKAJIQf//AXFBAnRqQ/MEtT5BACoC2MQslEMI5TwekjgCAEOamRk/QQAqAvDENZRB4MQsQQAoAkhBACgC5MQ0a0H//wFxQQJ0aioCAJIgdZMhogFB6MQ0QQAoAkhB/x9xQQJ0aiCiATgCAEHoxDRBACgCSEEAKALoxDVrQf8fcUECdGoqAgAhowFBACCjAUMAAAAAIKMBvEGAgID8B3EbOALsxDVDAAAAAEOamRk/IKIBlJMhpAEgpAFDAAAAACCkAbxBgICA/AdxGyGlASCHASCNAZIgkwGSIJkBkiCfAZIgpQGSIHmSQQAqAriCEJJBACoC7IIVkkEAKgKggxqSQQAqAtTDHpJBACoCiMQnkkEAKgK8xCySQQAqAvDENZIhpgFBACCmAUMAAAAAIKYBvEGAgID8B3EbOAL0xDUgfyCGAZIhpwFBACoC1MMeQQAqAqCDGkEAKgLsghVBACoCuIIQIJMBII0BIKcBkpKSkpKSQQAqAoTCCyCZAZIgnwGSIKUBkiB5kkEAKgKIxCeSQQAqArzELJJBACoC8MQ1kpMhqAFBACCoAUMAAAAAIKgBvEGAgID8B3EbOAKAxTUgmQEgpwGSIJ8BkkEAKgK4ghCSQQAqAuyCFZJBACoCiMQnkkEAKgK8xCySQQAqAoTCCyCNAZIgkwGSIKUBkiB5kkEAKgKggxqSQQAqAtTDHpJBACoC8MQ1kpMhqQFBACCpAUMAAAAAIKkBvEGAgID8B3EbOAKMxTUghwEgpQGSIHmSQQAqAriCEJJBACoC7IIVkkEAKgLwxDWSIJkBII0BIJMBkpIgnwGSQQAqAqCDGpJBACoC1MMekkEAKgKIxCeSQQAqArzELJKTIaoBQQAgqgFDAAAAACCqAbxBgICA/AdxGzgCmMU1QQAqAoTCCyCGAZIhqwEgfyCNAZIgmQGSIKUBkkEAKgK4ghCSQQAqAqCDGpJBACoCiMQnkkEAKgLwxDWSIKsBIJMBkiCfAZIgeZJBACoC7IIVkkEAKgLUwx6SQQAqArzELJKTIawBQQAgrAFDAAAAACCsAbxBgICA/AdxGzgCpMU1IIABII0BkiCfAZIgeZJBACoCuIIQkkEAKgKggxqSQQAqArzELJIghgEgkwGSIJkBkiClAZJBACoC7IIVkkEAKgLUwx6SQQAqAojEJ5JBACoC8MQ1kpMhrQFBACCtAUMAAAAAIK0BvEGAgID8B3EbOAKwxTUggAEgkwGSIJkBkiB5kkEAKgK4ghCSQQAqAtTDHpJBACoCiMQnkiCGASCNAZIgnwGSIKUBkkEAKgLsghWSQQAqAqCDGpJBACoCvMQskkEAKgLwxDWSkyGuAUEAIK4BQwAAAAAgrgG8QYCAgPwHcRs4ArzFNSB/IJMBkiCfAZIgpQGSQQAqAriCEJJBACoC1MMekkEAKgK8xCySQQAqAvDENZIgqwEgjQGSIJkBkiB5kkEAKgLsghWSQQAqAqCDGpJBACoCiMQnkpMhrwFBACCvAUMAAAAAIK8BvEGAgID8B3EbOALIxTVDAADAP0HsgQhBACgCSEEAa0H/P3FBAnRqKgIAQwAAgD8gdJOUlCGwASAEIApqQ6RwvT5BACoCgMU1QQAqAozFNZKUILABkjgCACAFIApqILABQ6RwvT5BACoCgMU1QQAqAozFNZOUkjgCAEEAQQAoAgA2AgRBAEEAKgI4OAI8QQBBACoCQDgCREEAQQAoAkhBAWo2AkhBAEEAKgLggAg4AuSACEEAQQAqAuyACDgC8IAIQQBBACoC/IAIOAKAgQhBAEEAKAKIgQg2AoyBCEEAQQAqApyBCDgCoIEIQQBBACoCqIEIOAKsgQhBAEEAKAKwgQg2ArSBCEEAQQAoAriBCDYCvIEIQQBBACoCyIEIOALMgQhBAEEAKgLYgQg4AtyBCEEAQQAqAuCBCDgC5IEIQQBBACoC8IEKOAL0gQpBAEEAKgKAwgs4AoTCC0EAQQAqApjCCzgCnMILQQBBACoCoMILOAKkwgtBAEEAKgK0ghA4AriCEEEAQQAqAsyCEDgC0IIQQQBBACoC1IIQOALYghBBAEEAKgLoghU4AuyCFUEAQQAqAoCDFTgChIMVQQBBACoCiIMVOAKMgxVBAEEAKgKcgxo4AqCDGkEAQQAqArSDGjgCuIMaQQBBACoCvIMaOALAgxpBAEEAKgLQwx44AtTDHkEAQQAqAujDHjgC7MMeQQBBACoC8MMeOAL0wx5BAEEAKgKExCc4AojEJ0EAQQAqApzEJzgCoMQnQQBBACoCpMQnOAKoxCdBAEEAKgK4xCw4ArzELEEAQQAqAtDELDgC1MQsQQBBACoC2MQsOALcxCxBAEEAKgLsxDU4AvDENUEAQQAqAvjENTgC/MQ1QQBBACoC9MQ1OAL4xDVBAEEAKgKExTU4AojFNUEAQQAqAoDFNTgChMU1QQBBACoCkMU1OAKUxTVBAEEAKgKMxTU4ApDFNUEAQQAqApzFNTgCoMU1QQBBACoCmMU1OAKcxTVBAEEAKgKoxTU4AqzFNUEAQQAqAqTFNTgCqMU1QQBBACoCtMU1OAK4xTVBAEEAKgKwxTU4ArTFNUEAQQAqAsDFNTgCxMU1QQBBACoCvMU1OALAxTVBAEEAKgLMxTU4AtDFNUEAQQAqAsjFNTgCzMU1IApBBGohCiAKQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIIDwuOgICAAAAgACABEAUgACABEA4LoZmAgAABP39BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACEBA0ACQEEAIAFBAnRqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEE4IAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEHAACADQQJ0akMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQBBADYCSEEAIQQDQAJAQcwAIARBAnRqQwAAAAA4AgAgBEEBaiEEIARBgIACSARADAIMAQsLC0EAIQUDQAJAQeCACCAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB7IAIIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEH8gAggB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQYiBCCAIQQJ0akEANgIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBBnIEIIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGogQggCkECdGpDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQbCBCCALQQJ0akEANgIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQAhDANAAkBBuIEIIAxBAnRqQQA2AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQEHIgQggDUECdGpDAAAAADgCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAQdiBCCAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkBB4IEIIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEHsgQggEEECdGpDAAAAADgCACAQQQFqIRAgEEGAwABIBEAMAgwBCwsLQQAhEQNAAkBB8IEKIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEH4gQogEkECdGpDAAAAADgCACASQQFqIRIgEkGAIEgEQAwCDAELCwtBACETA0ACQEH8gQsgE0ECdGpDAAAAADgCACATQQFqIRMgE0GAEEgEQAwCDAELCwtBACEUA0ACQEGAwgsgFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQZjCCyAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQQJIBEAMAgwBCwsLQQAhFgNAAkBBoMILIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQEGowgsgF0ECdGpDAAAAADgCACAXQQFqIRcgF0GAgAFIBEAMAgwBCwsLQQAhGANAAkBBsMIPIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBgBBIBEAMAgwBCwsLQQAhGQNAAkBBtIIQIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBAkgEQAwCDAELCwtBACEaA0ACQEHMghAgGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQdSCECAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQJIBEAMAgwBCwsLQQAhHANAAkBB3IIQIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBgIABSARADAIMAQsLC0EAIR0DQAJAQeSCFCAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQYAgSARADAIMAQsLC0EAIR4DQAJAQeiCFSAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBBgIMVIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQEGIgxUgIEECdGpDAAAAADgCACAgQQFqISAgIEECSARADAIMAQsLC0EAISEDQAJAQZCDFSAhQQJ0akMAAAAAOAIAICFBAWohISAhQYCAAUgEQAwCDAELCwtBACEiA0ACQEGYgxkgIkECdGpDAAAAADgCACAiQQFqISIgIkGAIEgEQAwCDAELCwtBACEjA0ACQEGcgxogI0ECdGpDAAAAADgCACAjQQFqISMgI0ECSARADAIMAQsLC0EAISQDQAJAQbSDGiAkQQJ0akMAAAAAOAIAICRBAWohJCAkQQJIBEAMAgwBCwsLQQAhJQNAAkBBvIMaICVBAnRqQwAAAAA4AgAgJUEBaiElICVBAkgEQAwCDAELCwtBACEmA0ACQEHEgxogJkECdGpDAAAAADgCACAmQQFqISYgJkGAgAFIBEAMAgwBCwsLQQAhJwNAAkBBzIMeICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBgBBIBEAMAgwBCwsLQQAhKANAAkBB0MMeIChBAnRqQwAAAAA4AgAgKEEBaiEoIChBAkgEQAwCDAELCwtBACEpA0ACQEHowx4gKUECdGpDAAAAADgCACApQQFqISkgKUECSARADAIMAQsLC0EAISoDQAJAQfDDHiAqQQJ0akMAAAAAOAIAICpBAWohKiAqQQJIBEAMAgwBCwsLQQAhKwNAAkBB+MMeICtBAnRqQwAAAAA4AgAgK0EBaiErICtBgIACSARADAIMAQsLC0EAISwDQAJAQYDEJiAsQQJ0akMAAAAAOAIAICxBAWohLCAsQYAgSARADAIMAQsLC0EAIS0DQAJAQYTEJyAtQQJ0akMAAAAAOAIAIC1BAWohLSAtQQJIBEAMAgwBCwsLQQAhLgNAAkBBnMQnIC5BAnRqQwAAAAA4AgAgLkEBaiEuIC5BAkgEQAwCDAELCwtBACEvA0ACQEGkxCcgL0ECdGpDAAAAADgCACAvQQFqIS8gL0ECSARADAIMAQsLC0EAITADQAJAQazEJyAwQQJ0akMAAAAAOAIAIDBBAWohMCAwQYCAAUgEQAwCDAELCwtBACExA0ACQEG0xCsgMUECdGpDAAAAADgCACAxQQFqITEgMUGAIEgEQAwCDAELCwtBACEyA0ACQEG4xCwgMkECdGpDAAAAADgCACAyQQFqITIgMkECSARADAIMAQsLC0EAITMDQAJAQdDELCAzQQJ0akMAAAAAOAIAIDNBAWohMyAzQQJIBEAMAgwBCwsLQQAhNANAAkBB2MQsIDRBAnRqQwAAAAA4AgAgNEEBaiE0IDRBAkgEQAwCDAELCwtBACE1A0ACQEHgxCwgNUECdGpDAAAAADgCACA1QQFqITUgNUGAgAJIBEAMAgwBCwsLQQAhNgNAAkBB6MQ0IDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBgCBIBEAMAgwBCwsLQQAhNwNAAkBB7MQ1IDdBAnRqQwAAAAA4AgAgN0EBaiE3IDdBAkgEQAwCDAELCwtBACE4A0ACQEH0xDUgOEECdGpDAAAAADgCACA4QQFqITggOEEDSARADAIMAQsLC0EAITkDQAJAQYDFNSA5QQJ0akMAAAAAOAIAIDlBAWohOSA5QQNIBEAMAgwBCwsLQQAhOgNAAkBBjMU1IDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBA0gEQAwCDAELCwtBACE7A0ACQEGYxTUgO0ECdGpDAAAAADgCACA7QQFqITsgO0EDSARADAIMAQsLC0EAITwDQAJAQaTFNSA8QQJ0akMAAAAAOAIAIDxBAWohPCA8QQNIBEAMAgwBCwsLQQAhPQNAAkBBsMU1ID1BAnRqQwAAAAA4AgAgPUEBaiE9ID1BA0gEQAwCDAELCwtBACE+A0ACQEG8xTUgPkECdGpDAAAAADgCACA+QQFqIT4gPkEDSARADAIMAQsLC0EAIT8DQAJAQcjFNSA/QQJ0akMAAAAAOAIAID9BAWohPyA/QQNIBEAMAgwBCwsLC9yOgIAAAEEAIAE2AghBAEMAgDtIQwAAgD9BACgCCLKXljgCDEEAQx1DE0dBACoCDJUQADgCEEEAQ1JFYT5BACoCDJRDAAAAP5KOOAIUQQBDAAAAAENVDN1AQQAqAhSUk0EAKgIMlTgCGEEAQwAAAD9BACoCGJQ4AhxBAEOrqqo+QQAqAhiUOAIkQQBDAACAP0NjFB1EQQAqAgyVEASVOAIoQQBBACoCKEMAAIA/kjgCLEEAQwAAAABDAACAP0EAKgIok0EAKgIslZM4AjBBAEMAAIA/QQAqAiyVOAI0QQBD1qecPEEAKgIMlEMAAAA/ko44AsyACEEAQwAAgEZDAAAAAEEAKgIUQQAqAsyACJOXlqg2AtCACEEAQ83MzD1BACoCDJQ4AtyACEEAQ5qZGT5BACoCDJQ4AuiACEEAQwAAoEFBACoCDJU4AvSACEEAQwAAIEFBACoCDJU4AviACEEAQ9FT+0FBACoCDJU4ApCBCEEAQQAqApCBCBADOAKUgQhBAEEAKgKQgQgQADgCmIEIQQBDAAAAAEEAKgKUgQiTOAKkgQhBAEPkOI4/QQAqAgyVOALAgQhBAEMAAIA/QwAAgD9DAFDDR0MAAMhCQQAqAgyVEAKVkzgCxIEIQQBDAAAAP0EAKgIMlDgC0IEIQQBDAAAARkMAAAAAQwrXozxBACoCDJSXlqg2AviBC0EAQwAAgERDAAAAAEEAKgLMgAhDAACAv5KXlqg2AvzBC0EAQ9nNHD5BACoCDJRDAAAAP5KOOAKIwgtBAEMAAAAAQ1UM3UBBACoCiMILlJNBACoCDJU4AozCC0EAQwAAAD9BACoCjMILlDgCkMILQQBDq6qqPkEAKgKMwguUOAKUwgtBAEOorKY8QQAqAgyUQwAAAD+SjjgCqMIPQQBDAAAARkMAAAAAQQAqAojCC0EAKgKowg+Tl5aoNgKswg9BAEMAAIBEQwAAAABBACoCqMIPQwAAgL+Sl5aoNgKwghBBAEP35zI+QQAqAgyUQwAAAD+SjjgCvIIQQQBDAAAAAENVDN1AQQAqAryCEJSTQQAqAgyVOALAghBBAEMAAAA/QQAqAsCCEJQ4AsSCEEEAQ6uqqj5BACoCwIIQlDgCyIIQQQBDK6G7PEEAKgIMlEMAAAA/ko44AtyCFEEAQwAAAEZDAAAAAEEAKgK8ghBBACoC3IIUk5eWqDYC4IIUQQBDAAAARUMAAAAAQQAqAtyCFEMAAIC/kpeWqDYC5IIVQQBDtOcCPkEAKgIMlEMAAAA/ko44AvCCFUEAQwAAAABDVQzdQEEAKgLwghWUk0EAKgIMlTgC9IIVQQBDAAAAP0EAKgL0ghWUOAL4ghVBAEOrqqo+QQAqAvSCFZQ4AvyCFUEAQzJzAT1BACoCDJRDAAAAP5KOOAKQgxlBAEMAAABGQwAAAABBACoC8IIVQQAqApCDGZOXlqg2ApSDGUEAQwAAAEVDAAAAAEEAKgKQgxlDAACAv5KXlqg2ApiDGkEAQwAAAD5BACoCDJRDAAAAP5KOOAKkgxpBAEMAAAAAQ1UM3UBBACoCpIMalJNBACoCDJU4AqiDGkEAQwAAAD9BACoCqIMalDgCrIMaQQBDq6qqPkEAKgKogxqUOAKwgxpBAEPxflw8QQAqAgyUQwAAAD+SjjgCxIMeQQBDAAAARkMAAAAAQQAqAqSDGkEAKgLEgx6Tl5aoNgLIgx5BAEMAAIBEQwAAAABBACoCxIMeQwAAgL+Sl5aoNgLMwx5BAEM3cFc+QQAqAgyUQwAAAD+SjjgC2MMeQQBDAAAAAENVDN1AQQAqAtjDHpSTQQAqAgyVOALcwx5BAEMAAAA/QQAqAtzDHpQ4AuDDHkEAQ6uqqj5BACoC3MMelDgC5MMeQQBDjQ7IPEEAKgIMlEMAAAA/ko44AvjDJkEAQwAAgEZDAAAAAEEAKgLYwx5BACoC+MMmk5eWqDYC/MMmQQBDAAAARUMAAAAAQQAqAvjDJkMAAIC/kpeWqDYCgMQnQQBDFOtEPkEAKgIMlEMAAAA/ko44AozEJ0EAQwAAAABDVQzdQEEAKgKMxCeUk0EAKgIMlTgCkMQnQQBDAAAAP0EAKgKQxCeUOAKUxCdBAEOrqqo+QQAqApDEJ5Q4ApjEJ0EAQ67z7zxBACoCDJRDAAAAP5KOOAKsxCtBAEMAAABGQwAAAABBACoCjMQnQQAqAqzEK5OXlqg2ArDEK0EAQwAAAEVDAAAAAEEAKgKsxCtDAACAv5KXlqg2ArTELEEAQziHgz5BACoCDJRDAAAAP5KOOALAxCxBAEMAAAAAQ1UM3UBBACoCwMQslJNBACoCDJU4AsTELEEAQwAAAD9BACoCxMQslDgCyMQsQQBDq6qqPkEAKgLExCyUOALMxCxBAEN16d88QQAqAgyUQwAAAD+SjjgC4MQ0QQBDAACARkMAAAAAQQAqAsDELEEAKgLgxDSTl5aoNgLkxDRBAEMAAABFQwAAAABBACoC4MQ0QwAAgL+Sl5aoNgLoxDULkICAgAAAIAAgARANIAAQDyAAEAwL1ICAgAAAQQBDZmbmPjgCIEEAQ83MTD84AtSACEEAQwAAAAA4AtiACEEAQwrXozw4AoSBCEEAQwAA3EM4AtSBCEEAQwAAgD44AuiBCEEAQ7pJDD44AuyBCguNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvDmoCAAAEAQQALvBp7Im5hbWUiOiJDbGFyaW5ldCIsInZlcnNpb24iOiIyLjUuMTUiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6Ijg3NzI2OCIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24ifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIENsYXJpbmV0In0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ2xhcmluZXQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL1dvb2R3aW5kcy5odG1sIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJDTEFSSU5FVCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjEzMTE2MCIsIm1ldGEiOlt7IjEiOiIifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9JbnN0cnVtZW50L0ZyZXF1ZW5jeSIsImluZGV4IjoiMTMxMjg0IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNCAwIDEyIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjExMCIsIm1heCI6IjEzMDAiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9QcmVzc3VyZSIsImluZGV4IjoiMTMxMTU2IiwibWV0YSI6W3siYWNjIjoiMSAwIC01IDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuOCIsIm1pbiI6IjAuNjUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCcmVhdGggTm9pc2UiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxMzEyMDQiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwIiwibWF4IjoiMC4xMiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiSW5zdHJ1bWVudCBTdGlmZm5lc3MiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1BhcmFtZXRlcnMvSW5zdHJ1bWVudF9TdGlmZm5lc3MiLCJpbmRleCI6IjEzMTMwNCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yNSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUmV2ZXJiIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFZvbHVtZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Wb2x1bWVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMTY0MDc2IiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjEzNyIsIm1pbiI6IjAuMDUiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZXZlcmJlcmF0aW9uIFJvb20gU2l6ZSAoSW5zdHJSZXZlcmIpIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNDUiLCJtaW4iOiIwLjA1IiwibWF4IjoiMiIsInN0ZXAiOiIwLjAxIn1dfV19XX0w"; }

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

