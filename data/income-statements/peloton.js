/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'peloton-q1-fy26',
      company: 'Peloton',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/peloton-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 551,
        notes: ['(6%) Y/Y'],
        items: [
          {
            id: 'connected_fitness_products',
            label: 'Connected Fitness Products',
            value: 152,
            notes: ['(5%) Y/Y', '7% gross margin'],
          },
          {
            id: 'subscriptions',
            label: 'Subscriptions',
            value: 398,
            notes: ['(7%) Y/Y', '69% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 267 },
        operatingExpenses: {
          total: 242,
          items: [
            { id: 'ga', label: 'G&A', value: 101, notes: ['18% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 67, notes: ['12% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 62, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 13, notes: ['2% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 27,
        items: [{ id: 'other_expense', label: 'Other', value: 27 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 284, notes: ['52% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 41, notes: ['7% margin', '+5pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 14,
          notes: ['3% margin', '+3pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 (6%)'],
            items: [
              { id: 'connected_fitness_products', label: '互联健身产品', notes: ['同比 (5%)', '毛利率 7%'] },
              { id: 'subscriptions', label: '订阅', notes: ['同比 (7%)', '毛利率 69%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 12%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 2%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'peloton-q2-fy26',
      company: 'Peloton',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/peloton-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 657,
        notes: ['(3%) Y/Y'],
        items: [
          {
            id: 'connected_fitness_products',
            label: 'Connected Fitness Products',
            value: 244,
            notes: ['(4%) Y/Y', '14% gross margin'],
          },
          {
            id: 'subscriptions',
            label: 'Subscriptions',
            value: 413,
            notes: ['(2%) Y/Y', '72% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 325 },
        operatingExpenses: {
          total: 346,
          items: [
            { id: 'sm', label: 'S&M', value: 152, notes: ['23% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 103, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 65, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'other', label: 'Other', value: 26, notes: ['4% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 331, notes: ['50% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -14, notes: ['(2%) margin', '+5pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -14,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              { id: 'connected_fitness_products', label: '互联健身产品', notes: ['同比 (4%)', '毛利率 14%'] },
              { id: 'subscriptions', label: '订阅', notes: ['同比 (2%)', '毛利率 72%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 23%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'other', label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +5 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净亏损项目。'],
            },
          },
        },
      },
    },
    {
      key: 'peloton-q3-fy26',
      company: 'Peloton',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/peloton-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 631,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'connected_fitness_products',
            label: 'Connected Fitness Products',
            value: 203,
            notes: ['(1%) Y/Y', '11% gross margin'],
          },
          {
            id: 'subscriptions',
            label: 'Subscriptions',
            value: 428,
            notes: ['+2% Y/Y', '71% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 304 },
        operatingExpenses: {
          total: 275,
          items: [
            { id: 'ga', label: 'G&A', value: 110, notes: ['17% of revenue', '(7pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 98, notes: ['16% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 59, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 8, notes: ['2% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 27,
        items: [{ id: 'other_expense', label: 'Other', value: 27 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 327, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 52, notes: ['8% margin', '+14pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 26,
          notes: [
            '4% margin',
            '+12pp Y/Y',
            'Operating profit less other expenses sums to $25M; the source chart reports $26M net profit due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'connected_fitness_products', label: '互联健身产品', notes: ['同比 (1%)', '毛利率 11%'] },
              { id: 'subscriptions', label: '订阅', notes: ['同比 +2%', '毛利率 71%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 17%', '同比 (7 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 16%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 2%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +14 个百分点'] },
            net: {
              label: '净利润',
              notes: [
                '利润率 4%',
                '同比 +12 个百分点',
                '营业利润减其他费用按四舍五入后的项目相加为 2500 万美元；来源图显示净利润为 2600 万美元。',
              ],
            },
          },
        },
      },
    }
  );
})(window);

window.INCOME_STATEMENT_SSOT.records.push({
  "key": "peloton-q4-fy26",
  "company": "Peloton",
  "period": "Q4 FY26",
  "periodNote": "Ending June 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/peloton-q4-fy26.png",
  "roundingTolerance": 1.1,
  "revenue": {
    "total": 608,
    "notes": [
      "+0% Y/Y"
    ],
    "items": [
      {
        "id": "connected_fitness_products",
        "label": "Connected Fitness Products",
        "value": 171,
        "notes": [
          "(14%) Y/Y",
          "13% gross margin"
        ]
      },
      {
        "id": "subscriptions",
        "label": "Subscriptions",
        "value": 437,
        "notes": [
          "+7% Y/Y",
          "74% gross margin"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 263
    },
    "operatingExpenses": {
      "total": 263,
      "items": [
        {
          "id": "ga",
          "label": "G&A",
          "value": 116,
          "notes": [
            "19% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "sm",
          "label": "S&M",
          "value": 84,
          "notes": [
            "14% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "R&D",
          "value": 57,
          "notes": [
            "9% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "other_opex",
          "label": "Other",
          "value": 7,
          "notes": [
            "1% of revenue",
            "(3pp) Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 0
    }
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 20,
    "items": [
      {
        "id": "other_expense",
        "label": "Other",
        "value": 20
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 344,
      "notes": [
        "57% margin",
        "+3pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 81,
      "notes": [
        "13% margin",
        "+8pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 62,
      "notes": [
        "10% margin",
        "+7pp Y/Y",
        "Source rounded values: $81M operating profit less $20M other expenses gives $61M; reported net profit is $62M. Revenue $608M less $263M cost gives $345M; reported gross profit is $344M."
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第四季度",
      "periodNote": "截至 2026 年 6 月",
      "revenue": {
        "notes": [
          "同比 +0%"
        ],
        "items": [
          {
            "id": "connected_fitness_products",
            "label": "互联健身产品",
            "notes": [
              "同比 (14%)",
              "毛利率 13%"
            ]
          },
          {
            "id": "subscriptions",
            "label": "订阅",
            "notes": [
              "同比 +7%",
              "毛利率 74%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "收入成本"
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "ga",
              "label": "管理费用",
              "notes": [
                "占收入 19%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "sm",
              "label": "销售与营销",
              "notes": [
                "占收入 14%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "rnd",
              "label": "研发",
              "notes": [
                "占收入 9%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "other_opex",
              "label": "其他",
              "notes": [
                "占收入 1%",
                "同比 (3 个百分点)"
              ]
            }
          ]
        },
        "tax": {
          "label": "税费"
        }
      },
      "otherExpenses": {
        "items": [
          {
            "id": "other_expense",
            "label": "其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 57%",
            "同比 +3 个百分点"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 13%",
            "同比 +8 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 +7 个百分点"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "members",
          "label": "会员数",
          "notes": [
            "同比 (8%)"
          ]
        },
        {
          "id": "connected-subscriptions",
          "label": "订阅",
          "notes": [
            "同比 (9%)"
          ]
        },
        {
          "id": "app-subscriptions",
          "label": "App 订阅",
          "notes": [
            "同比 (9%)"
          ]
        },
        {
          "id": "net-monthly-churn",
          "label": "月度净流失率",
          "notes": [
            "同比 (40 个基点)"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "members",
      "label": "Members",
      "value": "5500000",
      "unit": "count",
      "literal": "5.5M",
      "comparison": "eq",
      "currency": null,
      "basis": "unspecified",
      "notes": [
        "(8%) Y/Y"
      ],
      "quote": "Members 5.5M (8%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          21,
          1160,
          240,
          166
        ]
      }
    },
    {
      "id": "connected-subscriptions",
      "label": "Subscriptions",
      "value": "2600000",
      "unit": "count",
      "literal": "2.6M",
      "comparison": "eq",
      "currency": null,
      "basis": "unspecified",
      "notes": [
        "(9%) Y/Y"
      ],
      "quote": "Subscriptions 2.6M (9%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          272,
          1195,
          519,
          54
        ]
      }
    },
    {
      "id": "app-subscriptions",
      "label": "App Subscriptions",
      "value": "500000",
      "unit": "count",
      "literal": "0.5M",
      "comparison": "eq",
      "currency": null,
      "basis": "unspecified",
      "notes": [
        "(9%) Y/Y"
      ],
      "quote": "App Subscriptions 0.5M (9%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          272,
          1250,
          519,
          53
        ]
      }
    },
    {
      "id": "net-monthly-churn",
      "label": "Net Monthly Churn",
      "value": "2.2",
      "unit": "%",
      "literal": "2.2%",
      "comparison": "eq",
      "currency": null,
      "basis": "unspecified",
      "notes": [
        "(40bps) Y/Y"
      ],
      "quote": "Net Monthly Churn 2.2% (40bps) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          802,
          1160,
          413,
          169
        ]
      }
    }
  ]
});
