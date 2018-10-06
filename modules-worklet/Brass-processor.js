
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBrass() {
	return "{\"name\":\"Brass\",\"filename\":\"Brass\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/envelopes.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"1123012\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"Brass\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Brass\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Brasses.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Brass Instrument\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Brass_Instrument/Instrument/ON/OFF_(ASR_Envelope)\",\"index\":\"262168\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Brass_Instrument/Instrument/Frequency\",\"index\":\"262156\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"300\",\"min\":\"170\",\"max\":\"700\",\"step\":\"1\"}]},{\"type\":\"vgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency (Vibrato Envelope)\",\"address\":\"/Brass_Instrument/Parameters/0x00/Vibrato_Frequency_(Vibrato_Envelope)\",\"index\":\"262260\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Brass_Instrument/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"295092\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"}],\"init\":\"0.2\",\"min\":\"0.05\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeBrass() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK9gICAAAUDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDZW52BV90YW5mABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAKCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACrbrgIAADpWBgIAAAQJ/QQAhA0EAIQJBACECA0ACQEG8xcQAIAJBAnRqQQA2AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEEAQQAoAsDFREEBajYCvMVEQQAgA0ECdGpD2w/JOEEAKAK8xURBf2qylBADOAIAQQBBACgCvMVENgLAxUQgA0EBaiEDIANBgIAESARADAIMAQsLCwvWwICAAAIMf6ABfUEAIQRDAAAAACEQQwAAAAAhEUEAIQVBACEGQwAAAAAhEkEAIQdDAAAAACETQQAhCEMAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QwAAAAAhQEMAAAAAIUFDAAAAACFCQwAAAAAhQ0MAAAAAIURDAAAAACFFQwAAAAAhRkMAAAAAIUdDAAAAACFIQwAAAAAhSUMAAAAAIUpDAAAAACFLQwAAAAAhTEMAAAAAIU1DAAAAACFOQwAAAAAhT0MAAAAAIVBDAAAAACFRQwAAAAAhUkMAAAAAIVNDAAAAACFUQwAAAAAhVUMAAAAAIVZDAAAAACFXQwAAAAAhWEMAAAAAIVlDAAAAACFaQwAAAAAhW0MAAAAAIVxDAAAAACFdQQAhCUMAAAAAIV5DAAAAACFfQQAhCkMAAAAAIWBBACELQQAhDEEAIQ1DAAAAACFhQwAAAAAhYkMAAAAAIWNBACEOQwAAAAAhZEEAIQ9DAAAAACFlQwAAAAAhZkMAAAAAIWdDAAAAACFoQwAAAAAhaUMAAAAAIWpDAAAAACFrQwAAAAAhbEMAAAAAIW1DAAAAACFuQwAAAAAhb0MAAAAAIXBDAAAAACFxQwAAAAAhckMAAAAAIXNDAAAAACF0QwAAAAAhdUMAAAAAIXZDAAAAACF3QwAAAAAheEMAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9QwAAAAAhfkMAAAAAIX9DAAAAACGAAUMAAAAAIYEBQwAAAAAhggFDAAAAACGDAUMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBQwAAAAAhlwFDAAAAACGYAUMAAAAAIZkBQwAAAAAhmgFDAAAAACGbAUMAAAAAIZwBQwAAAAAhnQFDAAAAACGeAUMAAAAAIZ8BQwAAAAAhoAFDAAAAACGhAUMAAAAAIaIBQwAAAAAhowFDAAAAACGkAUMAAAAAIaUBQwAAAAAhpgFDAAAAACGnAUMAAAAAIagBQwAAAAAhqQFDAAAAACGqAUMAAAAAIasBQwAAAAAhrAFDAAAAACGtAUMAAAAAIa4BQwAAAAAhrwEgA0EAaigCACEEQ28SgzpBACoCjIAQlCEQQQAqApiAECERIBFDAAAAAF4hBSAFQQBKIQYgBbIhEiARQwAAAABbQQBKIQdBACoCuIAQIBFDAACAv5KUIRMgEUMAAAAAXyEIQQAqAvCAEEEAKgL0gBCUIRRDzcxMPUOamdk/QQAqArSBEpaXIRVBACoCsIESIBWVEAEhFiAWQwAAAEAQAiEXQwAAgD9BACoCpIESIBeUkyEYQwAAgD8gF5MhGSAYIBmVIRpDAAAAACAYQwAAAEAQAiAZQwAAAEAQApVDAACAv5KXkSEbIBogG5MhHCAWIBtDAACAPyAak5KUIR1BACoCuIESIBWVEAEgFpVDAACAv5IhHkEAKgL4wRogFZUQASEfIB9DAAAAQBACISBDAACAP0EAKgKkgRIgIJSTISFDAACAPyAgkyEiICEgIpUhI0MAAAAAICFDAAAAQBACICJDAAAAQBAClUMAAIC/kpeRISQgIyAkkyElIB8gJEMAAIA/ICOTkpQhJkEAKgL8wRogFZUQASAflUMAAIC/kiEnQQAqAqzCIyAVlRABISggKEMAAABAEAIhKUMAAIA/QQAqAqSBEiAplJMhKkMAAIA/ICmTISsgKiArlSEsQwAAAAAgKkMAAABAEAIgK0MAAABAEAKVQwAAgL+Sl5EhLSAsIC2TIS4gKCAtQwAAgD8gLJOSlCEvQQAqArDCIyAVlRABICiVQwAAgL+SITBBACoC4MIoIBWVEAEhMSAxQwAAAEAQAiEyQwAAgD9BACoCpIESIDKUkyEzQwAAgD8gMpMhNEMAAAAAIDNDAAAAQBACIDRDAAAAQBAClUMAAIC/kpeRITUgMyA0lSE2IDVDAACAPyA2k5IgMZQhN0EAKgLkwiggFZUQASAxlUMAAIC/kiE4IDYgNZMhOUEAKgKUwzEgFZUQASE6IDpDAAAAQBACITtDAACAP0EAKgKkgRIgO5STITxDAACAPyA7kyE9IDwgPZUhPkMAAAAAIDxDAAAAQBACID1DAAAAQBAClUMAAIC/kpeRIT8gPiA/kyFAIDogP0MAAIA/ID6TkpQhQUEAKgKYwzEgFZUQASA6lUMAAIC/kiFCQQAqAsiDNiAVlRABIUMgQ0MAAABAEAIhREMAAIA/QQAqAqSBEiBElJMhRUMAAIA/IESTIUYgRSBGlSFHQwAAAAAgRUMAAABAEAIgRkMAAABAEAKVQwAAgL+Sl5EhSCBHIEiTIUkgQyBIQwAAgD8gR5OSlCFKQQAqAsyDNiAVlRABIEOVQwAAgL+SIUtBACoC/IM7IBWVEAEhTCBMQwAAAEAQAiFNQwAAgD9BACoCpIESIE2UkyFOQwAAgD8gTZMhTyBOIE+VIVBDAAAAACBOQwAAAEAQAiBPQwAAAEAQApVDAACAv5KXkSFRIFAgUZMhUiBMIFFDAACAPyBQk5KUIVNBACoCgIQ7IBWVEAEgTJVDAACAv5IhVEEAKgKwxD8gFZUQASFVIFVDAAAAQBACIVZDAACAP0EAKgKkgRIgVpSTIVdDAACAPyBWkyFYIFcgWJUhWUMAAAAAIFdDAAAAQBACIFhDAAAAQBAClUMAAIC/kpeRIVogWSBakyFbIFUgWkMAAIA/IFmTkpQhXEEAKgK0xD8gFZUQASBVlUMAAIC/kiFdQQAhCQNAAkAgEEN3vn8/QQAqApSAEJSSIV5BACBeQwAAAAAgXrxBgICA/AdxGzgCkIAQQ/p+Cj9BACoCiIAQQQAqApCAEJVDAABAQJKUIV8gX6ghCiBfjiFgIApBAWohCyAKQQBBACAKSBshDCALQQBBACALSBshDUGkgRBBACgCoIEQQYEgIAxBgSAgDEgbQQFqa0H/P3FBAnRqKgIAIGBDAACAPyBfk5KUIF8gYJNBpIEQQQAoAqCBEEGBICANQYEgIA1IG0EBamtB/z9xQQJ0aioCAJSSIWFDAAAAAEEAKgKcgBBBACoCpIAQQwAAgD+SliAGGyFiQQAgYkMAAAAAIGK8QYCAgPwHcRs4AqCAEEMAAAAAQQAqAqiAEEEAKgKwgBBDAACAP5KWIAcbIWNBACBjQwAAAAAgY7xBgICA/AdxGzgCrIAQQQAqAqyAEEEAKgK0gBBdIQ4gEkMAAAAAQQAqAryAEEEAKgKsgBCUQwAAgD8gDhtBACoCrIAQQwAAAABdGyATQQAqAqyAEEEAKgK0gBCTlEMAAIA/kiARQQAqAqyAEEEAKgKogBBdGyAOG5RBACoCxIAQIAUbIWRBACBkQwAAAAAgZLxBgICA/AdxGzgCwIAQQQAgBUEAKALQgBBBACoC7IAQQwAAgD9gcnE2AsyAEEEAIAVBACgC2IAQQQFqbDYC1IAQIAhBACoC7IAQQwAAAABecSEPQQAoAtiAELIhZSAPQQBGQQAqAuyAEEO9N4Y1YHKyQQAqAtyAEEEAKALQgBBBAEYgBXFBACoC7IAQQwAAgD9dcSBlQQAqAuCAEF5xQQEgZUEAKgLggBBda2yylEEAKgLsgBBDAACAP0EAKgLkgBAgD7KUk5SSlCFmQQAgZkMAAAAAIGa8QYCAgPwHcRs4AuiAECAUQQAqAvyAECAUQQAqAvyAEJKOk5IhZ0EAIGdDAAAAACBnvEGAgID8B3EbOAL4gBBBACoCwIAQQQAqAsCAEEEAKgLIgBBDAAAAAEEAKgKggBBBACoCwIAQlJOUkkMAAAAAQQAqAqCAEEEAKgKcgBBdG0EAKgKggBBDAAAAAF0bQ83MTD1BACoC6IAQQQBDAACAR0EAKgL4gBCUqEECdGoqAgCUlJIhaEOPwvU8Q5qZmT4gaJRDmplZPyBhlJOUQwAAAABDZDv/P0EAKgKAgRBBACoCkIAQlBAAlJNBACoCiIEQlENgd34/QQAqAoyBEJSSkyFpQQAgaUMAAAAAIGm8QYCAgPwHcRs4AoSBEEEAKgKEgRBDAAAAQBACIWogakMAAIA/XrIgaiBqQwAAgD9fspSSIWtDmplZPyBhQwAAgD8ga5OUlCFsQ5qZmT4gaCBrlJQhbUEAIG0gbJI4ApCBECBsQ1K4fj9BACoCnIEQlCBtkpJBACoClIEQkyFuQQAgbkMAAAAAIG68QYCAgPwHcRs4ApiBEEEAKgKYgRAhb0GkgRBBACgCoIEQQf8/cUECdGogb0MAAAAAIG+8QYCAgPwHcRs4AgBDAAAAAEEAKgLAgRJBACoCxIESQQAqAsyBEpRBACoCtMVEQQAqArjFRJKTlJMhcEEAIHBDAAAAACBwvEGAgID8B3EbOALIgRIgHEEAKgLUgRKUIB1BACoCtMVEIB5BACoCyIESlJKUkiFxQQAgcUMAAAAAIHG8QYCAgPwHcRs4AtCBEkHYgRJBACgCoIEQQf//AXFBAnRqQ/MEtT5BACoC0IESlEMI5TwekjgCAEOPwvU+QaSBEEEAKAKggRBBACgC4IEaa0H/P3FBAnRqKgIAlCFyQ5qZGT9BACoC7MEalEHYgRJBACgCoIEQQQAoAtyBGmtB//8BcUECdGoqAgCSIHKTIXNB5IEaQQAoAqCBEEH/D3FBAnRqIHM4AgBB5IEaQQAoAqCBEEEAKALkwRprQf8PcUECdGoqAgAhdEEAIHRDAAAAACB0vEGAgID8B3EbOALowRpDAAAAAEOamRk/IHOUkyF1IHVDAAAAACB1vEGAgID8B3EbIXZDAAAAAEEAKgLAgRJBACoCxIESQQAqAoTCGpRBACoChMVEQQAqAojFRJKTlJMhd0EAIHdDAAAAACB3vEGAgID8B3EbOAKAwhogJUEAKgKMwhqUICZBACoChMVEICdBACoCgMIalJKUkiF4QQAgeEMAAAAAIHi8QYCAgPwHcRs4AojCGkGQwhpBACgCoIEQQf//AXFBAnRqQ/MEtT5BACoCiMIalEMI5TwekjgCAEOamRk/QQAqAqDCI5RBkMIaQQAoAqCBEEEAKAKUwiJrQf//AXFBAnRqKgIAkiBykyF5QZjCIkEAKAKggRBB/x9xQQJ0aiB5OAIAQZjCIkEAKAKggRBBACgCmMIja0H/H3FBAnRqKgIAIXpBACB6QwAAAAAgerxBgICA/AdxGzgCnMIjQwAAAABDmpkZPyB5lJMheyB7QwAAAAAge7xBgICA/AdxGyF8QwAAAABBACoCwIESQQAqAsSBEkEAKgK4wiOUQQAqApzFREEAKgKgxUSSk5STIX1BACB9QwAAAAAgfbxBgICA/AdxGzgCtMIjIC5BACoCwMIjlCAvQQAqApzFRCAwQQAqArTCI5SSlJIhfkEAIH5DAAAAACB+vEGAgID8B3EbOAK8wiNBxMIjQQAoAqCBEEH//wBxQQJ0akPzBLU+QQAqArzCI5RDCOU8HpI4AgBDmpkZP0EAKgLUwiiUQcTCI0EAKAKggRBBACgCyMIna0H//wBxQQJ0aioCAJIgcpIhf0HMwidBACgCoIEQQf8fcUECdGogfzgCAEHMwidBACgCoIEQQQAoAszCKGtB/x9xQQJ0aioCACGAAUEAIIABQwAAAAAggAG8QYCAgPwHcRs4AtDCKEMAAAAAQ5qZGT8gf5STIYEBIIEBQwAAAAAggQG8QYCAgPwHcRshggFDAAAAAEEAKgLAgRJBACoCxIESQQAqAuzCKJRBACoC7MREQQAqAvDERJKTlJMhgwFBACCDAUMAAAAAIIMBvEGAgID8B3EbOALowiggN0EAKgLsxEQgOEEAKgLowiiUkpQgOUEAKgL0wiiUkiGEAUEAIIQBQwAAAAAghAG8QYCAgPwHcRs4AvDCKEH4wihBACgCoIEQQf//AXFBAnRqQ/MEtT5BACoC8MIolEMI5TwekjgCAEH4wihBACgCoIEQQQAoAvzCMGtB//8BcUECdGoqAgAgcpJDmpkZP0EAKgKIwzGUkiGFAUGAwzBBACgCoIEQQf8fcUECdGoghQE4AgBBgMMwQQAoAqCBEEEAKAKAwzFrQf8fcUECdGoqAgAhhgFBACCGAUMAAAAAIIYBvEGAgID8B3EbOAKEwzFDAAAAAEOamRk/IIUBlJMhhwEghwFDAAAAACCHAbxBgICA/AdxGyGIAUMAAAAAQQAqAsCBEkEAKgLEgRJBACoCoMMxlEEAKgKoxURBACoCrMVEkpOUkyGJAUEAIIkBQwAAAAAgiQG8QYCAgPwHcRs4ApzDMSBAQQAqAqjDMZQgQUEAKgKoxUQgQkEAKgKcwzGUkpSSIYoBQQAgigFDAAAAACCKAbxBgICA/AdxGzgCpMMxQazDMUEAKAKggRBB//8AcUECdGpD8wS1PkEAKgKkwzGUQwjlPB6SOAIAQazDMUEAKAKggRBBACgCsMM1a0H//wBxQQJ0aioCACByQ5qZGT9BACoCvIM2lJKTIYsBQbTDNUEAKAKggRBB/w9xQQJ0aiCLATgCAEG0wzVBACgCoIEQQQAoArSDNmtB/w9xQQJ0aioCACGMAUEAIIwBQwAAAAAgjAG8QYCAgPwHcRs4AriDNkOamRk/IIsBlCGNASCNAUMAAAAAII0BvEGAgID8B3EbIY4BQwAAAABBACoCwIESQQAqAsSBEkEAKgLUgzaUQQAqAvjEREEAKgL8xESSk5STIY8BQQAgjwFDAAAAACCPAbxBgICA/AdxGzgC0IM2IElBACoC3IM2lCBKQQAqAvjERCBLQQAqAtCDNpSSlJIhkAFBACCQAUMAAAAAIJABvEGAgID8B3EbOALYgzZB4IM2QQAoAqCBEEH//wBxQQJ0akPzBLU+QQAqAtiDNpRDCOU8HpI4AgBB4IM2QQAoAqCBEEEAKALkgzprQf//AHFBAnRqKgIAIHJDmpkZP0EAKgLwgzuUkpMhkQFB6IM6QQAoAqCBEEH/H3FBAnRqIJEBOAIAQeiDOkEAKAKggRBBACgC6IM7a0H/H3FBAnRqKgIAIZIBQQAgkgFDAAAAACCSAbxBgICA/AdxGzgC7IM7Q5qZGT8gkQGUIZMBIJMBQwAAAAAgkwG8QYCAgPwHcRshlAFDAAAAAEEAKgLAgRJBACoCxIESQQAqAoiEO5RBACoC4MREQQAqAuTERJKTlJMhlQFBACCVAUMAAAAAIJUBvEGAgID8B3EbOAKEhDsgUkEAKgKQhDuUIFNBACoC4MREIFRBACoChIQ7lJKUkiGWAUEAIJYBQwAAAAAglgG8QYCAgPwHcRs4AoyEO0GUhDtBACgCoIEQQf//AHFBAnRqQ/MEtT5BACoCjIQ7lEMI5TwekjgCAEGUhDtBACgCoIEQQQAoApiEP2tB//8AcUECdGoqAgAgcpJDmpkZP0EAKgKkxD+UkyGXAUGchD9BACgCoIEQQf8PcUECdGoglwE4AgBBnIQ/QQAoAqCBEEEAKAKcxD9rQf8PcUECdGoqAgAhmAFBACCYAUMAAAAAIJgBvEGAgID8B3EbOAKgxD9DmpkZPyCXAZQhmQEgmQFDAAAAACCZAbxBgICA/AdxGyGaAUMAAAAAQQAqAsCBEkEAKgLEgRJBACoCvMQ/lEEAKgKQxURBACoClMVEkpOUkyGbAUEAIJsBQwAAAAAgmwG8QYCAgPwHcRs4ArjEPyBbQQAqAsTEP5QgXEEAKgKQxUQgXUEAKgK4xD+UkpSSIZwBQQAgnAFDAAAAACCcAbxBgICA/AdxGzgCwMQ/QcjEP0EAKAKggRBB//8AcUECdGpD8wS1PkEAKgLAxD+UQwjlPB6SOAIAIHJByMQ/QQAoAqCBEEEAKALMxENrQf//AHFBAnRqKgIAkkOamRk/QQAqAtjERJSTIZ0BQdDEwwBBACgCoIEQQf8fcUECdGognQE4AgBB0MTDAEEAKAKggRBBACgC0MREa0H/H3FBAnRqKgIAIZ4BQQAgngFDAAAAACCeAbxBgICA/AdxGzgC1MREQ5qZGT8gnQGUIZ8BIJ8BQwAAAAAgnwG8QYCAgPwHcRshoAEgmgEgoAGSIaEBII4BIJQBIKEBkpIhogFBACoC7MEaQQAqAqDCI0EAKgLUwiggdiB8IIIBIIgBIKIBkpKSkpKSkkEAKgKkxD+SQQAqAtjERJJBACoC8IM7kkEAKgK8gzaSQQAqAojDMZIhowFBACCjAUMAAAAAIKMBvEGAgID8B3EbOALcxERBACoCvIM2QQAqAvCDO0EAKgLYxERBACoCpMQ/IKIBkpKSkkEAKgLswRpBACoCoMIjQQAqAtTCKCB2IHwgiAEgggGSkpKSkpJBACoCiMMxkpMhpAFBACCkAUMAAAAAIKQBvEGAgID8B3EbOALoxEQglAEgjgGSIaUBQQAqAtTCKCCCASCIASChAZKSkkEAKgKkxD+SQQAqAtjERJJBACoCiMMxkkEAKgLswRpBACoCoMIjIHYgfCClAZKSkpJBACoC8IM7kkEAKgK8gzaSkyGmAUEAIKYBQwAAAAAgpgG8QYCAgPwHcRs4AvTEREEAKgLswRpBACoCoMIjIHYgfCChAZKSkpJBACoCpMQ/kkEAKgLYxESSQQAqAtTCKCCCASCIASClAZKSkkEAKgLwgzuSQQAqAryDNpJBACoCiMMxkpMhpwFBACCnAUMAAAAAIKcBvEGAgID8B3EbOAKAxUQgmgEglAGSIagBIKABII4BkiGpAUEAKgKgwiMgfCCIASCoAZKSkkEAKgKkxD+SQQAqAvCDO5JBACoCiMMxkkEAKgLswRpBACoC1MIoIHYgggEgqQGSkpKSQQAqAtjERJJBACoCvIM2kpMhqgFBACCqAUMAAAAAIKoBvEGAgID8B3EbOAKMxURBACoC7MEaQQAqAtTCKCB2IIIBIKgBkpKSkkEAKgKkxD+SQQAqAvCDO5JBACoCoMIjIHwgiAEgqQGSkpJBACoC2MREkkEAKgK8gzaSQQAqAojDMZKTIasBQQAgqwFDAAAAACCrAbxBgICA/AdxGzgCmMVEIJoBII4BkiGsASCgASCUAZIhrQFBACoC7MEaIHYgiAEgrAGSkpJBACoCpMQ/kkEAKgK8gzaSQQAqAojDMZJBACoCoMIjQQAqAtTCKCB8IIIBIK0BkpKSkkEAKgLYxESSQQAqAvCDO5KTIa4BQQAgrgFDAAAAACCuAbxBgICA/AdxGzgCpMVEQQAqAqDCI0EAKgLUwiggfCCCASCsAZKSkpJBACoCpMQ/kkEAKgK8gzaSQQAqAuzBGiB2IIgBIK0BkpKSQQAqAtjERJJBACoC8IM7kkEAKgKIwzGSkyGvAUEAIK8BQwAAAAAgrwG8QYCAgPwHcRs4ArDFRCAEIAlqQ83MTEBBpIEQQQAoAqCBEEEAa0H/P3FBAnRqKgIAlEOkcL0+QQAqAujEREEAKgL0xESSQQAqAujEREEAKgL0xESTkpSSOAIAQQBBACoCkIAQOAKUgBBBAEEAKgKggBA4AqSAEEEAQQAqAqyAEDgCsIAQQQBBACoCwIAQOALEgBBBAEEAKALMgBA2AtCAEEEAQQAoAtSAEDYC2IAQQQBBACoC6IAQOALsgBBBAEEAKgL4gBA4AvyAEEEAQQAqAoiBEDgCjIEQQQBBACoChIEQOAKIgRBBAEEAKgKQgRA4ApSBEEEAQQAqApiBEDgCnIEQQQBBACgCoIEQQQFqNgKggRBBAEEAKgLIgRI4AsyBEkEAQQAqAtCBEjgC1IESQQBBACoC6MEaOALswRpBAEEAKgKAwho4AoTCGkEAQQAqAojCGjgCjMIaQQBBACoCnMIjOAKgwiNBAEEAKgK0wiM4ArjCI0EAQQAqArzCIzgCwMIjQQBBACoC0MIoOALUwihBAEEAKgLowig4AuzCKEEAQQAqAvDCKDgC9MIoQQBBACoChMMxOAKIwzFBAEEAKgKcwzE4AqDDMUEAQQAqAqTDMTgCqMMxQQBBACoCuIM2OAK8gzZBAEEAKgLQgzY4AtSDNkEAQQAqAtiDNjgC3IM2QQBBACoC7IM7OALwgztBAEEAKgKEhDs4AoiEO0EAQQAqAoyEOzgCkIQ7QQBBACoCoMQ/OAKkxD9BAEEAKgK4xD84ArzEP0EAQQAqAsDEPzgCxMQ/QQBBACoC1MREOALYxERBAEEAKgLgxEQ4AuTEREEAQQAqAtzERDgC4MREQQBBACoC7MREOALwxERBAEEAKgLoxEQ4AuzEREEAQQAqAvjERDgC/MREQQBBACoC9MREOAL4xERBAEEAKgKExUQ4AojFREEAQQAqAoDFRDgChMVEQQBBACoCkMVEOAKUxURBAEEAKgKMxUQ4ApDFREEAQQAqApzFRDgCoMVEQQBBACoCmMVEOAKcxURBAEEAKgKoxUQ4AqzFREEAQQAqAqTFRDgCqMVEQQBBACoCtMVEOAK4xURBAEEAKgKwxUQ4ArTFRCAJQQRqIQkgCUEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQEPC4uAgIAAACAAIAFqKgIADwuKgICAAABBACgCgIAQDwuOgICAAAAgACABEAUgACABEA4Ln5iAgAABPH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACEBA0ACQEGQgBAgAUECdGpDAAAAADgCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQaCAECACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBrIAQIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHAgBAgBEECdGpDAAAAADgCACAEQQFqIQQgBEECSARADAIMAQsLC0EAIQUDQAJAQcyAECAFQQJ0akEANgIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB1IAQIAZBAnRqQQA2AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHogBAgB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQfiAECAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBBhIEQIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBA0gEQAwCDAELCwtBACEKA0ACQEGQgRAgCkECdGpDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQZiBECALQQJ0akMAAAAAOAIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQBBADYCoIEQQQAhDANAAkBBpIEQIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBgMAASARADAIMAQsLC0EAIQ0DQAJAQciBEiANQQJ0akMAAAAAOAIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBB0IESIA5BAnRqQwAAAAA4AgAgDkEBaiEOIA5BAkgEQAwCDAELCwtBACEPA0ACQEHYgRIgD0ECdGpDAAAAADgCACAPQQFqIQ8gD0GAgAJIBEAMAgwBCwsLQQAhEANAAkBB5IEaIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBgBBIBEAMAgwBCwsLQQAhEQNAAkBB6MEaIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEGAwhogEkECdGpDAAAAADgCACASQQFqIRIgEkECSARADAIMAQsLC0EAIRMDQAJAQYjCGiATQQJ0akMAAAAAOAIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQAhFANAAkBBkMIaIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBgIACSARADAIMAQsLC0EAIRUDQAJAQZjCIiAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQYAgSARADAIMAQsLC0EAIRYDQAJAQZzCIyAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBtMIjIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBAkgEQAwCDAELCwtBACEYA0ACQEG8wiMgGEECdGpDAAAAADgCACAYQQFqIRggGEECSARADAIMAQsLC0EAIRkDQAJAQcTCIyAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQYCAAUgEQAwCDAELCwtBACEaA0ACQEHMwicgGkECdGpDAAAAADgCACAaQQFqIRogGkGAIEgEQAwCDAELCwtBACEbA0ACQEHQwiggG0ECdGpDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAQejCKCAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQQJIBEAMAgwBCwsLQQAhHQNAAkBB8MIoIB1BAnRqQwAAAAA4AgAgHUEBaiEdIB1BAkgEQAwCDAELCwtBACEeA0ACQEH4wiggHkECdGpDAAAAADgCACAeQQFqIR4gHkGAgAJIBEAMAgwBCwsLQQAhHwNAAkBBgMMwIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BgCBIBEAMAgwBCwsLQQAhIANAAkBBhMMxICBBAnRqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQEGcwzEgIUECdGpDAAAAADgCACAhQQFqISEgIUECSARADAIMAQsLC0EAISIDQAJAQaTDMSAiQQJ0akMAAAAAOAIAICJBAWohIiAiQQJIBEAMAgwBCwsLQQAhIwNAAkBBrMMxICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBgIABSARADAIMAQsLC0EAISQDQAJAQbTDNSAkQQJ0akMAAAAAOAIAICRBAWohJCAkQYAQSARADAIMAQsLC0EAISUDQAJAQbiDNiAlQQJ0akMAAAAAOAIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBB0IM2ICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBAkgEQAwCDAELCwtBACEnA0ACQEHYgzYgJ0ECdGpDAAAAADgCACAnQQFqIScgJ0ECSARADAIMAQsLC0EAISgDQAJAQeCDNiAoQQJ0akMAAAAAOAIAIChBAWohKCAoQYCAAUgEQAwCDAELCwtBACEpA0ACQEHogzogKUECdGpDAAAAADgCACApQQFqISkgKUGAIEgEQAwCDAELCwtBACEqA0ACQEHsgzsgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQYSEOyArQQJ0akMAAAAAOAIAICtBAWohKyArQQJIBEAMAgwBCwsLQQAhLANAAkBBjIQ7ICxBAnRqQwAAAAA4AgAgLEEBaiEsICxBAkgEQAwCDAELCwtBACEtA0ACQEGUhDsgLUECdGpDAAAAADgCACAtQQFqIS0gLUGAgAFIBEAMAgwBCwsLQQAhLgNAAkBBnIQ/IC5BAnRqQwAAAAA4AgAgLkEBaiEuIC5BgBBIBEAMAgwBCwsLQQAhLwNAAkBBoMQ/IC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BAkgEQAwCDAELCwtBACEwA0ACQEG4xD8gMEECdGpDAAAAADgCACAwQQFqITAgMEECSARADAIMAQsLC0EAITEDQAJAQcDEPyAxQQJ0akMAAAAAOAIAIDFBAWohMSAxQQJIBEAMAgwBCwsLQQAhMgNAAkBByMQ/IDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBgIABSARADAIMAQsLC0EAITMDQAJAQdDEwwAgM0ECdGpDAAAAADgCACAzQQFqITMgM0GAIEgEQAwCDAELCwtBACE0A0ACQEHUxMQAIDRBAnRqQwAAAAA4AgAgNEEBaiE0IDRBAkgEQAwCDAELCwtBACE1A0ACQEHcxMQAIDVBAnRqQwAAAAA4AgAgNUEBaiE1IDVBA0gEQAwCDAELCwtBACE2A0ACQEHoxMQAIDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBA0gEQAwCDAELCwtBACE3A0ACQEH0xMQAIDdBAnRqQwAAAAA4AgAgN0EBaiE3IDdBA0gEQAwCDAELCwtBACE4A0ACQEGAxcQAIDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBA0gEQAwCDAELCwtBACE5A0ACQEGMxcQAIDlBAnRqQwAAAAA4AgAgOUEBaiE5IDlBA0gEQAwCDAELCwtBACE6A0ACQEGYxcQAIDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBA0gEQAwCDAELCwtBACE7A0ACQEGkxcQAIDtBAnRqQwAAAAA4AgAgO0EBaiE7IDtBA0gEQAwCDAELCwtBACE8A0ACQEGwxcQAIDxBAnRqQwAAAAA4AgAgPEEBaiE8IDxBA0gEQAwCDAELCwsL0I+AgAAAQQAgATYCgIAQQQBDAIA7SEMAAIA/QQAoAoCAELKXljgChIAQQQBDAAAAQEEAKgKEgBCUOAKIgBBBAENvEoM6Qylcjz1BACoChIAQlJc4ApyAEEEAQ6abxDtBACoChIAQlDgCqIAQQQBDCtejO0EAKgKEgBCUOAK0gBBBAEMAAHpEQQAqAoSAEJU4AriAEEEAQwAASENBACoChIAQlTgCvIAQQQBDAACAP0EAKgKcgBCVOALIgBBBAEMAAABAQQAqAoSAEJU4AtyAEEEAQ83MTD1BACoChIAQlDgC4IAQQQBDAACAP0MAAIA/QwBQw0dDAAAgQUEAKgKEgBCVEAKVkzgC5IAQQQBDAACAP0EAKgKEgBCVOALwgBBBAENCgFpBQQAqAoSAEJU4AoCBEEEAQx1DE0dBACoChIAQlRAAOAKkgRJBAENSRWE+QQAqAoSAEJRDAAAAP5KOOAKogRJBAEMAAAAAQ1UM3UBBACoCqIESlJNBACoChIAQlTgCrIESQQBDAAAAP0EAKgKsgRKUOAKwgRJBAEOrqqo+QQAqAqyBEpQ4AriBEkEAQwAAgD9DYxQdREEAKgKEgBCVEASVOAK8gRJBAEMAAIA/QQAqAryBEkMAAIA/kpU4AsCBEkEAQwAAgD9BACoCvIESkzgCxIESQQBD1qecPEEAKgKEgBCUQwAAAD+SjjgC2IEaQQBDAACARkMAAAAAQQAqAqiBEkEAKgLYgRqTl5aoNgLcgRpBAEMAAABGQwAAAABDCtejPEEAKgKEgBCUl5aoNgLggRpBAEMAAIBEQwAAAABBACoC2IEaQwAAgL+Sl5aoNgLkwRpBAEM4h4M+QQAqAoSAEJRDAAAAP5KOOALwwRpBAEMAAAAAQ1UM3UBBACoC8MEalJNBACoChIAQlTgC9MEaQQBDAAAAP0EAKgL0wRqUOAL4wRpBAEOrqqo+QQAqAvTBGpQ4AvzBGkEAQ3Xp3zxBACoChIAQlEMAAAA/ko44ApDCIkEAQwAAgEZDAAAAAEEAKgLwwRpBACoCkMIik5eWqDYClMIiQQBDAAAARUMAAAAAQQAqApDCIkMAAIC/kpeWqDYCmMIjQQBDFOtEPkEAKgKEgBCUQwAAAD+SjjgCpMIjQQBDAAAAAENVDN1AQQAqAqTCI5STQQAqAoSAEJU4AqjCI0EAQwAAAD9BACoCqMIjlDgCrMIjQQBDq6qqPkEAKgKowiOUOAKwwiNBAEOu8+88QQAqAoSAEJRDAAAAP5KOOALEwidBAEMAAABGQwAAAABBACoCpMIjQQAqAsTCJ5OXlqg2AsjCJ0EAQwAAAEVDAAAAAEEAKgLEwidDAACAv5KXlqg2AszCKEEAQzdwVz5BACoChIAQlEMAAAA/ko44AtjCKEEAQwAAAABDVQzdQEEAKgLYwiiUk0EAKgKEgBCVOALcwihBAEMAAAA/QQAqAtzCKJQ4AuDCKEEAQ6uqqj5BACoC3MIolDgC5MIoQQBDjQ7IPEEAKgKEgBCUQwAAAD+SjjgC+MIwQQBDAACARkMAAAAAQQAqAtjCKEEAKgL4wjCTl5aoNgL8wjBBAEMAAABFQwAAAABBACoC+MIwQwAAgL+Sl5aoNgKAwzFBAEMAAAA+QQAqAoSAEJRDAAAAP5KOOAKMwzFBAEMAAAAAQ1UM3UBBACoCjMMxlJNBACoChIAQlTgCkMMxQQBDAAAAP0EAKgKQwzGUOAKUwzFBAEOrqqo+QQAqApDDMZQ4ApjDMUEAQ/F+XDxBACoChIAQlEMAAAA/ko44AqzDNUEAQwAAAEZDAAAAAEEAKgKMwzFBACoCrMM1k5eWqDYCsMM1QQBDAACAREMAAAAAQQAqAqzDNUMAAIC/kpeWqDYCtIM2QQBDtOcCPkEAKgKEgBCUQwAAAD+SjjgCwIM2QQBDAAAAAENVDN1AQQAqAsCDNpSTQQAqAoSAEJU4AsSDNkEAQwAAAD9BACoCxIM2lDgCyIM2QQBDq6qqPkEAKgLEgzaUOALMgzZBAEMycwE9QQAqAoSAEJRDAAAAP5KOOALggzpBAEMAAABGQwAAAABBACoCwIM2QQAqAuCDOpOXlqg2AuSDOkEAQwAAAEVDAAAAAEEAKgLggzpDAACAv5KXlqg2AuiDO0EAQ9nNHD5BACoChIAQlEMAAAA/ko44AvSDO0EAQwAAAABDVQzdQEEAKgL0gzuUk0EAKgKEgBCVOAL4gztBAEMAAAA/QQAqAviDO5Q4AvyDO0EAQ6uqqj5BACoC+IM7lDgCgIQ7QQBDqKymPEEAKgKEgBCUQwAAAD+SjjgClIQ/QQBDAAAARkMAAAAAQQAqAvSDO0EAKgKUhD+Tl5aoNgKYhD9BAEMAAIBEQwAAAABBACoClIQ/QwAAgL+Sl5aoNgKcxD9BAEP35zI+QQAqAoSAEJRDAAAAP5KOOAKoxD9BAEMAAAAAQ1UM3UBBACoCqMQ/lJNBACoChIAQlTgCrMQ/QQBDAAAAP0EAKgKsxD+UOAKwxD9BAEOrqqo+QQAqAqzEP5Q4ArTEP0EAQyuhuzxBACoChIAQlEMAAAA/ko44AsjEQ0EAQwAAAEZDAAAAAEEAKgKoxD9BACoCyMRDk5eWqDYCzMRDQQBDAAAARUMAAAAAQQAqAsjEQ0MAAIC/kpeWqDYC0MREC5CAgIAAACAAIAEQDSAAEA8gABAMC7KAgIAAAEEAQwAAlkM4AoyAEEEAQwAAAAA4ApiAEEEAQwAAoEA4AvSAEEEAQ83MTD44ArSBEguNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvQmYCAAAEAQQALyRl7Im5hbWUiOiJCcmFzcyIsImZpbGVuYW1lIjoiQnJhc3MiLCJ2ZXJzaW9uIjoiMi4xMS41IiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvaW5zdHJ1bWVudHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JldmVyYnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yb3V0ZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiMTEyMzAxMiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IkJyYXNzIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkJyYXNzIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9CcmFzc2VzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkJyYXNzIEluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5zdHJ1bWVudCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9JbnN0cnVtZW50L09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMjYyMTY4In0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9CcmFzc19JbnN0cnVtZW50L0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIyNjIxNTYiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzAwIiwibWluIjoiMTcwIiwibWF4IjoiNzAwIiwic3RlcCI6IjEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiUGFyYW1ldGVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0JyYXNzX0luc3RydW1lbnQvUGFyYW1ldGVycy8weDAwL1ZpYnJhdG9fRnJlcXVlbmN5XyhWaWJyYXRvX0VudmVsb3BlKSIsImluZGV4IjoiMjYyMjYwIiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvQnJhc3NfSW5zdHJ1bWVudC9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMjk1MDkyIiwibWV0YSI6W3siYWNjIjoiMSAxIC0xNSAwIDEyIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMC4wNSIsIm1heCI6IjEuNyIsInN0ZXAiOiIwLjAxIn1dfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
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
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
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

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;
        
        this.Brass_instance = new WebAssembly.Instance(BrassProcessor.wasm_module, BrassProcessor.importObject);
  	   	this.factory = this.Brass_instance.exports;
        this.HEAP = this.Brass_instance.exports.memory.buffer;
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
        
        // soundfile items
        this.soundfile_items = [];

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
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
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
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * BrassProcessor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
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
        this.factory.compute(this.dsp, BrassProcessor.buffer_size, this.ins, this.outs);
        
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
    if (BrassProcessor.wasm_module == undefined) {
        BrassProcessor.wasm_module = new WebAssembly.Module(BrassProcessor.atob(getBase64CodeBrass()));
        registerProcessor('Brass', BrassProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Brass cannot be loaded or compiled");
}

