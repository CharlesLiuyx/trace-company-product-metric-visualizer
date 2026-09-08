/* Pure financial SSOT. */
(function(global){const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};ssot.records.push(...[
  {
    "key": "okta-q1-fy27",
    "company": "Okta",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/okta-q1-fy27.png",
    "roundingTolerance": 0.65,
    "revenue": {
      "total": 765,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 750,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 15,
          "notes": [
            "Flat Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 170
      },
      "operatingExpenses": {
        "total": 539,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 278,
            "notes": [
              "36% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 163,
            "notes": [
              "21% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 98,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4
      }
    },
    "otherIncome": {
      "total": 22,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 22
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
        "value": 595,
        "notes": [
          "78% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 56,
        "notes": [
          "7% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 74,
        "notes": [
          "10% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比持平"
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
                  "占收入 36%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "okta-q4-fy26",
    "company": "Okta",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/okta-q4-fy26.png",
    "roundingTolerance": 0.65,
    "revenue": {
      "total": 761,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 747,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 14,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 168
      },
      "operatingExpenses": {
        "total": 547,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 264,
            "notes": [
              "35% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 165,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 114,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7
      }
    },
    "otherIncome": {
      "total": 24,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 24
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
        "value": 593,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 46,
        "notes": [
          "6% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 63,
        "notes": [
          "8% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +17%"
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
                  "占收入 35%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "okta-q2-fy27",
    "company": "Okta",
    "period": "Q2 FY27",
    "periodNote": "Ending July. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/okta-q2-fy27.png",
    "roundingTolerance": 0.65,
    "revenue": {
      "total": 805,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 793,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 12,
          "notes": [
            "(29%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 164
      },
      "operatingExpenses": {
        "total": 534,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 273,
            "notes": [
              "34% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 163,
            "notes": [
              "20% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 98,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 10
      }
    },
    "otherIncome": {
      "total": 19,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 19
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
        "value": 641,
        "notes": [
          "80% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 107,
        "notes": [
          "13% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 116,
        "notes": [
          "14% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (29%)"
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
                  "占收入 34%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    },
    "supplementaryMetrics": [
      {
        "id": "crpo",
        "label": "Current remaining performance obligation",
        "value": 2.6,
        "unit": "B",
        "currency": "$",
        "notes": [
          "+14% Y/Y"
        ]
      },
      {
        "id": "dbnr",
        "label": "Dollar based net retention (TTM)",
        "value": 107,
        "unit": "%",
        "comparator": ">",
        "notes": [
          "+1pp Y/Y"
        ]
      },
      {
        "id": "large-customers",
        "label": "Customers > $100K ACV",
        "value": 5255,
        "unit": "customers",
        "notes": [
          "+6% Y/Y"
        ]
      }
    ]
  }
]);})(window);
