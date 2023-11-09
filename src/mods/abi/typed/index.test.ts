import { Base16 } from "@hazae41/base16";
import { Keccak256 } from "@hazae41/keccak256";
import { assert, test } from "@hazae41/phobos";
import { ZeroHexString } from "index.js";
import * as viem from "viem";
import { TypedData } from "./index.js";

Base16.set(await Base16.fromBufferOrAlocer())
Keccak256.set(await Keccak256.fromMorax())

const data = [
  {
    "name": "random-0",
    "domain": {
      "name": "Moo é🚀ooéééMooooM🚀 o🚀🚀o  M  oM🚀éo 🚀🚀🚀🚀éoMoéo🚀o",
      "version": "28.44.13"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0xdce44ca98616ee629199215ae5401c97040664637c48"
    },
    "encoded": "0xcdf7d44b9a42bfc5a90b1624215e30c70425b44f1c62f94244b32551826d2dd995cff8fcf943ffa581b017b61b02703628c843642652c382dd15c9a471fe28d9",
    "digest": "0xf1a2769507736a9aa306204169e6862f4416e055035d7d2cc9ab6f1921604905"
  },
  {
    "name": "random-1",
    "domain": {
      "name": "Moo é🚀éoMo🚀 oé🚀🚀🚀MéooMéooo éo oé  🚀M🚀  🚀 o",
      "version": "22.43.44",
      "chainId": 1268,
      "salt": "0x6ebb306942854acbb10134c9dee015937042c39da2ee124eb926ad77df52dbe0"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes11"
        },
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0x2364d8559a1777b684a9121d132c4b4237e2534bd5a0",
      "param3": "0x90166c1d5cf7f1be5e4535",
      "param4": "0x0f6c35f4b0fa348c603ee0070c8f4f971805c4d9d2ddb8acb82e806e1f4b2c1bc500e41b882213648af39dd4a29d303a31f68476cf803ef8c9024509b2f164",
      "param5": "Moo é🚀MoM🚀éoMMooM🚀ooéM Mééo"
    },
    "encoded": "0xda8977a44f657114a662894ef7761924845f9e7530ec21622e1a6d5526de0d1ec611cbc6650fb22a47f359606312a4412acbc7b648fa712da2d0e65a00e44f8990166c1d5cf7f1be5e453500000000000000000000000000000000000000000082609c13a160a82264f3293420c066ad847fc2c658862f6282c13848e7c2bfa3c422f8f8d57a0d73e4448edcb393d45cd1969652b199e87011a5c54171f7a548",
    "digest": "0xdca475186d6626bdd727f5a216758f6351c56b36ae77683f3b381c5b296d1099"
  },
  {
    "name": "random-2",
    "domain": {
      "verifyingContract": "0xb98ccb3b2f1843cdd391295779890c162f2833ea"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "int32"
        },
        {
          "name": "param3",
          "type": "string[3]"
        },
        {
          "name": "param5",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "-828619503",
      "param3": [
        "Moo é🚀o🚀oo🚀o ooééM M🚀éoééoMMooo🚀éoooéooMéoéMM oé🚀Mé éé",
        "Moo é🚀o🚀M ééé🚀 o oMéoMéM o🚀oMoo🚀é🚀 é é🚀M🚀é Mooééo🚀é",
        "Moo é🚀 🚀oooéé o🚀oéMooM🚀🚀 oo  M🚀M🚀ooMoMoooé🚀M🚀 🚀M🚀🚀🚀éM"
      ],
      "param5": "0xd5cf50b584016c19732d845cc9c8d3a43ce41362"
    },
    "encoded": "0x67fb8e8c0399ea6a53c5be40a9cc57f8682c0e4887d4e92733d7e77e358fb473ffffffffffffffffffffffffffffffffffffffffffffffffffffffffce9c451142865dc16e0353e94811b8b8df478cf0a5714219aa578dd5881f162ef224cb2c000000000000000000000000d5cf50b584016c19732d845cc9c8d3a43ce41362",
    "digest": "0x6c32dc60957ea693087837ae10ba9d9e31febf7a0c2ed00f6b57ac02f4d4b37e"
  },
  {
    "name": "random-3",
    "domain": {
      "name": "Moo é🚀M oMoo🚀éoo🚀ooo ooéééo🚀éMoo🚀o o  oo 🚀oooM ",
      "version": "31.7.9",
      "chainId": 793
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0x2302fce888f2dc9d6ec2b3d3fc06aa212ec06b07f4035f64fcc58f1e178bee",
      "param3": "0xb1d7e299",
      "param4": "Moo é🚀 ooo🚀🚀o🚀ooéé oé"
    },
    "encoded": "0xb294e832799f75dfe653c1529c1464de82ad988a243b4cd2dad2e8231ce02ac8f98e5673d8c98474e896eb51f7710e3096ac480f57c343aa4b6940f14ba864cfc9825dc5acadefe8114be8b3b40ff1735c38ce7a2bd1af26b8f896f448f71b2d92ca886c2f1728e95855af472331fec2b8cbcb28901e0b5e5e7c0fcdfb82df75",
    "digest": "0x29afbb5d796c6d1b9e79071d245061a8d284ffabf3138483d13736a61780ccdd"
  },
  {
    "name": "random-4",
    "domain": {
      "name": "Moo é🚀oo ",
      "chainId": 1190,
      "salt": "0x1f37012abd2887491b2dc97283565221433f671fe1e39aa52501bfb6aa8b93c3"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes10"
        },
        {
          "name": "param3",
          "type": "string[1]"
        },
        {
          "name": "param5",
          "type": "bytes27"
        }
      ]
    },
    "message": {
      "param2": "0x9bb8048b699386b24539",
      "param3": [
        "Moo é🚀 éo🚀oMMéoo ooM🚀ooMo oMoéoéé oo 🚀oMMé🚀🚀ooooMéMoé 🚀oéooooéM"
      ],
      "param5": "0x87522812e1a8337045160896fb3e61f869b4154b737a082b3dfeb7"
    },
    "encoded": "0xd6c2b6107cccf91b779f9954f2110d1b60cbc77e11fba6eaea01e944fd9cf1779bb8048b699386b2453900000000000000000000000000000000000000000000efd410fd47fe79acfda00711d702442f7cf6312190754acb4613b1c2aca0dec187522812e1a8337045160896fb3e61f869b4154b737a082b3dfeb70000000000",
    "digest": "0xf4f1328085f730d46a20fa49f6e7ac254f35447282c91a7530242a3a14474116"
  },
  {
    "name": "random-5",
    "domain": {
      "version": "7.9.9"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "int224"
        }
      ]
    },
    "message": {
      "param2": "0x2f89d3d2d83f46d0147efc081e3a3f1012406c69",
      "param3": "-1117663001459922125771233981131891587208615016687544676675378200714"
    },
    "encoded": "0xded571df13886530cfad8a76abc529603094afe8d4763a3c714a8a86241c16b10000000000000000000000002f89d3d2d83f46d0147efc081e3a3f1012406c69fffffffff5631c9b4cdb160013e3cedb0d8e15ad26177e422ad39cfdf0483f76",
    "digest": "0x1f4896667fd2210e54760bd5f00b964447be3c0a20d9d64f8324821a44dbe9a8"
  },
  {
    "name": "random-6",
    "domain": {
      "name": "Moo é🚀",
      "verifyingContract": "0x501809f11ffb4ec90411dca095641b87f3229df9",
      "salt": "0x613b2e73477c57fc4e28b4c06f436f9825b5aa4d839c3d07a89179ef2774f76e"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x85a6f822054409e83460b9da070ce6c48843e4793c5720ad69102099b4a52978a90e32242a8b7df6fc70ddc8f6056c1df4585c727e4dac",
      "param3": "0xac0ca9396225af9df605b4d3a3273d0c075c5dc2254b1d69fabcffb9cb191cb7253e55c547f8627a79",
      "param4": false,
      "param5": "0x083e80e0d94dbb979ce2c44a2c746ecfa1fca9f1"
    },
    "encoded": "0xe5b40a524086d02c883ca8067a58dc9b784c44542de0bc37d5769a0dbeca31dfdcd5d1450de8a86034460ed9842ded280ce4faa8919759337539cca0876a7da6c95d6f26124f374b1007778a627aabfe799b09620b14cd82e0ce2dc27b5b4aba0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083e80e0d94dbb979ce2c44a2c746ecfa1fca9f1",
    "digest": "0x77f779953f0ad6e059d13f714999b8f2e0916f3c4263db272606efa34c18c4eb"
  },
  {
    "name": "random-7",
    "domain": {
      "version": "29.42.9",
      "verifyingContract": "0xa2f34b603e4ee3de26502a40c8dc33886c1bb7e0"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes[2]"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0xb7788f98b3107c588bee30ccc844e129a7772df540c3193239df",
      "param3": [
        "0xe85938a8c29ab7b82264cc2e0822673fe17637364d6b384eb49f89e1adf61a11",
        "0x10ec7831da9a49dbf10818"
      ],
      "param5": "Moo é🚀ooooM🚀 oMééM éé🚀🚀oMé 🚀 é  éé"
    },
    "encoded": "0xcf3bbe1dcf56fb9655824a3f90f1953ea791787867fb34004275382e4f47a2bb1c88290b2a99cb28a10db644f89833ecc797c9d2d9c142a5b633939e1c8819bc58bf6d520785f87bcfe82d2eab0d7ba35d93478d835dd7de28c44e0dccc8619c45dd7a5ec721fb2064788313d7807140e33459ce08dbf30bceb4d093096db6f3",
    "digest": "0x446d1bab14cbf7b0bc6dad1cf30aeb89585df7150e0a19d809ea23c7bc4d0908"
  },
  {
    "name": "random-8",
    "domain": {
      "name": "Moo é🚀oo Moé🚀oMM🚀🚀o  oéoéooé é"
    },
    "primaryType": "Struct12",
    "types": {
      "Struct10": [
        {
          "name": "param4",
          "type": "int40[3]"
        },
        {
          "name": "param6",
          "type": "string"
        },
        {
          "name": "param7",
          "type": "int152[1]"
        },
        {
          "name": "param9",
          "type": "bytes10"
        }
      ],
      "Struct12": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "Struct10"
        },
        {
          "name": "param11",
          "type": "bytes7"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀ooM🚀 MooMoo oM🚀M🚀🚀oMoo🚀éoéMoooM ",
      "param3": {
        "param4": [
          "-502183273437",
          "-181945777056",
          "-454055253301"
        ],
        "param6": "Moo é🚀 🚀ooMo🚀Mo Mé MééM🚀éo🚀é 🚀é éé oééé🚀🚀ooéM🚀🚀o",
        "param7": [
          "2830948558399330007235690811772897616211515216"
        ],
        "param9": "0x31ee08b2239ded1369a2"
      },
      "param11": "0x35c68a72cc994a"
    },
    "encoded": "0xb791414599e8b56f4b0391cb8b4d422bcf755603c5ddd6e103893a71ceba46241f5744b35eb3f3ef0a6e8cab59bf3b8b6a6691dd30ebf8939d36dd52b98acaea10c8cdc69e509a68998f2d5e30e095c9849a68b644b21c3dfcfd30ffc502114735c68a72cc994a00000000000000000000000000000000000000000000000000",
    "digest": "0x8694ca7a01c36837d2449232907509801ed64e23dc023fcf736315f5eec1053c"
  },
  {
    "name": "random-9",
    "domain": {
      "chainId": 437
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "bytes8"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀🚀M🚀🚀oé Mo ééMo",
      "param3": "0xc4737eceba804e84"
    },
    "encoded": "0x979ff42839e8663fdf777083b1648c659b691503a28c6a2910d1d7cd162a3aa17bcd164aa59dabcd7c3be7e32492e7fe4a48e70aee5b964137249e361ebc9a41c4737eceba804e84000000000000000000000000000000000000000000000000",
    "digest": "0x32e8f650680b00d4b5515e9de9684995c3245b4761046780b33ef9f6ee05362c"
  },
  {
    "name": "random-10",
    "domain": {
      "name": "Moo é🚀 o éé  Mé🚀éoo 🚀oéM MM🚀é 🚀éMM🚀éMo  M oé🚀MMoo é o é 🚀o🚀ooo",
      "version": "45.0.46"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct8": [
        {
          "name": "param2",
          "type": "bytes2"
        },
        {
          "name": "param3",
          "type": "address[3]"
        },
        {
          "name": "param5",
          "type": "int8[3][1]"
        }
      ]
    },
    "message": {
      "param2": "0xdc77",
      "param3": [
        "0x6fe07a398b47ee3d064460f74fb00b8454577d8f",
        "0x4489956d5c84285dd2337de059733fd7caff5e3b",
        "0xc562d2e19f4c8416f7adcdecacb47c7f3b429a18"
      ],
      "param5": [
        [
          "-10",
          "-97",
          "-22"
        ]
      ]
    },
    "encoded": "0x9ca5f56281a4926287c930891cd4218d7e9d7e5bd6f8f35ca52190b2a54c5989dc7700000000000000000000000000000000000000000000000000000000000050b4d189d5c6d2e1fe9f152de6692da9fc34d41324dab5ced8a52397fa5ebfff5bb6e21b54c9b4e7f21b6cfe5999121f5dec6f1101cd5e0fb73a634001e5f2ea",
    "digest": "0x59c2336278c748fca8889f8b98d6c386f1badb72f28668a5c760c3aff20a922a"
  },
  {
    "name": "random-11",
    "domain": {
      "salt": "0x60a7ef7f891f64c8c659e7b3f448e0e82939483d467088aae991d873c2371932"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "int88"
        }
      ]
    },
    "message": {
      "param2": "-109147385638873134356016336"
    },
    "encoded": "0x22f16ecbd883f7cd7823cc5ec368999cf3bf08546bbd7c708ca231a54353cb86ffffffffffffffffffffffffffffffffffffffffffa5b7245e537649c9e75330",
    "digest": "0x1c1c3e593358ec697d2f26c497abc72af68d617441a9825b6cb7c79e92bb2a01"
  },
  {
    "name": "random-12",
    "domain": {
      "name": "Moo é🚀oéé🚀🚀🚀o🚀é    MoéoMooooo🚀 MMo Moo 🚀  ééo",
      "version": "13.24.35",
      "salt": "0x9f4a7cb7e30809076edbb99bcbc310ec27d7a563cbc24cddd0a2ae6d275677ef"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0xff4d2657142a58d3cc787e089ca7f20a6b66776e"
    },
    "encoded": "0x98edda54668461e736d24a4033f2d11540bceac48ea14c7da0fea73b8b9a55db000000000000000000000000ff4d2657142a58d3cc787e089ca7f20a6b66776e",
    "digest": "0xf73e0203cb874ce615b0ceb1c8c8358eb44719bbab11ebe963e00a914434ce62"
  },
  {
    "name": "random-13",
    "domain": {
      "name": "Moo é🚀",
      "chainId": 348,
      "salt": "0xc70f3b18e636eee4a800a307d1b38bf2cf6fbb923a5c3ae3b14becbfc2ce1f9b"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀🚀oé MoMMéo",
      "param3": "0xc3e57dbac4c0a82334953baa752df10cffd5a75a2edcbe00c7f2"
    },
    "encoded": "0x4d0024736263d208aca6e84c7bb7336060a12a4693f70ea14290ed4308d052e5eb273f8d13bbd23d14b25bd00e006757fa7de6d637f4c49e5fdcf4a07f024aea1f53f499e56140df7f6326e0c99cd10d9a7ceac70c4f9343111769b6ac62e1ed",
    "digest": "0x407d6005ebd258cd798e326e17786b0b61a927309b8584db513bdb62f4f5ee3f"
  },
  {
    "name": "random-14",
    "domain": {
      "version": "25.49.7",
      "verifyingContract": "0xb0e0d9999c8c74a0d4ed79414a9f8bf363e9caaa"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bytes[]"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": [
        "0x96ae69774e732b9214a3ebb03c0fd01602bc7a5fcd21",
        "0x60a6103ace6cc41a8df5b6518b24e6ecd490c13acfc67765f3540a4a7aa93d074a77313622786513f0199d0dad5e012c"
      ]
    },
    "encoded": "0x8a9a6129ffa166123d1ac6c76c2bfc752f7cf2e64b76b36df081cfc7c032a75b0000000000000000000000000000000000000000000000000000000000000001e8da1f36005f78d7a373d2f0da3b4215c9b2ab40e5a8d62e8ab338374600329f",
    "digest": "0x0b1d8e9823e30d163cbd911aea02c15a62bd0bbc0168183ccd2965a8b601a40b"
  },
  {
    "name": "random-15",
    "domain": {
      "verifyingContract": "0x6f5c960aebe912340a5a72935aa334afa8fbfe58"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes31"
        },
        {
          "name": "param4",
          "type": "bytes31"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0x4a18799bc6b7f0fab7d57bc456346bca7261a53cb04fb48d82dba056",
      "param3": "0x8d48a6cc9e0c92080dec2155382a276181f25c746da97f8199f3a846421180",
      "param4": "0xb165a49183e897da692ca460c5c88a0597e5e4ad7b43471bac25bfd9a780e0",
      "param5": "Moo é🚀M🚀éééé oooMé🚀ooM🚀 o🚀oMMooMé🚀é 🚀oMoé🚀"
    },
    "encoded": "0x195b09fb47455d098743f9c930f4078d642ea0a6f994b66198c7213629164dc250d60588d6db4ae7e3b0d4d8f93aed4781b86403d576fb4e374af761f1238cc38d48a6cc9e0c92080dec2155382a276181f25c746da97f8199f3a84642118000b165a49183e897da692ca460c5c88a0597e5e4ad7b43471bac25bfd9a780e000a315cbc15f8ad1d34c761a0523412f8bd958f3b121ab055ad39eed2d1c894c3c",
    "digest": "0x859f85bc1d34695b4db0f3650dc448e4f26e1310bbf4386a47154dd0ff2f7134"
  },
  {
    "name": "random-16",
    "domain": {
      "version": "46.37.5",
      "chainId": 398,
      "verifyingContract": "0x7d5c6babf358d15f834e4e66fb38f47029692f45",
      "salt": "0xf631d7b0a81f0bb5d43c5c6cbe06f0c46868590f0951afc1b55f38598f5caf4d"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "uint200"
        },
        {
          "name": "param3",
          "type": "uint192"
        }
      ]
    },
    "message": {
      "param2": "902991113240896234120897942256968907309321984644966427837857",
      "param3": "1793643122398654278545911502385423630752811461294794060392"
    },
    "encoded": "0xc905891cccd69edb3dcead4f2229a9b1c0f7ad0264bd9e32ca83cf8d4835ca94000000000000008fdad31cff441c443d69458e4033c11eeb0b4928ce9452c5a100000000000000004926820a408021ed575bd94e89af5672c9c4faaa93adb268",
    "digest": "0xa8ca54bd8b0380e9680fee86021be77dd65fe79954ca8aace6708fda1e62d959"
  },
  {
    "name": "random-17",
    "domain": {
      "version": "13.22.4",
      "salt": "0x9a939ab1fd21216c5fcfed335f5d6ad5e83f7815e6bf7d521dd0341e9445415a"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0xde2c0dae771d5cb66092b8905ba5691226740d7398459c60712a5793f0c9434c",
      "param3": "Moo é🚀 oooéMo é🚀o🚀MM 🚀o MMMoMoooooooo o🚀éoM"
    },
    "encoded": "0x686167f4c27dbc607c8b7b3febaeb35fa7dbcccbfac18ae20803b8e2bfc040fb053664f618ae8de97996df7189f0b8b97619489a71e0b0e370e6ef9b581df98208744de9ee650d2089505fa1d121e39ff8bd12472e14e192ad7a450cce4feb3b",
    "digest": "0x0b5413c0bce8ba1599a5415a0a8729659df2c4dbfc6f71655c228101a523126b"
  },
  {
    "name": "random-18",
    "domain": {
      "chainId": 1154
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes12"
        },
        {
          "name": "param3",
          "type": "bytes22"
        },
        {
          "name": "param4",
          "type": "string"
        },
        {
          "name": "param5",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x5f7bd6650aedd689f688617f",
      "param3": "0x9d8ca86236fa8ca5e654b767c43bc31e4e2be542b128",
      "param4": "Moo é🚀MoMoo🚀 🚀MoooM ooMM  oMoo🚀 é oooM🚀Mo é 🚀 éo",
      "param5": "0xae09d2fea99189d5171ddcd7c90e4ba4902e9df3"
    },
    "encoded": "0x7a78c404a07e9f6956aaff71efb4b16130954663e72d5ee2de28e982b75d86675f7bd6650aedd689f688617f00000000000000000000000000000000000000009d8ca86236fa8ca5e654b767c43bc31e4e2be542b128000000000000000000000fb03f67aff6a2b40a0dbb1b99236c9ca92063bb9c1a604b32893a7f03e9364f000000000000000000000000ae09d2fea99189d5171ddcd7c90e4ba4902e9df3",
    "digest": "0x680060a5f5fc62a31a89bfa6ee31116827439b3a46de888d9d43b1251fb8a3f2"
  },
  {
    "name": "random-19",
    "domain": {
      "chainId": 1013,
      "verifyingContract": "0x9b76aa9473e60427cbc99f4161665fc37a013015",
      "salt": "0xb99a959f6fcb296e9be34584a14761c7b4ce82e99d4394a5f109ed1c55cde477"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x010d8955e5cecc6705b73064baa37a703d65cb97"
    },
    "encoded": "0x98edda54668461e736d24a4033f2d11540bceac48ea14c7da0fea73b8b9a55db000000000000000000000000010d8955e5cecc6705b73064baa37a703d65cb97",
    "digest": "0x8ca2e0e8b9d5ce1c66d5ea245d6a9c653e10adc303e7440d4298c331b011c503"
  },
  {
    "name": "random-20",
    "domain": {
      "chainId": 888
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x981ad5555974b8b6b4f767d774c32f9e09e0009d5d914e29614ec739e70c36aaaa454aab9a9409b890c32e9304c42ec8b05a7f7ac0f60be35f1e",
      "param3": true
    },
    "encoded": "0x889d1fd6a543c2550a4d6fbf451f7004ee9509e508b7627d82b578e77ed3541a1d8c4d6a1c1c4c8ed69df55267e53b5289aca47b178f775978694815b4f990640000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0xc1319be39e82c2e51795b588e89ae2ffa116d8e6e5e0aaff6c9a42379e18e35d"
  },
  {
    "name": "random-21",
    "domain": {
      "name": "Moo é🚀éM",
      "chainId": 1189,
      "verifyingContract": "0x20595d9bc36f43302fc02a5b8b1afcd8751ec829",
      "salt": "0x616e7f89169e2cc84d244f9e3fe0e03661dfd04909f43f379752069848cccf7e"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct7": [
        {
          "name": "param5",
          "type": "bytes"
        },
        {
          "name": "param6",
          "type": "bool"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "bytes[2]"
        },
        {
          "name": "param4",
          "type": "Struct7"
        }
      ]
    },
    "message": {
      "param2": [
        "0xb7bdd490b49bd7ab",
        "0x864b5bb60e5d3fe67c853222aa05ff96aa441cf26a394fc4"
      ],
      "param4": {
        "param5": "0x109f4bc90e17530b89b8fbbd2c39477a4a8bf23a1109d71902516214aa",
        "param6": false
      }
    },
    "encoded": "0xc870a8ea20ea5a0e48665e1cceac4d0911ebdd5211d9bbe9ea6b02742610630c2274465ff0a09b20e8e027da59fb88f7c11871f7ecd6354e3ed5099296cfd04be1885a775bd5e9fe96ba4a0d693d8c0ff869e2956d2445c820173815e807f2e9",
    "digest": "0xfe17ec225aeca7f68177514dcf12e22fb0b39840aa6a6c22c26f59dd033ec5c7"
  },
  {
    "name": "random-22",
    "domain": {
      "name": "Moo é🚀M M🚀ééoMoMo o é oMéé🚀",
      "chainId": 941,
      "salt": "0x504bcce324addceda39d36f209fbfcb3b14f834e21f104979f550ea5c6f9917b"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x7d44e5363b38914b63ccfe012685ce3d2e65121a",
      "param3": "0x0e"
    },
    "encoded": "0x424c0018d1cc135145554306c5c9e3e9e8a4cca8848cfa101804ff94674c8d6c0000000000000000000000007d44e5363b38914b63ccfe012685ce3d2e65121a7d74985e988688526ac76b8ff8f86df2934c34abd4c430c49bf3b8a821b4e87e",
    "digest": "0xb701808badfe14419c62c8108a8123a1531555b8d6c40bd0aea773e4cc7faff5"
  },
  {
    "name": "random-23",
    "domain": {
      "name": "Moo é🚀éé oé🚀🚀éoo 🚀o🚀🚀 M🚀éo🚀é🚀   o",
      "verifyingContract": "0x4b290dacba7bd6da6bb491d627c27c59abcd55c8"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "bytes27"
        },
        {
          "name": "param4",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀  éo ooo🚀🚀oMéooo🚀ooo🚀ooo🚀 M🚀 ooMoéooo Méé🚀oéoo",
      "param3": "0xb72fa668214dee979e4ab0b212697763c7a644140a47417af60c4b",
      "param4": "0x0526eab9"
    },
    "encoded": "0x381b9d935686d6436962f0aa124ec705db0c223f0aa58c87e2e87a502e83b175cdd03bb0b8d5f0ab36918e793771d1a727264b826e6d52705aa7d8ac060af095b72fa668214dee979e4ab0b212697763c7a644140a47417af60c4b00000000005315d4abcf9b7169289f8f9fb986abe1e1648425138878b59807cf047bdcf743",
    "digest": "0x9d78aed8da7518e44916c6da939b27f32296254456d1d12317f9d8d49414f704"
  },
  {
    "name": "random-24",
    "domain": {
      "version": "33.33.10",
      "salt": "0xa465767278b9436adbcda02c178d53ced5ad9a5063042056fafac91f3eb256aa"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bytes29"
        },
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0xa41a2812f302436d74f6322e3d24f7d0894d445b",
      "param3": "0xfbd8fa19905015b516f07997d9ee9ef2a3e70acb6a5cef4d58d25ae9a6",
      "param4": "0xf8f1b9b200727a131c0868f5b0d5224e91acdd49",
      "param5": "Moo é🚀"
    },
    "encoded": "0x3406cf367962412603498937e52eb1fae44b403ffce6931f487e0191dc1da76e000000000000000000000000a41a2812f302436d74f6322e3d24f7d0894d445bfbd8fa19905015b516f07997d9ee9ef2a3e70acb6a5cef4d58d25ae9a6000000000000000000000000000000f8f1b9b200727a131c0868f5b0d5224e91acdd4973afb58374689378893745fc96a2fc65d1568ee4015275cae05c7ad1ba4ee814",
    "digest": "0x776fdda1fd58d3c90228f4bfe52e9243a6a0c1b8804f91ecf7570b51038090f4"
  },
  {
    "name": "random-25",
    "domain": {
      "chainId": 725,
      "salt": "0xc2de9b40a3c72c4b8080784d0abe7e2a81ee8c6d00ade54cbfa186d05b80a30f"
    },
    "primaryType": "Struct10",
    "types": {
      "Struct9": [
        {
          "name": "param6",
          "type": "uint80"
        },
        {
          "name": "param7",
          "type": "bool"
        },
        {
          "name": "param8",
          "type": "bytes17"
        }
      ],
      "Struct10": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "address"
        },
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "Struct9"
        }
      ]
    },
    "message": {
      "param2": "0x0e1c5e8d98e793c508605de14b557517086a154a",
      "param3": "0x4643f9f0fff83c5992655ea60b4ee4d87962402c",
      "param4": "0xe24ad838b2dff3ce1ceb5cf89d5382a3b7ae58e3b83ed04b361dd24e858604e086cf3aae72e10af9157ca91a07aacb76ff5f4e714bf0af4e2767a5c1b7",
      "param5": {
        "param6": "1037360565969580415751062",
        "param7": true,
        "param8": "0xb400c0f629151c1c2efc8678b90a90db50"
      }
    },
    "encoded": "0xda5e84ad82b98296cf11f22beffa9ac554199abd2907793cf612a0cde3a3a6e00000000000000000000000000e1c5e8d98e793c508605de14b557517086a154a0000000000000000000000004643f9f0fff83c5992655ea60b4ee4d87962402cb5c868e1fa67a6af58ad2de258728150a4257a8fc3a0e8b1cd0c693a9154e78a19b8a5510cc83eb41b72cdb218809b5fb097d4f56a210465d7e4434ae4f93ae2",
    "digest": "0x20c6d3b7d3a08127d2675417f10192a19404eb7f2b4a7cc826291c200d059c51"
  },
  {
    "name": "random-26",
    "domain": {
      "salt": "0x84ecb12e99120d7e16d5ea8b41f3a1712b04779027244978e3c14e6b779bff43"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes15"
        }
      ]
    },
    "message": {
      "param2": "0xd9d920215e9cef3f5d2c992b29d02c"
    },
    "encoded": "0x3124ca50b2729655ab7183f9cdc9ce21f39c5f9af1539ebbebddafd8d5124eebd9d920215e9cef3f5d2c992b29d02c0000000000000000000000000000000000",
    "digest": "0x98647f029b556997bd7cf686927a1075276cdeb949c7324cb258265daa43e9d0"
  },
  {
    "name": "random-27",
    "domain": {
      "name": "Moo é🚀Mo🚀o M ééoééoMéMoMooooéoéoo o🚀oM🚀 oMo o🚀  Mo  oé",
      "verifyingContract": "0xa25337ce36273880f4e9e61f7d6e42cdf375343e"
    },
    "primaryType": "Struct9",
    "types": {
      "Struct5": [
        {
          "name": "param3",
          "type": "int88"
        },
        {
          "name": "param4",
          "type": "address"
        }
      ],
      "Struct9": [
        {
          "name": "param2",
          "type": "Struct5"
        },
        {
          "name": "param6",
          "type": "string"
        },
        {
          "name": "param7",
          "type": "uint144"
        },
        {
          "name": "param8",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "-127309812032058079971015355",
        "param4": "0xfea50d6aa0beb7541421a003b305176bfafd3bf7"
      },
      "param6": "Moo é🚀 🚀🚀M🚀Mo",
      "param7": "21679346468763708829870107432985082613037936",
      "param8": "Moo é🚀🚀M é🚀🚀oMo oo🚀éoooéMo"
    },
    "encoded": "0x5ed3e5cf198704fbd48783461bff2bf9894ce18fa02dfd09804f85f9897fe3b6457fa76bc117d82ca5c78822611af029603b99095c728469d2b6e0db0d38430dab622c3246af0064a7ca87eee9696c6f580b5b628a1c3ccc7ca8ccb5d099b5b30000000000000000000000000000f8dddf8de4ce294ba243327c1bb5c1bd7b7017c8ef26c2ec6558fcdaa26969c050886d3cd13aa63fd7c1b4c951a029775a19",
    "digest": "0xc01ab63f5b6821f38672244e3f54b38b1f997cfa987996d97c2d0b45e4378116"
  },
  {
    "name": "random-28",
    "domain": {
      "name": "Moo é🚀Moéo oéMMéMé o ooo 🚀o o  éMo🚀M 🚀oo🚀🚀oM🚀éM🚀🚀ooM ooooé",
      "version": "6.36.29",
      "verifyingContract": "0xbda80f1b5ee3f31847bfab9e1f2d577a736ae9ae"
    },
    "primaryType": "Struct16",
    "types": {
      "Struct7": [
        {
          "name": "param3",
          "type": "bytes[1]"
        },
        {
          "name": "param5",
          "type": "bool"
        },
        {
          "name": "param6",
          "type": "bytes21"
        }
      ],
      "Struct15": [
        {
          "name": "param11",
          "type": "bytes26"
        },
        {
          "name": "param12",
          "type": "address"
        },
        {
          "name": "param13",
          "type": "uint240"
        },
        {
          "name": "param14",
          "type": "string"
        }
      ],
      "Struct16": [
        {
          "name": "param2",
          "type": "Struct7"
        },
        {
          "name": "param8",
          "type": "string"
        },
        {
          "name": "param9",
          "type": "int240"
        },
        {
          "name": "param10",
          "type": "Struct15"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": [
          "0xdd89a7e45431dc5bcf2575124ce071addb7e049856e3ec3a698aa73965f2cdebe3d8c1561c943beb06906bc333a5"
        ],
        "param5": false,
        "param6": "0x40cdeaa8cfa786861d28835935341469073906c16c"
      },
      "param8": "Moo é🚀o🚀o🚀 oé🚀oMoéo🚀 o",
      "param9": "-728201913157045709305151288883895292116444273394221376510603682943551543",
      "param10": {
        "param11": "0x3c8aa45d6e60df8fa4b94a9f1a9873982cf117b7870019a77257",
        "param12": "0x18dbfcc4b58ac047af1fa1ea5014e9a3c122d695",
        "param13": "1403160610370024385322518859671151374504293477415157376516004093379141099",
        "param14": "Moo é🚀MéM 🚀éoéé🚀  M  🚀🚀 🚀éooMéoMoM é"
      }
    },
    "encoded": "0xdb90bb6421637471a75a3d7bc8dc38f85ab6d86fe66817a5c5e52e1582dc9d8d05eae0968871a1fb36bb967307259c285125d151dee777d1b9bba85ec0c5924ab953967c8b9dd2e0f5cd1fe230ad4ddf4fa6f38f5286db1d29957c90a18c2d8bffff967d7d66a999668fc7fbff14f873fe30522876aee45bc8ad4fbc9c24b7c936513d68064480110d163aeea34e925427d939bc37d8892caa329a9d3558c51e",
    "digest": "0x4f9a08cb3212e843a37e628e8a3899c9632ba8fe184f4955aabfd568690c8cbc"
  },
  {
    "name": "random-29",
    "domain": {
      "chainId": 356,
      "verifyingContract": "0xa2cb255c54cb952b1d29aa906d0db8a0369b07ac",
      "salt": "0xa747cdaee63c094c448b58b76e9b7555459bf28fe41e33d8e485334b3955dee3"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀ééé🚀o M🚀🚀  🚀🚀🚀oM🚀oé🚀🚀oéoM  éM🚀éMé o🚀 "
    },
    "encoded": "0x5927d86a0ef9a01a131f7a41d2a9c89a8c82e0f454d6b4502f955f90f152eb512a656f0bd407a79f684b714713b1e71478383b1f47d7c72f652658ece534dd0b",
    "digest": "0x8f21c436df4d7b8ea1470f3f4cac3d756774982b25a60bd7e76587c6b519df6a"
  },
  {
    "name": "random-30",
    "domain": {
      "version": "1.46.13",
      "salt": "0x13ae4c3150715b5ad9a1e19f9e5d7acb57041c056751bf3517085406225bc939"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "int136[1]"
        }
      ]
    },
    "message": {
      "param2": [
        "8166199623935941567874687986584718264154"
      ]
    },
    "encoded": "0x4d74029cfac37baeca9753d910ae221b711f6f012a1bea4dab197ee55395b8c7639803471fd3db6691ea1e09d239e931d1e355db6dd3a8e271e91cd893cfb588",
    "digest": "0xb6546c223ab20fefa301d938ffbc21f17128f0620fd926a149725887b3cccf4a"
  },
  {
    "name": "random-31",
    "domain": {
      "name": "Moo é🚀 o 🚀 🚀M M oooMM ",
      "chainId": 908
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "string"
        },
        {
          "name": "param5",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x4ede0deacb3773e5137435f4d889ed859498566a",
      "param3": "0x62dd238d0e2d216ab536acf19569d82284ec73724af965e1e635a5e02de69f89315c86d4b43dd3fea6b5",
      "param4": "Moo é🚀éoo🚀MooM🚀Moo oéM🚀🚀ooé🚀 oé oéoM🚀MéoMé🚀Mo🚀oooo🚀🚀ooo🚀 ",
      "param5": "0x4e35a3945fb38294c8acf415464978b576dddadd"
    },
    "encoded": "0x7f6d973155b0bcc8d11dd8547d4396f95e47a6b1663de76876af0dd85aa48b3f0000000000000000000000004ede0deacb3773e5137435f4d889ed859498566a84c9e1c43faf98cea6c5fcbc1fd1dd44de98d2a6fd8094cd3379479cf19d02d3f60e96d7ac3d6507f6e8030df384f326924853ce6a85f91dfae3efb3d566f6170000000000000000000000004e35a3945fb38294c8acf415464978b576dddadd",
    "digest": "0xb6efd1b092fc83b8ad6f1562b7b87e3d06f28ff1ad2287008b557a4b325e4c94"
  },
  {
    "name": "random-32",
    "domain": {
      "version": "28.18.35",
      "verifyingContract": "0x860a0e50434a1e67fea76e2ecaadd0f7a34606a5",
      "salt": "0xa79039bbd2738722f49a7a10b34a89be4701d18545207a60ed7b1a0d647d3ede"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "address"
        },
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "bytes19"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀M  oo 🚀Mé 🚀🚀 ooo🚀oMéoéo  🚀🚀oooo   🚀ooé🚀ooo",
      "param3": "0x47fe050a8243b24324599b07443a44409ae0ae5f",
      "param4": "0x4e9cfb53ea5657c6f71a9f6d180ef603b1491593",
      "param5": "0x9bb5cc4641fd491758c28f1334074c4fd8c30d"
    },
    "encoded": "0x1cf4f0e08a7941dbcc88554ec00340e272c27c135e2814a9aa84b7a0cb59090ac3fc89c9396771c6833539097c737e43749df63d9374e94038e87806138dbf3e00000000000000000000000047fe050a8243b24324599b07443a44409ae0ae5f0000000000000000000000004e9cfb53ea5657c6f71a9f6d180ef603b14915939bb5cc4641fd491758c28f1334074c4fd8c30d00000000000000000000000000",
    "digest": "0x44170d64ef7cf254e72fa3a1fce021939881e52ddc6b53804b7ed17c3cc2cf4b"
  },
  {
    "name": "random-33",
    "domain": {},
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": false
    },
    "encoded": "0xd827c65b54cb667b8cb0c84a4aa21ffe3d188aa9cdaede527a285c318ad7274e0000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x1d066e0e8e8e4eaedde581dc40a550c2d6774f57126a6eb0dee143bfb6b3f949"
  },
  {
    "name": "random-34",
    "domain": {
      "name": "Moo é🚀 é 🚀oé🚀o🚀é éoMMo🚀oooéo é MMoo   🚀 é  🚀MM🚀o🚀oo Moo",
      "version": "13.20.41",
      "chainId": 168,
      "verifyingContract": "0x4cb0f9a774003fde250f9498bf59af14a58a4ba6",
      "salt": "0xd10a489e053686f001e06c5f95be04abf66384251beee98aac3352a576309497"
    },
    "primaryType": "Struct11",
    "types": {
      "Struct7": [
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "bytes30"
        },
        {
          "name": "param5",
          "type": "address"
        },
        {
          "name": "param6",
          "type": "bytes"
        }
      ],
      "Struct11": [
        {
          "name": "param2",
          "type": "Struct7"
        },
        {
          "name": "param8",
          "type": "string"
        },
        {
          "name": "param9",
          "type": "address"
        },
        {
          "name": "param10",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": false,
        "param4": "0x5f13d3b44f1f7b3e9509e0e6a6e86a82bad560c0463ff6f4107ed0f91ce9",
        "param5": "0x854a1ce60d811708da436e758e7bb7cb3c4d3645",
        "param6": "0x631b36ea5aac0b4b7a59d000cde1336adc46b54c9e2c27211a"
      },
      "param8": "Moo é🚀éoéMo oéo🚀",
      "param9": "0xd4116d1167d22db322c0f7ea24958097646ee98c",
      "param10": "0x172fb5da45fc748aab90701f16e488faf3aeb7e2631bdb4e89178e291c54276fc0a09fde49c1d8d83ae459b0de8af4a32e752f7cde484933c819bb984fdd"
    },
    "encoded": "0x8d56be8d93acc8d9b7c480a48b942024d438e759597af81d8ce0c269bbfd7ba148f76de9e7e52c7befac76d291947c16f2d706470cb5a7fa41f654e7a6515feab9ae4544a83872d12bd236f00a1e723895219ed2e761b1451b728f7da4c07fea000000000000000000000000d4116d1167d22db322c0f7ea24958097646ee98c57aea085c98b9350d480022e6d063faa8011110987c0cd42488d34ffaad7596f",
    "digest": "0xd916f454522d064210bb959fdb97edfc71ed9d6493f69ef3aa59ac602a4cb557"
  },
  {
    "name": "random-35",
    "domain": {
      "version": "18.1.21",
      "salt": "0xa30efc1f7cb3062cc649929f0661f023168871c712710e3e2bcfb86cea245bfa"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "address[]"
        }
      ]
    },
    "message": {
      "param2": "0x6d5b8e2c382bcf3f732b63a56fd3a40216ce312c135083ffd5e345323397d458a568e0b5677f5b037db50782",
      "param3": false,
      "param4": []
    },
    "encoded": "0x3196893d5e65faa04abf32b95ea06dd0d6c08930740797c9505a8db7c0dd8d783c9347e5b56b01554824ad8ab3894c26f214fefd98de34e7c5ca8fe394ab16040000000000000000000000000000000000000000000000000000000000000000c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "digest": "0x55d568f5b6d8fcb20a1daf9434f22bef6f84008a548c2011c428c3fefa5f5ecf"
  },
  {
    "name": "random-36",
    "domain": {
      "name": "Moo é🚀o🚀MMoM ooé🚀MMM 🚀éooo🚀o🚀oo🚀 oM ",
      "chainId": 640,
      "verifyingContract": "0xd83848a872fece3b3d46e7db4c2b77d3f860e293"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct4": [
        {
          "name": "param3",
          "type": "uint208"
        }
      ],
      "Struct6": [
        {
          "name": "param2",
          "type": "Struct4"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "328075064361718410561598645543330760805893258006339352712528380"
      },
      "param5": false
    },
    "encoded": "0xd9c78b76c5945cdad51cc594f4f98013082d5b29c5acd60ecaae6e197d0282175d5d216ebd03b033f8465a6ad96f1018494e4217e6f613aafe8b727c911047170000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x199e8bfe6ee9ef6a4a030554635b74168da0c20cf8c5a19ec689aa5df1161795"
  },
  {
    "name": "random-37",
    "domain": {
      "name": "Moo é🚀🚀  o🚀oéooMMo éMM é",
      "version": "28.27.34",
      "verifyingContract": "0x7eabc8de425d63e9221ab1d30fa6dd0cefc081a3",
      "salt": "0xe0523cb396cb9dc27ff363d713948ac735f273623989b6af7612f2fcd2ff6d2b"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "int200"
        },
        {
          "name": "param3",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "-444299975383749025331326339923423112873391432830281341721190",
      "param3": "0xed41029f84e192af5415531ee38e17f30d120a88"
    },
    "encoded": "0xfa093f4ea3bf0aa4213f3f060eac93ca7ab21ae17ace77be8dc0692eb11b3bf8ffffffffffffffb9380bd11977ced6065cd29a646828eb18b6e6f2b19f3c259a000000000000000000000000ed41029f84e192af5415531ee38e17f30d120a88",
    "digest": "0x863b7af213ea9f4d6e5bddd79a651e5868a89780ea3fe954aa60bc4265ed20d7"
  },
  {
    "name": "random-38",
    "domain": {
      "name": "Moo é🚀o🚀é🚀 oo Mé o",
      "chainId": 1268,
      "verifyingContract": "0x929fa2120c0710256df5b8617b56ab4e970ecb45"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x6271d301aedc2d2eace8d5c39530cb69fa33c087",
      "param3": "0xee756a5c2cd1aa40fb2b0ae05eea3e40b7436592",
      "param4": "0x7909af95849ea0e6482d4979aa97b6de40184c5a"
    },
    "encoded": "0xd76e74eec5c6ba52563c5d6c259dd7ab7b3c1c568662d8e52ee9e9eb1fb3b08f0000000000000000000000006271d301aedc2d2eace8d5c39530cb69fa33c087d37b7d384539b90a02ac9a5fcdffb5ea5e19dcd612cac7a8d08e701244f586f10000000000000000000000007909af95849ea0e6482d4979aa97b6de40184c5a",
    "digest": "0x7fa9e8243fd155df5677ac9c26861ade73b0a6ab52e98999956cbef093e96249"
  },
  {
    "name": "random-39",
    "domain": {
      "verifyingContract": "0xe3ac435708684db0ae31e22bbefb1e44317338c4",
      "salt": "0xe26aafa719c7da18b0ded1aa1520a9366af0fb6b459916877728cb9a5c87a7d6"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "bytes26"
        },
        {
          "name": "param4",
          "type": "bytes32"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀oé 🚀M🚀éMééoo é🚀o éo o🚀 o ééM🚀é🚀ooooMoé oo  éo🚀🚀oooo🚀o 🚀oM",
      "param3": "0xdc0aa250b183fce60762c98a54246dd7b9bb956bd6341da3e3b8",
      "param4": "0xb72dc336b24a1bbf207488efe80ffcb2fcac731fd7663809b3d2fc49ba7dfc41"
    },
    "encoded": "0x7dfa18ea85b7f90d6621faeda9cf913de2386da0479309954a0255dc716d1597813bc527d887adf055ba505a819f5c99c5959f37552f3546a3621eecdbab9fa9dc0aa250b183fce60762c98a54246dd7b9bb956bd6341da3e3b8000000000000b72dc336b24a1bbf207488efe80ffcb2fcac731fd7663809b3d2fc49ba7dfc41",
    "digest": "0x657847e82a36f749a49a0249eb01d42a8f84e155799a89a361326c7e059f4857"
  },
  {
    "name": "random-40",
    "domain": {
      "version": "27.48.40",
      "verifyingContract": "0xb01dee94f0bffe39c63b53c94d0a9fcbc1384c7d",
      "salt": "0x2d69edf19eed3feff59d5ff3d202299b0a2f7cfd471953c708c84ff2c8ef15e3"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": false,
      "param3": "0xaf4961b17878b5ba9013de1d9fd0f3642f1e7294"
    },
    "encoded": "0x08b05ab3afcc030e7935ce6c66d5d4b79136f50d1f567b347bde3906d91197e800000000000000000000000000000000000000000000000000000000000000007a9bca0401d98432dd02eb0e29aa6b8a2d7db41d77d60789e3f2a6b4672eb697",
    "digest": "0xe8d2de50871488e0d941f58e407218d0e53232673e4f0c087c4ddc60f4b12997"
  },
  {
    "name": "random-41",
    "domain": {
      "chainId": 1047,
      "verifyingContract": "0x374b2b8301b1edbcc86612a691376d7ac3ced722",
      "salt": "0x35b3516e1c75b47e8c6c9e67c454eeb7ee4bdfdce3bff554800152182ef7c097"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct7": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "int80"
        },
        {
          "name": "param4",
          "type": "bool[]"
        },
        {
          "name": "param6",
          "type": "bytes4"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": "29080156520360861738698",
      "param4": [
        true,
        false
      ],
      "param6": "0x5aedc9f9"
    },
    "encoded": "0x9ca37edfac674c2ff136c55e6301a602590e506fcacca5c9b6b9620af18ee3d60000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000628703dd9fee4a7a6caada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d5aedc9f900000000000000000000000000000000000000000000000000000000",
    "digest": "0x6c6d10e7a34cd9b044d3ef2f2ed2d4333e2822ac7d10b38eb6d99bb8b1771bed"
  },
  {
    "name": "random-42",
    "domain": {
      "version": "5.35.42",
      "verifyingContract": "0x43b33fe40f841899d259fa0c36dea65ec8fde1d3",
      "salt": "0x081bea430df1ade6eb0b35829797621ef878f32df1dc4b9d0c53cb94d441390b"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct7": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "address[]"
        },
        {
          "name": "param5",
          "type": "address"
        },
        {
          "name": "param6",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x3b9ca4b5f6b5e21e938265fa8c67e1caf4aab1f01b17be03ae60ee2d6635a495847dedc266f2a7c2e5567b52e52be5d3",
      "param3": [
        "0x699d241b2b53540a703d8f00870c1739b6e5f72d"
      ],
      "param5": "0x0109f2064fb32e6c22911ac905fb319ef0cee5a4",
      "param6": "0x0ca1fb3d6077a402783877ceff53"
    },
    "encoded": "0x853568bcfdf9ba7ef41211e721fea9318ec93b8bf70306ce21829c25ba577bbd6865c9161273dd536df66549067730a5b9d1f65060fad8a53e1ac0f39ccdaa52f571a282e60d64a3ded8eaa67254087841c598a176a7cd626f00d50732f7f95f0000000000000000000000000109f2064fb32e6c22911ac905fb319ef0cee5a4c435cc0d815f1d138a42be987d6cc47160918ac555121a5bd5278c32fd472060",
    "digest": "0x804d08480ce1b1d7ddf3646c58bf0a49a114f62d28e81ec9210e03f4f9f3a617"
  },
  {
    "name": "random-43",
    "domain": {
      "version": "24.21.37"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0xfe1827974ce7e150af244d1b889f747c8f0a776e",
      "param3": true,
      "param4": "0x13a081fac5b7be3ce686e044bf4da3abef57fe9b"
    },
    "encoded": "0xd9df0580bd644a74f3c333bfcc151b8847cff76c671a86edc3130dbf71458cfb000000000000000000000000fe1827974ce7e150af244d1b889f747c8f0a776e000000000000000000000000000000000000000000000000000000000000000100000000000000000000000013a081fac5b7be3ce686e044bf4da3abef57fe9b",
    "digest": "0xced726b5f99a87ac8035856b471812b2d20ad43e8e600fe5ef6e82ef52f1d653"
  },
  {
    "name": "random-44",
    "domain": {
      "chainId": 437
    },
    "primaryType": "Struct10",
    "types": {
      "Struct9": [
        {
          "name": "param5",
          "type": "bytes22"
        },
        {
          "name": "param6",
          "type": "string"
        },
        {
          "name": "param7",
          "type": "bytes28"
        },
        {
          "name": "param8",
          "type": "bool"
        }
      ],
      "Struct10": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "int32"
        },
        {
          "name": "param4",
          "type": "Struct9"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀Mo o",
      "param3": "582504756",
      "param4": {
        "param5": "0x111983d0af17dcfcc318c61ae1136ee42ccf1f2687e1",
        "param6": "Moo é🚀Méoo🚀 oooé 🚀o🚀🚀éMéMooo Moo🚀oMo🚀é 🚀 oo🚀🚀M🚀é🚀Méé",
        "param7": "0xd6c6a4a7600a2e4bf9c4add944c09f63cbde8e22b0d6fcbf19615fef",
        "param8": false
      }
    },
    "encoded": "0x52230b1722ba9fa8df5a2874a719206cde8f49cae1cc265121e414b677873a98fb6852300dd5f88a8abd38b78e451c8cb00c5a9868c44b7df99b4a2f1c2d25620000000000000000000000000000000000000000000000000000000022b851341e0d5386101b1d456726a186dea7a1d769e76ac7dcf595f563d047ae9d74727d",
    "digest": "0x205d02e271ba4c6b9f25c8f47ee1d77575d64cd4f00e63fffdc59472397d92e1"
  },
  {
    "name": "random-45",
    "domain": {
      "version": "47.45.42",
      "chainId": 1206,
      "verifyingContract": "0xf947022a0e71d11aab373afabfe9befd44681e93"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes29"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "string[]"
        }
      ]
    },
    "message": {
      "param2": "0x8bc51a1cd258fe6d63ac29ace059b760205588a0a9161c84c856c159f7",
      "param3": "0x413b8e4fe25c1c744f85d99604ca804e2244bd4dab2ce6f5887da8e1d44ff150224b771fa7fcfdd80522c67e2315e1a2",
      "param4": [
        "Moo é🚀M 🚀o 🚀o",
        "Moo é🚀oo🚀Méoé🚀🚀éé🚀é🚀éoM🚀MoMéMM",
        "Moo é🚀"
      ]
    },
    "encoded": "0x3ae8fde34490f7400f057134dfa1b5e09466c9c820ae931d27906d7f0ad91c9c8bc51a1cd258fe6d63ac29ace059b760205588a0a9161c84c856c159f7000000283f4a8f7f4aa0508213c3acfea1b9eadcc0134f291f7062983fb7b5faa4c0433ce102fe157fdae81a22e96b212ccdb916af0903abd81ed9dede694888ad8069",
    "digest": "0x594e4bf0d590269799cca8859ba0a0bbdc1f50f79b62484b426596dd352185eb"
  },
  {
    "name": "random-46",
    "domain": {
      "version": "20.6.0",
      "chainId": 1182,
      "verifyingContract": "0x48828af2bff4cea1847888835dd26ef645440919"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": false
    },
    "encoded": "0xd827c65b54cb667b8cb0c84a4aa21ffe3d188aa9cdaede527a285c318ad7274e0000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x95645087033defeaf6a222f850ccd5f3f6ff9d051aeb02dd2c25cc7e237f38d9"
  },
  {
    "name": "random-47",
    "domain": {
      "name": "Moo é🚀",
      "version": "17.27.18"
    },
    "primaryType": "Struct19",
    "types": {
      "Struct10": [
        {
          "name": "param8",
          "type": "bool"
        },
        {
          "name": "param9",
          "type": "uint248"
        }
      ],
      "Struct13": [
        {
          "name": "param7",
          "type": "Struct10"
        },
        {
          "name": "param11",
          "type": "uint8"
        },
        {
          "name": "param12",
          "type": "bytes"
        }
      ],
      "Struct14": [
        {
          "name": "param6",
          "type": "Struct13"
        }
      ],
      "Struct18": [
        {
          "name": "param5",
          "type": "Struct14"
        },
        {
          "name": "param15",
          "type": "bool"
        },
        {
          "name": "param16",
          "type": "bytes25"
        },
        {
          "name": "param17",
          "type": "string"
        }
      ],
      "Struct19": [
        {
          "name": "param2",
          "type": "bytes[2]"
        },
        {
          "name": "param4",
          "type": "Struct18"
        }
      ]
    },
    "message": {
      "param2": [
        "0x3cce5e65b51c8ab21c69ab4c6cf7a0098464d6fd4cc4dab8916ac0221f3ee8ea47479755ffbf",
        "0xad11241adfe1c3d9ff8487a28064a49b65e77955dd25cbd4a6874161c9c93aa0502f1644dd08ce5b717e08f3eec80232527d509a8da2bcbf"
      ],
      "param4": {
        "param5": {
          "param6": {
            "param7": {
              "param8": false,
              "param9": "100895587724354576608296576780149850234295977769426801441167174141880048070"
            },
            "param11": "250",
            "param12": "0xdf"
          }
        },
        "param15": false,
        "param16": "0xeaba82b14185bf405877677729bd3cf35984e2de6795d26af8",
        "param17": "Moo é🚀oM🚀ooééoo é M🚀oéo  🚀 o oooooMMéoéMoMM🚀oMo🚀MoéM é oo "
      }
    },
    "encoded": "0xa2503d8dab2dd52492c8bd1e75e197a963b1be16d8704f24b034c5c3ebb5ae22ab435560740a636c972580194f75d3a1a37686a2281bff1c37e9ca6ccc1c69bebed7f0eb879274b19967141ea60f229549d8509e8c2719506fca12599149d972",
    "digest": "0xf87ee3f08c482046207edfd23e1303358eb48bd840500f424192948eed97c044"
  },
  {
    "name": "random-48",
    "domain": {
      "name": "Moo é🚀Méoooo🚀 🚀🚀ééMMo o MM 🚀o é  o",
      "salt": "0xc03f10b7364e134ddc9de679561060f22c44058fc7abab3b8a06eeff8a0cda3e"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x6be8",
      "param3": "0x48c2efb8ba7ee5d877ba4641d56d960ef4857d19b913c44af5c4b9bda9cfa25179"
    },
    "encoded": "0x39b0d4be9d0cd319e0a49b11a9725cad68c2545bda0a2875a0510a5846e63ce43b716dc9026fa5a0f9d7f44f4f87e3bf20d3ba1c57dc9820987bf547c9cd1c92caefa7da9321f9199f0d71f17e36c56f1ec520e39306893bb0216f64129f029d",
    "digest": "0x32e5e620ebdc87817f3c8028e2e1dfa11bc8281ce740d373ec1d3e6944eb795d"
  },
  {
    "name": "random-49",
    "domain": {
      "name": "Moo é🚀o",
      "chainId": 103,
      "salt": "0x3a5a1eb3351d1a1688d37b0d12422c89298146d8fb17ba3c25fb4b5c86c4bac9"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "string"
        },
        {
          "name": "param4",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x26dfef70c4ef8dcc7b392b64e54778600e4342729ff538043a4180f710d08d7b5456214a42f08ba7fac949be1bbc22b9de57aa01223cb5556b82844077",
      "param3": "Moo é🚀o🚀  éMMoo",
      "param4": false
    },
    "encoded": "0xbb972fe1a70ee0d67e7cacbc55c17b51b6f3a17a25f4f86f5941e8562149d8baf133a0ff1f13504e6c624d2de18b24dcea844936d869bcec139368394b038fd1dd59271cb718f83ded679ab9a17cd95cf12c4045bddd47bb221f8ba9f1d192320000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0xf5f4417e3f7452c53925e17a8d761742c795a21d1399bbdbcc6655d28ae01898"
  },
  {
    "name": "random-50",
    "domain": {
      "version": "29.42.1",
      "chainId": 1327,
      "verifyingContract": "0xfa7dc57fcaae354b92e4116c0bdd2cf47d8f689b",
      "salt": "0x03da468bb06a9b9dab725571b916aff5422068b4ed5447355b3c5f70bc15171f"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀ooé MM🚀o🚀éoéé🚀oM éoMMMMoo 🚀 o"
    },
    "encoded": "0x5927d86a0ef9a01a131f7a41d2a9c89a8c82e0f454d6b4502f955f90f152eb51cb99a22ed97e79bbd189fcbf151341d2ba13a10693a9f98ff01bde8e4b54b0ed",
    "digest": "0xd10b65f29d8c77544a7a31a419b8158854a6efdbd142c11b13e5e914720eab09"
  },
  {
    "name": "random-51",
    "domain": {
      "name": "Moo é🚀éMMoéMéMoooo oo🚀 é🚀é ",
      "version": "17.12.32",
      "chainId": 850,
      "verifyingContract": "0xee57c317107b6016ee17355d870066437b91cfc4"
    },
    "primaryType": "Struct9",
    "types": {
      "Struct8": [
        {
          "name": "param4",
          "type": "string"
        },
        {
          "name": "param5",
          "type": "bytes2"
        },
        {
          "name": "param6",
          "type": "address[3]"
        }
      ],
      "Struct9": [
        {
          "name": "param2",
          "type": "uint176"
        },
        {
          "name": "param3",
          "type": "Struct8"
        }
      ]
    },
    "message": {
      "param2": "41925907111722419066054857838161787127898051241694288",
      "param3": {
        "param4": "Moo é🚀M o🚀 oéé éM 🚀M🚀  é 🚀🚀 oo 🚀é o ééMoMé 🚀o o Moé éoMo o🚀 ",
        "param5": "0x34cf",
        "param6": [
          "0x93ec006c48ba16d99c6a572425637e732a9ea0dc",
          "0x31cf2777fa3591e4d92e44b68f531fe304770850",
          "0xf193bb64fd886bbb4490a31d7ab87a4e69f72240"
        ]
      }
    },
    "encoded": "0x6b5499a7890f6a8255933b37decd0f637928da8bd61d925b3fc04f155551707200000000000000000000700edea808dc2e1e1937df49f85355a1244560c5d450fb8722e70eec19fe4a54da68f47326495d284ae333f3f2db8057ec987bb743b0",
    "digest": "0x95199a1c903ef5b161ea35770728ff9753d9fe4cf63a68001bd910bfd7cd8930"
  },
  {
    "name": "random-52",
    "domain": {
      "name": "Moo é🚀éo oéé é M é 🚀🚀oo🚀Mo  🚀oooéMé",
      "chainId": 1092,
      "salt": "0xab35002bd126820952bb44438b2a342cefd29a7e41533cf101af42d980f231e5"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "int168[3]"
        }
      ]
    },
    "message": {
      "param2": [
        "95857240772386493629523551458434344427800456907887",
        "28274122495329753421185292621092753236174200542842",
        "32557294196900688742163694164485808400870334488946"
      ]
    },
    "encoded": "0x9c928539a37b7c8e4f1ce136ca12eba2a05b8ae934748884491b03ad7547973a0a839d9c631d1e54947847568fb9b7170b4c91ff638a57cd7bdee89b100734ae",
    "digest": "0xf56d12fc86d9c13a69e7e53913981ae56a0bfdc19f6c1693cb3a808aef256f80"
  },
  {
    "name": "random-53",
    "domain": {
      "name": "Moo é🚀oooo🚀éoooéoéoé🚀é é Moéo oooMo   ooo",
      "version": "13.16.19",
      "chainId": 568,
      "verifyingContract": "0x1c60b5eb2fef17a1cdd14f962e6f7d3b3b6d6500"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "uint72"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x2a82f8de19144e48d8bd0ca7dcdcffc3efdcad1c261eb97bd6111b6918b4daab39158153",
      "param3": "1620817067840645147941",
      "param4": true,
      "param5": true
    },
    "encoded": "0x09cfbba2e1e5ea4a3a82d13e5af185c9af63919209274a8b7c749ae5d84b713cb669a821b131bc1c35ea0a46ea180437711dceaf7c7157512bc9794f513ae1c0000000000000000000000000000000000000000000000057dd5af7be83dcad2500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x508f38594346bfeecaf00d106d48313a5fda1a95aad52b5543d5b14b9d7196a7"
  },
  {
    "name": "random-54",
    "domain": {
      "name": "Moo é🚀éo é🚀🚀oéMMooéé  MéMMéoooooo Mo 🚀o",
      "chainId": 903
    },
    "primaryType": "Struct10",
    "types": {
      "Struct9": [
        {
          "name": "param8",
          "type": "uint216"
        }
      ],
      "Struct10": [
        {
          "name": "param2",
          "type": "bool[1][2][1]"
        },
        {
          "name": "param6",
          "type": "address"
        },
        {
          "name": "param7",
          "type": "Struct9"
        }
      ]
    },
    "message": {
      "param2": [
        [
          [
            false
          ],
          [
            true
          ]
        ]
      ],
      "param6": "0x8e95a960e9a83b777c7862a94e8110fe91da147a",
      "param7": {
        "param8": "86338055400144793659912925038806297757314957088810913205015089413"
      }
    },
    "encoded": "0xc2160e538078feaa17b54d2e42d2d30202df0ca254993ea38c93773174f229ffc62f64b185683f6d01ccc0e8d936d70806faa97827a9a5f882dfd39e417384780000000000000000000000008e95a960e9a83b777c7862a94e8110fe91da147aafdbe910404b0c3b44c47734e11d0efc9d25900e7fcb2a08b20eb55cf7c271e6",
    "digest": "0xbc69ff6a3a430987fe2afffe25c78d68fe98948b160b03aa8bb31dc93bb40cf8"
  },
  {
    "name": "random-55",
    "domain": {
      "version": "14.37.24",
      "chainId": 406,
      "verifyingContract": "0xfa8846e816297a43ce7d94b8c6bdb6cca1159fd7",
      "salt": "0x242778aa1964c438a31f0e78cb2939d4452e9498a49b3765a9a401a5ac362230"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes21"
        }
      ]
    },
    "message": {
      "param2": "0xa6eacd95abf006c234ec8ada1a0a1efe733fb8fecf"
    },
    "encoded": "0xe3f2482dcc01a81435fc0dd8a8d9e82fb6aeac6d724cfcb3ec568286b0182780a6eacd95abf006c234ec8ada1a0a1efe733fb8fecf0000000000000000000000",
    "digest": "0x49a860a4b3d28e51559860477bea7a0dd0cd2cc65aefc1be534af93dbda125cd"
  },
  {
    "name": "random-56",
    "domain": {
      "chainId": 1035,
      "verifyingContract": "0x1c37f1b939feea69ce5757b2ff01a4dbe98cee99"
    },
    "primaryType": "Struct9",
    "types": {
      "Struct8": [
        {
          "name": "param6",
          "type": "address"
        },
        {
          "name": "param7",
          "type": "bytes"
        }
      ],
      "Struct9": [
        {
          "name": "param2",
          "type": "int248"
        },
        {
          "name": "param3",
          "type": "bool[2]"
        },
        {
          "name": "param5",
          "type": "Struct8"
        }
      ]
    },
    "message": {
      "param2": "189736845901057709645072716699447242597536589852507924815517840586006295739",
      "param3": [
        true,
        false
      ],
      "param5": {
        "param6": "0xc84f54254fadc15051904a3aaf01a63695b229c6",
        "param7": "0x17e0e79daf5a18eeea785f936e9d0b2f867e5adbf00c319da45f5db04d42397d4b9439754f98bef9ea96a1f6b3d8517c9c272e7d7ba1dc6852c8ea06b9de"
      }
    },
    "encoded": "0xb9cd0c37eacfb7cce86fa6e1179348a2dffc13cef7976b514a468bdf7afb4063006b6322c21ecaba15e76c656e3fc5d69ed353a0eb9ae49a9c4ef0ed9f0b74bbada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7de75e33b115454660e8bf1399340fd2a08c02c80da600b7f6607e4fdaa98b71dd",
    "digest": "0x89a21c0061b072cf4fe51034a22f646423cb79528c45920db9f8dd9b8ef023d1"
  },
  {
    "name": "random-57",
    "domain": {
      "name": "Moo é🚀oooooéo🚀MM🚀o",
      "verifyingContract": "0xd5fdebacaa6fd0e4c4e3dcb01d49d0d0b5169fd3",
      "salt": "0xf46bae2676d80f6d7ed7eebfe927e808a1a9d7f16bb9c5733025eb1c54fb3cd7"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes24"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x11e04fffbb632f04623d274c69004680bbfe47f642d78193",
      "param3": "0xc4340156b62bc39a03b5f8bf3405e1"
    },
    "encoded": "0x15a4a682c969e6c9e1a691efb9e6eac924562774edc9c70b2dea59192b5ffc4511e04fffbb632f04623d274c69004680bbfe47f642d78193000000000000000059b64b2801ddb0f37604d34c0c2b712b9ba10b111c50bf93ad769dc5372943f4",
    "digest": "0xfdd39c246fa31fb5a02b7eed6bc3ccf206bf15199c22155fc730d523c884376f"
  },
  {
    "name": "random-58",
    "domain": {
      "chainId": 382,
      "salt": "0xedba234675d29838cea84fca64d51c6ec1a8569eb7dc50ab6db9fdf81cbda9c7"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct7": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "address[2]"
        },
        {
          "name": "param6",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0xea0f9d8e13e45e85a35d02b4523d47aed0e2acb5",
      "param3": false,
      "param4": [
        "0x0c861e080792c701e98212618cf4fa7fab7bf08b",
        "0x899bb3224127617acf0ba2c0002c2f2ab1fa53b8"
      ],
      "param6": "0xf36ebef74931bfa226e964551dfe43911f2d130e"
    },
    "encoded": "0xc143354b22d04023559bed7cae63b574cfb78cfd7ac0c43a128d77d6e5e614ec000000000000000000000000ea0f9d8e13e45e85a35d02b4523d47aed0e2acb50000000000000000000000000000000000000000000000000000000000000000c71de37770f9c52cb0725ff89e17b4cf1847e4d111693996075aacaff8157569000000000000000000000000f36ebef74931bfa226e964551dfe43911f2d130e",
    "digest": "0x2d06931eec7d70a1db63d07d25e4b8b90f7bcb3a2b55d972c48278dd66acb0db"
  },
  {
    "name": "random-59",
    "domain": {
      "version": "30.30.24",
      "verifyingContract": "0x561277eeb6bbd800e12ebc6cd0dbee892d139824",
      "salt": "0x14bc6a6ff4765450e40c9f760db83f7b207a736f8588a22106af54f936524eda"
    },
    "primaryType": "Struct10",
    "types": {
      "Struct7": [
        {
          "name": "param3",
          "type": "bytes22[1][3]"
        },
        {
          "name": "param6",
          "type": "string"
        }
      ],
      "Struct10": [
        {
          "name": "param2",
          "type": "Struct7"
        },
        {
          "name": "param8",
          "type": "bool"
        },
        {
          "name": "param9",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": [
          [
            "0x507f079711e94366216b3db9f773265034311ecd25b8"
          ],
          [
            "0x5f6c0a03617cd85a8d36eaf3b00f3bf7250d52ef44d1"
          ],
          [
            "0xaaffa60b2f4aeca0cd5e1633701c0fbc7801574995f3"
          ]
        ],
        "param6": "Moo é🚀oéoMéoé🚀M🚀"
      },
      "param8": true,
      "param9": false
    },
    "encoded": "0xaf138bad46576af052316d07c060c9e4148c2bff6809ec200b5bd3de4aa870cf4f3e0e37be2547e04487ab720f75f451fc5f4feabfe1102ce08d0e4ec14306d000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0xaf9d9edf7f72d55542c3a9d8b875cee65261f3aa6c7e96280440c183661bed0d"
  },
  {
    "name": "random-60",
    "domain": {
      "chainId": 563,
      "verifyingContract": "0x724d9d0a75aeefec930256ab77b13f018432dc13",
      "salt": "0xf766cba081e9030cf506f1616682083a65c89daebf5cf7e828d5bf85a47a819f"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "int80"
        },
        {
          "name": "param3",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "-149389809661940077828877",
      "param3": false
    },
    "encoded": "0x773a0a5ad6d608cfce67b33cbffe13f6c510c8e08ce51877432cbe3f5e8efe0effffffffffffffffffffffffffffffffffffffffffffe05d8febbd996b6de4f30000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x638795e70617a8e19fb1971a5531c28225e07cbf26f3330c59f6d5bee2b237ed"
  },
  {
    "name": "random-61",
    "domain": {
      "version": "7.6.2"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "uint40"
        },
        {
          "name": "param4",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x2ea8b4cdab8e0585a626248968a0f3a97dbc1668",
      "param3": "113948542974",
      "param4": "0xde0c11a1e17e64435e2d0a8414cc368302fe788c8aac8e47741336362229cf9b9c4b029f6b"
    },
    "encoded": "0x1bf518570cadc618d41542f220dc4096c36b1bdf93cbd49b2a8d9d8702b1b6540000000000000000000000002ea8b4cdab8e0585a626248968a0f3a97dbc16680000000000000000000000000000000000000000000000000000001a87dcc7fedee76d97debe8dea474b08619fc6a3b04e96d191aa5ddd4309330f5f6cc24603",
    "digest": "0xe825e97cef6530ad8cd98b08e3d94b08c18a3ae7be1a742e6c9378b419c266ab"
  },
  {
    "name": "random-62",
    "domain": {
      "name": "Moo é🚀ééMMMMM🚀é",
      "version": "39.10.1",
      "chainId": 955,
      "verifyingContract": "0x72c212d52a7da827cf299e1063d0f5481a10aba3",
      "salt": "0x911b6be26e46725a5a9b2f66813850cb246cf850f316a8abd17c3255a59b1b73"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "uint120"
        },
        {
          "name": "param4",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": "267318752341245407126510725002347495",
      "param4": "0x12a0cdc5797b0e2cd0fcc3b5f3d63d0b40060713"
    },
    "encoded": "0xb1d573600e493816acf7786e0db884238646f98d2925ad6bc1d0e58f7a84557600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000337bd501dc8adfc1e062ad2c26c3e700000000000000000000000012a0cdc5797b0e2cd0fcc3b5f3d63d0b40060713",
    "digest": "0xa6448bcf64129f8f3357ad27ea6cb54528261ae82c77fa911cfd42326c5a32b9"
  },
  {
    "name": "random-63",
    "domain": {
      "chainId": 52,
      "salt": "0x63a0b8d00ebb49dc92aa7466795df26f52f7f097a8951212994dcf084f3115ee"
    },
    "primaryType": "Struct11",
    "types": {
      "Struct10": [
        {
          "name": "param6",
          "type": "string[3]"
        },
        {
          "name": "param8",
          "type": "bytes"
        },
        {
          "name": "param9",
          "type": "string"
        }
      ],
      "Struct11": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "uint176"
        },
        {
          "name": "param4",
          "type": "string"
        },
        {
          "name": "param5",
          "type": "Struct10"
        }
      ]
    },
    "message": {
      "param2": "0x3e22bfaf4192ea7bbd24be98894f62",
      "param3": "8643822919333434052426646511186265705818267649977701",
      "param4": "Moo é🚀 MoéM 🚀oo🚀M🚀é🚀ooooéoMoMMé é🚀🚀ééoooo🚀oo🚀ééo🚀 ooé ",
      "param5": {
        "param6": [
          "Moo é🚀éM MoMoéooé🚀oéo",
          "Moo é🚀MMooéoo🚀é🚀🚀é🚀oéoé éo Méooo 🚀M oé🚀oé M o🚀éoé  oéoo o",
          "Moo é🚀"
        ],
        "param8": "0x855aef",
        "param9": "Moo é🚀"
      }
    },
    "encoded": "0xac316d647c74bc3589294fae161068a7566854edd7dd16d2eda15b770a4375daa7942ff4d68d8349802c6984bdc9c4c2b6d470e42e79142bbc940d35ac64002400000000000000000000171a57f90c59a9aa6004324b4c1e5ca16b31e5062d65320516b8c2848eb919a422085947b5272cee2812540b5bf353b28c2cb5f048a86ed4f8451f4da89498fab2ccc0b5f4f96071ca26c12b291e2fb6545c1fdf6657",
    "digest": "0x3312dae7779358b36e3d0901d23210c35ae47615a6ced82730958afeecba27b4"
  },
  {
    "name": "random-64",
    "domain": {
      "version": "12.22.26",
      "chainId": 1072,
      "verifyingContract": "0xcfadcc6d18290da205685c27be85e3d12daef93a"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct7": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "address[]"
        },
        {
          "name": "param5",
          "type": "bytes14"
        },
        {
          "name": "param6",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": [],
      "param5": "0x8e08e58d1d810440dff7199e28d0",
      "param6": "Moo é🚀🚀oooéé "
    },
    "encoded": "0x1a13a4e4f65db23bb29d9f84dd419677df8345f546cd92242e7e392b4fbc15360000000000000000000000000000000000000000000000000000000000000001c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708e08e58d1d810440dff7199e28d00000000000000000000000000000000000000d7aba156c05cec0dbf187401b9ed4df82bcd9fd30870c0924ad1cf2b4f3d704",
    "digest": "0xaf2a42e1f7ec4b6c7b7dba5b36c575bda2972f52479f34190d1c3750e18ad5a7"
  },
  {
    "name": "random-65",
    "domain": {},
    "primaryType": "Struct10",
    "types": {
      "Struct9": [
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "bool[]"
        },
        {
          "name": "param7",
          "type": "string"
        },
        {
          "name": "param8",
          "type": "bytes31"
        }
      ],
      "Struct10": [
        {
          "name": "param2",
          "type": "Struct9[2]"
        }
      ]
    },
    "message": {
      "param2": [
        {
          "param4": "0x0788cc31eae008a54fbec9894f004d66fa8717dd4f182e6573d2e5f00a759cc414",
          "param5": [],
          "param7": "Moo é🚀oM é🚀",
          "param8": "0xeb8f41a0ff205c437012c2e5644d979db5bee701133889ea708339b375fb56"
        },
        {
          "param4": "0x1b5c9617f35247456fbcaf1ab61b432b5e729010e8310eb4f10aefd6269e538537",
          "param5": [
            false
          ],
          "param7": "Moo é🚀oM🚀éo🚀é🚀 ooM",
          "param8": "0x7d2a7c7dc27f14a7949197394668c3a6ade6160bb4d252b0ea8d223da0951a"
        }
      ]
    },
    "encoded": "0x22ce6e9c044d57fb05d4d723b7334cff32e1ad7b30ffcf1adeaeef53734f4c20e871b3491896a4212f5437dddb5be51863ea5173bd911dd2eb6499dc6533ddf6",
    "digest": "0x33cf88c1fdd8ebe4f8632202f37cf4f948ce35136a4fd20c16a9fc95839e7dd3"
  },
  {
    "name": "random-66",
    "domain": {
      "chainId": 1336
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bytes5"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": "0xec970b3168"
    },
    "encoded": "0x2bc752ac2910b71f3084d69bc9772a7de5341093c84f7c9e5fd2ac361544ad460000000000000000000000000000000000000000000000000000000000000001ec970b3168000000000000000000000000000000000000000000000000000000",
    "digest": "0x8feef116af30b282bfe16c1890206276e9aae7dd7f74e5f988614956135e273f"
  },
  {
    "name": "random-67",
    "domain": {},
    "primaryType": "Struct15",
    "types": {
      "Struct8": [
        {
          "name": "param6",
          "type": "address"
        },
        {
          "name": "param7",
          "type": "address"
        }
      ],
      "Struct11": [
        {
          "name": "param3",
          "type": "bytes[]"
        },
        {
          "name": "param5",
          "type": "Struct8"
        },
        {
          "name": "param9",
          "type": "address"
        },
        {
          "name": "param10",
          "type": "int216"
        }
      ],
      "Struct15": [
        {
          "name": "param2",
          "type": "Struct11"
        },
        {
          "name": "param12",
          "type": "int72"
        },
        {
          "name": "param13",
          "type": "bool"
        },
        {
          "name": "param14",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": [
          "0xdbca69a0c393",
          "0x9c199fa1d89be738c0dadcf9238c561501f1c7135483bf477f7052c596fac359ffba"
        ],
        "param5": {
          "param6": "0xae6b471f5689e65d939dd50612ad80b0229a9698",
          "param7": "0xf7a067613292c883720b994cb924573f8b7af9ea"
        },
        "param9": "0xb406250e2fc6f17d7039ba448f2a6a0846d69c04",
        "param10": "17683913558389893754497892968564240812609565123296328395075653946"
      },
      "param12": "731484010305030029923",
      "param13": true,
      "param14": true
    },
    "encoded": "0x4f5e3ac47833edcd50a2edec419185ae643ec4561a89a121835ea66fbdcfcaaec5af977e41b1200cf17e504b19b5d34f404764147680f523a7c16b02ceb48ea4000000000000000000000000000000000000000000000027a7613fcdd57d826300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x28dc35e0c32323bbbb19d6643a86a1ffeb0cff946d78bfc65bc2dcf8520b9113"
  },
  {
    "name": "random-68",
    "domain": {
      "version": "18.42.3",
      "chainId": 5,
      "verifyingContract": "0x2909159c78bf78c499a576986e657f6221814a1b",
      "salt": "0x4757ed28e3e7f1ce3bdcb44424f8d26cc8f55f00ea55759f5200e5e58c2df0f4"
    },
    "primaryType": "Struct9",
    "types": {
      "Struct9": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "string"
        },
        {
          "name": "param4",
          "type": "bool[3][3][1]"
        },
        {
          "name": "param8",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀 🚀ooMMé",
      "param3": "Moo é🚀ééoooéM ooM Mé🚀Mo Mo",
      "param4": [
        [
          [
            true,
            false,
            true
          ],
          [
            true,
            true,
            false
          ],
          [
            false,
            true,
            false
          ]
        ]
      ],
      "param8": false
    },
    "encoded": "0xe1a6b9ce8570dfc1929b0986ecaa84c675a38f130aa0dd754f0f3efb28a7946e7b41e0b88acf6e22ccb8ab0ceb0b4e4498e5569bdada5470159cb4aee1977181aec0dcca7af9e7739a3bb043c812bb554c938bd178a9b815ff2bcc12571dedcdcb524ab786db4edc230bef0de43dcb5bc64e388a0e6e7e776ad754bde112e7530000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x93c2c7376679e56c01ad0855a122657ad37474c3c3cf2d943693ed74c9bdf20a"
  },
  {
    "name": "random-69",
    "domain": {
      "version": "29.38.34",
      "chainId": 479,
      "salt": "0x4d41456ce1c41c3d581d10c26cb759d4a47f54ce1a9368f438e2a81977f51d93"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct6": [
        {
          "name": "param3",
          "type": "address"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ],
      "Struct7": [
        {
          "name": "param2",
          "type": "Struct6"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "0x824518b68d26baa46978e389d86ffce76fc865b6",
        "param4": true,
        "param5": "Moo é🚀éMMéééoo 🚀o🚀o🚀oM oé🚀o oéooé🚀éoéoMéMoo🚀🚀oo🚀"
      }
    },
    "encoded": "0x30c11efb6065f6bda2985909969cdeae08dca57414e9e0f27cd2aa3b7be28049e16d3c3bef1a3a648aefca75d723e43c4c44ae6a69831e585a5e3cf1af9cb02e",
    "digest": "0x5f28a72d46bcf0e734304e0fdcdb6ce0371bff2f2db3c66dbef72582ca768429"
  },
  {
    "name": "random-70",
    "domain": {
      "version": "18.40.21",
      "verifyingContract": "0xb24a517ffcbfdd9bc47720db3e5190fda2e01002"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes3"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x41ce81",
      "param3": "0xc83aff0255120cca20588d23ada5f3f38f7195f030873a49a7d16fe8dcaf2b19ac789fca2b3f90470ffe0345332fdcb0"
    },
    "encoded": "0x3ba0a68a11c3149e7b8cce5c07245e59ffa9acdaf38fcc613b25ec0abd0fde9b41ce8100000000000000000000000000000000000000000000000000000000003a478a822fa1170b9116c77ad351ea423f4a9ea13a9942e3f02beff4c8c9e6cf",
    "digest": "0x26a000eff8c5171403d5d31329e4675bbb567bf0fb2938737fc72b35070bd0a8"
  },
  {
    "name": "random-71",
    "domain": {},
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "int128"
        },
        {
          "name": "param3",
          "type": "bytes27[1]"
        }
      ]
    },
    "message": {
      "param2": "83288012576264873811516278006836141697",
      "param3": [
        "0x6cac71c82821aea76c9bb8fe4983e85bfce3dc6a379d32c19db126"
      ]
    },
    "encoded": "0xf08938f0d3a86b7c44c0dfe6c5a1a24598e8f9f6544b45002413bc46dc609a60000000000000000000000000000000003ea8b00feb670d09f5b89587243c9e81286329b0cec992542b625449be245a546e99f1b1434dbe71d89c60ab6f0fbc7b",
    "digest": "0xb57a7eda9dacd21a119966b2eed340dd58fa7a0a2e7f07904b9495e3db1b82c2"
  },
  {
    "name": "random-72",
    "domain": {
      "name": "Moo é🚀é🚀 M🚀 ",
      "version": "5.17.26"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes32"
        }
      ]
    },
    "message": {
      "param2": "0x1a4984f48e88befe512b3cb96ab6dcd897b12c4178dc46a3eb0174834581a306"
    },
    "encoded": "0xf0b1d4f6e88accb50c11c83238640185fa1db3c76ce20f17fa4916dadf9db31c1a4984f48e88befe512b3cb96ab6dcd897b12c4178dc46a3eb0174834581a306",
    "digest": "0x56403e65cffb42a3d27fc46982bf5f109216c216e600ae1d5e9eeb0f2d535c4c"
  },
  {
    "name": "random-73",
    "domain": {
      "name": "Moo é🚀ooMo🚀oo🚀é ooo M🚀éM  oo🚀 éooo🚀 MMoé 🚀oM 🚀 é  é  🚀oé🚀ooooéo",
      "version": "35.11.14",
      "chainId": 1042,
      "salt": "0x7b9937e8531f141e3ee6fe381c9a9e86ffdcd0c68a8e1ae17112e620aaab338c"
    },
    "primaryType": "Struct12",
    "types": {
      "Struct8": [
        {
          "name": "param6",
          "type": "bool"
        },
        {
          "name": "param7",
          "type": "address"
        }
      ],
      "Struct10": [
        {
          "name": "param3",
          "type": "bytes30"
        },
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "Struct8"
        },
        {
          "name": "param9",
          "type": "address"
        }
      ],
      "Struct12": [
        {
          "name": "param2",
          "type": "Struct10"
        },
        {
          "name": "param11",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "0x36edbef26bd4681e7135942feae3864374031194d1426af5a7e481a728d8",
        "param4": "0x1a59b3c0be1b6635e52bdf4cfe067940b50d4e696c363000edc866d8d22c9e49398b54f25d4e9718feb3f99eb46ce3751b926fa7855343150f9d",
        "param5": {
          "param6": false,
          "param7": "0xe6e18c2cb91d1abe36baf44ab6122b3fd30a74c0"
        },
        "param9": "0xc6013a4ce04bb384ce0b272cd0680e04df0cc7b7"
      },
      "param11": "Moo é🚀oéoéé"
    },
    "encoded": "0xeb7ccb02ebd334f8f8df1a4ee2070e684c143ac9a985b10cd81de8a58fc80adbc5dd6b5081adebdb29fdae09d95ee5ea84d03f41c3772434f05e3b05708112fc70204aaa5c94f68894203bf3369b48b4d60e7f149b87d2b0805639a833c2fe66",
    "digest": "0x67912c3108d4a59226f95dc0c3c275382f78beac03a86f9e077c1caa1eeec14a"
  },
  {
    "name": "random-74",
    "domain": {
      "name": "Moo é🚀é 🚀éo🚀o 🚀o é M🚀é🚀éMo🚀🚀o🚀Mo oMo🚀  oo🚀 éo é",
      "salt": "0x370860feeba70f3953279dba52f02a3a04612484aefa84f31663d9e5227e1d6c"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "uint80"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "bytes5"
        },
        {
          "name": "param5",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "908478282363712209846374",
      "param3": "0xef8eb40ace87b08ffe0e7aefbe3bd8e6",
      "param4": "0x597d2ea26a",
      "param5": "0x8922c08275eb23909ccfca4daf11662e5d"
    },
    "encoded": "0x76603b49ee0d4f7ea115ee0a57044fe4c0401d1221ad71b9dc5321cc33fef7b900000000000000000000000000000000000000000000c060b4d4a59107f2806606a0b7daf9092ca6ab2e9126f86c784769009fa8f8d71e7e03679ce2ca8d87a0597d2ea26a000000000000000000000000000000000000000000000000000000cd50ee07435f2e2e828292fc6ef0446ca0f9be9bdc428a8eaffa42a5286a965f",
    "digest": "0xa75d4290b6749b842bf573b2eb09823bb3873d1027d942b4ea6d4d81b842d6c0"
  },
  {
    "name": "random-75",
    "domain": {
      "name": "Moo é🚀🚀🚀MoééMoo M🚀  o  MoMéMoo🚀Méééé éééo Mo",
      "salt": "0x38eaa8c2cfc07d160da608dbe8f1e194e7effef6978024db13d7dca0f3272c39"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct5": [
        {
          "name": "param4",
          "type": "address"
        }
      ],
      "Struct7": [
        {
          "name": "param2",
          "type": "bytes13"
        },
        {
          "name": "param3",
          "type": "Struct5"
        },
        {
          "name": "param6",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x784f74ad457e1d6fcfb45d7367",
      "param3": {
        "param4": "0xdce541656a93cfcb9e179045ad051a9ecdd7189b"
      },
      "param6": false
    },
    "encoded": "0xcb86038251ab323aac49c6b590bcaa00d47d51116aa52134673db28594f5bf75784f74ad457e1d6fcfb45d736700000000000000000000000000000000000000a8a20cb63e84557a5347128e3f0c2a1b5a0afb541230866c1088af198275a6b80000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0xefef2081cc8e3873505b925f3297102ae37293e502c1a8f0c8f74ccdbb89d4bc"
  },
  {
    "name": "random-76",
    "domain": {
      "version": "36.49.23",
      "chainId": 754,
      "salt": "0x43db1a3f28a17091824b3c3dab8e15ec297daf2313c6755b3e40e58f96c9b179"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x3a0cba0c53b27c471b7897a7d6b055079c47d518"
    },
    "encoded": "0x98edda54668461e736d24a4033f2d11540bceac48ea14c7da0fea73b8b9a55db0000000000000000000000003a0cba0c53b27c471b7897a7d6b055079c47d518",
    "digest": "0x6e9544e309d43df400883cf848f3963329e1e69e89a787509df5a9d5cefe94c7"
  },
  {
    "name": "random-77",
    "domain": {},
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "uint64"
        },
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x247fb10bcefc759af65e",
      "param3": "4348164797019411894",
      "param4": "0x50ee38c9e6fdd4dc7f5a61220a34e055900fcc6b",
      "param5": true
    },
    "encoded": "0x17a4fd4034890f03fe450905d50439bbd9237ef04bd95b4164f5f824eeadc77b3c10659f9c1bb51e9e1c70266fd16bf18c420a11e7228839cdf1fa93b1fd87c60000000000000000000000000000000000000000000000003c57c8d8673355b600000000000000000000000050ee38c9e6fdd4dc7f5a61220a34e055900fcc6b0000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x6b30c4ffd1a051b7ec9747f6ab2ce4db7b138c57f35475f905ec11fc252aa472"
  },
  {
    "name": "random-78",
    "domain": {
      "name": "Moo é🚀 ",
      "chainId": 1205,
      "salt": "0x9af868b51e603e4c79a4f3ec3f3117dc294b46a36297214095a50f193489bb42"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "bytes15"
        }
      ]
    },
    "message": {
      "param2": false,
      "param3": false,
      "param4": "0x60217b1a8953bfec781042b8770a75"
    },
    "encoded": "0x1676a9ea413a00e543593a76cb92d87b3f3d82e3116ed0efa051c85413c5ee3d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060217b1a8953bfec781042b8770a750000000000000000000000000000000000",
    "digest": "0x7f79e4826551d80cda20954308c0daf2e009e2af2aa6f3d60bec8130d535dda6"
  },
  {
    "name": "random-79",
    "domain": {
      "version": "6.7.22",
      "chainId": 483,
      "verifyingContract": "0x55f4aa781b99afe9ce65b85e20b467cbdec997e6"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct7": [
        {
          "name": "param5",
          "type": "uint80"
        },
        {
          "name": "param6",
          "type": "bytes18"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "bytes8"
        },
        {
          "name": "param3",
          "type": "string"
        },
        {
          "name": "param4",
          "type": "Struct7"
        }
      ]
    },
    "message": {
      "param2": "0x8b52a6ddb851805f",
      "param3": "Moo é🚀🚀🚀ooo🚀MoM o🚀🚀é",
      "param4": {
        "param5": "610461354364077444926076",
        "param6": "0x7161dd90da510a700714562a8e29d7bf559f"
      }
    },
    "encoded": "0xfcabf7393dcfae718d48a70508ca009b50740ada3608bceaff6b492ed20c200f8b52a6ddb851805f000000000000000000000000000000000000000000000000aca36f7ecb9904e737ae9a06d9a7bc75f52075619eb5d2238d49e56ff0722a4c50896c94a314c8d9e77fdb0734871b909b734cdaac41d6f6412bac6bbe685e74",
    "digest": "0x52bc2e8e33e9a8f5c1e02b4eb1af26d9bfb646f90a802b87e7b05e1c492334b5"
  },
  {
    "name": "random-80",
    "domain": {
      "name": "Moo é🚀 oo é ",
      "salt": "0x12196565c18218e3d5c30fb8c3ed8aa5368b9270d1e50f96dae8c01c9524bd66"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "uint152"
        }
      ]
    },
    "message": {
      "param2": "0x51f4089446d4fac6b978ebc92cb8c136a3ec12d4",
      "param3": "0x9fa41910ccf9",
      "param4": "1327849360637990991145689530428201101848957792"
    },
    "encoded": "0xc3cf69c88a7f7d51e14da0539c7562c4aef44fdccccf126abab02153850a06c900000000000000000000000051f4089446d4fac6b978ebc92cb8c136a3ec12d43550fb9376fce556153ac9c01b5a3d92905e20a0f5e9d20c7f84b82b55b23996000000000000000000000000003b8af68e30d0b55cd77e2a766ab742aacb5360",
    "digest": "0xfa4436f23aab9a7adce0a1ed9ccb76fb12aa9c3fd4ea8f550d3d9c21ea8ad71b"
  },
  {
    "name": "random-81",
    "domain": {
      "version": "37.42.30",
      "verifyingContract": "0x8ddfee525b882a427923e62ea4c6c4f15fd30ac4",
      "salt": "0xea7e38d5a4a991401101f92da453029636a589cc8a5a04f5e8b821d09fb72d62"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes6"
        }
      ]
    },
    "message": {
      "param2": "0xa15ee47cd2ae"
    },
    "encoded": "0xb6ad09a6e56a9b085d21c37fc35456a42e929d83a6c454464108bba8e5bd24eaa15ee47cd2ae0000000000000000000000000000000000000000000000000000",
    "digest": "0x5cf352f0b86d7a40b2722d6fee422cc31791ea6a756e975f94cc418482322967"
  },
  {
    "name": "random-82",
    "domain": {
      "chainId": 1294,
      "verifyingContract": "0xedd346d21be942f85ef9d7e2837019da832bdd15"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "uint216"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀o éMo🚀oM",
      "param3": "60842439233483756494403810394413324880914448649588060989930178516"
    },
    "encoded": "0x0005f47efff5a6a0a15e05a2eec2b6e6fc783b60032aa8390118dbd32ba2cad636c6269b518467469df2499c64aa468f9cb44ac0c27f5aff6efe92d99caae298000000000093e657c796b03e22877711b903453f372f0a33b18b1f15119187d4",
    "digest": "0xd4949695b7d6eec2e8c8f26d6d861ba735fcd61670fbca8de68609e0fd469e30"
  },
  {
    "name": "random-83",
    "domain": {
      "verifyingContract": "0x7b9546d050c94a8270fa5c0d0e37ad2df4a1e763"
    },
    "primaryType": "Struct11",
    "types": {
      "Struct10": [
        {
          "name": "param5",
          "type": "bytes"
        },
        {
          "name": "param6",
          "type": "bool"
        },
        {
          "name": "param7",
          "type": "bytes27[3]"
        },
        {
          "name": "param9",
          "type": "uint176"
        }
      ],
      "Struct11": [
        {
          "name": "param2",
          "type": "int232"
        },
        {
          "name": "param3",
          "type": "Struct10[1]"
        }
      ]
    },
    "message": {
      "param2": "753575330828539899242077719223027729803561407233093589597780073631396",
      "param3": [
        {
          "param5": "0x43e53fca9177478563526d0765abe7705b1808451964d8207fb75278cac13fb991bb4dff4c6dde00456d5236a93fd20edc2081b46c087d9f",
          "param6": true,
          "param7": [
            "0xa413dea0bd7fb350af2baf9e1878c127d2ab62367c57b6d4b4efc8",
            "0x7514110a681f7d3bf5b932d467bedbdeee6681d6cb7a454978d6b2",
            "0xdb56718cbc96a605ae9624a29a2432db87f2ff1cc1f86e2e70648a"
          ],
          "param9": "57122701991999599773377300580648345488081114848136112"
        }
      ]
    },
    "encoded": "0x7c13f5ac1c582fab4bda02838e5b34f88377ed3a9f2e39c4e9a99259893244cd0000001bf3a027ad30dc440fff233a7cc1bb6d49fee7c5273eff291e2f99cea417512f0ab3c462fc44f916934f29d7ab18f18c1b7cffe28b41d46b729680442e",
    "digest": "0x2d36f076787c1920a351171a2c32575d984b68f652b1dca4db83687b2be45551"
  },
  {
    "name": "random-84",
    "domain": {
      "version": "0.4.17",
      "chainId": 911,
      "salt": "0x3e7b8591b2ff12889933bff797d082b473fc6519049106aa59b07753e926bd66"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "0x41ca2691711b6289b07e9d60adcd530d82049e195a22202170b18328a7852d66398d41a006185887266fa7aad4ac89bfb33f94dc6cd2eaa7f2b9b12a01",
      "param3": true
    },
    "encoded": "0x889d1fd6a543c2550a4d6fbf451f7004ee9509e508b7627d82b578e77ed3541a549ef74b3d255ff952161e092604766989b5f79184cb72d5f1687d04ddedb4390000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x789a03f8f59d24aee8073b378663b9289f823791b818602a0477434b99c8b768"
  },
  {
    "name": "random-85",
    "domain": {
      "name": "Moo é🚀oM o     MMoéMé🚀MéMéM",
      "chainId": 900
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "string[3][3]"
        }
      ]
    },
    "message": {
      "param2": [
        [
          "Moo é🚀MMo 🚀🚀MM oéoooéé",
          "Moo é🚀 éo🚀 🚀oéoMo",
          "Moo é🚀oééoéM oMé Moéoo oo M MMoééoooo🚀M🚀o🚀oéMo oo é Moo ooo oo🚀 "
        ],
        [
          "Moo é🚀o🚀ooéMMooooMo oo  o🚀 M🚀Mooo oé🚀o🚀oéoM 🚀M oéo🚀 🚀🚀  🚀o🚀   M",
          "Moo é🚀oéé🚀ooéo ooooM🚀🚀éo🚀🚀🚀ooé🚀 éooM🚀oooooMoo Mo🚀ooooMM 🚀 🚀",
          "Moo é🚀oo🚀M o🚀oo🚀éoMoooM  oM M🚀ooMM🚀 éo MooMM  éooo"
        ],
        [
          "Moo é🚀MMMééo oM o🚀 🚀🚀 Mo o🚀éo🚀oMoé éé oo🚀éé🚀Méoé🚀🚀oéoo 🚀",
          "Moo é🚀 🚀M",
          "Moo é🚀oo🚀Mo🚀🚀oMo🚀M🚀 o  MMoo   ééMoé MoMoMMooééoo🚀 éo"
        ]
      ]
    },
    "encoded": "0x988b57712611b9efb362d55270a70ca3e280c7c23ee803db000637ee03249611aa5a4b824d61608ae0c2f6d5840f3f4e9f9984b3536adf111a3b3f81e01b75c0",
    "digest": "0x42bfc8f80f73b02a800f2cf5f3b9b96c6774a43c706758c8f34f1fabf946b001"
  },
  {
    "name": "random-86",
    "domain": {
      "name": "Moo é🚀Mééo🚀oé",
      "verifyingContract": "0xa55e763720cf41f5a539aab57701a95d60e29f67"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "uint104"
        },
        {
          "name": "param3",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "1292496995405503073422960358486",
      "param3": "Moo é🚀MM o🚀o🚀  éMMoooéoo éé🚀oé🚀 éMoo🚀é🚀M é🚀oo  Mo🚀 éoo"
    },
    "encoded": "0xa7b111f9ba803946689ccd05331e3dfd450deaf9afc546b5d2a08764dbb3075f0000000000000000000000000000000000000010504874d57b4ef8afc891f456a48ff30b0c7e041b00beb25671621131298873a003e9ec839b5d75eb5b1da286",
    "digest": "0xf3af9321483c3d61bcdda3a128184aa6841318dc718edc3be9a2f0b976416641"
  },
  {
    "name": "random-87",
    "domain": {
      "name": "Moo é🚀 éooo🚀Moo🚀oooMMo🚀🚀o ooMé éo o🚀éM ",
      "version": "45.45.47",
      "chainId": 759,
      "verifyingContract": "0xdd7404edd91ced2e440ae26be5de770826936aa1",
      "salt": "0x3e9fe589ec829de82a24cfdfb4f51be7b494d92d767ddce47df39f2d695fef40"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes31"
        }
      ]
    },
    "message": {
      "param2": "0x76418c1f3cc8305025ce913e271c62064302cfc52a3cbcee02ffae444e402b"
    },
    "encoded": "0x5d03dd39f516dbdce0dda1249a18778b381083c568572fa40e677a1e8bcba69176418c1f3cc8305025ce913e271c62064302cfc52a3cbcee02ffae444e402b00",
    "digest": "0x70669d88e5b14dde860f7967400d4001ea51ad347d9dc8e9e14a78a046620a0f"
  },
  {
    "name": "random-88",
    "domain": {
      "version": "34.19.0"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bool[3]"
        },
        {
          "name": "param4",
          "type": "string"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": [
        true,
        false,
        true
      ],
      "param4": "Moo é🚀o éo🚀é Moo🚀Mo🚀 éoMoooooM ",
      "param5": true
    },
    "encoded": "0xeb561f00a2ce847d36d192a18b66be2e5938b7c84798b9a1730ef44ce41ef7c35c6090c0461491a2941743bda5c3658bf1ea53bbd3edcde54e16205e18b457922e1277d90577b137ca94be5c47d97fdd62924edbcd364fffd8f2543a0b3974cb0000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x284ff781d137b80a6aedaf25217692a7bee1529b50f717d20fc8b113ea3d10eb"
  },
  {
    "name": "random-89",
    "domain": {
      "name": "Moo é🚀MooMé 🚀é é éM ooo🚀M 🚀oo🚀 🚀oooo🚀éooooM 🚀🚀 oMé",
      "verifyingContract": "0x94104688cc800c04a9f4ce356606469f7aaf0889",
      "salt": "0xccd084925ccd16ac0a852763036118c175fe5a86811c7ed8ba75bd427a63985b"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0x7af6a9843bfac96994bcecebe57b40d67942fded"
    },
    "encoded": "0x98edda54668461e736d24a4033f2d11540bceac48ea14c7da0fea73b8b9a55db0000000000000000000000007af6a9843bfac96994bcecebe57b40d67942fded",
    "digest": "0x7db9f61f14ad00540fd7f51c7adeeff792ab7ef3bdfd672713223f0ff3920fea"
  },
  {
    "name": "random-90",
    "domain": {
      "verifyingContract": "0x9511e9dcad6fbe5e6693a1d7031a592f27c5c4ef"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bytes16"
        },
        {
          "name": "param3",
          "type": "uint56"
        },
        {
          "name": "param4",
          "type": "bytes25"
        }
      ]
    },
    "message": {
      "param2": "0x88f0dd9c8cbee263cf947a650a3b3151",
      "param3": "17583036303696475",
      "param4": "0x00153b38e3509586ea81d62acfaf69f58033c03989a5e9ed83"
    },
    "encoded": "0x192ce62b78aff9164de71a0394d492eb37f524dfda52e333ccd477c065fbe73a88f0dd9c8cbee263cf947a650a3b315100000000000000000000000000000000000000000000000000000000000000000000000000000000003e77ada8f4625b00153b38e3509586ea81d62acfaf69f58033c03989a5e9ed8300000000000000",
    "digest": "0x39c13ee9471e159919485ab461d454a50ca52a6ddd8cdadfbed90326801f74ee"
  },
  {
    "name": "random-91",
    "domain": {
      "version": "48.32.32",
      "verifyingContract": "0xdc2f8681bcb020c14bb5a61803be1f1904934a7c"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": true
    },
    "encoded": "0xd827c65b54cb667b8cb0c84a4aa21ffe3d188aa9cdaede527a285c318ad7274e0000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x465f1b1db471abcc586e028f388b54cb4e0c9d341d9c03fd4def6118ca7ac479"
  },
  {
    "name": "random-92",
    "domain": {
      "name": "Moo é🚀🚀MMéo 🚀🚀MoooooéMM🚀ooMoo🚀ooo 🚀o  oéoo  🚀éoooé🚀Moo  🚀éooM🚀é🚀",
      "version": "15.24.22",
      "salt": "0xf6b0ebe21875667066601b50ad91163654013e109e51fae6a8bf19a988a51adf"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct4": [
        {
          "name": "param3",
          "type": "uint160"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "Struct4"
        },
        {
          "name": "param5",
          "type": "bytes25"
        },
        {
          "name": "param6",
          "type": "bool"
        },
        {
          "name": "param7",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "990067310911447424079721892655020403107523900579"
      },
      "param5": "0x929ecef7eecff36ca4a793303bfeb2f7666d3015f472177f92",
      "param6": false,
      "param7": true
    },
    "encoded": "0xfc75a8485d94b0cf924739d8db8392a3933b768aaf87990e0ef313c9613af2d569d3dc7ee6ddfd3cff85001b724976fea388b0d40fe7864b4d79e32eb76adc8c929ecef7eecff36ca4a793303bfeb2f7666d3015f472177f920000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x650fa8632ebb3ad17d74fd519317c5bd99cf2210d6742be16bba20ad7bdb3055"
  },
  {
    "name": "random-93",
    "domain": {
      "name": "Moo é🚀MéMM éooéoMoo🚀 M🚀M🚀o🚀🚀🚀🚀oo🚀🚀🚀Mo🚀🚀🚀M  o🚀oMMoé M M"
    },
    "primaryType": "Struct9",
    "types": {
      "Struct8": [
        {
          "name": "param4",
          "type": "bytes21"
        },
        {
          "name": "param5",
          "type": "bool"
        },
        {
          "name": "param6",
          "type": "bool"
        },
        {
          "name": "param7",
          "type": "address"
        }
      ],
      "Struct9": [
        {
          "name": "param2",
          "type": "Struct8[]"
        }
      ]
    },
    "message": {
      "param2": []
    },
    "encoded": "0xef6a7dac2342e48bc7bee2421009cf3129bbeb0bb7fdeaba99402bea15f82c76c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "digest": "0xba75038176156de4c9a80a8bb70ac20bb140c22b707179be3ae4a554a4e8ea23"
  },
  {
    "name": "random-94",
    "domain": {
      "name": "Moo é🚀 🚀éooéoooo ooMo éMo o M🚀Mé🚀ooM o Mé🚀éoMMoo",
      "chainId": 1017
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": true
    },
    "encoded": "0xd827c65b54cb667b8cb0c84a4aa21ffe3d188aa9cdaede527a285c318ad7274e0000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0x69ec47b02da2c0ebfa801692ca474f282d9f0df84f87c45cdc921ce1a0d860bb"
  },
  {
    "name": "random-95",
    "domain": {
      "version": "18.32.12",
      "chainId": 742,
      "verifyingContract": "0xabe3c4f5cf4ed1b97303bd7cae8b067c5e7f8c26"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes[]"
        }
      ]
    },
    "message": {
      "param2": [
        "0x38a9ee766abe7a928c112125e65ffb984ace",
        "0x3a3613418bc9b1045fe5809d"
      ]
    },
    "encoded": "0xfbb1adeb7d907dcad24d9dcc6c70efeb95e9983697f2b3d761bbc66df10b6de0c645b2e2e519bae0fadbaf7ef2932226f7e7935d3d837af12839bd360aa64a4d",
    "digest": "0xc58c6e7c7e79b525438c151e97c6457f8c4c7b3065827d36e227d6efdbd5cb94"
  },
  {
    "name": "random-96",
    "domain": {
      "chainId": 239,
      "verifyingContract": "0x0f77912b8136385729a659bd3ef9107a61df2481"
    },
    "primaryType": "Struct36",
    "types": {
      "Struct6": [
        {
          "name": "param5",
          "type": "bytes"
        }
      ],
      "Struct8": [
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "Struct6"
        },
        {
          "name": "param7",
          "type": "address"
        }
      ],
      "Struct12": [
        {
          "name": "param11",
          "type": "bool"
        }
      ],
      "Struct25": [
        {
          "name": "param21",
          "type": "bytes"
        },
        {
          "name": "param22",
          "type": "string"
        },
        {
          "name": "param23",
          "type": "uint232"
        },
        {
          "name": "param24",
          "type": "int104"
        }
      ],
      "Struct29": [
        {
          "name": "param20",
          "type": "Struct25"
        },
        {
          "name": "param26",
          "type": "bool"
        },
        {
          "name": "param27",
          "type": "string"
        },
        {
          "name": "param28",
          "type": "string"
        }
      ],
      "Struct30": [
        {
          "name": "param19",
          "type": "Struct29"
        }
      ],
      "Struct31": [
        {
          "name": "param15",
          "type": "address"
        },
        {
          "name": "param16",
          "type": "bytes"
        },
        {
          "name": "param17",
          "type": "bytes"
        },
        {
          "name": "param18",
          "type": "Struct30"
        }
      ],
      "Struct33": [
        {
          "name": "param10",
          "type": "Struct12"
        },
        {
          "name": "param13",
          "type": "string"
        },
        {
          "name": "param14",
          "type": "Struct31"
        },
        {
          "name": "param32",
          "type": "bool"
        }
      ],
      "Struct36": [
        {
          "name": "param2",
          "type": "Struct8"
        },
        {
          "name": "param9",
          "type": "Struct33"
        },
        {
          "name": "param34",
          "type": "string"
        },
        {
          "name": "param35",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": false,
        "param4": {
          "param5": "0xa997ae99319d4d5f78001116304b85963cfd598ae95fcc739b489ed254c80862bcefb6dd5c83fed172b8"
        },
        "param7": "0x6a437c4aa417145b8550cb480a73690dc14b69c7"
      },
      "param9": {
        "param10": {
          "param11": true
        },
        "param13": "Moo é🚀M ooMooé Moo🚀éMo🚀éoé🚀🚀🚀é🚀  Mo🚀 MMo",
        "param14": {
          "param15": "0xba4bc495f2ea2017b703f7ef1fcbbb762fd05bae",
          "param16": "0xceb6a00304eb1d36e62a93652e03722fa1978be1a5b799a6715055006e3de8d49f47f5dea681b7c3f3e032351f494f4eebd5ecfc2ea1",
          "param17": "0x53ceecbbeef73e6004a2a48e4b38e8c524fd820f8ac5feba048a31d2c1244c4be8f824f1146f5d882aac2ac4d0421443b56141d09e9b9fc1256c469446",
          "param18": {
            "param19": {
              "param20": {
                "param21": "0x575b70fdb462625a1e9cdbee09c61a7a9704ee2a1cbdeba468344e2f97f548158c56b0",
                "param22": "Moo é🚀ééM éé  éoooMMooM ",
                "param23": "3630081370417832362319236809711268993163922661583325307782224246317793",
                "param24": "7856537978551137247557348592909"
              },
              "param26": false,
              "param27": "Moo é🚀🚀 ooMooo éo oM 🚀oéMM🚀oMMooéoéoMoo 🚀éMooéooo MM🚀  oo éo🚀oo ",
              "param28": "Moo é🚀oMMéoM o"
            }
          }
        },
        "param32": true
      },
      "param34": "Moo é🚀🚀Mééé o  🚀 é  🚀éo  MMMo Méoéo",
      "param35": "0xed7ea3d3b80622c23d53b27611234455c18fde3d2ed4b55c99a0d1afaa6b15dc9f"
    },
    "encoded": "0xf9e484b4d24731dcead8e64be7ead35857e953e16e64f5a50ed612f8605ce07d78b6a6b52e423f732676bd55ebd747cc95b670636328d911128444f847b62abd043e6379a56f021f2d7de4165f4f085e23e25ef8e536f8c2415663bfc2ef9323655ae94c06fc9d476b0d105722d4a32d1eb7a4b5529891ec029139fae945d061fcafb084efc157e2ff1daf20bdd536dd513ed329787f2f85f3c3e2c52b597d3b",
    "digest": "0xbc43bb6f933954e8ed291b32d35556398a692421734dab354bb9401c2ecaa775"
  },
  {
    "name": "random-97",
    "domain": {
      "verifyingContract": "0xc0b2427daf81b3b1ae287b45177cd8cb2dd7fcf0"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0xa145dd9dccf1d0d72382ec1f2d82d7cd48827ec3",
      "param3": "Moo é🚀🚀éoM ooooéo Méé   M o🚀oééééMoMoéo🚀oo🚀 Mo🚀oo🚀oo o"
    },
    "encoded": "0x666400a396b19434e5bdf93d49163a67dd8b6e60e8df8160e510c7c1288ac5da000000000000000000000000a145dd9dccf1d0d72382ec1f2d82d7cd48827ec3d6991f578c45fb43694bc4e1cf51abc5fb10782beff88449580449e1ab8b1b09",
    "digest": "0xce67b3dc8f8249f8ee121de29a726e1c1f4ac4b73971002fb69823d3e752b5b0"
  },
  {
    "name": "random-98",
    "domain": {
      "verifyingContract": "0xd2489de35e4726e26c6d21423d8627a34ed723b1",
      "salt": "0xdee197f170390ffe117985bc1b6f75d2aa76cffd744a1ed741d9e5fdef371804"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bytes2"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "bytes8"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": "0x2512",
      "param4": false,
      "param5": "0x0f8158ca29114619"
    },
    "encoded": "0x23b6f6f83199a6201a90b8b8b9457c300d054549f0d8c6084fc8a0b44442f7f30000000000000000000000000000000000000000000000000000000000000001251200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f8158ca29114619000000000000000000000000000000000000000000000000",
    "digest": "0xe4baa2c2a442cd32eaabe94c6db4c30460bd5ab3e50e1238cd265e7e39a5b17f"
  },
  {
    "name": "random-99",
    "domain": {
      "name": "Moo é🚀 o ooéM🚀🚀🚀éé🚀éoé  🚀🚀oéM éMooooM  ooooéo M oMMMoo🚀éooooo ",
      "version": "44.14.34",
      "chainId": 401
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "bytes26"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0x77c8ed30964f4ad426b83e5a079c394eeb6108670d59ea82bbef",
      "param3": false,
      "param4": "Moo é🚀 o oM🚀  éoMoé🚀MMooMM🚀 oo🚀🚀oo  ooMoo🚀M🚀M"
    },
    "encoded": "0x22ff007229938669cf96193b9dcf351dadbe0c48990093a41d72b39335e9accb77c8ed30964f4ad426b83e5a079c394eeb6108670d59ea82bbef000000000000000000000000000000000000000000000000000000000000000000000000000037ed224a35fef81262bbee1f953d29657ee71ff814272f38dd451a46d46ab71f",
    "digest": "0xdedd776daec0f194b00d73d63004c5e0883fad5072a458f61ba77635fe04b766"
  },
  {
    "name": "random-100",
    "domain": {
      "name": "Moo é🚀M éMooo 🚀éM M  🚀oooMéo🚀MoM🚀o🚀oo🚀oéoM🚀🚀éo🚀o é 🚀🚀 MéMooéo",
      "version": "47.45.45",
      "chainId": 1297,
      "salt": "0x46fd6ce92f74a7398373a2ccbcb0585fe3453b45e4a6a0a03dcab2c2dc9c9d7f"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct7": [
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "address"
        },
        {
          "name": "param6",
          "type": "string"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "bytes21"
        },
        {
          "name": "param3",
          "type": "Struct7"
        }
      ]
    },
    "message": {
      "param2": "0x48cd5f1c09c5e268f1a924b1aa9d6483e7de7344da",
      "param3": {
        "param4": "0xee40a1c631d8f9a0ed7522896b5af8909914caa6",
        "param5": "0xf4e494cef1caac185b2886e37a0c0df00b8ccc95",
        "param6": "Moo é🚀🚀éoMMoMoéooMo o M🚀o"
      }
    },
    "encoded": "0x8efe36edac72ec5f57c5c2283101ce2d7121dad612fdb566b4b332088a533f1048cd5f1c09c5e268f1a924b1aa9d6483e7de7344da0000000000000000000000490aa4d83fa47e2e7ec10d335cc7598977c6a4c02ac383ac4f0498c6fcf0370d",
    "digest": "0xc757c9b58178cdd87b024fc62b56cde9056291433a95211420bfc2fd3dc67804"
  },
  {
    "name": "random-101",
    "domain": {
      "name": "Moo é🚀🚀 🚀éMo M ooMoo🚀 ooooo🚀Mo🚀é",
      "version": "32.48.49",
      "chainId": 1182,
      "salt": "0x89cb0d39315e605914b2629ef0e737a9b2a18c3393c649515dcad65464619c68"
    },
    "primaryType": "Struct18",
    "types": {
      "Struct8": [
        {
          "name": "param5",
          "type": "bytes"
        },
        {
          "name": "param6",
          "type": "bytes"
        },
        {
          "name": "param7",
          "type": "bytes"
        }
      ],
      "Struct13": [
        {
          "name": "param10",
          "type": "address"
        },
        {
          "name": "param11",
          "type": "bool"
        },
        {
          "name": "param12",
          "type": "address"
        }
      ],
      "Struct16": [
        {
          "name": "param15",
          "type": "address"
        }
      ],
      "Struct17": [
        {
          "name": "param4",
          "type": "Struct8"
        },
        {
          "name": "param9",
          "type": "Struct13"
        },
        {
          "name": "param14",
          "type": "Struct16"
        }
      ],
      "Struct18": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "Struct17"
        }
      ]
    },
    "message": {
      "param2": "0x6dcdf91a71234de95982294b661b0be4040ab340",
      "param3": {
        "param4": {
          "param5": "0x8f32b8d15469bb5a8cddeb0167cd84302a4e426eb67e11405ab05aac13b295828323e287c95df22a50869d5dd7ce",
          "param6": "0x5456f8009eb577a667fec8439a686e117fc007519326c10d2e9e55d870266cc277694e42aed00e176912b316d8a91ad20009e8abd316d63963ed4f749c8c9e",
          "param7": "0x561026b99073b6eecdf3c4c6d47c27e2754a923f461b79c523362b936a"
        },
        "param9": {
          "param10": "0xe59adaff5dc1857e78e568e4a1d128d73b117e42",
          "param11": true,
          "param12": "0x4eef176f86a9782d9191463852afd6dd3a1abae3"
        },
        "param14": {
          "param15": "0x6e821dcdcc749da3ccacd453a49ba1484ca8cc05"
        }
      }
    },
    "encoded": "0x3542196ee308e13b334816ef2496b2d489531edbfedf1df81b61e1d68142a6b30000000000000000000000006dcdf91a71234de95982294b661b0be4040ab340d6736ac6f05a75e17728b8ba7bdb28a31b515912dada4600176132be7e17f85f",
    "digest": "0x06dadcc084886d4e4d42c01748794cc70125d59dfc9140a304ac4eecc93faaa5"
  },
  {
    "name": "random-102",
    "domain": {
      "version": "5.37.45",
      "chainId": 1112,
      "verifyingContract": "0xad34d80f19994d30f98da4a9127394233f5d1b62"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct5": [
        {
          "name": "param4",
          "type": "bytes"
        }
      ],
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes29"
        },
        {
          "name": "param3",
          "type": "Struct5"
        }
      ]
    },
    "message": {
      "param2": "0xa22678edf23dbbd8eaff7e09c5a6898c086e15f5b9afa1d3085ef7c551",
      "param3": {
        "param4": "0x3d04e4139a6340cf4e183cd5ee6b6d0f585ebad98bbe98a6934a4880a940095e66da08286166fe86feec2b680597deeb4486089095d235"
      }
    },
    "encoded": "0xa8831e2b1ae12bad49bd738de2fec417a85c70cbd1582c58b1a0fa67d0db417ba22678edf23dbbd8eaff7e09c5a6898c086e15f5b9afa1d3085ef7c5510000004e3b46155fd76195aa056c321070eaf751287eb0839bf1f1f03f0b67d98a5331",
    "digest": "0x53b91d82e450b29ebfcd9d912233db26fd277b4ea288c15a4700981b56a723da"
  },
  {
    "name": "random-103",
    "domain": {
      "name": "Moo é🚀o  M🚀 MoooMéM🚀🚀oé    🚀o🚀M🚀o éMo ",
      "version": "34.7.4",
      "verifyingContract": "0xffb9dcc2ad72de5d51a6523c3c59db76b5efce82",
      "salt": "0x91a6bbeac26f0d774f89f90732838632f7848fba09dccbbbfc4dd0d0fc1a21ae"
    },
    "primaryType": "Struct5",
    "types": {
      "Struct5": [
        {
          "name": "param2",
          "type": "uint168"
        },
        {
          "name": "param3",
          "type": "bytes7"
        },
        {
          "name": "param4",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "52618101586894465619352011808458733029823328733625",
      "param3": "0xed40337a19d528",
      "param4": "Moo é🚀oé🚀🚀éoo MM ooéééM  MMoM  éo MoooM 🚀oo🚀oooM🚀éoM oéMéo🚀"
    },
    "encoded": "0x166448b3a08b4d0577e607bbf8fa9117e476d4eebfef40d0a03af3022fc95d3c00000000000000000000002400b54743f81e79d07dbe7589e7130815622ec9b9ed40337a19d52800000000000000000000000000000000000000000000000000fcce90f9868722c814b5068c652b2374b1623dcf15ef57b3a67abfb337c9b30d",
    "digest": "0xde37ba3588f474a46a8f87b3a97d06f80c18f5f640c2c82eee6b8d35009a2710"
  },
  {
    "name": "random-104",
    "domain": {
      "salt": "0x1eda86bf849f89bc2e6f69245118892e38bc6e78ae6b8952228a26f52872db44"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀ooo oo🚀oMoooo🚀M🚀M🚀oMoM🚀  M oooéMM🚀o ooéé",
      "param3": "0x734299d683c01075c7d7806cabbf"
    },
    "encoded": "0x4d0024736263d208aca6e84c7bb7336060a12a4693f70ea14290ed4308d052e586c6628e3abdd5327542024ebfd60ba121feeb94ad0a9fc69718ad35d60e8d7dacc5b4662798e9bfefc01e39285d731e00c77445dad6f1ce9bb875db4cd56e11",
    "digest": "0x25bfcd9f9bf4070fa8e64500fc1f03d8b47e1d8475454f4164f235b568b61373"
  },
  {
    "name": "random-105",
    "domain": {
      "name": "Moo é🚀ooéoM 🚀🚀 o🚀ééé é🚀éoMo",
      "chainId": 1004,
      "salt": "0x4bf151c92fcec680b466e8f725517067ecba2bfebd218159b4f7865020861285"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "int40[3]"
        },
        {
          "name": "param5",
          "type": "int40"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀 o 🚀oM🚀M 🚀🚀éooM🚀🚀éMoéo",
      "param3": [
        "242858918476",
        "77291718371",
        "530770037136"
      ],
      "param5": "263215721237"
    },
    "encoded": "0x47b2e0706327e941b7095dbab4500c0798ada3576db783a0499106e8538863be00db7a448333a0944bbe0ded5bee79fc3ea07f15863bc059c42eefdc8a3db436175773b0cff47dcc6167eafef357b7743e0fe0c2e5912473777f63bd463b41fa0000000000000000000000000000000000000000000000000000003d48e12b15",
    "digest": "0x9ff750f7890c19f215900f6fe0a413c0a18a8765e974c8d73b996f78ad62c0f9"
  },
  {
    "name": "random-106",
    "domain": {
      "verifyingContract": "0xfceb71a9ad2869c8e3dff6fa3669abc9352f783d"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀 oMooMoéMoooMo🚀éoMooM🚀M🚀oM  M éMéoé🚀MoM oMM 🚀o🚀o🚀o"
    },
    "encoded": "0x5927d86a0ef9a01a131f7a41d2a9c89a8c82e0f454d6b4502f955f90f152eb519053df716c21aad94a049e52bc52aad715c95913062abd88cd324bdc0e09d147",
    "digest": "0xbee1559cffdba5659309d50ed1ad306c33a388b34a1535fd5404851db7fa4ab3"
  },
  {
    "name": "random-107",
    "domain": {
      "salt": "0x5bfb5f78bd6682c97b6f3c94bc4cf62d34110e5ad83b21b3f9432fbeaf8bcd4f"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "bool"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": "0x26d3edf93ed79e6435ed818c07a5dd71b20c7690c3c09850f10f3155ff7e2c1b7e6d993cd4f2df0e05488c19ea16e55e14da0596492eadcd1ae2",
      "param3": true,
      "param4": false,
      "param5": "Moo é🚀🚀éM 🚀🚀Mo é Méé o M🚀é"
    },
    "encoded": "0x89e191a0c9d59f32cab1f2423029c95a85ca34531f959e94053e40ebf4267c5f4fccd6381664502c41c49bc5cd078cffe187640d7f9304c0661bb223f9b2dcdb00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000fd174bfd259833e8efb11ee94ba88bfd1632028092b0028084e3ce4c0015cd34",
    "digest": "0xdc19c7f5a4fb303efd1e2de89b9ca2082a6d702dc248e95764d90a109cd986ef"
  },
  {
    "name": "random-108",
    "domain": {
      "version": "39.28.36",
      "chainId": 631,
      "verifyingContract": "0x9bd5ff86e47b56b27505902cc94b3d6329a1ed9f"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct6": [
        {
          "name": "param5",
          "type": "address"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "string"
        },
        {
          "name": "param4",
          "type": "Struct6"
        },
        {
          "name": "param7",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀o🚀 éooooM oo🚀o o",
      "param3": "Moo é🚀 Mo",
      "param4": {
        "param5": "0xce4186253cc508af322c4e39cff34a1319599a15"
      },
      "param7": "0xd75f12aef677e43bdaa89783ee4572178e3bf2a7"
    },
    "encoded": "0x0cf85620ea91e290d99f71f9ee10e2d73daa1b4b71b823e2362954720b7005706d7c4cf22de5351fbb6d76b5fa30da35546a802285ffee4d2bbbbbb9b6363631f03d6b228022926635e1c91913f4f990e5091fdfb5833fa5926f70aef635fd07cbed95fc50b5e3a119bc2286b468bb71a1d3fda6d9b488e82b6f9d38eae3f1fd000000000000000000000000d75f12aef677e43bdaa89783ee4572178e3bf2a7",
    "digest": "0xde95998c10032e5774f76f2cadc5e385237bb061d35ca1ff3e3fec1abc60b2c5"
  },
  {
    "name": "random-109",
    "domain": {
      "name": "Moo é🚀 🚀M🚀éooé  oMoé",
      "version": "47.13.9",
      "chainId": 1135,
      "verifyingContract": "0xf3e8de92425a724a4b5f5f34ff462f4a21c022a6",
      "salt": "0x92a39b51b11fe26a4b7c9b5c9dc46e4eed900408b0acdaade7ef2d2000f2180c"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct4": [
        {
          "name": "param3",
          "type": "bool"
        }
      ],
      "Struct7": [
        {
          "name": "param2",
          "type": "Struct4"
        },
        {
          "name": "param5",
          "type": "bool"
        },
        {
          "name": "param6",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": false
      },
      "param5": true,
      "param6": "0x2b9eb331163da92c413824164a25f6f94e6e101867847a81de73eb550e5587bcf8737d49f18648d069dbeb0a88bd48c4806a0bd22d07fe7ee7f03096ae61f1"
    },
    "encoded": "0x92bcc5ebbe1a24ca641c980aeedbf345d2bb96c75c6e7160a63416ce671e5ba350ba05c95cd64746bc1afc3818f62a6d56861e27a783ff9f39b0f6dc1bebd746000000000000000000000000000000000000000000000000000000000000000114e055471446e3c12424b16ad746b49bb92201f598be3c5f5c500e39cd4b420c",
    "digest": "0x26ed036a8e9356433ec6273d9d6bc87f49faacb9b4aee0c1922ab2054032a5dd"
  },
  {
    "name": "random-110",
    "domain": {
      "version": "33.16.36",
      "salt": "0x685eeb5072a1173bec4979c7dfdc054601f6f80cbe7ad78f4eb43a7e1bfbf55d"
    },
    "primaryType": "Struct7",
    "types": {
      "Struct7": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "string[1]"
        },
        {
          "name": "param5",
          "type": "bytes32"
        },
        {
          "name": "param6",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0xa413fc1c6885bc0c48bf8084ef2521d68ee45bc1e23b79e72a7e414511",
      "param3": [
        "Moo é🚀🚀ooo🚀Mé🚀M 🚀é🚀é🚀éé M🚀oé🚀ooé🚀Méoé🚀Mo M MMMo🚀 "
      ],
      "param5": "0xa1f41b79c9af58bec8b31385ecf4c6f1418a351add6fabfeabfa2014583520e4",
      "param6": "0xff444eb48a465c6021e011bafad0310066ac09abe890fbe1159732d8f010ca0474270fb7a911db0dfb09882fbb87c29df1f1bf87"
    },
    "encoded": "0x2e43045a9a14c67d9b0a9014b72f4aa002f40464467aed0285d4c0c05453173c13b6f03fd29a02d0b024351ffe30c322d189714f11a5645864b1d1ae509c2e6cfe3999130ddf7df630cb54ae95658105ce7dd2c1e39561092b26d42f71c0089fa1f41b79c9af58bec8b31385ecf4c6f1418a351add6fabfeabfa2014583520e436b28fe9e0f31ab8023143ce0634d9618d6068007d0eb02006adbb5fce6c648c",
    "digest": "0x853e9a5edaa2da1980831dadec0754c352e34785ecf55789d599a00e28287f70"
  },
  {
    "name": "random-111",
    "domain": {
      "verifyingContract": "0x96733f3f5e8bcff66190bf82dc5523bbc8145456"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "bytes4"
        }
      ]
    },
    "message": {
      "param2": "0x1ba2e5ab"
    },
    "encoded": "0x19a687863ba581a953b0f694f34073f5005a5d39e5c94be277688507ea013a261ba2e5ab00000000000000000000000000000000000000000000000000000000",
    "digest": "0x7f0d4714c742f29a9f2a182af25643153529da444383e342937489226f5a0a15"
  },
  {
    "name": "random-112",
    "domain": {
      "version": "44.26.33",
      "salt": "0x2287f7611aabf794bc8f829715f8794eb76fc9c73ba6143df65e32b231cc8e55"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes30"
        },
        {
          "name": "param3",
          "type": "int152"
        },
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "bytes27"
        }
      ]
    },
    "message": {
      "param2": "0xab54e61a59de9271cf657d72cc1fed2256d52d003f3ca02ad8e407182637",
      "param3": "-316082391023394535331711337027447687645790587",
      "param4": "0x0af88ce740fb6aa140d5e7a7828bfb6755fd7f98",
      "param5": "0xd0ae690c13a9cefd7fdf00cc425174f32afc2c13f94bf6fcb96c87"
    },
    "encoded": "0x821c71dc6eceb8c412faf525df599ffeb9b576bb83836862f7c6d2bf3817f7aeab54e61a59de9271cf657d72cc1fed2256d52d003f3ca02ad8e4071826370000fffffffffffffffffffffffffff1d38d565f73f2bb8b6566354cf4080bf37e850000000000000000000000000af88ce740fb6aa140d5e7a7828bfb6755fd7f98d0ae690c13a9cefd7fdf00cc425174f32afc2c13f94bf6fcb96c870000000000",
    "digest": "0x2bea9c81bb7324309e6659333720bcd45837c9360578495badf83b04d2c602c7"
  },
  {
    "name": "random-113",
    "domain": {
      "version": "40.24.13",
      "verifyingContract": "0xc246f6e3450948c0f556d212e3129013f3bbdf3f",
      "salt": "0x0c5313fdf2e387a82d3e2ce3eda9de53e5c65bfea57db445206b3a4532fc9d10"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "string"
        },
        {
          "name": "param3",
          "type": "int200"
        },
        {
          "name": "param4",
          "type": "bool"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": "Moo é🚀éé 🚀 🚀 🚀🚀é",
      "param3": "-58887618035548045232392023063198065294192444334212910225231",
      "param4": false,
      "param5": true
    },
    "encoded": "0xa161771f2f5479ff0f53bcfbb589145f09ab64fa5e603ddd44010178ec5e3f62d5e9200f0ca4e5342abc1609bb3d7f8a1d820568d292e810a5b38eff5cf8c2f8fffffffffffffff69e6094a73803f15dc86478bdaeca4e2c460355eaee2ee8b100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001",
    "digest": "0xca0aeafff982a7caa90778ef79c02370f41d7d3c118d6f0674db47aa844dcb53"
  },
  {
    "name": "random-114",
    "domain": {
      "salt": "0x53dd66e28993d92f3726c54eebc889ee1feb5de9e6956f17916a70af94a9be8c"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "bytes23[2]"
        },
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "string"
        }
      ]
    },
    "message": {
      "param2": [
        "0xe5efc795069c358388b3f891b191fae431455542adeab9",
        "0x270b5f56338f2e2f812a703007e9b0efd6b563e140f758"
      ],
      "param4": "0x6339392fbd707f0e31c2d9069e3903c19b7d37766ae856d49d18d3d9012d313ac1803f91d08af3fd5d7534f11c6f29476ef6c7302d9f5cdb7e408ab9",
      "param5": "Moo é🚀🚀M🚀éo🚀 oé    oéé "
    },
    "encoded": "0xcbe088c466df5bc47ff7eb50eee07ae89b3ad92aa609d8de035f94d7e942142df1274645ab982ea41af65c3e80ee1ef7d1c848bcd352be42d34068c3d48695726d07a447e03c51b86b9c89ffe0fe4fb894f1082820e4a6ca78b0a32fa2d3ac3cffd3f56909e6332406c11c8e04dd583a0302d9e70ba15e08c78ebc314a6f3542",
    "digest": "0xa6298b22e1312894d0867b42c22acac11b272a64e8826554eb644f019ced7080"
  },
  {
    "name": "random-115",
    "domain": {
      "name": "Moo é🚀éM   éoo🚀🚀🚀MMMM🚀",
      "chainId": 519,
      "verifyingContract": "0xb6a9e28479e2eefe2b652cd1035e244aa631ae8b",
      "salt": "0x37afd12343de89e1a0d00825845be1fff4e39ee71c0047c70e39802a5c647e1c"
    },
    "primaryType": "Struct8",
    "types": {
      "Struct5": [
        {
          "name": "param4",
          "type": "string"
        }
      ],
      "Struct8": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "Struct5"
        },
        {
          "name": "param6",
          "type": "int64"
        },
        {
          "name": "param7",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": "0x1a23dd5b36e844d8ff6f162b51fe79f412ab64ecfc0a08f0701ab744dc0a",
      "param3": {
        "param4": "Moo é🚀o🚀é🚀🚀 🚀 oéMo"
      },
      "param6": "-7428993099217415080",
      "param7": "0xebcf5f2e21ef4078d79de76bc2136de32d78b8da45785d9320293cf88f56fdbb7ed2d99971bdc91313"
    },
    "encoded": "0xf9efb6691f7dd1e64ca5c079b4a65046ce7e9b124f0b5a82fca4df1cef20cbf7fe19a4668dfcc60d76d18f9fdb5404410f46b99cd9c46102434bcfe4b002810aa039e88b3516312fbf1a2f8ba092aadc17e7aba94dec383eac1c3f9d30cd41cfffffffffffffffffffffffffffffffffffffffffffffffff98e6ea23025154585e3ed849708604724bc345250b999c8afbbdc5d2d7d899f6b7f0306fd22804c5",
    "digest": "0x4c0c04f6ce70c4bbb681ef0ad6b6398acb8b7c6ed135e03749d01ac7581e6aaf"
  },
  {
    "name": "random-116",
    "domain": {
      "name": "Moo é🚀🚀🚀🚀M 🚀o🚀Mo🚀MMM o o ooo M🚀",
      "version": "36.49.20",
      "salt": "0x153291d7e60f50493d9bef0386f2e52efa990e8ef60f067395b548a323336f52"
    },
    "primaryType": "Struct17",
    "types": {
      "Struct11": [
        {
          "name": "param9",
          "type": "bool"
        },
        {
          "name": "param10",
          "type": "int104"
        }
      ],
      "Struct12": [
        {
          "name": "param8",
          "type": "Struct11"
        }
      ],
      "Struct14": [
        {
          "name": "param6",
          "type": "bytes12"
        },
        {
          "name": "param7",
          "type": "Struct12"
        },
        {
          "name": "param13",
          "type": "bytes27"
        }
      ],
      "Struct15": [
        {
          "name": "param3",
          "type": "bytes"
        },
        {
          "name": "param4",
          "type": "bytes21"
        },
        {
          "name": "param5",
          "type": "Struct14"
        }
      ],
      "Struct17": [
        {
          "name": "param2",
          "type": "Struct15"
        },
        {
          "name": "param16",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": "0x9be214b7b1e40a654367ce51d46d42eefa6aa7583582ad890407c9a7db193b4a23423edabd2ca74f7bff562e7666b14ff056f859623d",
        "param4": "0x70b9c3d3590df445cd2a809ff3fd39d14633ed606d",
        "param5": {
          "param6": "0xb74aa08d1da2d00b53573848",
          "param7": {
            "param8": {
              "param9": false,
              "param10": "7382596839099108206672673364998"
            }
          },
          "param13": "0x945110dc2331d4d36e6625c582a213f159fd3785e81a1ac51adfa4"
        }
      },
      "param16": "0xce845349870b816ffa1153a0d0d74a4fd43a536acba89d7800946365a8185361b43757a6c74d0bc23c99281b20fa1f21efc8f9e70260"
    },
    "encoded": "0x2404a0d0da38cc2a26c0cae1fd80a615dcead8277266a934eb557d4a2a7b7616058530b4284971e4882f70ed579c18add8c7bf057fab40370e1641f4a2c1e84f26bed6a2942cc3da8e01ab975174dc95d1634c469b28a05029e7a338f26447a5",
    "digest": "0x2859aeba18c02d3b96c7cac2c37cb1fc02efeb93bc0162e93cf849f24fc48ec0"
  },
  {
    "name": "random-117",
    "domain": {
      "chainId": 404,
      "salt": "0xca3833452e02a6b4fa1ac8abc4b15c96f2d7646e05ac0dc999df4c02381fdb4a"
    },
    "primaryType": "Struct3",
    "types": {
      "Struct3": [
        {
          "name": "param2",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": "0xe298d05b8a6eee625460e7ffde7a4080b66181e2"
    },
    "encoded": "0x98edda54668461e736d24a4033f2d11540bceac48ea14c7da0fea73b8b9a55db000000000000000000000000e298d05b8a6eee625460e7ffde7a4080b66181e2",
    "digest": "0x0e9b9a6735b599e2aa2bd15b5a6b6e35ba3f28a6a7727883d8f7b63a9bb6dfc6"
  },
  {
    "name": "random-118",
    "domain": {
      "version": "29.19.11",
      "chainId": 1069
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bytes19"
        },
        {
          "name": "param3",
          "type": "uint112"
        }
      ]
    },
    "message": {
      "param2": "0xa187410677f35e34d7d2d4a67323f45587a17a",
      "param3": "2374623193016793084186176676934718"
    },
    "encoded": "0x6d5a7844c94095e64fa9ad1a945731964eeecfab4dafa5aa7d52244c21f7fabba187410677f35e34d7d2d4a67323f45587a17a000000000000000000000000000000000000000000000000000000000000007513f55b61db9e82c36d9b97b43e",
    "digest": "0x40254d9a8b1827c010a5df5a2e776142c72a8cb6ac9dca1e4e56853db63c637b"
  },
  {
    "name": "random-119",
    "domain": {
      "name": "Moo é🚀MéoM🚀Moé🚀éoM é ooMéMé🚀oéMMoM🚀éMo o 🚀 éé oéé🚀o M🚀o ",
      "version": "23.47.23",
      "chainId": 392
    },
    "primaryType": "Struct14",
    "types": {
      "Struct10": [
        {
          "name": "param7",
          "type": "bytes14[]"
        },
        {
          "name": "param9",
          "type": "string"
        }
      ],
      "Struct12": [
        {
          "name": "param4",
          "type": "bytes"
        },
        {
          "name": "param5",
          "type": "int200"
        },
        {
          "name": "param6",
          "type": "Struct10"
        },
        {
          "name": "param11",
          "type": "string"
        }
      ],
      "Struct13": [
        {
          "name": "param3",
          "type": "Struct12"
        }
      ],
      "Struct14": [
        {
          "name": "param2",
          "type": "Struct13"
        }
      ]
    },
    "message": {
      "param2": {
        "param3": {
          "param4": "0x087123d5b3662f",
          "param5": "731211289069049313617748368694424686603157878585440644275800",
          "param6": {
            "param7": [
              "0xfec28eba8cdd8454e8a263553157"
            ],
            "param9": "Moo é🚀éo🚀MM M  🚀🚀o MM🚀o🚀éo éé🚀 oé🚀o Mooéo oooMo "
          },
          "param11": "Moo é🚀é "
        }
      }
    },
    "encoded": "0x66a8655159b0710afca0f457c3bde2322122bdb9a1fea4237e6c302a129fa9c76a011fb94ca2e8ba68ca2390abc1167bab6b644ce5915ec5f1165b3ce7572375",
    "digest": "0xbb821d9f1b55a93033ab1e22aff08ea2cdbae58acb7799b89ac7f9583020c16c"
  },
  {
    "name": "random-120",
    "domain": {
      "name": "Moo é🚀é🚀é ooM oMo Mo🚀🚀ooé M🚀🚀MooMo Mé 🚀oé oo o🚀é",
      "version": "2.8.22",
      "verifyingContract": "0xd92defa9762b6708d9306f94e639013de8bd2b4e",
      "salt": "0xf2b1503c65653a66bb23b43d0b646d9920e2968aea19375f3f744ab0e2d5d3df"
    },
    "primaryType": "Struct6",
    "types": {
      "Struct6": [
        {
          "name": "param2",
          "type": "string[2][1]"
        },
        {
          "name": "param5",
          "type": "bool"
        }
      ]
    },
    "message": {
      "param2": [
        [
          "Moo é🚀ééoo🚀🚀 oo🚀éo oé🚀oMM🚀o Mooééé",
          "Moo é🚀🚀ooééoM🚀"
        ]
      ],
      "param5": false
    },
    "encoded": "0x73e644b97783bf4c80cd97dff29c383f1205915fd9399b0a95ccc9d335d190d6e3d0ef52ef1875273cf8cadc1df7b0c681dc2c124e44110285e59de2514e06680000000000000000000000000000000000000000000000000000000000000000",
    "digest": "0x9d331f60c2e243c0c380f493df01d216381cbdfd1e8726bf2d95623b966e12d4"
  },
  {
    "name": "random-121",
    "domain": {},
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "int128[3]"
        }
      ]
    },
    "message": {
      "param2": [
        "-66550637772836005297609473596561317793",
        "126159144126838849565705325832219053991",
        "95689536009933601716794034784084448784"
      ]
    },
    "encoded": "0x24a2b0a79e2564d525c2b594e1f1c880fdd6c97967ca67618b82b03a0bf5bd13a5d09323749af6f45a3a873abcb960f38df603910c925fc145e7d764cdc6bf52",
    "digest": "0xf8e39e7949d1c5fe8e6827819f30ea1e696798c6c59b8e454bd95fd251c01bea"
  },
  {
    "name": "random-122",
    "domain": {
      "name": "Moo é🚀🚀Mo éééoééé  oéMMM oM  🚀o 🚀MoMooéoMéé oo Méé éM",
      "version": "38.16.6",
      "chainId": 1155
    },
    "primaryType": "Struct9",
    "types": {
      "Struct8": [
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "string"
        },
        {
          "name": "param6",
          "type": "address"
        },
        {
          "name": "param7",
          "type": "bytes18"
        }
      ],
      "Struct9": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "Struct8"
        }
      ]
    },
    "message": {
      "param2": "0x1a97d3dd8afe04195e4cf65f6642bb9abf0e30d0",
      "param3": {
        "param4": "0x5438b331d76c3e973291921307c08d5137bccb2f",
        "param5": "Moo é🚀oooo 🚀oo🚀 oo éo🚀oééé🚀o oo🚀é🚀o Mo🚀éo🚀éoMéMMM🚀  MM 🚀é MM",
        "param6": "0xa2c5910463111798e60a5dcea5d09fa3928dd865",
        "param7": "0x38aeb5bff041e7eb1186d63e6dc85a5972fa"
      }
    },
    "encoded": "0x4dc6c24fe5adc7b222933880278854e343fff0c6e3008ff0ae0acb2676515b800000000000000000000000001a97d3dd8afe04195e4cf65f6642bb9abf0e30d0031afafd11b84538ee39d9de32f0581663dde8f1b5b8413f1693cadaf1f5f383",
    "digest": "0xcf807730a8b53a7c355704e7acd17208573fe6f07eba715f9c3eff5552130cd7"
  },
  {
    "name": "random-123",
    "domain": {
      "name": "Moo é🚀🚀🚀oé o🚀 MM🚀  éoé🚀  🚀ooéé 🚀éo🚀 é  oM🚀Moéooo  MéoéoMo",
      "verifyingContract": "0x6fb9e64197fbfffeb79e710b1786fad0adcded2a",
      "salt": "0x50e5121d17089bc449b8a20c541511a7fdd92d31a6e6f028fccd96044f12e2eb"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "address"
        }
      ]
    },
    "message": {
      "param2": true,
      "param3": "0xd1f004a769a4d83c51ef78ae86c9f45497820157"
    },
    "encoded": "0x210ade7f30d7f00dbd3bcfd9b6e33d421cb4677f314bb1d18b47c7532f4a33da0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000d1f004a769a4d83c51ef78ae86c9f45497820157",
    "digest": "0x3607930da601b81fc487c79b4c2a6a5fd546a2ff2f80e5e45693813adf27a56d"
  },
  {
    "name": "random-124",
    "domain": {
      "name": "Moo é🚀 🚀ooo éoéooMM oo🚀Mé🚀o🚀🚀ooo MoooM 🚀ééo🚀é éMéé o",
      "chainId": 737,
      "verifyingContract": "0xa67338c83e7cad895cd912fd10b293c30b93507c",
      "salt": "0x29fec8e11edc8a14fed2ebc136bb9718842edaa9fa0661f05b23adba9bbd360c"
    },
    "primaryType": "Struct11",
    "types": {
      "Struct6": [
        {
          "name": "param4",
          "type": "address"
        },
        {
          "name": "param5",
          "type": "address"
        }
      ],
      "Struct10": [
        {
          "name": "param8",
          "type": "address"
        },
        {
          "name": "param9",
          "type": "string"
        }
      ],
      "Struct11": [
        {
          "name": "param2",
          "type": "address"
        },
        {
          "name": "param3",
          "type": "Struct6"
        },
        {
          "name": "param7",
          "type": "Struct10"
        }
      ]
    },
    "message": {
      "param2": "0x289a7fc0abbf5814916b435aedd05110f990b8a8",
      "param3": {
        "param4": "0xc91643ad99f82f44075c7b2c3176d9fd070b7854",
        "param5": "0xa45759a377d7c8f1e6684c1ff727b0b33e812797"
      },
      "param7": {
        "param8": "0xfb13444aafca282020cc4a4c5fa66eeee5c9a215",
        "param9": "Moo é🚀éoo🚀 éM🚀oo  o é🚀MoMooM MoM o🚀éo🚀 Méo🚀éoo🚀 é oMé o"
      }
    },
    "encoded": "0xe41195b80dea8f516fb631cf6457d52b859a33fee20b1678715321d816e04f34000000000000000000000000289a7fc0abbf5814916b435aedd05110f990b8a8c975b7d342e5f9bd4cece3275d900bc4463445fe2c102fc24cdd8bdd9c741af46d6c322f4335555294c4862917e57478c76ba1b8b90655a5134f7532df97e50d",
    "digest": "0x8d1983077b551e2dc3ff4d7c564c4eaf4d8ac90e5d66ff1f778bc642dc729582"
  },
  {
    "name": "random-125",
    "domain": {
      "name": "Moo é🚀MMooMo Moé",
      "version": "49.24.49",
      "verifyingContract": "0xcf398d52a18e0a6f91a16c23bae18afd490e004a"
    },
    "primaryType": "Struct4",
    "types": {
      "Struct4": [
        {
          "name": "param2",
          "type": "bool"
        },
        {
          "name": "param3",
          "type": "bytes"
        }
      ]
    },
    "message": {
      "param2": false,
      "param3": "0x40caa66524b856"
    },
    "encoded": "0x08b05ab3afcc030e7935ce6c66d5d4b79136f50d1f567b347bde3906d91197e80000000000000000000000000000000000000000000000000000000000000000f234b4abf550f95ad2b3e18a8327dfad72bafbc9c735d4d70db98855f86e4d3e",
    "digest": "0x8869dd15921fcbfb0942af0803bc4a69e79254d54aecffd8d092de03241b7b29"
  },
  {
    "name": "random-126",
    "domain": {
      "chainId": 1089
    },
    "primaryType": "Struct9",
    "types": {
      "Struct9": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "uint152[1][2]"
        },
        {
          "name": "param6",
          "type": "string"
        },
        {
          "name": "param7",
          "type": "address[1]"
        }
      ]
    },
    "message": {
      "param2": "0x3d6cac9f032d82af63c2d077790354598cd194d920dadcf9996b",
      "param3": [
        [
          "2215482091649323250149612409952168968001124083"
        ],
        [
          "3720428939728345178604370629051737310101916132"
        ]
      ],
      "param6": "Moo é🚀o ééo🚀🚀  M🚀éo🚀🚀o🚀éé oéo🚀o🚀🚀oo  éoMé🚀o 🚀éoéMM",
      "param7": [
        "0xc8ce8e423057eb465576542851c8ae163f44bef2"
      ]
    },
    "encoded": "0xae9a402c7fe6b3d9bde74954593223cd4c7c61f3764929e780ca44432ba4edf88ebaa4befe0af4b10f9ff1d424dc9f2e501c9349db90511b8fc2ae5be855444f4c981d388229b9d3b092a114e1ab19340cd5ea397c66da5afc0bf366562778ba45cee17bca9a453477906b4710d48e03be64fbe1527a2a76f4c454afdec7e47587b1d2abb5f508f09df8e2d9dafbaa5dd87e71487b42b75e4b5a7d89feebfbc2",
    "digest": "0xdbf3e30a06348c3a82df230158a8d3fe7be0948ba7e7e482eacdc44cae526ff9"
  },
  {
    "name": "random-127",
    "domain": {
      "name": "Moo é🚀",
      "version": "42.13.26"
    },
    "primaryType": "Struct13",
    "types": {
      "Struct8": [
        {
          "name": "param4",
          "type": "uint40"
        },
        {
          "name": "param5",
          "type": "bytes"
        },
        {
          "name": "param6",
          "type": "string[]"
        }
      ],
      "Struct13": [
        {
          "name": "param2",
          "type": "bytes"
        },
        {
          "name": "param3",
          "type": "Struct8"
        },
        {
          "name": "param9",
          "type": "address"
        },
        {
          "name": "param10",
          "type": "bytes[2][]"
        }
      ]
    },
    "message": {
      "param2": "0xeed140f7e6f2069c90466326aca3d6c3af16",
      "param3": {
        "param4": "934183269602",
        "param5": "0xa941fdd7a8fe8bfed7614a3a7ce12d949025684e32ab78ab621caa",
        "param6": []
      },
      "param9": "0x219b81e0367f33c3face28f7ca0f98f42a3aad3f",
      "param10": [
        [
          "0xe0a9f45f1a48a64f182328",
          "0xd18e3c88f7b41cdb54f9a02dec1f9f2138b6c4f3718241bec86692e6912e4f3bdae4e15c968065966fc4c6"
        ]
      ]
    },
    "encoded": "0xec4d8bc63ac053b4abb7da4dcf5f9d853222e50f2cf3a7a70102a4ccf963484724c38815168dfc92aea0b45d4da4e474a0cccad6525ff2fa8584df0f4add65567a1e9576f0b9eccfba97fa5a64cec39eafe610e076674eeb749db12c47055f87000000000000000000000000219b81e0367f33c3face28f7ca0f98f42a3aad3f771f547647235bc1319baeaa2a6b4c3a394d0fee465d0d44fe7f3e6cc9cbf7d0",
    "digest": "0x800e34308adad5c2fb5a176196e58c026d3e7e8a0485bc3f83f5f552bcf7e8aa"
  },
  {
    "name": "EIP712 example",
    "domain": {
      "name": "Ether Mail",
      "version": "1",
      "chainId": 1,
      "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
    },
    "primaryType": "Mail",
    "types": {
      "Person": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "wallet",
          "type": "address"
        }
      ],
      "Mail": [
        {
          "name": "from",
          "type": "Person"
        },
        {
          "name": "to",
          "type": "Person"
        },
        {
          "name": "contents",
          "type": "string"
        }
      ]
    },
    "message": {
      "from": {
        "name": "Cow",
        "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
      },
      "to": {
        "name": "Bob",
        "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
      },
      "contents": "Hello, Bob!"
    },
    "encoded": "0xa0cedeb2dc280ba39b857546d74f5549c3a1d7bdc2dd96bf881f76108e23dac2fc71e5fa27ff56c350aa531bc129ebdf613b772b6604664f5d8dbe21b85eb0c8cd54f074a4af31b4411ff6a60c9719dbd559c221c8ac3492d9d872b041d703d1b5aadf3154a261abdd9086fc627b61efca26ae5702701d05cd2305f7c52a2fc8",
    "digest": "0xbe609aee343fb3c4b28e1df9e632fca64fcfaede20f02e86244efddf30957bd2",
    "privateKey": "0xc85ef7d79691fe79573b1a7064c19c1a9819ebdbd1faaab1a8ec92344438aaf4",
    "signature": "0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b6f72307f996231605b915621c"
  },
  {
    "name": "Boundary values",
    "domain": {},
    "primaryType": "Values",
    "types": {
      "Values": [
        {
          "name": "uint8_0",
          "type": "uint8"
        },
        {
          "name": "uint8_1",
          "type": "uint8"
        },
        {
          "name": "uint8_128",
          "type": "uint8"
        },
        {
          "name": "uint8_255",
          "type": "uint8"
        },
        {
          "name": "int8_0",
          "type": "int8"
        },
        {
          "name": "int8__1",
          "type": "int8"
        },
        {
          "name": "int8_1",
          "type": "int8"
        },
        {
          "name": "int8__128",
          "type": "int8"
        },
        {
          "name": "int8_127",
          "type": "int8"
        },
        {
          "name": "uint256_0",
          "type": "uint256"
        },
        {
          "name": "uint256_1",
          "type": "uint256"
        },
        {
          "name": "uint256_max",
          "type": "uint256"
        },
        {
          "name": "int256_0",
          "type": "int256"
        },
        {
          "name": "int256__1",
          "type": "int256"
        },
        {
          "name": "int256_1",
          "type": "int256"
        },
        {
          "name": "int256_min",
          "type": "int256"
        },
        {
          "name": "int256_max",
          "type": "int256"
        }
      ]
    },
    "message": {
      "uint8_0": 0,
      "uint8_1": 1,
      "uint8_128": 128,
      "uint8_255": 255,
      "int8_0": 0,
      "int8__1": -1,
      "int8_1": 1,
      "int8__128": -128,
      "int8_127": 127,
      "uint256_0": 0,
      "uint256_1": 1,
      "uint256_max": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "int256_0": 0,
      "int256__1": -1,
      "int256_1": 1,
      "int256_min": "-57896044618658097711785492504343953926634992332820282019728792003956564819968",
      "int256_max": "57896044618658097711785492504343953926634992332820282019728792003956564819967"
    },
    "encoded": "0x8741c0ed2315d7f1e3d172dbaaa66ea9e06243d7597be91b73f4405f3abf7e4300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000ff0000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "digest": "0xeb70b9bb3a73fca05cd009e6a56bd7bb76bb034b47cf809378d797a75256e090"
  }
]

const typedData = {
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' }
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' }
    ],
  },
  primaryType: 'Mail',
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1n,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },
  message: {
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
} as const;

const typedDatas = {
  basic: {
    primaryType: 'Mail',
    domain: {
      name: 'Ether Mail',
      version: '1',
      chainId: 1,
      verifyingContract: '0x0000000000000000000000000000000000000000',
    },
    types: {
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' },
      ],
    },
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  },
  complex: {
    primaryType: 'Mail',
    domain: {
      name: 'Ether Mail 🥵',
      version: '1.1.1',
      chainId: 1,
      verifyingContract: '0x0000000000000000000000000000000000000000',
    },
    types: {
      Name: [
        { name: 'first', type: 'string' },
        { name: 'last', type: 'string' },
      ],
      Person: [
        { name: 'name', type: 'Name' },
        { name: 'wallet', type: 'address' },
        { name: 'favoriteColors', type: 'string[3]' },
        { name: 'foo', type: 'uint256' },
        { name: 'age', type: 'uint8' },
        { name: 'isCool', type: 'bool' },
      ],
      Mail: [
        { name: 'timestamp', type: 'uint256' },
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' },
        { name: 'hash', type: 'bytes' },
      ],
    },
    message: {
      timestamp: 1234567890n,
      contents: 'Hello, Bob! 🖤',
      hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      from: {
        name: {
          first: 'Cow',
          last: 'Burns',
        },
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        age: 69,
        foo: 123123123123123123n,
        favoriteColors: ['red', 'green', 'blue'],
        isCool: false,
      },
      to: {
        name: { first: 'Bob', last: 'Builder' },
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        age: 70,
        foo: 123123123123123123n,
        favoriteColors: ['orange', 'yellow', 'green'],
        isCool: true,
      },
    },
  },
} as const


test("eip-712", async ({ test }) => {
  assert(viem.hashTypedData(typedData) === ZeroHexString.from(Base16.get().encodeOrThrow(TypedData.hashOrThrow(typedData))))
  assert(viem.hashTypedData(typedDatas.basic) === ZeroHexString.from(Base16.get().encodeOrThrow(TypedData.hashOrThrow(typedDatas.basic))))
  assert(viem.hashTypedData(typedDatas.complex) === ZeroHexString.from(Base16.get().encodeOrThrow(TypedData.hashOrThrow(typedDatas.complex))))

  for (let i = 0; i < data.length; i++)
    assert(viem.hashTypedData(data[i] as any) === ZeroHexString.from(Base16.get().encodeOrThrow(TypedData.hashOrThrow(data[i] as any))))

  return
})