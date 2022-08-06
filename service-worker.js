/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a46cbce41e1087effa886315c639f582"
  },
  {
    "url": "520算法结果.png",
    "revision": "c2d28863599bf38721dd9b31e67b7006"
  },
  {
    "url": "articles/520的一道算法.html",
    "revision": "6a22edbb6034f0af4dc0b1d0d7876a3e"
  },
  {
    "url": "articles/axios核心技术.html",
    "revision": "b633eadb03d4c11a9da681930afe914e"
  },
  {
    "url": "articles/axios简单封装.html",
    "revision": "0e37e4a92523c5f0116167c3fdd01be0"
  },
  {
    "url": "articles/CSS Advanced.html",
    "revision": "2994a10ec6a18ee7cd97c2fba042acd9"
  },
  {
    "url": "articles/CSS Basic.html",
    "revision": "1b8d6f86d70d6d4f523825ccff4e8c98"
  },
  {
    "url": "articles/ES6-11阮一峰.html",
    "revision": "25884d098f25cd3b80d0c8b5d1f69278"
  },
  {
    "url": "articles/github搜索案例.html",
    "revision": "a04a062210e97359d370ae62466f057f"
  },
  {
    "url": "articles/HTML.html",
    "revision": "8c5fdf5b2ad693bc8aeb069349a81a75"
  },
  {
    "url": "articles/JavaScript中的错误处理机制.html",
    "revision": "8bb5c4caa1daf44965acc613926d72d5"
  },
  {
    "url": "articles/jQuery.html",
    "revision": "e03504fe20e6d55944fbc2e78f0fb363"
  },
  {
    "url": "articles/Vue-Router基本使用.html",
    "revision": "ef16876ee1f9bcd3c9d195228c3995f6"
  },
  {
    "url": "articles/Vue3总结.html",
    "revision": "f9a10799539921ece2ed33980f22b571"
  },
  {
    "url": "articles/Vuex基本使用.html",
    "revision": "ab15dd1b2334d021cd244312e27a658b"
  },
  {
    "url": "articles/Vue中发送网络请求.html",
    "revision": "ee8b2635367c926460577345145680a7"
  },
  {
    "url": "articles/Vue中的配置代理使用.html",
    "revision": "4ae31fb59e77b17a8a959cbabad9df04"
  },
  {
    "url": "articles/Vue基础总结【持续更新】.html",
    "revision": "e4fcdc994dd4fc18e136448bcbee51fb"
  },
  {
    "url": "articles/Vue插槽案例.html",
    "revision": "11b60750fb8cdbd271b1d20724e55102"
  },
  {
    "url": "articles/函数柯里化.html",
    "revision": "7d5acaf85d8dac0919e55de27ddbfe07"
  },
  {
    "url": "articles/函数节流和函数防抖.html",
    "revision": "4784eff841007c17d9d83ed2a94f6db5"
  },
  {
    "url": "articles/手写flat.html",
    "revision": "27127d3121f54a01e415d70a81e41608"
  },
  {
    "url": "articles/数组遍历.html",
    "revision": "859e37ff8edc330cfbb654a162986177"
  },
  {
    "url": "articles/正则.html",
    "revision": "3a5e6a70b2139a3dbd9ebf5e27833189"
  },
  {
    "url": "assets/css/0.styles.bc16285c.css",
    "revision": "6d9cbdfd62a33f230156b5a2bdbae8e1"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.66efc5fd.js",
    "revision": "73532828b35f63c8bf2b8c00b5373a5b"
  },
  {
    "url": "assets/js/10.4eb33233.js",
    "revision": "c29c401bcfef239966d8aa33deea4c71"
  },
  {
    "url": "assets/js/11.9b72f507.js",
    "revision": "f520c8903d27a8b72245349396682dcb"
  },
  {
    "url": "assets/js/12.618ff3d9.js",
    "revision": "27b9495a10c9588d3e1d6488cf67975f"
  },
  {
    "url": "assets/js/13.93573bfe.js",
    "revision": "7eacb8a684f96eca81d4c0cde7cbf1f7"
  },
  {
    "url": "assets/js/14.624992d0.js",
    "revision": "b9b65a0b886f218dbd62edf6601a5906"
  },
  {
    "url": "assets/js/15.0b1de5c4.js",
    "revision": "38521c2c13395b4e94ecde1281770752"
  },
  {
    "url": "assets/js/16.92a32d9f.js",
    "revision": "048c149b3ae1103d2e6aa79646e014f8"
  },
  {
    "url": "assets/js/17.acf4f275.js",
    "revision": "dae9b1b04642935bdec079c903da7b08"
  },
  {
    "url": "assets/js/18.2b876e8d.js",
    "revision": "c7e2b310180282b7960a7f3858c397d0"
  },
  {
    "url": "assets/js/19.09990ed5.js",
    "revision": "c931003910c7ddf54eb7089ee7ef413d"
  },
  {
    "url": "assets/js/20.f1cdaf20.js",
    "revision": "2a4ac18593fefb06f99a9bea258a9f6c"
  },
  {
    "url": "assets/js/21.c90276d9.js",
    "revision": "6b9b67844551c0d58da176e34ba28409"
  },
  {
    "url": "assets/js/22.55d95159.js",
    "revision": "4c2e3b32663fe0349d0c50771d1383a3"
  },
  {
    "url": "assets/js/23.995b2e4f.js",
    "revision": "6772c8840a24566dd87055e2cec1ec22"
  },
  {
    "url": "assets/js/24.f540ab2c.js",
    "revision": "f0ea343857bb998e65c7c109deabd519"
  },
  {
    "url": "assets/js/25.14daf54a.js",
    "revision": "97223585535540e4184e89e634692494"
  },
  {
    "url": "assets/js/26.d8b54a37.js",
    "revision": "e69279d245f00e0eb710503b3a009e70"
  },
  {
    "url": "assets/js/27.2e17fde9.js",
    "revision": "922fc12b116b7eb6d8e611d027fd8cf2"
  },
  {
    "url": "assets/js/28.0975ddd2.js",
    "revision": "dc736f253758e8d273a14723e2ad2867"
  },
  {
    "url": "assets/js/29.c228b119.js",
    "revision": "94a44b48919567729944454142b4789a"
  },
  {
    "url": "assets/js/3.ae9fb131.js",
    "revision": "dfa0ae43a6b869c259f708a639d12312"
  },
  {
    "url": "assets/js/30.373e7f8f.js",
    "revision": "178fd95f88cecadd5a975005e601e07d"
  },
  {
    "url": "assets/js/31.43f9423e.js",
    "revision": "000d155591c3f7e44a4cebdbb06089cd"
  },
  {
    "url": "assets/js/32.2b43a160.js",
    "revision": "8f8dfeebcdb1e8c116f3586f1fa0fa84"
  },
  {
    "url": "assets/js/33.0e2a4165.js",
    "revision": "c2948175da204d980ff4de3b51d14aec"
  },
  {
    "url": "assets/js/34.490c7eb0.js",
    "revision": "f22f2d40518aa4ae5814530e2700637b"
  },
  {
    "url": "assets/js/4.ff175b66.js",
    "revision": "6f9e1babf6bd99f991a4d886fd511757"
  },
  {
    "url": "assets/js/5.8b13e0eb.js",
    "revision": "b7638e152df706f95d3147dfbf41b3db"
  },
  {
    "url": "assets/js/6.0ab7c6d6.js",
    "revision": "a257e1be61de56ba025a0c33a2b9a19d"
  },
  {
    "url": "assets/js/7.20122e24.js",
    "revision": "94b2267cc3418aa66636c05bb63619d7"
  },
  {
    "url": "assets/js/8.ed730b48.js",
    "revision": "3d692334ba0305a2c6005b51035f8314"
  },
  {
    "url": "assets/js/9.82d2931b.js",
    "revision": "380bd39cb49698d176bf8ce9271888d2"
  },
  {
    "url": "assets/js/app.a74b912a.js",
    "revision": "b8007677271541a2a4f4dd7dd17495c9"
  },
  {
    "url": "bg.png",
    "revision": "4a5b62440fadfda0392dcd581b032409"
  },
  {
    "url": "categories/axios/index.html",
    "revision": "0672566979dcf3369908dc79289d1379"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "0f406de2cdc794aa38c6e078ca65390f"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "6bd62ef0f211cea4894f26ab8c84d2ce"
  },
  {
    "url": "categories/index.html",
    "revision": "2f92837c55b533369e51f83e50b9929e"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "d68df0d3640d3becd55656cf50b70235"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "3c76023be5f24b143f408a3ae5469c3e"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "a67f7c931bdba5cbc1ac54b505de764a"
  },
  {
    "url": "categories/中等算法/index.html",
    "revision": "645e34ee9628e2cf29ce66ea8708f50c"
  },
  {
    "url": "categories/手写/index.html",
    "revision": "af89e3a4f5b92b631a899673917a2c00"
  },
  {
    "url": "categories/正则/index.html",
    "revision": "6bf59cf8791abf63b8108a68d55ba0e8"
  },
  {
    "url": "index.html",
    "revision": "001d5e6089fedef2810ff7f247859781"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "logo.png",
    "revision": "bb33bb8cf6de93aa38be24189e0fc093"
  },
  {
    "url": "person.jpg",
    "revision": "827984113d8bfdaa22d3c6a67fa87dcb"
  },
  {
    "url": "tag/axios封装/index.html",
    "revision": "37d361a1d1365a0b83294d755c2cec85"
  },
  {
    "url": "tag/axios核心技术/index.html",
    "revision": "db16df3077364eb75e85987cf1d57ada"
  },
  {
    "url": "tag/ES6-11/index.html",
    "revision": "68c1dc40ebc1e138346508309abb4604"
  },
  {
    "url": "tag/index.html",
    "revision": "d73671a79e8b238c37661c64adf94517"
  },
  {
    "url": "tag/JS手写/index.html",
    "revision": "3ca3eb3127c06bf3eb368beb519bf16d"
  },
  {
    "url": "tag/JS框架/index.html",
    "revision": "6fe0e50cb908d9456ca3ee5b9d9782ff"
  },
  {
    "url": "tag/JS进阶/index.html",
    "revision": "54021500607ddee783291a76b9033605"
  },
  {
    "url": "tag/Vue基础/index.html",
    "revision": "2ccdbd0b1c931ee983f4f01ab3351921"
  },
  {
    "url": "tag/Vue案例/index.html",
    "revision": "f194abb1c93cc3d967bb39735cf87dc0"
  },
  {
    "url": "tag/Vue进阶/index.html",
    "revision": "396666e87ecb9f696db3ff1214916649"
  },
  {
    "url": "tag/前端基础/index.html",
    "revision": "24f17f1219aaafa4b52c750c594ae0ac"
  },
  {
    "url": "tag/正则/index.html",
    "revision": "6f0416ee3f2b1c13f33e46e7c0e4108e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "6b78323ac285a5010a26cc48f075f29f"
  },
  {
    "url": "timeline/index.html",
    "revision": "20ffd6b83a35e434e64cc77e15df2838"
  },
  {
    "url": "Vue浏览器历史模式.png",
    "revision": "39e95d68b1a896043a8c24126c5ddfdf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
