/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/chewy-q1-fy26.js. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'chewy-q1-fy26',
    company: 'Chewy',
    period: 'Q1 FY26',
    periodNote: '13 weeks ended May 3, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/chewy-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.4,
      notes: ['+8% Y/Y', 'Reported net sales were $3.357B; the source chart rounds to $3.4B.'],
      items: [
        { id: 'consumables', label: 'Consumables', value: 2.3, notes: ['+5% Y/Y'] },
        { id: 'hardgoods', label: 'Hardgoods', value: 0.4, notes: ['+15% Y/Y'] },
        { id: 'other', label: 'Other', value: 0.7, notes: ['+12% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.3, notes: ['Reported cost of goods sold was $2.346B.'] },
      operatingExpenses: {
        total: 0.9,
        items: [
          { id: 'ga', label: 'G&A', value: 0.7, notes: ['20% of revenue', '(1pp) Y/Y', 'Reported selling, general and administrative expense was $0.677B.'] },
          { id: 'advertising_marketing', label: 'Advertising & Marketing', value: 0.2, notes: ['6% of revenue', '(0pp) Y/Y', 'Reported advertising and marketing expense was $0.206B.'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.037, notes: ['Reported income tax provision was $36.5M; source chart rounds to ($37M).'] },
    },
    otherIncome: {
      total: 0.003,
      items: [{ id: 'interest', label: 'Interest', value: 0.003, notes: ['Reported interest and other income, net was $2.8M; source chart rounds to $3M.'] }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.0, notes: ['30% margin', '+0pp Y/Y', 'Reported gross profit was $1.011B.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.1, notes: ['4% margin', '+1pp Y/Y', 'Reported income from operations was $128.5M. The source graphic visibly prints $0.1M, which conflicts with its own margin and is retained by the View adapter for source fidelity.'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['3% margin', '+1pp Y/Y', 'Reported net income was $94.8M.'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 5 月 3 日的 13 周',
        revenue: {
          notes: ['同比 +8%', '报告净销售额为 $3.357B；来源图四舍五入为 $3.4B。'],
          items: [
            { id: 'consumables', label: '消耗品', notes: ['同比 +5%'] },
            { id: 'hardgoods', label: '耐用品', notes: ['同比 +15%'] },
            { id: 'other', label: '其他', notes: ['同比 +12%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['报告销售成本为 $2.346B。'] },
          operatingExpenses: {
            items: [
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 20%', '同比 (1 个百分点)', '报告销售、一般及行政费用为 $0.677B。'] },
              { id: 'advertising_marketing', label: '广告与营销', notes: ['占收入 6%', '同比 (0 个百分点)', '报告广告与营销费用为 $0.206B。'] },
            ],
          },
          tax: { label: '税费', notes: ['报告所得税费用为 $36.5M；来源图四舍五入为 ($37M)。'] },
        },
        otherIncome: {
          items: [{ id: 'interest', label: '利息', notes: ['报告利息及其他收入净额为 $2.8M；来源图四舍五入为 $3M。'] }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 30%', '同比 +0 个百分点', '报告毛利润为 $1.011B。'] },
          operating: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点', '报告营业利润为 $128.5M；来源图可见地写为 $0.1M，与其利润率不一致，View Adapter 按来源保留。'] },
          net: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点', '报告净利润为 $94.8M。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'chewy-q4-fy25',
    company: 'Chewy',
    period: 'Q4 FY25',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'B',
    decimals: 4,
    sourceImage: 'input/processed/chewy-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.3,
      notes: ['+1% Y/Y'],
      items: [
        { id: 'consumables', label: 'Consumables', value: 2.3, notes: ['(1%) Y/Y'] },
        { id: 'hardgoods', label: 'Hardgoods', value: 0.4, notes: ['+9% Y/Y'] },
        { id: 'other', label: 'Other', value: 0.6, notes: ['(0%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_goods_sold', label: 'Cost of goods sold', value: 2.3 },
      operatingExpenses: {
        total: 0.9,
        items: [
          { id: 'ga', label: 'G&A', value: 0.7, notes: ['21% of revenue', '(1pp) Y/Y'] },
          { id: 'advertising_marketing', label: 'Advertising & Marketing', value: 0.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.003 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.0004,
      items: [{ id: 'interest', label: 'Interest', value: 0.0004 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.0, notes: ['29% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.043, notes: ['1% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.039, notes: ['2% margin', '+2pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +1%'],
          items: [
            { id: 'consumables', label: '消耗品', notes: ['同比 (1%)'] },
            { id: 'hardgoods', label: '耐用品', notes: ['同比 +9%'] },
            { id: 'other', label: '其他', notes: ['同比 (0%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: {
            items: [
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 21%', '同比 (1 个百分点)'] },
              { id: 'advertising_marketing', label: '广告与营销', notes: ['占收入 7%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: {
          items: [{ id: 'interest', label: '利息' }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 2%', '同比 +2 个百分点'] },
        },
      },
    },
  });
  ssot.records.push({
  "key": "chewy-q2-fy26",
  "company": "Chewy",
  "period": "Q2 FY26",
  "periodNote": "Ending Aug. 2026",
  "currency": "$",
  "unit": "B",
  "decimals": 3,
  "sourceImage": "input/processed/chewy-q2-fy26.png",
  "roundingTolerance": 0.05,
  "revenue": {
    "total": 3.3,
    "notes": [
      "+7% Y/Y"
    ],
    "items": [
      {
        "id": "consumables",
        "label": "Consumables",
        "value": 2.2,
        "notes": [
          "+4% Y/Y"
        ]
      },
      {
        "id": "hardgoods",
        "label": "Hardgoods",
        "value": 0.4,
        "notes": [
          "+14% Y/Y"
        ]
      },
      {
        "id": "other",
        "label": "Other",
        "value": 0.7,
        "notes": [
          "+15% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.3
    },
    "operatingExpenses": {
      "total": 0.9,
      "items": [
        {
          "id": "ga",
          "label": "G&A",
          "value": 0.7,
          "notes": [
            "21% of revenue",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "advertising_marketing",
          "label": "Advertising & Marketing",
          "value": 0.2,
          "notes": [
            "6% of revenue",
            "(0pp) Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 0.031
    }
  },
  "otherIncome": {
    "total": 0.02,
    "items": [
      {
        "id": "interest",
        "label": "Interest",
        "value": 0.02
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.0,
      "notes": [
        "30% margin",
        "+0pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "notes": [
        "3% margin",
        "+1pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.1,
      "notes": [
        "2% margin",
        "+0pp Y/Y"
      ]
    }
  },
  "otherExpenses": {
    "total": 0,
    "items": []
  },
  "operatingMetrics": [
    {
      "id": "active_customers",
      "label": "Active customers",
      "value": "22000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "22M",
      "quote": "Active customers\n22M (+4% Y/Y)",
      "notes": [
        "+4% Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          48,
          1186,
          332,
          164
        ]
      }
    },
    {
      "id": "net_sales_per_customer",
      "label": "Net sale per customer",
      "value": "0.602",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$602",
      "quote": "Net sale per customer\n$602 (+2% Y/Y)",
      "notes": [
        "+2% Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          393,
          1186,
          380,
          164
        ]
      }
    },
    {
      "id": "autoship_sales",
      "label": "Autoship sales",
      "value": "85",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "85%",
      "quote": "Autoship sales\n85% (+2pp Y/Y)",
      "notes": [
        "+2pp Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          785,
          1186,
          306,
          164
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "截至 2026 年 8 月",
      "revenue": {
        "notes": [
          "同比 +7%"
        ],
        "items": [
          {
            "id": "consumables",
            "label": "消耗品",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "hardgoods",
            "label": "耐用品",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "other",
            "label": "其他",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "id": "cost_of_revenue",
          "label": "收入成本"
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "ga",
              "label": "一般及行政费用",
              "notes": [
                "占收入 21%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "advertising_marketing",
              "label": "广告与营销",
              "notes": [
                "占收入 6%",
                "同比 (0 个百分点)"
              ]
            }
          ]
        },
        "tax": {
          "id": "tax",
          "label": "税费"
        }
      },
      "otherIncome": {
        "items": [
          {
            "id": "interest",
            "label": "利息"
          }
        ]
      },
      "profit": {
        "gross": {
          "id": "gross_profit",
          "label": "毛利润",
          "notes": [
            "利润率 30%",
            "同比 +0 个百分点"
          ]
        },
        "operating": {
          "id": "operating_profit",
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 +1 个百分点"
          ]
        },
        "net": {
          "id": "net_profit",
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 +0 个百分点"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "active_customers",
          "label": "活跃客户",
          "notes": [
            "同比 +4%"
          ]
        },
        {
          "id": "net_sales_per_customer",
          "label": "每位客户净销售额",
          "notes": [
            "同比 +2%"
          ]
        },
        {
          "id": "autoship_sales",
          "label": "Autoship 销售额",
          "notes": [
            "同比 +2 个百分点"
          ]
        }
      ]
    }
  }
});
})(window);
