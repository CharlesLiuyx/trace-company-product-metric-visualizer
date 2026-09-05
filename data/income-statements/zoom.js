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
      key: 'zoom-q1-fy27',
      company: 'Zoom',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zoom-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1239,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'enterprise', label: 'Enterprise', value: 756, notes: ['+7% Y/Y'] },
          { id: 'online', label: 'Online', value: 483, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 274 },
        operatingExpenses: {
          total: 654,
          items: [
            { id: 'sm', label: 'S&M', value: 330, notes: ['27% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 228, notes: ['18% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 96, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 106 },
      },
      otherIncome: {
        total: 221,
        items: [
          { id: 'investments', label: 'Investments', value: 152 },
          { id: 'other', label: 'Other', value: 69 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 965, notes: ['78% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 310, notes: ['25% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 426, notes: ['34% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'enterprise', label: '企业', notes: ['同比 +7%'] },
              { id: 'online', label: '线上', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
          },
        },
      },
    },
    {
      key: 'zoom-q4-fy26',
      company: 'Zoom',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zoom-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1247,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'enterprise', label: 'Enterprise', value: 757, notes: ['+7% Y/Y'] },
          { id: 'online', label: 'Online', value: 490, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 296 },
        operatingExpenses: {
          total: 701,
          items: [
            { id: 'sm', label: 'S&M', value: 360, notes: ['29% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 223, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 119, notes: ['10% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 190 },
      },
      otherIncome: {
        total: 613,
        items: [
          { id: 'investments', label: 'Investments', value: 532 },
          { id: 'other', label: 'Other', value: 81 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 951, notes: ['76% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 250, notes: ['20% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 674, notes: ['54% margin', '+23pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'enterprise', label: '企业', notes: ['同比 +7%'] },
              { id: 'online', label: '线上', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 29%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 +23 个百分点'] },
          },
        },
      },
    },
    {
      key: 'zoom-q3-fy26',
      company: 'Zoom',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zoom-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1230,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'enterprise', label: 'Enterprise', value: 741, notes: ['+6% Y/Y'] },
          { id: 'online', label: 'Online', value: 488, notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 272 },
        operatingExpenses: {
          total: 648,
          items: [
            { id: 'sm', label: 'S&M', value: 343, notes: ['28% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 210, notes: ['17% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 95, notes: ['8% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 182 },
      },
      otherIncome: {
        total: 484,
        items: [
          { id: 'investments', label: 'Investments', value: 406 },
          { id: 'other', label: 'Other', value: 78 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 958, notes: ['78% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 310, notes: ['25% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 613, notes: ['50% margin', '+32pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'enterprise', label: '企业', notes: ['同比 +6%'] },
              { id: 'online', label: '线上', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 17%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 50%', '同比 +32 个百分点'] },
          },
        },
      },
    }
  );
})(window);

/* Source contribution: zoom-q2-fy27. */
(function(global){global.INCOME_STATEMENT_SSOT.records.push({
  "key": "zoom-q2-fy27",
  "company": "Zoom",
  "period": "Q2 FY27",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/zoom-q2-fy27.png",
  "roundingTolerance": 1.5,
  "notes": [
    "Amounts and captions are transcribed from the source infographic; displayed totals may differ from sums because each amount is independently rounded.",
    "RPO",
    "$4.5B",
    "+14% Y/Y",
    "DBNE",
    "99%",
    "TTM",
    "Customers > $100K",
    "+8% Y/Y to 4,625",
    "Montly Churn",
    "2.9%",
    "Flat Y/Y",
    "Q2 FY27",
    "Ending July 2026",
    "RPO = Remaining Performance Obligation",
    "DBNE = Dollar Based Net Expansion"
  ],
  "revenue": {
    "total": 1277,
    "notes": [
      "+5% Y/Y"
    ],
    "items": [
      {
        "id": "enterprise",
        "label": "Enterprise",
        "value": 788,
        "notes": [
          "+8% Y/Y"
        ]
      },
      {
        "id": "online",
        "label": "Online",
        "value": 490,
        "notes": [
          "+1% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 292,
      "notes": []
    },
    "operatingExpenses": {
      "total": 671,
      "items": [
        {
          "id": "sm",
          "label": "S&M",
          "value": 331,
          "notes": [
            "26% of revenue",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "rd",
          "label": "R&D",
          "value": 243,
          "notes": [
            "19% of revenue",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 98,
          "notes": [
            "8% of revenue",
            "+1pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 453,
      "notes": []
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 986,
      "notes": [
        "77% margin",
        "(0pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 314,
      "notes": [
        "25% margin",
        "(2pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1542,
      "notes": [
        "121% margin",
        "+91pp Y/Y"
      ]
    }
  },
  "otherIncome": {
    "total": 1680,
    "items": [
      {
        "id": "investments",
        "label": "Investments",
        "value": 1614,
        "notes": []
      },
      {
        "id": "other",
        "label": "Other",
        "value": 66,
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
      "period": "2027 财年第二季度",
      "notes": [
        "Amounts和captions are transcribed from the source infographic；displayed totals may differ from sums because each amount is independently rounded.",
        "RPO",
        "$4.5B",
        "同比 +14%",
        "DBNE",
        "99%",
        "过去十二个月",
        "年收入超过 $100K 的客户",
        "同比 +8%，至 4,625",
        "月流失率",
        "2.9%",
        "同比持平",
        "2027 财年第二季度",
        "截至 2026 年 7 月",
        "RPO = 剩余履约义务",
        "DBNE = 金额净扩张率"
      ],
      "revenue": {
        "notes": [
          "同比 +5%"
        ],
        "items": [
          {
            "label": "企业",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "label": "在线",
            "notes": [
              "同比 +1%"
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
                "占收入 26%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "label": "研发",
              "notes": [
                "占收入 19%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "管理费用",
              "notes": [
                "占收入 8%",
                "同比 +1 个百分点"
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
            "利润率 77%",
            "同比 (0 个百分点)"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 25%",
            "同比 (2 个百分点)"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 121%",
            "同比 +91 个百分点"
          ]
        }
      },
      "otherIncome": {
        "items": [
          {
            "label": "投资收益",
            "notes": []
          },
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
