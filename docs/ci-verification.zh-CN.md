# CI 检查说明与触发规则

本文是 `.github/workflows/ci.yml` 的规则属主。目标只有三个：

1. **有效**：该抓的问题必须能抓到；自动检查不能冒充人工保真 Review。
2. **少误报**：检查失败必须对应一个可解释、可复现的问题。
3. **快**：只运行与本次 ChangeImpact 有关的浏览器检查；无法分类时回退全量。

`scripts/lib/ci-plan.mjs` 是检查选择 Module，`scripts/plan-ci.mjs` 是 Git diff Adapter。
调用方只提供两个 Git SHA；路径分类、受影响 Dataset key、严格回退和 GitHub Actions
输出都保留在 Module 内，测试也通过同一个 Interface 验证。

## 一次 CI 怎么走

```text
Git diff
  ↓
ChangeImpact 计划（只决定“要跑什么”，不决定“检查是否通过”）
  ↓
pnpm check（始终运行）
  ↓
需要浏览器吗？──否──→ 完成
  │是
  ├─ viewer app 检查（按影响）
  ├─ Pages 构建/加载检查（按影响）
  ├─ 全量或受影响 key 的 render regression
  └─ standalone 构建/自包含检查（按影响）
  ↓
main 且站点内容变化：上传刚验证过的 _site → Deploy Pages
```

PR 有新提交时，旧 CI 会取消；`main` 上的运行不取消，避免中断正在部署的 Pages。

## 每一个 CI 项在检查什么

### 1. Checkout complete history

- **白话作用**：拿到完整 Git 历史，而不只是最新一次提交。
- **原理**：`actions/checkout` 使用 `fetch-depth: 0`。
- **为什么需要**：`dataset-file-metadata` 从 Git 作者时间生成；ChangeImpact 也要比较
  base/head 两个提交。
- **抓不到什么**：它本身不判断代码对错，只提供后续检查需要的输入。

### 2. Plan checks from ChangeImpact (`pnpm plan:ci`)

- **白话作用**：回答“这次改动真正可能影响哪些表面”。
- **原理**：读取 `git diff --name-status`，把文件映射成 pending、数据、单个 Adapter、
  viewer、共享 renderer、构建工具等影响；Income Statement SSOT 会提取其记录 key。
- **通过条件**：能够给出确定计划；缺 SHA、diff 失败或遇到未知可执行代码时自动全量。
- **不会做的事**：不会把某个真实失败改成通过；它只选择检查集合。
- **防漏规则**：未知 `scripts/`、`src/`、`vendor/` 改动一律全量，不能静默跳过。

### 3. Install JavaScript dependencies

- **白话作用**：严格按 lockfile 安装运行检查需要的包。
- **原理**：`pnpm install --frozen-lockfile`；lockfile 与 `package.json` 不一致会失败。
- **避免误报**：pnpm store 由 `actions/setup-node` 缓存，但 `node_modules` 每次从锁定依赖重建。

### 4. Fast deterministic checks (`pnpm check`)

这一项永远执行，不依赖 ChangeImpact。内部各子项会全部跑完，再统一报失败，因此一次
运行能看到多个独立问题。

| 子项 | 白话作用 | 实际原理 | 典型失败 | 不负责什么 |
| --- | --- | --- | --- | --- |
| `syntax` | 所有 JS 至少能被解析 | `.js` 用 `vm.Script`；`.mjs` 用 Node 自己的 `--check` | 少括号、非法 import、语法残缺 | 不执行浏览器交互 |
| `test` | 纯逻辑仍符合约定 | `node --test tests/*.test.mjs` | 布局数学、生命周期状态、i18n、Diff 等断言失败 | 不证明页面能启动 |
| `check:pending` | 新图片不是重复上传或 key 冲突 | 比较 pending/processing/processed 的 SHA-256、候选 key 与已有注册 | 同内容重复、同 key 两张图、已被领取 | 不移动 Source |
| `verify:architecture` | 文档、机器契约和实现没有各说各话 | 对 lifecycle protocol、状态、Adapter、ChangeImpact、命令语义及文档链接逐项对账；校验保真规则目录生成区与 catalog 一致（改规则后须跑 `pnpm update:fidelity-rules-doc`）及 AGENTS 中文镜像章节/命令表奇偶 | JSON 契约和代码常量漂移 | 不宣称未实现的 M4/M5 已完成 |
| `verify:app-globals` | 经典 script 的共享顶层作用域安全 | 静态解析声明和加载期引用，按 `index.html` 顺序检查 | 重复 `const`、加载时引用后置脚本 | 运行时点击由 `verify:app` 负责 |
| `verify:dataset-manifest` | Adapter 文件和生成清单一致 | 在内存中重建 manifest，与已提交文件逐字比较 | 新增 Adapter 忘记同步、清单手改 | 不渲染图 |
| `verify:render-baselines` | 每个注册 Adapter 都有 baseline 账目，且没有孤儿 | 只读取 manifest 与 `render-baselines.json`，不启动 Chromium | baseline 缺项、已删除 Adapter 仍留 baseline | 不做像素评分 |
| `verify:ssot` | 财务 SSOT、View Adapter、注册和币种互相对得上 | 在 VM 中加载所有数据，检查 key、金额、来源、单位、FX、注册奇偶，以及 render 画布声明与 `meta.referenceImage` 尺寸一致 | 图表值和财务记录不一致、漏公司 metadata、画布尺寸抄错 | 不判断像素位置是否像参考图 |
| `verify:i18n` | 翻译只能改展示文案，不能改数据、几何或可见金额语义 | 加载 i18n 管线，按 deny-by-default 路径契约检查 overlay；独立比较本地化前后的 SSOT 拓扑、渲染几何、金额/通用数字/正负号/币种/单位/百分比及其 Y/Y、Q/Q、margin 等 basis、期间日期与 `$value` 绑定；SVG 保持同一元素树与非文本属性，`text/tspan` 仅可使用语料驱动、相对源受界的排版投影，raster 不可覆盖；单数据集流程可用 `--strict` | 中文 overlay 漏项、品牌词误译、翻译层新增金额、负号或 rate basis 丢失、SVG/CSS 伪造几何或隐藏文字、用字面金额替换 `$value` | 不代替中文页面人工检查 |
| `verify:dataset-file-metadata` | “最近更新”时间可复现 | 根据完整 Git author history 重算生成文件 | 提交 Dataset 后忘记刷新 metadata | 首次未提交文件仍只能临时使用 mtime |

仓库管理的 `post-commit` hook 会在 Dataset/revenue 提交形成、author time 稳定后自动
刷新 metadata；`pre-push` hook 同时检查结果最新且已经提交，从而把这类确定性失败提前到
本机。hook 只是反馈加速层；CI 仍在完整历史的 fresh checkout 中执行同一新鲜度门禁。

### 5. Install Chromium and OS dependencies

- **白话作用**：只有后续确实需要浏览器时才安装 Chromium。
- **原理**：`playwright install --with-deps chromium` 同时校准浏览器版本和 Linux 系统库。
- **为什么不盲目缓存浏览器目录**：缓存浏览器但漏掉系统库可能在 runner 镜像升级后产生
  难解释的启动错误；当前最稳妥的提速是对 pending-only、文档和纯数据 PR 完全跳过安装。

### 6. Verify viewer interactions (`pnpm verify:app`)

- **白话作用**：证明开发版 viewer 不只是“语法正确”，而是真的能启动和点击。
- **原理**：一个 Chromium 内按场景创建隔离 Context，覆盖默认启动、持久化语言/主题、
  Adapter 加载失败重试、选中公司后台预载全部期间 Adapter、hash 路由、hover 百分比、
  期间切换、Apple 全期间统一金额比例尺、USD/EUR 与 B/M 跨量级对比、金额维度一致性、
  节点与最终 SVG viewBox 对账、整组失败原子性、浏览器亚像素换行、对比缩放、趋势图和
  手机视口。启动断言允许当前公司的完整 Adapter
  集合被预载，超出该范围的空闲加载视为失败。
- **触发**：`src/app/`、app CSS、Chart runtime、共享 viewer/runtime 改动。
- **不对纯 Dataset 重跑的原因**：单 Dataset 的图形由 render regression 检查；app smoke
  使用固定代表性数据，重复运行不会增加该 Dataset 的覆盖。

### 7. Build Pages projection (`pnpm build:site`)

- **白话作用**：把开发目录投影成真正部署的 `_site`。
- **原理**：生成 foundation/catalog/app 三个有序 bundle，保留 Adapter 按需脚本，复制
  Chart.js 与本地字体，明确排除 fidelity reference images。
- **触发**：任何会改变线上站点内容的数据、Adapter、viewer 或构建脚本。
- **性质**：构建很快；它检查“能否生成”，不检查浏览器加载行为。

### 8. Verify Pages loading and interaction budgets (`pnpm verify:site`)

- **白话作用**：确认部署版没有偷偷把全部 Dataset 或 Chart.js 提前下载。
- **原理**：启动 `_site` 静态服务器并观察真实请求，检查 defer bundle 数、启动 Adapter
  请求必须落在当前公司的注册 Adapter 集合内（选中公司的空闲预载允许、全目录扫库不允许）、
  空闲后仍有 pending Adapter、公司切换按需加载、首次趋势交互只取一次 Chart.js、
  字体与页面错误；随后用与开发版相同、但不调用生产校准模块的 Adapter + Metric SSOT +
  实绘 DOM oracle 验证 Apple 全期间统一金额比例尺，防止 bundle 顺序或投影漏文件。
- **触发**：viewer/站点构建变化；`main` 上只要要部署新 `_site` 也强制运行。
- **为什么数据 PR 不必在 PR 阶段都跑**：Adapter 自身由受影响 key 渲染；Pages 的加载策略
  没有变化。合入 `main` 准备部署时仍会检查实际产物。

### 9. Render regression (`pnpm verify:render-regression`)

- **白话作用**：共享 renderer 改动时检查全目录；单/批量 Dataset 改动时只检查相关 key。
- **原理**：一个 Chromium、默认四个隔离 Context 并行；每个 key 都跑英文和中文的字体、
  SVG 纯净度、画布尺寸和页面错误硬门槛。存在本地 reference image 时，再把
  英文候选截图与 canonical baseline 比 similarity。
- **结构错误快速失败**：baseline 缺项/孤儿在 `pnpm check` 中已经失败；即使单独运行本命令，
  也会在启动浏览器前失败，不再浪费约 50 秒。
- **缺参考图时的准确表述**：只算“hard gates passed”，不能写“视觉相似度通过”。
- **为什么 CI 不运行 `verify:d3`**：完整 diagnostic 需要
  `input/processed/<key>.png`，而 processed archive 按仓库策略只存在于本机、不会进入
  fresh checkout。CI 用本命令覆盖可复现的渲染硬门禁；完整 reference/Diff/Interface
  诊断仍在持有本机 reference 的 Dataset Build / fidelity 流程中运行。
- **为什么不在这里强制 `verify:d3` 的严格标签间距**：全目录受控试跑发现 48 个历史已接受
  固定布局会触发该门槛。没有 per-Dataset 例外/baseline 前直接推广会制造误报；严格标签、
  Interface 和人工视觉判断仍由每个 Dataset 的 Build/fidelity 流程负责。
- **选择规则**：Adapter/对应 Income Statement SSOT/reference image → 受影响 key；共享
  engine/i18n/icons/fonts/d3/runtime → 全目录；未知可执行影响 → 全目录。
- **本机增量（指纹缓存）**：默认全 key 运行时，按 key 计算内容指纹（Adapter 源文件 +
  其引用的 raster-annotation 资产 + 按 processed→processing 回退解析的 reference image +
  该 key 的 baseline 条目），再叠加全局 runtime 指纹（engine/i18n/icons/d3 按 index.html
  加载顺序 + 内联字体字节 + 渲染/门槛管线脚本自身 + Playwright/浏览器/OS 签名）。指纹与
  上次通过完全一致的 key 直接跳过；零 miss 时不启动服务器与浏览器。缓存位于
  `output/render-regression/cache.json`（gitignored、单机、与失败诊断产物同一既成写语义），
  跳过量始终在汇总行显式报告。显式 key 与 `--update` 永远真渲染；失败与
  similarity 提升超容差的 key 永不入缓存（重录提示每次重现）；`--no-cache` 强制全量；
  缓存损坏/版本不符/指纹计算失败一律回退全量，绝不让缓存本身弄失败一次 verify。
- **声明的近似**：其他 Dataset Adapter 与 income-statement SSOT 脚本会加载进 harness
  页面但不是像素输入，因此不进任何 key 的指纹——否则每新增一个数据集都会作废全部缓存。
  兜底：新增/变更 key 必为 miss 而真渲染，`pnpm check` 语法扫全部脚本，CI 无 `output/`
  持久化、永远冷跑全量。

### 10. Standalone build and verification

- **白话作用**：保证双击一个 HTML 就能使用，不依赖旁边的 CSS、JS、字体、Dataset 或 PNG。
- **原理**：`build:standalone` 内联所有运行内容；`verify:standalone` 先静态搜索外链，再通过
  `file://` 用 Chromium 启动，检查默认 Sankey、字体、raster annotation 均为 data URI，
  并复用独立 oracle 验证 Apple 全期间统一金额比例尺。
- **触发**：Dataset Adapter、viewer/runtime、asset 或 standalone 构建工具变化。
- **不对纯 metadata/revenue 数据重复跑的原因**：这些数据的结构由 SSOT 检查负责；
  standalone 的比例尺场景固定覆盖 Apple 收入表，纯 revenue metric 变化不经过该路径。

### 11. Upload and Deploy Pages

- **白话作用**：部署的必须是刚才验证过的那个 `_site`，不是另一个 Job 重新构建的近似产物。
- **原理**：`check` Job 在 `main` 上上传 `_site`；`deploy` Job 只下载该 artifact 并调用
  `actions/deploy-pages`。部署 Job 只有 Pages/id-token 写权限，检查 Job 只有 contents 读权限。
- **消除的冗余**：旧 `pages.yml` 的第二次 checkout、pnpm setup、dependency install 和
  `build-site` 已删除。

## ChangeImpact 触发矩阵

| 改动 | `pnpm check` | Chromium | Render | App | Site | Standalone |
| --- | --- | --- | --- | --- | --- | --- |
| `input/pending/*.png` / `input/processing/*.png` 共享队列变更 | 必跑 | 不装 | 不跑 | 不跑 | 不跑 | 不跑 |
| 文档 / 测试 | 必跑 | 通常不装 | 不跑 | 不跑 | 不跑 | 不跑 |
| Revenue Metric / company metadata | 必跑 | PR 不装 | 不跑 | 不跑 | 构建；main 部署前浏览器验证 | 不跑 |
| 单个或多个 Dataset Adapter | 必跑 | 安装 | 只跑受影响 key | 不跑 | 构建；main 部署前浏览器验证 | 构建 + 浏览器验证 |
| Income Statement SSOT | 必跑 | 有对应 key 时安装 | 对应记录 key | 不跑 | 构建；main 部署前浏览器验证 | 对应 Adapter 存在时验证 |
| `src/app/*` / app CSS / Chart.js | 必跑 | 安装 | 不重复跑全目录 | 跑 | 跑 | 跑 |
| engine / i18n / icons / d3 / render asset | 必跑 | 安装 | 全目录 | 跑 | 跑 | 跑 |
| d3 验证工具 | 必跑 | 安装 | 全目录 | 按实际影响 | 按实际影响 | 按实际影响 |
| 无法识别的可执行代码 | 必跑 | 安装 | 全目录 | 跑 | 跑 | 跑 |

## 耗时基线与预期

2026-07-12 审计了最近 20 次 CI 状态，并读取其中 11 次成功运行的逐 step 时间。
工作流在这期间有演进；最新包含 site gate 的 5 次成功运行总耗时中位数约 **122 秒**：

| 项目 | 典型耗时 |
| --- | ---: |
| checkout + Node/pnpm setup + install | 约 11 秒 |
| `pnpm check` | 约 7 秒 |
| Playwright Chromium + 系统依赖 | 约 25 秒 |
| `verify:app` | 约 13–16 秒 |
| `verify:site` | 约 3–4 秒 |
| 全量 render regression | 约 44–54 秒 |
| standalone build + verify | 约 6–10 秒 |

因此本次优化不在 1 秒的依赖安装上冒险，而是消除无意义的 Chromium 安装与 286 个
Adapter × 2 种语言全渲染：

- pending-only / 文档 PR：预计约 15–25 秒；
- 纯 metadata / revenue PR：预计约 15–30 秒；
- 单/批量 Adapter：固定安装成本 + 与 changed keys 数量近似线性；本机单 key render
  实测 **0.6 秒**，同机全量为 **43.9 秒**；
- 共享 renderer：仍保留原全量安全网，耗时不会伪装成数据级检查。

2026-07-16 引入本机指纹缓存后（目录已增长到 427 个 Adapter），同机实测：

| 场景 | 耗时 |
| --- | ---: |
| 全量冷跑（缓存为空或 runtime 指纹变化） | 约 72 秒 |
| 全量暖跑、零变更（不启动浏览器） | **约 0.4 秒** |
| 改 1 个 Adapter 后的全量校验 | **约 1 秒** |
| 改 1 个 raster 资产（2 个引用 key 重渲染） | 约 1.3 秒 |

CI 无缓存持久化，仍按 ChangeImpact 矩阵冷跑；上表只改变本机迭代成本。

## “不能误报”的约束

- baseline 缺失是确定的账目错误，必须失败；现在只是不再渲染后才失败。
- 没有本地 reference image 时，不做 similarity 结论，只报告 hard gates。
- automatic evidence 不能代替 `ManualAttestation`、RegionDecision 或 FidelityResult。
- ChangeImpact 计划失败不会跳过检查，而是全量回退。
- 选择 Module 的每条分支都有纯函数测试；CI workflow 自身或 planner 变化会触发全量。
- `verify:*` 保持只读；部署只消费已经验证的 `_site` artifact。
- 指纹缓存只允许"字节级完全一致 + 上次通过"的 key 跳过；失败永不入缓存，跳过量必须
  出现在汇总行里（欠检查永远可见）。缓存是 gitignored 的本机 `output/` 产物，CI 永远
  冷跑；管线脚本自身在指纹内，改判定逻辑会自动作废全部缓存。baseline 缺失仍在渲染前
  确定性失败，不受缓存影响。
