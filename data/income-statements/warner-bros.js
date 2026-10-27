/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "warner-bros-q1-fy26",
    "company": "Warner Bros. Discovery",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.893,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.125,
          "notes": [
            "+35% Y/Y",
            "25% adj. margin",
            "+14pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.377,
          "notes": [
            "(8%) Y/Y",
            "37% adj. margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 2.887,
          "notes": [
            "+9% Y/Y",
            "15% adj. margin",
            "+2pp Y/Y"
          ]
        },
        {
          "label": "Eliminations",
          "value": -1.497,
          "notes": [
            "Inter-segment eliminations shown in the source chart as a separate red outflow."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.628
      },
      "operatingExpenses": {
        "total": 6.734,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.469,
            "notes": [
              "28% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.247,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.218,
            "notes": [
              "2% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "netflix_termination_fee",
            "label": "Netflix Termination Fee",
            "value": 2.8,
            "notes": [
              "New"
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
      "total": 0.431,
      "items": [
        {
          "label": "Net non-operating expense and attributable adjustments",
          "value": 0.431,
          "notes": [
            "Bridge from source-chart operating loss to the official approximately $2.9B net loss."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.265,
        "notes": [
          "48% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "label": "Operating loss",
        "value": -2.469,
        "notes": [
          "(28%) margin",
          "(27pp) Y/Y"
        ]
      },
      "net": {
        "label": "Net loss",
        "value": -2.9,
        "notes": [
          "Official release states net loss available to Warner Bros. Discovery, Inc. was $2.9B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "label": "影视工作室",
              "notes": [
                "同比 +35%",
                "调整后利润率 25%",
                "同比 +14 个百分点"
              ]
            },
            {
              "label": "线性网络",
              "notes": [
                "同比 (8%)",
                "调整后利润率 37%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "label": "流媒体",
              "notes": [
                "同比 +9%",
                "调整后利润率 15%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图中作为单独红色流出的分部间抵销。"
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
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 28%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "其他",
                "notes": [
                  "占收入 2%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "Netflix 解约费",
                "notes": [
                  "新增"
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
              "label": "净非经营费用及归属调整",
              "notes": [
                "用于从来源图中的经营亏损桥接到官方约 $2.9B 净亏损。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 48%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "经营亏损",
            "notes": [
              "利润率 (28%)",
              "同比 (27 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "官方公告称 Warner Bros. Discovery, Inc. 应占净亏损为 $2.9B。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "warner-bros-q3-fy25",
    "company": "Warner Bros. Discovery",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.3,
          "notes": [
            "+24% Y/Y",
            "21% adj. margin",
            "+9pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 3.9,
          "notes": [
            "(22%) Y/Y",
            "44% adj. margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 2.6,
          "notes": [
            "(0%) Y/Y",
            "13% adj. margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.8,
          "notes": [
            "Inter-segment eliminations shown as a separate red outflow."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.6
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.4,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.1
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
      "total": 0.6,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "Source-chart bridge from operating profit to net loss."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.5,
        "notes": [
          "50% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "7% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.1
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "label": "影视工作室",
              "notes": [
                "同比 +24%",
                "调整后利润率 21%",
                "同比 +9 个百分点"
              ]
            },
            {
              "label": "线性网络",
              "notes": [
                "同比 (22%)",
                "调整后利润率 44%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "流媒体",
              "notes": [
                "同比 (0%)",
                "调整后利润率 13%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图中作为单独红色流出的分部间抵销。"
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
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 26%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "其他"
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
              "label": "其他",
              "notes": [
                "来源图中从营业利润桥接至净亏损的项目。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "warner-bros-q4-fy25",
    "company": "Warner Bros. Discovery",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.5,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.2,
          "notes": [
            "(13%) Y/Y",
            "23% adj. margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.2,
          "notes": [
            "(12%) Y/Y",
            "33% adj. margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 2.8,
          "notes": [
            "+5% Y/Y",
            "14% adj. margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "label": "Eliminations",
          "value": -0.7,
          "notes": [
            "Inter-segment eliminations shown as a separate red outflow."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.2
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4,
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.2
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
      "total": 0.6,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.6,
          "notes": [
            "Source-chart bridge from operating profit to net loss."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.2,
        "notes": [
          "45% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "4% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "label": "Net loss",
        "value": -0.2
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "label": "影视工作室",
              "notes": [
                "同比 (13%)",
                "调整后利润率 23%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "label": "线性网络",
              "notes": [
                "同比 (12%)",
                "调整后利润率 33%",
                "同比 (7 个百分点)"
              ]
            },
            {
              "label": "流媒体",
              "notes": [
                "同比 +5%",
                "调整后利润率 14%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图中作为单独红色流出的分部间抵销。"
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
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "其他"
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
              "label": "其他",
              "notes": [
                "来源图中从营业利润桥接至净亏损的项目。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 45%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "warner-bros-q2-fy26",
    "company": "Warner Bros. Discovery",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.7,
      "notes": [
        "(11%) Y/Y"
      ],
      "items": [
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 3.1,
          "notes": [
            "+10% Y/Y",
            "17% adj. margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.3,
          "notes": [
            "(39%) Y/Y",
            "4% adj. margin",
            "(19pp) Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4,
          "notes": [
            "(17%) Y/Y",
            "36% adj. margin",
            "+5pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.6
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": [
              "29% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+0pp Y/Y"
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
      "total": 0.1,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.1,
        "notes": [
          "47% margin",
          "+8pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "3% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (11%)"
          ],
          "items": [
            {
              "label": "流媒体",
              "notes": [
                "同比 +10%",
                "调整后利润率 17%",
                "同比 +6 个百分点"
              ]
            },
            {
              "label": "影视工作室",
              "notes": [
                "同比 (39%)",
                "调整后利润率 4%",
                "同比 (19 个百分点)"
              ]
            },
            {
              "label": "线性网络",
              "notes": [
                "同比 (17%)",
                "调整后利润率 36%",
                "同比 +5 个百分点"
              ]
            },
            {
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入 成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售及管理费用",
                "notes": [
                  "占收入 29%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "其他",
                "notes": [
                  "占收入 1%",
                  "同比 +0 个百分点"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 +8 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "warner-bros-q3-fy22",
    "company": "Warner Bros. Discovery",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.8,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.1,
          "notes": [
            "(8%) Y/Y",
            "25% adj. margin"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.2,
          "notes": [
            "(11%) Y/Y",
            "50% adj. margin"
          ]
        },
        {
          "id": "dtc",
          "label": "Direct to consumer",
          "value": 2.3,
          "notes": [
            "(7%) Y/Y",
            "(27%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.6
      },
      "operatingExpenses": {
        "total": 6.4,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.6,
            "notes": [
              "26% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 2.2,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1.5,
            "notes": [
              "15% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.043
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
        "value": 4.2,
        "notes": [
          "43% margin"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2.2,
        "notes": [
          "(22%) margin"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "value": "95000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "95M",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "DTC subscribers 95M (+19% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            140,
            960,
            370,
            34
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "value": "0.00752",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.52",
        "basis": "unspecified",
        "notes": [
          "-2% Y/Y"
        ],
        "quote": "Global ARPU $7.52 (-2% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            160,
            995,
            350,
            30
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (10%)"
          ],
          "items": [
            {
              "label": "影视工作室",
              "notes": [
                "同比 (8%)",
                "调整后利润率 25%"
              ]
            },
            {
              "label": "线性网络",
              "notes": [
                "同比 (11%)",
                "调整后利润率 50%"
              ]
            },
            {
              "label": "直接面向消费者",
              "notes": [
                "同比 (7%)",
                "调整后利润率 (27%)"
              ]
            },
            {
              "label": "抵销"
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
                "label": "销售及管理费用",
                "notes": [
                  "占收入 26%"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "label": "重组费用",
                "notes": [
                  "占收入 15%"
                ]
              },
              {
                "label": "资产减值"
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
              "利润率 43%"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)"
            ]
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
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "label": "全球 ARPU",
            "notes": [
              "同比 -2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q4-fy22",
    "company": "Warner Bros. Discovery",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q4-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 11,
      "notes": [
        "(11%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.8,
          "notes": [
            "(25%) Y/Y",
            "20% adj. margin"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.5,
          "notes": [
            "(9%) Y/Y",
            "45% adj. margin"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.5,
          "notes": [
            "+4% Y/Y",
            "(9%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 7
      },
      "operatingExpenses": {
        "total": 5.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 2.3,
            "notes": [
              "20% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1.2,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.07
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.1,
        "notes": [
          "37% margin"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -1.9,
        "notes": [
          "(17%) margin"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "96.1M",
        "value": "96100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "DTC subscribers 96.1M (+11% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            169,
            1245,
            509,
            44
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.58",
        "value": "0.00758",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Q/Q"
        ],
        "quote": "Global ARPU $7.58 (+1% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1294,
            477,
            42
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
            "同比 (11%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (25%)",
                "调整后利润率 20%"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (9%)",
                "调整后利润率 45%"
              ]
            },
            {
              "id": "streaming",
              "label": "直接面向消费者",
              "notes": [
                "同比 +4%",
                "调整后利润率 (9%)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 20%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "asset_impairment",
                "label": "资产减值"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 37%"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (17%)"
            ]
          },
          "net": {
            "label": "原图未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "环比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q1-fy23",
    "company": "Warner Bros. Discovery",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.7,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.2,
          "notes": [
            "(8%) Y/Y",
            "19% adj. margin"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.6,
          "notes": [
            "(12%) Y/Y",
            "41% adj. margin"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.5,
          "notes": [
            "(2%) Y/Y",
            "2% adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.5
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.7
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4,
            "notes": [
              "22% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 2.1,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.031,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4,
        "notes": [
          "38% margin"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.6,
        "notes": [
          "(5%) margin"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "97.6M",
        "value": "97600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "DTC subscribers 97.6M (+8% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            182,
            1250,
            482,
            39
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.58",
        "value": "0.00758",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Q/Q"
        ],
        "quote": "Global ARPU $7.58 (+1% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            207,
            1293,
            462,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (8%)",
                "调整后利润率 19%"
              ]
            },
            {
              "id": "networks",
              "label": "电视网络",
              "notes": [
                "同比 (12%)",
                "调整后利润率 41%"
              ]
            },
            {
              "id": "streaming",
              "label": "直接面向消费者",
              "notes": [
                "同比 (2%)",
                "调整后利润率 2%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 22%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%"
                ]
              },
              {
                "id": "asset_impairment",
                "label": "资产减值",
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 38%"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)"
            ]
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
            "id": "dtc_subscribers",
            "label": "直接面向消费者订阅用户",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球每用户平均收入",
            "notes": [
              "环比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q1-fy24",
    "company": "Warner Bros. Discovery",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.8,
          "notes": [
            "(12%) Y/Y",
            "7% adj. margin",
            "-12pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.1,
          "notes": [
            "(8%) Y/Y",
            "41% adj. margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.5,
          "notes": [
            "+0% Y/Y",
            "3% adj. margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.4,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.1
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.2,
            "notes": [
              "22% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.9,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.035,
            "notes": [
              "0% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.012,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax"
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
        "value": 3.9,
        "notes": [
          "39% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.3,
        "notes": [
          "(3%) margin",
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "99.6M",
        "value": "99600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1% Y/Y",
          "+2% Q/Q"
        ],
        "quote": "DTC subscribers 99.6M (+1% Y/Y, +2% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            104,
            1248,
            638,
            46
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.83",
        "value": "0.00783",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y",
          "-1% Q/Q"
        ],
        "quote": "Global ARPU $7.83 (+4% Y/Y, -1% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            130,
            1296,
            586,
            42
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (12%)",
                "调整后利润率 7%",
                "同比 -12 个百分点"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (8%)",
                "调整后利润率 41%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "streaming",
              "label": "直接面向消费者",
              "notes": [
                "同比 +0%",
                "调整后利润率 3%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 22%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%"
                ]
              },
              {
                "id": "asset_impairment",
                "label": "资产减值",
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 39%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +3 个百分点"
            ]
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
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +1%",
              "环比 +2%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 +4%",
              "环比 -1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q2-fy23",
    "company": "Warner Bros. Discovery",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.4,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.6,
          "notes": [
            "(23%) Y/Y",
            "12% adj. margin"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.8,
          "notes": [
            "(6%) Y/Y",
            "38% adj. margin"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.7,
          "notes": [
            "+13% Y/Y",
            "(0%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.7,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.6,
            "notes": [
              "25% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.9,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.006,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.7,
        "notes": [
          "36% margin"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.9,
        "notes": [
          "(9%) margin",
          "(4pp) Q/Q"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "95.8M",
        "value": "95800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y",
          "-2% Q/Q"
        ],
        "quote": "DTC subscribers 95.8M (+4% Y/Y, -2% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1257,
            619,
            35
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.71",
        "value": "0.00771",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y",
          "+3% Q/Q"
        ],
        "quote": "Global ARPU $7.71 (+2% Y/Y, +3% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            143,
            1298,
            586,
            33
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (23%)",
                "调整后利润率 12%"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (6%)",
                "调整后利润率 38%"
              ]
            },
            {
              "id": "streaming",
              "label": [
                "直接面向",
                "消费者"
              ],
              "notes": [
                "同比 +13%",
                "调整后利润率 (0%)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 25%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%"
                ]
              },
              {
                "id": "asset_impairment",
                "label": [
                  "资产",
                  "减值"
                ],
                "notes": [
                  "占收入 0%"
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
              "利润率 36%"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": [
              "营业",
              "亏损"
            ],
            "notes": [
              "利润率 (9%)",
              "环比 (4 个百分点)"
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
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +4%",
              "环比 -2%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 +2%",
              "环比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q3-fy23",
    "company": "Warner Bros. Discovery",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.2,
          "notes": [
            "+4% Y/Y",
            "23% adj. margin",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.9,
          "notes": [
            "(7%) Y/Y",
            "49% adj. margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.4,
          "notes": [
            "+5% Y/Y",
            "5% adj. margin",
            "+32pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.6,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.3,
            "notes": [
              "23% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 2,
            "notes": [
              "20% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "3% of revenue",
              "(13pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.024,
            "notes": [
              "0% of revenue"
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
      "total": 0.5,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Interest & Other",
          "value": 0.5,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.7,
        "notes": [
          "47% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "+23pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.4,
        "notes": [
          "(4%) margin",
          "+19pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "DTC subscribers",
        "value": "95100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "95.1M",
        "basis": "unspecified",
        "notes": [
          "flat Y/Y",
          "-1% Q/Q"
        ],
        "quote": "DTC subscribers 95.1M (flat Y/Y, -1% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1251,
            625,
            46
          ]
        }
      },
      {
        "id": "arpu",
        "label": "Global ARPU",
        "value": "0.00782",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.82",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y",
          "+1% Q/Q"
        ],
        "quote": "Global ARPU $7.82 (+6% Y/Y, +1% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            135,
            1296,
            586,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 +4%",
                "调整后利润率 23%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (7%)",
                "调整后利润率 49%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "streaming",
              "label": "面向消费者业务",
              "notes": [
                "同比 +5%",
                "调整后利润率 5%",
                "同比 +32 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 23%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 20%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 3%",
                  "同比 (13 个百分点)"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 0%"
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
              "id": "other_nonoperating",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +23 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +19 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比持平",
              "环比 -1%"
            ]
          },
          {
            "id": "arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 +6%",
              "环比 +1%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q2-fy24",
    "company": "Warner Bros. Discovery",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.7,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.4,
          "notes": [
            "(5%) Y/Y",
            "12% adj. margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5.3,
          "notes": [
            "(8%) Y/Y",
            "38% adj. margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.6,
          "notes": [
            "(6%) Y/Y",
            "(4%) adj. margin",
            "(4pp) Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.6,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.2
      },
      "operatingExpenses": {
        "total": 13.7,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.7,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "impairments",
            "label": "Impairments & dispositions",
            "value": 9.4,
            "notes": [
              "97% of revenue",
              "+97pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "36% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -10.2,
        "notes": [
          "(105%) margin",
          "(96pp) Y/Y"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "value": "103300000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "103.3M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y",
          "+4% Q/Q"
        ],
        "quote": "DTC subscribers 103.3M (+7% Y/Y, +4% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            47,
            1232,
            1008,
            60
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "value": "0.008",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$8.00",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y",
          "+2% Q/Q"
        ],
        "quote": "Global ARPU $8.00 (+3% Y/Y, +2% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            47,
            1291,
            1008,
            60
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (5%)",
                "调整后利润率 12%",
                "同比 (3pp)"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (8%)",
                "调整后利润率 38%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "streaming",
              "label": "直接面向消费者",
              "notes": [
                "同比 (6%)",
                "调整后利润率 (4%)",
                "同比 (4pp)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售及管理费用",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 18%",
                  "同比 (1pp)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
                  "同比 (0pp)"
                ]
              },
              {
                "id": "impairments",
                "label": "减值与处置",
                "notes": [
                  "占收入 97%",
                  "同比 +97 个百分点"
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
              "利润率 36%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "经营亏损",
            "notes": [
              "利润率 (105%)",
              "同比 (96pp)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于经营亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +7%",
              "环比 +4%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 +3%",
              "环比 +2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q4-fy23",
    "company": "Warner Bros. Discovery",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.3,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.2,
          "notes": [
            "(17%) Y/Y",
            "17% adj. margin"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5,
          "notes": [
            "(9%) Y/Y",
            "44% adj. margin"
          ]
        },
        {
          "id": "dtc",
          "label": "Direct to consumer",
          "value": 2.5,
          "notes": [
            "+3% Y/Y",
            "(2%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.5,
          "notes": [
            ""
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.9
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": [
              "25% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 2,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          },
          {
            "id": "asset_impairment",
            "label": "Asset impairment",
            "value": 0.016,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax"
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
        "value": 4.4,
        "notes": [
          "43% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(2%) margin",
          "+15pp Y/Y"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "97.7M",
        "value": "97700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y",
          "+2% Q/Q"
        ],
        "quote": "DTC subscribers 97.7M (+2% Y/Y, +2% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            111,
            1251,
            638,
            42
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.94",
        "value": "0.00794",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y",
          "+3% Q/Q"
        ],
        "quote": "Global ARPU $7.94 (+5% Y/Y, +3% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            142,
            1298,
            607,
            42
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (17%)",
                "调整后利润率 17%"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (9%)",
                "调整后利润率 44%"
              ]
            },
            {
              "id": "dtc",
              "label": "面向消费者直接服务",
              "notes": [
                "同比 +3%",
                "调整后利润率 (2%)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                ""
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
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 25%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%"
                ]
              },
              {
                "id": "asset_impairment",
                "label": "资产减值",
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +15 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图仅列到营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +2%",
              "环比 +2%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 +5%",
              "环比 +3%"
            ]
          }
        ],
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月"
      }
    }
  },
  {
    "key": "warner-bros-q2-fy25",
    "company": "Warner Bros. Discovery",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.8,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.8,
          "notes": [
            "+55% Y/Y",
            "23% adj. margin",
            "+14pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.8,
          "notes": [
            "(9%) Y/Y",
            "31% adj. margin",
            "(6pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 2.8,
          "notes": [
            "+9% Y/Y",
            "10% adj. margin",
            "+15pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -1.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6
      },
      "operatingExpenses": {
        "total": 4,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": [
              "25% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.4,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.1
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.8,
        "notes": [
          "39% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.2,
        "notes": [
          "(2%) margin",
          "+103pp Y/Y"
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "literal": "125.7M",
        "value": "125700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y",
          "+3% Q/Q"
        ],
        "quote": "DTC subscribers 125.7M (+22% Y/Y & +3% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            125,
            1218,
            700,
            36
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "literal": "$7.14",
        "value": "0.00714",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "-11% Y/Y",
          "+0% Q/Q"
        ],
        "quote": "Global ARPU $7.14 (-11% Y/Y & +0% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1260,
            600,
            36
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
            "同比 +1%"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 +55%",
                "调整后利润率 23%",
                "同比 +14 个百分点"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (9%)",
                "调整后利润率 31%",
                "同比 (6 个百分点)"
              ]
            },
            {
              "id": "streaming",
              "label": "流媒体",
              "notes": [
                "同比 +9%",
                "调整后利润率 10%",
                "同比 +15 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 25%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "other_operating_expense",
                "label": "其他"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 39%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +103 个百分点"
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
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +22%",
              "环比 +3%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 -11%",
              "环比 +0%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q3-fy24",
    "company": "Warner Bros. Discovery",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.6,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.7,
          "notes": [
            "(17%) Y/Y",
            "11% adj. margin",
            "(12pp) Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 5,
          "notes": [
            "+3% Y/Y",
            "42% adj. margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Direct to consumer",
          "value": 2.6,
          "notes": [
            "+8% Y/Y",
            "11% adj. margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.7,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.2
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.8,
            "notes": [
              "18% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.014,
            "notes": []
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax"
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.146,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.146
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.4,
        "notes": [
          "46% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "3% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dtc_subscribers",
        "label": "DTC Subscribers",
        "value": "110500000",
        "unit": "count",
        "currency": null,
        "literal": "110.5M",
        "notes": [
          "+15% Y/Y",
          "+7% Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DTC Subscribers 110.5M (+15% Y/Y & +7% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            125,
            1220,
            690,
            40
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "value": "0.00784",
        "unit": "K",
        "currency": "USD",
        "literal": "$7.84",
        "notes": [
          "-1% Y/Y",
          "-2% Q/Q"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Global ARPU $8.00 (-1% Y/Y & -2% Q/Q); official Q3 correction: Global ARPU $7.84",
        "authoritativeCorrection": {
          "sourceLiteral": "$8.00",
          "reason": "The official WBD Q3 2024 earnings release reports Global ARPU $7.84; $8.00 belongs to Q2 2024. https://www.sec.gov/Archives/edgar/data/1437107/000143710724000184/wbd3q24earningsreleasefi.htm",
          "approval": "user-directed-source-correction"
        },
        "anchor": {
          "type": "image-box",
          "box": [
            180,
            1262,
            620,
            40
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (17%)",
                "调整后利润率 11%",
                "同比 (12 个百分点)"
              ]
            },
            {
              "id": "networks",
              "label": "电视网络",
              "notes": [
                "同比 +3%",
                "调整后利润率 42%",
                "同比 (7 个百分点)"
              ]
            },
            {
              "id": "streaming",
              "label": "直接面向消费者",
              "notes": [
                "同比 +8%",
                "调整后利润率 11%",
                "同比 +6 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 25%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 18%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "other_operating_expense",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_nonoperating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +6 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +15%",
              "环比 +7%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 -1%",
              "环比 -2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q4-fy24",
    "company": "Warner Bros. Discovery",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/warner-bros-q4-fy24.png",
    "roundingTolerance": 0.21,
    "revenue": {
      "total": 10,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 3.7,
          "notes": [
            "+15% Y/Y",
            "26% adj. margin",
            "+9pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.8,
          "notes": [
            "(5%) Y/Y",
            "40% adj. margin",
            "(4pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": [
            "Direct to",
            "consumer"
          ],
          "value": 2.7,
          "notes": [
            "+5% Y/Y",
            "15% adj. margin",
            "+18pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -1,
          "notes": []
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
        "value": 5.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.2,
            "notes": [
              "22% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.6,
            "notes": [
              "16% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 0.5,
            "notes": []
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax included in nonoperating Other"
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.8,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.8,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.5,
        "notes": [
          "45% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.6,
        "notes": [
          "(6%) margin",
          "+0pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "DTC subscribers",
        "value": "116900000",
        "unit": "count",
        "currency": null,
        "literal": "116.9M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Q/Q"
        ],
        "quote": "DTC subscribers 116.9M (+6% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            48,
            1197,
            837,
            59
          ]
        }
      },
      {
        "id": "arpu",
        "label": "Global ARPU",
        "value": "0.00744",
        "unit": "K",
        "currency": "USD",
        "literal": "$7.44",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "-6% Y/Y",
          "-5% Q/Q"
        ],
        "quote": "Global ARPU $7.44 (-6% Y/Y & -5% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            48,
            1255,
            837,
            61
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 +15%",
                "调整后利润率 26%",
                "同比 +9 个百分点"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (5%)",
                "调整后利润率 40%",
                "同比 (4 个百分点)"
              ]
            },
            {
              "id": "streaming",
              "label": [
                "直接面向",
                "消费者"
              ],
              "notes": [
                "同比 +5%",
                "调整后利润率 15%",
                "同比 +18 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": []
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 22%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 16%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "other_operating_expense",
                "label": "其他",
                "notes": []
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_nonoperating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 45%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "环比 +6%"
            ]
          },
          {
            "id": "arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 -6%",
              "环比 -5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "warner-bros-q1-fy25",
    "company": "Warner Bros. Discovery",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/warner-bros-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "studios",
          "label": "Studios",
          "value": 2.3,
          "notes": [
            "(18%) Y/Y",
            "11% adj. margin",
            "+5pp Y/Y"
          ]
        },
        {
          "id": "networks",
          "label": "Networks",
          "value": 4.8,
          "notes": [
            "(7%) Y/Y",
            "38% adj. margin",
            "(4pp) Y/Y"
          ]
        },
        {
          "id": "streaming",
          "label": "Streaming",
          "value": 2.7,
          "notes": [
            "+8% Y/Y",
            "13% adj. margin",
            "+9pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.8
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
        "value": 5.1
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.2,
            "notes": [
              "24% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.5,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1
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
        "value": 3.8,
        "notes": [
          "43% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -0.037,
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
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "value": "122300000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "122.3M",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y",
          "+5% Q/Q"
        ],
        "quote": "DTC subscribers 122.3M (+23% Y/Y & +5% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            48,
            1197,
            837,
            60
          ]
        }
      },
      {
        "id": "global_arpu",
        "label": "Global ARPU",
        "value": "0.00711",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$7.11",
        "basis": "unspecified",
        "notes": [
          "-9% Y/Y",
          "-4% Q/Q"
        ],
        "quote": "Global ARPU $7.11 (-9% Y/Y & -4% Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            48,
            1257,
            837,
            60
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "studios",
              "label": "影视工作室",
              "notes": [
                "同比 (18%)",
                "调整后利润率 11%",
                "同比 +5 个百分点"
              ]
            },
            {
              "id": "networks",
              "label": "线性网络",
              "notes": [
                "同比 (7%)",
                "调整后利润率 38%",
                "同比 (4 个百分点)"
              ]
            },
            {
              "id": "streaming",
              "label": "流媒体",
              "notes": [
                "同比 +8%",
                "调整后利润率 13%",
                "同比 +9 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": [
              "营业",
              "亏损"
            ],
            "notes": [
              "利润率 (0%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "同比 +23%",
              "环比 +5%"
            ]
          },
          {
            "id": "global_arpu",
            "label": "全球 ARPU",
            "notes": [
              "同比 -9%",
              "环比 -4%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
