/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "shopify-q1-fy23",
    "company": "Shopify",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended Mar. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q1-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1508,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1126,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription solutions",
          "value": 381,
          "notes": [
            "+11% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 130,
              "notes": [
                "+25% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 252,
              "notes": [
                "+4% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 791,
        "notes": [],
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 707,
            "notes": [
              "37% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 84,
            "notes": [
              "78% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 910,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 458,
            "notes": [
              "30% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 287,
            "notes": [
              "19% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 123,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 42,
            "notes": []
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 717,
        "notes": [
          "48% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -193,
        "notes": [
          "(13%) margin",
          "(5pp) Y/Y"
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
        "periodNote": "截至 2023 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +11%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +25%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +4%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": [],
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 37%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 78%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": []
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (13%)",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q3-fy25",
    "company": "Shopify",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q3-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2844,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2145,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 699,
          "notes": [
            "+15% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 196,
              "notes": [
                "+19% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 503,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1453,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1325,
            "notes": [
              "38% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 128,
            "notes": [
              "82% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1048,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 410,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 375,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 148,
            "notes": [
              "5% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 115,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 44
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 35,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 35
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1391,
        "notes": [
          "49% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 343,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 264,
        "notes": [
          "9% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +15%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +19%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +13%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 38%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 82%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 5%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q1-fy26",
    "company": "Shopify",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/shopify-q1-fy26.png",
    "roundingTolerance": 0.02,
    "revenue": {
      "total": 3.17,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2.42,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 0.75,
          "notes": [
            "+21% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 0.242,
              "valueText": "$0.2B",
              "notes": [
                "+21% Y/Y",
                "Source chart rounded subscription sub-lines to $0.2B and $0.5B."
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 0.508,
              "valueText": "$0.5B",
              "notes": [
                "+21% Y/Y",
                "Source chart rounded subscription sub-lines to $0.2B and $0.5B."
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.624,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1.476,
            "notes": [
              "39% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.148,
            "notes": [
              "80% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.164,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.496,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.437,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.115,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.116,
            "notes": [
              "4% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.022,
        "valueText": "$22M"
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.941,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.941
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.546,
        "notes": [
          "49% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.382,
        "notes": [
          "12% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.581
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +21%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +21%",
                    "来源图将订阅收入子项四舍五入为 $0.2B 和 $0.5B。"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +21%",
                    "来源图将订阅收入子项四舍五入为 $0.2B 和 $0.5B。"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 39%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 80%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
                ]
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
              "id": "investments",
              "label": "投资"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "shopify-q4-fy25",
    "company": "Shopify",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/shopify-q4-fy25.png",
    "roundingTolerance": 0.03,
    "revenue": {
      "total": 3.672,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2.895,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 0.777,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 0.221,
              "valueText": "$0.2B",
              "notes": [
                "+17% Y/Y",
                "Source chart rounds subscription sub-lines to $0.2B and $0.6B."
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 0.556,
              "valueText": "$0.6B",
              "notes": [
                "+17% Y/Y",
                "Source chart rounds subscription sub-lines to $0.2B and $0.6B."
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.979,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1.831,
            "notes": [
              "37% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.148,
            "notes": [
              "81% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.062,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.433,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.39,
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.125,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.114,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.112,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.112
        }
      ]
    },
    "otherExpenses": {
      "total": 0.149,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.149
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.693,
        "notes": [
          "46% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.631,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.594,
        "notes": [
          "16% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +17%",
                    "来源图将订阅收入子项四舍五入为 $0.2B 和 $0.6B。"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +17%",
                    "来源图将订阅收入子项四舍五入为 $0.2B 和 $0.6B。"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 37%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 81%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 11%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "investments",
              "label": "投资"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (2 个百分点)"
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
              "利润率 16%",
              "同比 +10 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q2-fy26",
    "company": "Shopify",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/shopify-q2-fy26.png",
    "roundingTolerance": 0.005,
    "revenue": {
      "total": 3.583,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2.781,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 0.802,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 0.2,
              "notes": [
                "+18% Y/Y",
                "Source-rounded subscription split; precise component amounts are not disclosed in the supplied chart."
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 0.6,
              "notes": [
                "+24% Y/Y",
                "Source-rounded subscription split; precise component amounts are not disclosed in the supplied chart."
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.875,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1.712,
            "notes": [
              "38% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 0.163,
            "notes": [
              "80% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.22,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.498,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.445,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.136,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 0.141,
            "notes": [
              "4% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.049,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.049,
          "notes": [
            "Derived from official operating income $488M minus net income excluding equity investments $439M; includes taxes."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.708,
        "notes": [
          "48% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.488,
        "notes": [
          "14% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit excluding equity investment impacts",
        "value": 0.439,
        "notes": [
          "12% margin",
          "+6pp Y/Y",
          "The Source chart margin comparison conflicts with the official figures on the same basis."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +22%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +18%",
                    "来源仅提供四舍五入的订阅收入子项，未披露精确金额。"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +24%",
                    "来源仅提供四舍五入的订阅收入子项，未披露精确金额。"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 38%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 80%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 4%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他",
              "notes": [
                "按官方营业利润 $488M 减去剔除股权投资影响的净利润 $439M 推导，包含税项。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "剔除股权投资影响的净利润",
            "notes": [
              "利润率 12%",
              "同比 +6 个百分点",
              "同比变化保留自原图，与官方同口径数据不一致。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q1-fy24",
    "company": "Shopify",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q1-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1861,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1350,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 511,
          "notes": [
            "+34% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 138,
              "notes": [
                "+20% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 373,
              "notes": [
                "+40% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 904,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 809,
            "notes": [
              "40% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 95,
            "notes": [
              "81% gross margin"
            ]
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 871,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 361,
            "notes": [
              "19% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 335,
            "notes": [
              "18% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 51,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 124,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 359,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 359,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 957,
        "notes": [
          "51% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 86,
        "notes": [
          "5% margin",
          "+17pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net loss",
        "value": -273,
        "notes": []
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +34%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +20%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +40%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 40%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 81%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 51%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +17 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": []
          }
        }
      }
    }
  },
  {
    "key": "shopify-q1-fy25",
    "company": "Shopify",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q1-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2360,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1740,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 620,
          "notes": [
            "+21% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 174,
              "notes": [
                "+26% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 446,
              "notes": [
                "+20% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1191,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1068,
            "notes": [
              "39% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 123,
            "notes": [
              "80% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 966,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 405,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 377,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 109,
            "notes": [
              "5% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 75,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 885,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 885,
          "notes": [
            "Investments & taxes"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1169,
        "notes": [
          "50% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 203,
        "notes": [
          "9% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -682
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +21%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +26%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +20%"
                  ]
                }
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
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 39%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 80%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他",
              "notes": [
                "投资与税项"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_loss",
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "shopify-q2-fy23",
    "company": "Shopify",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1694,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1250,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 444,
          "notes": [
            "+21% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 120,
              "notes": [
                "+21% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 324,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 859,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 774,
            "notes": [
              "38% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 85,
            "notes": [
              "81% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 2471,
        "items": [
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 1340,
            "notes": [
              "79% of revenue",
              "Non-recurring"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 648,
            "notes": [
              "38% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 321,
            "notes": [
              "19% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 131,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 31
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
        "value": 835,
        "notes": [
          "49% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "notes": [
          "(97%) margin",
          "(82pp) Y/Y"
        ],
        "value": -1636
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
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "revenue": {
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +21%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +21%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            }
          ],
          "notes": [
            "同比 +31%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 38%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 81%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 79%",
                  "非经常性"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (97%)",
              "同比 (82 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图仅展示至营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q2-fy24",
    "company": "Shopify",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q2-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2045,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1482,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 563,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 146,
              "notes": [
                "+22% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 417,
              "notes": [
                "+29% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1000,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 903,
            "notes": [
              "39% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 97,
            "notes": [
              "83% gross margin"
            ]
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 804,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 353,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 349,
            "notes": [
              "17% of revenue",
              "(21pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 42,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 60,
            "notes": [
              "3% of revenue",
              "(5pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 32,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 38,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 38,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1045,
        "notes": [
          "51% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 241,
        "notes": [
          "12% margin",
          "+108pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 171,
        "notes": [
          "8% margin",
          "+86pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +27%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +22%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +29%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 39%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 83%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (21 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
                  "同比 (5 个百分点)"
                ]
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
              "id": "other_expense",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 51%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +108 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +86 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q2-fy25",
    "company": "Shopify",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2680,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2024,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 656,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 184,
              "notes": [
                "+25% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 472,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1378,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1257,
            "notes": [
              "38% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 121,
            "notes": [
              "82% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1011,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 415,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 394,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 80,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 122,
            "notes": [
              "5% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 615,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 615
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
        "value": 1302,
        "notes": [
          "49% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 291,
        "notes": [
          "11% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 906,
        "notes": [
          "34% margin",
          "+25pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +25%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +13%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 38%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 82%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 3%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +25 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收益"
            }
          ]
        }
      }
    }
  },
  {
    "key": "shopify-q3-fy22",
    "company": "Shopify",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q3-fy22.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1366,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 990,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription solutions",
          "value": 376,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "mrr_core",
              "label": "MRR Core",
              "value": 218,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 102,
              "notes": [
                "+31% Y/Y"
              ]
            },
            {
              "id": "platform_fee",
              "label": "Platform Fee",
              "value": 56,
              "notes": [
                "+20% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 704,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 622,
            "notes": [
              "37% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 82,
            "notes": [
              "78% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1008,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 412,
            "notes": [
              "30% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 302,
            "notes": [
              "22% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 255,
            "notes": [
              "19% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 38
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
        "value": 662,
        "notes": [
          "48% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -345,
        "notes": [
          "(25%) margin",
          "(25pp) Y/Y"
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
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "mrr_core",
                  "label": "核心月度经常性收入",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +31%"
                  ]
                },
                {
                  "id": "platform_fee",
                  "label": "平台费用",
                  "notes": [
                    "同比 +20%"
                  ]
                }
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
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 37%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 78%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 (25 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截止到营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q3-fy23",
    "company": "Shopify",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q3-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1714,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1228,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 486,
          "notes": [
            "+29% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 126,
              "notes": [
                "+24% Y/Y",
                "Based on MRR"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 360,
              "notes": [
                "+31% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 813,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 725,
            "notes": [
              "41% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 88,
            "notes": [
              "82% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 779,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 313,
            "notes": [
              "18% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 295,
            "notes": [
              "17% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 137,
            "notes": [
              "8% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 34
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
      "total": 606,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 606
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
        "value": 901,
        "notes": [
          "53% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 122,
        "notes": [
          "7% margin",
          "+32pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 718,
        "notes": [
          "42% margin",
          "+54pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +29%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +24%",
                    "基于月度经常性收入"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +31%"
                  ]
                }
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
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 41%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 82%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 53%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +32 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 42%",
              "同比 +54 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q3-fy24",
    "company": "Shopify",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q3-fy24.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 2162,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1552,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 610,
          "notes": [
            "+26% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 165,
              "notes": [
                "+30% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 445,
              "notes": [
                "+24% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1044,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 936,
            "notes": [
              "40% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 108,
            "notes": [
              "82% gross margin"
            ]
          }
        ],
        "notes": []
      },
      "operatingExpenses": {
        "total": 835,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 331,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 332,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 58,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114,
            "notes": [
              "5% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 61,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 61
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
        "value": 1118,
        "notes": [
          "52% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 283,
        "notes": [
          "13% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit excluding equity investment impacts",
        "value": 344,
        "notes": [
          "16% margin",
          "+6pp Y/Y",
          "Excluding equity",
          "investments impact"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "profit": {
          "net": {
            "label": "剔除股权投资影响的净利润",
            "notes": [
              "利润率 16%",
              "同比 +6 个百分点",
              "剔除股权投资影响"
            ]
          },
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 52%",
              "同比下降 1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +6 个百分点"
            ]
          }
        },
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +26%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +30%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +24%"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 40%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 82%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 15%",
                  "同比下降 2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比下降 3 个百分点"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": [
                  "占收入 3%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比下降 3 个百分点"
                ]
              }
            ]
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
        }
      }
    }
  },
  {
    "key": "shopify-q4-fy22",
    "company": "Shopify",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q4-fy22.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1735,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 1334,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription solutions",
          "value": 400,
          "notes": [
            "+14% Y/Y"
          ],
          "children": [
            {
              "id": "mrr_core",
              "label": "MRR Core",
              "value": 232,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 108,
              "notes": [
                "+27% Y/Y"
              ]
            },
            {
              "id": "platform_fee",
              "label": "Platform Fee",
              "value": 60,
              "notes": [
                "+20% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 936,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 851,
            "notes": [
              "36% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 86,
            "notes": [
              "79% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 987,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 441,
            "notes": [
              "25% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 298,
            "notes": [
              "17% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 215,
            "notes": [
              "12% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 34
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 799,
        "notes": [
          "46% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -189,
        "notes": [
          "(11%) margin",
          "(12pp) Y/Y"
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
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +14%"
              ],
              "children": [
                {
                  "id": "mrr_core",
                  "label": "核心月度经常性收入",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +27%"
                  ]
                },
                {
                  "id": "platform_fee",
                  "label": "平台费用",
                  "notes": [
                    "同比 +20%"
                  ]
                }
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
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 36%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 79%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 (12 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q4-fy23",
    "company": "Shopify",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q4-fy23.png",
    "roundingTolerance": 0.001,
    "revenue": {
      "total": 2144,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": [
            "Merchant",
            "Solutions"
          ],
          "value": 1619,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": [
            "Subscription",
            "Solutions"
          ],
          "value": 525,
          "notes": [
            "+31% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 131,
              "notes": [
                "+22% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 394,
              "notes": [
                "+35% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1082,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 985,
            "notes": [
              "39% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 97,
            "notes": [
              "82% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 773,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 317,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 311,
            "notes": [
              "15% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 100,
            "notes": [
              "5% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 45,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 25
      }
    },
    "otherIncome": {
      "total": 393,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 393
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
        "label": [
          "Gross",
          "profit"
        ],
        "value": 1062,
        "notes": [
          "50% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating",
          "profit"
        ],
        "value": 289,
        "notes": [
          "13% margin",
          "+24pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": [
          "Net",
          "profit"
        ],
        "value": 657,
        "notes": [
          "31% margin",
          "+67pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "items": [
            {
              "id": "merchant_solutions",
              "label": "商家解决方案",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "subscription_solutions",
              "label": "订阅解决方案",
              "notes": [
                "同比 +31%"
              ],
              "children": [
                {
                  "id": "shopify_plus",
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +22%"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他",
                  "notes": [
                    "同比 +35%"
                  ]
                }
              ]
            }
          ],
          "notes": [
            "同比 +24%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "merchant_cost",
                "label": "商家",
                "notes": [
                  "毛利率 39%"
                ]
              },
              {
                "id": "subscription_cost",
                "label": "订阅",
                "notes": [
                  "毛利率 82%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "loan_losses",
                "label": "贷款损失",
                "notes": []
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +24 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 +67 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "shopify-q4-fy24",
    "company": "Shopify",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/shopify-q4-fy24.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 2812,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "merchant_solutions",
          "label": "Merchant Solutions",
          "value": 2146,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "subscription_solutions",
          "label": "Subscription Solutions",
          "value": 666,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "shopify_plus",
              "label": "Shopify Plus",
              "value": 173,
              "notes": [
                "+32% Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other",
              "value": 493,
              "notes": [
                "+25% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1460,
        "items": [
          {
            "id": "merchant_cost",
            "label": "Merchant",
            "value": 1326,
            "notes": [
              "38% gross margin"
            ]
          },
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 134,
            "notes": [
              "80% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 887,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 351,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 348,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 112,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "loan_losses",
            "label": "Loan losses",
            "value": 76,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 128
      }
    },
    "otherIncome": {
      "total": 956,
      "items": [
        {
          "id": "investments",
          "label": "Investments (net)",
          "value": 956
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
        "value": 1352,
        "notes": [
          "48% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 465,
        "notes": [
          "17% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1293
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "items": [
            {
              "label": "商家解决方案",
              "notes": [
                "同比 +33%"
              ],
              "id": "merchant_solutions"
            },
            {
              "label": "订阅解决方案",
              "notes": [
                "同比 +27%"
              ],
              "id": "subscription_solutions",
              "children": [
                {
                  "label": "Shopify Plus 方案",
                  "notes": [
                    "同比 +32%"
                  ],
                  "id": "shopify_plus"
                },
                {
                  "label": "其他",
                  "notes": [
                    "同比 +25%"
                  ],
                  "id": "other_subscription"
                }
              ]
            }
          ],
          "notes": [
            "同比 +31%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [],
            "id": "cost_of_revenue",
            "items": [
              {
                "label": "商家",
                "notes": [
                  "毛利率 38%"
                ],
                "id": "merchant_cost"
              },
              {
                "label": "订阅",
                "notes": [
                  "毛利率 80%"
                ],
                "id": "subscription_cost"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ],
                "id": "rnd"
              },
              {
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ],
                "id": "sm"
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ],
                "id": "ga"
              },
              {
                "label": "贷款损失",
                "notes": [
                  "占收入 3%",
                  "同比 +1 个百分点"
                ],
                "id": "loan_losses"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [],
            "id": "tax"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "投资（净额）",
              "notes": [],
              "id": "investments"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 (1 个百分点)"
            ],
            "id": "gross_profit"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +3 个百分点"
            ],
            "id": "operating_profit"
          },
          "net": {
            "label": "净利润",
            "notes": [],
            "id": "net_profit"
          }
        }
      }
    }
  }
]);
})(window);
