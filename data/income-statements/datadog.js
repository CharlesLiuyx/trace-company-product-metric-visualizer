/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "datadog-q3-fy25",
    "company": "Datadog",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 886,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 634,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 252,
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
        "value": 176
      },
      "operatingExpenses": {
        "total": 715,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 402,
            "notes": [
              "45% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 239,
            "notes": [
              "27% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 74,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
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
        "value": 709,
        "notes": [
          "80% margin",
          "+0pp Y/Y",
          "Revenue less cost of revenue differs by $1M because the source chart rounds each value independently."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -6,
        "notes": [
          "(1%) margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -6,
        "notes": [
          "No separate net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                  "占收入 45%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "利润率 80%",
              "同比 +0 个百分点",
              "收入减收入成本因源图逐项四舍五入相差 $1M。"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "源图未单独显示净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "datadog-q4-fy25",
    "company": "Datadog",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 953,
      "notes": [
        "+29% Y/Y",
        "Regional amounts sum to $954M because the source chart rounds each segment independently."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 679,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 275,
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
        "value": 187
      },
      "operatingExpenses": {
        "total": 757,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 418,
            "notes": [
              "44% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 264,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 74,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
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
      "total": 44,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 44
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
        "value": 766,
        "notes": [
          "80% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 47,
        "notes": [
          "The displayed net profit differs by $1M from the rounded operating-profit + Other − Tax bridge."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +29%",
            "地区收入逐项四舍五入后合计为 $954M。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                  "占收入 44%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "显示的净利润与四舍五入后的营业利润、其他项目和税费桥接相差 $1M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "datadog-q1-fy26",
    "company": "Datadog",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1006,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 724,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 282,
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
        "value": 209
      },
      "operatingExpenses": {
        "total": 790,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 435,
            "notes": [
              "43% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 280,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 75,
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
        "value": 6
      }
    },
    "otherIncome": {
      "total": 52,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 52
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
        "value": 797,
        "notes": [
          "79% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7,
        "notes": [
          "1% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 53,
        "notes": [
          "5% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                  "占收入 43%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "利润率 79%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "datadog-q2-fy26",
    "company": "Datadog",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1121,
      "notes": [
        "+36% Y/Y",
        "Regional amounts sum to $1,122M; source values are retained as displayed."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 825,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 297,
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
        "value": 240
      },
      "operatingExpenses": {
        "total": 876,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 478,
            "notes": [
              "43% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 312,
            "notes": [
              "28% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 86,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
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
        "value": 881,
        "notes": [
          "79% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5,
        "notes": [
          "0% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 45,
        "notes": [
          "4% margin",
          "+4pp Y/Y",
          "Displayed operating profit plus Other totals $44M; source net profit is $45M. No tax is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +36%",
            "地区收入合计为 $1,122M，保留原图各项显示值。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                  "占收入 43%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (1 个百分点)"
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
              "利润率 79%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +4 个百分点",
              "营业利润与其他项目合计为 $44M，原图净利润显示 $45M，未单列税费。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "datadog-q1-fy23",
    "company": "Datadog",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 481,
      "notes": [
        "+33% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 341,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 140,
          "notes": [
            "+36% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 100,
        "notes": []
      },
      "operatingExpenses": {
        "total": 416,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 229,
            "notes": [
              "48% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 145,
            "notes": [
              "30% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 42,
            "notes": [
              "7% of revenue",
              "(10pp) Y/Y"
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
        "value": 382,
        "notes": [
          "79% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(7%) margin",
          "(10pp) Y/Y"
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "130",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 130%",
        "basis": "unspecified",
        "notes": [
          "Unchanged"
        ],
        "quote": "DBNR\n> 130%\nUnchanged",
        "anchor": {
          "type": "image-box",
          "box": [
            124,
            1179,
            185,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "25500",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "25,500",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "Customers 25,500 +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            168
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2910",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,910",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "> $100K 2,910 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            168
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +33%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +36%"
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
                  "占收入 48%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 30%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (10 个百分点)"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "保持不变"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (10 个百分点)"
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
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "保持不变"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +29%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q1-fy24",
    "company": "Datadog",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 611,
      "notes": [
        "+27% Y/Y",
        "Regional values sum to $612M because source values are rounded independently."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 426,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 186,
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
        "value": 110
      },
      "operatingExpenses": {
        "total": 489,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 270,
            "notes": [
              "44% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 174,
            "notes": [
              "28% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 45,
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
        "value": 4
      }
    },
    "otherIncome": {
      "total": 34,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 34
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
        "value": 501,
        "notes": [
          "82% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 12,
        "notes": [
          "2% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 43,
        "notes": [
          "7% margin",
          "+12pp Y/Y",
          "Rounded operating profit plus interest minus tax totals $42M; source net profit is $43M."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "28000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "28,000",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 28,000 +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            518,
            168
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3340",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,340",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "> $100K 3,340 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            518,
            168
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
            "同比 +27%",
            "原图地区收入逐项取整后合计为 $612M。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +32%"
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
                  "占收入 44%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +12 个百分点",
              "原图取整后的营业利润加利息减税费为 $42M，净利润显示 $43M。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 10 万美元的客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q1-fy25",
    "company": "Datadog",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 762,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 534,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 228,
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
        "value": 158
      },
      "operatingExpenses": {
        "total": 616,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 341,
            "notes": [
              "45% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 214,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 61,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
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
        "value": 604,
        "notes": [
          "79% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -12,
        "notes": [
          "(2%) margin",
          "(4pp) Y/Y"
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
        "id": "customers",
        "label": "Customers",
        "value": "30500",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "30,500",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 30,500 +9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1143,
            517,
            85
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3770",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,770",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "> $100K 3,770 +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1229,
            517,
            81
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                  "占收入 45%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "利润率 79%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费 > $100K 的客户数",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q2-fy23",
    "company": "Datadog",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 509,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 356,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 153,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 101
      },
      "operatingExpenses": {
        "total": 430,
        "notes": [
          "Source expense items sum to $429M versus displayed total $430M due to rounding."
        ],
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 239,
            "notes": [
              "47% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 147,
            "notes": [
              "29% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 43,
            "notes": [
              "8% of revenue",
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
        "value": 408,
        "notes": [
          "80% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -22,
        "notes": [
          "(4%) margin",
          "(4pp) Y/Y"
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 120%",
        "basis": "unspecified",
        "notes": [
          "-10pp Q/Q"
        ],
        "quote": "DBNR\n> 120%\n-10pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            124,
            1179,
            184,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "26100",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "26,100",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "Customers 26,100 +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1179,
            435,
            90
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2990",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,990",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "> $100K 2,990 +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1268,
            435,
            78
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +33%"
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
              "原图费用分项合计 $429M，显示总额为 $430M，差异来自四舍五入。"
            ],
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 29%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "利润率 80%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (4 个百分点)"
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
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "环比 -10 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +29%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q2-fy24",
    "company": "Datadog",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 645,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 448,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 197,
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
        "value": 123
      },
      "operatingExpenses": {
        "total": 509,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 275,
            "notes": [
              "43% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 187,
            "notes": [
              "29% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 48,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source expense items sum to $510M while the displayed total is $509M."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4
      }
    },
    "otherIncome": {
      "total": 35,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 35
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
        "value": 522,
        "notes": [
          "81% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 13,
        "notes": [
          "2% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 44,
        "notes": [
          "7% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "28700",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "28,700",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 28,700 +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            517,
            83
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "3390",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,390",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "> $100K 3,390 +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1262,
            517,
            85
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +29%"
              ]
            }
          ],
          "notes": [
            "同比 +27%"
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 81%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +8 个百分点"
            ]
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "tax": {
            "label": "税费"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 43%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 29%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              }
            ],
            "notes": [
              "原图费用明细合计 $510M，显示总额为 $509M。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息收入"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "large-customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q2-fy25",
    "company": "Datadog",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 827,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 587,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 240,
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
        "value": 166
      },
      "operatingExpenses": {
        "total": 696,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 387,
            "notes": [
              "47% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 239,
            "notes": [
              "29% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 70,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
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
        "value": 661,
        "notes": [
          "80% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -36,
        "notes": [
          "(4%) margin",
          "(6pp) Y/Y",
          "Displayed gross profit minus operating expenses is ($35M); the source reports operating loss ($36M)."
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
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 29%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "利润率 80%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (6 个百分点)",
              "原图毛利润减营业费用为 ($35M)；原图营业亏损显示 ($36M)。"
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
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户数",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "31400",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "31,400",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 31,400 +9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1143,
            517,
            85
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3850",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,850",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "> $100K 3,850 +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1228,
            517,
            82
          ]
        }
      }
    ]
  },
  {
    "key": "datadog-q3-fy22",
    "company": "Datadog",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 437,
      "notes": [
        "+61% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 312,
          "notes": [
            "+63% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 124,
          "notes": [
            "+58% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 94,
        "notes": []
      },
      "operatingExpenses": {
        "total": 374,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 205,
            "notes": [
              "47% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 129,
            "notes": [
              "30% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 39,
            "notes": [
              "9% of revenue",
              "Unchanged"
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
        "value": 342,
        "notes": [
          "79% margin",
          "+2pp Y/Y",
          "Source values independently rounded; financial sums differ by $1M."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -31,
        "notes": [
          "(7%) margin",
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "130",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 130%",
        "basis": "unspecified",
        "notes": [
          "Unchanged"
        ],
        "quote": "DBNR\n> 130%\nUnchanged",
        "anchor": {
          "type": "image-box",
          "box": [
            124,
            1179,
            185,
            167
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "22200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22,200",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "Customers 22,200 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            90
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2600",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,600",
        "basis": "unspecified",
        "notes": [
          "+44% Y/Y"
        ],
        "quote": "> $100K 2,600 +44% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1268,
            434,
            77
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +61%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +63%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +58%"
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
                  "占收入 47%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 30%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "保持不变"
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
              "利润率 79%",
              "同比 +2 个百分点",
              "源图金额独立舍入；财务加总相差 $1M。"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "保持不变"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +27%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +44%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q3-fy23",
    "company": "Datadog",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 548,
      "notes": [
        "+25% Y/Y",
        "Regional amounts sum to $547M; source values are independently rounded."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 381,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 166,
          "notes": [
            "+34% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 103
      },
      "operatingExpenses": {
        "total": 448,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 240,
            "notes": [
              "44% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 157,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 51,
            "notes": [
              "9% of revenue",
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
        "value": 444,
        "notes": [
          "81% margin",
          "+3pp Y/Y",
          "Revenue less cost of revenue differs by $1M due to source rounding."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -4,
        "notes": [
          "(1%) margin",
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "120",
        "unit": "%",
        "currency": null,
        "comparison": "lt",
        "literal": "< 120%",
        "basis": "unspecified",
        "notes": [],
        "quote": "DBNR\n< 120%",
        "anchor": {
          "type": "image-box",
          "box": [
            124,
            1179,
            185,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "26800",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "26,800",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers 26,800 +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            168
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3130",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,130",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "> $100K 3,130 +20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            168
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +34%"
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
                  "占收入 44%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 29%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
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
              "利润率 81%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "operatingMetrics": [
          {
            "id": "dbnr",
            "label": "DBNR"
          },
          {
            "id": "customers",
            "label": "客户数"
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户"
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q3-fy24",
    "company": "Datadog",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 690,
      "notes": [
        "+26% Y/Y",
        "Regional revenue sums to $691M; source amounts are retained as displayed."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 485,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 206,
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
        "value": 138,
        "notes": []
      },
      "operatingExpenses": {
        "total": 532,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 292,
            "notes": [
              "42% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 188,
            "notes": [
              "27% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 52,
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
        "value": 4,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 36,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 36,
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
        "value": 552,
        "notes": [
          "80% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 20,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 52,
        "notes": [
          "7% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "29216",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "29,216",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 29,216 +9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            322,
            1143,
            516,
            167
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3390",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,390",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "> $100K 3,390 +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            322,
            1143,
            516,
            167
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
            "同比 +26%",
            "地区收入合计为 $691M；保留原图各项显示值。"
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
              "id": "international",
              "label": "国际",
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
          "tax": {
            "label": "税费"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 42%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
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
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest",
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户数",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q4-fy22",
    "company": "Datadog",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 469,
      "notes": [
        "+44% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 337,
          "notes": [
            "+45% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 132,
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
        "value": 97,
        "notes": []
      },
      "operatingExpenses": {
        "total": 407,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 219,
            "notes": [
              "47% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 149,
            "notes": [
              "32% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 39,
            "notes": [
              "8% of revenue",
              "(0.4pp) Y/Y"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 373,
        "notes": [
          "79% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(7%) margin",
          "(10pp) Y/Y"
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
        "id": "dbnr",
        "label": "DBNR",
        "value": "130",
        "unit": "%",
        "currency": null,
        "comparison": "gt",
        "literal": "> 130%",
        "basis": "unspecified",
        "notes": [
          "Unchanged"
        ],
        "quote": "DBNR\n> 130%\nUnchanged",
        "anchor": {
          "type": "image-box",
          "box": [
            124,
            1179,
            185,
            168
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "23200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "23,200",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Customers 23,200 +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1179,
            434,
            85
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "2780",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,780",
        "basis": "unspecified",
        "notes": [
          "+38% Y/Y"
        ],
        "quote": "> $100K 2,780 +38% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1263,
            434,
            83
          ]
        }
      }
    ],
    "notes": [
      "Source-rounded amounts: revenue less cost of revenue is $372M versus displayed gross profit $373M; gross profit less operating expenses is ($34M) versus displayed operating loss ($35M)."
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +44%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +45%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 47%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 32%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (0.4 个百分点)"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (10 个百分点)"
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
            "id": "dbnr",
            "label": "DBNR",
            "notes": [
              "保持不变"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +38%"
            ]
          }
        ],
        "notes": [
          "原图金额已四舍五入：收入减收入成本为 $372M，显示毛利润 $373M；毛利润减营业费用为 ($34M)，显示营业亏损 ($35M)。"
        ]
      }
    }
  },
  {
    "key": "datadog-q4-fy23",
    "company": "Datadog",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 590,
      "notes": [
        "+26% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 409,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 181,
          "notes": [
            "+37% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 105,
        "notes": []
      },
      "operatingExpenses": {
        "total": 457,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 253,
            "notes": [
              "43% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 160,
            "notes": [
              "27% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 44,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 30,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 30,
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
        "value": 485,
        "notes": [
          "82% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "5% margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 54,
        "notes": [
          "9% margin",
          "+15pp Y/Y",
          "Source rounds independently: 28 + 30 − 3 = 55 versus displayed net profit 54 ($M)."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "literal": "27,300",
        "value": "27300",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Customers 27,300 +18% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1215,
            518,
            45
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "literal": "3,190",
        "value": "3190",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "> $100K 3,190 +15% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1257,
            518,
            45
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
            "同比 +26%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +37%"
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
                  "占收入 43%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
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
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 82%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 +15 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户数",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "datadog-q4-fy24",
    "company": "Datadog",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/datadog-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 738,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 516,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 222,
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
        "value": 144,
        "notes": []
      },
      "operatingExpenses": {
        "total": 584,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 316,
            "notes": [
              "43% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 208,
            "notes": [
              "28% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 60,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 8,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 44,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 44,
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
        "value": 594,
        "notes": [
          "80% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9,
        "notes": [
          "1% margin",
          "(3pp) Y/Y",
          "Source independently rounded gross profit and operating expenses differ from operating profit by $1M."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 46,
        "notes": [
          "6% margin",
          "(3pp) Y/Y",
          "Source independently rounded operating profit plus interest less tax differs from net profit by $1M."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +25%"
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
              "id": "international",
              "label": "国际",
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
                  "占收入 43%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
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
              "id": "interest",
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 80%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (3 个百分点)",
              "原图各项独立取整，毛利润减营业费用与营业利润相差 $1M。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (3 个百分点)",
              "原图各项独立取整，营业利润加利息减税费与净利润相差 $1M。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +12%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "30000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "30,000",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Customers 30,000 +10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1143,
            517,
            167
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "3610",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "3,610",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "> $100K 3,610 +12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1143,
            517,
            167
          ]
        }
      }
    ]
  }
]);
})(window);
