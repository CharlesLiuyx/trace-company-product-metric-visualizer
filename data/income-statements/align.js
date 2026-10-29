/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "align-q3-fy22",
    "company": "Align Technology",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q3-fy22.png",
    "roundingTolerance": 1.1,
    "notes": [
      "Source rounds independent amounts to integer $M; revenue segments and operating-expense components differ from printed totals by $1M. Operating profit $475M and net profit $113M corrected under operator authorization to $144M and $73M; Align Q3 2022 earnings release reports $143.7M and $72.7M."
    ],
    "revenue": {
      "total": 890,
      "notes": [
        "(12%) Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 733,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 158,
          "notes": [
            "(12%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 271,
        "notes": []
      },
      "operatingExpenses": {
        "total": 475,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 399,
            "notes": [
              "45% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 77,
            "notes": [
              "9% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 50,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 21,
      "items": [
        {
          "id": "other_expense",
          "label": "Other expenses",
          "value": 21,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 619,
        "notes": [
          "70% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 144,
        "notes": [
          "16% margin",
          "(10pp) Y/Y"
        ],
        "authoritativeCorrection": {
          "literal": "$144M",
          "approval": "user-directed-source-correction",
          "reason": "Operator authorized arithmetic typo correction 2026-10-29. Original $475M is impossible in the Source bridge. Align Q3 2022 earnings release (2022-10-26), https://investor.aligntech.com/news-releases/news-release-details/align-technology-announces-third-quarter-2022-financial-results/, reports $143.7M; corrected to $144M at Source integer-M precision."
        },
        "sourceLiteral": "$475M"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 73,
        "notes": [
          "8% margin",
          "(9pp) Y/Y"
        ],
        "authoritativeCorrection": {
          "literal": "$73M",
          "approval": "user-directed-source-correction",
          "reason": "Operator authorized arithmetic typo correction 2026-10-29. Original $113M is impossible in the Source bridge. Align Q3 2022 earnings release (2022-10-26), https://investor.aligntech.com/news-releases/news-release-details/align-technology-announces-third-quarter-2022-financial-results/, reports $72.7M; corrected to $73M at Source integer-M precision."
        },
        "sourceLiteral": "$113M"
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 (12%)"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (12%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 45%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +3 个百分点"
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
              "label": "其他费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (10 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (9 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q2-fy26",
    "company": "Align Technology",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1056,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 871,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 185,
          "notes": [
            "(11%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 299
      },
      "operatingExpenses": {
        "total": 603,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 463,
            "notes": [
              "44% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 102,
            "notes": [
              "10% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 39,
            "notes": [
              "4% of revenue",
              "+4pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 40
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 5,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 757,
        "notes": [
          "72% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 154,
        "notes": [
          "15% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 108,
        "notes": [
          "10% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (11%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 44%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 10%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 4%",
                  "同比 +4 个百分点"
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
              "利润率 72%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q1-fy26",
    "company": "Align Technology",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1040,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 856,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 184,
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
        "value": 304
      },
      "operatingExpenses": {
        "total": 595,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 465,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 99,
            "notes": [
              "9% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 31,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 36
      }
    },
    "otherIncome": {
      "total": 7,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 7
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
        "value": 737,
        "notes": [
          "71% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 142,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 113,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
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
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
            "items": [
              {
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q4-fy25",
    "company": "Align Technology",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q4-fy25.png",
    "roundingTolerance": 0.6,
    "revenue": {
      "total": 1047.561,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 838.145,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 209.416,
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
        "value": 363.974
      },
      "operatingExpenses": {
        "total": 528.263,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 441.676,
            "notes": [
              "42% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 83.036,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 3.551,
            "notes": [
              "0% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 40.835
      }
    },
    "otherIncome": {
      "total": 21.271,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 21.271
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
        "value": 683.587,
        "notes": [
          "65% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 155.324,
        "notes": [
          "15% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 135.76,
        "notes": [
          "13% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 42%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%",
                  "同比 (3 个百分点)"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q1-fy23",
    "company": "Align Technology",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 943,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 790,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 153,
          "notes": [
            "(6%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 283
      },
      "operatingExpenses": {
        "total": 527,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 440,
            "notes": [
              "47% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 87,
            "notes": [
              "9% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 47
      }
    },
    "otherIncome": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
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
        "value": 661,
        "notes": [
          "70% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 134,
        "notes": [
          "14% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 88,
        "notes": [
          "9% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (6%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 47%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +2 个百分点"
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
              "利润率 70%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q2-fy23",
    "company": "Align Technology",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q2-fy23.png",
    "roundingTolerance": 0.6,
    "revenue": {
      "total": 1003,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 833,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 170,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 289
      },
      "operatingExpenses": {
        "total": 542,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 453,
            "notes": [
              "45% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 89,
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
        "value": 60
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
        "value": 714,
        "notes": [
          "71% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 172,
        "notes": [
          "17% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 112,
        "notes": [
          "11% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (1%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 45%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q4-fy22",
    "company": "Align Technology",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 902,
      "notes": [
        "(12%) Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 732,
          "notes": [
            "(10%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 170,
          "notes": [
            "(21%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 284
      },
      "operatingExpenses": {
        "total": 505,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 410,
            "notes": [
              "45% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 84,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 11
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 74
      }
    },
    "otherIncome": {
      "total": 3,
      "items": [
        {
          "id": "other_income",
          "label": "Interest",
          "value": 3
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
        "value": 618,
        "notes": [
          "69% margin",
          "(15pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 113,
        "notes": [
          "13% margin",
          "(12pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 42,
        "notes": [
          "8% margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 (12%)"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (21%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 45%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
                ]
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 (15 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (12 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (9 个百分点)"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "利息收入"
            }
          ]
        }
      }
    }
  },
  {
    "key": "align-q3-fy23",
    "company": "Align Technology",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q3-fy23.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 960,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 795,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 165,
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
        "value": 297
      },
      "operatingExpenses": {
        "total": 497,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 408,
            "notes": [
              "42% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 89,
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
        "value": 41
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 4,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 663,
        "notes": [
          "69% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 166,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 121,
        "notes": [
          "13% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 42%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
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
              "利润率 69%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q4-fy23",
    "company": "Align Technology",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q4-fy23.png",
    "roundingTolerance": 0.6,
    "revenue": {
      "total": 957,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 782,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 175,
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
        "value": 287
      },
      "operatingExpenses": {
        "total": 498,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 403,
            "notes": [
              "42% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 82,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 13
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 49
      }
    },
    "otherIncome": {
      "total": 1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 1
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
        "value": 670,
        "notes": [
          "70% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 172,
        "notes": [
          "18% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 124,
        "notes": [
          "13% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 42%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q1-fy25",
    "company": "Align Technology",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q1-fy25.png",
    "roundingTolerance": 0.6,
    "revenue": {
      "total": 979,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 797,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 182,
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
        "value": 299
      },
      "operatingExpenses": {
        "total": 549,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 448,
            "notes": [
              "46% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 97,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "legal_settlement_loss",
            "label": "Legal settlement loss",
            "value": 4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 47
      }
    },
    "otherIncome": {
      "total": 9,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 9
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
        "value": 680,
        "notes": [
          "69% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 131,
        "notes": [
          "13% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 93,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
            "items": [
              {
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 46%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "legal_settlement_loss",
                "label": "法律和解损失"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q2-fy24",
    "company": "Align Technology",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1029,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 832,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 197,
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
        "value": 306
      },
      "operatingExpenses": {
        "total": 576,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 452,
            "notes": [
              "44% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 92,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 31,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 47
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 3,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 723,
        "notes": [
          "70% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 147,
        "notes": [
          "14% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 97,
        "notes": [
          "9% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 44%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "litigation",
                "label": "诉讼",
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
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
              "利润率 70%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    },
    "notes": [
      "Source rounds each amount to whole $M; operating expense components sum to $575M against the printed $576M total, a $1M rounding difference."
    ]
  },
  {
    "key": "align-q3-fy24",
    "company": "Align Technology",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 978,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 787,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 191,
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
        "value": 296
      },
      "operatingExpenses": {
        "total": 519,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 434,
            "notes": [
              "44% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 85,
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
        "value": 50
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 4
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
        "value": 682,
        "notes": [
          "70% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 162,
        "notes": [
          "17% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 116,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 44%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    },
    "notes": [
      "Source integer-million amounts: gross profit $682M less operating expenses $519M versus operating profit $162M leaves a $1M rounding difference; preserved with record-level roundingTolerance 1.1M."
    ]
  },
  {
    "key": "align-q1-fy24",
    "company": "Align Technology",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 997,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 817,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 180,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 300
      },
      "operatingExpenses": {
        "total": 544,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 452,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 92,
            "notes": [
              "9% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 53
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 4
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
        "value": 698,
        "notes": [
          "70% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 154,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 105,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 +18%"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q3-fy25",
    "company": "Align Technology",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q3-fy25.png",
    "roundingTolerance": 1.1,
    "notes": [
      "Source amounts are rounded to integer $M; revenue minus cost differs from gross profit by $1M, and operating profit minus tax and Other differs from net profit by $1M."
    ],
    "revenue": {
      "total": 996,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 806,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 190,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 356
      },
      "operatingExpenses": {
        "total": 543,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 418,
            "notes": [
              "42% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 93,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 32,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 2,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 639,
        "notes": [
          "64% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 96,
        "notes": [
          "10% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 57,
        "notes": [
          "6% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 (1%)"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 42%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
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
              "利润率 64%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (6 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "align-q2-fy25",
    "company": "Align Technology",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1012,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 805,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 208,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 304
      },
      "operatingExpenses": {
        "total": 545,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 449,
            "notes": [
              "44% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 96,
            "notes": [
              "10% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 49
      }
    },
    "otherIncome": {
      "total": 11,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
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
        "value": 708,
        "notes": [
          "70% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 163,
        "notes": [
          "16% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 125,
        "notes": [
          "12% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 +6%"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 44%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 10%",
                  "同比 +2 个百分点"
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
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +3 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        }
      }
    },
    "notes": [
      "Revenue segments sum to $1,013M versus displayed total $1,012M; the $1M difference is consistent with independent rounding to whole millions."
    ]
  },
  {
    "key": "align-q4-fy24",
    "company": "Align Technology",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/align-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 995,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "clear_aligners",
          "label": "Clear Aligners",
          "value": 794,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "systems_services",
          "label": "Systems & Services",
          "value": 201,
          "notes": [
            "+15% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 298
      },
      "operatingExpenses": {
        "total": 553,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 425,
            "notes": [
              "43% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 95,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 33,
            "notes": [
              "3% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 37
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 3,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 697,
        "notes": [
          "70% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 144,
        "notes": [
          "14% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 104,
        "notes": [
          "10% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "clear_aligners",
              "label": "透明矫治器",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "systems_services",
              "label": "系统与服务",
              "notes": [
                "同比 +15%"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 43%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
                  "同比 +2 个百分点"
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
              "利润率 70%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    },
    "roundingNote": "Source integer $M rounding: all printed amounts reconcile exactly; fixed measured link geometry is independent of rounding."
  }
]);
})(window);
