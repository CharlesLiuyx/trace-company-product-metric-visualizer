# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照。两份文件必须一起更新；实际生效的
agent 指令以英文版 `AGENTS.md` 为准。

本仓库的 agent 工作指引。本文件负责“路由”：每条细则只存在于一个属主文档中，
本文件给出工作流概览、以及每个领域的一行摘要和指针。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| 动态数据集工作流：流水线步骤、操作陷阱、回复前验证清单、汇报 | `docs/dynamic-dataset-workflow.md` |
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
  `selectors`、`financial`、`chart-theme` 为基础层；`shell`、`controls`、
  `company-panel`、`period-panel`、`tables`、`trend`、`comparison-zoom`、
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
| `pnpm check` | 快速聚合门：全仓 JS 语法扫描、单元测试，然后 pending 守卫、SSOT 奇偶、i18n 覆盖、metadata 新鲜度（秒级，无渲染） |
| `pnpm test` | `tests/` 下的 node:test 单元测试——引擎布局数学、trace-domain 解析/汇率、i18n 翻译规则、png-diff 指标、script-source 解析 |
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

## 工作流

把一张 pending 图片变成已验证数据集分五个阶段。完整的编号流水线、操作陷阱、
最终回复前的验证清单与汇报要求都在 `docs/dynamic-dataset-workflow.md`——处理 pending
图片之前先加载它。

1. 接入与守卫——运行 `pnpm check:pending`，然后确定 `<公司>-<期间>` key，把
   PNG 移到 `input/processed/<dataset-key>.png`。
2. 数据 SSOT——公司档案（该公司的第一个数据集）、
   `data/income-statements/<company-key>.js` 记录，以及可选的图标
   crop/vector 子循环。
3. Adapter 与 i18n——对照源图片编写 `data/datasets/<dataset-key>.js`，添加
   `i18n.<language>` 覆盖，并在 `index.html` 注册 `<script>`。
4. 验证——运行 `pnpm verify:dataset -- <dataset-key>`，然后人工 d3 保真循环
   （`docs/fidelity-loop-rules.md`）。
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
“新数据集的处理后 PNG、adapter 与 `index.html` 注册放进同一个
`data(<key>)` 提交、可复用渲染器支持拆成前置 `render(engine)` 提交”的
规则都由该文档拥有。
