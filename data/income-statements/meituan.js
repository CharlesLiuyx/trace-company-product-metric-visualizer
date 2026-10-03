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
      key: 'meituan-q4-fy25',
      company: 'Meituan',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meituan-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 92.1,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'delivery', label: 'Delivery services', value: 23.6, notes: ['(10%) Y/Y'] },
          { id: 'commission', label: 'Commission', value: 25.7, notes: ['+3% Y/Y'] },
          { id: 'online_marketing', label: 'Online marketing services', value: 13.3, notes: ['+3% Y/Y'] },
          { id: 'other_services_sales', label: 'Other services & sales', value: 29.5, notes: ['+21% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 68.0 },
        operatingExpenses: {
          total: 42.8,
          items: [
            { id: 'sm', label: 'Selling & marketing', value: 31.7, notes: ['34% of revenue', '+15pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 7.0, notes: ['8% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 3.7, notes: ['4% of revenue', '+1pp Y/Y'] },
            { id: 'provisions', label: 'Provisions', value: 0.4, notes: ['0% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 2.6,
        items: [{ id: 'other_income', label: 'Other', value: 2.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart shows no tax or separate net line; its bottom line is
      // the operating loss. "Other" (RMB 2.6B) is other operating income that
      // feeds operating expenses. `operating` is gross profit minus operating
      // expenses (-18.7B, before other income; no matching Sankey node, so no
      // id); `net` is the after-other-income operating loss (-16.1B) drawn as
      // the operating_loss node.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 24.1, notes: ['26% margin', '(12pp) Y/Y'] },
        operating: { label: 'Operating loss', value: -18.7 },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -16.1,
          notes: ['(17%) margin', '(25pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'delivery', label: '配送服务', notes: ['同比 (10%)'] },
              { id: 'commission', label: '佣金', notes: ['同比 +3%'] },
              { id: 'online_marketing', label: '在线营销服务', notes: ['同比 +3%'] },
              { id: 'other_services_sales', label: '其他服务与销售', notes: ['同比 +21%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 34%', '同比 +15 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 +2 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%', '同比 +1 个百分点'] },
                { id: 'provisions', label: '拨备', notes: ['占收入 0%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 26%', '同比 (12 个百分点)'] },
            operating: { label: '营业亏损' },
            net: { label: '营业亏损', notes: ['利润率 (17%)', '同比 (25 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'meituan-q1-fy26',
      company: 'Meituan',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meituan-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 91.0,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'delivery', label: 'Delivery services', value: 25.0, notes: ['(3%) Y/Y'] },
          { id: 'merchant', label: 'Merchant services', value: 38.1, notes: ['+3% Y/Y'] },
          { id: 'product_sales', label: 'Product sales', value: 21.0, notes: ['+47% Y/Y'] },
          { id: 'other_seg', label: 'Other', value: 7.0, notes: ['(25%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 65.1 },
        operatingExpenses: {
          total: 33.4,
          items: [
            { id: 'sm', label: 'Selling & marketing', value: 23.0, notes: ['25% of revenue', '+8pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 7.0, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 2.9, notes: ['3% of revenue', '+0pp Y/Y'] },
            { id: 'provisions', label: 'Provisions', value: 0.5, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other_income', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart shows no tax or separate net line; its bottom line is
      // the operating loss. "Other" (RMB 1.0B) is other operating income that
      // feeds operating expenses. `operating` is gross profit minus operating
      // expenses (-7.4B, before other income; no matching Sankey node, so no
      // id); `net` is the after-other-income operating loss (-6.5B) drawn as
      // the operating_loss node.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 26.0, notes: ['29% margin', '(9pp) Y/Y'] },
        operating: { label: 'Operating loss', value: -7.4 },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -6.5,
          notes: ['(7%) margin', '+19pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'delivery', label: '配送服务', notes: ['同比 (3%)'] },
              { id: 'merchant', label: '商家服务', notes: ['同比 +3%'] },
              { id: 'product_sales', label: '商品销售', notes: ['同比 +47%'] },
              { id: 'other_seg', label: '其他', notes: ['同比 (25%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 25%', '同比 +8 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%', '同比 +0 个百分点'] },
                { id: 'provisions', label: '拨备', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 29%', '同比 (9 个百分点)'] },
            operating: { label: '营业亏损' },
            net: { label: '营业亏损', notes: ['利润率 (7%)', '同比 +19 个百分点'] },
          },
        },
      },
    }
  );
})(window);

(function(window){window.INCOME_STATEMENT_SSOT.records.push({
  "key": "meituan-q2-fy26",
  "company": "Meituan",
  "period": "Q2 FY26",
  "periodNote": "",
  "currency": "RMB",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processed/meituan-q2-fy26.png",
  "roundingTolerance": 0.2,
  "revenue": {
    "total": 104.6,
    "notes": [
      "+14% Y/Y"
    ],
    "items": [
      {
        "id": "delivery",
        "label": [
          "Delivery",
          "services"
        ],
        "value": 27.8,
        "notes": [
          "+18% Y/Y"
        ]
      },
      {
        "id": "merchant",
        "label": [
          "Marchant",
          "services"
        ],
        "value": 42.4,
        "notes": [
          "+7% Y/Y"
        ]
      },
      {
        "id": "product_sales",
        "label": [
          "Product sales"
        ],
        "value": 26.7,
        "notes": [
          "+49% Y/Y"
        ]
      },
      {
        "id": "other_seg",
        "label": [
          "Other"
        ],
        "value": 7.8,
        "notes": [
          "(24%) Y/Y"
        ]
      }
    ],
    "breakdowns": [
      {
        "id": "business_segments",
        "label": "Revenue by business segment",
        "total": 104.6,
        "items": [
          {
            "id": "core_local_commerce",
            "label": "Core Local Commerce",
            "value": 71.5,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "new_initiatives",
            "label": "New initiatives",
            "value": 33.1,
            "notes": [
              "+25% Y/Y"
            ]
          }
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 69.5,
      "notes": []
    },
    "operatingExpenses": {
      "total": 35.6,
      "items": [
        {
          "id": "sm",
          "label": [
            "S&M"
          ],
          "value": 24.7,
          "notes": [
            "24% of revenue",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": [
            "R&D"
          ],
          "value": 7.7,
          "notes": [
            "7% of revenue",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": [
            "G&A"
          ],
          "value": 3.2,
          "notes": [
            "3% of revenue",
            "+0pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 0.1,
      "notes": []
    }
  },
  "operatingOtherIncome": {
    "total": 3.2,
    "items": [
      {
        "id": "other_income",
        "label": [
          "Other"
        ],
        "value": 3.2,
        "notes": []
      }
    ]
  },
  "otherIncome": {
    "total": 0,
    "items": []
  },
  "otherExpenses": {
    "total": 0.4,
    "items": [
      {
        "id": "other_expense",
        "label": [
          "Other"
        ],
        "value": 0.4,
        "notes": []
      }
    ]
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": [
        "Gross profit"
      ],
      "value": 35.1,
      "notes": [
        "34% margin",
        "+1pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 2.7,
      "notes": [
        "3% margin",
        "+2pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": [
        "Net profit"
      ],
      "value": 2.2,
      "notes": [
        "2% margin",
        "+2pp Y/Y"
      ]
    }
  },
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "revenue": {
        "notes": [
          "同比 +14%"
        ],
        "items": [
          {
            "id": "delivery",
            "label": [
              "配送",
              "服务"
            ],
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "merchant",
            "label": [
              "商家",
              "服务"
            ],
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "product_sales",
            "label": [
              "商品销售"
            ],
            "notes": [
              "同比 +49%"
            ]
          },
          {
            "id": "other_seg",
            "label": [
              "其他"
            ],
            "notes": [
              "同比 (24%)"
            ]
          }
        ],
        "breakdowns": [
          {
            "id": "business_segments",
            "label": "按业务分部划分的收入",
            "items": [
              {
                "id": "core_local_commerce",
                "label": "核心本地商业",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "new_initiatives",
                "label": "新业务",
                "notes": [
                  "同比 +25%"
                ]
              }
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "sm",
              "label": [
                "销售与营销"
              ],
              "notes": [
                "占收入 24%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "rnd",
              "label": [
                "研发"
              ],
              "notes": [
                "占收入 7%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "ga",
              "label": [
                "一般及行政"
              ],
              "notes": [
                "占收入 3%",
                "同比 +0 个百分点"
              ]
            }
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        }
      },
      "operatingOtherIncome": {
        "items": [
          {
            "id": "other_income",
            "label": [
              "其他"
            ]
          }
        ]
      },
      "otherExpenses": {
        "items": [
          {
            "id": "other_expense",
            "label": [
              "其他"
            ]
          }
        ]
      },
      "profit": {
        "gross": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "毛利率 34%",
            "同比 +1 个百分点"
          ]
        },
        "operating": {
          "label": [
            "营业",
            "利润"
          ],
          "notes": [
            "利润率 3%",
            "同比 +2 个百分点"
          ]
        },
        "net": {
          "label": [
            "净利润"
          ],
          "notes": [
            "利润率 2%",
            "同比 +2 个百分点"
          ]
        }
      }
    }
  }
});})(window);
