/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "morgan-stanley-q2-fy26",
    "company": "Morgan Stanley",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.3,
      "notes": [
        "+27% Y/Y",
        "Segment revenue detail sums to $21.5B before $0.2B of eliminations; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 11,
          "notes": [
            "+44% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 8.9,
          "notes": [
            "+14% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.6,
          "notes": [
            "+6% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2,
          "notes": [
            "Intersegment eliminations shown as a separate red outflow."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 13.9,
        "notes": [
          "Noninterest expense detail sums to $14.0B due to rounded line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 8.2
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.5
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.2
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.4
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.5
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.1,
        "notes": [
          "Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.7
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.3,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
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
        "value": 5.7,
        "notes": [
          "+58% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +27%",
            "分部收入明细合计为 $21.5B，抵销 $0.2B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +44%",
                "净利率 29%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +14%",
                "净利率 24%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +6%",
                "净利率 18%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "分部间抵销在来源图中显示为单独的红色流出。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "非利息费用明细因项目取整合计为 $14.0B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "税前利润",
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +58%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "morgan-stanley-q1-fy26",
    "company": "Morgan Stanley",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 20.6,
      "notes": [
        "+16% Y/Y",
        "Segment revenue detail sums to $20.7B due to rounded segment figures."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 10.7,
          "notes": [
            "+19% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 8.5,
          "notes": [
            "+16% Y/Y",
            "24% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.5,
          "notes": [
            "(4%) Y/Y",
            "16% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 13.5,
        "notes": [
          "Noninterest expense detail sums to $13.4B due to rounded line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 8.5
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.3
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.1,
        "notes": [
          "Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0.1
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
        "id": "pretax_income",
        "label": "Pre-provision pretax income",
        "value": 7.1,
        "notes": [
          "Schema adapter subtotal; source chart labels the displayed node as Pretax income."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.6,
        "notes": [
          "+29% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +16%",
            "Segment 收入 detail sums to $20.7B due to rounded segment figures."
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +19%",
                "净利率 31%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +16%",
                "净利率 24%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 (4%)",
                "净利率 16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "非利息费用明细因项目取整合计为 $13.4B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "拨备前税前利润",
            "notes": [
              "Schema 适配小计；来源图将显示节点标为税前利润。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +29%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "morgan-stanley-q4-fy25",
    "company": "Morgan Stanley",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 17.9,
      "notes": [
        "+10% Y/Y",
        "Segment revenue sums to $18.0B before $0.2B of eliminations; displayed figures are rounded."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 7.9,
          "notes": [
            "+9% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 8.4,
          "notes": [
            "+13% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.7,
          "notes": [
            "+5% Y/Y",
            "27% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 12.1,
        "notes": [
          "Expense detail sums to $12.2B because the source rounds individual line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.1
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.2
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.8,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
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
        "value": 4.4,
        "notes": [
          "+19% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +10%",
            "分部收入合计为 $18.0B，抵销 $0.2B；图中数字经四舍五入。"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +9%",
                "净利率 34%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +13%",
                "净利率 31%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +5%",
                "净利率 27%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "费用明细因项目取整合计为 $12.2B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "税前利润",
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +19%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "morgan-stanley-q2-fy24",
    "company": "Morgan Stanley",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 15,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 7
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.8
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.4
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 10.9,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.5
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business dev.",
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
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.1
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
        "id": "pretax_income",
        "label": "Pre-provision pretax income",
        "value": 4.1
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.1
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.2%",
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Y/Y"
        ],
        "quote": "CET1 ratio\n15.2%\n(0.3pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1152,
            241,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "17.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "17.5%",
        "basis": "unspecified",
        "notes": [
          "+5.4pp Y/Y"
        ],
        "quote": "ROTCE\n17.5%\n+5.4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1152,
            273,
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
            "同比 +12%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券"
            },
            {
              "id": "wealth_management",
              "label": "财富管理"
            },
            {
              "id": "investment_management",
              "label": "投资管理"
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "拨备前税前利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.3 个百分点)"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +5.4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "morgan-stanley-q4-fy23",
    "company": "Morgan Stanley",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/morgan-stanley-q4-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 12.9,
      "notes": [
        "+1% Y/Y",
        "Source rounded segment values sum to $13.0B before $0.2B eliminations."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 4.9,
          "notes": [
            "+3% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.6,
          "notes": [
            "+0% Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.5,
          "notes": [
            "+0% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 10.7,
        "notes": [
          "Source rounded expense detail sums to $10.8B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 0.9
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.2
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.4
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.003,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.003,
            "valueText": "($3M)"
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
        "id": "pretax_income",
        "label": "Pre-provision pretax subtotal",
        "value": 2.2,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 1.5,
        "notes": [
          "(32%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +3%",
                "净利率 21%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +0%",
                "净利率 27%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +0%",
                "净利率 18%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图费用明细经舍入后合计为 $10.8B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "税前利润",
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (32%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.1 个百分点)"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +0.2 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "value": "15.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.2%",
        "label": "CET1 ratio",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n15.2%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1153,
            241,
            148
          ]
        }
      },
      {
        "id": "rotce",
        "value": "12.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "12.8%",
        "label": "ROTCE",
        "basis": "unspecified",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "quote": "ROTCE\n12.8%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            385,
            1153,
            272,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q2-fy25",
    "company": "Morgan Stanley",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q2-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 16.8,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 7.6,
          "notes": [
            "+9% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 7.8,
          "notes": [
            "+14% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.6,
          "notes": [
            "+12% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 12,
        "notes": [],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.2
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.1
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.2
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.2
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
        "label": "Pre-provision pretax income",
        "value": 4.8,
        "notes": [
          "Calculated pre-provision subtotal: revenue less noninterest expenses; not a separate Source node."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.6,
        "notes": [
          "+15% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +9%",
                "净利率 21%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +14%",
                "净利率 22%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +12%",
                "净利率 16%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "拨备前税前利润",
            "notes": [
              "收入减非利息费用所得的拨备前小计，来源图未单独显示节点。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +15%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.2 个百分点)"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +0.7 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "value": "15.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.0%",
        "label": "CET1 ratio",
        "basis": "unspecified",
        "notes": [
          "(0.2pp) Y/Y"
        ],
        "quote": "CET1 ratio\n15.0%\n(0.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            123,
            1108,
            242,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "value": "18.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "18.2%",
        "label": "ROTCE",
        "basis": "unspecified",
        "notes": [
          "+0.7pp Y/Y"
        ],
        "quote": "ROTCE\n18.2%\n+0.7pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            373,
            1108,
            272,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q1-fy25",
    "company": "Morgan Stanley",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 17.7,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 9,
          "notes": [
            "+28% Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 7.3,
          "notes": [
            "+6% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.6,
          "notes": [
            "+16% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 12.1,
        "notes": [
          "Source rounded expense detail sums to $12.0B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.5
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.1
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.2
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.4
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.6,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.3,
        "notes": [
          "+26% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +28%",
                "净利率 28%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +6%",
                "净利率 21%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +16%",
                "净利率 16%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图费用明细经舍入合计为 $12.0B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "税前利润",
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +26%"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.3%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.3%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            122,
            1107,
            242,
            151
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "23.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "23.0%",
        "basis": "unspecified",
        "notes": [
          "+3.3pp Y/Y"
        ],
        "quote": "ROTCE\n23.0%\n+3.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            371,
            1107,
            275,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q1-fy23",
    "company": "Morgan Stanley",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q1-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 14.5,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 6.8,
          "notes": [
            "(11%) Y/Y",
            "28% net margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.6,
          "notes": [
            "+11% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.3,
          "notes": [
            "(3%) Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 10.5,
        "notes": [
          "Source rounded detail sums to $10.4B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.4
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 0.9
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 0.9
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.4
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0.2,
        "notes": [
          "Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0.2
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
        "label": "Income before credit-loss provision",
        "value": 4,
        "notes": [
          "Derived accounting subtotal: revenue $14.5B less noninterest expenses $10.5B; not independently displayed in Source."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3,
        "notes": [
          "(18%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": []
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": []
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": []
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "原图舍入后的费用明细合计 $10.4B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "扣除信用损失拨备前利润",
            "notes": [
              "计算小计：收入 $14.5B 减非利息费用 $10.5B；原图未单独显示。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (18%)"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1_ratio",
        "label": "CET1 ratio",
        "value": "15.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.1%",
        "basis": "unspecified",
        "notes": [
          "+0.6pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.1%\n+0.6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            150,
            1152,
            242,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "16.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "16.9%",
        "basis": "unspecified",
        "notes": [
          "(2.9pp) Y/Y"
        ],
        "quote": "ROTCE\n16.9%\n(2.9pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            400,
            1152,
            272,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q3-fy24",
    "company": "Morgan Stanley",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q3-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 15.4,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 6.8,
          "notes": [
            "+20% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 7.3,
          "notes": [
            "+14% Y/Y",
            "22% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.5,
          "notes": [
            "+9% Y/Y",
            "13% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 11.1,
        "notes": [
          "Rounded expense detail totals $11.0B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.7
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.1
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.2,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.2
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.2,
        "notes": [
          "+32% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +20%",
                "净利率 21%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +14%",
                "净利率 22%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +9%",
                "净利率 13%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "取整后的费用分项合计为 $11.0B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ],
            "label": "税前利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +32%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.5 个百分点)"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +4.0 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "value": "15.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.1%",
        "label": "CET1 ratio",
        "basis": "unspecified",
        "notes": [
          "(0.5pp) Y/Y"
        ],
        "quote": "CET1 ratio\n15.1%\n(0.5pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1108,
            242,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "value": "17.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "17.5%",
        "label": "ROTCE",
        "basis": "unspecified",
        "notes": [
          "+4.0pp Y/Y"
        ],
        "quote": "ROTCE\n17.5%\n+4.0pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1108,
            272,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q1-fy24",
    "company": "Morgan Stanley",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/morgan-stanley-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 15.1,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 7,
          "notes": [
            "+3% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.9,
          "notes": [
            "+5% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.4,
          "notes": [
            "+7% Y/Y",
            "14% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Non interest expenses",
        "value": 10.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.7
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.4
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business dev.",
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
        "total": 0,
        "items": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9
      }
    },
    "operatingOtherIncome": {
      "total": 0.006,
      "items": [
        {
          "id": "provision_credit_losses",
          "label": "Provision for credit losses",
          "value": 0.006
        }
      ]
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.4
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "+14% Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "literal": "15.1%",
        "value": "15.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "CET1 ratio\n15.1%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1152,
            240,
            150
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "literal": "19.7%",
        "value": "19.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2.8pp Y/Y"
        ],
        "quote": "ROTCE\n19.7%\n+2.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1152,
            272,
            150
          ]
        }
      },
      {
        "id": "eps",
        "label": "EPS",
        "literal": "$2.02",
        "value": "0.00202",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "EPS $2.02",
        "anchor": {
          "type": "image-box",
          "box": [
            2406,
            383,
            130,
            30
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +3%",
                "净利率 26%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +5%",
                "净利率 20%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +7%",
                "净利率 14%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与 交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与 业务开发"
              },
              {
                "id": "other_expenses",
                "label": "其他"
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
              "id": "provision_credit_losses",
              "label": "信用损失拨备"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "税前利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +14%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +2.8 个百分点"
            ]
          },
          {
            "id": "eps",
            "label": "EPS"
          }
        ]
      }
    }
  },
  {
    "key": "morgan-stanley-q3-fy25",
    "company": "Morgan Stanley",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 18.2,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 8.5,
          "notes": [
            "+25% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 8.2,
          "notes": [
            "+13% Y/Y",
            "23% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.7,
          "notes": [
            "+13% Y/Y",
            "16% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 12.2,
        "notes": [
          "Non interest expenses"
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 7.4
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.1
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.1
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
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
        "label": "Revenue before noninterest expenses",
        "value": 18.2,
        "notes": [
          "Schema subtotal; not separately labeled in the Source."
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
        "value": 4.7,
        "notes": [
          "+44% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +25%",
                "净利率 29%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +13%",
                "净利率 23%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +13%",
                "净利率 16%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "tax": {
            "label": "税费"
          },
          "operatingExpenses": {
            "notes": [
              "非利息费用"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "扣除非利息费用前的收入",
            "notes": [
              "Schema 小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +44%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.1 个百分点"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 +6.0 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.2%",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.2%\n+0.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            123,
            1108,
            242,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "23.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "23.5%",
        "basis": "unspecified",
        "notes": [
          "+6.0pp Y/Y"
        ],
        "quote": "ROTCE\n23.5%\n+6.0pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            373,
            1108,
            272,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q2-fy23",
    "company": "Morgan Stanley",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q2-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 13.5,
      "notes": [
        "+2% Y/Y",
        "Rounded segments total $13.7B before $0.1B eliminations; $0.1B difference to reported revenue is within rounding."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 5.7
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.7
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.3
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 10.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.3
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 0.9
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 0.9
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0.2,
        "notes": [
          "Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit loss",
            "value": 0.2
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
        "id": "pre_provision_income",
        "label": "Pre-provision income",
        "value": 3,
        "notes": [
          "Schema subtotal: revenue less noninterest expenses, before credit loss provision."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.2,
        "notes": [
          "(13%) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.5%",
        "basis": "unspecified",
        "notes": [
          "+0.3pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.5%\n+0.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1152,
            241,
            148
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "12.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "12.1%",
        "basis": "unspecified",
        "notes": [
          "(1.7pp) Y/Y"
        ],
        "quote": "ROTCE\n12.1%\n(1.7pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1152,
            272,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +2%",
            "分部收入扣除抵销后与总收入相差 $0.1B，属于舍入差异。"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券"
            },
            {
              "id": "wealth_management",
              "label": "财富管理"
            },
            {
              "id": "investment_management",
              "label": "投资管理"
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
              },
              {
                "id": "other_expenses",
                "label": "其他"
              }
            ]
          },
          "operatingExpenses": {
            "notes": [
              "信用损失拨备使用营业费用字段。"
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
            "label": "拨备前利润",
            "notes": [
              "收入扣除非利息费用、尚未扣除信用损失拨备的核算小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (13%)"
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
            "id": "rotce",
            "label": "有形普通股权益回报率",
            "notes": [
              "同比 (1.7 个百分点)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "morgan-stanley-q3-fy23",
    "company": "Morgan Stanley",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 13.3,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": [
            "Institutional",
            "Securities"
          ],
          "value": 5.7,
          "notes": [
            "(3%) Y/Y",
            "21% net margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "wealth_management",
          "label": [
            "Wealth",
            "Management"
          ],
          "value": 6.4,
          "notes": [
            "+5% Y/Y",
            "27% net margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "investment_management",
          "label": [
            "Investment",
            "Management"
          ],
          "value": 1.3,
          "notes": [
            "+14% Y/Y",
            "18% net margin",
            "+8pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 10,
        "notes": [
          "Rounded expense items sum to $10.1B."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 5.9
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 0.9
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 0.9
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
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
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.1
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
        "id": "pre_provision_income",
        "label": "Pre-provision pretax income",
        "value": 3.3
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.1
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.4,
        "notes": [
          "(19%) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.5%",
        "basis": "unspecified",
        "notes": [
          "+0.7pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.5%\n+0.7pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1152,
            241,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "13.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "13.5%",
        "basis": "unspecified",
        "notes": [
          "(1.1pp) Y/Y"
        ],
        "quote": "ROTCE\n13.5%\n(1.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1152,
            272,
            149
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
            "同比 +2%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 (3%)",
                "净利率 21%",
                "同比 (7 个百分点)"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +5%",
                "净利率 27%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +14%",
                "净利率 18%",
                "同比 +8 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "舍入后的费用明细合计为 $10.1B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "拨备前税前利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (19%)"
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
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 (1.1 个百分点)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "morgan-stanley-q4-fy22",
    "company": "Morgan Stanley",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.7,
      "notes": [
        "(12%) Y/Y",
        "Segment revenue sums to $12.9B before $0.1B eliminations; independent displayed figures are rounded."
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 4.8,
          "notes": [
            "(28%) Y/Y",
            "14% net margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 6.6,
          "notes": [
            "+6% Y/Y",
            "21% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.5,
          "notes": [
            "(17%) Y/Y",
            "11% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 9.9,
        "notes": [],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 5.6
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 0.9
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 0.9
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.9
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.4
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business dev.",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 0.9
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
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
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.8,
        "notes": [
          "Schema adapter subtotal for the financial-institution waterfall."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.8
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.3,
        "notes": [
          "(40%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 (12%)",
            "分部收入合计 $12.9B，抵销 $0.1B；各项显示金额独立取整。"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 (28%)",
                "净利率 14%",
                "同比 (7 个百分点)"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +6%",
                "净利率 21%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 (17%)",
                "净利率 11%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
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
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "税前利润",
            "notes": [
              "金融机构瀑布图的 schema 适配小计。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (40%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.7 个百分点)"
            ]
          },
          {
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 (7.2 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.3%",
        "basis": "unspecified",
        "notes": [
          "(0.7pp) Y/Y"
        ],
        "quote": "CET1 ratio\n15.3%\n(0.7pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            150,
            1152,
            241,
            149
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "12.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "12.6%",
        "basis": "unspecified",
        "notes": [
          "(7.2pp) Y/Y"
        ],
        "quote": "ROTCE\n12.6%\n(7.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1152,
            272,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "morgan-stanley-q4-fy24",
    "company": "Morgan Stanley",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/morgan-stanley-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 16.2,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "institutional_securities",
          "label": "Institutional Securities",
          "value": 7.3,
          "notes": [
            "+47% Y/Y",
            "26% net margin"
          ]
        },
        {
          "id": "wealth_management",
          "label": "Wealth Management",
          "value": 7.5,
          "notes": [
            "+13% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "investment_management",
          "label": "Investment Management",
          "value": 1.6,
          "notes": [
            "+12% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "non_interest_expenses",
        "label": "Noninterest expenses",
        "value": 11.2,
        "notes": [
          "Source expense detail sums to $11.3B due to rounded line items."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.3
          },
          {
            "id": "information_communications",
            "label": "Information & communications",
            "value": 1.1
          },
          {
            "id": "brokerage_clearing_exchange",
            "label": "Brokerage, clearing & exchange fees",
            "value": 1.2
          },
          {
            "id": "professional_services",
            "label": "Professional services",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.5
          },
          {
            "id": "marketing_business_development",
            "label": "Marketing & business development",
            "value": 0.3
          },
          {
            "id": "other_expenses",
            "label": "Other",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 0.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Provision for credit losses",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
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
        "id": "pretax_income",
        "label": "Pre-provision pretax income",
        "value": 5
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.7,
        "notes": [
          "+142% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "institutional_securities",
              "label": "机构证券",
              "notes": [
                "同比 +47%",
                "净利率 26%"
              ]
            },
            {
              "id": "wealth_management",
              "label": "财富管理",
              "notes": [
                "同比 +13%",
                "净利率 20%"
              ]
            },
            {
              "id": "investment_management",
              "label": "投资管理",
              "notes": [
                "同比 +12%",
                "净利率 19%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "非利息费用",
            "notes": [
              "来源图费用分项因四舍五入合计为 $11.3B。"
            ],
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "information_communications",
                "label": "信息与通信"
              },
              {
                "id": "brokerage_clearing_exchange",
                "label": "经纪、清算与交易所费用"
              },
              {
                "id": "professional_services",
                "label": "专业服务"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "marketing_business_development",
                "label": "市场与业务开发"
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
            "label": "拨备前税前利润"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +142%"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.7%",
        "basis": "unspecified",
        "notes": [
          "+0.2pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.7%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            134,
            1108,
            241,
            148
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "20.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "20.2%",
        "basis": "unspecified",
        "notes": [
          "+11.8pp Y/Y"
        ],
        "quote": "ROTCE\n20.2%\n+11.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            384,
            1108,
            273,
            148
          ]
        }
      }
    ]
  }
]);
})(window);
