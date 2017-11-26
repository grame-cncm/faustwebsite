
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONPulsaxophone() {
	return "{\"name\":\"Pulsaxophone\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"861556\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Pulsaxo\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Pulsaxo/Frequency\",\"index\":\"716\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Speed_(Granulator)\",\"index\":\"108\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Pulsaxo/Pulse/Probability_(Granulator)\",\"index\":\"80\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/Pulsaxo/Vibrato_Frequency\",\"index\":\"36\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/Pulsaxo/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"33640\",\"meta\":[{\"acc\":\"1 1 -15 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.72\",\"min\":\"0.1\",\"max\":\"1.7\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodePulsaxophone() { return "AGFzbQEAAAAB64CAgAAUYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWACfX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK+gICAAAYDZW52A2NvcwACA2VudgNleHAAAwNlbnYEZm1vZAAEA2VudgNwb3cAEANlbnYDc2luABIDZW52A3RhbgATA4+AgIAADgABBQYHCAkKCwwNDg8RBYeAgIAAAQCQgICAAAe6gYCAAAwHY29tcHV0ZQAHDGdldE51bUlucHV0cwAIDWdldE51bU91dHB1dHMACQ1nZXRQYXJhbVZhbHVlAAoNZ2V0U2FtcGxlUmF0ZQALBGluaXQADA1pbnN0YW5jZUNsZWFyAA0RaW5zdGFuY2VDb25zdGFudHMADgxpbnN0YW5jZUluaXQADxppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAQDXNldFBhcmFtVmFsdWUAEwZtZW1vcnkCAAregYGAAA6CgICAAAALpM+AgAACEn/HAX1BACEEQQAhBUMAAAAAIRZDAAAAACEXQwAAAAAhGEMAAAAAIRlDAAAAACEaQwAAAAAhG0MAAAAAIRxDAAAAACEdQwAAAAAhHkMAAAAAIR9DAAAAACEgQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQQAhBkMAAAAAIWNDAAAAACFkQwAAAAAhZUMAAAAAIWZDAAAAACFnQQAhB0MAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQQAhCEMAAAAAIW1BACEJQQAhCkEAIQtBACEMQwAAAAAhbkEAIQ1DAAAAACFvQwAAAAAhcEMAAAAAIXFDAAAAACFyQwAAAAAhc0MAAAAAIXRDAAAAACF1QQAhDkMAAAAAIXZBACEPQQAhEEEAIRFDAAAAACF3QwAAAAAheEMAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9QwAAAAAhfkMAAAAAIX9DAAAAACGAAUMAAAAAIYEBQwAAAAAhggFDAAAAACGDAUMAAAAAIYQBQwAAAAAhhQFDAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQQAhEkMAAAAAIZQBQQAhE0EAIRRBACEVQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBQwAAAAAhswFDAAAAACG0AUMAAAAAIbUBQwAAAAAhtgFDAAAAACG3AUMAAAAAIbgBQwAAAAAhuQFDAAAAACG6AUMAAAAAIbsBQwAAAAAhvAFDAAAAACG9AUMAAAAAIb4BQwAAAAAhvwFDAAAAACHAAUMAAAAAIcEBQwAAAAAhwgFDAAAAACHDAUMAAAAAIcQBQwAAAAAhxQFDAAAAACHGAUMAAAAAIccBQwAAAAAhyAFDAAAAACHJAUMAAAAAIcoBQwAAAAAhywFDAAAAACHMAUMAAAAAIc0BQwAAAAAhzgFDAAAAACHPAUMAAAAAIdABQwAAAAAh0QFDAAAAACHSAUMAAAAAIdMBQwAAAAAh1AFDAAAAACHVAUMAAAAAIdYBQwAAAAAh1wFDAAAAACHYAUMAAAAAIdkBQwAAAAAh2gFDAAAAACHbAUMAAAAAIdwBIANBAGooAgAhBCADQQRqKAIAIQVDbxKDOkEAKgIklCEWQQAqAlAhF0EAKgJsIRhDF7fROEEAKgLMBZQhGUPNzMw9Q5qZ2T9BACoC6IYClpchGkEAKgLkhgIgGpUQASEbIBtDAAAAQBADIRxDAACAP0EAKgLYhgIgHJSTIR1DAACAPyAckyEeIB0gHpUhH0MAAAAAIB1DAAAAQBADIB5DAAAAQBADlUMAAIC/kpeRISAgHyAgkyEhIBsgIEMAAIA/IB+TkpQhIkEAKgLshgIgGpUQASAblUMAAIC/kiEjQQAqArDHCiAalRABISQgJEMAAABAEAMhJUMAAIA/QQAqAtiGAiAllJMhJkMAAIA/ICWTIScgJiAnlSEoQwAAAAAgJkMAAABAEAMgJ0MAAABAEAOVQwAAgL+Sl5EhKSAoICmTISogJCApQwAAgD8gKJOSlCErQQAqArTHCiAalRABICSVQwAAgL+SISxBACoC5McTIBqVEAEhLSAtQwAAAEAQAyEuQwAAgD9BACoC2IYCIC6UkyEvQwAAgD8gLpMhMCAvIDCVITFDAAAAACAvQwAAAEAQAyAwQwAAAEAQA5VDAACAv5KXkSEyIDEgMpMhMyAtIDJDAACAPyAxk5KUITRBACoC6McTIBqVEAEgLZVDAACAv5IhNUEAKgKYyBggGpUQASE2IDZDAAAAQBADITdDAACAP0EAKgLYhgIgN5STIThDAACAPyA3kyE5IDggOZUhOkMAAAAAIDhDAAAAQBADIDlDAAAAQBADlUMAAIC/kpeRITsgOiA7kyE8IDYgO0MAAIA/IDqTkpQhPUEAKgKcyBggGpUQASA2lUMAAIC/kiE+QQAqAszIISAalRABIT8gP0MAAABAEAMhQEMAAIA/QQAqAtiGAiBAlJMhQUMAAIA/IECTIUIgQSBClSFDQwAAAAAgQUMAAABAEAMgQkMAAABAEAOVQwAAgL+Sl5EhRCBDIESTIUUgPyBEQwAAgD8gQ5OSlCFGQQAqAtDIISAalRABID+VQwAAgL+SIUdBACoCgIkmIBqVEAEhSCBIQwAAAEAQAyFJQwAAgD9BACoC2IYCIEmUkyFKQwAAgD8gSZMhSyBKIEuVIUxDAAAAACBKQwAAAEAQAyBLQwAAAEAQA5VDAACAv5KXkSFNIEwgTZMhTiBIIE1DAACAPyBMk5KUIU9BACoChIkmIBqVEAEgSJVDAACAv5IhUEEAKgK0iSsgGpUQASFRIFFDAAAAQBADIVJDAACAP0EAKgLYhgIgUpSTIVNDAACAPyBSkyFUIFMgVJUhVUMAAAAAIFNDAAAAQBADIFRDAAAAQBADlUMAAIC/kpeRIVYgVSBWkyFXIFEgVkMAAIA/IFWTkpQhWEEAKgK4iSsgGpUQASBRlUMAAIC/kiFZQQAqAuiJMCAalRABIVogWkMAAABAEAMhW0MAAIA/QQAqAtiGAiBblJMhXEMAAIA/IFuTIV0gXCBdlSFeQwAAAAAgXEMAAABAEAMgXUMAAABAEAOVQwAAgL+Sl5EhXyBeIF+TIWAgWiBfQwAAgD8gXpOSlCFhQQAqAuyJMCAalRABIFqVQwAAgL+SIWJBACEGA0ACQEEAQQE2AgAgFkN3vn8/QQAqAiyUkiFjQQAgY0MAAAAAIGO8QYCAgPwHcRs4AihBACoCIEEAKgIolCFkIGQQBCFlIGQQACFmIGVBACoCPJRBACoCNCBmlJIhZ0EAIGdDAAAAACBnvEGAgID8B3EbOAIwQQFBACgCBGshByBmQQAqAjyUQQAqAjRDAAAAACBlk5SSIAeykiFoQQAgaEMAAAAAIGi8QYCAgPwHcRs4AjhBACAXOAJUQQAqAkhBACoCYJRBACoCTCAXQQAqAliSlJIhaUEAIGlDAAAAACBpvEGAgID8B3EbOAJcQQAgGDgCcEEAKgJIQQAqAnyUQQAqAmggGEEAKgJ0kpSSIWpBACBqQwAAAAAgarxBgICA/AdxGzgCeEEAKgKEAUEAKgJkQQAqAniUkkMAAIA/EAIha0EAIGtDAAAAACBrvEGAgID8B3EbOAKAAUEAKgKAAUNvEoO6kiFsQQAgbDgCiAFBACoCjAFDAAAAAF8gbEMAAAAAXnEhCEEAQe2cmY4EQQAoApQBbEG54ABqNgKQAUEAKgKcAUEBIAhrspQgCLJDAAAAMEEAKAKQAbKUi5SSIW1BACBtQwAAAAAgbbxBgICA/AdxGzgCmAFBACoCXEEAKgKYAV4hCUGkAUEAKAKgAUH/AHFBAnRqIGxDAAAAP102AgAgCUGkAUEAKAKgAUHkAGtB/wBxQQJ0aigCAGwhCiAKQQBKIQsgC0EASiEMQwAAAABBACoCpAVBACoCrAVDAACAP5KWIAwbIW5BACBuQwAAAAAgbrxBgICA/AdxGzgCqAUgCkEARkEASiENQwAAAABBACoCsAVBACoCuAVDAACAP5KWIA0bIW9BACBvQwAAAAAgb7xBgICA/AdxGzgCtAUgC7JDAAAAAEEAKgK8BSAJskEAKgK0BZRBpAFBACgCoAFB5ABrQf8AcUECdGooAgCylJQgCrJBACoCtAVBACoCsAVdG0EAKgK0BUMAAAAAXRuUQQAqAsQFIAsbIXBBACBwQwAAAAAgcLxBgICA/AdxGzgCwAVDzcxMPkEAKgIwlEMAAIA/kkEAKgLABUEAKgLABUEAKgLIBUEAKgKoBUMAAAAAQQAqAsAFk5SUkkMAAAAAQQAqAqgFQQAqAqQFXRtBACoCqAVDAAAAAF0blEP8jycpQQAoApABspRDRItMP5KUIXEgGUNy+X8/QQAqAtQFlJIhckEAIHJDAAAAACByvEGAgID8B3EbOALQBUMAAKBCQwAAXERBACoC0AWWlyFzQQAqAgwgc5VDAABAwJIhdEOF6xE/IHSUIXUgdaghDiB1jiF2IA5BAWohDyAOQQBBACAOSBshECAPQQBBACAPSBshEUHQxgBBACgCoAFBgSAgEEGBICAQSBtBAWprQf8PcUECdGoqAgAgdkMAAIA/IHWTkpQgdSB2k0HQxgBBACgCoAFBgSAgEUGBICARSBtBAWprQf8PcUECdGoqAgCUkiF3Q3e+fz9BACoC3AWUQ2K+vDmSIXhBACB4QwAAAAAgeLxBgICA/AdxGzgC2AVBACoCICBzlCF5IHkQBCF6IHkQACF7QQAqAuwFIHqUQQAqAuQFIHuUkiF8QQAgfEMAAAAAIHy8QYCAgPwHcRs4AuAFQQAqAuwFIHuUQQAqAuQFQwAAAAAgepOUkiAHspIhfUEAIH1DAAAAACB9vEGAgID8B3EbOALoBUMAAAAAQQAqAvAFQQAqAvgFQwAAgD+SliAMGyF+QQAgfkMAAAAAIH68QYCAgPwHcRs4AvQFQwAAAABBACoC/AVBACoChAZDAACAP5KWIA0bIX9BACB/QwAAAAAgf7xBgICA/AdxGzgCgAYgC7JDAAAAAEEAKgKIBiAJskEAKgKABpRBpAFBACgCoAFB5ABrQf8AcUECdGooAgCylJQgCrJBACoCgAZBACoC/AVdG0EAKgKABkMAAAAAXRuUQQAqApAGIAsbIYABQQAggAFDAAAAACCAAbxBgICA/AdxGzgCjAZD2w9JQEEAKgLYBUEAKgLgBZRBACoCjAZBACoCjAZBACoClAZBACoC9AVDAAAAAEEAKgKMBpOUlJJDAAAAAEEAKgL0BUEAKgLwBV0bQQAqAvQFQwAAAABdG5SUIYEBIIEBEAQhggFDAAAAACCCAZMhgwEggQEQACGEAUEAKgLEBiCDAZQgdyCEAZSSIYUBIIMBQQAqArwGlCCEASCFAZSSIYYBIIMBQQAqArQGlCCEASCGAZSSIYcBIIMBQQAqAqwGlCCEASCHAZSSIYgBIIMBQQAqAqQGlCCEASCIAZSSIYkBIIMBQQAqApwGlCCEASCJAZSSIYoBQQAgigFDAAAAACCKAbxBgICA/AdxGzgCmAYgggEgiQGUIIQBQQAqApwGlJIhiwFBACCLAUMAAAAAIIsBvEGAgID8B3EbOAKgBiCCASCIAZQghAFBACoCpAaUkiGMAUEAIIwBQwAAAAAgjAG8QYCAgPwHcRs4AqgGIIIBIIcBlCCEAUEAKgKsBpSSIY0BQQAgjQFDAAAAACCNAbxBgICA/AdxGzgCsAYgggEghgGUIIQBQQAqArQGlJIhjgFBACCOAUMAAAAAII4BvEGAgID8B3EbOAK4BiCCASCFAZQghAFBACoCvAaUkiGPAUEAII8BQwAAAAAgjwG8QYCAgPwHcRs4AsAGQwAAAABDMzNzPyB3IIIBlEEAKgLEBiCEAZSSlJMhkAFBACCQATgCyAYgkAFBACoCzAaSIZEBQdAGQQAoAqABQf8PcUECdGogkQE4AgBD9ijcPiB0lCGSASCSAUMAAIA/kiGTASCTAaghEiCTAY4hlAEgEkEBaiETIBJBAEEAIBJIGyEUIBNBAEEAIBNIGyEVQwAAAD8gkQFB0AZBACgCoAFBgSAgFEGBICAUSBtrQf8PcUECdGoqAgAglAEgkgGTlCCSAUMAAIA/IJQBk5JB0AZBACgCoAFBgSAgFUGBICAVSBtrQf8PcUECdGoqAgCUkpOUIZUBIHEglQGTIZYBQ3e+nz4glgGUQzMzMz+SIZcBIJcBQwAAgD9esiCXASCXAUMAAIA/X7KUkiGYASBxQwAAAD8gkQGUIJYBIJgBIJgBQwAAgL9gspQgmAFDAACAv12yk5SSkyGZAUHQxgBBACgCoAFB/w9xQQJ0aiCZAUMAAAAAIJkBvEGAgID8B3EbOAIAIJUBIZoBQQAgmgFDAAAAACCaAbxBgICA/AdxGzgC0IYBQQAqAhhB2IYBQQAoAqABQQFrQf8fcUECdGoqAgCUQQAqAhxBACoC0IYBQQAqAtSGAZKUkiGbAUHYhgFBACgCoAFB/x9xQQJ0aiCbAUMAAAAAIJsBvEGAgID8B3EbOAIAQ83MTD9B2IYBQQAoAqABQQBrQf8fcUECdGoqAgCUIZwBQQAqAviGAkEAKgKEhwKUQQAqAvyGAkEAKgLsyjRBACoC8Mo0kpSSIZ0BQQAgnQFDAAAAACCdAbxBgICA/AdxGzgCgIcCICFBACoCjIcClCAiQQAqAuzKNCAjQQAqAoCHApSSlJIhngFBACCeAUMAAAAAIJ4BvEGAgID8B3EbOAKIhwJBkIcCQQAoAqABQf//AXFBAnRqQ/MEtT5BACoCiIcClEMI5TwekjgCAEOPwnU+QdiGAUEAKAKgAUEAKAKYhwprQf8fcUECdGoqAgCUIZ8BQ5qZGT9BACoCpMcKlEGQhwJBACgCoAFBACgClIcKa0H//wFxQQJ0aioCAJIgnwGTIaABQZyHCkEAKAKgAUH/D3FBAnRqIKABOAIAQZyHCkEAKAKgAUEAKAKcxwprQf8PcUECdGoqAgAhoQFBACChAUMAAAAAIKEBvEGAgID8B3EbOAKgxwpDAAAAAEOamRk/IKABlJMhogEgogFDAAAAACCiAbxBgICA/AdxGyGjAUEAKgL4hgJBACoCvMcKlEEAKgL8hgJBACoCvMo0QQAqAsDKNJKUkiGkAUEAIKQBQwAAAAAgpAG8QYCAgPwHcRs4ArjHCiAqQQAqAsTHCpQgK0EAKgK8yjQgLEEAKgK4xwqUkpSSIaUBQQAgpQFDAAAAACClAbxBgICA/AdxGzgCwMcKQcjHCkEAKAKgAUH//wFxQQJ0akPzBLU+QQAqAsDHCpRDCOU8HpI4AgBDmpkZP0EAKgLYxxOUQcjHCkEAKAKgAUEAKALMxxJrQf//AXFBAnRqKgIAkiCfAZMhpgFB0McSQQAoAqABQf8fcUECdGogpgE4AgBB0McSQQAoAqABQQAoAtDHE2tB/x9xQQJ0aioCACGnAUEAIKcBQwAAAAAgpwG8QYCAgPwHcRs4AtTHE0MAAAAAQ5qZGT8gpgGUkyGoASCoAUMAAAAAIKgBvEGAgID8B3EbIakBQQAqAviGAkEAKgLwxxOUQQAqAvyGAkEAKgLUyjRBACoC2Mo0kpSSIaoBQQAgqgFDAAAAACCqAbxBgICA/AdxGzgC7McTIDNBACoC+McTlCA0QQAqAtTKNCA1QQAqAuzHE5SSlJIhqwFBACCrAUMAAAAAIKsBvEGAgID8B3EbOAL0xxNB/McTQQAoAqABQf//AHFBAnRqQ/MEtT5BACoC9McTlEMI5TwekjgCAEH8xxNBACgCoAFBACgCgMgXa0H//wBxQQJ0aioCACCfAUOamRk/QQAqAozIGJSSkiGsAUGEyBdBACgCoAFB/x9xQQJ0aiCsATgCAEGEyBdBACgCoAFBACgChMgYa0H/H3FBAnRqKgIAIa0BQQAgrQFDAAAAACCtAbxBgICA/AdxGzgCiMgYQwAAAABDmpkZPyCsAZSTIa4BIK4BQwAAAAAgrgG8QYCAgPwHcRshrwFBACoC+IYCQQAqAqTIGJRBACoC/IYCQQAqAqTKNEEAKgKoyjSSlJIhsAFBACCwAUMAAAAAILABvEGAgID8B3EbOAKgyBggPEEAKgKsyBiUID1BACoCpMo0ID5BACoCoMgYlJKUkiGxAUEAILEBQwAAAAAgsQG8QYCAgPwHcRs4AqjIGEGwyBhBACgCoAFB//8BcUECdGpD8wS1PkEAKgKoyBiUQwjlPB6SOAIAQbDIGEEAKAKgAUEAKAK0yCBrQf//AXFBAnRqKgIAIJ8BQ5qZGT9BACoCwMghlJKSIbIBQbjIIEEAKAKgAUH/H3FBAnRqILIBOAIAQbjIIEEAKAKgAUEAKAK4yCFrQf8fcUECdGoqAgAhswFBACCzAUMAAAAAILMBvEGAgID8B3EbOAK8yCFDAAAAAEOamRk/ILIBlJMhtAEgtAFDAAAAACC0AbxBgICA/AdxGyG1AUEAKgL4hgJBACoC2MghlEEAKgL8hgJBACoC4Mo0QQAqAuTKNJKUkiG2AUEAILYBQwAAAAAgtgG8QYCAgPwHcRs4AtTIISBFQQAqAuDIIZQgRkEAKgLgyjQgR0EAKgLUyCGUkpSSIbcBQQAgtwFDAAAAACC3AbxBgICA/AdxGzgC3MghQeTIIUEAKAKgAUH//wBxQQJ0akPzBLU+QQAqAtzIIZRDCOU8HpI4AgBB5MghQQAoAqABQQAoAujIJWtB//8AcUECdGoqAgAgnwFDmpkZP0EAKgL0iCaUkpMhuAFB7MglQQAoAqABQf8PcUECdGoguAE4AgBB7MglQQAoAqABQQAoAuyIJmtB/w9xQQJ0aioCACG5AUEAILkBQwAAAAAguQG8QYCAgPwHcRs4AvCIJkOamRk/ILgBlCG6ASC6AUMAAAAAILoBvEGAgID8B3EbIbsBQQAqAviGAkEAKgKMiSaUQQAqAvyGAkEAKgKwyjRBACoCtMo0kpSSIbwBQQAgvAFDAAAAACC8AbxBgICA/AdxGzgCiIkmIE5BACoClIkmlCBPQQAqArDKNCBQQQAqAoiJJpSSlJIhvQFBACC9AUMAAAAAIL0BvEGAgID8B3EbOAKQiSZBmIkmQQAoAqABQf//AHFBAnRqQ/MEtT5BACoCkIkmlEMI5TwekjgCAEGYiSZBACgCoAFBACgCnIkqa0H//wBxQQJ0aioCACCfAUOamRk/QQAqAqiJK5SSkyG+AUGgiSpBACgCoAFB/x9xQQJ0aiC+ATgCAEGgiSpBACgCoAFBACgCoIkra0H/H3FBAnRqKgIAIb8BQQAgvwFDAAAAACC/AbxBgICA/AdxGzgCpIkrQ5qZGT8gvgGUIcABIMABQwAAAAAgwAG8QYCAgPwHcRshwQFBACoC+IYCQQAqAsCJK5RBACoC/IYCQQAqAsjKNEEAKgLMyjSSlJIhwgFBACDCAUMAAAAAIMIBvEGAgID8B3EbOAK8iSsgV0EAKgLIiSuUIFhBACoCyMo0IFlBACoCvIkrlJKUkiHDAUEAIMMBQwAAAAAgwwG8QYCAgPwHcRs4AsSJK0HMiStBACgCoAFB//8AcUECdGpD8wS1PkEAKgLEiSuUQwjlPB6SOAIAIJ8BQcyJK0EAKAKgAUEAKALQiS9rQf//AHFBAnRqKgIAkkOamRk/QQAqAtyJMJSTIcQBQdSJL0EAKAKgAUH/H3FBAnRqIMQBOAIAQdSJL0EAKAKgAUEAKALUiTBrQf8fcUECdGoqAgAhxQFBACDFAUMAAAAAIMUBvEGAgID8B3EbOALYiTBDmpkZPyDEAZQhxgEgxgFDAAAAACDGAbxBgICA/AdxGyHHAUEAKgL4hgJBACoC9IkwlEEAKgL8hgJBACoCmMo0QQAqApzKNJKUkiHIAUEAIMgBQwAAAAAgyAG8QYCAgPwHcRs4AvCJMCBgQQAqAvyJMJQgYUEAKgKYyjQgYkEAKgLwiTCUkpSSIckBQQAgyQFDAAAAACDJAbxBgICA/AdxGzgC+IkwQYCKMEEAKAKgAUH//wBxQQJ0akPzBLU+QQAqAviJMJRDCOU8HpI4AgBBgIowQQAoAqABQQAoAoSKNGtB//8AcUECdGoqAgAgnwGSQ5qZGT9BACoCkMo0lJMhygFBiIo0QQAoAqABQf8PcUECdGogygE4AgBBiIo0QQAoAqABQQAoAojKNGtB/w9xQQJ0aioCACHLAUEAIMsBQwAAAAAgywG8QYCAgPwHcRs4AozKNEOamRk/IMoBlCHMASDMAUMAAAAAIMwBvEGAgID8B3EbIc0BIM0BIMcBkiHOASC7ASDBASDOAZKSIc8BQQAqAqTHCkEAKgLYxxNBACoCjMgYQQAqAsDIIUEAKgL0iCZBACoCqIkrQQAqAtyJMEEAKgKQyjQgowEgqQEgrwEgtQEgzwGSkpKSkpKSkpKSkpIh0AFBACDQAUMAAAAAINABvEGAgID8B3EbOAKUyjRBACoC9IgmQQAqAqiJK0EAKgLciTBBACoCkMo0IM8BkpKSkkEAKgKkxwpBACoC2McTQQAqAozIGEEAKgLAyCEgowEgqQEgtQEgrwGSkpKSkpKSkyHRAUEAINEBQwAAAAAg0QG8QYCAgPwHcRs4AqDKNCDBASC7AZIh0gFBACoCjMgYQQAqAsDIIUEAKgLciTBBACoCkMo0IK8BILUBIM4BkpKSkpKSQQAqAqTHCkEAKgLYxxNBACoC9IgmQQAqAqiJKyCjASCpASDSAZKSkpKSkpMh0wFBACDTAUMAAAAAINMBvEGAgID8B3EbOAKsyjRBACoCpMcKQQAqAtjHE0EAKgLciTBBACoCkMo0IKMBIKkBIM4BkpKSkpKSQQAqAozIGEEAKgLAyCFBACoC9IgmQQAqAqiJKyCvASC1ASDSAZKSkpKSkpMh1AFBACDUAUMAAAAAINQBvEGAgID8B3EbOAK4yjQgzQEgwQGSIdUBIMcBILsBkiHWAUEAKgLYxxNBACoCwMghQQAqAqiJK0EAKgKQyjQgqQEgtQEg1QGSkpKSkpJBACoCpMcKQQAqAozIGEEAKgL0iCZBACoC3IkwIKMBIK8BINYBkpKSkpKSkyHXAUEAINcBQwAAAAAg1wG8QYCAgPwHcRs4AsTKNEEAKgKkxwpBACoCjMgYQQAqAqiJK0EAKgKQyjQgowEgrwEg1QGSkpKSkpJBACoC2McTQQAqAsDIIUEAKgL0iCZBACoC3IkwIKkBILUBINYBkpKSkpKSkyHYAUEAINgBQwAAAAAg2AG8QYCAgPwHcRs4AtDKNCDNASC7AZIh2QEgxwEgwQGSIdoBQQAqAqTHCkEAKgLAyCFBACoC9IgmQQAqApDKNCCjASC1ASDZAZKSkpKSkkEAKgLYxxNBACoCjMgYQQAqAqiJK0EAKgLciTAgqQEgrwEg2gGSkpKSkpKTIdsBQQAg2wFDAAAAACDbAbxBgICA/AdxGzgC3Mo0QQAqAtjHE0EAKgKMyBhBACoC9IgmQQAqApDKNCCpASCvASDZAZKSkpKSkkEAKgKkxwpBACoCwMghQQAqAqiJK0EAKgLciTAgowEgtQEg2gGSkpKSkpKTIdwBQQAg3AFDAAAAACDcAbxBgICA/AdxGzgC6Mo0IAQgBmognAFDpHC9PkEAKgKgyjRBACoCrMo0kpSSOAIAIAUgBmognAFDpHC9PkEAKgKgyjRBACoCrMo0k5SSOAIAQQBBACgCADYCBEEAQQAqAig4AixBAEEAKgIwOAI0QQBBACoCODgCPEEAQQAqAlQ4AlhBAEEAKgJcOAJgQQBBACoCcDgCdEEAQQAqAng4AnxBAEEAKgKAATgChAFBAEEAKgKIATgCjAFBAEEAKAKQATYClAFBAEEAKgKYATgCnAFBAEEAKAKgAUEBajYCoAFBAEEAKgKoBTgCrAVBAEEAKgK0BTgCuAVBAEEAKgLABTgCxAVBAEEAKgLQBTgC1AVBAEEAKgLYBTgC3AVBAEEAKgLgBTgC5AVBAEEAKgLoBTgC7AVBAEEAKgL0BTgC+AVBAEEAKgKABjgChAZBAEEAKgKMBjgCkAZBAEEAKgKYBjgCnAZBAEEAKgKgBjgCpAZBAEEAKgKoBjgCrAZBAEEAKgKwBjgCtAZBAEEAKgK4BjgCvAZBAEEAKgLABjgCxAZBAEEAKgLIBjgCzAZBAEEAKgLQhgE4AtSGAUEAQQAqAoCHAjgChIcCQQBBACoCiIcCOAKMhwJBAEEAKgKgxwo4AqTHCkEAQQAqArjHCjgCvMcKQQBBACoCwMcKOALExwpBAEEAKgLUxxM4AtjHE0EAQQAqAuzHEzgC8McTQQBBACoC9McTOAL4xxNBAEEAKgKIyBg4AozIGEEAQQAqAqDIGDgCpMgYQQBBACoCqMgYOAKsyBhBAEEAKgK8yCE4AsDIIUEAQQAqAtTIITgC2MghQQBBACoC3MghOALgyCFBAEEAKgLwiCY4AvSIJkEAQQAqAoiJJjgCjIkmQQBBACoCkIkmOAKUiSZBAEEAKgKkiSs4AqiJK0EAQQAqAryJKzgCwIkrQQBBACoCxIkrOALIiStBAEEAKgLYiTA4AtyJMEEAQQAqAvCJMDgC9IkwQQBBACoC+IkwOAL8iTBBAEEAKgKMyjQ4ApDKNEEAQQAqApjKNDgCnMo0QQBBACoClMo0OAKYyjRBAEEAKgKkyjQ4AqjKNEEAQQAqAqDKNDgCpMo0QQBBACoCsMo0OAK0yjRBAEEAKgKsyjQ4ArDKNEEAQQAqArzKNDgCwMo0QQBBACoCuMo0OAK8yjRBAEEAKgLIyjQ4AszKNEEAQQAqAsTKNDgCyMo0QQBBACoC1Mo0OALYyjRBAEEAKgLQyjQ4AtTKNEEAQQAqAuDKNDgC5Mo0QQBBACoC3Mo0OALgyjRBAEEAKgLsyjQ4AvDKNEEAQQAqAujKNDgC7Mo0IAZBBGohBiAGQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIIDwuOgICAAAAgACABEAYgACABEA8L0qCAgAABUn9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACFAQQAhQUEAIUJBACFDQQAhREEAIUVBACFGQQAhR0EAIUhBACFJQQAhSkEAIUtBACFMQQAhTUEAIU5BACFPQQAhUEEAIVFBACFSQQAhAQNAAkBBACABQQJ0akEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkBBKCACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBMCADQQJ0akMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQAhBANAAkBBOCAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB1AAgBUECdGpDAAAAADgCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAQdwAIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHwACAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBB+AAgCEECdGpDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQYABIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGIASAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBkAEgC0ECdGpBADYCACALQQFqIQsgC0ECSARADAIMAQsLC0EAIQwDQAJAQZgBIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBAEEANgKgAUEAIQ0DQAJAQaQBIA1BAnRqQQA2AgAgDUEBaiENIA1BgAFIBEAMAgwBCwsLQQAhDgNAAkBBqAUgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQbQFIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEHABSAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBB0AUgEUECdGpDAAAAADgCACARQQFqIREgEUECSARADAIMAQsLC0EAIRIDQAJAQdgFIBJBAnRqQwAAAAA4AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEHgBSATQQJ0akMAAAAAOAIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQAhFANAAkBB6AUgFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQfQFIBVBAnRqQwAAAAA4AgAgFUEBaiEVIBVBAkgEQAwCDAELCwtBACEWA0ACQEGABiAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBjAYgF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQZgGIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBAkgEQAwCDAELCwtBACEZA0ACQEGgBiAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBqAYgGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQbAGIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQEG4BiAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQQJIBEAMAgwBCwsLQQAhHQNAAkBBwAYgHUECdGpDAAAAADgCACAdQQFqIR0gHUECSARADAIMAQsLC0EAIR4DQAJAQcgGIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BAkgEQAwCDAELCwtBACEfA0ACQEHQBiAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQYAQSARADAIMAQsLC0EAISADQAJAQdDGACAgQQJ0akMAAAAAOAIAICBBAWohICAgQYAQSARADAIMAQsLC0EAISEDQAJAQdCGASAhQQJ0akMAAAAAOAIAICFBAWohISAhQQJIBEAMAgwBCwsLQQAhIgNAAkBB2IYBICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBgCBIBEAMAgwBCwsLQQAhIwNAAkBBgIcCICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQEGIhwIgJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQZCHAiAlQQJ0akMAAAAAOAIAICVBAWohJSAlQYCAAkgEQAwCDAELCwtBACEmA0ACQEGchwogJkECdGpDAAAAADgCACAmQQFqISYgJkGAEEgEQAwCDAELCwtBACEnA0ACQEGgxwogJ0ECdGpDAAAAADgCACAnQQFqIScgJ0ECSARADAIMAQsLC0EAISgDQAJAQbjHCiAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkBBwMcKIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEHIxwogKkECdGpDAAAAADgCACAqQQFqISogKkGAgAJIBEAMAgwBCwsLQQAhKwNAAkBB0McSICtBAnRqQwAAAAA4AgAgK0EBaiErICtBgCBIBEAMAgwBCwsLQQAhLANAAkBB1McTICxBAnRqQwAAAAA4AgAgLEEBaiEsICxBAkgEQAwCDAELCwtBACEtA0ACQEHsxxMgLUECdGpDAAAAADgCACAtQQFqIS0gLUECSARADAIMAQsLC0EAIS4DQAJAQfTHEyAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQJIBEAMAgwBCwsLQQAhLwNAAkBB/McTIC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BgIABSARADAIMAQsLC0EAITADQAJAQYTIFyAwQQJ0akMAAAAAOAIAIDBBAWohMCAwQYAgSARADAIMAQsLC0EAITEDQAJAQYjIGCAxQQJ0akMAAAAAOAIAIDFBAWohMSAxQQJIBEAMAgwBCwsLQQAhMgNAAkBBoMgYIDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBAkgEQAwCDAELCwtBACEzA0ACQEGoyBggM0ECdGpDAAAAADgCACAzQQFqITMgM0ECSARADAIMAQsLC0EAITQDQAJAQbDIGCA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QYCAAkgEQAwCDAELCwtBACE1A0ACQEG4yCAgNUECdGpDAAAAADgCACA1QQFqITUgNUGAIEgEQAwCDAELCwtBACE2A0ACQEG8yCEgNkECdGpDAAAAADgCACA2QQFqITYgNkECSARADAIMAQsLC0EAITcDQAJAQdTIISA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QQJIBEAMAgwBCwsLQQAhOANAAkBB3MghIDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBAkgEQAwCDAELCwtBACE5A0ACQEHkyCEgOUECdGpDAAAAADgCACA5QQFqITkgOUGAgAFIBEAMAgwBCwsLQQAhOgNAAkBB7MglIDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBgBBIBEAMAgwBCwsLQQAhOwNAAkBB8IgmIDtBAnRqQwAAAAA4AgAgO0EBaiE7IDtBAkgEQAwCDAELCwtBACE8A0ACQEGIiSYgPEECdGpDAAAAADgCACA8QQFqITwgPEECSARADAIMAQsLC0EAIT0DQAJAQZCJJiA9QQJ0akMAAAAAOAIAID1BAWohPSA9QQJIBEAMAgwBCwsLQQAhPgNAAkBBmIkmID5BAnRqQwAAAAA4AgAgPkEBaiE+ID5BgIABSARADAIMAQsLC0EAIT8DQAJAQaCJKiA/QQJ0akMAAAAAOAIAID9BAWohPyA/QYAgSARADAIMAQsLC0EAIUADQAJAQaSJKyBAQQJ0akMAAAAAOAIAIEBBAWohQCBAQQJIBEAMAgwBCwsLQQAhQQNAAkBBvIkrIEFBAnRqQwAAAAA4AgAgQUEBaiFBIEFBAkgEQAwCDAELCwtBACFCA0ACQEHEiSsgQkECdGpDAAAAADgCACBCQQFqIUIgQkECSARADAIMAQsLC0EAIUMDQAJAQcyJKyBDQQJ0akMAAAAAOAIAIENBAWohQyBDQYCAAUgEQAwCDAELCwtBACFEA0ACQEHUiS8gREECdGpDAAAAADgCACBEQQFqIUQgREGAIEgEQAwCDAELCwtBACFFA0ACQEHYiTAgRUECdGpDAAAAADgCACBFQQFqIUUgRUECSARADAIMAQsLC0EAIUYDQAJAQfCJMCBGQQJ0akMAAAAAOAIAIEZBAWohRiBGQQJIBEAMAgwBCwsLQQAhRwNAAkBB+IkwIEdBAnRqQwAAAAA4AgAgR0EBaiFHIEdBAkgEQAwCDAELCwtBACFIA0ACQEGAijAgSEECdGpDAAAAADgCACBIQQFqIUggSEGAgAFIBEAMAgwBCwsLQQAhSQNAAkBBiIo0IElBAnRqQwAAAAA4AgAgSUEBaiFJIElBgBBIBEAMAgwBCwsLQQAhSgNAAkBBjMo0IEpBAnRqQwAAAAA4AgAgSkEBaiFKIEpBAkgEQAwCDAELCwtBACFLA0ACQEGUyjQgS0ECdGpDAAAAADgCACBLQQFqIUsgS0EDSARADAIMAQsLC0EAIUwDQAJAQaDKNCBMQQJ0akMAAAAAOAIAIExBAWohTCBMQQNIBEAMAgwBCwsLQQAhTQNAAkBBrMo0IE1BAnRqQwAAAAA4AgAgTUEBaiFNIE1BA0gEQAwCDAELCwtBACFOA0ACQEG4yjQgTkECdGpDAAAAADgCACBOQQFqIU4gTkEDSARADAIMAQsLC0EAIU8DQAJAQcTKNCBPQQJ0akMAAAAAOAIAIE9BAWohTyBPQQNIBEAMAgwBCwsLQQAhUANAAkBB0Mo0IFBBAnRqQwAAAAA4AgAgUEEBaiFQIFBBA0gEQAwCDAELCwtBACFRA0ACQEHcyjQgUUECdGpDAAAAADgCACBRQQFqIVEgUUEDSARADAIMAQsLC0EAIVIDQAJAQejKNCBSQQJ0akMAAAAAOAIAIFJBAWohUiBSQQNIBEAMAgwBCwsLC4eQgIAAAEEAIAE2AghBAEMAgDtIQwAAgD9BACgCCLKXljgCDEEAQwAAgD9DfFlERUEAKgIMlRAFlTgCEEEAQQAqAhBDAACAP5I4AhRBAEMAAAAAQwAAgD9BACoCEJNBACoCFJWTOAIYQQBDAACAP0EAKgIUlTgCHEEAQ9sPyUBBACoCDJU4AiBBAEMAAIA/Q9sPSUBBACoCDJUQBZU4AkBBAEEAKgJAQwAAgD+SOAJEQQBDAAAAAEMAAIA/QQAqAkCTQQAqAkSVkzgCSEEAQwrXIzxBACoCRJU4AkxBAEMAAIA/QQAqAgyVOAJkQQBDAACAP0EAKgJElTgCaEEAQ+f7qT1BACoCDJQ4AqQFQQBDEHr2PkEAKgIMlDgCsAVBAEMR8gRAQQAqAgyVOAK8BUEAQ2bFQEFBACoCDJU4AsgFQQBDzczMPUEAKgIMlDgC8AVBAEOPwvU9QQAqAgyUOAL8BUEAQ1VVBUFBACoCDJU4AogGQQBDAAAgQUEAKgIMlTgClAZBAEMdQxNHQQAqAgyVEAA4AtiGAkEAQ1JFYT5BACoCDJRDAAAAP5KOOALchgJBAEMAAAAAQ1UM3UBBACoC3IYClJNBACoCDJU4AuCGAkEAQwAAAD9BACoC4IYClDgC5IYCQQBDq6qqPkEAKgLghgKUOALshgJBAEMAAIA/Q2MUHURBACoCDJUQBZU4AvCGAkEAQQAqAvCGAkMAAIA/kjgC9IYCQQBDAAAAAEMAAIA/QQAqAvCGApNBACoC9IYClZM4AviGAkEAQwAAgD9BACoC9IYClTgC/IYCQQBD1qecPEEAKgIMlEMAAAA/ko44ApCHCkEAQwAAgEZDAAAAAEEAKgLchgJBACoCkIcKk5eWqDYClIcKQQBDAAAARkMAAAAAQwrXozxBACoCDJSXlqg2ApiHCkEAQwAAgERDAAAAAEEAKgKQhwpDAACAv5KXlqg2ApzHCkEAQziHgz5BACoCDJRDAAAAP5KOOAKoxwpBAEMAAAAAQ1UM3UBBACoCqMcKlJNBACoCDJU4AqzHCkEAQwAAAD9BACoCrMcKlDgCsMcKQQBDq6qqPkEAKgKsxwqUOAK0xwpBAEN16d88QQAqAgyUQwAAAD+SjjgCyMcSQQBDAACARkMAAAAAQQAqAqjHCkEAKgLIxxKTl5aoNgLMxxJBAEMAAABFQwAAAABBACoCyMcSQwAAgL+Sl5aoNgLQxxNBAEMU60Q+QQAqAgyUQwAAAD+SjjgC3McTQQBDAAAAAENVDN1AQQAqAtzHE5STQQAqAgyVOALgxxNBAEMAAAA/QQAqAuDHE5Q4AuTHE0EAQ6uqqj5BACoC4McTlDgC6McTQQBDrvPvPEEAKgIMlEMAAAA/ko44AvzHF0EAQwAAAEZDAAAAAEEAKgLcxxNBACoC/McXk5eWqDYCgMgXQQBDAAAARUMAAAAAQQAqAvzHF0MAAIC/kpeWqDYChMgYQQBDN3BXPkEAKgIMlEMAAAA/ko44ApDIGEEAQwAAAABDVQzdQEEAKgKQyBiUk0EAKgIMlTgClMgYQQBDAAAAP0EAKgKUyBiUOAKYyBhBAEOrqqo+QQAqApTIGJQ4ApzIGEEAQ40OyDxBACoCDJRDAAAAP5KOOAKwyCBBAEMAAIBGQwAAAABBACoCkMgYQQAqArDIIJOXlqg2ArTIIEEAQwAAAEVDAAAAAEEAKgKwyCBDAACAv5KXlqg2ArjIIUEAQwAAAD5BACoCDJRDAAAAP5KOOALEyCFBAEMAAAAAQ1UM3UBBACoCxMghlJNBACoCDJU4AsjIIUEAQwAAAD9BACoCyMghlDgCzMghQQBDq6qqPkEAKgLIyCGUOALQyCFBAEPxflw8QQAqAgyUQwAAAD+SjjgC5MglQQBDAAAARkMAAAAAQQAqAsTIIUEAKgLkyCWTl5aoNgLoyCVBAEMAAIBEQwAAAABBACoC5MglQwAAgL+Sl5aoNgLsiCZBAEO05wI+QQAqAgyUQwAAAD+SjjgC+IgmQQBDAAAAAENVDN1AQQAqAviIJpSTQQAqAgyVOAL8iCZBAEMAAAA/QQAqAvyIJpQ4AoCJJkEAQ6uqqj5BACoC/IgmlDgChIkmQQBDMnMBPUEAKgIMlEMAAAA/ko44ApiJKkEAQwAAAEZDAAAAAEEAKgL4iCZBACoCmIkqk5eWqDYCnIkqQQBDAAAARUMAAAAAQQAqApiJKkMAAIC/kpeWqDYCoIkrQQBD9+cyPkEAKgIMlEMAAAA/ko44AqyJK0EAQwAAAABDVQzdQEEAKgKsiSuUk0EAKgIMlTgCsIkrQQBDAAAAP0EAKgKwiSuUOAK0iStBAEOrqqo+QQAqArCJK5Q4AriJK0EAQyuhuzxBACoCDJRDAAAAP5KOOALMiS9BAEMAAABGQwAAAABBACoCrIkrQQAqAsyJL5OXlqg2AtCJL0EAQwAAAEVDAAAAAEEAKgLMiS9DAACAv5KXlqg2AtSJMEEAQ9nNHD5BACoCDJRDAAAAP5KOOALgiTBBAEMAAAAAQ1UM3UBBACoC4IkwlJNBACoCDJU4AuSJMEEAQwAAAD9BACoC5IkwlDgC6IkwQQBDq6qqPkEAKgLkiTCUOALsiTBBAEOorKY8QQAqAgyUQwAAAD+SjjgCgIo0QQBDAAAARkMAAAAAQQAqAuCJMEEAKgKAijSTl5aoNgKEijRBAEMAAIBEQwAAAABBACoCgIo0QwAAgL+Sl5aoNgKIyjQLkICAgAAAIAAgARAOIAAQECAAEA0Lt4CAgAAAQQBDAADAQDgCJEEAQwAAsEI4AlBBAEMAAIBAOAJsQQBDAADcQjgCzAVBAEPsUTg/OALohgILjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLjpWAgAABAEEAC4cVeyJuYW1lIjoiUHVsc2F4b3Bob25lIiwidmVyc2lvbiI6IjIuNS43Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiI4NjE1NTYiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiUHVsc2F4b3Bob25lIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlB1bHNheG8iLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9GcmVxdWVuY3kiLCJpbmRleCI6IjcxNiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMSAtMTIgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTEwIiwibWluIjoiODAiLCJtYXgiOiI4ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUHVsc2F4by9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjEwOCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC4wMDEiLCJtYXgiOiI3Iiwic3RlcCI6IjAuMDAwMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByb2JhYmlsaXR5IChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUHVsc2F4by9QdWxzZS9Qcm9iYWJpbGl0eV8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjgwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiODgiLCJtaW4iOiI3NSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUHVsc2F4by9WaWJyYXRvX0ZyZXF1ZW5jeSIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNiIsIm1pbiI6IjEiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUmV2ZXJiZXJhdGlvbiBSb29tIFNpemUgKEluc3RyUmV2ZXJiKSIsImFkZHJlc3MiOiIvUHVsc2F4by9SZXZlcmIvUmV2ZXJiZXJhdGlvbl9Sb29tX1NpemVfKEluc3RyUmV2ZXJiKSIsImluZGV4IjoiMzM2NDAiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNzIiLCJtaW4iOiIwLjEiLCJtYXgiOiIxLjciLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

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
faust.Pulsaxophone_instance = null;

// Monophonic Faust DSP
class PulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            PulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            PulsaxophoneProcessor.parse_items(group.items, obj, callback);
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
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
            PulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
        PulsaxophoneProcessor.parse_ui(JSON.parse(getJSONPulsaxophone()).ui, params, PulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONPulsaxophone());
        
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
        
        this.factory = faust.Pulsaxophone_instance.exports;
        this.HEAP = faust.Pulsaxophone_instance.exports.memory.buffer;
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
            PulsaxophoneProcessor.parse_ui(this.json_object.ui, this, PulsaxophoneProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodePulsaxophone()), faust.importObject)
            .then(dsp_module => {
                  faust.Pulsaxophone_instance = dsp_module.instance;
                  registerProcessor('Pulsaxophone', PulsaxophoneProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Pulsaxophone cannot be loaded or compiled"); });
