// Initialize the map
var map = L.map('map').setView([20, 0], 2); // [Latitude, Longitude], Zoom level

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize the marker cluster group
var markers = L.markerClusterGroup();

// Define a red icon
var redIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});

// Define a blue icon
var blueIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-blue.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});

// Function to add a marker with a popup
function addMarker(lat, lng, popupText, icon = null) {
    var markerOptions = {};
    if (icon) {
        markerOptions.icon = icon;
    }
    var marker = L.marker([lat, lng], markerOptions);
    marker.bindPopup(popupText);
    markers.addLayer(marker);
}

// Add the marker cluster group to the map
map.addLayer(markers);

// Add site markers
addMarker(45.7640, 4.8357, '<a href="https://www.grame.fr">Faust born in GRAME</a>, Lyon, France', redIcon);
addMarker(37.4213, -122.1694, '<a href="https://ccrma.stanford.edu">CCRMA</a>, Stanford University, CA, USA', redIcon);

// Add project markers
addMarker(40.7128, -74.0060, '<a href="#the-theremin-reborn-in-mixed-reality">The Theremin, Reborn in Mixed Reality</a>, New York, NY, USA', blueIcon);
addMarker(55.953251, -3.188267, '<a href="#expert-sleepers-disting-nt">Expert Sleepers — disting NT</a> Edinburgh, Scotland, UK', blueIcon);
addMarker(50.9787, 11.0328, '<a href="#pult-eq">Pult EQ</a> Erfurt, Germany', blueIcon);
addMarker(43.2965, 5.3698, '<a href="#soliste">Soliste from Expressive-E</a>, Marseille, France', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#23tape-analog-tape-emulation">[23Tape - Analog Tape Emulation</a>, New York, NY, USA', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#marteaufx">MarteauFX</a>, Paris, France', blueIcon);
addMarker(48.4284, -123.3656, '<a href="#m0ss-101-virtual-analog-monosynth">M0SS-101 virtual analog monosynth</a>, Victoria, Canada', blueIcon);
addMarker(48.7758, 9.1829, '<a href="#unstable-polyphonic-synthesizer">UNSTABLE Polyphonic Synthesizer</a>, Stuttgart, Germany', blueIcon);
addMarker(60.3913, 5.3221, '<a href="#sputter-music-sequencer">Sputter Music Sequencer</a>, Bergen, Norway', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#mfp-music-for-programmers">MFP: music for programmers</a>, New York, NY, USA', blueIcon);
addMarker(55.7558, 37.6176, '<a href="#qlfaust">qlfaust</a>, Moscou, Russie', blueIcon);
addMarker(44.8378, -0.5792, '<a href="#ambience">ambience</a>, Bordeaux, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#folia-faust">folia-faust</a>, Lyon, France', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#podcastplugins">PodcastPlugins</a>, Berlin, Germany', blueIcon);
addMarker(29.6516, -82.3248, '<a href="#acidwerk">Acidwerk</a>, Gainesville, Florida', blueIcon);
addMarker(41.8781, -87.6298, '<a href="#superclav">Superclav</a>, Chicago, IL, USA', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#tronic">TRONIC</a>, New York, NY, USA', blueIcon);
addMarker(41.4993, -81.6944, '<a href="#hothouse-dsp-pedal-kit">Hothouse DSP Pedal Kit</a>, Cleveland, OH, USA', blueIcon);
addMarker(42.3601, -71.0589, '<a href="#fourtrackfm">fourtrack.fm</a>, Boston, MA, USA', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-chonk">OneTrick CHONK</a>, San Diego, CA, USA', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#faust-dsp-testbench">Faust DSP Testbench</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#shcdyna">SHCDyna</a>, Lyon, France', blueIcon);
addMarker(51.5074, -0.1278, '<a href="#formuls">formuls</a>, United Kingdom', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-b-boi">OneTrick B-BOI</a>, San Diego, CA, USA', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#faustvst">FaustVST</a>, San Diego, CA, USA', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#accessible-musical-web-applications-for-individuals-with-disabilities">Accessible musical web applications for individuals with disabilities</a>, Lyon, France', blueIcon);
addMarker(30.1766, -85.8055, '<a href="#stratus">Stratus</a> from Chaos Audio, Panama City Beach, USA', blueIcon);
addMarker(43.2965, 5.3698, '<a href="#noisy2">Noisy2</a> from Expressive-E, Marseille, France', blueIcon);
addMarker(33.7490, -84.3880, '<a href="#mesheditor">MeshEditor</a>, Atlanta, GA, USA', blueIcon);
addMarker(33.7490, -84.3880, '<a href="#flowgrid">Flowgrid</a>, Atlanta, GA, USA', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#polyblep-hole">polyBLEP HOLE</a>, New York, NY, USA', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-keys">OneTrick KEYS</a>, San Diego, CA, USA', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#mod-audio">MOD Audio</a>, Berlin, Germany', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#nih-faust-jit">nih-faust-jit</a>, Paris, France', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#ambientgarden">ambient.garden</a>, New York, NY, USA', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#teasynth">Teasynth</a>, New York, NY, USA', blueIcon);
addMarker(41.3851, 2.1734, '<a href="#lich">LICH</a>, Barcelona, Spain', blueIcon);
addMarker(50.8514, 5.6910, '<a href="#lamb">lamb</a>, Maastricht, Netherlands', blueIcon);
addMarker(42.2808, -83.7430, '<a href="#faustsynth">FaustSynth</a>, Ann Arbor, Michigan', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#envelopforlive">EnvelopForLive</a>, San Francisco, CA, USA', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#rcverb-reaclassical-verb">RCVerb ("ReaClassical Verb")</a>, Berlin, Germany', blueIcon);
addMarker(43.7102, 7.2620, '<a href="#wam-studio">Wam-Studio</a>, Nice, France', blueIcon);
addMarker(35.6895, 139.6917, '<a href="#snes-echo-simulator">SNES Echo Simulator</a>, Tokyo, Japan', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#syfala-project"> Syfala Project</a>, Lyon, France', blueIcon);
addMarker(59.8586, 17.6389, '<a href="#interactive-granular-texture-synthesiser">Interactive Granular Texture Synthesiser</a>, Uppsala, Sweden', blueIcon);
addMarker(31.2304, 121.4737, '<a href="#reflex-in">Reflex-in</a>, Shanghai, China', blueIcon);
addMarker(45.5152, -122.6784, '<a href="#faustcgp">FaustCGP</a>, Portland, Oregean', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-urchin">OneTrick URCHIN</a>, San Diego, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#kbverb">KBVerb</a>, San Francisco, CA, USA', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#pasfa-paste-faust-code">Paste Faust code!</a>, Paris, France', blueIcon);
addMarker(44.6488, -63.5752, '<a href="#faustmapper">FAUSTmapper</a>, Halifax, Canada', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#phausto">phausto</a>, Rome, Italy', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#cantor-digitalis">Cantor Digitalis</a>, Paris, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#karya">Karya</a>, San Francisco, CA, USA', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#body-brain-digital-musical-instrument-bbdmi">Body Brain Digital Musical Instrument (BBDMI)</a>, Paris, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#the-spatbox">The Spatbox</a>, Lyon, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#muss3640-vocal-synthesiser">MUSS3640 Vocal Synthesiser</a>, San Francisco, CA, USA', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#riti-room-is-the-instrument">RITI: Room Is The Instrument</a>, Rome, Italy', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#esp32-wrover-eie-audio-dev-board">ESP32 Wrover E/IE audio dev board</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#kuroscillators">Kuroscillators</a>, Stanford University, CA, USA', blueIcon);
addMarker(44.8378, -0.5792, '<a href="#joue-music-instruments">Joué Music Instruments</a>, Bordeaux, France', blueIcon);
addMarker(37.4275, -122.1697, '<a href="#externalchugins">ExternalChugins</a>, Stanford, CA, USA', blueIcon);
addMarker(33.7490, -84.3880, '<a href="#mesh2audio">mesh2audio</a>, Atlanta, GA, USA', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-cryptid">OneTrick CRYPTID</a>, San Diego, CA, USA', blueIcon);
addMarker(51.4545, -2.5879, '<a href="#bespoke-anywhere">Bespoke Anywhere</a>, Bristol, UK', blueIcon);
addMarker(46.1603, -1.1511, '<a href="#sentinelle">Sentinelle</a>, La Rochelle, France', blueIcon);
addMarker(55.7558, 37.6176, '<a href="#langfaust-and-uifaust">lang.faust~ and ui.faust~</a>, Moscow Russia', blueIcon);
addMarker(40.4406, -79.9959, '<a href="#arco4-sound-synthesis-engine-and-framework">arco4 - sound synthesis engine and framework</a>, Pittsburgh, USA', blueIcon);
addMarker(59.3293, 18.0686, '<a href="#ambisonics-in-kmh-studios-and-lilla-salen">Ambisonics in KMH studios and Lilla salen</a>, Stockholm, Sweden', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#sardine>Sardine"</a>, Lyon, France', blueIcon);
addMarker(48.1173, -1.6778, '<a href="#kandiskyscore">KandiskyScore</a>, Rennes, Brittany, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#fildesoi1_2_3">fildesoi1_2_3</a>, Paris, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#enecho">enecho</a>, Paris, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#zen-flute">Zen Flute</a>, San Francisco, CA, USA', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#souffle">souffle</a>, Lyon, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#ghg-gruppenhorchgerat">GHG (Gruppenhorchgerät)</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#satuverb">Satuverb</a>, San Francisco, CA, USA', blueIcon);
addMarker(57.7089, 11.9746, '<a href="#faustilogue">faustilogue</a>, Göteborg, Sweden', blueIcon);
addMarker(39.9042, 116.4074, '<a href="#blippoo-for-wingie">Blippoo for Wingie</a>, Beijing, China', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#teensy-wfs">teensy-wfs</a>, Lyon, France', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#pd-remote">pd-remote</a>, Mainz, Germany', blueIcon);
addMarker(1.3521, 103.8198, '<a href="#crossroad2effects">Crossroad2Effects</a>, Singapore', blueIcon);
addMarker(40.0379, -76.3055, '<a href="#flatten">flatten</a>, Lancaster, PA, USA', blueIcon);
addMarker(40.0379, -76.3055, '<a href="#drumvoice">drumvoice</a>, Lancaster, PA, USA', blueIcon);
addMarker(59.3293, 18.0686, '<a href="#veber">Veber</a>, Stockholm, Sweden', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#reach">REACH</a>, Berlin, Germany', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#stray_virtual-synth">Stray_virtual-synth</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#drty-drums">Drty Drums</a>, San Francisco, CA, USA', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#201-musical-synthesizer">201 Musical Synthesizer</a>, New York, NY, USA', blueIcon);
addMarker(32.7157, -117.1611, '<a href="#onetrick-simian">OneTrick SIMIAN</a>, San Diego, CA, USA', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#collisiondrivelv2">CollisionDrive.lv2</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#metaltone-lv2">MetalTone.lv2</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#tamgamp-lv2">tamgamp.lv2</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#reverbzen">ReverbZen</a>, Berlin, Germany', blueIcon);
addMarker(39.9042, 116.4074, '<a href="#wingie2">Wingie2</a>, Beijing, China', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#slowmolv2">Slowmo.lv2</a>, Berlin, Germany', blueIcon);
addMarker(44.4969, 11.3426, '<a href="#vocoder-app>Vocoder App</a>, University of Bologna, Italy', blueIcon);
addMarker(44.4969, 11.3426, '<a href="#echoplex-ep-3-simulator">Echoplex Ep-3 Simulator</a>, University of Bologna, Italy', blueIcon);
addMarker(39.9042, 116.4074, '<a href="#faust2smartphone">faust2smartphone</a>,  Beijing, China', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#dpf-fadeli">DPF-Fadeli</a>, Berlin, Germany', blueIcon);
addMarker(50.8503, 4.3517, '<a href="#tr8ck">TR8CK</a>,  Brussels, Belgium', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#guitard">GuitarD</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#hise">HISE</a>, Berlin, Germany', blueIcon);
addMarker(53.1435, 8.2146, '<a href="#mbstereophony">MBStereophony</a>, Oldenburg, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#audiolab">Audiolab</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#lr-delay">LR_Delay</a>, Berlin, Germany', blueIcon);
addMarker(55.6761, 12.5683, '<a href="#leslie-speaker-simulator">Leslie speaker simulator</a>, Copenhagen, Denmark', blueIcon);
addMarker(50.9375, 6.9603, '<a href="#cookiecutter-dpf-faust">cookiecutter-dpf-faust</a>, Cologne, Germany', blueIcon);
addMarker(50.9375, 6.9603, '<a href="#df-zita-rev1">DF Zita Rev1</a>, Cologne, Germany', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#theremotion">Theremotion</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#hypercurve">Hypercurve</a>, Lyon, France', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#faust-mcp">faust-mcp</a>, Mainz, Germany', blueIcon);
addMarker(55.6761, 12.5683, '<a href="#faustquark">Faust.quark</a>, Copenhagen, Denmark', blueIcon);
addMarker(55.6761, 12.5683, '<a href="#komet">Komet</a>, Copenhagen, Denmark', blueIcon);
addMarker(38.9517, -92.3341, '<a href="#faug">Faug</a>, Columbia, Missouri, USA', blueIcon);
addMarker(51.8126, 5.8372, '<a href="#striso-studio">Striso Studio</a>, Nijmegen, Netherlands', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#xuidesigner">XUiDesigner</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#eurorack-blocks">eurorack-blocks</a>, Berlin, Germany', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#amstramgrame">AmStramGrame</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#gamelan">GameLAN</a>, Lyon, France', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#screamer">Screamer</a>, Berlin, Germany', blueIcon);
addMarker(39.2904, -76.6122, '<a href = "#typebeat">Typebeat</a>, Baltimore, Maryland, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#afdn-reverb">AFDN-reverb</a>,Stanford University, CA, USA', blueIcon);
addMarker(42.6977, 23.3219, '<a href="#karpsichord">Karpsichord</a>,Sofia, Bulgaria', blueIcon);
addMarker(46.1870, 7.5456, '<a href="#arduino-audio-tools">Arduino Audio Tools</a>, Valais, Switzerland', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#organelle">Organelle</a>,  New York, NY, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#zrythm>Zrythm</a>, San Francisco, CA, USA', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#patches-for-the-owl-pedaleurorack-module">Patches for the OWL Pedal/Eurorack Module</a>, Berlin, Germany', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#kiwi">Kiwi</a>, Paris, France', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#brainwave-virtual-instrument">Brainwave Virtual Instrument</a>, Berlin, Germany', blueIcon);
addMarker(39.9334, 32.8597, '<a href="#mephisto">Mephisto</a>, Turkey', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#weather_organ">weather_organ</a>, San Francisco, CA, USA', blueIcon);
addMarker(51.5074, -0.1278, '<a href="#genius-eurorack-module">Genius Eurorack Module</a>, London, England', blueIcon);
addMarker(37.3861, -122.0839, '<a href="#dataflow-based-fpga-program-synthesis">Dataflow Based FPGA Program Synthesis</a>, Mountain View, California, USA', blueIcon);
addMarker(45.1000, 15.2000, '<a href="#dspedal">DSPedal</a>, Croatia', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#tambura">Tambura</a>, Berlin, Germany', blueIcon);
addMarker(52.1326, 5.2913, '<a href="#drumbox">drumbox</a>, Netherlands', blueIcon);
addMarker(43.2996, 5.6913, '<a href="#granola">Granola</a>, Cuges-les-Pins, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#fverb">fverb</a>, Paris, France', blueIcon);
addMarker(37.4943, 139.9290, '<a href="#sonification">Sonification</a>, University of Aizu, Japan', blueIcon);
addMarker(-41.2865, 174.7762, '<a href="#gula-plugins">GULA Plugins</a>, Wellington, New Zealand', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#limiterstereo">limiterStereo</a>, Rome, Italy', blueIcon);
addMarker(43.7102, 7.2620, '<a href="#web-audio-modules">Web Audio Modules</a>, Nice, France', blueIcon);
addMarker(55.7558, 37.6176, '<a href="#kapitonov-plugins-pack">Kapitonov Plugins Pack</a>, Moscow Russia', blueIcon);
addMarker(55.7558, 37.6176, '<a href="#tubeamp-designer">tubeAmp Designer</a>, Moscow Russia', blueIcon);
addMarker(51.5074, -0.1278, '<a href="#biosignals">BioSignals</a>, London, England', blueIcon);
addMarker(50.0755, 14.4378, '<a href="#scale-it">Scale it</a>, Prague, Czech Republic', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#jacktrip">JackTrip</a>, Stanford University, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#level-rider">Level Rider</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#whetstone-transient-shaper">Whetstone Transient Shaper</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#reverb-trickery">Reverb Trickery</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.9838, 23.7275, '<a href="#b259wf">b259wf</a>, Athens, Greece', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#string-machine">string-machine</a>, Paris, France', blueIcon);
addMarker(48.1173, -1.6778, '<a href="#metafx">metaFx</a>, Rennes, Brittany, France', blueIcon);
addMarker(59.3293, 18.0686, '<a href="#kymatica-com">Kymatica.com</a>, Stockholm, Sweden', blueIcon);
addMarker(47.5596, 7.5886, '<a href="#nemesis">Nemesis</a>, Basel, Switzerland', blueIcon);
addMarker(44.6488, -63.5752, '<a href="#sonobus">Sonobus</a>, Halifax, Canada', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#xplugs-lv2">XPlugs.lv2</a>, Berlin, Germany', blueIcon);
addMarker(46.6034, 1.8883, '<a href="#bass-preamp-drive">Bass Preamp Drive</a>,France', blueIcon);
addMarker(45.4642, 9.1900, '<a href="#drum-module">Drum Module</a>, Milan, Italy', blueIcon);
addMarker(34.0522, -118.2437, '<a href="#daisy-based-audio-boards">Daisy based audio boards</a>, Southern California, USA', blueIcon);
addMarker(59.3326, 18.0649, '<a href="#elk-audio-os">Elk Audio OS</a>, Stockholm, Sweden', blueIcon);
addMarker(35.6812, 139.7671, '<a href="#er-301-sound-computer">ER-301 Sound Computer</a>, Tokyo, Japan', blueIcon);
addMarker(41.3851, 2.1734, '<a href="#zynthian-platform">Zynthian platform</a>, Barcelona, Spain', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#gxplugins-lv2">GxPlugins.lv2</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#stone-phaser">Stone phaser</a>, Berlin, Germany', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#sfizz">sfizz</a>, Paris, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#antescofo">Antescofo</a>, Paris, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#motion-vox">Motion Vox</a>, Moscow Russia', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#inscore">INScore</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#virtual-rhizome">Virtual Rhizome</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#smartfaust">SmartFaust</a>, Lyon, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#trombone-simulator">Trombone Simulator</a>, San Francisco, CA, USA', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#integrating-1-dof-force-feedback-interactions-in-self-contained-dmis">Integrating 1-DoF force feedback interactions in self-contained DMIs</a>, Berlin, Germany', blueIcon);
addMarker(51.5246, -0.0399, '<a href="#beyond-key-velocity-continuous-sensing-for-expressive-control-on-the-hammond-organ-and-digital-keyboards">Beyond Key Velocity: Continuous Sensing for Expressive Control on the Hammond Organ and Digital Keyboards</a>, London, England', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#guide-de-la-synthese-sonore">Guide de la synthèse sonore</a>, Lyon, France', blueIcon);
addMarker(45.4753, 9.2013, '<a href="#pico-dsp">PICO DSP</a>, Milan, Italy', blueIcon);
addMarker(54.7809, 9.4360, '<a href="#soundjack">Soundjack</a>, Flensburg, Germany', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#studiox-switcher">studiox-switcher</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#synthspace">SynthSpace</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#bass21">Bass21</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#echomatrix">EchoMatrix</a>, San Francisco, CA, USA', blueIcon);
addMarker(52.0928, 5.1045, '<a href="#the-striso-board">The Striso board</a>, Utrecht, Netherlands', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#live-concatenative-granular-processing">Live concatenative granular processing</a>, Rome, Italy', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#fb_suppression">fb_suppression</a>, Rome, Italy', blueIcon);
addMarker(41.9028, 12.4964, '<a href="#limiterstereo">limiterStereo</a>, Rome, Italy', blueIcon);
addMarker(44.8378, -0.5792, '<a href="#ossia-score">ossia score</a>, Bordeaux, France', blueIcon);
addMarker(45.0703, 7.6869, '<a href="#faselunare-microcosmos">FASELUNARE Microcosmos</a>, Turin, Italy', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#audio-anywhere">Audio Anywhere</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#the-keywi">The KeyWi</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#react-web-audio-guitar-studio">React Web Audio Guitar Studio</a>, San Francisco, CA, USA', blueIcon);
addMarker(31.2304, 121.4737, '<a href="#jspatcher">JSPatcher</a>, Shanghai, China', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#gwion">Gwion</a>, Paris, France', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#faustdrumseq">faustdrumseq</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#midiclockclick">MidiClockClick</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#superbeatrepeater">SuperBeatRepeater</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#supercutsequencer">SuperCutSequencer</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#delooper">DeLooper</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#xymatrix">XYMatrix</a>, Berlin, Germany', blueIcon);
addMarker(50.2649, 19.0238, '<a href="#stm32-faust-synth">stm32-faust-synth</a>, Katowice, Poland', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#faustgen2">faustgen2~</a>, Mainz, Germany', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#amati">Amati</a>, Paris, France', blueIcon);
addMarker(12.9716, 77.5946, '<a href="#puretones">PureTones</a>, Bangalore, India', blueIcon);
addMarker(51.2333, 6.7733, '<a href="#making-sound-machines">Making Sound Machines</a>, Düsseldorf, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#master_me">master_me</a>, Berlin, Germany', blueIcon);
addMarker(48.1173, -1.6778, '<a href="#metasurface64">metaSurface64</a>, Rennes, Brittany, France', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#fragment-audio-server-and-fragment">Fragment Audio Server and Fragment</a>,Paris, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#swanky-amp">Swanky Amp</a>, San Francisco, CA, USA', blueIcon);
addMarker(47.6062, -122.3321, '<a href="#web-synth">Web Synth</a>, Seattle, WA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#dawdreamer">DawDreamer</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#td-faust">TD-Faust</a>, San Francisco, CA, USA', blueIcon);
addMarker(47.3769, 8.5417, '<a href="#mephisto-lv2">Mephisto LV2</a>, Zurich, Switzerland', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#iplug2">iPlug2</a>, Berlin, Germany', blueIcon);
addMarker(52.5200, 13.4050, '<a href="#pmix">pMix</a>, Berlin, Germany', blueIcon);
addMarker(40.7128, -74.0060, '<a href="#temper-juce-plugin">Temper JUCE plugin</a>, New York, NY, USA', blueIcon); // Based on project information
addMarker(45.1885, 5.7245, '<a href="#faust-mass-interaction">Faust Mass-Interaction</a>, Grenoble, France', blueIcon); // Based on project information
addMarker(43.7102, 7.2620, '<a href="#dynamic-pedalboard">Dynamic PedalBoard</a>, Nice, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#sharc-dsp-board">SHARC DSP Board</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#nuance">Nuance</a>, CCRMA, Stanford, CA, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#the-plateaxe">The PlateAxe</a>, CCRMA, Stanford, CA, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#the-bladeaxe">The BladeAxe</a>, CCRMA, Stanford, CA, USA', blueIcon);
addMarker(50.8514, 5.6909, '<a href="#bart-brouns-projects">Bart Brouns Projects</a>, Maastricht, Netherlands', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#eartone-toolbox">EarTone Toolbox</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#audiokit">AudioKit</a>, San Francisco, CA, USA', blueIcon);
addMarker(59.9139, 10.7522, '<a href="#radium">Radium</a>, Oslo, Norway', blueIcon); // Radium is developed in Norway
addMarker(51.5074, -0.1278, '<a href="#bela">BELA</a>, London, UK', blueIcon);
addMarker(48.8566, 2.3522, '<a href="#hoa-library">HOA Library</a>, Paris, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#ambitools">Ambitools</a>, Lyon, France', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#ambisonic-decoder-toolbox">Ambisonic Decoder Toolbox</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#ambisonic-xyz">Ambisonic.xyz</a>, San Francisco, CA, USA', blueIcon);
addMarker(53.1439, 8.2130, '<a href="#faustpy">FaustPy</a>, Oldenburg, Germany', blueIcon);
addMarker(51.5074, -0.1278, '<a href="#rebel-technology">Rebel Technology</a>, London, UK', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#faust-vst">faust-vst</a>, Mainz, Germany', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#faust-lv2">faust-lv2</a>, Mainz, Germany', blueIcon);
addMarker(48.2082, 16.3738, '<a href="#rdk">RDK</a>, Vienne, Austria', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#foo-yc20">Foo YC20</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.4213, -122.1694, '<a href="#fauck">FaucK</a>, CCRMA Stanford, CA, USA', blueIcon);
addMarker(59.9139, 10.7522, '<a href="#snd-rt">Snd-RT</a>, Oslo, Norway', blueIcon);
addMarker(49.9929, 8.2473, '<a href="#pure-language">Pure Language</a>, Mainz, Germany', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#guitarix">Guitarix</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#moforte-geoshred">moForte GeoShred</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#moforte-powerstomp">moForte PowerStomp</a>, San Francisco, CA, USA', blueIcon);
addMarker(37.7749, -122.4194, '<a href="#moforte-guitar">moForte Guitar</a>, San Francisco, CA, USA', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#faustworks">FaustWorks</a>, Lyon, France', blueIcon);
addMarker(45.7640, 4.8357, '<a href="#faustlive">FaustLive</a>, Lyon, France', blueIcon);
