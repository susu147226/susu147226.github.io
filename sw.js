/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","799ee5a221f60bbe856b806eaa935e3f"],["/archives/2023/10/index.html","7c6e1b6d6818aa21e6a69141a505a872"],["/archives/2023/index.html","42db4060aad06739922527a5c06b33ed"],["/archives/index.html","db770154ab07bad4e0cd1877fcaafd70"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","09502fc0c9f58c0ec9fd4f4817aec300"],["/categories/blog/index.html","e30f108212f556141743bd33d109d656"],["/categories/blog/自述/index.html","95830019b317f81cc9e12f7e61d9d221"],["/categories/index.html","2b872cedb68ce5168b3325c882d1e347"],["/categories/技术/hexo/butterfly/index.html","f843cc5fea5d29df4ced8db9214c3069"],["/categories/技术/hexo/index.html","8c550a8aa05f04a49721a89c3657714f"],["/categories/技术/hexo/拓展/Tag-Plugins/index.html","06ddb32bffb8339e0f02c348ce2ed257"],["/categories/技术/hexo/拓展/emoji/index.html","c8dc8e21efc4ddd6c75f7f7014faff57"],["/categories/技术/hexo/拓展/index.html","acae27c221011650379fe554b31c9246"],["/categories/技术/index.html","08c554b883e83185e1f05572e580714b"],["/categories/技术/前端/index.html","001b20f712ab419a33b7bc756a9c53f7"],["/categories/技术/前端/json-server/index.html","84a88665200cc55912b51eaa30e4bea5"],["/categories/技术/前端/nodejs/index.html","0b54dcbf68a294e4ed2ebbbb954f6689"],["/cinemas/index.html","f44cbfc230034fafae8d2630707bdf00"],["/comic/index.html","c880ee30b760ffba65b9781e8bc58deb"],["/comment/index.html","93fe8f711a74a021253fc1568825aae6"],["/css/cat.css","3f950c3710d2af2a2ad32fbd304b2fda"],["/css/custom.css","35ac497654fde0a07c77d45f2657846c"],["/css/font.css","5e5596be1fa040a01c799cc55f0f3638"],["/css/index.css","9b7c2591d6350902d926f9cc724570e2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/index.html","eab261297601dd4515f83aee12b47384"],["/effects/index.html","1550d2e771adc26f85ac2de4d9ccda1e"],["/font/iconfont.js","fd076523ba98971bc3cca741bab8fab7"],["/font/iconfont.ttf","c9bd493a9d03994ab541002d8a0d7643"],["/font/iconfont.woff","d80c9c4057d7b226072508d93312801c"],["/font/iconfont.woff2","ddbaec6138b7f86ca6239c801b43f8d5"],["/games/index.html","0b60105b69c9dfdc841bd0dc97515d00"],["/img/404.jpg","cd470f4dd19f20298805f66d44f14f74"],["/img/alipay.jpg","bed5337b6ebca4e6e38397d281c01af5"],["/img/avatar.jpg","bd82737d3bb8b0670c679237a60cb9b8"],["/img/background.jpg","df5317d1d1ebd751e3c414383275d1ef"],["/img/bg.jpg","7bc649f354532feba28c3a730e80b257"],["/img/cat.jpg","012fe24372982b585c358bbeee637cde"],["/img/cat.png","e87fd0176be93b8d8b155a2c7f7eaada"],["/img/favicon.png","6ed6cef0c5862b1e884781787437e038"],["/img/favicon_01.png","572067a097743a2394246b889bd5f1cb"],["/img/favicon_1.png","f655288fa7b6f02db108a654d52b55fa"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.jpg","d8dcb83c8505a7b5e9f7595587fb3cb8"],["/img/img1.png","b1f0a37431ac120d75200bc15256acd9"],["/img/img10.jpg","4b2d022a0f5fd208d12c51cdb7c4dc13"],["/img/img11.jpg","120c4b6cffbf5a6eb436fc28ee1c818e"],["/img/img12.jpg","41c8536b81af46511fd0d79139eeae54"],["/img/img13.jpg","9283c2ace68fad9174505fd265f834d0"],["/img/img14.jpg","3d8862b394f9dc52fc266d5a23b9f709"],["/img/img15.jpg","6e1c4b8389861f4fbeb78846aa531bec"],["/img/img16.jpg","d3170190bebe51dfabdd3aa0f95b0c4d"],["/img/img17.jpg","ae61e0ef3cae124b27103b6a9399b710"],["/img/img18.jpg","2e81d85097e19724e039d7913324af4f"],["/img/img2.jpg","58107edacc6f0f41c0ab3c212e8f4a82"],["/img/img2.png","ac3b72e42be310719517ee2845a165e7"],["/img/img3.jpg","c54885c00af5a8c6fc9a9b3c4ec8f771"],["/img/img3.png","0890df162c2ef36b22ac95b91cf19226"],["/img/img4.jpg","be443a663fc217202b655d2d47d58d88"],["/img/img5.jpg","fa3c5c152bfb0994f3c9fe98982fc762"],["/img/img6.jpg","88630427d9930c8035efe66077d23e2f"],["/img/img7.jpg","95da7b1d88a219440538710eea00c486"],["/img/img8.jpg","eabcb654083353f912b1eaaf11e40af7"],["/img/img9.jpg","90472ff3f2056f02bee2465626428f86"],["/img/loading.gif","446100f374e93811b2ddf58ecd807d9a"],["/img/loading_bear.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/logo2.png","744e9b6042214957abfa1edc82209ed7"],["/img/photo.png","23906bba0d8856b9a487b0a9cc82e9ef"],["/img/wechat.png","7bed06f9c63e08ce32484d373190774d"],["/img/星星.png","99452afb302f069f7e21fdaf4833d930"],["/index.html","6d6a7ce6c222ac46620517715741f9ec"],["/js/cat.js","087440543f53eac4972bfcf46fbf3700"],["/js/cursor.js","da91cc955b2016458c45c345d4cbf4d1"],["/js/main.js","f0e22839c4ea8571c74a19586bf1b8aa"],["/js/sakura.js","9c126b54d02b309fc869948c566c14c4"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","245e24448735719fb13f584ba281d8fc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/life/index.html","db4ea29199cfc15b6cc03d10194bc227"],["/links/index.html","422b3a8d2f5bcf3bca5a5ce32c342e12"],["/live2d-widget/README.en.html","1203236a2fbba35dc13debcab0283d4f"],["/live2d-widget/README.html","e93c6e931a4243532ae16751c8371ac4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9430aa3a7969a6c47c3d6c2de367b761"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget/live2d.min.js","0b4f2d81454d2bc8b32a254ff0a97820"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","3930dc37552c425d5328530331fc616a"],["/live2d-widget/waifu.css","9863d569771c872833e54634d806f970"],["/love/index.html","fcef9b09d77246dda1c7a43fe71bf505"],["/music/index.html","eff03e473ee15d672372fe5c32c434b8"],["/notes/index.html","68c1beac18b5d943925a76dff782b58d"],["/photos/CCG/index.html","f55834488c62971ad1f5614b25e17c28"],["/photos/daily/index.html","61c16975e64cb162dc0027cacfaa9f25"],["/photos/firefly/index.html","e2ba98a3cae26b0358eb8d9a3e8df14c"],["/photos/graduate/index.html","b56a3d3494a271ea0d4640e2eb9b8765"],["/photos/index.html","b079a651205b392bafc6952fb47bbf12"],["/photos/landscape/index.html","cdb74d9a540464b7c9e52984c6e9a14c"],["/post/ca8bfdf3.html","ddfd35807cbe8db61fa9171b6ce3bf44"],["/post/hexo_butterfly_1.html","ed4a2707663de68f872cab20eceb0696"],["/post/hexo_butterfly_2.html","5a49361f71791d3ac3f7ab76f50bfabf"],["/post/hexo_butterfly_3.html","866340e110c767d40accfdcbbf9aca24"],["/post/hexo_butterfly_4.html","6bc4a9ce8094ca6d6bb00b0486069892"],["/post/hexo_butterfly_5.html","bfa527e210f23bc6b5d43596fc94795b"],["/post/hexo_emoji.html","a9624aeb295b898e9b6e43a97190ad19"],["/post/hexo_tag_plugins.html","fc7d31edd8cf859ee03ad86bb5e9c74e"],["/post/json_server.html","3cc3897015f147eb8f6f788b1bdfad87"],["/post/nvm_nodejs.html","66230311b9a9c93a5a865d0577202b8e"],["/post_img/json-server/json-server-foriger.png","847c887f89b56bcaf551864d7d8a2cb9"],["/post_img/json-server/json-server-requst.png","d3e5c94dcded3452874f288fdac5a99e"],["/post_img/json-server/json-server.png","6493ffe521eacc0351dc70a960f15e0e"],["/post_img/json-server/json-server_all.png","b3a7ccaf380526bb6c493b2e56a24358"],["/post_img/json-server/json-server_compare-both.png","9c6652adfa7328d7f241ffc3af3a7ec4"],["/post_img/json-server/json-server_compare-gte.png","b3b31722b2beb06b459e436115717953"],["/post_img/json-server/json-server_compare-lte.png","f86ecd742a9a110fc9e86162983c2c7e"],["/post_img/json-server/json-server_compare-ne.png","7608a1c0a72bb384291e77d1a2a961d3"],["/post_img/json-server/json-server_deepget.png","1aa0b137f291340a60852e7f8b2f9cd6"],["/post_img/json-server/json-server_del.png","4f7b26348871e119c11e12fda5e6ecdd"],["/post_img/json-server/json-server_del1.png","72392368398419a5279609ad6fbfe682"],["/post_img/json-server/json-server_embed.png","bde76bc85ae3e4504dc899b4efaaf585"],["/post_img/json-server/json-server_embed1.png","b461044da7d4f012531242086dcce901"],["/post_img/json-server/json-server_errorinfo.png","45b85a76c675b3b320a50fe0857114a5"],["/post_img/json-server/json-server_expand.png","f4034b0a7af97939da1085d96a5bca90"],["/post_img/json-server/json-server_fenduan-end.png","5eab987d6e5150f715857ed13af8418d"],["/post_img/json-server/json-server_fenduan-limit.png","05db641965b033381e78a608ce4d796a"],["/post_img/json-server/json-server_fenye-control.png","b5f54776061dfd9b4f73e2a00b4c737d"],["/post_img/json-server/json-server_fenye-control1.png","28485ac76d6d7b183b3b44b70c0e6d78"],["/post_img/json-server/json-server_fenye.png","47f84c444ea63c1fdd40e9386f56d649"],["/post_img/json-server/json-server_get_&&.png","4702f0038efd726f8b413cec98e9f0a3"],["/post_img/json-server/json-server_get_&.png","ac7d0afe2b7c2a4b2fda38abb0c182a0"],["/post_img/json-server/json-server_get_once.png","d4ef05c9a09364ccaccd2236e8d9422e"],["/post_img/json-server/json-server_idselect.png","c8cf8b998ec170cb62e25195027d4548"],["/post_img/json-server/json-server_like.png","18a88b156a3fe631438c26325e7ae677"],["/post_img/json-server/json-server_patch.png","4cb5d9f55eca030061db5ce7e8fec9cf"],["/post_img/json-server/json-server_patch1.png","047ae2e3154921946fa05e7f76e739c1"],["/post_img/json-server/json-server_port.png","b0116739798d74bc732dc06b3b4337de"],["/post_img/json-server/json-server_post.png","bc04e1bde40fc19b277d167eeae41c3f"],["/post_img/json-server/json-server_post1.png","ed7225ce415a974c807f94c816b22857"],["/post_img/json-server/json-server_put.png","a6cf97fb5e8fa08826fe90a67cff67f8"],["/post_img/json-server/json-server_put1.png","cc999241bda89d273732ca7719391061"],["/post_img/json-server/json-server_routes.png","aba332ba667ca8eaa8bdd9c62ff105b8"],["/post_img/json-server/json-server_running.png","da2b2f3f56058fa84c7c5c0ffb2b799d"],["/post_img/json-server/json-server_sort-any.png","47251eae8ae15974e7e07844eec7a6a5"],["/post_img/json-server/json-server_sort-asc.png","bbe19dc791e17f26871bec10006bc4fd"],["/post_img/json-server/json-server_sort-desc.png","66286441f9fa9708fba6a789699d2918"],["/post_img/json-server/json-server_生成动态数据.png","44298eb263655a921a08a1968207c433"],["/post_img/nvm-img/image-20231009165050091.png","2c6641805a5a7d70075279461b2d317c"],["/post_img/nvm-img/image-20231009165653996.png","d0b37436fefd7049677d15277481f938"],["/post_img/nvm-img/image-20231009165822394.png","c33bb6b6345d12bca8aaa39dedc09d54"],["/post_img/nvm-img/image-20231009171001106.png","d8f912945cf15ae78eb03d8edee88a6f"],["/post_img/nvm-img/image-20231009172351803.png","3df0fc7b980122c6c1df12c6042b5fca"],["/post_img/nvm-img/image-20231009172705547.png","3b1a9d054fedc1b5942e3ea27bbdac6e"],["/post_img/nvm-img/image-20231009173012894.png","a4a354f51d74a3b4c513c628003aeec5"],["/post_img/nvm-img/image-20231009173400567.png","8e9e04b2166c971fd72e232193dca5ca"],["/susu/index.html","eb6f93e752c8237daff06d38aaf72bff"],["/sw-register.js","8b063466f702909cf753c98cbaa8410d"],["/tags/Hexo-emoji/index.html","024e01e7dc67f9a2b154580cb7478ee8"],["/tags/Hexo/index.html","0a205fb39b35b66cbc15ec2f57b8461b"],["/tags/Tag-Plugins/index.html","10ad2271d4aeb098f46ea8916d5ac06e"],["/tags/blog/index.html","c5b994317a9383935f8e5dfd750e08e8"],["/tags/index.html","62de5f1d959b44c003d9c468300f2db8"],["/tags/json-server/index.html","5513f3af1eefea272ae63de33ee4537c"],["/tags/nodejs/index.html","73d2d11ce03c5eccdf714d6ec6ab185b"],["/tags/前端/index.html","d4e60fc7038fba26d09120e93a187d4c"],["/tags/自述/index.html","fc9481c9b583a70a8afeb95caab5c4dd"],["/wallpaper/index.html","caf9df21d9b513490096832fa562b559"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"npm.elemecdn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
