var app=angular.module("theme",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(F,E){F.state("theme",{url:"/:slug",controller:"ThemeController",params:{slug:{value:"aubergine"}}}),E.otherwise("/aubergine")}]),app.controller("ThemeController",["$scope","$stateParams","$state",function(F,E,C){var D={aubergine:"#4D394B,#3E313C,#4C9689,#FFFFFF,#3E313C,#FFFFFF,#38978D,#EB4D5C",base16_eighties_dark:"#393939,#2D2D2D,#F2777A,#FFFFFF,#515151,#D3D0C8,#99CC99,#66CCCC",base16_eighties_light:"#F2F0EC,#E8E6DF,#F2777A,#FFFFFF,#515151,#515151,#99CC99,#66CCCC",base16_tomorrow_night:"#191A1C,#282A2E,#B6BC68,#FFFFFF,#363B41,#959896,#80A2BE,#C26161",big_red:"#754242,#BD3737,#9C4444,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",bourbon:"#CF7C44,#CF7C44,#E89A6B,#F7DB72,#FBEDD4,#FFFAFC,#92406A,#92406A",brinjal:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#00FFB7,#DE4C0D",choco_mint:"#544538,#42362B,#5DB09D,#FFFFFF,#4A3C30,#FFFFFF,#FFFFFF,#5DB09D",citrus:"#507800,#94AF63,#FFEA00,#507800,#94AF63,#FFFFFF,#F7FF00,#FF9900",deep_blue:"#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2",digitalocean:"#3686BE,#215F8B,#7DB461,#FFFFFF,#2E3234,#FFFFFF,#7DB461,#215F8B",dracula:"#282A36,#44475A,#44475A,#8BE9FD,#6272A4,#FFFFFF,#50FA7B,#FF5555",dropbox:"#007EE5,#007EE5,#47525D,#FFFFFF,#7B8994,#FFFFFF,#47525D,#47525D",facebook:"#4E69A2,#38528B,#38528B,#FFFFFF,#38528B,#FFFFFF,#1FAD38,#CD2323",film_noir:"#101010,#101010,#D3D3CA,#BB313E,#424242,#F0F0E6,#BB313E,#BB313E",gartland:"#404040,#696969,#FFD200,#000000,#000000,#FFFFFF,#00703C,#EF4C23",goodstuff_fm:"#292D36,#000000,#DA5647,#FFFFFF,#333644,#FFFFFF,#57AFBD,#DA5647",grooveshark:"#181D27,#FD6540,#393F40,#F1F2F4,#393F40,#F1F2F4,#F1F2F4,#FD6540",haunter:"#340027,#260024,#FF1962,#FFFFFF,#610047,#FFFFFF,#FF1962,#FF1962",hoth:"#F8F8FA,#F8F8FA,#CAD1D9,#FFFFFF,#FFFFFF,#383F45,#60D156,#FF8669",juice_bar:"#86A34E,#94AF63,#FFFFFF,#6D8B42,#94AF63,#FFFFFF,#FFB10A,#DFA044",kill_bill:"#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25",kimbie:"#F3E3CD,#F3E3CD,#F3951D,#DA3D61,#F26328,#183E1C,#DA3D61,#F26328",latte:"#C17F46,#C17F46,#CFA677,#DCBF98,#FBEDD4,#EFEFEF,#EAECF1,#EAECF1",light_blue:"#89A1AB,#7D949E,#FFFFFF,#748991,#748991,#FFFFFF,#B3FF00,#748991",luizalabs:"#0074B2,#0083CA,#B26500,#FFFFFF,#00A5FF,#FFFFFF,#FF9000,#FF9000",madsoft:"#4A3A55,#3A2A45,#8A7A95,#FFFFFF,#2A1A35,#FFFFFF,#22CC88,#CC2288",makers:"#663399,#592D86,#8F6DB0,#FFFFFF,#3E313C,#FFFFFF,#FFFFFF,#EB4D5C",monokai:"#222222,#2F2F2F,#F92772,#FFFFFF,#A6E22D,#FFFFFF,#66D9EF,#BE84F2",monument:"#0D7E83,#076570,#F79F66,#FFFFFF,#D37C71,#FFFFFF,#F79F66,#F15340",myplanet:"#232323,#000000,#f05a28,#000000,#000000,#FFFFFF,#f05a28,#f05a28",netflix:"#1F1C18,#8E0E00,#8E0E00,#FFFFFF,#A1A09F,#FFFFFF,#B01D0C,#8E0E00",ochin:"#303E4D,#2C3849,#6698C8,#FFFFFF,#4A5664,#FFFFFF,#94E864,#78AF8F",phone_box:"#003D67,#003D67,#FFFFFF,#003D67,#00548C,#FFFFFF,#0099FF,#006752",polygon:"#C10048,#920A3D,#2E0002,#FFFFFF,#610A29,#FFFFFF,#FFFFFF,#610A29",product_hunt:"#FFFFFF,#EDECEB,#DA552F,#FFFFFF,#FCF5E2,#534540,#DA552F,#FF8669",put_io:"#FFFFFF,#FDCE45,#FDCE45,#0F1216,#ECEEF2,#0F1216,#1FAE7D,#1FAE7D",railway_clock:"#FFFFFF,#FFFFFF,#E0E0E0,#E1382F,#F2F2F2,#050505,#E1382F,#E1382F",reddit:"#F7F7F7,#CEE3F8,#B3CCE6,#FF3000,#B3CCE6,#336699,#38978D,#FF7500",sky_blue:"#A5C0CC,#62A5BF,#1A91BD,#F5F5F5,#BAD8E3,#170317,#38978D,#EB4D5C",slack_white:"#FFFFFF,#FFFFFF,#FFFFFF,#2288CC,#2288CC,#454449,#93CC93,#2288CC",social_tables_blue:"#494949,#65A0D6,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",social_tables_pink:"#494949,#CB5599,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",solanum:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#D0FF00,#889100",solarized:"#FDF6E3,#EEE8D5,#93A1A1,#FDF6E3,#EEE8D5,#657B83,#2AA198,#DC322F",solarized_dark:"#073642,#002B36,#B58900,#FDF6E3,#CB4B16,#FDF6E3,#2AA198,#DC322F",son_of_obsidian:"#293134,#2F393C,#293134,#93C763,#2F393C,#81969A,#EC7600,#EC7600",spotify:"#1A1919,#1A1919,#EDEBE6,#7DBA4A,#4F4D4D,#FFFFFF,#7DBA4A,#7DBA4A",spring_tree:"#EB4D5C,#EB4D5C,#A6D6A1,#3C3865,#3C3865,#FFFFFF,#3C3865,#F18E2C",starbucks:"#0A6242,#0A6242,#3D3935,#BC7E3B,#BC7E3B,#F7F7F7,#3D3935,#3D3935",stark_contrast:"#000000,#A51C24,#FFFFFF,#0320FF,#A5A5A5,#FFFFFF,#FFFFFF,#FFFF00",summer_craze:"#B300B3,#23A61C,#FFFFFF,#C400FF,#FF2EFF,#000000,#F7FF00,#F7FF00",terminal:"#101010,#000000,#FFFFFF,#000000,#A0A0A0,#FFFFFF,#00A400,#5858FE",tron:"#000000,#000000,#1EB8EB,#000000,#1EB8EB,#FFFFFF,#1EB8EB,#1EB8EB",twitter:"#55ACEE,#55ACEE,#E1E8ED,#292F33,#ADDCFF,#F5F8FA,#E1E8ED,#E1E8ED",wamein:"#BB6A76,#AD5B67,#62B791,#FFFFFF,#A5516A,#FFFFFF,#68F798,#694464",watermelon:"#2B7164,#2B7164,#51A050,#EC2262,#CECCB2,#032342,#DA3D61,#CECCB2",wedgies:"#222222,#333333,#3F96CA,#F9F9F9,#4A5664,#FFFFFF,#3F96CA,#EFC000",wegman:"#E3DAE6,#B49FC2,#5A30B0,#FDF6E3,#EEE8D5,#594275,#B358BF ,#BD72CC",work_hard:"#4D5250,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",yosemite_itunes:"#FAFAFA,#FAFAFA,#0F82FF,#FFFFFF,#D4E7FF,#404040,#62D962,#E92242",youtube:"#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D",zeplin:"#F5F5F5,#FFFFFF,#FDBD39,#FFFFFF,#FECF33,#574751,#A4BF36,#EE6723"};F.$on("$stateChangeSuccess",function(){F.slug=E.slug}),F.$watch("slug",function(E){E&&(F.colors=D[F.slug],C.go("theme",{slug:E}))}),F.$watch("colors",function(E){if(E){var C=E.split(",");F.column_bg=C[0],F.menu_bg=C[1],F.active_item=C[2],F.active_item_text=C[3],F.hover_item=C[4],F.text_color=C[5],F.active_presence=C[6],F.mention_badge=C[7]}})}]);