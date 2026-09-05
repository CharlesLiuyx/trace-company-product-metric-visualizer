/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'docebo-q4-fy25',
    company: 'Docebo',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/docebo-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 63.037,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 59.082, notes: ['+9% Y/Y'] },
        { id: 'professional_services', label: 'Professional services', value: 3.955, notes: ['+29% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.74 },
      operatingExpenses: {
        total: 40.957,
        notes: ['Displayed operating-expense components total $40.9M; the $0.1M difference to the reported total is foreign-exchange loss.'],
        items: [
          { id: 'sm', label: 'S&M', value: 18.006, notes: ['29% of revenue', '(4pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 12.113, notes: ['19% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 8.407, notes: ['13% of revenue', '(0pp) Y/Y'] },
          { id: 'sbc', label: 'SBC', value: 1.551, notes: ['2% of revenue', '(0pp) Y/Y'] },
          { id: 'depreciation', label: 'Depreciation', value: 0.798, notes: ['1% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: {
        label: 'Tax',
        value: 0,
        notes: ['The source chart shows a tax benefit rather than a tax expense.'],
      },
    },
    otherIncome: {
      total: 17.694,
      items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 17.694 }],
    },
    otherExpenses: {
      total: 0.181,
      items: [{ id: 'other', label: 'Other', value: 0.181 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 50.297, notes: ['80% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 9.34, notes: ['15% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 26.853 },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +9%'] },
            { id: 'professional_services', label: '专业服务', notes: ['同比 +29%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['图中展示的营业费用组成合计为 $40.9M；与披露总额相差 $0.1M，原因是汇兑损失。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 29%', '同比 (4 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 13%', '同比 (0 个百分点)'] },
              { id: 'sbc', label: '股权激励', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              { id: 'depreciation', label: '折旧', notes: ['占收入 1%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费', notes: ['源图展示税收收益，而非税费。'] },
        },
        otherIncome: { items: [{ id: 'tax_benefit', label: '税收收益' }] },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 +1 个百分点'] },
          net: { label: '净利润' },
        },
      },
    },
  });

  ssot.records.push({
    key: 'docebo-q3-fy25',
    company: 'Docebo',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 1,
    sourceImage: 'input/processed/docebo-q3-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 61.622,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 58.046, notes: ['+10% Y/Y'] },
        { id: 'professional_services', label: 'Professional services', value: 3.576, notes: ['+27% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.132 },
      operatingExpenses: {
        total: 41.442,
        notes: ['Displayed operating-expense components total $41.346M; the $0.096M difference to the reported total is foreign-exchange loss.'],
        items: [
          { id: 'sm', label: 'S&M', value: 17.6, notes: ['29% of revenue', '(3pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 11.905, notes: ['19% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 9.173, notes: ['15% of revenue', '(0pp) Y/Y'] },
          { id: 'sbc', label: 'SBC', value: 1.925, notes: ['3% of revenue', '(0pp) Y/Y'] },
          { id: 'depreciation', label: 'Depreciation', value: 0.743, notes: ['1% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 2.137 },
    },
    otherIncome: {
      total: 0.198,
      items: [{ id: 'other', label: 'Other', value: 0.198 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 49.49, notes: ['80% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 8.048, notes: ['13% margin', '+5pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 6.109, notes: ['10% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +10%'] },
            { id: 'professional_services', label: '专业服务', notes: ['同比 +27%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['图中展示的营业费用组成合计为 $41.346M；与披露总额相差 $0.096M，原因为汇兑损失。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 29%', '同比 (3 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 15%', '同比 (0 个百分点)'] },
              { id: 'sbc', label: '股权激励', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              { id: 'depreciation', label: '折旧', notes: ['占收入 1%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 13%', '同比 +5 个百分点'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);

/* Source contribution: docebo-q2-fy26. */
(function(global){global.INCOME_STATEMENT_SSOT.records.push({
  "key": "docebo-q2-fy26",
  "company": "Docebo",
  "period": "Q2 FY26",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/docebo-q2-fy26.png",
  "roundingTolerance": 1.5,
  "notes": [
    "Amounts and captions are transcribed from the source infographic; displayed totals may differ from sums because each amount is independently rounded.",
    "ARR",
    "$255M",
    "+10% Y/Y",
    "Customers",
    "3,578",
    "(10%) Y/Y",
    "ARR = Annual Recurring Revenue"
  ],
  "revenue": {
    "total": 69,
    "notes": [
      "+13% Y/Y"
    ],
    "items": [
      {
        "id": "subscription",
        "label": "Subscription",
        "value": 64,
        "notes": [
          "+12% Y/Y"
        ]
      },
      {
        "id": "professional_services",
        "label": "Professional services",
        "value": 5,
        "notes": [
          "+31% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 14,
      "notes": []
    },
    "operatingExpenses": {
      "total": 52,
      "items": [
        {
          "id": "sm",
          "label": "S&M",
          "value": 23,
          "notes": [
            "S&M ($23M)",
            "33% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "rd",
          "label": "R&D",
          "value": 13,
          "notes": [
            "R&D ($13M)",
            "19% of revenue",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 9,
          "notes": [
            "G&A ($9M)",
            "14% of revenue",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "sbc",
          "label": "SBC",
          "value": 2,
          "notes": [
            "SBC ($2M)",
            "4% of revenue",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "depreciation",
          "label": "Depreciation",
          "value": 2,
          "notes": [
            "Depreciation ($2M)",
            "3% of revenue",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "fx_loss",
          "label": "Fx loss",
          "value": 2,
          "notes": [
            "Fx loss ($2M)",
            "3% of revenue",
            "+2pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 1,
      "notes": []
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 55,
      "notes": [
        "79% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 3,
      "notes": [
        "4% margin",
        "(3pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2,
      "notes": [
        "3% margin",
        "(2pp) Y/Y"
      ]
    }
  },
  "otherIncome": {
    "total": 1,
    "items": [
      {
        "id": "other",
        "label": "Other",
        "value": 1,
        "notes": []
      }
    ]
  },
  "otherExpenses": {
    "total": 0,
    "items": []
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "notes": [
        "Amounts和captions are transcribed from the source infographic；displayed totals may differ from sums because each amount is independently rounded.",
        "ARR",
        "$255M",
        "同比 +10%",
        "客户",
        "3,578",
        "同比 (10%)",
        "ARR = Annual Recurring 收入"
      ],
      "revenue": {
        "notes": [
          "同比 +13%"
        ],
        "items": [
          {
            "label": "订阅",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "label": "专业服务",
            "notes": [
              "同比 +31%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "收入成本",
          "notes": []
        },
        "operatingExpenses": {
          "items": [
            {
              "label": "销售与市场",
              "notes": [
                "销售与市场 ($23M)",
                "占收入 33%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "label": "研发",
              "notes": [
                "研发 ($13M)",
                "占收入 19%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "label": "管理费用",
              "notes": [
                "管理费用 ($9M)",
                "占收入 14%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "label": "SBC",
              "notes": [
                "股权薪酬 ($2M)",
                "占收入 4%",
                "同比 +1 个百分点"
              ]
            },
            {
              "label": "折旧",
              "notes": [
                "折旧 ($2M)",
                "占收入 3%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "Fx 亏损",
              "notes": [
                "汇兑损失 ($2M)",
                "占收入 3%",
                "同比 +2 个百分点"
              ]
            }
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 (1 个百分点)"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 4%",
            "同比 (3 个百分点)"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "otherIncome": {
        "items": [
          {
            "label": "其他",
            "notes": []
          }
        ]
      },
      "otherExpenses": {
        "items": []
      }
    }
  }
});})(window);
