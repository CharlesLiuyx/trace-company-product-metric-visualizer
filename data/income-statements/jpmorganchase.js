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
  }
]);
})(window);
