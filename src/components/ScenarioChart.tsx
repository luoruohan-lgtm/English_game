import React from "react";
import { UserAccount, ScenarioContext } from "../types";
import { Sparkles, User, ShieldAlert } from "lucide-react";

interface ScenarioChartProps {
  account: UserAccount;
  scenario: ScenarioContext;
}

export default function ScenarioChart({ account, scenario }: ScenarioChartProps) {
  // Map attribute names specifically based on scenario context
  const getThematicAttributes = (scenId: string): string[] => {
    switch (scenId) {
      case "ancient_palace":
        return ["宅斗谋略", "学古词汇", "黄金储备", "请安考勤", "掌权声势"];
      case "imperial_court":
        return ["宫禁谋断", "御前词汇", "赏赐珠宝", "奉茶考勤", "秀女品阶"];
      case "modern_city":
        return ["行业信用", "商务考词", "资产储值", "名流打卡", "圈层人脉"];
      case "college_life":
        return ["综合绩点", "学神考词", "助学奖金", "早起签到", "学术地位"];
      case "fantasy_adventure":
        return ["元素法力", "禁咒音节", "魔晶储备", "神契共鸣", "奥术能阶"];
      case "showbiz_superstar":
        return ["狂飙演技", "荧华词汇", "粉丝指数", "跑组出勤", "名气头条"];
      case "husband_rebound":
        return ["扮猪逆袭", "财气难词", "神豪点数", "商业敬业", "威震八方"];
      case "wuxia_jianghu":
        return ["内功深浅", "招式含义", "江湖声望", "山门修功", "武林盟位"];
      case "mall_empire":
        return ["商业宏图", "外贸词汇", "对赌资金", "采购考证", "商场大亨"];
      case "detective_deduction":
        return ["演绎解谜", "破译词印", "探案悬赏", "现场巡视", "贝克名声"];
      default:
        return ["核心谋略", "词汇熟练", "时空财富", "日签考勤", "境界声势"];
    }
  };

  const attrs = getThematicAttributes(scenario.id);

  // Compute stat levels based on real local progress
  const levelsCount = (account?.completedLevels || []).length;
  const learnedCount = (account?.learnedWords || []).length;
  const coinsAmount = account?.coins ?? 0;
  const streakCount = account?.streak ?? 0;
  const rankCount = account?.unlockedLevel ?? 1;

  const getStatValues = (): number[] => {
    // scale coordinates nicely on a 0-100 range
    const s1 = Math.min(100, 30 + levelsCount * 8); // Strategy
    const s2 = Math.min(100, 25 + learnedCount * 2); // Vocabulary
    const s3 = Math.min(100, 20 + coinsAmount / 20);  // Wealth
    const s4 = Math.min(100, 25 + streakCount * 12);  // Checkin
    const s5 = Math.min(100, 30 + rankCount * 3.5);  // General Power
    return [s1, s2, s3, s4, s5];
  };

  const stats = getStatValues();

  // Draw pentagon radar chart coordinates
  const radius = 65;
  const centerX = 110;
  const centerY = 110;

  // Compute pentagon points for standard grids and stat markers
  // Angle for 5-axis: 360/5 = 72 deg = 1.2566 rad
  const getCoordinates = (values: number[]) => {
    const coords = values.map((val, i) => {
      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2; // offset upward
      const r = (val / 100) * radius;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      return { x, y };
    });
    return coords;
  };

  // 100% capacity grid coordinates ring
  const gridCoords100 = getCoordinates([100, 100, 100, 100, 100]);
  const gridCoords75 = getCoordinates([75, 75, 75, 75, 75]);
  const gridCoords50 = getCoordinates([50, 50, 50, 50, 50]);
  const gridCoords25 = getCoordinates([25, 25, 25, 25, 25]);
  const statCoords = getCoordinates(stats);

  const getPointsString = (coords: { x: number; y: number }[]) => {
    return coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  };

  // Label offsets for placing text clearly around the chart
  const labelPositions = [
    { x: centerX, y: centerY - radius - 15, anchor: "middle" }, // Top
    { x: centerX + radius + 15, y: centerY - radius * 0.3, anchor: "start" }, // Top-Right
    { x: centerX + radius * 0.6, y: centerY + radius + 15, anchor: "start" }, // Bottom-Right
    { x: centerX - radius * 0.6, y: centerY + radius + 15, anchor: "end" }, // Bottom-Left
    { x: centerX - radius - 15, y: centerY - radius * 0.3, anchor: "end" }, // Top-Left
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center gap-4">
      {/* Dynamic Polygon Attribute Scale Canvas */}
      <div className="shrink-0 relative">
        <svg className="w-56 h-56" viewBox="0 0 220 220">
          {/* Background grid rings */}
          <polygon
            points={getPointsString(gridCoords100)}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <polygon
            points={getPointsString(gridCoords75)}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="1"
          />
          <polygon
            points={getPointsString(gridCoords50)}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="1"
          />
          <polygon
            points={getPointsString(gridCoords25)}
            fill="none"
            stroke="#f8fafc"
            strokeWidth="1"
          />

          {/* Grid lines connecting axes */}
          {gridCoords100.map((c, idx) => {
            return (
              <line
                key={idx}
                x1={centerX}
                y1={centerY}
                x2={c.x}
                y2={c.y}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}

          {/* Stat area filled polygon */}
          <polygon
            points={getPointsString(statCoords)}
            fill="rgba(16, 185, 129, 0.15)"
            stroke="#10b981"
            strokeWidth="2.5"
          />

          {/* Individual stat nodes */}
          {statCoords.map((c, idx) => {
            return (
              <circle
                key={idx}
                cx={c.x}
                cy={c.y}
                r="3.5"
                fill="#10b981"
                stroke="#ffffff"
                strokeWidth="1"
              />
            );
          })}

          {/* Axial Text Labels */}
          {attrs.map((attr, idx) => {
            const pos = labelPositions[idx] || { x: centerX, y: centerY, anchor: "middle" };
            return (
              <text
                key={idx}
                x={pos.x}
                y={pos.y}
                textAnchor={pos.anchor}
                className="text-[10px] font-bold text-slate-500 fill-current font-sans"
              >
                {attr} ({stats[idx]}%)
              </text>
            );
          })}
        </svg>
      </div>

      {/* Companion and User Character Bio Info card */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700">
            {account?.gender === "男" ? "🥋" : "👗"}
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 font-mono tracking-wider">
              {scenario?.name?.split?.(" ")[0] || "时空"} 角色修养
            </h4>
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-black text-slate-850">
                {account?.username || "时空探险者"}
              </span>
              <span className="text-[9px] px-1 bg-emerald-100 text-emerald-800 rounded font-black font-mono">
                阶阶:{account?.unlockedLevel ?? 1}
              </span>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 italic leading-relaxed border-l-2 border-emerald-400 pl-2 bg-slate-50 py-1 rounded-r">
          「时空学法已成！你在这个世界正积累惊人底气。加油破局关卡，打脸敌方！」
        </p>

        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 font-medium">
          <div className="bg-slate-50 hover:bg-slate-100/70 p-1.5 rounded border border-slate-150">
            📚 已学单词: <span className="font-bold text-slate-800">{learnedCount}</span> 词
          </div>
          <div className="bg-slate-50 hover:bg-slate-100/70 p-1.5 rounded border border-slate-150">
            🎯 闯关胜绩: <span className="font-bold text-slate-800">{levelsCount}</span> 关
          </div>
          <div className="bg-slate-50 hover:bg-slate-100/70 p-1.5 rounded border border-slate-150">
            🪙 时空财富: <span className="font-bold text-emerald-600">{coinsAmount}</span> 金
          </div>
          <div className="bg-slate-50 hover:bg-slate-100/70 p-1.5 rounded border border-slate-150">
            🔥 签到打卡: <span className="font-bold text-orange-500">{streakCount}</span> 天
          </div>
        </div>
      </div>
    </div>
  );
}
