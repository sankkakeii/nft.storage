# Changelog

### [2.11.2](https://www.github.com/nftstorage/nft.storage/compare/api-v2.11.1...api-v2.11.2) (2021-12-31)


### Bug Fixes

* error code for empty multipart data ([#1009](https://www.github.com/nftstorage/nft.storage/issues/1009)) ([ba7d70b](https://www.github.com/nftstorage/nft.storage/commit/ba7d70ba01537b5840bb06a8f0187478d7eac70b))


### Changes

* add METAPLEX_AUTH_TOKEN to constants.js ([#924](https://www.github.com/nftstorage/nft.storage/issues/924)) ([35cfc16](https://www.github.com/nftstorage/nft.storage/commit/35cfc1621f8ff0db642736cbb0a82228d3a8d5ed))
* **api:** update postgrest docker image to v9.0.0 ([#970](https://www.github.com/nftstorage/nft.storage/issues/970)) ([6101535](https://www.github.com/nftstorage/nft.storage/commit/6101535aba5ce1953c085f72d7520154da843b4f))
* update pgrest to v9 ([#984](https://www.github.com/nftstorage/nft.storage/issues/984)) ([8fc8c45](https://www.github.com/nftstorage/nft.storage/commit/8fc8c4554763b0f921d3dbcacbe4961c9b656aae))

### [2.11.1](https://www.github.com/nftstorage/nft.storage/compare/api-v2.11.0...api-v2.11.1) (2021-12-09)


### Bug Fixes

* remove dagcargo materialized views ([#922](https://www.github.com/nftstorage/nft.storage/issues/922)) ([3fe698f](https://www.github.com/nftstorage/nft.storage/commit/3fe698f9579c7f3eaa5c12ee68621953dca9f62e))


### Changes

* wrangler.toml setup for dev env ([#897](https://www.github.com/nftstorage/nft.storage/issues/897)) ([9968274](https://www.github.com/nftstorage/nft.storage/commit/9968274a98959ac508f65a0a04026c8cf1adf43e))

## [2.11.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.10.0...api-v2.11.0) (2021-12-07)


### Features

* add marketplace logos ([#840](https://www.github.com/nftstorage/nft.storage/issues/840)) ([f02ee96](https://www.github.com/nftstorage/nft.storage/commit/f02ee9648bbb284399b00c0d11e3445166b95bbf))
* add metaplex upload route ([#743](https://www.github.com/nftstorage/nft.storage/issues/743)) ([160b6a1](https://www.github.com/nftstorage/nft.storage/commit/160b6a178328c0d9fa9d1b04f6c8a7bccc132901))
* add pin composite pinned at idx ([#789](https://www.github.com/nftstorage/nft.storage/issues/789)) ([a2f4f71](https://www.github.com/nftstorage/nft.storage/commit/a2f4f71738a21567767d4f3daf0f1eceae088320))
* add X-Client header ([#849](https://www.github.com/nftstorage/nft.storage/issues/849)) ([e8f7bed](https://www.github.com/nftstorage/nft.storage/commit/e8f7bed8953a6894421f1a72105d7775b4e72f2e))
* blog ([#838](https://www.github.com/nftstorage/nft.storage/issues/838)) ([ad1aa99](https://www.github.com/nftstorage/nft.storage/commit/ad1aa99733f7faf00128e20ee481eef89043631b))
* improve sentry github integration ([#900](https://www.github.com/nftstorage/nft.storage/issues/900)) ([51921ff](https://www.github.com/nftstorage/nft.storage/commit/51921ffb3e203e528550194d4af7ead068954f5f))
* seo optimization ([#765](https://www.github.com/nftstorage/nft.storage/issues/765)) ([d4a650c](https://www.github.com/nftstorage/nft.storage/commit/d4a650c7e8794504f697684018f3849c98357923))


### Bug Fixes

* postgres set max parallel workers per gather to 8 ([#863](https://www.github.com/nftstorage/nft.storage/issues/863)) ([2d7cc61](https://www.github.com/nftstorage/nft.storage/commit/2d7cc61a1da3d707b544c5b6bbd85317bd74c40b))
* remove temporary migration table ([#848](https://www.github.com/nftstorage/nft.storage/issues/848)) ([49d799b](https://www.github.com/nftstorage/nft.storage/commit/49d799b457b324935c63cff11e047b00064b530a))
* use custom error types for metaplex errors ([#895](https://www.github.com/nftstorage/nft.storage/issues/895)) ([32d3362](https://www.github.com/nftstorage/nft.storage/commit/32d3362ba84e922bd2bf38fa985a169c01af83e2))


### Changes

* update licences to dual mit and apache ([#909](https://www.github.com/nftstorage/nft.storage/issues/909)) ([307a8e2](https://www.github.com/nftstorage/nft.storage/commit/307a8e20526bef0f3ac516eb60fcd4fd82a0d65e))

## [2.10.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.9.0...api-v2.10.0) (2021-11-16)


### Features

* remove kv code, update deps and improve client docs ([#714](https://www.github.com/nftstorage/nft.storage/issues/714)) ([22c4e50](https://www.github.com/nftstorage/nft.storage/commit/22c4e507c527d20d9a0587bee0380ea3471f45fe))


### Bug Fixes

* add content_cid index on upload table ([#788](https://www.github.com/nftstorage/nft.storage/issues/788)) ([5deb30b](https://www.github.com/nftstorage/nft.storage/commit/5deb30b9acb0033747cfd4c0b259f1d33e082129))
* cluster local add threshold ([#770](https://www.github.com/nftstorage/nft.storage/issues/770)) ([45a2147](https://www.github.com/nftstorage/nft.storage/commit/45a2147c4f836ef4e508286df1367220f03bb890))


### Changes

* add local env for yusef to wrangler.toml ([#757](https://www.github.com/nftstorage/nft.storage/issues/757)) ([0911b34](https://www.github.com/nftstorage/nft.storage/commit/0911b34935c645789c8d720cf231e931ee3ff7e0))
* get DB client from route context ([#638](https://www.github.com/nftstorage/nft.storage/issues/638)) ([a719fd9](https://www.github.com/nftstorage/nft.storage/commit/a719fd97b0bc1216a170621ac0482b3ee82f69f4))

## [2.9.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.8.2...api-v2.9.0) (2021-10-29)


### Features

* switch to ipfs cluster 2 ([#702](https://www.github.com/nftstorage/nft.storage/issues/702)) ([4c2fd56](https://www.github.com/nftstorage/nft.storage/commit/4c2fd569a6db53ee559f21e0bd6b208b35882dd0))


### Bug Fixes

* **api:** fix ts match in the upload function ([#683](https://www.github.com/nftstorage/nft.storage/issues/683)) ([c7bc88b](https://www.github.com/nftstorage/nft.storage/commit/c7bc88b9cb6bebc2e1c21c823d0f7822f8909cac))

### [2.8.2](https://www.github.com/nftstorage/nft.storage/compare/api-v2.8.1...api-v2.8.2) (2021-10-26)


### Bug Fixes

* store API for files that contain directories ([#678](https://www.github.com/nftstorage/nft.storage/issues/678)) ([4dc37c6](https://www.github.com/nftstorage/nft.storage/commit/4dc37c698db6f8c7390ea953067e0e891b3856f3))

### [2.8.1](https://www.github.com/nftstorage/nft.storage/compare/api-v2.8.0...api-v2.8.1) (2021-10-26)


### Changes

* improve error message for [#646](https://www.github.com/nftstorage/nft.storage/issues/646) ([#674](https://www.github.com/nftstorage/nft.storage/issues/674)) ([a556e45](https://www.github.com/nftstorage/nft.storage/commit/a556e45ceae190a9130aeee6cc91269360afc18e))

## [2.8.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.7.4...api-v2.8.0) (2021-10-25)


### Features

* indexes for slow queries ([#649](https://www.github.com/nftstorage/nft.storage/issues/649)) ([8862fce](https://www.github.com/nftstorage/nft.storage/commit/8862fce9eb56649ae806ad9919b508e033c0ca02))


### Bug Fixes

* **api:** update ipfs-cluster dep to fix auth issue ([43d783e](https://www.github.com/nftstorage/nft.storage/commit/43d783e8d42acf72651bb3c7ae61109b8791aee3))

### [2.7.4](https://www.github.com/nftstorage/nft.storage/compare/api-v2.7.3...api-v2.7.4) (2021-10-25)


### Bug Fixes

* car uploads from store endpoint ([#667](https://www.github.com/nftstorage/nft.storage/issues/667)) ([a65daca](https://www.github.com/nftstorage/nft.storage/commit/a65dacad083a9c68a3ba1b240277948251041164))
* update links to moved repo ([#650](https://www.github.com/nftstorage/nft.storage/issues/650)) ([df94aaa](https://www.github.com/nftstorage/nft.storage/commit/df94aaa8f1ec1a2e7d60a258a90758b2df630c9a))

### [2.7.3](https://www.github.com/nftstorage/nft.storage/compare/api-v2.7.2...api-v2.7.3) (2021-10-20)


### Bug Fixes

* disallow delete another users key ([#641](https://www.github.com/nftstorage/nft.storage/issues/641)) ([f53c223](https://www.github.com/nftstorage/nft.storage/commit/f53c22318fabc9447f8427eff991220c5b865107))
* pin list filtering by status ([#640](https://www.github.com/nftstorage/nft.storage/issues/640)) ([612c824](https://www.github.com/nftstorage/nft.storage/commit/612c82440ff70ebe29ebd5deec1e4dd4a9d0009d))

### [2.7.2](https://www.github.com/nftstorage/nft.storage/compare/api-v2.7.1...api-v2.7.2) (2021-10-15)


### Bug Fixes

* prometheus metrics tag syntax ([1721e1d](https://www.github.com/nftstorage/nft.storage/commit/1721e1d20943f4f4c1157cccbbad36160f19f4bf))
* remove temporary backdoor routes ([#611](https://www.github.com/nftstorage/nft.storage/issues/611)) ([e1ea7b1](https://www.github.com/nftstorage/nft.storage/commit/e1ea7b19d9346ae08a02e987599559f5a826cdbd))
* test fixtures ([7eda172](https://www.github.com/nftstorage/nft.storage/commit/7eda172ff25285dde234cde1b665e223ec49b6c5))

### [2.7.1](https://www.github.com/nftstorage/nft.storage/compare/api-v2.7.0...api-v2.7.1) (2021-10-14)


### Bug Fixes

* metrics exposition format ([#614](https://www.github.com/nftstorage/nft.storage/issues/614)) ([242cd3a](https://www.github.com/nftstorage/nft.storage/commit/242cd3ab1bbf459281e9febc506fd76be612a5a8))

## [2.7.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.6.0...api-v2.7.0) (2021-10-14)


### Features

* add indexes to updated_at fields ([#598](https://www.github.com/nftstorage/nft.storage/issues/598)) ([d4f110a](https://www.github.com/nftstorage/nft.storage/commit/d4f110a03eac53b2b9d921d60da8cd0ababb09c6))
* temporary API backdoor endpoints ([#605](https://www.github.com/nftstorage/nft.storage/issues/605)) ([e02e371](https://www.github.com/nftstorage/nft.storage/commit/e02e371964f68d8cdf3196eca47d0d657aaec50b))


### Bug Fixes

* db diagram link ([b234556](https://www.github.com/nftstorage/nft.storage/commit/b2345563c27cdf7052e2d62ca0865f397d96014e))
* do not allow delete of deleted NFT ([#581](https://www.github.com/nftstorage/nft.storage/issues/581)) ([fca5bde](https://www.github.com/nftstorage/nft.storage/commit/fca5bde2f008328deffce3dd01e420e26e4a02eb))
* dont delete uploads ([#551](https://www.github.com/nftstorage/nft.storage/issues/551)) ([b797f9c](https://www.github.com/nftstorage/nft.storage/commit/b797f9c7e9cbf770b29829959b10e0bb12ee555e))
* tests ([d294432](https://www.github.com/nftstorage/nft.storage/commit/d294432cc44c48af78bc1c3673ac61075a18710c))
* throw an error for missing env vars ([#576](https://www.github.com/nftstorage/nft.storage/issues/576)) ([2dddc13](https://www.github.com/nftstorage/nft.storage/commit/2dddc130270db745e1dd0115085f6ff90f9d54f1))


### Changes

* move v1 to root (minimal changes) ([#534](https://www.github.com/nftstorage/nft.storage/issues/534)) ([c60cf6c](https://www.github.com/nftstorage/nft.storage/commit/c60cf6c06dc5812f980152fcb9b451a84cf9aba7))

## [2.6.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.5.0...api-v2.6.0) (2021-10-11)


### Features

* migration events in postgres ([#554](https://www.github.com/nftstorage/nft.storage/issues/554)) ([391a9e5](https://www.github.com/nftstorage/nft.storage/commit/391a9e54d7b8d523364f61d3cc6c688354b23d53))


### Bug Fixes

* set range on metrics queries ([#572](https://www.github.com/nftstorage/nft.storage/issues/572)) ([08ef4de](https://www.github.com/nftstorage/nft.storage/commit/08ef4dec7524dd5bf8cdb290c7e61e9e52ea787d))

## [2.5.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.4.0...api-v2.5.0) (2021-10-08)


### Features

* add new cluster enum and nothing else ([#509](https://www.github.com/nftstorage/nft.storage/issues/509)) ([cc4ed28](https://www.github.com/nftstorage/nft.storage/commit/cc4ed281a848af695fdb8f729f24796f7051b8b0))
* add prom metrics endpoint generated from postgres data ([#495](https://www.github.com/nftstorage/nft.storage/issues/495)) ([a99df3d](https://www.github.com/nftstorage/nft.storage/commit/a99df3ddc4f7f056a83758548992ed98e474b59a))
* add PSA error handler ([#512](https://www.github.com/nftstorage/nft.storage/issues/512)) ([50daf83](https://www.github.com/nftstorage/nft.storage/commit/50daf83acea8d41ee174e28fa5827d61d3782dd4))
* **api:** deals and pin status ([#455](https://www.github.com/nftstorage/nft.storage/issues/455)) ([692d514](https://www.github.com/nftstorage/nft.storage/commit/692d5140ad323b27d431f59a189a3a6cfc56ba6c)), closes [#459](https://www.github.com/nftstorage/nft.storage/issues/459)
* cron v1 ([#496](https://www.github.com/nftstorage/nft.storage/issues/496)) ([fa850a5](https://www.github.com/nftstorage/nft.storage/commit/fa850a5344f23cf8f520c85e982345b59f26f6b9))
* db error reporting ([#510](https://www.github.com/nftstorage/nft.storage/issues/510)) ([d9d8579](https://www.github.com/nftstorage/nft.storage/commit/d9d8579f0eace2ffefb0e13921f55a544f27965a))
* db migration pipeline ([#491](https://www.github.com/nftstorage/nft.storage/issues/491)) ([56b8697](https://www.github.com/nftstorage/nft.storage/commit/56b8697c65b9f86d1bc76b4e7c3001cffd36b87e))
* do not delete auth keys ([#539](https://www.github.com/nftstorage/nft.storage/issues/539)) ([d1b07e0](https://www.github.com/nftstorage/nft.storage/commit/d1b07e0481412759c71c91eef274b0b21aa70a64))
* maintenance mode ([#466](https://www.github.com/nftstorage/nft.storage/issues/466)) ([1627588](https://www.github.com/nftstorage/nft.storage/commit/16275886066f3530a2d79b963df2d686a6f1b7f8))
* migrate database to postgres  ([#263](https://www.github.com/nftstorage/nft.storage/issues/263)) ([ff0c919](https://www.github.com/nftstorage/nft.storage/commit/ff0c919ad63f8452357ff5f23b3f1ecd24880c86))


### Bug Fixes

* add CORS headers to /version endpoint ([#545](https://www.github.com/nftstorage/nft.storage/issues/545)) ([08654e9](https://www.github.com/nftstorage/nft.storage/commit/08654e9e950c4784746ab23873bfe2afe835c3fb))
* db client usage in node.js and avoid duplicate cids ([#522](https://www.github.com/nftstorage/nft.storage/issues/522)) ([6d09ae7](https://www.github.com/nftstorage/nft.storage/commit/6d09ae73aa1c79ff1d03272a803f0cde9ad1a0de))
* db config documentation and test fixes ([#471](https://www.github.com/nftstorage/nft.storage/issues/471)) ([a1911f3](https://www.github.com/nftstorage/nft.storage/commit/a1911f31f1079cf29f74192da4cebe576c069e77))
* do not swallow error ([6733512](https://www.github.com/nftstorage/nft.storage/commit/673351273c99c4e8997a35573ed65ea9860ef8f7))
* min, max and default limits for v1 list endpoints ([#493](https://www.github.com/nftstorage/nft.storage/issues/493)) ([64cd15d](https://www.github.com/nftstorage/nft.storage/commit/64cd15daa74f834338057f087a6ebbe52c85a354))
* normalize CAR file content CID ([#549](https://www.github.com/nftstorage/nft.storage/issues/549)) ([0115443](https://www.github.com/nftstorage/nft.storage/commit/0115443fde4d44396498ffbbcda8446647498f78))
* remove nft index cron job ([#453](https://www.github.com/nftstorage/nft.storage/issues/453)) ([a93433c](https://www.github.com/nftstorage/nft.storage/commit/a93433c56ba303e10b7c594d83b02c7c6af1a1ec))
* remove usage_model from top level ([#463](https://www.github.com/nftstorage/nft.storage/issues/463)) ([9d9391d](https://www.github.com/nftstorage/nft.storage/commit/9d9391d1a9d9eded82bdd834e70bcfcce0024770))
* retain correct value for NFT type ([#548](https://www.github.com/nftstorage/nft.storage/issues/548)) ([ad597d0](https://www.github.com/nftstorage/nft.storage/commit/ad597d0eae302e1ea09f97d4b563840ab82c5986))
* retrieve upload after create ([#540](https://www.github.com/nftstorage/nft.storage/issues/540)) ([8bb9b8d](https://www.github.com/nftstorage/nft.storage/commit/8bb9b8d92360829fbaac3f0b138dd95a952b9ef2))
* use Authorization header ([79889fb](https://www.github.com/nftstorage/nft.storage/commit/79889fb2f69065e2645db99a8cbf999edd57454d))
* use pin creation date not upload creation date ([#547](https://www.github.com/nftstorage/nft.storage/issues/547)) ([5e51ebf](https://www.github.com/nftstorage/nft.storage/commit/5e51ebf43d8a6461b74701cf2b1e12a6cb4d20b0))


### Changes

* rename account table to user ([#485](https://www.github.com/nftstorage/nft.storage/issues/485)) ([a3423a1](https://www.github.com/nftstorage/nft.storage/commit/a3423a18b537d7b1accdf2ffa4d716939a7bdd2a))
* rename stored procedures ([#486](https://www.github.com/nftstorage/nft.storage/issues/486)) ([f2218dd](https://www.github.com/nftstorage/nft.storage/commit/f2218ddecf622aa7e01b7dceeefffc0fb1365d3e))
* setup countly analytics ([#432](https://www.github.com/nftstorage/nft.storage/issues/432)) ([8b90bfa](https://www.github.com/nftstorage/nft.storage/commit/8b90bfa4ba5b2a51c9f10b169e15fa217948faed))

## [2.4.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.3.1...api-v2.4.0) (2021-08-27)


### Features

* remove custom multipart parser ([#336](https://www.github.com/nftstorage/nft.storage/issues/336)) ([029e71a](https://www.github.com/nftstorage/nft.storage/commit/029e71aefc1b152a080ffb5739e4f7c2565a1e57))


### Bug Fixes

* **api:** validate CID input for pins add and replace ([#314](https://www.github.com/nftstorage/nft.storage/issues/314)) ([dd5baca](https://www.github.com/nftstorage/nft.storage/commit/dd5bacac8207c715b097e7b1bc0555742c6b8488))
* bad dag creation by store api ([#343](https://www.github.com/nftstorage/nft.storage/issues/343)) ([307e6cd](https://www.github.com/nftstorage/nft.storage/commit/307e6cd07e4b3587a404ea8fa367721f574d4e32))
* temporarily set local=true for all uploads ([f637c86](https://www.github.com/nftstorage/nft.storage/commit/f637c86a569d1fc81a481574550e71bc02fae9ac))

### [2.3.2](https://www.github.com/nftstorage/nft.storage/compare/api-v2.3.1...api-v2.3.2) (2021-08-15)


### Bug Fixes

* temporarily set local=true for all uploads ([f637c86](https://www.github.com/nftstorage/nft.storage/commit/f637c86a569d1fc81a481574550e71bc02fae9ac))

### [2.3.1](https://www.github.com/nftstorage/nft.storage/compare/api-v2.3.0...api-v2.3.1) (2021-08-11)


### Bug Fixes

* only local add files smaller then 2.5MiB ([#287](https://www.github.com/nftstorage/nft.storage/issues/287)) ([a225fa8](https://www.github.com/nftstorage/nft.storage/commit/a225fa8d1580bb7db79531bfd25c1e836103f60e))
* set stream-channels=false for cluster add ([#304](https://www.github.com/nftstorage/nft.storage/issues/304)) ([f1121d0](https://www.github.com/nftstorage/nft.storage/commit/f1121d0e75b1750e6d1a5a851d5eeed8f04cb64b))

## [2.3.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.2.2...api-v2.3.0) (2021-08-06)


### Features

* esbuild to build api and new tests ([#252](https://www.github.com/nftstorage/nft.storage/issues/252)) ([3cafc29](https://www.github.com/nftstorage/nft.storage/commit/3cafc29c0932b36421424827eca04323c26b22f9))
* improvements to the setup ([#246](https://www.github.com/nftstorage/nft.storage/issues/246)) ([6a2501f](https://www.github.com/nftstorage/nft.storage/commit/6a2501f5c340af87c1571886961920280afec249))
* update pw-test so its easier to run sw tests ([#240](https://www.github.com/nftstorage/nft.storage/issues/240)) ([5737ffc](https://www.github.com/nftstorage/nft.storage/commit/5737ffcb0323e20b31fdabdd305da075b92a9047))


### Bug Fixes

* niftysave pin job failures by adopting request timeouts ([#267](https://www.github.com/nftstorage/nft.storage/issues/267)) ([0bac638](https://www.github.com/nftstorage/nft.storage/commit/0bac6385ef0417a7a3453172bf3a3ed9e664f9e6))
* temporarily locally add all uploads ([#286](https://www.github.com/nftstorage/nft.storage/issues/286)) ([f0443a5](https://www.github.com/nftstorage/nft.storage/commit/f0443a5b9baa0d6921be7ad8544ec4fd2c1e5218))

### [2.2.2](https://www.github.com/nftstorage/nft.storage/compare/api-v2.2.1...api-v2.2.2) (2021-07-06)


### Bug Fixes

* null deals ([#235](https://www.github.com/nftstorage/nft.storage/issues/235)) ([aad1259](https://www.github.com/nftstorage/nft.storage/commit/aad125902fe4f8e6b5144ed52e60be3988f24e1a))

### [2.2.1](https://www.github.com/nftstorage/nft.storage/compare/api-v2.2.0...api-v2.2.1) (2021-06-22)


### Bug Fixes

* chunking issues ([#203](https://www.github.com/nftstorage/nft.storage/issues/203)) ([d990a20](https://www.github.com/nftstorage/nft.storage/commit/d990a207fd99aa74bde56a5d6b79e5027cf42287))
* cluster status text for queued pin ([f0f9553](https://www.github.com/nftstorage/nft.storage/commit/f0f955305e9d65b6993f04a18b30673e5f8bc5e6))
* initial pin status ([1a4d292](https://www.github.com/nftstorage/nft.storage/commit/1a4d29236bb4f76ec7689e4b9b6ba7f02072d8cd))
* test expectations for new initial pin status ([ddaf11f](https://www.github.com/nftstorage/nft.storage/commit/ddaf11fd440324a0da8cc0eca80203e10cd233ed))

## [2.2.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.1.0...api-v2.2.0) (2021-06-17)


### Features

* support CAR file uploads ([#178](https://www.github.com/nftstorage/nft.storage/issues/178)) ([c7e5130](https://www.github.com/nftstorage/nft.storage/commit/c7e5130022ac1d0db13269582bdfa5e60d41bdea))

## [2.1.0](https://www.github.com/nftstorage/nft.storage/compare/api-v2.0.0...api-v2.1.0) (2021-05-26)


### Features

* cron job to ensure our pins are sent to Pinata ([#145](https://www.github.com/nftstorage/nft.storage/issues/145)) ([d071ca4](https://www.github.com/nftstorage/nft.storage/commit/d071ca4bb0921f9a663f8024a0e0e8a0fc7de0dd))

## [2.0.0](https://www.github.com/nftstorage/nft.storage/compare/api-v1.1.0...api-v2.0.0) (2021-05-18)


### ⚠ BREAKING CHANGES

* update cluster client for consistent hashes with IPFS

### Bug Fixes

* update cluster client for consistent hashes with IPFS ([5bc3c67](https://www.github.com/nftstorage/nft.storage/commit/5bc3c67b5310b54fd4fbc81bd313cccf21a68166))


### Reverts

* collection of followup metrics ([#133](https://www.github.com/nftstorage/nft.storage/issues/133)) ([b144224](https://www.github.com/nftstorage/nft.storage/commit/b144224ace1e67ba415206a6a3d9fcb071fbf878))

## [1.1.0](https://www.github.com/nftstorage/nft.storage/compare/api-v1.0.0...api-v1.1.0) (2021-05-17)


### Features

* **metrics:** collect and report total followups ([8d43e0f](https://www.github.com/nftstorage/nft.storage/commit/8d43e0fb6f4b6185df805330a4bd71d947e00586))
* move metrics cron jobs to github actions ([#131](https://www.github.com/nftstorage/nft.storage/issues/131)) ([4ab3013](https://www.github.com/nftstorage/nft.storage/commit/4ab30134173764b82d1fb1887dafcb6e8f98ef9d))


### Bug Fixes

* **metrics:** count followups not pins ([5e538d4](https://www.github.com/nftstorage/nft.storage/commit/5e538d4eb77d5a3c6793ce446ae311b737d7ab47))

## 1.0.0 (2021-05-14)


### Bug Fixes

* **api:** re-enable pinata in pin add ([ada4054](https://www.github.com/nftstorage/nft.storage/commit/ada405442be2e964f6149899869e266c2db41d60))
