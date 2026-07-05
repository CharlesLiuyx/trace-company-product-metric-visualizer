# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照。两份文件必须一起更新；实际生效的
agent 指令以英文版 `AGENTS.md` 为准。

本仓库的 agent 工作指引。本文件负责"路由"：每条细则只存在于一个属主文档中，
本文件给出工作流、一行摘要和指针。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| d3 保真循环：硬门槛、diff 指标、迭代、图标 crop/vector 子循环、本地化布局检查、Task 信息、红框图、Loop Fidelity Summary | `docs/fidelity-loop-rules.md` |
| 数据集 / SSOT 字段级格式 | `data/schema.md` |
| 提交信息约定 | `docs/commit-messages.md` |
| 数据相邻资产布局（图标 crop、raster annotation） | `data/assets/README.md` |
| Trace 产品与数据模型 | `docs/trace-specification.zh-CN.md` |
| 人类快速上手、viewer 使用 | `README.md` |

## 目标

把 `input/pending/` 中的损益表参考图片转换为稳定的 Sankey 数据集和可复用的
图标资产，然后通过 d3-sankey 保真循环验证。

## 架构边界

- `data/income-statements/<company-key>.js`（损益表家族，按公司分文件）与
  `data/revenue-metrics.js`（收入家族）是纯 Metric SSOT；
  `data/datasets/<dataset-key>.js` 是 Sankey View Adapter 层——viewer、
  standalone 构建器与各 verifier 都依赖这个稳定路径。SSOT 中不得出现
  Sankey 的 nodes、links、layout、render、SVG、颜色或像素几何。
- `data/company-metadata/<company-key>.js` 是公司档案 SSOT（每公司一个
  文件，文件名即档案 `key`），驱动 Table 视图；必须在该公司第一个数据集
  注册之前补全。
- 按公司拆分的 SSOT 文件必须在 `index.html` 注册 `<script>` 标签；
  `verify:ssot` 强制磁盘 ↔ 注册一致性，`pnpm sync:index-datasets` 负责修复。
- `data/products.js` 是未来一等 Product SSOT 的空占位（暂不被 verifier
  校验）。不要把产品身份或归属历史藏进 Sankey adapter。
- Trace 领域归一化放在 `src/trace-domain.js`。查看器应用拆分在 `src/app/`
  下，以经典 script 顺序加载并共享同一顶层作用域（加载顺序见
  `index.html`）：`dom`、`util`、`hotkeys`、`i18n-runtime`、`state`、
  `selectors`、`financial`、`chart-theme` 为基础层；`shell`、`controls`、`company-panel`、
  `period-panel`、`tables`、`trend`、`comparison-zoom`、
  `comparison-metric-trend`、`sankey`、`exports` 各自负责一个 UI 关注点；
  `main.js` 负责全局事件接线并最后启动。新查看器代码放进对应归属模块
  （模块表见 `README.md` §How it's built）；加载期代码只能引用更早的
  script，运行期调用不受方向限制。
- 新增 metric 家族或 SSOT 时，回填本文件（及英文版）与
  `docs/trace-specification.zh-CN.md`。

## 命令

安装一次；d3 与 standalone 校验器用 Chromium 渲染：

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 零依赖本地静态服务器，端口 8000 |
| `pnpm check` | 快速聚合门：全仓 JS 语法扫描，然后 pending 守卫、SSOT 奇偶、i18n 覆盖、metadata 新鲜度（亚秒级，无渲染） |
| `pnpm verify:app` | 模块化查看器（`src/app/*`）的无头启动 + 交互冒烟：模块数量、持久化偏好启动、hash 路由、对比缩放 + 指标趋势、收入趋势、移动端视口 |
| `pnpm check:pending` | 待处理图片重复 / key 冲突守卫 |
| `pnpm sync:index-datasets` | 保持顺序地同步 `index.html` 数据 `<script>` 标签与 `data/datasets/`、`data/income-statements/`、`data/company-metadata/`（追加缺失、删除失效；`--check` 只报告漂移） |
| `pnpm verify:dataset -- <key> [--skip-render]` | 单数据集聚合门：语法、SSOT、strict i18n、metadata，然后每种语言各一次 d3 渲染 |
| `pnpm verify:ssot` | SSOT ↔ 数据集奇偶 + 注册奇偶 + 货币/单位与汇率覆盖（全局） |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n 覆盖检查 |
| `pnpm verify:d3 -- <key> [--focus <dir>] [--keep] [--language <code>] [--round <n>]` | 单次 d3 渲染 + 自动硬门槛；每轮归档到 `output/compare/<key>/` |
| `pnpm update:dataset-file-metadata` | 重新生成 `data/dataset-file-metadata.js` |
| `pnpm verify:dataset-file-metadata` | 生成的 metadata 是否为最新 |
| `pnpm build:standalone` | 构建自包含 HTML（先刷新 metadata） |
| `pnpm verify:standalone` | standalone 产物不依赖任何同级文件 |
| `sh scripts/clean-compare.sh` | 清理临时 `compare/` 工作区 |

## 新数据集流水线

1. 守卫：运行 `pnpm check:pending`（忽略 `.gitkeep`）。`input/processed/`
   中存在完全相同内容、或候选 key 冲突，都是停止条件——只报告，不要对该
   图片执行任何移动、创建、更新、裁切或验证。如果最终稳定 key 与脚本候选
   key 不同，继续前还要用最终 key 检查 `input/processed/`、
   `data/datasets/`、`data/income-statements/` 和 `index.html`。
2. Key：小写 kebab-case，公司 + 期间，例如 `nvidia-q4-fy26`。
3. 图片：把源 PNG 移到 `input/processed/<dataset-key>.png`，并把
   `meta.referenceImage` 设为该图片及其精确源尺寸。
4. 公司（该公司的第一个数据集）：创建
   `data/company-metadata/<company-key>.js` 档案——描述、行业板块、行业、
   成立时间、总部、财年结束、官网、代码/交易所、市值（含 as-of/来源）与
   来源 URL——并为每个非默认语言添加本地化档案字段，同时在 `index.html`
   注册。字段细节见 `data/schema.md`。
5. SSOT：向 `data/income-statements/<company-key>.js` 添加记录（新公司需
   创建该文件并在 `index.html` 注册）——只含可比的报告总额、明细项、注释、
   币种、单位、期间与源图片。
6. Adapter：按 `data/schema.md` 编写 `data/datasets/<dataset-key>.js`，
   作为高保真 adapter，对照源图片调校显式 `nodes`、`links`、
   `layout.nodes` 与 `layout.labels`。先把每个语义标签单元（名称、数值、
   注释、利润率、同比）归入同一 node/label 意图，再拆分 blocks 或换行；
   保留源图的数值与注释；成本保持正数（`type: 'cost'` 渲染为括号值）；
   出版方水印、创作者品牌、URL 与署名块视为有意跳过的残差，不是渲染目标；
   当源图展示可矢量化的公司 logo 时设置 `meta.logoSvg`。
7. 图标（源图含公司或业务/分部图标时）：编写
   `input/icon-crop-specs/<dataset-key>.json`，运行
   `python3 scripts/extract_icon_crops.py --spec <该文件>`；脚本移除纯色
   裁切背景，输出透明的参考 crop、验证清样与 `crop-report.json` 到
   `data/assets/icon-references/<company>/`。只有主体完整、视觉居中、无
   无关内容时才接受 crop；不满足则重裁，验收记录写入
   `model-validation.md`。提取每一个语义相关的图标簇（跳过水印、署名与
   没有独立图标的分部如 "Others"）。源图标与既有 SVG/vector 资产实质相似
   时优先复用；通用语义用 `src/icons.js` 的 Lucide 图标。优先矢量转换；
   raster 嵌入只允许用于通过 `runtimeOutputDir` 写出的已验证图标簇。
   crop/vector 迭代与 raster 白名单规则：`docs/fidelity-loop-rules.md`；
   目录布局：`data/assets/README.md`。
8. i18n：英文是规范语言。为 `window.SANKEY_I18N.languageCodes` 中每个非
   默认语言添加 `i18n.<language>` 覆盖——绝不创建平行数据集文件——覆盖
   数据集 `name`、`meta` 字段、节点标签/注释、以及每一行会因翻译而变化的
   固定 `layout.labels` 或注释文本，同时本地化对应的 SSOT 标签/注释与公司
   档案。覆盖只做显示层：绝不改变数值、links、节点几何、财务总额、源图片
   或验证语义。
9. 注册：在 `index.html` 中把 `<script>` 标签加在依赖项和被复用数据集之后。
   数据集中有意不翻译的子品牌注释词在 `i18n.preservedAnnotationText` 中
   声明（见"陷阱"一节）。
10. 运行 `pnpm verify:dataset -- <dataset-key>`。
11. 按 `docs/fidelity-loop-rules.md` 运行人工保真循环，每个非默认语言含
    一轮本地化布局主检查。
12. 保持 `input/pending/` 只剩 `.gitkeep`。

## 陷阱与硬约束

- 自动硬门槛（11 条：引擎输出纯度、画布尺寸、字体、无 raster 规则、
  label-node 间距、SSOT/i18n 一致性）只在
  `docs/fidelity-loop-rules.md` §自动硬门槛 中枚举——调布局之前先读，
  不要等跑挂了再读。
- Label-node 间距目标 5px；渲染 bbox 间隙低于 4px、或短辅助柱中心偏移
  超过 4px，都是自动硬失败。细节与 bbox 审计流程见
  `docs/fidelity-loop-rules.md`。
- `verify:i18n --strict` 只证明覆盖存在，不证明视觉正确。每个非默认语言
  都要用 `verify:d3 --language <code>` 渲染，并检查文本边界
  （`getBBox()` 或等价手段）：混排残留、缩写/标点破损、重叠、出画布。
  高危字符串（`R&D`、`SG&A`、含 `&` 的标签、金额后缀）见
  `docs/fidelity-loop-rules.md` §本地化布局。
- `annotationsSvg` 品牌文本：整段命中公司 name、legalName 或 alias 词时
  自动豁免 i18n fallback 检查；其余有意不翻译的词（如子品牌 `aws`）必须
  在数据集的 `i18n.preservedAnnotationText` 中声明。不要扩展
  `scripts/verify-i18n.mjs` 中已冻结的遗留清单。
- 在任何位置都保持原文的品牌/产品词（YouTube、iPhone、`Microsoft 365`…）
  在 `EXACT_ZH` 词典（`src/i18n.js`）中以恒等映射声明一次；
  `verify:i18n` 会在所有路径（标签、注释、布局行、annotations）上把
  恒等映射词视为已翻译。
- 注册奇偶由 `verify:ssot` 强制：`data/datasets/` 下每个文件都必须在
  `index.html` 注册，除非列入 `UNREGISTERED_DATASET_SCRIPTS`
  （`scripts/script-sources.mjs`）。
- `data/assets/icon-references/` 下的 crop 只是参考/转换资产，绝不能被
  d3 运行时输出引用；运行时 raster 放在
  `data/assets/raster-annotations/<company>/`。
- 数据集 key 确定后，处理过的图片绝不改名。
- 可分享的最终 HTML 产物必须是 `pnpm build:standalone` 的输出：完全自
  包含，运行时不需要同级 CSS/JS/字体/数据/PNG 文件。

## d3-Sankey 保真循环

`docs/fidelity-loop-rules.md` 是保真循环行为的唯一事实来源。运行或汇报任何
循环之前先加载它。用户提出的每个保真修正都要视为流程改进信号：按其
人工反馈沉淀闭环，把经验泛化进该规则文件，或在循环 Task 信息中记录数据集
特例。每个人工轮次都要维护当前 Task 信息；注意区域未关闭时，为下一轮产出
红框参考图。

## 提交信息

遵循 `docs/commit-messages.md`：轻量 Conventional Commits
（`<type>(<scope>): <summary>`，英文小写摘要）。type/scope 表格、以及
"新数据集的处理后 PNG、adapter 与 `index.html` 注册放进同一个
`data(<key>)` 提交、可复用渲染器支持拆成前置 `render(engine)` 提交"的
规则都由该文档拥有。

## 验证清单

始终，在最终回复之前：

- `pnpm check` 通过（全仓 JS 语法扫描、pending 守卫、SSOT 奇偶、i18n
  覆盖、dataset-file-metadata 新鲜度）。
- `input/pending/` 只剩 `.gitkeep`，或已报告停止条件。

对查看器改动（`src/app/`、`index.html` script 顺序、`src/app.css`）：

- `pnpm verify:app` 通过——它是共享顶层作用域模块拆分的加载顺序与
  跨模块接线回归门。

对新增或实质变更的数据集：

- `pnpm verify:dataset -- <dataset-key>` 通过（语法、SSOT、strict i18n、
  metadata、每种语言各一次 d3 渲染）。
- 已按 `docs/fidelity-loop-rules.md` 运行人工保真循环，维护了当前 Task
  信息和红框参考图或关闭说明。
- 每个非默认语言的渲染 SVG 都经过目视检查——聚合命令不能替代这一步。

如果提取了图标资产：crop 脚本通过，`crop-report.json` 中每个 crop 都
`passes: true`，验证清样已复核，`model-validation.md` 记录了验收，每个
相关图标簇都已提取或记录为跳过。

如果需要 standalone 产物：`pnpm build:standalone` 然后
`pnpm verify:standalone` 通过。

## 汇报

最终回复中包含：

- 改动的文件，以及纯数据 SSOT 是否更新。
- 提取了哪些图标资产，所有相关图标簇是否都已覆盖。
- 数据集或渲染器变更：`docs/fidelity-loop-rules.md` 要求的紧凑 Loop
  Fidelity Summary、最新 Task 信息与红框参考图状态——或说明为何没有运行
  循环。
- 用户反馈经验是改进了 `docs/fidelity-loop-rules.md`，还是记录为数据集
  特例。
- 无法运行的命令。
