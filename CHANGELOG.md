# Changelog (更新日誌)

本專案遵循 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) 規範，記錄各階段的更新歷程。

## [Phase 3] - 2026-08-05

### Phase 3A：Web Dashboard 互動升級 ✅ 完成
#### Added
- 頁籤導覽系統 (Navigation Tabs System)：整合預警儀表板、四國聯合兵棋時間軸、專題研究與劇本圖書館、戰略決策樹模擬器
- 四國聯合兵棋動態時間軸播放器 (Timeline Player)：支援 `T-90` 至 `T+30` 八階段節點切換、自動播放與五國戰況動態卡片
- 專題研究與劇本圖書館 (Scenario & Research Library)：整合全部 9 份 Phase 2 新產出報告，支援關鍵字搜尋、分類篩選與全功能 Modal 預覽Drawer

### Phase 3B：戰略決策樹兵推模擬器 ✅ 完成
#### Added
- 互動式兵推模擬器 (Interactive Wargame Simulator)：內建「48小時極端封鎖」、「南海島礁衝突外溢」、「AI自律武器與電磁戰」三大想定
- 4 軸即時防衛數據儀表（國家指揮與社會韌性、印太同盟協同支援度、社會恐慌指數、區域外溢衝突風險）
- 戰術決策樹分歧與即時反饋機制（即時運算戰術結果與 Final Outcome 評估報告）

### Phase 3C：網頁端 Markdown 內嵌渲染與真實權重升級 ✅ 完成
#### Added
- **網頁端 Markdown 原文內嵌渲染**：引入 `marked.js` CDN，實現點擊檔案直接於 Modal 內載入全文並渲染成 HTML，支援語法高亮、表格、程式碼區塊與雙頁籤（全文/摘要）切換，無需開新分頁。
- **「臺灣前導戰爭」戰略決策樹**：新增第 4 個互動想定「臺灣前導戰爭破壞干擾應對兵推」，涵蓋戰前 72 小時、24 小時與 6 小時四大非動能打擊與資安/物資/海纜切斷應對處置。
- **真實環境威脅評估權重**：於儀表板 17 項指標加入 `realWorldBaseline` 真實環境評估標準與動態權重提示列，使防衛指數精準反映真實威脅衝擊力。

## [Phase 2] - 2026-08-05

### Phase 2A：情境兵推劇本 ✅ 完成
#### Added
- `臺灣/情境劇本_48小時全面封鎖極端想定.md` — 48 小時海空全面封鎖與關鍵基礎設施癱瘓打擊推演
- `臺灣/情境劇本_2028-2029後續情境演變.md` — 2027 基準情境後續延伸時間線推演
- `專題研究/情境劇本_南海島礁衝突與印太聯動.md` — 中菲/中越南海島礁衝突與印太區域連鎖反應
- `專題研究/情境劇本_稀土半導體封鎖與金融戰.md` — 經濟戰爭獨立情境推演

### Phase 2B：新興威脅專題研究 ✅ 完成
#### Added
- `專題研究/AI與自律武器戰爭_紅藍方攻防分析.md` — AI 軍事化、LAWS 分類、無人機蜂群、AI 倫理與軍備控制
- `專題研究/海底電纜與通信安全_脆弱性與備援分析.md` — 海底電纜脆弱性、紅方切斷能力、衛星備援架構
- `專題研究/半導體供應鏈安全_製程中斷全球影響.md` — 矽盾理論、TSMC 戰略地位、斷供全球影響鏈
- `專題研究/太空與衛星安全_反衛星與通信切斷.md` — ASAT 能力分析、GPS 干擾、太空碎片風險

### Phase 2C：四國聯合兵棋統合報告 ✅ 完成
#### Added
- `四國聯合兵棋統合報告.md` — 臺日韓美四國聯合推演（T-90 至 T+30 時間軸）

### Phase 2 基礎架構（已於本階段初完成）
#### Added
- 新建 `/專題研究` 資料夾 (Thematic Research & Scenario Scripts)
- 新建 `CHANGELOG.md` 版本日誌

#### Changed
- 更新所有專案核心文件架構 (Updated all project core document architectures)
- 更新 `README.md`、`SUMMARY.md`、`CONTRIBUTING.md`、`專案目錄與檔案導覽地圖.md`
- 更新 `亞太區域兵推與防衛架構_綜合整合報告.md` 新增第 6-7 節
- 更新 `dashboard/data.js` 新增情境劇本與專題研究數據結構

## [Phase 1] - 2026-08-04
### Added
- 建立四大區域模組（中國 12 份、日本 9 份、臺灣 31 份、韓國 20 份，共 72+ 份研究文件）
- 建立亞太動態預警與兵推模擬器 (Asia-Pacific Dynamic Early Warning & Wargame Simulator) Web Dashboard
- 建立專案核心文件：README.md、SUMMARY.md、CONTRIBUTING.md、SECURITY.md
- 建立專案目錄與檔案導覽地圖
- 建立亞太區域兵推與防衛架構綜合整合報告
- 設定 GitHub Actions CI/CD 自動部署
