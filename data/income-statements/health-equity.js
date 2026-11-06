/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "health-equity-q4-fy26",
    "company": "HealthEquity",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q4-fy26.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 335,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 127,
          "notes": [
            "+2% Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 161,
          "notes": [
            "+12% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 46,
          "notes": [
            "+6% Y/Y",
            "85% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 106
      },
      "operatingExpenses": {
        "total": 157,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 70
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 34
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 25
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 11
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 10,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 10
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 228,
        "notes": [
          "68% margin",
          "+8pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 71,
        "notes": [
          "21% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 50,
        "notes": [
          "15% margin",
          "+6pp Y/Y",
          "Source values are rounded to whole millions; operating profit less tax and interest & other equals $50M."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +2%",
                "毛利率 36%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +12%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +6%",
                "毛利率 85%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +8 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +6 个百分点",
              "源图采用取整值；营业利润扣除税费和利息及其他后为 5,000 万美元。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "health-equity-q1-fy27",
    "company": "HealthEquity",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q1-fy27.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 355,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 123,
          "notes": [
            "+3% Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 174,
          "notes": [
            "+11% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 57,
          "notes": [
            "+5% Y/Y",
            "85% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 98
      },
      "operatingExpenses": {
        "total": 153,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 68
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 31
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 27
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 23
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 11,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 11
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 256,
        "notes": [
          "72% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 103,
        "notes": [
          "29% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 69,
        "notes": [
          "20% margin",
          "+3pp Y/Y",
          "Source values are rounded to whole millions; operating profit less tax and interest & other sums to $69M."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +3%",
                "毛利率 36%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +11%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +5%",
                "毛利率 85%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +3 个百分点",
              "源图采用取整值；营业利润扣除税费和利息及其他后为 6,900 万美元。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "health-equity-q2-fy27",
    "company": "HealthEquity",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q2-fy27.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 351,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 124,
          "notes": [
            "+6% Y/Y",
            "41% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 176,
          "notes": [
            "+10% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 50,
          "notes": [
            "+5% Y/Y",
            "85% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 93
      },
      "operatingExpenses": {
        "total": 159,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 74
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 35
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 26
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 23
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 22
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 11,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 11
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 258,
        "notes": [
          "74% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 99,
        "notes": [
          "28% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 66,
        "notes": [
          "19% margin",
          "+0pp Y/Y",
          "Source values are rounded to whole millions; revenue items sum to $350M versus $351M reported total."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +6%",
                "毛利率 41%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +10%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +5%",
                "毛利率 85%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +0 个百分点",
              "源图采用取整值；收入分项合计 $350M，报告收入总额为 $351M。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "10700000",
        "unit": "count",
        "currency": null,
        "literal": "10.7M",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n10.7M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1195,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "37.9",
        "unit": "B",
        "currency": "USD",
        "literal": "$37.9B",
        "notes": [
          "+14% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$37.9B\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "17800000",
        "unit": "count",
        "currency": null,
        "literal": "17.8M",
        "notes": [
          "+4% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n17.8M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1195,
            332,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q3-fy23",
    "company": "HealthEquity",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q3-fy23.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 216,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 109,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 75,
          "notes": [
            "+52% Y/Y"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 33,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "notes": [
        "+20% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 89
      },
      "operatingExpenses": {
        "total": 121,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 49,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 25,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 24,
            "notes": []
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 17,
            "notes": []
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 7,
            "notes": []
          }
        ]
      }
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "other_losses",
          "label": "Other losses",
          "value": 12,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 127,
        "notes": [
          "59% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6,
        "notes": [
          "3% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net loss",
        "value": -1,
        "notes": [
          "Source displays ($1M); filing reports ($1.641M). Preserve the source literal. Revenue items total $217M vs $216M; operating expense items total $122M vs $121M, within whole-million rounding. Filing: https://ir.healthequity.com/news-releases/news-release-details/healthequity-reports-third-quarter-ended-october-31-2022"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "7700000",
        "unit": "count",
        "currency": null,
        "literal": "7.7M",
        "notes": [
          "+23% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n7.7M\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1230,
            211,
            150
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "20.2",
        "unit": "B",
        "currency": "USD",
        "literal": "$20.2B",
        "notes": [
          "+23% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$20.2B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1230,
            276,
            150
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "14500000",
        "unit": "count",
        "currency": null,
        "literal": "14.5M",
        "notes": [
          "+9% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n14.5M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            572,
            1230,
            331,
            150
          ]
        }
      }
    ],
    "otherIncome": {
      "total": 5,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
          "value": 5
        }
      ]
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +52%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +16%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "税收收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_losses",
              "label": "其他损失"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 59%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "保留原图净亏损；财报数值存在差异。收入与运营费用分项存在整数百万舍入差额。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "health-equity-q1-fy24",
    "company": "HealthEquity",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q1-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 244,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 105,
          "notes": [
            "+1% Y/Y",
            "23% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 94,
          "notes": [
            "+59% Y/Y",
            "90% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 45,
          "notes": [
            "+7% Y/Y",
            "84% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 97
      },
      "operatingExpenses": {
        "total": 125,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 53
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 25
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 20
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 3
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 13,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 13
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 148,
        "notes": [
          "60% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 23,
        "notes": [
          "9% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4,
        "notes": [
          "2% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +1%",
                "23% 毛利率"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +59%",
                "90% 毛利率"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +7%",
                "84% 毛利率"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 60%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "9% 利润率",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "2% 利润率",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "8000000",
        "unit": "count",
        "currency": null,
        "literal": "8.0M",
        "comparison": "eq",
        "quote": "HSAs\n8.0M\n+9% Y/Y",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1231,
            210,
            149
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "22.3",
        "unit": "B",
        "currency": "USD",
        "literal": "$22.3B",
        "comparison": "eq",
        "quote": "HSA Assets\n$22.3B\n+10% Y/Y",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1231,
            275,
            149
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "15000000",
        "unit": "count",
        "currency": null,
        "literal": "15.0M",
        "comparison": "eq",
        "quote": "Total Accounts\n15.0M\n+4% Y/Y",
        "notes": [
          "+4% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1231,
            332,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q2-fy25",
    "company": "HealthEquity",
    "period": "Q2 FY25",
    "periodNote": "Ending Jul. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 300,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 117,
          "notes": [
            "+4% Y/Y",
            "34% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 139,
          "notes": [
            "+50% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 45,
          "notes": [
            "+14% Y/Y",
            "80% gross margin"
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
        "total": 145,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 59
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 32
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 31
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 22
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 11
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 204,
        "notes": [
          "68% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 59,
        "notes": [
          "20% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 36,
        "notes": [
          "12% margin",
          "+8pp Y/Y",
          "Whole-million rounding: revenue items sum to $301M versus $300M total; operating expense items sum to $146M versus $145M total. Verified against the SEC earnings release."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +4%",
                "毛利率 34%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +50%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +14%",
                "毛利率 80%"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +8 个百分点",
              "来源按图示单位取整：收入分项合计 $301M，图示总额 $300M；营业费用分项合计 $146M，图示总额 $145M。已核对 SEC 业绩公告。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +9%"
            ]
          }
        ],
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "9400000",
        "unit": "count",
        "currency": null,
        "literal": "9.4M",
        "notes": [
          "+15% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n9.4M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            61,
            1231,
            210,
            150
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "29.5",
        "unit": "B",
        "currency": "USD",
        "literal": "$29.5B",
        "notes": [
          "+27% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$29.5B\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            284,
            1231,
            275,
            150
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "16300000",
        "unit": "count",
        "currency": null,
        "literal": "16.3M",
        "notes": [
          "+9% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n16.3M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            572,
            1231,
            331,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q4-fy23",
    "company": "HealthEquity",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "sourceImage": "input/processed/health-equity-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 234,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 114,
          "notes": [
            "+2% Y/Y",
            "26% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 84,
          "notes": [
            "+44% Y/Y",
            "90% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 36,
          "notes": [
            "+10% Y/Y",
            "84% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 100
      },
      "operatingExpenses": {
        "total": 121,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 53
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 21
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 19
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 5
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
      "total": 13,
      "items": [
        {
          "id": "other_losses",
          "label": "Other losses",
          "value": 13
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 134,
        "notes": [
          "57% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 13,
        "notes": [
          "6% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.2
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "7900000",
        "unit": "count",
        "currency": null,
        "literal": "7.9M",
        "comparison": "eq",
        "quote": "HSAs\n7.9M\n+11% Y/Y",
        "notes": [
          "+11% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1230,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "22.1",
        "unit": "B",
        "currency": "USD",
        "literal": "$22.1B",
        "comparison": "eq",
        "quote": "HSA Assets\n$22.1B\n+13% Y/Y",
        "notes": [
          "+13% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1230,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "14900000",
        "unit": "count",
        "currency": null,
        "literal": "14.9M",
        "comparison": "eq",
        "quote": "Total Accounts\n14.9M\n+4% Y/Y",
        "notes": [
          "+4% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1230,
            332,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +2%",
                "毛利率 26%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +44%",
                "毛利率 90%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +10%",
                "毛利率 84%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "other_losses",
              "label": "其他亏损"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 57%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": []
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "health-equity-q2-fy24",
    "company": "HealthEquity",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q2-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 244,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 106,
          "notes": [
            "+3% Y/Y",
            "28% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 99,
          "notes": [
            "+51% Y/Y",
            "91% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 39,
          "notes": [
            "+4% Y/Y",
            "82% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 93
      },
      "operatingExpenses": {
        "total": 126,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 55
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 27
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 19
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 2
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
      "total": 11,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 11
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 151,
        "notes": [
          "62% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 25,
        "notes": [
          "10% margin",
          "+11pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 11,
        "notes": [
          "4% margin",
          "+10pp Y/Y",
          "Printed whole-million values have a net-result rounding difference; verified against official quarterly results."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +3%",
                "毛利率 28%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +51%",
                "毛利率 91%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +4%",
                "毛利率 82%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 62%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +10 个百分点",
              "源图各项已取整，净利润计算存在舍入差额；已核查官方季度结果，保留来源印刷值。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "literal": "8.2M",
        "value": "8200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "HSAs\n8.2M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1231,
            210,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "literal": "$23.2B",
        "value": "23.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "HSA Assets\n$23.2B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1231,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "literal": "15.0M",
        "value": "15000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Total Accounts\n15.0M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1231,
            332,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q4-fy24",
    "company": "HealthEquity",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 262,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 119,
          "notes": [
            "(1%) Y/Y",
            "29% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 105,
          "notes": [
            "+35% Y/Y",
            "92% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 38,
          "notes": [
            "+6% Y/Y",
            "82% gross margin"
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
        "total": 124,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 55
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 23
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 21
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 9,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 9
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 163,
        "notes": [
          "62% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 39,
        "notes": [
          "15% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 26,
        "notes": [
          "10% margin",
          "+10pp Y/Y",
          "Printed whole-million amounts have a rounding discrepancy in the net income identity; the company filing confirms the printed amounts round correctly."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 (1%)",
                "毛利率 29%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +35%",
                "毛利率 92%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +6%",
                "毛利率 82%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 62%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +10 个百分点",
              "源图金额取整后，净利润勾稽存在舍入差异；公司披露确认各印刷金额均在舍入区间内。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "8700000",
        "unit": "count",
        "currency": null,
        "literal": "8.7M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "HSAs\n8.7M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1231,
            210,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "25.2",
        "unit": "B",
        "currency": "USD",
        "literal": "$25.2B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "HSA Assets\n$25.2B\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1231,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "15700000",
        "unit": "count",
        "currency": null,
        "literal": "15.7M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Total Accounts\n15.7M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            570,
            1231,
            332,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q1-fy25",
    "company": "HealthEquity",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q1-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 288,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 118,
          "notes": [
            "+6% Y/Y",
            "30% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 122,
          "notes": [
            "+37% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 48,
          "notes": [
            "+6% Y/Y",
            "81% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 100
      },
      "operatingExpenses": {
        "total": 146,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 56
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 38
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 26
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 23
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 2
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
      "total": 8,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 187,
        "notes": [
          "65% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 42,
        "notes": [
          "14% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 29,
        "notes": [
          "10% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "literal": "9.1M",
        "value": "9100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "HSAs\n9.1M\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            61,
            1231,
            208,
            150
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "literal": "$27.3B",
        "value": "27.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "HSA Assets\n$27.3B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            284,
            1231,
            275,
            150
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "literal": "16.0M",
        "value": "16000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Total Accounts\n16.0M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            572,
            1231,
            331,
            150
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +6%",
                "毛利率 30%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +37%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +6%",
                "毛利率 81%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +8 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +7%"
            ]
          }
        ],
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月"
      }
    }
  },
  {
    "key": "health-equity-q3-fy26",
    "company": "HealthEquity",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q3-fy26.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 322,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 120,
          "notes": [
            "+1% Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 159,
          "notes": [
            "+13% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 43,
          "notes": [
            "+6% Y/Y",
            "85% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 94
      },
      "operatingExpenses": {
        "total": 149,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 66
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 31
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 24
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 16
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 11,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 11
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 228,
        "notes": [
          "71% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 79,
        "notes": [
          "24% margin",
          "+18pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 52,
        "notes": [
          "16% margin",
          "+14pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 10 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +1%",
                "毛利率 36%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +13%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +6%",
                "毛利率 85%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +18 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +14 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "10100000",
        "unit": "count",
        "currency": null,
        "literal": "10.1M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "HSAs\n10.1M\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1195,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "34.4",
        "unit": "B",
        "currency": "USD",
        "literal": "$34.4B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "HSA Assets\n$34.4B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "17300000",
        "unit": "count",
        "currency": null,
        "literal": "17.3M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Total Accounts\n17.3M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1195,
            332,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q3-fy25",
    "company": "HealthEquity",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q3-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 300,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 119,
          "notes": [
            "+4% Y/Y",
            "27% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 141,
          "notes": [
            "+41% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 40,
          "notes": [
            "+15% Y/Y",
            "84% gross margin"
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
        "total": 177,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 60
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 34,
            "notes": [
              "11% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 32
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 28
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 23
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
      "total": 13,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 13
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 197,
        "notes": [
          "66% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 20,
        "notes": [
          "7% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6,
        "notes": [
          "2% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "9500000",
        "unit": "count",
        "currency": null,
        "literal": "9.5M",
        "notes": [
          "+15% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n9.5M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1194,
            211,
            150
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "30.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$30.0B",
        "notes": [
          "+33% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$30.0B\n+33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            284,
            1194,
            275,
            150
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "16500000",
        "unit": "count",
        "currency": null,
        "literal": "16.5M",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n16.5M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            570,
            1194,
            332,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +4%",
                "毛利率 27%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +41%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +15%",
                "毛利率 84%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "merger_costs",
                "label": "并购成本",
                "notes": [
                  "占收入 11%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (4 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "health-equity-q2-fy26",
    "company": "HealthEquity",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q2-fy26.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 326,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 118,
          "notes": [
            "+1% Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 160,
          "notes": [
            "+15% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 48,
          "notes": [
            "+8% Y/Y",
            "86% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 93
      },
      "operatingExpenses": {
        "total": 143,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 65
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 30
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 20
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 18
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 233,
        "notes": [
          "71% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 90,
        "notes": [
          "28% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 60,
        "notes": [
          "18% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +1%",
                "毛利率 36%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +15%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +8%",
                "毛利率 86%"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "10000000",
        "unit": "count",
        "currency": null,
        "literal": "10.0M",
        "notes": [
          "+6% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n10.0M\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1195,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "33.1",
        "unit": "B",
        "currency": "USD",
        "literal": "$33.1B",
        "notes": [
          "+12% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$33.1B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "17100000",
        "unit": "count",
        "currency": null,
        "literal": "17.1M",
        "notes": [
          "+5% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n17.1M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1195,
            332,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "health-equity-q1-fy26",
    "company": "HealthEquity",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q1-fy26.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 331,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 120,
          "notes": [
            "+1% Y/Y",
            "27% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 156,
          "notes": [
            "+29% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 55,
          "notes": [
            "+14% Y/Y",
            "86% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 107
      },
      "operatingExpenses": {
        "total": 141,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 61
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 26
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 26
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
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
        "value": 17
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 224,
        "notes": [
          "68% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 83,
        "notes": [
          "25% margin",
          "+11pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 54,
        "notes": [
          "16% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "9900000",
        "unit": "count",
        "currency": null,
        "literal": "9.9M",
        "notes": [
          "+9% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n9.9M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1195,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "31.3",
        "unit": "B",
        "currency": "USD",
        "literal": "$31.3B",
        "notes": [
          "+15% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$31.3B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "17100000",
        "unit": "count",
        "currency": null,
        "literal": "17.1M",
        "notes": [
          "+7% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n17.1M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1195,
            332,
            148
          ]
        }
      }
    ],
    "notes": [
      "Source period note Ending Apr. 2026 is preserved; official Q1 FY26 release is for April 2025.",
      "Rounded operating-expense items sum to $141M; net expense corrected from $13M to $12M using SEC statement."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +1%",
                "毛利率 27%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +29%",
                "毛利率 93%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +14%",
                "毛利率 86%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": []
              },
              {
                "id": "general_admin",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "merger_costs",
                "label": "并购成本",
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
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "health-equity-q3-fy24",
    "company": "HealthEquity",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q3-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 249,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 108,
          "notes": [
            "(1%) Y/Y",
            "30% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 107,
          "notes": [
            "+43% Y/Y",
            "91% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 35,
          "notes": [
            "+7% Y/Y",
            "82% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 91
      },
      "operatingExpenses": {
        "total": 128,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 56
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 26
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 20
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 3
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 10,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 10
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 158,
        "notes": [
          "64% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 31,
        "notes": [
          "12% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 15,
        "notes": [
          "6% margin",
          "+7pp Y/Y",
          "Printed whole-million values are retained; revenue components and gross less operating expenses differ by $1M due to rounding. Source period says Sep. 2023 and HSAs 8.2M; official Q3 FY24 results (https://ir.healthequity.com/node/13171) say October 31, 2023 and 8.3M HSAs."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "8200000",
        "unit": "count",
        "currency": null,
        "literal": "8.2M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "HSAs\n8.2M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1231,
            211,
            150
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "22.6",
        "unit": "B",
        "currency": "USD",
        "literal": "$22.6B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "HSA Assets\n$22.6B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            284,
            1231,
            275,
            150
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "15300000",
        "unit": "count",
        "currency": null,
        "literal": "15.3M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Total Accounts\n15.3M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            570,
            1231,
            332,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 (1%)",
                "毛利率 30%"
              ]
            },
            {
              "id": "custodial",
              "label": "托管",
              "notes": [
                "同比 +43%",
                "毛利率 91%"
              ]
            },
            {
              "id": "interchange",
              "label": "交换费",
              "notes": [
                "同比 +7%",
                "毛利率 82%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入 成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与 开发"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +7 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "total-accounts",
            "label": "总账户数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "health-equity-q4-fy25",
    "company": "HealthEquity",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/health-equity-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 312,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 124,
          "notes": [
            "+5% Y/Y",
            "15% gross margin"
          ]
        },
        {
          "id": "custodial",
          "label": "Custodial",
          "value": 144,
          "notes": [
            "37% Y/Y",
            "93% gross margin"
          ]
        },
        {
          "id": "interchange",
          "label": "Interchange",
          "value": 43,
          "notes": [
            "+13% Y/Y",
            "84% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 123
      },
      "operatingExpenses": {
        "total": 147,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 65
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 30
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 27
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 23
          },
          {
            "id": "merger_costs",
            "label": "Merger costs",
            "value": 2
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
      "total": 12,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 189,
        "notes": [
          "61% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 42,
        "notes": [
          "14% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 26,
        "notes": [
          "8% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务"
            },
            {
              "id": "custodial",
              "label": "托管"
            },
            {
              "id": "interchange",
              "label": "交换费"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "merger_costs",
                "label": "并购成本"
              }
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hsas",
            "label": "HSA 账户"
          },
          {
            "id": "hsa-assets",
            "label": "HSA 资产"
          },
          {
            "id": "total-accounts",
            "label": "总账户数"
          }
        ]
      }
    },
    "notes": [
      "Source amounts are rounded to whole millions: revenue items sum to $311M versus the printed $312M total."
    ],
    "operatingMetrics": [
      {
        "id": "hsas",
        "label": "HSAs",
        "value": "9900000",
        "unit": "count",
        "currency": null,
        "literal": "9.9M",
        "notes": [
          "+14% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSAs\n9.9M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1195,
            211,
            148
          ]
        }
      },
      {
        "id": "hsa-assets",
        "label": "HSA Assets",
        "value": "32.1",
        "unit": "B",
        "currency": "USD",
        "literal": "$32.1B",
        "notes": [
          "+27% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "HSA Assets\n$32.1B\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            283,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "total-accounts",
        "label": "Total Accounts",
        "value": "17000000",
        "unit": "count",
        "currency": null,
        "literal": "17.0M",
        "notes": [
          "+9% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Total Accounts\n17.0M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            571,
            1195,
            332,
            148
          ]
        }
      }
    ]
  }
]);
})(window);
