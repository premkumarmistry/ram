'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ecf1c9d02a3a9d270a2f37b24ed06ecd",
".git/config": "e421187b68e00703606f0ac695df154b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e890b4899e9f80d55a706d48b6ab4315",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e96ee1516f8584a35b521c61b59d80f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "abd9487318ada26036f504d670aaa24e",
".git/logs/refs/heads/main": "394234cc4ece6db8194bf8b41557e5eb",
".git/logs/refs/remotes/origin/main": "abf78478a0f9f6673cd1d5777b273814",
".git/objects/04/1b1a6e297316b9774010740af95f4608c35499": "41e55caba7a08023c8dcfd563a5d3e1b",
".git/objects/07/83caeadcac99cd9478f08a48bf14fbb80c2acc": "9dd90638520b371d7fc2f5cc3b3fd85c",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/d3ecf6e3cf590fbea06dc76135a3a3b98190ec": "d01932606cd2356bc5cb935e2dbfb55b",
".git/objects/14/3196648b81aa8d44d2a66748cdcedc059dc3f2": "27644d05fb13efc5875955a9874670ef",
".git/objects/15/4b116451ad0eddc974f97068298b1576d1af28": "92d843f177dadb2267dc281082d781cc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/9f5c5f5b9c5ec6510f28d353b758434b358eea": "566209fa1c9d15f40cd42d382fa8fdf3",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/23/3ce79ab8617f584a89de2e2d5a7c77cd076120": "72017a0d4c3432d3d2c649414248546e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/0aa76fea02d0ffd2b0005a9df3b7cc9e923411": "6db3b67b22ede52c5e52bd4c3331e7be",
".git/objects/27/c7b5a1b7195fd9e2c3708b3d5e533dea3a53d7": "5793e37c6a3820401b92abce35b71b9b",
".git/objects/2c/a45f0ae64ba95ccab9fa5f97fafe0f34c4bb79": "60a55f5dc43d44bb4da70f2b633f41bf",
".git/objects/2f/2ea7844138ff86580d78f722828a8bcf2abc50": "d24ac8f4825f922ab8bfe5cf3b0d05b1",
".git/objects/37/471d5a88cc1f87d4b0e6158a5915044533e287": "301a4516406b9b4cbd942c49f4ae5e54",
".git/objects/3a/deacb078c0f782ed2c0f5115d290374bc04419": "91d67ada96b218160b10c41719e00f80",
".git/objects/3e/05db43814112485b694840ea28f2a2aa1c81b5": "9a079a41abf432c005a50d98953387c6",
".git/objects/41/24fec16934ec96dc6dbe77a4c51431929c05a9": "a549531b0faeeecaf10d5cc690c17344",
".git/objects/41/a5534a684082c9eec3b584b74a56af6cd93567": "8cfc16cd90c48d2248e33c434359b1e2",
".git/objects/42/7c20aa539a973c734a12852bdde1eb0571fb33": "76ca1cb610dd31182dbb4b6e104ad295",
".git/objects/42/c08872ff703234ad4133686038850c81c682c8": "1beb208fa88e9758e88f6500d4002c07",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/2d812580c90caad8a0a9a78cbcee2e897be70d": "be7695dfded47c6c7787d1c43000dffb",
".git/objects/4e/89b1fea5512da10504b15df0b0ed91fef47b95": "ce0c0dceee21536c9d508462511c60b0",
".git/objects/54/6e73aa805f437a9d9bac9812876f4a5fc921fe": "987d07351fc3eee0f0539e82542afd23",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5f/20163fd91193b04fa4347f55a85ccee3c7e459": "0ec382763a49f18a7b9f9b1d8ff4c00a",
".git/objects/5f/4f0b9f69e5adfb8b52f6f7104f3ea7ce12abab": "26ead4934d72b9fb9d442246ae142aab",
".git/objects/61/2dfd6ab9853b9d018329a1000e556153fd8ed4": "c9d86f4dde733e1570c96e27ae52546d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/76dee4f503b0b807f4cad39bb3a763648409f3": "7e2baaa70dd04369d5519b7dc88f2103",
".git/objects/67/8c9c97ad0337b4d7fe593b23542f6c950a0e1d": "9f1275294bb17e69d5ab3e8e18313596",
".git/objects/6a/91ad687f6481922d1e3cc34bf2a3c95960feb2": "1af1b5d63e1a64c5e657ffd25f8aa757",
".git/objects/6a/ddd94f3d006869eeda8a6e1a8e70ba4c31606a": "ad1be445f8e32370550fb9f21ea672b0",
".git/objects/6d/21a767fecaca7a2037a6bd8048cc972172ad37": "f056da1108baaf5223ce959b7132112d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/654413287268a6e7e4862c7eacad083600e7a5": "3a99c73f4362f4f600dcbd2329c578a5",
".git/objects/79/8ab8139778510b44f1bc1bba894f403fb75907": "6089cabb4597caec557cc0e04cc47076",
".git/objects/7a/60084d71e1ebfb32bb69a6aec2ab10d9da4f99": "fed326a5e7db88d6724aebbd670af047",
".git/objects/7c/8850b6d82f801d8e3c0c29e3cc432064a9714f": "73034c21210773ed157669df49a3586a",
".git/objects/81/2c01982f75fdf09c91150403e243277c11fd0d": "429a8c49affb9708033594b5837dbc16",
".git/objects/82/7e43bbee761b0f437a0dad03dc535ebc50a9ac": "5fc5a2bd2af69e33324119221217cf55",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/464480f3bb170749f0bc8182b66dfc4240e232": "6bf340e3263758d79f9ec2bfddb89c1f",
".git/objects/87/79e069620533a8ed27cbbbb89acc5c52076046": "779c76c0b66db17b3c8e79beee5070b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/25c63b00f0ae0f98c5b8d2ead738b1465619ab": "a330f2a02d36e362f591b617e82cb008",
".git/objects/91/1ea03e52bdff18514b9fd4dc45b119b74375e5": "c08d3e1ec6bba0433c88ffcfc93b19ec",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a1/288136277c528886c0a95ab6b1db77beb3edc4": "ebf8fec5e77ce6e7497437f046206e26",
".git/objects/a8/61731a39bdc0b3887a9b70bd03230d90a73b46": "3406b17636f8c39c2abc7bf25bd4aa2b",
".git/objects/ab/1462729e8d15bc925dc5dbaaa8c47383155811": "3e5973c01e370ad5e9ac527f22f780f7",
".git/objects/b0/d30e1d61ef91dc325ec6156db0dff38ebc5f9d": "3ef8526266f8fec67b93c02ac4a0a5a7",
".git/objects/b3/794f3adb869de6e0613ab9569e6cee08010a1d": "f640410d4953e2d9ab5f0738ad5dcc8a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/edd0c732d2d66e581a23130974aacee6900421": "790ecc11870d93f2778b496fe36279af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c64e50dfad1a6acdcf255aee27f4d5a2d18127": "48ac852a721e414624ae26e406037230",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/4e685e9841bb7456dbfa85a95c1276f2bf5427": "289aeb544cd7e257a064848c6774ef2d",
".git/objects/d3/4b53ea8a6f34d92c7dbf3f64e50d12a625a560": "8f71a3afa3e91fd29e30c58b96cf9b35",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1cde8b0f7594ecc6f473d06c32cb3cf4bab9cf": "12effc6c63ac0b307002ff73598d09e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/e90d2ca4d6a3e9c295e3ec5c2a299574d72139": "264d908c8173f6dd6f276247794fdec5",
".git/objects/df/9507c31fafdacf874099e23c97854398be6232": "a5038df83c074b022c6607e23bf5c55a",
".git/objects/e0/2b47ea34e4920aaa5fc3a2dafe00e844a45fea": "b8d4251bfb082c5cdc204e68d97fa34a",
".git/objects/e9/9f3a88cf7e146811cb9773f335771861ac01ea": "1f1d1428f818e27dd6b346369d48b865",
".git/objects/ea/e7c0b525658a84cc5aa05857ea6de303481eab": "1368a617a1c6c2815952e8cd21edf905",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fbc019addd6377c5c391e4436153c62f1e2bf9": "0415c735269ed8039c4cf16624baa27b",
".git/objects/ef/495ad357a1f8591d8a5ceddf76c01e4a874c2a": "c05245e475ce32029b4f3c4206ba2cd1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/f81c4bcfdb50c00f244951231e9da99e0fcd2e": "fc485711613c6cecf970513c567ae6ce",
".git/objects/fb/553a0b1bc826f724eee641d5ad2e8196be9013": "4d6a9c6496f922655c2476f661338a4d",
".git/objects/fd/044e82b1e4d2ba37d496b894f3a7889198b03b": "e02b56aa2aad22452b90b15017127163",
".git/objects/fd/878c0c2d75d69a846f2fcf5066492cacb10339": "7a4f69bdd90c5d02eb5f73b6c1f706eb",
".git/objects/ff/894405c26e00fd7651de8db62f1f2a7fe29299": "6359b5cd9ae22dc8b75ef466e2f0d540",
".git/ORIG_HEAD": "2b43f6871976c20aff9f5df9bb3366c8",
".git/refs/heads/main": "7ade419d01338686181759542b5db75f",
".git/refs/remotes/origin/main": "7ade419d01338686181759542b5db75f",
"assets/AssetManifest.bin": "01f00800ebf4d9209755a15e4a89e313",
"assets/AssetManifest.bin.json": "35566d525f90f1a940102262a98bb767",
"assets/AssetManifest.json": "e39b7d9260db9329288a9a6fd7cdb73e",
"assets/assets/images/ark.webp": "dd813bd5259db2d4750a04f63f6eaed4",
"assets/assets/images/ayk.webp": "2b0f852ad94db5876f5640a2fcdb0b66",
"assets/assets/images/background_image.jpg": "a2d388b02caa32716495fa3b5c64ce8a",
"assets/assets/images/blk.webp": "99d7bb7b2cdeb5a9df36f512e350c444",
"assets/assets/images/kkk.webp": "634a3d7e4bafd91e75561a0faca781f6",
"assets/assets/images/lnk.webp": "3a84679425320795fb0740bafb1d23e0",
"assets/assets/images/snd.webp": "1fd29f3a0d9bdd6052417d239293daa9",
"assets/assets/images/tls.webp": "428dcb42957a6e9a7715e9be13751318",
"assets/assets/images/ukk.webp": "087bc5e90889fc7916a241446bbc9c67",
"assets/assets/tulsi2.txt": "65e75752d61cd1773674d8c00d1ed1b0",
"assets/assets/tulsidas_introduction.txt": "2813c68588ec641f0088bdb8454e47da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f53c462c93d8972cb0889a99850dbaff",
"assets/NOTICES": "673c3352e51f040b1a2cb37aec2b1933",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0b3165dc6c570ad4dce05061ea756239",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47674ab8a0c3dd9ba1fb10a4db4d1c14",
"/": "47674ab8a0c3dd9ba1fb10a4db4d1c14",
"main.dart.js": "04c5b89cf86b126e8a0eb239bd49d6eb",
"manifest.json": "6b30b8b8d1c5076478af9d8b8edc5450",
"version.json": "0ad18c1bda2d6915d89c6f194f1680f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
