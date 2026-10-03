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
