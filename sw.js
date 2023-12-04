/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3333ff8861d8adc5cc3b2ce9c9113b05"],["/archives/2023/10/index.html","2462f70fe6cf30219dbcecd59a5cc960"],["/archives/2023/10/page/2/index.html","feb9791f33e19de13fa6eaa05040ba82"],["/archives/2023/11/index.html","63a568d00cae39031ac51c6652d69a7b"],["/archives/2023/index.html","e0995004d626544ffdde54841de55c3b"],["/archives/2023/page/2/index.html","81418c44e454a96233f680f62737c5f7"],["/archives/index.html","53e17291094c8826ee11399241875853"],["/archives/page/2/index.html","bb46b88cdb2e31d636c0b405bea3b614"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","f7e05bfa84eb854cf82b4e7599cdfd38"],["/categories/blog/index.html","14c4595a5e17f5ec48010923d524bc4e"],["/categories/blog/自述/index.html","40357a802e2da6339ed550248c007527"],["/categories/index.html","e22f9b0e7e7ea98c39f49d283a05d73d"],["/categories/技术/hexo/butterfly/index.html","07d3fa1e7b9adb612ca1172c0e5e5e0c"],["/categories/技术/hexo/index.html","ae8f8a64760220061cf9eb25d696da2b"],["/categories/技术/hexo/拓展/Tag-Plugins/index.html","f53339c9a8913bf89ee915829a14a6cf"],["/categories/技术/hexo/拓展/emoji/index.html","fe61bbe776a8e16fae052b3e958b29ad"],["/categories/技术/hexo/拓展/index.html","c16519ff84fee0b54f4a4d82101c4542"],["/categories/技术/index.html","ca157ea9b6323cb1480dc40907485695"],["/categories/技术/page/2/index.html","e1d5fee8692f71c3151b06dfb209ec3e"],["/categories/技术/vue3/audio/index.html","efbd4d5696b9a5246f2faf7687124bd5"],["/categories/技术/vue3/echarts/index.html","c6f68832bf92139f406426d8e6f949d3"],["/categories/技术/vue3/index.html","a54c8416a2ac207336402a86847cc441"],["/categories/技术/前端/index.html","d822910489fada357885d8f09dd5f7b8"],["/categories/技术/前端/json-server/index.html","492ba2b499cb288c0bf2d361b3cbae02"],["/categories/技术/前端/nodejs/index.html","45cc5780f02f2b964f8294466787e072"],["/categories/技术/工具/git/index.html","8b60d4d6c03af243e24dccbe3eb2fec7"],["/categories/技术/工具/index.html","3050edf9818608d5948a0a9c8ceb817a"],["/categories/随笔/index.html","7a4af579a0ca047a5d40c4e752884b6f"],["/cinemas/index.html","a5dade438d158b750b5dd5a120fee83b"],["/comic/index.html","9122f2c7d9f79a7a138910c3effd55c6"],["/comment/index.html","a844a0b28cdfb737734338b4a5c21e80"],["/css/cat.css","3f950c3710d2af2a2ad32fbd304b2fda"],["/css/custom.css","ea93a42acb787f9dd33a5502ce2248b8"],["/css/font.css","5e5596be1fa040a01c799cc55f0f3638"],["/css/index.css","9b7c2591d6350902d926f9cc724570e2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/index.html","d4bc14dc2aa846aac59430a664e72071"],["/effects/index.html","e1388ace36d240d563947968d774be0e"],["/font/iconfont.js","fd076523ba98971bc3cca741bab8fab7"],["/font/iconfont.ttf","c9bd493a9d03994ab541002d8a0d7643"],["/font/iconfont.woff","d80c9c4057d7b226072508d93312801c"],["/font/iconfont.woff2","ddbaec6138b7f86ca6239c801b43f8d5"],["/games/index.html","7de116324e5ab19ac1645cff76bccb7a"],["/img/404.jpg","cd470f4dd19f20298805f66d44f14f74"],["/img/alipay.jpg","bed5337b6ebca4e6e38397d281c01af5"],["/img/avatar.jpg","bd82737d3bb8b0670c679237a60cb9b8"],["/img/background.jpg","df5317d1d1ebd751e3c414383275d1ef"],["/img/bg.jpg","7bc649f354532feba28c3a730e80b257"],["/img/cat.jpg","012fe24372982b585c358bbeee637cde"],["/img/cat.png","e87fd0176be93b8d8b155a2c7f7eaada"],["/img/favicon_01.png","572067a097743a2394246b889bd5f1cb"],["/img/favicon_1.png","f655288fa7b6f02db108a654d52b55fa"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.jpg","d8dcb83c8505a7b5e9f7595587fb3cb8"],["/img/img1.png","b1f0a37431ac120d75200bc15256acd9"],["/img/img10.jpg","4b2d022a0f5fd208d12c51cdb7c4dc13"],["/img/img11.jpg","120c4b6cffbf5a6eb436fc28ee1c818e"],["/img/img12.jpg","41c8536b81af46511fd0d79139eeae54"],["/img/img13.jpg","9283c2ace68fad9174505fd265f834d0"],["/img/img14.jpg","3d8862b394f9dc52fc266d5a23b9f709"],["/img/img15.jpg","6e1c4b8389861f4fbeb78846aa531bec"],["/img/img16.jpg","d3170190bebe51dfabdd3aa0f95b0c4d"],["/img/img17.jpg","ae61e0ef3cae124b27103b6a9399b710"],["/img/img18.jpg","2e81d85097e19724e039d7913324af4f"],["/img/img19.jpg","258b85d5875a28d43a2dc35291d185a6"],["/img/img2.jpg","58107edacc6f0f41c0ab3c212e8f4a82"],["/img/img2.png","ac3b72e42be310719517ee2845a165e7"],["/img/img20.jpg","0023e6ac47dcd654d74d93fe924130fa"],["/img/img21.jpg","e266a00a8f07f7a2ffecf59e393971e4"],["/img/img22.jpg","0dd484d0cf56c754f6386861a9a0b71a"],["/img/img23.jpg","b618e39c563a38776d2e5dc293ed2273"],["/img/img24.jpg","a27c128a1b8694ff0077d4092d2d101a"],["/img/img25.jpg","7bad189b949d6ca9bf0b5758cbe28e06"],["/img/img26.jpg","81bf7ad8c4255622c469da7fa77b814d"],["/img/img27.jpg","0faeb62afc347c1d22c7c2e5ea49f1aa"],["/img/img28.jpg","95da7b1d88a219440538710eea00c486"],["/img/img29.jpg","3bf4af57e4c7e26d976772e1f2bd818a"],["/img/img3.jpg","c54885c00af5a8c6fc9a9b3c4ec8f771"],["/img/img3.png","0890df162c2ef36b22ac95b91cf19226"],["/img/img30.jpg","80a1dabd2b30da96572c95b04195e4ea"],["/img/img31.jpg","ed281ccc6771deb8bab70603d0acd4a3"],["/img/img32.jpg","39c84e73a27e9c17bced48d52cc42c3c"],["/img/img33.png","2519629722e0f018095f3e535d30d9a7"],["/img/img34.jpg","6193d1aab59b356aefb7e497c8201de7"],["/img/img35.jpg","0c35a987dd32b5b019ae3f2f4da367db"],["/img/img36.jpg","502c4875e203c5b93fa9ad9b66cfc97f"],["/img/img37.jpg","9a2dc02fba8403b0f8829014fa6e3fc1"],["/img/img38.jpg","7e24e0066387f22817ea41c9fd99a1c6"],["/img/img39.jpg","7c7ee84ba267ebc48953bfd95e11daf4"],["/img/img4.jpg","be443a663fc217202b655d2d47d58d88"],["/img/img4.png","8379c9f5b122f17459aab2db244139a5"],["/img/img40.jpg","d8d2b33cad66db49a2ac0c5f8eb95deb"],["/img/img41.jpg","b4b590e410830811ed2c9a3238882be8"],["/img/img42.jpg","fa7391b1d047bc9100aa0a8db9f576a6"],["/img/img43.jpg","52068e3c3f1fe6de33328b57976d6639"],["/img/img44.jpg","aa218b633208889f6e455a886bc97d5c"],["/img/img45.jpg","dfeac30fff1b4fcec3843a910ccf9c8a"],["/img/img46.jpg","062f0e3f02c18cbd53c21a998596ce80"],["/img/img47.jpg","14efb60df1f209fe6ce815bbafbed24f"],["/img/img48.jpg","e0a422103e95acb4152304bf74126e8b"],["/img/img49.jpg","6e229329042a2c63350dd28dcad76fa2"],["/img/img5.jpg","fa3c5c152bfb0994f3c9fe98982fc762"],["/img/img5.png","6fa077a41636397c0740924150f6a961"],["/img/img50.jpg","32a97a0c0b07a5fd2d8b4603cf7a6e43"],["/img/img51.jpg","35c335423dc1aa433c2826ad6d7389a9"],["/img/img52.jpg","c47cc2b2554cf02dce8977d6410c826f"],["/img/img53.jpg","5daccd873ac7bc5d504b806558ba42a6"],["/img/img6.jpg","88630427d9930c8035efe66077d23e2f"],["/img/img6.png","e4b2d57c8d3ae639bee3d4872c599c8f"],["/img/img7.jpg","95da7b1d88a219440538710eea00c486"],["/img/img7.png","9f911f3d683856f5cdbd689b05c0e420"],["/img/img8.jpg","eabcb654083353f912b1eaaf11e40af7"],["/img/img8.png","f74d7610069529f2d902563f855dc2be"],["/img/img9.jpg","90472ff3f2056f02bee2465626428f86"],["/img/loading.gif","446100f374e93811b2ddf58ecd807d9a"],["/img/loading_bear.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/photo.png","23906bba0d8856b9a487b0a9cc82e9ef"],["/img/wechat.png","7bed06f9c63e08ce32484d373190774d"],["/index.html","2a973814534004853538a603a2462cf6"],["/js/cat.js","087440543f53eac4972bfcf46fbf3700"],["/js/cursor.js","da91cc955b2016458c45c345d4cbf4d1"],["/js/main.js","f0e22839c4ea8571c74a19586bf1b8aa"],["/js/sakura.js","9c126b54d02b309fc869948c566c14c4"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","245e24448735719fb13f584ba281d8fc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/life/index.html","a6f492ffe7851271ed2cef7a82c1d5f5"],["/links/index.html","8df68cb60f785bb38794ccf1dfbeea1f"],["/live2d-widget/README.en.html","6cce0019a15020407d2522622b757e8e"],["/live2d-widget/README.html","8d4c1c06da07715f1b2a3573dd66014f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9430aa3a7969a6c47c3d6c2de367b761"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget/live2d.min.js","0b4f2d81454d2bc8b32a254ff0a97820"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","3930dc37552c425d5328530331fc616a"],["/live2d-widget/waifu.css","9863d569771c872833e54634d806f970"],["/love/index.html","293729b9bcaf2dda9ee7fe37598da73a"],["/music/index.html","b49dc44f10aea25ecf080e160b1b1fb5"],["/notes/index.html","c64427f9f87ca68eb8728768c59d175f"],["/page/2/index.html","735ae11c4c54cc324713203d7e2267a4"],["/photos/CCG/index.html","525e589716f20cd22f2d56ba0e6eb83a"],["/photos/daily/index.html","ab8f624ddd307877e025b251056c5b4a"],["/photos/firefly/index.html","7ab41e18c9221288dd1d0c1d021d8fb6"],["/photos/graduate/index.html","92011c3b068f834c6507eddb2e56b1b1"],["/photos/index.html","3d4f9195b07a3fb052f87ed9e5c235c2"],["/photos/landscape/index.html","d9a7880da4db09c718de723dbc0feae1"],["/post/503377e3.html","cadf356dc0527264484d4c2ce36edcff"],["/post/6713c359.html","42669c93be8b751dc32c0c972ea53910"],["/post/73f0ace9.html","83511217113612625d5d1151a6048629"],["/post/ca8bfdf3.html","f6b15562910bcb0ee76fdf93b0790e7a"],["/post/git_command.html","ce76a829a6fd10bd4b500188a7630c2f"],["/post/git_tool.html","c3ba61cfc30e30424c24fc22053e459b"],["/post/hexo_butterfly_1.html","a3535c5415e468c955445a6123aea18d"],["/post/hexo_butterfly_2.html","896380de76b2ad245b7f5412246bf747"],["/post/hexo_butterfly_3.html","3ebfe337801ecea7ccdc9ebc708d420c"],["/post/hexo_butterfly_4.html","e5b620e2a2e925d6bb77fbe84d872f83"],["/post/hexo_butterfly_5.html","0398ce833b27052665262d35805a4738"],["/post/hexo_emoji.html","a102895cd4922e5633f63d56baa449fb"],["/post/hexo_tag_plugins.html","6d6d5a43dd04eff98ceeb6d017b8a111"],["/post/json_server.html","d9019fa522f7a065e6fe24a347fccf30"],["/post/nvm_nodejs.html","5e7f1f3715cbc6aabe4388490b9b9602"],["/post/vue_audiovisualizer.html","17e112ef308e6165687240b00c67334a"],["/post/vue_echarts.html","bc986ac3554e36645b1b2d288f963d15"],["/post_img/Git-img/git-add_cmd.png","3459e7847b3f7a97190de236f29937ce"],["/post_img/Git-img/git-config_list.png","1c97505bcdef46394194c04d170ebcd8"],["/post_img/Git-img/git-download.png","00b01b099629e70695c22234c9d8278c"],["/post_img/Git-img/git-download1.png","f7d0f0404d7cd77d5b5f08b54938e3c6"],["/post_img/Git-img/git-download2.png","fae9919a61f9ff900c870e6d6869d3e7"],["/post_img/Git-img/git-setup.png","6d8e0787e8f3e0cdd363134e02d5d29e"],["/post_img/Git-img/git-setup_bash.png","292bf6020f0ee479dbeaa071c9ef28c2"],["/post_img/Git-img/git-setup_branch.png","824d1fd9e87fe95517347313c03ca600"],["/post_img/Git-img/git-setup_choosefile.png","4edcb0d296d248af7e5566ecb55a7f62"],["/post_img/Git-img/git-setup_editor.png","1a09ad908f97b9c1f846bfec9180babb"],["/post_img/Git-img/git-setup_experimental.png","c81ec62f7149134cc053c87853404c30"],["/post_img/Git-img/git-setup_extra.png","16d75ebdeaba28f14e66d1a39444c234"],["/post_img/Git-img/git-setup_helper.png","a1c8a2fd716ea2bcb1849ca7ec731e35"],["/post_img/Git-img/git-setup_http.png","1019611e99fef7d6af747caa80e45714"],["/post_img/Git-img/git-setup_lineend.png","a87ae8f8fb2db959a910befb7b6c0a5e"],["/post_img/Git-img/git-setup_next.png","1cdd9fc85f9e11ecbe1dc8166b8dcdef"],["/post_img/Git-img/git-setup_path.png","a9a538f59d86757b5d135e12d45e0e5d"],["/post_img/Git-img/git-setup_pull.png","bc1c341f9feb57ddcfacca408ab3dc45"],["/post_img/Git-img/git-setup_selectconfig.png","5fc92b90abeb21200792ae4a9c1ac301"],["/post_img/Git-img/git-setup_selectconfig1.png","c6452c10295fe0bacb276fbb5b7382ea"],["/post_img/Git-img/git-setup_ssh.png","8306a66994f7642f69e9f74c351256e6"],["/post_img/Git-img/git-setup_success.png","d068a2d66ea8d18ea5b4cfafee97e44d"],["/post_img/Git-img/git操作流程.png","d4dfc9b4cb360300e629166456896c4c"],["/post_img/Git-img/git操作流程2.png","717f6e98bf761db9727ba415959e84f0"],["/post_img/butterfly-img/butterfly-config_rename.png","5ad2429f95db23e2232d258d9466d0f5"],["/post_img/butterfly-img/butterfly-setup_gitee.png","ea54bebc5cde1a7a31d4db8421674998"],["/post_img/butterfly-img/butterfly-setup_github.png","74b3bf5b29122419d78dad226c703c77"],["/post_img/butterfly-img/butterfly-setup_github1.png","86288f36b6157001ddb690675c3b2b8a"],["/post_img/butterfly-img/butterfly-setup_github2.png","7f97b16deb546a9810f2e59f902f24e0"],["/post_img/butterfly-img/butterfly-setup_http.png","92a2988bfaaf5b19b7b871a88f63c680"],["/post_img/butterfly-img/butterfly-setup_npm.png","66e0da24d8893dddef9534b8b21621b1"],["/post_img/butterfly-img/github-new_repo.png","88b1913b7761aaedfb21697538807433"],["/post_img/butterfly-img/github-new_repo1.png","e0173bc09d4bb7b03b40c04dd334e46a"],["/post_img/butterfly-img/github-setting_ssh.png","e0fe07989c77ae366c0e6103aaf583ab"],["/post_img/butterfly-img/github-setting_ssh1.png","e8cd43937105b480ff6956849a0b5fc9"],["/post_img/butterfly-img/github-setting_ssh2.png","1e799919d27acb1474a2a2ac3e04cbdf"],["/post_img/butterfly-img/hexo-deploy_done.png","3a0ce201073030024655ffa8ff5c58ef"],["/post_img/butterfly-img/hexo-file.png","275882b302853e6fa2f2eb829f2c1d54"],["/post_img/butterfly-img/hexo-init_home.png","004969a5535cab047b361f2343149f65"],["/post_img/butterfly-img/hexo-init_proj.png","6b87aabdad5ff97268bbe9935054189a"],["/post_img/butterfly-img/hexo-init_start.png","fad64026cbbc6a25636ff9ef3bda8f59"],["/post_img/butterfly-img/hexo-v_cmd.png","15ade7e2605068eeccf453c1ffaa8aaf"],["/post_img/butterfly-img/ssh-file.png","410cec414dd35092d5878c4ee5132c32"],["/post_img/butterfly-img/ssh生成密钥.png","9a7eb8d2f38d2d26eacbd13571fc8e9f"],["/post_img/butterfly-img/ssh验证.png","6465c030e5290c36da055df32b072069"],["/post_img/json-server/json-server-foriger.png","847c887f89b56bcaf551864d7d8a2cb9"],["/post_img/json-server/json-server-requst.png","d3e5c94dcded3452874f288fdac5a99e"],["/post_img/json-server/json-server.png","6493ffe521eacc0351dc70a960f15e0e"],["/post_img/json-server/json-server_all.png","b3a7ccaf380526bb6c493b2e56a24358"],["/post_img/json-server/json-server_compare-both.png","9c6652adfa7328d7f241ffc3af3a7ec4"],["/post_img/json-server/json-server_compare-gte.png","b3b31722b2beb06b459e436115717953"],["/post_img/json-server/json-server_compare-lte.png","f86ecd742a9a110fc9e86162983c2c7e"],["/post_img/json-server/json-server_compare-ne.png","7608a1c0a72bb384291e77d1a2a961d3"],["/post_img/json-server/json-server_deepget.png","1aa0b137f291340a60852e7f8b2f9cd6"],["/post_img/json-server/json-server_del.png","4f7b26348871e119c11e12fda5e6ecdd"],["/post_img/json-server/json-server_del1.png","72392368398419a5279609ad6fbfe682"],["/post_img/json-server/json-server_embed.png","bde76bc85ae3e4504dc899b4efaaf585"],["/post_img/json-server/json-server_embed1.png","b461044da7d4f012531242086dcce901"],["/post_img/json-server/json-server_errorinfo.png","45b85a76c675b3b320a50fe0857114a5"],["/post_img/json-server/json-server_expand.png","f4034b0a7af97939da1085d96a5bca90"],["/post_img/json-server/json-server_fenduan-end.png","5eab987d6e5150f715857ed13af8418d"],["/post_img/json-server/json-server_fenduan-limit.png","05db641965b033381e78a608ce4d796a"],["/post_img/json-server/json-server_fenye-control.png","b5f54776061dfd9b4f73e2a00b4c737d"],["/post_img/json-server/json-server_fenye-control1.png","28485ac76d6d7b183b3b44b70c0e6d78"],["/post_img/json-server/json-server_fenye.png","47f84c444ea63c1fdd40e9386f56d649"],["/post_img/json-server/json-server_get_&&.png","4702f0038efd726f8b413cec98e9f0a3"],["/post_img/json-server/json-server_get_&.png","ac7d0afe2b7c2a4b2fda38abb0c182a0"],["/post_img/json-server/json-server_get_once.png","d4ef05c9a09364ccaccd2236e8d9422e"],["/post_img/json-server/json-server_idselect.png","c8cf8b998ec170cb62e25195027d4548"],["/post_img/json-server/json-server_like.png","18a88b156a3fe631438c26325e7ae677"],["/post_img/json-server/json-server_patch.png","4cb5d9f55eca030061db5ce7e8fec9cf"],["/post_img/json-server/json-server_patch1.png","047ae2e3154921946fa05e7f76e739c1"],["/post_img/json-server/json-server_port.png","b0116739798d74bc732dc06b3b4337de"],["/post_img/json-server/json-server_post.png","bc04e1bde40fc19b277d167eeae41c3f"],["/post_img/json-server/json-server_post1.png","ed7225ce415a974c807f94c816b22857"],["/post_img/json-server/json-server_put.png","a6cf97fb5e8fa08826fe90a67cff67f8"],["/post_img/json-server/json-server_put1.png","cc999241bda89d273732ca7719391061"],["/post_img/json-server/json-server_routes.png","aba332ba667ca8eaa8bdd9c62ff105b8"],["/post_img/json-server/json-server_running.png","da2b2f3f56058fa84c7c5c0ffb2b799d"],["/post_img/json-server/json-server_sort-any.png","47251eae8ae15974e7e07844eec7a6a5"],["/post_img/json-server/json-server_sort-asc.png","bbe19dc791e17f26871bec10006bc4fd"],["/post_img/json-server/json-server_sort-desc.png","66286441f9fa9708fba6a789699d2918"],["/post_img/json-server/json-server_生成动态数据.png","44298eb263655a921a08a1968207c433"],["/post_img/nvm-img/image-20231009165050091.png","2c6641805a5a7d70075279461b2d317c"],["/post_img/nvm-img/image-20231009165653996.png","d0b37436fefd7049677d15277481f938"],["/post_img/nvm-img/image-20231009165822394.png","c33bb6b6345d12bca8aaa39dedc09d54"],["/post_img/nvm-img/image-20231009171001106.png","d8f912945cf15ae78eb03d8edee88a6f"],["/post_img/nvm-img/image-20231009172351803.png","3df0fc7b980122c6c1df12c6042b5fca"],["/post_img/nvm-img/image-20231009172705547.png","3b1a9d054fedc1b5942e3ea27bbdac6e"],["/post_img/nvm-img/image-20231009173012894.png","a4a354f51d74a3b4c513c628003aeec5"],["/post_img/nvm-img/image-20231009173400567.png","8e9e04b2166c971fd72e232193dca5ca"],["/post_img/vue-audio/audio.gif","7cedec7186535d9f642521897a728119"],["/post_img/vue-audio/audio_exp.png","d9fa3fdc90cc57ae09dd70361cc3a821"],["/susu/index.html","5e323c40d9b07c71481dee017193e422"],["/sw-register.js","7c1b891ec709a0db5f735d333e45f160"],["/tags/Hexo-emoji/index.html","f0b8bf2f483f548eb17c03dc0716927f"],["/tags/Hexo/index.html","97091195973c96c7d0a5e4b299fdb751"],["/tags/Tag-Plugins/index.html","997537b6f650812aea41e2965728b828"],["/tags/audio/index.html","0b5c3fc1ee2d61acb3a85465f5185fcf"],["/tags/blog/index.html","145f4b71f5a9a319a25b24351469c2d7"],["/tags/echarts/index.html","fc0a6611e7567e432bd0d1b5a99c1cf0"],["/tags/git/index.html","51d4104ad7a50c24faa3cfe7cbaa1d05"],["/tags/index.html","c7130365715e4248807ed0c4086aab3f"],["/tags/json-server/index.html","5846f8c92774daf5afd6b3007afa8354"],["/tags/nodejs/index.html","ff2b1f31e86958c61a74b15f93e50c57"],["/tags/vue3/index.html","062b53c8a3bb2d82a6ba90792f0a6252"],["/tags/前端/index.html","f411bd233bd6bd667a43834e0fb35505"],["/tags/工具/index.html","da847d0961dae20e06fe848158b056cb"],["/tags/自述/index.html","fdd04b7b178c076180891591d2896767"],["/tags/随笔/index.html","03bd0f15b69de1a776daae3f86f28f6b"],["/wallpaper/index.html","fe636cffba53b3f966abf95dcd8213d9"]];
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
