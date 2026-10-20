/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "roblox-q1-fy23",
    "company": "Roblox",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 655,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 426,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 119,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 65,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 46,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 152
      },
      "operatingExpenses": {
        "total": 793,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 182,
            "notes": [
              "28% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 211,
            "notes": [
              "32% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 276,
            "notes": [
              "42% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "15% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 27,
            "notes": [
              "4% of revenue",
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
        "value": 504,
        "notes": [
          "77% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -290,
        "notes": [
          "(44%) margin",
          "(16pp) Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "66000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "66M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "DAU\n66M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1163,
            159,
            160
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "37000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "37M",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "DAU over 13\n37M\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            212,
            1160,
            310,
            164
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "14500000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "14.5B",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Hours Engaged\n14.5B\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1160,
            352,
            164
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "774",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$774M",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Bookings\n$774M\n+23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            889,
            1160,
            188,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +30%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 28%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 32%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 42%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
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
              "利润率 77%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (44%)",
              "同比 (16 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活跃用户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活跃用户",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q2-fy26",
    "company": "Roblox",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1469,
      "notes": [
        "+36% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 846,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 304,
          "notes": [
            "+49% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 175,
          "notes": [
            "+51% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 144,
          "notes": [
            "+59% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 292
      },
      "operatingExpenses": {
        "total": 1406,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 363,
            "notes": [
              "25% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 363,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 420,
            "notes": [
              "29% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 199,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 61,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 1177,
        "notes": [
          "80% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -229,
        "notes": [
          "(16%) margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -229,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +36%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +49%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +51%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +59%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 25%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
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
              "利润率 80%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "roblox-q1-fy26",
    "company": "Roblox",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1442,
      "notes": [
        "+39% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 838,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 295,
          "notes": [
            "+52% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 169,
          "notes": [
            "+55% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 140,
          "notes": [
            "+64% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 294
      },
      "operatingExpenses": {
        "total": 1442,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 423,
            "notes": [
              "29% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 422,
            "notes": [
              "29% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 324,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 209,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 64,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 1148,
        "notes": [
          "80% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -294,
        "notes": [
          "(20%) margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -294,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +39%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +52%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +55%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +64%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 29%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
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
              "利润率 80%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (20%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "roblox-q4-fy25",
    "company": "Roblox",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1415,
      "notes": [
        "+43% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 836,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 281,
          "notes": [
            "+54% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 164,
          "notes": [
            "+59% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 134,
          "notes": [
            "+69% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 315
      },
      "operatingExpenses": {
        "total": 1459,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 477,
            "notes": [
              "34% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 410,
            "notes": [
              "29% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 329,
            "notes": [
              "23% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 164,
            "notes": [
              "12% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 79,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 1100,
        "notes": [
          "78% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -359,
        "notes": [
          "(25%) margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -359,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +43%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +54%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +59%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +69%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 34%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 29%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 23%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
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
              "利润率 78%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "roblox-q1-fy24",
    "company": "Roblox",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 801,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 510,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 146,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 85,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 61,
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
        "value": 179,
        "notes": []
      },
      "operatingExpenses": {
        "total": 925,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 202,
            "notes": [
              "25% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 227,
            "notes": [
              "28% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 362,
            "notes": [
              "45% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 36,
            "notes": [
              "4% of revenue",
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
        "value": 622,
        "notes": [
          "78% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -302,
        "notes": [
          "(38%) margin",
          "+6pp Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "78000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "78M",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "DAU\n78M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1164,
            160,
            156
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "45000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "45M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "DAU over 13\n45M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1160,
            313,
            164
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "16700000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "16.7B",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Hours Engaged\n16.7B\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1160,
            353,
            164
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "924",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$924M",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Bookings\n$924M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            887,
            1160,
            191,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +22%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 25%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 28%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
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
              "利润率 78%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (38%)",
              "同比 +6 个百分点"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +19%"
            ]
          }
        ],
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月"
      }
    }
  },
  {
    "key": "roblox-q1-fy25",
    "company": "Roblox",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1035,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 647,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 194,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 109,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 85,
          "notes": [
            "+40% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 225,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1065,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 282,
            "notes": [
              "27% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 242,
            "notes": [
              "23% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 375,
            "notes": [
              "36% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 119,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 48,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 811,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -255,
        "notes": [
          "(25%) margin",
          "+13pp Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "97800000",
        "unit": "count",
        "currency": null,
        "literal": "97.8M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "DAU\n97.8M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1150,
            160,
            159
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "61000000",
        "unit": "count",
        "currency": null,
        "literal": "61M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+36% Y/Y"
        ],
        "quote": "DAU over 13\n61M\n+36% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            212,
            1147,
            311,
            163
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "21700000000",
        "unit": "count",
        "currency": null,
        "literal": "21.7B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+30% Y/Y"
        ],
        "quote": "Hours Engaged\n21.7B\n+30% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1147,
            352,
            163
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "1207",
        "unit": "M",
        "currency": "USD",
        "literal": "$1,207M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "Bookings\n$1,207M\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            889,
            1147,
            189,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +40%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 27%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 23%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 36%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 5%",
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
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "label": "净损益未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活跃用户",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活",
            "notes": [
              "同比 +36%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +30%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +31%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q2-fy23",
    "company": "Roblox",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 681,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 440,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 123,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 69,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 49,
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
        "value": 162,
        "notes": []
      },
      "operatingExpenses": {
        "total": 833,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 166,
            "notes": [
              "24% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 225,
            "notes": [
              "33% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 315,
            "notes": [
              "46% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 96,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "4% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 519,
        "notes": [
          "76% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -314,
        "notes": [
          "(46%) margin",
          "(17pp) Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "66000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "66M",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "DAU\n66M\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1164,
            160,
            159
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "37000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "37M",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "DAU over 13\n37M\n+33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1159,
            310,
            167
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "14000000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "14.0B",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Hours Engaged\n14.0B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1159,
            353,
            167
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "781",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$781M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Bookings\n$781M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1159,
            190,
            167
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +23%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 24%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 33%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 46%",
                  "同比 +10 个百分点"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
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
              "利润率 76%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (46%)",
              "同比 (17 个百分点)"
            ]
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +22%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q2-fy24",
    "company": "Roblox",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 894,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 566,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 163,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 95,
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 69,
          "notes": [
            "+42% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 199
      },
      "operatingExpenses": {
        "total": 933,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 208,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 221,
            "notes": [
              "25% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 361,
            "notes": [
              "40% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "12% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 36,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 695,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -238,
        "notes": [
          "(27%) margin",
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
        "id": "dau",
        "label": "DAU",
        "value": "79500000",
        "unit": "count",
        "currency": null,
        "literal": "79.5M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "DAU\n79.5M\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1163,
            160,
            160
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "46400000",
        "unit": "count",
        "currency": null,
        "literal": "46.4M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "DAU over 13\n46.4M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            212,
            1160,
            310,
            165
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "17400000000",
        "unit": "count",
        "currency": null,
        "literal": "17.4B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Hours Engaged\n17.4B\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1160,
            353,
            165
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "955",
        "unit": "M",
        "currency": "USD",
        "literal": "$955M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Bookings\n$955M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1160,
            190,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +42%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 25%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 40%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (27%)",
              "同比 +20 个百分点"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13岁以上日活用户",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +22%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q2-fy25",
    "company": "Roblox",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1081,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 670,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 205,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 116,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 91,
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
        "value": 236
      },
      "operatingExpenses": {
        "total": 1167,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 316,
            "notes": [
              "29% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 261,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 385,
            "notes": [
              "36% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 152,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 53,
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 845,
        "notes": [
          "78% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -323,
        "notes": [
          "(25%) margin",
          "(3pp) Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "112000000",
        "unit": "count",
        "currency": null,
        "literal": "112M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+41% Y/Y"
        ],
        "quote": "DAU\n112M\n+41% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1149,
            159,
            161
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "71000000",
        "unit": "count",
        "currency": null,
        "literal": "71M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+54% Y/Y"
        ],
        "quote": "DAU over 13\n71M\n+54% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1147,
            311,
            165
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "27400000000",
        "unit": "count",
        "currency": null,
        "literal": "27.4B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+58% Y/Y"
        ],
        "quote": "Hours Engaged\n27.4B\n+58% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1147,
            352,
            165
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "1437",
        "unit": "M",
        "currency": "USD",
        "literal": "$1,437M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+51% Y/Y"
        ],
        "quote": "Bookings\n$1,437M\n+51% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1146,
            191,
            167
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
            "同比 +21%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 29%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 36%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 5%",
                  "同比 +1 个百分点"
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
              "利润率 78%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 (3 个百分点)"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +41%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13岁以上日活",
            "notes": [
              "同比 +54%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +58%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +51%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q3-fy22",
    "company": "Roblox",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 518,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 342,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 92,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 49,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 35,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 126
      },
      "operatingExpenses": {
        "total": 691,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 151,
            "notes": [
              "29% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 191,
            "notes": [
              "37% of revenue",
              "+14pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 236,
            "notes": [
              "45% of revenue",
              "+18pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 81,
            "notes": [
              "16% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 32,
            "notes": [
              "6% of revenue",
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
        "value": 391,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -300,
        "notes": [
          "(58%) margin",
          "(43pp) Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "58800000",
        "unit": "count",
        "currency": null,
        "literal": "58.8M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "DAU\n58.8M\n+24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1163,
            160,
            159
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "31900000",
        "unit": "count",
        "currency": null,
        "literal": "31.9M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "DAU over 13\n31.9M\n+34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1160,
            310,
            164
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "13400000000",
        "unit": "count",
        "currency": null,
        "literal": "13.4B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Hours Engaged\n13.4B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1160,
            350,
            164
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "702",
        "unit": "M",
        "currency": "USD",
        "literal": "$702M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Bookings\n$702M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            887,
            1160,
            191,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +11%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 29%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 37%",
                  "同比 +14 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 +18 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 6%",
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
              "毛利率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (58%)",
              "同比 (43 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q3-fy23",
    "company": "Roblox",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 713,
      "notes": [
        "+38% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 459,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 128,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 74,
          "notes": [
            "+52% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 53,
          "notes": [
            "+49% Y/Y"
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
        "total": 850,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 171,
            "notes": [
              "24% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 219,
            "notes": [
              "31% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 322,
            "notes": [
              "45% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 98,
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 41,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 550,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -300,
        "notes": [
          "(42%) margin",
          "+16pp Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "70000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "70M",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "DAU\n70M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1163,
            160,
            160
          ]
        },
        "i18n": {
          "zh": {
            "label": "日活用户",
            "notes": [
              "同比 +20%"
            ]
          }
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "40000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "40M",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "DAU over 13\n40M\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1160,
            313,
            165
          ]
        },
        "i18n": {
          "zh": {
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +25%"
            ]
          }
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "16000000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "16.0B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Hours Engaged\n16.0B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1160,
            352,
            165
          ]
        },
        "i18n": {
          "zh": {
            "label": "参与时长",
            "notes": [
              "同比 +20%"
            ]
          }
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "840",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$840M",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Bookings\n$840M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1160,
            190,
            165
          ]
        },
        "i18n": {
          "zh": {
            "label": "预订额",
            "notes": [
              "同比 +20%"
            ]
          }
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +38%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +52%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +49%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 24%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 31%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 6%",
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
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (42%)",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +20%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q3-fy24",
    "company": "Roblox",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 919,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 583,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 168,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 96,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 73,
          "notes": [
            "+29% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 205
      },
      "operatingExpenses": {
        "total": 993,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 232,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 245,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 365,
            "notes": [
              "40% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 99,
            "notes": [
              "11% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 53,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 714,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -279,
        "notes": [
          "(30%) margin",
          "+12pp Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "89000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "89M",
        "quote": "DAU\n89M\n+27% Y/Y",
        "notes": [
          "+27% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1147,
            160,
            163
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "54000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "54M",
        "quote": "DAU over 13\n54M\n+34% Y/Y",
        "notes": [
          "+34% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1147,
            311,
            163
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "20700000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20.7B",
        "quote": "Hours Engaged\n20.7B\n+29% Y/Y",
        "notes": [
          "+29% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1147,
            353,
            163
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "1128",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1,128M",
        "quote": "Bookings\n$1,128M\n+34% Y/Y",
        "notes": [
          "+34% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            887,
            1147,
            193,
            163
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +29%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 27%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 40%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 6%",
                  "同比 (0 个百分点)"
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
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (30%)",
              "同比 +12 个百分点"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13岁以上日活",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +29%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +34%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q3-fy25",
    "company": "Roblox",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1360,
      "notes": [
        "+48% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 817,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 265,
          "notes": [
            "+58% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 153,
          "notes": [
            "+60% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 126,
          "notes": [
            "+73% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 296
      },
      "operatingExpenses": {
        "total": 1360,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 428,
            "notes": [
              "31% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 398,
            "notes": [
              "29% of revenue",
              "(10pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 321,
            "notes": [
              "24% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 145,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 67,
            "notes": [
              "5% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
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
        "value": 1063,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -297,
        "notes": [
          "(22%) margin",
          "+9pp Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "152000000",
        "unit": "count",
        "currency": null,
        "literal": "152M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+70% Y/Y"
        ],
        "quote": "DAU\n152M\n+70% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1148,
            159,
            160
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "101000000",
        "unit": "count",
        "currency": null,
        "literal": "101M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+89% Y/Y"
        ],
        "quote": "DAU over 13\n101M\n+89% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1146,
            311,
            165
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "39600000000",
        "unit": "count",
        "currency": null,
        "literal": "39.6B",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+91% Y/Y"
        ],
        "quote": "Hours Engaged\n39.6B\n+91% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1146,
            354,
            165
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "1922",
        "unit": "M",
        "currency": "USD",
        "literal": "$1,922M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+70% Y/Y"
        ],
        "quote": "Bookings\n$1,922M\n+70% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1146,
            190,
            165
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +48%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +58%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +60%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +73%"
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 31%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 (10 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 24%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 5%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 +9 个百分点"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +70%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13 岁以上日活用户",
            "notes": [
              "同比 +89%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +91%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +70%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q4-fy22",
    "company": "Roblox",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 579,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 377,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 105,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 57,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 40,
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
        "value": 142
      },
      "operatingExpenses": {
        "total": 738,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 182,
            "notes": [
              "31% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 199,
            "notes": [
              "34% of revenue",
              "+10pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 248,
            "notes": [
              "43% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 80,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 437,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -302,
        "notes": [
          "(52%) margin",
          "(28pp) Y/Y"
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
        "id": "dau",
        "label": "DAU",
        "value": "59000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "59M",
        "notes": [
          "+19% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "DAU\n59M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1163,
            160,
            160
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "32000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "32M",
        "notes": [
          "+26% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "DAU over 13\n32M\n+26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1159,
            311,
            167
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "12800000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "12.8B",
        "notes": [
          "+18% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Hours Engaged\n12.8B\n+18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            529,
            1159,
            353,
            167
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "899",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$899M",
        "notes": [
          "+17% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Bookings\n$899M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            887,
            1160,
            191,
            165
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
            "同比 +2%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
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
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 31%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 34%",
                  "同比 +10 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 43%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 5%",
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
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (52%)",
              "同比 (28 个百分点)"
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13岁以上日活用户",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "roblox-q4-fy23",
    "company": "Roblox",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/roblox-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 750,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 480,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 135,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 79,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 56,
          "notes": [
            "+39% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 172
      },
      "operatingExpenses": {
        "total": 933,
        "items": [
          {
            "id": "developer_fees",
            "label": "Developer fees",
            "value": 222,
            "notes": [
              "30% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "infrastructure",
            "label": "Infrastructure",
            "value": 223,
            "notes": [
              "30% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 341,
            "notes": [
              "45% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 99,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 49,
            "notes": [
              "6% of revenue",
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
        "value": 578,
        "notes": [
          "77% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -355,
        "notes": [
          "(47%) margin",
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
        "id": "dau",
        "label": "DAU",
        "value": "71500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "71.5M",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "DAU\n71.5M\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            46,
            1159,
            160,
            164
          ]
        }
      },
      {
        "id": "dau_over_13",
        "label": "DAU over 13",
        "value": "41400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "41.4M",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "DAU over 13\n41.4M\n+28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1159,
            313,
            164
          ]
        }
      },
      {
        "id": "hours_engaged",
        "label": "Hours Engaged",
        "value": "15500000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "15.5B",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Hours Engaged\n15.5B\n+21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            530,
            1159,
            352,
            164
          ]
        }
      },
      {
        "id": "bookings",
        "label": "Bookings",
        "value": "1.127",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.127B",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "Bookings\n$1.127B\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            888,
            1159,
            190,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +39%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "label": "运营费用",
            "items": [
              {
                "id": "developer_fees",
                "label": "开发者费用",
                "notes": [
                  "占收入 30%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "infrastructure",
                "label": "基础设施",
                "notes": [
                  "占收入 30%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 6%",
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
              "利润率 77%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (47%)",
              "同比 +5 个百分点"
            ]
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
            "id": "dau",
            "label": "日活用户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "dau_over_13",
            "label": "13岁以上日活用户",
            "notes": [
              "同比 +28%"
            ]
          },
          {
            "id": "hours_engaged",
            "label": "参与时长",
            "notes": [
              "同比 +21%"
            ]
          },
          {
            "id": "bookings",
            "label": "预订额",
            "notes": [
              "同比 +25%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
