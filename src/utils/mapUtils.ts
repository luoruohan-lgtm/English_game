import { Word } from "../types";

export const TOTAL_LEVELS = 200;

/**
 * Calculates absolute pixel coordinates for each level node on a serpentine path.
 * We layout the levels on a 5-column winding track to resemble a real overworld track.
 */
export function getLevelPosition(idx: number) {
  const cols = 5;
  const row = Math.floor(idx / cols);
  const colInRow = idx % cols;
  
  // Serpentine path: even rows go left-to-right, odd rows go right-to-left
  const col = row % 2 === 0 ? colInRow : (cols - 1 - colInRow);
  
  // Custom spacing for the overworld grid width of 800px
  const x = 90 + col * 155; 
  const y = row * 135 + 90; 
  
  return { x, y };
}

/**
 * Deterministically retrieves 8-10 words for any given level to ensure progression variety across 200 levels.
 */
export function selectWordsForLevel(allWords: Word[], levelNum: number, isBranch: boolean): Word[] {
  if (!allWords || allWords.length === 0) return [];
  
  const numToSelect = 8;
  const list: Word[] = [];
  
  // Deterministic starting offset unique to this level
  const baseOffset = (levelNum - 1) * 3 + (isBranch ? 7 : 0);
  
  for (let i = 0; i < numToSelect; i++) {
    const idx = (baseOffset + i) % allWords.length;
    const wordCandidate = allWords[idx];
    if (wordCandidate && !list.some(w => w.word === wordCandidate.word)) {
      list.push(wordCandidate);
    }
  }
  
  // Safe backfill if there are missing slots
  if (list.length < Math.min(allWords.length, 5)) {
    for (let i = 0; i < allWords.length; i++) {
      if (list.length >= numToSelect) break;
      if (!list.some(w => w.word === allWords[i].word)) {
        list.push(allWords[i]);
      }
    }
  }
  
  return list;
}

/**
 * Groups the levels into 4 atmospheric zones based on level depth.
 */
export function getZoneName(levelNum: number): { name: string; desc: string; bg: string } {
  if (levelNum <= 50) {
    return { 
      name: "第一纪元 · 时流初旅", 
      desc: "刚刚破开时空之壁的雏行者，在此感应法则，磨炼基本词汇", 
      bg: "bg-emerald-50 text-emerald-800 border-emerald-200" 
    };
  } else if (levelNum <= 100) {
    return { 
      name: "第二纪元 · 锋芒显露", 
      desc: "宿敌攻势逐渐猛烈，你与学伴开始施展更多双剑合击战术", 
      bg: "bg-blue-50 text-blue-800 border-blue-200" 
    };
  } else if (levelNum <= 150) {
    return { 
      name: "第三纪元 · 乾坤浩瀚", 
      desc: "高难核心词汇涌现，这是磨炼商业或魔法咒语的极峰对撞区", 
      bg: "bg-purple-50 text-purple-800 border-purple-200" 
    };
  } else {
    return { 
      name: "第四纪元 · 命轮终焉", 
      desc: "逼近极限真章，携手守护灵契在200里长街重写时空法则", 
      bg: "bg-amber-50 text-amber-800 border-amber-250" 
    };
  }
}
