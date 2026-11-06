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
      key: 'sk-hynix-q2-fy26',
      company: 'SK hynix',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/sk-hynix-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 79.3,
        notes: ['+257% Y/Y'],
        items: [
          { id: 'dram', label: 'DRAM', value: 57.9, notes: ['+238% Y/Y'] },
          { id: 'nand_flash', label: 'NAND Flash', value: 21.4, notes: ['+359% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 13.3 },
        operatingExpenses: {
          total: 5.4,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses', value: 5.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 28.8 },
      },
      otherIncome: {
        total: 62.2,
        items: [
          { id: 'finance_income', label: 'Finance', value: 60.9 },
          { id: 'finance_other', label: 'Finance', value: 1.3 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 66.0, notes: ['83% margin', '(46pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 60.5, notes: ['76% margin', '+35pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 93.9, notes: ['118% margin', '+87pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +257%'],
            items: [
              { id: 'dram', label: 'DRAM', notes: ['同比 +238%'] },
              { id: 'nand_flash', label: 'NAND 闪存', notes: ['同比 +359%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '营业费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'finance_income', label: '财务收益' },
              { id: 'finance_other', label: '财务收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 83%', '同比下降 46 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 76%', '同比 +35 个百分点'] },
            net: { label: '净利润', notes: ['利润率 118%', '同比 +87 个百分点'] },
          },
        },
      },
    }
  );
  ssot.records.push({
  "key": "sk-hynix-q3-fy26",
  "company": "SK hynix",
  "period": "Q3 FY26",
  "periodNote": "",
  "currency": "KRW",
  "unit": "T",
  "decimals": 1,
  "sourceImage": "input/processed/sk-hynix-q3-fy26.png",
  "roundingTolerance": 0.2,
  "revenue": {
    "total": 104.6,
    "notes": [
      "+328% Y/Y"
    ],
    "items": [
      {
        "id": "dram",
        "label": "DRAM",
        "value": 78.5,
        "notes": [
          "+311% Y/Y"
        ]
      },
      {
        "id": "nand_flash",
        "label": "NAND Flash",
        "value": 25.1,
        "notes": [
          "+413% Y/Y"
        ]
      },
      {
        "id": "other_revenue",
        "label": "Other",
        "value": 1.0,
        "notes": [
          "+114% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 15.0
    },
    "operatingExpenses": {
      "total": 6.3,
      "items": [
        {
          "id": "operating_expenses",
          "label": "Operating expenses",
          "value": 6.3
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 10.9
    }
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 32.6,
    "items": [
      {
        "id": "other_expense",
        "label": "Other",
        "value": 21.0
      },
      {
        "id": "finance",
        "label": "Finance",
        "value": 11.6
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 89.7,
      "notes": [
        "86% margin",
        "(38pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 83.3,
      "notes": [
        "80% margin",
        "+33pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 39.8,
      "notes": [
        "38% margin",
        "(14pp) Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第三季度",
      "revenue": {
        "notes": [
          "同比 +328%"
        ],
        "items": [
          {
            "id": "dram",
            "label": "DRAM",
            "notes": [
              "同比 +311%"
            ]
          },
          {
            "id": "nand_flash",
            "label": "NAND 闪存",
            "notes": [
              "同比 +413%"
            ]
          },
          {
            "id": "other_revenue",
            "label": "其他",
            "notes": [
              "同比 +114%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "销售成本"
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "operating_expenses",
              "label": "营业费用"
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
            "label": "其他费用"
          },
          {
            "id": "finance",
            "label": "财务费用"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "利润率 86%",
            "同比下降 38 个百分点"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 80%",
            "同比 +33 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 38%",
            "同比下降 14 个百分点"
          ]
        }
      }
    }
  }
});
})(window);
