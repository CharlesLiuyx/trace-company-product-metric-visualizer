# 保真循环规则

本文档是 d3-Sankey 保真循环、runtime raster 例外、图标 crop/vector 子循环、
本地化固定布局检查和最终输出概要的 SSOT。其他项目文档与本文档冲突时，以本
文档为准。

全部硬规则带稳定编号：G（自动硬门槛）、B（盲点必查）、R（raster 白名单）、
L（连接线）、T（Label-node/文本）、A（注释容器）、Z（本地化）、I（图标子循环）。
红框 region、Task 信息、人工反馈与轮次记录一律引用编号，禁止转述指代。

## 导读与阅读路径

| 时刻 | 必读章节 |
| --- | --- |
| 首轮开始前 | 总则 → 自动硬门槛 → 自动门槛与人工盲点对照表 → 执行入口 → 第 0 轮：渲染前测量 |
| 每轮执行中 | 保真循环流程 → 本轮 sweep 覆盖方向的专项协议（L / T / A / Z / I）→ 并行与分派 |
| 每轮结束前 | 红框参考图和 Task 信息 → 每轮记录模板 → 总则的退出置信度判断 |
| 收敛与汇报 | 收敛标准 → 最终输出概要 → 人工反馈沉淀 |
| 改数据或渲染器前 | 允许的改动范围 → 禁止做法 → Runtime Raster 例外 |

## 总则

质量判定：

- 像素 Diff 是主要量化证据，但验收不是无条件追求最低 Diff。差异必须先按语义
  分类：结构错误、文本/关联错误、可优化视觉差异、可接受残留、无语义跳过。
- 无语义或与公司损益表无关的内容，不得为降低 Diff 被复刻进候选图。

流程目标：把人工指出的问题逐步转化为可重复执行的编号规则，让后续数据集不再
依赖用户逐块指出明显问题。每次用户修正都是流程缺口信号：先修当前问题，再按
「人工反馈沉淀」把可泛化经验写回本文档；数据集特例写入该轮 Task 信息。

轮次预算与退出置信度：

- 标准预算：3 个 sweep 轮内清空人眼显著错误（「必须死磕」项），4–5 轮完全
  收敛。轮次的首要产出是关闭显著错误，不是压全图 Diff。达成手段：第 0 轮
  渲染前测量让首轮就接近原图 + sweep 分层批量检查。
- 每轮结束必须做一次**退出置信度判断**：基于当前上下文（G1–G11 状态、B 系列
  盲点是否查完、开放红框、backlog、残差分类）回答「人工现在 Review 是否还会
  提出修改意见」。高置信（死磕清单空 + 盲点查完 + 仅剩可接受残留）→ 立即按
  收敛标准收敛，不再开轮；低置信 → 下一轮只打剩余最高风险项。
- 用户提出修改建议后，下一轮以反馈项为主方向定向优化，不做泛化重扫，避免
  烧轮次。
- **反微调停机规则**：自动硬门槛全过且死磕清单空后，预计新一轮全图
  similarity 提升低于约 0.0005 即不得开轮，剩余差异记为可接受残留并收敛。
  同方向候选值必须在同一轮内并行试完、统一取舍、归档一次，不得拆多轮。

## 自动硬门槛

每轮都先运行的自动哨兵，不算人工主检查方向。失败先修，再做任何局部保真判断。

- G1 候选图必须是 `SankeyEngine.render()` 产生的 d3/SVG 输出。
- G2 SVG 尺寸必须等于 `meta.referenceImage.width` 和 `meta.referenceImage.height`。
- G3 本地 Montserrat 字体必须加载成功；不得用 fallback font 计分。
- G4 `#chart` 中不得出现 `<img>`、canvas、foreignObject、picture、video、
  iframe、object 或 embed。
- G5 `#chart` 参与截图的元素不得使用 CSS `background-image` 作为像素补丁。
- G6 默认情况下 `#chart > svg image` 数量必须为 0。
- G7 只有显式 runtime raster 模式允许 SVG `<image>`，且必须满足 R 系列白名单。
- G8 同一 node 的同轴 label 与 node 外框不得纵向交叠；目标边界间距 5px，
  渲染 bbox 间距低于 4px 是 hard fail。
- G9 短辅助柱、短横柱或小矩形与其上下同轴 label 的水平中心必须对齐；渲染
  bbox 的 `centerDelta > 4px` 是 hard fail（人工延伸见 T2）。
- G10 左右相邻 label 与 node 的横向 overlap 是 hard fail。
- G11 `node --check`、`pnpm verify:ssot`、`pnpm verify:i18n -- --strict <key>`
  等数据一致性检查必须按 `docs/dynamic-dataset-workflow.md` 的验证清单执行。

## 自动门槛与人工盲点对照表

门槛看不见的检查必须由人工在对应 sweep 轮补上；「自动化候选」仅为未来工程
标记，不改变当前人工义务。

| 编号 | 关联门槛 | 门槛已覆盖 | 盲点（门槛看不见） | 人工必查 | 自动化候选 |
| --- | --- | --- | --- | --- | --- |
| B1 | G8/G9 | 同轴纵向间距、短柱水平中心 | 手写靠左/右但视觉属柱正上/正下的汇总 label 不入同轴归组 | T2 | 是 |
| B2 | G10 | 侧置 label 横向交叠 | 不判侧置 label 与源图的水平距离是否一致 | T6 | 是 |
| B3 | G10 | 同上 | 不判侧置 label 垂直中心对齐；单行 label 高风险 | T7 | 是 |
| B4 | G8 | 同轴归组按 x 相交 | value/note block 放错 x 时被判非同轴而漏检 | T9 | 是 |
| B5 | G8/G10 | 仅审计 `layout.labels` ↔ node | `annotationsSvg` 文字与相邻 `layout.labels`、主标题或期间标记交叠不审 | A6 | 是 |
| B6 | G2 | 仅判 SVG 画布尺寸 | 不判文本 bbox 越出画布（本地化后高发） | Z5 | 是 |
| B7 | G6/G7 | raster 数量与来源 | 不判隐形锚点柱是否多出可见柱/绿痕 | T12 | 否（视觉判定） |
| B8 | 无 | — | 多入/出接口只看 `Σlink.width`，会漏掉整组 socket 起点偏移、分项间距错误，或把源图有意留缝误判成 rounding 空隙 | L5/L11 | 是 |
| B9 | 无 | — | hub/深色源 profit 流带渐变 vs 源图纯色 | L12 | 是 |
| B10 | G11 | 数据一致性 | link 拓扑与源图一致性、tooltip 语义分母 | L8/L14 | 部分 |

## Runtime Raster 例外

默认禁止在 d3 输出中使用任何源图像素、源图裁剪、前景覆盖层、锁定背景或位图
补丁。唯一例外是显式图片嵌入模式，必须同时满足：

- R1 源区域是有语义的公司、业务线、产品线或 segment icon cluster。
- R2 crop 已通过 spec-driven 提取和验证，并记录在
  `data/assets/icon-references/<company>/crop-report.json` 与 `model-validation.md`。
- R3 runtime 文件由 crop spec 的 `runtimeOutputDir` 生成或同步，位于
  `data/assets/raster-annotations/<company>/`。
- R4 dataset 通过 `data.rasterAnnotations` 引用该 runtime 文件。
- R5 dataset 显式设置 `render.allowRasterAnnotations = true`。
- R6 `pnpm verify:d3` 报告 `rasterAllowed: true`。
- R7 SVG image 数量等于 `data.rasterAnnotations` 数量。
- R8 每个 image href 都在 `data/assets/raster-annotations/` 下且文件存在；
  不得指向 `input/processed/`、`data/assets/icon-references/`、外部 URL 或
  data URI。
- R9 `icon-references/<company>/crops/` 下的 crop 是 reference/conversion
  asset，即使已验证也不得被 dataset 直接作为 `<img>`、SVG `<image>`、canvas
  bitmap、CSS background 或前景 overlay 引用；需要嵌入时用 `runtimeOutputDir`
  生成单独 runtime copy。

来源发布方水印、创作者品牌、URL、社交徽标、"how they make money" 标识、
署名条等 attribution 内容不属于本例外（见「无语义跳过项」）。

## 允许的改动范围

整图 d3 循环只能通过 d3-compatible 改动改善输出：

- `data.layout.nodes`、`data.layout.labels`；
- `data.render` 尺寸、颜色、透明度和排版；
- link 顺序、`sourceOrder`、`targetOrder`、显式 `y0`/`y1`、固定 socket、`curve`；
- vector logo / vector icon；已批准的 runtime raster annotations（R 系列）；
- 渲染器对 SVG 几何、路径或文本控制的通用支持。

不得通过 Reference mode、直接 `<img>`、整张源图、未批准 crop、临时 overlay、
CSS background、canvas 或锁定背景降低 Diff。本地化 overlay 只能改变显示文字
与语言特定排版（Z7）。

## 执行入口

创建或实质修改数据集后运行：

```sh
pnpm verify:d3 -- <dataset-key> [--focus "<主检查方向>"] [--keep] [--language <code>] [--round <n>]
```

`pnpm verify:dataset -- <dataset-key>` 把语法、SSOT、strict i18n、metadata 与
每种语言的 d3 渲染打包成一条命令；单独调某一轮仍用 `verify:d3`。依赖安装：
`pnpm install --frozen-lockfile && pnpm exec playwright install chromium`。
受限 sandbox 中需一开始就用提权 shell 运行（脚本绑定 `127.0.0.1` 临时服务器，
否则可能 `listen EPERM`）。

`verify:d3` 每次运行：起本地静态服务器 → 最小 harness 执行
`SankeyEngine.render('#chart', data)` → 截取 `#chart > svg` → 跑 G 系列哨兵 →
计算全图与 DOM 派生分区域 Diff → 写 `compare/<key>-metrics.json` → 归档到
`output/compare/<key>/<round>-<improvement>-<focus>/` 并复制共享参考图 →
默认清理 `compare/`。

归档命名：轮次按该 dataset 已有 archive 数自动递增补零（`--round` 可覆盖）；
`improvement` 为全图 similarity 相对上一轮同语言 archive 的差值（如
`sim+0.000123`；无上一轮用 `baseline`）；`focus` 转为短 slug，sweep 轮直接用
层级名（`structure-sweep`、`text-sweep`、`polish-l10n-sweep`）。

人工轮次必须传 `--focus`。需要并排看原图/候选/Diff 时加 `--keep`，结束前必须
`sh scripts/clean-compare.sh`。最终记录引用 `output/compare/` 归档；
`compare/` 只是临时 scratch。

## 第 0 轮：渲染前测量

输入：`docs/dynamic-dataset-workflow.md` 的输入分型与粗对象盘点结果
（其 §Object Taxonomy 是对象类型清单的属主）。本节对该盘点清单逐对象精细
测量，不重新推导对象列表。输出：直接写入 dataset 的测量值。

进入第 1 轮之前，至少完成以下测量并直接写入 dataset：

- 画布尺寸与各列节点的 x 位置。
- 每个短辅助柱、短横柱和终端柱的像素 bbox（x/y/width/height）。
- 逐条从原图追踪 link 拓扑：source、target，以及两端 socket 的
  `top / bottom / center / visible width`；逐个接口判定是连续分区、间隔式
  socket，还是源图明确存在的轻微重叠/越界，特别关注 waterfall 区、绕行带和
  多入/出节点（口径同 L8/L11）。不得只按财务值或 `Σlink.width` 反推接口。
- 每个 label 的锚点位置、anchor 方向和语义归组（口径同 T11）。
- 注释容器、KPI/stat card 和徽章的容器 bbox。

测量方式任意但必须可复现（局部 crop 读坐标、取色器、脚本均可）；首轮渲染
必须以测量值起步，不允许先粗排、再靠保真轮次逼近。

【案例 → 规则依据】跨 10+ 轮才收敛的历史数据集，其后期修复项（socket 错位、
短柱 x/y/height、label 中心、侧置 label 距离）几乎全部可在写 dataset 时一次
做对——这是 3 轮预算成立的前提。

## 保真循环流程

人工轮次按 sweep 分层批量检查，标准预算 3 轮，必要时加 1–2 轮升级深查：

- 第 1 轮 结构 sweep：输出纯净性、尺寸、裁剪、画布边界；节点几何、列位置、
  节点高度、流带宽度；多入口/出口顺序与 socket；终端短横柱、辅助流端点、
  自定义 curve；L8–L15 全部核对。每个多入/出接口须先按 L11 分类为连续分区
  或间隔式 socket，再判断 width、`y0`/`y1` 和 curve，禁止用宽度和强行填满
  节点边缘代替接口拓扑判断。
- 第 2 轮 文本 sweep：T 系列（label-node 外框、文本交叠、位置与归属）+
  A 系列（注释容器内部对齐、KPI/stat card、徽章、脚注）。
- 第 3 轮 润色与本地化 sweep：颜色、透明度、图标细节、字体抗锯齿残留；
  每种非默认语言按 Z 系列检查（每语言渲染各自归档为一轮，同属本层级）。

每轮必须把本层 sweep 覆盖范围内的人眼显著错误一次修完，不把同层问题拆到多轮。
自动哨兵每轮都跑；人工深查集中在门槛看不见的语义正确性上（对照 B 系列盲点表）：
link 拓扑是否与原图一致、文本是否属于正确节点、label 是否与原图同位。

单方向深查轮是升级手段，仅在以下情况使用：自动硬门槛反复失败且原因不明；
用户反馈重开了某方向；sweep 轮发现本轮修不完或需逐条 bbox 审计。

每轮步骤：

1. 清理上一轮 scratch，或确认本轮使用新 archive。
2. 运行自动哨兵（G1–G11）。
3. 确定本轮 sweep 层级或升级方向；更新 Task 信息、冻结清单、重开项、backlog。
4. 渲染候选图，获取原图、候选图、Diff 图和 metrics JSON。
5. 读取全图指标和与本轮覆盖方向相关的分区域指标。
6. 对本轮覆盖方向的高 Diff 区域和人眼显著错误做误差分类。
7. 只针对本轮覆盖方向修改数据、布局、矢量资产或渲染器，按专项协议
   （L/T/A/Z/I）把本层能修的一次修完并同口径复查。
8. 生成本轮红框参考图；无开放问题则在 Task 信息中明确记录无开放红框。
9. 通过的方向分别记录证据并冻结；未通过的进入升级深查或下一轮。
10. 更新 Task 信息；做退出置信度判断（总则），决定立即收敛或下一轮主方向。

层级外新问题：属更早层级的立即修（会使本层判断失效）；属更晚层级的记入
backlog。自动硬门槛失败、画布裁剪、明显文本越界始终立即处理。

## 并行与分派

执行模型的属主是 `docs/dynamic-dataset-workflow.md` §Execution Model；本节只
列循环特有细则。分派不降门槛：同一套自动哨兵与记录要求，主 Agent 复核并对
结果负责。

- 轮内并行：同方向候选值并行试、同一套指标取舍、一次归档（总则停机规则）。
- 每语言渲染相互独立，可并行 shell 执行。
- 可分派 Subagent：渲染与指标采集、bbox 报告收割、按已确认 region 清单绘制
  红框、verifier 命令执行。
- 只归主 Agent：误差分诊与分类、修复决策、冻结/重开/收敛判定、退出置信度
  判断、人工反馈沉淀。

## 冻结和重开

一个方向只有在本轮记录包含候选图、参考图、Diff 图、相关局部指标和明确结论后
才可冻结；仍有未处理红框 region 或缺结论的不得冻结。同一 sweep 轮可同时冻结
多个方向（各有证据即可），冻结不要求该方向单独占用一轮。

冻结后不再重复人工深查，除非：

- 相关节点、链接、标签、注释、语言覆盖、图标资产或渲染器逻辑被改动；
- 自动验证出现纯净性失败、尺寸变化、横向 overlap、文本越界、路径端点异常；
- 用户标注区域局部指标显著回退；
- 用户再次指出同一方向问题。

被重开的方向必须重新成为某一轮主检查方向；不得在其他方向轮次里顺手修、顺手验。

## 连接线和终端接口

触发条件：结构 sweep 轮或升级深查轮覆盖连接线接口、节点/流带结构、终端短横
柱、辅助流接口、用户标注接口，或相关冻结项被重开 → 必须检查所有有多条
`sourceLinks` 或 `targetLinks` 的节点。检查口径：渲染后的 SVG path 和 node
bbox，不以源码 link 数组位置、node `order` 或上一轮视觉印象为准。

- L1 多入口节点按实际进入节点边缘的垂直位置，自上而下列出 `source -> target`
  顺序，对照参考图。
- L2 多出口节点按实际离开节点边缘的垂直位置，同口径列出并对照。
- L3 `sourceOrder` 只控制源节点出口堆叠，`targetOrder` 只控制目标节点入口堆叠。
- L4 同一目标节点同时接收主经营利润与 other income/expense、tax benefit、
  interest、investment gains 等辅助流时，单独核对目标端上下层级；同一源节点
  同时分出净利润、税费、费用项时，单独核对源端上下层级。
- L5 有显式 `curve`、`y0`/`y1`、固定 socket 或自定义宽度的高风险连接，须在
  source 和 target 两端分别记录 path 端点、stroke width、socket interval
  （`top / bottom / center`）以及 node bbox；只记录一条中心线或只看源码数字
  不足以证明接口贴合。
- L6 连接线中心线应落在对应节点外框内，stroke 不应明显越出节点可接收范围，
  除非参考图明确如此。
- L7 自定义曲线控制点保持水平推进：`source.x1 <= c1x <= c2x <= target.x0`；
  反向弯出或折返必须记录参考图依据。
- L8 逐条从原图追踪 link 拓扑（source、target、socket、是否绕过中间柱），
  不得按财务算式或节点邻近推断。waterfall 区的结果柱与调整项柱可能共享同一
  目标或平行进入；原图显示带子绕过某结果柱时，不得把该结果柱写成中间节点。
  细税线、短横线和多入口目标记录显式 `y0`/`y1` 或控制点，并在 Task 信息中
  说明每条线对应的原图关系。
- L9 用户指出连接线错误时，先复核两端节点自身的原图像素 bbox（尤其短柱的
  x/y/height）；节点 bbox 错则先联动节点与 label，节点 bbox 对则进入 L11，
  对照每条 socket interval 判断是 width 错还是 center/间距错。节点错位时任何
  `y0`/`y1` 都只是对错误锚点的补丁；width 已对时也不得靠加粗流带掩盖 socket
  偏移。
- L10 短距离多入口目标柱：当参考图显示目标边界为连续分区时，高度须等于或
  足以容纳输入带宽之和，且每条输入带在目标边界的垂直区间连续对齐；参考图若
  明确为间隔式入口，则按 L11 保留间距。源图显示弯曲过渡的短 link 必须写显式
  cubic 控制点，用局部 crop 确认平滑、无直角、台阶、非预期空档或多余重叠。
- L11 接口拓扑与 rounding 核算：`node.height - Σlink.width` 只是诊断量，不是
  必须归零的恒等式。对每个多入/出接口按以下同一决策顺序处理：
  1. 在 source、target 两端分别量测 node bbox 与每条 socket interval，并把
     参考接口分类为「连续分区」或「间隔式 socket」；抗锯齿造成的 1px 边缘只
     在完整 interval 形态确认后记录为残留。
  2. **连续分区**：要求各 interval 的 union 覆盖参考节点边缘且无非预期空隙/
     溢出。只有确认差额来自 rounding，且同一 link 的另一端也能接受该 width
     后，才把差额计入组内最大 link；不得默认执行，也不得按比例摊薄。
  3. **间隔式 socket**：保持已由目标短柱或参考带宽确认的 `width`，用显式
     `y0`/`y1` 还原每条 center 与间距；不得为了让 `Σlink.width == node.height`
     而加粗流带、抹掉参考留缝。间距或轻微越出 node bbox 必须有原图量测依据。
  4. 两端独立复查：source 修复不得破坏 target，反之亦然。若源图要求同一带两
     端宽度不同（taper）而当前 renderer 只能画等宽 stroke，记录 renderer 能力
     缺口并升级实现或明确取舍，不得用移动节点、颜色或覆盖层伪装。
  单入口/单出口也按同一分类检查；同一 dataset 的所有多入/出接口都要审计，
  不得只修被用户标注的节点。
- L12 流带取色：渲染器默认把非 cost 目标的 link 画成
  `source.tint -> target.tint` 渐变，cost 目标为纯 salmon。结构 sweep 轮必须
  对每条从 hub 或深色 source 出发的 profit link，在紧邻源节点右缘外几 px 取色
  对照源图；源图为纯色而候选为渐变时，用该 link 的显式 `linkTint` 覆盖为纯
  profit 色，不得靠改节点 tint 掩盖。
  【案例】App Economy 黑色 Revenue hub 的毛利带默认被渲染成 gray→green 渐变，
  而源图从节点边缘起即纯 profit 色。
- L13 节点联动移动：人工反馈要求节点「上/下移」时，把节点、同属 label、所有
  相关 `y0`/`y1` 和 curve 控制点作为一个联动系统处理；移动后重算目标柱
  stacked intervals，并用局部 crop 复查目标边界端点贴合。
- L14 tooltip 百分比：用户指出 hover 百分比错误时，明确记录该 link 的语义
  分母；waterfall 区、隐藏桥接、结果柱与调整项共用目标等启发式易误判的关系，
  优先在 dataset link 上写 `percent` 或 `percentText`，不依赖 renderer 推断。
- L15 竖直节点接口端面：SVG link 使用 `stroke-linecap: butt` 时，端面方向由
  路径端点切线决定；连接竖直节点边的 link 必须水平进入/离开节点，让端面与
  节点边竖直贴齐。自定义 cubic 的源端控制点必须满足 `c1y = y0`，目标端控制
  点必须满足 `c2y = y1`（允许 ±0.5px 抗锯齿/半像素差）；若源图明确显示斜切，
  必须在 Task 信息记录例外。用户指出“连接处不严丝合缝/应该竖直”时，先修
  端点切线，再调整体弧度。

修复优先级：先确认节点 bbox；节点错 → 联动 `layout.nodes`、label 和相关端点；
节点对但入口/出口顺序错 → `targetOrder` / `sourceOrder`；顺序与 width 对但
socket center/间距错 → 显式 `y0`/`y1`；width 与参考两端都不符 → 按 L11 调
`width` 或节点高度；端点区间对但端面倾斜 → 按 L15 调 curve 控制点；终端列
整体偏移 → 先整列 `layout.nodes` 再校验端点与 label。不得用颜色、透明度、节点
覆盖、移动标签或无依据加粗流带掩盖接口错位。

## Label-node 和文本布局

触发条件：文本 sweep 轮、本地化 sweep 轮或升级深查轮覆盖 label-node、文本
交叠、文本位置、本地化布局，或相关冻结项被重开。检查口径：浏览器 `getBBox()`
或等价渲染外框；源码中的 `top`、`x`、`lineGap`、字号只是排版输入。

定义：上下排列 = label 与柱子构成同一竖向视觉组，水平中心线应一致；左右排列 =
构成同一横向视觉组，垂直中心线应一致。

- T1 间距目标：上方 label 外框下边界到 node 上边界 `5px ± 1px`；下方 label
  外框上边界到 node 下边界 `5px ± 1px`；同竖向组相邻 label block 间距
  `5px ± 1px`。
- T2 同轴水平中心差目标 0px，短辅助柱/短横柱不超过 4px（G9 的人工延伸）：
  源图语义显示 label 属于柱正上/正下时，不得降级为左右或远邻 label；固定布局
  里手写靠左/靠右但视觉仍属柱上/下的汇总柱 label（毛利、营业利润、营业费用、
  净利润/净亏损为高风险），以及中间聚合/source/hub 柱名称块（Revenue hub、
  Subscription and support 这类视觉上贴附在蓝色汇总柱上方的 label），必须按
  上下同轴组合审计；修复先把 label 水平中心对齐到柱心，label 外框与柱边保持
  5px ± 1px，再复查是否产生新交叠。
- T3 破例（参考图确实不同间距，或为避免越界/交叠）必须记录原因；间距达
  20px 量级必须有参考图依据或明确避让理由。
- T4 侧置 label 与 node 不得横向交叠，目标边界间距至少 5px。
- T5 三段式外框审计：① 在候选图上用红框画出同一 node 的 label 与 node 渲染
  外框（来源为 DOM bbox，不用源码坐标估算）；② 确定性 bbox 审计：按
  `data-node` 归组，x 方向有交集且中心接近即视为同轴组合，计算
  `edgeGap`，`edgeGap < 4px` 先修到 5px，短柱 `centerDelta > 4px` 先居中再
  重渲染复查；③ 算法通过后把红框图交给模型做视觉复核（同组交叠、错误归组、
  文字被挤压、新重叠）——模型复核不替代 ② 的确定性 hard gate。
- T6 侧置 label 水平距离（盲点 B2）：测量源图该组 label 的实际右/左缘 x，让
  渲染 bbox 对应边缘落在同一 x；不得默认用 `nodeX0 - 小 pad` 贴柱放置；同列
  side label 用同一对齐缘。
  【案例】App Economy 分部图左侧 segment name 整组右对齐在离柱 ~25–30px 处，
  贴柱会被读成「右侧交叠」。
- T7 侧置 label 垂直中心（盲点 B3）：每个侧置 name label 手动核对
  `labelCenterY ≈ nodeCenterY`（≤4px）。单行侧置 label 高风险：渲染器把字形
  放在 block `top` 下方约一行 ascent 处，修复口径是按 `nodeCenterY` 反推
  `top`，不照抄源图字形顶端。
  【案例】照抄字形顶端会使单行 name label 整体偏低约 8–12px。
- T8 同节点侧置 name + 同轴 value/note 组合（高风险盲点）：同轴 label 与柱子
  x 方向有交集或中心线接近时，即使二者垂直相交也归入上下排列组合，记录负
  `edgeGap` 并按交叠修复；不因 `label.bottom <= node.top` 不成立而漏掉。
- T9 短 source 柱的 value/name/note block（盲点 B4）：以该柱渲染 centerX
  为锚点正上方或正下方居中；每个本应位于柱正上/正下的 block 手动核对
  `block.x ≈ nodeCenterX`，不能只依赖 gate 是否报同轴，也不能把 name/note
  block 误当成侧置 label 后漏掉居中检查。
- T10 短辅助节点（interest、other income、tax benefit、investment gains 等）
  做同样检查；参考图把这类节点画在自身 label 正上/正下时，节点位置以 label
  外框为主要参照，不得被主流带或终端节点牵引到别处。
- T11 语义归组：同一节点的名称、数值、备注、margin、Y/Y 文本和紧邻图标先
  作为同一 label 意图归组，再按排版拆 blocks/lines；不得为局部像素或空白把
  完整 label 语义拆成互不相关的优化区域。
- T12 隐形锚点柱（盲点 B7）：源图把极小利润加项画成「细流带 + 水平引导线、
  无可见柱」时，不得渲染可见节点柱——锚点节点 `color` 设为背景色（保留 link
  锚点），用 link 曲线 + `annotationsSvg` 引导线还原；水平引导线若在源图中
  可见，必须按其像素 bbox 单独画出，锚点 bbox 放在引导线末端，曲线从该末端
  进入目标柱，不得把隐藏锚点留在上游主柱附近导致引导线缺失或连接线斜穿。
  渲染层序为 links → nodes → labels → annotations，背景色节点不会盖住引导线。
  审查时数「可见绿色柱」数量与源图一致（通常仅终端利润柱一个）。
- T13 可见短辅助柱不得消失：源图已画出短水平柱/短矩形（即使只有 1–3px 高）
  时，必须保留第 0 轮测得的可见 bbox；不得为了通过 G8/G9 或避让文字，把
  `width`/`height` 缩到肉眼不可见、改成透明锚点，或只留下连接线。若同轴
  label 触发间距/居中失败，优先把 label 改为侧置或上移/下移到与源图同样贴近
  短柱的位置；短柱本身的可见性和连接 socket 先冻结，再调文字。
  【案例】Alibaba Q3 FY26 的 `Other $0.2B` 是可见短绿柱，不能缩成 3px 锚点；
  其 label 属于短柱正下方的同轴组合，应以短柱中心居中；`Investments` label
  应上移靠近自身短绿柱，而不是停留在远离柱子的默认位置。
- T14 可见短横辅助柱端点：用户指出「短横柱过长/过短」时，必须在原图局部 crop
  上逐行量测直线段的 `x0..x1`，区分直线段、弯曲连接线和文字像素；修复以
  `layout.nodes.width`/`x` 还原可见直线段长度，并同步重算同轴 label 中心，
  不得沿用默认短节点宽度或只靠移动曲线端点遮盖长度误差。

## 注释容器

`annotationsSvg` 中的 KPI/stat card、黑色胶囊、图例框、徽章、脚注卡片和
图标加文字组合不属于 `layout.labels`，但仍是图表语义的一部分。触发条件：
文本 sweep 轮或升级深查轮覆盖注释容器，或相关冻结项被重开。

- A1 识别容器外框（`<rect>`、胶囊背景、badge 背景或等价 path）。
- A2 取容器内部所有语义文字和图标的 union 外框。
- A3 居中意图：union 中心与容器中心一致，或保持参考图同样的轻微偏移。
- A4 左/右/顶对齐意图：检查对应边距和组内行距。
- A5 内容不得贴边，尤其底边、右边和圆角区域。
- A6 annotations 文字 ↔ 邻近文本交叠（盲点 B5）：`annotationsSvg` 里的单位
  标签、品牌 wordmark、脚注等必须与相邻 `layout.labels`、主标题和期间标记逐一
  用渲染 bbox 核对，边界不得交叠且目标间距 ≥5px。不能只检查 baseline 或依赖
  自动 label-node audit；title 的 `textLength`、字体或本地化文案变化后必须重查。
  修复时先按参考图移动 annotation 整组；wordmark 过宽时再收窄或整体侧移，并
  复核外缘不贴画布边。【案例】Sony Q3 FY25 的 `in yen` 基线误放进标题带，自动
  门槛全绿仍发生可见交叠；应量测参考图的完整单位标签 bbox 后恢复其 x/y。
- A7 非默认语言替换注释文字后，重查 union 外框仍在容器内且不越界。
- A8 优先让 helper 以容器中心、内容组高度、行高和边距推导 baseline；保留
  手写 baseline 时记录容器 bbox、union bbox、中心差和四边边距。

## 本地化布局

英文循环通过只说明默认语言稳定，不证明其他语言的固定布局文本稳定。

- Z1 触发：每次新增或实质修改 `i18n.<language>` 覆盖，必须做本地化布局检查：
  `pnpm verify:d3 -- <dataset-key> --language zh --keep`。通常作为第 3 轮
  sweep 的一部分完成；本轮修不完才升级为单独深查轮。
- Z2 判定：本地化渲染的 Diff 仍以英文参考图为基准，只用于辅助定位；通过与否
  看输出纯净性、bbox 审计、混排/标点/缩写正确性、越界与重叠。
- Z3 检查范围：`layout.labels.*.blocks[].lines[].text`、`annotationsSvg`、
  KPI/stat card、title 与 period stamp、`.sankey-label[data-node]`、图标旁
  标签、底部期间标记。
- Z4 高风险字符串显式确认：`R&D`、`SG&A`、`G&A`、`D&A`、带 `&` 组合标签、
  金额后缀标签、中英混排品牌/产品名；不允许半翻译、英文残留、错误中文逗号、
  或缩写被拆成 `R，D`、`SG，A`。
- Z5 越界（盲点 B6）：文本渲染 bbox 必须在画布内。英文缩写类侧置标签翻译后
  常显著变长：不得沿用英文 `anchor` 和原始 x；渲染 bbox 不得压到节点；同侧
  同列 label 以靠近节点的一侧边缘对齐；必要时拆行并复查短标签仍对齐。
- Z6 处理顺序：先补 dataset 级 `i18n.<language>.layout.labels` 或本地化
  `annotationsSvg`；越界优先拆行、调整该语言覆盖内的局部 `x`/`top`、减小局部
  字号或使用合适 `textLength`。
- Z7 禁改：不得为适配翻译改变财务值、links、node geometry、source image 或
  验证语义。
- Z8 品牌名、ticker、单位缩写或正式产品英文名可以有意保留，但必须记录。

## 图标 Crop 和 Vector 子循环

- I1 适用与目标：公司标志/图标、业务线/产品线/segment 说明性图标、可能复用
  的图标；可先于整图循环单独跑。目标是可复用 vector 资产或白名单 runtime
  raster copy；reference crop 不是最终资产。
- I2 为当前数据集创建/更新 `input/icon-crop-specs/<dataset-key>.json`，用
  `scripts/extract_icon_crops.py` 提取所有有语义的 cluster；除非任务明确缩小
  范围，不得只提取示例簇。
- I3 输出落点：crops 到 `data/assets/icon-references/<company>/crops/`，
  validation sheet 到同目录 `validation-sheets/`，保留 `crop-report.json`。
- I4 验收：主体完整、视觉居中、无无关文本/线条/水印/相邻图标；crop 不准确
  先重新 crop，不得基于错误 crop 继续 vector 化或 runtime 输出。
- I5 背景去除：`crop-report.json` 中 `transparentPixelRatio` 接近 0 说明背景
  没被抠掉，须在 spec 的 `backgroundRemoval.color` 显式钉住画布底色重跑，
  不依赖自动采样。
  【案例】主体（wordmark、满框 logo）几乎铺满取景框时，自动背景采样会把主体
  颜色当成背景，导致什么都不删。
- I6 验收结果写入 `model-validation.md`。
- I7 vector 子循环：候选必须是纯 SVG/vector（不含 `<image>`、位图、文本截图
  或覆盖层）；与 crop/aligned reference 按同一尺寸计算 Diff；调整 geometry、
  viewBox、path、stroke、fill、transform、尺寸或对齐直至收敛。
- I8 资产落点：通用/可复用 vector 优先放 `src/icons.js` 的
  `SANKEY_BUSINESS_ICONS` 或相关 icon 集合；一次性 logo 放 dataset 的
  `meta.logoSvg` 或局部 helper；validation render、vector diff 等证据放对应
  `validation-sheets/` 或记录文件。
- I9 复用优先：后续 materially similar 图标复用已有 vector（可调 viewBox、
  transform、size、placement、stroke、fill），不创建近重复资产。
- I10 子循环收敛条件：crop 已验证准确；候选是纯 vector；图标主体结构、关键
  负形、边界留白和中心位置稳定；资产已存为可复用 vector 或 runtime raster
  copy 已按 R 系列生成。

## 误差分类和修复优先级

必须死磕（人眼显著错误，轮内必须关闭）：

- 桑基接口未对齐；节点入口/出口顺序错误；流带端点未贴合节点边缘。
- 终端短横柱或整列终端节点漂移；细辅助流 stroke width、`y0`/`y1` 或 socket
  超出短横柱 bbox；自定义曲线反向弯出、下坠再上升或进入目标前折返。
- 文本交叠、压到节点/流带、图标与文字重叠；文本属于错误节点、方向错误或
  名称/数值/备注顺序错误。
- label-node 外框关系无法解释；本地化文本越界/裁切。
- 注释容器内部内容偏心、贴边或与参考图意图不符。

需要优化：节点矩形位置/宽高偏移；流带宽度或层级顺序明显不同；标题位置或字号
明显偏离；颜色、透明度、背景色偏差较大；图标尺寸或位置影响读图。

可接受残留：字体渲染与抗锯齿差异；浏览器/系统/缩放的亚像素差异；手绘曲线
纹理与 d3 曲线的细小差异；语义正确但外形略不同的 vector 图标；不含重复/裁剪/
语义错误的品牌细节差异；不影响层级区分的轻微色差；背景或阴影低强度噪声。

下一轮选择：先按 sweep 层级顺序推进（结构 → 文本 → 润色/本地化）。只有当某
方向未冻结或被重开、需升级深查时，按以下优先级安排单方向轮次：① 自动硬门槛
失败 ② 尺寸/裁剪/画布边界 ③ 连接线接口、socket、终端短横柱 ④ 节点位置与
尺寸 ⑤ 流带宽度、顺序、端点贴合 ⑥ 文本交叠 ⑦ 文本位置/居中/对齐/邻近关系
⑧ 文本越界 ⑨ 标题、图例、期间标记、注释容器 ⑩ 颜色、透明度、图标、字体
抗锯齿残留。

## 无语义跳过项

以下内容不进入候选渲染、调参目标、图标资产或 runtime raster 例外：来源发布方
水印；创作者/账号品牌；网站 URL；社交徽标或社交账号；"how they make money"
出品方标识；署名条、attribution block；与损益表语义无关的装饰残片；没有独立
业务图标的 `Others` 类 segment。

这些区域可在记录中标为跳过项；它们会贡献全图 Diff，但不得为降低 Diff 被补画。

## Diff 指标

全图循环按完整参考图计算；图标 vector 子循环按 icon viewport 或 crop/aligned
reference 的完整画布计算。每轮至少记录：

- `mae`（RGB 平均绝对误差）、`similarity`（`1 - mae / 255`）、
  `maxChannelDiff`、`samePixelRatio`、`changedPixelRatio`、`diffBoundingBox`。

`pnpm verify:d3` 自动为渲染 DOM 派生区域（边界、节点、链接、标签、annotation、
runtime raster 等）输出分区域 Diff，位于 metrics JSON 的 `regions` 数组。

用户提供的 Diff 图、截图红框或文字标注必须转成稳定 region，在对应主检查方向
记录修复前后的 `mae`、`similarity`、`changedPixelRatio`；自动区域不能覆盖时
用同一口径手工计算并说明。修复后的下一轮红框参考图必须删除已冻结区域或标注
已解决。识别 label 区域时按 T11 优先保证语义完整度。

## 红框参考图和 Task 信息

每轮人工循环结束前，基于本轮主检查方向生成红框参考图：

- 以原始 reference image 为底图，不用候选图、Diff 图或截图拼贴。
- 红框圈住完整语义区域（完整 label、完整节点接口、完整注释容器、完整图标
  cluster），不只圈高 Diff 像素块；可带短编号，但不遮挡待检查内容。
- 每个红框编号在 Task 信息中对应一条 region 记录。
- 可接受残留和无语义跳过项通常不加红框；为防下一轮误追而标注时，必须在
  Task 信息中明确写 `accepted` 或 `skip`。
- 推荐路径：
  `output/compare/<key>/<round>-<improvement>-<focus>/<key>-attention-reference.png`。
- 下一轮开始时，必须同时参考上一轮红框图、metrics JSON、候选图和 Diff 图。

Task 信息每轮维护，须稳定到下一轮无需重新询问用户。字段清单（唯一定义处）：

1. dataset key、轮次号、archive 路径、红框参考图路径。
2. 当前主检查方向（sweep 层级或升级方向）。
3. 已主查并冻结的方向。
4. 已重开的方向和重开原因。
5. Backlog 中尚未主查的方向。
6. 红框 region 清单：编号、region 名、bbox、问题分类、违反规则编号、对应
   指标、下一步动作。
7. 用户反馈沉淀：已更新/新增的规则编号、数据集特例、仍待处理项。
8. 本轮退出置信度结论（高/低 + 依据）。
9. 下一轮主检查方向和进入条件。

## 每轮记录模板

字段引用式模板——各字段定义见括号内小节，不在模板中重复罗列：

```text
- Task 信息：按「红框参考图和 Task 信息」字段清单 1–9 逐项更新。
- 证据路径：命令、候选图、原图、Diff 图、metrics JSON、archive、红框图。
- 自动硬门槛：G1–G11 逐项 pass/fail。
- 全图指标：按「Diff 指标」六项。
- 本轮主方向分区域指标：| region | bbox | mae | similarity | maxChannelDiff | changedPixelRatio | note |
- 红框 region 清单：| id | region | bbox | 分类 | 违反规则编号 | 下一步 |
- 方向专项结论：本轮覆盖方向按 L / T / A / Z / I 协议记录并引用规则编号；未覆盖方向不填。
- 误差分类：必须死磕 / 需要优化 / 可接受残留 / 无语义跳过。
- 用户反馈沉淀：反馈 → 处置（更新规则编号 / 新增规则 / 数据集特例）。
- 本轮修复、并行试值、新冻结项、保持冻结项、下一轮计划与退出置信度结论。
```

## 最终输出概要

Workflow 处理新增或实质修改的数据集、渲染器、图标资产或本地化固定布局后，
最终输出必须包含紧凑的 `Loop Fidelity Summary`（5–9 行，可扫读）。它不替代
完整轮次记录；完整证据以最新 Task 信息、metrics JSON、候选图、Diff 图和
archive 为准。未运行循环时必须写 `Loop Fidelity Summary: not run` 并说明原因
（仅文档改动、重复 pending 图、无 dataset/render 变更、环境限制等）。

字段：

- Scope：dataset key、检查语言、是否含图标 crop/vector 或 runtime raster。
- Status：`not run` / `auto checks only` / `in progress` / `converged` / `blocked`。
- Latest round：轮次、主检查方向、archive 路径、metrics JSON 路径。
- Gates：G1–G11 通过/失败摘要。
- Metrics：最新全图 `mae`、`similarity`、`changedPixelRatio`、`diffBoundingBox`。
- Frozen/open：已冻结方向、开放红框 region 或 backlog；无开放项写明 closure。
- Red-box：红框参考图路径，或无开放红框的关闭说明。
- Localization：非默认语言固定布局检查状态；未涉及写 `not applicable`。
- Feedback learning：用户反馈经验更新了哪些规则编号、记录为特例，或不适用。

最终输出引用文件路径即可，不粘贴整份 metrics JSON 或完整 Task 信息。

## 收敛标准

整个保真循环可以结束，必须同时满足：

1. 自动硬门槛（G1–G11）通过。
2. 候选图纯净，没有使用未批准源图像素。
3. 「必须死磕」问题域都已被某轮 sweep 或升级深查覆盖、记录证据并冻结
   （sweep 覆盖即可，不要求每方向单独占一轮）。
4. 冻结清单没有被相关改动或自动回归信号重开。
5. Backlog 为空，或剩余项均为可接受残留、无语义跳过或明确超范围。
6. 本轮主方向分区域 Diff 没有新的结构性高误差区域。
7. 全图 Diff 相较上一轮没有明显可操作改善空间。
8. 用户标注区域已逐一复查，并记录修复前后指标。
9. 新增或修改过的非默认语言覆盖已通过本地化布局检查（Z 系列）。
10. 最新 Task 信息完整，列出所有已主查、已冻结、重开和 backlog 方向。
11. 每个未冻结或刚修复的用户标注区域，有红框记录或明确关闭说明。
12. 用户反馈中的通用经验已沉淀到本文档，特例已记录在 Task 信息中。
13. 可接受残留和所有破例都记录原因。

收敛即退出置信度判断为「高」的正式确认（总则）。收敛不要求全方向人工重查；
全图相似度高不代表可以结束；已冻结且未重开的方向不应在最后一轮重复深查。
图标 vector 子循环的收敛另须满足 I10。

## 人工反馈沉淀

用户指出的错位、遗漏、误判或「看起来不对」的区域，不能只作为一次性修补项。
每次收到人工修正后必须完成闭环：

1. 把用户文字、截图红框或 Diff 标注转成稳定 region，归入一个主检查方向，并
   标注违反的规则编号（无对应规则时标「规则缺口」）。
2. 判断这是通用流程缺口、某类图表的高风险盲点，还是当前数据集特例。
3. 通用缺口/可复用盲点 → 先做规则结构审计：定位现有 owning rule、B 系列盲点、
   上游第 0 轮测量/执行入口，以及下游 sweep/收敛/禁止项。已有 owner 时优先重写
   现有规则并删改冲突的绝对表述；只有确实无归属时才新增编号，禁止在相邻规则
   旁机械追加同义或相反要求。
4. 同步维护受影响的盲点映射、前置测量、执行检查与修复优先级，让一条决策链
   从「怎么量」到「怎么判」再到「怎么修」口径一致；修改后做一次全文冲突检索，
   确认没有旧规则仍要求相反动作。
5. 数据集特例 → 在该轮 Task 信息记录原因、区域、修复方式和是否重开冻结项。
6. 修复后复查用户标注区域，记录修复前后局部指标和视觉结论。
7. 反馈处理轮以反馈项为主方向定向优化（总则），不做泛化重扫。

只有经验已沉淀（规则更新或特例记录）后，才能在最终响应中声称该反馈已处理
完毕；不得只写成聊天总结或临时 TODO。

## 禁止做法

- 用原图或原图裁剪覆盖候选渲染（违反 G1、G4–G7）。
- 未验证 crop 准确性就开始 vector 化或 runtime 输出（违反 I4）。
- 将 `icon-references` crop 直接作为 d3 runtime asset（违反 R9）。
- 为降低 Diff 复制无语义 attribution 内容。
- 用隐藏文本、缩短文本或降低透明度掩盖布局错误。
- 只报告全图相似度，不报告分区域证据。
- 进入下一轮却没有上一轮红框参考图和最新 Task 信息。
- 收到用户修正意见后只修当前像素，或不做归属/冲突审计就机械追加重叠规则。
- 把接口错位、文本不可读或文本越界当成风格差异接受。
- 在没有 Diff 图、metrics JSON 和主方向分区域指标的情况下声称已经收敛。
- 最终输出只写「已通过」「已收敛」，但没有 `Loop Fidelity Summary` 或未运行
  原因。
- 首轮渲染前不做第 0 轮测量，靠多轮渲染逼近节点几何和 link 拓扑。
- 把同一 sweep 层级内一轮能修完的问题拆成多个轮次。
- 「必须死磕」清单已清空后，为 0.0005 量级以下的 similarity 提升开启新轮次
  （违反总则反微调停机规则）。
