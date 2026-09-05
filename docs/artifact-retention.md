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

## 处理中减少输出

- `verify:d3` 默认在 `finally` 清除私有 scratch；只有实际排错时使用 `--keep`。
  `record:fidelity` 在人工审阅与封存前保留规则要求的证据，流程完成后统一清除。
- 优先复用当前摘要对应的检查结果；按既有 stage/locale 规则选择必要检查，避免为写报告
  再渲染一遍。临时截图与调试记录放在命令拥有的私有目录，成功和失败路径都负责清理。
- 工作台构建后立即删除 source/cache；失败候选连同半成品 site 删除。服务运行期间
  保留成功站点以支持固定候选的标签页；正常退出时等待在途构建完成，删除本进程生成的
  site，仅保留 candidate meta。重启重新构建候选，不将旧预览 URL 当成永久交付地址。
- standalone 与 HTML 处理单按交付/审阅需要生成，不再提交生成的 standalone 到 Git。
  需要时运行 `pnpm build:standalone` 重建；完成后仍由统一清理删除。
- 最终检查也可能生成缓存或截图，清理必须放在检查和交付之后。最后统计
  `du -sh output compare`，确认只剩上述 meta，再报告清理结果。

`scripts/clean-compare.sh` 仅是历史顶层 scratch 工具，不能代替本收尾入口。
