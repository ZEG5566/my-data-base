# my-tracked-games

帶學情追蹤的班級華文教學工具——學生作答 → Firestore → 老師後台看數據。
適合：常態課堂使用、需要學情數據評估教學效果的場景。

🌐 部署：https://zeg5566.github.io/my-tracked-games/
🔥 Firebase 專案：`my-teaching-tools`

## 遊戲清單

| 課文 / 主題 | 路徑 | Firestore 集合 | 老師後台 |
|---|---|---|---|
| 五年級第2課《模糊的世界》閱讀理解二 | [tools/五年级第2课-阅读理解二游戏/](tools/五年级第2课-阅读理解二游戏/) | `reading2_records` | ✅ |
| 《模糊的世界》偵探情境版 | [tools/侦探游戏-模糊的世界/](tools/侦探游戏-模糊的世界/) | `detective_records` | ✅ |
| 五年級第3課《可貴的沉默》密室逃脫 | [tools/五年级第3课-阅读理解游戏/](tools/五年级第3课-阅读理解游戏/) | `reading3_records` | ✅ |
| 五年級第3課《教師節的心意》感恩花束挑戰 | [tools/五年级第3课-教师节阅读游戏/](tools/五年级第3课-教师节阅读游戏/) | `reading3b_records` | ✅ |
| 五年級第2課詞語遊戲（21詞三關） | [tools/五年级第2课-词语游戏/](tools/五年级第2课-词语游戏/) | — | ❌ |
| KAT-Chatbot 教學案例 | [tools/KAT-Chatbot教学案例/](tools/KAT-Chatbot教学案例/) | — | ❌ |

**共用模塊**：[tools/_shared/firebase.js](tools/_shared/firebase.js) — 匿名登入 + Firestore 寫入

## 姐妹專案

不需要學情追蹤的純靜態遊戲 → [my-static-games](https://github.com/ZEG5566/my-static-games)

## 設計原則

所有遊戲設計參考 `secondbrain/教学素材/网页游戏设计/游戏化学习网页设计checklist.md`

## 開發約定

詳見 [CLAUDE.md](CLAUDE.md)（Claude Code 工作流：「收工」自動 commit + push + 更新 Obsidian 三方同步）。
