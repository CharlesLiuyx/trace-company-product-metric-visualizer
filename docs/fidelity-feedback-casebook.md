# 保真反馈案例登记簿

本文件是 Git 跟踪的保真缺陷登记簿：只记录用户反馈过、并因此落地了机器门槛或回归测试的
缺陷。登记协议见 [fidelity-loop-rules.md](fidelity-loop-rules.md) §4：修复反馈后，若在
catalog 新增或扩展了门槛并补了测试，就在下表追加一行；没有落地机器防线的反馈不登记。
本表不定义规则，只用规则 ID 指向生成目录。

案例 ID 从 `CB-043` 起顺延，永不复用。`CB-001`–`CB-042` 的旧案例只保留在本次重置之前的
Git 历史中。

| 案例 | 日期与数据集 | 现象 | 根因 | 落地的门槛或测试 |
| --- | --- | --- | --- | --- |
| CB-043 | 2026-10-03 · instacart-q2-fy26 | logo 字样与 Gross profit 标签交叠 | 品牌 SVG 字样过宽，且未声明 annotation 净空检查 | logo 组缩至 88%，中英文草稿均声明 `data-annotation-clearance`，启用 A6；`tests/layout-audit.test.mjs` 用原候选 bbox 验证旧布局失败、缩放后通过 |
| CB-044 | 2026-10-03 · lenovo-q1-fy27 | Operating profit、金额与说明出现双重影 | 路由指标自动 label 与交互 annotation 同文交叠 | 移除中英文重复 annotation；A10 检查同一指标跨层同文交叠，`tests/render-harness-audit.test.mjs` 覆盖重复文本拒绝 |
| CB-045 | 2026-10-03 · spacex-q2-fy26 | SpaceX 标志右缘与 Gross profit 标签交叠 | 未配对的位图标志没有启用 annotation 净空检查 | 标志保持中心等比缩至 75%；位图 `clearance: true` 启用 A6，`tests/layout-audit.test.mjs` 覆盖旧布局拒绝与缩放后通过 |
| CB-046 | 2026-10-03 · lenovo-q1-fy27 | 营业利润横向柱消失，两侧连线之间留白 | 有柱面的指标被建模为不绘制柱面的路由点 | 改为真实 node，来源对象绑定 node 并声明原图 1px 短柱；B15 回归测试验证缺失或透明柱面拒绝、绿色横柱通过 |
| CB-047 | 2026-10-03 · dell-q2-fy27 | Other $0.2B 只有文字与细连线，没有蓝色横柱 | 收入构成 Other 被绑定到 nonNodeMetric 路由，绕过柱面期望 | 恢复真实短 node；T22 拒绝收入构成 Other 的非节点绑定，`tests/source-objects.test.mjs` 覆盖旧路由拒绝与短柱声明通过；B15 验证实际柱面 |
| CB-048 | 2026-10-03 · wealthfront-q2-fy27 | 紫色卡片内 Cash Management、Investment Advisory 文字消失 | annotation 卡片背景后于 label 层绘制，覆盖白色文字 | 卡片启用 A6，文字移至背景之后的交互 annotation；`tests/layout-audit.test.mjs` 验证旧跨层文字被拒绝、同层卡片文字通过 |
| CB-049 | 2026-10-03 · ferrari-q4-fy24 | Finance 标注 Hover 没有 Link 百分比 | 独立 annotation 指标缺少语义连接两端，悬停回退到没有连接的指标上下文 | 中英文补齐 Finance → Net profit 和引导线锚点；A10 拒绝带引导线的 annotation-only 指标缺失或无效的连接两端，`tests/render-harness-audit.test.mjs` 覆盖拒绝与通过 |
| CB-050 | 2026-10-03 · pfizer-q4-fy24 | Pretax loss 标注和引导线 Hover 没有 Link 百分比 | 独立亏损指标缺少连接两端，且细引导线位于交互组之外 | 中英文补齐 Pretax loss → Operating expenses、引导线锚点，并将细线纳入交互组；A10 同时识别组内和紧邻前置的未闭合引导线，复用连接两端检查和回归测试 |
| CB-051 | 2026-10-03 · spotify-q4-fy24 | Interest 出现两次且 Hover 无 Link 百分比 | 路由点自动标签与 annotation 重复，标注缺少连接两端且引导线在交互组外 | 关闭路由点自动标签、中英文补齐 Interest → Net profit 并纳入引导线；A10 检查独立引导指标连接，新增路由指标跨层同文重复检查，回归测试覆盖不交叠时也拒绝重复 |
| CB-052 | 2026-10-04 · walmart-q2-fy26，同批 walmart-q3-fy23、walmart-q1-fy24、walmart-q3-fy25 | Sam’s Club 标识压住营业利润率文字 | 品牌组未声明净空属性，已有交叠诊断未触发硬门槛 | 调整中英文标识位置，Q2 FY26 标识等比缩小；A6 自动纳入品牌 SVG 组，`tests/layout-audit.test.mjs` 验证未声明净空的原布局拒绝、修复布局通过 |
| CB-053 | 2026-10-15 · paypal-q3-fy25、spotify-q2-fy24、spotify-q3-fy23，同批 nintendo-q3-fy24、mastercard-q2-fy23 | Other、Tax benefit、Financial 等营业外金额没有横柱、无法 Hover、Hover 无 Link 百分比；PayPal 另出现错位的 $0.0B | 营业外收益金额被绑定到 nonNodeMetric `flow` 路由，只画连线不画柱面，引擎为路由自动生成金额标签 | 改为真实短 node 与 link；T22 在 prepare 对账时拒绝任何利润表金额绑定 `flow` 表示的 nonNodeMetric，`tests/source-objects.test.mjs` 覆盖 flow/缺省表示拒绝、annotation 与 node 通过 |
| CB-054 | 2026-10-18 · ups-q2-fy23、ups-q2-fy24、ups-q3-fy23 | Other $0.1B 引导线 Hover 没有正确显示 Link 占比：Net profit 悬停不出现 Other 占比，或 Other 占比出现在 Operating profit 上方 | Q2 FY23 未声明 `data-link-anchor`，节点悬停丢弃无锚点条目；Q2 FY24、Q3 FY23 的锚点写在缩放 group 的局部坐标，renderer 按根坐标放置 | 中英文锚点改到引导线上；A10 要求带引导线的 annotation 声明锚点且距渲染引导线 `<=40px`（根坐标），`tests/render-harness-audit.test.mjs` 覆盖缺失、441px 偏离拒绝与 0–40px 通过 |
| CB-055 | 2026-10-18 · fedex-q2-fy23、fedex-q3-fy23、ferrari-h1-fy24、ferrari-q2-fy25，同批 gm-q2-fy24、ford-q3-fy24、ford-q2-fy25、boeing-q2-fy25、pfizer-q2-fy24、ups-q1-fy23、ups-q2-fy23、ups-q3-fy23、ups-q2-fy24、ups-q2-fy25 | Other、Investments 引导线 Hover 没有自己的 Link Tooltip，Operating expenses 悬停不含 Investments 占比；Finance 柱子消失。操作员规则：小金额不要表示为注释，是正常的 Node 数据的一部分 | 小金额绑定 nonNodeMetric `annotation` 加带 `data-link-numerator` 的引导线：只在引导线 bbox 上可悬停，不参与节点两侧的 Link 占比，也没有柱面 | 全部改为真实短 node 与 link（引导线形状用自定义 curve，3px 可见柱面）；T22 在 prepare 对账时拒绝任何利润表金额以声明 link 两端的 `annotation` 表示，`tests/source-objects.test.mjs` 覆盖根与 locale 引导线拒绝、无 link 两端的说明注释通过 |
| CB-056 | 2026-10-18 · ford-q2-fy24（已发布的 ford-q1-fy25 同样） | Hover Net profit 时 Operating profit → Net profit 的 Link 没有 Tooltip | Adapter 在两个金额 node 之间的利润流上设 `showTooltip: false`，误当成纯视觉路由桥 | 去掉该设置；T22 在 prepare 对账时拒绝两端都映射 Source 金额 node 的 link 关闭占比，`tests/source-objects.test.mjs` 覆盖金额间 link 拒绝、通往非金额桥接点通过 |
| CB-057 | 2026-10-18 · hermes-fy23，同批 hermes-h1-fy23、hermes-h1-fy25、gm-q4-fy23、gm-q2-fy23、fedex-q4-fy25；已发布 airbnb、mastercard、paypal、starbucks 等 18 个数据集 | Hover 显示 1433.3% | link `value` 抄成目标节点总值（Other → Net profit 写 4.3，而 Other 只有 0.3）；旧端点比公式不读 link 值，多输入新规则暴露出来 | 改为实际流量；`verify:ssot` 经 `scripts/lib/link-amounts.mjs` 拒绝 link 超过源节点接收量或目标节点传出量一个显示单位以上，`tests/link-amounts.test.mjs` 覆盖抄总值、亏损节点、汇总节点吞吐与舍入容差 |
| CB-058 | 2026-10-28 · crowdstrike-q2-fy25（已发布的 starbucks-q4-fy25、chevron-fy25、lam-research-q4-fy26 同样） | CrowdStrike 字标压住 Gross profit 标签 | 手绘 `logoSvg` 未声明 `logoX`，renderer 把它居中到 hub 上方；`g.sankey-logo` 挂在根 SVG 上，不在 A6 的 annotation 选择器内，所有门槛全绿 | 新增 A11：Logo 与 label/title/period 的 bbox 相交时，按空白、仅 Logo、仅文本三层截图比较墨迹，交叠像素 >0 失败；已发布目录 327 对 em-box 接触零误报，命中 3 个真实压字的数据集；`tests/render-harness-audit.test.mjs` 覆盖墨迹计数、压字拒绝与仅 em-box 接触通过 |
| CB-059 | 2026-10-28 · lululemon-q4-fy24（同批 okta-q2-fy24） | Amortization 的横向柱子消失；Cost of revenue 柱子变窄 | Adapter 把 value node 宽度写成 16（Okta 31.3），列宽 72.93；B15 只查柱面高度与可见性 | 恢复列宽；新增 B17：Build-bound run 中已绘制 value node 的 `faceWidth` 不得低于 value node 中位宽度的 90%，短柱同样适用、没有豁免声明；`tests/render-harness-audit.test.mjs` 覆盖两例拒绝、5px 列间测量差与非 value 桥接点通过 |
