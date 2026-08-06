/**
 * WarOfAsia 亞太戰略兵推與動態預警模擬器 - 核心數據庫 (data.js)
 */

window.WAR_DATA = {
    // 十七項複合預警指標庫
    warningMetrics: [
        {
            id: 'm1',
            category: 'military',
            categoryName: '軍事與動員',
            title: '大規模演習與海空禁航區劃設',
            desc: '紅方於臺灣海峽、東海或南海大規模劃設海空禁航區，進入準封鎖狀態。',
            weight: 9,
            realWorldBaseline: '美日情報聯合評估高風險',
            level: 'green'
        },
        {
            id: 'm2',
            category: 'military',
            categoryName: '軍事與動員',
            title: '戰術飛彈與火箭軍部署前緣陣地',
            desc: '東部及南部戰區火箭軍陣地出現車輛集結、彈藥前運與頻率異常。',
            weight: 9,
            realWorldBaseline: '火箭軍陣地前運動態',
            level: 'green'
        },
        {
            id: 'm3',
            category: 'military',
            categoryName: '軍事與動員',
            title: '海軍主力艦艇集中出港率 > 85%',
            desc: '三大艦隊主力作戰艦艇大規模離開基地，登陸艦群與民用滾裝船集結。',
            weight: 10,
            realWorldBaseline: '滾裝船與登陸艦集結',
            level: 'green'
        },
        {
            id: 'm4',
            category: 'military',
            categoryName: '軍事與動員',
            title: '預備役與野戰醫療集結調度',
            desc: '沿海省份動員預備役人員，後勤醫院空出病床與調集大量戰傷血庫。',
            weight: 8,
            realWorldBaseline: '戰時野戰醫療血庫徵調',
            level: 'green'
        },
        {
            id: 'm5',
            category: 'military',
            categoryName: '軍事與動員',
            title: '對臺實體模型基地軍演頻率激增',
            desc: '朱日和及沿海基地對臺特種作戰與模擬博愛特區突襲演練達到峰值。',
            weight: 6,
            realWorldBaseline: '朱日和實體模型突襲特訓',
            level: 'green'
        },
        {
            id: 'm6',
            category: 'economy',
            categoryName: '經濟與戰略物資',
            title: '大宗原油、鐵礦與糧食異常囤積',
            desc: '紅方連續數月激增原油、鐵礦砂與戰略糧食進口，並封鎖出口統計。',
            weight: 8,
            realWorldBaseline: '國家戰略物資備用天數激增',
            level: 'green'
        },
        {
            id: 'm7',
            category: 'economy',
            categoryName: '經濟與戰略物資',
            title: '外資與外企資產連日異常抽離',
            desc: '跨國金融機構啟動避險機制，外資拋售股債並清算實體資產。',
            weight: 7,
            realWorldBaseline: '資本流出與金融機構避險',
            level: 'green'
        },
        {
            id: 'm8',
            category: 'economy',
            categoryName: '經濟與戰略物資',
            title: '外匯儲備資產多元化與黃金移轉',
            desc: '減持美債並轉移海外美元存款至離岸金庫或實體黃金避難。',
            weight: 6,
            realWorldBaseline: '去美元化與實體黃金儲備',
            level: 'green'
        },
        {
            id: 'm9',
            category: 'economy',
            categoryName: '經濟與戰略物資',
            title: '關鍵半導體與高科技零組件管制',
            desc: '實施雙向技術出口管制，限縮稀土出口並扣押境內外資設備。',
            weight: 7,
            realWorldBaseline: '稀土與關鍵金屬禁運管制',
            level: 'green'
        },
        {
            id: 'm10',
            category: 'economy',
            categoryName: '經濟與戰略物資',
            title: '國內民生經濟民怨與戰爭轉移風險',
            desc: '房地產與地方債危機加劇，高層試圖透過對外軍事冒險轉移內部壓力。',
            weight: 8,
            realWorldBaseline: '內部經濟矛盾對外冒險轉移',
            level: 'green'
        },
        {
            id: 'm11',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '跨境 VPN / eSIM 數據流量異常飆升',
            desc: '灰色通訊通道流量激增，伴隨未授權高權限帳號登入嘗試。',
            weight: 8,
            realWorldBaseline: '跨境灰色漫遊與代理登入監測',
            level: 'green'
        },
        {
            id: 'm12',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '海底電纜與微波站實體/網路威脅',
            desc: '主要海底電纜登陸站遭遇 DDoS 攻擊，周邊海域水下無人機活動頻繁。',
            weight: 9,
            realWorldBaseline: '海纜登陸站實體/數位安全防護',
            level: 'green'
        },
        {
            id: 'm13',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '海外社群平台協同行為 (CIB) 認知攻勢',
            desc: '大量機器人帳號散播「美軍棄臺」、「政治迫降」與「防衛無效」敘事。',
            weight: 7,
            realWorldBaseline: 'AI 協同機器人深偽認知操作',
            level: 'green'
        },
        {
            id: 'm14',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '關鍵基礎設施 (CI) 資安入侵警報',
            desc: '電網、水利、金融系統偵測到零日漏洞 (Zero-day) 潛伏惡意程式。',
            weight: 9,
            realWorldBaseline: '電網水利系統零日漏洞攻擊',
            level: 'green'
        },
        {
            id: 'm15',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '日美同盟離間與沖繩政治分化',
            desc: '針對日本沖繩/西南諸島發動美軍基地爭議與自治分化認知戰。',
            weight: 6,
            realWorldBaseline: '西南諸島民意分化與離間試圖',
            level: 'green'
        },
        {
            id: 'm16',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '朝鮮半島 DMZ 與黃海軍事挑釁連動',
            desc: '北韓配合發射洲際飛彈或於黃海劃設警戒區，牽制駐韓美軍。',
            weight: 7,
            realWorldBaseline: '北韓 DMZ 飛彈試射牽制連動',
            level: 'green'
        },
        {
            id: 'm17',
            category: 'infowar',
            categoryName: '資訊與認知作戰',
            title: '中俄朝三方外交聯合孤立與牽制',
            desc: '於聯合國安理會行使否決權，阻撓國際針對臺海與印太危機介入。',
            weight: 6,
            realWorldBaseline: '安理會否決權與國際法外交阻撓',
            level: 'green'
        }
    ],

    // 兵推推演階段 (Phases)
    scenarios: [
        {
            phase: 1,
            name: '階段一：灰帶威脅與預警指標亮燈',
            desc: '紅方啟動「戰狼政策」與多面向灰色地帶襲擾，17 項指標中軍事與資訊燈號陸續由綠轉黃。藍方啟動國安預警機制與情報共享。',
            threshold: 20
        },
        {
            phase: 2,
            name: '階段二：海空隔離與關鍵基礎設施切斷',
            desc: '紅方以演習名義實施海空實彈封鎖，切斷海底電纜與微波站。臺灣與日本西南諸島面臨能源與物流中斷風險。藍方啟動受限附件 A-E 備援處方。',
            threshold: 50
        },
        {
            phase: 3,
            name: '階段三：多國聯防與朝鮮半島雙重戰場外溢',
            desc: '危機升高為區域衝突。日本啟動國民保護法與自衛隊動員；美軍啟動印太快速反應；北韓於 DMZ 啟動第二戰場牽制韓國。',
            threshold: 75
        }
    ],

    // 受限附件應變處方對策庫
    annexActions: [
        {
            id: 'annexA',
            name: '受限附件 A：國家核心功能與代理順位清冊',
            triggerScore: 30,
            status: '待命',
            actions: [
                '啟動正副元首與閣員緊急代理授權機制',
                '移轉核心指揮權至去中心化備援基地',
                '通報國際盟國備援指揮系統節點'
            ]
        },
        {
            id: 'annexB',
            name: '受限附件 B：關鍵基礎設施 (CI) 相依與替代節點',
            triggerScore: 45,
            status: '待命',
            actions: [
                '切斷主電網敏感節點，啟動微電網與柴油發電機',
                '開啟水資源與石油戰略庫存管制配給',
                '啟用關鍵金融數據備援離岸鏡像'
            ]
        },
        {
            id: 'annexC',
            name: '受限附件 C：高權限人員與供應商風險清冊',
            triggerScore: 40,
            status: '待命',
            actions: [
                '強制啟動機密系統二階段 MFA 零信任驗證',
                '凍結外部供應商權限並執行即時資安稽核',
                '監控異常高權限帳號數據傳輸行為'
            ]
        },
        {
            id: 'annexD',
            name: '受限附件 D：VPN / eSIM 跨境通信供應鏈清冊',
            triggerScore: 55,
            status: '待命',
            actions: [
                '切斷具中國背景之跨境數據漫遊通道',
                '啟動加密政府專用 VPN 與安全漫遊白名單',
                '發布資安通告阻斷假訊息轉接節點'
            ]
        },
        {
            id: 'annexE',
            name: '受限附件 E：海纜衛星與緊急通信容量',
            triggerScore: 60,
            status: '待命',
            actions: [
                '切換至低軌衛星 (LEO) 與中軌衛星 (MEO) 緊急頻寬',
                '啟動跨海峽微波站備援對點連線',
                '優先保障軍政與民生應急通訊頻寬配額'
            ]
        }
    ],

    // 四國區域戰略數據卡片
    countries: {
        china: {
            name: '中國 (紅方)',
            flag: '🇨🇳',
            docLink: '中國/中國紅方國家級滲透與混合威脅架構_完整總版.md',
            strategy: '黨國一體集中指揮、戰狼外交威懾、灰帶海空隔離、認知迫降與對臺實體模型演練。',
            vulnerabilities: '集中指揮「單一情勢圖失真」、基層報喜不報憂、多戰區後勤資源分散、房地產與地方債民怨。'
        },
        japan: {
            name: '日本 (紅/藍方)',
            flag: '🇯🇵',
            docLink: '日本/日本藍方國家持續運作與全社會防衛架構_完整總版.md',
            strategy: '日美同盟防衛、西南諸島 (與那國/石垣/宮古) 離島避難、國民保護法啟動與民生物資防護。',
            vulnerabilities: '紅方試圖離間日美信任、離島物資輸送脆弱、災害與軍事危機疊加效應。'
        },
        taiwan: {
            name: '臺灣 (藍方/紅方威脅)',
            flag: '🇹🇼',
            docLink: '臺灣/2027中共侵臺情境_區域軍政環境與複合預警評估_完整總版.md',
            strategy: '全社會防衛韌性、重層嚇阻、關鍵基礎設施 (CI) 備援、海底電纜/衛星多元通訊與受限附件 A-E 機制。',
            vulnerabilities: '灰色地帶封鎖、海底電纜切斷風險、VPN/eSIM 認知滲透與政治迫降壓力。'
        },
        korea: {
            name: '韓國 (藍/紅方雙重戰場)',
            flag: '🇰🇷',
            docLink: '韓國/韓國藍方_臺海外溢北韓第二戰場與中國複合威脅_完整總版.md',
            strategy: '美韓同盟 (USFK) 防衛、處置北韓 DMZ 第二戰場挑釁、維持印太戰略自主與國際支援。',
            vulnerabilities: '中俄朝三方協同施壓、首爾首都圈北韓砲擊威脅、臺海危機引致兩線作戰。'
        }
    },

    // 情境兵推劇本
    scenarioScripts: [
        {
            id: 'scenario-prewar',
            name: '臺灣前導戰爭 (開戰前破壞干擾與預警兵推)',
            nameEn: 'Taiwan Pre-War Sabotage & Gray-Zone Operations',
            status: 'completed',
            priority: 'P0',
            category: 'pre-war',
            filePath: '臺灣/前導戰爭/臺灣前導戰爭_正式開戰前破壞干擾威脅與藍方預警兵推_完整總版.md',
            description: '分析正式開戰前紅方發動之政治、網路、電磁、供應鏈與社會秩序破壞干擾，以及戰前最後 72 小時複合預警儀表板與兵推裁決規則。'
        },
        {
            id: 'scenario-48hr',
            name: '臺海危機 48 小時快速想定',
            nameEn: 'Taiwan Strait 48-Hour Rapid Scenario',
            status: 'completed',
            priority: 'P1',
            category: 'extreme',
            filePath: '臺灣/情境劇本_48小時全面封鎖極端想定.md',
            description: '推演 48 小時內中共全面海空封鎖臺灣之極端想定'
        },
        {
            id: 'scenario-scs',
            name: '南海島礁衝突與印太聯動',
            nameEn: 'South China Sea Conflict Spillover',
            status: 'completed',
            priority: 'P2',
            category: 'regional',
            filePath: '專題研究/情境劇本_南海島礁衝突與印太聯動.md',
            description: '中菲/中越南海島礁衝突導致印太區域多國聯動'
        },
        {
            id: 'scenario-econ',
            name: '稀土半導體封鎖與金融戰',
            nameEn: 'Rare Earth & Semiconductor Blockade',
            status: 'completed',
            priority: 'P3',
            category: 'economic',
            filePath: '專題研究/情境劇本_稀土半導體封鎖與金融戰.md',
            description: '經濟戰爭獨立情境推演'
        },
        {
            id: 'scenario-2028',
            name: '2028-2029 後續情境演變',
            nameEn: '2028-2029 Extended Timeline',
            status: 'completed',
            priority: 'P4',
            category: 'extended',
            filePath: '臺灣/情境劇本_2028-2029後續情境演變.md',
            description: '2027 臺海危機基準情境之後續延伸推演'
        }
    ],

    // 新興威脅專題研究
    thematicResearch: [
        {
            id: 'research-ai',
            name: 'AI 與自律武器戰爭',
            nameEn: 'AI & Autonomous Weapons Warfare',
            status: 'completed',
            priority: 'P1',
            filePath: '專題研究/AI與自律武器戰爭_紅藍方攻防分析.md',
            relatedModules: ['臺灣', '日本', '韓國', '中國'],
            keywords: ['drone swarm', 'AI-DSS', 'deepfake', 'cognitive warfare']
        },
        {
            id: 'research-cable',
            name: '海底電纜與通信安全',
            nameEn: 'Submarine Cable & Communication Security',
            status: 'completed',
            priority: 'P2',
            filePath: '專題研究/海底電纜與通信安全_脆弱性與備援分析.md',
            relatedModules: ['臺灣', '日本'],
            keywords: ['submarine cable', 'landing station', 'LEO', 'HAPS']
        },
        {
            id: 'research-semi',
            name: '半導體供應鏈安全',
            nameEn: 'Semiconductor Supply Chain Security',
            status: 'completed',
            priority: 'P3',
            filePath: '專題研究/半導體供應鏈安全_製程中斷全球影響.md',
            relatedModules: ['臺灣', '日本', '韓國'],
            keywords: ['TSMC', 'Samsung', 'CHIPS Act', 'advanced node']
        },
        {
            id: 'research-space',
            name: '太空與衛星安全',
            nameEn: 'Space & Satellite Security',
            status: 'completed',
            priority: 'P4',
            filePath: '專題研究/太空與衛星安全_反衛星與通信切斷.md',
            relatedModules: ['臺灣', '日本', '韓國', '中國'],
            keywords: ['ASAT', 'GPS spoofing', 'Starlink', 'Kessler syndrome']
        }
    ],

    // 四國聯合兵棋
    jointWarGame: {
        id: 'joint-wargame',
        name: '四國聯合兵棋統合報告',
        nameEn: 'Joint Four-Nation War Game Report',
        status: 'completed',
        filePath: '四國聯合兵棋統合報告.md',
        participants: ['臺灣', '日本', '韓國', '中國'],
        timelineRange: 'T-90 to T+30',
        outcomes: ['藍方聯防成功', '僵局與外交降級', '紅方達成既成事實']
    },

    // 四國聯合兵棋視覺化時間軸數據 (T-90 to T+30)
    jointWargameTimeline: [
        {
            timeCode: 'T-90',
            phaseName: '戰略預警與徵候期',
            summary: '紅方於東部/南部戰區啟動例行軍演掩護，糧食與原油囤積激增，VPN/eSIM跨境流量異常飆升。',
            taiwanStatus: '情報監偵系統發現指標 Metric 1-3 亮燈，國安會啟動常態防衛整備。',
            japanStatus: '防衛省強化沖繩與西南諸島雷達監視，評估海空警戒範圍。',
            koreaStatus: '維持 DMZ 高度監視，密切關注北韓飛彈試射連動。',
            usStatus: '印太司令部啟動衛星態勢感知 (SSA)，預警時間評估 60-90 天。',
            chinaMoves: '劃設多處海空臨時禁航區，東部戰區火箭軍陣地出現部隊前運。',
            tippingPoint: '指標 Metric 6 (原油與糧食囤積) 轉為黃燈警戒。'
        },
        {
            timeCode: 'T-30',
            phaseName: '灰色地帶升級與經濟動員',
            summary: '海警與民兵船隊集結海峽中線與爭議島礁，外資拋售股債，零日漏洞 (Zero-day) 嘗試入侵 CI 電網。',
            taiwanStatus: '國防部發布戰備指引，受限附件 C (高權限零信任) 與 附件 D 啟動防範。',
            japanStatus: '與那國島與石垣島啟動「國民保護法」初級物資配給與預備應變。',
            koreaStatus: '召開美韓同盟會商，確定漢城首都圈與黃海海域聯防警戒。',
            usStatus: '美軍第七艦隊第5航艦打擊群 (CSG) 於西太平洋實施戰略移防。',
            chinaMoves: '實施鎵/鍺出口限制與海纜登陸站 DDoS 飽和攻擊，進行「演習轉戰備」測試。',
            tippingPoint: '指標 Metric 7 (外資異常抽離) 與 Metric 14 (CI資安警報) 轉為紅燈。'
        },
        {
            timeCode: 'T-7',
            phaseName: '臨戰動員與切香腸極限',
            summary: '沿海省份空出戰傷血庫與動員預備役，滾裝船大規模集結，無人機頻繁侵入離島防空識別區。',
            taiwanStatus: 'NCA (國家指揮當局) 移轉至去中心化備援基地，啟動受限附件 A 與 附件 B。',
            japanStatus: '日本內閣通過防衛緊急動員，自衛隊於西南諸島部署 PAC-3 與反艦飛彈。',
            koreaStatus: '北韓於 DMZ 部署砲兵群與極音速飛彈，實施第二戰場戰略牽制。',
            usStatus: '美日台韓開啟即時情資共享通道 (GSOMIA / Five Eyes 擴大擴展)。',
            chinaMoves: '單方面宣布臺灣海峽為軍事安全管制區，強制攔查特種商船。',
            tippingPoint: '指標 Metric 3 (海軍集中出港>85%) 轉為紅燈，預警時間縮短至 7 天。'
        },
        {
            timeCode: 'T+0',
            phaseName: '衝突爆發與海空全面封鎖 (48h 想定)',
            summary: '紅方於凌晨 00:15 實施火箭軍飽和飛彈齊射打擊臺灣海空軍基地，切斷 14 條國際海底電纜中的 10 條。',
            taiwanStatus: '防空網全面攔截，啟動受限附件 E (LEO 衛星通信) 與全社會防衛體系抵抗。',
            japanStatus: '美日安保條約第 5 條啟用研判，日本西南諸島進入戰事避難與防衛作戰。',
            koreaStatus: '韓美聯合司令部升級至 DEFCON 2，應對北韓海空騷擾。',
            usStatus: '拜登/美總統發布緊急聲明，美軍印太打擊群向第一島鏈周邊集結。',
            chinaMoves: '動用高空電磁脈衝 (EMP) 與 AI 深偽認知戰宣稱「政治迫降」，海軍艦隊形成鐵桶封鎖。',
            tippingPoint: '臺海 48 小時生存測試，海底電纜切斷 70%+。'
        },
        {
            timeCode: 'T+6h',
            phaseName: '電磁資安打擊與海空封鎖固化',
            summary: '紅方無人機蜂群對通信塔與微波站實施波次攻擊，試圖創造資訊孤島。',
            taiwanStatus: '國軍指管啟用軍用高頻微波與微電網獨立運作，發布反認知迫降澄清。',
            japanStatus: '自衛隊海空軍與美軍艦艇對海峽東側水域實施反封鎖巡航。',
            koreaStatus: '防止北韓挑釁外溢，駐韓美軍調動部分空中偵察資產支援台海。',
            usStatus: '美軍啟動太空態勢感知 (SSA) 與星鏈 (Starlink/Starshield) 優先頻寬支援。',
            chinaMoves: '封鎖圈延伸至綠島、蘭嶼及巴士海峽航道。',
            tippingPoint: '藍方全社會防衛韌性及受限附件 B (關鍵 CI 替代節點) 生存率測驗。'
        },
        {
            timeCode: 'T+24h',
            phaseName: '第一島鏈突破與多邊介入臨界',
            summary: '紅方試圖進行奪島或登陸先遣作戰，美日聯合艦隊於菲律賓海與南海側翼與紅方對峙。',
            taiwanStatus: '雄風三型與魚叉反艦飛彈陣地實施反制齊射，阻斷紅方前緣艦艇。',
            japanStatus: '首相宣布啟動集體自衛權，自衛隊進入「重要影響事態」支援應戰。',
            koreaStatus: '南韓政府發表聯合聲明，維護海峽航行自由與印太供應鏈安全。',
            usStatus: '美軍打擊群施展遠程精準打擊 (LRASM) 與防空護護航。',
            chinaMoves: '動用反衛星 (ASAT) 地基雷射與 GPS 強力干擾試圖癱瘓藍方導引。',
            tippingPoint: '美日聯合防禦啟動門檻與核升級紅線管理。'
        },
        {
            timeCode: 'T+7d',
            phaseName: '多國戰術反制與經濟封鎖交織',
            summary: '衝突進入第 7 天，紅方封鎖遭到美日反封鎖切斷，國際啟動全面金融 SWIFT 與半導體禁運。',
            taiwanStatus: '全社會防衛物資配給平穩，關鍵製程工廠啟用焦土/安全備援機制。',
            japanStatus: '日本港口成為同盟後勤支援中心，啟動民生物資戰備儲備。',
            koreaStatus: '維持朝鮮半島強大嚇阻，阻止北韓冒進。',
            usStatus: '多國同盟控制第一島鏈外圍航道，建立安全補給走廊。',
            chinaMoves: '面臨半導體斷供與外匯凍結的巨大全球連鎖經濟壓力。',
            tippingPoint: '全球半導體供應鏈中斷效應全面擴散，全球 GDP 損失進入兆美元計算。'
        },
        {
            timeCode: 'T+30d',
            phaseName: '長久對峙與外交停火條約溝通',
            summary: '紅方封鎖戰略無法達成快速政治迫降，藍方防禦網與盟國制裁發揮戰略嚇阻效果。',
            taiwanStatus: '國家指揮當局存活，指管與全社會韌性驗證通過。',
            japanStatus: '美日同盟與西南諸島防衛機制升級為常態化防禦網路。',
            koreaStatus: '順利壓制雙重戰場風險，印太多邊安全架構轉型為網格化 (Lattice Model)。',
            usStatus: '成功維護第一島鏈安全與印太秩序。',
            chinaMoves: '戰略代價過高，轉向外交談談停停與經濟降溫談判。',
            tippingPoint: '紅方既成事實失敗，亞太安全格局重組。'
        }
    ],

    // 專題研究與情境劇本完整圖書館數據 (10 份報告)
    researchLibrary: [
        {
            id: 'doc-prewar',
            title: '【前導戰爭】正式開戰前破壞干擾威脅與藍方預警兵推 (完整總版)',
            titleEn: 'Taiwan Pre-War Sabotage & Gray-Zone Operations (Master Edition)',
            category: 'scenario',
            categoryName: '情境劇本',
            filePath: '臺灣/前導戰爭/臺灣前導戰爭_正式開戰前破壞干擾威脅與藍方預警兵推_完整總版.md',
            wordCount: '50,850 字',
            summary: '全盤剖析正式開戰前紅方發動之政治、網路、電磁、供應鏈與社會秩序破壞干擾，以及戰前最後 72 小時複合預警儀表板與第八卷兵推裁決規則。',
            tags: ['前導戰爭', '戰前72小時', '電磁資安干擾', '兵推裁決', '受限附件'],
            highlights: [
                '前導戰爭概念四階段：潛伏塑形、升高施壓、戰術臨戰、全面爆發',
                '戰前最後 72 小時每 6 小時情勢追蹤表與三級燈號',
                '第八卷兵推 Inject 事件注入與 Control 裁判組裁決規則',
                '觀察附件 A-D 跨領域預警指標與決策紀錄模板'
            ]
        },
        {
            id: 'doc-48hr',
            title: '情境劇本：臺海危機 48 小時快速想定',
            titleEn: 'Taiwan Strait 48-Hour Rapid Scenario',
            category: 'scenario',
            categoryName: '情境劇本',
            filePath: '臺灣/情境劇本_48小時全面封鎖極端想定.md',
            wordCount: '14,900 字',
            summary: '探討紅方於極短預警時間（<12h）下，以演習轉戰備對臺灣實施 48 小時海空全面封鎖、資安與飛彈飽和打擊之極端想定。測試藍方 NCA 存活與受限附件 A-E 應變切換效率。',
            tags: ['48小時想定', '極限封鎖', '冷啟動', 'C4ISR韌性'],
            highlights: [
                '預警時間由數週壓縮至 12 小時以內',
                '海空禁航區與資安/電磁脈衝 (EMP) 攻勢先導',
                '不發動登陸，意圖透過資訊孤島達成政治迫降',
                '驗證受限附件 A-E 的動態切換處方'
            ]
        },
        {
            id: 'doc-2028',
            title: '情境劇本：2028-2029 後續情境演變',
            titleEn: '2028-2029 Extended Scenario Evolution',
            category: 'scenario',
            categoryName: '情境劇本',
            filePath: '臺灣/情境劇本_2028-2029後續情境演變.md',
            wordCount: '17,700 字',
            summary: '推演 2027 基準情境後的延伸發展，分析紅方軍事現代化達峰期（2028-2029）的潛在二次襲擾模式與印太安全重組。',
            tags: ['2028-2029', '時間線延伸', '長期對峙', '戰略重組'],
            highlights: [
                '紅方第三艘航艦 (福建號) 形成完整戰力後的雙航艦封鎖想定',
                '美日韓印太網格化安全架構常態化部署',
                '全社會防衛韌性在長期灰帶消耗戰中的表現'
            ]
        },
        {
            id: 'doc-scs',
            title: '情境劇本：南海島礁衝突與印太聯動',
            titleEn: 'South China Sea Conflict & Indo-Pacific Spillover',
            category: 'scenario',
            categoryName: '情境劇本',
            filePath: '專題研究/情境劇本_南海島礁衝突與印太聯動.md',
            wordCount: '13,500 字',
            summary: '評估仁愛礁與黃岩島爭端引發中菲美衝突，並向臺海及印太航航道外溢之雙線危機情境。',
            tags: ['南海爭端', '美菲MDT', '九段線', '雙線危機'],
            highlights: [
                '灰色地帶水砲與雷射照射升級為準軍事衝突',
                '美菲共同防衛條約 (MDT) 第 4/5 條觸發條件研判',
                '南海主航道遭封鎖對全球 30% 海運貿易的衝擊'
            ]
        },
        {
            id: 'doc-econ',
            title: '情境劇本：稀土半導體封鎖與金融戰',
            titleEn: 'Rare Earth & Semiconductor Blockade',
            category: 'scenario',
            categoryName: '情境劇本',
            filePath: '專題研究/情境劇本_稀土半導體封鎖與金融戰.md',
            wordCount: '11,900 字',
            summary: '分析非軍事熱戰下，紅方動用稀土管制、鎵鍺出口限制、SWIFT 替代支付與外資資產扣押的極限經濟戰情境。',
            tags: ['經濟戰', '稀土封鎖', 'SWIFT制裁', '金融反制'],
            highlights: [
                '紅方限縮關鍵戰略物資出口對西洋高科技與軍工之打擊',
                '藍方多國 SWIFT 切斷與離岸資產凍結反制機制',
                '全球供應鏈解耦與市場重組代價評估'
            ]
        },
        {
            id: 'doc-ai',
            title: '專題研究：AI與自律武器戰爭_紅藍方攻防分析',
            titleEn: 'AI & Autonomous Weapons Warfare',
            category: 'research',
            categoryName: '專題研究',
            filePath: '專題研究/AI與自律武器戰爭_紅藍方攻防分析.md',
            wordCount: '15,100 字',
            summary: '深入探討 PLA 智能化戰爭布局、無人機蜂群 (Drone Swarm)、AI-Augmented C2 與藍方反蜂群 (M-LIDS/Iron Dome) 技術與 AI 倫理 ROE。',
            tags: ['AI戰爭', 'LAWS自律武器', '無人機蜂群', 'AI倫理ROE'],
            highlights: [
                'LAWS 三層級（人在迴路 HITL / 人在旁路 HOTL / 人在迴路外 HOOTL）對比',
                'PLA 智能化戰爭與軍民融合 (MCF) 技術移轉實例',
                '藍方反無人機蜂群與強電磁干擾應對架構',
                'CCW 國際公約框架下各國 AI 軍備控制立場分析'
            ]
        },
        {
            id: 'doc-cable',
            title: '專題研究：海底電纜與通信安全_脆弱性與備援分析',
            titleEn: 'Submarine Cable & Communication Security',
            category: 'research',
            categoryName: '專題研究',
            filePath: '專題研究/海底電纜與通信安全_脆弱性與備援分析.md',
            wordCount: '15,600 字',
            summary: '解析全球 95%+ 數據經由海纜傳輸之戰略脆弱性，評估臺灣 14 條海纜登陸站風險、切斷連鎖反應與 LEO/MEO 衛星備援架構。',
            tags: ['海底電纜', '通信安全', 'LEO衛星備援', '受限附件E'],
            highlights: [
                '頭城、枋山、淡水三大登陸站實體與網路威脅評估',
                '戰時全球僅 60+ 艘海纜修復船導致無法即時修復之現實',
                '受限附件 E 衛星頻寬與微波備援鏈路分層保護',
                '多國海纜保護公約與印太安全巡護機制'
            ]
        },
        {
            id: 'doc-semi',
            title: '專題研究：半導體供應鏈安全_製程中斷全球影響',
            titleEn: 'Semiconductor Supply Chain Security',
            category: 'research',
            categoryName: '專題研究',
            filePath: '專題研究/半導體供應鏈安全_製程中斷全球影響.md',
            wordCount: '17,600 字',
            summary: '探討「矽盾」(Silicon Shield) 理論與局限，評估台積電 (TSMC) 先進製程斷供對全球汽車、消費電子、AI 算力與國防軍工的連鎖衝擊。',
            tags: ['半導體供應鏈', '矽盾理論', 'TSMC斷供', 'CHIPS Act'],
            highlights: [
                '臺灣掌握全球 90%+ 先進製程之戰略雙刃劍分析',
                '斷供 30天/90天/180天 對全球 GDP 與產能的衝擊模型',
                '美日歐 CHIPS Act 在地化製造時間與成本評估',
                '設施安全防護與關鍵專利/人才戰略保障'
            ]
        },
        {
            id: 'doc-space',
            title: '專題研究：太空與衛星安全_反衛星與通信切斷',
            titleEn: 'Space & Satellite Security',
            category: 'research',
            categoryName: '專題研究',
            filePath: '專題研究/太空與衛星安全_反衛星與通信切斷.md',
            wordCount: '17,100 字',
            summary: '分析紅方動能 (SC-19/DN-3)、共軌捕獲、地基雷射致盲與 GPS 欺騙等反衛星 (ASAT) 能力，及藍方星網分散與快發發射韌性。',
            tags: ['太空安全', '反衛星ASAT', 'GPS欺騙', '太空態勢感知'],
            highlights: [
                '太空作為第五作戰領域 (Fifth Domain) 之戰略競爭',
                'GPS/GNSS 失能對精確導引武器與民航的連鎖影響',
                '藍方小衛星快速補充與地基 eLoran 備援導航',
                'Kessler Syndrome 太空碎片武器化風險與核門檻紅線'
            ]
        },
        {
            id: 'doc-joint',
            title: '四國聯合兵棋統合報告',
            titleEn: 'Four-Nation Joint Wargame Integration Report',
            category: 'joint',
            categoryName: '聯合兵棋',
            filePath: '四國聯合兵棋統合報告.md',
            wordCount: '22,200 字',
            summary: 'WarOfAsia 專案之核心統合報告！跨國整合臺日韓美四國模組，針對紅方同步多線施壓實施 T-90 至 T+30 聯合兵棋推演與戰略建議。',
            tags: ['四國聯合兵棋', 'T-90 to T+30', '美日安保', '網格化同盟'],
            highlights: [
                '四國戰略角色定位（臺灣前線/日本樞紐/韓國北向嚇阻/美國主力打擊）',
                '紅方多線同步施壓（臺海主攻+東海牽制+朝鮮半島第二戰場+南海外溢）',
                '藍方跨國協同防禦機制（GSOMIA、情報共享、SWIFT制裁、同盟條約啟動）',
                '紅藍雙方關鍵翻轉點 (Tipping Points) 與短中長期具體政策建議'
            ]
        }
    ],

    // 互動式戰略決策樹模擬器數據 (4 大核心想定)
    wargameDecisionTrees: [
        {
            id: 'dt-48hr',
            title: '想定一：臺海 48 小時極端封鎖與突襲應變',
            description: '你擔任臺灣國家指揮當局 (NCA) 戰術指揮官。紅方在極短預警（<12h）下發動 48 小時海空封鎖與資安/飛彈飽和打擊。你必須在關鍵節點做出決策，維持國家存活與同盟協同。',
            initialState: {
                resilience: 80,
                allianceSupport: 20,
                spilloverRisk: 15,
                panicLevel: 25
            },
            startNodeId: 'node-1'
        },
        {
            id: 'dt-scs',
            title: '想定二：南海島礁衝突外溢與印太雙線危機',
            description: '中菲於仁愛礁爆發準軍事衝突並觸發美菲 MDT。紅方隨即在臺海實施戰略牽制與海空臨檢。你將指揮藍方進行跨國協同與防禦部署。',
            initialState: {
                resilience: 85,
                allianceSupport: 40,
                spilloverRisk: 30,
                panicLevel: 20
            },
            startNodeId: 'node-scs-1'
        },
        {
            id: 'dt-ai',
            title: '想定三：AI 自律武器飽和打擊與電磁網路防禦',
            description: '紅方大規模部署無人機蜂群、AI-C2 飽和攻擊與 AI 深偽認知迫降戰。你必須運用反蜂群技術、零信任驗證與衛星頻寬保衛戰場知覺。',
            initialState: {
                resilience: 75,
                allianceSupport: 30,
                spilloverRisk: 20,
                panicLevel: 35
            },
            startNodeId: 'node-ai-1'
        },
        {
            id: 'dt-prewar',
            title: '想定四：臺灣前導戰爭（開戰前破壞干擾與預警處置）',
            description: '你擔任國安與防禦協調指揮官。紅方在正式開戰前發動跨領域破壞（電磁資安、高權限滲透、民生物流干擾與灰色地帶準封鎖）。你必須在最後 72 小時關鍵節點正確處置注入事件。',
            initialState: {
                resilience: 85,
                allianceSupport: 25,
                spilloverRisk: 10,
                panicLevel: 20
            },
            startNodeId: 'node-pre-1'
        }
    ],

    // 決策樹節點數據庫
    decisionTreeNodes: {
        // === 48小時想定節點 ===
        'node-1': {
            timeCode: 'T-12h 戰略預警',
            title: '徵候異常與演習轉戰備疑雲',
            content: '情報系統回報：紅方東部戰區軍演突然劃設海峽中線西側多處禁航區，且海纜登陸站流量異常飆升，預警指標 Metric 1 與 Metric 11 亮黃燈。但尚未收到紅方戰術飛彈填裝之明確視訊。',
            choices: [
                {
                    text: 'A. 陸續提升戰備等級，啟動【受限附件 C】零信任驗證與【受限附件 D】防護',
                    effects: { resilience: +10, allianceSupport: +10, panicLevel: +5, spilloverRisk: 0 },
                    feedback: '決策果斷！成功在紅方第一波資安試探前鞏固了核心網路權限，美日情報機關同步提高警戒。',
                    nextNodeId: 'node-2'
                },
                {
                    text: 'B. 保持常態警戒，持續監視，避免過度反應造成民生恐慌與股市動盪',
                    effects: { resilience: -15, allianceSupport: -5, panicLevel: 0, spilloverRisk: +5 },
                    feedback: '警覺性不足。紅方潛伏資安惡意程式成功植入部分電力管理節點，造成後續應變遲滯。',
                    nextNodeId: 'node-2'
                }
            ]
        },
        'node-2': {
            timeCode: 'T+0 飛彈齊射與海纜切斷',
            title: '首波動能與非動能打擊',
            content: '凌晨 00:15，紅方發動首波戰術飛彈與遠程火箭齊射打擊雷達站與機場跑道，同時 14 條國際海底電纜有 8 條遭實體切斷！民間網路與國際通訊大面積中斷，恐慌情緒激增。',
            choices: [
                {
                    text: 'A. 啟動【受限附件 A】去中心化備援指揮與【受限附件 E】低軌衛星 (LEO) 緊急頻寬',
                    effects: { resilience: +15, allianceSupport: +15, panicLevel: -10, spilloverRisk: +10 },
                    feedback: '非常出色！國家指揮當局存活並成功向全球播送總統抗戰聲明，星鏈與軍用頻寬接管應急通訊。',
                    nextNodeId: 'node-3'
                },
                {
                    text: 'B. 集中資源於主指揮所修復主網，暫不開啟離岸衛星備援',
                    effects: { resilience: -20, allianceSupport: -15, panicLevel: +20, spilloverRisk: +10 },
                    feedback: '主指揮所遭紅方電磁干擾與資安飽和打擊，命令傳達出現 3 小時空白，民間出現假訊息迫降謠言。',
                    nextNodeId: 'node-3'
                }
            ]
        },
        'node-3': {
            timeCode: 'T+6h 海空封鎖固化',
            title: '海峽封鎖圈形成與盟國介入溝通',
            content: '紅方艦隊與海警船在臺灣東西兩側海域形成鐵桶封鎖，宣布此區為軍事演習禁航區。美日艦隊於第一島鏈外圍集結，美方詢問藍方是否請求啟動美日安保防衛與導航護航。',
            choices: [
                {
                    text: 'A. 正式請求美日啟動同盟機制，並提供巴士海峽與海峽東側作戰數據與後勤支援',
                    effects: { resilience: +10, allianceSupport: +25, panicLevel: -5, spilloverRisk: +20 },
                    feedback: '同盟回應迅速！美軍第七艦隊與日本自衛隊啟動「重要影響事態」應變，海空護航走廊開始構建。',
                    nextNodeId: 'node-4'
                },
                {
                    text: 'B. 避免衝突擴大為全球大戰，僅要求盟國實施外交與經濟制裁，由國軍獨自破封',
                    effects: { resilience: -10, allianceSupport: -10, panicLevel: +10, spilloverRisk: -10 },
                    feedback: '國軍彈藥與海空護航壓力極大，封鎖持續影響能源與糧食安全，補給線面臨嚴重消耗。',
                    nextNodeId: 'node-4'
                }
            ]
        },
        'node-4': {
            timeCode: 'T+24h 臨界持久戰測試',
            title: '關鍵 CI 替代與全社會防衛',
            content: '封鎖進入第 24 小時。主電網部分受損，紅方發動 AI 深偽影片宣稱「高層已搭機離境」。全社會防衛機制與民生物資儲備面臨考驗。',
            choices: [
                {
                    text: 'A. 啟動【受限附件 B】微電網與柴油發電機配給，並由全社會防衛體系執行分區防空與民生物資配發',
                    effects: { resilience: +20, allianceSupport: +10, panicLevel: -15, spilloverRisk: 0 },
                    feedback: '全社會韌性極佳！民心穩定，防空民防有序運作，成功化解紅方認知迫降攻勢。',
                    nextNodeId: 'node-final'
                },
                {
                    text: 'B. 依賴中央統一配給物資，未授權地方分區防衛與自力物資調配',
                    effects: { resilience: -15, allianceSupport: 0, panicLevel: +15, spilloverRisk: 0 },
                    feedback: '通訊受阻導致物流卡關，部分地區物資搶購，社會不安情緒上升。',
                    nextNodeId: 'node-final'
                }
            ]
        },
        'node-final': {
            isEnd: true,
            title: '推演結束：48 小時極限想定評估報告',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 110) {
                    return {
                        resultTitle: '🏆 卓越勝利：同盟聯防成功，紅方封鎖破局',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '國家指揮當局存活率 100%，受限附件 A-E 完美執行。美日同盟及時介入，紅方無法達成 48 小時快速迫降目標，戰略意圖徹底挫敗！'
                    };
                } else if (totalScore >= 70) {
                    return {
                        resultTitle: '🛡️ 戰術堅守：維持僵局，進入外交與經濟制裁階段',
                        rating: 'A 級防禦',
                        color: 'var(--color-yellow)',
                        summary: '防禦網承受住首波衝擊，雖然部分 CI 與通訊受損，但社會韌性尚存。國際同盟展開強烈 SWIFT 金融制裁與海空反封鎖對峙。'
                    };
                } else {
                    return {
                        resultTitle: '⚠️ 嚴重危機：資訊孤島與指管失能風險',
                        rating: 'C 級警示',
                        color: 'var(--color-red)',
                        summary: '因通訊備援啟動過遲與社會恐慌，指管與同盟協同出現破綻。需檢討預警機制與受限附件處方之執行順序。'
                    };
                }
            }
        },

        // === 南海想定節點 ===
        'node-scs-1': {
            timeCode: 'Phase 1: 南海海上衝突爆發',
            title: '仁愛礁補給船遭水砲與強行登檢',
            content: '紅方海警與民兵船對菲律賓補給船實施高壓水砲打擊，造成菲國人員傷亡。菲國聲稱觸發 1951《美菲共同防衛條約 (MDT)》，要求美軍護航。同時紅方於臺海實施海空牽制演習。',
            choices: [
                {
                    text: 'A. 臺灣發表聲明維持南海自由航行，並加強太平島與東沙群島戰備與衛星偵察',
                    effects: { resilience: +10, allianceSupport: +15, panicLevel: -5, spilloverRisk: +10 },
                    feedback: '立場明確且備戰周全！獲得美菲日同盟高度肯定，有效鞏固南海側翼防禦。',
                    nextNodeId: 'node-scs-2'
                },
                {
                    text: 'B. 保持中立沉默，避免捲入美菲中三角衝突',
                    effects: { resilience: -10, allianceSupport: -15, panicLevel: +5, spilloverRisk: +15 },
                    feedback: '遭國際盟友懷疑戰略決心，且紅方隨後順水推舟加強海峽臨檢壓力。',
                    nextNodeId: 'node-scs-2'
                }
            ]
        },
        'node-scs-2': {
            timeCode: 'Phase 2: 印太雙線危機外溢',
            title: '美軍航艦進入南海與臺海協同牽制',
            content: '美軍第7艦隊進入南海執行護航作戰，紅方隨即宣布臺灣海峽東側為軍事安全區，並發動經濟制裁禁止部分農漁產品出口。',
            choices: [
                {
                    text: 'A. 啟動【稀土與半導體安全處方】，與美日韓協同實施關鍵零組件對紅方管制反制',
                    effects: { resilience: +15, allianceSupport: +20, panicLevel: -5, spilloverRisk: +15 },
                    feedback: '經濟戰反制精準！紅方高科技產業鏈面臨斷供壓力，不得不放緩雙線升級節奏。',
                    nextNodeId: 'node-scs-final'
                },
                {
                    text: 'B. 單方面尋求經貿妥協，退讓部分海空臨檢權利',
                    effects: { resilience: -25, allianceSupport: -20, panicLevel: +20, spilloverRisk: +25 },
                    feedback: '退讓未能換取安全，紅方進一步推進「切香腸戰術」，主權與海域受嚴重侵蝕。',
                    nextNodeId: 'node-scs-final'
                }
            ]
        },
        'node-scs-final': {
            isEnd: true,
            title: '推演結束：南海與臺海雙線危機評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 95) {
                    return {
                        resultTitle: '🏆 印太多邊聯防成功：雙線威懾奏效',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '美菲日台多邊安全架構成功發揮對稱與非對稱嚇阻，紅方雙線冒險戰略失算，南海與臺海航行自由獲保障。'
                    };
                } else {
                    return {
                        resultTitle: '⚠️ 灰色地帶侵蝕：危機受控但戰略空間縮減',
                        rating: 'B 級防禦',
                        color: 'var(--color-yellow)',
                        summary: '雖然未爆發大規模熱戰，但紅方在南海與海峽確立了更高強度的海警巡航常態。需深化跨國聯防運作機制。'
                    };
                }
            }
        },

        // === AI想定節點 ===
        'node-ai-1': {
            timeCode: 'Phase 1: AI 認知戰與自律無人機突襲',
            title: '深偽影片發布與無人機蜂群襲擾',
            content: '紅方運用生成式 AI 製作總統簽署「停戰降書」之深偽 (Deepfake) 影片於網路瘋傳，同時出動數百架小微型無人機蜂群襲擾關鍵電網與通信基地台。',
            choices: [
                {
                    text: 'A. 啟用【受限附件 C】資安防護與藍方 AI-Enabled 辨識系統，秒級下架假影片並啟用 Counter-Swarm 電磁干擾槍打擊蜂群',
                    effects: { resilience: +20, allianceSupport: +15, panicLevel: -20, spilloverRisk: 0 },
                    feedback: '科技反制迅速！深偽影片第一時間遭 AI 標註澄清，無人機蜂群 80% 遭定向電磁脈衝與雷射毀傷。',
                    nextNodeId: 'node-ai-final'
                },
                {
                    text: 'B. 依賴人工行政審核與新聞稿澄清，並以傳統槍械攔截無人機',
                    effects: { resilience: -20, allianceSupport: -5, panicLevel: +25, spilloverRisk: +10 },
                    feedback: '行政回應滯後！假影片傳播 6 小時造成社會恐慌，傳統火力無法防禦小微型無人機蜂群飽和攻擊。',
                    nextNodeId: 'node-ai-final'
                }
            ]
        },
        'node-ai-final': {
            isEnd: true,
            title: '推演結束：AI 智能化戰爭勝敗評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 90) {
                    return {
                        resultTitle: '🏆 科技防禦卓越：成功破解紅方 AI 智能化攻勢',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '藍方 AI-Enabled 戰術防禦體系與受限附件 C 展現高超效能，戰場資訊透明度與認知韌性得以完全維護！'
                    };
                } else {
                    return {
                        resultTitle: '⚠️ 算法脆弱性 alert：AI 非對稱打擊造成混亂',
                        rating: 'C 級警衛',
                        color: 'var(--color-red)',
                        summary: '智能化戰爭速度遠超傳統行政反應能力。建議加快建置 AI 決策輔助 (AI-DSS) 與硬體電磁防禦。'
                    };
                }
            }
        },

        // === 前導戰爭想定節點 ===
        'node-pre-1': {
            timeCode: 'T-72h 前導階段：情報滲透與資安威脅',
            title: '關鍵 CI 系統異常登入與微波站干擾',
            content: '開戰前 72 小時，國家資安通報中心偵測到高權限管理帳號出現跨境 VPN / eSIM 異地登入試探，且北中南三大微波站周邊出現強電磁脈衝干擾，預警指標 Metric 11 與 Metric 14 亮紅燈！',
            choices: [
                {
                    text: 'A. 啟動【受限附件 C】零信任驗證，全面強制二階段驗證 (MFA)，並執行【受限附件 D】跨境漫遊管道切斷',
                    effects: { resilience: +15, allianceSupport: +10, panicLevel: -10, spilloverRisk: 0 },
                    feedback: '防禦處置及時！紅方潛伏代理人試圖透過 VPN 竊取後勤動員清冊的行動遭全面阻斷，零信任防線成功收攏。',
                    nextNodeId: 'node-pre-2'
                },
                {
                    text: 'B. 僅對單一登入 IP 進行封鎖，避免對外部供應商運作與跨境商務產生過大衝擊',
                    effects: { resilience: -15, allianceSupport: -5, panicLevel: +15, spilloverRisk: +5 },
                    feedback: '防衛出現破綻！紅方利用備用代理通道成功滲透民用電網系統調度模組，造成後續電力轉接遲滯。',
                    nextNodeId: 'node-pre-2'
                }
            ]
        },
        'node-pre-2': {
            timeCode: 'T-24h 臨戰階段：民生物流干擾與海警準封鎖',
            title: '大宗戰略物資搶購與周邊海域海警臨檢',
            content: '開戰前 24 小時，紅方海警船於海峽中線劃設「特別海事執法區」，強行攔查往來臺灣之散裝糧食與原油船隻。同時間國內社群平台傳播「糧食儲備僅剩 7 天」之認知假訊息，引發全台民生物資搶購潮。',
            choices: [
                {
                    text: 'A. 啟動【受限附件 B】物資配給管制與戰略庫存調度，同時透過低軌衛星 (LEO) 對國際播送海峽執法真相',
                    effects: { resilience: +20, allianceSupport: +15, panicLevel: -15, spilloverRisk: +10 },
                    feedback: '應變極為出色！全社會防衛韌性生效，搶購潮於 6 小時內平息，美日盟國發表共同聲明譴責紅方非法臨檢。',
                    nextNodeId: 'node-pre-3'
                },
                {
                    text: 'B. 派出海巡署船隻於海峽與紅方海警船對峙打擊，並發布緊急禁令禁止民眾討論物資儲備',
                    effects: { resilience: -10, allianceSupport: 0, panicLevel: +20, spilloverRisk: +20 },
                    feedback: '陷入紅方灰色地帶陷阱！對峙升級引發邊緣政策風險，且強行禁言反而加劇社會恐慌。',
                    nextNodeId: 'node-pre-3'
                }
            ]
        },
        'node-pre-3': {
            timeCode: 'T-6h 臨界階段：海纜實體切斷與認知迫降',
            title: '北部主要海纜遭破壞與假訊息爆發',
            content: '開戰前 6 小時，淡水與頭城外海 3 條國際海底電纜同時斷線！紅方運用 AI 生成「政府核心官員已撤離」之深偽影片於民用電視廣播蓋台播送，企圖創造資訊孤島誘發「政治迫降」。',
            choices: [
                {
                    text: 'A. 啟動【受限附件 E】海纜衛星與緊急通信容量切換，啟用軍用微波備援並發布 NCA 去中心化抗戰聲明',
                    effects: { resilience: +20, allianceSupport: +20, panicLevel: -20, spilloverRisk: +5 },
                    feedback: '戰術反制完美！緊急切換至 LEO/MEO 衛星鏈路，國家指揮當局 (NCA) 指揮鏈健全，徹底瓦解紅方無痛迫降戰略。',
                    nextNodeId: 'node-pre-final'
                },
                {
                    text: 'B. 嘗試派修復船前往斷線海域，暫緩啟用離岸衛星緊急備援頻寬',
                    effects: { resilience: -25, allianceSupport: -15, panicLevel: +30, spilloverRisk: +15 },
                    feedback: '修復船遭紅方海警阻撓無法靠近，通訊中斷導致全台出現 4 小時 command 盲區，民心受到嚴重打擊。',
                    nextNodeId: 'node-pre-final'
                }
            ]
        },
        'node-pre-final': {
            isEnd: true,
            title: '推演結束：臺灣前導戰爭預警與反制評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 105) {
                    return {
                        resultTitle: '🏆 預警卓越：前導破壞全面挫敗，防衛極限成功',
                        rating: 'S 級防衛',
                        color: 'var(--color-green)',
                        summary: '成功處置前導戰爭四階段之非動能打擊！受限附件 A-E 鏈路完善，資安零信任與全社會韌性發揮關鍵作用，紅方戰前奇襲企圖完全失敗。'
                    };
                } else if (totalScore >= 75) {
                    return {
                        resultTitle: '🛡️ 戰術受控：承受首波干擾，指管核心存活',
                        rating: 'A 級防衛',
                        color: 'var(--color-yellow)',
                        summary: '在前導破壞中承受一定程度資安與民生衝擊，但國家指揮當局 (NCA) 與同盟情報共享通道保持運作，順利過渡至戰術防禦。'
                    };
                } else {
                    return {
                        resultTitle: '⚠️ 指管失能危機：前導干擾造成資訊孤島',
                        rating: 'C 級警訊',
                        color: 'var(--color-red)',
                        summary: '海纜切斷與資安滲透處理遲滯，導致社會恐慌指數超標。建議強化受限附件 A-E 之自動化觸發機制與去中心化備援。'
                    };
                }
            }
        }
    }
};
