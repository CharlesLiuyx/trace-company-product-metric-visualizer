# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照。两份文件必须一起更新；实际生效的
agent 指令以英文版 `AGENTS.md` 为准。

本仓库的 agent 工作指引。本文件负责“路由”：每条细则只存在于一个属主文档中，
本文件给出工作流概览、以及每个领域的一行摘要和指针。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| 动态数据集工作流：流水线步骤、执行模型（并行组、agent 分派）、输入类型对象清单、操作陷阱、回复前验证清单、汇报 | `docs/dynamic-dataset-workflow.md` |
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
- 按公司拆分的 SSOT 文件必须在 `index.html` 注册 `<script>` 标签；数据集
  adapter 则注册在生成的 `data/dataset-manifest.js`（禁止手改），由
  `src/dataset-registry.js` + `src/app/dataset-loader.js` 在 viewer 中
  渐进加载。`verify:ssot` 对两个注册面都强制磁盘 ↔ 注册一致性，
  `pnpm sync:index-datasets` 负责修复。
- `data/products.js` 是未来一等 Product SSOT 的空占位（暂不被 verifier
  校验）。不要把产品身份或归属历史藏进 Sankey adapter。
- Trace 领域归一化放在 `src/trace-domain.js`；中文翻译数据放在
  `src/i18n-dictionaries.js`（先于 `src/i18n.js` 加载，后者只保留语言
  中立的规则管线）。查看器应用拆分在 `src/app/` 下，以经典 script 顺序
  加载并共享同一顶层作用域（加载顺序见 `index.html`）：`dom`、`util`、
  `dataset-loader`、`hotkeys`、`i18n-runtime`、`state`、`selectors`、
  `financial`、`chart-theme` 为基础层；`shell`、`controls`、
  `company-panel`、`period-panel`、`tables`、`trend`、`comparison-zoom`、
  `comparison-metric-trend`、`sankey`、`exports` 各自负责一个 UI 关注点；
  `main.js` 负责全局事件接线并最后启动。新查看器代码放进对应归属模块
  （模块表见 `README.md` §How it's built）。加载期代码只能引用更早的
  script，运行期调用不受方向限制——该约束与跨文件重复顶层声明由
  `pnpm check` 静态强制（`verify:app-globals`）。
- 新增 metric 家族或 SSOT 时，回填本文件（及英文版）与
  `docs/trace-specification.zh-CN.md`。

## 命令

安装一次；d3 与 standalone 校验器用 Chromium 渲染：

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 零依赖本地静态服务器，端口 8000 |
| `pnpm check` | 快速聚合门：全仓 JS 语法扫描、单元测试，然后 pending 守卫、app 全局静态门、dataset manifest 新鲜度、SSOT 奇偶、i18n 覆盖、metadata 新鲜度（秒级，无渲染）；可复现——任何 fresh checkout 上都应全绿，CI 每次 push 都会运行 |
| `pnpm test` | `tests/` 下的 node:test 单元测试——引擎布局数学与标签排版、trace-domain 解析/汇率、i18n 翻译规则、png-diff 指标、script-source 解析、dataset registry |
| `pnpm verify:app` | 模块化查看器（`src/app/*`）的无头启动 + 交互冒烟：模块数量、持久化偏好启动、hash 路由、对比缩放 + 指标趋势、收入趋势、移动端视口 |
| `pnpm verify:app-globals` | 共享顶层作用域契约的静态门：跨文件重复顶层声明、加载期引用晚加载 script（也包含在 `pnpm check` 中） |
| `pnpm check:pending` | 待处理图片重复 / key 冲突守卫 |
| `pnpm sync:index-datasets` | 同步全部数据注册面与磁盘：`index.html` SSOT `<script>` 标签（损益表、公司档案）与生成的 dataset manifest（`--check` 只报告漂移） |
| `pnpm update:dataset-manifest` / `pnpm verify:dataset-manifest` | 重新生成 / 校验 `data/dataset-manifest.js`（数据集注册 SSOT） |
| `pnpm verify:dataset -- <key> [--skip-render]` | 单数据集聚合门：语法、SSOT、strict i18n、metadata，然后每种语言各一次 d3 渲染 |
| `pnpm verify:ssot` | SSOT ↔ 数据集奇偶 + 注册奇偶 + 货币/单位与汇率覆盖（全局） |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n 覆盖检查 |
| `pnpm verify:d3 -- <key> [--focus <dir>] [--keep] [--language <code>] [--round <n>]` | 单次 d3 渲染 + 自动硬门槛；每轮归档到 `output/compare/<key>/` |
| `pnpm verify:render-regression [-- <keys>] [--update]` | 批量渲染全部注册数据集过纯度/尺寸硬门槛，并对照 `data/render-baselines.json` 拦截 similarity 下降；`--update` 重录基线（参考图 local-only，无 `input/processed/` 的机器只跑硬门槛） |
| `pnpm update:dataset-file-metadata` | 从 git 提交时间重新生成 `data/dataset-file-metadata.js`（提交新/改数据集后需重跑并提交刷新结果） |
| `pnpm verify:dataset-file-metadata` | 生成的 metadata 是否为最新 |
| `pnpm build:standalone` | 构建自包含 HTML（先刷新 metadata；内联全部数据集 adapter） |
| `pnpm verify:standalone` | standalone 产物不依赖任何同级文件 |
| `sh scripts/clean-compare.sh` | 清理临时 `compare/` 工作区 |

CI（`.github/workflows/ci.yml`）在每次 push 到 `main` 与每个 pull request
上运行 `pnpm check`、`verify:app`、一次 `verify:d3` 冒烟渲染、
`verify:render-regression`，以及 standalone 构建 + 验证。

## 工作流

把一张 pending 图片变成已验证数据集分五个阶段。完整的编号流水线、操作陷阱、
最终回复前的验证清单与汇报要求都在 `docs/dynamic-dataset-workflow.md`——处理 pending
图片之前先加载它。

1. 接入与守卫——运行 `pnpm check:pending`，然后确定 `<公司>-<期间>` key，把
   PNG 移到 `input/processed/<dataset-key>.png`。
2. 源盘点与数据 SSOT——先粗看全图：按工作流文档的对象类型清单判定输入类型
   （含收入指标类的纯数据支线）并盘点全部对象；然后并行推进公司档案（该
   公司的第一个数据集）、`data/income-statements/<company-key>.js` 记录，
   以及可选的图标 crop/vector 子循环。
3. Adapter 与 i18n——按第 2 阶段盘点清单逐对象精细测量、对照源图片编写
   `data/datasets/<dataset-key>.js`，添加 `i18n.<language>` 覆盖，然后用
   `pnpm sync:index-datasets` 注册（重新生成 dataset manifest）。
4. 验证——运行 `pnpm verify:dataset -- <dataset-key>`，然后人工 d3 保真循环
   （`docs/fidelity-loop-rules.md`），最后用
   `pnpm verify:render-regression -- --update` 记录渲染基线。
5. 收尾——`pnpm check` 全绿，`input/pending/` 恢复为只剩 `.gitkeep`，然后按
   `docs/commit-messages.md` 提交。

每次最终回复之前，满足 `docs/dynamic-dataset-workflow.md` 中的回复前验证清单与汇报
要求。

## d3-Sankey 保真循环

`docs/fidelity-loop-rules.md` 是保真循环行为的唯一事实来源。运行或汇报任何
循环之前先加载它。用户提出的每个保真修正都要视为流程改进信号：按其
人工反馈沉淀闭环，把经验泛化进该规则文件，或在循环 Task 信息中记录数据集
特例。每个人工轮次都要维护当前 Task 信息；注意区域未关闭时，为下一轮产出
红框参考图。

## 提交信息

遵循 `docs/commit-messages.md`：轻量 Conventional Commits
（`<type>(<scope>): <summary>`，英文小写摘要）。type/scope 表格、以及
“新数据集的处理后 PNG、adapter 与 manifest 注册放进同一个
`data(<key>)` 提交、可复用渲染器支持拆成前置 `render(engine)` 提交”的
规则都由该文档拥有。

## Cursor Cloud 专用说明

环境是静态站点加 Node 工具链：依赖（`pnpm install --frozen-lockfile`）和
固定版本的 Playwright Chromium（`pnpm exec playwright install chromium`）
由启动更新脚本刷新，无需重新安装。本 VM 的非显性注意事项：

- 用 `pnpm dev` 运行应用（`http://127.0.0.1:8000` 上的零依赖静态服务器）。
  它是长驻进程——在后台/tmux 会话中启动，不要用阻塞的前台调用。
- `input/processed/` 下的参考图只部分提交入库；许多数据集的 PNG 留在其
  作者本机。对这些 key，`pnpm verify:d3 -- <key>` 会在复制参考图时因
  ENOENT 失败。引擎级改动请改用 `pnpm verify:render-regression`：它渲染
  所有已注册数据集、应用硬门禁，并对缺本地参考图的 key 跳过相似度计分。
- `pnpm check`、`pnpm test`、`pnpm verify:app`、`pnpm build:standalone`、
  `pnpm verify:standalone`，以及对有本地参考图的数据集（如
  `airbnb-q1-fy26`）跑 `pnpm verify:d3`，在全新检出上全部绿色。
