/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "block-q1-fy23",
    "company": "Block",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended March 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q1-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 5,
      "notes": [
        "+26% Y/Y",
        "Source revenue items sum to $5.037B; preserve rounded Source values."
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.2,
          "notes": [
            "+25% Y/Y",
            "2% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.4,
          "notes": [
            "+15% Y/Y",
            "42% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.4,
          "notes": [
            "+42% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.037,
          "notes": [
            "+0% Y/Y",
            "(57%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.3,
        "notes": [
          "Source cost items sum to $3.278B; preserve rounded Source values."
        ],
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.1
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 0.8
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.059
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.019
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.7,
        "notes": [
          "Source operating expense items sum to $1.637B; rounded totals and gross profit differ from operating loss by $6M."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.037
          }
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.7,
        "notes": [
          "+32% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.8,
            "notes": [
              "+16% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 0.9,
            "notes": [
              "+49% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.006
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
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +25%",
                "毛利率 2%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +15%",
                "毛利率 42%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +42%",
                "毛利率 81%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 +0%",
                "毛利率 (57%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ],
            "notes": [
              "来源图成本分项合计 $3.278B；保留图上舍入后的金额。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ],
            "notes": [
              "来源图运营费用分项合计 $1.637B；舍入后的费用总额和毛利润与营业亏损相差 $6M。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +32%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +16%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +49%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "来源未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q3-fy25",
    "company": "Block",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.1,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2,
          "notes": [
            "(19%) Y/Y",
            "4% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.9,
          "notes": [
            "+9% Y/Y",
            "39% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 2.2,
          "notes": [
            "+23% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.1,
          "notes": [
            "+91% Y/Y",
            "(47%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.5,
        "notes": [
          "Visible cost detail items sum to $3.414B because the source chart rounds the aggregate label."
        ],
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 1.9
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1.1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.014
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.3,
        "notes": [
          "Visible operating-expense line items sum to $2.234B because the source chart rounds the aggregate label."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.4
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.034
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.2
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
        "value": 2.7,
        "notes": [
          "+18% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 1,
            "notes": [
              "+9% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.6,
            "notes": [
              "+24% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (19%)",
                "毛利率 4%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +9%",
                "毛利率 39%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +23%",
                "毛利率 86%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 +91%",
                "毛利率 (47%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "可见成本明细合计为 $3.414B，差异来自来源图对汇总标签的取整。"
            ],
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "可见运营费用明细合计为 $2.234B，差异来自来源图对汇总标签的取整。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +18%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +9%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +24%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-fy25",
    "company": "Block",
    "period": "FY25",
    "periodNote": "Year ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/block-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.2,
      "notes": [
        "+0% Y/Y"
      ],
      "items": [
        {
          "id": "commerce_enablement",
          "label": "Commerce Enablement",
          "value": 11.5,
          "notes": [
            "+10% Y/Y",
            "54% gross margin"
          ]
        },
        {
          "id": "financial_solutions",
          "label": "Financial Solutions",
          "value": 4.2,
          "notes": [
            "+28% Y/Y",
            "92% gross margin"
          ]
        },
        {
          "id": "bitcoin_ecosystem",
          "label": "Bitcoin Ecosystem",
          "value": 8.5,
          "notes": [
            "(18%) Y/Y",
            "5% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 13.8
      },
      "operatingExpenses": {
        "total": 8.7,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 2.9
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 2.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 2
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 1.3
          },
          {
            "id": "other_operating",
            "label": "Other",
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
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 10.4,
        "notes": [
          "+17% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "7% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "5% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月 31 日的年度",
        "revenue": {
          "notes": [
            "同比 +0%"
          ],
          "items": [
            {
              "id": "commerce_enablement",
              "label": "商业赋能",
              "notes": [
                "同比 +10%",
                "毛利率 54%"
              ]
            },
            {
              "id": "financial_solutions",
              "label": "金融解决方案",
              "notes": [
                "同比 +28%",
                "毛利率 92%"
              ]
            },
            {
              "id": "bitcoin_ecosystem",
              "label": "比特币生态",
              "notes": [
                "同比 (18%)",
                "毛利率 5%"
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
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +17%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (6 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q1-fy26",
    "company": "Block",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/block-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.1,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "commerce_enablement",
          "label": "Commerce Enablement",
          "value": 2.9,
          "notes": [
            "+14% Y/Y",
            "55% gross margin"
          ]
        },
        {
          "id": "financial_solutions",
          "label": "Financial Solutions",
          "value": 1.3,
          "notes": [
            "+51% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "bitcoin_ecosystem",
          "label": "Bitcoin Ecosystem",
          "value": 1.8,
          "notes": [
            "(23%) Y/Y",
            "4% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.1
      },
      "operatingExpenses": {
        "total": 3.1,
        "notes": [
          "Visible operating-expense line items sum to $3.134B because the source chart rounds the aggregate label."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 1
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.5
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.034
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.9,
        "notes": [
          "+27% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(3%) margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "commerce_enablement",
              "label": "商业赋能",
              "notes": [
                "同比 +14%",
                "毛利率 55%"
              ]
            },
            {
              "id": "financial_solutions",
              "label": "金融解决方案",
              "notes": [
                "同比 +51%",
                "毛利率 93%"
              ]
            },
            {
              "id": "bitcoin_ecosystem",
              "label": "比特币生态",
              "notes": [
                "同比 (23%)",
                "毛利率 4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "notes": [
              "可见运营费用明细合计为 $3.134B，差异来自来源图对汇总标签的取整。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +27%"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (9 个百分点)"
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
    "key": "block-q2-fy26",
    "company": "Block",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.6,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "commerce_enablement",
          "label": "Commerce Enablement",
          "value": 3.3,
          "notes": [
            "+15% Y/Y",
            "54% gross margin"
          ]
        },
        {
          "id": "financial_solutions",
          "label": "Financial Solutions",
          "value": 1.4,
          "notes": [
            "+40% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "bitcoin_ecosystem",
          "label": "Bitcoin Ecosystem",
          "value": 1.9,
          "notes": [
            "(13%) Y/Y",
            "4% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.5
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.7
          },
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.5
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.034
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
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.2,
        "notes": [
          "+25% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "+1% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "notes": [
      "Period and values follow the Source chart. Totals and components have independent displayed rounding; gross profit less operating expenses differs from operating profit by $0.1B."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "notes": [
          "期间与金额依照来源图。汇总和明细分别取整；毛利润减运营费用与营业利润相差 $0.1B。"
        ],
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "commerce_enablement",
              "label": "商业赋能",
              "notes": [
                "同比 +15%",
                "毛利率 54%"
              ]
            },
            {
              "id": "financial_solutions",
              "label": "金融解决方案",
              "notes": [
                "同比 +40%",
                "毛利率 93%"
              ]
            },
            {
              "id": "bitcoin_ecosystem",
              "label": "比特币生态",
              "notes": [
                "同比 (13%)",
                "毛利率 4%"
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
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +25%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 +1%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q2-fy23",
    "company": "Block",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.5,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.4,
          "notes": [
            "+34% Y/Y",
            "2% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.6,
          "notes": [
            "+11% Y/Y",
            "42% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.5,
          "notes": [
            "+33% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.045,
          "notes": [
            "(7%) Y/Y",
            "(65%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.3
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.074
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018
          }
        ]
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.037
          }
        ]
      },
      "tax": {
        "label": "Tax not reported",
        "value": 0,
        "notes": [
          "Source stops at operating loss."
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.9,
        "notes": [
          "+27% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+18% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1,
            "notes": [
              "+37% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1
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
      "Source rounding: revenue components $5.545B versus $5.5B; gross profit plus cost $5.6B; cost details $3.692B versus $3.7B; operating expense details $1.937B versus $2.0B. Original literals retained."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +34%",
                "毛利率 2%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +11%",
                "毛利率 42%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +33%",
                "毛利率 81%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (7%)",
                "毛利率 (65%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "未报告税费",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "同比 +27%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +18%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +37%"
                ]
              }
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损"
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "period": "2023 财年第二季度"
      }
    }
  },
  {
    "key": "block-q3-fy23",
    "company": "Block",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q3-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source totals and components are independently rounded: revenue components sum to $5.642B, cost components to $3.796B, and operating expenses to $1.957B. Gross profit minus operating expenses is rounded to zero while the Source separately reports a $10M operating loss."
    ],
    "revenue": {
      "total": 5.6,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.4,
          "notes": [
            "37% Y/Y",
            "2% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.7,
          "notes": [
            "+9% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.5,
          "notes": [
            "+25% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.042,
          "notes": [
            "(2%) Y/Y",
            "(85%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.4
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.078
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.057
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source does not report tax."
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.9,
        "notes": [
          "+21% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+15% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1,
            "notes": [
              "+27% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.01,
        "notes": [
          "0% margin",
          "+1pp Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 37%",
                "毛利率 2%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +9%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +25%",
                "毛利率 83%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (2%)",
                "毛利率 (85%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未报告税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +21%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +15%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +27%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 0%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未报告净损益",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q4-fy23",
    "company": "Block",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.8,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.5,
          "notes": [
            "+37% Y/Y",
            "3% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.6,
          "notes": [
            "+8% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.6,
          "notes": [
            "+24% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.032,
          "notes": [
            "(9%) Y/Y",
            "(74%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.5
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 0.9
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.056
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.043
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "No separate tax line is shown in the Source."
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2,
        "notes": [
          "+22% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.8,
            "notes": [
              "+18% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.2,
            "notes": [
              "+25% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(2%) margin",
          "+1pp Y/Y"
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
      "Source labels are independently rounded: revenue items sum to $5.732B, cost items to $3.774B, and operating expense items to $2.143B. Gross profit less operating expenses differs from displayed operating loss by $0.1B."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +37%",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +8%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +24%",
                "毛利率 83%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (9%)",
                "毛利率 (74%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "同比 +22%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +18%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +25%"
                ]
              }
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "period": "2023 财年第四季度"
      }
    }
  },
  {
    "key": "block-q1-fy24",
    "company": "Block",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.7,
          "notes": [
            "+26% Y/Y",
            "3% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.5,
          "notes": [
            "+6% Y/Y",
            "42% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.7,
          "notes": [
            "+23% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.033,
          "notes": [
            "(13%) Y/Y",
            "(56%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.9,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.7
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 0.9
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.051
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.4
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.043
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.035
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.3
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
        "value": 2.1,
        "notes": [
          "+22% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.8,
            "notes": [
              "+19% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.3,
            "notes": [
              "+25% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "4% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +26%",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +6%",
                "毛利率 42%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +23%",
                "毛利率 84%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (13%)",
                "毛利率 (56%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +22%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +19%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +25%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "Source amounts are retained literally. Independent rounding gives revenue item sum $5.933B, cost detail sum $3.969B, operating expense sum $1.843B, and gross less operating expenses $0.3B versus displayed operating profit $0.2B."
    ]
  },
  {
    "key": "block-q2-fy24",
    "company": "Block",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.2,
      "notes": [
        "+11% Y/Y",
        "Source rounded revenue items sum to $6.133B versus $6.2B total; revenue minus cost of revenue is $2.3B versus rounded gross profit $2.2B. The $0.15B record tolerance preserves Source literals."
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.6,
          "notes": [
            "+9% Y/Y",
            "3% gross margin"
          ],
          "valueText": "$2.6B"
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.7,
          "notes": [
            "+5% Y/Y",
            "42% gross margin"
          ],
          "valueText": "$1.7B"
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.8,
          "notes": [
            "+22% Y/Y",
            "84% gross margin"
          ],
          "valueText": "$1.8B"
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.033,
          "notes": [
            "(13%) Y/Y",
            "(59%) gross margin"
          ],
          "valueText": "$33M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.9,
        "notes": [
          "Source rounded cost details sum to $3.886B versus $3.9B total."
        ],
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.5,
            "notes": [],
            "valueText": "($2.5B)"
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1,
            "notes": [],
            "valueText": "($1.0B)"
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3,
            "notes": [],
            "valueText": "($0.3B)"
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.068,
            "notes": [],
            "valueText": "($68M)"
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018,
            "notes": [],
            "valueText": "($18M)"
          }
        ],
        "valueText": "($3.9B)"
      },
      "operatingExpenses": {
        "total": 1.9,
        "notes": [
          "Source rounded operating-expense details sum to $1.941B versus $1.9B total."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7,
            "notes": [],
            "valueText": "($0.7B)"
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [],
            "valueText": "($0.5B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
            "notes": [],
            "valueText": "($0.5B)"
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2,
            "notes": [],
            "valueText": "($0.2B)"
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.041,
            "notes": [],
            "valueText": "($41M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.059,
        "notes": [],
        "valueText": "($59M)"
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.058,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.058
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.2,
        "notes": [
          "+20% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+15% Y/Y"
            ],
            "valueText": "$0.9B"
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.3,
            "notes": [
              "+23% Y/Y"
            ],
            "valueText": "$1.3B"
          }
        ],
        "valueText": "$2.2B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "5% margin",
          "+7pp Y/Y"
        ],
        "valueText": "$0.3B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "3% margin",
          "+5pp Y/Y"
        ],
        "valueText": "$0.2B"
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +11%",
            "来源图收入分项取整后合计 $6.133B，总额为 $6.2B；收入减收入成本为 $2.3B，图示取整毛利润为 $2.2B。记录级容差 $0.15B 用于保留图上字面金额。"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +9%",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +5%",
                "毛利率 42%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +22%",
                "毛利率 84%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (13%)",
                "毛利率 (59%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": [
              "来源图成本分项取整后合计 $3.886B，总额为 $3.9B。"
            ],
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图运营费用分项取整后合计 $1.941B，总额为 $1.9B。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "同比 +20%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +15%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +23%"
                ]
              }
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q3-fy24",
    "company": "Block",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.4,
          "notes": [
            "+0% Y/Y",
            "3% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.7,
          "notes": [
            "+3% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.8,
          "notes": [
            "+20% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.037,
          "notes": [
            "(13%) Y/Y",
            "(69%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7,
        "notes": [
          "Source cost details sum to $3.779B versus the independently rounded $3.7B total."
        ],
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.4
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.062
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.017
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "notes": [
          "Source expense details sum to $1.936B versus the independently rounded $1.9B total."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.036
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.043
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
        "value": 2.2,
        "notes": [
          "+19% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+16% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.3,
            "notes": [
              "+21% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "5% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 +0%",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +3%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +20%",
                "毛利率 85%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (13%)",
                "毛利率 (69%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "图示成本明细合计 $3.779B，汇总单独取整为 $3.7B。"
            ],
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "图示费用明细合计 $1.936B，汇总单独取整为 $1.9B。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "同比 +19%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +16%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +21%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "All Source amounts retained. Revenue items sum to $5.937B; revenue less cost is $2.3B versus displayed gross profit $2.2B; operating profit less tax is $0.257B versus displayed net profit $0.3B. Differences fall within combined displayed rounding intervals; record roundingTolerance is $0.15B."
    ]
  },
  {
    "key": "block-q3-fy22",
    "company": "Block",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.5,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 1.8,
          "notes": [
            "(3%) Y/Y",
            "2% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.5,
          "notes": [
            "+17% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.2,
          "notes": [
            "+71% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.043,
          "notes": [
            "+16% Y/Y",
            "(75%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.9,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 1.7
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 0.9
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.2
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.076
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.019
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "product_development",
            "label": "Product",
            "value": 0.5
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.039
          }
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.6,
        "notes": [
          "+38% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.8,
            "notes": [
              "+29% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 0.8,
            "notes": [
              "+51% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.049
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
      "Source totals and line items are independently rounded. Revenue components sum to $4.543B, cost components to $2.895B and operating expenses to $1.539B; the $49M operating loss remains explicit."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (3%)",
                "毛利率 2%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +17%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +71%",
                "毛利率 81%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 +16%",
                "毛利率 (75%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "同比 +38%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +29%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +51%"
                ]
              }
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损"
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图仅列至营业亏损。"
            ]
          }
        },
        "notes": [
          "原图总额和分项分别舍入。收入分项合计 $4.543B，成本分项合计 $2.895B，运营费用分项合计 $1.539B；明确保留 $49M 营业亏损。"
        ],
        "period": "2022 财年第三季度"
      }
    }
  },
  {
    "key": "block-q2-fy25",
    "company": "Block",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q2-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 6.1,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.1,
          "notes": [
            "(18%) Y/Y",
            "4% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.8,
          "notes": [
            "+6% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 2.1,
          "notes": [
            "+15% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.04,
          "notes": [
            "(6%) Y/Y",
            "(89%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.5,
        "notes": [
          "Source rounded cost details sum to $3.590B versus the $3.5B total."
        ],
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.1
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1.1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.076
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.014
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.1,
        "notes": [
          "Source rounded operating expense details sum to $1.934B versus the $2.1B total; independent rounding intervals overlap."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.7
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.3
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.034
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.2
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
        "value": 2.5,
        "notes": [
          "+14% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 1,
            "notes": [
              "+11% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.5,
            "notes": [
              "+16% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "9% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (18%)",
                "毛利率 4%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +6%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +15%",
                "毛利率 85%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (6%)",
                "毛利率 (89%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "图上成本明细合计 $3.590B，总额 $3.5B；分别取整的区间可重合。"
            ],
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "图上运营费用明细合计 $1.934B，总额 $2.1B；分别取整的区间可重合。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +14%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +11%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +16%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +3 个百分点"
            ]
          }
        },
        "notes": [
          "保留原图全部金额；收入、毛利、营业利润、净利润及费用明细分别取整，差异均在对应舍入区间内。"
        ]
      }
    },
    "notes": [
      "All Source literals retained. Independent rounding: revenue components $6.040B vs $6.1B; gross profit + cost $6.0B vs $6.1B; operating profit + expenses $2.6B vs gross profit $2.5B; operating profit + other - tax $0.6B vs net $0.5B. Each is compatible with the displayed rounding intervals."
    ]
  },
  {
    "key": "block-q4-fy22",
    "company": "Block",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q4-fy22.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source amounts are independently rounded: revenue items sum to $4.636B versus $4.7B; gross-profit items sum to $1.6B versus $1.7B; cost items sum to $2.982B versus $3.0B; operating-expense items sum to $1.844B versus $1.8B."
    ],
    "revenue": {
      "total": 4.7,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 1.8,
          "notes": [
            "(7%) Y/Y",
            "2% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.5,
          "notes": [
            "+13% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.3,
          "notes": [
            "+69% Y/Y",
            "82% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.036,
          "notes": [
            "(1%) Y/Y",
            "(79%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 1.8
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 0.9
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.2
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.064
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.018
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.6
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.044
          }
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.7,
        "notes": [
          "+40% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.8,
            "notes": [
              "+22% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 0.8,
            "notes": [
              "+64% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1
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
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (7%)",
                "毛利率 2%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +13%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +69%",
                "毛利率 82%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (1%)",
                "毛利率 (79%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "同比 +40%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +22%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +64%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "未披露净结果",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "block-q4-fy24",
    "company": "Block",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6,
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.4,
          "notes": [
            "(4%) Y/Y",
            "3% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.7,
          "notes": [
            "+5% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.9,
          "notes": [
            "+17% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.031,
          "notes": [
            "(4%) Y/Y",
            "(78%) gross margin"
          ]
        }
      ],
      "notes": [
        "+4% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.7,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.4
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.055
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.017
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.8
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.035
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax benefit",
        "value": -1.6
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.3
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
        "value": 2.3,
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.4,
            "notes": [
              "+16% Y/Y"
            ]
          }
        ],
        "notes": [
          "+14% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.013,
        "notes": [
          "0% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9
      }
    },
    "notes": [
      "Source amounts are independently rounded: revenue items total $6.031B; cost items $3.772B; operating-expense items $2.235B; gross less operating expenses differs from operating profit by $0.013B; net bridge totals $1.913B."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "notes": [
          "来源金额分别取整：收入分项合计 $6.031B；成本分项 $3.772B；运营费用分项 $2.235B；毛利润减运营费用与营业利润相差 $0.013B；净利润桥接合计 $1.913B。"
        ],
        "revenue": {
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (4%)",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +5%",
                "毛利率 41%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +17%",
                "毛利率 84%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (4%)",
                "毛利率 (78%)"
              ]
            }
          ],
          "notes": [
            "同比 +4%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税收收益"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "同比 +14%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +12%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +16%"
                ]
              }
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 +2 个百分点"
            ]
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
    "key": "block-q1-fy25",
    "company": "Block",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/block-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 5.8,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "bitcoin_revenue",
          "label": "Bitcoin",
          "value": 2.3,
          "notes": [
            "(16%) Y/Y",
            "3% gross margin"
          ]
        },
        {
          "id": "transaction_revenue",
          "label": "Transaction",
          "value": 1.6,
          "notes": [
            "+3% Y/Y",
            "42% gross margin"
          ]
        },
        {
          "id": "subscription_services",
          "label": "Subscription and services",
          "value": 1.9,
          "notes": [
            "+12% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "hardware_revenue",
          "label": "Hardware",
          "value": 0.029,
          "notes": [
            "(12%) Y/Y",
            "(83%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.5,
        "items": [
          {
            "id": "bitcoin_cost",
            "label": "Bitcoin",
            "value": 2.3
          },
          {
            "id": "transaction_cost",
            "label": "Transaction",
            "value": 1
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.3
          },
          {
            "id": "hardware_cost",
            "label": "Hardware",
            "value": 0.053
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.015
          }
        ],
        "notes": [
          "Source cost detail totals $3.668B versus $3.5B; combined display rounding intervals overlap."
        ]
      },
      "operatingExpenses": {
        "total": 2,
        "notes": [
          "Source operating-expense detail totals $2.034B versus $2.0B; display rounding."
        ],
        "items": [
          {
            "id": "product_development",
            "label": "Product Development",
            "value": 0.8
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.034
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.038
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
          "id": "other_non_operating",
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
          "+9% Y/Y"
        ],
        "items": [
          {
            "id": "square_gross_profit",
            "label": "Square",
            "value": 0.9,
            "notes": [
              "+9% Y/Y"
            ]
          },
          {
            "id": "cash_app_gross_profit",
            "label": "Cash App",
            "value": 1.4,
            "notes": [
              "+10% Y/Y"
            ]
          }
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "6% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "3% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "bitcoin_revenue",
              "label": "比特币",
              "notes": [
                "同比 (16%)",
                "毛利率 3%"
              ]
            },
            {
              "id": "transaction_revenue",
              "label": "交易",
              "notes": [
                "同比 +3%",
                "毛利率 42%"
              ]
            },
            {
              "id": "subscription_services",
              "label": "订阅与服务",
              "notes": [
                "同比 +12%",
                "毛利率 85%"
              ]
            },
            {
              "id": "hardware_revenue",
              "label": "硬件",
              "notes": [
                "同比 (12%)",
                "毛利率 (83%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源成本分项合计 $3.668B，总额为 $3.5B；差异处于标签合计舍入区间内。"
            ],
            "items": [
              {
                "id": "bitcoin_cost",
                "label": "比特币"
              },
              {
                "id": "transaction_cost",
                "label": "交易"
              },
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "hardware_cost",
                "label": "硬件"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源运营费用分项合计 $2.034B，总额为 $2.0B；差异来自显示舍入。"
            ],
            "items": [
              {
                "id": "product_development",
                "label": "产品开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "同比 +9%"
            ],
            "items": [
              {
                "id": "square_gross_profit",
                "label": "Square 商户生态",
                "notes": [
                  "同比 +9%"
                ]
              },
              {
                "id": "cash_app_gross_profit",
                "label": "Cash App 消费者生态",
                "notes": [
                  "同比 +10%"
                ]
              }
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (5 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        }
      }
    },
    "notes": [
      "Source literals are preserved. Cost detail totals $3.668B versus $3.5B; the $0.168B difference is within the combined rounding intervals of three one-decimal-B details and their total."
    ]
  }
]);
})(window);
