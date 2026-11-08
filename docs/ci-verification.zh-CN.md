# CI 检查说明与触发规则

本文是 `.github/workflows/ci.yml` 的规则属主。目标只有三个：

1. **有效**：该抓的问题必须能抓到；自动检查不能冒充人工保真 Review。
2. **少误报**：检查失败必须对应一个可解释、可复现的问题。
3. **快**：只运行与本次 ChangeImpact 有关的浏览器检查；无法分类时回退全量。

**审阅后发布策略（操作员确认，2026-11-08）**：本地人工审阅过的内容上线 99% 没有问题，即使有问题影响面也可控，
走完管线、往前修复。`main` 上自上次成功以来**全部**提交都带 `Trace-Transport` 时，`plan:ci` 输出
`reviewed_transport=true`：只构建站点、跑 `verify:release` 核对确实是审阅过的字节，然后部署，其余检查全部跳过。
范围内混有任何普通提交（代码、文档）就照常走下面的流程。这条策略只有操作员能改。

`scripts/lib/ci-plan.mjs` 是检查选择 Module（路径分类、受影响 key、严格回退和 Actions 输出），
`scripts/plan-ci.mjs` 是 Git diff Adapter。本地/PR 调用方提供两个 Git SHA；main push 以此工作流
最近成功且为当前提交祖先的 main push 为 base，历史查询失败或没有有效祖先时全量回退。

本地处理一份材料时何时运行哪些检查只由 [输入流程](asset-workflow.md) §3 定义；本文只说明 CI。

## 一次 CI 怎么走

```text
Git diff
  ↓
ChangeImpact 计划（只决定“要跑什么”，不决定“检查是否通过”）
  ↓
pip 安装图标裁剪依赖 → pnpm check（已审阅交接跳过）
  ↓
需要浏览器吗？──否──→ 完成
  │是
  ├─ 恢复 Chromium 下载缓存 → 安装 Chromium 与系统库
  ├─ standalone 构建/自包含检查转入后台（按影响，与下列检查重叠）
  ├─ viewer app + 本地审阅工作台检查（按影响）
  ├─ 恢复旧 Pages runtime → Pages 构建 → verify:release → 加载检查（按影响）
  ├─ 全量或受影响 key 的 render regression
  └─ 收取 standalone 结果
  ↓
main 且站点内容变化：上传刚验证过的 _site → 保存 runtime/Chromium 缓存 → Deploy Pages
```

`check` Job 按分支并发一组：同一 PR 或 `main` 有新提交时，未跑完的旧 `check` 被取消（Actions 显示
cancelled），新运行立刻开始。`main` 的 ChangeImpact base 是上一次**成功**的祖先，被取消的提交仍落在
新运行的检查范围内。`deploy` Job 单独排队（`pages-deploy`，不取消），不会中断正在部署的 Pages；较旧
提交的 `check` 已被取消就不会进入部署，所以线上不会被旧版本覆盖。

## 每一个 CI 项在检查什么

### 1. Checkout complete history 与依赖安装

- `actions/checkout` 使用 `fetch-depth: 0`：`dataset-file-metadata` 从 Git 作者时间生成，
  ChangeImpact 也要比较 base/head 两个提交。它本身不判断代码对错。
- `pnpm install --frozen-lockfile` 严格按 lockfile 安装；pnpm store 由 `actions/setup-node`
  缓存，`node_modules` 每次从锁定依赖重建。

### 2. Plan checks from ChangeImpact (`pnpm plan:ci`)

- **原理**：读取 `git diff --name-status`，把文件映射成 pending、数据、单个 Adapter、
  viewer、共享 renderer、构建工具等影响；Income Statement SSOT 静态解析 base/head 的
  完整记录，按 key 比较，只渲染新增、修改或删除记录关联的 Adapter。它只选择检查集合。
- **防漏规则**：缺 SHA、diff 失败或未知 `scripts/`、`src/`、`vendor/` 改动一律全量；财务记录解析失败、
  重复 key 或缺失任一版本时保留原整家公司覆盖。

### 3. Install icon crop dependencies

`pip install -r scripts/requirements.txt`（Pillow/numpy）只服务单元测试中调用的图标裁剪脚本
`scripts/extract_icon_crops.py`；pip 缓存由 `actions/setup-python` 提供。

### 4. Fast deterministic checks (`pnpm check`)

除已审阅交接外都执行，不依赖 ChangeImpact。子项以 `scripts/check.mjs` 的 `steps` 为准（下表按其顺序）。
内部按可用核数并发执行独立项（至少 2、上限 4 个子进程，汇总行打印实际数），每项完成立即输出耗时，全部跑完后统一报失败和总墙钟耗时。
失败不会跳过其余检查；没有引入跨版本结果缓存。这些检查从项目文件重新推导结果，不需要本机 Build 记录，不替人完成审阅。

| 子项 | 白话作用 | 实际原理 | 典型失败 | 不负责什么 |
| --- | --- | --- | --- | --- |
| `syntax` | 所有 JS 至少能被解析 | 单个 Node 进程用原生 V8 parser 只解析不执行（与 `node --check` 的 grammar parity 有测试） | 少括号、非法 import、语法残缺 | 不执行浏览器交互 |
| `test` | 纯逻辑仍符合约定 | `node --test tests/*.test.mjs` | 布局数学、生命周期状态、i18n、Diff 等断言失败 | 不证明页面能启动 |
| `check:pending` | 新图片不是重复上传或 key 冲突 | 在 check 进程内调用 `scripts/lib/pending-queue.mjs`，比较 pending/processing/processed 的 SHA-256、候选 key 与已有注册 | 同内容重复、同 key 两张图、已被领取 | 不移动 Source |
| `verify:architecture` | 文档、机器契约和实现没有各说各话 | 对 lifecycle protocol、状态、Adapter、ChangeImpact、命令语义及文档链接逐项对账；校验保真规则目录生成区与 catalog 一致（改规则后须跑 `pnpm update:fidelity-rules-doc`）及 AGENTS 中文镜像章节/命令表奇偶 | JSON 契约和代码常量漂移 | 不执行生命周期命令 |
| `verify:app-globals` | 经典 script 的共享顶层作用域安全 | 静态解析声明和加载期引用，按 `index.html` 顺序检查 | 重复 `const`、加载时引用后置脚本 | 运行时点击由 `verify:app` 负责 |
| `verify:dataset-manifest` | Adapter 文件和生成清单一致 | 在内存中重建 manifest，与已提交文件逐字比较 | 新增 Adapter 忘记同步、清单手改 | 不渲染图 |
| `verify:render-baselines` | 每个注册 Adapter 都有 baseline 账目，且没有孤儿 | 只读取 manifest 与 `render-baselines.json`，不启动 Chromium | baseline 缺项、已删除 Adapter 仍留 baseline | 不做像素评分 |
| `verify:workflow` | 工作流命令表与协议没有漂移 | 由 `workflow-contract.mjs` 与 `package.json` 重新生成 `docs/workflow-command-reference.md` 并逐字比较 | 新增 action 或协议后忘记 `pnpm update:workflow-reference` | 不运行工作流 |
| `verify:workflow-graph` | 流程图与工作流契约一致 | 重新生成 `docs/workflow-flowchart.zh-CN.html` 并逐字比较 | 改动流程后未更新流程图 | 不判断流程是否合理 |
| `verify:asset-catalog` | 资产版本与使用目录是最新的 | 先建 Adapter 依赖反向图，再重新生成资产 catalog 并比较 | 新增/替换 raster 资产后 catalog 过期 | 不检查资产像素内容 |
| `verify:metrics` | 通用指标值与来源、登记一致 | 加载 metric-observation SSOT 与 catalog；原始文本存在时逐段核验，本机原件缺失时只校验结构与摘要 | 指标值与来源段落不符、catalog 漏登记 | 不代替图片语义的人工核对 |
| `verify:ssot` | 财务 SSOT、View Adapter、注册和币种互相对得上 | 在 VM 中加载所有数据，检查 key、金额、来源、单位、FX、注册奇偶，以及 render 画布声明与 `meta.referenceImage` 尺寸一致 | 图表值和财务记录不一致、漏公司 metadata、画布尺寸抄错 | 不判断像素位置是否像参考图 |
| `verify:i18n` | 翻译只能改展示文案，不能改数据、几何或可见金额语义 | 按 deny-by-default 路径契约检查 overlay，并比较本地化前后的拓扑、几何、金额语义与 SVG 结构（单数据集流程可用 `--strict`） | 中文 overlay 漏项、品牌词误译、翻译层改金额或几何 | 不代替中文页面人工检查 |
| `verify:dataset-file-metadata` | “最近更新”时间可复现 | 根据完整 Git author history 重算生成文件 | 提交 Dataset 后忘记刷新 metadata | 首次未提交文件仍只能临时使用 mtime |

本机 `post-commit` / `pre-push` hook 规则由 [commit-messages.md](commit-messages.md) 「Dataset metadata 提交保护」定义；
hook 只是反馈加速层，CI 仍在完整历史的 fresh checkout 中执行同一新鲜度门禁。

### 5. Chromium：restore、install、retain

只有后续需要浏览器（或 main 要部署新站点）时，按 runner OS、架构及 lockfile 恢复 `~/.cache/ms-playwright`，
并总是执行 `playwright install --with-deps chromium` 校准系统库；只有 main 在恢复未命中时保存缓存。

### 6. Verify viewer interactions (`pnpm verify:app`) 与 `pnpm verify:workbench`

- **白话作用**：证明开发版 viewer 不只是“语法正确”，而是真的能启动和点击。
- **原理**：一个 Chromium 内按场景创建隔离 Context（最多 3 个场景并发），覆盖默认启动、持久化语言/主题、
  Adapter 加载失败重试、选中公司后台预载全部期间 Adapter、hash 路由、hover 百分比、
  期间切换、Apple 全期间统一金额比例尺、USD/EUR 与 B/M 跨量级对比、金额维度一致性、
  节点与最终 SVG viewBox 对账、整组失败原子性、浏览器亚像素换行、对比缩放、趋势图和
  手机视口。启动断言允许当前公司的完整 Adapter 集合被预载，超出该范围的空闲加载视为失败。
- `verify:workbench` 在同一条件下运行：在临时目录启动本地审阅工作台，用 Chromium 检查
  同一 frame 内切换审阅项、候选自动跟随与显式冻结、多标签页偏好隔离和失败 Build 保留。
- **触发**：`src/app/`、app CSS、Chart runtime、共享 viewer/runtime 改动。
- **不对纯 Dataset 重跑**：单 Dataset 的图形由 render regression 检查；app smoke 使用固定代表性数据。

### 7. Build Pages projection (`pnpm build:site`) 与 `pnpm verify:release`

- **白话作用**：把开发目录投影成真正部署的 `_site`。
- **原理**：生成 foundation/catalog/app 三个有序 bundle，保留 Adapter 按需脚本，复制
  Chart.js 与本地字体，明确排除 fidelity reference images。
  catalog 只保留导航、搜索和排序所需的摘要；完整公司/财务详情、全量 Table family、
  通用指标另存 JSON。所有运行资源位于同一个内容摘要目录 `releases/<digest>/`。
  构建前 `Restore previous Pages runtimes` 恢复 `output/site-releases` 缓存，产物最多带上前两个版本；
  缓存缺失也能独立构建。运行数据与 canonical publication 的边界见
  [runtime-data.md](architecture/runtime-data.md)。
- **`verify:release`**：构建后核对 `_site` 实际字节与 `site-release.json`、manifest 的源提交等于 CI 提交；
  带 `Trace-Transport` 的提交还要逐路径匹配 `docs/releases/current.json` 中已接受的审阅映射。
  Git 交接机制见 [local-environments.md](local-environments.md)。
- **触发**：任何会改变线上站点内容的数据、Adapter、viewer 或构建脚本；构建只检查“能否生成”，不检查浏览器加载行为。

### 8. Verify Pages loading and interaction budgets (`pnpm verify:site`)

- **白话作用**：确认部署版没有偷偷把全部 Dataset 或 Chart.js 提前下载。
- **原理**：启动 `_site` 静态服务器并观察真实请求，检查 defer bundle 数、启动 Adapter
  请求必须落在当前公司的注册 Adapter 集合加列表可见公司的点击层（默认期间 Adapter）内
  （选中公司的空闲预载与可见公司预热允许、全目录扫库不允许）、空闲后仍有 pending Adapter、
  可见公司在空闲后必须已预热且点击它不出现加载占位、不发公司详情/Adapter/raster 请求、
  列表可见带之外的公司切换仍按需加载、首次趋势交互只取一次 Chart.js、
  字体与页面错误；随后用与开发版相同、但不调用生产校准模块的 Adapter + Metric SSOT +
  实绘 DOM oracle 验证 Apple 全期间统一金额比例尺，防止 bundle 顺序或投影漏文件。
  首个 Sankey 渲染前（`trace:sankey-rendered` performance mark）只允许一个公司详情 JSON、
  零全局 Table JSON；空闲后额外的公司详情只能属于列表可见公司；传输与 catalog 大小预算见
  [runtime-data.md](architecture/runtime-data.md)。另以完整源码 SSOT 为
  oracle 核验 Table/CSV 完整性、中文缓存更新、多公司范围、失败重试、损坏字节拒绝、
  收入趋势无多余详情依赖和快速切换公司时的旧请求隔离。
- **触发**：viewer/站点构建变化；`main` 上只要要部署新 `_site` 也强制运行。
- **数据 PR 不必跑**：Adapter 由受影响 key 渲染，加载策略没有变化；合入 `main` 部署前仍检查实际产物。

### 9. Render regression (`pnpm verify:render-regression`)

- **白话作用**：共享 renderer 改动时检查全目录；单/批量 Dataset 改动时只检查相关 key。
- **原理**：一个 Chromium、默认四个隔离 Context 并行；每个 key 都跑英文和中文的字体、
  SVG 纯净度、画布尺寸和页面错误硬门槛。存在本地 reference image 时，再把
  英文候选截图与 canonical baseline 比 similarity。
- **结构错误快速失败**：baseline 缺项/孤儿在 `pnpm check` 中已经失败；单独运行本命令也在启动浏览器前失败。
- **为什么 CI 不运行 `verify:d3`**：完整 diagnostic 需要
  `input/processed/<key>.png`，而 processed archive 按仓库策略只存在于本机、不会进入
  fresh checkout。CI 用本命令覆盖可复现的渲染硬门禁；完整 reference/Diff/Interface
  诊断仍在持有本机 reference 的 Dataset Build / fidelity 流程中运行。
- **为什么不在这里强制 `verify:d3` 的严格标签间距**：已接受的固定布局没有 per-Dataset 例外/baseline，
  直接推广会制造误报；严格标签、Interface 和人工视觉判断由每个 Dataset 的 Build/fidelity 流程负责。
- **选择规则**：Adapter/对应 Income Statement SSOT/reference image → 受影响 key；baseline
  顶层 policy 不变时只取变化条目；raster asset 取前后已校验 catalog 的使用者并集
  （含间接复用）。查不到完整 catalog 或共享 runtime 出现资产引用时仍全量。
  仅生成的 SSOT script 标签变化不改变 runtime 加载顺序；其他 `index.html` 改动仍全量。
  参考裁剪、审阅 JSON 和 `data/assets/**/*.md` 文档不是运行资产。共享 engine/i18n/icons/fonts/d3/runtime、baseline
  policy 变动和未知可执行影响继续全目录。
- **本机指纹缓存**：默认全 key 运行时，只有内容指纹（Adapter、资产、reference、baseline 条目与全局
  runtime/管线）字节级一致且上次通过的 key 才跳过；失败永不入缓存；跳过量必须出现在汇总行；
  缓存是 gitignored 的本机 `output/` 产物，CI 永远冷跑。显式 key、`--update`、`--no-cache` 都真渲染。

### 10. Standalone build and verification

- **白话作用**：保证双击一个 HTML 就能使用，不依赖旁边的 CSS、JS、字体、Dataset 或 PNG。
- **原理**：`build:standalone` 内联所有运行内容；`verify:standalone` 先静态搜索外链并确认未内联
  本机 processed 参考图（一次扫描建立 data URI 索引），再通过 `file://` 用 Chromium 整页加载一次，
  检查默认 Sankey 与字体；之后在同一文档内用 `location.hash` 触发 hashchange 路由逐个切换
  raster annotation 数据集，等待条件绑定目标 key 与新绘制的 `#chart svg`，确认 raster 均为 data URI，
  并复用独立 oracle 验证 Apple 全期间统一金额比例尺。
- **触发**：Dataset Adapter、viewer/runtime、asset 或 standalone 构建工具变化。
- **不对纯 metadata/revenue 数据重复跑**：其结构由 SSOT 检查负责，standalone 比例尺场景只覆盖 Apple 收入表。
- **与其他浏览器检查重叠运行**：`Start standalone build and verification` 在 Chromium 安装后转入后台，
  `Collect standalone verification` 在 render regression 之后输出完整日志并返回它的退出码（5 分钟未结束按失败）。

### 11. Upload and Deploy Pages

- **白话作用**：部署的必须是刚才验证过的那个 `_site`，不是另一个 Job 重新构建的近似产物。
- **原理**：`check` Job 在 `main` 上上传 `_site`；`deploy` Job 只下载该 artifact 并调用
  `actions/deploy-pages`。部署 Job 只有 Pages/id-token 写权限，检查 Job 只有 contents/actions 读权限。
- **旧页面兼容**：只有验证完成的 main 运行通过 `Retain verified Pages runtimes` 保存 runtime 缓存；
  这是尽力保留，资源过期时页面提供重试与刷新最新版本，不能把新版本详情拼进旧目录。

## ChangeImpact 触发矩阵

| 改动 | `pnpm check` | Chromium | Render | App | Site | Standalone |
| --- | --- | --- | --- | --- | --- | --- |
| `input/pending/*.png` / `input/processing/*.png` 共享队列变更 | 必跑 | 不装 | 不跑 | 不跑 | 不跑 | 不跑 |
| `main` 上全部为 `Trace-Transport` 提交 | 不跑 | 不装 | 不跑 | 不跑 | 构建 + `verify:release` | 不跑 |
| 文档 / 测试 | 必跑 | 通常不装 | 不跑 | 不跑 | 不跑 | 不跑 |
| Revenue Metric / company metadata | 必跑 | PR 不装 | 不跑 | 不跑 | 构建；main 部署前浏览器验证 | 不跑 |
| 单个或多个 Dataset Adapter | 必跑 | 安装 | 只跑受影响 key | 不跑 | 构建；main 部署前浏览器验证 | 构建 + 浏览器验证 |
| Income Statement SSOT | 必跑 | 有对应 key 时安装 | 仅变化记录 key；解析失败整家公司 | 不跑 | 构建；main 部署前浏览器验证 | 对应 Adapter 存在时验证 |
| `src/app/*` / app CSS / Chart.js | 必跑 | 安装 | 不重复跑全目录 | 跑 | 跑 | 跑 |
| engine / i18n / icons / d3 / 未识别 render asset | 必跑 | 安装 | 全目录 | 跑 | 跑 | 跑 |
| `verify-app.mjs` / `verify-workbench.mjs` | 必跑 | 安装 | 不跑 | 跑 | 不重建 | 不跑 |
| 已登记 raster asset | 必跑 | 安装 | 前后 catalog 的全部使用者，含间接复用 | 不跑 | 构建；main 部署前浏览器验证 | 构建 + 浏览器验证 |
| 仅生成 SSOT script 注册 / 时间账目 | 必跑 | 按其他影响 | 不自行扩大 | 不跑 | 构建；main 部署前浏览器验证 | script 注册变更时验证 |
| 仅 baseline 条目 | 必跑 | 有受影响 key 时安装 | 变更条目 key；policy 变化仍全量 | 按其他影响 | 按其他影响 | 按其他影响 |
| 图标参考裁剪/审阅 JSON 与 `.md`、`data/assets/**/*.md`、生成资产 catalog | 必跑 | 按其他影响 | 不自行扩大 | 按其他影响 | 按其他影响 | 按其他影响 |
| d3 验证工具 | 必跑 | 安装 | 全目录 | 按实际影响 | 按实际影响 | 按实际影响 |
| 无法识别的可执行代码 | 必跑 | 安装 | 全目录 | 跑 | 跑 | 跑 |

历次耗时实测是历史观测，不是时间门禁，见 [ci-timing-history.md](archive/ci-timing-history.md)。

## “不能误报”的约束

- baseline 缺失是确定的账目错误，必须在渲染前失败，不受指纹缓存影响。
- 没有本地 reference image 时，不做 similarity 结论，只报告“hard gates passed”。
- automatic evidence 不能代替操作员接受（FidelityResult 的 `acceptance`）。
- ChangeImpact 计划失败不会跳过检查，而是全量回退。
- 选择 Module 的每条分支都有纯函数测试；CI workflow 自身或 planner 变化会触发全量。
- `verify:*` 保持只读；部署只消费已经验证的 `_site` artifact。

Node 版本由 `.node-version` 固定，本地 `.nvmrc` 同值。
