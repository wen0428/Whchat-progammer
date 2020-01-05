import { FIND } from '../constants/counter'

const INIT_STATE = [
  {
    url: 'https://youimg1.c-ctrip.com/target/100f10000000nyvn553DC.jpg',
    title: '赫尔辛基历史一日游',
    introduce: '探索经典, 重温赫尔辛基的历史',
    id: '5597a05ae4b08a686ce5c',
    tab: '历史之选',
    tabone: '一日游',
    detail: [
      {
        details: '历史与建筑',
        id: '19120101',
        detailsinfo: '探访经典, 重温赫尔辛基的历史',
        detailsline: '\n行程概览',
        detailslineinfo: '\nD1  参议院广场 > 赫尔辛基大教堂 > 广场街区 > 赫尔辛基城市博物馆 > 贵族院 > 总统府 > 斯道拉尔索集团总部大楼 > 乌斯本斯基大教堂 > 托芙扬松公园 > 灯塔船瑞兰德斯格伦德号 > 木焦油岛 > 丽莎公园 > 博格故居 > 平民院与国家档案馆\n\n',
        detailscycle: '\n\n推荐理由: 回到往昔, 重温赫尔辛基的历史! 广场街区曾是沙俄帝国丝带的市中心. 这一赫尔辛基老城区已经彻底整饬一新, 全面开放. 夏季期间, 窄窄的街道边和庭院里遍布着露台、绽放着笑脸. 格鲁努哈卡区得名于曾经位于这里的沙皇"御用围场". 大量新艺术主义建筑集中在卡达亚诺卡区, 建筑装饰多以大自然为主题, 尤其是多种多样的窗户, 令人激赏不已. ',
      },
      {
        detailtitle: '参议院广场',
        id: '19170728',
        detailtitleinfo: 'Senate Square',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'http://scenery.image.nihaowang.com/scenery/49/9275/201212251501493864.jpg',
        detailtitleimageinfo: '\n推荐理由: 参议院广场与集市广场之间的18世纪商铺建筑内, 如今涌现了许许多多设计精品店和餐厅. 除了享用美食和饮品, 你还可以在恩格尔电影院看场电影, 说不定还会在卡塔里娜街漫步的时候意外发现一家秘密酒吧! 本区内的餐厅: Cafe Engel, Koket, El Fant, Roster, Salutorget, Savotta, Sunn, Trillby & Chadwick, Via Tribunali',
        detailtitleimagesinfo: '\n步行约2分钟',
        introduce: [
          {
            timeinfo: '营业时间: 全天营业\n\n',
            adressinfo: 'Senaatintori',
            introinfo: '\n\n参议院广场周边的建筑群构成了新古典主义建筑艺术的独特而又统一的典范. 德国建筑大师卡尔路德维格恩格尔(Carl Ludvig Engel, 1778-1840)设计的四栋建筑堪称参议院广场的地标: 赫尔辛基大教堂、国务院、赫尔辛基大学主楼以及芬兰国家图书馆. 沙皇亚历山大二世的雕像(1894年)矗立在参议院广场的中央. 赫尔辛基大教堂可以说是最常出现在游客镜头中的芬兰建筑物, 2017年迎来了其建成165周年纪念. 赫尔辛基室内历史最悠久的石质建筑赛德霍姆楼(Sederholm House)j就坐落在广场的东南角, 如今已成为赫尔辛基城市博物馆所在地. 埃斯普拉纳蒂公园(Esplanade park)和集市广场(Market Square)眦临参议院广场. 参议院广场还设置了一种装置, 称为"参议院广场之声(Sound of the Senate Square). 这是欧洲钢片琴的现代翻版,  每天17:49起乐声响起, 一栋建筑楼一栋建筑的传递过去, 全长总共5分18秒. 作曲者是Hari Viitanen和Jyrki Alakuijala. "\n\n\n',
          }
        ]
      },
      {
        detailtitle: '总统府',
        id: '19331111',
        detailtitleinfo: 'Presidential Palace',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'https://img1.qunarzz.com/travel/poi/1510/c3/1e582b8109054b.jpg_480x360x95_d8c68fc9.jpg',
        detailtitleimageinfo: '\n推荐理由: 佩尔格兰斯特德(Pehr Granstedt)最初设计的这栋建筑原为私人寓所, 经恩格尔重新设计后被用作啥用的行宫. 芬兰独立之后这里成为总统官邸, 如今是国家政务场所. 用来拱位总统宫的主卫士楼也是有恩格尔设计的. ',
        detailtitleimagesinfo: '\n步行约2分钟',
        introduce: [
          {
            timeinfo: '营业时间: 全天营业',
            urlinfo: 'http://www.presidentti.fi/plublic/default.aspx?nodeid=44831&contentian=1&culture=fu-FI',
            adressinfo: 'Mariankatu 2-4',
            introinfo: '\n\n总统府是18世纪由佩尔格兰斯特德(Pehr Granstedt)设计, 1820建筑完成. 当时的设计初衷为私人使用. 经卡尔路德维格恩格尔(Carl Ludvig Engel)重新设计之后用作沙皇的行宫. 芬兰独立期间, 这座建筑即使共和国总统的代表处, 也是总统的府邸. 现如今总统居住在美湾区(Meilahti)的松树半岛(Mantyniemi)上. 到目前为止, 还未组织总统府的参观游览. \n\n\n',
          }
        ],
      },
      {
        detailtitle: '赫尔辛基城市博物馆',
        id: '19361222',
        detailtitleinfo: 'Helsinki City Museum',
        detailtitleinfocycle: '查看详情\n',
        detailtitleimage: 'http://image.lxw365.com/img/92/06/920659e9a4524458a52bf7c971a22570.jpg',
        detailtitleimageinfo: '\n推荐理由: 这家博物馆很受小朋友的喜爱, 馆内通过创新的展览展示了城市的历史, 供大家免费参观. 塞戴尔霍姆屋是市中心历史最悠久的石质建筑, 建于1757年. 这栋石头屋内设有一家博物馆商店和一家咖啡馆. ',
        detailtitleimagesinfo: '\n步行约3分钟',
        introduce: [
          {
            timeinfo: '营业时间: 星期一至星期五11:00:00-19:00:00 星期六&星期日11:00:00-17:00:00',
            urlinfo: 'http://www.helsinginkaupunginmuseo.fi',
            adressinfo: 'Aleksanterinkatu 16',
            introinfo: '\n\n赫尔辛基城市博物馆是世界上唯一以赫尔辛基为主题的博物馆. 它位于参议院广场的角落, 在城市最古老的广场街区. 赫尔辛基日常性的博物馆为参观者提供了城市历史、微信细节和令人深有感受的休闲场所. 赫尔辛基精选作品的永久展览深入赫尔辛基的历史, 汇集了城市历史的共同记忆. 馆内的儿童城市让孩子们了解早起和未来时代, 孩子们可在里面尽情玩耍. 在时间机器上, 虚拟现实设备让人们看到数百年前和其他时代. 在楼里还有一家博物馆商店和一家咖啡酒吧EI Fant. \n\n\n',
          }
        ],
      },
    ],  
  },
  {
    url: 'http://i2.sinaimg.cn/qc/2012/1013/U4884P33DT20121013040747.jpg',
    title: '赫尔辛基艺术一日游',
    introduce: '在设计之都淘艺术精品',
    id: '5597a05ae4b08a686ce56e',
    tab: '大海',
    tabone: '自然',
    detail: [
      {
        details: '设计与时尚',
        id: '19390831',
        detailsinfo: '在世界设计之都淘设计精品',
        detailsline: '\n行程概览',
        detailslineinfo: '\nD1  广场街区 > 伊塔拉埃斯普拉纳蒂专卖店 > 薄穆乐 > 明娜巴丽卡的宇宙 > TRE的世界 > 玛莉美歌 > 阿尔泰克赫尔辛基旗舰店 > 艾洛阿尼奥设计 展示 > 约翰娜谷里克森 > 设计博物馆 > 稚鸡古董-赫尔辛基二手店 > 洛高 > 伊瓦纳赫尔辛基 > 阿莱拉 > 力盖 > 克莱斯K酒店\n\n',
        detailscycle: '\n\n推荐理由: 赫尔辛基市内, 设计无处不在. 美好的设计被用于日常生活, 人人都能拥有, 而且提高了我们的生活质量. 赫尔辛基曾当选联合国教科文组织设计之都(UNESCO City of Design), 也是全世界唯一设立“首席设计官”职位的城市. 在这里你能发现芬兰最知名设计师的经典创意与新秀设计师的别致概念, 还可以跟随导游走上"设计漫步之旅"(Deign Walk). 搜索整个设计区. 更多资讯: myhelsinki.fi',
      },
      {
        detailtitle: '伊塔拉埃斯普拉纳蒂专卖店',
        id: '19410553',
        detailtitleinfo: 'littala Store Esplanadi',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'http://static.id-china.com.cn/img/mixinfo/2011/11/09/133541.jpg',
        detailtitleimageinfo: '\n推荐理由: 伊塔拉是顶尖北欧设计品牌之一, 其旗舰店出售伊塔拉所有主要产品, 兼售少见的特别款和玻璃工艺品. 其中的阿利比亚(Arabia)品牌进入芬兰千家万户已经有超过140年历史了. ',
        detailtitleimagesinfo: '\n步行约1分钟',
        introduce: [
          {
            timeinfo: '营业时间: 星期一至星期五10:00:00-19:00:00 星期六10:00:00-17:00:00 星期日12:00:00-17:00:00',
            urlinfo: 'http://www.iittala.fi/home',
            adressinfo: 'Pohjoisesplanadi 23',
            introinfo: '\n\n位于埃斯普拉纳蒂大街(Pohjoisesplanadi)上的伊塔拉旗舰店是设计粉丝们的天堂. 旗舰店于2016年在新址开张, 内部空间宽敞, 采光充足, 展示了伊塔拉的全部设计品系列, 包括著名的奥伊瓦托伊卡(Oiva Toikka)彩色玻璃鸟等著名艺术设计品. 经验丰富的店员对品牌和所用材料如数家珍, 而且能用多种语言接待顾客, 旗舰店提供出口相关服务. \n\n\n',
          }
        ],
      },
      {
        detailtitle: '明娜巴丽卡的宇宙',
        id: '19411136',
        detailtitleinfo: 'Minna Parikka Universum',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'https://finland.fi/wp-content/uploads/2015/05/2673-minnaparikka29-550-jpg.jpg',
        detailtitleimageinfo: '\n推荐理由: 明娜巴丽卡是一位芬兰顶级设计师, 他设计的鞋子感觉就像焦糖--好看、颜色靓丽、充满女性魅力. 他设计的卸妆在世界各地的顶尖时尚店内有售. ',
        detailtitleimagesinfo: '\n步行约2分钟',
        introduce: [
          {
            timeinfo: '营业时间: 星期一至星期五10:00:00-18:00:00 星期六10:00:00-17:00:00 休息时间: 星期日',
            urlinfo: 'http://www.minnaparikka.com',
            adressinfo: 'Aleksanterinkatu 16',
            introinfo: '\n\n明娜巴丽卡旗舰店坐落在赫尔辛基市中心. 店铺的橱窗设计极具特色, 每一个路过的人只要看上一眼, 嘴角都会微微上扬. 旗舰店于2012年在赫尔辛基著名的亚历山大大街上开业. 自开业之后, 明纳巴丽卡就以其异想天开的橱窗展示风格给每个人留下深刻的印象. 这里是设计师们创意的源泉, 在这家店里可以找到品牌下最全的设计样式. \n\n\n',
          }
        ],
      },
      {
        detailtitle: '阿尔泰克赫尔辛基旗舰店',
        id: '19420534',
        detailtitleinfo: 'Artek Helsinki',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'http://file.ailvxing.com/p/201704/1ef8fcfeab09281efaf52767d15529da.jpg',
        detailtitleimageinfo: '\n推荐理由: 阿尔泰克品牌因芬兰建筑大师阿尔瓦阿尔托设计的家具而闻名. 它是最具创新能力的现代设计公司之一, 也是芬兰健壮设计的旗舰品牌之一. 阿尔托设计的产品采用纯碎的设计语言, 经久耐用, 品质上乘, 为阿尔泰克七十年的成功史打下了基础. 关于阿尔瓦阿尔托故居博物馆的工作室的更多资讯请访问: alvaraalto.fi',
        detailtitleimagesinfo: '\n步行约4分钟',
        introduce: [
          {
            timeinfo: '营业时间: 星期一至星期五10:00:00-19:00:00 星期六10:00:00-18:00:00 休息时间: 星期日',
            urlinfo: 'http://www.artek.fi',
            adressinfo: 'Keskuskatu 1B',
            introinfo: '\n\n阿尔泰克赫尔辛基旗舰店共有两层. 店内陈列着阿尔泰克完整的家具、灯具和配件系列, 其中亮点包括新近在展会上推出的产品、仅本店有售的特别产品, 以及工作室. 这个工作室可以现场为客户定制阿尔瓦阿尔托的经典作品Stool 60凳子. 旗舰店内还出售有相似设计理念的其他品牌的精选产品, 其中许多是由阿尔泰克在芬兰独家分销的. \n\n\n',
          }
        ],
      },
    ],
  },
  {
    url: 'https://youimg1.c-ctrip.com/target/100v10000000okixvAFB1.jpg',
    title: '赫尔辛基风景一日游',
    introduce: '大海与岛屿, 与你近在咫尺',
    id: '5597a05ae4b08a686ce5f',
    tab: '历史之选',
    tabone: '一日游',
    detail: [
      {
        details: '大海与自然',
        id: '19160728',
        detailsinfo: '大海和岛屿, 与你近在咫尺',
        detailsline: '\n行程概览',
        detailslineinfo: '\nD1  阿拉斯海水泳池 > 集市广场 > 壁垒岛 > 芬兰堡海上要塞 > 罗纳岛 > 大岛 > 赫尔辛基动物园 > 哈米涅米农贸市场 > 卡伊沃公园 > 花啾岛 > "蒸汽"桑拿休闲中心\n\n',
        detailscycle: '\n\n推荐理由: 赫尔辛基最美妙的元素或许就是拥有大海. 无论走到哪里, 大海都离你不远. 这座城市三面被海环抱. 赫尔辛基的海岸线长达130公里, 近海群岛有岛屿300多座. 其中许多岛屿都已开辟为休闲旅游区, 从大陆乘渡轮即可登岛. ',
      },
      {
        detailtitle: '阿拉斯海水泳池',
        id: '19430715',
        detailtitleinfo: 'Allas Sea Pool',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'https://finland.fi/wp-content/uploads/2016/10/P1000802B1600-700x408.jpg',
        detailtitleimageinfo: '\n推荐理由: 参议院广场与集市广场之间的18世纪商铺建筑内, 如今涌现了许许多多设计精品店和餐厅. 除了享用美食和饮品, 你还可以在恩格尔电影院看场电影, 说不定还会在卡塔里娜街漫步的时候意外发现一家秘密酒吧! 本区内的餐厅: Cafe Engel, Koket, El Fant, Roster, Salutorget, Savotta, Sunn, Trillby & Chadwick, Via Tribunali',
        detailtitleimagesinfo: '\n步行约3分钟',
        introduce: [
          {
            timeinfo: '营业时间: 星期一至星期五06:30:00-21:00:00 星期六09:00:00-21:00:00 星期日10:00:00-20:00:00',
            urlinfo: 'http://www.allasseapool.fi',
            adressinfo: 'Katajanokanlaituri 2a',
            introinfo: '\n\n阿拉斯海水泳池(Alias Sea Pool)是一处海洋水疗休闲中心, 坐落在赫尔辛基市中心著名的集市广场(Kauppatori)旁边. 它地处城市心脏地带, 因此被当地人称为赫尔辛基市中心的一片城市绿洲. 阿拉斯海水游泳池为当地居民以及游客在繁华的赫尔辛基市中心开启了享受波罗的海的新方式. 水疗中心全年开放, 为这片区域注入了一股新的活力以及享受超值体验的机会. 中心内有三个桑拿房、两个淡水泳池, 以及一个和海水温度一致的海水泳池. 除此以外, 中心内还有健身房、健身教练、餐厅、咖啡厅、运动及健身服务, 以及文化活动. \n\n\n',
          }
        ],
      },
      {
        detailtitle: '芬兰堡海上要塞',
        id: '19440618',
        detailtitleinfo: 'Suomenlinna Sea Fortress',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'https://travelnews.aiguemarine-paris.com/wp-content/uploads/sites/1/2015/12/Suomenlinna.jpg',
        detailtitleimageinfo: '\n推荐理由: 芬兰堡是联合国教科文组织世界遗产, 也是芬兰最著名的旅游景点之一. 海上要塞是芬兰三个历史阶段的见证者: 始建于瑞典时期, 经历了百年沙俄统治, 迎来了独立后的现代时期. 芬兰堡内有博物馆、餐厅, 经常举办各种活动, 让各个年龄层次的游客都留下难忘的回忆. 芬兰堡上常年居住着850名居民. ',
        detailtitleimagesinfo: '\n乘车渡轮约10分钟可达',
        introduce: [
          {
            timeinfo: '营业时间: 全天营业',
            urlinfo: 'http://www.suomenlina.fi',
            adressinfo: 'Suomenlinna',
            introinfo: '\n\n芬兰堡海上要塞是全世界现存最大的海上堡垒之一, 有瑞典陆军元帅、军事建筑家奥古斯丁厄伦斯瓦德(Augustin Enrensvard)伯爵设计, 1748年开始修建. 要塞建在赫尔辛基海岸外的几座岛屿之上. 芬兰堡一直是芬兰人气最旺的旅游名胜之一, 作为欧洲军事建筑史上一座独一无二的里程碑, 1991年被列入联合国教科文组织世界遗产名录. 来芬兰堡参观, 在岛上的餐厅美餐一顿或在咖啡馆小坐片刻是必不可少的项目. 芬兰堡内开设了多家餐厅和咖啡馆. 游客接待中心和博物馆设在要塞中央, 是游客的大本营、步行参观的起点, 也是查询信息的地方. 芬兰堡各个岛上还设有其他历史博物馆. 参观芬兰堡要靠步行, 请穿着合适的衣物和舒适的鞋子. 夏季期间, 芬兰堡每天都提供英语、芬兰语、瑞典语、俄语和中文导游讲解, 冬季周六和周日和英语导游旅游讲解服务. 详情请参阅芬兰堡官网. \n\n\n',
          }
        ],
      },
      {
        detailtitle: '卡伊沃公园',
        id: '19450521',
        detailtitleinfo: 'Kaivopuisto Park',
        detailtitleinfocycle: '查看详情\n\n',
        detailtitleimage: 'http://www.guojialvye.com/uploads/allimg/190306/1-1Z306025T2200.jpg',
        detailtitleimageinfo: '\n推荐理由: 卡伊沃公园的昵称为"Kaivari", 它是赫尔辛基历史最悠久、也是最受市民喜爱的公园之一. 十九世纪三十年代, 在这个当时上无人居住的半道上建起了一座spa, 很快成为来自圣彼得堡的权贵阶层的一处度假胜地. 在公园的制高点有一座观象台, 属于大熊星座天文学会(Ursa), 这个组织是芬兰最早建立、规模最大的民间天文爱好者协会. 中世纪时, 人民曾在这座俯瞰海港的小山上点燃烽火, 警告当地居民海上有敌人进犯, 矗立在山巅的天文台是由建筑大师卡尔路德维格恩格尔设计的, 如今用作博物馆和游客中心. ',
        detailtitleimagesinfo: '\n从cafe Carusel乘坐渡轮约20分钟可达',
        introduce: [
          {
            timeinfo: '营业时间: 全天营业',
            urlinfo: 'http://vihreatsylit.fi/kaivopuisto/',
            adressinfo: 'Iso Puistotie-Ehrenstromintie-Itainen Puistotie',
            introinfo: '\n\n卡伊沃公园是赫尔辛基最老的公园之一, 位于环境优雅的使馆区, 四周别墅环绕. 19世纪, 公园内著名的水疗中心令其受到上层人士的喜爱, 而国外的客人们也会把这里作为会议以及聚会的热门之选. 19世纪末期, 公园逐渐从上层人士奢华的公园变成了大众居民休闲的好去处. 卡伊沃公园(Kaivopuisto)是赫尔辛基当地居民传统的外出会友以及娱乐的地方. 近在咫尺的海洋, 岩石, 多变的地形, 宽阔的草坪能够给人们带来更多户外活动以及实战兴趣爱好空间的机会. 在冬季, 如果积雪状况允许, 卡伊沃公园内斜坡在中登山者种非常受到推崇, 想芬兰其他公共公园一样, 卡伊沃公园(Kaivopuisto)建有各种器材供小朋友专门玩耍的区域, 宠物狗的展览也是保证居民业余生活质量的标配. 而棋手们下象棋的地方是卡哇伊公园(Kaivopuisto)的另一特色. 卡伊沃公园(Kaivopuisto)地势上的最高点是大熊天文协会(Tahtitleteellisen yhdistyksen Ursa)的天文台. 公园前端可以乘坐渡轮一度附近小岛的美丽景色: 萨瑞凯小岛(Sarkka), 哈莱凯小岛(Harakka)以及新岛(Uusisaari), 海滩上以及近岛处都可以找到不同的咖啡厅以及餐厅. \n\n\n',
          }
        ],
      },
    ],
  },
]

export default function find (state = INIT_STATE, action) {
  switch (action.type) {
    case FIND:
      return{
        ...state
      }
    default:
      return state
  }
}