# Global-e Q4 FY25 — reconciled Interface Matrix

- Reference: `input/processed/global-e-q4-fy25.png` (2667×1500).
- Measurement: RGB background `[242,242,242]`; max-channel distance threshold `12`; stable probe band 1–3 px outside each measured node edge; raw antialiasing halos are retained and clipped to the node bbox for topology scoring.
- Reference inventory: 16 visible `(node, side)` interfaces. Every normalized reference union is a single continuous interval contained by its measured node bbox.
- Round-02 candidate coverage exactly matches the 16-ID reference inventory; there are no reference-only or candidate-only interfaces.
- `audit.summary`: `expectedInterfaces=16`, `auditedInterfaces=16`, `passedInterfaces=16`, `failedInterfaces=0`, `documentedExceptions=0`, `pendingInterfaces=0`, `notScoredInterfaces=0`.
- Authoritative `matrix.summary`: `expectedInterfaces=16`, `auditedInterfaces=16`, `passedInterfaces=16`, `failedInterfaces=0`, `documentedExceptions=0`, `pendingInterfaces=0`, `notScoredInterfaces=0`.
- The two multi-link Revenue faces have antialiased internal color transitions in the source, but their binary occupancy union is continuous. Candidate per-link boundaries were traced from the source identities while preserving that continuous union.
- All candidate endpoints land on the node edge, all vertical-face tangents are horizontal within 0.5 px, and normalized raster boundary deltas are 0 px.

| node / side | reference node bbox | raw → normalized reference union | reference per-link intervals (top/bottom/center/width) | candidate / delta / endpoint | result |
| --- | --- | --- | --- | --- | --- |
| `service_fees/right` | `389,520,460,705` | `519..708` → `520..705`, continuous, within | `service_fees→revenue: 520/705/612.5/185` | `520..705`; Δ `0/0`; endpoint/tangent pass | pass |
| `fulfillment/right` | `389,938,460,1139` | `936..1141` → `938..1139`, continuous, within | `fulfillment→revenue: 938/1139/1038.5/201` | `938..1139`; Δ `0/0`; endpoint/tangent pass | pass |
| `revenue/left` | `856,640,926,1029` | `639..1032` → `640..1029`, continuous, within | `service_fees→revenue 640/826/733/186`; `fulfillment→revenue 826/1029/927.5/203` | union `640..1029`; per-link transition traced; Δ `0/0`; endpoint/tangent pass | pass |
| `revenue/right` | `856,640,926,1029` | `639..1032` → `640..1029`, continuous, within | `revenue→gross_profit 640/820/730/180`; `revenue→cost_of_revenue 820/1029/924.5/209` | union `640..1029`; per-link transition traced; Δ `0/0`; endpoint/tangent pass | pass |
| `gross_profit/left` | `1323,520,1394,697` | `518..699` → `520..697`, continuous, within | `revenue→gross_profit: 520/697/608.5/177` | `520..697`; Δ `0/0`; endpoint/tangent pass | pass |
| `gross_profit/right` | `1323,520,1394,697` | `518..699` → `520..697`, continuous, within | `→operating_profit 520/592/556/72`; `→operating_expenses 592/697/644.5/105` | union `520..697`; per-link matches; Δ `0/0`; endpoint/tangent pass | pass |
| `cost_of_revenue/left` | `1323,929,1394,1138` | `927..1140` → `929..1138`, continuous, within | `revenue→cost_of_revenue: 929/1138/1033.5/209` | `929..1138`; Δ `0/0`; endpoint/tangent pass | pass |
| `operating_profit/left` | `1791,413,1861,484` | `410..485` → `413..484`, continuous, within | `gross_profit→operating_profit: 413/484/448.5/71` | `413..484`; Δ `0/0`; endpoint/tangent pass | pass |
| `operating_profit/right` | `1791,413,1861,484` | `410..486` → `413..484`, continuous, within | `→net_profit 413/483/448/70`; `→other 483/484/483.5/1` | union `413..484`; per-link matches; Δ `0/0`; endpoint/tangent pass | pass |
| `operating_expenses/left` | `1791,688,1861,792` | `686..794` → `688..792`, continuous, within | `gross_profit→operating_expenses: 688/792/740/104` | `688..792`; Δ `0/0`; endpoint/tangent pass | pass |
| `operating_expenses/right` | `1791,688,1861,792` | `686..794` → `688..792`, continuous, within | `→sm 688/738/713/50`; `→rnd 738/775/756.5/37`; `→ga 775/792/783.5/17` | union `688..792`; per-link matches; Δ `0/0`; endpoint/tangent pass | pass |
| `net_profit/left` | `2257,304,2328,374` | `302..376` → `304..374`, continuous, within | `operating_profit→net_profit: 304/374/339/70` | `304..374`; Δ `0/0`; endpoint/tangent pass | pass |
| `other/left` | `2257,577,2328,579` | `576..580` → `577..579`, continuous, within | `operating_profit→other: 577/579/578/2` | `577..579`; Δ `0/0`; endpoint/tangent pass | pass |
| `sm/left` | `2257,739,2328,788` | `737..789` → `739..788`, continuous, within | `operating_expenses→sm: 739/788/763.5/49` | `739..788`; Δ `0/0`; endpoint/tangent pass | pass |
| `rnd/left` | `2257,981,2328,1017` | `979..1019` → `981..1017`, continuous, within | `operating_expenses→rnd: 981/1017/999/36` | `981..1017`; Δ `0/0`; endpoint/tangent pass | pass |
| `ga/left` | `2257,1220,2328,1235` | `1218..1237` → `1220..1235`, continuous, within | `operating_expenses→ga: 1220/1235/1227.5/15` | `1220..1235`; Δ `0/0`; endpoint/tangent pass | pass |
