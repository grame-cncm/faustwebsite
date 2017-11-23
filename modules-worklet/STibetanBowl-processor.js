
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"24560\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"44\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"312\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"24436\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"24460\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AGABfQF9YAF9AX0CyYCAgAAEC2dsb2JhbC5NYXRoA2NvcwACC2dsb2JhbC5NYXRoA3BvdwAOC2dsb2JhbC5NYXRoA3NpbgAQC2dsb2JhbC5NYXRoA3RhbgARA4+AgIAADgABAwQFBgcICQoLDA0PBYeAgIAAAQCBgICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAArWvICAAA6CgICAAAALjaOAgAACDX9GfUEAIQRDAAAAACERQwAAAAAhEkMAAAAAIRNBACEFQwAAAAAhFEMAAAAAIRVBACEGQwAAAAAhFkMAAAAAIRdBACEHQwAAAAAhGEMAAAAAIRlBACEIQwAAAAAhGkEAIQlDAAAAACEbQQAhCkMAAAAAIRxDAAAAACEdQQAhC0MAAAAAIR5BACEMQwAAAAAhH0MAAAAAISBBACENQwAAAAAhIUEAIQ5DAAAAACEiQQAhD0MAAAAAISNDAAAAACEkQwAAAAAhJUEAIRBDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWIANBAGooAgAhBEEAKgIsIRFDCpqWQCARlCESQQAqArgCIRNDAACARUMAAAAAQQAqArQCIBOVl5aoIQVBACoCvAJBACoCwAIgE5QQAJQhFENnX5Y+IBGUIRVDAACARUMAAAAAQQAqAtwGIBOVl5aoIQZBACoCvAJBACoC4AYgE5QQAJQhFkNGZ0BAIBGUIRdDAACARUMAAAAAQQAqAvgKIBOVl5aoIQdBACoCvAJBACoC/AogE5QQAJQhGENgXrs9IBGUIRlDAACARUMAAAAAQQAqApQbIBOVl5aoIQhBACoCvAJBACoCmBsgE5QQAJQhGkMAAIBFQwAAAABBACoCsB8gE5WXlqghCUEAKgK8AkEAKgK0HyATlBAAlCEbQwAAgEVDAAAAAEEAKgLMIyATlZeWqCEKQQAqArwCQQAqAtAjIBOUEACUIRxDuJhCPiARlCEdQwAAgEVDAAAAAEEAKgLoYyATlZeWqCELQQAqArwCQQAqAuxjIBOUEACUIR5DAACARUMAAAAAQQAqAoR0IBOVl5aoIQxBACoCvAJBACoCiHQgE5QQAJQhH0MTK1NAIBGUISBDAACARUMAAAAAQQAqAqB8IBOVl5aoIQ1BACoCvAJBACoCpHwgE5QQAJQhIUMAAIBFQwAAAABBACoCvH4gE5WXlqghDkEAKgK8AkEAKgLAfiATlBAAlCEiQwAAgEVDAAAAAEEAKgLYvgEgE5WXlqghD0EAKgK8AkEAKgLcvgEgE5QQAJQhI0NvEoM6QQAqAvS+AZQhJENvEoM6QQAqAoy/AZQhJUEAIRADQAJAQQBBATYCAEE0QQAoAjBBP3FBAnRqIBJBACoC2AJDAACAP5KSOAIAQTRBACgCMCAFa0E/cUECdGoqAgAgFEEAKgLIApRBACoCJEEAKgLMApSSkyEmQQAgJkMAAAAAICa8QYCAgPwHcRs4AsQCQQAqAihBACoCxAKUQQAqAtACQQAqAswClJIhJ0EAICdDAAAAACAnvEGAgID8B3EbOALUAkHcAkEAKAIwQf8AcUECdGpBACoC9AZDAACAP5IgFZM4AgBDvf1/P0HcAkEAKAIwIAZrQf8AcUECdGoqAgCUIBZBACoC6AaUQQAqAiRBACoC7AaUkpMhKEEAIChDAAAAACAovEGAgID8B3EbOALkBkEAKgIoQQAqAuQGlEEAKgLQAkEAKgLsBpSSISlBACApQwAAAAAgKbxBgICA/AdxGzgC8AZB+AZBACgCMEH/AHFBAnRqIBdBACoCkAtDAACAP5KSOAIAQfgGQQAoAjAgB2tB/wBxQQJ0aioCACAYQQAqAoQLlEEAKgIkQQAqAogLlJKTISpBACAqQwAAAAAgKrxBgICA/AdxGzgCgAtBACoCKEEAKgKAC5RBACoC0AJBACoCiAuUkiErQQAgK0MAAAAAICu8QYCAgPwHcRs4AowLQZQLQQAoAjBB/wNxQQJ0aiAZQQAqAqwbQwAAgD+SkjgCAEPf/n8/QZQLQQAoAjAgCGtB/wNxQQJ0aioCAJQgGkEAKgKgG5RBACoCJEEAKgKkG5SSkyEsQQAgLEMAAAAAICy8QYCAgPwHcRs4ApwbQQAqAihBACoCnBuUQQAqAtACQQAqAqQblJIhLUEAIC1DAAAAACAtvEGAgID8B3EbOAKoG0GwG0EAKAIwQf8AcUECdGpBACoCyB9DAACAP5IgFZM4AgBDvf1/P0GwG0EAKAIwIAlrQf8AcUECdGoqAgCUIBtBACoCvB+UQQAqAiRBACoCwB+UkpMhLkEAIC5DAAAAACAuvEGAgID8B3EbOAK4H0EAKgIoQQAqArgflEEAKgLQAkEAKgLAH5SSIS9BACAvQwAAAAAgL7xBgICA/AdxGzgCxB9BzB9BACgCMEH/AHFBAnRqIBdBACoC5CNDAACAP5KSOAIAQcwfQQAoAjAgCmtB/wBxQQJ0aioCACAcQQAqAtgjlEEAKgIkQQAqAtwjlJKTITBBACAwQwAAAAAgMLxBgICA/AdxGzgC1CNBACoCKEEAKgLUI5RBACoC0AJBACoC3COUkiExQQAgMUMAAAAAIDG8QYCAgPwHcRs4AuAjQegjQQAoAjBB/w9xQQJ0aiAdQQAqAoBkQwAAgD+SkjgCAEMm+38/QegjQQAoAjAgC2tB/w9xQQJ0aioCAJQgHkEAKgL0Y5RBACoCJEEAKgL4Y5SSkyEyQQAgMkMAAAAAIDK8QYCAgPwHcRs4AvBjQQAqAihBACoC8GOUQQAqAtACQQAqAvhjlJIhM0EAIDNDAAAAACAzvEGAgID8B3EbOAL8Y0GE5ABBACgCMEH/A3FBAnRqIBlBACoCnHRDAACAP5KSOAIAQ9/+fz9BhOQAQQAoAjAgDGtB/wNxQQJ0aioCAJQgH0EAKgKQdJRBACoCJEEAKgKUdJSSkyE0QQAgNEMAAAAAIDS8QYCAgPwHcRs4Aox0QQAqAihBACoCjHSUQQAqAtACQQAqApR0lJIhNUEAIDVDAAAAACA1vEGAgID8B3EbOAKYdEGg9ABBACgCMEH/AXFBAnRqICBBACoCuHxDAACAP5KSOAIAQaD0AEEAKAIwIA1rQf8BcUECdGoqAgAgIUEAKgKsfJRBACoCJEEAKgKwfJSSkyE2QQAgNkMAAAAAIDa8QYCAgPwHcRs4Aqh8QQAqAihBACoCqHyUQQAqAtACQQAqArB8lJIhN0EAIDdDAAAAACA3vEGAgID8B3EbOAK0fEG8/ABBACgCMEE/cUECdGogEkEAKgLUfkMAAIA/kpI4AgBBvPwAQQAoAjAgDmtBP3FBAnRqKgIAICJBACoCyH6UQQAqAiRBACoCzH6UkpMhOEEAIDhDAAAAACA4vEGAgID8B3EbOALEfkEAKgIoQQAqAsR+lEEAKgLQAkEAKgLMfpSSITlBACA5QwAAAAAgObxBgICA/AdxGzgC0H5B2P4AQQAoAjBB/w9xQQJ0aiAdQQAqAvC+AUMAAIA/kpI4AgBDJvt/P0HY/gBBACgCMCAPa0H/D3FBAnRqKgIAlCAjQQAqAuS+AZRBACoCJEEAKgLovgGUkpMhOkEAIDpDAAAAACA6vEGAgID8B3EbOALgvgFBACoCKEEAKgLgvgGUQQAqAtACQQAqAui+AZSSITtBACA7QwAAAAAgO7xBgICA/AdxGzgC7L4BQQAqAtQCQQAqAvAGQQAqAowLQQAqAqgbQQAqAsQfQQAqAuAjQQAqAvxjQQAqAph0kkMAAABAQQAqArR8lJKSkpKSkpJBACoC0H6SQQAqAuy+AZIhPCAkQ3e+fz9BACoC/L4BlJIhPUEAID1DAAAAACA9vEGAgID8B3EbOAL4vgFDd75/P0EAKgKEvwGUQ28SgzpBACoC+L4BlJIhPkEAID5DAAAAACA+vEGAgID8B3EbOAKAvwEgJUN3vn8/QQAqApS/AZSSIT9BACA/QwAAAAAgP7xBgICA/AdxGzgCkL8BQ3e+fz9BACoCnL8BlENvEoM6QQAqApC/AZSSIUBBACBAQwAAAAAgQLxBgICA/AdxGzgCmL8BQQAqAoi/AUEAKgKYvwGUIUEgQRACIUIgQRAAIUNBACoCrL8BIEKUQQAqAqS/ASBDlJIhREEAIERDAAAAACBEvEGAgID8B3EbOAKgvwFBACoCrL8BIEOUQQAqAqS/AUMAAAAAIEKTlJJBAUEAKAIEa7KSIUVBACBFQwAAAAAgRbxBgICA/AdxGzgCqL8BQ9sPSUBBACoCgL8BQQAqAqC/AZSUIUYgRhACIUdDAAAAACBHkyFIIEYQACFJQQAqAty/ASBIlCA8IEmUkiFKIEhBACoC1L8BlCBJIEqUkiFLIEhBACoCzL8BlCBJIEuUkiFMIEhBACoCxL8BlCBJIEyUkiFNIEhBACoCvL8BlCBJIE2UkiFOIEhBACoCtL8BlCBJIE6UkiFPQQAgT0MAAAAAIE+8QYCAgPwHcRs4ArC/ASBHIE6UIElBACoCtL8BlJIhUEEAIFBDAAAAACBQvEGAgID8B3EbOAK4vwEgRyBNlCBJQQAqAry/AZSSIVFBACBRQwAAAAAgUbxBgICA/AdxGzgCwL8BIEcgTJQgSUEAKgLEvwGUkiFSQQAgUkMAAAAAIFK8QYCAgPwHcRs4Asi/ASBHIEuUIElBACoCzL8BlJIhU0EAIFNDAAAAACBTvEGAgID8B3EbOALQvwEgRyBKlCBJQQAqAtS/AZSSIVRBACBUQwAAAAAgVLxBgICA/AdxGzgC2L8BIDwgR5RBACoC3L8BIEmUkiFVQQAgVTgC4L8BQQAqAhhBACoC7L8BlEEAKgIcIFVBACoC5L8BkpSSIVZBACBWQwAAAAAgVrxBgICA/AdxGzgC6L8BIAQgEGpBACoC6L8BOAIAQQBBACgCADYCBEEAQQAoAjBBAWo2AjBBAEEAKgLIAjgCzAJBAEEAKgLEAjgCyAJBAEEAKgLUAjgC2AJBAEEAKgLoBjgC7AZBAEEAKgLkBjgC6AZBAEEAKgLwBjgC9AZBAEEAKgKECzgCiAtBAEEAKgKACzgChAtBAEEAKgKMCzgCkAtBAEEAKgKgGzgCpBtBAEEAKgKcGzgCoBtBAEEAKgKoGzgCrBtBAEEAKgK8HzgCwB9BAEEAKgK4HzgCvB9BAEEAKgLEHzgCyB9BAEEAKgLYIzgC3CNBAEEAKgLUIzgC2CNBAEEAKgLgIzgC5CNBAEEAKgL0YzgC+GNBAEEAKgLwYzgC9GNBAEEAKgL8YzgCgGRBAEEAKgKQdDgClHRBAEEAKgKMdDgCkHRBAEEAKgKYdDgCnHRBAEEAKgKsfDgCsHxBAEEAKgKofDgCrHxBAEEAKgK0fDgCuHxBAEEAKgLIfjgCzH5BAEEAKgLEfjgCyH5BAEEAKgLQfjgC1H5BAEEAKgLkvgE4Aui+AUEAQQAqAuC+ATgC5L4BQQBBACoC7L4BOALwvgFBAEEAKgL4vgE4Avy+AUEAQQAqAoC/ATgChL8BQQBBACoCkL8BOAKUvwFBAEEAKgKYvwE4Apy/AUEAQQAqAqC/ATgCpL8BQQBBACoCqL8BOAKsvwFBAEEAKgKwvwE4ArS/AUEAQQAqAri/ATgCvL8BQQBBACoCwL8BOALEvwFBAEEAKgLIvwE4Asy/AUEAQQAqAtC/ATgC1L8BQQBBACoC2L8BOALcvwFBAEEAKgLgvwE4AuS/AUEAQQAqAui/ATgC7L8BIBBBBGohECAQQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIIDwuOgICAAAAgACABEAQgACABEA0LjZOAgAABMH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACEBA0ACQEEAIAFBAnRqQQA2AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBAEEANgIwQQAhAgNAAkBBNCACQQJ0akMAAAAAOAIAIAJBAWohAiACQcAASARADAIMAQsLC0EAIQMDQAJAQcQCIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBA0gEQAwCDAELCwtBACEEA0ACQEHUAiAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB3AIgBUECdGpDAAAAADgCACAFQQFqIQUgBUGAAUgEQAwCDAELCwtBACEGA0ACQEHkBiAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQNIBEAMAgwBCwsLQQAhBwNAAkBB8AYgB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQfgGIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBgAFIBEAMAgwBCwsLQQAhCQNAAkBBgAsgCUECdGpDAAAAADgCACAJQQFqIQkgCUEDSARADAIMAQsLC0EAIQoDQAJAQYwLIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGUCyALQQJ0akMAAAAAOAIAIAtBAWohCyALQYAESARADAIMAQsLC0EAIQwDQAJAQZwbIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBA0gEQAwCDAELCwtBACENA0ACQEGoGyANQQJ0akMAAAAAOAIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBBsBsgDkECdGpDAAAAADgCACAOQQFqIQ4gDkGAAUgEQAwCDAELCwtBACEPA0ACQEG4HyAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQNIBEAMAgwBCwsLQQAhEANAAkBBxB8gEEECdGpDAAAAADgCACAQQQFqIRAgEEECSARADAIMAQsLC0EAIREDQAJAQcwfIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBgAFIBEAMAgwBCwsLQQAhEgNAAkBB1CMgEkECdGpDAAAAADgCACASQQFqIRIgEkEDSARADAIMAQsLC0EAIRMDQAJAQeAjIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQEHoIyAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQYAQSARADAIMAQsLC0EAIRUDQAJAQfDjACAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQQNIBEAMAgwBCwsLQQAhFgNAAkBB/OMAIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQEGE5AAgF0ECdGpDAAAAADgCACAXQQFqIRcgF0GABEgEQAwCDAELCwtBACEYA0ACQEGM9AAgGEECdGpDAAAAADgCACAYQQFqIRggGEEDSARADAIMAQsLC0EAIRkDQAJAQZj0ACAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBoPQAIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBgAJIBEAMAgwBCwsLQQAhGwNAAkBBqPwAIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBA0gEQAwCDAELCwtBACEcA0ACQEG0/AAgHEECdGpDAAAAADgCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAQbz8ACAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQcAASARADAIMAQsLC0EAIR4DQAJAQcT+ACAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQNIBEAMAgwBCwsLQQAhHwNAAkBB0P4AIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BAkgEQAwCDAELCwtBACEgA0ACQEHY/gAgIEECdGpDAAAAADgCACAgQQFqISAgIEGAEEgEQAwCDAELCwtBACEhA0ACQEHgvgEgIUECdGpDAAAAADgCACAhQQFqISEgIUEDSARADAIMAQsLC0EAISIDQAJAQey+ASAiQQJ0akMAAAAAOAIAICJBAWohIiAiQQJIBEAMAgwBCwsLQQAhIwNAAkBB+L4BICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQEGAvwEgJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQZC/ASAlQQJ0akMAAAAAOAIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBBmL8BICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBAkgEQAwCDAELCwtBACEnA0ACQEGgvwEgJ0ECdGpDAAAAADgCACAnQQFqIScgJ0ECSARADAIMAQsLC0EAISgDQAJAQai/ASAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkBBsL8BIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEG4vwEgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQcC/ASArQQJ0akMAAAAAOAIAICtBAWohKyArQQJIBEAMAgwBCwsLQQAhLANAAkBByL8BICxBAnRqQwAAAAA4AgAgLEEBaiEsICxBAkgEQAwCDAELCwtBACEtA0ACQEHQvwEgLUECdGpDAAAAADgCACAtQQFqIS0gLUECSARADAIMAQsLC0EAIS4DQAJAQdi/ASAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQJIBEAMAgwBCwsLQQAhLwNAAkBB4L8BIC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BAkgEQAwCDAELCwtBACEwA0ACQEHovwEgMEECdGpDAAAAADgCACAwQQFqITAgMEECSARADAIMAQsLCwvjhICAAABBACABNgIIQQBDAIA7SEMAAIA/QQAoAgiyl5Y4AgxBAEMAAIA/Q9pvdUZBACoCDJUQA5U4AhBBAEEAKgIQQwAAgD+SOAIUQQBDAAAAAEMAAIA/QQAqAhCTQQAqAhSVkzgCGEEAQwAAgD9BACoCFJU4AhxBAEMAAIA/Q9sPyUJBACoCDJWTOAIgQQBBACoCIEMAAABAEAE4AiRBAEMAAAA/QwAAgD9BACoCJJOUOAIoQQBDimI6PUEAKgIMlDgCtAJBAEMAAAAAQwAAAEBBACoCIJSTOAK8AkEAQ1cUCkNBACoCDJU4AsACQQBDAAAAAEEAKgIokzgC0AJBAENk6J89QQAqAgyUOALcBkEAQzvxoEJBACoCDJU4AuAGQQBDFirjPUEAKgIMlDgC+ApBAEOLlWJCQQAqAgyVOAL8CkEAQ38Mqz5BACoCDJQ4ApQbQQBDpXWWQUEAKgIMlTgCmBtBAEOTlp89QQAqAgyUOAKwH0EAQ75DoUJBACoCDJU4ArQfQQBD4JnjPUEAKgIMlDgCzCNBAENBJmJCQQAqAgyVOALQI0EAQwWAgD9BACoCDJQ4AuhjQQBDi0fIQEEAKgIMlTgC7GNBAEMH3Ks+QQAqAgyUOAKEdEEAQ/S/lUFBACoCDJU4Aoh0QQBDSIIzPkEAKgIMlDgCoHxBAENXXg9CQQAqAgyVOAKkfEEAQ5gGbT1BACoCDJQ4Arx+QQBDPyjZQkEAKgIMlTgCwH5BAEPyAX8/QQAqAgyUOALYvgFBAEMq2MlAQQAqAgyVOALcvgFBAEPbD8lAQQAqAgyVOAKIvwELkICAgAAAIAAgARAMIAAQDiAAEAsLr4CAgAAAQQBDAAAAADgCLEEAQwAA3EM4ArgCQQBDCtejPDgC9L4BQQBDAABcQzgCjL8BC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC/2PgIAAAQBBAAv2D3sibmFtZSI6IlRpYmV0YW4gQm93bCIsInZlcnNpb24iOiIyLjUuNCIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiMjQ1NjAiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiQmFuZGVkIFdhdmVndWlkZSBNb2RlbGQgVGliZXRhbiBCb3dsIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRpYmV0YW4gQm93bCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlRpYmV0YW4gQm93bCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUGxheSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL1BsYXkiLCJpbmRleCI6IjQ0IiwibWV0YSI6W3siMCI6IiJ9LHsiYWNjIjoiMiAxIC0xMCAwIDEwIn0seyJ0b29sdGlwIjoiMD1Cb3c7IDE9U3RyaWtlIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9GcmVxdWVuY3kiLCJpbmRleCI6IjMxMiIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIiwiYWRkcmVzcyI6Ii9UaWJldGFuX0Jvd2wvTW9kdWxhdGlvbiIsImluZGV4IjoiMjQ0MzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJOb25saW5lYXJpdHkgZmFjdG9yICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb25fRnJlcXVlbmN5IiwiaW5kZXgiOiIyNDQ2MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjAgMCAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjIwIiwibWluIjoiMTUwIiwibWF4IjoiNTAwIiwic3RlcCI6IjAuMSJ9XX1dfTA="; }

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
faust.STibetanBowl_instance = null;

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSTibetanBowl());
        
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
        
        this.factory = faust.STibetanBowl_instance.exports;
        this.HEAP = faust.STibetanBowl_instance.exports.memory.buffer;
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
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSTibetanBowl()), faust.importObject)
            .then(dsp_module => {
                  faust.STibetanBowl_instance = dsp_module.instance;
                  registerProcessor('STibetanBowl', STibetanBowlProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust STibetanBowl cannot be loaded or compiled"); });
