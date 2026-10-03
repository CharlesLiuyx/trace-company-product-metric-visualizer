# 本地开发、并发处理与生产对齐

本项目支持多个 Codex / Claude Code Session 打开同一个项目目录处理 pending。
每份 Source 使用普通 Build 草稿目录；无需创建 Git worktree 或切换分支。
公共应用代码的修改集中在根目录；输入处理只写自己的 Build workspace。
新 Build 使用根目录当前应用代码与 canonical 数据基线，避免继承正式数据树里的旧 UI。
发布计划绑定 applicationDigest；应用在准备后改变时需 refresh 并重新检查。

## 你的日常操作

处理步骤、检查边界与交付格式只由 [输入流程](asset-workflow.md) 定义。本文件只补充同一检出
多 Session 并发、工作台与 Git 传输的机制。

1. 在任意 Session 指定 `input/pending/` 的一份或多份文件。`record:workflow start` 返回
   Build、workspace、Session owner 和 generation，后续命令携带这些值。
2. 运行一次 `pnpm dev`（不同 Session 自动复用同项目已有服务），打开根目录 `index.html`
   或 <http://127.0.0.1:8000/>。默认进入统一验收：已准备的草稿与项目数据在同一个公司/期间
   列表中，「上一项 / 下一项」依次定位；指定任务使用 `/?review=<build-id>#<key>`。
3. 在工作台审阅当前候选，在原 Session 明确确认。执行者按输入流程 §5 一次接受并封存
   与本机发布，不再另问。
4. 你要求推送时，执行者准备 Git 集成候选；继承 Build 接受的候选直接提交推送，否则先说明
   变化并等待确认。
5. CI 检查同一份 Pages 产物并部署；执行者用 `verify:release -- --online` 以 HTTP 核对线上版本。

## 统一验收与辅助视图

| 视图 | 行为 | 审阅含义 |
| --- | --- | --- |
| 本机验收（默认） | 项目当前应用与数据，加上所有成功 prepare 的普通草稿，以各自不可变 base 做三方合并；在私有临时目录重建注册和 Pages 产物 | 一个公司/期间列表；上一项 / 下一项只改数据选择，不换环境。默认自动载入最新成功 candidate，保留当前公司、期间、语言、主题、视图和滚动位置；URL 记录所载入候选 |
| 线上对照 | 读取生产清单，并核对同一 key 是否存在 | 不存在时显示“尚未上线”；读取失败显示未知或过期 |
| 更多 → 开发 · 自动更新 | 统一视图自动切换至最新成功的汇总版本；单项排查使用该 workspace 源文件自动刷新 | 适合快速调整，保留当前 hash、语言、主题、视图和滚动位置 |
| 更多 → 单项排查 | 可查看项目工作树、历史 Build 或 Git 集成候选；兼容 `/?source=<build-id>` / `/?source=<transport-id>` | 故障定位及独立集成审阅；点击“本机验收”回到统一页面 |

汇总仅写 `output/workbench/previews/review/` 下的临时输入、不可变站点及候选收据；
不修改草稿、公共数据、Publication pointer 或 Build 状态。只纳入成功公布的 prepare
记录，历史未公布 Build 不自动加入。多个草稿的同一记录不同字段可按已有 typed SSOT
规则合并；同字段冲突、重复 key、删除或缺失基线阻止新候选，保留原候选并显示错误。
队列及每项的待验收状态绑定所见候选；新成员随完整新候选自动进入页面。二次修改已经准备的草稿也会自动重建，不要求操作员再 prepare、点击更新或推送。更多 → 暂停自动更新（`follow=0`）仅供主动对照旧版本；恢复自动更新后立即跟进最新成功候选。自动更新不产生人工接受，验收仍引用实际显示版本的 `displayed.id` 与对应 reviewToken。

候选 `members` 分别绑定每个 Build 的 sourceDigest 与 reviewToken。只有其当前检查
仍然有效，且汇总后该 Build 的语义数据、显示时间、应用代码与已有资产仍一致，才给出
可用于验收的 reviewToken；否则显示“待任务更新检查”。`record:workflow accept`（以及兼容入口 `review`）
从实际显示候选解析成员，核对 token、workspace 的 source 摘要与站点完整性。
候选自己的工具版本已冻结；根目录后来更新工具或文档不会使它失效。
同页查看、切换下一项或自动构建均不产生人工接受；一份候选也不会替另一份 Build 接受。

工作台自动构建只证明产物完整、摘要自洽，不替代人工接受或 `verify:site`。
每个候选绑定源文件摘要、工具摘要；可接受成员另绑定有效的 reviewToken。带 Session 所有权的新 Build
执行接受时必须引用对应 previewId，成员输入已变或站点字节被改写的候选不能通过。
Git 集成候选还执行 `check`、`build:site` 和 `verify:site`。

保存事件合并 500 ms 后开始重建；工作台最多同时构建 2 个候选。先比较实际输入摘要，相同内容的重写不重建；工作报告生成不触发汇总。失败保留上次成功结果，
明确标示过期；后续保存成功后自动恢复。草稿文件以有并发上限的读取计算摘要，只有文件身份、大小、mtime 与 ctime 均一致才复用摘要；新增、删除、重命名仍重新枚举。该缓存仅用于预览，正式审阅与发布继续独立校验原始字节。验收绑定先比较应用、资产和语义贡献，再对可绑定项执行完整检查；独立 Build 检查最多并发 4 项。CI 和生产状态最多每 30 秒刷新，线上数据查询在后台进行，同一请求合并，不阻塞本机操作；工作台关闭后停止这些查询。页面事件合并推送，折叠的版本详情按需生成；工作台页面模板变化也自动重新载入。
激活预览前按实际源文件摘要、草稿摘要和成员列表核对新鲜度；审阅报告保存或内容相同的
文件重写不会仅因触发文件事件而作废候选。实际数据或成员变化仍会阻止过期候选激活。
打开工作台不授予浏览器写盘审批、提交或推送权限，`/__trace/*` 的写请求会被拒绝。

## Session 认领、转交与恢复

```bash
pnpm record:workflow -- start --source input/pending/example.png \
  --key example-q1 --facts output/example-facts.json --session session-a --json

# 用 start 返回的真实值替换 build-id / generation；不同 Build 各自保管 generation。
pnpm record:workflow -- continue <build-id> --session session-a --generation <generation>
pnpm record:workflow -- show <build-id> --json
```

Codex 可从 `CODEX_THREAD_ID` 取得默认 owner；Claude Code 也可显式传 `--session`。
没有会话标识时 CLI 会生成并返回一个，执行者必须保存它。
低层 `record:build` / `record:fidelity` 命令使用同样的 `TRACE_SESSION_ID` 与
`TRACE_SESSION_GENERATION` 环境变量，Build store 在写入前核对它们。

- 同一 Source 的内容摘要只允许一个 key 认领；共享队列锁只覆盖短认领操作。
  大文件复制和后续验证在各自的 workspace 中完成。初始基线也保存为不可变普通目录。
- 草稿目录的 `.git` 是阻止向父目录寻找 Git 仓库的屏障文件；不共享根目录 Git index。
  共享 `node_modules` 只用于读取依赖。草稿中不运行 `git add/commit/push`。
- `release-session <build-id> --session ... --generation ...` 由原 owner 释放执行权；
  新 Session 使用 `session <build-id> --session ...` 获取新的 generation。
- 崩溃恢复使用 `recover-session <build-id> --session <new-owner> --generation <observed-generation>`。
  它等待当前 Build 操作结束，再核对旧代次、更换代次；旧进程恢复后无法继续记录。
  不会仅因某个超时时间就偷取正在运行的任务。
- 进程在操作锁内崩溃时，先读取锁中的 PID 和 token，确认进程已经退出，再使用
  `recover-lock --lock <project-relative-lock> --token <observed-token>`。
  活跃 PID、不同 token、未知路径均拒绝恢复。空的历史锁需要人工调查，不能盲删。

同一公司文件按 record key 合并，再递归比较字段；具有 key/id/date 的对象数组按身份合并。
不同期间或不重叠字段可合并。同一字段的不同值、编辑与删除相撞、未知代码写法会列出冲突，
保留双方草稿。合并器只解释白名单 AST，不执行 Source JavaScript。
当前支持 income-statement、company-profile 和 revenue SSOT。
其他资产发生同路径不同字节时须明确解决，不能“最后写入者覆盖”。

旧 Publication base 已变化时执行 `refresh`，检查合并结果，再准备、审阅、seal。
当前采取保守的重新审阅策略；历史接受仍保留，但不会凭“看起来无关”自动套用到新 seal。
应用代码升级需要刷新受影响草稿；仅根目录工具或文档升级可继续接受已冻结候选。
具有旧共享 `.git` 链接的历史草稿仍应先 refresh 移除链接。

## 从已发布贡献生成可推送提交

```bash
pnpm release:git -- prepare <published-digest>
pnpm release:git -- inspect <transport-id>
# 工作台地址：/?source=<transport-id>
pnpm record:transport-review -- <transport-id> --input <human-review.json>
pnpm release:git -- commit <transport-id>
# 仅在你明确要求推送时执行：
pnpm release:git -- push <transport-id>
```

`human-review.json` 使用 `{ "operator": "...", "accepted": true, "candidateDigest": "sha256:...", "basis": "..." }`。
`basis: "inherited-build-acceptance"` 只在 prepare 结果的 `acceptance.inheritsBuildAcceptance`
为 `true`（候选与各 Build 审阅时使用相同应用代码）时被接受，此时你的推送指令即覆盖该候选；
否则使用 `basis: "displayed-candidate"`，记录你对已展示候选的真实确认。默认 prepare 只跑
`check` 与 `build:site`，浏览器检查由 CI 执行；`prepare --full` 在本机追加 render regression
与 `verify:site`。既有数据处理单的历史不会被重写。

prepare 要求应用、数据与执行工具已进入 Git，以 HEAD 作为可复现起点，沿发布收据链
只整合已接受贡献；已推送发布的贡献已在 HEAD 中，不再重放，其 Build 只贡献 Source
队列变化（如归档删除）。应用代码采用 HEAD。同路径先比较基线，必要时走上述类型化合并。
baseline 仅按相关 Build key 纳入；注册与目录投影在候选内重新生成。
新数据的显示时间在审阅前写入 `data/workflow-timestamps.json`，绑定具体文件字节，
Git hook 和 CI 据此复现时间，避免提交时钟使审阅产物漂移。历史直接编辑仍沿用 Git 时间。

commit 与 Publication 共用一个等待式写锁，使用独立临时 Git index，只提交计划的精确路径。
其他 Session 的未暂存非运行文件保留；暂存区已有内容或目标路径出现无关修改时，在覆盖前停止。
涉及 Source 的 tracked pending/processing 变更按 Build 枚举，processed 永远不加入 Git。
根目录多文件应用有日志，可在中断后重入恢复；它不声称是文件系统原子替换。
未知提交结果先核对 HEAD 的 transport trailer，恢复收据，不重复创建提交。
push 限制 main 位于这个已审阅提交，普通推送，不使用 force；远端变化则停止重整。
候选 workspace 在 push 成功后删除；prepare 失败时删除整个候选目录，新的 prepare 删除
基线 HEAD 已过期且尚未开始提交的候选 workspace。plan、approval 与 receipt 保留。

CI 的 `verify:release` 重新计算实际文件摘要。带 `Trace-Transport` 的提交还必须匹配
`docs/releases/current.json` 中的输入、人工确认和产物映射；普通历史/代码提交明确报告无此映射。
`site-release.json` 的 sourceCommit 来自 CI 的真实 SHA，部署复用已验证的 `_site`。
线上服务保持原 GitHub Pages 地址；远端 Staging 属于后续阶段，本次未新增托管环境。

## 运行与验证

Node 固定为 `.node-version` / `.nvmrc` 中的 22.16.0；CI 使用相同文件。
pnpm 版本以 packageManager 为准，依赖以锁文件为准。
`pnpm dev -- --draft` 保留原始静态开发入口，`pnpm view:published` 查看正式快照。
`pnpm build:site -- --root <source> --out <directory> --cache <separate-directory>` 支持独立输出；
`pnpm verify:site -- --site <directory>` 在对应源 workspace 中校验该输出。

`pnpm check` 覆盖并发锁、所有权、合并、Git 恢复与工作台 HTTP 协议；
`pnpm verify:workbench` 用 Chromium 检查文件入口、双标签页、连续修改自动更新、主动暂停、选择与设置保留、失败恢复、Dev 刷新、
未上线状态和移动布局。`verify:app`、`verify:site`、render regression 与 standalone
继续承担各自原有的交互、生产加载、图形与独立文件门槛。

## 一次合入的验证边界

检查边界只由 [输入流程](asset-workflow.md) §3 定义。补充两点机制：Publication 把本批所有
key 交给一次 `verify:dataset -- <key> [...] --skip-render`；Git transport prepare 检查合并后的
实际候选，它与 Build 单项检查的输入不同，不能凭「都通过过」互相替代。若应用、工具、
数据、依赖或队列在检查后改变，按新输入重新检查，禁止按时间或印象复用。

## 退出与收尾清理

工作台收到 SIGINT/SIGTERM 后等待本进程的预览构建结束，清除本次生成的站点文件，
仅留候选 meta；运行中的固定标签页仍保留全部成功候选。失败预览立即清除半成品。
全部处理与交付完成后执行 `pnpm clean:artifacts -- --completed`，连同历史工作副本、
本机发布树和选择指针一起清理。根文件入口回到项目正式数据。详见
[artifact-retention.md](artifact-retention.md)。

## 未验收草稿的接收记录恢复

若旧利润表接收记录缺少后来支持的经营指标信号，可执行
`record:workflow recover-intake <build-id> --facts <facts.json> --session <owner> --generation <generation>`。
仅允许历史始终处于 INTAKED / AUTHORED、从未验收的同类利润表增加 `supplemental-operating-metrics`；不得更换 Source、key 或 Adapter。
操作核对 owner/generation 和 processing 字节，创建带新分类的后继 Build，保留原始接收记录。
原 Build 的 `successor.json` 提交执行权交接，此后原 Build 拒绝写入；来源不移动。
原草稿退出新的统一审阅候选。后继从当前正式基线开始；执行者可迁入仍适用的数据贡献，
但旧审阅包、证据和冻结记录不能移作新 Build 的接受依据，必须重新准备和检查。
中断时用相同参数重试，pending journal 保留后继 ID，避免重复创建。
