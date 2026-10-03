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
