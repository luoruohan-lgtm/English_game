import React, { useState } from "react";
import { UserAccount, WordBookType } from "../types";
import { WORD_BOOKS, SCENARIOS } from "../data";
import { User, RefreshCw, Settings, UserPlus, ToggleLeft, ArrowRight, Save, Trash2, Heart } from "lucide-react";

interface AccountPanelProps {
  profiles: { [username: string]: UserAccount };
  activeUsername: string | null;
  onSwitchProfile: (username: string) => void;
  onCreateProfile: (profile: UserAccount) => void;
  onUpdateActiveProfile: (profile: UserAccount) => void;
  onResetActiveProgress: () => void;
}

export default function AccountPanel({
  profiles,
  activeUsername,
  onSwitchProfile,
  onCreateProfile,
  onUpdateActiveProfile,
  onResetActiveProgress
}: AccountPanelProps) {
  const activeProfile = activeUsername ? profiles[activeUsername] : null;

  // Form states to edit current Profile
  const [editUsername, setEditUsername] = useState(activeProfile?.username || "");
  const [editGender, setEditGender] = useState<"男" | "女">(activeProfile?.gender || "男");
  const [editBook, setEditBook] = useState<WordBookType>((activeProfile?.selectedBook as WordBookType) || WordBookType.CET4);
  const [editScenario, setEditScenario] = useState(activeProfile?.selectedScenario || "ancient_palace");

  // Form states to create ANOTHER Profile
  const [newUsername, setNewUsername] = useState("");
  const [newGender, setNewGender] = useState<"男" | "女">("男");
  const [newBook, setNewBook] = useState<WordBookType>(WordBookType.CET4);
  const [newScenario, setNewScenario] = useState("ancient_palace");

  const [creatorExpanded, setCreatorExpanded] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const triggerFeedback = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  const handleApplyEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeProfile) return;
    if (!editUsername.trim()) {
      alert("用户名不可为空");
      return;
    }

    const updated: UserAccount = {
      ...activeProfile,
      username: editUsername.trim(),
      gender: editGender,
      selectedBook: editBook,
      selectedScenario: editScenario
    };

    onUpdateActiveProfile(updated);
    triggerFeedback("保存成功！您的个人时空契约已即时生效。");
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = newUsername.trim();
    if (!cleanName) {
      alert("请输入新的时空契约账号名称");
      return;
    }
    if (profiles[cleanName]) {
      alert("该时空契约标识已存在，换个用户名吧！");
      return;
    }

    const created: UserAccount = {
      username: cleanName,
      gender: newGender,
      selectedBook: newBook,
      selectedScenario: newScenario,
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

    onCreateProfile(created);
    setNewUsername("");
    setCreatorExpanded(false);
    triggerFeedback(`成功建立其他时空账号「${cleanName}」并已自动登录！`);
  };

  return (
    <div className="space-y-6">
      {/* Visual Header */}
      <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl relative overflow-hidden">
        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
          ⚙️ 角色与时空设置
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          您可以无损修改当前的单词书、游戏背景，或者创建多个角色账号进行独立学习。
        </p>
      </div>

      {successMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold leading-relaxed text-center animate-pulse">
          🎉 {successMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: EDIT ACTIVE USER */}
        {activeProfile && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
            <h4 className="text-sm font-black text-slate-800 tracking-wide border-b border-slate-100 pb-2">
              📝 当前角色设置
            </h4>

            <form onSubmit={handleApplyEdits} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 font-mono mb-1">
                  👤 角色昵称 (用户名)
                </label>
                <input
                  type="text"
                  required
                  maxLength={15}
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500 transition-all bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 font-mono mb-1">
                    👤 绑定性别尊称
                  </label>
                  <select
                    value={editGender}
                    onChange={(e) => setEditGender(e.target.value as "男" | "女")}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500 transition-all bg-slate-50"
                  >
                    <option value="男">男 (公子 / 少爷)</option>
                    <option value="女">女 (小姐 / 少奶奶)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 font-mono mb-1">
                    📖 切换修炼词书 (无损进度)
                  </label>
                  <select
                    value={editBook}
                    onChange={(e) => setEditBook(e.target.value as WordBookType)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500 transition-all bg-slate-50"
                  >
                    <option value={WordBookType.CET4}>四级高频考纲</option>
                    <option value={WordBookType.CET6}>六级核心考点</option>
                    <option value={WordBookType.IELTS}>雅思学术通用</option>
                    <option value={WordBookType.TOEFL}>托福自然科学</option>
                    <option value={WordBookType.TEM8}>专八殿堂挑战</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 font-mono mb-1">
                  🌌 变换当前流派背景时空
                </label>
                <select
                  value={editScenario}
                  onChange={(e) => setEditScenario(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500 transition-all bg-slate-50"
                >
                  {SCENARIOS.map((sc) => (
                    <option key={sc.id} value={sc.id}>
                      {sc.name} (学伴: {sc.companionName})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>应用修改契约</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("确定要全部推倒当前时空的冒险历程，清空完成关卡、重新从头第1关起航吗？(金币和背词库将作为修行底气予以传承保留)")) {
                      onResetActiveProgress();
                      triggerFeedback("当前时空已重置，已将时间线扭转回关卡起点！");
                    }
                  }}
                  className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 rounded-lg cursor-pointer flex items-center justify-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>重置时空</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* RIGHT COLUMN: SWITCH ACCOUNTS & PROFILES REGISTRY */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h4 className="text-sm font-black text-slate-800 tracking-wide">
              👥 切换角色账号
            </h4>
            <span className="text-[10px] text-slate-505">
              已有 {Object.keys(profiles).length} 个角色账号
            </span>
          </div>

          <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
            {Object.keys(profiles).map((name) => {
              const prof = profiles[name];
              const isActive = name === activeUsername;
              return (
                <div
                  key={name}
                  onClick={() => onSwitchProfile(name)}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-100 border-indigo-500"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-150"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${isActive ? "bg-indigo-600" : "bg-slate-400"}`}>
                      {name.substring(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">{name}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {prof?.selectedBook?.split?.(" ")[0] || "CET-4"} · 第 {(prof?.completedLevels || []).length} 胜关
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded font-black text-[9px] font-mono">
                        当前
                      </span>
                    ) : (
                      <span className="text-[10px] text-indigo-550 flex items-center gap-0.5 font-bold hover:underline">
                        <span>换登</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACCORDION TRIGGER FOR NEW PROFILE REGISTRATION */}
          {!creatorExpanded ? (
            <button
              onClick={() => setCreatorExpanded(true)}
              className="w-full py-2.5 text-center border-2 border-dashed border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-600 rounded-xl cursor-pointer flex items-center justify-center gap-1.5 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>创建新角色账号</span>
            </button>
          ) : (
            <form onSubmit={handleCreateNew} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-fade-in text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-600">👤 创建新角色账号</span>
                <span onClick={() => setCreatorExpanded(false)} className="text-[10px] text-slate-500 font-mono hover:underline cursor-pointer">
                  [收起]
                </span>
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-1">
                  契约用户名：
                </label>
                <input
                  type="text"
                  required
                  maxLength={15}
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="请输入全英文/中文标识"
                  className="w-full px-2.5 py-1.5 border border-slate-200 bg-white rounded-lg text-xs leading-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">
                    性别前缀：
                  </label>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value as "男" | "女")}
                    className="w-full px-2.5 py-1.5 border border-slate-200 bg-white rounded-lg text-xs"
                  >
                    <option value="男">男士 (少爷)</option>
                    <option value="女">女士 (小姐)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">
                    契约修词库：
                  </label>
                  <select
                    value={newBook}
                    onChange={(e) => setNewBook(e.target.value as WordBookType)}
                    className="w-full px-2.5 py-1.5 border border-slate-200 bg-white rounded-lg text-xs"
                  >
                    <option value={WordBookType.CET4}>大学四级考网</option>
                    <option value={WordBookType.CET6}>大学六级高攀</option>
                    <option value={WordBookType.IELTS}>智力雅思考前</option>
                    <option value={WordBookType.TOEFL}>海外托福尖盘</option>
                    <option value={WordBookType.TEM8}>专八尖锐大纲</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-1">
                  初始穿越情境：
                </label>
                <select
                  value={newScenario}
                  onChange={(e) => setNewScenario(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-200 bg-white rounded-lg text-xs"
                >
                  {SCENARIOS.map((sc) => (
                    <option key={sc.id} value={sc.id}>
                      {sc.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-lg cursor-pointer block"
              >
                💾 签下时空契约，切换至该号
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
