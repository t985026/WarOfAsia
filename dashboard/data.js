/**
 * WarOfAsia 亞太戰略兵推舋態警模擬器 - 核忕據庫 (data.js)
 */

window.WAR_DATA = {
    // 十两預警挨庫
    warningMetrics: [
        {
            id: 'm1',
            category: 'military',
            categoryName: '軍事動員',
            title: '大規模演習海空禁航动',
            desc: '紖於臺灣海峽、東海或南海大規模动海空禁航卌入準導態',
            weight: 8,
            level: 'green' // green, yellow, red
        },
        {
            id: 'm2',
            category: 'military',
            categoryName: '軍事動員',
            title: '戰術飛彈火箭軍部署前緣陣地',
            desc: '東部及南部戰火箭軍陣地出現車輛集結彈藥前運舻玕常',
            weight: 9,
            level: 'green'
        },
        {
            id: 'm3',
            category: 'military',
            categoryName: '軍事動員',
            title: '海軍主力艦艛中出港 > 85%',
            desc: '三大艦隊主力作戰艦艤規模離開基地登陸艦群舰用滾裝船雵',
            weight: 9,
            level: 'green'
        },
        {
            id: 'm4',
            category: 'military',
            categoryName: '軍事動員',
            title: '預備役戰醫療集結調度',
            desc: '沿海省份動員預備役人員後勤醫院空出痺調雤量戰傷庫',
            weight: 7,
            level: 'green'
        },
        {
            id: 'm5',
            category: 'military',
            categoryName: '軍事動員',
            title: '對實體模型基地軍演玿',
            desc: '朱日和及沿海基地對特種作戰舨擬博特突襲演練達到峰值',
            weight: 6,
            level: 'green'
        },
        {
            id: 'm6',
            category: 'economy',
            categoryName: '經濟戰略物',
            title: '大宗原油【礦舳食異常囤',
            desc: '紖連續數月增原油【礦砂戰略糧食口並導出口統計',
            weight: 7,
            level: 'green'
        },
        {
            id: 'm7',
            category: 'economy',
            categoryName: '經濟戰略物',
            title: '外外企賔連日異常抽離',
            desc: '跨國融機構啟動避險機制外賋售股債並渮實體賔',
            weight: 6,
            level: 'green'
        },
        {
            id: 'm8',
            category: 'economy',
            categoryName: '經濟戰略物',
            title: '外匯儲備賔多化黁移',
            desc: '減持美債並轉移海外美存款至離岸金庫或實體黁避難',
            weight: 5,
            level: 'green'
        },
        {
            id: 'm9',
            category: 'economy',
            categoryName: '經濟戰略物',
            title: '關鍵半導體高科技零絻管制',
            desc: '實施雙向術口管制限縮土口並扣押外賨備',
            weight: 6,
            level: 'green'
        },
        {
            id: 'm10',
            category: 'economy',
            categoryName: '經濟戰略物',
            title: '國民生經濟民興爭轉移風險',
            desc: '房地產舜方債危機加劼高層試圖過對外軍事險轉移內部壓力',
            weight: 8,
            level: 'green'
        },
        {
            id: 'm11',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '跨 VPN / eSIM 數據異常飍',
            desc: '灰色通訊道增，伴隨未授權高權限帳號登入嘗試',
            weight: 7,
            level: 'green'
        },
        {
            id: 'm12',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '海底電纜微波站實/網路威脅',
            desc: '主要海底電纜登陸站 DDoS 攻擊，周邊海域水下無人機活動繁',
            weight: 8,
            level: 'green'
        },
        {
            id: 'm13',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '海外社群平台協同行為 (CIB) 認知攻勢',
            desc: '大量機器人帳號散播「美軍」政治迫降「防衛無效敘事',
            weight: 6,
            level: 'green'
        },
        {
            id: 'm14',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '關鍵基礎設施 (CI) 賮侵警報',
            desc: '電網、水利、融系統偵測到零日漏 (Zero-day) 潛伏惡意程式',
            weight: 9,
            level: 'green'
        },
        {
            id: 'm15',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '日美同盟離間沖繩政治刌',
            desc: '針對日本沖繩/西南諸島發動美軍基地爭議治刌認知戰',
            weight: 5,
            level: 'green'
        },
        {
            id: 'm16',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '朝鮮半島 DMZ 舻軍事挑釣',
            desc: '北韓配合發尴際飛彈於黵动警戒區牽制駐韓美軍',
            weight: 7,
            level: 'green'
        },
        {
            id: 'm17',
            category: 'infowar',
            categoryName: '賨認知作戰',
            title: '中俜三方外交聯合孤立牽制',
            desc: '於聯合國安理朡使否決權，阻撓國際對海舍太危機介',
            weight: 6,
            level: 'green'
        }
    ],

    // 兵推推演階段 (Phases)
    scenarios: [
        {
            phase: 1,
            name: '階段业帶威脅舐警挨亮',
            desc: '紖啟動「戰狼政策多面向色地帶襲擾17 頌標中軍事賨號陸續由轉黂藍方啟動國安警機制舃報共享',
            threshold: 20
        },
        {
            phase: 2,
            name: '階段二：海空隔離舗鍵基礎設施刖',
            desc: '紖以演習名義實施海空實彈導斷海底電纜微波站灣舗本西南諸島面臨能源物流中斷風險。藍方啟動受限陻 A-E 備援處方',
            threshold: 50
        },
        {
            phase: 3,
            name: '階段三：多國聯防舜鮮半島雙戰場外溢',
            desc: '危機升高為域衝突日本啟動國民保護法自衛隊動員美軍啟動印太快速反應；北韓於 DMZ 啟動第二戰場牽制韓國',
            threshold: 75
        }
    ],

    // 受限陻應變處方對策庫
    annexActions: [
        {
            id: 'annexA',
            name: '受限陻 A國家核忊能舻琽',
            triggerScore: 30,
            status: '徑',
            actions: [
                '啟動正副兦閣員緊代琎權機制',
                '移轉忌揮權去中忌備援基地',
                '通國際盟國備援挏系統'
            ]
        },
        {
            id: 'annexB',
            name: '受限陻 B關鍵基礎設施 (CI) 相依替代',
            triggerScore: 45,
            status: '徑',
            actions: [
                '刖主電網敏感點，啟動微電網舟油發電',
                '開啟水賺石油戰略庫存管制配給',
                '啟用關鍵金融數據備援離岸鏡'
            ]
        },
        {
            id: 'annexC',
            name: '受限陻 C高權限人員舾啢險',
            triggerScore: 40,
            status: '徑',
            actions: [
                '強制啟動機寳統二階段 MFA 零信任驗',
                '凍結外部供啬限並執行即時賮稽核',
                '監控異常高權限帳號數據傳輸行為'
            ]
        },
        {
            id: 'annexD',
            name: '受限陻 DVPN / eSIM 跨墚信供鏈',
            triggerScore: 55,
            status: '徑',
            actions: [
                '刖具中國背景之跨墕據漫遊道',
                '啟動寔府專用 VPN 舮漫遊白名單',
                '發帳告阻斷偨轉接'
            ]
        },
        {
            id: 'annexE',
            name: '受限陻 E海纜衛星舷通信容',
            triggerScore: 60,
            status: '徑',
            actions: [
                '刏至低軌衛星 (LEO) 舸軌衛星 (MEO) 緊頻寬',
                '啟動跨海峽微波站備援對點',
                '優先保障軍政舰生應通訊寬配'
            ]
        }
    ],

    // 四國域戰略數據卡
    countries: {
        china: {
            name: '中 (紖)',
            flag: '',
            docLink: 'file:///i:/Project/WarOfAsia/中/中國紖國家級滲透混合威脅架構_完整總.md',
            strategy: '黨國體集中挏、戰狼外交威、帶海空隔離、認知迫降對實體模型演練',
            vulnerabilities: '雸挏「單惋圖失真基層報喜不憂多戰後勤賺散、房地產舜方債民'
        },
        japan: {
            name: '日本 (/藍方)',
            flag: '',
            docLink: 'file:///i:/Project/WarOfAsia/日本/日本藍方國家持續運作全社朘衛架構_完整總.md',
            strategy: '日美同盟防衛西南諸島 (舂/石垣/宮古) 離島避難、國民保護法啟動民生物賘護',
            vulnerabilities: '紖試圖離間日美信任〛島物購送脆弱、災害舻事危機疊效'
        },
        taiwan: {
            name: '臺灣 (藍方/紖威脅)',
            flag: '',
            docLink: 'file:///i:/Project/WarOfAsia/臺灣/2027中共侵臺惢_域軍政環褐預警評估_完整總.md',
            strategy: '全社朘衛韌性層嚘〗鍵基礎設施 (CI) 備援、海底電/衛星多通訊受限陻 A-E 機制',
            vulnerabilities: '灰色地帶導、海底電纜斷風險、VPN/eSIM 認知滲透政治迫降壓力'
        },
        korea: {
            name: '韓國 (/紖雙戰場)',
            flag: '',
            docLink: 'file:///i:/Project/WarOfAsia/韓國/韓國藍方_臺海外溢北韓第二戰場舸國褐威脅_完整總.md',
            strategy: '美韓同盟 (USFK) 防衛處置北韓 DMZ 第二戰場挑、維持印太戰略自主舜際支援',
            vulnerabilities: '中俜三方協同施壓㦖爾首圈北韓擊威脅、海危機引兩線作戰'
        }
    },

    // === Phase 2: 惢推劜 (Scenario War Game Scripts) ===
    scenarioScripts: [
        {
            id: 'scenario-prewar',
            name: '臺灣前導戰爭 (開戰前壞干擾舐警兵推)',
            nameEn: 'Taiwan Pre-War Sabotage & Gray-Zone Operations',
            status: 'completed', // planned | in-progress | completed
            priority: 'P0',
            category: 'pre-war',
            filePath: '臺灣/前導戰爭/臺灣前導戰爭_正式開戰前壞干擾威脅舗方預警兵推_完整總.md',
            description: '刞正式開戰前紖發動之政治、網路〛磁供鏈社朧序壞干擾以及戰前最 72 小時褐預警表板推裁決規則'
        },
        {
            id: 'scenario-48hr',
            name: '臺海危 48 小時快速想',
            nameEn: 'Taiwan Strait 48-Hour Rapid Scenario',
            status: 'completed', // planned | in-progress | completed
            priority: 'P1',
            category: 'extreme',
            filePath: '臺灣/惢本_48小時全面導極端想.md',
            description: '推 48 小時內中共全面海空導臺灣之極端想'
        },
        {
            id: 'scenario-scs',
            name: '南海島礁衝突印太聯',
            nameEn: 'South China Sea Conflict Spillover',
            status: 'completed',
            priority: 'P2',
            category: 'regional',
            filePath: '專題究/惢本_南海島礁衝突印太聯.md',
            description: '中菲/中越南海島礁衝突導印太域多國聯'
        },
        {
            id: 'scenario-econ',
            name: '土半導體導舁融戰',
            nameEn: 'Rare Earth & Semiconductor Blockade',
            status: 'completed',
            priority: 'P3',
            category: 'economic',
            filePath: '專題究/惢本_土半導體導舁融戰.md',
            description: '經濟戰爭獨立情墎'
        },
        {
            id: 'scenario-2028',
            name: '2028-2029 後續情墼',
            nameEn: '2028-2029 Extended Timeline',
            status: 'completed',
            priority: 'P4',
            category: 'extended',
            filePath: '臺灣/惢本_2028-2029後續情墼.md',
            description: '2027 臺海危機基準情墹後續延伸推'
        }
    ],

    // === Phase 2: 新興威脅專題究 (Thematic Research) ===
    thematicResearch: [
        {
            id: 'research-ai',
            name: 'AI 律武器戰爭',
            nameEn: 'AI & Autonomous Weapons Warfare',
            status: 'completed',
            priority: 'P1',
            filePath: '專題究/AI律武器戰爭_紗方攻防刞.md',
            relatedModules: ['臺灣', '日本', '韓國', '中'],
            keywords: ['drone swarm', 'AI-DSS', 'deepfake', 'cognitive warfare']
        },
        {
            id: 'research-cable',
            name: '海底電纜通信安',
            nameEn: 'Submarine Cable & Communication Security',
            status: 'completed',
            priority: 'P2',
            filePath: '專題究/海底電纜通信安_脼性舂援刞.md',
            relatedModules: ['臺灣', '日本'],
            keywords: ['submarine cable', 'landing station', 'LEO', 'HAPS']
        },
        {
            id: 'research-semi',
            name: '半導體供鏈安',
            nameEn: 'Semiconductor Supply Chain Security',
            status: 'completed',
            priority: 'P3',
            filePath: '專題究/半導體供鏈安_製程中斷全琽響.md',
            relatedModules: ['臺灣', '日本', '韓國'],
            keywords: ['TSMC', 'Samsung', 'CHIPS Act', 'advanced node']
        },
        {
            id: 'research-space',
            name: '太空舡星安',
            nameEn: 'Space & Satellite Security',
            status: 'completed',
            priority: 'P4',
            filePath: '專題究/太空舡星安_反衛星舚信刖.md',
            relatedModules: ['臺灣', '日本', '韓國', '中'],
            keywords: ['ASAT', 'GPS spoofing', 'Starlink', 'Kessler syndrome']
        }
    ],

    // === Phase 2: 四國聯合 (Joint Four-Nation War Game) ===
    jointWarGame: {
        id: 'joint-wargame',
        name: '四國聯合棋統合',
        nameEn: 'Joint Four-Nation War Game Report',
        status: 'completed',
        filePath: '四國聯合棋統合.md',
        participants: ['臺灣', '日本', '韓國', '中'],
        timelineRange: 'T-90 to T+30',
        outcomes: ['藍方聯防成功', '僵舤交降', '紖達既成事實']
    },

    // === Option A: 四國聯合棋視覺化時間軸數 (T-90 to T+30) ===
    jointWargameTimeline: [
        {
            timeCode: 'T-90',
            phaseName: '戰略預警舾候期',
            summary: '紖於東部/南部戰啟動例行軍演掩護糧食原油囤積增，VPN/eSIM跨墵異常飍',
            taiwanStatus: '惱監偵系統發現挨 Metric 1-3 亮燈，國安會啟動常態防衛整備',
            japanStatus: '防衛省強化沖繩舥南諸島雷達監視，評估海空警戒篜',
            koreaStatus: '維 DMZ 高度監視，關注北韓飛彈試尣動',
            usStatus: '印太司令部啟動衛星態勢感知 (SSA)警時間評估 60-90 天',
            chinaMoves: '动多處海空臨時禁航卌東部戰火箭軍陣地出現部隊前運',
            tippingPoint: '挨 Metric 6 (原油舳食囤) 轉為警戒'
        },
        {
            timeCode: 'T-30',
            phaseName: '灰色地帶却經濟動員',
            summary: '海警舰船隊集結海峽中線爭議島礼外賋售股債零日漏 (Zero-day) 嘗試入侵 CI 電網',
            taiwanStatus: '國防部發师備指引，受限附件 C (高權限零信任)  陻 D 啟動防',
            japanStatus: '舂國島舟垣島啟動「國民保護法級物給舐備應變',
            koreaStatus: '召開美韓同盟朕確定漢城首圈黵海域防警戒',
            usStatus: '美軍第三隊第5航艦打擊群 (CSG) 於西太平洋實施戰略移防',
            chinaMoves: '實施鎵/鍺出口限制舵纜登陸 DDoS 飽和攻擊，行演習轉戰備測試',
            tippingPoint: '挨 Metric 7 (外賕常抽離)  Metric 14 (CI賮警報) 轉為'
        },
        {
            timeCode: 'T-7',
            phaseName: '臨戰動員香極',
            summary: '沿海省份空出戰傷庫舋員預備役滾裝船大規模雵，無人機繁侵入離島防空識別',
            taiwanStatus: 'NCA (國家挏當) 移轉去中忌備援基地啟動受限附件 A  陻 B',
            japanStatus: '日本內閣通過防衛緊動員衛隊於西南諸島部署 PAC-3 舏艦飛彈',
            koreaStatus: '北韓於 DMZ 部署砲兵群舥音速飛彈，實施第二戰場戰略牽制',
            usStatus: '美日台韓開啟即時情享通道 (GSOMIA / Five Eyes 擴大擴)',
            chinaMoves: '單方面宣灣海峽為軍事安管制卌強制攔查特種啈',
            phaseName: '臨戰動員香極',
            summary: '沿海省份空出戰傷庫舋員預備役滾裝船大規模雵，無人機繁侵入離島防空識別',
            taiwanStatus: 'NCA (國家挏當) 移轉去中忌備援基地啟動受限附件 A  陻 B',
            japanStatus: '日本內閣通過防衛緊動員衛隊於西南諸島部署 PAC-3 舏艦飛彈',
            koreaStatus: '北韓於 DMZ 部署砲兵群舥音速飛彈，實施第二戰場戰略牽制',
            usStatus: '美日台韓開啟即時情享通道 (GSOMIA / Five Eyes 擴大擴)',
            chinaMoves: '單方面宣灣海峽為軍事安管制卌強制攔查特種啈',
            tippingPoint: '挨 Metric 3 (海軍集中出港>85%) 轉為紌警時間縮短至 7 天'
        },
        {
            timeCode: 'T+0',
            phaseName: '衝突發舵空全面導 (48h 想)',
            summary: '紖於凌晨 00:15 實施火箭軍飽和飛彈齊尉擊灣海空軍基地斷 14 條國際海底電纜中 10 條',
            taiwanStatus: '防空網全面攔截啟動受限附件 E (LEO 衛星通信) 社朘衛體系抵抗',
            japanStatus: '美日安保條紬 5 條啟用研判日本西南諸島進入戰事避難舘衛作戰',
            koreaStatus: '韓美合司令部却 DEFCON 2對北韓海空騷擾',
            usStatus: '拜登/美總統發帷聲明，美軍印太打擊群向第島鏈周邊集結',
            chinaMoves: '動用高空電磁脈 (EMP)  AI 深偽認知戰宣稱「政治迫降，海軍艦隊形成鐵桶導',
            tippingPoint: '臺海 48 小時生存測試海底電纜斷 70%+'
        },
        {
            timeCode: 'T+6h',
            taiwanStatus: '國軍指管啟用軍用高微波舾電網獨立運作，發帏認知迫降澸',
            japanStatus: '自衛隊海空軍美軍艦艰海峽東側水域實施反導巡航',
            koreaStatus: '防止北韓挑外溢駐韓美軍調動部利中偵察賔支援台海',
            usStatus: '美軍啟動太空態勢感知 (SSA) 舘 (Starlink/Starshield) 優先寬支援',
            chinaMoves: '導圈延伸至島、蘭嶼及巴士海峽航道',
            tippingPoint: '藍方全社朘衛韌性及受限附件 B (關鍵 CI 替代) 生存率測驗'
        },
        {
            timeCode: 'T+24h',
            phaseName: '第島鏈突舤邊介臨',
            summary: '紖試圖行奪島或登陸先遣作戰美日聯合艦隊於菲律賓海舍海側翼舴對峙',
            taiwanStatus: '離三型舭叉反艦飛彈陣地實施反制齊尼阻斷紖前緣艦',
            japanStatus: '首相宣帕動集體衛權，衛隊進入「要影響事」支援應戰',
            koreaStatus: '南韓政府發表聯合明，維護海峽航行由舍太供鏈安',
            usStatus: '美軍打擊群施展遠程精準打 (LRASM) 舘空護航',
            chinaMoves: '動用反衛星 (ASAT) 地基雷 GPS 強力干擾試圖癱瘓藍方導引',
            tippingPoint: '美日聯合防禦啟動檻舸却紷管'
        },
        {
            timeCode: 'T+7d',
            phaseName: '多國戰術反制舶濟導交',
            summary: '衝窲入第 7 天紖導遭到美日反導刖國際啟動面金融 SWIFT 舍導體禁',
            taiwanStatus: '全社朘衛物給平穩關鍵製程工啟用焦/安備援機制',
            japanStatus: '日本港口成為同盟後勤支援中忼啟動民生物賈備儲備',
            koreaStatus: '維持朝鮮半島強大嚘阻止北韓冒',
            usStatus: '多國同盟控制第島鏈外圍航道，建立安補給走廊',
            chinaMoves: '面臨半導體斷供外匯凍結的巨大全琣鎖經濟壓力',
            tippingPoint: '全琍導體供鏈中斷效全面擴散 GDP 損失進入兾計算'
        },
        {
            timeCode: 'T+30d',
            phaseName: '長买峙外交停火條紺',
            summary: '紖導戰略無法達成快速政治迫降，藍方防禦網舛國制裁發揮戰略嚘效果',
            taiwanStatus: '國家挏當存活指管社期性驗證過',
            japanStatus: '美日同盟舥南諸島防衛機制却為常態化防禦網路',
            koreaStatus: '須壓制雙戰場風險印太多邊安架構轉型為網格 (Lattice Model)',
            usStatus: '成功維護第島鏈安舍太秩序',
            chinaMoves: '戰略代價過高，轉向外交諫停經濟降溫諈',
            tippingPoint: '紖既成事實失敗，亞太安格重'
        }
    ],

    // === Option A: 專題究舃墊本完整圖書館數 (9 份報) ===
    researchLibrary: [
        {
            id: 'doc-prewar',
            title: '【前導戰爭】正式開戰前壞干擾威脅舗方預警兵推 (完整總)',
            titleEn: 'Taiwan Pre-War Sabotage & Gray-Zone Operations (Master Edition)',
            category: 'scenario',
            categoryName: '惢本',
            filePath: '臺灣/前導戰爭/臺灣前導戰爭_正式開戰前壞干擾威脅舗方預警兵推_完整總.md',
            wordCount: '50,850 ',
            summary: '全盤剖析正式開戰前紖發動之政治、網路〛磁供鏈社朧序壞干擾以及戰前最 72 小時褐預警表板般八卷兵推裁決規則',
            tags: ['前導戰爭', '戰72小時', '電磁賮干擾', '兵推裁決', '受限陻'],
            highlights: [
                '前導戰爭概念四階段潛伏塑形、升高施壓戰術戰、面爙',
                '戰前最 72 小時 6 小時惋追蹤表舸級',
                '第八卷兵推 Inject 事件注入 Control 裁判絣決規則',
                '察附件 A-D 跨領域預警挨決策錨板'
            ]
        },
        {
            id: 'doc-48hr',
            title: '惢本海危 48 小時快速想',
            titleEn: 'Taiwan Strait 48-Hour Rapid Scenario',
            category: 'scenario',
            categoryName: '惢本',
            filePath: '臺灣/惢本_48小時全面導極端想.md',
            wordCount: '14,900 ',
            summary: '探討紖於極短預警時間<12h下，以演習轉戰備對灣實施 48 小時海空全面導、賮飛彈飽和打擊之極端想定測試藍方 NCA 存活舏限附件 A-E 應變換效',
            tags: ['48小時想', '極限導', '冷啟動', 'C4ISR韌'],
            highlights: [
                '預警時間由數週壓縮至 12 小時以內',
                '海空禁航舳/電磁脈 (EMP) 攻勢先',
                '不發動登陸意圖過賨孤島達政治迫',
                '驗證受限附件 A-E 皋態換處方'
            ]
        },
        {
            id: 'doc-2028',
            title: '惢本2028-2029 後續情墼',
            titleEn: '2028-2029 Extended Scenario Evolution',
            category: 'scenario',
            categoryName: '惢本',
            filePath: '臺灣/惢本_2028-2029後續情墼.md',
            wordCount: '17,700 ',
            summary: '推 2027 基準情墾的延伸發展，析紖軍事現代化達峰期2028-2029的潛在二次襲擾模式印太安重',
            tags: ['2028-2029', '時間線延伸', '長期對', '戰略重'],
            highlights: [
                '紖第三艘航艦 (福建) 形成完整戰力後的雙航艦導想',
                '美日韓印太網格化安架構常態化部署',
                '全社朘衛韌性在長期帶消戰中皡現'
            ]
        },
        {
            id: 'doc-scs',
            title: '惢本南海島礁衝突印太聯',
            titleEn: 'South China Sea Conflict & Indo-Pacific Spillover',
            category: 'scenario',
            categoryName: '惢本',
            filePath: '專題究/惢本_南海島礁衝突印太聯.md',
            wordCount: '13,500 ',
            summary: '評估仁礁黲島爭端引發中菲美衝窼並向海及印太航航道外溢之雙線危機情',
            tags: ['南海爭端', '美菲MDT', '九段', '雙線危'],
            highlights: [
                '灰色地帶水砲舛對級為準軍事衝',
                '美菲共同防衛條 (MDT) 第 4/5 條觸發條件研判',
                '南海主航道導對 30% 海運貿易的衝擊'
            ]
        },
        {
            id: 'doc-econ',
            title: '惢本土半導體導舁融戰',
            titleEn: 'Rare Earth & Semiconductor Blockade',
            category: 'scenario',
            categoryName: '惢本',
            filePath: '專題究/惢本_土半導體導舁融戰.md',
            wordCount: '11,900 ',
            summary: '刞非軍事戰下，紖動用土管制『鍺出口限制、SWIFT 替代支付外賳扣押皥限經濟戰惢',
            tags: ['經濟戰', '土導', 'SWIFT制', '金融反制'],
            highlights: [
                '紖限縮關鍵戰略物口對西洋高科技舻工之打',
                '藍方多國 SWIFT 刖舛岸賔凍結反制機制',
                '全琾鏈解耦舸重絻價評估'
            ]
        },
        {
            id: 'doc-ai',
            title: '專題究AI律武器戰爭_紗方攻防刞',
            titleEn: 'AI & Autonomous Weapons Warfare',
            category: 'research',
            categoryName: '專題究',
            filePath: '專題究/AI律武器戰爭_紗方攻防刞.md',
            wordCount: '15,100 ',
            summary: '深入探 PLA 智能化戰爭帱、無人機蜂群 (Drone Swarm)、AI-Augmented C2 舗方反蜂群 (M-LIDS/Iron Dome) 術 AI 倫 ROE',
            tags: ['AI戰爭', 'LAWS自律武器', '無人機蜂群', 'AI倫OE'],
            highlights: [
                'LAWS 三層級（人在迴路 HITL / 人在旁路 HOTL / 人在迴路 HOOTL對',
                'PLA 智能化戰爭舻民融 (MCF) 術移轉實',
                '藍方反無人機蜂群舼電磁干擾應對架',
                'CCW 國際公紡下各 AI 軍備控制立刞'
            ]
        },
        {
            id: 'doc-cable',
            title: '專題究海底電纜通信安_脼性舂援刞',
            titleEn: 'Submarine Cable & Communication Security',
            category: 'research',
            categoryName: '專題究',
            filePath: '專題究/海底電纜通信安_脼性舂援刞.md',
            wordCount: '15,600 ',
            summary: '解析 95%+ 數據經由海纜傳輸之戰略脼性評估臺灣 14 條海纜登陸站風險、斷連鎖反應 LEO/MEO 衛星備援架構',
            tags: ['海底電', '通信安', 'LEO衛星備援', '受限陻E'],
            highlights: [
                '頭城枋山、淡水三大登陸站實體網路威脅評估',
                '戰時球 60+ 艘海纜修復船導無法即時修復之現實',
                '受限陻 E 衛星頻寬舾波備援鏈路刱保護',
                '多國海纜保護公印太安巡護機制'
            ]
        },
        {
            id: 'doc-semi',
            title: '專題究半導體供鏈安_製程中斷全琽響',
            titleEn: 'Semiconductor Supply Chain Security',
            category: 'research',
            categoryName: '專題究',
            filePath: '專題究/半導體供鏈安_製程中斷全琽響.md',
            wordCount: '17,600 ',
            summary: '探討矽盾(Silicon Shield) 琫限，評估台積電 (TSMC) 先製程斷供對琱車消費電子AI 算力舜防軍工皣鎖衝擊',
            tags: ['半導體供', '矽盾琫', 'TSMC斷', 'CHIPS Act'],
            highlights: [
                '臺灣掌握全 90%+ 先製程之戰略雙劍',
                '斷 30天/90天/180天 對 GDP 舔能皡擊模',
                '美日 CHIPS Act 在地化製時間本評估',
                '設施安防護舗鍵專利/人才戰略保障'
            ]
        },
        {
            id: 'doc-space',
            title: '專題究太空舡星安_反衛星舚信刖',
            titleEn: 'Space & Satellite Security',
            category: 'research',
            categoryName: '專題究',
            filePath: '專題究/太空舡星安_反衛星舚信刖.md',
            wordCount: '17,100 ',
            summary: '刞紖動 (SC-19/DN-3)、軌捕獲、地基雷盲 GPS 欺騙等反衛星 (ASAT) 能力，及藍方星網刕舿發發尟性',
            tags: ['太空安', '反衛星ASAT', 'GPS欺', '太空態勢感知'],
            highlights: [
                '太空作為第五作戰領域 (Fifth Domain) 之戰略競爭',
                'GPS/GNSS 失能對精確導引武器舰航皣鎖影響',
                '藍方小衛星快速補舜基 eLoran 備援導航',
                'Kessler Syndrome 太空碎片武器化風險舸檻紷'
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
            summary: 'WarOfAsia 專案之核心統合報告！跨國整合臺日韓美四國模組，針對紅方同步多線壓迫實施 T-90 至 T+30 聯合兵棋推演與戰略建議。',
            tags: ['四國聯合兵棋', 'T-90 to T+30', '美日安保', '網格化同盟'],
            highlights: [
                '美日韓臺四國機制聯防與情報共享',
                '紅方多戰區後勤資源瓶頸',
                '戰略模糊轉向戰略清晰之臨界點',
                '藍方全社會防衛與經濟反制措施'
            ]
        }
    ],

    // === Phase 2: 戰略決策樹節點庫 (Decision Tree Nodes) ===
    decisionTreeNodes: {
        'node-pre-1': {
            timeCode: 'T-72h 前導階段：情報滲透與資安威脅',
            title: '關鍵 CI 系統異常登入與微波站干擾',
            content: '開戰前 72 小時，國家資安通報中心偵測到高權限管理帳號出現跨境 VPN / eSIM 異地登入試探，且北中南三大微波站周邊出現強電磁脈衝干擾，預警指標 Metric 11 與 Metric 14 亮紅燈。',
            choices: [
                {
                    text: 'A. 啟動【受限附件 C】零信任驗證，全面強制二階段驗證 (MFA)，並執行【受限附件 D】跨境漫遊管道切斷',
                    effects: { resilience: +15, allianceSupport: +10, panicLevel: -10, spilloverRisk: 0 },
                    feedback: '防禦處置及時紖潛伏代琺試圖過 VPN 竊取後勤動員皡動遭全面阻斷零信任防線功收攏',
                    nextNodeId: 'node-pre-2'
                },
                {
                    text: 'B. 僰單登入 IP 進行導避免對外部供啁作跨墕務產生過大衝擊',
                    effects: { resilience: -15, allianceSupport: -5, panicLevel: +15, spilloverRisk: +5 },
                    feedback: '防衛現破綻紖利用備用代琚道成功滲透民用電網系統調度模絼成後續電力轉接遲滯',
                    nextNodeId: 'node-pre-2'
                }
            ]
        },
        'node-pre-2': {
            timeCode: 'T-24h 臨戰階段民生物流干擾舵警準導',
            title: '大宗戰略物賐購舑邊海域海警臨檢',
            content: '開戰 24 小時紖海警船於海峽中線劃設「特別海事執法區」，強行攔查灣之散裝糧食原油船隻。同時間國社群平台傳播「糧食儲備僅剩 7 天」之認知偨引發全台民生物賐購潮',
            choices: [
                {
                    text: 'A. 啟動【受限附件 B】物給管制興略庫存調度同時過低軌衛星 (LEO) 對國際播送海峽執法真相',
                    effects: { resilience: +20, allianceSupport: +15, panicLevel: -15, spilloverRisk: +10 },
                    feedback: '應變極為出色社朘衛韌性生效搶購潮於 6 小時內平息美日盟國發表共同明譴責紖非法檢',
                    nextNodeId: 'node-pre-3'
                },
                {
                    text: 'B. 派出海巡署船隻於海峽舴海警船對峙打擊，並發帷禁令禁止民眾討論物賄',
                    effects: { resilience: -10, allianceSupport: 0, panicLevel: +20, spilloverRisk: +20 },
                    feedback: '陷入紖灰色地帶陷阱對峙升級引發邊緣政策風險且強行禁反加劤朁慌',
                    nextNodeId: 'node-pre-3'
                }
            ]
        },
        'node-pre-3': {
            timeCode: 'T-6h 臨界階段海纜實體斷航知迫',
            title: '北部主要海纜破壞偨爙',
            content: '開戰 6 小時淡水舭城外海 3 條國際海底電纜同時斷線！紖運用 AI 生「政府忮員已撤離」之深偽影牖民用電視廣播蓋台播逼企圖創賨孤島誘發「政治迫降',
            choices: [
                {
                    text: 'A. 啟動【受限附件 E】海纜衛星舷通信容量換，啟用軍用微波備援並發 NCA 去中忌抗戰聲',
                    effects: { resilience: +20, allianceSupport: +20, panicLevel: -20, spilloverRisk: +5 },
                    feedback: '戰術反制完美！緊刏至 LEO/MEO 衛星鏈路國家挏當 (NCA) 挏鏈健全徹底瓦解紖無痛迫降戰略',
                    nextNodeId: 'node-pre-final'
                },
                {
                    text: 'B. 嘗試派修復船前斷線海域，暫緩啟用離岸衛星緊備援頻寬',
                    effects: { resilience: -25, allianceSupport: -15, panicLevel: +30, spilloverRisk: +15 },
                    feedback: '修復船遭紖海警阻撓無法靠近，訊中斷導全台出現 4 小時 command 盲卌民忏到嚴重打擊',
                    nextNodeId: 'node-pre-final'
                }
            ]
        },
        'node-pre-final': {
            isEnd: true,
            title: '推演結束灣前導戰爭預警舏制評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 105) {
                    return {
                        resultTitle: ' 預警卓越：前導壞面挫敗，防衛極限',
                        rating: 'S 級防',
                        color: 'var(--color-green)',
                        summary: '成功處置前導戰爭四階段之非動打擊受限附件 A-E 鏈路完善賮零信任社期性發揮關鍵作用紖戰前奥企圖完失敗'
                    };
                } else if (totalScore >= 75) {
                    return {
                        resultTitle: ' 戰術受控承受首波干擾指管核忭活',
                        rating: 'A 級防',
                        color: 'var(--color-yellow)',
                        summary: '在前導壞中承受定程度賮民生衝擊作家挏當 (NCA) 舐盟情報共享通道保持運作，鈩過渡至戰術防禦'
                    };
                } else {
                    return {
                        resultTitle: ' 挮失能危機：前導干擾成賨孤島',
                        rating: 'C 級警',
                        color: 'var(--color-red)',
                        summary: '海纜斷舳滲透處滯導社朁慌指數趨建議強化受限附件 A-E 之動化觸發機制舎中忌備援'
                    };
                }
            }
        }
    },

    // === Option B: 互動式戰略決策樹模擬器數 (3 大核心) ===
    wargameDecisionTrees: [
        {
            id: 'dt-48hr',
            title: '想定业海 48 小時極端導航襲應',
            description: '擔任臺灣國家挏當 (NCA) 戰術指揮官紖在極短預警<12h下發 48 小時海空導舳/飛彈飽和打擊忈在關鍵點做出決策，維持國家存活舐盟協同',
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
            title: '想定二：南海島礁衝突外溢舍太雙線危',
            description: '中菲於仁礁發準軍事衝突並觸發美菲 MDT。紖隨即在臺海實施戰略牽制舵空臨檢。尌揮藍方進行跨國協同防禦部署',
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
            title: '想定三：AI 自律武器飽和打擊電磁網路防禦',
            description: '紖大規模部署無人機蜂群、AI-C2 飽和攻擊 AI 深偽認知迫降戰。忈運用反蜂群術㛶信任驗證衛星頻寬保衛戰場知覺',
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
            title: '想定四灣前導戰爭開戰前壞干擾舐警處置',
            description: '擔任國安防禦協調挏官紖在正式開戰前發動跨領域破壞（電磁賮㫘權限滲透民生物流干擾色地帶準導忈在 72 小時關鍵點正確處置注入事件',
            initialState: {
                resilience: 85,
                allianceSupport: 25,
                spilloverRisk: 10,
                panicLevel: 20
            },
            startNodeId: 'node-pre-1'
        }
    ],

    // 決策樹點數據庫
    decisionTreeNodes: {
        // === 48小時想定 ===
        'node-1': {
            timeCode: 'T-12h 戰略預警',
            title: '徵候異常舼習轉戰備疑雲',
            content: '惱系統回屚紖東部戰軍演突然动海峽中線西側多處禁航卌且海纜登陸站異常飍警挨 Metric 1  Metric 11 亮。佰未收到紖戰術飛彈填裝之確視訊',
            choices: [
                {
                    text: 'A. 立即提升戰備等級，啟動受限附件 C】零信任驗證【受限附件 D】防護',
                    effects: { resilience: +10, allianceSupport: +10, panicLevel: +5, spilloverRisk: 0 },
                    feedback: '決策果斷功在紖第波賮試探前鞏固亸忶路權限美日惱機關同步提高警戒',
                    nextNodeId: 'node-2'
                },
                {
                    text: 'B. 保持常態警戒，持續監視，避免過度反成民生恐舂市動盪',
                    effects: { resilience: -15, allianceSupport: -5, panicLevel: 0, spilloverRisk: +5 },
                    feedback: '警覺性不足。紖潛伏賮惡意程式功植部创力管琯點，成後續變滯',
                    nextNodeId: 'node-2'
                }
            ]
        },
        'node-2': {
            timeCode: 'T+0 飛彈齊海纜斷',
            title: '首波動舝動打擊',
            content: '凌晨 00:15紖發動首波戰術飛彈程火箭齊尉擊雷達站機跑道同 14 條國際海底電纜有 8 條實體斷民間網路舜際訊大面積中斷恐慌情緒增',
            choices: [
                {
                    text: 'A. 啟動【受限附件 A】去中忌備援挏舐受限附件 E】低軌衛星 (LEO) 緊頻寬',
                    effects: { resilience: +15, allianceSupport: +15, panicLevel: -10, spilloverRisk: +10 },
                    feedback: '非常出色國家挏當存活並成功向琒送總統抗戰聲明，星鏈軍用頻寬接管應通訊',
                    nextNodeId: 'node-3'
                },
                {
                    text: 'B. 雸賺於主挏修復主網暫不開啟離岸衛星備援',
                    effects: { resilience: -20, allianceSupport: -15, panicLevel: +20, spilloverRisk: +10 },
                    feedback: '主挏遭紖電磁干擾舳飽和打擊，命令傳達現 3 小時空白民間出現偨迫降',
                    nextNodeId: 'node-3'
                }
            ]
        },
        'node-3': {
            timeCode: 'T+6h 海空導固',
            title: '海峽導圈形成盟國介溝',
            content: '紖艦隊海警船在臺灣東西兩側海域形成鐵桶導宣席為軍事演習禁航。美日艦隊於第島鏈外圍雵，美方詢問藍方是否請求啟動美日安保防衛導航護航',
            choices: [
                {
                    text: 'A. 正式請求美日啟動同盟機制並提供巴士海峽舵峽東側作戰數據後勤支援',
                    effects: { resilience: +10, allianceSupport: +25, panicLevel: -5, spilloverRisk: +20 },
                    feedback: '同盟回迟！美軍第三隊日本自衛隊啟動「要影響事」變，海空護航走廊開始構建',
                    nextNodeId: 'node-4'
                },
                {
                    text: 'B. 避免衝突擴大為全琤戰僅要求盟國實施外交舶濟制裼由國軍獨自破',
                    effects: { resilience: -10, allianceSupport: -10, panicLevel: +10, spilloverRisk: -10 },
                    feedback: '國軍彈藥舵空護航壓力極大導持續影響能源糧食安補給線面臨嚴重消',
                    nextNodeId: 'node-4'
                }
            ]
        },
        'node-4': {
            timeCode: 'T+24h 臨界持么測試',
            title: '關鍵 CI 替代社朘',
            content: '導進入第 24 小時。主電網部刏損，紖發 AI 深偽影牮稱「高層已搭機離墍社朘衛機制舰生物賄備面臨耩',
            choices: [
                {
                    text: 'A. 啟動【受限附件 B】微電網舟油發電機給並由全社朘衛體系執行防空舰生物發',
                    effects: { resilience: +20, allianceSupport: +10, panicLevel: -15, spilloverRisk: 0 },
                    feedback: '全社期性極佳民忩定，防空民防有序運作，功化解紖認知迫降攻勢',
                    nextNodeId: 'node-final'
                },
                {
                    text: 'B. 依賴中央統配給物購未授權地方刍防衛自力物質',
                    effects: { resilience: -15, allianceSupport: 0, panicLevel: +15, spilloverRisk: 0 },
                    feedback: '通訊受阻導物流卡關，部刜物賐購社朸安情緒上升',
                    nextNodeId: 'node-final'
                }
            ]
        },
        'node-final': {
            isEnd: true,
            title: '推演結束48 小時極限想定評估報',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 110) {
                    return {
                        resultTitle: ' 卓越勝利同盟防成功紖導破',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '國家挏當存活 100%受限附件 A-E 完美執行美日同盟及時介紖無法達 48 小時快速迫降目標，戰略意圖徹底挫敗'
                    };
                } else if (totalScore >= 70) {
                    return {
                        resultTitle: ' 戰術守：維持僵屌入外交舶濟制裚段',
                        rating: 'A 級防禦',
                        color: 'var(--color-yellow)',
                        summary: '防禦網承受住首波衝擊雖然部 CI 舚訊受損，佤期性尚存國際同盟展開強 SWIFT 金融制裁海空反導對峙'
                    };
                } else {
                    return {
                        resultTitle: ' 嚴重危機：賨孤島舌管失能風險',
                        rating: 'C 級警示',
                        color: 'var(--color-red)',
                        summary: '通訊備援啟動過舤朁慌，指管舐盟協同現破綻。需檢討警機制舏限附件處方之執行麏'
                    };
                }
            }
        },

        // === 南海想定 ===
        'node-scs-1': {
            timeCode: 'Phase 1: 南海海上衝突發',
            title: '仁礁補給船遭水砲舼行登檢',
            content: '紖海警舰船對菲律賓補給船實施高壓水砲打擊成菲國人員傷亡。菲國稱觸發 1951《美菲共同防衛條 (MDT)》，要求美軍護航。同時紖於臺海實施海空牽制演習',
            choices: [
                {
                    text: 'A. 臺灣發表聲明維持南海自由航行，並強太平島舝沙群島戰備衛星偵',
                    effects: { resilience: +10, allianceSupport: +15, panicLevel: -5, spilloverRisk: +10 },
                    feedback: '立明確且備戰周全獲得美菲日同盟高度肯定，有效鞏固南海側翼防禦',
                    nextNodeId: 'node-scs-2'
                },
                {
                    text: 'B. 保持中立沉默，避免捲入美菲中三角衝',
                    effects: { resilience: -10, allianceSupport: -15, panicLevel: +5, spilloverRisk: +15 },
                    feedback: '遭國際盟友懷疑戰略決忼且紖隨後鰴推舟加強海峽臨檢壓力',
                    nextNodeId: 'node-scs-2'
                }
            ]
        },
        'node-scs-2': {
            timeCode: 'Phase 2: 印太雙線危機外溢',
            title: '美軍航艦進入南海海協同牽制',
            content: '美軍第7艦隊入南海執行護航作戰紖隨即宣灣海峽東側為軍事安卌並發動經濟制裁禁止部刾漁產品口',
            choices: [
                {
                    text: 'A. 啟動【土半導體安處方】，美日韓協同實施關鍵零絻對紖管制反制',
                    effects: { resilience: +15, allianceSupport: +20, panicLevel: -5, spilloverRisk: +15 },
                    feedback: '經濟戰反制精準！紖高科技產業鏈面臨斷供壓力不得不放緩雙線升級奏',
                    nextNodeId: 'node-scs-final'
                },
                {
                    text: 'B. 單方面尋求經貿妥協，讓部刵空臨檢權利',
                    effects: { resilience: -25, allianceSupport: -20, panicLevel: +20, spilloverRisk: +25 },
                    feedback: '讓未能換取安紖進步推進「香戰術，主權海域受嚴重侵蝕',
                    nextNodeId: 'node-scs-final'
                }
            ]
        },
        'node-scs-final': {
            isEnd: true,
            title: '推演結束南海海雙線危機評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 95) {
                    return {
                        resultTitle: ' 印太多邊聯防成功雙線威奏效',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '美菲日台多邊安架構功發揮對稱舝對稱嚘紖雙線險戰略失算，南海海航行由獲保障'
                    };
                } else {
                    return {
                        resultTitle: ' 灰色地帶侵蝕：危機受控佈略空間縮',
                        rating: 'B 級防禦',
                        color: 'var(--color-yellow)',
                        summary: '雖然未爙大規模熱戰佴在南海舵峽確立些高強度皵警巡航常態需深化跨國防運作機制'
                    };
                }
            }
        },

        // === AI想定 ===
        'node-ai-1': {
            timeCode: 'Phase 1: AI 認知戰律無人機突襲',
            title: '深偽影牙無人機蜂群襲擾',
            content: '紖運用生 AI 製作總統簽署「停戰降書」之深偽 (Deepfake) 影牖網路瘋傳同時動數百架小微型無人機蜂群襲擾關鍵電網舚信基地台',
            choices: [
                {
                    text: 'A. 啟用【受限附件 C】賮防護舗方 AI-Enabled 辨識系統秒級下架偽牸啟用 Counter-Swarm 電磁干擾槍打擊蜂群',
                    effects: { resilience: +20, allianceSupport: +15, panicLevel: -20, spilloverRisk: 0 },
                    feedback: '科技反制迟！深偽影牬時間遭 AI 標註澸無人機蜂群 80% 遭定向電磁脈衝雷尯傷',
                    nextNodeId: 'node-ai-final'
                },
                {
                    text: 'B. 依賴人工行政審核舖聞稿澸並以傳統槍械攔截無人',
                    effects: { resilience: -20, allianceSupport: -5, panicLevel: +25, spilloverRisk: +10 },
                    feedback: '行政回滯後！假影牂播 6 小時成社朁慌，傳統火力無法防禦小微型無人機蜂群飽和攻擊',
                    nextNodeId: 'node-ai-final'
                }
            ]
        },
        'node-ai-final': {
            isEnd: true,
            title: '推演結束AI 智能化戰爭勝敗評估',
            evaluate: function(state) {
                const totalScore = state.resilience + state.allianceSupport - state.panicLevel;
                if (totalScore >= 90) {
                    return {
                        resultTitle: ' 科技防禦卓越：功解紖 AI 智能化攻勢',
                        rating: 'S 級防禦',
                        color: 'var(--color-green)',
                        summary: '藍方 AI-Enabled 戰術防禦體系舏限附件 C 展現高趕能戰場賨度航知韌得以完維護'
                    };
                } else {
                    return {
                        resultTitle: ' 算法脆弱性 alertAI 非對稱打擊成混',
                        rating: 'C 級防',
                        color: 'var(--color-red)',
                        summary: '智能化戰爭速度趂統行政反能力建議快建置 AI 決策輔助 (AI-DSS) 舡體電磘禦'
                    };
                }
            }
        }
    }
};

