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
      key: 'pinterest-q3-fy25',
      company: 'Pinterest',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/pinterest-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1049,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'us_canada', label: 'US & Canada', value: 786, notes: ['+9% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 193, notes: ['+41% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 70, notes: ['+67% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 212 },
        operatingExpenses: {
          total: 778,
          items: [
            { id: 'rnd', label: 'R&D', value: 371, notes: ['35% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 297, notes: ['28% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 110, notes: ['11% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 34,
        items: [
          { id: 'other_29', label: 'Other', value: 29 },
          { id: 'other_5', label: 'Other', value: 5 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 837, notes: ['80% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 58, notes: ['6% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 92, notes: ['9% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { label: '美国和加拿大', notes: ['同比 +9%'] },
              { label: '欧洲', notes: ['同比 +41%'] },
              { label: '世界其他地区', notes: ['同比 +67%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '研发', notes: ['占收入 35%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 28%', '同比 +1 个百分点'] },
                { label: '管理费用', notes: ['占收入 11%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '其他' }, { label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pinterest-q1-fy26',
      company: 'Pinterest',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/pinterest-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1008,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'us_canada', label: 'US & Canada', value: 750, notes: ['+13% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 186, notes: ['+27% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 72, notes: ['+59% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 239 },
        operatingExpenses: {
          total: 849,
          notes: ['R&D, S&M, G&A, and restructuring line items sum to $850M because the source chart rounds to whole millions.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 381, notes: ['38% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 318, notes: ['32% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 104, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 47, notes: ['5% of revenue', '+5pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 769, notes: ['76% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -80, notes: ['(8%) margin', '(4pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -80,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { label: '美国和加拿大', notes: ['同比 +13%'] },
              { label: '欧洲', notes: ['同比 +27%'] },
              { label: '世界其他地区', notes: ['同比 +59%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与营销、管理费用和重组费用明细合计为 8.50 亿美元，因为源图采用取整值。'],
              items: [
                { label: '研发', notes: ['占收入 38%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 32%', '同比 +2 个百分点'] },
                { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 0 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (4 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['源图未显示单独的净利润/净亏损项目。'],
            },
          },
        },
      },
    }
    ,
    {
      key: 'pinterest-q4-fy25',
      company: 'Pinterest',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/pinterest-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1319,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'us_canada', label: 'US & Canada', value: 979, notes: ['+9% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 245, notes: ['+25% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 96, notes: ['+65% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 227 },
        operatingExpenses: {
          total: 791,
          items: [
            { id: 'rnd', label: 'R&D', value: 365, notes: ['28% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 303, notes: ['23% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 123, notes: ['9% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 51 },
      },
      otherIncome: { total: 27, items: [{ id: 'other', label: 'Other', value: 27 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1093, notes: ['83% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 301, notes: ['23% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 277, notes: ['21% margin'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月',
          revenue: { notes: ['同比 +14%'], items: [{ label: '美国和加拿大', notes: ['同比 +9%'] }, { label: '欧洲', notes: ['同比 +25%'] }, { label: '世界其他地区', notes: ['同比 +65%'] }] },
          costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [{ label: '研发', notes: ['占收入 28%', '同比 0 个百分点'] }, { label: '销售与营销', notes: ['占收入 23%', '同比 (1 个百分点)'] }, { label: '管理费用', notes: ['占收入 9%', '同比 0 个百分点'] }] }, tax: { label: '税费' } },
          otherIncome: { items: [{ label: '其他' }] },
          profit: { gross: { label: '毛利润', notes: ['利润率 83%', '同比 0 个百分点'] }, operating: { label: '营业利润', notes: ['利润率 23%', '同比 +0 个百分点'] }, net: { label: '净利润', notes: ['利润率 21%'] } },
        },
      },
    }
  );
})(window);

window.INCOME_STATEMENT_SSOT.records.push({
  "key": "pinterest-q2-fy26",
  "company": "Pinterest",
  "period": "Q2 FY26",
  "periodNote": "Ending Jun. 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/pinterest-q2-fy26.png",
  "roundingTolerance": 1.1,
  "revenue": {
    "total": 1180,
    "notes": [
      "+18% Y/Y"
    ],
    "items": [
      {
        "id": "us_canada",
        "label": "US & Canada",
        "value": 880,
        "notes": [
          "+18% Y/Y"
        ]
      },
      {
        "id": "europe",
        "label": "Europe",
        "value": 213,
        "notes": [
          "+12% Y/Y"
        ]
      },
      {
        "id": "rest_of_world",
        "label": "Rest of the world",
        "value": 87,
        "notes": [
          "+38% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 257
    },
    "operatingExpenses": {
      "total": 978,
      "notes": [
        "Source-rounded expense items total $977M versus the reported $978M total."
      ],
      "items": [
        {
          "id": "rnd",
          "label": "R&D",
          "value": 451,
          "notes": [
            "38% of revenue",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "sm",
          "label": "S&M",
          "value": 374,
          "notes": [
            "32% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 138,
          "notes": [
            "12% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "restructuring",
          "label": "Restructuring",
          "value": 14,
          "notes": [
            "1% of revenue"
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
    "total": 0,
    "items": []
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 923,
      "notes": [
        "78% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -55,
      "notes": [
        "(5%) of revenue",
        "(4pp) Y/Y"
      ]
    },
    "net": {
      "availability": "not-reported",
      "value": null,
      "label": "Net result not reported",
      "notes": [
        "Source ends at operating loss."
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "截至 2026 年 6 月",
      "revenue": {
        "notes": [
          "同比 +18%"
        ],
        "items": [
          {
            "label": "美国和加拿大",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "label": "欧洲",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "label": "世界其他地区",
            "notes": [
              "同比 +38%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "收入成本"
        },
        "operatingExpenses": {
          "notes": [
            "原图费用明细取整后合计 $977M，总额为 $978M。"
          ],
          "items": [
            {
              "label": "研发",
              "notes": [
                "占收入 38%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "销售与营销",
              "notes": [
                "占收入 32%",
                "同比 0 个百分点"
              ]
            },
            {
              "label": "管理费用",
              "notes": [
                "占收入 12%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "label": "重组",
              "notes": [
                "占收入 1%"
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
            "利润率 78%",
            "同比 (1 个百分点)"
          ]
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "占收入 (5%)",
            "同比 (4 个百分点)"
          ]
        },
        "net": {
          "label": "未披露净利润",
          "notes": [
            "源图止于营业亏损。"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "mau",
          "label": "月活跃用户",
          "notes": [
            "同比 +11%"
          ]
        },
        {
          "id": "mau_us_canada",
          "label": "美国和加拿大月活跃用户",
          "notes": [
            "同比 +11%"
          ]
        },
        {
          "id": "mau_europe",
          "label": "欧洲月活跃用户",
          "notes": [
            "同比 +8%"
          ]
        },
        {
          "id": "mau_rest_of_world",
          "label": "世界其他地区月活跃用户",
          "notes": [
            "同比 +15%"
          ]
        },
        {
          "id": "arpu",
          "label": "每用户平均收入",
          "notes": [
            "同比 +7%"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "mau",
      "label": "MAU",
      "value": "640000000",
      "unit": "count",
      "currency": null,
      "literal": "640M",
      "notes": [
        "+11% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "MAU\n640M\n+11% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          34,
          226,
          187,
          168
        ]
      }
    },
    {
      "id": "mau_us_canada",
      "label": "US & Canada MAU",
      "value": "106000000",
      "unit": "count",
      "currency": null,
      "literal": "106M",
      "notes": [
        "+11% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "US & Canada MAU\n106M\n+11% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          530,
          133,
          94
        ]
      }
    },
    {
      "id": "mau_europe",
      "label": "Europe MAU",
      "value": "157000000",
      "unit": "count",
      "currency": null,
      "literal": "157M",
      "notes": [
        "+8% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "Europe MAU\n157M\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          818,
          133,
          94
        ]
      }
    },
    {
      "id": "mau_rest_of_world",
      "label": "Rest of the world MAU",
      "value": "377000000",
      "unit": "count",
      "currency": null,
      "literal": "377M",
      "notes": [
        "+15% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "Rest of the world MAU\n377M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          990,
          133,
          94
        ]
      }
    },
    {
      "id": "arpu",
      "label": "ARPU",
      "value": "0.00186",
      "unit": "K",
      "currency": "USD",
      "literal": "$1.86",
      "notes": [
        "+7% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "ARPU\n$1.86\n+7% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          321,
          1128,
          209,
          151
        ]
      }
    }
  ]
});
