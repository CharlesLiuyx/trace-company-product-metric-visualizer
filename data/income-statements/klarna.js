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
      key: 'klarna-q3-fy25',
      company: 'Klarna',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klarna-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 903,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'transaction_revenue', label: 'Transaction revenue', value: 634, notes: ['+24% Y/Y'] },
          { id: 'interest', label: 'Interest', value: 269, notes: ['+55% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction margin costs',
          value: 623,
          notes: ['Source chart presents these costs as the bridge from revenue to transaction margin dollars.'],
          items: [
            { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 235 },
            { id: 'processing_servicing_costs', label: 'Processing and servicing costs', value: 208 },
            { id: 'funding_costs', label: 'Funding costs', value: 180 },
          ],
        },
        operatingExpenses: {
          total: 364,
          items: [
            { id: 'tech_product_development', label: 'Tech & product development', value: 97 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 85 },
            { id: 'customer_service_operations', label: 'Customer service & operations', value: 50 },
            { id: 'general_administrative', label: 'General & administrative', value: 63 },
            { id: 'da_impairment', label: 'D&A and impairment', value: 69 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'transaction_margin', label: 'Transaction margin dollars', value: 281, notes: ['(6%) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -83, notes: ['(5%) margin', '(4pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -83, notes: ['No separate net income line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月的季度',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'transaction_revenue', label: '交易收入', notes: ['同比 +24%'] },
              { id: 'interest', label: '利息', notes: ['同比 +55%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易毛利成本',
              notes: ['源图将这些成本列为从收入到交易毛利额的桥接项目。'],
              items: [
                { id: 'provision_credit_losses', label: '信用损失准备金' },
                { id: 'processing_servicing_costs', label: '处理和服务成本' },
                { id: 'funding_costs', label: '融资成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'tech_product_development', label: '技术与产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'customer_service_operations', label: '客服与运营' },
                { id: 'general_administrative', label: '一般及行政' },
                { id: 'da_impairment', label: '折旧、摊销及减值' },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          profit: {
            gross: { label: '交易毛利额', notes: ['同比 (6%)'] },
            operating: { label: '营业亏损', notes: ['利润率 (5%)', '同比 (4 个百分点)'] },
            net: { label: '营业亏损', notes: ['源图未单独显示净利润项目。'] },
          },
        },
      },
    },
    {
      key: 'klarna-q4-fy25',
      company: 'Klarna',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klarna-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1082,
        notes: ['+38% Y/Y'],
        items: [
          { id: 'transaction_revenue', label: 'Transaction revenue', value: 743, notes: ['+24% Y/Y'] },
          { id: 'gain_on_sale_consumer_receivables', label: 'Gain on sale of consumer receivables', value: 73, notes: ['NM'] },
          { id: 'interest', label: 'Interest', value: 267, notes: ['+47% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction margin costs',
          value: 710,
          items: [
            { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 250 },
            { id: 'processing_servicing_costs', label: 'Processing and servicing costs', value: 250 },
            { id: 'funding_costs', label: 'Funding costs', value: 210 },
          ],
        },
        operatingExpenses: {
          total: 384,
          items: [
            { id: 'tech_product_development', label: 'Tech & product development', value: 102 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 106 },
            { id: 'customer_service_operations', label: 'Customer service & operations', value: 51 },
            { id: 'general_administrative', label: 'General & administrative', value: 66 },
            { id: 'da_impairment', label: 'D&A and impairment', value: 59 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'transaction_margin', label: 'Transaction margin dollars', value: 372, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -11, notes: ['(1%) margin', '+12pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -11, notes: ['No separate net income line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月的季度',
          revenue: {
            notes: ['同比 +38%'],
            items: [
              { id: 'transaction_revenue', label: '交易收入', notes: ['同比 +24%'] },
              { id: 'gain_on_sale_consumer_receivables', label: '出售消费者应收账款收益', notes: ['无意义可比数'] },
              { id: 'interest', label: '利息', notes: ['同比 +47%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易毛利成本',
              items: [
                { id: 'provision_credit_losses', label: '信用损失准备金' },
                { id: 'processing_servicing_costs', label: '处理和服务成本' },
                { id: 'funding_costs', label: '融资成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'tech_product_development', label: '技术与产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'customer_service_operations', label: '客服与运营' },
                { id: 'general_administrative', label: '一般及行政' },
                { id: 'da_impairment', label: '折旧、摊销及减值' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '交易毛利额', notes: ['同比 +17%'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    },
    {
      key: 'klarna-q1-fy26',
      company: 'Klarna',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klarna-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1012,
        notes: ['+44% Y/Y'],
        items: [
          { id: 'transaction_revenue', label: 'Transaction revenue', value: 671, notes: ['+29% Y/Y'] },
          { id: 'interest', label: 'Interest', value: 284, notes: ['+56% Y/Y'] },
          { id: 'consumer_revenue', label: 'Consumer Revenue', value: 57, notes: ['New Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction margin costs',
          value: 623,
          notes: ['Source chart presents these costs as the bridge from revenue to transaction margin dollars.'],
          items: [
            { id: 'processing_servicing_costs', label: 'Processing and servicing costs', value: 266 },
            { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 186 },
            { id: 'funding_costs', label: 'Funding costs', value: 171 },
          ],
        },
        operatingExpenses: {
          total: 372,
          items: [
            { id: 'tech_product_development', label: 'Tech & product development', value: 129 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 105 },
            { id: 'general_administrative', label: 'General & administrative', value: 81 },
            { id: 'customer_service_operations', label: 'Customer service & operations', value: 55 },
            { id: 'other_operating_expense', label: 'Other', value: 2 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 16,
        items: [{ id: 'other', label: 'Other', value: 16 }],
      },
      profit: {
        gross: {
          id: 'transaction_margin',
          label: 'Transaction margin dollars',
          value: 389,
          notes: ['+44% Y/Y'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17, notes: ['1% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1, notes: ['0% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +44%'],
            items: [
              { label: '交易收入', notes: ['同比 +29%'] },
              { label: '利息', notes: ['同比 +56%'] },
              { label: '消费者收入', notes: ['同比新增'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易毛利成本',
              notes: ['源图将这些成本列为从收入到交易毛利额的桥接项目。'],
              items: [
                { label: '处理和服务成本' },
                { label: '信用损失准备金' },
                { label: '融资成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { label: '技术与产品开发' },
                { label: '销售与营销' },
                { label: '一般及行政' },
                { label: '客服与运营' },
                { label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '交易毛利额', notes: ['同比 +44%'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 0%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);

/* Source contribution: klarna-q2-fy26. */
(function(global){global.INCOME_STATEMENT_SSOT.records.push({
  "key": "klarna-q2-fy26",
  "company": "Klarna",
  "period": "Q2 FY26",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/klarna-q2-fy26.png",
  "roundingTolerance": 1.5,
  "notes": [
    "Amounts and captions are transcribed from the source infographic; displayed totals may differ from sums because each amount is independently rounded.",
    "GMV",
    "$36.6B",
    "+15% Y/Y LfL",
    "Active Consumers",
    "120M",
    "+8% Y/Y",
    "Merchants",
    "1,208K",
    "+54% Y/Y",
    "GMV = Gross Merchandise Value",
    "Adjusted for the sale of",
    "Klarna Checkout (KCO)"
  ],
  "revenue": {
    "total": 1042,
    "notes": [
      "+27% Y/Y"
    ],
    "items": [
      {
        "id": "transaction_revenue",
        "label": "Transaction revenue",
        "value": 707,
        "notes": [
          "+17% Y/Y"
        ]
      },
      {
        "id": "interest_revenue",
        "label": "Interest",
        "value": 266,
        "notes": [
          "+21% Y/Y"
        ]
      },
      {
        "id": "consumer_revenue",
        "label": "Consumer Revenue",
        "value": 69,
        "notes": []
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "label": "Cost of revenue",
      "value": 596,
      "items": [
        {
          "id": "processing_servicing",
          "label": "Processing and servicing costs",
          "value": 233,
          "notes": []
        },
        {
          "id": "credit_losses",
          "label": "Provision for credit losses",
          "value": 192,
          "notes": []
        },
        {
          "id": "funding_costs",
          "label": "Funding costs",
          "value": 171,
          "notes": []
        }
      ]
    },
    "operatingExpenses": {
      "total": 420,
      "items": [
        {
          "id": "technology_product",
          "label": "Tech & product development",
          "value": 111,
          "notes": []
        },
        {
          "id": "sales_marketing",
          "label": "Sales & marketing",
          "value": 111,
          "notes": []
        },
        {
          "id": "ga",
          "label": "General & administrative",
          "value": 76,
          "notes": []
        },
        {
          "id": "customer_service",
          "label": "Customer service & operations",
          "value": 57,
          "notes": []
        },
        {
          "id": "other_opex",
          "label": "Other",
          "value": 65,
          "notes": []
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 18,
      "notes": []
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Transaction margin dollars",
      "value": 446,
      "notes": [
        "+42% Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 26,
      "notes": [
        "2% margin",
        "+4pp Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 8,
      "notes": [
        "0% margin",
        "+4pp Y/Y"
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
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "notes": [
        "Amounts和captions are transcribed from the source infographic；displayed totals may differ from sums because each amount is independently rounded.",
        "GMV",
        "$36.6B",
        "可比口径同比 +15%",
        "活跃消费者",
        "120M",
        "同比 +8%",
        "商户",
        "1,208K",
        "同比 +54%",
        "GMV = 毛 商品 Value",
        "已对出售进行调整：",
        "Klarna Checkout (KCO)"
      ],
      "revenue": {
        "notes": [
          "同比 +27%"
        ],
        "items": [
          {
            "label": "Transaction 收入",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "label": "利息",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "label": "消费者 收入",
            "notes": []
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "收入成本",
          "items": [
            {
              "label": "Processing和servicing costs",
              "notes": []
            },
            {
              "label": "信用损失拨备",
              "notes": []
            },
            {
              "label": "融资成本",
              "notes": []
            }
          ]
        },
        "operatingExpenses": {
          "items": [
            {
              "label": "Tech与product 开发",
              "notes": []
            },
            {
              "label": "销售与市场",
              "notes": []
            },
            {
              "label": "一般及行政",
              "notes": []
            },
            {
              "label": "Customer service与operations",
              "notes": []
            },
            {
              "label": "其他",
              "notes": []
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
          "label": "交易利润额",
          "notes": [
            "同比 +42%"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +4 个百分点"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "利润率 0%",
            "同比 +4 个百分点"
          ]
        }
      },
      "otherIncome": {
        "items": []
      },
      "otherExpenses": {
        "items": []
      }
    }
  }
});})(window);
