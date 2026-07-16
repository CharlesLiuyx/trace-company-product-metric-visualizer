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
| CB-001 | 多 link 节点端面留缝/溢出、socket 错位；用户指出 nike-q4-fy26 两处节点边缘空隙，同型问题随后又出现在 netease、global-payments（05903ba、9bd426f、dcdd687、4ee731a）。Uber Q3 FY25 与 Pinterest Q3 FY25 又出现 Net Profit 目标端堆叠顺序错误；Lyft Q3 FY25 的 Operating expenses 柱面也曾高于实际接口并压入 label 区（2026-07-16）。 | 多入/出节点、显式 socket、同色入流的目标端顺序 | execution-gap | G12 + L11 接口审计与 Interface Matrix；B8 人工 reconcile 必须逐条核对目标端自上而下身份及 `targetOrder`（L2/L3）。同色入流在 reference raster 的二值 occupancy 中无法可靠恢复逐 link 身份，自动升级 disposition 为 `not-suitable`；保留逐条人工身份核对并绑定 before/after contact sheet。 |
| CB-002 | 同轴 label 与柱交叠、短柱 label 未对中（berkshire 等批次，4472ccf） | 同轴 label、短柱 | execution-gap | G8、G9、G10 + `labelLayoutAudit`（B1/B4/B13 补盲） |
| CB-003 | 可见短柱被缩成不可见锚点或亚像素柱；同批曾对最小柱高各自取值——Visa 6px、SAP/Comcast 3px（0d7cc54、72644e5）。Lyft Q3 FY25 的 Other 72×1px 浅绿柱也曾被误分类为隐藏锚点（2026-07-16）。 | 短辅助柱（interest、tax、other…） | ambiguous-rule | T13 + T21 `node-face-policy/v1` 硬门；例外必须由 Source Coverage 绑定原生 face（B15/T14）；T22 带值 Other 强制可见柱面，hidden-anchor 分类非法（Lyft 复发后升级） |
| CB-004 | 固定布局 label 组整体偏离参考位置，已收敛数据集因此返工（alphabet/amazon/amd 批次；41c2f20） | 每个 `layout.labels.*` 组 | execution-gap | T18 `labelPositionAudit` + Plan 编译强制 `measured-label-position` |
| CB-005 | 复用相邻期间/其他数据集的坐标测量（41c2f20） | 同公司相邻期间 | execution-gap | T19 prepare-review 测量 provenance（外来 digest 拒绝） |
| CB-006 | label 槽位多解时按单一解释先渲染，等用户复审再改判，浪费轮次（41c2f20） | 槽位歧义 | rule-missing | T20 + `ambiguous-label-slot`（渲染前操作者裁决） |
| CB-007 | 隐藏锚点误判：该隐形的画出可见痕、该可见的做成透明锚点、引导线丢失（d519811、636dea5）；Texas Instruments Q4 FY25 的 Other $40M 微流段曾被做成无色锚点，用户指出阅读时没有柱面，已改为按原图 72px × 4px 尺寸呈现的 `visible-short-node` | 细流带+引导线、无柱面对象 | execution-gap | B7 + T12 结构化 native-pixel 证据与独立确认；T12a 注释入口；可见短柱改走 B15/T13/T14/T21；带值 Other 由 T22 直接禁止 hidden-anchor |
| CB-008 | node-like 注释文字无 hover 高亮/Tooltip（2c8b6e7、6345b1a、75d53c8） | node 映射 `annotations.*` | rule-missing | A10 + B16 `semanticAnnotationAudit` 与 renderer hitbox（T17 分类） |
| CB-009 | zh 文本越界/交叠：首次对 zh 开 gate 时清出 15 个数据集的存量欠账（ba9d15c、b62550c、f2ffe7e） | 每个非默认 locale | execution-gap | B6 + Z5 `textLayoutAudit` 每 required locale（Z1 独立证据） |
| CB-010 | 半翻译、缩写拆坏、品牌词被误译（47a708e） | zh overlay、含 `&` 缩写、品牌词 | ambiguous-rule | `verify:i18n` 规则管线 + `EXACT_ZH` identity 词典（Z4/Z8 人工核对） |
| CB-011 | 画布尺寸与参考图不符：salesforce-q1-fy27 `render.width` 3050 对 2958 参考图，渲染层 G2 直到 CI 才拦下（d39c709） | 每个数据集 | execution-gap | G2 渲染 gate + `verify:ssot` 静态 render 画布 ↔ 参考图尺寸一致（`pnpm check` 级） |
| CB-012 | 反馈闭环只写 `required-checklist`，从不编译成机器检查，问题跨 Build 复发（41c2f20） | 每次 execution-gap 复发 | ambiguous-rule | Feedback Ledger 升级 disposition 收紧（复发只认 hard-gate / quantified-audit / not-suitable） |
| CB-013 | Hover 份额被 Adapter 百分比 override、分组语义漂移（用户指出 Tooltip 百分比错误） | 每个数据集 | ambiguous-rule | `CONTEXT.md` 公式 SSOT + `verify:ssot` 拒绝 deprecated override 字段（L14 人工核对） |
| CB-014 | 引擎重构后 hover Tooltip 全部失效（numW 作用域回归，248a485） | render(engine) 改动 | execution-gap | `verify:app` sankey hover 场景断言 Tooltip 份额与字体 + 引擎单测 |
| CB-023 | Source 中的 `Other` / 小额非零对象在 authored 盘点中消失：无 icon 被误当残留，或 `$0.0B` 被当成真实 0（adfe5fe 后 processing 批次复盘；TI 实例见 CB-007） | 每个 value-bearing / Other-like Source 对象 | rule-missing | `source-coverage/v1` 三遍扫描 + semantic 不可 skip + exactly-one SSOT/Adapter node 对账 + rounded-zero precision recovery；manual coverage review 同时引用完整 Source 与 Coverage digest |
| CB-024 | 只看标题、公司名、`revenue` 或期间 token 就选择 Adapter，完整损益表曾被当成 Revenue Metric（adfe5fe 后 processing 批次复盘） | 每个 fresh intake Source | rule-missing | intake 前 `source-classification/v1` whole-Source Type Gate；完整 signals 必须唯一推导 Adapter 并与 `--adapter` 一致，否则 claim 前失败 |
| CB-025 | Apple Q1 FY26 的 Services 图标簇遮住 Wearables 的说明文字；A6/B5 审计此前只采集注释文字，漏掉纯 SVG 图形 | 贴近 label 的 SVG / raster 外观注释 | execution-gap | `annotation-near-label` 编译 A6/B5；显式 `data-annotation-clearance` 图形 bbox 与 label/title/period 自动避让审计 |

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
