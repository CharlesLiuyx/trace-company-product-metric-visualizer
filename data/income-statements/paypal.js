/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "paypal-q4-fy25",
    "company": "PayPal",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.7,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.8,
          "notes": [
            "+3% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.9,
          "notes": [
            "+10% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 5.1,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 4.3
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.4
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.4
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.7,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+0pp Y/Y"
            ]
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.6,
        "notes": [
          "41% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "17% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +3%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +10%",
                "合作伙伴、推荐、订阅、网关费用和利息"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失以及客户支持",
            "items": [
              {
                "id": "transaction_expense",
                "label": "交易费用"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信贷损失"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 41%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paypal-q1-fy26",
    "company": "PayPal",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.5,
          "notes": [
            "+7% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.9,
          "notes": [
            "+10% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 5.1,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 4.2
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.5
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.4
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+0pp Y/Y"
            ]
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
        "value": 3.4,
        "notes": [
          "40% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "18% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "13% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +7%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +10%",
                "合作伙伴、推荐、订阅、网关费用和利息"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失以及客户支持",
            "items": [
              {
                "id": "transaction_expense",
                "label": "交易费用"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信贷损失"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 40%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paypal-q2-fy26",
    "company": "PayPal",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.7,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.8,
          "notes": [
            "+5% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.9,
          "notes": [
            "+0% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 5.3,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 4.4
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.4
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.5
          }
        ]
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "(0pp) Y/Y"
            ]
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
        "value": 3.4,
        "notes": [
          "40% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "16% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "13% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +5%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +0%",
                "合作伙伴、推荐、订阅、网关费用和利息"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失以及客户支持",
            "items": [
              {
                "id": "transaction_expense",
                "label": "交易费用"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信贷损失"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
                  "同比 (0 个百分点)"
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
              "利润率 40%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paypal-q1-fy25",
    "company": "PayPal",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/paypal-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.8,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7,
          "notes": [
            "(0%) Y/Y",
            "Transaction fee, for payments, conversion cross-border, transfer of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.8,
          "notes": [
            "+17% Y/Y",
            "Partnerships, referral, subscription, gateway fees, interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.5,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.7
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.4
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.4
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.7,
            "notes": [
              "9% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.3,
        "notes": [
          "43% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "20% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "17% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 (0%)",
                "支付、跨境货币兑换与资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +17%",
                "合作伙伴、推荐、订阅、网关费用、利息"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失以及客户支持",
            "items": [
              {
                "id": "transaction_expense",
                "label": "交易费用"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信贷损失"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%"
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
              "利润率 43%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "417",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$417B",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "TPV\n$417B\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1115,
            203,
            150
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "436000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "436M",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Active accounts\n436M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1115,
            380,
            150
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "59.4",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "59.4",
        "basis": "TTM",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "TPA\n59.4\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1115,
            191,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q4-fy24",
    "company": "PayPal",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/paypal-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.6,
          "notes": [
            "+4% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.8,
          "notes": [
            "+5% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.9,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 4
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.4
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.5
          }
        ]
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8,
            "notes": [
              "9% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.05,
            "notes": [
              "1% of revenue"
            ],
            "valueText": "($50M)"
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
      "total": 0.03,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.03,
          "valueText": "($30M)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "42% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "17% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "13% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +4%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +5%",
                "合作伙伴、推荐、订阅、网关费用和利息"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失以及客户支持",
            "items": [
              {
                "id": "transaction_expense",
                "label": "交易费用"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信贷损失"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 7%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%"
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
              "利润率 42%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (4 个百分点)"
            ]
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
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "438",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$438B",
        "notes": [
          "+7% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "TPV\n$438B\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1115,
            204,
            151
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "434000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "434M",
        "notes": [
          "+2% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Active accounts\n434M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1115,
            380,
            151
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "60.6",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "60.6",
        "notes": [
          "+3% Y/Y"
        ],
        "basis": "Transactions per active account (TTM)",
        "quote": "TPA\n60.6\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1115,
            191,
            151
          ]
        }
      }
    ]
  }
]);
})(window);
