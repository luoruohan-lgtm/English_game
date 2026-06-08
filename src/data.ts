import { WordBookType, Word, ScenarioContext, ShopItem, ExamQuestion, StorySegment } from "./types";
import { WORD_SENTENCES, getAdaptedWordSentence } from "./sentences";

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
    { word: "viability", phonetic: "/ˌspace-around/", meaning: "生存能力，可行性", distractors: ["死亡率", "退化", "不可行"] },
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
    { word: "obsequious", phonetic: "/əbˈsiːkwiəs/", meaning: "逢迎的，谄媚的", distractors: ["傲慢的", "诚实的", "公正的"] },
    { word: "parsimonious", phonetic: "/ˌpɑːsɪˈməʊniəs/", meaning: "吝啬的，过度节俭的", distractors: ["慷慨的", "奢侈的", "贫穷的"] },
    { word: "recalcitrant", phonetic: "/rɪˈkælsɪtrənt/", meaning: "顽抗的，不驯服的", distractors: ["顺从的", "虚弱的", "热情的"] },
    { word: "sycophant", phonetic: "/ˈsɪkəfænt/", meaning: "马屁精，逢迎者", distractors: ["诤友", "隐士", "演说家"] },
    { word: "taciturn", phonetic: "/ˈtæsɪtɜːn/", meaning: "沉默寡言的", distractors: ["喋喋不休的", "开朗的", "暴躁的"] },
    { word: "ubiquity", phonetic: "/juːˈbɪkwəti/", meaning: "无处不在", distractors: ["罕见性", "局限性", "短暂性"] },
    { word: "vociferous", phonetic: "/vəʊˈsɪfərəs/", meaning: "喧嚷的，大声喊叫的", distractors: ["轻声的", "严肃的", "温柔的"] },
    { word: "winsome", phonetic: "/ˈwɪnsəm/", meaning: "迷人的，讨人喜爱的", distractors: ["讨人厌的", "高冷的", "丑陋的"] },
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
    description: "这是一个充满阳光、汗水与微风的校园。你将重温逃课、社团、期末考、向暗恋对象告白的悸动时光。答对单词，战胜严厉的教授，获得校园学神荣耀！",
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
    companionTitle: "傲娇小师妹",
    companionIntro: "你的师门亲人，嘴硬心软。她轻功极高，每当你陷入围攻，便会拔剑和你并肩作战，通过背诵门派招式口诀协助你破敌。",
    currencyName: "武林声望值",
    currencyIcon: "🗡️",
    accentColor: "red",
    bgGradient: "from-red-950 to-stone-950",
    textCol: "text-red-400",
    cardBg: "bg-red-900/20 border-red-800/40"
  },
  {
    id: "mall_empire",
    name: "商场帝国 (重商传奇)",
    description: "临危受命，接手破产烂尾商场。通过精密的招商引资（答对单词），引进世界名流一线百货品牌，击退做空资本财团，一步步建立庞大的零售帝国！",
    companionName: "林助理",
    companionTitle: "得力商业助理",
    companionIntro: "林助理毕业于名校，精通市场分析。她不仅是你的得力助手，更是商海拼搏中最温柔的港湾，助你运筹帷幄。",
    currencyName: "商厦股份值",
    currencyIcon: "🏢",
    accentColor: "teal",
    bgGradient: "from-teal-950 to-zinc-900",
    textCol: "text-teal-400",
    cardBg: "bg-teal-950/30 border-teal-850/40"
  },
  {
    id: "detective_deduction",
    name: "神探破案 (迷雾诡案)",
    description: "贝克街深夜幽冷。多起谜案在大院发生。你作为名侦探大显身手，答对单词即可抽丝剥茧，寻得最隐秘的物证与真相，将凶手绳之以法！",
    companionName: "华生",
    companionTitle: "得力侦探助手",
    companionIntro: "华生沉稳可靠，枪法精妙。他有条不紊地帮你整理卷宗与证言，也是你在暴风深林中最大的底牌。",
    currencyName: "断案名气值",
    currencyIcon: "🔍",
    accentColor: "cyan",
    bgGradient: "from-cyan-950 to-slate-900",
    textCol: "text-cyan-400",
    cardBg: "bg-cyan-950/30 border-cyan-850/40"
  }
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
      question: "What does empirical evidence highlight about overfishing and nutrient depletion?",
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
      passage: "W: Moving on to our urban sustainability section, we must evaluate the demographic shifts in modern green suburbs. In older cities, infrastructure is often inadequate, leading to high levels of resource wastage.\\nM: Indeed. Unless councils build viable sewage systems, standard aquatic life in local rivers will face catastrophic pollution. We must make ecological friendliness the threshold challenge for municipal budgets.",
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

// Generates immersive hybrid sentences seamlessly replacing target meanings
export function getHybridSentence(w: Word, translation: string): string {
  if (!translation) return "";
  const word = w.word;
  const meaning = w.meaning;
  const parts = meaning.split(/[，,、；;()（）]/).map(p => p.trim()).filter(Boolean);
  const searchTermsSet = new Set<string>();
  
  for (const part of parts) {
    searchTermsSet.add(part);
    if (part.endsWith("的") && part.length > 1) searchTermsSet.add(part.slice(0, -1));
    if (part.endsWith("地") && part.length > 1) searchTermsSet.add(part.slice(0, -1));
    if (part.endsWith("得") && part.length > 1) searchTermsSet.add(part.slice(0, -1));
    if (part.endsWith("了") && part.length > 1) searchTermsSet.add(part.slice(0, -1));
    if (part.startsWith("使") && part.length > 1) searchTermsSet.add(part.slice(1));
    if (part.startsWith("被") && part.length > 1) searchTermsSet.add(part.slice(1));
    if (part.startsWith("让") && part.length > 1) searchTermsSet.add(part.slice(1));
  }
  
  const searchTerms = Array.from(searchTermsSet)
    .filter(term => term && term.length >= 1)
    .sort((a, b) => b.length - a.length);

  for (const term of searchTerms) {
    if (translation.includes(term)) {
      return translation.replace(term, word);
    }
  }

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

  if (translation.endsWith("。") || translation.endsWith("！") || translation.endsWith("？")) {
    const punc = translation.slice(-1);
    return `${translation.slice(0, -1)} (${word})${punc}`;
  }
  return `${translation} (${word})`;
}

// Maps scenario checkpoints/moments to coherent level and step progress
export function getScenarioSettingAndTitle(
  scenarioId: string,
  levelNum: number,
  index: number,
  stepIndex: number,
  opponentName: string,
  companionName: string,
  selfTitle: string,
  partnerPronoun: string,
  sonOrDaughter: string,
  isBranch: boolean
): { title: string, setting: string } {
  let baseTitle = "";
  let setting = "";

  switch (scenarioId) {
    case "ancient_palace":
      if (stepIndex === 0) {
        baseTitle = "祠堂跪寒";
        setting = `在金丝楠木铺成的冰冷祠堂里，${opponentName}高坐上首，命丫鬟捧着一碟发毒的面点，冷笑着讽刺你作为${sonOrDaughter}卑贱庶出的出身，甚至要克扣你屋里所有的过冬炭火。`;
      } else if (stepIndex === 1) {
        baseTitle = "深夜烛捕";
        setting = `深夜寒风吹动着破烂的窗棂，${companionName}正含泪为你掌灯温书。突然房门被一脚闯开，${opponentName}阴沉着脸带着几个浑身横肉的家丁，硬说你私藏了勾结外人、谋害家族的违禁密约。`;
      } else if (stepIndex === 2) {
        baseTitle = "膳簿风浪";
        setting = `膳房大堂里乌烟瘴气。${opponentName}带着底下的刁恶奴才故意拿出数本伪造的香油采买账卡，当着合府奴仆的面，百般挤兑嘲讽你，企图以荒诞的账目陷害你中饱私囊。`;
      } else if (stepIndex === 3) {
        baseTitle = "篁亭劫挡";
        setting = `碧波草亭畔细雨微下。${opponentName}突然带着多名打手拦住你和${companionName}的去路，态度居高临下，用极度不屑的眼神看着你的简朴衣着，威逼你交出生母留下的白玉饰坠。`;
      } else if (stepIndex === 4) {
        baseTitle = "寿筵天书";
        setting = `老太君八十寿诞席间名流毕至，二小姐与嫡母狼狈为奸。${opponentName}故意当着满堂亲旧寿客的面，将一叠毫无头绪的西域番书番贴摊在桌上，逼你这位庶出子嗣当众吟诵解读，意图让你当场出乖露丑。`;
      } else if (stepIndex === 5) {
        baseTitle = "考产验匙";
        setting = `你开始接管部分内宅产业，府内掌事嬷嬷冷笑连连。${opponentName}带着底下的账房掌柜，在一旁戏谑地冷眼旁观，当面嘲笑你不过是个毫无阅历的雏儿，极力质疑你不可能管明白千万库金往来。`;
      } else if (stepIndex === 6) {
        baseTitle = "设棚施粥";
        setting = `大雪封山，你带着${companionName}在内宅大门口开仓设棚、赈济穷苦灾民。${opponentName}却在灾民中暗中买通几个地痞无赖起哄，肆意造谣讽刺你的米粮里掺满泥沙，大喊你不安好心、中饱私囊。`;
      } else if (stepIndex === 7) {
        baseTitle = "别院药香";
        setting = `你悄悄走进冷僻幽静的冷角别院，正好撞见${opponentName}与贴身影卫私下交接一纸密信和古书药香。看见你突然现身，对方急急遮挡，皮笑肉不笑地端来一碗参茶强逼你喝下以绝后患。`;
      } else if (stepIndex === 8) {
        baseTitle = "钦差指案";
        setting = `朝廷宣封钦差亲临府上，考核地方海运商业继承权。${opponentName}不仅不予配合，更当着满堂同僚与钦差大员的面，谗言诬告你生性顽劣、忤逆尊长、胸无点墨，完全没有继承家业的才能。`;
      } else {
        baseTitle = "乾坤凤还";
        setting = `最后的夺权继承之夜，正堂之内灯火通明。老太君叹气不语，${opponentName}神色近乎癫狂，带着账房与内侍作最疯狂的挣扎，一口咬定你生父母留下的地契契约和名录全是假造的赝品。`;
      }
      break;

    case "imperial_court":
      if (stepIndex === 0) {
        baseTitle = "殿选秀艳";
        setting = `在巍峨庄严的太和殿白玉台阶前，金秋殿选大典盛大开启。不怀好意的秀女首领 ${opponentName} 在一众候选秀女面前昂首踱步，指指点点地讥讽你清雅便服寒酸，断言你无法迈进皇宫一步。`;
      } else if (stepIndex === 1) {
        baseTitle = "太液仙图";
        setting = `太液池畔月华如水，皇上与太后突然驾临。宠妃 ${opponentName} 故意在圣上面前推举你，非要你当场就番邦朝贡的‘无字羊皮天书图卷’进行即兴剖析并说明典故，成心等着让你出错受罚。`;
      } else if (stepIndex === 2) {
        baseTitle = "女政官阻";
        setting = `内侍尚书省考核长廊里秋风烈烈。敬事房领事嬷嬷 ${opponentName} 极力阻拦你登记名册，在百般繁文缛节上对你吹毛求疵，傲慢地威胁要以仪规不整之名将你直接撵秀出宫。`;
      } else if (stepIndex === 3) {
        baseTitle = "雪中长街";
        setting = `大雪封锁的夹道红墙上，不怀好意、眼高于顶的贵嫔 ${opponentName} 故意指控你的香熏弄脏了御赐的前朝贡缎，罚你独自在冰天雪地中长跪三巡并吟诵过往警言。`;
      } else if (stepIndex === 4) {
        baseTitle = "御膳扣炭";
        setting = `御膳房领事太监联合底下的势利太监，故意克扣你寝宫的防寒木炭。面对你和${companionName}的主动质问，${opponentName}态度傲岸冷漠，甚至出言讥讽说不受宠的常在不配用上等银炭。`;
      } else if (stepIndex === 5) {
        baseTitle = "反咬密药";
        setting = `你在碧房寝宫抄写手札，暗藏杀机的贵妃心腹 ${opponentName} 突然搜宫。他们从你自用香囊的夹层里搜出一包微毒香粉，当众冷笑不止，非要指控你私通外臣、意图谋害尊师和太后。`;
      } else if (stepIndex === 6) {
        baseTitle = "星轨谶谜";
        setting = `番帮使臣在寿康宫呈上一卷据称举朝文武皆不可识的‘上古星轨谶语’。${opponentName}为了让你当众出洋相，急忙举荐说你平时在常在所喜好钻研各类异国奇特文字谶谜。`;
      } else if (stepIndex === 7) {
        baseTitle = "红墙阴罗";
        setting = `深夜宫苑一角。${opponentName}领着数名端持火把的羽林军包围了后院，脸上杀机毕现，大肆叫嚷称你深夜秘密出入神庭一角是企图暗算贵妃、败坏祖制。`;
      } else if (stepIndex === 8) {
        baseTitle = "宗庙昭案";
        setting = `皇家祈福大典上，丽贵妃联手朝中豪门。${opponentName}当着满朝文武与圣上皇后的面狂攻，声称你母家以前参与海商密谋、大逆不道，言之凿凿命令你自废常在名号、解交宗人府。`;
      } else {
        baseTitle = "凤主乾坤";
        setting = `圣皇决定赐你协理六宫掌事凤印。圣天大殿前，面色阴沉的丽贵妃 ${opponentName} 与几位嫔妃死死阻挠，咬定你年纪过轻、德行浮夸，无才管理百年太后大账与宫闱历年名册支出。`;
      }
      break;

    case "modern_city":
      if (stepIndex === 0) {
        baseTitle = "早会重案";
        setting = `周一早会，办公室内空气紧绷极点。高冷项目部总监 ${opponentName} 突然将一叠超复杂的跨国英文审计纠纷案重重甩在你的桌上，命令你必须在今日内完美解决，存心刁难。`;
      } else if (stepIndex === 1) {
        baseTitle = "酒会巨鳄";
        setting = `外滩华灯璀璨，高端名流汇聚。一位身价数十亿的外资投行合伙人 ${opponentName} 端起冷饮，傲慢地打量着你的简朴便装，对你提出的未来商圈合并概念报以极度不屑的嘲弄。`;
      } else if (stepIndex === 2) {
        baseTitle = "极限数据";
        setting = `距离大老板和小晴学姐到场仅剩数分钟。你突然发现核心汇报PPT里的关键估值资产表被竞争对手 ${opponentName} 恶意删除，众人全在等着看你如何在名流决策层面前结结巴巴出丑。`;
      } else if (stepIndex === 3) {
        baseTitle = "合同狙击";
        setting = `极其高档的咖啡厅谈判一隅。傲慢的乙方代表 ${opponentName} 不耐烦地用指节敲击着红木桌面，百般挑剔英文地契商务条款，扬言你若拿不出顶级方案他就立刻取消合作。`;
      } else if (stepIndex === 4) {
        baseTitle = "天使风投";
        setting = `在名流如云的风险投资沙龙上，眼高于顶、手握千万风投资金的头部投资大佬 ${opponentName} 傲慢地打断了你的技术演讲，挑剔地讥讽说你们整个项目的财务背景是一纸空文。`;
      } else if (stepIndex === 5) {
        baseTitle = "黑卡底查";
        setting = `在摩天大楼下的顶级商务会所内。竞争对手派来的资深高管 ${opponentName} 假意投来高价猎头方案，暗中却用一个极其刁钻、布满致命陷阱的行业重组问题对你进行底牌刺探。`;
      } else if (stepIndex === 6) {
        baseTitle = "约合同作废";
        setting = `由于对家公司高层背后操作，重磅级跨国核心大客户宣布解除与你们公司的合作。小会议室里总监等责任方互相推委，${opponentName}更是当面对你百般挤兑，妄图强推你充当替罪羊。`;
      } else if (stepIndex === 7) {
        baseTitle = "跨欧博弈";
        setting = `并购专家会谈的主会议大厅里。傲慢的北欧代表 ${opponentName} 敲着表单，大肆用英文嘲笑你们的跨国运营和账单管理，宣称你们根本不懂商业规矩、不配拥有控制股。`;
      } else if (stepIndex === 8) {
        baseTitle = "公关黑雨";
        setting = `突发极其严重的负面公关危机。公司的林经理和敌对媒体抢先用大量假数据控制了业界论调，水军头头 ${opponentName} 更是挡在公司门口对你百般冷嘲热讽，试图将阴谋坐实。`;
      } else {
        baseTitle = "巅峰董事";
        setting = `在数十位世界级名流富豪和财团评委云集的终极合伙人董事会上。无路可退的项目总监 ${opponentName} 发动最后的围攻，一口咬定你提交的资本管理重组方案完全是虚伪的数据欺诈。`;
      }
      break;

    case "college_life":
      if (stepIndex === 0) {
        baseTitle = "阶梯高点";
        setting = `在大阶梯教室里，严厉的张教授面色黑冷，正在严厉训话。邻桌的高冷学霸 ${opponentName} 故意给你指点错误的答卷页数，害你在教授挑人时被盯住，上百人的目光齐刷刷聚集你脸上。`;
      } else if (stepIndex === 1) {
        baseTitle = "篝火琴威";
        setting = `校吉他社在操场举办篝火晚会，微风吹拂。学科全能的狂妄社长 ${opponentName} 抱着木吉他，当着上百学弟学妹和${companionName}的面，高声椰揄你，笑你口语极其蹩脚，不配做外文主持。`;
      } else if (stepIndex === 2) {
        baseTitle = "一辩救澜";
        setting = `校际双语辩论赛总决赛大厅里。对方学校的尖刻辩手 ${opponentName} 抛出一个充满圈套、混杂古文理大义的英文命题，满面不屑地等着用这个致命漏洞彻底击垮你方的立场。`;
      } else if (stepIndex === 3) {
        baseTitle = "宿考风波";
        setting = `因为被宿舍小人恶意栽赃，宿管阿姨在寝室走廊里当众训斥你们。站在一在一旁的挑刺狂 ${opponentName} 更是带着看乐的心态在一侧起哄作乐，嘲讽你连基本的行文道德都无法自律。`;
      } else if (stepIndex === 4) {
        baseTitle = "神藏突考";
        setting = `张教授在讲台上黑下脸，突然宣布进行突击性的高古文献原版解读。全班一片绝望，优等生 ${opponentName} 特意晃了晃手中的高阶答券，冷笑着讥讽说凡夫庶子根本跨不过本页翻译门阶。`;
      } else if (stepIndex === 5) {
        baseTitle = "无音演告";
        setting = `百人学术大礼厅中。你正要登台开始全语种演讲，麦克风由于遭到人使坏突然死机，台下一片哄乱。体育组长 ${opponentName} 沉沉地喝住你，大声指责无能力学苑弟子就该下台出局。`;
      } else if (stepIndex === 6) {
        baseTitle = "林荫告折";
        setting = `你正要在林荫大道向心仪的对象告白。高傲自满的校辩论社长 ${opponentName} 突然横插过来拦在中间，一把夺过你的手札，大声讽刺你的文采语言俚俗下等，根本没有半分文化素养。`;
      } else if (stepIndex === 7) {
        baseTitle = "名额考答";
        setting = `在年度国家励志奖学金重点名额评审会上。势利的评选组长 ${opponentName} 翻查着你提交的洋文翻译材料，讥讽你对句子的把握是东拼西凑、胡说八道。`;
      } else if (stepIndex === 8) {
        baseTitle = "跳蚤摊霸";
        setting = `在喧嚣热火的学生跳蚤交易市场上，校园恶霸 ${opponentName} 故意踢坏你和${companionName}的学习平板，反而贼喊捉贼，声称你们兜售劣质货卡，在道口严词叫嚣勒索。`;
      } else {
        baseTitle = "论文谢终";
        setting = `最后的毕业论文公开答辩大台下。几位受指使刻意为难你的严厉外聘专家 ${opponentName}，针对你毕业论文中最末尾的核心引用展开极其致命的轮番刁难，令所有同学为你提心吊胆。`;
      }
      break;

    case "fantasy_adventure":
      if (stepIndex === 0) {
        baseTitle = "萨满咒煞";
        setting = `在乱石林立、腐尸堆积的哥布林祭坛废墟前。残暴的哥布林祭司 ${opponentName} 挥舞着淬毒魂杖，发出刺耳的骨哨啸叫，对你的识海直接发起狂暴的暗夜精神侵蚀。`;
      } else if (stepIndex === 1) {
        baseTitle = "王座龙音";
        setting = `残败的古神王座遗迹中，黄金神谕散发着幽蓝奥光。暗影巨龙 ${opponentName} 庞大的骨翼拍动巨石，在废墟上空高傲地俯视你，暴虐地吐出龙息，要你自陈为何敢擅闯禁地的罪名。`;
      } else if (stepIndex === 2) {
        baseTitle = "巫妖冰潮";
        setting = `在迷失寒冰的死灵古墓室。森冷重重的亡灵巫妖 ${opponentName} 带着数百骷髅军团破冰而出，释放出冻结生命的死亡寒霜，嘎嘎狂笑说你和法书精灵阿尔法只是毫无作用的蝼蚁尘埃。`;
      } else if (stepIndex === 3) {
        baseTitle = "金门巨守";
        setting = `在刻满上古图腾防线的元素藏宝库前。巨泥石魔石像 ${opponentName} 用拳头轰隆砸打地面，双目射出炙热火光，限时逼你在三个呼吸内完美吟出开启藏宝库的魔能古训。`;
      } else if (stepIndex === 4) {
        baseTitle = "荆棘魔法师";
        setting = `在荆棘迷宫的最深死角。黑巫魔教高级狂热魔导师 ${opponentName} 拦住去路，手中黑色法杖溢出暗雷，讥讽指责无能的学徒根本不配持有圣魔法灵，放肆宣称待会要把你的神元彻底捏爆。`;
      } else if (stepIndex === 5) {
        baseTitle = "神泉殿罚";
        setting = `在瑞气飘袅的至高神殿洗礼泉池旁。傲慢的光明神殿大祭司 ${opponentName} 手拄白色重质长枪，狂言斥责你的凡俗出身，扬言要直接废除你吟唱神谕净华术的资格与传承。`;
      } else if (stepIndex === 6) {
        baseTitle = "圣塔秘典";
        setting = `在漂浮于虚空之上的圣魔法天塔天梯顶端。魔法学院的老祭司 ${opponentName} 严苛地注视着你，手捧残破的禁忌圣典，嘲弄你的魔力低下，要求你必须在十秒内完美破译秘典。`;
      } else if (stepIndex === 7) {
        baseTitle = "幻境死斗";
        setting = `在迷雾重重的古老镜面幻境之中。邪恶化身 ${opponentName} 幻化出漫天黑羽与死光，猖狂大笑，宣称你不过是凡尘的一介尘埃，企图用精神幻术将你彻底湮灭。`;
      } else if (stepIndex === 8) {
        baseTitle = "恶龙祭典";
        setting = `在烈火喷涌、岩浆翻腾的恶龙墓穴石柱上。狂热的叛变信徒首领 ${opponentName} 企图用秘药向恶龙血祭${companionName}。看到你的到来，他皮笑肉不笑地挥动骨剑，威逼你停下脚步接受黑夜试炼。`;
      } else {
        baseTitle = "奥术星空";
        setting = `在星光璀璨的世界之树最顶端星能宝座下。黑曜石军团首领 ${opponentName} 统帅着大批幽鬼守军，面色狰狞、语气轻蔑地质疑你不配掌握永恒奥术，企图一口将你们捏碎。`;
      }
      break;

    case "showbiz_superstar":
      if (stepIndex === 0) {
        baseTitle = "发布刁难";
        setting = `在人头攒动、闪光灯不断的电影开机发布会上。傲慢的公司高层 ${opponentName} 故意当着无数长枪短炮和娱乐名记的面，冷言讽刺你被资本封杀是不自量力，逼你现场做高难度无实物表演，试图让你当众退场。`;
      } else if (stepIndex === 1) {
        baseTitle = "试镜陷阱";
        setting = `在光线昏暗的帝都顶奢电影试镜大厅里。曾排挤你的资深竞品艺人 ${opponentName} 坐在评委席侧，用极其阴阳怪气的语调宣称你这种过气的小演员不配拿到主角名额，命令你立刻在五句英文台词内打动全场。`;
      } else if (stepIndex === 2) {
        baseTitle = "综艺挤兑";
        setting = `在录制现场，数十台高清机位高高架起。极其势利的王牌节目女主持人 ${opponentName} 联合其他嘉宾故意在游戏环节将最难的即兴英文辩词推给你，冷笑着等着看你结巴卡壳的惨样。`;
      } else if (stepIndex === 3) {
        baseTitle = "通告阻截";
        setting = `在时尚盛典红毯大厅的后台，香气袭人。金牌经纪人沈姐正拉着你准备登台，傲慢的对家顶流 ${opponentName} 却带着六名保镖直接用豪车将走廊死死堵住，对你投来不屑的冷光，挑衅说无名之辈不配踩这片红地毯。`;
      } else if (stepIndex === 4) {
        baseTitle = "合同刺客";
        setting = `在寸土寸金的大资本谈判桌旁。刁蛮的跨国代言商高管 ${opponentName} 抱着双臂，居高临下地把一份布满英文漏洞的合同砸在你面前，嘲讽说你不签这份屈辱霸王合同，立刻就会在娱乐圈彻底消失。`;
      } else if (stepIndex === 5) {
        baseTitle = "狗仔堵截";
        setting = `在细雨淅沥的酒店地下车库。数名受资本指使的狗仔队长 ${opponentName} 突然从黑暗中窜出，将刺眼的闪光灯不断往你脸上按，语气恶劣极点，逼问你关于私生活的恶意假新闻、意图诱导你。`;
      } else if (stepIndex === 6) {
        baseTitle = "金牌黑料";
        setting = `在宽敞的总裁办公室，竞争对手指使的公关水军头子 ${opponentName} 正翘着二郎腿，亮出数张精心电脑合成的恶意“假黑料”，得意冷笑道若不放弃新剧女一号，立刻让你社会性死亡。`;
      } else if (stepIndex === 7) {
        baseTitle = "国际试水";
        setting = `在群星闪耀的戛纳主宴会厅。骄横的外籍大导 ${opponentName} 用极难听懂的西域连读英文，高傲地对你和沈姐指出由于文化背景，你们这辈子都不可能登上世界级主流影坛，逼你当场用古典英文回驳。`;
      } else if (stepIndex === 8) {
        baseTitle = "赞助撤回";
        setting = `在大资本财阀合伙沙龙中。曾承诺赞助你们个人工作室的多金大佬 ${opponentName} 突然变脸反悔，当众撕碎了协议，讥笑称你不过是颗快坏掉的明星棋子，扬言要把沈姐和你一起赶出名流圈。`;
      } else {
        baseTitle = "巨星加冕";
        setting = `在万众瞩目、金碧辉煌的世界巨星颁奖典礼最高领奖台上。昔日联合封杀你的资本巨头 ${opponentName} 脸色铁青地站在一侧，作最后挣扎，大声指责你没有国际奖项认可，不配顶戴这顶金王冠。`;
      }
      break;

    case "husband_rebound":
      if (stepIndex === 0) {
        baseTitle = "家宴冷眼";
        setting = `在楚府豪华而刺眼的家宴主桌旁，菜香扑鼻。对你百般嫌弃的岳母大反派 ${opponentName} 傲慢地当众拍响桌子，指着你那一身廉价的地摊西装，刻刻地嘲讽你不学无术、连入赘的资格都不配，逼你跪着给所有贵宾倒酒茶。`;
      } else if (stepIndex === 1) {
        baseTitle = "退婚耻辱";
        setting = `在大平层贵宾茶室里。傲慢的第三代世家之子 ${opponentName} 将一叠退婚契约重重拍在大理石桌上，极度鄙夷地斜睨着你，扬言你癞蛤蟆想吃天鹅肉，连给他家提鞋都不配，逼你立刻签字滚退。`;
      } else if (stepIndex === 2) {
        baseTitle = "大少亲临";
        setting = `深夜大雨倾盆，你正在客厅拖地。王管家还未亲临，得知底细的刁钻大舅子 ${opponentName} 带着保镖猛踹客厅大门。他们狂妄大笑着将一桶污水倒在地板上，骂你是没用的废物，逼你当场把地板擦洗干净。`;
      } else if (stepIndex === 3) {
        baseTitle = "试炼开始";
        setting = `在王管家的豪车劳斯莱斯后座。王管家亲切告知第一期家族商业单词试炼开启。可就在此时，竞争对手楚家执事 ${opponentName} 却在路口带人拦截，并极度轻蔑狂妄地声称楚少目永远只是烂泥，妄图在三分钟之内收缴资金。`;
      } else if (stepIndex === 4) {
        baseTitle = "老宅交钥匙";
        setting = `在气派的楚家老宅议事堂。掌印嬷嬷和刁恶的亲戚 ${opponentName} 冷笑连连地守在金库库房前。他们硬生生把持着老宅的掌事钥匙，轻慢地质疑你根本管不明白千万巨资的财务账簿和合同凭卷。`;
      } else if (stepIndex === 5) {
        baseTitle = "黑道砸场";
        setting = `在奢华而安静的外滩港端茶楼包厢。楚氏敌对家族暗地里的打手头子 ${opponentName} 领着一众凶狠的小弟，故意砸烂了你眼前的清代古茶具，吐着唾沫威逼你把王管家转让的全部商铺股份无偿交出。`;
      } else if (stepIndex === 6) {
        baseTitle = "外戚陷害";
        setting = `临近家族核心会议，不怀好意的表哥 ${opponentName} 居然串通内鬼，将大批毒品或违禁发票私塞进你的公文包里。他带人堵在正堂前，冷笑不止指控你企图败坏祖宗名节、要将你送警。`;
      } else if (stepIndex === 7) {
        baseTitle = "商业逼牌";
        setting = `在海运外资重返亚太的谈判会议高座。傲慢的外资财团大代理人 ${opponentName} 故意用超级复杂的英文地契欺诈协议做戏，在百般商业条款上给你设套，语气轻佻不屑地声称只要你错答一个词他就一局全收。`;
      } else if (stepIndex === 8) {
        baseTitle = "公害公关";
        setting = `林城市的黑道豪门勾结小媒体。不怀好意的主编 ${opponentName} 在各大报纸和都市大屏疯狂捏造你早年倒插门期间的所谓受虐丑闻。媒体发布会门前，他领着长枪短炮的记仇水军将你和王管家死死围困。`;
      } else {
        baseTitle = "一雪前耻";
        setting = `楚家终极祭祖大典主坛之上！昔日看不起你的岳母大反派、刁恶亲戚以及情敌富少 ${opponentName} 脸色煞白地围在一起。王管家带着八百辆劳斯莱斯亲临现场，而前对头仍不死心地在台上叫嚣你出身低。`;
      }
      break;

    case "wuxia_jianghu":
      if (stepIndex === 0) {
        baseTitle = "下山遇劫";
        setting = `在险峻无常的落枫坡崖边，山风呼啸。不友善的魔教前哨堂主 ${opponentName} 带着数名手持鬼头刀的黑衣凶汉，面目狰狞地拦住你和婉儿的下山去路，放声狂笑讥讽你们神剑门尽是缩头乌鸦，逼你们自废修为、交出名门令牌。`;
      } else if (stepIndex === 1) {
        baseTitle = "小店暗镖";
        setting = `塞外悦来酒家偏桌前，油灯昏黄。身怀绝技的黑道飞贼 ${opponentName} 伪装成跑堂伙计，在给你递送老白干汤茶时，眼中寒芒乍现，手底突发三枚淬有剧毒、见血封喉的‘幽骨追魂镖’，逼你十秒内看破他的虚实杀招。`;
      } else if (stepIndex === 2) {
        baseTitle = "破庙围杀";
        setting = `在黑雨滚滚的荒郊破庙。居心叵测一派的唐门叛宗护手 ${opponentName} 带着数十名杀手，突然包围合殿，吹入无色无味的暗夜奇毒。对方极其猖狂地命你二人绝望断指，否则死无全尸。`;
      } else if (stepIndex === 3) {
        baseTitle = "五岳逼谱";
        setting = `在雄伟的武当九霄真武大堂。道貌岸然的五岳盟主 ${opponentName} 借端找衅，纠集各派长老在大厅大声拍案，威逼利诱你当众倒背出生父母留给你们神剑门绝世剑谱的核心古训。`;
      } else if (stepIndex === 4) {
        baseTitle = "客栈参毒";
        setting = `塞外龙门古旧客栈偏桌，烛影摇曵。面目狡诈的副头目 ${opponentName} 特意端上一碗热气滚滚、绿香异样的羊肉老汤，在四桌黑道死士蓄力拔刀的环境下，阴阳怪气地强逼你们痛饮。`;
      } else if (stepIndex === 5) {
        baseTitle = "天碑藏梵";
        setting = `无名奇断崖的摩崖石刻前。黑道武圣大剑师 ${opponentName} 按剑昂头，指着石刻上高深难辨、皆为梵语西域名典的‘伏魔梵文’，单卡冷声讥笑，声称你这凡夫俗子断不能辨其中半字。`;
      } else if (stepIndex === 6) {
        baseTitle = "熔岩火抉";
        setting = `火山熔岩剑池火蟒乱腾，气浪扑身。恶门叛将 ${opponentName} 扣押着受伤不支的婉儿，用淬毒利箭抵着她的心房，狂笑逼你立刻跳熔岩自尽，发出自得意满的狂叫叫嚣。`;
      } else if (stepIndex === 7) {
        baseTitle = "少室大诬";
        setting = `在少室山阴冷无比的祈福宗堂。道骨魔心的伪君子 ${opponentName} 纠集名门掌门百名，在大庭广众、天下英豪面诬造你早已坠入魔派，言辞凿凿命令你自废命功、立刻向武林请罪。`;
      } else if (stepIndex === 8) {
        baseTitle = "黄沙枯劫";
        setting = `瀚海茫茫大沙暴暴卷，商队受阻。悍匪巨盗 ${opponentName} 提着双刀堵死唯一的甘泉枯井，脸色残暴嚣张，命令你立刻拿走所有财贝和唯一的百年古方圣药作为买命之资。`;
      } else {
        baseTitle = "神炉决裂";
        setting = `在昆仑邪君熔岩炼金大殿。叛逆少主 ${opponentName} 提着邪魔玄兵，傲然将你们神剑大宗的先师重匾踢成碎木，公然疯狂嘲笑你门下一生都是手无肤之智之辈，逼你在铁火前做生死决。`;
      }
      break;

    case "mall_empire":
      if (stepIndex === 0) {
        baseTitle = "对赌哗然";
        setting = `在全城瞩目的年度行业听证兼对赌大会上。企管内鬼 ${opponentName} 头戴金丝眼镜，带头哗众喧哗起哄，疯狂地耻笑你接盘这个破产商场是白白等倒闭、自误前途。`;
      } else if (stepIndex === 1) {
        baseTitle = "洋图逼驳";
        setting = `在金碧辉煌的亚太总部招商大堂上。高傲骄蛮的大中华总代理 ${opponentName} 当着随员，将你和林助理的心血企划案直砸入纸篓，极度冷漠地强要你现在拿出无懈可击客流量支撑来，否则拒绝招商。`;
      } else if (stepIndex === 2) {
        baseTitle = "高估压盘";
        setting = `在总部核心合议室，总常务副总裁带着海归审计师 ${opponentName} 拍着损益财务大报，当众讥刺你们重更企划纯属脑残异想天开，大声叱呵，限时一刻钟内逼你主动交印离职。`;
      } else if (stepIndex === 3) {
        baseTitle = "金沙对冲";
        setting = `在一线奢华大牌云聚的主编招商高端酒桌上。不友善的竞争对手百系集团董事长 ${opponentName} 杯不停杯，当着一众品牌高定会长的面，极尽嘲弄说你不论是背景还是文化皆属二等。`;
      } else if (stepIndex === 4) {
        baseTitle = "银主逼约";
        setting = `由于内鬼搞鬼挪走储备金，傲慢自大的银行银主 ${opponentName} 朝你办公桌重摔催促还款书，冷笑着宣称如果没有十亿保证，将立刻按合同封查商场地契图卷并强收地。`;
      } else if (stepIndex === 5) {
        baseTitle = "水军砸场";
        setting = `商业敌手雇了名不经传的数据评估黑客 ${opponentName}，在财经平台放出恶意剪辑文，大肆宣告各商户已经大举撤橱。面对业主和林助理的惊慌，对家在会客厅阴冷看戏。`;
      } else if (stepIndex === 6) {
        baseTitle = "重选恶意";
        setting = `在集团超级股东股权变配大堂里。居心不轨的金融巨鳄 ${opponentName} 联合外戚亲戚，百般耻笑你的商管现金流早已严重赤字崩溃，威逼利诱想强行在半分钟内恶意吞下整盘股印。`;
      } else if (stepIndex === 7) {
        baseTitle = "账务大雷";
        setting = `年末总部闭门大审计，气氛冷杀。分管二常务当场抛出伪造的一大叠账册，上面凭空列出了千万元的坏账。财务督察 ${opponentName} 心怀不轨地逼你当堂辩明，企图当堂送警。`;
      } else if (stepIndex === 8) {
        baseTitle = "媒体逼问";
        setting = `商场周年庆狂喜重典上黑幕风波突起。竞争对头买通的恶意周刊名记 ${opponentName} 带领二十台摄影长枪短炮将话筒狂捅你胸前，尖锐刁刻地诱导，逼你承认账上现金彻底枯竭。`;
      } else {
        baseTitle = "商帝临冕";
        setting = `在百家富商巨头、千亿财富主宰峰会的金星台上！宿敌巨头董事长 ${opponentName} 带着大批勾结的旧部做苏死挣扎，公然傲笑质疑你绝对不可能拿出百年唯一授权极品协议，大声哄退你。`;
      }
      break;

    case "detective_deduction":
      if (stepIndex === 0) {
        baseTitle = "庄馆拍案";
        setting = `在风雨交加、暴雷阵阵的封闭老庄园大厅里。男爵 ${opponentName} 疯狂拍着桌子辱骂你多管闲事，一旁的老督察也是黑沉着白脸，当面极度轻蔑嘲笑你是一无所解、浪费时间的探案毛头小子。`;
      } else if (stepIndex === 1) {
        baseTitle = "深夜枭封";
        setting = `深夜寒雾重重罩。一号案发现场。贪婪的黑市文物倒卖手 ${opponentName} 握着那封刚被枭鸟送来的神秘密信纸，得意冷言大笑，声称你便是用两百年脑力也破查不出纸上半个字母的意思。`;
      } else if (stepIndex === 2) {
        baseTitle = "督察黑受";
        setting = `凶案重点长廊警戒拉索。收取重金的败类督察 ${opponentName} 极力在前面阻截你与助手华生查勘现场，拍着胸脯佩章狂言威胁你没有警令直接犯禁，立刻要拘捕你。`;
      } else if (stepIndex === 3) {
        baseTitle = "药辩狡诡";
        setting = `钟楼密室案突现。心狠手毒的配药推销员 ${opponentName} 指着地上的空药瓶，大声反辩，非信誓旦旦声称里面的成分是普通感冒药水、绝无含毒，讽刺你的法医报告全是捏造。`;
      } else if (stepIndex === 4) {
        baseTitle = "阴渠人质";
        setting = `在极其阴暗、恶臭难当的地下水道死角。凶残歹毒的买主 ${opponentName} 手端冰冷猎枪、抵着被绑架的华生的大好头颅，狞笑不止指使，威逼你当场交出写满血案契书的铁册。`;
      } else if (stepIndex === 5) {
        baseTitle = "法医吹毛";
        setting = `苏格兰场停尸间充满足温。极度自矜高傲的法医官 ${opponentName} 手枕白大褂，傲笑驳斥你的隐藏伤处论，坚称死者全是意外突发心梗自然而死，大肆斥责你无物理学识。`;
      } else if (stepIndex === 6) {
        baseTitle = "篡改遗契";
        setting = `老王公在寝宫内暴毙，分产争夺大战。贪婪狂躁的侄女婿 ${opponentName} 拿出一大叠极富条理、明显篡改的古书遗册，警察局手下更作爪伥，逼迫你这个外人立刻闭嘴签名然后走开。`;
      } else if (stepIndex === 7) {
        baseTitle = "血影码头";
        setting = `在风高雨烈、空寂漆黑的废弃码头。满面血腥在逃悍凶 ${opponentName} 擦着弹壳，得意而狰狞朝被绑捆的${companionName}开冷枪，放声狂笑说不仅是你，便是全苏警也玩弄于其股掌，逼你跪下。`;
      } else if (stepIndex === 8) {
        baseTitle = "密码劫夺";
        setting = `银行失窃，现场只留一行密码。犯罪帝国高干 ${opponentName} 带着打手黑压压合阻前路，皮笑肉不笑冷嘲你毫无智慧解破此条密码，限你三秒束手就擒。`;
      } else {
        baseTitle = "百年大诉";
        setting = `在威严、大理石铺红地毯的最高皇家审判殿堂前！罪人 ${opponentName} 带着大批高级国际律师，面带胜利微笑嘲笑你的控告全是非法造谣，大法官一拍法槌，命令你拿出无可置疑的铁证。`;
      }
      break;

    default:
      baseTitle = `初显才智`;
      setting = `在浩瀚茫茫的星际神轨中。${opponentName}拦阻在前，大声质问你如何通过这道神刻结界考验。`;
  }

  let title = "";
  if (isBranch) {
    title = `【${scenarioId === "ancient_palace" ? "大宅" : scenarioId === "imperial_court" ? "后宫" : isBranch ? "支线" : "逸事"}支线 · 逸事探奇】第 ${index + 1} 幕 · ${baseTitle}`;
  } else {
    title = `【第 ${levelNum} 关 · 第 ${index + 1} 幕】${baseTitle}`;
  }

  return { title, setting };
}

// Packages the text and scenarios into rich cohesive story segments for UI mapping
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

  const items = wordList.map((w, index) => {
    const match = getAdaptedWordSentence(w.word, scenarioId);
    const enSentence = match ? match.sentence : "";
    const zhTranslation = match ? match.translation : "";
    const hybridSentence = getHybridSentence(w, zhTranslation);
    
    const opponentName = getOpponentName(scenarioId, levelNum);
    const companionName = scenario.companionName;

    // Linearly advance through the 10 distinct scenes based on word index and level!
    // Each of the 5 words in a level maps to a completely distinct consecutive step (0, 1, 2, 3, 4, etc.)!
    // Level 1 ALWAYS starts at step 0 (the prologue/entry plot of the scenario)!
    const stepIndex = ((levelNum - 1) * 5 + index) % 10;
    const { title, setting } = getScenarioSettingAndTitle(
      scenarioId,
      levelNum,
      index,
      stepIndex,
      opponentName,
      companionName,
      selfTitle,
      partnerPronoun,
      sonOrDaughter,
      isBranch
    );

    // Evaluate targets to construct an immensely coherent dialogue bridge
    let bridge = "";
    const lowerTranslation = zhTranslation.toLowerCase();
    const lowerEn = enSentence.toLowerCase();

    const isBusiness = 
      lowerTranslation.includes("公司") || 
      lowerTranslation.includes("利润") || 
      lowerTranslation.includes("市场") || 
      lowerTranslation.includes("合同") || 
      lowerTranslation.includes("基金") || 
      lowerTranslation.includes("资金") || 
      lowerTranslation.includes("财务") || 
      lowerTranslation.includes("报告") || 
      lowerTranslation.includes("银行") || 
      lowerTranslation.includes("股票") || 
      lowerTranslation.includes("商业") ||
      lowerTranslation.includes("证券") ||
      lowerTranslation.includes("地契") ||
      lowerTranslation.includes("账目") ||
      lowerEn.includes("company") ||
      lowerEn.includes("market") ||
      lowerEn.includes("profit") ||
      lowerEn.includes("financial") ||
      lowerEn.includes("business") ||
      lowerEn.includes("contract") ||
      lowerEn.includes("report");

    const isPerson = 
      lowerTranslation.includes("他") || 
      lowerTranslation.includes("她") || 
      lowerTranslation.includes("你") || 
      lowerTranslation.includes("我") || 
      lowerTranslation.includes("人") || 
      lowerTranslation.includes("性格") || 
      lowerTranslation.includes("勤") || 
      lowerTranslation.includes("谦") || 
      lowerTranslation.includes("才") || 
      lowerTranslation.includes("德") || 
      lowerTranslation.includes("品") || 
      lowerTranslation.includes("傲") ||
      lowerTranslation.includes("志") ||
      lowerEn.includes("he ") ||
      lowerEn.includes("she ") ||
      lowerEn.includes("they") ||
      lowerEn.includes("people") ||
      lowerEn.includes("person") ||
      lowerEn.includes("character");

    const bridgeIndex = index % 3;

    if (isBusiness) {
      if (bridgeIndex === 0) {
        bridge = `你慢条斯理、神色淡定自若，直接了当地抛出了关键地契账单与绝密商务原本，上面的那段记录明明白白地昭示着：<b>“${hybridSentence}”</b> 如此白纸黑字铁证如山，叫挑衅者脸色大变、惊惧万分！`;
      } else if (bridgeIndex === 1) {
        bridge = `你抬手指引全场核对账契，当众朗然高声诵读出这段独占性极其强烈、无懈可击的数据原本：<b>“${hybridSentence}”</b> 这一针见血的信息登时切断了对家伪造凭证的退路！`;
      } else {
        bridge = `你嘴角含笑迎上对方的刺探，气定神闲，甩出一纸契据并清晰背诵出写在正中央的那句密典原判：<b>“${hybridSentence}”</b> 此番洞悉彻底平息了不友好的哄笑！`;
      }
    } else if (isPerson) {
      if (bridgeIndex === 0) {
        bridge = `你当众挺胸，借由此番德操义理反向逼视对方的无能，不卑不亢地吐露真纯：<b>“${hybridSentence}”</b> 如此傲雪凌霜的大义言词，宛如无形大掌扇在刁难者皮笑肉不笑的脸上！`;
      } else if (bridgeIndex === 1) {
        bridge = `面对不自量力的责难，你气度飘逸高旷，顺口吟诵名篇古卷，借赞誉贤人的典故大巧反讽：<b>“${hybridSentence}”</b> 惊才绝绝，直叫那些居心叵测之人无地自容、冷汗直流！`;
      } else {
        bridge = `你双眸微阖，神情清雅，冷冷说出这旬考验修身品行的名宿真诠，正面斥退了宿敌的觊觎：<b>“${hybridSentence}”</b> 铿锵有力，震慑得周围挑事之辈面如死灰！`;
      }
    } else {
      if (bridgeIndex === 0) {
        bridge = `你轻摆衣袂，潇洒昂首，当场念出这行天书典籍里高妙绝伦、蕴含宏大哲理天道的核心论述作为还击：<b>“${hybridSentence}”</b> 言浅意深，将那股蓄意的嚣张气焰彻底熄灭在未萌之时！`;
      } else if (bridgeIndex === 1) {
        bridge = `你目光如炬，瞬间捕捉到了宿敌指控中逻辑溃散的大雷。你冷笑着回以先贤警句和深刻推演：<b>“${hybridSentence}”</b> 犹如春雷滚滚，生生敲断了对方无妄盘考的阴冷戏谑！`;
      } else {
        bridge = `你大方负手傲立庭前，迎着满堂或是极度怀疑或是幸灾乐祸的视线，字字铿锵地反击道：<b>“${hybridSentence}”</b> 宏大誓言如惊雷拍案，令周围的反派心惊肉跳，不寒而栗！`;
      }
    }

    const intro = `${title}\n\n${setting}\n\n${bridge}`;
    const choicePrompt = `请结合以上语段情境与大义，选择学修核心词【${w.word}】的正确简体中文释义：`;

    return {
      intro,
      wordInContext: w.word,
      choicePrompt,
      climaxTitle: `💥 终极决斗：正面突围！`,
      climaxIntro: `危机时刻降临！你与本关卡的棘手宿敌面对面正面遭遇，他们正发动不择手段的盘问。你必须在完全随机的单词问答连胜中连克数关（将刚刚学到的单词全部一网打尽并答对），才能挫败对方，解围翻盘并赢取丰盛战利品！`,
      rewardIntro: `恭喜！在${scenario.companionName}由衷的赞叹声中，你成功驳倒了反派，赢取了大量「${scenario.currencyName}」！商店的道具和物资已全新到货，快去补充助战防身道具或乘胜追击解救更多困局吧！`,
      opponentName: getOpponentName(scenarioId, levelNum)
    };
  });

  return items;
}

// Generates an array of non-repetitive opponents tailored to each level iteration
export function getOpponentName(scenarioId: string, levelNum: number): string {
  const list: Record<string, string[]> = {
    ancient_palace: ["阴险毒辣的嫡母大娘", "傲慢刻薄的二小姐", "笑里藏刀的王妈妈", "心胸狭隘的大少爷", "极力阻挠的势利大管家"],
    imperial_court: ["嚣张跋扈的丽贵妃", "居心叵测的高女官", "欺软怕硬的御膳房总管", "高傲冷淡的考功女御", "深嫉你才貌的竞争秀女"],
    modern_city: ["暗中使绊子的竞争实习生", "刻板暴躁的项目高级副总裁", "百般刁难的乙方甲方代表", "眼高于顶的高傲投资大佬", "同行探听秘密的高级商业间谍"],
    college_life: ["全校人送严罗王的张教授", "傲慢轻视你的学科全能社长", "隔壁理工高校的高傲辩论队长", "铁面无私、不通情理的宿管阿姨", "经常抓学生典型考核的体育组长"],
    fantasy_adventure: ["残暴嗜血的森林哥布林祭司", "贪婪阴险的被遗弃亡灵巫妖", "重创凡人的遗迹古树泥巨人", "黑巫魔教高层狂热魔导师", "高傲盘旋在遗迹深渊的暗影红龙"],
    showbiz_superstar: ["眼高于顶、见钱眼开的项目副导演", "处处抢你资源的同期小鲜肉/小花", "常年抹黑你的水军头目", "傲慢资本大财团执行董事", "打压你的竞争对头娱乐机构掌权人"],
    husband_rebound: ["常年刻薄作呕、骂你废物的丈母娘", "冷艳而轻视你、暗中出墙的大姨子", "极力想吞食财产的阴损表哥", "瞧低你、冷嘲热讽的林家长辈", "企图暗算你的当地势利无赖黑心商人"],
    wuxia_jianghu: ["昆仑叛徒、行事残忍的恶门少主", "擅长使毒的唐门叛逆刺客护法", "横行江湖、烧杀抢掠的悍匪老刀", "黑道一流杀手阁大剑师", "垂涎你们师门秘笈的伪君子掌门"],
    mall_empire: ["贪污公款并吃里扒外的商场前任采购内鬼", "故意刁难你、试图看你损败的分管常务", "极度挑剔且出言不逊的大租户总代理", "常青藤高冷海归傲慢估值师", "企图收购你们购物广场的对头董事"],
    detective_deduction: ["满口谎言、伪造在场证据的庄园男爵", "在夜雾中劫持人质的亡命杀手", "收受黑钱、包庇歹徒的腐败巡警督察", "手段狠辣、贩卖禁药的黑市配药推销员", "莫里亚蒂暗中安插的高智商犯罪骨干"]
  };
  const array = list[scenarioId] || ["高傲的考核官"];
  return array[(levelNum - 1) % array.length];
}
