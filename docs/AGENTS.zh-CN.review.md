# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照，两份一起更新；生效指令以英文版为准。
本文件只做路由：每条规则只存在于下表的一个属主文档中。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| 快速装载的领域与架构上下文 | `CONTEXT.md`，然后 `docs/architecture/README.md` |
| 数据集生命周期：状态作用域、生命周期对象、Adapter、seal 失效、迁移 | `docs/architecture/dataset-lifecycle.md` |
| 验证/发布架构：证据、baseline、verify/record/publish 语义、CAS、Release | `docs/architecture/verification-publication.md` |
| 机器可读 lifecycle 契约 | `docs/architecture/lifecycle-contract.json`（`pnpm verify:architecture` 强制一致） |
| 已接受的架构决策 | `docs/adr/`（从 `0001-dataset-build-transactions.md` 开始） |
| **输入资产处理流程**：命令、顺序、检查边界、审阅、发布、Git 交接、来源归档、汇报 | `docs/asset-workflow.md`（自动生成的命令/协议表：`docs/workflow-command-reference.md`） |
| 数据集建模规则：Adapter 分型门、来源对象分类、防漏不变量、Source Coverage、对账、陷阱 | `docs/dynamic-dataset-workflow.md` |
| d3 保真机器门槛、审阅者清单、反馈协议 | `docs/fidelity-loop-rules.md`（规则目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs` 生成） |
| 用户反馈过且落地了机器门槛的保真缺陷 | `docs/fidelity-feedback-casebook.md`（协议见 `docs/fidelity-loop-rules.md` §4） |
| 数据集 / SSOT 字段格式 | `data/schema.md` |
| 数据相邻资产（图标 crop、raster annotation） | `data/assets/README.md` |
| Trace 产品与数据模型 | `docs/trace-specification.zh-CN.md` |
| 同目录 Session、工作台、Git 传输、恢复 | `docs/local-environments.md` |
| output/compare 产物保留与清理 | `docs/artifact-retention.md` |
| CI 检查、ChangeImpact 路由、Pages 交接 | `docs/ci-verification.zh-CN.md` |
| Pages 运行数据投影 | `docs/architecture/runtime-data.md` |
| 提交信息 | `docs/commit-messages.md` |
| 人类快速上手与 viewer 使用 | `README.md` |
| 历史流程与已实施方案 | `docs/archive/`（不是现行规则） |

## 目标与范围

把指标资产（PNG 图片或 UTF-8 文字）变成完整、可审计的数据与可用视图。一份来源处理
完成即停在「待人工审阅」；操作员的接受是唯一的闭环决定。

数据集处理遵循 `docs/asset-workflow.md`。代码、文档与只读审阅任务使用相关属主文档和
ChangeImpact 检查，不创建 Build。检查失败只阻断依赖它的步骤：在所属 workspace 中诊断
和修复；只有遇到无法安全推断的决定才暂停；永不绕过来源更正、人工接受、新鲜度或
其他 Session 的所有权。

## 架构边界

修改生命周期、验证器、生成的注册/元数据、baseline 或发布前，先读 `CONTEXT.md` 与
`docs/architecture/README.md`。不得把目标命令或保证说成已经实现。

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
- 新增指标族或 SSOT 时，同步更新本文件、英文版与产品规格。

## 命令

安装一次（渲染验证器使用 Chromium）：

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| 命令 | 作用 |
| --- | --- |
| `pnpm record:workflow -- <action>` | 数据集处理流程：`start`、`continue`、`show`、`review`、`seal`、`feedback`、`refresh`、`archive-list`、`archive` 等（见 `docs/asset-workflow.md`） |
| `pnpm publish:datasets -- plan\|commit` | 检查整批候选并原子切换本机正式版本 |
| `pnpm release:git -- prepare\|inspect\|commit\|push` | 已发布贡献的 Git 交接（`prepare --full` 追加本机浏览器检查） |
| `pnpm record:transport-review -- <id> --input <json>` | 记录对 Git 交接候选的接受 |
| `pnpm verify:release [-- --online --key <key>]` | CI 发布门禁；`--online` 是推送后仅用 HTTP 的线上核对 |
| `pnpm verify:d3 -- <key> [--build <id>] [--language <code>]` | 编写期只读渲染诊断 |
| `pnpm dev` | 8000 端口本机审阅工作台 |
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
| `pnpm clean:artifacts [-- --completed]` | 统计 / 在全部工作完成后清理本机产物 |
| `pnpm record:build` / `record:intake` / `record:fidelity` / `record:verification` / `verify:closeout` | `record:workflow` 内部使用的低层 Build 命令；仅历史 Build 直接使用（`docs/archive/legacy-direct-edit-workflow.md`） |

CI 总是先跑 `pnpm check`，再按 ChangeImpact 选择 app、Pages、渲染和 standalone 检查
（影响未知时全跑）。

## 数据集处理

`docs/asset-workflow.md` 是唯一属主；不要依据其他地方的转述。以下要点仅供定位：

- `record:workflow continue` 跑完全部自动步骤，停在「待人工审阅」；不开浏览器，直接交付
  审阅链接。
- 单份材料任务不跑 `pnpm check` 或浏览器套件；seal 复用已接受的渲染证据；Git 交接把
  浏览器检查交给 CI。
- 操作员的明确通过覆盖审阅、seal 与本机发布；推送指令覆盖继承 Build 接受的 Git 候选。
- 只有操作员的完成信号能在其所指范围内搬移来源；`input/processed/` 只留本机。

多个 Codex / Claude Code Session 共用本检出，不用 worktree；每个 Session 在自己的 Build
workspace 中工作，携带 owner 与 generation（`docs/local-environments.md`）。

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

启动脚本会安装依赖与 Chromium；`pnpm dev` 在后台运行。`input/processed/` 下的参考图只在
本机，因此新检出上 `verify:d3` 会失败，除非恢复了该 key 的参考图；引擎级改动使用
`pnpm verify:render-regression`，它对缺少参考图的 key 跳过相似度。新检出上
`pnpm check`、`pnpm test`、`pnpm verify:app`、`pnpm build:standalone` 与
`pnpm verify:standalone` 均可通过。
