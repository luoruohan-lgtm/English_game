// High-quality contextual sentences for all vocabulary words
export interface WordSentence {
  sentence: string;
  translation: string;
}

export const WORD_SENTENCES: Record<string, WordSentence> = {
  // CET-4
  confused: {
    sentence: "The young apprentice was confused by the grand master's cryptic instructions.",
    translation: "年轻的学徒被宗师晦涩难懂的指令搞得十分困惑。"
  },
  abandon: {
    sentence: "Under heavy siege, the brave general vowed never to abandon the castle.",
    translation: "面对敌军的重重围困，英勇的将军誓死不放弃这座城堡。"
  },
  benefit: {
    sentence: "Forging an alliance with the local merchants will benefit our household's long-term prosperity.",
    translation: "与本地商贾结盟将为我们家族的长期繁荣带来极大利益。"
  },
  challenge: {
    sentence: "Overthrowing the corrupt prime minister remains a formidable challenge for us.",
    translation: "推翻贪腐的权相，对我们而言依旧是一项严峻的挑战。"
  },
  determine: {
    sentence: "She was determined to master the secret sword arts before the autumn tournament.",
    translation: "她下定决心，在秋季大武试到来之前彻底掌握这套秘传剑法。"
  },
  evaluate: {
    sentence: "We must carefully evaluate the spy's intelligence reports before moving our troops.",
    translation: "在调动兵马之前，我们必须仔细评估密探送来的情报。"
  },
  frequent: {
    sentence: "He made frequent visits to the imperial library, looking for references of forbidden magic.",
    translation: "他频繁地往返于皇家藏书阁，寻找关于禁忌魔法的文献记载。"
  },
  guarantee: {
    sentence: "I can guarantee that our family guards will protect your secret warehouse at all costs.",
    translation: "我担保我们家族的守卫会不惜一切代价保证你们秘密仓库的安全。"
  },
  harmony: {
    sentence: "The elven kingdom coexisted in perfect harmony with the ancient forest of whispers.",
    translation: "精灵王国与古老的低语森林在一派完美的和谐气氛中共生共存。"
  },
  influence: {
    sentence: "Her wise words exerted a powerful influence over the young prince's royal decisions.",
    translation: "她充满智慧的言辞对年轻王子的皇权执政决断产生了重大影响。"
  },
  justify: {
    sentence: "Simple political excuses cannot justify his blatant betrayal of our alliance.",
    translation: "简单的政治借口绝无法为他公然背叛我们盟约的行为开脱。"
  },
  knowledge: {
    sentence: "Ancient parchment scrolls hidden in the mountain temple possess profound ancient knowledge.",
    translation: "隐藏在山巅神庙里古老羊皮纸轴，蕴含着精深宏大的古老知识。"
  },
  maintain: {
    sentence: "It is crucial to maintain absolute silence as we sneak past the dragon's lair.",
    translation: "当我们悄悄溜过巨龙巢穴时，维持绝对的寂静是至关重要的。"
  },
  negotiate: {
    sentence: "The diplomat was sent to negotiate a peaceful borders treaty with the northern barbarians.",
    translation: "外交使节被派去与塞北蛮族谈判商议和平的疆域协定。"
  },
  observe: {
    sentence: "From the high tower, we can observe the enemy army's nocturnal movements clearly.",
    translation: "站在高高的箭楼上，我们能十分清晰地观察到敌军深夜的异动。"
  },
  possess: {
    sentence: "This legendary jade pendant is said to possess divine powers that can heal any wound.",
    translation: "传说中这块绝世神玉拥有能够治愈任何伤口的神秘生机力量。"
  },
  reliable: {
    sentence: "We need a reliable scout to map out the hidden path through the foggy swamp.",
    translation: "我们需要一位绝对可靠的侦查兵，来探明穿过迷雾沼泽的隐秘小径。"
  },
  significant: {
    sentence: "The discovery of a gold vein in the backyard was a highly significant event for our store.",
    translation: "在后山发现富金矿脉对我们商铺的崛起而言，是一个极为重大的重大事件。"
  },
  terminate: {
    sentence: "The emperor decided to terminate the unfair trade agreement with the western sea caravans.",
    translation: "皇帝毅然决然决定，即刻终止与西洋海商船队所签的不公平贸易协定。"
  },
  ultimate: {
    sentence: "Our ultimate objective is to obtain the lost Crown of Light from the ancient tomb.",
    translation: "我们的终极目标，就是从这座尘封古墓中重新夺回遗失的光明神冠。"
  },
  vibrant: {
    sentence: "The royal city market was vibrant with traveling merchants and exotic commodities.",
    translation: "皇城的闹市集里挤满了各国行商与异域奇珍，显得生机勃勃。"
  },
  witness: {
    sentence: "The young princess was the sole witness to the signing of the secret imperial decree.",
    translation: "年轻的公主是那份皇家绝密密诏签署仪式唯一的现场目击者。"
  },
  yield: {
    sentence: "Despite severe cold weathers, our greenhouses managed to yield enough medicine crops.",
    translation: "尽管遭遇了严酷的天寒地冻，我们的温室依然成功产出了足够的药用作物。"
  },
  zealous: {
    sentence: "The young paladin was zealous in his defense of the temple of the sun.",
    translation: "年轻的圣骑士满腔热忱，誓死保卫太阳神殿的神圣土地。"
  },
  accelerate: {
    sentence: "We must accelerate our recruitment drive to match the enemy's aggressive expansion.",
    translation: "我们必须加快招兵买马的招募进度，以应对敌方来势汹汹的迅猛扩军。"
  },
  baffle: {
    sentence: "The legendary thief's vanishing trick managed to scramble and baffle the guards completely.",
    translation: "怪盗出神入化的凭空消失之法，一举将宫廷守卫搞得百思不解、彻底难倒。"
  },
  calculate: {
    sentence: "The court astrologer was asked to calculate the exact timing of the upcoming solar eclipse.",
    translation: "皇家占星官受命推算下一次日食降临的精确时刻。"
  },
  deliberate: {
    sentence: "The general made a deliberate move to draw the beast out from its deep cave.",
    translation: "将军做出了一个蓄意的深思熟虑诱敌之举，意图将那尊妖兽引出深洞。"
  },
  elaborate: {
    sentence: "They spent thousands of gold ounces to build an elaborate trap for the dragon.",
    translation: "他们砸下了数千两黄金，只为针对深渊骨龙精心布置一个复杂的巨型陷阱。"
  },
  fascinate: {
    sentence: "The intricate martial arts scriptures managed to fascinate the talented disciple.",
    translation: "那本繁复而奥妙的武学秘笈，瞬间让那位极具天资的入门弟子沉迷着迷。"
  },

  // CET-6
  ambiguous: {
    sentence: "The grand master gave an ambiguous answer, leaving the disciple in doubt.",
    translation: "大宗师给出了一个模棱两可的玄妙回答，让座下的弟子大感疑惑不知所措。"
  },
  benevolent: {
    sentence: "The benevolent queen ordered a grand grain distribution to relieve the famine.",
    translation: "仁慈的主母下令大开粮仓赈济灾民，全力缓解眼前的饥荒之苦。"
  },
  cognitive: {
    sentence: "The scholar's advanced cognitive analysis deciphered the unknown runes in seconds.",
    translation: "学者高超的认知理性分析，让他在数息内便解开了这道未知的符文密码。"
  },
  deviate: {
    sentence: "Be careful not to deviate from the main caravan trail, as bandits roam the barrens.",
    translation: "切记不可开小差偏离主商道，因为这片荒原上流窜着无数马匪盗贼。"
  },
  eccentric: {
    sentence: "The eccentric alchemist lived alone, spending nights mixing strange purple potions.",
    translation: "那个性格孤僻古怪的炼丹师独居后山，整夜都沉浸在调配诡异的紫色药剂中。"
  },
  fluctuate: {
    sentence: "The prices of rare martial medicines fluctuate wildly due to the ongoing border wars.",
    translation: "由于边疆战火不断，各大商铺里稀世药草的身价产生了极为剧烈的起伏波动。"
  },
  gargantuan: {
    sentence: "A gargantuan stone golem guarded the entrance to the lost underground tomb.",
    translation: "一个宛如小山般的巨大石头人魔像，寸步不离地守卫在迷失墓穴的洞口。"
  },
  hypocrisy: {
    sentence: "She quickly saw through the smiling uncle's warm greeting and exposed his hypocrisy.",
    translation: "她瞬间看穿了那位笑面和蔼的叔叔背后的虚假，当众揭露了他的虚伪伪善。"
  },
  inevitable: {
    sentence: "With our defense walls crumbling, a direct confrontation with the horde is now inevitable.",
    translation: "随着外围城墙的崩塌，我们与兽人狂潮的正面决战已经变得不可避免。"
  },
  jeopardize: {
    sentence: "One minor spelling slip in this magic paper will jeopardize the whole spell circle.",
    translation: "在这篇法术秘卷中出现任何一丝的微小差错，都会直接危及整个魔法阵的安全。"
  },
  kindle: {
    sentence: "Her passionate speech managed to kindle a burning fire of rebellion in their hearts.",
    translation: "她那充满煽动性的热烈演词，成功在所有奴隶的心中激起并点燃了反抗的烈火。"
  },
  lucrative: {
    sentence: "Operating the salt trading franchise across provinces has proved to be a lucrative business.",
    translation: "经办跨省的官盐售卖特许权，已被事实证明是一桩获利极其丰厚的大买卖。"
  },
  meticulous: {
    sentence: "The poison tester spent hours making a meticulous inspection of the emperor's banquet.",
    translation: "试毒官耗费了数个时辰，对圣上面前百官盛宴上的每一份佳肴进行了一丝不苟的检查。"
  },
  nostalgia: {
    sentence: "Hearing the ancient mountain flute filled the traveling warrior with bittersweet nostalgia.",
    translation: "听到那熟悉的悠扬山笛声，让宦游在外的孤勇剑客塞满了浓烈的思乡怀旧之情。"
  },
  obliterate: {
    sentence: "The forbidden meteor curse was designed to obliterate the siege army instantly.",
    translation: "这项禁忌的天落陨石禁咒，旨在眨眼间将敌方的攻城大军抹去、彻底消灭。"
  },
  paradox: {
    sentence: "He is a walking paradox: a highly feared assassin who refuses to harm any small animals.",
    translation: "他是一个典型的矛盾结合体：明明是一个令人闻风丧胆的刺客，却绝不伤害任何小动物。"
  },
  quintessential: {
    sentence: "This ancient building is the quintessential example of classical Southern courtyard architecture.",
    translation: "这座幽幽老宅，堪称我国古典江南庭院式民居最典型的极致模板范例。"
  },
  redundant: {
    sentence: "Since we already have the magical mapping spell, this heavy paper map is redundant.",
    translation: "既然我们已经掌握了神奇的魔法探路画卷，带着这份沉重的纸质地图就多余了。"
  },
  scrutinize: {
    sentence: "The master detective began to scrutinize the document, searching for signs of forgery.",
    translation: "神探凑近在烛火旁，开始仔细检查这张宣纸契约，寻找篡改伪造的任何微小蛛丝马迹。"
  },
  ubiquitous: {
    sentence: "Spies of the shadow sect have become ubiquitous, hiding in every city corner.",
    translation: "暗影宗门的密探如今已到了无所不在、防不胜防的地步，隐匿在城中的每一个角落。"
  },
  vulnerable: {
    sentence: "Without his legendary golden body armor, the elite knight felt highly vulnerable.",
    translation: "脱去了那身防御强悍的黄金战甲，即便是最精锐的骑士也感到易受伤害、脆弱异常。"
  },
  wary: {
    sentence: "The wild stallion was wary of humans, refusing to let the master trainer draw near.",
    translation: "那匹性烈如火的野马王对人类极为警惕谨防，绝不让驯马大师踏入十步之内。"
  },
  zenith: {
    sentence: "He reached the absolute zenith of his political career when he was named Grand Imperial Scholar.",
    translation: "当他被封为文渊阁大学士时，他终于达到了他毕生政治生涯的最高顶点。"
  },
  advocate: {
    sentence: "The court reformer began to advocate for lower agricultural taxes on peasant families.",
    translation: "这位主张变法的朝臣开始大力提倡，建议削减农户们沉重的农业课税。"
  },
  belligerent: {
    sentence: "The general's belligerent attitude during negotiations almost triggered another civil war.",
    translation: "那位悍将在双边交涉谈判中摆出的好战挑衅态度，险些再次引燃双方剧烈的内战火花。"
  },
  conspicuous: {
    sentence: "Her bright red jade hairpin made her highly conspicuous among the crowd of guests.",
    translation: "她头上别着的那枚鲜红刺眼的红翡玉簪，让她在宾客如云的席面间显得极其瞩目惹眼。"
  },
  discrepancy: {
    sentence: "We discovered a massive discrepancy between the banker's accounts and the factual inventory.",
    translation: "我们赫然发现，大金库掌柜的账目细款与实际查收包裹之间存在着极大的差异矛盾。"
  },
  eminent: {
    sentence: "The emperor hosted a grand banquet in the palace to welcome the eminent scholars.",
    translation: "皇上今日在御花园设下国宴，亲自隆重接见那几位名扬天下的杰出贤哲学者。"
  },
  fostering: {
    sentence: "By funding the school, the wealthy merchant of our town is fostering young scholars.",
    translation: "通过资助学院，我们镇上的富商正在积极培养并扶持年轻的读书人走向官场。"
  },
  gullible: {
    sentence: "The gullible villagers were easily scammed by the foreign monk's fake magic relics.",
    translation: "纯朴听话却有些轻信易受骗的村民，轻而易举就被异域野僧兜售的假法宝骗走了口粮。"
  },

  // IELTS
  aesthetic: {
    sentence: "This jade artifact is valued not only for its antiquity, but for its high aesthetic merit.",
    translation: "这件古玉至宝之所以声价千万，不仅因为年头久远，更因其绝高的美学艺术价值。"
  },
  biodiversity: {
    sentence: "The protective druid order dedicated their lives to preserving the basin's rich biodiversity.",
    translation: "德鲁伊教团誓死奉献一生，专注于捍卫迷雾盆地中极其丰富的生物多样性不受污染。"
  },
  catastrophe: {
    sentence: "If the river dam breaks under the torrential storm, it will cause an absolute catastrophe.",
    translation: "倘若大运河堤防在如此狂风暴雨中决口，那对沿河千百村庄将是一场毁灭级的大灾难。"
  },
  demographic: {
    sentence: "The royal tax bureau maps out new laws based on the town's demographic shifts.",
    translation: "皇家户部税务总署正结合各州府呈报的人口统计学调查，筹划推行新的税负改革。"
  },
  ecosystem: {
    sentence: "Even one drop of toxic potion can severely disrupt the fragile forest ecosystem.",
    translation: "哪怕是一星半点的见血封喉毒药，也会彻底摧毁森林脆弱的自然生态系统。"
  },
  feasibility: {
    sentence: "Before launching the tunnel scheme, we must test the feasibility of mining the stones.",
    translation: "在调集数万劳工凿山筑路之前，我们必须仔细考察这套破石隧洞方案的可行性。"
  },
  greenhouse: {
    sentence: "We can cultivate rare warm-climate medicinal herbs inside this specialized crystal greenhouse.",
    translation: "我们可以在这座琉璃打造的特制晶能温室暖房里，人工培育极其罕见的南方热带药草。"
  },
  hypothesis: {
    sentence: "He put forward a bold hypothesis that the monster was actually an ancient guardian beast.",
    translation: "他提出了一个极其大胆的理论假设，怀疑这尊嗜血妖兽实际上是古代神殿的守护灵兽。"
  },
  infrastructure: {
    sentence: "Connecting the remote villages requires massive funding for roads and bridge infrastructure.",
    translation: "将那些深山里与世隔绝的村落连接起来，亟需投下重资修建路桥等基础设施。"
  },
  jeopardy: {
    sentence: "Without any fresh water, our entire expedition fleet was placed in active jeopardy.",
    translation: "在浩瀚的大洋重洋中耗尽了淡水库存，使得我们的整支探险船队陷入了极度危险的情境。"
  },
  kinship: {
    sentence: "Among the outcasts, they formed a deep bond of spiritual kinship that replaced blood.",
    translation: "在流放之地，他们形成了一种比血缘纽带更牢固的超越宗族的亲属相似般精神血盟。"
  },
  longevity: {
    sentence: "The monks believe that practicing breathing exercises daily is the secret to their longevity.",
    translation: "古刹里的僧人们坚信，每日潜心吐纳练功，正是他们超越世人寿限、得以长寿的长寿秘诀。"
  },
  mitigate: {
    sentence: "We must deliver food supplies immediately to mitigate the effects of the heavy famine.",
    translation: "我们必须迅速将赈灾粮草运抵灾区，尽最大限度去缓和减轻大饥荒带来的惨痛灾情。"
  },
  nutrient: {
    sentence: "The volcanic soil around the valley contains every vital nutrient required for herbs.",
    translation: "火山口周围肥沃至极的黑色泥土，拥有灵芝仙草茁壮成长所渴望的每一种营养物元素。"
  },
  obstacle: {
    sentence: "A huge rockfall blocking the mountain pass is the biggest obstacle on our path.",
    translation: "一堆巨大的山崩滚石在前方死死封住了关口，成为了我们此次撤退道路上最大的障碍阻碍。"
  },
  precedent: {
    sentence: "Promoting a female warrior to the rank of grand marshal is an event without any precedent.",
    translation: "册封一位巾帼女英豪为兵马大元帅，在整部帝国历史书上真可谓是毫无先例前例可循。"
  },
  quantitative: {
    sentence: "The potion master used specialized scale tools to ensure a precise quantitative extraction.",
    translation: "炼药大宗师动用了极其精密的刻度天平衡器，从而确保每一种原料都得到精准的定量提取。"
  },
  rehabilitation: {
    sentence: "After years in the dungeons, the prince spent months in rehabilitation to regain his strength.",
    translation: "在阴暗的地牢中被关押数年后，大皇子耗费了数月调理康复，才逐步恢复了他昔日的强横体魄。"
  },
  sustainable: {
    sentence: "Harvesting magic lumber under strict quotes is the only way to ensure sustainable growth.",
    translation: "遵循严格配额限伐奇珍神木，是保证这片仙晶森野得以可持续繁衍发展的唯一手段。"
  },
  threshold: {
    sentence: "As soon as you step over this threshold, you will enter the domain of the death god.",
    translation: "只要你的前脚掌跨越这道神殿门槛，你就将不可回头地踏入死神的寂灭领域。"
  },
  unprecedented: {
    sentence: "They organized an unprecedented collection of rare artifacts for the emperor's birthday.",
    translation: "他们为皇帝陛下的万寿大典，秘密筹集和集结了一批空前、史无前例的稀世奇珍异宝。"
  },
  viability: {
    sentence: "We must test the seed's viability under cold mountain conditions to avoid starvation.",
    translation: "我们必须先行试验这些珍贵种子在极寒山峦下的生存可行实力，以免开荒失败饿肚子。"
  },
  wastage: {
    sentence: "The quartermaster warned that we must reduce our daily wastage of arrows and rations.",
    translation: "军粮官厉声警告百将，我们必须千方百计减少军中每日箭弩和行军干粮的无端消耗浪费。"
  },
  xenophobia: {
    sentence: "The isolated valley clan suffered from extreme xenophobia, attacking any traveling outsiders.",
    translation: "隐遁世外的山谷古族人深陷于偏激的仇外排外惧怕中，习惯无差别射杀一切过路的商旅异乡人。"
  },
  aquatic: {
    sentence: "The mysterious siren we captured was actually a highly intelligent aquatic creature.",
    translation: "我们意外网获的那条美艳海妖，本质上实际上是一种极具人类心智的水生水上生命形态。"
  },
  biosphere: {
    sentence: "Any massive change in the weather pattern threatens the balance of our world's biosphere.",
    translation: "凡是气候的大动荡均将直接危及我们这一方世界生物圈的微妙平衡，甚至导致末日。"
  },
  depletion: {
    sentence: "The rapid depletion of our gold reserve forced us to increase mining outputs.",
    translation: "金库储备总银两的快速枯竭耗尽，逼得林大掌柜不得不加鞭催促矿场加大采掘力度。"
  },
  empirical: {
    sentence: "Our design is based on empirical studies rather than loose magic predictions.",
    translation: "我们这台巨型机关战车的防御设计建立在实证的数据之上，而非风水玄学上的虚幻推测。"
  },

  // TOEFL
  abundant: {
    sentence: "The volcanic volcanic lands provide abundant resources for growing rare dragon grass.",
    translation: "肥美而热乎的火山地热带，为珍贵龙息草的生长供给了极其充裕丰富的资源环境。"
  },
  accumulate: {
    sentence: "As a traveling researcher, you must slowly accumulate knowledge from every kingdom.",
    translation: "作为一个周游列国的行商学者，你必须在凡尘中慢慢积累阅历、堆修知识的巅峰。"
  },
  catalyst: {
    sentence: "This key piece of evidence became the catalyst that sparked a general rebellion.",
    translation: "这件决定性血书物证的公之于众，瞬间成为了激起激化全线武装造反的导火绳促成者。"
  },
  diffusion: {
    sentence: "The trade wind facilitated the fast diffusion of culture and crafts across the ocean.",
    translation: "浩瀚的大海信风，极大地促进了丝绸文化与瓷器工艺跨越万重洋的快速扩散整合。"
  },
  evolutionary: {
    sentence: "The long-necked horse showed distinct evolutionary features tailored for getting high leaves.",
    translation: "长颈灵马的颈部构造展现出明显的进化、为获取参天神木树梢叶片而演变的独特进化特征。"
  },
  fossilize: {
    sentence: "Ancient tree saps took millions of seasons to fossilize into beautiful golden amber beads.",
    translation: "古老巨木渗出的黏稠树脂，足足历经了千万载岁月的沉淀固化，才化石化为精美的黄金琥珀。"
  },
  geothermal: {
    sentence: "The dwarves built their underground forge directly above a boiling geothermal vent.",
    translation: "矮人铁匠将他们引以为傲的地下熔炉，直接架设在了嘶嘶作响、滚烫无比的地热喷发井正上方。"
  },
  hieroglyphic: {
    sentence: "Our scholar spent days deciphering the hieroglyphic symbols carved upon the stone gate.",
    translation: "我们大祭司耗尽了七天七夜，才终于破译了死死刻在冥界石大门上那些古老的象形文字符号。"
  },
  glacial: {
    sentence: "The party struggled to move forward through the freezing glacial wind and blinding snow.",
    translation: "在呼啸而过、如刀割面的极寒冰川狂风与漫天风雪中，探险小队寸步难行、举步维艰。"
  },
  impermeable: {
    sentence: "This mountain rock is highly impermeable, making it a perfect spot for our underground hideout.",
    translation: "这座山底的岩石结构不透水性极强，正是安设我们地下抵抗组织秘密哨点的上佳不渗透宝地。"
  },
  kilometer: {
    sentence: "The scout reported that the enemy infantry camp was only one kilometer away down the road.",
    translation: "斥候勒马急报，敌军先头重装步兵的营盘就在前方山道下一公里、近在眼前。"
  },
  lithosphere: {
    sentence: "Our crystal drill penetrated through the upper crust level of the planet's lithosphere.",
    translation: "我们大商会的晶能开山钻，已成功穿透了这颗富矿星球地壳岩石圈最坚硬的上表层。"
  },
  metamorphosis: {
    sentence: "The caterpillar underwent a complete metamorphosis, emerging as a stunning butterfly creature.",
    translation: "毛毛虫在深茧中完成了生命形态上彻底的变态蜕变，最终以一双极其绚烂的蝴蝶蝶翼破茧重聚。"
  },
  nomadic: {
    sentence: "The nomadic horse riders had no static cities, shifting camps with the changing seasons.",
    translation: "那些骁勇善战的游牧部落并不筑城定居，而是追逐着丰美水草、随四季更替流浪迁徙。"
  },
  oscillation: {
    sentence: "The sorcerer noticed a strange oscillation in the balance scale of local earth magic.",
    translation: "魔法大导师敏锐地察觉到，本地土元素魔力平衡的天平正出现一层诡异的振荡起伏。"
  },
  precipitation: {
    sentence: "With high annual precipitation, this marshy land is almost completely filled with bogs.",
    translation: "由于年降水量极其丰富充沛，导致整片山野平原几乎完全演变成了淤泥深陷的沼泽荒原。"
  },
  quartz: {
    sentence: "The magic ritual required three shards of pure quartz to reflect the magical energy.",
    translation: "古老的召唤仪式急需三枚质地无暇的天然纯净石英晶石，来精准折射汇聚月影微光能量。"
  },
  sedimentary: {
    sentence: "Over eons, layers of river mud were compressed to form a solid sedimentary stone formation.",
    translation: "在历经了亿万载光阴后，一层一层的河床淤泥最终在重压下坚固成了结实的沉积岩沉积地层。"
  },
  tectonic: {
    sentence: "The sudden earthquake was caused by a violent collision along the continent's major tectonic plates.",
    translation: "这场突如其来的毁灭级地裂大地震，正是由于大陆最深处各大地壳构造地质板块的剧烈挤压碰撞引起。"
  },
  utilization: {
    sentence: "Perfect utilization of wind force allowed our naval vessels to double their speed.",
    translation: "对海上顺风极为完美的利用驾驭，使得我们皇家风帆战船的速度瞬间暴增了足足一倍。"
  },
  velocity: {
    sentence: "An iron arrow traveling at extreme velocity pierced clean through the target wooden shield.",
    translation: "一支带着刺耳厉声、以极速飞行速度呼啸而至的精铁重箭，瞬间将靶心厚实的木盾扎了个对穿。"
  },
  weathering: {
    sentence: "The harsh desert wind caused intense weathering of the colossal monument over time.",
    translation: "旷日持久的荒漠狂沙刮骨，在漫长的岁月中使得本座雄伟的摩天魔神浮雕产生了极强的风化侵蚀。"
  },
  xerophyte: {
    sentence: "This desert cactus can survive long dry seasons because it is a highly evolved xerophyte.",
    translation: "这种遍布尖刺的沙漠仙人掌能在不毛之地傲然挺立数年，正因它是一种适应旱生的高级旱生植物。"
  },
  zoology: {
    sentence: "He studied animal behavior and zoology for years under the kingdom's royal academy guidance.",
    translation: "在王国皇家高级科学院的器重关怀下，他潜心钻研魔物习性与动物学达数载，声望颇高。"
  },
  adaptation: {
    sentence: "Gaining heat protection was an essential adaptation for creatures living in active volcano lands.",
    translation: "对于那些苟活于活火山裂隙中的妖兽，生出防烫皮毛是一项维持族群繁衍的关键适应特征。"
  },
  chronological: {
    sentence: "The librarian sorted the ancient dynastic tax history reports in strict chronological order.",
    translation: "皇家图书馆藏书吏极其干练，将历朝历代的各色起义税赋文册依严密的时间顺序整齐排布。"
  },
  demolish: {
    sentence: "We must use explosive barrels to completely demolish the enemy fortress gates.",
    translation: "我们必须抓紧时间部署火药桶，以彻底拆除摧毁敌方面前固若金汤的坚铁要塞大门。"
  },
  erosion: {
    sentence: "Heavy rain can wash away topsoil, causing severe erosion along the agricultural slopes.",
    translation: "连夜的倾盆暴雨会冲刷卷走稀缺的熟土，导致山前梯田农作物护根面临着严重的土壤侵蚀。"
  },

  // TEM-8
  anachronism: {
    sentence: "A wrist watch worn by a warrior in an ancient drama is an funny example of an anachronism.",
    translation: "在一部古装历史大战剧里，披甲猛将居然露出一只现代手表，这真是一个滑稽有趣的时代错误。"
  },
  cacophony: {
    sentence: "I was woke up by a terrible cacophony of clashing steel drums in the neighbor courtyard.",
    translation: "大清早，隔壁校场铜锣开道和战鼓喧天的刺耳杂音狂轰滥炸，生生将床铺上的我自美梦中惊醒。"
  },
  deleterious: {
    sentence: "This tainted mushroom contains deleterious toxins that can cause permanent kidney failure.",
    translation: "请勿贪鲜，这种生在淤泥中的斑斓斑点毒菇含有有害、极其 deleterious 的剧烈毒素。"
  },
  ephemeral: {
    sentence: "Beauty of the cherry blossoms is ephemeral, fading away after just a few days of spring rain.",
    translation: "绚美樱花的盛放光景极其短暂，不过是一场春雨过境，便化作春泥、转瞬即逝了。"
  },
  gregarious: {
    sentence: "Wolves are gregarious animals, hunting in coordinated packs to conquer large prey easily.",
    translation: "雪狼乃是天性崇尚集结的合群爱交际动物，极懂协同包抄，往往能轻松捕杀比自己庞大数倍的荒兽。"
  },
  idiosyncrasy: {
    sentence: "Sleeping with an old bronze coin under his tongue was one bizarre idiosyncrasy of the grand judge.",
    translation: "睡觉时必须含着一枚陈旧的青铜古御钱，乃是那位名满朝廷的黑面老推官诸多特立独行癖好中最怪诞的一个。"
  },
  juxtapose: {
    sentence: "If we juxtapose his fine oil paintings next to master works, the gap in skill becomes obvious.",
    translation: "如果我们故意将他的普通油画挂在历代名家书画典藏并列陈设，画工高下的差距瞬间一目了然。"
  },
  loquacious: {
    sentence: "The loquacious tavern barman was easily coaxed into selling off the local bandits' secret camp coordinates.",
    translation: "那个整日喋喋不休口无遮拦的酒肆小二，没被灌了几盏黄汤，便主动把马匪巢穴的密道吐露了个一干二净。"
  },
  magnanimous: {
    sentence: "A ruler should be magnanimous enough to forgive the mistake of his old generals.",
    translation: "一个真正的立志一统天下的英明君主，必然需要怀有足够的宽宏大量气度，主动赦宥老将的无心过失。"
  },
  nefarious: {
    sentence: "The deep shadow guild hatched a nefarious plan to poison the palace's central water well.",
    translation: "隐伏在市井底层的暗杀邪教行会，正在密谋一个企图投毒皇宫中央饮水甜井的极其坏、极其邪恶的阴谋。"
  },
  obsequious: {
    sentence: "The chief clerk bowed low, addressing the high lord with an obsequious smile.",
    translation: "主事官弯腰九十度、近乎谄媚贴地，满脸堆着逢迎讨好式的巴结笑容，卑躬屈膝地伺候在王爷马靴旁。"
  },
  parsimonious: {
    sentence: "The parsimonious city mayor refused to buy any oil lamps for the dark city alleys.",
    translation: "那位出名抠索、吝啬节俭到极点的九品知县，甚至不舍得拨出一钱银子来为县城的昏暗胡同添设一盏油灯。"
  },
  recalcitrant: {
    sentence: "The wardens struggled to control the recalcitrant barbarian prince in chains.",
    translation: "即便套上了千斤大铁链，一众狱卒在制服那位桀骜不驯、负隅顽抗的蛮人小王子的过程中依然险象环生。"
  },
  sycophant: {
    sentence: "The lazy court official was a total sycophant, constantly flattering the grand chancellor.",
    translation: "那名昏庸渎职的官吏是个彻头彻尾的马屁精、虚浮阿谀者，终日只知跪在权势滔天的太师脚下极尽逢迎。"
  },
  taciturn: {
    sentence: "The taciturn sentinel stood guards on the high castle wall without speaking word all day.",
    translation: "那个性格沉默寡言的高大黑甲军哨兵，不苟言笑独立在极寒城头大半日，整整十二时辰说不出一句话。"
  },
  ubiquity: {
    sentence: "Ubiquity of the imperial guard spies meant that peasants whispered in cold fears.",
    translation: "锦衣密探无处不在、监察满城的恐怖名望，吓得茶馆里的平头百姓们只敢极其微弱地贴耳窃窃私语。"
  },
  vociferous: {
    sentence: "The vociferous merchants outside the palace camp were arguing loudly over salt tax rates.",
    translation: "兵营辕门外聚众大呼、人声喧嚷的无数行商，正为了那一厘的食盐过境课税争吵得面红耳赤脖子粗。"
  },
  winsome: {
    sentence: "Her winsome beauty and delicate speech instantly melted the freezing anger of the high general.",
    translation: "她那警人喜爱、迷人温润的浅浅一笑和吐气如兰的温和解释，眨眼间便融化了武将脸上那令人战栗的冰冷怒气。"
  },
  xenophile: {
    sentence: "The traveling prince was a known xenophile, collecting foreign books from any ocean ports.",
    translation: "那位博学睿智的异域皇子是个极度向往他乡文化的喜爱外国事物者，下榻渡口时狂热搜罗了无数海外图册。"
  },
  yoke: {
    sentence: "The revolutionary warrior vowed to shatter the cruel yoke of slavery and feudal oppression.",
    translation: "那位自草莽掘起的革命豪侠拔剑指天，誓死要粉碎死死枷锁束缚在万千流民身上的残酷奴隶枷锁。"
  },
  zealot: {
    sentence: "The religious zealot refused to stop his prayers, even when the foreign army broke into the chapel.",
    translation: "哪怕异域大军已用重锤砸开了教堂圣殿的雕花木大门，那位极端虔诚的狂热宗教分子依然不肯停止他的祈祷。"
  },
  acquiesce: {
    sentence: "The leader felt forced to acquiesce to the harsh terms of the rival business guild.",
    translation: "面对竞争对手商帮那泰山压顶般的断供大围剿，林帮主迫不得已，只能咬牙勉强同意对方极其苛刻的盘剥条约。"
  },
  bellicose: {
    sentence: "The bellicose horse general always preferred a swift war over boring diplomatic talks.",
    translation: "那位生性好斗、极其好战的白袍悍将，永远只倾向于用横刀喋血快刀斩乱麻，绝懒得参与乏味虚伪的外交废话。"
  },
  capricious: {
    sentence: "The capricious young lord changed his favorites daily, making his servants constantly nervous.",
    translation: "那名任性骄纵、脾气反复无常的侯府小爵爷，一日里心思能变八十遭，骇得门外伺候的下人们时时刻刻缩脖叹息。"
  },
  dearth: {
    sentence: "A severe dearth of medicine herbs after the siege led to a plague outbreak inside the town.",
    translation: "大围城历时三月、县城里医馆面临着草药严重短缺缺乏甚至彻底断绝的绝地，不幸骤然诱发了凄惨瘟疫。"
  },
  enervate: {
    sentence: "Weeks of marching under the desert hot sun completely enervated the royal guard troops.",
    translation: "在酷热无比大西北荒沙下连着风尘仆仆急军半月，生生使全军最前列的禁卫军健儿虚脱中暑、陷入严重的衰弱。"
  },
  fastidious: {
    sentence: "The master alchemist was extremely fastidious about cleaning the glass vials.",
    translation: "这位举世闻名的丹道大宗师，在清理水晶烧瓶和量器时吹毛求疵到极致，极其讲究到令人发指的挑剔洁癖程度。"
  },
  garrulous: {
    sentence: "The garrulous old guard was easily tricked into talking about the secret palace escape path.",
    translation: "那个上了年纪、极爱唠叨嘴快啰唆的话多门卫老头，随口就被几口老烧刀套出了宫廷后宫禁苑的防空逃生秘道。"
  },
  harangue: {
    sentence: "The angry general delivered a loud harangue to the frightened soldiers who fled from battle.",
    translation: "面色威严的统帅手按腰刀，站在高高的将台上对那一圈因惧怕逃遁而被绳捆索绑的败兵进行了声震数里的严厉斥责性演说。"
  },
  imperturbable: {
    sentence: "Even with the castle gates burning in flames, the queen maintained her imperturbable calm.",
    translation: "即便宫殿一重重的汉白玉朝天大门在一片火海和喊杀声中崩毁，这位主母依然金刀端坐，保持着她泰然自若、坚硬无比的极静冷静。"
  }
};

// Simple utility to format and highlight word inside sentence
export function highlightWordInSentence(sentence: string, targetWord: string, highlightClass: string = "text-amber-500 font-extrabold font-mono"): string {
  if (!sentence || !targetWord) return sentence;
  const regex = new RegExp(`\\b(${targetWord}[a-z]*)\\b`, "gi");
  return sentence.replace(regex, `<span class="${highlightClass}">$1</span>`);
}
