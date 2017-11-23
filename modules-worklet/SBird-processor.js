
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262208\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262236\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "AGFzbQEAAAAB4YCAgAASYAJ/fwBgBH9/f38AYAJ9fQF9YAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gAn19AX1gA39/fQBgAX0BfWABfQF9AseAgIAABAhhc20yd2FzbQRmbW9kAAILZ2xvYmFsLk1hdGgDcG93AA4LZ2xvYmFsLk1hdGgDc2luABALZ2xvYmFsLk1hdGgDdGFuABEDj4CAgAAOAAEDBAUGBwgJCgsMDQ8Fh4CAgAABAIiAgIAAB7qBgIAADAdjb21wdXRlAAUMZ2V0TnVtSW5wdXRzAAYNZ2V0TnVtT3V0cHV0cwAHDWdldFBhcmFtVmFsdWUACA1nZXRTYW1wbGVSYXRlAAkEaW5pdAAKDWluc3RhbmNlQ2xlYXIACxFpbnN0YW5jZUNvbnN0YW50cwAMDGluc3RhbmNlSW5pdAANGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA4Nc2V0UGFyYW1WYWx1ZQARBm1lbW9yeQIACqnGgIAADpSBgIAAAQJ/QQAhAkEAIQFBACEBA0ACQEH8hBEgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQQBBACgCgIURQQFqNgL8hBFBACACQQJ0akPbD8k4QQAoAvyEEUF/arKUEAI4AgBBAEEAKAL8hBE2AoCFESACQQFqIQIgAkGBgARIBEAMAgwBCwsLC/6ogIAAAiF/QH1BACEEQQAhBUMAAAAAISVDAAAAACEmQQAhBkMAAAAAISdDAAAAACEoQQAhB0MAAAAAISlBACEIQwAAAAAhKkMAAAAAIStBACEJQwAAAAAhLEMAAAAAIS1DAAAAACEuQQAhCkMAAAAAIS9BACELQwAAAAAhMEEAIQxDAAAAACExQQAhDUMAAAAAITJBACEOQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdBACEPQwAAAAAhOEEAIRBDAAAAACE5QQAhEUMAAAAAITpBACESQwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQQAhE0MAAAAAIUdDAAAAACFIQQAhFEMAAAAAIUlBACEVQwAAAAAhSkMAAAAAIUtDAAAAACFMQQAhFkMAAAAAIU1DAAAAACFOQwAAAAAhT0MAAAAAIVBDAAAAACFRQwAAAAAhUkEAIRdDAAAAACFTQwAAAAAhVEEAIRhDAAAAACFVQwAAAAAhVkEAIRlDAAAAACFXQQAhGkMAAAAAIVhBACEbQwAAAAAhWUEAIRxDAAAAACFaQQAhHUMAAAAAIVtBACEeQwAAAAAhXEEAIR9DAAAAACFdQwAAAAAhXkMAAAAAIV9DAAAAACFgQwAAAAAhYUEAISBDAAAAACFiQwAAAAAhY0MAAAAAIWRBAyEhQQMhIkEDISNBAyEkIANBAGooAgAhBCADQQRqKAIAIQVDbxKDOkEAKgLAgBCUISVDrMUnN0EAKgLcgBCUISZBACEGA0ACQEEAQQE2AoSAECAlQ3e+fz9BACoCyIAQlJIhJ0EAICdDAAAAACAnvEGAgID8B3EbOALEgBBBAEEAKAKIgBBBACgC0IAQakEAKgK8gBBBACoCxIAQlahvNgLMgBBBAEHtnJmOBEEAKALYgBBsQbngAGo2AtSAECAmQ3e+fz9BACoC5IAQlJIhKEEAIChDAAAAACAovEGAgID8B3EbOALggBBBACgCzIAQQQBGQwAAADBBACgC1IAQspSLQQAqAuCAEF9sIQdBACAHNgLogBBBACoC9IAQIAdBACgC7IAQa7JDAAAAAF6ykkOrqqo8QQAqAvSAEEMAAAAAXrKUkyEpQQAgKUMAAAAAICm8QYCAgPwHcRs4AvCAEEEAKgLwgBBDAAAAAF4hCEOzIztFQQAqAoCBEEEAKgKEgRCSlKhB7akCarJDAEA1RRAAISpBACAqQwAAAAAgKrxBgICA/AdxGzgC+IAQQQAqAviAEEMAAMhCkkEAKgKMgRAgCBshK0EAICtDAAAAACArvEGAgID8B3EbOAKIgRBBACoCuIAQQQAqAoiBEEMAAIC/kouUqCEJQQAgCTYCkIEQQQAgCUEAKAKUgRBGQQAoApyBEEEBamw2ApiBEEOzIztFQQAqAqyBEEEAKgKwgRCSlKhB7akCarJDAAD6RBAAISxBACAsQwAAAAAgLLxBgICA/AdxGzgCpIEQQQAqAqSBEEEAKgK4gRAgCBshLUEAIC1DAAAAACAtvEGAgID8B3EbOAK0gRBBACoCtIEQQwAAgL+SiyEuQQBBACgCmIEQQQAoAsCBEEEAKAKYgRCyQQAqAqCBECAulF0bNgK8gRBBACgCvIEQskEAKgLggRAgLpRdIQpBACoC5IEQIC6UIS9BACgCvIEQsiAvXSELQQAqAuyBECAulCEwQQAoAryBELIgMF0hDEEAKgL0gRAgLpQhMUEAKAK8gRCyIDFdIQ1BACoC/IEQIC6UITJBACgCvIEQsiAyXSEOQ3e+fz9BACoCjIIQlENvEoM6QwAAAABBACoChIIQQQAoAryBELIgLpWUQwAAgD8gDhtBACgCvIEQQQBIG0EAKgKAghBDAAAAAEEAKAK8gRCyIDKTkyAulZRDAACAP5JDAAAAACANGyAOG0EAKgL4gRBBACgCvIEQsiAxkyAulZRDaJFtPyAMGyANG0EAKgLwgRBDAAAAAEPRIts+QQAoAryBELIgMJOUkyAulZRDaJFtP5JDAAAAPyALGyAMG0EAKgLogRBDAAAAAEMAAAA/QQAoAryBELIgL5OUkyAulZRDAAAAP5JDAAAAACAKGyALG0MAAAAAIAobQwAAAABBACgCvIEQskEAKgLcgRAgLpRdG0MAAAAAQQAoAryBELJBACoC2IEQIC6UXRtDAAAAAEEAKAK8gRCyQQAqAtSBECAulF0bQwAAAABBACgCvIEQskEAKgLQgRAgLpRdG0MAAAAAQQAoAryBELJBACoCzIEQIC6UXRtDAAAAAEEAKAK8gRCyQQAqAsiBECAulF0bQwAAAABBACgCvIEQskEAKgLEgRAgLpRdG5SSITNBACAzQwAAAAAgM7xBgICA/AdxGzgCiIIQQQAqArCAEEEAKgKUghCUQQAqArSAEEEAKgKIghBBACoCjIIQkpSSITRBACA0QwAAAAAgNLxBgICA/AdxGzgCkIIQQ7MjO0VBACoCpIIQQQAqAqiCEJKUqEHtqQJqskMAALBBEAAhNUEAIDVDAAAAACA1vEGAgID8B3EbOAKcghBBACoCnIIQQwAAkEKSQQAqArCCECAIGyE2QQAgNkMAAAAAIDa8QYCAgPwHcRs4AqyCEEMAAABAQ6uqqj1BACoCrIIQQwAAgL+Si0MAAIrCkpQQASE3QQBBACgCmIEQQQAoAsiCEEEAKAKYgRCyQQAqAsCCECAulF0bNgLEghBBACgCxIIQskEAKgLMghAgLpRdIQ9BACoC0IIQIC6UIThBACgCxIIQsiA4XSEQQQAqAtiCECAulCE5QQAoAsSCELIgOV0hEUEAKgLgghAgLpQhOkEAKALEghCyIDpdIRJDd75/P0EAKgLwghCUQ28SgzpDAAAAAEEAKgLoghBBACgCxIIQsiAulZRDSOH6PiASG0EAKALEghBBAEgbQQAqAuSCEEMAAAAAQ0jh+j5BACgCxIIQsiA6k5STIC6VlENI4fo+kkMAAAAAIBEbIBIbQQAqAtyCEEEAKALEghCyIDmTIC6VlEMAAIA/IBAbIBEbQQAqAtSCEEMAAAAAQQAoAsSCELIgOJOTIC6VlEMAAIA/kkMAAAAAIA8bIBAbQwAAAAAgDxuUkiE7QQAgO0MAAAAAIDu8QYCAgPwHcRs4AuyCEEEAKgKwgBBBACoC+IIQlEEAKgK0gBBBACoC7IIQQQAqAvCCEJKUkiE8QQAgPEMAAAAAIDy8QYCAgPwHcRs4AvSCEEEAKgL0ghBDAACAP5IhPUOPwt1BIDcgPZSUQ3OXu0GXIT5DAACgQSA+i5chP0EAID84AvyCEEEAKgKIgxBBACoCvIIQQQAqAoCDEJSSIUAgQCBAjpMhQUEAIEFDAAAAACBBvEGAgID8B3EbOAKEgxBDAAAAQEEAKgKEgxCUIUIgQkMAAIC/kkMAAEBAEAEhQ0EAIENDAACAPyBCk5I4AoyDECBDQwAAgD8gQkEAKgKQgxCSk5IgP5UhREEAIEQ4ApSDEEEAKAKMgBCyIERBACoCmIMQk5QgP5UhRUGggxBBACgCnIMQQf8fcUECdGogRTgCAEMAAAAAQwDg/0RBACoCoIMRID6VlpchRiBGqCETIEaOIUdDd75/P0EAKgKogxGUQQAqAriCECBFQaCDEEEAKAKcgxAgE2tB/x9xQQJ0aioCACBHQwAAgD8gRpOSlJMgRiBHk0GggxBBACgCnIMQIBNBAWprQf8fcUECdGoqAgCUk5SSIUhBACBIQwAAAAAgSLxBgICA/AdxGzgCpIMRQQBBACgCmIEQQQAoArSDEUEAKAKYgRCyQQAqAqyDESAulF0bNgKwgxFBACgCsIMRskEAKgK4gxEgLpRdIRRBACoCvIMRIC6UIUlBACgCsIMRsiBJXSEVQ3e+fz9BACoCzIMRlENvEoM6QwAAAABBACoCxIMRQQAoArCDEbIgLpWUQ/LSDT8gFRtBACgCsIMRQQBIG0EAKgLAgxFDAAAAAEPy0g0/QQAoArCDEbIgSZOUkyAulZRD8tINP5JDAAAAACAUGyAVG0MAAAAAIBQblJIhSkEAIEpDAAAAACBKvEGAgID8B3EbOALIgxFBACoCsIAQQQAqAtSDEZRBACoCtIAQQQAqAsiDEUEAKgLMgxGSlJIhS0EAIEtDAAAAACBLvEGAgID8B3EbOALQgxFBAEEAKAKYgRBBACgC4IMRQQAoApiBELJBACoC2IMRIC6UXRs2AtyDEUEAKgLkgxEgLpQhTEEAKALcgxGyIExdIRZDsyM7RUEAKgL0gxFBACoC+IMRkpSoQe2pAmqyQwAAekQQACFNQQAgTUMAAAAAIE28QYCAgPwHcRs4AuyDEUEAKgLsgxFBACoCgIQRIAgbIU5BACBOQwAAAAAgTrxBgICA/AdxGzgC/IMRQQAqAvyDEUMAAIC/koshT0NvEoM6IE+UIVBDAAAAACBQkyFRQQAqAoiEESAulCFSQQAoAtyDEbIgUl0hFyBQQwAAgL+SIVNBACoCkIQRIC6UIVRBACgC3IMRsiBUXSEYQwAAgD8gUJMhVUEAKgKYhBEgLpQhVkEAKALcgxGyIFZdIRlBACoCoIQRIC6UIVdBACgC3IMRsiBXXSEaQQAqAqiEESAulCFYQQAoAtyDEbIgWF0hG0EAKgKwhBEgLpQhWUEAKALcgxGyIFldIRxBACoCuIQRIC6UIVpBACgC3IMRsiBaXSEdQQAqAsCEESAulCFbQQAoAtyDEbIgW10hHkEAKgLIhBEgLpQhXEEAKALcgxGyIFxdIR9Dd75/P0EAKgLYhBGUQ28SgzpDAAAAAEEAKgLQhBFBACgC3IMRsiAulZRDAACAPyAfG0EAKALcgxFBAEgbQQAqAsyEEUMAAAAAQQAoAtyDEbIgXJOTIC6VlEMAAIA/kkMAAAAAIB4bIB8bQQAqAsSEESBPQQAoAtyDEbIgW5OUIC6VlCBQIB0bIB4bIFBBACoCvIQRIFFBACgC3IMRsiBak5QgLpWUkkMAAAAAIBwbIB0bQQAqArSEEUEAKALcgxGyIFmTIC6VlEM/Nd4+IBsbIBwbQQAqAqyEEUEAKALcgxGyIFiTIFBDPzXevpKUIC6VlEM/Nd4+kiBQIBobIBsbIFBBACoCpIQRIFVBACgC3IMRsiBXk5QgLpWUkkMAAIA/IBkbIBobQQAqApyEESBTQQAoAtyDEbIgVpOUIC6VlEMAAIA/kiBQIBgbIBkbIFBBACoClIQRQQAoAtyDEbIgVJMgVZQgLpWUkkMAAIA/IBcbIBgbQQAqAoyEEUEAKALcgxGyIFKTIFOUIC6VlEMAAIA/kiBQIBYbIBcbIFBBACoChIQRQQAoAtyDEbIgTJMgUZQgLpWUkkMAAAAAQQAoAtyDEbJBACoC6IMRIC6UXRsgFhuUkiFdQQAgXUMAAAAAIF28QYCAgPwHcRs4AtSEEUEAKgKwgBBBACoC4IQRlEEAKgK0gBBBACoC1IQRQQAqAtiEEZKUkiFeQQAgXkMAAAAAIF68QYCAgPwHcRs4AtyEEUEAKgLohBFBACoCmIIQIDdBACoCtIIQQQAqAqSDESA9lEEAKgLQgxFDAACAP5KUlEMAANxDkpRBACoC3IQRQwAAgD+SlJSSIV8gXyBfjpMhYEEAIGBDAAAAACBgvEGAgID8B3EbOALkhBFDAACAR0EAKgLkhBGUIWEgYaghIEEAKgKQghBBACAgQQJ0aioCACBhIGGOk0EAICBBAWpBAnRqKgIAQQAgIEECdGoqAgCTlJKUIWJBACBiOALshBFBACoCoIAQQQAqAviEEZRBACoCpIAQIGJBACoC8IQRkpSSIWNBACBjQwAAAAAgY7xBgICA/AdxGzgC9IQRQ83MTD9BACoC9IQRlCFkIAQgBmogZDgCACAFIAZqIGQ4AgBBAEEAKAKIgBA2AoyAEEEAQQAoAoSAEDYCiIAQQQBBACoCxIAQOALIgBBBAEEAKALMgBA2AtCAEEEAQQAoAtSAEDYC2IAQQQBBACoC4IAQOALkgBBBAEEAKALogBA2AuyAEEEAQQAqAvCAEDgC9IAQQQMhIQNAAkBB+IAQICFBAnRqQfiAECAhQQFrQQJ0aioCADgCACAhQQFrISEgIUEASgRADAIMAQsLC0EAQQAqAoiBEDgCjIEQQQBBACgCkIEQNgKUgRBBAEEAKAKYgRA2ApyBEEEDISIDQAJAQaSBECAiQQJ0akGkgRAgIkEBa0ECdGoqAgA4AgAgIkEBayEiICJBAEoEQAwCDAELCwtBAEEAKgK0gRA4AriBEEEAQQAoAryBEDYCwIEQQQBBACoCiIIQOAKMghBBAEEAKgKQghA4ApSCEEEDISMDQAJAQZyCECAjQQJ0akGcghAgI0EBa0ECdGoqAgA4AgAgI0EBayEjICNBAEoEQAwCDAELCwtBAEEAKgKsghA4ArCCEEEAQQAoAsSCEDYCyIIQQQBBACoC7IIQOALwghBBAEEAKgL0ghA4AviCEEEAQQAqAvyCEDgCgIMQQQBBACoChIMQOAKIgxBBAEEAKgKMgxA4ApCDEEEAQQAqApSDEDgCmIMQQQBBACgCnIMQQQFqNgKcgxBBAEEAKgKkgxE4AqiDEUEAQQAoArCDETYCtIMRQQBBACoCyIMROALMgxFBAEEAKgLQgxE4AtSDEUEAQQAoAtyDETYC4IMRQQMhJANAAkBB7IMRICRBAnRqQeyDESAkQQFrQQJ0aioCADgCACAkQQFrISQgJEEASgRADAIMAQsLC0EAQQAqAvyDETgCgIQRQQBBACoC1IQROALYhBFBAEEAKgLchBE4AuCEEUEAQQAqAuSEETgC6IQRQQBBACoC7IQROALwhBFBAEEAKgL0hBE4AviEESAGQQRqIQYgBkEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuKgICAAABBACgCkIAQDwuOgICAAAAgACABEAQgACABEA0Lgo+AgAABJn9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAIQEDQAJAQYSAECABQQJ0akEANgIAIAFBAWohASABQQNIBEAMAgwBCwsLQQAhAgNAAkBBxIAQIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQEHMgBAgA0ECdGpBADYCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAQdSAECAEQQJ0akEANgIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB4IAQIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHogBAgBkECdGpBADYCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQfCAECAHQQJ0akMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBB+IAQIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBBEgEQAwCDAELCwtBACEJA0ACQEGIgRAgCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQZCBECAKQQJ0akEANgIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBmIEQIAtBAnRqQQA2AgAgC0EBaiELIAtBAkgEQAwCDAELCwtBACEMA0ACQEGkgRAgDEECdGpDAAAAADgCACAMQQFqIQwgDEEESARADAIMAQsLC0EAIQ0DQAJAQbSBECANQQJ0akMAAAAAOAIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBBvIEQIA5BAnRqQQA2AgAgDkEBaiEOIA5BAkgEQAwCDAELCwtBACEPA0ACQEGIghAgD0ECdGpDAAAAADgCACAPQQFqIQ8gD0ECSARADAIMAQsLC0EAIRADQAJAQZCCECAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBBnIIQIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBBEgEQAwCDAELCwtBACESA0ACQEGsghAgEkECdGpDAAAAADgCACASQQFqIRIgEkECSARADAIMAQsLC0EAIRMDQAJAQcSCECATQQJ0akEANgIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQAhFANAAkBB7IIQIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBAkgEQAwCDAELCwtBACEVA0ACQEH0ghAgFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfyCECAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBBhIMQIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBAkgEQAwCDAELCwtBACEYA0ACQEGMgxAgGEECdGpDAAAAADgCACAYQQFqIRggGEECSARADAIMAQsLC0EAIRkDQAJAQZSDECAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQBBADYCnIMQQQAhGgNAAkBBoIMQIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBgCBIBEAMAgwBCwsLQQAhGwNAAkBBpIMRIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQEGwgxEgHEECdGpBADYCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAQciDESAdQQJ0akMAAAAAOAIAIB1BAWohHSAdQQJIBEAMAgwBCwsLQQAhHgNAAkBB0IMRIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BAkgEQAwCDAELCwtBACEfA0ACQEHcgxEgH0ECdGpBADYCACAfQQFqIR8gH0ECSARADAIMAQsLC0EAISADQAJAQeyDESAgQQJ0akMAAAAAOAIAICBBAWohICAgQQRIBEAMAgwBCwsLQQAhIQNAAkBB/IMRICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEHUhBEgIkECdGpDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQdyEESAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkBB5IQRICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEHshBEgJUECdGpDAAAAADgCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAQfSEESAmQQJ0akMAAAAAOAIAICZBAWohJiAmQQJIBEAMAgwBCwsLC9GLgIAAAEEAIAE2ApCAEEEAQwCAO0hDAACAP0EAKAKQgBCyl5Y4ApSAEEEAQwAAgD9D2m/1RUEAKgKUgBCVEAOVOAKYgBBBAEEAKgKYgBBDAACAP5I4ApyAEEEAQwAAAABDAACAP0EAKgKYgBCTQQAqApyAEJWTOAKggBBBAEMAAIA/QQAqApyAEJU4AqSAEEEAQwAAgD9DHUMTRkEAKgKUgBCVEAOVOAKogBBBAEEAKgKogBBDAACAP5I4AqyAEEEAQwAAAABDAACAP0EAKgKogBCTQQAqAqyAEJWTOAKwgBBBAEMAAIA/QQAqAqyAEJU4ArSAEEEAQ28SgzpBACoClIAQlDgCuIAQQQBDAABwQkEAKgKUgBCUOAK8gBBBAEPQfiQ7QQAqApSAEJQ4AqCBEEEAQzdxDztBACoClIAQlDgCxIEQQQBDwNwIO0EAKgKUgBCUOALIgRBBAENRgu86QQAqApSAEJQ4AsyBEEEAQzH75DpBACoClIAQlDgC0IEQQQBDlgfIOkEAKgKUgBCUOALUgRBBAEOHV7A6QQAqApSAEJQ4AtiBEEEAQ4p+izpBACoClIAQlDgC3IEQQQBDaveAOkEAKgKUgBCUOALggRBBAENN+TI6QQAqApSAEJQ4AuSBEEEAQ/h/T0VBACoClIAQlTgC6IEQQQBDcKcYOkEAKgKUgBCUOALsgRBBAEPYnxtGQQAqApSAEJU4AvCBEEEAQw4k8jlBACoClIAQlDgC9IEQQQBDKrPwRUEAKgKUgBCVOAL4gRBBAENIq3w4QQAqApSAEJQ4AvyBEEEAQwugG0VBACoClIAQlTgCgIIQQQBD+6+BRkEAKgKUgBCVOAKEghBBAEMAAIA/QQAqApSAEJU4ApiCEEEAQyegs0NBACoClIAQlTgCtIIQQQBDq6oqPUEAKgKUgBBDAAAAQBABlDgCuIIQQQBDAACAP0EAKgKUgBCVOAK8ghBBAEOJ0t46QQAqApSAEJQ4AsCCEEEAQ0LS1zpBACoClIAQlDgCzIIQQQBD8xOrOkEAKgKUgBCUOALQghBBAEOnFjdFQQAqApSAEJU4AtSCEEEAQyvBYjpBACoClIAQlDgC2IIQQQBDYvkNRUEAKgKUgBCVOALcghBBAENrWWI6QQAqApSAEJQ4AuCCEEEAQ+jqHUlBACoClIAQlTgC5IIQQQBDP98NREEAKgKUgBCVOALoghBBAEMAAAA/QQAqApSAEJQ4AqCDEUEAQ+AtEDpBACoClIAQlDgCrIMRQQBDN50DOkEAKgKUgBCUOAK4gxFBAENIq3w5QQAqApSAEJQ4AryDEUEAQ0Reb0VBACoClIAQlTgCwIMRQQBDlLEPRUEAKgKUgBCVOALEgxFBAEOpM3c6QQAqApSAEJQ4AtiDEUEAQ9F+WTpBACoClIAQlDgC5IMRQQBDAkp3OkEAKgKUgBCUOALogxFBAEOKeglGQQAqApSAEJU4AoSEEUEAQ12JUzpBACoClIAQlDgCiIQRQQBDydgrR0EAKgKUgBCVOAKMhBFBAEOPszs6QQAqApSAEJQ4ApCEEUEAQ8nYK0ZBACoClIAQlTgClIQRQQBD9s0sOkEAKgKUgBCUOAKYhBFBAEOKeolGQQAqApSAEJU4ApyEEUEAQw/jIDpBACoClIAQlDgCoIQRQQBDydirRkEAKgKUgBCVOAKkhBFBAEMcHQA6QQAqApSAEJQ4AqiEEUEAQ8P1+UVBACoClIAQlTgCrIQRQQBDB2/iOUEAKgKUgBCUOAKwhBFBAEO4qe5FQQAqApSAEJU4ArSEEUEAQ4PYpjlBACoClIAQlDgCuIQRQQBDOnoJRkEAKgKUgBCVOAK8hBFBAEM4mUo5QQAqApSAEJQ4AsCEEUEAQ4T1/0BBACoClIAQlTgCxIQRQQBDm+0aOUEAKgKUgBCUOALIhBFBAEPJ2KtGQQAqApSAEJU4AsyEEUEAQyaB00VBACoClIAQlTgC0IQRC5CAgIAAACAAIAEQDCAAEA4gABALC5qAgIAAAEEAQwAAcEM4AsCAEEEAQwAASEI4AtyAEAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvNiYCAAAEAQQALxgl7Im5hbWUiOiJiaXJkIiwidmVyc2lvbiI6IjIuNS40Iiwib3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsInNpemUiOiIyNzkxNzIiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJQaWVycmUgQ29jaGFyZCJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImJpcmQifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJCaXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJTcGVlZCAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvU3BlZWRfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMDgiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjI0MCIsIm1pbiI6IjEyMCIsIm1heCI6IjQ4MCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcm9iYWJpbGl0eSAoR3JhbnVsYXRvcikiLCJhZGRyZXNzIjoiL0JpcmQvUHJvYmFiaWxpdHlfKEdyYW51bGF0b3IpIiwiaW5kZXgiOiIyNjIyMzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI1MCIsIm1pbiI6IjI1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX0w"; }

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
faust.SBird_instance = null;

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
            SBirdProcessor.parse_items(item.items, obj, callback);
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
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSBird());
        
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
        
        this.factory = faust.SBird_instance.exports;
        this.HEAP = faust.SBird_instance.exports.memory.buffer;
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
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSBird()), faust.importObject)
            .then(dsp_module => {
                  faust.SBird_instance = dsp_module.instance;
                  registerProcessor('SBird', SBirdProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust SBird cannot be loaded or compiled"); });
