(function(global){const t=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};t.records.push({
  "key": "braze-q2-fy27",
  "company": "Braze",
  "period": "Q2 FY27",
  "periodNote": "Ending July 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/braze-q2-fy27.png",
  "roundingTolerance": 1.2,
  "revenue": {
    "total": 227,
    "notes": [
      "+26% Y/Y"
    ],
    "items": [
      {
        "id": "subscription",
        "label": "Subscription",
        "value": 208,
        "notes": [
          "+21% Y/Y"
        ]
      },
      {
        "id": "services",
        "label": "Professional services & others",
        "value": 20,
        "notes": [
          "+135% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 75
    },
    "operatingExpenses": {
      "total": 170,
      "items": [
        {
          "id": "sm",
          "label": "Sales & marketing",
          "value": 93,
          "notes": [
            "41% of revenue",
            "(5pp) Y/Y"
          ]
        },
        {
          "id": "rnd",
          "label": "Research & development",
          "value": 45,
          "notes": [
            "20% of revenue",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "ga",
          "label": "General & admin",
          "value": 32,
          "notes": [
            "14% of revenue",
            "(6pp) Y/Y"
          ]
        }
      ]
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 152,
      "notes": [
        "67% margin",
        "(1pp) Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -18,
      "notes": [
        "(8%) margin",
        "+14pp Y/Y"
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
      "id": "dbnr",
      "label": "DBNR",
      "value": "110",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "110%",
      "basis": "unspecified",
      "notes": [
        "+2pp Y/Y"
      ],
      "quote": "DBNR 110% +2pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          64,
          1177,
          241,
          147
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "2789",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,789",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "Customers 2,789 +15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          315,
          1171,
          560,
          161
        ]
      }
    },
    {
      "id": "large_customers",
      "label": "Customers > $500K",
      "value": "361",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "361",
      "basis": "unspecified",
      "notes": [
        "+28% Y/Y"
      ],
      "quote": "Customers > $500K 361 +28% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          315,
          1171,
          560,
          161
        ]
      }
    }
  ],
  "notes": [
    "Printed revenue components total $228M versus $227M revenue. Preserved printed rounding; quarterly results report subscription $207.7M, services $19.6M and total $227.2M. https://investors.braze.com/news/news-details/2026/Braze-Reports-Strong-Fiscal-Second-Quarter-2027-Results/default.aspx"
  ],
  "i18n": {
    "zh": {
      "periodNote": "截至 2026 年 7 月",
      "revenue": {
        "items": [
          {
            "id": "subscription",
            "label": "订阅"
          },
          {
            "id": "services",
            "label": "专业服务及其他"
          }
        ]
      },
      "profit": {
        "gross": {
          "label": "毛利润"
        },
        "operating": {
          "label": "营业亏损"
        },
        "net": {
          "label": "未披露净损益"
        }
      },
      "operatingMetrics": [
        {
          "id": "dbnr",
          "label": "DBNR",
          "notes": [
            "同比 +2pp"
          ]
        },
        {
          "id": "customers",
          "label": "客户数",
          "notes": [
            "同比 +15%"
          ]
        },
        {
          "id": "large_customers",
          "label": "客户 > $500K",
          "notes": [
            "同比 +28%"
          ]
        }
      ]
    }
  }
});})(window);