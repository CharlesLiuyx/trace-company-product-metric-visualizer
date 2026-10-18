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
    "sourceImage": "input/processed/spotify-q1-fy25.png",
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
    "sourceImage": "input/processed/spotify-q4-fy24.png",
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
  },
  {
    "key": "spotify-q1-fy23",
    "company": "Spotify",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q1-fy23.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 3042,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 2713,
          "notes": [
            "+14% Y/Y",
            "29% gross margin"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 329,
          "notes": [
            "+17% Y/Y",
            "(3%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2276
      },
      "operatingExpenses": {
        "total": 922,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 435,
            "notes": [
              "14% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 347,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 140,
            "notes": [
              "5% of revenue",
              "(0%) Y/Y"
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
        "value": 766,
        "notes": [
          "25% margin",
          "Flat Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -156,
        "notes": [
          "(5%) margin",
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
        "value": "515000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "515M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "MAU\n515M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            211,
            150
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "210000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "210M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Premium Subs\n210M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1202,
            331,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "value": "317000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "317M",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "Ad-supported Subs\n317M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            380,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "items": [
            {
              "id": "premium",
              "label": "付费订阅"
            },
            {
              "id": "advertising",
              "label": "广告支持"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU"
          },
          {
            "id": "premium_subs",
            "label": "付费订阅用户"
          },
          {
            "id": "ad_supported_subs",
            "label": "广告支持用户"
          }
        ],
        "profit": {
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "spotify-q1-fy24",
    "company": "Spotify",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q1-fy24.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 3636,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3247,
          "notes": [
            "+20% Y/Y",
            "30% gross margin"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 389,
          "notes": [
            "+18% Y/Y",
            "6% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2632,
        "notes": []
      },
      "operatingExpenses": {
        "total": 836,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 389,
            "notes": [
              "11% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 324,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 123,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 29,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 6,
          "notes": []
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
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
        "value": 1004,
        "notes": [
          "28% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 168,
        "notes": [
          "5% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 197,
        "notes": [
          "5% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +20%",
                "毛利率 30%"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +18%",
                "毛利率 6%"
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
                  "占收入 11%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
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
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收益",
              "notes": []
            },
            {
              "id": "tax_benefit",
              "label": "税收收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +13 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "premium_subs",
            "label": "付费订阅",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "ad_supported_subs",
            "label": "广告支持订阅",
            "notes": [
              "同比 +22%"
            ]
          }
        ],
        "period": "2024 财年第一季度"
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "615000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "615M",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "MAU\n615M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            211,
            150
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "239000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "239M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Premium Subs\n239M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1202,
            331,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "value": "388000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "388M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Ad-supported Subs\n388M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            380,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "spotify-q2-fy23",
    "company": "Spotify",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3177,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 2773,
          "notes": [
            "+11% Y/Y",
            "28% gross margin"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 404,
          "notes": [
            "+12% Y/Y",
            "(6%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2411,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1013,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 453,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 399,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 161,
            "notes": [
              "5% of revenue",
              "(1%) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 766,
        "notes": [
          "24% margin",
          "(0.5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -247,
        "notes": [
          "(8%) margin",
          "(1pp) Y/Y"
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
        "value": "551000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "551M",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "MAU\n551M\n+27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "220000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "220M",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Premium Subs\n220M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1202,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "value": "343000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "343M",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "Ad-supported Subs\n343M\n+34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            379,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "付费订阅",
              "notes": [
                "同比 +11%",
                "毛利率 28%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告支持",
              "notes": [
                "同比 +12%",
                "毛利率 (6%)"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 5%",
                  "同比 (1%)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 24%",
              "同比 (0.5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "来源未披露净损益",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "premium_subs",
            "label": "付费订阅",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "ad_supported_subs",
            "label": "广告支持订阅",
            "notes": [
              "同比 +34%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q2-fy24",
    "company": "Spotify",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q2-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3807,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3351,
          "notes": [
            "+21% Y/Y",
            "31% gross margin",
            "+3pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 456,
          "notes": [
            "+13% Y/Y",
            "13% gross margin",
            "+19pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2695,
        "notes": []
      },
      "operatingExpenses": {
        "total": 846,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 379,
            "notes": [
              "10% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 343,
            "notes": [
              "9% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 124,
            "notes": [
              "3% of revenue",
              "(2pp) Y/Y"
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
      "total": 8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 4
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
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
        "value": 1112,
        "notes": [
          "29% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 266,
        "notes": [
          "7% margin",
          "+15pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 274,
        "notes": [
          "7% margin",
          "+17pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "626000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "626M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "MAU\n626M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1201,
            211,
            151
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "246000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "246M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Premium Subs\n246M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            254,
            1201,
            331,
            151
          ]
        }
      },
      {
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "value": "393000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "393M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Ad-supported Subs\n393M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1201,
            380,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +21%",
                "毛利率 31%",
                "同比 +3 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +13%",
                "毛利率 13%",
                "同比 +19 个百分点"
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
                  "占收入 10%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
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
              "利润率 29%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +15 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +17 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +14%"
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
            "id": "ad_supported_subs",
            "label": "广告支持订阅",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q2-fy25",
    "company": "Spotify",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.2,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3.7,
          "notes": [
            "+12% Y/Y",
            "33% gross margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 0.5,
          "notes": [
            "(1%) Y/Y",
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
        "total": 0.9,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
            ]
          },
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
            "id": "ga",
            "label": "General & Admin",
            "value": 0.1,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
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
      "total": 0.5,
      "items": [
        {
          "id": "tax_interest",
          "label": "Tax & interest",
          "value": 0.5
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
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "10% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.1,
        "notes": [
          "(2%) margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "696000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "696M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "MAU\n696M\n+11% Y/Y",
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
        "value": "276000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "276M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Premium Subs\n276M\n+12% Y/Y",
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
        "value": "433000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "433M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Ad-supported MAUs\n433M\n+10% Y/Y",
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
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +12%",
                "毛利率 33%",
                "同比 +2 个百分点"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 (1%)",
                "毛利率 18%",
                "同比 +5 个百分点"
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
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
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
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "tax_interest",
              "label": "税费及利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_loss",
            "label": "净亏损",
            "notes": [
              "利润率 (2%)",
              "同比 (9 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +11%"
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
              "同比 +10%"
            ]
          }
        ],
        "period": "2025 财年第二季度",
        "periodNote": ""
      }
    }
  },
  {
    "key": "spotify-q3-fy22",
    "company": "Spotify",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3,
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 2.7,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 0.4,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ],
      "notes": [
        "+21% Y/Y",
        "Source independently rounded revenue components sum to €3.1B."
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3,
        "notes": [],
        "items": [
          {
            "id": "premium_cost",
            "label": "Premium",
            "value": 1.9,
            "notes": [
              "28% gross margin"
            ]
          },
          {
            "id": "advertising_cost",
            "label": "Ad-supported",
            "value": 0.4,
            "notes": [
              "2% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.4,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "13% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not reported",
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
        "value": 0.8,
        "notes": [
          "25% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(8%) margin",
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
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "456000000",
        "literal": "456M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "MAU\n456M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            211,
            150
          ]
        }
      },
      {
        "id": "premium_subs",
        "label": "Premium Subs",
        "value": "195000000",
        "literal": "195M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Premium Subs\n195M\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1202,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "value": "273000000",
        "literal": "273M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Ad-supported Subs\n273M\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            380,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "",
        "revenue": {
          "items": [
            {
              "id": "premium",
              "label": "付费订阅",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告支持",
              "notes": [
                "同比 +19%"
              ]
            }
          ],
          "notes": [
            "同比 +21%",
            "来源分项分别四舍五入，收入分项合计为 €3.1B。"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": [],
            "items": [
              {
                "id": "premium_cost",
                "label": "付费订阅",
                "notes": [
                  "毛利率 28%"
                ]
              },
              {
                "id": "advertising_cost",
                "label": "广告支持",
                "notes": [
                  "毛利率 2%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 5%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "未披露税费"
          }
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 25%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 (11 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "月活跃用户",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "premium_subs",
            "label": "付费订阅用户",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "ad_supported_subs",
            "label": "广告支持订阅用户",
            "notes": [
              "同比 +24%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q3-fy23",
    "company": "Spotify",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q3-fy23.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 3357,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 2910,
          "notes": [
            "+10% Y/Y",
            "29% gross margin"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 447,
          "notes": [
            "+16% Y/Y",
            "8% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2472
      },
      "operatingExpenses": {
        "total": 853,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 369,
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 355,
            "notes": [
              "11% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 129,
            "notes": [
              "4% of revenue",
              "(1%) Y/Y"
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
      "total": 41,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 41
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
        "value": 885,
        "notes": [
          "26% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 32,
        "notes": [
          "1% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 65,
        "notes": [
          "2% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "value": "574000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "574M",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "MAU\n574M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subscribers",
        "label": "Premium Subs",
        "value": "226000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "226M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Premium Subs\n226M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1202,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subscribers",
        "label": "Ad-supported Subs",
        "value": "361000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "361M",
        "basis": "unspecified",
        "notes": [
          "+32% Y/Y"
        ],
        "quote": "Ad-supported Subs\n361M\n+32% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            379,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "付费订阅",
              "notes": [
                "同比 +10%",
                "毛利率 29%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告支持",
              "notes": [
                "同比 +16%",
                "毛利率 8%"
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
                  "占收入 11%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售及营销",
                "notes": [
                  "占收入 11%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 4%",
                  "同比 (1%)"
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
              "id": "financial",
              "label": "财务收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +7 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "ad_supported_subscribers",
            "label": "广告支持用户",
            "notes": [
              "同比 +32%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q3-fy24",
    "company": "Spotify",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q3-fy24.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 3988,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Spotify Premium",
          "value": 3516,
          "valueText": "€3,516M",
          "notes": [
            "+21% Y/Y",
            "34% gross margin",
            "+4pp Y/Y",
            "Operator-directed source correction dated 2026-10-15: Premium = Revenue €3,988M − Advertising €472M = €3,516M. Original image displays €3,316M."
          ]
        },
        {
          "id": "advertising",
          "label": "Spotify Advertising",
          "value": 472,
          "valueText": "€472M",
          "notes": [
            "+6% Y/Y",
            "13% gross margin",
            "+5pp Y/Y"
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
        "value": 2748,
        "valueText": "(€2,748M)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 786,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 342,
            "valueText": "(€342M)",
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 332,
            "valueText": "(€332M)",
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 112,
            "valueText": "(€112M)",
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
        "value": 98,
        "valueText": "($98M)",
        "notes": [
          "Source displays ($98M) within a euro-denominated statement. Original dollar marker retained; no currency conversion inferred."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 56,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 56,
          "valueText": "($56M)",
          "notes": [
            "Source displays ($56M) within a euro-denominated statement. Original dollar marker retained; no currency conversion inferred."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1240,
        "valueText": "€1,240M",
        "notes": [
          "31% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 454,
        "valueText": "€454M",
        "notes": [
          "11% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 300,
        "valueText": "€300M",
        "notes": [
          "8% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "mau",
        "label": "MAU",
        "literal": "640M",
        "value": "640000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "MAU\n640M\n+11% Y/Y",
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
        "literal": "252M",
        "value": "252000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Premium Subs\n252M\n+12% Y/Y",
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
        "id": "ad_supported_subs",
        "label": "Ad-supported Subs",
        "literal": "402M",
        "value": "402000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Ad-supported Subs\n402M\n+11% Y/Y",
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
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "Spotify Premium",
              "notes": [
                "同比 +21%",
                "毛利率 34%",
                "同比 +4 个百分点",
                "按操作员 2026-10-15 来源更正：Premium 为 €3,516M，原图显示 €3,316M。"
              ]
            },
            {
              "id": "advertising",
              "label": "Spotify Advertising",
              "notes": [
                "同比 +6%",
                "毛利率 13%",
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
                "label": "销售与市场营销",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
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
              "原图在欧元利润表中显示 ($98M)，保留美元符号，未推断换算。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": [
                "原图在欧元利润表中显示 ($56M)，保留美元符号，未推断换算。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 31%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "ad_supported_subs",
            "label": "广告支持订阅",
            "notes": [
              "同比 +11%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q4-fy22",
    "company": "Spotify",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/spotify-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.2,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 2.7,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 0.4,
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
        "value": 2.4,
        "notes": [],
        "items": [
          {
            "id": "premium_cost",
            "label": "Premium",
            "value": 1.9,
            "notes": [
              "29% gross margin"
            ]
          },
          {
            "id": "advertising_cost",
            "label": "Ad-supported",
            "value": 0.4,
            "notes": [
              "5% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.5,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.2,
            "notes": [
              "5% of revenue",
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
        "value": 0.8,
        "notes": [
          "25% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(7%) margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "label": "Net profit",
        "value": null,
        "availability": "not-reported",
        "notes": [
          "Source does not report net profit."
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
        "id": "mau",
        "label": "MAU",
        "value": "489000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "489M",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "MAU\n489M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subscribers",
        "label": "Premium Subs",
        "value": "205000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "205M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Premium Subs\n205M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1202,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subscribers",
        "label": "Ad-supported Subs",
        "value": "295000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "295M",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "Ad-supported Subs\n295M\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            379,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "付费订阅",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告支持",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": [],
            "items": [
              {
                "id": "premium_cost",
                "label": "付费订阅",
                "notes": [
                  "毛利率 29%"
                ]
              },
              {
                "id": "advertising_cost",
                "label": "广告支持",
                "notes": [
                  "毛利率 5%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场营销",
                "notes": [
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 9%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 5%",
                  "保持不变"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 25%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "原图未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "mau",
            "label": "MAU",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "ad_supported_subscribers",
            "label": "广告支持用户",
            "notes": [
              "同比 +25%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "spotify-q4-fy23",
    "company": "Spotify",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/spotify-q4-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 3671,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "premium",
          "label": "Premium",
          "value": 3170,
          "notes": [
            "+17% Y/Y",
            "29% gross margin"
          ]
        },
        {
          "id": "advertising",
          "label": "Ad-supported",
          "value": 501,
          "notes": [
            "+12% Y/Y",
            "12% gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2691,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1055,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 468,
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 432,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 155,
            "notes": [
              "4% of revenue",
              "(1%) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 980,
        "notes": [
          "27% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -75,
        "notes": [
          "(2%) margin",
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
        "id": "mau",
        "label": "MAU",
        "value": "602000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "602M",
        "quote": "MAU\n602M\n+23% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            30,
            1202,
            210,
            150
          ]
        }
      },
      {
        "id": "premium_subscribers",
        "label": "Premium Subs",
        "value": "236000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "236M",
        "quote": "Premium Subs\n236M\n+15% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            253,
            1202,
            332,
            150
          ]
        }
      },
      {
        "id": "ad_supported_subscribers",
        "label": "Ad-supported Subs",
        "value": "379000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "379M",
        "quote": "Ad-supported Subs\n379M\n+28% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            598,
            1202,
            379,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "premium",
              "label": "付费订阅",
              "notes": [
                "同比 +17%",
                "毛利率 29%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告支持",
              "notes": [
                "同比 +12%",
                "毛利率 12%"
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
                  "占收入 13%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 4%",
                  "同比 (1%)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +5 个百分点"
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
            "label": "MAU",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "premium_subscribers",
            "label": "付费订阅用户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "ad_supported_subscribers",
            "label": "广告支持用户",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
