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

var precacheConfig = [["D:/blog/public/2021/06/27/competition1/image-20210628001202205.png","af3dd81e1653c182df553d8786ed8ff7"],["D:/blog/public/2021/06/27/competition1/image-20210628001749359.png","2f95bcd2031a977f82d7b5d75f53f5b4"],["D:/blog/public/2021/06/27/competition1/image-20210628143627417.png","9ff929ac561d39b9cf4a06347bfcac05"],["D:/blog/public/2021/06/27/competition1/image-20210628143638590.png","690d12a53f1a43b1133500e21a2b3b57"],["D:/blog/public/2021/06/27/competition1/image-20210628143651609.png","06369b620e832dc36ddf508eff5a8a00"],["D:/blog/public/2021/06/27/competition1/image-20210628143710466.png","0c31d1e3246dfa4a41490bc2115d56f4"],["D:/blog/public/2021/06/27/competition1/image-20210628143745468.png","492e8c080e154aae7dba47623abc56ba"],["D:/blog/public/2021/06/27/competition1/image-20210701110115036.png","611a5251c4c9ef5b2a93db11dadea4f7"],["D:/blog/public/2021/06/27/competition1/image-20210701111039607.png","085a2b45f37533c6771e504d47aa7bbc"],["D:/blog/public/2021/06/27/competition1/image-20210703162920235.png","b2f34056a0023ca4c8eeb3c79b5ce554"],["D:/blog/public/2021/06/27/competition1/image-20210704003614655.png","a29d86897c93a947a28fc250af84b8ff"],["D:/blog/public/2021/06/27/competition1/image-20210704005345878.png","b27027f2dbc187a5dcc7fe617b7040ff"],["D:/blog/public/2021/06/27/competition1/image-20210704010504485.png","bc0c02d90598953e77ba75d097d887ab"],["D:/blog/public/2021/06/27/competition1/image-20210705020337969.png","b8bb37f175bd3d20fe443685f2230d13"],["D:/blog/public/2021/06/27/competition1/image-20210705020523515.png","4829f1ab0344e85adefaa4d45a93ad2a"],["D:/blog/public/2021/06/27/competition1/index.html","19f994e3370faf6d255c7e5ee2ca12c7"],["D:/blog/public/2021/06/27/competition1/labels.jpg","185c706d996ff96e7d5bfa2a2d7a9183"],["D:/blog/public/2021/06/27/competition1/labels_correlogram.jpg","aa90f8cac6766ce0fae41cf1d7b9650e"],["D:/blog/public/2021/06/27/competition1/train_batch0.jpg","91316cf4aadd69f7b0718d5037659912"],["D:/blog/public/2021/06/27/competition1/train_batch1.jpg","b4e448d81c663992ddfe9b7be18e86b8"],["D:/blog/public/2021/06/27/competition1/train_batch2.jpg","b9ca84d9facecbde2c19404f211b9ce5"],["D:/blog/public/archives/2021/06/index.html","a410cb37b5bcec4fdbeb0c51d2da28e0"],["D:/blog/public/archives/2021/index.html","4f442c89421f89caf37823e0f369d6c7"],["D:/blog/public/archives/index.html","c17b64ce4e7ee996b19d9b4d1ceecc3a"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/categories/比赛/index.html","918b3d2b8dd81ab720eb64b47b13d987"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["D:/blog/public/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["D:/blog/public/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["D:/blog/public/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["D:/blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/blog/public/css/style.css","e67a267d2af2a8b53715207a13c08176"],["D:/blog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/blog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/blog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/blog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/blog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/blog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/blog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/blog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["D:/blog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/blog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["D:/blog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["D:/blog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["D:/blog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["D:/blog/public/index.html","bd5b92b0b64fee53d8ca4b7d106b992d"],["D:/blog/public/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/tags/天池比赛/index.html","e13d9ebf75d53eabcfcde0b17354b153"],["D:/blog/public/tags/目标识别/index.html","f1081413058b922f03baf55b84392d33"]];
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







