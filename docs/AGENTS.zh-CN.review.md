# AGENTS.md 中文同步镜像

本文件是根目录 `AGENTS.md` 的完整中文对照。两份文件必须一起更新；实际生效的
agent 指令以英文版 `AGENTS.md` 为准。

本仓库的 agent 工作指引。本文件负责“路由”：每条细则只存在于一个属主文档中，
本文件给出工作流概览、以及每个领域的一行摘要和指针。

## 规则归属表

| 规则领域 | 属主文档 |
| --- | --- |
| 快速装载的领域与架构上下文 | `CONTEXT.md`，然后 `docs/architecture/README.md` |
| 目标数据集生命周期：状态作用域、生命周期对象、输入类型 Adapter、seal 失效、迁移 | `docs/architecture/dataset-lifecycle.md` |
| 目标验证/发布架构：证据、baseline、verify/record/publish 语义、CAS、Release | `docs/architecture/verification-publication.md` |
| 机器可读 lifecycle protocol/state/Adapter 契约 | `docs/architecture/lifecycle-contract.json`（由 `pnpm verify:architecture` 强制奇偶） |
| 已接受的架构决策 | `docs/adr/`（从 `docs/adr/0001-dataset-build-transactions.md` 开始） |
| 动态数据集工作流：流水线步骤、执行模型（并行组、agent 分派）、输入类型对象清单、操作陷阱、回复前验证清单、汇报 | `docs/dynamic-dataset-workflow.md` |
| d3 保真：canonical 编号规则、preflight 测量、三层 sweep 状态机、自动/人工证据、接受条件 | `docs/fidelity-loop-rules.md`（其规则目录区为生成视图）；规则语义 SSOT：`scripts/lib/fidelity-rules-catalog.mjs` + 派生契约 `scripts/lib/fidelity-rule-contract.mjs`；用 `pnpm update:fidelity-rules-doc` 重新生成（`pnpm verify:architecture` 强制新鲜与一致） |
| 历史用户反馈案例：根因、现行防线、复发升级路径（跨检出复发记忆） | `docs/fidelity-feedback-casebook.md`（登记/消费协议属主为 `docs/fidelity-loop-rules.md` §5） |
| 数据集 / SSOT 字段级格式 | `data/schema.md` |
| 提交信息约定 | `docs/commit-messages.md` |
| 数据相邻资产布局（图标 crop、raster annotation） | `data/assets/README.md` |
| Trace 产品与数据模型 | `docs/trace-specification.zh-CN.md` |
| 人类快速上手、viewer 使用 | `README.md` |
| CI 检查作用、ChangeImpact 路由、性能基线、Pages artifact 交接 | `docs/ci-verification.zh-CN.md` |

## 目标

把 `input/pending/` 中的损益表参考图片转换为稳定的 Sankey 数据集和可复用的
图标资产，然后通过 d3-sankey 保真循环验证。

## 架构边界

修改数据集生命周期、verifier 编排、生成的注册/metadata、baseline、standalone
Release 或其文档之前，先加载 `CONTEXT.md` 与
`docs/architecture/README.md`。architecture 目录明确区分当前
Implementation 与已接受的目标架构。在某个迁移里程碑落地之前，下面的命令与
操作步骤仍然权威；不得把目标命令或原子性保证说成已经存在。

- 目标架构拆分三个状态作用域：`DatasetBuild`、`PublicationBatch` 与
  `ReleaseAttempt`。build-local `FidelityRun` 只产出证据，没有 canonical
  写权限。治理该决定的文档是
  `docs/adr/0001-dataset-build-transactions.md`。
- 在命令词汇中，`verify:*` 只读，`record:*` 只写 build-local 证据或
  staging，`publish:*` 是唯一 canonical mutation，`release:*` 只作用于
  已发布 digest。已实现的 `verify:*` / `record:*` 命令均满足该契约；
  `compat:baseline` 因在 M4 Publication 落地前仍要改 canonical baseline
  ledger，被刻意命名在四类之外；`publish:*` / `release:*` 仍是未实现的
  目标词汇。
- Git 跟踪 `input/pending/` 与 `input/processing/` 中的 Source 文件，让共享
  队列与活动 claim 能在多个项目检出之间可见。`input/processed/` 是被忽略的
  本机归档；不得 force-add 其中内容。Git 可见性只是传输机制，不是生命周期授权。

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
  按需加载。`verify:ssot` 对两个注册面都强制磁盘 ↔ 注册一致性，
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
| `pnpm plan:ci -- --base <sha> --head <sha>` | 把 Git diff 保守分类为 CI 验证计划；缺 SHA 或未知可执行影响一律回退完整浏览器套件 |
| `pnpm check` | 快速聚合门：全仓 JS 语法、单元测试、pending 守卫、architecture/app-global 契约、manifest 与 render-baseline 结构新鲜度、SSOT 奇偶、i18n 与 metadata 新鲜度（秒级，无渲染）；`input/processing/` 中的在途文件不会让这个全局门失败；fresh checkout 可复现且由 CI 运行 |
| `pnpm test` | `tests/` 下的 node:test 单元测试——Source claim/relocation、引擎布局数学与标签排版、trace-domain 解析/汇率、i18n 翻译规则、png-diff 指标、script-source 解析、dataset registry |
| `pnpm verify:app` | 模块化查看器（`src/app/*`）的无头启动 + 交互冒烟：模块数量、持久化偏好启动、hash 路由、对比缩放 + 指标趋势、收入趋势、移动端视口 |
| `pnpm verify:app-globals` | 共享顶层作用域契约的静态门：跨文件重复顶层声明、加载期引用晚加载 script（也包含在 `pnpm check` 中） |
| `pnpm verify:architecture` | 强制生命周期 protocol/state/Adapter 奇偶、命令 mutation 语义、架构路由和本地上下文文档链接（也包含在 `pnpm check` 中） |
| `pnpm check:pending [-- --file input/pending/<file>.png --key <final-key>]` | pending 重复 / 活动 processing claim / processed 与 key 冲突守卫；单个 Build 用 `--file`，定名后加 `--key`，全部省略时只审计共享队列 |
| `pnpm record:intake -- <pending.png> --key <key> --adapter <kind> [--availability <policy>]` | 选中项守卫通过后，记录忽略的 per-item `INTAKED` Build manifest，并立即以 no-clobber 方式把 Source 领取到 `input/processing/<key>.png`；这不是 Publication |
| `pnpm record:build -- prepare-review <build-id> --input <review-input.json>` | 对 authored artifacts 取 hash，持久化对象盘点与 Verification Plan，把 Build 推进到 `AUTHORED` 并返回 `reviewToken`；这一步不记录人工接受 |
| `pnpm record:verification -- <build-id> [--json]` | 运行非渲染的数据一致性 profile，并记录 Build-bound `dataset-verification/v1` 证据；返回的 reference 必须传给 `finish` |
| `pnpm record:fidelity -- <key> --focus <stage-focus> [--language <code> ...] --build <build-id>` | 持久化 Build-bound 自动证据为 `evidence-ready`;`--focus` 必须是 canonical stage focus(`structure-sweep`、`text-sweep`、`polish-l10n-sweep`、`closeout-refresh`);`--language` 可重复,一条命令内逐 locale 各产生一个 run;不带 `--build` 的显式 focus 产物仅为旧兼容证据,不能关闭 Build |
| `pnpm record:build -- finish <build-id> --review <review.json>` | 消费 `reviewToken`（兼容旧 `packetDigest`）、自动证据、人工 attestation、region/risk/feedback 决定与 Interface Matrix；只有 accepted `FidelityResult` 才推进到 `CLOSED` |
| `pnpm record:build -- stage-baseline <build-id> --input <baseline.json>` | 记录 build-local、仅供未来回归的 baseline stage；Revenue Metric 会显式记录 `notApplicable` |
| `pnpm record:build -- seal <build-id>` | 内部重算 artifact 新鲜度并重跑 Adapter final profile（非渲染一致性 + Income Statement 每 required locale 的渲染硬门槛）；仅当 Build 已人工接受、关闭、stage baseline 且 exact digests 新鲜时记录 `SEALED`，不发布 canonical 数据 |
| `pnpm record:build -- inspect <build-id> [--json]` | 只读查看历史/有效状态、新鲜度、Review 状态、Task 信息与 Loop Fidelity Summary |
| `pnpm verify:closeout -- <build-id> [--json]` | 只读收尾门：历史与有效状态都必须为 `SEALED`、输入新鲜且人工 Review 已 accepted |
| `pnpm sync:index-datasets` | 同步全部数据注册面与磁盘：`index.html` SSOT `<script>` 标签（损益表、公司档案）与生成的 dataset manifest（`--check` 只报告漂移） |
| `pnpm update:dataset-manifest` / `pnpm verify:dataset-manifest` | 重新生成 / 校验 `data/dataset-manifest.js`（数据集注册 SSOT） |
| `pnpm update:fidelity-rules-doc [-- --check]` | 从 `scripts/lib/fidelity-rules-catalog.mjs` 重新生成（或校验）`docs/fidelity-loop-rules.md` 的生成规则目录区 |
| `pnpm verify:dataset -- <key> [--skip-render]` | 只读单数据集聚合诊断：语法、SSOT、strict i18n、metadata，然后每种语言各一次只读 d3 渲染 |
| `pnpm verify:ssot` | SSOT ↔ 数据集奇偶 + 注册奇偶 + 货币/单位与汇率覆盖（全局） |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n 覆盖检查 |
| `pnpm verify:d3 -- <key> [--focus <dir>] [--keep] [--language <code>]` | 只读 d3 诊断 + 自动硬门槛；即使传 `--focus` 也不归档、不推进证据 lineage |
| `pnpm verify:render-regression [-- <keys>]` | 只读批量渲染，对照 `data/render-baselines.json` 拦截回归；缺本地参考图时只跑渲染硬门槛 |
| `pnpm compat:baseline -- <key> [...]` | canonical baseline ledger 的兼容 mutation，刻意命名在 verify/record/publish/release 四类之外；M4 Publication 尚未替代它，也不能证明产生它的 Build 正确 |
| `pnpm update:dataset-file-metadata` | 从 git 提交时间重新生成 `data/dataset-file-metadata.js`（提交新/改数据集后需重跑并提交刷新结果） |
| `pnpm verify:dataset-file-metadata` | 生成的 metadata 是否为最新 |
| `pnpm build:site` / `pnpm verify:site` | 构建优化后的 Pages runtime projection / 用浏览器校验 defer bundle、按需 Adapter 预算、Chart runtime 延迟加载与公司切换路径 |
| `pnpm build:standalone` | 构建自包含 HTML，不修改已跟踪 metadata；内联全部数据集 adapter |
| `pnpm verify:standalone` | standalone 产物不依赖任何同级文件 |
| `sh scripts/clean-compare.sh` | 只清理旧的顶层 scratch；d3 诊断/证据 run 各自管理并清理私有 `compare/runs/`，并发时禁止全局删除 |

CI（`.github/workflows/ci.yml`）始终运行 `pnpm check`，再由 ChangeImpact
计划选择 app、Pages、全量/changed-key render 与 standalone
检查；未知可执行影响回退完整套件。`main` 上直接把同一次运行验证过的 `_site`
artifact 交给 Pages deploy，不再二次 checkout/install/build。每个检查的白话作用、
原理、盲区与触发矩阵由 `docs/ci-verification.zh-CN.md` 统一说明。

## 工作流

`docs/dynamic-dataset-workflow.md` 拥有可执行流水线:编号步骤、执行模型、
对象类型清单、操作陷阱、回复前验证清单与汇报要求。处理 pending 图片之前先
加载它;每次最终回复之前满足其清单。事务化目标与 M0–M5 迁移由
`docs/architecture/README.md` 拥有——不得把目标状态说成当前状态。五个阶段
各一行:

1. 接入与守卫——`pnpm check:pending` 守卫,确定 `<公司>-<期间>` key 与
   Adapter,`pnpm record:intake` 以 Git 可见的 no-clobber 方式把 Source
   领取到 `input/processing/<dataset-key>.png`。
2. 源盘点与数据 SSOT——判定输入类型,持久化 `ObjectInventory`,编写公司
   档案与 Adapter 所属 Metric SSOT(外加可选的图标子循环)。
3. Adapter 与 i18n——依据 preflight 测量编写
   `data/datasets/<dataset-key>.js`,添加 `i18n.<language>` 覆盖,用
   `pnpm sync:index-datasets` 注册。
4. 验证与 Review——`record:build prepare-review`、`record:verification`、
   逐 locale `record:fidelity`、经 `record:build finish` 提交人工
   attestation,然后 `stage-baseline` 与 `seal`。
5. 收尾——只有显式的操作者审阅完成信号才把确认的 Source 移到
   `input/processed/`(owning 规则:`docs/dynamic-dataset-workflow.md`
   §Operator Review-Completion Signal);确认后的移动在 Git 中提交为
   tracked processing queue 的删除,被忽略的 processed PNG 只留在本机归档;
   `verify:closeout` 是按该文档 close-out requirement policy 执行的只读审计;
   最后 `pnpm check` 全绿并按 `docs/commit-messages.md` 提交。

## d3-Sankey 保真循环

`docs/fidelity-loop-rules.md` 是保真循环行为的唯一事实来源。运行或汇报任何
循环之前先加载它。每条 canonical G/B/R/L/T/A/Z/I 定义只能在其中出现一次；
其他文档可以调用 ID，但不能复述公式或阈值。用户提出的每个保真修正都要视为
流程改进信号：先修当前问题，再归因为规则缺失、执行缺口或口径模糊，并增加
自动/required check，或记录绑定证据的数据集特例。持久 review candidate 必须用
Build-bound `record:fidelity` 记录；普通 `verify:d3` 只是诊断，不产生 evidence
run。只有机器证据时必须报告为 `review-pending`，不得写 accepted 或 converged。

## 提交信息

遵循 `docs/commit-messages.md`：轻量 Conventional Commits
（`<type>(<scope>): <summary>`，英文小写摘要）。type/scope 表格、以及
“新数据集的 adapter、manifest 注册与相关 tracked queue 变更保持一致，而
processed PNG 只留本机；可复用渲染器支持拆成前置 `render(engine)` 提交”的规则
都由该文档拥有。

## Cursor Cloud 专用说明

环境是静态站点加 Node 工具链：依赖（`pnpm install --frozen-lockfile`）和
固定版本的 Playwright Chromium（`pnpm exec playwright install chromium`）
由启动更新脚本刷新，无需重新安装。本 VM 的非显性注意事项：

- 用 `pnpm dev` 运行应用（`http://127.0.0.1:8000` 上的零依赖静态服务器）。
  它是长驻进程——在后台/tmux 会话中启动，不要用阻塞的前台调用。
- `input/processed/` 下的参考图全部被 Git 忽略，并保存在各作者的本机归档。
  全新检出不含这些 PNG；除非本机恢复了对应 key 的参考图，
  `pnpm verify:d3 -- <key>` 会在复制参考图时因 ENOENT 失败。引擎级改动请改用
  `pnpm verify:render-regression`：它渲染
  所有已注册数据集、应用硬门禁，并对缺本地参考图的 key 跳过相似度计分。
- `pnpm check`、`pnpm test`、`pnpm verify:app`、`pnpm build:standalone` 与
  `pnpm verify:standalone` 在全新检出上全部绿色；`pnpm verify:d3` 还要求本机
  归档中存在所选 reference。
