/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "pinterest-q1-fy23",
    "company": "Pinterest",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q1-fy23.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 603,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 486,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 93,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 24,
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
        "value": 171
      },
      "operatingExpenses": {
        "total": 675,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 266,
            "notes": [
              "44% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 201,
            "notes": [
              "33% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 208,
            "notes": [
              "34% of revenue",
              "+24pp Y/Y"
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
        "value": 432,
        "notes": [
          "72% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -243,
        "notes": [
          "(38%) margin",
          "(40pp) Y/Y"
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
        "id": "mau",
        "label": "MAU",
        "value": "463000000",
        "unit": "count",
        "currency": null,
        "literal": "463M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "MAU\n463M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "95000000",
        "unit": "count",
        "currency": null,
        "literal": "95M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "US & Canada MAU\n95M\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            560,
            112,
            96
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "128000000",
        "unit": "count",
        "currency": null,
        "literal": "128M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Europe MAU\n128M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            846,
            112,
            91
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "240000000",
        "unit": "count",
        "currency": null,
        "literal": "240M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Rest of the world MAU\n240M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1042,
            112,
            78
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00132",
        "unit": "K",
        "currency": "USD",
        "literal": "$1.32",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "ARPU\n$1.32\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            443,
            1171,
            210,
            150
          ]
        }
      },
      {
        "id": "restructuring_card",
        "label": "Restructuring",
        "value": "121",
        "unit": "M",
        "currency": "USD",
        "literal": "$121M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Restructuring\n$121M",
        "anchor": {
          "type": "image-box",
          "box": [
            660,
            1171,
            275,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "us_canada",
              "label": "美国和加拿大",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 44%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 33%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 34%",
                  "同比 +24 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (38%)",
              "同比 (40 个百分点)"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "restructuring_card",
            "label": "重组费用",
            "notes": []
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q3-fy25",
    "company": "Pinterest",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1049,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 786,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 193,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 70,
          "notes": [
            "+67% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 212
      },
      "operatingExpenses": {
        "total": 778,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 371,
            "notes": [
              "35% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 297,
            "notes": [
              "28% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 110,
            "notes": [
              "11% of revenue",
              "(5pp) Y/Y"
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
      "total": 34,
      "items": [
        {
          "id": "other_29",
          "label": "Other",
          "value": 29
        },
        {
          "id": "other_5",
          "label": "Other",
          "value": 5
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
        "value": 837,
        "notes": [
          "80% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 58,
        "notes": [
          "6% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 92,
        "notes": [
          "9% margin",
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
            "同比 +17%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +67%"
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
                  "占收入 35%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (5 个百分点)"
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
              "利润率 80%",
              "同比 +1 个百分点"
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
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pinterest-q1-fy26",
    "company": "Pinterest",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1008,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 750,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 186,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 72,
          "notes": [
            "+59% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 239
      },
      "operatingExpenses": {
        "total": 849,
        "notes": [
          "R&D, S&M, G&A, and restructuring line items sum to $850M because the source chart rounds to whole millions."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 381,
            "notes": [
              "38% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 318,
            "notes": [
              "32% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 104,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 47,
            "notes": [
              "5% of revenue",
              "+5pp Y/Y"
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
        "value": 769,
        "notes": [
          "76% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -80,
        "notes": [
          "(8%) margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -80,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +59%"
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
              "研发、销售与营销、管理费用和重组费用明细合计为 8.50 亿美元，因为源图采用取整值。"
            ],
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 32%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "重组",
                "notes": [
                  "占收入 5%",
                  "同比 +5 个百分点"
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
              "利润率 76%",
              "同比 0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "源图未显示单独的净利润/净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pinterest-q4-fy25",
    "company": "Pinterest",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1319,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 979,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 245,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 96,
          "notes": [
            "+65% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 227
      },
      "operatingExpenses": {
        "total": 791,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 365,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 303,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 123,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 51
      }
    },
    "otherIncome": {
      "total": 27,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 27
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
        "value": 1093,
        "notes": [
          "83% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 301,
        "notes": [
          "23% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 277,
        "notes": [
          "21% margin"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +65%"
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
                  "占收入 28%",
                  "同比 0 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 0 个百分点"
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
              "利润率 83%",
              "同比 0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pinterest-q2-fy26",
    "company": "Pinterest",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1180,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 880,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 213,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 87,
          "notes": [
            "+38% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 257
      },
      "operatingExpenses": {
        "total": 978,
        "notes": [
          "Source-rounded expense items total $977M versus the reported $978M total."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 451,
            "notes": [
              "38% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 374,
            "notes": [
              "32% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 138,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 14,
            "notes": [
              "1% of revenue"
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
        "value": 923,
        "notes": [
          "78% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -55,
        "notes": [
          "(5%) of revenue",
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
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +38%"
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
              "原图费用明细取整后合计 $977M，总额为 $978M。"
            ],
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 32%",
                  "同比 0 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "重组",
                "notes": [
                  "占收入 1%"
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
              "利润率 78%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "占收入 (5%)",
              "同比 (4 个百分点)"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "640000000",
        "unit": "count",
        "currency": null,
        "literal": "640M",
        "notes": [
          "+11% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "MAU\n640M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            226,
            187,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "106000000",
        "unit": "count",
        "currency": null,
        "literal": "106M",
        "notes": [
          "+11% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "US & Canada MAU\n106M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            530,
            133,
            94
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "157000000",
        "unit": "count",
        "currency": null,
        "literal": "157M",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Europe MAU\n157M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            818,
            133,
            94
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "377000000",
        "unit": "count",
        "currency": null,
        "literal": "377M",
        "notes": [
          "+15% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Rest of the world MAU\n377M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            990,
            133,
            94
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00186",
        "unit": "K",
        "currency": "USD",
        "literal": "$1.86",
        "notes": [
          "+7% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$1.86\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            321,
            1128,
            209,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "pinterest-q1-fy24",
    "company": "Pinterest",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 740,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 592,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 118,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 30,
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
        "value": 181
      },
      "operatingExpenses": {
        "total": 613,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 280,
            "notes": [
              "38% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 226,
            "notes": [
              "31% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 107,
            "notes": [
              "14% of revenue",
              "(20pp) Y/Y"
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
        "value": 559,
        "notes": [
          "76% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -54,
        "notes": [
          "(7%) margin",
          "+33pp Y/Y"
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
        "id": "mau",
        "label": "MAU",
        "literal": "518M",
        "value": "518000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "MAU\n518M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "literal": "98M",
        "value": "98000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "US & Canada MAU\n98M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            460,
            134,
            234
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "literal": "140M",
        "value": "140000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Europe MAU\n140M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            833,
            134,
            156
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "literal": "279M",
        "value": "279000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Rest of the world MAU\n279M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            1016,
            134,
            155
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "literal": "$1.46",
        "value": "0.00146",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "ARPU\n$1.46\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            322,
            1167,
            208,
            151
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
              "id": "us_canada",
              "label": "美国和加拿大",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
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
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 38%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 31%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (20 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +33 个百分点"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q1-fy25",
    "company": "Pinterest",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 855,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 663,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 147,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 45,
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
        "value": 199
      },
      "operatingExpenses": {
        "total": 691,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 332,
            "notes": [
              "39% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 254,
            "notes": [
              "30% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 656,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(4%) margin",
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
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "570000000",
        "literal": "570M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "MAU\n570M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            189,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "102000000",
        "literal": "102M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "US & Canada MAU\n102M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            461,
            135,
            208
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "148000000",
        "literal": "148M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Europe MAU\n148M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            807,
            135,
            143
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "320000000",
        "literal": "320M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Rest of the world MAU\n320M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            986,
            135,
            143
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00152",
        "literal": "$1.52",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "ARPU\n$1.52\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            322,
            1126,
            210,
            152
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
              "label": "美国和加拿大",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 39%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 30%",
                  "同比 (1 个百分点)"
                ]
              },
              {
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
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "label": "月活跃用户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "label": "每用户平均收入",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q2-fy23",
    "company": "Pinterest",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 708,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 565,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 114,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 29,
          "notes": [
            "+32% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 169
      },
      "operatingExpenses": {
        "total": 613,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 269,
            "notes": [
              "38% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 243,
            "notes": [
              "34% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 100,
            "notes": [
              "14% of revenue",
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
        "value": 539,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -73,
        "notes": [
          "(10%) margin",
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
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "465000000",
        "literal": "465M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "MAU\n465M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "95000000",
        "literal": "95M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "US & Canada MAU\n95M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            566,
            112,
            85
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "124000000",
        "literal": "124M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Europe MAU\n124M\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            846,
            112,
            85
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "246000000",
        "literal": "246M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Rest of the world MAU\n246M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1038,
            112,
            85
          ]
        }
      },
      {
        "id": "mau_summary",
        "label": "MAU",
        "value": "465000000",
        "literal": "465M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "MAU\n465M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            227,
            1171,
            208,
            150
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00153",
        "literal": "$1.53",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "ARPU\n$1.53\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            444,
            1171,
            208,
            150
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
            "同比 +6%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +32%"
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
                  "占收入 38%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 34%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
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
              "利润率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 (5 个百分点)"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "mau_summary",
            "label": "月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q2-fy24",
    "company": "Pinterest",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q2-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 854,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 673,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 143,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 38,
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
        "value": 185,
        "notes": []
      },
      "operatingExpenses": {
        "total": 690,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 313,
            "notes": [
              "37% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 265,
            "notes": [
              "31% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 112,
            "notes": [
              "13% of revenue",
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
        "value": 669,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -21,
        "notes": [
          "(2%) margin",
          "+8pp Y/Y"
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
        "id": "mau",
        "label": "MAU",
        "value": "522000000",
        "unit": "count",
        "currency": null,
        "literal": "522M",
        "comparison": "eq",
        "notes": [
          "+12% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "MAU\n522M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            226,
            188,
            169
          ]
        }
      },
      {
        "id": "us_mau",
        "label": "US & Canada MAU",
        "value": "98000000",
        "unit": "count",
        "currency": null,
        "literal": "98M",
        "comparison": "eq",
        "notes": [
          "+3% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "US & Canada MAU\n98M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            550,
            135,
            90
          ]
        }
      },
      {
        "id": "eu_mau",
        "label": "Europe MAU",
        "value": "136000000",
        "unit": "count",
        "currency": null,
        "literal": "136M",
        "comparison": "eq",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Europe MAU\n136M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            850,
            135,
            90
          ]
        }
      },
      {
        "id": "row_mau",
        "label": "Rest of the world MAU",
        "value": "288000000",
        "unit": "count",
        "currency": null,
        "literal": "288M",
        "comparison": "eq",
        "notes": [
          "+17% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Rest of the world MAU\n288M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            1020,
            135,
            90
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00164",
        "unit": "K",
        "currency": "USD",
        "literal": "$1.64",
        "comparison": "eq",
        "notes": [
          "+8% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARPU\n$1.64\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            321,
            1166,
            210,
            151
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
            "同比 +21%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +25%"
              ]
            },
            {
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
                "label": "研发",
                "notes": [
                  "占收入 37%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 31%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "未报告净损益",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "us_mau",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "eu_mau",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "row_mau",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q2-fy25",
    "company": "Pinterest",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 998,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 745,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 191,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 63,
          "notes": [
            "+66% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 203
      },
      "operatingExpenses": {
        "total": 800,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 360,
            "notes": [
              "36% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 313,
            "notes": [
              "31% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 127,
            "notes": [
              "13% of revenue",
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
        "value": 795,
        "notes": [
          "80% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -4,
        "notes": [
          "(0%) margin",
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
        "id": "mau",
        "label": "MAU",
        "value": "578000000",
        "literal": "578M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "MAU\n578M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            169
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "102000000",
        "literal": "102M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "US & Canada MAU\n102M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            460,
            134,
            208
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "146000000",
        "literal": "146M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Europe MAU\n146M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            781,
            134,
            182
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "329000000",
        "literal": "329M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Rest of the world MAU\n329M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            990,
            134,
            181
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00174",
        "literal": "$1.74",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "ARPU\n$1.74\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1128,
            210,
            151
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
            "同比 +17%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +66%"
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
                  "占收入 36%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 31%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "毛利率 80%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +2 个百分点"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q3-fy22",
    "company": "Pinterest",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 685,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 575,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 86,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 24,
          "notes": [
            "+36% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 571,
        "notes": [
          "Source-rounded expense items sum to $572M versus the reported $571M total."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 255,
            "notes": [
              "37% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 230,
            "notes": [
              "34% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 87,
            "notes": [
              "13% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 183,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 502,
        "notes": [
          "73% margin",
          "(7pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -69,
        "notes": [
          "(10%) margin",
          "(26pp) Y/Y"
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
        "id": "mau_top",
        "label": "MAU",
        "literal": "445M",
        "value": "445000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "MAU\n445M",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            268,
            188,
            126
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "literal": "230M",
        "value": "230000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "US & Canada MAU\n230M",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            460,
            113,
            273
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "literal": "120M",
        "value": "120000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Europe MAU\n120M",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            733,
            113,
            242
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "literal": "95M",
        "value": "95000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Rest of the world MAU\n95M",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            975,
            113,
            154
          ]
        }
      },
      {
        "id": "mau",
        "label": "MAU",
        "literal": "445M",
        "value": "445000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+0% Y/Y"
        ],
        "quote": "MAU\n445M\n+0% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            227,
            1171,
            210,
            148
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "literal": "$1.56",
        "value": "0.00156",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "ARPU\n$1.56\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            443,
            1171,
            210,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +36%"
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
                  "占收入 37%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 34%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 (7 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 (26 个百分点)"
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
            "id": "mau_top",
            "label": "月活跃用户",
            "notes": []
          },
          {
            "id": "mau_us_canada",
            "label": "月活跃用户",
            "notes": []
          },
          {
            "id": "mau_europe",
            "label": "月活跃用户",
            "notes": []
          },
          {
            "id": "mau_rest_of_world",
            "label": "月活跃用户",
            "notes": []
          },
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +0%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +11%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q3-fy23",
    "company": "Pinterest",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 763,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 618,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 114,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 31,
          "notes": [
            "+29% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 171
      },
      "operatingExpenses": {
        "total": 597,
        "notes": [
          "Source-rounded expense items total $598M versus the reported $597M total."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 265,
            "notes": [
              "35% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 226,
            "notes": [
              "30% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 107,
            "notes": [
              "14% of revenue",
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
        "value": 592,
        "notes": [
          "78% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -5,
        "notes": [
          "(1%) margin",
          "+9pp Y/Y"
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
        "id": "mau",
        "label": "MAU",
        "value": "482000000",
        "literal": "482M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "MAU\n482M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            169
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "96000000",
        "literal": "96M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "US & Canada MAU\n96M\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            547,
            134,
            98
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "128000000",
        "literal": "128M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Europe MAU\n128M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            859,
            134,
            98
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "258000000",
        "literal": "258M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Rest of the world MAU\n258M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            1035,
            134,
            98
          ]
        }
      },
      {
        "id": "mau_summary",
        "label": "MAU",
        "value": "482000000",
        "literal": "482M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "MAU\n482M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            227,
            1171,
            208,
            148
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00161",
        "literal": "$1.61",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "ARPU\n$1.61\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            443,
            1171,
            208,
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
            "同比 +11%"
          ],
          "items": [
            {
              "id": "us_canada",
              "label": "美国和加拿大",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +29%"
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
              "原图费用明细取整后合计 $598M，总额为 $597M。"
            ],
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 35%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 30%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
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
              "利润率 78%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +9 个百分点"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "mau_summary",
            "label": "月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q3-fy24",
    "company": "Pinterest",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q3-fy24.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 898,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 719,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 137,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 42,
          "notes": [
            "+35% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 187
      },
      "operatingExpenses": {
        "total": 717,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 327,
            "notes": [
              "36% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 249,
            "notes": [
              "28% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 141,
            "notes": [
              "16% of revenue",
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
        "value": 711,
        "notes": [
          "79% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -6,
        "notes": [
          "(1%) margin",
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
        "id": "mau",
        "label": "MAU",
        "value": "537000000",
        "unit": "count",
        "currency": null,
        "literal": "537M",
        "notes": [
          "+11% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "MAU\n537M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "99000000",
        "unit": "count",
        "currency": null,
        "literal": "99M",
        "notes": [
          "+3% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "US & Canada MAU\n99M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            534,
            133,
            98
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "139000000",
        "unit": "count",
        "currency": null,
        "literal": "139M",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Europe MAU\n139M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            846,
            133,
            91
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "300000000",
        "unit": "count",
        "currency": null,
        "literal": "300M",
        "notes": [
          "+16% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Rest of the world MAU\n300M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1016,
            133,
            85
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00170",
        "unit": "K",
        "currency": "USD",
        "literal": "$1.70",
        "notes": [
          "+5% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$1.70\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1128,
            211,
            151
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
            "同比 +18%"
          ],
          "items": [
            {
              "id": "us_canada",
              "label": "美国和加拿大",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +35%"
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
                  "占收入 36%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          }
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
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +0 个百分点"
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
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q4-fy22",
    "company": "Pinterest",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 877,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 722,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 123,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 32,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 185,
        "notes": []
      },
      "operatingExpenses": {
        "total": 686,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 265,
            "notes": [
              "30% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 317,
            "notes": [
              "36% of revenue",
              "+14pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 104,
            "notes": [
              "11% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 11,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 23,
      "items": [
        {
          "id": "other",
          "label": "Interest / Other",
          "value": 23,
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
        "value": 692,
        "notes": [
          "79% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6,
        "notes": [
          "1% margin",
          "(21pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 17,
        "notes": [
          "2% margin",
          "(19pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau_top",
        "label": "MAU",
        "value": "450000000",
        "unit": "count",
        "currency": null,
        "literal": "450M",
        "notes": [],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "MAU\n450M",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            268,
            188,
            126
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "95000000",
        "unit": "count",
        "currency": null,
        "literal": "95M",
        "notes": [
          "Flat Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "US & Canada MAU\n95M\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            560,
            113,
            91
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "124000000",
        "unit": "count",
        "currency": null,
        "literal": "124M",
        "notes": [
          "+2% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Europe MAU\n124M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            849,
            113,
            91
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "231000000",
        "unit": "count",
        "currency": null,
        "literal": "231M",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Rest of the world MAU\n231M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1040,
            113,
            91
          ]
        }
      },
      {
        "id": "mau",
        "label": "MAU",
        "value": "450000000",
        "unit": "count",
        "currency": null,
        "literal": "450M",
        "notes": [
          "+4% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "MAU\n450M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            227,
            1171,
            208,
            148
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00196",
        "unit": "K",
        "currency": "USD",
        "literal": "$1.96",
        "notes": [
          "+1% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$1.96\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            443,
            1171,
            210,
            148
          ]
        }
      }
    ],
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
              "label": "美国和加拿大",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +28%"
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
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 36%",
                  "同比 +14 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息 / 其他",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (21 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (19 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau_top",
            "label": "月活跃用户",
            "notes": []
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q4-fy23",
    "company": "Pinterest",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 981,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 779,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 162,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 41,
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
        "value": 178
      },
      "operatingExpenses": {
        "total": 607,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 268,
            "notes": [
              "27% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 241,
            "notes": [
              "25% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
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
        "value": 30
      }
    },
    "otherIncome": {
      "total": 35,
      "items": [
        {
          "id": "other",
          "label": "Interest & Other",
          "value": 35
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
        "value": 803,
        "notes": [
          "82% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 196,
        "notes": [
          "20% margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 201,
        "notes": [
          "21% margin",
          "+19pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "498000000",
        "literal": "498M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "MAU\n498M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "97000000",
        "literal": "97M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "US & Canada MAU\n97M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            460,
            134,
            236
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "135000000",
        "literal": "135M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Europe MAU\n135M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            807,
            134,
            152
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "266000000",
        "literal": "266M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Rest of the world MAU\n266M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            996,
            134,
            173
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.002",
        "literal": "$2.00",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "ARPU\n$2.00\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1166,
            210,
            152
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
            "同比 +12%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 25%",
                  "同比 (12 个百分点)"
                ]
              },
              {
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
              "label": "利息及其他"
            }
          ]
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
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +19 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "mau_us_canada",
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "mau_europe",
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "mau_rest_of_world",
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "pinterest-q4-fy24",
    "company": "Pinterest",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/pinterest-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1154,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "us_canada",
          "label": "US & Canada",
          "value": 900,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 196,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of the world",
          "value": 58,
          "notes": [
            "+44% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 197
      },
      "operatingExpenses": {
        "total": 696,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 321,
            "notes": [
              "28% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 271,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 104,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax benefit",
        "value": -1571
      }
    },
    "otherIncome": {
      "total": 15,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 15
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
        "value": 957,
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 261,
        "notes": [
          "23% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1847
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "553000000",
        "literal": "553M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "MAU\n553M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            226,
            187,
            168
          ]
        }
      },
      {
        "id": "mau_us_canada",
        "label": "US & Canada MAU",
        "value": "101000000",
        "literal": "101M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "US & Canada MAU\n101M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            530,
            133,
            130
          ]
        }
      },
      {
        "id": "mau_europe",
        "label": "Europe MAU",
        "value": "145000000",
        "literal": "145M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Europe MAU\n145M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            810,
            133,
            100
          ]
        }
      },
      {
        "id": "mau_rest_of_world",
        "label": "Rest of the world MAU",
        "value": "307000000",
        "literal": "307M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Rest of the world MAU\n307M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            59,
            1000,
            133,
            100
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00212",
        "literal": "$2.12",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "ARPU\n$2.12\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            321,
            1127,
            209,
            150
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
            "同比 +18%"
          ],
          "items": [
            {
              "label": "美国和加拿大",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +44%"
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
                  "占收入 28%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税收收益"
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
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "label": "月活跃用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "label": "美国和加拿大月活跃用户",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "label": "欧洲月活跃用户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "label": "世界其他地区月活跃用户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "label": "每用户平均收入",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
