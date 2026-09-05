# 图片与文字的指标入库流程

项目的主线是：**处理材料 → 在根目录 `index.html` 审阅 → 确认通过 → 同一页面显示正式结果**。
图片和文字是来源格式；利润表、收入序列、通用指标是内容类型，分别判断。
本文件是新输入的操作入口。桑基图的详细质量规则仍只由
[fidelity-loop-rules.md](fidelity-loop-rules.md) 定义。

## 一份材料怎样处理

1. 执行者先完整阅读原图或原文，把事实、原文位置、必要说明和疑问写入
   `source-facts/v1`。识别由执行者完成；程序负责校验与编译，不宣称能可靠地
   自动识别任意图片。读不清的内容放进 `questions`，不得猜测后通过检查。
2. `record:workflow start` 接收材料，检查重复，固定原始字节的摘要，在
   `input/processing/` 认领来源，并建立该 Build 的独立工作目录。
   正式目录和其他 Build 不会被草稿修改。
3. `record:workflow continue` 根据现有 Build 记录继续。通用指标自动生成
   数据文件、对象清单、来源覆盖、检查计划、审阅包和检查证据。桑基图与收入
   序列在返回的工作目录内编写原有 SSOT / Adapter，再由同一个入口编译记录。
4. `prepare` 成功后，根目录 `index.html` 自动显示本次完整查看器，并标注「待人工审阅」。
   直接双击文件即可，无须启动本地服务。数据检查通过后，用 `record:workflow report` 生成 HTML 处理单，直接对照
   原材料和结果。要求还原的桑基图先完成结构、文字、细节与语言三个阶段；
   执行者查看每轮图形证据，再记录冻结决定。修改相关输入会重开受影响阶段。
5. 审阅者在根目录 `index.html` 检查实际交互结果，并结合处理单核对原材料。
   可以在处理单逐项选择并导出记录，或在当前任务明确回复「人工审阅通过」，由执行者
   将该明确确认绑定当前审阅包及所有必需决定；不得补造未确认的判断。`record:workflow review` 校验该记录
   是否对应当前结果。机器通过不能替代人工接受；旧版本的审阅不能接受变化后的数据。
6. `record:workflow continue` 完成已审阅结果的基线暂存和最终检查，记录
   `SEALED`。这里仍没有正式写入。只有 `publish:datasets plan` 检查整批合并结果，
   再由 `publish:datasets commit` 完成正式版本切换。执行者收到本次明确通过后连续完成
   这些已授权步骤，不再另问是否发布。根目录页面自动切换为「已审阅通过 · 已发布」。

源文件支持 PNG、UTF-8 TXT 与 Markdown。文字位置采用解码后字符串的 UTF-16
区间；图片位置采用原始像素矩形。格式不支持时明确报错，不转换成虚构坐标。

## 最少需要填写什么

通用指标只填写一份事实文件，不手工拼装多个清单和摘要。
完整示例见 [source-facts.example.json](examples/source-facts.example.json)，
对应 [source-facts.example.txt](examples/source-facts.example.txt)。字段含义：

| 字段 | 要求 |
| --- | --- |
| `subject` | 公司或产品的类型、稳定名称标识、来源中的名称 |
| `period` | 原材料明确给出的时间；不要擅自把财年改成自然年 |
| `basis` | 指标口径；来源未说明时明确写 `unspecified`，不冒充 GAAP 或审计数据 |
| `metrics` | 每项指标的稳定标识、名称、十进制字符串、单位、币种、原文及位置 |
| `context` | 主体、日期、单位、口径、必要脚注的原文与位置 |
| `exclusions` | 不进入系统的非语义内容及原因，例如作者水印；“其他”金额不可排除 |
| `questions` | 暂未解决的问题；非空时不能生成可接受的结果 |

PNG 中的指标用 `image-box`；文本用 `text-range`。同一事实文件同时生成
SourceCoverage 和 ObjectInventory，避免重复抄录。文本还会检查是否存在未交代的
非空白、非标点内容；图片是否完整读取仍须在全图审阅中确认。

桑基图事实文件使用 `objects`：每项包含一次 Source 观察和对应的 `object`
映射、特征及原始测量。原有金额精度、Other、小额可见性、接口和语言要求保留。
[dynamic-dataset-workflow.md](dynamic-dataset-workflow.md) 的九步细节适用于这些
专业处理步骤；在新 Build 的独立目录中执行。

## 检查和返工怎样安排

处理状态只有现有的 DatasetBuild 状态。处理单、耗时、资产计划和下一步都是
这些记录的视图；批次清单只记录任务成员，不增加一套人工状态账本。

- 每个 Build 自动记录工具、规则、数据、原材料及资产依赖。检查也会发现新增、
  删除或变化的依赖，不仅检查调用者列出的文件。
- 共享目录与公司文件的**本项贡献**单独固定；其他公司的注册变更不会让本项
  审阅失效。共享文件整体仍由最终检查和整批投影验证。
- 三阶段记录绑定相应数据与图形范围。只改 `layout.labels` 的位置会重开文字与
  后续阶段；数据与结构未变时，其阶段记录可以保留。未知变化保守重查。
- 新独立 Build 的 `prepare-review` 强制生成完整依赖和阶段策略，不能通过少填
  文件列表绕过。历史 Build 保留原记录；不会补写虚构的冻结或审阅。
- 最终 seal 始终重新执行适用的完整检查。阶段复用不代替最后一道检查。

新反馈仍写入现有 FeedbackLedger。独立 Build 的新反馈或明确重开会更新审阅上下文，使旧完成状态失效，须重新准备与审阅。`record:workflow feedback` 同时列出同批需要
横向排查的 Build。跨检出案例索引由 casebook 自动生成；准备阶段按所用规则列出
命中案例。执行者须按 [fidelity-loop-rules.md](fidelity-loop-rules.md) §5 关闭问题、
记录同批检查，并落实要求的防错升级。

## 图标先查再做

`record:workflow assets <build-id>` 查看资产来源、裁剪说明、内容摘要、直接及
间接使用位置。只有绑定当前字节、当前裁剪说明且有明确接受记录的版本标为可复用。
没有独立接受记录的历史资产显示为需审阅，不能自动冒充已确认版本。

裁剪 JSON 进入 Git，并随资产进入正式快照；原始 processed 图片仍只保存在本机。新版本在 Build 草稿中
通过 `asset-version` 记录，随数据一起发布。矢量与经检查的运行时栅格两条路径都
允许，具体要求只由 [data/assets/README.md](../data/assets/README.md) 定义。

## 批量输入、发布与恢复

`record:workflow batch --input <batch.json> --concurrency 2` 先认领并保存成员清单，
再用独立进程继续各自的 Build。一个任务失败不会替另一个任务标记完成。
同一批同一路径若有不同修改，会报明确冲突；不会自动覆盖。相同主体、时间、
指标标识和口径的通用指标也会报重复，需明确处理新旧来源关系。

正式版本位于 `output/publications/trees/<digest>/`。发布前已完成整批检查，提交时
只原子替换 `current.json`。浏览器先进入带版本摘要的路径，再加载该版本全部文件，
不会混用两版脚本或资产。再次提交同一计划返回原收据；提交前失败保留旧正式版本；
提交结果未知时按原计划摘要查询并恢复收据。

当前版本发生变化时，旧计划不能盲目重试。`record:workflow refresh <build-id>`
检查路径冲突、更新工作目录和工具，重新准备，再完成适用的审阅与新 seal，最后
生成新发布计划。相同文件的实质冲突须先由执行者核对解决。

根目录 `index.html` 是固定的本机审阅入口。运行一次 `pnpm dev` 后，文件入口发现同项目
HTTP 工作台。默认将已准备草稿和项目数据汇入同一个固定 Pages 候选，在公司/期间列表
内查看，用“上一项 / 下一项”依次验收。任务地址为 `/?review=<build-id>#<key>`。
每个标签页固定整份候选及成员；新候选仅提示，点击“载入更新”后才切换。
自动更新开发视图与单项排查放在“更多”，CI / 版本信息收在详情；线上对照仍可直接切换。
没有服务时保留原来的离线选择，`?offline` 显式使用离线方式。

并发处理必须记录 Session owner/generation，进入自己的普通 Build workspace，不创建
Git worktree，也不在草稿中操作 Git。新 Session Build 的审阅输入还需 `previewId`，绑定
工作台展示的有效生产预览。详细命令、恢复规则与环境状态由
[local-environments.md](local-environments.md) 维护。
`pnpm dev -- --draft` 查看原始静态源文件；`pnpm view:published` 查看正式快照。

`release:dataset <published-digest> site|standalone` 只从该正式版本生成并检查输出。
失败保存独立 Attempt，不改变已经发布的数据；重试创建新 Attempt。这里不自动部署。

### GitHub Pages 上线交接

当前 GitHub Pages CI 从 `main` 的 Git 工作树运行 `build:site`；它拿不到本机忽略的
`output/publications/`。因此本机「已发布」只证明本机正式快照已切换，不能据此报告
线上已更新。用户要求上线时，执行者须继续完成以下交接：

1. 用 `release:git prepare <published-digest>` 从已发布贡献和当前已提交代码生成完整候选。
   它不覆盖应用代码或无关草稿，按记录合并同一公司文件，投影注册和固定的显示时间。
2. 在工作台 `/?source=<transport-id>` 查看通过检查的候选，并把真实确认记录为
   `record:transport-review <transport-id> --input <review.json>`。历史 Build 接受不自动
   接受后来改变的应用或集成结果。
3. `release:git commit <transport-id>` 使用共享发布写锁、明确的路径清单、私有临时
   index 和恢复日志。有关 Source 的 tracked queue 变更随数据提交；processed 保持忽略。
4. 你明确要求推送后执行 `release:git push <transport-id>`；等待 CI 及 Pages 部署成功，
   读取线上清单并实际打开每个新增 key。CI 对 transport 提交校验审阅与实际产物映射。

这条交接保留本地 Publication 的单指针事务。Git 工作树应用是可恢复操作，
不声称多文件原子替换。完整协议和失败恢复见 [local-environments.md](local-environments.md)。

## 原材料何时归档

来源在系统里的位置和摘要随数据发布；本机文件归档仍只接受明确的操作员完成信号，
见 [dynamic-dataset-workflow.md](dynamic-dataset-workflow.md) 的 Operator Review-Completion
Signal。`archive-list <build-id>` 只枚举所选 Build 的完整 Source 清单；省略 Build
才枚举整个 processing。`archive --input <signal.json>` 消费对应摘要以及明确的 `entries`
或 `buildIds` 和确认，不会带走其他 Session 的材料。目标不同内容则拒绝；相同内容仅用于恢复已经复制但尚未删除的中断移动。
processed 永不 force-add。

## 现有资料与命令

[自动生成的命令及协议表](workflow-command-reference.md) 是当前可执行入口清单。
底层 `record:build` / `record:fidelity` 继续可用；旧 Build 使用原版本协议，独立新
Build 由完整依赖和检查点策略约束。架构分工与迁移状态只在
[architecture/README.md](architecture/README.md) 维护。

## 最后清理

所需验证、Source 归档及交付全部完成后，停止工作台并执行
`pnpm clean:artifacts -- --completed`。删除工作副本、图形证据、报告、预览与本机发布树，
只保留精简历史 meta；已确认完成时不再重复询问。先验证再清理，清理后再统计目录大小。
保留范围与旧 Build 不可恢复的含义只由 [artifact-retention.md](artifact-retention.md) 定义。
