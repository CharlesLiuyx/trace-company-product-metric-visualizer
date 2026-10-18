# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照，两份一起更新；生效指令以英文版为准。
本文件只做路由：每条规则只存在于下表的一个属主文档中。

## 数据集处理

操作员用 `处理{文件名}` 启动数据集任务（`{文件名}` 是 `input/pending/` 中来源的完整
文件名，含扩展名）。该任务只读 `docs/asset-workflow.md` §1–§5、
`docs/dynamic-dataset-workflow.md`、`data/schema.md` 的相关节，以及一个同 Adapter 的
已发布数据集。不加载 `CONTEXT.md` 或 `docs/architecture/`；它们只用于修改生命周期、
验证器和生成物。每个步骤、检查边界、批准与交接都由 `docs/asset-workflow.md` 拥有；
不要依据任何转述。以下三点会改变你的行动：

- facts 文件顶层的 `signals` 数组经 `docs/dynamic-dataset-workflow.md` 的分型门选择
  Adapter；缺少它时 `start` 会静默建成 metric-observation Build。桑基图与收入序列的
  facts 写扁平 `objects[]` 清单（`docs/examples/source-facts.sankey.example.json`）。
- 只有 `record:workflow continue --json` 输出 `fresh` 与 `reviewToken`；依据该输出交付
  审阅链接，不打开浏览器。
- `continue` 到达审阅时会压缩 workspace。操作员反馈后要修改文件，先运行
  `record:workflow materialize <build> --session <owner>`，再修改并重新 `continue`
  （`--session` 持有未释放的 Build 时可省略 `--generation`）。

多个 Codex / Claude Code Session 共用本检出，不用 worktree；每个 Session 在自己的 Build
workspace 中工作，携带 owner 与 generation（`docs/local-environments.md`）。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| 领域词汇与架构上下文（只在修改生命周期 / 验证器 / 生成物时加载） | `CONTEXT.md`，然后 `docs/architecture/README.md` |
| 渲染器自有语义：Hover Share、Comparison Visual Scale、fit/zoom 事务边界 | `CONTEXT.md` |
| 数据集生命周期：状态作用域、生命周期对象、Adapter、seal 失效、迁移 | `docs/architecture/dataset-lifecycle.md` |
| 验证/发布架构：证据、baseline、verify/record/publish 语义、CAS、Release | `docs/architecture/verification-publication.md` |
| 机器可读 lifecycle 契约 | `docs/architecture/lifecycle-contract.json`（`pnpm verify:architecture` 强制一致） |
| 已接受的架构决策 | `docs/adr/`（从 `0001-dataset-build-transactions.md` 开始） |
| **输入资产处理流程**：命令、顺序、检查边界、审阅、发布、Git 交接步骤与 review JSON、来源归档、汇报 | `docs/asset-workflow.md`（自动生成的命令/协议表：`docs/workflow-command-reference.md`） |
| 数据集建模规则：Adapter 分型门与 facts `signals`、扁平来源对象清单、防漏不变量、对账、陷阱 | `docs/dynamic-dataset-workflow.md` |
| d3 保真机器门槛、审阅者清单、反馈协议 | `docs/fidelity-loop-rules.md`（规则目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs` 生成） |
| 用户反馈过且落地了机器门槛的保真缺陷 | `docs/fidelity-feedback-casebook.md`（协议见 `docs/fidelity-loop-rules.md` §4） |
| 数据集 / SSOT 字段格式 | `data/schema.md` |
| 数据相邻资产（图标裁剪流程、raster annotation） | `data/assets/README.md` |
| Trace 产品与数据模型 | `docs/trace-specification.zh-CN.md` |
| 同目录 Session、工作台行为、草稿存储、Git 传输机制（锁、私有 index、journal、恢复） | `docs/local-environments.md` |
| output/compare 产物保留与全部清理 | `docs/artifact-retention.md` |
| CI 检查、ChangeImpact 路由、Pages 部署 | `docs/ci-verification.zh-CN.md` |
| Pages 运行数据投影 | `docs/architecture/runtime-data.md` |
| 提交信息与 Dataset metadata Git hook | `docs/commit-messages.md` |
| 人类快速上手与 viewer 使用 | `README.md` |
| 历史流程与已实施方案 | `docs/archive/`（不是现行规则） |

## 目标与范围

把指标资产（PNG 图片或 UTF-8 文字）变成完整、可审计的数据与可用视图。一份来源处理
完成即停在「待人工审阅」；操作员的接受是唯一的闭环决定。

代码、文档与只读审阅任务使用相关属主文档和 ChangeImpact 检查，不创建 Build。检查失败
只阻断依赖它的步骤：在所属 workspace 中诊断和修复；只有遇到无法安全推断的决定才暂停；
永不绕过来源更正、人工接受、新鲜度或其他 Session 的所有权。

## 架构边界

修改生命周期、验证器、生成的注册/元数据、baseline 或发布前，先读 `CONTEXT.md` 与
`docs/architecture/README.md`。只描述代码已经实现的内容。

- 三个状态作用域：`DatasetBuild`、`PublicationBatch`、`ReleaseAttempt`；Build 内的
  `FidelityRun` 没有正式写入权（ADR-0001）。
- `verify:*` 只读，`record:*` 写 Build 本地状态，`publish:*` 是唯一的正式写入，
  `release:*` 作用于已发布摘要。`compat:baseline` 有意不属于这些类别（旧账本）。
- Git 跟踪 `input/pending/` 与 `input/processing/` 作为共享队列；`input/processed/`
  是被忽略的本机归档，永不 force-add。
- 纯 Metric SSOT：`data/income-statements/<company>.js`、`data/revenue-metrics.js`、
  `data/metric-observations/<source>.json`（目录 `data/metric-observations.js` 由
  `pnpm update:metric-catalog` 生成）。桑基 View Adapter 位于 `data/datasets/<key>.js`；
  节点、连线、布局、颜色和几何不进入 SSOT。公司首个数据集前
  `data/company-metadata/<company>.js` 必须完整。`data/products.js` 是占位；不要把产品
  身份藏进桑基 Adapter。
- 利润表 `operatingMetrics`（ARR、留存、客户数）与会计合计分开；属主：`data/schema.md`、
  `scripts/lib/operating-metrics.mjs`。
- SSOT 的 `<script>` 标签在 `index.html`；Adapter 注册在生成的
  `data/dataset-manifest.js`（永不手改）。`pnpm sync:index-datasets` 修复二者，
  `verify:ssot` 强制一致。
- Pages 把 SSOT 投影为轻量目录加版本化 JSON 详情；修改前先读
  `docs/architecture/runtime-data.md`。
- 领域规范化在 `src/trace-domain.js`；中文数据在 `src/i18n-dictionaries.js`。`src/app/`
  是共享同一作用域的有序经典脚本（顺序见 `index.html`，模块图见 `README.md`）；代码放入
  所属模块。`verify:app-globals` 强制加载顺序与重复声明检查。
- 新增 Adapter、指标族或 SSOT 时，同步更新本文件、英文版与产品规格。

## 命令

安装一次（渲染验证器使用 Chromium）：

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

数据集任务：

| 命令 | 作用 |
| --- | --- |
| `pnpm record:workflow -- <action>` | 数据集处理流程：`start`、`continue`、`materialize`、`show`、`accept`、`feedback`、`refresh`、`archive-list`、`archive` 等（`docs/asset-workflow.md`） |
| `pnpm publish:datasets -- plan\|commit` | 检查整批候选并原子切换本机正式版本 |
| `pnpm release:git -- prepare\|inspect\|commit\|push` | 已发布贡献的 Git 交接（`prepare --full` 追加本机浏览器检查） |
| `pnpm record:transport-review -- <id> --input <json>` | 记录对 Git 交接候选的接受 |
| `pnpm verify:release [-- --online --key <key>]` | CI 发布门禁；`--online` 是推送后仅用 HTTP 的线上核对 |
| `pnpm verify:d3 -- <key> [--build <id>] [--language <code>]` | 编写期只读渲染诊断 |
| `pnpm dev` | 8000 端口本机审阅工作台 |
| `pnpm clean:artifacts [-- --completed \| --derived]` | 统计 / 清理本机产物（`--derived`：可再生产物，`pnpm dev` 运行中也可执行；`--completed`：全部工作完成后） |

代码与文档任务：

| 命令 | 作用 |
| --- | --- |
| `pnpm check` | 不渲染的快速聚合门（语法、测试、契约、SSOT、i18n、元数据）；每次代码/文档修改跑一次 |
| `pnpm test` | node:test 单元测试 |
| `pnpm verify:app` | 无头 viewer 启动与交互冒烟 |
| `pnpm verify:architecture` | 生命周期契约、文档归属与漂移防护（属于 `check`） |
| `pnpm verify:render-regression [-- <keys>]` | 对照 `data/render-baselines.json` 的只读渲染回归 |
| `pnpm build:site` / `pnpm verify:site` | 构建 / 浏览器检查 Pages 投影 |
| `pnpm build:standalone` / `pnpm verify:standalone` | 自包含 HTML 及其检查 |
| `pnpm sync:index-datasets` | 同步 `index.html` 的 SSOT 标签与数据集清单 |
| `pnpm update:fidelity-rules-doc` | 重新生成保真规则目录区 |
| `pnpm plan:ci -- --base <sha> --head <sha>` | 把一段 diff 分类为 CI 验证计划 |

CI 总是先跑 `pnpm check`，再按 ChangeImpact 选择 app、Pages、渲染和 standalone 检查
（影响未知时全跑）。

## d3-Sankey 保真

`docs/fidelity-loop-rules.md` 拥有机器保真门槛（由规则 catalog 生成）与审阅者清单；其他
文档可以引用规则 ID，但不得重写公式或阈值。每次用户更正都要修复；若确定性的机器门槛本可
发现它，就新增或扩展门槛并补测试，并在 `docs/fidelity-feedback-casebook.md` 登记一行。
只有机器证据时报告为 `review-pending`。

## 提交信息

遵循 `docs/commit-messages.md`：轻量 Conventional Commits（`<type>(<scope>): <summary>`，
英文小写）。数据集 Adapter、清单注册与 tracked 队列变化一起提交；可复用的渲染器支持
放在之前的 `render(engine)` 提交中。

## 新检出与云端 Agent

Codex / Claude 云环境的启动配置在仓库外；用上面的命令安装，并在后台运行 `pnpm dev`。
`input/processed/` 下的参考图只在本机，因此新检出上 `verify:d3` 会失败，除非恢复了该 key
的参考图；引擎级改动使用 `pnpm verify:render-regression`，它对缺少参考图的 key 跳过
相似度。新检出上 `pnpm check`、`pnpm test`、`pnpm verify:app`、`pnpm build:standalone`
与 `pnpm verify:standalone` 均可通过。
