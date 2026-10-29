/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "lyft-q2-fy23",
    "company": "Lyft",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1020,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 941,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 80,
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
        "value": 607
      },
      "operatingExpenses": {
        "total": 573,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 201,
            "notes": [
              "20% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 155,
            "notes": [
              "15% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 109,
            "notes": [
              "11% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 108,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 414,
        "notes": [
          "41% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -159,
        "notes": [
          "(16%) margin",
          "+22pp Y/Y"
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
        "id": "active_riders",
        "label": "Active Riders",
        "value": "21500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21.5M",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Active Riders\n21.5M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1201,
            310,
            149
          ]
        }
      },
      {
        "id": "revenue_per_active_rider",
        "label": "Revenue per Active Rider",
        "value": "0.04751",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$47.51",
        "basis": "unspecified",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "Revenue per Active Rider\n$47.51\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            361,
            1201,
            466,
            149
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 20%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 11%",
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
              "利润率 41%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 +22 个百分点"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "revenue_per_active_rider",
            "label": "每位活跃乘客收入",
            "notes": [
              "同比 (5%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q3-fy25",
    "company": "Lyft",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1685,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1546,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 139,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 927
      },
      "operatingExpenses": {
        "total": 735,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 251,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 243,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 131,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 110,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_expense",
        "label": "Tax expense",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 28,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 26
        },
        {
          "id": "tax",
          "label": "Tax",
          "value": 2
        }
      ]
    },
    "otherExpenses": {
      "total": 5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 758,
        "notes": [
          "45% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 23,
        "notes": [
          "1% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 46,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +3%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
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
            },
            {
              "id": "tax",
              "label": "税费"
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
              "利润率 45%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lyft-fy25",
    "company": "Lyft",
    "period": "FY25",
    "periodNote": "Year ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 6316,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 5895,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 421,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3698
      },
      "operatingExpenses": {
        "total": 2807,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 1002,
            "notes": [
              "16% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 875,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 478,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 451,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 2619,
        "notes": [
          "41% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -188,
        "notes": [
          "(3%) margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -188,
        "notes": [
          "Source chart stops at operating loss; no net income bridge is rendered."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月 31 日止年度",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +0%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": "运营与支持",
                "notes": [
                  "占收入 8%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
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
              "利润率 41%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "lyft-q1-fy23",
    "company": "Lyft",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1001,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 953,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 48,
          "notes": [
            "(17%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 549,
        "notes": []
      },
      "operatingExpenses": {
        "total": 668,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 257,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 197,
            "notes": [
              "20% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 116,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 99,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 452,
        "notes": [
          "45% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -217,
        "notes": [
          "(22%) margin",
          "+1pp Y/Y"
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
        "id": "active_riders",
        "label": "Active Riders",
        "value": "19600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "19.6M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n19.6M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1201,
            309,
            150
          ]
        }
      },
      {
        "id": "revenue_per_active_rider",
        "label": "Revenue per Active Rider",
        "value": "0.05117",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$51.17",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Revenue per Active Rider\n$51.17\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            361,
            1201,
            466,
            150
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
            "同比 +14%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 (17%)"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 26%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": "运营与支持",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 45%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 +1 个百分点"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "revenue_per_active_rider",
            "label": "每位活跃乘客收入",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q3-fy23",
    "company": "Lyft",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q3-fy23.png",
    "revenue": {
      "total": 1158,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1070,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 88,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 645
      },
      "operatingExpenses": {
        "total": 553,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 195,
            "notes": [
              "17% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 130,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 119,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 109,
            "notes": [
              "9% of revenue",
              "(12pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 513,
        "notes": [
          "44% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -40,
        "notes": [
          "(3%) margin",
          "+24pp Y/Y"
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
        "id": "active_riders",
        "label": "Active Riders",
        "value": "22400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22.4M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n22.4M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1202,
            309,
            148
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "187000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "187M",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Ride\n187M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1202,
            168,
            148
          ]
        }
      },
      {
        "id": "revenue_per_rider",
        "label": "Revenue per Active Rider",
        "value": "0.05167",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$51.67",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "Revenue per Active Rider\n$51.67\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            537,
            1202,
            465,
            148
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
            "同比 +10%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +0%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 (12 个百分点)"
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
              "利润率 44%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +24 个百分点"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "revenue_per_rider",
            "label": "每位活跃乘客收入",
            "notes": [
              "同比 (0%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q3-fy24",
    "company": "Lyft",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1523,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1388,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 134,
          "notes": [
            "+54% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 888
      },
      "operatingExpenses": {
        "total": 691,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 253,
            "notes": [
              "17% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 216,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 117,
            "notes": [
              "8% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 104,
            "notes": [
              "7% of revenue",
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
        "value": 634,
        "notes": [
          "42% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -57,
        "notes": [
          "(4%) margin",
          "(0pp) Y/Y"
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
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +54%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 8%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
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
              "利润率 42%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (0 个百分点)"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "literal": "24.4M",
        "value": "24400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Active Riders\n24.4M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1200,
            310,
            150
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "literal": "217M",
        "value": "217000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Ride\n217M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1200,
            170,
            150
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "literal": "$4.1B",
        "value": "4.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Gross Bookings\n$4.1B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            536,
            1200,
            332,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "lyft-q2-fy25",
    "company": "Lyft",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1588,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1477,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 111,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 936
      },
      "operatingExpenses": {
        "total": 650,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 232,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 191,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 117,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 109,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 38,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 38
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
        "value": 652,
        "notes": [
          "41% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "0% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 40,
        "notes": [
          "3% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "value": "26100000",
        "unit": "count",
        "currency": null,
        "literal": "26.1M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n26.1M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1202,
            309,
            147
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "235000000",
        "unit": "count",
        "currency": null,
        "literal": "235M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Ride\n235M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1202,
            169,
            147
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "4.5",
        "unit": "B",
        "currency": "USD",
        "literal": "$4.5B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Gross Bookings\n$4.5B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            536,
            1202,
            332,
            147
          ]
        }
      }
    ],
    "notes": [
      "Operating expense components total $649M versus the printed $650M total; $1M difference is within independent integer-million rounding."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 (3%)"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 41%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +2 个百分点"
            ]
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
        "operatingMetrics": [
          {
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q4-fy24",
    "company": "Lyft",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1550,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1446,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 104,
          "notes": [
            "+45% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 875
      },
      "operatingExpenses": {
        "total": 648,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 195,
            "notes": [
              "13% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 251,
            "notes": [
              "16% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 108,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 94,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax expense",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 41,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 41
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
        "value": 676,
        "notes": [
          "44% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "2% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 62,
        "notes": [
          "4% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +45%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 6%",
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
              "利润率 44%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "value": "24700000",
        "unit": "count",
        "currency": null,
        "literal": "24.7M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n24.7M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            311,
            150
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "219000000",
        "unit": "count",
        "currency": null,
        "literal": "219M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Ride\n219M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1202,
            168,
            150
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "4.3",
        "unit": "B",
        "currency": "USD",
        "literal": "$4.3B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Gross Bookings\n$4.3B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            537,
            1202,
            331,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "lyft-q4-fy23",
    "company": "Lyft",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q4-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1225,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1153,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 72,
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
        "value": 744
      },
      "operatingExpenses": {
        "total": 541,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 218,
            "notes": [
              "18% of revenue",
              "(26pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 126,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 102,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 95,
            "notes": [
              "8% of revenue",
              "(12pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 481,
        "notes": [
          "39% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -60,
        "notes": [
          "(5%) margin",
          "+46pp Y/Y"
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
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日止季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 (26 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": "运营与支持",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (12 个百分点)"
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
              "利润率 39%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +46 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "value": "22400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22.4M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n22.4M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            310,
            149
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "191000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "191M",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "Ride\n191M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1202,
            169,
            149
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.7B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Gross Bookings\n$3.7B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            536,
            1202,
            332,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "lyft-q1-fy25",
    "company": "Lyft",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended March 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1450,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1374,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
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
        "value": 863
      },
      "operatingExpenses": {
        "total": 616,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 215,
            "notes": [
              "15% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 182,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 106,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 112,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 587,
        "notes": [
          "40% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -29,
        "notes": [
          "(2%) margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日止季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": "运营与支持",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 40%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图止于营业亏损，未展示净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "value": "24200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "24.2M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Active Riders\n24.2M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1201,
            309,
            149
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "218000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "218M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Ride\n218M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1201,
            169,
            149
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "4.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.2B",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Gross Bookings\n$4.2B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            536,
            1201,
            332,
            149
          ]
        }
      }
    ]
  },
  {
    "key": "lyft-q1-fy24",
    "company": "Lyft",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q1-fy24.png",
    "roundingTolerance": 1.1,
    "notes": [
      "Source rounded operating-expense items sum to $584M versus the displayed $585M total; $1M difference is within independent rounding intervals."
    ],
    "revenue": {
      "total": 1277,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1210,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 67,
          "notes": [
            "+41% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 755
      },
      "operatingExpenses": {
        "total": 585,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 236,
            "notes": [
              "18% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 145,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 103,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 100,
            "notes": [
              "8% of revenue",
              "(12pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 522,
        "notes": [
          "41% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -63,
        "notes": [
          "(5%) margin",
          "+17pp Y/Y"
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
        "id": "active_riders",
        "label": "Active Riders",
        "value": "21900000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "21.9M",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Active Riders\n21.9M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            311,
            148
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "188000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "188M",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Ride\n188M\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            354,
            1202,
            167,
            148
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "literal": "$3.7B",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Gross Bookings\n$3.7B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            537,
            1202,
            331,
            148
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
            "同比 +28%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +41%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (12 个百分点)"
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
              "利润率 41%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +17 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +21%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q2-fy24",
    "company": "Lyft",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1436,
      "notes": [
        "+41% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 1322,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 114,
          "notes": [
            "+43% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 820
      },
      "operatingExpenses": {
        "total": 644,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 253,
            "notes": [
              "18% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 176,
            "notes": [
              "12% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "operations_support",
            "label": [
              "Operations",
              "& support"
            ],
            "value": 116,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 99,
            "notes": [
              "7% of revenue",
              "(8pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
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
        "value": 616,
        "notes": [
          "43% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -27,
        "notes": [
          "(2%) margin",
          "+14pp Y/Y",
          "Source integer rounding: $616M - $644M = ($28M), while the printed operating loss is ($27M); the $1M difference is within rounding intervals."
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
        "id": "active_riders",
        "label": "Active Riders",
        "value": "23700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "23.7M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Riders\n23.7M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1202,
            309,
            147
          ]
        }
      },
      {
        "id": "rides",
        "label": "Ride",
        "value": "205000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "205M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Ride\n205M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1202,
            169,
            147
          ]
        }
      },
      {
        "id": "gross_bookings",
        "label": "Gross Bookings",
        "value": "4.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.0B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Gross Bookings\n$4.0B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            536,
            1202,
            332,
            147
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
            "同比 +41%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
              "notes": [
                "同比 +43%"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 18%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "operations_support",
                "label": [
                  "运营",
                  "与支持"
                ],
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (8 个百分点)"
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
              "利润率 43%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +14 个百分点"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "rides",
            "label": "行程",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "gross_bookings",
            "label": "总预订额",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "lyft-q3-fy22",
    "company": "Lyft",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended September 30, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/lyft-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1054,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "rideshare",
          "label": "Rideshare",
          "value": 966,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "rentals",
          "label": "Rentals",
          "value": 88,
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
        "value": 570,
        "notes": []
      },
      "operatingExpenses": {
        "total": 773,
        "items": [
          {
            "id": "ga",
            "label": "General & admin",
            "value": 293,
            "notes": [
              "28% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 228,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 134,
            "notes": [
              "13% of revenue",
              "Unchanged"
            ]
          },
          {
            "id": "operations_support",
            "label": "Operations & support",
            "value": 119,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not shown",
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
        "value": 483,
        "notes": [
          "46% margin",
          "(9pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -290,
        "notes": [
          "(28%) margin",
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
    "operatingMetrics": [
      {
        "id": "active_riders",
        "label": "Active Riders",
        "value": "20300000",
        "unit": "count",
        "currency": null,
        "literal": "20.3M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Active Riders\n20.3M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            310,
            150
          ]
        }
      },
      {
        "id": "revenue_per_active_rider",
        "label": "Revenue per Active Rider",
        "value": "0.0519",
        "unit": "K",
        "currency": "USD",
        "literal": "$51.9",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Revenue per Active Rider\n$51.9\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            360,
            1202,
            467,
            150
          ]
        }
      }
    ],
    "notes": [
      "Source integer-million rounding: revenue less cost is $484M versus printed gross profit $483M; expense items sum to $774M versus printed total $773M."
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月 30 日止季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "rideshare",
              "label": "网约车",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "rentals",
              "label": "租赁",
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 28%",
                  "同比 +1 个百分点"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "保持不变"
                ]
              },
              {
                "id": "operations_support",
                "label": "运营与支持",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "未展示税费"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (9 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (28%)",
              "同比 (4 个百分点)"
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
            "id": "active_riders",
            "label": "活跃乘客",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "revenue_per_active_rider",
            "label": "每位活跃乘客收入",
            "notes": [
              "同比 +14%"
            ]
          }
        ],
        "notes": [
          "原图按整数百万舍入：收入减成本为 $484M，图印毛利润 $483M；费用分项合计 $774M，图印总额 $773M。"
        ]
      }
    }
  }
]);
})(window);
