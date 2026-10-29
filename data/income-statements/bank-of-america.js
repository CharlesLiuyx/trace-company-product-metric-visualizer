/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "bank-of-america-q1-fy23",
    "company": "Bank of America",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 26.3,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.7,
          "notes": [
            "+21% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.3,
          "notes": [
            "(3%) Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.2,
          "notes": [
            "+19% Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 5.6,
          "notes": [
            "+6% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.5
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.2,
        "notes": [
          "Expense details sum to $16.2B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.9
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9
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
        "label": "Income after noninterest expenses",
        "value": 10.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 9.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 8.2,
        "notes": [
          "+15% Y/Y",
          "$0.94 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +21%",
                "净利率 29%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 (3%)",
                "净利率 17%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +19%",
                "净利率 41%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +6%",
                "净利率 30%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计 $16.2B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +15%",
              "每股收益 $0.94"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +1 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 (7%)"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.4",
        "unit": "%",
        "currency": null,
        "literal": "11.4%",
        "notes": [
          "+1pp Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.4%\n+1pp Y/Y"
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.894",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.894T",
        "notes": [
          "(7%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Average deposits\n$1.894T\n(7%) Y/Y"
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "1.041",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.041T",
        "notes": [
          "(6%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            429,
            149
          ]
        },
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Average loans and leases\n$1.041T\n(6%) Y/Y"
      }
    ]
  },
  {
    "key": "bank-of-america-q4-fy25",
    "company": "Bank of America",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 28.4,
      "notes": [
        "+7% Y/Y",
        "Business-segment revenue totals $29.3B before the $1.0B All Other noninterest loss; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 11.2,
          "notes": [
            "+5% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6.6,
          "notes": [
            "+10% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.2,
          "notes": [
            "+2% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 5.3,
          "notes": [
            "+10% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.4,
        "notes": [
          "Expense detail totals $17.5B because the source rounds individual line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.9
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.9
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2
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
        "label": "Income after noninterest expenses",
        "value": 11,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 9.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.6,
        "notes": [
          "+12% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "业务分部收入合计 $29.3B，扣除 $1.0B 的其他非利息亏损；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +5%",
                "净利率 29%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +10%",
                "净利率 21%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +2%",
                "净利率 33%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +10%",
                "净利率 19%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细因项目取整合计为 $17.5B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +12%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "bank-of-america-q1-fy26",
    "company": "Bank of America",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 30.3,
      "notes": [
        "+7% Y/Y",
        "Business-segment revenue totals $31.1B before the $0.9B All Other noninterest loss; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 11,
          "notes": [
            "+5% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6.7,
          "notes": [
            "+12% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.3,
          "notes": [
            "+5% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 7.1,
          "notes": [
            "+8% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 18.5,
        "notes": [
          "Expense detail totals $18.4B because the source rounds individual line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 11.3
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.9
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1.1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.8
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
        "label": "Income after noninterest expenses",
        "value": 11.8,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 10.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 8.6,
        "notes": [
          "+17% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "业务分部收入合计 $31.1B，扣除 $0.9B 的其他非利息亏损；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +5%",
                "净利率 28%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +12%",
                "净利率 20%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +5%",
                "净利率 33%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +8%",
                "净利率 28%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细因项目取整合计为 $18.4B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +17%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "bank-of-america-q2-fy26",
    "company": "Bank of America",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 31.6,
      "notes": [
        "+15% Y/Y",
        "Business-segment revenue totals $32.4B before the $0.9B All Other noninterest loss; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 11.3,
          "notes": [
            "+5% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6.9,
          "notes": [
            "+16% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.2,
          "notes": [
            "+10% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 8,
          "notes": [
            "+41% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 18.6,
        "notes": [
          "Expense detail totals $18.6B, matching the displayed noninterest-expenses total."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 11
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.9
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.7
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.2
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.4,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.5
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
        "label": "Income after noninterest expenses",
        "value": 13,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 11.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 9.1,
        "notes": [
          "+27% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +15%",
            "业务分部收入合计 $32.4B，扣除 $0.9B 的其他非利息亏损；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +5%",
                "净利率 29%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +16%",
                "净利率 21%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +10%",
                "净利率 33%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +41%",
                "净利率 33%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计为 $18.6B，与图示非利息费用总额一致。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +27%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "bank-of-america-q1-fy24",
    "company": "Bank of America",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q1-fy24.png",
    "roundingTolerance": 0.3,
    "revenue": {
      "total": 25.8,
      "notes": [
        "(2%) Y/Y",
        "Segment aggregate after All Other is $25.976B on an FTE basis; GAAP total revenue is $25.818B. The $158M difference is an FTE adjustment omitted from the chart; displayed values are rounded. Source: https://www.sec.gov/Archives/edgar/data/70858/000007085824000144/bac-03312024ex993.htm"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.2,
          "notes": [
            "(5%) Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.6,
          "notes": [
            "+5% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6,
          "notes": [
            "(4%) Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 5.9,
          "notes": [
            "+5% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.2,
        "notes": [
          "Displayed expense components sum to $17.3B; the total is $17.2B due to rounding."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.6
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.3
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 8.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.7,
        "notes": [
          "(18%) Y/Y",
          "$0.76 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)",
            "分部合计为 FTE 口径 $25.976B，GAAP 总收入 $25.818B，差额 $158M 为 FTE 调整，图中未画出；显示值已四舍五入。披露来源：https://www.sec.gov/Archives/edgar/data/70858/000007085824000144/bac-03312024ex993.htm"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (5%)",
                "净利率 26%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +5%",
                "净利率 18%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (4%)",
                "净利率 33%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +5%",
                "净利率 29%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "显示费用分项合计 $17.3B，总额 $17.2B；差额来自四舍五入。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (18%)",
              "每股收益 $0.76"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.4 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +1% / 环比持平"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +1% / 环比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.8%",
        "basis": "unspecified",
        "notes": [
          "+0.4pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.8%\n+0.4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1190,
            242,
            151
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.91",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.91T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y & Flat Q/Q"
        ],
        "quote": "Average deposits\n$1.91T\n+1% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1190,
            372,
            151
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.05",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.05T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y & Flat Q/Q"
        ],
        "quote": "Average loans and leases\n$1.05T\n+1% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1190,
            431,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q1-fy25",
    "company": "Bank of America",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 27.4,
      "notes": [
        "+6% Y/Y",
        "Displayed segment amounts less All Other total $27.5B; source revenue is $27.4B within rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.5,
          "notes": [
            "+3% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6,
          "notes": [
            "+8% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6,
          "notes": [
            "(0%) Y/Y",
            "32% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 6.6,
          "notes": [
            "+12% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.8,
        "notes": [
          "Displayed expense detail totals $17.9B; source total $17.8B is within rounding."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.9
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.9
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7
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
        "label": "Income after noninterest expenses",
        "value": 9.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.4,
        "notes": [
          "+11% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +3%",
                "净利率 24%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +8%",
                "净利率 17%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (0%)",
                "净利率 32%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +12%",
                "净利率 30%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示费用分项合计 $17.9B；图示总额为 $17.8B，差额在舍入区间内。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +11%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +2% / 环比持平"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +4% / 环比 +1%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.1 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.96",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.96T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & Flat Q/Q"
        ],
        "quote": "Average deposits\n$1.96T\n+2% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1208,
            373,
            150
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.09",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.09T",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y & +1% Q/Q"
        ],
        "quote": "Average loans and leases\n$1.09T\n+4% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1208,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.8%",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.8%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            853,
            1208,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q2-fy23",
    "company": "Bank of America",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q2-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.2,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.5,
          "notes": [
            "+15% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.2,
          "notes": [
            "(4%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.5,
          "notes": [
            "+29% Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 4.9,
          "notes": [
            "+8% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.4
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.2
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 9.2,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.4,
        "notes": [
          "+19% Y/Y",
          "$0.88 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +15%",
                "净利率 27%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 (4%)",
                "净利率 19%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +29%",
                "净利率 41%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +8%",
                "净利率 23%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +19%",
              "每股收益 $0.88"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.1 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (5%) / 环比 (2%)"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.6%",
        "notes": [
          "+1.1pp Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            241,
            148
          ]
        },
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.6%\n+1.1pp Y/Y"
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.877",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.877T",
        "notes": [
          "(5%) Y/Y & (2%) Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            148
          ]
        },
        "basis": "unspecified",
        "quote": "Average deposits\n$1.877T\n(5%) Y/Y & (2%) Q/Q"
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "1.051",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.051T",
        "notes": [
          "+2% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            430,
            148
          ]
        },
        "basis": "unspecified",
        "quote": "Average loans and leases\n$1.051T\n+2% Y/Y"
      }
    ]
  },
  {
    "key": "bank-of-america-q2-fy24",
    "company": "Bank of America",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.4,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.2,
          "notes": [
            "(3%) Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.6,
          "notes": [
            "+6% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6,
          "notes": [
            "(6%) Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 5.5,
          "notes": [
            "+12% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.3,
        "notes": [
          "Source rounded expense details sum to $16.4B versus the $16.3B total."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.7
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7
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
        "label": "Income after noninterest expenses",
        "value": 9.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.9,
        "notes": [
          "(3%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (3%)",
                "净利率 25%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +6%",
                "净利率 18%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (6%)",
                "净利率 33%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +12%",
                "净利率 26%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图费用分项合计 $16.4B；总额 $16.3B，属于舍入差异。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (3%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率"
          },
          {
            "id": "deposits",
            "label": "平均存款"
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "value": "11.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.9%",
        "label": "CET1 ratio",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            241,
            149
          ]
        },
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.9%\n+0.3pp Y/Y"
      },
      {
        "id": "deposits",
        "value": "1.91",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.91T",
        "label": "Average deposits",
        "notes": [
          "+2% Y/Y & Flat Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        },
        "basis": "unspecified",
        "quote": "Average deposits\n$1.91T\n+2% Y/Y & Flat Q/Q"
      },
      {
        "id": "loans",
        "value": "1.05",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.05T",
        "label": "Average loans and leases",
        "notes": [
          "+0.5% Y/Y & Flat Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            149
          ]
        },
        "basis": "unspecified",
        "quote": "Average loans and leases\n$1.05T\n+0.5% Y/Y & Flat Q/Q"
      }
    ]
  },
  {
    "key": "bank-of-america-q2-fy25",
    "company": "Bank of America",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q2-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 26.5,
      "notes": [
        "+4% Y/Y",
        "Displayed segment sum less All Other is $26.6B; displayed revenue is $26.5B due to rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.8,
          "notes": [
            "+6% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.9,
          "notes": [
            "+7% Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 5.7,
          "notes": [
            "(6%) Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 6,
          "notes": [
            "+10% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.2,
        "notes": [
          "Displayed expense components sum to $17.1B; total is $17.2B due to rounding."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.6,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.6
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 9.3,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.7
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.1,
        "notes": [
          "+3% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +6%",
                "净利率 27%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +7%",
                "净利率 17%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (6%)",
                "净利率 30%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +10%",
                "净利率 26%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计为 $17.1B；图示总额为 $17.2B，差异来自舍入。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +3%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +3% / 环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +7% / 环比 +3%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "环比 (0.3 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.97",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.97T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$1.97T\n+3% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1208,
            373,
            150
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "1.13",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.13T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y & +3% Q/Q"
        ],
        "quote": "Average loans and leases\n$1.13T\n+7% Y/Y & +3% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1208,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.5",
        "unit": "%",
        "currency": null,
        "literal": "11.5%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Q/Q"
        ],
        "quote": "CET1 ratio\n11.5%\n(0.3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            853,
            1208,
            233,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q3-fy22",
    "company": "Bank of America",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q3-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24.6,
      "notes": [
        "+8% Y/Y",
        "Segment revenue totals $25.4B before the $0.8B All Other noninterest loss."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.9,
          "notes": [
            "+12% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.4,
          "notes": [
            "+2% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 5.6,
          "notes": [
            "+7% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 4.5,
          "notes": [
            "(1%) Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 15.3,
        "notes": [
          "Displayed expense items total $15.2B versus the $15.3B total; rounding difference."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 8.9
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.2
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.3
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
        "label": "Income after noninterest expenses",
        "value": 9.3,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.1,
        "notes": [
          "(8%) Y/Y",
          "$0.81 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +8%",
            "分部收入合计 $25.4B，扣除 $0.8B 其他非利息亏损。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +12%",
                "净利率 31%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +2%",
                "净利率 22%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +7%",
                "净利率 36%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 (1%)",
                "净利率 24%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示费用明细合计 $15.2B，与 $15.3B 总额有舍入差异。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (8%)",
              "每股收益 $0.81"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +49 基点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "literal": "11.0%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+49bps Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n+49bps Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            149
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.96",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.96T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Average deposits\n$1.96T\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            276,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.03",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.03T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Average loans and leases\n$1.03T\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q3-fy23",
    "company": "Bank of America",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.2,
      "notes": [
        "+3% Y/Y",
        "Displayed segment revenues sum to $26.9B before the $1.8B All Other noninterest loss; rounding accounts for the $0.1B difference."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.5,
          "notes": [
            "+6% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.3,
          "notes": [
            "+2% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.2,
          "notes": [
            "(4%) Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 4.9,
          "notes": [
            "+1% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 15.8,
        "notes": [
          "Displayed expense details sum to $15.9B; the $0.1B difference is within Source rounding."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.7
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.2
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 9.4,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.8,
        "notes": [
          "+10% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +3%",
            "分部收入合计 $26.9B，扣除 $1.8B 其他非利息亏损；$0.1B 差异在原图舍入范围内。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +6%",
                "净利率 27%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +2%",
                "净利率 19%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (4%)",
                "净利率 41%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +1%",
                "净利率 25%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示费用明细合计 $15.9B，$0.1B 差异在原图舍入范围内。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +10%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.9 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (4%) / 环比持平"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "eps",
            "label": "每股收益",
            "notes": []
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.9%",
        "basis": "unspecified",
        "notes": [
          "+0.9pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.9%\n+0.9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            241,
            149
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.876",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.876T",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y & Flat Q/Q"
        ],
        "quote": "Average deposits\n$1.876T\n(4%) Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            276,
            1191,
            371,
            149
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.046",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.046T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Average loans and leases\n$1.046T\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            149
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "value": "0.0009",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.90",
        "basis": "unspecified",
        "notes": [],
        "quote": "$0.90 EPS",
        "anchor": {
          "type": "image-box",
          "box": [
            2410,
            385,
            134,
            30
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q3-fy24",
    "company": "Bank of America",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q3-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.4,
      "notes": [
        "+1% Y/Y",
        "Segment revenue totals $27.6B before the $2.2B All Other noninterest loss."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.4,
          "notes": [
            "(1%) Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.8,
          "notes": [
            "+8% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 5.8,
          "notes": [
            "(6%) Y/Y",
            "32% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 5.6,
          "notes": [
            "+14% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -2.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.5,
        "notes": [
          "Source detail totals $16.4B; displayed amounts are rounded."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.5
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
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 8.9,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.9,
        "notes": [
          "(12%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +1%",
            "分部收入合计 $27.6B，扣除其他非利息亏损 $2.2B。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (1%)",
                "净利率 26%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +8%",
                "净利率 18%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (6%)",
                "净利率 32%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +14%",
                "净利率 27%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示分项合计 $16.4B；差额来自舍入。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (12%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +2% / 环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +1% / 环比 +1%"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.1 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.92",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.92T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$1.92T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1208,
            373,
            150
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "1.06",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.06T",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y & +1% Q/Q"
        ],
        "quote": "Average loans and leases\n$1.06T\n+1% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1208,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.8%",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.8%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            853,
            1208,
            242,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q3-fy25",
    "company": "Bank of America",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 28.1,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 11.2,
          "notes": [
            "+7% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6.3,
          "notes": [
            "+10% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.2,
          "notes": [
            "+7% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 6.2,
          "notes": [
            "+11% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.9
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.8
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1
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
        "label": "Income after noninterest expenses",
        "value": 10.8,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 9.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 8.5,
        "notes": [
          "+23% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +7%",
                "净利率 31%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +10%",
                "净利率 20%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +7%",
                "净利率 34%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +11%",
                "净利率 26%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +23%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +4% / 环比 +1%"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +9% / 环比 +2%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "环比 +0.1 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.99",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.99T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$1.99T\n+4% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1208,
            373,
            153
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.15",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.15T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y & +2% Q/Q"
        ],
        "quote": "Average loans and leases\n$1.15T\n+9% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1208,
            430,
            153
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.6",
        "unit": "%",
        "currency": null,
        "literal": "11.6%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Q/Q"
        ],
        "quote": "CET1 ratio\n11.6%\n+0.1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            852,
            1208,
            235,
            153
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q4-fy22",
    "company": "Bank of America",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q4-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24.5,
      "notes": [
        "+11% Y/Y",
        "Business-segment revenue sums to $26.5B; subtracting the $1.8B All Other loss yields $24.7B versus displayed $24.5B, within combined rounding intervals."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.8,
          "notes": [
            "+9% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.4,
          "notes": [
            "+0% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.4,
          "notes": [
            "+15% Y/Y",
            "39% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 3.9,
          "notes": [
            "(14%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -1.8,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 15.5,
        "notes": [],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.7
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
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
        "label": "Income after noninterest expenses",
        "value": 9,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 7.1,
        "notes": [
          "+2% Y/Y",
          "$0.85 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +9%",
                "净利率 33%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 +0%",
                "净利率 22%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +15%",
                "净利率 39%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 (14%)",
                "净利率 13%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +2%",
              "$0.85 每股收益"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.6 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 (5%)"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.2",
        "unit": "%",
        "currency": null,
        "literal": "11.2%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.6pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.2%\n+0.6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            241,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.93",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.93T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "Average deposits\n$1.93T\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "1.04",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.04T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Average loans and leases\n$1.04T\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            657,
            1192,
            429,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "bank-of-america-q4-fy23",
    "company": "Bank of America",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/bank-of-america-q4-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.3,
          "notes": [
            "(4%) Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 5.2,
          "notes": [
            "(3%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 5.9,
          "notes": [
            "(8%) Y/Y",
            "42% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 4.1,
          "notes": [
            "+6% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -3.5,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 17.7,
        "notes": [],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 9.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.7
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.1
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax expense"
      }
    },
    "otherIncome": {
      "total": 0.02,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
          "value": 0.02
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 4.3,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.1,
        "notes": [
          "(56%) Y/Y",
          "$3.08 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (10%)"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (4%)",
                "净利率 27%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 (3%)",
                "净利率 19%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 (8%)",
                "净利率 42%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +6%",
                "净利率 16%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (56%)",
              "每股收益 $3.08"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "税收利益"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.6 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (1%)；环比 +2%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +1%；环比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.8%",
        "notes": [
          "+0.6pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.8%\n+0.6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1190,
            242,
            150
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.91",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.91T",
        "notes": [
          "(1%) Y/Y & +2% Q/Q"
        ],
        "quote": "Average deposits\n$1.91T\n(1%) Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1190,
            372,
            150
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "1.05",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.05T",
        "notes": [
          "+1% Y/Y & Flat Q/Q"
        ],
        "quote": "Average loans and leases\n$1.05T\n+1% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1190,
            430,
            150
          ]
        },
        "basis": "unspecified"
      }
    ]
  },
  {
    "key": "bank-of-america-q4-fy24",
    "company": "Bank of America",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/bank-of-america-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.3,
      "notes": [
        "+15% Y/Y",
        "Displayed segment figures less All Other total $25.4B; source revenue is $25.3B. Difference is within rounding intervals."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10.6,
          "notes": [
            "+3% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "global_wealth_investment_management",
          "label": [
            "Global Wealth &",
            "Investment Management"
          ],
          "value": 6,
          "notes": [
            "15% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "global_banking",
          "label": "Global Banking",
          "value": 6.1,
          "notes": [
            "+3% Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "global_markets",
          "label": "Global Markets",
          "value": 4.8,
          "notes": [
            "+18% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "all_other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -2.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.8,
        "notes": [
          "Displayed expense detail totals $16.7B versus total $16.8B; difference is within rounding intervals."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10.2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.8
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 1.9
          },
          {
            "id": "product_delivery",
            "label": "Product delivery",
            "value": 0.9
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.7
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.5
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
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Income after noninterest expenses",
        "value": 8.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.7,
        "notes": [
          "+112% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +15%",
            "分部收入扣除其他亏损后为 $25.4B，图示总收入 $25.3B；差异位于舍入区间内。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +3%",
                "净利率 26%"
              ]
            },
            {
              "id": "global_wealth_investment_management",
              "label": "全球财富与投资管理",
              "notes": [
                "同比 15%",
                "净利率 20%"
              ]
            },
            {
              "id": "global_banking",
              "label": "全球银行",
              "notes": [
                "同比 +3%",
                "净利率 35%"
              ]
            },
            {
              "id": "global_markets",
              "label": "全球市场",
              "notes": [
                "同比 +18%",
                "净利率 19%"
              ]
            },
            {
              "id": "all_other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示费用明细合计 $16.7B，与总额 $16.8B 的差异位于舍入区间内。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "information_processing",
                "label": "信息处理"
              },
              {
                "id": "product_delivery",
                "label": "产品交付"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "信用损失拨备"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入",
            "notes": [
              "Schema 适配小计；来源图未显示独立的毛利润节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +112%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +3% / 环比 +2%"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +3% / 环比 +2%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.96",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.96T",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y & +2% Q/Q"
        ],
        "quote": "Average deposits\n$1.96T\n+3% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1208,
            373,
            150
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "1.08",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.08T",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y & +2% Q/Q"
        ],
        "quote": "Average loans and leases\n$1.08T\n+3% Y/Y & +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1208,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.9%",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.9%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            852,
            1208,
            242,
            150
          ]
        }
      }
    ]
  }
]);
})(window);
