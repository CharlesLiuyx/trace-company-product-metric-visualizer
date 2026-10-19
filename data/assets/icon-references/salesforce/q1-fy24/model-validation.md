# Salesforce Q1 FY24 source icon validation

Source: `input/processed/salesforce-q1-fy24.png` (2667 × 1500).

2026-10-19 — Codex inspected the source, crop validation sheets and all seven extracted subjects: company cloud logo, Sales, Service, Slack, Marketing & Commerce, MuleSoft and Tableau. Each crop preserves its full icon. The recipe excludes the neighboring Marketing letter and MuleSoft rim from two corners; those masks do not touch the target subjects. No labels, values, node faces, flows, publisher marks or neighboring icons remain. All seven extractor checks pass. Runtime images preserve Source resolution and positions, with edge-connected background removal and bounded PNG compression. English and Chinese label clearance is checked by the Build render gate; two side-label blocks are shifted right by 14 and 10 native pixels for clearance. This crop validation does not accept the Dataset Build; operator review is pending.
