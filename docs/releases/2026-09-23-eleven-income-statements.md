# 2026-09-23：11 份利润表审阅与交付记录

用户在当前任务明确确认 Processing 全部图片人工审阅通过、要求全部更改合入并推送 main，同时要求修复失败 CI。逐项展示 11 张原图清单后，用户再次确认全部归档。Novo Nordisk 随后获明确授权按官方财报纠正金额；展示修正后候选后，用户回复“继续”，执行该候选的验收与封存。

所有 11 个 Build 均已记录人工接受、未来回归基线和新鲜 seal。下表只记录本次本机实际检查；远端 CI 与部署状态以对应 GitHub Actions 运行结果为准。

| 数据集 | 来源对象数 | 最终双语自动检查 | 人工审阅 |
| --- | ---: | --- | --- |
| affirm-q4-fy26 | 67 | en: 19 柱面 / 23 接口；zh: 19 柱面 / 23 接口 | 通过；无人工修改意见 |
| amgen-q2-fy26 | 73 | en: 21 柱面 / 26 接口；zh: 21 柱面 / 26 接口 | 通过；无人工修改意见 |
| eli-lilly-q2-fy26 | 62 | en: 18 柱面 / 22 接口；zh: 18 柱面 / 22 接口 | 通过；无人工修改意见 |
| etsy-q2-fy26 | 48 | en: 13 柱面 / 17 接口；zh: 13 柱面 / 17 接口 | 通过；无人工修改意见 |
| global-e-q2-fy26 | 43 | en: 13 柱面 / 17 接口；zh: 13 柱面 / 17 接口 | 通过；无人工修改意见 |
| kraft-heinz-q2-fy26 | 41 | en: 11 柱面 / 14 接口；zh: 11 柱面 / 14 接口 | 通过；无人工修改意见 |
| mcdonald-s-q2-fy26 | 45 | en: 13 柱面 / 17 接口；zh: 13 柱面 / 17 接口 | 通过；无人工修改意见 |
| merck-q2-fy26 | 56 | en: 16 柱面 / 20 接口；zh: 16 柱面 / 20 接口 | 通过；无人工修改意见 |
| novo-nordisk-q2-fy26 | 63 | en: 17 柱面 / 22 接口；zh: 17 柱面 / 22 接口 | 经授权纠正管理及其他 1.3B → 1.5B |
| rbi-q2-fy26 | 77 | en: 22 柱面 / 30 接口；zh: 22 柱面 / 30 接口 | 通过；无人工修改意见 |
| shopify-q2-fy26 | 40 | en: 17 柱面 / 23 接口；zh: 17 柱面 / 23 接口 | 通过；无人工修改意见 |

## 数值纠正及已知来源口径

- Novo Nordisk：官方 Q2 2026 reported P&L 的管理费用 1,309M DKK，加其他营业支出 234M，合计 1,543M；按原图一位小数显示为 1.5B。Source Coverage 保留原图 `(1.3B)`，使用 user-directed numeric-typo correction，SSOT 中英文说明保留原值、计算和链接。几何仍忠于来源原生柱面。
- 官方依据：https://www.sec.gov/Archives/edgar/data/353278/000035327826000023/caq22026.htm （Q2 2026 PROFIT AND LOSS reported 列；Appendix 1）。
- Shopify：保留原图 +6pp，并保留与官方同口径不符的说明；Other 精度恢复为 $49M。
- RBI：其他营业收入为 $28M，SSOT 为 0.028B；共享 Table/CSV 修复保留利润调整项目、精度与费用符号。
- Kraft Heinz 与 Merck：来源未报告的净利润继续显式标记为未报告。

## 检查与版本绑定

- 公共代码 `pnpm check`：726 项单元测试及聚合检查通过。
- 十份未变数据刷新工具与应用依赖后，对各阶段候选 PNG 与先前已目视审阅图逐字节核对，一致后重记阶段证据。
- Novo Nordisk 完成新鲜 Source 对账与三阶段检查；执行者目视核对英文与中文图，17 个柱面、22 个接口通过。
- 全部 Build 的 finish、stage-baseline、seal 已完成。Git 集成仍执行独立 check、相关图形及 Pages 检查。
- 根 index.html 的 file 入口已实际打开，成功发现 HTTP 工作台；Novo Nordisk 更正候选无页面错误，显示 1.5B。

## 人工介入统计

本批统计单位为数据集。Novo Nordisk 按用户追加授权修改，计入人工介入；其余十份没有人工修改意见。

```text
Human review:
- Total items: 11
- No-intervention items: 10
- Intervention items: 1
- Human zero-intervention rate: 10/11 = 90.9%
- Human intervention rate: 1/11 = 9.1%
```

## 原图归档与审计标识

下列图片已按确认清单从 processing 原名归档至 processed。processed 是被 Git 忽略的本机原图档案；Git 仅提交本批已认领 pending 来源的移除及正式数据。归档清单摘要为 `sha256:bb2cfe5ab771e14e34fe13e454639b32720a15aeccdb28eca011f0749704e982`。

- input/processed/affirm-q4-fy26.png；Build：build-62711a88-73d2-42ad-b164-01b30f364990
  - Source：sha256:3357a10763e741c2d07522750b220dcc43e0145b0afd1c4452760ee75f042bd0
  - Coverage：sha256:8a0e5c825399c3ebf4488d743384bc728fbc4e524b948dc0f9f38464f420335f
  - Review token：sha256:48de7543cfb82cb50121ed68e7f1a552193f0f664aa044f116ad163bf09574ec
- input/processed/amgen-q2-fy26.png；Build：build-e068550f-5e8b-4215-a769-370a03e3cbf6
  - Source：sha256:6ca49da2db792525e6701bad35ed51b9ba4aae3ea69eb877d1a487e4e214fee3
  - Coverage：sha256:f216f2d3e255e6ae6c8761921743bdeb01216a3d2ea0058666bf27e8acb3ef72
  - Review token：sha256:18b777b715288aa0d89ec17c79875e307263726b3d739a8f9c67c0b8e5bd8adc
- input/processed/eli-lilly-q2-fy26.png；Build：build-da0b66d4-4627-4d58-8249-6dbe2c609807
  - Source：sha256:06392d33ad681fb6a2406cf997962164a8de8f5b59256b484ce4e677a3e551a4
  - Coverage：sha256:3ddca1785860910176c97d1ee8da2ed0b73f21e32740aa7e054a177002e5b55a
  - Review token：sha256:c18d45f88726371d02e78a4821ed0ebe09c7f2d696f52049e0743a46dd49c013
- input/processed/etsy-q2-fy26.png；Build：build-530e7e2b-b07e-48b9-9f87-241e9942aef8
  - Source：sha256:533ad90502d50fb3f1a75f2390d05139af402d8c91279b558dabb41115743c6c
  - Coverage：sha256:d0d78f9ecf5b71f6b8d937db6d8b4404447c4ed18435822e923d52df6c2d3075
  - Review token：sha256:773f43ea7782bde5650f7981db409ee69d598100c7ad0217cc31bd73c1bc3d78
- input/processed/global-e-q2-fy26.png；Build：build-11c2d648-7e33-4a27-bd40-1bc477c06815
  - Source：sha256:7f5c0a94ae6b6e59e6a3a221fbecf3f5d7346cb0c21cce1b9906010ccaf7643c
  - Coverage：sha256:16e6147e3a942649f6040231143dd53334ae95a8ab898526223428d6f3b34731
  - Review token：sha256:0ed5ac10f86d3638a086057d9d871397933769e1d5380680abaa2c5ff489dcf9
- input/processed/kraft-heinz-q2-fy26.png；Build：build-9ad0d54c-d50d-4617-b4d4-f1dac8d0759a
  - Source：sha256:2f56ae576842feb52752b23e673e64e4238fa47b9a8efeb052aa1df0c01d6db5
  - Coverage：sha256:7785206e51937980bdc40b485ca51dbd3f948b7124e36aa40ac0502a0ce0e203
  - Review token：sha256:a20567c798b7aec4db61cb450c2ae6c83e35eb9a41f251353cbeaba8f9e6cbcf
- input/processed/mcdonald-s-q2-fy26.png；Build：build-0c7725b1-2f4d-4d30-884f-20c7f2307a62
  - Source：sha256:5537394ddabba6b6c5915d99364170afbb705d8827372372be058e707918d21c
  - Coverage：sha256:d1497abca2e5f40337dafb3e0dd5b13b4a81c39992cf926f1d596b0b0690ff49
  - Review token：sha256:64dbd2ad89555a3107260e1d9d54bcc3f9e25eabc41ddf0b78c5fee5bb6958d3
- input/processed/merck-q2-fy26.png；Build：build-c98384d7-51b1-440e-8cf8-936253c7b2e7
  - Source：sha256:9a475a62f21b6d1996f67ccb8f556f3ee07821466af7733c3a3600bdf9273e79
  - Coverage：sha256:5cad6cac0a66c99fac33e2c550ccf09a3f256b14a34f0f59fd2adaee7e4b1d60
  - Review token：sha256:16345b3e16597f2a7dd7b39a75a547df2ba577174a1fdf411be4ec3b31eb1ed5
- input/processed/novo-nordisk-q2-fy26.png；Build：build-b365ea83-0b7b-45f8-b0ba-e83e8fee3cc4
  - Source：sha256:c6965eab06254949783400c894d2bdb4741801c7334d7f7e38367a40dec54bfe
  - Coverage：sha256:b83109a9bc6c2bda9a30f41b403eff15c35da529507892d4a95abdca9956d4c7
  - Review token：sha256:080fe2408c0b646c0f1e17dc3747bd4fd42b84441cba93fa140e3d02a78e3ac2
- input/processed/rbi-q2-fy26.png；Build：build-564e7e1f-4c38-4d92-b730-7a4280b8f73d
  - Source：sha256:6b7bd650e774acb936a7dffa6374e3dfbc6ef2450212d245bb9df25ec57a390e
  - Coverage：sha256:dfceacfde87bdae7e6b08b200507001a74bf95958eb47c7572d5d55f0a1bd074
  - Review token：sha256:7807828e9d9bc52825661152efc1f7460d60688c023937271c4c4ae62311a075
- input/processed/shopify-q2-fy26.png；Build：build-c4bd64c9-5679-4e41-8926-783221a8c2b1
  - Source：sha256:1640ce7a8231106505f757232df3bdb8043131204353ad37303f17900c47f854
  - Coverage：sha256:b5d0749642f35e3a446dc452c91cf7a8a40c64f71469394b24a0df8e0cd1fea9
  - Review token：sha256:e83b8bca820c6e650d23b80c338eca2529f793a7b75066871450335599428d72

大体积图像证据和草稿是本机暂存。完成所需交付后按项目保留政策清理；上述摘要仅为历史标识，不冒充仍可重验的证据。
