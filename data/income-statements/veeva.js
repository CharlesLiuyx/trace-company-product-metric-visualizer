/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "veeva-q4-fy26",
    "company": "Veeva Systems",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 836,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 708,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 327,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 381,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 128,
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
        "value": 213
      },
      "operatingExpenses": {
        "total": 377,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 199,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 110,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 68,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 73
      }
    },
    "otherIncome": {
      "total": 72,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 72
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
        "value": 622,
        "notes": [
          "74% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 246,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 244,
        "notes": [
          "29% margin",
          "+2pp Y/Y",
          "Operating profit plus other income less tax sums to $245M; the source chart reports $244M net profit due to rounded line items."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
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
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
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
    "key": "veeva-q3-fy26",
    "company": "Veeva Systems",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 811,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 683,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 318,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 365,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 129,
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
        "value": 200
      },
      "operatingExpenses": {
        "total": 371,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 192,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 111,
            "notes": [
              "14% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 69,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 77
      }
    },
    "otherIncome": {
      "total": 72,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 72
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
        "value": 612,
        "notes": [
          "75% margin",
          "+0pp Y/Y",
          "Gross profit plus cost of revenue sums to $812M; the source chart reports $811M revenue due to rounded line items."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 241,
        "notes": [
          "30% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 236,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      }
    },
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
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "利润率 30%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "veeva-q1-fy27",
    "company": "Veeva Systems",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 883,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 730,
          "notes": [
            "+15% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 338,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 392,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 153,
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
        "value": 221
      },
      "operatingExpenses": {
        "total": 389,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 208,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 111,
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 70,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 87
      }
    },
    "otherIncome": {
      "total": 74,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 74
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
        "value": 662,
        "notes": [
          "75% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 273,
        "notes": [
          "31% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 261,
        "notes": [
          "30% margin",
          "(1pp) Y/Y",
          "Operating profit plus other income less tax sums to $260M; the source chart reports $261M net profit due to rounded line items."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +15%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 31%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 30%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "veeva-q2-fy27",
    "company": "Veeva Systems",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q2-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 928,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 767,
          "notes": [
            "+16% Y/Y",
            "Commercial and R&D solutions sum to $766M; source reports subscription $767M."
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 347,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 419,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 161,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 232
      },
      "operatingExpenses": {
        "total": 421,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 223,
            "notes": [
              "24% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 127,
            "notes": [
              "14% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 71,
            "notes": [
              "8% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 76
      }
    },
    "otherIncome": {
      "total": 75,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 75
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
          "75% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 275,
        "notes": [
          "30% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 274,
        "notes": [
          "29% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%",
                "商业化与研发解决方案合计 $766M，原图订阅收入为 $767M。"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +24%"
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
                  "占收入 24%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (4 个百分点)"
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
              "利润率 75%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 +4 个百分点"
            ]
          }
        },
        "notes": [
          "原图标题为 Q2 FY27，右上角为 Q2 FY26，保留原文。"
        ]
      }
    },
    "notes": [
      "Source title says Q2 FY27; top-right stamp says Q2 FY26. Both retained without correction."
    ]
  },
  {
    "key": "veeva-q3-fy25",
    "company": "Veeva Systems",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 699,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 581,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 278,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 303,
              "notes": [
                "+24% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 118,
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
        "value": 174,
        "notes": []
      },
      "operatingExpenses": {
        "total": 344,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 172,
            "notes": [
              "25% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 99,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 72,
            "notes": [
              "10% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 57,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 61,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 61,
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
        "value": 525,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 181,
        "notes": [
          "26% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 186,
        "notes": [
          "27% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月"
      }
    },
    "notes": [
      "Source printed amounts retained. Rounded component sums differ by $1M for operating expenses and net income. Source R&D solutions $303M, operating expenses $344M and tax $57M differ from conventional rounding of issuer figures; no numerical correction made. Issuer: https://ir.veeva.com/news/news-details/2024/Veeva-Announces-Fiscal-2025-Third-Quarter-Results/default.aspx"
    ]
  },
  {
    "key": "veeva-q1-fy25",
    "company": "Veeva Systems",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 650,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 534,
          "notes": [
            "+29% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 261,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 273,
              "notes": [
                "+56% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 116,
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
        "value": 174,
        "notes": []
      },
      "operatingExpenses": {
        "total": 321,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 163,
            "notes": [
              "25% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 97,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 61,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 45,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 52,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 52,
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
        "value": 476,
        "notes": [
          "73% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 155,
        "notes": [
          "24% margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 162,
        "notes": [
          "25% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +29%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": [
                    "商业化",
                    "解决方案"
                  ],
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": [
                    "研发",
                    "解决方案"
                  ],
                  "notes": [
                    "同比 +56%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +4%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
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
              "id": "other",
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
              "利润率 73%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "veeva-q4-fy25",
    "company": "Veeva Systems",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 721,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 609,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 293,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 315,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 112,
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
        "value": 181
      },
      "operatingExpenses": {
        "total": 352,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 182,
            "notes": [
              "25% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 99,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 71,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
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
      "total": 57,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 57,
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
        "value": 540,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 188,
        "notes": [
          "26% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 196,
        "notes": [
          "27% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "Source printed rounding: $315M + $293M = $608M versus Subscription $609M; $188M + $57M − $50M = $195M versus Net profit $196M. Retained all printed values with roundingTolerance 1.1M. Official release reports subscription $608.6M and net income $195.6M. https://www.veeva.com/resources/veeva-announces-fourth-quarter-and-fiscal-year-2025-results/"
    ]
  },
  {
    "key": "veeva-q2-fy26",
    "company": "Veeva Systems",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 789,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 659,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 308,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 352,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 130,
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
        "value": 195
      },
      "operatingExpenses": {
        "total": 398,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 193,
            "notes": [
              "24% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 109,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "12% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 65
      }
    },
    "otherIncome": {
      "total": 70,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 70
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
        "value": 594,
        "notes": [
          "75% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 196,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 200,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
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
              "id": "other",
              "label": "其他"
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
              "利润率 25%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    },
    "notes": [
      "Printed commercial $308M plus R&D $352M totals $660M versus subscription $659M; rounded official values 307.523 + 351.660 = 659.183M explain the difference. Printed operating profit $196M plus Other $70M less tax $65M totals $201M versus net $200M. Official Other is $69.456M; preserve source $70M as requested. Official results: https://ir.veeva.com/news/news-details/2025/Veeva-Announces-Fiscal-2026-Second-Quarter-Results/default.aspx"
    ]
  },
  {
    "key": "veeva-q3-fy23",
    "company": "Veeva Systems",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 552,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 442,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 230,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 212,
              "notes": [
                "+26% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 111,
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
        "value": 154
      },
      "operatingExpenses": {
        "total": 277,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 130,
            "notes": [
              "24% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 94,
            "notes": [
              "17% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 53,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 25
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
        "value": 398,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 121,
        "notes": [
          "22% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 109,
        "notes": [
          "20% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "notes": [
      "Printed subscription $442M plus services $111M totals $553M versus printed revenue $552M; retain printed values with $1.1M rounding tolerance. Official release reports $441.569M + $110.782M = $552.351M.",
      "Source subscription split $230M Commercial / $212M R&D differs from official $239.276M / $202.293M. Preserve printed split: multiple discrepancies do not uniquely identify a balancing correction.",
      "Source Other $13M differs from official other income net $12.458M; net profit $109M differs from official $108.457M. Printed values retained under operator instruction.",
      "Official source: https://ir.veeva.com/news/news-details/2022/Veeva-Announces-Fiscal-2023-Third-Quarter-Results/default.aspx"
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +26%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +17%"
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
                  "占收入 24%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
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
              "id": "other",
              "label": "其他"
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
              "利润率 72%",
              "同比 (1 个百分点)"
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
              "利润率 20%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "veeva-q1-fy24",
    "company": "Veeva Systems",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 526,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 415,
          "notes": [
            "+3% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 239,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 175,
              "notes": [
                "+0% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 112,
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
        "value": 167,
        "notes": []
      },
      "operatingExpenses": {
        "total": 298,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 147,
            "notes": [
              "28% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 89,
            "notes": [
              "17% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 63,
            "notes": [
              "12% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source separately shows a positive $40M tax benefit, included in otherIncome.items as tax_benefit."
        ]
      }
    },
    "otherIncome": {
      "total": 70,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 30,
          "notes": []
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 40
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
        "value": 360,
        "notes": [
          "68% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 62,
        "notes": [
          "12% margin",
          "(14pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 132,
        "notes": [
          "25% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "notes": [
      "Printed amounts retained. $1M rounding differences occur in subscription children, total revenue, gross profit and operating expense items. Official release confirms underlying unrounded amounts: https://www.veeva.com/resources/veeva-announces-fiscal-2024-first-quarter-results/"
    ],
    "i18n": {
      "zh": {
        "notes": [
          "保留图中印刷金额。订阅子项、收入总额、毛利润及运营费用子项存在 $1M 舍入差异；已核对 Veeva 官方季报。"
        ],
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +3%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +5%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +0%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +9%"
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
                  "占收入 28%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图另列正向税收收益 $40M，已计入其他收益。"
            ]
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
              "id": "tax_benefit",
              "label": "税收收益"
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
              "利润率 68%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (14 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +5 个百分点"
            ]
          }
        },
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月"
      }
    }
  },
  {
    "key": "veeva-q4-fy24",
    "company": "Veeva Systems",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 631,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 522,
          "notes": [
            "+13% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 262,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 260,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 109,
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
        "value": 174,
        "notes": []
      },
      "operatingExpenses": {
        "total": 321,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 164,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 99,
            "notes": [
              "16% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 59,
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
        "value": 35,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 47,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 47,
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
        "value": 457,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 135,
        "notes": [
          "21% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 147,
        "notes": [
          "23% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "notes": [
      "Printed subscription $522M retained (release $521.498M). Printed gross $457M less operating expenses $321M differs from operating profit $135M by $1M; expense items sum to $322M vs total $321M. Preserve printed rounded values. Tax corrected from $36M to $35M using company earnings release ($35.295M)."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +13%"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%"
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
                  "占收入 26%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
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
              "利润率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 (10 个百分点)"
            ]
          }
        },
        "notes": [
          "保留原图订阅收入 $522M（财报为 $521.498M）。原图毛利润 $457M 减营业费用 $321M，与营业利润 $135M 相差 $1M；费用明细合计 $322M，总额为 $321M。依据公司财报（$35.295M），税费由 $36M 更正为 $35M。"
        ]
      }
    }
  },
  {
    "key": "veeva-q1-fy26",
    "company": "Veeva Systems",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 759,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 635,
          "notes": [
            "+19% Y/Y",
            "Printed components $305M + $329M = $634M, versus $635M subscription. Preserve printed rounding."
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 305,
              "notes": [
                "+17% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 329,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 124,
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
        "value": 174
      },
      "operatingExpenses": {
        "total": 351,
        "notes": [
          "Printed expenses sum to $352M versus $351M total. Official filing: $351.487M; components $184.033M, $98.628M, $68.826M. Preserve source rounding."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 184,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 99,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 69,
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
        "value": 71
      }
    },
    "otherIncome": {
      "total": 65,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 65
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
        "value": 585,
        "notes": [
          "77% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 234,
        "notes": [
          "31% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 228,
        "notes": [
          "30% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "notes": [
      "Rounding differences retained as printed; authoritative reference: https://ir.veeva.com/news/news-details/2025/Veeva-Announces-Fiscal-2026-First-Quarter-Results/default.aspx"
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "notes": [
          "保留原图舍入差异；核对依据：https://ir.veeva.com/news/news-details/2025/Veeva-Announces-Fiscal-2026-First-Quarter-Results/default.aspx"
        ],
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +19%",
                "原图分项 $305M + $329M = $634M，订阅合计为 $635M。保留原图舍入值。"
              ],
              "children": [
                {
                  "id": "commercial",
                  "label": "商业化解决方案",
                  "notes": [
                    "同比 +17%"
                  ]
                },
                {
                  "id": "rnd_solutions",
                  "label": "研发解决方案",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +7%"
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
            "notes": [
              "原图费用分项合计 $352M，合计为 $351M。财报值为 $351.487M；分项为 $184.033M、$98.628M、$68.826M。保留原图舍入值。"
            ],
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
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
              "id": "other",
              "label": "其他"
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
              "毛利率 77%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "营业利润率 31%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "净利率 30%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "veeva-q2-fy24",
    "company": "Veeva Systems",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 590,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 471,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 243,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 227,
              "notes": [
                "+18% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 120,
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
        "value": 169
      },
      "operatingExpenses": {
        "total": 317,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 157,
            "notes": [
              "27% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 97,
            "notes": [
              "16% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 63,
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
        "value": 31
      }
    },
    "otherIncome": {
      "total": 39,
      "items": [
        {
          "id": "other",
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
        "value": 421,
        "notes": [
          "71% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 104,
        "notes": [
          "18% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 112,
        "notes": [
          "19% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月"
      }
    },
    "notes": [
      "Source rounding: commercial $243M + R&D $227M = $470M versus subscription $471M; subscription $471M + services $120M = $591M versus revenue $590M. Confirmed against Veeva fiscal 2024 Q2 release: https://www.veeva.com/resources/veeva-announces-fiscal-2024-second-quarter-results/"
    ]
  },
  {
    "key": "veeva-q2-fy25",
    "company": "Veeva Systems",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 676,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 561,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 272,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 290,
              "notes": [
                "+27% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 115,
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 170,
        "notes": []
      },
      "operatingExpenses": {
        "total": 339,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 176,
            "notes": [
              "26% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 102,
            "notes": [
              "15% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 61,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 54,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 59,
      "items": [
        {
          "id": "other",
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
        "value": 506,
        "notes": [
          "75% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 167,
        "notes": [
          "25% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 171,
        "notes": [
          "25% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "notes": [
      "Printed subscription components sum to $562M versus $561M total; printed net bridge sums to $172M versus $171M net. All printed values retained under existing $1.1M rounding tolerance. Official results: https://ir.veeva.com/news/news-details/2024/Veeva-Announces-Fiscal-2025-Second-Quarter-Results/default.aspx"
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月"
      }
    }
  },
  {
    "key": "veeva-q4-fy23",
    "company": "Veeva Systems",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/veeva-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 563,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 460,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "commercial",
              "label": "Commercial solutions",
              "value": 243,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "rnd_solutions",
              "label": "R&D solutions",
              "value": 217,
              "notes": [
                "+29% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 103,
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
        "value": 164
      },
      "operatingExpenses": {
        "total": 290,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 143,
            "notes": [
              "25% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 89,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 59,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax benefit",
        "value": -53
      }
    },
    "otherIncome": {
      "total": 26,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 26
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
        "value": 399,
        "notes": [
          "71% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 109,
        "notes": [
          "19% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 188,
        "notes": [
          "33% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月"
      }
    },
    "notes": [
      "Source operating expense items sum to $291M versus the $290M printed total. Veeva Q4 FY23 release reports R&D 142.538M, S&M 89.049M, G&A 58.565M and total 290.152M; retain printed integers with roundingTolerance 1.1M. https://www.veeva.com/resources/veeva-announces-fourth-quarter-and-fiscal-year-2023-results/"
    ]
  }
]);
})(window);
