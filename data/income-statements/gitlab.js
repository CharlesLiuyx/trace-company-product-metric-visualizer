/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'gitlab-q4-fy26',
    company: 'GitLab',
    period: 'Q4 FY26',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/gitlab-q4-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 260,
      notes: ['+23% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 234, notes: ['+26% Y/Y'] },
        { id: 'license', label: 'License', value: 26, notes: ['+1% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 35 },
      operatingExpenses: {
        total: 231,
        notes: ['S&M, R&D, and G&A sum to the displayed $231M.'],
        items: [
          { id: 'sm', label: 'S&M', value: 113, notes: ['43% of revenue', '(3pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 69, notes: ['26% of revenue', '(3pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 49, notes: ['19% of revenue', '(3pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 225, notes: ['87% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -5, notes: ['(2%) margin', '+7pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -5,
        notes: ['No separate net income or loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第四季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +23%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +26%'] },
            { id: 'license', label: '许可', notes: ['同比 +1%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与市场、研发和管理费用合计为图中显示的 $231M。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 43%', '同比 (3 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (3 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 87%', '同比 (3 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +7 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'gitlab-q1-fy27',
    company: 'GitLab',
    period: 'Q1 FY27',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/gitlab-q1-fy27.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 264,
      notes: ['+23% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 239, notes: ['+23% Y/Y'] },
        { id: 'license', label: 'License', value: 25, notes: ['+24% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 37 },
      operatingExpenses: {
        total: 242,
        notes: ['S&M, R&D, and G&A sum to the displayed $242M.'],
        items: [
          { id: 'sm', label: 'S&M', value: 119, notes: ['45% of revenue', '(5pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 71, notes: ['27% of revenue', '(3pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 52, notes: ['20% of revenue', '(4pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 227, notes: ['86% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -16, notes: ['(6%) margin', '+10pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -16,
        notes: ['No separate net income or loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2027 财年第一季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +23%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +23%'] },
            { id: 'license', label: '许可', notes: ['同比 +24%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与市场、研发和管理费用合计为图中显示的 $242M。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (5 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (3 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 86%', '同比 (3 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +10 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);

(function(global){global.INCOME_STATEMENT_SSOT.records.push({
  "key": "gitlab-q2-fy27",
  "company": "GitLab",
  "period": "Q2 FY27",
  "periodNote": "Ending July 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processing/gitlab-q2-fy27.png",
  "roundingTolerance": 1.1,
  "revenue": {
    "total": 286,
    "notes": [
      "+21% Y/Y"
    ],
    "items": [
      {
        "id": "subscription",
        "label": "Subscription",
        "value": 258,
        "notes": [
          "+21% Y/Y"
        ]
      },
      {
        "id": "license",
        "label": "License",
        "value": 28,
        "notes": [
          "+20% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 46
    },
    "operatingExpenses": {
      "total": 298,
      "notes": [
        "Source whole-million rounding produces a small difference between the component sum and the reported total."
      ],
      "items": [
        {
          "id": "sm",
          "label": "S&M",
          "value": 134,
          "notes": [
            "47% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "R&D",
          "value": 95,
          "notes": [
            "33% of revenue",
            "+3pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 68,
          "notes": [
            "24% of revenue",
            "+5pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "label": "Tax",
      "value": 0
    }
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 0,
    "items": []
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 241,
      "notes": [
        "84% margin",
        "(4pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -57,
      "notes": [
        "(20%) margin",
        "(12pp) Y/Y"
      ]
    },
    "net": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -57,
      "notes": [
        "No separate net income or loss line is shown in the source chart."
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2027 财年第二季度",
      "periodNote": "截至 2026 年 7 月",
      "revenue": {
        "notes": [
          "同比 +21%"
        ],
        "items": [
          {
            "id": "subscription",
            "label": "订阅",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "license",
            "label": "许可",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "收入成本"
        },
        "operatingExpenses": {
          "notes": [],
          "items": [
            {
              "id": "sm",
              "label": "销售与市场",
              "notes": [
                "占收入 47%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "rnd",
              "label": "研发",
              "notes": [
                "占收入 33%",
                "同比 +3 个百分点"
              ]
            },
            {
              "id": "ga",
              "label": "管理费用",
              "notes": [
                "占收入 24%",
                "同比 +5 个百分点"
              ]
            }
          ]
        },
        "tax": {
          "label": "税费"
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "毛利率 84%",
            "同比 (4 个百分点)"
          ]
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "利润率 (20%)",
            "同比 (12 个百分点)"
          ]
        },
        "net": {
          "label": "营业亏损",
          "notes": [
            "来源图未单独显示净利润或净亏损项目。"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "dbnr",
          "label": "DBNR",
          "notes": [
            "环比持平"
          ]
        },
        {
          "id": "customers_5k",
          "label": "客户 > $5K",
          "notes": [
            "同比 +8%"
          ]
        },
        {
          "id": "customers_100k",
          "label": "客户 > $100K",
          "notes": [
            "同比 +17%"
          ]
        },
        {
          "id": "crpo",
          "label": "cRPO",
          "notes": [
            "同比 +20%"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "dbnr",
      "label": "DBNR",
      "value": "117",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "117%",
      "basis": "unspecified",
      "notes": [
        "Flat Q/Q"
      ],
      "quote": "DBNR\n117%\nFlat Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          27,
          1105,
          165,
          164
        ]
      }
    },
    {
      "id": "customers_5k",
      "label": "Customers > $5K",
      "value": "11114",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "11,114",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "Customers > $5K 11,114 (+8% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          201,
          1102,
          561,
          164
        ]
      }
    },
    {
      "id": "customers_100k",
      "label": "Customers > $100K",
      "value": "1571",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,571",
      "basis": "unspecified",
      "notes": [
        "+17% Y/Y"
      ],
      "quote": "Customers > $100K 1,571 (+17% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          201,
          1102,
          561,
          164
        ]
      }
    },
    {
      "id": "crpo",
      "label": "cRPO",
      "value": "745",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$745M",
      "basis": "unspecified",
      "notes": [
        "+20% Y/Y"
      ],
      "quote": "cRPO\n$745M\n+20% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          768,
          1102,
          164,
          164
        ]
      }
    }
  ]
});})(window);