# 2026-09-30：12 份利润表审阅与交付记录

用户确认全部待审阅内容通过，明确要求合入并推送 main，并确认以下 12 张 Processing 图片全部归档。四份草稿同步经营指标解析工具后重新验证，各阶段中英文候选 PNG 与已审阅版本逐字节一致；用户随后明确指示“继续推送”。

全部 12 个 Build 已完成人工接受、基线暂存、最终 seal 和 closeout 检查。远端 CI 与部署状态以 GitHub Actions 的实际运行结果为准。

| 数据集 | Build | 原图归档 |
| --- | --- | --- |
| nyt-q2-fy26 | build-14d71088-da8d-4ac2-afcd-93b0a0f99ade | input/processed/nyt-q2-fy26.png |
| coupang-q2-fy26 | build-29c80d86-8491-4890-8c07-29ae0f15e8c3 | input/processed/coupang-q2-fy26.png |
| dlocal-q2-fy26 | build-6bb3d8fd-39c0-43bc-bed4-18423c89eac9 | input/processed/dlocal-q2-fy26.png |
| peloton-q4-fy26 | build-775d20ec-d21c-4695-a8bd-2de3af290181 | input/processed/peloton-q4-fy26.png |
| sea-q2-fy26 | build-7aa6bf59-31e5-4135-b6b7-9817ce113889 | input/processed/sea-q2-fy26.png |
| health-equity-q2-fy27 | build-a458e90c-5c5b-4e37-89a2-fd02741eb412 | input/processed/health-equity-q2-fy27.png |
| stoneco-q2-fy26 | build-c89c9ed4-9e27-4a4c-b231-0fa4beb7737c | input/processed/stoneco-q2-fy26.png |
| toast-q2-fy26 | build-cca3ff79-8827-4ba1-894f-c1a011d7c093 | input/processed/toast-q2-fy26.png |
| zillow-q2-fy26 | build-cd73e144-c043-4abd-9f83-9a7701d844b6 | input/processed/zillow-q2-fy26.png |
| block-q2-fy26 | build-dd710536-a979-4a8e-b0cf-24d4f6b46ebf | input/processed/block-q2-fy26.png |
| adyen-h1-fy26 | build-f5ffebf7-b696-4e5b-83dd-90c358dece60 | input/processed/adyen-h1-fy26.png |
| nu-q2-fy26 | build-fdd10697-ef20-4ee1-be7f-8f53499fd77a | input/processed/nu-q2-fy26.png |

经营指标支持保留巴西雷亚尔、无倍数后缀的基础币种金额和会计括号负数。共享代码 pnpm check 通过（730 项测试）；四份工具同步复验为 Coupang、Peloton、Zillow、Block。根目录 index.html 已实际打开并进入工作台，无页面错误。

本批当前任务和 Build 反馈记录均未记录人工修改意见，人工介入按对象统计：

```text
Human review:
- Total items: 12
- No-intervention items: 12
- Intervention items: 0
- Human zero-intervention rate: 12/12 = 100.0%
- Human intervention rate: 0/12 = 0.0%
```

归档清单摘要：`sha256:2b954865c0bae8f0917874ccae4bc629421a7782cbd50f824356cec19ac555c7`。原图仅保存在本机 ignored processed 目录；Git 提交数据、运行资产、注册与对应 pending 队列移除。图形证据保留到完成交付，清理后的记录仅为历史摘要。
