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
      key: 'global-e-q3-fy25',
      company: 'Global-e',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/global-e-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 221,
        notes: ['+25% Y/Y'],
        items: [
          { id: 'service_fees', label: 'Service fees', value: 103, notes: ['+25% Y/Y'] },
          { id: 'fulfillment', label: 'Fulfillment', value: 117, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 121 },
        operatingExpenses: {
          total: 83,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 38, notes: ['17% of revenue', '(18pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 31, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 13, notes: ['6% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 3,
        items: [{ id: 'other', label: 'Other', value: 3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 100, notes: ['45% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17, notes: ['8% margin', '+20pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 13, notes: ['6% margin', '+19pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              { label: '服务费', notes: ['同比 +25%'] },
              { label: '履约服务', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 17%', '同比 (18 个百分点)'] },
                { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +20 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +19 个百分点'] },
          },
        },
      },
    },
    {
      key: 'global-e-q4-fy25',
      company: 'Global-e',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/global-e-q4-fy25.png',
      roundingTolerance: 3.1,
      revenue: {
        total: 337,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'service_fees', label: 'Service fees', value: 161, notes: ['+37% Y/Y'] },
          { id: 'fulfillment', label: 'Fulfillment', value: 176, notes: ['+21% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 182 },
        operatingExpenses: {
          total: 92,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 44, notes: ['13% of revenue', '(14pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 33, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 15, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 3,
        items: [{ id: 'other', label: 'Other', value: 3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 155, notes: ['46% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 63, notes: ['19% margin', '+17pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 62, notes: ['19% margin', '+18pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { label: '服务费', notes: ['同比 +37%'] },
              { label: '履约服务', notes: ['同比 +21%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 13%', '同比 (14 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +17 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +18 个百分点'] },
          },
        },
      },
    },
    {
      key: 'global-e-q1-fy26',
      company: 'Global-e',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/global-e-q1-fy26.png',
      roundingTolerance: 3,
      revenue: {
        total: 252,
        notes: ['+33% Y/Y'],
        items: [
          { id: 'service_fees', label: 'Service fees', value: 121, notes: ['+44% Y/Y'] },
          { id: 'fulfillment', label: 'Fulfillment', value: 131, notes: ['+24% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 137 },
        operatingExpenses: {
          total: 82,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 34, notes: ['14% of revenue', '(20pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 33, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 15, notes: ['6% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 3,
        items: [{ id: 'other', label: 'Other', value: 3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 115, notes: ['46% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 33, notes: ['13% margin', '+23pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 30, notes: ['12% margin', '+21pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              { label: '服务费', notes: ['同比 +44%'] },
              { label: '履约服务', notes: ['同比 +24%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 14%', '同比 (20 个百分点)'] },
                { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +23 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +21 个百分点'] },
          },
        },
      },
    },
{
  "key": "global-e-q2-fy26",
  "company": "Global-e",
  "period": "Q2 FY26",
  "periodNote": "",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/global-e-q2-fy26.png",
  "roundingTolerance": 0.01,
  "revenue": {
    "total": 299,
    "notes": [
      "+39% Y/Y"
    ],
    "items": [
      {
        "id": "service_fees",
        "label": "Service fees",
        "value": 139,
        "notes": [
          "+36% Y/Y"
        ]
      },
      {
        "id": "fulfillment",
        "label": "Fulfillment",
        "value": 160,
        "notes": [
          "+42% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 167
    },
    "operatingExpenses": {
      "total": 87,
      "items": [
        {
          "id": "sm",
          "label": "S&M",
          "value": 36,
          "notes": [
            "12% of revenue",
            "(8pp) Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "R&D",
          "value": 35,
          "notes": [
            "12% of revenue",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 16,
          "notes": [
            "5% of revenue",
            "(0pp) Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 2
    }
  },
  "otherIncome": {
    "total": 5,
    "items": [
      {
        "id": "other",
        "label": "Other",
        "value": 5
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
      "value": 132,
      "notes": [
        "44% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 45,
      "notes": [
        "15% margin",
        "+10pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 48,
      "notes": [
        "16% margin",
        "+11pp Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "",
      "revenue": {
        "notes": [
          "同比 +39%"
        ],
        "items": [
          {
            "label": "服务费",
            "notes": [
              "同比 +36%"
            ]
          },
          {
            "label": "履约服务",
            "notes": [
              "同比 +42%"
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
              "label": "销售与营销",
              "notes": [
                "占收入 12%",
                "同比 (8 个百分点)"
              ]
            },
            {
              "label": "研发",
              "notes": [
                "占收入 12%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "label": "一般及行政",
              "notes": [
                "占收入 5%",
                "同比 (0 个百分点)"
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
            "label": "其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 44%",
            "同比 (1 个百分点)"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 15%",
            "同比 +10 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 16%",
            "同比 +11 个百分点"
          ]
        }
      },
      "operatingMetrics": [
        {
          "label": "GMV",
          "notes": [
            "同比 +44%"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "gmv",
      "label": "GMV",
      "value": "2.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.1B",
      "basis": "unspecified",
      "notes": [
        "+44% Y/Y"
      ],
      "quote": "GMV\n$2.1B\n+44% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          217,
          1144,
          147,
          159
        ]
      }
    }
  ]
}
  );
})(window);
