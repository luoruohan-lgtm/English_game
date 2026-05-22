import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON request body parsing
  app.use(express.json());

  // API router FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // AI Chat Proxy endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, companionName, context, book, userName, level } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        // Safe contextual fallback if API key is not supplied
        return res.json({
          reply: `【系统提示：安全代理分析】侦测到您尚未在 AI Studio 的 **Settings > Secrets** 面板中配置有效的 \`GEMINI_API_KEY\`。
          \n我是您的 AI 专属学伴 **${companionName || '时空向导'}**，正陪伴您在「${context || '奇幻冒险'}」的世界里学习 **${book || '英语高频词'}**（当前进度：第 ${level || 1} 关）。
          \n**请在 AI Studio UI 中的 Secrets 面板填写 \`GEMINI_API_KEY\` 开启真实的 AI 智能对话与解答！**
          \n此时，我可以提供本关卡的学习建议：您可以点击上方或侧边的「单词本」多加复习，或者前往「商店」兑换道具（如洗心橡皮擦、护体免洗盾）助您顺利击败对手突破关卡！加油！`
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // System instruction for immersive character roleplay and educational value (Simplified Chinese)
      const systemInstruction = `You are a helpful and supportive English study companion inside a gamified English learning web app.
Your identity in the current game context is: "${companionName || '时空引路人'}", who has a distinct personality and tone fitting the storyline scenario "${context || '古代冒险'}".
For example:
- "古代宅斗": You are a loyal servant/confidant, speaking politely, with words like "小姐"/"公子", "婢子" or similar ancient phrasing.
- "皇宫宫斗": You are a highly sophisticated palace maid or imperial eunuch companion, using respectful royal phrasing.
- "大学生活": You are a smart, humorous university classmate, speaking with relaxed, modern campus slang.
- "魔幻探险": You are a mystical elven guide or wizened wizard, using dramatic, magical words.
- "娱乐圈顶流": You are a sharp and knowledgeable entertainment agent, speaking with excitement and media flair.
- "赘婿逆袭": You are a faithful corporate manager or family trust butler helping the heir, speaking with prestige and absolute loyalty.
- "武侠江湖": You are a chivalrous companion or hero traveler, speaking in chivalrous, righteous ancient style.
- "商战对赌": You are an absolute elite executive assistant helping to manage a shopping mall raise its profit margins past 25% for a bet, speaking professionally.
- "侦探推理": You are a brilliant sidekick assistant (like Watson), speaking logically, formally, and with observation.
- "现代都市": You are an active city local buddy, talking in modern, lively metropolitan tones.

The user's ID/name is "${userName || '勇者'}".
The user is studying English vocabulary from the word book: "${book || '四级常用单词'}". Currently at Level ${level || 1}.

Guidelines:
1. Immerse yourself naturally in your character of "${companionName}"! Keep your tone very representative of the chosen situation "${context}".
2. Support the user with English vocabulary books, detailed grammar explanations, learning tips, or explanations about the game's mechanics.
3. Respond in clear, readable Simplified Chinese (简体中文) for an elegant appearance.
4. When explaining English words, present their IPA phonetics, multiple parts of speech, Chinese meanings, and write elegant sample interactive sentences matching our "${context}" scenario!
5. Avoid overly verbose answers so the user isn't overwhelmed. Break information down with clean Markdown bullet points. Be incredibly encouraging and fun!`;

      // Map dialogue history to Google GenAI structure
      const contents = history ? history.map((item: any) => {
        return {
          role: item.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: item.content }]
        };
      }) : [];

      // Add user's newest request
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini server proxy error:", error);
      res.status(500).json({ error: error.message || "An error occurred with Gemini client" });
    }
  });

  // Serve static files in production or hook Vite in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
