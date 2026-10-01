# 保真循环规则

本文档拥有 d3-Sankey 视觉保真的机器门槛、审阅者清单与反馈协议。处理流程（命令、顺序、
审阅候选、审阅、seal 与结束条件）由 [asset-workflow.md](asset-workflow.md) 拥有；读图与
建模规则由 [dynamic-dataset-workflow.md](dynamic-dataset-workflow.md) 拥有；字段由
`data/schema.md`、资产由 `data/assets/README.md`、Build/证据/发布语义由
`docs/architecture/verification-publication.md` 拥有。本文不复制它们。

规则语义的 SSOT 是 `scripts/lib/fidelity-rules-catalog.mjs`；§2 是它的生成视图
（`pnpm update:fidelity-rules-doc`），也是规则条目的唯一呈现面。
`scripts/lib/fidelity-rule-contract.mjs` 从 catalog 派生执行方式与 feature 注册表；
`pnpm verify:architecture` 校验生成区新鲜、手写区不另定义规则、引用可解析。

## 1. 判定原则

判定优先级：先保证语义、拓扑、接口和文本归属正确；再修人眼显著的几何与布局；最后才是
颜色、图标、抗锯齿等视觉残差。全图 Diff 是证据，不是凌驾于局部语义事实之上的裁判。
差异分四类：

- 必须修复：接口/拓扑错误、节点或短柱消失、文本错属/交叠/越界、关键注释错误；
- 需要优化：明显的几何、间距、字号、颜色或图标偏差；
- 可接受残留：字形、抗锯齿、亚像素、轻微手绘曲线差异；
- 无语义跳过：水印、发布者品牌、URL、社交徽标、署名、纯装饰残片。

目录只登记有真实执行点的规则：每次渲染的自动门槛、Build 门槛，以及仍由 Plan 编译或
close-out 代码引用的 feature 规则。执行方式：

- `hard-gate`：每次 evidence run 自动执行，失败即阻断本次证据；
- `build-gate`：独立的 Build-bound 检查，不随每次截图重复；
- `conditional-gate`：Plan 含对应检查时由渲染或组装证据强制；
- `quantified-audit`：Plan 含对应检查时给出量化事实并在违例时失败，语义判断属人工审阅；
- `manual`：Plan 编译出的人工检查，由操作员对整份候选的接受记录承载。

`REG-001` 表示审阅区域、`FB-001` 表示 Build 内反馈记录、`CB-###` 表示登记簿案例；
三者都不是规则 ID，也不互相复用。

## 2. 规则目录

<!-- fidelity-rules:generated:begin -->

_本目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs`
生成；不要手改，改规则请编辑 catalog 后重新生成。_

| 规则 | 执行方式 | 名称 |
| --- | --- | --- |
| [G1](#rule-g1) | `hard-gate` | 渲染器身份 |
| [G2](#rule-g2) | `hard-gate` | 原始 SVG 画布 |
| [G3](#rule-g3) | `hard-gate` | 字体角色 |
| [G3d](#rule-g3d) | `hard-gate` | 字形比例 |
| [G4](#rule-g4) | `hard-gate` | 白名单外无位图 |
| [G8](#rule-g8) | `hard-gate` | label 与自身 node 的间距 |
| [G11](#rule-g11) | `build-gate` | 数据一致性 |
| [G12](#rule-g12) | `hard-gate` | 可见接口 |
| [B6](#rule-b6) | `conditional-gate` | 文本在画布内 |
| [B15](#rule-b15) | `conditional-gate` | node 柱面可见且不低于 3px |
| [T22](#rule-t22) | `build-gate` | 带值 Other 是数据柱 |
| [T6](#rule-t6) | `quantified-audit` | 侧置 label 列对齐 |
| [T7](#rule-t7) | `conditional-gate` | 侧置 label 垂直居中 |
| [A6](#rule-a6) | `conditional-gate` | annotation 净空 |
| [A10](#rule-a10) | `conditional-gate` | 交互 annotation 绑定 node |
| [I12](#rule-i12) | `quantified-audit` | 图标簇与 paired 目标对齐 |
| [T18](#rule-t18) | `conditional-gate` | label 组位置 |
| [T19](#rule-t19) | `build-gate` | 测量来源绑定 |
| [T23](#rule-t23) | `build-gate` | non-node 金额的 zero-paint 槽位 |
| [T14](#rule-t14) | `manual` | 可见短柱端点 |
| [T20](#rule-t20) | `manual` | label 槽位歧义裁决 |
| [B14](#rule-b14) | `manual` | 指定字重的量化 |
| [T16](#rule-t16) | `manual` | 指定字重的来源 |
| [T17](#rule-t17) | `manual` | annotation 分类 |
| [B16](#rule-b16) | `conditional-gate` | annotation 来源证据 |

#### <a id="rule-g1"></a>G1 · hard-gate · 渲染器身份

- 触发：每个 evidence run。
- 检查：候选必须由 `SankeyEngine.render()` 生成 d3/SVG。
- 证据：audit 记录 renderer 身份。

#### <a id="rule-g2"></a>G2 · hard-gate · 原始 SVG 画布

- 触发：每个 evidence run。
- 检查：在 harness 固定截图尺寸前读取原始 SVG；reference 尺寸来自 `meta.referenceImage`。
- 通过：`viewBox` 按数值等于 `[0, 0, intrinsicWidth, intrinsicHeight]`；`width` 是相同数值或 `100%`；`height` 可缺省，存在时必须是相同数值，`auto`/百分比等其他 token 失败。随后才可固定截图尺寸。
- 证据：原始值全部写入 audit。

#### <a id="rule-g3"></a>G3 · hard-gate · 字体角色

- 触发：每个 evidence run。
- 检查：本地 Montserrat、Noto Sans、Roboto font manifest 全部加载成功；产品文本使用 View 字体角色（Noto Sans，数值说明/Tooltip 可用 Roboto），computed family 的 fallback 位置不得含 Montserrat。只有最近祖先带 `data-typography-role="brand"` 的真实 Logo、wordmark、商标锁定或品牌插图不受字体角色限制。
- 通过：以上全部成立且 G3d 通过。Latin 字体不含 CJK glyph 时允许系统 CJK fallback；普通 label 或整层 annotation 不得标 brand。
- 证据：`typographyAudit` 汇总字体角色与字形比例结果。

#### <a id="rule-g3d"></a>G3d · hard-gate · 字形比例

- 触发：每个 evidence run、`verify:d3` 与 Build seal 中的非品牌产品文本（名称、金额、备注、标题，各 locale）。
- 检查：使用已加载字体的自然字宽，测量 textLength/spacingAndGlyphs 与祖先变换组合后的字形比例；排除整体等比缩放与旋转。
- 通过：组合变换的最大/最小主轴比不超过 1.25；不得为贴合 bbox 把文字横向压窄，优先使用自然字形、合适字号和换行。
- 证据：`typographyAudit` 逐 text/tspan/textPath 保存 glyphScaleX、glyphAspectRatio，越界阻断 G3。未绑定 Build 的目录回归、Pages 与 standalone 检查只以 audit 模式记录字形失败，不替代 Build 的硬门。

#### <a id="rule-g4"></a>G4 · hard-gate · 白名单外无位图

- 触发：每个 evidence run。
- 检查：`#chart` 内不得出现 `img`、canvas、foreignObject、picture、video、iframe、object 或 embed；参与截图的元素不得用 CSS `background-image` 作像素补丁；未启用 runtime raster 时 `#chart > svg image` 数量为 0。
- 通过：启用 runtime raster 时，dataset 显式设置 `render.allowRasterAnnotations = true`（audit 报告 `rasterAllowed: true`），SVG image 与 `data.rasterAnnotations` 一一对应且数量相等，每个 href 都是存在的 `data/assets/raster-annotations/` 本地文件；Source、reference crop（`icon-references/.../crops/`）、外链和 data URI 一律失败。
- 证据：DOM 与 computed-style purity audit 的计数和 href 清单。

#### <a id="rule-g8"></a>G8 · hard-gate · label 与自身 node 的间距

- 触发：每个 evidence run，按渲染 bbox。
- 检查：同轴 label 与自身 node 的纵向净空；短 node（宽或高 `<=12px`）上/下同轴 label 的水平中心差；侧置 label 与自身 node 的横向 overlap。
- 通过：纵向净空 `<4px` 失败（目标 5px）；短 node 中心差 `<=4px`；侧置 label 不得与自身 node 横向 overlap。
- 证据：逐 locale 的 `labelLayoutAudit`。

#### <a id="rule-g11"></a>G11 · build-gate · 数据一致性

- 触发：每个 authored digest。
- 检查：独立记录 `dataset-verification/v1` 数据/SSOT/i18n 一致性证据。
- 通过：不属于每次 raster evidence run；finish 必须引用 fresh 结果。

#### <a id="rule-g12"></a>G12 · hard-gate · 可见接口

- 触发：每个可见候选接口。
- 检查：自动检查 candidate-rendered ID、path endpoint、link interval containment 与每个端面的 occupancy union：先判 binary union，再拆 per-link interval；`Σlink.width` 和颜色都不是分类器，双端宽度独立建模。连接竖直 node edge 的 link 必须水平进入/离开。
- 通过：SVG 几何容差 0.5px（endpoint 与上下边界均 `<=0.5px`），已确认 raster 边缘容差 1px，归一化后新增/缺失的连续 `>=2px` 空档失败；连续端面不得留缝，间隔端面保留真实 gap。diagnostic 可用 warning/off，但 Build-bound evidence 必须 `mode=error`，且总 `status`、candidate、reference、enforcement 均为 `passed`，audited 等于 expected，failed/pending/not-scored 接口都为 0；`fullFaceIds` 只在有 provenance 时要求 union 贴满 node top/bottom。
- 证据：`interfaceAudit` 分别保留 `mode`、`candidateStatus`、`referenceStatus`、`status` 与 `enforcementStatus`；coverage 只来自候选已渲染接口，不声称发现了 reference-only 接口。

#### <a id="rule-b6"></a>B6 · conditional-gate · 文本在画布内

- 触发：Plan 含 `text` feature 或 `display-text-only` 影响时。
- 通过：每个 required locale 的 rendered text bbox 全在画布内，overflow 为 0；必要时使用 locale-specific wrap/x/top/font-size，不改共享几何。
- 证据：逐 locale 的 `textLayoutAudit`。

#### <a id="rule-b15"></a>B15 · conditional-gate · node 柱面可见且不低于 3px

- 触发：每个 `nodes.*` render mapping 自动触发，不依赖作者声明。
- 检查：逐 ID、逐 locale 的 `nodePaintAudit` 基于 node face 元素自身判定有效 fill 或可见 stroke 与渲染 `faceHeight`；共享最小可见高度 `MIN_VISIBLE_FACE_PX` 为 3px，另有 0.5px raster 容差。
- 通过：每个映射自 Source 对象的 node 都绘制出区别于背景的柱面，且高度加容差不低于 3px；透明、none、零 opacity、隐藏，或只有 bbox、link、hitbox、接口都失败。真实 Source 柱面本身低于 3px 时，只接受 source-facts 中绑定唯一 node、写明理由的显式短柱声明。
- 证据：逐 locale 的 `nodePaintAudit` 与 Plan 绑定的 `node-face-policy/v2`。

#### <a id="rule-t22"></a>T22 · build-gate · 带值 Other 是数据柱

- 触发：Source Coverage 对象命中 Other/All Other 语义且显示数值时。
- 检查：Source Coverage 组装时强制带值 Other 是数据指标而非标注：sourceLabel 含 K/M/B/T 金额而 sourceClass 记为非 value-bearing 类立即失败（`SOURCE_COVERAGE_OTHER_CLASS_INVALID`）；映射为 node 时必须有唯一 observed face。
- 通过：把带值 Other 记成不可见节点或标注一律失败；真实柱面低于 3px 时按 B15 的短柱声明处理，而不是隐藏。

#### <a id="rule-t6"></a>T6 · quantified-audit · 侧置 label 列对齐

- 触发：Plan 含 `aligned-side-label-column`：同一视觉列中两个及以上同类侧置 label。
- 检查：侧置 label 对齐 reference 的实际左/右缘 x，不默认贴 node。
- 通过：同列同类 label 位于同一 node 列和同一侧，渲染边缘的最大差值 `<=2px`。
- 证据：逐 locale 的 `labelLayoutAudit.horizontalSideLabels` 边缘位置与跨组 spread。

#### <a id="rule-t7"></a>T7 · conditional-gate · 侧置 label 垂直居中

- 触发：Plan 含 `centered-side-label`，或渲染结果中同一 node 同时出现独立金额同轴块与侧置名称块时。
- 通过：侧置 label 渲染中心与 node 中心的垂直差 `<=4px`，使用实际 bbox/ascent 反推 top；顶对齐或分组侧标不得声明该 feature。
- 证据：逐 locale 的 `labelLayoutAudit`。

#### <a id="rule-a6"></a>A6 · conditional-gate · annotation 净空

- 触发：Plan 含 `annotation-near-label`。
- 检查：annotation 文本与带 `data-annotation-clearance` 的 annotation 图形，同 label、title、period 的渲染 bbox 比较。
- 通过：overlap 为 0。
- 证据：逐 locale 的 `annotationLayoutAudit`。

#### <a id="rule-a10"></a>A10 · conditional-gate · 交互 annotation 绑定 node

- 触发：Plan 要求某个 node 对象以 annotation 呈现时。
- 通过：实际 group 必须带 `sankey-interactive-annotation` 和可解析的 `data-node`，含文本且由 renderer 提供透明 hitbox；同名 node-like annotation text 未绑定该 group 或 node 不存在即失败。
- 证据：逐 locale 的 `semanticAnnotationAudit`。

#### <a id="rule-i12"></a>I12 · quantified-audit · 图标簇与 paired 目标对齐

- 触发：业务或产品图标簇与 paired node / 侧置名称构成同一横向语义组时。
- 检查：图标簇声明 `data-annotation-paired-node`；默认对齐 node face，用户要求与侧置 label 对齐时再声明 `data-annotation-paired-target="label"` 与 side。render audit 在外层 SVG 坐标系比较图标 union bbox 与目标的纵向中心。
- 通过：每个 required locale 的 paired 图标簇均有对应目标，且 centerY 差 `<=4px`。
- 证据：`annotationPairingAudit` 的逐簇 bbox、target kind/bbox、center delta 与 violation。

#### <a id="rule-t18"></a>T18 · conditional-gate · label 组位置

- 触发：对声明了原生 reference bbox 的固定布局 label 组运行。
- 检查：每次 evidence run 将该组渲染 union bbox 与持久化的原生 `referenceBBox` 比对；只有明确的用户布局纠正才可另以 `approvedTargetBBox`、`approvedTargetAuthority: user-directed-layout-correction` 与理由声明待验目标，并保留原 `referenceBBox`。
- 通过：源语言 locale 的中心差（X 与 Y 各自）`<=6px`。非源语言 locale 不做中心 gate，但每个已测量组都必须渲染出可测 label，缺组即失败。
- 证据：逐 locale 的 `labelPositionAudit`。
- 理由：6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量余量。

#### <a id="rule-t19"></a>T19 · build-gate · 测量来源绑定

- 触发：Plan 编译与 prepare-review 时。
- 检查：income-statement Plan 要求每个映射 `layout.labels.*`（icon 位除外）的 render 对象声明 `measured-label-position`（`MEASURED_LABEL_POSITION_REQUIRED`）。prepare-review 校验所有 Source 测量的 featureEvidence（`measured-label-position`、`semantic-annotation`、`ambiguous-label-slot`）：带 fragment 的 locator 指向本 Build Source（processing 或 processed 路径），evidence digest、reference-image artifact digest 与 Build Source digest 一致，`referenceBBox` 不越 Source 边界。
- 通过：相邻期间或其他数据集的坐标携带外来 digest，直接拒绝。

#### <a id="rule-t23"></a>T23 · build-gate · non-node 金额的 zero-paint 槽位

- 触发：Income Statement `financial-value` 映射到 `nonNodeMetrics.*` 时。
- 检查：必须声明 Source-bound `zero-paint-node-slot`；prepare-review 对同列 peer x/width 的原生 `referenceBBox` 做像素扫描，任一行出现横跨至少 75% 槽宽的有色连续段即判定存在 node face。
- 通过：只有扫描确认为 zero-paint 的对象可保留 non-node 表达；1px/2px 连续横条同样失败，须改建模为 node。

#### <a id="rule-t14"></a>T14 · manual · 可见短柱端点

- 触发：声明 `visible-short-node`：reference 中短而仍可见的 node 柱面。
- 检查：逐对象核对 reference/candidate 直线段端点、宽高与 deltas，区分曲线与文字像素。
- 通过：审阅确认覆盖同一可见直线段；任何接受的非零差异写明理由。

#### <a id="rule-t20"></a>T20 · manual · label 槽位歧义裁决

- 触发：声明 `ambiguous-label-slot`：label 槽位或归属在参考图上有多种读法时。
- 检查：渲染前提交绑定 reference crop 的操作者槽位裁决。

#### <a id="rule-b14"></a>B14 · manual · 指定字重的量化

- 触发：声明 `specified-label-weight` 时。
- 检查：逐 heading 量化 computed `font-weight`，并提交绑定来源证据的人工决定。
- 通过：不能拿 title、金额或 wordmark 字重替代。

#### <a id="rule-t16"></a>T16 · manual · 指定字重的来源

- 触发：声明 `specified-label-weight` 时。
- 检查：对每个语义 heading 比较 computed weight 与来源规格。
- 通过：title、金额、备注和 wordmark 分开；缺来源时不得声明该 feature，也不得臆造统一字重。

#### <a id="rule-t17"></a>T17 · manual · annotation 分类

- 检查：名称/金额/备注与 node 或其 micro-flow 属于同一语义对象时默认使用 `layout.labels`；只有真实 callout/guide 必须作为 annotation 时才声明 `semantic-annotation`。
- 通过：逐 locale Hover 该文字本身，确认高亮和 Tooltip。

#### <a id="rule-b16"></a>B16 · conditional-gate · annotation 来源证据

- 触发：node object 映射 `annotations.*` 时。
- 检查：必须声明 `semantic-annotation` 并携带原生 Source 分类证据。
- 通过：缺 feature、crop、bbox、Source digest、inspection method、classification claim 或理由均失败。

<!-- fidelity-rules:generated:end -->

## 3. 审阅者清单

机器门槛之外，审阅候选时每个 required locale 单独看下面几点：

- 多 link 端面：入口与出口自上而下的顺序和原图一致，同色流带逐条核对身份。
- 连接线：两端宽度、socket 与曲线走向和原图一致，水平推进，无台阶、折返或意外重叠。
- 侧置 label：与柱的居中、间距和对齐边缘符合原图；label 与相邻 node 也不压叠。
- label 语义归组：名称、金额、备注、margin、Y/Y 与紧邻图标作为一组，不拆散、不错属。
- 注释容器：KPI、card、callout 的内容在容器内对齐、不贴边；负空间流带注释连接完整两端。
- 位图与图标：位置和尺寸贴合原图、不遮挡文字；同一个公司 Logo 只画一次。
- 颜色：利润流带与柱面在源端附近取色，原图为纯色时不用渐变。
- 本地化：品牌名、ticker、`R&D`、`SG&A` 等缩写和金额后缀完整保留；本地化不改财务值、
  link 或 node 几何。
- Hover：node、label、link 与引导面显示一致的份额 Tooltip，Tag 锚在 link 中心线上。
- 其余差异按 §1 分类后决定修复或作为可接受残留接受。

## 4. 反馈协议

1. 用户反馈先在当前数据集修复；同批其他数据集存在同一缺陷时一并修复。
2. 若确定性的机器门槛本可发现该缺陷，就在 catalog 新增或扩展门槛并补测试，同时在
   [`fidelity-feedback-casebook.md`](fidelity-feedback-casebook.md) 追加一行。
3. 否则不新增规则、不登记案例。机器证据全绿而缺人工接受时只能报告 `review-pending`。

`record:workflow feedback` 的用法与 Build 结束条件由 [asset-workflow.md](asset-workflow.md) 拥有。

## 5. 规则如何落地

1. **catalog**：在 `scripts/lib/fidelity-rules-catalog.mjs` 增改记录，运行
   `pnpm update:fidelity-rules-doc` 重新生成 §2。ID 不重编号、不改义；删除的 ID 不再复用。
2. **执行点**：在 render harness、interface fidelity、Source Coverage 或 Plan 编译中实现检查；
   脚本引用 ID 时同步 `FIDELITY_CODE_RULE_IDS`，feature 触发的规则同步
   `FEATURE_REQUIRED_CHECKS`（`scripts/lib/verification-plan.mjs`）。
3. **回归测试**：为执行点补测试，并更新 `tests/fidelity-rule-contract.test.mjs` 的计数。
