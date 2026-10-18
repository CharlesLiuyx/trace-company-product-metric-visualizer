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
    "sourceImage": "input/processed/paypal-q1-fy25.png",
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
            39,
            1452,
            264,
            195
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
            320,
            1452,
            495,
            195
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
            829,
            1452,
            249,
            195
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
            39,
            1452,
            266,
            197
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
            320,
            1452,
            495,
            197
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
            829,
            1452,
            249,
            197
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q1-fy23",
    "company": "PayPal",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 6.4,
          "notes": [
            "+6% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "+39% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.2,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.3
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
        "total": 1.8,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.7,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "7% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2,
            "notes": [
              "2% of revenue"
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
        "value": 2.8,
        "notes": [
          "40% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "14% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "11% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +6%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +39%",
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
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 2%"
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
              "利润率 40%",
              "同比 (2 个百分点)"
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
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +3 个百分点"
            ]
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
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +12%（固定汇率）"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "355",
        "unit": "B",
        "currency": "USD",
        "literal": "$355B",
        "notes": [
          "+12% Y/Y FXN"
        ],
        "basis": "Total Payment Volume",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1158,
            203,
            148
          ]
        },
        "comparison": "eq",
        "quote": "TPV\n$355B\n+12% Y/Y FXN"
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "433000000",
        "unit": "count",
        "currency": null,
        "literal": "433M",
        "notes": [
          "+1% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1158,
            380,
            148
          ]
        },
        "comparison": "eq",
        "quote": "Active accounts\n433M\n+1% Y/Y"
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "53.1",
        "unit": "count",
        "currency": null,
        "literal": "53.1",
        "notes": [
          "+13% Y/Y"
        ],
        "basis": "Transactions per active account (TTM)",
        "anchor": {
          "type": "image-box",
          "box": [
            638,
            1158,
            189,
            148
          ]
        },
        "comparison": "eq",
        "quote": "TPA\n53.1\n+13% Y/Y"
      }
    ]
  },
  {
    "key": "paypal-q1-fy24",
    "company": "PayPal",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paypal-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.7,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7,
          "notes": [
            "+11% Y/Y",
            "Transaction fee, for payments, conversion cross-border, transfer of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "(2%) Y/Y",
            "Partnerships, referral, subscription, gateway fees, interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.7,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.9
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.3
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.5
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
              "10% of revenue",
              "(1pp) Y/Y"
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
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "5% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2,
            "notes": [
              "3% of revenue"
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
      "total": 0.041,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.041,
          "valueText": "$41M"
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
        "value": 3,
        "notes": [
          "39% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "12% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +11%",
                "支付、跨境货币兑换与资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 (2%)",
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
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 5%",
                  "同比 (1 个百分点)"
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
                  "占收入 3%"
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
              "利润率 39%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +14% FXN"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "404",
        "unit": "B",
        "currency": "USD",
        "literal": "$404B",
        "notes": [
          "+14% Y/Y FXN"
        ],
        "basis": "unspecified",
        "comparison": "eq",
        "quote": "TPV\n$404B\n+14% Y/Y FXN",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1158,
            203,
            148
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "427000000",
        "unit": "count",
        "currency": null,
        "literal": "427M",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "comparison": "eq",
        "quote": "Active accounts\n427M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1158,
            380,
            148
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "60.0",
        "unit": "count",
        "currency": null,
        "literal": "60.0",
        "notes": [
          "+13% Y/Y"
        ],
        "basis": "TTM",
        "comparison": "eq",
        "quote": "TPA\n60.0\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1158,
            190,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q2-fy23",
    "company": "PayPal",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paypal-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.3,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 6.6,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "+37% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.4,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.5
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
        "total": 1.7,
        "items": [
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.7,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.024,
            "valueText": "($24M)"
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
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
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
        "value": 2.9,
        "notes": [
          "39% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "16% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "14% margin",
          "+19pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "377",
        "unit": "B",
        "currency": "USD",
        "literal": "$377B",
        "notes": [
          "+11% Y/Y FXN"
        ],
        "basis": "Total Payment Volume",
        "comparison": "eq",
        "quote": "TPV\n$377B\n+11% Y/Y FXN",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1155,
            203,
            151
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "431000000",
        "unit": "count",
        "currency": null,
        "literal": "431M",
        "notes": [
          "+0.5% Y/Y"
        ],
        "basis": "unspecified",
        "comparison": "eq",
        "quote": "Active accounts\n431M\n+0.5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1155,
            380,
            151
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "54.7",
        "unit": "count",
        "currency": null,
        "literal": "54.7",
        "notes": [
          "+12% Y/Y"
        ],
        "basis": "Transactions per active account (TTM)",
        "comparison": "eq",
        "quote": "TPA\n54.7\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1155,
            190,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +37%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用、交易与信贷损失及客户支持",
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
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比下降 2 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 10%",
                  "同比下降 2 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
                  "同比下降 1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组"
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
              "利润率 39%",
              "同比下降 2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比上升 4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比上升 19 个百分点"
            ]
          }
        },
        "period": "2023 财年第二季度",
        "periodNote": "",
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +11% FXN"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +0.5%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paypal-q2-fy24",
    "company": "PayPal",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.9,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.6,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.9
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.3
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
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+1pp Y/Y"
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
        "value": 3.2,
        "notes": [
          "40% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 (0%)"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +11%"
            ]
          }
        ],
        "costs": {
          "costOfRevenue": {
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
          }
        }
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
          "+11% Y/Y"
        ],
        "quote": "TPV\n$417B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1158,
            202,
            148
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "429000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "429M",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "Active accounts\n429M\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1156,
            380,
            150
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "60.9",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "60.9",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "TPA\n60.9\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1158,
            190,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q2-fy25",
    "company": "PayPal",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paypal-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.3,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.4,
          "notes": [
            "+4% Y/Y",
            "Transaction fee, for payments, conversion cross-border, transfer of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.8,
          "notes": [
            "+16% Y/Y",
            "Partnerships, referral, subscription, gateway fees, interest"
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
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "7% of revenue",
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.4,
        "notes": [
          "41% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "18% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +4%",
                "支付、跨境货币兑换与资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +16%",
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
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 7%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
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
              "利润率 41%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +6%"
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
              "同比 (4%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "443",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$443B",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "TPV\n$443B\n+6% Y/Y",
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
        "value": "438000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "438M",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Active accounts\n438M\n+2% Y/Y",
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
        "value": "58",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "58",
        "basis": "TTM",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "TPA\n58\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1115,
            190,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q3-fy22",
    "company": "PayPal",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.8,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 6.2,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.6,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "transaction_expense",
        "label": "Transaction expense",
        "value": 3
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.5
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit",
            "value": 0.4
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
        "value": 0.2
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.9,
        "notes": [
          "56% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "16% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "19% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.5
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "literal": "$337B",
        "value": "337",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "quote": "TPV $337B +9% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1156,
            203,
            150
          ]
        },
        "notes": [
          "+9% Y/Y"
        ]
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "literal": "432M",
        "value": "432000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Active accounts 432M +4% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1156,
            380,
            150
          ]
        },
        "notes": [
          "+4% Y/Y"
        ]
      },
      {
        "id": "tpa",
        "label": "TPA",
        "literal": "50.1",
        "value": "50.1",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "TPA 50.1 +13% Y/Y",
        "basis": "TTM",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1156,
            190,
            150
          ]
        },
        "notes": [
          "+13% Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入"
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "交易费用"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "general_administrative",
                "label": "一般及行政"
              },
              {
                "id": "customer_support",
                "label": "客户支持"
              },
              {
                "id": "transaction_credit_losses",
                "label": "交易与信用损失"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV"
          },
          {
            "id": "active-accounts",
            "label": "活跃账户"
          },
          {
            "id": "tpa",
            "label": "TPA"
          }
        ]
      }
    }
  },
  {
    "key": "paypal-q3-fy23",
    "company": "PayPal",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paypal-q3-fy23.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 7.4,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 6.7,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.8,
          "notes": [
            "+25% Y/Y"
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
            "value": 3.6,
            "notes": []
          },
          {
            "id": "transaction_credit_losses",
            "label": "Transaction & credit losses",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "customer_support",
            "label": "Customer support",
            "value": 0.5,
            "notes": []
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.7,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.039,
            "notes": [],
            "valueText": "($39M)"
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
        "value": 2.9,
        "notes": [
          "39% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "16% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "14% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +25%"
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
                "label": "技术与开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "general_administrative",
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +13% FXN"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "388",
        "unit": "B",
        "currency": "USD",
        "literal": "$388B",
        "notes": [
          "+13% Y/Y FXN"
        ],
        "basis": "unspecified",
        "comparison": "eq",
        "quote": "TPV\n$388B\n+13% Y/Y FXN",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1156,
            203,
            150
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "428000000",
        "unit": "count",
        "currency": null,
        "literal": "428M",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "comparison": "eq",
        "quote": "Active accounts\n428M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1156,
            380,
            150
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "56.6",
        "unit": "count",
        "currency": null,
        "literal": "56.6",
        "notes": [
          "+13% Y/Y"
        ],
        "basis": "Transactions per active account (TTM)",
        "comparison": "eq",
        "quote": "TPA\n56.6\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1156,
            190,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "paypal-q3-fy24",
    "company": "PayPal",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.8,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.1,
          "notes": [
            "+6% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.8,
          "notes": [
            "+2% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.6,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.8
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
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
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
        "value": 3.2,
        "notes": [
          "41% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "18% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +6%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +2%",
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
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 41%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
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
              "同比 +9%"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "423",
        "unit": "B",
        "currency": "USD",
        "literal": "$423B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "TPV\n$423B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1115,
            202,
            150
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "432000000",
        "unit": "count",
        "currency": null,
        "literal": "432M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Active accounts\n432M\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1115,
            382,
            150
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "61.4",
        "unit": "count",
        "currency": null,
        "literal": "61.4",
        "comparison": "eq",
        "basis": "Transactions per active account (TTM)",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "TPA\n61.4\n+9% Y/Y",
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
    "key": "paypal-q3-fy25",
    "company": "PayPal",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paypal-q3-fy25.png",
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
            "+6% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.9,
          "notes": [
            "+15% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 5,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 4.1
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
              "10% of revenue",
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
              "+1pp Y/Y"
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
      "total": 0.013,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.013,
          "valueText": "$13M"
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
        "value": 3.4,
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
          "18% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "15% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +6%",
                "支付、货币兑换、跨境支付和资金转账的交易手续费"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +15%",
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
                  "同比 +1 个百分点"
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
              "利润率 18%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "tpv",
            "label": "TPV",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "458",
        "unit": "B",
        "currency": "USD",
        "literal": "$458B",
        "notes": [
          "+8% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1115,
            203,
            150
          ]
        },
        "comparison": "eq",
        "quote": "TPV\n$458B\n+8% Y/Y"
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "438000000",
        "unit": "count",
        "currency": null,
        "literal": "438M",
        "notes": [
          "+1% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1115,
            380,
            150
          ]
        },
        "comparison": "eq",
        "quote": "Active accounts\n438M\n+1% Y/Y"
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "58",
        "unit": "count",
        "currency": null,
        "literal": "58",
        "notes": [
          "(6%) Y/Y"
        ],
        "basis": "TTM",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1115,
            190,
            150
          ]
        },
        "comparison": "eq",
        "quote": "TPA\n58\n(6%) Y/Y"
      }
    ]
  },
  {
    "key": "paypal-q4-fy22",
    "company": "PayPal",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 6.7,
          "notes": [
            "+5% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "+26% Y/Y",
            "Partnerships, referrals, subscriptions, gateway fees, and interest"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Transaction expense, transaction and credit losses, and customer support",
        "value": 4.2,
        "items": [
          {
            "id": "transaction_expense",
            "label": "Transaction expense",
            "value": 3.3
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
        "total": 1.9,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8
          },
          {
            "id": "sales_marketing",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "general_administrative",
            "label": "G&A",
            "value": 0.5
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
        "value": 3.1,
        "notes": [
          "42% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "12% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
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
                "同比 +26%",
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
                "label": "技术与开发"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "general_administrative",
                "label": "一般及行政费用"
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
              "利润率 42%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +2 个百分点"
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
              "同比 +9% FXN"
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
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "357",
        "unit": "B",
        "currency": "USD",
        "literal": "$357B",
        "comparison": "eq",
        "notes": [
          "+9% Y/Y FXN"
        ],
        "quote": "TPV\n$357B\n+9% Y/Y FXN",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1158,
            202,
            148
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "435000000",
        "unit": "count",
        "currency": null,
        "literal": "435M",
        "comparison": "eq",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Active accounts\n435M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1158,
            380,
            148
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "51.4",
        "unit": "count",
        "currency": null,
        "literal": "51.4",
        "comparison": "eq",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "TPA\n51.4\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1158,
            191,
            148
          ]
        },
        "basis": "Transactions per active account (TTM)"
      }
    ]
  },
  {
    "key": "paypal-q4-fy23",
    "company": "PayPal",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paypal-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "transaction_revenues",
          "label": "Transaction revenues",
          "value": 7.3,
          "notes": [
            "+9% Y/Y",
            "Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds"
          ]
        },
        {
          "id": "other_value_added_services",
          "label": "Other value-added services",
          "value": 0.7,
          "notes": [
            "+9% Y/Y",
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
        "total": 1.5,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & Development",
            "value": 0.8,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
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
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": -0.3,
            "notes": []
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
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
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
        "value": 3.1,
        "notes": [
          "40% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "17% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "transaction_revenues",
              "label": "交易收入",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "other_value_added_services",
              "label": "其他增值服务",
              "notes": [
                "同比 +9%"
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
                  "同比 (2 个百分点)"
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
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": []
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
              "利润率 22%",
              "同比 +5 个百分点"
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
              "同比 +13% FXN"
            ]
          },
          {
            "id": "active-accounts",
            "label": "活跃账户",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "tpa",
            "label": "TPA",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "tpv",
        "label": "TPV",
        "value": "410",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$410B",
        "notes": [
          "+13% Y/Y FXN"
        ],
        "basis": "unspecified",
        "quote": "TPV\n$410B\n+13% Y/Y FXN",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1158,
            203,
            148
          ]
        }
      },
      {
        "id": "active-accounts",
        "label": "Active accounts",
        "value": "426000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "426M",
        "notes": [
          "(2%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Active accounts\n426M\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1156,
            380,
            148
          ]
        }
      },
      {
        "id": "tpa",
        "label": "TPA",
        "value": "58.7",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "58.7",
        "notes": [
          "+14% Y/Y"
        ],
        "basis": "Transactions per active account (TTM)",
        "quote": "TPA\n58.7\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            637,
            1158,
            190,
            148
          ]
        }
      }
    ],
    "notes": [
      "Source rounded operating expense total ($1.5B) differs from its displayed components ($0.5B + $0.8B + $0.6B - $0.3B = $1.6B); restructuring is a benefit. Source rounded gross less operating expenses ($1.6B) differs from operating profit ($1.7B)."
    ]
  }
]);
})(window);
