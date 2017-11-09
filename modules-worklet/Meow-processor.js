
/*
Code generated with Faust version 2.4.12
Compilation options: -scal -ftz 2
*/

function getJSONMeow() {
	return "{\"name\":\"Meow\",\"version\":\"2.4.12\",\"options\":\"-scal -ftz 2\",\"size\":\"98844\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"WaveGuide Brass instrument from STK\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Meow\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"MEOW\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF\",\"address\":\"/MEOW/ON/OFF\",\"index\":\"172\",\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Frequencies\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency 1\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_1\",\"index\":\"160\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"370\",\"min\":\"280\",\"max\":\"380\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 2\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_2\",\"index\":\"33116\",\"meta\":[{\"acc\":\"0 0 -10 0 10\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"380\",\"max\":\"550\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Frequency 3\",\"address\":\"/MEOW/Instrument/Frequencies/Frequency_3\",\"index\":\"65972\",\"meta\":[{\"acc\":\"2 1 -10 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"587.32\",\"min\":\"550\",\"max\":\"700\",\"step\":\"0.01\"}]},{\"type\":\"vgroup\",\"label\":\"Gain\",\"items\":[{\"type\":\"hslider\",\"label\":\"Volume 1\",\"address\":\"/MEOW/Instrument/Gain/Volume_1\",\"index\":\"152\",\"meta\":[{\"acc\":\"1 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 2\",\"address\":\"/MEOW/Instrument/Gain/Volume_2\",\"index\":\"33112\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Volume 3\",\"address\":\"/MEOW/Instrument/Gain/Volume_3\",\"index\":\"65968\",\"meta\":[{\"acc\":\"2 0 -12 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"Gain (value between 0 and 1)\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"0.5\",\"step\":\"0.01\"}]}]},{\"type\":\"hslider\",\"label\":\"Wah Wah\",\"address\":\"/MEOW/Wah_Wah\",\"index\":\"100\",\"meta\":[{\"acc\":\"0 0 -15 10 0\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeMeow() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AGABfQF9YAF9AX0CyYCAgAAEC2dsb2JhbC5NYXRoA2NvcwACC2dsb2JhbC5NYXRoA3BvdwAOC2dsb2JhbC5NYXRoA3NpbgAQC2dsb2JhbC5NYXRoA3RhbgARA4+AgIAADgABAwQFBgcICQoLDA0PBYeAgIAAAQCEgICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAAq+uICAAA6CgICAAAALkaGAgAACDn8/fUEAIQRDAAAAACESQQAhBUMAAAAAIRNDAAAAACEUQQAhBkEAIQdBACEIQQAhCUMAAAAAIRVBACEKQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUEAIQtBACEMQwAAAAAhGkMAAAAAIRtDAAAAACEcQwAAAAAhHUEAIQ1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQQAhDkMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVBACEPQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkEAIRBDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QQAhEUMAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQIANBAGooAgAhBEEAKgJkIRIgEkMAAAAAXyEFQ5qZWT9BACoCmAGUIRNDbxKDOkEAKgKgAZQhFEEAKgKsAaghBiAGQQBKIQcgB0EASiEIIAZBAEZBAEohCUEAKgLIASAGQX9qspQhFSAGQQBMIQpDmplZP0EAKgLYggKUIRZDbxKDOkEAKgLcggKUIRdDmplZP0EAKgKwgwSUIRhDbxKDOkEAKgK0gwSUIRlBACELA0ACQEEAQQE2AgBBAEEAKAIEQQAoAlhqQQAoAlBvNgJUQQAoAlRBAEYhDEEAIAw2AlxBACASOAJoQwAAAABBACoCdCASQQAqAmyTi5JBACgCYBshGkEAIBpDAAAAACAavEGAgID8B3EbOAJwQQAgDEEAKAJ8akEPbzYCeEEIQQAoAnhBDyAMQQAqAnBDAAAAAF4gBXJxG0ECdGogEjgCAEN3vn8/QQAqAoQBlEMXt9E4QwAAgEBBCEEAKAJ4QQJ0aioCABABlJIhG0EAIBtDAAAAACAbvEGAgID8B3EbOAKAASAUQ3e+fz9BACoCqAGUkiEcQQAgHEMAAAAAIBy8QYCAgPwHcRs4AqQBQ/p+Cj9BACoCnAFBACoCpAGVQwAAQECSlCEdIB2oIQ0gHY4hHkHEAkEAKALAAkGBIEEAIA0QDxAQQQFqa0H/P3FBAnRqKgIAIB5DAACAPyAdk5KUIB0gHpNBxAJBACgCwAJBgSBBACANQQFqEA8QEEEBamtB/z9xQQJ0aioCAJSSIR9DAAAAAEEAKgKcAUEAKgK0AUMAAIA/kpYgCBshIEEAICBDAAAAACAgvEGAgID8B3EbOAKwAUMAAAAAQQAqArgBQQAqAsABQwAAgD+SliAJGyEhQQAgIUMAAAAAICG8QYCAgPwHcRs4ArwBQQAqArwBQQAqAsQBXSEOIAeyQwAAAABBACoCzAFBACoCvAGUQwAAgD8gDhtBACoCvAFDAAAAAF0bIBVBACoCvAFBACoCxAGTlEMAAIA/kiAGskEAKgK8AUEAKgK4AV0bIA4blEEAKgLUASAHGyEiQQAgIkMAAAAAICK8QYCAgPwHcRs4AtABQQAqAtABQQAqAtABQQAqAtgBQQAqArABQwAAAABBACoC0AGTlJSSQwAAAABBACoCsAFBACoCnAFdG0EAKgKwAUMAAAAAXRshI0EAKgLgAUEAKgL4AZRBACoC5AFBACoC7AGUkiEkQQAgJEMAAAAAICS8QYCAgPwHcRs4AugBQQAqAuQBQQAqAvgBlEEAKgLwAUEAKgLsAZSSQQFBACgCBGuykiElQQAgJUMAAAAAICW8QYCAgPwHcRs4AvQBQQAgB0EAKAKAAkEAKgKcAkMAAIA/YHJxNgL8AUEAIAdBACgCiAJBAWpsNgKEAiAKQQAqApwCQwAAAABecSEPQQAqAowCQQAoAoACQQBGIAdxQQAqApwCQwAAgD9dcUEAKAKIArJBACoCkAJecUEBQQAoAogCskEAKgKQAl1rbLKUQQAqApwCQwAAgD9BACoClAIgD7KUk5SSIA9BAEZBACoCnAJDvTeGNWByspQhJkEAICZDAAAAACAmvEGAgID8B3EbOAKYAkPNzEw9QQAqAugBQQAqApgClJQhJ0OkcL0+ICOUICeSIShDj8L1PEOamZk+ICiUIBMgH5STlEEAKgKoAkMAAAAAQ2Q7/z9BACoCoAJBACoCpAGUEACUk5RDYHd+P0EAKgKsApSSkyEpQQAgKUMAAAAAICm8QYCAgPwHcRs4AqQCQQAqAqQCQwAAAEAQASEqICpDAACAP16yICogKkMAAIA/X7KUkiErIBMgH0MAAIA/ICuTlJQhLEOamZk+ICggK5SUIS1BACAtICySOAKwAiAsQ1K4fj9BACoCvAKUIC2SkkEAKgK0ApMhLkEAIC5DAAAAACAuvEGAgID8B3EbOAK4AkEAKgK4AiEvQcQCQQAoAsACQf8/cUECdGogL0MAAAAAIC+8QYCAgPwHcRs4AgBBACoCkAFBACoCyIIClEEAKgKUAUHEAkEAKALAAkEAa0H/P3FBAnRqKgIAQcQCQQAoAsACQQFrQf8/cUECdGoqAgCSlJIhMEEAIDBDAAAAACAwvEGAgID8B3EbOALEggIgF0N3vn8/QQAqAuSCApSSITFBACAxQwAAAAAgMbxBgICA/AdxGzgC4IICQ/p+Cj9BACoCnAFBACoC4IIClUMAAEBAkpQhMiAyqCEQIDKOITNBhIMCQQAoAsACQYEgQQAgEBAPEBBBAWprQf8/cUECdGoqAgAgM0MAAIA/IDKTkpQgMiAzk0GEgwJBACgCwAJBgSBBACAQQQFqEA8QEEEBamtB/z9xQQJ0aioCAJSSITQgJ0N7FC4/ICOUkiE1Q4/C9TxDmpmZPiA1lCAWIDSUk5RBACoC7IICQwAAAABDZDv/P0EAKgKgAkEAKgLgggKUEACUk5RDYHd+P0EAKgLwggKUkpMhNkEAIDZDAAAAACA2vEGAgID8B3EbOALoggJBACoC6IICQwAAAEAQASE3IDdDAACAP16yIDcgN0MAAIA/X7KUkiE4IBYgNEMAAIA/IDiTlJQhOUOamZk+IDUgOJSUITpBACA6IDmSOAL0ggIgOUNSuH4/QQAqAoCDApQgOpKSQQAqAviCApMhO0EAIDtDAAAAACA7vEGAgID8B3EbOAL8ggJBACoC/IICITxBhIMCQQAoAsACQf8/cUECdGogPEMAAAAAIDy8QYCAgPwHcRs4AgBBhIMCQQAoAsACQQBrQf8/cUECdGoqAgBBACoC1IICQQAqAoSDBEEAKgKQgwSUQQAqAoiDBEEAKgKUgwSUkpSTIT1BACA9QwAAAAAgPbxBgICA/AdxGzgCjIMEIBlDd75/P0EAKgK8gwSUkiE+QQAgPkMAAAAAID68QYCAgPwHcRs4AriDBEP6fgo/QQAqApwBQQAqAriDBJVDAABAQJKUIT8gP6ghESA/jiFAQdyDBEEAKALAAkGBIEEAIBEQDxAQQQFqa0H/P3FBAnRqKgIAIEBDAACAPyA/k5KUID8gQJNB3IMEQQAoAsACQYEgQQAgEUEBahAPEBBBAWprQf8/cUECdGoqAgCUkiFBICMgJ5IhQkOPwvU8Q5qZmT4gQpQgGCBBlJOUQQAqAsSDBEMAAAAAQ2Q7/z9BACoCoAJBACoCuIMElBAAlJOUQ2B3fj9BACoCyIMElJKTIUNBACBDQwAAAAAgQ7xBgICA/AdxGzgCwIMEQQAqAsCDBEMAAABAEAEhRCBEQwAAgD9esiBEIERDAACAP1+ylJIhRSAYIEFDAACAPyBFk5SUIUZDmpmZPiBCIEWUlCFHQQAgRyBGkjgCzIMEIEZDUrh+P0EAKgLYgwSUIEeSkkEAKgLQgwSTIUhBACBIQwAAAAAgSLxBgICA/AdxGzgC1IMEQQAqAtSDBCFJQdyDBEEAKALAAkH/P3FBAnRqIElDAAAAACBJvEGAgID8B3EbOAIAQQAqAqiDBEEAKgLggwaUQQAqAqyDBEHcgwRBACgCwAJBAGtB/z9xQQJ0aioCAEHcgwRBACgCwAJBAWtB/z9xQQJ0aioCAJKUkiFKQQAgSkMAAAAAIEq8QYCAgPwHcRs4AtyDBkEAKgLcgwZBACoCoIMEQQAqAuSDBkEAKgLwgwaUQQAqAuiDBkEAKgL0gwaUkpSTIUtBACBLQwAAAAAgS7xBgICA/AdxGzgC7IMGQwAAAEBDMzMTQEEIQQAoAnhBAnRqKgIAlBABIUxDAACAP0EAKgL4gwYgTEMAAABAQwAAAEBDAACAP0EIQQAoAnhBAnRqKgIAk5RDAACAP5IQAZWUkyFNQ3e+fz9BACoChIQGlENvEoM6QwAAAABDAAAAQCBNQQAqAvyDBiBMlBAAlJSTlJIhTkEAIE5DAAAAACBOvEGAgID8B3EbOAKAhAZDd75/P0EAKgKMhAaUQ28SgzogTUMAAABAEAGUkiFPQQAgT0MAAAAAIE+8QYCAgPwHcRs4AoiEBkEAKgKAAUEAKgLEggJBACoC1IICQQAqApSDBEEAKgKMgwRDAAAAQEEAKgKQgwSUkpKUkkEAKgKggwRBACoC9IMGQQAqAuyDBkMAAABAQQAqAvCDBpSSkpSSlEEAKgKAhAZBACoClIQGlEEAKgKIhAZBACoCmIQGlJKTIVBBACBQQwAAAAAgULxBgICA/AdxGzgCkIQGIAQgC2pBACoCkIQGQQAqApSEBpM4AgBBAEEAKAIANgIEQQBBACgCVDYCWEEAQQAoAlw2AmBBAEEAKgJoOAJsQQBBACoCcDgCdEEAQQAoAng2AnxBAEEAKgKAATgChAFBAEEAKgKkATgCqAFBAEEAKgKwATgCtAFBAEEAKgK8ATgCwAFBAEEAKgLQATgC1AFBAEEAKgLoATgC7AFBAEEAKgL0ATgC+AFBAEEAKAL8ATYCgAJBAEEAKAKEAjYCiAJBAEEAKgKYAjgCnAJBAEEAKgKoAjgCrAJBAEEAKgKkAjgCqAJBAEEAKgKwAjgCtAJBAEEAKgK4AjgCvAJBAEEAKALAAkEBajYCwAJBAEEAKgLEggI4AsiCAkEAQQAqAuCCAjgC5IICQQBBACoC7IICOALwggJBAEEAKgLoggI4AuyCAkEAQQAqAvSCAjgC+IICQQBBACoC/IICOAKAgwJBAEEAKgKQgwQ4ApSDBEEAQQAqAoyDBDgCkIMEQQBBACoCuIMEOAK8gwRBAEEAKgLEgwQ4AsiDBEEAQQAqAsCDBDgCxIMEQQBBACoCzIMEOALQgwRBAEEAKgLUgwQ4AtiDBEEAQQAqAtyDBjgC4IMGQQBBACoC8IMGOAL0gwZBAEEAKgLsgwY4AvCDBkEAQQAqAoCEBjgChIQGQQBBACoCiIQGOAKMhAZBAEEAKgKUhAY4ApiEBkEAQQAqApCEBjgClIQGIAtBBGohCyALQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAJIDwuOgICAAAAgACABEAQgACABEA0Lyo6AgAABJX9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhAQNAAkBBACABQQJ0akEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkBB1AAgAkECdGpBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQdwAIANBAnRqQQA2AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHoACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB8AAgBUECdGpDAAAAADgCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAQfgAIAZBAnRqQQA2AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEGAASAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBBpAEgCEECdGpDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQbABIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEG8ASAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBB0AEgC0ECdGpDAAAAADgCACALQQFqIQsgC0ECSARADAIMAQsLC0EAIQwDQAJAQegBIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQEH0ASANQQJ0akMAAAAAOAIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBB/AEgDkECdGpBADYCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQYQCIA9BAnRqQQA2AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEGYAiAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBBpAIgEUECdGpDAAAAADgCACARQQFqIREgEUEDSARADAIMAQsLC0EAIRIDQAJAQbACIBJBAnRqQwAAAAA4AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEG4AiATQQJ0akMAAAAAOAIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQBBADYCwAJBACEUA0ACQEHEAiAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQYDAAEgEQAwCDAELCwtBACEVA0ACQEHEggIgFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQeCCAiAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBB6IICIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBA0gEQAwCDAELCwtBACEYA0ACQEH0ggIgGEECdGpDAAAAADgCACAYQQFqIRggGEECSARADAIMAQsLC0EAIRkDQAJAQfyCAiAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBhIMCIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBgMAASARADAIMAQsLC0EAIRsDQAJAQYyDBCAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQNIBEAMAgwBCwsLQQAhHANAAkBBuIMEIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBAkgEQAwCDAELCwtBACEdA0ACQEHAgwQgHUECdGpDAAAAADgCACAdQQFqIR0gHUEDSARADAIMAQsLC0EAIR4DQAJAQcyDBCAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBB1IMEIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQEHcgwQgIEECdGpDAAAAADgCACAgQQFqISAgIEGAwABIBEAMAgwBCwsLQQAhIQNAAkBB3IMGICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEHsgwYgIkECdGpDAAAAADgCACAiQQFqISIgIkEDSARADAIMAQsLC0EAISMDQAJAQYCEBiAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkBBiIQGICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEGQhAYgJUECdGpDAAAAADgCACAlQQFqISUgJUEDSARADAIMAQsLCwvchoCAAAEBf0EAIQJBACABNgJIQQAhAgNAAkBBCCACQQJ0akMAAAAAOAIAIAJBAWohAiACQRBIBEAMAgwBCwsLQQBDAIA7SEMAAIA/QQAoAkiyl5Y4AkxBAEOrqio+QQAqAkyUqDYCUEEAQwAAgD9DHUOTRUEAKgJMlRADlTgCiAFBAEEAKgKIAUMAAIA/kjgCjAFBAEMAAAAAQwAAgD9BACoCiAGTQQAqAowBlZM4ApABQQBDAACAP0EAKgKMAZU4ApQBQQBDAAAAQEEAKgJMlDgCnAFBAENYOTQ8QQAqAkyUOAK4AUEAQwrXIzxBACoCTJQ4AsQBQQBDAAB6REEAKgJMlTgCyAFBAEMAAMhCQQAqAkyVOALMAUEAQwAAAD9BACoCTJU4AtgBQQBD5MsWQkEAKgJMlTgC3AFBAEEAKgLcARACOALgAUEAQQAqAtwBEAA4AuQBQQBDAAAAAEEAKgLgAZM4AvABQQBDAAAAQEEAKgJMlTgCjAJBAEPNzEw9QQAqAkyUOAKQAkEAQwAAgD9DAACAP0MAUMNHQwAAIEFBACoCTJUQAZWTOAKUAkEAQ0KAWkFBACoCTJU4AqACQQBDHUMTRkEAKgJMlRADOALMggJBAEMAAIA/QQAqAsyCApU4AtCCAkEAQwAAgD9BACoC0IICQ/MEtT+SQQAqAsyCApVDAACAP5KVOALUggJBAEMAAABAQwAAgD9DAACAP0EAKgLMggJDAAAAQBABlZOUOAKEgwRBAEEAKgLQggJD8wS1v5JBACoCzIIClUMAAIA/kjgCiIMEQQBDq+RcRkEAKgJMlRADOAKYgwRBAEMAAIA/QQAqApiDBJU4ApyDBEEAQwAAgD9BACoCnIMEQwAAgD+SQQAqApiDBJVDAACAP5KVOAKggwRBAEEAKgKcgwRDAACAP5I4AqSDBEEAQwAAAABDAACAP0EAKgKcgwSTQQAqAqSDBJWTOAKogwRBAEMAAIA/QQAqAqSDBJU4AqyDBEEAQwAAAEBDAACAP0MAAIA/QQAqApiDBEMAAABAEAGVk5Q4AuSDBkEAQQAqApyDBEMAAIC/kkEAKgKYgwSVQwAAgD+SOALogwZBAEPvtrBEQQAqAkyVOAL4gwZBAEPvtjBFQQAqAkyVOAL8gwYLkICAgAAAIAAgARAMIAAQDiAAEAsL3YCAgAAAQQBDAAAAPzgCZEEAQwAAAD84ApgBQQBDAAC5QzgCoAFBAEMAAAAAOAKsAUEAQwAAAD84AtiCAkEAQwAA3EM4AtyCAkEAQwAAAD84ArCDBEEAQ3vUEkQ4ArSDBAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwv2mICAAAEAQQAL7xh7Im5hbWUiOiJNZW93IiwidmVyc2lvbiI6IjIuNC4xMiIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiOTg4NDQiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJXYXZlR3VpZGUgQnJhc3MgaW5zdHJ1bWVudCBmcm9tIFNUSyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiTWVvdyJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmFlZmZlY3RzLmxpYi9uYW1lIjoiRmF1c3QgVmlydHVhbCBBbmFsb2cgRmlsdGVyIEVmZmVjdCBMaWJyYXJ5In0seyJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNRU9XIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYiLCJhZGRyZXNzIjoiL01FT1cvT04vT0ZGIiwiaW5kZXgiOiIxNzIiLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ikluc3RydW1lbnQiLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRnJlcXVlbmNpZXMiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAxIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzEiLCJpbmRleCI6IjE2MCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzNzAiLCJtaW4iOiIyODAiLCJtYXgiOiIzODAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSAyIiwiYWRkcmVzcyI6Ii9NRU9XL0luc3RydW1lbnQvRnJlcXVlbmNpZXMvRnJlcXVlbmN5XzIiLCJpbmRleCI6IjMzMTE2IiwibWV0YSI6W3siYWNjIjoiMCAwIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiVG9uZSBmcmVxdWVuY3kifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjM4MCIsIm1heCI6IjU1MCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IDMiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9GcmVxdWVuY2llcy9GcmVxdWVuY3lfMyIsImluZGV4IjoiNjU5NzIiLCJtZXRhIjpbeyJhY2MiOiIyIDEgLTEwIDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNTg3LjMyIiwibWluIjoiNTUwIiwibWF4IjoiNzAwIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiR2FpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDEiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8xIiwiaW5kZXgiOiIxNTIiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTEyIDAgMTIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkdhaW4gKHZhbHVlIGJldHdlZW4gMCBhbmQgMSkifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiVm9sdW1lIDIiLCJhZGRyZXNzIjoiL01FT1cvSW5zdHJ1bWVudC9HYWluL1ZvbHVtZV8yIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2FpbiAodmFsdWUgYmV0d2VlbiAwIGFuZCAxKSJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWb2x1bWUgMyIsImFkZHJlc3MiOiIvTUVPVy9JbnN0cnVtZW50L0dhaW4vVm9sdW1lXzMiLCJpbmRleCI6IjY1OTY4IiwibWV0YSI6W3siYWNjIjoiMiAwIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHYWluICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjAuNSIsInN0ZXAiOiIwLjAxIn1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IldhaCBXYWgiLCJhZGRyZXNzIjoiL01FT1cvV2FoX1dhaCIsImluZGV4IjoiMTAwIiwibWV0YSI6W3siYWNjIjoiMCAwIC0xNSAxMCAwIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfTA="; }

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
faust.Meow_instance = null;

// Monophonic Faust DSP
class MeowProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            MeowProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            MeowProcessor.parse_items(group.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
            MeowProcessor.parse_items(item.items, obj, callback);
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
        MeowProcessor.parse_ui(JSON.parse(getJSONMeow()).ui, params, MeowProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONMeow());
        
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
        
        this.factory = faust.Meow_instance.exports;
        this.HEAP = faust.Meow_instance.exports.memory.buffer;
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
            MeowProcessor.parse_ui(this.json_object.ui, this, MeowProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeMeow()), faust.importObject)
            .then(dsp_module => {
                  faust.Meow_instance = dsp_module.instance;
                  registerProcessor('Meow', MeowProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Meow cannot be loaded or compiled"); });
