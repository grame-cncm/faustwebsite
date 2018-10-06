
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONvirtualAnalogWithEffectsForBrowser() {
	return "{\"name\":\"freeverb\",\"filename\":\"virtualAnalogWithEffectsForBrowser\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"49744\",\"inputs\":\"1\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Grame\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"designer\":\"Robert A. Moog\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"license\":\"BSD\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"freeverb\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"freeverb\",\"items\":[{\"type\":\"vgroup\",\"label\":\"Minimoog\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Controllers\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Master Volume\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"MasterVolume\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Master_Volume/MasterVolume\",\"index\":\"16\",\"meta\":[{\"midi\":\"ctrl 7\"},{\"style\":\"knob\"},{\"tooltip\":\"master volume, MIDI controlled\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator Tuning & Switching\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Tune\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Tune\",\"index\":\"72\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 47\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency-shift up or down for all oscillators in Octaves\"},{\"unit\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc. Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._Mod.\",\"index\":\"136\",\"meta\":[{\"0\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 22\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Osc. 3 Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Oscillator_Tuning_&_Switching/Switches/Osc._3_Ctl\",\"index\":\"152\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 9\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Glide and ModMix\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Glide\",\"index\":\"88\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 5\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Portamento (frequency-glide) in seconds per octave\"},{\"unit\":\"sec/octave\"}],\"init\":\"0.008\",\"min\":\"0.001\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Mod. Mix\",\"address\":\"/freeverb/Minimoog/0x00/Controllers/Glide_and_ModMix/Mod._Mix\",\"index\":\"140\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 48\"},{\"style\":\"knob\"},{\"tooltip\":\"Modulation Mix: Osc3 (0) to Noise (1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]},{\"type\":\"vgroup\",\"label\":\"Oscillator Bank\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Oscillator 1\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Octave1\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 23\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/DeTuning1\",\"index\":\"76\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 24\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform1\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_1/Waveform1\",\"index\":\"44\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 25\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Octave2\",\"index\":\"33120\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 28\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/DeTuning2\",\"index\":\"33124\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 29\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.41667\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform2\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_2/Waveform2\",\"index\":\"33116\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 30\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Oscillator 3\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Octave3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Octave3\",\"index\":\"148\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 33\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DeTuning3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/DeTuning3\",\"index\":\"156\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 34\"},{\"style\":\"knob\"},{\"units\":\"Octaves\"}],\"init\":\"0.3\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveform3\",\"address\":\"/freeverb/Minimoog/0x00/Oscillator_Bank/Oscillator_3/Waveform3\",\"index\":\"144\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 35\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"5\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Mixer\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Osc1\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc1 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/Osc1_Amp\",\"index\":\"36\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 26\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc1/On\",\"index\":\"40\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 12\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Ext In, KeyCtl\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Ext Input\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/Ext_Input\",\"index\":\"49604\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 27\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Ext_In,_KeyCtl/On\",\"index\":\"49608\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 13\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Osc2\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc2 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/Osc2_Amp\",\"index\":\"33108\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 31\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc2/On\",\"index\":\"33112\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 14\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Noise\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Noise Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/Noise_Amp\",\"index\":\"49588\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 32\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/On\",\"index\":\"49584\",\"meta\":[{\"0\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 15\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"White/Pink\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Noise/0x00/White/Pink\",\"index\":\"16620\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 16\"},{\"style\":\"knob\"},{\"tooltip\":\"Choose either White or Pink Noise\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Osc3\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Osc3 Amp\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/Osc3_Amp\",\"index\":\"49576\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 36\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"On\",\"address\":\"/freeverb/Minimoog/0x00/Mixer/Osc3/On\",\"index\":\"49580\",\"meta\":[{\"1\":\"\"},{\"color\":\"blue\"},{\"midi\":\"ctrl 17\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"vgroup\",\"label\":\"Modifiers\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Filter\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"freq, Q, ContourScale\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"two checkboxes\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Filter Mod.\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Filter_Mod.\",\"index\":\"49664\",\"meta\":[{\"1\":\"\"},{\"color\":\"red\"},{\"midi\":\"ctrl 19\"},{\"style\":\"knob\"},{\"tooltip\":\"Filter Modulation => Route Modulation Mix output to VCF frequency\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Kbd Ctl\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/0x00/Kbd_Ctl\",\"index\":\"49668\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 38\"},{\"style\":\"knob\"},{\"tooltip\":\"Keyboard tracking of VCF corner-frequency (0=none, 1=full)\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vslider\",\"label\":\"Corner Freq\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Freq\",\"index\":\"49672\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 74\"},{\"style\":\"knob\"},{\"tooltip\":\"Corner resonance frequency in Log2(Hertz)\"},{\"unit\":\"Log2(Hz)\"}],\"init\":\"10.6\",\"min\":\"5.32193\",\"max\":\"14.2877\",\"step\":\"1e-06\"},{\"type\":\"vslider\",\"label\":\"Corner Resonance\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Corner_Resonance\",\"index\":\"49612\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 37\"},{\"style\":\"knob\"},{\"tooltip\":\"Resonance Q at VCF corner frequency (0 to 1)\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Amount of Contour (octaves)\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/0x00/Amount_of_Contour_(octaves)\",\"index\":\"49620\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 39\"},{\"style\":\"knob\"}],\"init\":\"1.2\",\"min\":\"0\",\"max\":\"4\",\"step\":\"0.001\"}]},{\"type\":\"hgroup\",\"label\":\"Filter Contour\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"AttFilt, DecFilt, Sustain Level for Filter Contour\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/AttackF\",\"index\":\"49648\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 40\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"1400\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"DecayF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/DecayF\",\"index\":\"49632\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 41\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"10\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"SustainF\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Filter/Filter_Contour/SustainF\",\"index\":\"49652\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 42\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Loudness Contour\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"AttackA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/AttackA\",\"index\":\"49720\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 43\"},{\"style\":\"knob\"},{\"tooltip\":\"Attack Time\"},{\"unit\":\"ms\"}],\"init\":\"2\",\"min\":\"0\",\"max\":\"5000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"DecayA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/DecayA\",\"index\":\"49716\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 44\"},{\"style\":\"knob\"},{\"tooltip\":\"Decay-to-Sustain Time\"},{\"unit\":\"ms\"}],\"init\":\"10\",\"min\":\"0\",\"max\":\"10000\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"SustainA\",\"address\":\"/freeverb/Minimoog/0x00/Modifiers/Loudness_Contour/SustainA\",\"index\":\"49724\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 45\"},{\"style\":\"knob\"},{\"tooltip\":\"Sustain level as percent of max\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.1\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"Keyboard Group\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Wheels and Switches\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Wheels+\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Bend and Mod Wheels\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Decay\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Decay\",\"index\":\"49628\",\"meta\":[{\"midi\":\"ctrl 20\"},{\"style\":\"knob\"},{\"tooltip\":\"Envelope Release either Decay value or 0\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Glide\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/Glide\",\"index\":\"80\",\"meta\":[{\"midi\":\"ctrl 65\"},{\"style\":\"knob\"},{\"tooltip\":\"Glide from note to note\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/bend\",\"index\":\"96\",\"meta\":[{\"0\":\"\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"mod\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/Wheels_and_Switches/0x00/0x00/mod\",\"index\":\"16648\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"},{\"tooltip\":\"PitchModulation amplitude in octaves\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}]},{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Keys\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"0x00\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Gates\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gateHold\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gateHold\",\"index\":\"104\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"lock sustain pedal on (hold gate set at 1)\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/gate\",\"index\":\"100\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"The gate signal is 1 during a  note and 0 otherwise. For MIDI, NoteOn occurs when the gate  transitions from 0 to 1, and NoteOff is an event corresponding  to the gate transition from 1 to 0. The name of this Faust  button must be 'gate'.\"}]},{\"type\":\"button\",\"label\":\"sustain\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/0x00/0x00/sustain\",\"index\":\"108\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 64\"},{\"tooltip\":\"extends the gate (keeps it set to 1)\"}]}]}]},{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/freeverb/Minimoog/Keyboard_Group/freq\",\"index\":\"92\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"0.1\",\"max\":\"20000\",\"step\":\"0.1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Output\",\"meta\":[{\"8\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Volume Main Output\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"gain\",\"address\":\"/freeverb/Effects/Output/Volume_Main_Output/gain\",\"index\":\"49592\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Amplitude\"}],\"init\":\"0.2\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]}]}]}]}]}";
}
function getBase64CodevirtualAnalogWithEffectsForBrowser() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGABfQF9YAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0Cv4CAgAAFA2VudgZtZW1vcnkCAAEDZW52BV9leHBmAAIDZW52BV9sb2dmAAwDZW52BV9wb3dmAA8DZW52BV90YW5mABEDj4CAgAAOAAEDBAUGBwgJCgsNDhAHsYGAgAALB2NvbXB1dGUABQxnZXROdW1JbnB1dHMABg1nZXROdW1PdXRwdXRzAAcNZ2V0UGFyYW1WYWx1ZQAIDWdldFNhbXBsZVJhdGUACQRpbml0AAoNaW5zdGFuY2VDbGVhcgALEWluc3RhbmNlQ29uc3RhbnRzAAwMaW5zdGFuY2VJbml0AA0aaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADg1zZXRQYXJhbVZhbHVlABEK4uaAgAAOgoCAgAAAC7vKgIAAAjV/uAF9QQAhBEEAIQVBACEGQwAAAAAhOUMAAAAAITpBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkEAIQ1BACEOQwAAAAAhQ0MAAAAAIURBACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQwAAAAAhRUMAAAAAIUZDAAAAACFHQQAhFkEAIRdBACEYQwAAAAAhSEMAAAAAIUlBACEZQQAhGkMAAAAAIUpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBDAAAAACFLQwAAAAAhTEMAAAAAIU1BACEhQQAhIkMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFBACEjQwAAAAAhUkMAAAAAIVNDAAAAACFUQwAAAAAhVUMAAAAAIVZDAAAAACFXQQAhJEEAISVDAAAAACFYQwAAAAAhWUMAAAAAIVpBACEmQwAAAAAhW0MAAAAAIVxDAAAAACFdQQAhJ0MAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0EAIShDAAAAACFkQwAAAAAhZUEAISlDAAAAACFmQwAAAAAhZ0MAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5DAAAAACFvQwAAAAAhcEMAAAAAIXFDAAAAACFyQwAAAAAhc0MAAAAAIXRBACEqQwAAAAAhdUMAAAAAIXZDAAAAACF3QwAAAAAheEMAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXxDAAAAACF9QwAAAAAhfkEAIStDAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFBACEsQwAAAAAhhAFDAAAAACGFAUEAIS1DAAAAACGGAUMAAAAAIYcBQwAAAAAhiAFDAAAAACGJAUMAAAAAIYoBQwAAAAAhiwFDAAAAACGMAUMAAAAAIY0BQwAAAAAhjgFDAAAAACGPAUMAAAAAIZABQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBQwAAAAAhlwFBACEuQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFBACEvQwAAAAAhogFDAAAAACGjAUMAAAAAIaQBQwAAAAAhpQFDAAAAACGmAUEAITBDAAAAACGnAUMAAAAAIagBQQAhMUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBQQAhMkMAAAAAIbMBQwAAAAAhtAFDAAAAACG1AUMAAAAAIbYBQwAAAAAhtwFDAAAAACG4AUMAAAAAIbkBQwAAAAAhugFDAAAAACG7AUMAAAAAIbwBQQAhM0MAAAAAIb0BQwAAAAAhvgFDAAAAACG/AUMAAAAAIcABQwAAAAAhwQFBACE0QwAAAAAhwgFDAAAAACHDAUEAITVDAAAAACHEAUMAAAAAIcUBQwAAAAAhxgFBACE2QwAAAAAhxwFDAAAAACHIAUMAAAAAIckBQwAAAAAhygFDAAAAACHLAUMAAAAAIcwBQwAAAAAhzQFDAAAAACHOAUMAAAAAIc8BQwAAAAAh0AFDAAAAACHRAUMAAAAAIdIBQwAAAAAh0wFDAAAAACHUAUMAAAAAIdUBQwAAAAAh1gFDAAAAACHXAUMAAAAAIdgBQwAAAAAh2QFDAAAAACHaAUMAAAAAIdsBQwAAAAAh3AFDAAAAACHdAUMAAAAAId4BQwAAAAAh3wFDAAAAACHgAUMAAAAAIeEBQwAAAAAh4gFDAAAAACHjAUMAAAAAIeQBQwAAAAAh5QFDAAAAACHmAUMAAAAAIecBQwAAAAAh6AFDAAAAACHpAUMAAAAAIeoBQwAAAAAh6wFDAAAAACHsAUMAAAAAIe0BQQAhN0MAAAAAIe4BQwAAAAAh7wFDAAAAACHwAUEDITggAkEAaigCACEEIANBAGooAgAhBSADQQRqKAIAIQYgAEEMaioCACAAQRBqKgIAlCE5IABBJGoqAgAgAEEoaioCAJQhOiAAQSxqKgIAqCEHIAdBA04hCCAHQQJOIQkgB0EBTiEKIABBMGoqAgCoIQsgC0EARiEMIABByABqKgIAITsgAEHMAGoqAgAhPCAAQcQAaioCAEMAAABAIAtBfmqyIDsgPJKSEAKUIT1DAAAAACAAQdQAaioCACAAQdgAaioCAJWTEABDAAAAPyAAQdAAaioCAKgbIT4gAEHcAGoqAgAhP0MAAIA/ID6TIUAgAEHgAGoqAgAhQUMAAIA/IABB5ABqKgIAIABB6ABqKgIAkiAAQewAaioCAJKWIUIgQkMAAAAAWyENIABBiAFqKgIAqCEOIABBjAFqKgIAIUNDAACAPyBDkyFEIABBkAFqKgIAqCEPIA9BA04hECAPQQJOIREgD0EBTiESIABBlAFqKgIAqCETIBNBAEYhFCAAQZgBaioCAKghFSAAQZwBaioCAEMAAIA/QwAAQEAgFRuUIUVDAAAAQCA7IBNBfmqykiBFkhACIUZDAABAQEMAAABAIEUQApQhRyAPQQVOIRYgD0EETiEXIABB7IEBaioCAKghGCAAQYiCAWoqAgAhSEMAAEBAQwAAAEAgPBAClCFJIAdBBU4hGSAHQQROIRogAEHUggJqKgIAIABB2IICaioCAJQhSiAAQdyCAmoqAgCoIRsgG0EDTiEcIBtBAk4hHSAbQQFOIR4gAEHgggJqKgIAqCEfIB9BAEYhICAAQeSCAmoqAgAhSyAAQcQAaioCAEMAAABAIB9BfmqyIDsgS5KSEAKUIUxDAABAQEMAAABAIEsQApQhTSAbQQVOISEgG0EETiEiIABBqIMDaioCACAAQayDA2oqAgCUIU4gAEGwgwNqKgIAIABBtIMDaioCAJQhT0NvEoM6IABBuIMDaioCAJQhUCAAQcSDA2oqAgAhUSAAQciDA2oqAgCoISMgAEHMgwNqKgIAIVJDWP//PyBSlCFTQ30EtT8gUpRDAAAAQBACIVQgUyBUkiFVIFNDAAAAQJIhViAAQdSDA2oqAgAhVyBCQwAAAABeISQgAEHcgwNqKgIAqCElQ28SgzogAEHggwNqKgIAlCFYIFhDCtcjPCAlGyFZIABB8IMDaioCACFaIABB7IMDaioCACBalKghJkNvEoM6IFqUIVsgJLIhXEMK1yM8IABB9IMDaioCACBclJQhXSAAQYCEA2oqAgCoIScgAEGEhANqKgIAIV4gAEHEAGoqAgAgAEGIhANqKgIAlCFfQwAAAEAgU5MhYENvEoM6IABBtIQDaioCAJQhYSBhQwrXIzwgJRshYiAAQbiEA2oqAgAhYyAAQeyDA2oqAgAgY5SoIShDbxKDOiBjlCFkQwrXIzwgAEG8hANqKgIAIFyUlCFlQQAhKQNAAkAgAEEUakEBNgIAIDkgAEEIaioCACAAQSBqKgIAlJIhZiAAQRxqIGZDAAAAACBmvEGAgID8B3EbOAIAIABB8ABqIEI4AgAgQiAAQfQAaioCAFsgDXKyIWdDAACAP0N3vn8/IGeUkyFoIEEgaJRDd75/PyBnIABB/ABqKgIAlJSSIWkgAEH4AGogaUMAAAAAIGm8QYCAgPwHcRs4AgAgPiAAQYQBaioCAJQgPyBAIABB+ABqKgIAlJSSIWogAEGAAWogakMAAAAAIGq8QYCAgPwHcRs4AgAgAEHAAGoqAgAgAEGkAWoqAgCUIABBxABqKgIAIABBgAFqKgIAQzv/uEMgFRsgRpSUkiFrIABBoAFqIGtDAAAAACBrvEGAgID8B3EbOAIAIEcgAEGgAWoqAgAgFBshbCAAQagBaiBsOAIAIABBGGooAgCyIW0gbENzl7tBlyFuQwAAoEEgbouXIW8gAEGwAWogbzgCACAAQbwBaioCACAAQTxqKgIAIABBtAFqKgIAlJIhcCBwIHCOkyFxIABBuAFqIHFDAAAAACBxvEGAgID8B3EbOAIAQwAAAEAgAEG4AWoqAgCUQwAAgL+SQwAAAEAQAiFyIABBwAFqIHI4AgAgbSByIABBxAFqKgIAk5Qgb5UhcyAAQcwBIABByAFqKAIAQf8fcUECdGpqIHM4AgBDAAAAAEMA4P9EIABBzIEBaioCACBulZaXIXQgdKghKiB0jiF1IABBOGoqAgAgcyAAQcwBIABByAFqKAIAICprQf8fcUECdGpqKgIAIHVDAACAPyB0k5KUkyB0IHWTIABBzAEgAEHIAWooAgAgKkEBamtB/x9xQQJ0amoqAgCUk5QhdkN3vn8/IABB1IEBaioCAJQgdpIhdyAAQdCBAWogd0MAAAAAIHe8QYCAgPwHcRs4AgAgAEHcgQFqKgIAIABBPGoqAgAgAEGsAWoqAgCUkiF4IHggeI6TIXkgAEHYgQFqIHlDAAAAACB5vEGAgID8B3EbOAIAQwAAAEAgAEHYgQFqKgIAlEMAAIC/kiF6QwAAAEBDAACAPyB6i5OUQwAAgL+SIABBNGoqAgAgbCAAQdCBAWoqAgCUlCAUGyF7Q5W/1jMgbIuXIXwgAEHkgQFqKgIAIABBPGoqAgAgfJSSIX0gfUMAAIC/kiF+IH5DAAAAAF0hKyB9IH4gKxshfyAAQeCBAWogf0MAAAAAIH+8QYCAgPwHcRs4AgAgfSB9QwAAgD8gAEEEaioCACB8lZMgfpSSICsbIYABIIABQwAAAAAggAG8QYCAgPwHcRshgQEgekMAAABAIIEBlEMAAIC/kiAUGyGCAUMAAAAAQwDg/0QgAEE4aioCACBulZaXIYMBIIMBqCEsIIMBjiGEAUMAAAAAQwDg/0QgAEHogQFqKgIAIG6VlpchhQEghQGoIS0ghQGOIYYBQwAAAEAgAEHYgQFqKgIAQwAAAD5fspRDAACAv5JDAAAAACAAQThqKgIAIABBzAEgAEHIAWooAgAgLWtB/x9xQQJ0amoqAgAghgFDAACAPyCFAZOSlCBzkyCFASCGAZMgAEHMASAAQcgBaigCACAtQQFqa0H/H3FBAnRqaioCAJSSlJMgFBtDAAAAQCAAQdiBAWoqAgBDAACAPl+ylEMAAIC/kkMAAAAAIABBOGoqAgAgAEHMASAAQcgBaigCACAsa0H/H3FBAnRqaioCACCEAUMAAIA/IIMBk5KUIHOTIIMBIIQBkyAAQcwBIABByAFqKAIAICxBAWprQf8fcUECdGpqKgIAlJKUkyAUG0MAAABAIABB2IEBaioCAEMAAAA/X7KUQwAAgL+SIHYgFBsgFxsgFhsgggFDAAAAPyB7IIIBkpQgeyASGyARGyAQGyGHASAAQfCBAWpB7ZyZjgQgAEH0gQFqKAIAbEG54ABqNgIAQwAAADAgAEHwgQFqKAIAspQhiAFDNK4FPyAAQYSCAWoqAgCUIIgBQ1ytH0AgAEH8gQFqKgIAlJKSQ+IaAUAgAEGAggFqKgIAlJMhiQEgAEH4gQFqIIkBQwAAAAAgiQG8QYCAgPwHcRs4AgBDAAAgQUMMe0w9IABB+IEBaioCAJRDQ09PPSAAQYCCAWoqAgCUkkNCmMQ9IABB/IEBaioCAJRDlHeQOyAAQYSCAWoqAgCUkpOUIIgBIBgbIYoBIEQghwGUIEMgigGUkiGLASBIIGiUQ3e+fz8gZyAAQZCCAWoqAgCUlJIhjAEgAEGMggFqIIwBQwAAAAAgjAG8QYCAgPwHcRs4AgBDAADAPyCLASAAQYyCAWoqAgCUlCGNASAAQYABaioCAEMAAABAII0BQwAAAAAgDhsQApQhjgEgPSCOAZQgAEHAAGoqAgAgAEGYggFqKgIAlJIhjwEgAEGUggFqII8BQwAAAAAgjwG8QYCAgPwHcRs4AgAgSSAAQZSCAWoqAgAgDBshkAEgAEGcggFqIJABOAIAIJABQ3OXu0GXIZEBQwAAoEEgkQGLlyGSASAAQaSCAWogkgE4AgAgAEE8aioCACAAQaiCAWoqAgCUIABBsIIBaioCAJIhkwEgkwEgkwGOkyGUASAAQayCAWoglAFDAAAAACCUAbxBgICA/AdxGzgCAEMAAABAIABBrIIBaioCAJRDAACAv5JDAAAAQBACIZUBIABBtIIBaiCVATgCACCVASAAQbiCAWoqAgCTIG2UIJIBlSGWASAAQbyCASAAQcgBaigCAEH/H3FBAnRqaiCWATgCAEMAAAAAQwDg/0QgAEHMgQFqKgIAIJEBlZaXIZcBIJcBqCEuIJcBjiGYASAAQThqKgIAIJYBIABBvIIBIABByAFqKAIAIC5rQf8fcUECdGpqKgIAIJgBQwAAgD8glwGTkpSTIJcBIJgBkyAAQbyCASAAQcgBaigCACAuQQFqa0H/H3FBAnRqaioCAJSTlCGZASCZAUN3vn8/IABBwIICaioCAJSSIZoBIABBvIICaiCaAUMAAAAAIJoBvEGAgID8B3EbOAIAIABByIICaioCACAAQTxqKgIAIABBoIIBaioCAJSSIZsBIJsBIJsBjpMhnAEgAEHEggJqIJwBQwAAAAAgnAG8QYCAgPwHcRs4AgBDAAAAQCAAQcSCAmoqAgCUQwAAgL+SIZ0BQwAAAEBDAACAPyCdAYuTlEMAAIC/kiAAQTRqKgIAIABBvIICaioCACCQAZSUIAwbIZ4BQ5W/1jMgkAGLlyGfASAAQdCCAmoqAgAgAEE8aioCACCfAZSSIaABIKABQwAAgL+SIaEBIKEBQwAAAABdIS8goAEgoQEgLxshogEgAEHMggJqIKIBQwAAAAAgogG8QYCAgPwHcRs4AgAgoAEgoAEgoQFDAACAPyAAQQRqKgIAIJ8BlZOUkiAvGyGjASCjAUMAAAAAIKMBvEGAgID8B3EbIaQBIJ0BQwAAAEAgpAGUQwAAgL+SIAwbIaUBQwAAAABDAOD/RCAAQThqKgIAIJEBlZaXIaYBIKYBqCEwIKYBjiGnAUMAAAAAQwDg/0QgAEHogQFqKgIAIJEBlZaXIagBIKgBqCExIKgBjiGpASAAQcAAaioCACAAQeyCAmoqAgCUIEwgjgGUkiGqASAAQeiCAmogqgFDAAAAACCqAbxBgICA/AdxGzgCACBNIABB6IICaioCACAgGyGrASAAQfCCAmogqwE4AgAgqwFDc5e7QZchrAFDAACgQSCsAYuXIa0BIABB+IICaiCtATgCACAAQYSDAmoqAgAgAEE8aioCACAAQfyCAmoqAgCUkiGuASCuASCuAY6TIa8BIABBgIMCaiCvAUMAAAAAIK8BvEGAgID8B3EbOAIAQwAAAEAgAEGAgwJqKgIAlEMAAIC/kkMAAABAEAIhsAEgAEGIgwJqILABOAIAILABIABBjIMCaioCAJMgbZQgrQGVIbEBIABBkIMCIABByAFqKAIAQf8fcUECdGpqILEBOAIAQwAAAABDAOD/RCAAQcyBAWoqAgAgrAGVlpchsgEgsgGoITIgsgGOIbMBIABBOGoqAgAgsQEgAEGQgwIgAEHIAWooAgAgMmtB/x9xQQJ0amoqAgAgswFDAACAPyCyAZOSlJMgsgEgswGTIABBkIMCIABByAFqKAIAIDJBAWprQf8fcUECdGpqKgIAlJOUIbQBQ3e+fz8gAEGUgwNqKgIAlCC0AZIhtQEgAEGQgwNqILUBQwAAAAAgtQG8QYCAgPwHcRs4AgAgAEGcgwNqKgIAIABBPGoqAgAgAEH0ggJqKgIAlJIhtgEgtgEgtgGOkyG3ASAAQZiDA2ogtwFDAAAAACC3AbxBgICA/AdxGzgCAEMAAABAIABBmIMDaioCAJRDAACAv5IhuAFDAAAAQEMAAIA/ILgBi5OUQwAAgL+SIABBNGoqAgAgAEGQgwNqKgIAIKsBlJQgIBshuQFDlb/WMyCrAYuXIboBIABBpIMDaioCACAAQTxqKgIAILoBlJIhuwEguwFDAACAv5IhvAEgvAFDAAAAAF0hMyC7ASC8ASAzGyG9ASAAQaCDA2ogvQFDAAAAACC9AbxBgICA/AdxGzgCACC7ASC7ASC8AUMAAIA/IABBBGoqAgAgugGVk5SSIDMbIb4BIL4BQwAAAAAgvgG8QYCAgPwHcRshvwEguAFDAAAAQCC/AZRDAACAv5IgIBshwAFDAAAAAEMA4P9EIABBOGoqAgAgrAGVlpchwQEgwQGoITQgwQGOIcIBQwAAAABDAOD/RCAAQeiBAWoqAgAgrAGVlpchwwEgwwGoITUgwwGOIcQBIFBDd75/PyAAQcCDA2oqAgCUkiHFASAAQbyDA2ogxQFDAAAAACDFAbxBgICA/AdxGzgCACA6QwAAAEAgAEHEggJqKgIAQwAAAD5fspRDAACAv5IgAEE4aioCACCWASAAQbyCASAAQcgBaigCACAxa0H/H3FBAnRqaioCACCpAUMAAIA/IKgBk5KUkyCoASCpAZMgAEG8ggEgAEHIAWooAgAgMUEBamtB/x9xQQJ0amoqAgCUk5QgDBtDAAAAQCAAQcSCAmoqAgBDAACAPl+ylEMAAIC/kiAAQThqKgIAIJYBIABBvIIBIABByAFqKAIAIDBrQf8fcUECdGpqKgIAIKcBQwAAgD8gpgGTkpSTIKYBIKcBkyAAQbyCASAAQcgBaigCACAwQQFqa0H/H3FBAnRqaioCAJSTlCAMG0MAAABAIABBxIICaioCAEMAAAA/X7KUQwAAgL+SIJkBIAwbIBobIBkbIKUBQwAAAD8gngEgpQGSlCCeASAKGyAJGyAIG5QgSkMAAABAIABBmIMDaioCAEMAAAA+X7KUQwAAgL+SIABBOGoqAgAgsQEgAEGQgwIgAEHIAWooAgAgNWtB/x9xQQJ0amoqAgAgxAFDAACAPyDDAZOSlJMgwwEgxAGTIABBkIMCIABByAFqKAIAIDVBAWprQf8fcUECdGpqKgIAlJOUICAbQwAAAEAgAEGYgwNqKgIAQwAAgD5fspRDAACAv5IgAEE4aioCACCxASAAQZCDAiAAQcgBaigCACA0a0H/H3FBAnRqaioCACDCAUMAAIA/IMEBk5KUkyDBASDCAZMgAEGQgwIgAEHIAWooAgAgNEEBamtB/x9xQQJ0amoqAgCUk5QgIBtDAAAAQCAAQZiDA2oqAgBDAAAAP1+ylEMAAIC/kiC0ASAgGyAiGyAhGyDAAUMAAAA/ILkBIMABkpQguQEgHhsgHRsgHBuUkiBOIIcBlJIgTyCKAZSSIFEgBCApaioCACAAQcyEA2oqAgAgIxuUkiHGASAAQeSDA2ogJCAAQeiDA2ooAgBBAWpsNgIAIABB5IMDaigCACAmSCE2QwAAAAAgAEHYgwNqKgIAIFsgWCA2GyBZICQblZMQACHHASAAQfyDA2oqAgAgxwGUIFwgXSA2G0MAAAAAICQbQwAAgD8gxwGTlJIhyAEgAEH4gwNqIMgBQwAAAAAgyAG8QYCAgPwHcRs4AgAgXyAAQcAAaioCACAAQZCEA2oqAgCUkiHJASAAQYyEA2ogyQFDAAAAACDJAbxBgICA/AdxGzgCACAAQdCDA2oqAgAgAEHMgQFqKgIAQwAAAEAgVyAAQfiDA2oqAgCUII0BQwAAAAAgJxuSIF5DO6q4PyAAQYABaioCABABlENzgADBkpSSIABBjIQDaioCAJIQApZDAACgQZeUEAMhygFDAACAPyDKAZUhywEgVSBWIMsBkiDKAZVDAACAP5KSIcwBIFVDAACAPyBWIMsBkyDKAZWTkiDMAZUhzQFDcvl/v0Ny+X8/IM0BlpchzgFDAACAPyDOAUMAAABAEAKTIc8BQwAAAAAgzwGXkSHQASDGASDQAZQgzgEgAEGghANqKgIAlJMh0QFDAACAP0MAAIA/IMoBQwAAAEAQApWTIdIBIFUg0gGSIdMBQ3L5f79Dcvl/P0MAAABAINMBIMwBIM0BQwAAgD+SlJWUlpch1AFDAACAPyDUAUMAAABAEAKTIdUBQwAAAAAg1QGXkSHWASDRASDWAZQg1AEgAEGYhANqKgIAlJMh1wEgAEGUhANqINcBQwAAAAAg1wG8QYCAgPwHcRs4AgAg0QEg1AGUIABBmIQDaioCACDWAZSSIdgBIABBnIQDaiDYAUMAAAAAINgBvEGAgID8B3EbOAIAIABBlIQDaioCACHZASDZAUMAAAAAINkBvEGAgID8B3EbIdoBQwAAgD8g0wEgzAGVkyHbASDPAZEh3AEgxgEgzgGUIABBoIQDaioCACDQAZSSQwAAAEAgAEGchANqKgIAINsBlCDcAZWUkiDaAUMAAIA/IM0Bk0MAAABAINQBINsBlJSTlCDcASDVAZGUlZIh3QEgVCBgIMsBkiDKAZVDAACAP5IgU5OSId4BIFQgywEgYJMgygGVQwAAgD+SIFOTkiDeAZUh3wFDcvl/v0Ny+X8/IN8Blpch4AFDAACAPyDgAUMAAABAEAKTIeEBQwAAAAAg4QGXkSHiASDdASDiAZQgzAGVIOABIABBsIQDaioCAJSTIeMBIFQg0gEgU5OSIeQBQ3L5f79Dcvl/P0MAAABAIOQBIN4BIN8BQwAAgD+SlJWUlpch5QFDAACAPyDlAUMAAABAEAKTIeYBQwAAAAAg5gGXkSHnASDjASDnAZQg5QEgAEGohANqKgIAlJMh6AEgAEGkhANqIOgBQwAAAAAg6AG8QYCAgPwHcRs4AgAg4wEg5QGUIABBqIQDaioCACDnAZSSIekBIABBrIQDaiDpAUMAAAAAIOkBvEGAgID8B3EbOAIAIABBpIQDaioCACHqASDqAUMAAAAAIOoBvEGAgID8B3EbIesBQwAAgD8g5AEg3gGVkyHsASDhAZEh7QEgAEHkgwNqKAIAIChIITdDAAAAACAAQdiDA2oqAgAgZCBhIDcbIGIgJBuVkxAAIe4BIABBxIQDaioCACDuAZQgXCBlIDcbQwAAAAAgJBtDAACAPyDuAZOUkiHvASAAQcCEA2og7wFDAAAAACDvAbxBgICA/AdxGzgCACAAQRxqKgIAIN0BIOABlCDMAZUgAEGwhANqKgIAIOIBlJJDAAAAQCAAQayEA2oqAgAg7AGUIO0BlZSSIOsBQwAAgD8g3wGTQwAAAEAg5QEg7AGUlJOUIO0BIOYBkZSVkpQgAEHAhANqKgIAQwAAgD4gAEGMggFqKgIAIIsBQwAAgD+SlJRDAACAP5KUIABBwIQDaioCACAOG5Qg3gGVIfABIABByIQDaiDwAUMAAAAAIPABvEGAgID8B3EbOAIAIAUgKWogAEHIhANqKgIAOAIAIAYgKWogAEHIhANqKgIAOAIAIABBGGogAEEUaigCADYCACAAQSBqIABBHGoqAgA4AgAgAEH0AGogAEHwAGoqAgA4AgAgAEH8AGogAEH4AGoqAgA4AgAgAEGEAWogAEGAAWoqAgA4AgAgAEGkAWogAEGgAWoqAgA4AgAgAEGsAWogAEGoAWoqAgA4AgAgAEG0AWogAEGwAWoqAgA4AgAgAEG8AWogAEG4AWoqAgA4AgAgAEHEAWogAEHAAWoqAgA4AgAgAEHIAWogAEHIAWooAgBBAWo2AgAgAEHUgQFqIABB0IEBaioCADgCACAAQdyBAWogAEHYgQFqKgIAOAIAIABB5IEBaiAAQeCBAWoqAgA4AgAgAEH0gQFqIABB8IEBaigCADYCAEEDITgDQAJAIABB+IEBIDhBAnRqaiAAQfiBASA4QQFrQQJ0amoqAgA4AgAgOEEBayE4IDhBAEoEQAwCDAELCwsgAEGQggFqIABBjIIBaioCADgCACAAQZiCAWogAEGUggFqKgIAOAIAIABBoIIBaiAAQZyCAWoqAgA4AgAgAEGoggFqIABBpIIBaioCADgCACAAQbCCAWogAEGsggFqKgIAOAIAIABBuIIBaiAAQbSCAWoqAgA4AgAgAEHAggJqIABBvIICaioCADgCACAAQciCAmogAEHEggJqKgIAOAIAIABB0IICaiAAQcyCAmoqAgA4AgAgAEHsggJqIABB6IICaioCADgCACAAQfSCAmogAEHwggJqKgIAOAIAIABB/IICaiAAQfiCAmoqAgA4AgAgAEGEgwJqIABBgIMCaioCADgCACAAQYyDAmogAEGIgwJqKgIAOAIAIABBlIMDaiAAQZCDA2oqAgA4AgAgAEGcgwNqIABBmIMDaioCADgCACAAQaSDA2ogAEGggwNqKgIAOAIAIABBwIMDaiAAQbyDA2oqAgA4AgAgAEHogwNqIABB5IMDaigCADYCACAAQfyDA2ogAEH4gwNqKgIAOAIAIABBkIQDaiAAQYyEA2oqAgA4AgAgAEGYhANqIABBlIQDaioCADgCACAAQaCEA2ogAEGchANqKgIAOAIAIABBqIQDaiAAQaSEA2oqAgA4AgAgAEGwhANqIABBrIQDaioCADgCACAAQcSEA2ogAEHAhANqKgIAOAIAIABBzIQDaiAAQciEA2oqAgA4AgAgKUEEaiEpIClBBCABbEgEQAwCDAELCwsLhYCAgAAAQQEPC4WAgIAAAEECDwuLgICAAAAgACABaioCAA8Li4CAgAAAIABBAGooAgAPC46AgIAAACAAIAEQBCAAIAEQDQv6koCAAAEtf0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEgQQAhIUEAISJBACEjQQAhJEEAISVBACEmQQAhJ0EAIShBACEpQQAhKkEAIStBACEsQQAhLUEAIQEDQAJAIABBFCABQQJ0ampBADYCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAIABBHCACQQJ0ampDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAIABB8AAgA0ECdGpqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQCAAQfgAIARBAnRqakMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkAgAEGAASAFQQJ0ampDAAAAADgCACAFQQFqIQUgBUECSARADAIMAQsLC0EAIQYDQAJAIABBoAEgBkECdGpqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQCAAQagBIAdBAnRqakMAAAAAOAIAIAdBAWohByAHQQJIBEAMAgwBCwsLQQAhCANAAkAgAEGwASAIQQJ0ampDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAIABBuAEgCUECdGpqQwAAAAA4AgAgCUEBaiEJIAlBAkgEQAwCDAELCwtBACEKA0ACQCAAQcABIApBAnRqakMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLIABByAFqQQA2AgBBACELA0ACQCAAQcwBIAtBAnRqakMAAAAAOAIAIAtBAWohCyALQYAgSARADAIMAQsLC0EAIQwDQAJAIABB0IEBIAxBAnRqakMAAAAAOAIAIAxBAWohDCAMQQJIBEAMAgwBCwsLQQAhDQNAAkAgAEHYgQEgDUECdGpqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQCAAQeCBASAOQQJ0ampDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAIABB8IEBIA9BAnRqakEANgIAIA9BAWohDyAPQQJIBEAMAgwBCwsLQQAhEANAAkAgAEH4gQEgEEECdGpqQwAAAAA4AgAgEEEBaiEQIBBBBEgEQAwCDAELCwtBACERA0ACQCAAQYyCASARQQJ0ampDAAAAADgCACARQQFqIREgEUECSARADAIMAQsLC0EAIRIDQAJAIABBlIIBIBJBAnRqakMAAAAAOAIAIBJBAWohEiASQQJIBEAMAgwBCwsLQQAhEwNAAkAgAEGcggEgE0ECdGpqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQCAAQaSCASAUQQJ0ampDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAIABBrIIBIBVBAnRqakMAAAAAOAIAIBVBAWohFSAVQQJIBEAMAgwBCwsLQQAhFgNAAkAgAEG0ggEgFkECdGpqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQCAAQbyCASAXQQJ0ampDAAAAADgCACAXQQFqIRcgF0GAIEgEQAwCDAELCwtBACEYA0ACQCAAQbyCAiAYQQJ0ampDAAAAADgCACAYQQFqIRggGEECSARADAIMAQsLC0EAIRkDQAJAIABBxIICIBlBAnRqakMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkAgAEHMggIgGkECdGpqQwAAAAA4AgAgGkEBaiEaIBpBAkgEQAwCDAELCwtBACEbA0ACQCAAQeiCAiAbQQJ0ampDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAIABB8IICIBxBAnRqakMAAAAAOAIAIBxBAWohHCAcQQJIBEAMAgwBCwsLQQAhHQNAAkAgAEH4ggIgHUECdGpqQwAAAAA4AgAgHUEBaiEdIB1BAkgEQAwCDAELCwtBACEeA0ACQCAAQYCDAiAeQQJ0ampDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAIABBiIMCIB9BAnRqakMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkAgAEGQgwIgIEECdGpqQwAAAAA4AgAgIEEBaiEgICBBgCBIBEAMAgwBCwsLQQAhIQNAAkAgAEGQgwMgIUECdGpqQwAAAAA4AgAgIUEBaiEhICFBAkgEQAwCDAELCwtBACEiA0ACQCAAQZiDAyAiQQJ0ampDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAIABBoIMDICNBAnRqakMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkAgAEG8gwMgJEECdGpqQwAAAAA4AgAgJEEBaiEkICRBAkgEQAwCDAELCwtBACElA0ACQCAAQeSDAyAlQQJ0ampBADYCACAlQQFqISUgJUECSARADAIMAQsLC0EAISYDQAJAIABB+IMDICZBAnRqakMAAAAAOAIAICZBAWohJiAmQQJIBEAMAgwBCwsLQQAhJwNAAkAgAEGMhAMgJ0ECdGpqQwAAAAA4AgAgJ0EBaiEnICdBAkgEQAwCDAELCwtBACEoA0ACQCAAQZSEAyAoQQJ0ampDAAAAADgCACAoQQFqISggKEECSARADAIMAQsLC0EAISkDQAJAIABBnIQDIClBAnRqakMAAAAAOAIAIClBAWohKSApQQJIBEAMAgwBCwsLQQAhKgNAAkAgAEGkhAMgKkECdGpqQwAAAAA4AgAgKkEBaiEqICpBAkgEQAwCDAELCwtBACErA0ACQCAAQayEAyArQQJ0ampDAAAAADgCACArQQFqISsgK0ECSARADAIMAQsLC0EAISwDQAJAIABBwIQDICxBAnRqakMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkAgAEHIhAMgLUECdGpqQwAAAAA4AgAgLUEBaiEtIC1BAkgEQAwCDAELCwsL5YKAgAAAIABBAGogATYCACAAQQRqQwCAO0hDAACAPyAAQQBqKAIAspeWOAIAIABBCGpDAAAAAEMAAMhAIABBBGoqAgCVkxAAOAIAIABBDGpDAACAPyAAQQhqKgIAkzgCACAAQTRqQwAAgEAgAEEEaioCAJU4AgAgAEE4akMAAIA+IABBBGoqAgCUOAIAIABBPGpDAACAPyAAQQRqKgIAlTgCACAAQcAAakMAAAAAQwAAekIgAEEEaioCAJWTEAA4AgAgAEHEAGpDAACAPyAAQcAAaioCAJM4AgAgAEHUAGpDslo8PyAAQQRqKgIAlTgCACAAQcyBAWpDAAAAPyAAQQRqKgIAlDgCACAAQeiBAWpDAAAAPiAAQQRqKgIAlDgCACAAQdCDA2pD2w9JQCAAQQRqKgIAlTgCACAAQdiDA2pDuB7dQCAAQQRqKgIAlTgCACAAQeyDA2pDbxKDOiAAQQRqKgIAlDgCAAuQgICAAAAgACABEAwgABAOIAAQCwubhYCAAAAgAEEQakMzMzM/OAIAIABBJGpDAAAAPzgCACAAQShqQwAAgD84AgAgAEEsakMAAKBAOAIAIABBMGpDAACAPzgCACAAQcgAakMAAAAAOAIAIABBzABqQwAAAAA4AgAgAEHQAGpDAACAPzgCACAAQdgAakNvEgM8OAIAIABB3ABqQwAAXEM4AgAgAEHgAGpDAACAPzgCACAAQeQAakMAAAAAOAIAIABB6ABqQwAAAAA4AgAgAEHsAGpDAAAAADgCACAAQYgBakMAAIA/OAIAIABBjAFqQwAAAAA4AgAgAEGQAWpDAAAAADgCACAAQZQBakMAAAAAOAIAIABBmAFqQwAAAAA4AgAgAEGcAWpDmpmZPjgCACAAQeyBAWpDAACAPzgCACAAQYiCAWpDAAAAADgCACAAQdSCAmpDAAAAPzgCACAAQdiCAmpDAACAPzgCACAAQdyCAmpDAACgQDgCACAAQeCCAmpDAACAPzgCACAAQeSCAmpDxVXVPjgCACAAQaiDA2pDAAAAPzgCACAAQayDA2pDAAAAADgCACAAQbCDA2pDAAAAADgCACAAQbSDA2pDAAAAADgCACAAQbiDA2pDzcxMPjgCACAAQcSDA2pDAAAAADgCACAAQciDA2pDAAAAADgCACAAQcyDA2pDMzMzPzgCACAAQdSDA2pDmpmZPzgCACAAQdyDA2pDAACAPzgCACAAQeCDA2pDAAAgQTgCACAAQfCDA2pDAACvRDgCACAAQfSDA2pDAACgQjgCACAAQYCEA2pDAACAPzgCACAAQYSEA2pDAACAPzgCACAAQYiEA2pDmpkpQTgCACAAQbSEA2pDAAAgQTgCACAAQbiEA2pDAAAAQDgCACAAQbyEA2pDAACgQjgCAAuNgICAAAAgASAAIAAgAUgbDwuNgICAAAAgACABIAAgAUgbDwuMgICAAAAgACABaiACOAIACwvX/ICAAAEAQQAL0Hx7Im5hbWUiOiJmcmVldmVyYiIsImZpbGVuYW1lIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3NlciIsInZlcnNpb24iOiIyLjExLjUiLCJjb21waWxlX29wdGlvbnMiOiItc2NhbCAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiI0OTc0NCIsImlucHV0cyI6IjEiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IkdyYW1lIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpIEdSQU1FIDIwMDYgYW5kIE1vRm9ydGUgSW5jLiAyMDE3In0seyJkZXNpZ25lciI6IlJvYmVydCBBLiBNb29nIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3NlciJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW50ZXJmYWNlIjoiU21hcnRLZXlib2FyZHsgICAgICdOdW1iZXIgb2YgS2V5Ym9hcmRzJzonMicsICAgICAnS2V5Ym9hcmQgMCAtIE51bWJlciBvZiBLZXlzJzonMTMnLCAgICAgJ0tleWJvYXJkIDEgLSBOdW1iZXIgb2YgS2V5cyc6JzEzJywgICAgICdLZXlib2FyZCAwIC0gTG93ZXN0IEtleSc6JzcyJywgICAgICdLZXlib2FyZCAxIC0gTG93ZXN0IEtleSc6JzYwJyB9In0seyJsaWNlbnNlIjoiQlNEIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJmcmVldmVyYiJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvRnJlZXZlcmIuaHRtbCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJmcmVldmVyYiIsIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJNaW5pbW9vZyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNvbnRyb2xsZXJzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik1hc3RlciBWb2x1bWUiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik1hc3RlclZvbHVtZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9NYXN0ZXJfVm9sdW1lL01hc3RlclZvbHVtZSIsImluZGV4IjoiMTYiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA3In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJtYXN0ZXIgdm9sdW1lLCBNSURJIGNvbnRyb2xsZWQifV0sImluaXQiOiIwLjciLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIFR1bmluZyAmIFN3aXRjaGluZyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiVHVuZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9Pc2NpbGxhdG9yX1R1bmluZ18mX1N3aXRjaGluZy9UdW5lIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQ3In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGcmVxdWVuY3ktc2hpZnQgdXAgb3IgZG93biBmb3IgYWxsIG9zY2lsbGF0b3JzIGluIE9jdGF2ZXMifSx7InVuaXQiOiJPY3RhdmVzIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYy4gTW9kLiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Db250cm9sbGVycy9Pc2NpbGxhdG9yX1R1bmluZ18mX1N3aXRjaGluZy9Td2l0Y2hlcy9Pc2MuX01vZC4iLCJpbmRleCI6IjEzNiIsIm1ldGEiOlt7IjAiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCAyMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPc2MuIDMgQ3RsIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL09zY2lsbGF0b3JfVHVuaW5nXyZfU3dpdGNoaW5nL1N3aXRjaGVzL09zYy5fM19DdGwiLCJpbmRleCI6IjE1MiIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCA5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkdsaWRlIGFuZCBNb2RNaXgiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkdsaWRlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL0NvbnRyb2xsZXJzL0dsaWRlX2FuZF9Nb2RNaXgvR2xpZGUiLCJpbmRleCI6Ijg4IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNSJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBvcnRhbWVudG8gKGZyZXF1ZW5jeS1nbGlkZSkgaW4gc2Vjb25kcyBwZXIgb2N0YXZlIn0seyJ1bml0Ijoic2VjL29jdGF2ZSJ9XSwiaW5pdCI6IjAuMDA4IiwibWluIjoiMC4wMDEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTW9kLiBNaXgiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvQ29udHJvbGxlcnMvR2xpZGVfYW5kX01vZE1peC9Nb2QuX01peCIsImluZGV4IjoiMTQwIiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNDgifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ik1vZHVsYXRpb24gTWl4OiBPc2MzICgwKSB0byBOb2lzZSAoMSkifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJPc2NpbGxhdG9yIEJhbmsiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciAxIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPY3RhdmUxIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzEvT2N0YXZlMSIsImluZGV4IjoiNDgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAyMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZVR1bmluZzEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMS9EZVR1bmluZzEiLCJpbmRleCI6Ijc2IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMjQifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdHMiOiJPY3RhdmVzIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhdmVmb3JtMSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8xL1dhdmVmb3JtMSIsImluZGV4IjoiNDQiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCAyNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciAyIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPY3RhdmUyIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzIvT2N0YXZlMiIsImluZGV4IjoiMzMxMjAiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAyOCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZVR1bmluZzIiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMi9EZVR1bmluZzIiLCJpbmRleCI6IjMzMTI0IiwibWV0YSI6W3siMiI6IiJ9LHsibWlkaSI6ImN0cmwgMjkifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdHMiOiJPY3RhdmVzIn1dLCJpbml0IjoiMC40MTY2NyIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IldhdmVmb3JtMiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Pc2NpbGxhdG9yX0JhbmsvT3NjaWxsYXRvcl8yL1dhdmVmb3JtMiIsImluZGV4IjoiMzMxMTYiLCJtZXRhIjpbeyIzIjoiIn0seyJtaWRpIjoiY3RybCAzMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjAiLCJtYXgiOiI1Iiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjaWxsYXRvciAzIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPY3RhdmUzIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzMvT2N0YXZlMyIsImluZGV4IjoiMTQ4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgMzMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiNSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVUdW5pbmczIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL09zY2lsbGF0b3JfQmFuay9Pc2NpbGxhdG9yXzMvRGVUdW5pbmczIiwiaW5kZXgiOiIxNTYiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzNCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0cyI6Ik9jdGF2ZXMifV0sImluaXQiOiIwLjMiLCJtaW4iOiItMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXZlZm9ybTMiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvT3NjaWxsYXRvcl9CYW5rL09zY2lsbGF0b3JfMy9XYXZlZm9ybTMiLCJpbmRleCI6IjE0NCIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDM1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjUiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1peGVyIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zYzEiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYzEgQW1wIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzEvT3NjMV9BbXAiLCJpbmRleCI6IjM2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMjYifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMS9PbiIsImluZGV4IjoiNDAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFeHQgSW4sIEtleUN0bCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXh0IElucHV0IiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL0V4dF9JbixfS2V5Q3RsL0V4dF9JbnB1dCIsImluZGV4IjoiNDk2MDQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAyNyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvRXh0X0luLF9LZXlDdGwvT24iLCJpbmRleCI6IjQ5NjA4IiwibWV0YSI6W3siMSI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3NjMiIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT3NjMiBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMi9Pc2MyX0FtcCIsImluZGV4IjoiMzMxMDgiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAzMSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJPbiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9NaXhlci9Pc2MyL09uIiwiaW5kZXgiOiIzMzExMiIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoiYmx1ZSJ9LHsibWlkaSI6ImN0cmwgMTQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik5vaXNlIiwibWV0YSI6W3siMyI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJOb2lzZSBBbXAiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvTm9pc2UvTm9pc2VfQW1wIiwiaW5kZXgiOiI0OTU4OCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDMyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9uIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL05vaXNlLzB4MDAvT24iLCJpbmRleCI6IjQ5NTg0IiwibWV0YSI6W3siMCI6IiJ9LHsiY29sb3IiOiJibHVlIn0seyJtaWRpIjoiY3RybCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXaGl0ZS9QaW5rIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL05vaXNlLzB4MDAvV2hpdGUvUGluayIsImluZGV4IjoiMTY2MjAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE2In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDaG9vc2UgZWl0aGVyIFdoaXRlIG9yIFBpbmsgTm9pc2UifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Ik9zYzMiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik9zYzMgQW1wIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01peGVyL09zYzMvT3NjM19BbXAiLCJpbmRleCI6IjQ5NTc2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMzYifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiT24iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTWl4ZXIvT3NjMy9PbiIsImluZGV4IjoiNDk1ODAiLCJtZXRhIjpbeyIxIjoiIn0seyJjb2xvciI6ImJsdWUifSx7Im1pZGkiOiJjdHJsIDE3In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik1vZGlmaWVycyIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGaWx0ZXIiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJmcmVxLCBRLCBDb250b3VyU2NhbGUifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiIweDAwIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6InR3byBjaGVja2JveGVzIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkZpbHRlciBNb2QuIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC8weDAwL0ZpbHRlcl9Nb2QuIiwiaW5kZXgiOiI0OTY2NCIsIm1ldGEiOlt7IjEiOiIifSx7ImNvbG9yIjoicmVkIn0seyJtaWRpIjoiY3RybCAxOSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRmlsdGVyIE1vZHVsYXRpb24gPT4gUm91dGUgTW9kdWxhdGlvbiBNaXggb3V0cHV0IHRvIFZDRiBmcmVxdWVuY3kifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IktiZCBDdGwiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwLzB4MDAvS2JkX0N0bCIsImluZGV4IjoiNDk2NjgiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzOCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiS2V5Ym9hcmQgdHJhY2tpbmcgb2YgVkNGIGNvcm5lci1mcmVxdWVuY3kgKDA9bm9uZSwgMT1mdWxsKSJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9XX0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQ29ybmVyIEZyZXEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci8weDAwL0Nvcm5lcl9GcmVxIiwiaW5kZXgiOiI0OTY3MiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDc0In0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDb3JuZXIgcmVzb25hbmNlIGZyZXF1ZW5jeSBpbiBMb2cyKEhlcnR6KSJ9LHsidW5pdCI6IkxvZzIoSHopIn1dLCJpbml0IjoiMTAuNiIsIm1pbiI6IjUuMzIxOTMiLCJtYXgiOiIxNC4yODc3Iiwic3RlcCI6IjFlLTA2In0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQ29ybmVyIFJlc29uYW5jZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyLzB4MDAvQ29ybmVyX1Jlc29uYW5jZSIsImluZGV4IjoiNDk2MTIiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAzNyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUmVzb25hbmNlIFEgYXQgVkNGIGNvcm5lciBmcmVxdWVuY3kgKDAgdG8gMSkifV0sImluaXQiOiIwLjciLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQW1vdW50IG9mIENvbnRvdXIgKG9jdGF2ZXMpIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvMHgwMC9BbW91bnRfb2ZfQ29udG91cl8ob2N0YXZlcykiLCJpbmRleCI6IjQ5NjIwIiwibWV0YSI6W3siMyI6IiJ9LHsibWlkaSI6ImN0cmwgMzkifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEuMiIsIm1pbiI6IjAiLCJtYXgiOiI0Iiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkZpbHRlciBDb250b3VyIiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IkF0dEZpbHQsIERlY0ZpbHQsIFN1c3RhaW4gTGV2ZWwgZm9yIEZpbHRlciBDb250b3VyIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkF0dGFja0YiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0ZpbHRlci9GaWx0ZXJfQ29udG91ci9BdHRhY2tGIiwiaW5kZXgiOiI0OTY0OCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQwIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJBdHRhY2sgVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTQwMCIsIm1pbiI6IjEwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlY2F5RiIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvRmlsdGVyL0ZpbHRlcl9Db250b3VyL0RlY2F5RiIsImluZGV4IjoiNDk2MzIiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCA0MSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRGVjYXktdG8tU3VzdGFpbiBUaW1lIn0seyJ1bml0IjoibXMifV0sImluaXQiOiIxMCIsIm1pbiI6IjEwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlN1c3RhaW5GIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy8weDAwL01vZGlmaWVycy9GaWx0ZXIvRmlsdGVyX0NvbnRvdXIvU3VzdGFpbkYiLCJpbmRleCI6IjQ5NjUyIiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlN1c3RhaW4gbGV2ZWwgYXMgcGVyY2VudCBvZiBtYXgifV0sImluaXQiOiI4MCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4xIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiTG91ZG5lc3MgQ29udG91ciIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiQXR0YWNrQSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvTG91ZG5lc3NfQ29udG91ci9BdHRhY2tBIiwiaW5kZXgiOiI0OTcyMCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDQzIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJBdHRhY2sgVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMiIsIm1pbiI6IjAiLCJtYXgiOiI1MDAwIiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlY2F5QSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvMHgwMC9Nb2RpZmllcnMvTG91ZG5lc3NfQ29udG91ci9EZWNheUEiLCJpbmRleCI6IjQ5NzE2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDQifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkRlY2F5LXRvLVN1c3RhaW4gVGltZSJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiMTAiLCJtaW4iOiIwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiU3VzdGFpbkEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nLzB4MDAvTW9kaWZpZXJzL0xvdWRuZXNzX0NvbnRvdXIvU3VzdGFpbkEiLCJpbmRleCI6IjQ5NzI0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgNDUifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlN1c3RhaW4gbGV2ZWwgYXMgcGVyY2VudCBvZiBtYXgifV0sImluaXQiOiI4MCIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4xIn1dfV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJLZXlib2FyZCBHcm91cCIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJXaGVlbHMgYW5kIFN3aXRjaGVzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiV2hlZWxzKyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IjB4MDAiLCJtZXRhIjpbeyIxIjoiIn0seyJ0b29sdGlwIjoiQmVuZCBhbmQgTW9kIFdoZWVscyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWNheSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvV2hlZWxzX2FuZF9Td2l0Y2hlcy8weDAwLzB4MDAvRGVjYXkiLCJpbmRleCI6IjQ5NjI4IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgMjAifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkVudmVsb3BlIFJlbGVhc2UgZWl0aGVyIERlY2F5IHZhbHVlIG9yIDAifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkdsaWRlIiwiYWRkcmVzcyI6Ii9mcmVldmVyYi9NaW5pbW9vZy9LZXlib2FyZF9Hcm91cC9XaGVlbHNfYW5kX1N3aXRjaGVzLzB4MDAvMHgwMC9HbGlkZSIsImluZGV4IjoiODAiLCJtZXRhIjpbeyJtaWRpIjoiY3RybCA2NSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiR2xpZGUgZnJvbSBub3RlIHRvIG5vdGUifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImJlbmQiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL2JlbmQiLCJpbmRleCI6Ijk2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6InBpdGNod2hlZWwifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJtb2QiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL1doZWVsc19hbmRfU3dpdGNoZXMvMHgwMC8weDAwL21vZCIsImluZGV4IjoiMTY2NDgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCAxIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQaXRjaE1vZHVsYXRpb24gYW1wbGl0dWRlIGluIG9jdGF2ZXMifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJLZXlzIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiMHgwMCIsIm1ldGEiOlt7IjAiOiIifSx7InRvb2x0aXAiOiJHYXRlcyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJnYXRlSG9sZCIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvMHgwMC8weDAwL2dhdGVIb2xkIiwiaW5kZXgiOiIxMDQiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJsb2NrIHN1c3RhaW4gcGVkYWwgb24gKGhvbGQgZ2F0ZSBzZXQgYXQgMSkifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvZnJlZXZlcmIvTWluaW1vb2cvS2V5Ym9hcmRfR3JvdXAvMHgwMC8weDAwL2dhdGUiLCJpbmRleCI6IjEwMCIsIm1ldGEiOlt7IjEiOiIifSx7InRvb2x0aXAiOiJUaGUgZ2F0ZSBzaWduYWwgaXMgMSBkdXJpbmcgYSAgbm90ZSBhbmQgMCBvdGhlcndpc2UuIEZvciBNSURJLCBOb3RlT24gb2NjdXJzIHdoZW4gdGhlIGdhdGUgIHRyYW5zaXRpb25zIGZyb20gMCB0byAxLCBhbmQgTm90ZU9mZiBpcyBhbiBldmVudCBjb3JyZXNwb25kaW5nICB0byB0aGUgZ2F0ZSB0cmFuc2l0aW9uIGZyb20gMSB0byAwLiBUaGUgbmFtZSBvZiB0aGlzIEZhdXN0ICBidXR0b24gbXVzdCBiZSAnZ2F0ZScuIn1dfSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6InN1c3RhaW4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwLzB4MDAvMHgwMC9zdXN0YWluIiwiaW5kZXgiOiIxMDgiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA2NCJ9LHsidG9vbHRpcCI6ImV4dGVuZHMgdGhlIGdhdGUgKGtlZXBzIGl0IHNldCB0byAxKSJ9XX1dfV19LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImZyZXEiLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL01pbmltb29nL0tleWJvYXJkX0dyb3VwL2ZyZXEiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIyMjAiLCJtaW4iOiIwLjEiLCJtYXgiOiIyMDAwMCIsInN0ZXAiOiIwLjEifV19XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFZmZlY3RzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Ik91dHB1dCIsIm1ldGEiOlt7IjgiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJWb2x1bWUgTWFpbiBPdXRwdXQiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6ImdhaW4iLCJhZGRyZXNzIjoiL2ZyZWV2ZXJiL0VmZmVjdHMvT3V0cHV0L1ZvbHVtZV9NYWluX091dHB1dC9nYWluIiwiaW5kZXgiOiI0OTU5MiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkFtcGxpdHVkZSJ9XSwiaW5pdCI6IjAuMiIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfV19XX1dfV19"; }


/*
Code generated with Faust version 2.11.5
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONeffect() {
	return "{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\",\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/Documents/faustwebsite-github/modules-worklet/virtualAnalogWithEffectsForBrowser.dsp\",\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/filter.lib\",\"/usr/local/share/faust/music.lib\",\"/usr/local/share/faust/math.lib\",\"/usr/local/share/faust/routes.lib\",\"/usr/local/share/faust/noises.lib\",\"/usr/local/share/faust/envelopes.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"910860\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"filter.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"filter.lib/copyright\":\"Julius O. Smith III\"},{\"filter.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"filter.lib/license\":\"STK-4.3\"},{\"filter.lib/name\":\"Faust Filter Library\"},{\"filter.lib/reference\":\"https://ccrma.stanford.edu/~jos/filters/\"},{\"filter.lib/version\":\"1.29\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"math.lib/author\":\"GRAME\"},{\"math.lib/copyright\":\"GRAME\"},{\"math.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"math.lib/license\":\"LGPL with exception\"},{\"math.lib/name\":\"Math Library\"},{\"math.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"music.lib/author\":\"GRAME\"},{\"music.lib/copyright\":\"GRAME\"},{\"music.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"music.lib/license\":\"LGPL with exception\"},{\"music.lib/name\":\"Music Library\"},{\"music.lib/version\":\"1.0\"},{\"name\":\"virtualAnalogWithEffectsForBrowser_effect\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"virtualAnalogWithEffectsForBrowser.dsp/author\":\"Grame\"},{\"virtualAnalogWithEffectsForBrowser.dsp/copyright\":\"(c) GRAME 2006 and MoForte Inc. 2017\"},{\"virtualAnalogWithEffectsForBrowser.dsp/designer\":\"Robert A. Moog\"},{\"virtualAnalogWithEffectsForBrowser.dsp/interface\":\"SmartKeyboard{     'Number of Keyboards':'2',     'Keyboard 0 - Number of Keys':'13',     'Keyboard 1 - Number of Keys':'13',     'Keyboard 0 - Lowest Key':'72',     'Keyboard 1 - Lowest Key':'60' }\"},{\"virtualAnalogWithEffectsForBrowser.dsp/license\":\"BSD\"},{\"virtualAnalogWithEffectsForBrowser.dsp/name\":\"freeverb\"},{\"virtualAnalogWithEffectsForBrowser.dsp/reference\":\"https://ccrma.stanford.edu/~jos/pasp/Freeverb.html\"},{\"virtualAnalogWithEffectsForBrowser.dsp/version\":\"1.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"virtualAnalogWithEffectsForBrowser_effect\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Effects\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Echo\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Delay\",\"index\":\"786556\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 61\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0.001\",\"max\":\"0.742039\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Warp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Warp\",\"index\":\"786584\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 62\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"DelayT60\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/DelayT60\",\"index\":\"786548\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 60\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Feedback\",\"index\":\"524396\",\"meta\":[{\"2\":\"\"},{\"midi\":\"ctrl 2\"},{\"style\":\"knob\"}],\"init\":\"0.3\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Amp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/Amp\",\"index\":\"524376\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 75\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"FeedbackSm\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Knobs/FeedbackSm\",\"index\":\"524388\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 76\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1e-05\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"EnableEcho\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Echo/Switches/EnableEcho\",\"index\":\"524392\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 105\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Flanger\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Delay\",\"index\":\"803016\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 50\"},{\"style\":\"knob\"}],\"init\":\"0.22\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Rate\",\"index\":\"524336\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 51\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Depth\",\"index\":\"786608\",\"meta\":[{\"3\":\"\"},{\"midi\":\"ctrl 52\"},{\"style\":\"knob\"}],\"init\":\"0.75\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Feedback\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Feedback\",\"index\":\"786620\",\"meta\":[{\"5\":\"\"},{\"midi\":\"ctrl 53\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"-0.995\",\"max\":\"0.99\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Waveshape\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Knobs/Waveshape\",\"index\":\"524312\",\"meta\":[{\"7\":\"\"},{\"midi\":\"ctrl 54\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Enable\",\"index\":\"524308\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 102\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Invert\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Flanger/Switches/Invert\",\"index\":\"786604\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 49\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Chorus\",\"meta\":[{\"6\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Delay\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Delay\",\"index\":\"835808\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 55\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Rate\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Rate\",\"index\":\"835824\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 56\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"0.5\",\"min\":\"0.01\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"vslider\",\"label\":\"Depth\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Depth\",\"index\":\"803028\",\"meta\":[{\"4\":\"\"},{\"midi\":\"ctrl 57\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"},{\"type\":\"vslider\",\"label\":\"Deviation\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Knobs/Deviation\",\"index\":\"835844\",\"meta\":[{\"6\":\"\"},{\"midi\":\"ctrl 58\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.001\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Chorus/Switches/Enable\",\"index\":\"524304\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 103\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"7\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"Knobs\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Damp\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Damp\",\"index\":\"835928\",\"meta\":[{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"RoomSize\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/RoomSize\",\"index\":\"835924\",\"meta\":[{\"midi\":\"ctrl 4\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"},{\"type\":\"vslider\",\"label\":\"Wet\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Knobs/Wet\",\"index\":\"524300\",\"meta\":[{\"midi\":\"ctrl 79\"},{\"style\":\"knob\"}],\"init\":\"0.3333\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.025\"}]},{\"type\":\"vgroup\",\"label\":\"Switches\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Enable\",\"address\":\"/virtualAnalogWithEffectsForBrowser_effect/Effects/Reverb/Switches/Enable\",\"index\":\"524296\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 104\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]}]}]}]}]}";
}
function getBase64Codeeffect() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0Cv4CAgAAFA2VudgZtZW1vcnkCAAEDZW52BV9jb3NmAAIDZW52BV9leHBmAAMDZW52BV9wb3dmAA8DZW52BV9zaW5mABEDj4CAgAAOAAEEBQYHCAkKCwwNDhAHsYGAgAALB2NvbXB1dGUABQxnZXROdW1JbnB1dHMABg1nZXROdW1PdXRwdXRzAAcNZ2V0UGFyYW1WYWx1ZQAIDWdldFNhbXBsZVJhdGUACQRpbml0AAoNaW5zdGFuY2VDbGVhcgALEWluc3RhbmNlQ29uc3RhbnRzAAwMaW5zdGFuY2VJbml0AA0aaW5zdGFuY2VSZXNldFVzZXJJbnRlcmZhY2UADg1zZXRQYXJhbVZhbHVlABEKieaAgAAO0IKAgAABBH9BACEDQQAhBUEAIQJBACECA0ACQCAAQfzLNyACQQJ0ampBADYCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAIABB/Ms3aiAAQYDMN2ooAgBBAWo2AgAgAEEAIANBAnRqakPbD8k4IABB/Ms3aigCAEF/arKUEAA4AgAgAEGAzDdqIABB/Ms3aigCADYCACADQQFqIQMgA0GAgARIBEAMAgwBCwsLQQAhBEEAIQQDQAJAIABBhMw3IARBAnRqakEANgIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkAgAEGEzDdqIABBiMw3aigCAEEBajYCACAAQYCAECAFQQJ0ampD2w/JOCAAQYTMN2ooAgBBf2qylBADOAIAIABBiMw3aiAAQYTMN2ooAgA2AgAgBUEBaiEFIAVBgIAESARADAIMAQsLCwuWw4CAAAIhf319QQAhBEEAIQVBACEGQQAhB0EAIQhDAAAAACElQQAhCUEAIQpDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStBACELQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkEAIQxDAAAAACEzQwAAAAAhNEMAAAAAITVDAAAAACE2QwAAAAAhN0MAAAAAIThDAAAAACE5QwAAAAAhOkMAAAAAITtDAAAAACE8QwAAAAAhPUEAIQ1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQQAhDkMAAAAAIUtBACEPQQAhEEEAIRFDAAAAACFMQwAAAAAhTUMAAAAAIU5DAAAAACFPQQAhEkMAAAAAIVBBACETQQAhFEEAIRVDAAAAACFRQwAAAAAhUkMAAAAAIVNDAAAAACFUQwAAAAAhVUMAAAAAIVZDAAAAACFXQwAAAAAhWEMAAAAAIVlBACEWQwAAAAAhWkEAIRdBACEYQQAhGUMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRDAAAAACFlQQAhGkMAAAAAIWZDAAAAACFnQwAAAAAhaEMAAAAAIWlBACEbQwAAAAAhakMAAAAAIWtDAAAAACFsQwAAAAAhbUMAAAAAIW5BACEcQwAAAAAhb0MAAAAAIXBDAAAAACFxQwAAAAAhckMAAAAAIXNBACEdQwAAAAAhdEEAIR5DAAAAACF1QwAAAAAhdkMAAAAAIXdBACEfQwAAAAAheEEAISBDAAAAACF5QwAAAAAhekMAAAAAIXtBACEhQwAAAAAhfEEAISJDAAAAACF9QwAAAAAhfkMAAAAAIX9BACEjQwAAAAAhgAFBACEkQwAAAAAhgQFDAAAAACGCAUMAAAAAIYMBQwAAAAAhhAFDAAAAACGFAUMAAAAAIYYBQwAAAAAhhwFDAAAAACGIAUMAAAAAIYkBQwAAAAAhigFDAAAAACGLAUMAAAAAIYwBQwAAAAAhjQFDAAAAACGOAUMAAAAAIY8BQwAAAAAhkAFDAAAAACGRAUMAAAAAIZIBQwAAAAAhkwFDAAAAACGUAUMAAAAAIZUBQwAAAAAhlgFDAAAAACGXAUMAAAAAIZgBQwAAAAAhmQFDAAAAACGaAUMAAAAAIZsBQwAAAAAhnAFDAAAAACGdAUMAAAAAIZ4BQwAAAAAhnwFDAAAAACGgAUMAAAAAIaEBIAJBAGooAgAhBCACQQRqKAIAIQUgA0EAaigCACEGIANBBGooAgAhB0EBIABBiIAgaioCAKhrIQggAEGMgCBqKgIAISVBASAAQZCAIGoqAgCoayEJQQEgAEGUgCBqKgIAqGshCiAAQZiAIGoqAgAhJiAAQayAIGoqAgAgAEGwgCBqKgIAlCEnQwAAAD9DAACAPyAmk5QhKCAAQayAIGoqAgAgAEHYgCBqKgIAlCEpQwAAAEBDAAAAAEMk779AIABB5IAgaioCAJSTEAIhKkMAAIA/ICqTIStDAACAPyAAQeiAIGoqAgCTqCELIABB7IAgaioCACEsIABB9IAwaioCACEtQwAAAAAgAEH4gDBqKgIAIC2VkxABQwAAAABD5zAUPiAtlEMAAAAAXhshLiAAQaCAIGoqAgAgAEH8gDBqKgIAlCEvQwAAgD8gLpMhMCAvIDCUITEgAEGYgTBqKgIAIDCUITIgAEGsgTBqKgIAqCEMIABBrIAgaioCACAAQbCBMGoqAgCUITMgAEGsgCBqKgIAIABBvIEwaioCAJQhNEMAYPpEIABByIExaioCAJQhNSAAQayAIGoqAgAgAEHUgTFqKgIAlCE2Q28SA0EgAEHggTNqKgIAlCE3IABBrIAgaioCACAAQfCBM2oqAgCUIThDbxKDOCAAQYSCM2oqAgCUITlDKVyPPiAAQdSCM2oqAgCUQzMzMz+SITpDzczMPiAAQdiCM2oqAgCUITtDAACAPyA7kyE8QwAAgD8gJZMhPUEAIQ0DQAJAIABBgIAgakEBNgIAICcgAEGogCBqKgIAIABBuIAgaioCAJSSIT4gAEG0gCBqID5DAAAAACA+vEGAgID8B3EbOAIAIABBwIAgaioCACAAQaSAIGoqAgAgAEG4gCBqKgIAlJIhPyA/ID+OkyFAIABBvIAgaiBAQwAAAAAgQLxBgICA/AdxGzgCACAAQcSAIGoqAgAgAEG0gCBqKgIAlCFBIEEQAyFCIEEQACFDIABB1IAgaioCACBClCAAQcyAIGoqAgAgQ5SSIUQgAEHIgCBqIERDAAAAACBEvEGAgID8B3EbOAIAQQEgAEGEgCBqKAIAa7IgAEHUgCBqKgIAIEOUkiBCIABBzIAgaioCAJSTIUUgAEHQgCBqIEVDAAAAACBFvEGAgID8B3EbOAIAICZDAACAP0MAAABAIABBvIAgaioCAJRDAACAv5KLk5QgKCAAQciAIGoqAgBDAACAP5KUkiFGIAQgDWoqAgAgBSANaioCAJIhRyApIABBqIAgaioCACAAQeCAIGoqAgCUkiFIIABB3IAgaiBIQwAAAAAgSLxBgICA/AdxGzgCACArIABB9IAgIABB8IAgaigCAEEBa0H//wNxQQJ0amoqAgCUICpDAAAAACBHIAsbICwgAEGMgTBqKgIAlJKUkiFJIABB9IAgIABB8IAgaigCAEH//wNxQQJ0amogSUMAAAAAIEm8QYCAgPwHcRs4AgAgAEGEgTBqKgIAIC6UIDGSIUogAEGAgTBqIEpDAAAAACBKvEGAgID8B3EbOAIAIABBgIEwaioCAKghDiAAQYCBMGoqAgCOIUsgDkEBaiEPIA5BAEEAIA5IGyEQIA9BAEEAIA9IGyERIABB9IAgIABB8IAgaigCAEGBgAIgEEGBgAIgEEgba0H//wNxQQJ0amoqAgAgS0MAAIA/IABBgIEwaioCAJOSlCAAQfSAICAAQfCAIGooAgBBgYACIBFBgYACIBFIG2tB//8DcUECdGpqKgIAIABBgIEwaioCACBLk5SSIUwgAEGIgTBqIExDAAAAACBMvEGAgID8B3EbOAIAIC4gAEGUgTBqKgIAlCFNIABBkIEwaiBNQwAAAAAgTbxBgICA/AdxGzgCACAuIABBoIEwaioCAJQgMpIhTiAAQZyBMGogTkMAAAAAIE68QYCAgPwHcRs4AgAgLiAAQaiBMGoqAgCUIC8gMCAAQZCBMGoqAgBDAAAAQBACIABBnIEwaioCAJJDAACAP5KUlJIhTyAAQaSBMGogT0MAAAAAIE+8QYCAgPwHcRs4AgAgAEGkgTBqKgIAqCESIABBpIEwaioCAI4hUCASQQFqIRMgEkEAQQAgEkgbIRQgE0EAQQAgE0gbIRUgAEH0gCAgAEHwgCBqKAIAQYGAAiAUQYGAAiAUSBtrQf//A3FBAnRqaioCACBQQwAAgD8gAEGkgTBqKgIAk5KUIABB9IAgIABB8IAgaigCAEGBgAIgFUGBgAIgFUgba0H//wNxQQJ0amoqAgAgAEGkgTBqKgIAIFCTlJIhUSBRQwAAAAAgUbxBgICA/AdxGyFSIEcgAEHcgCBqKgIAIFKUkiFTQwAAAAAgUyAKGyFUIDMgAEGogCBqKgIAIABBuIEwaioCAJSSIVUgAEG0gTBqIFVDAAAAACBVvEGAgID8B3EbOAIAIDQgAEGogCBqKgIAIABBxIEwaioCAJSSIVYgAEHAgTBqIFZDAAAAACBWvEGAgID8B3EbOAIAIABB0IExaioCACAAQcCBMGoqAgCUIFSTIVcgAEHIgTAgAEHwgCBqKAIAQf8fcUECdGpqIFc4AgAgNSBGlCFYIFhDAAAwQpIhWSBZqCEWIFmOIVogFkEBaiEXIBZBAEEAIBZIGyEYIBdBAEEAIBdIGyEZIABByIEwIABB8IAgaigCAEGBECAYQYEQIBhIG2tB/x9xQQJ0amoqAgAgWkMAACzCIFiTkpQgWEMAADBCIFqTkiAAQciBMCAAQfCAIGooAgBBgRAgGUGBECAZSBtrQf8fcUECdGpqKgIAlJIhWyAAQcyBMWogW0MAAAAAIFu8QYCAgPwHcRs4AgAgUyBUQwAAgL8gAEG0gTBqKgIAlCAAQbSBMGoqAgAgDBsgAEHMgTFqKgIAlJIgAEG0gTBqKgIAQwAAgD+SlSAKGyFcQwAAAAAgXCAJGyFdIDYgAEGogCBqKgIAIABB3IExaioCAJSSIV4gAEHYgTFqIF5DAAAAACBevEGAgID8B3EbOAIAIF0gAEHYgTFqKgIAlCFfIABB4IExIABB8IAgaigCAEH/P3FBAnRqaiBfOAIAIDdDd75/PyAAQeiBM2oqAgCUkiFgIABB5IEzaiBgQwAAAAAgYLxBgICA/AdxGzgCACA4IABBqIAgaioCACAAQfiBM2oqAgCUkiFhIABB9IEzaiBhQwAAAAAgYbxBgICA/AdxGzgCACAAQYCCM2oqAgAgAEHsgTNqKgIAIABB9IEzaioCAJSSIWIgYiBijpMhYyAAQfyBM2ogY0MAAAAAIGO8QYCAgPwHcRs4AgBDd75/PyAAQYyCM2oqAgCUIDkgAEHkgTNqKgIAlJIhZCAAQYiCM2ogZEMAAAAAIGS8QYCAgPwHcRs4AgBDAAAARkMAAMA+IABB5IEzaioCAJQgAEEAQwAAgEcgAEH8gTNqKgIAlKhBAnRqaioCACAAQYiCM2oqAgCUkpYhZSBlqCEaIBqyIWYgAEGUgjNqKgIAIABBpIAgaioCACAAQfSBM2oqAgCUkiFnIGcgZ46TIWggAEGQgjNqIGhDAAAAACBovEGAgID8B3EbOAIAQwAAAEZDAAAAPiAAQeSBM2oqAgCUIABBgIAQQwAAgEcgAEGQgjNqKgIAlKhBAnRqaioCACAAQYiCM2oqAgCUkpYhaSBpqCEbIBuyIWpDAACAPyAAQdiBMWoqAgCTIF2UIWsgAEGggjNqKgIAIABBmIIzaioCACAAQfSBM2oqAgCUkiFsIGwgbI6TIW0gAEGcgjNqIG1DAAAAACBtvEGAgID8B3EbOAIAQwAAAEZDAABgPyAAQeSBM2oqAgCUQwAAAAAgAEEAQwAAgEcgAEGcgjNqKgIAlKhBAnRqaioCAJMgAEGIgjNqKgIAlJKWIW4gbqghHCAcsiFvIFxD8wQ1PyAAQeCBMSAAQfCAIGooAgAgGkH/P3FrQf8/cUECdGpqKgIAIGZDAACAPyBlk5KUIGUgZpMgAEHggTEgAEHwgCBqKAIAIBpBAWpB/z9xa0H/P3FBAnRqaioCAJSSlCBpIGqTIABB4IExIABB8IAgaigCACAbQQFqQf8/cWtB/z9xQQJ0amoqAgCUIGsgAEHggTEgAEHwgCBqKAIAIBtB/z9xa0H/P3FBAnRqaioCACBqQwAAgD8gaZOSlJKSkkPzBDU/IABB4IExIABB8IAgaigCACAcQf8/cWtB/z9xQQJ0amoqAgAgb0MAAIA/IG6TkpQgbiBvkyAAQeCBMSAAQfCAIGooAgAgHEEBakH/P3FrQf8/cUECdGpqKgIAlJKUkyAJGyFwQwAAAAAgcCAIGyFxIABBrIIzaioCACAAQaSCM2oqAgAgAEH0gTNqKgIAlJIhciByIHKOkyFzIABBqIIzaiBzQwAAAAAgc7xBgICA/AdxGzgCAEMAAIBHIABBqIIzaioCAJSoIR1DAAAARkMAAIA+IABB5IEzaioCAJRD8wQ1PyAAQYCAECAdQQJ0amoqAgCUQ/MENT8gAEEAIB1BAnRqaioCAJSSIABBiIIzaioCAJSSliF0IHSoIR4gHrIhdSAAQbiCM2oqAgAgAEGwgjNqKgIAIABB9IEzaioCAJSSIXYgdiB2jpMhdyAAQbSCM2ogd0MAAAAAIHe8QYCAgPwHcRs4AgBDAACARyAAQbSCM2oqAgCUqCEfQwAAAEZD8wQ1PyAAQQAgH0ECdGpqKgIAlEPzBDU/IABBgIAQIB9BAnRqaioCAJSTIABBiIIzaioCAJRDAAAAPyAAQeSBM2oqAgCUkpYheCB4qCEgICCyIXkgAEHEgjNqKgIAIABBvIIzaioCACAAQfSBM2oqAgCUkiF6IHogeo6TIXsgAEHAgjNqIHtDAAAAACB7vEGAgID8B3EbOAIAQwAAgEcgAEHAgjNqKgIAlKghIUMAAABGQwAAQD8gAEHkgTNqKgIAlEMAAAAAQ/MENT8gAEGAgBAgIUECdGpqKgIAlEPzBDU/IABBACAhQQJ0amoqAgCUkpMgAEGIgjNqKgIAlJKWIXwgfKghIiAisiF9IABB0IIzaioCACAAQciCM2oqAgAgAEH0gTNqKgIAlJIhfiB+IH6OkyF/IABBzIIzaiB/QwAAAAAgf7xBgICA/AdxGzgCAEMAAIBHIABBzIIzaioCAJSoISNDAAAARkPzBDU/IABBgIAQICNBAnRqaioCAJRD8wQ1PyAAQQAgI0ECdGpqKgIAlJMgAEGIgjNqKgIAlCAAQeSBM2oqAgCSliGAASCAAaghJCAksiGBASBcIGtDFe/DPiAAQeCBMSAAQfCAIGooAgAgHkH/P3FrQf8/cUECdGpqKgIAIHVDAACAPyB0k5KUIHQgdZMgAEHggTEgAEHwgCBqKAIAIB5BAWpB/z9xa0H/P3FBAnRqaioCAJSSlENeg2w/IABB4IExIABB8IAgaigCACAgQf8/cWtB/z9xQQJ0amoqAgAgeUMAAIA/IHiTkpQgeCB5kyAAQeCBMSAAQfCAIGooAgAgIEEBakH/P3FrQf8/cUECdGpqKgIAlJIgAEHggTEgAEHwgCBqKAIAICJB/z9xa0H/P3FBAnRqaioCACB9QwAAgD8gfJOSlCB8IH2TIABB4IExIABB8IAgaigCACAiQQFqQf8/cWtB/z9xQQJ0amoqAgCUkpKUkkMV78M+IABB4IExIABB8IAgaigCACAkQf8/cWtB/z9xQQJ0amoqAgAggQFDAACAPyCAAZOSlCCAASCBAZMgAEHggTEgAEHwgCBqKAIAICRBAWpB/z9xa0H/P3FBAnRqaioCAJSSlJKTIAkbIYIBQwAAAAAgggEgCBshgwFDj8J1PCBxIIMBkpQhhAEgOyAAQeCCM2oqAgCUIDwgAEHowjNqKgIAlJIhhQEgAEHcgjNqIIUBQwAAAAAghQG8QYCAgPwHcRs4AgAgAEHkgjMgAEHwgCBqKAIAQf8PcUECdGpqIIQBIDogAEHcgjNqKgIAlJI4AgAgAEHkgjMgAEHwgCBqKAIAQdEMa0H/D3FBAnRqaioCACGGASAAQeTCM2oghgFDAAAAACCGAbxBgICA/AdxGzgCACA7IABB8MIzaioCAJQgPCAAQfiCNGoqAgCUkiGHASAAQezCM2oghwFDAAAAACCHAbxBgICA/AdxGzgCACAAQfTCMyAAQfCAIGooAgBB/w9xQQJ0amoghAEgOiAAQezCM2oqAgCUkjgCACAAQfTCMyAAQfCAIGooAgBBlQxrQf8PcUECdGpqKgIAIYgBIABB9II0aiCIAUMAAAAAIIgBvEGAgID8B3EbOAIAIDsgAEGAgzRqKgIAlCA8IABBiMM0aioCAJSSIYkBIABB/II0aiCJAUMAAAAAIIkBvEGAgID8B3EbOAIAIABBhIM0IABB8IAgaigCAEH/D3FBAnRqaiCEASA6IABB/II0aioCAJSSOAIAIABBhIM0IABB8IAgaigCAEHTC2tB/w9xQQJ0amoqAgAhigEgAEGEwzRqIIoBQwAAAAAgigG8QYCAgPwHcRs4AgAgOyAAQZDDNGoqAgCUIDwgAEGYgzVqKgIAlJIhiwEgAEGMwzRqIIsBQwAAAAAgiwG8QYCAgPwHcRs4AgAgAEGUwzQgAEHwgCBqKAIAQf8PcUECdGpqIIQBIDogAEGMwzRqKgIAlJI4AgAgAEGUwzQgAEHwgCBqKAIAQY4La0H/D3FBAnRqaioCACGMASAAQZSDNWogjAFDAAAAACCMAbxBgICA/AdxGzgCACA7IABBoIM1aioCAJQgPCAAQajDNWoqAgCUkiGNASAAQZyDNWogjQFDAAAAACCNAbxBgICA/AdxGzgCACAAQaSDNSAAQfCAIGooAgBB/w9xQQJ0amoghAEgOiAAQZyDNWoqAgCUkjgCACAAQaSDNSAAQfCAIGooAgBBzAprQf8PcUECdGpqKgIAIY4BIABBpMM1aiCOAUMAAAAAII4BvEGAgID8B3EbOAIAIDsgAEGwwzVqKgIAlCA8IABBuIM2aioCAJSSIY8BIABBrMM1aiCPAUMAAAAAII8BvEGAgID8B3EbOAIAIABBtMM1IABB8IAgaigCAEH/D3FBAnRqaiCEASA6IABBrMM1aioCAJSSOAIAIABBtMM1IABB8IAgaigCAEH9CWtB/w9xQQJ0amoqAgAhkAEgAEG0gzZqIJABQwAAAAAgkAG8QYCAgPwHcRs4AgAgOyAAQcCDNmoqAgCUIDwgAEHIwzZqKgIAlJIhkQEgAEG8gzZqIJEBQwAAAAAgkQG8QYCAgPwHcRs4AgAgAEHEgzYgAEHwgCBqKAIAQf8PcUECdGpqIIQBIDogAEG8gzZqKgIAlJI4AgAgAEHEgzYgAEHwgCBqKAIAQaQJa0H/D3FBAnRqaioCACGSASAAQcTDNmogkgFDAAAAACCSAbxBgICA/AdxGzgCACA7IABB0MM2aioCAJQgPCAAQdiDN2oqAgCUkiGTASAAQczDNmogkwFDAAAAACCTAbxBgICA/AdxGzgCACAAQdTDNiAAQfCAIGooAgBB/w9xQQJ0amogOiAAQczDNmoqAgCUIIQBkjgCACAAQdTDNiAAQfCAIGooAgBB3AhrQf8PcUECdGpqKgIAIZQBIABB1IM3aiCUAUMAAAAAIJQBvEGAgID8B3EbOAIAIABB3IM3IABB8IAgaigCAEH/B3FBAnRqaiAAQeTCM2oqAgAgAEH0gjRqKgIAIABBhMM0aioCACAAQZSDNWoqAgAgAEGkwzVqKgIAIABBtIM2aioCACAAQcTDNmoqAgBDAAAAPyAAQeCjN2oqAgCUIABB1IM3aioCAJKSkpKSkpKSOAIAIABB3IM3IABB8IAgaigCAEGsBGtB/wdxQQJ0amoqAgAhlQEgAEHcozdqIJUBQwAAAAAglQG8QYCAgPwHcRs4AgAgAEHgozdqKgIAIABB1IM3aioCACAAQcTDNmoqAgCSIABBtIM2aioCAJIgAEGkwzVqKgIAkiAAQZSDNWoqAgCSIABBhMM0aioCAJIgAEH0gjRqKgIAkiAAQeTCM2oqAgCSkyGWASCWAUMAAAAAIJYBvEGAgID8B3EbIZcBIABB5KM3IABB8IAgaigCAEH/A3FBAnRqakMAAAA/IABB6LM3aioCAJQglwGSOAIAIABB5KM3IABB8IAgaigCAEG5A2tB/wNxQQJ0amoqAgAhmAEgAEHkszdqIJgBQwAAAAAgmAG8QYCAgPwHcRs4AgAgAEHoszdqKgIAIJcBkyGZASCZAUMAAAAAIJkBvEGAgID8B3EbIZoBIABB7LM3IABB8IAgaigCAEH/A3FBAnRqakMAAAA/IABB8MM3aioCAJQgmgGSOAIAIABB7LM3IABB8IAgaigCAEHVAmtB/wNxQQJ0amoqAgAhmwEgAEHswzdqIJsBQwAAAAAgmwG8QYCAgPwHcRs4AgAgAEHwwzdqKgIAIJoBkyGcASCcAUMAAAAAIJwBvEGAgID8B3EbIZ0BIABB9MM3IABB8IAgaigCAEH/AXFBAnRqakMAAAA/IABB+Ms3aioCAJQgnQGSOAIAIABB9MM3IABB8IAgaigCAEHhAWtB/wFxQQJ0amoqAgAhngEgAEH0yzdqIJ4BQwAAAAAgngG8QYCAgPwHcRs4AgAgAEH4yzdqKgIAIJ0BkyGfASCfAUMAAAAAIJ8BvEGAgID8B3EbIaABICUgoAGUIaEBIAYgDWogcCChASA9IHGUkiAIGzgCACAHIA1qIIIBIKEBID0ggwGUkiAIGzgCACAAQYSAIGogAEGAgCBqKAIANgIAIABBuIAgaiAAQbSAIGoqAgA4AgAgAEHAgCBqIABBvIAgaioCADgCACAAQcyAIGogAEHIgCBqKgIAOAIAIABB1IAgaiAAQdCAIGoqAgA4AgAgAEHggCBqIABB3IAgaioCADgCACAAQfCAIGogAEHwgCBqKAIAQQFqNgIAIABBhIEwaiAAQYCBMGoqAgA4AgAgAEGMgTBqIABBiIEwaioCADgCACAAQZSBMGogAEGQgTBqKgIAOAIAIABBoIEwaiAAQZyBMGoqAgA4AgAgAEGogTBqIABBpIEwaioCADgCACAAQbiBMGogAEG0gTBqKgIAOAIAIABBxIEwaiAAQcCBMGoqAgA4AgAgAEHQgTFqIABBzIExaioCADgCACAAQdyBMWogAEHYgTFqKgIAOAIAIABB6IEzaiAAQeSBM2oqAgA4AgAgAEH4gTNqIABB9IEzaioCADgCACAAQYCCM2ogAEH8gTNqKgIAOAIAIABBjIIzaiAAQYiCM2oqAgA4AgAgAEGUgjNqIABBkIIzaioCADgCACAAQaCCM2ogAEGcgjNqKgIAOAIAIABBrIIzaiAAQaiCM2oqAgA4AgAgAEG4gjNqIABBtIIzaioCADgCACAAQcSCM2ogAEHAgjNqKgIAOAIAIABB0IIzaiAAQcyCM2oqAgA4AgAgAEHggjNqIABB3IIzaioCADgCACAAQejCM2ogAEHkwjNqKgIAOAIAIABB8MIzaiAAQezCM2oqAgA4AgAgAEH4gjRqIABB9II0aioCADgCACAAQYCDNGogAEH8gjRqKgIAOAIAIABBiMM0aiAAQYTDNGoqAgA4AgAgAEGQwzRqIABBjMM0aioCADgCACAAQZiDNWogAEGUgzVqKgIAOAIAIABBoIM1aiAAQZyDNWoqAgA4AgAgAEGowzVqIABBpMM1aioCADgCACAAQbDDNWogAEGswzVqKgIAOAIAIABBuIM2aiAAQbSDNmoqAgA4AgAgAEHAgzZqIABBvIM2aioCADgCACAAQcjDNmogAEHEwzZqKgIAOAIAIABB0MM2aiAAQczDNmoqAgA4AgAgAEHYgzdqIABB1IM3aioCADgCACAAQeCjN2ogAEHcozdqKgIAOAIAIABB6LM3aiAAQeSzN2oqAgA4AgAgAEHwwzdqIABB7MM3aioCADgCACAAQfjLN2ogAEH0yzdqKgIAOAIAIA1BBGohDSANQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEECDwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC42AgIAAACAAQZyAIGooAgAPC46AgIAAACAAIAEQBCAAIAEQDQvGmYCAAAE8f0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBACEdQQAhHkEAIR9BACEgQQAhIUEAISJBACEjQQAhJEEAISVBACEmQQAhJ0EAIShBACEpQQAhKkEAIStBACEsQQAhLUEAIS5BACEvQQAhMEEAITFBACEyQQAhM0EAITRBACE1QQAhNkEAITdBACE4QQAhOUEAITpBACE7QQAhPEEAIQEDQAJAIABBgIAgIAFBAnRqakEANgIAIAFBAWohASABQQJIBEAMAgwBCwsLQQAhAgNAAkAgAEG0gCAgAkECdGpqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBACEDA0ACQCAAQbyAICADQQJ0ampDAAAAADgCACADQQFqIQMgA0ECSARADAIMAQsLC0EAIQQDQAJAIABByIAgIARBAnRqakMAAAAAOAIAIARBAWohBCAEQQJIBEAMAgwBCwsLQQAhBQNAAkAgAEHQgCAgBUECdGpqQwAAAAA4AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQCAAQdyAICAGQQJ0ampDAAAAADgCACAGQQFqIQYgBkECSARADAIMAQsLCyAAQfCAIGpBADYCAEEAIQcDQAJAIABB9IAgIAdBAnRqakMAAAAAOAIAIAdBAWohByAHQYCABEgEQAwCDAELCwtBACEIA0ACQCAAQYCBMCAIQQJ0ampDAAAAADgCACAIQQFqIQggCEECSARADAIMAQsLC0EAIQkDQAJAIABBiIEwIAlBAnRqakMAAAAAOAIAIAlBAWohCSAJQQJIBEAMAgwBCwsLQQAhCgNAAkAgAEGQgTAgCkECdGpqQwAAAAA4AgAgCkEBaiEKIApBAkgEQAwCDAELCwtBACELA0ACQCAAQZyBMCALQQJ0ampDAAAAADgCACALQQFqIQsgC0ECSARADAIMAQsLC0EAIQwDQAJAIABBpIEwIAxBAnRqakMAAAAAOAIAIAxBAWohDCAMQQJIBEAMAgwBCwsLQQAhDQNAAkAgAEG0gTAgDUECdGpqQwAAAAA4AgAgDUEBaiENIA1BAkgEQAwCDAELCwtBACEOA0ACQCAAQcCBMCAOQQJ0ampDAAAAADgCACAOQQFqIQ4gDkECSARADAIMAQsLC0EAIQ8DQAJAIABByIEwIA9BAnRqakMAAAAAOAIAIA9BAWohDyAPQYAgSARADAIMAQsLC0EAIRADQAJAIABBzIExIBBBAnRqakMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkAgAEHYgTEgEUECdGpqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQCAAQeCBMSASQQJ0ampDAAAAADgCACASQQFqIRIgEkGAwABIBEAMAgwBCwsLQQAhEwNAAkAgAEHkgTMgE0ECdGpqQwAAAAA4AgAgE0EBaiETIBNBAkgEQAwCDAELCwtBACEUA0ACQCAAQfSBMyAUQQJ0ampDAAAAADgCACAUQQFqIRQgFEECSARADAIMAQsLC0EAIRUDQAJAIABB/IEzIBVBAnRqakMAAAAAOAIAIBVBAWohFSAVQQJIBEAMAgwBCwsLQQAhFgNAAkAgAEGIgjMgFkECdGpqQwAAAAA4AgAgFkEBaiEWIBZBAkgEQAwCDAELCwtBACEXA0ACQCAAQZCCMyAXQQJ0ampDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAIABBnIIzIBhBAnRqakMAAAAAOAIAIBhBAWohGCAYQQJIBEAMAgwBCwsLQQAhGQNAAkAgAEGogjMgGUECdGpqQwAAAAA4AgAgGUEBaiEZIBlBAkgEQAwCDAELCwtBACEaA0ACQCAAQbSCMyAaQQJ0ampDAAAAADgCACAaQQFqIRogGkECSARADAIMAQsLC0EAIRsDQAJAIABBwIIzIBtBAnRqakMAAAAAOAIAIBtBAWohGyAbQQJIBEAMAgwBCwsLQQAhHANAAkAgAEHMgjMgHEECdGpqQwAAAAA4AgAgHEEBaiEcIBxBAkgEQAwCDAELCwtBACEdA0ACQCAAQdyCMyAdQQJ0ampDAAAAADgCACAdQQFqIR0gHUECSARADAIMAQsLC0EAIR4DQAJAIABB5IIzIB5BAnRqakMAAAAAOAIAIB5BAWohHiAeQYAQSARADAIMAQsLC0EAIR8DQAJAIABB5MIzIB9BAnRqakMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkAgAEHswjMgIEECdGpqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQCAAQfTCMyAhQQJ0ampDAAAAADgCACAhQQFqISEgIUGAEEgEQAwCDAELCwtBACEiA0ACQCAAQfSCNCAiQQJ0ampDAAAAADgCACAiQQFqISIgIkECSARADAIMAQsLC0EAISMDQAJAIABB/II0ICNBAnRqakMAAAAAOAIAICNBAWohIyAjQQJIBEAMAgwBCwsLQQAhJANAAkAgAEGEgzQgJEECdGpqQwAAAAA4AgAgJEEBaiEkICRBgBBIBEAMAgwBCwsLQQAhJQNAAkAgAEGEwzQgJUECdGpqQwAAAAA4AgAgJUEBaiElICVBAkgEQAwCDAELCwtBACEmA0ACQCAAQYzDNCAmQQJ0ampDAAAAADgCACAmQQFqISYgJkECSARADAIMAQsLC0EAIScDQAJAIABBlMM0ICdBAnRqakMAAAAAOAIAICdBAWohJyAnQYAQSARADAIMAQsLC0EAISgDQAJAIABBlIM1IChBAnRqakMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkAgAEGcgzUgKUECdGpqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQCAAQaSDNSAqQQJ0ampDAAAAADgCACAqQQFqISogKkGAEEgEQAwCDAELCwtBACErA0ACQCAAQaTDNSArQQJ0ampDAAAAADgCACArQQFqISsgK0ECSARADAIMAQsLC0EAISwDQAJAIABBrMM1ICxBAnRqakMAAAAAOAIAICxBAWohLCAsQQJIBEAMAgwBCwsLQQAhLQNAAkAgAEG0wzUgLUECdGpqQwAAAAA4AgAgLUEBaiEtIC1BgBBIBEAMAgwBCwsLQQAhLgNAAkAgAEG0gzYgLkECdGpqQwAAAAA4AgAgLkEBaiEuIC5BAkgEQAwCDAELCwtBACEvA0ACQCAAQbyDNiAvQQJ0ampDAAAAADgCACAvQQFqIS8gL0ECSARADAIMAQsLC0EAITADQAJAIABBxIM2IDBBAnRqakMAAAAAOAIAIDBBAWohMCAwQYAQSARADAIMAQsLC0EAITEDQAJAIABBxMM2IDFBAnRqakMAAAAAOAIAIDFBAWohMSAxQQJIBEAMAgwBCwsLQQAhMgNAAkAgAEHMwzYgMkECdGpqQwAAAAA4AgAgMkEBaiEyIDJBAkgEQAwCDAELCwtBACEzA0ACQCAAQdTDNiAzQQJ0ampDAAAAADgCACAzQQFqITMgM0GAEEgEQAwCDAELCwtBACE0A0ACQCAAQdSDNyA0QQJ0ampDAAAAADgCACA0QQFqITQgNEECSARADAIMAQsLC0EAITUDQAJAIABB3IM3IDVBAnRqakMAAAAAOAIAIDVBAWohNSA1QYAISARADAIMAQsLC0EAITYDQAJAIABB3KM3IDZBAnRqakMAAAAAOAIAIDZBAWohNiA2QQJIBEAMAgwBCwsLQQAhNwNAAkAgAEHkozcgN0ECdGpqQwAAAAA4AgAgN0EBaiE3IDdBgARIBEAMAgwBCwsLQQAhOANAAkAgAEHkszcgOEECdGpqQwAAAAA4AgAgOEEBaiE4IDhBAkgEQAwCDAELCwtBACE5A0ACQCAAQeyzNyA5QQJ0ampDAAAAADgCACA5QQFqITkgOUGABEgEQAwCDAELCwtBACE6A0ACQCAAQezDNyA6QQJ0ampDAAAAADgCACA6QQFqITogOkECSARADAIMAQsLC0EAITsDQAJAIABB9MM3IDtBAnRqakMAAAAAOAIAIDtBAWohOyA7QYACSARADAIMAQsLC0EAITwDQAJAIABB9Ms3IDxBAnRqakMAAAAAOAIAIDxBAWohPCA8QQJIBEAMAgwBCwsLC9WCgIAAACAAQZyAIGogATYCACAAQaCAIGpDAIA7SEMAAIA/IABBnIAgaigCALKXljgCACAAQaSAIGpDAACAPyAAQaCAIGoqAgCVOAIAIABBqIAgakMAAAAAQ0d9MEIgAEGggCBqKgIAlZMQATgCACAAQayAIGpDAACAPyAAQaiAIGoqAgCTOAIAIABBxIAgakPbD8lAIABBoIAgaioCAJU4AgAgAEH4gDBqQ7ge3UAgAEGggCBqKgIAlTgCACAAQeyBM2pDq6qqPiAAQaCAIGoqAgCVOAIAIABBmIIzakMlSRI+IABBoIAgaioCAJU4AgAgAEGkgjNqQwAAAD8gAEGggCBqKgIAlTgCACAAQbCCM2pDAACAPiAAQaCAIGoqAgCVOAIAIABBvIIzakOrqio+IABBoIAgaioCAJU4AgAgAEHIgjNqQwAAAD4gAEGggCBqKgIAlTgCAAuQgICAAAAgACABEAwgABAOIAAQCwvbgoCAAAAgAEGIgCBqQwAAAAA4AgAgAEGMgCBqQ0ymqj44AgAgAEGQgCBqQwAAAAA4AgAgAEGUgCBqQwAAAAA4AgAgAEGYgCBqQwAAAAA4AgAgAEGwgCBqQwAAAD84AgAgAEHYgCBqQwAAAD84AgAgAEHkgCBqQwAAAAA4AgAgAEHogCBqQwAAAAA4AgAgAEHsgCBqQ5qZmT44AgAgAEH0gDBqQwAAAD84AgAgAEH8gDBqQwAAAD84AgAgAEGYgTBqQwAAAAA4AgAgAEGsgTBqQwAAAAA4AgAgAEGwgTBqQwAAQD84AgAgAEG8gTBqQwAAAAA4AgAgAEHIgTFqQ65HYT44AgAgAEHUgTFqQwAAAD84AgAgAEHggTNqQwAAAD84AgAgAEHwgTNqQwAAAD84AgAgAEGEgjNqQwAAAD84AgAgAEHUgjNqQwAAAD84AgAgAEHYgjNqQwAAAD84AgALjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLpM6AgAABAEEAC51OeyJuYW1lIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QiLCJmaWxlbmFtZSI6InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0IiwidmVyc2lvbiI6IjIuMTEuNSIsImNvbXBpbGVfb3B0aW9ucyI6Ii1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6WyIvRG9jdW1lbnRzL2ZhdXN0d2Vic2l0ZS1naXRodWIvbW9kdWxlcy13b3JrbGV0L3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlci5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L211c2ljLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JvdXRlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L25vaXNlcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2VudmVsb3Blcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiI5MTA4NjAiLCJpbnB1dHMiOiIyIiwib3V0cHV0cyI6IjIiLCJtZXRhIjpbeyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QifSx7ImZpbHRlci5saWIvYXV0aG9yIjoiSnVsaXVzIE8uIFNtaXRoIChqb3MgYXQgY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiZmlsdGVyLmxpYi9jb3B5cmlnaHQiOiJKdWxpdXMgTy4gU21pdGggSUlJIn0seyJmaWx0ZXIubGliL2RlcHJlY2F0ZWQiOiJUaGlzIGxpYnJhcnkgaXMgZGVwcmVjYXRlZCBhbmQgaXMgbm90IG1haW50YWluZWQgYW55bW9yZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIEF1Z3VzdCAyMDE3LiJ9LHsiZmlsdGVyLmxpYi9saWNlbnNlIjoiU1RLLTQuMyJ9LHsiZmlsdGVyLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVyIExpYnJhcnkifSx7ImZpbHRlci5saWIvcmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9maWx0ZXJzLyJ9LHsiZmlsdGVyLmxpYi92ZXJzaW9uIjoiMS4yOSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aC5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGgubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRoLmxpYi9kZXByZWNhdGVkIjoiVGhpcyBsaWJyYXJ5IGlzIGRlcHJlY2F0ZWQgYW5kIGlzIG5vdCBtYWludGFpbmVkIGFueW1vcmUuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBBdWd1c3QgMjAxNy4ifSx7Im1hdGgubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRoLmxpYi9uYW1lIjoiTWF0aCBMaWJyYXJ5In0seyJtYXRoLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im11c2ljLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibXVzaWMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtdXNpYy5saWIvZGVwcmVjYXRlZCI6IlRoaXMgbGlicmFyeSBpcyBkZXByZWNhdGVkIGFuZCBpcyBub3QgbWFpbnRhaW5lZCBhbnltb3JlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gQXVndXN0IDIwMTcuIn0seyJtdXNpYy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im11c2ljLmxpYi9uYW1lIjoiTXVzaWMgTGlicmFyeSJ9LHsibXVzaWMubGliL3ZlcnNpb24iOiIxLjAifSx7Im5hbWUiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9hdXRob3IiOiJHcmFtZSJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvY29weXJpZ2h0IjoiKGMpIEdSQU1FIDIwMDYgYW5kIE1vRm9ydGUgSW5jLiAyMDE3In0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9kZXNpZ25lciI6IlJvYmVydCBBLiBNb29nIn0seyJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyLmRzcC9pbnRlcmZhY2UiOiJTbWFydEtleWJvYXJkeyAgICAgJ051bWJlciBvZiBLZXlib2FyZHMnOicyJywgICAgICdLZXlib2FyZCAwIC0gTnVtYmVyIG9mIEtleXMnOicxMycsICAgICAnS2V5Ym9hcmQgMSAtIE51bWJlciBvZiBLZXlzJzonMTMnLCAgICAgJ0tleWJvYXJkIDAgLSBMb3dlc3QgS2V5JzonNzInLCAgICAgJ0tleWJvYXJkIDEgLSBMb3dlc3QgS2V5JzonNjAnIH0ifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL2xpY2Vuc2UiOiJCU0QifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL25hbWUiOiJmcmVldmVyYiJ9LHsidmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlci5kc3AvcmVmZXJlbmNlIjoiaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZyZWV2ZXJiLmh0bWwifSx7InZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXIuZHNwL3ZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJ2aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdCIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJFZmZlY3RzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkVjaG8iLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiS25vYnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlbGF5IiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vS25vYnMvRGVsYXkiLCJpbmRleCI6Ijc4NjU1NiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDYxIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjAuNzQyMDM5Iiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2FycCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL1dhcnAiLCJpbmRleCI6Ijc4NjU4NCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDYyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiLTEiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVsYXlUNjAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9EZWxheVQ2MCIsImluZGV4IjoiNzg2NTQ4IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNjAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJGZWVkYmFjayIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9FY2hvL0tub2JzL0ZlZWRiYWNrIiwiaW5kZXgiOiI1MjQzOTYiLCJtZXRhIjpbeyIyIjoiIn0seyJtaWRpIjoiY3RybCAyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjMiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJBbXAiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9BbXAiLCJpbmRleCI6IjUyNDM3NiIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDc1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAwMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkZlZWRiYWNrU20iLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRWNoby9Lbm9icy9GZWVkYmFja1NtIiwiaW5kZXgiOiI1MjQzODgiLCJtZXRhIjpbeyI1IjoiIn0seyJtaWRpIjoiY3RybCA3NiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjFlLTA1In1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFbmFibGVFY2hvIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0VjaG8vU3dpdGNoZXMvRW5hYmxlRWNobyIsImluZGV4IjoiNTI0MzkyIiwibWV0YSI6W3siNyI6IiJ9LHsibWlkaSI6ImN0cmwgMTA1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkZsYW5nZXIiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiS25vYnMiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlbGF5IiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvRGVsYXkiLCJpbmRleCI6IjgwMzAxNiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDUwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjIyIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IlJhdGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9SYXRlIiwiaW5kZXgiOiI1MjQzMzYiLCJtZXRhIjpbeyIxIjoiIn0seyJtaWRpIjoiY3RybCA1MSJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRlcHRoIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL0ZsYW5nZXIvS25vYnMvRGVwdGgiLCJpbmRleCI6Ijc4NjYwOCIsIm1ldGEiOlt7IjMiOiIifSx7Im1pZGkiOiJjdHJsIDUyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjc1IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJGZWVkYmFjayIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL0tub2JzL0ZlZWRiYWNrIiwiaW5kZXgiOiI3ODY2MjAiLCJtZXRhIjpbeyI1IjoiIn0seyJtaWRpIjoiY3RybCA1MyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0wLjk5NSIsIm1heCI6IjAuOTkiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJXYXZlc2hhcGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvRmxhbmdlci9Lbm9icy9XYXZlc2hhcGUiLCJpbmRleCI6IjUyNDMxMiIsIm1ldGEiOlt7IjciOiIifSx7Im1pZGkiOiJjdHJsIDU0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifV19LHsidHlwZSI6InZncm91cCIsImxhYmVsIjoiU3dpdGNoZXMiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVuYWJsZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL1N3aXRjaGVzL0VuYWJsZSIsImluZGV4IjoiNTI0MzA4IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMTAyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkludmVydCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9GbGFuZ2VyL1N3aXRjaGVzL0ludmVydCIsImluZGV4IjoiNzg2NjA0IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNDkifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQ2hvcnVzIiwibWV0YSI6W3siNiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6Iktub2JzIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZWxheSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGVsYXkiLCJpbmRleCI6IjgzNTgwOCIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDU1In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiUmF0ZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9DaG9ydXMvS25vYnMvUmF0ZSIsImluZGV4IjoiODM1ODI0IiwibWV0YSI6W3siMSI6IiJ9LHsibWlkaSI6ImN0cmwgNTYifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMC41IiwibWluIjoiMC4wMSIsIm1heCI6IjciLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGVwdGgiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RlcHRoIiwiaW5kZXgiOiI4MDMwMjgiLCJtZXRhIjpbeyI0IjoiIn0seyJtaWRpIjoiY3RybCA1NyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEZXZpYXRpb24iLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RldmlhdGlvbiIsImluZGV4IjoiODM1ODQ0IiwibWV0YSI6W3siNiI6IiJ9LHsibWlkaSI6ImN0cmwgNTgifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDAxIn1dfSx7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IlN3aXRjaGVzIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFbmFibGUiLCJhZGRyZXNzIjoiL3ZpcnR1YWxBbmFsb2dXaXRoRWZmZWN0c0ZvckJyb3dzZXJfZWZmZWN0L0VmZmVjdHMvQ2hvcnVzL1N3aXRjaGVzL0VuYWJsZSIsImluZGV4IjoiNTI0MzA0IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMTAzIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJldmVyYiIsIm1ldGEiOlt7IjciOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJLbm9icyIsIm1ldGEiOlt7IjAiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRGFtcCIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvS25vYnMvRGFtcCIsImluZGV4IjoiODM1OTI4IiwibWV0YSI6W3sibWlkaSI6ImN0cmwgMyJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMjUifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJSb29tU2l6ZSIsImFkZHJlc3MiOiIvdmlydHVhbEFuYWxvZ1dpdGhFZmZlY3RzRm9yQnJvd3Nlcl9lZmZlY3QvRWZmZWN0cy9SZXZlcmIvS25vYnMvUm9vbVNpemUiLCJpbmRleCI6IjgzNTkyNCIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDI1In0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiV2V0IiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL1JldmVyYi9Lbm9icy9XZXQiLCJpbmRleCI6IjUyNDMwMCIsIm1ldGEiOlt7Im1pZGkiOiJjdHJsIDc5In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjMzMzMiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAyNSJ9XX0seyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJTd2l0Y2hlcyIsIm1ldGEiOlt7IjEiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRW5hYmxlIiwiYWRkcmVzcyI6Ii92aXJ0dWFsQW5hbG9nV2l0aEVmZmVjdHNGb3JCcm93c2VyX2VmZmVjdC9FZmZlY3RzL1JldmVyYi9Td2l0Y2hlcy9FbmFibGUiLCJpbmRleCI6IjUyNDI5NiIsIm1ldGEiOlt7IjAiOiIifSx7Im1pZGkiOiJjdHJsIDEwNCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifV19XX1dfV19XX0="; }

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


