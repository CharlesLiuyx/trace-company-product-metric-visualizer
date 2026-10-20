/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "servicenow-q4-fy25",
    "company": "ServiceNow",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q4-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3568,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3466,
          "notes": [
            "+21% Y/Y",
            "79% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 102,
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
        "value": 834
      },
      "operatingExpenses": {
        "total": 2291,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1150,
            "notes": [
              "32% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 773,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 368,
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
        "value": 140
      }
    },
    "otherIncome": {
      "total": 105,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 105
        }
      ]
    },
    "otherExpenses": {
      "total": 7,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 7
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2734,
        "notes": [
          "77% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 443,
        "notes": [
          "12% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 401,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
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
                "毛利率 79%"
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
                  "占收入 32%",
                  "同比 (3 个百分点)"
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
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 77%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "servicenow-q1-fy26",
    "company": "ServiceNow",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/servicenow-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3.7,
          "notes": [
            "+22% Y/Y",
            "78% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.1,
          "notes": [
            "+19% Y/Y",
            "(21%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.9,
        "notes": [
          "Gross profit and cost of revenue sum to $3.7B due to source chart rounding."
        ]
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.2,
            "notes": [
              "32% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.8,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
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
      "total": 0.2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
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
        "value": 2.8,
        "notes": [
          "75% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "12% margin",
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
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 78%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +19%",
                "毛利率 (21%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "由于来源图四舍五入，毛利润和收入成本合计为 $3.7B。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 32%",
                  "同比 (2 个百分点)"
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
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
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
              "利润率 75%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "service-now-q2-fy26",
    "company": "ServiceNow",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/service-now-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3.9,
          "notes": [
            "+25% Y/Y",
            "73% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.1,
          "notes": [
            "+8% Y/Y",
            "(26%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.2
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.4,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.9,
            "notes": [
              "23% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
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
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
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
        "value": 2.8,
        "notes": [
          "71% margin",
          "(7pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "4% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "7% margin",
          "(5pp) Y/Y",
          "Source chart label and margin/flow geometry are internally inconsistent."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +25%",
                "毛利率 73%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +8%",
                "毛利率 (26%)"
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
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
              "利润率 71%",
              "同比 (7 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (5 个百分点)",
              "来源图标签与利润率/流量几何存在内部不一致。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "servicenow-q1-fy23",
    "company": "ServiceNow",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q1-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2096,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2024,
          "notes": [
            "+24% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 72,
          "notes": [
            "(21%) Y/Y",
            "(17%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 438
      },
      "operatingExpenses": {
        "total": 1514,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 823,
            "notes": [
              "39% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 492,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 199,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 38
      }
    },
    "otherIncome": {
      "total": 60,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 60
        }
      ]
    },
    "otherExpenses": {
      "total": 16,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 16
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1658,
        "notes": [
          "79% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 144,
        "notes": [
          "7% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 150,
        "notes": [
          "7% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "7.01",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.01B",
        "quote": "cRPO\n$7.01B\n+23% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1180,
            145,
            169
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "quote": "Renewal rate\n98%\nUnchanged",
        "basis": "unspecified",
        "notes": [
          "Unchanged"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            200,
            1180,
            324,
            169
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "Customers > $1M",
        "value": "1682",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,682",
        "quote": "Customers > $1M\n1,682\n+20% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            540,
            1180,
            380,
            169
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +24%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业 服务",
              "notes": [
                "同比 (21%)",
                "毛利率 (17%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
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
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "保持不变"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q1-fy24",
    "company": "ServiceNow",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q1-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2603,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2523,
          "notes": [
            "+25% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 80,
          "notes": [
            "+11% Y/Y",
            "1% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 520
      },
      "operatingExpenses": {
        "total": 1751,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 923,
            "notes": [
              "35% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 606,
            "notes": [
              "23% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 222,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 78
      }
    },
    "otherIncome": {
      "total": 101,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 101
        }
      ]
    },
    "otherExpenses": {
      "total": 8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2083,
        "notes": [
          "80% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 332,
        "notes": [
          "13% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 347,
        "notes": [
          "13% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "8.5",
        "unit": "B",
        "currency": "USD",
        "literal": "$8.5B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "cRPO\n$8.5B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1180,
            145,
            169
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "literal": "98%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Renewal rate\n98%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1180,
            323,
            169
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $1M",
        "value": "1933",
        "unit": "count",
        "currency": null,
        "literal": "1,933",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $1M\n1,933\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1179,
            380,
            168
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
            "同比 +24%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +25%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +11%",
                "毛利率 1%"
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
                  "占收入 35%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 80%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q1-fy25",
    "company": "ServiceNow",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q1-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3088,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3005,
          "notes": [
            "+19% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 83,
          "notes": [
            "+4% Y/Y",
            "(8%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 651
      },
      "operatingExpenses": {
        "total": 1986,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1054,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 703,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 229,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 95
      }
    },
    "otherIncome": {
      "total": 115,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 115
        }
      ]
    },
    "otherExpenses": {
      "total": 11,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 11
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2437,
        "notes": [
          "79% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 451,
        "notes": [
          "15% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 460,
        "notes": [
          "15% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
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
                "毛利率 81%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +4%",
                "毛利率 (8%)"
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 79%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "renewal",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数 > $5M",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "10.3",
        "unit": "B",
        "currency": "USD",
        "literal": "$10.3B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "cRPO\n$10.3B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1147,
            145,
            168
          ]
        }
      },
      {
        "id": "renewal",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "literal": "98%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Renewal rate\n98%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1147,
            323,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $5M",
        "value": "508",
        "unit": "count",
        "currency": null,
        "literal": "508",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers > $5M\n508\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            540,
            1145,
            379,
            169
          ]
        }
      }
    ]
  },
  {
    "key": "servicenow-q2-fy23",
    "company": "ServiceNow",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2150,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2075,
          "notes": [
            "+25% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 75,
          "notes": [
            "(20%) Y/Y",
            "(9%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 471
      },
      "operatingExpenses": {
        "total": 1562,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 832,
            "notes": [
              "39% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 521,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 209,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 944,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 870
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 74
        }
      ]
    },
    "otherExpenses": {
      "total": 17,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 17
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1679,
        "notes": [
          "78% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 117,
        "notes": [
          "5% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1044,
        "notes": [
          "49% margin",
          "+47pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "7.20",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.20B",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "cRPO\n$7.20B\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1181,
            146,
            169
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "99",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "99%",
        "basis": "unspecified",
        "notes": [
          "Unchanged Y/Y"
        ],
        "quote": "Renewal rate\n99%\nUnchanged Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1180,
            322,
            169
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "Customers > $1M",
        "value": "1724",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,724",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers > $1M\n1,724\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1177,
            382,
            171
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +25%",
                "毛利率 81%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (20%)",
                "毛利率 (9%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益"
            },
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 49%",
              "同比 +47 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q2-fy24",
    "company": "ServiceNow",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q2-fy24.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 2627,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2542,
          "notes": [
            "+23% Y/Y",
            "82% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 85,
          "notes": [
            "+13% Y/Y",
            "2% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 552
      },
      "operatingExpenses": {
        "total": 1835,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 960,
            "notes": [
              "37% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 643,
            "notes": [
              "24% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 232,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 72
      }
    },
    "otherIncome": {
      "total": 104,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 104
        }
      ]
    },
    "otherExpenses": {
      "total": 10,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 10
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2075,
        "notes": [
          "79% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 240,
        "notes": [
          "9% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 262,
        "notes": [
          "10% margin",
          "(39pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "8.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$8.8B",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "cRPO\n$8.8B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1180,
            145,
            169
          ]
        }
      },
      {
        "id": "renewal",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Y/Y"
        ],
        "quote": "Renewal rate\n98%\n(1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1180,
            323,
            169
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $1M",
        "value": "1988",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,988",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $1M\n1,988\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1178,
            382,
            169
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
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%",
                "毛利率 82%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +13%",
                "毛利率 2%"
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
                  "占收入 37%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 79%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (39 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "renewal",
            "label": "续约率",
            "notes": [
              "同比 (1 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q2-fy25",
    "company": "ServiceNow",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3215,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3113,
          "notes": [
            "+22% Y/Y",
            "80% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 102,
          "notes": [
            "+20% Y/Y",
            "3% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 724
      },
      "operatingExpenses": {
        "total": 2133,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1128,
            "notes": [
              "35% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 734,
            "notes": [
              "23% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 271,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 86
      }
    },
    "otherIncome": {
      "total": 116,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 116
        }
      ]
    },
    "otherExpenses": {
      "total": 3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2491,
        "notes": [
          "77% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 358,
        "notes": [
          "11% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 385,
        "notes": [
          "12% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 80%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +20%",
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
                  "占收入 35%",
                  "同比 (1 个百分点)"
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
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
        "otherExpenses": {
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
              "利润率 77%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "customers_gt_5m",
            "label": "客户数 > $5M",
            "notes": [
              "同比 +19%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "literal": "$10.9B",
        "value": "10.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "notes": [
          "+24% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "cRPO\n$10.9B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1146,
            146,
            169
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "literal": "98%",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "Flat Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Renewal rate\n98%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1146,
            323,
            169
          ]
        }
      },
      {
        "id": "customers_gt_5m",
        "label": "Customers > $5M",
        "literal": "528",
        "value": "528",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "+19% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers > $5M\n528\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1145,
            380,
            169
          ]
        }
      }
    ]
  },
  {
    "key": "servicenow-q3-fy22",
    "company": "ServiceNow",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q3-fy22.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1831,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1742,
          "notes": [
            "+22% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 89,
          "notes": [
            "+5% Y/Y",
            "(11%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 400,
        "items": [
          {
            "id": "subscription_cost",
            "label": "Subscription",
            "value": 301
          },
          {
            "id": "professional_services_cost",
            "label": "Professional services",
            "value": 99
          }
        ]
      },
      "operatingExpenses": {
        "total": 1340,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 697,
            "notes": [
              "38% of revenue"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 456,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 187,
            "notes": [
              "10% of revenue"
            ]
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
      "total": 19,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 19
        }
      ]
    },
    "otherExpenses": {
      "total": 8,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1431,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 91,
        "notes": [
          "5% margin",
          "Unchanged"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 80,
        "notes": [
          "4% margin",
          "Unchanged"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "literal": "$5.9B",
        "value": "5.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "cRPO $5.9B +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1181,
            146,
            168
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "renewal",
        "label": "Renewal rate",
        "literal": "98%",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "stable"
        ],
        "quote": "Renewal rate 98% (stable)",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1181,
            241,
            168
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "literal": "1,530",
        "value": "1530",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers > $1M 1,530 +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            457,
            1179,
            542,
            89
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers_10m_growth",
        "label": "Customers > $10M",
        "literal": "+60%",
        "value": "60",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "notes": [],
        "quote": "Customers > $10M +60% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            457,
            1267,
            542,
            79
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +5%",
                "毛利率 (11%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "items": [
              {
                "id": "subscription_cost",
                "label": "订阅"
              },
              {
                "id": "professional_services_cost",
                "label": "专业服务"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 38%"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
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
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "保持不变"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "保持不变"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "renewal",
            "label": "续约率",
            "notes": [
              "稳定"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "customers_10m_growth",
            "label": "客户数 > $10M",
            "notes": []
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q3-fy23",
    "company": "ServiceNow",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q3-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2288,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2216,
          "notes": [
            "+27% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 72,
          "notes": [
            "(19%) Y/Y",
            "(6%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 496
      },
      "operatingExpenses": {
        "total": 1561,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 799,
            "notes": [
              "35% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 549,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 213,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 57
      }
    },
    "otherIncome": {
      "total": 82,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 82
        }
      ]
    },
    "otherExpenses": {
      "total": 14,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 14
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1792,
        "notes": [
          "78% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 231,
        "notes": [
          "10% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 242,
        "notes": [
          "11% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "7.43",
        "unit": "B",
        "currency": "USD",
        "literal": "$7.43B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "cRPO\n$7.43B\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1180,
            146,
            169
          ]
        }
      },
      {
        "id": "renewal",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "literal": "98%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Unchanged Y/Y"
        ],
        "quote": "Renewal rate\n98%\nUnchanged Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1180,
            324,
            169
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $1M",
        "value": "1789",
        "unit": "count",
        "currency": null,
        "literal": "1,789",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers > $1M\n1,789\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1180,
            382,
            169
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%",
                "毛利率 81%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (19%)",
                "毛利率 (6%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 35%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
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
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +6 个百分点"
            ]
          }
        },
        "period": "2023 财年第三季度",
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "renewal",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q3-fy24",
    "company": "ServiceNow",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q3-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2797,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2715,
          "notes": [
            "+23% Y/Y",
            "82% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 82,
          "notes": [
            "+14% Y/Y",
            "(7%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 584
      },
      "operatingExpenses": {
        "total": 1795,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 944,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 626,
            "notes": [
              "22% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 225,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 84
      }
    },
    "otherIncome": {
      "total": 108,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 108
        }
      ]
    },
    "otherExpenses": {
      "total": 10,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 10
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2213,
        "notes": [
          "79% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 418,
        "notes": [
          "15% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 432,
        "notes": [
          "15% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%",
                "毛利率 82%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +14%",
                "毛利率 (7%)"
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 79%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "9.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$9.4B",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "cRPO\n$9.4B\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1147,
            145,
            168
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Renewal rate\n98%\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1147,
            323,
            168
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "Customers > $1M",
        "value": "2020",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,020",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $1M\n2,020\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            540,
            1145,
            379,
            168
          ]
        }
      }
    ]
  },
  {
    "key": "servicenow-q3-fy25",
    "company": "ServiceNow",
    "period": "Q3 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q3-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3407,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 3299,
          "notes": [
            "+22% Y/Y",
            "80% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 108,
          "notes": [
            "+32% Y/Y",
            "3% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 774
      },
      "operatingExpenses": {
        "total": 2061,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1056,
            "notes": [
              "31% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 750,
            "notes": [
              "22% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 255,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 192
      }
    },
    "otherIncome": {
      "total": 122,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 122
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
        "value": 2633,
        "notes": [
          "77% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 572,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 502,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "11.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$11.3B",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "cRPO\n$11.3B\n+21% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1147,
            145,
            168
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "97",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "97%",
        "notes": [
          "(1pp) Y/Y"
        ],
        "quote": "Renewal rate\n97%\n(1pp) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1147,
            322,
            168
          ]
        }
      },
      {
        "id": "customers_gt_5m",
        "label": "Customers > $5M",
        "value": "533",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "533",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers > $5M\n533\n+18% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1145,
            380,
            171
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 80%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +32%",
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
                  "占收入 31%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比 (1 个百分点)"
            ]
          },
          {
            "id": "customers_gt_5m",
            "label": "客户数 > $5M",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q4-fy22",
    "company": "ServiceNow",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q4-fy22.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1940,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1860,
          "notes": [
            "+22% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 80,
          "notes": [
            "(12%) Y/Y",
            "(14%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 415
      },
      "operatingExpenses": {
        "total": 1370,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 722,
            "notes": [
              "37% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 454,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 194,
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
        "value": 33
      }
    },
    "otherIncome": {
      "total": 35,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 35
        }
      ]
    },
    "otherExpenses": {
      "total": 7,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 7
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1525,
        "notes": [
          "79% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 155,
        "notes": [
          "8% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 150,
        "notes": [
          "8% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "literal": "$6.4B",
        "value": "6.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "cRPO\n$6.4B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            39,
            1180,
            147,
            171
          ]
        }
      },
      {
        "id": "renewal",
        "label": "Renewal rate",
        "literal": "98%",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1pp) Y/Y"
        ],
        "quote": "Renewal rate\n98%\n(1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1180,
            324,
            171
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $1M",
        "literal": "1,670",
        "value": "1670",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers > $1M\n1,670\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1177,
            382,
            171
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (12%)",
                "毛利率 (14%)"
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
                  "占收入 37%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 79%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "renewal",
            "label": "续约率",
            "notes": [
              "同比 (1 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +22%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q4-fy23",
    "company": "ServiceNow",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q4-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2437,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2365,
          "notes": [
            "+27% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 72,
          "notes": [
            "(10%) Y/Y",
            "(1%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 516,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1651,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 847,
            "notes": [
              "35% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 562,
            "notes": [
              "23% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 242,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 52,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1921,
        "notes": [
          "79% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 270,
        "notes": [
          "11% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 295,
        "notes": [
          "12% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 86,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 86,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 9,
          "notes": []
        }
      ]
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "8.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$8.6B",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "cRPO\n$8.6B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1181,
            145,
            169
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "99",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "99%",
        "basis": "unspecified",
        "notes": [
          "+1pp Y/Y"
        ],
        "quote": "Renewal rate\n99%\n+1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            201,
            1181,
            324,
            169
          ]
        }
      },
      {
        "id": "customers_gt_1m",
        "label": "Customers > $1M",
        "value": "1897",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,897",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $1M\n1,897\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1179,
            382,
            171
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
            "同比 +26%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%",
                "毛利率 81%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (10%)",
                "毛利率 (1%)"
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
                  "占收入 35%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +4 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
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
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比 +1 个百分点"
            ]
          },
          {
            "id": "customers_gt_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "servicenow-q4-fy24",
    "company": "ServiceNow",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/servicenow-q4-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 2957,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 2866,
          "notes": [
            "+21% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 91,
          "notes": [
            "+26% Y/Y",
            "20% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 631
      },
      "operatingExpenses": {
        "total": 1952,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1027,
            "notes": [
              "35% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 668,
            "notes": [
              "23% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 257,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 79
      }
    },
    "otherIncome": {
      "total": 106,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 106
        }
      ]
    },
    "otherExpenses": {
      "total": 17,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 17
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2326,
        "notes": [
          "79% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 374,
        "notes": [
          "13% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 384,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      }
    },
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
                "毛利率 81%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +26%",
                "毛利率 20%"
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
                  "占收入 35%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 79%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "crpo",
            "label": "cRPO",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "renewal_rate",
            "label": "续约率",
            "notes": [
              "同比 (1 个百分点)"
            ]
          },
          {
            "id": "customers_over_1m",
            "label": "客户数 > $1M",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "crpo",
        "label": "cRPO",
        "value": "10.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$10.2B",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "cRPO\n$10.2B\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1147,
            145,
            168
          ]
        }
      },
      {
        "id": "renewal_rate",
        "label": "Renewal rate",
        "value": "98",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "98%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Y/Y"
        ],
        "quote": "Renewal rate\n98%\n(1pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            202,
            1147,
            322,
            168
          ]
        }
      },
      {
        "id": "customers_over_1m",
        "label": "Customers > $1M",
        "value": "2109",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,109",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers > $1M\n2,109\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            539,
            1145,
            380,
            168
          ]
        }
      }
    ]
  }
]);
})(window);
