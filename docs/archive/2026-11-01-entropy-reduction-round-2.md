# 2026-11-01 熵减第二轮：方案与结果记录

状态：已实施（本文件是历史记录，不是现行规则；现行规则见各属主文档）。

## 1. 诊断（2026-11-01 实测）

### 1.1 磁盘：`output/` 909 MB，其中 70% 没有任何读者

| 目录 | 占用 | 原因 |
| --- | --- | --- |
| `output/builds/` | 237 MB | 627 个 Build 全部已 `cleaned.json`，但 `manifest.json` 平均 370 KB 永不删除。每条 AUTHORED 收据内联 77 KB 的 `$traceList` chunk 列表（artifacts 3861 项分布在约 1100 个小目录，每目录一个 chunk digest），每次 `continue` 重新 prepare 追加一条，一个 Build 通常 6 条。 |
| `output/publications/trees/` | 343 MB | 当前指针树（APFS 克隆，表观大小）。必要。 |
| `output/workbench/previews/` | 190 MB | 工作台服务记录指向已死亡的 PID，启动期清理从未触发。 |
| `output/storage/lists/` | 66 MB / 15,289 文件 | 共享记录块只在 `--completed` 全局清理时删除；全局清理要求停掉所有 Session，自 10-18 起无人运行。 |
| `output/site-releases/` | 55 MB | 当前 Pages 版本。必要。 |
| `compare/runs/` | 8 MB | `verify:d3 --keep` 的诊断残留，无过期机制。 |

结论：缺少一个"在其他 Session 与 `pnpm dev` 运行时也安全"的固定 GC；唯一的全局清理入口在实践中不可达。

### 1.2 CI：一次 main push 3.5–9 分钟

| 步骤 | 实测 | 根因 |
| --- | --- | --- |
| `pnpm check` | 50–92 s（本机 32 s） | 固定 2 个 worker；runner 有 4 vCPU。`test` 26 s 由单个 22.6 s 的测试文件决定（`node --test` 已按文件并行）。 |
| `verify:standalone` | 51–81 s | 对 312 个 raster 数据集逐个 `page.goto` 整页重载 140 MB 的 standalone HTML。 |
| `verify:app` | 75–96 s | 24 个 scenario 串行。 |
| 全量 render regression | 131–165 s | 应只在共享 renderer 变化时触发；数据交接提交 acd799d 因 `icon-references/**/*.md` 被 `ci-plan` 归为"render asset"而触发了 full + app。 |

### 1.3 规范：3,800 行文档中约 300 行是复述、实现细节或历史叙述

文档审计（只读）发现 11 处矛盾、12 组跨文档完整复述、每个架构文档 25–50 行实现细节/迁移叙述、若干过时内容（见 §2 WP5）。执行者做「处理{文件名}」需读约 93 KB，其中 `data/schema.md` 42 KB 里约 16 KB 与利润表桑基图无关。

## 2. 方案（工作包，互不重叠，分别在独立 worktree 由 Opus 子智能体实现）

| WP | 内容 | 属主文件 |
| --- | --- | --- |
| WP1 固定 GC | `clean:artifacts -- --gc`：退役已推送且已归档的 Build（摘要写入 `output/meta/history.json` 后删目录，`show` 报 `BUILD_RETIRED`）；标记-清除未被任何 JSON 引用且超过 1 小时宽限的记录块；清理死 PID 的工作台记录与预览；删除 7 天前的 `compare/runs`。`runRetention` 与 pre-push hook 自动运行。移除无生产者的 `output/site-benchmark` 清单项。 | `scripts/lib/workflow-retention.mjs`、`artifact-cleanup.mjs`、`clean-artifacts.mjs`、`git-hook-dataset-metadata.mjs`、`dataset-build-store.mjs`、`docs/artifact-retention.md`、`tests/workflow-retention.test.mjs` |
| WP2 收据存储压缩 | 记录块分块键从目录改为最多 4 段路径前缀（按公司成块）；chunk 列表超过 2 KB 时本身内容寻址存储，收据只留 `index` 引用；以冻结工具副本中的标记常量作能力门，老 Build 继续用 `chunks` 形式。 | `scripts/lib/record-storage.mjs`、`tests/record-storage.test.mjs` |
| WP3 CI 提速 | `check` worker = min(4, 可用核数)；`verify:standalone` 在已加载文档内按 hash 切换数据集；`verify:app` 评估有界并发（仅在 3 次运行一致时保留）；`ci-plan` 把 `data/assets/**/*.md` 归为 provenance；`docs/ci-verification.zh-CN.md` 补齐缺失步骤、删除历史叙述、预算数字改为引用。 | `scripts/check.mjs`、`verify-standalone.mjs`、`verify-app.mjs`、`lib/ci-plan.mjs`、`tests/ci-plan.test.mjs`、`docs/ci-verification.zh-CN.md` |
| WP4 测试拆分 | `tests/asset-workflow.test.mjs`（22.6 s）按 fixture 拆为 3 个文件，不改断言。 | `tests/asset-workflow-*.test.mjs`、`tests/helpers/` |
| WP5a 架构文档瘦身 | 删除 architecture/README、dataset-lifecycle、verification-publication、runtime-data、CONTEXT、local-environments 中的复述、兼容说明与迁移叙述；里程碑表移入 archive；修正 verifier 报错属主；补齐生成的协议表。 | `CONTEXT.md`、`docs/architecture/**`、`docs/adr/**`、`docs/local-environments.md`、`scripts/verify-architecture-contract.mjs`、`scripts/lib/workflow-contract.mjs` |
| WP5b 流程与数据规范 | 修正 11 处矛盾中属于流程/数据侧的 9 处；`data/schema.md` 按 Adapter 拆为 `data/schema/*.md`（索引保留）；补写门槛实际读取但 schema 缺失的 `layout` / `rasterAnnotations` / `meta.logoX,logoY` / `render.allowRasterAnnotations` 字段节；README 删除直接编辑路径与过时计数；AGENTS 必读清单改为按需章节并同步中文镜像。 | `AGENTS.md`、`docs/AGENTS.zh-CN.review.md`、`docs/asset-workflow.md`、`docs/dynamic-dataset-workflow.md`、`data/schema.md`、`data/schema/`、`data/README.md`、`README.md`、`docs/trace-specification.zh-CN.md`、`docs/commit-messages.md`、`input/README.md` |

有意不做的事：不改生命周期状态机与 `verify/record/publish/release` 语义；不改保真规则目录；不重写 `docs/fidelity-loop-rules.md`；不触碰 `input/`、`data/` 数据文件。

## 3. 结果（2026-11-01 实测，均在本机；CI 数字以推送后的运行为准）

### 3.1 磁盘与 GC

- 首次 `pnpm clean:artifacts -- --gc`（19.6 s）：退役 625 个 Build（242 MB，2 个因发布未推送而保留）、删除 14,139 个无引用记录块、1 条僵尸工作台记录及其预览（172 MB）、4 个过期 `compare/runs`（8 MB）、1 个派生 standalone（140 MB）。`output/` 1.0 GB → 418 MB，剩余为当前发布树（343 MB，APFS 克隆表观值）、当前 Pages 版本（55 MB）与小型记录。
- 新 Build 的 `manifest.json` 约 380 KB → 15 KB（626 个历史 Build 回放：manifest 总量 242 MB → 9.7 MB；manifest + 共享块 246 MB → 76 MB）。chunk 文件数未降一个量级：每个不同的 artifacts 列表仍要 1 个约 25 KB 的 index 文件；若需再降可做分层 index。
- 残留竞态的处理：复用已有记录块时刷新其 mtime，使 1 小时宽限期从最近一次写入起算；GC 标记结束后再重读标记期间新写入的 JSON。

### 3.2 校验与 CI（本机）

| 步骤 | 前 | 后 |
| --- | --- | --- |
| `verify:standalone` | 81 s（主检出；慢的主因是对 2009 张本机 processed 图逐张 `includes` 扫描 140 MB 字符串 38.6 s，而非整页重载） | 约 16 s（一次性 data URI 索引 0.26 s + hash 切换 + 3 页并行；新增一条扫描后 page error 断言） |
| `verify:app` | 44 s（串行） | 17 s（3 个 context 并发，4 次连续运行与双实例并跑均无 flaky） |
| `pnpm check` 的 `test` 步骤 | 25.7 s | 18.7 s（本机 fsync 跨进程串行，约 17 s 是下限；CI 上未测） |
| `pnpm check` worker / 墙钟 | 固定 2 / 32 s | min(4, 可用核数) / 21.5 s |
| ChangeImpact 对 acd799d | app + render full | app=false、render=changed（67 key），standalone/site 按 raster 规则触发 |
| `workbench.test.mjs` 偶发卡死 | 无界 `await entered`，被取消后服务不关、进程不退出，拖满 300 s | 20 s 有界等待，失败可见且 `finally` 一定关服务 |

### 3.3 规范

- Markdown 净减 395 行（26 个文件，+1071 / −1466），其中：CONTEXT 184→138，architecture/README 185→129，dataset-lifecycle 431→386，verification-publication 340→317，runtime-data 177→134，local-environments 177→155，ci-verification 244→208，artifact-retention 98→91，README 243→211，`data/schema.md` 863→92（字段拆入 `data/schema/` 6 个文件，含新补的 layout / rasterAnnotations / meta.logoX,logoY / render.allowRasterAnnotations 字段节）。
- 11 处矛盾全部按代码定稿；12 组复述各只保留属主；迁移里程碑与兼容说明移入 `docs/archive/migration-milestones.md`；生成的协议表补齐 5 个协议并纳入 `lifecycle-contract.json` 奇偶检查。
- 执行者「处理{文件名}」必读集合（AGENTS + asset-workflow + dynamic + income-statement + sankey-adapter）约 93 KB → 56 KB。

### 3.4 实施方式

6 个工作包由 Opus 5.5 子智能体在各自 git worktree 并行实现，按文件所有权互不重叠，完成后以 cherry-pick 线性合入 main（共 13 个提交），每个合入点与最终 main 都通过 `pnpm check`；`verify:app`、`verify:standalone`、`verify:workbench` 在最终 main 上通过。

### 3.5 遗留

- 本机 `pnpm test` 受 fsync 串行限制；若要再快，需要为测试 fixture 提供跳过 fsync 的开关。
- chunk 文件数可通过分层 index 再降约一个量级。
- 两个历史 Build（发布未推送）在下次 `release:git push` 后自动退役。
