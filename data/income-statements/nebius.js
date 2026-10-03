(function(global) {
 const catalog = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {schemaVersion:1,records:[]};
 catalog.records.push({
  "key": "nebius-q2-fy26",
  "company": "Nebius",
  "period": "Q2 FY26",
  "periodNote": "Q2 fiscal year 2026",
  "currency": "$",
  "unit": "M",
  "decimals": 0,
  "sourceImage": "input/processed/nebius-q2-fy26.png",
  "roundingTolerance": 1,
  "revenue": {
    "total": 582,
    "notes": [
      "+454% Y/Y"
    ],
    "items": [
      {
        "id": "ai_cloud",
        "label": "Nebius AI Cloud",
        "value": 575,
        "notes": [
          "+514% Y/Y",
          "50% adjusted EBITDA margin"
        ]
      },
      {
        "id": "other",
        "label": "Other",
        "value": 7,
        "notes": [
          "(36%) Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 134
    },
    "operatingExpenses": {
      "total": 625,
      "items": [
        {
          "id": "da",
          "label": "Depreciation & Amortization",
          "value": 260,
          "notes": [
            "45% of revenue",
            "(27pp) Y/Y"
          ]
        },
        {
          "id": "product_development",
          "label": "Product Development",
          "value": 191,
          "notes": [
            "33% of revenue",
            "(8pp) Y/Y"
          ]
        },
        {
          "id": "sga",
          "label": "Sales, General & Admin",
          "value": 174,
          "notes": [
            "30% of revenue",
            "(35pp) Y/Y"
          ]
        }
      ]
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 449,
      "notes": [
        "77% margin",
        "+6pp Y/Y"
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -176,
      "notes": [
        "(30%) margin",
        "+76pp Y/Y"
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
  "notes": [
    "Displayed revenue less cost of revenue differs from displayed gross profit by $1M due to source rounding."
  ],
  "i18n": {
    "zh": {
      "period": "2026 财年第二季度",
      "periodNote": "2026 财年第二季度",
      "revenue": {
        "notes": [
          "同比 +454%"
        ],
        "items": [
          {
            "id": "ai_cloud",
            "label": "Nebius AI 云",
            "notes": [
              "同比 +514%",
              "调整后 EBITDA 利润率 50%"
            ]
          },
          {
            "id": "other",
            "label": "其他",
            "notes": [
              "同比 (36%)"
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
              "id": "da",
              "label": "折旧与摊销",
              "notes": [
                "占收入 45%",
                "同比 (27 个百分点)"
              ]
            },
            {
              "id": "product_development",
              "label": "产品开发",
              "notes": [
                "占收入 33%",
                "同比 (8 个百分点)"
              ]
            },
            {
              "id": "sga",
              "label": "销售及管理费用",
              "notes": [
                "占收入 30%",
                "同比 (35 个百分点)"
              ]
            }
          ]
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润",
          "notes": [
            "毛利率 77%",
            "同比 +6 个百分点"
          ]
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "利润率 (30%)",
            "同比 +76 个百分点"
          ]
        },
        "net": {
          "label": "未披露净损益",
          "notes": [
            "来源图止于营业亏损。"
          ]
        }
      },
      "notes": [
        "原图显示的收入减收入成本与毛利润相差 100 万美元，保留来源舍入差异。"
      ]
    }
  }
});
})(window);
