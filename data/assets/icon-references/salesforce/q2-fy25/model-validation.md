# Salesforce Q2 FY25 图标裁切验证

来源：`input/processing/salesforce-q2-fy25.png`（2667 × 1500）。

逐项对照原图与提取器生成的 7 张验证页：Salesforce 云形 Logo、Sales、Service、Slack、Marketing & Commerce、MuleSoft、Tableau。主体均完整，透明背景裁切已排除标签、数值、连线、发布者与相邻图标。Marketing & Commerce 及 Tableau 的邻近文字碎片使用规格中的 excludeBoxes 明确排除，不覆盖图标主体。7 项提取器验证全部通过，运行时 PNG 已压缩。

Adapter 使用原图裁切框的原生坐标和尺寸；取消对应全部矢量图标及 Logo。中英文业务说明略缩小以保留净空。图标资产经过 Codex 模型视觉检查；整个候选仍待操作员人工审阅。
