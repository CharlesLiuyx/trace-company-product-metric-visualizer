/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "target-q3-fy25",
    "company": "Target",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.3,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "merchandise_sales",
          "label": "Merchandise sales",
          "value": 24.8,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "apparel_accessories",
              "label": "Apparel & accessories",
              "value": 3.8,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "beauty",
              "label": "Beauty",
              "value": 3.2,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "food_beverage",
              "label": "Food & beverage",
              "value": 6,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "hardlines",
              "label": "Hardlines",
              "value": 3.2,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "Home furnishing",
              "value": 3.9,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "household_essentials",
              "label": "Household essentials",
              "value": 4.5,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "Other",
              "value": 0.034,
              "valueText": "$34M",
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "credit_card",
          "label": "Credit card",
          "value": 0.1,
          "notes": [
            "(20%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 18.1
      },
      "operatingExpenses": {
        "total": 6.2,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.5
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.1,
        "notes": [
          "28% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "merchandise_sales",
              "label": "商品销售",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "apparel_accessories",
                  "label": "服装及配饰",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "beauty",
                  "label": "美妆",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "food_beverage",
                  "label": "食品与饮料",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "hardlines",
                  "label": "耐用消费品",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "home_furnishing",
                  "label": "家居用品",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "household_essentials",
                  "label": "家庭必需品",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "other_merchandise",
                  "label": "其他",
                  "notes": [
                    "同比 +13%"
                  ]
                }
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "credit_card",
              "label": "信用卡",
              "notes": [
                "同比 (20%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +26%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q4-fy25",
    "company": "Target",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/target-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.5,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "merchandise_sales",
          "label": "Merchandise sales",
          "value": 29.8,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "apparel_accessories",
              "label": "Apparel & accessories",
              "value": 4.1,
              "notes": [
                "(6%) Y/Y"
              ]
            },
            {
              "id": "beauty",
              "label": "Beauty",
              "value": 3.5,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "food_beverage",
              "label": "Food & beverage",
              "value": 6.6,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "hardlines",
              "label": "Hardlines",
              "value": 6,
              "valueText": "$6.0B",
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "Home furnishing",
              "value": 4.8,
              "notes": [
                "(5%) Y/Y"
              ]
            },
            {
              "id": "household_essentials",
              "label": "Household essentials",
              "value": 4.7,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "Other",
              "value": 0.1,
              "notes": [
                "(9%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+55% Y/Y"
          ]
        },
        {
          "id": "credit_card",
          "label": "Credit card",
          "value": 0.1,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 22.3
      },
      "operatingExpenses": {
        "total": 6.7,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 6,
            "valueText": "($6.0B)"
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.1,
        "notes": [
          "27% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "5% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "valueText": "$1.0B",
        "notes": [
          "3% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "merchandise_sales",
              "label": "商品销售",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "apparel_accessories",
                  "label": "服装及配饰",
                  "notes": [
                    "同比 (6%)"
                  ]
                },
                {
                  "id": "beauty",
                  "label": "美妆",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "food_beverage",
                  "label": "食品与饮料",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "hardlines",
                  "label": "耐用消费品",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "home_furnishing",
                  "label": "家居用品",
                  "notes": [
                    "同比 (5%)"
                  ]
                },
                {
                  "id": "household_essentials",
                  "label": "家庭必需品",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "other_merchandise",
                  "label": "其他",
                  "notes": [
                    "同比 (9%)"
                  ]
                }
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +55%"
              ]
            },
            {
              "id": "credit_card",
              "label": "信用卡",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +23%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q1-fy27",
    "company": "Target",
    "period": "Q1 FY27",
    "periodNote": "Ending May 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/target-q1-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "merchandise_sales",
          "label": "Merchandise sales",
          "value": 24.9,
          "children": [
            {
              "id": "apparel_accessories",
              "label": "Apparel & accessories",
              "value": 3.8,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "beauty",
              "label": "Beauty",
              "value": 3.4,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "food_beverage",
              "label": "Food & beverage",
              "value": 6.3,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "hardlines",
              "label": "Hardlines",
              "value": 3.5,
              "notes": [
                "+15% Y/Y"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "Home furnishing",
              "value": 3.2,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "household_essentials",
              "label": "Household essentials",
              "value": 4.6,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "Other",
              "value": 0.1,
              "notes": [
                "(88%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+51% Y/Y"
          ]
        },
        {
          "id": "credit_card",
          "label": "Credit card",
          "value": 0.1,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 18.1
      },
      "operatingExpenses": {
        "total": 6.2,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.4,
        "notes": [
          "29% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "4% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 5 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "merchandise_sales",
              "label": "商品销售",
              "children": [
                {
                  "id": "apparel_accessories",
                  "label": "服装及配饰",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "beauty",
                  "label": "美妆",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "food_beverage",
                  "label": "食品与饮料",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "hardlines",
                  "label": "耐用消费品",
                  "notes": [
                    "同比 +15%"
                  ]
                },
                {
                  "id": "home_furnishing",
                  "label": "家居用品",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "household_essentials",
                  "label": "家庭必需品",
                  "notes": [
                    "同比 +5%"
                  ]
                },
                {
                  "id": "other_merchandise",
                  "label": "其他",
                  "notes": [
                    "同比 (88%)"
                  ]
                }
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +51%"
              ]
            },
            {
              "id": "credit_card",
              "label": "信用卡",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +26%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q2-fy27",
    "company": "Target",
    "period": "Q2 FY27",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q2-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 26.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "merchandise_sales",
          "label": "Merchandise sales",
          "value": 26,
          "children": [
            {
              "id": "apparel_accessories",
              "label": "Apparel & accessories",
              "value": 4.1,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "beauty",
              "label": "Beauty",
              "value": 3.6,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "food_beverage",
              "label": "Food & beverage",
              "value": 6,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "hardlines",
              "label": "Hardlines",
              "value": 3.9,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "Home furnishing",
              "value": 3.7,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "household_essentials",
              "label": "Household essentials",
              "value": 4.6,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "Other",
              "value": 0.048,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ],
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "credit_card",
          "label": "Credit card",
          "value": 0.1,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.6
      },
      "operatingExpenses": {
        "total": 6.4,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.7
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.9,
        "notes": [
          "34% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "10% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "7% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 8 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "merchandise_sales",
              "label": "商品销售",
              "children": [
                {
                  "id": "apparel_accessories",
                  "label": "服装及配饰",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "beauty",
                  "label": "美妆",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "food_beverage",
                  "label": "食品与饮料",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "hardlines",
                  "label": "耐用消费品",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "home_furnishing",
                  "label": "家居用品",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "household_essentials",
                  "label": "家庭必需品",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "other_merchandise",
                  "label": "其他",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ],
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "credit_card",
              "label": "信用卡",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +23%"
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
                "id": "sga",
                "label": "销售、一般及 行政费用",
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销",
                "notes": []
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q1-fy24",
    "company": "Target",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q1-fy24.png",
    "roundingTolerance": 0.1,
    "notes": [
      "Source amounts are rounded to $0.1B, except Other income $29M; rounded net bridge differs by $29M."
    ],
    "revenue": {
      "total": 24.5,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 3.9,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "beauty",
          "label": "Beauty",
          "value": 3.1,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.9,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.2,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 3.5,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "household_essentials",
          "label": "Household essentials",
          "value": 4.5,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "other_merchandise",
          "label": "Other",
          "value": 0.4,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.2,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Amortization",
            "value": 0.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.029,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.029,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.1,
        "notes": [
          "29% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "5% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "household_essentials",
              "label": "家庭必需品",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及 行政费用",
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "摊销",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q2-fy25",
    "company": "Target",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.2,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "merchandise_sales",
          "label": "Merchandise sales",
          "value": 24.7,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "apparel_accessories",
              "label": "Apparel & accessories",
              "value": 4.1,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "beauty",
              "label": "Beauty",
              "value": 3.4,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "food_beverage",
              "label": "Food & beverage",
              "value": 5.6,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "hardlines",
              "label": "Hardlines",
              "value": 3.5,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "Home furnishing",
              "value": 3.7,
              "notes": [
                "(6%) Y/Y"
              ]
            },
            {
              "id": "household_essentials",
              "label": "Household essentials",
              "value": 4.4,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "other_merchandise",
              "label": "Other",
              "value": 0.043,
              "notes": [
                "+11% Y/Y"
              ],
              "valueText": "$43M"
            }
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "credit_card",
          "label": "Credit card",
          "value": 0.1,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.9
      },
      "operatingExpenses": {
        "total": 6,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.4
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.3,
        "notes": [
          "29% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "merchandise_sales",
              "label": "商品销售",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "apparel_accessories",
                  "label": "服装及配饰",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "beauty",
                  "label": "美妆",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "food_beverage",
                  "label": "食品与饮料",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "hardlines",
                  "label": "耐用消费品",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "home_furnishing",
                  "label": "家居用品",
                  "notes": [
                    "同比 (6%)"
                  ]
                },
                {
                  "id": "household_essentials",
                  "label": "家庭必需品",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "other_merchandise",
                  "label": "其他",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "credit_card",
              "label": "信用卡",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +13%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q3-fy24",
    "company": "Target",
    "period": "Q3 FY24",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/target-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.7,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "beauty",
          "label": "Beauty",
          "value": 3.2,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.9,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.2,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 4.2,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "household_essentials",
          "label": "Household essentials",
          "value": 4.7,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 18.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.1,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.5,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.3,
        "notes": [
          "28% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "household_essentials",
              "label": "家庭必需品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +11%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q1-fy25",
    "company": "Target",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/target-q1-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source rounds all amounts to $0.1B. Revenue items sum to $23.9B versus $23.8B; operating expense items sum to $5.3B versus $5.2B; net profit plus tax and interest is $1.4B versus $1.5B operating profit. Each $0.1B difference fits combined rounding intervals."
    ],
    "revenue": {
      "total": 23.8,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 3.7,
          "notes": [
            "(7%) Y/Y"
          ],
          "valueText": "$3.7B"
        },
        {
          "id": "beauty",
          "label": "Beauty",
          "value": 3.1,
          "notes": [
            "(1%) Y/Y"
          ],
          "valueText": "$3.1B"
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.9,
          "notes": [
            "+1% Y/Y"
          ],
          "valueText": "$5.9B"
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.1,
          "notes": [
            "(3%) Y/Y"
          ],
          "valueText": "$3.1B"
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 3.2,
          "notes": [
            "(8%) Y/Y"
          ],
          "valueText": "$3.2B"
        },
        {
          "id": "household_essentials",
          "label": "Household essentials",
          "value": 4.4,
          "notes": [
            "(4%) Y/Y"
          ],
          "valueText": "$4.4B"
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "+11% Y/Y"
          ],
          "valueText": "$0.5B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.1,
        "valueText": "($17.1B)"
      },
      "operatingExpenses": {
        "total": 5.2,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 4.6,
            "valueText": "($4.6B)"
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.7,
            "valueText": "($0.7B)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3,
        "valueText": "($0.3B)"
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "valueText": "($0.1B)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.7,
        "notes": [
          "28% margin",
          "(1pp) Y/Y"
        ],
        "valueText": "$6.7B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.5B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.0B"
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "household_essentials",
              "label": "家庭必需品",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +11%"
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
                "id": "sga",
                "label": [
                  "销售、一般及",
                  "行政费用"
                ],
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销",
                "notes": []
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q4-fy23",
    "company": "Target",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q4-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source values retained. Rounded components differ from displayed totals by at most $0.1B; roundingTolerance covers the combined literal intervals."
    ],
    "revenue": {
      "total": 31.9,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4.4,
          "valueText": "$4.4B",
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "beauty",
          "label": "Beauty & essentials",
          "value": 8.5,
          "valueText": "$8.5B",
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 6.7,
          "valueText": "$6.7B",
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.2,
          "valueText": "$6.2B",
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 5.5,
          "valueText": "$5.5B",
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 23.4,
        "valueText": "($23.4B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.7,
        "items": [
          {
            "id": "sga",
            "label": [
              "Sales General",
              "& admin"
            ],
            "value": 6,
            "valueText": "($6.0B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4,
        "valueText": "($0.4B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.028,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.028,
          "valueText": "$28M",
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "valueText": "($0.1B)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.5,
        "valueText": "$8.5B",
        "notes": [
          "27% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "valueText": "$1.9B",
        "notes": [
          "6% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "valueText": "$1.4B",
        "notes": [
          "4% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆与必需品",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": [
                  "销售、一般及",
                  "行政费用"
                ],
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q3-fy22",
    "company": "Target",
    "period": "Q3 FY22",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q3-fy22.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 26.5,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4.4,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "beauty",
          "label": "Beauty & essentials",
          "value": 7.5,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.7,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.7,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 4.8,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 19.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.2,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Amortization",
            "value": 0.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.012,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.012,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.8,
        "notes": [
          "26% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "4% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "3% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰"
            },
            {
              "id": "beauty",
              "label": "美妆及必需品"
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料"
            },
            {
              "id": "hardlines",
              "label": "耐用消费品"
            },
            {
              "id": "home_furnishing",
              "label": "家居用品"
            },
            {
              "id": "other_revenue",
              "label": "其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润"
          },
          "net": {
            "id": "net_profit",
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "target-q4-fy24",
    "company": "Target",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/target-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.9,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4.3,
          "valueText": "$4.3B",
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "beauty",
          "label": "Beauty",
          "value": 3.4,
          "valueText": "$3.4B",
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 6.5,
          "valueText": "$6.5B",
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 6.2,
          "valueText": "$6.2B",
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 5.1,
          "valueText": "$5.1B",
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "household_essentials",
          "label": "Household essentials",
          "value": 4.8,
          "valueText": "$4.8B",
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.6,
          "valueText": "$0.6B",
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 22.8,
        "valueText": "($22.8B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.6,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 6,
            "valueText": "($6.0B)",
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax_other",
        "label": "Tax & other",
        "value": 0.4,
        "valueText": "($0.4B)",
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
        "label": "Gross profit",
        "value": 8.1,
        "valueText": "$8.1B",
        "notes": [
          "26% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "valueText": "$1.5B",
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "valueText": "$1.1B",
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "household_essentials",
              "label": "家庭必需品",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax_other",
            "label": "税费及其他",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q2-fy24",
    "company": "Target",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/target-q2-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source amounts rounded independently to $0.1B; gross less operating expenses differs from operating profit by $0.1B; net bridge differs by $0.08B. Preserve printed values."
    ],
    "revenue": {
      "total": 25.5,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4.3,
          "notes": [
            "+4% Y/Y"
          ],
          "valueText": "$4.3B"
        },
        {
          "id": "beauty",
          "label": "Beauty",
          "value": 3.4,
          "notes": [
            "+10% Y/Y"
          ],
          "valueText": "$3.4B"
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.5,
          "notes": [
            "+3% Y/Y"
          ],
          "valueText": "$5.5B"
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.3,
          "notes": [
            "(2%) Y/Y"
          ],
          "valueText": "$3.3B"
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 3.9,
          "notes": [
            "(1%) Y/Y"
          ],
          "valueText": "$3.9B"
        },
        {
          "id": "household_essentials",
          "label": "Household essentials",
          "value": 4.6,
          "notes": [
            "+3% Y/Y"
          ],
          "valueText": "$4.6B"
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "+11% Y/Y"
          ],
          "valueText": "$0.5B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.8,
        "valueText": "($17.8B)"
      },
      "operatingExpenses": {
        "total": 6,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.4,
            "valueText": "($5.4B)"
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 0.6,
            "valueText": "($0.6B)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4,
        "valueText": "($0.4B)"
      }
    },
    "otherIncome": {
      "total": 0.02,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.02,
          "valueText": "$20M"
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "valueText": "($0.1B)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.7,
        "notes": [
          "30% margin",
          "+2pp Y/Y"
        ],
        "valueText": "$7.7B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "6% margin",
          "+2pp Y/Y"
        ],
        "valueText": "$1.6B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.2B"
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "household_essentials",
              "label": "家庭必需品",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +11%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": [
                  "销售、一般及",
                  "行政费用"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧及摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
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
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 30%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q2-fy23",
    "company": "Target",
    "period": "Q2 FY23",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.8,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4.1,
          "valueText": "$4.1B",
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "beauty_essentials",
          "label": "Beauty & essentials",
          "value": 7.5,
          "valueText": "$7.5B",
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.4,
          "valueText": "$5.4B",
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.4,
          "valueText": "$3.4B",
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 4,
          "valueText": "$4.0B",
          "notes": [
            "(15%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.8,
        "valueText": "($17.8B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.2,
            "valueText": "($5.2B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "valueText": "($0.2B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.016,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.016,
          "valueText": "$16M",
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "valueText": "($0.1B)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7,
        "valueText": "$7.0B",
        "notes": [
          "28% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "valueText": "$1.2B",
        "notes": [
          "5% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "valueText": "$0.8B",
        "notes": [
          "3% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounded amounts: 1.2 + 0.016 - 0.2 - 0.1 = 0.916B versus displayed net profit 0.8B; difference 0.116B is inside the combined 0.2B rounding interval. Source literals retained."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "beauty_essentials",
              "label": "美妆及必需品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (15%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +0%"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
        "otherExpenses": {
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
              "利润率 28%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "target-q3-fy23",
    "company": "Target",
    "period": "Q3 FY23",
    "periodNote": "Ending Oct, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/target-q3-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source amounts are rounded: revenue components sum to $25.3B versus $25.4B; gross profit plus cost of sales is $25.3B; the operating-to-net bridge differs by $0.075B. Each difference fits the displayed rounding intervals."
    ],
    "revenue": {
      "total": 25.4,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "apparel_accessories",
          "label": "Apparel & accessories",
          "value": 4,
          "notes": [
            "(8%) Y/Y"
          ],
          "valueText": "$4.0B"
        },
        {
          "id": "beauty",
          "label": "Beauty & essentials",
          "value": 7.6,
          "notes": [
            "+2% Y/Y"
          ],
          "valueText": "$7.6B"
        },
        {
          "id": "food_beverage",
          "label": "Food & beverage",
          "value": 5.7,
          "notes": [
            "+0% Y/Y"
          ],
          "valueText": "$5.7B"
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 3.2,
          "notes": [
            "(13%) Y/Y"
          ],
          "valueText": "$3.2B"
        },
        {
          "id": "home_furnishing",
          "label": "Home furnishing",
          "value": 4.4,
          "notes": [
            "(9%) Y/Y"
          ],
          "valueText": "$4.4B"
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "(4%) Y/Y"
          ],
          "valueText": "$0.4B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 18.1,
        "valueText": "($18.1B)"
      },
      "operatingExpenses": {
        "total": 5.9,
        "items": [
          {
            "id": "sga",
            "label": "Sales General & admin",
            "value": 5.3,
            "valueText": "($5.3B)"
          },
          {
            "id": "depreciation_amortization",
            "label": "Amortization",
            "value": 0.6,
            "valueText": "($0.6B)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3,
        "valueText": "($0.3B)"
      }
    },
    "otherIncome": {
      "total": 0.025,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.025,
          "valueText": "$25M"
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1,
          "valueText": "($0.1B)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.2,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ],
        "valueText": "$7.2B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.3B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.0B"
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "notes": [
          "原图金额已舍入：收入分项合计 $25.3B，总收入为 $25.4B；毛利润与销售成本合计 $25.3B；营业利润至净利润的桥接差额为 $0.075B。各差额均在显示精度的舍入区间内。"
        ],
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "apparel_accessories",
              "label": "服装及配饰",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "beauty",
              "label": "美妆与日用品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "food_beverage",
              "label": "食品与饮料",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "hardlines",
              "label": "耐用消费品",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "home_furnishing",
              "label": "家居用品",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (4%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": [
                  "销售、一般及",
                  "行政费用"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
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
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
