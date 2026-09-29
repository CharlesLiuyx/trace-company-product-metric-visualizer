# 输入资产处理流程

本文件是新材料（PNG、UTF-8 TXT / Markdown）处理流程的**唯一属主**：命令、顺序、
检查范围、人工审阅、发布、上线、归档与汇报都只在这里定义。
读图与建模规则见 [dynamic-dataset-workflow.md](dynamic-dataset-workflow.md)，
桑基图保真规则见 [fidelity-loop-rules.md](fidelity-loop-rules.md)，字段见
[data/schema.md](../data/schema.md)，命令与协议清单见
[workflow-command-reference.md](workflow-command-reference.md)（自动生成）。
`review-candidate/v1` 之前的历史 Build 按
[archive/legacy-direct-edit-workflow.md](archive/legacy-direct-edit-workflow.md) 解释。

## 1. 三条原则

1. **做完即待人工审阅。** 机器只查人眼不易发现的问题：来源覆盖与金额对账、数据
   一致性、每种语言一次渲染硬门槛。同一份字节只检查一次。人看得出的问题留给审阅。
2. **人工接受是唯一的闭环决定。** 机器全绿只是「待审阅」；操作员的一句通过由工具
   展开为逐项记录，并注明依据，执行者不另行补造判断。
3. **执行者在数据处理任务中不用浏览器查看页面。** 交付、审阅、发布、上线核对都
   只用命令与 HTTP。唯一例外：渲染硬门槛失败、需要看候选图排错时，查看
   `record:workflow` 已生成的证据图片，仍不打开查看器页面。

## 2. 一份材料的步骤

| # | 执行者做什么 | 命令 |
| --- | --- | --- |
| 1 | 完整读原材料，按建模规则过 Type Gate，写 `source-facts/v1`；读不清的写进 `questions` | — |
| 2 | 接收并认领来源，建立独立草稿 | `pnpm record:workflow -- start --source <pending> --key <key> --facts <facts.json> --session <owner>` |
| 3 | 桑基图 / 收入序列：在返回的 workspace 中编写 SSOT、Adapter、i18n | — |
| 4 | 连续跑完全部自动步骤：准备与对账 → 数据一致性 → 一次全语言渲染，停在待审阅 | `pnpm record:workflow -- continue <build> --session <owner> --generation <gen>` |
| 5 | 交付审阅链接（§4），等待操作员 | — |
| 6 | 操作员通过后：记录审阅 → seal → 本机发布（无需再问） | `review` / `seal` / `publish:datasets plan` + `commit` |
| 7 | 操作员要求推送时：Git 交接与上线核对（§6） | `release:git` 等 |
| 8 | 操作员给出完成信号时：归档来源（§7），流程全部结束后清理（§8） | `archive-list` / `archive` |

`continue` 任一步失败即停，并给出原因。修改事实或草稿后再跑 `continue`，它按
实际输入变化自动决定重新准备、重跑检查或重新渲染。编写期间需要看图时，只渲染
源语言做诊断：`pnpm verify:d3 -- <key> --build <build> --language en`；该命令
只读，不产生证据。材料有 `questions` 或建模规则的阻断项时，不能推进到审阅。

多份材料可用 `record:workflow batch --input <batch.json> --concurrency 2` 以独立进程
并行，各自失败互不影响。

## 3. 检查边界

| 场景 | 必须运行 | 不运行 |
| --- | --- | --- |
| 单份材料处理 | `continue` 内置：prepare 对账、`verify:dataset --skip-render`、每语言一次渲染证据 | `pnpm check`、`pnpm test`、`verify:app`、`verify:site`、`verify:standalone`、`verify:workbench`、手写浏览器脚本 |
| 审阅后 seal | 重新哈希输入、重跑数据一致性；渲染复用已接受的逐语言证据（输入未变即同一字节） | 再次渲染；需要时显式 `seal --fresh-render` |
| 本机发布 | `publish:datasets plan` 对整批跑一次 `verify:dataset --skip-render` | 浏览器检查 |
| Git 交接 | `release:git prepare`：`check` + `build:site` | render regression、`verify:site`（交给 CI；本机要跑用 `--full`） |
| 推送后 | CI 全套；`pnpm verify:release -- --online --key <key> ...`（HTTP） | 打开线上页面 |
| 修改共享代码 / 文档 | 直接相关测试；最终候选跑一次 `pnpm check` | 未变输入上的重复运行 |

修改共享代码、渲染器或检查程序时，先改完再刷新受影响的草稿（`record:workflow
refresh`），避免整批证据反复失效。

## 4. 交付待审阅

`continue` 返回 `next: "review"`、`fresh: true` 且带 `reviewToken` 即可交付，不等待
统一预览重建、不打开浏览器。操作员运行 `pnpm dev` 后使用审阅链接
`http://127.0.0.1:8000/?review=<build>#<key>`（根目录 `index.html` 会自动发现同一服务）。

最终回复不超过 8 行，写清：

- key、Adapter、Build 与当前状态；
- 审阅链接；
- 录入的指标 / 节点数量，Other 与最小值的处理；
- 未决问题或偏离原图之处（没有就写「无」）；
- 没有运行、或失败后跳过的检查。

不写处理记录文件。需要更多细节时，操作员可运行 `record:workflow report` 生成处理单。

## 5. 记录审阅、seal 与本机发布

操作员在对话中明确表示通过（如「人工审阅通过」「全部审阅完毕」）后，执行者写
简式审阅记录，不再逐项询问：

```json
{ "reviewToken": "<show 返回>", "previewId": "<工作台候选 id>", "reviewer": "<操作员>", "decision": "accepted", "note": "<操作员原话与日期>" }
```

`previewId` 用 HTTP 读取，不开浏览器：
`curl -s 'http://127.0.0.1:8000/__trace/status?source=review&key=<key>'`，取
`preview.candidate.id`，并确认其 `members` 中该 Build 的 `reviewToken` 与 `show`
一致。`record:workflow review` 校验候选仍是最新，把接受展开为逐项检查记录、
interface matrix 与 attention，并标注依据。不通过或有问题时，用
`record:workflow feedback` 记录，修复后重新 `continue`，不写 `decision` 为拒绝。

随后依次执行 `record:workflow seal <build>`、`publish:datasets -- plan <build> [...]`、
`publish:datasets -- commit <plan-digest>`。本机发布只切换本机正式快照，不代表已上线。

## 6. 上线（仅在操作员要求推送后）

1. `pnpm release:git -- prepare <published-digest>` 在私有候选中合并已发布贡献与 HEAD，
   跑 `check` 与 `build:site`。
2. 结果中 `acceptance.inheritsBuildAcceptance` 为 `true`，说明候选使用与审阅时相同的
   应用代码。此时推送指令已覆盖该候选，记录
   `{ "operator": "...", "accepted": true, "candidateDigest": "...", "basis": "inherited-build-acceptance" }`
   即可。为 `false` 时，向操作员说明应用变化并等待确认，再用 `basis: "displayed-candidate"` 记录。
   记录命令：`pnpm record:transport-review -- <transport-id> --input <review.json>`。
3. `pnpm release:git -- commit <transport-id>`，然后 `pnpm release:git -- push <transport-id>`。
4. `gh run watch` 等待 CI；失败先修复，再只跑失败的最小检查。
5. `pnpm verify:release -- --online --key <key> [--key ...]` 核对线上版本来自该提交，
   且每个新 key 已部署。`verify:release` 的默认模式是 CI 专用门禁，本机不单独运行。

## 7. Operator Review-Completion Signal

操作员明确表示人工审阅完成（包括「人工审阅完毕」「Processing 内所有图片已审阅
通过」），或表示已推送并合入 `main`，即为完成信号。信号覆盖它所指的范围：
点名「Processing 内所有」即整个 `input/processing/`，只说本任务则为本任务的 Build。

1. 用 `record:workflow archive-list [<build>]` 枚举该范围的完整来源清单与摘要。
2. 在回复中列出清单，**不再追问**。只有清单包含 outside the scope the signal names
   的来源（例如信号只指本任务，而目录里还有其他 Session 的材料）时，才停下来询问。
3. `record:workflow archive --input <signal.json>` 消费信号、`sourceListDigest` 与明确
   的 `entries` 或 `buildIds`，把来源移到 `input/processed/`。若 same-name destination
   已有不同字节则安全失败；相同字节只用于恢复中断的复制后删除。
4. 把 tracked processing 队列中的删除随交接提交；`input/processed/` 永不 force-add。

这是唯一的来源搬移授权。它不需要也不产生 Build 收据、seal 或审阅记录；没有信号时
来源留在 `processing/`。

## 8. 收尾清理

所需审阅、发布、归档与交付都完成，且没有其他 Session 使用工作台与产物目录后，
停止 `pnpm dev`，执行 `pnpm clean:artifacts -- --completed`。保留范围见
[artifact-retention.md](artifact-retention.md)。

## 9. 协作、恢复与资产

- 多个 Session 共用同一检出：各自的普通 Build workspace、owner 与 generation，不建
  Git worktree，草稿中不运行 Git。认领、转交、恢复与工作台细节见
  [local-environments.md](local-environments.md)。
- 正式版本变化后，旧草稿先 `record:workflow refresh <build>`，再按新结果审阅。
- 新反馈写入 `record:workflow feedback`，会使旧审阅失效，并列出同批需要横向排查的
  Build；防复发协议见 fidelity §5。
- 图标先查 `record:workflow assets <build>`；新版本在草稿中用 `asset-version` 记录。
  资产目录规则只由 [data/assets/README.md](../data/assets/README.md) 定义。
- 通用指标的 `source-facts/v1` 字段示例见
  [source-facts.example.json](examples/source-facts.example.json)。其中 `questions` 非空时不能审阅；
  PNG 位置用 `image-box`，文本用 `text-range`（UTF-16 区间）。
