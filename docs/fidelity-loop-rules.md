# 保真循环规则

本文档拥有 d3-Sankey 视觉保真的机器门槛、审阅者清单与反馈协议。处理流程（命令、顺序、
审阅候选、审阅、seal 与结束条件）由 [asset-workflow.md](asset-workflow.md) 拥有；读图与
建模规则由 [dynamic-dataset-workflow.md](dynamic-dataset-workflow.md) 拥有；字段由
`data/schema.md`、资产由 `data/assets/README.md`、Build/证据/发布语义由
`docs/architecture/verification-publication.md` 拥有。本文不复制它们。

规则语义的 SSOT 是 `scripts/lib/fidelity-rules-catalog.mjs`；§2 是它的生成视图
（`pnpm update:fidelity-rules-doc`），也是规则条目的唯一呈现面。
`scripts/lib/fidelity-rule-contract.mjs` 从 catalog 派生执行方式注册表；
`pnpm verify:architecture` 校验生成区新鲜，并校验脚本引用的规则 ID 与
`FIDELITY_CODE_RULE_IDS` 一致。

## 1. 判定原则

判定优先级：先保证语义、拓扑、接口和文本归属正确；再修人眼显著的几何与布局；最后才是
颜色、图标、抗锯齿等视觉残差。全图 Diff 是证据，不是凌驾于局部语义事实之上的裁判。
差异分四类：

- 必须修复：接口/拓扑错误、节点或短柱消失、文本错属/交叠/越界、关键注释错误；
- 需要优化：明显的几何、间距、字号、颜色或图标偏差；
- 可接受残留：字形、抗锯齿、亚像素、轻微手绘曲线差异；
- 无语义跳过：水印、发布者品牌、URL、社交徽标、署名、纯装饰残片。

目录只登记有真实执行点的规则：每次渲染的自动门槛、Build 门槛，以及由渲染属性或作者
可选输入触发的审计。机器判断之外的内容只属于 §3 的审阅者清单与操作员的整体接受。执行方式：

- `hard-gate`：每次 evidence run 自动执行，失败即阻断本次证据；
- `build-gate`：prepare 或数据一致性阶段的 Build-bound 检查，不随每次截图重复；
- `conditional-gate`：渲染 DOM 带有对应属性（或作者声明了可选输入）时执行，失败即阻断本次证据。

`CB-###` 表示登记簿案例，不是规则 ID。

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
| [B6](#rule-b6) | `hard-gate` | 文本在画布内 |
| [B15](#rule-b15) | `hard-gate` | node 柱面可见且不低于 3px |
| [T22](#rule-t22) | `build-gate` | 带值 Other 是数据柱 |
| [T6](#rule-t6) | `conditional-gate` | 侧置 label 列对齐 |
| [T7](#rule-t7) | `conditional-gate` | 侧置 label 垂直居中 |
| [A6](#rule-a6) | `conditional-gate` | annotation 净空 |
| [A10](#rule-a10) | `conditional-gate` | 交互 annotation 绑定 node |
| [I12](#rule-i12) | `conditional-gate` | 图标簇与 paired 目标对齐 |
| [T18](#rule-t18) | `conditional-gate` | label 组位置（可选） |

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

#### <a id="rule-b6"></a>B6 · hard-gate · 文本在画布内

- 触发：每个 evidence run，每个 required locale。
- 通过：每个 required locale 的 rendered text bbox 全在画布内，overflow 为 0；必要时使用 locale-specific wrap/x/top/font-size，不改共享几何。
- 证据：逐 locale 的 `textLayoutAudit`。

#### <a id="rule-b15"></a>B15 · hard-gate · node 柱面可见且不低于 3px

- 触发：每个 evidence run；Build-bound run 另以 `source-objects/v1` 的 value node 与 `shortNodes` 为期望。
- 检查：逐 ID、逐 locale 的 `nodePaintAudit` 基于 node face 元素自身判定有效 fill 或可见 stroke 与渲染 `faceHeight`；共享最小可见高度 `MIN_VISIBLE_FACE_PX` 为 3px，另有 0.5px raster 容差。
- 通过：Build-bound run 中每个 value 对象映射的 node 都渲染出区别于背景的柱面，且每个渲染出的 node 都有柱面、高度加容差不低于 3px；透明、none、零 opacity、隐藏，或只有 bbox、link、hitbox、接口都失败。真实 Source 柱面本身低于 3px 时，只接受 source-facts 顶层 `shortNodes` 中写明 node 与理由的声明，该 node 仍须绘制高度大于 0 的柱面。无 Build 的诊断只检查已绘制柱面的 3px 下限。
- 证据：逐 locale 的 `nodePaintAudit`。

#### <a id="rule-t22"></a>T22 · build-gate · 带值 Other 是数据柱

- 触发：prepare 校验 `source-objects/v1` 时，对象的 id、label 或 literal 命中 Other/All Other 语义。
- 检查：带值 Other 是数据指标而非标注：label 或 literal 含 K/M/B/T 金额而 class 不是 `value` 立即失败（`SOURCE_OBJECTS_OTHER_CLASS_INVALID`）；Other 对象不得记为 `residual`。收入构成中的 Other 必须绑定 node，不能用 nonNodeMetric 路由省略柱面（`SOURCE_OBJECTS_OTHER_REVENUE_NODE_REQUIRED`）。映射到 node 的 value 对象由 B15 在渲染时确认柱面已绘制。
- 通过：把带值 Other 记成标签、流带、资产或残留一律失败；真实柱面低于 3px 时按 B15 的 `shortNodes` 声明处理，而不是隐藏。

#### <a id="rule-t6"></a>T6 · conditional-gate · 侧置 label 列对齐

- 触发：侧置 label 声明 `semanticRole: 'aligned-side-label-column'`（渲染为 `data-label-role`）时；同侧且所属 node 边缘相距不超过 24px 的声明 label 构成一列。
- 检查：侧置 label 对齐 reference 的实际左/右缘 x，不默认贴 node。
- 通过：每列至少两个 label，渲染 label 边缘的最大差值 `<=2px`。
- 证据：逐 locale 的 `labelLayoutAudit.sideLabelColumns`。

#### <a id="rule-t7"></a>T7 · conditional-gate · 侧置 label 垂直居中

- 触发：侧置 label 声明 `semanticRole: 'centered-side-label'`，或渲染结果中同一 node 同时出现独立金额同轴块与侧置名称块时。
- 通过：侧置 label 渲染中心与 node 中心的垂直差 `<=4px`，使用实际 bbox/ascent 反推 top；顶对齐或分组侧标不得声明该 role。
- 证据：逐 locale 的 `labelLayoutAudit.inferredCenteredSideLabels`。

#### <a id="rule-a6"></a>A6 · conditional-gate · annotation 净空

- 触发：渲染结果含带 `data-annotation-clearance` 的 annotation 图形时（作者在 `annotationsSvg` 中声明，或 renderer 为 paired raster 图标添加）。
- 检查：该 View 的全部 annotation 文本与 annotation 图形，同 label、title、period 的渲染 bbox 比较。卡片背景声明 `data-annotation-clearance`，卡片内文字在同一 annotation 层的背景之后绘制，避免后绘制的背景遮住 label 层文字。
- 通过：overlap 为 0。
- 证据：逐 locale 的 `annotationLayoutAudit`。

#### <a id="rule-a10"></a>A10 · conditional-gate · 交互 annotation 绑定 node

- 触发：渲染结果含 `.sankey-interactive-annotation` group 时，期望来自 DOM 而非作者声明。
- 通过：每个 group 都带可解析到 node 或 non-node metric 的 `data-node`，含文本且由 renderer 提供透明 hitbox；带组内或紧邻前置引导线（未闭合的无填充 path、line 或 polyline）的 annotation non-node metric 必须声明可解析的 `data-link-numerator` 与 `data-link-denominator`，用于 Hover 百分比；同名 node-like annotation text 未绑定到该 group 即失败；同一指标在 annotation 与 label 层绘制的同文文本不得交叠，路由指标跨层同文重复即失败。
- 证据：逐 locale 的 `semanticAnnotationAudit`。

#### <a id="rule-i12"></a>I12 · conditional-gate · 图标簇与 paired 目标对齐

- 触发：图标簇声明 `data-annotation-paired-node` 时（raster annotation 的 `pairedNode`）。
- 检查：默认对齐 node face，用户要求与侧置 label 对齐时再声明 `data-annotation-paired-target="label"` 与 side。render audit 在外层 SVG 坐标系比较图标 union bbox 与目标的纵向中心。
- 通过：每个 required locale 的 paired 图标簇均有对应目标，且 centerY 差 `<=4px`。
- 证据：`annotationPairingAudit` 的逐簇 bbox、target kind/bbox、center delta 与 violation。

#### <a id="rule-t18"></a>T18 · conditional-gate · label 组位置（可选）

- 触发：仅当 source-facts 中某个 `label` 或 `value` 对象声明原生像素 `referenceBBox` 与 `labelGroup`（`layout.labels` 的键）时，对该组运行；未声明的组不做位置审计。
- 检查：每次 evidence run 将该组渲染 union bbox 与声明的 `referenceBBox` 比对；用户要求改动布局时，作者更新或删除该 bbox。
- 通过：源语言 locale 的中心差（X 与 Y 各自）`<=6px`。非源语言 locale 不做中心 gate，但每个声明的组都必须渲染出可测 label，缺组即失败。
- 证据：逐 locale 的 `labelPositionAudit`。
- 理由：6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量余量。

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
2. **执行点**：在 render harness、interface fidelity 或 source objects 校验中实现检查，
   不新增作者证据；脚本引用 ID 时同步 `FIDELITY_CODE_RULE_IDS`。
3. **回归测试**：为执行点补测试，并更新 `tests/fidelity-rule-contract.test.mjs` 的计数。
