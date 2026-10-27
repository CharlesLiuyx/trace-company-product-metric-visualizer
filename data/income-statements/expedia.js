/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "expedia-q1-fy26",
    "company": "Expedia",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q1-fy26.png",
    "roundingTolerance": 0.02,
    "revenue": {
      "total": 3.426,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.61,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.107,
          "notes": [
            "Flat Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.322,
          "notes": [
            "+24% Y/Y",
            "Advertising & Media: Expedia Group Advertising $197M plus trivago $125M."
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.387,
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
        "value": 0.377
      },
      "operatingExpenses": {
        "total": 2.798,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2.058,
            "notes": [
              "60% of revenue",
              "(5pp) Y/Y",
              "Direct $1,856M plus indirect $202M."
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.324,
            "notes": [
              "Technology and content."
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.228,
            "notes": [
              "Depreciation and amortization."
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.196
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.056,
            "notes": [
              "Restructuring and related reorganization charges."
            ]
          },
          {
            "label": "Legal reserves, occupancy tax and other",
            "value": -0.064,
            "notes": [
              "Credit line omitted from the source chart, which draws only the five positive expense items."
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0.037,
        "notes": [
          "Drawn inside the combined non-operating \"Other\" outflow in the source chart."
        ]
      }
    },
    "otherIncome": {
      "total": 0.06,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.06,
          "notes": [
            "Interest income."
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0.286,
      "items": [
        {
          "label": "Interest expense",
          "value": 0.111
        },
        {
          "label": "Other, net",
          "value": 0.175
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.049,
        "notes": [
          "89% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.251,
        "notes": [
          "7% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.012,
        "notes": [
          "Total net loss including non-controlling interests; $(6)M attributable to Expedia Group."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比持平"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +24%",
                "广告与媒体：Expedia Group 广告 $197M 加 trivago $125M。"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 60%",
                  "同比 (5 个百分点)",
                  "直接 $1,856M 加间接 $202M。"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "技术与内容。"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "折旧与摊销。"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": [
                  "重组及相关整编费用。"
                ]
              },
              {
                "label": "法律准备金、住宿税及其他",
                "notes": [
                  "信贷项，来源图未绘制；图中仅绘制五个正费用项。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图将税费并入非经营性\"其他\"流出。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收益",
              "notes": [
                "利息收入。"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "label": "利息费用"
            },
            {
              "label": "其他（净额）"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "含少数股东权益的净亏损总额；归属于 Expedia Group 为 $(6)M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "expedia-q4-fy25",
    "company": "Expedia",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.5,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.8,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
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
        "value": 0.3
      },
      "operatingExpenses": {
        "total": 2.8,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.9,
            "notes": [
              "54% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax bar appears in the source infographic."
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
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.2,
        "notes": [
          "90% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "12% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "6% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 54%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "other_opex",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源信息图未单列税费柱。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "expedia-q3-fy25",
    "company": "Expedia",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.4,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 3.6,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2.2,
            "notes": [
              "50% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
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
        "value": 4,
        "notes": [
          "91% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "23% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 50%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "other_opex",
                "label": "其他"
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
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 91%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "expedia-q2-fy26",
    "company": "Expedia",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 3.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.4,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 3.1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2.3,
            "notes": [
              "54% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
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
          "id": "other_income",
          "label": "Other",
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
        "value": 3.9,
        "notes": [
          "91% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "19% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "20% margin",
          "+12pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "33.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$33.9B",
        "notes": [
          "+12% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            101,
            1197,
            304,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$33.9B\n+12% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "112000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "112M",
        "notes": [
          "+6% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            416,
            1197,
            330,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n112M\n+6% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +23%"
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
                "label": "销售与 市场",
                "notes": [
                  "占收入 54%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "id": "other_income",
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 91%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +12 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q3-fy22",
    "company": "Expedia",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended Sep. 30, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.6,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.9,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+61% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.5
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.7
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.1
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.2,
        "notes": [
          "87% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "13% margin",
          "Unchanged"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "24.0",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$24.0B",
        "notes": [
          "+28% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1241,
            305,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$24.0B\n+28% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "81600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "81.6M",
        "notes": [
          "+25% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            416,
            1241,
            330,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n81.6M\n+25% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +61%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "impairment",
                "label": "减值"
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
              "利润率 87%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "保持不变"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +28%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +25%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q4-fy22",
    "company": "Expedia",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.6,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.4,
            "notes": [
              "53% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.008
      }
    },
    "otherIncome": {
      "total": 0.055,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.055
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
        "value": 2.2,
        "notes": [
          "84% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "5% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "7% margin",
          "(11pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "20.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$20.5B",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Gross bookings\n$20.5B\n+17% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1241,
            305,
            150
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "70800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "70.8M",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Nights booked\n70.8M\n+19% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1241,
            332,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (4%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 53%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (11 个百分点)"
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
        },
        "otherExpenses": {
          "items": []
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +19%"
            ]
          }
        ],
        "period": "2022 财年第四季度",
        "periodNote": ""
      }
    }
  },
  {
    "key": "expedia-q1-fy23",
    "company": "Expedia",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.7,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2,
          "notes": [
            "26% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+53% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "(13%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.7,
            "notes": [
              "60% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.005,
            "notes": []
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
        "value": 2.3,
        "notes": [
          "84% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(5%) margin",
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
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "29.4",
        "unit": "B",
        "currency": "USD",
        "literal": "$29.4B",
        "comparison": "eq",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Gross bookings\n$29.4B\n+20% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1241,
            305,
            148
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "94500000",
        "unit": "count",
        "currency": null,
        "literal": "94.5M",
        "comparison": "eq",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Nights booked\n94.5M\n+23% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1241,
            331,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 26%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +53%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (13%)"
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
                  "占收入 60%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q2-fy22",
    "company": "Expedia",
    "period": "Q2 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q2-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.4,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.7,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "(26%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.8,
            "notes": [
              "53% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.077
      }
    },
    "otherIncome": {
      "total": 0.021,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.021
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
        "value": 3,
        "notes": [
          "88% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "13% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "12% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "27.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$27.3B",
        "notes": [
          "+5% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1241,
            305,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$27.3B\n+5% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "89700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "89.7M",
        "notes": [
          "+9% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1241,
            332,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n89.7M\n+9% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (26%)"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 53%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (6 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q1-fy24",
    "company": "Expedia",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.9,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.2,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "(5%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.8,
            "notes": [
              "64% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "impairment",
            "label": "Impairment & Other",
            "value": 0.1,
            "notes": []
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "88% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(4%) margin",
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
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "30.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$30.2B",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Gross bookings\n$30.2B\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1238,
            305,
            148
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "101000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "101M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Nights booked\n101M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1238,
            332,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (5%)"
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
                  "占收入 64%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值与其他",
                "notes": []
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q3-fy23",
    "company": "Expedia",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.9,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 3.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "(14%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.9,
            "notes": [
              "47% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": []
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
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.2,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "90% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "15% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "8% margin",
          "(65pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "25.7",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$25.7B",
        "notes": [
          "+7% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1238,
            305,
            148
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$25.7B\n+7% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "89300000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "89.3M",
        "notes": [
          "+9% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            416,
            1238,
            330,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n89.3M\n+9% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (14%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 47%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 8%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
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
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
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
              "利润率 90%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (65 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q2-fy24",
    "company": "Expedia",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.6,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.8,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2,
            "notes": [
              "56% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Impairment & Other",
            "value": 0.039
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.037,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.037
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
        "value": 3.2,
        "notes": [
          "90% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "11% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "28.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$28.8B",
        "notes": [
          "+6% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Gross bookings\n$28.8B\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            951,
            234,
            115
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "99000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "99M",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Nights booked\n99M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            951,
            254,
            115
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +2%"
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
                "label": "销售与 市场",
                "notes": [
                  "占收入 56%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "other_opex",
                "label": "减值及 其他"
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
              "id": "other_income",
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q2-fy25",
    "company": "Expedia",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 3,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2.1,
            "notes": [
              "56% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.046
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.4,
        "notes": [
          "90% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "13% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "9% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 56%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "other_opex",
                "label": "其他"
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
              "利润率 90%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "30.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$30.4B",
        "notes": [
          "+5% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            101,
            1197,
            304,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$30.4B\n+5% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "105000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "105M",
        "notes": [
          "+7% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            416,
            1197,
            330,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n105M\n+7% Y/Y"
      }
    ]
  },
  {
    "key": "expedia-q3-fy24",
    "company": "Expedia",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/expedia-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.1,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 3.3,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
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
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2.1,
            "notes": [
              "51% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
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
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
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
        "value": 3.7,
        "notes": [
          "90% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "17% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "27.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$27.5B",
        "quote": "Gross bookings\n$27.5B\n+7% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1195,
            305,
            151
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "97000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "97M",
        "quote": "Nights booked\n97M\n+9% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1195,
            332,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": [
                  "销售与",
                  "市场"
                ],
                "notes": [
                  "占收入 51%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
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
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 90%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +9 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q4-fy23",
    "company": "Expedia",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.9,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.3,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "(13%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.3
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.6,
            "notes": [
              "54% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.4
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.1,
            "notes": [
              "4% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.035,
        "decimals": 3,
        "valueText": "($35M)"
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
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
        "value": 2.5,
        "notes": [
          "88% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "5% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "21.7",
        "unit": "B",
        "currency": "USD",
        "literal": "$21.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Gross bookings\n$21.7B\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1238,
            305,
            148
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "77400000",
        "unit": "count",
        "currency": null,
        "literal": "77.4M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Nights booked\n77.4M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1238,
            332,
            151
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
            "同比 +10%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (13%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 54%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 4%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "id": "other_income",
              "label": "其他收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +6%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订夜晚数",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q1-fy25",
    "company": "Expedia",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.3,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.3,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
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
        "value": 0.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 2,
            "notes": [
              "65% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.026,
            "notes": []
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "Not separately reported in the source."
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
        "value": 2.6,
        "notes": [
          "88% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(2%) margin",
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
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "31.4",
        "unit": "B",
        "currency": "USD",
        "literal": "$31.4B",
        "comparison": "eq",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Gross bookings\n$31.4B\n+4% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1197,
            305,
            148
          ]
        }
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "107700000",
        "unit": "count",
        "currency": null,
        "literal": "107.7M",
        "comparison": "eq",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Nights booked\n107.7M\n+6% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1197,
            332,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +1%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 65%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源未单列。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 88%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "expedia-q4-fy24",
    "company": "Expedia",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/expedia-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.2,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 2.5,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "air",
          "label": "Air",
          "value": 0.1,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 0.2,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.3,
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
        "value": 0.3
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 1.7,
            "notes": [
              "55% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.034,
        "valueText": "($34M)"
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
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
        "value": 2.8,
        "notes": [
          "89% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "7% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "9% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "gross-bookings",
        "label": "Gross bookings",
        "value": "24.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$24.4B",
        "notes": [
          "+13% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            100,
            1197,
            305,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Gross bookings\n$24.4B\n+13% Y/Y"
      },
      {
        "id": "nights-booked",
        "label": "Nights booked",
        "value": "86400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "86.4M",
        "notes": [
          "+12% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            415,
            1197,
            331,
            150
          ]
        },
        "basis": "unspecified",
        "quote": "Nights booked\n86.4M\n+12% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "air",
              "label": "机票",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 55%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
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
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 89%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "gross-bookings",
            "label": "总预订额",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "nights-booked",
            "label": "预订间夜数",
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
