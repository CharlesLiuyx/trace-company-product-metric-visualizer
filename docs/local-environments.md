# 本地开发、并发处理与生产对齐

本项目支持多个 Codex / Claude Code Session 打开同一个项目目录处理 pending。
每份 Source 使用普通 Build 草稿目录；无需创建 Git worktree 或切换分支。
公共应用代码的修改集中在根目录；输入处理只写自己的 Build workspace。
新 Build 使用根目录当前应用代码与 canonical 数据基线，避免继承正式数据树里的旧 UI。
发布计划绑定 applicationDigest；应用在准备后改变时需 refresh 并重新检查。

## 你的日常操作

1. 在任意 Session 指定 `input/pending/` 的一份或多份文件。执行者先按
   [输入流程](asset-workflow.md) 完成 Type Gate，再使用 `record:workflow start`。
   `start` 返回 Build、workspace、Session owner 和 generation，后续命令保存并携带这些值。
2. 运行一次 `pnpm dev`，打开根目录 `index.html` 或 <http://127.0.0.1:8000/>。
   文件入口会发现同一项目的服务并进入工作台；服务未运行时仍能离线查看。
   默认进入统一验收：已准备的草稿与项目现有数据在同一个公司/期间列表中查看。
   顶部“上一项 / 下一项”依次定位，指定任务使用 `/?review=<build-id>#<key>`，
   无需在左侧切换十个环境。执行者应提供这个统一入口及当前 key。
3. 在工作台审阅固定候选，在原 Session 明确确认。执行者把详情 `displayed` 中
   对应 `members[].buildId` 的 `reviewToken` 和这份候选的 `id`（作为 `previewId`）
   放入原有人类审阅输入，继续
   finish、baseline、seal、Publication；无需再次询问是否执行已授权的本地发布。
4. 准备 Git 集成候选，展示当前代码与已发布贡献的完整结果。如果集成改变了已看过的
   结果，先明确指出变化并记录该候选的审阅。你在 Session 发出推送指令后，才执行 push。
5. CI 检查同一份 Pages 产物并部署。工作台显示当前 Git 提交对应的 CI、线上版本、
   内容摘要及最后成功核查时间；最终上线还需打开对应 key 验证实际页面。

## 统一验收与辅助视图

| 视图 | 行为 | 审阅含义 |
| --- | --- | --- |
| 本机验收（默认） | 项目当前应用与数据，加上所有成功 prepare 的普通草稿，以各自不可变 base 做三方合并；在私有临时目录重建注册和 Pages 产物 | 一个公司/期间列表；上一项 / 下一项只改数据选择，不换环境。URL 固定整份 candidate 和成员列表；新候选仅提示，点击“载入更新”后切换 |
| 线上对照 | 读取生产清单，并核对同一 key 是否存在 | 不存在时显示“尚未上线”；读取失败显示未知或过期 |
| 更多 → 开发 · 自动更新 | 统一视图自动切换至最新成功的汇总版本；单项排查使用该 workspace 源文件自动刷新 | 适合快速调整，保留当前 hash、语言、主题、视图和滚动位置 |
| 更多 → 单项排查 | 可查看项目工作树、历史 Build 或 Git 集成候选；兼容 `/?source=<build-id>` / `/?source=<transport-id>` | 故障定位及独立集成审阅；点击“本机验收”回到统一页面 |

汇总仅写 `output/workbench/previews/review/` 下的临时输入、不可变站点及候选收据；
不修改草稿、公共数据、Publication pointer 或 Build 状态。只纳入成功公布的 prepare
记录，历史未公布 Build 不自动加入。多个草稿的同一记录不同字段可按已有 typed SSOT
规则合并；同字段冲突、重复 key、删除或缺失基线阻止新候选，保留原候选并显示错误。
队列及每项的待验收状态也固定在所见候选中，刷新页面不会将新成员塞进旧候选。

候选 `members` 分别绑定每个 Build 的 sourceDigest 与 reviewToken。只有其当前检查
仍然有效，且汇总后该 Build 的语义数据、显示时间、应用代码与已有资产仍一致，才给出
可用于验收的 reviewToken；否则显示“待任务更新检查”。`record:workflow review`
可以从统一候选解析对应成员，再执行原有 token、source、tool 与站点完整性检查。
同页查看、切换下一项或自动构建均不产生人工接受；一份候选也不会替另一份 Build 接受。

工作台自动构建只证明产物完整、摘要自洽，不替代人工接受或 `verify:site`。
每个候选绑定源文件摘要、工具摘要；可接受成员另绑定有效的 reviewToken。带 Session 所有权的新 Build
执行 `review` 时必须引用对应 previewId，过期候选不能通过。
Git 集成候选还执行 `check`、`build:site` 和 `verify:site`。

保存事件合并 500 ms 后开始重建；工作台最多同时构建 2 个候选。失败保留上次成功结果，
明确标示过期。CI 和生产状态最多每 30 秒刷新；工作台关闭后停止这些查询。
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
这一限制也适用于公共代码/工具升级。历史草稿应先 refresh，移除旧的共享 `.git` 链接。

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

`human-review.json` 使用 `{ "operator": "...", "accepted": true, "candidateDigest": "sha256:..." }`，
只能记录任务中对已展示集成候选的真实确认。当前 Git 传输明确记录这层审阅，不自动把
较早的 Build 接受推定为对当前应用代码的接受。既有数据处理单的历史不会被重写。

prepare 要求应用、数据与执行工具已进入 Git，以 HEAD 作为可复现起点，沿发布收据链
只整合已接受贡献；应用代码采用 HEAD。同路径先比较基线，必要时走上述类型化合并。
baseline 仅按相关 Build key 纳入；注册与目录投影在候选内重新生成。
新数据的显示时间在审阅前写入 `data/workflow-timestamps.json`，绑定具体文件字节，
Git hook 和 CI 据此复现时间，避免提交时钟使审阅产物漂移。历史直接编辑仍沿用 Git 时间。

commit 与 Publication 共用一个等待式写锁，使用独立临时 Git index，只提交计划的精确路径。
其他 Session 的未暂存非运行文件保留；暂存区已有内容或目标路径出现无关修改时，在覆盖前停止。
涉及 Source 的 tracked pending/processing 变更按 Build 枚举，processed 永远不加入 Git。
根目录多文件应用有日志，可在中断后重入恢复；它不声称是文件系统原子替换。
未知提交结果先核对 HEAD 的 transport trailer，恢复收据，不重复创建提交。
push 限制 main 位于这个已审阅提交，普通推送，不使用 force；远端变化则停止重整。

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
`pnpm verify:workbench` 用 Chromium 检查文件入口、双标签页、候选固定、失败保留、Dev 刷新、
未上线状态和移动布局。`verify:app`、`verify:site`、render regression 与 standalone
继续承担各自原有的交互、生产加载、图形与独立文件门槛。
