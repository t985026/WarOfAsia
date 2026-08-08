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
    let currentMetricCatFilter = 'all';

    // 非同步動態載入腳本工具
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    // 按需懶加載 Mermaid 繪圖引擎 (本地優先 0ms 延遲 + 多重 CDN 備援)
    async function ensureMermaidLoaded() {
        if (typeof mermaid === 'undefined') {
            try {
                // 優先使用專案本地 bundle (0ms 網路延遲)
                await loadScript('libs/mermaid.min.js');
            } catch (e) {
                // 備援 Cloudflare CDN
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.min.js').catch(()=>{});
            }
        }
        if (typeof mermaid !== 'undefined' && !window.mermaidInitialized) {
            mermaid.initialize({
                startOnLoad: false,
                theme: 'dark',
                securityLevel: 'loose',
                fontFamily: 'Inter, system-ui, sans-serif'
            });
            window.mermaidInitialized = true;
        }
    }

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
    const metricCatBtns = document.querySelectorAll('.metric-cat-btn');
    const btnPresets = document.querySelectorAll('.btn-preset');
    const chipGreenCount = document.getElementById('chip-green-count');
    const chipYellowCount = document.getElementById('chip-yellow-count');
    const chipRedCount = document.getElementById('chip-red-count');

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
        initSituationMap();
        initTab2Timeline();
        initTab3Library();
        initTab4Simulator();
    }

    // 頁籤切換與頂部快速文檔按鈕
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

        // 頂部快速報告按鈕內嵌閱讀
        document.querySelectorAll('.quick-doc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const title = btn.getAttribute('data-title');
                const path = btn.getAttribute('data-path');
                openDocModal({
                    title: title,
                    titleEn: 'WarOfAsia Master Document',
                    filePath: path,
                    wordCount: '核心總覽報告',
                    summary: `本報告 (${title}) 支援在 Web 儀表板內直接點擊閱讀全文 Markdown 內容。`,
                    highlights: [
                        '亞太區域兵推與防務體系核心架構導覽',
                        '無縫網頁端內嵌渲染，無需開啟新視窗分頁',
                        '即時態勢感知與戰略對策指引'
                    ]
                });
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

        // 重置按鈕
        btnResetAll.addEventListener('click', () => {
            WAR.warningMetrics.forEach(m => m.level = 'green');
            currentPhase = 1;
            renderWarningMetrics();
            renderScenarioStepper();
            calculateScores();
        });

        // 分類篩選按鈕
        metricCatBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                metricCatBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentMetricCatFilter = btn.getAttribute('data-cat');
                renderWarningMetrics();
            });
        });

        // 快速情境預設按鈕
        btnPresets.forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = btn.getAttribute('data-preset');
                applyPresetScenario(preset);
            });
        });
    }

    function applyPresetScenario(preset) {
        if (preset === 'normal') {
            WAR.warningMetrics.forEach(m => m.level = 'green');
        } else if (preset === 'grayzone') {
            WAR.warningMetrics.forEach((m, idx) => {
                if (['m1', 'm2', 'm6', 'm11', 'm12', 'm14', 'm18', 'm19', 'm21', 'm22', 'm28', 'm31', 'm32', 'm33', 'm35'].includes(m.id)) {
                    m.level = 'yellow';
                } else if (['m3', 'm7', 'm13', 'm25', 'm34'].includes(m.id)) {
                    m.level = 'red';
                } else {
                    m.level = 'green';
                }
            });
        } else if (preset === 'crisis') {
            WAR.warningMetrics.forEach((m, idx) => {
                if (['m1', 'm2', 'm3', 'm4', 'm6', 'm7', 'm11', 'm12', 'm14', 'm21', 'm22', 'm24', 'm25', 'm27', 'm28', 'm31', 'm32', 'm34', 'm36'].includes(m.id)) {
                    m.level = 'red';
                } else {
                    m.level = 'yellow';
                }
            });
        }
        renderWarningMetrics();
        calculateScores();
    }

    function renderWarningMetrics() {
        warningContainer.innerHTML = '';
        const filteredMetrics = WAR.warningMetrics.filter(m => {
            if (currentMetricCatFilter === 'all') return true;
            return m.category === currentMetricCatFilter;
        });

        filteredMetrics.forEach(metric => {
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
                    // 高效單卡片樣式切換，避免全 DOM 重繪
                    const parent = e.target.closest('.state-toggles');
                    if (parent) {
                        parent.querySelectorAll('.btn-toggle').forEach(b => b.classList.remove('active'));
                        e.target.classList.add('active');
                    }
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
        let greenCount = 0;
        let yellowCount = 0;
        let redCount = 0;

        WAR.warningMetrics.forEach(m => {
            totalWeight += m.weight * 2;
            if (m.level === 'green') {
                greenCount++;
            } else if (m.level === 'yellow') {
                yellowCount++;
                redScore += m.weight * 1;
            } else if (m.level === 'red') {
                redCount++;
                redScore += m.weight * 2;
            }
        });

        // 更新統計晶片
        if (chipGreenCount) chipGreenCount.innerText = `🟢 綠燈: ${greenCount}`;
        if (chipYellowCount) chipYellowCount.innerText = `🟡 黃燈: ${yellowCount}`;
        if (chipRedCount) chipRedCount.innerText = `🔴 紅燈: ${redCount}`;

        // 戰術危機臨界門檻基準分數 (不需要全亮才叫戰爭，符合 5~6 項核心重大指標即達 100% 危機臨界)
        const WAR_CRITICAL_THRESHOLD_SCORE = 100;

        const redPercent = Math.round((redScore / WAR_CRITICAL_THRESHOLD_SCORE) * 100);
        const blueResiliencePercent = Math.max(0, 100 - Math.round((redScore / WAR_CRITICAL_THRESHOLD_SCORE) * 75));

        document.getElementById('red-score-percent').innerText = `${redPercent}%`;
        document.getElementById('red-score-num').innerText = redScore;
        document.getElementById('red-progress-fill').style.width = `${Math.min(100, redPercent)}%`;

        document.getElementById('blue-score-percent').innerText = `${blueResiliencePercent}%`;
        document.getElementById('blue-score-num').innerText = Math.max(0, Math.round(blueResiliencePercent * 10));
        document.getElementById('blue-progress-fill').style.width = `${Math.min(100, Math.max(0, blueResiliencePercent))}%`;

        const statusBadge = document.getElementById('system-status');
        const statusText = document.getElementById('status-text');
        if (redPercent >= 100) {
            statusBadge.style.borderColor = 'var(--color-red)';
            statusBadge.style.color = 'var(--color-red)';
            statusBadge.style.background = 'rgba(255, 71, 87, 0.2)';
            statusText.innerText = `戰事爆發 - DEFCON 1 (全面對抗與第一島鏈同盟戰事)`;
        } else if (redPercent >= 75) {
            statusBadge.style.borderColor = 'var(--color-red)';
            statusBadge.style.color = 'var(--color-red)';
            statusBadge.style.background = 'rgba(255, 71, 87, 0.15)';
            statusText.innerText = `極度危機 - DEFCON 2 (臨戰動員與非動能電磁打擊)`;
        } else if (redPercent >= 50) {
            statusBadge.style.borderColor = 'var(--color-yellow)';
            statusBadge.style.color = 'var(--color-yellow)';
            statusBadge.style.background = 'rgba(255, 165, 2, 0.15)';
            statusText.innerText = `警戒升高 - DEFCON 2 (大規模演習轉準封鎖)`;
        } else if (redPercent >= 25) {
            statusBadge.style.borderColor = 'var(--color-yellow)';
            statusBadge.style.color = 'var(--color-yellow)';
            statusBadge.style.background = 'rgba(255, 165, 2, 0.1)';
            statusText.innerText = `灰帶升高 - DEFCON 3 (法律戰與海警強制臨檢)`;
        } else {
            statusBadge.style.borderColor = 'var(--color-green)';
            statusBadge.style.color = 'var(--color-green)';
            statusBadge.style.background = 'rgba(46, 213, 115, 0.15)';
            statusText.innerText = `系統運作中 - DEFCON 4 (潛伏塑形與常態監視)`;
        }

        let newPhase = 1;
        if (redPercent >= 130) newPhase = 6;
        else if (redPercent >= 100) newPhase = 5;
        else if (redPercent >= 75) newPhase = 4;
        else if (redPercent >= 50) newPhase = 3;
        else if (redPercent >= 25) newPhase = 2;
        else newPhase = 1;

        if (newPhase !== currentPhase) {
            currentPhase = newPhase;
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

    // ==========================================
    // 亞太戰術態勢地圖 (Situation Map) 互動
    // ==========================================
    function initSituationMap() {
        const nodes = document.querySelectorAll('.map-node');
        const titleEl = document.getElementById('map-info-title');
        const bodyEl = document.getElementById('map-info-body');

        const nodeDataMap = {
            taiwan: {
                title: '🇹🇼 臺灣戰術核心：防衛海峽與全社會韌性',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>戰略定位：</strong>第一島鏈關鍵樞紐，重層嚇阻與全社會防衛體系前線。</p>
                        <p style="margin-bottom:10px;"><strong>關鍵防護標的：</strong>淡水、頭城、枋山三大海纜登陸站，14條國際海底光纖，台積電先進製程晶圓廠與去中心化備援指揮所 (NCA)。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">受限附件備援狀態</span>
                                <span class="stat-val color-cyan">附件 A-G 常態運作</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">LEO 衛星頻寬儲備</span>
                                <span class="stat-val color-green">星鏈 / 國研備援</span>
                            </div>
                        </div>
                    </div>
                `
            },
            china: {
                title: '🇨🇳 紅方作戰部署：東部戰區與火箭軍前緣陣地',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>主力部隊：</strong>東部戰區第71, 72, 73集團軍、東海艦隊主力與火箭軍常導基地。</p>
                        <p style="margin-bottom:10px;"><strong>預警觀察重點：</strong>主力艦艇集中出港率 (Metric 3)、東部陣地戰術飛彈填裝前運 (Metric 2) 與民用滾裝船集結 (Metric 25)。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">海空禁航區劃設</span>
                                <span class="stat-val color-red">高風險監測中</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">ASAT 反衛星試探</span>
                                <span class="stat-val color-yellow">共軌雷射致盲警戒</span>
                            </div>
                        </div>
                    </div>
                `
            },
            japan: {
                title: '🇯🇵 日本西南諸島與沖繩防線',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>關鍵陣地：</strong>與那國島、石垣島、宮古島與沖繩本島美自衛隊聯防基地。</p>
                        <p style="margin-bottom:10px;"><strong>戰略防衛：</strong>部署 PAC-3 防空飛彈與 12 式反艦飛彈，啟動「國民保護法」實施離島物資防禦與緊急避難。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">同盟機制門檻</span>
                                <span class="stat-val color-cyan">美日安保第 5 條</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">西南諸島避難整備</span>
                                <span class="stat-val color-yellow">國民保護法準備</span>
                            </div>
                        </div>
                    </div>
                `
            },
            korea: {
                title: '🇰🇷 朝鮮半島 DMZ 戰場與北韓第二戰場',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>戰略角力：</strong>北韓配合紅方於 DMZ 部署砲兵群與發射洲際飛彈，牽制駐韓美軍 (USFK) 轉移。</p>
                        <p style="margin-bottom:10px;"><strong>美韓同盟：</strong>維持 DEFCON 高階戰備，阻絕兩線戰場外溢與漢城首都圈直接安全威脅。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">DMZ 警戒等級</span>
                                <span class="stat-val color-red">DEFCON 2 升級中</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">駐韓美軍資產</span>
                                <span class="stat-val color-green">第一線戰略嚇阻</span>
                            </div>
                        </div>
                    </div>
                `
            },
            scs: {
                title: '🇵🇭 南海島礁與巴士海峽生命線',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>戰術航道：</strong>巴士海峽與巴林塘海峽為國際海運與台灣南部關鍵戰略水域。</p>
                        <p style="margin-bottom:10px;"><strong>印太聯動：</strong>中菲仁愛礁衝突與《美菲共同防衛條約 (MDT)》連動，防止紅方切斷南海貿易航線。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">海運貿易涵蓋</span>
                                <span class="stat-val color-cyan">全球 30% 通過量</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">美菲 MDT 條約</span>
                                <span class="stat-val color-yellow">準軍事護航觸發點</span>
                            </div>
                        </div>
                    </div>
                `
            },
            guam: {
                title: '🇺🇸 美軍印太第二島鏈與關島打擊樞紐',
                body: `
                    <div style="line-height:1.6; color:var(--text-primary);">
                        <p style="margin-bottom:10px;"><strong>主力基地：</strong>安德森空軍基地 (Andersen AFB) 與關島海軍基地，美軍第七艦隊第5航艦打擊群 (CSG-5)。</p>
                        <p style="margin-bottom:10px;"><strong>遠程戰術：</strong>部署 B-21/B-2 匿蹤轟炸機與 LRASM 遠程反艦飛彈，提供第二島鏈強固戰略後援。</p>
                        <div class="map-stats-summary" style="margin-top:12px;">
                            <div class="stat-mini-card">
                                <span class="stat-lbl">航艦打擊群打擊力</span>
                                <span class="stat-val color-green">CSG-5 移防警戒</span>
                            </div>
                            <div class="stat-mini-card">
                                <span class="stat-lbl">太空態勢感知 (SSA)</span>
                                <span class="stat-val color-cyan">全時段全域涵蓋</span>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const nodeKey = node.getAttribute('data-node');
                const info = nodeDataMap[nodeKey];
                if (info && titleEl && bodyEl) {
                    titleEl.innerText = info.title;
                    bodyEl.innerHTML = info.body;
                }
            });
        });
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
            const relPath = c.docLink.replace(/^file:\/\/\/[iI]:\/Project\/WarOfAsia\//, '');
            item.innerHTML = `
                <span class="country-name">${c.flag} ${c.name}</span>
                <button class="btn-read-doc-path" data-title="${c.name} 國家戰略防衛與威脅架構" data-path="${relPath}">📄 查閱總版</button>
            `;
            item.querySelector('.btn-read-doc-path').addEventListener('click', () => {
                openDocModal({
                    title: `${c.flag} ${c.name} 國家級戰略防衛與威脅架構報告`,
                    titleEn: `${c.name} National Defense Master Report`,
                    filePath: relPath,
                    wordCount: '國家級總版',
                    summary: `核心戰術與防禦戰略：${c.strategy}\n\n體系脆弱性與挑戰：${c.vulnerabilities}`,
                    highlights: [
                        `國家戰略部署與防衛機制：${c.strategy}`,
                        `安全脆弱性與關鍵挑戰：${c.vulnerabilities}`,
                        `全社會防衛與跨國印太同盟應變體系`
                    ]
                });
            });
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
        if (!doc) return;
        const title = doc.title || '戰略報告文件';
        const titleEn = doc.titleEn || '';
        const summary = doc.summary || '';
        const highlights = doc.highlights || [];
        const filePath = doc.filePath || '';
        const wordCount = doc.wordCount || 'Markdown 格式';

        modalTitle.innerText = title;
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
                    <div>正在載入 Markdown 報告原文 (<code>${filePath}</code>)...</div>
                </div>
            </div>
            <div id="modal-tab-view-summary" style="display:none;">
                ${titleEn ? `<p style="color:var(--color-cyan); font-weight:600; margin-bottom:12px;">【${titleEn}】</p>` : ''}
                <div style="background:rgba(13,19,34,0.8); border-left:3px solid var(--color-cyan); padding:12px; margin-bottom:16px;">
                    <strong>核心摘要：</strong><br>${summary || '無摘要說明'}
                </div>
                ${highlights.length ? `
                <h4 style="color:#ffffff; margin-bottom:8px;">📌 本報告四大戰略重點（Key Findings）：</h4>
                <ul class="modal-highlight-list">
                    ${highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                ` : ''}
                <p style="margin-top:16px; color:var(--text-secondary); font-size:0.8rem;">
                    <strong>檔案路徑：</strong><code>${filePath}</code> | <strong>字數：</strong>${wordCount}
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
            const rawPath = `../${encodeURIComponent(filePath).replace(/%2F/g, '/')}`;
            const response = await fetch(rawPath);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} - 讀取失敗`);
            }
            const mdText = await response.text();
            
            // 使用 marked.js 渲染 HTML
            if (typeof marked !== 'undefined' && marked.parse) {
                viewFull.innerHTML = `<div class="markdown-rendered-body">${marked.parse(mdText)}</div>`;
                
                // 處理並動態繪製 Mermaid 視覺化流程圖 (按需懶載入)
                const mermaidCodes = viewFull.querySelectorAll('code.language-mermaid');
                if (mermaidCodes.length > 0) {
                    mermaidCodes.forEach((codeNode) => {
                        const preNode = codeNode.parentElement;
                        const div = document.createElement('div');
                        div.className = 'mermaid';
                        div.textContent = codeNode.textContent;
                        if (preNode && preNode.parentNode) {
                            preNode.parentNode.replaceChild(div, preNode);
                        }
                    });

                    setTimeout(async () => {
                        try {
                            await ensureMermaidLoaded();
                            const nodes = viewFull.querySelectorAll('.mermaid');
                            if (nodes.length > 0 && typeof mermaid !== 'undefined') {
                                await mermaid.run({ nodes: nodes });
                            }
                        } catch (mErr) {
                            console.warn('Mermaid diagram render error:', mErr);
                        }
                    }, 50);
                }
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
                    <h3 style="color:var(--color-cyan); margin-bottom:8px;">【${title}】報告重點整理</h3>
                    ${titleEn ? `<p style="margin-bottom:12px;"><strong>英文標題：</strong>${titleEn}</p>` : ''}
                    <p style="margin-bottom:12px;"><strong>核心摘要：</strong>${summary || '無摘要說明'}</p>
                    ${highlights.length ? `
                    <h4 style="color:#ffffff; margin-bottom:8px;">📌 戰略重點：</h4>
                    <ul class="modal-highlight-list">
                        ${highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                    ` : ''}
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
