
/*
Code generated with Faust version 2.5.4
Compilation options: -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"version\":\"2.5.4\",\"options\":\"-scal -ftz 2\",\"size\":\"24444\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"304\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"36\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "AGFzbQEAAAAB24CAgAARYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AGABfQF9AreAgIAAAwtnbG9iYWwuTWF0aANjb3MAAgtnbG9iYWwuTWF0aANwb3cADgtnbG9iYWwuTWF0aAN0YW4AEAOPgICAAA4AAQMEBQYHCAkKCwwNDwWHgICAAAEAgYCAgAAHuoGAgAAMB2NvbXB1dGUABAxnZXROdW1JbnB1dHMABQ1nZXROdW1PdXRwdXRzAAYNZ2V0UGFyYW1WYWx1ZQAHDWdldFNhbXBsZVJhdGUACARpbml0AAkNaW5zdGFuY2VDbGVhcgAKEWluc3RhbmNlQ29uc3RhbnRzAAsMaW5zdGFuY2VJbml0AAwaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADQ1zZXRQYXJhbVZhbHVlABAGbWVtb3J5AgAK0K6AgAAOgoCAgAAAC7magIAAAg1/K31BACEEQwAAAAAhEUMAAAAAIRJDAAAAACETQQAhBUMAAAAAIRRDAAAAACEVQQAhBkMAAAAAIRZDAAAAACEXQQAhB0MAAAAAIRhDAAAAACEZQQAhCEMAAAAAIRpDAAAAACEbQQAhCUMAAAAAIRxBACEKQwAAAAAhHUEAIQtDAAAAACEeQQAhDEMAAAAAIR9BACENQwAAAAAhIEEAIQ5DAAAAACEhQwAAAAAhIkEAIQ9DAAAAACEjQQAhEEMAAAAAISRDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhOyADQQBqKAIAIQRBACoCJCERQwqalkAgEZQhEkEAKgKwAiETQwAAgEVDAAAAAEEAKgKsAiATlZeWqCEFQQAqArQCQQAqArgCIBOUEACUIRRDZ1+WPiARlCEVQwAAgEVDAAAAAEEAKgLUBiATlZeWqCEGQQAqArQCQQAqAtgGIBOUEACUIRZDRmdAQCARlCEXQwAAgEVDAAAAAEEAKgLwCiATlZeWqCEHQQAqArQCQQAqAvQKIBOUEACUIRhDYF67PSARlCEZQwAAgEVDAAAAAEEAKgKMGyATlZeWqCEIQQAqArQCQQAqApAbIBOUEACUIRpDuJhCPiARlCEbQwAAgEVDAAAAAEEAKgKoWyATlZeWqCEJQQAqArQCQQAqAqxbIBOUEACUIRxDAACARUMAAAAAQQAqAsRdIBOVl5aoIQpBACoCtAJBACoCyF0gE5QQAJQhHUMAAIBFQwAAAABBACoC4GEgE5WXlqghC0EAKgK0AkEAKgLkYSATlBAAlCEeQwAAgEVDAAAAAEEAKgL8ZSATlZeWqCEMQQAqArQCQQAqAoBmIBOUEACUIR9DAACARUMAAAAAQQAqApimASATlZeWqCENQQAqArQCQQAqApymASATlBAAlCEgQwAAgEVDAAAAAEEAKgK0tgEgE5WXlqghDkEAKgK0AkEAKgK4tgEgE5QQAJQhIUMTK1NAIBGUISJDAACARUMAAAAAQQAqAtC+ASATlZeWqCEPQQAqArQCQQAqAtS+ASATlBAAlCEjQQAhEANAAkBBLEEAKAIoQT9xQQJ0aiASQQAqAtACQwAAgD+SkjgCAEEsQQAoAiggBWtBP3FBAnRqKgIAIBRBACoCwAKUQQAqAhxBACoCxAKUkpMhJEEAICRDAAAAACAkvEGAgID8B3EbOAK8AkEAKgIgQQAqArwClEEAKgLIAkEAKgLEApSSISVBACAlQwAAAAAgJbxBgICA/AdxGzgCzAJB1AJBACgCKEH/AHFBAnRqQQAqAuwGQwAAgD+SIBWTOAIAQ739fz9B1AJBACgCKCAGa0H/AHFBAnRqKgIAlCAWQQAqAuAGlEEAKgIcQQAqAuQGlJKTISZBACAmQwAAAAAgJrxBgICA/AdxGzgC3AZBACoCIEEAKgLcBpRBACoCyAJBACoC5AaUkiEnQQAgJ0MAAAAAICe8QYCAgPwHcRs4AugGQfAGQQAoAihB/wBxQQJ0aiAXQQAqAogLQwAAgD+SkjgCAEHwBkEAKAIoIAdrQf8AcUECdGoqAgAgGEEAKgL8CpRBACoCHEEAKgKAC5SSkyEoQQAgKEMAAAAAICi8QYCAgPwHcRs4AvgKQQAqAiBBACoC+AqUQQAqAsgCQQAqAoALlJIhKUEAIClDAAAAACApvEGAgID8B3EbOAKEC0GMC0EAKAIoQf8DcUECdGogGUEAKgKkG0MAAIA/kpI4AgBD3/5/P0GMC0EAKAIoIAhrQf8DcUECdGoqAgCUIBpBACoCmBuUQQAqAhxBACoCnBuUkpMhKkEAICpDAAAAACAqvEGAgID8B3EbOAKUG0EAKgIgQQAqApQblEEAKgLIAkEAKgKcG5SSIStBACArQwAAAAAgK7xBgICA/AdxGzgCoBtBqBtBACgCKEH/D3FBAnRqIBtBACoCwFtDAACAP5KSOAIAQyb7fz9BqBtBACgCKCAJa0H/D3FBAnRqKgIAlCAcQQAqArRblEEAKgIcQQAqArhblJKTISxBACAsQwAAAAAgLLxBgICA/AdxGzgCsFtBACoCIEEAKgKwW5RBACoCyAJBACoCuFuUkiEtQQAgLUMAAAAAIC28QYCAgPwHcRs4ArxbQcTbAEEAKAIoQT9xQQJ0aiASQQAqAtxdQwAAgD+SkjgCAEHE2wBBACgCKCAKa0E/cUECdGoqAgAgHUEAKgLQXZRBACoCHEEAKgLUXZSSkyEuQQAgLkMAAAAAIC68QYCAgPwHcRs4AsxdQQAqAiBBACoCzF2UQQAqAsgCQQAqAtRdlJIhL0EAIC9DAAAAACAvvEGAgID8B3EbOALYXUHg3QBBACgCKEH/AHFBAnRqQQAqAvhhQwAAgD+SIBWTOAIAQ739fz9B4N0AQQAoAiggC2tB/wBxQQJ0aioCAJQgHkEAKgLsYZRBACoCHEEAKgLwYZSSkyEwQQAgMEMAAAAAIDC8QYCAgPwHcRs4AuhhQQAqAiBBACoC6GGUQQAqAsgCQQAqAvBhlJIhMUEAIDFDAAAAACAxvEGAgID8B3EbOAL0YUH84QBBACgCKEH/AHFBAnRqIBdBACoClGZDAACAP5KSOAIAQfzhAEEAKAIoIAxrQf8AcUECdGoqAgAgH0EAKgKIZpRBACoCHEEAKgKMZpSSkyEyQQAgMkMAAAAAIDK8QYCAgPwHcRs4AoRmQQAqAiBBACoChGaUQQAqAsgCQQAqAoxmlJIhM0EAIDNDAAAAACAzvEGAgID8B3EbOAKQZkGY5gBBACgCKEH/D3FBAnRqIBtBACoCsKYBQwAAgD+SkjgCAEMm+38/QZjmAEEAKAIoIA1rQf8PcUECdGoqAgCUICBBACoCpKYBlEEAKgIcQQAqAqimAZSSkyE0QQAgNEMAAAAAIDS8QYCAgPwHcRs4AqCmAUEAKgIgQQAqAqCmAZRBACoCyAJBACoCqKYBlJIhNUEAIDVDAAAAACA1vEGAgID8B3EbOAKspgFBtKYBQQAoAihB/wNxQQJ0aiAZQQAqAsy2AUMAAIA/kpI4AgBD3/5/P0G0pgFBACgCKCAOa0H/A3FBAnRqKgIAlCAhQQAqAsC2AZRBACoCHEEAKgLEtgGUkpMhNkEAIDZDAAAAACA2vEGAgID8B3EbOAK8tgFBACoCIEEAKgK8tgGUQQAqAsgCQQAqAsS2AZSSITdBACA3QwAAAAAgN7xBgICA/AdxGzgCyLYBQdC2AUEAKAIoQf8BcUECdGogIkEAKgLovgFDAACAP5KSOAIAQdC2AUEAKAIoIA9rQf8BcUECdGoqAgAgI0EAKgLcvgGUQQAqAhxBACoC4L4BlJKTIThBACA4QwAAAAAgOLxBgICA/AdxGzgC2L4BQQAqAiBBACoC2L4BlEEAKgLIAkEAKgLgvgGUkiE5QQAgOUMAAAAAIDm8QYCAgPwHcRs4AuS+AUEAKgLMAkEAKgLoBkEAKgKEC0EAKgKgG0EAKgK8W0EAKgLYXUEAKgL0YUEAKgKQZkEAKgKspgFBACoCyLYBkkMAAABAQQAqAuS+AZSSkpKSkpKSkpIhOkEAIDo4Auy+AUEAKgIQQQAqAvi+AZRBACoCFEEAKgLwvgEgOpKUkiE7QQAgO0MAAAAAIDu8QYCAgPwHcRs4AvS+ASAEIBBqQzMzMz9BACoC9L4BlDgCAEEAQQAoAihBAWo2AihBAEEAKgLAAjgCxAJBAEEAKgK8AjgCwAJBAEEAKgLMAjgC0AJBAEEAKgLgBjgC5AZBAEEAKgLcBjgC4AZBAEEAKgLoBjgC7AZBAEEAKgL8CjgCgAtBAEEAKgL4CjgC/ApBAEEAKgKECzgCiAtBAEEAKgKYGzgCnBtBAEEAKgKUGzgCmBtBAEEAKgKgGzgCpBtBAEEAKgK0WzgCuFtBAEEAKgKwWzgCtFtBAEEAKgK8WzgCwFtBAEEAKgLQXTgC1F1BAEEAKgLMXTgC0F1BAEEAKgLYXTgC3F1BAEEAKgLsYTgC8GFBAEEAKgLoYTgC7GFBAEEAKgL0YTgC+GFBAEEAKgKIZjgCjGZBAEEAKgKEZjgCiGZBAEEAKgKQZjgClGZBAEEAKgKkpgE4AqimAUEAQQAqAqCmATgCpKYBQQBBACoCrKYBOAKwpgFBAEEAKgLAtgE4AsS2AUEAQQAqAry2ATgCwLYBQQBBACoCyLYBOALMtgFBAEEAKgLcvgE4AuC+AUEAQQAqAti+ATgC3L4BQQBBACoC5L4BOALovgFBAEEAKgLsvgE4AvC+AUEAQQAqAvS+ATgC+L4BIBBBBGohECAQQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIADwuOgICAAAAgACABEAMgACABEAwLgY6AgAABI39BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAQQA2AihBACEBA0ACQEEsIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBwABIBEAMAgwBCwsLQQAhAgNAAkBBvAIgAkECdGpDAAAAADgCACACQQFqIQIgAkEDSARADAIMAQsLC0EAIQMDQAJAQcwCIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHUAiAEQQJ0akMAAAAAOAIAIARBAWohBCAEQYABSARADAIMAQsLC0EAIQUDQAJAQdwGIAVBAnRqQwAAAAA4AgAgBUEBaiEFIAVBA0gEQAwCDAELCwtBACEGA0ACQEHoBiAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQJIBEAMAgwBCwsLQQAhBwNAAkBB8AYgB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAAUgEQAwCDAELCwtBACEIA0ACQEH4CiAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQNIBEAMAgwBCwsLQQAhCQNAAkBBhAsgCUECdGpDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAQYwLIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBgARIBEAMAgwBCwsLQQAhCwNAAkBBlBsgC0ECdGpDAAAAADgCACALQQFqIQsgC0EDSARADAIMAQsLC0EAIQwDQAJAQaAbIAxBAnRqQwAAAAA4AgAgDEEBaiEMIAxBAkgEQAwCDAELCwtBACENA0ACQEGoGyANQQJ0akMAAAAAOAIAIA1BAWohDSANQYAQSARADAIMAQsLC0EAIQ4DQAJAQbDbACAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQNIBEAMAgwBCwsLQQAhDwNAAkBBvNsAIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEHE2wAgEEECdGpDAAAAADgCACAQQQFqIRAgEEHAAEgEQAwCDAELCwtBACERA0ACQEHM3QAgEUECdGpDAAAAADgCACARQQFqIREgEUEDSARADAIMAQsLC0EAIRIDQAJAQdjdACASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB4N0AIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBgAFIBEAMAgwBCwsLQQAhFANAAkBB6OEAIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBA0gEQAwCDAELCwtBACEVA0ACQEH04QAgFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfzhACAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQYABSARADAIMAQsLC0EAIRcDQAJAQYTmACAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQQNIBEAMAgwBCwsLQQAhGANAAkBBkOYAIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBAkgEQAwCDAELCwtBACEZA0ACQEGY5gAgGUECdGpDAAAAADgCACAZQQFqIRkgGUGAEEgEQAwCDAELCwtBACEaA0ACQEGgpgEgGkECdGpDAAAAADgCACAaQQFqIRogGkEDSARADAIMAQsLC0EAIRsDQAJAQaymASAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQJIBEAMAgwBCwsLQQAhHANAAkBBtKYBIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBgARIBEAMAgwBCwsLQQAhHQNAAkBBvLYBIB1BAnRqQwAAAAA4AgAgHUEBaiEdIB1BA0gEQAwCDAELCwtBACEeA0ACQEHItgEgHkECdGpDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAQdC2ASAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQYACSARADAIMAQsLC0EAISADQAJAQdi+ASAgQQJ0akMAAAAAOAIAICBBAWohICAgQQNIBEAMAgwBCwsLQQAhIQNAAkBB5L4BICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEHsvgEgIkECdGpDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQfS+ASAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLC9WEgIAAAEEAIAE2AgBBAEMAgDtIQwAAgD9BACgCALKXljgCBEEAQwAAgD9D2m91RkEAKgIElRAClTgCCEEAQQAqAghDAACAP5I4AgxBAEMAAAAAQwAAgD9BACoCCJNBACoCDJWTOAIQQQBDAACAP0EAKgIMlTgCFEEAQwAAgD9D2w/JQkEAKgIElZM4AhhBAEEAKgIYQwAAAEAQATgCHEEAQwAAAD9DAACAP0EAKgIck5Q4AiBBAEOKYjo9QQAqAgSUOAKsAkEAQwAAAABDAAAAQEEAKgIYlJM4ArQCQQBDVxQKQ0EAKgIElTgCuAJBAEMAAAAAQQAqAiCTOALIAkEAQ2Tonz1BACoCBJQ4AtQGQQBDO/GgQkEAKgIElTgC2AZBAEMWKuM9QQAqAgSUOALwCkEAQ4uVYkJBACoCBJU4AvQKQQBDfwyrPkEAKgIElDgCjBtBAEOldZZBQQAqAgSVOAKQG0EAQ/IBfz9BACoCBJQ4AqhbQQBDKtjJQEEAKgIElTgCrFtBAEOYBm09QQAqAgSUOALEXUEAQz8o2UJBACoCBJU4AshdQQBDk5afPUEAKgIElDgC4GFBAEO+Q6FCQQAqAgSVOALkYUEAQ+CZ4z1BACoCBJQ4AvxlQQBDQSZiQkEAKgIElTgCgGZBAEMFgIA/QQAqAgSUOAKYpgFBAEOLR8hAQQAqAgSVOAKcpgFBAEMH3Ks+QQAqAgSUOAK0tgFBAEP0v5VBQQAqAgSVOAK4tgFBAENIgjM+QQAqAgSUOALQvgFBAENXXg9CQQAqAgSVOALUvgELkICAgAAAIAAgARALIAAQDSAAEAoLl4CAgAAAQQBDAACAPzgCJEEAQwAA3EM4ArACC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC6aKgIAAAQBBAAufCnsibmFtZSI6IlRpbmtsZSIsInZlcnNpb24iOiIyLjUuNCIsIm9wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJzaXplIjoiMjQ0NDQiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJCYW5kZWQgV2F2ZWd1aWRlIE1vZGVsZCBUaWJldGFuIEJvd2wifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiVGlua2xlIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiVGlua2xlIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1RpbmtsZS9GcmVxdWVuY3kiLCJpbmRleCI6IjMwNCIsIm1ldGEiOlt7IjEiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTgwIiwibWF4IjoiNzgwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQbGF5IiwiYWRkcmVzcyI6Ii9UaW5rbGUvUGxheSIsImluZGV4IjoiMzYiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IjA9Qm93OyAxPVN0cmlrZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19MA=="; }

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
faust.STinkle_instance = null;

// Monophonic Faust DSP
class STinkleProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STinkleProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STinkleProcessor.parse_items(group.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
            STinkleProcessor.parse_items(item.items, obj, callback);
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
        STinkleProcessor.parse_ui(JSON.parse(getJSONSTinkle()).ui, params, STinkleProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONSTinkle());
        
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
        
        this.factory = faust.STinkle_instance.exports;
        this.HEAP = faust.STinkle_instance.exports.memory.buffer;
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
            STinkleProcessor.parse_ui(this.json_object.ui, this, STinkleProcessor.parse_item2);
            
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
WebAssembly.instantiate(faust.atob(getBase64CodeSTinkle()), faust.importObject)
            .then(dsp_module => {
                  faust.STinkle_instance = dsp_module.instance;
                  registerProcessor('STinkle', STinkleProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust STinkle cannot be loaded or compiled"); });
