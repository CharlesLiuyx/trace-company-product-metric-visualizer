/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "take-two-q2-fy26",
    "company": "Take-Two",
    "period": "Q2 FY26",
    "periodNote": "Ending Sept. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.7738,
      "notes": [
        "+31% Y/Y",
        "All values retain Take-Two reported precision; source-image labels round to $0.1B precision."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.8216,
          "notes": [
            "+11% Y/Y",
            "Includes Zynga."
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.72,
          "notes": [
            "+47% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.2322,
          "notes": [
            "+91% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.7738,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.6409,
              "notes": [
                "+33% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1329,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7933
      },
      "operatingExpenses": {
        "total": 1.0785,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5366,
            "notes": [
              "30% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.268,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.225,
            "notes": [
              "13% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.049,
            "notes": [
              "3% of revenue",
              "(2pp) Y/Y",
              "Depreciation and amortization plus business reorganization."
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
        "value": 0.9805,
        "notes": [
          "55% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.098,
        "notes": [
          "(6%) margin",
          "+16pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.098,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +31%",
            "所有数值保留 Take-Two 的报告精度；来源图标签按 $0.1B 精度取整。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +11%",
                "包括 Zynga。"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +47%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +91%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +33%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 +11%"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 30%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 (2 个百分点)",
                  "包括折旧与摊销以及业务重组。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 55%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q4-fy26",
    "company": "Take-Two",
    "period": "Q4 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.6798,
      "notes": [
        "+6% Y/Y",
        "All values retain Take-Two reported precision; source-image labels round to $0.1B precision."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.8439,
          "notes": [
            "+13% Y/Y",
            "Includes Zynga."
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.6746,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1613,
          "notes": [
            "(34%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7411
      },
      "operatingExpenses": {
        "total": 0.9278,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.3922,
            "notes": [
              "23% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2625,
            "notes": [
              "16% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2238,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.0493,
            "notes": [
              "3% of revenue",
              "(3pp) Y/Y",
              "Depreciation and amortization plus business reorganization."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 0.9387,
        "notes": [
          "56% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.0109,
        "notes": [
          "(1%) margin",
          "+239pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.0109,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +6%",
            "所有数值保留 Take-Two 的报告精度；来源图标签按 $0.1B 精度取整。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +13%",
                "包括 Zynga。"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (34%)"
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 23%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 (3 个百分点)",
                  "包括折旧与摊销以及业务重组。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 56%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +239 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q3-fy26",
    "company": "Take-Two",
    "period": "Q3 FY26",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.699,
      "notes": [
        "+25% Y/Y",
        "All values retain Take-Two reported precision; source-image labels round to $0.1B precision."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.8658,
          "notes": [
            "+17% Y/Y",
            "Includes Zynga."
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.6521,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1811,
          "notes": [
            "+51% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7535
      },
      "operatingExpenses": {
        "total": 0.9842,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4332,
            "notes": [
              "25% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2827,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2186,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.0497,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y",
              "Depreciation and amortization plus business reorganization."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 0.9455,
        "notes": [
          "56% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.0387,
        "notes": [
          "(2%) margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.0387,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +25%",
            "所有数值保留 Take-Two 的报告精度；来源图标签按 $0.1B 精度取整。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +17%",
                "包括 Zynga。"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +51%"
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 25%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 (1 个百分点)",
                  "包括折旧与摊销以及业务重组。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 56%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q1-fy27",
    "company": "Take-Two",
    "period": "Q1 FY27",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q1-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.5,
      "notes": [
        "+2% Y/Y",
        "Amounts follow rounded source labels."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.8,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.6,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "(13%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.5,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.4,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(8%) Y/Y"
              ]
            }
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
        "value": 0.7
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "23% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.048,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 0.9,
        "notes": [
          "58% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -0.036,
        "notes": [
          "(2%) margin",
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
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.39",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.39B",
        "basis": "unspecified",
        "notes": [
          "-3% Y/Y"
        ],
        "quote": "Net bookings $1.39B (-3% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1176,
            490,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +2%",
            "金额采用来源图的取整标签。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (13%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (8%)"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 23%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 58%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 (4 个百分点)"
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
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 -3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "take-two-fy24",
    "company": "Take-Two",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.3,
      "notes": [
        "(0%) Y/Y",
        "Amounts follow rounded source labels; Game $4.7B plus Advertising $0.7B differs from total $5.3B by $0.1B."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 2.7,
          "notes": [
            "+8% Y/Y",
            "Includes Zynga"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 2.2,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "(14%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 5.3,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 4.7,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.7,
              "notes": [
                "+7% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.1
      },
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 2.3,
            "notes": [
              "44% of revenue"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.6,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.9,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.3,
            "notes": [
              "5% of revenue",
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
        "value": 2.2,
        "notes": [
          "42% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3.6,
        "notes": [
          "(67%) margin",
          "(45pp) Y/Y"
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
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +8%",
                "包括 Zynga"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (14%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 +7%"
                  ]
                }
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
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 44%"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 29%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 5%",
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
              "利润率 42%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (67%)",
              "同比 (45 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q2-fy24",
    "company": "Take-Two",
    "period": "Q2 FY24",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.3,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 0.5,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.6,
          "notes": [
            "(11%) Y/Y",
            "Includes Zynga"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.3,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.1,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.2,
              "notes": [
                "(2%) Y/Y"
              ]
            }
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
          "Incl. $0.4B of game intangibles",
          "32% of revenue",
          "+25pp Y/Y"
        ],
        "items": [
          {
            "id": "game_intangibles",
            "label": "Game intangibles",
            "value": 0.4
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.3,
            "notes": [
              "26% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.2,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "+13pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.045,
            "notes": [
              "3% of revenue",
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
        "value": 0.4,
        "notes": [
          "32% margin",
          "(17pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.5,
        "notes": [
          "(42%) margin",
          "(24pp) Y/Y"
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
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (11%)",
                "包括 Zynga"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (5%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (2%)"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": [
              "其中 $0.4B 为游戏无形资产",
              "占收入 32%",
              "同比 +25 个百分点"
            ],
            "items": [
              {
                "id": "game_intangibles",
                "label": "游戏无形资产"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 26%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 13%",
                  "同比 +13 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 3%",
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
              "利润率 32%",
              "同比 (17 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (42%)",
              "同比 (24 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        }
      }
    }
  },
  {
    "key": "take-two-q1-fy25",
    "company": "Take-Two",
    "period": "Q1 FY25",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.3,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.5,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.3,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.2,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(36%) Y/Y"
              ]
            }
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
        "value": 0.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "32% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "16% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1,
            "notes": [
              "7% of revenue",
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
        "value": 0.8,
        "notes": [
          "58% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -0.2,
        "notes": [
          "(14%) margin",
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
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +6%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (36%)"
                  ]
                }
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
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 7%",
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
              "利润率 58%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": [
              "营业",
              "亏损"
            ],
            "notes": [
              "利润率 (14%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q2-fy23",
    "company": "Take-Two",
    "period": "Q2 FY23",
    "periodNote": "Ending Sept. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.4,
      "notes": [
        "+62% Y/Y"
      ],
      "items": [
        {
          "id": "game",
          "label": "Game",
          "value": 1.2,
          "notes": [
            "+46% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+585% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform_revenue",
          "label": "Revenue by platform",
          "total": 1.4,
          "items": [
            {
              "id": "console",
              "label": "Console",
              "value": 0.6,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "mobile",
              "label": "Mobile",
              "value": 0.7,
              "notes": [
                "+534% Y/Y"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC & other",
              "value": 0.1,
              "notes": [
                "(24%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.03,
            "notes": []
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "Not separately shown in Source."
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
        "value": 0.7,
        "notes": [
          "49% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.3,
        "notes": [
          "(18%) margin",
          "(20pp) Y/Y"
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
        "period": "2023 财年第二季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "game",
              "label": "游戏",
              "notes": [
                "同比 +46%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +585%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform_revenue",
              "label": "按平台划分的收入",
              "items": [
                {
                  "id": "console",
                  "label": "主机",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "mobile",
                  "label": "移动端",
                  "notes": [
                    "同比 +534%"
                  ]
                },
                {
                  "id": "pc_other",
                  "label": "PC 及其他",
                  "notes": [
                    "同比 (24%)"
                  ]
                }
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
                "label": "销售与市场营销"
              },
              {
                "id": "rnd",
                "label": "研究与开发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独列示。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (18%)",
              "同比 (20 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q3-fy23",
    "company": "Take-Two",
    "period": "Q3 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.4,
      "notes": [
        "+56% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 0.6,
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+595% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "(7%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform_total",
          "label": "Revenue by platform",
          "total": 1.4,
          "items": [
            {
              "id": "console",
              "label": "Console",
              "value": 0.6,
              "notes": [
                "(16%) Y/Y"
              ]
            },
            {
              "id": "mobile",
              "label": "Mobile",
              "value": 0.7,
              "notes": [
                "+595% Y/Y"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC & other",
              "value": 0.1,
              "notes": [
                "(7%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.4,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.2,
              "notes": [
                "+39% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.2,
              "notes": [
                "+783% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.4,
            "notes": [
              "32% of revenue",
              "+17pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.2,
            "notes": [
              "17% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.035,
            "notes": []
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.7,
        "notes": [
          "51% margin",
          "(10pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(12%) margin",
          "(29pp) Y/Y"
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
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +56%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (16%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +595%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (7%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform_total",
              "label": "按平台划分的收入",
              "items": [
                {
                  "id": "console",
                  "label": "主机",
                  "notes": [
                    "同比 (16%)"
                  ]
                },
                {
                  "id": "mobile",
                  "label": "移动端",
                  "notes": [
                    "同比 +595%"
                  ]
                },
                {
                  "id": "pc_other",
                  "label": "PC 及其他",
                  "notes": [
                    "同比 (7%)"
                  ]
                }
              ]
            },
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +39%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 +783%"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 32%",
                  "同比 +17 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 51%",
              "同比 (10 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 (29 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q4-fy23",
    "company": "Take-Two",
    "period": "Q4 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.4,
      "notes": [
        "+56% Y/Y",
        "Amounts follow rounded source labels."
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 0.6,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+602% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "(11%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform_revenue",
          "label": "Revenue by type",
          "total": 1.4,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.3,
              "notes": [
                "+39% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.2,
              "notes": [
                "+842% Y/Y"
              ]
            }
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
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.4,
            "notes": [
              "30% of revenue",
              "+15pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.2,
            "notes": [
              "16% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": [
              "15% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.036,
            "notes": []
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.2,
        "notes": [
          "15% margin",
          "(42pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.7,
        "notes": [
          "(49%) margin",
          "(62pp) Y/Y"
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
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +56%",
            "金额采用来源图的取整标签。"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +602%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (11%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform_revenue",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +39%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 +842%"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 30%",
                  "同比 +15 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 (42 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (49%)",
              "同比 (62 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "take-two-q1-fy26",
    "company": "Take-Two",
    "period": "Q1 FY26",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.5,
      "notes": [
        "+12% Y/Y",
        "Amounts follow rounded source labels."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.8,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.2,
          "notes": [
            "+42% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.5,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.4,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(0%) Y/Y"
              ]
            }
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
        "value": 0.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "27% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "17% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.046,
            "notes": [
              "3% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0,
        "notes": [
          "Tax is included in source Other; no separate tax face."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.034,
      "items": [
        {
          "id": "non_operating_other",
          "label": "Other",
          "value": 0.034,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.9,
        "notes": [
          "63% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating",
          "profit"
        ],
        "value": 0.022,
        "notes": [
          "1% margin",
          "+15pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.012,
        "notes": [
          "(1%) margin",
          "+19pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.42",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.42B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Net bookings $1.42B (+17% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1176,
            490,
            73
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +12%",
            "金额采用来源图的取整标签。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +42%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (0%)"
                  ]
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": [
              "收入",
              "成本"
            ],
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 (4 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": [
              "来源图的其他项目包含税费；没有单独税费节点。"
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "non_operating_other",
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
              "63% 利润率",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": [
              "营业",
              "利润"
            ],
            "notes": [
              "1% 利润率",
              "同比 +15 个百分点"
            ]
          },
          "net": {
            "id": "net_loss",
            "label": "净亏损",
            "notes": [
              "(1%) 利润率",
              "同比 +19 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +17%"
            ]
          }
        ],
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 6 月"
      }
    }
  },
  {
    "key": "take-two-q2-fy25",
    "company": "Take-Two",
    "period": "Q2 FY25",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.4,
      "notes": [
        "+4% Y/Y",
        "Amounts follow rounded source labels."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.5,
          "notes": [
            "(10%) Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "+15% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.4,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.2,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(30%) Y/Y"
              ]
            }
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
        "value": 0.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "34% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "19% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1,
            "notes": [
              "5% of revenue",
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
        "value": 0.7,
        "notes": [
          "54% margin",
          "+22pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -0.3,
        "notes": [
          "(22%) margin",
          "+20pp Y/Y"
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
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.5B",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Net bookings $1.5B (+2% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1177,
            490,
            72
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +4%",
            "金额采用来源图的取整标签。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +15%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (30%)"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 34%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 5%",
                  "同比 (12 个百分点)"
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
              "利润率 54%",
              "同比 +22 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 +20 个百分点"
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
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "take-two-q3-fy25",
    "company": "Take-Two",
    "period": "Q3 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.4,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.5,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform",
          "label": "Revenue by type",
          "total": 1.4,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.2,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(26%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.6
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "29% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1,
            "notes": [
              "5% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.8,
        "notes": [
          "56% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(10%) margin",
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
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.4B",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Net bookings $1.4B (+3% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1176,
            490,
            73
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +7%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (26%)"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 29%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 5%",
                  "同比 +2 个百分点"
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
              "利润率 56%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 (0 个百分点)"
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
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "take-two-q4-fy25",
    "company": "Take-Two",
    "period": "Q4 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/take-two-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.6,
      "notes": [
        "+13% Y/Y",
        "Source-rounded platform components total $1.5B versus $1.6B revenue."
      ],
      "items": [
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.7,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "console",
          "label": "Console",
          "value": 0.6,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.2,
          "notes": [
            "+111% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.6,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.5,
              "notes": [
                "+17% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.1,
              "notes": [
                "(22%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "notes": [
          "Source-rounded components total $4.5B versus $4.6B total."
        ],
        "items": [
          {
            "id": "goodwill",
            "label": "Goodwill impairment",
            "value": 3.5,
            "notes": [
              "224% of revenue",
              "+68pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "25% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "15% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1,
            "notes": [
              "7% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0,
        "notes": [
          "Not separately shown in Source."
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
        "value": 0.8,
        "notes": [
          "51% margin",
          "+17pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3.8,
        "notes": [
          "(239%) margin",
          "(45pp) Y/Y"
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
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.6B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Net bookings $1.6B (+17% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1176,
            490,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +13%",
            "来源图中，取整后的平台收入分项合计为 $1.5B，总收入为 $1.6B。"
          ],
          "items": [
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +111%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 +17%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (22%)"
                  ]
                }
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
            "label": "营业费用",
            "notes": [
              "来源图中，取整后的费用分项合计为 $4.5B，总费用为 $4.6B。"
            ],
            "items": [
              {
                "id": "goodwill",
                "label": "商誉减值",
                "notes": [
                  "占收入 224%",
                  "同比 +68 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 25%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 7%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独列示税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 51%",
              "同比 +17 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (239%)",
              "同比 (45 个百分点)"
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
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "take-two-q3-fy24",
    "company": "Take-Two",
    "period": "Q3 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/take-two-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.3,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 0.7,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.5,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.1,
          "notes": [
            "(11%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform_revenue",
          "label": "Revenue by type",
          "total": 1.3,
          "items": [
            {
              "id": "game",
              "label": "Game",
              "value": 1.2,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 0.2,
              "notes": [
                "(10%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.8,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.4,
            "notes": [
              "27% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.2,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.043,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 0.7,
        "notes": [
          "50% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(9%) margin",
          "+3pp Y/Y"
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
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (11%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform_revenue",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "game",
                  "label": "游戏",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (10%)"
                  ]
                }
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 27%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 3%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  }
]);
})(window);
