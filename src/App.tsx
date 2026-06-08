import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Sparkles,
  Map as MapIcon,
  ShoppingBag,
  FileText,
  MessageSquare,
  Award,
  Flame,
  Coins,
  LogOut,
  Heart,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  Plus,
  Search,
  User,
  RefreshCw,
  Compass,
  HelpCircle,
  Send,
  Volume2,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Sword,
  Sliders,
  ChevronDown
} from "lucide-react";
import { WordBookType, Word, ScenarioContext, UserAccount, Level, ShopItem, ExamQuestion, ChatMessage } from "./types";
import { WORD_BOOKS, SCENARIOS, SHOP_ITEMS, EXAM_QUESTIONS, generateStoryContent, getOpponentName } from "./data";
import { TOTAL_LEVELS, getLevelPosition, selectWordsForLevel, getZoneName } from "./utils/mapUtils";
import { WORD_SENTENCES } from "./sentences";
import ScenarioChart from "./components/ScenarioChart";
import AccountPanel from "./components/AccountPanel";

export default function App() {
  // --- MULTI-ACCOUNT PROFILE STATES ---
  const [profiles, setProfiles] = useState<{ [username: string]: UserAccount }>({});
  const [activeUsername, setActiveUsername] = useState<string | null>(null);
  const [account, setAccount] = useState<UserAccount | null>(null);

  // Core navigation tab
  const [activeTab, setActiveTab] = useState<"map" | "novel" | "shop" | "exam" | "vocabulary" | "ai_chat" | "settings">("map");

  // Registration selection inputs
  const [tempUsername, setTempUsername] = useState("");
  const [tempGender, setTempGender] = useState<"男" | "女">("男");
  const [tempBook, setTempBook] = useState<WordBookType>(WordBookType.CET4);
  const [tempScenario, setTempScenario] = useState<string>("ancient_palace");

  const [vocabFilter, setVocabFilter] = useState<"learned" | "wrong" | "all">("all");

  // Gameplay Flow States (for interactive reading / duel)
  const [currentLevelId, setCurrentLevelId] = useState<{ num: number; isBranch: boolean } | null>(null);
  const [novelStep, setNovelStep] = useState<number>(0);
  const [isOptionOverlayOpen, setIsOptionOverlayOpen] = useState(false);
  const [storySegmentWords, setStorySegmentWords] = useState<Word[]>([]);
  const [storyNarratives, setStoryNarratives] = useState<any[]>([]);
  const [wrongOptionFeedback, setWrongOptionFeedback] = useState<string | null>(null);

  // Climax Duel Combat States
  const [isDuelMode, setIsDuelMode] = useState(false);
  const [duelMainQueue, setDuelMainQueue] = useState<{ word: Word; type: "en_to_cn" | "cn_to_en" }[]>([]);
  const [duelActiveIndex, setDuelActiveIndex] = useState<number>(0);
  const [duelWrongCount, setDuelWrongCount] = useState<number>(0);
  const [duelOpponentHP, setDuelOpponentHP] = useState<number>(100);
  const [duelMyHits, setDuelMyHits] = useState<number>(0);
  const [duelTotalTarget, setDuelTotalTarget] = useState<number>(1);
  const [duelLog, setDuelLog] = useState<string>("");
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [doubleCoinActive, setDoubleCoinActive] = useState(false);

  // Level Selection Pop-up modal state
  const [selectedMapNode, setSelectedMapNode] = useState<{ num: number; isBranch: boolean } | null>(null);

  // Exam states
  const [currentExamIndex, setCurrentExamIndex] = useState<number>(0);
  const [selectedExamAnswer, setSelectedExamAnswer] = useState<number | null>(null);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [examTotalCount, setExamTotalCount] = useState<number>(0);
  const [integratedExamLevel, setIntegratedExamLevel] = useState<number | null>(null);

  // Vocabulary review state
  const [vocabSearch, setVocabSearch] = useState("");
  const [activeVocabWord, setActiveVocabWord] = useState<Word | null>(null);

  // Leaderboard data
  const [leaderboard, setLeaderboard] = useState<any[]>([
    { name: "李清照_穿越客", score: 1850, level: 32, scenario: "ancient_palace" },
    { name: "赛博老司机_V", score: 1690, level: 27, scenario: "cyberpunk" },
    { name: "霍格沃茨学霸", score: 1420, level: 16, scenario: "fantasy_adventure" },
    { name: "贝克街警探", score: 1210, level: 12, scenario: "detective_deduction" }
  ]);

  // AI companion role-play states
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [aiLoading, setAiLoading] = useState(false);

  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Map overworld scrolling elements ref
  const mapViewportRef = useRef<HTMLDivElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // --- PERSISTENCE: INDEPENDENT MUTLI-ACCOUNT PROFILE MANAGER ---
  useEffect(() => {
    const savedProfilesStr = localStorage.getItem("timestream_profiles_v2");
    const savedActiveStr = localStorage.getItem("timestream_active_username_v2");

    let initialProfiles: { [username: string]: UserAccount } = {};
    let initialActive: string | null = null;

    if (savedActiveStr && savedProfilesStr) {
      try {
        initialProfiles = JSON.parse(savedProfilesStr);
        initialActive = savedActiveStr;
      } catch (e) {
        console.error("解析本地多账户档案失败", e);
      }
    } else {
      // Automatic migration key translation
      const legacySave = localStorage.getItem("timestream_english_account");
      if (legacySave) {
        try {
          const parsed = JSON.parse(legacySave);
          if (parsed && parsed.username) {
            initialProfiles[parsed.username] = parsed;
            initialActive = parsed.username;
          }
        } catch (e) {
          console.error("迁移历史存档失败", e);
        }
      }
    }

    // Ensure safety of every loaded profile structure by sanitizing defaults
    Object.keys(initialProfiles).forEach(key => {
      const prof = initialProfiles[key];
      if (prof) {
        initialProfiles[key] = {
          ...prof,
          unlockedLevel: prof.unlockedLevel ?? 1,
          unlockedBranches: prof.unlockedBranches ?? [],
          completedLevels: prof.completedLevels ?? [],
          completedBranches: prof.completedBranches ?? [],
          coins: prof.coins ?? 200,
          inventory: {
            eraser: 1,
            shield: 1,
            double_coin: 0,
            teleport_scroll: 0,
            ...(prof.inventory || {})
          },
          streak: prof.streak ?? 1,
          learnedWords: prof.learnedWords ?? [],
          wordStats: prof.wordStats ?? {}
        };
      }
    });

    setProfiles(initialProfiles);
    setActiveUsername(initialActive);
    if (initialActive && initialProfiles[initialActive]) {
      setAccount(initialProfiles[initialActive]);
      // Save sanitized version back to persist
      localStorage.setItem("timestream_profiles_v2", JSON.stringify(initialProfiles));
      localStorage.setItem("timestream_active_username_v2", initialActive);
    }
  }, []);

  const saveAccount = (updated: UserAccount) => {
    setAccount(updated);
    const updatedProfiles = { ...profiles, [updated.username]: updated };
    setProfiles(updatedProfiles);
    localStorage.setItem("timestream_profiles_v2", JSON.stringify(updatedProfiles));
    localStorage.setItem("timestream_active_username_v2", updated.username);
    setActiveUsername(updated.username);
  };

  // Helper inside dueling to record word performance metrics
  const recordWordAttempt = (wordStr: string, isCorrect: boolean) => {
    if (!account) return;
    const learnedWords = [...(account.learnedWords || [])];
    if (!learnedWords.includes(wordStr)) {
      learnedWords.push(wordStr);
    }
    const wordStats = { ...(account.wordStats || {}) };
    if (!wordStats[wordStr]) {
      wordStats[wordStr] = { correct: 0, wrong: 0 };
    }
    if (isCorrect) {
      wordStats[wordStr].correct += 1;
    } else {
      wordStats[wordStr].wrong += 1;
    }

    saveAccount({
      ...account,
      learnedWords,
      wordStats
    });
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, aiLoading]);

  // Handle Check in (sign in) day count increases
  const handleCheckIn = () => {
    if (!account) return;
    const today = new Date().toISOString().split("T")[0];
    if (account.lastCheckIn === today) {
      alert("今天已经签到过啦，明天继续坚持哦！");
      return;
    }

    let newStreak = account.streak + 1;
    const coinsReward = 60 + newStreak * 15;
    const updated: UserAccount = {
      ...account,
      streak: newStreak,
      lastCheckIn: today,
      coins: account.coins + coinsReward
    };
    saveAccount(updated);
    alert(`签到成功！时空坚持连续 ${newStreak} 天！获得奖励: +${coinsReward} ${getActiveScenario(account.selectedScenario).currencyIcon} ${getActiveScenario(account.selectedScenario).currencyName}`);
  };

  const getActiveScenario = (id: string): ScenarioContext => {
    return SCENARIOS.find(s => s.id === id) || SCENARIOS[0];
  };

  // Onboarding registration form trigger
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUsername = tempUsername.trim() || `时之穿越人_${Math.floor(Math.random() * 9000 + 1000)}`;
    const newAccount: UserAccount = {
      username: finalUsername,
      gender: tempGender,
      selectedBook: tempBook,
      selectedScenario: tempScenario,
      unlockedLevel: 1,
      unlockedBranches: [],
      completedLevels: [],
      completedBranches: [],
      coins: 200,
      inventory: {
        eraser: 1,
        shield: 1,
        double_coin: 0,
        teleport_scroll: 0
      },
      streak: 1,
      lastCheckIn: new Date().toISOString().split("T")[0],
      learnedWords: [],
      wordStats: {}
    };

    saveAccount(newAccount);

    // Initial greeting from selected roleplay companion
    const companion = SCENARIOS.find(s => s.id === tempScenario) || SCENARIOS[0];
    setChatMessages([
      {
        role: "system",
        content: `进入「${companion.name}」时空大背景。专属陪伴守护「${companion.companionName} (${companion.companionTitle})」已载入！`,
        timestamp: new Date().toLocaleTimeString()
      },
      {
        role: "assistant",
        content: `恭喜成功穿越！我是本流波世界的 ${companion.companionName}。在这个世界，只要掌握了英语词汇奥义，就能获取最高尊名！你可以随时呼唤我查询释义，或是针对难点单词进行趣味造句！快在地图中开启你的第一起关卡探访吧！`,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
    setActiveTab("map");
  };

  // MULTI-ACCOUNT INTERACTIVE HOOKS (fed to AccountPanel)
  const handleSwitchProfile = (username: string) => {
    const prof = profiles[username];
    if (prof) {
      setAccount(prof);
      setActiveUsername(username);
      setActiveTab("map");
      const comp = getActiveScenario(prof.selectedScenario);
      setChatMessages([
        {
          role: "system",
          content: `已附身载入账号「${username}」，进入时空「${comp.name}」`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    }
  };

  const handleCreateProfileFromSettings = (newProf: UserAccount) => {
    const updatedProfiles = { ...profiles, [newProf.username]: newProf };
    setProfiles(updatedProfiles);
    saveAccount(newProf);
  };

  const handleUpdateActiveProfile = (updated: UserAccount) => {
    saveAccount(updated);
  };

  const handleResetActiveProgress = () => {
    if (!account) return;
    const copy: UserAccount = {
      ...account,
      unlockedLevel: 1,
      unlockedBranches: [],
      completedLevels: [],
      completedBranches: [],
    };
    saveAccount(copy);
    setSelectedMapNode(null);
    setCurrentLevelId(null);
    setIsDuelMode(false);
  };

  // Text to speech pronunciator
  const triggerAudioSynthesis = (text: string) => {
    if (isPlayingAudio === text) {
      setIsPlayingAudio(null);
      return;
    }
    setIsPlayingAudio(text);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlayingAudio(null);
      utterance.onerror = () => setIsPlayingAudio(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setIsPlayingAudio(null);
      }, 1500);
    }
  };

  // Case-insensitive highlighted word matcher for contextual sentences
  const highlightWordInSentence = (sentence: string, word: string, cssClass: string = "text-indigo-600 bg-indigo-50 font-black px-1.5 py-0.5 rounded border border-indigo-100 font-mono") => {
    if (!word) return sentence;
    try {
      // Escape for safe regex injection
      const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedWord}(e?s|ed|ing|ly)?\\b`, "gi");
      let replaced = sentence.replace(regex, (match) => `<span class="${cssClass}">${match}</span>`);
      if (replaced === sentence) {
        const looseRegex = new RegExp(escapedWord, "gi");
        replaced = sentence.replace(looseRegex, (match) => `<span class="${cssClass}">${match}</span>`);
      }
      return replaced;
    } catch (e) {
      return sentence;
    }
  };

  // --- ACTIVE LEVEL ACTIONS ---
  const launchLevel = (levelNum: number, isBranch: boolean) => {
    if (!account) return;

    const bookWords = WORD_BOOKS[account.selectedBook as WordBookType] || WORD_BOOKS[WordBookType.CET4];
    // Deterministic selection to ensure each of the 200 levels contains distinct vocabulary!
    const wordsForLevel = selectWordsForLevel(bookWords, levelNum, isBranch);

    const narratives = generateStoryContent(
      account.selectedScenario,
      levelNum,
      wordsForLevel,
      isBranch,
      account.gender
    );

    setStorySegmentWords(wordsForLevel);
    setStoryNarratives(narratives);
    setNovelStep(0);
    setIsOptionOverlayOpen(false);
    setWrongOptionFeedback(null);
    setCurrentLevelId({ num: levelNum, isBranch });
    setIsDuelMode(false);
    setSelectedMapNode(null);
    setActiveTab("novel");
  };

  const handleSelectStoryWordMeaning = (selectedIdx: number, correctIdx: number) => {
    const currentWord = storySegmentWords[novelStep];
    const isCorrect = selectedIdx === correctIdx;
    if (currentWord) {
      recordWordAttempt(currentWord.word, isCorrect);
    }

    if (isCorrect) {
      setWrongOptionFeedback(null);
      if (novelStep < storySegmentWords.length - 1) {
        setNovelStep(prev => prev + 1);
        setIsOptionOverlayOpen(false);
      } else {
        // Prepare to trigger duel combat after narrative completions
        initiateClimaxDuel();
      }
    } else {
      setWrongOptionFeedback("释义理解略有偏差，再斟酌一下这道词在对句里的深意...");
    }
  };

  const initiateClimaxDuel = () => {
    const quizQueue: { word: Word; type: "en_to_cn" | "cn_to_en" }[] = [];
    storySegmentWords.forEach(w => {
      quizQueue.push({ word: w, type: Math.random() > 0.5 ? "en_to_cn" : "cn_to_en" });
    });

    const shuffled = [...quizQueue].sort(() => Math.random() - 0.5);

    setDuelMainQueue(shuffled);
    setDuelActiveIndex(0);
    setDuelWrongCount(0);
    setDuelOpponentHP(100);
    setDuelMyHits(0);
    setDuelTotalTarget(shuffled.length);
    setDisabledOptions([]);
    setIsDuelMode(true);
    setDuelLog("宿敌逼视！正向你吐露多轮考核。活用刚刚巩固学懂的生词进行反震吧！");
  };

  const handleDuelAnswer = (selectedWordText: string, correctWordText: string) => {
    const activeQuestion = duelMainQueue[duelActiveIndex];
    if (!activeQuestion) return;

    const isCorrect = selectedWordText === correctWordText;
    recordWordAttempt(activeQuestion.word.word, isCorrect);

    if (isCorrect) {
      const damage = Math.ceil(100 / duelTotalTarget);
      const newHP = Math.max(0, duelOpponentHP - damage);
      setDuelOpponentHP(newHP);
      setDuelMyHits(prev => prev + 1);
      setDisabledOptions([]);

      setDuelLog(`【回答正确】精妙击穿！你熟练念出 ${activeQuestion.word.word} 语法点。对手深受才思重击，防御点下降！`);

      if (duelActiveIndex < duelMainQueue.length - 1 && newHP > 0) {
        setDuelActiveIndex(prev => prev + 1);
      } else {
        handleLevelVictory();
      }
    } else {
      setDuelWrongCount(prev => prev + 1);
      // Spaced repetition penalty: inject wrong word 3 slots later inside battle queue to guarantee mastery!
      const wrongItem = { ...activeQuestion };
      const currentQueue = [...duelMainQueue];

      const targetInsertIndex = Math.min(duelActiveIndex + 4, currentQueue.length);
      currentQueue.splice(targetInsertIndex, 0, wrongItem);

      setDuelMainQueue(currentQueue);
      setDuelTotalTarget(currentQueue.length);
      setDisabledOptions([]);
      setDuelLog(`【防御失败】刚才这题打错啦！该词会被重新埋伏在 3 题后重新对撞，强攻防线！`);

      if (duelActiveIndex < currentQueue.length - 1) {
        setDuelActiveIndex(prev => prev + 1);
      }
    }
  };

  const applyConsumableProp = (propId: string) => {
    if (!account) return;
    if ((account.inventory[propId] || 0) <= 0) {
      alert("库存见底啦，快去街市商店采买！");
      return;
    }

    const activeQuestion = duelMainQueue[duelActiveIndex];
    if (!activeQuestion) return;

    const updatedInv = { ...account.inventory, [propId]: account.inventory[propId] - 1 };

    if (propId === "eraser") {
      const correctAnswer = activeQuestion.type === "en_to_cn" ? activeQuestion.word.meaning : activeQuestion.word.word;
      let foundDistractorIdx = -1;
      for (let i = 0; i < 4; i++) {
        if (i !== 0 && !disabledOptions.includes(i)) {
          foundDistractorIdx = i;
          break;
        }
      }
      if (foundDistractorIdx !== -1) {
        setDisabledOptions(prev => [...prev, foundDistractorIdx]);
        setDuelLog(`🛡️ 消耗道具【擦除错字】：心灵智慧扫过，已为你排除了一个核心错误释义！`);
        saveAccount({ ...account, inventory: updatedInv });
      }
    } else if (propId === "shield") {
      setDuelLog(`🛡️ 消耗道具【免错金盾】：自动规避考问，完美免错并判定过关！`);
      setDuelOpponentHP(prev => Math.max(0, prev - Math.ceil(100 / duelTotalTarget)));
      setDuelMyHits(prev => prev + 1);
      saveAccount({ ...account, inventory: updatedInv });

      if (duelActiveIndex < duelMainQueue.length - 1) {
        setDuelActiveIndex(prev => prev + 1);
      } else {
        handleLevelVictory();
      }
    } else if (propId === "teleport_scroll") {
      setDuelLog(`🛡️ 消耗道具【通关卷轴】：连续解套击穿，直接横扫 3 道难关单词并对敌造成可观伤害！`);
      setDuelOpponentHP(prev => Math.max(0, prev - 35));
      setDuelMyHits(prev => prev + 3);
      saveAccount({ ...account, inventory: updatedInv });

      if (duelActiveIndex + 3 < duelMainQueue.length) {
        setDuelActiveIndex(prev => prev + 3);
      } else {
        handleLevelVictory();
      }
    } else if (propId === "double_coin") {
      setDoubleCoinActive(true);
      setDuelLog(`🛡️ 消耗道具【翻倍神卡】：此战结算奖励翻倍收益获得加持！`);
      saveAccount({ ...account, inventory: updatedInv });
    }
  };

  const handleLevelVictory = () => {
    if (!account || !currentLevelId) return;

    const scenario = getActiveScenario(account.selectedScenario);
    let baseCoins = currentLevelId.isBranch ? 80 : 120;
    if (doubleCoinActive) {
      baseCoins *= 2;
    }

    let nextUnlockedLevel = account.unlockedLevel ?? 1;
    let newCompletedLevels = [...(account.completedLevels || [])];
    let newCompletedBranches = [...(account.completedBranches || [])];

    if (currentLevelId.isBranch) {
      if (!newCompletedBranches.includes(`branch_${currentLevelId.num}`)) {
        newCompletedBranches.push(`branch_${currentLevelId.num}`);
      }
    } else {
      if (!newCompletedLevels.includes(currentLevelId.num)) {
        newCompletedLevels.push(currentLevelId.num);
      }
      if (currentLevelId.num === (account.unlockedLevel ?? 1)) {
        nextUnlockedLevel = Math.min(TOTAL_LEVELS, (account.unlockedLevel ?? 1) + 1);
      }
    }

    // Unlock child branches for all completed even levels!
    const updatedUnlockedBranches = [...(account.unlockedBranches || [])];
    if (!currentLevelId.isBranch && currentLevelId.num % 2 === 0) {
      const branchId = `branch_${currentLevelId.num}`;
      if (!updatedUnlockedBranches.includes(branchId)) {
        updatedUnlockedBranches.push(branchId);
      }
    }

    const updatedAccount: UserAccount = {
      ...account,
      unlockedLevel: nextUnlockedLevel,
      completedLevels: newCompletedLevels,
      completedBranches: newCompletedBranches,
      unlockedBranches: updatedUnlockedBranches,
      coins: account.coins + baseCoins
    };

    saveAccount(updatedAccount);
    setDoubleCoinActive(false);

    alert(`🎉 【闯关凯旋！】\n您成功智胜了时空宿敌【${getOpponentName(account.selectedScenario, currentLevelId.num)}】！\n获得奖励：+${baseCoins} ${scenario.currencyIcon} ${scenario.currencyName}\n时空进度推进，崭新的命运之路已在星图地图中铺开！`);

    setCurrentLevelId(null);
    setIsDuelMode(false);
    setActiveTab("map");
  };

  // --- MAIN SHOP MERCHANDISE ---
  const handleBuyShopItem = (item: ShopItem) => {
    if (!account) return;
    if (account.coins < item.cost) {
      alert(`时空财富库存不足！当前仅积蓄金币 ${account.coins}，买不起价值 ${item.cost} 的好物。`);
      return;
    }

    const updatedInventory = {
      ...account.inventory,
      [item.id]: (account.inventory[item.id] || 0) + 1
    };

    const updatedAccount: UserAccount = {
      ...account,
      coins: account.coins - item.cost,
      inventory: updatedInventory
    };

    saveAccount(updatedAccount);
    alert(`🛒 购买成功！获得: ${item.name} x1！可随时在决斗考核时注入辅助。`);
  };

  // --- EXAM ROOM CHANNELS ---
  const launchExam = () => {
    if (!account) return;
    const questions = EXAM_QUESTIONS[account.selectedBook as WordBookType] || EXAM_QUESTIONS[WordBookType.CET4];
    if (questions.length === 0) {
      alert("当前的单词书目前在此纪元尚未录入真题考卷。可以多去AI学伴页面进行即时模拟造句测验哦！");
      setActiveTab("map");
      return;
    }
    setIntegratedExamLevel(null);
    setCurrentExamIndex(0);
    setSelectedExamAnswer(null);
    setExamSubmitted(false);
    setExamScore(0);
    setExamTotalCount(questions.length);
  };

  const launchIntegratedExam = (levelNum: number) => {
    if (!account) return;
    const questions = EXAM_QUESTIONS[account.selectedBook as WordBookType] || EXAM_QUESTIONS[WordBookType.CET4];
    if (questions.length === 0) {
      alert("当前的单词书目前在此纪元尚未录入真题考卷。可以多去AI学伴页面进行即时模拟造句测验哦！");
      return;
    }
    const qIndex = Math.floor((levelNum / 5) - 1) % questions.length;
    
    setIntegratedExamLevel(levelNum);
    setCurrentExamIndex(qIndex);
    setSelectedExamAnswer(null);
    setExamSubmitted(false);
    setExamScore(0);
    setExamTotalCount(1);
    setActiveTab("exam");
  };

  const handleSelectExamAnswer = (ansIdx: number) => {
    if (examSubmitted) return;
    setSelectedExamAnswer(ansIdx);
  };

  const submitExamAnswer = () => {
    const questions = EXAM_QUESTIONS[account.selectedBook as WordBookType] || EXAM_QUESTIONS[WordBookType.CET4];
    const item = questions[currentExamIndex];
    if (!item || selectedExamAnswer === null || examSubmitted) return;

    setExamSubmitted(true);
    if (selectedExamAnswer === item.correctAnswerIndex) {
      setExamScore(1);
    } else {
      setExamScore(0);
    }
  };

  const nextExamQuestion = () => {
    const questions = EXAM_QUESTIONS[account.selectedBook as WordBookType] || EXAM_QUESTIONS[WordBookType.CET4];
    
    if (integratedExamLevel !== null) {
      // Handled integrated milestone exam
      const isCorrect = examScore === 1;
      if (isCorrect) {
        const levelNum = integratedExamLevel;
        const rewardValue = 100;
        
        let unlockedVal = account.unlockedLevel;
        const completedSet = [...(account.completedLevels || [])];
        if (!completedSet.includes(levelNum)) {
          completedSet.push(levelNum);
        }
        if (levelNum === account.unlockedLevel) {
          unlockedVal = Math.min(TOTAL_LEVELS, levelNum + 1);
        }
        
        const updated: UserAccount = {
          ...account,
          unlockedLevel: unlockedVal,
          completedLevels: completedSet,
          coins: account.coins + rewardValue
        };
        saveAccount(updated);
        alert(`🎉 恭喜通关第 ${levelNum} 关模考里程碑！\n回答正确！获得关卡奖励：+${rewardValue} 金币！\n新道路已为您铺设，请继续攀登主线图！`);
        setIntegratedExamLevel(null);
        setActiveTab("map");
      } else {
        alert("❌ 模考评评不合格！请点击查看解析进行重新审查，然后再次作答！");
        setSelectedExamAnswer(null);
        setExamSubmitted(false);
        setExamScore(0);
      }
      return;
    }

    if (currentExamIndex < questions.length - 1) {
      setCurrentExamIndex(prev => prev + 1);
      setSelectedExamAnswer(null);
      setExamSubmitted(false);
    } else {
      // Finished all exams
      const rewardValue = 150 + examScore * 30;
      const updated: UserAccount = {
        ...account,
        coins: account.coins + rewardValue
      };
      saveAccount(updated);
      alert(`🎓 真题考评修满！\n答对题数: ${examScore} / ${examTotalCount}\n获得勤学金币：+${rewardValue} 金！`);
      setActiveTab("map");
    }
  };

  // --- AI CHAT COMPANION API PROXY ---
  const handleSendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !account) return;

    const userMsg = chatInput.trim();
    setChatInput("");

    const updatedHistory = [
      ...chatMessages,
      { role: "user" as const, content: userMsg, timestamp: new Date().toLocaleTimeString() }
    ];
    setChatMessages(updatedHistory);
    setAiLoading(true);

    const activeScen = getActiveScenario(account.selectedScenario);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: updatedHistory.slice(-6), // Send last 3 dialogue rounds to keep things fast
          companionName: activeScen.companionName,
          context: activeScen.name,
          book: account.selectedBook,
          userName: account.username,
          level: account.unlockedLevel
        })
      });

      const data = await response.json();
      if (data.reply) {
        setChatMessages(prev => [
          ...prev,
          { role: "assistant", content: data.reply, timestamp: new Date().toLocaleTimeString() }
        ]);
      } else {
        throw new Error("Empty agent reply");
      }
    } catch (e) {
      console.error(e);
      setChatMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: `【连接紊乱】时空灵能波动。由于网络或能量不足，我这里无法传达消息。你可以先前往复习单字，在星图进行连消修炼，或者检查 Settings > Secrets 下是否录入了 GEMINI_API_KEY 作为备用秘轮奥义！`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  const triggerSpeedyAIPrompt = (promptText: string) => {
    setChatInput(promptText);
  };

  // Center map viewport on active level node
  const handleScrollToActiveNode = () => {
    if (!account) return;
    const activeIndex = account.unlockedLevel - 1;
    const { y } = getLevelPosition(activeIndex);
    if (mapViewportRef.current) {
      mapViewportRef.current.scrollTo({
        top: y - 180,
        behavior: "smooth"
      });
    }
  };

  // Trigger scroll focus automatically when entering Map screen
  useEffect(() => {
    if (activeTab === "map" && account) {
      setTimeout(() => {
        handleScrollToActiveNode();
      }, 350);
    }
  }, [activeTab]);

  // Render registration lobby panel if not logged in
  if (!account) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-800 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white border border-slate-200/80 rounded-3xl shadow-xl p-6 md:p-10 space-y-8 animate-fade-in">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-black tracking-wide uppercase font-mono">
              ✨ 沉浸式情境交互背词游戏
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              时空秘境·英语修炼记
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              将经典的英语考纲单词与多维度情境剧情相结合，在学伴守护下，与大宅嫡母、后宫嫔妃、魔教祭司进行热血比拼，快乐背词！
            </p>
          </div>

          <form onSubmit={handleCreateAccount} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 text-left">
                <label className="block text-xs font-bold text-slate-600 font-mono tracking-wider">
                  👤 发起角色时空 ID 昵称
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={15}
                    value={tempUsername}
                    onChange={(e) => setTempUsername(e.target.value)}
                    placeholder="如：赘婿回归、后宫秀儿、魔药巨头"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl text-slate-800 font-bold focus:outline-none placeholder-slate-400 transition-all"
                  />
                  <div className="absolute right-3 top-3 text-[10px] text-slate-400 font-mono font-bold uppercase">
                    必填
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="block text-xs font-bold text-slate-600 font-mono tracking-wider">
                  📖 选择学业方向核心单词书
                </label>
                <select
                  value={tempBook}
                  onChange={(e) => setTempBook(e.target.value as WordBookType)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 text-slate-800 font-extrabold focus:outline-none"
                >
                  <option value={WordBookType.CET4}>{WordBookType.CET4} - 核心词汇精选</option>
                  <option value={WordBookType.CET6}>{WordBookType.CET6} - 六级难度演习</option>
                  <option value={WordBookType.IELTS}>{WordBookType.IELTS} - 雅思通关包袱</option>
                  <option value={WordBookType.TOEFL}>{WordBookType.TOEFL} - 托福高品解析</option>
                  <option value={WordBookType.TEM8}>{WordBookType.TEM8} - 专八卓越秘录</option>
                </select>
              </div>

            </div>

            <div className="space-y-3 text-left">
              <label className="text-xs font-extrabold text-slate-600 font-mono tracking-wide block">
                🌌 契约降临情境主线
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {SCENARIOS.map((sc) => {
                  const isSelected = tempScenario === sc.id;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setTempScenario(sc.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer relative ${
                        isSelected
                          ? "bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/10"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xl block mb-1">{sc.currencyIcon}</span>
                      <h4 className="text-xs font-black text-slate-900 leading-tight">
                        {sc.name.split(" ")[0]}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1 truncate">
                        伴面: {sc.companionName}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {tempScenario && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex gap-3.5 items-start text-left">
                <span className="text-2xl p-2 bg-white rounded-full border border-slate-200">
                  🎎
                </span>
                <div className="space-y-1">
                  <h5 className="text-xs font-extrabold text-slate-800">
                    专属守护陪伴: {getActiveScenario(tempScenario).companionName} ({getActiveScenario(tempScenario).companionTitle})
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    「背景语录」: {getActiveScenario(tempScenario).companionIntro}
                  </p>
                </div>
              </div>
            )}

            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-black rounded-xl shadow-lg shadow-indigo-600/10 transition-all cursor-pointer"
              >
                🚀 缔结时空契约，启航！
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }

  const scenario = getActiveScenario(account.selectedScenario);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-705 flex flex-col font-sans relative">
      
      {/* Dynamic Eye-Safe Soft Slate Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4 z-40 shadow-xs">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-black text-white text-xs select-none">
            {account.username.substring(0, 1).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xs font-black text-slate-900 uppercase">
                {account.username}
              </h2>
              <span className="text-[9px] px-1 bg-indigo-100 text-indigo-700 rounded font-black font-mono">
                LV.{account.unlockedLevel}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">
              修词: <span className="font-bold text-slate-800">{account.selectedBook}</span>
              <span className="mx-1.5 opacity-50">|</span>
              世相: <span className="font-bold text-slate-800">{scenario.name.split(" ")[0]}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Signin checkin button */}
          <button
            onClick={handleCheckIn}
            className="flex items-center gap-1 bg-slate-50 hover:bg-slate-100 border border-slate-250 hover:border-orange-500/30 px-2.5 py-1.5 rounded-lg text-xs font-extrabold text-orange-600 cursor-pointer transition-all shadow-2xs"
          >
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>签到 {account.streak} 天</span>
          </button>

          {/* Wallet */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-250 px-2.5 py-1.5 rounded-lg text-xs font-bold shadow-2xs">
            <span className="text-sm">{scenario.currencyIcon}</span>
            <span className="text-slate-500 font-mono">{scenario.currencyName}:</span>
            <span className="text-emerald-600 font-mono font-black">{account.coins}</span>
          </div>

          <button
            onClick={() => {
              if (window.confirm("确定登出当前账号、返回初始登录大厅吗？(数据会安全保留在您的本地设备)")) {
                localStorage.removeItem("timestream_active_username_v2");
                setAccount(null);
                setCurrentLevelId(null);
                setIsDuelMode(false);
              }
            }}
            className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg cursor-pointer transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

      </header>

      {/* Immersive Game Horizontal Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => { setActiveTab("map"); setCurrentLevelId(null); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "map"
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>游戏地图</span>
            </button>

            <button
              onClick={() => setActiveTab("shop")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "shop"
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>商店</span>
            </button>

            <button
              onClick={() => { setActiveTab("exam"); launchExam(); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "exam" && integratedExamLevel === null
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>模拟考试</span>
            </button>

            <button
              onClick={() => setActiveTab("vocabulary")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "vocabulary"
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>单词本</span>
            </button>

            <button
              onClick={() => setActiveTab("ai_chat")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "ai_chat"
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AI 学伴</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "settings"
                  ? "bg-indigo-650 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>角色契约</span>
            </button>
          </div>

          {/* Compact visual inventory layout in horizontal bar */}
          <div className="flex items-center gap-3 shrink-0 text-[10px] text-slate-500 font-extrabold font-mono bg-slate-50 border border-slate-150 px-2 py-1 rounded-lg">
            <span>🎒 包裹:</span>
            <span>🧽 x{account?.inventory?.eraser ?? 0}</span>
            <span>🛡️ x{account?.inventory?.shield ?? 0}</span>
            <span>♣️ x{account?.inventory?.double_coin ?? 0}</span>
            <span>📜 x{account?.inventory?.teleport_scroll ?? 0}</span>
          </div>
        </div>
      </div>

      {/* Main Full-width Dynamic Workspace Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 pb-20 space-y-6">
        
        {/* Full screen container */}
        <div className="w-full space-y-6">
          
          {/* VIEW 1: MAP AND PROGRESSIVE SCROLL OVERWORLD */}
          {activeTab === "map" && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Dynamic Pentagon attributes scale map with scenario details */}
              <ScenarioChart account={account} scenario={scenario} />

              <div className="bg-white border border-slate-200 p-5 rounded-2xl relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-slate-950">
                      🌌 时流星图 / TIMESTEP MAP (共200关)
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      核心主线沿星轨铺筑延伸，每 5 关可触发一次真题考评里程碑！偶数主线旁蕴藏专属的“支线逸闻”。
                    </p>
                  </div>
                  
                  {/* Floating Action Button to scroll viewport focus back */}
                  <button
                    onClick={handleScrollToActiveNode}
                    className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-black rounded-lg cursor-pointer transition-colors shadow-2xs"
                  >
                    🎯 定位最新关 LV.{account.unlockedLevel}
                  </button>
                </div>
              </div>

              {/* Serpentine 200 Levels Overworld Scroll frame */}
              <div 
                ref={mapViewportRef}
                className="bg-slate-100 border border-slate-250 rounded-3xl p-4 md:p-6 h-[460px] overflow-y-auto relative custom-scrollbar select-none"
              >
                {/* Winding coordinates viewport wrapper */}
                <div className="relative w-[840px] h-[5520px] mx-auto bg-slate-50/50 border border-slate-200 shadow-inner rounded-2xl overflow-hidden pattern-grid-decor">
                  
                  {/* Background svg linking trails */}
                  <svg className="absolute inset-0 pointer-events-none w-full h-full">
                    {/* Draw static serpent road curves */}
                    {(() => {
                      const completedLinePoints: string[] = [];
                      const lockedLinePoints: string[] = [];
                      const activeLvl = account.unlockedLevel;

                      for (let i = 0; i < TOTAL_LEVELS; i++) {
                        const { x, y } = getLevelPosition(i);
                        if (i + 1 <= activeLvl) {
                          completedLinePoints.push(`${x},${y}`);
                        } else {
                          // connect active to locked sequence smoothly
                          if (i === activeLvl - 1) {
                            completedLinePoints.push(`${x},${y}`);
                          }
                          lockedLinePoints.push(`${x},${y}`);
                        }
                      }

                      return (
                        <>
                          {/* Completed glow + road underlay */}
                          {completedLinePoints.length > 1 && (
                            <>
                              <path
                                d={`M ${completedLinePoints.join(" L ")}`}
                                stroke="#a7f3d0"
                                strokeWidth="12"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-40"
                              />
                              <path
                                d={`M ${completedLinePoints.join(" L ")}`}
                                stroke="#10b981"
                                strokeWidth="5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </>
                          )}
                          {/* Locked Slate Roads */}
                          {lockedLinePoints.length > 1 && (
                            <path
                              d={`M ${lockedLinePoints.join(" L ")}`}
                              stroke="#cbd5e1"
                              strokeWidth="4"
                              strokeDasharray="8,8"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-95"
                            />
                          )}
                        </>
                      );
                    })()}
                  </svg>

                  {/* Level circular nodes representation */}
                  {Array.from({ length: TOTAL_LEVELS }).map((_, idx) => {
                    const levelNum = idx + 1;
                    const isCompleted = (account?.completedLevels || []).includes(levelNum);
                    const isUnlocked = levelNum <= (account?.unlockedLevel ?? 1);
                    const isCurrent = levelNum === (account?.unlockedLevel ?? 1);
                    const isMilestone = levelNum % 5 === 0;
                    const hasBranch = levelNum % 2 === 0;
                    const branchId = `branch_${levelNum}`;
                    const isBranchUnlocked = (account?.unlockedBranches || []).includes(branchId);
                    const isBranchCompleted = (account?.completedBranches || []).includes(branchId);
                    
                    const { x, y } = getLevelPosition(idx);

                    return (
                      <div 
                        key={levelNum} 
                        className="absolute flex flex-col items-center justify-center"
                        style={{ left: `${x - 40}px`, top: `${y - 45}px`, width: "80px" }}
                      >
                        {/* Zone checkpoint label indicators */}
                        {levelNum % 50 === 1 && (
                          <span className="absolute -top-[23px] px-2 py-0.5 rounded-full bg-slate-800 text-white text-[8px] font-black uppercase tracking-wider font-mono shadow-md border border-slate-700 z-10">
                            Era: {Math.ceil(levelNum / 50)}
                          </span>
                        )}

                        {/* Node Round Checkpoint or Blue Hexagram Milestone */}
                        <button
                          onClick={() => {
                            if (isUnlocked) {
                              if (isMilestone) {
                                launchIntegratedExam(levelNum);
                              } else {
                                launchLevel(levelNum, false);
                              }
                            } else {
                              alert(`命运迷雾！本大关暂未解锁。请优先斩获 LV.${levelNum - 1} 关卡！`);
                            }
                          }}
                          className={`flex flex-col items-center justify-center transition-all active:scale-95 cursor-pointer relative shadow-lg ${
                            isMilestone
                              ? `w-14 h-14 rounded-2xl border-2 ${
                                  isCompleted
                                    ? "bg-blue-600 border-blue-400 text-white hover:bg-blue-700 shadow-blue-400/20"
                                    : isCurrent
                                    ? "bg-amber-400 border-white text-slate-900 ring-4 ring-amber-400/40 animate-pulse scale-105"
                                    : isUnlocked
                                    ? "bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
                                    : "bg-slate-250 border-slate-350 text-slate-400 cursor-not-allowed select-none opacity-80"
                                }`
                              : `w-11 h-11 rounded-full border-2 ${
                                  isCompleted
                                    ? "bg-emerald-500 border-white text-white hover:bg-emerald-600 shadow-emerald-500/10"
                                    : isCurrent
                                    ? "bg-amber-400 border-white text-slate-950 ring-4 ring-amber-400/30 animate-pulse font-extrabold hover:scale-105"
                                    : isUnlocked
                                    ? "bg-white border-slate-300 text-slate-700 hover:border-indigo-500"
                                    : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed select-none"
                                }`
                          }`}
                        >
                          {isMilestone ? (
                            <div className="flex flex-col items-center -space-y-0.5">
                              <span className="text-sm">🎓</span>
                              <span className="text-[9px] font-mono font-black tracking-tighter">模考·{levelNum}</span>
                            </div>
                          ) : (
                            isCompleted ? "✔" : levelNum
                          )}
                        </button>

                        <span className="text-[9px] font-mono font-extrabold mt-1 text-slate-650 truncate max-w-[80px] text-center">
                          {isMilestone ? (
                            <span className="text-blue-600 font-extrabold">【真题演练】</span>
                          ) : (
                            isCompleted ? "【已修通】" : isCurrent ? "【正攻略】" : "【密封底】"
                          )}
                        </span>

                        {/* Companion avatar indicator floating beside player active position node */}
                        {isCurrent && (
                          <div className="absolute -right-12 -top-1.5 animate-bounce bg-white border-2 border-amber-400 px-1.5 py-0.5 rounded-full shadow-md flex items-center gap-1 z-25">
                            <span className="text-[10px]">🏠</span>
                            <span className="text-[8px] font-black text-amber-700 whitespace-nowrap">{scenario.companionName}</span>
                          </div>
                        )}

                        {/* Branched tasks offsets connected linearly */}
                        {hasBranch && (
                          <div className="absolute top-[52px] flex flex-col items-center bg-purple-50/90 border border-purple-200 p-1 rounded-lg shadow-xs z-15 w-[70px]">
                            <span className="text-[7px] font-black text-purple-700 tracking-wider">支线逸闻</span>
                            <div className="w-full border-t border-dashed border-purple-300 my-0.5" />
                            <button
                              onClick={() => {
                                if (isBranchUnlocked) {
                                  launchLevel(levelNum, true);
                                } else {
                                  alert(`解密失败！该支线探访需要通关 LV.${levelNum} 主线才会开启！`);
                                }
                              }}
                              className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-black cursor-pointer transition-all ${
                                isBranchCompleted
                                  ? "bg-purple-100 text-purple-700 border-2 border-purple-300"
                                  : isBranchUnlocked
                                  ? "bg-purple-600 text-white border-2 border-purple-400 hover:scale-105 shadow hover:bg-purple-700"
                                  : "bg-slate-100 text-slate-400 border border-slate-200 opacity-60"
                              }`}
                            >
                              <span className="text-[9px] font-bold">✨探访</span>
                              <span className="text-[7px] font-mono leading-none">#{levelNum}</span>
                            </button>
                            <span className="text-[8px] text-purple-600 mt-0.5 font-bold leading-none">
                              {isBranchCompleted ? "【已通】" : isBranchUnlocked ? "【开启】" : "【密封】"}
                            </span>
                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Zone descriptions in overworld */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-left">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    🎓 时流纪元风水图
                  </h4>
                  <div className="space-y-1.5 text-[11px] text-slate-600 leading-relaxed">
                    <p><span className="font-extrabold text-emerald-600">纪元 1 (LV.1-50):</span> 刚涉其道。单词难度以四级、通用常用高频词汇为主。</p>
                    <p><span className="font-extrabold text-blue-600">纪元 2 (LV.51-100):</span> 历练身法。包含深度考纲词与短意多译，攻势渐猛。</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-left">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    🎓 极限纪元风水图
                  </h4>
                  <div className="space-y-1.5 text-[11px] text-slate-600 leading-relaxed">
                    <p><span className="font-extrabold text-purple-650">纪元 3 (LV.101-150):</span> 凌绝寰宇。充斥高频雅思、托福科技核心学术词组。</p>
                    <p><span className="font-extrabold text-amber-600">纪元 4 (LV.151-200):</span> 命轮真章。专八殿堂词库倾巢而出，对决宿敌！</p>
                  </div>
                </div>
              </div>

              {/* Map detailed overlay info drawer */}
              {selectedMapNode && (() => {
                const isMilestone = selectedMapNode.num % 5 === 0 && !selectedMapNode.isBranch;
                return (
                  <div className="bg-white border-2 border-indigo-500 p-5 rounded-2xl shadow-xl animate-fade-in text-left space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 font-black text-[10px] rounded ${
                            isMilestone 
                              ? "bg-blue-105 text-blue-800 border border-blue-200" 
                              : selectedMapNode.isBranch 
                              ? "bg-purple-100 text-purple-800" 
                              : "bg-indigo-150 text-indigo-800"
                          }`}>
                            {isMilestone ? "🎓 真题模考里程碑" : selectedMapNode.isBranch ? "支线逸闻" : "主线对决"}
                          </span>
                          <h4 className="text-sm font-black text-slate-900">
                            {isMilestone 
                              ? `迎战 LV.${selectedMapNode.num} 模考评估 —— 【${getOpponentName(account.selectedScenario, selectedMapNode.num)}】的终期听证`
                              : `挑战 LV.${selectedMapNode.num} 对决 —— 【${getOpponentName(account.selectedScenario, selectedMapNode.num)}】`}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {isMilestone
                            ? "本关卡属于每五关一次的真题模考演练！你需要成功作答一道相关的历年经典真题以检验功底、修满通关！"
                            : selectedMapNode.isBranch 
                            ? "支线探险独立于主线，蕴藏低频探索趣味生词，通关能掠获巨额银圆！" 
                            : "主线包含该纪元必会大纲核心词，战胜本关守护者的盘问方可继续推演后续章史。"}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedMapNode(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Level metadata zone indicator */}
                    <div className={`p-3 rounded-xl border text-xs leading-relaxed ${getZoneName(selectedMapNode.num).bg}`}>
                      <span className="font-bold">所属阶段：{getZoneName(selectedMapNode.num).name}</span> —— {getZoneName(selectedMapNode.num).desc}
                    </div>

                    {!isMilestone ? (
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          📝 本关预拟攻打的生词释义大纲 (8词全真演练)：
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {(() => {
                            const bookWords = WORD_BOOKS[account.selectedBook as WordBookType] || WORD_BOOKS[WordBookType.CET4];
                            const subset = selectWordsForLevel(bookWords, selectedMapNode.num, selectedMapNode.isBranch);
                            return subset.map(w => {
                              return (
                                <span key={w.word} className="px-2 py-1 bg-white border border-slate-200 hover:border-indigo-400 rounded-lg text-[11px] font-mono font-bold text-slate-700">
                                  {w.word}
                                </span>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200 space-y-2">
                        <h5 className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">
                          📝 真题模考速览：
                        </h5>
                        <p className="text-[11px] text-slate-650 leading-relaxed">
                          系统根据您的所选大纲，匹配了历年来该大纲中最真实的真实全考点经典考研、六级或海外选拔选择题。通关本次模考里程碑可获得大额财富奖赏并顺理章成解锁下一主星轨层！
                        </p>
                      </div>
                    )}

                    <div className="flex justify-end gap-3 pt-1">
                      <button
                        onClick={() => setSelectedMapNode(null)}
                        className="px-4 py-2 border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer"
                      >
                        暂缓攻略
                      </button>
                      {isMilestone ? (
                        <button
                          onClick={() => {
                            setSelectedMapNode(null);
                            launchIntegratedExam(selectedMapNode.num);
                          }}
                          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-lg shadow-md transition-colors cursor-pointer"
                        >
                          🎓 立即开始真题演练
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedMapNode(null);
                            launchLevel(selectedMapNode.num, selectedMapNode.isBranch);
                          }}
                          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-lg shadow-md transition-colors cursor-pointer"
                        >
                          🗡️ 立即步入时空剧场
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Simulated leaderboards to make lobby visual environment active! */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl text-left space-y-4 shadow-sm">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Award className="w-5 h-5 text-indigo-650 animate-pulse" />
                  <h4 className="text-xs font-black text-slate-900 tracking-wider">
                    🏆 时空穿越英雄长廊 (本地名誉榜)
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {leaderboard.map((usr, idx) => {
                    return (
                      <div key={usr.name} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-150">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400">#0{idx + 1}</span>
                          <span className="text-xs font-extrabold text-slate-800">{usr.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                          <span>LV.{usr.level} 阶</span>
                          <span className="text-emerald-600 font-bold">{usr.score} 金币</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* VIEW 2: ACTIVE STORY NOVEL & DUEL INTERFACE */}
          {activeTab === "novel" && currentLevelId && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{scenario.currencyIcon}</span>
                  <div className="text-left">
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      正在攻略: {currentLevelId.isBranch ? "【支线探秘】" : "【主线关卡】"} 第 {currentLevelId.num} 关
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1">
                      宿敌守护者: 【{getOpponentName(account.selectedScenario, currentLevelId.num)}】
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (window.confirm("确定退出关卡吗？您当前的回答解套进度将会丢弃哦。")) {
                      setCurrentLevelId(null);
                      setIsDuelMode(false);
                      setActiveTab("map");
                    }
                  }}
                  className="px-3.5 py-1.5 border border-slate-250 text-slate-600 hover:text-slate-900 font-bold hover:bg-slate-50 text-xs rounded-lg transition-all"
                >
                  放弃撤出
                </button>
              </div>

              {/* NOVEL PLAY-ALONG STORIES */}
              {!isDuelMode ? (
                <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 space-y-6 text-left">
                  <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase border-b border-slate-100 pb-2">
                    📖 故事一幕幕展开 —— (进度: {novelStep + 1} / {storySegmentWords.length})
                  </div>

                  <div className="space-y-4">
                    {storyNarratives.slice(0, novelStep + 1).map((seg, idx) => {
                      const isCurrentBlock = idx === novelStep;
                      return (
                        <div
                          key={idx}
                          className={`p-5 rounded-2xl border transition-all ${
                            isCurrentBlock
                              ? "bg-indigo-50/40 border-indigo-200 shadow-md animate-fade-in text-slate-900 text-sm md:text-base font-semibold"
                              : "bg-slate-50/45 border-transparent text-slate-400 select-none opacity-60"
                          }`}
                        >
                          <p 
                            className="indent-6 leading-relaxed mb-3 text-slate-800"
                            dangerouslySetInnerHTML={{
                              __html: highlightWordInSentence(
                                seg.intro,
                                seg.wordInContext,
                                "text-indigo-650 bg-indigo-100/60 font-mono font-black px-1.5 py-0.5 rounded border border-indigo-200 mx-0.5"
                              )
                            }}
                          />

                          {/* Trigger interactive choices only if it is the active step */}
                          {isCurrentBlock && (
                            <div className="mt-4 pt-4 border-t border-slate-200/60 text-left space-y-3">
                              <div className="p-4 bg-indigo-50/20 rounded-2xl border border-indigo-100/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                                <div className="space-y-1 flex-1 text-left">
                                  <span className="text-[11px] font-bold text-indigo-600 block">📚 正在学习核心词：</span>
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-base font-extrabold text-slate-900">{seg.wordInContext}</span>
                                    <span className="text-xs text-slate-500 font-medium">[{(() => {
                                      const wObj = storySegmentWords[novelStep];
                                      return wObj ? wObj.phonetic.replace(/\//g, "") : "";
                                    })()}]</span>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => triggerAudioSynthesis(seg.wordInContext)}
                                  className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                    isPlayingAudio === seg.wordInContext 
                                      ? "bg-amber-100 text-amber-800 border-amber-300" 
                                      : "bg-white hover:bg-slate-50 border-slate-200 text-slate-600 shadow-sm"
                                  }`}
                                >
                                  <Volume2 className="w-4 h-4" />
                                  <span>{isPlayingAudio === seg.wordInContext ? "音频演绎中..." : "纯正发音"}</span>
                                </button>
                              </div>

                              {!isOptionOverlayOpen ? (
                                <button
                                  onClick={() => setIsOptionOverlayOpen(true)}
                                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-lg shadow"
                                >
                                  🔍 破译该词释义，进入下一段情境！
                                </button>
                              ) : (
                                <div className="space-y-3 animate-fade-in">
                                  <h4 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest pl-1">
                                    请选择正确的简体中文释义：
                                  </h4>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {(() => {
                                      const currentWord = storySegmentWords[novelStep];
                                      if (!currentWord) return null;
                                      const pool = [
                                        { text: currentWord.meaning, isCorrect: true },
                                        ...currentWord.distractors.map(d => ({ text: d, isCorrect: false }))
                                      ];
                                      // Deterministic sorting to prevent layout shuffling flicker
                                      const sorted = [...pool].sort((a,b) => a.text.length - b.text.length);

                                      return sorted.map((opt, oIdx) => {
                                        return (
                                          <button
                                            key={oIdx}
                                            type="button"
                                            onClick={() => handleSelectStoryWordMeaning(sorted.findIndex(x => x.text === opt.text), sorted.findIndex(z => z.isCorrect))}
                                            className="p-3 text-left border border-slate-205 hover:border-indigo-400 bg-white hover:bg-indigo-50/50 rounded-xl text-xs font-black text-slate-705 transition-all cursor-pointer"
                                          >
                                            {opt.text}
                                          </button>
                                        );
                                      });
                                    })()}
                                  </div>

                                  {wrongOptionFeedback && (
                                    <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                                      <AlertCircle className="w-4 h-4" />
                                      <span>{wrongOptionFeedback}</span>
                                    </div>
                                  )}
                                </div>
                              )}

                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* CLIMAX DUEL COMBAT ZONE */
                <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 space-y-6 text-left shadow-md animate-fade-in">
                  
                  {/* Duel stats dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-slate-150 pb-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-black">
                        <span className="text-slate-800 flex items-center gap-1.5">
                          💀 宿敌防线 HP: 【{getOpponentName(account.selectedScenario, currentLevelId.num)}】
                        </span>
                        <span className="text-rose-600 font-mono">{duelOpponentHP}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                        <div
                          className="bg-red-500 h-full transition-all duration-300"
                          style={{ width: `${duelOpponentHP}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-black">
                        <span className="text-slate-800">🎯 修行考核答题圈</span>
                        <span className="text-indigo-650 font-mono">已斩裂: {duelActiveIndex} / {duelMainQueue.length} 词</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                        <div
                          className="bg-indigo-600 h-full transition-all duration-300"
                          style={{ width: `${(duelActiveIndex / (duelMainQueue.length || 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Duel battle logger */}
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-850 rounded-xl text-xs flex gap-2 items-start leading-relaxed shadow-2xs">
                    <span className="text-base animate-pulse">⚔️</span>
                    <div>
                      <p className="font-extrabold text-[10px] text-indigo-600 font-mono">时空战火记录 (SPACED REPETITION ACTIVE)</p>
                      <p className="mt-0.5">{duelLog}</p>
                    </div>
                  </div>

                  {/* Operational quiz node */}
                  {duelMainQueue[duelActiveIndex] && (
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                      
                      <div className="text-center space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase block">
                          [ 双向对决形态: {duelMainQueue[duelActiveIndex].type === "en_to_cn" ? "英译中" : "中译英"} ]
                        </span>
                        
                        <div className="inline-block p-4 bg-white border border-slate-205 rounded-xl shadow-2xs min-w-[190px]">
                          <h3 className="text-xl font-extrabold text-slate-900 font-mono tracking-wide leading-none py-1">
                            {duelMainQueue[duelActiveIndex].type === "en_to_cn"
                              ? duelMainQueue[duelActiveIndex].word.word
                              : duelMainQueue[duelActiveIndex].word.meaning}
                          </h3>
                          {duelMainQueue[duelActiveIndex].type === "en_to_cn" && (
                            <p className="text-[10px] font-mono text-slate-500 mt-1">
                              {duelMainQueue[duelActiveIndex].word.phonetic}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(() => {
                          const activeQ = duelMainQueue[duelActiveIndex];
                          const correctSol = activeQ.type === "en_to_cn" ? activeQ.word.meaning : activeQ.word.word;

                          const pool = [
                            { text: correctSol, isCorrect: true },
                            ...activeQ.word.distractors.map(d => ({
                              text: activeQ.type === "en_to_cn" 
                                ? d 
                                : WORD_BOOKS[account.selectedBook as WordBookType].find(v => v.meaning === d)?.word || "harmonious",
                              isCorrect: false
                            }))
                          ];
                          const sortedOptions = [...pool].sort((a,b) => a.text.length - b.text.length);

                          return sortedOptions.map((opt, optCardIdx) => {
                            const isDisabled = disabledOptions.includes(optCardIdx);
                            return (
                              <button
                                key={optCardIdx}
                                disabled={isDisabled}
                                onClick={() => handleDuelAnswer(opt.text, correctSol)}
                                className={`p-3 border rounded-xl font-bold text-xs text-center transition-all ${
                                  isDisabled
                                    ? "bg-slate-100 text-slate-350 border-slate-200 line-through cursor-not-allowed opacity-40 animate-fade-out"
                                    : "bg-white text-slate-700 border-slate-205 hover:border-indigo-400 hover:bg-indigo-50/20 active:scale-95 cursor-pointer text-sm"
                                }`}
                              >
                                {opt.text}
                              </button>
                            );
                          });
                        })()}
                      </div>

                    </div>
                  )}

                  {/* Consumable quick row in battle */}
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 font-mono tracking-wider pl-1 uppercase">
                      💡 战局辅助气魄袋 (点击即时生效)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <button
                        onClick={() => applyConsumableProp("eraser")}
                        className="py-1.5 px-3 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center justify-between text-slate-700 cursor-pointer"
                      >
                        <span>🧽 擦除</span>
                        <span className="bg-amber-100 text-amber-850 px-1 rounded font-bold">
                          x{account?.inventory?.eraser ?? 0}
                        </span>
                      </button>

                      <button
                        onClick={() => applyConsumableProp("shield")}
                        className="py-1.5 px-3 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center justify-between text-slate-700 cursor-pointer"
                      >
                        <span>🛡️ 免错金盾</span>
                        <span className="bg-amber-100 text-amber-850 px-1 rounded font-bold">
                          x{account?.inventory?.shield ?? 0}
                        </span>
                      </button>

                      <button
                        onClick={() => applyConsumableProp("double_coin")}
                        className="py-1.5 px-3 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center justify-between text-slate-700 cursor-pointer"
                      >
                        <span>♣️ 翻倍卡</span>
                        <span className="bg-amber-100 text-amber-850 px-1 rounded font-bold">
                          x{account?.inventory?.double_coin ?? 0}
                        </span>
                      </button>

                      <button
                        onClick={() => applyConsumableProp("teleport_scroll")}
                        className="py-1.5 px-3 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center justify-between text-slate-700 cursor-pointer"
                      >
                        <span>📜 連通卷</span>
                        <span className="bg-amber-100 text-amber-850 px-1 rounded font-bold">
                          x{account?.inventory?.teleport_scroll ?? 0}
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* VIEW 3: TIME-BASED SHOP MARKETPLACE */}
          {activeTab === "shop" && (
            <div className="space-y-6 animate-fade-in text-left">
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveTab("map")}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>返回地图</span>
                </button>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row justify-between gap-6">
                <div className="my-auto space-y-1">
                  <span className="inline-flex py-0.5 px-2 bg-indigo-50 text-indigo-750 border border-indigo-200 text-[9px] font-black font-mono rounded-md uppercase">
                    🏪 商店
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    学伴 {scenario.companionName} 的专属小铺
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                    在决战宿敌前，一定要常备保命修得资物！通关主线关卡或参加真题模测即可斩获丰硕的 【{scenario.currencyName}】。
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3 shrink-0 self-start md:self-center shadow-2xs">
                  <span className="text-2xl">{scenario.currencyIcon}</span>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400">您当前的储值：</p>
                    <p className="text-lg font-black font-mono text-emerald-600">
                      {account.coins} <span className="text-xs font-normal text-slate-500">{scenario.currencyName}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Items directory details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SHOP_ITEMS.map((item) => {
                  return (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl p-2.5 bg-slate-50 rounded-xl border border-slate-150">
                          {item.icon}
                        </span>
                        <div className="space-y-1">
                          <h4 className="text-sm font-black text-slate-900">{item.name}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-500">
                          货架价: <span className="text-emerald-600 font-extrabold font-sans text-sm">{item.cost}</span> {scenario.currencyIcon}
                        </span>
                        <button
                          onClick={() => handleBuyShopItem(item)}
                          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-lg cursor-pointer"
                        >
                          即刻兑换
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* VIEW 4: EXAM ROOM PRACTICE */}
          {activeTab === "exam" && (
            <div className="space-y-6 animate-fade-in text-left">
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setIntegratedExamLevel(null);
                    setActiveTab("map");
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>返回地图</span>
                </button>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-2xl relative">
                <span className="absolute right-4 top-4 text-3xl opacity-20">🎓</span>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                  {integratedExamLevel !== null ? `第 ${integratedExamLevel} 关：真题模拟演练` : `模拟考试 (${account.selectedBook})`}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {integratedExamLevel !== null
                    ? "此处为本关所匹配的时空真题模考关卡！答对即能成功斩获当前星轨层并解锁下一主线路口！"
                    : "通关或考评该大纲中收录的考点。回答多选题掌握构词脉络，修满通关，即能获赠丰厚勤学金！"}
                </p>
              </div>

              {(() => {
                const questions = EXAM_QUESTIONS[account.selectedBook as WordBookType] || EXAM_QUESTIONS[WordBookType.CET4];
                const activeQ = questions[currentExamIndex];
                if (!activeQ) return null;

                return (
                  <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 space-y-6">
                    
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-400">
                      <span className="font-mono">[ 模考题 {currentExamIndex + 1} / {questions.length} ]</span>
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 truncate max-w-[200px]">
                        {activeQ.source} · {activeQ.year}
                      </span>
                    </div>

                    {/* Passage box */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-slate-500 font-mono tracking-wider uppercase">
                        Reading & Audio Passage (阅读与听力材料)
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-705 font-medium italic">
                        {activeQ.passage}
                      </p>
                      {activeQ.dialogue && (
                        <p className="text-xs leading-relaxed text-indigo-700 font-bold bg-white p-2.5 rounded border border-indigo-50 mt-1">
                          🎙️ 【听力模拟背景】：{activeQ.dialogue}
                        </p>
                      )}
                    </div>

                    {/* Active Question string */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-indigo-650 font-mono">[ 考评单选题 ]</span>
                      <p className="text-sm font-black text-slate-900 leading-normal">
                        {activeQ.question}
                      </p>
                    </div>

                    {/* Options list */}
                    <div className="space-y-2 pt-1">
                      {activeQ.options.map((option, idx) => {
                        const isSelected = selectedExamAnswer === idx;
                        const isCorrectSelected = examSubmitted && idx === activeQ.correctAnswerIndex;
                        const isWrongSelected = examSubmitted && isSelected && idx !== activeQ.correctAnswerIndex;

                        return (
                          <button
                            key={idx}
                            disabled={examSubmitted}
                            onClick={() => handleSelectExamAnswer(idx)}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                              isCorrectSelected
                                ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                                : isWrongSelected
                                ? "bg-rose-50 border-rose-450 text-rose-800"
                                : isSelected
                                ? "bg-indigo-50 border-indigo-500 text-indigo-900"
                                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-705 cursor-pointer"
                            }`}
                          >
                            <span>{option}</span>
                            {isCorrectSelected && <span className="text-emerald-600 font-black">✔ (正确)</span>}
                            {isWrongSelected && <span className="text-rose-500 font-black">❌ (错误)</span>}
                          </button>
                        );
                      })}
                    </div>

                    {/* Verification / advance button */}
                    <div className="flex justify-end gap-3 pt-2">
                      {!examSubmitted ? (
                        <button
                          onClick={submitExamAnswer}
                          disabled={selectedExamAnswer === null}
                          className={`px-5 py-2 rounded-xl text-xs font-black shadow transition-all ${
                            selectedExamAnswer === null 
                              ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed" 
                              : "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                          }`}
                        >
                          提交回答核对
                        </button>
                      ) : (
                        <button
                          onClick={nextExamQuestion}
                          className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 text-white text-xs font-black rounded-xl shadow cursor-pointer flex items-center gap-1.5"
                        >
                          <span>{currentExamIndex < questions.length - 1 ? "下一题" : "结算考级奖励"}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Detailed explanation markup */}
                    {examSubmitted && (
                      <div className="p-4 bg-emerald-50/50 border border-emerald-150 rounded-2xl space-y-1.5 animate-fade-in text-left">
                        <h5 className="text-[11px] font-bold text-emerald-800 font-mono tracking-wider uppercase">
                          💡 考官详细真题试卷解析 (EXPANATIONS)
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {activeQ.explanation}
                        </p>
                      </div>
                    )}

                  </div>
                );
              })()}

            </div>
          )}

          {/* VIEW 5: VOCABULARY LIST REVIEW */}
          {activeTab === "vocabulary" && (
            <div className="space-y-6 animate-fade-in text-left">
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveTab("map")}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>返回地图</span>
                </button>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900">
                    📘 单词本 ({account.selectedBook})
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    包含已背单词与错词率分析，可配合真人美音发读温习巩固！
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVocabFilter("all")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                      vocabFilter === "all" ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-650"
                    }`}
                  >
                    全部考研库
                  </button>
                  <button
                    onClick={() => setVocabFilter("learned")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                      vocabFilter === "learned" ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-650"
                    }`}
                  >
                    已学生词 ({(account?.learnedWords || []).length})
                  </button>
                  <button
                    onClick={() => setVocabFilter("wrong")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                      vocabFilter === "wrong" ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-650"
                    }`}
                  >
                    错词盲区
                  </button>
                </div>
              </div>

              {/* Research search section */}
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={vocabSearch}
                  onChange={(e) => setVocabSearch(e.target.value)}
                  placeholder="可在此键入英文释义，即时查询词组拼写、音标释义..."
                  className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 focus:border-indigo-500 rounded-2xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none transition-all shadow-2xs"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {(() => {
                  const items = WORD_BOOKS[(account?.selectedBook || WordBookType.CET4) as WordBookType] || WORD_BOOKS[WordBookType.CET4];
                  
                  const filtered = items.filter(w => {
                    // Apply learning database checkpoints
                    if (vocabFilter === "learned" && !(account?.learnedWords || []).includes(w.word)) return false;
                    if (vocabFilter === "wrong") {
                      const stat = (account?.wordStats || {})[w.word];
                      if (!stat || stat.wrong <= 0) return false;
                    }
                    // Apply text queries filters
                    if (vocabSearch.trim() === "") return true;
                    return w.word.toLowerCase().includes(vocabSearch.toLowerCase()) || w.meaning.includes(vocabSearch);
                  });

                  if (filtered.length === 0) {
                    return (
                      <div className="col-span-full py-16 bg-white border border-slate-200 rounded-3xl text-center space-y-2">
                        <span className="text-3xl">☕</span>
                        <p className="text-xs text-slate-400 font-mono">在此检索分类中，尚无符合卡片的单字记录</p>
                      </div>
                    );
                  }

                  return filtered.map(w => {
                    const stats = account.wordStats[w.word];
                    const attemptsError = stats ? stats.wrong : 0;
                    const attemptsSuccess = stats ? stats.correct : 0;

                    return (
                      <div
                        key={w.word}
                        onClick={() => setActiveVocabWord(w)}
                        className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:border-indigo-400 cursor-pointer transition-all space-y-2 hover:shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-black text-slate-900 font-mono">
                            {w.word}
                          </h4>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); triggerAudioSynthesis(w.word); }}
                            className="p-1 rounded hover:bg-slate-100 text-slate-500"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">{w.phonetic}</p>
                        <p className="text-xs text-slate-800 font-extrabold mt-1 truncate">{w.meaning}</p>
                        
                        {/* Attempts count analytics tag */}
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[9px] font-mono font-bold text-slate-550">
                          <span className="text-emerald-600">拼答对: {attemptsSuccess}</span>
                          <span className="text-slate-400">/</span>
                          <span className="text-rose-600">答错绩: {attemptsError}</span>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Vocab drawer details pop-ups */}
              {activeVocabWord && (
                <div className="bg-white border hover:border-slate-300 p-5 rounded-2xl shadow-xl space-y-4 animate-fade-in relative">
                  <button
                    onClick={() => setActiveVocabWord(null)}
                    className="absolute right-4 top-4 text-slate-450 hover:text-slate-700 hover:scale-105 transition-all cursor-pointer"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase block">[ 核心生词词汇详解 ]</span>
                    <h3 className="text-2xl font-mono font-black text-slate-900">{activeVocabWord.word}</h3>
                    <p className="text-xs text-indigo-700 font-bold font-mono">{activeVocabWord.phonetic}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-semibold">
                    💡 【简体中文基本释义】：{activeVocabWord.meaning}
                  </div>

                  {/* Trigger speech synthesis example sentence */}
                  {(() => {
                    const match = WORD_SENTENCES[activeVocabWord.word.toLowerCase()];
                    if (!match) return null;
                    return (
                      <div className="space-y-2 bg-indigo-50/30 p-4 border border-indigo-100 rounded-xl text-left">
                        <span className="text-[10px] font-bold text-indigo-650 block">📖 时空沉浸语境模拟造句演练：</span>
                        <p 
                          className="text-xs text-slate-800 leading-relaxed font-extrabold"
                          dangerouslySetInnerHTML={{ __html: highlightWordInSentence(match.sentence, activeVocabWord.word) }}
                        />
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                          【释义印证】：{match.translation}
                        </p>
                      </div>
                    );
                  })()}

                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => setActiveVocabWord(null)}
                      className="px-5 py-1.5 bg-slate-100 text-slate-700 text-xs font-black rounded-lg hover:bg-slate-200 cursor-pointer"
                    >
                      我已深度领会
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* VIEW 6: CHAT COMPANION ROOM */}
          {activeTab === "ai_chat" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveTab("map")}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>返回地图</span>
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-4 md:p-6 shadow-sm space-y-4 animate-fade-in text-left">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-1 bg-indigo-50 border border-indigo-150 rounded-lg">🎎</span>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">
                        与学伴 「{scenario.companionName}」 连屏即时对话中
                      </h3>
                    <p className="text-[10px] text-slate-500 mt-1">
                      身份设定: {scenario.companionTitle} · 当前情境: 【{scenario.name}】
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setChatMessages([])}
                  className="px-2.5 py-1 text-[10px] border border-slate-250 text-slate-500 rounded-lg font-bold hover:bg-slate-50 cursor-pointer"
                >
                  清屏对话
                </button>
              </div>

              {/* Pre-made quick speech buttons for instant triggers */}
              <div className="flex flex-wrap gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-400 text-[10px] font-bold inline-block self-center px-1 font-mono uppercase">
                  💬 学伴一键提问：
                </span>
                <button
                  type="button"
                  onClick={() => triggerSpeedyAIPrompt("我想测试一下我在本关学习的生词，能跟我做个随机生词听写提问吗？")}
                  className="px-2.5 py-1 bg-white hover:bg-slate-100/70 border border-slate-200 rounded-md font-bold text-slate-750 text-[10px]"
                >
                  🎧 句库生词听写提问
                </button>
                <button
                  type="button"
                  onClick={() => triggerSpeedyAIPrompt(`你能结合「${scenario.name}」故事北京，用一两词造好玩的情境互动英文对话句子并附翻译吗？`)}
                  className="px-2.5 py-1 bg-white hover:bg-slate-100/70 border border-slate-200 rounded-md font-bold text-slate-755 text-[10px]"
                >
                  🎨 沉浸式情境造句对话
                </button>
                <button
                  type="button"
                  onClick={() => triggerSpeedyAIPrompt("推荐一些记忆六级和雅思单词的前缀、后缀规律，我感觉有些记混了。")}
                  className="px-2.5 py-1 bg-white hover:bg-slate-100/70 border border-slate-200 rounded-md font-bold text-slate-755 text-[10px]"
                >
                  💡 单词前缀规律巧思
                </button>
              </div>

              {/* Chat log displays */}
              <div className="h-[320px] overflow-y-auto border border-slate-200 bg-slate-50/50 p-4 rounded-2xl space-y-4 custom-scrollbar">
                {chatMessages.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-2">
                    <span className="text-3xl">🧩</span>
                    <p className="text-xs text-slate-500 font-mono">
                      在这里键入任何英语学业上的疑难，您在本次元的专属学伴「{scenario.companionName}」将予以详细解答！
                    </p>
                  </div>
                ) : (
                  chatMessages.map((msg, i) => {
                    const isSystem = msg.role === "system";
                    const isUser = msg.role === "user";

                    if (isSystem) {
                      return (
                        <div key={i} className="text-center">
                          <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-150 rounded text-[9px] font-mono text-indigo-700 inline-block shadow-2xs">
                            {msg.content}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={i}
                        className={`flex gap-2 w-full max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                      >
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 select-none ${
                          isUser ? "bg-slate-700 text-white" : "bg-indigo-650 text-white"
                        }`}>
                          {isUser ? "👤" : "🎎"}
                        </div>
                        <div className={`p-3.5 rounded-2xl text-xs leading-relaxed space-y-1 shadow-2xs ${
                          isUser 
                            ? "bg-indigo-600 text-white rounded-tr-none" 
                            : "bg-white border border-slate-200 text-slate-805 rounded-tl-none font-medium"
                        }`}>
                          <p className="whitespace-pre-line">{msg.content}</p>
                          <span className={`text-[8px] font-mono block text-right ${isUser ? "text-indigo-200" : "text-slate-400"}`}>
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}

                {aiLoading && (
                  <div className="flex gap-2 mr-auto max-w-[80%]">
                    <div className="w-7 h-7 rounded-full bg-slate-300 flex items-center justify-center text-xs">
                      🎎
                    </div>
                    <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendChatMessage} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={`在此键入向 ${scenario.companionName} 发问，如 "帮我讲解一下 terminate 的用法"...`}
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-2xs"
                />
                <button
                  type="submit"
                  disabled={aiLoading}
                  className="px-5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>发问</span>
                </button>
              </form>

            </div>
          </div>
          )}

          {/* VIEW 7: ACCOUNTS SETTINGS FOR THE ARCHIVE ROOM */}
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveTab("map")}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>返回地图</span>
                </button>
              </div>
              <AccountPanel
                profiles={profiles}
                activeUsername={activeUsername}
                onSwitchProfile={handleSwitchProfile}
                onCreateProfile={handleCreateProfileFromSettings}
                onUpdateActiveProfile={handleUpdateActiveProfile}
                onResetActiveProgress={handleResetActiveProgress}
              />
            </div>
          )}

        </div>

      </main>
    </div>
  );
}
