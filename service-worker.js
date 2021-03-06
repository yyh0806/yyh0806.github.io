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

var precacheConfig = [["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210207112035443.png","71813bb73af8fe77c7843c3292fc0fe6"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210211103202909.png","84749b5bde5db8c64229ad6eb681f759"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210213011021656.png","474c2d14286c344544824d69bda4d578"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210214184646266.png","8bbab891880447b30fcd69ddf0686f83"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210214185328308.png","c567fa0f5aa53c74c63e48d7a1284389"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/image-20210214185720102.png","7cbf66acf5248b41d2836be798b1ee03"],["E:/blog/public/2021/01/31/CassavaLeafDiseaseClassification2020/index.html","6b471c1318dd02497de2580f9f6f829e"],["E:/blog/public/archives/2021/01/index.html","b4b050a46d8078dfb4df7d90d4a540aa"],["E:/blog/public/archives/2021/index.html","7c9c6a36768d367d60b490247d61461b"],["E:/blog/public/archives/index.html","ca1ee27adfe1d766e27248f31d18a429"],["E:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/blog/public/categories/Kaggle/index.html","e3d03b0f49c4b916300a70684bc37d85"],["E:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/blog/public/css/index.css","7c168131e237ffe15ccb6f386563d3f9"],["E:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/blog/public/img/avatar.jpg","310cb9127a0c38f2e8a91d80d2c8a4b5"],["E:/blog/public/img/cover/12904418_p0.jpg","abf238e317302fec288ce40bb4071457"],["E:/blog/public/img/cover/141934_p0.jpg","41657ee7527e222b790eb43cfaad8d1a"],["E:/blog/public/img/cover/26800606_p0.jpg","178581dfc982ef02d7dc56a0688d974b"],["E:/blog/public/img/cover/27820546_p0.jpg","34a651cd0e9cf62439149faa0e6e1686"],["E:/blog/public/img/cover/29182021_p0.jpg","4223586a6a9996b4bb0c69355e24189a"],["E:/blog/public/img/cover/30613342_p0.jpg","ededbfcb68b29eeab7455b57c761d6f6"],["E:/blog/public/img/cover/30971623_p0.jpg","09f3aec38b2aebf96d2c67fdcc346fae"],["E:/blog/public/img/cover/34817309_p0.jpg","666958c20a813da2033e4934dc8b3a66"],["E:/blog/public/img/cover/35470184_p0.jpg","16981e4b58fef8d51293728a4c0f423b"],["E:/blog/public/img/cover/35833015_p0.jpg","ab9e54324a5736906648e16de12b8428"],["E:/blog/public/img/cover/36017129_p0.jpg","bef191ae81749ac5fff754bbe17d8ae9"],["E:/blog/public/img/cover/36633503_p0.jpg","254b8fbc986f41c3312766df6cffe716"],["E:/blog/public/img/cover/37311279_p0.jpg","9ac2395672f4660123522163123d8738"],["E:/blog/public/img/cover/39578544_p1.jpg","962bf16c4772a825726ba21054e96166"],["E:/blog/public/img/cover/39578544_p10.jpg","3a38ac7b6b9f18abd63c84ffb5376334"],["E:/blog/public/img/cover/39578544_p11.jpg","c3bd615b78e5a5edb39853068527a81d"],["E:/blog/public/img/cover/39578544_p12.jpg","d8d12577fa18844d832825a738bfd263"],["E:/blog/public/img/cover/39578544_p13.jpg","89ca824137f7c4e58b0c9a92b8bb1a65"],["E:/blog/public/img/cover/39578544_p14.jpg","dfde48a7c614492efaaae91ae77606f9"],["E:/blog/public/img/cover/39578544_p15.jpg","8f9d2142783993d97b5dd450ca10ac13"],["E:/blog/public/img/cover/39578544_p16.jpg","a9279d92d87c78685ec0a1eac937bb46"],["E:/blog/public/img/cover/39578544_p17.jpg","fc89a0e05fd89f8945e090a9612e556f"],["E:/blog/public/img/cover/39578544_p18.jpg","54091e34c7fc25f9450b8b9a80d16a63"],["E:/blog/public/img/cover/39578544_p19.jpg","9910cbe3805324bce6ba1b42abcdbaee"],["E:/blog/public/img/cover/39578544_p2.jpg","59f585c0c55642d7897b0049d79ce16f"],["E:/blog/public/img/cover/39578544_p20.jpg","a9c4b3ecec625771f703feea133a3954"],["E:/blog/public/img/cover/39578544_p21.jpg","d173af86663d98e5aaf99f153ad22d83"],["E:/blog/public/img/cover/39578544_p22.jpg","bc1ef0a8f16d3876b304646e324345f8"],["E:/blog/public/img/cover/39578544_p23.jpg","f90af59733ada4648a0cd29f563e88b2"],["E:/blog/public/img/cover/39578544_p24.jpg","773632e5f17e7ecb79ebfec94ce83f23"],["E:/blog/public/img/cover/39578544_p25.jpg","db6965d5dc1ab61ca88682dbb7991a86"],["E:/blog/public/img/cover/39578544_p26.jpg","eced6dbc5a0f4a2fee8174d05604b12c"],["E:/blog/public/img/cover/39578544_p27.jpg","87927244f591e01e73cf638f3c63050d"],["E:/blog/public/img/cover/39578544_p28.jpg","7fddeb221bd1105da2945506e21d8031"],["E:/blog/public/img/cover/39578544_p29.jpg","ea0db699edfaa751718a4086d532738b"],["E:/blog/public/img/cover/39578544_p3.jpg","e05a73deb747110f6965cf9b57b76ce9"],["E:/blog/public/img/cover/39578544_p30.jpg","ff175eeea5934af07f8f5370e5a37205"],["E:/blog/public/img/cover/39578544_p31.jpg","ed18b7cc921758d63b1d86503b0169e2"],["E:/blog/public/img/cover/39578544_p32.jpg","40a911cbe22bf4aa667478dadb64f8ce"],["E:/blog/public/img/cover/39578544_p33.jpg","13102607f39ac54fe2fbd946d09e5f28"],["E:/blog/public/img/cover/39578544_p34.jpg","d3df56e7c995b1ef98fd06a103f3bff9"],["E:/blog/public/img/cover/39578544_p35.jpg","e0c3773dbb366675849da9d8f0fce8e6"],["E:/blog/public/img/cover/39578544_p38.jpg","fbcd0ab4df0ac903269b78e57b564873"],["E:/blog/public/img/cover/39578544_p39.jpg","5b9444104c85125047b8c362092c6554"],["E:/blog/public/img/cover/39578544_p4.jpg","d94aeb4e8a224593f8e7084131c0716f"],["E:/blog/public/img/cover/39578544_p40.jpg","a41d7fde0adbf98e699dbad9de3d8e54"],["E:/blog/public/img/cover/39578544_p41.jpg","1b7dc69e901b6b2310e14ad133a2771d"],["E:/blog/public/img/cover/39578544_p42.jpg","97e0dd4eed21d083e4d5449d3ba3ea24"],["E:/blog/public/img/cover/39578544_p43.jpg","1a0ea6a8f33fccecb172091ddc5bce37"],["E:/blog/public/img/cover/39578544_p44.jpg","2579779194dc5e9eaf53201076ae7d5c"],["E:/blog/public/img/cover/39578544_p45.jpg","7e9bbb8e438b2bc23c42d6a5e23f8a01"],["E:/blog/public/img/cover/39578544_p46.jpg","814d6862944ad2760c471f74c0b1709f"],["E:/blog/public/img/cover/39578544_p47.jpg","7cd8517bb28e2169fb3f4b61887c7729"],["E:/blog/public/img/cover/39578544_p48.jpg","0480a9955ae6d6fa6e09ca8ac0a380a0"],["E:/blog/public/img/cover/39578544_p49.jpg","44af3974622e5faefb94050f790fa44e"],["E:/blog/public/img/cover/39578544_p5.jpg","2246a46d105f606f2597d85cc430c474"],["E:/blog/public/img/cover/39578544_p50.jpg","4283d243068b4f9cd7c8fee25a3b3825"],["E:/blog/public/img/cover/39578544_p51.jpg","734b85b55713af21aa1b0cb94ea8bd04"],["E:/blog/public/img/cover/39578544_p52.jpg","34c420ce3813e82bf30f46f1844808c2"],["E:/blog/public/img/cover/39578544_p53.jpg","63dfa2d98356bdaaaca2ff5184cbbe70"],["E:/blog/public/img/cover/39578544_p54.jpg","5daaa80b387853adb12676f501dbf51f"],["E:/blog/public/img/cover/39578544_p55.jpg","30a37c1a7caee4957a0d2f256c50f97d"],["E:/blog/public/img/cover/39578544_p56.jpg","c5d84daf6deb43ecbfb6856081e74092"],["E:/blog/public/img/cover/39578544_p57.jpg","e33c4fc4c6de6b92208c08640a9e2410"],["E:/blog/public/img/cover/39578544_p58.jpg","51b6ed54fc7a17b41e289310b8924f86"],["E:/blog/public/img/cover/39578544_p59.jpg","46e43ad1789931ba52fcfb3cb7814f4e"],["E:/blog/public/img/cover/39578544_p6.jpg","518fe615770e3f5f050470df5b617c11"],["E:/blog/public/img/cover/39578544_p60.jpg","d63abe914ef598affebcfa87b4651625"],["E:/blog/public/img/cover/39578544_p61.jpg","be51325ecf113e08fb38161949efe31e"],["E:/blog/public/img/cover/39578544_p62.jpg","f2d0c5f569cc602ab859203c1ef68694"],["E:/blog/public/img/cover/39578544_p63.jpg","d79961e449b9342c38b3d3b0f70bd35e"],["E:/blog/public/img/cover/39578544_p64.jpg","b3fb1518ba2991af309480d4e1b1cc4d"],["E:/blog/public/img/cover/39578544_p65.jpg","2cb5d0d05d944e24c9124e6c815b9ba4"],["E:/blog/public/img/cover/39578544_p66.jpg","92de838e40fc6f7c973d15b109798d69"],["E:/blog/public/img/cover/39578544_p67.jpg","f9d21988192b795e812ed66ae361126c"],["E:/blog/public/img/cover/39578544_p68.jpg","ff0d053e61d17b1a3bc2c1ad00ec1e9c"],["E:/blog/public/img/cover/39578544_p69.jpg","761883d1a5d130bba9ea8c82808e3da4"],["E:/blog/public/img/cover/39578544_p7.jpg","5e911a545c4195e3e966744792f0fffa"],["E:/blog/public/img/cover/39578544_p70.jpg","d6180a8599d395f488f483ffaa3ef37f"],["E:/blog/public/img/cover/39578544_p71.jpg","5fc72e4ffe9d20325027400ca874441d"],["E:/blog/public/img/cover/39578544_p72.jpg","4481917fad9e3edd3ce721f70e58caf3"],["E:/blog/public/img/cover/39578544_p73.jpg","16f59b42cc3904ea06d905326f29303f"],["E:/blog/public/img/cover/39578544_p74.jpg","d02c04f93637b54d6203e3350fc2b099"],["E:/blog/public/img/cover/39578544_p75.jpg","36706e47616555db0e621387d6bef7db"],["E:/blog/public/img/cover/39578544_p76.jpg","11f09694c3b73349c517d5ad2acf8a5b"],["E:/blog/public/img/cover/39578544_p77.jpg","7aa7b49a7210b5cee900ecfce05405bd"],["E:/blog/public/img/cover/39578544_p78.jpg","e84a36e030840584d0b84c0e613fbc61"],["E:/blog/public/img/cover/39578544_p79.jpg","989787d18559d8eac9f074b6f0c40517"],["E:/blog/public/img/cover/39578544_p8.jpg","b93fdffc82586cbef10681132ff92dff"],["E:/blog/public/img/cover/39578544_p80.jpg","11021b787e4deb5c7b21dd47037b58d7"],["E:/blog/public/img/cover/39578544_p81.jpg","2bd4b419c19ed330515b2906f53f5762"],["E:/blog/public/img/cover/39578544_p82.jpg","9afbb6828e9dab8f166338a3f69f0a38"],["E:/blog/public/img/cover/39578544_p83.jpg","89eb51641cfb290d9e6f225f43ae635b"],["E:/blog/public/img/cover/39578544_p84.jpg","382ce6c5490b2e115abb53d2c49803b2"],["E:/blog/public/img/cover/39578544_p85.jpg","4ac72f73debb4e915992b835b559d842"],["E:/blog/public/img/cover/39578544_p86.jpg","3fd17d94f875472fe59d101b926aff12"],["E:/blog/public/img/cover/39578544_p87.jpg","e82a768c8210b318695069a97be1c714"],["E:/blog/public/img/cover/39578544_p88.jpg","352201137ee619c5d4db46e4e22d3b56"],["E:/blog/public/img/cover/39578544_p89.jpg","2f0e493e6a9d01827dc136924db3b5ce"],["E:/blog/public/img/cover/39578544_p9.jpg","70d8c9627e32dd93fb2896c08b55ee5a"],["E:/blog/public/img/cover/39578544_p90.jpg","4743cf292acfec772b63a3285188b967"],["E:/blog/public/img/cover/39578544_p91.jpg","16253f7b2e42be99e0242f25233108af"],["E:/blog/public/img/cover/39578544_p92.jpg","fea7a055c192c5993b30fb2319de8b8f"],["E:/blog/public/img/cover/39578544_p93.jpg","f45a14f311d68422b7560c866691a04d"],["E:/blog/public/img/cover/39578544_p94.jpg","4e204beec2c212b6411dd3badb76a785"],["E:/blog/public/img/cover/39759178_p0.png","51b78d172461466804a0a20a9ccbe7ee"],["E:/blog/public/img/cover/41305556_p0.jpg","35b7eec5487d44f565a05ab8f9841458"],["E:/blog/public/img/cover/43120917_p0.jpg","be51e204e582146bed8883e3cb7d2e93"],["E:/blog/public/img/cover/43203044_p0.jpg","1b2e03d41ebd6f19bab3d5de4ccd5882"],["E:/blog/public/img/cover/44403643_p0.png","a7545eb5b5b43aee0b6ee6f1a606af80"],["E:/blog/public/img/cover/4462687_p0.jpg","25ffc83dfca63cdd06a1f806c845b5e4"],["E:/blog/public/img/cover/47213538_p0.jpg","170fa11581de83673539639e6c5ddc9e"],["E:/blog/public/img/cover/47621790_p0.jpg","6d8acdb3b968b251904b1a5aef54603e"],["E:/blog/public/img/cover/48356888_p0.jpg","c55b4b3d421fe0b37799fab9f824ce2c"],["E:/blog/public/img/cover/49371152_p0.jpg","d4d8b1110731314b3cc88bbab1624dc1"],["E:/blog/public/img/cover/49383746_p0.jpg","ef82597a51d8b633f89cd1bf90cee2ed"],["E:/blog/public/img/cover/5124645_p0.jpg","75f6f3518db5477f45b783c271caa7ef"],["E:/blog/public/img/cover/51678256_p0.png","7fa23001e4ff52829a9a5df7c3229193"],["E:/blog/public/img/cover/52189708_p0.png","7e0327ed8352428333d5dabbe369f166"],["E:/blog/public/img/cover/5290131_p0.jpg","c31be0bfa81eca10219c0644d4bae77a"],["E:/blog/public/img/cover/53117853_p0.jpg","3b540f8ca59aa5b0227d3f5ab0268110"],["E:/blog/public/img/cover/53403181_p0.png","0e65c7044a1a3a28b854a7f54e6106a4"],["E:/blog/public/img/cover/53705733_p0.png","8553f080fe5af7c27f8788565052bd2c"],["E:/blog/public/img/cover/5435590_p0.jpg","215961c8952dc89700ab77559ddc9226"],["E:/blog/public/img/cover/55325876_p0.jpg","fd1837726ee508071a751be12d0e05ba"],["E:/blog/public/img/cover/55647411_p0.jpg","2477f35d230f33b65d2a94d584e43d43"],["E:/blog/public/img/cover/56245464_p0.jpg","7198cfa1b66fa5425b1192e6f24be7f1"],["E:/blog/public/img/cover/57430178_p0.jpg","517f56ef923a4bbe2179b1b09f3dc4b2"],["E:/blog/public/img/cover/57892762_p0.jpg","d1208852f0f36456712d477547c7d599"],["E:/blog/public/img/cover/58148540_p0.jpg","2c2d0eb0b819a931839e66e32e95d409"],["E:/blog/public/img/cover/58433143_p0.jpg","12283df08d5cb4a1771963680f4f8d98"],["E:/blog/public/img/cover/58769465_p0.png","ed37297914b027bb0711ba6da9b52fa0"],["E:/blog/public/img/cover/58955949_p0.jpg","d3e5f29fdf32bc7b1372dac6f107c8c8"],["E:/blog/public/img/cover/59190594_p0.jpg","f491be409b7f2101b73bc44d84eca03f"],["E:/blog/public/img/cover/59469869_p0.png","b510997241f0d53b1435b22e4e722e7b"],["E:/blog/public/img/cover/60155475_p0.png","791fffc5f951331bc7253d1fc827175a"],["E:/blog/public/img/cover/60223956_p0.png","9437fba9b66c3b0b826809ce46fc8d41"],["E:/blog/public/img/cover/62031907_p0.png","09850a2aabcb4259c1c87aed9254bde0"],["E:/blog/public/img/cover/62492065_p0.png","723b5b132c055fae8e1314e8ce2edb10"],["E:/blog/public/img/cover/62740716_p0.png","39b65be84c273d8c8ce25b07e3a88458"],["E:/blog/public/img/cover/62740716_p1.png","c7284be6b67e61577862e294af14613a"],["E:/blog/public/img/cover/62891738_p0.jpg","07e2b1ae7d0451e96fe0041f851a1517"],["E:/blog/public/img/cover/63322565_p0.jpg","f4a6157b7e5bc93395dd494cc5e16e6d"],["E:/blog/public/img/cover/63567842_p0.jpg","4efb48354a396156a34ca8e31fcfbcc7"],["E:/blog/public/img/cover/63625393_p0.png","e32d4bb4b9d1f654d2c3ba265b1dbac1"],["E:/blog/public/img/cover/63816218_p0.png","9dee790765ec5f51c10376d74d1ada37"],["E:/blog/public/img/cover/64155896_p0.png","b35f1027a7b7692d814c064fc489b651"],["E:/blog/public/img/cover/64266731_p0.jpg","71816ac7439a9e4e4028f1b6b82e7761"],["E:/blog/public/img/cover/64443694_p0.png","a9b7b1f1c604c4d8547b96594bb84c6f"],["E:/blog/public/img/cover/644698_p0.jpg","5d1d362a943d0e7cfa845b6f41d8aa5f"],["E:/blog/public/img/cover/64600482_p0.jpg","f891a672acb3cc46fe0b90e0c3c465e8"],["E:/blog/public/img/cover/64739860_p0.jpg","75f5d3ff53a74cce4d40686b886ee70b"],["E:/blog/public/img/cover/64815947_p0.jpg","d141793fb26d2a5086de674e11d71560"],["E:/blog/public/img/cover/65047674_p0.jpg","7e4dadac023834581ed5faf133d958a7"],["E:/blog/public/img/cover/65231080_p0.jpg","08e044183ae9e09e2344a5c62295cead"],["E:/blog/public/img/cover/66393049_p0.png","6c5574b1716de82b397fdde9f94e576c"],["E:/blog/public/img/cover/66747292_p0.png","2081df6fd978450a9870a97ed8023f59"],["E:/blog/public/img/cover/66961510_p0.jpg","e9391bd25cd666019225c113bee026bd"],["E:/blog/public/img/cover/66965508_p0.png","d3ea5e2632f18c4110ae0c770ba2509f"],["E:/blog/public/img/cover/67047116_p0.jpg","a5348e28cc170ecb58555f9487728f87"],["E:/blog/public/img/cover/67189454_p0.jpg","6cc0298000328b10f7ab82144974c2bc"],["E:/blog/public/img/cover/67244132_p0.png","1302bc03180b9f18fd52ff7076418661"],["E:/blog/public/img/cover/67380863_p0.jpg","6e73fce51f7a39e57a3371054354e668"],["E:/blog/public/img/cover/67380863_p1.jpg","d28650b2bdd03c3fc6a4e159c5594f01"],["E:/blog/public/img/cover/67623815_p0.jpg","b4e009422a0427ae9f889b35a988ff45"],["E:/blog/public/img/cover/67724130_p0.jpg","4503a115ff3da8915cbb8d82d8da1d31"],["E:/blog/public/img/cover/67752747_p0.jpg","99de4151f0f4b5ca250702f623bb6aa9"],["E:/blog/public/img/cover/67808976_p0.jpg","f5dc0659c2f5f6476da395a9ea843145"],["E:/blog/public/img/cover/67971258_p0.jpg","ec81b386ae852db715c8f75ee353c794"],["E:/blog/public/img/cover/68126524_p0.jpg","304a00310f886e7f23b40d4e62a94dd6"],["E:/blog/public/img/cover/68296699_p0.png","efb37fee400582742424a4ce08951213"],["E:/blog/public/img/cover/68872991_p0.jpg","317e1427b4863f8540a635f5223e7de3"],["E:/blog/public/img/cover/68951760_p0.jpg","c5eca7116bed5faa5e6a5f764baa39dd"],["E:/blog/public/img/cover/69117429_p0.jpg","3d4f164148656d6a8202ddd25564e4f2"],["E:/blog/public/img/cover/69246838_p0.jpg","8cad151b412648667d7ad3eefc3fe758"],["E:/blog/public/img/cover/69263790_p0.png","826e6d676e095b4ede300de2a6545a96"],["E:/blog/public/img/cover/69482852_p0.jpg","0bc88b3e130011a9368d2e6c1b9a1a4d"],["E:/blog/public/img/cover/69817303_p0.jpg","b88f8519aa8c853f61ef967015e0124d"],["E:/blog/public/img/cover/69926553_p0.jpg","8f0b0d2f773b149dce2054f109ba82b6"],["E:/blog/public/img/cover/69956753_p0.jpg","cfad46fc21768a157d033e5ddb893ee2"],["E:/blog/public/img/cover/70043830_p0.png","22c9f22566244793bbd5ea3d41999c31"],["E:/blog/public/img/cover/70516793_p0.jpg","cecf442bc13cd799db3a5599ae4f3e47"],["E:/blog/public/img/cover/70861803_p0.jpg","b74959a3ba478ef3593d1c552d912f81"],["E:/blog/public/img/cover/70875675_p0.jpg","3bb23a3f4c1d29b6b590beae4dd0d645"],["E:/blog/public/img/cover/70925413_p0.jpg","1414f1609147b420d467770cc432c3ec"],["E:/blog/public/img/cover/71012950_p0.jpg","86174aaacccf8cc7c637b428dd536bed"],["E:/blog/public/img/cover/71050605_p0.png","2345866284dacf9abf160ddb7f0256e0"],["E:/blog/public/img/cover/71080013_p0.png","46dd5e198c6ec18216406ca6b30266d5"],["E:/blog/public/img/cover/71138276_p0.jpg","fb9904c29b4c50ff4e4cfed6ce99b76b"],["E:/blog/public/img/cover/71163643_p0.jpg","66302b8de442312e6eb52be6da47924e"],["E:/blog/public/img/cover/71191491_p0.jpg","0a62a2aa450f9270e2c11710c40c0f81"],["E:/blog/public/img/cover/71208648_p0.jpg","06ffa281f52f26d78b4cd2fd592f93da"],["E:/blog/public/img/cover/71253957_p0.png","3aa7af775508855e46473a760b5e7b13"],["E:/blog/public/img/cover/71305990_p0.jpg","035ed7cc3ca2ec42d2501962f0af7ee5"],["E:/blog/public/img/cover/71395947_p0.jpg","1226abef5b72f893b172a0247fb3da00"],["E:/blog/public/img/cover/71472990_p0.jpg","e0617155b6dd16fd6ea87b96818bb4ac"],["E:/blog/public/img/cover/71651692_p0.jpg","97901bc66196e2e5a1d5a4032f5bb40a"],["E:/blog/public/img/cover/72006268_p0.jpg","5d5f9fa7eeb2fe85c1aca927d48c5eda"],["E:/blog/public/img/cover/72040505_p0.png","cba943d01db260e8ce321b3aebdcdff6"],["E:/blog/public/img/cover/72077353_p0.jpg","a80fa24865970c1a6a06f99862b34ca0"],["E:/blog/public/img/cover/72189225_p0.jpg","2fb7e83f00dedb31fe87d2ce7a05f58b"],["E:/blog/public/img/cover/72331879_p0.png","ad254e23139e03848137d5b008b1abb6"],["E:/blog/public/img/cover/72625070_p0.jpg","75cb33aa3c8ef5df9aa1fd7933c9c260"],["E:/blog/public/img/cover/72675579_p0.jpg","a636d958e7d8daa89b9b0a1ad4eebc2a"],["E:/blog/public/img/cover/73117935_p0.png","34ab85da34c89b02a41c40ccdf60a847"],["E:/blog/public/img/cover/73170350_p0.jpg","72c611bfb4cd0d4a03fd1a88acdd7212"],["E:/blog/public/img/cover/73937884_p0.png","97bf73fdb4109a102173343e619f004c"],["E:/blog/public/img/cover/73956791_p0.jpg","e600d03368bedd365709af0c5fbe2438"],["E:/blog/public/img/cover/73976734_p0.jpg","28570fcdc3323fcb7d98dc2888a8dd0c"],["E:/blog/public/img/cover/74012101_p0.png","16b551b422ed2622b8164c3ebc7a258a"],["E:/blog/public/img/cover/74052606_p0.jpg","3dbbd3cce2a9a2c58e68bf88033ad863"],["E:/blog/public/img/cover/74061406_p0.jpg","ba9763a5c16969e6ba5cf4f223b3bf68"],["E:/blog/public/img/cover/74323926_p0.jpg","205d8ab5ec3825581b31ade6d4d7ec46"],["E:/blog/public/img/cover/74344704_p0.jpg","e8325f09c02fc50563d4bdd1d908177e"],["E:/blog/public/img/cover/74383415_p0.jpg","dda7be83f33d8e0cbb689878a90e4ccc"],["E:/blog/public/img/cover/74585837_p0.jpg","08b9974c2772b64360d88fde05d32075"],["E:/blog/public/img/cover/74831710_p0.jpg","0238992d15250ce4ff58bcdd86257685"],["E:/blog/public/img/cover/75014070_p0.png","3442140c025cfc967cf61669b178b9e4"],["E:/blog/public/img/cover/75063581_p0.png","d989b99644b0a9c6a04050ebfc1bfa51"],["E:/blog/public/img/cover/75094924_p0.jpg","a460e6f03b2b501d352fb1ea01664af5"],["E:/blog/public/img/cover/75120565_p0.jpg","636be9d111563c856a5597f449c34acc"],["E:/blog/public/img/cover/75412221_p0.jpg","95da66cd239fabe9223094874737baa1"],["E:/blog/public/img/cover/75586588_p0.jpg","bd3c29c49cabc3643afdf136ed74fe79"],["E:/blog/public/img/cover/75631148_p1.jpg","0eab2a257d8ffdf3c98c869d857570c9"],["E:/blog/public/img/cover/75685124_p0.jpg","6eaacf3aac75a37e5d96cbb0a579119e"],["E:/blog/public/img/cover/75688660_p0.png","f4ac65d2716dd79a2ad87257b34c99d0"],["E:/blog/public/img/cover/75843264_p0.jpg","2e1c6d05f171800168823ae679ffb807"],["E:/blog/public/img/cover/75846547_p0.jpg","fab3a554d1dd99b64b65b55f3a29a0eb"],["E:/blog/public/img/cover/75914596_p1.jpg","90484598a0b773d2ac3cf6b4957f2f91"],["E:/blog/public/img/cover/75969669_p0.jpg","e87ddeae800b266036022b90fc300f3c"],["E:/blog/public/img/cover/76122136_p0.jpg","516a5b2864eeae0911501e4f4178e0c3"],["E:/blog/public/img/cover/76134105_p0.png","b863def4df3ab773ae12951ee981c887"],["E:/blog/public/img/cover/76379165_p0.jpg","5f1a1e8ec2d6034434cd3f48536c3fca"],["E:/blog/public/img/cover/76409738_p0.jpg","5d46f8cc02e28326a79ad57aab1c425f"],["E:/blog/public/img/cover/76727789_p0.jpg","63e8d824568fa69ce88c35aa40523546"],["E:/blog/public/img/cover/76737235_p0.png","9bddafdf186dab0f50f44ca13d11826b"],["E:/blog/public/img/cover/76839324_p0.jpg","3d659ab57d4474511bb805f5a54ba65c"],["E:/blog/public/img/cover/76954860_p0.png","6ea035da3eabbb7dd96f541bbceb983c"],["E:/blog/public/img/cover/76956408_p0.jpg","7e568216ca59309afbd758b071cf0a03"],["E:/blog/public/img/cover/77094179_p0.jpg","2fb14e852c13089fdbefaea0808ff7a0"],["E:/blog/public/img/cover/77292280_p0.png","374426ee7bc9e3d5e213f8c71bb0e80b"],["E:/blog/public/img/cover/77448668_p0.png","517cb1d341309b45b7f63c71dbb5133f"],["E:/blog/public/img/cover/77850806_p0.png","696382aae8b51bc26d3e0cf9afd5d8da"],["E:/blog/public/img/cover/78075718_p0.png","ebce485e964843507cf6e6c2857e7120"],["E:/blog/public/img/cover/78188719_p0.jpg","de72421e5f99a60eaa97c046a057cbeb"],["E:/blog/public/img/cover/78223290_p0.jpg","369cfd258721c6254eebece921336e6b"],["E:/blog/public/img/cover/78227280_p0.jpg","806fadd011563a2a1235b4f68675782f"],["E:/blog/public/img/cover/78289654_p0.jpg","81a96e61fc35b7f20c8c2bd12e2fcbd0"],["E:/blog/public/img/cover/78327558_p0.jpg","f05f5b28e8a0a04b26bb2a54f67db30f"],["E:/blog/public/img/cover/78391247_p0.png","32d4b5b5d9aeabefd626e1d6ff92636a"],["E:/blog/public/img/cover/78468086_p0.png","b6a4644664b03dbe389c9fa81f56e30d"],["E:/blog/public/img/cover/78642057_p0.jpg","215f4e591c79bd31663e0bbf7920ec18"],["E:/blog/public/img/cover/78717999_p0.jpg","31f8641075182c7de770094666ab75ef"],["E:/blog/public/img/cover/78828441_p0.jpg","a2d81a0c82d5145d039d0f4ee12d652d"],["E:/blog/public/img/cover/78828441_p1.jpg","9f0428f9887d1337213955a2beef7ff6"],["E:/blog/public/img/cover/79032704_p1.jpg","1d98e0671a9d8a9ed4905518c3851df9"],["E:/blog/public/img/cover/79077334_p0.png","661a416332adb8c2c7a683a416186343"],["E:/blog/public/img/cover/79077561_p0.jpg","b60814168b362c532061294481832c64"],["E:/blog/public/img/cover/79229067_p0.jpg","04762cff090cc8ec661779f174ba1d14"],["E:/blog/public/img/cover/79343566_p0.jpg","083ae17b862fc9a87891d1ba581098f8"],["E:/blog/public/img/cover/79546554_p0.jpg","2134a56f86382754eeb5fd676fda9c82"],["E:/blog/public/img/cover/79546554_p1.jpg","32478b7294110f18ed4403e92a199ece"],["E:/blog/public/img/cover/79546554_p2.jpg","65af25df1be43512cbee435ea2c53bf5"],["E:/blog/public/img/cover/79583539_p0.jpg","3044029c896ff712b1357a30477c6a14"],["E:/blog/public/img/cover/79583539_p1.jpg","14c8617349c5693dc4b88de3bf7470e6"],["E:/blog/public/img/cover/79584465_p0.jpg","93adcebe84b225e7b0b587042ec8ab24"],["E:/blog/public/img/cover/79601890_p2.jpg","0def06e39d62df1c0b9de4c4dc93e48c"],["E:/blog/public/img/cover/79602768_p1.jpg","26b4a4f078f483ce97a8047367e245e9"],["E:/blog/public/img/cover/79602768_p2.jpg","4b8eb66e386914aa3d24f2b28ee5ebf3"],["E:/blog/public/img/cover/79620347_p0.jpg","0210b9228da3c7a130d8749025ba9a24"],["E:/blog/public/img/cover/79620347_p1.jpg","e3dbab782ff38a854c113f55e744f95d"],["E:/blog/public/img/cover/79748832_p0.jpg","e4d028ed3bec854681ed7c1f66390e08"],["E:/blog/public/img/cover/79855820_p0.jpg","678f60127554207a97056c191e64a1b4"],["E:/blog/public/img/cover/79921696_p0.jpg","b3e1156b7a13d57091db7efc4469700a"],["E:/blog/public/img/cover/80266910_p0.jpg","17dc375b2179b73ffa99db04168d1e08"],["E:/blog/public/img/cover/80571699_p0.jpg","4d10b944daea6a08baacf147c1ac369a"],["E:/blog/public/img/cover/80774528_p0.jpg","412ca6a5649b75e2cc8c32ef1fa90b85"],["E:/blog/public/img/cover/80774973_p0.jpg","864d5978a8294f9fa1f3e29590d7144e"],["E:/blog/public/img/cover/80797644_p0.jpg","f337b0c563f0454250d1efb624c013ff"],["E:/blog/public/img/cover/80857290_p0.jpg","ee4031b3e2a1be487f7592d0203cab71"],["E:/blog/public/img/cover/80935176_p0.jpg","053512b5488aa5571b537e806d668e0b"],["E:/blog/public/img/cover/80943044_p0.jpg","85d398190e45eadc4879883e69a746ab"],["E:/blog/public/img/cover/81112469_p0.png","6e1b7d009eacf7ca95a543efe68af31c"],["E:/blog/public/img/cover/81113906_p0.png","5e3a2e9403fa29f766682041a6cd7971"],["E:/blog/public/img/cover/81113998_p0.jpg","490a79f56ff148ca6838ae7373e3f5dc"],["E:/blog/public/img/cover/81113998_p10.jpg","53f502f2cdedaa6a47070a4a1c7e141e"],["E:/blog/public/img/cover/81113998_p11.jpg","a61994a3ae22a4998db7737230f55b10"],["E:/blog/public/img/cover/81113998_p4.jpg","3c7b36711355bcfb5c740274d1eaeb81"],["E:/blog/public/img/cover/81113998_p5.jpg","403226289d9ea9f1c688220c53628e57"],["E:/blog/public/img/cover/81113998_p7.jpg","d3c31211885aabd5a8085d833c6fa2c9"],["E:/blog/public/img/cover/81113998_p8.jpg","d41a7e7aab52bd5b305cc6c32e32f6bd"],["E:/blog/public/img/cover/81113998_p9.jpg","d3a1ec1b9a0048f87f83dba95815de2b"],["E:/blog/public/img/cover/81313730_p0.jpg","652f7f9ef918aa4864748d991d3d7213"],["E:/blog/public/img/cover/81353284_p0.jpg","c1be230bb7bfa969ee1057ac4f906175"],["E:/blog/public/img/cover/81390105_p0.png","3bec532fff0c0bcd7f8becf11dd27962"],["E:/blog/public/img/cover/81438606_p0.png","be5e552e6bc2e90a1088f98ced9b516f"],["E:/blog/public/img/cover/81512681_p0.jpg","c77ac53ef5131c2348bf09d7ad2650a4"],["E:/blog/public/img/cover/81775331_p0.png","7caa956ad2d0a52cef3ffff502577f79"],["E:/blog/public/img/cover/81820795_p0.jpg","c919bc7a3f27e27d25c1ae69d0f45732"],["E:/blog/public/img/cover/81902931_p0.jpg","2d033e0beb5ec947099dad87394c340f"],["E:/blog/public/img/cover/82178509_p0.jpg","26a6381df900b39d60c2311cf8da5a8b"],["E:/blog/public/img/cover/82192282_p0.jpg","4728e3bab18c80dac07498cff32dedb7"],["E:/blog/public/img/cover/82440556_p0.jpg","7857a0fbb28cd54225f1cceb2f1f15f7"],["E:/blog/public/img/cover/82442534_p0.jpg","3c630261d3b05519893f83ee9e6fd358"],["E:/blog/public/img/cover/82451205_p0.jpg","1b969d1e9cb61990ea42f37f34c710a4"],["E:/blog/public/img/cover/82483541_p0.jpg","c5699c1e17f4e884fc3e979c4c68b396"],["E:/blog/public/img/cover/82517356_p0.jpg","1d360a7f491f73ecde2217112ee232d4"],["E:/blog/public/img/cover/82517356_p1.jpg","6e2884fbcbc5e5a236caccee14e92381"],["E:/blog/public/img/cover/82517356_p10.jpg","0ce157d8c7f3371474d7f9e538e21a51"],["E:/blog/public/img/cover/82517356_p3.jpg","37eca9d76e77b8d5f58b51eaf517b4b0"],["E:/blog/public/img/cover/82517356_p4.jpg","3b081292993a754e97a2fab0a657cbfa"],["E:/blog/public/img/cover/82517356_p5.jpg","9ec16cb634c3e54bfd3cc870bae4c73c"],["E:/blog/public/img/cover/82517356_p6.jpg","c622b4c8dd182c3746f2919679ffad9f"],["E:/blog/public/img/cover/82517356_p7.jpg","38b8d0de4385b92d34e5aae6cc832f5f"],["E:/blog/public/img/cover/82517356_p9.jpg","cc7f5b95d12713e96da984d89c25de59"],["E:/blog/public/img/cover/82542737_p0.jpg","b6d191472486b513baf788e37a545c08"],["E:/blog/public/img/cover/82542746_p0.jpg","0030d9ff979ba3278d5c8250823cb0c7"],["E:/blog/public/img/cover/82619756_p0.jpg","da5d65190a127b3c722238a789013d9c"],["E:/blog/public/img/cover/82624256_p0.jpg","51a153254902626200fec54de501a2f2"],["E:/blog/public/img/cover/82624256_p1.jpg","a514eb841a599209859fa04a92618a00"],["E:/blog/public/img/cover/82624256_p2.jpg","d394162c6e7912de7a9df8c3e921ad1a"],["E:/blog/public/img/cover/82624256_p3.jpg","5c44e757200c6e3e02a7f3d5a01d20df"],["E:/blog/public/img/cover/82718458_p0.jpg","8e827d25b2f78b2cd51bde55349e6265"],["E:/blog/public/img/cover/82772179_p0.jpg","cf2cbc2c4a577a79701c513b15e48c2d"],["E:/blog/public/img/cover/82783228_p0.jpg","3628315438325e01e6f49d240d952f62"],["E:/blog/public/img/cover/82803927_p0.jpg","87f40cf79f14216877c42089250b8169"],["E:/blog/public/img/cover/82921311_p0.jpg","8fb1ce77e5cac2e823d75223ea7da23a"],["E:/blog/public/img/cover/83355995_p0.png","edf791be0b1d89b95e20de7dc2a82d34"],["E:/blog/public/img/cover/83381420_p0.jpg","265722c5bebaf20a0d7ada18c09cbab1"],["E:/blog/public/img/cover/83393293_p0.jpg","57cc77cc71b9004de6f639dd3b7268ad"],["E:/blog/public/img/cover/83433204_p0.png","bf2de3dd8605764a9a530ffc72631ca7"],["E:/blog/public/img/cover/83485124_p1.jpg","3cb592abe1bf8eff0d4da9e0751998f8"],["E:/blog/public/img/cover/83488726_p0.jpg","92f54e562307d0d8d6ba01e5c7cf5fbf"],["E:/blog/public/img/cover/83540075_p1.jpg","fe58934db891a3dc17854170853cae2a"],["E:/blog/public/img/cover/83708089_p0.jpg","86e803b595345171d2bc2ed8ed6245da"],["E:/blog/public/img/cover/83742172_p0.jpg","c937ec6c2559f916eb859988822a1312"],["E:/blog/public/img/cover/83742858_p0.png","c29bb5f3438ff25cdc01f0cdfd0f09c1"],["E:/blog/public/img/cover/83814911_p0.jpg","3192cc357962fe2219ce1439e1250f91"],["E:/blog/public/img/cover/83821256_p0.jpg","dab33bc9db47dce68ed6721d5304cfc2"],["E:/blog/public/img/cover/83821828_p0.jpg","625845be3704fdfb413138bc1e5fad12"],["E:/blog/public/img/cover/83835856_p0.jpg","6129a6654e481179b0c28f850d44006a"],["E:/blog/public/img/cover/83867472_p0.png","e06f25dd2fceee54279d82274cb83f85"],["E:/blog/public/img/cover/83881359_p0.jpg","44de3c914cd88699b3e179d46c1ec6f0"],["E:/blog/public/img/cover/83914344_p0.jpg","abba15b7a94c92018e974609c8d23388"],["E:/blog/public/img/cover/83935269_p0.jpg","d2c212bc59d3b5d25d17f3fce1dd5566"],["E:/blog/public/img/cover/83936697_p1.jpg","f13d8eb526ff2b4f4db557e532a7f352"],["E:/blog/public/img/cover/83936697_p2.jpg","a1d5bd669d886db67d416956196c909e"],["E:/blog/public/img/cover/83936697_p3.jpg","172385ac0806915c11417e36205fb23f"],["E:/blog/public/img/cover/83936697_p4.jpg","5fda29fd1d013f8f8ccce2cabfe015ea"],["E:/blog/public/img/cover/83936697_p5.jpg","9bfec587f831f5f3024f5db0dac48779"],["E:/blog/public/img/cover/83936697_p6.jpg","de7a79b45c47a3f1871672dbbe65d86a"],["E:/blog/public/img/cover/83945448_p0.jpg","b351279703382c5443ffa99c51c884a5"],["E:/blog/public/img/cover/83971177_p0.jpg","1e4af345a90cf8830c28dced86e1981d"],["E:/blog/public/img/cover/83975846_p0.jpg","5d26cf7978723e81af7ff263ea8133a5"],["E:/blog/public/img/cover/83976155_p0.png","1175d45382bb1042f4c47213331c621e"],["E:/blog/public/img/cover/83978542_p0.jpg","e6ed7baf90be8ecc826a47ff7b59d89c"],["E:/blog/public/img/cover/83981664_p0.jpg","4278d53382f8c07208abb466c19d2f72"],["E:/blog/public/img/cover/83995310_p0.jpg","068a4dd51fd5da4575701444f5456ba5"],["E:/blog/public/img/cover/83998110_p1.jpg","b00aa63dd90896e829464a082694f724"],["E:/blog/public/img/cover/84019306_p0.jpg","7085b2d8860ca1ae868d8326ae0df936"],["E:/blog/public/img/cover/84019673_p0.png","f204b4ddc8b1f87996c945ebcedbe932"],["E:/blog/public/img/cover/84037497_p0.jpg","fb1b679cc22e018321533dfec46fa1c1"],["E:/blog/public/img/cover/84052407_p0.png","6c23a2dec4e81580e170666b573e092d"],["E:/blog/public/img/cover/84076041_p0.jpg","96e3e7773ba19baf3613444d76bfac61"],["E:/blog/public/img/cover/84076041_p1.jpg","e804a14132422e4374f045651c60b1eb"],["E:/blog/public/img/cover/84095067_p0.jpg","f732bf69dccb8e8fef39f36aee4facce"],["E:/blog/public/img/cover/84098083_p1.jpg","413bac2bb7584f39ac9fd881ba25f48d"],["E:/blog/public/img/cover/84119330_p1.jpg","3b7342bcb3a601ee5a83c5a39bdf2da9"],["E:/blog/public/img/cover/84137731_p0.png","1fb7411fb38f9d1fd6985631a6776bd5"],["E:/blog/public/img/cover/84139703_p0.jpg","85f1b83d07a8a72fd0f7546b3b82e447"],["E:/blog/public/img/cover/84139776_p0.png","0ab7b28f668e656aa8dfb7e29637d492"],["E:/blog/public/img/cover/84167402_p0.jpg","bef1cf9e1a9dea96fffe0cb9e3d22cbf"],["E:/blog/public/img/cover/84247746_p0.png","78dedb8050fe1ecb5081ec22a6be1a99"],["E:/blog/public/img/cover/84268234_p0.png","3395fbc89468c297d5bfb4c71db61025"],["E:/blog/public/img/cover/84269486_p0.png","3d5614a184ff3fe8c3917fa69a15bb73"],["E:/blog/public/img/cover/84277054_p0.jpg","7aee4ea5463b325be5745d36e4c44c17"],["E:/blog/public/img/cover/84314100_p0.png","8d6d4df7f564a2e4b43bb60d80e39dff"],["E:/blog/public/img/cover/84367545_p0.jpg","b18873114c31443de8d9010d447297f9"],["E:/blog/public/img/cover/84380120_p0.png","41ae4fabf2b828d821f1785943152b34"],["E:/blog/public/img/cover/84380120_p1.png","a52f885868fff881d1eaa76114e1c307"],["E:/blog/public/img/cover/84382212_p0.jpg","2ef050d33a842c1deba0320c461ac810"],["E:/blog/public/img/cover/84402783_p1.jpg","2112f2b6c2382a5a665a3d0448799cc1"],["E:/blog/public/img/cover/84402783_p2.jpg","574bba97dcedd4c7c4d1b695ccb21991"],["E:/blog/public/img/cover/84435565_p0.jpg","4e40108db4b7e94eee170d164a9b6dc3"],["E:/blog/public/img/cover/84450125_p0.jpg","c5d8abdb391b865e836f82f9a96a8203"],["E:/blog/public/img/cover/84462078_p4.png","4baa425ca81bae2e5051cc1747b0b913"],["E:/blog/public/img/cover/84462078_p6.png","4263cbb3a4842c963ea6dec162f3f505"],["E:/blog/public/img/cover/84479410_p0.jpg","a5ca1879171f88cca0ec53a3b1c1c0bb"],["E:/blog/public/img/cover/84497206_p0.jpg","fbac35aa0a0f45ae69688bbb62e17cc7"],["E:/blog/public/img/cover/84501915_p0.png","b06f331f41d7c2fa47c60934576d89b9"],["E:/blog/public/img/cover/84527203_p0.png","14552f8502bc0fb2820d20fc20d7fd36"],["E:/blog/public/img/cover/84529869_p1.jpg","20e0d40290e1b8fc11ec8335e6f9aa5a"],["E:/blog/public/img/cover/84551220_p0.png","74c080b4aa09e6dbce16e88e04078284"],["E:/blog/public/img/cover/84559227_p0.jpg","731faa4e5d5a6bcb346a1e0bfcd78a4b"],["E:/blog/public/img/cover/84587015_p0.jpg","c12d224c49259d280ae1a6ff88621bd3"],["E:/blog/public/img/cover/969535_p0.jpg","b220c52a0a929c7f3b4554724b8552fb"],["E:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/public/index.html","280fed54c9cc4c95c01eb294f4587f0f"],["E:/blog/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["E:/blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["E:/blog/public/tags/kaggle/index.html","b9c73ca2fcaff1547794c3ec1bc46889"],["E:/blog/public/tags/比赛/index.html","627109d83d594e4d0fa39509ab6a6bd0"]];
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







