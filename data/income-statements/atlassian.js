/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "atlassian-q3-fy26",
    "company": "Atlassian",
    "period": "Q3 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1787,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 1132,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 561,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 94,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 263
      },
      "operatingExpenses": {
        "total": 1580,
        "notes": [
          "Operating expense line items sum to $1,581M because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 927,
            "notes": [
              "52% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 439,
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 215,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0
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
        "value": 1524,
        "notes": [
          "85% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -56,
        "notes": [
          "(3%) margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -56,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +7%"
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
              "运营费用项目合计为 $1,581M，因为来源图表对各项目做了四舍五入。"
            ],
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 52%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
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
              "利润率 85%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "运营亏损",
            "notes": [
              "来源图表未显示单独的净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "atlassian-q2-fy26",
    "company": "Atlassian",
    "period": "Q2 FY26",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1586,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 1067,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 435,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 84,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 238
      },
      "operatingExpenses": {
        "total": 1396,
        "notes": [
          "Operating expense line items sum to $1,395M because the source chart rounds each item."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 826,
            "notes": [
              "52% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 376,
            "notes": [
              "24% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 193,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0
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
        "value": 1349,
        "notes": [
          "85% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -48,
        "notes": [
          "(3%) margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -48,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +8%"
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
              "运营费用项目合计为 $1,395M，因为来源图表对各项目做了四舍五入。"
            ],
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 52%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
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
              "利润率 85%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "运营亏损",
            "notes": [
              "来源图表未显示单独的净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "atlassian-q4-fy26",
    "company": "Atlassian",
    "period": "Q4 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1767,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 1214,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 462,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 91,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 238
      },
      "operatingExpenses": {
        "total": 1317,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 760,
            "notes": [
              "43% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 389,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 168,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 58
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 14,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 14
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1528,
        "notes": [
          "87% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 211,
        "notes": [
          "12% margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 139,
        "notes": [
          "8% margin",
          "+23pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscription_arr",
        "label": "Subscription ARR",
        "value": "6.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$6.6B",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Subscription ARR\n$6.6B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            112,
            1194,
            380,
            162
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +20%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 43%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
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
              "利润率 87%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +23 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscription_arr",
            "label": "订阅 ARR",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q1-fy24",
    "company": "Atlassian",
    "period": "Q1 FY24",
    "periodNote": "Ending Sept. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 978,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 605,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 243,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 79,
          "notes": [
            "(31%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 51,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 178
      },
      "operatingExpenses": {
        "total": 819,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 482,
            "notes": [
              "49% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 194,
            "notes": [
              "20% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 143,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
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
        "value": 799,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -19,
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
        "value": "265000",
        "unit": "count",
        "currency": null,
        "comparison": "gte",
        "literal": "265K+",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Customers\n265K+\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            288,
            1219,
            279,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (31%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +9%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 49%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 20%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
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
              "毛利率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "源图止于运营亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q2-fy23",
    "company": "Atlassian",
    "period": "Q2 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 872,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 512,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 194,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 106,
          "notes": [
            "(22%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 60,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 156,
        "notes": []
      },
      "operatingExpenses": {
        "total": 816,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 474,
            "notes": [
              "54% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 186,
            "notes": [
              "21% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 156,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
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
        "value": 717,
        "notes": [
          "82% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -99,
        "notes": [
          "(11%) margin",
          "(15pp) Y/Y"
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
        "value": "253177",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "253,177",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers\n253,177\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            288,
            1219,
            279,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (22%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +20%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 54%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
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
              "利润率 82%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 (15 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图表截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q1-fy23",
    "company": "Atlassian",
    "period": "Q1 FY23",
    "periodNote": "Ending September 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q1-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 807,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 475,
          "notes": [
            "+49% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 171,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 114,
          "notes": [
            "(18%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 47,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 139,
        "notes": []
      },
      "operatingExpenses": {
        "total": 702,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 399,
            "notes": [
              "49% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 160,
            "notes": [
              "20% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 143,
            "notes": [
              "18% of revenue",
              "+3pp Y/Y"
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
        "value": 668,
        "notes": [
          "83% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -34,
        "notes": [
          "(4%) margin",
          "(13pp) Y/Y"
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
        "id": "channel_partners",
        "label": "Channel partners",
        "value": "40",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "40%",
        "basis": "unspecified",
        "notes": [
          "of revenue"
        ],
        "quote": "Channel partners\n40% of revenue",
        "anchor": {
          "type": "image-box",
          "box": [
            156,
            1220,
            259,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "249173",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "249,173",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers\n249,173\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            421,
            1220,
            279,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +49%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (18%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +4%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 49%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 20%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 +3 个百分点"
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
              "毛利率 83%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "营业利润率 (4%)",
              "同比 (13 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图截至营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "channel_partners",
            "label": "渠道伙伴",
            "notes": [
              "占收入"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q3-fy24",
    "company": "Atlassian",
    "period": "Q3 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1189,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 703,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 364,
          "notes": [
            "+64% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 30,
          "notes": [
            "(69%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 92,
          "notes": [
            "+43% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 213,
        "notes": []
      },
      "operatingExpenses": {
        "total": 958,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 576,
            "notes": [
              "48% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 224,
            "notes": [
              "19% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 158,
            "notes": [
              "13% of revenue",
              "(5pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 13,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 13,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 11,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 11,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 975,
        "notes": [
          "82% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 18,
        "notes": [
          "1% margin",
          "+16pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 13,
        "notes": [
          "1% margin",
          "+24pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cloud_arr_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "44000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "44K",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n44K\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            158,
            1227,
            543,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +64%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (69%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +43%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 48%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (5 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息收入",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 82%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +24 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cloud_arr_customers",
            "label": "Cloud ARR 超过 $10K 的客户数",
            "notes": [
              "同比 +19%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q3-fy23",
    "company": "Atlassian",
    "period": "Q3 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 915,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 535,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 222,
          "notes": [
            "+47% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 94,
          "notes": [
            "(29%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 65,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 169,
        "notes": []
      },
      "operatingExpenses": {
        "total": 908,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 522,
            "notes": [
              "57% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 221,
            "notes": [
              "24% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 165,
            "notes": [
              "18% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 747,
        "notes": [
          "82% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -162,
        "notes": [
          "(18%) margin",
          "(22pp) Y/Y"
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
        "value": "259775",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "259,775",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers\n259,775\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            288,
            1218,
            279,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +47%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (29%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +12%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 57%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 18%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 82%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (18%)",
              "同比 (22 个百分点)"
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
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +11%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q1-fy26",
    "company": "Atlassian",
    "period": "Q1 FY26",
    "periodNote": "Ending Sept. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1433,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 998,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 373,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 62,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 258
      },
      "operatingExpenses": {
        "total": 1271,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 756,
            "notes": [
              "53% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 336,
            "notes": [
              "23% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 179,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0
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
        "value": 1175,
        "notes": [
          "82% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -96,
        "notes": [
          "(7%) margin",
          "(4pp) Y/Y"
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
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +4%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 53%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
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
              "利润率 82%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图表止于运营亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cloud_customers",
            "label": "云 ARR 超过 $10K 的客户",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "53000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "53K",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n53K +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1193,
            544,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "atlassian-q3-fy25",
    "company": "Atlassian",
    "period": "Q3 FY25",
    "periodNote": "Ending March. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q3-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1357,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 880,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 389,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 88,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 220,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1149,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 685,
            "notes": [
              "51% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 296,
            "notes": [
              "22% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 168,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1137,
        "notes": [
          "84% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -12,
        "notes": [
          "(1%) margin",
          "(2pp) Y/Y"
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
        "id": "cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "51000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "51K",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n51K +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1193,
            544,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 (5%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 51%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 22%",
                  "同比 +3 个百分点"
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
              "毛利率 84%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 (2 个百分点)"
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
            "id": "cloud_customers",
            "label": "云 ARR > $10K 的客户数",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q2-fy25",
    "company": "Atlassian",
    "period": "Q2 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1286,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 847,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 362,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 77,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 223
      },
      "operatingExpenses": {
        "total": 1121,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 680,
            "notes": [
              "53% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 272,
            "notes": [
              "21% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 169,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
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
        "value": 1063,
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -57,
        "notes": [
          "(4%) margin",
          "+0pp Y/Y",
          "Displayed gross profit less operating expenses differs from operating loss by $1M due to source rounding."
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
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +23%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 53%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +0 个百分点",
              "图中毛利润减营业费用与营业亏损相差 $1M，源于来源图表的舍入。"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图表止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cloud_customers",
            "label": "云 ARR 超过 $10K 的客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "49000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "49K",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n49K +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1193,
            543,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "atlassian-q2-fy24",
    "company": "Atlassian",
    "period": "Q2 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1060,
      "notes": [
        "+21% Y/Y",
        "Revenue less cost of revenue differs from displayed gross profit by $1M due to source rounding."
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 653,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 275,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 69,
          "notes": [
            "(35%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 63,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 195,
        "notes": []
      },
      "operatingExpenses": {
        "total": 915,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 537,
            "notes": [
              "51% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 221,
            "notes": [
              "21% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 157,
            "notes": [
              "15% of revenue",
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
        "value": 866,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "(5%) margin",
          "+7pp Y/Y"
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
        "value": "302000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "302K",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers\n302K\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1225,
            277,
            163
          ]
        }
      },
      {
        "id": "large_cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "43000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "43K",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n43K\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            336,
            1225,
            546,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (35%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +5%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 51%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
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
              "利润率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图表止于运营亏损。"
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
            "id": "large_cloud_customers",
            "label": "云 ARR 超过 $10K 的客户",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q4-fy25",
    "company": "Atlassian",
    "period": "Q4 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1384,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 928,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 381,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 76,
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
        "value": 234
      },
      "operatingExpenses": {
        "total": 1178,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 701,
            "notes": [
              "51% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 314,
            "notes": [
              "23% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 163,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
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
        "value": 1150,
        "notes": [
          "83% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -28,
        "notes": [
          "(2%) margin",
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
        "id": "cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "52000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "52K",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n52K +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1193,
            544,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 51%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 83%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "来源图表止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cloud_customers",
            "label": "Cloud ARR > $10K 的客户数",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q4-fy23",
    "company": "Atlassian",
    "period": "Q4 FY23",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 939,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 563,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 232,
          "notes": [
            "+46% Y/Y"
          ]
        },
        {
          "id": "server",
          "label": "Server",
          "value": 86,
          "notes": [
            "(27%) Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 58,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 170,
        "notes": []
      },
      "operatingExpenses": {
        "total": 820,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 474,
            "notes": [
              "51% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 203,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 142,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source-rounded expense items total $819M; the displayed total is $820M."
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
        "value": 769,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -50,
        "notes": [
          "(5%) margin",
          "+0pp Y/Y"
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
        "value": "262000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "262K",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Customers\n262K\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            288,
            1218,
            279,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +46%"
              ]
            },
            {
              "id": "server",
              "label": "服务器",
              "notes": [
                "同比 (27%)"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
              "notes": [
                "同比 +17%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 51%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
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
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +0 个百分点"
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
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "atlassian-q1-fy25",
    "company": "Atlassian",
    "period": "Q1 FY25",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1188,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 792,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 336,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 60,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 218
      },
      "operatingExpenses": {
        "total": 1002,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 603,
            "notes": [
              "51% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 252,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 147,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
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
        "value": 970,
        "notes": [
          "82% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -32,
        "notes": [
          "(3%) margin",
          "(1pp) Y/Y"
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
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 51%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
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
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "运营亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图表止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "cloud_arr_customers",
            "label": "Cloud ARR > $10K 的客户数",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "cloud_arr_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "47000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "47K",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n47K\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1193,
            544,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "atlassian-q4-fy24",
    "company": "Atlassian",
    "period": "Q4 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/atlassian-q4-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1132,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "cloud",
          "label": "Cloud",
          "value": 738,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "data_center",
          "label": "Data Center",
          "value": 327,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "marketplace_services",
          "label": "Marketplace & Services",
          "value": 67,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 218,
        "notes": []
      },
      "operatingExpenses": {
        "total": 981,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 589,
            "notes": [
              "52% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 240,
            "notes": [
              "21% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 152,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax"
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
        "value": 914,
        "notes": [
          "81% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -67,
        "notes": [
          "(6%) margin",
          "(1pp) Y/Y"
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
        "id": "cloud_customers",
        "label": "Customers > $10K Cloud ARR",
        "value": "46000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "46K",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers > $10K Cloud ARR\n46K\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            158,
            1227,
            543,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "cloud",
              "label": "云",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "data_center",
              "label": "数据中心",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "marketplace_services",
              "label": "市场与服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 52%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
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
              "利润率 81%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 (1 个百分点)"
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
            "id": "cloud_customers",
            "label": "云 ARR > $10K 的客户数",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
