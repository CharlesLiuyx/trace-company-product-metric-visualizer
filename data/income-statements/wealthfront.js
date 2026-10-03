(function(global){global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};global.INCOME_STATEMENT_SSOT.records.push({
  "key": "wealthfront-q2-fy27",
  "company": "Wealthfront",
  "period": "Q2 FY27",
  "periodNote": "Ending July 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processing/wealthfront-q2-fy27.png",
  "roundingTolerance": 1.1,
  "revenue": {
    "total": 92,
    "notes": [
      "+1% Y/Y"
    ],
    "items": [
      {
        "id": "cash_management",
        "label": "Cash Management",
        "value": 62,
        "notes": [
          "(10%) Y/Y"
        ]
      },
      {
        "id": "investment_advisory",
        "label": "Investment Advisory",
        "value": 29,
        "notes": [
          "+31% Y/Y"
        ]
      },
      {
        "id": "other_revenue",
        "label": "Other",
        "value": 1,
        "notes": [
          "+525% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 11
    },
    "operatingExpenses": {
      "total": 64,
      "notes": [
        "Displayed expense items sum to $65M versus the displayed $64M total; a $1M source rounding difference."
      ],
      "items": [
        {
          "id": "product_development",
          "label": "Product development",
          "value": 34,
          "notes": [
            "37% of revenue",
            "+14pp Y/Y"
          ]
        },
        {
          "id": "marketing",
          "label": "Marketing",
          "value": 16,
          "notes": [
            "17% of revenue",
            "+7pp Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "G&A",
          "value": 11,
          "notes": [
            "12% of revenue",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "operations",
          "label": "Operations",
          "value": 4,
          "notes": [
            "4% of revenue",
            "+1pp Y/Y"
          ]
        }
      ]
    },
    "tax": {
      "id": "tax",
      "label": "Tax",
      "value": 3
    }
  },
  "otherIncome": {
    "total": 4,
    "items": [
      {
        "id": "other_income",
        "label": "Other",
        "value": 4
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
      "value": 81,
      "notes": [
        "88% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 17,
      "notes": [
        "18% margin",
        "(25pp) Y/Y"
      ]
    },
    "net": {
      "id": "net_profit",
      "label": "Net profit",
      "value": 18,
      "notes": [
        "19% margin",
        "(19pp) Y/Y"
      ]
    }
  },
  "operatingMetrics": [
    {
      "id": "platform_assets",
      "label": "Platform Assets",
      "literal": "$99.0B",
      "value": "99.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+12% Y/Y"
      ],
      "quote": "Platform Assets\n$99.0B\n+12% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          87,
          1185,
          380,
          167
        ]
      }
    },
    {
      "id": "funded_clients",
      "label": "Funded Clients",
      "literal": "1.5M",
      "value": "1500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+14% Y/Y"
      ],
      "quote": "Funded Clients\n1.5M\n+14% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          474,
          1186,
          335,
          167
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "period": "2027 财年第二季度",
      "periodNote": "截至 2026 年 7 月",
      "revenue": {
        "notes": [
          "同比 +1%"
        ],
        "items": [
          {
            "id": "cash_management",
            "label": "现金管理",
            "notes": [
              "同比 (10%)"
            ]
          },
          {
            "id": "investment_advisory",
            "label": "投资顾问",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "other_revenue",
            "label": "其他",
            "notes": [
              "同比 +525%"
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
              "id": "product_development",
              "label": "产品开发",
              "notes": [
                "占收入 37%",
                "同比 +14 个百分点"
              ]
            },
            {
              "id": "marketing",
              "label": "营销",
              "notes": [
                "占收入 17%",
                "同比 +7 个百分点"
              ]
            },
            {
              "id": "ga",
              "label": "一般及行政费用",
              "notes": [
                "占收入 12%",
                "同比 +2 个百分点"
              ]
            },
            {
              "id": "operations",
              "label": "运营",
              "notes": [
                "占收入 4%",
                "同比 +1 个百分点"
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
            "id": "other_income",
            "label": "其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "毛利率 88%",
            "同比 (1 个百分点)"
          ]
        },
        "operating": {
          "label": "营业利润",
          "notes": [
            "营业利润率 18%",
            "同比 (25 个百分点)"
          ]
        },
        "net": {
          "label": "净利润",
          "notes": [
            "净利率 19%",
            "同比 (19 个百分点)"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "platform_assets",
          "label": "平台资产",
          "notes": [
            "同比 +12%"
          ]
        },
        {
          "id": "funded_clients",
          "label": "入金客户数",
          "notes": [
            "同比 +14%"
          ]
        }
      ]
    }
  }
});})(window);