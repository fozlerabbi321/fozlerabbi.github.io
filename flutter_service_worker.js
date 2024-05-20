'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c8ee17fccc0abb6cd66aa355c3c66318",
"/": "c8ee17fccc0abb6cd66aa355c3c66318",
"main.dart.js": "9a962d2344b9ff686f560dba23813332",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbd60bccf8e500506737882837b05818",
".git/config": "fdbe084ca18eb8e674f8ea335e3f2f79",
".git/objects/61/2694833d98443cb8e052b4ca5a61785e7fa8bd": "431453cc6bb677161e5ecae9f4c07dc3",
".git/objects/0d/d0bacb9c3be0c272ec51a852f6aab32badf99b": "727f912c203f675b63abbbcdfc4cc0d6",
".git/objects/95/171bd9b60476040c21fe84a1fd73bd9031cfa4": "ec23a1aa7f72b0fbb270ffbf0e4b1fdd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/295e9abbf62bc4cd9473da2d63b7ba33d4d832": "8e0fe02e7b30622a8159fdb6ad3c41d8",
".git/objects/3b/700496e4fb8655e9342412bb912d7517b41f33": "f7ae596b67f83a9d6f59d78581ba264a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/5d4d1898302dcfddf06f763beeb27bd83b7362": "2741c010963d3f86512cd697da489ef8",
".git/objects/6a/608c28ca297d4eac5e2d8bd0de97e23276d420": "211b1d03f808e1a4ed668ef8d9f06d6e",
".git/objects/69/6cd31b35a9c1bfe4bd6df62be1c4ccbdaa6763": "3a52cf12bbbffcedcb1356286ec4e4f5",
".git/objects/3c/bc961077ab5ed72f1c1dffab40fe891f819b23": "b17778fd38f848d80d1db35392d1f955",
".git/objects/3d/7a3f38e26751f20667d0c012d9d27f67433dbb": "1d6a1995da989cd8f876dfeebe235633",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c943451dba2dcc4badd117febd4b829ba2062a": "cb854118cd6ca4a51bfc8e90356b4e94",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/6431fee43de361300e928e03f124a07fb27f76": "a2d2ba69e1da2c0ce068e4dbfb2633bd",
".git/objects/ac/9fff0e440158efeee70e9693c87404fae2779a": "6aeb5f8b93d133d6f93a1d7cf6e45212",
".git/objects/ad/0dcdefafae8f1e6acd38e1524ed98a2ec3ea3d": "2b0e4942d968d165639f4b378cbe2bd1",
".git/objects/b3/4a9a043b543d6db671e61954d85395be5a2cdf": "a85ee329594f053c35b61b625ab1bae2",
".git/objects/a5/3cf2781b3be08b41eb0d2c35b05c5b975b48c0": "53b17781e4a49a8fbc2c2543ae24f5e1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/9c1f4f40ed2106d58075c12505eab8e6d9fdee": "31c7b6657eaba9a98849f8ae74cc2d18",
".git/objects/cf/16948dc1636697f55cc9918cfc254672deeb6d": "58a1900c71c45fd5b54622a9f8f25fc5",
".git/objects/cf/10b1d7f19e1d1a3c66cde2cd053ea906aff5db": "01e01c90c77134a32811ea05bb5f40e6",
".git/objects/cf/136a843dfeab770c5c1190e5ed2fbcac64665c": "8f4b9bb1e3fb64ca1930997ded254413",
".git/objects/c8/a4ec1aceca6a96817fe2da15c248589c54cfbe": "81ec21080e1c0d291b2b2469bd6e62f3",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/ec7549b5e16d7c088487b49974d88c75ae2c8e": "466346d9d8ef0aeac977ddca1d66225e",
".git/objects/73/8702620a49b944df88e049dd0f0b0ca5d6b503": "14eca7e6348b1025ecdc76e980006e98",
".git/objects/7b/99080f656416a4da9a2a5f685e77f814d2f3f3": "77adc7fb09b1fb3774c3e2617ce9fa5e",
".git/objects/8a/9cf1531333816a9584c563bba143e70e8e26ec": "cceeced3205816b5d08eb806f67edaaf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/2721a2967914c2053b356294c7e700cff550ba": "5d74eb8f5c75ce4d314d4394f834a599",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/2f/cf8944c3e3a744f33d2b173c3aacba29a60381": "74cb83f94703018ea37b2820545281ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/5c7e480e0cffc58dc3187b76534dd8c92b3a0e": "d8bcec9564757ef21d74ebcaedb51781",
".git/objects/6b/ee6d53bc70203dbb87ae587d93ccd546212817": "d1d3bfa8fe4606fc1617038d3b206a62",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/6e/be607fc389cdc0a9cd99e5ca7ca7e43a2a2253": "b16bf386ab51d88e08f7d9f4ea1e4850",
".git/objects/31/5f2fb769f9cbf4bafc7cd7c744ab1b4382d736": "775fa53d3decc2100a8acfb8afc1ebe9",
".git/objects/65/bcaeeabeb41327c0cdfdbf966022a8f3676957": "491e6a68307d69542cf3e9c9ec88a1c2",
".git/objects/96/3c06e8924e71eb1dc748e40d4d40b5a8aeb381": "54d2e31d52e04cabc08688276c2e08e7",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/30/779845aa7cde07b21cceb3eb69035a987c2a05": "c02e8beadb6e082180900ae098651d68",
".git/objects/08/c753fd613377c7a828f6fd7a0e80b3e21701f3": "11c5eef1cae76a4384f6a5b7efb5b9a9",
".git/objects/99/2368a28d9aae822b6825bbba4ca8d88a399bf5": "aa5f1de308f880e937c6ea547629bee7",
".git/objects/52/1c62f357f7aa95045a0634b838015186fafbdb": "fd7f70377ea3e2dbb81c15965ce4834a",
".git/objects/63/f087a6a2ea7c2c410bc2767d161381c1667681": "9412736127088d6eced2467fe529e749",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/31663f4be1ac17a2b526a459c657fe19bc4528": "cefd785a1e4fa9060f4fb035d4f75d24",
".git/objects/d5/012e55f1e98671c75cd933e2bcb2dc8521e076": "08a43d9ac775e68f7473ef35df1f4213",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/2fca63c28e164e9af81d63b22bc4f798dc2070": "85e507be84b68adceb0a7291f4f626fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/6eee1bd1f03ee392b6e29fc771bb0ac1efc4c4": "3177cddaee3dbe4f9b4fe1bb9e6ed3c2",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/7ed22af8b409e8ae313bddae0a440e8dfa3ab1": "96d3f2e945ceaa6dab5f45a41b41536c",
".git/objects/f1/682786c39ab446f714630aac4b3736e9745b45": "c69d21f6a7076356835d7ba2706e8a8e",
".git/objects/48/9f270263f5a375ee5f01155880f36f75a327b5": "49090529cf78fda1fa823ea846a93175",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/a106faf4bf6d103e92c423171c505cfe62736a": "3686f0f17685201b78841f5eea4659dc",
".git/objects/8d/33cffb13180654b5849d8adc40bee9ca17dff0": "d5c76627275436a2eac1b85cd076c96b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/d02475bb6bdd04d19263b7230b1bfa0a3f6454": "82ff79cbec637aa9b73de5dad2374fc1",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/7f/20ecbc9a8634d43fd5f9f908fc688d12bb1d7f": "d0d0dcdf5fa388c9bc8d8a00b95b20f4",
".git/objects/14/99b762af9bd0daf187f1e1b0d52fed5cd2ba12": "18487e697028a3a1cc82749095e165ef",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "493a6169b134324c605e1ca1b4fedd91",
".git/logs/refs/heads/main": "36f1f030394968419358f0aec84cded4",
".git/logs/refs/remotes/origin/main": "4ab64e12efabe18026d34d365207b907",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "825e4eecb462f7e966216629b8c08550",
".git/refs/remotes/origin/main": "825e4eecb462f7e966216629b8c08550",
".git/index": "66c2c0903efefc9083d8e4c9f074d46b",
".git/COMMIT_EDITMSG": "2ce3764a27e6057aae8e7c95839a08c4",
"assets/AssetManifest.json": "ce041afb3cf28e70b8ee472837ed0584",
"assets/NOTICES": "43cfd41ee16ff19a8aa273e32944270c",
"assets/FontManifest.json": "ad1a2b33dc8645a9ec31ed1b1f6b573a",
"assets/AssetManifest.bin.json": "3df24a61920afb278b25f6419ca5e47d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "408bf1a0fa784885fc068379fd7ebb71",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/o3d/assets/model-viewer.min.js": "7f3dd99a5c27b30d285da8e8fd969b18",
"assets/packages/o3d/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7845cdcc3896669d0c6b28f0982ea59",
"assets/fonts/MaterialIcons-Regular.otf": "1aa270aa856c3b688ccec1cd65b9e2e3",
"assets/assets/mini_app_directory/tictactoe/celebration_animation.json": "ae3962d35e301e4f8452c31da454b0e8",
"assets/assets/mini_app_directory/about/my_img.png": "d2bee8aef5579c388d427c2fbe305bf7",
"assets/assets/images/CloudyRed.svg": "876c1b2ce914167322a0a544947b0017",
"assets/assets/images/blue.svg": "aff2ebb4cfb5944c493dc415685fd1a6",
"assets/assets/images/blue_marbel.svg": "7ab649a6e6d65fafbff9bd3d5e391fa2",
"assets/assets/images/gold.svg": "5bbacf65af1a76638f8369773c0f1548",
"assets/assets/images/red.svg": "9bfef8b423f9834c43b33dee2e07d17b",
"assets/assets/images/neon.svg": "dc2f81d57a3b4a57c60cfd7be15f8b66",
"assets/assets/images/night.svg": "b5cdf079a0162d6efcebdaa857fc287a",
"assets/assets/images/CloudyBlue.svg": "d70cf920fa288ea625eb28c612b3bab2",
"assets/assets/images/green.svg": "ae62370f9024a41ac7ba13df197baa67",
"assets/assets/animations/skull_face.glb": "d4a649e29c9e40b2e9bdd7a20904a871",
"assets/assets/animations/spider-man_big_time.glb": "f904f8eec7beac48124498dda78abdc8",
"assets/assets/animations/robot_32x.glb": "236d5869671bdef0587a0a5d761100f4",
"assets/assets/animations/slender_man_slender_the_arrival.glb": "b98ecfeb0f90fa429fc416998159c807",
"assets/assets/animations/man_in_suit.glb": "5684013f516053fb6a93ff59a6799f4f",
"assets/assets/animations/nathan_animated_003_-_walking_3d_man.glb": "4df890f1a360b37371f50cb27a3219a3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
