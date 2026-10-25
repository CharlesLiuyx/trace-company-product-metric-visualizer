/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "hubspot-q1-fy26",
    "company": "HubSpot",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 881,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 862,
          "notes": [
            "+23% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 19,
          "notes": [
            "+22% Y/Y",
            "9% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 146
      },
      "operatingExpenses": {
        "total": 707,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 386,
            "notes": [
              "44% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 234,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 86,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7
      }
    },
    "otherIncome": {
      "total": 11,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 11
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
        "value": 735,
        "notes": [
          "83% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "3% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 33,
        "notes": [
          "4% margin",
          "+6pp Y/Y",
          "Displayed rounded bridge sums to $32M; source chart shows $33M net profit."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%",
                "毛利率 85%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +22%",
                "毛利率 9%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 44%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +6 个百分点",
              "显示值四舍五入桥接合计为 $32M；源图显示净利润为 $33M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hubspot-q4-fy25",
    "company": "HubSpot",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 847,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 829,
          "notes": [
            "+21% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 18,
          "notes": [
            "+12% Y/Y",
            "8% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 138
      },
      "operatingExpenses": {
        "total": 661,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 358,
            "notes": [
              "42% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 221,
            "notes": [
              "26% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 82,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7
      }
    },
    "otherIncome": {
      "total": 13,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 13
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
        "value": 709,
        "notes": [
          "84% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 48,
        "notes": [
          "6% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 54,
        "notes": [
          "6% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +21%",
                "毛利率 85%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +12%",
                "毛利率 8%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hubspot-q3-fy25",
    "company": "HubSpot",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 810,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 792,
          "notes": [
            "+21% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 18,
          "notes": [
            "+19% Y/Y",
            "8% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 134
      },
      "operatingExpenses": {
        "total": 665,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 355,
            "notes": [
              "44% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 228,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 81,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7
      }
    },
    "otherIncome": {
      "total": 12,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 12
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
        "value": 676,
        "notes": [
          "84% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 11,
        "notes": [
          "1% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 17,
        "notes": [
          "2% margin",
          "+1pp Y/Y",
          "Displayed rounded bridge sums to $16M; source chart shows $17M net profit."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +21%",
                "毛利率 85%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +19%",
                "毛利率 8%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 44%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +1 个百分点",
              "显示值四舍五入桥接合计为 $16M；源图显示净利润为 $17M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hubspot-q4-fy23",
    "company": "HubSpot",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 582,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 570,
          "notes": [
            "+24% Y/Y",
            "87% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 12,
          "notes": [
            "+2% Y/Y",
            "(18%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 89,
        "notes": []
      },
      "operatingExpenses": {
        "total": 518,
        "notes": [
          "Source-rounded expense components total $517M."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 281,
            "notes": [
              "48% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 163,
            "notes": [
              "28% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 70,
            "notes": [
              "12% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 4,
            "notes": [
              "1% of revenue"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 493,
        "notes": [
          "85% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -24,
        "notes": [
          "(4%) margin",
          "(1pp) Y/Y",
          "Source-rounded gross profit less operating expenses is ($25M)."
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "205000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "205K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 205K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            234,
            1240,
            404,
            39
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.365",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,365",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Average Revenue $11,365 +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            176,
            1285,
            514,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +24%",
                "毛利率 87%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +2%",
                "毛利率 (18%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 48%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净损益"
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q2-fy26",
    "company": "HubSpot",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 912,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 894,
          "notes": [
            "+20% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 18,
          "notes": [
            "+8% Y/Y",
            "8% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 161
      },
      "operatingExpenses": {
        "total": 708,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 398,
            "notes": [
              "44% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 226,
            "notes": [
              "25% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 83,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 6
      }
    },
    "otherIncome": {
      "total": 6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 6
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
        "value": 751,
        "notes": [
          "82% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 43,
        "notes": [
          "5% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 43,
        "notes": [
          "5% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%",
                "毛利率 84%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +8%",
                "毛利率 8%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 44%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +8 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "hubspot-q3-fy22",
    "company": "HubSpot",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q3-fy22.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 444,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 435,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 9,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 82
      },
      "operatingExpenses": {
        "total": 394,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 230,
            "notes": [
              "52% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 114,
            "notes": [
              "26% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 50,
            "notes": [
              "11% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 362,
        "notes": [
          "82% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -32,
        "notes": [
          "(7%) margin",
          "(3pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "158905",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "158,905",
        "quote": "Customers 158,905 +24% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            146,
            1227,
            573,
            113
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.233",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,233",
        "quote": "Average Revenue $11,233 +7% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            146,
            1227,
            573,
            113
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +13%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 52%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净损益未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q2-fy23",
    "company": "HubSpot",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 529,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 518,
          "notes": [
            "+26% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "+23% Y/Y",
            "(15%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 87,
        "notes": []
      },
      "operatingExpenses": {
        "total": 560,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 265,
            "notes": [
              "50% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 170,
            "notes": [
              "32% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 61,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 64,
            "notes": [
              "12% of revenue"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 442,
        "notes": [
          "84% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -118,
        "notes": [
          "(22%) margin",
          "(10pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "185000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "185K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 185K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            146,
            1235,
            568,
            48
          ]
        }
      },
      {
        "id": "average-revenue",
        "label": "Average Revenue",
        "value": "11.432",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,432",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Average Revenue $11,432 +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            146,
            1283,
            568,
            49
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
            "同比 +25%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +26%",
                "毛利率 86%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +23%",
                "毛利率 (15%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 50%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 12%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 (10 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "average-revenue",
            "label": "平均收入",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q3-fy23",
    "company": "HubSpot",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 558,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 546,
          "notes": [
            "+25% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 12,
          "notes": [
            "+31% Y/Y",
            "(17%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 88,
        "notes": []
      },
      "operatingExpenses": {
        "total": 490,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 271,
            "notes": [
              "49% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 157,
            "notes": [
              "28% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 61,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 470,
        "notes": [
          "84% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -20,
        "notes": [
          "(4%) margin",
          "+4pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "194000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "194K",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 194K +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            180,
            952,
            305,
            32
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.52",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,520",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Average Revenue $11,520 +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            987,
            397,
            30
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
            "同比 +26%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +25%",
                "毛利率 86%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +31%",
                "毛利率 (17%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 49%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q1-fy24",
    "company": "HubSpot",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 617,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 604,
          "notes": [
            "+23% Y/Y",
            "87% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 14,
          "notes": [
            "+15% Y/Y",
            "(5%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 95
      },
      "operatingExpenses": {
        "total": 546,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 300,
            "notes": [
              "49% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 176,
            "notes": [
              "28% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 69,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "1% of revenue",
              "(6pp) Y/Y"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 522,
        "notes": [
          "85% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -23,
        "notes": [
          "(4%) margin",
          "+5pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "217000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "217K",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 217K +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            236,
            1241,
            396,
            42
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.447",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,447",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Average Revenue $11,447 +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            173,
            1284,
            521,
            40
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
            "同比 +23%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%",
                "毛利率 87%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +15%",
                "毛利率 (5%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 49%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%",
                  "同比 (6 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图在营业亏损处结束。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q1-fy23",
    "company": "HubSpot",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 502,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 490,
          "notes": [
            "+27% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 12,
          "notes": [
            "+12% Y/Y",
            "(15%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 82,
        "notes": []
      },
      "operatingExpenses": {
        "total": 464,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 251,
            "notes": [
              "50% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 127,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 57,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 29,
            "notes": [
              "6% of revenue"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 420,
        "notes": [
          "84% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -45,
        "notes": [
          "(9%) margin",
          "(6pp) Y/Y",
          "Source reports ($45M); rounded gross profit less operating expenses equals ($44M)."
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "177000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "177K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 177K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            234,
            1237,
            404,
            47
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.365",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,365",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Average Revenue $11,365 +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            176,
            1283,
            521,
            47
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%",
                "毛利率 86%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +12%",
                "毛利率 (15%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 50%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 6%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q2-fy24",
    "company": "HubSpot",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 637,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 624,
          "notes": [
            "+20% Y/Y",
            "87% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 13,
          "notes": [
            "+18% Y/Y",
            "(3%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 96
      },
      "operatingExpenses": {
        "total": 566,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 294,
            "notes": [
              "46% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 198,
            "notes": [
              "31% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 73,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(12pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 542,
        "notes": [
          "85% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -24,
        "notes": [
          "(4%) margin",
          "+18pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "228000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "228K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 228K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            237,
            1241,
            396,
            39
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.215",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,215",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Average Revenue $11,215 (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            176,
            1285,
            516,
            36
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%",
                "毛利率 87%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +18%",
                "毛利率 (3%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 46%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (12 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +18 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q2-fy25",
    "company": "HubSpot",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 761,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 745,
          "notes": [
            "+19% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 16,
          "notes": [
            "+21% Y/Y",
            "5% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 122
      },
      "operatingExpenses": {
        "total": 663,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 340,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 237,
            "notes": [
              "31% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 85,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 639,
        "notes": [
          "84% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -25,
        "notes": [
          "(3%) margin",
          "(1pp) Y/Y",
          "Rounded Source gross profit less operating expenses equals ($24M); Source reports ($25M)."
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "268000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "268K",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers 268K +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            238,
            1244,
            393,
            39
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.310",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,310",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Average Revenue $11,310 +1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            178,
            1285,
            507,
            39
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
            "同比 +19%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +19%",
                "毛利率 86%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +21%",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (1 个百分点)",
              "源图毛利润减营业费用的舍入值为 ($24M)；源图列示 ($25M)。"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q3-fy24",
    "company": "HubSpot",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 670,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 654,
          "notes": [
            "+20% Y/Y",
            "87% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 15,
          "notes": [
            "+28% Y/Y",
            "5% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 99
      },
      "operatingExpenses": {
        "total": 580,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 310,
            "notes": [
              "46% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 191,
            "notes": [
              "29% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 78,
            "notes": [
              "12% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 570,
        "notes": [
          "85% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -10,
        "notes": [
          "(1%) margin",
          "+2pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "238000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "238K",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 238K +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            234,
            1241,
            404,
            40
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.235",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,235",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Average Revenue $11,235 (2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            169,
            1284,
            527,
            43
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%",
                "毛利率 87%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +28%",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 46%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q4-fy24",
    "company": "HubSpot",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 703,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 687,
          "notes": [
            "+21% Y/Y",
            "87% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 16,
          "notes": [
            "+36% Y/Y",
            "13% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 103
      },
      "operatingExpenses": {
        "total": 611,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 315,
            "notes": [
              "45% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 214,
            "notes": [
              "30% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 81,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 600,
        "notes": [
          "85% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -11,
        "notes": [
          "(2%) margin",
          "+2pp Y/Y"
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "248000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "248K",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers 248K +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            234,
            1245,
            397,
            36
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.312",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,312",
        "basis": "unspecified",
        "notes": [
          "(0.5%) Y/Y"
        ],
        "quote": "Average Revenue $11,312 (0.5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            161,
            1284,
            540,
            38
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +21%",
                "毛利率 87%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +36%",
                "毛利率 13%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 45%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 (0.5%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "hubspot-q1-fy25",
    "company": "HubSpot",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/hubspot-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 714,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 699,
          "notes": [
            "+16% Y/Y",
            "86% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 15,
          "notes": [
            "+13% Y/Y",
            "3% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 115,
        "notes": []
      },
      "operatingExpenses": {
        "total": 627,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 327,
            "notes": [
              "46% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 220,
            "notes": [
              "31% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 79,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 599,
        "notes": [
          "84% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -27,
        "notes": [
          "(4%) margin",
          "+0pp Y/Y",
          "Source rounded gross profit $599M minus operating expenses $627M implies ($28M); displayed operating loss is ($27M)."
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
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "258000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "258K",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers 258K +19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            240,
            1245,
            390,
            35
          ]
        }
      },
      {
        "id": "average_revenue",
        "label": "Average Revenue",
        "value": "11.038",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11,038",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Average Revenue $11,038 (4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            178,
            1285,
            510,
            35
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
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%",
                "毛利率 86%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +13%",
                "毛利率 3%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 46%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +0 个百分点",
              "原图毛利润 $599M 减营业费用 $627M 为 ($28M)；原图标示营业亏损 ($27M)，保留舍入差异。"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "average_revenue",
            "label": "平均收入",
            "notes": [
              "同比 (4%)"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
