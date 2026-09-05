# 当前 Workflow 命令与协议

由 `scripts/lib/workflow-contract.mjs` 与 `package.json` 生成，请勿手工修改。
操作说明：[asset-workflow.md](asset-workflow.md)。

## 一张处理单的操作

| 命令 | 作用 |
| --- | --- |
| `pnpm record:workflow -- recover-lock` | 核对锁 token 与已退出 PID 后恢复操作锁 |
| `pnpm record:workflow -- recover-session` | 核对当前 generation 后恢复并更换执行代次 |
| `pnpm record:workflow -- session` | 取得已释放 Build 的执行权（--session） |
| `pnpm record:workflow -- release-session` | 当前 Session 显式释放 Build 执行权 |
| `pnpm record:workflow -- start` | 接收来源、生成独立工作目录 |
| `pnpm record:workflow -- prepare` | 从事实生成数据与检查记录 |
| `pnpm record:workflow -- continue` | 根据现有记录执行下一步 |
| `pnpm record:workflow -- show` | 只读查看处理进度 |
| `pnpm record:workflow -- report` | 生成供审阅的 HTML 处理单 |
| `pnpm record:workflow -- checkpoint` | 记录图形阶段的明确冻结或重开决定 |
| `pnpm record:workflow -- review` | 消费当前版本的人工审阅 |
| `pnpm record:workflow -- seal` | 暂存基线并重新执行最终检查 |
| `pnpm record:workflow -- batch` | 记录成员并以独立进程继续多个 Build |
| `pnpm record:workflow -- refresh` | 核对冲突后更新工作目录、准备新计划 |
| `pnpm record:workflow -- assets` | 只读查找资产版本、来源与使用位置 |
| `pnpm record:workflow -- asset-version` | 在草稿中记录绑定字节的资产接受 |
| `pnpm record:workflow -- feedback` | 记录反馈并列出同批检查范围 |
| `pnpm record:workflow -- archive-list` | 只读枚举完整的待归档来源 |
| `pnpm record:workflow -- archive` | 消费操作员确认的精确清单并归档 |

`start` 需要 `--source <pending-file> --key <key> --facts <facts.json>`；
其他单项操作使用 `<build-id>`。`review`、`checkpoint`、`feedback`、`asset-version`、`archive`
使用 `--input <json>`。`batch` 使用 `--input <json> --concurrency 2`。

## 项目入口

| 命令 | 执行文件 |
| --- | --- |
| `pnpm clean:artifacts` | `node scripts/clean-artifacts.mjs` |
| `pnpm update:metric-catalog` | `node scripts/update-metric-catalog.mjs` |
| `pnpm verify:metrics` | `node scripts/verify-metrics.mjs` |
| `pnpm record:workflow` | `node scripts/record-workflow.mjs` |
| `pnpm publish:datasets` | `node scripts/publish-datasets.mjs` |
| `pnpm release:dataset` | `node scripts/release-dataset.mjs` |
| `pnpm view:published` | `node scripts/dev-server.mjs --published --port 8001` |
| `pnpm update:asset-catalog` | `node scripts/update-asset-catalog.mjs` |
| `pnpm verify:asset-catalog` | `node scripts/update-asset-catalog.mjs --check` |
| `pnpm update:feedback-patterns` | `node scripts/update-feedback-patterns.mjs` |
| `pnpm verify:feedback-patterns` | `node scripts/update-feedback-patterns.mjs --check` |
| `pnpm update:workflow-reference` | `node scripts/update-workflow-reference.mjs` |
| `pnpm verify:workflow` | `node scripts/update-workflow-reference.mjs --check` |
| `pnpm update:workflow-graph` | `node scripts/update-workflow-graph.mjs` |
| `pnpm release:git` | `node scripts/release-git.mjs` |
| `pnpm record:transport-review` | `node scripts/record-transport-review.mjs` |
| `pnpm verify:release` | `node scripts/verify-release.mjs` |
| `pnpm verify:workbench` | `node scripts/verify-workbench.mjs` |

发布先 `publish:datasets -- plan <build-id> [...]`，再 `publish:datasets -- commit <plan-digest>`。
输出使用 `release:dataset -- <published-digest> site|standalone [failed-attempt-id]`。

## 当前协议

| 对象 | 协议 |
| --- | --- |
| sourceFacts | `source-facts/v1` |
| textSourceClassification | `source-classification/v2` |
| metricSourceCoverage | `source-coverage/v3` |
| metricObservations | `metric-observations/v1` |
| artifactManifest | `artifact-manifest/v1` |
| checkpoint | `fidelity-checkpoints/v1` |
| publication | `dataset-publication/v2` |
| releaseAttempt | `release-attempt/v1` |
| session | `workflow-session/v1` |
| gitTransport | `git-transport/v1` |
| workbench | `trace-workbench/v1` |
| workflowTimestamps | `workflow-timestamps/v1` |
| application | `workflow-application/v1` |
| verificationPlan | `verification-plan/v5` |
| reviewPacket | `review-packet/v4` |

历史 Build 不因本表更新而获得新的审阅或检查点。
