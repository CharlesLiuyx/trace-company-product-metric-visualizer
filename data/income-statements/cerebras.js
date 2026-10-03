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
      key: 'cerebras-q1-fy26',
      company: 'Cerebras',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cerebras-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 193,
        notes: [
          '+94% Y/Y',
          'Cerebras reported total revenue of $193.4M; segments sum to $194M with published rounding.',
        ],
        items: [
          { id: 'hardware', label: 'Hardware', value: 111, notes: ['+59% Y/Y', '41% gross margin'] },
          { id: 'cloud_services', label: 'Cloud & Other services', value: 83, notes: ['+178% Y/Y', '49% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 107 },
        operatingExpenses: {
          total: 101,
          items: [
            { id: 'rnd', label: 'R&D', value: 75, notes: ['39% of revenue', '(14pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 15, notes: ['8% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 11, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 86, notes: ['45% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -15, notes: ['(8%) margin', '+21pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -15,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: [
              '同比 +94%',
              'Cerebras 披露总收入为 $193.4M；分部合计为 $194M（含发布方四舍五入）。',
            ],
            items: [
              { id: 'hardware', label: '硬件', notes: ['同比 +59%', '毛利率 41%'] },
              { id: 'cloud_services', label: '云与其他服务', notes: ['同比 +178%', '毛利率 49%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 39%', '同比 (14 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (3 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 +21 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润。'] },
          },
        },
      },
    }
  );

  ssot.records.push({
  "key": "cerebras-q2-fy26",
  "company": "Cerebras",
  "period": "Q2 FY26",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/cerebras-q2-fy26.png",
  "roundingTolerance": 1.1,
  "revenue": {
    "total": 180,
    "notes": [
      "+74% Y/Y",
      "Displayed gross profit and cost of revenue sum to $181M due to source rounding."
    ],
    "items": [
      {
        "id": "hardware",
        "label": "Hardware",
        "value": 54,
        "notes": [
          "(23%) Y/Y",
          "2% gross margin"
        ]
      },
      {
        "id": "cloud_services",
        "label": "Cloud & Other services",
        "value": 126,
        "notes": [
          "+281% Y/Y",
          "20% gross margin"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 155
    },
    "operatingExpenses": {
      "total": 503,
      "items": [
        {
          "id": "sm",
          "label": "S&M",
          "value": 87,
          "notes": [
            "48% of revenue",
            "+31pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 96,
          "notes": [
            "53% of revenue",
            "+43pp Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "R&D",
          "value": 320,
          "notes": [
            "178% of revenue",
            "+119pp Y/Y"
          ]
        }
      ]
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 26,
      "notes": [
        "14% margin",
        "(17pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -477,
      "notes": [
        "(265%) margin",
        "(210pp) Y/Y"
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
      "revenue": {
        "notes": [
          "同比 +74%"
        ],
        "items": [
          {
            "id": "hardware",
            "label": "硬件",
            "notes": [
              "同比 (23%)",
              "毛利率 2%"
            ]
          },
          {
            "id": "cloud_services",
            "label": "云与 其他服务",
            "notes": [
              "同比 +281%",
              "毛利率 20%"
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
              "id": "sm",
              "label": "销售与市场",
              "notes": [
                "占收入 48%",
                "同比 +31 个百分点"
              ]
            },
            {
              "id": "ga",
              "label": "管理费用",
              "notes": [
                "占收入 53%",
                "同比 +43 个百分点"
              ]
            },
            {
              "id": "rnd",
              "label": "研发",
              "notes": [
                "占收入 178%",
                "同比 +119 个百分点"
              ]
            }
          ]
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 14%",
            "同比 (17 个百分点)"
          ]
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "利润率 (265%)",
            "同比 (210 个百分点)"
          ]
        },
        "net": {
          "label": "未报告净利润",
          "notes": [
            "来源图止于营业亏损。"
          ]
        }
      }
    }
  }
});
})(window);
