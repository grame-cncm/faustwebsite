
/*
Code generated with Faust version 2.11.8
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONvirtualAnalogWithEffectsForBrowser() {
	return "{\"name\":\"freeverb\",\"filename\":\"virtualAnalogWithEffectsForBrowser\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/vaeffects.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"49744\",\"inputs\":\"1\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Grame\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"designer\":\"Robert A. Moog\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"freeverb\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"freeverb\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Minimoog\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Controllers\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Master Volume\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"MasterVolume\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Master_Volume/MasterVolume\",\"index\":\"16\",\"meta\":[{\"midi\":\"ctrl 7\"},{\"style\":\"knob\"},{\"tooltip\":\"master volume, MIDI controlled\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator Tuning & Switching\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Tune\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Tune\",\"index\":\"72\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 47\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency-shift up or down for all oscillators in Octaves\"},{\"unit\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc. Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._Mod.\",\"index\":\"80\",\"meta\":[{\"0\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 22\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Osc. 3 Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._3_Ctl\",\"index\":\"124\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 9\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Glide and ModMix\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Glide\",\"index\":\"136\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 5\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Portamento (frequency-glide) in seconds per octave\"},{\"unit\":\"sec/octave\"}],\"init\":\"0.008\",\"min\":\"0.001\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Mod. Mix\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Mod._Mix\",\"index\":\"84\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 48\"},{\"style\":\"knob\"},{\"tooltip\":\"Modulation Mix: Osc3 (0) to Noise (1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]},{\"type\":\"vgroup\",\"label\":\"Oscillator Bank\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Oscillator 1\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Octave1\",\"index\":\"33156\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 23\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/DeTuning1\",\"index\":\"33160\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 24\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Waveform1\",\"index\":\"33152\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 25\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Octave2\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 28\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/DeTuning2\",\"index\":\"76\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 29\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.41667\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Waveform2\",\"index\":\"44\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 30\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 3\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Octave3\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 33\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/DeTuning3\",\"index\":\"184\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 34\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.3\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Waveform3\",\"index\":\"116\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 35\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Mixer\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Osc1\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc1 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/Osc1_Amp\",\"index\":\"33144\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 26\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/On\",\"index\":\"33148\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 12\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Ext In, KeyCtl\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Ext Input\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/Ext_Input\",\"index\":\"33136\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 27\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/On\",\"index\":\"33140\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 13\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Osc2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc2 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/Osc2_Amp\",\"index\":\"36\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 31\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/On\",\"index\":\"40\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 14\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Noise\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Noise Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/Noise_Amp\",\"index\":\"33120\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 32\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/On\",\"index\":\"33116\",\"meta\":[{\"0\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 15\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"White/Pink\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/White/Pink\",\"index\":\"88\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 16\"},{\"style\":\"knob\"},{\"tooltip\":\"Choose either White or Pink Noise\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Osc3\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc3 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/Osc3_Amp\",\"index\":\"33108\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 36\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/On\",\"index\":\"33112\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 17\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Modifiers\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Filter\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"freq, Q, ContourScale\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"two checkboxes\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Filter Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Filter_Mod.\",\"index\":\"49620\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 19\"},{\"style\":\"knob\"},{\"tooltip\":\"Filter Modulation => Route Modulation Mix output to VCF frequency\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Kbd Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Kbd_Ctl\",\"index\":\"49680\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 38\"},{\"style\":\"knob\"},{\"tooltip\":\"Keyboard tracking of VCF corner-frequency (0=none, 1=full)\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vslider\",\"label\":\"Corner Freq\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Freq\",\"index\":\"49624\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 74\"},{\"style\":\"knob\"},{\"tooltip\":\"Corner resonance frequency in Log2(Hertz)\"},{\"unit\":\"Log2(Hz)\"}],\"init\":\"10.6\",\"min\":\"5.32193\",\"max\":\"14.2877\",\"step\":\"1e-06\"},{\"type\":\"vslider\",\"label\":\"Corner Resonance\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Resonance\",\"index\":\"49612\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 37\"},{\"style\":\"knob\"},{\"tooltip\":\"Resonance Q at VCF corner frequency (0 to 1)\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Amount of Contour (octaves)\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Amount_of_Contour_(octaves)\",\"index\":\"49636\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 39\"},{\"style\":\"knob\"}],\"init\":\"1.2\",\"min\":\"0\",\"max\":\"4\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Filter Contour\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"AttFilt, DecFilt, Sustain Level for Filter Contour\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/AttackF\",\"index\":\"49664\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 40\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"1400\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DecayF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/DecayF\",\"index\":\"49648\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 41\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"SustainF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/SustainF\",\"index\":\"49668\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 42\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Loudness Contour\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/AttackA\",\"index\":\"49720\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 43\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"2\",\"min\":\"0\",\"max\":\"5000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"DecayA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/DecayA\",\"index\":\"49716\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 44\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0\",\"max\":\"10000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"SustainA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/SustainA\",\"index\":\"49724\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 45\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"Keyboard Group\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Wheels and Switches\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Wheels+\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Bend and Mod Wheels\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Decay\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Decay\",\"index\":\"49644\",\"meta\":[{\"midi\":\"ctrl 20\"},{\"style\":\"knob\"},{\"tooltip\":\"Envelope Release either Decay value or 0\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Glide\",\"index\":\"128\",\"meta\":[{\"midi\":\"ctrl 65\"},{\"style\":\"knob\"},{\"tooltip\":\"Glide from note to note\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/bend\",\"index\":\"144\",\"meta\":[{\"0\":\"\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"mod\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/mod\",\"index\":\"16648\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"},{\"tooltip\":\"PitchModulation amplitude in octaves\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Keys\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Gates\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gateHold\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gateHold\",\"index\":\"152\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"lock sustain pedal on (hold gate set at 1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gate\",\"index\":\"148\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"The gate signal is 1 during a  note and 0 otherwise. For MIDI, NoteOn occurs when the gate  transitions from 0 to 1, and NoteOff is an event corresponding  to the gate transition from 1 to 0. The name of this Faust  button must be 'gate'.\"}]},{\"type\":\"button\",\"label\":\"sustain\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/sustain\",\"index\":\"156\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 64\"},{\"tooltip\":\"extends the gate (keeps it set to 1)\"}]}]}]},{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/freq\",\"index\":\"140\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"0.1\",\"max\":\"20000\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Output\",\"meta\":[{\"8\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Volume Main Output\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gain\",\"address\":\"/freeverb/Effects/Output/Volume_Main_Output/gain\",\"index\":\"33124\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Amplitude\"}],\"init\":\"0.2\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}]}]}]}";
}
function getBase64CodevirtualAnalogWithEffectsForBrowser() { return "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KgIAOAIAIABBGGogAEEUaigCADYCACAAQSBqIABBHGoqAgA4AgAgAEHgAGogAEHcAGooAgA2AgBBAyE4A0ACQCAAQeQAIDhBAnRqaiAAQeQAIDhBAWtBAnRqaioCADgCACA4QQFrITggOEEASgRADAIMAQsLCyAAQaQBaiAAQaABaioCADgCACAAQawBaiAAQagBaioCADgCACAAQbQBaiAAQbABaioCADgCACAAQcABaiAAQbwBaioCADgCACAAQcgBaiAAQcQBaioCADgCACAAQdABaiAAQcwBaioCADgCACAAQdgBaiAAQdQBaioCADgCACAAQeABaiAAQdwBaioCADgCACAAQeQBaiAAQeQBaigCAEEBajYCACAAQfCBAWogAEHsgQFqKgIAOAIAIABB+IEBaiAAQfSBAWoqAgA4AgAgAEGAggFqIABB/IEBaioCADgCACAAQZCCAWogAEGMggFqKgIAOAIAIABBmIIBaiAAQZSCAWoqAgA4AgAgAEGgggFqIABBnIIBaioCADgCACAAQaiCAWogAEGkggFqKgIAOAIAIABBsIIBaiAAQayCAWoqAgA4AgAgAEG4ggFqIABBtIIBaioCADgCACAAQcCCAmogAEG8ggJqKgIAOAIAIABByIICaiAAQcSCAmoqAgA4AgAgAEHQggJqIABBzIICaioCADgCACAAQeyCAmogAEHoggJqKgIAOAIAIABBkIMCaiAAQYyDAmoqAgA4AgAgAEGYgwJqIABBlIMCaioCADgCACAAQaCDAmogAEGcgwJqKgIAOAIAIABBqIMCaiAAQaSDAmoqAgA4AgAgAEGwgwJqIABBrIMCaioCADgCACAAQbiDA2ogAEG0gwNqKgIAOAIAIABBwIMDaiAAQbyDA2oqAgA4AgAgAEHIgwNqIABBxIMDaioCADgCACAAQeCDA2ogAEHcgwNqKgIAOAIAIABB+IMDaiAAQfSDA2ooAgA2AgAgAEGMhANqIABBiIQDaioCADgCACAAQZiEA2ogAEGUhANqKgIAOAIAIABBoIQDaiAAQZyEA2oqAgA4AgAgAEGohANqIABBpIQDaioCADgCACAAQbCEA2ogAEGshANqKgIAOAIAIABBxIQDaiAAQcCEA2oqAgA4AgAgAEHMhANqIABByIQDaioCADgCACApQQRqISkgKUEEIAFsSARADAIMAQsLCwuFgICAAABBAQ8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuLgICAAAAgAEEAaigCAA8LjoCAgAAAIAAgARAEIAAgARANC/iSgIAAAS1/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhK0EAISxBACEtQQAhAQNAAkAgAEEUIAFBAnRqakEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkAgAEEcIAJBAnRqakMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkAgAEHcACADQQJ0ampBADYCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAIABB5AAgBEECdGpqQwAAAAA4AgAgBEEBaiEEIARBBEgEQAwCDAELCwtBACEFA0ACQCAAQaABIAVBAnRqakMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkAgAEGoASAGQQJ0ampDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAIABBsAEgB0ECdGpqQwAAAAA4AgAgB0EBaiEHIAdBAkgEQAwCDAELCwtBACEIA0ACQCAAQbwBIAhBAnRqakMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkAgAEHEASAJQQJ0ampDAAAAADgCACAJQQFqIQkgCUECSARADAIMAQsLC0EAIQoDQAJAIABBzAEgCkECdGpqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQCAAQdQBIAtBAnRqakMAAAAAOAIAIAtBAWohCyALQQJIBEAMAgwBCwsLQQAhDANAAkAgAEHcASAMQQJ0ampDAAAAADgCACAMQQFqIQwgDEECSARADAIMAQsLCyAAQeQBakEANgIAQQAhDQNAAkAgAEHoASANQQJ0ampDAAAAADgCACANQQFqIQ0gDUGAIEgEQAwCDAELCwtBACEOA0ACQCAAQeyBASAOQQJ0ampDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAIABB9IEBIA9BAnRqakMAAAAAOAIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkAgAEH8gQEgEEECdGpqQwAAAAA4AgAgEEEBaiEQIBBBAkgEQAwCDAELCwtBACERA0ACQCAAQYyCASARQQJ0ampDAAAAADgCACARQQFqIREgEUECSARADAIMAQsLC0EAIRIDQAJAIABBlIIBIBJBAnRqakMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkAgAEGcggEgE0ECdGpqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQCAAQaSCASAUQQJ0ampDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAIABBrIIBIBVBAnRqakMAAAAAOAIAIBVBAWohFSAVQQJIBEAMAgwBCwsLQQAhFgNAAkAgAEG0ggEgFkECdGpqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQCAAQbyCASAXQQJ0ampDAAAAADgCACAXQQFqIRcgF0GAIEgEQAwCDAELCwtBACEYA0ACQCAAQbyCAiAYQQJ0ampDAAAAADgCACAYQQFqIRggGEECSARADAIMAQsLC0EAIRkDQAJAIABBxIICIBlBAnRqakMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkAgAEHMggIgGkECdGpqQwAAAAA4AgAgGkEBaiEaIBpBAkgEQAwCDAELCwtBACEbA0ACQCAAQeiCAiAbQQJ0ampDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAIABBjIMCIBxBAnRqakMAAAAAOAIAIBxBAWohHCAcQQJIBEAMAgwBCwsLQQAhHQNAAkAgAEGUgwIgHUECdGpqQwAAAAA4AgAgHUEBaiEdIB1BAkgEQAwCDAELCwtBACEeA0ACQCAAQZyDAiAeQQJ0ampDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAIABBpIMCIB9BAnRqakMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkAgAEGsgwIgIEECdGpqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQCAAQbSDAiAhQQJ0ampDAAAAADgCACAhQQFqISEgIUGAIEgEQAwCDAELCwtBACEiA0ACQCAAQbSDAyAiQQJ0ampDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAIABBvIMDICNBAnRqakMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkAgAEHEgwMgJEECdGpqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQCAAQdyDAyAlQQJ0ampDAAAAADgCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAIABB9IMDICZBAnRqakEANgIAICZBAWohJiAmQQJIBEAMAgwBCwsLQQAhJwNAAkAgAEGIhAMgJ0ECdGpqQwAAAAA4AgAgJ0EBaiEnICdBAkgEQAwCDAELCwtBACEoA0ACQCAAQZSEAyAoQQJ0ampDAAAAADgCACAoQQFqISggKEECSARADAIMAQsLC0EAISkDQAJAIABBnIQDIClBAnRqakMAAAAAOAIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkAgAEGkhAMgKkECdGpqQwAAAAA4AgAgKkEBaiEqICpBAkgEQAwCDAELCwtBACErA0ACQCAAQayEAyArQQJ0ampDAAAAADgCACArQQFqISsgK0ECSARADAIMAQsLC0EAISwDQAJAIABBwIQDICxBAnRqakMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkAgAEHIhAMgLUECdGpqQwAAAAA4AgAgLUEBaiEtIC1BAkgEQAwCDAELCwsL5YKAgAAAIABBAGogATYCACAAQQRqQwCAO0hDAACAPyAAQQBqKAIAspeWOAIAIABBCGpDAAAAAEMAAMhAIABBBGoqAgCVkxAAOAIAIABBDGpDAACAPyAAQQhqKgIAkzgCACAAQTRqQwAAgEAgAEEEaioCAJU4AgAgAEE4akMAAIA+IABBBGoqAgCUOAIAIABBPGpDAACAPyAAQQRqKgIAlTgCACAAQcAAakMAAAAAQwAAekIgAEEEaioCAJWTEAA4AgAgAEHEAGpDAACAPyAAQcAAaioCAJM4AgAgAEGEAWpDslo8PyAAQQRqKgIAlTgCACAAQeiBAWpDAAAAPyAAQQRqKgIAlDgCACAAQYSCAWpDAAAAPiAAQQRqKgIAlDgCACAAQdCDA2pD2w9JQCAAQQRqKgIAlTgCACAAQeiDA2pDuB7dQCAAQQRqKgIAlTgCACAAQfyDA2pDbxKDOiAAQQRqKgIAlDgCAAuQgICAAAAgACABEAwgABAOIAAQCwuahYCAAAAgAEEQakMzMzM/OAIAIABBJGpDAAAAPzgCACAAQShqQwAAgD84AgAgAEEsakMAAKBAOAIAIABBMGpDAACAPzgCACAAQcgAakMAAAAAOAIAIABBzABqQ8VV1T44AgAgAEHQAGpDAACAPzgCACAAQdQAakMAAAAAOAIAIABB2ABqQwAAgD84AgAgAEH0AGpDAAAAADgCACAAQfgAakMAAAAAOAIAIABB/ABqQwAAAAA4AgAgAEGAAWpDAACAPzgCACAAQYgBakNvEgM8OAIAIABBjAFqQwAAXEM4AgAgAEGQAWpDAACAPzgCACAAQZQBakMAAAAAOAIAIABBmAFqQwAAAAA4AgAgAEGcAWpDAAAAADgCACAAQbgBakOamZk+OAIAIABBiIIBakMAAAAAOAIAIABB1IICakMAAAA/OAIAIABB2IICakMAAAAAOAIAIABB3IICakMAAAAAOAIAIABB4IICakMAAAAAOAIAIABB5IICakPNzEw+OAIAIABB8IICakMAAAAAOAIAIABB9IICakMAAAAAOAIAIABB+IICakMAAAA/OAIAIABB/IICakMAAIA/OAIAIABBgIMCakMAAKBAOAIAIABBhIMCakMAAIA/OAIAIABBiIMCakMAAAAAOAIAIABBzIMDakMzMzM/OAIAIABB1IMDakMAAIA/OAIAIABB2IMDakOamSlBOAIAIABB5IMDakOamZk/OAIAIABB7IMDakMAAIA/OAIAIABB8IMDakMAACBBOAIAIABBgIQDakMAAK9EOAIAIABBhIQDakMAAKBCOAIAIABBkIQDakMAAIA/OAIAIABBtIQDakMAACBBOAIAIABBuIQDakMAAABAOAIAIABBvIQDakMAAKBCOAIAC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC+H9gIAAAQBBAAvafXsibmFtZSI6ImZyZWV2ZXJiIiwiZmlsZW5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyIiwidmVyc2lvbiI6IjIuMTEuOCIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvdmFlZmZlY3RzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiXSwic2l6ZSI6IjQ5NzQ0IiwiaW5wdXRzIjoiMSIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYXV0aG9yIjoiR3JhbWUifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiIoYykgR1JBTUUgMjAwNiBhbmQgTW9Gb3J0ZSBJbmMuIDIwMTcifSx7ImRlc2lnbmVyIjoiUm9iZXJ0IEEuIE1vb2cifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsZW5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnRlcmZhY2UiOiJTbWFydEtleWJvYXJkeyAgICAgJ051bWJlciBvZiBLZXlib2FyZHMnOicyJywgICAgICdLZXlib2FyZCAwIC0gTnVtYmVyIG9mIEtleXMnOicxMycsICAgICAnS2V5Ym9hcmQgMSAtIE51bWJlciBvZiBLZXlzJzonMTMnLCAgICAgJ0tleWJvYXJkIDAgLSBMb3dlc3QgS2V5JzonNzInLCAgICAgJ0tleWJvYXJkIDEgLSBMb3dlc3QgS2V5JzonNjAnIH0ifSx7ImxpY2Vuc2UiOiJCU0QifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6ImZyZWV2ZXJiIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InJlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9GcmVldmVyYi5odG1sIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmFlZmZlY3RzLmxpYi9uYW1lIjoiRmF1c3QgVmlydHVhbCBBbmFsb2cgRmlsdGVyIEVmZmVjdCBMaWJyYXJ5In0seyJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJmcmVldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNaW5pbW9vZyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNvbnRyb2xsZXJzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik1hc3RlciBWb2x1bWUiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik1hc3RlclZvbHVtZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9NYXN0ZXJfVm9sdW1lL01hc3RlclZvbHVtZSIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA3In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJtYXN0ZXIgdm9sdW1lLCBNSURJIGNvbnRyb2xsZWQifV0sImluaXQiOiIwLjciLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIFR1bmluZyAmIFN3aXRjaGluZyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiVHVuZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9Pc2NpbGxhdG9yX1R1bmluZ18mX1N3aXRjaGluZy9UdW5lIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQ3In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGcmVxdWVuY3ktc2hpZnQgdXAgb3IgZG93biBmb3IgYWxsIG9zY2lsbGF0b3JzIGluIE9jdGF2ZXMifSx7InVuaXQiOiJPY3RhdmVzIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYy4gTW9kLiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9Pc2NpbGxhdG9yX1R1bmluZ18mX1N3aXRjaGluZy9Td2l0Y2hlcy9Pc2MuX01vZC4iLCJpbmRleCI6IjgwIiwibWV0YSI6W3siMCI6IiJ9LHsiY29sb3IiOiJyZWQifSx7Im1pZGkiOiJjdHJsIDIyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYy4gMyBDdGwiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvT3NjaWxsYXRvcl9UdW5pbmdfJl9Td2l0Y2hpbmcvU3dpdGNoZXMvT3NjLl8zX0N0bCIsImluZGV4IjoiMTI0IiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJyZWQifSx7Im1pZGkiOiJjdHJsIDkifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiR2xpZGUgYW5kIE1vZE1peCIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiR2xpZGUiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvR2xpZGVfYW5kX01vZE1peC9HbGlkZSIsImluZGV4IjoiMTM2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNSJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBvcnRhbWVudG8gKGZyZXF1ZW5jeS1nbGlkZSkgaW4gc2Vjb25kcyBwZXIgb2N0YXZlIn0seyJ1bml0Ijoic2VjL29jdGF2ZSJ9XSwiaW5pdCI6IjAuMDA4IiwibWluIjoiMC4wMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTW9kLiBNaXgiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvR2xpZGVfYW5kX01vZE1peC9Nb2QuX01peCIsImluZGV4IjoiODQiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA0OCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiTW9kdWxhdGlvbiBNaXg6IE9zYzMgKDApIHRvIE5vaXNlICgxKSJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik9zY2lsbGF0b3IgQmFuayIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIDEiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9jdGF2ZTEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMS9PY3RhdmUxIiwiaW5kZXgiOiIzMzE1NiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDIzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlVHVuaW5nMSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8xL0RlVHVuaW5nMSIsImluZGV4IjoiMzMxNjAiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAyNCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0cyI6Ik9jdGF2ZXMifV0sImluaXQiOiIwIiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZWZvcm0xIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzEvV2F2ZWZvcm0xIiwiaW5kZXgiOiIzMzE1MiIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDI1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIDIiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9jdGF2ZTIiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMi9PY3RhdmUyIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDI4In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlVHVuaW5nMiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8yL0RlVHVuaW5nMiIsImluZGV4IjoiNzYiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAyOSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0cyI6Ik9jdGF2ZXMifV0sImluaXQiOiIwLjQxNjY3IiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZWZvcm0yIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzIvV2F2ZWZvcm0yIiwiaW5kZXgiOiI0NCIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDMwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI1IiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIDMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9jdGF2ZTMiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMy9PY3RhdmUzIiwiaW5kZXgiOiIxMjAiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAzMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZVR1bmluZzMiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMy9EZVR1bmluZzMiLCJpbmRleCI6IjE4NCIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDM0In0seyJzdHlsZSI6Imtub2IifSx7InVuaXRzIjoiT2N0YXZlcyJ9XSwiaW5pdCI6IjAuMyIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhdmVmb3JtMyIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8zL1dhdmVmb3JtMyIsImluZGV4IjoiMTE2IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMzUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiTWl4ZXIiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjMSIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjMSBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMS9Pc2MxX0FtcCIsImluZGV4IjoiMzMxNDQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAyNiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MxL09uIiwiaW5kZXgiOiIzMzE0OCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkV4dCBJbiwgS2V5Q3RsIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFeHQgSW5wdXQiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvRXh0X0luLF9LZXlDdGwvRXh0X0lucHV0IiwiaW5kZXgiOiIzMzEzNiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDI3In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9FeHRfSW4sX0tleUN0bC9PbiIsImluZGV4IjoiMzMxNDAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDEzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2MyIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MyIEFtcCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MyL09zYzJfQW1wIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDMxIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzIvT24iLCJpbmRleCI6IjQwIiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxNCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiTm9pc2UiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik5vaXNlIEFtcCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Ob2lzZS9Ob2lzZV9BbXAiLCJpbmRleCI6IjMzMTIwIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMzIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvTm9pc2UvMHgwMC9PbiIsImluZGV4IjoiMzMxMTYiLCJtZXRhIjpbeyIwIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldoaXRlL1BpbmsiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvTm9pc2UvMHgwMC9XaGl0ZS9QaW5rIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTYifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNob29zZSBlaXRoZXIgV2hpdGUgb3IgUGluayBOb2lzZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjMyIsIm1ldGEiOlt7IjQiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjMyBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMy9Pc2MzX0FtcCIsImluZGV4IjoiMzMxMDgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAzNiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MzL09uIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTcifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiTW9kaWZpZXJzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkZpbHRlciIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6ImZyZXEsIFEsIENvbnRvdXJTY2FsZSJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoidHdvIGNoZWNrYm94ZXMifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmlsdGVyIE1vZC4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwLzB4MDAvRmlsdGVyX01vZC4iLCJpbmRleCI6IjQ5NjIwIiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJyZWQifSx7Im1pZGkiOiJjdHJsIDE5In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGaWx0ZXIgTW9kdWxhdGlvbiA9PiBSb3V0ZSBNb2R1bGF0aW9uIE1peCBvdXRwdXQgdG8gVkNGIGZyZXF1ZW5jeSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiS2JkIEN0bCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvMHgwMC9LYmRfQ3RsIiwiaW5kZXgiOiI0OTY4MCIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDM4In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJLZXlib2FyZCB0cmFja2luZyBvZiBWQ0YgY29ybmVyLWZyZXF1ZW5jeSAoMD1ub25lLCAxPWZ1bGwpIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJDb3JuZXIgRnJlcSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvQ29ybmVyX0ZyZXEiLCJpbmRleCI6IjQ5NjI0IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNzQifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNvcm5lciByZXNvbmFuY2UgZnJlcXVlbmN5IGluIExvZzIoSGVydHopIn0seyJ1bml0IjoiTG9nMihIeikifV0sImluaXQiOiIxMC42IiwibWluIjoiNS4zMjE5MyIsIm1heCI6IjE0LjI4NzciLCJzdGVwIjoiMWUtMDYifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJDb3JuZXIgUmVzb25hbmNlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC9Db3JuZXJfUmVzb25hbmNlIiwiaW5kZXgiOiI0OTYxMiIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDM3In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJSZXNvbmFuY2UgUSBhdCBWQ0YgY29ybmVyIGZyZXF1ZW5jeSAoMCB0byAxKSJ9XSwiaW5pdCI6IjAuNyIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJBbW91bnQgb2YgQ29udG91ciAob2N0YXZlcykiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwL0Ftb3VudF9vZl9Db250b3VyXyhvY3RhdmVzKSIsImluZGV4IjoiNDk2MzYiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCAzOSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMS4yIiwibWluIjoiMCIsIm1heCI6IjQiLCJzdGVwIjoiMC4wMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRmlsdGVyIENvbnRvdXIiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiQXR0RmlsdCwgRGVjRmlsdCwgU3VzdGFpbiBMZXZlbCBmb3IgRmlsdGVyIENvbnRvdXIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQXR0YWNrRiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyL0ZpbHRlcl9Db250b3VyL0F0dGFja0YiLCJpbmRleCI6IjQ5NjY0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkF0dGFjayBUaW1lIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIxNDAwIiwibWluIjoiMTAiLCJtYXgiOiIxMDAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVjYXlGIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvRmlsdGVyX0NvbnRvdXIvRGVjYXlGIiwiaW5kZXgiOiI0OTY0OCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQxIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJEZWNheS10by1TdXN0YWluIFRpbWUifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjEwIiwibWluIjoiMTAiLCJtYXgiOiIxMDAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiU3VzdGFpbkYiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci9GaWx0ZXJfQ29udG91ci9TdXN0YWluRiIsImluZGV4IjoiNDk2NjgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0MiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiU3VzdGFpbiBsZXZlbCBhcyBwZXJjZW50IG9mIG1heCJ9XSwiaW5pdCI6IjgwIiwibWluIjoiMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIwLjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJMb3VkbmVzcyBDb250b3VyIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJBdHRhY2tBIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9Mb3VkbmVzc19Db250b3VyL0F0dGFja0EiLCJpbmRleCI6IjQ5NzIwIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDMifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkF0dGFjayBUaW1lIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIyIiwibWluIjoiMCIsIm1heCI6IjUwMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVjYXlBIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9Mb3VkbmVzc19Db250b3VyL0RlY2F5QSIsImluZGV4IjoiNDk3MTYiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0NCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRGVjYXktdG8tU3VzdGFpbiBUaW1lIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIxMCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAwMCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJTdXN0YWluQSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvTG91ZG5lc3NfQ29udG91ci9TdXN0YWluQSIsImluZGV4IjoiNDk3MjQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0NSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiU3VzdGFpbiBsZXZlbCBhcyBwZXJjZW50IG9mIG1heCJ9XSwiaW5pdCI6IjgwIiwibWluIjoiMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIwLjEifV19XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IktleWJvYXJkIEdyb3VwIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IldoZWVscyBhbmQgU3dpdGNoZXMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJXaGVlbHMrIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJCZW5kIGFuZCBNb2QgV2hlZWxzIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlY2F5IiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9XaGVlbHNfYW5kX1N3aXRjaGVzLzB4MDAvMHgwMC9EZWNheSIsImluZGV4IjoiNDk2NDQiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCAyMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRW52ZWxvcGUgUmVsZWFzZSBlaXRoZXIgRGVjYXkgdmFsdWUgb3IgMCJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiR2xpZGUiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL0dsaWRlIiwiaW5kZXgiOiIxMjgiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA2NSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2xpZGUgZnJvbSBub3RlIHRvIG5vdGUifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbmQiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL2JlbmQiLCJpbmRleCI6IjE0NCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJwaXRjaHdoZWVsIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMC4wMDEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoibW9kIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9XaGVlbHNfYW5kX1N3aXRjaGVzLzB4MDAvMHgwMC9tb2QiLCJpbmRleCI6IjE2NjQ4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGl0Y2hNb2R1bGF0aW9uIGFtcGxpdHVkZSBpbiBvY3RhdmVzIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiS2V5cyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoiR2F0ZXMifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiZ2F0ZUhvbGQiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwLzB4MDAvMHgwMC9nYXRlSG9sZCIsImluZGV4IjoiMTUyIiwibWV0YSI6W3siMCI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoibG9jayBzdXN0YWluIHBlZGFsIG9uIChob2xkIGdhdGUgc2V0IGF0IDEpIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6ImdhdGUiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwLzB4MDAvMHgwMC9nYXRlIiwiaW5kZXgiOiIxNDgiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiVGhlIGdhdGUgc2lnbmFsIGlzIDEgZHVyaW5nIGEgIG5vdGUgYW5kIDAgb3RoZXJ3aXNlLiBGb3IgTUlESSwgTm90ZU9uIG9jY3VycyB3aGVuIHRoZSBnYXRlICB0cmFuc2l0aW9ucyBmcm9tIDAgdG8gMSwgYW5kIE5vdGVPZmYgaXMgYW4gZXZlbnQgY29ycmVzcG9uZGluZyAgdG8gdGhlIGdhdGUgdHJhbnNpdGlvbiBmcm9tIDEgdG8gMC4gVGhlIG5hbWUgb2YgdGhpcyBGYXVzdCAgYnV0dG9uIG11c3QgYmUgJ2dhdGUnLiJ9XX0seyJ0eXBlIjoiYnV0dG9uIiwibGFiZWwiOiJzdXN0YWluIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC8weDAwLzB4MDAvc3VzdGFpbiIsImluZGV4IjoiMTU2IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNjQifSx7InRvb2x0aXAiOiJleHRlbmRzIHRoZSBnYXRlIChrZWVwcyBpdCBzZXQgdG8gMSkifV19XX1dfSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJmcmVxIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9mcmVxIiwiaW5kZXgiOiIxNDAiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIyMCIsIm1pbiI6IjAuMSIsIm1heCI6IjIwMDAwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkVmZmVjdHMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiT3V0cHV0IiwibWV0YSI6W3siOCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlZvbHVtZSBNYWluIE91dHB1dCIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiZ2FpbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvRWZmZWN0cy9PdXRwdXQvVm9sdW1lX01haW5fT3V0cHV0L2dhaW4iLCJpbmRleCI6IjMzMTI0IiwibWV0YSI6W3siMSI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQW1wbGl0dWRlIn1dLCJpbml0IjoiMC4yIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19XX1dfV19XX0="; }


/*
Code generated with Faust version 2.11.8
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONeffect() {
	return "{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\",\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\",\"version\":\"2.11.8\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/Documents/faustwebsite-github/modules-worklet/virtualAnalogWithEffectsForBrowser.dsp\",\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/routes.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/vaeffects.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"943628\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"},{\"virtualAnalogWithEffectsForBrowser.dsp/author\":\"Grame\"},{\"virtualAnalogWithEffectsForBrowser.dsp/copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"virtualAnalogWithEffectsForBrowser.dsp/designer\":\"Robert A. Moog\"},{\"virtualAnalogWithEffectsForBrowser.dsp/interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"virtualAnalogWithEffectsForBrowser.dsp/license\":\"BSD\"},{\"virtualAnalogWithEffectsForBrowser.dsp/name\":\"freeverb\"},{\"virtualAnalogWithEffectsForBrowser.dsp/reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"virtualAnalogWithEffectsForBrowser.dsp/version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"virtualAnalogWithEffectsForBrowser_effect\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Echo\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Delay\",\"index\":\"786584\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 61\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0.001\",\"max\":\"0.742039\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Warp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Warp\",\"index\":\"786604\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 62\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"DelayT60\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/DelayT60\",\"index\":\"786576\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 60\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Feedback\",\"index\":\"524424\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"}],\"init\":\"0.3\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Amp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Amp\",\"index\":\"524404\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 75\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"FeedbackSm\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/FeedbackSm\",\"index\":\"524416\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 76\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1e-05\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"EnableEcho\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Switches/EnableEcho\",\"index\":\"524420\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 105\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Flanger\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Delay\",\"index\":\"803028\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 50\"},{\"style\":\"knob\"}],\"init\":\"0.22\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Rate\",\"index\":\"524364\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 51\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Depth\",\"index\":\"803044\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 52\"},{\"style\":\"knob\"}],\"init\":\"0.75\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Feedback\",\"index\":\"786632\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 53\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-0.995\",\"max\":\"0.99\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveshape\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Waveshape\",\"index\":\"524356\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 54\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Enable\",\"index\":\"524352\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Invert\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Invert\",\"index\":\"803040\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 49\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Chorus\",\"meta\":[{\"6\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Delay\",\"index\":\"868592\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Rate\",\"index\":\"868620\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0.01\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Depth\",\"index\":\"524340\",\"meta\":[{\"4\":\"\"},{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Deviation\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Deviation\",\"index\":\"868604\",\"meta\":[{\"6\":\"\"},{\"midi\":\"ctrl 58\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Switches/Enable\",\"index\":\"524320\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"7\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Damp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Damp\",\"index\":\"524308\",\"meta\":[{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"RoomSize\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/RoomSize\",\"index\":\"524304\",\"meta\":[{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"Wet\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Wet\",\"index\":\"524300\",\"meta\":[{\"midi\":\"ctrl 79\"},{\"style\":\"knob\"}],\"init\":\"0.3333\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Switches/Enable\",\"index\":\"524296\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 104\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}]}]}]}";
}
function getBase64Codeeffect() { return "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L3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9yb3V0ZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC92YWVmZmVjdHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIl0sImluY2x1ZGVfcGF0aG5hbWVzIjpbIi4iLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCJdLCJzaXplIjoiOTQzNjI4IiwiaW5wdXRzIjoiMiIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvYXV0aG9yIjoiR3JhbWUifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2NvcHlyaWdodCI6IihjKSBHUkFNRSAyMDA2IGFuZCBNb0ZvcnRlIEluYy4gMjAxNyJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvZGVzaWduZXIiOiJSb2JlcnQgQS4gTW9vZyJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvaW50ZXJmYWNlIjoiU21hcnRLZXlib2FyZHsgICAgICdOdW1iZXIgb2YgS2V5Ym9hcmRzJzonMicsICAgICAnS2V5Ym9hcmQgMCAtIE51bWJlciBvZiBLZXlzJzonMTMnLCAgICAgJ0tleWJvYXJkIDEgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAwIC0gTG93ZXN0IEtleSc6JzcyJywgICAgICdLZXlib2FyZCAxIC0gTG93ZXN0IEtleSc6JzYwJyB9In0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9saWNlbnNlIjoiQlNEIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9uYW1lIjoiZnJlZXZlcmIifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL3JlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9GcmVldmVyYi5odG1sIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC92ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRWZmZWN0cyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFY2hvIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI3ODY1ODQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA2MSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMC4wMDEiLCJtYXgiOiIwLjc0MjAzOSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhcnAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9XYXJwIiwiaW5kZXgiOiI3ODY2MDQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA2MiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlbGF5VDYwIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRGVsYXlUNjAiLCJpbmRleCI6Ijc4NjU3NiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDYwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmVlZGJhY2siLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9GZWVkYmFjayIsImluZGV4IjoiNTI0NDI0IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4zIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQW1wIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvQW1wIiwiaW5kZXgiOiI1MjQ0MDQiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCA3NSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJGZWVkYmFja1NtIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRmVlZGJhY2tTbSIsImluZGV4IjoiNTI0NDE2IiwibWV0YSI6W3siNSI6IiJ9LHsibWlkaSI6ImN0cmwgNzYifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxZS0wNSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlRWNobyIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL1N3aXRjaGVzL0VuYWJsZUVjaG8iLCJpbmRleCI6IjUyNDQyMCIsIm1ldGEiOlt7IjciOiIifSx7Im1pZGkiOiJjdHJsIDEwNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJGbGFuZ2VyIiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI4MDMwMjgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA1MCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yMiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJSYXRlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvUmF0ZSIsImluZGV4IjoiNTI0MzY0IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNTEifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL0RlcHRoIiwiaW5kZXgiOiI4MDMwNDQiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCA1MiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43NSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmVlZGJhY2siLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9GZWVkYmFjayIsImluZGV4IjoiNzg2NjMyIiwibWV0YSI6W3siNSI6IiJ9LHsibWlkaSI6ImN0cmwgNTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMC45OTUiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZXNoYXBlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvV2F2ZXNoYXBlIiwiaW5kZXgiOiI1MjQzNTYiLCJtZXRhIjpbeyI3IjoiIn0seyJtaWRpIjoiY3RybCA1NCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFbmFibGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Td2l0Y2hlcy9FbmFibGUiLCJpbmRleCI6IjUyNDM1MiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEwMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJJbnZlcnQiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Td2l0Y2hlcy9JbnZlcnQiLCJpbmRleCI6IjgwMzA0MCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDQ5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkNob3J1cyIsIm1ldGEiOlt7IjYiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJLbm9icyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVsYXkiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI4Njg1OTIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvUmF0ZSIsImluZGV4IjoiODY4NjIwIiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiNyIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGVwdGgiLCJpbmRleCI6IjUyNDM0MCIsIm1ldGEiOlt7IjQiOiIifSx7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGV2aWF0aW9uIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Lbm9icy9EZXZpYXRpb24iLCJpbmRleCI6Ijg2ODYwNCIsIm1ldGEiOlt7IjYiOiIifSx7Im1pZGkiOiJjdHJsIDU4In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Td2l0Y2hlcy9FbmFibGUiLCJpbmRleCI6IjUyNDMyMCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEwMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI3IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiS25vYnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRhbXAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL0tub2JzL0RhbXAiLCJpbmRleCI6IjUyNDMwOCIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDI1In0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUm9vbVNpemUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL0tub2JzL1Jvb21TaXplIiwiaW5kZXgiOiI1MjQzMDQiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldldCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvS25vYnMvV2V0IiwiaW5kZXgiOiI1MjQzMDAiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA3OSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4zMzMzIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMjUifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVuYWJsZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvU3dpdGNoZXMvRW5hYmxlIiwiaW5kZXgiOiI1MjQyOTYiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxMDQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19XX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class virtualAnalogWithEffectsForBrowserPolyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	virtualAnalogWithEffectsForBrowserPolyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(group.items, obj, callback);
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
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(item.items, obj, callback);
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
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= virtualAnalogWithEffectsForBrowserPolyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        
        // Add instrument parameters
        virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser()).ui, params, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item1);
        
        // Possibly add effect parameters
        if (typeof (getJSONeffect) !== "undefined") {
             virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(JSON.parse(getJSONeffect()).ui, params, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item1);
        }
        return params;
    }
    
    static createMemory(buffer_size, polyphony) 
    {
        // Memory allocator
        var ptr_size = 4;
        var sample_size = 4;
        
        function pow2limit(x)
        {
            var n = 65536; // Minimum = 64 kB
            while (n < x) { n = 2 * n; }
            return n;
        }
        
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser());
        } catch (e) {
            return null;
        }
        
        var effect_json_object_size = 0;
        if (typeof (getJSONeffect) !== "undefined") {
            var effect_json_object = null;
            try {
                effect_json_object = JSON.parse(getJSONeffect());
                effect_json_object_size = parseInt(effect_json_object.size);
            } catch (e) {
                faust.error_msg = "Error in JSON.parse: " + e;
                return null;
            }
        }
        
        var memory_size = pow2limit(effect_json_object_size + parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONvirtualAnalogWithEffectsForBrowser());
        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }
        
        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.debug = false;
        
        this.ins = null;
        this.outs = null;
        this.mixing = null;
        this.compute_handler = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.fFreqLabel = [];
        this.fGateLabel = [];
        this.fGainLabel = [];
        this.fDate = 0;
        
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }
   
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.memory = virtualAnalogWithEffectsForBrowserPolyProcessor.createMemory(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony);

        // Create Mixer
        this.mixObject = { imports: { print: arg => console.log(arg) } }
        this.mixObject["memory"] = { "memory": this.memory };

        this.importObject = {
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
                
                memory: this.memory,
                
                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        }

        this.factory = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_module, this.importObject).exports;
        this.HEAP = this.memory.buffer;
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
        
        // Start of HEAP index
        // this.audio_heap_ptr = 0; Fails when 0...
        this.audio_heap_ptr = 65536;
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        this.audio_heap_ptr_mixing = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_mixing + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module, this.mixObject).exports;
        
        // wasm effect
        this.effect = (virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module) ? new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module, this.importObject).exports : null;
        
        if (this.debug) {
            console.log(this.mixer);
            console.log(this.factory);
            console.log(this.effect);
        }
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony;
        this.dsp_voices = [];
        this.dsp_voices_state = [];
        this.dsp_voices_level = [];
        this.dsp_voices_date = [];
        this.dsp_voices_trigger = [];
        
        this.kActiveVoice = 0;
        this.kFreeVoice = -1;
        this.kReleaseVoice = -2;
        this.kNoVoice = -3;
     
        this.pathTable = [];
        
        // Allocate table for 'setParamValue'
        this.value_table = [];
        
        for (var i = 0; i <  this.polyphony; i++) {
            this.dsp_voices[i] = this.dsp_start + i * parseInt(this.json_object.size);
            this.dsp_voices_state[i] = this.kFreeVoice;
            this.dsp_voices_level[i] = 0;
            this.dsp_voices_date[i] = 0;
            this.dsp_voices_trigger[i] = false;
        }
        
        // Effect memory starts after last voice
        this.effect_start = this.dsp_voices[this.polyphony - 1] + parseInt(this.json_object.size);
    
        this.getPlayingVoice = function(pitch)
        {
            var voice_playing = this.kNoVoice;
            var oldest_date_playing = Number.MAX_VALUE;
            
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === pitch) {
                    // Keeps oldest playing voice
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            return voice_playing;
        }
        
        // Always returns a voice
        this.allocVoice = function(voice)
        {
            this.dsp_voices_date[voice] = this.fDate++;
            this.dsp_voices_trigger[voice] = true;    // so that envelop is always re-initialized
            this.dsp_voices_state[voice] = this.kActiveVoice;
            return voice;
        }
        
        this.getFreeVoice = function()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === this.kFreeVoice) {
                    return this.allocVoice(i);
                }
            }
            
            var voice_release = this.kNoVoice;
            var voice_playing = this.kNoVoice;
            var oldest_date_release = Number.MAX_VALUE;
            var oldest_date_playing = Number.MAX_VALUE;
            
            // Scan all voices
            for (var i = 0; i <  this.polyphony; i++) {
                // Try to steal a voice in kReleaseVoice mode...
                if (this.dsp_voices_state[i] === this.kReleaseVoice) {
                    // Keeps oldest release voice
                    if (this.dsp_voices_date[i] < oldest_date_release) {
                        oldest_date_release = this.dsp_voices_date[i];
                        voice_release = i;
                    }
                } else {
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            // Then decide which one to steal
            if (oldest_date_release != Number.MAX_VALUE) {
                if (this.debug) {
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                }
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug) {
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
                }
                return this.allocVoice(voice_playing);
            } else {
                return this.kNoVoice;
            }
        }
        
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.midiToFreq = function (note)
        {
            return 440.0 * Math.pow(2.0, (note - 69.0) / 12.0);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI part
            virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(this.json_object.ui, this, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item2);
            
            if (this.effect) {
                virtualAnalogWithEffectsForBrowserPolyProcessor.parse_ui(this.effect_json_object.ui, this, virtualAnalogWithEffectsForBrowserPolyProcessor.parse_item2);
            }
     
            // keep 'keyOn/keyOff' labels
            for (i = 0; i < this.inputs_items.length; i++) {
                if (this.inputs_items[i].endsWith("/gate")) {
                    this.fGateLabel.push(this.pathTable[this.inputs_items[i]]);
                } else if (this.inputs_items[i].endsWith("/freq")) {
                    this.fFreqLabel.push(this.pathTable[this.inputs_items[i]]);
                } else if (this.inputs_items[i].endsWith("/gain")) {
                    this.fGainLabel.push(this.pathTable[this.inputs_items[i]]);
                }
            }
            
            // Init DSP voices
            for (i = 0; i < this.polyphony; i++) {
                this.factory.init(this.dsp_voices[i], sampleRate);  // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
            
            // Init effect
            if (this.effect) {
                this.effect.init(this.effect_start, sampleRate);
            }
        }
        
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            if (this.debug) {
                console.log("keyOn voice %d", voice);
            }
            for (var i = 0; i < this.fFreqLabel.length; i++) {
                this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel[i], this.midiToFreq(pitch));
            }
            for (var i = 0; i < this.fGainLabel.length; i++) {
                this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel[i], velocity/127.);
            }
            this.dsp_voices_state[voice] = pitch;
            this.dsp_voices_trigger[voice] = true;
        }
        
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                // Be sure the voice is not triggered
                this.dsp_voices_trigger[voice] = false;	
                if (this.debug) {
                    console.log("keyOff voice %d", voice);
                }
                // No use of velocity for now...
                for (var i = 0; i < this.fGateLabel.length; i++) {
                    this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel[i], 0.0);
                }
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                if (this.debug) {
                    console.log("Playing voice not found...");
                }
            }
        }
        
        this.allNotesOff = function ()
        {
            for (var i = 0; i < this.polyphony; i++) {
                for (var j = 0; j < this.fGateLabel.length; j++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 0.0);
                }
                this.dsp_voices_state[i] = this.kReleaseVoice;
            }
        }
        
        this.ctrlChange = function (channel, ctrl, value)
        {
            if (ctrl === 123 || ctrl === 120) {
                this.allNotesOff();
            }
            
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, virtualAnalogWithEffectsForBrowserPolyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            if (this.effect && getJSONeffect().includes(path)) {
                this.effect.setParamValue(this.effect_start, this.pathTable[path], val);
            } else {
                for (var i = 0; i < this.polyphony; i++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
                }
            }
        }

        this.getParamValue = function (path)
        {
            if (this.effect && getJSONeffect().includes(path)) {
                return this.effect.getParamValue(this.effect_start, this.pathTable[path]);
            } else {
                return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
            }
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
            this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
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
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    for (var j = 0; j < this.fGateLabel.length; j++) {
                        this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 0.0);
                    }
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    for (var j = 0; j < this.fGateLabel.length; j++) {
                        this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel[j], 1.0);
                    }
                    this.factory.compute(this.dsp_voices[i], virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.0005) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
        }
        
        // Apply effect
        if (this.effect) {
            this.effect.compute(this.effect_start, virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, this.outs, this.outs);
        }
        
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

// Create memory block
virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size = 128;
virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony = 16;

// Synchronously compile and instantiate the WASM modules
try {
    if (virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module == undefined) {
        virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64Mixer()));
        virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64CodevirtualAnalogWithEffectsForBrowser()));
        // Possibly compile effect
        if (typeof (getBase64Codeeffect) !== "undefined") {
            virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module = new WebAssembly.Module(virtualAnalogWithEffectsForBrowserPolyProcessor.atob(getBase64Codeeffect()));
        }
        registerProcessor('virtualAnalogWithEffectsForBrowserPoly', virtualAnalogWithEffectsForBrowserPolyProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust virtualAnalogWithEffectsForBrowserPoly cannot be loaded or compiled");
}


