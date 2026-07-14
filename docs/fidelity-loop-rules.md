# 保真循环规则

本文档只负责 d3-Sankey 的视觉保真规则、人工检查方法和结束条件。
字段格式、Build 生命周期、命令顺序和资产目录分别由下列文档负责；本文不再复制：

- 工作流与命令：`docs/dynamic-dataset-workflow.md`
- Build、证据与发布语义：`docs/architecture/verification-publication.md`
- dataset / SSOT 字段：`data/schema.md`
- 图标与 raster 目录：`data/assets/README.md`

规则 ID 必须稳定。本文中的 canonical 表唯一拥有 ID、触发条件和通过语义；紧随表格的
协议段落只展开共同数据形状，不创建第二条规则。领域公式可由明确链接的上游文档拥有，
例如 L14 引用 `CONTEXT.md`，但其他段落和文档不得重写该公式。
机器目录 `scripts/lib/fidelity-rule-contract.mjs` 记录 ID、执行方式、feature 映射和
alias，`pnpm verify:architecture` 检查目录、本文与实现是否一致。
文档长度只是可读性指标，不设可用压行规避的行数 gate。

## 1. 契约、术语与判定原则

### 一条规则怎样写

canonical 表统一使用三列：

| 列 | 含义 |
| --- | --- |
| `规则` | 稳定 ID；已有 ID 不重编号、不改义 |
| `执行方式` | `hard-gate`、`build-gate`、`conditional-gate`、`quantified-audit` 或 `manual` |
| `说明` | 按“何时触发 → 检查什么 → 怎样通过 → 留什么证据”描述 |

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

## 3. 自动检查与它们的盲点

### G 系列：自动与 Build 门槛

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| G1 | hard-gate | 每个 evidence run：候选必须由 `SankeyEngine.render()` 生成 d3/SVG；通过须记录 renderer 身份。 |
| G2 | hard-gate | 每个 evidence run：在 harness 固定截图尺寸前读取原始 SVG；reference 尺寸来自 `meta.referenceImage`，`viewBox` 必须按数值等于 `[0, 0, intrinsicWidth, intrinsicHeight]`。`width` 必须是相同 numeric 值或 `100%`；`height` 可缺省，存在时必须是相同 numeric 值，`auto`/百分比等其他 token 失败。随后才可固定截图尺寸，原始值全部写入 audit。 |
| G3 | hard-gate | 每个 evidence run：字体总门槛要求 G3a、G3b、G3c 同时通过；汇总保留三项结果。 |
| G3a | hard-gate | 本地 Montserrat、Noto Sans、Roboto font manifest 全部加载成功；Latin 字体不含 CJK glyph 时允许系统 CJK fallback。 |
| G3b | hard-gate | 产品文本使用 View 字体角色：Noto Sans，数值说明/Tooltip 可用 Roboto；computed family 的 fallback 位置不得含 Montserrat。 |
| G3c | hard-gate | 仅最近祖先带 `data-typography-role="brand"` 的真实 Logo、wordmark、商标锁定或品牌插图可不受 G3b 限制；不能给普通 label 或整层 annotation 标 brand。 |
| G4 | hard-gate | `#chart` 内不得出现 `img`、canvas、foreignObject、picture、video、iframe、object 或 embed；DOM audit 数量须为 0。 |
| G5 | hard-gate | 参与截图的元素不得用 CSS `background-image` 作为像素补丁；computed-style audit 须为 0。 |
| G6 | hard-gate | 未启用 runtime raster 时，`#chart > svg image` 数量必须为 0。 |
| G7 | hard-gate | 启用 runtime raster 时，每个 SVG image 必须满足 R 系列；任一白名单条件失败即失败。 |
| G8 | hard-gate | 同轴 label 与自身 node 不得纵向交叠；目标净空 5px，渲染 bbox 净空 `<4px` 必须失败。 |
| G9 | hard-gate | `visible-short-node` 与上下同轴 label 的水平中心差必须 `<=4px`；逐 object ID、逐 locale 报告。 |
| G10 | hard-gate | 左右相邻 label 与 node 的渲染 bbox 不得横向 overlap。 |
| G11 | build-gate | 每个 authored digest 独立记录 `dataset-verification/v1` 数据/SSOT/i18n 一致性证据；它不属于每次 raster evidence run，finish 必须引用 fresh 结果。 |
| G12 | hard-gate | 每个可见候选接口自动检查 candidate-rendered ID、path endpoint、竖直 node 的水平切线、link interval containment 和 occupancy union；SVG 几何容差 0.5px，已确认 raster 边缘容差 1px，归一化后新增/缺失的连续 `>=2px` 空档失败。diagnostic 可用 warning/off，但任何 Build-bound evidence 必须 `mode=error`；warning/off/not-scored 均非通过。自动层通过后仍须由完整 Matrix 补齐 reference-only、candidate-only 和人工身份判断。 |

接口自动报告保留 `mode`、`candidateStatus`、`referenceStatus`、`status` 和
`enforcementStatus` 五个独立轴。有效通过同时要求：

- `mode=error`；总 `status`、candidate、reference、enforcement 均为 `passed`；
- audited 等于 expected；`failedInterfaces`、`pendingInterfaces`、`notScoredInterfaces` 都为 0；
- reference/candidate 原始 raster intervals 未被覆盖；用于评分的 intervals 裁进 node bbox；
- `fullFaceIds` 使用经过 Matrix provenance 验证的完整端面 policy interval。

自动报告的 coverage 只来自候选已渲染接口，`referenceStatus` 只表示这些候选接口都已
与 reference 成功评分，不声称发现了 reference-only 接口；后者只能由完整 Matrix 补齐。

### B 系列：已知盲点和补救方式

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| B1 | manual | 同轴检测可能漏掉手写偏左/偏右但语义属于柱正上/下的汇总 label；文本 stage 按语义组人工确认中心和净空。 |
| B2 | manual | 横向不交叠不能证明侧置 label 与参考图距离相同；记录对应边缘 x 和局部 crop。 |
| B3 | conditional-gate | `centered-side-label` 触发侧置 label 垂直中心差 `<=4px`；顶对齐或分组侧标不得误标该 feature。 |
| B4 | manual | value/name/note block 放错 x 后可能逃过同轴归组；按 object ID 人工核对 block center 与 node center。 |
| B5 | conditional-gate | `annotation-near-label` 触发 annotation 与 label/title/period 的 bbox overlap 为 0，并记录实际净空。 |
| B6 | conditional-gate | `text` 触发每个 required locale 的 rendered text 全在画布内；overflow count 必须为 0。 |
| B7 | conditional-gate | `hidden-anchor` 触发 `nodePaintAudit` 证明候选 node face 不可见；该自动检查只验证候选，不得反向证明参考图分类正确。 |
| B8 | quantified-audit | 自动接口 union 无法可靠识别同色相接、重叠和 per-link 身份；用 Matrix 行和 contact sheet 完成人工 reconcile。 |
| B9 | manual | 渐变规则不能判断参考图是否要求纯色 profit ribbon；紧邻 source edge 取色并留 crop。 |
| B10 | quantified-audit | 数据一致性不能证明参考图拓扑或 Hover surface 语义；结合 authored topology、自动数据证据和人工关系清单判断。 |
| B11 | manual | tapered closed path 的周长中点不是 link 中心线中点；逐 link 检查 Tooltip anchor。 |
| B12 | quantified-audit | `node.height - Σlink.width` 只提示 rounding 风险，不证明连续、间隔、重叠或越界；结论来自 occupancy。 |
| B13 | manual | 自身 node 净空检查不会覆盖 label 与同列相邻 node；两侧 bbox 都须人工检查。 |
| B14 | manual | `specified-label-weight` 触发逐 heading 的 computed `font-weight` 量化和绑定来源证据的强制人工决定；不能拿 title、金额或 wordmark 字重替代。 |
| B15 | conditional-gate | `visible-node-face`/`hidden-anchor` 触发逐 ID、逐 locale 的 `nodePaintAudit`；bbox、link、hitbox 或接口存在都不能替代真实柱面 paint。 |
| B16 | conditional-gate | node object 映射 `annotations.*` 时必须声明 `semantic-annotation` 并携带原生 source 分类证据；缺 feature、crop、bbox、Source digest、inspection method、classification claim 或理由均失败。 |

盲点的执行方式改变时，必须同时更新机器目录、相关 feature 编译和回归测试；
不能只把说明写长。

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

## 5. 专项规则目录

### R 系列：runtime raster

默认禁止源图像素、crop、位图覆盖和锁定背景进入候选。只有命中完整白名单才可使用。

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| R1 | manual | 仅公司、业务线、产品线或 segment 的有语义 icon cluster 可申请；水印、署名和装饰不适用。 |
| R2 | manual | crop 必须按 spec 提取并经模型/人工验证；crop 不准先重裁，不能继续生成 runtime。 |
| R3 | hard-gate | runtime 文件必须由 spec 的 `runtimeOutputDir` 生成/同步，并位于 `data/assets/raster-annotations/<company>/`。 |
| R4 | hard-gate | dataset 只能通过 `data.rasterAnnotations` 引用批准的 runtime 文件。 |
| R5 | hard-gate | 使用 raster 的 dataset 必须显式设置 `render.allowRasterAnnotations = true`。 |
| R6 | hard-gate | render audit 必须报告 `rasterAllowed: true`。 |
| R7 | hard-gate | SVG image 数量必须等于 `data.rasterAnnotations` 数量。 |
| R8 | hard-gate | 每个 href 必须是存在的 `data/assets/raster-annotations/` 本地文件；禁止 source、reference crop、外链和 data URI。 |
| R9 | hard-gate | `icon-references/.../crops/` 永远只是 reference/conversion asset，dataset 不得以任何 raster surface 直接引用。 |

### L 系列：连接线、接口与 Hover

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| L1 | manual | 多入口节点按实际进入 node edge 的垂直位置自上而下对照 reference；保存顺序和 crop。 |
| L2 | manual | 多出口节点按实际离开 node edge 的垂直位置自上而下对照 reference；保存顺序和 crop。 |
| L3 | manual | `sourceOrder` 只控制源端堆叠，`targetOrder` 只控制目标端堆叠；修复后分别核对两端。 |
| L4 | manual | 同一 node 混合主经营流与税、利息、投资等辅助流时，source/target 两端分别核对层级和身份。 |
| L5 | quantified-audit | 显式 curve、socket、`y0/y1` 或端点宽度须分别记录两端 endpoint、interval、node bbox 和 source/target width；只看中心线或源码数字不算通过。 |
| L6 | quantified-audit | 先比较所有 link 的 occupancy union 与 node edge；candidate SVG 必须 containment，reference raster 晕边只保留为 raw observation，不能反写几何。 |
| L7 | manual | 自定义 curve 水平推进且不折返：`source.x1 <= c1x <= c2x <= target.x0`；任何非单调形态须有 reference crop 证明。 |
| L8 | manual | source、target、socket 和绕行关系必须逐条从 reference 追踪；不得按财务算式或邻近 node 推断拓扑。 |
| L9 | manual | 用户指出接口错误时先核对 node bbox；bbox 错先联动 node/label/endpoints，bbox 对再修 union、内部顺序和中心。 |
| L10 | quantified-audit | 短距离多入口接口按 reference 复现连续 union 或真实间隔；弯曲短 link 还须无台阶、直角和非预期重叠。 |
| L11 | quantified-audit | 每个端面先判 binary occupancy union，再拆 per-link；`Σlink.width` 和颜色都不是分类器。连续端面不得留缝，间隔端面保留真实 gap，双端宽度独立建模。`fullFaceIds` 仅在 Matrix 有 provenance 时要求 union 贴满 node top/bottom。 |
| L12 | manual | 从深色 hub/source 出发的 profit link 在 source edge 外取色；reference 为纯色时用显式 `linkTint`，不能改 node tint 掩盖。 |
| L13 | manual | node 上下移动时，所属 label、相关 `y0/y1`、curve 和 stacked intervals 作为一个系统联动并复查。 |
| L14 | manual | Hover Share 的唯一公式和分组语义由 `CONTEXT.md` 拥有；node、label、link 和 endpoint guide surface 必须一致，Adapter 只提供 authored amount/topology，禁止百分比 override。 |
| L15 | hard-gate | link 连接竖直 node edge 时必须水平进入/离开；endpoint 和上下边界偏差均 `<=0.5px`。不允许 prose-only 斜切豁免；如未来需要例外，先增加 typed policy 和测试。 |
| L16 | manual | Tooltip Tag 锚到 link 中心曲线 `t=0.5`，不能用闭合 tapered path 周长中点；多 Tag 各自沿关系中心线，边缘 clamp 不得遮挡关键 guide/node/label。 |

### T 系列：label-node 与文本

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| T1 | quantified-audit | 上/下同轴 label 与 node、同组相邻 block 的目标净空都是 `5px ±1px`；记录实际 edge gap。 |
| T2 | quantified-audit | 语义在 node 上/下的 label 以 node centerX 对齐；短柱中心差 `<=4px`，并保留 5px 目标净空。 |
| T3 | manual | 参考图特殊间距可记录实测 edge gap 和理由，但候选净空仍不得低于 G8 的 4px hard floor；人工决定须引用对应 reference/candidate crop。 |
| T4 | quantified-audit | 侧置 label 与 node 不横向 overlap，目标边界净空至少 5px；记录 bbox gap。 |
| T5 | manual | 同一 node 的 label/node 先做确定性 bbox audit，再看完整语义组视觉；模型复核不能覆盖小于 4px 或中心超差的量化失败。 |
| T6 | quantified-audit | 侧置 label 对齐 reference 的实际左/右缘 x；同列同类 label 共用该视觉边缘，不默认贴 node。 |
| T7 | conditional-gate | `centered-side-label` 的渲染中心与 node 中心差 `<=4px`；使用实际 bbox/ascent 反推 top。 |
| T8 | manual | 同 node 的侧置 name 与同轴 value/note 仍按一个语义组检查；即使垂直交叠也不能漏掉同轴关系。 |
| T9 | manual | 短 source 的 value/name/note block 逐一核对 centerX 和归属，不能依赖自动同轴识别。 |
| T10 | manual | interest、other income、tax、investment 等短辅助节点以自身 label/bbox 为参照，不能被主流带牵走。 |
| T11 | manual | 名称、数值、备注、margin、Y/Y 和紧邻图标先归成完整语义 label，再拆 blocks/lines 或划 region。 |
| T12 | manual | `hidden-anchor` 是例外处置：reviewer 必须结合原生 crop、referenceBBox、像素扫描记录和明确确认值，独立确认参考图确无柱面；任何歧义、1–3px 连续有色直线或仅凭候选透明通过都失败并回退为 `visible-node-face`。 |
| T12a | manual | 隐藏锚点若只有 annotation 是可见入口，该组须有 `sankey-interactive-annotation`、`data-node` 和透明 hitbox；声明 endpoints 时按真实 semantic relationship 参与 Hover。 |
| T13 | conditional-gate | `visible-node-face`（含常见的 1–3px 短柱）必须保留 reference bbox，并有区别背景的有效 fill 或可见 stroke；透明、none、零 opacity、隐藏、仅 hitbox/link 均失败。 |
| T14 | manual | `visible-short-node` 由 reference 中“短而仍可见”的语义事实触发，没有通用高度阈值；逐对象记录 reference/candidate 直线段端点、宽高和 deltas，区分曲线与文字像素。通过要求 reviewer 确认覆盖同一可见直线段；任何接受的非零差异写明理由。调整 node width/x 后同步重算 label 中心。 |
| T15 | manual | label 位于同列两 node 之间时，同时检查它与自身 node、相邻 node 的净空；任一 overlap 失败，所有 locale 都复查。 |
| T16 | manual | `specified-label-weight` 对每个语义 heading 比较 computed weight 与来源规格并提交人工决定；title、金额、备注和 wordmark 分开。缺来源时不得声明该 feature，也不得臆造统一字重。 |
| T17 | manual | 先按参考图判断文字是否属于 Sankey node：名称/金额/备注与 node 或其 micro-flow 属于同一语义对象时默认使用 `layout.labels`；只有真实 callout/guide 必须作为 annotation 时才声明 `semantic-annotation`，并逐 locale Hover 该文字本身、确认高亮和 Tooltip。 |
| T18 | conditional-gate | `measured-label-position` 触发：每次 evidence run 将每个固定布局 label 组的渲染 union bbox 与 preflight 持久化的原生 `referenceBBox` 自动比对。源语言 locale 的中心差（X 与 Y 各自）`<=6px`，超差失败；6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量协议余量。非源语言 locale 不做中心 gate（本地化验收由 Z2/Z5/Z6 拥有），但每个已测量组必须渲染出可测的 label，缺组即失败。证据为逐 locale 的 `labelPositionAudit`。 |
| T19 | build-gate | prepare-review 时校验所有声明 Source 测量的 featureEvidence（`measured-label-position`、`hidden-anchor`、`semantic-annotation`、`ambiguous-label-slot`）：locator 必须指向本 Build Source，evidence digest、reference-image artifact digest 与 Build Source digest 三者一致，referenceBBox 不越 Source 边界。相邻期间或其他数据集的坐标携带外来 digest，直接拒绝——过期测量不允许进入任何后续 gate。 |
| T20 | manual | `ambiguous-label-slot` 触发：preflight 发现 label 槽位或归属在参考图上存在多解（如"柱下方"与"左侧槽位"皆可读通）时必须声明该 feature，并在 text stage 冻结前提交绑定 reference crop 的操作者槽位裁决（manual decision）。不允许按单一解释先渲染、等用户复审时指出再改判。 |
| T21 | quantified-audit | `visible-node-face`（含 `visible-short-node`）触发：`nodePaintAudit` 逐 node 记录渲染柱面高度 `faceHeight`，把 `faceVisible` 但高度低于共享最小可见高度 `MIN_VISIBLE_FACE_PX`（3px，含 0.5px raster 容差）的 face 汇入 `belowVisibilityFloorNodeIds`。补上 B15/`faceVisible` 只验 alpha>0、bbox 非零而不验渲染高度的盲点：消除"数值极小 → 亚像素柱、肉眼不可见"，并给所有 short 节点统一最小柱高、杜绝逐次在 1px/11px 间猜测（同一批曾出现 Visa=6px、SAP/Comcast=3px 的各自取值）。真实参考短柱确需低于该 floor 时，按 T14 以原生 crop、实测端点和绑定决定作为例外记录；证据为逐 locale 的 `nodePaintAudit`。 |

### A 系列：annotation 容器

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| A1 | manual | 识别 KPI/card/capsule/badge/callout 的真实容器外框并记录 bbox。 |
| A2 | manual | 计算容器内全部语义文字和图标的 union bbox；装饰或透明 hitbox 不计视觉 union。 |
| A3 | manual | 居中意图要求内容 union 中心与容器中心一致，或有 reference 支持的稳定偏移。 |
| A4 | manual | 左/右/顶对齐意图按 reference 检查对应边距和组内行距。 |
| A5 | manual | 内容不得贴边，尤其底边、右边和圆角区域；保存四边净空。 |
| A6 | conditional-gate | `annotation-near-label` 触发 annotation 与邻近 label、title、period 的 overlap 为 0，目标净空至少 5px；按实际渲染 bbox 判断。 |
| A7 | manual | 非默认语言替换 annotation 文本后，内容 union 仍须在容器内且不越画布。 |
| A8 | manual | 优先由容器中心、内容高度、行高和 padding 推导 baseline；手写 baseline 时保存容器/union bbox、中心差和边距。 |
| A9 | manual | 负空间流带 annotation 是连接两端的完整容器：量左右锚点、上下极值、文字 union 和经过的 node face；不能缩成浮动卡片或只移动文字。 |
| A10 | conditional-gate | `semantic-annotation` 的实际 group 必须带 `sankey-interactive-annotation` 和可解析的 `data-node`，含文本且由 renderer 提供透明 hitbox；同名 node-like annotation text 未绑定该 group 或 node 不存在即失败。 |

### Z 系列：本地化固定布局

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| Z1 | manual | 新增或实质修改 locale 时，每个 required locale 都要独立 evidence run 和人工布局决定；默认语言证据不能代替。 |
| Z2 | manual | 本地化 Diff 可辅助定位，但通过依据是纯净性、bbox、标点/混排、越界和重叠，不追求与英文像素相同。 |
| Z3 | manual | 检查所有 locale-sensitive surface：labels、annotations、cards、title/period、图标旁文字和底部标记。 |
| Z4 | manual | 明确核对 `R&D`、`SG&A`、`G&A`、`D&A`、含 `&` 的组合、金额后缀和中英品牌；不得半翻译或拆坏缩写。 |
| Z5 | conditional-gate | `text` 触发每个 rendered text bbox 在画布内且不压 node；overflow 为 0，必要时使用 locale-specific wrap/x/top/font-size。 |
| Z6 | manual | 修复顺序：先 locale overlay 文案/布局，再拆行、局部位置、局部字号或合适 `textLength`；不改共享几何。 |
| Z6a | manual | locale 文字扩展碰到 runtime raster 时，只在该 locale 的完整 raster 列表移动 annotation x/y；保持 href、尺寸和 node/link geometry，主体净空至少 5px。 |
| Z7 | manual | locale overlay 不能改变财务值、links、node geometry、source image 或验证语义。 |
| Z8 | manual | 品牌名、ticker、单位缩写或正式产品英文名可保留，但必须在允许的 identity/preserved-text 配置中记录。 |

### I 系列：图标 crop/vector 子循环

| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| I1 | manual | 公司、业务、产品和 segment 图标可进入子循环；目标是可复用 vector 或 R 系列 runtime copy，reference crop 不是成品。 |
| I2 | manual | crop spec 必须覆盖 inventory 中全部有语义 cluster，除非任务明确缩小范围。 |
| I3 | manual | reference crops、validation sheet 和 crop report 放在 `icon-references` 规定目录；详细路径由资产文档拥有。 |
| I4 | manual | crop 只有在主体完整、视觉居中且无无关文字/线条/水印/邻图时通过；否则先重裁。 |
| I5 | manual | 主体铺满取景框时显式指定 background removal 颜色；`transparentPixelRatio` 接近 0 时不得假设自动去背成功。 |
| I6 | manual | 每个 crop 的人工/模型验收结论持久化在 validation record。 |
| I7 | manual | vector 候选必须是纯 SVG，不含 image/位图/截图；与 aligned reference 同 viewport 比较结构、负形、留白和中心。 |
| I8 | manual | 可复用 vector 放共享 icon registry，一次性 logo 放 dataset-owned vector；验证证据留在 validation 资产区。 |
| I9 | manual | materially similar 图标优先复用已有 vector，只调整 viewBox、transform、size、placement、stroke 或 fill。 |
| I10 | manual | 子循环结束要求 crop 已验证、候选纯 vector 或批准 runtime copy、主体结构/负形/留白/中心稳定且资产落点正确。 |
| I11 | manual | 公司 Logo 只有一个 owner：使用 `meta.logoSvg` 时不得在 annotations 再画同一实例；自定义 annotation 定位则移除前者。 |

## 6. 证据、反馈与结束条件

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
