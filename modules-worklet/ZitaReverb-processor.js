
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"filename\":\"ZitaReverb\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/reverbs.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/routes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"516472\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"ZitaReverb\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"72\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"40\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK9gICAAAUDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDZW52BV90YW5mABIDj4CAgAAOAAEEBQYHCAkKCwwNDhAFh4CAgAABAJCAgIAAB7qBgIAADAdjb21wdXRlAAYMZ2V0TnVtSW5wdXRzAAcNZ2V0TnVtT3V0cHV0cwAIDWdldFBhcmFtVmFsdWUACQ1nZXRTYW1wbGVSYXRlAAoEaW5pdAALDWluc3RhbmNlQ2xlYXIADBFpbnN0YW5jZUNvbnN0YW50cwANDGluc3RhbmNlSW5pdAAOGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA8Nc2V0UGFyYW1WYWx1ZQASBm1lbW9yeQIACtqygIAADoKAgIAAAAubnICAAAIDf0R9QQAhBEEAIQVDAAAAACEHQwAAAAAhCEEAIQZDAAAAACEJQwAAAAAhCkMAAAAAIQtDAAAAACEMQwAAAAAhDUMAAAAAIQ5DAAAAACEPQwAAAAAhEEMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUMAAAAAIT5DAAAAACE/QwAAAAAhQEMAAAAAIUFDAAAAACFCQwAAAAAhQ0MAAAAAIURDAAAAACFFQwAAAAAhRkMAAAAAIUdDAAAAACFIQwAAAAAhSUMAAAAAIUogAkEAaigCACEEIANBAGooAgAhBUNvEoM6QQAqAiiUIQdDbxKDOkEAKgJIlCEIQQAhBgNAAkAgB0N3vn8/QQAqAjCUkiEJQQAgCUMAAAAAIAm8QYCAgPwHcRs4AixDAAAAP0MAAMBAQQAqAiyWlyEKQQAqAiQgCpUQASELIAtDAAAAQBACIQxDAACAP0EAKgIcIAyUkyENQwAAgD8gDJMhDiANIA6VIQ9DAAAAACANQwAAAEAQAiAOQwAAAEAQApVDAACAv5KXkSEQQwAAAABBACoCOEEAKgI8QQAqAkSUQQAqAqTCH0EAKgKowh+Sk5STIRFBACARQwAAAAAgEbxBgICA/AdxGzgCQCAIQ3e+fz9BACoCUJSSIRJBACASQwAAAAAgErxBgICA/AdxGzgCTEMAAAA/QwAAwEBBACoCTJaXIRNBACoCWCAPIBCTlCALQQAqAqTCH0EAKgJAQQAqAiQgE5UQASALlUMAAIC/kpSSlCAQQwAAgD8gD5OSlJIhFEEAIBRDAAAAACAUvEGAgID8B3EbOAJUQeAAQQAoAlxB//8BcUECdGpDAAAAP0EAKgJUlEMI5TwekjgCAEHogAhBACgCXEH//wBxQQJ0aiAEIAZqKgIAOAIAQ5qZmT5B6IAIQQAoAlxBACgC6IAMa0H//wBxQQJ0aioCAJQhFUOamRk/QQAqAvSADZRB4ABBACgCXEEAKALkgAhrQf//AXFBAnRqKgIAkiAVkyEWQeyADEEAKAJcQf8fcUECdGogFjgCAEHsgAxBACgCXEEAKALsgA1rQf8fcUECdGoqAgAhF0EAIBdDAAAAACAXvEGAgID8B3EbOALwgA1DAAAAAEOamRk/IBaUkyEYIBhDAAAAACAYvEGAgID8B3EbIRlBACoC/IANIAqVEAEhGiAaQwAAAEAQAiEbQwAAgD9BACoCHCAblJMhHEMAAIA/IBuTIR0gHCAdlSEeQwAAAAAgHEMAAABAEAIgHUMAAABAEAKVQwAAgL+Sl5EhH0MAAAAAQQAqAjhBACoCPEEAKgKEgQ2UQQAqAozCH0EAKgKQwh+Sk5STISBBACAgQwAAAAAgILxBgICA/AdxGzgCgIENQQAqAoyBDSAeIB+TlCAaQQAqAozCH0EAKgKAgQ1BACoC/IANIBOVEAEgGpVDAACAv5KUkpQgH0MAAIA/IB6TkpSSISFBACAhQwAAAAAgIbxBgICA/AdxGzgCiIENQZCBDUEAKAJcQf//AXFBAnRqQwAAAD9BACoCiIENlEMI5TwekjgCAEGQgQ1BACgCXEEAKAKUgRVrQf//AXFBAnRqKgIAIBVDmpkZP0EAKgKggRaUkpIhIkGYgRVBACgCXEH/H3FBAnRqICI4AgBBmIEVQQAoAlxBACgCmIEWa0H/H3FBAnRqKgIAISNBACAjQwAAAAAgI7xBgICA/AdxGzgCnIEWQwAAAABDmpkZPyAilJMhJCAkQwAAAAAgJLxBgICA/AdxGyElQQAqAqiBFiAKlRABISYgJkMAAABAEAIhJ0MAAIA/QQAqAhwgJ5STIShDAACAPyAnkyEpICggKZUhKkMAAAAAIChDAAAAQBACIClDAAAAQBAClUMAAIC/kpeRIStDAAAAAEEAKgI4QQAqAjxBACoCsIEWlEEAKgKYwh9BACoCnMIfkpOUkyEsQQAgLEMAAAAAICy8QYCAgPwHcRs4AqyBFkEAKgK4gRYgKiArk5QgJkEAKgKYwh9BACoCrIEWQQAqAqiBFiATlRABICaVQwAAgL+SlJKUICtDAACAPyAqk5KUkiEtQQAgLUMAAAAAIC28QYCAgPwHcRs4ArSBFkG8gRZBACgCXEH//wBxQQJ0akMAAAA/QQAqArSBFpRDCOU8HpI4AgBBvIEWQQAoAlxBACgCwIEaa0H//wBxQQJ0aioCACAVQ5qZGT9BACoCzIEblJKTIS5BxIEaQQAoAlxB/x9xQQJ0aiAuOAIAQcSBGkEAKAJcQQAoAsSBG2tB/x9xQQJ0aioCACEvQQAgL0MAAAAAIC+8QYCAgPwHcRs4AsiBG0OamRk/IC6UITAgMEMAAAAAIDC8QYCAgPwHcRshMUEAKgLUgRsgCpUQASEyIDJDAAAAQBACITNDAACAP0EAKgIcIDOUkyE0QwAAgD8gM5MhNSA0IDWVITZDAAAAACA0QwAAAEAQAiA1QwAAAEAQApVDAACAv5KXkSE3QwAAAABBACoCOEEAKgI8QQAqAtyBG5RBACoCgMIfQQAqAoTCH5KTlJMhOEEAIDhDAAAAACA4vEGAgID8B3EbOALYgRtBACoC5IEbIDYgN5OUIDJBACoCgMIfQQAqAtiBG0EAKgLUgRsgE5UQASAylUMAAIC/kpSSlCA3QwAAgD8gNpOSlJIhOUEAIDlDAAAAACA5vEGAgID8B3EbOALggRtB6IEbQQAoAlxB//8AcUECdGpDAAAAP0EAKgLggRuUQwjlPB6SOAIAQeiBG0EAKAJcQQAoAuyBH2tB//8AcUECdGoqAgAgFZJDmpkZP0EAKgL4wR+UkyE6QfCBH0EAKAJcQf8PcUECdGogOjgCAEHwgR9BACgCXEEAKALwwR9rQf8PcUECdGoqAgAhO0EAIDtDAAAAACA7vEGAgID8B3EbOAL0wR9DmpkZPyA6lCE8IDxDAAAAACA8vEGAgID8B3EbIT0gPSAxkiE+QQAqAvSADUEAKgKggRZBACoCzIEbQQAqAvjBHyAZICUgPpKSkpKSkiE/QQAgP0MAAAAAID+8QYCAgPwHcRs4AvzBH0EAKgLMgRtBACoC+MEfID6SkkEAKgL0gA1BACoCoIEWICUgGZKSkpMhQEEAIEBDAAAAACBAvEGAgID8B3EbOAKIwh9BACoCoIEWQQAqAvjBHyA9ICWSkpJBACoC9IANQQAqAsyBGyAxIBmSkpKTIUFBACBBQwAAAAAgQbxBgICA/AdxGzgClMIfQQAqAvSADUEAKgL4wR8gPSAZkpKSQQAqAqCBFkEAKgLMgRsgMSAlkpKSkyFCQQAgQkMAAAAAIEK8QYCAgPwHcRs4AqDCH0EAKgK4wh9BACoCvMIfQQAqAsjCH5RBACoCwMIfQQAqAszCH5SSlCFDQ6RwvT5BACoCiMIfQQAqApTCH5KUIEOTIURBACBEQwAAAAAgRLxBgICA/AdxGzgCxMIfQQAqAhhBACoC2MIflEEAKgLQwh9BACoC3MIflJIhRUEAKgLEwh8gQ5JBACoCFCBFlJMhRkEAIEZDAAAAACBGvEGAgID8B3EbOALUwh9BACoCuMIfQQAqAsDCH0EAKgLowh+UQQAqArzCH0EAKgLkwh+UkpQhR0OkcL0+QQAqAojCH0EAKgKUwh+TlCBHkyFIQQAgSEMAAAAAIEi8QYCAgPwHcRs4AuDCH0EAKgLQwh9BACoC9MIflEEAKgIYQQAqAvDCH5SSIUlBACoC4MIfIEeSQQAqAhQgSZSTIUpBACBKQwAAAAAgSrxBgICA/AdxGzgC7MIfIAUgBmpBACoCFCBFIEmSlEEAKgLUwh9BACoC7MIfkpI4AgBBAEEAKgIsOAIwQQBBACoCQDgCREEAQQAqAkw4AlBBAEEAKgJUOAJYQQBBACgCXEEBajYCXEEAQQAqAvCADTgC9IANQQBBACoCgIENOAKEgQ1BAEEAKgKIgQ04AoyBDUEAQQAqApyBFjgCoIEWQQBBACoCrIEWOAKwgRZBAEEAKgK0gRY4AriBFkEAQQAqAsiBGzgCzIEbQQBBACoC2IEbOALcgRtBAEEAKgLggRs4AuSBG0EAQQAqAvTBHzgC+MEfQQBBACoCgMIfOAKEwh9BAEEAKgL8wR84AoDCH0EAQQAqAozCHzgCkMIfQQBBACoCiMIfOAKMwh9BAEEAKgKYwh84ApzCH0EAQQAqApTCHzgCmMIfQQBBACoCpMIfOAKowh9BAEEAKgKgwh84AqTCH0EAQQAqAsjCHzgCzMIfQQBBACoCxMIfOALIwh9BAEEAKgLYwh84AtzCH0EAQQAqAtTCHzgC2MIfQQBBACoC5MIfOALowh9BAEEAKgLgwh84AuTCH0EAQQAqAvDCHzgC9MIfQQBBACoC7MIfOALwwh8gBkEEaiEGIAZBBCABbEgEQAwCDAELCwsLhYCAgAAAQQEPC4WAgIAAAEEBDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAgAPC46AgIAAACAAIAEQBSAAIAEQDgvAjICAAAEff0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEBA0ACQEEsIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEHAACACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBzAAgA0ECdGpDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAQdQAIARBAnRqQwAAAAA4AgAgBEEBaiEEIARBAkgEQAwCDAELCwtBAEEANgJcQQAhBQNAAkBB4AAgBUECdGpDAAAAADgCACAFQQFqIQUgBUGAgAJIBEAMAgwBCwsLQQAhBgNAAkBB6IAIIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBgIABSARADAIMAQsLC0EAIQcDQAJAQeyADCAHQQJ0akMAAAAAOAIAIAdBAWohByAHQYAgSARADAIMAQsLC0EAIQgDQAJAQfCADSAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBBgIENIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGIgQ0gCkECdGpDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQZCBDSALQQJ0akMAAAAAOAIAIAtBAWohCyALQYCAAkgEQAwCDAELCwtBACEMA0ACQEGYgRUgDEECdGpDAAAAADgCACAMQQFqIQwgDEGAIEgEQAwCDAELCwtBACENA0ACQEGcgRYgDUECdGpDAAAAADgCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAQayBFiAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkBBtIEWIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEG8gRYgEEECdGpDAAAAADgCACAQQQFqIRAgEEGAgAFIBEAMAgwBCwsLQQAhEQNAAkBBxIEaIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBgCBIBEAMAgwBCwsLQQAhEgNAAkBByIEbIBJBAnRqQwAAAAA4AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEHYgRsgE0ECdGpDAAAAADgCACATQQFqIRMgE0ECSARADAIMAQsLC0EAIRQDQAJAQeCBGyAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQQJIBEAMAgwBCwsLQQAhFQNAAkBB6IEbIBVBAnRqQwAAAAA4AgAgFUEBaiEVIBVBgIABSARADAIMAQsLC0EAIRYDQAJAQfCBHyAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQYAQSARADAIMAQsLC0EAIRcDQAJAQfTBHyAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQQJIBEAMAgwBCwsLQQAhGANAAkBB/MEfIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBA0gEQAwCDAELCwtBACEZA0ACQEGIwh8gGUECdGpDAAAAADgCACAZQQFqIRkgGUEDSARADAIMAQsLC0EAIRoDQAJAQZTCHyAaQQJ0akMAAAAAOAIAIBpBAWohGiAaQQNIBEAMAgwBCwsLQQAhGwNAAkBBoMIfIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBA0gEQAwCDAELCwtBACEcA0ACQEHEwh8gHEECdGpDAAAAADgCACAcQQFqIRwgHEEDSARADAIMAQsLC0EAIR0DQAJAQdTCHyAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQQNIBEAMAgwBCwsLQQAhHgNAAkBB4MIfIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BA0gEQAwCDAELCwtBACEfA0ACQEHswh8gH0ECdGpDAAAAADgCACAfQQFqIR8gH0EDSARADAIMAQsLCwu/iICAAABBACABNgIAQQBDAIA7SEMAAIA/QQAoAgCyl5Y4AgRBAEMdQxNGQQAqAgSVEAQ4AghBAEMAAIA/QQAqAgiVOAIMQQBDfFlERUEAKgIEQx1Dk0ZBACoCBJUQA5SVOAIQQQBDAACAP0EAKgIMQQAqAhCSQQAqAgiVQwAAgD+SlTgCFEEAQwAAAEBDAACAP0MAAIA/QQAqAghDAAAAQBAClZOUOAIYQQBDfFlER0EAKgIElRAAOAIcQQBDOIeDPkEAKgIElEMAAAA/ko44AiBBAEMAAAAAQ1UM3UBBACoCIJSTQQAqAgSVOAIkQQBDAACAP0N8WcREQQAqAgSVEASVOAI0QQBDAACAP0EAKgI0QwAAgD+SlTgCOEEAQwAAgD9BACoCNJM4AjxBAEN16d88QQAqAgSUQwAAAD+SjjgC4IAIQQBDAACARkMAAAAAQQAqAiBBACoC4IAIk5eWqDYC5IAIQQBDAAAARkMAAAAAQ83MTD1BACoCBJSXlqg2AuiADEEAQwAAAEVDAAAAAEEAKgLggAhDAACAv5KXlqg2AuyADUEAQzdwVz5BACoCBJRDAAAAP5KOOAL4gA1BAEMAAAAAQ1UM3UBBACoC+IANlJNBACoCBJU4AvyADUEAQ40OyDxBACoCBJRDAAAAP5KOOAKQgRVBAEMAAIBGQwAAAABBACoC+IANQQAqApCBFZOXlqg2ApSBFUEAQwAAAEVDAAAAAEEAKgKQgRVDAACAv5KXlqg2ApiBFkEAQ7TnAj5BACoCBJRDAAAAP5KOOAKkgRZBAEMAAAAAQ1UM3UBBACoCpIEWlJNBACoCBJU4AqiBFkEAQzJzAT1BACoCBJRDAAAAP5KOOAK8gRpBAEMAAABGQwAAAABBACoCpIEWQQAqAryBGpOXlqg2AsCBGkEAQwAAAEVDAAAAAEEAKgK8gRpDAACAv5KXlqg2AsSBG0EAQ9nNHD5BACoCBJRDAAAAP5KOOALQgRtBAEMAAAAAQ1UM3UBBACoC0IEblJNBACoCBJU4AtSBG0EAQ6ispjxBACoCBJRDAAAAP5KOOALogR9BAEMAAABGQwAAAABBACoC0IEbQQAqAuiBH5OXlqg2AuyBH0EAQwAAgERDAAAAAEEAKgLogR9DAACAv5KXlqg2AvDBH0EAQ4Jmd0RBACoCBJUQBDgCrMIfQQBDAACAP0EAKgKswh+VOAKwwh9BAEMB76RDQQAqAgRDgmb3REEAKgIElRADlJU4ArTCH0EAQwAAgD9BACoCsMIfQQAqArTCH5JBACoCrMIflUMAAIA/kpU4ArjCH0EAQwAAAEBDAACAP0MAAIA/QQAqAqzCH0MAAABAEAKVk5Q4ArzCH0EAQQAqArDCH0EAKgK0wh+TQQAqAqzCH5VDAACAP5I4AsDCH0EAQQAqAgxBACoCEJNBACoCCJVDAACAP5I4AtDCHwuQgICAAAAgACABEA0gABAPIAAQDAuWgICAAABBAEMAAMA/OAIoQQBDAADAPzgCSAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwu0j4CAAAEAQQALrQ97Im5hbWUiOiJFS19WZXJiMiIsImZpbGVuYW1lIjoiWml0YVJldmVyYiIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yZXZlcmJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjUxNjQ3MiIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkNMIEdSQU1FIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpR1JBTUUgMjAxMyJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6IlppdGFSZXZlcmIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJCU0QifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkVLX1ZlcmIyIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjEifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJFS19WZXJiMiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTG93IEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL0xvd19GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBsb3ctZnJlcXVlbmN5IGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMS41IiwibWluIjoiMC41IiwibWF4IjoiNiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTWlkIEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL01pZF9GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiI0MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBtaWRkbGUgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIxLjUiLCJtaW4iOiIwLjUiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDEifV19XX0="; }

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

