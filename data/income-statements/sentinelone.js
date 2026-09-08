/* Pure metric SSOT; operating KPIs do not participate in statement sums. */
(function(global){const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};ssot.records.push(...[
  {
    "key": "sentinelone-q4-fy26",
    "company": "SentinelOne",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/sentinelone-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 259,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 155,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 104,
          "notes": [
            "+34% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 68
      },
      "operatingExpenses": {
        "total": 264,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 127,
            "notes": [
              "49% of revenue",
              "(10pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 83,
            "notes": [
              "32% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 51,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 3
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 191,
        "notes": [
          "74% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -73,
        "notes": [
          "(28%) margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -73,
        "notes": [
          "No separate net income or loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +34%"
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
                  "占收入 49%",
                  "同比 (10 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (28%)",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sentinelone-q1-fy27",
    "company": "SentinelOne",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/sentinelone-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 277,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 168,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 109,
          "notes": [
            "+25% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 78
      },
      "operatingExpenses": {
        "total": 278,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 132,
            "notes": [
              "48% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 96,
            "notes": [
              "35% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 50,
            "notes": [
              "18% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 199,
        "notes": [
          "72% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -80,
        "notes": [
          "(29%) margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -80,
        "notes": [
          "No separate net income or loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +25%"
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
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 35%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 (3 个百分点)"
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
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (29%)",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sentinelone-q2-fy27",
    "company": "SentinelOne",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/sentinelone-q2-fy27.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 292,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 178,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 114,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 82,
        "notes": []
      },
      "operatingExpenses": {
        "total": 301,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 124,
            "notes": [
              "42% of revenue",
              "(10pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 97,
            "notes": [
              "33% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 56,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 24,
            "notes": [
              "8% of revenue",
              "+7pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 210,
        "notes": [
          "72% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -91,
        "notes": [
          "(31%) margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -91,
        "notes": [
          "No separate net income or loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +23%"
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
                  "占收入 42%",
                  "同比 (10 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 33%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 8%",
                  "同比 +7 个百分点"
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
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (31%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "年度经常性收入",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "customers_over_100k",
            "label": "$100K 以上客户",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "1218",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1,218M",
        "basis": "Annual Recurring Revenue",
        "quote": "ARR $1,218M +22% Y/Y",
        "notes": [
          "+22% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1131,
            210,
            180
          ]
        }
      },
      {
        "id": "customers_over_100k",
        "label": "Customers > $100K",
        "value": "1715",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,715",
        "basis": "Customers > $100K",
        "quote": "Customers > $100K 1,715 +13% Y/Y",
        "notes": [
          "+13% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            286,
            1131,
            407,
            180
          ]
        }
      }
    ],
    "notes": [
      "The Source ends at operating loss; no separate net income/loss or tax line is reported. The legacy net slot is explicitly labeled Operating loss."
    ]
  }
]);})(window);
