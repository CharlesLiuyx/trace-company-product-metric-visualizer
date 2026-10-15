/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "nintendo-fy26",
    "company": "Nintendo",
    "period": "FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 2313,
      "notes": [
        "+99% Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Dedicated video game platform",
          "value": 2240,
          "notes": [
            "+107% Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 1494,
              "notes": [
                "+215% Y/Y",
                "Switch 2: 19.9M units (New)",
                "Switch 1: 3.8M units, (65%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 746,
              "notes": [
                "+22% Y/Y",
                "186M units",
                "+19% Y/Y",
                "55% Digital"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 74,
          "notes": [
            "(10%) Y/Y",
            "Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1404
      },
      "operatingExpenses": {
        "total": 549,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 226,
            "notes": [
              "10% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 178,
            "notes": [
              "8% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 145,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 232,
        "notes": [
          "Modeled from the source chart to reconcile operating profit, other income, and displayed net profit."
        ]
      }
    },
    "otherIncome": {
      "total": 182,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 182
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
        "value": 909,
        "notes": [
          "39% margin",
          "(22pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 360,
        "notes": [
          "16% margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 310,
        "notes": [
          "13% margin",
          "(11pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +99%"
          ],
          "items": [
            {
              "label": "专用游戏平台",
              "notes": [
                "同比 +107%"
              ],
              "children": [
                {
                  "label": "硬件",
                  "notes": [
                    "同比 +215%",
                    "Switch 2：1,990 万台（新机型）",
                    "Switch 1：380 万台，同比 (65%)"
                  ]
                },
                {
                  "label": "软件",
                  "notes": [
                    "同比 +22%",
                    "1.86 亿套",
                    "同比 +19%",
                    "数字版占 55%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 (10%)",
                "来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他销售及管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "label": "广告",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "按来源图表建模，用于调和营业利润、其他收入和图中显示的净利润。"
            ]
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
              "利润率 39%",
              "同比 (22 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (9 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (11 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "nintendo-h1-fy26",
    "company": "Nintendo",
    "period": "H1 FY26",
    "periodNote": "Ending Sept. 2025",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-h1-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 1099,
      "notes": [
        "+110% Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Dedicated video game platform",
          "value": 1066,
          "notes": [
            "+120% Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 780,
              "notes": [
                "+288% Y/Y",
                "Switch 2: 10.4M units",
                "Switch 1: 1.9M units, (60%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 286,
              "notes": [
                "+0% Y/Y",
                "82.2M units",
                "+17% Y/Y",
                "55% Digital"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 33,
          "notes": [
            "(13%) Y/Y",
            "Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 701
      },
      "operatingExpenses": {
        "total": 253,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 106,
            "notes": [
              "10% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 82,
            "notes": [
              "7% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 65,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 69
      }
    },
    "otherIncome": {
      "total": 123,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 123
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
        "value": 398,
        "notes": [
          "32% margin",
          "(25pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 145,
        "notes": [
          "10% margin",
          "(12pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 199,
        "notes": [
          "18% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年上半年",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +110%"
          ],
          "items": [
            {
              "label": "专用游戏平台",
              "notes": [
                "同比 +120%"
              ],
              "children": [
                {
                  "label": "硬件",
                  "notes": [
                    "同比 +288%",
                    "Switch 2：1,040 万台",
                    "Switch 1：190 万台，同比 (60%)"
                  ]
                },
                {
                  "label": "软件",
                  "notes": [
                    "同比 +0%",
                    "8,220 万套",
                    "同比 +17%",
                    "数字版占 55%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 (13%)",
                "来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他销售及管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "label": "广告",
                "notes": [
                  "占收入 6%",
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
              "利润率 32%",
              "同比 (25 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (12 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "nintendo-9m-fy26",
    "company": "Nintendo",
    "period": "9M FY26",
    "periodNote": "Ending Dec. 2025",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-9m-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 1906,
      "notes": [
        "+99% Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Dedicated video game platform",
          "value": 1851,
          "notes": [
            "+107% Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 1292,
              "notes": [
                "+213% Y/Y",
                "Switch 2: 17.3M units",
                "Switch 1: 3.2M units, (66%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 559,
              "notes": [
                "+16% Y/Y",
                "147M units",
                "+18% Y/Y",
                "50% Digital"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 55,
          "notes": [
            "(10%) Y/Y",
            "Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 1193
      },
      "operatingExpenses": {
        "total": 412,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 170,
            "notes": [
              "9% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 128,
            "notes": [
              "7% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 114,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 129
      }
    },
    "otherIncome": {
      "total": 188,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 188
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
        "value": 712,
        "notes": [
          "37% margin",
          "(22pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 300,
        "notes": [
          "16% margin",
          "(10pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 359,
        "notes": [
          "19% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年前 9 个月",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +99%"
          ],
          "items": [
            {
              "label": "专用游戏平台",
              "notes": [
                "同比 +107%"
              ],
              "children": [
                {
                  "label": "硬件",
                  "notes": [
                    "同比 +213%",
                    "Switch 2：1,730 万台",
                    "Switch 1：320 万台，同比 (66%)"
                  ]
                },
                {
                  "label": "软件",
                  "notes": [
                    "同比 +16%",
                    "1.47 亿套",
                    "同比 +18%",
                    "数字版占 50%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 (10%)",
                "来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他销售及管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "label": "广告",
                "notes": [
                  "占收入 6%",
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
              "利润率 37%",
              "同比 (22 个百分点)"
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
              "利润率 19%",
              "同比 (6 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "nintendo-q1-fy27",
    "company": "Nintendo",
    "period": "Q1 FY27",
    "periodNote": "Ending June 2026",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-q1-fy27.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 518,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Dedicated video game platform",
          "value": 483,
          "notes": [
            "(13%) Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 267,
              "notes": [
                "(39%) Y/Y",
                "Switch 2: 3.8M units, (34%) Y/Y",
                "Switch 1: 0.6M units, (32%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 216,
              "notes": [
                "+83% Y/Y",
                "43M units",
                "+31% Y/Y",
                "62% Digital"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 35,
          "notes": [
            "+108% Y/Y",
            "Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 236
      },
      "operatingExpenses": {
        "total": 139,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 61,
            "notes": [
              "12% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 49,
            "notes": [
              "9% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 29,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 59
      }
    },
    "otherIncome": {
      "total": 64,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 64
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
        "value": 281,
        "notes": [
          "54% margin",
          "+22pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 143,
        "notes": [
          "28% margin",
          "+18pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 147,
        "notes": [
          "28% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (10%)"
          ],
          "items": [
            {
              "label": "专用游戏平台",
              "notes": [
                "同比 (13%)"
              ],
              "children": [
                {
                  "label": "硬件",
                  "notes": [
                    "同比 (39%)",
                    "Switch 2：380 万台，同比 (34%)",
                    "Switch 1：60 万台，同比 (32%)"
                  ]
                },
                {
                  "label": "软件",
                  "notes": [
                    "同比 +83%",
                    "4,300 万套",
                    "同比 +31%",
                    "数字版占 62%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 +108%",
                "来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他销售及管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "广告",
                "notes": [
                  "占收入 6%",
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
              "利润率 54%",
              "同比 +22 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +18 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 +12 个百分点"
            ]
          }
        },
        "notes": [
          "来源金额取整至 ¥1B：收入减销售成本与毛利润相差 ¥1B，毛利润减运营费用与营业利润相差 ¥1B，营业利润加其他收益减税费与净利润相差 ¥1B。"
        ]
      }
    },
    "notes": [
      "Source amounts are rounded to ¥1B: revenue less cost of sales differs from gross profit by ¥1B; gross profit less operating expenses differs from operating profit by ¥1B; operating profit plus Other less tax differs from net profit by ¥1B."
    ]
  },
  {
    "key": "nintendo-fy25",
    "company": "Nintendo",
    "period": "FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "JPY",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-fy25.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 1165,
      "notes": [
        "(30%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Nintendo Switch",
          "value": 1084,
          "notes": [
            "(31%) Y/Y"
          ],
          "children": [
            {
              "id": "software",
              "label": "Software",
              "value": 610,
              "notes": [
                "(46%) Y/Y"
              ]
            },
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 474,
              "notes": [
                "(31%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 68,
          "notes": [
            "(27%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 14,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 455,
        "notes": []
      },
      "operatingExpenses": {
        "total": 428,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 197,
            "notes": [
              "17% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 144,
            "notes": [
              "12% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 87,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 94,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 90,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 90,
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
        "value": 710,
        "notes": [
          "61% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 283,
        "notes": [
          "24% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 279,
        "notes": [
          "24% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "software_units",
        "label": "Software units",
        "value": "155000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "155M",
        "basis": "unspecified",
        "notes": [
          "(22%) Y/Y"
        ],
        "quote": "Software units\n155M units\n(22%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            152,
            537,
            156,
            36
          ]
        }
      },
      {
        "id": "hardware_units",
        "label": "Hardware units",
        "value": "11000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "11M",
        "basis": "unspecified",
        "notes": [
          "(31%) Y/Y"
        ],
        "quote": "Hardware units\n11M units\n(31%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            154,
            947,
            156,
            35
          ]
        }
      },
      {
        "id": "digital_share",
        "label": "Digital share",
        "value": "54",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "54%",
        "basis": "unspecified",
        "notes": [
          "+3pp Y/Y"
        ],
        "quote": "Digital share\n54%\n+3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            154,
            616,
            156,
            35
          ]
        }
      }
    ],
    "notes": [
      "Source rounds to ¥1B: revenue items sum to ¥1,166B versus ¥1,165B total; ¥710B gross profit less ¥428B operating expenses equals ¥282B versus ¥283B operating profit."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (30%)"
          ],
          "items": [
            {
              "id": "dedicated_video_game_platform",
              "label": "Nintendo Switch 平台",
              "notes": [
                "同比 (31%)"
              ],
              "children": [
                {
                  "id": "software",
                  "label": "软件",
                  "notes": [
                    "同比 (46%)"
                  ]
                },
                {
                  "id": "hardware",
                  "label": "硬件",
                  "notes": [
                    "同比 (31%)"
                  ]
                }
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动业务与 IP 相关收入",
              "notes": [
                "同比 (27%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +21%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他 SG&A",
                "notes": [
                  "占收入 17%",
                  "同比 +6pp"
                ]
              },
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": [
                  "占收入 12%",
                  "同比 +4pp"
                ]
              },
              {
                "id": "advertising",
                "label": "广告",
                "notes": [
                  "占收入 7%",
                  "同比 +1pp"
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
              "id": "other_income",
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
              "利润率 61%",
              "同比 +4pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 (7pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 (5pp)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "software_units",
            "label": "软件销量",
            "notes": [
              "同比 (22%)"
            ]
          },
          {
            "id": "hardware_units",
            "label": "硬件销量",
            "notes": [
              "同比 (31%)"
            ]
          },
          {
            "id": "digital_share",
            "label": "数字版占比",
            "notes": [
              "同比 +3pp"
            ]
          }
        ],
        "notes": [
          "原图金额取整至 ¥1B：收入分项合计 ¥1,166B，总收入为 ¥1,165B；¥710B 毛利润减去 ¥428B 运营费用等于 ¥282B，原图营业利润为 ¥283B。"
        ]
      }
    }
  },
  {
    "key": "nintendo-q3-fy25",
    "company": "Nintendo",
    "period": "Q3 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-q3-fy25.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 433,
      "notes": [
        "(28%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Nintendo Switch",
          "value": 410,
          "notes": [
            "(29%) Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 212,
              "notes": [
                "(26%) Y/Y",
                "4.8M units",
                "(31%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 198,
              "notes": [
                "(31%) Y/Y",
                "53.7M units",
                "(30%) Y/Y",
                "43% Digital",
                "(2pp) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 19,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 4,
          "notes": [
            "Flat Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 185,
        "notes": []
      },
      "operatingExpenses": {
        "total": 122,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 53,
            "notes": [
              "12% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 36,
            "notes": [
              "8% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 33,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
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
    "otherIncome": {
      "total": 54,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 54,
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
        "value": 248,
        "notes": [
          "57% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 126,
        "notes": [
          "29% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 129,
        "notes": [
          "30% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 -28%"
          ],
          "items": [
            {
              "id": "dedicated_video_game_platform",
              "label": "任天堂 Switch",
              "notes": [
                "同比 -29%"
              ],
              "children": [
                {
                  "id": "hardware",
                  "label": "硬件",
                  "notes": [
                    "同比 -26%",
                    "4.8M 台/份",
                    "同比 -31%"
                  ]
                },
                {
                  "id": "software",
                  "label": "软件",
                  "notes": [
                    "同比 -31%",
                    "53.7M 台/份",
                    "同比 -30%",
                    "数字化占比 43%",
                    "同比 -2 个百分点"
                  ]
                }
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关",
              "notes": [
                "同比 -8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比持平"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他 SG&A",
                "notes": [
                  "占收入 12%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": [
                  "占收入 8%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "advertising",
                "label": "广告费用",
                "notes": [
                  "占收入 8%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税项",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
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
              "利润率 57%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 30%",
              "同比 +7 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hardware_units",
            "label": "硬件销量",
            "notes": [
              "同比 -31%"
            ]
          },
          {
            "id": "software_units",
            "label": "软件销量",
            "notes": [
              "同比 -30%"
            ]
          },
          {
            "id": "digital_share",
            "label": "数字化占比",
            "notes": [
              "同比 -2 个百分点"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hardware_units",
        "label": "Hardware units",
        "value": "4800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4.8M",
        "basis": "unspecified",
        "notes": [
          "(31%) Y/Y"
        ],
        "quote": "Hardware units\n4.8M units\n(31%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            145,
            588,
            154,
            73
          ]
        }
      },
      {
        "id": "software_units",
        "label": "Software units",
        "value": "53700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "53.7M",
        "basis": "unspecified",
        "notes": [
          "(30%) Y/Y"
        ],
        "quote": "Software units\n53.7M units\n(30%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            144,
            872,
            164,
            74
          ]
        }
      },
      {
        "id": "digital_share",
        "label": "Digital share",
        "value": "43",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "43%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Y/Y"
        ],
        "quote": "Digital share\n43%\n(2pp) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            145,
            950,
            158,
            68
          ]
        }
      }
    ]
  },
  {
    "key": "nintendo-fy23",
    "company": "Nintendo",
    "period": "FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processing/nintendo-fy23.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 1601,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "switch",
          "label": "Nintendo Switch",
          "value": 1509,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "other_consoles",
          "label": "Other consoles",
          "value": 36,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 51,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "playing_cards",
          "label": "Playing cards",
          "value": 6,
          "notes": [
            "+107% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 716,
        "notes": []
      },
      "operatingExpenses": {
        "total": 381,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 110,
            "notes": []
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 95,
            "notes": []
          },
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 176,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 168,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 96,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 96,
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
        "value": 886,
        "notes": [
          "55% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 504,
        "notes": [
          "31% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 433,
        "notes": [
          "27% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "switch_sell_in",
        "label": "Switch Sell-In",
        "value": "18000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "18M",
        "basis": "unspecified",
        "notes": [
          "(22%) Y/Y"
        ],
        "quote": "Switch Sell-In\n18M units\n(22%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            747,
            303,
            150
          ]
        }
      },
      {
        "id": "digital_sales",
        "label": "Digital sales",
        "value": "405",
        "unit": "B",
        "currency": "JPY",
        "comparison": "eq",
        "literal": "¥405B",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Digital sales\n¥405B +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            734,
            1106,
            270,
            113
          ]
        }
      }
    ],
    "notes": [
      "Source title states FY23; the period stamp states Q4 FY23, ending Mar. 2023. Amounts retain source rounding: revenue items sum to ¥1,602B versus ¥1,601B total; revenue less cost of sales is ¥885B versus ¥886B gross profit; gross profit less operating expenses is ¥505B versus ¥504B operating profit; operating profit plus Other less tax is ¥432B versus ¥433B net profit."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "switch",
              "label": "任天堂 Switch",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "other_consoles",
              "label": "其他主机",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "playing_cards",
              "label": "扑克牌",
              "notes": [
                "同比 +107%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": []
              },
              {
                "id": "advertising",
                "label": "广告",
                "notes": []
              },
              {
                "id": "other_sga",
                "label": "其他 SG&A",
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
              "id": "other_income",
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
              "利润率 55%",
              "同比 (1pp)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 31%",
              "同比 (4pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 (1pp)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "switch_sell_in",
            "label": "Switch 出货量",
            "notes": [
              "同比 (22%)"
            ]
          },
          {
            "id": "digital_sales",
            "label": "数字销售额",
            "notes": [
              "同比 +13%"
            ]
          }
        ],
        "period": "2023 财年",
        "periodNote": "截至 2023 年 3 月",
        "notes": [
          "原图标题为 FY23，期间标记为 Q4 FY23，截至 2023 年 3 月。保留原图取整：收入分项 ¥1,602B，总额 ¥1,601B；收入减销售成本为 ¥885B，毛利润为 ¥886B；毛利润减营业费用为 ¥505B，营业利润为 ¥504B；营业利润加其他收入减税费为 ¥432B，净利润为 ¥433B。"
        ]
      }
    }
  },
  {
    "key": "nintendo-fy24",
    "company": "Nintendo",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "JPY",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-fy24.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 1672,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Nintendo Switch",
          "value": 1568,
          "notes": [
            "+1% Y/Y"
          ],
          "children": [
            {
              "id": "software",
              "label": "Software",
              "value": 884,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 684,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 93,
          "notes": [
            "+82% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Playing cards",
          "value": 11,
          "notes": [
            "+100% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 718,
        "notes": []
      },
      "operatingExpenses": {
        "total": 425,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 183,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 138,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 104,
            "notes": [
              "6% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 190,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 152,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 152,
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
        "value": 954,
        "notes": [
          "57% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 529,
        "notes": [
          "32% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 491,
        "notes": [
          "29% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "hardware_units",
        "label": "Hardware units",
        "value": "15700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "15.7M",
        "basis": "unspecified",
        "notes": [
          "(13%) Y/Y"
        ],
        "quote": "Hardware units\n15.7M units\n(13%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            143,
            888,
            177,
            111
          ]
        }
      },
      {
        "id": "digital_share",
        "label": "Digital share",
        "value": "50",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "50%",
        "basis": "unspecified",
        "notes": [
          "+2pp Y/Y"
        ],
        "quote": "Digital share\n50%\n+2pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            154,
            526,
            156,
            116
          ]
        }
      }
    ],
    "notes": [],
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "dedicated_video_game_platform",
              "label": "任天堂 Switch",
              "notes": [
                "同比 +1%"
              ],
              "children": [
                {
                  "id": "software",
                  "label": "软件",
                  "notes": [
                    "同比 +5%"
                  ]
                },
                {
                  "id": "hardware",
                  "label": "硬件",
                  "notes": [
                    "同比 (3%)"
                  ]
                }
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关",
              "notes": [
                "同比 +82%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "扑克牌",
              "notes": [
                "同比 +100%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他 SG&A",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "advertising",
                "label": "广告",
                "notes": [
                  "占收入 6%"
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
              "id": "other_income",
              "label": "其他",
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
              "利润率 57%",
              "同比 +2pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +0pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 +2pp"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "hardware_units",
            "label": "硬件销量",
            "notes": [
              "同比 (13%)"
            ]
          },
          {
            "id": "digital_share",
            "label": "数字版占比",
            "notes": [
              "同比 +2pp"
            ]
          }
        ],
        "notes": []
      }
    }
  },
  {
    "key": "nintendo-h1-fy24",
    "company": "Nintendo",
    "period": "H1 FY24",
    "periodNote": "Ending Sep. 2023",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-h1-fy24.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 796,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "switch",
          "label": "Nintendo Switch",
          "value": 723,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other_consoles",
          "label": "Other consoles",
          "value": 13,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 55,
          "notes": [
            "+134% Y/Y"
          ]
        },
        {
          "id": "playing_cards",
          "label": "Playing cards",
          "value": 4,
          "notes": [
            "+132% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 324,
        "notes": []
      },
      "operatingExpenses": {
        "total": 192,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 88,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 59,
            "notes": []
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 44,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 109,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 100,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 100,
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
        "value": 472,
        "notes": [
          "59% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 280,
        "notes": [
          "35% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 271,
        "notes": [
          "34% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "sell_in",
        "label": "Sell-In",
        "value": "18000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "18M",
        "basis": "unspecified",
        "notes": [
          "(22%) Y/Y"
        ],
        "quote": "Sell-In\n18M units\n(22%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            105,
            689,
            202,
            141
          ]
        }
      },
      {
        "id": "digital_sales",
        "label": "Digital sales",
        "value": "217",
        "unit": "B",
        "currency": "JPY",
        "comparison": "eq",
        "literal": "¥217B",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Digital sales\n¥217B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            725,
            1049,
            277,
            152
          ]
        }
      }
    ],
    "notes": [
      "Source-rounded revenue components sum to ¥795B versus ¥796B total; operating expense components sum to ¥191B versus ¥192B."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年上半年",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "switch",
              "label": "任天堂 Switch"
            },
            {
              "id": "other_consoles",
              "label": "其他主机"
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关"
            },
            {
              "id": "playing_cards",
              "label": "扑克牌"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他销售及管理费用"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "advertising",
                "label": "广告"
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "sell_in",
            "label": "渠道销量"
          },
          {
            "id": "digital_sales",
            "label": "数字销售额"
          }
        ]
      }
    }
  },
  {
    "key": "nintendo-h1-fy25",
    "company": "Nintendo",
    "period": "H1 FY25",
    "periodNote": "Ending Sep. 2024",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-h1-fy25.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 523,
      "notes": [
        "(34%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Nintendo Switch",
          "value": 485,
          "notes": [
            "(34%) Y/Y"
          ],
          "children": [
            {
              "id": "software",
              "label": "Software",
              "value": 284,
              "notes": [
                "(34%) Y/Y"
              ]
            },
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 201,
              "notes": [
                "(34%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 31,
          "notes": [
            "(43%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 7,
          "notes": [
            "+55% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 205,
        "notes": []
      },
      "operatingExpenses": {
        "total": 196,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 92,
            "notes": [
              "18% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 69,
            "notes": [
              "13% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 36,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 38,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 26,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 26,
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
        "value": 318,
        "notes": [
          "61% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 122,
        "notes": [
          "23% margin",
          "(12pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 109,
        "notes": [
          "21% margin",
          "(13pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "software_units",
        "label": "Software units",
        "value": "70000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "70M",
        "basis": "unspecified",
        "notes": [
          "(28%) Y/Y"
        ],
        "quote": "Software units\n70M\n(28%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            525,
            156,
            81
          ]
        }
      },
      {
        "id": "hardware_units",
        "label": "Hardware units",
        "value": "4700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4.7M",
        "basis": "unspecified",
        "notes": [
          "(31%) Y/Y"
        ],
        "quote": "Hardware units\n4.7M\n(31%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            965,
            163,
            74
          ]
        }
      },
      {
        "id": "digital_share",
        "label": "Digital share",
        "value": "56",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "56%",
        "basis": "unspecified",
        "notes": [
          "+6pp Y/Y"
        ],
        "quote": "Digital share\n56%\n+6pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            603,
            161,
            72
          ]
        }
      }
    ],
    "notes": [
      "Source rounded to ¥1B: operating expense components total ¥197B versus ¥196B; operating profit plus Other less tax totals ¥110B versus ¥109B net profit."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年上半年",
        "periodNote": "截至 2024 年 9 月",
        "notes": [
          "原图金额按 ¥1B 取整：营业费用分项合计 ¥197B，总额为 ¥196B；营业利润加其他收入减税费为 ¥110B，净利润显示 ¥109B。"
        ],
        "revenue": {
          "items": [
            {
              "id": "dedicated_video_game_platform",
              "label": "任天堂 Switch",
              "notes": [
                "同比 -34%"
              ],
              "children": [
                {
                  "id": "software",
                  "label": "软件",
                  "notes": [
                    "同比 -34%"
                  ]
                },
                {
                  "id": "hardware",
                  "label": "硬件",
                  "notes": [
                    "同比 -34%"
                  ]
                }
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关",
              "notes": [
                "同比 -43%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +55%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他 SG&A",
                "notes": [
                  "占收入 18%",
                  "同比 +7pp"
                ]
              },
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": [
                  "占收入 13%",
                  "同比 +6pp"
                ]
              },
              {
                "id": "advertising",
                "label": "广告",
                "notes": [
                  "占收入 7%",
                  "同比 +1pp"
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
              "id": "other_income",
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
              "利润率 61%",
              "同比 +1pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 -12pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 -13pp"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "software_units",
            "label": "软件销量",
            "notes": [
              "同比 -28%"
            ]
          },
          {
            "id": "hardware_units",
            "label": "硬件销量",
            "notes": [
              "同比 -31%"
            ]
          },
          {
            "id": "digital_share",
            "label": "数字版占比",
            "notes": [
              "同比 +6pp"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "nintendo-q1-fy25",
    "company": "Nintendo",
    "period": "Q1 FY25",
    "periodNote": "Ending Jun. 2024",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/nintendo-q1-fy25.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 247,
      "notes": [
        "(47%) Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Nintendo Switch",
          "value": 229,
          "notes": [
            "(46%) Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 92,
              "notes": [
                "(47%) Y/Y",
                "2.1M units",
                "(46%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 137,
              "notes": [
                "(46%) Y/Y",
                "30.6M units",
                "(41%) Y/Y",
                "59% Digital",
                "+12pp Y/Y"
              ]
            }
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 15,
          "notes": [
            "(54%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 3,
          "notes": [
            "+43% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 94,
        "notes": []
      },
      "operatingExpenses": {
        "total": 98,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 46,
            "notes": [
              "19% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 35,
            "notes": [
              "14% of revenue",
              "+8pp Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 17,
            "notes": [
              "7% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 32,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 59,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 59,
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
        "value": 153,
        "notes": [
          "62% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 55,
        "notes": [
          "22% margin",
          "(18pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 81,
        "notes": [
          "13% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "software_units",
        "label": "Software units",
        "value": "30600000",
        "unit": "count",
        "literal": "30.6M",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(41%) Y/Y"
        ],
        "quote": "Software units\n30.6M units\n(41%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            151,
            522,
            156,
            72
          ]
        }
      },
      {
        "id": "hardware_units",
        "label": "Hardware units",
        "value": "2100000",
        "unit": "count",
        "literal": "2.1M",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(46%) Y/Y"
        ],
        "quote": "Hardware units\n2.1M units\n(46%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            155,
            966,
            154,
            70
          ]
        }
      },
      {
        "id": "digital_share",
        "label": "Digital share",
        "value": "59",
        "unit": "%",
        "literal": "59%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12pp Y/Y"
        ],
        "quote": "Digital share\n59%\n+12pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            152,
            599,
            159,
            74
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 -47%"
          ],
          "items": [
            {
              "id": "dedicated_video_game_platform",
              "label": "任天堂 Switch",
              "notes": [
                "同比 -46%"
              ],
              "children": [
                {
                  "id": "hardware",
                  "label": "硬件",
                  "notes": [
                    "同比 -47%",
                    "2.1M 台/份",
                    "同比 -46%"
                  ]
                },
                {
                  "id": "software",
                  "label": "软件",
                  "notes": [
                    "同比 -46%",
                    "30.6M 台/份",
                    "同比 -41%",
                    "数字化占比 59%",
                    "同比 +12 个百分点"
                  ]
                }
              ]
            },
            {
              "id": "mobile_ip",
              "label": "移动与 IP 相关",
              "notes": [
                "同比 -54%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +43%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_sga",
                "label": "其他 SG&A",
                "notes": [
                  "占收入 19%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": [
                  "占收入 14%",
                  "同比 +8 个百分点"
                ]
              },
              {
                "id": "advertising",
                "label": "广告费用",
                "notes": [
                  "占收入 7%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税项",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
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
              "利润率 62%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 -18 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 -6 个百分点"
            ]
          }
        },
        "periodNote": "截至 2024 年 6 月",
        "operatingMetrics": [
          {
            "id": "software_units",
            "label": "软件销量",
            "notes": [
              "同比 -41%"
            ]
          },
          {
            "id": "hardware_units",
            "label": "硬件销量",
            "notes": [
              "同比 -46%"
            ]
          },
          {
            "id": "digital_share",
            "label": "数字化占比",
            "notes": [
              "同比 +12 个百分点"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "nintendo-q1-fy26",
    "company": "Nintendo",
    "period": "Q1 FY26",
    "periodNote": "Ending June 2025",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processing/nintendo-q1-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 572,
      "notes": [
        "+132% Y/Y"
      ],
      "items": [
        {
          "id": "dedicated_video_game_platform",
          "label": "Dedicated video game platform",
          "value": 556,
          "notes": [
            "+143% Y/Y"
          ],
          "children": [
            {
              "id": "hardware",
              "label": "Hardware",
              "value": 438,
              "notes": [
                "+375% Y/Y",
                "Switch 2: 6M units",
                "Switch 1: 1M units, (54%) Y/Y"
              ]
            },
            {
              "id": "software",
              "label": "Software",
              "value": 118,
              "notes": [
                "(14%) Y/Y",
                "33M units",
                "+8% Y/Y",
                "59% Digital"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 17,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 387
      },
      "operatingExpenses": {
        "total": 128,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 52,
            "notes": [
              "9% of revenue",
              "(10pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 39,
            "notes": [
              "7% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 37,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 39,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 39
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
        "value": 185,
        "notes": [
          "32% margin",
          "(29pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 57,
        "notes": [
          "10% margin",
          "(12pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 96,
        "notes": [
          "17% margin",
          "(16pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +132%"
          ],
          "items": [
            {
              "label": "专用游戏平台",
              "notes": [
                "同比 +143%"
              ],
              "children": [
                {
                  "label": "硬件",
                  "notes": [
                    "同比 +375%",
                    "Switch 2：600 万台",
                    "Switch 1：100 万台， 同比 (54%)"
                  ]
                },
                {
                  "label": "软件",
                  "notes": [
                    "同比 (14%)",
                    "3,300 万套",
                    "同比 +8%",
                    "数字版占 59%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 (5%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他销售及管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (10 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "label": "广告",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "其他"
            }
          ]
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 (29 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (12 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 (16 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "nintendo-q3-fy23",
    "company": "Nintendo",
    "period": "Q3 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processing/nintendo-q3-fy23.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 638,
      "notes": [
        "(8%) Y/Y"
      ],
      "items": [
        {
          "id": "switch",
          "label": "Nintendo Switch",
          "value": 614,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "other_consoles",
          "label": "Other consoles",
          "value": 6,
          "notes": [
            "(48%) Y/Y"
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 15,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "playing_cards",
          "label": "Playing cards",
          "value": 2,
          "notes": [
            "+144% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 332,
        "notes": []
      },
      "operatingExpenses": {
        "total": 116,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 27,
            "notes": []
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 37,
            "notes": []
          },
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 52,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 44,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 30,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 30,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 306,
        "notes": [
          "48% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 190,
        "notes": [
          "30% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 116,
        "notes": [
          "18% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "switch-units",
        "label": "Switch Sell-In",
        "value": "8200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "8.2M",
        "basis": "unspecified",
        "notes": [
          "(23%) Y/Y"
        ],
        "quote": "Switch Sell-In 8.2M units (23%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            747,
            303,
            150
          ]
        }
      },
      {
        "id": "digital-sales",
        "label": "Digital sales",
        "value": "122",
        "unit": "B",
        "currency": "JPY",
        "comparison": "eq",
        "literal": "¥122B",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Digital sales ¥122B +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            686,
            1125,
            341,
            90
          ]
        }
      }
    ],
    "notes": [
      "Source rounds to ¥1B: revenue items sum to ¥637B versus ¥638B total."
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "items": [
            {
              "label": "任天堂 Switch",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "label": "其他主机",
              "notes": [
                "同比 (48%)"
              ]
            },
            {
              "label": "移动业务与 IP 相关收入",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "label": "纸牌",
              "notes": [
                "同比 +144%"
              ]
            }
          ],
          "notes": [
            "同比 (8%)"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "研发",
                "notes": []
              },
              {
                "label": "广告",
                "notes": []
              },
              {
                "label": "其他 SG&A",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 (4pp)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 (6pp)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 (10pp)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "label": "其他",
              "notes": []
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "switch-units",
            "label": "Switch 销量",
            "notes": [
              "同比 (23%)"
            ]
          },
          {
            "id": "digital-sales",
            "label": "数字销售额",
            "notes": [
              "同比 +10%"
            ]
          }
        ],
        "notes": [
          "原图金额取整至 ¥1B：收入分项合计 ¥637B，总收入为 ¥638B。"
        ]
      }
    }
  },
  {
    "key": "nintendo-q3-fy24",
    "company": "Nintendo",
    "period": "Q3 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processing/nintendo-q3-fy24.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 623,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "switch",
          "label": "Nintendo Switch",
          "value": 588,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "other_consoles",
          "label": "Other consoles",
          "value": 11,
          "notes": [
            "+75% Y/Y"
          ]
        },
        {
          "id": "mobile_ip",
          "label": "Mobile & IP related",
          "value": 20,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "playing_cards",
          "label": "Playing cards",
          "value": 4,
          "notes": [
            "+86% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 317,
        "notes": []
      },
      "operatingExpenses": {
        "total": 122,
        "items": [
          {
            "id": "other_sga",
            "label": "Other SG&A",
            "value": 49,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 33,
            "notes": []
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 39,
            "notes": []
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
      "total": 3,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 3,
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
        "value": 306,
        "notes": [
          "49% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 185,
        "notes": [
          "30% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 137,
        "notes": [
          "22% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "sell_in",
        "label": "Sell-In",
        "value": "7000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "7M",
        "basis": "unspecified",
        "notes": [
          "(16%) Y/Y"
        ],
        "quote": "Sell-In\n7M units\n(16%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            105,
            690,
            202,
            140
          ]
        }
      },
      {
        "id": "digital_sales",
        "label": "Digital sales",
        "value": "129",
        "unit": "B",
        "currency": "JPY",
        "comparison": "eq",
        "literal": "¥129B",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Digital sales\n¥129B\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            727,
            1050,
            272,
            147
          ]
        }
      }
    ],
    "notes": [
      "Source rounded to ¥1B: gross profit minus operating expenses is ¥184B versus ¥185B operating profit; operating expense items sum to ¥121B versus ¥122B total; operating profit plus Other less tax is ¥138B versus ¥137B net profit."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "label": "任天堂 Switch",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "label": "其他游戏机",
              "notes": [
                "同比 +75%"
              ]
            },
            {
              "label": "移动与 IP 相关",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "label": "扑克牌",
              "notes": [
                "同比 +86%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "其他 SG&A",
                "notes": []
              },
              {
                "label": "研发（R&D）",
                "notes": []
              },
              {
                "label": "广告",
                "notes": []
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
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 49%",
              "同比 +3pp"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +1pp"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +4pp"
            ]
          }
        },
        "operatingMetrics": [
          {
            "label": "出货销量",
            "notes": [
              "同比 (16%)"
            ]
          },
          {
            "label": "数字销售额",
            "notes": [
              "同比 +5%"
            ]
          }
        ],
        "notes": [
          "原图金额取整至 ¥1B：毛利润减运营费用为 ¥184B，图示营业利润为 ¥185B；费用分项合计 ¥121B，总额为 ¥122B；营业利润加其他收入减税费为 ¥138B，图示净利润为 ¥137B。"
        ]
      }
    }
  }
]);
})(window);
