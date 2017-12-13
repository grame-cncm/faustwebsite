
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.12\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"116\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"88\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"160\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "AGFzbQEAAAAB1oCAgAAQYAF/AX9gAn9/AGAEf39/fwBgAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AAKYgICAAAIDZW52BF9hYnMAAANlbnYFX3Bvd2YADgOPgICAAA4BAgMEBQYHCAkKCwwNDwWHgICAAAEAgoCAgAAHuoGAgAAMB2NvbXB1dGUAAwxnZXROdW1JbnB1dHMABA1nZXROdW1PdXRwdXRzAAUNZ2V0UGFyYW1WYWx1ZQAGDWdldFNhbXBsZVJhdGUABwRpbml0AAgNaW5zdGFuY2VDbGVhcgAJEWluc3RhbmNlQ29uc3RhbnRzAAoMaW5zdGFuY2VJbml0AAsaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADA1zZXRQYXJhbVZhbHVlAA8GbWVtb3J5AgAKoOSAgAAOgoCAgAAAC4O+gIAAAht/Q31BACEEQQAhBUMAAAAAIR9BACEGQQAhB0MAAAAAISBDAAAAACEhQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVBACEIQwAAAAAhNkEAIQlBACEKQwAAAAAhN0MAAAAAIThBACELQwAAAAAhOUMAAAAAITpBACEMQwAAAAAhO0MAAAAAITxBACENQwAAAAAhPUMAAAAAIT5BACEOQwAAAAAhP0MAAAAAIUBBACEPQwAAAAAhQUMAAAAAIUJBACEQQwAAAAAhQ0MAAAAAIURBACERQwAAAAAhRUMAAAAAIUZBACESQwAAAAAhR0MAAAAAIUhBACETQwAAAAAhSUMAAAAAIUpBACEUQwAAAAAhS0MAAAAAIUxBACEVQwAAAAAhTUMAAAAAIU5BACEWQwAAAAAhT0MAAAAAIVBDAAAAACFRQQAhF0MAAAAAIVJDAAAAACFTQQAhGEMAAAAAIVRDAAAAACFVQQAhGUMAAAAAIVZDAAAAACFXQQAhGkMAAAAAIVhDAAAAACFZQQAhG0MAAAAAIVpDAAAAACFbQQAhHEMAAAAAIVxDAAAAACFdQQAhHUMAAAAAIV5DAAAAACFfQQAhHkMAAAAAIWBDAAAAACFhIANBAGooAgAhBCADQQRqKAIAIQVDbxKDOkEAKgJYlCEfQQAqAnSoIQYgBrJDAAAAAF8hB0PNzMw9QwAAIEFBACoCoAGWlyEgQwAAAD9DbxKDOkN+0UY6ICCVEAGUISFDAAAAP0NvEoM6Q9J+ejogIJUQAZQhIkMAAAA/Q28SgzpD0n76OyAglRABlCEjQwAAAD9DbxKDOkOBKt87ICCVEAGUISRDAAAAP0NvEoM6Q37RxjsgIJUQAZQhJUMAAAA/Q28SgzpDhS+nOyAglRABlCEmQwAAAD9DbxKDOkMJ8pQ7ICCVEAGUISdDAAAAP0NvEoM6Q9J+ejsgIJUQAZQhKEMAAAA/Q28SgzpDgSpfOyAglRABlCEpQwAAAD9DbxKDOkN+0UY7ICCVEAGUISpDAAAAP0NvEoM6Q4UvJzsgIJUQAZQhK0MAAAA/Q28SgzpDCfIUOyAglRABlCEsQwAAAD9DbxKDOkPSfvo6ICCVEAGUIS1DAAAAP0NvEoM6Q4Eq3zogIJUQAZQhLkMAAAA/Q28SgzpDftHGOiAglRABlCEvQwAAAD9DbxKDOkOFL6c6ICCVEAGUITBDAAAAP0NvEoM6QwnylDogIJUQAZQhMUMAAAA/Q28SgzpDgSpfOiAglRABlCEyQwAAAD9DbxKDOkOFLyc6ICCVEAGUITNDAAAAP0NvEoM6QwnyFDogIJUQAZQhNEMAAAA/Q28SgzpD0n76OSAglRABlCE1QQAhCANAAkBBAEEBNgIAQQBB7ZyZjgRBACgCDGxBueAAajYCCCAfQ3e+fz9BACoCYJSSITZBACA2QwAAAAAgNrxBgICA/AdxGzgCXEEAQQAoAgRBACgCaGpBACoCVEMAADRDQwAANERBACoCXJaXqLKVqG82AmRBACgCZEEARiEJQQAgCTYCbEEAIAY2AnhBAEEAQQAoAoQBIAZBACgCfGsQAGpBACgCcBs2AoABQQAgCUEAKAKMAWpBD282AogBQRBBACgCiAFBDyAJQQAoAoABQQBKIAdycRtBAnRqIAayOAIAQRBBACgCiAFBAnRqKgIAQwAAkMGSi0MAAAA/XSEKQQAgCjYCkAEgCkEAKAKUAWuyQwAAAABeskEAKgKcAZJDDe30PEEAKgKcAUMAAAAAXrKUkyE3QQAgN0MAAAAAIDe8QYCAgPwHcRs4ApgBQagBQQAoAqQBQT9xQQJ0akMAAAAwQQAoAghBACoCmAFDAAAAAF5sspQgIUMAAMA/QQAqAqwDlEMAAAA/QQAqArADlJKUkjgCAEGoAUEAKAKkAUEga0E/cUECdGoqAgAhOEEAIDhDAAAAACA4vEGAgID8B3EbOAKoA0EQQQAoAogBQQJ0aioCAEMAAIDBkotDAAAAP10hC0EAIAs2ArQDQQAqAsADIAtBACgCuANrskMAAAAAXrKSQ9tlwjxBACoCwANDAAAAAF6ylJMhOUEAIDlDAAAAACA5vEGAgID8B3EbOAK8A0HEA0EAKAKkAUE/cUECdGpDAAAAMEEAKAIIQQAqArwDQwAAAABebLKUICJDAADAP0EAKgLIBZRDAAAAP0EAKgLMBZSSlJI4AgBBxANBACgCpAFBKWtBP3FBAnRqKgIAITpBACA6QwAAAAAgOrxBgICA/AdxGzgCxAVBEEEAKAKIAUECdGoqAgBDAACAv5KLQwAAAD9dIQxBACAMNgLQBUEAKgLcBSAMQQAoAtQFa7JDAAAAAF6ykkPbZUI7QQAqAtwFQwAAAABespSTITtBACA7QwAAAAAgO7xBgICA/AdxGzgC2AVB4AVBACgCpAFB/wNxQQJ0aiAjQwAAwD9BACoC5BWUQwAAAD9BACoC6BWUkpRDAAAAMEEAKAIIQQAqAtgFQwAAAABebLKUkjgCAEHgBUEAKAKkAUHQAmtB/wNxQQJ0aioCACE8QQAgPEMAAAAAIDy8QYCAgPwHcRs4AuAVQRBBACgCiAFBAnRqKgIAQwAAAMCSi0MAAAA/XSENQQAgDTYC7BVBACoC+BUgDUEAKALwFWuyQwAAAABespJDSTRaO0EAKgL4FUMAAAAAXrKUkyE9QQAgPUMAAAAAID28QYCAgPwHcRs4AvQVQfwVQQAoAqQBQf8DcUECdGogJEMAAMA/QQAqAoAmlEMAAAA/QQAqAoQmlJKUQwAAADBBACgCCEEAKgL0FUMAAAAAXmyylJI4AgBB/BVBACgCpAFBqwJrQf8DcUECdGoqAgAhPkEAID5DAAAAACA+vEGAgID8B3EbOAL8JUEQQQAoAogBQQJ0aioCAEMAAEDAkotDAAAAP10hDkEAIA42AogmQQAqApQmIA5BACgCjCZrskMAAAAAXrKSQw3tdDtBACoClCZDAAAAAF6ylJMhP0EAID9DAAAAACA/vEGAgID8B3EbOAKQJkGYJkEAKAKkAUH/A3FBAnRqICVDAADAP0EAKgKcNpRDAAAAP0EAKgKgNpSSlEMAAAAwQQAoAghBACoCkCZDAAAAAF5sspSSOAIAQZgmQQAoAqQBQYoCa0H/A3FBAnRqKgIAIUBBACBAQwAAAAAgQLxBgICA/AdxGzgCmDZBEEEAKAKIAUECdGoqAgBDAACAwJKLQwAAAD9dIQ9BACAPNgKkNkEAKgKwNiAPQQAoAqg2a7JDAAAAAF6ykkNFopE7QQAqArA2QwAAAABespSTIUFBACBBQwAAAAAgQbxBgICA/AdxGzgCrDZBtDZBACgCpAFB/wFxQQJ0aiAmQwAAwD9BACoCuD6UQwAAAD9BACoCvD6UkpRDAAAAMEEAKAIIQQAqAqw2QwAAAABebLKUkjgCAEG0NkEAKAKkAUHgAWtB/wFxQQJ0aioCACFCQQAgQkMAAAAAIEK8QYCAgPwHcRs4ArQ+QRBBACgCiAFBAnRqKgIAQwAAoMCSi0MAAAA/XSEQQQAgEDYCwD5BACoCzD4gEEEAKALEPmuyQwAAAABespJD7nejO0EAKgLMPkMAAAAAXrKUkyFDQQAgQ0MAAAAAIEO8QYCAgPwHcRs4Asg+QdA+QQAoAqQBQf8BcUECdGogJ0MAAMA/QQAqAtRGlEMAAAA/QQAqAthGlJKUQwAAADBBACgCCEEAKgLIPkMAAAAAXmyylJI4AgBB0D5BACgCpAFBxwFrQf8BcUECdGoqAgAhREEAIERDAAAAACBEvEGAgID8B3EbOALQRkEQQQAoAogBQQJ0aioCAEMAAMDAkotDAAAAP10hEUEAIBE2AtxGQQAqAuhGIBFBACgC4EZrskMAAAAAXrKSQ9tlwjtBACoC6EZDAAAAAF6ylJMhRUEAIEVDAAAAACBFvEGAgID8B3EbOALkRkHsxgBBACgCpAFB/wFxQQJ0aiAoQwAAwD9BACoC8E6UQwAAAD9BACoC9E6UkpRDAAAAMEEAKAIIQQAqAuRGQwAAAABebLKUkjgCAEHsxgBBACgCpAFBpwFrQf8BcUECdGoqAgAhRkEAIEZDAAAAACBGvEGAgID8B3EbOALsTkEQQQAoAogBQQJ0aioCAEMAAODAkotDAAAAP10hEkEAIBI2AvhOQQAqAoRPIBJBACgC/E5rskMAAAAAXrKSQ0k02jtBACoChE9DAAAAAF6ylJMhR0EAIEdDAAAAACBHvEGAgID8B3EbOAKAT0GIzwBBACgCpAFB/wFxQQJ0aiApQwAAwD9BACoCjFeUQwAAAD9BACoCkFeUkpRDAAAAMEEAKAIIQQAqAoBPQwAAAABebLKUkjgCAEGIzwBBACgCpAFBlQFrQf8BcUECdGoqAgAhSEEAIEhDAAAAACBIvEGAgID8B3EbOAKIV0EQQQAoAogBQQJ0aioCAEMAAADBkotDAAAAP10hE0EAIBM2ApRXQQAqAqBXIBNBACgCmFdrskMAAAAAXrKSQw3t9DtBACoCoFdDAAAAAF6ylJMhSUEAIElDAAAAACBJvEGAgID8B3EbOAKcV0Gk1wBBACgCpAFB/wFxQQJ0aiAqQwAAwD9BACoCqF+UQwAAAD9BACoCrF+UkpRDAAAAMEEAKAIIQQAqApxXQwAAAABebLKUkjgCAEGk1wBBACgCpAFBhAFrQf8BcUECdGoqAgAhSkEAIEpDAAAAACBKvEGAgID8B3EbOAKkX0EQQQAoAogBQQJ0aioCAEMAABDBkotDAAAAP10hFEEAIBQ2ArBfQQAqArxfIBRBACgCtF9rskMAAAAAXrKSQ0WiETxBACoCvF9DAAAAAF6ylJMhS0EAIEtDAAAAACBLvEGAgID8B3EbOAK4X0HA3wBBACgCpAFB/wBxQQJ0aiArQwAAwD9BACoCxGOUQwAAAD9BACoCyGOUkpRDAAAAMEEAKAIIQQAqArhfQwAAAABebLKUkjgCAEHA3wBBACgCpAFB7wBrQf8AcUECdGoqAgAhTEEAIExDAAAAACBMvEGAgID8B3EbOALAY0EQQQAoAogBQQJ0aioCAEMAACDBkotDAAAAP10hFUEAIBU2AsxjQQAqAthjIBVBACgC0GNrskMAAAAAXrKSQ+53IzxBACoC2GNDAAAAAF6ylJMhTUEAIE1DAAAAACBNvEGAgID8B3EbOALUY0Hc4wBBACgCpAFB/wBxQQJ0aiAsQwAAwD9BACoC4GeUQwAAAD9BACoC5GeUkpRDAAAAMEEAKAIIQQAqAtRjQwAAAABebLKUkjgCAEHc4wBBACgCpAFB4wBrQf8AcUECdGoqAgAhTkEAIE5DAAAAACBOvEGAgID8B3EbOALcZ0EQQQAoAogBQQJ0aioCAEMAADDBkotDAAAAP10hFkEAIBY2AuhnQQAqAvRnIBZBACgC7GdrskMAAAAAXrKSQ9tlQjxBACoC9GdDAAAAAF6ylJMhT0EAIE9DAAAAACBPvEGAgID8B3EbOALwZ0H45wBBACgCpAFB/wBxQQJ0aiAtQwAAwD9BACoC/GuUQwAAAD9BACoCgGyUkpRDAAAAMEEAKAIIQQAqAvBnQwAAAABebLKUkjgCAEH45wBBACgCpAFB0wBrQf8AcUECdGoqAgAhUEEAIFBDAAAAACBQvEGAgID8B3EbOAL4a0PzBDU/QQAqAvhrlCFRQRBBACgCiAFBAnRqKgIAQwAAQMGSi0MAAAA/XSEXQQAgFzYChGxBACoCkGwgF0EAKAKIbGuyQwAAAABespJDSTRaPEEAKgKQbEMAAAAAXrKUkyFSQQAgUkMAAAAAIFK8QYCAgPwHcRs4AoxsQZTsAEEAKAKkAUH/AHFBAnRqIC5DAADAP0EAKgKYcJRDAAAAP0EAKgKccJSSlEMAAAAwQQAoAghBACoCjGxDAAAAAF5sspSSOAIAQZTsAEEAKAKkAUHKAGtB/wBxQQJ0aioCACFTQQAgU0MAAAAAIFO8QYCAgPwHcRs4ApRwQRBBACgCiAFBAnRqKgIAQwAAUMGSi0MAAAA/XSEYQQAgGDYCoHBBACoCrHAgGEEAKAKkcGuyQwAAAABespJDDe10PEEAKgKscEMAAAAAXrKUkyFUQQAgVEMAAAAAIFS8QYCAgPwHcRs4AqhwQbDwAEEAKAKkAUH/AHFBAnRqIC9DAADAP0EAKgK0dJRDAAAAP0EAKgK4dJSSlEMAAAAwQQAoAghBACoCqHBDAAAAAF5sspSSOAIAQbDwAEEAKAKkAUHBAGtB/wBxQQJ0aioCACFVQQAgVUMAAAAAIFW8QYCAgPwHcRs4ArB0QRBBACgCiAFBAnRqKgIAQwAAYMGSi0MAAAA/XSEZQQAgGTYCvHRBACoCyHQgGUEAKALAdGuyQwAAAABespJDRaKRPEEAKgLIdEMAAAAAXrKUkyFWQQAgVkMAAAAAIFa8QYCAgPwHcRs4AsR0Qcz0AEEAKAKkAUE/cUECdGogMEMAAMA/QQAqAtB2lEMAAAA/QQAqAtR2lJKUQwAAADBBACgCCEEAKgLEdEMAAAAAXmyylJI4AgBBzPQAQQAoAqQBQTdrQT9xQQJ0aioCACFXQQAgV0MAAAAAIFe8QYCAgPwHcRs4Asx2QRBBACgCiAFBAnRqKgIAQwAAcMGSi0MAAAA/XSEaQQAgGjYC2HZBACoC5HYgGkEAKALcdmuyQwAAAABespJD7nejPEEAKgLkdkMAAAAAXrKUkyFYQQAgWEMAAAAAIFi8QYCAgPwHcRs4AuB2Qej2AEEAKAKkAUE/cUECdGogMUMAAMA/QQAqAux4lEMAAAA/QQAqAvB4lJKUQwAAADBBACgCCEEAKgLgdkMAAAAAXmyylJI4AgBB6PYAQQAoAqQBQTFrQT9xQQJ0aioCACFZQQAgWUMAAAAAIFm8QYCAgPwHcRs4Auh4QRBBACgCiAFBAnRqKgIAQwAAiMGSi0MAAAA/XSEbQQAgGzYC9HhBACoCgHkgG0EAKAL4eGuyQwAAAABespJDSTTaPEEAKgKAeUMAAAAAXrKUkyFaQQAgWkMAAAAAIFq8QYCAgPwHcRs4Avx4QYT5AEEAKAKkAUE/cUECdGogMkMAAMA/QQAqAoh7lEMAAAA/QQAqAox7lJKUQwAAADBBACgCCEEAKgL8eEMAAAAAXmyylJI4AgBBhPkAQQAoAqQBQSRrQT9xQQJ0aioCACFbQQAgW0MAAAAAIFu8QYCAgPwHcRs4AoR7QRBBACgCiAFBAnRqKgIAQwAAmMGSi0MAAAA/XSEcQQAgHDYCkHtBACoCnHsgHEEAKAKUe2uyQwAAAABespJDRaIRPUEAKgKce0MAAAAAXrKUkyFcQQAgXEMAAAAAIFy8QYCAgPwHcRs4Aph7QaD7AEEAKAKkAUEfcUECdGogM0MAAMA/QQAqAqR8lEMAAAA/QQAqAqh8lJKUQwAAADBBACgCCEEAKgKYe0MAAAAAXmyylJI4AgBBoPsAQQAoAqQBQRtrQR9xQQJ0aioCACFdQQAgXUMAAAAAIF28QYCAgPwHcRs4AqB8QRBBACgCiAFBAnRqKgIAQwAAoMGSi0MAAAA/XSEdQQAgHTYCrHxBACoCuHwgHUEAKAKwfGuyQwAAAABespJD7ncjPUEAKgK4fEMAAAAAXrKUkyFeQQAgXkMAAAAAIF68QYCAgPwHcRs4ArR8Qbz8AEEAKAKkAUEfcUECdGogNEMAAMA/QQAqAsB9lEMAAAA/QQAqAsR9lJKUQwAAADBBACgCCEEAKgK0fEMAAAAAXmyylJI4AgBBvPwAQQAoAqQBQRhrQR9xQQJ0aioCACFfQQAgX0MAAAAAIF+8QYCAgPwHcRs4Arx9QRBBACgCiAFBAnRqKgIAQwAAqMGSi0MAAAA/XSEeQQAgHjYCyH1BACoC1H0gHkEAKALMfWuyQwAAAABespJD22VCPUEAKgLUfUMAAAAAXrKUkyFgQQAgYEMAAAAAIGC8QYCAgPwHcRs4AtB9Qdj9AEEAKAKkAUEfcUECdGogNUMAAMA/QQAqAtx+lEMAAAA/QQAqAuB+lJKUQwAAADBBACgCCEEAKgLQfUMAAAAAXmyylJI4AgBB2P0AQQAoAqQBQRRrQR9xQQJ0aioCACFhQQAgYUMAAAAAIGG8QYCAgPwHcRs4Ath+IAQgCGpDZmZmP0PsBdE+QQAqAqgDlEMeAwM/QQAqAsQFlEMc73w/QQAqAuAVlEMSsHY/QQAqAvwllJJDekdwP0EAKgKYNpSSQ+mxaT9BACoCtD6UkkN162I/QQAqAtBGlJJDme9bP0EAKgLsTpSSQxK5VD9BACoCiFeUkkOzQU0/QQAqAqRflJJDH4JFP0EAKgLAY5SSQ3xxPT9BACoC3GeUkiBRkkMJLyw/QQAqApRwlJJDmN4iP0EAKgKwdJSSQ0D9GD9BACoCzHaUkkPdbA4/QQAqAuh4lJKSQ4wC7T5BACoChHuUkpJDI6iwPkEAKgKgfJSSQ3fWiD5BACoCvH2UkkOzAR4+QQAqAth+lJKUOAIAIAUgCGpDZmZmP0OzAR4+QQAqAuAVlEN31og+QQAqAvwllJJDI6iwPkEAKgKYNpSSQ+wF0T5BACoCtD6UkkOMAu0+QQAqAtBGlJJDHgMDP0EAKgLsTpSSQ91sDj9BACoCiFeUkkNA/Rg/QQAqAqRflJJDmN4iP0EAKgLAY5SSQwkvLD9BACoC3GeUkiBRkkN8cT0/QQAqApRwlJJDH4JFP0EAKgKwdJSSQ7NBTT9BACoCzHaUkkMSuVQ/QQAqAuh4lJJDme9bP0EAKgLEBZSSQ3XrYj9BACoChHuUkkPpsWk/QQAqAqgDlJJDekdwP0EAKgKgfJSSQxKwdj9BACoCvH2UkkMc73w/QQAqAth+lJKUOAIAQQBBACgCADYCBEEAQQAoAgg2AgxBAEEAKgJcOAJgQQBBACgCZDYCaEEAQQAoAmw2AnBBAEEAKAJ4NgJ8QQBBACgCgAE2AoQBQQBBACgCiAE2AowBQQBBACgCkAE2ApQBQQBBACoCmAE4ApwBQQBBACgCpAFBAWo2AqQBQQBBACoCrAM4ArADQQBBACoCqAM4AqwDQQBBACgCtAM2ArgDQQBBACoCvAM4AsADQQBBACoCyAU4AswFQQBBACoCxAU4AsgFQQBBACgC0AU2AtQFQQBBACoC2AU4AtwFQQBBACoC5BU4AugVQQBBACoC4BU4AuQVQQBBACgC7BU2AvAVQQBBACoC9BU4AvgVQQBBACoCgCY4AoQmQQBBACoC/CU4AoAmQQBBACgCiCY2AowmQQBBACoCkCY4ApQmQQBBACoCnDY4AqA2QQBBACoCmDY4Apw2QQBBACgCpDY2Aqg2QQBBACoCrDY4ArA2QQBBACoCuD44Arw+QQBBACoCtD44Arg+QQBBACgCwD42AsQ+QQBBACoCyD44Asw+QQBBACoC1EY4AthGQQBBACoC0EY4AtRGQQBBACgC3EY2AuBGQQBBACoC5EY4AuhGQQBBACoC8E44AvROQQBBACoC7E44AvBOQQBBACgC+E42AvxOQQBBACoCgE84AoRPQQBBACoCjFc4ApBXQQBBACoCiFc4AoxXQQBBACgClFc2AphXQQBBACoCnFc4AqBXQQBBACoCqF84AqxfQQBBACoCpF84AqhfQQBBACgCsF82ArRfQQBBACoCuF84ArxfQQBBACoCxGM4AshjQQBBACoCwGM4AsRjQQBBACgCzGM2AtBjQQBBACoC1GM4AthjQQBBACoC4Gc4AuRnQQBBACoC3Gc4AuBnQQBBACgC6Gc2AuxnQQBBACoC8Gc4AvRnQQBBACoC/Gs4AoBsQQBBACoC+Gs4AvxrQQBBACgChGw2AohsQQBBACoCjGw4ApBsQQBBACoCmHA4ApxwQQBBACoClHA4AphwQQBBACgCoHA2AqRwQQBBACoCqHA4AqxwQQBBACoCtHQ4Arh0QQBBACoCsHQ4ArR0QQBBACgCvHQ2AsB0QQBBACoCxHQ4Ash0QQBBACoC0HY4AtR2QQBBACoCzHY4AtB2QQBBACgC2HY2Atx2QQBBACoC4HY4AuR2QQBBACoC7Hg4AvB4QQBBACoC6Hg4Aux4QQBBACgC9Hg2Avh4QQBBACoC/Hg4AoB5QQBBACoCiHs4Aox7QQBBACoChHs4Aoh7QQBBACgCkHs2ApR7QQBBACoCmHs4Apx7QQBBACoCpHw4Aqh8QQBBACoCoHw4AqR8QQBBACgCrHw2ArB8QQBBACoCtHw4Arh8QQBBACoCwH04AsR9QQBBACoCvH04AsB9QQBBACgCyH02Asx9QQBBACoC0H04AtR9QQBBACoC3H44AuB+QQBBACoC2H44Atx+IAhBBGohCCAIQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAJQDwuOgICAAAAgACABEAIgACABEAsL+aOAgAABXH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACFAQQAhQUEAIUJBACFDQQAhREEAIUVBACFGQQAhR0EAIUhBACFJQQAhSkEAIUtBACFMQQAhTUEAIU5BACFPQQAhUEEAIVFBACFSQQAhU0EAIVRBACFVQQAhVkEAIVdBACFYQQAhWUEAIVpBACFbQQAhXEEAIQEDQAJAQQAgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQQggAkECdGpBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQdwAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHkACAEQQJ0akEANgIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB7AAgBUECdGpBADYCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAQfgAIAZBAnRqQQA2AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEGAASAHQQJ0akEANgIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBBiAEgCEECdGpBADYCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQZABIAlBAnRqQQA2AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGYASAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQBBADYCpAFBACELA0ACQEGoASALQQJ0akMAAAAAOAIAIAtBAWohCyALQcAASARADAIMAQsLC0EAIQwDQAJAQagDIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBA0gEQAwCDAELCwtBACENA0ACQEG0AyANQQJ0akEANgIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBBvAMgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQcQDIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BwABIBEAMAgwBCwsLQQAhEANAAkBBxAUgEEECdGpDAAAAADgCACAQQQFqIRAgEEEDSARADAIMAQsLC0EAIREDQAJAQdAFIBFBAnRqQQA2AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEHYBSASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB4AUgE0ECdGpDAAAAADgCACATQQFqIRMgE0GABEgEQAwCDAELCwtBACEUA0ACQEHgFSAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQQNIBEAMAgwBCwsLQQAhFQNAAkBB7BUgFUECdGpBADYCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfQVIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQEH8FSAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQYAESARADAIMAQsLC0EAIRgDQAJAQfwlIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBA0gEQAwCDAELCwtBACEZA0ACQEGIJiAZQQJ0akEANgIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBkCYgGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQZgmIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBgARIBEAMAgwBCwsLQQAhHANAAkBBmDYgHEECdGpDAAAAADgCACAcQQFqIRwgHEEDSARADAIMAQsLC0EAIR0DQAJAQaQ2IB1BAnRqQQA2AgAgHUEBaiEdIB1BAkgEQAwCDAELCwtBACEeA0ACQEGsNiAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBBtDYgH0ECdGpDAAAAADgCACAfQQFqIR8gH0GAAkgEQAwCDAELCwtBACEgA0ACQEG0PiAgQQJ0akMAAAAAOAIAICBBAWohICAgQQNIBEAMAgwBCwsLQQAhIQNAAkBBwD4gIUECdGpBADYCACAhQQFqISEgIUECSARADAIMAQsLC0EAISIDQAJAQcg+ICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBAkgEQAwCDAELCwtBACEjA0ACQEHQPiAjQQJ0akMAAAAAOAIAICNBAWohIyAjQYACSARADAIMAQsLC0EAISQDQAJAQdDGACAkQQJ0akMAAAAAOAIAICRBAWohJCAkQQNIBEAMAgwBCwsLQQAhJQNAAkBB3MYAICVBAnRqQQA2AgAgJUEBaiElICVBAkgEQAwCDAELCwtBACEmA0ACQEHkxgAgJkECdGpDAAAAADgCACAmQQFqISYgJkECSARADAIMAQsLC0EAIScDQAJAQezGACAnQQJ0akMAAAAAOAIAICdBAWohJyAnQYACSARADAIMAQsLC0EAISgDQAJAQezOACAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQNIBEAMAgwBCwsLQQAhKQNAAkBB+M4AIClBAnRqQQA2AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEGAzwAgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQYjPACArQQJ0akMAAAAAOAIAICtBAWohKyArQYACSARADAIMAQsLC0EAISwDQAJAQYjXACAsQQJ0akMAAAAAOAIAICxBAWohLCAsQQNIBEAMAgwBCwsLQQAhLQNAAkBBlNcAIC1BAnRqQQA2AgAgLUEBaiEtIC1BAkgEQAwCDAELCwtBACEuA0ACQEGc1wAgLkECdGpDAAAAADgCACAuQQFqIS4gLkECSARADAIMAQsLC0EAIS8DQAJAQaTXACAvQQJ0akMAAAAAOAIAIC9BAWohLyAvQYACSARADAIMAQsLC0EAITADQAJAQaTfACAwQQJ0akMAAAAAOAIAIDBBAWohMCAwQQNIBEAMAgwBCwsLQQAhMQNAAkBBsN8AIDFBAnRqQQA2AgAgMUEBaiExIDFBAkgEQAwCDAELCwtBACEyA0ACQEG43wAgMkECdGpDAAAAADgCACAyQQFqITIgMkECSARADAIMAQsLC0EAITMDQAJAQcDfACAzQQJ0akMAAAAAOAIAIDNBAWohMyAzQYABSARADAIMAQsLC0EAITQDQAJAQcDjACA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QQNIBEAMAgwBCwsLQQAhNQNAAkBBzOMAIDVBAnRqQQA2AgAgNUEBaiE1IDVBAkgEQAwCDAELCwtBACE2A0ACQEHU4wAgNkECdGpDAAAAADgCACA2QQFqITYgNkECSARADAIMAQsLC0EAITcDQAJAQdzjACA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QYABSARADAIMAQsLC0EAITgDQAJAQdznACA4QQJ0akMAAAAAOAIAIDhBAWohOCA4QQNIBEAMAgwBCwsLQQAhOQNAAkBB6OcAIDlBAnRqQQA2AgAgOUEBaiE5IDlBAkgEQAwCDAELCwtBACE6A0ACQEHw5wAgOkECdGpDAAAAADgCACA6QQFqITogOkECSARADAIMAQsLC0EAITsDQAJAQfjnACA7QQJ0akMAAAAAOAIAIDtBAWohOyA7QYABSARADAIMAQsLC0EAITwDQAJAQfjrACA8QQJ0akMAAAAAOAIAIDxBAWohPCA8QQNIBEAMAgwBCwsLQQAhPQNAAkBBhOwAID1BAnRqQQA2AgAgPUEBaiE9ID1BAkgEQAwCDAELCwtBACE+A0ACQEGM7AAgPkECdGpDAAAAADgCACA+QQFqIT4gPkECSARADAIMAQsLC0EAIT8DQAJAQZTsACA/QQJ0akMAAAAAOAIAID9BAWohPyA/QYABSARADAIMAQsLC0EAIUADQAJAQZTwACBAQQJ0akMAAAAAOAIAIEBBAWohQCBAQQNIBEAMAgwBCwsLQQAhQQNAAkBBoPAAIEFBAnRqQQA2AgAgQUEBaiFBIEFBAkgEQAwCDAELCwtBACFCA0ACQEGo8AAgQkECdGpDAAAAADgCACBCQQFqIUIgQkECSARADAIMAQsLC0EAIUMDQAJAQbDwACBDQQJ0akMAAAAAOAIAIENBAWohQyBDQYABSARADAIMAQsLC0EAIUQDQAJAQbD0ACBEQQJ0akMAAAAAOAIAIERBAWohRCBEQQNIBEAMAgwBCwsLQQAhRQNAAkBBvPQAIEVBAnRqQQA2AgAgRUEBaiFFIEVBAkgEQAwCDAELCwtBACFGA0ACQEHE9AAgRkECdGpDAAAAADgCACBGQQFqIUYgRkECSARADAIMAQsLC0EAIUcDQAJAQcz0ACBHQQJ0akMAAAAAOAIAIEdBAWohRyBHQcAASARADAIMAQsLC0EAIUgDQAJAQcz2ACBIQQJ0akMAAAAAOAIAIEhBAWohSCBIQQNIBEAMAgwBCwsLQQAhSQNAAkBB2PYAIElBAnRqQQA2AgAgSUEBaiFJIElBAkgEQAwCDAELCwtBACFKA0ACQEHg9gAgSkECdGpDAAAAADgCACBKQQFqIUogSkECSARADAIMAQsLC0EAIUsDQAJAQej2ACBLQQJ0akMAAAAAOAIAIEtBAWohSyBLQcAASARADAIMAQsLC0EAIUwDQAJAQej4ACBMQQJ0akMAAAAAOAIAIExBAWohTCBMQQNIBEAMAgwBCwsLQQAhTQNAAkBB9PgAIE1BAnRqQQA2AgAgTUEBaiFNIE1BAkgEQAwCDAELCwtBACFOA0ACQEH8+AAgTkECdGpDAAAAADgCACBOQQFqIU4gTkECSARADAIMAQsLC0EAIU8DQAJAQYT5ACBPQQJ0akMAAAAAOAIAIE9BAWohTyBPQcAASARADAIMAQsLC0EAIVADQAJAQYT7ACBQQQJ0akMAAAAAOAIAIFBBAWohUCBQQQNIBEAMAgwBCwsLQQAhUQNAAkBBkPsAIFFBAnRqQQA2AgAgUUEBaiFRIFFBAkgEQAwCDAELCwtBACFSA0ACQEGY+wAgUkECdGpDAAAAADgCACBSQQFqIVIgUkECSARADAIMAQsLC0EAIVMDQAJAQaD7ACBTQQJ0akMAAAAAOAIAIFNBAWohUyBTQSBIBEAMAgwBCwsLQQAhVANAAkBBoPwAIFRBAnRqQwAAAAA4AgAgVEEBaiFUIFRBA0gEQAwCDAELCwtBACFVA0ACQEGs/AAgVUECdGpBADYCACBVQQFqIVUgVUECSARADAIMAQsLC0EAIVYDQAJAQbT8ACBWQQJ0akMAAAAAOAIAIFZBAWohViBWQQJIBEAMAgwBCwsLQQAhVwNAAkBBvPwAIFdBAnRqQwAAAAA4AgAgV0EBaiFXIFdBIEgEQAwCDAELCwtBACFYA0ACQEG8/QAgWEECdGpDAAAAADgCACBYQQFqIVggWEEDSARADAIMAQsLC0EAIVkDQAJAQcj9ACBZQQJ0akEANgIAIFlBAWohWSBZQQJIBEAMAgwBCwsLQQAhWgNAAkBB0P0AIFpBAnRqQwAAAAA4AgAgWkEBaiFaIFpBAkgEQAwCDAELCwtBACFbA0ACQEHY/QAgW0ECdGpDAAAAADgCACBbQQFqIVsgW0EgSARADAIMAQsLC0EAIVwDQAJAQdj+ACBcQQJ0akMAAAAAOAIAIFxBAWohXCBcQQNIBEAMAgwBCwsLC9mAgIAAAQF/QQAhAkEAIAE2AlBBACECA0ACQEEQIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBEEgEQAwCDAELCwtBAEMAAHBCQwCAO0hDAACAP0EAKAJQspeWlDgCVAuQgICAAAAgACABEAogABAMIAAQCQuhgICAAABBAEMAAPBDOAJYQQBDAAAwQTgCdEEAQwAAoEA4AqABC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC4KKgIAAAQBBAAv7CXsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIiwidmVyc2lvbiI6IjIuNS4xMiIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiMTYyMjgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjExNiIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMTYwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMiAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMC4xIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SPentatonicDryHarpProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPentatonicDryHarpProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPentatonicDryHarpProcessor.parse_items(group.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
            SPentatonicDryHarpProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SPentatonicDryHarpProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SPentatonicDryHarpProcessor.parse_ui(JSON.parse(getJSONSPentatonicDryHarp()).ui, params, SPentatonicDryHarpProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSPentatonicDryHarp());

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
        
        this.factory = SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance.exports;
        this.HEAP = SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SPentatonicDryHarpProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SPentatonicDryHarpProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SPentatonicDryHarpProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SPentatonicDryHarpProcessor.parse_ui(this.json_object.ui, this, SPentatonicDryHarpProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SPentatonicDryHarpProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SPentatonicDryHarpProcessor.buffer_size, this.ins, this.outs);
        
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

SPentatonicDryHarpProcessor.buffer_size = 128;

SPentatonicDryHarpProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SPentatonicDryHarpProcessor.atob(getBase64CodeSPentatonicDryHarp()));
    SPentatonicDryHarpProcessor.SPentatonicDryHarp_instance = new WebAssembly.Instance(wasm_module, SPentatonicDryHarpProcessor.importObject);
    registerProcessor('SPentatonicDryHarp', SPentatonicDryHarpProcessor);
} catch (e) {
    console.log(e); console.log("Faust SPentatonicDryHarp cannot be loaded or compiled");
}

