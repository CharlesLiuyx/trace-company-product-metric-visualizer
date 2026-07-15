# Commit 提交信息规范

本项目采用轻量版 Conventional Commits。提交信息要让审阅者快速判断：

- 这次改动属于哪一类；
- 影响了哪个项目区域；
- 是否会改变数据、渲染结果或验证流程；
- 需要运行哪些检查。

## 格式

```text
<type>(<scope>): <summary>

<body>

<footer>
```

只有第一行是必填项。`body` 和 `footer` 在改动复杂、存在破坏性变化、
或需要解释验证结果时再写。

示例：

```text
data(nvidia-q1-fy27): tune operating expense label placement
```

## 第一行规则

- 使用英文，祈使句或短动词短语，例如 `add`、`fix`、`tune`、`register`。
- 全部小写开头，结尾不加句号。
- 建议不超过 72 个字符；必要时把细节放到正文。
- 一次提交只描述一个清晰目的。不要把无关的数据、渲染器、文档改动塞进同一个提交。

## type

| type | 适用场景 |
|---|---|
| `data` | 新增、更新或调参 `data/datasets/*.js` 数据集，或记录 Source 在 Git-tracked `pending/` / `processing/` 共享队列中的变更 |
| `render` | 修改 `src/sankey-engine.js`、图形几何、颜色、字体、导出、交互等渲染行为 |
| `feat` | 新增用户可见能力，例如新的模式、导航、导出选项 |
| `fix` | 修复错误行为、计算错误、注册遗漏、UI 失效 |
| `verify` | 修改 `scripts/verify-d3.mjs`、验证指标、纯度检查、比较流程 |
| `docs` | 修改 `README.md`、`docs/*.md`、说明文字 |
| `schema` | 修改 `data/schema.md` 或数据集字段约定 |
| `refactor` | 不改变行为的代码重组 |
| `test` | 新增或调整检查、测试夹具、验证用例 |
| `chore` | 依赖、锁文件、格式化、仓库维护 |

## scope

`scope` 应该指出主要影响区域。推荐使用以下写法：

- 数据集 key：`nvidia-q1-fy27`、`salesforce-q1-fy27`
- 文件或模块：`engine`、`icons`、`verify-d3`、`schema`、`readme`
- 工作流区域：`input`、`export`、`reference-mode`、`d3-mode`

如果一次提交确实跨多个紧密相关区域，优先选择用户最关心的结果作为
`scope`，并在正文说明其余影响。

## 正文

当第一行不足以解释原因或风险时，写正文。正文应说明：

- 为什么需要这次改动；
- 关键实现或取舍；
- 是否影响 d3-sankey 输出、Reference 模式、导出结果或数据口径；
- 运行过哪些验证命令，以及关键指标。

示例：

```text
data(nvidia-q4-fy26): tune gross profit flow alignment

Adjusts the explicit node layout to reduce overlap around gross profit while
keeping all source values unchanged.

Verification:
- node --check data/datasets/nvidia-q4-fy26.js
- pnpm verify:d3 -- nvidia-q4-fy26
- RGB MAE: 12.84, MAE similarity: 0.9496, imageCount: 0
```

## footer

需要时使用 footer 记录关联事项：

```text
Refs: #123
Fixes: #123
BREAKING CHANGE: dataset meta.referenceImage must include width and height
```

只有当现有数据集、API、验证命令或使用方式不兼容时，才写
`BREAKING CHANGE`。

## 项目专用示例

```text
data(salesforce-q1-fy27): add income statement dataset
render(engine): support fixed label anchors
verify(verify-d3): fail when candidate svg contains unapproved raster images
docs(readme): document d3 fidelity workflow
schema(layout): clarify low-level node overrides
chore(deps): pin playwright 1.61.0
```

## 拆分提交建议

- 新数据集提交：把 `data/datasets/<dataset-key>.js` 和
  `data/dataset-manifest.js` 注册（`pnpm sync:index-datasets` 生成）放在同一个
  `data(<dataset-key>)` 提交中。`input/pending/` 与 `input/processing/` 是
  Git-tracked 共享队列；提交属于该数据集的 queue/claim 变更，让其他项目能看到
  当前归属。`input/processed/` 是整目录忽略的本机归档，不论 Source availability
  为何都不得强制纳入 Git 或改写 availability。只有操作者完成信号（人工审阅完毕
  或已推送并合入 `main`）按工作流 owning 规则移动 Source：先枚举整批并呈清单
  给操作者确认，确认后 no-clobber 移动（细则见
  `docs/dynamic-dataset-workflow.md` §Operator Review-Completion Signal）；
  Build close-out 本身不移动文件。移动后提交 Git-tracked processing queue 中的
  删除，但不要 force-add processed PNG。该 Source locator 变更
  不是 M4 Publication；processed 图片永不改名或覆盖。
- 渲染器支持提交：如果为了某个数据集新增通用渲染能力，单独用
  `render(engine)` 提交，再用 `data(<dataset-key>)` 提交应用调参。
- 验证脚本提交：任何改变 d3 评分、纯度断言或截图流程的改动，用
  `verify(verify-d3)` 单独提交。
- 文档提交：不改变行为的说明更新，用 `docs(...)` 或 `schema(...)`。

## Dataset metadata 提交保护

`data/dataset-file-metadata.js` 依赖已经形成的 Git author time，所以提交前的
`pnpm check` 无法预知新提交时间。`pnpm install` 会在当前仓库尚未配置
`core.hooksPath` 时启用 `.githooks/`：

- `post-commit` 只在本次提交包含 `data/datasets/` 或
  `data/revenue-metrics.js` 时重新生成 metadata；若结果变化，会保留为工作区改动并
  提示把它 amend 到原提交或另行提交；
- `pre-push` 重新执行只读新鲜度检查，并确认最新 metadata 已进入 `HEAD`；过期或只在
  工作区/暂存区中的结果都会阻止 push，避免问题直到远端 CI 才暴露。

已有自定义 `core.hooksPath` 时安装过程不会覆盖它：可以把上述两个 hook 整合进自定义
路径并保留原配置；若决定改用仓库 hooks，则先移除自定义配置，再运行
`pnpm setup:git-hooks`。该命令遇到未解决的自定义路径会明确失败。hook 是本地提前
反馈层，不能替代 `pnpm check` 或 GitHub CI。

## 提交前检查

本文档只拥有 commit 格式和原子提交边界，不拥有另一份验证矩阵。按
[`docs/dynamic-dataset-workflow.md`](dynamic-dataset-workflow.md) 的当前
Verification Checklist 执行；架构迁移后的 `ChangeImpact → VerificationPlan`
语义由 [`docs/architecture/`](architecture/README.md) 拥有。不得用本提交规范中
较短的示例命令替代工作流要求的 fresh final verification、人工 closure 或
per-key baseline 记录。

提交信息里的验证结果应与实际运行命令一致。不要把 Reference 模式、
源图 `<img>` 或源图裁剪覆盖层的结果写成 d3-sankey 验证结果。
