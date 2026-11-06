/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "etsy-q4-fy25",
    "company": "Etsy",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q4-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 882,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 612,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 269,
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
        "value": 238
      },
      "operatingExpenses": {
        "total": 515,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 306,
            "notes": [
              "35% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 114,
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 94,
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
        "value": 26
      }
    },
    "otherIncome": {
      "total": 7,
      "items": [
        {
          "id": "other",
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
        "value": 644,
        "notes": [
          "73% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 129,
        "notes": [
          "15% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 111,
        "notes": [
          "13% margin",
          "(3pp) Y/Y"
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
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 35%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +1 个百分点"
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
              "利润率 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "etsy-q1-fy26",
    "company": "Etsy",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q1-fy26.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 631,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 433,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 199,
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
        "value": 176
      },
      "operatingExpenses": {
        "total": 336,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 174,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 99,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 63,
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
        "value": 25
      }
    },
    "otherIncome": {
      "total": 9,
      "items": [
        {
          "id": "other",
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
        "value": 456,
        "notes": [
          "72% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 120,
        "notes": [
          "19% margin",
          "+20pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 105,
        "notes": [
          "17% margin",
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
            "同比 +3%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 28%",
                  "同比 0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +20 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "etsy-q3-fy26",
    "company": "Etsy",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q3-fy26.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 692,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 468,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 224,
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
        "value": 189
      },
      "operatingExpenses": {
        "total": 392,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 207,
            "notes": [
              "30% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 111,
            "notes": [
              "16% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 74,
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
        "value": 15
      }
    },
    "otherIncome": {
      "total": 17,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 17
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
        "value": 503,
        "notes": [
          "73% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 112,
        "notes": [
          "16% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 114,
        "notes": [
          "16% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 30%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
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
              "利润率 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.6B",
        "quote": "GMS\n$2.6B\n+9% Y/Y",
        "notes": [
          "+9% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "5800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "5.8M",
        "quote": "Active sellers\n5.8M\n+7% Y/Y",
        "notes": [
          "+7% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            335,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "87500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "87.5M",
        "quote": "Active buyers\n87.5M\n+1% Y/Y",
        "notes": [
          "+1% Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "etsy-q2-fy26",
    "company": "Etsy",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q2-fy26.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 668,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 456,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 212,
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
        "value": 184
      },
      "operatingExpenses": {
        "total": 359,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 191,
            "notes": [
              "29% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 101,
            "notes": [
              "15% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 67,
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
        "value": 21
      }
    },
    "otherIncome": {
      "total": 10,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 10
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
        "value": 484,
        "notes": [
          "72% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 125,
        "notes": [
          "19% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 114,
        "notes": [
          "17% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +5%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 29%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
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
              "id": "other",
              "label": "其他"
            }
          ]
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
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +10 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (0)%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.6",
        "unit": "B",
        "currency": "USD",
        "literal": "$2.6B",
        "notes": [
          "+8% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "GMS\n$2.6B\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1130,
            163,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "5700000",
        "unit": "count",
        "currency": null,
        "literal": "5.7M",
        "notes": [
          "+6% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active sellers\n5.7M\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1130,
            334,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "87000000",
        "unit": "count",
        "currency": null,
        "literal": "87M",
        "notes": [
          "(0)% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active buyers\n87M\n(0)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1130,
            331,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "etsy-q2-fy25",
    "company": "Etsy",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q2-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 673,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 468,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 205,
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
        "value": 194
      },
      "operatingExpenses": {
        "total": 403,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 212,
            "notes": [
              "32% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 112,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 79,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax & other",
        "value": 48,
        "notes": [
          "Source combines income tax and other non-operating expenses."
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
        "value": 479,
        "notes": [
          "71% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 76,
        "notes": [
          "11% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 29,
        "notes": [
          "4% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 32%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费及其他",
            "notes": [
              "来源合并列示所得税及其他营业外费用。"
            ]
          }
        },
        "otherIncome": {
          "items": []
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (4 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (5%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (8%)"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (3%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.8",
        "unit": "B",
        "currency": "USD",
        "literal": "$2.8B",
        "notes": [
          "(5%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "GMS\n$2.8B\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1130,
            163,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8100000",
        "unit": "count",
        "currency": null,
        "literal": "8.1M",
        "notes": [
          "(8%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active sellers\n8.1M\n(8%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1130,
            334,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "93300000",
        "unit": "count",
        "currency": null,
        "literal": "93.3M",
        "notes": [
          "(3%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active buyers\n93.3M\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1130,
            331,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "etsy-q3-fy23",
    "company": "Etsy",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q3-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 636,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 461,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 175,
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
        "value": 189,
        "notes": []
      },
      "operatingExpenses": {
        "total": 359,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 161,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 114,
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 84,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 9,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 8,
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
        "value": 448,
        "notes": [
          "70% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 89,
        "notes": [
          "14% margin",
          "+175pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 88,
        "notes": [
          "14% margin",
          "+176pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "3.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.0B",
        "notes": [
          "+1% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "GMS\n$3.0B\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1153,
            164,
            165
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8800000",
        "unit": "count",
        "currency": null,
        "literal": "8.8M",
        "notes": [
          "+19% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active sellers\n8.8M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1153,
            334,
            165
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "97300000",
        "unit": "count",
        "currency": null,
        "literal": "97.3M",
        "notes": [
          "+3% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active buyers\n97.3M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1153,
            332,
            165
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
            "同比 +7%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +16%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
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
              "id": "other",
              "label": "其他",
              "notes": []
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
              "利润率 14%",
              "同比 +175 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +176 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q4-fy22",
    "company": "Etsy",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q4-fy22.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 807,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 600,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 207,
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
        "value": 226
      },
      "operatingExpenses": {
        "total": 442,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 245,
            "notes": [
              "30% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 113,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 85,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 18
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 12,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 12
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 582,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 139,
        "notes": [
          "17% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 110,
        "notes": [
          "14% margin",
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
            "同比 +13%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 30%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
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
              "利润率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (9 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "4.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.0B",
        "quote": "GMS\n$4.0B\n(4%) Y/Y",
        "notes": [
          "(4%) Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "7500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "7.5M",
        "quote": "Active sellers\n7.5M\n(1%) Y/Y",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            333,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "95100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "95.1M",
        "quote": "Active buyers\n95.1M\n(1%) Y/Y",
        "notes": [
          "(1%) Y/Y"
        ],
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            587,
            1154,
            333,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "etsy-q3-fy22",
    "company": "Etsy",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q3-fy22.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 594,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 443,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 151,
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
        "value": 174,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1375,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 147,
            "notes": [
              "25% of revenue",
              "Unchanged"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 108,
            "notes": [
              "18% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 75,
            "notes": [
              "13% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "goodwill",
            "label": "Goodwill impairment",
            "value": 1045,
            "notes": [
              "Non-recurring"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 420,
        "notes": [
          "71% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -955,
        "notes": []
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
        "id": "gms",
        "label": "GMS",
        "value": "3.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.0B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "GMS\n$3.0B\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            165
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "7400000",
        "unit": "count",
        "currency": null,
        "literal": "7.4M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Active sellers\n7.4M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            336,
            165
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "94100000",
        "unit": "count",
        "currency": null,
        "literal": "94.1M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "Active buyers\n94.1M\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            332,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 25%",
                  "保持不变"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "goodwill",
                "label": "商誉减值",
                "notes": [
                  "非经常性"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 71%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q1-fy25",
    "company": "Etsy",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q1-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 651,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 459,
          "notes": [
            "(2)% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 193,
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
        "value": 192,
        "notes": []
      },
      "operatingExpenses": {
        "total": 481,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 189,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 111,
            "notes": [
              "17% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Asset impairment",
            "value": 102,
            "notes": [
              "16% of revenue",
              "Non-recurring"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 80,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
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
        "value": 459,
        "notes": [
          "71% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -22,
        "notes": [
          "(3)% margin",
          "(14pp) Y/Y"
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
        "id": "gms",
        "label": "GMS",
        "value": "2.8",
        "unit": "B",
        "currency": "USD",
        "literal": "$2.8B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7)% Y/Y"
        ],
        "quote": "GMS\n$2.8B\n(7)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1153,
            165,
            165
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8100000",
        "unit": "count",
        "currency": null,
        "literal": "8.1M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(11)% Y/Y"
        ],
        "quote": "Active sellers\n8.1M\n(11)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1153,
            334,
            165
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "94800000",
        "unit": "count",
        "currency": null,
        "literal": "94.8M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(2)% Y/Y"
        ],
        "quote": "Active buyers\n94.8M\n(2)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1153,
            332,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 (2)%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 29%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 0 个百分点"
                ]
              },
              {
                "id": "impairment",
                "label": "资产减值",
                "notes": [
                  "占收入 16%",
                  "非经常性"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
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
              "利润率 71%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3)%",
              "同比 (14 个百分点)"
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
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (7)%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (11)%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (2)%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q4-fy23",
    "company": "Etsy",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q4-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 842,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 616,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 227,
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
        "value": 256,
        "notes": []
      },
      "operatingExpenses": {
        "total": 471,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 261,
            "notes": [
              "31% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 118,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 93,
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
        "value": 26,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 6,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 587,
        "notes": [
          "70% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 115,
        "notes": [
          "14% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 83,
        "notes": [
          "10% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "4.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$4.0B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1)% Y/Y"
        ],
        "quote": "GMS\n$4.0B\n(1)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "9000000",
        "unit": "count",
        "currency": null,
        "literal": "9.0M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Active sellers\n9.0M\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            251,
            1154,
            333,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "96500000",
        "unit": "count",
        "currency": null,
        "literal": "96.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Active buyers\n96.5M\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1154,
            329,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (1)%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +2%"
            ]
          }
        ],
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +3%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 31%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
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
              "利润率 70%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "etsy-q3-fy24",
    "company": "Etsy",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q3-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 662,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 476,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 186,
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
        "value": 186
      },
      "operatingExpenses": {
        "total": 390,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 197,
            "notes": [
              "30% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 107,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 86,
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
        "value": 16
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 13,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 13
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 477,
        "notes": [
          "72% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 87,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 57,
        "notes": [
          "9% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.9",
        "unit": "B",
        "currency": "USD",
        "literal": "$2.9B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "GMS\n$2.9B\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8500000",
        "unit": "count",
        "currency": null,
        "literal": "8.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(3%) Y/Y"
        ],
        "quote": "Active sellers\n8.5M\n(3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            335,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "96700000",
        "unit": "count",
        "currency": null,
        "literal": "96.7M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Active buyers\n96.7M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            164
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
            "同比 +4%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +3%"
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
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 30%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
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
        "otherExpenses": {
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
              "利润率 72%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (5 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (3%)"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q1-fy24",
    "company": "Etsy",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q1-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 646,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 467,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 179,
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
        "value": 187,
        "notes": []
      },
      "operatingExpenses": {
        "total": 391,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 192,
            "notes": [
              "30% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 110,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 89,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 17,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 12,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 459,
        "notes": [
          "71% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 68,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 63,
        "notes": [
          "10% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "3.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.0B",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "GMS\n$3.0B\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active_sellers",
        "label": "Active sellers",
        "value": "9100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "9.1M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Active sellers\n9.1M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            333,
            164
          ]
        }
      },
      {
        "id": "active_buyers",
        "label": "Active buyers",
        "value": "96000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "96M",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y"
        ],
        "quote": "Active buyers\n96M\n+1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            164
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
            "同比 +1%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 0%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 30%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
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
          },
          "tax": {
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
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
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
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "active_sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "active_buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q2-fy23",
    "company": "Etsy",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q2-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 629,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 453,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 176,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 189,
        "notes": []
      },
      "operatingExpenses": {
        "total": 443,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 166,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 122,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 87,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Goodwill impairment",
            "value": 68,
            "notes": [
              "Non-recurring"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 440,
        "notes": [
          "70% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2,
        "notes": [
          "(0%) margin",
          "(13pp) Y/Y"
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
        "id": "gms",
        "label": "GMS",
        "value": "3.0",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.0B",
        "notes": [
          "(1%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "GMS\n$3.0B\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            165,
            165
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8300000",
        "unit": "count",
        "currency": null,
        "literal": "8.3M",
        "notes": [
          "+12% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active sellers\n8.3M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            335,
            165
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "96300000",
        "unit": "count",
        "currency": null,
        "literal": "96.3M",
        "notes": [
          "+2.5% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active buyers\n96.3M\n+2.5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +21%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 26%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "impairment",
                "label": "商誉减值",
                "notes": [
                  "非经常性"
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
              "毛利率 70%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (13 个百分点)"
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
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +2.5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q4-fy24",
    "company": "Etsy",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q4-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 852,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 607,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 245,
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
        "value": 218
      },
      "operatingExpenses": {
        "total": 479,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 285,
            "notes": [
              "33% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 111,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 83,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 48
      }
    },
    "otherIncome": {
      "total": 23,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 23
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
        "value": 634,
        "notes": [
          "74% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 155,
        "notes": [
          "18% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 130,
        "notes": [
          "15% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "3.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "GMS\n$3.7B\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8100000",
        "unit": "count",
        "currency": null,
        "literal": "8.1M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(10%) Y/Y"
        ],
        "quote": "Active sellers\n8.1M\n(10%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            333,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "95500000",
        "unit": "count",
        "currency": null,
        "literal": "95.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "Active buyers\n95.5M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            164
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
            "同比 +1%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 33%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 (1pp)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (1pp)"
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
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (7%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (10%)"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (1%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q2-fy24",
    "company": "Etsy",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q2-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 648,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 470,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 177,
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
        "value": 184
      },
      "operatingExpenses": {
        "total": 394,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 183,
            "notes": [
              "28% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 114,
            "notes": [
              "18% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 26
      }
    },
    "otherIncome": {
      "total": 9,
      "items": [
        {
          "id": "other",
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
        "value": 464,
        "notes": [
          "72% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 70,
        "notes": [
          "11% margin",
          "+11pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 53,
        "notes": [
          "8% margin",
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
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 28%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
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
              "利润率 72%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (2%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +0%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.9B",
        "quote": "GMS\n$2.9B\n(2%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "8.8M",
        "quote": "Active sellers\n8.8M\n+6% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1154,
            334,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "97000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "97M",
        "quote": "Active buyers\n97M\n+0% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+0% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1154,
            331,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "etsy-q1-fy23",
    "company": "Etsy",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q1-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 641,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 468,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 173,
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
        "value": 195
      },
      "operatingExpenses": {
        "total": 367,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 171,
            "notes": [
              "27% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 116,
            "notes": [
              "18% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 80,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 7
      }
    },
    "otherIncome": {
      "total": 3,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
        "value": 445,
        "notes": [
          "70% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 78,
        "notes": [
          "12% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 75,
        "notes": [
          "12% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "3.1",
        "unit": "B",
        "currency": "USD",
        "literal": "$3.1B",
        "notes": [
          "(5%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "GMS\n$3.1B\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "7900000",
        "unit": "count",
        "currency": null,
        "literal": "7.9M",
        "notes": [
          "+4% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active sellers\n7.9M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            251,
            1154,
            333,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "95500000",
        "unit": "count",
        "currency": null,
        "literal": "95.5M",
        "notes": [
          "+0.4% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Active buyers\n95.5M\n+0.4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            589,
            1154,
            331,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 +9%"
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
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 27%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
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
              "毛利率 70%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "营业利润率 12%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "净利率 12%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (5%)"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 +0.4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "etsy-q3-fy25",
    "company": "Etsy",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/etsy-q3-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 678,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "marketplace",
          "label": "Marketplace",
          "value": 468,
          "notes": [
            "(2)% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 210,
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
        "total": 401,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 208,
            "notes": [
              "31% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 113,
            "notes": [
              "17% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 79,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
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
      "total": 9,
      "items": [
        {
          "id": "other",
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
        "value": 483,
        "notes": [
          "71% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 83,
        "notes": [
          "12% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 76,
        "notes": [
          "11% margin",
          "+2pp Y/Y"
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
              "id": "marketplace",
              "label": "交易市场",
              "notes": [
                "同比 (2)%"
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
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "营销",
                "notes": [
                  "占收入 31%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
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
              "利润率 71%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gms",
            "label": "GMS",
            "notes": [
              "同比 (6)%"
            ]
          },
          {
            "id": "active-sellers",
            "label": "活跃卖家",
            "notes": [
              "同比 (0)%"
            ]
          },
          {
            "id": "active-buyers",
            "label": "活跃买家",
            "notes": [
              "同比 (4)%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gms",
        "label": "GMS",
        "value": "2.8",
        "unit": "B",
        "currency": "USD",
        "literal": "$2.8B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(6)% Y/Y"
        ],
        "quote": "GMS\n$2.8B\n(6)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            79,
            1130,
            163,
            164
          ]
        }
      },
      {
        "id": "active-sellers",
        "label": "Active sellers",
        "value": "8500000",
        "unit": "count",
        "currency": null,
        "literal": "8.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(0)% Y/Y"
        ],
        "quote": "Active sellers\n8.5M\n(0)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1130,
            334,
            164
          ]
        }
      },
      {
        "id": "active-buyers",
        "label": "Active buyers",
        "value": "93200000",
        "unit": "count",
        "currency": null,
        "literal": "93.2M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(4)% Y/Y"
        ],
        "quote": "Active buyers\n93.2M\n(4)% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            588,
            1130,
            331,
            164
          ]
        }
      }
    ]
  }
]);
})(window);
