# 项目熵减与运行效率优化方案（2026-10-18）

> 状态：已实施（2026-10-18；Claude Fable 5.1 规划，三个 Opus 5.5 High 子代理按 P1/P2/P3 并行执行；结果见 §8）
> 目标读者：仓库主 Worker（Codex CLI，GPT-6.1-Sol）与维护者
> 原则：每个现象一条可执行、可被 `pnpm check` 守住的具体规则；不新增流程、不新增确认环节、不重新展开已精简的保真流程。

## 0. 实测事实

### 0.1 磁盘（`du` 表观值，APFS clone 会高估）

| 位置 | 大小 | 性质 | 处置 |
| --- | ---: | --- | --- |
| `.git` | 778M | 10 个 pack 共 739MiB；1146 个 loose 对象可 prune；历史中 ≥25 份 30–51MB 的 `output/trace-company-product-metric-visualizer.html` blob（曾被提交，现已 ignore） | 本次 `git gc`；历史重写需 force-push，**留给操作员决定** |
| `output/` | 660M | `publications/trees` 279M（1 棵当前树，clone 自 `data/`）、`site-releases` 162M（3 份）、standalone HTML 85M、`builds` 89M（162 个 Build 全部 SEALED 且已 `cleaned.json`，只剩 manifest）、`storage/lists` 27M；`clean:artifacts` 只读统计 19208 文件 / 0.62GB logical，blocker = 用户终端里的 `pnpm dev`（pid 51926） | 可再生派生物本次删除并规则化（§5）；完整 `--completed` 清理需停 `pnpm dev`，**留给操作员决定** |
| `input/` | 481M | `processed` 471M 是 `verify:d3` 参考图本地归档 | 保留 |
| `.claude/worktrees/elegant-goldwasser-27bd1b` | 358M | 桌面 app 的 worktree；唯一提交 ec166cd7 已等价合入 main（`git cherry` 为 `-`），工作树干净 | app 自己回收（归档该会话即可）；不手动 `git worktree remove` |
| `data/assets/icon-references/*/validation-sheets` | 211M / 830 PNG | 人工验收用审阅图，无任何脚本读取，只被 crop spec 写入 | **决策项**：改为本地归档（`.gitignore` + `git rm --cached`）可让每次 clone/checkout 少 211M |
| `_site/` | 168M | `pnpm build:site` 的可再生产物 | 本次删除并纳入 push 后清理 |
| `.playwright-cli/` | 157M | 外部 playwright-cli 工具的控制台日志（2026-06～09），仓库无引用 | 本次删除并纳入清理 |
| `node_modules` | 48M | | 保留 |
| `git stash@{0}` | — | `temp: nike+adobe worktree overlay`（6 文件 409 行） | **决策项**：操作员确认后 drop |

### 0.2 耗时

- `pnpm check` 28s 墙钟（2 workers）：`test` 27.5s/489 项是瓶颈，`verify:i18n` 13.1s 单线程，`verify:asset-catalog` 3.3s，其余 <1.2s。check 已经是 2026-09-05 优化后的形态，本次不再动它。
- CI 最近一次成功运行约 7 分钟：checkout 16s、check 67s、`verify:app` 82s、全量 render 118s、standalone verify 48s、deploy 26s。改测试文件会触发全量 render，这是既定 ChangeImpact 保守策略，本次不动。
- 文档合计 253KB。处理一张图的关键路径上，Worker 被指向约 2,400 行文档，而实际改变其行为的约 700 行。

### 0.3 守卫（执行者必须保持 `pnpm check` 绿）

- `verify:architecture`：AGENTS.md 与 `docs/AGENTS.zh-CN.review.md` 的 `## ` 标题数相等、以 `| \`pnpm ` / `| \`sh ` 开头的命令表行数相等，两者都含 `CONTEXT.md` 与 `docs/architecture/README.md`；`asset-workflow.md` 必含 `## 7. Operator Review-Completion Signal`、`outside the scope the signal names`、`same-name destination`、`不用浏览器查看页面`；`asset-workflow.md` 与 `dynamic-dataset-workflow.md` 不得出现 `record:intake|build|verification|fidelity` 或 `verify:closeout`；CONTEXT.md / AGENTS.md / architecture 三文档不得出现 `same-name`；`dataset-lifecycle.md` 必含 "`verification-plan/v6` is a fixed per-Adapter checklist"；`input/README.md` 必含 `data/dataset-manifest.js`，`data/README.md` 必含 "registered in `data/dataset-manifest.js`"；CONTEXT_DOCS（CONTEXT.md、architecture 三文档、ADR-0001）与 casebook 的本地链接有效；`lifecycle-contract.json` 的 `currentImplementationStatusDocument` 指向 `docs/architecture/README.md#migration-milestones`。
- `docs/workflow-command-reference.md` 与 `docs/fidelity-loop-rules.md` §2 是生成物：改 `scripts/lib/workflow-contract.mjs` / `scripts/lib/fidelity-rules-catalog.mjs` 后分别跑 `pnpm update:workflow-reference` / `pnpm update:fidelity-rules-doc`。
- package.json 必须保留 `record:intake` / `record:fidelity` / `record:verification` / `record:build` / `compat:baseline` / `verify:closeout` / `prepare` / `setup:git-hooks`（低层命令本次不删，见 §7）。

## 1. 规则归属裁决（三个工作包共同遵守）

| 规则 | 唯一属主 | 其他文档 |
| --- | --- | --- |
| 来源搬移（完成信号、范围、no-clobber：不同字节失败、相同字节仅用于恢复） | `docs/asset-workflow.md` §7 | ≤2 行指针；不得复述「整批搬移」「必须清单确认」 |
| 来源对象不变量（flat `objects[]`、`signals`、precisionRecovery、authoritativeCorrection、`shortNodes`、Other/T22、B15 建模） | `docs/dynamic-dataset-workflow.md` | `data/schema.md` 只保留字段形状 + 指针；CONTEXT / architecture 指针 |
| 渲染器自有语义（Hover Share、Comparison Visual Scale、fit/zoom 事务边界） | `CONTEXT.md`（在 AGENTS 归属表新增一行） | `data/schema.md` 的 `comparisonScale` 只保留字段格式 + 指针 |
| 工作台行为（统一验收、自动更新、候选绑定） | `docs/local-environments.md` | README / CONTEXT / architecture 1–2 行指针 |
| 检查边界（何时跑什么） | `docs/asset-workflow.md` §3 | 其余删除复述 |
| Git 交接的操作步骤与 review JSON | `docs/asset-workflow.md` §6 | `local-environments.md` 只保留机制（锁、私有 index、journal、恢复、push 限制） |
| 草稿共享存储（compact / materialize / share-assets） | `docs/local-environments.md` | `artifact-retention.md`、`dataset-lifecycle.md` 指针 |
| Dataset metadata Git hook 规则 | `docs/commit-messages.md`「Dataset metadata 提交保护」 | `data/README.md`、`ci-verification.zh-CN.md` 指针 |
| 图标裁剪流程 | `data/assets/README.md` | `input/README.md`、`data/README.md` 指针 |
| Pages 运行时 | `docs/architecture/runtime-data.md` | README、ci-verification 指针 |
| 产物保留与清理 | `docs/artifact-retention.md` | 其余指针 |
| seal 语义 | 默认复用已接受证据；`--fresh-checks` / `--fresh-render` 显式重跑 | 删除所有「fresh seal / fresh final verification / Build seal 触发渲染」表述 |
| 低层命令（`record:intake/build/fidelity/verification`、`verify:closeout`、`review`、`seal`、`checkpoint`） | 历史 Build 专用，`docs/archive/legacy-direct-edit-workflow.md` | 当前文档只写 `record:workflow`；AGENTS 命令表归入「历史」行 |
| 里程碑措辞 | M0–M5 均已实现；文档描述当前实现 | 删除 target / shadow / until migrated / 不宣称 M4 M5 已完成 等措辞；`#migration-milestones` 锚点保留为日期记录 |
| Adapter 数 | 三个：income-statement、revenue-metric、metric-observation | 删除「两个互斥 Adapter」表述；`source-classification/v1` 用于 PNG、`/v2` 用于文本（执行者在代码中核实后写入 `dataset-lifecycle.md`） |

## 2. 工作包 P1 — Worker 入口文档

文件：`AGENTS.md`、`docs/AGENTS.zh-CN.review.md`、`docs/asset-workflow.md`、`docs/dynamic-dataset-workflow.md`、`docs/examples/*`、`input/README.md`、`data/README.md`、`README.md`。

1. AGENTS.md：把「Dataset Processing」快速路径移到标题之后、归属表之前，改写成对 Agent 的指令：收到 `处理{文件名}` 时只读 `docs/asset-workflow.md` §1–§5、`docs/dynamic-dataset-workflow.md`、`data/schema.md` 的相关节与一个同类已发布数据集；不加载 CONTEXT.md / architecture（它们只在改生命周期、verifier、生成物时读）。四条「load-bearing points」改为真正影响行动的三条：facts 顶层必须写 `signals`（见 Type Gate 表），否则默认落成 metric-observation Build；`continue --json` 才输出 `fresh` 与 `reviewToken`；审阅后再改文件先 `materialize`。
2. AGENTS.md 归属表：第一行改为「domain vocabulary, renderer-owned semantics and architecture (load only for lifecycle / verifier / generated-file changes)」；解决交叠：Git 交接步骤归 asset-workflow §6，机制归 local-environments；清理归 artifact-retention；渲染器语义新增一行归 CONTEXT.md。
3. AGENTS.md 命令表拆成三组（数据集任务 / 代码与文档任务 / 历史 Build 专用），`review`、`seal` 移到历史组；`clean:artifacts` 行写成 `pnpm clean:artifacts [-- --completed | --derived]`（P3 实现 `--derived`）；删除「startup script」句或改为「Codex / Claude 云环境的启动配置在仓库外」。
4. `docs/AGENTS.zh-CN.review.md` 同步为完整中文镜像，`##` 数与命令行数相等。
5. `docs/asset-workflow.md`：§2 第 1 步写明 `signals` 与 `objects[]`；§4 写明 `--json`；§5/§9 写明反馈后 `materialize` → 修改 → `continue`；§6 保留操作步骤（它是属主），§8 缩为指向 artifact-retention 的 3 行；删除第 9–10 行的历史指针以外的重复。
6. `docs/examples/`：新增 `source-facts.sankey.example.json`（Income Statement PNG、含 `signals`、扁平 `objects[]`、`shortNodes` 示例），现有文本示例保留；先检查 tests 是否校验示例文件。
7. `docs/dynamic-dataset-workflow.md`：删除复述 AGENTS 的「新 Adapter 要同步更新 AGENTS/镜像/spec」段与第 9–10 行历史指针；保留 Type Gate 表并在表后一句说明 `signals` 写在 facts 顶层。
8. `input/README.md`：删除 `check:pending` + `record:intake --availability` 旧接收步骤（S1）、整批搬移与 close-out 触发复述（C1–C3）、裁剪流程复述（D9）；只保留目录含义、命名规则与指针；保留 `data/dataset-manifest.js`。
9. `data/README.md`：修正「指标资产入口」（主视图没有该入口，`verify:app` 断言其不存在）；Git hook 段与裁剪段改指针；删除「accepted lifecycle target」措辞；保留 "registered in `data/dataset-manifest.js`"。
10. `README.md`：「Input a metric asset」与工作台段改为 ≤5 行 + 指针；Pages 运行时段改指针；保持人类快速上手定位。

## 3. 工作包 P2 — 领域与架构文档

文件：`CONTEXT.md`、`docs/architecture/README.md`、`docs/architecture/dataset-lifecycle.md`、`docs/architecture/verification-publication.md`、`docs/architecture/lifecycle-contract.json`（仅在必要时）、`data/schema.md`、`docs/trace-specification.zh-CN.md`。ADR 不改。

1. CONTEXT.md：第 157–213 行的「M3 build-local chain」整段换成 ≤8 行的当前流程摘要（`record:workflow start → continue → accept → publish`，协议名列表）+ 指针；第 21–35 行搬移段缩为 3 行指针；第 10–17 行工作台描述缩为 2 行；明确 CONTEXT.md 是 Hover Share / Comparison Visual Scale 语义的属主（保留这部分正文）；删除末尾「Until a migration milestone is implemented」。
2. `docs/architecture/README.md`：「accepted target architecture / The target has / The target deepens / shadow or compatibility mode / until migrated」改为当前实现措辞；里程碑表保留为日期记录（锚点不变）；搬移段改指针并指向 asset-workflow §7（当前错写为 dynamic-dataset-workflow）；工作台段改指针；删除对 `same-name` 的任何复述。
3. `docs/architecture/dataset-lifecycle.md`：修正 SEALED「fresh verification」语义；第 439–464 行自相矛盾段改为「`record:workflow continue` 驱动当前路径，低层命令仅历史 Build」；Adapter 改三个并补 `source-classification/v1`（PNG）与 `/v2`（文本）的划分；删除 `--adapter`、`finish`；搬移段（61–96、419–422、450–462）缩为指针；开头的存储段移到文末并改指针；保留 "`verification-plan/v6` is a fixed per-Adapter checklist"。
4. `docs/architecture/verification-publication.md`：第 41、201–204 行 fresh seal 表述改为复用证据 + `--fresh-*`；第 49–70 行低层命令序列改写为 `record:workflow` 步骤（低层名只在「历史对照」一句出现）；删除「Until M4」「In parallel, the M3 lane」；§Current-to-target migration 缩为 5 行历史记录；§Completed-work artifact retirement 改指针；§Reporting Views 删除 `selection.js` 轮询描述。
5. `data/schema.md`：§Comparison Visual Scale 缩为字段格式 + 指向 CONTEXT.md；§Source object value references 缩为字段形状 + 指向 dynamic-dataset-workflow；删除「Reference mode」；保留所有字段定义本身。
6. `docs/trace-specification.zh-CN.md` 第 209 行附近：删除「accepted、fresh close-out 完成或…」触发复述，改为指针。
7. 修改后跑 `pnpm verify:architecture` 与 `pnpm check`。

## 4. 工作包 P3 — 运维文档、规则目录与脚本

文件：`docs/local-environments.md`、`docs/artifact-retention.md`、`docs/ci-verification.zh-CN.md`、`docs/commit-messages.md`、`docs/fidelity-loop-rules.md`（经 `scripts/lib/fidelity-rules-catalog.mjs` 重生成）、`docs/archive/*`、`scripts/record-workflow.mjs`、`scripts/verify-standalone.mjs`、`scripts/lib/workflow-retention.mjs`、`scripts/lib/artifact-cleanup.mjs`、`scripts/clean-artifacts.mjs`、`scripts/release-git.mjs`、`scripts/git-hook-dataset-metadata.mjs`，新增测试文件（不改已有测试文件，其他 Session 可能正在编辑它们）。

1. `docs/local-environments.md`：第 50 行「Git 集成候选还执行 … verify:site」改为与代码一致（默认 `check` + `build:site`，`--full` 才加 render regression 与 `verify:site`）；检查边界段（169–179）与清理段（181–187）改指针；Git 交接命令块改为指向 asset-workflow §6，只保留机制描述；新增一条：`--generation` 省略规则（见 5）。
2. `docs/artifact-retention.md`：`inspect/finish/seal/release` 改为当前名；「fresh seal」改为「新 Build 重新验证」；存储段改指针；「运行中自动清理」表新增一行：`release:git push` 成功后与 `clean:artifacts -- --derived` 删除可再生派生物（清单见 6）。
3. `docs/ci-verification.zh-CN.md`：删除「指标资产入口」断言、「不宣称未实现的 M4/M5」、closeout 措辞；`pnpm check` 步骤列表改为「以 `scripts/check.mjs` 的 steps 为准」加当前 14 项；检查边界复述（15–27）与 Git 传输复述（329–337）改指针；第 228–313 行的日期基准与 CI 耗时史迁到 `docs/archive/ci-timing-history.md`，原处留 3 行结论。
4. `docs/commit-messages.md`：删除 `reference-mode` scope 与「Reference 模式」；第 142–150 行搬移复述改指针；保留并明确它是 Dataset metadata hook 规则的属主。
5. `scripts/record-workflow.mjs`：对需要 `--generation` 的命令，若未传且传了 `--session`，读取 `output/builds/<id>/session.json`；owner 与 `--session` 相同且 `released === false` 时采用其 generation，否则保持原错误；显式传入时仍按原样核对。修正第 93 行只列 11 个 action 的 usage 字符串（从 `WORKFLOW_ACTIONS` 生成）。新增 `tests/workflow-generation-default.test.mjs`。
6. `scripts/lib/workflow-retention.mjs`：新增 `sweepDerivedArtifacts(root)`，固定清单：根 `_site/`、`output/trace-company-product-metric-visualizer.html`、`output/site-benchmark/`、`output/site-releases/` 中非当前版本（当前版本按 `scripts/build-site.mjs` 的 `retainReleases` / `releases.json` 判定）、`.playwright-cli/`、`scripts/__pycache__/`、根目录与 `output/` 一级的 `.DS_Store`。不删 `output/render-regression`（本机缓存）、`output/storage`、任何 Build / publication / transport 记录。返回删除清单与字节数。
   - `release:git push` 成功后在 `runRetention` 之后调用；
   - `clean:artifacts -- --derived`：只跑该清单，不要求 `--completed`，允许 `pnpm dev` 运行中执行；
   - `.githooks/pre-push`（经 `git-hook-dataset-metadata.mjs pre-push`）在 metadata 判定通过后 best-effort 调用，任何异常只打印不阻断 push；
   - 新增 `tests/derived-artifact-sweep.test.mjs`（临时目录内构造清单、验证保留项不被删）。
7. `scripts/verify-standalone.mjs`：parseArgs 过滤转发的 `--`，使 `pnpm verify:standalone -- <path>` 可用。
8. `docs/fidelity-loop-rules.md`：G11「finish 必须引用 fresh 结果」改为 `accept`；G3d 触发点删除「Build seal」（或改为 `seal --fresh-render`）；改在 `scripts/lib/fidelity-rules-catalog.mjs` 后 `pnpm update:fidelity-rules-doc`。
9. `docs/archive/workflow-implementation-progress.md` 修正两处相对链接；`docs/archive/view-typography-scope-cleanup-plan.md` 头部删除「不表示下述改动已经完成」。
10. 修改后跑 `pnpm check`。

## 5. 磁盘操作（主 Session 直接执行）

1. 删除 `.playwright-cli/`、`scripts/__pycache__/`、`_site/`、`output/trace-company-product-metric-visualizer.html`、根目录 `.DS_Store`。
2. `git gc`（默认 prune 窗口，不用 `--prune=now`，其他 Session 可能正在写对象）；记录前后 `size-pack`。
3. 不执行：`clean:artifacts -- --completed`（需停用户的 `pnpm dev` 并确认本机工作全部完成）、`git stash drop`、validation-sheets 改本地归档、Git 历史重写、删除 app worktree。全部列为决策项向操作员报告。

## 6. 验证与交付

- 三个工作包完成后：`pnpm check`（含 `verify:architecture` 的镜像/链接/措辞守卫）与新增测试；`pnpm update:workflow-reference` / `update:fidelity-rules-doc` 无 diff。
- 按 `docs/commit-messages.md` 分 commit：`docs(agents)`、`docs(architecture)`、`docs(workflow)`、`feat(workflow): default generation from the owning session`、`feat(retention): sweep derived artifacts after push`、`fix(standalone): accept forwarded --`。共享检出：只 stage 自己的 hunk。是否提交与推送由操作员决定。

## 7. 本次不做、留待决定

- 删除低层命令脚本（`record-intake/build/fidelity/verification.mjs`、`verify-closeout.mjs`、`audit-interface-risk.mjs`、`check-pending-processed.mjs`、`release-dataset.mjs`、`benchmark-site.mjs`、`clean-compare.sh`）：被 `verify:architecture` 断言、被 `record:workflow` 内部复用、有 6 个测试文件依赖；需要单独一轮。
- `verify:i18n` 13s 单线程：不在 `check` 关键路径（与 27s 单测并行），`verify:dataset --skip-render` 只对指定 key 跑 strict；暂不优化。
- CI `fetch-depth: 0` 全量 checkout 16s：若历史重写剔除 standalone blob 后自然变快；否则可改 `filter: blob:none`（`plan:ci` 与 metadata 只需 commit/tree）。

## 8. 执行结果（2026-10-18）

- 文档：28 个文件改动，+733 / −1077 行；AGENTS.md 快速路径前置、命令表拆为三组、镜像同步；`input/README.md` 120→30 行、`CONTEXT.md` 225→184、`data/schema.md` 935→844、`docs/ci-verification.zh-CN.md` 337→244（耗时史迁至 `archive/ci-timing-history.md`）、`dataset-lifecycle.md` 472→431、`verification-publication.md` 371→338。审计发现的 12 组矛盾、12 组复述、11 组过时表述全部按 §1 处理；新增 `docs/examples/source-facts.sankey.example.json`（对账通过）。
- 脚本：`record:workflow` 省略 `--generation` 时按 `--session` 或环境身份读取 session.json（`tests/workflow-generation-default.test.mjs`）；`sweepDerivedArtifacts` 挂在 `release:git push`、pre-push hook（best-effort）与 `clean:artifacts -- --derived`（`tests/derived-artifact-sweep.test.mjs`）；`verify:standalone -- <path>` 可用；usage 从 `WORKFLOW_ACTIONS` 生成。
- 验证：`pnpm check` 通过（495 单测）；`update:workflow-reference` / `update:fidelity-rules-doc` 无 diff。
- 磁盘：项目目录 2.9G → 2.3G（删 `.playwright-cli` 157M、`_site` 168M、standalone 85M、旧 site-releases 96M、pycache）；`.git` 778M → 707M（`git gc`，10 pack → 2）。pack 归属：`input/` 队列历史 PNG 356MiB、validation-sheets 211MiB、standalone 21MiB。
- 未做（§5.3、§7）与新发现：201 份利润表 SSOT 与 2 个 Adapter 的来源路径仍为 `input/processing/`（文件已在 `processed/`），需数据层决定统一方式。
