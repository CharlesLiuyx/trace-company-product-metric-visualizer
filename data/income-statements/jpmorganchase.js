/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "jpmorganchase-q4-fy25",
    "company": "JPMorganChase",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jpmorganchase-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 45.8,
      "notes": [
        "+7% Y/Y",
        "Business-segment net revenue totals $46.8B before the $1.0B adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 19.4,
          "notes": [
            "+6% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 19.4,
          "notes": [
            "+10% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 6.5,
          "notes": [
            "+13% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.5,
          "notes": [
            "(26%) Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 24,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 13.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.5
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.9
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.7
          }
        ]
      },
      "operatingExpenses": {
        "total": 4.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 4.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4.1
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
        "value": 21.8,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 17.2,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 13,
        "notes": [
          "(7%) Y/Y"
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
            "业务分部净收入在 $1.0B 调整项前合计为 $46.8B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +6%",
                "净利率 19%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +10%",
                "净利率 38%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +13%",
                "净利率 28%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 (26%)",
                "净利率 21%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (7%)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jpmorganchase-q1-fy26",
    "company": "JPMorganChase",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jpmorganchase-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 49.8,
      "notes": [
        "+10% Y/Y",
        "Business-segment net revenue totals $50.6B before the $0.7B adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 19.6,
          "notes": [
            "+7% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 23.4,
          "notes": [
            "+19% Y/Y",
            "39% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 6.4,
          "notes": [
            "+11% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.2,
          "notes": [
            "(47%) Y/Y",
            "58% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 26.9,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 15.3
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.4
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 3
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.5
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
        "value": 22.9,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 20.5,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 16.5,
        "notes": [
          "+13% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +10%",
            "业务分部净收入在 $0.7B 调整项前合计为 $50.6B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +7%",
                "净利率 25%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +19%",
                "净利率 39%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +11%",
                "净利率 28%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 (47%)",
                "净利率 58%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +13%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jpmorganchase-q2-fy26",
    "company": "JPMorganChase",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jpmorganchase-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 57.3,
      "notes": [
        "+28% Y/Y",
        "Business-segment net revenue totals $58.1B before the $0.7B adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 20.3,
          "notes": [
            "+8% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 24.9,
          "notes": [
            "+27% Y/Y",
            "39% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 6.9,
          "notes": [
            "+19% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 6,
          "notes": [
            "+293% Y/Y",
            "70% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 27.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 15.2
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.5
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 3.1
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3.9
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.7
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.5,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 6.4
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
        "value": 30,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 27.5,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 21.2,
        "notes": [
          "+41% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +28%",
            "业务分部净收入在 $0.7B 调整项前合计为 $58.1B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +8%",
                "净利率 26%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +27%",
                "净利率 39%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +19%",
                "净利率 29%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 +293%",
                "净利率 70%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +41%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jpmorganchase-q1-fy25",
    "company": "JPMorganChase",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jpmorganchase-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 45.3,
      "notes": [
        "+8% Y/Y",
        "Business-segment net revenue totals $46.0B before the $0.7B adjustment; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 18.3,
          "notes": [
            "+4% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 19.7,
          "notes": [
            "+12% Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.7,
          "notes": [
            "+12% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 2.3,
          "notes": [
            "+5% Y/Y",
            "73% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 23.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 14.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.3
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.6
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.8
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.5
          }
        ]
      },
      "operatingExpenses": {
        "total": 3.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 3.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.8
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
        "value": 21.7,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 18.4,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 14.6,
        "notes": [
          "+9% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +8%",
            "业务分部净收入在 $0.7B 调整项前合计为 $46.0B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +4%",
                "净利率 24%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +12%",
                "净利率 35%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +12%",
                "净利率 28%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 +5%",
                "净利率 73%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
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
              "同比 +2%，环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +2%，环比持平"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.4 个百分点，环比 -0.3 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1191,
            371,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & Flat Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+2% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1191,
            310,
            148
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.4",
        "unit": "%",
        "currency": null,
        "literal": "15.4%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.4pp Y/Y & -0.3pp Q/Q"
        ],
        "quote": "CET1 ratio\n15.4%\n+0.4pp Y/Y & -0.3pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            732,
            1191,
            311,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q4-fy24",
    "company": "JPMorganChase",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 42.8,
      "notes": [
        "+11% Y/Y",
        "Business-segment revenue totals $43.8B before the $1.0B adjustment."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 18.4,
          "notes": [
            "+1% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 17.6,
          "notes": [
            "+18% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.8,
          "notes": [
            "+13% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 2,
          "notes": [
            "+13% Y/Y",
            "67% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 22.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 12.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.3
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.5
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.6,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.4
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
        "value": 20,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 17.4,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 14,
        "notes": [
          "+50% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +11%",
            "业务分部收入在 $1.0B 调整项前合计为 $43.8B。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +1%",
                "净利率 25%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +18%",
                "净利率 38%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +13%",
                "净利率 26%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 +13%",
                "净利率 67%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
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
              "同比 +2%，环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +2%，环比 +1%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.7 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.4T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1191,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3T",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1191,
            309,
            148
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.7%",
        "basis": "unspecified",
        "notes": [
          "+0.7pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.7%\n+0.7pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            733,
            1191,
            309,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q1-fy23",
    "company": "JPMorganChase",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q1-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 38.3,
      "notes": [
        "+25% Y/Y",
        "Source values are rounded to $0.1B. Segment total $39.4B less $1.0B adjustments differs from net revenue by $0.1B."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 16.5,
          "notes": [
            "+35% Y/Y",
            "32% net margin"
          ]
        },
        {
          "id": "corporate_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 13.6,
          "notes": [
            "Flat Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 3.5,
          "notes": [
            "+46% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 4.8,
          "notes": [
            "+11% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": [
            "Corporate"
          ],
          "value": 1
        },
        {
          "id": "adjustments",
          "label": [
            "Adjustments"
          ],
          "value": -1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 20.1,
        "items": [
          {
            "id": "compensation_benefits",
            "label": [
              "Compensation",
              "& benefits"
            ],
            "value": 11.7
          },
          {
            "id": "occupancy",
            "label": [
              "Occupancy"
            ],
            "value": 1.1
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 2.2
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.4
          },
          {
            "id": "marketing",
            "label": [
              "Marketing"
            ],
            "value": 1
          },
          {
            "id": "other_expenses",
            "label": [
              "Other"
            ],
            "value": 1.6
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 2.3
          }
        ],
        "notes": [
          "Schema slot represents provision for credit losses."
        ]
      },
      "tax": {
        "id": "tax",
        "label": [
          "Tax"
        ],
        "value": 3.3
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
        "label": "Income after noninterest expenses",
        "value": 18.2
      },
      "operating": {
        "id": "pretax_income",
        "label": [
          "Pretax income"
        ],
        "value": 16
      },
      "net": {
        "id": "net_income",
        "label": [
          "Net income"
        ],
        "value": 12.6,
        "notes": [
          "+52% Y/Y",
          "$4.10 EPS"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "13.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.8%",
        "quote": "CET1 ratio\n13.8%\n+1.9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            242,
            148
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+1.9pp Y/Y"
        ]
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.3",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.3T",
        "quote": "Average deposits\n$2.3T\n(8%) Y/Y & (3%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            372,
            148
          ]
        },
        "basis": "unspecified",
        "notes": [
          "(8%) Y/Y & (3%) Q/Q"
        ]
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.1",
        "unit": "T",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.1T",
        "quote": "Average loans\n$1.1T\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            310,
            148
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "items": [
            {
              "id": "consumer_community_banking",
              "label": [
                "消费者与",
                "社区银行"
              ]
            },
            {
              "id": "corporate_investment_bank",
              "label": [
                "公司与",
                "投资银行"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "商业银行"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": [
                "资产与",
                "财富管理"
              ]
            },
            {
              "id": "corporate",
              "label": [
                "公司业务"
              ]
            },
            {
              "id": "adjustments",
              "label": [
                "调整项"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "items": [
              {
                "id": "compensation_benefits",
                "label": [
                  "薪酬与福利"
                ]
              },
              {
                "id": "occupancy",
                "label": [
                  "场地费用"
                ]
              },
              {
                "id": "technology_communications",
                "label": [
                  "技术与通信"
                ]
              },
              {
                "id": "professional_services",
                "label": [
                  "专业服务"
                ]
              },
              {
                "id": "marketing",
                "label": [
                  "营销"
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
              "同比 +52%",
              "每股收益 $4.10"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率"
          },
          {
            "id": "average_deposits",
            "label": "平均存款"
          },
          {
            "id": "average_loans",
            "label": "平均贷款"
          }
        ]
      }
    }
  },
  {
    "key": "jpmorganchase-q1-fy24",
    "company": "JPMorganChase",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jpmorganchase-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 41.9,
      "notes": [
        "+9% Y/Y",
        "Segment figures are rounded; their sum is $42.6B before the $0.6B adjustment."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 17.7,
          "notes": [
            "+7% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 13.6,
          "notes": [
            "+0% Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 4,
          "notes": [
            "+13% Y/Y",
            "47% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.1,
          "notes": [
            "+7% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 2.2,
          "notes": []
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 22.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": [
              "Compensation",
              "& benefits"
            ],
            "value": 13.1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.2
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 2.4
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.3
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 1.9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.9
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
        "value": 19.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 17.3,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 13.4,
        "notes": [
          "+6% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +9%",
            "分部数据已经取整，$0.6B 调整项前各分部合计为 $42.6B。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +7%",
                "净利率 27%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "公司与投资银行",
              "notes": [
                "同比 +0%",
                "净利率 35%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": "商业银行",
              "notes": [
                "同比 +13%",
                "净利率 47%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +7%",
                "净利率 25%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": []
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +6%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.2 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +2%，环比持平"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +16%，环比持平"
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
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.0",
        "unit": "%",
        "currency": null,
        "literal": "15.0%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.2pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.0%\n+1.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1191,
            240,
            148
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & Flat Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n+2% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            275,
            1191,
            371,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y & Flat Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+16% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            309,
            148
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "value": "0.00444",
        "unit": "K",
        "currency": "USD",
        "literal": "$4.44",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "EPS\n$4.44",
        "anchor": {
          "type": "image-box",
          "box": [
            2440,
            409,
            169,
            39
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q2-fy23",
    "company": "JPMorganChase",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q2-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 41.3,
      "notes": [
        "+34% Y/Y",
        "Business segment values sum to $42.3B; rounded adjustment is ($1.1B)."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 17.2,
          "notes": [
            "31% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 12.5,
          "notes": [
            "33% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 4,
          "notes": [
            "30% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 4.9,
          "notes": [
            "25% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": [
            "Corporate"
          ],
          "value": 3.7,
          "notes": []
        },
        {
          "id": "adjustments",
          "label": [
            "Adjustments"
          ],
          "value": -1.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 20.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": [
              "Compensation",
              "& benefits"
            ],
            "value": 11.2,
            "notes": []
          },
          {
            "id": "occupancy",
            "label": [
              "Occupancy"
            ],
            "value": 1.1,
            "notes": []
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 2.3,
            "notes": []
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.6,
            "notes": []
          },
          {
            "id": "marketing",
            "label": [
              "Marketing"
            ],
            "value": 1.1,
            "notes": []
          },
          {
            "id": "other_expenses",
            "label": [
              "Other"
            ],
            "value": 2.6,
            "notes": []
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 2.9,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.1
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
        "value": 20.5,
        "notes": [
          "Derived schema subtotal; not displayed as a separate Source node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 17.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 14.5,
        "notes": [
          "+67% Y/Y",
          "$4.37 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行"
            },
            {
              "id": "commercial_investment_bank",
              "label": "公司与投资银行"
            },
            {
              "id": "commercial_banking",
              "label": "商业银行"
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理"
            },
            {
              "id": "corporate",
              "label": "公司业务"
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
              "推导的通用字段小计；原图没有单独显示该节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +67%",
              "$4.37 每股收益"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率"
          },
          {
            "id": "average_deposits",
            "label": "平均存款"
          },
          {
            "id": "average_loans",
            "label": "平均贷款"
          },
          {
            "id": "eps",
            "label": "每股收益"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "13.8",
        "unit": "%",
        "currency": null,
        "literal": "13.8%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.6pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.8%\n+1.6pp Y/Y",
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
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y & +3% Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n(6%) Y/Y & +3% Q/Q",
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
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.2",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.2T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Average loans\n$1.2T\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            310,
            148
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "value": "0.00437",
        "unit": "K",
        "currency": "USD",
        "literal": "$4.37",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "EPS\n$4.37",
        "anchor": {
          "type": "image-box",
          "box": [
            2435,
            419,
            182,
            34
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q2-fy24",
    "company": "JPMorganChase",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 50.2,
      "notes": [
        "+22% Y/Y",
        "Business-segment revenue totals $51.0B before the $0.8B adjustment. Source values are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 17.7,
          "notes": [
            "+3% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 17.9,
          "notes": [
            "+9% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.3,
          "notes": [
            "+6% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 10.1,
          "notes": [
            "+172% Y/Y",
            "67% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.8,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 23.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 13
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.2
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.4
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 3.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 3.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 3.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5.3
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
        "value": 26.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 23.4,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 18.1,
        "notes": [
          "+25% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +22%",
            "业务分部收入在 $0.8B 调整项前合计为 $51.0B；来源金额经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +3%",
                "净利率 24%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +9%",
                "净利率 33%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +6%",
                "净利率 24%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 +172%",
                "净利率 67%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项",
              "notes": []
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +25%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.5 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 (1%)，环比持平"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +6%，环比持平"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.3",
        "unit": "%",
        "currency": null,
        "literal": "15.3%",
        "notes": [
          "+1.5pp Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n15.3%\n+1.5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            1191,
            241,
            148
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "notes": [
          "(1%) Y/Y & Flat Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Average deposits\n$2.4T\n(1%) Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            276,
            1191,
            371,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "notes": [
          "+6% Y/Y & Flat Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Average loans\n$1.3T\n+6% Y/Y & Flat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            658,
            1191,
            309,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q2-fy25",
    "company": "JPMorganChase",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q2-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 44.9,
      "notes": [
        "(11%) Y/Y",
        "Source rounded business-segment values sum to $45.6B before the ($0.8B) adjustment; net revenue is $44.9B."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 18.8,
          "notes": [
            "+6% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 19.5,
          "notes": [
            "+9% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.8,
          "notes": [
            "+10% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.5,
          "notes": [
            "(85%) Y/Y",
            "110% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 23.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 13.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.3
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.7
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.8,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.8
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.3
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
        "value": 21.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 18.3,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 15,
        "notes": [
          "(17%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比下降 11%",
            "原图分部收入合计 $45.6B；调整项 ($0.8B)，净收入 $44.9B，存在取整差异。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +6%",
                "净利率 27%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +9%",
                "净利率 34%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +10%",
                "净利率 26%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比下降 85%",
                "净利率 110%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比下降 17%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +7%，环比 +3%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +7%，环比 +4%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 -0.3 个百分点，环比 -0.4 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.6",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.6T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y & +3% Q/Q"
        ],
        "quote": "Average deposits\n$2.6T\n+7% Y/Y & +3% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y & +4% Q/Q"
        ],
        "quote": "Average loans\n$1.4T\n+7% Y/Y & +4% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1192,
            309,
            148
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.0",
        "unit": "%",
        "currency": null,
        "literal": "15.0%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "-0.3pp Y/Y & -0.4pp Q/Q"
        ],
        "quote": "CET1 ratio\n15.0%\n-0.3pp Y/Y & -0.4pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            733,
            1192,
            309,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q3-fy23",
    "company": "JPMorganChase",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 39.9,
      "notes": [
        "+22% Y/Y",
        "Business-segment revenue totals $40.7B before the $0.8B adjustment; displayed amounts are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 18.4,
          "notes": [
            "+29% Y/Y",
            "32% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 11.7,
          "notes": [
            "(2%) Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "commercial_banking",
          "label": [
            "Commercial",
            "Banking"
          ],
          "value": 4,
          "notes": [
            "+32% Y/Y",
            "48% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5,
          "notes": [
            "+10% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.6,
          "notes": []
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.8,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 21.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": [
              "Compensation",
              "& benefits"
            ],
            "value": 11.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.2
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology,",
              "communications"
            ],
            "value": 2.4
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2.7
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
        "value": 3.6
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
        "value": 18.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 16.7,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 13.2,
        "notes": [
          "+35% Y/Y",
          "$4.33 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +22%",
            "业务分部收入在 $0.8B 调整前合计 $40.7B；来源金额经四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": [
                "消费者与",
                "社区银行"
              ],
              "notes": [
                "同比 +29%",
                "净利率 32%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": [
                "公司与",
                "投资银行"
              ],
              "notes": [
                "同比 -2%",
                "净利率 26%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "商业银行"
              ],
              "notes": [
                "同比 +32%",
                "净利率 48%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": [
                "资产与财富",
                "管理"
              ],
              "notes": [
                "同比 +10%",
                "净利率 28%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": []
            },
            {
              "id": "adjustments",
              "label": "调整项",
              "notes": []
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +35%",
              "每股收益 $4.33"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.8 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 -4%，环比 -1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +17%，环比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "14.3",
        "unit": "%",
        "literal": "14.3%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.8pp Y/Y"
        ],
        "quote": "CET1 ratio\n14.3%\n+1.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1191,
            241,
            148
          ]
        }
      },
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "literal": "$2.4T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y & (1%) Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n(4%) Y/Y & (1%) Q/Q",
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
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "literal": "$1.3T",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y & +5% Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+17% Y/Y & +5% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1191,
            309,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q3-fy24",
    "company": "JPMorganChase",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q3-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 42.7,
      "notes": [
        "+7% Y/Y",
        "Segment amounts sum to $43.3B; the source $0.7B adjustment and all financial amounts are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 17.8,
          "notes": [
            "(3%) Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 17,
          "notes": [
            "+8% Y/Y",
            "33% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.4,
          "notes": [
            "+9% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 3.1,
          "notes": [
            "+97% Y/Y",
            "59% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 22.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 12.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.3
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.4
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.8
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 2
          }
        ]
      },
      "operatingExpenses": {
        "total": 3.1,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 3.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4.1
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
        "value": 20.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 17,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 12.9,
        "notes": [
          "(2%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%",
            "分部金额合计 $43.3B；原图 $0.7B 调整项及所有金额均经过四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 -3%",
                "净利率 23%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +8%",
                "净利率 33%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +9%",
                "净利率 25%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 +97%",
                "净利率 59%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 -2%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +2%，环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +2%，环比 +1%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.0 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1191,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y & +1% Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+2% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1191,
            309,
            148
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.3",
        "unit": "%",
        "currency": null,
        "literal": "15.3%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.0pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.3%\n+1.0pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            733,
            1191,
            241,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q3-fy25",
    "company": "JPMorganChase",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 46.4,
      "notes": [
        "+9% Y/Y",
        "Source-rounded segments total $47.2B; after ($0.7B) adjustments this differs from displayed net revenue by $0.1B."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 19.5,
          "notes": [
            "+9% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Commercial &",
            "Investment Bank"
          ],
          "value": 19.9,
          "notes": [
            "+17% Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 6.1,
          "notes": [
            "+12% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.7,
          "notes": [
            "(45%) Y/Y",
            "48% net margin"
          ]
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 24.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 13.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.4
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.8
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 3.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.8
          }
        ]
      },
      "operatingExpenses": {
        "total": 3.4,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 3.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4.4
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
        "value": 22.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 18.7,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 14.4,
        "notes": [
          "+12% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%",
            "原图分部合计 $47.2B，减去 ($0.7B) 调整项后，与原图净收入相差 $0.1B，保留原图取整金额。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": "消费者与社区银行",
              "notes": [
                "同比 +9%",
                "净利率 26%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": "商业与投资银行",
              "notes": [
                "同比 +17%",
                "净利率 35%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +12%",
                "净利率 27%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": [
                "同比 (45%)",
                "净利率 48%"
              ]
            },
            {
              "id": "adjustments",
              "label": "调整项"
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
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
              "同比 +6%，环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +7%，环比 +3%"
            ]
          },
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 -0.5 个百分点，环比 -0.2 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.5",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.5T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$2.5T\n+6% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1192,
            372,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y & +3% Q/Q"
        ],
        "quote": "Average loans\n$1.4T\n+7% Y/Y & +3% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1192,
            309,
            148
          ]
        }
      },
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "14.8",
        "unit": "%",
        "currency": null,
        "literal": "14.8%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "-0.5pp Y/Y & -0.2pp Q/Q"
        ],
        "quote": "CET1 ratio\n14.8%\n-0.5pp Y/Y & -0.2pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            733,
            1192,
            309,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "jpmorganchase-q4-fy22",
    "company": "JPMorganChase",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q4-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 34.5,
      "notes": [
        "+18% Y/Y",
        "Business-segment revenue totals $35.6B before the $1.0B adjustment; source amounts are rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 15.8,
          "notes": [
            "+29% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "commercial_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 10.5,
          "notes": [
            "(9%) Y/Y",
            "32% net margin"
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
            "+30% Y/Y",
            "42% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 4.6,
          "notes": [
            "+3% Y/Y",
            "25% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.3,
          "notes": []
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 19,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 10
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.3
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.3
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.1
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.7
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.3,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.2
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
        "value": 15.5,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 13.2,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 11,
        "notes": [
          "+6% Y/Y",
          "$3.56 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "items": [
            {
              "id": "consumer_community_banking",
              "label": [
                "消费者与",
                "社区",
                "银行"
              ],
              "notes": [
                "同比 +29%",
                "净利率 29%"
              ]
            },
            {
              "id": "commercial_investment_bank",
              "label": [
                "公司与",
                "投资银行"
              ],
              "notes": [
                "同比 (9%)",
                "净利率 32%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "商业",
                "银行"
              ],
              "notes": [
                "同比 +30%",
                "净利率 42%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": [
                "资产与财富",
                "管理"
              ],
              "notes": [
                "同比 +3%",
                "净利率 25%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": []
            },
            {
              "id": "adjustments",
              "label": "调整项",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款及租赁",
            "notes": [
              "同比 +6%"
            ]
          }
        ],
        "profit": {
          "operating": {
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +6%",
              "$3.56 每股收益"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "13.2",
        "unit": "%",
        "currency": null,
        "literal": "13.2%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n13.2%\n+0.1pp Y/Y",
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
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.5",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.5T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Average deposits\n$2.5T\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            276,
            1191,
            371,
            148
          ]
        }
      },
      {
        "id": "average_loans",
        "label": "Average loans and leases",
        "value": "1.1",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.1T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Average loans and leases\n$1.1T\n+6% Y/Y",
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
    "key": "jpmorganchase-q4-fy23",
    "company": "JPMorganChase",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/jpmorganchase-q4-fy23.png",
    "roundingTolerance": 0.3,
    "revenue": {
      "total": 38.6,
      "notes": [
        "+12% Y/Y",
        "Source segment amounts and adjustments are independently rounded."
      ],
      "items": [
        {
          "id": "consumer_community_banking",
          "label": [
            "Consumer &",
            "Community",
            "Banking"
          ],
          "value": 18.1,
          "notes": [
            "+15% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "corporate_investment_bank",
          "label": [
            "Corporate &",
            "Investment Bank"
          ],
          "value": 11,
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
          "value": 4,
          "notes": [
            "+18% Y/Y",
            "41% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": [
            "Asset & Wealth",
            "Management"
          ],
          "value": 5.1,
          "notes": [
            "+10% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.8,
          "notes": []
        },
        {
          "id": "adjustments",
          "label": "Adjustments",
          "value": -1.3,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "noninterest_expenses",
        "label": "Noninterest expenses",
        "value": 24.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 11.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 1.2
          },
          {
            "id": "technology_communications",
            "label": [
              "Technology",
              "communications"
            ],
            "value": 2.4
          },
          {
            "id": "professional_services",
            "label": [
              "Professional",
              "services"
            ],
            "value": 2.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 5.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 2.7,
        "notes": [
          "Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 2.7
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
        "value": 14.1,
        "notes": [
          "Schema adapter subtotal; the source chart does not show a separate gross-profit node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 11.3,
        "notes": [
          "Source amounts are rounded to $0.1B precision."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 9.3,
        "notes": [
          "(15%) Y/Y",
          "$3.04 EPS"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +12%",
            "来源的分部金额与调整项分别四舍五入。"
          ],
          "items": [
            {
              "id": "consumer_community_banking",
              "label": [
                "消费者与",
                "社区银行"
              ],
              "notes": [
                "同比 +15%",
                "净利率 26%"
              ]
            },
            {
              "id": "corporate_investment_bank",
              "label": [
                "公司与",
                "投资银行"
              ],
              "notes": [
                "同比 +3%",
                "净利率 23%"
              ]
            },
            {
              "id": "commercial_banking",
              "label": [
                "商业银行"
              ],
              "notes": [
                "同比 +18%",
                "净利率 41%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": [
                "资产与财富",
                "管理"
              ],
              "notes": [
                "同比 +10%",
                "净利率 24%"
              ]
            },
            {
              "id": "corporate",
              "label": "公司业务",
              "notes": []
            },
            {
              "id": "adjustments",
              "label": "调整项",
              "notes": []
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
                "id": "technology_communications",
                "label": "技术与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
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
            "label": "税前利润",
            "notes": [
              "来源金额按 $0.1B 精度取整。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (15%)",
              "每股收益 $3.04"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1_ratio",
            "label": "CET1 比率",
            "notes": [
              "同比 +1.8 个百分点"
            ]
          },
          {
            "id": "average_deposits",
            "label": "平均存款",
            "notes": [
              "同比持平，环比 +1%"
            ]
          },
          {
            "id": "average_loans",
            "label": "平均贷款",
            "notes": [
              "同比 +17%，环比 +1%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.0",
        "unit": "%",
        "currency": null,
        "literal": "15.0%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.8pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.0%\n+1.8pp Y/Y",
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
        "id": "average_deposits",
        "label": "Average deposits",
        "value": "2.4",
        "unit": "T",
        "currency": "USD",
        "literal": "$2.4T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y & +1% Q/Q"
        ],
        "quote": "Average deposits\n$2.4T\nFlat Y/Y & +1% Q/Q",
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
        "id": "average_loans",
        "label": "Average loans",
        "value": "1.3",
        "unit": "T",
        "currency": "USD",
        "literal": "$1.3T",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y & +1% Q/Q"
        ],
        "quote": "Average loans\n$1.3T\n+17% Y/Y & +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            656,
            1192,
            309,
            148
          ]
        }
      }
    ]
  }
]);
})(window);
