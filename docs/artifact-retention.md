# 产物保留与完成后清理

`output/` 和 `compare/` 是本机处理空间，不是永久归档。处理期间只生成当前检查、
审阅与交付需要的产物；流程完成后只保留最小历史 meta。原材料继续由
`input/processed/` 保存，正式数据由项目的 `data/`、运行资产和 Git 保存。

## 完成后的唯一收尾入口

```bash
pnpm clean:artifacts                         # 只统计，不删除
pnpm clean:artifacts -- --completed          # 整个本机流程完成，执行清理
pnpm clean:artifacts -- --completed --dry-run --json
```

`--completed` 表达操作员已确认所有本机处理及所需交付完成。已有的完成确认即为授权，
执行者不重复询问。它不从 `SEALED`、机器检查或单个 Build 的发布自动推断完成。
先完成所需审阅、closeout 检查、Source 归档及 Git 交接，再停止本项目 `pnpm dev`
和其他正在运行的处理命令，执行清理。并发任务尚在使用这些目录时不能运行全局清理。
命令遇到工作锁、存活的工作台进程或损坏的 metadata 会在删除前报错，不抢锁。
旧版本工作台没有进程记录，执行者仍须先停止它。

清理删除两个目录内的 Build 工作副本和对象、图形证据、截图、Diff、处理单、临时脚本、
报告、回归与 Pages 缓存、预览、发布树及候选、Git transport workspace，以及 standalone。
同时删除本机 `current.json`、selection 和工作台提示，避免入口引用已删除的文件。
根目录 `index.html` 回到项目数据；此后新的 intake 以项目数据建立新基线。
交付文件如需长期保存，应在清理前按用户要求保存到明确的交付位置。

仅留下：

- `output/meta/history.json`：Build ID/key、历史状态、审阅状态、Source 定位与摘要、
  manifest/最后收据摘要，以及发布、Git 交接收据。
- `output/meta/cleanup.json`：最近一次清理时间、文件数、字节数和汇总数量。
- `compare/.gitkeep`：空目录占位。

历史摘要明确标记 `historicalOnly: true`、`evidenceRetained: false`。它不是可恢复的
Build ledger，不是当前 Publication pointer，也不能代替原图证据、人工判断或 fresh seal。
清理后的旧 Build 不能再执行 inspect/finish/seal/release 来证明当前有效性；重新处理时
建立新 Build 并重新验证，不补造旧证据。清理不会伪造接受状态、归档 Source、修改正式
SSOT 或执行 Git 推送。

摘要先原子写入，再删除大文件。中断后重跑会合并此前摘要，不依赖已删除的 manifest；
重复执行不会增生备份或全量文件清单。不扫描嵌套符号链接的目标，不接受符号链接根目录。
该命令是显式本机维护操作，不属于 `verify/record/publish/release` 的生命周期转换。

## 运行中自动清理

以下清理挂在完成工作的命令末尾，在对应锁内执行；遇到正在运行的操作或锁超时即跳过，
由下一次触发补做。删除的都是后续生命周期步骤不再读取的产物，小型 JSON 记录保留。

| 触发 | 删除 | 保留 |
| --- | --- | --- |
| `publish:datasets commit`、`archive`、`recover-intake` | 已本机发布且全部 Source 已按完成信号归档的 Build，以及被 intake successor 接替的前任 Build：`workspace/`、`objects/`、其工作台预览与 local-view 条目 | `manifest.json`、`session.json`、`successor.json` 等，并写 `cleaned.json`；此后 `record:workflow` 对它报 `BUILD_CLEANED` |
| `release:git push` 成功 | 该候选的 `workspace/`（含 `_site`）与私有 index | plan、approval、journal、receipt |
| `release:git prepare` | 失败的本次候选目录；基线 HEAD 已过期且未开始提交的旧候选 workspace | 同上 |
| 上述四个命令之后（持发布锁） | 不再被引用的 `output/publications/trees/*` 与 `output/workflow-bases/*` | 当前指针树；尚未推送的发布的基线与结果树；未清理 Build 的 `base.json` 所指基线。尚无发布时不清扫 |

命令输出的 `retention` 列出删除与跳过的条目。全局 `clean:artifacts --completed` 仍是
最终复位入口。

## 处理中减少输出

- 整树副本（Build workspace、冻结基线、发布 plan 与快照树、release 与 Git 交接候选、
  工作台预览快照、工具目录）在 macOS 上用 APFS 克隆（`cp -c`），未修改的文件不占
  数据块；其他平台或无法克隆时退回普通复制。`du` 仍按表观大小统计，以 `df` 判断实占。
- 基线已是不可变发布树时，草稿直接引用该树，不再冻结到 `output/workflow-bases/`。
- `publish:datasets commit` 结束后，已提交的 plan，以及基线已被正式指针越过、永远无法
  提交的 plan，只保留 `plan.json`（与 `conflict.json`）；候选树随即删除。
- `verify:d3` 默认在 `finally` 清除私有 scratch；只有实际排错时使用 `--keep`。
  `record:fidelity` 的证据归档只含候选图、metrics、interface audit 与 `fidelity-run.json`；
  原图留在 Source 位置，diff 只在 `--keep` 的 scratch 中。同一 Build、语言与 focus 的
  新证据落地后删除更早的归档，审阅只绑定每语言最新一份。流程完成后统一清除其余证据。
- 优先复用当前摘要对应的检查结果；按 [输入流程](asset-workflow.md) §3 的检查边界选择必要检查，避免为写报告
  再渲染一遍。临时截图与调试记录放在命令拥有的私有目录，成功和失败路径都负责清理。
- 工作台构建后立即删除 source/cache；失败候选连同半成品 site 删除。服务运行期间
  每个来源只保留当前与上一版成功站点（供仍停在旧版的标签页），更早的站点删除；
  正常退出时等待在途构建完成，删除本进程生成的 site，仅保留 candidate meta。启动时
  删除已退出进程的服务记录；没有存活服务时清空 `output/workbench/previews/`。
  重启重新构建候选，不将旧预览 URL 当成永久交付地址。
- standalone 与 HTML 处理单按交付/审阅需要生成，不再提交生成的 standalone 到 Git。
  需要时运行 `pnpm build:standalone` 重建；完成后仍由统一清理删除。
- 最终检查也可能生成缓存或截图，清理必须放在检查和交付之后。最后统计
  `du -sh output compare`，确认只剩上述 meta，再报告清理结果。

`scripts/clean-compare.sh` 仅是历史顶层 scratch 工具，不能代替本收尾入口。
