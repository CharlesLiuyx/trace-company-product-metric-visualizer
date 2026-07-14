# Workflow 与保真循环逻辑优化方案

> 状态:已实施(2026-07-14,同分支;决策点已确认——W2 走路线 A、`--round`
> 直接移除、可选项全做、新规则沿用字母命名空间;实施记录见 §8)
> 编写日期:2026-07-14
> 适用范围:`docs/fidelity-loop-rules.md`、`docs/dynamic-dataset-workflow.md`、
> `AGENTS.md` 与 `docs/AGENTS.zh-CN.review.md` 的 Workflow/Commands 段、
> `scripts/lib/fidelity-rule-contract.mjs`、`scripts/verify-d3.mjs`、
> `scripts/record-fidelity.mjs`、`scripts/lib/compare-workspace.mjs`、
> `scripts/verify-architecture-contract.mjs`、`docs/workflow-flowchart.zh-CN.html`
> 本文是实施方案,不表示下述改动已经完成。

## 0. 一页纸通俗版

**病根一句话:这套规则和流程是多年打补丁"长"出来的,内容规模早已超过
承载形式——108 条规则还在用"往表格里加一行"的方式管理,同一句话抄在
多个文档里,文档与命令行各说各话。** 四个症状:

1. **规则手册像手写账本。** 一个表格单元格同时写触发条件、阈值、设计理由、
   历史故事;编号字母名不副实(T21 管节点柱高,却因 T 系列有空号被塞进
   "文字"系列);找规则只能全文搜索。
2. **传抄导致打架。** `hidden-anchor` 的语义散布在 3 份文档 + 5 个脚本;
   机器校验只核对规则的"身份证号"(ID 与执行方式),不核对正文,抄本
   漂移无人发现。文档明令弃用"第几轮",命令行却仍提供 `--round` 参数,
   上游文档还在教人用——说一套、做一套。
3. **一条流水线四套编号。** 步骤号(1–14)、Phase(P1–P5)、执行组
   (E0–E4)、sweep stage(×3)并存,组界与步界还错位。
4. **改进成本高、重复劳动多。** 新增一条规则要改约 7 个文件且没有配方;
   规则只能无限增加不能废弃;同一张候选图先诊断(丢弃)再留证据,渲染
   两遍;草稿阶段就把所有语言各渲染一遍。

**药方四个动作:**

| 动作 | 大白话 | 工作包 |
| --- | --- | --- |
| 给规则建数据库 | 每条规则一条结构化记录(何时触发 / 查什么 / 怎么算过 / 留什么证据 / 为什么),文档目录区由脚本生成,带按阶段、按对象的索引;改规则只改一处,文档永不漂移 | W2 |
| 给每句话一个家 | `AGENTS.md` 回归目录页;工作流文档不再重述规则细节,只放指针;"何时可以结束"做成一张表,标明哪条由机器强制、哪条靠人工 | W3 |
| 文档与工具同一套词 | 删除 `--round`;给检查阶段起正式名字(机器枚举),Build 证据必须从中选 | W1 |
| 砍掉无用活 | Build 期间直接用 `record:fidelity` 留证据(不再先 `verify:d3` 白渲染一遍);草稿迭代只渲染源语言,最终验收仍然全语言、严格度不降 | W4 |

**做完后新增一条规则的日常:** 在 catalog 里加一条记录 →(若可自动化)写
检查代码 → 补一条测试,共 3 个文件;跑生成器,文档自动更新;`pnpm check`
兜底。今天同样的事要手工改约 7 个文件、靠记忆不遗漏。

**永远不变的:** 全部规则编号与含义、全部验收阈值与严格度、ADR-0001
架构决策、既有证据存档。

## 1. 要解决什么

用户提出的四个问题,每个都必须有可验收的出口(验收指标见 §5.2):

| 编号 | 问题 | 一句话诊断 |
| --- | --- | --- |
| 目标 1 | 执行效率低 | 同一候选被诊断/证据双渲染;迭代期每次改动全 locale 重跑;"改了什么要重跑什么"没有速查表 |
| 目标 2 | 自相矛盾 | 文档弃用的词汇仍被 CLI 与上游文档暴露;文档定义的过程词汇在工具层没有对应物 |
| 目标 3 | 流程不清晰 | 同一条流水线有四套并行坐标系(步骤号 / Phase / 执行组 / sweep stage),组界与步界错位 |
| 目标 4 | 无可读性、无法迭代 | 108 条规则挤在 8 张三列表格里,单元格承载 5 种职责;新增一条规则要改约 7 个文件,且无落地配方 |

约束(不可动摇的前提):

- 规则 ID 永不重编号、永不改义(`docs/fidelity-loop-rules.md` §1 既定契约);
- 不改变 ADR-0001 的三状态作用域与 M0–M5 里程碑划分;
- 验收严格度零下降:不删除任何 gate,不放宽任何阈值,不减少最终验收所需证据;
- 沿用仓库既有纪律:先影子后替换、只替换不叠加(`docs/architecture/verification-publication.md` §Current-to-target migration)。

## 2. 现状盘点:矛盾与摩擦清单

每项带证据定位,后续阶段完成后可逐项勾销。
(实施后状态:C1–C12 已全部处理,见 §8;本节保留原始诊断作为动机记录。)

### 2.1 文档与工具互相矛盾

**C1 —「第几轮」已弃用,`--round` 仍在。**
`docs/fidelity-loop-rules.md` §1 定义了 preflight / sweep stage / evidence run /
human iteration 四个术语,并明文要求"不要再用含义不清的'第几轮'";同时
`evidence run` 的定义写明"archive 序号只表示运行顺序"。但
`scripts/verify-d3.mjs` 仍解析 `--round` / `--loop-round`,
`scripts/lib/compare-workspace.mjs` 已实现自动序号
(`options.round || previousRuns.length + 1`)却允许手动覆盖,存档名
`${round}-${improvement}-${focus}` 把该值烧进证据目录;`AGENTS.md` 命令表与
`docs/dynamic-dataset-workflow.md` step 12 也仍然展示 `[--round <n>]`。
文档弃用的概念被工具和上游文档持续再生产。

**C2 — sweep stage 词汇没有闭环。**
三层 sweep(structure / text / polish-l10n)是 §4 的核心状态机,冻结与重开
"必须绑定 evidence digest"。但工具层:`--focus` 是自由字符串(仅做目录名
消毒),全仓库唯一被具名引用的值是 `docs/dynamic-dataset-workflow.md` 中的
`polish-l10n-sweep`;stage 无枚举、无校验,证据存档无法按 stage 检索;冻结/
重开事件没有任何结构化对象承载(`scripts/lib/fidelity-result.mjs` 只有
region / attention)。状态机只存在于散文里,执行靠自觉。

**C3 — 两套近似但不重合的顺序体系。**
§1 判定优先级(语义 → 几何 → 视觉残差)与 §4 sweep 顺序
(structure → text → polish)近似对应,但映射从未写明,读者需要自行推断
"结构 stage 大致等于前两级优先级"。

### 2.2 分类与结构失控

**C4 — 系列字母已不承载含义。**
B 系列标题是"已知盲点和补救方式",但 16 条中 6 条(B3/B5/B6/B7/B15/B16)
是自动 conditional-gate——每次触发都会机器执行的检查不是"盲点"。根因是
字母混合了两套分类:G/B 按机制(自动/人工补偿),L/T/A/Z/R/I 按领域。
feature 映射早已跨系列(`visible-node-face → B15+T13+T21`、
`semantic-annotation → A10+B16+T17`),T21 是 node 柱面规则却因 T 系列
"号段有空"落在 label 系列。查找规则既不能按字母也不能按序号,只能全文搜索。

**C5 — 规则条目格式超载。**
canonical 表单元格同时承载:触发条件、检查内容、阈值、设计理由、历史轶事、
例外路径、证据形态(T14 / T18 / T21 / L11 的说明列均超过 150 字)。文档自己
写下的护栏("不能只把说明写长"、"文档长度只是可读性指标")恰好说明结构
在诱导失控:三列表格没有给这些字段各自的位置。同一契约还有三处平行叙述:
§2 的 `measured-label-position` 长段落、T18/T19 表格行、
`docs/dynamic-dataset-workflow.md` step 4 的重述。

**C6 — 四套坐标系并存。**
流水线位置可以用步骤号(1–14)、Phase(P1–P5)、执行组(E0–E4)、sweep
stage(×3)四种坐标描述。组界与步界错位已经暴露:E1 的 Track B 包含
"step 8 的前半"(fine pre-render measurement),同一个步骤被劈在两个执行组里。
读者必须在脑内维护四套映射。

### 2.3 重复与漂移

**C7 — `AGENTS.md` 的路由承诺与实际内容漂移。**
文件头声明"one-line summary and pointer per domain",实际 §Workflow 约 60 行,
含操作者信号、close-out 政策、guard 重跑语义等操作细节,与
`docs/dynamic-dataset-workflow.md` 双写;中文镜像 218 行须人工同步,而机器
parity 检查只有 2 条 `assert.match`(检查两个路由必须存在),内容漂移不可检测。

**C8 — feature/evidence 契约的散文重述无漂移检测。**
workflow step 4 写着 "do not restate its visual tests here",随后仍重述了
hidden-anchor / measured-label-position / semantic-annotation 约 30 行语义。
`hidden-anchor` 分布在 3 份文档 + 5 个脚本里。`pnpm verify:architecture`
只校验规则 ID / 执行方式 / feature 映射的一致性,不校验散文重述——重述漂移
是当前体系的盲区(它自己的 B 系列问题)。

**C9 — 结束条件有四份副本,机器/人工边界不可辨。**
`docs/fidelity-loop-rules.md` §6"可以结束的唯一条件"(7 条)、workflow step 13
close-out 政策、workflow §Verification Checklist 数据集小节、
`docs/architecture/dataset-lifecycle.md` FidelityResult 段,各自描述闭环条件。
其中哪些由 `record:build finish` 的 blocker 机器强制、哪些是纯人工义务,
任何一份文档都没有标注,读者无从判断"漏一条会被机器拦下还是靠自觉"。

### 2.4 迭代与效率成本

**C10 — 新增一条规则约改 7 个文件,且无配方。**
T21 实测触达 7 个文件(规则文档、`fidelity-rule-contract.mjs`、
`render-harness.mjs`、`verification-plan.mjs`、3 个测试);T18–T20 一批更多。
必改面包括:doc 表格行 + §2 散文、契约的 2–3 个注册表、Plan 的
`FEATURE_REQUIRED_CHECKS`、实现脚本、测试硬编码计数(108)、workflow 重述、
流程图计数断言。没有任何文档写下这份清单;规则没有
stage / topic / rationale / origin / supersession 元数据;alias 注册表恒空;
只有"只增不减"一条演进路径。

**C11 — 同一候选双渲染 + 迭代期全 locale 重跑。**
`verify:d3` 的诊断产物即弃,同一候选要再跑一次 `record:fidelity` 才有证据,
乐观路径下渲染成本 ×2(`record:verification` 使前置 `verify:dataset` 变冗余
的先例已确立,render 路径缺少同样的指引)。workflow step 12 要求
"Repeat after every authored change and for every required locale",而三层
sweep 的本意就是把本地化留到最后一层——structure / text 迭代期为 zh+en 各
渲染一次是纯浪费,但没有任何一句话授权只跑源语言。

**C12 — 小项。**
协议版本命名不一致(`fidelity-run/2` vs 其余 `/v1`、`/v2`、`/v3`);
`record:fidelity --build` 强制 `--focus` 却无值域;guard 重跑语义在
`AGENTS.md` 命令表与 workflow step 1 双写。

## 3. 设计原则

1. **单一事实源,其余生成或校验。** 仓库已有成熟先例:
   `data/dataset-manifest.js`(生成 + `--check`)、
   `data/dataset-file-metadata.js`(生成 + `--check`)、
   `docs/architecture/lifecycle-contract.json`(机器契约 + parity)。规则目录
   应走同一条路,而不是"手写文档 + 手写镜像 + parity 补丁"。
2. **文档分三层,各层只保留自己的形态。** 路由层(`AGENTS.md`)只有指针和
   一行摘要;协议层(architecture)只有状态与不变量;操作层(workflow +
   fidelity)只有步骤、规则与配方。一条内容只允许出现在一层。
3. **词汇闭环。** 文档定义的过程词汇(stage、focus、evidence run)必须有
   同名机器枚举;工具暴露的参数必须能在文档找到属主。单向存在即视为缺陷。
4. **规则是结构化记录,散文只是视图。** 触发 / 检查 / 通过 / 证据 / 理由
   各有字段;理由与轶事永远不挤占判定语义的位置。
5. **一套坐标系。** 流水线位置只用步骤号表达;并行性与 stage 是步骤上的
   标注,不是第二套编号。
6. **验收严格度零下降。** 所有效率优化只作用于中间迭代,最终验收所需的
   fresh 证据、locale 覆盖、人工 attestation 一律不变。

## 4. 工作包

### W1 — 词汇止血(小改动,先消矛盾)

解决 C1、C2(词汇部分)、C12。

1. 移除 `--round` / `--loop-round`:CLI 删除解析,存档序号固定使用已实现的
   自动递增;存档名改为 `${seq}-${improvement}-${focus}`(语义不变,来源
   唯一);`AGENTS.md`、workflow step 12、`record:fidelity` 帮助文本同步删除。
2. focus 枚举:新增共享常量(建议 `scripts/lib/fidelity-stages.mjs`)定义
   `structure-sweep` / `text-sweep` / `polish-l10n-sweep` / `closeout-refresh`
   四个合法值;`record:fidelity --build`(Build-bound 证据)强制校验,
   `verify:d3` 诊断路径保持自由字符串。文档侧由
   `docs/fidelity-loop-rules.md` §4 引用枚举为属主。
3. 术语表:fidelity 文档 §1 增补一张中英对照小表(freeze/冻结、reopen/重开、
   evidence run、preflight、human iteration、focus、stage),消除中英混排的
   首次阅读成本。
4. 协议命名规范:声明未来新协议一律 `<name>/v<n>`;已有 `fidelity-run/2`
   字符串不改(改动会使既有存档失效,不值得)。

涉及:`scripts/verify-d3.mjs`、`scripts/record-fidelity.mjs`、
`scripts/lib/compare-workspace.mjs`、新 `scripts/lib/fidelity-stages.mjs`、
`tests/verify-d3-mode.test.mjs`、`AGENTS.md` + 中文镜像、两份操作文档。

验收:全仓库 `--round` 零引用;非法 focus 携带 `--build` 时报错的单测;
`pnpm check` 全绿。

### W2 — 规则目录数据化 + 生成视图(核心)

解决 C4、C5、C10。这是"可读性 + 可迭代"的主体工程。

1. **新 SSOT**:`scripts/lib/fidelity-rules-catalog.mjs`(或 JSON),每条规则
   一个结构化记录:

   ```text
   id            稳定 ID(不变量:永不重编号、不改义)
   enforcement   五类执行方式(值域不变)
   stage         structure | text | polish-l10n | build | subloop
   topics        node | link | label | annotation | locale | raster | icon | global(可多值)
   trigger       何时触发
   check         检查什么
   pass          怎样通过(含阈值)
   evidence      留什么证据
   compensates   (盲点类规则)补救哪些自动规则的哪个盲区
   features      关联的 ObjectInventory feature(与 Plan 编译共享)
   rationale     设计理由/历史教训(可选,永不参与判定)
   origin        引入来源(commit 或 FB-id,可选)
   status        active | superseded(+ supersededBy)
   ```

2. **派生替代手写镜像**:`fidelity-rule-contract.mjs` 的
   `FIDELITY_RULE_ENFORCEMENTS` / `FIDELITY_FEATURE_RULE_IDS` 改为从 catalog
   派生,导出接口不变,消除"一条规则登记两次"的双写;
   `FIDELITY_CODE_RULE_IDS` 保留为显式允许清单(它约束的是脚本引用面,
   不是规则语义)。
3. **生成器**:`pnpm update:fidelity-rules-doc` 在
   `docs/fidelity-loop-rules.md` 的标记对之间渲染目录区——每条规则一个带
   稳定锚点的条目(`#### T18 · conditional-gate · text` + 字段化正文),外加
   三张导航索引:按 stage、按 topic、按执行方式。手写区仅保留 §1 契约与
   判定原则、§2 preflight 协议、§4 状态机、§6 证据与反馈协议。
4. **校验替换**:`pnpm verify:architecture` 改为(a)生成区与 catalog 的
   freshness 检查(同 `update:dataset-manifest --check` 模式);(b)手写区
   不得出现规则定义;(c)既有 ID / enforcement / feature / 引用检查全部保留,
   数据源换成 catalog。`parseFidelityRuleDefinitions` 适配新块格式。
5. **一次性迁移**:把现有 108 条表格行机械拆分为结构化字段,判定语义
   逐字保留;把理由与轶事(如 T21 说明里的历史取值案例)移入 `rationale`。
   拆分后对生成区做逐条语义 diff 审计,作为迁移验收证据。
6. **分类修复(不改 ID)**:每条规则获得真实的 stage/topics;B 系列标题改为
   "自动检查的盲点补偿",其中自动化条目通过 `compensates` 字段显式指回
   被补偿的规则。系列字母降级为纯命名空间;新规则仍在最贴近的字母下取
   下一个自由号,检索靠字段而不是字母。
7. **演进配方**:目录文档新增一节「规则如何落地/升级」,明确三点定位:
   改 catalog(语义与元数据)→ 改实现脚本(如适用)→ 改测试。配合派生
   替代,新增一条规则的必改文件从约 7 个降到 3 个。

涉及:新 catalog + 生成器脚本、`fidelity-rule-contract.mjs`、
`verify-architecture-contract.mjs`、`tests/fidelity-rule-contract.test.mjs`、
`docs/fidelity-loop-rules.md`、`AGENTS.md` 规则归属表(注明:catalog 为规则
语义 SSOT,文档目录区为生成视图)。

验收:规则 ID / enforcement / feature 映射零变化(diff 审计);任一规则可用
锚点直达;stage/topic 索引存在;模拟新增一条假想规则(T22 演练)只需改
3 个文件;`pnpm check` 全绿。

### W3 — 文档职责重整(消重复、统坐标)

解决 C3、C6、C7、C8、C9。

a. **`AGENTS.md` 收缩**:§Workflow 压回每阶段 1–2 行 + 指针;操作者信号只留
   一句话 + 指向 workflow 属主小节;命令表中的 guard 重跑语义等脚注移交
   workflow step 1;中文镜像同步收缩(维护面减半)。
b. **workflow 单一坐标系**:preflight 测量从 step 8 拆出为独立步骤,使执行组
   边界与步骤边界对齐;E0–E4 不再作为独立编号词汇,改为每个步骤行内的
   `[串行]` / `[可并行: Track A/B/C]` 标注;P1–P5 保留为纯章节标题。
   难度路由表与 `docs/workflow-flowchart.zh-CN.html` 同步更新。
c. **feature 重述收敛**:workflow step 4 压缩为"feature 名单 + 一行一个的
   何时声明速查表 + 指向 fidelity §2 属主";删除对视觉判定细节的重述。
d. **判定顺序合一**:在 fidelity §4 开头用两行写明判定优先级与三层 sweep 的
   对应关系(structure 承载语义/拓扑/几何,text 承载文本归属,polish 承载
   视觉残差与本地化),消除双体系疑虑。
e. **结束条件表格化**:fidelity §6"可以结束的唯一条件"改为三列表——条件 /
   执行面(`record:build finish` blocker 代码、seal、纯人工)/ 证据形态。
   与 `finishReviewedBuild` 的 blocker 清单逐条对齐;workflow 与 lifecycle 文档
   的平行叙述裁剪为指针。哪些漏项会被机器拦下、哪些靠人工,一眼可辨。
f. **增量重验矩阵**:workflow P4 新增速查表——"改了什么 → 必须重跑什么":

   | 变更 | prepare-review | record:verification | record:fidelity | finish |
   | --- | --- | --- | --- | --- |
   | authored 文件(adapter/SSOT/i18n) | packet 过期时重跑 | 重跑 | 受影响 locale 重跑 | 重跑 |
   | inventory / Plan 输入 | 必须重跑 | 重跑 | 全部重跑 | 重跑 |
   | 仅 review JSON(决定/attestation) | 不需要 | 不需要 | 不需要 | 重跑 |
   | renderer / 协议 | 必须重跑 | 重跑 | 全部重跑 | 重跑 |

   (以现有 step 11–13 散文为准整理成表,不改变任何语义。)

验收:`AGENTS.md` §Workflow ≤ 15 行;workflow 中 E 组不再作为编号出现;
`hidden-anchor` 的完整语义只在 fidelity §2 出现一次;`pnpm verify:architecture`
现有断言(操作者规则单一属主等)保持通过。

### W4 — 执行效率规则(文档为主,少量工具)

解决 C11。

a. **stage × locale 最小集**:写入 fidelity §4 与 workflow step 12——
   structure / text 迭代期 evidence run 只需源语言;polish-l10n 与
   closeout-refresh 必须覆盖全部 required locales。最终验收不变:finish 仍
   要求每个 required locale 在当前 authored digest 上有 fresh 证据。
   (对 zh+en 数据集,中间迭代渲染成本直接减半;纯文档改动,机器层本就
   不阻止单 locale 中间运行。)
b. **诊断/证据合流**:Build 开启后直接使用 `record:fidelity --build`(其失败
   run 本就以 failed 状态存档,符合架构语义);`verify:d3` 定位为 Build 前
   探索与渲染器工程回归。消除同一候选的双渲染。与
   `record:verification` 使 `verify:dataset` 前置运行变冗余的既有先例对齐,
   在 workflow step 12 与 `AGENTS.md` 命令表写明。
c. **单命令多 locale(可选)**:`record:fidelity` 支持 `--language` 重复传参或
   `--all-required`,复用同一浏览器实例连续渲染,减少 polish 阶段的命令
   往返。标记为 P2,不阻塞前两项。

验收:两份操作文档含明确的 stage×locale 表;每个中间 authored digest 的
渲染次数从 required locale 全集降到 1(最终 digest 仍需全 locale fresh
证据)。算例:双语数据集经历两次中间迭代 + 一次最终收敛,总渲染从 6 次
(3×2 locale)降到 4 次(2×1 + 1×2),迭代越多收益越大;叠加 W4b 后再减去
诊断重复渲染的一倍开销。

### W5 — sweep 冻结的结构化记录(可选,P2)

解决 C2 的冻结/重开部分。review JSON 增加 `stageDecisions`:
`{ stage, status: frozen | reopened, evidenceDigest, note }`,
`record:build finish` 校验形状并写入 `FidelityResult`。不改变验收语义
(不作为新 blocker),先提供审计事实;若后续证明有价值,再评估是否升级为
强制。这与"冻结必须绑定 evidence digest"的既有文字要求对齐,把散文承诺
变成可查证据。

### W6 — 防回退配套(随阶段附带)

- 「规则如何落地/升级」配方(W2 内);
- 中文镜像最小 parity 检查(章节锚点数量对齐,可选);
- 流程图 HTML 在 W3 完成后同步一次;
- 每阶段结束运行完整 `pnpm check`,并在提交信息记录验证命令
  (遵循 `docs/commit-messages.md`)。

## 5. 分阶段执行与验收

### 5.1 顺序与依赖

| 阶段 | 工作包 | 性质 | 依赖 |
| --- | --- | --- | --- |
| 阶段 1 | W1 + W3a | 止血:消词汇矛盾、收缩路由层;无行为变化 | 无 |
| 阶段 2 | W2 | 核心:目录数据化 + 生成视图 + 校验替换 | 阶段 1(focus/stage 枚举先行) |
| 阶段 3 | W3b–f + W4a/b | 流程重整 + 效率规则 | 阶段 2(索引与锚点可被引用) |
| 阶段 4 | W4c + W5 + W6 可选项 | 增量收益 | 阶段 3 |

阶段 2 内部遵循"先影子后替换":生成器与新校验先并行运行于旧断言之侧,
生成区逐条 diff 审计通过后,再切换属主声明并删除旧断言,不留双轨。

### 5.2 验收指标

| 目标 | 指标 | 现状 → 目标 |
| --- | --- | --- |
| 迭代成本 | 新增一条规则必改文件数 | 约 7 → ≤ 3(catalog + 实现 + 测试) |
| 可读性 | fidelity 文档手写区行数 | 443 → ≤ 250(目录与索引区改为生成,每规则带锚点) |
| 流程清晰 | 流水线坐标系数量 | 4 套 → 2 套(步骤号为唯一 spine + sweep stage;Phase 降为章节标题、执行组降为步骤标注) |
| 无矛盾 | §2 清单 C1–C12 | 阶段 3 结束后全部勾销;`--round` 全仓库零引用 |
| 执行效率 | structure/text 迭代每候选渲染 locale 数 | required 全集 → 1(源语言) |
| 执行效率 | 同一候选诊断+证据渲染次数 | 2 → 1 |
| 零回退 | `pnpm check`、规则 ID/语义 diff 审计 | 每阶段全绿、零变化 |

## 6. 风险与不做的事

- **迁移拆分错误**:108 条表格行拆成结构化字段是机械但量大的工作。对策:
  按系列分批提交,每批生成区与旧文逐条 diff 审计;规则语义零改动是硬验收。
- **生成器与既有单一定义面检查的冲突**:现有
  `assertNoSecondaryFidelityRuleDefinitions` 会把逐规则标题识别为二级目录。
  对策:该检查与生成器在同一工作包内更新——生成区成为唯一定义面,
  检查目标从"表格是唯一表面"改为"生成区之外无定义 + 生成区 fresh"。
- **focus 枚举拦住历史习惯**:仅对 `--build`(Build-bound 证据)强制,
  诊断路径不受限;既有存档不回溯改名。
- **不做的事**:不重编号任何规则;不改既有存档协议字符串;不动
  ADR-0001 状态作用域;不降低任何验收严格度;不把本方案与 M4 Publication
  的目标语义混写(遵循 architecture 文档的 current vs target 纪律)。

## 7. 决策点(已确认,2026-07-14)

1. **W2 路线**:已确认路线 A——catalog 数据文件
   (`scripts/lib/fidelity-rules-catalog.mjs`)为规则语义 SSOT,文档目录区由
   `pnpm update:fidelity-rules-doc` 生成。
2. **`--round` 处置**:已确认直接移除;存档序号由运行顺序自动递增。
3. **可选项取舍**:已确认全做——W4c 单命令多 locale、W5 stageDecisions、
   W6 中文镜像 parity 检查。
4. **新规则 ID 策略**:已确认沿用既有字母系列作纯命名空间,检索靠
   stage/topics 索引。

## 8. 实施记录(2026-07-14)

| 工作包 | 落点 | 提交 |
| --- | --- | --- |
| W1 | `--round`/`--loop-round` 移除,存档序号自动;`scripts/lib/fidelity-stages.mjs` stage focus 枚举,`record:fidelity --build` 强制;术语表进 fidelity §1;协议命名规范进 lifecycle 文档 | `verify(fidelity): replace manual round with derived sequence and stage focus enum` |
| W3a | `AGENTS.md` §Workflow 收缩为 5×2 行 + 指针,不再引用步骤号;中文镜像同步 | `docs(agents): shrink workflow section to routing summary` |
| W2 | catalog SSOT(108 条结构化记录,含 stage/topics/compensates/rationale/origin/supersession)、契约派生、生成器 + freshness 校验、fidelity 文档重构(手写 §1/§2/§4/§5 + 生成 §3 + 演进配方 §6);逐字符审计确认 108 条判定语义零改动 | `verify(fidelity): derive rule contract from structured catalog` |
| W3b/c/f | workflow 单一步骤号 1–15(preflight 独立为 step 8),E 组降为依赖表,step 4 feature 速查表,P4 增量重验矩阵,流程图同步 | `docs(workflow): unify pipeline numbering and add reverification matrix` |
| W3d/e + W4a | 判定优先级 ↔ 三层映射、stage×locale 最小集写入 fidelity §4;结束条件表格化并映射 `finish` blocker 代码 | `docs(fidelity-loop): map closure conditions to machine blockers` |
| W4b | Build 内直接 `record:fidelity`、`verify:d3` 定位为 Build 前探索,写入 workflow step 13 | 同上 workflow 提交 |
| W4c | `--language` 可重复,一条命令逐 locale 渲染(共享 server/browser,每 locale 独立 run 与存档) | `verify(fidelity): render several locales per command run` |
| W5 | `finish` 接受可选 `stageDecisions`(stage/frozen|reopened/evidenceDigest/note),记录进 `FidelityResult`,不作为 blocker | `verify(build): record optional stage decisions in review closure` |
| W6 | 镜像 parity(章节骨架 + 命令表行数)进 `verify:architecture` | `verify(architecture): check agents mirror section and command parity` |

验收指标核对(对照 §5.2):新增规则必改文件 7 → 3(catalog + 实现 + 测试,
生成器自动更新文档);fidelity 文档手写区约 250 行(全文 1100+ 行中目录与
索引区均为生成);流水线坐标系 4 → 2;`--round` 全仓库零引用;
structure/text 迭代 locale 数 required 全集 → 1;同候选诊断+证据渲染 2 → 1;
C1–C12 全部勾销;`pnpm check` 每阶段全绿,规则 ID/enforcement/feature 映射
零变化。
