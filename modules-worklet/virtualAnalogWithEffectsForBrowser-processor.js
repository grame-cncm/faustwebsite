
/*
Code generated with Faust version 2.11.10
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONvirtualAnalogWithEffectsForBrowser() {
	return "{\"name\":\"freeverb\",\"filename\":\"virtualAnalogWithEffectsForBrowser\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/vaeffects.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"49744\",\"inputs\":\"1\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Grame\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"designer\":\"Robert A. Moog\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"freeverb\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"freeverb\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Minimoog\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Controllers\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Master Volume\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"MasterVolume\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Master_Volume/MasterVolume\",\"index\":\"16\",\"meta\":[{\"midi\":\"ctrl 7\"},{\"style\":\"knob\"},{\"tooltip\":\"master volume, MIDI controlled\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator Tuning & Switching\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Tune\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Tune\",\"index\":\"64\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 47\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency-shift up or down for all oscillators in Octaves\"},{\"unit\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc. Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._Mod.\",\"index\":\"72\",\"meta\":[{\"0\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 22\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Osc. 3 Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._3_Ctl\",\"index\":\"120\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 9\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Glide and ModMix\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Glide\",\"index\":\"132\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 5\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Portamento (frequency-glide) in seconds per octave\"},{\"unit\":\"sec/octave\"}],\"init\":\"0.008\",\"min\":\"0.001\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Mod. Mix\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Mod._Mix\",\"index\":\"76\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 48\"},{\"style\":\"knob\"},{\"tooltip\":\"Modulation Mix: Osc3 (0) to Noise (1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]},{\"type\":\"vgroup\",\"label\":\"Oscillator Bank\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Oscillator 1\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Octave1\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 23\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/DeTuning1\",\"index\":\"68\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 24\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Waveform1\",\"index\":\"44\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 25\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Octave2\",\"index\":\"33120\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 28\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/DeTuning2\",\"index\":\"33124\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 29\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.41667\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Waveform2\",\"index\":\"33116\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 30\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 3\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Octave3\",\"index\":\"112\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 33\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/DeTuning3\",\"index\":\"116\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 34\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.3\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Waveform3\",\"index\":\"108\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 35\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Mixer\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Osc1\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc1 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/Osc1_Amp\",\"index\":\"36\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 26\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/On\",\"index\":\"40\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 12\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Ext In, KeyCtl\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Ext Input\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/Ext_Input\",\"index\":\"49604\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 27\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/On\",\"index\":\"49608\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 13\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Osc2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc2 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/Osc2_Amp\",\"index\":\"33108\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 31\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/On\",\"index\":\"33112\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 14\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Noise\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Noise Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/Noise_Amp\",\"index\":\"49588\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 32\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/On\",\"index\":\"49584\",\"meta\":[{\"0\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 15\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"White/Pink\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/White/Pink\",\"index\":\"80\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 16\"},{\"style\":\"knob\"},{\"tooltip\":\"Choose either White or Pink Noise\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Osc3\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc3 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/Osc3_Amp\",\"index\":\"49576\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 36\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/On\",\"index\":\"49580\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 17\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Modifiers\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Filter\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"freq, Q, ContourScale\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"two checkboxes\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Filter Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Filter_Mod.\",\"index\":\"49620\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 19\"},{\"style\":\"knob\"},{\"tooltip\":\"Filter Modulation => Route Modulation Mix output to VCF frequency\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Kbd Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Kbd_Ctl\",\"index\":\"49624\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 38\"},{\"style\":\"knob\"},{\"tooltip\":\"Keyboard tracking of VCF corner-frequency (0=none, 1=full)\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vslider\",\"label\":\"Corner Freq\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Freq\",\"index\":\"49628\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 74\"},{\"style\":\"knob\"},{\"tooltip\":\"Corner resonance frequency in Log2(Hertz)\"},{\"unit\":\"Log2(Hz)\"}],\"init\":\"10.6\",\"min\":\"5.32193\",\"max\":\"14.2877\",\"step\":\"1e-06\"},{\"type\":\"vslider\",\"label\":\"Corner Resonance\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Resonance\",\"index\":\"49612\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 37\"},{\"style\":\"knob\"},{\"tooltip\":\"Resonance Q at VCF corner frequency (0 to 1)\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Amount of Contour (octaves)\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Amount_of_Contour_(octaves)\",\"index\":\"49640\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 39\"},{\"style\":\"knob\"}],\"init\":\"1.2\",\"min\":\"0\",\"max\":\"4\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Filter Contour\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"AttFilt, DecFilt, Sustain Level for Filter Contour\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/AttackF\",\"index\":\"49668\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 40\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"1400\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DecayF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/DecayF\",\"index\":\"49652\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 41\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"SustainF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/SustainF\",\"index\":\"49672\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 42\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Loudness Contour\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/AttackA\",\"index\":\"49720\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 43\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"2\",\"min\":\"0\",\"max\":\"5000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"DecayA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/DecayA\",\"index\":\"49716\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 44\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0\",\"max\":\"10000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"SustainA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/SustainA\",\"index\":\"49724\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 45\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"Keyboard Group\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Wheels and Switches\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Wheels+\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Bend and Mod Wheels\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Decay\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Decay\",\"index\":\"49648\",\"meta\":[{\"midi\":\"ctrl 20\"},{\"style\":\"knob\"},{\"tooltip\":\"Envelope Release either Decay value or 0\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Glide\",\"index\":\"124\",\"meta\":[{\"midi\":\"ctrl 65\"},{\"style\":\"knob\"},{\"tooltip\":\"Glide from note to note\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/bend\",\"index\":\"140\",\"meta\":[{\"0\":\"\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"mod\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/mod\",\"index\":\"16648\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"},{\"tooltip\":\"PitchModulation amplitude in octaves\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Keys\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Gates\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gateHold\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gateHold\",\"index\":\"148\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"lock sustain pedal on (hold gate set at 1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gate\",\"index\":\"144\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"The gate signal is 1 during a  note and 0 otherwise. For MIDI, NoteOn occurs when the gate  transitions from 0 to 1, and NoteOff is an event corresponding  to the gate transition from 1 to 0. The name of this Faust  button must be 'gate'.\"}]},{\"type\":\"button\",\"label\":\"sustain\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/sustain\",\"index\":\"152\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 64\"},{\"tooltip\":\"extends the gate (keeps it set to 1)\"}]}]}]},{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/freq\",\"index\":\"136\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"0.1\",\"max\":\"20000\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Output\",\"meta\":[{\"8\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Volume Main Output\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gain\",\"address\":\"/freeverb/Effects/Output/Volume_Main_Output/gain\",\"index\":\"49592\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Amplitude\"}],\"init\":\"0.2\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}]}]}]}";
}
function getBase64CodevirtualAnalogWithEffectsForBrowser() { return "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Wjw/IABBBGoqAgCVOAIAIABBxAFqQwAAgD4gAEEEaioCAJQ4AgAgAEHIAWpDAACAPyAAQQRqKgIAlTgCACAAQeiBAWpDAAAAPyAAQQRqKgIAlDgCACAAQYSCAWpDAAAAPiAAQQRqKgIAlDgCACAAQdCDA2pD2w9JQCAAQQRqKgIAlTgCACAAQeyDA2pDuB7dQCAAQQRqKgIAlTgCACAAQYCEA2pDbxKDOiAAQQRqKgIAlDgCAAuQgICAAAAgACABEAwgABAOIAAQCwuahYCAAAAgAEEQakMzMzM/OAIAIABBJGpDAAAAPzgCACAAQShqQwAAgD84AgAgAEEsakMAAKBAOAIAIABBMGpDAACAPzgCACAAQcAAakMAAAAAOAIAIABBxABqQwAAAAA4AgAgAEHIAGpDAACAPzgCACAAQcwAakMAAAAAOAIAIABB0ABqQwAAgD84AgAgAEHsAGpDAAAAADgCACAAQfAAakMAAAAAOAIAIABB9ABqQ5qZmT44AgAgAEH4AGpDAAAAADgCACAAQfwAakMAAIA/OAIAIABBhAFqQ28SAzw4AgAgAEGIAWpDAABcQzgCACAAQYwBakMAAIA/OAIAIABBkAFqQwAAAAA4AgAgAEGUAWpDAAAAADgCACAAQZgBakMAAAAAOAIAIABBiIIBakMAAAAAOAIAIABB1IICakMAAAA/OAIAIABB2IICakMAAIA/OAIAIABB3IICakMAAKBAOAIAIABB4IICakMAAIA/OAIAIABB5IICakPFVdU+OAIAIABBqIMDakMAAAA/OAIAIABBrIMDakMAAAAAOAIAIABBsIMDakMAAAAAOAIAIABBtIMDakMAAAAAOAIAIABBuIMDakPNzEw+OAIAIABBxIMDakMAAAAAOAIAIABByIMDakMAAAAAOAIAIABBzIMDakMzMzM/OAIAIABB1IMDakMAAIA/OAIAIABB2IMDakMAAIA/OAIAIABB3IMDakOamSlBOAIAIABB6IMDakOamZk/OAIAIABB8IMDakMAAIA/OAIAIABB9IMDakMAACBBOAIAIABBhIQDakMAAK9EOAIAIABBiIQDakMAAKBCOAIAIABBtIQDakMAACBBOAIAIABBuIQDakMAAABAOAIAIABBvIQDakMAAKBCOAIAC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC5P+gIAAAQBBAAuMfnsibmFtZSI6ImZyZWV2ZXJiIiwiZmlsZW5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyIiwidmVyc2lvbiI6IjIuMTEuMTAiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3ZhZWZmZWN0cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiL0RvY3VtZW50cy9mYXVzdHdlYnNpdGUtZ2l0aHViL21vZHVsZXMtd29ya2xldCJdLCJzaXplIjoiNDk3NDQiLCJpbnB1dHMiOiIxIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJhdXRob3IiOiJHcmFtZSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IihjKSBHUkFNRSAyMDA2IGFuZCBNb0ZvcnRlIEluYy4gMjAxNyJ9LHsiZGVzaWduZXIiOiJSb2JlcnQgQS4gTW9vZyJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImludGVyZmFjZSI6IlNtYXJ0S2V5Ym9hcmR7ICAgICAnTnVtYmVyIG9mIEtleWJvYXJkcyc6JzInLCAgICAgJ0tleWJvYXJkIDAgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAxIC0gTnVtYmVyIG9mIEtleXMnOicxMycsICAgICAnS2V5Ym9hcmQgMCAtIExvd2VzdCBLZXknOic3MicsICAgICAnS2V5Ym9hcmQgMSAtIExvd2VzdCBLZXknOic2MCcgfSJ9LHsibGljZW5zZSI6IkJTRCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiZnJlZXZlcmIifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZyZWV2ZXJiLmh0bWwifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6ImZyZWV2ZXJiIiwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1pbmltb29nIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ29udHJvbGxlcnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiTWFzdGVyIFZvbHVtZSIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTWFzdGVyVm9sdW1lIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL01hc3Rlcl9Wb2x1bWUvTWFzdGVyVm9sdW1lIiwiaW5kZXgiOiIxNiIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDcifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Im1hc3RlciB2b2x1bWUsIE1JREkgY29udHJvbGxlZCJ9XSwiaW5pdCI6IjAuNyIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zY2lsbGF0b3IgVHVuaW5nICYgU3dpdGNoaW5nIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJUdW5lIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL09zY2lsbGF0b3JfVHVuaW5nXyZfU3dpdGNoaW5nL1R1bmUiLCJpbmRleCI6IjY0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDcifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkZyZXF1ZW5jeS1zaGlmdCB1cCBvciBkb3duIGZvciBhbGwgb3NjaWxsYXRvcnMgaW4gT2N0YXZlcyJ9LHsidW5pdCI6Ik9jdGF2ZXMifV0sImluaXQiOiIwIiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjLiBNb2QuIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL09zY2lsbGF0b3JfVHVuaW5nXyZfU3dpdGNoaW5nL1N3aXRjaGVzL09zYy5fTW9kLiIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIwIjoiIn0seyJjb2xvciI6InJlZCJ9LHsibWlkaSI6ImN0cmwgMjIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjLiAzIEN0bCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9Pc2NpbGxhdG9yX1R1bmluZ18mX1N3aXRjaGluZy9Td2l0Y2hlcy9Pc2MuXzNfQ3RsIiwiaW5kZXgiOiIxMjAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6InJlZCJ9LHsibWlkaSI6ImN0cmwgOSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJHbGlkZSBhbmQgTW9kTWl4IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJHbGlkZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9HbGlkZV9hbmRfTW9kTWl4L0dsaWRlIiwiaW5kZXgiOiIxMzIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA1In0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUG9ydGFtZW50byAoZnJlcXVlbmN5LWdsaWRlKSBpbiBzZWNvbmRzIHBlciBvY3RhdmUifSx7InVuaXQiOiJzZWMvb2N0YXZlIn1dLCJpbml0IjoiMC4wMDgiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJNb2QuIE1peCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9HbGlkZV9hbmRfTW9kTWl4L01vZC5fTWl4IiwiaW5kZXgiOiI3NiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDQ4In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJNb2R1bGF0aW9uIE1peDogT3NjMyAoMCkgdG8gTm9pc2UgKDEpIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciBCYW5rIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zY2lsbGF0b3IgMSIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT2N0YXZlMSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8xL09jdGF2ZTEiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMjMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVUdW5pbmcxIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzEvRGVUdW5pbmcxIiwiaW5kZXgiOiI2OCIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDI0In0seyJzdHlsZSI6Imtub2IifSx7InVuaXRzIjoiT2N0YXZlcyJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXZlZm9ybTEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMS9XYXZlZm9ybTEiLCJpbmRleCI6IjQ0IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMjUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zY2lsbGF0b3IgMiIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT2N0YXZlMiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8yL09jdGF2ZTIiLCJpbmRleCI6IjMzMTIwIiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMjgifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVUdW5pbmcyIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzIvRGVUdW5pbmcyIiwiaW5kZXgiOiIzMzEyNCIsIm1ldGEiOlt7IjIiOiIifSx7Im1pZGkiOiJjdHJsIDI5In0seyJzdHlsZSI6Imtub2IifSx7InVuaXRzIjoiT2N0YXZlcyJ9XSwiaW5pdCI6IjAuNDE2NjciLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXZlZm9ybTIiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMi9XYXZlZm9ybTIiLCJpbmRleCI6IjMzMTE2IiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMzAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjUiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zY2lsbGF0b3IgMyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT2N0YXZlMyIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8zL09jdGF2ZTMiLCJpbmRleCI6IjExMiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDMzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlVHVuaW5nMyIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8zL0RlVHVuaW5nMyIsImluZGV4IjoiMTE2IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMzQifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdHMiOiJPY3RhdmVzIn1dLCJpbml0IjoiMC4zIiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZWZvcm0zIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzMvV2F2ZWZvcm0zIiwiaW5kZXgiOiIxMDgiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCAzNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNaXhlciIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2MxIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MxIEFtcCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MxL09zYzFfQW1wIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDI2In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzEvT24iLCJpbmRleCI6IjQwIiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRXh0IEluLCBLZXlDdGwiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkV4dCBJbnB1dCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9FeHRfSW4sX0tleUN0bC9FeHRfSW5wdXQiLCJpbmRleCI6IjQ5NjA0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMjcifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL0V4dF9JbixfS2V5Q3RsL09uIiwiaW5kZXgiOiI0OTYwOCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zYzIiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYzIgQW1wIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzIvT3NjMl9BbXAiLCJpbmRleCI6IjMzMTA4IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMzEifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMi9PbiIsImluZGV4IjoiMzMxMTIiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJOb2lzZSIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTm9pc2UgQW1wIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL05vaXNlL05vaXNlX0FtcCIsImluZGV4IjoiNDk1ODgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAzMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Ob2lzZS8weDAwL09uIiwiaW5kZXgiOiI0OTU4NCIsIm1ldGEiOlt7IjAiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2hpdGUvUGluayIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Ob2lzZS8weDAwL1doaXRlL1BpbmsiLCJpbmRleCI6IjgwIiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxNiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ2hvb3NlIGVpdGhlciBXaGl0ZSBvciBQaW5rIE5vaXNlIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2MzIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MzIEFtcCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MzL09zYzNfQW1wIiwiaW5kZXgiOiI0OTU3NiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDM2In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzMvT24iLCJpbmRleCI6IjQ5NTgwIiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxNyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNb2RpZmllcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmlsdGVyIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoiZnJlcSwgUSwgQ29udG91clNjYWxlIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJ0d28gY2hlY2tib3hlcyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJGaWx0ZXIgTW9kLiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvMHgwMC9GaWx0ZXJfTW9kLiIsImluZGV4IjoiNDk2MjAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6InJlZCJ9LHsibWlkaSI6ImN0cmwgMTkifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkZpbHRlciBNb2R1bGF0aW9uID0+IFJvdXRlIE1vZHVsYXRpb24gTWl4IG91dHB1dCB0byBWQ0YgZnJlcXVlbmN5In1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJLYmQgQ3RsIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC8weDAwL0tiZF9DdGwiLCJpbmRleCI6IjQ5NjI0IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMzgifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IktleWJvYXJkIHRyYWNraW5nIG9mIFZDRiBjb3JuZXItZnJlcXVlbmN5ICgwPW5vbmUsIDE9ZnVsbCkifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkNvcm5lciBGcmVxIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC9Db3JuZXJfRnJlcSIsImluZGV4IjoiNDk2MjgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA3NCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ29ybmVyIHJlc29uYW5jZSBmcmVxdWVuY3kgaW4gTG9nMihIZXJ0eikifSx7InVuaXQiOiJMb2cyKEh6KSJ9XSwiaW5pdCI6IjEwLjYiLCJtaW4iOiI1LjMyMTkzIiwibWF4IjoiMTQuMjg3NyIsInN0ZXAiOiIxZS0wNiJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkNvcm5lciBSZXNvbmFuY2UiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwL0Nvcm5lcl9SZXNvbmFuY2UiLCJpbmRleCI6IjQ5NjEyIiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMzcifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlJlc29uYW5jZSBRIGF0IFZDRiBjb3JuZXIgZnJlcXVlbmN5ICgwIHRvIDEpIn1dLCJpbml0IjoiMC43IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkFtb3VudCBvZiBDb250b3VyIChvY3RhdmVzKSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvQW1vdW50X29mX0NvbnRvdXJfKG9jdGF2ZXMpIiwiaW5kZXgiOiI0OTY0MCIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDM5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxLjIiLCJtaW4iOiIwIiwibWF4IjoiNCIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJGaWx0ZXIgQ29udG91ciIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJBdHRGaWx0LCBEZWNGaWx0LCBTdXN0YWluIExldmVsIGZvciBGaWx0ZXIgQ29udG91ciJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJBdHRhY2tGIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvRmlsdGVyX0NvbnRvdXIvQXR0YWNrRiIsImluZGV4IjoiNDk2NjgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0MCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQXR0YWNrIFRpbWUifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjE0MDAiLCJtaW4iOiIxMCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWNheUYiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci9GaWx0ZXJfQ29udG91ci9EZWNheUYiLCJpbmRleCI6IjQ5NjUyIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDEifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkRlY2F5LXRvLVN1c3RhaW4gVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTAiLCJtaW4iOiIxMCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJTdXN0YWluRiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyL0ZpbHRlcl9Db250b3VyL1N1c3RhaW5GIiwiaW5kZXgiOiI0OTY3MiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQyIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJTdXN0YWluIGxldmVsIGFzIHBlcmNlbnQgb2YgbWF4In1dLCJpbml0IjoiODAiLCJtaW4iOiIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkxvdWRuZXNzIENvbnRvdXIiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkF0dGFja0EiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0xvdWRuZXNzX0NvbnRvdXIvQXR0YWNrQSIsImluZGV4IjoiNDk3MjAiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0MyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQXR0YWNrIFRpbWUifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjIiLCJtaW4iOiIwIiwibWF4IjoiNTAwMCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWNheUEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0xvdWRuZXNzX0NvbnRvdXIvRGVjYXlBIiwiaW5kZXgiOiI0OTcxNiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQ0In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJEZWNheS10by1TdXN0YWluIFRpbWUifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjEwIiwibWluIjoiMCIsIm1heCI6IjEwMDAwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlN1c3RhaW5BIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9Mb3VkbmVzc19Db250b3VyL1N1c3RhaW5BIiwiaW5kZXgiOiI0OTcyNCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQ1In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJTdXN0YWluIGxldmVsIGFzIHBlcmNlbnQgb2YgbWF4In1dLCJpbml0IjoiODAiLCJtaW4iOiIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjAuMSJ9XX1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiS2V5Ym9hcmQgR3JvdXAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiV2hlZWxzIGFuZCBTd2l0Y2hlcyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IldoZWVscysifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IkJlbmQgYW5kIE1vZCBXaGVlbHMifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVjYXkiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL0RlY2F5IiwiaW5kZXgiOiI0OTY0OCIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDIwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJFbnZlbG9wZSBSZWxlYXNlIGVpdGhlciBEZWNheSB2YWx1ZSBvciAwIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJHbGlkZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvV2hlZWxzX2FuZF9Td2l0Y2hlcy8weDAwLzB4MDAvR2xpZGUiLCJpbmRleCI6IjEyNCIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDY1In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJHbGlkZSBmcm9tIG5vdGUgdG8gbm90ZSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiYmVuZCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvV2hlZWxzX2FuZF9Td2l0Y2hlcy8weDAwLzB4MDAvYmVuZCIsImluZGV4IjoiMTQwIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6InBpdGNod2hlZWwifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJtb2QiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL21vZCIsImluZGV4IjoiMTY2NDgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAxIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQaXRjaE1vZHVsYXRpb24gYW1wbGl0dWRlIGluIG9jdGF2ZXMifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJLZXlzIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJHYXRlcyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJnYXRlSG9sZCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvMHgwMC8weDAwL2dhdGVIb2xkIiwiaW5kZXgiOiIxNDgiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJsb2NrIHN1c3RhaW4gcGVkYWwgb24gKGhvbGQgZ2F0ZSBzZXQgYXQgMSkifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvMHgwMC8weDAwL2dhdGUiLCJpbmRleCI6IjE0NCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJUaGUgZ2F0ZSBzaWduYWwgaXMgMSBkdXJpbmcgYSAgbm90ZSBhbmQgMCBvdGhlcndpc2UuIEZvciBNSURJLCBOb3RlT24gb2NjdXJzIHdoZW4gdGhlIGdhdGUgIHRyYW5zaXRpb25zIGZyb20gMCB0byAxLCBhbmQgTm90ZU9mZiBpcyBhbiBldmVudCBjb3JyZXNwb25kaW5nICB0byB0aGUgZ2F0ZSB0cmFuc2l0aW9uIGZyb20gMSB0byAwLiBUaGUgbmFtZSBvZiB0aGlzIEZhdXN0ICBidXR0b24gbXVzdCBiZSAnZ2F0ZScuIn1dfSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6InN1c3RhaW4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwLzB4MDAvMHgwMC9zdXN0YWluIiwiaW5kZXgiOiIxNTIiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA2NCJ9LHsidG9vbHRpcCI6ImV4dGVuZHMgdGhlIGdhdGUgKGtlZXBzIGl0IHNldCB0byAxKSJ9XX1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImZyZXEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL2ZyZXEiLCJpbmRleCI6IjEzNiIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMjIwIiwibWluIjoiMC4xIiwibWF4IjoiMjAwMDAiLCJzdGVwIjoiMC4xIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRWZmZWN0cyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJPdXRwdXQiLCJtZXRhIjpbeyI4IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiVm9sdW1lIE1haW4gT3V0cHV0IiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJnYWluIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9FZmZlY3RzL091dHB1dC9Wb2x1bWVfTWFpbl9PdXRwdXQvZ2FpbiIsImluZGV4IjoiNDk1OTIiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJBbXBsaXR1ZGUifV0sImluaXQiOiIwLjIiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX1dfV19XX1dfQ=="; }


/*
Code generated with Faust version 2.11.10
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONeffect() {
	return "{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\",\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\",\"version\":\"2.11.10\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/Documents/faustwebsite-github/modules-worklet/virtualAnalogWithEffectsForBrowser.dsp\",\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/routes.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/vaeffects.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\",\"/Documents/faustwebsite-github/modules-worklet\",\"/Documents/faustwebsite-github/modules-worklet\"],\"size\":\"943628\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"vaeffects.lib/name\":\"Faust Virtual Analog Filter Effect Library\"},{\"vaeffects.lib/version\":\"0.0\"},{\"virtualAnalogWithEffectsForBrowser.dsp/author\":\"Grame\"},{\"virtualAnalogWithEffectsForBrowser.dsp/copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"virtualAnalogWithEffectsForBrowser.dsp/designer\":\"Robert A. Moog\"},{\"virtualAnalogWithEffectsForBrowser.dsp/interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"virtualAnalogWithEffectsForBrowser.dsp/license\":\"BSD\"},{\"virtualAnalogWithEffectsForBrowser.dsp/name\":\"freeverb\"},{\"virtualAnalogWithEffectsForBrowser.dsp/reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"virtualAnalogWithEffectsForBrowser.dsp/version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"virtualAnalogWithEffectsForBrowser_effect\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Echo\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Delay\",\"index\":\"786568\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 61\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0.001\",\"max\":\"0.742039\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Warp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Warp\",\"index\":\"786596\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 62\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"DelayT60\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/DelayT60\",\"index\":\"786560\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 60\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Feedback\",\"index\":\"524408\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"}],\"init\":\"0.3\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Amp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Amp\",\"index\":\"524388\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 75\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"FeedbackSm\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/FeedbackSm\",\"index\":\"524400\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 76\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1e-05\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"EnableEcho\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Switches/EnableEcho\",\"index\":\"524404\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 105\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Flanger\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Delay\",\"index\":\"803028\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 50\"},{\"style\":\"knob\"}],\"init\":\"0.22\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Rate\",\"index\":\"524348\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 51\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Depth\",\"index\":\"786620\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 52\"},{\"style\":\"knob\"}],\"init\":\"0.75\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Feedback\",\"index\":\"786632\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 53\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-0.995\",\"max\":\"0.99\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveshape\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Waveshape\",\"index\":\"524340\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 54\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Enable\",\"index\":\"524336\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Invert\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Invert\",\"index\":\"786616\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 49\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Chorus\",\"meta\":[{\"6\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Delay\",\"index\":\"868604\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Rate\",\"index\":\"868580\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0.01\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Depth\",\"index\":\"524324\",\"meta\":[{\"4\":\"\"},{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Deviation\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Deviation\",\"index\":\"868600\",\"meta\":[{\"6\":\"\"},{\"midi\":\"ctrl 58\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Switches/Enable\",\"index\":\"524304\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"7\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Damp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Damp\",\"index\":\"868696\",\"meta\":[{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"RoomSize\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/RoomSize\",\"index\":\"868692\",\"meta\":[{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"Wet\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Wet\",\"index\":\"524300\",\"meta\":[{\"midi\":\"ctrl 79\"},{\"style\":\"knob\"}],\"init\":\"0.3333\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Switches/Enable\",\"index\":\"524296\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 104\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}]}]}]}";
}
function getBase64Codeeffect() { return "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c3IvbG9jYWwvc2hhcmUvZmF1c3Qvb3NjaWxsYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvbm9pc2VzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvdmFlZmZlY3RzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6WyIuIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIvRG9jdW1lbnRzL2ZhdXN0d2Vic2l0ZS1naXRodWIvbW9kdWxlcy13b3JrbGV0IiwiL0RvY3VtZW50cy9mYXVzdHdlYnNpdGUtZ2l0aHViL21vZHVsZXMtd29ya2xldCJdLCJzaXplIjoiOTQzNjI4IiwiaW5wdXRzIjoiMiIsIm91dHB1dHMiOiIyIiwibWV0YSI6W3siYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0In0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2YWVmZmVjdHMubGliL25hbWUiOiJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkifSx7InZhZWZmZWN0cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvYXV0aG9yIjoiR3JhbWUifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2NvcHlyaWdodCI6IihjKSBHUkFNRSAyMDA2IGFuZCBNb0ZvcnRlIEluYy4gMjAxNyJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvZGVzaWduZXIiOiJSb2JlcnQgQS4gTW9vZyJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvaW50ZXJmYWNlIjoiU21hcnRLZXlib2FyZHsgICAgICdOdW1iZXIgb2YgS2V5Ym9hcmRzJzonMicsICAgICAnS2V5Ym9hcmQgMCAtIE51bWJlciBvZiBLZXlzJzonMTMnLCAgICAgJ0tleWJvYXJkIDEgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAwIC0gTG93ZXN0IEtleSc6JzcyJywgICAgICdLZXlib2FyZCAxIC0gTG93ZXN0IEtleSc6JzYwJyB9In0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9saWNlbnNlIjoiQlNEIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9uYW1lIjoiZnJlZXZlcmIifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL3JlZmVyZW5jZSI6Imh0dHBzOi8vY2NybWEuc3RhbmZvcmQuZWR1L35qb3MvcGFzcC9GcmVldmVyYi5odG1sIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC92ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QiLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiRWZmZWN0cyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFY2hvIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI3ODY1NjgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA2MSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMC4wMDEiLCJtYXgiOiIwLjc0MjAzOSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhcnAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9XYXJwIiwiaW5kZXgiOiI3ODY1OTYiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA2MiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlbGF5VDYwIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRGVsYXlUNjAiLCJpbmRleCI6Ijc4NjU2MCIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDYwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMTAwIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmVlZGJhY2siLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9GZWVkYmFjayIsImluZGV4IjoiNTI0NDA4IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4zIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQW1wIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvQW1wIiwiaW5kZXgiOiI1MjQzODgiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCA3NSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJGZWVkYmFja1NtIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRmVlZGJhY2tTbSIsImluZGV4IjoiNTI0NDAwIiwibWV0YSI6W3siNSI6IiJ9LHsibWlkaSI6ImN0cmwgNzYifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxZS0wNSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlRWNobyIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL1N3aXRjaGVzL0VuYWJsZUVjaG8iLCJpbmRleCI6IjUyNDQwNCIsIm1ldGEiOlt7IjciOiIifSx7Im1pZGkiOiJjdHJsIDEwNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJGbGFuZ2VyIiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI4MDMwMjgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA1MCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4yMiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJSYXRlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvUmF0ZSIsImluZGV4IjoiNTI0MzQ4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNTEifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL0RlcHRoIiwiaW5kZXgiOiI3ODY2MjAiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCA1MiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC43NSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRmVlZGJhY2siLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9GZWVkYmFjayIsImluZGV4IjoiNzg2NjMyIiwibWV0YSI6W3siNSI6IiJ9LHsibWlkaSI6ImN0cmwgNTMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMC45OTUiLCJtYXgiOiIwLjk5Iiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2F2ZXNoYXBlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvV2F2ZXNoYXBlIiwiaW5kZXgiOiI1MjQzNDAiLCJtZXRhIjpbeyI3IjoiIn0seyJtaWRpIjoiY3RybCA1NCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFbmFibGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Td2l0Y2hlcy9FbmFibGUiLCJpbmRleCI6IjUyNDMzNiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEwMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJJbnZlcnQiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Td2l0Y2hlcy9JbnZlcnQiLCJpbmRleCI6Ijc4NjYxNiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDQ5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkNob3J1cyIsIm1ldGEiOlt7IjYiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJLbm9icyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVsYXkiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RlbGF5IiwiaW5kZXgiOiI4Njg2MDQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvUmF0ZSIsImluZGV4IjoiODY4NTgwIiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjAxIiwibWF4IjoiNyIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXB0aCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGVwdGgiLCJpbmRleCI6IjUyNDMyNCIsIm1ldGEiOlt7IjQiOiIifSx7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGV2aWF0aW9uIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Lbm9icy9EZXZpYXRpb24iLCJpbmRleCI6Ijg2ODYwMCIsIm1ldGEiOlt7IjYiOiIifSx7Im1pZGkiOiJjdHJsIDU4In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0Nob3J1cy9Td2l0Y2hlcy9FbmFibGUiLCJpbmRleCI6IjUyNDMwNCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEwMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI3IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiS25vYnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRhbXAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL0tub2JzL0RhbXAiLCJpbmRleCI6Ijg2ODY5NiIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDI1In0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUm9vbVNpemUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvUmV2ZXJiL0tub2JzL1Jvb21TaXplIiwiaW5kZXgiOiI4Njg2OTIiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAyNSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldldCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvS25vYnMvV2V0IiwiaW5kZXgiOiI1MjQzMDAiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA3OSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4zMzMzIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMjUifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVuYWJsZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvU3dpdGNoZXMvRW5hYmxlIiwiaW5kZXgiOiI1MjQyOTYiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxMDQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19XX1dfV19"; }

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
        
        var wasm_memory = virtualAnalogWithEffectsForBrowserPolyProcessor.createMemory(virtualAnalogWithEffectsForBrowserPolyProcessor.buffer_size, virtualAnalogWithEffectsForBrowserPolyProcessor.polyphony);

        // Create Mixer
        this.mixerObject = { imports: { print: arg => console.log(arg) } }
        this.mixerObject["memory"] = { "memory": wasm_memory };

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
                
                memory: wasm_memory,
                
                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        }

        // wasm mixer
        this.mixer = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_mixer_module, this.mixerObject).exports;

        // wasm instance
        this.factory = new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_module, this.importObject).exports;
        
        // wasm effect
        this.effect = (virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module) ? new WebAssembly.Instance(virtualAnalogWithEffectsForBrowserPolyProcessor.wasm_effect_module, this.importObject).exports : null;
        
        this.HEAP = wasm_memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);
        
        /*
        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);
        */
        
        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];
        
        // input items
        this.inputs_items = [];
        
        // Start of HEAP index
        this.audio_heap_ptr = 0; // Fails when 0...
        
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
        
        this.printMemory = function ()
        {
            console.log("============== Memory layout ==============");
            console.log("json_object.size: " + this.json_object.size);
            
            console.log("audio_heap_ptr: " + this.audio_heap_ptr);
            
            console.log("audio_heap_ptr_inputs: " + this.audio_heap_ptr_inputs);
            console.log("audio_heap_ptr_outputs: " + this.audio_heap_ptr_outputs);
            console.log("audio_heap_ptr_mixing: " + this.audio_heap_ptr_mixing);
            
            console.log("audio_heap_inputs: " + this.audio_heap_inputs);
            console.log("audio_heap_outputs: " + this.audio_heap_outputs);
            console.log("audio_heap_mixing: " + this.audio_heap_mixing);
            
            console.log("dsp_start: " + this.dsp_start);
            for (var i = 0; i <  this.polyphony; i++) {
                console.log("dsp_voices[i]: " + i + " " + this.dsp_voices[i]);
            }
            console.log("effect_start: " + this.effect_start);
        }
    
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
            
            // Print memory layout
            this.printMemory();
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


