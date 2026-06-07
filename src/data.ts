import { WordBookType, Word, ScenarioContext, ShopItem, ExamQuestion } from "./types";
import { WORD_SENTENCES } from "./sentences";

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
    cardBg: "bg-red-900/20 border-red-800/40"
  },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: "hint", name: "提示卡", description: "提示当前单词的中文含义", cost: 30, icon: "💡" },
  { id: "extra_life", name: "保命符", description: "抵消一次答错，免受惩罚", cost: 50, icon: "🛡️" },
  { id: "double_reward", name: "双倍卡", description: "本关卡结账时获得双倍金两", cost: 80, icon: "✨" }
];

export const EXAM_QUESTIONS: Record<WordBookType, ExamQuestion[]> = {
  [WordBookType.CET4]: [],
  [WordBookType.CET6]: [],
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
  [WordBookType.TOEFL]: [],
  [WordBookType.TEM8]: []
};

/* CORRUPT_JUNK_START
  const partnerPronoun = gender === "男" ? "小师妹" : "师弟";
  const sonOrDaughter = gender === "男" ? "庶出少爷" : "庶出小姐";
  const sonOrDaughterChao = gender === "男" ? "乘龙快婿" : "家族继承女千金";

  const items = wordList.map((w, index) => {
    let intro = "";
    let choicePrompt = "";
    const beatIndex = index; // The progressive step of the current question/word in the level
    
    switch (scenarioId) {
      case "ancient_palace": {
        if (isBranch) {
          const intros = [
            `【大宅支线 · 异光夜影】你听巧儿悄言说，冷角别院深夜隐隐有异光闪烁。你和巧儿轻手轻脚潜入旧阁，在积满灰尘的双层妆匣后，竟发现一封尘封已久的陈旧血密函。`,
            `【大宅支线 · 生母遗物】密密麻麻的那行外国印章，让你这位 ${sonOrDaughter} 回忆起生母当年的死因，顿觉重重玄机与惊天阴谋都将被在此揭开。`,
            `【大宅支线 · 旧案线索】密信里写着几行极其晦涩难懂的怪异洋文番书，透露了当年在海运买卖中被人做过手脚的铁证，需要极高阅历才能拆解。`,
            `【大宅支线 · 蛛丝马迹】你想起生母留下的唯一遗物白玉坠，上面雕琢的洋印与密信如出一辙。这绝对不是寻常的装点物饰。巧儿为你在一旁掌灯。`,
            `【大宅支线 · 阁内生变】旧阁大门外传来了林管家提灯巡游的沉重军靴声！如果不抓紧时间辨出这个字卡背后的洋咒，就会被当场捉包。`,
            `【大宅支线 · 暗藏玄机】信内行文的最后一个隐蔽段落，居然暗示了陷害生母的下毒藏药具体案发地。只要掌握了这个字词，案件大白在即！`,
            `【大宅支线 · 极限避让】林管家的手已经抓在了铜门栓上！巧儿急中生智，发出猫叫学猫抓墙将大管家引开。你紧咬嘴唇，背诵破译出密语。`,
            `【大宅支线 · 黎明将至】你精确解读了旧案密信的最底处铁证！原来当年嫡母不仅暗中陷害，还侵吞了生母的所有私房钱。你暗暗誓要夺回一切！`
          ];
          const prompts = [
            `细细摩挲尘封信函上这个散发特殊香气的 **${w.word}** (${w.phonetic}) 单词：`,
            `解读血书中这个触目惊心、揭露家族恩怨的 **${w.word}** (${w.phonetic}) 字彙：`,
            `破解往来海运账本中这个指向利益纠葛的 **${w.word}** (${w.phonetic}) 关键字：`,
            `将玉坠上的暗印和密信上的 **${w.word}** (${w.phonetic}) 完美对碰重组：`,
            `在巡视灯火逼近前，锁定此处的生僻 **${w.word}** (${w.phonetic}) 单词，以掩人耳目：`,
            `看破密信下半卷最难解的这一个 **${w.word}** (${w.phonetic}) 剧毒药物线索：`,
            `巧儿用尽计策拖延，你必须争分夺秒，答对此致命 **${w.word}** (${w.phonetic}) 字谜：`,
            `在此至关重要的节骨眼上，辨识此生母绝笔的 **${w.word}** (${w.phonetic}) 秘密：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 嫡母发难】清晨，主苑传来茶盏摔碎的脆响。威严的嫡母端坐在金丝楠木椅上，挑剔地审视着你：『平时不好好念书，成何体统！』旁边的大少爷在一旁煽风点火。今天若是这道难题答不出来，便要罚你去克扣三个月例银。巧儿在袖底紧张得直扯你的衣角。`,
            `【第 ${levelNum} 关 · 二姐挑衅】二小姐在一旁轻蔑挑唆，嫌恶地将一行洋金箔字推到你面前：『庶出就要有庶出的本分，一个字不识，活该被赶出府去！』你冷眼看着这恶意满满的开端。`,
            `【第 ${levelNum} 关 · 众人看戏】大少爷也不怀好意地嘲讽：『想必二妺的题目是高深无比，这庶出哪知道书院的妙处。』你高举下颌，冷静审视着这一道恶意挑衅。`,
            `【第 ${levelNum} 关 · 妙口回击】你负手而立，不惊不怖。你朱唇微启，引经据典，将这洋词字句的出处和底层文化剖析得极度透彻，令高台上的嫡母面色微微一变。`,
            `【第 ${levelNum} 关 · 掌管到场】此时，府上极其势利的王大管家拿着西洋行商的最新海运清单入内：『老爷正在偏厅对账，有西域来信看不明白，急召有才之人。』二小姐听罢面露难色。`,
            `【第 ${levelNum} 关 · 破案核账】你不慌不忙地接过货清单扫过，立刻点出了其中克扣公银、虚报货额的猫迹，管家大惊失色，对你投来佩服的目光。`,
            `【第 ${levelNum} 关 · 嫡母语塞】二小姐和二少爷急着为你辩护纠错，却被你滴水不漏的反驳堵得哑口无言。巧儿对你投来极其崇拜的星星眼。`,
            `【第 ${levelNum} 关 · 收伏管家】在主苑百名丫鬟长随的屏息见证下，你将那份让老爷头疼的西域信件翻译得圆满高雅。在这波诡云谲的深宅中，你终于用实力为自己赢得了第一抹真正的威信！`
          ];
          const prompts = [
            `面对嫡母摔落茶盏的劈头盖脸训斥，你要用惊艳的 **${w.word}** (${w.phonetic}) 知识撑住场面：`,
            `冷哼反击二小姐的讥嘲，点出这个极其生疏的 **${w.word}** (${w.phonetic}) 单词含义：`,
            `在旁人推波助澜、恶评满满的重压下，解密这个 **${w.word}** (${w.phonetic}) 学术词汇：`,
            `在嫡母满是惊诧的凝视中，大声读出此番字 **${w.word}** (${w.phonetic}) 的高深意境：`,
            `辨识海运清单中最让人头疼的财务 **${w.word}** (${w.phonetic}) 核心用语：`,
            `�export function getHybridSentence(w: Word, translation: string): string {
  if (!translation) return "";
  const word = w.word; // e.g. "confused"
  const meaning = w.meaning; // e.g. "困惑的，糊涂的"
  
  // Potential terms to replace in translation
  // e.g. "困惑的", "糊涂的"
  const parts = meaning.split(/[，,、；;()（）]/).map(p => p.trim()).filter(Boolean);
  const searchTermsSet = new Set<string>();
  
  for (const part of parts) {
    searchTermsSet.add(part);
    
    // strip suffixes
    if (part.endsWith("的") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("地") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("得") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("了") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    
    // strip prefixes
    if (part.startsWith("使") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
    if (part.startsWith("被") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
    if (part.startsWith("让") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
  }
  
  // Sort by length descending
  const searchTerms = Array.from(searchTermsSet)
    .filter(term => term && term.length >= 1)
    .sort((a, b) => b.length - a.length);

  // Try to replace the matched Chinese part
  for (const term of searchTerms) {
    if (translation.includes(term)) {
      return translation.replace(term, word);
    }
  }

  // Fallback: search template substrings
  for (const part of parts) {
    for (let len = part.length; len >= 2; len--) {
      for (let start = 0; start <= part.length - len; start++) {
        const sub = part.substring(start, start + len);
        if (sub !== "的" && sub !== "的了" && translation.includes(sub)) {
          return translation.replace(sub, word);
        }
      }
    }
  }

  // Final fallback
  if (translation.endsWith("。") || translation.endsWith("！") || translation.endsWith("？")) {
    const punc = translation.slice(-1);
    return `${translation.slice(0, -1)} (${word})${punc}`;
  }
  return `${translation} (${word})`;
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
    const match = WORD_SENTENCES[w.word.toLowerCase()];
    const zhTranslation = match ? match.translation : "";
    const hybridSentence = getHybridSentence(w, zhTranslation);
    
    switch (scenarioId) {
      case "ancient_palace":
        if (isBranch) {
          intro = `【大宅支线 · 秘密探秘】你听巧儿悄言说，冷角别院深夜隐隐有异光闪烁。你和巧儿轻手轻脚潜入旧阁，在积满灰尘的双层妆匣后，发现一封尘封已久的陈旧血书。上面歪歪扭扭地写着：<b>“${hybridSentence}”</b> 这一惊人细节让你位 ${sonOrDaughter} 回忆起生母当年的死因，顿觉重重玄机掩盖……`;
        } else {
          intro = `【第 ${levelNum} 关：初显锋芒】威严的嫡母坐在金丝楠木椅上盯视着你，旁边的大少爷添油加醋地对你讥讽挑衅。今天若是这道官司说不清，便要罚你去守柴房扣月钱。你毫无惧色，不紧不慢地上前交底：<b>“${hybridSentence}”</b> 这一席直击痛处的大实话，顿时让嫡母大惊失色、哑口无言！`;
        }
        break;
        
      case "imperial_court":
        if (isBranch) {
          intro = `【御花园支线 · 琴定千秋】月华朦胧，你轻执古琴在太液池畔低诵。高墙树影微动，深受皇上赏识的羽林军统领悄然走至你身后，对你含胸一礼笑道：『娘娘/才人这番言语 <b>“${hybridSentence}”</b>，琴心流露，委实非同凡响。』在这步步杀机的后宫，竟能得遇如此知音，令你心中荡起涟漪。`;
        } else {
          intro = `【第 ${levelNum} 关：御前诗会】皇上今日驾临御花园，全宫秀女御前诗会考核大典开启。不怀好意的丽贵妃向皇上进言让你即兴发声赋诗献艺。四周秀女都在等着看你出丑。你一袭华美长裙，款款下拜，口中轻吐出的佳作竟是这般妙语惊人：<b>“${hybridSentence}”</b> 圣上听毕抚掌大笑，龙颜大悦，连连赏赐你翡翠步摇，丽贵妃恨得咬碎了指甲！`;
        }
        break;
        
      case "modern_city":
        if (isBranch) {
          intro = `【魔都支线 · 商务洽谈】周末酒会上，外滩华灯璀璨。一位身价数亿的外资投行合伙人朝你频频举杯，好奇打听你对行业估值与战略体系的见解。你整理了一下西装，熟练说出核心推演：<b>“${hybridSentence}”</b> 这一番论述，侃侃而谈，词辨犀利，令对方对你的跨国商务素养叹服不已。`;
        } else {
          intro = `【第 ${levelNum} 关：职场巅峰】周一清晨，高冷的Linda总监把英法双语商业报告重重砸在你的工位上，限时下午两点重新组装PPT汇报，否则直接开除。面对故意刁难，你顶住压力当着全体高层的面侃侃而谈，直接抛出了你的核心论断：<b>“${hybridSentence}”</b> 无懈可击的洞察吓得总监一言发，直接奠定了你在公司的核心地位！`;
        }
        break;
        
      case "college_life":
        if (isBranch) {
          intro = `【校园支线 · 迎新风采】校吉他社在操场举办篝火晚会。人气社长将木吉他递前几分：『${selfTitle}，要不要来段即兴Solo点燃全场？』在数十名学弟学妹的热烈欢呼声中，你歌喉轻启，唱出了这首婉转唯美的歌词：<b>“${hybridSentence}”</b> 篝火旁瞬间爆发出排山导海的欢呼与掌声！`;
        } else {
          intro = `【第 ${levelNum} 关：考场对弈】大阶梯教室里，严厉的张教授一指黑板：『倒数第二排开小差的那位，你上来把这道答卷解了！』全班百人目光齐聚你身上。你大步走上讲台，提起粉笔，顺畅无阻地在黑板上书写了例证：<b>“${hybridSentence}”</b> 绝美解题让全班爆发出雷鸣般的喝彩，张教授也摘下眼镜连连点头！`;
        }
        break;
        
      case "fantasy_adventure":
        if (isBranch) {
          intro = `【奥术支线 · 古神遗迹】在迷失沼泽深处的世界树残骸前，巨熊石阵燃起奥数幽火。随着你一步踏入，地面瞬间涌现出散发着蓝色极光的古代咒文：<b>“${hybridSentence}”</b> 你立刻吸纳这股浩瀚奥能，感悟到星海中玄妙的奥数精髓……`;
        } else {
          intro = `【第 ${levelNum} 关：禁咒吟唱】你高高擎着魔导书挡住地精骑兵。领队的黑魔法祭司狂妄至极。危急关头，阿卡多金钥将神圣的高阶吟唱语映入你脑海。你当即释放体内极限法力高声颂出：<b>“${hybridSentence}”</b> 一道遮天蔽日的黄金守护符文盾瞬间在大地上轰然撑起，将敌方巫术彻底震飞！`;
        }
        break;
        
      case "showbiz_superstar":
        if (isBranch) {
          intro = `【巨星支线 · 整蛊突袭】半夜突袭整蛊节目的摄像机深夜推开。猝不及防、纯素颜未饰的你面对高频聚光灯，依然神色自若。你面向镜头展现出不可思议的高情商风度，大方流利地说道：<b>“${hybridSentence}”</b> 惊艳的表现不仅成功破梗，更收割了一波狂暴活粉！`;
        } else {
          intro = `【第 ${levelNum} 关：剧组狂飙】《至尊风云》摄影棚里，欺负新人的副导演故意晾了你三小时，百般嘲弄。沈姐冷静地塞给你一页临时修改的重头戏台词。你红装走入镜头，眼神一瞬含泪，演技爆发：<b>“${hybridSentence}”</b> 完美的台词功力震撼全场，副导演脸上青红交替，一句话也说不出来！`;
        }
        break;
        
      case "husband_rebound":
        if (isBranch) {
          intro = `【神豪支线 · 拍卖会反爆】珠宝拍卖会上，势利大姑子百般嘲笑你是买不起赠品的穷叫花。大管家拍手送上了全球尊贵黑金卡与千亿代理合同。在一众名流屏息瞩目下，你神定气闲，扬眉吐出一串流利的反诘：<b>“${hybridSentence}”</b> 锋芒反吞全场，大姑子吓得当场脸如白纸！`;
        } else {
          intro = `【第 ${levelNum} 关：赘婿/赘媳扬眉吐气】丈母娘过寿，你奉上贺礼，却被刻刻毒的大姑嘲笑为丢人现眼的地摊货。众人蜂拥附和。正当羞辱爆发，门被隆重撞开，十辆迈巴赫一字排开，首富管家领着百名西装保镖齐齐跪迎：『恭迎${gender === "男" ? "姑爷" : "少夫人"}回归！』你缓缓整理风衣，居高临下地面向林家上下冷声吐辞：<b>“${hybridSentence}”</b> 一朝大权在握，林家上下瞬间吓得瘫软跪倒！`;
        }
        break;
        
      case "wuxia_jianghu":
        if (isBranch) {
          intro = `【江湖支线 · 临仙幽篁】你与${partnerPronoun}在清幽竹林间运功。反派死对头带四大罗汉突袭。${partnerPronoun}咬牙飞身挡在你身前，高声宣告：『师门第十式：<b>“${hybridSentence}”</b> 咱们生死并肩，绝不叫邪门歪道小瞧！』`;
        } else {
          intro = `【第 ${levelNum} 关：正邪对决】华山险隘，寒风刺骨，叛徒领暗器如雨破空而来。千钧一发之际，你回想起师祖的无上遗训，将平生功力在一瞬灌注到长剑之上，长剑长啸，吐气出招：<b>“${hybridSentence}”</b> 一剑东来，直取对方致命死穴，杀局瞬间被荡得干干净净！`;
        }
        break;
        
      case "mall_empire":
        if (isBranch) {
          intro = `【商场支线 · 品牌大招商】招商沙龙上，国际一线轻奢大牌总裁态度不冷不热。你神情自若，指点沙盘，用完美的商业手笔流畅总结：<b>“${hybridSentence}”</b> 这无懈可击的前瞻性战略架构，令高傲的亚太区总裁当场惊叹佩服！`;
        } else {
          intro = `【第 ${levelNum} 关：破产逆袭战】逆水行舟，你临危接班废墟商场。在行业听证会兼对赌大会上，前任采购内鬼带人恶意起哄逼迫你出课。你冷笑上前，指引大屏幕上的精密剖析大计，慷慨词严：<b>“${hybridSentence}”</b> 震聋发聩的数据剖析击穿了对手的所有骗局，全场起立喝彩！`;
        }
        break;
        
      case "detective_deduction":
        if (isBranch) {
          intro = `【侦探支线 · 窗台密信】深夜贝克街，迷雾缭绕。一只白羽雪枭敲窗，腿上系着苏格兰场的精密铜扣锁，里头赫然藏着半张未损烧焦、极富条理的密信纸条：<b>“${hybridSentence}”</b> 这致命线索，为解开庄园大盗悬案提供了至关重要的拼图。`;
        } else {
          intro = `【第 ${levelNum} 关：破案如洗】古老庄园的密闭大厅内，男爵拍桌大骂你中伤名流。你慢条斯理地解开厚重大衣，将从挂钟夹缝里搜出的陈旧纸条拍在桌案：『男爵，那你如何解释当时死者衣襟里遗留下的这条惊天线索：<b>“${hybridSentence}”</b>！』罪名昭彰，男爵浑身剧烈颤抖，颓然瘫倒认罪！`;
        }
        break;
        
      default:
        if (isBranch) {
          intro = `【修道支线】时空星轨中闪烁着金色奥妙能量。你循着指示，参破了能量柱上镌刻着的千载古语：<b>“${hybridSentence}”</b> 你体悟非凡，顺利走完了这段修行支路！`;
        } else {
          intro = `【第 ${levelNum} 关：境界考验】在无边无际的求学历程中，星光结界再次从云雾端降落，阻拦你前行。你注视着悬浮于虚空中的神圣古句，其言曰：<b>“${hybridSentence}”</b> 参透其中真谛即可破阵前行。`;
        }
        break;
    }.phonetic})，赢得御前圣恩：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "modern_city": {
        if (isBranch) {
          const intros = [
            `【魔都支线 · 商务洽谈】周末酒会上，黄浦江畔华灯璀璨，外滩凉风习习。Leo拉着你挤进高端风投圈，引荐了一位身价上亿的美股基金合伙人给你认识。`,
            `【魔都支线 · 大佬设局】合伙人摇晃着手里的马提尼，有些居高临下地朝你频频发问，企图考核你这个职场萌新对高科技企业估值波动的理解。`,
            `【魔都支线 · 闺蜜助阵】Leo在旁边优雅地向人举杯，一边拼命用手指沾香槟在吧台上勾画行业密语，顺带给你一个“稳住”的信任眼神。`,
            ` =`你整理了修身的定制西服，用一口极其纯正地道的国际高订英语娓娓道来，完美解答了第一个评估行话，全场名媛纷纷赞叹。`,
            `【魔都支线 · 趁热打铁】合伙人精神一振，面露惊艳，指了指手边智能眼镜上投出的重组财报：『有点意思，那这第二个核心并购词彙呢？』`,
            `【魔都支线 · 华丽过关】在名流社交高压圈的聚焦中，面对竞争对手嫉恨的目光，你优雅淡定，谈吐专业自信风流。`,
            `【魔都支线 · 胜局倾斜】你轻描淡写地和合伙人口若悬河，一口气解析了多重复合商业单词。Leo悄悄对你比了一个“大获全胜”的胜利手势。`,
            `【魔都支线 · 巅峰合约】所有刁难的顶级行业英文词彙被你彻底破译！合伙人当场递过私人烫金名片，力邀你加入下周上亿级的并购项目主管！`
          ];
          const prompts = [
            `抿了一口红酒，你要用最傲人的商业思维解出 **${w.word}** (${w.phonetic}) 的真实含义：`,
            `在大佬轻蔑的唇枪舌战中，准确指正他对这个 **${w.word}** (${w.phonetic}) 金融词的解读：`,
            `读懂Leo在吧台酒渍上悄悄留下的 **${w.word}** (${w.phonetic}) 提示词义：`,
            `以一介精英白领的霸气和才华，瞬间秒杀这个生僻 **${w.word}** (${w.phonetic}) 词汇：`,
            `在合伙人热切和赏识的目光逼问下，精准告知此 **${w.word}** (${w.phonetic}) 金融释义：`,
            `在这高攀名流的核心社交场所，高分拿下这个至上 **${w.word}** (${w.phonetic}) 评级：`,
            `在一众大鳄合伙人的侧目赞叹中，流畅破解此处的 **${w.word}** (${w.phonetic}) 细节：`,
            `用无懈可击的外语才智拿下最后一个 **${w.word}** (${w.phonetic}) 合同条款：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 周一晨会】周一清晨，高冷的Linda女总监黑着脸把一叠英法双语商业巨案扔在你的工位上：『下午分析会，大家要是答不出这些词汇，直接卷铺盖走人！』`,
            `【第 ${levelNum} 关 · 同行使绊】平时暗中使坏、和你抢高管转正名额的死对头实习生在一旁幸灾乐祸：『哎呀，这重组案的第一个商业生僻字可真难，你别卡壳啊。』`,
            `【第 ${levelNum} 关 · 闺蜜打气】Leo用马克杯朝你敬了一敬，悄悄鼓励你：『Linda只是虚张声势，相信你的高能词彙本！』你闻言稍微平复了心跳。`,
            `【第 ${levelNum} 关 · 专业发声】下午会议上你赫然站起，一口流利的发言，完美重设并深度解释了第一个要命核心词的大局价值，惊呆全办公室。`,
            `【第 ${levelNum} 关 · 总监再考】Linda在屏幕上划出第二道供应链金融难关：『有点深度。那如果这第二个专业分析词汇又是何意？谁能上来？』`,
            `【第 ${levelNum} 关 · 竞争退败】死对头实习生急着露脸抢答，却解得牛头不对马嘴十分难看，被Linda严厉呵斥退下。Linda高冷的美眸再次扫向你。`,
            `【第 ${levelNum} 关 · 职场狂飙】你潇洒在投影白板上写下对随后几个高难道商务英文词汇的解答，落笔如风，分析精细无常。`,
            `【第 ${levelNum} 关 · 逆袭转正】随着最后一个供应链生涩单词被你完美答出，全办公室爆起雷鸣般的服气掌声！Linda满意地合上电脑：『实习生，立刻来办公室办金牌转正！』`
          ];
          const prompts = [
            `顶着Linda女魔头沉重的高压目光，先将第一个极其棘手的 **${w.word}** (${w.phonetic}) 词汇答对：`,
            `冷笑回怼死对头实习生的出洋相奚落，辨出最核心的 **${w.word}** (${w.phonetic})：`,
            `仔细审阅Linda砸过来的法文商业企划书，圈定关键 **${w.word}** (${w.phonetic}) 词义：`,
            `像一名高冷金融总裁那样信心满满发表对这个 **${w.word}** (${w.phonetic}) 的高深高见：`,
            `挑战Linda拉出的供应链评估方案，解锁这只 **${w.word}** (${w.phonetic}) 并购高级词：`,
            `在死对头实习生极其不甘的注视下，潇洒破解此处的 **${w.word}** (${w.phonetic}) 考核：`,
            `像真正的名流掌权者般，点出下面 **${w.word}** (${w.phonetic}) 的精准商业出处：`,
            `在全公司的欢呼惊呼中，解密最后一个奠定胜势的 **${w.word}** (${w.phonetic}) 重点：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "college_life": {
        if (isBranch) {
          const intros = [
            `【校园支线 · 迎新晚会】晚风熏人，校吉他社在东操场心举办篝火大晚会。人气小晴学姐抱着那把名牌吉他站在光晕中心，朝你俏皮地点了点下巴。`,
            `【校园支线 · 佳人同歌】学姐将闪光的电容麦克风递了过来：『${selfTitle}，要不要上来和学姐合唱一首英文古典金曲，展示一下你的即兴歌词造句？』`,
            `【校园支线 · 欢呼冲天】底下围坐的数百名学弟学妹和社员疯狂拍手起哄。你脸颊有些发烫，但深呼吸看着学姐大方的笑靥，毅然大步迈出。`,
            `【校园支线 · 妙曲天成】吉他乐符悠扬飘开。你随律起舞，完美在意境深渊中歌声流露，精准翻译出第一句英文歌词的高雅核心，惊艳全操场。`,
            `【校园支线 · 繁复多变】学姐长指滑动琴弦，曲风骤转为略带爵士的生僻古典英文高音韵。你含笑接下这更具挑战的歌台。`,
            `【校园支线 · 琴音未央】篝火将小晴学姐和你的青涩身影拉得唯美而修长。在众学子的崇拜尖叫中，你的自如口语将晚会推向最高峰。`,
            `【校园支线 · 词中有意】接近终局副歌，歌词中浮现了极高难度的四级/六级/雅思备考大词，小晴学姐向你投来美目盈盈的期待，快解开它！`,
            `【校园支线 · 校园红人】最后一首浪漫吉他英文词被你精妙回响破译！全操场千人起立为你欢呼挥舞荧光棒！学姐红着脸对你说：『今晚的你，太闪耀了。』`
          ];
          const prompts = [
            `伴着篝火的暖风与吉他琴音，完美将第一个曼妙的 **${w.word}** (${w.phonetic}) 唱入歌词意境：`,
            `不辜负小晴学姐拉你上台的信任，翻译此代表青春的 **${w.word}** (${w.phonetic}) 歌词核心：`,
            `大方上前握住麦克风，在数百人的口哨起哄中，展现对此 **${w.word}** (${w.phonetic}) 的大方理解：`,
            `随着律动的拍子，精准道出这个高频学术 **${w.word}** (${w.phonetic}) 的贴切翻译：`,
            `在学姐吉他转调的高难伴奏下，接住这句略带忧愁的 **${w.word}** (${w.phonetic}) 词：`,
            `将温和的琴声与你口中的 **${w.word}** (${w.phonetic}) 完美统一，解破它的含义：`,
            `为了达成和佳人的最高契合合声，解出这个难度暴增的 **${w.word}** (${w.phonetic})：`,
            `在千万同学挥舞的火烛和尖叫中，完美拼读最后一个 **${w.word}** (${w.phonetic}) 音节：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 课堂突袭】大阶梯教室里，严厉的张教授正在黑板上板书极为繁琐复杂的微分定理。他一敲黑板：『坐在倒数第二排开小差的同学，上来把这答卷解了！』`,
            `【第 ${levelNum} 关 · 大班审判】在百人瞩目下，你心跳极速加快。但看着严罗王铁面无私、甚至要在平时成绩中给你直接挂科记过，你暗道危急。`,
            `【第 ${levelNum} 关 · 学姐笔记本】你慌乱正要站起身，一侧的小晴学姐把她画满荧光色考点的高频词彙本悄悄往你这挪了一分：『别怕，答案就在最后一页印着。』`,
            `【第 ${levelNum} 关 · 霸气答辩】你神态安然地站起，高声答题，字正腔圆，将这生涩第一个微分题定义词汇瞬间详解破立，引起全体大班吸气声。`,
            `【第 ${levelNum} 关 · 教授连环考】张教授老眼一眯，大异：『有点本事，看来真不是不学无术。那下一页论文前言里的这第二个学术硬骨头呢？你接着解！』`,
            `【第 ${levelNum} 关 · 舍友惊呆】平时总带你逃课网吧开黑的学弱舍友在一旁嘴巴都张老大，惊呆你这个网瘾少年何时成了学魔神尊。你自信一笑，落落大方。`,
            `【第 ${levelNum} 关 · 讲台留名】你提起白粉笔直接上台，在全校系高材生不可思议的注视下，在黑板上挥洒自如写下后面连环大词的解析。`,
            `【第 ${levelNum} 关 · 学神加冕】张教授大笔一挥当堂写下满分百分！小晴学姐在台下朝你高举大拇指。你不仅洗清了混日子的冤屈，期末直接保研直升！`
          ];
          const prompts = [
            `顶着全班百人回头的瞩目压力，完美把第一个挡路 Differential 相关的 **${w.word}** (${w.phonetic}) 难题答出：`,
            `在张教授想要拿起红笔挂科你的那一刻，精准翻译这个 **${w.word}** (${w.phonetic}) 救命主词：`,
            `读懂小晴学姐在底下贴心勾画的高考 **${w.word}** (${w.phonetic}) 学术标记：`,
            `像真正直升保研的高才学深般，大声阐释此 **${w.word}** (${w.phonetic}) 核心考点：`,
            `在张教授惊愕追考的怒容中，解答更生涩好几倍的 **${w.word}** (${w.phonetic}) 高频大词：`,
            `给旁边吓成呆鸡的逃学舍友露一手神级操作，答中这个 **${w.word}** (${w.phonetic}) 概念：`,
            `在讲台上落笔如云，展示你针对 **${w.word}** (${w.phonetic}) 的高能笔算：`,
            `彻底化解张教授的终极微分刁难，干脆利落地把这最后一个 **${w.word}** (${w.phonetic}) 解开：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "fantasy_adventure": {
        if (isBranch) {
          const intros = [
            `【奥术支线 · 古神遗迹】在迷失沼泽最深处的世界树废墟前，一尊巨大的石雕巨熊石阵燃起奥数幽火。当你踏出探秘脚步，地表震颤，亮起蔚蓝色光晕符号。`,
            `【奥术支线 · 符门深锁】遗迹大门上刻满了一列远古大祭司测试凡骨外来者的符印。只要在限时沙漏流乾前辨错，万斤地裂飞石巨槌机关就会被砸下。`,
            ` =`阿尔法飞在破败雕像上，伸出精致的小魔法杖：『这是世界树下的精灵母语考验。笨蛋，快用你的词储备，否则我们就要被砸成肉泥啦！』`,
            `【奥术支线 · 破阵点睛】你摒气凝神，双手在光幕前结出金色大法印。当你精准连上第一个远古音节并明晰其含义，雷电大门上的石门随之松落。`,
            `【奥术支线 · 阵能聚拢】由于解密开始，门柱上的雷光闪射更甚，第二道多维度的错综高能拼音开始高频闪乱。你绝对不容有半点马虎。`,
            `【奥术支线 · 极限吸能】强大的奥术暴风在废墟中咆哮，阿尔法飞在空中给你加持魔法护目镜。你在风眼狂啸中定睛看穿这些扭曲的魔法字符。`,
            `【奥术支线 · 晶石回流】你用坚韧不拔的学者毅力，极速写下接连翻译的高能词章。石尊脸上的阴郁煞红慢慢退去，转化为平顺安宁。`,
            `【奥术支线 · 遗迹全开】轰隆隆！所有祭祀魔法阵彻底化为金碧光流融入你的身躯！石门为你大敞，在这万年废墟中，你成功蜕变为魔能巨学者！`
          ];
          const prompts = [
            `用手按在有热度波动的上古魔石牌上，破译第一个 **${w.word}** (${w.phonetic}) 符文：`,
            `在大阵开始发烫裂开前，拼读出这个指向巨熊图腾的 **${w.word}** (${w.phonetic}) 外文含义：`,
            `根据阿尔法拍着翅膀为你指出的 **${w.word}** (${w.phonetic}) 世界树生僻词进行解秘：`,
            `念诵精灵大言咒中的 **${w.word}** (${w.phonetic}) 以平息四周爆裂的火花：`,
            `极速点击破解这第二重电链法阵中的 **${w.word}** (${w.phonetic}) 魔法词汇：`,
            `即使长发被暴风高频卷乱，你也要死死审阅大门上流动的 **${w.word}** (${w.phonetic}) 暗语：`,
            `点击翻译倒数第export function generateStoryContent(
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
    const match = WORD_SENTENCES[w.word.toLowerCase()];
    const enSentence = match ? match.sentence : "";
    const zhTranslation = match ? match.translation : "";
    
    switch (scenarioId) {
      case "ancient_palace":
        if (isBranch) {
          intro = `【大宅支线 · 秘密探秘】你听巧儿悄言说，冷角别院深夜隐隐有异光闪烁。你和巧儿轻手轻脚潜入旧阁，在积满灰尘的双层妆匣后，发现一封尘封已久的陈旧血书。上面歪歪扭扭地写着：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这一惊人细节让你这位 ${sonOrDaughter} 回忆起生母当年的死因，顿觉重重玄机掩盖……`;
        } else {
          intro = `【第 ${levelNum} 关：初显锋芒】威严的嫡母坐在金丝楠木椅上盯视着你，旁边的大少爷添油加醋地煽风点火。今天若是这道难题答不出来，便要罚你去克扣三个月例银。你面对众人幸灾乐祸的眼神，不仅没有慌张，反而从容自若地翻开书页，高声朗读并完美释义了这句奥妙英文：<b>"${enSentence}"</b>（意译：${zhTranslation}）。完美无瑕的才华展示让嫡母当场哑口无言！`;
        }
        break;
        
      case "imperial_court":
        if (isBranch) {
          intro = `【御花园支线 · 琴定千秋】月华朦胧，你轻执古琴在太液池畔低诵。高墙树影微动，深受皇上赏识的羽林军统领悄然走至你身后，对你含胸一礼笑道：『娘娘/才人这一句 <b>"${enSentence}"</b>（意译：${zhTranslation}），琴心流露，委实非同凡响。』在这步步杀机的后宫，竟能得遇如此知音，令你感到无限温暖。`;
        } else {
          intro = `【第 ${levelNum} 关：御前诗会】皇上今日驾临御花园，全宫秀女御前诗会考核大典开启。不怀好意的丽贵妃向皇上进言让你即兴赋诗献艺。四周秀女都在等着看你出丑。你一袭华美长裙，款款下拜，口中轻吐出的佳作竟是这般妙语惊人：<b>"${enSentence}"</b>（意译：${zhTranslation}）。圣上听毕抚掌大笑，龙颜大悦，连声惊叹你的绝世文采！`;
        }
        break;
        
      case "modern_city":
        if (isBranch) {
          intro = `【魔都支线 · 商务洽谈】周末酒会上，华灯初上，外滩凉风习习。一位身价数亿的外资投行合伙人朝你频频举杯，好奇打听你对科技股战略体系的见解。你整理了一下西装，熟练说出核心推演：<b>"${enSentence}"</b>（意译：${zhTranslation}），侃侃而谈，令对方对你的跨国商务素养叹服不已。`;
        } else {
          intro = `【第 ${levelNum} 关：职场巅峰】周一清晨，高冷的Linda总监突然抛下一叠英法双语商业报告要求必须重组提交，否则直接辞退。面对刁难，你顶住压力通宵达旦地在分析报告PPT中写下了最高段位的论述核心：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这无可挑剔的洞察力向全司上下证实了你非凡的专业实力！`;
        }
        break;
        
      case "college_life":
        if (isBranch) {
          intro = `【校园支线 · 迎新风采】校吉他社在操场举办篝火晚会。人气社长将木吉他递前几分：『${selfTitle}，要不要来段即兴Solo点燃全场？』在数十名学弟学妹的热烈欢呼声中，你歌喉轻启，唱出了这首婉转唯美的英文副歌：<b>"${enSentence}"</b>（意译：${zhTranslation}）。篝火旁瞬间爆发出排山倒海的欢呼！`;
        } else {
          intro = `【第 ${levelNum} 关：考场对弈】大阶梯教室里，严厉的张教授一指黑板：『倒数第二排开小差的那位，你上来把这道答卷解了！』全班百人目光齐聚你身上。你大步走上讲台，提起粉笔，顺畅无阻地在黑板上书写了例证：<b>"${enSentence}"</b>（意译：${zhTranslation}），并完美得出了答案！引来台下一片震惊与掌声！`;
        }
        break;
        
      case "fantasy_adventure":
        if (isBranch) {
          intro = `【奥术支线 · 古神遗迹】在迷失沼泽深处的世界树残骸前，巨熊石阵燃起奥数幽火。随着你一步踏入，地面瞬间涌现出散发着蓝色极光的古代英文神谕：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你微闭双目感应着天地间元素的流动，开始有条不紊地聚拢吸纳这股浩瀚奥能……`;
        } else {
          intro = `【第 ${levelNum} 关：禁咒吟唱】你高擎着魔导书挡住地精骑兵。领队的黑魔法狂徒嘲讽你不过是个凡人。危急关头，阿卡多金钥将神圣的高阶吟唱古语映入你脑海：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你当即释放体内极限法力高声颂出，一道遮日御天、不可动摇的黄金守护符文盾瞬间拔地而起！`;
        }
        break;
        
      case "showbiz_superstar":
        if (isBranch) {
          intro = `【巨星支线 · 整蛊突袭】在下榻酒店里，半夜突袭整蛊节目的摄像机推门而入。在猝不及防、纯素颜未饰的闪光灯聚焦下，你沉着应对。你面向镜头展现出不可思议的高情商风度，并大方流利地说道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。优雅的表现不仅成功破梗，更收割了一波路人粉！`;
        } else {
          intro = `【第 ${levelNum} 关：剧组狂飙】《至尊风云》摄影棚里，欺负新人的副导演故意晾了你三小时，百般嘲弄。沈姐冷静地塞给你一页临时修改的重头戏台词。你大步走入镜头，眼神一瞬含泪，演技轰然爆发，用无解的台词功力悲壮吐出一联：<b>"${enSentence}"</b>（意译：${zhTranslation}）。全剧组顿时起立拍案称绝，副导演脸上青红交替！`;
        }
        break;
        
      case "husband_rebound":
        if (isBranch) {
          intro = `【神豪支线 · 拍卖会反爆】珠宝拍卖会上，势利大姑子百般嘲笑你是买不起赠品的穷叫花，正得意时，大管家拍手奉上了全球尊贵黑金卡与千亿代理合同。在一众名流屏息瞩目下，你神定气闲，扬眉吐出一串流利的质问：<b>"${enSentence}"</b>（意译：${zhTranslation}）。锋芒瞬间反噬全座，大姑子吓得当场脸白！`;
        } else {
          intro = `【第 ${levelNum} 关：赘婿/赘媳扬眉吐气】丈母娘过寿，你奉上贺礼，却被刻薄的大姑嘲笑为丢人现眼的地摊货。众人蜂拥附和。正当羞辱爆发，门被隆重撞开，十辆迈巴赫一字排开，首富管家领着百名西装保镖齐齐跪迎：『恭迎${gender === "男" ? "姑爷" : "少夫人"}回归！』你缓缓整理风衣，居高临下地朝林家上下冷声道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。一朝爆发，林家上下当场吓得瘫跪在地！`;
        }
        break;
        
      case "wuxia_jianghu":
        if (isBranch) {
          intro = `【江湖支线 · 临仙幽篁】你与${partnerPronoun}在清幽竹林间运功。反派死对头带四大罗汉突袭。${partnerPronoun}咬牙飞身挡在你身前：『剑谱有云：<b>"${enSentence}"</b>（意译：${zhTranslation}）。师兄妹并肩齐上，绝不容邪魔外道小瞧了我等！』`;
        } else {
          intro = `【第 ${levelNum} 关：正邪对决】华山险隘，寒风刺骨，叛徒领暗器如雨破空而来。千钧一发之际，你回想起师祖的无上遗训，将平生功力在一瞬灌注到长剑之上，剑气激扬间吐气高声道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。一剑东来，气贯长虹，直取对方致命死穴，杀局瞬间被荡尽！`;
        }
        break;
        
      case "mall_empire":
        if (isBranch) {
          intro = `【商场支线 · 品牌大招商】招商沙龙上，国际一线轻奢大牌总裁态度不冷不热，林助理提醒你对方的痛点。你神情自若，指点沙盘，用完美的商业手笔流畅地总结道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这无懈可击的前瞻性战略架构，令高傲的亚太区总裁当场叹服！`;
        } else {
          intro = `【第 ${levelNum} 关：破产逆袭战】逆水行舟，你临危接班废墟商场。在行业听证会兼对赌大会上，前任采购内鬼带人恶意起哄逼迫你下课。你冷笑上前，打开超大投影显示了你精密的整顿分析，并慷慨解言：<b>"${enSentence}"</b>（意译：${zhTranslation}）。震聋发聩的数据穿透了对手编造的谎言，全场起立喝彩！`;
        }
        break;
        
      case "detective_deduction":
        if (isBranch) {
          intro = `【侦探支线 · 窗台密信】深夜贝克街，迷雾缭绕。一只白羽雪枭敲窗，腿上扣着苏格兰场的精密铜扣锁，里头赫然藏着半张未损烧焦、极富条理的密信纸条：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这行致命线索，为解开庄园悬案提供了至关重要的拼图。`;
        } else {
          intro = `【第 ${levelNum} 关：破案如洗】古老庄园的密闭大厅内，男爵拍桌大骂你中伤名流。你慢条斯理地解开厚重大衣，将从挂钟夹缝里搜出的陈旧纸条拍在桌案：『男爵，那你如何解释当时死者手写记录下的这条惊天线索：<b>"${enSentence}"</b>（意译：${zhTranslation}）！』罪名昭彰，男爵浑身剧烈颤抖，彻底认罪！`;
        }
        break;
        
      default:
        if (isBranch) {
          intro = `【修道支线】时空星轨中闪烁着金色奥妙能量。你循着指示，参破了能量柱上镌刻着的千载古语：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你体悟非凡，顺利走完了这段修行支路！`;
        } else {
          intro = `【第 ${levelNum} 关：境界考验】在无边无际的求学历程中，星光结界再次从云雾端降落，阻拦你前行。你注视着悬浮于虚空中的神圣英文古句，其言曰：<b>"${enSentence}"</b>（意译：${zhTranslation}）。参透其中的核心词眼即可破阵前行。`;
        }
        break;
    }

    choicePrompt = `请结合以上语段情境与大义，选择学修核心词【${w.word}】的正确简体中文释义：`;

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
}有金像影后级的英文台词爆裂输出，震惊全剧组。`,
            `【第 ${levelNum} 关 · 导演冷汗】副导演老脸大变、惊起直拍桌子：『这人物深度，这拗口台本！那紧接着的第二句写意内心戏的生难词，你又怎么接？』`,
            ` =`你用精绝的微表情，一颦一笑一眨眼将最顶难度的剧本原原本本、毫无错漏台词演绎，用震撼张力和情绪让看低你的人哑口无言。`,
            `【第 ${levelNum} 关 · 顶流折服】刚才还神气十足、打算在台下刺探你洋洋失仪的戏霸傻了眼。在沈姐极其爽爆的掌声中，全场群演激动沸腾起哄。`,
            `【第 ${levelNum} 关 · 夺回大位】你成功一气呵成将整段最高难度大词大本完满演完！所有人顶礼膜拜！你不仅夺回了无可代替的主角大位，名气直干云端！`
          ];
          const prompts = [
            `为了让欺负新人的副导演大惊失色，在出场一幕展现极具张力的 **${w.word}** (${w.phonetic}) 演技：`,
            `以一记震裂耳膜般的顶级发声，干脆利落地把这个极难 **${w.word}** (${w.phonetic}) 独白词词唱对：`,
            `接过沈姐给你底牌的戏本，精准翻译这个体现奢华背景的 **${w.word}** (${w.phonetic})：`,
            `完全带入角色的深切痛感，精妙绝伦阐释这个高端 **${w.word}** (${w.phonetic}) 核心用语：`,
            `在副导演一连惊愕抹汗的注视中，迎难而上翻译极难的 **${w.word}** (${w.phonetic}) 动作提示词：`,
            `给台下等看你戏卡戏的关系户戏精们重重一击，答中这只 **${w.word}** (${w.phonetic})：`,
            `用无缝融入你台词的知性美，说出下面 **${w.word}** (${w.phonetic}) 的高情商翻译含义：`,
            `完成了最后那一吻剧本里的完美英文升华，破出此压台大词 **${w.word}** (${w.phonetic})：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "husband_rebound": {
        if (isBranch) {
          const intros = [
            `【神豪支线 · 拍卖反爆】在顶层超奢私人珠宝拍卖会上，嫌你囊中羞涩的百亿大姑子冷笑连连，说你这个乡巴佬连牌子上法美中世纪外文都看不懂。`,
            `【神豪支线 · 假画陷阱】大姑子联合拍卖行大主管，推举上一幅古代西洋名画，宣称绝对是价值连城的传国画。实际正要用仿作狠狠把你当猴子坑骗。`,
            `【神豪支线 · 王叔奉信】大管家王叔西服笔挺、带着随从退至你身后：『少爷，老爷早已把海外顶家评估报告取来。此画字词藏有一桩大诡计。』`,
            `【神豪支线 · 指纸定乾坤】你双目大雷电、傲气上前，在千万镜头下一把拿过油画。当你完美翻译出右下角代表临摹的特定秘密洋字，阴谋当场破产！`,
            `【神豪支线 · 行商总裁面红】在场富商和行总裁当真倒吸一口凉气。大姑子吓得老脸粉碎，手里的拉菲香槟当场摔个砸烂，整个人战慄发抖。`,
            `【神豪支线 · 绝招全开】大姐还在尖声挣扎：『不过是一只单词认对罢了，台下的名牌国宝你倒是指出来它们的真正评估洋文啊！』。你缓缓冷笑。`,
            `【神豪支线 · 全资横扫】你在一张张天价古玩的底单合同上勾画评判，把它们极高难度的番文标注字词解得极度详细，行会总会长佩服跪地。`,
            `【神豪支线 · 巨富加冕】你完美干掉所有拍卖会大刁难！王叔高高甩出黑金卡：『少爷大手笔，拍卖行全部九件真迹我们通货打包，当场付清！』`
          ];
          const prompts = [
            `端着名贵红茶，你要用高深的外语修养大破大姑子大姐夫设下的 **${w.word}** (${w.phonetic}) 圈套：`,
            `精准反手戳破仿作国宝背后的狡诈 **${w.word}** (${w.phonetic}) 外文暗记：`,
            `按照大管家王叔为你连线递上的底商高密，秒杀此中高端 **${w.word}** (${w.phonetic}) 评星词：`,
            `在行总裁大姑子冷白的大老脸上，狠狠给出这精准的 **${w.word}** (${w.phonetic}) 回击：`,
            `反克大姑子尖酸的追骂发难，解密下一组生僻骨董合同上的 **${w.word}** (${w.phonetic})：`,
            `像一名深不可测、手拉跨国财阀的至尊神豪，答对此处 **${w.word}** (${w.phonetic}) 的价格含义：`,
            `在一众金高富们极其自取其辱的目光中，优雅挑出 **${w.word}** (${w.phonetic}) 的核心真假破绽：`,
            `在拍卖锤重重敲落的同时，全款买单并完美吐出此 **${w.word}** (${w.phonetic}) 的霸气内含：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 赘婿扬眉】丈母娘举办六十奢华寿宴。你刚推门送上手工贺礼，刁蛮的大姐夫就尖声讥评：『拿着这英文台写错的十块地摊货也好意思上桌？丢尽林家大脸！』`,
            `【第 ${levelNum} 关 · 驱逐危局】林家上下十几口群起对你极尽数落奚落，丈母娘抓龙凤拐直拍地砖，喝下要你滚出去扫马桶：『连贺贴上的英法词汇都答错，退下！』`,
            `【第 ${levelNum} 关 · 首富临门】话音剛落，别墅大门轰然被雷霆撞碎！几十辆迈巴赫停满山庄，豪门王管家率一列黑墨镜黑衣保镖铺满大厅，当众重重给你跪了一地！`,
            `【第 ${levelNum} 关 · 恭请少爷】王叔红眼眶长叹高呼：『恭请${gender === "男" ? "姑爷" : "少夫人"}掌权！跨国财阀兼并对数天期考核您已完美毕业！千亿林氏现在任您赏罚！』你缓缓迈开脚。`,
            `【第 ${levelNum} 关 · 林家震爆】刚还凶悍嚣张的大小姐丈母娘当场吓得扑通倒在椅子上，老眼翻白。王管家呈上财权合同：『少爷，请您先对单这几个生难跨国条例！』`,
            `【第 ${levelNum} 关 · 财务斩流】丈母娘吓得拼命赔笑认奴。你负手端凝，在对数大账合同上，一秒速决出了第一个对数外文大项漏，当众废免其百万行金。`,
            ` =`刁蛮大姐夫在一边抖得不成人样，王管家给你端上天价红茶。你长笔划过天命生词，给与其最疯狂、最彻头彻尾的智力和实力双重碾压。`,
            `【第 ${levelNum} 关 · 豪吞万亿】你完美签署翻译完了整个兼并财团的所有生难英文条例！王叔大喝废除林氏这边的全部资产借贷信托，大姐夫当场痛哭连跪求饶！`
          ];
          const prompts = [
            `在林家上下百人准备将你撕碎轰出的瞬间，展现精奥的 **${w.word}** (${w.phonetic}) 外语贺词：`,
            `重重打脸林家大姐夫的不学无术，辨出贺帖上的 **${w.word}** (${w.phonetic})：`,
            `在一列黑衣保镖跪下、林家全员骇然中，气定神闲解出此 **${w.word}** (${w.phonetic}) 大契约：`,
            `在丈母娘抖得合不上嘴巴的呆呆见证下，傲迈回答这个 **${w.word}** (${w.phonetic}) 条款含义：`,
            `面对企图抵赖贷款的亲戚高管，解读合并章程里的 **${w.word}** (${w.phonetic}) 核心限制：`,
            `无漏发现对方在外汇进账上玩弄的心眼，揭去此 **${w.word}** (${w.phonetic}) 欺诈迷雾：`,
            `给已经瘫得提不来鞋的林大少大姐夫痛击，选准这只 **${w.word}** (${w.phonetic}) 的高能译解：`,
            `在王管家高呼“少爷千亿封顶”的震撼余威中，裁夺这最后一个 **${w.word}** (${w.phonetic}) 条理：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "wuxia_jianghu": {
        if (isBranch) {
          const intros = [
            `【江湖支线 · 临仙幽篁】你与婉儿在幽静幽篁竹林中心推揉招式。突然，昆仑派大奸少带着手下悍徒设下死困伏击：『交出师门太极残卷！』`,
            `【江湖支线 · 铁阵笼罩】悍徒各持铁禅杖，布下极其高频率音震的万古合围凶阵，大阵念词犹如万叶穿耳，企图将你真气彻底逼爆断流。`,
            `【江湖支线 · 师妹密语】婉儿轻功掠上竹梢，白衣胜雪，急声提点你：『大师兄/师姐别怕，这一伏魔阵乃是外域行者传过来的，咱们只要背其古英文破绽秘辛。』`,
            `【江湖支线 · 重出九阳】你神融识海，九阳真罡在体内极速大周游。剑尖刺破微风，第一道带有金钟罩破相的英文大咒被你当堂破去。`,
            `【江湖支线 · 凌波大避】悍武僧人怒不可遏，倒提玄铁杖卷起千重碎地沙土恶狠狠砸下。你踏着凌波微步在错综飞沙中速记着词诀。`,
            `【江湖支线 · 气流呼啸】竹叶飘摇狂啸。你与婉儿在碎裂半空相互借步，长剑嗡嗡共鸣，在令人极其心浮目躁的梵音中搜寻阵法大命门。`,
            `【江湖支线 · 铁棍飞天】你连出惊神极速重指，剑芒过处，大阵里倒数第二尊大护法的穴位被你的单词重招戳了个正破，铜棍撒手飞天。`,
            `【江湖支线 · 踏浪江湖】你完成了伏魔经文所有生难词的古籍意译释意！四大奸派罗汉捂着胸口狼狈遁走。婉儿美目流盼赞叹：『师兄/姐神乎其技！』`
          ];
          const prompts = [
            `拔剑当关，运起真罡破掉伏魔音震中第一个夺魄 **${w.word}** (${w.phonetic}) 密记：`,
            `在大阵死锁、凶险极寒的那一息内，一招破去这个封穴 **${w.word}** (${w.phonetic})：`,
            `配合婉儿飞出的白绫，默诵翻译这只指向大阵底力的 **${w.word}** (${w.phonetic})：`,
            `一记惊神一气点出对方剑谱的致命 **${w.word}** (${w.phonetic}) 漏洞：`,
            `闪开大和沿地而砸的铁手重招，速选此 **${w.word}** (${w.phonetic}) 精微释疑：`,
            `在飞沙走石的狂压暴澜下，死死凝视对方棍法破招处的 **${w.word}** (${w.phonetic})：`,
            `为了帮助婉儿在空中摆脱恶虎扑羊攻势，刺破倒数第二大 **${w.word}** (${w.phonetic})：`,
            `用无缝相融的无相心典解密此梵大偈的最后一个 **${w.word}** (${w.phonetic})：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 华山决胜】险隘华山，风刀霜割。背叛师门的恶徒老怪恶贯满盈地狂笑着飞身拦路：『今天便拿你这名门新秀的项上人头，来献祭我的邪功！』`,
            `【第 ${levelNum} 关 · 漫天毒刺】恶怪长袖一拂，大批带着幽绿冥火的密麻暗器朝你当头笼罩。你手中重剑不慎脱落，生死悬在一发。`,
            `【第 ${levelNum} 关 · 师妹援军】婉儿美目圆睁，娇喝一声大红色剑穗一横，飞身立在你的近前阻拦：『大师兄/师姐跟着我的师门意境口诀！双剑出鞘！』`,
            `【第 ${levelNum} 关 · 剑指昆仑】你豪情万般大涨！按着婉儿背诵的英文心诀精义出指，流光剑影荡开全部毒光毒暗器，让恶怪大异退步。`,
            `【第 ${levelNum} 关 · 邪魔爆发】老怪急火烧心狂啸，吐出大汪本命血雾，化作极其凶暴的暗红大手掌凌空拍落，巨石炸开，逼入绝境。`,
            `【第 ${levelNum} 关 · 祖传真法】婉儿咳着娇红嘴角，却长剑高扬、给你指教当年掌门的临别密卷：『大意而不化于形！快用英文高级剑谱意指！』`,
            `【第 ${levelNum} 关 · 剑意点穴】你意沉丹田。你依靠连续选对的生辟剑招秘诀，在对方大掌印崩山坠地的致命死穴内，接连刺中隐藏的契约英文词孔。`,
            `【第 ${levelNum} 关 · 云散月明】你完全翻译御动了华山剑谱的所有飞仙单词！老怪怪叫跌落深崖。婉儿扶着你的重剑喘气笑道：『太厉害啦师兄/姐！』`
          ];
          const prompts = [
            `用惊世的凌空折梅轻功避开恶徒掌风，吐出第一个破功的 **${w.word}** (${w.phonetic}) 字诀：`,
            `在毒刃破喉逼近的万钧刹那，一式太极两仪剑解出这个 **${w.word}** (${w.phonetic})：`,
            `借着婉儿白衣护法的间隙，拼读破除老怪周身血雾大盾的 **${w.word}** (${w.phonetic})：`,
            `像一名青衫白马的绝顶大侠，高声喝出太极剑歌意指的 **${w.word}** (${w.phonetic})：`,
            `绝境逆起，反守为攻化解老怪修罗魔掌的 **${w.word}** (${w.phonetic}) 破口：`,
            `在飞沙走石的恐怖内劲大网中，精确指明此中 **${w.word}** (${w.phonetic}) 剑诀：`,
            `一剑当空，带给恶少爷最致命的武学降维大一击，解出 **${w.word}** (${w.phonetic})：`,
            `荡平漫天黑雾邪魔，解锁最后一个重振师门大威威的名牌 **${w.word}** (${w.phonetic})：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "mall_empire": {
        if (isBranch) {
          const intros = [
            `【商场支线 · 奢牌招商】知名跨国轻奢总会沙龙上，国际一线路边香奢大牌的亚太区总裁对你的谈判不冷不热，高傲地喝红酒，嫌弃你的招商面积。`,
            `【商场支线 · 总裁施压】大总直接抛出一卷英文时尚及企业重重估值合一的大账大案：『小总监，除非你能当堂剖明并翻译此合同词彙。』`,
            `【商场支线 · 助理密信】精干的林秘书手疾，在一旁连夜找出该奢侈大佬的采购底单：『林总，这就是她的命门估价！』你心里一亮。`,
            `【商场支线 · 美语交谈】你站起身，在商界万众环绕下，熟练运用所学大牌英文行话。当你完美将第一个特有词背后的品牌灵魂详解，女总大惊。`,
            `【商场支线 · 气提盈利】亚太总裁大叹：『好！但这第二个高定的复合估价细节核心大词，你可有什么惊人的商业点子去保我盈余？』`,
            `【商场支线 · 酒会全焦】全场奢侈商会会长纷纷侧目震惊倒退。你负手立在沙盘侧，气吞万里长城，谈吐如天外流仙商霸，自信破立。`,
            `【商场支线 · 林助笑意】林秘书在一侧将早已准备的高定专属首店长约大合同推了过去。对方的估算防线在你的单词解答前已经全面土崩瓦解。`,
            `【商场支线 · 独家首店】对赌中奢侈品最难解的外商大单词被你统统攻破！女总微笑着抓起烫金金笔写长单！亚太区独家首秀在你的商场彻底爆落！`
          ];
          const prompts = [
            `用从容不迫的金融口才去解答傲慢大总裁抛出的 **${w.word}** (${w.phonetic}) 估量大词：`,
            `瞬间识破大牌总裁故意摆下的价格漏洞，点出真谛 **${w.word}** (${w.phonetic})：`,
            `根据全能林助理递上的后台资产外单，默诵破译关键的 **${w.word}** (${w.phonetic})：`,
            `像真正的商业财阀之女/之子，优雅将对此 **${w.word}** (${w.phonetic}) 的高见大声说出：`,
            `回击其对于客流量不够的挑剔刁难，阐述品牌大高定 **${w.word}** (${w.phonetic}) 的大价值：`,
            `在沙龙各大名流巨富的倒吸凉气中，流畅说明本词 **${w.word}** (${w.phonetic}) 的采购含义：`,
            `给这个慕强的奢侈总露一手底蕴，完成对 **${w.word}** (${w.phonetic}) 的高级评估：`,
            `以绝对胜券在握的高姿态破译最后一个 **${w.word}** (${w.phonetic}) 合同大重点词义：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 对赌听证】濒临破产的全新购物商场开幕大听证。贪污公司财务、吃里扒外的前采购采购采购采购内鬼聚众指责发难：『年轻人趁早滚蛋，你懂个屁！』`,
            `【第 ${levelNum} 关 · 账本死锁】采购内鬼甩出一卡大洋酒、洋化妆品进口高难外文账本，气极败坏：『有本事就把这第一个词翻译！解不出当堂下台！』`,
            `【第 ${levelNum} 关 · 助理到场】林助理穿着干练裙装推门迈回，将查核底细的内鬼账本底牌稳重呈上：『高总，这是他们做假贪金的账目。』`,
            `【第 ${levelNum} 关 · 反手大翻】你气定闲神一扫，当堂把内鬼玩弄假虚账本中的第一个要命大漏、漏词完美解读并公之于众，内鬼脸色瞬间煞白。`,
            `【第 ${levelNum} 关 · 分管怒极】竞争大公司的分管常务冷怒上前，又狠狠拍出一叠复杂的物流供应链大保密合约：『那这这第二个行行话，又是何意？』`,
            `【第 ${levelNum} 关 · 指沙点局】你在全场董事和分管震惊目光下负手帅气站姿，英姿勃发，在巨屏供应链投影前，把复杂的进口词解得一清二楚。`,
            `【第 ${levelNum} 关 · 常务抹汗】在林助理满带赞誉的崇拜美目注视中，你在大板白纸上流畅写下随后一列高级商业单词的解答。对方哑口无语。`,
            `【第 ${levelNum} 关 · 总裁之王】你全胜解答完了整个分和跨国兼并采购案大链条上的所有英文！内鬼当场被保安送去经侦查办，大商场盈利金冲爆对赌顶！`
          ];
          const prompts = [
            `迎着贪污内鬼指着你大不敬大老脸，解答第一个大牌大采购里的 **${w.word}** (${w.phonetic}) 合约大大难词：`,
            `戳穿采购内鬼在账面上做手脚的虚荣诡计，认命 **${w.word}** (${w.phonetic})：`,
            `借助助理连夜追查的财务大漏洞，将此关键 **${w.word}** (${w.phonetic}) 一笔指出：`,
            `大声宣布你对这个高频跨国采购 **${w.word}** (${w.phonetic}) 条款的最佳意释：`,
            `接招分管常务恶意的后续大供应链盘问，解释生难的 **${w.word}** (${w.phonetic}) 会计核心：`,
            `在投影巨幕前落落大方，秒答这一组财务物流相关的 **${w.word}** (${w.phonetic})：`,
            `为了彻底让内鬼这边的分管常务低头，完成这只 **${w.word}** (${w.phonetic}) 商业释解：`,
            `将三十万作假大账大单完璧破解，点准这最后一个大核心 **${w.word}** (${w.phonetic}) 条例：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      case "detective_deduction": {
        if (isBranch) {
          const intros = [
            `【侦探支线 · 窗台飞鸽】大雾漫天贝克街深夜。一尊白雕雪枭轻轻叩响你的复古雕窗，其脚环上用火漆印着苏格兰皇家特统处的龙卷密码铜器。`,
            `【侦探支线 · 药水炸弹】取出信里面是一卡泛黄的、英法复合错乱暗密纸，只要在几秒内辨识出错，其其背后的特制剧毒硝酸引线就会爆燃。`,
            `【侦探支线 · 华生研茶】华生在身旁为你端来热姜茶和精密高频放大镜，极其知心：『这绝对是江洋怪盗莫里亚蒂暗中发出的挑逗密信，别慌。』`,
            `【侦探支线 · 手起剪落】你聚气开眼，双目在发霉发暗泛黄的字卡上一扫。当你精确解答第一个高频暗密词，铜栓传来卡嚓卡哒闭闭合。`,
            `【侦探支线 · 密卷蒸发】字卷上的隐形高能酸慢慢随气流挥发，露出了藏藏在更深入暗夹里的另一阶段更高智字卡。你大笔连点不能停歇。`,
            `【侦探支线 · 窗外哨子】大雾深处传来了黑衣走狗警哨的大大响动。你在油灯火高频跳动闪烁中提炼出这些颠倒英文字母的逻辑真源含义。`,
            `【侦探支线 · 迷局得绿】华生默默挡在一侧防范飞箭。倒数第二枚密码锁印在你的坚定学识解密码之下传来安全好卡的微弱变绿，退毁引线。`,
            `【侦探支线 · 密件大图】你完全大破了全套莫里亚蒂江洋大字大码！纸上缓缓呈现了皇家博物馆丢失的百亿女王大金挂冠藏匿的绝密坟冢图！一战惊神！`
          ];
          const prompts = [
            `利用高精度的放大镜在发霉暗色上，大眼解密莫里亚蒂的第一个 **${w.word}** (${w.phonetic}) 挑衅：`,
            `在硝酸自毁炸弹爆裂大滴答大计时下，火速点出救命一词 **${w.word}** (${w.phonetic}) 的大含义：`,
            `在华生的贴心掩护和红姜茶温润提力下，解码高危 **${w.word}** (${w.phonetic}) 暗语：`,
            `像名震伦敦的无双侦探，冷笑大声指出字条里的 **${w.word}** (${w.phonetic}) 隐秘死角：`,
            `辨出水汽底面隐约折射出的第二个高频名探 **${w.word}** (${w.phonetic}) 密码：`,
            `克服窗外特警处走狗和黑衣人的暗枪威胁，解出此 **${w.word}** (${w.phonetic}) 隐藏词：`,
            `在放大镜的最底层，点中这个指向核心藏尸案发地的 **${w.word}** (${w.phonetic}) 字母：`,
            `完全拔除自毁倒计时引线，解答这封至大密信上的最后一个 **${w.word}** (${w.phonetic})：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        } else {
          const intros = [
            `【第 ${levelNum} 关 · 伦敦迷雾】古老封闭的庄园大厅里。傲慢无礼、嫌疑极大的男爵脸色阴鸷，用戴着金宝石戒的手猛拍大理石桌子：『侦探，诽谤！把这家伙丢进河里！！』`,
            `【第 ${levelNum} 关 · 保镖进逼】主长随、黑衣保镖和管家死死攥着沉重的铜手杖向你缓缓合围逼上。要是无法在洋遗书账单里找破绽，你便死在这雪地庄。`,
            `【第 ${levelNum} 关 · 华生提点】忠义搭档华生咬着烟斗，冷静用红皮鞋后跟指了下大红波斯地毯底缝夹层的染血银十字架钥匙：『侦探！遗嘱的墨迹是反的！』`,
            `【第 ${levelNum} 关 · 一针见破】你金眼如电！一秒内大声翻译并直指遗书上最能破证其时间写错的第一个大漏洞生字，证明其大伪造，引得百座保镖皆惊！`,
            `【第 ${levelNum} 关 · 凶器突起】男爵面部发狂红！偷偷在长毛大毛衣里，摸出一只涂了 deleterious 绝毒药的黄金毒暗针：『你算什么东西！那那这几张西番行贾契约，你倒是指啊！』`,
            `【第 ${levelNum} 关 · 烟雾掩护】华生上前挡住！大叫：『别慌！快查他身上的信函单！』你在令人窒息的一息内定神分析，开始极速拆解这连环洋契。`,
            `【第 ${levelNum} 关 · 伏案辩解】男爵急得脸上粉末大掉、拼命想在董事局前辩说。你连连出词反刺，将其行贿勾结洋商通谋侵全家财的大漏说得水落石下。`,
            ` =`你解破完了全套犯罪所有的通鬼外语契词大谜！原来男爵正是为了吞吃大钻石而毒手下药害害死大爵爷！男爵崩溃被苏格兰特警死死扣链逮捕，勋勋狂耀！`
          ];
          const prompts = [
            `用鹰眼般犀利的名家破案神色，指出庄园男爵伪造的第一个 **${w.word}** (${w.phonetic}) 涉案遗嘱词：`,
            `在大管家和黑衣保镖准备一拥而上掐断你喉咙瞬间，秒杀这个 **${w.word}** (${w.phonetic}) 学術词：`,
            `结合华生为您在波斯地毯缝指出的致命猫腻，破解关键 **${w.word}** (${w.phonetic})：`,
            `大声念出死者临终绝笔信中最颠倒是非的 **${w.word}** (${w.phonetic}) 词彙解释：`,
            `反击男爵面部神经发狂扭曲的抵赖，解读洋通商契里的 **${w.word}** (${w.phonetic}) 核心代号：`,
            `在庄园董事百名高层围看下，一气呵成翻译下一组带有暗款的 **${w.word}** (${w.phonetic})：`,
            `将男爵在伦敦黑市私自购毒下药的大罪证字卡一网打尽，选对这个 **${w.word}** (${w.phonetic})：`,
            `向全场伦敦特警探长大声宣告此项案中核心指控大词 **${w.word}** (${w.phonetic}) 的大正确含义：`
          ];
          intro = intros[beatIndex % intros.length];
          choicePrompt = prompts[beatIndex % prompts.length];
        }
        break;
      }
        
      default: {
        intro = `【第 ${levelNum} 关 · 第 ${beatIndex + 1} 步：境界考验】在无底深渊的探索征途中，星空魔网的第 ${beatIndex + 1} 尊光印在此挡下。只要通破此字，便能重获自由。这个单词正在考验您的智慧底力。`;
        choicePrompt = `为了能够通过大关卡，请选出并破译 **${w.word}** (${w.phonetic}) 的含义：`;
        break;
      }
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
} are juxtaposed in the high-society literature described in the text?",
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
CORRUPT_JUNK_END */

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

export function getHybridSentence(w: Word, translation: string): string {
  if (!translation) return "";
  const word = w.word; // e.g. "confused"
  const meaning = w.meaning; // e.g. "困惑的，糊涂的"
  
  // Potential terms to replace in translation
  // Split meaning by common punctuation to find possible translation synonyms
  const parts = meaning.split(/[，,、；;()（）]/).map(p => p.trim()).filter(Boolean);
  const searchTermsSet = new Set<string>();
  
  for (const part of parts) {
    searchTermsSet.add(part);
    
    // strip suffixes like '的', '地', '得', '了'
    if (part.endsWith("的") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("地") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("得") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    if (part.endsWith("了") && part.length > 1) {
      searchTermsSet.add(part.slice(0, -1));
    }
    
    // strip prefixes like '使', '被', '让'
    if (part.startsWith("使") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
    if (part.startsWith("被") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
    if (part.startsWith("让") && part.length > 1) {
      searchTermsSet.add(part.slice(1));
    }
  }
  
  // Sort search terms by length descending to match the longest synonym first
  const searchTerms = Array.from(searchTermsSet)
    .filter(term => term && term.length >= 1)
    .sort((a, b) => b.length - a.length);

  // Try to replace the matched Chinese part in the translation sentence
  for (const term of searchTerms) {
    if (translation.includes(term)) {
      return translation.replace(term, word);
    }
  }

  // Fallback: search for shorter matched substrings from parts
  for (const part of parts) {
    for (let len = part.length; len >= 2; len--) {
      for (let start = 0; start <= part.length - len; start++) {
        const sub = part.substring(start, start + len);
        if (sub !== "的" && sub !== "的了" && translation.includes(sub)) {
          return translation.replace(sub, word);
        }
      }
    }
  }

  // Final fallback: append key word in parenthesis if no match was found
  if (translation.endsWith("。") || translation.endsWith("！") || translation.endsWith("？")) {
    const punc = translation.slice(-1);
    return `${translation.slice(0, -1)} (${word})${punc}`;
  }
  return `${translation} (${word})`;
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
    const match = WORD_SENTENCES[w.word.toLowerCase()];
    const enSentence = match ? match.sentence : "";
    const zhTranslation = match ? match.translation : "";
    const hybridSentence = getHybridSentence(w, zhTranslation);
    
    switch (scenarioId) {
      case "ancient_palace":
        if (isBranch) {
          intro = `【大宅支线 · 秘密探秘】你听巧儿悄言说，冷角别院深夜隐隐有异光闪烁。你和巧儿轻手轻脚潜入旧阁，在积满灰尘的双层妆匣后，发现一封尘封已久的陈旧血书。上面歪歪扭扭地写着：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这一惊人细节让你这位 ${sonOrDaughter} 回忆起生母当年的死因，顿觉重重玄机掩盖……`;
        } else {
          intro = `【第 ${levelNum} 关：初显锋芒】威严的嫡母坐在金丝楠木椅上盯视着你，旁边的大少爷添油加醋地煽风点火。今天若是这道难题答不出来，便要罚你去克扣三个月例银。你面对众人幸灾乐祸的眼神，不仅没有慌张，反而从容自若地翻开书页，高声朗读并完美释义了这句奥妙英文：<b>"${enSentence}"</b>（意译：${zhTranslation}）。完美无瑕的才华展示让嫡母当场哑口无言！`;
        }
        break;
        
      case "imperial_court":
        if (isBranch) {
          intro = `【御花园支线 · 琴定千秋】月华朦胧，你轻执古琴在太液池畔低诵。高墙树影微动，深受皇上赏识的羽林军统领悄然走至你身后，对你含胸一礼笑道：『娘娘/才人这一句 <b>"${enSentence}"</b>（意译：${zhTranslation}），琴心流露，委实非同凡响。』在这步步杀机的后宫，竟能得遇如此知音，令你感到无限温暖。`;
        } else {
          intro = `【第 ${levelNum} 关：御前诗会】皇上今日驾临御花园，全宫秀女御前诗会考核大典开启。不怀好意的丽贵妃向皇上进言让你即兴赋诗献艺。四周秀女都在等着看你出丑。你一袭华美长裙，款款下拜，口中轻吐出的佳作竟是这般妙语惊人：<b>"${enSentence}"</b>（意译：${zhTranslation}）。圣上听毕抚掌大笑，龙颜大悦，连声惊叹你的绝世文采！`;
        }
        break;
        
      case "modern_city":
        if (isBranch) {
          intro = `【魔都支线 · 商务洽谈】周末酒会上，华灯初上，外滩凉风习习。一位身价数亿的外资投行合伙人朝你频频举杯，好奇打听你对科技股战略体系的见解。你整理了一下西装，熟练说出核心推演：<b>"${enSentence}"</b>（意译：${zhTranslation}），侃侃而谈，令对方对你的跨国商务素养叹服不已。`;
        } else {
          intro = `【第 ${levelNum} 关：职场巅峰】周一清晨，高冷的Linda总监突然抛下一叠英法双语商业报告要求必须重组提交，否则直接辞退。面对刁难，你顶住压力通宵达旦地在分析报告PPT中写下了最高段位的论述核心：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这无可挑剔的洞察力向全司上下证实了你非凡的专业实力！`;
        }
        break;
        
      case "college_life":
        if (isBranch) {
          intro = `【校园支线 · 迎新风采】校吉他社在操场举办篝火晚会。人气社长将木吉他递前几分：『${selfTitle}，要不要来段即兴Solo点燃全场？』在数十名学弟学妹的热烈欢呼声中，你歌喉轻启，唱出了这首婉转唯美的英文副歌：<b>"${enSentence}"</b>（意译：${zhTranslation}）。篝火旁瞬间爆发出排山倒海的欢呼！`;
        } else {
          intro = `【第 ${levelNum} 关：考场对弈】大阶梯教室里，严厉的张教授一指黑板：『倒数第二排开小差的那位，你上来把这道答卷解了！』全班百人目光齐聚你身上。你大步走上讲台，提起粉笔，顺畅无阻地在黑板上书写了例证：<b>"${enSentence}"</b>（意译：${zhTranslation}），并完美得出了答案！引来台下一片震惊与掌声！`;
        }
        break;
        
      case "fantasy_adventure":
        if (isBranch) {
          intro = `【奥术支线 · 古神遗迹】在迷失沼泽深处的世界树残骸前，巨熊石阵燃起奥数幽火。随着你一步踏入，地面瞬间涌现出散发着蓝色极光的古代英文神谕：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你微闭双目感应着天地间元素的流动，开始有条不紊地聚拢吸纳这股浩瀚奥能……`;
        } else {
          intro = `【第 ${levelNum} 关：禁咒吟唱】你高擎着魔导书挡住地精骑兵。领队的黑魔法狂徒嘲讽你不过是个凡人。危急关头，阿卡多金钥将神圣的高阶吟唱古语映入你脑海：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你当即释放体内极限法力高声颂出，一道遮日御天、不可动摇的黄金守护符文盾瞬间拔地而起！`;
        }
        break;
        
      case "showbiz_superstar":
        if (isBranch) {
          intro = `【巨星支线 · 整蛊突袭】在下榻酒店里，半夜突袭整蛊节目的摄像机推门而入。在猝不及防、纯素颜未饰的闪光灯聚焦下，你沉着应对。你面向镜头展现出不可思议的高情商风度，并大方流利地说道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。优雅的表现不仅成功破梗，更收割了一波路人粉！`;
        } else {
          intro = `【第 ${levelNum} 关：剧组狂飙】《至尊风云》摄影棚里，欺负新人的副导演故意晾了你三小时，百般嘲弄。沈姐冷静地塞给你一页临时修改的重头戏台词。你大步走入镜头，眼神一瞬含泪，演技轰然爆发，用无解的台词功力悲壮吐出一联：<b>"${enSentence}"</b>（意译：${zhTranslation}）。全剧组顿时起立拍案称绝，副导演脸上青红交替！`;
        }
        break;
        
      case "husband_rebound":
        if (isBranch) {
          intro = `【神豪支线 · 拍卖会反爆】珠宝拍卖会上，势利大姑子百般嘲笑你是买不起赠品的穷叫花，正得意时，大管家拍手奉上了全球尊贵黑金卡与千亿代理合同。在一众名流屏息瞩目下，你神定气闲，扬眉吐出一串流利的质问：<b>"${enSentence}"</b>（意译：${zhTranslation}）。锋芒瞬间反噬全座，大姑子吓得当场脸白！`;
        } else {
          intro = `【第 ${levelNum} 关：赘婿/赘媳扬眉吐气】丈母娘过寿，你奉上贺礼，却被刻刻毒的大姑嘲笑为丢人现眼的地摊货。众人蜂拥附和。正当羞辱爆发，门被隆重撞开，十辆迈巴赫一字排开，首富管家领着百名西装保镖齐齐跪迎：『恭迎${gender === "男" ? "姑爷" : "少夫人"}回归！』你缓缓整理风衣，居高临下地朝林家上下冷声道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。一朝爆发，林家上下当场吓得瘫跪在地！`;
        }
        break;
        
      case "wuxia_jianghu":
        if (isBranch) {
          intro = `【江湖支线 · 临仙幽篁】你与${partnerPronoun}在清幽竹林间运功。反派死对头带四大罗汉突袭。${partnerPronoun}咬牙飞身挡在你身前：『剑谱有云：<b>"${enSentence}"</b>（意译：${zhTranslation}）。师兄妹并肩齐上，绝不容邪魔外道小瞧了我等！』`;
        } else {
          intro = `【第 ${levelNum} 关：正邪对决】华山险隘，寒风刺骨，叛徒领暗器如雨破空而来。千钧一发之际，你回想起师祖的无上遗训，将平生功力在一瞬灌注到长剑之上，剑气激扬间吐气高声道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。一剑东来，气贯长虹，直取对方致命死穴，杀局瞬间被荡尽！`;
        }
        break;
        
      case "mall_empire":
        if (isBranch) {
          intro = `【商场支线 · 品牌大招商】招商沙龙上，国际一线轻奢大牌总裁态度不冷不热，林助理提醒你对方的痛点。你神情自若，指点沙盘，用完美的商业手笔流畅地总结道：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这无懈可击的前瞻性战略架构，令高傲的亚太区总裁当场叹服！`;
        } else {
          intro = `【第 ${levelNum} 关：破产逆袭战】逆水行舟，你临危接班废墟商场。在行业听证会兼对赌大会上，前任采购内鬼带人恶意起哄逼迫你下课。你冷笑上前，打开超大投影显示了你精密的整顿分析，并慷慨解言：<b>"${enSentence}"</b>（意译：${zhTranslation}）。震聋发聩的数据穿透了对手编造的谎言，全场起立喝彩！`;
        }
        break;
        
      case "detective_deduction":
        if (isBranch) {
          intro = `【侦探支线 · 窗台密信】深夜贝克街，迷雾缭绕。一只白羽雪枭敲窗，腿上扣着苏格兰场的精密铜扣锁，里头赫然藏着半张未损烧焦、极富条理的密信纸条：<b>"${enSentence}"</b>（意译：${zhTranslation}）。这行致命线索，为解开庄园悬案提供了至关重要的拼图。`;
        } else {
          intro = `【第 ${levelNum} 关：破案如洗】古老庄园的密闭大厅内，男爵拍桌大骂你中伤名流。你慢条斯理地解开厚重大衣，将从挂钟夹缝里搜出的陈旧纸条拍在桌案：『男爵，那你如何解释当时死者手写记录下的这条惊天线索：<b>"${enSentence}"</b>（意译：${zhTranslation}）！』罪名昭彰，男爵浑身剧烈颤抖，彻底认罪！`;
        }
        break;
        
      default:
        if (isBranch) {
          intro = `【修道支线】时空星轨中闪烁着金色奥妙能量。你循着指示，参破了能量柱上镌刻着的千载古语：<b>"${enSentence}"</b>（意译：${zhTranslation}）。你体悟非凡，顺利走完了这段修行支路！`;
        } else {
          intro = `【第 ${levelNum} 关：境界考验】在无边无际的求学历程中，星光结界再次从云雾端降落，阻拦你前行。你注视着悬浮于虚空中的神圣英文古句，其言曰：<b>"${enSentence}"</b>（意译：${zhTranslation}）。参透其中的核心词眼即可破阵前行。`;
        }
        break;
    }

    // Dynamic Post-Processing: replace isolated English sentences & Chinese translation annotations with our immersive hybrid sentence
    if (enSentence) {
      // 1. Double quotes standard format: <b>"Sentence"</b>（意译：Translation）
      const patternDouble = `<b>"${enSentence}"</b>（意译：${zhTranslation}）`;
      // 2. Single quotes standard format: <b>'Sentence'</b>（意译：Translation）
      const patternSingle = `<b>'${enSentence}'</b>（意译：${zhTranslation}）`;
      // 3. Simple quotes standard format: <b>“Sentence”</b>（意译：Translation）
      const patternSmart = `<b>“${enSentence}”</b>（意译：${zhTranslation}）`;

      if (intro.includes(patternDouble)) {
        intro = intro.replace(patternDouble, `<b>“${hybridSentence}”</b>`);
      } else if (intro.includes(patternSingle)) {
        intro = intro.replace(patternSingle, `<b>“${hybridSentence}”</b>`);
      } else if (intro.includes(patternSmart)) {
        intro = intro.replace(patternSmart, `<b>“${hybridSentence}”</b>`);
      } else {
        // Broad fallbacks for any variations: Replace the quote portion and clean up translation footnotes
        intro = intro.replace(`<b>"${enSentence}"</b>`, `<b>“${hybridSentence}”</b>`);
        intro = intro.replace(`<b>'${enSentence}'</b>`, `<b>“${hybridSentence}”</b>`);
        intro = intro.replace(`<b>“${enSentence}”</b>`, `<b>“${hybridSentence}”</b>`);
        intro = intro.replace(`（意译：${zhTranslation}）`, "");
      }
    }

    choicePrompt = `请结合以上语段情境与大义，选择学修核心词【${w.word}】的正确简体中文释义：`;

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
