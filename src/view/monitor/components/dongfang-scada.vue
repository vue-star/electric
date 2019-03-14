<template>
    <div style="height: 100%">
        <div class="dongfang-svg" @change="fullscreenChange" :fullscreen.sync="fullscreen" ref="fullscreen">
            <svg id="dongfang" width="100%" height="100%" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg">
                <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
                <g>
                    <title>东方魅力</title>
                    <rect x="-1" y="-1" width="100%" height="100%" id="canvas_background" fill="#000000" />
                    <g id="canvasGrid" display="none">
                        <rect id="svg_1" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)" />
                    </g>
                </g>
                <g>
                    <title>东方魅力</title>
                    <line stroke="#ff0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="52.12311" x2="307.43417" y1="52.12311" x1="209.18026" fill="none"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="258.50448" y1="106.12361" x2="258.50448" y2="134.81354" id="svg_13" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <ellipse fill="none" fill-opacity="null" cx="258.5489" cy="139.8347" id="svg_40" rx="5.08314" ry="5.08314" stroke="#ffffff"/>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="59.33776" y="227.25" id="svg_118" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">1DP</text>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="115.67318" y1="252.93765" x2="115.67318" y2="310.46081" id="svg_126" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#5fbf00" fill="none" x1="115.96761" y1="267.85992" x2="135.98497" y2="267.85992" id="svg_128" stroke-linejoin="null" stroke-linecap="null"/>
                    <line fill="none" stroke-width="null" fill-opacity="null" x1="105.56213" y1="253.90281" x2="105.56213" y2="262.32997" id="svg_138" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="156.60539" y1="267.40239" x2="156.60539" y2="313.14469" id="svg_139" stroke-linejoin="null" stroke-linecap="null"/>
                    <path fill="none" stroke-width="null" fill-opacity="null" d="m107.90486,322.20888l7.37472,-10.97037l7.37472,10.97037l-14.74945,0l0,0l0.00001,0z" id="svg_149" stroke="#5fbf00"/>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="20.42306" y="313.38816" id="svg_175" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">COS:</text>
                    <text fill="yellow" stroke-width="0" x="25.07929" y="263.43384" id="svg_176" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">UA:</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="24.75116" y="277.55738" id="svg_178" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">UC:</text>
                    <text fill="#5fbf00" stroke-width="0" x="25.07929" y="269.9784" id="svg_182" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">UB:</text>
                    <text fill="yellow" stroke-width="0" x="37.42231" y="263.43384" id="svg_64" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{UA}}</text>
                    <text fill="yellow" stroke-width="0" x="59.92119" y="263.43384" id="svg_65" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">V</text>
                    <text fill="#5fbf00" stroke-width="0" x="37.42231" y="269.9698" id="svg_66" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{UB}}</text>
                    <text fill="#5fbf00" stroke-width="0" x="59.9212" y="269.9698" id="svg_68" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">V</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="37.43012" y="277.56153" id="svg_69" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{UC}}</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="59.92121" y="277.56152" id="svg_70" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">V</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="37.42331" y="313.38152" id="svg_82" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{COS}}</text>
                    <line fill="none" fill-opacity="null" x1="73.29905" y1="267.74199" x2="73.29905" y2="313.11845" id="svg_281" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#ff0000"/>
                    <rect stroke="#ffffff" fill="none" stroke-width="null" fill-opacity="null" x="256.81693" y="113.31025" width="3.87276" height="13.60494" id="svg_438"/>
                    <ellipse fill="none" fill-opacity="null" cx="258.5489" cy="145.70714" id="svg_439" rx="5.08314" ry="5.08314" stroke="#ffffff"/>
                    <ellipse fill="none" fill-opacity="null" cx="115.68115" cy="258.29177" id="svg_542" rx="2.25" ry="2.25" stroke="#5fbf00"/>
                    <line transform="rotate(90 119.60699462890621,258.04171752929693) " fill="none" fill-opacity="null" x1="117.5923" y1="258.04177" x2="121.62169" y2="258.04177" id="svg_543" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="119.18114" y1="258.04177" x2="123.21053" y2="258.04177" id="svg_544" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="117.79788" y1="258.04177" x2="121.46053" y2="258.04177" id="svg_545" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 121.60699462890621,258.04171752929693) " fill="none" fill-opacity="null" x1="119.5923" y1="258.04177" x2="123.62169" y2="258.04177" id="svg_546" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <ellipse fill="none" fill-opacity="null" cx="105.65837" cy="258.29177" id="svg_547" rx="2.25" ry="2.25" stroke="#5fbf00"/>
                    <ellipse fill="none" fill-opacity="null" cx="156.74719" cy="271.76907" id="svg_552" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 160.67304992675778,271.5190734863282) " fill="none" fill-opacity="null" x1="158.65834" y1="271.51907" x2="162.68773" y2="271.51907" id="svg_553" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="159.24718" y1="271.51907" x2="163.27657" y2="271.51907" id="svg_554" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="159.61392" y1="271.51907" x2="163.27657" y2="271.51907" id="svg_555" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="110.6254" y1="315.63516" x2="114.69908" y2="315.63516" id="svg_567" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 112.66265869140632,315.6351013183593) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="109.48645" y1="316.54633" x2="113.56013" y2="316.54633" id="svg_568" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 111.52374267578126,316.54623413085943) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="116.09237" y1="315.63516" x2="120.16605" y2="315.63516" id="svg_569" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-45 118.1297607421875,315.6351013183593) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="117.23132" y1="316.77412" x2="121.30501" y2="316.77412" id="svg_570" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-45 119.26818847656247,316.77407836914057) " stroke="#5fbf00"/>
                    <text fill="#ffffff" stroke-width="0" x="391.48869" y="44.33333" id="svg_573" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#FFDBD2">3GP</text>
                    <text fill="#ffffff" stroke-width="0" x="321.63672" y="44.34375" id="svg_574" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#FFDBD2">2GP</text>
                    <text fill="#ffffff" stroke-width="0" x="210.00599" y="44.34375" id="svg_575" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#FFDBD2">1GP进线</text>
                    <text fill="#ffffff" stroke-width="0" x="492.65473" y="44.34375" id="svg_576" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#FFDBD2">4GP</text>
                    <line fill="none" fill-opacity="null" x1="113.43352" y1="243.13039" x2="118.14833" y2="243.13039" id="svg_577" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#5fbf00"/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="110.43355" y1="238.13023" x2="120.6484" y2="238.13023" id="svg_579" stroke-linejoin="undefined" stroke-linecap="undefined" transform="rotate(90 115.5409698486328,238.1302185058594) "/>
                    <line stroke="#5fbf00" transform="rotate(90 221.3877716064453,58.05182266235354) " fill="none" fill-opacity="null" x1="215.98439" y1="58.05182" x2="226.79116" y2="58.05182" id="svg_2" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="215.98439" y1="64.05182" x2="226.79116" y2="64.05182" id="svg_3" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse stroke="#5fbf00" fill="none" fill-opacity="null" cx="221.21558" cy="67.16805" id="svg_5" rx="2.41647" ry="2.41647"/>
                    <line transform="rotate(45 218.05444335937497,75.38515472412111) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="212.65106" y1="75.38515" x2="223.45782" y2="75.38515" id="svg_6" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 221.3877716064453,84.71848297119143) " fill="none" fill-opacity="null" x1="215.98439" y1="84.71848" x2="226.79116" y2="84.71848" id="svg_7" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(75 219.41009521484375,95.02349853515625) " fill="none" fill-opacity="null" x1="215.70287" y1="95.0235" x2="223.11733" y2="95.0235" id="svg_8" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ff0000" fill="none" fill-opacity="null" x1="220.50448" y1="98.79028" x2="220.50448" y2="166.81353" id="svg_9" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="197.92054" y1="105.72917" x2="258.1162" y2="105.72917" id="svg_10" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="198.16236" cy="124.1817" id="svg_52" rx="4.24715" ry="4.24715" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="195.50405" y1="112.7489" x2="201.4446" y2="112.7489" id="svg_53" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" stroke-width="null" x1="197.90268" y1="120.18425" x2="197.90268" y2="127.86778" id="svg_63" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 197.9026947021484,124.02601623535158) "/>
                    <line fill="none" stroke-width="null" x1="194.45484" y1="124.02097" x2="202.05616" y2="124.02097" id="svg_71" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 198.25552368164065,124.02096557617185) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_74" y2="134.13559" x2="197.97671" y1="128.92772" x1="197.97671" fill-opacity="null" fill="none" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="195.7102" y1="136.18284" x2="200.58924" y2="136.18284" id="svg_76" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="196.88788" y1="137.5883" x2="199.41157" y2="137.5883" id="svg_77" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="195.50405" y1="114.57122" x2="201.4446" y2="114.57122" id="svg_79" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="195.50405" y1="109.33204" x2="201.4446" y2="109.33204" id="svg_80" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 198.47430419921878,109.33204650878908) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="196.30131" y1="117.19084" x2="200.64733" y2="117.19084" id="svg_81" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 198.47430419921878,117.19083404541017) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="195.25462" y1="134.5883" x2="201.27262" y2="134.5883" id="svg_116" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <rect fill="none" stroke-opacity="null" fill-opacity="null" x="236.49842" y="113.45087" width="5.49431" height="16.48292" id="svg_173" stroke="#ffffff"/>
                    <path fill="#ff0000" d="m239.37472,121.02581l-1.00702,-2.31452l1.81066,2.31452l-1.81066,2.31451l1.00702,-2.31451z" id="svg_174" stroke="#ffffff" filter="url(#svg_198_blur)" transform="rotate(90 239.27302551269534,121.0258026123047) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_179" y2="120.48108" x2="239.35947" y1="107.31192" x1="239.35947" fill-opacity="null" stroke-opacity="null" fill="none" stroke="#ffffff"/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_183" y2="135.94121" x2="239.35263" y1="130.73333" x1="239.35263" fill-opacity="null" stroke-opacity="null" fill="none" stroke="#ffffff"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="215.88225" cy="121.70714" id="svg_195" rx="3.74981" ry="3.74981"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="215.88225" cy="133.70714" id="svg_216" rx="3.74981" ry="3.74981"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="226.54891" cy="121.70714" id="svg_217" rx="3.74981" ry="3.74981"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="226.54891" cy="133.70714" id="svg_218" rx="3.74981" ry="3.74981"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="215.83781" y1="112.79027" x2="215.83781" y2="142.14687" id="svg_219" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="226.50448" y1="112.79027" x2="226.50448" y2="142.14687" id="svg_220" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <path stroke="#ff0000" fill="none" stroke-width="null" fill-opacity="null" d="m214.50774,159.40477l6.08619,-10.71871l6.08619,10.71871l-12.17237,0l-0.00001,0z" id="svg_222" transform="rotate(180 220.59393310546875,154.04541015625) "/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="307.17108" y1="52.12361" x2="307.17108" y2="76.81358" id="svg_225" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="347.25383" y1="52.39584" x2="570.11613" y2="52.39584" id="svg_333" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="307.17111" y1="77.45694" x2="307.17111" y2="131.48019" id="svg_335" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="306.58721" y1="77.06249" x2="348.78286" y2="77.06249" id="svg_338" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="347.83777" y1="52.79029" x2="347.83777" y2="77.4802" id="svg_340" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="324.54891" cy="83.70714" id="svg_341" rx="3.74981" ry="3.74981"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="335.21558" cy="83.70714" id="svg_342" rx="3.74981" ry="3.74981"/>
                    <line transform="rotate(90 330.50436401367193,83.46869659423831) " stroke="#ffffff" fill="none" fill-opacity="null" x1="330.50448" y1="68.79027" x2="330.50448" y2="98.14687" id="svg_343" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="324.54891" cy="69.04048" id="svg_344" rx="3.74981" ry="3.74981"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="334.54891" cy="69.04048" id="svg_365" rx="3.74981" ry="3.74981"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="324.50448" y1="62.1236" x2="324.50448" y2="76.14687" id="svg_368" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="334.50448" y1="62.1236" x2="334.50448" y2="76.14687" id="svg_369" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <rect fill="none" stroke-opacity="null" fill-opacity="null" x="304.49842" y="93.45087" width="5.49431" height="16.48292" id="svg_370" stroke="#ffffff"/>
                    <ellipse fill="none" fill-opacity="null" cx="307.21557" cy="136.50137" id="svg_372" rx="5.08314" ry="5.08314" stroke="#ffffff"/>
                    <ellipse fill="none" fill-opacity="null" cx="307.21557" cy="142.37381" id="svg_373" rx="5.08314" ry="5.08314" stroke="#ffffff"/>
                    <line stroke="#5fbf00" transform="rotate(90 396.7210998535156,58.05182266235355) " fill="none" fill-opacity="null" x1="391.31773" y1="58.05182" x2="402.12449" y2="58.05182" id="svg_380" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="391.31773" y1="64.05182" x2="402.12449" y2="64.05182" id="svg_381" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse stroke="#5fbf00" fill="none" fill-opacity="null" cx="396.54892" cy="67.16805" id="svg_382" rx="2.41647" ry="2.41647"/>
                    <line transform="rotate(45 392.054443359375,72.05181884765621) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="386.65106" y1="72.05182" x2="397.45783" y2="72.05182" id="svg_383" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="395.83782" y1="76.12361" x2="395.83782" y2="173.48015" id="svg_406" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="375.25388" y1="119.72917" x2="416.11621" y2="119.72917" id="svg_407" stroke-linejoin="null" stroke-linecap="null"/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m389.84108,156.07144l6.08619,-10.71871l6.0862,10.71871l-12.17238,0l-0.00001,0z" id="svg_523" transform="rotate(180 395.92724609375,150.7120819091797) "/>
                    <ellipse fill="none" fill-opacity="null" cx="375.4957" cy="138.1817" id="svg_611" rx="4.24715" ry="4.24715" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="372.83739" y1="126.7489" x2="378.77794" y2="126.7489" id="svg_612" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" stroke-width="null" x1="375.23602" y1="134.18426" x2="375.23602" y2="141.86778" id="svg_613" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 375.2346496582031,138.02607727050784) "/>
                    <line fill="none" stroke-width="null" x1="371.78818" y1="138.02096" x2="379.3895" y2="138.02096" id="svg_614" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 375.58746337890625,138.02102661132812) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_615" y2="148.13559" x2="375.97672" y1="142.92772" x1="375.97672" fill-opacity="null" fill="none" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="373.71021" y1="150.68284" x2="378.58925" y2="150.68284" id="svg_616" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="374.88789" y1="152.58829" x2="377.41158" y2="152.58829" id="svg_617" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="372.83739" y1="128.57122" x2="378.77794" y2="128.57122" id="svg_618" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="372.83739" y1="123.33204" x2="378.77794" y2="123.33204" id="svg_619" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 375.80624389648443,123.3320007324219) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="373.63465" y1="131.19083" x2="377.98067" y2="131.19083" id="svg_620" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 375.80624389648443,131.1908111572266) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="373.25463" y1="148.5883" x2="379.27263" y2="148.5883" id="svg_621" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="415.04354" y1="151.84953" x2="419.92258" y2="151.84953" id="svg_623" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="416.22122" y1="153.50498" x2="418.74491" y2="153.50498" id="svg_624" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="414.58796" y1="149.755" x2="420.60596" y2="149.755" id="svg_625" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <rect fill="none" stroke-opacity="null" fill-opacity="null" x="393.16509" y="84.11754" width="5.49431" height="16.48292" id="svg_626" stroke="#ffffff"/>
                    <line transform="rotate(45 414.0522766113281,134.71832275390628) " stroke="#ffffff" fill="none" fill-opacity="null" x1="408.65106" y1="134.71849" x2="419.45783" y2="134.71849" id="svg_627" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ffffff" transform="rotate(90 417.38555908203125,144.05171203613287) " fill="none" fill-opacity="null" x1="411.98439" y1="144.05182" x2="422.79116" y2="144.05182" id="svg_628" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ffffff" transform="rotate(90 415.3855895996094,125.38493347167973) " fill="none" fill-opacity="null" x1="409.98439" y1="125.38515" x2="420.79116" y2="125.38515" id="svg_629" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 505.3877868652344,58.05182266235355) " fill="none" fill-opacity="null" x1="499.9844" y1="58.05182" x2="510.79116" y2="58.05182" id="svg_654" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="499.9844" y1="64.05182" x2="510.79116" y2="64.05182" id="svg_655" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse stroke="#5fbf00" fill="none" fill-opacity="null" cx="505.21559" cy="67.16805" id="svg_656" rx="2.41647" ry="2.41647"/>
                    <line transform="rotate(45 500.72113037109386,72.05181884765629) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="495.31773" y1="72.05182" x2="506.1245" y2="72.05182" id="svg_657" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="504.50449" y1="76.12361" x2="504.50449" y2="171.48017" id="svg_658" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#ffffff" fill="none" fill-opacity="null" x1="483.92055" y1="119.72917" x2="524.78288" y2="119.72917" id="svg_659" stroke-linejoin="null" stroke-linecap="null"/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m498.50775,156.07144l6.08619,-10.71871l6.0862,10.71871l-12.17238,0l-0.00001,0z" id="svg_660" transform="rotate(180 504.59393310546875,150.71209716796875) "/>
                    <ellipse fill="none" fill-opacity="null" cx="484.16237" cy="138.1817" id="svg_661" rx="4.24715" ry="4.24715" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="481.50406" y1="126.7489" x2="487.44461" y2="126.7489" id="svg_662" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" stroke-width="null" x1="483.90269" y1="134.18426" x2="483.90269" y2="141.86778" id="svg_663" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 483.89965820312494,138.0260772705078) "/>
                    <line fill="none" stroke-width="null" x1="480.45485" y1="138.02096" x2="488.05617" y2="138.02096" id="svg_664" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff" transform="rotate(45 484.25247192382824,138.02102661132807) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_665" y2="148.13559" x2="484.64339" y1="142.92772" x1="484.64339" fill-opacity="null" fill="none" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="482.37688" y1="150.43284" x2="487.25592" y2="150.43284" id="svg_666" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="483.55456" y1="152.33829" x2="486.07825" y2="152.33829" id="svg_667" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="481.50406" y1="128.57122" x2="487.44461" y2="128.57122" id="svg_668" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="481.50406" y1="123.33204" x2="487.44461" y2="123.33204" id="svg_669" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 484.47125244140625,123.33200073242192) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="482.30132" y1="131.19083" x2="486.64734" y2="131.19083" id="svg_670" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90 484.47125244140625,131.19081115722662) " stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="481.9213" y1="148.5883" x2="487.9393" y2="148.5883" id="svg_671" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="523.71021" y1="153.3495" x2="528.58925" y2="153.3495" id="svg_672" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="524.88789" y1="155.00496" x2="527.41158" y2="155.00496" id="svg_673" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <line fill="none" fill-opacity="null" x1="523.25463" y1="151.25497" x2="529.27263" y2="151.25497" id="svg_674" stroke-linejoin="null" stroke-linecap="null" stroke="#ffffff"/>
                    <rect fill="none" stroke-opacity="null" fill-opacity="null" x="501.83176" y="84.11754" width="5.49431" height="16.48292" id="svg_675" stroke="#ffffff"/>
                    <line transform="rotate(45 522.7177734375001,134.7183227539062) " stroke="#ffffff" fill="none" fill-opacity="null" x1="517.31773" y1="134.71849" x2="528.1245" y2="134.71849" id="svg_676" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ffffff" transform="rotate(90 526.0512084960939,144.05171203613287) " fill="none" fill-opacity="null" x1="520.65106" y1="144.05182" x2="531.45783" y2="144.05182" id="svg_677" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ffffff" transform="rotate(90 524.0511474609376,125.38493347167973) " fill="none" fill-opacity="null" x1="518.65106" y1="125.38515" x2="529.45783" y2="125.38515" id="svg_678" stroke-linejoin="null" stroke-linecap="null"/>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="110.1711" y="221.17188" id="svg_679" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">2DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="176.83777" y="221.17188" id="svg_680" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">3DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="268.83763" y="221.16668" id="svg_681" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">4DP</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="359.67066" y="221.16666" id="svg_682" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">5DP</text>
                    <text stroke="#FFDBD2" transform="matrix(0.8857652544975281,0,0,1,40.64793530199677,0) " fill="#ffffff" stroke-width="0" x="426.5852" y="220.95312" id="svg_683" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">6DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="493.00374" y="221.17188" id="svg_684" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">7DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="589.00336" y="221.17188" id="svg_685" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">8DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="667.33641" y="221.17188" id="svg_686" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">9DP</text>
                    <text fill="#ffffff" stroke="#FFDBD2" stroke-width="0" x="730.33598" y="223.50028" id="svg_687" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">10DP</text>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="73.25379" y1="173.72974" x2="395.61602" y2="173.72974" id="svg_693" stroke-linejoin="null" stroke-linecap="null"/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="73.12746" y="343.75002" id="svg_695" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">进线柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="103.21261" y="343.75002" id="svg_696" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">电容补偿</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="176.54573" y="343.75002" id="svg_697" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">馈线柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="254.54598" y="343.7461" id="svg_698" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">馈线柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="347.04586" y="343.74088" id="svg_699" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">馈线柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="415.71245" y="343.74088" id="svg_700" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">联络柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="584.54519" y="343.74088" id="svg_701" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">馈线柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="660.71169" y="343.75002" id="svg_702" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">电容补偿柜</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="707.87861" y="343.75002" id="svg_703" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">电流进线柜</text>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_710" y2="233.45645" x2="84.10085" y1="233.45645" x1="64.18025" fill="none"/>
                    <line stroke="#00bf00" transform="rotate(90 73.22107696533202,239.38516235351565) " fill="none" fill-opacity="null" x1="67.81771" y1="239.38516" x2="78.62448" y2="239.38516" id="svg_712" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 69.63771820068348,252.71849060058597) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="64.23432" y1="252.71849" x2="75.04109" y2="252.71849" id="svg_715" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 73.22108459472652,262.0518188476563) " fill="none" fill-opacity="null" x1="67.81771" y1="262.05182" x2="78.62448" y2="262.05182" id="svg_716" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_720" y2="312.78978" x2="96.26752" y1="312.78978" x1="72.34692" fill="none"/>
                    <line stroke="#ff0000" fill="none" fill-opacity="null" x1="96.79906" y1="232.992" x2="96.79906" y2="313.11845" id="svg_721" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_722" y2="232.78974" x2="387.10042" y1="232.78974" x1="96.01357" fill="none"/>
                    <line stroke="#5fbf00" fill="none" stroke-width="null" x1="135.44436" y1="277.30686" x2="135.44436" y2="282.16196" id="svg_723" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 135.4443664550782,279.7343444824218) "/>
                    <line stroke="#5fbf00" fill="none" stroke-width="null" x1="133.00985" y1="279.91686" x2="137.95952" y2="279.91686" id="svg_724" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 135.48469543457037,279.9168090820312) "/>
                    <line stroke="#5fbf00" transform="rotate(90 135.3880462646484,273.6350708007813) " fill="none" fill-opacity="null" x1="129.98438" y1="273.63521" x2="140.79115" y2="273.63521" id="svg_725" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(45 133.13790893554693,287.13555908203125) " fill="none" fill-opacity="null" x1="129.85584" y1="287.1356" x2="136.41996" y2="287.1356" id="svg_729" stroke-linejoin="null" stroke-linecap="null"/>
                    <rect fill="none" fill-opacity="null" x="132.08169" y="295.03426" width="5.49431" height="16.48292" id="svg_734" stroke="#5fbf00"/>
                    <path fill="#ff0000" d="m134.95799,302.6092l-1.00702,-2.31452l1.81066,2.31452l-1.81066,2.31451l1.00702,-2.31451z" id="svg_735" stroke="#5fbf00" filter="url(#svg_198_blur)" transform="rotate(90 134.85632324218747,302.60913085937506) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_736" y2="302.06447" x2="134.94275" y1="288.89531" x1="134.94275" fill-opacity="null" fill="none" stroke="#5fbf00"/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_737" y2="317.5246" x2="134.9359" y1="312.31672" x1="134.9359" fill-opacity="null" fill="none" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="132.4194" y1="319.11627" x2="137.29844" y2="319.11627" id="svg_738" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="133.59708" y1="320.97732" x2="136.12077" y2="320.97732" id="svg_739" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="131.98603" y1="317.29394" x2="138.00402" y2="317.29394" id="svg_740" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 109.67422485351558,258.26950073242193) " fill="none" fill-opacity="null" x1="107.65953" y1="258.26956" x2="111.68892" y2="258.26956" id="svg_741" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="108.24837" y1="258.26956" x2="112.27776" y2="258.26956" id="svg_742" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="108.61511" y1="258.26956" x2="112.27776" y2="258.26956" id="svg_743" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 111.67422485351558,258.26950073242193) " fill="none" fill-opacity="null" x1="109.65953" y1="258.26956" x2="113.68892" y2="258.26956" id="svg_744" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <rect stroke-width="0.5" stroke="#5fbf00" transform="rotate(-45 111.82891845703118,249.2758636474609) " fill="none" fill-opacity="null" x="110.67273" y="245.80732" width="2.31233" height="6.937" id="svg_745"/>
                    <line stroke-width="0.5" transform="rotate(45 111.88768005371087,249.21859741210943) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="106.48429" y1="249.21856" x2="117.29106" y2="249.21856" id="svg_746" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="73.19697" y1="243.05812" x2="73.19697" y2="247.91323" id="svg_747" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 73.19696044921884,245.48567199707026) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="70.76247" y1="245.66813" x2="75.71214" y2="245.66813" id="svg_748" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 73.23728942871098,245.66813659667966) "/>
                    <line stroke="#00bf00" transform="rotate(90 156.46771240234378,238.88516235351562) " fill="none" fill-opacity="null" x1="151.06431" y1="238.88518" x2="161.87108" y2="238.88518" id="svg_749" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 153.1329803466797,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="147.73098" y1="252.4685" x2="158.53775" y2="252.4685" id="svg_750" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 156.4662170410156,261.8018188476563) " fill="none" fill-opacity="null" x1="151.06431" y1="261.80183" x2="161.87108" y2="261.80183" id="svg_751" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="156.44358" y1="242.80813" x2="156.44358" y2="247.66324" id="svg_752" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 156.44358825683597,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="154.00907" y1="245.41814" x2="158.95874" y2="245.41814" id="svg_753" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 156.48391723632812,245.41813659667972) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m153.00796,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_754" transform="rotate(180 156.84428405761716,304.55706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="179.60465" y1="267.40239" x2="179.60465" y2="313.14469" id="svg_755" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="179.74645" cy="271.76907" id="svg_756" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 183.92228698730466,271.5190734863282) " fill="none" fill-opacity="null" x1="181.90759" y1="271.51907" x2="185.93698" y2="271.51907" id="svg_757" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="182.49644" y1="271.51907" x2="186.52583" y2="271.51907" id="svg_758" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="182.86318" y1="271.51907" x2="186.52583" y2="271.51907" id="svg_759" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 179.46499633789065,239.1351776123047) " fill="none" fill-opacity="null" x1="174.06358" y1="239.13517" x2="184.87035" y2="239.13517" id="svg_761" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 176.13175964355466,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="170.73024" y1="252.4685" x2="181.53701" y2="252.4685" id="svg_762" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 179.4649963378906,261.8018188476563) " fill="none" fill-opacity="null" x1="174.06358" y1="261.80183" x2="184.87035" y2="261.80183" id="svg_763" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="179.44285" y1="242.80813" x2="179.44285" y2="247.66324" id="svg_764" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 179.44087219238284,245.23568725585932) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="177.00834" y1="245.41814" x2="181.95801" y2="245.41814" id="svg_765" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 179.48120117187509,245.41815185546872) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m176.00723,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_766" transform="rotate(180 179.84306335449216,304.55706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="204.10397" y1="267.40239" x2="204.10397" y2="313.14469" id="svg_767" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="204.24578" cy="271.76907" id="svg_768" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 208.42160034179685,271.5190734863282) " fill="none" fill-opacity="null" x1="206.40692" y1="271.51907" x2="210.43631" y2="271.51907" id="svg_769" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="206.99576" y1="271.51907" x2="211.02515" y2="271.51907" id="svg_770" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="207.3625" y1="271.51907" x2="211.02515" y2="271.51907" id="svg_771" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 203.96386718750003,239.1351776123047) " fill="none" fill-opacity="null" x1="198.5629" y1="239.13517" x2="209.36967" y2="239.13517" id="svg_773" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 200.63063049316406,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="195.22957" y1="252.4685" x2="206.03634" y2="252.4685" id="svg_774" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 203.96386718749997,261.8018188476563) " fill="none" fill-opacity="null" x1="198.5629" y1="261.80183" x2="209.36967" y2="261.80183" id="svg_775" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="203.94217" y1="242.80813" x2="203.94217" y2="247.66324" id="svg_776" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 203.93974304199216,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="201.50766" y1="245.41814" x2="206.45734" y2="245.41814" id="svg_777" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 203.98007202148432,245.41815185546878) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m200.50655,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_778" transform="rotate(180 204.34193420410153,304.55706787109375) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="75.89753" y="239.57023" id="svg_779" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-800</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="78.64742" y="246.06999" id="svg_780" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">630A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="157.89417" y="239.32024" id="svg_781" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="160.64407" y="245.82" id="svg_782" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">150A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="180.89344" y="239.32024" id="svg_783" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="183.64334" y="245.82" id="svg_784" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">150A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="206.14273" y="238.82026" id="svg_785" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="207.89263" y="245.32002" id="svg_786" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">150A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="236.10552" y1="267.40239" x2="236.10552" y2="313.14469" id="svg_788" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="236.24732" cy="271.76907" id="svg_789" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 240.17306518554685,271.5190734863282) " fill="none" fill-opacity="null" x1="238.15847" y1="271.51907" x2="242.18786" y2="271.51907" id="svg_790" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="238.74731" y1="271.51907" x2="242.7767" y2="271.51907" id="svg_791" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="239.11405" y1="271.51907" x2="242.7767" y2="271.51907" id="svg_792" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 235.96771240234378,238.88516235351562) " fill="none" fill-opacity="null" x1="230.56445" y1="238.88518" x2="241.37121" y2="238.88518" id="svg_793" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 232.63299560546872,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="227.23111" y1="252.4685" x2="238.03788" y2="252.4685" id="svg_794" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 235.9662170410156,261.8018188476563) " fill="none" fill-opacity="null" x1="230.56445" y1="261.80183" x2="241.37121" y2="261.80183" id="svg_795" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="235.94371" y1="242.80813" x2="235.94371" y2="247.66324" id="svg_796" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 235.9421081542969,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="233.50921" y1="245.41814" x2="238.45888" y2="245.41814" id="svg_797" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 235.98242187500014,245.41815185546872) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m232.50809,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67253,0l-0.00002,0z" id="svg_798" transform="rotate(180 236.34429931640622,304.55706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="259.10478" y1="267.40239" x2="259.10478" y2="313.14469" id="svg_799" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="259.24658" cy="271.76907" id="svg_800" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 263.42230224609375,271.5190734863282) " fill="none" fill-opacity="null" x1="261.40773" y1="271.51907" x2="265.43712" y2="271.51907" id="svg_801" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="261.99657" y1="271.51907" x2="266.02596" y2="271.51907" id="svg_802" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="262.36331" y1="271.51907" x2="266.02596" y2="271.51907" id="svg_803" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 258.9649963378907,239.13517761230472) " fill="none" fill-opacity="null" x1="253.56371" y1="239.13517" x2="264.37048" y2="239.13517" id="svg_804" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 255.63177490234378,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="250.23038" y1="252.4685" x2="261.03715" y2="252.4685" id="svg_805" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 258.9649963378906,261.8018188476563) " fill="none" fill-opacity="null" x1="253.56371" y1="261.80183" x2="264.37048" y2="261.80183" id="svg_806" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="258.94298" y1="242.80813" x2="258.94298" y2="247.66324" id="svg_807" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 258.9408874511719,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="256.50847" y1="245.41814" x2="261.45814" y2="245.41814" id="svg_808" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 258.9812011718751,245.41815185546872) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m255.50735,307.93518l3.83629,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0l-0.00001,0z" id="svg_809" transform="rotate(180 259.34307861328125,304.55706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="283.60411" y1="267.40239" x2="283.60411" y2="313.14469" id="svg_810" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="283.74591" cy="271.76907" id="svg_811" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 287.9216003417969,271.5190734863282) " fill="none" fill-opacity="null" x1="285.90705" y1="271.51907" x2="289.93644" y2="271.51907" id="svg_812" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="286.49589" y1="271.51907" x2="290.52528" y2="271.51907" id="svg_813" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="286.86263" y1="271.51907" x2="290.52528" y2="271.51907" id="svg_814" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 283.46386718750006,239.13517761230472) " fill="none" fill-opacity="null" x1="278.06304" y1="239.13517" x2="288.8698" y2="239.13517" id="svg_815" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 280.1306457519532,252.46850585937494) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="274.7297" y1="252.4685" x2="285.53647" y2="252.4685" id="svg_816" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 283.4638671875,261.8018188476563) " fill="none" fill-opacity="null" x1="278.06304" y1="261.80183" x2="288.8698" y2="261.80183" id="svg_817" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="283.4423" y1="242.80813" x2="283.4423" y2="247.66324" id="svg_818" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 283.4397583007813,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="281.00779" y1="245.41814" x2="285.95747" y2="245.41814" id="svg_819" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 283.4800720214843,245.41815185546878) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m280.00669,307.93518l3.83627,-6.75626l3.83628,6.75626l-7.67255,0l0,0z" id="svg_820" transform="rotate(180 283.84295654296875,304.55706787109375) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="237.39431" y="239.32024" id="svg_821" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="240.1442" y="245.82" id="svg_822" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">100A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="260.39357" y="239.32024" id="svg_823" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="263.14347" y="245.82" id="svg_824" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="285.64287" y="238.82026" id="svg_825" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="287.39276" y="245.32002" id="svg_826" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">32A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="306.60415" y1="267.40239" x2="306.60415" y2="313.14469" id="svg_827" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="306.74595" cy="271.76907" id="svg_828" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 310.9216003417969,271.5190734863282) " fill="none" fill-opacity="null" x1="308.90709" y1="271.51907" x2="312.93648" y2="271.51907" id="svg_829" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="309.49593" y1="271.51907" x2="313.52532" y2="271.51907" id="svg_830" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="309.86267" y1="271.51907" x2="313.52532" y2="271.51907" id="svg_831" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 306.46386718750006,239.13517761230472) " fill="none" fill-opacity="null" x1="301.06307" y1="239.13517" x2="311.86984" y2="239.13517" id="svg_832" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 303.1306457519531,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="297.72974" y1="252.4685" x2="308.53651" y2="252.4685" id="svg_833" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 306.4638671875,261.8018188476563) " fill="none" fill-opacity="null" x1="301.06307" y1="261.80183" x2="311.86984" y2="261.80183" id="svg_834" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="306.44234" y1="242.80813" x2="306.44234" y2="247.66324" id="svg_835" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 306.43975830078125,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="304.00783" y1="245.41814" x2="308.95751" y2="245.41814" id="svg_836" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 306.48007202148426,245.41815185546878) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m303.00672,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_837" transform="rotate(180 306.84295654296875,304.55706787109375) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="308.64291" y="238.82026" id="svg_838" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="310.3928" y="245.32002" id="svg_839" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">20A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="339.10434" y1="267.40239" x2="339.10434" y2="313.14469" id="svg_840" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="339.24615" cy="271.76907" id="svg_841" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 343.42230224609375,271.5190734863282) " fill="none" fill-opacity="null" x1="341.40729" y1="271.51907" x2="345.43668" y2="271.51907" id="svg_842" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="341.99613" y1="271.51907" x2="346.02552" y2="271.51907" id="svg_843" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="342.36287" y1="271.51907" x2="346.02552" y2="271.51907" id="svg_844" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 338.9649963378907,239.13517761230472) " fill="none" fill-opacity="null" x1="333.56327" y1="239.13517" x2="344.37004" y2="239.13517" id="svg_845" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 335.6317749023437,252.46850585937503) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="330.22994" y1="252.4685" x2="341.03671" y2="252.4685" id="svg_846" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 338.9649963378906,261.8018188476563) " fill="none" fill-opacity="null" x1="333.56327" y1="261.80183" x2="344.37004" y2="261.80183" id="svg_847" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="338.94254" y1="242.80813" x2="338.94254" y2="247.66324" id="svg_848" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 338.9408874511719,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="336.50803" y1="245.41814" x2="341.4577" y2="245.41814" id="svg_849" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 338.9812011718751,245.41815185546872) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m335.50691,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_850" transform="rotate(180 339.34307861328125,304.55706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="363.60367" y1="267.40239" x2="363.60367" y2="313.14469" id="svg_851" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="363.74547" cy="271.76907" id="svg_852" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 367.9216003417969,271.5190734863282) " fill="none" fill-opacity="null" x1="365.90661" y1="271.51907" x2="369.936" y2="271.51907" id="svg_853" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="366.49545" y1="271.51907" x2="370.52485" y2="271.51907" id="svg_854" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="366.86219" y1="271.51907" x2="370.52485" y2="271.51907" id="svg_855" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 363.46386718750006,239.13517761230472) " fill="none" fill-opacity="null" x1="358.0626" y1="239.13517" x2="368.86937" y2="239.13517" id="svg_856" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 360.130645751953,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="354.72926" y1="252.4685" x2="365.53603" y2="252.4685" id="svg_857" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 363.4638671875,261.8018188476563) " fill="none" fill-opacity="null" x1="358.0626" y1="261.80183" x2="368.86937" y2="261.80183" id="svg_858" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="363.44187" y1="242.80813" x2="363.44187" y2="247.66324" id="svg_859" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 363.4397583007813,245.23568725585938) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="361.00736" y1="245.41814" x2="365.95703" y2="245.41814" id="svg_860" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 363.4800720214843,245.41815185546878) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m360.00624,307.93518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_861" transform="rotate(180 363.84295654296875,304.55706787109375) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="340.39313" y="239.32024" id="svg_862" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="343.14303" y="245.82" id="svg_863" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="365.64243" y="238.82026" id="svg_864" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-100</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="367.39233" y="245.32002" id="svg_865" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">32A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="386.60371" y1="267.40239" x2="386.60371" y2="313.14469" id="svg_866" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" transform="rotate(90 386.46386718750006,239.13517761230472) " fill="none" fill-opacity="null" x1="381.06264" y1="239.13517" x2="391.8694" y2="239.13517" id="svg_871" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 383.13269042968756,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="377.7293" y1="252.4685" x2="388.53607" y2="252.4685" id="svg_872" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 386.4660339355469,261.8018188476563) " fill="none" fill-opacity="null" x1="381.06264" y1="261.80183" x2="391.8694" y2="261.80183" id="svg_873" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="386.44191" y1="242.80813" x2="386.44191" y2="247.66324" id="svg_874" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 386.44192504882824,245.23568725585926) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="384.00739" y1="245.41814" x2="388.95707" y2="245.41814" id="svg_875" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 386.4822387695312,245.41813659667974) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="388.64247" y="238.82026" id="svg_877" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-630</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="390.39236" y="245.32002" id="svg_878" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">630</text>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_880" y2="312.78978" x2="420.76574" y1="312.78978" x1="386.17849" fill="none"/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="421.10352" y1="267.40239" x2="421.10352" y2="313.14469" id="svg_882" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 417.6326904296875,252.468505859375) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="412.22911" y1="252.4685" x2="423.03588" y2="252.4685" id="svg_883" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 420.9660339355469,261.8018188476563) " fill="none" fill-opacity="null" x1="415.56245" y1="261.80183" x2="426.36921" y2="261.80183" id="svg_884" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" transform="rotate(90 419.96386718750006,239.13517761230472) " fill="none" fill-opacity="null" x1="414.56245" y1="239.13517" x2="425.36922" y2="239.13517" id="svg_887" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="419.94172" y1="242.80813" x2="419.94172" y2="247.66324" id="svg_888" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 419.9419250488282,245.23568725585943) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="417.50721" y1="245.41814" x2="422.45688" y2="245.41814" id="svg_889" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 419.98223876953125,245.41813659667972) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="422.14228" y="238.82026" id="svg_890" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-630</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="423.89218" y="245.32002" id="svg_891" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">630</text>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_893" y2="233.28974" x2="707.59869" y1="233.28974" x1="420.0118" fill="none"/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="456.60431" y1="267.90239" x2="456.60431" y2="313.64469" id="svg_894" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="456.74611" cy="272.26907" id="svg_895" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 460.6730651855469,272.0190734863282) " fill="none" fill-opacity="null" x1="458.65726" y1="272.01907" x2="462.68665" y2="272.01907" id="svg_896" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="459.2461" y1="272.01907" x2="463.27549" y2="272.01907" id="svg_897" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="459.61284" y1="272.01907" x2="463.27549" y2="272.01907" id="svg_898" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 456.4677124023438,239.38516235351565) " fill="none" fill-opacity="null" x1="451.06324" y1="239.38518" x2="461.87" y2="239.38518" id="svg_899" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 453.1329956054688,252.96850585937494) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="447.7299" y1="252.9685" x2="458.53667" y2="252.9685" id="svg_900" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 456.4662170410156,262.3018188476563) " fill="none" fill-opacity="null" x1="451.06324" y1="262.30183" x2="461.87" y2="262.30183" id="svg_901" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="456.44251" y1="243.30813" x2="456.44251" y2="248.16323" id="svg_902" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 456.442108154297,245.73568725585935) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="454.00799" y1="245.91814" x2="458.95767" y2="245.91814" id="svg_903" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 456.48242187500006,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m453.00688,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_904" transform="rotate(180 456.84429931640625,305.05706787109375) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="479.60357" y1="267.90239" x2="479.60357" y2="313.64469" id="svg_905" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="479.74538" cy="272.26907" id="svg_906" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 483.92230224609375,272.0190734863282) " fill="none" fill-opacity="null" x1="481.90652" y1="272.01907" x2="485.93591" y2="272.01907" id="svg_907" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="482.49536" y1="272.01907" x2="486.52475" y2="272.01907" id="svg_908" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="482.8621" y1="272.01907" x2="486.52475" y2="272.01907" id="svg_909" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 479.4649963378907,239.63517761230472) " fill="none" fill-opacity="null" x1="474.0625" y1="239.63517" x2="484.86927" y2="239.63517" id="svg_910" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 476.1317749023438,252.96850585937494) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="470.72917" y1="252.9685" x2="481.53594" y2="252.9685" id="svg_911" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 479.4649963378906,262.3018188476563) " fill="none" fill-opacity="null" x1="474.0625" y1="262.30183" x2="484.86927" y2="262.30183" id="svg_912" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="479.44177" y1="243.30813" x2="479.44177" y2="248.16323" id="svg_913" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 479.44088745117176,245.7356872558594) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="477.00726" y1="245.91814" x2="481.95693" y2="245.91814" id="svg_914" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 479.481201171875,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m476.00614,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_915" transform="rotate(180 479.84307861328125,305.0570678710938) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="504.1029" y1="267.90239" x2="504.1029" y2="313.64469" id="svg_916" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="504.2447" cy="272.26907" id="svg_917" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 508.42156982421875,272.0190734863282) " fill="none" fill-opacity="null" x1="506.40584" y1="272.01907" x2="510.43523" y2="272.01907" id="svg_918" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="506.99469" y1="272.01907" x2="511.02407" y2="272.01907" id="svg_919" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="507.36142" y1="272.01907" x2="511.02407" y2="272.01907" id="svg_920" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 503.9638671875,239.63517761230474) " fill="none" fill-opacity="null" x1="498.56183" y1="239.63517" x2="509.3686" y2="239.63517" id="svg_921" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 500.6306152343753,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="495.22849" y1="252.9685" x2="506.03526" y2="252.9685" id="svg_922" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 503.9638671875,262.3018188476563) " fill="none" fill-opacity="null" x1="498.56183" y1="262.30183" x2="509.3686" y2="262.30183" id="svg_923" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="503.9411" y1="243.30813" x2="503.9411" y2="248.16323" id="svg_924" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 503.93975830078136,245.73568725585935) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="501.50658" y1="245.91814" x2="506.45626" y2="245.91814" id="svg_925" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 503.9800415039062,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m500.50547,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_926" transform="rotate(180 504.34295654296875,305.0570678710938) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="457.8931" y="239.82024" id="svg_927" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="460.64299" y="246.32" id="svg_928" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="480.89236" y="239.82024" id="svg_929" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="483.64226" y="246.32" id="svg_930" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="506.14166" y="239.32026" id="svg_931" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="507.89155" y="245.82002" id="svg_932" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="527.10294" y1="267.90239" x2="527.10294" y2="313.64469" id="svg_933" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="527.24474" cy="272.26907" id="svg_934" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 531.4215698242189,272.0190734863282) " fill="none" fill-opacity="null" x1="529.40588" y1="272.01907" x2="533.43527" y2="272.01907" id="svg_935" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="529.99472" y1="272.01907" x2="534.02411" y2="272.01907" id="svg_936" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="530.36146" y1="272.01907" x2="534.02411" y2="272.01907" id="svg_937" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 526.9638671875001,239.63517761230474) " fill="none" fill-opacity="null" x1="521.56187" y1="239.63517" x2="532.36863" y2="239.63517" id="svg_938" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 523.6306152343752,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="518.22853" y1="252.9685" x2="529.0353" y2="252.9685" id="svg_939" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 526.9638671875001,262.3018188476563) " fill="none" fill-opacity="null" x1="521.56187" y1="262.30183" x2="532.36863" y2="262.30183" id="svg_940" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="526.94113" y1="243.30813" x2="526.94113" y2="248.16323" id="svg_941" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 526.9397583007814,245.73568725585935) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="524.50662" y1="245.91814" x2="529.4563" y2="245.91814" id="svg_942" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 526.9800415039064,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m523.50551,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_943" transform="rotate(180 527.3429565429688,305.0570678710938) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="529.1417" y="239.32026" id="svg_944" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="530.89159" y="245.82002" id="svg_945" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="559.10375" y1="267.90239" x2="559.10375" y2="313.64469" id="svg_947" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="559.24555" cy="272.26907" id="svg_948" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 563.1730346679689,272.0190734863282) " fill="none" fill-opacity="null" x1="561.1567" y1="272.01907" x2="565.18609" y2="272.01907" id="svg_949" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="561.74554" y1="272.01907" x2="565.77493" y2="272.01907" id="svg_950" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="562.11228" y1="272.01907" x2="565.77493" y2="272.01907" id="svg_951" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 558.9677124023439,239.38516235351568) " fill="none" fill-opacity="null" x1="553.56268" y1="239.38518" x2="564.36944" y2="239.38518" id="svg_952" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 555.6329956054689,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="550.22934" y1="252.9685" x2="561.03611" y2="252.9685" id="svg_953" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 558.9661865234376,262.3018188476563) " fill="none" fill-opacity="null" x1="553.56268" y1="262.30183" x2="564.36944" y2="262.30183" id="svg_954" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="558.94194" y1="243.30813" x2="558.94194" y2="248.16323" id="svg_955" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 558.942077636719,245.73568725585935) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="556.50743" y1="245.91814" x2="561.45711" y2="245.91814" id="svg_956" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 558.9824218750001,245.9181518554687) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m555.50632,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_957" transform="rotate(180 559.3442993164062,305.0570678710938) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="582.10301" y1="267.90239" x2="582.10301" y2="313.64469" id="svg_958" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="582.24481" cy="272.26907" id="svg_959" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 586.4223022460939,272.0190734863282) " fill="none" fill-opacity="null" x1="584.40596" y1="272.01907" x2="588.43535" y2="272.01907" id="svg_960" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="584.9948" y1="272.01907" x2="589.02419" y2="272.01907" id="svg_961" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="585.36154" y1="272.01907" x2="589.02419" y2="272.01907" id="svg_962" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 581.9649658203126,239.63517761230474) " fill="none" fill-opacity="null" x1="576.56194" y1="239.63517" x2="587.36871" y2="239.63517" id="svg_963" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 578.6317749023439,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="573.22861" y1="252.9685" x2="584.03538" y2="252.9685" id="svg_964" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 581.9649658203126,262.3018188476563) " fill="none" fill-opacity="null" x1="576.56194" y1="262.30183" x2="587.36871" y2="262.30183" id="svg_965" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="581.94121" y1="243.30813" x2="581.94121" y2="248.16323" id="svg_966" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 581.9408569335939,245.73568725585935) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="579.5067" y1="245.91814" x2="584.45637" y2="245.91814" id="svg_967" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 581.981201171875,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m578.50558,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_968" transform="rotate(180 582.3430786132812,305.0570678710938) "/>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="606.60234" y1="267.90239" x2="606.60234" y2="313.64469" id="svg_969" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="606.74414" cy="272.26907" id="svg_970" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 610.9215698242189,272.0190734863282) " fill="none" fill-opacity="null" x1="608.90528" y1="272.01907" x2="612.93467" y2="272.01907" id="svg_971" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="609.49412" y1="272.01907" x2="613.52351" y2="272.01907" id="svg_972" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="609.86086" y1="272.01907" x2="613.52351" y2="272.01907" id="svg_973" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 606.4638671875001,239.63517761230474) " fill="none" fill-opacity="null" x1="601.06127" y1="239.63517" x2="611.86803" y2="239.63517" id="svg_974" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 603.130615234375,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="597.72793" y1="252.9685" x2="608.5347" y2="252.9685" id="svg_975" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 606.4638671875001,262.3018188476563) " fill="none" fill-opacity="null" x1="601.06127" y1="262.30183" x2="611.86803" y2="262.30183" id="svg_976" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="606.44053" y1="243.30813" x2="606.44053" y2="248.16323" id="svg_977" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 606.4397583007811,245.73568725585952) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="604.00602" y1="245.91814" x2="608.9557" y2="245.91814" id="svg_978" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 606.4800415039062,245.9181518554687) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m603.00491,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_979" transform="rotate(180 606.8429565429688,305.0570678710938) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="560.39253" y="239.82024" id="svg_980" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-315</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="563.14243" y="246.32" id="svg_981" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="583.3918" y="239.82024" id="svg_982" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-140</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="586.1417" y="246.32" id="svg_983" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="608.6411" y="239.32026" id="svg_984" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-250</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="610.39099" y="245.82002" id="svg_985" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="629.60238" y1="267.90239" x2="629.60238" y2="313.64469" id="svg_986" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse fill="none" fill-opacity="null" cx="629.74418" cy="272.26907" id="svg_987" rx="2.25" ry="2.25" stroke="#bf0000"/>
                    <line transform="rotate(90 633.9215698242189,272.0190734863282) " fill="none" fill-opacity="null" x1="631.90532" y1="272.01907" x2="635.93471" y2="272.01907" id="svg_988" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="632.49416" y1="272.01907" x2="636.52355" y2="272.01907" id="svg_989" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line fill="none" fill-opacity="null" x1="632.8609" y1="272.01907" x2="636.52355" y2="272.01907" id="svg_990" stroke-linejoin="null" stroke-linecap="null" stroke="#bf0000"/>
                    <line stroke="#00bf00" transform="rotate(90 629.4638671875001,239.63517761230474) " fill="none" fill-opacity="null" x1="624.0613" y1="239.63517" x2="634.86807" y2="239.63517" id="svg_991" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 626.130615234375,252.96850585937497) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="620.72797" y1="252.9685" x2="631.53474" y2="252.9685" id="svg_992" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 629.4638671875001,262.3018188476563) " fill="none" fill-opacity="null" x1="624.0613" y1="262.30183" x2="634.86807" y2="262.30183" id="svg_993" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="629.44057" y1="243.30813" x2="629.44057" y2="248.16323" id="svg_994" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 629.4397583007812,245.7356872558594) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="627.00606" y1="245.91814" x2="631.95574" y2="245.91814" id="svg_995" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 629.4800415039062,245.91815185546875) "/>
                    <path stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" d="m626.00495,308.43518l3.83628,-6.75626l3.83627,6.75626l-7.67254,0l-0.00001,0z" id="svg_996" transform="rotate(180 629.8429565429688,305.0570678710938) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="633.39103" y="245.82002" id="svg_998" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="668.67015" y1="252.93765" x2="668.67015" y2="310.46081" id="svg_1000" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#5fbf00" fill="none" x1="668.96458" y1="267.85992" x2="688.98193" y2="267.85992" id="svg_1001" stroke-linejoin="null" stroke-linecap="null"/>
                    <line fill="none" stroke-width="null" fill-opacity="null" x1="658.5591" y1="253.90281" x2="658.5591" y2="262.32997" id="svg_1002" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <path fill="none" stroke-width="null" fill-opacity="null" d="m660.90183,322.20888l7.37472,-10.97037l7.37472,10.97037l-14.74945,0l0,0l0.00001,0z" id="svg_1003" stroke="#5fbf00"/>
                    <ellipse fill="none" fill-opacity="null" cx="668.67812" cy="258.29177" id="svg_1004" rx="2.25" ry="2.25" stroke="#5fbf00"/>
                    <line transform="rotate(90 672.6069946289064,258.04171752929693) " fill="none" fill-opacity="null" x1="670.58926" y1="258.04177" x2="674.61865" y2="258.04177" id="svg_1005" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="672.1781" y1="258.04177" x2="676.20749" y2="258.04177" id="svg_1006" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="670.79485" y1="258.04177" x2="674.4575" y2="258.04177" id="svg_1007" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 674.6069946289064,258.04171752929693) " fill="none" fill-opacity="null" x1="672.58926" y1="258.04177" x2="676.61865" y2="258.04177" id="svg_1008" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <ellipse fill="none" fill-opacity="null" cx="658.65534" cy="258.29177" id="svg_1009" rx="2.25" ry="2.25" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="663.62237" y1="315.63516" x2="667.69605" y2="315.63516" id="svg_1010" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 665.6626586914062,315.6351013183593) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="662.48342" y1="316.54633" x2="666.5571" y2="316.54633" id="svg_1011" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 664.5237426757812,316.54623413085943) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="669.08934" y1="315.63516" x2="673.16302" y2="315.63516" id="svg_1012" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-45 671.1297607421874,315.6351013183594) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="670.22829" y1="316.77412" x2="674.30198" y2="316.77412" id="svg_1013" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-45 672.2681884765624,316.7740783691406) " stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="666.43049" y1="243.13039" x2="671.1453" y2="243.13039" id="svg_1014" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#5fbf00"/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="663.43052" y1="238.13023" x2="673.64536" y2="238.13023" id="svg_1015" stroke-linejoin="undefined" stroke-linecap="undefined" transform="rotate(90 668.5409545898439,238.13021850585943) "/>
                    <line stroke="#5fbf00" fill="none" stroke-width="null" x1="688.44133" y1="277.30686" x2="688.44133" y2="282.16196" id="svg_1016" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 688.4443359375,279.7343444824219) "/>
                    <line stroke="#5fbf00" fill="none" stroke-width="null" x1="686.00682" y1="279.91686" x2="690.95649" y2="279.91686" id="svg_1017" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 688.4846801757815,279.9168090820312) "/>
                    <line stroke="#5fbf00" transform="rotate(90 688.3880004882814,273.6350708007813) " fill="none" fill-opacity="null" x1="682.98135" y1="273.63521" x2="693.78811" y2="273.63521" id="svg_1018" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(45 686.1348876953126,287.1355895996094) " fill="none" fill-opacity="null" x1="682.85281" y1="287.1356" x2="689.41693" y2="287.1356" id="svg_1019" stroke-linejoin="null" stroke-linecap="null"/>
                    <rect fill="none" fill-opacity="null" x="685.07866" y="295.03426" width="5.49431" height="16.48292" id="svg_1020" stroke="#5fbf00"/>
                    <path fill="#ff0000" d="m687.95496,302.6092l-1.00702,-2.31452l1.81066,2.31452l-1.81066,2.31451l1.00702,-2.31451z" id="svg_1021" stroke="#5fbf00" filter="url(#svg_198_blur)" transform="rotate(90 687.8563232421876,302.60913085937506) "/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_1022" y2="302.06447" x2="687.93971" y1="288.89531" x1="687.93971" fill-opacity="null" fill="none" stroke="#5fbf00"/>
                    <line stroke-linecap="null" stroke-linejoin="null" id="svg_1023" y2="317.5246" x2="687.93287" y1="312.31672" x1="687.93287" fill-opacity="null" fill="none" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="685.66636" y1="319.11627" x2="690.5454" y2="319.11627" id="svg_1024" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="686.84404" y1="320.97732" x2="689.36773" y2="320.97732" id="svg_1025" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="684.98299" y1="317.29394" x2="691.00098" y2="317.29394" id="svg_1026" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 662.6741943359376,258.26950073242193) " fill="none" fill-opacity="null" x1="660.6565" y1="258.26956" x2="664.68589" y2="258.26956" id="svg_1027" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="661.24534" y1="258.26956" x2="665.27473" y2="258.26956" id="svg_1028" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line fill="none" fill-opacity="null" x1="661.61208" y1="258.26956" x2="665.27473" y2="258.26956" id="svg_1029" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <line transform="rotate(90 664.6741943359376,258.26950073242193) " fill="none" fill-opacity="null" x1="662.6565" y1="258.26956" x2="666.68589" y2="258.26956" id="svg_1030" stroke-linejoin="null" stroke-linecap="null" stroke="#5fbf00"/>
                    <rect stroke-width="0.5" stroke="#5fbf00" transform="rotate(-45 664.8289184570311,249.2758636474609) " fill="none" fill-opacity="null" x="663.6697" y="245.80732" width="2.31233" height="6.937" id="svg_1031"/>
                    <line stroke-width="0.5" transform="rotate(45 664.8876342773439,249.21859741210932) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="659.48126" y1="249.21856" x2="670.28802" y2="249.21856" id="svg_1032" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#ff0000" fill="none" fill-opacity="null" x1="727.79548" y1="267.74199" x2="727.79548" y2="312.36846" id="svg_1033" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1034" y2="233.45645" x2="738.59736" y1="233.45645" x1="715.17664" fill="none"/>
                    <line stroke="#00bf00" transform="rotate(90 727.7210693359376,239.38516235351568) " fill="none" fill-opacity="null" x1="722.31414" y1="239.38516" x2="733.12091" y2="239.38516" id="svg_1035" stroke-linejoin="null" stroke-linecap="null"/>
                    <line transform="rotate(45 724.3877563476564,252.71849060058588) " stroke="#5fbf00" fill="none" fill-opacity="null" x1="718.98081" y1="252.71849" x2="729.78757" y2="252.71849" id="svg_1036" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 727.7175292968751,262.0518188476563) " fill="none" fill-opacity="null" x1="722.31414" y1="262.05182" x2="733.12091" y2="262.05182" id="svg_1037" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1038" y2="312.28979" x2="728.26411" y1="312.28979" x1="706.67673" fill="none"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="727.69341" y1="243.05812" x2="727.69341" y2="247.91323" id="svg_1039" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 727.6969604492186,245.4856719970704) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="725.2589" y1="245.66813" x2="730.20857" y2="245.66813" id="svg_1040" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 727.7373046875,245.6681365966797) "/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="730.39396" y="239.57023" id="svg_1041" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">ZM30S-140</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="733.14386" y="246.06999" id="svg_1042" font-size="3" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">50A</text>
                    <line stroke="#bf0000" fill="none" stroke-width="null" fill-opacity="null" x1="707.10194" y1="233.65257" x2="707.10194" y2="312.39471" id="svg_1044" stroke-linejoin="null" stroke-linecap="null"/>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="482.04512" y="343.74087" id="svg_1053" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">馈线柜</text>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="73.63358" cy="197.29018" id="svg_1075" rx="7.83314" ry="7.83314"/>
                    <path stroke="#ff0000" fill="none" stroke-width="null" fill-opacity="null" d="m68.84117,199.55694l4.75286,-6.37051l4.75286,6.37051l-9.50572,0l0,0l0,0z" id="svg_1076" transform="rotate(-180 73.59403228759766,196.37156677246094) "/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="73.63358" cy="209.54017" id="svg_1077" rx="7.83314" ry="7.83314"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="74.94697" y1="207.05813" x2="74.94697" y2="211.91323" id="svg_1079" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 74.94696044921879,209.4856719970703) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="69.26247" y1="209.66813" x2="74.21214" y2="209.66813" id="svg_1080" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 71.73728942871101,209.66813659667966) "/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="71.43355" y1="212.88023" x2="75.1484" y2="212.88023" id="svg_1081" stroke-linejoin="undefined" stroke-linecap="undefined" transform="rotate(90 73.2909698486328,212.88023376464847) "/>
                    <line stroke="#bf0000" transform="rotate(90 73.22106933593749,225.51017761230472) " fill="none" fill-opacity="null" x1="65.69269" y1="225.51017" x2="80.74946" y2="225.51017" id="svg_1082" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#00bf00" transform="rotate(90 73.22058105468749,180.92651367187503) " fill="none" fill-opacity="null" x1="65.35887" y1="180.92652" x2="81.0823" y2="180.92652" id="svg_1083" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" transform="rotate(90 727.8848876953126,224.92636108398443) " fill="none" fill-opacity="null" x1="720.02319" y1="224.92636" x2="735.74662" y2="224.92636" id="svg_1091" stroke-linejoin="null" stroke-linecap="null"/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="727.63127" cy="196.62352" id="svg_1093" rx="7.83314" ry="7.83314"/>
                    <path stroke="#ff0000" fill="none" stroke-width="null" fill-opacity="null" d="m722.83886,198.89028l4.75286,-6.37052l4.75286,6.37052l-9.50572,0l0,0z" id="svg_1094" transform="rotate(-180 727.5917358398438,195.70489501953125) "/>
                    <ellipse stroke="#ffffff" fill="none" fill-opacity="null" cx="727.63127" cy="208.87351" id="svg_1095" rx="7.83314" ry="7.83314"/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="728.94467" y1="206.39146" x2="728.94467" y2="211.24657" id="svg_1096" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 728.9446411132812,208.81900024414062) "/>
                    <line stroke="#00bf00" fill="none" stroke-width="null" x1="723.26016" y1="209.00147" x2="728.20983" y2="209.00147" id="svg_1097" stroke-linejoin="null" stroke-linecap="null" transform="rotate(45 725.7349853515625,209.00146484374991) "/>
                    <line stroke="#5fbf00" fill="none" fill-opacity="null" x1="725.43124" y1="212.21357" x2="729.14609" y2="212.21357" id="svg_1098" stroke-linejoin="undefined" stroke-linecap="undefined" transform="rotate(90 727.2886352539062,212.21356201171884) "/>
                    <line stroke="#00bf00" transform="rotate(90 727.21826171875,180.2598419189454) " fill="none" fill-opacity="null" x1="719.35656" y1="180.25985" x2="735.07999" y2="180.25985" id="svg_1099" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" fill="none" fill-opacity="null" x1="504.58558" y1="171.72975" x2="727.61482" y2="171.72975" id="svg_1100" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1105" y2="211.12336" x2="726.68085" y1="211.12336" x1="714.67668" fill="none"/>
                    <line stroke="#5fbf00" transform="rotate(90 714.8842773437501,211.38571166992193) " fill="none" fill-opacity="null" x1="711.14765" y1="211.38571" x2="718.62113" y2="211.38571" id="svg_1106" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 713.0511474609376,211.552230834961) " fill="none" fill-opacity="null" x1="710.98114" y1="211.55223" x2="715.12131" y2="211.55223" id="svg_1107" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 711.3012695312501,211.80213928222662) " fill="none" fill-opacity="null" x1="709.73125" y1="211.80214" x2="712.87142" y2="211.80214" id="svg_1108" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#bf0000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1109" y2="211.95625" x2="85.99928" y1="211.95625" x1="73.99511" fill="none"/>
                    <line stroke="#5fbf00" transform="rotate(90 86.45208740234374,211.71861267089847) " fill="none" fill-opacity="null" x1="82.71608" y1="211.71861" x2="90.18955" y2="211.71861" id="svg_1110" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 88.61895751953124,211.63513183593753) " fill="none" fill-opacity="null" x1="86.54956" y1="211.63513" x2="90.68973" y2="211.63513" id="svg_1111" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke="#5fbf00" transform="rotate(90 90.36907958984374,211.63504028320315) " fill="none" fill-opacity="null" x1="88.79967" y1="211.63504" x2="91.93985" y2="211.63504" id="svg_1112" stroke-linejoin="null" stroke-linecap="null"/>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="29.42297" y="306.01368" id="svg_1113" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">P:</text>
                    <text fill="yellow" stroke-width="0" x="27.75116" y="284.18236" id="svg_1114" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">IA:</text>
                    <text stroke="red" fill="#ff0000" stroke-width="0" stroke-opacity="null" x="27.42304" y="299.0558" id="svg_1115" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">IC:</text>
                    <text fill="#5fbf00" stroke-width="0" x="27.75116" y="291.97675" id="svg_1116" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">IB:</text>
                    <text fill="yellow" stroke-width="0" x="37.43012" y="284.18236" id="svg_1117" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{IA}}</text>
                    <text fill="yellow" stroke-width="0" x="59.92123" y="284.18236" id="svg_1118" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">A</text>
                    <text fill="#5fbf00" stroke-width="0" x="37.43012" y="291.96815" id="svg_1119" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{IB}}</text>
                    <text fill="#5fbf00" stroke-width="0" x="59.9212" y="291.96815" id="svg_1120" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">A</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="37.4223" y="299.05995" id="svg_1121" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{IC}}</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="59.92124" y="299.05994" id="svg_1122" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">A</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="37.43116" y="306.0071" id="svg_1123" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{P}}</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="59.90565" y="305.99947" id="svg_1124" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">KW</text>
                    <text stroke="#FFDBD2" fill="#ffffff" stroke-width="0" x="352.92936" y="18.38711" id="svg_1149" font-size="8" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">东方魅力配电室一次系统图</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="740.00663" y="313.62251" id="svg_11" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">COS:</text>
                    <text fill="yellow" stroke-width="0" x="744.67067" y="263.43384" id="svg_12" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">UA:</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="744.33473" y="277.32305" id="svg_14" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">UC:</text>
                    <text fill="#5fbf00" stroke-width="0" x="744.67067" y="269.72844" id="svg_15" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">UB:</text>
                    <text fill="yellow" stroke-width="0" x="757.1308" y="263.43384" id="svg_16" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{UA1}}</text>
                    <text fill="yellow" stroke-width="0" x="782.4996" y="263.43384" id="svg_18" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">V</text>
                    <text fill="#5fbf00" stroke-width="0" x="757.1308" y="269.71984" id="svg_19" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{UB1}}</text>
                    <text fill="#5fbf00" stroke-width="0" x="782.4996" y="269.71984" id="svg_20" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">V</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="757.13079" y="277.31157" id="svg_21" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{UC1}}</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="782.4996" y="277.31156" id="svg_22" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">V</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="757.13192" y="313.6159" id="svg_23" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{COS1}}</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="749.01435" y="305.76372" id="svg_25" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">P:</text>
                    <text fill="yellow" stroke-width="0" x="747.33473" y="284.18236" id="svg_26" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">IA:</text>
                    <text stroke="#ff0000" fill="#ff0000" stroke-width="0" stroke-opacity="null" x="747.01442" y="299.0558" id="svg_27" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve">IC:</text>
                    <text fill="#5fbf00" stroke-width="0" x="747.33473" y="291.97675" id="svg_28" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">IB:</text>
                    <text fill="yellow" stroke-width="0" x="757.1308" y="284.18236" id="svg_29" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{IA1}}</text>
                    <text fill="yellow" stroke-width="0" x="782.4996" y="284.18236" id="svg_30" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">A</text>
                    <text fill="#5fbf00" stroke-width="0" x="757.1308" y="291.96815" id="svg_31" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">{{IB1}}</text>
                    <text fill="#5fbf00" stroke-width="0" x="782.4996" y="291.96815" id="svg_32" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="#ffff56">A</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="757.13079" y="299.05995" id="svg_33" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{IC1}}</text>
                    <text fill="#ff0000" stroke-width="0" stroke-opacity="null" x="782.4996" y="299.05994" id="svg_34" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">A</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="757.13183" y="305.75714" id="svg_35" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">{{P1}}</text>
                    <text fill="#ffffff" stroke-width="0" stroke-opacity="null" x="782.4996" y="305.74951" id="svg_36" font-size="6" font-family="Helvetica, Arial, sans-serif" text-anchor="start" xml:space="preserve" stroke="red">KW</text>


                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_24" y2="52.12311" x2="307.43417" y1="52.12311" x1="209.18026" fill="none"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="307.17108" y1="52.12361" x2="307.17108" y2="76.81358" id="svg_37" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="306.58721" y1="77.06249" x2="348.78286" y2="77.06249" id="svg_38" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="347.25383" y1="52.39584" x2="570.11613" y2="52.39584" id="svg_39" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="395.83782" y1="76.12361" x2="395.83782" y2="173.48015" id="svg_41" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="504.50449" y1="76.12361" x2="504.50449" y2="171.48017" id="svg_42" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="504.58558" y1="171.72975" x2="727.61482" y2="171.72975" id="svg_43" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" transform="rotate(90 73.22106933593749,225.51017761230472) " fill="none" fill-opacity="null" x1="65.69269" y1="225.51017" x2="80.74946" y2="225.51017" id="svg_44" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="73.29905" y1="267.74199" x2="73.29905" y2="313.11845" id="svg_45" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_46" y2="312.78978" x2="96.26752" y1="312.78978" x1="72.34692" fill="none"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_47" y2="232.78974" x2="387.10042" y1="232.78974" x1="96.01357" fill="none"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="156.60539" y1="267.40239" x2="156.60539" y2="313.14469" id="svg_48" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="179.60465" y1="267.40239" x2="179.60465" y2="313.14469" id="svg_49" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="204.10397" y1="267.40239" x2="204.10397" y2="313.14469" id="svg_50" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="236.10552" y1="267.40239" x2="236.10552" y2="313.14469" id="svg_51" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="259.10478" y1="267.40239" x2="259.10478" y2="313.14469" id="svg_54" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="283.60411" y1="267.40239" x2="283.60411" y2="313.14469" id="svg_55" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="306.60415" y1="267.40239" x2="306.60415" y2="313.14469" id="svg_56" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="339.10434" y1="267.40239" x2="339.10434" y2="313.14469" id="svg_57" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="363.60367" y1="267.40239" x2="363.60367" y2="313.14469" id="svg_58" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="386.60371" y1="267.40239" x2="386.60371" y2="313.14469" id="svg_59" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="456.60431" y1="267.90239" x2="456.60431" y2="313.64469" id="svg_60" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="479.60357" y1="267.90239" x2="479.60357" y2="313.64469" id="svg_61" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="504.1029" y1="267.90239" x2="504.1029" y2="313.64469" id="svg_62" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="527.10294" y1="267.90239" x2="527.10294" y2="313.64469" id="svg_67" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="559.10375" y1="267.90239" x2="559.10375" y2="313.64469" id="svg_72" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="582.10301" y1="267.90239" x2="582.10301" y2="313.64469" id="svg_73" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="606.60234" y1="267.90239" x2="606.60234" y2="313.64469" id="svg_75" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="629.60238" y1="267.90239" x2="629.60238" y2="313.64469" id="svg_78" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" fill="none" fill-opacity="null" x1="727.79548" y1="267.74199" x2="727.79548" y2="312.36846" id="svg_83" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" transform="rotate(90 727.8848876953126,224.92636108398443) " fill="none" fill-opacity="null" x1="720.02319" y1="224.92636" x2="735.74662" y2="224.92636" id="svg_84" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speedd" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_93" y2="312.78978" x2="420.76574" y1="312.78978" x1="386.17849" fill="none"/>

                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" fill-opacity="null" x1="220.50448" y1="98.79028" x2="220.50448" y2="166.81353" id="svg_85" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" fill-opacity="null" x1="347.83777" y1="52.79029" x2="347.83777" y2="77.4802" id="svg_86" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" fill-opacity="null" x1="73.25379" y1="173.72974" x2="395.61602" y2="173.72974" id="svg_87" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" fill-opacity="null" x1="96.79906" y1="232.992" x2="96.79906" y2="313.11845" id="svg_88" stroke-linejoin="undefined" stroke-linecap="undefined"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="421.10352" y1="267.40239" x2="421.10352" y2="313.14469" id="svg_89" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_90" y2="233.28974" x2="707.59869" y1="233.28974" x1="420.0118" fill="none"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" fill="none" stroke-width="null" fill-opacity="null" x1="707.10194" y1="233.65257" x2="707.10194" y2="312.39471" id="svg_91" stroke-linejoin="null" stroke-linecap="null"/>
                    <line stroke-dasharray="13.87 13.87" :stroke-dashoffset="speeded" stroke="#FFD700" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_92" y2="312.28979" x2="728.26411" y1="312.28979" x1="706.67673" fill="none"/>
                    </g>
                </svg>
            <Icon @click.native="toggleFullScreen" :type="fullscreen ? 'md-contract' : 'md-expand'" class="btn btn-default btn-map-fullscreen"
                :size="23">
            </Icon>
        </div>
    </div>
</template>
<script>
    import fullscreen from 'vue-fullscreen'
    import Vue from 'vue'
    Vue.use(fullscreen)
    export default {
        name: 'dongfangScada',
        props: {
            eleData: Array
        },
        data() {
            return {
                UA: 0,
                UB: 0,
                UC: 0,
                P: 0,
                IA: 0.0,
                IB: 0.0,
                IC: 0.0,
                COS: 0.0,

                UA1: 0,
                UB1: 0,
                UC1: 0,
                P1: 0,
                IA1: 0.0,
                IB1: 0.0,
                IC1: 0.0,
                COS1: 0.0,

                customerId: 1,
                MaxResultCount: 1,
                speedd: 0,
                speeded: 0,
                ElectricityMeterList: [],

                fullscreen: false,
                style: {
                    width: '100%',
                    height: '100%',
                },
            }
        },
        watch: {
            eleData() {
                this.init()
            }
        },
        methods: {
            init() {
                const data = this.eleData
                data.forEach(element => {
                    if (element.electricityMeterInfoId === 1) {
                        this.UA = isNaN(element.uabVoltage) ? '' : element.uabVoltage
                        this.UB = isNaN(element.ubcVoltage) ? '' : element.ubcVoltage
                        this.UC = isNaN(element.ucaVoltage) ? '' : element.ucaVoltage
                        this.P = isNaN(element.totalActivePower / 1000) ? '' : element.totalActivePower / 1000
                        this.IA = isNaN(element.aPhaseCurrent) ? '' : element.aPhaseCurrent
                        this.IB = isNaN(element.bPhaseCurrent) ? '' : element.bPhaseCurrent
                        this.IC = isNaN(element.cPhaseCurrent) ? '' : element.cPhaseCurrent
                        this.COS = isNaN(element.totalPhasePowerFactor) ? '' : element.totalPhasePowerFactor
                    } else if (element.electricityMeterInfoId === 2) {
                        this.UA1 = isNaN(element.uabVoltage) ? '' : element.uabVoltage
                        this.UB1 = isNaN(element.ubcVoltage) ? '' : element.ubcVoltage
                        this.UC1 = isNaN(element.ucaVoltage) ? '' : element.ucaVoltage
                        this.P1 = isNaN(element.totalActivePower / 1000) ? '' : element.totalActivePower / 1000
                        this.IA1 = isNaN(element.aPhaseCurrent) ? '' : element.aPhaseCurrent
                        this.IB1 = isNaN(element.bPhaseCurrent) ? '' : element.bPhaseCurrent
                        this.IC1 = isNaN(element.cPhaseCurrent) ? '' : element.cPhaseCurrent
                        this.COS1 = isNaN(element.totalPhasePowerFactor) ? '' : element.totalPhasePowerFactor
                    }
                })
            },
            scadaInit() {
                window.zoomTiger = svgPanZoom('#dongfang', {
                    zoomEnabled: true,
                    controlIconsEnabled: true,
                    fit: true,
                    center: true
                    // viewportSelector: document.getElementById('dongfang').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
                })
            },
            toggleFullScreen() {
                this.$fullscreen.toggle(this.$el.querySelector('.dongfang-svg'), {
                    wrap: false,
                    callback: this.fullscreenChange
                })
            },
            fullscreenChange(fullscreen) {
                this.fullscreen = fullscreen
                // map.checkResize()
                // map.setMapStyle({
                //     style: fullscreen ? 'bluish' : 'normal'
                // })
            },
        },
        mounted() {
            this.init()
            this.scadaInit()
            if (this.timer) {
                clearInterval(this.timer)
            } else {
                this.timer = setInterval(() => {
                    this.speedd -= 5
                    this.speeded += 5
                }, 500)
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }

</script>
<style lang="less">
    .dongfang-svg {
        width: 100%;
        height: 100%;
        min-height: 500px;
        min-width: 1000px;
        background: black;
        position: relative;

        .btn-map-fullscreen {
            position: absolute;
            right: 10px;
            top: 40px;
            width: 36px;
            height: 36px;
            padding: 0;
            font-size: 36px;
            line-height: 36px;
            text-align: center;
            outline: none
        }

        .ivu-icon .ivu-icon-md-expand {
            vertical-align: text-top;
            line-height: 1
        }

        &.fullscreen {
            width: 100%;
            height: 100%
        }
    }

</style>
