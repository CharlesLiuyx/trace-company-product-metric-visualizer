/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "netease-q4-fy24",
    "company": "NetEase",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 2.9,
          "notes": [
            "+1% Y/Y",
            "67% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(5%) Y/Y",
            "32% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "(9%) Y/Y",
            "49% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "(17%) Y/Y",
            "38% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "11% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
        "value": 2.2,
        "notes": [
          "61% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "29% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "33% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "games",
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +1%",
                "毛利率 67%"
              ]
            },
            {
              "id": "cloud_music",
              "label": "云音乐",
              "notes": [
                "同比 (5%)",
                "毛利率 32%"
              ]
            },
            {
              "id": "youdao",
              "label": "有道",
              "notes": [
                "同比 (9%)",
                "毛利率 49%"
              ]
            },
            {
              "id": "innovative_businesses",
              "label": "创新业务及其他",
              "notes": [
                "同比 (17%)",
                "毛利率 38%"
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
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 11%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "利润率 61%",
              "同比 (1 个百分点)"
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
              "利润率 33%",
              "同比 +9 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q4-fy25",
    "company": "NetEase",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q4-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 3.9,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.1,
          "notes": [
            "+3% Y/Y",
            "71% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+5% Y/Y",
            "35% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+17% Y/Y",
            "45% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "(10%) Y/Y",
            "40% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "R&D, S&M, and G&A line items sum to $1.4B because the source chart rounds to one decimal place."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "14% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "64% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "30% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "23% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +3%",
                "毛利率 71%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 +5%",
                "毛利率 35%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +17%",
                "毛利率 45%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (10%)",
                "毛利率 40%"
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
              "研发、销售与营销、管理费用明细合计为 14 亿美元，因为源图按一位小数四舍五入。"
            ],
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 14%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 (10 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q3-fy25",
    "company": "NetEase",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q3-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 4,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.3,
          "notes": [
            "+12% Y/Y",
            "70% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(2%) Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+4% Y/Y",
            "43% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.2,
          "notes": [
            "(19%) Y/Y",
            "42% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "16% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
        "value": 2.6,
        "notes": [
          "64% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "28% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "31% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +12%",
                "毛利率 70%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (2%)",
                "毛利率 36%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +4%",
                "毛利率 43%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (19%)",
                "毛利率 42%"
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
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 16%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +1 个百分点"
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
              "利润率 31%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q1-fy26",
    "company": "NetEase",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q1-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 4.4,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.7,
          "notes": [
            "+7% Y/Y",
            "75% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+7% Y/Y",
            "37% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+4% Y/Y",
            "45% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.2,
          "notes": [
            "(5%) Y/Y",
            "42% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.2,
        "notes": [
          "R&D, S&M, and G&A line items sum to $1.3B because the source chart rounds to one decimal place."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.7,
            "notes": [
              "15% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "11% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1,
            "notes": [
              "2% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 3.1,
        "notes": [
          "69% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "41% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "35% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +7%",
                "毛利率 75%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 +7%",
                "毛利率 37%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +4%",
                "毛利率 45%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (5%)",
                "毛利率 42%"
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
              "研发、销售与营销、管理费用明细合计为 13 亿美元，因为源图按一位小数四舍五入。"
            ],
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 11%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 2%",
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 41%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 35%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q2-fy26",
    "company": "NetEase",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.4,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.7,
          "notes": [
            "+10% Y/Y",
            "76% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "Flat Y/Y",
            "37% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+4% Y/Y",
            "49% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.2,
          "notes": [
            "(4%) Y/Y",
            "43% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.3
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.7,
            "notes": [
              "15% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.1,
        "notes": [
          "70% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "40% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "24% margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +10%",
                "毛利率 76%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比持平",
                "毛利率 37%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +4%",
                "毛利率 49%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (4%)",
                "毛利率 43%"
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
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
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
              "利润率 70%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 40%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 (9 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "netease-q1-fy24",
    "company": "NetEase",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q1-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 3.7,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "notes": [
          "Source amounts are rounded to one decimal place; operating expense items sum to $1.4B."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
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
          "id": "other",
          "label": "Other",
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
        "value": 2.4,
        "notes": [
          "63% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "28% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "29% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 +1%"
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
              "原图金额保留一位小数；运营费用明细合计为 14 亿美元。"
            ],
            "items": [
              {
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q4-fy23",
    "company": "NetEase",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 2.9,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.2,
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.3,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.4,
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
        "value": 1.5
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.6
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 2.4,
        "notes": [
          "62% margin",
          "+10pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "25% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "25% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (16%)"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "创新业务及其他",
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
                "label": "销售与营销"
              },
              {
                "label": "研发"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 62%",
              "同比 +10 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +10 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q2-fy25",
    "company": "NetEase",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.9,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.2,
          "notes": [
            "+14% Y/Y",
            "70% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(4%) Y/Y",
            "36% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+7% Y/Y",
            "43% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.2,
          "notes": [
            "(18%) Y/Y",
            "42% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
          "id": "other",
          "label": "Other",
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
        "value": 2.5,
        "notes": [
          "65% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "32% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "33% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +14%",
                "毛利率 70%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (4%)",
                "毛利率 36%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +7%",
                "毛利率 43%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (18%)",
                "毛利率 42%"
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
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 33%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q1-fy25",
    "company": "NetEase",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3.3,
          "notes": [
            "+12% Y/Y",
            "69% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(8%) Y/Y",
            "37% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "(7%) Y/Y",
            "47% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.2,
          "notes": [
            "(18%) Y/Y",
            "39% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": [
              "15% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y"
            ]
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
        "value": 2.5,
        "notes": [
          "64% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "36% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "37% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +12%",
                "毛利率 69%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (8%)",
                "毛利率 37%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 (7%)",
                "毛利率 47%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (18%)",
                "毛利率 39%"
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
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 9%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 36%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 37%",
              "同比 +8 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q3-fy22",
    "company": "NetEase",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.4,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games",
          "value": 2.6,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.5
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
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
      "total": 0.5,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.2
        },
        {
          "id": "fx_gains",
          "label": "Fx gains",
          "value": 0.2
        },
        {
          "id": "other",
          "label": "Other",
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
        "value": 1.9,
        "notes": [
          "56% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "19% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "27% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "label": "游戏",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 +14%"
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
                "label": "销售与营销"
              },
              {
                "label": "研发"
              },
              {
                "label": "管理费用"
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
              "label": "投资收益"
            },
            {
              "label": "汇兑收益"
            },
            {
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 56%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 +12 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q1-fy23",
    "company": "NetEase",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 2.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "(43%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.5
      },
      "operatingExpenses": {
        "total": 1.1,
        "notes": [
          "Source rounds each amount to one decimal; expense items sum to $1.0B while the displayed total is $1.1B."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.5
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1
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
          "id": "other",
          "label": "Other",
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
        "value": 2.2,
        "notes": [
          "59% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "29% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "27% margin",
          "+8pp Y/Y"
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
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (43%)"
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
              "源图金额均保留一位小数；费用明细合计 10 亿美元，显示的合计为 11 亿美元。"
            ],
            "items": [
              {
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 59%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 +8 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q3-fy23",
    "company": "NetEase",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "+12% Y/Y",
        "Source displays rounded segment revenue totaling $3.8B versus $3.7B revenue."
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
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
        "value": 1.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&B",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2,
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
        "value": 2.3,
        "notes": [
          "62% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "28% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "29% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (16%)"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "label": "创新业务及其他",
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
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 62%",
              "同比 +6 个百分点"
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
              "利润率 29%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q4-fy22",
    "company": "NetEase",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "NetEase Games",
          "value": 2.8,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.4,
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
        "value": 1.8
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
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 1.9,
        "notes": [
          "52% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "18% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "15% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "label": "网易游戏",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "创新业务及其他",
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
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q2-fy23",
    "company": "NetEase",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.3,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 2.6,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.3
      },
      "operatingExpenses": {
        "total": 1.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&B",
            "value": 0.5
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
          }
        ],
        "notes": [
          "Source rounds amounts to one decimal: operating expense items sum to $1.2B."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
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
        "value": 2,
        "notes": [
          "60% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "24% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "34% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 +10%"
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
              "源图金额保留一位小数：运营费用明细合计为 12 亿美元。"
            ],
            "items": [
              {
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 60%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +12 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q2-fy24",
    "company": "NetEase",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.5,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 2.8,
          "notes": [
            "+7% Y/Y",
            "70% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+5% Y/Y",
            "32% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+10% Y/Y",
            "48% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "+1% Y/Y",
            "34% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.3
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.2
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
          "id": "other",
          "label": "Other",
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
        "value": 2.2,
        "notes": [
          "63% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "27% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "27% margin",
          "(7pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "games",
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 +7%",
                "毛利率 70%"
              ]
            },
            {
              "id": "cloud_music",
              "label": "云音乐",
              "notes": [
                "同比 +5%",
                "毛利率 32%"
              ]
            },
            {
              "id": "youdao",
              "label": "有道",
              "notes": [
                "同比 +10%",
                "毛利率 48%"
              ]
            },
            {
              "id": "innovative_businesses",
              "label": "创新业务及其他",
              "notes": [
                "同比 +1%",
                "毛利率 34%"
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
                "label": "管理费用"
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
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 (7 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netease-q3-fy24",
    "company": "NetEase",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netease-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "games",
          "label": "Games and related value-added services",
          "value": 3,
          "notes": [
            "(4%) Y/Y",
            "69% gross margin"
          ]
        },
        {
          "id": "cloud_music",
          "label": "Cloud Music",
          "value": 0.3,
          "notes": [
            "+1% Y/Y",
            "33% gross margin"
          ]
        },
        {
          "id": "youdao",
          "label": "Youdao",
          "value": 0.2,
          "notes": [
            "+2% Y/Y",
            "50% gross margin"
          ]
        },
        {
          "id": "innovative_businesses",
          "label": "Innovative Businesses & Others",
          "value": 0.3,
          "notes": [
            "(10%) Y/Y",
            "38% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 2.3,
        "notes": [
          "63% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "27% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "26% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "label": "游戏及相关增值服务",
              "notes": [
                "同比 (4%)",
                "毛利率 69%"
              ]
            },
            {
              "label": "云音乐",
              "notes": [
                "同比 +1%",
                "毛利率 33%"
              ]
            },
            {
              "label": "有道",
              "notes": [
                "同比 +2%",
                "毛利率 50%"
              ]
            },
            {
              "label": "创新业务及其他",
              "notes": [
                "同比 (10%)",
                "毛利率 38%"
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
                "label": "研发"
              },
              {
                "label": "销售与营销"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
