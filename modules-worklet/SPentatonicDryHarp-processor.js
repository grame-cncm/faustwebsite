
/*
Code generated with Faust version 2.5.21
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPentatonicDryHarp() {
	return "{\"name\":\"PentatonicDryHarp\",\"version\":\"2.5.21\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"16228\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"PentatonicDryHarp\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"harp\",\"items\":[{\"type\":\"hslider\",\"label\":\"Instrument Hand\",\"address\":\"/harp/Instrument_Hand\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"11\",\"min\":\"0\",\"max\":\"21\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed\",\"address\":\"/harp/Parameters/Speed\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"480\",\"min\":\"180\",\"max\":\"720\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Resonance\",\"address\":\"/harp/Parameters/Resonance\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"acc\":\"2 1 -12 0 10\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0.1\",\"max\":\"10\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeSPentatonicDryHarp() { return "AGFzbQEAAAAB1oCAgAAQYAF/AX9gAn9/AGAEf39/fwBgAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AAKYgICAAAIDZW52BF9hYnMAAANlbnYFX3Bvd2YADgOPgICAAA4BAgMEBQYHCAkKCwwNDwWHgICAAAEAgoCAgAAHuoGAgAAMB2NvbXB1dGUAAwxnZXROdW1JbnB1dHMABA1nZXROdW1PdXRwdXRzAAUNZ2V0UGFyYW1WYWx1ZQAGDWdldFNhbXBsZVJhdGUABwRpbml0AAgNaW5zdGFuY2VDbGVhcgAJEWluc3RhbmNlQ29uc3RhbnRzAAoMaW5zdGFuY2VJbml0AAsaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADA1zZXRQYXJhbVZhbHVlAA8GbWVtb3J5AgAKpuSAgAAOgoCAgAAAC4a+gIAAAht/Q31BACEEQQAhBUMAAAAAIR9DAAAAACEgQwAAAAAhIUEAIQZBACEHQwAAAAAhIkMAAAAAISNDAAAAACEkQwAAAAAhJUMAAAAAISZDAAAAACEnQwAAAAAhKEMAAAAAISlDAAAAACEqQwAAAAAhK0MAAAAAISxDAAAAACEtQwAAAAAhLkMAAAAAIS9DAAAAACEwQwAAAAAhMUMAAAAAITJDAAAAACEzQwAAAAAhNEMAAAAAITVBACEIQwAAAAAhNkEAIQlBACEKQwAAAAAhN0MAAAAAIThBACELQwAAAAAhOUMAAAAAITpBACEMQwAAAAAhO0MAAAAAITxBACENQwAAAAAhPUMAAAAAIT5BACEOQwAAAAAhP0MAAAAAIUBBACEPQwAAAAAhQUMAAAAAIUJBACEQQwAAAAAhQ0MAAAAAIURBACERQwAAAAAhRUMAAAAAIUZBACESQwAAAAAhR0MAAAAAIUhBACETQwAAAAAhSUMAAAAAIUpBACEUQwAAAAAhS0MAAAAAIUxBACEVQwAAAAAhTUMAAAAAIU5DAAAAACFPQQAhFkMAAAAAIVBDAAAAACFRQQAhF0MAAAAAIVJDAAAAACFTQQAhGEMAAAAAIVRDAAAAACFVQQAhGUMAAAAAIVZDAAAAACFXQQAhGkMAAAAAIVhDAAAAACFZQQAhG0MAAAAAIVpDAAAAACFbQQAhHEMAAAAAIVxDAAAAACFdQQAhHUMAAAAAIV5DAAAAACFfQQAhHkMAAAAAIWBDAAAAACFhIANBAGooAgAhBCADQQRqKAIAIQVDzczMPUMAACBBQQAqAgCWlyEfQwAAAD9DbxKDOkOFL6c6IB+VEAGUISBDbxKDOkEAKgJclCEhQQAqAnioIQYgBrJDAAAAAF8hB0MAAAA/Q28SgzpD0n76OyAflRABlCEiQwAAAD9DbxKDOkOBKt87IB+VEAGUISNDAAAAP0NvEoM6Q37RxjsgH5UQAZQhJEMAAAA/Q28SgzpDhS+nOyAflRABlCElQwAAAD9DbxKDOkMJ8pQ7IB+VEAGUISZDAAAAP0NvEoM6Q9J+ejsgH5UQAZQhJ0MAAAA/Q28SgzpDgSpfOyAflRABlCEoQwAAAD9DbxKDOkN+0UY7IB+VEAGUISlDAAAAP0NvEoM6Q4UvJzsgH5UQAZQhKkMAAAA/Q28SgzpDCfIUOyAflRABlCErQwAAAD9DbxKDOkPSfvo6IB+VEAGUISxDAAAAP0NvEoM6Q4Eq3zogH5UQAZQhLUMAAAA/Q28SgzpDftHGOiAflRABlCEuQwAAAD9DbxKDOkMJ8pQ6IB+VEAGUIS9DAAAAP0NvEoM6Q9J+ejogH5UQAZQhMEMAAAA/Q28SgzpDgSpfOiAflRABlCExQwAAAD9DbxKDOkN+0UY6IB+VEAGUITJDAAAAP0NvEoM6Q4UvJzogH5UQAZQhM0MAAAA/Q28SgzpDCfIUOiAflRABlCE0QwAAAD9DbxKDOkPSfvo5IB+VEAGUITVBACEIA0ACQEEAQQE2AgRBAEHtnJmOBEEAKAIQbEG54ABqNgIMICFDd75/P0EAKgJklJIhNkEAIDZDAAAAACA2vEGAgID8B3EbOAJgQQBBACgCCEEAKAJsakEAKgJYQwAANENDAAA0REEAKgJglpeospWobzYCaEEAKAJoQQBGIQlBACAJNgJwQQAgBjYCfEEAQQBBACgCiAEgBkEAKAKAAWsQAGpBACgCdBs2AoQBQQAgCUEAKAKQAWpBD282AowBQRRBACgCjAFBDyAJQQAoAoQBQQBKIAdycRtBAnRqIAayOAIAQRRBACgCjAFBAnRqKgIAQwAAYMGSi0MAAAA/XSEKQQAgCjYClAFBACoCoAEgCkEAKAKYAWuyQwAAAABespJDRaKRPEEAKgKgAUMAAAAAXrKUkyE3QQAgN0MAAAAAIDe8QYCAgPwHcRs4ApwBQagBQQAoAqQBQT9xQQJ0aiAgQwAAwD9BACoCrAOUQwAAAD9BACoCsAOUkpRDAAAAMEEAKAIMQQAqApwBQwAAAABebLKUkjgCAEGoAUEAKAKkAUE3a0E/cUECdGoqAgAhOEEAIDhDAAAAACA4vEGAgID8B3EbOAKoA0EUQQAoAowBQQJ0aioCAEMAAIC/kotDAAAAP10hC0EAIAs2ArQDQQAqAsADIAtBACgCuANrskMAAAAAXrKSQ9tlQjtBACoCwANDAAAAAF6ylJMhOUEAIDlDAAAAACA5vEGAgID8B3EbOAK8A0HEA0EAKAKkAUH/A3FBAnRqICJDAADAP0EAKgLIE5RDAAAAP0EAKgLME5SSlEMAAAAwQQAoAgxBACoCvANDAAAAAF5sspSSOAIAQcQDQQAoAqQBQdACa0H/A3FBAnRqKgIAITpBACA6QwAAAAAgOrxBgICA/AdxGzgCxBNBFEEAKAKMAUECdGoqAgBDAAAAwJKLQwAAAD9dIQxBACAMNgLQE0EAKgLcEyAMQQAoAtQTa7JDAAAAAF6ykkNJNFo7QQAqAtwTQwAAAABespSTITtBACA7QwAAAAAgO7xBgICA/AdxGzgC2BNB4BNBACgCpAFB/wNxQQJ0aiAjQwAAwD9BACoC5COUQwAAAD9BACoC6COUkpRDAAAAMEEAKAIMQQAqAtgTQwAAAABebLKUkjgCAEHgE0EAKAKkAUGrAmtB/wNxQQJ0aioCACE8QQAgPEMAAAAAIDy8QYCAgPwHcRs4AuAjQRRBACgCjAFBAnRqKgIAQwAAQMCSi0MAAAA/XSENQQAgDTYC7CNBACoC+CMgDUEAKALwI2uyQwAAAABespJDDe10O0EAKgL4I0MAAAAAXrKUkyE9QQAgPUMAAAAAID28QYCAgPwHcRs4AvQjQfwjQQAoAqQBQf8DcUECdGogJEMAAMA/QQAqAoA0lEMAAAA/QQAqAoQ0lJKUQwAAADBBACgCDEEAKgL0I0MAAAAAXmyylJI4AgBB/CNBACgCpAFBigJrQf8DcUECdGoqAgAhPkEAID5DAAAAACA+vEGAgID8B3EbOAL8M0EUQQAoAowBQQJ0aioCAEMAAIDAkotDAAAAP10hDkEAIA42Aog0QQAqApQ0IA5BACgCjDRrskMAAAAAXrKSQ0WikTtBACoClDRDAAAAAF6ylJMhP0EAID9DAAAAACA/vEGAgID8B3EbOAKQNEGYNEEAKAKkAUH/AXFBAnRqICVDAADAP0EAKgKcPJRDAAAAP0EAKgKgPJSSlEMAAAAwQQAoAgxBACoCkDRDAAAAAF5sspSSOAIAQZg0QQAoAqQBQeABa0H/AXFBAnRqKgIAIUBBACBAQwAAAAAgQLxBgICA/AdxGzgCmDxBFEEAKAKMAUECdGoqAgBDAACgwJKLQwAAAD9dIQ9BACAPNgKkPEEAKgKwPCAPQQAoAqg8a7JDAAAAAF6ykkPud6M7QQAqArA8QwAAAABespSTIUFBACBBQwAAAAAgQbxBgICA/AdxGzgCrDxBtDxBACgCpAFB/wFxQQJ0aiAmQwAAwD9BACoCuESUQwAAAD9BACoCvESUkpRDAAAAMEEAKAIMQQAqAqw8QwAAAABebLKUkjgCAEG0PEEAKAKkAUHHAWtB/wFxQQJ0aioCACFCQQAgQkMAAAAAIEK8QYCAgPwHcRs4ArREQRRBACgCjAFBAnRqKgIAQwAAwMCSi0MAAAA/XSEQQQAgEDYCwERBACoCzEQgEEEAKALERGuyQwAAAABespJD22XCO0EAKgLMREMAAAAAXrKUkyFDQQAgQ0MAAAAAIEO8QYCAgPwHcRs4AshEQdDEAEEAKAKkAUH/AXFBAnRqICdDAADAP0EAKgLUTJRDAAAAP0EAKgLYTJSSlEMAAAAwQQAoAgxBACoCyERDAAAAAF5sspSSOAIAQdDEAEEAKAKkAUGnAWtB/wFxQQJ0aioCACFEQQAgREMAAAAAIES8QYCAgPwHcRs4AtBMQRRBACgCjAFBAnRqKgIAQwAA4MCSi0MAAAA/XSERQQAgETYC3ExBACoC6EwgEUEAKALgTGuyQwAAAABespJDSTTaO0EAKgLoTEMAAAAAXrKUkyFFQQAgRUMAAAAAIEW8QYCAgPwHcRs4AuRMQezMAEEAKAKkAUH/AXFBAnRqIChDAADAP0EAKgLwVJRDAAAAP0EAKgL0VJSSlEMAAAAwQQAoAgxBACoC5ExDAAAAAF5sspSSOAIAQezMAEEAKAKkAUGVAWtB/wFxQQJ0aioCACFGQQAgRkMAAAAAIEa8QYCAgPwHcRs4AuxUQRRBACgCjAFBAnRqKgIAQwAAAMGSi0MAAAA/XSESQQAgEjYC+FRBACoChFUgEkEAKAL8VGuyQwAAAABespJDDe30O0EAKgKEVUMAAAAAXrKUkyFHQQAgR0MAAAAAIEe8QYCAgPwHcRs4AoBVQYjVAEEAKAKkAUH/AXFBAnRqIClDAADAP0EAKgKMXZRDAAAAP0EAKgKQXZSSlEMAAAAwQQAoAgxBACoCgFVDAAAAAF5sspSSOAIAQYjVAEEAKAKkAUGEAWtB/wFxQQJ0aioCACFIQQAgSEMAAAAAIEi8QYCAgPwHcRs4AohdQRRBACgCjAFBAnRqKgIAQwAAEMGSi0MAAAA/XSETQQAgEzYClF1BACoCoF0gE0EAKAKYXWuyQwAAAABespJDRaIRPEEAKgKgXUMAAAAAXrKUkyFJQQAgSUMAAAAAIEm8QYCAgPwHcRs4ApxdQaTdAEEAKAKkAUH/AHFBAnRqICpDAADAP0EAKgKoYZRDAAAAP0EAKgKsYZSSlEMAAAAwQQAoAgxBACoCnF1DAAAAAF5sspSSOAIAQaTdAEEAKAKkAUHvAGtB/wBxQQJ0aioCACFKQQAgSkMAAAAAIEq8QYCAgPwHcRs4AqRhQRRBACgCjAFBAnRqKgIAQwAAIMGSi0MAAAA/XSEUQQAgFDYCsGFBACoCvGEgFEEAKAK0YWuyQwAAAABespJD7ncjPEEAKgK8YUMAAAAAXrKUkyFLQQAgS0MAAAAAIEu8QYCAgPwHcRs4ArhhQcDhAEEAKAKkAUH/AHFBAnRqICtDAADAP0EAKgLEZZRDAAAAP0EAKgLIZZSSlEMAAAAwQQAoAgxBACoCuGFDAAAAAF5sspSSOAIAQcDhAEEAKAKkAUHjAGtB/wBxQQJ0aioCACFMQQAgTEMAAAAAIEy8QYCAgPwHcRs4AsBlQRRBACgCjAFBAnRqKgIAQwAAMMGSi0MAAAA/XSEVQQAgFTYCzGVBACoC2GUgFUEAKALQZWuyQwAAAABespJD22VCPEEAKgLYZUMAAAAAXrKUkyFNQQAgTUMAAAAAIE28QYCAgPwHcRs4AtRlQdzlAEEAKAKkAUH/AHFBAnRqICxDAADAP0EAKgLgaZRDAAAAP0EAKgLkaZSSlEMAAAAwQQAoAgxBACoC1GVDAAAAAF5sspSSOAIAQdzlAEEAKAKkAUHTAGtB/wBxQQJ0aioCACFOQQAgTkMAAAAAIE68QYCAgPwHcRs4AtxpQ/MENT9BACoC3GmUIU9BFEEAKAKMAUECdGoqAgBDAABAwZKLQwAAAD9dIRZBACAWNgLoaUEAKgL0aSAWQQAoAuxpa7JDAAAAAF6ykkNJNFo8QQAqAvRpQwAAAABespSTIVBBACBQQwAAAAAgULxBgICA/AdxGzgC8GlB+OkAQQAoAqQBQf8AcUECdGogLUMAAMA/QQAqAvxtlEMAAAA/QQAqAoBulJKUQwAAADBBACgCDEEAKgLwaUMAAAAAXmyylJI4AgBB+OkAQQAoAqQBQcoAa0H/AHFBAnRqKgIAIVFBACBRQwAAAAAgUbxBgICA/AdxGzgC+G1BFEEAKAKMAUECdGoqAgBDAABQwZKLQwAAAD9dIRdBACAXNgKEbkEAKgKQbiAXQQAoAohua7JDAAAAAF6ykkMN7XQ8QQAqApBuQwAAAABespSTIVJBACBSQwAAAAAgUrxBgICA/AdxGzgCjG5BlO4AQQAoAqQBQf8AcUECdGogLkMAAMA/QQAqAphylEMAAAA/QQAqApxylJKUQwAAADBBACgCDEEAKgKMbkMAAAAAXmyylJI4AgBBlO4AQQAoAqQBQcEAa0H/AHFBAnRqKgIAIVNBACBTQwAAAAAgU7xBgICA/AdxGzgClHJBFEEAKAKMAUECdGoqAgBDAABwwZKLQwAAAD9dIRhBACAYNgKgckEAKgKsciAYQQAoAqRya7JDAAAAAF6ykkPud6M8QQAqAqxyQwAAAABespSTIVRBACBUQwAAAAAgVLxBgICA/AdxGzgCqHJBsPIAQQAoAqQBQT9xQQJ0aiAvQwAAwD9BACoCtHSUQwAAAD9BACoCuHSUkpRDAAAAMEEAKAIMQQAqAqhyQwAAAABebLKUkjgCAEGw8gBBACgCpAFBMWtBP3FBAnRqKgIAIVVBACBVQwAAAAAgVbxBgICA/AdxGzgCsHRBFEEAKAKMAUECdGoqAgBDAACAwZKLQwAAAD9dIRlBACAZNgK8dEEAKgLIdCAZQQAoAsB0a7JDAAAAAF6ykkPbZcI8QQAqAsh0QwAAAABespSTIVZBACBWQwAAAAAgVrxBgICA/AdxGzgCxHRBzPQAQQAoAqQBQT9xQQJ0aiAwQwAAwD9BACoC0HaUQwAAAD9BACoC1HaUkpRDAAAAMEEAKAIMQQAqAsR0QwAAAABebLKUkjgCAEHM9ABBACgCpAFBKWtBP3FBAnRqKgIAIVdBACBXQwAAAAAgV7xBgICA/AdxGzgCzHZBFEEAKAKMAUECdGoqAgBDAACIwZKLQwAAAD9dIRpBACAaNgLYdkEAKgLkdiAaQQAoAtx2a7JDAAAAAF6ykkNJNNo8QQAqAuR2QwAAAABespSTIVhBACBYQwAAAAAgWLxBgICA/AdxGzgC4HZB6PYAQQAoAqQBQT9xQQJ0aiAxQwAAwD9BACoC7HiUQwAAAD9BACoC8HiUkpRDAAAAMEEAKAIMQQAqAuB2QwAAAABebLKUkjgCAEHo9gBBACgCpAFBJGtBP3FBAnRqKgIAIVlBACBZQwAAAAAgWbxBgICA/AdxGzgC6HhBFEEAKAKMAUECdGoqAgBDAACQwZKLQwAAAD9dIRtBACAbNgL0eEEAKgKAeSAbQQAoAvh4a7JDAAAAAF6ykkMN7fQ8QQAqAoB5QwAAAABespSTIVpBACBaQwAAAAAgWrxBgICA/AdxGzgC/HhBhPkAQQAoAqQBQT9xQQJ0aiAyQwAAwD9BACoCiHuUQwAAAD9BACoCjHuUkpRDAAAAMEEAKAIMQQAqAvx4QwAAAABebLKUkjgCAEGE+QBBACgCpAFBIGtBP3FBAnRqKgIAIVtBACBbQwAAAAAgW7xBgICA/AdxGzgChHtBFEEAKAKMAUECdGoqAgBDAACYwZKLQwAAAD9dIRxBACAcNgKQe0EAKgKceyAcQQAoApR7a7JDAAAAAF6ykkNFohE9QQAqApx7QwAAAABespSTIVxBACBcQwAAAAAgXLxBgICA/AdxGzgCmHtBoPsAQQAoAqQBQR9xQQJ0aiAzQwAAwD9BACoCpHyUQwAAAD9BACoCqHyUkpRDAAAAMEEAKAIMQQAqAph7QwAAAABebLKUkjgCAEGg+wBBACgCpAFBG2tBH3FBAnRqKgIAIV1BACBdQwAAAAAgXbxBgICA/AdxGzgCoHxBFEEAKAKMAUECdGoqAgBDAACgwZKLQwAAAD9dIR1BACAdNgKsfEEAKgK4fCAdQQAoArB8a7JDAAAAAF6ykkPudyM9QQAqArh8QwAAAABespSTIV5BACBeQwAAAAAgXrxBgICA/AdxGzgCtHxBvPwAQQAoAqQBQR9xQQJ0aiA0QwAAwD9BACoCwH2UQwAAAD9BACoCxH2UkpRDAAAAMEEAKAIMQQAqArR8QwAAAABebLKUkjgCAEG8/ABBACgCpAFBGGtBH3FBAnRqKgIAIV9BACBfQwAAAAAgX7xBgICA/AdxGzgCvH1BFEEAKAKMAUECdGoqAgBDAACowZKLQwAAAD9dIR5BACAeNgLIfUEAKgLUfSAeQQAoAsx9a7JDAAAAAF6ykkPbZUI9QQAqAtR9QwAAAABespSTIWBBACBgQwAAAAAgYLxBgICA/AdxGzgC0H1B2P0AQQAoAqQBQR9xQQJ0aiA1QwAAwD9BACoC3H6UQwAAAD9BACoC4H6UkpRDAAAAMEEAKAIMQQAqAtB9QwAAAABebLKUkjgCAEHY/QBBACgCpAFBFGtBH3FBAnRqKgIAIWFBACBhQwAAAAAgYbxBgICA/AdxGzgC2H4gBCAIakNmZmY/Q0D9GD9BACoCqAOUQxzvfD9BACoCxBOUQxKwdj9BACoC4COUkkN6R3A/QQAqAvwzlJJD6bFpP0EAKgKYPJSSQ3XrYj9BACoCtESUkkOZ71s/QQAqAtBMlJJDErlUP0EAKgLsVJSSQ7NBTT9BACoCiF2UkkMfgkU/QQAqAqRhlJJDfHE9P0EAKgLAZZSSIE+SQwkvLD9BACoC+G2UkkOY3iI/QQAqApRylJKSQ91sDj9BACoCsHSUkkMeAwM/QQAqAsx2lJJDjALtPkEAKgLoeJSSQ+wF0T5BACoChHuUkkMjqLA+QQAqAqB8lJJDd9aIPkEAKgK8fZSSQ7MBHj5BACoC2H6UkpQ4AgAgBSAIakNmZmY/Q7MBHj5BACoCxBOUQ3fWiD5BACoC4COUkkMjqLA+QQAqAvwzlJJD7AXRPkEAKgKYPJSSQ4wC7T5BACoCtESUkkMeAwM/QQAqAtBMlJJD3WwOP0EAKgLsVJSSQ0D9GD9BACoCiF2UkkOY3iI/QQAqAqRhlJJDCS8sP0EAKgLAZZSSIE+SQ3xxPT9BACoC+G2UkkMfgkU/QQAqApRylJJDs0FNP0EAKgKoA5SSQxK5VD9BACoCsHSUkkOZ71s/QQAqAsx2lJJDdetiP0EAKgLoeJSSQ+mxaT9BACoChHuUkkN6R3A/QQAqAqB8lJJDErB2P0EAKgK8fZSSQxzvfD9BACoC2H6UkpQ4AgBBAEEAKAIENgIIQQBBACgCDDYCEEEAQQAqAmA4AmRBAEEAKAJoNgJsQQBBACgCcDYCdEEAQQAoAnw2AoABQQBBACgChAE2AogBQQBBACgCjAE2ApABQQBBACgClAE2ApgBQQBBACoCnAE4AqABQQBBACgCpAFBAWo2AqQBQQBBACoCrAM4ArADQQBBACoCqAM4AqwDQQBBACgCtAM2ArgDQQBBACoCvAM4AsADQQBBACoCyBM4AswTQQBBACoCxBM4AsgTQQBBACgC0BM2AtQTQQBBACoC2BM4AtwTQQBBACoC5CM4AugjQQBBACoC4CM4AuQjQQBBACgC7CM2AvAjQQBBACoC9CM4AvgjQQBBACoCgDQ4AoQ0QQBBACoC/DM4AoA0QQBBACgCiDQ2Aow0QQBBACoCkDQ4ApQ0QQBBACoCnDw4AqA8QQBBACoCmDw4Apw8QQBBACgCpDw2Aqg8QQBBACoCrDw4ArA8QQBBACoCuEQ4ArxEQQBBACoCtEQ4ArhEQQBBACgCwEQ2AsREQQBBACoCyEQ4AsxEQQBBACoC1Ew4AthMQQBBACoC0Ew4AtRMQQBBACgC3Ew2AuBMQQBBACoC5Ew4AuhMQQBBACoC8FQ4AvRUQQBBACoC7FQ4AvBUQQBBACgC+FQ2AvxUQQBBACoCgFU4AoRVQQBBACoCjF04ApBdQQBBACoCiF04AoxdQQBBACgClF02AphdQQBBACoCnF04AqBdQQBBACoCqGE4AqxhQQBBACoCpGE4AqhhQQBBACgCsGE2ArRhQQBBACoCuGE4ArxhQQBBACoCxGU4AshlQQBBACoCwGU4AsRlQQBBACgCzGU2AtBlQQBBACoC1GU4AthlQQBBACoC4Gk4AuRpQQBBACoC3Gk4AuBpQQBBACgC6Gk2AuxpQQBBACoC8Gk4AvRpQQBBACoC/G04AoBuQQBBACoC+G04AvxtQQBBACgChG42AohuQQBBACoCjG44ApBuQQBBACoCmHI4ApxyQQBBACoClHI4AphyQQBBACgCoHI2AqRyQQBBACoCqHI4AqxyQQBBACoCtHQ4Arh0QQBBACoCsHQ4ArR0QQBBACgCvHQ2AsB0QQBBACoCxHQ4Ash0QQBBACoC0HY4AtR2QQBBACoCzHY4AtB2QQBBACgC2HY2Atx2QQBBACoC4HY4AuR2QQBBACoC7Hg4AvB4QQBBACoC6Hg4Aux4QQBBACgC9Hg2Avh4QQBBACoC/Hg4AoB5QQBBACoCiHs4Aox7QQBBACoChHs4Aoh7QQBBACgCkHs2ApR7QQBBACoCmHs4Apx7QQBBACoCpHw4Aqh8QQBBACoCoHw4AqR8QQBBACgCrHw2ArB8QQBBACoCtHw4Arh8QQBBACoCwH04AsR9QQBBACoCvH04AsB9QQBBACgCyH02Asx9QQBBACoC0H04AtR9QQBBACoC3H44AuB+QQBBACoC2H44Atx+IAhBBGohCCAIQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAJUDwuOgICAAAAgACABEAIgACABEAsL/aOAgAABXH9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACE6QQAhO0EAITxBACE9QQAhPkEAIT9BACFAQQAhQUEAIUJBACFDQQAhREEAIUVBACFGQQAhR0EAIUhBACFJQQAhSkEAIUtBACFMQQAhTUEAIU5BACFPQQAhUEEAIVFBACFSQQAhU0EAIVRBACFVQQAhVkEAIVdBACFYQQAhWUEAIVpBACFbQQAhXEEAIQEDQAJAQQQgAUECdGpBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQQwgAkECdGpBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQeAAIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHoACAEQQJ0akEANgIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkBB8AAgBUECdGpBADYCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAQfwAIAZBAnRqQQA2AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEGEASAHQQJ0akEANgIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkBBjAEgCEECdGpBADYCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAQZQBIAlBAnRqQQA2AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQEGcASAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQBBADYCpAFBACELA0ACQEGoASALQQJ0akMAAAAAOAIAIAtBAWohCyALQcAASARADAIMAQsLC0EAIQwDQAJAQagDIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBA0gEQAwCDAELCwtBACENA0ACQEG0AyANQQJ0akEANgIAIA1BAWohDSANQQJIBEAMAgwBCwsLQQAhDgNAAkBBvAMgDkECdGpDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAQcQDIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BgARIBEAMAgwBCwsLQQAhEANAAkBBxBMgEEECdGpDAAAAADgCACAQQQFqIRAgEEEDSARADAIMAQsLC0EAIREDQAJAQdATIBFBAnRqQQA2AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEHYEyASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB4BMgE0ECdGpDAAAAADgCACATQQFqIRMgE0GABEgEQAwCDAELCwtBACEUA0ACQEHgIyAUQQJ0akMAAAAAOAIAIBRBAWohFCAUQQNIBEAMAgwBCwsLQQAhFQNAAkBB7CMgFUECdGpBADYCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfQjIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQEH8IyAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQYAESARADAIMAQsLC0EAIRgDQAJAQfwzIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBA0gEQAwCDAELCwtBACEZA0ACQEGINCAZQQJ0akEANgIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBkDQgGkECdGpDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAQZg0IBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBgAJIBEAMAgwBCwsLQQAhHANAAkBBmDwgHEECdGpDAAAAADgCACAcQQFqIRwgHEEDSARADAIMAQsLC0EAIR0DQAJAQaQ8IB1BAnRqQQA2AgAgHUEBaiEdIB1BAkgEQAwCDAELCwtBACEeA0ACQEGsPCAeQQJ0akMAAAAAOAIAIB5BAWohHiAeQQJIBEAMAgwBCwsLQQAhHwNAAkBBtDwgH0ECdGpDAAAAADgCACAfQQFqIR8gH0GAAkgEQAwCDAELCwtBACEgA0ACQEG0xAAgIEECdGpDAAAAADgCACAgQQFqISAgIEEDSARADAIMAQsLC0EAISEDQAJAQcDEACAhQQJ0akEANgIAICFBAWohISAhQQJIBEAMAgwBCwsLQQAhIgNAAkBByMQAICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBAkgEQAwCDAELCwtBACEjA0ACQEHQxAAgI0ECdGpDAAAAADgCACAjQQFqISMgI0GAAkgEQAwCDAELCwtBACEkA0ACQEHQzAAgJEECdGpDAAAAADgCACAkQQFqISQgJEEDSARADAIMAQsLC0EAISUDQAJAQdzMACAlQQJ0akEANgIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBB5MwAICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBAkgEQAwCDAELCwtBACEnA0ACQEHszAAgJ0ECdGpDAAAAADgCACAnQQFqIScgJ0GAAkgEQAwCDAELCwtBACEoA0ACQEHs1AAgKEECdGpDAAAAADgCACAoQQFqISggKEEDSARADAIMAQsLC0EAISkDQAJAQfjUACApQQJ0akEANgIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkBBgNUAICpBAnRqQwAAAAA4AgAgKkEBaiEqICpBAkgEQAwCDAELCwtBACErA0ACQEGI1QAgK0ECdGpDAAAAADgCACArQQFqISsgK0GAAkgEQAwCDAELCwtBACEsA0ACQEGI3QAgLEECdGpDAAAAADgCACAsQQFqISwgLEEDSARADAIMAQsLC0EAIS0DQAJAQZTdACAtQQJ0akEANgIAIC1BAWohLSAtQQJIBEAMAgwBCwsLQQAhLgNAAkBBnN0AIC5BAnRqQwAAAAA4AgAgLkEBaiEuIC5BAkgEQAwCDAELCwtBACEvA0ACQEGk3QAgL0ECdGpDAAAAADgCACAvQQFqIS8gL0GAAUgEQAwCDAELCwtBACEwA0ACQEGk4QAgMEECdGpDAAAAADgCACAwQQFqITAgMEEDSARADAIMAQsLC0EAITEDQAJAQbDhACAxQQJ0akEANgIAIDFBAWohMSAxQQJIBEAMAgwBCwsLQQAhMgNAAkBBuOEAIDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBAkgEQAwCDAELCwtBACEzA0ACQEHA4QAgM0ECdGpDAAAAADgCACAzQQFqITMgM0GAAUgEQAwCDAELCwtBACE0A0ACQEHA5QAgNEECdGpDAAAAADgCACA0QQFqITQgNEEDSARADAIMAQsLC0EAITUDQAJAQczlACA1QQJ0akEANgIAIDVBAWohNSA1QQJIBEAMAgwBCwsLQQAhNgNAAkBB1OUAIDZBAnRqQwAAAAA4AgAgNkEBaiE2IDZBAkgEQAwCDAELCwtBACE3A0ACQEHc5QAgN0ECdGpDAAAAADgCACA3QQFqITcgN0GAAUgEQAwCDAELCwtBACE4A0ACQEHc6QAgOEECdGpDAAAAADgCACA4QQFqITggOEEDSARADAIMAQsLC0EAITkDQAJAQejpACA5QQJ0akEANgIAIDlBAWohOSA5QQJIBEAMAgwBCwsLQQAhOgNAAkBB8OkAIDpBAnRqQwAAAAA4AgAgOkEBaiE6IDpBAkgEQAwCDAELCwtBACE7A0ACQEH46QAgO0ECdGpDAAAAADgCACA7QQFqITsgO0GAAUgEQAwCDAELCwtBACE8A0ACQEH47QAgPEECdGpDAAAAADgCACA8QQFqITwgPEEDSARADAIMAQsLC0EAIT0DQAJAQYTuACA9QQJ0akEANgIAID1BAWohPSA9QQJIBEAMAgwBCwsLQQAhPgNAAkBBjO4AID5BAnRqQwAAAAA4AgAgPkEBaiE+ID5BAkgEQAwCDAELCwtBACE/A0ACQEGU7gAgP0ECdGpDAAAAADgCACA/QQFqIT8gP0GAAUgEQAwCDAELCwtBACFAA0ACQEGU8gAgQEECdGpDAAAAADgCACBAQQFqIUAgQEEDSARADAIMAQsLC0EAIUEDQAJAQaDyACBBQQJ0akEANgIAIEFBAWohQSBBQQJIBEAMAgwBCwsLQQAhQgNAAkBBqPIAIEJBAnRqQwAAAAA4AgAgQkEBaiFCIEJBAkgEQAwCDAELCwtBACFDA0ACQEGw8gAgQ0ECdGpDAAAAADgCACBDQQFqIUMgQ0HAAEgEQAwCDAELCwtBACFEA0ACQEGw9AAgREECdGpDAAAAADgCACBEQQFqIUQgREEDSARADAIMAQsLC0EAIUUDQAJAQbz0ACBFQQJ0akEANgIAIEVBAWohRSBFQQJIBEAMAgwBCwsLQQAhRgNAAkBBxPQAIEZBAnRqQwAAAAA4AgAgRkEBaiFGIEZBAkgEQAwCDAELCwtBACFHA0ACQEHM9AAgR0ECdGpDAAAAADgCACBHQQFqIUcgR0HAAEgEQAwCDAELCwtBACFIA0ACQEHM9gAgSEECdGpDAAAAADgCACBIQQFqIUggSEEDSARADAIMAQsLC0EAIUkDQAJAQdj2ACBJQQJ0akEANgIAIElBAWohSSBJQQJIBEAMAgwBCwsLQQAhSgNAAkBB4PYAIEpBAnRqQwAAAAA4AgAgSkEBaiFKIEpBAkgEQAwCDAELCwtBACFLA0ACQEHo9gAgS0ECdGpDAAAAADgCACBLQQFqIUsgS0HAAEgEQAwCDAELCwtBACFMA0ACQEHo+AAgTEECdGpDAAAAADgCACBMQQFqIUwgTEEDSARADAIMAQsLC0EAIU0DQAJAQfT4ACBNQQJ0akEANgIAIE1BAWohTSBNQQJIBEAMAgwBCwsLQQAhTgNAAkBB/PgAIE5BAnRqQwAAAAA4AgAgTkEBaiFOIE5BAkgEQAwCDAELCwtBACFPA0ACQEGE+QAgT0ECdGpDAAAAADgCACBPQQFqIU8gT0HAAEgEQAwCDAELCwtBACFQA0ACQEGE+wAgUEECdGpDAAAAADgCACBQQQFqIVAgUEEDSARADAIMAQsLC0EAIVEDQAJAQZD7ACBRQQJ0akEANgIAIFFBAWohUSBRQQJIBEAMAgwBCwsLQQAhUgNAAkBBmPsAIFJBAnRqQwAAAAA4AgAgUkEBaiFSIFJBAkgEQAwCDAELCwtBACFTA0ACQEGg+wAgU0ECdGpDAAAAADgCACBTQQFqIVMgU0EgSARADAIMAQsLC0EAIVQDQAJAQaD8ACBUQQJ0akMAAAAAOAIAIFRBAWohVCBUQQNIBEAMAgwBCwsLQQAhVQNAAkBBrPwAIFVBAnRqQQA2AgAgVUEBaiFVIFVBAkgEQAwCDAELCwtBACFWA0ACQEG0/AAgVkECdGpDAAAAADgCACBWQQFqIVYgVkECSARADAIMAQsLC0EAIVcDQAJAQbz8ACBXQQJ0akMAAAAAOAIAIFdBAWohVyBXQSBIBEAMAgwBCwsLQQAhWANAAkBBvP0AIFhBAnRqQwAAAAA4AgAgWEEBaiFYIFhBA0gEQAwCDAELCwtBACFZA0ACQEHI/QAgWUECdGpBADYCACBZQQFqIVkgWUECSARADAIMAQsLC0EAIVoDQAJAQdD9ACBaQQJ0akMAAAAAOAIAIFpBAWohWiBaQQJIBEAMAgwBCwsLQQAhWwNAAkBB2P0AIFtBAnRqQwAAAAA4AgAgW0EBaiFbIFtBIEgEQAwCDAELCwtBACFcA0ACQEHY/gAgXEECdGpDAAAAADgCACBcQQFqIVwgXEEDSARADAIMAQsLCwvZgICAAAEBf0EAIQJBACABNgJUQQAhAgNAAkBBFCACQQJ0akMAAAAAOAIAIAJBAWohAiACQRBIBEAMAgwBCwsLQQBDAABwQkMAgDtIQwAAgD9BACgCVLKXlpQ4AlgLkICAgAAAIAAgARAKIAAQDCAAEAkLoICAgAAAQQBDAACgQDgCAEEAQwAA8EM4AlxBAEMAADBBOAJ4C42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC4CKgIAAAQBBAAv5CXsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIiwidmVyc2lvbiI6IjIuNS4yMSIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiMTYyMjgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJFUiJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlBlbnRhdG9uaWNEcnlIYXJwIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImhhcnAiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ikluc3RydW1lbnQgSGFuZCIsImFkZHJlc3MiOiIvaGFycC9JbnN0cnVtZW50X0hhbmQiLCJpbmRleCI6IjEyMCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9XSwiaW5pdCI6IjExIiwibWluIjoiMCIsIm1heCI6IjIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIiwiYWRkcmVzcyI6Ii9oYXJwL1BhcmFtZXRlcnMvU3BlZWQiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMiAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI0ODAiLCJtaW4iOiIxODAiLCJtYXgiOiI3MjAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJlc29uYW5jZSIsImFkZHJlc3MiOiIvaGFycC9QYXJhbWV0ZXJzL1Jlc29uYW5jZSIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjIgMSAtMTIgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAuMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

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

