
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTinkle() {
	return "{\"name\":\"Tinkle\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"24444\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tinkle\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Tinkle\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tinkle/Frequency\",\"index\":\"8236\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tinkle/Play\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSTinkle() { return "AGFzbQEAAAAB24CAgAARYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AGABfQF9AqWAgIAAAwNlbnYFX2Nvc2YAAgNlbnYFX3Bvd2YADgNlbnYFX3RhbmYAEAOPgICAAA4AAQMEBQYHCAkKCwwNDwWHgICAAAEAgYCAgAAHuoGAgAAMB2NvbXB1dGUABAxnZXROdW1JbnB1dHMABQ1nZXROdW1PdXRwdXRzAAYNZ2V0UGFyYW1WYWx1ZQAHDWdldFNhbXBsZVJhdGUACARpbml0AAkNaW5zdGFuY2VDbGVhcgAKEWluc3RhbmNlQ29uc3RhbnRzAAsMaW5zdGFuY2VJbml0AAwaaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADQ1zZXRQYXJhbVZhbHVlABAGbWVtb3J5AgAKjK+AgAAOgoCAgAAAC+OagIAAAg1/K31BACEEQwAAAAAhEUMAAAAAIRJDAAAAACETQQAhBUMAAAAAIRRDAAAAACEVQQAhBkMAAAAAIRZDAAAAACEXQQAhB0MAAAAAIRhDAAAAACEZQQAhCEMAAAAAIRpDAAAAACEbQQAhCUMAAAAAIRxDAAAAACEdQQAhCkMAAAAAIR5BACELQwAAAAAhH0EAIQxDAAAAACEgQQAhDUMAAAAAISFBACEOQwAAAAAhIkEAIQ9DAAAAACEjQQAhEEMAAAAAISRDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhOyADQQBqKAIAIQRBACoCICERQ7iYQj4gEZQhEkEAKgKsQCETQwAAgEVDAAAAAEEAKgKoQCATlZeWqCEFQQAqArBAQQAqArRAIBOUEACUIRRDYF67PSARlCEVQwAAgEVDAAAAAEEAKgLQUCATlZeWqCEGQQAqArBAQQAqAtRQIBOUEACUIRZDEytTQCARlCEXQwAAgEVDAAAAAEEAKgLsWCATlZeWqCEHQQAqArBAQQAqAvBYIBOUEACUIRhDRmdAQCARlCEZQwAAgEVDAAAAAEEAKgKIXSATlZeWqCEIQQAqArBAQQAqAoxdIBOUEACUIRpDZ1+WPiARlCEbQwAAgEVDAAAAAEEAKgKkYSATlZeWqCEJQQAqArBAQQAqAqhhIBOUEACUIRxDCpqWQCARlCEdQwAAgEVDAAAAAEEAKgLAYyATlZeWqCEKQQAqArBAQQAqAsRjIBOUEACUIR5DAACARUMAAAAAQQAqAtyjASATlZeWqCELQQAqArBAQQAqAuCjASATlBAAlCEfQwAAgEVDAAAAAEEAKgL4swEgE5WXlqghDEEAKgKwQEEAKgL8swEgE5QQAJQhIEMAAIBFQwAAAABBACoClLgBIBOVl5aoIQ1BACoCsEBBACoCmLgBIBOUEACUISFDAACARUMAAAAAQQAqArC8ASATlZeWqCEOQQAqArBAQQAqArS8ASATlBAAlCEiQwAAgEVDAAAAAEEAKgLMvgEgE5WXlqghD0EAKgKwQEEAKgLQvgEgE5QQAJQhI0EAIRADQAJAQShBACgCJEH/D3FBAnRqIBJBACoCzEBDAACAP5KSOAIAQyb7fz9BKEEAKAIkIAVrQf8PcUECdGoqAgCUIBRBACoCvECUQQAqAhhBACoCwECUkpMhJEEAICRDAAAAACAkvEGAgID8B3EbOAK4QEEAKgIcQQAqArhAlEEAKgLEQEEAKgLAQJSSISVBACAlQwAAAAAgJbxBgICA/AdxGzgCyEBB0MAAQQAoAiRB/wNxQQJ0aiAVQQAqAuhQQwAAgD+SkjgCAEPf/n8/QdDAAEEAKAIkIAZrQf8DcUECdGoqAgCUIBZBACoC3FCUQQAqAhhBACoC4FCUkpMhJkEAICZDAAAAACAmvEGAgID8B3EbOALYUEEAKgIcQQAqAthQlEEAKgLEQEEAKgLgUJSSISdBACAnQwAAAAAgJ7xBgICA/AdxGzgC5FBB7NAAQQAoAiRB/wFxQQJ0aiAXQQAqAoRZQwAAgD+SkjgCAEHs0ABBACgCJCAHa0H/AXFBAnRqKgIAIBhBACoC+FiUQQAqAhhBACoC/FiUkpMhKEEAIChDAAAAACAovEGAgID8B3EbOAL0WEEAKgIcQQAqAvRYlEEAKgLEQEEAKgL8WJSSISlBACApQwAAAAAgKbxBgICA/AdxGzgCgFlBiNkAQQAoAiRB/wBxQQJ0aiAZQQAqAqBdQwAAgD+SkjgCAEGI2QBBACgCJCAIa0H/AHFBAnRqKgIAIBpBACoClF2UQQAqAhhBACoCmF2UkpMhKkEAICpDAAAAACAqvEGAgID8B3EbOAKQXUEAKgIcQQAqApBdlEEAKgLEQEEAKgKYXZSSIStBACArQwAAAAAgK7xBgICA/AdxGzgCnF1BpN0AQQAoAiRB/wBxQQJ0akEAKgK8YUMAAIA/kiAbkzgCAEO9/X8/QaTdAEEAKAIkIAlrQf8AcUECdGoqAgCUIBxBACoCsGGUQQAqAhhBACoCtGGUkpMhLEEAICxDAAAAACAsvEGAgID8B3EbOAKsYUEAKgIcQQAqAqxhlEEAKgLEQEEAKgK0YZSSIS1BACAtQwAAAAAgLbxBgICA/AdxGzgCuGFBwOEAQQAoAiRBP3FBAnRqIB1BACoC2GNDAACAP5KSOAIAQcDhAEEAKAIkIAprQT9xQQJ0aioCACAeQQAqAsxjlEEAKgIYQQAqAtBjlJKTIS5BACAuQwAAAAAgLrxBgICA/AdxGzgCyGNBACoCHEEAKgLIY5RBACoCxEBBACoC0GOUkiEvQQAgL0MAAAAAIC+8QYCAgPwHcRs4AtRjQdzjAEEAKAIkQf8PcUECdGogEkEAKgL0owFDAACAP5KSOAIAQyb7fz9B3OMAQQAoAiQgC2tB/w9xQQJ0aioCAJQgH0EAKgLoowGUQQAqAhhBACoC7KMBlJKTITBBACAwQwAAAAAgMLxBgICA/AdxGzgC5KMBQQAqAhxBACoC5KMBlEEAKgLEQEEAKgLsowGUkiExQQAgMUMAAAAAIDG8QYCAgPwHcRs4AvCjAUH4owFBACgCJEH/A3FBAnRqIBVBACoCkLQBQwAAgD+SkjgCAEPf/n8/QfijAUEAKAIkIAxrQf8DcUECdGoqAgCUICBBACoChLQBlEEAKgIYQQAqAoi0AZSSkyEyQQAgMkMAAAAAIDK8QYCAgPwHcRs4AoC0AUEAKgIcQQAqAoC0AZRBACoCxEBBACoCiLQBlJIhM0EAIDNDAAAAACAzvEGAgID8B3EbOAKMtAFBlLQBQQAoAiRB/wBxQQJ0aiAZQQAqAqy4AUMAAIA/kpI4AgBBlLQBQQAoAiQgDWtB/wBxQQJ0aioCACAhQQAqAqC4AZRBACoCGEEAKgKkuAGUkpMhNEEAIDRDAAAAACA0vEGAgID8B3EbOAKcuAFBACoCHEEAKgKcuAGUQQAqAsRAQQAqAqS4AZSSITVBACA1QwAAAAAgNbxBgICA/AdxGzgCqLgBQbC4AUEAKAIkQf8AcUECdGpBACoCyLwBQwAAgD+SIBuTOAIAQ739fz9BsLgBQQAoAiQgDmtB/wBxQQJ0aioCAJQgIkEAKgK8vAGUQQAqAhhBACoCwLwBlJKTITZBACA2QwAAAAAgNrxBgICA/AdxGzgCuLwBQQAqAhxBACoCuLwBlEEAKgLEQEEAKgLAvAGUkiE3QQAgN0MAAAAAIDe8QYCAgPwHcRs4AsS8AUHMvAFBACgCJEE/cUECdGogHUEAKgLkvgFDAACAP5KSOAIAQcy8AUEAKAIkIA9rQT9xQQJ0aioCACAjQQAqAti+AZRBACoCGEEAKgLcvgGUkpMhOEEAIDhDAAAAACA4vEGAgID8B3EbOALUvgFBACoCHEEAKgLUvgGUQQAqAsRAQQAqAty+AZSSITlBACA5QwAAAAAgObxBgICA/AdxGzgC4L4BQQAqAshAQQAqAuRQkkMAAABAQQAqAoBZlJJBACoCnF2SQQAqArhhkkEAKgLUY5JBACoC8KMBkkEAKgKMtAGSQQAqAqi4AZJBACoCxLwBkkEAKgLgvgGSITpBACA6OALovgFBACoCEEEAKgLsvgEgOpKUQQAqAvC+AUEAKgL4vgGUkiE7QQAgO0MAAAAAIDu8QYCAgPwHcRs4AvS+ASAEIBBqQzMzMz9BACoC9L4BlDgCAEEAQQAoAiRBAWo2AiRBAEEAKgK8QDgCwEBBAEEAKgK4QDgCvEBBAEEAKgLIQDgCzEBBAEEAKgLcUDgC4FBBAEEAKgLYUDgC3FBBAEEAKgLkUDgC6FBBAEEAKgL4WDgC/FhBAEEAKgL0WDgC+FhBAEEAKgKAWTgChFlBAEEAKgKUXTgCmF1BAEEAKgKQXTgClF1BAEEAKgKcXTgCoF1BAEEAKgKwYTgCtGFBAEEAKgKsYTgCsGFBAEEAKgK4YTgCvGFBAEEAKgLMYzgC0GNBAEEAKgLIYzgCzGNBAEEAKgLUYzgC2GNBAEEAKgLoowE4AuyjAUEAQQAqAuSjATgC6KMBQQBBACoC8KMBOAL0owFBAEEAKgKEtAE4Aoi0AUEAQQAqAoC0ATgChLQBQQBBACoCjLQBOAKQtAFBAEEAKgKguAE4AqS4AUEAQQAqApy4ATgCoLgBQQBBACoCqLgBOAKsuAFBAEEAKgK8vAE4AsC8AUEAQQAqAri8ATgCvLwBQQBBACoCxLwBOALIvAFBAEEAKgLYvgE4Aty+AUEAQQAqAtS+ATgC2L4BQQBBACoC4L4BOALkvgFBAEEAKgLovgE4Auy+AUEAQQAqAvS+ATgC+L4BIBBBBGohECAQQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEEADwuFgICAAABBAQ8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIADwuOgICAAAAgACABEAMgACABEAwLjY6AgAABI39BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAQQA2AiRBACEBA0ACQEEoIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBgBBIBEAMAgwBCwsLQQAhAgNAAkBBuMAAIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBA0gEQAwCDAELCwtBACEDA0ACQEHIwAAgA0ECdGpDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAQdDAACAEQQJ0akMAAAAAOAIAIARBAWohBCAEQYAESARADAIMAQsLC0EAIQUDQAJAQdjQACAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQNIBEAMAgwBCwsLQQAhBgNAAkBB5NAAIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHs0AAgB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAAkgEQAwCDAELCwtBACEIA0ACQEH02AAgCEECdGpDAAAAADgCACAIQQFqIQggCEEDSARADAIMAQsLC0EAIQkDQAJAQYDZACAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkBBiNkAIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBgAFIBEAMAgwBCwsLQQAhCwNAAkBBkN0AIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBA0gEQAwCDAELCwtBACEMA0ACQEGc3QAgDEECdGpDAAAAADgCACAMQQFqIQwgDEECSARADAIMAQsLC0EAIQ0DQAJAQaTdACANQQJ0akMAAAAAOAIAIA1BAWohDSANQYABSARADAIMAQsLC0EAIQ4DQAJAQazhACAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQNIBEAMAgwBCwsLQQAhDwNAAkBBuOEAIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BAkgEQAwCDAELCwtBACEQA0ACQEHA4QAgEEECdGpDAAAAADgCACAQQQFqIRAgEEHAAEgEQAwCDAELCwtBACERA0ACQEHI4wAgEUECdGpDAAAAADgCACARQQFqIREgEUEDSARADAIMAQsLC0EAIRIDQAJAQdTjACASQQJ0akMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkBB3OMAIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBgBBIBEAMAgwBCwsLQQAhFANAAkBB5KMBIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBA0gEQAwCDAELCwtBACEVA0ACQEHwowEgFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfijASAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQYAESARADAIMAQsLC0EAIRcDQAJAQYC0ASAXQQJ0akMAAAAAOAIAIBdBAWohFyAXQQNIBEAMAgwBCwsLQQAhGANAAkBBjLQBIBhBAnRqQwAAAAA4AgAgGEEBaiEYIBhBAkgEQAwCDAELCwtBACEZA0ACQEGUtAEgGUECdGpDAAAAADgCACAZQQFqIRkgGUGAAUgEQAwCDAELCwtBACEaA0ACQEGcuAEgGkECdGpDAAAAADgCACAaQQFqIRogGkEDSARADAIMAQsLC0EAIRsDQAJAQai4ASAbQQJ0akMAAAAAOAIAIBtBAWohGyAbQQJIBEAMAgwBCwsLQQAhHANAAkBBsLgBIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBgAFIBEAMAgwBCwsLQQAhHQNAAkBBuLwBIB1BAnRqQwAAAAA4AgAgHUEBaiEdIB1BA0gEQAwCDAELCwtBACEeA0ACQEHEvAEgHkECdGpDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAQcy8ASAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQcAASARADAIMAQsLC0EAISADQAJAQdS+ASAgQQJ0akMAAAAAOAIAICBBAWohICAgQQNIBEAMAgwBCwsLQQAhIQNAAkBB4L4BICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQEHovgEgIkECdGpDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAQfS+ASAjQQJ0akMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLC9uEgIAAAEEAIAE2AgBBAEMAgDtIQwAAgD9BACgCALKXljgCBEEAQwAAgD9D2m91RkEAKgIElRAClTgCCEEAQQAqAghDAACAP5I4AgxBAEMAAIA/QQAqAgyVOAIQQQBDAACAP0PbD8lCQQAqAgSVkzgCFEEAQQAqAhRDAAAAQBABOAIYQQBDAAAAP0MAAIA/QQAqAhiTlDgCHEEAQwWAgD9BACoCBJQ4AqhAQQBDAAAAAEMAAABAQQAqAhSUkzgCsEBBAEOLR8hAQQAqAgSVOAK0QEEAQwAAAABBACoCHJM4AsRAQQBDB9yrPkEAKgIElDgC0FBBAEP0v5VBQQAqAgSVOALUUEEAQ0iCMz5BACoCBJQ4AuxYQQBDV14PQkEAKgIElTgC8FhBAEPgmeM9QQAqAgSUOAKIXUEAQ0EmYkJBACoCBJU4AoxdQQBDk5afPUEAKgIElDgCpGFBAEO+Q6FCQQAqAgSVOAKoYUEAQ5gGbT1BACoCBJQ4AsBjQQBDPyjZQkEAKgIElTgCxGNBAEPyAX8/QQAqAgSUOALcowFBAEMq2MlAQQAqAgSVOALgowFBAEN/DKs+QQAqAgSUOAL4swFBAEOldZZBQQAqAgSVOAL8swFBAEMWKuM9QQAqAgSUOAKUuAFBAEOLlWJCQQAqAgSVOAKYuAFBAENk6J89QQAqAgSUOAKwvAFBAEM78aBCQQAqAgSVOAK0vAFBAEOKYjo9QQAqAgSUOALMvgFBAENXFApDQQAqAgSVOALQvgFBAEMAAAAAQwAAgD9BACoCCJNBACoCDJWTOALwvgELkICAgAAAIAAgARALIAAQDSAAEAoLl4CAgAAAQQBDAACAPzgCIEEAQwAA3EM4AqxAC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC7GKgIAAAQBBAAuqCnsibmFtZSI6IlRpbmtsZSIsInZlcnNpb24iOiIyLjUuMTkiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6IjI0NDQ0IiwiaW5wdXRzIjoiMCIsIm91dHB1dHMiOiIxIiwibWV0YSI6W3siYXV0aG9yIjoiUm9tYWluIE1pY2hvbiJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiQmFuZGVkIFdhdmVndWlkZSBNb2RlbGQgVGliZXRhbiBCb3dsIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlRpbmtsZSJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlRpbmtsZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9UaW5rbGUvRnJlcXVlbmN5IiwiaW5kZXgiOiI4MjM2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlBsYXkiLCJhZGRyZXNzIjoiL1RpbmtsZS9QbGF5IiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiMD1Cb3c7IDE9U3RyaWtlIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

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
                nUint24 |= STinkleProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        STinkleProcessor.parse_ui(JSON.parse(getJSONSTinkle()).ui, params, STinkleProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTinkle());

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
        
        this.factory = STinkleProcessor.STinkle_instance.exports;
        this.HEAP = STinkleProcessor.STinkle_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STinkleProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STinkleProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STinkleProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STinkleProcessor.parse_ui(this.json_object.ui, this, STinkleProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, STinkleProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, STinkleProcessor.buffer_size, this.ins, this.outs);
        
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

STinkleProcessor.buffer_size = 128;

STinkleProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(STinkleProcessor.atob(getBase64CodeSTinkle()));
    STinkleProcessor.STinkle_instance = new WebAssembly.Instance(wasm_module, STinkleProcessor.importObject);
    registerProcessor('STinkle', STinkleProcessor);
} catch (e) {
    console.log(e); console.log("Faust STinkle cannot be loaded or compiled");
}

