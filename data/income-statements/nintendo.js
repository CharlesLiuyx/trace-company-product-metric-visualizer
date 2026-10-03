(function(g){const s=g.INCOME_STATEMENT_SSOT=g.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};s.records.push(...[
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
  }
]);})(window);
