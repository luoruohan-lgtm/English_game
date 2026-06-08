// High-quality contextual templates that adapt perfectly to the active scenario setting
export interface WordSentence {
  sentence: string;
  translation: string;
}

// Compact structural tokens that adapt dynamically for each of the 10 scenarios
export const SCENARIO_TOKENS: Record<string, Record<string, { en: string; zh: string }>> = {
  ancient_palace: {
    actor: { en: "apprentice", zh: "庶出学子" },
    authority: { en: "house mistress", zh: "大院嫡母" },
    champion: { en: "brave guard captain", zh: "忠心侍卫统领" },
    stronghold: { en: "family courtyard", zh: "大院宗祠" },
    partner: { en: "local merchants", zh: "本地商帮" },
    group: { en: "family clan", zh: "家族商号" },
    antagonist: { en: "corrupt house manager", zh: "偏私的账房管事" },
    secret_skill: { en: "secret account records", zh: "房产绝密契约" },
    event: { en: "annual clan meeting", zh: "大房年终清算大考" },
    intel: { en: "spy's secret diary", zh: "密探搜集的底牌证据" },
    strategic_action: { en: "moving resources", zh: "调动商铺银两" },
    vault: { en: "private archive", zh: "内院藏书阁" },
    classified: { en: "forbidden accounting blueprints", zh: "商号不传之秘" },
    security: { en: "private guards", zh: "府内哨护" },
    treasure_house: { en: "confidential warehouse", zh: "密库大仓" },
    culture: { en: "wealthy estate council", zh: "大宋世家府邸" },
    prince: { en: "young master", zh: "大房嫡长子" },
    bureaucrat: { en: "local magistrate", zh: "县衙主政官" },
    parchment: { en: "parchment deeds", zh: "地契纸轴" },
    shrine: { en: "ancestral temple", zh: "内务祖堂" },
    den: { en: "嫡房密室", zh: "嫡系阴谋内堂" },
    beast: { en: "arrogant relative", zh: "刁难人的恶毒亲戚" },
    emperor: { en: "clan patriarch", zh: "老祖宗" },
    market: { en: "city market banner", zh: "江陵城闹市集" },
    products: { en: "silk garments", zh: "云锦丝绢" },
    crisis: { en: "famine and tax", zh: "寒冬饥荒灾欠" },
    queen: { en: "old grandmother", zh: "仁慈的老祖母" },
    scout: { en: "clever maid", zh: "探路丫鬟" },
    jade: { en: "emperor jade pendant", zh: "传家帝王绿翡翠" },
    temple_of_sun: { en: "center of the grand hall", zh: "祭祖祠堂正座" },
    rival: { en: "rival household faction", zh: "敌对的二房一派" },
    cleric: { en: "house counselor", zh: "客卿谋士" },
    chaos: { en: "clan financial crisis", zh: "家族财产纷争" }
  },
  imperial_court: {
    actor: { en: "young maid-in-waiting", zh: "新入宫秀女" },
    authority: { en: "noble consort", zh: "华贵高傲的贵妃" },
    champion: { en: "chief royal guard", zh: "御前带刀侍卫统领" },
    stronghold: { en: "inner palace pavilion", zh: "后宫正殿" },
    partner: { en: "influential ministers", zh: "前朝支持大臣" },
    group: { en: "palace faction", zh: "随侍各宫嫔妃" },
    antagonist: { en: "corrupt chief eunuch", zh: "贪得无厌的内务府总管" },
    secret_skill: { en: "royal poison registry", zh: "御院绝密名录" },
    event: { en: "emperor's birthday banquet", zh: "皇上万寿圣节大宴" },
    intel: { en: "whispered palace hearsay", zh: "敬事房密探呈交案情" },
    strategic_action: { en: "aligning court support", zh: "联络外戚言官" },
    vault: { en: "imperial library pavilion", zh: "皇家御书房" },
    classified: { en: "highly confidential court drafts", zh: "前朝储君密旨" },
    security: { en: "imperial wall guards", zh: "执勤禁军大内高手" },
    treasure_house: { en: "palace treasury vault", zh: "内廷御库" },
    culture: { en: "grand imperial court circles", zh: "深宫红墙名利场" },
    prince: { en: "crown prince", zh: "大皇子殿下" },
    bureaucrat: { en: "grand secretary", zh: "内阁首辅" },
    parchment: { en: "silk decrees", zh: "明黄密旨轴" },
    shrine: { en: "shrine of heaven", zh: "天坛圣殿" },
    den: { en: "consort's plotting chamber", zh: "贵妃密谋宫苑" },
    beast: { en: "crafty senior maid", zh: "挑刺的毒辣掌事老姑姑" },
    emperor: { en: "emperor majesty", zh: "圣上皇上" },
    market: { en: "palace bazaar gate", zh: "宫门御街商圈" },
    products: { en: "tribute tea", zh: "西湖贡茶御物" },
    crisis: { en: "palace coup risk", zh: "后宫投毒巫蛊风波" },
    queen: { en: "empress mother", zh: "仁慈的主母太后" },
    scout: { en: "trusty eunuch runner", zh: "传信的小太监" },
    jade: { en: "sovereign dragon seal", zh: "传国九龙玉玺" },
    temple_of_sun: { en: "gold dragon throne", zh: "奉天殿金漆宝座" },
    rival: { en: "hostile consorts", zh: "敌对贵妃一党" },
    cleric: { en: "royal astrologer", zh: "钦天监监正" },
    chaos: { en: "court power struggle", zh: "朝政夺嫡动荡" }
  },
  modern_city: {
    actor: { en: "business intern", zh: "新入职分析师" },
    authority: { en: "regional general manager", zh: "区域总经理" },
    champion: { en: "senior project director", zh: "资深业务总监" },
    stronghold: { en: "corporate skyscraper headquarters", zh: "集团总部高楼" },
    partner: { en: "external global suppliers", zh: "跨国战略合作商" },
    group: { en: "consulting team", zh: "项目攻坚组" },
    antagonist: { en: "corrupt CFO board member", zh: "贪婪受贿的董事高管" },
    secret_skill: { en: "proprietary mergers and acquisitions plan", zh: "千亿并购绝密方案" },
    event: { en: "Q3 company product bidding", zh: "第三季度重点产品竞标案" },
    intel: { en: "competitor's market analysis reports", zh: "竞占对手的核心财报底稿" },
    strategic_action: { en: "allocating enterprise investments", zh: "调配分配集团资产" },
    vault: { en: "corporate server vault", zh: "集团中央机密服务器" },
    classified: { en: "NDA financial spreadsheets", zh: "高度受限未上市财务表" },
    security: { en: "network compliance directors", zh: "法务风控合规团队" },
    treasure_house: { en: "proprietary database index", zh: "保密核心数据中心" },
    culture: { en: "high-stakes corporate industry", zh: "现代都市金融圈" },
    prince: { en: "junior executive heir", zh: "集团少董" },
    bureaucrat: { en: "PR vice president", zh: "集团公关部VP" },
    parchment: { en: "encrypted digital contracts", zh: "加签电子合同契约" },
    shrine: { en: "finance hub headquarters office", zh: "全球财资结算中心" },
    den: { en: "executive boardroom", zh: "高管闭门密谋会议室" },
    beast: { en: "industry monopoly rival", zh: "垄断性恶意吞并对手" },
    emperor: { en: "group board chairman", zh: "集团董事长" },
    market: { en: "metropolitan high-street business market", zh: "名流CBD高端商圈" },
    products: { en: "premium tech software", zh: "智能核心系统软件" },
    crisis: { en: "market short-selling panic", zh: "空头大鳄恶意做空危机" },
    queen: { en: "board female patron", zh: "和蔼高风的女性投资大股东" },
    scout: { en: "efficient human resources coordinator", zh: "精干高效的猎头助理" },
    jade: { en: "exclusive venture backing card", zh: "百亿至尊投资黑钻卡" },
    temple_of_sun: { en: "main stage of the annual global tech forum", zh: "全球青年企业家论坛首脑主桌" },
    rival: { en: "unscrupulous competitors", zh: "恶性做空财团对手" },
    cleric: { en: "senior strategy consultant", zh: "资深商业顾问" },
    chaos: { en: "hostile corporate takeovers", zh: "惊心动魄的股市交锋" }
  },
  college_life: {
    actor: { en: "undergraduate freshman", zh: "刚入学的大一学弟" },
    authority: { en: "course professor", zh: "高数高资历教授" },
    champion: { en: "passionate student club founder", zh: "热血辩论社社长" },
    stronghold: { en: "campus lecture hall", zh: "阶梯大讲堂" },
    partner: { en: "student union committee", zh: "校学生会干部" },
    group: { en: "cooperative study club", zh: "互助复习社团" },
    antagonist: { en: "biased examination grader", zh: "打分极苛刻的教务考官" },
    secret_skill: { en: "exclusive exam study guides", zh: "期末考独家复习大纲" },
    event: { en: "national college debate final tournament", zh: "全国大学生挑战杯总决赛" },
    intel: { en: "rival school's prepared drafts", zh: "隔壁高校的辩论重点情报" },
    strategic_action: { en: "drafting group projects", zh: "撰写答辩汇报方案" },
    vault: { en: "campus library archives", zh: "校园主图书馆陈年馆藏室" },
    classified: { en: "confidential postgraduate theses", zh: "高深难度科研论文" },
    security: { en: "dormitory monitors", zh: "值班宿舍宿管阿姨" },
    treasure_house: { en: "student association workspace", zh: "自习社团活动大本营" },
    culture: { en: "modern academic community", zh: "象牙塔校园学术生活" },
    prince: { en: "honors research genius", zh: "埋头狂读的学神舍友" },
    bureaucrat: { en: "department academic dean", zh: "学科主任主管" },
    parchment: { en: "graded handout bundles", zh: "打印的复习题选包" },
    shrine: { en: "national core campus lab", zh: "国家重点多媒体微室" },
    den: { en: "vibrant debate studio", zh: "社团排练教案大本营" },
    beast: { en: "difficult advanced math exam paper", zh: "压轴的变态难高等数学卷" },
    emperor: { en: "university chief chancellor", zh: "大学名誉校长" },
    market: { en: "campus food market street", zh: "后校门美食小吃街" },
    products: { en: "referenced text books", zh: "必考专业教材书" },
    crisis: { en: "academic exam pressure", zh: "挂科期末绩点危机" },
    queen: { en: "friendly student vice president advisor", zh: "温柔热心的辅导员老师" },
    scout: { en: "supportive student guide classmate", zh: "发配考试范围的学习副委员" },
    jade: { en: "first-grade state scholarship certificate", zh: "国家特等奖学金证书" },
    temple_of_sun: { en: "the challenge cup top rank podium", zh: "国赛一等奖颁奖台上" },
    rival: { en: "opposing collegiate groups", zh: "隔壁竞争高校论敌" },
    cleric: { en: "senior study counselor", zh: "资深学生会指导学姐" },
    chaos: { en: "stressful term final week", zh: "紧迫逼人的期末复习周" }
  },
  fantasy_adventure: {
    actor: { en: "aspiring magical trainee", zh: "初级奥术学徒" },
    authority: { en: "supreme high archmage", zh: "至高奥术大导师" },
    champion: { en: "legendary magic protector", zh: "白银魔能护卫长" },
    stronghold: { en: "ancient flying floating citadel", zh: "天空悬浮古堡" },
    partner: { en: "elven trading guilds", zh: "精灵魔能商会" },
    group: { en: "adventurer guild team", zh: "勇者冒险小队" },
    antagonist: { en: "wicked corrupt conjurer", zh: "暗中败坏的黑巫师" },
    secret_skill: { en: "forbidden runic spell manual", zh: "远古禁咒咒法秘笈" },
    event: { en: "grand autumn arcane tournament", zh: "四年一届的奥术大决斗" },
    intel: { en: "secret scouting maps", zh: "探子送来的虚空裂隙情报" },
    strategic_action: { en: "deploying elemental forces", zh: "调配充盈法能兵马" },
    vault: { en: "citadel forbidden scroll hall", zh: "极秘奥术古物阁" },
    classified: { en: "highly hazardous conjuring scrolls", zh: "绝禁深渊奥秘术式" },
    security: { en: "gargantuan stone elemental sentries", zh: "大殿巨型石雕魔像守卫" },
    treasure_house: { en: "crystallized mana vault", zh: "满载精晶的魔法仓库" },
    culture: { en: "high fantasy magical community", zh: "艾尔法斯魔法文明世界" },
    prince: { en: "noble elven prince", zh: "白金精灵大皇子" },
    bureaucrat: { en: "royal diplomatic envoy", zh: "圣堂特派大外交使节" },
    parchment: { en: "ancient glowing parchment scrolls", zh: "闪烁微光的羊皮魔法轴" },
    shrine: { en: "sun celestial temple", zh: "山巅太阳圣像神庙" },
    den: { en: "volcanic dragon's den", zh: "远古巨龙熔岩巢穴" },
    beast: { en: "gargantuan twilight shadow dragon", zh: "深渊熔岩骨龙大恶兽" },
    emperor: { en: "grand sovereign wizard king", zh: "奥术圣皇大君主" },
    market: { en: "bustling magic crystal bazaar", zh: "奥能主城水晶大集市" },
    products: { en: "stabilized potion formulas", zh: "特级高阶魔法药剂" },
    crisis: { en: "void dimensional tearing", zh: "深渊暗能涌动破防灾祸" },
    queen: { en: "the light priestess mother", zh: "仁慈普照的光明大祭司" },
    scout: { en: "agile fairy messenger", zh: "林间传递密笺的小精灵" },
    jade: { en: "resplendent crown celestial gemstone", zh: "极光神圣大魔晶" },
    temple_of_sun: { en: "the high altar of solar spark", zh: "日耀神圣法阵正中心" },
    rival: { en: "the dark legion armies", zh: "北境黑潮邪恶魔军" },
    cleric: { en: "wise element summoner", zh: "元素古神大祭司" },
    chaos: { en: "unstable magic core fluctuations", zh: "奥术魔力大紊乱" }
  },
  showbiz_superstar: {
    actor: { en: "newly debuted show trainee", zh: "大厂练习生新人" },
    authority: { en: "executive film director", zh: "业内骨灰级王牌导演" },
    champion: { en: "relentless media producer", zh: "资深金牌制片人" },
    stronghold: { en: "high-budget film shooting set", zh: "S+级大制作影视片场" },
    partner: { en: "luxury brand global sponsors", zh: "高奢大牌全球投资商" },
    group: { en: "celebrity public relations agency", zh: "宣发经济核心团队" },
    antagonist: { en: "exploitative corporate agency boss", zh: "克扣合同的资方黑老板" },
    secret_skill: { en: "master screenplaying test drafts", zh: "未公开绝密试镜番位剧本" },
    event: { en: "international golden statue movie gala", zh: "国际电影节金像奖颁奖盛典" },
    intel: { en: "trustworthy insider paparazzi leak reports", zh: "业内一手绝密营销和评选内幕" },
    strategic_action: { en: "orchestrating massive public relations campaigns", zh: "起动全国百万宣发公关应对" },
    vault: { en: "agency archives lounge", zh: "影视巨头保密母带库" },
    classified: { en: "confidential audition screenplays", zh: "高度受限选角评估底稿" },
    security: { en: "venue security bodyguards", zh: "现场维护秩序黑衣保镖" },
    treasure_house: { en: "casting agency vaults", zh: "顶特级番位剧本储备箱" },
    culture: { en: "elite high-fashion entertainment industry", zh: "名利奢华的国内娱乐圈界" },
    prince: { en: "highly popular lead actor", zh: "霸屏爆火流量男一号" },
    bureaucrat: { en: "talent agency press manager", zh: "宣发公关总负责人" },
    parchment: { en: "signed legal talent agreement sheets", zh: "加盖公章的绝密番位合同" },
    shrine: { en: "grand dazzling stadium stage", zh: "万人大体育馆应援主舞台" },
    den: { en: "crucial studio press meeting room", zh: "直面长枪短炮的澄清发布会台前" },
    beast: { en: "powerful arrogant business investor", zh: "带资进组刁难新人的资方巨鳄" },
    emperor: { en: "production company general chairman", zh: "传媒上市集团大董事长" },
    market: { en: "red carpet premier fan zones", zh: "红毯发布会万人围堵现场" },
    products: { en: "exclusive licensing products", zh: "定制周边明星高阶货品" },
    crisis: { en: "falsified competitor scandals", zh: "突如其来的恶意舆论围攻" },
    queen: { en: "beloved industry veteran actress", zh: "德高望重的资深影后巨星" },
    scout: { en: "sharp talent scout associate", zh: "眼光锐利的宣发小助理" },
    jade: { en: "exclusive leading film trophy", zh: "华语最高影帝/影后奖杯" },
    temple_of_sun: { en: "the dazzling award podium focal center", zh: "聚光灯下颁奖台正中央" },
    rival: { en: "competing malicious rival agencies", zh: "恶意抹黑的对家经济团队" },
    cleric: { en: "elite media advisor", zh: "王牌演艺指导老师" },
    chaos: { en: "unstable industry market ratings", zh: "全网疯狂洗牌的热搜狂潮" }
  },
  husband_rebound: {
    actor: { en: "previously mocked humble spouse", zh: "低调入赘被看轻的赘婿" },
    authority: { en: "snobbish old mother-in-law", zh: "刻薄势利的大丈母娘" },
    champion: { en: "global wealth head butler", zh: "暗夜万千亿资产大管家" },
    stronghold: { en: "wealthy snobbish mansion hall", zh: "林氏家族老宅大厅" },
    partner: { en: "billionaire guild alliances", zh: "暗中归附的小阀大鳄" },
    group: { en: "sovereign holding enterprise", zh: "万亿暗夜财阀战卫群" },
    antagonist: { en: "arrogant greedy blood relatives", zh: "图谋夺权的大伯二舅" },
    secret_skill: { en: "ultimate sovereign power asset digital key", zh: "千亿瑞士银行黑卡授权码" },
    event: { en: "annual massive shareholder settlement conference", zh: "家族年底分红清算风控大清盘" },
    intel: { en: "clandestine operational asset records", zh: "暗部深夜送呈的反击洗牌铁证" },
    strategic_action: { en: "mobilizing trillion-dollar investments", zh: "调配世界顶级千亿财团资金" },
    vault: { en: "exclusive digital credit safe", zh: "世界联合信托地下保险库" },
    classified: { en: "ndas of offshore holdings spreadsheets", zh: "保密的不动产世界托管地契" },
    security: { en: "highly armed black-suit private security team", zh: "顶级黑衣近卫战护" },
    treasure_house: { en: "sovereign trust vaults", zh: "百亿资金存储池" },
    culture: { en: "world premier elite wealth circles", zh: "隐秘而富可敌国的神豪财阀界" },
    prince: { en: "the dormant royal heir", zh: "低调蛰伏的龙王殿下" },
    bureaucrat: { en: "supreme legacy execution wealth attorney", zh: "财团千亿专属财产执行人" },
    parchment: { en: "trust shares declaration agreements", zh: "带有世界首富印戳的协议契约" },
    shrine: { en: "sky-point world view massive hotel board", zh: "五星级大酒店俯瞰都市的总统套房" },
    den: { en: "cold snobbish board session", zh: "充满嘲谑嘲弄的林氏大堂内阁" },
    beast: { en: "arrogant relative that mock you", zh: "欺压侮辱你多年的傲慢小舅子" },
    emperor: { en: "venerable sovereign grandfather", zh: "千亿神豪老执事掌门人" },
    market: { en: "exclusive custom luxury vehicle exhibition", zh: "超级跑车名流私人订制会场" },
    products: { en: "valuable luxury shares", zh: "高价值公司控制权股份" },
    crisis: { en: "relative mocking schemes", zh: "亲戚处心积虑的排挤和逐卡危机" },
    queen: { en: "highly elegant cold ice-heiress wife", zh: "高冷美艳身处风口的老婆" },
    scout: { en: "loyal company executive secretary", zh: "忠心耿耿一呼即应的总裁女助理" },
    jade: { en: "god-master seal dragon credential", zh: "至尊龙王金漆印信" },
    temple_of_sun: { en: "the prime center of high corporate status", zh: "财团名望至尊首席金交椅" },
    rival: { en: "arrogant provincial business syndicates", zh: "外省挑衅的名流富商" },
    cleric: { en: "leading corporate compliance expert", zh: "财阀大风控法律顾问" },
    chaos: { en: "capital liquidity fluctuation spikes", zh: "波谲云诡的百亿资本大做空" }
  },
  wuxia_jianghu: {
    actor: { en: "junior martial apprentice", zh: "入门小师弟" },
    authority: { en: "venerable grand martial master", zh: "武林泰斗大宗师" },
    champion: { en: "righteous general of martial alliance", zh: "武林盟正气剑客" },
    stronghold: { en: "sacred martial sect hall", zh: "华山门派论剑大殿" },
    partner: { en: "friendly righteous factions", zh: "各路武林正道豪杰" },
    group: { en: "sacred righteous martial sect", zh: "名门正派山门" },
    antagonist: { en: "corrupt martial renegade leader", zh: "面善心恶的魔教卧底长老" },
    secret_skill: { en: "ancient sword form manual", zh: "不传武学秘籍绝学" },
    event: { en: "grand martial arena tournament", zh: "三年一度的华山武林盟主大会" },
    intel: { en: "scout secret reports on martial targets", zh: "飞鸽传书送呈的武道异动密笺" },
    strategic_action: { en: "directing righteous disciples", zh: "调配门派内力武功大招" },
    vault: { en: "great martial pagoda archives", zh: "门派重地藏书阁" },
    classified: { en: "highly forbidden internal energy manuals", zh: "武道禁忌噬血邪功" },
    security: { en: "sect guards and protectors", zh: "看山门的白衣武僧" },
    treasure_house: { en: "sacred medicine secure vaults", zh: "藏有天山雪莲的炼药密室" },
    culture: { en: "martial jianghu brotherhood", zh: "快意恩仇的武侠江湖世界" },
    prince: { en: "gifted top senior brother disciple", zh: "武学奇才大师兄" },
    bureaucrat: { en: "senior martial elder counselor", zh: "德高望重的武林仲裁长老" },
    parchment: { en: "parchment martial maps", zh: "武林藏宝遗图纸轴" },
    shrine: { en: "sacred top mountain pavilion", zh: "泰山之巅凌霄主殿" },
    den: { en: "evil syndicate hideout", zh: "恶名昭彰的黑血教总坛" },
    beast: { en: "dangerous grand beast in the canyon", zh: "深山大峡谷吃人的毒蛛百足兽" },
    emperor: { en: "righteous alliance supreme leader", zh: "泰斗武林盟主" },
    market: { en: "local tavern commercial market scene", zh: "客栈酒寮热闹市集" },
    products: { en: "healing inner pills", zh: "回魂聚气武林灵药" },
    crisis: { en: "mass demonic invasion plots", zh: "魔教卷土重来攻占山门危机" },
    queen: { en: "senior medicine lady", zh: "仁慈悲心的大神医姑姑" },
    scout: { en: "vibrant agile junior sister scout", zh: "身手矫健的小师妹婉儿" },
    jade: { en: "legendary martial sovereign medallion", zh: "武林盟主白玉令牌" },
    temple_of_sun: { en: "the supreme marshal altar of jianghu", zh: "华山论剑最高冠奖台" },
    rival: { en: "wicked demonic cult outlaws", zh: "阴损狡诈的魔教余孽" },
    cleric: { en: "enlightened zen abbot", zh: "得道禅武大师" },
    chaos: { en: "bloodthirsty martial clan clashes", zh: "正邪大战腥风血雨之动荡" }
  },
  mall_empire: {
    actor: { en: "trainee retail coordinator", zh: "商厦招商运营新人" },
    authority: { en: "regional shopping director", zh: "招商部总经理" },
    champion: { en: "senior commercial director", zh: "金牌招商运营总监" },
    stronghold: { en: "grand retail center complex skyscraper", zh: "万豪商业帝国主广场" },
    partner: { en: "global retail brand partners", zh: "高奢大牌全球招商投资商" },
    group: { en: "commercial operations team", zh: "运营攻坚小组" },
    antagonist: { en: "corrupt commercial leasing manager", zh: "中饱私囊的商厦租赁部主管" },
    secret_skill: { en: "highly secured commercial leasing draft project", zh: "世界大牌意向租契蓝本" },
    event: { en: "annual core commercial lease bid", zh: "第三季度旗舰百货黄金柜位招商竞标会" },
    intel: { en: "competitor retail pricing drafts", zh: "对家商圈最新铺租和让利数据情报" },
    strategic_action: { en: "reallocating commercial spaces", zh: "调配安排楼宇铺位和股份" },
    vault: { en: "leasing system secure desk archives", zh: "商厦招商机密合同库" },
    classified: { en: "highly restricted lease fee structures", zh: "保密的租金抽佣结算比例底稿" },
    security: { en: "center safety compliance directors", zh: "商办安全合规运营团队" },
    treasure_house: { en: "private proprietary archives", zh: "商户档案核心中心" },
    culture: { en: "elite fast-paced high street market circles", zh: "现代高端零售商业竞争圈" },
    prince: { en: "grand family retail heir investor", zh: "商业地产少东家" },
    bureaucrat: { en: "regional commerce manager", zh: "商务自贸区负责人" },
    parchment: { en: "notarized rental contracts", zh: "加盖公章的铺面租赁契约" },
    shrine: { en: "world premier trade convention stadium", zh: "世界名特零售商联谊大会正厅" },
    den: { en: "corporate leasing executive board room", zh: "商场控制室闭门博弈大堂" },
    beast: { en: "hostile commercial leasing competitor", zh: "隔壁疯狂挖墙脚的恶意商圈对手" },
    emperor: { en: "commercial real estate chairman", zh: "商业集团董事长" },
    market: { en: "grand metropolitan commerce center", zh: "旗舰商业街商圈" },
    products: { en: "imported apparel products", zh: "高档进口名贵服饰首饰" },
    crisis: { en: "capital funding short-circuit risk", zh: "做空资本联手撤资撤场危机" },
    queen: { en: "respected veteran commercial advisor", zh: "和蔼睿智的商业女大亨顾问" },
    scout: { en: "efficient retail leasing operator assistant", zh: "精干麻利的招商小助理林助理" },
    jade: { en: "highest grade business gold medallion key", zh: "购物中心皇冠金钥匙特许勋章" },
    temple_of_sun: { en: "the main podium at the world retail forum", zh: "自贸商区优秀领军人席位首位" },
    rival: { en: "competing rival developments", zh: "恶意搅局砸钱的恶意商圈" },
    cleric: { en: "senior retail planner consultant", zh: "资深招商规划顾问" },
    chaos: { en: "volatile metropolitan pricing shifts", zh: "租金行情和消费能力大动荡" }
  },
  detective_deduction: {
    actor: { en: "novice assistant detective", zh: "贝克街见习小探员" },
    authority: { en: "experienced lead inspector", zh: "老练的正义神探福尔摩斯" },
    champion: { en: "shrewd detective inspector leader", zh: "经验丰富的高级风控探长" },
    stronghold: { en: "locked mystery crime scene gothic manor", zh: "暴风雨孤立的死锁庄园一号现场" },
    partner: { en: "street informant web networks", zh: "贝克街流浪儿地下情报哨" },
    group: { en: "special investigation task force", zh: "警局重案侦破小组" },
    antagonist: { en: "corrupt crown magistrate", zh: "渎职掩盖罪证的腐败法官" },
    secret_skill: { en: "exclusive autopsy and chemical residues file", zh: "致命毒物和指纹痕迹对比底案" },
    event: { en: "supreme jury criminal court case trial", zh: "最高大法庭证据交锋重案合议廷" },
    intel: { en: "autopsy and secret witness statement dossiers", zh: "深夜探子送达的血案契约证词" },
    strategic_action: { en: "coordinating specialized capture nets on suspect", zh: "部署警员对凶手封城卡位收网捕获" },
    vault: { en: "police central crime records archive", zh: "警署陈年重案机密档案室" },
    classified: { en: "highly restricted chemical poison formulas", zh: "禁用微度药剂制备工艺和剧毒谱" },
    security: { en: "patrolling field beat officers", zh: "现场执勤封锁线巡警" },
    treasure_house: { en: "unlocked central secure evidence locker", zh: "警局特级证物密封保险柜" },
    culture: { en: "victorian crime-solving underworld detective circle", zh: "深邃迷雾笼罩的伦敦侦探圈" },
    prince: { en: "primary key suspect wealthy young master heir", zh: "身怀红字宿怨的庄园大少爷" },
    bureaucrat: { en: "chief lead criminal prosecutor", zh: "庭审首席指控女公诉人" },
    parchment: { en: "encrypted handwritten case cipher labels", zh: "写有密文明码的证纸材料" },
    shrine: { en: "locked laboratory facility room", zh: "严密封闭的密室化学台" },
    den: { en: "infamous criminal syndicate headquarters hideout", zh: "凶犯和同谋深夜接头的废弃码头" },
    beast: { en: "cold-hearted cunning mastermind killer", zh: "潜逃在外的连环高智商真凶" },
    emperor: { en: "scotland yard chief commissioner director", zh: "警考委员会主席署长" },
    market: { en: "bustling foggy thames docks wharf side", zh: "泰晤士河冷雨迷雾码头区" },
    products: { en: "forensics chemical tools", zh: "高精测毒和痕迹比对反应试剂" },
    crisis: { en: "evidence destruction time limits", zh: "证据被洗和卷宗被焚危机" },
    queen: { en: "the noble vulnerable key witness heiress lady", zh: "提供关键不在场证明的仁慈善良女爵士" },
    scout: { en: "trusty alert deputy inspector", zh: "老实本分细查线索的华生助手" },
    jade: { en: "highest order detective gold credential badge", zh: "苏格兰场杰出神探功勋金质徽章" },
    temple_of_sun: { en: "the supreme magistrate courtroom chair", zh: "最高荣誉断案奖章陈列台首格" },
    rival: { en: "networked evil criminal organizations syndicates", zh: "莫里亚蒂跨国犯罪黑网势力" },
    cleric: { en: "chief medical legal examiner specialist", zh: "法医鉴定室陈年老鉴定主任" },
    chaos: { en: "complicated forensic evidence fluctuations", zh: "真假线索混淆的惊天大案迷雾" }
  }
};

// Beautiful adaptively themed vocabulary sentence template engine
export const WORD_SENTENCES: Record<string, WordSentence> = {
  // CET-4
  confused: {
    sentence: "The young {actor} was confused by the {authority}'s cryptic instructions.",
    translation: "年轻的{actor}被{authority}晦涩难懂的指令搞得十分困惑。"
  },
  abandon: {
    sentence: "Under heavy pressure, the brave {champion} vowed never to abandon the {stronghold}.",
    translation: "面临沉重压力，英勇的{champion}誓死不放弃这座{stronghold}。"
  },
  benefit: {
    sentence: "Forging an alliance with the {partner} will benefit our {group}'s long-term prosperity.",
    translation: "与{partner}结盟将极大地有利于我们{group}的长期繁荣。"
  },
  challenge: {
    sentence: "Overthrowing the corrupt {antagonist} remains a formidable challenge for us.",
    translation: "推翻贪腐的{antagonist}，对我们而言依旧是一项严峻的挑战。"
  },
  determine: {
    sentence: "She was determined to master the {secret_skill} before the {event}.",
    translation: "她下定决心，在{event}到来之前彻底掌握这套{secret_skill}。"
  },
  evaluate: {
    sentence: "We must carefully evaluate the {intel} before {strategic_action}.",
    translation: "在{strategic_action}之前，我们必须仔细评估{intel}。"
  },
  frequent: {
    sentence: "He made frequent visits to the {vault}, looking for references of `{classified}`.",
    translation: "他频繁地往返于{vault}，寻找关于“{classified}”的文献记载。"
  },
  guarantee: {
    sentence: "I can guarantee that our {security} will protect your {treasure_house} at all costs.",
    translation: "我担保我们的{security}会不惜一切代价保证你们{treasure_house}的安全。"
  },
  harmony: {
    sentence: "The {group} coexisted in perfect harmony within the active {culture}.",
    translation: "在这个活力的{culture}里，整个{group}成员在完美的和谐氛围中并肩合作。"
  },
  influence: {
    sentence: "Her wise words exerted a powerful influence over the young {prince}'s key decisions.",
    translation: "她充满智慧的言辞对年轻的{prince}的关键抉择产生了重大影响。"
  },
  justify: {
    sentence: "Simple excuses cannot justify his blatant betrayal of our {partner}.",
    translation: "简单的借口绝无法为他公然背叛我们{partner}的行为开脱。"
  },
  knowledge: {
    sentence: "Ancient {parchment} hidden in the {shrine} possess profound professional knowledge.",
    translation: "保存于{shrine}中珍贵的{parchment}，蕴含着精深宏大的专业学识。"
  },
  maintain: {
    sentence: "It is crucial to maintain absolute silence as we sneak past the {den}.",
    translation: "当我们静悄悄潜入并越过{den}时，维持绝对的寂静是至关重要的。"
  },
  negotiate: {
    sentence: "The {bureaucrat} was sent to negotiate a peaceful agreement with the {rival}.",
    translation: "{bureaucrat}被紧急派去与{rival}谈判商议利益分配的妥协协定。"
  },
  observe: {
    sentence: "From the high tower of the {stronghold}, we can observe the {rival}'s movements clearly.",
    translation: "站在{stronghold}的核心高处，我们能十分清晰地观察到{rival}的最新动态。"
  },
  possess: {
    sentence: "This legendary {jade} is said to possess divine powers that can resolve our current business crisis.",
    translation: "传说中这块绝世的{jade}蕴含着扭转乾坤的特别力量，能帮我们彻底解除当下的危机。"
  },
  reliable: {
    sentence: "We need a reliable {scout} to map out the hidden path through the critical {den}.",
    translation: "我们需要一位绝对可靠的{scout}，来探明切入这处最棘手{den}的隐秘路线。"
  },
  significant: {
    sentence: "The recent discovery of the lost {jade} was a highly significant event for our entire {group}.",
    translation: "最近重新找回遗失的{jade}对于我们整个{group}而言是一个极为重大的历史里程碑。"
  },
  terminate: {
    sentence: "The {emperor} decided to terminate the unfair unilateral agreement with the {rival}.",
    translation: "{emperor}断然拍板决定，即刻终止与{rival}签署的那项不公平的单方条约。"
  },
  ultimate: {
    sentence: "Our ultimate objective is to retrieve the legendary {jade} from the hidden {den}.",
    translation: "我们的终极目标，就是从尘封隐秘的{den}中重新安夺回至关重要的{jade}。"
  },
  vibrant: {
    sentence: "The local {market} was vibrant with traveling dealers and exotic custom products.",
    translation: "当地的{market}里摆满了各路行商与琳琅满目的定制精品，显得生机勃勃。"
  },
  witness: {
    sentence: "The young {prince} was the sole witness to the signing of the secret {reward}.",
    translation: "年轻的{prince}是那份保密级别极高、附带重赏的{reward}签署仪式的唯一现场目击者。"
  },
  yield: {
    sentence: "Despite severe conditions, our managed {treasure_house} still managed to yield high-quality {products}.",
    translation: "尽管局势充满挑战，我们的{treasure_house}团队依然顶住压力产出了极为优质的{products}。"
  },
  zealous: {
    sentence: "The young {champion} was zealous in his defense of the sacred {temple_of_sun}.",
    translation: "年轻英勇的{champion}满腔热忱，誓死守卫象征着我们最高荣耀的{temple_of_sun}。"
  },
  accelerate: {
    sentence: "We must accelerate our {actor} recruiting drive to match the {rival}'s rapid expansion.",
    translation: "我们必须加快针对优秀{actor}的扩招引流进度，以应对{rival}来势汹汹的迅猛扩张。"
  },
  baffle: {
    sentence: "Our {scout}'s sudden vanishing tricks managed to completely baffle the {rival}'s {security}.",
    translation: "我们敏捷的{scout}使出金蝉脱壳之计，一举把{rival}布置的{security}搞得大惑不解、完全被彻底难倒。"
  },
  calculate: {
    sentence: "The {cleric} was asked to calculate the exact financial cost and gains of the upcoming {event}.",
    translation: "精明的{cleric}受命推算和计量即将来临的{event}的准确成本与潜在收益。"
  },
  deliberate: {
    sentence: "The experienced {champion} made a deliberate move to lure the aggressive {beast} out.",
    translation: "富有经验的{champion}做出了一个蓄意的诱敌之策，意图将那尊张狂的{beast}引蛇出洞。"
  },
  elaborate: {
    sentence: "They spent all their budget and gold to build an elaborate trap for the giant {beast}.",
    translation: "他们砸下了所有的预算资金，精心专门布置了一个复杂到机制极致的陷阱以生擒这尊{beast}。"
  },
  fascinate: {
    sentence: "The intricate concepts of that secret {secret_skill} instantly managed to fascinate the talented {actor}.",
    translation: "关于那一卷{secret_skill}中深奥细密的精髓设计，瞬间让这位天资聪颖的{actor}深深着迷。"
  },

  // CET-6
  ambiguous: {
    sentence: "The {authority} gave an ambiguous answer, leaving the young {actor} highly confused.",
    translation: "{authority}给出了一个模棱两可的玄妙回答，让资历尚浅的{actor}感到深陷云雾、大惑不解。"
  },
  benevolent: {
    sentence: "The benevolent {queen} ordered a grand resources distribution to relieve the massive local {crisis}.",
    translation: "仁慈善良的{queen}当即拍板，下令大开资库广散支持，以缓解眼前的突发{crisis}之急。"
  },
  cognitive: {
    sentence: "The specialist's advanced cognitive analysis decrypted the unknown {parchment} files in seconds.",
    translation: "专家高超的认知逻辑分析能力大放光彩，只在数息间便完全解密了这卷未知的{parchment}字条情报。"
  },
  deviate: {
    sentence: "Be careful not to deviate from our main path, as hostile {rival} members roam the barrens.",
    translation: "切记在执行任务时不可开小差偏离主航道，因为敌对的{rival}余孽正在这片区域游荡窥伺。"
  },
  eccentric: {
    sentence: "The eccentric {cleric} lived alone, spending whole nights mixing strange {products}.",
    translation: "脾气古怪的{cleric}通常深居简出，整夜整夜都在独自调配鼓捣新奇有趣的{products}。"
  },
  fluctuate: {
    sentence: "The valuations and prices of rare local {products} fluctuate wildly due to the ongoing {chaos}.",
    translation: "由于近期正值波折频繁的{chaos}，市面上罕见名贵的{products}价格正处于极剧烈的不稳定起伏波动中。"
  },
  gargantuan: {
    sentence: "A gargantuan {beast} guarded the secure steel entrance to the lost {den}.",
    translation: "一尊体型巨大的狂暴{beast}，寸步不移地守着通往那间神秘{den}的唯一重锁大门。"
  },
  hypocrisy: {
    sentence: "She quickly saw through the smiling {antagonist}'s warm greeting and exposed his blatant hypocrisy.",
    translation: "她慧眼如炬，瞬间识破了笑脸迎人的{antagonist}的面孔，当众拆穿了他背后虚伪做戏的虚伪。"
  },
  inevitable: {
    sentence: "With our outer defense lines crumbling, a direct confrontation with the {rival} faction is now inevitable.",
    translation: "随着我方的外围防御线节节崩塌，我们与敌对的{rival}大部队正面硬碰硬交锋已是命中注定、无可避免。"
  },
  jeopardize: {
    sentence: "One minor clerical slip in this critical {parchment} will jeopardize the success of our entire {event}.",
    translation: "在这份重中之重的{parchment}上出现任何一丝微笑差错，都将直接危害到我们整个{event}的成败大局。"
  },
  kindle: {
    sentence: "Her passionate and direct speech managed to kindle a burning fire of action in everyone's hearts.",
    translation: "她那富有感染力的真挚演说极具号召，瞬间点燃并激发了在场所有人内心奋发反击的熊熊烈火。"
  },
  lucrative: {
    sentence: "Securing the exclusive trading monopoly of global {products} has proved to be a highly lucrative business.",
    translation: "成功拿下那款全球明星{products}的独家经销特许特权，已被事实证明是一桩利润极为丰大的香饽饽大买卖。"
  },
  meticulous: {
    sentence: "Our {security} spent several hours making a meticulous inspection of the {emperor}'s banquet dinner.",
    translation: "我们负责安保的{security}严阵以待，一连耗费几个钟头对{emperor}的晚宴大餐进行了无死角的细密检查。"
  },
  nostalgia: {
    sentence: "Hearing songs from his classic local {culture} filled the traveling {champion} with a sense of bittersweet nostalgia.",
    translation: "听到自己所熟识代表着最纯真{culture}的故土歌谣，让身在远方披荆斩棘的{champion}顿时涌起了一抹淡淡的乡愁念旧之情。"
  },
  obliterate: {
    sentence: "We designed a sudden tactical attack to completely obliterate the hostile {rival}'s main advance.",
    translation: "我们暗中敲定了出其不意的闪击反制战术，意在瞬息之间全盘抹杀和彻底消灭敌对{rival}的主力攻势。"
  },
  paradox: {
    sentence: "He is a walking paradox: a highly feared {champion} who refuses to harm any weak ones.",
    translation: "他是个十足的矛盾结合体：明明是令人闻风丧胆的顶尖{champion}，却坚决不伤害任何没有反抗能力的弱小之人。"
  },
  quintessential: {
    sentence: "This newly set structure is the quintessential example of classical {culture} design elements.",
    translation: "这处新建立的实体大局展现，堪称我们这种独特{culture}神韵风格最经典典型的代表和不二活招牌。"
  },
  redundant: {
    sentence: "Since we already possess the dynamic {secret_skill}, this printed data manual is redundant.",
    translation: "既然我们已经完全掌握了高维度的{secret_skill}手段，大可将繁冗厚重的那本纸质参考书视为多余之手了。"
  },
  scrutinize: {
    sentence: "The highly suspicious {authority} began to closely examine and scrutinize our legendary {jade}.",
    translation: "生性多疑的{authority}警惕地眯起双眼，开始贴上前去全神贯注地细细省视揣摩我们这块稀世的{jade}。"
  },
  ubiquitous: {
    sentence: "Thanks to massive promotional events, references to our products have become ubiquitous across the {market}.",
    translation: "多亏了近来铺天盖地的大力推广造势，关于我们品牌的影响力早就在这处浩瀚的{market}商海中无处不在、家喻户晓。"
  },
  vulnerable: {
    sentence: "Without sufficient protection from our {security}, the inexperienced {actor} is highly vulnerable to {rival} schemes.",
    translation: "由于没有我方{security}的伴随护卫，在温室中长大的{actor}在大风大浪前极易受伤、极其脆弱。"
  },
  wary: {
    sentence: "The experienced {champion} stayed extremely wary of the {rival}'s sneaky and dynamic moves.",
    translation: "经验丰富的{champion}时刻保持着极高的战术警觉，对狡猾的{rival}一举一动都严防死守、倍加防范警惕。"
  },
  zenith: {
    sentence: "Securing the top place at the annual {event} marked the absolute zenith of his career in this {culture}.",
    translation: "在今年的{event}上力挫群雄夺魁摘星，将他的演艺和事业生涯推上了整界{culture}无可争议的最巅峰和光辉顶点。"
  },
  advocate: {
    sentence: "The wise {cleric} decided to act as an advocate for the hard-working {actor}.",
    translation: "深明大义的{cleric}挺身而出，决定扮演和充当一众在下层默默打拼辛勤付出的{actor}的代言发声者。"
  },
  belligerent: {
    sentence: "The hostile leader's belligerent attitude made it almost impossible for us to resolve the dispute peacefully.",
    translation: "对方头目那好斗挑衅的嚣张挑衅态度，一度让和平化解两家冲突矛盾的方案泡汤、彻底寸步难行。"
  },
  conspicuous: {
    sentence: "The brightly glowing crimson insignia on his vest rendered him highly conspicuous to the {rival} shooters.",
    translation: "他身上那枚印痕着本门标志、在夜间熠熠夺目的殷红胸章，让他直接成了敌对{rival}眼里绝佳的活靶子、显眼无比。"
  },
  discrepancy: {
    sentence: "A major financial discrepancy was uncovered by the auditors between the two versions of the {parchment}.",
    translation: "风控核查人员在翻看比对两份不同版本的{parchment}字条契据时，当场挖出了多笔数额惊人的账目出入和不合规则。"
  },
  eminent: {
    sentence: "The eminent {authority} was invited to preside over the grand dispute-resolution {event}.",
    translation: "名高天下、极受尊重的{authority}泰斗受邀出席，并全权主持本次解决两方恩怨的大规模公审{event}。"
  },
  fostering: {
    sentence: "The progressive group was dedicated to fostering a spirit of mutual cooperation among all the junior {actor} members.",
    translation: "该同盟团队致力于在年轻和入门小{actor}队伍中，大力培育和支持一种风雨同舟、荣辱与共的心连心友爱氛围。"
  },
  gullible: {
    sentence: "The antagonist easily tricked the gullible {actor} into handing over the key to the {treasure_house}.",
    translation: "诡计多端的反派略施小计，便不费吹灰之力忽悠了单纯且容易上当的{actor}，白白哄取了掏开{treasure_house}的密匙。"
  },

  // IELTS/TOEFL Academic Pool parsed cleanly
  aesthetic: {
    sentence: "She designed the grand hall of the {stronghold} with a refined aesthetic sense, pairing simple decor with elegant local motifs.",
    translation: "她以极考究高雅的艺术美学底蕴，把这处主要的{stronghold}大堂布置得简繁得当，与本地的经典神韵元素相得益彰。"
  },
  biodiversity: {
    sentence: "The pristine garden grounds of the {shrine} preserve a rich biodiversity of rare botanical herbs.",
    translation: "这处{shrine}外围那片人迹罕至的名贵药园腹地，完好孕育和保留着物种极为丰富多样的天然生态奇珍植物。"
  },
  catastrophe: {
    sentence: "If this massive corporate {crisis} continues unchecked, it will inevitably trigger an economic catastrophe for our {group}.",
    translation: "若是眼下的突发{crisis}火种继续放任自流不加扑灭，注定会给我们整个{group}的核心大本营降下一场毁灭性崩盘大灾难。"
  },
  demographic: {
    sentence: "We must carefully analyze the demographic profile and habits of our core audience inside the city {market}.",
    translation: "我们必须对主城{market}商海圈内的目标群体，进行详尽的用户消费习惯与人口统计特征细密剖析。"
  },
  ecosystem: {
    sentence: "Every single business shop forms an organic part of the local commercial ecosystem on this {market} layout.",
    translation: "在繁华的大{market}商局星图矩阵中，每一家独立门店都是当地生生不息商业大生态循环圈中有机共生的重要一环。"
  },
  feasibility: {
    sentence: "The strategy consultant spent the whole night evaluating the clinical feasibility of our new {products} expansion plan.",
    translation: "资深业务风控顾问通宵彻夜不眠，只为对我们该款主打{products}的大规模投产落地可行性方案进行严合论证。"
  },
  greenhouse: {
    sentence: "Inside the controlled high-infrastructure {treasure_house}, they maintained delicate temperature settings for premium winter {products}.",
    translation: "在这间常温恒湿的精贵{treasure_house}内，技术人手悉心设定着每一度火候，以使娇贵的冬季{products}免受风寒。"
  },
  hypothesis: {
    sentence: "The lead investigator proposed a brilliant hypothesis regarding how the security at the {treasure_house} was targeted.",
    translation: "断案神探脑海里闪过一丝灵光，针对这间上锁的{treasure_house}防线是如何被对手突破一事，提出了一个精妙逻辑假设。"
  },
  infrastructure: {
    sentence: "Our global enterprise announced a massive budget allocation to upgrade the IT and defense infrastructure of the {stronghold}.",
    translation: "我方大东家大手一挥，正式对外宣称将砸下不菲重金，全面换新和升级整座大本营{stronghold}的核心物防基础建设。"
  },
  jeopardy: {
    sentence: "The continuous short-selling attack has placed his title as CEO in severe corporate jeopardy.",
    translation: "对家疯狂倾泻砸盘的做空狂潮，已让我们主事大将军的权职神圣冠冕面临着前所未有的严重悬空和重创危机状态。"
  },
  kinship: {
    sentence: "Growing up in the same sect forged a tight-knit sense of fraternal kinship among the senior {actor} team.",
    translation: "寒窗伴学、一同在师门基地下摸爬滚打长大的朝夕点滴，成功在众小{actor}内心深处焊接起了一股如手足同袍般坚不可摧的紧密羁绊亲情。"
  },
  longevity: {
    sentence: "Eating rare organic medicinal crops is believed to promote health, vitality, and impressive longevity for the aging {emperor}.",
    translation: "常年服用后山高山崖顶孕育的野山独家温补参草药料，被视作能强健体魄、保全气血，并助高堂上体弱的{emperor}益寿延年。"
  },
  mitigate: {
    sentence: "The PR management launched an aggressive communication defense to successfully mitigate the harmful fallout of the bad rumors.",
    translation: "集团公关宣发部门当场启动了紧急一级响应防护宣发，以成功化开、对冲和最大程度减轻这次谣言风波带来的负面负效应影响。"
  },
  nutrient: {
    sentence: "The botanist mixed a highly specific organic nutrient solution to feed the gold-grade crop seedlings inside our greenhouse.",
    translation: "专职管护奇珍植株的小生手，特地去配制了一种高营养成分的独家营养液养料，以浇灌我们温养室内的极品珍木苗木。"
  },
  obstacle: {
    sentence: "The hostile company was the single largest obstacle on our path to capturing the regional commercial title.",
    translation: "不期而至且恶意满满的对家同僚大佬，正是横在我们整个团队在攀登江陵商誉顶峰道路上，最大的一块拦路巨石障碍。"
  },
  precedent: {
    sentence: "Winning this complex legal contest set a powerful precedent for future corporate disputes in the industry.",
    translation: "在这次难度极高的华山论剑辩论战中拔得头筹，瞬间在全国同行业内立起了一面极具指引教条风向标意义的前例和标杆先例。"
  },
  quantitative: {
    sentence: "Our audit team provided a strict quantitative analysis of the resources we salvaged from the {treasure_house}.",
    translation: "我们的审计小组成员彻查盘算，对上一次从抢攻回的{treasure_house}中所成功保全核算的所有商用资源，做出了一份一丝不苟的量化数字统计。"
  },
  rehabilitation: {
    sentence: "After escaping the lockup of the antagonist, the injured scout underwent several weeks of intensive physical rehabilitation.",
    translation: "在万幸逃脱坏人魔教的囚禁地牢之后，伤痕累累的侦查员被妥帖护送，调养休整了数周以完成伤残体格的体能康复。"
  },
  sustainable: {
    sentence: "Our corporate firm advocates a sustainable approach that combines immediate profits with long-term ecological balance.",
    translation: "我们同盟商会一贯奉行合规有节、生生不息的可持续的长远经营路线，力求在追求眼前盈余的同时实现良性的绿色循环。"
  },
  threshold: {
    sentence: "Winning this bidding tournament means our company has crossed the threshold into the elite tier of world commerce.",
    translation: "在这场激流拼刺、竞争惨烈的战局中胜出，预意味着我们已一脚迈过了门限门槛，稳稳跻身于世间乃至更高阶梯的一流高手俱乐部。"
  },
  unprecedented: {
    sentence: "Under her wise command, our venture recorded an unprecedented financial triumph during the previous Q3 season.",
    translation: "在大家长明公无私的战略布局引领下，我们的商号在这个季度，书写下了一项前无古人、开创先河的奇迹般破天荒辉煌大捷。"
  },
  viability: {
    sentence: "The board has serious doubts about the long-term project viability of this low-budget plan.",
    translation: "董事会的高阶听审团在看完简陋方案汇报后，对于这项投资极低的项目，在其后续是否有极高生存率和长期生存力表示了严重怀疑。"
  },
  wastage: {
    sentence: "The senior inspector tightened oversight at the packing area to prevent the sudden leakage and wastage of costly tribute {products}.",
    translation: "老管事在大仓打包区亲自上阵、加重了考课监督力度，以在源头卡住和避免由于丢漏装运导致贵重贡品{products}的无端损耗浪费。"
  },
  xenophobia: {
    sentence: "The local board had to overcome deep-seated regional biases and xenophobia before accepting international resource partners.",
    translation: "在顺利谈拢引进海外跨洋商贾结盟前，守旧保守的商号长老阁必须下大决心去打破顽固排宿的关门内斗排外情绪偏见。"
  },
  aquatic: {
    sentence: "The royal garden had an exquisite aquatic installation where colorful lotus flowers and sacred white pearls thrived.",
    translation: "皇家林院内专门规划出了一面极奢华的临水水生园林池景观，其中各色并蒂青莲与锦鲤金珠水生植物在清池内畅快生长。"
  },
  biosphere: {
    sentence: "The secluded pristine valley was closed off to act as a protected biosphere for studying ancient rare vegetation species.",
    translation: "这处与俗世切离、灵气氤氲的后山峡谷被重重封护，作充当科研实验用途的，以考察远古时期的各类高山珍草植被大生物圈。"
  },
  depletion: {
    sentence: "The rapid depletion of emergency coins in our local trust has forced us to request immediate help from the chairman.",
    translation: "我们本堂账上那点救急银两的飞速耗竭和告急流失，不得不迫使我们深夜求援，厚着脸皮敲开了董事长宗长堂口的大门。"
  },
  empirical: {
    sentence: "Rather than relying on vague gossip, the detective preferred empirical evidence like factual records and matching certificates.",
    translation: "相比各种道听途说和没根底的风过耳传言，办案大侦探更笃定和注重真切可见的实证，这包括对实证物比对与白纸黑字的纸面铁证。"
  },
  abundant: {
    sentence: "The fertile plains yield an abundant harvest of premium farm products every single year.",
    translation: "这片风调雨顺的良田黑沃土，岁岁年年都能为各家各户带来品质拔群、极其喜人的大丰收和足额充沛仓储。"
  },
  accumulate: {
    sentence: "Through meticulous budgeting, our enterprise managed to accumulate a massive reserve of golden investment coins.",
    translation: "依靠日积月累极为自律的账簿严控，我们的商号神不知鬼不觉、积少成多攒纳下了一笔富可安家的庞大备用黄金金库。"
  },
  catalyst: {
    sentence: "Losing our legendary {secret_skill} acted as the catalyst, sparking a massive restructuring across our entire group.",
    translation: "突失此卷镇本之宝的特大重创无独有偶，成了引火线，一举引爆和催化了我们整个{group}内部极其深层的人数与执掌大洗牌。"
  },
  diffusion: {
    sentence: "The peaceful diplomatic mission aided the rapid diffusion of our classic local {culture} culture throughout the world.",
    translation: "得益于商队与大使节的和平宣抚，我们本邦所独有瑰丽和渊博的{culture}风华学问，得以向海内之外更辽远广袤的异国他乡流传扩散。"
  },
  evolutionary: {
    sentence: "The specialized sword manual documents the evolutionary design of various martial sword combat templates over several generations.",
    translation: "这本珍藏的演武残卷上，以连图方式，详尽墨刻着数百年来本门秘功绝活在招数上的进化性与推演变革轨迹。"
  },
  fossilize: {
    sentence: "If we refuse to adapt, our outdated operational rules will simply fossilize and destroy our active {group}'s survival.",
    translation: "倘若我们在发展大势面前不求通变、冥顽不灵，那些僵化陈腐的手册章程只会作茧自缚，无情将大院拖入被历史封尘抛弃的僵化泥潭。"
  },
  geothermal: {
    sentence: "The hot springs bubbling beneath our ancestral {shrine} originate from natural deep geothermal heat chambers inside the crust caverns.",
    translation: "环绕在我们这处核心{shrine}外侧、长年温润如玉的热泉蒸汽，其热源动力，正是来自深入地层地热深层的自然地热蕴藏矿热能。"
  },
  hieroglyphic: {
    sentence: "The scholar spent nights trying to translate the mysterious hieroglyphic inscriptions carved into the inner chamber stone of the {shrine}.",
    translation: "白胡子老学究掌着昏黄的烛火，连续几夜伏案攻读，奋力破译着镌刻在{shrine}殿内这副上古石刻符牌上的神秘象形书刻符号。"
  },
  glacial: {
    sentence: "The northern army made glacial progress across the rocky frozen valleys, hampered by intense biting cold.",
    translation: "这支来自北境的大马队，在极其险峻的冻土石谷关口中，犹如冰川移步般艰难徐行，进度因彻骨的飞雪寒流而受阻极慢。"
  },
  impermeable: {
    sentence: "The thick stone layers of the vault were designed to be impermeable to rain leakages or moisture from basic outside drainage.",
    translation: "秘阁保险大仓库的围护墙全是用花岗巨石夯筑封泥，工艺之精细，足以在根本上挡住任何来自外部山洪和泥水侵入的抗渗且防水能力。"
  },
  kilometer: {
    sentence: "Our brave scouts patrolled the outer boundaries, tracking a wide security zone stretching over a kilometer radius.",
    translation: "我们敏捷机敏的护卫眼哨快步疾行巡哨，以主堂为靶标，划出了周边一公里半径防卫圈警戒巡察线。"
  },
  lithosphere: {
    sentence: "Beneath the high majestic peaks of our mountain {stronghold}, the deep earth strata support a heavy and ancient lithosphere segment.",
    translation: "在我们高耸云天的{stronghold}峭壁地盘基底，数万顷玄武地层安如泰山，严丝合缝咬护着这片承载着无数古道圣地的稳定地壳岩石圈。"
  },
  metamorphosis: {
    sentence: "His spectacular transformation from a mocked apprentice to a premier leading talent represents a legendary metamorphosis.",
    translation: "他从当年一个处处受欺、不显山露水的小配角新手，一举逆转，问鼎王牌重臣之位，堪称本年度一出脱胎换骨的蝉蜕蝶变传奇。"
  },
  nomadic: {
    sentence: "The desert traders maintained a traditional nomadic lifestyle, guiding camel herds across the vast sandy trade path fields.",
    translation: "在这条驼铃叮当、漫天飞沙的西域漫长商队路线上，塞外行商千百年来依然遵循和保留着逐水草随季节搬迁的半游牧式旅宿状态。"
  },
  oscillation: {
    sentence: "The constant political oscillation between alliances made it extremely difficult for our group to finalize secure business contracts.",
    translation: "几方阁臣势利在结盟政策上那朝令夕改、忽左忽右的态度左右摇摆，严重破坏并妨碍了我们拟定长约合同的最终破局。"
  },
  precipitation: {
    sentence: "In this barren desert, rare periods of seasonal precipitation are highly celebrated because they restore the water supply of our {stronghold}.",
    translation: "在这处滴水贵如油的沙海边缘，每逢有短暂的连绵天降甘霖降水量季候，都能让我方驻防的{stronghold}上上下下欢欣雀跃、痛饮储水。"
  },
  quartz: {
    sentence: "They utilized elegant light crystal quartz to craft decorative mirrors for the private vanity of the {queen}.",
    translation: "他们精心打磨挑选了一批极其无暇晶莹的石英水晶异种矿石，专为我们最宠爱的{queen}特制梳妆铜镜饰物摆件。"
  },
  sedimentary: {
    sentence: "The missing case evidence was found buried deeply inside the damp sedimentary silt layers near the thames river dock bank.",
    translation: "原本被凶徒秘密抛弃的案情重案铁证，最终在一处偏僻河道底暗，从湿漉漉、沾满淤泥的泥土沉积砂层碎屑地层中被搜救探刨而出。"
  },
  tectonic: {
    sentence: "Winning this spectacular industry bidding contest triggered a tectonic shift in the balance of regional commercial power.",
    translation: "在这次千亿巨额的项目巅峰博弈争夺案中拔得头筹，不仅是一朝凯旋，更是直接在江陵府全盘商海板块版图上引爆了地壳裂变般的格局巨震。"
  },
  utilization: {
    sentence: "We must ensure the efficient utilization of our limited resources to outlast the competitive siege from the hostile {rival}.",
    translation: "我们必须时刻勒紧裤腰带，对眼下极为有限的每一分银两存粮都做到物尽其用最大化利用度，以在跟对手硬磨时撑到大获全胜。"
  },
  velocity: {
    sentence: "The courier delivered the emergency silk dispatch with impressive velocity, arriving long before the deadline.",
    translation: "报捷的信使背着沉甸甸的羽翎火漆，扬鞭飞奔，以惊如疾风般的绝尘速度，在最后时效红线来临前绝尘跃入关隘。"
  },
  weathering: {
    sentence: "Over several centuries, the heavy stone monuments of the {shrine} weathered slowly, acquiring an elegant antique look.",
    translation: "纵使历经数百年岁月红尘的风吹日晒侵蚀剥落，矗立在{shrine}外侧的纪念碑亭也只是添了层幽幽古旧印痕，神韵犹存。"
  },
  xerophyte: {
    sentence: "The desolate garden of the desert outpost only featured tough xerophyte plants like deep-rooted cactus trees.",
    translation: "防线外围极度干旱的砂砾荒原里，仅能见到一些枝节粗糙坚韧、扎根极深的仙人掌类沙旱生耐旱植物孤单矗立。"
  },
  zoology: {
    sentence: "The royal advisor wrote an extensive treatise on local woodland zoology, cataloging every animal from wild tigers to colorful peacocks.",
    translation: "大院资深的掌案名师主笔修撰了一卷极周详的动物博物科普典籍，将本山林里从巡山野虎到五彩金雀的各类飞禽野兽物种详备纪存。"
  },

  // GRE Core high intensity
  adaptation: {
    sentence: "The fast change to our competitive plan was a perfect tactical adaptation that completely bypassed the adversary's main line.",
    translation: "在突遭奇袭的盘中，临时微调和全线掉头的战略方案，是一记极其迅速且教科书般绝配的可行性顺应微调，直接让对手的卡位拳头落了个空。"
  },
  chronological: {
    sentence: "The careful detective sorted the stack of witness statements and evidentiary parchment sheets in strict chronological order.",
    translation: "断案老手一丝不苟，将他所收集到的证词录卷、契约纸轴，按照案发时间演变前后的精确时间先后次序整顿归置好。"
  },
  demolish: {
    sentence: "The massive construction crew arrived with specific tools to cleanly demolish the outdated structures around the corner.",
    translation: "大院管事连夜抽调召集并指派工匠队扛着重夯行装，于破晓前麻利开工，对拐角处那一排隐患不小的旧有棚障实行合规拆除平毁。"
  },
  erosion: {
    sentence: "The gradual erosion of customer trust has weakened the prime status of our brand in the local city market.",
    translation: "在一次次风波处理应对迟滞之后，大院商号在大众心中的信赖感正在遭遇潜移默化的侵蚀流失，这也是我们名牌不再如前吃香的本因。"
  },
  anachronism: {
    sentence: "Seeing a modern digital pocketwatch inside our beautiful ancient {shrine} is a highly conspicuous anachronism.",
    translation: "看着一件跟古韵全然不搭格也极其现代化的摆件，大模大样地陈列在我们这所古色古香的{shrine}正案中央，实在是一个夺人眼球的时间错位异物。"
  },
  cacophony: {
    sentence: "The messy tavern was filled with a loud cacophony of shouting merchants, barking dogs, and clashing metal pots.",
    translation: "在那个三教九流混居、人满为患的底层大堂里，嘈杂的呼喝喧闹、狂躁的犬吠声与敲碗碰撞的嘈杂噪音汇成一锅粥，格外震耳欲聋。"
  },
  deleterious: {
    sentence: "The corrupt advisor's hidden greedy schemes produced a highly deleterious impact on the health of our enterprise treasury.",
    translation: "那个笑面虎坏中层暗中挖墙脚中饱私囊的自私行为，已对大商铺的库房资金流与财报健康，带来了极其严重和致命的有毒损害。"
  },
  ephemeral: {
    sentence: "He realized that the temporary praise from key media outlets was ephemeral, lasting only a few short days.",
    translation: "他心里明镜儿似的，深知那些浮夸媒体所捧出的几天短暂虚名正如昙花一现般极易消逝、不可长恃，必须靠扎实的底气底牌说话。"
  },
  gregarious: {
    sentence: "The highly gregarious lead partner effortlessly navigated the upscale business premium circles, charming every investor.",
    translation: "交际手腕圆融、天生极合群健谈的首席大掌柜，在各方高冷圈层名流名利场之间游刃有余、轻拢慢捻调侃着众东家的心弦。"
  },
  idiosyncrasy: {
    sentence: "The eccentric old general harbored a peculiar idiosyncrasy: he insisted on writing all his reports on yellow silk sheets.",
    translation: "这位有些古怪脾性的老掌柜脾气虽臭，却有个让人忍俊不禁的古怪怪癖：写起任何汇报字条来，必然要选用明黄色御绢大底纸。"
  },
  juxtapose: {
    sentence: "If we juxtapose the two suspicious parchment letters, the clear difference between the handwritings becomes undeniable.",
    translation: "只要把这两份来路古怪的签名信条并排放置并列一处，其在口风用词和笔迹着墨走向上的惊人出入，任谁也无从狡辩。"
  },
  loquacious: {
    sentence: "The loquacious tavern keeper spent hours talking to customers, accidentally giving away details of the secret route to the {den}.",
    translation: "这位平日里热诚有些过头的多话客栈小老板大倒苦水唠起唠嗑，一秃噜嘴，在不知不觉中吐露露了通往那处山门{den}的备用线路。"
  },
  magnanimous: {
    sentence: "In a highly magnanimous gesture, the chief patriarch decided to forgive the minor financial slip of the young apprentice.",
    translation: "在气量大度的大当家高抬贵手的宽和胸襟感召下，大院最终决定宽恕、免除那名行差踏错走漏机密的小新人的刑罚和追责。"
  },
  nefarious: {
    sentence: "Our diligent scouts uncovered the nefarious intent behind the competing company's secret meeting with our clients.",
    translation: "我们放哨的小能手全天候严密把关，一举撬出了对家不友好分子近期私底下频密约见我们大客户背后的肮脏见不得人交易阴谋。"
  },
  obsequious: {
    sentence: "The greedy servant's obsequious behavior was simply a cover to hide his theft of key golden treasures from the main warehouse.",
    translation: "那个平日里卑躬屈膝、逢迎拍马功夫一流的小厮，其极其谄媚逢迎阿谀的态度，只是意图盖在他从库房里偷窃盗卖贵重财物的障眼法。"
  },
  parsimonious: {
    sentence: "Under the thumb of a parsimonious boss, our marketing team is forced to achieve victory using a tiny budget.",
    translation: "摊上这么一位算盘敲得飞起、极度抠门小气的守财奴大掌柜，我们的一线战队全在吃糠咽菜，憋着劲想以极其微薄的筹码搏一把奇迹。"
  },
  recalcitrant: {
    sentence: "The executive committee decided to fire the recalcitrant group leader who repeatedly refused to adopt standard policies.",
    translation: "执掌大权的元老会果断拍板、踢出了那个在战术落地中多次故意唱反调、刚愎自用的冥顽不灵难管教小主管以肃规风。"
  },
  sycophant: {
    sentence: "The arrogant executive fell victim to the sweet words of a cunning sycophant, misallocating half of the firm's assets.",
    translation: "那位志得意满的大少，果不其然掉进了身边那些巧言令色谄媚奉承之人的阿谀陷阱，一拍脑门子，将自己近半的基业银根白送。"
  },
  taciturn: {
    sentence: "The taciturn chief guard rarely spoke, but his powerful hand remained firmly gripped on the hilt of his weapon.",
    translation: "这位少言寡语甚至沉默寡言的大统领整天铁面寒霜、极少答话，唯独那只青筋暴起的大手，日日夜夜雷打不动死按在刀柄上。"
  },
  ubiquity: {
    sentence: "The rapid ubiquity of our customized software across the internet has completely baffled our competitors.",
    translation: "我们主打的一手杀手锏货在短时间内飞速占据大众视野、流行程度无处不在，彻底让对家陷入了百思不得其解和恐慌中。"
  },
  vociferous: {
    sentence: "The unhappy shareholder made a vociferous protest during the annual board meeting, demanding the manager satisfy their requirements.",
    translation: "几位心头滴血的大散户在大会当场高声抗议大吼，群情激愤地拍着桌案，强烈要求不负责任的主事人大开资房对他们偿付。"
  },
  winsome: {
    sentence: "With her winsome smile and charming personality, the lead trainee managed to capture the support of all the major fans.",
    translation: "凭借那招牌般极具亲和风雅的迷人微笑以及元气满满的讨喜脾性，这名新派上阵主角在出镜第一天就吸粉无数、牢牢拿捏住了各界拥簇。"
  },
  xenophile: {
    sentence: "Being a passionate xenophile, the young scholar spent years gathering beautiful exotic artifacts from various foreign caravans.",
    translation: "由于本人是个极其崇洋慕外、对异域别邦之物满心热忱的异国文化爱好者，这位大少终其一生都在致力于淘买各国海商船队的奇技淫巧。"
  },
  yoke: {
    sentence: "We must rise combined and throw off the heavy economic yoke imposed upon us by the monopolistic guild.",
    translation: "我们必须同舟共济、联手抱团，坚决地一举掀翻和砸烂那家恶意压价之垄断行帮，强行捆绑锁扣在我们身上的沉重经济枷锁负累。"
  },
  zealot: {
    sentence: "He was a complete energy zealot, working twelve hours a day without showing any trace of fatigue.",
    translation: "他是个不折不扣、像打了鸡血似的拼命三郎狂热者，整天起早贪黑在岗位轮轴转，却从未吐露露过半个累字，神采依然饱满。"
  },
  acquiesce: {
    sentence: "Fearing more intense conflicts, the board decided to acquiesce to the high financial demands of their clients.",
    translation: "因担心冲突进一步激化而伤到商号筋骨，大当家和长老阁两相权衡，不得不憋着一肚子气，默许和妥协了客户开出的退赔赎金报价。"
  },
  bellicose: {
    sentence: "The rival merchant's bellicose announcements made a peaceful resolution to the high street market lease impossible.",
    translation: "眼见对方头目在各种私底下的接头中接连吐露出极其好斗好战的粗野叫嚣，和平协调该黄金铺位租赁纠纷的可能性已被全盘击碎。"
  },
  capricious: {
    sentence: "We must avoid depending on a capricious partner whose business decisions change directly with the direction of the wind.",
    translation: "我们千万碰不得那些朝三暮四、任性善变极不可靠的合作盟家，他们的立场说变就变，宛如六月的天和随风倒的柳枝。"
  },
  dearth: {
    sentence: "There remains a severe dearth of specialized medical talent to treat the rare disease inside the city.",
    translation: "眼下城中能查证、诊治此类罕见隐疾的德高望重医术名家简直是凤毛麟角，医道人才奇缺到令人焦头烂额的地步。"
  },
  enervate: {
    sentence: "The intense summer heat combined with the heavy gear will easily enervate the active guards patrolling the wall.",
    translation: "烈日似火的毒热天候，外加身上沉重的铁甲行装压力，极为容易挫伤和消损整天顶烈日执勤的守备卫队的精气神与体能。"
  },
  fastidious: {
    sentence: "The fastidious course instructor spent ages grading the research handouts, rejecting papers with any minor discrepancy.",
    translation: "这位有些强迫症、考核极其挑剔挑剔的高阶考功长老，磨蹭了老半天审阅手卷，哪怕查出仅有一字走题便严苛打回。"
  },
  garrulous: {
    sentence: "The garrulous old advisor talked endlessly during the grand board meeting, wasting precious time.",
    translation: "那个平日里办事不温不火却极其聒噪爱说废话的唠叨老幕宾，一上首座就滔滔不绝讲废话，白白延误和虚耗了绝佳的一线良机。"
  },
  harangue: {
    sentence: "During the town session, the antagonist launched a loud, angry harangue criticizing the legal decisions of the court.",
    translation: "在正堂会商口舌博弈上，理屈词穷的反派当场撒泼大吼，抛下了一大段吐沫星子横飞、满心不甘的慷慨激昂大肆指责演讲。"
  },
  imperturbable: {
    sentence: "Our lead commander stayed completely calm and imperturbable even as the enemy forces completely surrounded our castle.",
    translation: "即使我方防守的寨堡已被对家魔教千军万马围困得如铁桶一般，我们的主心骨大将依然气定神闲、镇定自若，毫无半分浮躁。"
  }
};

/**
 * Dynamically synthesizes a pristine, 100% natural, elegant, and logically matching sentence for any vocabulary word.
 * It takes the context-independent templates with placeholders and fills them using scenario-tailored sister replacements.
 */
export function getAdaptedWordSentence(word: string, scenarioId: string): WordSentence {
  const normWord = word.toLowerCase();
  const match = WORD_SENTENCES[normWord];
  if (!match) {
    return {
      sentence: `We should thoroughly study the concept of "${word}" within this context.`,
      translation: `我们需要结合当前情境，深入细致地思索“${word}”的合理搭配与用法。`
    };
  }

  // Fallback cleanly to ancient_palace if the scenarioId is not found
  const scenarioTokens = SCENARIO_TOKENS[scenarioId] || SCENARIO_TOKENS["ancient_palace"];
  
  let finalEn = match.sentence;
  let finalZh = match.translation;

  // Perform surgical replacements of all template keys
  for (const key of Object.keys(scenarioTokens)) {
    const enVal = scenarioTokens[key].en;
    const zhVal = scenarioTokens[key].zh;

    const placeholder = `{${key}}`;
    finalEn = finalEn.split(placeholder).join(enVal);
    finalZh = finalZh.split(placeholder).join(zhVal);
  }

  return { sentence: finalEn, translation: finalZh };
}

// Formats and highlights target vocab word inside a sentence beautifully
export function highlightWordInSentence(sentence: string, targetWord: string, highlightClass: string = "text-amber-500 font-extrabold font-mono"): string {
  if (!sentence || !targetWord) return sentence;
  const regex = new RegExp(`\\b(${targetWord}[a-z]*)\\b`, "gi");
  return sentence.replace(regex, `<span class="${highlightClass}">$1</span>`);
}
