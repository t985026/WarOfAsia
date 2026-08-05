/**
 * WarOfAsia 亞太戰略兵推與動態預警模擬器 - 核心邏輯腳本 (app.js)
 * Option A (時間軸 + 圖書館) & Option B (互動決策樹) 全面升級版
 */

document.addEventListener('DOMContentLoaded', () => {
    const WAR = window.WAR_DATA;
    if (!WAR) {
        console.error('WAR_DATA not found!');
        return;
    }

    // 全局狀態
    let currentPhase = 1;
    let currentTimelineIdx = 0;
    let timelineTimer = null;
    let currentLibFilter = 'all';
    let currentLibSearch = '';

    // 決策樹模擬器當前狀態
    let currentScenarioId = 'dt-48hr';
    let currentSimNodeId = 'node-1';
    let simState = {
        resilience: 80,
        allianceSupport: 20,
        spilloverRisk: 15,
        panicLevel: 25
    };
    let simFeedback = '';

    // ==========================================
    // DOM 元素引用
    // ==========================================
    // 頁籤 Tab Nav
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // TAB 1: 儀表板
    const warningContainer = document.getElementById('warning-list-container');
    const stepperContainer = document.getElementById('stepper-cards');
    const scenarioDescBox = document.getElementById('scenario-desc-box');
    const annexContainer = document.getElementById('annex-list-container');
    const countriesContainer = document.getElementById('countries-container');
    const btnResetAll = document.getElementById('btn-reset-all');

    // TAB 2: 時間軸 Player
    const tlNodesBar = document.getElementById('tl-nodes-bar');
    const tlDetailContainer = document.getElementById('tl-detail-container');
    const btnTlPrev = document.getElementById('btn-tl-prev');
    const btnTlNext = document.getElementById('btn-tl-next');
    const btnTlPlay = document.getElementById('btn-tl-play');

    // TAB 3: 專題研究圖書館
    const libCardsContainer = document.getElementById('library-cards-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const libSearchInput = document.getElementById('lib-search-input');
    const docModal = document.getElementById('doc-modal');
    const modalTitle = document.getElementById('modal-doc-title');
    const modalContent = document.getElementById('modal-doc-content');
    const btnCloseModal = document.getElementById('btn-close-modal');

    // TAB 4: 戰略決策樹模擬器
    const simScenarioSelect = document.getElementById('sim-scenario-select');
    const btnSimRestart = document.getElementById('btn-sim-restart');
    const meterResilience = document.getElementById('meter-resilience');
    const fillResilience = document.getElementById('fill-resilience');
    const meterAlliance = document.getElementById('meter-alliance');
    const fillAlliance = document.getElementById('fill-alliance');
    const meterPanic = document.getElementById('meter-panic');
    const fillPanic = document.getElementById('fill-panic');
    const meterSpillover = document.getElementById('meter-spillover');
    const fillSpillover = document.getElementById('fill-spillover');
    const simNodeBox = document.getElementById('sim-node-box');

    // ==========================================
    // 1. 初始化進入點
    // ==========================================
    function init() {
        setupTabNavigation();
        initTab1Dashboard();
        initTab2Timeline();
        initTab3Library();
        initTab4Simulator();
    }

    // 頁籤切換邏輯
    function setupTabNavigation() {
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTabId = tab.getAttribute('data-tab');
                navTabs.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const targetPane = document.getElementById(targetTabId);
                if (targetPane) targetPane.classList.add('active');
            });
        });
    }

    // ==========================================
    // 2. TAB 1: 預警與戰情儀表板邏輯
    // ==========================================
    function initTab1Dashboard() {
        renderWarningMetrics();
        renderScenarioStepper();
        renderCountries();
        calculateScores();

        btnResetAll.addEventListener('click', () => {
            WAR.warningMetrics.forEach(m => m.level = 'green');
            currentPhase = 1;
            renderWarningMetrics();
            renderScenarioStepper();
            calculateScores();
        });
    }

    function renderWarningMetrics() {
        warningContainer.innerHTML = '';
        WAR.warningMetrics.forEach(metric => {
            const item = document.createElement('div');
            item.className = 'metric-item';
            const realWorldText = metric.realWorldBaseline || '真實威脅權重已估算';
            item.innerHTML = `
                <div class="metric-top">
                    <span class="metric-title">${metric.title}</span>
                    <span class="metric-category">${metric.categoryName}</span>
                </div>
                <div class="metric-weight-bar">
                    <span class="weight-label">真實權重: ${metric.weight} / 10</span>
                    <span class="weight-rwm" title="${realWorldText}">🌐 ${realWorldText}</span>
                </div>
                <div class="metric-desc">${metric.desc}</div>
                <div class="state-toggles">
                    <button class="btn-toggle green ${metric.level === 'green' ? 'active' : ''}" data-id="${metric.id}" data-level="green">綠燈 (常態)</button>
                    <button class="btn-toggle yellow ${metric.level === 'yellow' ? 'active' : ''}" data-id="${metric.id}" data-level="yellow">黃燈 (警戒)</button>
                    <button class="btn-toggle red ${metric.level === 'red' ? 'active' : ''}" data-id="${metric.id}" data-level="red">紅燈 (危機)</button>
                </div>
            `;
            warningContainer.appendChild(item);
        });

        warningContainer.querySelectorAll('.btn-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const level = e.target.getAttribute('data-level');
                const targetMetric = WAR.warningMetrics.find(m => m.id === id);
                if (targetMetric) {
                    targetMetric.level = level;
                    renderWarningMetrics();
                    calculateScores();
                }
            });
        });
    }

    function renderScenarioStepper() {
        stepperContainer.innerHTML = '';
        WAR.scenarios.forEach(scen => {
            const card = document.createElement('div');
            card.className = `step-card ${scen.phase === currentPhase ? 'active' : ''}`;
            card.setAttribute('data-phase', scen.phase);
            card.innerHTML = `
                <div class="step-number">PHASE ${scen.phase}</div>
                <div class="step-title">${scen.name.split('：')[1] || scen.name}</div>
            `;
            card.addEventListener('click', () => {
                currentPhase = scen.phase;
                renderScenarioStepper();
                updateScenarioDesc();
            });
            stepperContainer.appendChild(card);
        });
        updateScenarioDesc();
    }

    function updateScenarioDesc() {
        const scen = WAR.scenarios.find(s => s.phase === currentPhase);
        if (scen) {
            scenarioDescBox.innerHTML = `<strong>【${scen.name}】</strong><br>${scen.desc}`;
        }
    }

    function calculateScores() {
        let totalWeight = 0;
        let redScore = 0;

        WAR.warningMetrics.forEach(m => {
            totalWeight += m.weight * 2;
            if (m.level === 'yellow') redScore += m.weight * 1;
            else if (m.level === 'red') redScore += m.weight * 2;
        });

        const redPercent = Math.round((redScore / totalWeight) * 100);
        const blueResiliencePercent = Math.max(0, 100 - Math.round(redPercent * 0.85));

        document.getElementById('red-score-percent').innerText = `${redPercent}%`;
        document.getElementById('red-score-num').innerText = redScore;
        document.getElementById('red-progress-fill').style.width = `${redPercent}%`;

        document.getElementById('blue-score-percent').innerText = `${blueResiliencePercent}%`;
        document.getElementById('blue-score-num').innerText = Math.round(blueResiliencePercent * 10);
        document.getElementById('blue-progress-fill').style.width = `${blueResiliencePercent}%`;

        const statusBadge = document.getElementById('system-status');
        const statusText = document.getElementById('status-text');
        if (redPercent >= 65) {
            statusBadge.style.borderColor = 'var(--color-red)';
            statusBadge.style.color = 'var(--color-red)';
            statusBadge.style.background = 'rgba(255, 71, 87, 0.15)';
            statusText.innerText = `警戒極高 - DEFCON 1 (戰術危機臨界/海空封鎖)`;
        } else if (redPercent >= 35) {
            statusBadge.style.borderColor = 'var(--color-yellow)';
            statusBadge.style.color = 'var(--color-yellow)';
            statusBadge.style.background = 'rgba(255, 165, 2, 0.15)';
            statusText.innerText = `警戒升高 - DEFCON 2 (灰帶與動員預警中)`;
        } else {
            statusBadge.style.borderColor = 'var(--color-green)';
            statusBadge.style.color = 'var(--color-green)';
            statusBadge.style.background = 'rgba(46, 213, 115, 0.15)';
            statusText.innerText = `系統運作中 - DEFCON 4 (常態監視階段)`;
        }

        if (redPercent >= 75 && currentPhase < 3) {
            currentPhase = 3;
            renderScenarioStepper();
        } else if (redPercent >= 35 && redPercent < 75 && currentPhase !== 2) {
            currentPhase = 2;
            renderScenarioStepper();
        } else if (redPercent < 35 && currentPhase !== 1) {
            currentPhase = 1;
            renderScenarioStepper();
        }

        const jpRisk = Math.min(100, Math.round(redPercent * 1.1));
        const krRisk = Math.min(100, Math.round(redPercent * 0.95));

        const jpValBox = document.getElementById('jp-spillover-val');
        const jpFill = document.getElementById('jp-progress-fill');
        jpValBox.innerText = `${jpRisk >= 60 ? '高危機' : jpRisk >= 30 ? '中度警戒' : '常態'} (${jpRisk}%)`;
        jpValBox.style.color = jpRisk >= 60 ? 'var(--color-red)' : jpRisk >= 30 ? 'var(--color-yellow)' : 'var(--color-green)';
        jpFill.style.width = `${jpRisk}%`;
        jpFill.style.background = jpValBox.style.color;

        const krValBox = document.getElementById('kr-spillover-val');
        const krFill = document.getElementById('kr-progress-fill');
        krValBox.innerText = `${krRisk >= 60 ? '高危機 (雙重戰場)' : krRisk >= 30 ? '中度警戒' : '常態'} (${krRisk}%)`;
        krValBox.style.color = krRisk >= 60 ? 'var(--color-red)' : krRisk >= 30 ? 'var(--color-yellow)' : 'var(--color-green)';
        krFill.style.width = `${krRisk}%`;
        krFill.style.background = krValBox.style.color;

        renderAnnexActions(redPercent);
    }

    function renderAnnexActions(redPercent) {
        annexContainer.innerHTML = '';
        WAR.annexActions.forEach(annex => {
            const isTriggered = redPercent >= annex.triggerScore;
            const card = document.createElement('div');
            card.className = `annex-card ${isTriggered ? 'triggered' : ''}`;
            card.innerHTML = `
                <div class="annex-header-row">
                    <span class="annex-title">${annex.name}</span>
                    <span class="annex-badge">${isTriggered ? '⚡ 已觸發啟動' : '待命'}</span>
                </div>
                <ul class="annex-actions">
                    ${annex.actions.map(act => `<li>${act}</li>`).join('')}
                </ul>
            `;
            annexContainer.appendChild(card);
        });
    }

    function renderCountries() {
        countriesContainer.innerHTML = '';
        Object.keys(WAR.countries).forEach(key => {
            const c = WAR.countries[key];
            const item = document.createElement('div');
            item.className = 'country-item';
            item.innerHTML = `
                <span class="country-name">${c.flag} ${c.name}</span>
                <a href="../${c.docLink.replace('file:///i:/Project/WarOfAsia/', '')}" target="_blank">📄 查閱總版</a>
            `;
            countriesContainer.appendChild(item);
        });
    }

    // ==========================================
    // 3. TAB 2: 時間軸 Player (Option A)
    // ==========================================
    function initTab2Timeline() {
        renderTimelineNodes();
        renderTimelineDetail(currentTimelineIdx);

        btnTlPrev.addEventListener('click', () => {
            if (currentTimelineIdx > 0) {
                currentTimelineIdx--;
                renderTimelineNodes();
                renderTimelineDetail(currentTimelineIdx);
            }
        });

        btnTlNext.addEventListener('click', () => {
            if (currentTimelineIdx < WAR.jointWargameTimeline.length - 1) {
                currentTimelineIdx++;
                renderTimelineNodes();
                renderTimelineDetail(currentTimelineIdx);
            }
        });

        btnTlPlay.addEventListener('click', () => {
            if (timelineTimer) {
                clearInterval(timelineTimer);
                timelineTimer = null;
                btnTlPlay.innerText = '▶ 自動播放';
            } else {
                btnTlPlay.innerText = '⏸ 暫停播放';
                timelineTimer = setInterval(() => {
                    currentTimelineIdx = (currentTimelineIdx + 1) % WAR.jointWargameTimeline.length;
                    renderTimelineNodes();
                    renderTimelineDetail(currentTimelineIdx);
                }, 3000);
            }
        });
    }

    function renderTimelineNodes() {
        tlNodesBar.innerHTML = '';
        WAR.jointWargameTimeline.forEach((item, idx) => {
            const btn = document.createElement('button');
            btn.className = `tl-node-btn ${idx === currentTimelineIdx ? 'active' : ''}`;
            btn.innerHTML = `
                <span class="tl-code">${item.timeCode}</span>
                <span class="tl-title">${item.phaseName}</span>
            `;
            btn.addEventListener('click', () => {
                currentTimelineIdx = idx;
                renderTimelineNodes();
                renderTimelineDetail(currentTimelineIdx);
            });
            tlNodesBar.appendChild(btn);
        });
    }

    function renderTimelineDetail(idx) {
        const item = WAR.jointWargameTimeline[idx];
        if (!item) return;

        tlDetailContainer.innerHTML = `
            <div class="tl-detail-header">
                <div>
                    <span class="tl-phase-name">【${item.timeCode}】${item.phaseName}</span>
                </div>
                <div class="tl-tipping-badge">⚡ 關鍵轉折點: ${item.tippingPoint}</div>
            </div>
            <p class="tl-summary-p">${item.summary}</p>
            <div class="timeline-nations-grid">
                <div class="nation-card" style="border-left: 3px solid #1e90ff;">
                    <div class="nation-card-title">🇹🇼 臺灣防衛應變</div>
                    <div class="nation-card-text">${item.taiwanStatus}</div>
                </div>
                <div class="nation-card" style="border-left: 3px solid #ffa502;">
                    <div class="nation-card-title">🇯🇵 日本與西南諸島</div>
                    <div class="nation-card-text">${item.japanStatus}</div>
                </div>
                <div class="nation-card" style="border-left: 3px solid #2ed573;">
                    <div class="nation-card-title">🇰🇷 韓國與 DMZ 側翼</div>
                    <div class="nation-card-text">${item.koreaStatus}</div>
                </div>
                <div class="nation-card" style="border-left: 3px solid #00d2d3;">
                    <div class="nation-card-title">🇺🇸 美軍與同盟體系</div>
                    <div class="nation-card-text">${item.usStatus}</div>
                </div>
                <div class="nation-card" style="border-left: 3px solid #ff4757;">
                    <div class="nation-card-title">🇨🇳 紅方戰術行動</div>
                    <div class="nation-card-text">${item.chinaMoves}</div>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 4. TAB 3: 專題研究與劇本圖書館 (Option A)
    // ==========================================
    function initTab3Library() {
        renderLibraryCards();

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLibFilter = btn.getAttribute('data-filter');
                renderLibraryCards();
            });
        });

        libSearchInput.addEventListener('input', (e) => {
            currentLibSearch = e.target.value.toLowerCase().trim();
            renderLibraryCards();
        });

        btnCloseModal.addEventListener('click', () => {
            docModal.classList.remove('active');
        });

        docModal.addEventListener('click', (e) => {
            if (e.target === docModal) docModal.classList.remove('active');
        });
    }

    function renderLibraryCards() {
        libCardsContainer.innerHTML = '';
        const filteredDocs = WAR.researchLibrary.filter(doc => {
            const matchesCategory = (currentLibFilter === 'all') || (doc.category === currentLibFilter);
            const matchesSearch = !currentLibSearch ||
                doc.title.toLowerCase().includes(currentLibSearch) ||
                doc.summary.toLowerCase().includes(currentLibSearch) ||
                doc.tags.some(t => t.toLowerCase().includes(currentLibSearch));
            return matchesCategory && matchesSearch;
        });

        filteredDocs.forEach(doc => {
            const card = document.createElement('div');
            card.className = 'lib-card';
            card.innerHTML = `
                <div>
                    <span class="lib-cat-badge">${doc.categoryName}</span>
                    <div class="lib-card-title">${doc.title}</div>
                    <div class="lib-word-count">📊 約 ${doc.wordCount} | 格式: Markdown</div>
                    <div class="lib-summary">${doc.summary}</div>
                    <div class="lib-tags">
                        ${doc.tags.map(t => `<span class="tag-badge">#${t}</span>`).join('')}
                    </div>
                </div>
                <button class="btn-read-doc" data-id="${doc.id}">📖 查閱內容摘要與解析</button>
            `;

            card.querySelector('.btn-read-doc').addEventListener('click', () => {
                openDocModal(doc);
            });

            libCardsContainer.appendChild(card);
        });
    }

    async function openDocModal(doc) {
        modalTitle.innerText = doc.title;
        docModal.classList.add('active');

        // 預設先顯示 Modal 載入動畫與 UI 架構
        modalContent.innerHTML = `
            <div class="modal-tabs">
                <button class="modal-tab-btn active" id="modal-tab-full">📖 閱讀完整報告全文</button>
                <button class="modal-tab-btn" id="modal-tab-summary">📌 戰略重點摘要</button>
            </div>
            <div id="modal-tab-view-full">
                <div class="modal-loading">
                    <div class="spinner"></div>
                    <div>正在載入 Markdown 報告原文 (<code>${doc.filePath}</code>)...</div>
                </div>
            </div>
            <div id="modal-tab-view-summary" style="display:none;">
                <p style="color:var(--color-cyan); font-weight:600; margin-bottom:12px;">【${doc.titleEn}】</p>
                <div style="background:rgba(13,19,34,0.8); border-left:3px solid var(--color-cyan); padding:12px; margin-bottom:16px;">
                    <strong>核心摘要：</strong><br>${doc.summary}
                </div>
                <h4 style="color:#ffffff; margin-bottom:8px;">📌 本報告四大戰略重點（Key Findings）：</h4>
                <ul class="modal-highlight-list">
                    ${doc.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <p style="margin-top:16px; color:var(--text-secondary); font-size:0.8rem;">
                    <strong>檔案路徑：</strong><code>${doc.filePath}</code> | <strong>字數：</strong>${doc.wordCount}
                </p>
            </div>
        `;

        // 綁定 Modal 內部頁籤切換事件
        const btnTabFull = document.getElementById('modal-tab-full');
        const btnTabSummary = document.getElementById('modal-tab-summary');
        const viewFull = document.getElementById('modal-tab-view-full');
        const viewSummary = document.getElementById('modal-tab-view-summary');

        if (btnTabFull && btnTabSummary) {
            btnTabFull.addEventListener('click', () => {
                btnTabFull.classList.add('active');
                btnTabSummary.classList.remove('active');
                viewFull.style.display = 'block';
                viewSummary.style.display = 'none';
            });
            btnTabSummary.addEventListener('click', () => {
                btnTabSummary.classList.add('active');
                btnTabFull.classList.remove('active');
                viewFull.style.display = 'none';
                viewSummary.style.display = 'block';
            });
        }

        // Fetch .md 檔案內容並渲染
        try {
            const rawPath = `../${encodeURIComponent(doc.filePath).replace(/%2F/g, '/')}`;
            const response = await fetch(rawPath);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} - 讀取失敗`);
            }
            const mdText = await response.text();
            
            // 使用 marked.js 渲染 HTML
            if (typeof marked !== 'undefined' && marked.parse) {
                viewFull.innerHTML = `<div class="markdown-rendered-body">${marked.parse(mdText)}</div>`;
            } else {
                // Fallback: 預覽原始 text
                viewFull.innerHTML = `<pre><code>${escapeHtml(mdText)}</code></pre>`;
            }
        } catch (err) {
            console.warn('Fetch MD failed, fallback to structured summary:', err);
            viewFull.innerHTML = `
                <div class="modal-error-box">
                    <strong>⚠️ 無法直接以 Fetch 載入本地 MD 檔（目前為 <code>file://</code> 存取限制）</strong><br>
                    若欲直接在網頁端瀏覽全文渲染，請執行根目錄的 <code>start_local_server.bat</code> 啟動本地 HTTP 伺服器 (Port 8080)。<br>
                    <small>錯誤詳情: ${err.message}</small>
                </div>
                <div style="background:rgba(13,19,34,0.8); border-left:3px solid var(--color-cyan); padding:16px; margin-bottom:16px;">
                    <h3 style="color:var(--color-cyan); margin-bottom:8px;">【${doc.title}】報告重點整理</h3>
                    <p style="margin-bottom:12px;"><strong>英文標題：</strong>${doc.titleEn}</p>
                    <p style="margin-bottom:12px;"><strong>核心摘要：</strong>${doc.summary}</p>
                    <h4 style="color:#ffffff; margin-bottom:8px;">📌 四大戰略重點：</h4>
                    <ul class="modal-highlight-list">
                        ${doc.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    }

    function escapeHtml(text) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ==========================================
    // 5. TAB 4: 戰略決策樹模擬器 (Option B)
    // ==========================================
    function initTab4Simulator() {
        populateScenarioSelect();
        startScenario(currentScenarioId);

        simScenarioSelect.addEventListener('change', (e) => {
            currentScenarioId = e.target.value;
            startScenario(currentScenarioId);
        });

        btnSimRestart.addEventListener('click', () => {
            startScenario(currentScenarioId);
        });
    }

    function populateScenarioSelect() {
        simScenarioSelect.innerHTML = '';
        WAR.wargameDecisionTrees.forEach(scen => {
            const opt = document.createElement('option');
            opt.value = scen.id;
            opt.innerText = scen.title;
            simScenarioSelect.appendChild(opt);
        });
    }

    function startScenario(scenId) {
        const scen = WAR.wargameDecisionTrees.find(s => s.id === scenId);
        if (!scen) return;

        simState = { ...scen.initialState };
        currentSimNodeId = scen.startNodeId;
        simFeedback = '';

        updateSimMeters();
        renderSimNode();
    }

    function updateSimMeters() {
        meterResilience.innerText = `${simState.resilience}%`;
        fillResilience.style.width = `${Math.min(100, Math.max(0, simState.resilience))}%`;

        meterAlliance.innerText = `${simState.allianceSupport}%`;
        fillAlliance.style.width = `${Math.min(100, Math.max(0, simState.allianceSupport))}%`;

        meterPanic.innerText = `${simState.panicLevel}%`;
        fillPanic.style.width = `${Math.min(100, Math.max(0, simState.panicLevel))}%`;

        meterSpillover.innerText = `${simState.spilloverRisk}%`;
        fillSpillover.style.width = `${Math.min(100, Math.max(0, simState.spilloverRisk))}%`;
    }

    function renderSimNode() {
        const node = WAR.decisionTreeNodes[currentSimNodeId];
        if (!node) return;

        if (node.isEnd) {
            const evaluation = node.evaluate(simState);
            simNodeBox.innerHTML = `
                <div class="sim-outcome-box">
                    <div style="font-size:1rem; color:var(--text-secondary);">【模擬結束】本次推演評估結果</div>
                    <div class="outcome-rating" style="color:${evaluation.color};">${evaluation.resultTitle}</div>
                    <div style="font-size:1.1rem; font-weight:700; color:var(--color-cyan); margin-bottom:12px;">評級：${evaluation.rating}</div>
                    <div class="outcome-summary">${evaluation.summary}</div>
                    <button class="btn-ctrl btn-play" onclick="document.getElementById('btn-sim-restart').click();">🔄 重新挑戰本想定</button>
                </div>
            `;
            return;
        }

        simNodeBox.innerHTML = `
            <span class="node-time-badge">⏱️ ${node.timeCode}</span>
            <h3 class="node-title-h3">${node.title}</h3>
            <p class="node-content-p">${node.content}</p>
            ${simFeedback ? `<div class="feedback-toast">💡 戰術結果反饋：${simFeedback}</div>` : ''}
            <div style="margin: 16px 0 10px 0; font-size:0.88rem; font-weight:600; color:var(--color-cyan);">請做出戰術決策指令：</div>
            <div class="choices-list">
                ${node.choices.map((choice, idx) => `
                    <button class="choice-btn" data-idx="${idx}">${choice.text}</button>
                `).join('')}
            </div>
        `;

        simNodeBox.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const choiceIdx = parseInt(e.target.getAttribute('data-idx'));
                const choice = node.choices[choiceIdx];
                if (choice) {
                    // 套用效果
                    if (choice.effects) {
                        simState.resilience += (choice.effects.resilience || 0);
                        simState.allianceSupport += (choice.effects.allianceSupport || 0);
                        simState.panicLevel += (choice.effects.panicLevel || 0);
                        simState.spilloverRisk += (choice.effects.spilloverRisk || 0);
                    }
                    simFeedback = choice.feedback || '';
                    currentSimNodeId = choice.nextNodeId;

                    updateSimMeters();
                    renderSimNode();
                }
            });
        });
    }

    // 啟動
    init();
});
