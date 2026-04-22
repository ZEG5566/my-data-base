# my-data-base — 我的班級工具總專案

## 對話開始時請先讀
進度與最近更動都在 Obsidian：`obsidian vault/my-data-base/工作筆記.md`

## 工作模式
- **加新工具**：對 Claude 說「我想做一個 XXX 工具」→ Claude 會建 `tools/<工具名>/` 子資料夾、引導我跟著 EP10 影片做
- **結束工作**：對 Claude 說「**收工**」→ Claude 自動完成下列全部：
  1. `git add` + `commit` + `push` 到 GitHub
  2. 更新 Obsidian `工作笔记.md` + CLAUDE.md 工具清单
  3. **确认 GitHub Pages 已启用**（没启用就 `gh api -X POST repos/ZEG5566/my-data-base/pages` 开启）
  4. **若本轮新增了 Firestore 集合** → 提醒我在 Firebase 后台部署规则
  5. **若本轮新增了第一次上线的新域名** → 提醒我把域名加进 Firebase Authorized domains
  6. 最后列出所有可用链接 + 一句验证步骤（学生端填名字 → 老师端看有无记录）
- **接續工作**：對 Claude 說「讀工作筆記、告訴我上次做到哪」

## 工作桌 + 三個家
- 📋 GDrive 工作桌：`My Drive/my-data-base/`（自動跨電腦同步）
- 🐙 GitHub repo：`ZEG5566/my-data-base`（公開，網頁的家）
- 📘 Obsidian 駕駛艙：`obsidian vault/my-data-base/工作筆記.md`（想法的家）
- 🔥 Firebase 專案：`my-teaching-tools`（資料的家）

## 工具清單
（之後加新工具時會自動更新）
- `tools/五年级第2课-课文游戏/` — 《给小主人的一封信》课文理解 + 书信格式
- `tools/五年级第2课-词语游戏/` — 21 词三关
- `tools/五年级第2课-阅读理解二游戏/` — 《模糊的世界》7 题（接 Firebase · `reading2_records`）
- `tools/侦探游戏-模糊的世界/` — 《模糊的世界》侦探情境版（`detective_records`）
- `tools/五年级第3课-阅读理解游戏/` — 《可贵的沉默》密室逃脱（`reading3_records`）
- `tools/五年级第3课-教师节阅读游戏/` — 配套短文《教师节的心意》感恩花束挑战 · 7 题 22 分（`reading3b_records`）
- `tools/_shared/firebase.js` — 共用匿名登录 + Firestore 模块

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號）
- commit 訊息要寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 Claude 同步三方
