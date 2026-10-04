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
