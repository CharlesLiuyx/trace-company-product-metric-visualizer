/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "electronic-arts-fy24",
    "company": "Electronic Arts",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/electronic-arts-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.6,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 4.6,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 1.7,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 1.2,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "product_type",
          "label": "Revenue by product type",
          "total": 7.6,
          "items": [
            {
              "id": "live_services",
              "label": "Live services",
              "value": 5.5,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "full_games",
              "label": "Full games",
              "value": 2,
              "notes": [
                "+4% Y/Y"
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
        "value": 1.7
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.4,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 1,
            "notes": [
              "13% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "9% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
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
        "value": 5.9,
        "notes": [
          "77% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "17% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "7.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.4B",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Net bookings $7.4B (+1% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            184,
            1320,
            491,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
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
                "同比 (1%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (3%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "product_type",
              "label": "按产品类型划分的收入",
              "items": [
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 +4%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
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
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q2-fy23",
    "company": "Electronic Arts",
    "period": "Q2 FY23",
    "periodNote": "Ending Sept. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_type",
          "label": "Revenue by type",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.6
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.3
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.5
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.043
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
        "value": 1.4
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "console",
              "label": "主机"
            },
            {
              "id": "pc_other",
              "label": "PC 及其他"
            },
            {
              "id": "mobile",
              "label": "移动端"
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_type",
              "label": "按类型划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏"
                },
                {
                  "id": "live_services",
                  "label": "在线服务"
                }
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "electronic-arts-q4-fy23",
    "company": "Electronic Arts",
    "period": "Q4 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.1
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.5
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3
        }
      ],
      "breakdowns": [
        {
          "id": "game_type",
          "label": "Revenue by game type",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.4
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.5
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.6
          },
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 0.3
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.2
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.026
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
      "total": 0.006,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.006
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
        "value": 1.4
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2
      },
      "net": {
        "id": "net_profit",
        "label": "Net loss",
        "value": -0.024
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机"
            },
            {
              "id": "pc_other",
              "label": "PC 及其他"
            },
            {
              "id": "mobile",
              "label": "移动端"
            }
          ],
          "breakdowns": [
            {
              "id": "game_type",
              "label": "按游戏类型划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏"
                },
                {
                  "id": "live_services",
                  "label": "在线服务"
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
                "id": "rnd",
                "label": "研发费用"
              },
              {
                "id": "sales_marketing",
                "label": "销售与营销"
              },
              {
                "id": "general_admin",
                "label": "一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              },
              {
                "id": "amortization",
                "label": "摊销费用"
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
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "electronic-arts-q3-fy23",
    "company": "Electronic Arts",
    "period": "Q3 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q3-fy23.png",
    "roundingTolerance": 0.151,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_platform",
          "label": "Revenue by product type",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.6,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.3,
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
        "value": 0.6
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.05
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.007,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.007
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "70% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "11% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
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
                "同比 +16%"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +6%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_platform",
              "label": "按产品类型划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "live_services",
                  "label": "在线服务",
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
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "sm",
                "label": "销售与市场"
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
            "label": "税费"
          }
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
              "毛利率 70%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +7 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "electronic-arts-q3-fy24",
    "company": "Electronic Arts",
    "period": "Q3 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_platform",
          "label": "Revenue by monetization",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.6,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.3,
              "notes": [
                "+5% Y/Y"
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
        "value": 0.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "30% of revenue"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.3,
            "notes": [
              "14% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "9% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.021,
            "notes": [],
            "valueText": "($21M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": [],
        "valueText": "($0.1B)"
      }
    },
    "otherIncome": {
      "total": 0.017,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.017,
          "notes": [],
          "valueText": "$17M"
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
        "value": 1.4,
        "notes": [
          "73% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "2.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.4B",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Net bookings $2.4B (+1% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            184,
            1320,
            491,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 +1%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_platform",
              "label": "按变现方式划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 +5%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
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
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q1-fy25",
    "company": "Electronic Arts",
    "period": "Q1 FY25",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.7,
      "notes": [
        "(14%) Y/Y"
      ],
      "items": [
        {
          "id": "platform_revenue",
          "label": "Revenue",
          "value": 1.7,
          "valueText": "$1.7B",
          "notes": [
            "(14%) Y/Y"
          ],
          "children": [
            {
              "id": "console",
              "label": "Console",
              "value": 1,
              "valueText": "$1.0B",
              "notes": [
                "(14%) Y/Y"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC & other",
              "value": 0.4,
              "valueText": "$0.4B",
              "notes": [
                "(19%) Y/Y"
              ]
            },
            {
              "id": "mobile",
              "label": "Mobile",
              "value": 0.3,
              "valueText": "$0.3B",
              "notes": [
                "(5%) Y/Y"
              ]
            }
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "game_type",
          "label": "Revenue by game type",
          "total": 1.7,
          "items": [
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.4,
              "valueText": "$1.4B",
              "notes": [
                "(5%) Y/Y"
              ]
            },
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.3,
              "valueText": "$0.3B",
              "notes": [
                "(44%) Y/Y"
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
        "value": 0.3,
        "valueText": "($0.3B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": [
              "38% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "12% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "11% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.019,
            "valueText": "($19M)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "valueText": "($0.1B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.03,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.03,
          "valueText": "$30M",
          "notes": []
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
        "value": 1.4,
        "valueText": "$1.4B",
        "notes": [
          "84% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "valueText": "$0.4B",
        "notes": [
          "22% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "valueText": "$0.3B",
        "notes": [
          "17% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "literal": "$1.3B",
        "value": "1.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(-19% Y/Y)"
        ],
        "quote": "Net bookings $1.3B (-19% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            184,
            1320,
            491,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (14%)"
          ],
          "items": [
            {
              "id": "platform_revenue",
              "label": "收入",
              "notes": [
                "同比 (14%)"
              ],
              "children": [
                {
                  "id": "console",
                  "label": "主机",
                  "notes": [
                    "同比 (14%)"
                  ]
                },
                {
                  "id": "pc_other",
                  "label": "PC 及其他",
                  "notes": [
                    "同比 (19%)"
                  ]
                },
                {
                  "id": "mobile",
                  "label": "移动端",
                  "notes": [
                    "同比 (5%)"
                  ]
                }
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "game_type",
              "label": "按游戏类型划分的收入",
              "items": [
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 (5%)"
                  ]
                },
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 (44%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售及营销",
                "notes": [
                  "占收入 12%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税",
            "notes": []
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
          "items": []
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
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 (4 个百分点)"
            ]
          }
        },
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 6 月",
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "（同比 -19%）"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q1-fy26",
    "company": "Electronic Arts",
    "period": "Q1 FY26",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.7,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "live_services",
          "label": "Live services",
          "value": 1.4,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "full_games",
          "label": "Full games",
          "value": 0.3,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_platform",
          "label": "Revenue by platform",
          "total": 1.7,
          "items": [
            {
              "id": "console",
              "label": "Console",
              "value": 1,
              "notes": [
                "Flat Y/Y"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC & other",
              "value": 0.4,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "mobile",
              "label": "Mobile",
              "value": 0.3,
              "notes": [
                "Flat Y/Y"
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
        "value": 0.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.7,
            "notes": [
              "42% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.017,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.002,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.002,
          "notes": []
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
        "value": 1.4,
        "notes": [
          "83% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "16% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "12% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.3B",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Net bookings $1.3B (+3% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1276,
            489,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "live_services",
              "label": "在线服务",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "full_games",
              "label": "完整游戏",
              "notes": [
                "同比 +16%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_platform",
              "label": "Revenue by platform",
              "items": [
                {
                  "id": "console",
                  "label": "主机",
                  "notes": [
                    "同比持平"
                  ]
                },
                {
                  "id": "pc_other",
                  "label": "PC 及其他",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "mobile",
                  "label": "移动端",
                  "notes": [
                    "同比持平"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 42%",
                  "同比 +4pp"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 13%",
                  "同比 +0pp"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 +0pp"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": []
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
              "利润率 83%",
              "同比 (1pp)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (6pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (5pp)"
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
    "key": "electronic-arts-q2-fy25",
    "company": "Electronic Arts",
    "period": "Q2 FY25",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "live_services",
          "label": "Live services",
          "value": 1.3,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "full_games",
          "label": "Full games",
          "value": 0.7,
          "notes": [
            "+15% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "platform",
          "label": "Revenue by platform",
          "total": 2,
          "items": [
            {
              "id": "console",
              "label": "Console",
              "value": 1.4,
              "notes": [
                "+16% Y/Y"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC & other",
              "value": 0.4,
              "notes": [
                "(14%) Y/Y"
              ]
            },
            {
              "id": "mobile",
              "label": "Mobile",
              "value": 0.3,
              "notes": [
                "(6%) Y/Y"
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
        "value": 0.5
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "32% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.3,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1
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
      "total": 0.015,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.015
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
        "value": 1.6,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "19% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "15% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "2.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.1B",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Net bookings $2.1B (+14% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1276,
            490,
            74
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
            "同比 +6%"
          ],
          "items": [
            {
              "id": "live_services",
              "label": "在线服务"
            },
            {
              "id": "full_games",
              "label": "完整游戏"
            }
          ],
          "breakdowns": [
            {
              "id": "platform",
              "label": "按平台划分的收入",
              "items": [
                {
                  "id": "console",
                  "label": "主机"
                },
                {
                  "id": "pc_other",
                  "label": "PC 及其他"
                },
                {
                  "id": "mobile",
                  "label": "移动端"
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
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政"
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
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
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q1-fy24",
    "company": "Electronic Arts",
    "period": "Q1 FY24",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.5,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_platform",
          "label": "Revenue by game type",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.4,
              "notes": [
                "+30% Y/Y"
              ]
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.5,
              "notes": [
                "+4% Y/Y"
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.026
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.001
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
      "total": 0.014,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.014
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
        "value": 1.6,
        "notes": [
          "81% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "28% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 与其他",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (5%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_platform",
              "label": "按游戏类型划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 +30%"
                  ]
                },
                {
                  "id": "live_services",
                  "label": "实时服务",
                  "notes": [
                    "同比 +4%"
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
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "sm",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
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
              "利润率 81%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "electronic-arts-q3-fy25",
    "company": "Electronic Arts",
    "period": "Q3 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "(7%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "revenue_platform",
          "label": "Revenue",
          "total": 1.9,
          "items": [
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.3,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.6,
              "notes": [
                "(3%) Y/Y"
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
        "value": 0.5
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "32% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.3,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.017
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
      "total": 0.028,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.028
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
        "value": 1.4,
        "notes": [
          "76% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "20% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "2.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.2B",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Net bookings $2.2B (6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1276,
            490,
            74
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
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "console",
              "label": "游戏主机",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (7%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "revenue_platform",
              "label": "收入",
              "items": [
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 (3%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他"
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
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 76%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "营业利润率 20%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "净利率 16%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q4-fy25",
    "company": "Electronic Arts",
    "period": "Q4 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q4-fy25.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "+13% Y/Y"
          ],
          "valueText": "$1.2B"
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "+1% Y/Y"
          ],
          "valueText": "$0.4B"
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "(7%) Y/Y"
          ],
          "valueText": "$0.3B"
        }
      ],
      "breakdowns": [
        {
          "id": "platform_revenue",
          "label": "Revenue",
          "total": 1.9,
          "items": [
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.5,
              "notes": [
                "+1% Y/Y"
              ],
              "valueText": "$1.5B"
            },
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.4,
              "notes": [
                "+31% Y/Y"
              ],
              "valueText": "$0.4B"
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "notes": [],
        "valueText": "($0.4B)"
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.7,
            "notes": [
              "36% of revenue",
              "+0pp Y/Y"
            ],
            "valueText": "($0.7B)"
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.2,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ],
            "valueText": "($0.2B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ],
            "valueText": "($0.2B)"
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.02,
            "notes": [],
            "valueText": "($20M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": [],
        "valueText": "($0.1B)"
      }
    },
    "otherIncome": {
      "total": 0.012,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.012,
          "notes": [],
          "valueText": "$12M"
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
        "value": 1.5,
        "notes": [
          "81% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$1.5B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "21% margin",
          "+8pp Y/Y"
        ],
        "valueText": "$0.4B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "13% margin",
          "+3pp Y/Y"
        ],
        "valueText": "$0.3B"
      }
    },
    "operatingMetrics": [
      {
        "id": "net_bookings",
        "label": "Net bookings",
        "value": "1.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.8B",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Net bookings $1.8B (+8% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            68,
            1276,
            492,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (7%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "platform_revenue",
              "label": "收入",
              "items": [
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 +31%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 36%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": []
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
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +3 个百分点"
            ]
          }
        },
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 3 月",
        "operatingMetrics": [
          {
            "id": "net_bookings",
            "label": "净预订额",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "electronic-arts-q2-fy24",
    "company": "Electronic Arts",
    "period": "Q2 FY24",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/electronic-arts-q2-fy24.png",
    "roundingTolerance": 0.11,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "console",
          "label": "Console",
          "value": 1.2,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "pc_other",
          "label": "PC & other",
          "value": 0.4,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "mobile",
          "label": "Mobile",
          "value": 0.3,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "business_type",
          "label": "Revenue by business type",
          "total": 1.9,
          "items": [
            {
              "id": "full_games",
              "label": "Full games",
              "value": 0.6,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "live_services",
              "label": "Live services",
              "value": 1.3,
              "notes": [
                "(1%) Y/Y"
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
        "value": 0.5
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "31% of revenue"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.3,
            "notes": [
              "15% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.024
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.002
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0.022,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.014
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 0.008
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
        "value": 1.5,
        "notes": [
          "76% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "20% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "21% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "console",
              "label": "主机",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "pc_other",
              "label": "PC 及其他",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "mobile",
              "label": "移动端",
              "notes": [
                "同比 (5%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "business_type",
              "label": "按业务类型划分的收入",
              "items": [
                {
                  "id": "full_games",
                  "label": "完整游戏",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "live_services",
                  "label": "在线服务",
                  "notes": [
                    "同比 (1%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 15%"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
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
              "利润率 76%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
