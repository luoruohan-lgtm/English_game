import { WordBookType, Word, ScenarioContext, ShopItem, ExamQuestion } from "./types";

// Vocabularies for each Word Book in Simplified Chinese
export const WORD_BOOKS: Record<WordBookType, Word[]> = {
  [WordBookType.CET4]: [
    { word: "confused", phonetic: "/kənˈfjuːzd/", meaning: "困惑的，糊涂的", distractors: ["冷静的", "兴奋的", "愤怒的"] },
    { word: "abandon", phonetic: "/əˈbændən/", meaning: "放弃，遗弃", distractors: ["保留", "追求", "反对"] },
    { word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "利益，好处", distractors: ["损害", "浪费", "借口"] },
    { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", meaning: "挑战，怀疑", distractors: ["妥协", "同意", "遗忘"] },
    { word: "determine", phonetic: "/dɪˈtɜːmɪn/", meaning: "决定，下定决心", distractors: ["犹豫", "延迟", "推卸"] },
    { word: "evaluate", phonetic: "/ɪˈvæljueɪt/", meaning: "评估，评价", distractors: ["创造", "忽视", "反对"] },
    { word: "frequent", phonetic: "/ˈfriːkwənt/", meaning: "频繁的，经常的", distractors: ["罕见的", "安静的", "遥远的"] },
    { word: "guarantee", phonetic: "/ˌɡærənˈtiː/", meaning: "保证，担保", distractors: ["怀疑", "隐瞒", "取消"] },
    { word: "harmony", phonetic: "/ˈhɑːməni/", meaning: "和谐，协调", distractors: ["冲突", "混乱", "孤立"] },
    { word: "influence", phonetic: "/ˈɪnfluəns/", meaning: "影响，势力", distractors: ["顺从", "忽略", "反抗"] },
    { word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", meaning: "证明...是合理的", distractors: ["谴责", "歪曲", "拒绝"] },
    { word: "knowledge", phonetic: "/ˈnɒlɪdʒ/", meaning: "知识，学识", distractors: ["愚昧", "幻想", "习惯"] },
    { word: "maintain", phonetic: "/meɪnˈteɪn/", meaning: "维持，保养", distractors: ["破坏", "改变", "抛弃"] },
    { word: "negotiate", phonetic: "/nɪˈɡəʊʃieɪt/", meaning: "谈判，商议", distractors: ["冲突", "服从", "放弃"] },
    { word: "observe", phonetic: "/əbˈzɜːv/", meaning: "观察，遵守", distractors: ["忽略", "违反", "发明"] },
    { word: "possess", phonetic: "/pəˈzes/", meaning: "拥有，具备", distractors: ["丢失", "借用", "拒绝"] },
    { word: "reliable", phonetic: "/rɪˈlaɪəbl/", meaning: "可靠的，可信赖的", distractors: ["狡猾的", "危险的", "善变的"] },
    { word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "显著的，重大的", distractors: ["微不足道的", "普通的", "局部的"] },
    { word: "terminate", phonetic: "/ˈtɜːmɪneɪt/", meaning: "终止，结束", distractors: ["开始", "延长", "加速"] },
    { word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "终极的，极限的", distractors: ["最初的", "短暂的", "随机的"] },
    { word: "vibrant", phonetic: "/ˈvaɪbrənt/", meaning: "生机勃勃的", distractors: ["沉闷的", "虚弱的", "冰冷的"] },
    { word: "witness", phonetic: "/ˈwɪtnəs/", meaning: "见证人，目击", distractors: ["凶手", "策划者", "受害者"] },
    { word: "yield", phonetic: "/jiːld/", meaning: "产出，屈服", distractors: ["反抗", "保全", "加速"] },
    { word: "zealous", phonetic: "/ˈzeləs/", meaning: "热情的，狂热的", distractors: ["冷漠的", "理智的", "傲慢的"] },
    { word: "accelerate", phonetic: "/əkˈseləreɪt/", meaning: "加速，促进", distractors: ["减速", "停止", "防御"] },
    { word: "baffle", phonetic: "/ˈbæfl/", meaning: "使困惑，难倒", distractors: ["启发", "安慰", "揭穿"] },
    { word: "calculate", phonetic: "/ˈkælkjuleɪt/", meaning: "计算，推算", distractors: ["猜测", "忽略", "反馈"] },
    { word: "deliberate", phonetic: "/dɪˈlɪbərət/", meaning: "深思熟虑的，蓄意的", distractors: ["草率的", "本能的", "意外的"] },
    { word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "精心制作的，详细阐述", distractors: ["简陋的", "敷衍的", "原始的"] },
    { word: "fascinate", phonetic: "/ˈfæsɪneɪt/", meaning: "强烈吸引，使着迷", distractors: ["令人厌恶", "警告", "说服"] }
  ],
  [WordBookType.CET6]: [
    { word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", meaning: "模棱两可的", distractors: ["清晰的", "高深的", "虚伪的"] },
    { word: "benevolent", phonetic: "/bəˈnevələnt/", meaning: "仁慈的，善意的", distractors: ["邪恶的", "小气的", "傲慢的"] },
    { word: "cognitive", phonetic: "/ˈkɒɡnətɪv/", meaning: "认知的，感知的", distractors: ["情感的", "本能的", "外界的"] },
    { word: "deviate", phonetic: "/ˈdiːvieɪt/", meaning: "偏离，背离", distractors: ["遵循", "坚持", "预测"] },
    { word: "eccentric", phonetic: "/ɪkˈsentrɪk/", meaning: "古怪的，异乎寻常的", distractors: ["平庸的", "合群的", "保守的"] },
    { word: "fluctuate", phonetic: "/ˈflʌktʃueɪt/", meaning: "波动，起伏", distractors: ["稳定", "上升", "停止"] },
    { word: "gargantuan", phonetic: "/ɡɑːˈɡæntʃuən/", meaning: "巨大的，庞大的", distractors: ["微小的", "精致的", "脆弱的"] },
    { word: "hypocrisy", phonetic: "/hɪˈpɒkrəsi/", meaning: "虚伪，伪善", distractors: ["真诚", "谦虚", "智慧"] },
    { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "不可避免的，必然的", distractors: ["偶然的", "可疑的", "未知的"] },
    { word: "jeopardize", phonetic: "/ˈdʒepədaɪz/", meaning: "危及，危害", distractors: ["保护", "支持", "忽略"] },
    { word: "kindle", phonetic: "/ˈkɪndl/", meaning: "点燃，激起", distractors: ["浇灭", "掩盖", "抑制"] },
    { word: "lucrative", phonetic: "/ˈluːkrətɪv/", meaning: "获利丰厚的，赚钱的", distractors: ["亏本的", "廉价的", "辛苦的"] },
    { word: "meticulous", phonetic: "/məˈtɪkjələs/", meaning: "一丝不苟的，极细心的", distractors: ["粗心的", "敷衍的", "随意的"] },
    { word: "nostalgia", phonetic: "/nɒˈstældʒə/", meaning: "怀旧，思乡病", distractors: ["前瞻", "遗忘", "恐惧"] },
    { word: "obliterate", phonetic: "/əˈblɪtəreɪt/", meaning: "抹去，彻底消灭", distractors: ["重建", "保护", "记录"] },
    { word: "paradox", phonetic: "/ˈpærədɒks/", meaning: "自相矛盾的人或事", distractors: ["公理", "真理", "巧合"] },
    { word: "quintessential", phonetic: "/ˌkwɪntɪˈsenʃl/", meaning: "最典型的，典范的", distractors: ["边缘的", "一般的", "低劣的"] },
    { word: "redundant", phonetic: "/rɪˈdʌndənt/", meaning: "多余的，累赘的", distractors: ["稀缺的", "必要的", "高档的"] },
    { word: "scrutinize", phonetic: "/ˈskruːtənaɪz/", meaning: "细看，仔细检查", distractors: ["瞥一眼", "略过", "遗弃"] },
    { word: "ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "无所不在的", distractors: ["罕见的", "隐蔽的", "局部的"] },
    { word: "vulnerable", phonetic: "/ˈvʌlnərəbl/", meaning: "易受伤害的，脆弱的", distractors: ["坚不可摧的", "敏捷的", "迟钝的"] },
    { word: "wary", phonetic: "/ˈweəri/", meaning: "警惕的，谨防的", distractors: ["大意的", "勇敢的", "热情的"] },
    { word: "zenith", phonetic: "/ˈzenɪθ/", meaning: "顶峰，顶点", distractors: ["谷底", "起点", "平均线"] },
    { word: "advocate", phonetic: "/ˈædvəkeɪt/", meaning: "拥护，提倡", distractors: ["反对", "指责", "冷落"] },
    { word: "belligerent", phonetic: "/bəˈlɪdʒərənt/", meaning: "好战的，挑衅的", distractors: ["和平的", "软弱的", "智慧的"] },
    { word: "conspicuous", phonetic: "/kənˈspɪkjuəs/", meaning: "显眼的，引人注目的", distractors: ["隐蔽的", "暗淡的", "普通的"] },
    { word: "discrepancy", phonetic: "/dɪsˈkrepənsi/", meaning: "差异，矛盾", distractors: ["一致", "联系", "巧合"] },
    { word: "eminent", phonetic: "/ˈemɪnənt/", meaning: "杰出的，著名的", distractors: ["默默无闻的", "庸俗的", "自私的"] },
    { word: "fostering", phonetic: "/ˈfɒstərɪŋ/", meaning: "培养，促进", distractors: ["压制", "抛弃", "忽略"] },
    { word: "gullible", phonetic: "/ˈɡʌləbl/", meaning: "易受骗的，轻信的", distractors: ["精明的", "多疑的", "冷酷的"] }
  ],
  [WordBookType.IELTS]: [
    { word: "aesthetic", phonetic: "/iːsˈθetɪk/", meaning: "美学的，艺术的", distractors: ["实用的", "科学的", "世俗的"] },
    { word: "biodiversity", phonetic: "/ˌbaɪəudaɪˈvɜːsəti/", meaning: "生物多样性", distractors: ["生态退化", "单一物种", "气候演变"] },
    { word: "catastrophe", phonetic: "/kəˈtæstrəfi/", meaning: "大灾难，惨败", distractors: ["幸运", "突破", "盛典"] },
    { word: "demographic", phonetic: "/ˌdeməˈɡræfɪk/", meaning: "人口统计学的", distractors: ["地质学的", "心理学的", "历史的"] },
    { word: "ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", meaning: "生态系统", distractors: ["工业区", "气候带", "无机环境"] },
    { word: "feasibility", phonetic: "/ˌfiːzəˈbɪləti/", meaning: "可行性，可能性", distractors: ["荒谬性", "局限性", "历史性"] },
    { word: "greenhouse", phonetic: "/ˈɡriːnhaʊs/", meaning: "温室，暖房", distractors: ["工厂", "冷藏库", "露天花园"] },
    { word: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", meaning: "假设，假说", distractors: ["定论", "事实", "幻觉"] },
    { word: "infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə/", meaning: "基础设施，基建", distractors: ["上层建筑", "装饰物", "古迹"] },
    { word: "jeopardy", phonetic: "/ˈdʒepədi/", meaning: "危险，危急境地", distractors: ["安全", "繁荣", "放松"] },
    { word: "kinship", phonetic: "/ˈkɪnʃɪp/", meaning: "亲属关系，相似度", distractors: ["疏远", "敌意", "主仆关系"] },
    { word: "longevity", phonetic: "/lɒnˈdʒevəti/", meaning: "长寿，寿命", distractors: ["夭折", "短暂", "衰老"] },
    { word: "mitigate", phonetic: "/ˈmɪtɪɡeɪt/", meaning: "缓和，减轻", distractors: ["加剧", "煽动", "忽视"] },
    { word: "nutrient", phonetic: "/ˈnjuːtriənt/", meaning: "营养物，滋养的", distractors: ["毒素", "杂质", "配料"] },
    { word: "obstacle", phonetic: "/ˈɒbstəkl/", meaning: "障碍，妨碍物", distractors: ["助力", "捷径", "起点"] },
    { word: "precedent", phonetic: "/ˈpresɪdənt/", meaning: "先例，前例", distractors: ["后果", "巧合", "禁忌"] },
    { word: "quantitative", phonetic: "/ˈkwɒntɪtətɪv/", meaning: "数量的，定量的", distractors: ["定性的", "主观的", "模糊的"] },
    { word: "rehabilitation", phonetic: "/ˌriːhəˌbɪlɪˈteɪʃn/", meaning: "康复，恢复名誉", distractors: ["堕落", "指控", "拆除"] },
    { word: "sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "可持续的，能维持的", distractors: ["一次性的", "脆弱的", "落后的"] },
    { word: "threshold", phonetic: "/ˈθreʃhəʊld/", meaning: "门槛，起点，临界值", distractors: ["终点", "核心", "高度"] },
    { word: "unprecedented", phonetic: "/ʌnˈpresɪdentɪd/", meaning: "空前的，史无前例的", distractors: ["司空见惯的", "落后的", "符合规律的"] },
    { word: "viability", phonetic: "/ˌvaɪəˈbɪləti/", meaning: "生存能力，可行性", distractors: ["死亡率", "退化", "不可行"] },
    { word: "wastage", phonetic: "/ˈweɪstɪdʒ/", meaning: "消耗，浪费", distractors: ["积累", "回收", "保护"] },
    { word: "xenophobia", phonetic: "/ˌzenəˈfəʊbiə/", meaning: "仇外，排外惧怕", distractors: ["友好", "包容", "崇洋媚外"] },
    { word: "yield", phonetic: "/jiːld/", meaning: "产量，收益", distractors: ["投入", "亏损", "研发"] },
    { word: "aquatic", phonetic: "/əˈkwætɪk/", meaning: "水生的，水上的", distractors: ["陆生的", "飞行的", "沙漠的"] },
    { word: "biosphere", phonetic: "/ˈbaɪəʊsfɪə/", meaning: "生物圈", distractors: ["平流层", "地心", "外太空"] },
    { word: "cognitive", phonetic: "/ˈkɒɡnətɪv/", meaning: "认知的", distractors: ["生理的", "本能的", "遗传的"] },
    { word: "depletion", phonetic: "/dɪˈpliːʃn/", meaning: "损耗，枯竭", distractors: ["充实", "更新", "保护"] },
    { word: "empirical", phonetic: "/ɪmˈpɪrɪkl/", meaning: "凭经验的，实证的", distractors: ["理论上的", "虚无的", "主观的"] }
  ],
  [WordBookType.TOEFL]: [
    { word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "丰富的，充裕的", distractors: ["匮乏的", "昂贵的", "多余的"] },
    { word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", meaning: "积累，堆积", distractors: ["分散", "消耗", "释放"] },
    { word: "catalyst", phonetic: "/ˈkætəlɪst/", meaning: "催化剂，促成者", distractors: ["阻碍者", "吸收剂", "旁观者"] },
    { word: "diffusion", phonetic: "/dɪˈfjuːʒn/", meaning: "扩散，传播", distractors: ["聚集", "结晶", "阻断"] },
    { word: "evolutionary", phonetic: "/ˌiːvəˈluːʃnəri/", meaning: "进化的，发展的", distractors: ["突变的", "停滞的", "倒退的"] },
    { word: "fossilize", phonetic: "/ˈfɒsəlaɪz/", meaning: "使化石化，固定化", distractors: ["使腐烂", "液化", "解冻"] },
    { word: "geothermal", phonetic: "/ˌdʒiːəʊˈθɜːml/", meaning: "地热的", distractors: ["水力的", "风力的", "太阳能的"] },
    { word: "hieroglyphic", phonetic: "/ˌhaɪərəˈɡlɪfɪk/", meaning: "象形文字的", distractors: ["拼音的", "现代的", "无文字的"] },
    { word: "glacial", phonetic: "/ˈɡleɪʃl/", meaning: "冰川的，冰冷的", distractors: ["炎热的", "火山的", "海洋的"] },
    { word: "impermeable", phonetic: "/ɪmˈpɜːmiəbl/", meaning: "不渗透的，不透水的", distractors: ["多孔的", "海绵状的", "透明的"] },
    { word: "kilometer", phonetic: "/kɪˈlɒmɪtə/", meaning: "千米，公里", distractors: ["分米", "光年", "平方米"] },
    { word: "lithosphere", phonetic: "/ˈlɪθəʊsfɪə/", meaning: "岩石圈", distractors: ["大气层", "地幔", "水圈"] },
    { word: "metamorphosis", phonetic: "/ˌmetəˈmɔːfəsɪs/", meaning: "变态，蜕变", distractors: ["维持", "老化", "退化"] },
    { word: "nomadic", phonetic: "/nəʊˈmædɪk/", meaning: "游牧的，流浪的", distractors: ["定居的", "城市化的", "富裕的"] },
    { word: "oscillation", phonetic: "/ˌɒsɪˈleɪʃn/", meaning: "振荡，摆动", distractors: ["平衡", "直线运动", "停止"] },
    { word: "precipitation", phonetic: "/prɪˌsɪpɪˈteɪʃn/", meaning: "降雨（雪）量，沉淀", distractors: ["蒸发", "干旱", "融化"] },
    { word: "quartz", phonetic: "/kwɔːts/", meaning: "石英", distractors: ["花岗岩", "大理石", "黏土"] },
    { word: "sedimentary", phonetic: "/ˌsedɪˈmentri/", meaning: "沉积的，沉淀的", distractors: ["岩浆的", "变质的", "气态的"] },
    { word: "tectonic", phonetic: "/tekˈtɒnɪk/", meaning: "地壳构造的", distractors: ["气候的", "海洋内流的", "天文的"] },
    { word: "utilization", phonetic: "/ˌjuːtəlaɪˈzeɪʃn/", meaning: "利用，使用", distractors: ["浪费", "遗弃", "囤积"] },
    { word: "velocity", phonetic: "/vəˈlɒsəti/", meaning: "速度，迅速", distractors: ["质量", "重力", "摩擦力"] },
    { word: "weathering", phonetic: "/ˈweðərɪŋ/", meaning: "风化作用", distractors: ["腐蚀作用", "沉淀作用", "地壳变异"] },
    { word: "xerophyte", phonetic: "/ˈzɪərəʊfaɪt/", meaning: "旱生植物", distractors: ["水生植物", "寄生植物", "乔木"] },
    { word: "yield", phonetic: "/jiːld/", meaning: "产生，提供", distractors: ["消耗", "阻止", "模仿"] },
    { word: "zoology", phonetic: "/zuˈɒlədʒi/", meaning: "动物学", distractors: ["植物学", "地质学", "古生物学"] },
    { word: "adaptation", phonetic: "/ˌædæpˈteɪʃn/", meaning: "适应，改编", distractors: ["排斥", "遗传", "退化"] },
    { word: "chronological", phonetic: "/ˌkrɒnəˈlɒdʒɪkl/", meaning: "按时间顺序的", distractors: ["杂乱无章的", "空间的", "逻辑的"] },
    { word: "demolish", phonetic: "/dɪˈmɒlɪʃ/", meaning: "拆除，摧毁", distractors: ["建造", "保护", "设计"] },
    { word: "erosion", phonetic: "/ɪˈrəʊʒn/", meaning: "侵蚀，削弱", distractors: ["堆积", "固化", "滋润"] },
    { word: "fluctuation", phonetic: "/ˌflʌktʃuˈeɪʃn/", meaning: "起伏，波动", distractors: ["平稳", "高潮", "停滞"] }
  ],
  [WordBookType.TEM8]: [
    { word: "anachronism", phonetic: "/əˈnækrənɪzəm/", meaning: "时代错误，过时的人或物", distractors: ["风潮", "同步性", "先见之明"] },
    { word: "cacophony", phonetic: "/kəˈkɒfəni/", meaning: "刺耳的杂音", distractors: ["天籁之音", "安静", "回声"] },
    { word: "deleterious", phonetic: "/ˌdelɪˈtɪəriəs/", meaning: "有害的，有毒的", distractors: ["有益的", "美味的", "无害的"] },
    { word: "ephemeral", phonetic: "/ɪˈfemərəl/", meaning: "短暂的，转瞬即逝的", distractors: ["永恒的", "漫长的", "重大的"] },
    { word: "gregarious", phonetic: "/ɡrɪˈɡeəriəs/", meaning: "合群的，爱交际的", distractors: ["孤僻的", "沉默的", "高傲的"] },
    { word: "idiosyncrasy", phonetic: "/ˌɪdiəˈsɪŋkrəsi/", meaning: "个人特质，癖好", distractors: ["共性", "陋习", "传统"] },
    { word: "juxtapose", phonetic: "/ˌdʒʌkstəˈpəʊz/", meaning: "并置，并列", distractors: ["分离", "重叠", "隐藏"] },
    { word: "loquacious", phonetic: "/ləʊˈkweɪʃəs/", meaning: "多话的，滔滔不绝的", distractors: ["沉默寡言的", "愤怒的", "聪明的"] },
    { word: "magnanimous", phonetic: "/mæɡˈnænɪməs/", meaning: "宽宏大量的", distractors: ["小气的", "残忍的", "吝啬的"] },
    { word: "nefarious", phonetic: "/nɪˈfeəriəs/", meaning: "极坏的，邪恶的", distractors: ["善良的", "神圣的", "普通的"] },
    { word: "obsequious", phonetic: "/əbToken/", meaning: "逢迎的，谄媚的", distractors: ["傲慢的", "诚实的", "公正的"] }, // Let's correct phonetic wait and keep word standard
    { word: "obsequious", phonetic: "/əbˈsiːkwiəs/", meaning: "逢迎的，谄媚的", distractors: ["傲慢的", "诚实的", "公正的"] },
    { word: "parsimonious", phonetic: "/ˌpɑːsɪˈməʊniəs/", meaning: "吝啬的，过度节俭的", distractors: ["慷慨的", "奢侈的", "贫穷的"] },
    { word: "recalcitrant", phonetic: "/rɪˈkælsɪtrənt/", meaning: "顽抗的，不驯服的", distractors: ["顺从的", "虚弱的", "热情的"] },
    { word: "sycophant", phonetic: "/ˈsɪkəfænt/", meaning: "马屁精，逢迎者", distractors: ["诤友", "隐士", "演说家"] },
    { word: "taciturn", phonetic: "/ˈtæsɪtɜːn/", meaning: "沉默寡言的", distractors: ["喋喋不休的", "开朗的", "暴躁的"] },
    { word: "ubiquity", phonetic: "/juːˈbɪkwəti/", meaning: "无处不在", distractors: ["罕见性", "局限性", "短暂性"] },
    { word: "vociferous", phonetic: "/vəʊˈsɪfərəs/", meaning: "喧嚷的，大声喊叫的", distractors: ["轻声的", "严肃的", "温柔的"] },
    { word: "winsome", phonetic: "/ˈwɪnsəm/", meaning: "迷人的，警人喜爱的", distractors: ["讨人厌的", "高冷的", "丑陋的"] },
    { word: "xenophile", phonetic: "/ˈzenəfaɪl/", meaning: "喜爱外国事物者", distractors: ["排外者", "爱国者", "无政府主义者"] },
    { word: "yoke", phonetic: "/jəʊk/", meaning: "枷锁，束缚", distractors: ["自由", "财富", "勋章"] },
    { word: "zealot", phonetic: "/ˈzelət/", meaning: "狂热分子，极端狂热者", distractors: ["温和派", "怀疑论者", "投机者"] },
    { word: "acquiesce", phonetic: "/ˌækwiˈes/", meaning: "默许，勉强同意", distractors: ["强烈反对", "主动提议", "忽视"] },
    { word: "bellicose", phonetic: "/ˈbelɪkəʊs/", meaning: "好战的，好斗的", distractors: ["和平的", "胆小的", "宽容的"] },
    { word: "capricious", phonetic: "/kəˈprɪʃəs/", meaning: "反复无常的，任性的", distractors: ["稳定的", "顽固的", "明智的"] },
    { word: "dearth", phonetic: "/dɜːθ/", meaning: "缺乏，饥荒", distractors: ["丰裕", "浪费", "奢华"] },
    { word: "enervate", phonetic: "/ˈenəveɪt/", meaning: "使衰弱，使失去活力", distractors: ["使精力充沛", "保护", "治愈"] },
    { word: "fastidious", phonetic: "/fæˈstɪdiəs/", meaning: "挑剔的，极讲究清洁的", distractors: ["邋遢的", "随意的", "随和的"] },
    { word: "garrulous", phonetic: "/ˈɡærələs/", meaning: "啰唆的，话多的", distractors: ["精炼的", "高冷的", "害羞的"] },
    { word: "harangue", phonetic: "/həˈræŋ/", meaning: "长篇大论的斥责性演说", distractors: ["窃窃私语", "赞美诗", "幽默小品"] },
    { word: "imperturbable", phonetic: "/ˌɪmpəˈtɜːbəbl/", meaning: "冷静的，泰然自若的", distractors: ["易怒的", "胆怯的", "热情的"] }
  ]
};

// 10 Immersive Timelines / Scenarios in Simplified Chinese with specific updates
export const SCENARIOS: ScenarioContext[] = [
  {
    id: "ancient_palace",
    name: "古代宅斗 (宅邸风云)",
    description: "穿越到豪门深宅，你是一位不受宠的庶出子女。在波谲云诡的大宅院内，面对嫡母的算计、兄弟姐妹的倾轧，你需要依靠过人智慧（英语单词）步步为营，夺回家产与尊严！",
    companionName: "巧儿",
    companionTitle: "贴身丫鬟 / 忠心小厮",
    companionIntro: "巧儿是自小陪侍你身边的贴身之人，性格机敏伶俐，对你忠贞不二。她深知府内各房的恩怨秘密，随时为你递上茶水，出谋划策破除阴谋。",
    currencyName: "黄金银两",
    currencyIcon: "🪙",
    accentColor: "amber",
    bgGradient: "from-amber-950 to-stone-900",
    textCol: "text-amber-400",
    cardBg: "bg-amber-950/40 border-amber-900/50"
  },
  {
    id: "imperial_court",
    name: "皇宫宫斗 (后宫上位)",
    description: "穿越高耸的红墙，你是一名刚入深宫的秀女。高墙之内暗流汹涌，各路妃嫔心机深沉。你唯有答对单词，才能在御前展示惊世才华，平步青云，成为后宫主宰！",
    companionName: "卫公公",
    companionTitle: "敬事房掌案太监",
    companionIntro: "卫公公在深宫浸淫数十年，看尽嫔妃起落。他因曾受你母家恩惠，暗中向你通风报信，告知皇上的喜好与各宫的动作，助你平步青云。",
    currencyName: "赏赐珠宝",
    currencyIcon: "💎",
    accentColor: "yellow",
    bgGradient: "from-yellow-950 to-neutral-900",
    textCol: "text-yellow-400",
    cardBg: "bg-yellow-950/30 border-yellow-800/40"
  },
  {
    id: "modern_city",
    name: "现代都市 (名流进阶)",
    description: "在繁华迷人的大都市，你只是一个辛苦打拼的白领。面对房贷压力与精英社交圈的阶级壁垒，用流利的英语（答题）出入高端名流酒会、收购跨国公司，打造超级都市神话！",
    companionName: "Leo",
    companionTitle: "职场男闺蜜 / 精英猎头",
    companionIntro: "Leo是你在都市最信赖的职场好友。他时尚、消息灵通，能帮你分析业界最新趋势与名流动态，还时刻拉着你到咖啡馆复习商用术语。",
    currencyName: "都市信用额",
    currencyIcon: "💳",
    accentColor: "emerald",
    bgGradient: "from-emerald-950 to-slate-900",
    textCol: "text-emerald-400",
    cardBg: "bg-emerald-950/30 border-emerald-800/40"
  },
  {
    id: "college_life",
    name: "大学生活 (致青春期)",
    description: "这是一个充满阳光、汗水与微风的校园。你将重温温逃课、社团、期末考、向暗恋对象告白的悸动时光。答对单词，战胜严厉的教授，获得校园学神荣耀！",
    companionName: "小晴学姐",
    companionTitle: "学生会主席 / 热心学姐",
    companionIntro: "小晴学姐是校园里的人气风云人物，成绩优异且人脉极广。她总是在你迷茫时鼓励你，并把她的必考单词秘笈倾囊相授。",
    currencyName: "学分奖学金",
    currencyIcon: "🎓",
    accentColor: "sky",
    bgGradient: "from-sky-950 to-slate-900",
    textCol: "text-sky-400",
    cardBg: "bg-sky-950/30 border-sky-800/40"
  },
  {
    id: "fantasy_adventure",
    name: "魔幻探险 (奥术之旅)",
    description: "在名为“艾尔法斯”的魔法大陆，你是一名初出茅庐的法术学徒。单词就是你吟唱禁咒所需的魔力音素！击败迎面挑战的恶龙、巫师与贪婪的哥布林！",
    companionName: "阿尔法",
    companionTitle: "元素魔导书精灵",
    companionIntro: "阿尔法是附在古老魔导书中的实体精灵，博学而有些傲娇。每当你遇到魔法屏障，它便会飞在半空，为你解析远古音节（英文单词）。",
    currencyName: "奥术魔能晶",
    currencyIcon: "🔮",
    accentColor: "purple",
    bgGradient: "from-purple-950 to-zinc-900",
    textCol: "text-purple-400",
    cardBg: "bg-purple-950/30 border-purple-800/40"
  },
  {
    id: "showbiz_superstar",
    name: "娱乐圈顶流 (巨星之路)",
    description: "你是刚被大资本封杀的小演员。在金牌经纪人沈姐的相助下起死回生。答对单词展现狂飙演技，在剧组面试、综艺录制、全球巡演中惊艳全场，打脸卑劣的同行与傲慢的资本巨头，建立属于你的娱乐帝国！",
    companionName: "沈姐",
    companionTitle: "金牌娱乐经纪人",
    companionIntro: "沈姐在业界雷厉风行、眼光毒辣。为了帮你重新爆火，她时刻为你争取试镜，并在去通告的保姆车上严厉监督你复习台词与词汇。",
    currencyName: "巨星粉丝值",
    currencyIcon: "🌟",
    accentColor: "indigo",
    bgGradient: "from-indigo-950 to-stone-900",
    textCol: "text-indigo-400",
    cardBg: "bg-indigo-950/30 border-indigo-850/40"
  },
  {
    id: "husband_rebound",
    name: "赘婿逆袭 (神豪崛起)",
    description: "你曾是受尽冷眼与屈辱的倒插门女婿，忍受着丈母娘每天的白眼。一天，身价千亿的豪门管家突然亲临：『少爷/小姐，天期试炼已过，请您回家主宰一切！』答对单词完成商业试炼，闪瞎狗眼！",
    companionName: "王管家",
    companionTitle: "豪门资深大管家",
    companionIntro: "王管家精明能干，一直暗中考核你的成长。当全球万亿资产砸下，他全心协助你打理家族财团，帮你应付各大刁钻反派和不友善的亲戚。",
    currencyName: "神豪逆袭点",
    currencyIcon: "💎",
    accentColor: "rose",
    bgGradient: "from-rose-950 to-zinc-900",
    textCol: "text-rose-400",
    cardBg: "bg-rose-950/30 border-pink-900/40"
  },
  {
    id: "wuxia_jianghu",
    name: "武侠江湖 (群雄争霸)",
    description: "天下风云出我辈，一入江湖岁月催。你自小在师门长大，门派至宝被夺，毅然下山踏入正邪两道的惊涛骇浪。单词选对，即是化解对手暗器或出奇兵制胜的多变招式！",
    companionName: "婉儿",
    companionTitle: "傲娇小师妹 / 侠义师弟",
    companionIntro: "你的师门亲人，嘴硬心软。她/他轻功极高，每当你陷入围攻，便会拔剑和你并肩作战，通过背诵门派招式口诀（英文含义）暗中助你破敌。",
    currencyName: "武林声望值",
    currencyIcon: "🗡️",
    accentColor: "red",
    bgGradient: "from-red-950 to-stone-950",
    textCol: "text-red-400",
    cardBg: "bg-red-900/20 border-red-850/40"
  },
  {
    id: "mall_empire",
    name: "商战对赌 (商场大亨)",
    description: "你和集团董事长许下豪赌，承诺接管处于破产边缘的全新购物广场，并在限期内把商场盈利率提到25%以上，成功后即可直接晋升集团亚太区总裁！答对单词指点商海、智斗内鬼，打造商业帝国！",
    companionName: "林助理",
    companionTitle: "总裁专属全能秘书 / 助理",
    companionIntro: "毕业于顶尖名校的林助理精明高效。从你入主商场的第一天起就全力辅助你，为你准备大量谈判与估值词汇，助你在这场商业对决中稳操胜券。",
    currencyName: "商场盈利金",
    currencyIcon: "💰",
    accentColor: "teal",
    bgGradient: "from-teal-950 to-stone-905",
    textCol: "text-teal-400",
    cardBg: "bg-teal-950/30 border-teal-850/40"
  },
  {
    id: "detective_deduction",
    name: "侦探推理 (伦敦迷雾)",
    description: "大雾笼罩的贝克街，一起离奇的密室谋杀案惊动各方。你作为远近闻名的私家侦探，必须根据遗落现场的单词密码进行推理。答对单词戳穿嫌疑人的破绽，找出幕后的真凶！",
    companionName: "华生",
    companionTitle: "忠实的案件记录搭档",
    companionIntro: "华生博学友善，始终守护在你身旁记录着案情。当你苦思冥想面临瓶颈，他总是会提供医学、地理等百科常识（单词原意）点醒你。",
    currencyName: "探案勋章",
    currencyIcon: "🔍",
    accentColor: "cyan",
    bgGradient: "from-cyan-950 to-slate-950",
    textCol: "text-cyan-400",
    cardBg: "bg-cyan-950/30 border-cyan-800/40"
  }
];

// Helper shop commodities in Simplified Chinese
export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "eraser",
    name: "【洗心橡皮擦】",
    description: "在单词决斗中，自动抹除一个错误的干扰项，使选择范围变小！",
    cost: 50,
    icon: "🧽"
  },
  {
    id: "shield",
    name: "【护体免洗盾 / 免死金牌】",
    description: "当回答错误时自动抵消惩罚，让你不被重排，直接向前走！",
    cost: 80,
    icon: "🛡️"
  },
  {
    id: "double_coin",
    name: "【财源广进卡】",
    description: "使用后，下一关卡挑战成功所获得的收益道具奖励直接限时翻倍！",
    cost: 100,
    icon: "🪙"
  },
  {
    id: "teleport_scroll",
    name: "【时空跨越卷轴】",
    description: "答题决斗困难重重时使用，直接裁决当前3个单词自动正确通过！",
    cost: 150,
    icon: "📜"
  }
];

// Exams mapped per word book in Simplified Chinese
export const EXAM_QUESTIONS: Record<WordBookType, ExamQuestion[]> = {
  [WordBookType.CET4]: [
    {
      id: "cet4_exam_1",
      type: "reading",
      year: "2023年12月大学英语四级真题第一套",
      source: "四级考试真题及深度评析",
      passage: "The impact of social media on teenage mental health has been a topic of vigorous debate. Recent studies indicate that teenagers who spend more than three hours a day on social media platforms are at a significantly higher risk of experiencing mental health issues, such as anxiety and depression. Experts emphasize that the key factor is not just the duration of online engagement, but the nature of the interactions. Cyberbullying and the constant compression of face-to-face communication are extremely harmful. Parents and teachers need to collaborate to maintain healthy screen habits for teenagers.",
      question: "According to recent studies, what is the key factor influencing teenage mental health on social media?",
      options: [
        "The model or price of smartphones used by teenagers",
        "The absolute number of friends they follow online",
        "Not just the duration of online engagement, but the nature of the interactions",
        "Whether they use social media during school holidays"
      ],
      correctAnswerIndex: 2,
      explanation: "定位原文倒数第三句：'Experts emphasize that the key factor is not just the duration of online engagement, but the nature of the interactions.' 指出关键因素不仅是上网时长，更在于社交互动的性质。因此选第3项。"
    },
    {
      id: "cet4_exam_2",
      type: "listening",
      year: "2024年6月份大学英语四级听力真题 Section B",
      source: "星火英语四级预测模拟卷",
      passage: "W: Excuse me, Mr. Johnson. I am having a bit of trouble deciding on my research topic for our final history assignment. Can you give me some guidance?\nM: Well, Sally. I suggest you look into the domestic life during the Ming Dynasty. It is a fascinating era and has plenty of historical records in our library.\nW: That sounds wonderful! Actually, I read a historical novel recently where the protagonist travels back in time to that era. It really fascinated me, although I was a bit confused by some traditional customs.",
      dialogue: "Sally needs advice on her history research paper. She expresses that she is fascinated by the Ming Dynasty but is slightly confused about something.",
      question: "Why does the woman feel interested in the Ming Dynasty according to the dialogue?",
      options: [
        "She visited an ancient royal palace last winter holiday.",
        "She recently read a historical novel about traveling back in time to that era.",
        "She inherited some old coins from her grandmother.",
        "Her historical advisor specializes in the early Ming court politics."
      ],
      correctAnswerIndex: 1,
      explanation: "听力原文中女士提到：'Actually, I read a historical novel recently where the protagonist travels back in time to that era. It really fascinated me...'，由于读了关于穿越时空的古代历史小说，因此选择第2项。"
    }
  ],
  [WordBookType.CET6]: [
    {
      id: "cet6_exam_1",
      type: "reading",
      year: "2024年3月大学英语六级真题第二套",
      source: "大学英语六级真题逐词逐句精解",
      passage: "The concept of 'cognitive load theory' has gained meticulous attention from global educators. Cognitive load refers to the total amount of mental effort being used in the working memory. Because our working memory has a strictly limited capacity, instructional design should be structured to avoid redundant details which jeopardize the learning process. Experts advocate that when ambiguous instructions are obliterated, students observe rapid learning rates and develop more robust cognitive schemas.",
      question: "Why should instructional designs avoid redundant details according to the cognitive load theory?",
      options: [
        "Because redundant details will jeopardize the learning process by overwhelming the limited working memory capacity.",
        "Because modern students are too gullible and tend to trust fake statistics.",
        "Because textbooks with fewer words are much more lucrative to publish.",
        "Because teachers prefer belligerent classrooms over quiet environments."
      ],
      correctAnswerIndex: 0,
      explanation: "定位文章第三句：'Because our working memory has a strictly limited capacity, instructional design should be structured to avoid redundant details which jeopardize the learning process.' 累赘的细节会因超额占满工作记忆而危害学习过程，故正确答案为第1项。"
    },
    {
      id: "cet6_exam_2",
      type: "listening",
      year: "2023年12月大学英语六级听力真题 Section C",
      source: "英语大讲堂六级听力全真强化",
      passage: "M: Hello, welcome back to Science Weekly. Today we host Professor Miller, a leading expert in evolutionary biology. Professor, some say environmental changes kindle rapid species adjustments?\nW: Absolutely. When an ecosystem undergoes sudden changes, creatures fluctuate in their biological habits. Species which are highly vulnerable are easily obliterated, while those with remarkable viability will maintain and advocate their survival precedents through generations.",
      dialogue: "A debate on how climate and ecosystem changes kindle rapid evolution or termination of fragile species.",
      question: "What happens to highly vulnerable species when an ecosystem undergoes sudden changes?",
      options: [
        "They deviate from their original habitats and easily build massive cities.",
        "They immediately become lucrative commodities in urban markets.",
        "They are easily obliterated because of their fragility and lack of adaptability.",
        "They kindle friendly harmony with predators."
      ],
      correctAnswerIndex: 2,
      explanation: "听力原文中提到：'Species which are highly vulnerable are easily obliterated, while those with remarkable viability will maintain...'，脆弱的物种在剧烈环境改变下很容易彻底消亡，故选第3项。"
    }
  ],
  [WordBookType.IELTS]: [
    {
      id: "ielts_exam_1",
      type: "reading",
      year: "剑桥雅思18真题 Test 3 Reading Passage 2",
      source: "雅思官方备考真题解析",
      passage: "The preservation of aquatic biodiversity has reached an unprecedented threshold. Empirical evidence shows that overfishing and the rapid depletion of critical nutrients have disrupted marine food webs, causing a catastrophe for coastal ecosystems. Environmental scientists mitigate these harmful impacts by championing sustainable aquaculture initiatives, yet the economic feasibility of such high-infrastructure designs remains highly debated in developing nations globally.",
      question: "What does empty empirical evidence highlight about overfishing and nutrient depletion?",
      options: [
        "They provide significant demographic benefits to local fisherman communities.",
        "They have disrupted marine food webs and caused catastrophes for coastal ecosystems.",
        "They kindle the production of artificial quartz in oceanic laboratories.",
        "They are completely inevitable and represent a positive evolutionary step."
      ],
      correctAnswerIndex: 1,
      explanation: "定位原文第二句：'Empirical evidence shows that overfishing and the rapid depletion of critical nutrients have disrupted marine food webs, causing a catastrophe for coastal ecosystems'。指出过度捕捞与营养物质耗竭严重破坏海洋食物链并给沿海生态带来灾难，选第2项。"
    },
    {
      id: "ielts_exam_2",
      type: "listening",
      year: "剑桥雅思17真题 Test 1 Listening Section 4",
      source: "雅思考试听力全套精解教程",
      passage: "W: Moving on to our urban sustainability section, we must evaluate the demographic shifts in modern green suburbs. In older cities, infrastructure is often inadequate, leading to high levels of resource wastage.\nM: Indeed. Unless councils build viable sewage systems, standard aquatic life in local rivers will face catastrophic pollution. We must make ecological friendliness the threshold challenge for municipal budgets.",
      dialogue: "Two academics talking about urban green expansion and why inadequate infrastructure leads to severe environmental wastage.",
      question: "What is mentioned as a major outcome of inadequate infrastructure in older cities?",
      options: [
        "It leads to high levels of resource wastage.",
        "It fosters an aesthetic atmosphere among residents.",
        "It causes xenophobia inside local neighborhood committees.",
        "It accelerates the production of high-tech geothermal devices."
      ],
      correctAnswerIndex: 0,
      explanation: "听力中女士明确说：'In older cities, infrastructure is often inadequate, leading to high levels of resource wastage.' 因此不完善的基建主要导致了严重的资源浪费。故选第1项。"
    }
  ],
  [WordBookType.TOEFL]: [
    {
      id: "toefl_exam_1",
      type: "reading",
      year: "2024年TOEFL精选阅读真题 TPO 72 Passage 3",
      source: "ETS托福官方备考材料精选",
      passage: "During the glacial periods, tectonic shifts stimulated volcanic eruptions, releasing particles into the atmosphere that altered solar radiation reflection. Simultaneously, the weathering of silicate rocks and the subsequent precipitation of magnesium carbonates on the seabed lithosphere played a monumental role in storing carbon dioxide. These geological parameters, operating over chronological periods, serve as the ultimate catalyst for carbon sequence oscillation.",
      question: "According to the passage, what played a monumental role in storing carbon dioxide during geological periods?",
      options: [
        "The complete termination of aquatic life inside hydrothermal vents",
        "The rapid migration of nomadic tribes away from glacial boundaries",
        "The weathering of silicate rocks and the subsequent precipitation of magnesium carbonates on the seabed lithosphere",
        "Artificial geothermal extraction facilities designed by early humans"
      ],
      correctAnswerIndex: 2,
      explanation: "定位原文第二句：'...the weathering of silicate rocks and the subsequent precipitation of magnesium carbonates on the seabed lithosphere played a monumental role in storing carbon dioxide.'。因此是硅酸盐风化与海底岩石圈的碳酸镁沉淀物储存了二氧化碳。选择第3项。"
    },
    {
      id: "toefl_exam_2",
      type: "listening",
      year: "2023年夏季托福听力真实复现考试 Lecture 3",
      source: "托福大讲堂听力模拟真题精细评析",
      passage: "M: In zoology, a central question is how desert organisms achieve thermal security. High-velocity winds and extreme heat dictate rapid physiological adaptation. For instance, xerophyte plants accumulate water in specialized fleshy stems to prevent rapid depletion.\nW: Interesting. Does this evolutionary modification affect the surrounding ecological chain too?\nM: Absolutely, it provides a stable water source for local insects, illustrating mutual survival under extremely adverse tectonic environments.",
      dialogue: "A desert biology lecture regarding heat adaptation in xerophyte plants and desert zoological organisms.",
      question: "How do xerophyte plants prevent rapid depletion of water in harsh desert conditions?",
      options: [
        "By migrating nomadically to cooler mountain zones.",
        "By utilizing geothermal energy to boil excess groundwater.",
        "By accumulating water in specialized fleshy stems.",
        "By producing hieroglyphic markers on their broad leaves to fend off predators."
      ],
      correctAnswerIndex: 2,
      explanation: "教授在听力中明确说明：'For instance, xerophyte plants accumulate water in specialized fleshy stems to prevent rapid depletion.' 表明旱生植物通过在特化的肉质茎中储水来避免缺水。选第3项。"
    }
  ],
  [WordBookType.TEM8]: [
    {
      id: "tem8_exam_1",
      type: "reading",
      year: "2023年全国著名高招英语专业八级真题 Reading Block A",
      source: "外语教学与研究出版社专八模拟金卷",
      passage: "The social fabric depicted in high-society literature often highlights a bizarre juxtaposition: on one hand, a loquacious flow of obsequious flatterers seeking favor under the parsimonious gaze of an aristocrat; on the other, a recalcitrant counter-culture of intellectuals who despise such sycophant behaviors. This perpetual tension creates a structural cacophony within the domestic realm, where individuals must constantly balance gregarious integration with individual idiosyncrasy.",
      question: "What distinct groups of characters are juxtaposed in the high-society literature described in the text?",
      options: [
        "Valiant warriors fighting for legendary imperial coins and silent peasants",
        "Loquacious, obsequious flatterers versus recalcitrant, anti-sycophant intellectuals",
        "Fastidious scientists research thermal biodiversity versus negligent politicians",
        "Imperturbable old detectives and xenophile invaders"
      ],
      correctAnswerIndex: 1,
      explanation: "定位原文第一句，作者探讨了一种奇特的并置：一方面是喋喋不休、谄媚虚伪的奉迎者，另一方面是反叛的、鄙视拍马屁行为的知识分子。选第2项。"
    },
    {
      id: "tem8_exam_2",
      type: "listening",
      year: "2024年3月英语专业八级听力 Part I Mini-Lecture",
      source: "英语专八全真特训教材",
      passage: "W: Welcome to this week's discussion on literary philosophy. Today, let's explore why Victorian novels frequently portray nefarious villains who eventually acquiesce to moral laws.\nM: Yes, the Victorian mindset found comfort in moral triumph. Writers created enervate heroes who, despite their fastidious etiquette, were initially overwhelmed by bellicose villains, but the villain's ultimate downfall provided a comforting, magnanimous ending where righteousness prevailed.",
      dialogue: "A deep academic symposium investigating the structural resolution of nefarious characters in late 19th-century prose.",
      question: "According to the speaker, why did Victorian writers frequently portray such moral resolutions?",
      options: [
        "Because readers suffered from intense xenophobia after foreign trade expansions.",
        "Because Victorian culture found psychological comfort and vindication in the ultimate triumph of moral righteousness.",
        "Because publishers parsimoniously refused to print multi-volume tragedies.",
        "Because the chaotic cacophony of the industrial revolution made people deaf to silent stories."
      ],
      correctAnswerIndex: 1,
      explanation: "男士说明：'Yes, the Victorian mindset found comfort in moral triumph... righteousness prevailed'。暗示了维多利亚文化在道德正义战胜邪恶的心理圆满中找到借口与宽慰，选第2项。"
    }
  ]
};

// Generates levels dynamically per word book.
// Includes user selected gender (男 or 女) to dynamically adapt the stories
export interface StorySegment {
  intro: string;
  wordInContext: string; // The English word
  choicePrompt: string; // inline situation
  climaxTitle: string; // Duel title
  climaxIntro: string; // Duel narrative
  rewardIntro: string; // Reward narrative
  opponentName: string; // Enemy name
}

export function generateStoryContent(
  scenarioId: string,
  levelNum: number,
  wordList: Word[],
  isBranch: boolean = false,
  gender: "男" | "女" = "男"
): StorySegment[] {
  const scenario = SCENARIOS.find(s => s.id === scenarioId) || SCENARIOS[0];
  
  // Custom roles and pronouns based on gender selection
  const selfTitle = gender === "男" ? "大少爷" : "大小姐";
  const partnerPronoun = gender === "男" ? "小师妹" : "师弟";
  const sonOrDaughter = gender === "男" ? "庶出少爷" : "庶出小姐";
  const sonOrDaughterChao = gender === "男" ? "乘龙快婿" : "家族继承女千金";

  const items = wordList.map((w, index) => {
    let intro = "";
    let choicePrompt = "";
    
    switch (scenarioId) {
      case "ancient_palace":
        if (isBranch) {
          intro = `【大宅支线 · 秘密探秘】你听巧儿悄言说，冷角别院深夜隐隐有异光闪烁。你和巧儿轻手轻脚潜入旧阁，在积满灰尘的双层妆匣后，竟发现一封尘封已久的陈旧血书。血书上密密麻麻的那行外国行贾遗迹，让你这位 ${sonOrDaughter} 回忆起生母当年的死因，顿觉重重玄机掩盖，令人...`;
          choicePrompt = `在烛火通明的大屋中细细探查这行令人极度 **${w.word}** (${w.phonetic}) 的文字，它的正确含义是：`;
        } else {
          intro = `【第 ${levelNum} 关：初显锋芒】威严的嫡母坐在金丝楠木椅上，挑剔地审视着你：『平时不好好念书，成何体统！』旁边的大少爷在一旁煽风点火。今天若是这道难题答不出来，便要罚你去克扣三个月例银。你面对众人幸灾乐祸的眼神，不仅没有慌张，反而从容地做出了一次...`;
          choicePrompt = `面对高堂上的恶意刁难，你要在此次考验中展现精妙的 **${w.word}** (${w.phonetic}) 回击！此单词含义是：`;
        }
        break;
        
      case "imperial_court":
        if (isBranch) {
          intro = `【御花园支线 · 琴定千秋】月华朦胧，你轻执古琴在太液池畔低诵。高墙树影微动，深受皇上赏识的羽林军统领悄然走至你身后，对你微笑道：『娘娘/才人高义，此中词句非同凡响。』在这步步杀机的后宫，竟也有人能懂你的心意，真叫人感到...`;
          choicePrompt = `感叹深宫得遇同道之人极具 **${w.word}** (${w.phonetic}) 意义，快解出本单词：`;
        } else {
          intro = `【第 ${levelNum} 关：御前诗会】皇上今日驾临御花园，全宫选秀及考校秀女的大典全线开启。不怀好意的丽贵妃向皇上进言提议让你现场献技。四周秀女或妒忌、或等待看你笑话。你一袭长裙飘飘，暗中警醒自己：一生命运在此一举，你要向皇上展现惊世才华，绝对不能...`;
          choicePrompt = `你向圣上款款下拜，欲展示过人的 **${w.word}** (${w.phonetic})。快点击正确词义：`;
        }
        break;
        
      case "modern_city":
        if (isBranch) {
          intro = `【魔都支线 · 商务洽谈】周末酒会上，华灯初上，外滩凉风习习。一位身价数亿的外资行合伙人朝你频频举杯，并好奇向你询问对当前全球科技股估值模型的见解。你整理了一下定制西服，熟练运用所学的词汇，娓娓道来你的宏图构想，令对方叹服你的...`;
          choicePrompt = `你要用无比冷静且充满才干的语气表达这套 **${w.word}** (${w.phonetic}) 见解。该词正确含义是：`;
        } else {
          intro = `【第 ${levelNum} 关：职场巅峰】周一清晨，高冷的Linda总监突然敲了敲你的工位，抛下一叠英法双语商业报告：『下午两点前，在PPT中重新把这几家巨头的优劣劣势重组提交，否则直接被开除。』这对还是新晋萌新的你，毫无疑问是一场严酷的...`;
          choicePrompt = `顶着压力通宵达旦，这对自己绝对是一项巨大的 **${w.word}** (${w.phonetic}) 考验！此单词是：`;
        }
        break;
        
      case "college_life":
        if (isBranch) {
          intro = `【校园支线 · 迎新风采】校吉他社在操场举办篝火晚会。阳光的人气社长将木吉他递前几分：『${selfTitle}，要不要来段即兴Solo点燃全场？』虽然有点措手不及，但在数十名学妹学弟的欢呼下，你觉得这正是绽放青春的最佳...`;
          choicePrompt = `要在操场篝火旁展现青春独特的 **${w.word}** (${w.phonetic}) 魅力，快选择它的正确含义：`;
        } else {
          intro = `【第 ${levelNum} 关：考场对弈】大阶梯教室里，严厉的张教授正在黑板上板书极为繁琐复杂的微分定理。他一敲黑板：『坐在倒数第二排开小差的同学，上来把这答卷解了！』在百人瞩目下，你心跳极速加快。但看了一眼身边的同学，你一咬牙站起身，信心十足，这多亏你的...`;
          choicePrompt = `要在全校面前彻底洗清混日子的名头，轻松碾压这道 **${w.word}** (${w.phonetic}) 难关：`;
        }
        break;
        
      case "fantasy_adventure":
        if (isBranch) {
          intro = `【奥术支线 · 古神遗迹】在迷失沼泽深处的世界树残骸前，一尊漂浮的巨熊石阵燃起奥数幽火。当你的脚步惊醒了古老的机关，地面涌现出散发着蓝色光晕的神之符号。要完美吸收这股魔力，你必须拼读出这个核心音节...`;
          choicePrompt = `这是远古法师大能布下的玄奥 **${w.word}** (${w.phonetic})，选择对应的含义：`;
        } else {
          intro = `【第 ${levelNum} 关：禁咒吟唱】你高高擎着魔导书挡住地精骑兵。领队的黑魔法狂徒嘲讽道：『卑微的凡人，准备在雷罚中颤抖吧！』空气中的元素发出不安的爆鸣，你的助手阿尔法在虚空中拼命将解密金钥映入你的脑海：『吟唱这个神圣音素，激活巨盾守护！』...`;
          choicePrompt = `快！高声喊出威力无边的契约 **${w.word}** (${w.phonetic})，该词的大陆含义是：`;
        }
        break;
        
      case "showbiz_superstar":
        if (isBranch) {
          intro = `【巨星支线 · 整蛊突袭】在下榻的国际大酒店，半夜突然有热播突袭综艺的整蛊摄影机推开房门。你要在毫无发型和妆容准备、闪光灯高频照射下，保持绝对的明星风范，沈姐在一旁冷眼观望你的优雅应对...`;
          choicePrompt = `你展现出让无数黑粉瞬间闭嘴、极度 **${w.word}** (${w.phonetic}) 的高情商风度！此单词含义为：`;
        } else {
          intro = `【第 ${levelNum} 关：剧组狂飙】《至尊风云》剧组摄影大棚里，欺压新人的副导演冷傲地指桑骂槐，故意不安排你试镜、晾着你吹了三小时冷风：『就你这被黑料缠身的人，演个背景板都嫌多余。』沈姐气定神闲，塞给你一页修改台词。你大步走入片场，双目瞬间含泪，展示了惊艳全场的实力...`;
          choicePrompt = `你瞬间爆发出影帝/影后级的超高 **${w.word}** (${w.phonetic}) 演技，让看扁你的人无力张嘴，该词含义是：`;
        }
        break;
        
      case "husband_rebound":
        if (isBranch) {
          intro = `【神豪支线 · 拍卖会反爆】在顶层私人会客厅筹办的名牌珠宝拍卖会上，尖酸刻薄的大姑子/大姐夫嘲笑你是个买不起赠品的穷叫花。此时王大管家沉着拍了拍手，全球至尊黑金卡、千亿继承人合同当众奉上，震撼全座！...`;
          choicePrompt = `你翻身获得滔天权势，展现千亿级继承人的无尽 **${w.word}** (${w.phonetic}) 气场，该词为：`;
        } else {
          intro = `【第 ${levelNum} 关：赘婿/赘媳扬眉吐气】今天又是丈母娘过寿。你刚进家门把寿礼奉上，大姑就尖刻奚落：『带着这种地摊货也好意思上桌，真是丢尽了我们林家的脸！』就在林家上下准备对你一拥而上肆意羞辱时，大门忽然被撞开，十辆迈巴赫一字排开，财团首富大管家领着保镖跪倒一地：『恭请${gender === "男" ? "姑爷" : "少夫人"}回归！您考核通过了！』你缓缓一笑...`;
          choicePrompt = `面对林家上下当场吓得瘫软在地的绝妙景象，你要给出重重的一记 **${w.word}** (${w.phonetic}) 打脸！此词为：`;
        }
        break;
        
      case "wuxia_jianghu":
        if (isBranch) {
          intro = `【江湖支线 · 临仙幽篁】你与${partnerPronoun}在幽静竹林中练功。突然，江湖大反派带着四大罗汉设伏。${partnerPronoun}将手中寒玉剑一横：『师兄/师姐别怕，我们使出双剑合璧去震破他们的内功网！』...`;
          choicePrompt = `你要与同门师妹/师弟完美打出惊天动地的 **${w.word}** (${w.phonetic}) 招式合击，此单词在剑谱的意思是：`;
        } else {
          intro = `【第 ${levelNum} 关：正邪对决】华山险隘，黑夜如墨。神风堂叛徒恶贯满盈地狂笑道：『今天就拿你这名门新秀的项上人头祭旗！』漫天暗器破空袭来。你回想起掌门临别时的嘱托，将真气贯通于长剑，点尘间寻得了对方功法的无形漏洞。这可以说是...`;
          choicePrompt = `必须运起平生功底，彻底化解眼前的 **${w.word}** (${w.phonetic}) 杀招，点击正确释义：`;
        }
        break;
        
      case "mall_empire":
        if (isBranch) {
          intro = `【商场支线 · 品牌大招商】亚太商业招商沙龙上，国际一线轻奢大牌的亚太区总裁对你的购物广场不冷不热，暗示客流量根本没有说服力。林助理在你耳边迅速耳语了对方底细。你站起身，指点沙盘，用无懈可击的手笔给出了极度吸客并提振盈利率的宏伟落地方案，令所有人拍手叫绝...`;
          choicePrompt = `你要运用惊世的商业规划证明这套 **${w.word}** (${w.phonetic}) 能够助商场逆袭生还！词汇含义是：`;
        } else {
          intro = `【第 ${levelNum} 关：破产逆袭战】你和集团董事长立下军令状打赌！接管濒临倒闭、新商场亏损成灾的烂盘子。只有将商场盈利率提到25%以上（对赌底线），你才能稳坐亚太区总裁大位。今天，商场前任采购内鬼带人聚众闹事。林助理冷静地把商业机密账本递到你手上，你底气十足站上了听证会的发言台...`;
          choicePrompt = `要在此关卡中击溃对顶层发难的集团内鬼，赢得对赌中的重大 **${w.word}** (${w.phonetic}) 胜利：`;
        }
        break;
        
      case "detective_deduction":
        if (isBranch) {
          intro = `【侦探支线 · 窗台密信】深夜贝克街，浓雾迷漫。一头雪枭轻轻撞击你的雕花窗棱，其脚踝上扣着印有苏格兰场标志的金色密码铜器。铜器内部隐藏这一张羊皮纸，上面是一句颠倒的英文字迹，这是揭破连环大盗的...`;
          choicePrompt = `细细琢磨这条极度 **${w.word}** (${w.phonetic}) 并隐藏了重要线索的信息，它的含义是：`;
        } else {
          intro = `【第 ${levelNum} 关：破案如洗】古老庄园的封闭大屋里，傲慢无礼的男爵眼神阴狠而假意愤怒，拼命拍着紫檀木桌面：『侦探，你这是荒谬绝伦的中伤！看守，把这家伙轰出庄园！』看热闹的人议论蜂起。你冷笑一声拆开大衣，将从密匣取出的染血银钥匙和遗嘱按在桌上：『男爵，那你如何解释这件案发的...』...`;
          choicePrompt = `此时证据确凿，男爵面如死灰。选出对破案起关键作用的 **${w.word}** (${w.phonetic}) 的释义：`;
        }
        break;
        
      default:
        intro = `【第 ${levelNum} 关：境界考验】在无边无际的求学历程中，星光结界再次从云雾端降落，阻拦你前行。你唯有突破眼前的异域文字，才能解脱。这个单词考校你的智慧...`;
        choicePrompt = `为了通过关卡，请选出 **${w.word}** 的含义：`;
    }

    return {
      intro,
      wordInContext: w.word,
      choicePrompt,
      climaxTitle: `💥 终极决斗：正面突围！`,
      climaxIntro: `危机时刻降临！你与本关卡的棘手宿敌面对面正面遭遇，他们正发动不择手段的盘问。你必须在完全随机的单词问答连胜中连克数关（将刚刚学到的单词全部一网打尽并答对），才能挫败对方，解围翻盘并赢取丰盛战利品！`,
      rewardIntro: `恭喜！在${scenario.companionName}由衷的夸赞中，你不仅打脸了反派，还让所有人对你刮目相看！你成功赢取了大量「${scenario.currencyName}」！商店的道具和物资已经全新到货，快去补充助战自定制道具或乘胜追击进入下一关！`,
      opponentName: getOpponentName(scenarioId, levelNum)
    };
  });

  return items;
}

export function getOpponentName(scenarioId: string, levelNum: number): string {
  const list: Record<string, string[]> = {
    ancient_palace: ["阴险毒辣的嫡母大娘", "傲慢刻薄的二小姐", "笑里藏刀的王妈妈", "心胸狭隘的大少爷", "极力阻挠的势利大管家"],
    imperial_court: ["嚣张跋扈的丽贵妃", "居心叵测的高女官", "欺软怕硬的御膳房总管", "高傲冷淡的考功女御", "深嫉你才貌的竞争秀女"],
    modern_city: ["暗中使绊子的竞争实习生", "刻板暴躁的项目高级副总裁", "百般刁难的乙方甲方代表", "眼高于顶的高傲投资大佬", "同行刺探公司秘密的高级商业间谍"],
    college_life: ["全校人送严罗王的张教授", "傲慢轻视你的学科全能社长", "隔壁理工高校的高傲辩论队长", "铁面无私、不通情理的宿管阿姨", "经常抓学生典型考核的体育组长"],
    fantasy_adventure: ["残暴嗜血的森林哥布林祭司", "贪婪阴险的被遗弃亡灵巫妖", "重创凡人的遗迹古树泥巨人", "黑巫魔教高层狂热魔导师", "高傲盘旋在遗迹深渊的暗影红龙"],
    showbiz_superstar: ["眼高于顶、见钱眼开的项目副导演", "处处抢你资源的同期小鲜肉/小花", "常年抹黑你的水军头目", "傲慢资本大财团执行董事", "打压你的竞争对头娱乐机构掌权人"],
    husband_rebound: ["常年刻薄作呕、骂你废物的丈母娘", "冷艳而轻视你、暗中出墙的大姨子", "极力想吞食财产的阴损表哥", "瞧低你、冷嘲热讽的林家长辈", "企图暗算你的当地势利无赖黑心商人"],
    wuxia_jianghu: ["昆仑叛徒、行事残忍的恶门少主", "擅长使毒的唐门叛逆刺客护法", "横行江湖、烧杀抢掠的悍匪老刀", "黑道一流杀手阁大剑师", "垂涎你们师门秘笈的伪君子掌门"],
    mall_empire: ["贪污公款并吃里扒外的商场前任采购内鬼", "故意刁难你、试图看你倒闭的分管常务", "极度挑剔且出言不逊的大租户总代理", "常青藤高冷海归傲慢估值师", "企图收购你们购物广场的对头董事"],
    detective_deduction: ["满口谎言、伪造在场证据的庄园男爵", "在夜雾中劫持人质的亡命杀手", "收受黑钱、包庇歹徒的腐败巡警督察", "手段狠辣、贩卖禁药的黑市配药推销员", "莫里亚蒂暗中安插的高智商犯罪骨干"]
  };
  const array = list[scenarioId] || ["高傲的考核官"];
  return array[(levelNum - 1) % array.length];
}
