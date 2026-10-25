/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "uipath-q3-fy23",
    "company": "UiPath",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 263,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 118,
          "notes": [
            "+6% Y/Y",
            "97% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 130,
          "notes": [
            "+33% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 14,
          "notes": [
            "+28% Y/Y",
            "(31%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 43
      },
      "operatingExpenses": {
        "total": 287,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 156,
            "notes": [
              "60% of revenue",
              "(19pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 67,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 63,
            "notes": [
              "24% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source rounded expense items total $286M versus reported $287M."
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 220,
        "notes": [
          "84% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -67,
        "notes": [
          "(25%) margin",
          "+27pp Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.110",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.110B",
        "basis": "unspecified",
        "notes": [
          "+36% Y/Y"
        ],
        "quote": "ARR\n$1.110B\n+36% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            160
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "126",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "126%",
        "basis": "unspecified",
        "notes": [
          "-18pp Y/Y"
        ],
        "quote": "DBNR\n126%\n-18pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            240,
            1146,
            169,
            160
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "10650",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "10,650",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers\n10,650\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1146,
            508,
            56
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1711",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,711",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "Customers > $100K\n1,711\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1202,
            508,
            46
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "201",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "201",
        "basis": "unspecified",
        "notes": [
          "+49% Y/Y"
        ],
        "quote": "Customers > $1M\n201\n+49% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1248,
            508,
            57
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "items": [
            {
              "id": "licenses",
              "label": "许可证"
            },
            {
              "id": "subscription",
              "label": "订阅"
            },
            {
              "id": "professional_services",
              "label": "专业服务"
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
                "label": "销售与营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业亏损"
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
            "id": "arr",
            "label": "ARR"
          },
          {
            "id": "dbnr",
            "label": "DBNR"
          },
          {
            "id": "customers",
            "label": "客户"
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K"
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M"
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q1-fy27",
    "company": "UiPath",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 418,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 253,
          "notes": [
            "+16% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 149,
          "notes": [
            "+16% Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 16,
          "notes": [
            "+47% Y/Y",
            "(93%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 77
      },
      "operatingExpenses": {
        "total": 313,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 168,
            "notes": [
              "40% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 93,
            "notes": [
              "22% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 53,
            "notes": [
              "13% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "S&M, R&D, and G&A sum to $314M due to rounded source figures."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 18
      }
    },
    "otherIncome": {
      "total": 13,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 13
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
        "value": 341,
        "notes": [
          "82% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "7% margin",
          "+11pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 23,
        "notes": [
          "7% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%",
                "毛利率 83%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +16%",
                "毛利率 99%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +47%",
                "毛利率 (93%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 40%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 22%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 (3 个百分点)"
                ]
              }
            ],
            "notes": [
              "销售与营销、研发、一般及行政因源图四舍五入合计为 $314M。"
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
              "利润率 82%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +11 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "uipath-q4-fy26",
    "company": "UiPath",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 481,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 251,
          "notes": [
            "+17% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 216,
          "notes": [
            "+9% Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 14,
          "notes": [
            "+29% Y/Y",
            "(126%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 74
      },
      "operatingExpenses": {
        "total": 327,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 178,
            "notes": [
              "37% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 95,
            "notes": [
              "20% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 54,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source chart shows a $12M tax benefit instead of tax expense."
        ]
      }
    },
    "otherIncome": {
      "total": 24,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 12
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 12
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
        "value": 407,
        "notes": [
          "85% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 80,
        "notes": [
          "17% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 104,
        "notes": [
          "22% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +17%",
                "毛利率 84%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +9%",
                "毛利率 99%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +29%",
                "毛利率 (126%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 37%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图显示 $12M 税收收益，而不是税费。"
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
              "利润率 85%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +9 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "uipath-q2-fy27",
    "company": "UiPath",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q2-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 410,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 266,
          "notes": [
            "+12% Y/Y",
            "85% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 124,
          "notes": [
            "+10% Y/Y",
            "100% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 20,
          "notes": [
            "+82% Y/Y",
            "(94%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 81
      },
      "operatingExpenses": {
        "total": 298,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 165,
            "notes": [
              "40% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 83,
            "notes": [
              "20% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 50,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
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
      "total": 21,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 21
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
        "value": 330,
        "notes": [
          "80% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 32,
        "notes": [
          "8% margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 36,
        "notes": [
          "9% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "notes": [
          "源图收入 $410M 与毛利润 $330M 加收入成本 $81M 相差 $1M，为整数展示的舍入差异。"
        ],
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +12%",
                "毛利率 85%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +10%",
                "毛利率 100%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +82%",
                "毛利率 (94%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 40%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +8 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          }
        ]
      }
    },
    "notes": [
      "Revenue of $410M versus gross profit of $330M plus cost of revenue of $81M has a $1M rounding difference in the source."
    ],
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "1.94",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.94B",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "ARR\n$1.94B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            160,
            1123,
            146,
            159
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "109",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "109%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n109%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            314,
            1123,
            168,
            159
          ]
        }
      }
    ]
  },
  {
    "key": "uipath-q3-fy25",
    "company": "UiPath",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 355,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 207,
          "notes": [
            "79% gross margin",
            "+24% Y/Y"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 137,
          "notes": [
            "98% gross margin",
            "(7%) Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "(70%) gross margin",
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 64,
        "notes": []
      },
      "operatingExpenses": {
        "total": 334,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 187,
            "notes": [
              "53% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 97,
            "notes": [
              "27% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 50,
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
        "value": 290,
        "notes": [
          "82% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -43,
        "notes": [
          "(12%) margin",
          "+5pp Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.61",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.61B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "ARR\n$1.61B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1126,
            146,
            158
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "113",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "113%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Q/Q"
        ],
        "quote": "DBNR\n113%\n(2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1126,
            167,
            158
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "302",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "302",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $1M\n302\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1128,
            507,
            78
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2235",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,235",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $100K\n2,235\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1206,
            507,
            78
          ]
        }
      }
    ],
    "notes": [
      "Source rounded values: $290M gross profit plus $64M cost of revenue totals $354M versus $355M revenue; $290M less $334M equals ($44M) versus ($43M) operating loss."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "毛利率 79%",
                "同比 +24%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "毛利率 98%",
                "同比 (7%)"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "毛利率 (70%)",
                "同比 +2%"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 53%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 +1 个百分点"
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
              "利润率 82%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 +5 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (2 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +13%"
            ]
          }
        ],
        "notes": [
          "原图舍入金额：毛利润 $290M 加收入成本 $64M 合计 $354M，收入为 $355M；$290M 减 $334M 为 ($44M)，营业亏损为 ($43M)。"
        ]
      }
    }
  },
  {
    "key": "uipath-q2-fy26",
    "company": "UiPath",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 362,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 238,
          "notes": [
            "+22% Y/Y",
            "82% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 112,
          "notes": [
            "(0%) Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "+20% Y/Y",
            "(119%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 64
      },
      "operatingExpenses": {
        "total": 318,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 166,
            "notes": [
              "46% of revenue",
              "(15pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 98,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 53,
            "notes": [
              "15% of revenue",
              "(5pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 297,
        "notes": [
          "82% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -20,
        "notes": [
          "(6%) margin",
          "+27pp Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.72",
        "unit": "B",
        "currency": "USD",
        "literal": "$1.72B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "ARR\n$1.72B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1128,
            147,
            158
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "108",
        "unit": "%",
        "currency": null,
        "literal": "108%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n108%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1128,
            168,
            158
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "320",
        "unit": "count",
        "currency": null,
        "literal": "320",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers > $1M\n320\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1128,
            507,
            79
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2432",
        "unit": "count",
        "currency": null,
        "literal": "2,432",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers > $100K\n2,432\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1207,
            507,
            78
          ]
        }
      }
    ],
    "notes": [
      "Source integer rounding: revenue components sum to $361M versus $362M total; gross profit plus cost of revenue is $361M; operating expenses minus gross profit is $21M versus $20M operating loss; expense items sum to $317M versus $318M total."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%",
                "毛利率 82%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 (0%)",
                "毛利率 99%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +20%",
                "毛利率 (119%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 (15 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 15%",
                  "同比 (5 个百分点)"
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
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +27 个百分点"
            ]
          },
          "net": {
            "label": "来源未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q3-fy26",
    "company": "UiPath",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 411,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 248,
          "notes": [
            "+20% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 150,
          "notes": [
            "+9% Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 13,
          "notes": [
            "+28% Y/Y",
            "(103%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 69
      },
      "operatingExpenses": {
        "total": 329,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 179,
            "notes": [
              "44% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 97,
            "notes": [
              "24% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 53,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source presents a $174M tax benefit as an additive gain."
        ]
      }
    },
    "otherIncome": {
      "total": 186,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 12,
          "notes": []
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 174,
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
        "value": 342,
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 13,
        "notes": [
          "3% margin",
          "+15pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 199,
        "notes": [
          "48% margin",
          "+51pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "1.78",
        "unit": "B",
        "currency": "USD",
        "literal": "$1.78B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "ARR\n$1.78B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1128,
            146,
            156
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "107",
        "unit": "%",
        "currency": null,
        "literal": "107%",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNR\n107%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1128,
            167,
            156
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "333",
        "unit": "count",
        "currency": null,
        "literal": "333",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers > $1M\n333\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1128,
            507,
            79
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2506",
        "unit": "count",
        "currency": null,
        "literal": "2,506",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers > $100K\n2,506\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1207,
            507,
            77
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%",
                "毛利率 84%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +9%",
                "毛利率 99%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +28%",
                "毛利率 (103%)"
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
                  "占收入 44%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图将 174M 美元税收收益单独列为加项。"
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
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +15 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 48%",
              "同比 +51 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "年度经常性收入",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "dbnr",
            "label": "净收入留存率",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q2-fy25",
    "company": "UiPath",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 316,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 194,
          "notes": [
            "+22% Y/Y",
            "78% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 112,
          "notes": [
            "(6%) Y/Y",
            "98% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 9,
          "notes": [
            "+16% Y/Y",
            "(86%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 356,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 194,
            "notes": [
              "61% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 98,
            "notes": [
              "31% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 64,
            "notes": [
              "20% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 63,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 253,
        "notes": [
          "80% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -103,
        "notes": [
          "(33%) margin",
          "(6pp) Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.55",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.55B",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "ARR\n$1.55B\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            159
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "115",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "115%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNR\n115%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1146,
            167,
            159
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "293",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "293",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $1M 293 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1146,
            507,
            82
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2163",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,163",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers > $100K 2,163 +12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1227,
            507,
            78
          ]
        }
      }
    ],
    "notes": [
      "Source revenue items sum to $315M versus displayed total $316M; preserve source rounded values."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +10%"
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
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 (6%)",
                "毛利率 98%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +16%",
                "毛利率 (86%)"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (33%)",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 61%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 20%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "notes": [
          "原图收入分项合计 $315M，总收入显示为 $316M；保留原图舍入数字。"
        ],
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q4-fy25",
    "company": "UiPath",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 424,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 215,
          "notes": [
            "+22% Y/Y",
            "80% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 198,
          "notes": [
            "(10%) Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "+17% Y/Y",
            "(80%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 65,
        "notes": []
      },
      "operatingExpenses": {
        "total": 326,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 177,
            "notes": [
              "42% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 100,
            "notes": [
              "24% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 49,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 21,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 9,
          "notes": []
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 12,
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
        "value": 359,
        "notes": [
          "85% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 34,
        "notes": [
          "8% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 52,
        "notes": [
          "12% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +5%"
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
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 (10%)",
                "毛利率 99%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +17%",
                "毛利率 (80%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 42%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
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
              "id": "other",
              "label": "其他",
              "notes": []
            },
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 85%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR"
          },
          {
            "id": "dbnr",
            "label": "DBNR"
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M"
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "1.67",
        "unit": "B",
        "currency": "USD",
        "literal": "$1.67B",
        "notes": [
          "+14% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARR\n$1.67B\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1136,
            147,
            158
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "110",
        "unit": "%",
        "currency": null,
        "literal": "110%",
        "notes": [
          "(3pp) Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DBNR\n110%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            240,
            1136,
            169,
            158
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "317",
        "unit": "count",
        "currency": null,
        "literal": "317",
        "notes": [
          "+10% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Customers > $1M\n317\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1151,
            505,
            70
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2292",
        "unit": "count",
        "currency": null,
        "literal": "2,292",
        "notes": [
          "+12% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Customers > $100K\n2,292\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1222,
            505,
            70
          ]
        }
      }
    ]
  },
  {
    "key": "uipath-q4-fy23",
    "company": "UiPath",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q4-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 309,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 159,
          "notes": [
            "(9%) Y/Y",
            "98% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 139,
          "notes": [
            "+33% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "(5%) Y/Y",
            "(97%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 48
      },
      "operatingExpenses": {
        "total": 306,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 174,
            "notes": [
              "56% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 82,
            "notes": [
              "27% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 50,
            "notes": [
              "16% of revenue",
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
        "value": 261,
        "notes": [
          "85% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -45,
        "notes": [
          "(15%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "1.204",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.204B",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "ARR\n$1.204B\n+30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            159
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "123",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "123%",
        "basis": "unspecified",
        "notes": [
          "-22pp Y/Y"
        ],
        "quote": "DBNR\n123%\n-22pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1146,
            168,
            159
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "10800",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "10,800",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Customers\n10,800\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1146,
            504,
            61
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1785",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,785",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers > $100K\n1,785\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1207,
            504,
            42
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "229",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "229",
        "basis": "unspecified",
        "notes": [
          "+45% Y/Y"
        ],
        "quote": "Customers > $1M\n229\n+45% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1249,
            504,
            56
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
            "同比 +7%"
          ],
          "items": [
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 (9%)",
                "毛利率 98%"
              ]
            },
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +33%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (5%)",
                "毛利率 (97%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 56%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 16%",
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
              "利润率 85%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (15%)",
              "同比 +3 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +30%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "同比 -22 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +45%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q2-fy24",
    "company": "UiPath",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 287,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 119,
          "notes": [
            "+15% Y/Y",
            "97% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 160,
          "notes": [
            "+278% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": [
            "Professional",
            "services"
          ],
          "value": 8,
          "notes": [
            "(42%) Y/Y",
            "(140%) gross margin"
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
        "value": 49,
        "notes": []
      },
      "operatingExpenses": {
        "total": 316,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 168,
            "notes": [
              "59% of revenue",
              "(16pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 87,
            "notes": [
              "30% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 60,
            "notes": [
              "21% of revenue",
              "(8pp) Y/Y"
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
        "value": 238,
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -77,
        "notes": [
          "(27%) margin",
          "+23pp Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.31",
        "unit": "B",
        "currency": "USD",
        "literal": "$1.31B",
        "notes": [
          "+25% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARR\n$1.31B\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1147,
            147,
            159
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "121",
        "unit": "%",
        "currency": null,
        "literal": "121%",
        "notes": [
          "-1pp Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DBNR\n121%\n-1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1147,
            167,
            159
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "254",
        "unit": "count",
        "currency": null,
        "literal": "254",
        "notes": [
          "+34% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Customers > $1M\n254\n+34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1147,
            507,
            79
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1858",
        "unit": "count",
        "currency": null,
        "literal": "1,858",
        "notes": [
          "+16% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Customers > $100K\n1,858\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1227,
            507,
            79
          ]
        }
      }
    ],
    "notes": [
      "Source rounded operating expenses components sum to $317M versus $316M total; gross profit $238M less operating expenses $316M is ($78M), versus reported operating loss ($77M). Subscription growth +278% Y/Y is retained exactly as printed."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +15%",
                "毛利率 97%"
              ]
            },
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +278%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": [
                "专业",
                "服务"
              ],
              "notes": [
                "同比 (42%)",
                "毛利率 (140%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": [
              "收入",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 59%",
                  "同比 (16 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 21%",
                  "同比 (8 个百分点)"
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
            "label": [
              "营业",
              "亏损"
            ],
            "notes": [
              "利润率 (27%)",
              "同比 +23 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 -1 个百分点"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q4-fy24",
    "company": "UiPath",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 405,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 220,
          "notes": [
            "+38% Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 176,
          "notes": [
            "+27% Y/Y",
            "81% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": [
            "Professional",
            "services"
          ],
          "value": 9,
          "notes": [
            "(17%) Y/Y",
            "(93%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 53
      },
      "operatingExpenses": {
        "total": 337,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 192,
            "notes": [
              "47% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 86,
            "notes": [
              "21% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 59,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Unlabeled outflow",
        "value": 2,
        "notes": [
          "Source paints an unlabeled red outflow; amount inferred as $15M + $15M + $6M - $34M = $2M."
        ]
      }
    },
    "otherIncome": {
      "total": 21,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 15
        },
        {
          "id": "other",
          "label": "Other",
          "value": 6
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
        "value": 352,
        "notes": [
          "87% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 15,
        "notes": [
          "4% margin",
          "+18pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 34,
        "notes": [
          "8% margin",
          "+17pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "1.46",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.46B",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "ARR\n$1.46B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            160
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "119",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "119%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Q/Q"
        ],
        "quote": "DBNR\n119%\n(2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1147,
            168,
            159
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "288",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "288",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "Customers > $1M\n288\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1147,
            507,
            79
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2054",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,054",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $100K\n2,054\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1227,
            507,
            78
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +38%",
                "毛利率 99%"
              ]
            },
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
                "同比 (17%)",
                "毛利率 (93%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 47%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "未标注流出",
            "notes": [
              "原图有未标注的红色流出；金额由 $15M + $15M + $6M - $34M = $2M 推导。"
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
              "利润率 87%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +18 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +17 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (2 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q1-fy24",
    "company": "UiPath",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 290,
      "notes": [
        "+18% Y/Y",
        "Revenue items sum to $289M due to source rounding."
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 134,
          "notes": [
            "+15% Y/Y",
            "98% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 146,
          "notes": [
            "+27% Y/Y",
            "84% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 9,
          "notes": [
            "(27%) Y/Y",
            "(96%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 44
      },
      "operatingExpenses": {
        "total": 292,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 160,
            "notes": [
              "55% of revenue",
              "(22pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 75,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 57,
            "notes": [
              "20% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 246,
        "notes": [
          "85% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -46,
        "notes": [
          "(16%) margin",
          "+31pp Y/Y"
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
        "id": "arr",
        "label": "ARR",
        "value": "1.25",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.25B",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "ARR\n$1.25B\n+28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            160
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "122",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "122%",
        "basis": "unspecified",
        "notes": [
          "-1pp Q/Q"
        ],
        "quote": "DBNR\n122%\n-1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1146,
            168,
            160
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "10850",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "10,850",
        "basis": "unspecified",
        "notes": [
          "+1% Q/Q"
        ],
        "quote": "Customers\n10,850\n+1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1146,
            507,
            82
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1785",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,785",
        "basis": "unspecified",
        "notes": [
          "+4% Q/Q"
        ],
        "quote": "Customers > $100K\n1,785\n+4% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1228,
            507,
            78
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "items": [
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +15%",
                "毛利率 98%"
              ]
            },
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%",
                "毛利率 84%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (27%)",
                "毛利率 (96%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 55%",
                  "同比 (22 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 20%",
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
              "毛利率 85%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 +31 个百分点"
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
            "label": "客户"
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K"
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q3-fy24",
    "company": "UiPath",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q3-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 326,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 148,
          "notes": [
            "+25% Y/Y",
            "98% gross margin"
          ]
        },
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 168,
          "notes": [
            "+29% Y/Y",
            "83% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 10,
          "notes": [
            "(28%) Y/Y",
            "(79%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 50
      },
      "operatingExpenses": {
        "total": 332,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 191,
            "notes": [
              "59% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 85,
            "notes": [
              "26% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 56,
            "notes": [
              "17% of revenue",
              "(7pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 276,
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
          "(17%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "1.38",
        "unit": "B",
        "currency": "USD",
        "literal": "$1.38B",
        "comparison": "eq",
        "notes": [
          "+24% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARR\n$1.38B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            160
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "121",
        "unit": "%",
        "currency": null,
        "literal": "121%",
        "comparison": "eq",
        "notes": [
          "Flat Q/Q"
        ],
        "basis": "unspecified",
        "quote": "DBNR\n121%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            240,
            1146,
            169,
            160
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "264",
        "unit": "count",
        "currency": null,
        "literal": "264",
        "comparison": "eq",
        "notes": [
          "+31% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers > $1M\n264\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1146,
            505,
            81
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1974",
        "unit": "count",
        "currency": null,
        "literal": "1,974",
        "comparison": "eq",
        "notes": [
          "+15% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers > $100K\n1,974\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1227,
            505,
            79
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +25%",
                "毛利率 98%"
              ]
            },
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +29%",
                "毛利率 83%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (28%)",
                "毛利率 (79%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 59%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 17%",
                  "同比 (7 个百分点)"
                ]
              }
            ]
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
            "label": "营业亏损",
            "notes": [
              "利润率 (17%)",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "原图仅展示到营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers_1m",
            "label": "ARR 超过 $1M 的客户",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "ARR 超过 $100K 的客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "uipath-q1-fy25",
    "company": "UiPath",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 335,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 185,
          "notes": [
            "+26% Y/Y",
            "80% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 140,
          "notes": [
            "+5% Y/Y",
            "98% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 10,
          "notes": [
            "+7% Y/Y",
            "(62%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 55
      },
      "operatingExpenses": {
        "total": 329,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 180,
            "notes": [
              "54% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 86,
            "notes": [
              "26% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 64,
            "notes": [
              "19% of revenue",
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
        "value": 280,
        "notes": [
          "85% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "(15%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "1.51",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.51B",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "ARR\n$1.51B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            86,
            1146,
            147,
            160
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "118",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "118%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNR\n118%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1146,
            168,
            160
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "288",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "288",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Customers > $1M\n288\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1146,
            507,
            81
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2092",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,092",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $100K\n2,092\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            414,
            1227,
            507,
            79
          ]
        }
      }
    ],
    "notes": [
      "Source rounded expense items sum to $330M versus displayed operating expenses of $329M."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +26%",
                "毛利率 80%"
              ]
            },
            {
              "id": "licenses",
              "label": "许可证",
              "notes": [
                "同比 +5%",
                "毛利率 98%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +7%",
                "毛利率 (62%)"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 54%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 19%",
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
              "利润率 85%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (15%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +13%"
            ]
          }
        ],
        "notes": [
          "源图费用明细舍入后合计 $330M，营业费用标注为 $329M。"
        ]
      }
    }
  },
  {
    "key": "uipath-q1-fy26",
    "company": "UiPath",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/uipath-q1-fy26.png",
    "roundingTolerance": 1.1,
    "notes": [
      "Source rounded revenue items total $356M versus $357M revenue; expense items total $310M versus $309M operating expenses. Source ends at operating loss; no net result is reported."
    ],
    "revenue": {
      "total": 357,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 217,
          "notes": [
            "+17% Y/Y",
            "82% gross margin"
          ]
        },
        {
          "id": "licenses",
          "label": "Licenses",
          "value": 128,
          "notes": [
            "(8%) Y/Y",
            "99% gross margin"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 11,
          "notes": [
            "+12% Y/Y",
            "(119%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 64
      },
      "operatingExpenses": {
        "total": 309,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 160
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 95
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 55
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 293,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -16,
        "notes": [
          "(5%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "1.69",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.69B",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "ARR $1.69B +12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            85,
            1126,
            146,
            159
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "108",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "108%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Q/Q"
        ],
        "quote": "DBNR 108% (2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            241,
            1127,
            168,
            157
          ]
        }
      },
      {
        "id": "customers_1m",
        "label": "Customers > $1M",
        "value": "316",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "316",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers > $1M 316 +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1127,
            505,
            75
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "2365",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,365",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $100K 2,365 +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1202,
            505,
            82
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "notes": [
          "原图收入分项合计 $356M，总收入 $357M；费用分项合计 $310M，营业费用 $309M，保留舍入差异。原图止于营业亏损，未报告净利润。"
        ],
        "revenue": {
          "items": [
            {
              "id": "subscription",
              "label": "订阅"
            },
            {
              "id": "licenses",
              "label": "许可证"
            },
            {
              "id": "professional_services",
              "label": "专业服务"
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
                "label": "销售与营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (2 个百分点)"
            ]
          },
          {
            "id": "customers_1m",
            "label": "客户 > $1M",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
