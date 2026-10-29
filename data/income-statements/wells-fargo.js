/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "wells-fargo-q2-fy26",
    "company": "Wells Fargo",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 22.6,
      "notes": [
        "+9% Y/Y",
        "Business-segment revenue totals $22.7B before the $0.1B Other adjustment; displayed figures are rounded."
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
            "+6% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "+6% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5.4,
          "notes": [
            "+16% Y/Y",
            "43% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+13% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.1,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "notes": [
          "Expense detail totals $13.8B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.9
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
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
        "value": 1.4
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
        "value": 8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.6,
        "notes": [
          "+20% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +9%",
            "业务分部收入合计 $22.7B，图中另列 $0.1B 的其他调整；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +6%",
                "净利率 22%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +6%",
                "净利率 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +16%",
                "净利率 43%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +13%",
                "净利率 14%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "来源图以不带符号的方式显示取整后的金额。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计为 $13.8B；图中数字经四舍五入。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "advertising",
                "label": "广告"
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
              "同比 +20%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q1-fy26",
    "company": "Wells Fargo",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+6% Y/Y",
        "Business-segment revenue totals $22.3B before the $0.8B Other adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 10,
          "notes": [
            "+7% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "+7% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5.3,
          "notes": [
            "+4% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+14% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.8,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 14.3,
        "notes": [
          "Expense detail totals $14.4B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.4
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
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
        "value": 7.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.3,
        "notes": [
          "+7% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%",
            "业务分部收入合计 $22.3B，图中另列 $0.8B 的其他调整；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +7%",
                "净利率 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +7%",
                "净利率 33%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +4%",
                "净利率 34%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +14%",
                "净利率 12%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "来源图以不带符号的方式显示取整后的金额。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计为 $14.4B；图中数字经四舍五入。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "advertising",
                "label": "广告"
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
              "同比 +7%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy25",
    "company": "Wells Fargo",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.3,
      "notes": [
        "+4% Y/Y",
        "Business-segment revenue totals $21.7B before the $0.3B Other adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.6,
          "notes": [
            "+7% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.1,
          "notes": [
            "(3%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "+0% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4.4,
          "notes": [
            "+10% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.3,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "notes": [
          "Expense detail totals $13.7B; displayed figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.1
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.4
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
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
        "value": 7.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.4,
        "notes": [
          "+6% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +4%",
            "业务分部收入合计 $21.7B，图中另列 $0.3B 的其他调整；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +7%",
                "净利率 22%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (3%)",
                "净利率 37%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +0%",
                "净利率 36%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +10%",
                "净利率 15%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "来源图以不带符号的方式显示取整后的金额。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计为 $13.7B；图中数字经四舍五入。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "advertising",
                "label": "广告"
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
              "同比 +6%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "wells-fargo-q2-fy23",
    "company": "Wells Fargo",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.5,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.5,
          "notes": [
            "+11% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+35% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "+30% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.6,
          "notes": [
            "(2%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13,
        "notes": [
          "Source expense components total $12.9B; the $13.0B total is within rounding intervals."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.2
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.7
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
        "value": 7.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "+57% Y/Y",
          "$1.25 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +11%",
                "净利率 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +35%",
                "净利率 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +30%",
                "净利率 26%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 (2%)",
                "净利率 13%"
              ]
            },
            {
              "id": "other",
              "label": "所有其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图费用分项合计 $12.9B；总额 $13.0B 的差异在舍入区间内。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
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
              "同比 +57%",
              "每股收益 $1.25"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.3 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 (6%)"
            ]
          },
          {
            "id": "loans",
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
        "value": "10.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.7%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n10.7%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            148
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            430,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q2-fy25",
    "company": "Wells Fargo",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.8,
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
          "value": 9.2,
          "notes": [
            "+2% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 2.9,
          "notes": [
            "(6%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.7,
          "notes": [
            "(3%) Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.9,
          "notes": [
            "+1% Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.4,
        "notes": [
          "Source expense components sum to $13.5B; difference from $13.4B is within rounding intervals."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.7
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
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
        "value": 7.4
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.5,
        "notes": [
          "+12% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1221,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.9T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1221,
            430,
            148
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "literal": "11.1%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.1%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1221,
            241,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +2%",
                "净利率 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (6%)",
                "净利率 37%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 (3%)",
                "净利率 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +1%",
                "净利率 12%"
              ]
            },
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图费用分项合计 $13.5B，与总额 $13.4B 的差异在舍入范围内。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后利润"
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
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy22",
    "company": "Wells Fargo",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.7,
      "notes": [
        "(6%) Y/Y",
        "Rounded segment values total $20.4B before the $0.8B All Other loss; a $0.1B rounding difference remains."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9.5
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.1
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.1
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.7
        },
        {
          "id": "other",
          "label": "All Other (noninterest loss)",
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 16.2,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.4
          },
          {
            "id": "information_processing",
            "label": "Information processing",
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 3.5
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
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
        "label": "Income after noninterest expenses",
        "value": 3.5
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.6,
        "notes": [
          "(59%) Y/Y",
          "$0.67 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.6%",
        "basis": "unspecified",
        "notes": [
          "(0.8pp) Y/Y"
        ],
        "quote": "CET1 ratio\n10.6%\n(0.8pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1192,
            241,
            148
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.4T",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\n(6%) Y/Y",
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
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1192,
            431,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行"
            },
            {
              "id": "commercial_banking",
              "label": "商业银行"
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行"
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理"
            },
            {
              "id": "other",
              "label": "其他（非利息亏损）"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
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
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (59%)",
              "每股收益 $0.67"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.8 个百分点)"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 (6%)"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 +8%"
            ]
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "税收收益"
            }
          ]
        }
      }
    }
  },
  {
    "key": "wells-fargo-q1-fy25",
    "company": "Wells Fargo",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 20.1,
      "notes": [
        "(3%) Y/Y",
        "Rounded segment figures less All Other total $20.2B, versus displayed revenue $20.1B."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 8.9,
          "notes": [
            "(2%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 2.9,
          "notes": [
            "(7%) Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 5.1,
          "notes": [
            "+2% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+4% Y/Y",
            "10% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.9,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.5
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.1
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
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
        "value": 0.5
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
        "value": 6.2,
        "notes": [
          "Schema subtotal; Source does not paint a separate node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.8,
        "notes": [
          "+4% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1198,
            372,
            149
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1198,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.1%",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.1%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            843,
            1198,
            240,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (3%)",
            "图中分部金额减去其他业务为 $20.2B，与总收入 $20.1B 存在逐项舍入差异。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (2%)",
                "净利率 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (7%)",
                "净利率 27%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +2%",
                "净利率 38%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +4%",
                "净利率 10%"
              ]
            },
            {
              "id": "other",
              "label": "其他业务"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后利润",
            "notes": [
              "用于表格的中间合计；原图未绘制独立节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +4%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (0%)"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (3%)"
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
    }
  },
  {
    "key": "wells-fargo-q2-fy24",
    "company": "Wells Fargo",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.7,
      "notes": [
        "+1% Y/Y",
        "Rounded segment amounts total $20.8B; All Other is ($0.1B)."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9,
          "notes": [
            "(5%) Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.1,
          "notes": [
            "(7%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.8,
          "notes": [
            "+4% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+6% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.5
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
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
        "value": 7.4,
        "notes": [
          "Schema subtotal; no separate Source node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "+0% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n+0.3pp Y/Y",
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
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.4T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            373,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            657,
            1191,
            429,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +1%",
            "分部取整收入合计 $20.8B，所有其他为 ($0.1B)。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (5%)",
                "净利率 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (7%)",
                "净利率 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +4%",
                "净利率 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +6%",
                "净利率 13%"
              ]
            },
            {
              "id": "other",
              "label": "所有其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
              "Schema 适配小计；来源图未显示独立节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +0%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.3 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (3%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q3-fy25",
    "company": "Wells Fargo",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+5% Y/Y",
        "Business-segment revenue totals $21.8B before the $0.3B Other adjustment; source figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.7,
          "notes": [
            "+6% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3,
          "notes": [
            "(9%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "(1%) Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4.2,
          "notes": [
            "+8% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": -0.3,
          "notes": [
            "Source chart displays the rounded magnitude without a sign."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.8,
        "notes": [
          "Expense details total $13.7B versus the $13.8B displayed total; source figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.7
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
        "value": 7.6,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.6,
        "notes": [
          "+9% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +5%",
            "业务分部收入合计 $21.8B，另列 $0.3B 其他调整；来源数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +6%",
                "净利率 23%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (9%)",
                "净利率 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 (1%)",
                "净利率 40%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +8%",
                "净利率 14%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "来源图以不带符号的方式显示取整后的金额。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细合计 $13.7B，图示总额 $13.8B；来源数字经四舍五入。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
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
              "同比 +9%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "average_loans_leases",
            "label": "平均贷款与租赁",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.3 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            22,
            1197,
            372,
            150
          ]
        }
      },
      {
        "id": "average_loans_leases",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1197,
            430,
            150
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n(0.3pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            843,
            1197,
            241,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q3-fy24",
    "company": "Wells Fargo",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.4,
      "notes": [
        "(2%) Y/Y",
        "Displayed segment sum less All Other is $20.3B; source total is $20.4B due to rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": "Consumer Banking",
          "value": 9.1,
          "notes": [
            "(5%) Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": "Commercial Banking",
          "value": 3.3,
          "notes": [
            "(2%) Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": "Corporate & Investment Banking",
          "value": 4.9,
          "notes": [
            "(0%) Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": "Wealth & Investment Management",
          "value": 3.9,
          "notes": [
            "+5% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.1,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.1,
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
        "value": 1.1
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
        "value": 7.3
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.2,
        "notes": [
          "(10%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 (5%)",
                "净利率 21%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (2%)",
                "净利率 40%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 (0%)",
                "净利率 41%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +5%",
                "净利率 14%"
              ]
            },
            {
              "id": "other",
              "label": "所有其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (10%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.3 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1199,
            371,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1199,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.3%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.3%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1199,
            241,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q1-fy23",
    "company": "Wells Fargo",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.7,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.4,
          "notes": [
            "+9% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.3,
          "notes": [
            "+42% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "+41% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "(2%) Y/Y",
            "12% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other",
            "(noninterest loss)"
          ],
          "value": -0.5
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.7,
        "items": [
          {
            "id": "personnel",
            "label": [
              "Personnel"
            ],
            "value": 9.4
          },
          {
            "id": "technology",
            "label": [
              "Technology"
            ],
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": [
              "Occupancy"
            ],
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": [
              "Operating losses"
            ],
            "value": 0.3
          },
          {
            "id": "leases",
            "label": [
              "Leases"
            ],
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": [
              "Advertising"
            ],
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": [
              "Professional fees"
            ],
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": [
              "Other"
            ],
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 1.2
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
        "value": 7
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.9,
        "notes": [
          "(59%) Y/Y",
          "$1.23 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": [
                "消费者",
                "银行"
              ],
              "notes": [
                "同比 +9%",
                "净利率 20%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "商业",
                "银行"
              ],
              "notes": [
                "同比 +42%",
                "净利率 36%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": [
                "企业与",
                "投资",
                "银行"
              ],
              "notes": [
                "同比 +41%",
                "净利率 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": [
                "财富与",
                "投资",
                "管理"
              ],
              "notes": [
                "同比 (2%)",
                "净利率 12%"
              ]
            },
            {
              "id": "other",
              "label": [
                "其他",
                "（非利息亏损）"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": [
                  "人员费用"
                ]
              },
              {
                "id": "technology",
                "label": [
                  "技术"
                ]
              },
              {
                "id": "occupancy",
                "label": [
                  "场地占用"
                ]
              },
              {
                "id": "operating_losses",
                "label": [
                  "经营损失"
                ]
              },
              {
                "id": "leases",
                "label": [
                  "租赁"
                ]
              },
              {
                "id": "advertising",
                "label": [
                  "广告"
                ]
              },
              {
                "id": "professional_fees",
                "label": [
                  "专业服务费"
                ]
              },
              {
                "id": "other_expenses",
                "label": [
                  "其他"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating_expenses",
                "label": [
                  "信用损失",
                  "拨备"
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
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (59%)",
              "每股收益 $1.23"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.3 个百分点"
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
              "同比 +6%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "10.8",
        "unit": "%",
        "literal": "10.8%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n10.8%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            150
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.4",
        "unit": "T",
        "literal": "$1.4T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "Average deposits\n$1.4T\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            150
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "literal": "$0.9T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            655,
            1191,
            431,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q1-fy24",
    "company": "Wells Fargo",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q1-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.9,
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
          "value": 9.1,
          "notes": [
            "(3%) Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.2,
          "notes": [
            "(5%) Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 5,
          "notes": [
            "+2% Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "+2% Y/Y",
            "10% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 14.3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.5
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.6
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 0.9
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
        "value": 6.6
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.6,
        "notes": [
          "(5%) Y/Y",
          "$1.20 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
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
                "净利率 19%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 (5%)",
                "净利率 31%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +2%",
                "净利率 40%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +2%",
                "净利率 10%"
              ]
            },
            {
              "id": "other",
              "label": "其他业务"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (5%)",
              "每股收益 $1.20"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.4 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (3%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "literal": "11.2%",
        "value": "11.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "CET1 ratio\n11.2%\n+0.4pp Y/Y",
        "notes": [
          "+0.4pp Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            240,
            149
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "literal": "$1.4T",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average deposits\n$1.4T\n+2% Y/Y",
        "notes": [
          "+2% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "literal": "$0.9T",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "notes": [
          "(3%) Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            429,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q4-fy24",
    "company": "Wells Fargo",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.4,
      "notes": [
        "(0%) Y/Y",
        "Displayed segment amounts less All Other total $20.5B versus $20.4B consolidated revenue; source rounding."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9,
          "notes": [
            "(6%) Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.2,
          "notes": [
            "(6%) Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.6,
          "notes": [
            "(3%) Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 4,
          "notes": [
            "+8% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.3,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.9,
        "notes": [
          "Displayed expense items sum to $13.9B."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.1
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.8
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
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
        "value": 0.1
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
        "value": 6.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.3,
        "notes": [
          "+50% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (0%)",
            "分部金额扣除其他业务后为 $20.5B，图示总收入为 $20.4B；差异在分项舍入范围内。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行"
            },
            {
              "id": "commercial_banking",
              "label": "商业银行"
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行"
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理"
            },
            {
              "id": "other",
              "label": "所有其他业务"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "图示费用明细合计 $13.9B。"
            ],
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +50%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.3 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "literal": "$1.4T",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average deposits\n$1.4T\n+1% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            23,
            1198,
            372,
            149
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "literal": "$0.9T",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Average loans and leases\n$0.9T\n(3%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            404,
            1198,
            429,
            149
          ]
        }
      },
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "literal": "11.1%",
        "value": "11.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "CET1 ratio\n11.1%\n(0.3pp) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            842,
            1198,
            241,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "wells-fargo-q3-fy23",
    "company": "Wells Fargo",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q3-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.9,
      "notes": [
        "+7% Y/Y",
        "Displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.6,
          "notes": [
            "+3% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+15% Y/Y",
            "40% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.9,
          "notes": [
            "+21% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "+32% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "other",
          "label": [
            "All Other"
          ],
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 13.1,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 8.6
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.3
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.2,
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
        "value": 7.8
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.8,
        "notes": [
          "+61% Y/Y",
          "$1.48 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "11.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "11.0%",
        "notes": [
          "+0.7pp Y/Y"
        ],
        "quote": "CET1 ratio\n11.0%\n+0.7pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1192,
            241,
            147
          ]
        }
      },
      {
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "Average deposits\n$1.3T\n(5%) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1192,
            372,
            147
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.9T",
        "notes": [
          "(0.2%) Y/Y"
        ],
        "quote": "Average loans and leases\n$0.9T\n(0.2%) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            657,
            1192,
            428,
            147
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +3%",
                "净利率 23%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +15%",
                "净利率 40%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +21%",
                "净利率 37%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 +32%",
                "净利率 14%"
              ]
            },
            {
              "id": "other",
              "label": "所有其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
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
            "label": "扣除非利息费用后的利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +61%",
              "每股收益 $1.48"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.7 个百分点"
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
              "同比 (0.2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "wells-fargo-q4-fy23",
    "company": "Wells Fargo",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/wells-fargo-q4-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.5,
      "notes": [
        "+2% Y/Y",
        "Rounded segment revenue less All Other equals revenue."
      ],
      "items": [
        {
          "id": "consumer_banking",
          "label": [
            "Consumer",
            "Banking"
          ],
          "value": 9.5,
          "notes": [
            "+1% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.4,
          "notes": [
            "+7% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "corporate_investment_banking",
          "label": [
            "Corporate &",
            "Investment",
            "Banking"
          ],
          "value": 4.7,
          "notes": [
            "+14% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "wealth_investment_management",
          "label": [
            "Wealth &",
            "Investment",
            "Management"
          ],
          "value": 3.7,
          "notes": [
            "(1%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "other",
          "label": "All Other",
          "value": -0.8,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 15.8,
        "notes": [
          "Source expense details total $15.9B; displayed figures are rounded."
        ],
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 9.2
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 1.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.7
          },
          {
            "id": "operating_losses",
            "label": "Operating losses",
            "value": 0.4
          },
          {
            "id": "leases",
            "label": "Leases",
            "value": 0.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.8
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
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
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
        "label": "Income after noninterest expenses",
        "value": 4.7,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "+20% Y/Y",
          "$0.86 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "consumer_banking",
              "label": "消费者银行",
              "notes": [
                "同比 +1%",
                "净利率 21%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +7%",
                "净利率 38%"
              ]
            },
            {
              "id": "corporate_investment_banking",
              "label": "企业与投资银行",
              "notes": [
                "同比 +14%",
                "净利率 33%"
              ]
            },
            {
              "id": "wealth_investment_management",
              "label": "财富与投资管理",
              "notes": [
                "同比 (1%)",
                "净利率 13%"
              ]
            },
            {
              "id": "other",
              "label": "其他调整",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "personnel",
                "label": "人员费用"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "operating_losses",
                "label": "经营损失"
              },
              {
                "id": "leases",
                "label": "租赁"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ],
            "notes": [
              "来源图的费用分项合计为 $15.9B；显示金额经过四舍五入。"
            ]
          },
          "operatingExpenses": {
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
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +20%",
              "每股收益 $0.86"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.8 个百分点"
            ]
          },
          {
            "id": "deposits",
            "label": "平均存款",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "loans",
            "label": "平均贷款与租赁",
            "notes": [
              "同比 (1%)"
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
        "comparison": "eq",
        "notes": [
          "+0.8pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "CET1 ratio\n11.4%\n+0.8pp Y/Y",
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
        "id": "deposits",
        "label": "Average deposits",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "notes": [
          "(3%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Average deposits\n$1.3T\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            149
          ]
        }
      },
      {
        "id": "loans",
        "label": "Average loans and leases",
        "value": "0.9",
        "unit": "T",
        "currency": "USD",
        "literal": "$0.9T",
        "comparison": "eq",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Average loans and leases\n$0.9T\n(1%) Y/Y",
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
  }
]);
})(window);
