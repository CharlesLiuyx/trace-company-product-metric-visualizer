/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "starbucks-q2-fy25",
    "company": "Starbucks",
    "period": "Q2 FY25",
    "periodNote": "Ending March. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/starbucks-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.8,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.3,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.7,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.8,
          "notes": [
            "(2%) Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.7
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.2
          }
        ],
        "notes": [
          "Source components total $6.9B; revenue less gross profit is $7.0B. Source independently rounded amounts."
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ],
        "notes": [
          "Source components total $1.2B; displayed operating expenses are $1.3B. Source independently rounded amounts."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.8,
        "notes": [
          "21% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "7% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "4% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "40789",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "40,789",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Store count 40,789 +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1205,
            273,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "1%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Same Store Sale (1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            307,
            1205,
            421,
            59
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+1%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            391,
            1271,
            234,
            33
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Transactions (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            391,
            1305,
            247,
            34
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (2%)",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 21%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (5 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q1-fy26",
    "company": "Starbucks",
    "period": "Q1 FY26",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/starbucks-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.9,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2.1,
          "notes": [
            "+8% Y/Y",
            "Packaged beverages, royalty and licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7.8,
        "notes": [
          "Source chart presents cost of revenue as Store opex ($4.6B) plus Product & distribution ($3.3B); displayed components round to $7.9B."
        ],
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.6
          },
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 3.3
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.7
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.1,
        "notes": [
          "21% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "9% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "3% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +8%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将收入成本列示为门店运营费用 ($4.6B) 加产品与分销 ($3.3B)；列示组件四舍五入后为 $7.9B。"
            ],
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "product_distribution",
                "label": "产品与分销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
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
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 21%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "starbucks-q2-fy26",
    "company": "Starbucks",
    "period": "Q2 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/starbucks-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.5,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.7,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.8,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "+15% Y/Y",
            "Packaged beverages, royalty and licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 7.6,
        "notes": [
          "Source chart presents cost of revenue as Store opex ($4.4B) plus Product & distribution ($3.2B)."
        ],
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.4
          },
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 3.2
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Rounded source chart line items sum to $1.125B including $25M restructuring."
        ],
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.025
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
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.9,
        "notes": [
          "20% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "9% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +15%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将收入成本列示为门店运营费用 ($4.4B) 加产品与分销 ($3.2B)。"
            ],
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "product_distribution",
                "label": "产品与分销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 20%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
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
    "key": "starbucks-q3-fy26",
    "company": "Starbucks",
    "period": "Q3 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/starbucks-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.3,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.4,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.9,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "+5% Y/Y",
            "Packaged beverages, royalty and licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7,
        "notes": [
          "Source chart presents cost of revenue as Store opex ($4.2B) plus Product & distribution ($2.8B)."
        ],
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.2
          },
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "gain",
          "label": "Gain",
          "value": 0.5
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.3,
        "notes": [
          "25% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "11% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +5%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将收入成本列示为门店运营费用 ($4.2B) 加产品与分销 ($2.8B)。"
            ],
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "product_distribution",
                "label": "产品与分销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "otherIncome": {
          "items": [
            {
              "id": "gain",
              "label": "收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 25%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "starbucks-q4-fy25",
    "company": "Starbucks",
    "period": "Q4 FY25",
    "periodNote": "Ending Sept. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/starbucks-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.6,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 2.2,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "+41% Y/Y",
            "Packaged beverages, royalty and licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7.4,
        "notes": [
          "Source chart presents cost of revenue as Store opex ($4.3B) plus Product & distribution ($3.1B)."
        ],
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.3
          },
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 3.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 2,
        "notes": [
          "Displayed operating-expense components sum to $1.9B because the source rounds each component independently."
        ],
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.8
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.03
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "23% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "3% margin",
          "(11pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +41%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图将收入成本列示为门店运营费用 ($4.3B) 加产品与分销 ($3.1B)。"
            ],
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "product_distribution",
                "label": "产品与分销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 23%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 (11 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (9 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "starbucks-q1-fy25",
    "company": "Starbucks",
    "period": "Q1 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.7,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "(2%) Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7.1,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.9
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.2
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.7
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.2
          }
        ],
        "notes": [
          "Source displays $1.2B operating expenses while its displayed components sum to $1.3B; original rounded amounts retained."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.3,
        "notes": [
          "24% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "12% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "8% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "22000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22.0M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Store count 22.0M +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1207,
            272,
            150
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "34600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "34.6M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+1% Y/Y"
        ],
        "quote": "US Active Rewards 34.6M members +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1207,
            379,
            150
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "4%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Same Store Sale (4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1207,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+3%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1274,
            327,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "6%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Transactions (6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1305,
            327,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (2%)",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": [
              "原图运营费用合计为 $1.2B，所列分项合计为 $1.3B；保留原图舍入数值。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 24%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +1%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-fy24",
    "company": "Starbucks",
    "period": "FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 36.2,
      "notes": [
        "+1% Y/Y",
        "Source revenue components sum to $36.1B; displayed total is $36.2B. Independently rounded values retained."
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 21.9,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 6.7,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 7.5,
          "notes": [
            "(2%) Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 26.5,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 11.2
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 15.3
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 2.5
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.5
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.6
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
      }
    },
    "operatingOtherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.7,
        "notes": [
          "27% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "40199",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "40,199",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Store count 40,199 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1207,
            272,
            150
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "33800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "33.8M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+4% Y/Y"
        ],
        "quote": "US Active Rewards 33.8M members +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1207,
            379,
            150
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Same Store Sale (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1207,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1274,
            327,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "4%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Transactions (4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1305,
            327,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +1%",
            "原图收入分项合计为 $36.1B，总收入为 $36.2B；保留独立舍入的原值。"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (2%)",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +4%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (4%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q1-fy23",
    "company": "Starbucks",
    "period": "Q1 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/starbucks-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.7,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.2,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.6,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "+15% Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.5,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.8
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.7
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.3
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.006
          }
        ],
        "notes": [
          "Source rounds each amount independently; displayed operating-expense components sum to $1.006B."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "26% margin",
          "(0.9pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "14% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "10% margin",
          "(0.3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "36170",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "36,170",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Store count 36,170 +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            271,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "30400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "30.4M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+15% Y/Y"
        ],
        "quote": "US Active Rewards 30.4M members +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1222,
            379,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Same Store Sale +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1222,
            419,
            69
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+7%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            742,
            1289,
            345,
            34
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "2%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Transactions 2% (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            742,
            1323,
            345,
            34
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +15%",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ],
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              },
              {
                "id": "restructuring",
                "label": "重组"
              }
            ],
            "notes": [
              "原图各金额独立舍入；运营费用分项合计为 $1.006B。"
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 (0.9 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (0.2 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (0.3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +15%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "Y/Y"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "Y/Y"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q1-fy24",
    "company": "Starbucks",
    "period": "Q1 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "+8% Y/Y",
        "Source rounded revenue components sum to $9.5B while reported revenue is $9.4B."
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.7,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.8,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "+10% Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.9,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 3
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.9
          }
        ],
        "notes": [
          "Source rounded gross profit plus cost components sum to $9.5B while revenue is $9.4B."
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.2
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.6,
        "notes": [
          "28% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "11% margin",
          "+1pp Y/Y",
          "Rounded operating profit less tax and other expense is $1.1B; source net profit is $1.0B."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "38587",
        "unit": "count",
        "literal": "38,587",
        "notes": [
          "+7% Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Store count 38,587 +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "34300000",
        "unit": "count",
        "literal": "34.3M",
        "notes": [
          "members",
          "+13% Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "US Active Rewards 34.3M members +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            311,
            1222,
            380,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "5",
        "unit": "%",
        "literal": "+5%",
        "notes": [
          "Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Same Store Sale +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            705,
            1222,
            422,
            68
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "2",
        "unit": "%",
        "literal": "+2%",
        "notes": [
          "Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Ticket +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            796,
            1291,
            275,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "3",
        "unit": "%",
        "literal": "+3%",
        "notes": [
          "Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Transactions +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            792,
            1323,
            294,
            30
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +8%",
            "原图收入分项合计 $9.5B，总收入为 $9.4B；保留舍入值。"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +10%",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ],
            "notes": [
              "原图毛利润与成本分项合计 $9.5B，总收入为 $9.4B；保留舍入值。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +13%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q2-fy23",
    "company": "Starbucks",
    "period": "Q2 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/starbucks-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.7,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.6,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "+14% Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.4,
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.6
          },
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.3
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.009,
            "valueText": "$9M"
          }
        ],
        "notes": [
          "Displayed components sum to $1.009B; source independently rounds totals and components."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.3,
        "notes": [
          "26% margin",
          "+1.9pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "15% margin",
          "+2.8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "10% margin",
          "+1.6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "36634",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "36,634",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Store count 36,634 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "30800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "30.8M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+15% Y/Y"
        ],
        "quote": "US Active Rewards 30.8M members +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1222,
            379,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+11%",
        "basis": "Year-over-year growth",
        "notes": [
          "Y/Y"
        ],
        "quote": "Same Store Sale +11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1222,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "Year-over-year growth",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            794,
            1288,
            234,
            31
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+6%",
        "basis": "Year-over-year growth",
        "notes": [
          "Y/Y"
        ],
        "quote": "Transactions +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            794,
            1322,
            260,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +14%",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "product_distribution",
                "label": "产品与 分销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及 行政费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与 摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              },
              {
                "id": "restructuring",
                "label": "重组"
              }
            ],
            "notes": [
              "分项合计为 $1.009B；原图对合计和分项分别舍入。"
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 +1.9 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +2.8 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +1.6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +15%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q2-fy24",
    "company": "Starbucks",
    "period": "Q2 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.6,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.2,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.6,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.8,
          "notes": [
            "(4%) Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.3,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.6
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.7
          }
        ],
        "notes": [
          "Source rounded revenue less displayed costs is $2.3B; gross profit is displayed as $2.2B. Original rounded values retained."
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.7
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "26% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "13% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "9% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "38951",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "38,951",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Store count 38,951 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "32800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "32.8M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+6% Y/Y"
        ],
        "quote": "US Active Rewards 32.8M members +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1222,
            379,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "3%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Same Store Sale (3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            705,
            1222,
            422,
            61
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            801,
            1287,
            238,
            33
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "7%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "Transactions (7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            794,
            1319,
            262,
            35
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (4%)",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ],
            "notes": [
              "原图收入减所列成本为 $2.3B，毛利润显示为 $2.2B；保留原图舍入值。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +6%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (7%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q3-fy23",
    "company": "Starbucks",
    "period": "Q3 FY23",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/starbucks-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.2,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.6,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.7,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "+8% Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.6,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.9
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.7
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.3
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.007
          }
        ],
        "notes": [
          "Source displays $1.1B operating expenses while rounded components total $1.007B; source amounts retained."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.6,
        "notes": [
          "28% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "12% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "37200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "37,200",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Store count 37,200 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "31400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "31.4M",
        "basis": "unspecified",
        "notes": [
          "members; +15% Y/Y"
        ],
        "quote": "US Active Rewards 31.4M members; +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            311,
            1222,
            380,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Same Store Sale +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1222,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            781,
            1289,
            286,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Transactions +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            775,
            1319,
            306,
            30
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +8%",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              },
              {
                "id": "restructuring",
                "label": "重组"
              }
            ],
            "notes": [
              "原图运营费用为 $1.1B，已舍入分项合计 $1.007B；保留原图数值。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员；同比 +15%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q3-fy24",
    "company": "Starbucks",
    "period": "Q3 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.1,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.5,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.7,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.8,
          "notes": [
            "(2%) Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.5,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.7
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.8
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "28% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "39477",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "39,477",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Store count 39,477 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "33800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "33.8M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+7% Y/Y"
        ],
        "quote": "US Active Rewards 33.8M members +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            311,
            1222,
            380,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "3%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Same Store Sale (3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            706,
            1222,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            768,
            1287,
            289,
            33
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "5%",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "Transactions (5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            753,
            1319,
            324,
            35
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (2%)",
                "包装饮品、版税和",
                "授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
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
              "利润率 17%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +7%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (5%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q3-fy25",
    "company": "Starbucks",
    "period": "Q3 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.5,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.8,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1.9,
          "notes": [
            "+4% Y/Y",
            "Packaged beverages, royalty and",
            "licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 7.3,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 3
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 4.3
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.7
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.2
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "23% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "10% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "6% margin",
          "(6pp) Y/Y",
          "Source rounded amounts: operating profit $0.9B minus tax $0.3B and other $0.1B gives $0.5B versus displayed net profit $0.6B."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "18734",
        "unit": "count",
        "literal": "18,734",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Store count 18,734 +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "2",
        "unit": "%",
        "literal": "2%",
        "currency": null,
        "comparison": "eq",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Same Store Sale (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1222,
            422,
            69
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "1",
        "unit": "%",
        "literal": "+1%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            391,
            1289,
            286,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "2",
        "unit": "%",
        "literal": "2%",
        "currency": null,
        "comparison": "eq",
        "basis": "Year-over-year decline magnitude",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Transactions (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            391,
            1320,
            306,
            30
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +4%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 23%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (6 个百分点)",
              "原图金额分别舍入：营业利润 $0.9B 减税费 $0.3B 和其他费用 $0.1B 得 $0.5B，原图净利润为 $0.6B。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比 "
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q4-fy22",
    "company": "Starbucks",
    "period": "Q4 FY22",
    "periodNote": "Ending Sept, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/starbucks-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 6.2,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.9,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "(17%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Product & distribution costs",
        "value": 2.7,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution costs",
            "value": 2.7
          }
        ]
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.5
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.035,
            "valueText": "($35M)"
          }
        ],
        "notes": [
          "Source displays $4.6B total; individually rounded components sum to $4.535B. Gross profit $5.7B plus other income $0.1B less operating expenses $4.6B equals operating profit $1.2B."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.7,
        "notes": [
          "68% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "14% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "10% margin",
          "(11pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "35711",
        "unit": "count",
        "literal": "35,711",
        "notes": [
          "+6% Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Store count 35,711 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1222,
            272,
            148
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "Active Reward",
        "value": "28700000",
        "unit": "count",
        "literal": "28.7M",
        "notes": [
          "members",
          "+16% Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active Reward 28.7M members +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            313,
            1222,
            314,
            148
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "7",
        "unit": "%",
        "literal": "+7%",
        "notes": [
          "Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Same Store Sale +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            638,
            1222,
            413,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "8",
        "unit": "%",
        "literal": "+8%",
        "notes": [
          "Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Ticket +8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            651,
            1288,
            391,
            33
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "1",
        "unit": "%",
        "literal": "1%",
        "notes": [
          "(1%) Y/Y"
        ],
        "currency": null,
        "comparison": "eq",
        "basis": "Year-over-year decline magnitude",
        "quote": "Transactions 1% (1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            651,
            1322,
            391,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (17%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品与分销成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销成本"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "store_opex",
                "label": "门店运营费用"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与 摊销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
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
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (11 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "活跃奖励会员",
            "notes": [
              "会员",
              "同比 +16%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "starbucks-q4-fy23",
    "company": "Starbucks",
    "period": "Q4 FY23",
    "periodNote": "Ending Sept. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/starbucks-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "beverage",
          "label": "Beverage",
          "value": 5.7,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "food",
          "label": "Food",
          "value": 1.7,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "+10% Y/Y",
            "Packaged beverages, royalty and licensing revenue, ingredients"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 6.6,
        "items": [
          {
            "id": "product_distribution",
            "label": "Product & distribution",
            "value": 2.9
          },
          {
            "id": "store_opex",
            "label": "Store opex",
            "value": 3.7
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "ga",
            "label": "General & administrative",
            "value": 0.6
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 0.4
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 0.1
          }
        ],
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.7,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "18% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "13% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "store_count",
        "label": "Store count",
        "value": "38038",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "38,038",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Store count 38,038 +7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1220,
            273,
            150
          ]
        }
      },
      {
        "id": "active_rewards",
        "label": "US Active Rewards",
        "value": "32600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "32.6M",
        "basis": "unspecified",
        "notes": [
          "members",
          "+14% Y/Y"
        ],
        "quote": "US Active Rewards 32.6M members +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            312,
            1220,
            380,
            150
          ]
        }
      },
      {
        "id": "same_store_sale",
        "label": "Same Store Sale",
        "value": "8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+8%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Same Store Sale +8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            705,
            1220,
            421,
            65
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Ticket",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Ticket +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1286,
            327,
            30
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Transactions",
        "value": "3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+3%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Transactions +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            755,
            1317,
            327,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "beverage",
              "label": "饮品",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "food",
              "label": "食品",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +10%",
                "包装饮品、版税和授权收入、原料"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "product_distribution",
                "label": "产品与分销"
              },
              {
                "id": "store_opex",
                "label": "门店运营费用"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ],
            "notes": []
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "store_count",
            "label": "门店数",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "active_rewards",
            "label": "美国活跃奖励会员",
            "notes": [
              "会员",
              "同比 +14%"
            ]
          },
          {
            "id": "same_store_sale",
            "label": "同店销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "交易量",
            "notes": [
              "同比"
            ]
          }
        ],
        "notes": [
          "操作员确认按 Q4 FY23 登记；原图标题及截至 2023 年 9 月均对应 Q4，左上角 Q3 FY23 为原图标注错误。",
          "保留原图独立舍入的金额：收入成本分项与毛利润合计 $9.3B，收入总额 $9.4B。"
        ]
      }
    },
    "notes": [
      "Operator confirmed Q4 FY23. The source title and September 2023 ending date indicate Q4, while the upper-left Q3 FY23 label is a source annotation error.",
      "Source rounded revenue components sum to $9.4B; cost components plus gross profit sum to $9.3B. Original displayed amounts retained."
    ]
  }
]);
})(window);
