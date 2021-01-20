/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_10_49_25_Pro-1601040452997.jpg","5a9427f01c3c6e7fee934eaa0c030a44"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_10_49_25_Pro-1601040479106.jpg","c149a128436fce46711cf79fcbefafe4"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_10_49_25_Pro.jpg","e15f522a4f54c5a27a0bae3550acbe92"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_11_21_11_Pro-1601040435735.jpg","3bd13e025ba3b5212919209cbe3dd444"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_11_21_11_Pro-1601040488163.jpg","08a3021b608e8425c267f8d3b84b1ee8"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_11_21_11_Pro.jpg","f644ec84f220e427121c4f4cd8c7a0a1"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_16_55_Pro-1601040398667.jpg","382ebf794f15c72f6e1107657c88c6f4"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_16_55_Pro-1601040507875.jpg","4e1f2a1b7b36e39de9c812b911ff2c7f"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_16_55_Pro.jpg","f8ca3870c6f09824901b6410dcf59504"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_22_52_Pro.jpg","ce759a6ddbd1a4e4fc259367deb55a9b"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_23_00_Pro-1601040419342.jpg","812174b92be909fe9a19cd5f82d94d55"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_23_00_Pro-1601040497927.jpg","c8594f61364b555e77b2a500ff4650d2"],["E:/blog/public/2020/09/25/GANomaly/WIN_20200505_13_23_00_Pro.jpg","8b4d3f385cd08eaa2aad0fa8034bbe6a"],["E:/blog/public/2020/09/25/GANomaly/image-20200925172420547.png","46d9e5f400c96606790ed715bb965d50"],["E:/blog/public/2020/09/25/GANomaly/index.html","c1d96e4128bf9fcdb338e58b6fcd7afb"],["E:/blog/public/2020/09/25/GANomaly/report200708_02.jpg","e3652691742008f0862c0de725c31fb6"],["E:/blog/public/2020/09/25/GANomaly/report200708_03.jpg","97b37ef8b361c47b3fb1efae2cd45529"],["E:/blog/public/2020/09/25/GANomaly/report200708_04.jpg","de77c894eeed52cccff74731b659cd3b"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/000a4bcdd.jpg","dda0f5f6a71ba9601cae5a8afede9b9b"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/00ac8372f-1601113129175.jpg","85ba39bfd2fc18cd1124ff342e893510"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/00ac8372f.jpg","85ba39bfd2fc18cd1124ff342e893510"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/0a5a82b86.jpg","bc35ea0f8a25f2c397b00b5f1e63f2c8"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/1b5427b35.jpg","959c934092d8c0d637523e637849e40e"],["E:/blog/public/2020/09/26/Severstal-Steel-Defect-Detection/index.html","debda88d505613bae63eaf94354de43c"],["E:/blog/public/2020/09/28/20200928/index.html","d66dec3686cdfc039910914367f0433b"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/fcdd_explanations_mvtec.png","8c50cd2eb54bf8dde8eff4afe318faa1"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200929131357085.png","ccfae426bb2f616f066d88e1b60b1809"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200929165639919.png","79b8b36f6e7021f0d46e506606ccc8f1"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200929165906631.png","38dae5e743ae3f5253ecf8fea0d49159"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930085559163.png","d9b7891cc07f8c13d8a6c1479e129fce"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930085633233.png","04a469cd330ac09d8b3a2391d7a0f6dc"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930085658444.png","f446f5364602fd0525070bb0bcc11640"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930090701103.png","69c4ebb0e79934496a66a5df6f9d45bb"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930095056286.png","f03ff9cb1f86d72854bc163c4fc7ea5e"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930102836331.png","16ac74247d8c929dae6c1c7d85307837"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/image-20200930103019174.png","233f218685735940b9d4cff61b7347c0"],["E:/blog/public/2020/09/29/Explainable-Deep-One-Class-Classification/index.html","4fbfbb14b83f2479e6b2cefb806cd39f"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_11_50_30_Pro-1601560908625.jpg","f6d20bd17e8bb1c25ff55dba4285b2a0"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_11_50_30_Pro-1601561305616.jpg","0030b90a2be7c028f3686f588834e123"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_11_50_30_Pro-1601563009565.jpg","e99b568e3d042dd61ad7cb52b00b96d5"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_11_50_30_Pro.jpg","a133e13e45c8cab2ff9834a70eeb791b"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_16_55_Pro-1601040507875.jpg","4e1f2a1b7b36e39de9c812b911ff2c7f"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_16_55_Pro-1601560927610.jpg","1c6aad381c52dddb14814560dc1c35c7"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_16_55_Pro-1601561315689.jpg","5a93a1ae11eeb43e75fbfaf2de066e85"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_16_55_Pro-1601563020535.jpg","db44c67860133965c4890bbb9a092c4c"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_16_55_Pro.jpg","def7d93fd431eb6be8dc867e0701dacc"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_25_23_Pro-1601560944405.jpg","af95cf1923c528dd72650b19b02746fc"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_25_23_Pro-1601561334960.jpg","1cf3804c30e96d0b7b36fb0d3fe51e02"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_25_23_Pro-1601563029553.jpg","8cc6684e2c0ca9d3f513cb7516b8efe2"],["E:/blog/public/2020/10/01/20201001/WIN_20200505_13_25_23_Pro.jpg","e5b72792cd6bd1fe0be07de2e465f0e3"],["E:/blog/public/2020/10/01/20201001/compose-1601555534648.jpg","7f30bd89b30b20679ac781df4961272c"],["E:/blog/public/2020/10/01/20201001/compose-1601555565145.jpg","f4c8ce240e20a099de8aff889392c44e"],["E:/blog/public/2020/10/01/20201001/compose-1601555580231.jpg","746772657865b62f53d32fd389c47f6b"],["E:/blog/public/2020/10/01/20201001/compose-1601555593934.jpg","75f335522ceee3fbb132d3540c5f04b8"],["E:/blog/public/2020/10/01/20201001/compose-1601556127362.jpg","b1902f53d93fed398533fa91d506b7e1"],["E:/blog/public/2020/10/01/20201001/compose-1601556144400.jpg","2482bb140105be7752bd4117f5968d41"],["E:/blog/public/2020/10/01/20201001/compose-1601556158743.jpg","4d3ff4c09181c64c10f274e66439ea35"],["E:/blog/public/2020/10/01/20201001/compose-1601556172190.jpg","1a2b60db2569932ec9f8181bc2d1a39c"],["E:/blog/public/2020/10/01/20201001/compose-1601556187145.jpg","aa14a7d00f32d78a39791ba2d28ea142"],["E:/blog/public/2020/10/01/20201001/compose-1601556848605.jpg","9faab8568fcf0688d425cd5318956236"],["E:/blog/public/2020/10/01/20201001/compose-1601556868004.jpg","b0df21bc3653a9444a3669055eaacfee"],["E:/blog/public/2020/10/01/20201001/compose-1601556884938.jpg","ebf596caff652b0a69b4638859278c60"],["E:/blog/public/2020/10/01/20201001/compose-1601556902933.jpg","329cd79fe2415ffae72f81e5d09ceb00"],["E:/blog/public/2020/10/01/20201001/compose-1601556928098.jpg","1687de3645d26c93367090ed60d675ef"],["E:/blog/public/2020/10/01/20201001/compose.jpg","34bd9c34fde7d1e560f3fc8550625de0"],["E:/blog/public/2020/10/01/20201001/index.html","f711d6a5b154ea774ce085319f776a67"],["E:/blog/public/2020/10/04/Ameme0/index.html","fb38d1c648aadae0878ce7a2b780672a"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005092614080.png","9024099ff8f81e8b811f283d70f9c79d"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005115316807.png","d58a7ad2fc6acb15c091fc2ac8ed8d77"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005124155887.png","7e9256e6fa264a15dcab331d1608937b"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005124216050.png","a52a53ebc053b3540268d3cfe533a3d9"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005141445196.png","011d99432ddbbeef7fe3a5c21cf3f5cd"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005145751076.png","6c8a9d80a08e5920ea4a14154741a453"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005151142112.png","53c3449e024664529555b103b27e1087"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005153743759.png","7405dc34689a6769f1140a19573820fd"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005154729263.png","a90a30c2bd77ac0f5c59f4ff34d4e43a"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174028398.png","68838e7dfda1017d05b90c271a3917dc"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174145219.png","a7325534c2dc1e77ad14128011977e06"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174208215.png","dcf05654bb4468dd21ed977910b703fd"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174221996.png","c309e7f89e88de35b026a6f8968a7247"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174312865.png","811f81b999e8ba47746ee5e7317980b5"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174407954.png","13b2e057dedda4610460ef9111acebef"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174507048.png","73edc0fc994dcfbb427d3900a173ecaa"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174532954.png","d2144b3ab71f012cf24ffa044b574ae3"],["E:/blog/public/2020/10/05/TextBoxes/image-20201005174553356.png","3685e2aeee68af0e3680835fa5465985"],["E:/blog/public/2020/10/05/TextBoxes/index.html","5550f256e732c12f080e060c83d3d78a"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/image-20201005115316807.png","d58a7ad2fc6acb15c091fc2ac8ed8d77"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/image-20201005174208215.png","dcf05654bb4468dd21ed977910b703fd"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/image-20201005174312865.png","811f81b999e8ba47746ee5e7317980b5"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/image-20201005174407954.png","13b2e057dedda4610460ef9111acebef"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/image-20201005194925636.png","824e1fb7640bac76f0350ff9aba275e0"],["E:/blog/public/2020/10/05/TextBoxesのまとめ/index.html","2dd1c52d2b776ddc84d184b175535e7c"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006102349002.png","c4976760a5c7e9a8d2d8d06b07ba49b6"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006103224249.png","10ee827f946217b3dd541910a0f97526"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006104206096.png","0d68e7cb6596b9403ac3ab48e70d009b"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006105504750.png","61f0ac53227e9d679f1bc55af85c9f21"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006133136317.png","eb9319807cde30967e53672ee7cbac58"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006133200640.png","c81e4c2e240555307b27ec25c3134a80"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006135302580.png","2197d8c6047aa677ce403519653cacee"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006135729502.png","6c670e7e2f95177a9f44929f4ef46367"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/image-20201006160029037.png","f9b81fc86eb9c34cbfd32bf58e47e1a9"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networks/index.html","bf57bf1832b2131e48f52788b8ab99d3"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networksのまとめ/image-20201006103224249.png","10ee827f946217b3dd541910a0f97526"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networksのまとめ/image-20201006135302580.png","2197d8c6047aa677ce403519653cacee"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networksのまとめ/image-20201006164023908.png","886f67c60d5c00ed6b00fce16abe378a"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networksのまとめ/image-20201006190523832.png","0b0fd993a713e8a32638ccc9fd51e6d0"],["E:/blog/public/2020/10/05/Towards-Accurate-Scene-Text-Recognition-with-Semantic-Reasoning-Networksのまとめ/index.html","d6727c417a84fdede48b6473e94d807a"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006200239320.png","8bae2573361bd70fafa3ebab8a7d1b1c"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006200725987.png","e41aacf59c71ae1bce93a61b182cb820"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006205233005.png","755ac1504c505e414d09c0154386a682"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006215032022.png","d6228898ade3a74b02ac808aa0576e2d"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006215125715.png","fb891fb4970c53976f419f7da3781a01"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201006221510473.png","7f73ae247de0dcc901a20aaa5e62dec9"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201007085648624.png","1857087739415aa472e2f4591f70a741"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/image-20201007085728935.png","17a9e95bdce14f840afaafe2682a0753"],["E:/blog/public/2020/10/06/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisons/index.html","a0fdd3ac692e62c558ef8625218e4d80"],["E:/blog/public/2020/10/07/Robust-Scene-Text-Recognition-with-Automatic-Rectification/image-20201007164948509.png","0865f2ab914e0c1cab0f6ca12f014be0"],["E:/blog/public/2020/10/07/Robust-Scene-Text-Recognition-with-Automatic-Rectification/image-20201007174257718.png","ed0e9d530641b815c6871b5f7edf24b0"],["E:/blog/public/2020/10/07/Robust-Scene-Text-Recognition-with-Automatic-Rectification/image-20201007204120049.png","b094c86ce34cf5c2518786ea56ca4712"],["E:/blog/public/2020/10/07/Robust-Scene-Text-Recognition-with-Automatic-Rectification/image-20201008090331155.png","a550ea70546313e8a5c6977776f76f8a"],["E:/blog/public/2020/10/07/Robust-Scene-Text-Recognition-with-Automatic-Rectification/index.html","a2ea0f7e4d33e9fa6a4ff4e2c5afc6c5"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201006205233005.png","755ac1504c505e414d09c0154386a682"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201007111212019.png","63f5441a4c20519c50c55d2abb509c56"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201007121603010.png","c6fffcfa622448e0ae48e68ffb1008ad"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201007121622242.png","9264e1772d4a3092570f12a7112ba8c5"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201007132202151.png","ab31d3bca9834bf2d9ca3f0d2cb6f991"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/image-20201007134306803.png","d7f3da4c944a42072dd6bacba266d80b"],["E:/blog/public/2020/10/07/What-Is-Wrong-With-Scene-Text-Recognition-Model-Comparisonsのまとめ/index.html","83f60ec3b6d42f6078f273e87ed5d767"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008102730905.png","7f218417f42f7874bdb9a5c37e10112a"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008105044588.png","f434c25e3bce1e3abba44ef60875152a"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008105841534.png","bfa69ace6d202ebcb9fae0b0d59fa37c"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008110049160.png","2f83239f246b70a074ede8e6fb358e73"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008115346681.png","0f67d1f89d429b150c8cf961be1fdc17"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008115544422.png","8b172504b179085a13e30cea3528f49a"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008132604165.png","b941f31698e7796c58241c60a6c6451c"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/image-20201008132632822.png","b941f31698e7796c58241c60a6c6451c"],["E:/blog/public/2020/10/08/Robust-Scene-Text-Recognition-with-Automatic-Rectificationのまとめ/index.html","d927ae6e9e54478c40afa532293e265f"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009153843129.png","29fbc8620884f64186712fbe4cd31194"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009162931234.png","026cb4d147e8cdbe30f2dc656c156390"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009163013420.png","2bb01efad3f89704a1a26c0e6d27ce5d"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009184426534.png","3801a04a35347401f3babaa2c34a5ceb"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009191935828.png","a12aa97b30f6ba3eab1d9ee6745ca07e"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009192239446.png","f8d60ca820ec0235e246e7fa10702a52"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009195158695.png","28f8df0b2c74c446ca80329f4d8a9c1a"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009195222505.png","d9a10e083dcc138fc1f8b88452da4bb4"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009200354288.png","fdad16482cdf6ea92791131ab81b8848"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009200521330.png","99fd01f2052e7cf758ab2974d23a5944"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009200709532.png","1e071cf3aea3f7b2f0a89aba119b842d"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009202225517.png","5b6b8fa3d2e09508264e55d059e55c7e"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009202945143.png","ca75bb194e22c7eaa75743cbf647c21e"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009203119502.png","4341d50391d0fb39c1f6bfe9038e86c1"],["E:/blog/public/2020/10/09/CRNNのまとめ/image-20201009204249758.png","fc27d6555791d61a5a89b8b706ddf285"],["E:/blog/public/2020/10/09/CRNNのまとめ/index.html","606a7b58b5757aee6ca831d75a64c33b"],["E:/blog/public/2020/10/16/CRNN-pytorch/index.html","21bd3bdaaf78260c92fa5dc0305b5cb0"],["E:/blog/public/2020/10/19/STR_Project/demo_11.jpg","f801881f6ad301ca44422b75d3795656"],["E:/blog/public/2020/10/19/STR_Project/demo_13.jpg","cd474dc7ea4dd2f9579799c701cffd40"],["E:/blog/public/2020/10/19/STR_Project/demo_15.jpg","3f112edf90d34bb77b34843dc36cd622"],["E:/blog/public/2020/10/19/STR_Project/demo_16.jpg","e86795f41731dad11127106fcebc7c50"],["E:/blog/public/2020/10/19/STR_Project/demo_17.jpg","e742a6d5732817e7039682f0bc3d56af"],["E:/blog/public/2020/10/19/STR_Project/demo_18.jpg","9882e40e49aaf3c2b9ba759a5252d3fe"],["E:/blog/public/2020/10/19/STR_Project/demo_2.jpg","5484e3038c27af99d357ffb5ecc6001a"],["E:/blog/public/2020/10/19/STR_Project/demo_20.jpg","8e1297cf86f801cde76738d76fe93912"],["E:/blog/public/2020/10/19/STR_Project/demo_5.png","59e4e9511d161087dfebbbf434fca001"],["E:/blog/public/2020/10/19/STR_Project/demo_7.png","d3753c5e96078622ad16de4c9605b62a"],["E:/blog/public/2020/10/19/STR_Project/demo_8.jpg","9603b56258de8cc5bc482d2774972431"],["E:/blog/public/2020/10/19/STR_Project/demo_9.jpg","543be9aec38037bd0730c1e9e855b533"],["E:/blog/public/2020/10/19/STR_Project/index.html","c080140a65c69a8fd0f7bdfc1cb091b5"],["E:/blog/public/2020/10/19/STR_Project/res_demo_11.jpg","8e8027297227a41512f1e8234b9c9a6e"],["E:/blog/public/2020/10/19/STR_Project/res_demo_11_mask.jpg","2c8e8d8ab61cfe71f30e40baa5ca011d"],["E:/blog/public/2020/10/19/STR_Project/res_demo_12.jpg","678b09d8e2c1a226ae9cf603894d5146"],["E:/blog/public/2020/10/19/STR_Project/res_demo_12_mask.jpg","c7f073463545f82658d1a99b23af1ebe"],["E:/blog/public/2020/10/19/STR_Project/res_demo_13.jpg","8414e4975718ff03f7112e2e004643da"],["E:/blog/public/2020/10/19/STR_Project/res_demo_13_mask.jpg","f2445a0d868869585918fda4c470564a"],["E:/blog/public/2020/10/19/STR_Project/res_demo_14.jpg","4241b4ef5a4cc2de5765f71f8dd2ef5c"],["E:/blog/public/2020/10/19/STR_Project/res_demo_14_mask.jpg","e6473fc8d19122f7e414defbd30f1151"],["E:/blog/public/2020/10/23/OCR/craft_example.gif","7ffa64542ab6b4607dbed1cf2bf6ad1f"],["E:/blog/public/2020/10/23/OCR/image-20201023211552574.png","32e26a3468783b1ac5b8499ccb7118ae"],["E:/blog/public/2020/10/23/OCR/image-20201023211818920.png","c05b123c9e9172625d80d04fbd882238"],["E:/blog/public/2020/10/23/OCR/image-20201023212412542.png","13683b9a2b66f46b40748e1eec6db4c8"],["E:/blog/public/2020/10/23/OCR/image-20201023214922720.png","db72c47f65b1d8c6ada86d9c28bad319"],["E:/blog/public/2020/10/23/OCR/image-20201023215134939.png","8bc4d199dafbf2d2ed253ccee34d823e"],["E:/blog/public/2020/10/23/OCR/image-20201023220223466.png","13ec441b3a0f623b4ce1deaa116ab173"],["E:/blog/public/2020/10/23/OCR/index.html","0410d3c64dd2d3f1c82dac62a8b1da87"],["E:/blog/public/2020/10/28/20201028/image-20201028170657069.png","397f703cc003b0a428687f5cbb1095b6"],["E:/blog/public/2020/10/28/20201028/image-20201028170742758.png","d5ccc4382d0696479e760495ae3bd077"],["E:/blog/public/2020/10/28/20201028/image-20201028224022384.png","1309989b2a70e8d2ef8281453cb46f96"],["E:/blog/public/2020/10/28/20201028/index.html","eaa7b865ae898429f616e98e84a9b7b3"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029110239904.png","e6651f6324308fcc4585e59d7b781405"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029152559486.png","e6f988508e38293920b0aa060deab1f7"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029162629522.png","dc7547881801eb22aa12356c991f098d"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029172314834.png","4cb8fd1cb483430819e548f634ca2889"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029172502670.png","7f7e25d4542b3f3a68045ed806f8736f"],["E:/blog/public/2020/10/29/EfficientNet/image-20201029174110205.png","306398d223f249da75916ff49fb495fd"],["E:/blog/public/2020/10/29/EfficientNet/index.html","371f8298c580fc7e14ab3802d8b1dedd"],["E:/blog/public/2020/11/02/TorchScript/image-20201104211518728.png","bdb634c327188cdc27171d4fc5babad4"],["E:/blog/public/2020/11/02/TorchScript/image-20201104211935082.png","52145b301f10bc8c89fbade36be38815"],["E:/blog/public/2020/11/02/TorchScript/index.html","99ecdbc2fc6701f589806e963e53935d"],["E:/blog/public/2020/11/13/浓淡补正/index.html","a44fd1c5175d0722cbc41677961a532e"],["E:/blog/public/2020/11/30/20201130/index.html","8d5a2368b9cf839456257cceeef696b3"],["E:/blog/public/archives/2020/09/index.html","c23a9cd5389d9db25126d1b970b95686"],["E:/blog/public/archives/2020/10/index.html","f7392074f3643dd2d8570655230046e8"],["E:/blog/public/archives/2020/10/page/2/index.html","402a8926f9f5d834087e14814fa32c9f"],["E:/blog/public/archives/2020/11/index.html","fbb33c83d4ca1255939d103ef3990252"],["E:/blog/public/archives/2020/index.html","8c714272fde5dec13a6d27b25e8a0c25"],["E:/blog/public/archives/2020/page/2/index.html","06af5dac619376abe583eedb9cc9f5b1"],["E:/blog/public/archives/2020/page/3/index.html","23c473bb75d03c9eec116447f85c2cd8"],["E:/blog/public/archives/index.html","827b6847c2285c7ee721edb9ec419ec8"],["E:/blog/public/archives/page/2/index.html","978a37054ca23ec5ed42e5be70a83ba1"],["E:/blog/public/archives/page/3/index.html","1423ecb13badbe05c7ca93f9f0eda8b3"],["E:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/categories/学习/index.html","b053306440b599f5244aacb907b05e88"],["E:/blog/public/categories/学习/kaggle/index.html","0d060c60be97024a2ab07b8da61ce54f"],["E:/blog/public/categories/学习/page/2/index.html","ff05b86ebd1ca2cdd8b390a0a555ec2a"],["E:/blog/public/categories/工作/index.html","6aca46bfedfe51b61e5a8e04c6ba2e36"],["E:/blog/public/categories/生活/index.html","0f569f913be5d6b4e97c2b56c0e019fd"],["E:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/blog/public/css/index.css","f84d018490b805cc7c0b674d993ffa3d"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","310cb9127a0c38f2e8a91d80d2c8a4b5"],["E:/blog/public/img/cover/39578544_p1.jpg","962bf16c4772a825726ba21054e96166"],["E:/blog/public/img/cover/39578544_p10.jpg","3a38ac7b6b9f18abd63c84ffb5376334"],["E:/blog/public/img/cover/39578544_p9.jpg","70d8c9627e32dd93fb2896c08b55ee5a"],["E:/blog/public/img/cover/67189454_p0.jpg","6cc0298000328b10f7ab82144974c2bc"],["E:/blog/public/img/cover/67380863_p1.jpg","d28650b2bdd03c3fc6a4e159c5594f01"],["E:/blog/public/img/cover/75586588_p0.jpg","bd3c29c49cabc3643afdf136ed74fe79"],["E:/blog/public/img/cover/77448668_p0.png","517cb1d341309b45b7f63c71dbb5133f"],["E:/blog/public/img/cover/77850806_p0.png","696382aae8b51bc26d3e0cf9afd5d8da"],["E:/blog/public/img/cover/78289654_p0.jpg","81a96e61fc35b7f20c8c2bd12e2fcbd0"],["E:/blog/public/img/cover/81313730_p0.jpg","652f7f9ef918aa4864748d991d3d7213"],["E:/blog/public/img/cover/83935269_p0.jpg","d2c212bc59d3b5d25d17f3fce1dd5566"],["E:/blog/public/img/cover/SteelDefectDetection.png","f9b65286891d4de2b21c61e4a1b6aaf9"],["E:/blog/public/img/cover/ameme.png","ebce485e964843507cf6e6c2857e7120"],["E:/blog/public/img/cover/fcdd_explanations_mvtec.png","8c50cd2eb54bf8dde8eff4afe318faa1"],["E:/blog/public/img/favicon.png","a15440e397f0fa218fc5353212bf578d"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","1c7c802863d5e7bef0f32650d7dc53b3"],["E:/blog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/blog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["E:/blog/public/page/2/index.html","9c7a6296d06dd716a5a8c03836f21641"],["E:/blog/public/page/3/index.html","bf63e93728f12939053156043307bc5f"],["E:/blog/public/tags/Ameme/index.html","ec6bbd1408eb0977581599e94132577d"],["E:/blog/public/tags/CRNN/index.html","481cf5de08131ba84882c3fd74e75f25"],["E:/blog/public/tags/GAN/index.html","7a66e4876e16a75f3984bf5efb305a79"],["E:/blog/public/tags/OCR/index.html","617fb757927549073d244b2ca59df0ad"],["E:/blog/public/tags/OCR/page/2/index.html","205ff545362288f3d3d284b00e9ebb54"],["E:/blog/public/tags/STR/index.html","e8199a88a1bf730507702409cf2c0b1f"],["E:/blog/public/tags/c/index.html","ffa8ecfa7859f74453b3577eaf86b48b"],["E:/blog/public/tags/classification/index.html","883a33d45a6f8ee6e63845764591c8d9"],["E:/blog/public/tags/heatmap/index.html","44d36506893490f7507137dabd005dcb"],["E:/blog/public/tags/model/index.html","09bfc0743d135d7c8a7a4cb26cb68846"],["E:/blog/public/tags/opencv/index.html","2420c4fdfb231d34b7b7102bb116a8f3"],["E:/blog/public/tags/pytorch/index.html","420744263f4576cf4a4f69639d5f90c0"],["E:/blog/public/tags/加密/index.html","6c1e2a963294ed3b47f0bf112e6cffac"],["E:/blog/public/tags/加密/page/2/index.html","8bcaa1eb57f2ec4d2a9f8c3f41871443"],["E:/blog/public/tags/图像预处理/index.html","55c7a5dca5ecaa9cbf975a99c705b714"],["E:/blog/public/tags/多类别/index.html","14c2ead07d9342ed12446d6697b371c9"],["E:/blog/public/tags/杂谈/index.html","70cb07f73f87c1458910d6d8c6ef6115"],["E:/blog/public/tags/论文/index.html","57c69db5aa6c4c000a501a358bde7057"],["E:/blog/public/tags/随笔/index.html","1c70b6a595896ac2842a0f2b732b1d98"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







