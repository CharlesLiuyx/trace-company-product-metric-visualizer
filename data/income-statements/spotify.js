/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "spotify-q1-fy26",
    "company": "Spotify",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.5,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 4.1,
          "notes": [
            "+10% Y/Y",
            "35% gross margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.4,
          "notes": [
            "(5%) Y/Y",
            "13% gross margin",
            "(1pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3
      },
      "operatingExpenses": {
        "total": 0.8,
        "notes": [
          "S&M, R&D, and G&A sum to €0.7B due to source chart rounding."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "7% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
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
        "value": 0.2
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 1.5,
        "notes": [
          "33% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "16% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "16% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +10%",
                "毛利率 35%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 (5%)",
                "毛利率 13%",
                "同比 (1 个百分点)"
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
              "由于来源图四舍五入，销售与市场、研发和管理费用合计为 €0.7B。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "spotify-q3-fy25",
    "company": "Spotify",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "+7% Y/Y",
        "Spotify Premium and Spotify Advertising sum to €4.2B because the source rounds each component independently."
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3.8,
          "notes": [
            "+9% Y/Y",
            "33% gross margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.4,
          "notes": [
            "(6%) Y/Y",
            "18% gross margin",
            "+5pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.9
      },
      "operatingExpenses": {
        "total": 0.8,
        "notes": [
          "Sales & Marketing, R&D, and General & Admin sum to €0.7B because the source rounds each component independently."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax expense",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 0.1
        },
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 1.4,
        "notes": [
          "32% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "14% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "21% margin",
          "+14pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +7%",
            "由于来源图分别四舍五入，Spotify Premium 与 Spotify Advertising 合计为 €4.2B。"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +9%",
                "毛利率 33%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 (6%)",
                "毛利率 18%",
                "同比 +5 个百分点"
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
              "由于来源图分别四舍五入，销售与市场、研发和一般及行政费用合计为 €0.7B。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 8%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 3%",
                  "同比 (0 个百分点)"
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
              "id": "tax_benefit",
              "label": "税收收益"
            },
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
              "利润率 32%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +14 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "spotify-q4-fy25",
    "company": "Spotify",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.5,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 4,
          "notes": [
            "+8% Y/Y",
            "35% gross margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.5,
          "notes": [
            "(4%) Y/Y",
            "19% gross margin",
            "+4pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3
      },
      "operatingExpenses": {
        "total": 0.8,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax expense",
        "value": 0
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 0.2
        },
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 1.5,
        "notes": [
          "33% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "15% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "26% margin",
          "+17pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +8%",
                "毛利率 35%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 (4%)",
                "毛利率 19%",
                "同比 +4 个百分点"
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
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 3%",
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
              "id": "tax_benefit",
              "label": "税收收益"
            },
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
              "利润率 33%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +17 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "spotify-q2-fy26",
    "company": "Spotify",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/spotify-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.8,
      "notes": [
        "+14% Y/Y",
        "Components sum to €4.7B due to independently rounded Source values."
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 4.3,
          "notes": [
            "+15% Y/Y",
            "35% gross margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.4,
          "notes": [
            "+1% Y/Y",
            "19% gross margin",
            "+2pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.2
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.1,
            "notes": [
              "3% of revenue",
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
      "total": 0.065,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.065,
          "notes": [
            "Source $0.2B corrected with user approval to EUR 65M net finance income, per Spotify Q2 2026 Update."
          ]
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
          "33% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "14% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "11% margin",
          "+13pp Y/Y",
          "User approved EUR currency correction; Source rounded value retained."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +14%",
            "来源分项分别舍入，合计为 €4.7B。"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +15%",
                "毛利率 35%",
                "同比 +2 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +1%",
                "毛利率 19%",
                "同比 +2 个百分点"
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
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 3%",
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
              "id": "interest",
              "label": "利息",
              "notes": [
                "经用户批准，按 Spotify 官方 Q2 2026 财报将原图 $0.2B 更正为净财务收益 €65M。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +13 个百分点",
              "经用户批准改用欧元，保留原图舍入值。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "ad_supported_mau",
            "label": "广告支持 MAU",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "777000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "777M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "MAU\n777M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1176,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subscribers",
        "label": "Premium Subs",
        "value": "300000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "300M",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Premium Subs\n300M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1176,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_mau",
        "label": "Ad-supported MAUs",
        "value": "494000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "494M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Ad-supported MAUs\n494M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            597,
            1176,
            382,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "spotify-q1-fy25",
    "company": "Spotify",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/spotify-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.2,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3.8,
          "notes": [
            "+16% Y/Y",
            "33% gross margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.4,
          "notes": [
            "+8% Y/Y",
            "15% gross margin",
            "+1pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.9
      },
      "operatingExpenses": {
        "total": 0.8,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.3,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": [
          "Source displays ($0.1B)."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.2,
          "notes": [
            "Source displays ($0.2B)."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "32% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "12% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "5% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +16%",
                "毛利率 33%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +8%",
                "毛利率 15%",
                "同比 +1 个百分点"
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
                  "占收入 9%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 3%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": [
              "原图标示 ($0.1B)。"
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "financial",
              "label": "财务费用",
              "notes": [
                "原图标示 ($0.2B)。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "premium_subs",
            "label": "付费订阅",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "ad_supported_maus",
            "label": "广告支持 MAU",
            "notes": [
              "同比 +9%"
            ]
          }
        ],
        "period": "2025 财年第一季度",
        "periodNote": ""
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "678000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "678M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "MAU\n678M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1163,
            211,
            150
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "268000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "268M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Premium Subs\n268M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1163,
            331,
            150
          ]
        }
      },
      {
        "id": "ad_supported_maus",
        "label": "Ad-supported MAUs",
        "value": "423000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "423M",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Ad-supported MAUs\n423M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1163,
            380,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "spotify-q4-fy24",
    "company": "Spotify",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/spotify-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.2,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3.7,
          "notes": [
            "+17% Y/Y",
            "35% gross margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.5,
          "notes": [
            "+7% Y/Y",
            "15% gross margin",
            "+4pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.9
      },
      "operatingExpenses": {
        "total": 0.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
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
        "value": 0.1,
        "valueText": "($0.1B)",
        "notes": [
          "Source displays tax in dollars within a euro-denominated statement; no currency conversion is inferred."
        ]
      }
    },
    "otherIncome": {
      "total": 0.022,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.022,
          "valueText": "$22M",
          "notes": [
            "Source displays $22M; dollar marker preserved without inferred conversion."
          ]
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
          "32% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "11% margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "9% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "675000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "675M",
        "quote": "MAU\n675M\n+12% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1163,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subscribers",
        "label": "Premium Subs",
        "value": "263000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "263M",
        "quote": "Premium Subs\n263M\n+11% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1163,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_mau",
        "label": "Ad-supported MAUs",
        "value": "425000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "425M",
        "quote": "Ad-supported MAUs\n425M\n+12% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1163,
            379,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +17%",
                "毛利率 35%",
                "同比 +6 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +7%",
                "毛利率 15%",
                "同比 +4 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入 成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与 市场营销",
                "notes": [
                  "占收入 9%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 3%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源在欧元利润表中以美元显示税费；未推断汇率换算。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": [
                "来源显示 $22M；保留美元符号，未推断换算。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +11 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "ad_supported_mau",
            "label": "广告支持 MAU",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
