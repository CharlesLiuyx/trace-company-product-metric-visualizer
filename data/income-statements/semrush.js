/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "semrush-q1-fy25",
    "company": "Semrush",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 3,
    "sourceImage": "input/processed/semrush-q1-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 105,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 46,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "united_kingdom",
          "label": "United Kingdom",
          "value": 9,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 50,
          "notes": [
            "+35% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 20,
        "notes": []
      },
      "operatingExpenses": {
        "total": 85,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 41,
            "notes": [
              "39% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 22,
            "notes": [
              "21% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 22,
            "notes": [
              "21% of revenue",
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
        "value": 85,
        "notes": [
          "81% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.074,
        "notes": [
          "(0%) margin",
          "(2pp) Y/Y"
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
        "literal": "$425M",
        "value": "425",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "quote": "ARR\n$425M\n+20% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1115,
            165,
            164
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "literal": "106%",
        "value": "106",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "quote": "DBNR\n106%\n(1pp) Q/Q",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1115,
            165,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "literal": "118,000",
        "value": "118000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Customers\n118,000\n+5% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1111,
            299,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "united_kingdom",
              "label": "英国",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +35%"
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
                "label": "销售与市场（S&M）",
                "notes": [
                  "占收入 39%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发（R&D）",
                "notes": [
                  "占收入 21%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用（G&A）",
                "notes": [
                  "占收入 21%",
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
              "利润率 81%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (2 个百分点)"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q4-fy23",
    "company": "Semrush",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 83,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 39,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 8,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 36,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 14
      },
      "operatingExpenses": {
        "total": 67,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 31,
            "notes": [
              "37% of revenue",
              "(20pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 21,
            "notes": [
              "25% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 15,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 70,
        "notes": [
          "84% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "3% margin",
          "+25pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7,
        "notes": [
          "8% margin",
          "+28pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 6,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 6
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "337",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$337M",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "ARR\n$337M\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1154,
            165,
            164
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "107",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "107%",
        "basis": "unspecified",
        "notes": [
          "(2pp) Q/Q"
        ],
        "quote": "DBNR\n107%\n(2pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1154,
            165,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "108000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "108,000",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers\n108,000\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            475,
            1150,
            302,
            164
          ]
        }
      }
    ],
    "notes": [
      "Source rounded totals differ by $1M in the gross-profit and net-profit reconciliations."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "other",
              "label": "其他地区",
              "notes": [
                "同比 +28%"
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
                  "占收入 37%",
                  "同比 (20 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 25%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 84%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +25 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +28 个百分点"
            ]
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
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (2 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +13%"
            ]
          }
        ],
        "notes": [
          "原图取整后的毛利润和净利润勾稽各存在 $1M 差额。"
        ]
      }
    }
  },
  {
    "key": "semrush-q2-fy25",
    "company": "Semrush",
    "period": "Q2 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 109,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 47,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "united_kingdom",
          "label": "United Kingdom",
          "value": 9,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 52,
          "notes": [
            "+32% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 21
      },
      "operatingExpenses": {
        "total": 92,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 45,
            "notes": [
              "41% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 24,
            "notes": [
              "22% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 23,
            "notes": [
              "21% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 88,
        "notes": [
          "81% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -4,
        "notes": [
          "(4%) margin",
          "(8pp) Y/Y"
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
        "value": "435",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$435M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "ARR\n$435M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1115,
            165,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "105",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "105%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNR\n105%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1115,
            165,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "116000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "116,000",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Customers\n116,000\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1110,
            300,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "united_states",
              "label": "美国"
            },
            {
              "id": "united_kingdom",
              "label": "英国"
            },
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截至营业亏损，未披露净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q1-fy24",
    "company": "Semrush",
    "period": "Q1 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 86,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 41,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 8,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 37,
          "notes": [
            "+27% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 15
      },
      "operatingExpenses": {
        "total": 70,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 34,
            "notes": [
              "40% of revenue",
              "(11pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 18,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 17,
            "notes": [
              "20% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 71,
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "2% margin",
          "+17pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "2% margin",
          "+16pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 1
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "354",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$354M",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "ARR\n$354M\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1152,
            165,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "107",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "107%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n107%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            302,
            1152,
            165,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "112000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "112,000",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers\n112,000\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1149,
            301,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +27%"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 40%",
                  "同比 (11 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及管理",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +17 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +16 个百分点"
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
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q2-fy24",
    "company": "Semrush",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 91,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 43,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 9,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 40,
          "notes": [
            "+22% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 15
      },
      "operatingExpenses": {
        "total": 73,
        "notes": [
          "Source-rounded expense components sum to $72M."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 35,
            "notes": [
              "38% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 19,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 18,
            "notes": [
              "20% of revenue",
              "(6pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherExpenses": {
      "total": 2,
      "items": [
        {
          "id": "tax_other",
          "label": "Tax & Other",
          "value": 2
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 76,
        "notes": [
          "84% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "4% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "1% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "378",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$378M",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "ARR\n$378M\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1152,
            165,
            167
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "107",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "107%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n107%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1152,
            164,
            167
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "116000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "116,000",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Customers\n116,000\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1149,
            300,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +22%"
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
              "原图费用明细取整后合计为 $72M。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 38%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 20%",
                  "同比 (6 个百分点)"
                ]
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "tax_other",
              "label": "税费及其他"
            }
          ]
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
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +2 个百分点"
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
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q3-fy24",
    "company": "Semrush",
    "period": "Q3 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q3-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 97,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 44,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 9,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 44,
          "notes": [
            "+31% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 17
      },
      "operatingExpenses": {
        "total": 79,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 36,
            "notes": [
              "37% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 22,
            "notes": [
              "23% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 21,
            "notes": [
              "20% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "tax_other",
          "label": "Tax & Other",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 80,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "2% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "1% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "401",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$401M",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "ARR\n$401M\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1115,
            165,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "107",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "107%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNR\n107%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1115,
            164,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "117000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "117,000",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers\n117,000\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1111,
            300,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +31%"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 37%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 20%",
                  "同比 (4 个百分点)"
                ]
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "tax_other",
              "label": "税项及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (5 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "年度经常性收入",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "dbnr",
            "label": "美元净收入留存率",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q3-fy23",
    "company": "Semrush",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q3-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 79,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 38,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "uk",
          "label": "United Kingdom",
          "value": 8,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 33,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 13
      },
      "operatingExpenses": {
        "total": 63,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "38% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 19,
            "notes": [
              "24% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 14,
            "notes": [
              "18% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1
      }
    },
    "otherIncome": {
      "total": 2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 2
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
        "value": 66,
        "notes": [
          "83% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "3% margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4,
        "notes": [
          "5% margin",
          "+19pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "arr",
        "label": "ARR",
        "value": "323",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$323M",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "ARR\n$323M\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "109",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "109%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNR\n109%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1154,
            164,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "106000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "106,000",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers\n106,000\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1150,
            300,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "uk",
              "label": "英国",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +20%"
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
                  "占收入 38%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 24%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +2 个百分点"
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
              "利润率 83%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +19 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q2-fy23",
    "company": "Semrush",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "sourceImage": "input/processed/semrush-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 75,
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 35,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "united_kingdom",
          "label": "United Kingdom",
          "value": 7,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 33,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ],
      "notes": [
        "+19% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 13,
        "notes": []
      },
      "operatingExpenses": {
        "total": 64,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "40% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 19,
            "notes": [
              "26% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 14,
            "notes": [
              "19% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "exit_costs",
            "label": "Exit costs",
            "value": 0.3,
            "notes": [
              "Non-recurring",
              "(5pp Y/Y)"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 62,
        "notes": [
          "83% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -2,
        "notes": [
          "(3%) margin",
          "+10pp Y/Y"
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
        "value": "302",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$302M",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "ARR\n$302M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1152,
            165,
            165
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "notes": [
          "(4pp) Q/Q"
        ],
        "quote": "DBNR\n112%\n(4pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1152,
            164,
            165
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "104000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "104,000",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers\n104,000\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1150,
            301,
            165
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "united_kingdom",
              "label": "英国",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +19%"
              ]
            }
          ],
          "notes": [
            "同比 +19%"
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
                "label": "销售及营销",
                "notes": [
                  "占收入 40%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 26%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "exit_costs",
                "label": "退出成本",
                "notes": [
                  "非经常性",
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
              "毛利率 83%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +10 个百分点"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (4 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q3-fy22",
    "company": "Semrush",
    "period": "Q3 FY22",
    "periodNote": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 66,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 31,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "united_kingdom",
          "label": "United Kingdom",
          "value": 7,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 28,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 12,
        "notes": []
      },
      "operatingExpenses": {
        "total": 64,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 31,
            "notes": [
              "46% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 17,
            "notes": [
              "26% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 10,
            "notes": [
              "15% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "exit_costs",
            "label": "Exit costs",
            "value": 6,
            "notes": [
              "Non-recurring",
              "+9pp Y/Y"
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
        "value": 53,
        "notes": [
          "81% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -10,
        "notes": [
          "(16%) margin",
          "(15pp) Y/Y"
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
        "value": "267",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$267M",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "ARR $267M +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1154,
            165,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "122",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "122%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNR 122% (3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1154,
            165,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "94000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "94,000",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers 94,000 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            477,
            1150,
            301,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "united_kingdom",
              "label": "英国",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +28%"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 26%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "exit_costs",
                "label": "退出成本",
                "notes": [
                  "非经常性",
                  "同比 +9 个百分点"
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
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 (15 个百分点)"
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
            "id": "arr",
            "label": "年度经常性收入",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "dbnr",
            "label": "美元净留存率",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "semrush-q4-fy22",
    "company": "Semrush",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/semrush-q4-fy22.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 69,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 34,
          "notes": [
            "+37% Y/Y"
          ]
        },
        {
          "id": "united_kingdom",
          "label": "United Kingdom",
          "value": 7,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 28,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 12
      },
      "operatingExpenses": {
        "total": 72,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 40,
            "notes": [
              "48% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 17,
            "notes": [
              "25% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 13,
            "notes": [
              "19% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "exit_costs",
            "label": "Exit costs",
            "value": 2,
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
        "value": 57,
        "notes": [
          "83% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -15,
        "notes": [
          "(22%) margin",
          "(15pp) Y/Y"
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
        "value": "275",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$275M",
        "quote": "ARR\n$275M\n+28% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1152,
            165,
            165
          ]
        }
      },
      {
        "id": "dbnr",
        "label": "DBNR",
        "value": "118",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "118%",
        "quote": "DBNR\n118%\n(4pp) Q/Q",
        "basis": "unspecified",
        "notes": [
          "(4pp) Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            303,
            1152,
            165,
            165
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "95000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "95,000",
        "quote": "Customers\n95,000\n+16% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            475,
            1149,
            301,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +37%"
              ]
            },
            {
              "id": "united_kingdom",
              "label": "英国",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +19%"
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
                  "占收入 48%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 25%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "exit_costs",
                "label": "退出成本",
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
              "利润率 83%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 (15 个百分点)"
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
            "id": "arr",
            "label": "ARR",
            "notes": [
              "同比 +28%"
            ]
          },
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 (4 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
