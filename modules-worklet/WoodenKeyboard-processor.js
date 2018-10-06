
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONWoodenKeyboard() {
	return "{\"name\":\"Wooden Keyboard\",\"filename\":\"WoodenKeyboard\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"295332\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filename\":\"WoodenKeyboard\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Wooden Keyboard\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Wooden Keyboard\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/Wooden_Keyboard/Instrument_Hand\",\"index\":\"262160\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Hight\",\"address\":\"/Wooden_Keyboard/Hight\",\"index\":\"262220\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 30\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.3\"},{\"type\":\"hslider\",\"label\":\"Note Duration (BPF Envelope)\",\"address\":\"/Wooden_Keyboard/Note_Duration_(BPF_Envelope)\",\"index\":\"262184\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"unit\":\"s\"}],\"init\":\"0.2\",\"min\":\"0.1\",\"max\":\"0.5\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Echo Intensity\",\"address\":\"/Wooden_Keyboard/Echo_Intensity\",\"index\":\"262540\",\"meta\":[{\"4\":\"\"},{\"acc\":\"1 1 -10 0 15\"}],\"init\":\"0.1\",\"min\":\"0.01\",\"max\":\"0.9\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeWoodenKeyboard() { return "AGFzbQEAAAAB1YCAgAAQYAJ/fwBgBH9/f38AYAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gA39/fQBgAX0BfWABfQF9ApmAgIAAAgNlbnYFX3NpbmYADgNlbnYFX3RhbmYADwOPgICAAA4AAQIDBAUGBwgJCgsMDQWHgICAAAEAiICAgAAHuoGAgAAMB2NvbXB1dGUAAwxnZXROdW1JbnB1dHMABA1nZXROdW1PdXRwdXRzAAUNZ2V0UGFyYW1WYWx1ZQAGDWdldFNhbXBsZVJhdGUABwRpbml0AAgNaW5zdGFuY2VDbGVhcgAJEWluc3RhbmNlQ29uc3RhbnRzAAoMaW5zdGFuY2VJbml0AAsaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADA1zZXRQYXJhbVZhbHVlAA8GbWVtb3J5AgAK4c2AgAAOlIGAgAABAn9BACEDQQAhAkEAIQIDQAJAQZyDEiACQQJ0akEANgIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBAEEAKAKggxJBAWo2ApyDEkEAIANBAnRqQ9sPyThBACgCnIMSQX9qspQQADgCAEEAQQAoApyDEjYCoIMSIANBAWohAyADQYCABEgEQAwCDAELCwsLyLeAgAACUH8qfUEAIQRDAAAAACFUQQAhBUMAAAAAIVVDAAAAACFWQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQwAAAAAhV0EAIQ9DAAAAACFYQQAhEEEAIRFBACESQQAhE0MAAAAAIVlBACEUQQAhFUMAAAAAIVpBACEWQQAhF0MAAAAAIVtBACEYQQAhGUMAAAAAIVxBACEaQQAhG0MAAAAAIV1BACEcQQAhHUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRDAAAAACFlQwAAAAAhZkEAIR5BACEfQQAhIEEAISFBACEiQQAhI0MAAAAAIWdDAAAAACFoQwAAAAAhaUMAAAAAIWpDAAAAACFrQQAhJEEAISVBACEmQQAhJ0EAIShBACEpQwAAAAAhbEMAAAAAIW1BACEqQQAhK0EAISxBACEtQQAhLkEAIS9DAAAAACFuQwAAAAAhb0EAITBBACExQQAhMkEAITNBACE0QQAhNUMAAAAAIXBDAAAAACFxQQAhNkEAITdBACE4QQAhOUEAITpBACE7QwAAAAAhckMAAAAAIXNBACE8QQAhPUEAIT5BACE/QQAhQEEAIUFDAAAAACF0QwAAAAAhdUEAIUJBACFDQQAhREEAIUVBACFGQQAhR0MAAAAAIXZDAAAAACF3QQAhSEEAIUlBACFKQQAhS0EAIUxBACFNQwAAAAAheEMAAAAAIXlBACFOQQAhT0EAIVBBACFRQQAhUkEAIVNDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9IANBAGooAgAhBEEAKgKQgBAhVCBUQwAAgMCSi0MAAAA/XSEFQQAqAqSAEEEAKgKogBCUIVVDCtcjPEEAKgLMgBCUIVYgVEMAAIC/kotDAAAAP10hBiBUQwAAAMCSi0MAAAA/XSEHIFRDAABAwJKLQwAAAD9dIQggVEMAAKDAkotDAAAAP10hCSBUQwAAwMCSi0MAAAA/XSEKIFRDAADgwJKLQwAAAD9dIQsgVEMAAADBkotDAAAAP10hDCBUQwAAEMGSi0MAAAA/XSENIFRDAAAgwZKLQwAAAD9dIQ5DbxKDOkEAKgKMgxCUIVdBACEPA0ACQEEAIAU2ApSAEEEAQQAoAqCAEEEBakEBIAVBACgCmIAQSmtsNgKcgBAgVUN3vn8/QQAqArCAEJSSIVhBACBYQwAAAAAgWLxBgICA/AdxGzgCrIAQQwDQiUVDAEQsR0EAKgKsgBCWl6ghEEMAAIA6Qf4FIBBsspSoIRFBACgCnIAQIBFIIRJDAACAOkGACCAQbLKUqCETIBMgEWuyIVlDAACAOkH7AyAQbLKUqCEUQQAoApyAECAUSCEVIBEgFGuyIVpDAACAOkH4ASAQbLKUqCEWQQAoApyAECAWSCEXIBQgFmuyIVtDAACAOkEKIBBsspSoIRhBACgCnIAQIBhIIRkgFiAYa7IhXEMAAIA6QQQgEGyylKghGkEAKAKcgBAgGkghGyAYIBprsiFdQwAAgDpBAiAQbLKUqCEcQQAoApyAECAcSCEdIBogHGuyIV4gHLIhX0MAAAAAQwAAgD5BACgCnIAQsiBflZRDAACAPiAdG0EAKAKcgBBBAEgbQwAAgD5BACgCnIAQIBxrsiBelUMAAIA/kpRDAAAAPyAbGyAdG0PNzMw+QQAoApyAECAaa7IgXZWUQwAAAD+SQ2ZmZj8gGRsgGxtDAAAAAENmZiY/QQAoApyAECAYa7KUkyBclUNmZmY/kkMAAIA+IBcbIBkbQwAAAABDmpkZPkEAKAKcgBAgFmuylJMgW5VDAACAPpJDzczMPSAVGyAXG0MAAAAAQ83MTD1BACgCnIAQIBRrspSTIFqVQ83MzD2SQ83MTD0gEhsgFRtDAAAAAEPNzEw9QQAoApyAECARa7KUkyBZlUPNzEw9kkMAAAAAQQAoApyAECATSBsgEhshYEEAIGA4ArSAEEEAKgKMgBAgYEEAKgK4gBCSQQAqAryAEEEAKgLEgBCUk5QhYUEAIGFDAAAAACBhvEGAgID8B3EbOALAgBAgVkOkcH0/QQAqAtSAEJSSIWJBACBiQwAAAAAgYrxBgICA/AdxGzgC0IAQQwAAgD9DAABAQUEAKgLQgBCWlyFjQQAqAtyAEEEAKgLIgBAgY5SSIWQgZCBkjpMhZUEAIGVDAAAAACBlvEGAgID8B3EbOALYgBBBAEMAAIBHQQAqAtiAEJSoQQJ0aioCACFmQQAgBjYC4IAQQQBBACgC7IAQQQFqQQEgBkEAKALkgBBKa2w2AuiAEEEAKALogBAgEUghHkEAKALogBAgFEghH0EAKALogBAgFkghIEEAKALogBAgGEghIUEAKALogBAgGkghIkEAKALogBAgHEghI0MAAAAAQwAAgD5BACgC6IAQsiBflZRDAACAPiAjG0EAKALogBBBAEgbQwAAgD5BACgC6IAQIBxrsiBelUMAAIA/kpRDAAAAPyAiGyAjG0PNzMw+QQAoAuiAECAaa7IgXZWUQwAAAD+SQ2ZmZj8gIRsgIhtDAAAAAENmZiY/QQAoAuiAECAYa7KUkyBclUNmZmY/kkMAAIA+ICAbICEbQwAAAABDmpkZPkEAKALogBAgFmuylJMgW5VDAACAPpJDzczMPSAfGyAgG0MAAAAAQ83MTD1BACgC6IAQIBRrspSTIFqVQ83MzD2SQ83MTD0gHhsgHxtDAAAAAEPNzEw9QQAoAuiAECARa7KUkyBZlUPNzEw9kkMAAAAAQQAoAuiAECATSBsgHhshZ0EAIGc4AvCAEEMAAAAAQQAqAoyAEEEAKgK8gBBBACoC/IAQlCBnQQAqAvSAEJKTlJMhaEEAIGhDAAAAACBovEGAgID8B3EbOAL4gBBBACoCiIEQQQAqAoCBECBjlJIhaSBpIGmOkyFqQQAgakMAAAAAIGq8QYCAgPwHcRs4AoSBEEEAQwAAgEdBACoChIEQlKhBAnRqKgIAIWtBACAHNgKMgRBBAEEAKAKYgRBBAWpBASAHQQAoApCBEEprbDYClIEQQQAoApSBECARSCEkQQAoApSBECAUSCElQQAoApSBECAWSCEmQQAoApSBECAYSCEnQQAoApSBECAaSCEoQQAoApSBECAcSCEpQwAAAABDAACAPkEAKAKUgRCyIF+VlEMAAIA+ICkbQQAoApSBEEEASBtDAACAPkEAKAKUgRAgHGuyIF6VQwAAgD+SlEMAAAA/ICgbICkbQ83MzD5BACgClIEQIBprsiBdlZRDAAAAP5JDZmZmPyAnGyAoG0MAAAAAQ2ZmJj9BACgClIEQIBhrspSTIFyVQ2ZmZj+SQwAAgD4gJhsgJxtDAAAAAEOamRk+QQAoApSBECAWa7KUkyBblUMAAIA+kkPNzMw9ICUbICYbQwAAAABDzcxMPUEAKAKUgRAgFGuylJMgWpVDzczMPZJDzcxMPSAkGyAlG0MAAAAAQ83MTD1BACgClIEQIBFrspSTIFmVQ83MTD2SQwAAAABBACgClIEQIBNIGyAkGyFsQQAgbDgCnIEQQwAAAABBACoCjIAQQQAqAryAEEEAKgKogRCUIGxBACoCoIEQkpOUkyFtQQAgbUMAAAAAIG28QYCAgPwHcRs4AqSBEEEAIAg2AqyBEEEAQQAoAriBEEEBakEBIAhBACgCsIEQSmtsNgK0gRBBACgCtIEQIBFIISpBACgCtIEQIBRIIStBACgCtIEQIBZIISxBACgCtIEQIBhIIS1BACgCtIEQIBpIIS5BACgCtIEQIBxIIS9DAAAAAEMAAIA+QQAoArSBELIgX5WUQwAAgD4gLxtBACgCtIEQQQBIG0MAAIA+QQAoArSBECAca7IgXpVDAACAP5KUQwAAAD8gLhsgLxtDzczMPkEAKAK0gRAgGmuyIF2VlEMAAAA/kkNmZmY/IC0bIC4bQwAAAABDZmYmP0EAKAK0gRAgGGuylJMgXJVDZmZmP5JDAACAPiAsGyAtG0MAAAAAQ5qZGT5BACgCtIEQIBZrspSTIFuVQwAAgD6SQ83MzD0gKxsgLBtDAAAAAEPNzEw9QQAoArSBECAUa7KUkyBalUPNzMw9kkPNzEw9ICobICsbQwAAAABDzcxMPUEAKAK0gRAgEWuylJMgWZVDzcxMPZJDAAAAAEEAKAK0gRAgE0gbICobIW5BACBuOAK8gRBDAAAAAEEAKgKMgBBBACoCvIAQQQAqAsiBEJQgbkEAKgLAgRCSk5STIW9BACBvQwAAAAAgb7xBgICA/AdxGzgCxIEQQQAgCTYCzIEQQQBBACgC2IEQQQFqQQEgCUEAKALQgRBKa2w2AtSBEEEAKALUgRAgEUghMEEAKALUgRAgFEghMUEAKALUgRAgFkghMkEAKALUgRAgGEghM0EAKALUgRAgGkghNEEAKALUgRAgHEghNUMAAAAAQwAAgD5BACgC1IEQsiBflZRDAACAPiA1G0EAKALUgRBBAEgbQwAAgD5BACgC1IEQIBxrsiBelUMAAIA/kpRDAAAAPyA0GyA1G0PNzMw+QQAoAtSBECAaa7IgXZWUQwAAAD+SQ2ZmZj8gMxsgNBtDAAAAAENmZiY/QQAoAtSBECAYa7KUkyBclUNmZmY/kkMAAIA+IDIbIDMbQwAAAABDmpkZPkEAKALUgRAgFmuylJMgW5VDAACAPpJDzczMPSAxGyAyG0MAAAAAQ83MTD1BACgC1IEQIBRrspSTIFqVQ83MzD2SQ83MTD0gMBsgMRtDAAAAAEPNzEw9QQAoAtSBECARa7KUkyBZlUPNzEw9kkMAAAAAQQAoAtSBECATSBsgMBshcEEAIHA4AtyBEEMAAAAAQQAqAoyAEEEAKgK8gBBBACoC6IEQlCBwQQAqAuCBEJKTlJMhcUEAIHFDAAAAACBxvEGAgID8B3EbOALkgRBBACAKNgLsgRBBAEEAKAL4gRBBAWpBASAKQQAoAvCBEEprbDYC9IEQQQAoAvSBECARSCE2QQAoAvSBECAUSCE3QQAoAvSBECAWSCE4QQAoAvSBECAYSCE5QQAoAvSBECAaSCE6QQAoAvSBECAcSCE7QwAAAABDAACAPkEAKAL0gRCyIF+VlEMAAIA+IDsbQQAoAvSBEEEASBtDAACAPkEAKAL0gRAgHGuyIF6VQwAAgD+SlEMAAAA/IDobIDsbQ83MzD5BACgC9IEQIBprsiBdlZRDAAAAP5JDZmZmPyA5GyA6G0MAAAAAQ2ZmJj9BACgC9IEQIBhrspSTIFyVQ2ZmZj+SQwAAgD4gOBsgORtDAAAAAEOamRk+QQAoAvSBECAWa7KUkyBblUMAAIA+kkPNzMw9IDcbIDgbQwAAAABDzcxMPUEAKAL0gRAgFGuylJMgWpVDzczMPZJDzcxMPSA2GyA3G0MAAAAAQ83MTD1BACgC9IEQIBFrspSTIFmVQ83MTD2SQwAAAABBACgC9IEQIBNIGyA2GyFyQQAgcjgC/IEQQwAAAABBACoCjIAQQQAqAryAEEEAKgKIghCUIHJBACoCgIIQkpOUkyFzQQAgc0MAAAAAIHO8QYCAgPwHcRs4AoSCEEEAIAs2AoyCEEEAQQAoApiCEEEBakEBIAtBACgCkIIQSmtsNgKUghBBACgClIIQIBFIITxBACgClIIQIBRIIT1BACgClIIQIBZIIT5BACgClIIQIBhIIT9BACgClIIQIBpIIUBBACgClIIQIBxIIUFDAAAAAEMAAIA+QQAoApSCELIgX5WUQwAAgD4gQRtBACgClIIQQQBIG0MAAIA+QQAoApSCECAca7IgXpVDAACAP5KUQwAAAD8gQBsgQRtDzczMPkEAKAKUghAgGmuyIF2VlEMAAAA/kkNmZmY/ID8bIEAbQwAAAABDZmYmP0EAKAKUghAgGGuylJMgXJVDZmZmP5JDAACAPiA+GyA/G0MAAAAAQ5qZGT5BACgClIIQIBZrspSTIFuVQwAAgD6SQ83MzD0gPRsgPhtDAAAAAEPNzEw9QQAoApSCECAUa7KUkyBalUPNzMw9kkPNzEw9IDwbID0bQwAAAABDzcxMPUEAKAKUghAgEWuylJMgWZVDzcxMPZJDAAAAAEEAKAKUghAgE0gbIDwbIXRBACB0OAKcghBDAAAAAEEAKgKMgBBBACoCvIAQQQAqAqiCEJQgdEEAKgKgghCSk5STIXVBACB1QwAAAAAgdbxBgICA/AdxGzgCpIIQQQAgDDYCrIIQQQBBACgCuIIQQQFqQQEgDEEAKAKwghBKa2w2ArSCEEEAKAK0ghAgEUghQkEAKAK0ghAgFEghQ0EAKAK0ghAgFkghREEAKAK0ghAgGEghRUEAKAK0ghAgGkghRkEAKAK0ghAgHEghR0MAAAAAQwAAgD5BACgCtIIQsiBflZRDAACAPiBHG0EAKAK0ghBBAEgbQwAAgD5BACgCtIIQIBxrsiBelUMAAIA/kpRDAAAAPyBGGyBHG0PNzMw+QQAoArSCECAaa7IgXZWUQwAAAD+SQ2ZmZj8gRRsgRhtDAAAAAENmZiY/QQAoArSCECAYa7KUkyBclUNmZmY/kkMAAIA+IEQbIEUbQwAAAABDmpkZPkEAKAK0ghAgFmuylJMgW5VDAACAPpJDzczMPSBDGyBEG0MAAAAAQ83MTD1BACgCtIIQIBRrspSTIFqVQ83MzD2SQ83MTD0gQhsgQxtDAAAAAEPNzEw9QQAoArSCECARa7KUkyBZlUPNzEw9kkMAAAAAQQAoArSCECATSBsgQhshdkEAIHY4AryCEEMAAAAAQQAqAoyAEEEAKgK8gBBBACoCyIIQlCB2QQAqAsCCEJKTlJMhd0EAIHdDAAAAACB3vEGAgID8B3EbOALEghBBACANNgLMghBBAEEAKALYghBBAWpBASANQQAoAtCCEEprbDYC1IIQQQAoAtSCECARSCFIQQAoAtSCECAUSCFJQQAoAtSCECAWSCFKQQAoAtSCECAYSCFLQQAoAtSCECAaSCFMQQAoAtSCECAcSCFNQwAAAABDAACAPkEAKALUghCyIF+VlEMAAIA+IE0bQQAoAtSCEEEASBtDAACAPkEAKALUghAgHGuyIF6VQwAAgD+SlEMAAAA/IEwbIE0bQ83MzD5BACgC1IIQIBprsiBdlZRDAAAAP5JDZmZmPyBLGyBMG0MAAAAAQ2ZmJj9BACgC1IIQIBhrspSTIFyVQ2ZmZj+SQwAAgD4gShsgSxtDAAAAAEOamRk+QQAoAtSCECAWa7KUkyBblUMAAIA+kkPNzMw9IEkbIEobQwAAAABDzcxMPUEAKALUghAgFGuylJMgWpVDzczMPZJDzcxMPSBIGyBJG0MAAAAAQ83MTD1BACgC1IIQIBFrspSTIFmVQ83MTD2SQwAAAABBACgC1IIQIBNIGyBIGyF4QQAgeDgC3IIQQwAAAABBACoCjIAQQQAqAryAEEEAKgLoghCUIHhBACoC4IIQkpOUkyF5QQAgeUMAAAAAIHm8QYCAgPwHcRs4AuSCEEEAIA42AuyCEEEAQQAoAviCEEEBakEBIA5BACgC8IIQSmtsNgL0ghBBACgC9IIQIBFIIU5BACgC9IIQIBRIIU9BACgC9IIQIBZIIVBBACgC9IIQIBhIIVFBACgC9IIQIBpIIVJBACgC9IIQIBxIIVNDAAAAAEMAAIA+QQAoAvSCELIgX5WUQwAAgD4gUxtBACgC9IIQQQBIG0MAAIA+QQAoAvSCECAca7IgXpVDAACAP5KUQwAAAD8gUhsgUxtDzczMPkEAKAL0ghAgGmuyIF2VlEMAAAA/kkNmZmY/IFEbIFIbQwAAAABDZmYmP0EAKAL0ghAgGGuylJMgXJVDZmZmP5JDAACAPiBQGyBRG0MAAAAAQ5qZGT5BACgC9IIQIBZrspSTIFuVQwAAgD6SQ83MzD0gTxsgUBtDAAAAAEPNzEw9QQAoAvSCECAUa7KUkyBalUPNzMw9kkPNzEw9IE4bIE8bQwAAAABDzcxMPUEAKAL0ghAgEWuylJMgWZVDzcxMPZJDAAAAAEEAKAL0ghAgE0gbIE4bIXpBACB6OAL8ghBDAAAAAEEAKgKMgBBBACoCvIAQQQAqAoiDEJQgekEAKgKAgxCSk5STIXtBACB7QwAAAAAge7xBgICA/AdxGzgChIMQIFdDd75/P0EAKgKUgxCUkiF8QQAgfEMAAAAAIHy8QYCAgPwHcRs4ApCDEEPNzMw9QQAqAsCAECBmlEEAKgL4gBAga5RBACoCpIEQIGaUkkEAKgLEgRAga5SSkkEAKgLkgRAga5SSQQAqAoSCECBmlJJBACoCpIIQIGuUkkEAKgLEghAgZpSSQQAqAuSCECBrlJJBACoChIMQIGaUkpRDCtcjPENmZmY/QQAqApCDEJaXQZyDEEEAKAKYgxBBoT9rQf8/cUECdGoqAgCUkiF9QZyDEEEAKAKYgxBB/z9xQQJ0aiB9QwAAAAAgfbxBgICA/AdxGzgCACAEIA9qQwAAQEBBnIMQQQAoApiDEEEAa0H/P3FBAnRqKgIAlDgCAEEAQQAoApSAEDYCmIAQQQBBACgCnIAQNgKggBBBAEEAKgKsgBA4ArCAEEEAQQAqArSAEDgCuIAQQQBBACoCwIAQOALEgBBBAEEAKgLQgBA4AtSAEEEAQQAqAtiAEDgC3IAQQQBBACgC4IAQNgLkgBBBAEEAKALogBA2AuyAEEEAQQAqAvCAEDgC9IAQQQBBACoC+IAQOAL8gBBBAEEAKgKEgRA4AoiBEEEAQQAoAoyBEDYCkIEQQQBBACgClIEQNgKYgRBBAEEAKgKcgRA4AqCBEEEAQQAqAqSBEDgCqIEQQQBBACgCrIEQNgKwgRBBAEEAKAK0gRA2AriBEEEAQQAqAryBEDgCwIEQQQBBACoCxIEQOALIgRBBAEEAKALMgRA2AtCBEEEAQQAoAtSBEDYC2IEQQQBBACoC3IEQOALggRBBAEEAKgLkgRA4AuiBEEEAQQAoAuyBEDYC8IEQQQBBACgC9IEQNgL4gRBBAEEAKgL8gRA4AoCCEEEAQQAqAoSCEDgCiIIQQQBBACgCjIIQNgKQghBBAEEAKAKUghA2ApiCEEEAQQAqApyCEDgCoIIQQQBBACoCpIIQOAKoghBBAEEAKAKsghA2ArCCEEEAQQAoArSCEDYCuIIQQQBBACoCvIIQOALAghBBAEEAKgLEghA4AsiCEEEAQQAoAsyCEDYC0IIQQQBBACgC1IIQNgLYghBBAEEAKgLcghA4AuCCEEEAQQAqAuSCEDgC6IIQQQBBACgC7IIQNgLwghBBAEEAKAL0ghA2AviCEEEAQQAqAvyCEDgCgIMQQQBBACoChIMQOAKIgxBBAEEAKgKQgxA4ApSDEEEAQQAoApiDEEEBajYCmIMQIA9BBGohDyAPQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4qAgIAAAEEAKAKAgBAPC46AgIAAACAAIAEQAiAAIAEQCwv9kYCAAAEuf0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEgQQAhIUEAISJBACEjQQAhJEEAISVBACEmQQAhJ0EAIShBACEpQQAhKkEAIStBACEsQQAhLUEAIS5BACEBA0ACQEGUgBAgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQZyAECACQQJ0akEANgIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBrIAQIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEG0gBAgBEECdGpDAAAAADgCACAEQQFqIQQgBEECSARADAIMAQsLC0EAIQUDQAJAQcCAECAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB0IAQIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHYgBAgB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQeCAECAIQQJ0akEANgIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBB6IAQIAlBAnRqQQA2AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEHwgBAgCkECdGpDAAAAADgCACAKQQFqIQogCkECSARADAIMAQsLC0EAIQsDQAJAQfiAECALQQJ0akMAAAAAOAIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQAhDANAAkBBhIEQIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQEGMgRAgDUECdGpBADYCACANQQFqIQ0gDUECSARADAIMAQsLC0EAIQ4DQAJAQZSBECAOQQJ0akEANgIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkBBnIEQIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEGkgRAgEEECdGpDAAAAADgCACAQQQFqIRAgEEECSARADAIMAQsLC0EAIREDQAJAQayBECARQQJ0akEANgIAIBFBAWohESARQQJIBEAMAgwBCwsLQQAhEgNAAkBBtIEQIBJBAnRqQQA2AgAgEkEBaiESIBJBAkgEQAwCDAELCwtBACETA0ACQEG8gRAgE0ECdGpDAAAAADgCACATQQFqIRMgE0ECSARADAIMAQsLC0EAIRQDQAJAQcSBECAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQQJIBEAMAgwBCwsLQQAhFQNAAkBBzIEQIBVBAnRqQQA2AgAgFUEBaiEVIBVBAkgEQAwCDAELCwtBACEWA0ACQEHUgRAgFkECdGpBADYCACAWQQFqIRYgFkECSARADAIMAQsLC0EAIRcDQAJAQdyBECAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQQJIBEAMAgwBCwsLQQAhGANAAkBB5IEQIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBAkgEQAwCDAELCwtBACEZA0ACQEHsgRAgGUECdGpBADYCACAZQQFqIRkgGUECSARADAIMAQsLC0EAIRoDQAJAQfSBECAaQQJ0akEANgIAIBpBAWohGiAaQQJIBEAMAgwBCwsLQQAhGwNAAkBB/IEQIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBAkgEQAwCDAELCwtBACEcA0ACQEGEghAgHEECdGpDAAAAADgCACAcQQFqIRwgHEECSARADAIMAQsLC0EAIR0DQAJAQYyCECAdQQJ0akEANgIAIB1BAWohHSAdQQJIBEAMAgwBCwsLQQAhHgNAAkBBlIIQIB5BAnRqQQA2AgAgHkEBaiEeIB5BAkgEQAwCDAELCwtBACEfA0ACQEGcghAgH0ECdGpDAAAAADgCACAfQQFqIR8gH0ECSARADAIMAQsLC0EAISADQAJAQaSCECAgQQJ0akMAAAAAOAIAICBBAWohICAgQQJIBEAMAgwBCwsLQQAhIQNAAkBBrIIQICFBAnRqQQA2AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEG0ghAgIkECdGpBADYCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQbyCECAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkBBxIIQICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQEHMghAgJUECdGpBADYCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAQdSCECAmQQJ0akEANgIAICZBAWohJiAmQQJIBEAMAgwBCwsLQQAhJwNAAkBB3IIQICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBAkgEQAwCDAELCwtBACEoA0ACQEHkghAgKEECdGpDAAAAADgCACAoQQFqISggKEECSARADAIMAQsLC0EAISkDQAJAQeyCECApQQJ0akEANgIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkBB9IIQICpBAnRqQQA2AgAgKkEBaiEqICpBAkgEQAwCDAELCwtBACErA0ACQEH8ghAgK0ECdGpDAAAAADgCACArQQFqISsgK0ECSARADAIMAQsLC0EAISwDQAJAQYSDECAsQQJ0akMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkBBkIMQIC1BAnRqQwAAAAA4AgAgLUEBaiEtIC1BAkgEQAwCDAELCwtBAEEANgKYgxBBACEuA0ACQEGcgxAgLkECdGpDAAAAADgCACAuQQFqIS4gLkGAwABIBEAMAgwBCwsLC6yBgIAAAEEAIAE2AoCAEEEAQwCAO0hDAACAP0EAKAKAgBCyl5Y4AoSAEEEAQwAAgD9DfFnEREEAKgKEgBCVEAGVOAKIgBBBAEMAAIA/QQAqAoiAEEMAAIA/kpU4AoyAEEEAQ28SgzpBACoChIAQlDgCpIAQQQBDAACAP0EAKgKIgBCTOAK8gBBBAEMpnC5DQQAqAoSAEJU4AsiAEEEAQ1zPJENBACoChIAQlTgCgIEQC5CAgIAAACAAIAEQCiAAEAwgABAJC7KAgIAAAEEAQwAAoEA4ApCAEEEAQ83MTD44AqiAEEEAQwAAoEA4AsyAEEEAQ83MzD04AoyDEAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvxjoCAAAEAQQAL6g57Im5hbWUiOiJXb29kZW4gS2V5Ym9hcmQiLCJmaWxlbmFtZSI6Ildvb2RlbktleWJvYXJkIiwidmVyc2lvbiI6IjIuMTEuNSIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjI5NTMzMiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IkVSIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJXb29kZW5LZXlib2FyZCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiV29vZGVuIEtleWJvYXJkIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV29vZGVuIEtleWJvYXJkIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IEhhbmQiLCJhZGRyZXNzIjoiL1dvb2Rlbl9LZXlib2FyZC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjI2MjE2MCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkhpZ2h0IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvSGlnaHQiLCJpbmRleCI6IjI2MjIyMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAzMCJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIxIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4zIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiTm90ZSBEdXJhdGlvbiAoQlBGIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvV29vZGVuX0tleWJvYXJkL05vdGVfRHVyYXRpb25fKEJQRl9FbnZlbG9wZSkiLCJpbmRleCI6IjI2MjE4NCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwLjEiLCJtYXgiOiIwLjUiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkVjaG8gSW50ZW5zaXR5IiwiYWRkcmVzcyI6Ii9Xb29kZW5fS2V5Ym9hcmQvRWNob19JbnRlbnNpdHkiLCJpbmRleCI6IjI2MjU0MCIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjEgMSAtMTAgMCAxNSJ9XSwiaW5pdCI6IjAuMSIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjkiLCJzdGVwIjoiMC4wMSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class WoodenKeyboardProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            WoodenKeyboardProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            WoodenKeyboardProcessor.parse_items(group.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
            WoodenKeyboardProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= WoodenKeyboardProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        WoodenKeyboardProcessor.parse_ui(JSON.parse(getJSONWoodenKeyboard()).ui, params, WoodenKeyboardProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONWoodenKeyboard());

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
        
        this.WoodenKeyboard_instance = new WebAssembly.Instance(WoodenKeyboardProcessor.wasm_module, WoodenKeyboardProcessor.importObject);
  	   	this.factory = this.WoodenKeyboard_instance.exports;
        this.HEAP = this.WoodenKeyboard_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * WoodenKeyboardProcessor.buffer_size * this.sample_size);
        
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((WoodenKeyboardProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + WoodenKeyboardProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            WoodenKeyboardProcessor.parse_ui(this.json_object.ui, this, WoodenKeyboardProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * WoodenKeyboardProcessor.buffer_size * this.sample_size);
            
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
        this.factory.compute(this.dsp, WoodenKeyboardProcessor.buffer_size, this.ins, this.outs);
        
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

WoodenKeyboardProcessor.buffer_size = 128;

WoodenKeyboardProcessor.importObject = {
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
    if (WoodenKeyboardProcessor.wasm_module == undefined) {
        WoodenKeyboardProcessor.wasm_module = new WebAssembly.Module(WoodenKeyboardProcessor.atob(getBase64CodeWoodenKeyboard()));
        registerProcessor('WoodenKeyboard', WoodenKeyboardProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust WoodenKeyboard cannot be loaded or compiled");
}

