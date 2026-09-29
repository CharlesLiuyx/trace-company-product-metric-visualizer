/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
  "key": "stoneco-q2-fy26",
  "company": "StoneCo",
  "period": "Q2 FY26",
  "periodNote": "Ending Jun. 2026",
  "currency": "R$",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processed/stoneco-q2-fy26.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 3.6,
    "notes": [
      "+3% Y/Y"
    ],
    "items": [
      {
        "id": "transaction_services",
        "label": "Transaction & services",
        "value": 0.4,
        "notes": [
          "(35%) Y/Y"
        ]
      },
      {
        "id": "subscription_rental",
        "label": "Subscription & equipment rental",
        "value": 0.2,
        "notes": [
          "+12% Y/Y"
        ]
      },
      {
        "id": "financial_income",
        "label": "Financial income",
        "value": 2.7,
        "notes": [
          "+11% Y/Y"
        ]
      },
      {
        "id": "other_revenue",
        "label": "Other",
        "value": 0.3,
        "notes": [
          "+16% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "gross_stage_cost",
      "label": "Gross-stage cost (not shown)",
      "value": 0
    },
    "operatingExpenses": {
      "total": 2.9,
      "items": [
        {
          "id": "financial_expense",
          "label": "Financial",
          "value": 1.1,
          "notes": [
            "30% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "cost_of_service",
          "label": "Cost of service",
          "value": 0.9,
          "notes": [
            "26% of revenue",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "selling",
          "label": "Selling",
          "value": 0.5,
          "notes": [
            "15% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "admin",
          "label": "Admin",
          "value": 0.2,
          "notes": [
            "6% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "other_cost",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "3% of revenue",
            "+0pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "notes": []
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
      "label": "Gross profit (not shown)",
      "value": 3.6
    },
    "operating": {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 0.7,
      "notes": [
        "19% margin",
        "(1pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_income",
      "label": "Net income",
      "value": 0.6,
      "notes": [
        "19% margin",
        "(1pp) Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "截至 2026 年 6 月",
      "revenue": {
        "notes": [
          "同比 +3%"
        ],
        "items": [
          {
            "label": "交易与服务",
            "notes": [
              "同比 (35%)"
            ]
          },
          {
            "label": "订阅与设备租赁",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "label": "金融收入",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "label": "其他",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "毛利阶段成本（图中未展示）"
        },
        "operatingExpenses": {
          "items": [
            {
              "label": "财务费用",
              "notes": [
                "占收入 30%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "label": "服务成本",
              "notes": [
                "占收入 26%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "销售费用",
              "notes": [
                "占收入 15%",
                "同比 +0 个百分点"
              ]
            },
            {
              "label": "行政费用",
              "notes": [
                "占收入 6%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "label": "其他",
              "notes": [
                "占收入 3%",
                "同比 +0 个百分点"
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
          "label": "毛利润（图中未展示）"
        },
        "operating": {
          "label": "税前利润",
          "notes": [
            "利润率 19%",
            "同比 (1 个百分点)"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 19%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "msmb_card_tpv",
          "label": "MSMB 卡支付总额",
          "notes": [
            "同比 +4%"
          ]
        },
        {
          "id": "msmb_active_clients",
          "label": "MSMB 活跃客户",
          "notes": [
            "同比 +6%"
          ]
        }
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "msmb_card_tpv",
      "label": "MSMB Card TPV",
      "value": "142.2",
      "unit": "B",
      "currency": "BRL",
      "comparison": "eq",
      "literal": "R$142.2B",
      "basis": "unspecified",
      "notes": [
        "+4% Y/Y"
      ],
      "quote": "MSMB Card TPV\nR$142.2B\n+4% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          40,
          1168,
          379,
          148
        ]
      }
    },
    {
      "id": "msmb_active_clients",
      "label": "MSMB Active Clients",
      "value": "4800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "4.8M",
      "basis": "unspecified",
      "notes": [
        "+6% Y/Y"
      ],
      "quote": "MSMB Active Clients\n4.8M\n+6% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          426,
          1168,
          379,
          148
        ]
      }
    }
  ]
},

    {
      key: 'stoneco-q4-fy25',
      company: 'StoneCo',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'R$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/stoneco-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 3.7,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'transaction_services', label: 'Transaction & services', value: 0.5, notes: ['(32%) Y/Y'] },
          { id: 'subscription_rental', label: 'Subscription & equipment rental', value: 0.2, notes: ['+22% Y/Y'] },
          { id: 'financial_income', label: 'Financial income', value: 2.8, notes: ['+26% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['+67% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'gross_stage_cost', label: 'Gross-stage cost (not shown)', value: 0 },
        operatingExpenses: {
          total: 2.9,
          items: [
            { id: 'financial_expense', label: 'Financial', value: 1.2, notes: ['31% of revenue', '(0pp) Y/Y'] },
            { id: 'cost_of_service', label: 'Cost of service', value: 0.9, notes: ['24% of revenue', '+2pp Y/Y'] },
            { id: 'selling', label: 'Selling', value: 0.6, notes: ['15% of revenue', '+0pp Y/Y'] },
            { id: 'admin', label: 'Admin', value: 0.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'other_cost', label: 'Other', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
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
        gross: { id: 'gross_profit', label: 'Gross profit (not shown)', value: 3.7 },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 0.8, notes: ['21% margin', '(1pp) Y/Y'] },
        net: { id: 'net_income', label: 'Net income', value: 0.7, notes: ['19% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { label: '交易与服务', notes: ['同比 (32%)'] },
              { label: '订阅与设备租赁', notes: ['同比 +22%'] },
              { label: '金融收入', notes: ['同比 +26%'] },
              { label: '其他', notes: ['同比 +67%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '毛利阶段成本（图中未展示）' },
            operatingExpenses: {
              items: [
                { label: '财务费用', notes: ['占收入 31%', '同比 (0 个百分点)'] },
                { label: '服务成本', notes: ['占收入 24%', '同比 +2 个百分点'] },
                { label: '销售费用', notes: ['占收入 15%', '同比 +0 个百分点'] },
                { label: '行政费用', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { label: '其他', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润（图中未展示）' },
            operating: { label: '税前利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
