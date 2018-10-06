
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"filename\":\"ZitaReverb\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"516472\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"ZitaReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"52\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"40\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK9gICAAAUDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDZW52BV90YW5mABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAJCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACs+ygIAADoKAgIAAAAuRnICAAAIDf0R9QQAhBEEAIQVDAAAAACEHQwAAAAAhCEEAIQZDAAAAACEJQwAAAAAhCkMAAAAAIQtDAAAAACEMQwAAAAAhDUMAAAAAIQ5DAAAAACEPQwAAAAAhEEMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QwAAAAAhQEMAAAAAIUFDAAAAACFCQwAAAAAhQ0MAAAAAIURDAAAAACFFQwAAAAAhRkMAAAAAIUdDAAAAACFIQwAAAAAhSUMAAAAAIUogAkEAaigCACEEIANBAGooAgAhBUNvEoM6QQAqAiiUIQdDbxKDOkEAKgI0lCEIQQAhBgNAAkAgB0N3vn8/QQAqAjCUkiEJQQAgCUMAAAAAIAm8QYCAgPwHcRs4AixDAAAAP0MAAMBAQQAqAiyWlyEKQQAqAiQgCpUQASELIAtDAAAAQBACIQxDAACAP0EAKgIcIAyUkyENQwAAgD8gDJMhDiANIA6VIQ9DAAAAACANQwAAAEAQAiAOQwAAAEAQApVDAACAv5KXkSEQIAhDd75/P0EAKgI8lJIhEUEAIBFDAAAAACARvEGAgID8B3EbOAI4QwAAAD9DAADAQEEAKgI4lpchEkMAAAAAQQAqAkRBACoCSEEAKgJQlEEAKgKYwh9BACoCnMIfkpOUkyETQQAgE0MAAAAAIBO8QYCAgPwHcRs4AkxBACoCWCAPIBCTlCALQQAqApjCH0EAKgIkIBKVEAEgC5VDAACAv5JBACoCTJSSlCAQQwAAgD8gD5OSlJIhFEEAIBRDAAAAACAUvEGAgID8B3EbOAJUQeAAQQAoAlxB//8AcUECdGpDAAAAP0EAKgJUlEMI5TwekjgCAEHogARBACgCXEH//wBxQQJ0aiAEIAZqKgIAOAIAQ5qZmT5B6IAEQQAoAlxBACgC6IAIa0H//wBxQQJ0aioCAJQhFUHgAEEAKAJcQQAoAuSABGtB//8AcUECdGoqAgAgFUOamRk/QQAqAvSACZSSkyEWQeyACEEAKAJcQf8fcUECdGogFjgCAEHsgAhBACgCXEEAKALsgAlrQf8fcUECdGoqAgAhF0EAIBdDAAAAACAXvEGAgID8B3EbOALwgAlDmpkZPyAWlCEYIBhDAAAAACAYvEGAgID8B3EbIRlBACoC/IAJIAqVEAEhGiAaQwAAAEAQAiEbQwAAgD9BACoCHCAblJMhHEMAAIA/IBuTIR0gHCAdlSEeQwAAAAAgHEMAAABAEAIgHUMAAABAEAKVQwAAgL+Sl5EhH0MAAAAAQQAqAkRBACoCSEEAKgKEgQmUQQAqAqTCH0EAKgKowh+Sk5STISBBACAgQwAAAAAgILxBgICA/AdxGzgCgIEJQQAqAoyBCSAeIB+TlCAaQQAqAqTCH0EAKgL8gAkgEpUQASAalUMAAIC/kkEAKgKAgQmUkpQgH0MAAIA/IB6TkpSSISFBACAhQwAAAAAgIbxBgICA/AdxGzgCiIEJQZCBCUEAKAJcQf//AXFBAnRqQwAAAD9BACoCiIEJlEMI5TwekjgCAEOamRk/QQAqAqCBEpRBkIEJQQAoAlxBACgClIERa0H//wFxQQJ0aioCAJIgFZMhIkGYgRFBACgCXEH/H3FBAnRqICI4AgBBmIERQQAoAlxBACgCmIESa0H/H3FBAnRqKgIAISNBACAjQwAAAAAgI7xBgICA/AdxGzgCnIESQwAAAABDmpkZPyAilJMhJCAkQwAAAAAgJLxBgICA/AdxGyElQQAqAvSACUEAKgKggRKSISZBACoCqIESIAqVEAEhJyAnQwAAAEAQAiEoQwAAgD9BACoCHCAolJMhKUMAAIA/ICiTISogKSAqlSErQwAAAAAgKUMAAABAEAIgKkMAAABAEAKVQwAAgL+Sl5EhLEMAAAAAQQAqAkRBACoCSEEAKgKwgRKUQQAqAoDCH0EAKgKEwh+Sk5STIS1BACAtQwAAAAAgLbxBgICA/AdxGzgCrIESQQAqAriBEiArICyTlCAnQQAqAoDCH0EAKgKogRIgEpUQASAnlUMAAIC/kkEAKgKsgRKUkpQgLEMAAIA/ICuTkpSSIS5BACAuQwAAAAAgLrxBgICA/AdxGzgCtIESQbyBEkEAKAJcQf//AHFBAnRqQwAAAD9BACoCtIESlEMI5TwekjgCACAVQbyBEkEAKAJcQQAoAsCBFmtB//8AcUECdGoqAgCSQ5qZGT9BACoCzMEWlJMhL0HEgRZBACgCXEH/D3FBAnRqIC84AgBBxIEWQQAoAlxBACgCxMEWa0H/D3FBAnRqKgIAITBBACAwQwAAAAAgMLxBgICA/AdxGzgCyMEWQ5qZGT8gL5QhMSAxQwAAAAAgMbxBgICA/AdxGyEyQQAqAtTBFiAKlRABITNDAAAAAEEAKgJEQQAqAkhBACoC3MEWlEEAKgKQwh9BACoCjMIfkpOUkyE0QQAgNEMAAAAAIDS8QYCAgPwHcRs4AtjBFiAzQwAAAEAQAiE1QwAAgD9BACoCHCA1lJMhNkMAAIA/IDWTITdDAAAAACA2QwAAAEAQAiA3QwAAAEAQApVDAACAv5KXkSE4IDYgN5UhOUEAKgLUwRYgEpUQASAzlUMAAIC/kkEAKgLYwRaUQQAqAozCH5IgOEMAAIA/IDmTkpQgM5RBACoC5MEWIDkgOJOUkiE6QQAgOkMAAAAAIDq8QYCAgPwHcRs4AuDBFkHowRZBACgCXEH//wFxQQJ0akMAAAA/QQAqAuDBFpRDCOU8HpI4AgAgFUHowRZBACgCXEEAKALswR5rQf//AXFBAnRqKgIAkkOamRk/QQAqAvjBH5SSITtB8MEeQQAoAlxB/x9xQQJ0aiA7OAIAQfDBHkEAKAJcQQAoAvDBH2tB/x9xQQJ0aioCACE8QQAgPEMAAAAAIDy8QYCAgPwHcRs4AvTBH0MAAAAAQ5qZGT8gO5STIT0gPUMAAAAAID28QYCAgPwHcRshPiAmQQAqAszBFpJBACoC+MEfkiAykiAZkiA+kiAlkiE/QQAgP0MAAAAAID+8QYCAgPwHcRs4AvzBH0EAKgL0gAlBACoCzMEWkiAykiAZkkEAKgKggRJBACoC+MEfkiA+kiAlkpMhQEEAIEBDAAAAACBAvEGAgID8B3EbOAKIwh9BACoCzMEWQQAqAvjBH5IgMpIgPpIgJiAZkiAlkpMhQUEAIEFDAAAAACBBvEGAgID8B3EbOAKUwh9BACoCoIESQQAqAszBFpIgMpIgJZJBACoC9IAJQQAqAvjBH5IgGZIgPpKTIUJBACBCQwAAAAAgQrxBgICA/AdxGzgCoMIfQQAqArjCH0EAKgK8wh9BACoCzMIflEEAKgLAwh9BACoCyMIflJKUIUNDpHC9PkEAKgKIwh9BACoClMIfk5QgQ5MhREEAIERDAAAAACBEvEGAgID8B3EbOALEwh9BACoCGEEAKgLYwh+UQQAqAtDCH0EAKgLcwh+UkiFFQQAqAsTCHyBDkkEAKgIUIEWUkyFGQQAgRkMAAAAAIEa8QYCAgPwHcRs4AtTCH0EAKgK4wh9BACoCvMIfQQAqAujCH5RBACoCwMIfQQAqAuTCH5SSlCFHQ6RwvT5BACoCiMIfQQAqApTCH5KUIEeTIUhBACBIQwAAAAAgSLxBgICA/AdxGzgC4MIfQQAqAhhBACoC8MIflEEAKgLQwh9BACoC9MIflJIhSUEAKgLgwh8gR5JBACoCFCBJlJMhSkEAIEpDAAAAACBKvEGAgID8B3EbOALswh8gBSAGakEAKgIUIEUgSZKUQQAqAuzCH5JBACoC1MIfkjgCAEEAQQAqAiw4AjBBAEEAKgI4OAI8QQBBACoCTDgCUEEAQQAqAlQ4AlhBAEEAKAJcQQFqNgJcQQBBACoC8IAJOAL0gAlBAEEAKgKAgQk4AoSBCUEAQQAqAoiBCTgCjIEJQQBBACoCnIESOAKggRJBAEEAKgKsgRI4ArCBEkEAQQAqArSBEjgCuIESQQBBACoCyMEWOALMwRZBAEEAKgLYwRY4AtzBFkEAQQAqAuDBFjgC5MEWQQBBACoC9MEfOAL4wR9BAEEAKgKAwh84AoTCH0EAQQAqAvzBHzgCgMIfQQBBACoCjMIfOAKQwh9BAEEAKgKIwh84AozCH0EAQQAqApjCHzgCnMIfQQBBACoClMIfOAKYwh9BAEEAKgKkwh84AqjCH0EAQQAqAqDCHzgCpMIfQQBBACoCyMIfOALMwh9BAEEAKgLEwh84AsjCH0EAQQAqAtjCHzgC3MIfQQBBACoC1MIfOALYwh9BAEEAKgLkwh84AujCH0EAQQAqAuDCHzgC5MIfQQBBACoC8MIfOAL0wh9BAEEAKgLswh84AvDCHyAGQQRqIQYgBkEEIAFsSARADAIMAQsLCwuFgICAAABBAQ8LhYCAgAAAQQEPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARAFIAAgARAOC7+MgIAAAR9/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAIQEDQAJAQSwgAUECdGpDAAAAADgCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQTggAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQcwAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHUACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQBBADYCXEEAIQUDQAJAQeAAIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBgIABSARADAIMAQsLC0EAIQYDQAJAQeiABCAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQYCAAUgEQAwCDAELCwtBACEHA0ACQEHsgAggB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAIEgEQAwCDAELCwtBACEIA0ACQEHwgAkgCEECdGpDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQYCBCSAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBBiIEJIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGQgQkgC0ECdGpDAAAAADgCACALQQFqIQsgC0GAgAJIBEAMAgwBCwsLQQAhDANAAkBBmIERIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBgCBIBEAMAgwBCwsLQQAhDQNAAkBBnIESIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQEGsgRIgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQbSBEiAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkBBvIESIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBgIABSARADAIMAQsLC0EAIREDQAJAQcSBFiARQQJ0akMAAAAAOAIAIBFBAWohESARQYAQSARADAIMAQsLC0EAIRIDQAJAQcjBFiASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB2MEWIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQEHgwRYgFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQejBFiAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQYCAAkgEQAwCDAELCwtBACEWA0ACQEHwwR4gFkECdGpDAAAAADgCACAWQQFqIRYgFkGAIEgEQAwCDAELCwtBACEXA0ACQEH0wR8gF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQfzBHyAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQQNIBEAMAgwBCwsLQQAhGQNAAkBBiMIfIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBA0gEQAwCDAELCwtBACEaA0ACQEGUwh8gGkECdGpDAAAAADgCACAaQQFqIRogGkEDSARADAIMAQsLC0EAIRsDQAJAQaDCHyAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQNIBEAMAgwBCwsLQQAhHANAAkBBxMIfIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBA0gEQAwCDAELCwtBACEdA0ACQEHUwh8gHUECdGpDAAAAADgCACAdQQFqIR0gHUEDSARADAIMAQsLC0EAIR4DQAJAQeDCHyAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQNIBEAMAgwBCwsLQQAhHwNAAkBB7MIfIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BA0gEQAwCDAELCwsLv4iAgAAAQQAgATYCAEEAQwCAO0hDAACAP0EAKAIAspeWOAIEQQBDHUMTRkEAKgIElRAEOAIIQQBDAACAP0EAKgIIlTgCDEEAQ3xZREVBACoCBEMdQ5NGQQAqAgSVEAOUlTgCEEEAQwAAgD9BACoCDEEAKgIQkkEAKgIIlUMAAIA/kpU4AhRBAEMAAABAQwAAgD9DAACAP0EAKgIIQwAAAEAQApWTlDgCGEEAQ3xZREdBACoCBJUQADgCHEEAQ7TnAj5BACoCBJRDAAAAP5KOOAIgQQBDAAAAAENVDN1AQQAqAiCUk0EAKgIElTgCJEEAQwAAgD9DfFnEREEAKgIElRAElTgCQEEAQwAAgD9BACoCQEMAAIA/kpU4AkRBAEMAAIA/QQAqAkCTOAJIQQBDMnMBPUEAKgIElEMAAAA/ko44AuCABEEAQwAAAEZDAAAAAEEAKgIgQQAqAuCABJOXlqg2AuSABEEAQwAAAEZDAAAAAEPNzEw9QQAqAgSUl5aoNgLogAhBAEMAAABFQwAAAABBACoC4IAEQwAAgL+Sl5aoNgLsgAlBAEM4h4M+QQAqAgSUQwAAAD+SjjgC+IAJQQBDAAAAAENVDN1AQQAqAviACZSTQQAqAgSVOAL8gAlBAEN16d88QQAqAgSUQwAAAD+SjjgCkIERQQBDAACARkMAAAAAQQAqAviACUEAKgKQgRGTl5aoNgKUgRFBAEMAAABFQwAAAABBACoCkIERQwAAgL+Sl5aoNgKYgRJBAEPZzRw+QQAqAgSUQwAAAD+SjjgCpIESQQBDAAAAAENVDN1AQQAqAqSBEpSTQQAqAgSVOAKogRJBAEOorKY8QQAqAgSUQwAAAD+SjjgCvIEWQQBDAAAARkMAAAAAQQAqAqSBEkEAKgK8gRaTl5aoNgLAgRZBAEMAAIBEQwAAAABBACoCvIEWQwAAgL+Sl5aoNgLEwRZBAEM3cFc+QQAqAgSUQwAAAD+SjjgC0MEWQQBDAAAAAENVDN1AQQAqAtDBFpSTQQAqAgSVOALUwRZBAEONDsg8QQAqAgSUQwAAAD+SjjgC6MEeQQBDAACARkMAAAAAQQAqAtDBFkEAKgLowR6Tl5aoNgLswR5BAEMAAABFQwAAAABBACoC6MEeQwAAgL+Sl5aoNgLwwR9BAEMB76RDQQAqAgRDgmb3REEAKgIElRADlJU4AqzCH0EAQ4Jmd0RBACoCBJUQBDgCsMIfQQBDAACAP0EAKgKwwh+VOAK0wh9BAEMAAIA/QQAqAqzCH0EAKgK0wh+SQQAqArDCH5VDAACAP5KVOAK4wh9BAEEAKgK0wh9BACoCrMIfk0EAKgKwwh+VQwAAgD+SOAK8wh9BAEMAAABAQwAAgD9DAACAP0EAKgKwwh9DAAAAQBAClZOUOALAwh9BAEEAKgIMQQAqAhCTQQAqAgiVQwAAgD+SOALQwh8LkICAgAAAIAAgARANIAAQDyAAEAwLloCAgAAAQQBDAADAPzgCKEEAQwAAwD84AjQLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLtI+AgAABAEEAC60PeyJuYW1lIjoiRUtfVmVyYjIiLCJmaWxlbmFtZSI6IlppdGFSZXZlcmIiLCJ2ZXJzaW9uIjoiMi4xMS41IiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcmV2ZXJicy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JvdXRlcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiI1MTY0NzIiLCJpbnB1dHMiOiIxIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJDTCBHUkFNRSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IihjKUdSQU1FIDIwMTMifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJaaXRhUmV2ZXJiIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJsaWNlbnNlIjoiQlNEIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJFS19WZXJiMiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4xIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRUtfVmVyYjIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkxvdyBGcmVxdWVuY2llcyBEZWNheSBUaW1lIiwiYWRkcmVzcyI6Ii9FS19WZXJiMi9Mb3dfRnJlcXVlbmNpZXNfRGVjYXlfVGltZSIsImluZGV4IjoiNTIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbG93LWZyZXF1ZW5jeSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjEuNSIsIm1pbiI6IjAuNSIsIm1heCI6IjYiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1pZCBGcmVxdWVuY2llcyBEZWNheSBUaW1lIiwiYWRkcmVzcyI6Ii9FS19WZXJiMi9NaWRfRnJlcXVlbmNpZXNfRGVjYXlfVGltZSIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbWlkZGxlIGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMS41IiwibWluIjoiMC41IiwibWF4IjoiNiIsInN0ZXAiOiIwLjAxIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class ZitaReverbProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ZitaReverbProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ZitaReverbProcessor.parse_items(group.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
            ZitaReverbProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= ZitaReverbProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        ZitaReverbProcessor.parse_ui(JSON.parse(getJSONZitaReverb()).ui, params, ZitaReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONZitaReverb());

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
        
        this.ZitaReverb_instance = new WebAssembly.Instance(ZitaReverbProcessor.wasm_module, ZitaReverbProcessor.importObject);
  	   	this.factory = this.ZitaReverb_instance.exports;
        this.HEAP = this.ZitaReverb_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * ZitaReverbProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((ZitaReverbProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + ZitaReverbProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ZitaReverbProcessor.parse_ui(this.json_object.ui, this, ZitaReverbProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * ZitaReverbProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, ZitaReverbProcessor.buffer_size, this.ins, this.outs);
        
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

ZitaReverbProcessor.buffer_size = 128;

ZitaReverbProcessor.importObject = {
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
    if (ZitaReverbProcessor.wasm_module == undefined) {
        ZitaReverbProcessor.wasm_module = new WebAssembly.Module(ZitaReverbProcessor.atob(getBase64CodeZitaReverb()));
        registerProcessor('ZitaReverb', ZitaReverbProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust ZitaReverb cannot be loaded or compiled");
}

