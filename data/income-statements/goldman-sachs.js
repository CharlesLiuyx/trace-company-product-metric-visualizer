/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "goldman-sachs-q2-fy26",
    "company": "Goldman Sachs",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/goldman-sachs-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 20.3,
      "notes": [
        "+39% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 15.5,
          "notes": [
            "+53% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.6,
          "notes": [
            "+20% Y/Y",
            "19% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.2,
          "notes": [
            "(64%) Y/Y",
            "(19%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.1,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 11.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 6.1
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 3.1
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.6
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.9
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
        "label": "Revenue after credit loss provision",
        "value": 20.2,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8.6
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.6,
        "notes": [
          "+78% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +39%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +53%",
                "净利率 37%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +20%",
                "净利率 19%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 (64%)",
                "净利率 (19%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +78%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "goldman-sachs-q1-fy26",
    "company": "Goldman Sachs",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/goldman-sachs-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.2,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 12.7,
          "notes": [
            "+19% Y/Y",
            "37% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.1,
          "notes": [
            "+10% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.4,
          "notes": [
            "(33%) Y/Y",
            "16% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 10.4,
        "notes": [
          "Operating expense line items sum to $10.5B because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 5.4
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 2.5
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.6
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 16.9,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
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
        "value": 5.6,
        "notes": [
          "+19% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +19%",
                "净利率 37%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +10%",
                "净利率 20%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 (33%)",
                "净利率 16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
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
    "key": "goldman-sachs-q4-fy25",
    "company": "Goldman Sachs",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/goldman-sachs-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 13.5,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 10.4,
          "notes": [
            "+22% Y/Y",
            "34% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.7,
          "notes": [
            "(1%) Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": -1.7,
          "notes": [
            "(7%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0
      },
      "operatingExpenses": {
        "total": 9.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.7
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 2.2
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.6
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
      }
    },
    "operatingOtherIncome": {
      "total": 2.1,
      "items": [
        {
          "id": "provision_for_credit_loss",
          "label": "Provision for credit loss",
          "value": 2.1,
          "notes": [
            "The source depicts this as a green inflow to pretax income; retained as an operating-stage adjustment."
          ]
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
        "id": "gross_profit",
        "label": "Revenue before operating expenses",
        "value": 13.5,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.6,
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
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +22%",
                "净利率 34%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (1%)",
                "净利率 20%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "净利率 (7%)"
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
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
              "id": "provision_for_credit_loss",
              "label": "信用损失拨备",
              "notes": [
                "来源图将其绘制为流入税前利润的绿色经营阶段调整项。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除运营费用前收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
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
    "key": "goldman-sachs-q1-fy25",
    "company": "Goldman Sachs",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.1,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 10.7,
          "notes": [
            "+10% Y/Y",
            "38% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.7,
          "notes": [
            "(3%) Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "(3%) Y/Y",
            "3% net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 9.1,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.9
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.8
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 14.8,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.6,
        "notes": [
          "Source displays $5.6B; displayed revenue less provision and operating expenses is $5.7B due to rounded amounts."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.7,
        "notes": [
          "+15% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +10%",
                "净利率 38%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (3%)",
                "净利率 18%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 (3%)",
                "净利率 3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "原图税前利润为 $5.6B；按显示的收入减拨备与运营费用为 $5.7B，保留原图舍入差异。"
            ]
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
              "环比 (0.2 个百分点)"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +2.1 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.8%",
        "quote": "CET1 ratio\n14.8%\n(0.2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1133,
            242,
            148
          ]
        },
        "basis": "unspecified",
        "notes": [
          "(0.2pp) Q/Q"
        ]
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "16.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "16.9%",
        "quote": "Annualized ROE\n16.9%\n+2.1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1133,
            352,
            148
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+2.1pp Y/Y"
        ]
      }
    ]
  },
  {
    "key": "goldman-sachs-q4-fy24",
    "company": "Goldman Sachs",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/goldman-sachs-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 13.9,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 8.5,
          "notes": [
            "+33% Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.7,
          "notes": [
            "+8% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+16% Y/Y",
            "(29%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 3.8
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.9
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 13.5,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
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
        "value": 4.1,
        "notes": [
          "+105% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +33%",
                "净利率 35%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +8%",
                "净利率 29%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +16%",
                "净利率 (29%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +105%"
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
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +7.5 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.0%",
        "basis": "unspecified",
        "notes": [
          "+0.6pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.0%\n+0.6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1133,
            241,
            148
          ]
        }
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "14.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.6%",
        "basis": "unspecified",
        "notes": [
          "+7.5pp Y/Y"
        ],
        "quote": "Annualized ROE\n14.6%\n+7.5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            369,
            1133,
            349,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q1-fy23",
    "company": "Goldman Sachs",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q1-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 12.2,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 8.4,
          "notes": [
            "(16%) Y/Y",
            "35% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.2,
          "notes": [
            "+24% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.6,
          "notes": [
            "+110% Y/Y",
            "(44%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0
      },
      "operatingExpenses": {
        "total": 8.4,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.1
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.4
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 1
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
        "id": "gross_profit",
        "label": "Revenue before operating expenses",
        "value": 12.2,
        "notes": [
          "Subtotal not separately displayed in the source."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4,
        "notes": [
          "Source displays $5.6B; displayed revenue less provision and operating expenses is $5.7B due to rounded amounts."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.2,
        "notes": [
          "(18%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 (5%)"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 (16%)",
                "净利率 35%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +24%",
                "净利率 15%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +110%",
                "净利率 (44%)"
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
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
              "id": "provision_for_credit_loss",
              "label": "信用损失拨备回拨"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "扣除运营费用前收入",
            "notes": [
              "来源图未单独列示的小计。"
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
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 (3.2 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.8%",
        "basis": "unspecified",
        "notes": [
          "+0.4pp Y/Y"
        ],
        "quote": "CET1 ratio\n14.8%\n+0.4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            1152,
            241,
            148
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
          "(3.2pp) Y/Y"
        ],
        "quote": "ROTCE\n12.6%\n(3.2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1152,
            273,
            148
          ]
        }
      }
    ],
    "operatingOtherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "provision_for_credit_loss",
          "label": "Provision for credit losses",
          "value": 0.2
        }
      ]
    }
  },
  {
    "key": "goldman-sachs-q1-fy24",
    "company": "Goldman Sachs",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.2,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 9.7,
          "notes": [
            "+15% Y/Y",
            "36% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.8,
          "notes": [
            "+18% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+24% Y/Y",
            "(13%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.6
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.5
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
          }
        ],
        "notes": [
          "Source-rounded items sum to $8.6B versus the displayed $8.7B total."
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 13.9,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.2,
        "notes": []
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.1,
        "notes": [
          "+20% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +15%",
                "净利率 36%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +18%",
                "净利率 18%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +24%",
                "净利率 (13%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": []
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +20%"
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
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +3.2 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.7%",
        "basis": "unspecified",
        "notes": [
          "(0.1pp) Y/Y"
        ],
        "quote": "CET1 ratio\n14.7%\n(0.1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1152,
            241,
            148
          ]
        }
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "14.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.8%",
        "basis": "unspecified",
        "notes": [
          "+3.2pp Y/Y"
        ],
        "quote": "Annualized ROE\n14.8%\n+3.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1152,
            350,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q2-fy23",
    "company": "Goldman Sachs",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.9,
      "notes": [
        "(8%) Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 7.2,
          "notes": [
            "(14%) Y/Y",
            "29% net margin"
          ],
          "valueText": "$7.2B"
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3,
          "notes": [
            "(4%) Y/Y",
            "(7%) net margin"
          ],
          "valueText": "$3.0B"
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+92% Y/Y",
            "(101%) net margin"
          ],
          "valueText": "$0.7B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.6,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 3.6
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.4
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.1
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 1.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 10.3,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 1.7,
        "notes": [
          "Source rounded amounts: revenue less provision and operating expenses equals $1.8B."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 1.2,
        "notes": [
          "(58%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (8%)"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 (14%)",
                "净利率 29%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (4%)",
                "净利率 (7%)"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +92%",
                "净利率 (101%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "原图金额经舍入：收入减拨备及运营费用为 $1.8B。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (58%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "环比 +0.1 个百分点"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "环比 (7.6 个百分点)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.9%",
        "basis": "unspecified",
        "notes": [
          "+0.1pp Q/Q"
        ],
        "quote": "CET1 ratio\n14.9%\n+0.1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1152,
            241,
            148
          ]
        }
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "4.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "4.0%",
        "basis": "unspecified",
        "notes": [
          "(7.6pp) Q/Q"
        ],
        "quote": "Annualized ROE\n4.0%\n(7.6pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1152,
            352,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q2-fy24",
    "company": "Goldman Sachs",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.7,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 8.2,
          "notes": [
            "+14% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.9,
          "notes": [
            "+27% Y/Y",
            "18% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+2% Y/Y",
            "(17%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.2
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.7
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 12.4,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.9
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3,
        "notes": [
          "+150% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +14%",
                "净利率 30%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +27%",
                "净利率 18%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +2%",
                "净利率 (17%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +150%"
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
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +6.9 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.8%",
        "basis": "unspecified",
        "notes": [
          "+0.4pp Y/Y"
        ],
        "quote": "CET1 ratio\n14.8%\n+0.4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1152,
            241,
            148
          ]
        }
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "10.9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.9%",
        "basis": "unspecified",
        "notes": [
          "+6.9pp Y/Y"
        ],
        "quote": "Annualized ROE\n10.9%\n+6.9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            369,
            1152,
            350,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q2-fy25",
    "company": "Goldman Sachs",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.6,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 10.1,
          "notes": [
            "+24% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.8,
          "notes": [
            "(3%) Y/Y",
            "17% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+2% Y/Y",
            "(7%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 9.2,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.7
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 2,
            "valueText": "($2.0B)"
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 14.2,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5,
        "notes": [
          "Source displays $5.6B; displayed revenue less provision and operating expenses is $5.7B due to rounded amounts."
        ],
        "valueText": "$5.0B"
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.7,
        "notes": [
          "+22% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +24%",
                "净利率 31%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (3%)",
                "净利率 17%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +2%",
                "净利率 (7%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "原图税前利润为 $5.6B；按显示的收入减拨备与运营费用为 $5.7B，保留原图舍入差异。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +22%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "环比 (0.3 个百分点)"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +1.9 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.5%",
        "quote": "CET1 ratio\n14.5%\n(0.3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1133,
            241,
            150
          ]
        },
        "basis": "unspecified",
        "notes": [
          "(0.3pp) Q/Q"
        ]
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "12.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "12.8%",
        "quote": "Annualized ROE\n12.8%\n+1.9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1133,
            352,
            150
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+1.9pp Y/Y"
        ]
      }
    ]
  },
  {
    "key": "goldman-sachs-q3-fy23",
    "company": "Goldman Sachs",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/goldman-sachs-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.8,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 8,
          "notes": [
            "+6% Y/Y",
            "29% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.2,
          "notes": [
            "(20%) Y/Y",
            "3% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.6,
          "notes": [
            "+53% Y/Y",
            "(79%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.007,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ],
        "valueText": "($7M)"
      },
      "operatingExpenses": {
        "total": 9.1,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.2
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.5
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.1
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 1.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 11.793,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
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
        "value": 2.1,
        "notes": [
          "(33%) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.8",
        "literal": "14.8%",
        "notes": [
          "+0.5pp Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1152,
            241,
            148
          ]
        },
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n14.8%\n+0.5pp Q/Q"
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "7.1",
        "literal": "7.1%",
        "notes": [
          "(3.9pp) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1152,
            350,
            148
          ]
        },
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Annualized ROE\n7.1%\n(3.9pp) Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +6%",
                "净利率 29%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (20%)",
                "净利率 3%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +53%",
                "净利率 (79%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入"
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (33%)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "环比 +0.5 个百分点"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 (3.9 个百分点)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "goldman-sachs-q3-fy24",
    "company": "Goldman Sachs",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.7,
      "notes": [
        "+7% Y/Y",
        "Source rounding: segment values sum to $12.8B versus reported total $12.7B."
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 8.6,
          "notes": [
            "+7% Y/Y",
            "31% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.8,
          "notes": [
            "+16% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.4,
          "notes": [
            "(32%) Y/Y",
            "(110%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.4,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.1
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.7
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.6
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 12.3,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3,
        "notes": [
          "+45% Y/Y"
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
            "原图舍入差异：分部合计 $12.8B，总收入为 $12.7B。"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +7%",
                "净利率 31%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +16%",
                "净利率 20%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 (32%)",
                "净利率 (110%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +45%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 +0.2 个百分点"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +3.3 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "14.6%",
        "quote": "CET1 ratio\n14.6%\n+0.2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1133,
            241,
            150
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+0.2pp Y/Y"
        ]
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "10.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "10.4%",
        "quote": "Annualized ROE\n10.4%\n+3.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1133,
            352,
            150
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+3.3pp Y/Y"
        ]
      }
    ]
  },
  {
    "key": "goldman-sachs-q3-fy25",
    "company": "Goldman Sachs",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.2,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 10.1,
          "notes": [
            "+18% Y/Y",
            "32% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.4,
          "notes": [
            "+17% Y/Y",
            "20% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.7,
          "notes": [
            "+71% Y/Y",
            "(4%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.3,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 9.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 4.7
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 2
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.5
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.9
          }
        ],
        "notes": [
          "Source-rounded expense items total $9.4B against the displayed $9.5B total."
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
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 14.9,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.4,
        "notes": [
          "Source displays $5.6B; displayed revenue less provision and operating expenses is $5.7B due to rounded amounts."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.1,
        "notes": [
          "+37% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 +18%",
                "净利率 32%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +17%",
                "净利率 20%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +71%",
                "净利率 (4%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
                "label": "其他"
              }
            ],
            "notes": [
              "来源各费用分项舍入后合计 $9.4B，显示总额为 $9.5B。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "原图税前利润为 $5.6B；按显示的收入减拨备与运营费用为 $5.7B，保留原图舍入差异。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +37%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 (0.6 个百分点)"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +3.8 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.4",
        "literal": "14.4%",
        "notes": [
          "(0.6pp) Y/Y"
        ],
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n14.4%\n(0.6pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1133,
            241,
            148
          ]
        }
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "14.2",
        "literal": "14.2%",
        "notes": [
          "+3.8pp Y/Y"
        ],
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Annualized ROE\n14.2%\n+3.8pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            369,
            1133,
            349,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q4-fy22",
    "company": "Goldman Sachs",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/goldman-sachs-q4-fy22.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 10.6,
      "notes": [
        "(16%) Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 6.5,
          "notes": [
            "(14%) Y/Y",
            "28% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 3.6,
          "notes": [
            "(27%) Y/Y",
            "0% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.5,
          "notes": [
            "+171% Y/Y",
            "(129%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 1,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.1,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 3.8
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.4
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.7
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.7
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 9.6,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 1.5
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 1.3,
        "notes": [
          "(66%) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (16%)"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 (14%)",
                "净利率 28%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 (27%)",
                "净利率 0%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +171%",
                "净利率 (129%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 (66%)"
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
            "id": "rotce",
            "label": "ROTCE",
            "notes": [
              "同比 (11.6) 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "15.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "15.1%",
        "basis": "unspecified",
        "notes": [
          "+0.9pp Y/Y"
        ],
        "quote": "CET1 ratio\n15.1%\n+0.9pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            1153,
            241,
            148
          ]
        }
      },
      {
        "id": "rotce",
        "label": "ROTCE",
        "value": "4.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "4.8%",
        "basis": "unspecified",
        "notes": [
          "(11.6pp) Y/Y"
        ],
        "quote": "ROTCE\n4.8%\n(11.6pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1153,
            273,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "goldman-sachs-q4-fy23",
    "company": "Goldman Sachs",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/goldman-sachs-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.3,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "global_banking_markets",
          "label": "Global Banking & Markets",
          "value": 6.3,
          "notes": [
            "(3%) Y/Y",
            "27% net margin"
          ]
        },
        {
          "id": "asset_wealth_management",
          "label": "Asset & Wealth Management",
          "value": 4.4,
          "notes": [
            "+23% Y/Y",
            "15% net margin"
          ]
        },
        {
          "id": "platform_solutions",
          "label": "Platform Solutions",
          "value": 0.6,
          "notes": [
            "+12% Y/Y",
            "(62%) net margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "provision_for_credit_loss",
        "label": "Provision for credit loss",
        "value": 0.6,
        "notes": [
          "Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart."
        ]
      },
      "operatingExpenses": {
        "total": 8.5,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 3.6
          },
          {
            "id": "transaction_based",
            "label": "Transaction based",
            "value": 1.5
          },
          {
            "id": "market_development",
            "label": "Market development",
            "value": 0.2
          },
          {
            "id": "communication_technology",
            "label": "Communication, Technology",
            "value": 0.5
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.8
          },
          {
            "id": "occupancy",
            "label": "Occupancy",
            "value": 0.3
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 1.2
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Revenue after credit loss provision",
        "value": 10.7,
        "notes": [
          "Balancing subtotal; not labeled separately in the source chart."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 2.3
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2,
        "notes": [
          "+51% Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "global_banking_markets",
              "label": "全球银行与市场",
              "notes": [
                "同比 (3%)",
                "净利率 27%"
              ]
            },
            {
              "id": "asset_wealth_management",
              "label": "资产与财富管理",
              "notes": [
                "同比 +23%",
                "净利率 15%"
              ]
            },
            {
              "id": "platform_solutions",
              "label": "平台解决方案",
              "notes": [
                "同比 +12%",
                "净利率 (62%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "信用损失拨备",
            "notes": [
              "建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "transaction_based",
                "label": "交易相关"
              },
              {
                "id": "market_development",
                "label": "市场开发"
              },
              {
                "id": "communication_technology",
                "label": "通信与技术"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "occupancy",
                "label": "场地占用"
              },
              {
                "id": "professional_fees",
                "label": "专业费用"
              },
              {
                "id": "other",
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
            "label": "扣除信用损失拨备后的收入",
            "notes": [
              "平衡小计；来源图未单独标注。"
            ]
          },
          "operating": {
            "label": "税前利润"
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 +51%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cet1",
            "label": "CET1 比率",
            "notes": [
              "同比 -0.5 个百分点"
            ]
          },
          {
            "id": "roe",
            "label": "年化 ROE",
            "notes": [
              "同比 +2.7 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cet1",
        "label": "CET1 ratio",
        "value": "14.8",
        "literal": "14.8%",
        "notes": [
          "(0.5pp) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1152,
            241,
            148
          ]
        },
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "CET1 ratio\n14.8%\n(0.5pp) Y/Y"
      },
      {
        "id": "roe",
        "label": "Annualized ROE",
        "value": "7.1",
        "literal": "7.1%",
        "notes": [
          "+2.7pp Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            367,
            1152,
            352,
            148
          ]
        },
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Annualized ROE\n7.1%\n+2.7pp Y/Y"
      }
    ]
  }
]);
})(window);
