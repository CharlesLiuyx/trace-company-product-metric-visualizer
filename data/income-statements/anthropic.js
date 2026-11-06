(function(global){global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};global.INCOME_STATEMENT_SSOT.records.push({
  "key": "anthropic-h1-fy26",
  "company": "Anthropic",
  "period": "H1 FY26",
  "periodNote": "Ending June 2026",
  "currency": "$",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processed/anthropic-h1-fy26.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 16.3,
    "notes": [
      "+1,300% Y/Y"
    ],
    "items": [
      {
        "id": "consumption",
        "label": "Consumption-based",
        "value": 13.1,
        "notes": [
          "+1,229% Y/Y"
        ]
      },
      {
        "id": "subscription",
        "label": "Subscription-based",
        "value": 3.2,
        "notes": [
          "+1,690% Y/Y"
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "id": "gross_stage_cost",
      "label": "Gross-stage cost (not shown)",
      "value": 0,
      "notes": [
        "Source groups all expenses under operating expenses."
      ]
    },
    "operatingExpenses": {
      "total": 17,
      "items": [
        {
          "id": "compute",
          "label": "Compute & infrastructure",
          "value": 8.9,
          "notes": [
            "55% of revenue",
            "(146pp) Y/Y"
          ]
        },
        {
          "id": "personnel",
          "label": "Personnel",
          "value": 3.2,
          "notes": [
            "19% of revenue",
            "(27pp) Y/Y"
          ]
        },
        {
          "id": "sales",
          "label": "Sales, marketing & partnerships",
          "value": 3.2,
          "notes": [
            "19% of revenue",
            "+9pp Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other operating & administrative",
          "value": 1.7,
          "notes": [
            "11% of revenue",
            "(16pp) Y/Y"
          ]
        }
      ]
    }
  },
  "profit": {
    "gross": {
      "id": "gross_profit",
      "label": "Gross profit (not shown)",
      "value": 16.3,
      "notes": [
        "No separate gross-profit stage in Source; revenue before all displayed operating expenses."
      ]
    },
    "operating": {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.7,
      "notes": [
        "(4%) margin",
        "+179pp Y/Y"
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
      "id": "customers",
      "label": "Customers >$100K TTM",
      "value": "11900",
      "unit": "count",
      "currency": null,
      "comparison": "gte",
      "literal": "11,900+",
      "quote": "Customers >$100K TTM\n11,900+\n+1,153% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+1,153% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          57,
          1156,
          465,
          164
        ]
      }
    },
    {
      "id": "nrr",
      "label": "Net Revenue Retention",
      "value": "900",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "900%",
      "quote": "Net Revenue Retention\n900%",
      "basis": "unspecified",
      "notes": [],
      "anchor": {
        "type": "image-box",
        "box": [
          535,
          1156,
          331,
          164
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "period": "2026 财年上半年",
      "periodNote": "截至 2026 年 6 月",
      "revenue": {
        "notes": [
          "同比 +1,300%"
        ],
        "items": [
          {
            "id": "consumption",
            "label": [
              "按使用量",
              "付费"
            ],
            "notes": [
              "同比 +1,229%"
            ]
          },
          {
            "id": "subscription",
            "label": [
              "订阅",
              "付费"
            ],
            "notes": [
              "同比 +1,690%"
            ]
          }
        ]
      },
      "costs": {
        "operatingExpenses": {
          "items": [
            {
              "id": "compute",
              "label": [
                "计算与",
                "基础设施"
              ],
              "notes": [
                "占收入 55%",
                "同比 (146 个百分点)"
              ]
            },
            {
              "id": "personnel",
              "label": "人员",
              "notes": [
                "占收入 19%",
                "同比 (27 个百分点)"
              ]
            },
            {
              "id": "sales",
              "label": [
                "销售、营销与",
                "合作伙伴"
              ],
              "notes": [
                "占收入 19%",
                "同比 +9 个百分点"
              ]
            },
            {
              "id": "other",
              "label": [
                "其他营业与",
                "管理费用"
              ],
              "notes": [
                "占收入 11%",
                "同比 (16 个百分点)"
              ]
            }
          ]
        }
      },
      "profit": {
        "gross": {
          "label": "毛利润（来源未单列）"
        },
        "operating": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 +179 个百分点"
          ]
        },
        "net": {
          "label": "净损益未披露",
          "notes": [
            "来源止于营业亏损。"
          ]
        }
      },
      "operatingMetrics": [
        {
          "id": "customers",
          "label": "过去十二个月收入超过 $100K 的客户",
          "notes": [
            "同比 +1,153%"
          ]
        },
        {
          "id": "nrr",
          "label": "净收入留存率",
          "notes": []
        }
      ]
    }
  }
});})(window);
