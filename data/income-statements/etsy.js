/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'etsy-q4-fy25',
    company: 'Etsy',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/etsy-q4-fy25.png',
    roundingTolerance: 1.5,
    revenue: {
      total: 882,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'marketplace', label: 'Marketplace', value: 612, notes: ['+1% Y/Y'] },
        { id: 'services', label: 'Services', value: 269, notes: ['+10% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 238 },
      operatingExpenses: {
        total: 515,
        items: [
          { id: 'marketing', label: 'Marketing', value: 306, notes: ['35% of revenue', '+1pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 114, notes: ['13% of revenue', '(0pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 94, notes: ['11% of revenue', '+1pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 26 },
    },
    otherIncome: {
      total: 7,
      items: [{ id: 'other', label: 'Other', value: 7 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 644, notes: ['73% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 129, notes: ['15% margin', '(4pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 111, notes: ['13% margin', '(3pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'marketplace', label: '交易市场', notes: ['同比 +1%'] },
            { id: 'services', label: '服务', notes: ['同比 +10%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'marketing', label: '营销', notes: ['占收入 35%', '同比 +1 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 0 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +1 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 (4 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 (3 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'etsy-q1-fy26',
    company: 'Etsy',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/etsy-q1-fy26.png',
    roundingTolerance: 1.5,
    revenue: {
      total: 631,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'marketplace', label: 'Marketplace', value: 433, notes: ['+1% Y/Y'] },
        { id: 'services', label: 'Services', value: 199, notes: ['+8% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 176 },
      operatingExpenses: {
        total: 336,
        items: [
          { id: 'marketing', label: 'Marketing', value: 174, notes: ['28% of revenue', '(0pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 99, notes: ['16% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 63, notes: ['10% of revenue', '(2pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 25 },
    },
    otherIncome: {
      total: 9,
      items: [{ id: 'other', label: 'Other', value: 9 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 456, notes: ['72% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 120, notes: ['19% margin', '+20pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 105, notes: ['17% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'marketplace', label: '交易市场', notes: ['同比 +1%'] },
            { id: 'services', label: '服务', notes: ['同比 +8%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'marketing', label: '营销', notes: ['占收入 28%', '同比 0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 72%', '同比 0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 +20 个百分点'] },
          net: { label: '净利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);

window.INCOME_STATEMENT_SSOT.records.push({
  "key": "etsy-q2-fy26",
  "company": "Etsy",
  "period": "Q2 FY26",
  "periodNote": "Ending Jun. 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/etsy-q2-fy26.png",
  "roundingTolerance": 1.5,
  "revenue": {
    "total": 668,
    "notes": [
      "+6% Y/Y"
    ],
    "items": [
      {
        "id": "marketplace",
        "label": "Marketplace",
        "value": 456,
        "notes": [
          "+5% Y/Y"
        ]
      },
      {
        "id": "services",
        "label": "Services",
        "value": 212,
        "notes": [
          "+9% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 184
    },
    "operatingExpenses": {
      "total": 359,
      "items": [
        {
          "id": "marketing",
          "label": "Marketing",
          "value": 191,
          "notes": [
            "29% of revenue",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "R&D",
          "value": 101,
          "notes": [
            "15% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 67,
          "notes": [
            "10% of revenue",
            "(2pp) Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 21
    }
  },
  "otherIncome": {
    "total": 10,
    "items": [
      {
        "id": "other",
        "label": "Other",
        "value": 10
      }
    ]
  },
  "otherExpenses": {
    "total": 0,
    "items": []
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 484,
      "notes": [
        "72% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 125,
      "notes": [
        "19% margin",
        "+4pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 114,
      "notes": [
        "17% margin",
        "+10pp Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "截至 2026 年 6 月",
      "revenue": {
        "notes": [
          "同比 +6%"
        ],
        "items": [
          {
            "id": "marketplace",
            "label": "交易市场",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "services",
            "label": "服务",
            "notes": [
              "同比 +9%"
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
              "id": "marketing",
              "label": "营销",
              "notes": [
                "占收入 29%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "rnd",
              "label": "研发",
              "notes": [
                "占收入 15%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "ga",
              "label": "管理费用",
              "notes": [
                "占收入 10%",
                "同比 (2 个百分点)"
              ]
            }
          ]
        },
        "tax": {
          "label": "税费"
        }
      },
      "otherIncome": {
        "items": [
          {
            "id": "other",
            "label": "其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
            "同比 (1 个百分点)"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 19%",
            "同比 +4 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 17%",
            "同比 +10 个百分点"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "gms",
          "label": "GMS",
          "notes": [
            "同比 +8%"
          ]
        },
        {
          "id": "active-sellers",
          "label": "活跃卖家",
          "notes": [
            "同比 +6%"
          ]
        },
        {
          "id": "active-buyers",
          "label": "活跃买家",
          "notes": [
            "同比 (0)%"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "gms",
      "label": "GMS",
      "value": "2.6",
      "unit": "B",
      "currency": "USD",
      "literal": "$2.6B",
      "notes": [
        "+8% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "GMS\n$2.6B\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          79,
          1130,
          163,
          164
        ]
      }
    },
    {
      "id": "active-sellers",
      "label": "Active sellers",
      "value": "5700000",
      "unit": "count",
      "currency": null,
      "literal": "5.7M",
      "notes": [
        "+6% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "Active sellers\n5.7M\n+6% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          250,
          1130,
          334,
          164
        ]
      }
    },
    {
      "id": "active-buyers",
      "label": "Active buyers",
      "value": "87000000",
      "unit": "count",
      "currency": null,
      "literal": "87M",
      "notes": [
        "(0)% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "Active buyers\n87M\n(0)% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          588,
          1130,
          331,
          164
        ]
      }
    }
  ]
});
