export enum WordBookType {
  CET4 = "CET-4 (英语四级)",
  CET6 = "CET-6 (英语六级)",
  IELTS = "IELTS (雅思)",
  TOEFL = "TOEFL (托福)",
  TEM8 = "TEM-8 (专业八级)"
}

export type WordId = string;

export interface Word {
  word: string;
  phonetic: string;
  meaning: string;
  distractors: string[]; // 3 distractors
}

export interface WordBook {
  id: string;
  name: WordBookType;
  words: { [word: string]: Word };
}

export interface ScenarioContext {
  id: string;
  name: string;
  description: string;
  companionName: string;
  companionTitle: string;
  companionIntro: string;
  currencyName: string;
  currencyIcon: string;
  accentColor: string; // Tailwind color class or hex, e.g., "emerald" / "cyan"
  bgGradient: string; // CSS bg gradient, e.g., "from-amber-950 to-stone-900"
  textCol: string; // text-emerald-400
  cardBg: string; // bg-stone-900/90
}

export interface UserAccount {
  username: string;
  gender: "男" | "女";
  selectedBook: string; // One of WordBookKeys
  selectedScenario: string; // One of ScenarioContextIds
  unlockedLevel: number; // 1 to 10
  unlockedBranches: string[]; // List of unlocked branch level IDs
  completedLevels: number[]; // List of completed main levels (1 to 10)
  completedBranches: string[]; // List of completed branch level IDs
  coins: number;
  inventory: { [itemId: string]: number }; // itemId -> quantity
  streak: number;
  lastCheckIn: string; // YYYY-MM-DD
  learnedWords: string[]; // words learned so far
  wordStats: { [word: string]: { correct: number; wrong: number } }; // track word performance
}

export interface Level {
  levelNumber: number; // 1 to 10
  isMain: boolean;
  name: string;
  description: string;
  words: string[]; // Word strings tested in this level
}

export interface BranchLevel {
  id: string; // e.g. "branch_1", "branch_2"
  unlockedByLevel: number; // e.g. level 2 unlocks branch_2
  name: string;
  description: string;
  words: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
}

export interface ExamQuestion {
  id: string;
  type: "reading" | "listening" | "cloze";
  year: string; // e.g., "2024年6月真题"
  source: string; // e.g., "CET-4 真题"
  passage: string; // reading text or listening script
  dialogue?: string; // for listening, simulated audio script
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}
