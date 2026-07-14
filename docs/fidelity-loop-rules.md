# 保真循环规则

本文档只负责 d3-Sankey 的视觉保真规则、人工检查方法和结束条件。
字段格式、Build 生命周期、命令顺序和资产目录分别由下列文档负责；本文不再复制：

- 工作流与命令：`docs/dynamic-dataset-workflow.md`
- Build、证据与发布语义：`docs/architecture/verification-publication.md`
- dataset / SSOT 字段：`data/schema.md`
- 图标与 raster 目录：`data/assets/README.md`

规则 ID 必须稳定。规则语义的 SSOT 是结构化目录
`scripts/lib/fidelity-rules-catalog.mjs`；本文 §3 的目录区是它的生成视图
（`pnpm update:fidelity-rules-doc`），是规则条目的唯一呈现面。领域公式可由
明确链接的上游文档拥有，例如 L14 引用 `CONTEXT.md`，但其他段落和文档不得
重写该公式。机器契约 `scripts/lib/fidelity-rule-contract.mjs` 从 catalog 派生
执行方式与 feature 注册表；`pnpm verify:architecture` 校验生成区新鲜、手写区
没有第二个规则定义面、所有规则引用可解析。
文档长度只是可读性指标，不设可用压行规避的行数 gate。

## 1. 契约、术语与判定原则

### 规则记录的字段

每条规则是 catalog 中的一条结构化记录：

| 字段 | 含义 |
| --- | --- |
| `id` | 稳定 ID；已有 ID 不重编号、不改义。系列字母只是命名空间，检索用 §3 索引 |
| `enforcement` | `hard-gate`、`build-gate`、`conditional-gate`、`quantified-audit` 或 `manual` |
| `stage` / `topics` | 主要归属的 sweep stage（§4）与对象主题，驱动 §3 导航索引 |
| `trigger` / `check` / `pass` / `evidence` | 何时触发 → 检查什么 → 怎样通过 → 留什么证据 |
| `compensates` | 盲点补偿类规则指回被补偿的自动规则 |
| `features` | 关联的 ObjectInventory feature（与 Plan 编译共享） |
| `rationale` / `origin` | 设计理由、历史教训与引入来源；永不参与判定 |
| `status` | `active` 或 `superseded`（附 `supersededBy`）；废弃规则保留记录，不删除、不复用 ID |

五种执行方式的含义：

- `hard-gate`：自动失败会阻断本次有效证据。
- `build-gate`：独立的 Build-bound 检查；不要求每次截图重复执行。
- `conditional-gate`：`ObjectInventory` 命中特征后，由 `VerificationPlan` 强制。
- `quantified-audit`：程序给出量化事实，仍需人工完成语义判断。
- `manual`：必须人工判断并留下绑定证据的决定。

### 迭代术语表

| 术语 | 中文 | 含义 |
| --- | --- | --- |
| `preflight` | 渲染前测量 | 第一次候选渲染前，对参考图逐对象测量。 |
| `sweep stage` | 检查层 | 结构、文本、润色/本地化三层检查中的一层（§4）。 |
| `evidence run` | 证据运行 | 一次真实渲染及其证据归档；存档序号只表示运行顺序，由工具自动递增，不接受手工指定。 |
| `human iteration` | 人工迭代 | 一次人工发现、修复、复查和决定。 |
| `focus` | 证据方向标签 | 证据存档的方向标签；Build-bound 证据必须取 §4 的 canonical stage focus 枚举值，自由字符串仅限只读诊断。 |
| `freeze` / `reopen` | 冻结 / 重开 | 当前层检查闭合 / 因对象变化、自动回退、用户反馈或早层错误而重新打开（§4）。 |

不要再用含义不清的“第几轮”同时指代以上概念；运行顺序只由 evidence run 的
自动序号表达。

### 判定优先级

1. 先保证语义、拓扑、接口和文本归属正确。
2. 再修人眼显著的几何和布局错误。
3. 最后优化颜色、图标、抗锯齿等视觉残差。
4. 全图 Diff 是证据，不是凌驾于局部语义事实之上的裁判。

差异分为四类：

- **必须修复**：接口/拓扑错误、节点或短柱消失、文本错属/交叠/越界、关键注释错误。
- **需要优化**：明显的几何、间距、字号、颜色或图标偏差。
- **可接受残留**：浏览器字形、抗锯齿、亚像素和轻微手绘曲线差异。
- **无语义跳过**：水印、发布者品牌、URL、社交徽标、署名和纯装饰残片。

`REG-001` 表示稳定检查区域，`FB-001` 表示稳定反馈；二者不能复用规则 ID。

## 2. 首次渲染前：对象、测量与计划

### ObjectInventory v3

`object-inventory/v3` 是 preflight 的入口。每个参考图对象需要稳定 object ID、
render/data-only/skip 处置、authored mapping、来源证据和风险 feature。
任何 skip 都必须有理由。

每个映射为 Sankey node 的对象必须且只能声明以下一种意图：

- `visible-node-face`：参考图中能看到 node 柱面。
- `hidden-anchor`：参考图只显示流带或引导线，没有 node 柱面；它是保守默认之外的例外，不是处理极短柱的捷径。

Node-face 判定采用“可见优先”方法：不确定时声明 `visible-node-face`；原生尺寸下
1–3px 的连续有色直线默认同时声明 `visible-short-node`。只有原生像素 crop 与像素扫描
都确认预期 bbox 内没有独立柱面，并能说明可见线段只属于流带/引导线时，才允许
`hidden-anchor`。其 `featureEvidence.hidden-anchor` 必须同时记录带稳定 fragment 的
`locator`、原生像素 `referenceBBox: [x, y, width, height]`、
`inspectionMethod: native-scale-crop-and-pixel-scan`、Build Source `digest`、
`classificationClaim: no-visible-node-face-observed` 和具体 `reason`。这里记录的是
待审 claim，不是人工接受；缺任一字段，或仍有
语义歧义，均不得准备 review。

附加 feature：

- `visible-short-node` 必须同时声明 `visible-node-face`，并附短柱 crop、bbox、柱面色和背景色。
- `specified-label-weight` 只在来源或设计规格明确字重时使用，记录语义 heading、期望字重和证据。
- `semantic-annotation` 只用于参考图确认必须以 annotation 呈现的 Sankey node 名称/金额/引导组；该 node object 必须映射 `annotations.*`，并记录原生 crop、bbox、Source digest、`inspectionMethod: native-scale-crop-and-object-inventory`、`classificationClaim: semantic-node-annotation-required` 与理由。默认选择 `layout.labels`；不能仅为方便定位把 node label 降级为普通 annotation。
- `measured-label-position` 是每个映射 `layout.labels.*`（icon 位除外）的 render object 的
  必备 feature：Plan 编译对 income-statement 强制，缺声明即拒绝编译。其
  `featureEvidence` 必须记录带稳定 fragment 的 Source `locator`、该 label 组文字 union 的
  原生像素 `referenceBBox: [x, y, width, height]`、本 Build 的 Source `digest` 和
  `inspectionMethod: native-scale-reference-measurement`。这份测量就是 T18 自动比对的
  参考答案，T19 在 prepare-review 时验证它确实量自本 Build 的 Source。
- `ambiguous-label-slot`：preflight 无法从参考图唯一判定某 label 的槽位或归属时声明；
  记录竞争解释的 `reason`、带 fragment 的 crop `locator`、`referenceBBox`、Source `digest`
  与 `classificationClaim: label-slot-ambiguous-operator-decision-required`。它编译出 T20
  的 render 前操作者裁决检查。
- `visible-interface`、`centered-side-label`、`text`、`annotation-near-label` 等既有 feature
  继续按对象事实声明，不能为了减少检查而省略。

任一 node 未完成可见/隐藏二选一，或任一 feature 缺必要证据时，不得准备 review。

### 必须测量的对象事实

preflight 至少逐对象记录：

- 原始画布宽高、各列 x、node bbox；短柱另记局部 crop、语义 ID、柱面色和背景色。
- 每条 link 的 source/target、两端 socket、可见宽度、中心和顺序。
- 每个端面的 binary occupancy union；先判连续/间隔，再辨认可靠的 per-link interval。
- 每个 label 的语义组、anchor、渲染目标位置；名称、金额、备注、margin、Y/Y 不拆散归属。
- 注释容器、内容 union、图标 cluster 和受保护文本的 bbox。

固定 `layout.labels.<node>.blocks` 的纵向位置必须逐组从当前参考图测量：记录文字 union（或逐行 bbox）、`block.top`、x/anchor，以及它与 node/link 的关系。这些测量不是草稿，而是 `measured-label-position` 的 `featureEvidence`（referenceBBox + Source digest），由 T18 在每次 evidence run 自动对照、T19 在 prepare-review 验证 provenance。同公司相邻期间或相邻对象只能作为视觉语言参考，不能作为坐标来源——外来 digest 会被 T19 直接拒绝。每次改变 `top`、行距、字号或 `textLength` 后，必须在下一次 text sweep 中逐 locale 对照候选与参考的 top/bottom/anchor；任何未测量或明显偏移的组都以 reference red-box 重开 text stage。

测量值直接用于第一版 Adapter；不能先粗排，再靠多次 evidence run 逼近。

### Interface Matrix v1

新数据集、geometry 或 render-engine 影响必须提供完整 `interface-matrix/v1`，覆盖
参考图与候选图接口 ID 的并集。纯 display-text/localization 变化仍跑候选接口回归；
没有几何变化时不必重建未受影响的完整 Matrix。每行至少包含：

- interface ID、node、side、coverage intent（`reference` 或 `full-face`）；
- reference/candidate node bbox、union intervals，以及能可靠识别的 per-link intervals；
  reference-only 或 candidate-only 行缺少的一侧写 `null`，两侧都存在时才有 deltas；
- top、bottom、center、width deltas；endpoint、tangent 结果；containment 由绑定的自动 audit 证明；
- reference crop、automatic audit、contact sheet 的 evidence digest；
- `passed`、`failed`、`documented-exception`、`manual-pending` 或 `not-scored`。

summary 只能从 rows 派生，不能手填。`full-face` 必须有 reference 测量或设计规格
provenance，并与 Adapter 的 `fullFaceIds` 同 ID；仅在 Adapter 写一个 ID 不能覆盖参考事实。
三类 evidence digest 在单边行也都必填：缺失侧的局部 crop 用来证明“确实没有接口”。
单边行默认 `failed`；Matrix 不能把自动层的 reference/candidate mismatch 改成通过。
`documented-exception` 只能描述已有 typed reference/design-spec provenance 的拓扑差异，
不能豁免 endpoint、水平切线、candidate containment 或其他 hard gate。

### VerificationPlan v3

`verification-plan/v3` 从 inventory feature、ChangeImpact 和 required locales 编译检查。
每个 required check 都带执行方式、object scope 和 locale scope；只有 Plan 可以生成
`notApplicable`。review caller 不能删检查，也不能自行声明不适用。
ChangeImpact 的枚举和分类边界由 `docs/architecture/dataset-lifecycle.md` 与
`docs/dynamic-dataset-workflow.md` 拥有；本文只消费 Plan 的结论。

开始 Plan 要求的 structure sweep stage 前，必须同时具备：完整 inventory、preflight
测量、reference 侧 Matrix、当前 authored artifact 映射和编译成功的 Plan。

## 3. 规则目录

<!-- fidelity-rules:generated:begin -->

_本目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs`
生成；不要手改，改规则请编辑 catalog 后重新生成。_

### 索引

**按 sweep stage：**

| 阶段 | 规则 |
| --- | --- |
| structure | [G1](#rule-g1) [G2](#rule-g2) [G4](#rule-g4) [G5](#rule-g5) [G6](#rule-g6) [G7](#rule-g7) [G12](#rule-g12) [B7](#rule-b7) [B8](#rule-b8) [B10](#rule-b10) [B11](#rule-b11) [B12](#rule-b12) [B15](#rule-b15) [R3](#rule-r3) [R4](#rule-r4) [R5](#rule-r5) [R6](#rule-r6) [R7](#rule-r7) [R8](#rule-r8) [R9](#rule-r9) [L1](#rule-l1) [L2](#rule-l2) [L3](#rule-l3) [L4](#rule-l4) [L5](#rule-l5) [L6](#rule-l6) [L7](#rule-l7) [L8](#rule-l8) [L9](#rule-l9) [L10](#rule-l10) [L11](#rule-l11) [L13](#rule-l13) [L14](#rule-l14) [L15](#rule-l15) [L16](#rule-l16) [T12](#rule-t12) [T12a](#rule-t12a) [T13](#rule-t13) [T14](#rule-t14) [T21](#rule-t21) |
| text | [G3](#rule-g3) [G3a](#rule-g3a) [G3b](#rule-g3b) [G3c](#rule-g3c) [G8](#rule-g8) [G9](#rule-g9) [G10](#rule-g10) [B1](#rule-b1) [B2](#rule-b2) [B3](#rule-b3) [B4](#rule-b4) [B5](#rule-b5) [B6](#rule-b6) [B13](#rule-b13) [B14](#rule-b14) [T1](#rule-t1) [T2](#rule-t2) [T3](#rule-t3) [T4](#rule-t4) [T5](#rule-t5) [T6](#rule-t6) [T7](#rule-t7) [T8](#rule-t8) [T9](#rule-t9) [T10](#rule-t10) [T11](#rule-t11) [T15](#rule-t15) [T16](#rule-t16) [T17](#rule-t17) [T18](#rule-t18) [T20](#rule-t20) [A1](#rule-a1) [A2](#rule-a2) [A3](#rule-a3) [A4](#rule-a4) [A5](#rule-a5) [A6](#rule-a6) [A7](#rule-a7) [A8](#rule-a8) [A9](#rule-a9) [A10](#rule-a10) |
| polish-l10n | [B9](#rule-b9) [L12](#rule-l12) [Z1](#rule-z1) [Z2](#rule-z2) [Z3](#rule-z3) [Z4](#rule-z4) [Z5](#rule-z5) [Z6](#rule-z6) [Z6a](#rule-z6a) [Z7](#rule-z7) [Z8](#rule-z8) |
| build | [G11](#rule-g11) [B16](#rule-b16) [T19](#rule-t19) |
| subloop | [R1](#rule-r1) [R2](#rule-r2) [I1](#rule-i1) [I2](#rule-i2) [I3](#rule-i3) [I4](#rule-i4) [I5](#rule-i5) [I6](#rule-i6) [I7](#rule-i7) [I8](#rule-i8) [I9](#rule-i9) [I10](#rule-i10) [I11](#rule-i11) |

**按主题：**

| 主题 | 规则 |
| --- | --- |
| node | [G8](#rule-g8) [G9](#rule-g9) [G10](#rule-g10) [B1](#rule-b1) [B2](#rule-b2) [B4](#rule-b4) [B7](#rule-b7) [B10](#rule-b10) [B12](#rule-b12) [B13](#rule-b13) [B15](#rule-b15) [B16](#rule-b16) [L4](#rule-l4) [L6](#rule-l6) [L9](#rule-l9) [L11](#rule-l11) [L13](#rule-l13) [L14](#rule-l14) [T1](#rule-t1) [T2](#rule-t2) [T3](#rule-t3) [T4](#rule-t4) [T5](#rule-t5) [T8](#rule-t8) [T9](#rule-t9) [T10](#rule-t10) [T12](#rule-t12) [T12a](#rule-t12a) [T13](#rule-t13) [T14](#rule-t14) [T15](#rule-t15) [T21](#rule-t21) [A10](#rule-a10) |
| link | [G12](#rule-g12) [B8](#rule-b8) [B9](#rule-b9) [B10](#rule-b10) [B11](#rule-b11) [B12](#rule-b12) [L1](#rule-l1) [L2](#rule-l2) [L3](#rule-l3) [L4](#rule-l4) [L5](#rule-l5) [L6](#rule-l6) [L7](#rule-l7) [L8](#rule-l8) [L9](#rule-l9) [L10](#rule-l10) [L11](#rule-l11) [L12](#rule-l12) [L13](#rule-l13) [L14](#rule-l14) [L15](#rule-l15) [L16](#rule-l16) |
| label | [G8](#rule-g8) [G9](#rule-g9) [G10](#rule-g10) [B1](#rule-b1) [B2](#rule-b2) [B3](#rule-b3) [B4](#rule-b4) [B5](#rule-b5) [B6](#rule-b6) [B13](#rule-b13) [B14](#rule-b14) [L13](#rule-l13) [T1](#rule-t1) [T2](#rule-t2) [T3](#rule-t3) [T4](#rule-t4) [T5](#rule-t5) [T6](#rule-t6) [T7](#rule-t7) [T8](#rule-t8) [T9](#rule-t9) [T10](#rule-t10) [T11](#rule-t11) [T15](#rule-t15) [T16](#rule-t16) [T17](#rule-t17) [T18](#rule-t18) [T20](#rule-t20) [A6](#rule-a6) [Z5](#rule-z5) [Z8](#rule-z8) |
| annotation | [B5](#rule-b5) [B16](#rule-b16) [T12a](#rule-t12a) [T17](#rule-t17) [A1](#rule-a1) [A2](#rule-a2) [A3](#rule-a3) [A4](#rule-a4) [A5](#rule-a5) [A6](#rule-a6) [A7](#rule-a7) [A8](#rule-a8) [A9](#rule-a9) [A10](#rule-a10) [Z6a](#rule-z6a) |
| locale | [B6](#rule-b6) [A7](#rule-a7) [Z1](#rule-z1) [Z2](#rule-z2) [Z3](#rule-z3) [Z4](#rule-z4) [Z5](#rule-z5) [Z6](#rule-z6) [Z6a](#rule-z6a) [Z7](#rule-z7) [Z8](#rule-z8) |
| raster | [G6](#rule-g6) [G7](#rule-g7) [R1](#rule-r1) [R2](#rule-r2) [R3](#rule-r3) [R4](#rule-r4) [R5](#rule-r5) [R6](#rule-r6) [R7](#rule-r7) [R8](#rule-r8) [R9](#rule-r9) [Z6a](#rule-z6a) |
| icon | [R1](#rule-r1) [R2](#rule-r2) [I1](#rule-i1) [I2](#rule-i2) [I3](#rule-i3) [I4](#rule-i4) [I5](#rule-i5) [I6](#rule-i6) [I7](#rule-i7) [I8](#rule-i8) [I9](#rule-i9) [I10](#rule-i10) [I11](#rule-i11) |
| global | [G1](#rule-g1) [G2](#rule-g2) [G3](#rule-g3) [G3a](#rule-g3a) [G3b](#rule-g3b) [G3c](#rule-g3c) [G4](#rule-g4) [G5](#rule-g5) [G6](#rule-g6) [G7](#rule-g7) [G11](#rule-g11) [T19](#rule-t19) |

**按执行方式：**

| 类别 | 规则 |
| --- | --- |
| `hard-gate` | [G1](#rule-g1) [G2](#rule-g2) [G3](#rule-g3) [G3a](#rule-g3a) [G3b](#rule-g3b) [G3c](#rule-g3c) [G4](#rule-g4) [G5](#rule-g5) [G6](#rule-g6) [G7](#rule-g7) [G8](#rule-g8) [G9](#rule-g9) [G10](#rule-g10) [G12](#rule-g12) [R3](#rule-r3) [R4](#rule-r4) [R5](#rule-r5) [R6](#rule-r6) [R7](#rule-r7) [R8](#rule-r8) [R9](#rule-r9) [L15](#rule-l15) |
| `build-gate` | [G11](#rule-g11) [T19](#rule-t19) |
| `conditional-gate` | [B3](#rule-b3) [B5](#rule-b5) [B6](#rule-b6) [B7](#rule-b7) [B15](#rule-b15) [B16](#rule-b16) [T7](#rule-t7) [T13](#rule-t13) [T18](#rule-t18) [A6](#rule-a6) [A10](#rule-a10) [Z5](#rule-z5) |
| `quantified-audit` | [B8](#rule-b8) [B10](#rule-b10) [B12](#rule-b12) [L5](#rule-l5) [L6](#rule-l6) [L10](#rule-l10) [L11](#rule-l11) [T1](#rule-t1) [T2](#rule-t2) [T4](#rule-t4) [T6](#rule-t6) [T21](#rule-t21) |
| `manual` | [B1](#rule-b1) [B2](#rule-b2) [B4](#rule-b4) [B9](#rule-b9) [B11](#rule-b11) [B13](#rule-b13) [B14](#rule-b14) [R1](#rule-r1) [R2](#rule-r2) [L1](#rule-l1) [L2](#rule-l2) [L3](#rule-l3) [L4](#rule-l4) [L7](#rule-l7) [L8](#rule-l8) [L9](#rule-l9) [L12](#rule-l12) [L13](#rule-l13) [L14](#rule-l14) [L16](#rule-l16) [T3](#rule-t3) [T5](#rule-t5) [T8](#rule-t8) [T9](#rule-t9) [T10](#rule-t10) [T11](#rule-t11) [T12](#rule-t12) [T12a](#rule-t12a) [T14](#rule-t14) [T15](#rule-t15) [T16](#rule-t16) [T17](#rule-t17) [T20](#rule-t20) [A1](#rule-a1) [A2](#rule-a2) [A3](#rule-a3) [A4](#rule-a4) [A5](#rule-a5) [A7](#rule-a7) [A8](#rule-a8) [A9](#rule-a9) [Z1](#rule-z1) [Z2](#rule-z2) [Z3](#rule-z3) [Z4](#rule-z4) [Z6](#rule-z6) [Z6a](#rule-z6a) [Z7](#rule-z7) [Z8](#rule-z8) [I1](#rule-i1) [I2](#rule-i2) [I3](#rule-i3) [I4](#rule-i4) [I5](#rule-i5) [I6](#rule-i6) [I7](#rule-i7) [I8](#rule-i8) [I9](#rule-i9) [I10](#rule-i10) [I11](#rule-i11) |

### G 系列：自动与 Build 门槛

每次 evidence run 的自动硬门槛与独立的 Build 门槛。

#### <a id="rule-g1"></a>G1 · hard-gate

- 阶段：structure · 主题：global
- 触发：每个 evidence run。
- 检查：候选必须由 `SankeyEngine.render()` 生成 d3/SVG。
- 证据：通过须记录 renderer 身份。

#### <a id="rule-g2"></a>G2 · hard-gate

- 阶段：structure · 主题：global
- 触发：每个 evidence run。
- 检查：在 harness 固定截图尺寸前读取原始 SVG；reference 尺寸来自 `meta.referenceImage`。
- 通过：`viewBox` 必须按数值等于 `[0, 0, intrinsicWidth, intrinsicHeight]`。`width` 必须是相同 numeric 值或 `100%`；`height` 可缺省，存在时必须是相同 numeric 值，`auto`/百分比等其他 token 失败。随后才可固定截图尺寸。
- 证据：原始值全部写入 audit。

#### <a id="rule-g3"></a>G3 · hard-gate

- 阶段：text · 主题：global
- 触发：每个 evidence run。
- 检查：字体总门槛要求 G3a、G3b、G3c 同时通过。
- 证据：汇总保留三项结果。

#### <a id="rule-g3a"></a>G3a · hard-gate

- 阶段：text · 主题：global
- 检查：本地 Montserrat、Noto Sans、Roboto font manifest 全部加载成功。
- 通过：Latin 字体不含 CJK glyph 时允许系统 CJK fallback。

#### <a id="rule-g3b"></a>G3b · hard-gate

- 阶段：text · 主题：global
- 检查：产品文本使用 View 字体角色：Noto Sans，数值说明/Tooltip 可用 Roboto。
- 通过：computed family 的 fallback 位置不得含 Montserrat。

#### <a id="rule-g3c"></a>G3c · hard-gate

- 阶段：text · 主题：global
- 检查：仅最近祖先带 `data-typography-role="brand"` 的真实 Logo、wordmark、商标锁定或品牌插图可不受 G3b 限制。
- 通过：不能给普通 label 或整层 annotation 标 brand。

#### <a id="rule-g4"></a>G4 · hard-gate

- 阶段：structure · 主题：global
- 检查：`#chart` 内不得出现 `img`、canvas、foreignObject、picture、video、iframe、object 或 embed。
- 通过：DOM audit 数量须为 0。

#### <a id="rule-g5"></a>G5 · hard-gate

- 阶段：structure · 主题：global
- 检查：参与截图的元素不得用 CSS `background-image` 作为像素补丁。
- 通过：computed-style audit 须为 0。

#### <a id="rule-g6"></a>G6 · hard-gate

- 阶段：structure · 主题：global、raster
- 触发：未启用 runtime raster 时。
- 通过：`#chart > svg image` 数量必须为 0。

#### <a id="rule-g7"></a>G7 · hard-gate

- 阶段：structure · 主题：global、raster
- 触发：启用 runtime raster 时。
- 检查：每个 SVG image 必须满足 R 系列。
- 通过：任一白名单条件失败即失败。

#### <a id="rule-g8"></a>G8 · hard-gate

- 阶段：text · 主题：label、node
- 检查：同轴 label 与自身 node 不得纵向交叠。
- 通过：目标净空 5px，渲染 bbox 净空 `<4px` 必须失败。

#### <a id="rule-g9"></a>G9 · hard-gate

- 阶段：text · 主题：label、node
- 触发：`visible-short-node` 与上下同轴 label。
- 通过：水平中心差必须 `<=4px`。
- 证据：逐 object ID、逐 locale 报告。

#### <a id="rule-g10"></a>G10 · hard-gate

- 阶段：text · 主题：label、node
- 通过：左右相邻 label 与 node 的渲染 bbox 不得横向 overlap。

#### <a id="rule-g11"></a>G11 · build-gate

- 阶段：build · 主题：global
- 触发：每个 authored digest。
- 检查：独立记录 `dataset-verification/v1` 数据/SSOT/i18n 一致性证据。
- 通过：它不属于每次 raster evidence run，finish 必须引用 fresh 结果。

#### <a id="rule-g12"></a>G12 · hard-gate

- 阶段：structure · 主题：link
- 触发：每个可见候选接口。
- 检查：自动检查 candidate-rendered ID、path endpoint、竖直 node 的水平切线、link interval containment 和 occupancy union。
- 通过：SVG 几何容差 0.5px，已确认 raster 边缘容差 1px，归一化后新增/缺失的连续 `>=2px` 空档失败。diagnostic 可用 warning/off，但任何 Build-bound evidence 必须 `mode=error`；warning/off/not-scored 均非通过。有效通过同时要求：`mode=error`，总 `status`、candidate、reference、enforcement 均为 `passed`；audited 等于 expected，`failedInterfaces`、`pendingInterfaces`、`notScoredInterfaces` 都为 0；reference/candidate 原始 raster intervals 未被覆盖，用于评分的 intervals 裁进 node bbox；`fullFaceIds` 使用经过 Matrix provenance 验证的完整端面 policy interval。
- 证据：接口自动报告保留 `mode`、`candidateStatus`、`referenceStatus`、`status` 和 `enforcementStatus` 五个独立轴。自动报告的 coverage 只来自候选已渲染接口，`referenceStatus` 只表示这些候选接口都已与 reference 成功评分，不声称发现了 reference-only 接口——后者只能由完整 Matrix 补齐。自动层通过后仍须由完整 Matrix 补齐 reference-only、candidate-only 和人工身份判断。
- feature：`visible-interface`

### B 系列：自动检查的盲点补偿

本系列补偿具名自动检查的已知盲点，或以 conditional-gate 把盲点转为机器检查；`补偿` 字段指向被补偿的自动规则。

#### <a id="rule-b1"></a>B1 · manual

- 阶段：text · 主题：label、node
- 检查：文本 stage 按语义组人工确认中心和净空。
- 补偿：[G8](#rule-g8)、[G9](#rule-g9)
- 理由：同轴检测可能漏掉手写偏左/偏右但语义属于柱正上/下的汇总 label。

#### <a id="rule-b2"></a>B2 · manual

- 阶段：text · 主题：label、node
- 证据：记录对应边缘 x 和局部 crop。
- 补偿：[G10](#rule-g10)
- 理由：横向不交叠不能证明侧置 label 与参考图距离相同。

#### <a id="rule-b3"></a>B3 · conditional-gate

- 阶段：text · 主题：label
- 触发：`centered-side-label` 触发。
- 通过：侧置 label 垂直中心差 `<=4px`；顶对齐或分组侧标不得误标该 feature。
- feature：`centered-side-label`

#### <a id="rule-b4"></a>B4 · manual

- 阶段：text · 主题：label、node
- 检查：按 object ID 人工核对 block center 与 node center。
- 补偿：[G8](#rule-g8)、[G9](#rule-g9)
- 理由：value/name/note block 放错 x 后可能逃过同轴归组。

#### <a id="rule-b5"></a>B5 · conditional-gate

- 阶段：text · 主题：annotation、label
- 触发：`annotation-near-label` 触发。
- 通过：annotation 与 label/title/period 的 bbox overlap 为 0。
- 证据：记录实际净空。
- feature：`annotation-near-label`

#### <a id="rule-b6"></a>B6 · conditional-gate

- 阶段：text · 主题：label、locale
- 触发：`text` 触发。
- 通过：每个 required locale 的 rendered text 全在画布内；overflow count 必须为 0。
- feature：`text`

#### <a id="rule-b7"></a>B7 · conditional-gate

- 阶段：structure · 主题：node
- 触发：`hidden-anchor` 触发。
- 检查：`nodePaintAudit` 证明候选 node face 不可见。
- 通过：该自动检查只验证候选，不得反向证明参考图分类正确。
- feature：`hidden-anchor`

#### <a id="rule-b8"></a>B8 · quantified-audit

- 阶段：structure · 主题：link
- 检查：用 Matrix 行和 contact sheet 完成人工 reconcile。
- 补偿：[G12](#rule-g12)
- 理由：自动接口 union 无法可靠识别同色相接、重叠和 per-link 身份。

#### <a id="rule-b9"></a>B9 · manual

- 阶段：polish-l10n · 主题：link
- 检查：紧邻 source edge 取色。
- 证据：留 crop。
- 理由：渐变规则不能判断参考图是否要求纯色 profit ribbon。

#### <a id="rule-b10"></a>B10 · quantified-audit

- 阶段：structure · 主题：link、node
- 检查：结合 authored topology、自动数据证据和人工关系清单判断。
- 补偿：[G11](#rule-g11)
- 理由：数据一致性不能证明参考图拓扑或 Hover surface 语义。

#### <a id="rule-b11"></a>B11 · manual

- 阶段：structure · 主题：link
- 检查：逐 link 检查 Tooltip anchor。
- 理由：tapered closed path 的周长中点不是 link 中心线中点。

#### <a id="rule-b12"></a>B12 · quantified-audit

- 阶段：structure · 主题：node、link
- 通过：结论来自 occupancy。
- 理由：`node.height - Σlink.width` 只提示 rounding 风险，不证明连续、间隔、重叠或越界。

#### <a id="rule-b13"></a>B13 · manual

- 阶段：text · 主题：label、node
- 检查：两侧 bbox 都须人工检查。
- 补偿：[G8](#rule-g8)
- 理由：自身 node 净空检查不会覆盖 label 与同列相邻 node。

#### <a id="rule-b14"></a>B14 · manual

- 阶段：text · 主题：label
- 触发：`specified-label-weight` 触发。
- 检查：逐 heading 的 computed `font-weight` 量化和绑定来源证据的强制人工决定。
- 通过：不能拿 title、金额或 wordmark 字重替代。
- feature：`specified-label-weight`

#### <a id="rule-b15"></a>B15 · conditional-gate

- 阶段：structure · 主题：node
- 触发：`visible-node-face`/`hidden-anchor` 触发。
- 检查：逐 ID、逐 locale 的 `nodePaintAudit`。
- 通过：bbox、link、hitbox 或接口存在都不能替代真实柱面 paint。
- feature：`visible-node-face`

#### <a id="rule-b16"></a>B16 · conditional-gate

- 阶段：build · 主题：annotation、node
- 触发：node object 映射 `annotations.*` 时。
- 检查：必须声明 `semantic-annotation` 并携带原生 source 分类证据。
- 通过：缺 feature、crop、bbox、Source digest、inspection method、classification claim 或理由均失败。
- feature：`semantic-annotation`

### R 系列：runtime raster

默认禁止源图像素、crop、位图覆盖和锁定背景进入候选。只有命中完整白名单才可使用。

#### <a id="rule-r1"></a>R1 · manual

- 阶段：subloop · 主题：raster、icon
- 通过：仅公司、业务线、产品线或 segment 的有语义 icon cluster 可申请；水印、署名和装饰不适用。

#### <a id="rule-r2"></a>R2 · manual

- 阶段：subloop · 主题：raster、icon
- 检查：crop 必须按 spec 提取并经模型/人工验证。
- 通过：crop 不准先重裁，不能继续生成 runtime。

#### <a id="rule-r3"></a>R3 · hard-gate

- 阶段：structure · 主题：raster
- 通过：runtime 文件必须由 spec 的 `runtimeOutputDir` 生成/同步，并位于 `data/assets/raster-annotations/<company>/`。

#### <a id="rule-r4"></a>R4 · hard-gate

- 阶段：structure · 主题：raster
- 通过：dataset 只能通过 `data.rasterAnnotations` 引用批准的 runtime 文件。

#### <a id="rule-r5"></a>R5 · hard-gate

- 阶段：structure · 主题：raster
- 通过：使用 raster 的 dataset 必须显式设置 `render.allowRasterAnnotations = true`。

#### <a id="rule-r6"></a>R6 · hard-gate

- 阶段：structure · 主题：raster
- 通过：render audit 必须报告 `rasterAllowed: true`。

#### <a id="rule-r7"></a>R7 · hard-gate

- 阶段：structure · 主题：raster
- 通过：SVG image 数量必须等于 `data.rasterAnnotations` 数量。

#### <a id="rule-r8"></a>R8 · hard-gate

- 阶段：structure · 主题：raster
- 通过：每个 href 必须是存在的 `data/assets/raster-annotations/` 本地文件；禁止 source、reference crop、外链和 data URI。

#### <a id="rule-r9"></a>R9 · hard-gate

- 阶段：structure · 主题：raster
- 通过：`icon-references/.../crops/` 永远只是 reference/conversion asset，dataset 不得以任何 raster surface 直接引用。

### L 系列：连接线、接口与 Hover

#### <a id="rule-l1"></a>L1 · manual

- 阶段：structure · 主题：link
- 触发：多入口节点。
- 检查：按实际进入 node edge 的垂直位置自上而下对照 reference。
- 证据：保存顺序和 crop。

#### <a id="rule-l2"></a>L2 · manual

- 阶段：structure · 主题：link
- 触发：多出口节点。
- 检查：按实际离开 node edge 的垂直位置自上而下对照 reference。
- 证据：保存顺序和 crop。

#### <a id="rule-l3"></a>L3 · manual

- 阶段：structure · 主题：link
- 检查：`sourceOrder` 只控制源端堆叠，`targetOrder` 只控制目标端堆叠。
- 通过：修复后分别核对两端。

#### <a id="rule-l4"></a>L4 · manual

- 阶段：structure · 主题：link、node
- 触发：同一 node 混合主经营流与税、利息、投资等辅助流时。
- 检查：source/target 两端分别核对层级和身份。

#### <a id="rule-l5"></a>L5 · quantified-audit

- 阶段：structure · 主题：link
- 触发：显式 curve、socket、`y0/y1` 或端点宽度。
- 检查：须分别记录两端 endpoint、interval、node bbox 和 source/target width。
- 通过：只看中心线或源码数字不算通过。

#### <a id="rule-l6"></a>L6 · quantified-audit

- 阶段：structure · 主题：link、node
- 检查：先比较所有 link 的 occupancy union 与 node edge。
- 通过：candidate SVG 必须 containment，reference raster 晕边只保留为 raw observation，不能反写几何。

#### <a id="rule-l7"></a>L7 · manual

- 阶段：structure · 主题：link
- 触发：自定义 curve。
- 通过：水平推进且不折返：`source.x1 <= c1x <= c2x <= target.x0`；任何非单调形态须有 reference crop 证明。

#### <a id="rule-l8"></a>L8 · manual

- 阶段：structure · 主题：link
- 检查：source、target、socket 和绕行关系必须逐条从 reference 追踪。
- 通过：不得按财务算式或邻近 node 推断拓扑。

#### <a id="rule-l9"></a>L9 · manual

- 阶段：structure · 主题：link、node
- 触发：用户指出接口错误时。
- 检查：先核对 node bbox。
- 通过：bbox 错先联动 node/label/endpoints，bbox 对再修 union、内部顺序和中心。

#### <a id="rule-l10"></a>L10 · quantified-audit

- 阶段：structure · 主题：link
- 触发：短距离多入口接口。
- 检查：按 reference 复现连续 union 或真实间隔。
- 通过：弯曲短 link 还须无台阶、直角和非预期重叠。

#### <a id="rule-l11"></a>L11 · quantified-audit

- 阶段：structure · 主题：link、node
- 检查：每个端面先判 binary occupancy union，再拆 per-link。
- 通过：`Σlink.width` 和颜色都不是分类器。连续端面不得留缝，间隔端面保留真实 gap，双端宽度独立建模。`fullFaceIds` 仅在 Matrix 有 provenance 时要求 union 贴满 node top/bottom。
- feature：`visible-interface`

#### <a id="rule-l12"></a>L12 · manual

- 阶段：polish-l10n · 主题：link
- 触发：从深色 hub/source 出发的 profit link。
- 检查：在 source edge 外取色。
- 通过：reference 为纯色时用显式 `linkTint`，不能改 node tint 掩盖。

#### <a id="rule-l13"></a>L13 · manual

- 阶段：structure · 主题：node、link、label
- 触发：node 上下移动时。
- 检查：所属 label、相关 `y0/y1`、curve 和 stacked intervals 作为一个系统联动并复查。

#### <a id="rule-l14"></a>L14 · manual

- 阶段：structure · 主题：link、node
- 检查：Hover Share 的唯一公式和分组语义由 `CONTEXT.md` 拥有。
- 通过：node、label、link 和 endpoint guide surface 必须一致，Adapter 只提供 authored amount/topology，禁止百分比 override。

#### <a id="rule-l15"></a>L15 · hard-gate

- 阶段：structure · 主题：link
- 触发：link 连接竖直 node edge 时。
- 通过：必须水平进入/离开；endpoint 和上下边界偏差均 `<=0.5px`。不允许 prose-only 斜切豁免。
- 理由：如未来需要例外，先增加 typed policy 和测试。

#### <a id="rule-l16"></a>L16 · manual

- 阶段：structure · 主题：link
- 检查：Tooltip Tag 锚到 link 中心曲线 `t=0.5`，不能用闭合 tapered path 周长中点。
- 通过：多 Tag 各自沿关系中心线，边缘 clamp 不得遮挡关键 guide/node/label。

### T 系列：label-node 与文本

#### <a id="rule-t1"></a>T1 · quantified-audit

- 阶段：text · 主题：label、node
- 通过：上/下同轴 label 与 node、同组相邻 block 的目标净空都是 `5px ±1px`。
- 证据：记录实际 edge gap。

#### <a id="rule-t2"></a>T2 · quantified-audit

- 阶段：text · 主题：label、node
- 检查：语义在 node 上/下的 label 以 node centerX 对齐。
- 通过：短柱中心差 `<=4px`，并保留 5px 目标净空。

#### <a id="rule-t3"></a>T3 · manual

- 阶段：text · 主题：label、node
- 触发：参考图特殊间距。
- 通过：可记录实测 edge gap 和理由，但候选净空仍不得低于 G8 的 4px hard floor。
- 证据：人工决定须引用对应 reference/candidate crop。

#### <a id="rule-t4"></a>T4 · quantified-audit

- 阶段：text · 主题：label、node
- 通过：侧置 label 与 node 不横向 overlap，目标边界净空至少 5px。
- 证据：记录 bbox gap。

#### <a id="rule-t5"></a>T5 · manual

- 阶段：text · 主题：label、node
- 检查：同一 node 的 label/node 先做确定性 bbox audit，再看完整语义组视觉。
- 通过：模型复核不能覆盖小于 4px 或中心超差的量化失败。

#### <a id="rule-t6"></a>T6 · quantified-audit

- 阶段：text · 主题：label
- 检查：侧置 label 对齐 reference 的实际左/右缘 x。
- 通过：同列同类 label 共用该视觉边缘，不默认贴 node。

#### <a id="rule-t7"></a>T7 · conditional-gate

- 阶段：text · 主题：label
- 触发：`centered-side-label` 触发。
- 通过：渲染中心与 node 中心差 `<=4px`；使用实际 bbox/ascent 反推 top。
- feature：`centered-side-label`

#### <a id="rule-t8"></a>T8 · manual

- 阶段：text · 主题：label、node
- 检查：同 node 的侧置 name 与同轴 value/note 仍按一个语义组检查。
- 通过：即使垂直交叠也不能漏掉同轴关系。

#### <a id="rule-t9"></a>T9 · manual

- 阶段：text · 主题：label、node
- 触发：短 source 的 value/name/note block。
- 检查：逐一核对 centerX 和归属。
- 通过：不能依赖自动同轴识别。

#### <a id="rule-t10"></a>T10 · manual

- 阶段：text · 主题：node、label
- 触发：interest、other income、tax、investment 等短辅助节点。
- 检查：以自身 label/bbox 为参照。
- 通过：不能被主流带牵走。

#### <a id="rule-t11"></a>T11 · manual

- 阶段：text · 主题：label
- 检查：名称、数值、备注、margin、Y/Y 和紧邻图标先归成完整语义 label，再拆 blocks/lines 或划 region。

#### <a id="rule-t12"></a>T12 · manual

- 阶段：structure · 主题：node
- 触发：`hidden-anchor` 是例外处置。
- 检查：reviewer 必须结合原生 crop、referenceBBox、像素扫描记录和明确确认值，独立确认参考图确无柱面。
- 通过：任何歧义、1–3px 连续有色直线或仅凭候选透明通过都失败并回退为 `visible-node-face`。
- 补偿：[B7](#rule-b7)
- feature：`hidden-anchor`

#### <a id="rule-t12a"></a>T12a · manual

- 阶段：structure · 主题：node、annotation
- 触发：隐藏锚点若只有 annotation 是可见入口。
- 通过：该组须有 `sankey-interactive-annotation`、`data-node` 和透明 hitbox；声明 endpoints 时按真实 semantic relationship 参与 Hover。

#### <a id="rule-t13"></a>T13 · conditional-gate

- 阶段：structure · 主题：node
- 触发：`visible-node-face`（含常见的 1–3px 短柱）。
- 通过：必须保留 reference bbox，并有区别背景的有效 fill 或可见 stroke；透明、none、零 opacity、隐藏、仅 hitbox/link 均失败。
- feature：`visible-node-face`

#### <a id="rule-t14"></a>T14 · manual

- 阶段：structure · 主题：node
- 触发：`visible-short-node` 由 reference 中“短而仍可见”的语义事实触发，没有通用高度阈值。
- 检查：逐对象记录 reference/candidate 直线段端点、宽高和 deltas，区分曲线与文字像素。
- 通过：通过要求 reviewer 确认覆盖同一可见直线段；任何接受的非零差异写明理由。调整 node width/x 后同步重算 label 中心。
- feature：`visible-short-node`

#### <a id="rule-t15"></a>T15 · manual

- 阶段：text · 主题：label、node
- 触发：label 位于同列两 node 之间时。
- 检查：同时检查它与自身 node、相邻 node 的净空。
- 通过：任一 overlap 失败，所有 locale 都复查。

#### <a id="rule-t16"></a>T16 · manual

- 阶段：text · 主题：label
- 触发：`specified-label-weight`。
- 检查：对每个语义 heading 比较 computed weight 与来源规格并提交人工决定。
- 通过：title、金额、备注和 wordmark 分开。缺来源时不得声明该 feature，也不得臆造统一字重。
- feature：`specified-label-weight`

#### <a id="rule-t17"></a>T17 · manual

- 阶段：text · 主题：label、annotation
- 检查：先按参考图判断文字是否属于 Sankey node：名称/金额/备注与 node 或其 micro-flow 属于同一语义对象时默认使用 `layout.labels`。
- 通过：只有真实 callout/guide 必须作为 annotation 时才声明 `semantic-annotation`，并逐 locale Hover 该文字本身、确认高亮和 Tooltip。
- feature：`semantic-annotation`

#### <a id="rule-t18"></a>T18 · conditional-gate

- 阶段：text · 主题：label
- 触发：`measured-label-position` 触发。
- 检查：每次 evidence run 将每个固定布局 label 组的渲染 union bbox 与 preflight 持久化的原生 `referenceBBox` 自动比对。
- 通过：源语言 locale 的中心差（X 与 Y 各自）`<=6px`，超差失败。非源语言 locale 不做中心 gate（本地化验收由 Z2/Z5/Z6 拥有），但每个已测量组必须渲染出可测的 label，缺组即失败。
- 证据：逐 locale 的 `labelPositionAudit`。
- feature：`measured-label-position`
- 理由：6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量协议余量。
- 来源：commit 41c2f20

#### <a id="rule-t19"></a>T19 · build-gate

- 阶段：build · 主题：global
- 触发：prepare-review 时。
- 检查：校验所有声明 Source 测量的 featureEvidence（`measured-label-position`、`hidden-anchor`、`semantic-annotation`、`ambiguous-label-slot`）：locator 必须指向本 Build Source，evidence digest、reference-image artifact digest 与 Build Source digest 三者一致，referenceBBox 不越 Source 边界。
- 通过：相邻期间或其他数据集的坐标携带外来 digest，直接拒绝——过期测量不允许进入任何后续 gate。
- feature：`measured-label-position`
- 来源：commit 41c2f20

#### <a id="rule-t20"></a>T20 · manual

- 阶段：text · 主题：label
- 触发：`ambiguous-label-slot` 触发：preflight 发现 label 槽位或归属在参考图上存在多解（如“柱下方”与“左侧槽位”皆可读通）时必须声明该 feature。
- 检查：在 text stage 冻结前提交绑定 reference crop 的操作者槽位裁决（manual decision）。
- 通过：不允许按单一解释先渲染、等用户复审时指出再改判。
- feature：`ambiguous-label-slot`
- 来源：commit 41c2f20

#### <a id="rule-t21"></a>T21 · quantified-audit

- 阶段：structure · 主题：node
- 触发：`visible-node-face`（含 `visible-short-node`）触发。
- 检查：`nodePaintAudit` 逐 node 记录渲染柱面高度 `faceHeight`，把 `faceVisible` 但高度低于共享最小可见高度 `MIN_VISIBLE_FACE_PX`（3px，含 0.5px raster 容差）的 face 汇入 `belowVisibilityFloorNodeIds`。
- 通过：真实参考短柱确需低于该 floor 时，按 T14 以原生 crop、实测端点和绑定决定作为例外记录。
- 证据：逐 locale 的 `nodePaintAudit`。
- 补偿：[B15](#rule-b15)
- feature：`visible-node-face`
- 理由：补上 B15/`faceVisible` 只验 alpha>0、bbox 非零而不验渲染高度的盲点：消除“数值极小 → 亚像素柱、肉眼不可见”，并给所有 short 节点统一最小柱高、杜绝逐次在 1px/11px 间猜测（同一批曾出现 Visa=6px、SAP/Comcast=3px 的各自取值）。
- 来源：commit 72644e5

### A 系列：annotation 容器

#### <a id="rule-a1"></a>A1 · manual

- 阶段：text · 主题：annotation
- 检查：识别 KPI/card/capsule/badge/callout 的真实容器外框。
- 证据：记录 bbox。

#### <a id="rule-a2"></a>A2 · manual

- 阶段：text · 主题：annotation
- 检查：计算容器内全部语义文字和图标的 union bbox。
- 通过：装饰或透明 hitbox 不计视觉 union。

#### <a id="rule-a3"></a>A3 · manual

- 阶段：text · 主题：annotation
- 通过：居中意图要求内容 union 中心与容器中心一致，或有 reference 支持的稳定偏移。

#### <a id="rule-a4"></a>A4 · manual

- 阶段：text · 主题：annotation
- 检查：左/右/顶对齐意图按 reference 检查对应边距和组内行距。

#### <a id="rule-a5"></a>A5 · manual

- 阶段：text · 主题：annotation
- 通过：内容不得贴边，尤其底边、右边和圆角区域。
- 证据：保存四边净空。

#### <a id="rule-a6"></a>A6 · conditional-gate

- 阶段：text · 主题：annotation、label
- 触发：`annotation-near-label` 触发。
- 通过：annotation 与邻近 label、title、period 的 overlap 为 0，目标净空至少 5px；按实际渲染 bbox 判断。
- feature：`annotation-near-label`

#### <a id="rule-a7"></a>A7 · manual

- 阶段：text · 主题：annotation、locale
- 触发：非默认语言替换 annotation 文本后。
- 通过：内容 union 仍须在容器内且不越画布。

#### <a id="rule-a8"></a>A8 · manual

- 阶段：text · 主题：annotation
- 检查：优先由容器中心、内容高度、行高和 padding 推导 baseline。
- 证据：手写 baseline 时保存容器/union bbox、中心差和边距。

#### <a id="rule-a9"></a>A9 · manual

- 阶段：text · 主题：annotation
- 检查：负空间流带 annotation 是连接两端的完整容器：量左右锚点、上下极值、文字 union 和经过的 node face。
- 通过：不能缩成浮动卡片或只移动文字。

#### <a id="rule-a10"></a>A10 · conditional-gate

- 阶段：text · 主题：annotation、node
- 触发：`semantic-annotation`。
- 通过：实际 group 必须带 `sankey-interactive-annotation` 和可解析的 `data-node`，含文本且由 renderer 提供透明 hitbox；同名 node-like annotation text 未绑定该 group 或 node 不存在即失败。
- feature：`semantic-annotation`

### Z 系列：本地化固定布局

#### <a id="rule-z1"></a>Z1 · manual

- 阶段：polish-l10n · 主题：locale
- 触发：新增或实质修改 locale 时。
- 通过：每个 required locale 都要独立 evidence run 和人工布局决定；默认语言证据不能代替。

#### <a id="rule-z2"></a>Z2 · manual

- 阶段：polish-l10n · 主题：locale
- 检查：本地化 Diff 可辅助定位。
- 通过：通过依据是纯净性、bbox、标点/混排、越界和重叠，不追求与英文像素相同。

#### <a id="rule-z3"></a>Z3 · manual

- 阶段：polish-l10n · 主题：locale
- 检查：检查所有 locale-sensitive surface：labels、annotations、cards、title/period、图标旁文字和底部标记。

#### <a id="rule-z4"></a>Z4 · manual

- 阶段：polish-l10n · 主题：locale
- 检查：明确核对 `R&D`、`SG&A`、`G&A`、`D&A`、含 `&` 的组合、金额后缀和中英品牌。
- 通过：不得半翻译或拆坏缩写。

#### <a id="rule-z5"></a>Z5 · conditional-gate

- 阶段：polish-l10n · 主题：locale、label
- 触发：`text` 触发。
- 通过：每个 rendered text bbox 在画布内且不压 node；overflow 为 0，必要时使用 locale-specific wrap/x/top/font-size。
- feature：`text`

#### <a id="rule-z6"></a>Z6 · manual

- 阶段：polish-l10n · 主题：locale
- 检查：修复顺序：先 locale overlay 文案/布局，再拆行、局部位置、局部字号或合适 `textLength`。
- 通过：不改共享几何。

#### <a id="rule-z6a"></a>Z6a · manual

- 阶段：polish-l10n · 主题：locale、raster、annotation
- 触发：locale 文字扩展碰到 runtime raster 时。
- 检查：只在该 locale 的完整 raster 列表移动 annotation x/y。
- 通过：保持 href、尺寸和 node/link geometry，主体净空至少 5px。

#### <a id="rule-z7"></a>Z7 · manual

- 阶段：polish-l10n · 主题：locale
- 通过：locale overlay 不能改变财务值、links、node geometry、source image 或验证语义。

#### <a id="rule-z8"></a>Z8 · manual

- 阶段：polish-l10n · 主题：locale、label
- 通过：品牌名、ticker、单位缩写或正式产品英文名可保留，但必须在允许的 identity/preserved-text 配置中记录。

### I 系列：图标 crop/vector 子循环

#### <a id="rule-i1"></a>I1 · manual

- 阶段：subloop · 主题：icon
- 检查：公司、业务、产品和 segment 图标可进入子循环。
- 通过：目标是可复用 vector 或 R 系列 runtime copy，reference crop 不是成品。

#### <a id="rule-i2"></a>I2 · manual

- 阶段：subloop · 主题：icon
- 通过：crop spec 必须覆盖 inventory 中全部有语义 cluster，除非任务明确缩小范围。

#### <a id="rule-i3"></a>I3 · manual

- 阶段：subloop · 主题：icon
- 通过：reference crops、validation sheet 和 crop report 放在 `icon-references` 规定目录；详细路径由资产文档拥有。

#### <a id="rule-i4"></a>I4 · manual

- 阶段：subloop · 主题：icon
- 通过：crop 只有在主体完整、视觉居中且无无关文字/线条/水印/邻图时通过；否则先重裁。

#### <a id="rule-i5"></a>I5 · manual

- 阶段：subloop · 主题：icon
- 触发：主体铺满取景框时。
- 检查：显式指定 background removal 颜色。
- 通过：`transparentPixelRatio` 接近 0 时不得假设自动去背成功。

#### <a id="rule-i6"></a>I6 · manual

- 阶段：subloop · 主题：icon
- 证据：每个 crop 的人工/模型验收结论持久化在 validation record。

#### <a id="rule-i7"></a>I7 · manual

- 阶段：subloop · 主题：icon
- 检查：vector 候选必须是纯 SVG，不含 image/位图/截图。
- 通过：与 aligned reference 同 viewport 比较结构、负形、留白和中心。

#### <a id="rule-i8"></a>I8 · manual

- 阶段：subloop · 主题：icon
- 通过：可复用 vector 放共享 icon registry，一次性 logo 放 dataset-owned vector。
- 证据：验证证据留在 validation 资产区。

#### <a id="rule-i9"></a>I9 · manual

- 阶段：subloop · 主题：icon
- 触发：materially similar 图标。
- 通过：优先复用已有 vector，只调整 viewBox、transform、size、placement、stroke 或 fill。

#### <a id="rule-i10"></a>I10 · manual

- 阶段：subloop · 主题：icon
- 通过：子循环结束要求 crop 已验证、候选纯 vector 或批准 runtime copy、主体结构/负形/留白/中心稳定且资产落点正确。

#### <a id="rule-i11"></a>I11 · manual

- 阶段：subloop · 主题：icon
- 检查：公司 Logo 只有一个 owner。
- 通过：使用 `meta.logoSvg` 时不得在 annotations 再画同一实例；自定义 annotation 定位则移除前者。

<!-- fidelity-rules:generated:end -->

## 4. 三层 sweep 状态机

`sweep stage` 是人工进度分层，不是 VerificationPlan 的字段，也不改变 checkResult 的
scope。下面每节列出的对象/检查就是固定归属；跨 stage 的 global/final checks 在结束时汇总。

本文档拥有 canonical stage focus 枚举，机器镜像是
`scripts/lib/fidelity-stages.mjs`：`structure-sweep`、`text-sweep`、
`polish-l10n-sweep`，外加收尾复验的 `closeout-refresh`。`record:fidelity
--build` 只接受这四个值；自由 focus 字符串仅限只读诊断与 legacy 兼容存档。

### Structure stage

一次检查并修完：输出纯净性、原始画布、node/column 几何、短柱可见性、link 拓扑、
双端宽度、socket、curve 和所有可见候选接口；Plan 要求时再核完 Matrix 的完整并集。

必须产出候选/参考/Diff、自动接口报告、contact sheet、`nodePaintAudit` 和逐对象结论；
Plan 要求时再产出完整 Matrix，纯文本/本地化变化可复用未受影响的既有 Matrix。
接口或短柱仍有 failed/pending/not-scored 时不能冻结结构。

### Text stage

一次检查并修完：label 语义归组、与自身/相邻 node 的 bbox 关系、侧置/同轴对齐、
字重层级，以及 annotation 容器、标题、期间和受保护文本之间的关系。

必须读取量化 bbox audit；自动结果不能替代错误归组、参考距离和语义归属的人工判断。

### Polish and localization stage

一次检查并修完：颜色、透明度、图标、细微曲线和每个 required locale 的固定布局。
每种语言分别产生 evidence run；默认语言通过不能证明其他语言通过。

### 冻结与重开

一个 stage 只要求本节列出的检查，以及由这些对象触发的 feature/impact checks 全有结果；
后续 stage 的检查不需要提前完成。当前 stage 无开放 region 且证据 digest 完整时才能冻结。
以下任一情况会重开：相关对象/渲染器改变、自动检查回退、用户再次指出问题、或后层
发现更早层错误。

后层发现早层错误时，立即停止当前 human iteration，正式重开早层 stage；
修复、重新 evidence run、重新冻结后才回到后层。不能在后层“顺手修、顺手验”。

### 停止可选润色

当所有 required checks、locales、Matrix、feedback 和 attention 已关闭后，若预计新的
**可选润色**只使全图 similarity 提升 `<0.0005`，停止继续微调并记录可接受残留。
该阈值不能跳过 hard gate、required check、人工决定或用户反馈复查。
“预计”必须来自最近两次同方向 evidence run，或一次局部试改的指标；没有可比数据时
不得使用该阈值停止。可比 run 必须具有相同 dataset、locale、reference digest、画布、
renderer 与 metric 配置；局部试改也必须重渲染整图并换算为全图 similarity delta。

## 5. 证据、反馈与结束条件

### 自动证据必须包含什么

每个 raster evidence run 至少保留：候选图、reference、Diff、全图指标、DOM 分区指标、
Plan 选中的 render-scoped gate 结果、interface audit、contact sheet，以及当前 locale 的 `nodePaintAudit`。
G11 的 consistency evidence 单独记录，不塞进每次 raster manifest。

全图指标至少有 `mae`、`similarity`、`maxChannelDiff`、`samePixelRatio`、
`changedPixelRatio` 和 `diffBoundingBox`。局部事实优先使用 object/region/interface 指标；
整条 link 的平均 Diff 不能证明端面正确。

`nodePaintAudit` 每行记录：semantic node ID、bbox、computed fill/stroke、fill/stroke alpha、
stroke width、opacity、display、visibility、背景色、`faceVisible` 与 `faceHeight`（含是否低于
`MIN_VISIBLE_FACE_PX` 最小可见高度）。判定必须基于 node face 元素自身；link、guide、
annotation、hitbox 或非空 bbox 都不能替代。required locales 必须覆盖相同语义 ID 集合。

程序判定 `faceVisible` 的最低条件是：元素未被 display/visibility 隐藏、bbox 非零，且
有效 fill alpha 大于 0 并非背景同色，或有效 stroke alpha 大于 0、stroke width 大于 0
且并非背景同色。这不是“肉眼足够清楚”的对比度保证；structure stage 的人工 visual
closure 负责所有 `visible-node-face` 的辨识度，极短柱的参考长度另由 T14 决定。渲染柱面低于
`MIN_VISIBLE_FACE_PX` 最小可见高度的可见节点由 T21 量化标记，用于消除亚像素不可见柱、
统一 short 节点最小柱高，把此前逐 Build 各自取值收敛到一个共享 floor。

### required checks 必须逐项消费

`FidelityResult` v2 保存 Plan 派生的完整 `checkResults`：

- 自动检查引用匹配 Build、authored digest、Plan digest、object ID 和 locale 的 evidence。
- 纯人工检查由 review JSON 的 `manualCheckDecisions` 提交，并引用 evidence digest。
- 每个 global required check 恰有一条结果；`required-locales` check 每个 required
  locale 恰有一条结果；该行的 `objectIds` 必须完整等于 Plan scope，不为每个 object
  再造一行。一项 feature check 可引用多条互补规则，共用这一条结果和证据。
  缺失、重复、错误 scope 或 caller 自造 `notApplicable` 都是 blocker。
- `fidelity-run/2 evidence-ready` 只表示自动证据可供 review，不等于 accepted。

Plan 要求完整 Matrix 时，接口类结果还必须引用经过验证的 `interface-matrix/v1`。
summary-only Matrix、漏行、warning/off/not-scored/failed 自动报告、缺 contact sheet、
无 provenance 的 full-face、或自动/人工覆盖集合不一致，都不能接受。

### 人工 evidence 与 attention

人工决定以完整语义 region 为单位，引用 reference/candidate/Diff 和局部指标。
开放问题使用 `attention: open` 加 red-box reference digest；无开放问题使用
`attention: closed` 加 closure note。红框以 reference 为底，不用候选或 Diff 当底图。

stage 冻结、重开和用户反馈都必须绑定 evidence digest。手写 Task Markdown、口头
“看起来通过”和全图 similarity 不能代替结构化决定。

### 反馈如何防复发

每条用户反馈先判断：

- `rule-missing`：确实没有 owner，才新增规则 ID。
- `execution-gap`：已有规则未逐对象执行；优先补 hard gate、量化 audit 或 required check。
- `ambiguous-rule`：规则不能独立判定；改成有触发条件、阈值和证据的口径。

FeedbackRecord 保存稳定 ID、rule IDs、归因、before/after evidence、remedy、状态和
supersession。相同规则在第二个 Build 再出现 execution gap 时，必须记录自动化升级
disposition；不能用再次加长文档代替。升级 disposition 只有三种合法值：`hard-gate`、
`quantified-audit`，或带具体理由的 `not-suitable`。`required-checklist` 不编译任何
机器检查，只在同一规则的**首次** execution gap 上合法；复发后仍以 `required-checklist`
关闭会被 Feedback Ledger 判为未升级并阻断 close-out。已有自动化落地时，用 supersession
记录把旧 disposition 升级为真实的自动化类别。

### 可以结束的唯一条件

保真工作结束必须同时满足：

- 当前 authored/Plan digest 的 render-scoped gates 通过，独立 G11 证据 fresh；候选纯净。
- 每个 required check、object 和 locale 都有有效 `checkResults`；人工决定齐全。
- 所有映射到 node 的对象（包括 short node）完成可见/隐藏二选一；各 locale 的 paint 结果与 inventory 一致。
- Plan 要求时，完整 Matrix 无 `failed`、`manual-pending`、`not-scored`，且 audit/contact sheet/digests 齐全。
- structure、text、polish/localization stages 均冻结且未被重开。
- 用户 region、attention、feedback 和 recurrence upgrade 全部关闭。
- 剩余差异只有有证据的可接受残留、无语义跳过或明确超范围。

满足这些条件才允许 human review 接受；Build 后续的 CLOSED、baseline、seal、
closeout 和最终汇报流程由架构文档与动态工作流拥有。任何机器全绿但缺人工决定的
状态只能报告为 `review-pending`，不能写 accepted 或 converged。

## 6. 规则如何落地与升级

新增或升级一条规则只有三个落点：

1. **catalog** —— 在 `scripts/lib/fidelity-rules-catalog.mjs` 增加或修改结构化
   记录（含 stage、topics、trigger/check/pass/evidence、features、compensates、
   rationale、origin），然后运行 `pnpm update:fidelity-rules-doc` 重新生成本文
   §3；`pnpm verify:architecture` 会拦截过期的生成区。
2. **实现** —— `hard-gate` / `conditional-gate` / `quantified-audit` 必须在
   render harness、interface fidelity 或 Plan 编译中有真实执行点；纯 `manual`
   规则无此步。脚本引用新规则 ID 时同步把 ID 加进 `FIDELITY_CODE_RULE_IDS`；
   feature 触发的规则同步更新 `FEATURE_REQUIRED_CHECKS`
   （`scripts/lib/verification-plan.mjs`）。
3. **测试** —— 更新契约计数与代表性断言
   （`tests/fidelity-rule-contract.test.mjs`），并为新的执行点补回归测试。

约束：已有 ID 永不重编号、不改义；废弃用 `status: superseded` 加
`supersededBy`，不得删除记录或复用 ID；系列字母只是命名空间——新规则挑最贴近
的字母取下一个自由号，检索靠 §3 的 stage/topics 索引。盲点补偿类规则的执行
方式升级时，必须同时更新 catalog 执行方式、feature 编译与回归测试，不能只把
说明写长。
