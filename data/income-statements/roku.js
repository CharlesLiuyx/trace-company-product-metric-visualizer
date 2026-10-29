/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "roku-q2-fy24",
    "company": "Roku",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q2-fy24.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 968,
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 824,
          "notes": [
            "+11% Y/Y",
            "53% gross margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 144,
          "notes": [
            "+39% Y/Y",
            "(11%) gross margin",
            "+8pp Y/Y"
          ]
        }
      ],
      "notes": [
        "+14% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 543,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 384,
            "notes": []
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 159,
            "notes": []
          }
        ]
      },
      "operatingExpenses": {
        "total": 496,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 222,
            "notes": [
              "23% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 175,
            "notes": [
              "18% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 99,
            "notes": [
              "10% of revenue",
              "+0pp Y/Y"
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
        "value": 425,
        "notes": [
          "44% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -71,
        "notes": [
          "(7%) margin",
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
        "id": "households",
        "label": "Streaming households",
        "value": "83600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "83.6M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Streaming households\n83.6M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1175,
            466,
            154
          ]
        }
      },
      {
        "id": "hours",
        "label": "Streaming hours",
        "value": "30100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "30.1B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Streaming hours\n30.1B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            513,
            1175,
            380,
            154
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04068",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$40.68",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "ARPU\n$40.68\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            897,
            1175,
            180,
            154
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +11%",
                "毛利率 53%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +39%",
                "毛利率 (11%)",
                "同比 +8 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 44%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +7 个百分点"
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
            "id": "households",
            "label": "流媒体家庭数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "arpu",
            "label": "ARPU",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q4-fy25",
    "company": "Roku",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q4-fy25.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1395,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 1224,
          "notes": [
            "+18% Y/Y",
            "53% gross margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "devices",
          "label": "Devices",
          "value": 171,
          "notes": [
            "+3% Y/Y",
            "(23%) gross margin",
            "+5pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 788,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 577
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 211
          }
        ]
      },
      "operatingExpenses": {
        "total": 541,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 255,
            "notes": [
              "18% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 185,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 101,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
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
        "value": 607,
        "notes": [
          "44% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 66,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 81
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +18%",
                "毛利率 53%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "devices",
              "label": "设备",
              "notes": [
                "同比 +3%",
                "毛利率 (23%)",
                "同比 +5 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
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
              "利润率 44%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
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
    "key": "roku-q1-fy26",
    "company": "Roku",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q1-fy26.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1249,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 1131,
          "notes": [
            "+28% Y/Y",
            "53% gross margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "devices",
          "label": "Devices",
          "value": 118,
          "notes": [
            "(16%) Y/Y",
            "(14%) gross margin",
            "(3pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 684,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 547
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 137
          }
        ]
      },
      "operatingExpenses": {
        "total": 513,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 221,
            "notes": [
              "18% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 190,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 103,
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
        "value": 3
      }
    },
    "otherIncome": {
      "total": 38,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 38
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
        "value": 565,
        "notes": [
          "45% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 52,
        "notes": [
          "4% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 86
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +28%",
                "毛利率 53%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "devices",
              "label": "设备",
              "notes": [
                "同比 (16%)",
                "毛利率 (14%)",
                "同比 (3 个百分点)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "利润率 45%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +10 个百分点"
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
    "key": "roku-q1-fy24",
    "company": "Roku",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q1-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 881,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 755,
          "notes": [
            "+19% Y/Y",
            "52% gross margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 127,
          "notes": [
            "+19% Y/Y",
            "(5%) gross margin",
            "(8pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 493,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 361,
            "notes": []
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 133,
            "notes": []
          }
        ]
      },
      "operatingExpenses": {
        "total": 460,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 202,
            "notes": [
              "23% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 181,
            "notes": [
              "20% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 78,
            "notes": [
              "9% of revenue",
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
        "value": 388,
        "notes": [
          "44% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -72,
        "notes": [
          "(8%) margin",
          "+20pp Y/Y"
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
        "id": "households",
        "label": "Streaming households",
        "value": "81600000",
        "unit": "count",
        "currency": null,
        "literal": "81.6M",
        "comparison": "eq",
        "notes": [
          "+14% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Streaming households\n81.6M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1175,
            466,
            154
          ]
        }
      },
      {
        "id": "hours",
        "label": "Streaming hours",
        "value": "30800000000",
        "unit": "count",
        "currency": null,
        "literal": "30.8B",
        "comparison": "eq",
        "notes": [
          "+23% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Streaming hours\n30.8B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            513,
            1175,
            379,
            154
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04065",
        "unit": "K",
        "currency": "USD",
        "literal": "$40.65",
        "comparison": "eq",
        "notes": [
          "Flat Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARPU\n$40.65\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            897,
            1175,
            181,
            159
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +19%",
                "毛利率 52%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +19%",
                "毛利率 (5%)",
                "同比 (8 个百分点)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台",
                "notes": []
              },
              {
                "id": "player_cost",
                "label": "播放器",
                "notes": []
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
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
              "利润率 44%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 +20 个百分点"
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
            "id": "households",
            "label": "流媒体家庭数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "arpu",
            "label": "ARPU",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q3-fy25",
    "company": "Roku",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q3-fy25.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1211,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 1065,
          "notes": [
            "+17% Y/Y",
            "51% gross margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "devices",
          "label": "Player",
          "value": 146,
          "notes": [
            "+(5%) Y/Y",
            "(16%) gross margin",
            "(8pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 686,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 517
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 169
          }
        ]
      },
      "operatingExpenses": {
        "total": 515,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 242,
            "notes": [
              "20% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 182,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 91,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 16,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 16
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
          "43% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9,
        "notes": [
          "1% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 25
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +17%",
                "毛利率 51%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "id": "devices",
              "label": "播放器",
              "notes": [
                "同比 +(5%) Y/Y",
                "毛利率 (16%)",
                "同比 (8 个百分点)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
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
              "利润率 43%",
              "同比 (2 个百分点)"
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
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "streaming_hours",
        "value": "36500000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "36.5B",
        "label": "Streaming hours",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Streaming hours\n36.5B\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            164,
            1186,
            381,
            154
          ]
        }
      }
    ]
  },
  {
    "key": "roku-q1-fy23",
    "company": "Roku",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended Mar. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q1-fy23.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 741,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 635,
          "notes": [
            "(1%) Y/Y",
            "53% gross margin",
            "(6pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 106,
          "notes": [
            "+18% Y/Y",
            "3% gross margin",
            "+18pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 403,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 301
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 103
          }
        ]
      },
      "operatingExpenses": {
        "total": 550,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 234,
            "notes": [
              "32% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 220,
            "notes": [
              "30% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "13% of revenue",
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
        "value": 338,
        "notes": [
          "46% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -213,
        "notes": [
          "(29%) margin",
          "(25pp) Y/Y"
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
        "id": "active_accounts",
        "label": "Active accounts",
        "value": "72000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "72M",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Active accounts\n72M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1173,
            352,
            155
          ]
        }
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "25100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "25.1B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Streaming hours\n25.1B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1173,
            380,
            155
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04067",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$40.67",
        "basis": "unspecified",
        "notes": [
          "(5%) Y/Y"
        ],
        "quote": "ARPU\n$40.67\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            787,
            1173,
            182,
            160
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 (1%)",
                "毛利率 53%",
                "同比 (6 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +18%",
                "毛利率 3%",
                "同比 +18 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 32%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
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
              "利润率 46%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (29%)",
              "同比 (25 个百分点)"
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
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (5%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q4-fy22",
    "company": "Roku",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q4-fy22.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 867,
      "notes": [
        "+0% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 731,
          "notes": [
            "+5% Y/Y",
            "56% gross margin"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 136,
          "notes": [
            "(18%) Y/Y",
            "(32%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 502,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 323
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 179
          }
        ]
      },
      "operatingExpenses": {
        "total": 614,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 298,
            "notes": [
              "34% of revenue",
              "+15pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 221,
            "notes": [
              "25% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "11% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 364,
        "notes": [
          "42% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -250,
        "notes": [
          "(29%) margin",
          "(31pp) Y/Y"
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
        "id": "active_accounts",
        "label": "Active accounts",
        "value": "70000000",
        "unit": "count",
        "currency": null,
        "literal": "70M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Active accounts\n70M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1173,
            352,
            156
          ]
        }
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "23900000000",
        "unit": "count",
        "currency": null,
        "literal": "23.9B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Streaming hours\n23.9B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            401,
            1173,
            380,
            156
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04168",
        "unit": "K",
        "currency": "USD",
        "literal": "$41.68",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "ARPU\n$41.68\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            785,
            1173,
            182,
            160
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +0%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +5%",
                "毛利率 56%"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 (18%)",
                "毛利率 (32%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 34%",
                  "同比 +15 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 42%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (29%)",
              "同比 (31 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图仅报告到营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q2-fy23",
    "company": "Roku",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended June 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q2-fy23.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 847,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 744,
          "notes": [
            "+11% Y/Y",
            "53% gross margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 103,
          "notes": [
            "+9% Y/Y",
            "(17%) gross margin",
            "+3pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 469,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 348
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 121
          }
        ]
      },
      "operatingExpenses": {
        "total": 504,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 227,
            "notes": [
              "27% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 192,
            "notes": [
              "23% of revenue",
              "(3pp) Y/Y"
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
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 378,
        "notes": [
          "45% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -126,
        "notes": [
          "(15%) margin",
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
        "id": "active_accounts",
        "label": "Active accounts",
        "value": "73500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "73.5M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Active accounts\n73.5M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1174,
            352,
            155
          ]
        }
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "25100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "25.1B",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Streaming hours\n25.1B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            402,
            1174,
            378,
            155
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04067",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$40.67",
        "basis": "unspecified",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "ARPU\n$40.67\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            785,
            1174,
            182,
            159
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +11%",
                "毛利率 53%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +9%",
                "毛利率 (17%)",
                "同比 +3 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 27%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
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
              "利润率 45%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (15%)",
              "同比 (1 个百分点)"
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
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (7%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q3-fy22",
    "company": "Roku",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended Sep. 30, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q3-fy22.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 761,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 670,
          "notes": [
            "+15% Y/Y",
            "56% gross margin"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 91,
          "notes": [
            "(7%) Y/Y",
            "(19%) gross margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 405,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 296
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 109
          }
        ]
      },
      "operatingExpenses": {
        "total": 504,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 209,
            "notes": [
              "28% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 208,
            "notes": [
              "27% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 87,
            "notes": [
              "11% of revenue",
              "+2pp Y/Y"
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
        "value": 357,
        "notes": [
          "47% margin",
          "(7pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -147,
        "notes": [
          "(19%) margin",
          "(29pp) Y/Y"
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
        "id": "active_accounts",
        "label": "Active accounts",
        "value": "65000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "65M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Active accounts\n65M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1175,
            352,
            154
          ]
        }
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "22000000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22B",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Streaming hours\n22B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            402,
            1175,
            379,
            154
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.044",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$44",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "ARPU\n$44\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            787,
            1175,
            180,
            158
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +15%",
                "毛利率 56%"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 (7%)",
                "毛利率 (19%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 28%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
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
              "利润率 47%",
              "同比 (7 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (19%)",
              "同比 (29 个百分点)"
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
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q4-fy23",
    "company": "Roku",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q4-fy23.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 985,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 829,
          "notes": [
            "+13% Y/Y",
            "55% gross margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 156,
          "notes": [
            "+15% Y/Y",
            "(13%) gross margin",
            "+19pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 547,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 370
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 176
          }
        ]
      },
      "operatingExpenses": {
        "total": 542,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 265,
            "notes": [
              "27% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 184,
            "notes": [
              "19% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 94,
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 438,
        "notes": [
          "44% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -104,
        "notes": [
          "(11%) margin",
          "+18pp Y/Y"
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
        "id": "active_accounts",
        "label": "Active accounts",
        "literal": "80.0M",
        "value": "80000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Active accounts\n80.0M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1174,
            352,
            155
          ]
        }
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "literal": "29.1B",
        "value": "29100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Streaming hours\n29.1B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            402,
            1174,
            378,
            155
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "literal": "$39.92",
        "value": "0.03992",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "ARPU\n$39.92\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            785,
            1174,
            182,
            155
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +13%",
                "毛利率 55%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +15%",
                "毛利率 (13%)",
                "同比 +19 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 27%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 44%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 +18 个百分点"
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
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (4%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q2-fy25",
    "company": "Roku",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q2-fy25.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1111,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 976,
          "notes": [
            "+18% Y/Y",
            "51% gross margin",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 136,
          "notes": [
            "+(6%) Y/Y",
            "0% gross margin",
            "+11pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 613,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 478
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 136
          }
        ]
      },
      "operatingExpenses": {
        "total": 521,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 243,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 178,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 100,
            "notes": [
              "9% of revenue",
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
        "value": 498,
        "notes": [
          "45% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -23,
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
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "35400000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "35.4B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Streaming hours\n35.4B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            164,
            1185,
            380,
            156
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +18%",
                "毛利率 51%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 (6%)",
                "毛利率 0%",
                "同比 +11 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
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
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
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
              "利润率 45%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
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
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q4-fy24",
    "company": "Roku",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q4-fy24.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1201,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 1035,
          "notes": [
            "+25% Y/Y",
            "54% gross margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "devices",
          "label": "Player",
          "value": 166,
          "notes": [
            "+6% Y/Y",
            "(29%) gross margin",
            "(15pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 688,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 475
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 213
          }
        ]
      },
      "operatingExpenses": {
        "total": 551,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 272,
            "notes": [
              "23% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 185,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 94,
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
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
        "value": 513,
        "notes": [
          "43% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -39,
        "notes": [
          "(3%) margin",
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
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +25%",
                "毛利率 54%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "devices",
              "label": "播放器",
              "notes": [
                "同比 +6%",
                "毛利率 (29%)",
                "同比 (15 个百分点)"
              ]
            }
          ],
          "notes": [
            "同比 +22%"
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 23%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arpu",
            "label": "ARPU",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "households",
            "label": "流媒体家庭数",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04149",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$41.49",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "ARPU\n$41.49\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            36,
            1150,
            181,
            160
          ]
        }
      },
      {
        "id": "households",
        "label": "Streaming households",
        "value": "89800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "89.8M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Streaming households\n89.8M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            220,
            1152,
            468,
            156
          ]
        }
      },
      {
        "id": "hours",
        "label": "Streaming hours",
        "value": "127100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "127.1B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Streaming hours\n127.1B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            690,
            1152,
            380,
            156
          ]
        }
      }
    ]
  },
  {
    "key": "roku-q3-fy24",
    "company": "Roku",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q3-fy24.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1062,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 908,
          "notes": [
            "+15% Y/Y",
            "54% gross margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 154,
          "notes": [
            "+23% Y/Y",
            "(8%) gross margin",
            "(0pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 582,
        "notes": [],
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 416,
            "notes": []
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 166,
            "notes": []
          }
        ]
      },
      "operatingExpenses": {
        "total": 516,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 237,
            "notes": [
              "22% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 179,
            "notes": [
              "17% of revenue",
              "(14pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 100,
            "notes": [
              "9% of revenue",
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
        "value": 480,
        "notes": [
          "45% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating loss",
        "value": -36,
        "notes": [
          "(3%) margin",
          "+35pp Y/Y"
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
        "id": "arpu",
        "label": "ARPU",
        "value": "0.0411",
        "unit": "K",
        "currency": "USD",
        "literal": "$41.10",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "ARPU\n$41.10\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            37,
            1150,
            180,
            160
          ]
        }
      },
      {
        "id": "households",
        "label": "Streaming households",
        "value": "85500000",
        "unit": "count",
        "currency": null,
        "literal": "85.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Streaming households\n85.5M\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1155,
            466,
            155
          ]
        }
      },
      {
        "id": "hours",
        "label": "Streaming hours",
        "value": "32000000000",
        "unit": "count",
        "currency": null,
        "literal": "32.0B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Streaming hours\n32.0B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            691,
            1155,
            380,
            155
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +15%",
                "毛利率 54%",
                "同比 +6 个百分点"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +23%",
                "毛利率 (8%)",
                "同比 (0 个百分点)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (14 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
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
              "利润率 45%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +35 个百分点"
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
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "households",
            "label": "流媒体家庭数",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q3-fy23",
    "company": "Roku",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q3-fy23.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 912,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 787,
          "notes": [
            "+17% Y/Y",
            "48% gross margin",
            "(8pp) Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 125,
          "notes": [
            "+38% Y/Y",
            "(8%) gross margin",
            "+8pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 543,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 409
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 135
          }
        ]
      },
      "operatingExpenses": {
        "total": 719,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 308,
            "notes": [
              "34% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 282,
            "notes": [
              "31% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 129,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
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
        "value": 369,
        "notes": [
          "40% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -350,
        "notes": [
          "(38%) margin",
          "(19pp) Y/Y"
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
        "id": "active_accounts",
        "label": "Active accounts",
        "value": "75800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "75.8M",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Active accounts\n75.8M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            43,
            1173,
            352,
            155
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "26700000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "26.7B",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Streaming hours\n26.7B\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            400,
            1173,
            381,
            155
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.04103",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$41.03",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "ARPU\n$41.03\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            786,
            1173,
            181,
            155
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +17%",
                "毛利率 48%",
                "同比 (8 个百分点)"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +38%",
                "毛利率 (8%)",
                "同比 +8 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 34%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 40%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (38%)",
              "同比 (19 个百分点)"
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
            "id": "active_accounts",
            "label": "活跃账户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "arpu",
            "label": "每户收入",
            "notes": [
              "同比 (7%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roku-q1-fy25",
    "company": "Roku",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roku-q1-fy25.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 1021,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "platform",
          "label": "Platform",
          "value": 881,
          "notes": [
            "+17% Y/Y",
            "53% gross margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "player",
          "label": "Player",
          "value": 140,
          "notes": [
            "+11% Y/Y",
            "(14%) gross margin",
            "(9pp) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 576,
        "items": [
          {
            "id": "platform_cost",
            "label": "Platform",
            "value": 417
          },
          {
            "id": "player_cost",
            "label": "Player",
            "value": 159
          }
        ]
      },
      "operatingExpenses": {
        "total": 503,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 224,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 185,
            "notes": [
              "18% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 95,
            "notes": [
              "9% of revenue",
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 445,
        "notes": [
          "44% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -58,
        "notes": [
          "(6%) margin",
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
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "platform",
              "label": "平台",
              "notes": [
                "同比 +17%",
                "毛利率 53%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "player",
              "label": "播放器",
              "notes": [
                "同比 +11%",
                "毛利率 (14%)",
                "同比 (9 个百分点)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "platform_cost",
                "label": "平台"
              },
              {
                "id": "player_cost",
                "label": "播放器"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
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
                "label": "一般及行政",
                "notes": [
                  "占收入 9%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 44%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +3 个百分点"
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
            "id": "streaming_hours",
            "label": "流媒体观看时长",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "streaming_hours",
        "label": "Streaming hours",
        "value": "35800000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "35.8B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Streaming hours\n35.8B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            146,
            1185,
            381,
            154
          ]
        }
      }
    ]
  }
]);
})(window);
