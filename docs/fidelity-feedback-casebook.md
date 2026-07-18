# 保真反馈案例登记簿

本文档是**用户反馈过的保真问题**的 Git 跟踪案例登记簿：每个案例记录现象、
根因归因、现行防线和复发升级路径。它存在的原因是结构性的：
`FeedbackRecord` / `FeedbackLedger` 保存在机器本地的 `output/builds/`
（Git 忽略），跨检出、跨机器时 Ledger 的复发判定看不到历史——本登记簿就是
跨检出的复发记忆。登记与消费协议由 `docs/fidelity-loop-rules.md`
§5「反馈如何防复发」拥有；本文档只登记案例事实与规则 ID 指针，不复述任何
规则公式或阈值（阈值属主是规则目录）。在 M4 Publication 落地前，
`record:*` 只写 build-local 对象，因此本登记簿由人工随反馈闭环提交更新；
`pnpm verify:architecture` 校验它的路由、本地链接与规则引用。

使用方式：

- **preflight 消费**：对象盘点完成后，按「触发特征」列对照本表，把命中的
  历史案例作为本 Build 的重点核对方向。
- **反馈闭环登记**：每次用户反馈按 §5 归因、修复、同批横向排查后，新增或
  更新对应案例行（含升级 disposition 变化）。只有登记完成，反馈才算沉淀
  完毕。
- **升级触发**：B 表案例第二次复现时，按 §5 升级阶梯交付 `hard-gate` /
  `quantified-audit`，或记录带理由的 `not-suitable`，并回写「现行防线」。

案例 ID `CB-###` 稳定不复用；`REG-###` / `FB-###` 命名空间仍属 Build 内
region / feedback 对象，与本表互不重叠。

## A. 已升级为机器防线的案例

这些案例的防线已经是自动检查；留档是为了防止防线在重构中丢失（见
CB-021），并让后来者理解每个 gate 的由来。

| 案例 | 现象（来源） | 触发特征 | 归因 | 现行机器防线 |
| --- | --- | --- | --- | --- |
| CB-001 | 多 link 节点端面留缝/溢出、socket 错位；用户指出 nike-q4-fy26 两处节点边缘空隙，同型问题随后又出现在 netease、global-payments（05903ba、9bd426f、dcdd687、4ee731a）。Uber Q3 FY25、Pinterest Q3 FY25 与 Paramount Q3 FY25 又出现 Net Profit 目标端堆叠顺序错误，其中 Paramount 的 Tax 应位于 Operating profit 下方；Lyft Q3 FY25 的 Operating expenses 柱面也曾高于实际接口并压入 label 区（2026-07-16）。Alibaba Q2 FY26 的 Net profit 目标端又曾把细绿 Operating profit link 排在 Investments 上方，用户要求将其接口移到最下方（2026-07-18）。 | 多入/出节点、显式 socket、同色入流的目标端顺序 | execution-gap | G12 + L11 接口审计与 Interface Matrix；B8 人工 reconcile 必须逐条核对目标端自上而下身份及 `targetOrder`（L2/L3）；Paramount 数据集契约测试固定 Net profit 的 Operating profit → Tax 顺序。同色入流在 reference raster 的二值 occupancy 中无法可靠恢复逐 link 身份，自动升级 disposition 为 `not-suitable`；保留逐条人工身份核对并绑定 before/after contact sheet。 |
| CB-002 | 同轴 label 与柱交叠、短柱 label 未对中（berkshire 等批次，4472ccf） | 同轴 label、短柱 | execution-gap | G8、G9、G10 + `labelLayoutAudit`（B1/B4/B13 补盲） |
| CB-003 | 可见短柱被缩成不可见锚点或亚像素柱；同批曾对最小柱高各自取值——Visa 6px、SAP/Comcast 3px（0d7cc54、72644e5）。Lyft Q3 FY25 的 Other 72×1px 浅绿柱、Block Q3 FY25 的 Amortization 71×1px 浅红柱、Marriott Q3 FY25 的 D&A 71×1px 浅红末端柱、Paramount Q3 FY25 的 Eliminations 71×2px 浅红柱、Axon Q3 FY25 与 JD.com Q3 FY25 的 Operating loss 72×2px 红柱，以及 Palantir Q3 FY25 的 Tax 71×3px 浅红柱均曾被误分类为隐藏锚点；Marriott 首次修复又错误放大为 3px，用户要求严格恢复 1px（2026-07-16）；Palantir 的浅红柱与同色细流带相连，用户截图指出整条 Tax 结构消失（2026-07-17）；JD.com 的水平短柱虽保留几何却被设为透明，用户截图指出柱面消失（2026-07-18）；Docebo Q3 FY25 的 Other 71×2px 浅绿柱又被误分类为 `nonNodeMetrics.flow`，用户截图同时指出柱面消失与 `$0.2M` 重复（2026-07-18）；Workday Q3 FY26 的 Restructuring 71×2px 红色末端柱又被误判为 zero-face route，用户截图要求补回横向柱（2026-07-18）。 | 短辅助柱（interest、tax、other、amortization、D&A、eliminations、operating loss、restructuring…） | ambiguous-rule → execution-gap recurrence | T13 + T21 `node-face-policy/v2` 硬门；所有 `nodes.*` mapping 自动进入 B15 paint 审计，例外必须由 Source Coverage 绑定原生 face（T14）；T23 在 Plan 前像素复核任何 financial `nonNodeMetrics.*` 的 zero-paint 声明；Block/Marriott/Paramount/Axon/Palantir/JD.com/Docebo/Workday 增加数据集契约测试，固定各自 Source face、非透明颜色及原生 link endpoint；Docebo 额外固定 `Other` 只能有一套金额 label；用户明确要求原生高度时不得用共享可见高度替代 |
| CB-004 | 固定布局 label 组整体偏离参考位置，已收敛数据集因此返工（alphabet/amazon/amd 批次；41c2f20） | 每个 `layout.labels.*` 组 | execution-gap | T18 `labelPositionAudit` + Plan 编译强制 `measured-label-position` |
| CB-005 | 复用相邻期间/其他数据集的坐标测量（41c2f20） | 同公司相邻期间 | execution-gap | T19 prepare-review 测量 provenance（外来 digest 拒绝） |
| CB-006 | label 槽位多解时按单一解释先渲染，等用户复审再改判，浪费轮次（41c2f20） | 槽位歧义 | rule-missing | T20 + `ambiguous-label-slot`（渲染前操作者裁决） |
| CB-007 | 隐藏锚点误判：该隐形的画出可见痕、该可见的做成透明锚点、引导线丢失（d519811、636dea5）；Texas Instruments Q4 FY25 的 Other $40M 微流段曾被做成无色锚点；Block Q3 FY25 的 Amortization、Marriott Q3 FY25 的 D&A 71×1px 连续浅红柱、Paramount Q3 FY25 的 Eliminations 71×2px 浅红柱、Axon Q3 FY25 与 JD.com Q3 FY25 的 Operating loss 72×2px 红柱、Palantir Q3 FY25 的 Tax 71×3px 浅红柱也被误判为透明锚点；Docebo Q3 FY25 的 Other 71×2px 浅绿柱又被误建模为无柱面 flow route；Workday Q3 FY26 的 Restructuring 71×2px 红柱也被误建模为 zero-face route，均由用户截图指出 | 细流带+引导线、无柱面对象 | execution-gap recurrence | B7/T12/T12a 已废止；现行模型要求有 face 的对象走 B15/T13/T14/T21，无 face 的数据、引导组和流端点分别进入 `nonNodeMetrics` 的 data-only/annotation/flow 表达，flow 几何由 `layout.routes` + link endpoint 拥有；T23 对 financial non-node 的 Source slot 做像素级负向校验；SSOT gate 拒绝显式透明语义 node；Docebo 与 Workday 数据集契约测试固定各自短柱 face、非透明颜色与原生 endpoint |
| CB-008 | node-like 注释文字无 hover 高亮/Tooltip（2c8b6e7、6345b1a、75d53c8）；RBI Q1 FY26 的 Other income 引导线再次出现只高亮、不显示份额 Tooltip（2026-07-16）；KLA Q3 FY26 的 Other income 同时绘制 annotation guide 与 route link，Hover Tag 未锚到语义 Link 中心线，随后该语义 Label 又被指出偏右上、未保持与目标柱列的紧凑间距（2026-07-19） | node 映射 `annotations.*`，或无 graph link 的语义引导线 | rule-missing → execution-gap recurrence | A4/A5/A10 + B16 `semanticAnnotationAudit` 与 renderer hitbox（T17 分类）；语义 guide 必须声明 endpoints/anchor，已有 annotation guide 的 graph relationship 必须 `interactionOnly`，Hover Tag 锚到语义 Link 中心线；`verify:app` 逐 label + guide 断言 Tooltip，数据集契约测试固定唯一可见 guide、关系、anchor 与用户确认后的 label 组坐标 |
| CB-009 | zh 文本越界/交叠：首次对 zh 开 gate 时清出 15 个数据集的存量欠账（ba9d15c、b62550c、f2ffe7e） | 每个非默认 locale | execution-gap | B6 + Z5 `textLayoutAudit` 每 required locale（Z1 独立证据） |
| CB-010 | 半翻译、缩写拆坏、品牌词被误译（47a708e） | zh overlay、含 `&` 缩写、品牌词 | ambiguous-rule | `verify:i18n` 规则管线 + `EXACT_ZH` identity 词典（Z4/Z8 人工核对） |
| CB-011 | 画布尺寸与参考图不符：salesforce-q1-fy27 `render.width` 3050 对 2958 参考图，渲染层 G2 直到 CI 才拦下（d39c709） | 每个数据集 | execution-gap | G2 渲染 gate + `verify:ssot` 静态 render 画布 ↔ 参考图尺寸一致（`pnpm check` 级） |
| CB-012 | 反馈闭环只写 `required-checklist`，从不编译成机器检查，问题跨 Build 复发（41c2f20） | 每次 execution-gap 复发 | ambiguous-rule | Feedback Ledger 升级 disposition 收紧（复发只认 hard-gate / quantified-audit / not-suitable） |
| CB-013 | Hover 份额被 Adapter 百分比 override、分组语义漂移（用户指出 Tooltip 百分比错误） | 每个数据集 | ambiguous-rule | `CONTEXT.md` 公式 SSOT + `verify:ssot` 拒绝 deprecated override 字段（L14 人工核对） |
| CB-014 | 引擎重构后 hover Tooltip 全部失效（numW 作用域回归，248a485） | render(engine) 改动 | execution-gap | `verify:app` sankey hover 场景断言 Tooltip 份额与字体 + 引擎单测 |
| CB-023 | Source 中的 `Other` / 小额非零对象在 authored 盘点中消失：无 icon 被误当残留，或 `$0.0B` 被当成真实 0（adfe5fe 后 processing 批次复盘；TI 实例见 CB-007） | 每个 value-bearing / Other-like Source 对象 | rule-missing | `source-coverage/v2` 三遍扫描 + semantic 不可 skip + exactly-one SSOT/Adapter node-or-non-node-metric 对账 + rounded-zero precision recovery；manual coverage review 同时引用完整 Source 与 Coverage digest |
| CB-024 | 只看标题、公司名、`revenue` 或期间 token 就选择 Adapter，完整损益表曾被当成 Revenue Metric（adfe5fe 后 processing 批次复盘） | 每个 fresh intake Source | rule-missing | intake 前 `source-classification/v1` whole-Source Type Gate；完整 signals 必须唯一推导 Adapter 并与 `--adapter` 一致，否则 claim 前失败 |
| CB-025 | Apple Q1 FY26 的 Services 图标簇遮住 Wearables 的说明文字；A6/B5 审计此前只采集注释文字，漏掉纯 SVG 图形 | 贴近 label 的 SVG / raster 外观注释 | execution-gap | `annotation-near-label` 编译 A6/B5；显式 `data-annotation-clearance` 图形 bbox 与 label/title/period 自动避让审计 |
| CB-027 | Pfizer Q3 FY25 的 Operating profit 在 Source 中误写为 `$3.3M`，但图内 20% margin、流宽及 Pfizer/SEC 官方披露均证明应为十亿美元口径；直接按图写 M 会破坏 SSOT 与拓扑，直接改 B 又会抹掉 Source 事实 | 非零金额的 K/M/B/T 单位与官方披露、图内比例或几何冲突 | rule-missing | `source-coverage/v2` 的 `authoritative-source-correction`：保留原 literal，只允许用户明确批准的 `unit-typo`，绑定官方 locator/literal、纠正后 literal 与理由；官方值及纠正值均须落在 authored amount 的 resolution 内，且与 rounded-zero precision recovery 互斥 |
| CB-030 | AMC Q3 FY25 的 Other theatre 名称与两行说明虽未越界，但末行过于贴近下方 Attendance / F&B KPI 卡；用户要求整组上移（2026-07-17） | 靠近独立卡片底边的多行语义 annotation，0 overlap 不足以表达所需留白 | ambiguous-rule | A5 人工净空复核 + AMC 数据集契约测试固定英文/中文三行 baseline 为 1100/1142/1176、卡片顶边为 1199；同批新 Adapter 横向排查未发现另一组同型“多行语义 annotation 紧邻 KPI 卡”布局 |
| CB-031 | KLA Q3 FY26 的 Cost of revenue 在 Source 中写成 `($1.1B)`，但同图 Revenue − Gross profit、柱宽及 KLA 10-Q 的 `$1.327672B` 均支持 `($1.3B)`；现有 correction 只允许单位笔误，无法诚实记录同单位的数字笔误（2026-07-19） | 非零金额的数字与官方披露、图内算式或几何冲突，但 K/M/B/T 后缀本身正确 | rule-missing | `source-coverage/v2` 的 `authoritative-source-correction` 新增 typed `numeric-typo`；要求 Source 单位与 authored unit 相同、保留原 literal、绑定用户批准、官方 locator/literal、纠正后 literal 与理由；官方值及纠正值仍须在 declared resolution 内，且与 rounded-zero precision recovery 互斥 |

## B. 已记录为人工/陷阱防线的案例（复发即须升级）

首次发生按 §5 阶梯允许以文档陷阱或人工检查关闭；本表把「第二次复现必须
交付的升级形态」写死，避免复发时重新争论。

| 案例 | 现象（来源） | 触发特征 | 现行防线 | 复发升级路径 |
| --- | --- | --- | --- | --- |
| CB-015 | 图表标题按参考图 y 值直抄后整体偏低（baseline 与 top-of-text 差 ~16px）；title/period 不在 `layout.labels.*`，T18 不覆盖（41c2f20） | 每个数据集的 title/period | workflow §Traps 陷阱条目 + 人工核对渲染 bbox | 把 title/period 纳入 `labelPositionAudit` 型参考位置自动比对（quantified-audit） |
| CB-016 | 整数金额默认格式丢小数（`3.0` 渲染成 `€3B`），与源图不符（d27a789） | 值恰为整数的 node | `data/schema.md` `valueText` override + workflow §Traps 逐 node 核对 | 为整数值 node 输出显式 `valueText` 决定审计（quantified-audit） |
| CB-017 | zh 本地化行被 runtime raster 色块裁剪（同比 Y/Y 行；41c2f20） | runtime raster + 非默认 locale | Z6a 人工移位 + workflow §Traps | 每 locale raster bbox × 文本 bbox 交叠 quantified-audit |
| CB-018 | 深色 hub 出发的纯色 profit ribbon 被渲染为渐变（03f665a） | 深色 hub/source 的 profit link | B9 + L12 人工近源取色 | 色彩语义判定不可自动化时记 not-suitable；可补 `linkTint` 存在性量化报告 |
| CB-019 | Tooltip Tag 锚到 tapered 闭合路径的周长中点而非中心线中点 | tapered ribbon | 渲染器已按中心线 `t=0.5` 锚定 + B11/L16 人工核对 clamp 遮挡 | 复发按 render-engine 回归处理并补引擎单测（quantified-audit） |
| CB-020 | interim 期间（`3M`/`H1`/`YTD`…）变体标签回落成 `Main` | interim span 记录 | workflow §Traps + 人工核对 chip 标签/顺序/激活态 | viewer variant label 单测（quantified-audit） |
| CB-026 | 方向性支流被接到错误上游：Meta Q4 FY25 的 Other 应独立流向 Net profit，却被写成 Operating profit → Other，并令 Operating profit → Tax 错缩为 $2.0B（用户截图） | Other-like 小额支流、相邻的利润终点 | execution-gap | Source Coverage 逐 flow 的 sourceId、Adapter source/target 映射与相邻利润节点的金额平衡 + B8 人工方向核对 | 同型问题再次出现时，将 source flow direction 与相邻节点金额平衡编译为量化方向审计（quantified-audit） |
| CB-028 | Affirm Q1 FY26 的 Tax 细柱被测到下方 Loss 柱边缘，导致 Tax hairline 终点从源图 `y=433–434` 下移到 `y=512`；用户截图指出柱位过低 | 低于共享 floor 的细柱与相邻同色/近色柱共列，且两者垂直距离较近 | execution-gap | B8 逐接口人工核对 + T14/T21 Source-bound 原生像素扫描；测量时必须区分目标细柱色值与相邻柱抗锯齿边缘，并记录同批横向排查 | 同型问题再次出现时，为 below-floor face 增加“flow endpoint ↔ observedBBox 中心距离”量化审计（quantified-audit） |
| CB-029 | Affirm Q1 FY26 的 Gain on sale of loans 名称块位于柱中心上方；Airbnb Q3 FY25 又出现四个区域名称未与柱面居中、LATAM/APAC 金额块未贴近短柱的同型反馈；Live Nation Q3 FY25 的 Ticketing 与 Sponsorship 名称/利润率/同比块又分别低于柱面中心 43.5px 与 44px（2026-07-17）；Rivian Q1 FY26 的 R&D 完整标签组低于柱面中心约 44px，用户要求整体上移并与柱体横向对齐（2026-07-19） | 侧置名称块与金额/备注分块布局，名称块应以 node face 为中心而完整 label union 仍保留源图关系 | execution-gap recurrence | 为对象声明 `centered-side-label`，并按 T18 保留 Source `referenceBBox`、记录用户批准的 `approvedTargetBBox`；B3/T7 hard gate 每个 locale 强制中心差 `<=4px`；Live Nation 与 Rivian 增加数据集契约测试固定 label top 与 node face 中心关系 | 若金额语义无法由渲染文本稳定识别，则为 label block 增加显式 role，并让自动推导门槛改用 role 而非文本模式 |

## C. 流程结构性案例

- **CB-021 防线随重构丢失**：旧版规则文档的「同批同型横向排查」义务
  （用户指出一个数据集的问题后，必须排查同批其余数据集的同型问题；起源于
  CB-001 的 nike 案例外溢）在 fc96be0 引入 Ledger 机制时被整体删除、未被
  替代文字保留，一度无属主。已恢复进 `docs/fidelity-loop-rules.md` §5。
  教训：判定语义零改动审计只覆盖编号规则，散文协议同样需要迁移清单；本
  登记簿的 A 表就是防线存续的对账清单。
- **CB-022 复发记忆机器本地化**：Ledger 的跨 Build 复发判定只读本机
  `output/builds/`，跨机器/跨检出的复发它看不见（本登记簿的直接起因）。
  防线：本登记簿 + §5 登记义务 + `pnpm verify:architecture` 对登记簿路由
  与规则引用的检查。
