# WarOfAsia 研究貢獻與擴充指南 (Contribution Guidelines)

感謝您對 `WarOfAsia` 亞太區域兵推與國家防衛韌性研究體系的關注與貢獻。為了維護專案內容的高學術品質、嚴謹性與統一格式，請在新增或修訂文件時遵循以下規範。

---

## 🛡️ 一、 防衛型紅隊與安全邊界原則 (Security & Ethics First)

本專案採 **「防禦型紅隊 (Defense-oriented Red Team)」** 與 **「全社會韌性藍方」** 方法學。在撰寫任何兵推與混合威脅情境時，必須遵守以下禁令：
1. **嚴禁敏感資訊**：不得寫入國防設施、核電廠、電網樞紐、電信機房、水利設施或政府指揮所的精確位置座標、高解析照片或實體破壞手段。
2. **嚴禁攻擊指引**：不得提供網路入侵步驟、系統零日漏洞利用指引、制裁規避管道或暴力顛覆指示。
3. **事實與推演分離**：所有最壞情境推演均須明確標註為 `[最壞情境推演]`，避免與已確認之事實混合。

---

## 📁 二、 資料夾與檔案命名規範 (Naming Conventions)

本專案按區域劃分四大資料夾：
- `/中國` (China Red Team & Wolf Warrior Policy)
- `/日本` (Japan Red/Blue Team & Southwest Islands)
- `/臺灣` (Taiwan 2027 Scenario, Red/Blue Team & Annexes)
- `/韓國` (Korea Red/Blue Team & Dual Battlefield)
- `/專題研究` (Thematic Research & Scenario Scripts)

### 檔案命名格式
- **總版文檔**：`[區域名稱][紅/藍方]_..._完整總版.md`
- **單卷文檔**：`[區域名稱][紅/藍方]_第[一/二/三/四]卷_... .md`
- **情境劇本**：`情境劇本_[主題名稱].md`
- **專題研究**：`[專題名稱]_[紅藍方攻防分析/脆弱性與備援分析/...].md`
- **聯合兵棋**：根目錄 `四國聯合兵棋統合報告.md`
- **受限附件/模板**：`受限附件[A-E]_...模板.md` 或 `[區域]受限附件...模板.md`
- **索引文檔**：`[區域][紅/藍方]_MD文件索引.md`

---

## 🏷️ 三、 標籤系統 (Tagging System)

在新新增或更新文檔時，請於內文標題或全專案 [專案目錄與檔案導覽地圖.md](file:///i:/Project/WarOfAsia/專案目錄與檔案導覽地圖.md) 中適當標註以下標籤：
- `[總版]`：萬字彙整總報告。
- `[紅方]`：外部敵對行為者攻勢與灰帶襲擾推演。
- `[藍方]`：全社會防衛、國家持續運作 (COG) 與備援防護。
- `[情境兵推]`：2027 臺海危機、西南諸島或朝鮮半島第二戰場演練。
- `[情境劇本]`：獨立情境推演劇本（48小時想定、南海外溢等）
- `[專題研究]`：新興威脅與安全議題深度專題
- `[聯合兵棋]`：四國同步推演之統合兵棋報告
- `[指標儀表板]`：十七項預警條件與危機降級矩陣。
- `[受限附件/模板]`：關鍵基礎設施替代節點、代理順位與緊急通訊容量清冊。

---

## 📝 四、 格式與編碼標準 (Formatting & Encoding)

1. **檔案編碼**：所有文件必須統一使用 **UTF-8 (Without BOM)** 編碼。
2. **Markdown 規範**：遵循 GitHub-Flavored Markdown (GFM) 語法。
3. **戰略圖表**：建議使用 **Mermaid** 繪製流程圖 (flowchart)、狀態圖 (stateDiagram) 或系統架構圖 (graph)。
4. **GitHub Alerts**：善用 GitHub 警示框突出重要提示：
   ```markdown
   > [!NOTE]
   > 背景說明與補充脈絡

   > [!IMPORTANT]
   > 核心防衛觀念或重要警報條件
   ```

---

## 🔄 五、 貢獻與 Git 提交步驟 (Workflow)

1. **Fork 或 Clone** 專案至您的本地環境。
2. 建立專題分支：`git checkout -b feature/add-new-scenario`
3. 撰寫/修訂 Markdown 文件，並更新 [專案目錄與檔案導覽地圖.md](file:///i:/Project/WarOfAsia/專案目錄與檔案導覽地圖.md) 及 [SUMMARY.md](file:///i:/Project/WarOfAsia/SUMMARY.md)。
4. 於 `dashboard/data.js` 中同步更新相應之數據或預警指標（若適用）。
5. 提交 Conventional Commits 訊息：`git commit -m "docs: add new scenario report for Taiwan Strait"`
6. 發起 Pull Request (PR) 進行審核。
