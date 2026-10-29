/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "monday-com-h1-fy24",
    "company": "Monday.com",
    "period": "H1 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-h1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 453,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "na",
          "label": "North America",
          "value": 242,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 98,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 47,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "rest",
          "label": "Rest of the world",
          "value": 66,
          "notes": [
            "+31% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 47
      },
      "operatingExpenses": {
        "total": 409,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 260,
            "notes": [
              "57% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 95,
            "notes": [
              "21% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 55,
            "notes": [
              "12% of revenue",
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 406,
        "notes": [
          "90% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3,
        "notes": [
          "(1%) margin",
          "+10pp Y/Y"
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
        "id": "ndr",
        "label": "NDR",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 110%",
        "basis": "unspecified",
        "quote": "NDR > 110%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            293,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "ndr10",
        "label": "10+ users",
        "value": "114",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 114%",
        "basis": "unspecified",
        "quote": "10+ users > 114%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            293,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "customers",
        "label": "Customers> $50K+",
        "value": "2713",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,713",
        "basis": "unspecified",
        "quote": "Customers> $50K+ 2,713 +44% Y/Y",
        "notes": [
          "+44% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            395,
            1205,
            347,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年上半年",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "na",
              "label": "北美",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东及非洲",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "rest",
              "label": "世界其他地区",
              "notes": [
                "同比 +31%"
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
                  "占收入 57%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +10 个百分点"
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
            "id": "ndr",
            "label": "净美元留存率"
          },
          {
            "id": "ndr10",
            "label": "10+ 用户净美元留存率"
          },
          {
            "id": "customers",
            "label": "ARR 超 $50K+ 客户",
            "notes": [
              "同比 +44%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "monday-com-q3-fy25",
    "company": "Monday.com",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q3-fy25.png",
    "roundingTolerance": 0.6,
    "revenue": {
      "total": 317,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 317,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 36
      },
      "operatingExpenses": {
        "total": 283,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 166,
            "notes": [
              "52% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 79,
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 38,
            "notes": [
              "12% of revenue",
              "(10pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 281,
        "notes": [
          "89% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2,
        "notes": [
          "(1%) margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +26%"
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
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (10 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单列税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单列净利润或净亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "monday-q4-fy25",
    "company": "Monday.com",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 334,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 334,
          "notes": [
            "+25% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 37
      },
      "operatingExpenses": {
        "total": 294,
        "notes": [
          "Source chart operating-expense detail sums to $295M because of displayed rounding."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 171,
            "notes": [
              "51% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 85,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 39,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No tax expense is shown; the source chart instead shows a $61M tax benefit."
        ]
      }
    },
    "otherIncome": {
      "total": 75,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 14
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
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
        "value": 297,
        "notes": [
          "89% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "1% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 77
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +25%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "notes": [
              "来源图中的营业费用明细因显示值四舍五入合计为 $295M。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 51%",
                  "同比 +1 个百分点"
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
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示税费，而是显示 $61M 的税收收益。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "finance",
              "label": "财务收入"
            },
            {
              "id": "tax_benefit",
              "label": "税收收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "monday-com-q1-fy26",
    "company": "Monday.com",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q1-fy26.png",
    "roundingTolerance": 0.65,
    "revenue": {
      "total": 351,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 351,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 38
      },
      "operatingExpenses": {
        "total": 293,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 165,
            "notes": [
              "47% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 92,
            "notes": [
              "26% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 36,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
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
      "total": 10,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 10
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
        "value": 313,
        "notes": [
          "89% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 20,
        "notes": [
          "6% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 28,
        "notes": [
          "8% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +24%"
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
                  "占收入 47%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
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
              "id": "finance",
              "label": "财务收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "monday-com-q2-fy26",
    "company": "Monday.com",
    "period": "Q2 FY26",
    "currency": "$",
    "unit": "M",
    "decimals": 3,
    "sourceImage": "input/processed/monday-com-q2-fy26.png",
    "roundingTolerance": 2.5,
    "notes": [
      "Amounts and captions are transcribed from the source infographic; displayed totals may differ from sums because each amount is independently rounded.",
      "NDR 109%",
      "10+ users 113%",
      "Customers> $50K+",
      "4,834 +31% Y/Y",
      "NDR = Net Dollar Retention",
      "The source ends at operating loss. Net income, income taxes and non-operating items are official supplementary data, without additional Sankey faces."
    ],
    "revenue": {
      "total": 365,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 365,
          "notes": [
            "+22% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 43,
        "notes": []
      },
      "operatingExpenses": {
        "total": 324,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 162,
            "notes": [
              "45% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rd",
            "label": "Research & development",
            "value": 99,
            "notes": [
              "27% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 40,
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 21,
            "notes": [
              "6% of revenue",
              "+6pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Income tax expense",
        "value": 1.956,
        "notes": [
          "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 322,
        "notes": [
          "88% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2,
        "notes": [
          "(0%) margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "label": "Net profit",
        "value": 3.46,
        "notes": [
          "Supplemented from the official Q2 2026 release; not drawn in the source infographic.",
          "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
        ]
      }
    },
    "otherIncome": {
      "total": 6.96,
      "items": [
        {
          "label": "Financial income, net",
          "value": 6.96,
          "notes": [
            "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "notes": [
          "Amounts和captions are transcribed from the source infographic；displayed totals may differ from sums because each amount is independently rounded.",
          "净金额留存率 109%",
          "10 人以上客户 113%",
          "年收入超过 $50K 的客户",
          "4,834 同比 +31%",
          "NDR = 净金额留存率",
          "The source ends at 运营 亏损. 净利润、income taxes和non-运营 items are official supplementary data、without additional 桑基图 faces."
        ],
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "label": "收入",
              "notes": [
                "同比 +22%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售与市场",
                "notes": [
                  "占收入 45%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "重组",
                "notes": [
                  "占收入 6%",
                  "同比 +6 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "所得税费用",
            "notes": [
              "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "补充自官方 2026 年第二季度财报；原图未绘制此项。",
              "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "财务收益净额",
              "notes": [
                "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Second-Quarter-2026-Results/default.aspx"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": []
        }
      }
    }
  },
  {
    "key": "monday-com-q1-fy23",
    "company": "Monday.com",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q1-fy23.png",
    "roundingTolerance": 3,
    "revenue": {
      "total": 162,
      "notes": [
        "+50% Y/Y",
        "Geographical amounts were calculated by multiplying total revenue by the shareholder letter geographical shares (54%/26%/9%/6%/6%, totaling 101%) and rounding, producing $165M compared with total revenue of $162M. The operator directed preserving the printed values with record roundingTolerance = 3 and no balancing node. Source: https://s29.q4cdn.com/881027206/files/doc_financials/2023/q1/q1/Q1/1Q23-Shareholder-Letter.pdf (page 15)."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 88,
          "notes": [
            "+52% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 42,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "asia_pacific",
          "label": "Asia Pacific",
          "value": 15,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "latin_america",
          "label": "Latin America",
          "value": 10,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "middle_east_africa",
          "label": "Middle-East Africa",
          "value": 10,
          "notes": [
            "+50% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 17,
        "notes": []
      },
      "operatingExpenses": {
        "total": 168,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 108,
            "notes": [
              "66% of revenue",
              "(41pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 37,
            "notes": [
              "23% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 23,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source does not report taxes."
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
        "value": 145,
        "notes": [
          "90% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -23,
        "notes": [
          "(14%) margin",
          "+48pp Y/Y"
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
        "id": "ndr",
        "label": "NDR",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 115%",
        "basis": "unspecified",
        "quote": "NDR > 115%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1204,
            294,
            151
          ]
        },
        "notes": []
      },
      {
        "id": "ndr_10_users",
        "label": "10+ users",
        "value": "125",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 125%",
        "basis": "unspecified",
        "quote": "10+ users > 125%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1204,
            294,
            151
          ]
        },
        "notes": []
      },
      {
        "id": "customers_50k",
        "label": "Customers> $50K+",
        "value": "1683",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,683",
        "basis": "unspecified",
        "quote": "Customers> $50K+\n1,683 +75% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            395,
            1204,
            348,
            151
          ]
        },
        "notes": [
          "+75% Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +50%",
            "地区金额由股东信地区占比（54%/26%/9%/6%/6%，合计 101%）乘总收入并四舍五入得到，合计 $165M 高于总收入 $162M。操作者决定保留图上字面值，本记录 roundingTolerance = 3；不新建平衡节点。来源：https://s29.q4cdn.com/881027206/files/doc_financials/2023/q1/q1/Q1/1Q23-Shareholder-Letter.pdf（第 15 页）。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +52%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "asia_pacific",
              "label": "亚太",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "latin_america",
              "label": "拉丁美洲",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "middle_east_africa",
              "label": "中东与非洲",
              "notes": [
                "同比 +50%"
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
                  "占收入 66%",
                  "同比 (41 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源未披露税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (14%)",
              "同比 +48 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "ndr",
            "label": "净美元留存率",
            "notes": []
          },
          {
            "id": "ndr_10_users",
            "label": "10 人以上客户净美元留存率",
            "notes": []
          },
          {
            "id": "customers_50k",
            "label": "ARR 超 $50K 的客户",
            "notes": [
              "同比 +75%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "monday-com-q1-fy25",
    "company": "Monday.com",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q1-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 282,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 282,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 29
      },
      "operatingExpenses": {
        "total": 244,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 142,
            "notes": [
              "50% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 69,
            "notes": [
              "25% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 32,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not separately displayed",
        "value": 0,
        "notes": [
          "Source does not show a separate tax amount; whole-million rounding differences retained."
        ]
      }
    },
    "otherIncome": {
      "total": 18,
      "items": [
        {
          "id": "finance",
          "label": "Financial income",
          "value": 18
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
        "value": 253,
        "notes": [
          "90% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 10,
        "notes": [
          "3% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 27,
        "notes": [
          "10% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +30%"
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
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "原图未单列税费",
            "notes": [
              "保留原图整数百万金额的舍入差异。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "finance",
              "label": "财务收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +6 个百分点"
            ]
          }
        },
        "notes": [
          "原图金额分别四舍五入到整数百万；营业费用明细、营业利润及净利润桥接各有 $1M 舍入差异。原图未单列税费。"
        ],
        "operatingMetrics": [
          {
            "id": "ndr",
            "label": "净美元留存率",
            "notes": []
          },
          {
            "id": "ndr_10plus",
            "label": "10 人以上客户留存率",
            "notes": []
          },
          {
            "id": "customers_50k",
            "label": "年收入超 $50K 的客户",
            "notes": [
              "同比 +38%"
            ]
          }
        ]
      }
    },
    "notes": [
      "Source amounts are independently rounded to whole millions. Differences of $1M occur in the operating-expense breakdown, operating-profit bridge and net-profit bridge. No separate tax amount is displayed."
    ],
    "operatingMetrics": [
      {
        "id": "ndr",
        "label": "NDR",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "basis": "unspecified",
        "notes": [],
        "quote": "NDR 112%",
        "anchor": {
          "type": "image-box",
          "box": [
            45,
            1145,
            294,
            150
          ]
        }
      },
      {
        "id": "ndr_10plus",
        "label": "10+ users",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "115%",
        "basis": "unspecified",
        "notes": [],
        "quote": "10+ users 115%",
        "anchor": {
          "type": "image-box",
          "box": [
            45,
            1145,
            294,
            150
          ]
        }
      },
      {
        "id": "customers_50k",
        "label": "Customers> $50K+",
        "value": "3444",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,444",
        "basis": "unspecified",
        "notes": [
          "+38% Y/Y"
        ],
        "quote": "Customers> $50K+\n3,444 +38% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1145,
            348,
            152
          ]
        }
      }
    ]
  },
  {
    "key": "monday-com-q2-fy23",
    "company": "Monday.com",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 176,
      "notes": [
        "+42% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 95,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 45,
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "asia_pacific",
          "label": "Asia Pacific",
          "value": 15,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "latin_america",
          "label": "Latin America",
          "value": 10,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "middle_east_africa",
          "label": "Middle-East Africa",
          "value": 10,
          "notes": [
            "+42% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 20
      },
      "operatingExpenses": {
        "total": 168,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 107,
            "notes": [
              "61% of revenue",
              "(17pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 39,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 22,
            "notes": [
              "12% of revenue",
              "(6pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source does not report income tax."
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 156,
        "notes": [
          "89% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -12,
        "notes": [
          "(7%) margin",
          "+30pp Y/Y"
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
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "ndr",
        "label": "NDR",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 110%",
        "basis": "unspecified",
        "notes": [],
        "quote": "NDR > 110%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1204,
            294,
            151
          ]
        }
      },
      {
        "id": "ndr_10_users",
        "label": "10+ users",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 120%",
        "basis": "unspecified",
        "notes": [],
        "quote": "10+ users > 120%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1204,
            294,
            151
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers> $50K+",
        "value": "1892",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,892",
        "basis": "unspecified",
        "notes": [
          "+63% Y/Y"
        ],
        "quote": "Customers> $50K+\n1,892 +63% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1204,
            346,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +42%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "asia_pacific",
              "label": "亚太",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "latin_america",
              "label": "拉丁美洲",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "middle_east_africa",
              "label": "中东及非洲",
              "notes": [
                "同比 +42%"
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
                  "占收入 61%",
                  "同比 (17 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (6 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未报告所得税。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +30 个百分点"
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
            "id": "ndr",
            "label": "净美元留存率"
          },
          {
            "id": "ndr_10_users",
            "label": "10+ 用户净美元留存率"
          },
          {
            "id": "large_customers",
            "label": "客户> $50K+",
            "notes": [
              "同比 +63%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "monday-com-q2-fy25",
    "company": "Monday.com",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 299,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Revenue",
          "value": 299,
          "notes": [
            "+27% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 31
      },
      "operatingExpenses": {
        "total": 279,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 153,
            "notes": [
              "51% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 87,
            "notes": [
              "29% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 40,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 268,
        "notes": [
          "90% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -12,
        "notes": [
          "(4%) margin",
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
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "收入",
              "notes": [
                "同比 +27%"
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
                  "占收入 51%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单列税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "ndr",
            "label": "净美元留存率"
          },
          {
            "id": "ndr_10plus",
            "label": "10+ 用户净美元留存率"
          },
          {
            "id": "customers_50k",
            "label": "ARR 超 $50K 客户",
            "notes": [
              "同比 +36%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "ndr",
        "label": "NDR",
        "literal": "111%",
        "value": "111",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "NDR 111%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            45,
            1146,
            295,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "ndr_10plus",
        "label": "10+ users",
        "literal": "115%",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "10+ users 115%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            45,
            1146,
            295,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "customers_50k",
        "label": "Customers> $50K+",
        "literal": "3,702",
        "value": "3702",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Customers> $50K+\n3,702 +36% Y/Y",
        "notes": [
          "+36% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            351,
            1146,
            347,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "monday-com-q3-fy23",
    "company": "Monday.com",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 189,
      "notes": [
        "+38% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 102,
          "notes": []
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 49,
          "notes": []
        },
        {
          "id": "asia_pacific",
          "label": "Asia Pacific",
          "value": 17,
          "notes": []
        },
        {
          "id": "latin_america",
          "label": "Latin America",
          "value": 11,
          "notes": []
        },
        {
          "id": "middle_east_africa",
          "label": "Middle-East Africa",
          "value": 11,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 22,
        "notes": []
      },
      "operatingExpenses": {
        "total": 170,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 108,
            "notes": [
              "57% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 38,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 23,
            "notes": [
              "12% of revenue",
              "(4pp) Y/Y"
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
        "value": 167,
        "notes": [
          "89% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3,
        "notes": [
          "(1%) margin",
          "+19pp Y/Y"
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
        "id": "ndr",
        "label": "NDR",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 110%",
        "basis": "unspecified",
        "quote": "NDR > 110%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            294,
            151
          ]
        },
        "notes": []
      },
      {
        "id": "ndr_10_users",
        "label": "10+ users",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 115%",
        "basis": "unspecified",
        "quote": "10+ users > 115%",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            294,
            151
          ]
        },
        "notes": []
      },
      {
        "id": "customers_50k",
        "label": "Customers> $50K+",
        "value": "2077",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,077",
        "basis": "unspecified",
        "quote": "Customers> $50K+\n2,077 +57% Y/Y",
        "notes": [
          "+57% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            395,
            1205,
            347,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +38%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美"
            },
            {
              "id": "europe",
              "label": "欧洲"
            },
            {
              "id": "asia_pacific",
              "label": "亚太"
            },
            {
              "id": "latin_america",
              "label": "拉丁美洲"
            },
            {
              "id": "middle_east_africa",
              "label": "中东 非洲"
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
                "label": "销售与 市场",
                "notes": [
                  "占收入 57%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研究与 开发",
                "notes": [
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及 行政",
                "notes": [
                  "占收入 12%",
                  "同比 (4 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "ndr",
            "label": "NDR"
          },
          {
            "id": "ndr_10_users",
            "label": "10+ 用户"
          },
          {
            "id": "customers_50k",
            "label": "超过 $50K+ 的客户",
            "notes": [
              "同比 +57%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "monday-com-q4-fy22",
    "company": "Monday.com",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/monday-com-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 150,
      "notes": [
        "+57% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 81,
          "notes": [
            "+60% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 37,
          "notes": [
            "+51% Y/Y"
          ]
        },
        {
          "id": "asia_pacific",
          "label": "Asia Pacific",
          "value": 13,
          "notes": [
            "+57% Y/Y"
          ]
        },
        {
          "id": "latin_america",
          "label": "Latin America",
          "value": 9,
          "notes": [
            "+57% Y/Y"
          ]
        },
        {
          "id": "middle_east_africa",
          "label": "Middle-East Africa",
          "value": 9,
          "notes": [
            "+57% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 17,
        "notes": []
      },
      "operatingExpenses": {
        "total": 143,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 88,
            "notes": [
              "59% of revenue",
              "(21pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 33,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 22,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 133,
        "notes": [
          "88% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -10,
        "notes": [
          "(7%) margin",
          "+26pp Y/Y"
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
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "dbnr",
        "label": "DBNR",
        "literal": "> 120%",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "quote": "DBNR > 120%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            295,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "dbnr_10_users",
        "label": "10+ users",
        "literal": "> 130%",
        "value": "130",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "quote": "10+ users > 130%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1205,
            295,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "customers_50k",
        "label": "Customers> $50K+",
        "literal": "1,474",
        "value": "1474",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Customers> $50K+\n1,474 +86% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            395,
            1205,
            350,
            150
          ]
        },
        "notes": [
          "+86% Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +57%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +60%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +51%"
              ]
            },
            {
              "id": "asia_pacific",
              "label": "亚太",
              "notes": [
                "同比 +57%"
              ]
            },
            {
              "id": "latin_america",
              "label": "拉丁美洲",
              "notes": [
                "同比 +57%"
              ]
            },
            {
              "id": "middle_east_africa",
              "label": "中东及非洲",
              "notes": [
                "同比 +57%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 59%",
                  "同比 (21 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +26 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "净金额留存率",
            "notes": []
          },
          {
            "id": "dbnr_10_users",
            "label": "10+ 用户",
            "notes": []
          },
          {
            "id": "customers_50k",
            "label": "年收入超过 $50K 的客户",
            "notes": [
              "同比 +86%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
