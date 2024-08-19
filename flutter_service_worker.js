'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
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
".git/index": "0913322b357cb8812a66523c23fc2194",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53184917a93c25039f8c77a5c9f2d5ca",
".git/logs/refs/heads/main": "8dcaa53c8e7617aa6c9adf2150d990e4",
".git/logs/refs/remotes/origin/main": "4ee224af7a65fc32dec148d92bdb3276",
".git/objects/04/1b1a6e297316b9774010740af95f4608c35499": "41e55caba7a08023c8dcfd563a5d3e1b",
".git/objects/04/642be8846ea27e589debb17ee74eb787c6adae": "cd8367de4c8ceb062a2d46034656a3f9",
".git/objects/06/79d089febf87fbbc3076640000ef00eb7f807a": "b3e36c0b42835f472cf8703c948154f4",
".git/objects/07/045029456112a007ae88f89bbc1344e02f87fe": "bc6fd0b4c96fc755675611388a66adb7",
".git/objects/07/83caeadcac99cd9478f08a48bf14fbb80c2acc": "9dd90638520b371d7fc2f5cc3b3fd85c",
".git/objects/0a/48900d05ffbc131262f15cd72c95eb29828452": "0b89202b021bbde2365bd328d7956ca0",
".git/objects/0c/eddaf9f01b71f1462a212aecb7657c46b691bf": "8d002d9a32315177a690590c85fae48f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/d3ecf6e3cf590fbea06dc76135a3a3b98190ec": "d01932606cd2356bc5cb935e2dbfb55b",
".git/objects/10/1eb3ad8f3885ff0b2468878237a310bacddd37": "71275f03837899b0c3b6be4bb47dfd28",
".git/objects/14/3196648b81aa8d44d2a66748cdcedc059dc3f2": "27644d05fb13efc5875955a9874670ef",
".git/objects/15/4b116451ad0eddc974f97068298b1576d1af28": "92d843f177dadb2267dc281082d781cc",
".git/objects/18/9d0466ef8342d9c1de6c16f3525da373e22f10": "28be3955ae1b54c0c5fdd5cd4db19272",
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
".git/objects/2e/5ff1b5c136827c60deef1c3e79d820142dacf6": "9e03f39922b74cd0c523140b0bcfbcdb",
".git/objects/2f/2ea7844138ff86580d78f722828a8bcf2abc50": "d24ac8f4825f922ab8bfe5cf3b0d05b1",
".git/objects/32/fbf3d2e8d74d5690a4496f0fb591ba98fd430a": "f375b255459f4938a8388cd4f15be629",
".git/objects/37/471d5a88cc1f87d4b0e6158a5915044533e287": "301a4516406b9b4cbd942c49f4ae5e54",
".git/objects/39/193d2a4787ba2aea2c11dbd0c815731bab8500": "c2a85b00a00ad118ee4b7a890db99ef4",
".git/objects/3a/61156cc704c71b5176109053631e3f9091339b": "cbb8a9a2c01e37f2a166854a8f7c9a44",
".git/objects/3a/deacb078c0f782ed2c0f5115d290374bc04419": "91d67ada96b218160b10c41719e00f80",
".git/objects/3e/05db43814112485b694840ea28f2a2aa1c81b5": "9a079a41abf432c005a50d98953387c6",
".git/objects/41/24fec16934ec96dc6dbe77a4c51431929c05a9": "a549531b0faeeecaf10d5cc690c17344",
".git/objects/41/a5534a684082c9eec3b584b74a56af6cd93567": "8cfc16cd90c48d2248e33c434359b1e2",
".git/objects/42/7c20aa539a973c734a12852bdde1eb0571fb33": "76ca1cb610dd31182dbb4b6e104ad295",
".git/objects/42/c08872ff703234ad4133686038850c81c682c8": "1beb208fa88e9758e88f6500d4002c07",
".git/objects/46/1c8d2c1856407b576dde806fb4598341d8badb": "a16f28b48047cbee6946bb7ddd9cfdf4",
".git/objects/46/26c9f3708df110c62f6a83bc1af2518b139d01": "16bc6cdbc2b3c3748bc20e7f886bcc9e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/9b8d189c9c93d28421bfc1384fe352321ce58d": "7b43bc2bc265da75123778762358eb7e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/2d812580c90caad8a0a9a78cbcee2e897be70d": "be7695dfded47c6c7787d1c43000dffb",
".git/objects/4e/89b1fea5512da10504b15df0b0ed91fef47b95": "ce0c0dceee21536c9d508462511c60b0",
".git/objects/4f/59a894ca8ec127526dacfd1a65f28a43684efc": "31a6a9d5e09c00294ef2c1c0a658840b",
".git/objects/54/6e73aa805f437a9d9bac9812876f4a5fc921fe": "987d07351fc3eee0f0539e82542afd23",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/4c0a25ae8bd5e5a3b6511b21585549007ae377": "35075c379cf1978fef26d315dffd1bea",
".git/objects/5b/9689c99b878e23c0a4ab1bd7022f8e1a49f44e": "3a979611ab80476f7727d7ff73392c82",
".git/objects/5c/c4f9423e66d06c81b6d5a3da44f4493c8b0684": "6f65c310bf4396c646dcf302a2480f21",
".git/objects/5e/a789ce431039244eda334a4b00b74264b7a37f": "e29e9e52dad4cb92043a33567c921b94",
".git/objects/5f/20163fd91193b04fa4347f55a85ccee3c7e459": "0ec382763a49f18a7b9f9b1d8ff4c00a",
".git/objects/5f/4f0b9f69e5adfb8b52f6f7104f3ea7ce12abab": "26ead4934d72b9fb9d442246ae142aab",
".git/objects/61/2dfd6ab9853b9d018329a1000e556153fd8ed4": "c9d86f4dde733e1570c96e27ae52546d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/76dee4f503b0b807f4cad39bb3a763648409f3": "7e2baaa70dd04369d5519b7dc88f2103",
".git/objects/64/172f8216367462b5b35795e2dbf16c240b4985": "bdc6e8783d2f7f5e2bf63be1026440f5",
".git/objects/67/8c9c97ad0337b4d7fe593b23542f6c950a0e1d": "9f1275294bb17e69d5ab3e8e18313596",
".git/objects/6a/91ad687f6481922d1e3cc34bf2a3c95960feb2": "1af1b5d63e1a64c5e657ffd25f8aa757",
".git/objects/6a/ddd94f3d006869eeda8a6e1a8e70ba4c31606a": "ad1be445f8e32370550fb9f21ea672b0",
".git/objects/6b/4d7925a291c9b1e2c6feabd383ff1cbfae6182": "9ff0ee4ecae753acf85eccbf2e30c5f7",
".git/objects/6d/21a767fecaca7a2037a6bd8048cc972172ad37": "f056da1108baaf5223ce959b7132112d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7abd641fdc17dc1f0a260ed5986516544c4ffc": "1beb2705b7f59596c04ccc55487e66b4",
".git/objects/71/f822ada33b524f78bde8865dca80700b639e3a": "3c025b71723545608248a37446da5dfa",
".git/objects/72/920f065eaedb7f20a01a70d7b25e0db7b5b65f": "6afc99c870d6f8ff2c861f5bec6ae939",
".git/objects/74/654413287268a6e7e4862c7eacad083600e7a5": "3a99c73f4362f4f600dcbd2329c578a5",
".git/objects/77/35ab73cc6f847ec7ed54b6b136210effccd2b0": "9048208a870705b41e0f1196c978b2da",
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
".git/objects/8e/23dbebe10f6005f59cf1ede2891a4701a03a50": "7268023e4f1a3b0a6c033c531eae4610",
".git/objects/91/1ea03e52bdff18514b9fd4dc45b119b74375e5": "c08d3e1ec6bba0433c88ffcfc93b19ec",
".git/objects/94/9b46a3801f3212783f1946d685024139e12b64": "ef6543f52fa83468846746bb5d7594b1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a1/288136277c528886c0a95ab6b1db77beb3edc4": "ebf8fec5e77ce6e7497437f046206e26",
".git/objects/a8/61731a39bdc0b3887a9b70bd03230d90a73b46": "3406b17636f8c39c2abc7bf25bd4aa2b",
".git/objects/ab/1462729e8d15bc925dc5dbaaa8c47383155811": "3e5973c01e370ad5e9ac527f22f780f7",
".git/objects/ae/47531ff9875b32c61f314f6db1695d303ca5ac": "2db72f126f4e06d140d42ab38b9b34b1",
".git/objects/b0/d30e1d61ef91dc325ec6156db0dff38ebc5f9d": "3ef8526266f8fec67b93c02ac4a0a5a7",
".git/objects/b3/794f3adb869de6e0613ab9569e6cee08010a1d": "f640410d4953e2d9ab5f0738ad5dcc8a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/edd0c732d2d66e581a23130974aacee6900421": "790ecc11870d93f2778b496fe36279af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c64e50dfad1a6acdcf255aee27f4d5a2d18127": "48ac852a721e414624ae26e406037230",
".git/objects/b9/ea8c0997e5aa30378c8e34911b25417a24b99e": "621e59337ae7c878ede0dcd729b249f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/c4c4efa58463a2817625d56274168043d07ace": "92d1ad42ca79e3232abd1d754272291b",
".git/objects/c0/48fa0782c419a74620600c196ff1808c7f1ab1": "cc12b460bc751131336430e1615c6441",
".git/objects/c9/a53116c52498e2a41b61405fd9a590abb1263c": "a8f92d490e1156e44e0dcfc03b4e907d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/1250d5849628a32dd03978587153e3e853fa45": "f0a226ae7daddd0869a31630c579c121",
".git/objects/cf/7990e482f013737466316193562eca393ac822": "ba3383643d6e8cab764bc17cb28ca421",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/4e685e9841bb7456dbfa85a95c1276f2bf5427": "289aeb544cd7e257a064848c6774ef2d",
".git/objects/d2/e24457c8f528ae9f6fa7d6ec911f63f90ab95b": "31ff67c1b0adbaf07a384c96bbe95a90",
".git/objects/d3/4b53ea8a6f34d92c7dbf3f64e50d12a625a560": "8f71a3afa3e91fd29e30c58b96cf9b35",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1cde8b0f7594ecc6f473d06c32cb3cf4bab9cf": "12effc6c63ac0b307002ff73598d09e7",
".git/objects/d6/52b4ff5f51628744ca6ceb0027b7f027253160": "79032e68f290f463960342099e5a1855",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e4f5ffd4d4f3b68dd019f2c3fc1e9ad3fccf95": "fdd498d7feffdd9f51cdfc79ddfe9e50",
".git/objects/d9/e90d2ca4d6a3e9c295e3ec5c2a299574d72139": "264d908c8173f6dd6f276247794fdec5",
".git/objects/de/f320bdc9cb43350cd483f62f3dfed280f03356": "8055885a154f52b19e4375ad4221aafb",
".git/objects/df/9507c31fafdacf874099e23c97854398be6232": "a5038df83c074b022c6607e23bf5c55a",
".git/objects/e0/2b47ea34e4920aaa5fc3a2dafe00e844a45fea": "b8d4251bfb082c5cdc204e68d97fa34a",
".git/objects/e0/73b70deedf6cee9528f185a5b6cf26980131f2": "40bf54771e34632a14cb872dbdee0c80",
".git/objects/e7/bbbb4032ac0c1cd52807493350b427a397b5b8": "9e62a18ba507ce8ede8e098cd4d42bb5",
".git/objects/e9/9f3a88cf7e146811cb9773f335771861ac01ea": "1f1d1428f818e27dd6b346369d48b865",
".git/objects/ea/e7c0b525658a84cc5aa05857ea6de303481eab": "1368a617a1c6c2815952e8cd21edf905",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fbc019addd6377c5c391e4436153c62f1e2bf9": "0415c735269ed8039c4cf16624baa27b",
".git/objects/ef/3e12966c5b1f818228269a0da22ae23e65e9de": "aaef0fb851a19ad308791e681481b8e8",
".git/objects/ef/495ad357a1f8591d8a5ceddf76c01e4a874c2a": "c05245e475ce32029b4f3c4206ba2cd1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/df8f03dda27b3ce9f1e0101577b5518a177460": "638ae85115a895e5353d6794d36f2cec",
".git/objects/f5/f81c4bcfdb50c00f244951231e9da99e0fcd2e": "fc485711613c6cecf970513c567ae6ce",
".git/objects/f8/24391e39648b2280faaf9c1e7ccff94fef7747": "fecb269471c9c08c4b766193a8ed779d",
".git/objects/fa/ffb34a6db54ac35fce505f074482319630a91a": "6be815bec3aee0268c9e392a80d67522",
".git/objects/fb/553a0b1bc826f724eee641d5ad2e8196be9013": "4d6a9c6496f922655c2476f661338a4d",
".git/objects/fd/044e82b1e4d2ba37d496b894f3a7889198b03b": "e02b56aa2aad22452b90b15017127163",
".git/objects/fd/878c0c2d75d69a846f2fcf5066492cacb10339": "7a4f69bdd90c5d02eb5f73b6c1f706eb",
".git/objects/ff/894405c26e00fd7651de8db62f1f2a7fe29299": "6359b5cd9ae22dc8b75ef466e2f0d540",
".git/ORIG_HEAD": "2b43f6871976c20aff9f5df9bb3366c8",
".git/refs/heads/main": "bea1d75cc1dbf62bfb76f2b1f832c99e",
".git/refs/remotes/origin/main": "bea1d75cc1dbf62bfb76f2b1f832c99e",
"assets/AssetManifest.bin": "4a47ccc89e95fd87e2c7a9705211a1c8",
"assets/AssetManifest.bin.json": "faeb03b343e9486d0c652ae907a52ab9",
"assets/AssetManifest.json": "f2b8adc6cccaaf78ddad8df685e62824",
"assets/assets/balkand/bk101to110.txt": "2fd12781e43eecb5f35f69fbc3f639ea",
"assets/assets/balkand/bk111to120.txt": "5e3808682ff2f98d6c6cdb587c833006",
"assets/assets/balkand/bk11to20.txt": "10343fb5a0e279f2c44cf5edd5ad23a2",
"assets/assets/balkand/bk121to130.txt": "ac467c3ea0e7c54b597056182f2a7b15",
"assets/assets/balkand/bk131to140.txt": "7e2d77a01b40f26140c08cd087c3371e",
"assets/assets/balkand/bk141to150.txt": "2f364e58a55d773b6e6901f73f047dce",
"assets/assets/balkand/bk151to160.txt": "f046c58b126e241e51b566318d1b620c",
"assets/assets/balkand/bk161to170.txt": "a2cb5a1db9e272b50c26153ddd065a13",
"assets/assets/balkand/bk171to180.txt": "1432af8c46184bfc0044f4c30b82e403",
"assets/assets/balkand/bk181to190.txt": "0a621a6c8adcee8dd45a2ea7d1f5918f",
"assets/assets/balkand/bk191to200.txt": "08ce495f8a94fa21b151edc89c666692",
"assets/assets/balkand/bk201to210.txt": "e6f038f69ba3721fcf0b2dd46475b7c4",
"assets/assets/balkand/bk211to220.txt": "9506fc81254205033bef93b0ab8d5baf",
"assets/assets/balkand/bk21to30.txt": "7f2721fbfee95395ec3077d1d2e15453",
"assets/assets/balkand/bk221to230.txt": "2ec51d72fdef6726e0c6e375980dd054",
"assets/assets/balkand/bk231to240.txt": "7317b730bac9d324343914fce83f0cb7",
"assets/assets/balkand/bk241to250.txt": "c5c68ef4d66569f79f8c47ad8738a938",
"assets/assets/balkand/bk251to260.txt": "19e48d9635006e816417ed3f8d335349",
"assets/assets/balkand/bk261to270.txt": "14c42d5f9b3010075fedd240073c45e2",
"assets/assets/balkand/bk271to280.txt": "9a4ce57bb40c67996cba9876098fa66a",
"assets/assets/balkand/bk281to290.txt": "6ff799308d429f77ca05f3cecd25825a",
"assets/assets/balkand/bk291to300.txt": "6953da32ae79217c395115458ad8845f",
"assets/assets/balkand/bk301to310.txt": "e729a67f6d530ef4c67309c7a3925763",
"assets/assets/balkand/bk311to320.txt": "00bee475fb938364d373ade63174f353",
"assets/assets/balkand/bk31to40.txt": "c16669f24bb8d91ba081df03ecfecfd9",
"assets/assets/balkand/bk321to330.txt": "240ef14c459ff9c2f47f05fe6e60a523",
"assets/assets/balkand/bk331to340.txt": "0a1c5d4ba5696deff685994f9619cd82",
"assets/assets/balkand/bk341to350.txt": "431f1696620e0d820103021b0085bddf",
"assets/assets/balkand/bk351to360.txt": "59fae7d30a7991b5a5fbe3ea656b53ed",
"assets/assets/balkand/bk41to50.txt": "e390e3f149e83a9ff2a97ff00f7e1f6a",
"assets/assets/balkand/bk51to60.txt": "9d0e850ce6eb04e82cb7e035cf8353c2",
"assets/assets/balkand/bk61to70.txt": "10f005385fb9238986f2941195aef0ae",
"assets/assets/balkand/bk71to80.txt": "daaa31f1f1468aaf2df00d50d40628f5",
"assets/assets/balkand/bk81to90.txt": "89a6fe6bfeaf995fea6c2c10db8748e4",
"assets/assets/balkand/bk91to100.txt": "8576c2869d838d085374441fe3e6e892",
"assets/assets/balkand%25201%2520to%252010.txt": "3a581b7546c5b52e9e52ba53cb2d8ffc",
"assets/assets/images/ark.webp": "dd813bd5259db2d4750a04f63f6eaed4",
"assets/assets/images/ayk.webp": "2b0f852ad94db5876f5640a2fcdb0b66",
"assets/assets/images/background_image.jpg": "a2d388b02caa32716495fa3b5c64ce8a",
"assets/assets/images/blk.webp": "99d7bb7b2cdeb5a9df36f512e350c444",
"assets/assets/images/kkk.webp": "634a3d7e4bafd91e75561a0faca781f6",
"assets/assets/images/lnk.webp": "3a84679425320795fb0740bafb1d23e0",
"assets/assets/images/logo.jpg": "f4a6cfd9ba094079e6860b2aabdc7734",
"assets/assets/images/snd.webp": "1fd29f3a0d9bdd6052417d239293daa9",
"assets/assets/images/store.png": "711b93148ed6d9183ea6fe1d78125054",
"assets/assets/images/tls.webp": "428dcb42957a6e9a7715e9be13751318",
"assets/assets/images/ukk.webp": "087bc5e90889fc7916a241446bbc9c67",
"assets/assets/profile.webp": "da77544fb082ea8941f03c7e87f53089",
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
"flutter_bootstrap.js": "4fd4d465fb66c340f8feb296b5c1d374",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "967a3fc85e8bf74cfbba424b5a3e3ff6",
"/": "967a3fc85e8bf74cfbba424b5a3e3ff6",
"main.dart.js": "d249bba6ee3a34ddafb055d711043a83",
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
