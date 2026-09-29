# View 字体作用域清理实施方案

> 状态：已实施（2026-07-11）；standalone / 全量 render regression 待受限环境复验  
> 编写日期：2026-07-11  
> 适用范围：Trace Viewer、Sankey renderer、dataset View Adapter、站点与 standalone 构建、渲染校验  
> 本文是实施计划，不表示下述改动已经完成。

## 1. 目标

把字体选择从“页面继承 + dataset 自由硬编码”收敛为按内容角色管理：

| 内容角色 | 默认字体策略 |
| --- | --- |
| View 外部 App Chrome | Montserrat |
| View 内产品级文本 | Noto Sans |
| Sankey 数值说明与 Hover Tooltip | Roboto |
| 品牌 Logo、wordmark、品牌插图 | 按来源保真需要自由选择，不限制字体 |

本次清理的核心不是从仓库删除 Montserrat，而是确保 Montserrat 不再作为 View
产品文本的默认或显式字体。品牌图形即使位于 View 内，也不受此限制。

## 2. 已确认的设计决策

以下决策已由用户 Review，不应在执行 Session 中重新解释为其他目标：

1. 保留 Montserrat，用于 Toolbar、Sidebar、Control Strip、View Actionbar、按钮、
   搜索框、切换器等 View 外部 UI。
2. Sankey、Trend、Comparison、Table 内的产品文本不使用 Montserrat。
3. View 产品文本以 Noto Sans 为默认字体；当前 Sankey 的数值说明和 Tooltip
   继续使用 Roboto，金额继续使用 Noto Sans。
4. 品牌图形不设字体白名单。它可以使用 Montserrat、Arial Black、Georgia、
   系统字体、近似品牌字体或后续引入的专用字体。
5. “品牌名称”不自动等于“品牌图形”。普通节点标签、表格单元格或坐标轴中的
   `YouTube`、`AWS` 等仍是产品文本；只有具有 wordmark / Logo / 品牌插图视觉
   意图的元素才属于品牌图形。
6. 不允许用全仓库 `Montserrat -> Noto Sans` 批量替换完成本任务。

## 3. 术语与边界

### 3.1 App Chrome

App Chrome 是 View 内容之外的交互框架，包括：

- `.top-shell`；
- `#datasetPanel` 与其导航、搜索、时间点选择；
- `.control-strip`；
- `.view-actionbar`；
- View 切换、导出、缩放等操作控件。

这些区域继续使用 Montserrat。`body` 可以继续以 Montserrat 为默认字体，但不能
依靠 `body` 继承决定 View 的字体。

### 3.2 View 产品文本

以下均属于产品文本，即使其中包含公司、业务或产品名称：

- `.view-pane` 内的普通 HTML 标题、表格、空状态和说明文字；
- Trend / Comparison Canvas 的标题、轴、刻度、图例、数据标签和 Tooltip；
- Sankey 的标题、期间、节点名称、金额、备注、KPI 文本、普通 annotation、
  Hover Share Tooltip；
- 导出 SVG 中上述产品文本。

### 3.3 品牌图形

品牌图形是以视觉标识保真为目的的 Logo、wordmark、商标组合或品牌插图，例如：

- `meta.logoSvg`；
- `window.SANKEY_BUSINESS_ICONS` 中的公司/业务品牌资产；
- `annotationsSvg` 中以 wordmark 形式绘制的公司、业务线或产品标识；
- `rasterAnnotations` 中已批准的品牌图片资产。

品牌图形中的字体完全按需选择。门禁只要求它被明确识别为品牌图形，不判断其
字体家族是否“合规”。

通用 Lucide 图标、财务节点文本、纯文字业务标签不因为靠近 Logo 就成为品牌图形。

## 4. 当前实现盘点

以下结论基于 2026-07-11 当前工作区；执行前应重新运行本节末尾的盘点命令，因为
仓库正在持续增加 dataset。

### 4.1 App 与 View

- `src/app.css` 在 `html, body` 上声明 Montserrat，三个 `.view-pane` 当前没有独立
  字体作用域，因此 Table 等 HTML View 会继承 Montserrat。
- `src/app/chart-theme.js` 把 Chart.js 字体硬编码为 Montserrat。
- `src/app/trend.js` 和 `src/app/comparison-metric-trend.js` 还各有 Montserrat
  fallback，Canvas View 因此明确使用 Montserrat。
- `src/sankey-engine.js` 的默认角色已经基本符合目标：
  - `fontFamily`：Noto Sans；
  - `amountFontFamily`：Noto Sans；
  - `valueFontFamily`：Roboto；
  - Tooltip：Noto Sans（当前实现与注释中的“数值说明”职责略有不一致，实施时须
    按第 7.3 节决定并固定，不应无意改变）。

### 4.2 Dataset

- 当前只有 `data/datasets/salesforce-q4-fy26.js` 与
  `data/datasets/kering-fy25.js` 用 `render.fontFamily`、
  `valueFontFamily`、`amountFontFamily` 把整个 Sankey 产品文本覆盖为 Montserrat；
  这两个 override 必须移除或改回项目 View 字体角色。
- 两个文件内部各自的 Salesforce/Kering wordmark 仍是品牌图形，可以继续使用
  Montserrat。
- 当前大量 dataset 在 `logoSvg` 或 `annotationsSvg` 中使用 Montserrat。不能用
  源码字符串判断它们都是产品文本或都是品牌图形。
- `annotationsSvg` 是混合容器：既有 KPI/财务注释，也有品牌 wordmark。现有模型
  没有机器可判定的字体角色字段，这是本次清理必须先补的能力。

### 4.3 字体加载与校验

- `index.html` 开发入口通过 Google Fonts 请求 Montserrat、Noto Sans、Roboto。
- `scripts/lib/local-fonts.mjs` 为 render harness 和 standalone 内联本地 Latin
  WOFF2；`scripts/build-site.mjs` 另有一份重复字体清单并复制生产字体文件。
- 当前共有 14 个项目字体文件：Montserrat 5 个字重、Noto Sans 6 个、Roboto 3 个。
- `scripts/lib/render-harness.mjs` 实际加载并检查三个家族，但
  `docs/fidelity-loop-rules.md` 的 G3 仍只描述 Montserrat。
- `scripts/verify-standalone.mjs` 也只断言 Montserrat；README 的 standalone 描述
  同样过时。
- 当前本地字体文件都是 Latin 子集。中文依赖操作系统 CJK fallback；本计划不引入
  新 CJK 字体，也不承诺中文跨操作系统像素完全一致。

### 4.4 导出

`src/app/exports.js` 克隆并序列化当前 Sankey SVG，不嵌入字体文件。实施后：

- 产品文本在 SVG 中必须保持 Noto Sans / Roboto 角色；
- 品牌图形仍可包含 Montserrat 或其他字体；
- “导出 SVG 中完全没有 Montserrat”不是验收条件；
- SVG 在未安装相应品牌字体的机器上是否保持 wordmark 像素一致，属于既有的导出
  可移植性问题，不在本次范围内。

### 4.5 重跑盘点

```sh
rg -n --hidden -S \
  "Montserrat|Noto Sans|Roboto|font-family|fontFamily|@font-face|document\\.fonts" \
  -g '!node_modules/**' -g '!.git/**' -g '!_site/**' -g '!output/**' \
  -g '!compare/**' .

rg -n -S \
  "fontFamily\\s*:.*Montserrat|valueFontFamily\\s*:.*Montserrat|amountFontFamily\\s*:.*Montserrat" \
  data/datasets

rg -l -S 'font-family="[^"]*Montserrat' data/datasets src/icons.js
```

这些命令是 inventory，不是合规判定；品牌图形中的命中是合法的。

## 5. 目标模型

### 5.1 CSS 字体 token

在 `src/app.css` 的 `:root` 中建立语义 token，名称不绑定具体业务 View：

```css
:root {
  --font-ui-chrome: 'Montserrat', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-view: 'Noto Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-view-number: 'Roboto', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif;
}

html,
body {
  font-family: var(--font-ui-chrome);
}

.view-pane {
  font-family: var(--font-view);
}
```

`.view-pane` 规则负责 HTML View 的基础继承。Canvas 和 SVG 不应仅依赖这条 CSS：
Canvas 必须显式读取 `--font-view`，Sankey SVG 继续由 renderer 写入字体。

### 5.2 JS 字体角色

`chartTheme()` 应从 CSS token 读取 View 字体，并成为 Trend/Comparison 唯一入口。
删除 `trend.js`、`comparison-metric-trend.js` 中的 Montserrat fallback；若必须保留
无 DOM fallback，统一放在 `chart-theme.js`，值为 Noto Sans。

Sankey renderer 保留三项职责：

- 产品名称、标题、期间：Noto Sans；
- 金额：Noto Sans；
- 数值备注与 Tooltip：Roboto。

当前 Tooltip 默认实际为 Noto Sans。实施时应把它改为 Roboto，以与已确认的角色
一致，并把这项视觉变化纳入回归；不要只改注释。

### 5.3 品牌作用域标记

采用一个稳定、可导出、可由浏览器检查的 DOM 标记：

```html
<g data-typography-role="brand">
  <!-- 任意品牌图形；字体不受限制 -->
</g>
```

规则：

1. `meta.logoSvg` 的外层 wrapper 由 `SankeyEngine` 自动增加
   `data-typography-role="brand"`，dataset 无须重复标记。
2. `annotationsSvg` 默认属于产品文本。只有真正的 Logo、wordmark 或品牌插图
   才在最小完整祖先元素上显式添加该标记。
3. `SANKEY_BUSINESS_ICONS` 被插入 `annotationsSvg` 时，放置它的 dataset wrapper
   必须带标记；不能假设共享字符串来源会自动传递 DOM 角色。
4. `rasterAnnotations` 不含可检查的 DOM `<text>`，字体策略天然豁免，但仍受现有
   R 系列白名单和视觉保真规则约束。
5. 不允许给整个 `.sankey-annotations` 容器标记为 brand，因为该容器常同时包含
   财务产品文本。
6. 标记表达语义角色，不是字体例外清单；品牌图形无需说明为什么选择某一字体。

### 5.4 产品文本判定

在渲染后的 Sankey SVG 中：

- 任意 `<text>`，若最近祖先匹配 `[data-typography-role="brand"]`，视为品牌图形；
- 其余 `<text>` 全部视为产品文本；
- 产品文本的 computed `font-family` 不得包含 Montserrat；
- 默认产品文本应解析为 Noto Sans，明确的数值说明/Tooltip 可解析为 Roboto。

该判定作用于最终 DOM，而不是源文件正则，因此能覆盖默认、i18n overlay、模板
字符串、共享图标注入和 dataset override。

## 6. 非目标

- 不删除 Montserrat 依赖或所有 Montserrat 字面量。
- 不统一品牌图形字体，不修改品牌 Logo 以追求风格一致。
- 不把公司名、产品名全部标成品牌图形。
- 不引入完整 Noto Sans CJK 或改变中文 fallback 策略。
- 不改变 Income Statement / Revenue Metric SSOT 字段或财务语义。
- 不改变 Sankey 几何、link 拓扑、Hover Share 公式或 raster 白名单。
- 不自动重录 canonical render baseline。
- 不顺带处理 `docs/render.html`；该文件当前未被 package scripts、tests 或主文档引用，
  执行 Session 应先确认它是否仍有 owner，再决定保留、删除或单独对齐。

## 7. 实施步骤

### 7.0 工作区保护与基线记录

当前仓库可能存在其他 Session 的未提交 dataset 工作。开始前：

```sh
git status --short
git diff -- src/app.css src/app/chart-theme.js src/app/trend.js \
  src/app/comparison-metric-trend.js src/sankey-engine.js \
  scripts/lib/local-fonts.mjs scripts/build-site.mjs \
  scripts/lib/render-harness.mjs scripts/verify-standalone.mjs \
  docs/fidelity-loop-rules.md README.md data/schema.md
```

要求：

- 不覆盖或格式化无关改动；
- 不使用 `git reset --hard`、`git checkout --`；
- 若目标文件已有重叠修改，先阅读并基于当前内容做最小 patch；
- 记录实施前 inventory 数量和代表性渲染结果，避免把新增 dataset 当成方案漂移。

### 7.1 先建立字体策略测试

建议新增 `tests/typography-policy.test.mjs`，覆盖快速、非浏览器规则：

1. App View 字体 token 存在，且 `--font-view` 首选 Noto Sans。
2. `chartTheme()` 不返回 Montserrat。
3. dataset 的 `render.fontFamily`、`valueFontFamily`、`amountFontFamily` 不允许
   Montserrat。
4. `layout.labels.*.blocks[].lines[].font`、`valueFont`、`noteFont` 不允许
   Montserrat，除非未来引入专门的品牌布局对象；当前没有这种对象。
5. 项目字体 manifest 仍包含 Montserrat、Noto Sans、Roboto 及所需字重。

不要把 `data/datasets/**/*.js` 或 `src/icons.js` 中所有 Montserrat 字面量判失败，
因为品牌图形合法使用 Montserrat。

### 7.2 收敛 App 和 Canvas View

修改：

- `src/app.css`：增加三个 token；`body` 使用 Chrome token；`.view-pane` 使用 View
  token。
- `src/app/chart-theme.js`：`fontFamily` 读取 `--font-view`。
- `src/app/trend.js`：移除 Montserrat fallback，使用统一 View font helper/token。
- `src/app/comparison-metric-trend.js`：同上。

在 `scripts/verify-app.mjs` 中增加代表性检查：

- Toolbar、Sidebar 或 Actionbar 的 computed font 首选 Montserrat；
- Sankey/Trend/Table pane 的普通 HTML 产品文本首选 Noto Sans；
- Chart.js 实例和自定义 Canvas plugin 获得 Noto Sans；
- 语言切换和主题切换后字体角色不变化；
- 移动端 viewport 仍满足相同边界。

注意：`.view-actionbar` 不在 `.view-pane` 内，继续属于 Chrome；其中 View 标题、导出
按钮等仍用 Montserrat，这是预期行为。

### 7.3 收敛 Sankey 产品字体

修改 `src/sankey-engine.js`：

1. 保持主 SVG 默认 Noto Sans。
2. 保持 amount 为 Noto Sans。
3. 保持 value/note 为 Roboto。
4. 将 Hover Tooltip 的实际默认字体改为 Roboto，使实现与角色定义一致。
5. `meta.logoSvg` wrapper 增加 `data-typography-role="brand"`，可同时增加稳定 class
   便于样式和审计，但门禁以 data attribute 为准。
6. 不根据字体名推断品牌角色。

修改 dataset：

- 删除或改写 Salesforce 的三个全局 Montserrat render override；保留其 Logo
  wordmark 的 Montserrat。
- 删除或改写 Kering 的三个全局 Montserrat render override；保留 Kering、Gucci、
  Saint Laurent、Bottega Veneta 等 brand marks 的自由字体选择。
- 全局搜索其他 line-level font override，按产品文本规则处理。

这一步会改变 Salesforce、Kering 以及 Tooltip 的像素结果，必须单独记录为预期
变化，不能作为无关 Diff 忽略。

### 7.4 分类 annotation 品牌图形

对所有注册 dataset 的最终英文和中文 DOM 做 inventory，而不是对 200+ 文件盲目
替换：

1. 收集 `.sankey-annotations text` 的 text content、dataset key、语言、computed
   font、DOM ancestry。
2. 把真正的 wordmark / Logo / 品牌插图 wrapper 标记为
   `data-typography-role="brand"`。
3. 未标记 annotation 默认为产品文本，移除显式 Montserrat 或改为继承 Noto Sans。
4. 品牌名称以普通财务 label/KPI 文本出现时仍保留产品文本身份。
5. 对共享 `SANKEY_BUSINESS_ICONS` 的 annotations placement 补 wrapper 标记；
   `meta.logoSvg` placement 由引擎自动处理。
6. 不改 raster 内部像素或尝试识别 raster 字体。

建议让 render harness 输出一次可审阅 inventory JSON，而不是把人工分类结果写成
临时聊天结论。inventory 至少包含：

```json
{
  "dataset": "example-q1-fy26",
  "language": "en",
  "text": "Example Brand",
  "role": "brand",
  "fontFamily": "Montserrat, Arial, sans-serif",
  "selectorPath": "..."
}
```

### 7.5 增加浏览器级 Typography Audit

在 `scripts/lib/render-harness.mjs` 增加纯读取的 `typographyAudit`，由
`verify:d3` 与 `verify:render-regression` 复用。建议输出：

```json
{
  "productTextCount": 0,
  "brandTextCount": 0,
  "violations": [
    {
      "text": "Revenue",
      "fontFamily": "Montserrat, Arial, sans-serif",
      "reason": "product-text-uses-montserrat"
    }
  ]
}
```

判定规则：

- 扫描最终 Sankey SVG 的全部 `<text>`；
- 跳过最近品牌祖先内的文本；
- 其余文本 computed font 包含 Montserrat 即 violation；
- 缺失/空字体、未加载的 Noto Sans/Roboto 也应报告；
- 英文和每个 required locale 都执行；
- audit 不修改 DOM，不成为新的 canonical mutation。

`verify:d3` 的 console/JSON 输出和 `record:fidelity` 证据应携带该 audit。作为
renderer-wide 规则，它应加入自动 hard gate；建议扩展既有 G3，而不是新增没有
路由的临时编号：

- G3a：项目托管字体按 manifest 全部加载，拒绝 fallback scoring；
- G3b：View 产品文本不得使用 Montserrat；
- G3c：品牌图形按显式 role 豁免，不限制字体。

由于 `verify:render-regression` 是 CI 的全 dataset render gate，最终必须在该命令
对所有可渲染 dataset 通过。`pnpm check` 中的快速测试只覆盖静态角色和 override，
不能替代浏览器 audit。

### 7.6 统一字体加载清单

保留三个项目字体家族，但消除清单漂移：

- 以 `scripts/lib/local-fonts.mjs`（或重命名后的单一 module）拥有 family、slug、
  weight、文件名信息；
- `scripts/build-site.mjs` 从该 module 导入，不再维护 `runtimeFontFamilies` 副本；
- render harness、standalone、site build 使用同一清单；
- 开发入口的 Google Fonts URL 若暂时无法由同一清单生成，应至少新增 freshness test，
  防止 family/weight 漂移；更理想的后续方案是开发环境也使用同一批本地 WOFF2；
- 仅在验证所有 Chrome 与品牌图形字重后删除未使用 font file；不能因为 View 产品
  文本不用 Montserrat 就删除 Montserrat 家族。

字体加载成功与“字体角色正确”是两个独立门禁，文档和测试中不得混为一谈。

### 7.7 Standalone、Site 与导出验证

更新：

- `scripts/verify-standalone.mjs`：不再只检查 Montserrat；验证三个项目字体加载、
  Chrome/View computed font 边界及 Sankey typography audit。
- `scripts/verify-site.mjs`：验证生产 fonts.css 与共享 manifest 一致，仍不得依赖
  Google Fonts。
- `src/app/exports.js` 或对应浏览器测试：序列化后的 SVG 保留
  `data-typography-role="brand"`；非品牌产品文本不使用 Montserrat；品牌文本允许。
- README：修正“只内联 Montserrat”的过时描述。

不要断言导出 SVG 全局没有 Montserrat，也不要把品牌图形转换成 Noto Sans 来让
测试通过。

### 7.8 更新规则与 schema 文档

至少更新：

- `docs/fidelity-loop-rules.md`：扩展 G3，写清加载门禁、产品字体门禁、品牌豁免；
- `data/schema.md`：在 `meta.logoSvg`、`annotationsSvg` 章节记录品牌作用域标记；
- `README.md`：字体加载、standalone 和 View 字体职责；
- 必要时更新 `docs/dynamic-dataset-workflow.md` 的 Adapter / annotation authoring
  提示，要求品牌 annotations 使用显式 role。

本文是迁移计划，不是新的 fidelity 规则 SSOT。实施完成后，长期规则必须落在上述
owner 文档，不能只留在本文。

## 8. 验证矩阵

| 表面 | 必查内容 | 建议门禁 |
| --- | --- | --- |
| App Chrome | Montserrat computed font | `verify:app` |
| Sankey HTML pane | Noto Sans 继承 | `verify:app` |
| Sankey SVG 产品文本 | 无 Montserrat；Noto/Roboto 已加载 | `verify:d3`、render regression |
| Sankey SVG 品牌图形 | 显式 brand role；字体不限 | typography audit + 人工抽查 |
| Trend Canvas | Chart config/plugin 均为 Noto Sans | `verify:app` |
| Table | 标题、表头、单元格为 Noto Sans | `verify:app` |
| Comparison | 卡片 HTML 与 Canvas 为 Noto Sans | `verify:app` |
| 中文 | 角色边界正确，无 Montserrat 产品文本 | required-locale render |
| Standalone | 三字体加载，无外部请求，边界一致 | `verify:standalone` |
| Production site | 本地 fonts.css 与 manifest 一致 | `verify:site` |
| SVG export | 产品文本合规；品牌字体不限；role 被保留 | export browser test |
| PNG export | 与当前 SVG render 视觉一致 | browser smoke + 人工抽查 |

## 9. 推荐执行命令

按风险从快到慢执行：

```sh
pnpm test
pnpm verify:app-globals
pnpm verify:app
pnpm build:site
pnpm verify:site
pnpm build:standalone
pnpm verify:standalone
pnpm check
pnpm verify:render-regression
```

针对有本地 reference 的代表 dataset，额外执行：

```sh
pnpm verify:d3 -- airbnb-q1-fy26 --language en
pnpm verify:d3 -- airbnb-q1-fy26 --language zh
pnpm verify:d3 -- salesforce-q4-fy26 --language en
pnpm verify:d3 -- kering-fy25 --language en
```

如某个 reference image 在当前机器不存在，按仓库规则报告 `ENOENT`，不要伪造
图片或把缺图写成 pass。renderer-wide 最低保障仍是 `verify:render-regression`。

## 10. 视觉回归与 baseline 处理

本次改动会有意改变：

- 全部 Trend/Comparison Canvas 文字；
- Table 内文字；
- Salesforce/Kering 产品文本；
- Sankey Hover Tooltip；
- 被识别为普通 annotation、此前却显式使用 Montserrat 的文本。

处理原则：

1. 先确认字体角色正确，再判断 Diff；不得为了恢复旧 Diff 把产品文本切回
   Montserrat。
2. 品牌图形不应因本次清理而变化；如变化，优先检查 brand role、字体加载时序和
   wrapper 继承。
3. 不得自动运行 `pnpm compat:baseline -- ...` 批量覆盖 canonical baseline。
4. `compat:baseline`（原 `record:baseline`）是兼容性 canonical mutation，不是本次实现的默认步骤；只有在
   完成视觉 Review 且获得明确授权后才可执行。
5. 自动证据仍然只是 `evidence-ready`，不能表述为人工 accepted 或 converged。

## 11. 完成标准

只有同时满足以下条件，任务才算完成：

- App Chrome 继续使用 Montserrat。
- Sankey、Trend、Comparison、Table 的产品文本不使用 Montserrat。
- Sankey 金额/标题/标签使用 Noto Sans；数值说明与 Tooltip 使用 Roboto。
- 品牌图形可以自由使用任意字体，且不会被门禁误判。
- `meta.logoSvg` 自动具备品牌 role；混合 `annotationsSvg` 中的品牌图形已显式标记。
- Salesforce、Kering 不再用 Montserrat 覆盖整个 renderer。
- 静态字体策略测试和浏览器 typography audit 均存在。
- G3、schema、workflow/README 与实现一致。
- 开发、site、render harness、standalone 使用一致的字体 family/weight manifest。
- 第 9 节的适用验证通过；缺失 reference 和已有无关工作区问题被明确报告。
- 未经授权没有改写 canonical baseline。
- 未修改财务 SSOT、数据语义或无关 dataset 内容。

## 12. 新 Session 交接清单

新 Session 开始时，应按以下顺序执行：

1. 阅读 `AGENTS.md`、`CONTEXT.md`、本文、`docs/fidelity-loop-rules.md` 中 G3、
   `data/schema.md` 的 `logoSvg` / `annotationsSvg` 章节。
2. 检查 `git status --short`，识别与本方案目标文件重叠的用户改动。
3. 重跑第 4.5 节 inventory，确认新增 dataset 和新增 override。
4. 先实现测试与 role marker，再迁移字体；不要先批量替换 dataset。
5. 先完成 App/Canvas/Sankey 核心角色，再通过最终 DOM inventory 分类 annotations。
6. 执行验证矩阵，保存 typography audit 结果和代表性截图。
7. 报告所有预期视觉变化、缺图数据集、未运行命令和 baseline 状态。

执行期间如发现“产品文本”和“品牌图形”仍无法仅凭显式 role 独立判定，应停止扩大
批量迁移，先修正对象模型或 audit 规则；不得用临时文件名单掩盖边界不清。

## 13. Reader 自检结果

本文按一个没有本次聊天上下文的新 Session 可能提出的问题做了反向检查：

- **Montserrat 是否要删除？** 不删除；保留给 Chrome 和按需使用它的品牌图形。
- **View 内是否绝对不能出现 Montserrat？** 不是。产品文本不能使用；显式品牌
  图形可以使用。
- **普通品牌名称是否自动豁免？** 不自动；只有 wordmark / Logo / 品牌插图语义
  才豁免。
- **如何避免 annotations 误判？** 默认产品文本，显式 brand ancestor 才豁免。
- **是否批量修改所有 dataset？** 否；先渲染 inventory，再分类实际 product text。
- **是否需要更新 baseline？** 不自动；先验证、人工 Review，再经明确授权处理。
- **是否改变财务数据？** 不改变。
- **执行完如何证明正确？** 静态策略测试、最终 DOM typography audit、App/site/
  standalone/render regression 和代表性双语视觉检查共同证明。

方案编写时未进行独立子代理 Reader 测试。实施阶段已分别完成 App /
font manifest、render evidence 传播和全 dataset annotation 三轨独立审计，
并由最终 DOM 门禁和统一验证矩阵收口。

## 14. 实施记录（2026-07-11）

本计划已落地为长期 owner 规则和自动门禁：

- App Chrome / View / View number CSS token 已建立，Chart.js 字体只通过
  `chartTheme()` 读取 View token。
- Sankey 的标题、金额、数值说明和 Tooltip 已按 Noto Sans / Roboto
  角色收敛；`meta.logoSvg` 自动获得 brand role。
- annotation 在 renderer seam 默认规范为产品文本；74 个 dataset 文件中
  真正的 Logo / wordmark / 品牌插图已补最小显式 brand wrapper。
- 共享 font manifest 已统一 development freshness test、render harness、site 和
  standalone 的 14 个 face；G3 已扩展为加载、产品字体与品牌豁免三部分。
- `typographyAudit/v1` 已进入 `verify:d3`、`record:fidelity`、render
  regression、site / standalone 验证和 Build closeout 证据消费。

本次未运行或改写 canonical baseline。已通过 179 个单测、App browser
smoke、production site build / browser verification 与静态 SSOT / i18n / manifest
门禁。`verify:dataset-file-metadata` 仍被开始实施前已存在的并行新 dataset
元数据阻断；standalone browser verification 在构建通过后受当前 sandbox
Chromium IPC / 授权额度限制，全量双语 render regression 也保留给下一个
可运行浏览器的环境复验。
