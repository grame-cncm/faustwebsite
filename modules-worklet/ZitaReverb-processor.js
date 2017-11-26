
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONZitaReverb() {
	return "{\"name\":\"EK_Verb2\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"516480\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"author\":\"CL GRAME\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)GRAME 2013\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"EK_Verb2\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.1\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"EK_Verb2\",\"items\":[{\"type\":\"hslider\",\"label\":\"Low Frequencies Decay Time\",\"address\":\"/EK_Verb2/Low_Frequencies_Decay_Time\",\"index\":\"56\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Mid Frequencies Decay Time\",\"address\":\"/EK_Verb2/Mid_Frequencies_Decay_Time\",\"index\":\"20\",\"meta\":[{\"3\":\"\"},{\"acc\":\"1 1 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"1.5\",\"min\":\"0.5\",\"max\":\"6\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeZitaReverb() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQKzgICAAAUDZW52A2NvcwACA2VudgNleHAAAwNlbnYDcG93AA8DZW52A3NpbgARA2VudgN0YW4AEgOPgICAAA4AAQQFBgcICQoLDA0OEAWHgICAAAEAkICAgAAHuoGAgAAMB2NvbXB1dGUABgxnZXROdW1JbnB1dHMABw1nZXROdW1PdXRwdXRzAAgNZ2V0UGFyYW1WYWx1ZQAJDWdldFNhbXBsZVJhdGUACgRpbml0AAsNaW5zdGFuY2VDbGVhcgAMEWluc3RhbmNlQ29uc3RhbnRzAA0MaW5zdGFuY2VJbml0AA4aaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADw1zZXRQYXJhbVZhbHVlABIGbWVtb3J5AgAKlLOAgAAOgoCAgAAAC42cgIAAAgN/RH1BACEEQQAhBUMAAAAAIQdDAAAAACEIQQAhBkMAAAAAIQlDAAAAACEKQwAAAAAhC0MAAAAAIQxDAAAAACENQwAAAAAhDkMAAAAAIQ9DAAAAACEQQwAAAAAhEUMAAAAAIRJDAAAAACETQwAAAAAhFEMAAAAAIRVDAAAAACEWQwAAAAAhF0MAAAAAIRhDAAAAACEZQwAAAAAhGkMAAAAAIRtDAAAAACEcQwAAAAAhHUMAAAAAIR5DAAAAACEfQwAAAAAhIEMAAAAAISFDAAAAACEiQwAAAAAhI0MAAAAAISRDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSiACQQBqKAIAIQQgA0EAaigCACEFQ28SgzpBACoCFJQhB0NvEoM6QQAqAjiUIQhBACEGA0ACQCAHQ3e+fz9BACoCHJSSIQlBACAJQwAAAAAgCbxBgICA/AdxGzgCGEMAAAA/QwAAwEBBACoCGJaXIQpBACoCECAKlRABIQsgC0MAAABAEAIhDEMAAIA/QQAqAgggDJSTIQ1DAACAPyAMkyEOIA0gDpUhD0MAAAAAIA1DAAAAQBACIA5DAAAAQBAClUMAAIC/kpeRIRBBACoCKEEAKgI0lEEAKgIsQQAqApTCH0EAKgKYwh+SlJIhEUEAIBFDAAAAACARvEGAgID8B3EbOAIwIAhDd75/P0EAKgJAlJIhEkEAIBJDAAAAACASvEGAgID8B3EbOAI8QwAAAD9DAADAQEEAKgI8lpchE0EAKgJIIA8gEJOUIAtBACoClMIfQQAqAjBBACoCECATlRABIAuVQwAAgL+SlJKUIBBDAACAPyAPk5KUkiEUQQAgFEMAAAAAIBS8QYCAgPwHcRs4AkRB0ABBACgCTEH//wFxQQJ0akMAAAA/QQAqAkSUQwjlPB6SOAIAQdiACEEAKAJMQf//AHFBAnRqIAQgBmoqAgA4AgBDmpmZPkHYgAhBACgCTEEAKALYgAxrQf//AHFBAnRqKgIAlCEVQ5qZGT9BACoC5IANlEHQAEEAKAJMQQAoAtSACGtB//8BcUECdGoqAgCSIBWTIRZB3IAMQQAoAkxB/x9xQQJ0aiAWOAIAQdyADEEAKAJMQQAoAtyADWtB/x9xQQJ0aioCACEXQQAgF0MAAAAAIBe8QYCAgPwHcRs4AuCADUMAAAAAQ5qZGT8gFpSTIRggGEMAAAAAIBi8QYCAgPwHcRshGUEAKgLsgA0gCpUQASEaIBpDAAAAQBACIRtDAACAP0EAKgIIIBuUkyEcQwAAgD8gG5MhHSAcIB2VIR5DAAAAACAcQwAAAEAQAiAdQwAAAEAQApVDAACAv5KXkSEfQQAqAihBACoC9IANlEEAKgIsQQAqAvzBH0EAKgKAwh+SlJIhIEEAICBDAAAAACAgvEGAgID8B3EbOALwgA1BACoC/IANIB4gH5OUIBpBACoC/MEfQQAqAvCADUEAKgLsgA0gE5UQASAalUMAAIC/kpSSlCAfQwAAgD8gHpOSlJIhIUEAICFDAAAAACAhvEGAgID8B3EbOAL4gA1BgIENQQAoAkxB//8BcUECdGpDAAAAP0EAKgL4gA2UQwjlPB6SOAIAQYCBDUEAKAJMQQAoAoSBFWtB//8BcUECdGoqAgAgFUOamRk/QQAqApCBFpSSkiEiQYiBFUEAKAJMQf8fcUECdGogIjgCAEGIgRVBACgCTEEAKAKIgRZrQf8fcUECdGoqAgAhI0EAICNDAAAAACAjvEGAgID8B3EbOAKMgRZDAAAAAEOamRk/ICKUkyEkICRDAAAAACAkvEGAgID8B3EbISVBACoCmIEWIAqVEAEhJiAmQwAAAEAQAiEnQwAAgD9BACoCCCAnlJMhKEMAAIA/ICeTISkgKCAplSEqQwAAAAAgKEMAAABAEAIgKUMAAABAEAKVQwAAgL+Sl5EhK0EAKgIoQQAqAqCBFpRBACoCLEEAKgKIwh9BACoCjMIfkpSSISxBACAsQwAAAAAgLLxBgICA/AdxGzgCnIEWQQAqAqiBFiAqICuTlCAmQQAqAojCH0EAKgKcgRZBACoCmIEWIBOVEAEgJpVDAACAv5KUkpQgK0MAAIA/ICqTkpSSIS1BACAtQwAAAAAgLbxBgICA/AdxGzgCpIEWQayBFkEAKAJMQf//AHFBAnRqQwAAAD9BACoCpIEWlEMI5TwekjgCAEGsgRZBACgCTEEAKAKwgRprQf//AHFBAnRqKgIAIBVDmpkZP0EAKgK8gRuUkpMhLkG0gRpBACgCTEH/H3FBAnRqIC44AgBBtIEaQQAoAkxBACgCtIEba0H/H3FBAnRqKgIAIS9BACAvQwAAAAAgL7xBgICA/AdxGzgCuIEbQ5qZGT8gLpQhMCAwQwAAAAAgMLxBgICA/AdxGyExQQAqAsSBGyAKlRABITIgMkMAAABAEAIhM0MAAIA/QQAqAgggM5STITRDAACAPyAzkyE1IDQgNZUhNkMAAAAAIDRDAAAAQBACIDVDAAAAQBAClUMAAIC/kpeRITdBACoCKEEAKgLMgRuUQQAqAixBACoC8MEfQQAqAvTBH5KUkiE4QQAgOEMAAAAAIDi8QYCAgPwHcRs4AsiBG0EAKgLUgRsgNiA3k5QgMkEAKgLwwR9BACoCyIEbQQAqAsSBGyATlRABIDKVQwAAgL+SlJKUIDdDAACAPyA2k5KUkiE5QQAgOUMAAAAAIDm8QYCAgPwHcRs4AtCBG0HYgRtBACgCTEH//wBxQQJ0akMAAAA/QQAqAtCBG5RDCOU8HpI4AgBB2IEbQQAoAkxBACgC3IEfa0H//wBxQQJ0aioCACAVkkOamRk/QQAqAujBH5STITpB4IEfQQAoAkxB/w9xQQJ0aiA6OAIAQeCBH0EAKAJMQQAoAuDBH2tB/w9xQQJ0aioCACE7QQAgO0MAAAAAIDu8QYCAgPwHcRs4AuTBH0OamRk/IDqUITwgPEMAAAAAIDy8QYCAgPwHcRshPSA9IDGSIT5BACoC5IANQQAqApCBFkEAKgK8gRtBACoC6MEfIBkgJSA+kpKSkpKSIT9BACA/QwAAAAAgP7xBgICA/AdxGzgC7MEfQQAqAryBG0EAKgLowR8gPpKSQQAqAuSADUEAKgKQgRYgJSAZkpKSkyFAQQAgQEMAAAAAIEC8QYCAgPwHcRs4AvjBH0EAKgKQgRZBACoC6MEfID0gJZKSkkEAKgLkgA1BACoCvIEbIDEgGZKSkpMhQUEAIEFDAAAAACBBvEGAgID8B3EbOAKEwh9BACoC5IANQQAqAujBHyA9IBmSkpJBACoCkIEWQQAqAryBGyAxICWSkpKTIUJBACBCQwAAAAAgQrxBgICA/AdxGzgCkMIfQQAqAqzCH0EAKgKwwh9BACoCwMIflEEAKgK0wh9BACoCvMIflJKUIUNDpHC9PkEAKgL4wR9BACoChMIfkpQgQ5MhREEAIERDAAAAACBEvEGAgID8B3EbOAK4wh9BACoC1MIfQQAqAuTCH5RBACoC2MIfQQAqAuDCH5SSIUVBACoCuMIfIEOSQQAqAtDCHyBFlJMhRkEAIEZDAAAAACBGvEGAgID8B3EbOALcwh9BACoCrMIfQQAqArTCH0EAKgLswh+UQQAqArDCH0EAKgLwwh+UkpQhR0OkcL0+QQAqAvjBH0EAKgKEwh+TlCBHkyFIQQAgSEMAAAAAIEi8QYCAgPwHcRs4AujCH0EAKgLYwh9BACoC+MIflEEAKgLUwh9BACoC/MIflJIhSUEAKgLowh8gR5JBACoC0MIfIEmUkyFKQQAgSkMAAAAAIEq8QYCAgPwHcRs4AvTCHyAFIAZqQQAqAtzCH0EAKgL0wh+SQQAqAtDCHyBFIEmSlJI4AgBBAEEAKgIYOAIcQQBBACoCMDgCNEEAQQAqAjw4AkBBAEEAKgJEOAJIQQBBACgCTEEBajYCTEEAQQAqAuCADTgC5IANQQBBACoC8IANOAL0gA1BAEEAKgL4gA04AvyADUEAQQAqAoyBFjgCkIEWQQBBACoCnIEWOAKggRZBAEEAKgKkgRY4AqiBFkEAQQAqAriBGzgCvIEbQQBBACoCyIEbOALMgRtBAEEAKgLQgRs4AtSBG0EAQQAqAuTBHzgC6MEfQQBBACoC8MEfOAL0wR9BAEEAKgLswR84AvDBH0EAQQAqAvzBHzgCgMIfQQBBACoC+MEfOAL8wR9BAEEAKgKIwh84AozCH0EAQQAqAoTCHzgCiMIfQQBBACoClMIfOAKYwh9BAEEAKgKQwh84ApTCH0EAQQAqArzCHzgCwMIfQQBBACoCuMIfOAK8wh9BAEEAKgLgwh84AuTCH0EAQQAqAtzCHzgC4MIfQQBBACoC7MIfOALwwh9BAEEAKgLowh84AuzCH0EAQQAqAvjCHzgC/MIfQQBBACoC9MIfOAL4wh8gBkEEaiEGIAZBBCABbEgEQAwCDAELCwsLhYCAgAAAQQEPC4WAgIAAAEEBDwuLgICAAAAgACABaioCAA8LiICAgAAAQQAoAgAPC46AgIAAACAAIAEQBSAAIAEQDgu+jICAAAEff0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEBA0ACQEEYIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEEwIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEE8IANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHEACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQBBADYCTEEAIQUDQAJAQdAAIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBgIACSARADAIMAQsLC0EAIQYDQAJAQdiACCAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQYCAAUgEQAwCDAELCwtBACEHA0ACQEHcgAwgB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAIEgEQAwCDAELCwtBACEIA0ACQEHggA0gCEECdGpDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQfCADSAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBB+IANIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQEGAgQ0gC0ECdGpDAAAAADgCACALQQFqIQsgC0GAgAJIBEAMAgwBCwsLQQAhDANAAkBBiIEVIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBgCBIBEAMAgwBCwsLQQAhDQNAAkBBjIEWIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQEGcgRYgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQaSBFiAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkBBrIEWIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBgIABSARADAIMAQsLC0EAIREDQAJAQbSBGiARQQJ0akMAAAAAOAIAIBFBAWohESARQYAgSARADAIMAQsLC0EAIRIDQAJAQbiBGyASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBByIEbIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQEHQgRsgFEECdGpDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAQdiBGyAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQYCAAUgEQAwCDAELCwtBACEWA0ACQEHggR8gFkECdGpDAAAAADgCACAWQQFqIRYgFkGAEEgEQAwCDAELCwtBACEXA0ACQEHkwR8gF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQezBHyAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQQNIBEAMAgwBCwsLQQAhGQNAAkBB+MEfIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBA0gEQAwCDAELCwtBACEaA0ACQEGEwh8gGkECdGpDAAAAADgCACAaQQFqIRogGkEDSARADAIMAQsLC0EAIRsDQAJAQZDCHyAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQNIBEAMAgwBCwsLQQAhHANAAkBBuMIfIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBA0gEQAwCDAELCwtBACEdA0ACQEHcwh8gHUECdGpDAAAAADgCACAdQQFqIR0gHUEDSARADAIMAQsLC0EAIR4DQAJAQejCHyAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQNIBEAMAgwBCwsLQQAhHwNAAkBB9MIfIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BA0gEQAwCDAELCwsLiYmAgAAAQQAgATYCAEEAQwCAO0hDAACAP0EAKAIAspeWOAIEQQBDfFlER0EAKgIElRAAOAIIQQBDOIeDPkEAKgIElEMAAAA/ko44AgxBAEMAAAAAQ1UM3UBBACoCDJSTQQAqAgSVOAIQQQBDAACAP0N8WcREQQAqAgSVEASVOAIgQQBBACoCIEMAAIA/kjgCJEEAQwAAAABDAACAP0EAKgIgk0EAKgIklZM4AihBAEMAAIA/QQAqAiSVOAIsQQBDdenfPEEAKgIElEMAAAA/ko44AtCACEEAQwAAgEZDAAAAAEEAKgIMQQAqAtCACJOXlqg2AtSACEEAQwAAAEZDAAAAAEPNzEw9QQAqAgSUl5aoNgLYgAxBAEMAAABFQwAAAABBACoC0IAIQwAAgL+Sl5aoNgLcgA1BAEM3cFc+QQAqAgSUQwAAAD+SjjgC6IANQQBDAAAAAENVDN1AQQAqAuiADZSTQQAqAgSVOALsgA1BAEONDsg8QQAqAgSUQwAAAD+SjjgCgIEVQQBDAACARkMAAAAAQQAqAuiADUEAKgKAgRWTl5aoNgKEgRVBAEMAAABFQwAAAABBACoCgIEVQwAAgL+Sl5aoNgKIgRZBAEO05wI+QQAqAgSUQwAAAD+SjjgClIEWQQBDAAAAAENVDN1AQQAqApSBFpSTQQAqAgSVOAKYgRZBAEMycwE9QQAqAgSUQwAAAD+SjjgCrIEaQQBDAAAARkMAAAAAQQAqApSBFkEAKgKsgRqTl5aoNgKwgRpBAEMAAABFQwAAAABBACoCrIEaQwAAgL+Sl5aoNgK0gRtBAEPZzRw+QQAqAgSUQwAAAD+SjjgCwIEbQQBDAAAAAENVDN1AQQAqAsCBG5STQQAqAgSVOALEgRtBAEOorKY8QQAqAgSUQwAAAD+SjjgC2IEfQQBDAAAARkMAAAAAQQAqAsCBG0EAKgLYgR+Tl5aoNgLcgR9BAEMAAIBEQwAAAABBACoC2IEfQwAAgL+Sl5aoNgLgwR9BAEMAAIA/QQAqAgSVOAKcwh9BAEMB76RDQQAqApzCH0OCZvdEQQAqApzCH5QQA5WUOAKgwh9BAEOCZndEQQAqAgSVEAQ4AqTCH0EAQwAAgD9BACoCpMIflTgCqMIfQQBDAACAP0EAKgKgwh9BACoCqMIfkkEAKgKkwh+VQwAAgD+SlTgCrMIfQQBBACoCqMIfQQAqAqDCH5NBACoCpMIflUMAAIA/kjgCsMIfQQBDAAAAQEMAAIA/QwAAgD9BACoCpMIfQwAAAEAQApWTlDgCtMIfQQBDfFlERUEAKgKcwh9DHUOTRkEAKgKcwh+UEAOVlDgCxMIfQQBDHUMTRkEAKgIElRAEOALIwh9BAEMAAIA/QQAqAsjCH5U4AszCH0EAQwAAgD9BACoCxMIfQQAqAszCH5JBACoCyMIflUMAAIA/kpU4AtDCH0EAQQAqAszCH0EAKgLEwh+TQQAqAsjCH5VDAACAP5I4AtTCH0EAQwAAAEBDAACAP0MAAIA/QQAqAsjCH0MAAABAEAKVk5Q4AtjCHwuQgICAAAAgACABEA0gABAPIAAQDAuWgICAAABBAEMAAMA/OAIUQQBDAADAPzgCOAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwv/i4CAAAEAQQAL+At7Im5hbWUiOiJFS19WZXJiMiIsInZlcnNpb24iOiIyLjUuNyIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiNTE2NDgwIiwiaW5wdXRzIjoiMSIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiQ0wgR1JBTUUifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiIoYylHUkFNRSAyMDEzIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJCU0QifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkVLX1ZlcmIyIn0seyJyZXZlcmJzLmxpYi9uYW1lIjoiRmF1c3QgUmV2ZXJiIExpYnJhcnkifSx7InJldmVyYnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJvdXRlcy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InJvdXRlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjEifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJFS19WZXJiMiIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTG93IEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL0xvd19GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiI1NiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBsb3ctZnJlcXVlbmN5IGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMS41IiwibWluIjoiMC41IiwibWF4IjoiNiIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTWlkIEZyZXF1ZW5jaWVzIERlY2F5IFRpbWUiLCJhZGRyZXNzIjoiL0VLX1ZlcmIyL01pZF9GcmVxdWVuY2llc19EZWNheV9UaW1lIiwiaW5kZXgiOiIyMCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBtaWRkbGUgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIxLjUiLCJtaW4iOiIwLjUiLCJtYXgiOiI2Iiwic3RlcCI6IjAuMDEifV19XX0w"; }

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
faust.ZitaReverb_instance = null;

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
        ZitaReverbProcessor.parse_ui(JSON.parse(getJSONZitaReverb()).ui, params, ZitaReverbProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONZitaReverb());
        
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
        
        this.factory = faust.ZitaReverb_instance.exports;
        this.HEAP = faust.ZitaReverb_instance.exports.memory.buffer;
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
            ZitaReverbProcessor.parse_ui(this.json_object.ui, this, ZitaReverbProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeZitaReverb()), faust.importObject)
            .then(dsp_module => {
                  faust.ZitaReverb_instance = dsp_module.instance;
                  registerProcessor('ZitaReverb', ZitaReverbProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust ZitaReverb cannot be loaded or compiled"); });
