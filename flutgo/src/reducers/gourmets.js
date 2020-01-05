import { GOURMET } from '../constants/counter'

const INITIAL_STATE = [
  {
    'Restaurant China':{
      url: 'https://youimg1.c-ctrip.com/target/100r0l000000cqdjg7D66.jpg',
      title: '中国酒楼家',
      entitle: 'Restaurant China',
      worktime: '  营业时间: 星期一至星期五 11:00:00-23:00:00 星期六&星期日 12:00:00-23:00:00 特殊情况: 点餐时间为22:30店截止',
      workadress: '  (http://www.ravintolachina.fi)',
      enworkadress: '  Annankatu 25',
      content: '中国酒楼家-1973年在芬兰首都赫尔辛基中心安娜(Annankatu)大街开业的第一家中餐厅. 餐厅内设65个座位, 主营中国南方广东风味美食, 口味正宗, 品质上乘. 餐厅环境优雅, 可品尝到广东点心、各种食材, 豆腐以及海鲜类餐食. 餐厅还为亚洲食客准备了特殊菜色以及煲仔饭, 可在点餐时特别咨询. ',
      introduce: 'Restaurant China',
      id: '5597a05ae4b08a686ce562',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Furuma Cuisine':{
    url: 'http://p1.img.cctvpic.com/photoAlbum/page/performance/img/2016/12/5/1480927171091_414.jpg',
    title: '集市广场',
    entitle: 'Furuma Cuisine',
    worktime: '  营业时间: 星期一至星期日 11:00:00-21:00:00',
    workadress: '  (http://fi-fi.facebook.com/furumacuisine)',
    enworkadress: '  Katajanokanlaituri 5',
    content: '富丽华大饭店是赫尔辛基南港卡塔亚诺卡码头(Katajanokka)附近的第一家大型中餐厅. 餐厅除了供应中餐各式美食之外, 还有特色火锅. 喜欢爱辣风味的客人, 可以前去品尝. ',
    introduce: 'Furuma Cuisine',
    id: '5597a05ae4b08a686ce56f1',
    iconid: '1231233',
    author: '竹林一贤1',
    black: '\n\n\n',
    },
    'Home Taste':{
      url: 'https://images.cdn.uniqueway.com/uploads/2017/01/16d8b06e-3e89-4ab2-8b26-c649811496ec.jpg',
      title: '家宴',
      entitle: 'Home Taste',
      worktime: '  营业时间: 星期一至星期四: 11:00:00-21:00:00 星期五&星期六 12:00:00-22:00:00 星期日: 12:00:00-21:00:00',
      workadress: '  (http://www.hometaste.fi)',
      enworkadress: '  Aleksanterinkatu 9, Kauppakeskus Kiuvi K1',
      content: '赫尔辛基市中心格鲁维购物中心(Kluuvi Kauppakeskus)里一家正宗亚洲风味融合的中餐厅, 选材新鲜, 口味地道, 交通便利, 位置极佳. 除正常点菜时间之外, 星期一至星期六有午餐自助供应. 具体时间为: 星期一至星期五 11:00:00-15:00:00, 星期六 12:00:00-16:00:00',
      introduce: 'Home Taste',
      id: '5597a05ae4b08a686ce53',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Restaurent Empire Plaza':{
      url: 'https://images.cdn.uniqueway.com/uploads/2017/12/7cdc89bd-76fa-4091-8be7-1001c567a7c0.jpg',
      title: '皇朝餐厅',
      entitle: 'Restaurent Empire Plaza',
      worktime: '  营业时间: 星期一至星期五: 11:00:00-23:00:00 星期六 12:00:00-23:00:00 星期日: 12:00:00-22:00:00',
      workadress: '  (http://www.empireplaza.fi)',
      enworkadress: '  Urho Kekkosen katu 1, Kauppakeskus Kamppi',
      content: '中餐厅皇朝主营上等粤菜. 特色菜式包括火锅餐、发出滋滋声的铁板餐, 美味的点心等. ',
      introduce: 'Restaurent Empire Plaza',
      id: '5597a05ae4b08a686ce5614',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    },
    'Brokadi Ravintola':{
      url: 'https://i2.achangpro.com/img.angela51.com/pixnet/2eb33ea6f6f4343c605ff0e945284896.jpg',
      title: '锦官堂',
      entitle: 'Brokadi Ravintola',
      worktime: '  营业时间: 星期二至星期五: 11:00:00-21:30:00 星期六&星期日 12:00:00-21:30:00 休息时间: 星期一 特殊情况: Closed for renovation from 12.10.2019',
      workadress: '  (http://brokadi.com/)',
      enworkadress: '  Makelankatu 45',
      content: '正宗、食材新鲜、健康、美味的四川美食. 热爱吃辣的食客们千万不要错过! ',
      introduce: 'Brokadi Ravintola',
      id: '5597a05ae4b08a686ce56f05',
      iconid: '1231233',
      author: '竹林一贤1',
      black: '\n\n\n',
    },
    'Nanking':{
      url: 'https://i2.achangpro.com/img.angela51.com/pixnet/9abe809e27cf0e79969c7b556e2921a3.jpg',
      title: '南京中餐厅',
      entitle: 'Nanking',
      worktime: '  营业时间: 星期一至星期五 11:00:00-23:00:00 星期六 12:00:00-23:00:00 星期日 12:00:00-22:00:00',
      workadress: '  (http://fi-fi.facebook.com/pages/Nanking/187118674667122)',
      enworkadress: '  Kalevankatu 28',
      content: '位于市中心的中餐厅. ',
      introduce: 'Nanking',
      id: '5597a05ae4b08a686ce5616',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Chengdu Restaurant':{
      url: 'https://i2.achangpro.com/img.angela51.com/pixnet/7c008277196d0e6abb9a20de1c877de5.jpg',
      title: '成都餐厅',
      entitle: 'Chengdu Restaurant',
      worktime: '  营业时间: 星期一至星期五 11:00:00-22:00:00 星期六&星期日 12:00:00-22:00:00',
      workadress: '  (http://www.chengduravintola.fi)',
      enworkadress: '  Svinhufvudintie 1, Kulosaaren Ostoskeskus',
      content: '成都餐厅是位于古洛萨利岛(Kulosaari)上的一家川菜馆, 口味正宗. ',
      introduce: 'Chengdu Restaurant',
      id: '5597a05ae4b08a686ce527',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Long Wall':{
      url: 'http://loftcn.com/wp-content/uploads/2017/09/20170919_105512_1279.jpeg',
      title: '长城饭店',
      entitle: 'Long Wall',
      worktime: '  营业时间: 星期一至星期五: 11:00:00-23:00:00 星期六&星期日 12:00:00-23:00:00',
      workadress: '  (http://www.facebook.com/pages/Ravintola-Long-Wall/102903416464415)',
      enworkadress: '  Annankatu 26',
      content: '赫尔辛基市中心1988年开业至今的中餐厅, 供应中国传统美食. ',
      introduce: 'Long Wall',
      id: '5597a05ae4b08a686ce5638',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    }
  },
  {
    'Allas Sea Pool':{
    url: 'https://www.wtcf.org.cn/uploadfile/2016/0506/20160506050310907.jpg',
    title: '阿拉斯海水泳池',
    entitle: 'Allas Sea Pool',
    worktime: '  营业时间: 星期一至星期五 06:30:00-21:00:00 星期六 09:00:00-21:00:00 星期日:10:00:00-20:00:00',
    workadress: '  (http://www.allasseapool.fi)',
    enworkadress: '  Katajanokanlaituri 2a',
    content: '阿拉斯海水泳池(Allas Sea Pool)是一处海洋水疗休闲中心, 坐落在赫尔辛基市中心著名的集市广场(Kauppatori)旁边. 它地处城市心脏地带, 因此被当地人称为赫尔辛基市中心的一片城市绿洲. 阿拉斯海水泳池为当地居民以及游客在繁华的赫尔辛基市中心开启了享受波罗的海的新方式. 水疗中心全年开放, 为这片区域注入了一股新的活力以及享受超值体验的机会. 中心内有三个桑拿房、两个淡水泳池, 以及一个和海水温度一致的海水泳池. 除此以外, 中心内还有健身房、健身教练、餐厅、咖啡厅、运动及健身服务, 以及文化活动. ',
    introduce: 'Allas Sea Pool',
    id: '5597a05ae4b08a686ce56f1d1',
    iconid: '1231233',
    author: '竹林一贤1',
    black: '\n\n\n',
    },
    'Kosmos':{
      url: 'https://dimg04.c-ctrip.com/images/fd/tg/g4/M09/06/F5/CggYHlXJTkWAKFNsAAjigGHjldc675_C_350_230.jpg',
      title: '宇宙餐厅',
      entitle: 'Kosmos',
      worktime: '  营业时间: 星期一至星期五 11:30:00-01:00:00 星期六 16:00:00-01:00:00 休息时间: 星期日 特殊情况: 工作日午餐 11:30-15:00',
      workadress: '  (http://www.kosmos.fi)',
      enworkadress: '  kalevankatu 3',
      content: '从1924年至今, 海博蓝比(Hepolampi)家族拥有的宇宙餐厅一直是赫尔辛基饮食文化的一部分. 餐厅内部装饰保留开店之初的原貌以及自己的特点. 餐厅厨房代表了赫尔辛基从弗叙麦克(vorschmack)到鞑靼牛肉以及从小牛胸腺到波罗的海鲱鱼悠久的烹饪传统. ',
      introduce: 'Kosmos',
      id: '5597a05ae4b08a686ce527d7',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Kuurna':{
      url: 'https://images.cdn.uniqueway.com/uploads/2017/01/16d8b06e-3e89-4ab2-8b26-c649811496ec.jpg',
      title: '古乐纳餐馆',
      entitle: 'Kuurna',
      worktime: '  营业时间: 星期一至星期四 18:00:00-22:30:00 星期五 18:00:00-23:30:00 星期六 16:00:00-23:30:00 休息时间: 星期日 特殊情况: 星期一星期五 时段1 18:00:00-20:00:00 时段2 20:30:00 星期六 时段1 16:00:00-18:00:00 时段2 18:00:00-20:00:00 时段3 20:30:00',
      workadress: '  (http://www.kuurna.fi)',
      enworkadress: '  Meritullinkatu 6',
      content: '古乐纳是一家精致且惬意的当地小餐馆. 菜单上菜品每两周更换一次, 并且推出每日特点菜. 所有的食材全部经过了精心筛选以保证每道佳肴都是芬兰传统与现代美式的碰撞与结合. 古乐纳每天两个时段营业, 接待八方来客. ',
      introduce: 'Kuurna',
      id: '5597a05ae4b08a686ce562d2',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Restaurant Elite':{
      url: 'https://youimg1.c-ctrip.com/target/100r0l000000cqdjg7D66.jpg',
      title: '精英餐厅',
      entitle: 'Restaurant Elite',
      worktime: '  营业时间: 星期一&星期五: 11:30:00-22:00:00 星期三&星期四 11:30-23:00 星期五 11:30-00:00:00 星期六 13:00:00-00:00:00 星期日 13:00:00-22:00:00',
      workadress: '  (http://www.elite.fi)',
      enworkadress: '  Etelainen Hesperiankatu 22',
      content: '精英餐厅自1932年开业, 就逐渐成为了一个具有独特文化的餐厅以及艺术家们的客厅. 演员、音乐家、作家、舞者和艺术家多年来享受这个现实生活的剧院. 精英餐厅的一些艺术家顾客的作品会挂在餐厅的墙上宫大家观赏. 这家芬兰的国际化餐厅供应著名芬兰演员Tauno Palo创造的奶油洋葱沙朗牛排以及芬兰战时元帅曼纳海姆最喜爱的菜品之一Vorschmack. ',
      introduce: 'Restaurant Elite',
      id: '5597a05ae4b08a686ce5638d8',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    },
    'Restaurant Juuri':{
      url: 'https://i2.achangpro.com/img.angela51.com/pixnet/c0098711b61a961a962ad897cf4798e8.jpg',
      image: 'https://img1.qunarzz.com/travel/poi/1510/62/73e29a8fde362.jpg_r_480x360x95_61c81d79.jpg',
      imageone: 'https://img1.qunarzz.com/travel/poi/1509/fc/edd146b26acfda.jpg_r_480x360x95_a3094f70.jpg',
      title: '尤里',
      entitle: 'Restaurant Juuri',
      worktime: '  营业时间: 星期一至星期五 11:30:00-23:00:00 星期六 12:00:00-23:00:00 星期日 16:00:00-23:00:00 特殊情况: 工作日午餐 11:00:00-14:30:00',
      workadress: '  (http://www.juuri.fi)',
      enworkadress: '  Korkeavuorenkatu 27',
      content: '正宗的芬兰美食, 满腔的热情, 野生的调料, 疯狂的创意, 对艺术创造的爱以及对美食烹饪的高超技能. 这些至关重要的元素, 造就了尤里餐厅. ',
      introduce: 'Restaurant Juuri',
      id: '5597a05ae4b08a686ce53d3',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Restaurant Kappeli':{
      url: 'https://images.cdn.uniqueway.com/uploads/2017/01/16d8b06e-3e89-4ab2-8b26-c649811496ec.jpg',
      image: 'https://images.cdn.uniqueway.com/uploads/2016/11/1598765a-5dec-4385-b08e-f558b6e6aa8b.jpg',
      imageone: 'https://images.cdn.uniqueway.com/uploads/2016/11/31e07b01-5d8a-447e-a766-a700bd48acf4.jpg',
      title: '卡百利餐厅',
      entitle: 'Bier-Bier',
      worktime: '  营业时间: 星期一至星期日: 10:00:00-00:00:00',
      workadress: '  (http://www.raflaamo.fi/fi/helsinki/kappeli)',
      enworkadress: '  Erottajankatu 13',
      content: '卡百利餐厅供应经典芬兰菜肴已经有了140年对历史. 餐厅氛围独特, 即惬意又时尚. 餐厅坐拥埃斯普拉纳蒂公园的街景、宽上明亮的玻璃阳台以及房间本身庄严的精髓, 这一切都让人难忘. 餐厅的咖啡厅是当地人传统见面聚会的场所, 供应甜点以及咸口零食, 以及一系列优质的啤酒和葡萄酒. 酒吧是餐厅里是最悠久的部分, 人们也愿意在下班之后来这里会面或者放松休闲. . ',
      introduce: 'Etelaesplanadi 1',
      id: '5597a05ae4b08a686ce5614d4',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    },
    'Restaurant Nokka':{
      url: 'http://www.conran.com.cn/attachment/image/201212/1354594101.jpg',
      image: 'https://images.cdn.uniqueway.com/uploads/2015/06/14707f36-fd4f-4e83-955e-cd8cf05598fc.jpg',
      imageone: 'http://www.beioumanyou.cn/uploads/olo%20ravintola.jpg',
      imagetwo: 'https://media-cdn.tripadvisor.com/media/photo-s/12/ac/e7/f2/mustan-haran-pihvi-talon.jpg',
      title: '诺卡餐厅',
      entitle: 'Restaurant Nokka',
      worktime: '  营业时间: 星期一&星期二 11:30:00-22:00:00 星期三&星期四&星期五 11:30:00-23:00:00 星期六 18:00:00-00:00:00 休息时间: 星期日',
      workadress: '  (http://www.ravintolanokka.fi/)',
      enworkadress: '  Kanavaranta 7 F',
      content: '由大厨Ari Ruoho管理经营的诺卡(Nokka)餐厅, 是芬兰为一家私人的, 选用第一手食材和VIP的餐厅-非常(V)重要(i)食材提供商(P)餐厅致力于供应最纯净的季节性食材配料, 例如来自于拉普兰Salla的森林以及全芬兰境内精选当地小农场. 夏季的时候, 诺卡(Nokka)餐厅向波罗的海开放, 这无疑是赫尔辛基最诱人的室外露台区之一, 而这样的美景, 与赫尔辛基市中心仅仅有一石之隔. 餐厅的咖啡厅以及商店供应午餐, 葡萄酒以及咖啡. 餐厅还收麦饼外带菜单上的特色美食, 即可为小诗, 又可为正餐一顿. ',
      introduce: 'Restaurant Nokka',
      id: '5597a05ae4b08a686ce56f05d5',
      iconid: '1231233',
      author: '竹林一贤1',
      black: '\n\n\n',
    },
    'Restaurant Ora':{
      url: 'https://pic.carry.yun.ansuner.com/casepic/upcaseimgs/carry_case-201857142839372.jpg',
      image: 'https://pic.carry.yun.ansuner.com/casepic/upcaseimgs/carry_case-2018424112416920.jpg',
      title: '奥拉餐厅',
      entitle: 'Restaurant Ora',
      worktime: '  营业时间: 星期三&星期四 18:00:00-23:45 星期五&星期六 16:00:00-23:45 休息时间: 星期一&星期二&星期日 特殊情况: 星期五至星期六午餐 12:00:00-14:00:00 星期三至星期六晚餐 18:00:00之后 建议提前订位',
      workadress: '  (http://orarestaurant.fi)',
      enworkadress: '  Huvilakatu 28',
      content: '小巧、精致、仅仅有23个座位的奥拉餐厅2017年8月在市中心别墅街(Huvilakatu)开业. 餐厅定位高档精致美食路线, 氛围优雅, 主厨萨苏劳库宁(Sasu Laukkonen)专注于选择当地食材烹饪应季佳肴. 6道菜的菜单为餐厅晚餐以及周五于周六午餐主打. 奥拉在2018年获得了米其林1星的认可. ',
      introduce: 'Restaurant Ora',
      id: '5597a05ae4b08a686ce5616d6',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'StoryOldMarketHall':{
      url: 'http://www.linkshop.com.cn/upload/article/2015/20151216140426_1513.jpg',
      title: '"故事餐厅"-老农贸市场',
      entitle: 'Story Old Market Hall',
      worktime: '  营业时间: 星期一至星期六 08:00:00-18:00:00 星期日 10:00:00-17:00:00',
      workadress: '  (http://www.story-restaurants.fi)',
      enworkadress: '  Etelaranta',
      content: '"故事"餐厅带给每一位客人: 精致的环境、顶尖的厨师、甜点师、上乘葡萄酒专家、对加工制作食物的挚爱，以及最佳食材。"故事"餐厅的美食在自己的厨房内精心准备。早餐每日供应煎蛋、火腿蛋松饼、早餐粥、餐厅特色格兰诺拉麦片。午餐为家常口味特色，每天供应不同的肉类或者鱼类，以及根据季节变换的蔬菜沙拉。"故事"餐厅的面包与甜点都来自于当地的面包房. ',
      introduce: 'Story Old Market Hall',
      id: '5597a05ae4b08a686ce5616d6111',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
  },
  {
    'Ateljee Bar':{
    url: 'http://loftcn.com/wp-content/uploads/2017/09/20170918_121422_375.jpg',
    image: 'http://loftcn.com/wp-content/uploads/2014/02/088646A63D02897B70C515C31B5272DB_B800_2400_720_480.jpeg',
    imageone: 'http://loftcn.com/wp-content/uploads/2015/04/20150415_163946_015.jpeg',
    title: '工作室酒吧',
    entitle: 'Ateljee Bar',
    worktime: '  营业时间: 星期一至星期四 12:00:00-01:00:00 星期五&星期六 12:00:00-02:00:00 休息时间: 星期日:14:00:00-00:00:00',
    workadress: '  (http://www.rafiaamo.fi.fi.helsinki/ateljee-bar)',
    enworkadress: '  Yrjonkatu 26, Sokos Hotel Torni',
    content: '为当地人以及游客熟知的工作室酒吧位于酒店托尔尼(Hotelli Torni)顶层. 酒吧的露天阳台享有赫尔辛基城市壮丽的景色. 如果遇上阳光明媚的天气, 眺望海平面可看到远方的爱沙尼亚首都塔林. 夜幕降临后, 城市跳跃的光亮有时还上另一个美景. 工作室酒吧为当地人所熟知且津津乐道的主要原因是: 标志性酒精饮品莫希托、高质量的各类饮料、友好亲切的服务. 工作室酒吧从1951年在酒店托尔尼开业直至今日. ',
    introduce: 'Ateljee Bar',
    id: '5597a05ae4b08a686ce56f1e1',
    iconid: '1231233',
    author: '竹林一贤1',
    black: '\n\n\n',
    },
    'B-Side Bar':{
      url: 'https://youimg1.c-ctrip.com/target/100j0g00000087ngc0D7F.jpg',
      title: 'B-边酒吧',
      entitle: 'B-Side Bar',
      worktime: '  营业时间: 星期二&星期三&星期四: 15:00:00-23:00:00 星期五&星期六 13:00:00-02:00:00 休息时间: 星期一&星期日',
      workadress: '  (http://www.teurastamo.com/locations/b-side-bar.fi)',
      enworkadress: '  Tyopajankatu',
      content: '穿格子衬衣的调酒师站在以绿色瓷砖铺砌的吧台中, 为客人调制一杯杯品质纯正的鸡尾酒, 这正是B-边酒吧每日最常见的画面. 这样的景象会让走进酒吧的客人瞬间感受到70年代的氛围. 酒单上有手工啤酒、美国威士忌和高品质葡萄酒. 酒吧平日里安排各式节目或者活动, 周末邀请DJ做现场演奏. ',
      introduce: 'B-Side Bar',
      id: '5597a05ae4b08a686ce53e3',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Bar Loose':{
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/53/15/cd/caption.jpg',
      title: '中国酒楼家',
      entitle: 'Bar Loose',
      worktime: '  营业时间: 星期三至星期六 18:00:00-04:30:00 星期日 20:00:00-04:30:00 休息时间: 星期一&星期二',
      workadress: '  (http://www.barloose.com)',
      enworkadress: '  Annankatu 21',
      content: '松弛吧是一个知名的聚会场所. 傍晚时分, 有着各种兴趣爱好的人们三三两两的聚在这里聊天会友. 夜幕降临后, 高质量的现场演奏拉开序幕. 直到午夜, 松弛吧著名的摇滚乐响起, 松下舞池也因酒精的助兴达到高潮. 泡吧小贴士: 和小伙伴们准时来到餐厅共进晚餐, 尤其是在周末近午夜的时候, 酒吧人满为患, 要在门外排队很久才可能被保安允许进入. ',
      introduce: 'Bar Loose',
      id: '5597a05ae4b08a686ce562e2',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Bier-Bier':{
      url: 'https://dimg04.c-ctrip.com/images/fd/tg/g4/M09/06/F5/CggYHlXJTkWAKFNsAAjigGHjldc675_C_350_230.jpg',
      title: '啤酒-啤酒',
      entitle: 'Bier-Bier',
      worktime: '  营业时间: 星期一至星期四: 16:00:00-00:00:00 星期五&星期六 14:00:00-02:00:00 休息时间: 星期日',
      workadress: '  (http://www.bier-bier.fi)',
      enworkadress: '  Erottajankatu 13',
      content: '啤酒-啤酒酒吧温馨、现代、服务高水准, 更有精心挑选的各式啤酒让啤酒爱好者们惠顾品尝. 近百种啤酒、数十种苹果酒以及二十多种葡萄酒, 不仅可以满足酒品发烧友们的极高标准, 也可以让新手们有独特的体验. ',
      introduce: 'Bier-Bier',
      id: '5597a05ae4b08a686ce5614e4',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    },
    'Bryggei Helsinki':{
      url: 'http://www.neeu.com/uploads/images/2013/8/28/1377679937916.jpg',
      title: '赫尔辛基啤酒厂餐厅酒吧',
      entitle: 'Bryggei Helsinki',
      worktime: '  营业时间: 星期一至星期五: 11:00:00-00:00:00 星期六 12:00:00-00:00:00 休息时间: 星期日',
      workadress: '  (http://bryggerihelsinki.fi/)',
      enworkadress: '  Sofiankatu 2',
      content: '赫尔辛基啤酒厂餐厅酒吧自酿啤酒, 自制美食. 从制作源头洁净的原材料开始到最终呈现在食客们手中的啤酒以及料理, 均为餐厅一手操办. 餐厅的菜单根据季节性确定, 以保证失败的新鲜度以及口味最佳. 餐厅的九品为餐厅地下室自家酿造出品, 品种多样, 口味新鲜纯正, 深受当地人以及游客们的喜爱. 餐厅里的就不仅仅是酒吧的他色, 也为餐厅美食量身定做. ',
      introduce: 'Bryggei Helsinki',
      id: '5597a05ae4b08a686ce56f05e5',
      iconid: '1231233',
      author: '竹林一贤1',
      black: '\n\n\n',
    },
    'Clarion Sky Room':{
      url: 'http://loftcn.com/wp-content/uploads/2017/09/20170919_105512_1285.jpeg',
      title: '克拉里奥天空酒吧/赫尔辛基克拉里奥酒店',
      entitle: 'Clarion Sky Room',
      worktime: '  营业时间: 星期一至星期四 16:00:00-01:00:00 星期五&星期六 15:00:00-02:00:00 星期日 18:00:00-00:00:00',
      workadress: '  (http://www.nordicchoicehotels.fi/hotellit/suomi/helsinki/clarion-hotel=helsinki/tilat/sky-room)',
      enworkadress: '  Tyynenmerenkatu 2, Clarion Hotel Helsinki',
      content: '地理位置绝佳的赫尔辛基克拉里奥酒店顶层的克拉里奥天空酒吧(Clarion Sky Room)是赫尔辛基最炫酷的聚会场所之一. 站在这里就如同站在了首都的屋顶之上, 可以尽情享受整个城市的壮丽美景. 酒吧里技艺精湛的调酒师、美味经验精致小巧的美食、现代的艺术、深度有趣的音乐以及豪华的装饰, 都是酒吧呈现给宾客们的用心良苦与品质追求. ',
      introduce: 'Clarion Sky Room',
      id: '5597a05ae4b08a686ce5616e6',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Kaiku':{
      url: 'https://images.cdn.uniqueway.com/uploads/2015/11/42dce6bc-98bf-4971-8c8b-f30d5453ce58.jpg',
      image: 'http://loftcn.com/wp-content/uploads/2015/03/20150326_160433_008.jpeg',
      title: '回音',
      entitle: 'Kaiku',
      worktime: '  营业时间: 星期四 22:00:00-04:00:00 星期五&星期六 22:00:00-05:00:00 休息时间: 星期一&星期二&星期三&星期日',
      workadress: '  (http://www.clubkaiku.fi)',
      enworkadress: '  Kaikukatu 4',
      content: '2013年在赫尔辛基市中心的一座旧厂房开业的回音(Kaiku)是赫尔辛基文化俱乐部中的佼佼者. 与著名的第六街(Kuudes Linja)以及西尔塔宁(Siltanen)在同一街区. 自回音(Kaiku)开业以来, 络绎不绝的客人中不乏国内外知名人士. 卫报(The Guardian)把回首(Kaiku)评为2014年欧洲最佳俱乐部之一. ',
      introduce: 'Kaiku',
      id: '5597a05ae4b08a686ce527e7',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Siltanen':{
      url: 'http://loftcn.com/wp-content/uploads/2018/01/20170921_103338_854.jpeg',
      title: '精英餐厅',
      entitle: 'Siltanen',
      worktime: '  营业时间: 星期一至星期四 11:00:00-02:00:00 星期五&星期六 11:00:00-03:00:00 休息时间: 星期日',
      workadress: '  (http://www.siltanen.org)',
      enworkadress: '  Hameentie 13 B',
      content: '西尔塔宁是时髦人士聚会的场所, 几乎每晚都安排不同主题的俱乐部之夜. 每天十点之前, 餐厅昂达(Onda)向各位宾客供应美食. 然而随着太阳的降落, 桌子边藏到舞台下边, 餐厅变身酒吧. 周末的时候, 桌椅上也可以跳舞. 餐厅供应素食选择, 每周六可品尝到迷路早午餐. ',
      introduce: 'Siltanen',
      id: '5597a05ae4b08a686ce5638e8',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    }
  },
  {
    'Market Square':{
    url: 'https://img1.qunarzz.com/travel/d1/1703/1f/1706904f7835a4b5.jpg_480x360x95_d96e4b02.jpg',
    title: '集市广场',
    entitle: 'Market Square',
    worktime: '  营业时间: 星期一至星期五 06:30:00-19:00:00 星期六 06:30:00-18:00:00 休息时间: 星期日 特殊情况: 夏季每星期日 10:00-17:00',
    workadress: '  (http://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/kaupunkikulttuuri/torit-kirpputorit/)',
    enworkadress: '  Etelaranta',
    content: '集市广场坐落在埃斯普拉纳蒂公园(Esplanadepark)一端的南码头(South Harbour), 是赫尔辛基最著名、也是最国际的集市. 这里的摊点出售传统街头小吃、美食、手工艺品和纪念品. 集市中还设有供暖的咖啡帐篷, 即便在最寒冷的冬日还可以舒适的坐在其中享受热腾腾的咖啡. ',
    introduce: 'Market Square',
    id: '5597a05ae4b08a686ce56f1f1',
    iconid: '1231233',
    author: '竹林一贤1',
    black: '\n\n\n',
    },
    'Restaurant China':{
      url: 'https://youimg1.c-ctrip.com/target/100r0l000000cqdjg7D66.jpg',
      title: '中国酒楼家',
      entitle: 'Restaurant China',
      worktime: '  营业时间: 星期一至星期五 11:00:00-23:00:00 星期六&星期日 12:00:00-23:00:00 特殊情况: 点餐时间为22:30店截止',
      workadress: '  (http://www.ravintolachina.fi)',
      enworkadress: '  Annankatu 25',
      content: '中国酒楼家-1973年在芬兰首都赫尔辛基中心安娜(Annankatu)大街开业的第一家中餐厅. 餐厅内设65个座位, 主营中国南方广东风味美食, 口味正宗, 品质上乘. 餐厅环境优雅, 可品尝到广东点心、各种食材, 豆腐以及海鲜类餐食. 餐厅还为亚洲食客准备了特殊菜色以及煲仔饭, 可在点餐时特别咨询. ',
      introduce: 'Restaurant China',
      id: '5597a05ae4b08a686ce562f2',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Restaurant Suomenlinnan Panimo - Suomenlinna Brewery':{
      url: 'http://i1.sinaimg.cn/travel/cr/2014/1031/2903475615.jpg',
      image: 'http://loftcn.com/wp-content/uploads/2019/03/20190328_105216_014.jpg',
      imageone: 'https://images.cdn.uniqueway.com/uploads/2016/11/e36c0906-8ff5-4a4c-a2d1-5db3aa6c00a9.jpg',
      title: '芬兰堡酿酒厂餐厅',
      entitle: 'Restaurant Suomenlinnan Panimo - Suomenlinna Brewery',
      worktime: '  营业时间: 全天营业 特殊情况: 全年开放, 营业时间请参照餐厅官方网站. ',
      workadress: '  (http://www.panimoravintola.fi)',
      enworkadress: '  Suomenlinna C 1 (Rantakasarmi)',
      content: '芬兰堡酿酒厂餐厅(Restaurent Suomenlinnan Panimois)是著名的芬兰堡上的高等餐厅. 芬兰堡距赫尔辛基码头市场仅仅有15分钟的渡船距离, 而酿酒厂餐厅就在芬兰堡主码头旁边. 餐厅风味独特, 没事口味收到了俄罗斯以及瑞典的影响. 这样的影响与芬兰堡和俄罗斯以及瑞典之间的历史渊源密不可分. 餐厅不仅供应美食, 还有自家小小的酿酒厂. 美食, 美酒, 新鲜的芬兰食材, 来到芬兰堡的你, 一定不能错过欧. ',
      introduce: 'Restaurant Suomenlinnan Panimo - Suomenlinna Brewery',
      id: '5597a05ae4b08a686ce53f3',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Bier-Bier':{
      url: 'https://dimg04.c-ctrip.com/images/fd/tg/g4/M09/06/F5/CggYHlXJTkWAKFNsAAjigGHjldc675_C_350_230.jpg',
      title: '啤酒-啤酒',
      entitle: 'Bier-Bier',
      worktime: '  营业时间: 星期一至星期四: 16:00:00-00:00:00 星期五&星期六 14:00:00-02:00:00 休息时间: 星期日',
      workadress: '  (http://www.bier-bier.fi)',
      enworkadress: '  Erottajankatu 13',
      content: '啤酒-啤酒酒吧温馨、现代、服务高水准, 更有精心挑选的各式啤酒让啤酒爱好者们惠顾品尝. 近百种啤酒、数十种苹果酒以及二十多种葡萄酒, 不仅可以满足酒品发烧友们的极高标准, 也可以让新手们有独特的体验. ',
      introduce: 'Bier-Bier',
      id: '5597a05ae4b08a686ce5614f4',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    },
    'Cafe Regatta':{
      url: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M06/05/6E/CggYG1XJTkGAVIq8AAh79ThFBm8112_C_350_230.jpg',
      title: '瑞卡塔咖啡馆',
      entitle: 'Cafe Regatta',
      worktime: '  营业时间: 星期一至星期日: 08:30:00-21:00:00',
      workadress: '  (http://caferegatta.fi/)',
      enworkadress: '  Merikannontie 8',
      content: '碟略区(Toolo)靠海的一座小小的红色的别墅中, 有一家复古乡村内饰风格的咖啡小馆, 它的名字叫瑞卡塔咖啡馆. 新鲜出炉的肉桂包、精致的美食以及有魅力和轻松的氛围, 是这家咖啡小馆呈现给食客们的特色. 咖啡馆的院子里有一个开放式烤炉, 客人们可以在上边烤香肠. 注意, 香肠需要从咖啡馆里购买. 咖啡馆不仅热情对待每一位慕名而来的客人, 而且欢迎小宠物. ',
      introduce: 'Cafe Regatta',
      id: '5597a05ae4b08a686ce56f05f5',
      iconid: '1231233',
      author: '竹林一贤1',
      black: '\n\n\n',
    },
    'Cafe Samovarbar':{
      url: 'https://img1.qunarzz.com/travel/d1/1703/1f/1706904f7835a4b5.jpg_480x360x95_d96e4b02.jpg',
      title: '萨默瓦帕咖啡馆',
      entitle: 'Cafe Samovarbar',
      worktime: '  营业时间: 全天营业',
      workadress: '  (http://www.lelumusei.fi/kahvila)',
      enworkadress: '  Lelumuseo,Suomenlinna C 66',
      content: '著名的芬兰堡上(Suomenlinna)有个玩具博物馆, 馆内有一家很有意思的小小的萨默瓦帕咖啡馆. 站在咖啡馆外的露台上, 可以看到轮船在海面上驶过. 咖啡馆供应自制美食, 例如Tahmakapala巧克力蛋糕、科万科指挥官(Kovanko)苹果派配奶黄酱. ',
      introduce: 'Cafe Samovarbar',
      id: '5597a05ae4b08a686ce5616f6',
      iconid: '1231233',
      author: '竹林一贤2',
      black: '\n\n\n',
    },
    'Kosmos':{
      url: 'https://dimg04.c-ctrip.com/images/fd/tg/g4/M09/06/F5/CggYHlXJTkWAKFNsAAjigGHjldc675_C_350_230.jpg',
      title: '宇宙餐厅',
      entitle: 'Kosmos',
      worktime: '  营业时间: 星期一至星期五 11:30:00-01:00:00 星期六 16:00:00-01:00:00 休息时间: 星期日 特殊情况: 工作日午餐 11:30-15:00',
      workadress: '  (http://www.kosmos.fi)',
      enworkadress: '  kalevankatu 3',
      content: '从1924年至今, 海博蓝比(Hepolampi)家族拥有的宇宙餐厅一直是赫尔辛基饮食文化的一部分. 餐厅内部装饰保留开店之初的原貌以及自己的特点. 餐厅厨房代表了赫尔辛基从弗叙麦克(vorschmack)到鞑靼牛肉以及从小牛胸腺到波罗的海鲱鱼悠久的烹饪传统. ',
      introduce: 'Kosmos',
      id: '5597a05ae4b08a686ce527f7',
      iconid: '1231233',
      author: '竹林一贤3',
      black: '\n\n\n',
    },
    'Restaurant Elite':{
      url: 'https://youimg1.c-ctrip.com/target/100r0l000000cqdjg7D66.jpg',
      title: '精英餐厅',
      entitle: 'Restaurant Elite',
      worktime: '  营业时间: 星期一&星期五: 11:30:00-22:00:00 星期三&星期四 11:30-23:00 星期五 11:30-00:00:00 星期六 13:00:00-00:00:00 星期日 13:00:00-22:00:00',
      workadress: '  (http://www.elite.fi)',
      enworkadress: '  Etelainen Hesperiankatu 22',
      content: '精英餐厅自1932年开业, 就逐渐成为了一个具有独特文化的餐厅以及艺术家们的客厅. 演员、音乐家、作家、舞者和艺术家多年来享受这个现实生活的剧院. 精英餐厅的一些艺术家顾客的作品会挂在餐厅的墙上宫大家观赏. 这家芬兰的国际化餐厅供应著名芬兰演员Tauno Palo创造的奶油洋葱沙朗牛排以及芬兰战时元帅曼纳海姆最喜爱的菜品之一Vorschmack. ',
      introduce: 'Restaurant Elite',
      id: '5597a05ae4b08a686ce5638f8',
      iconid: '1231233',
      author: '竹林一贤4',
      black: '\n\n\n',
    }
  },
  {
    'gourmetbanner':[
      {
        url: '/pages/mainicondetail/index?idinfo=6188861',
        image: 'https://youimg1.c-ctrip.com/target/fd/tg/g3/M0A/92/B4/CggYGVbQMgKAX3CpAAGtPRwQTjQ412_R_671_10000_Q90.jpg?proc=autoorient',
        idinfo: '6188861',
        title: '像本地人一样在赫尔辛基尝遍美食',
        content: '走到哪吃到哪'
      },
      {
        url: '/pages/mainicondetail/index?idinfo=6188862',
        image: 'https://i2.achangpro.com/img.angela51.com/pixnet/cb0d1bce8897e47996e9b54c61d34d7f.jpg',
        idinfo: '6188862',
        title: '这十家周末人气brunch, 不要错过',
        content: '睡个懒觉, 吃顿美味午早餐'
      },
    ]
  }
]

export default function gourmets (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GOURMET:
    return{
      ...state
    }
    default:
      return state
  }
}
