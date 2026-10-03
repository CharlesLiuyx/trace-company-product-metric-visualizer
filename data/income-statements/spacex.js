/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
  "key": "spacex-q2-fy26",
  "company": "SpaceX",
  "period": "Q2 FY26",
  "periodNote": "",
  "currency": "$",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processing/spacex-q2-fy26.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 7.8,
    "notes": [
      "+92% Y/Y"
    ],
    "items": [
      {
        "id": "space",
        "label": "Space",
        "value": 0.9,
        "notes": [
          "+29% Y/Y",
          "(56%) operating margin",
          "(7pp) Y/Y"
        ]
      },
      {
        "id": "connectivity",
        "label": "Connectivity",
        "value": 4.3,
        "notes": [
          "+66% Y/Y",
          "39% operating margin",
          "+3pp Y/Y"
        ]
      },
      {
        "id": "ai",
        "label": "AI",
        "value": 2.6,
        "notes": [
          "+247% Y/Y",
          "(49%) operating margin",
          "+158pp Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 3.5
    },
    "operatingExpenses": {
      "total": 4.5,
      "notes": [
        "Reported rounded components total $4.4B versus the displayed $4.5B operating expenses."
      ],
      "items": [
        {
          "id": "rnd",
          "label": "R&D",
          "value": 3.5,
          "notes": [
            "45% of revenue",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "sga",
          "label": "SG&A",
          "value": 0.9,
          "notes": [
            "12% of revenue",
            "(3pp) Y/Y"
          ]
        }
      ]
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
      "value": 4.3,
      "notes": [
        "55% margin",
        "+11pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.2,
      "notes": [
        "(2%) margin",
        "+22pp Y/Y"
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
  "operatingMetrics": [
    {
      "id": "starlink_subscribers",
      "label": "Starlink Subscribers",
      "value": "12000000",
      "unit": "count",
      "currency": null,
      "literal": "12M",
      "comparison": "eq",
      "quote": "Starlink Subscribers 12M (+100% Y/Y)",
      "basis": "unspecified",
      "notes": [
        "+100% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          1776,
          1180,
          438,
          163
        ]
      }
    },
    {
      "id": "starlink_arpu",
      "label": "Starlink ARPU",
      "value": "0.066",
      "unit": "K",
      "currency": "USD",
      "literal": "$66",
      "comparison": "eq",
      "quote": "Starlink ARPU $66 (-22% Y/Y)",
      "basis": "unspecified",
      "notes": [
        "-22% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          1776,
          1180,
          438,
          163
        ]
      }
    },
    {
      "id": "space_launches",
      "label": "Space Launches",
      "value": "38",
      "unit": "count",
      "currency": null,
      "literal": "38",
      "comparison": "eq",
      "quote": "Space Launches 38 (-26% Y/Y)",
      "basis": "unspecified",
      "notes": [
        "-26% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          2224,
          1180,
          378,
          163
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "revenue": {
        "notes": [
          "同比 +92%"
        ],
        "items": [
          {
            "id": "space",
            "label": "航天",
            "notes": [
              "同比 +29%",
              "营业利润率 (56%)",
              "同比 (7 个百分点)"
            ]
          },
          {
            "id": "connectivity",
            "label": "连接服务",
            "notes": [
              "同比 +66%",
              "营业利润率 39%",
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "ai",
            "label": "AI",
            "notes": [
              "同比 +247%",
              "营业利润率 (49%)",
              "同比 +158 个百分点"
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
              "id": "rnd",
              "label": "研发 (R&D)",
              "notes": [
                "占收入 45%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "id": "sga",
              "label": "销售及行政 (SG&A)",
              "notes": [
                "占收入 12%",
                "同比 (3 个百分点)"
              ]
            }
          ]
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 55%",
            "同比 +11 个百分点"
          ]
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "利润率 (2%)",
            "同比 +22 个百分点"
          ]
        },
        "net": {
          "label": "未披露净利润",
          "notes": [
            "来源图止于营业亏损。"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "starlink_subscribers",
          "label": "Starlink 订阅用户",
          "notes": [
            "同比 +100%"
          ]
        },
        {
          "id": "starlink_arpu",
          "label": "Starlink 每用户平均收入 (ARPU)",
          "notes": [
            "同比 -22%"
          ]
        },
        {
          "id": "space_launches",
          "label": "航天发射次数",
          "notes": [
            "同比 -26%"
          ]
        }
      ]
    }
  }
},

    {
      key: 'spacex-fy25',
      company: 'SpaceX',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/spacex-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.7,
        notes: ['+33% Y/Y'],
        items: [
          { id: 'space', label: 'Space', value: 4.1, notes: ['+8% Y/Y', '67% gross margin', '(16%) operating margin'] },
          {
            id: 'connectivity',
            label: 'Connectivity',
            value: 11.4,
            notes: ['+50% Y/Y', '48% gross margin', '39% operating margin'],
          },
          { id: 'ai', label: 'AI', value: 3.2, notes: ['+22% Y/Y', '32% gross margin', '(198%) operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 9.5 },
        operatingExpenses: {
          total: 11.8,
          notes: ['Source chart reports operating expense breakdown rounded to $11.8B total.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 8.6, notes: ['46% of revenue', '+22pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 2.6, notes: ['14% of revenue', '+1pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.5, notes: ['3% of revenue', '+1pp Y/Y'] },
            { id: 'impairment', label: 'Impairment', value: 0.038, notes: ['0% of revenue', '(1pp) Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.2, notes: ['49% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -2.6, notes: ['(14%) margin', '(17pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -2.6,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              { id: 'space', label: '航天', notes: ['同比 +8%', '毛利率 67%', '营业利润率 (16%)'] },
              { id: 'connectivity', label: '连接服务', notes: ['同比 +50%', '毛利率 48%', '营业利润率 39%'] },
              { id: 'ai', label: 'AI', notes: ['同比 +22%', '毛利率 32%', '营业利润率 (198%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将运营费用明细四舍五入列示为 $11.8B 合计。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 46%', '同比 +22 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 +1 个百分点'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 3%', '同比 +1 个百分点'] },
                { id: 'impairment', label: '减值', notes: ['占收入 0%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +6 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (14%)', '同比 (17 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    }
  );
})(window);
