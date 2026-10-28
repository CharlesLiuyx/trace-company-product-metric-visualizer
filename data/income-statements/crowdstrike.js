/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "crowdstrike-q4-fy26",
    "company": "CrowdStrike",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1305,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1242,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 63,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 316
      },
      "operatingExpenses": {
        "total": 996,
        "notes": [
          "S&M, R&D, and G&A add to $997M due to rounded source-chart values."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 465,
            "notes": [
              "36% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 368,
            "notes": [
              "28% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 164,
            "notes": [
              "13% of revenue",
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
        "value": 989,
        "notes": [
          "76% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -7,
        "notes": [
          "(1%) margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -7,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +26%"
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
              "销售与市场、研发和管理费用合计为 $997M，因来源图数值取整存在差异。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "利润率 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +8 个百分点"
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
    "key": "crowdstrike-q1-fy27",
    "company": "CrowdStrike",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1386,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1321,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 65,
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
        "value": 342
      },
      "operatingExpenses": {
        "total": 1074,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 489,
            "notes": [
              "35% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 408,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 177,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
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
        "value": 1043,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -31,
        "notes": [
          "(2%) margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -31,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 35%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 (1 个百分点)"
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
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +9 个百分点"
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
    "key": "crowdstrike-q2-fy27",
    "company": "CrowdStrike",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q2-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1471,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1400,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 71,
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
        "value": 374
      },
      "operatingExpenses": {
        "total": 1130,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 510,
            "notes": [
              "35% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 444,
            "notes": [
              "30% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 176,
            "notes": [
              "12% of revenue",
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
        "value": 1096,
        "notes": [
          "75% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -33,
        "notes": [
          "(2%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "5.84",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$5.84B",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "ARR\n$5.84B\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            148,
            164
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "51",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "51%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with\n6+ modules 51% +3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        }
      },
      {
        "id": "modules_7_plus",
        "label": "7+ modules",
        "value": "34",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "34%",
        "basis": "unspecified",
        "notes": [
          "+1pp Y/Y"
        ],
        "quote": "Customers with\n7+ modules 34% +1pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        }
      }
    ],
    "notes": [
      "Source rounded amounts: revenue less cost of revenue is $1,097M versus displayed gross profit $1,096M; gross profit less operating expenses is ($34M) versus displayed operating loss ($33M)."
    ],
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +26%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
            "items": [
              {
                "id": "sm",
                "label": "销售与市场 (S&M)",
                "notes": [
                  "占收入 35%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 (R&D)",
                "notes": [
                  "占收入 30%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用 (G&A)",
                "notes": [
                  "占收入 12%",
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
              "利润率 75%",
              "同比 +1 个百分点"
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
            "label": "未报告净利润",
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
              "同比 +25%"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "modules_7_plus",
            "label": "使用 7+ 模块的客户占比",
            "notes": [
              "同比 +1 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q3-fy24",
    "company": "CrowdStrike",
    "period": "Q3 FY24",
    "periodNote": "Ending October 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "sourceImage": "input/processed/crowdstrike-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 786,
      "notes": [
        "+35% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 733,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 53,
          "notes": [
            "+57% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 195
      },
      "operatingExpenses": {
        "total": 588,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 286,
            "notes": [
              "36% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 196,
            "notes": [
              "25% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
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
        "value": 10
      }
    },
    "otherIncome": {
      "total": 34,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 34
        }
      ]
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 591,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "0% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 27,
        "notes": [
          "3% margin",
          "+13pp Y/Y",
          "Source rounded values imply $26.5M; printed $27M retained."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "3.15",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.15B",
        "basis": "unspecified",
        "notes": [
          "+35% Y/Y"
        ],
        "quote": "ARR\n$3.15B\n+35% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            87,
            1172,
            148,
            167
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "Customers with 5+ modules",
        "value": "63",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "63%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with 5+ modules\n63%\n+3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1233,
            518,
            42
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "Customers with 6+ modules",
        "value": "42",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "42%",
        "basis": "unspecified",
        "notes": [
          "+6pp Y/Y"
        ],
        "quote": "Customers with 6+ modules\n42%\n+6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1276,
            518,
            42
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +35%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +6 个百分点"
            ]
          }
        ],
        "profit": {
          "net": {
            "notes": [
              "利润率 3%",
              "同比 +13 个百分点",
              "来源取整数值计算为 $26.5M；保留印刷值 $27M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "crowdstrike-q3-fy25",
    "company": "CrowdStrike",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q3-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1010,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 963,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 47,
          "notes": [
            "(10%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 255
      },
      "operatingExpenses": {
        "total": 811,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 408,
            "notes": [
              "40% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 276,
            "notes": [
              "27% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 127,
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
        "value": 755,
        "notes": [
          "75% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -56,
        "notes": [
          "(6%) margin",
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
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "4.02",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.02B",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "ARR\n$4.02B\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            147,
            164
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "66",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "66%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with\n5+ modules 66% +3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            190,
            1143,
            518,
            164
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "47",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "47%",
        "basis": "unspecified",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "Customers with\n6+ modules 47% +5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            190,
            1143,
            518,
            164
          ]
        }
      }
    ],
    "notes": [],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (10%)"
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
                "label": "销售与市场 (S&M)",
                "notes": [
                  "占收入 40%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 (R&D)",
                "notes": [
                  "占收入 27%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用 (G&A)",
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
              "利润率 75%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 (6 个百分点)"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q3-fy23",
    "company": "CrowdStrike",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 581,
      "notes": [
        "+53% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 547,
          "notes": [
            "+53% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 34,
          "notes": [
            "+46% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 158
      },
      "operatingExpenses": {
        "total": 479,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 240,
            "notes": [
              "41% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 155,
            "notes": [
              "27% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 84,
            "notes": [
              "14% of revenue",
              "Unchanged"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 423,
        "notes": [
          "73% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -56,
        "notes": [
          "(10%) margin",
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
        "value": "2.34",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.34B",
        "notes": [
          "+54% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARR\n$2.34B\n+54% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            39,
            1133,
            148,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 120%",
        "notes": [
          "Unchanged"
        ],
        "basis": "unspecified",
        "quote": "DBNR\n> 120%\nUnchanged",
        "anchor": {
          "type": "image-box",
          "box": [
            193,
            1133,
            198,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "21146",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21,146",
        "notes": [
          "+44% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Customers\n21,146\n+44% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            518,
            165
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "60",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "60%",
        "notes": [
          "+5pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "5+ modules\n60%\n+5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            518,
            165
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "36",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "36%",
        "notes": [
          "+4pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "6+ modules\n36%\n+4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            518,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +53%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +53%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +46%"
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
                  "占收入 41%",
                  "同比 (2 个百分点)"
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
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "保持不变"
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
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +1 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +54%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "保持不变"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +44%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "5+ 模块",
            "notes": [
              "同比 +5 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "6+ 模块",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q1-fy26",
    "company": "CrowdStrike",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1103,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1051,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 53,
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
        "value": 289
      },
      "operatingExpenses": {
        "total": 939,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 440,
            "notes": [
              "40% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 334,
            "notes": [
              "30% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 165,
            "notes": [
              "15% of revenue",
              "+4pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 814,
        "notes": [
          "74% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -124,
        "notes": [
          "(11%) margin",
          "(12pp) Y/Y"
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
        "value": "4.44",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.44B",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "ARR\n$4.44B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            148,
            164
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "48",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "48%",
        "basis": "unspecified",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "6+ modules\n48%\n+4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            190,
            1143,
            518,
            164
          ]
        }
      },
      {
        "id": "modules_7_plus",
        "label": "7+ modules",
        "value": "32",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "32%",
        "basis": "unspecified",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "7+ modules\n32%\n+4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            190,
            1143,
            518,
            164
          ]
        }
      }
    ],
    "notes": [
      "Source rounded amounts: subscription plus professional services is $1,104M versus displayed revenue $1,103M; gross profit less operating expenses is ($125M) versus displayed operating loss ($124M)."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
            "items": [
              {
                "id": "sm",
                "label": "销售与市场 (S&M)",
                "notes": [
                  "占收入 40%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 (R&D)",
                "notes": [
                  "占收入 30%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用 (G&A)",
                "notes": [
                  "占收入 15%",
                  "同比 +4 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 (12 个百分点)"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +4 个百分点"
            ]
          },
          {
            "id": "modules_7_plus",
            "label": "使用 7+ 模块的客户占比",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q4-fy24",
    "company": "CrowdStrike",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 845,
      "notes": [
        "+33% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 796,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 50,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 607,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 290,
            "notes": [
              "34% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 214,
            "notes": [
              "25% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 103,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 209,
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 14,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 39,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 35,
          "notes": []
        },
        {
          "id": "other",
          "label": "Other",
          "value": 4,
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
        "value": 637,
        "notes": [
          "75% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 30,
        "notes": [
          "4% margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 55,
        "notes": [
          "6% margin",
          "+14pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "3.44",
        "unit": "B",
        "literal": "$3.44B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "ARR $3.44B +34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            87,
            1173,
            148,
            164
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "64",
        "unit": "%",
        "literal": "64%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2pp Y/Y"
        ],
        "quote": "5+ modules 64% +2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1175,
            518,
            163
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "43",
        "unit": "%",
        "literal": "43%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "6+ modules 43% +4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1175,
            518,
            163
          ]
        }
      }
    ],
    "notes": [
      "Source preserves rounded amounts: subscription $796M plus services $50M totals $846M versus revenue $845M; revenue $845M minus cost $209M is $636M versus gross profit $637M."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +2 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q2-fy25",
    "company": "CrowdStrike",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 964,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 918,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 46,
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
        "value": 237
      },
      "operatingExpenses": {
        "total": 713,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 355,
            "notes": [
              "37% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 251,
            "notes": [
              "26% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "11% of revenue",
              "(3pp) Y/Y"
            ]
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
      "total": 44,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 44
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
        "value": 726,
        "notes": [
          "75% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 14,
        "notes": [
          "1% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 47,
        "notes": [
          "5% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "3.86",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.86B",
        "notes": [
          "+32% Y/Y"
        ],
        "quote": "ARR\n$3.86B\n+32% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            89,
            1173,
            147,
            164
          ]
        }
      },
      {
        "id": "customers_5_plus",
        "label": "Customers with 5+ modules",
        "value": "65",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "65%",
        "notes": [
          "+2pp Y/Y"
        ],
        "quote": "Customers with 5+ modules\n65%\n+2pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1173,
            518,
            164
          ]
        }
      },
      {
        "id": "customers_6_plus",
        "label": "Customers with 6+ modules",
        "value": "45",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "45%",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "Customers with 6+ modules\n45%\n+4pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1173,
            518,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                  "占收入 26%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
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
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +32%"
            ]
          },
          {
            "id": "customers_5_plus",
            "label": "使用 5+ 模块的客户",
            "notes": [
              "同比 +2 个百分点"
            ]
          },
          {
            "id": "customers_6_plus",
            "label": "使用 6+ 模块的客户",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "company": "CrowdStrike",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "key": "crowdstrike-q1-fy25",
    "sourceImage": "input/processed/crowdstrike-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 921,
      "notes": [
        "+33% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 872,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 49,
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
        "value": 225
      },
      "operatingExpenses": {
        "total": 689,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 350,
            "notes": [
              "38% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 235,
            "notes": [
              "26% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 104,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 8
      }
    },
    "otherIncome": {
      "total": 47,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 39
        },
        {
          "id": "other",
          "label": "Other",
          "value": 8
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
        "value": 696,
        "notes": [
          "76% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7,
        "notes": [
          "1% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 46,
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "3.65",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.65B",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "ARR $3.65B +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            87,
            1173,
            147,
            164
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "65",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "65%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with 5+ modules 65% +3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1173,
            518,
            164
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "44",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "44%",
        "basis": "unspecified",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "Customers with 6+ modules 44% +4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1173,
            518,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "items": [
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
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "interest",
              "label": "利息收入"
            },
            {
              "id": "other",
              "label": "其他收入"
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
              "利润率 1%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q2-fy26",
    "company": "CrowdStrike",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1169,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1103,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 66,
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
        "value": 310
      },
      "operatingExpenses": {
        "total": 972,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 447,
            "notes": [
              "38% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 347,
            "notes": [
              "30% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 178,
            "notes": [
              "15% of revenue",
              "+4pp Y/Y"
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
        "value": 859,
        "notes": [
          "73% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -113,
        "notes": [
          "(10%) margin",
          "(11pp) Y/Y"
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
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 38%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +4 个百分点"
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
              "利润率 73%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 (11 个百分点)"
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
            "id": "arr",
            "label": "年度经常性收入",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "six_modules",
            "label": "使用 6+ 模块的客户",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "seven_modules",
            "label": "使用 7+ 模块的客户",
            "notes": [
              "同比 +4 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "4.66",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.66B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "ARR\n$4.66B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            146,
            162
          ]
        }
      },
      {
        "id": "six_modules",
        "label": "Customers with 6+ modules",
        "value": "48",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "48%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with 6+ modules\n48%\n+3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            191,
            1143,
            517,
            81
          ]
        }
      },
      {
        "id": "seven_modules",
        "label": "Customers with 7+ modules",
        "value": "33",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "33%",
        "basis": "unspecified",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "Customers with 7+ modules\n33%\n+4pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            191,
            1224,
            517,
            81
          ]
        }
      }
    ]
  },
  {
    "key": "crowdstrike-q4-fy25",
    "company": "CrowdStrike",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1059,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1008,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 50,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 274
      },
      "operatingExpenses": {
        "total": 870,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 410,
            "notes": [
              "39% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 315,
            "notes": [
              "30% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 145,
            "notes": [
              "14% of revenue",
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
        "value": 785,
        "notes": [
          "74% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -85,
        "notes": [
          "(8%) margin",
          "(12pp) Y/Y"
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
        "value": "4.24",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.24B",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "ARR\n$4.24B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            148,
            164
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "48",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "48%",
        "basis": "unspecified",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "Customers with\n6+ modules 48% +5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        }
      },
      {
        "id": "modules_7_plus",
        "label": "7+ modules",
        "value": "32",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "32%",
        "basis": "unspecified",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "Customers with\n7+ modules 32% +5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        }
      }
    ],
    "notes": [
      "Source printed revenue components $1,008M + $50M = $1,058M, versus displayed total $1,059M; all printed amounts preserved."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
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
                "label": "销售与市场 (S&M)",
                "notes": [
                  "占收入 39%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 (R&D)",
                "notes": [
                  "占收入 30%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用 (G&A)",
                "notes": [
                  "占收入 14%",
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
              "利润率 74%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 (12 个百分点)"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          },
          {
            "id": "modules_7_plus",
            "label": "使用 7+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q4-fy23",
    "company": "CrowdStrike",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 637,
      "notes": [
        "+48% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 598,
          "notes": [
            "+48% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 39,
          "notes": [
            "+53% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 176
      },
      "operatingExpenses": {
        "total": 523,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 246,
            "notes": [
              "39% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 192,
            "notes": [
              "30% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 85,
            "notes": [
              "13% of revenue",
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
        "value": 462,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -62,
        "notes": [
          "(10%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "2.56",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.56B",
        "notes": [
          "+48% Y/Y"
        ],
        "quote": "ARR $2.56B +48% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            39,
            1133,
            150,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "125",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 125%",
        "notes": [],
        "quote": "DBNR > 125%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            194,
            1133,
            197,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "23019",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "23,019",
        "notes": [
          "+41% Y/Y"
        ],
        "quote": "Customers 23,019 +41% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            520,
            165
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "62",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "62%",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "5+ modules 62% +5pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            520,
            165
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "39",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "39%",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "6+ modules 39% +5pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            520,
            165
          ]
        }
      }
    ],
    "notes": [
      "Source rounded values: $637M - $176M = $461M versus displayed $462M gross profit; $462M - $523M = ($61M) versus displayed ($62M) operating loss."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +48%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +48%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +53%"
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
                  "占收入 39%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "利润率 72%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +48%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": []
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +41%"
            ]
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          }
        ],
        "notes": [
          "原图取整数值：$637M - $176M = $461M，图示毛利润为 $462M；$462M - $523M = ($61M)，图示营业亏损为 ($62M)。"
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q3-fy26",
    "company": "CrowdStrike",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1234,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 1169,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 66,
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
        "value": 308
      },
      "operatingExpenses": {
        "total": 996,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 481,
            "notes": [
              "39% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 348,
            "notes": [
              "28% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 167,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          }
        ],
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 926,
        "notes": [
          "75% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -69,
        "notes": [
          "(6%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "4.92",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.92B",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "ARR $4.92B +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1143,
            148,
            164
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "modules_6_plus",
        "label": "Customers with 6+ modules",
        "value": "49",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "49%",
        "notes": [
          "+2pp Y/Y"
        ],
        "quote": "Customers with 6+ modules 49% +2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "modules_7_plus",
        "label": "Customers with 7+ modules",
        "value": "34",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "34%",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Customers with 7+ modules 34% +3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            189,
            1143,
            521,
            164
          ]
        },
        "basis": "unspecified"
      }
    ],
    "notes": [
      "Source rounded amounts: subscription plus professional services is $1,235M versus displayed revenue $1,234M; gross profit less operating expenses is ($70M) versus displayed operating loss ($69M)."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
            "items": [
              {
                "id": "sm",
                "label": "销售与市场 (S&M)",
                "notes": [
                  "占收入 39%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 (R&D)",
                "notes": [
                  "占收入 28%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用 (G&A)",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              }
            ],
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +2 个百分点"
            ]
          },
          {
            "id": "modules_7_plus",
            "label": "使用 7+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          }
        ],
        "notes": [
          "来源图取整金额：订阅与专业服务合计 $1,235M，图示总收入为 $1,234M；毛利润减营业费用为 ($70M)，图示营业亏损为 ($69M)。"
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q2-fy24",
    "company": "CrowdStrike",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 732,
      "notes": [
        "+37% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 690,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 42,
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
        "value": 183
      },
      "operatingExpenses": {
        "total": 564,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 283,
            "notes": [
              "39% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 179,
            "notes": [
              "25% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 102,
            "notes": [
              "13% of revenue",
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
        "value": 549,
        "notes": [
          "75% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -15,
        "notes": [
          "(2%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "2.93",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.93B",
        "notes": [
          "+37% Y/Y"
        ],
        "quote": "ARR\n$2.93B\n+37% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            39,
            1133,
            150,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "120%",
        "notes": [],
        "quote": "DBNR\n120%",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            194,
            1133,
            197,
            165
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "Customers with 5+ modules",
        "value": "63",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "63%",
        "notes": [
          "+4pp Y/Y"
        ],
        "quote": "Customers with 5+ modules\n63%\n+4pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            518,
            165
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "Customers with 6+ modules",
        "value": "41",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "41%",
        "notes": [
          "+5pp Y/Y"
        ],
        "quote": "Customers with 6+ modules\n41%\n+5pp Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            518,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +37%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研究与开发",
                "notes": [
                  "占收入 25%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般与行政",
                "notes": [
                  "占收入 13%",
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
              "利润率 75%",
              "同比 +1 个百分点"
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
            "label": "未报告净利润",
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
              "同比 +37%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": []
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +4 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "crowdstrike-q1-fy24",
    "company": "CrowdStrike",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/crowdstrike-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 693,
      "notes": [
        "+42% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 651,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 41,
          "notes": [
            "+48% Y/Y"
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
        "total": 543,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 281,
            "notes": [
              "41% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 179,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 83,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
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
        "value": 523,
        "notes": [
          "76% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -19,
        "notes": [
          "(3%) margin",
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
        "id": "arr",
        "label": "ARR",
        "value": "2.73",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.73B",
        "notes": [
          "+42% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARR\n$2.73B\n+42% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            39,
            1133,
            148,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 120%",
        "notes": [],
        "basis": "unspecified",
        "quote": "DBNR\n> 120%",
        "anchor": {
          "type": "image-box",
          "box": [
            193,
            1133,
            197,
            165
          ]
        }
      },
      {
        "id": "modules_5_plus",
        "label": "5+ modules",
        "value": "62",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "62%",
        "notes": [
          "+3pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "5+ modules\n62%\n+3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            520,
            165
          ]
        }
      },
      {
        "id": "modules_6_plus",
        "label": "6+ modules",
        "value": "40",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "40%",
        "notes": [
          "+5pp Y/Y"
        ],
        "basis": "unspecified",
        "quote": "6+ modules\n40%\n+5pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            396,
            1133,
            520,
            165
          ]
        }
      }
    ],
    "notes": [
      "Source rounded amounts: subscription plus professional services is $692M versus revenue $693M; revenue less cost is $524M versus gross profit $523M; gross profit less operating expenses is ($20M) versus operating loss ($19M)."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +42%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +48%"
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
                  "占收入 41%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研究与开发",
                "notes": [
                  "占收入 26%",
                  "同比 +1 个百分点"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +2 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +42%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": []
          },
          {
            "id": "modules_5_plus",
            "label": "使用 5+ 模块的客户占比",
            "notes": [
              "同比 +3 个百分点"
            ]
          },
          {
            "id": "modules_6_plus",
            "label": "使用 6+ 模块的客户占比",
            "notes": [
              "同比 +5 个百分点"
            ]
          }
        ],
        "notes": [
          "来源图取整金额：订阅加专业服务合计 $692M，收入显示 $693M；收入减成本为 $524M，毛利润显示 $523M；毛利润减营业费用为 ($20M)，营业亏损显示 ($19M)。"
        ]
      }
    }
  }
]);
})(window);
