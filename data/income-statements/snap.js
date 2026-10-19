/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "snap-q3-fy25",
    "company": "Snap",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1507,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 898,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 298,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 311,
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
        "value": 674
      },
      "operatingExpenses": {
        "total": 961,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 453,
            "notes": [
              "30% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 256,
            "notes": [
              "17% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 251,
            "notes": [
              "16% of revenue",
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
        "value": 833,
        "notes": [
          "55% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -128,
        "notes": [
          "(9%) margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -128,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +17%"
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
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 17%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
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
              "利润率 55%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "源图未显示单独的净利润/净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snap-q4-fy25",
    "company": "Snap",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1717,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1026,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 341,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 350,
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
        "value": 702
      },
      "operatingExpenses": {
        "total": 964,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 473,
            "notes": [
              "28% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 249,
            "notes": [
              "15% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 242,
            "notes": [
              "14% of revenue",
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
      "total": 14,
      "items": [
        {
          "label": "Unshown net other adjustments",
          "value": 14,
          "notes": [
            "Data-only residual required to reconcile the reported net profit after the displayed tax and Other expense."
          ]
        }
      ]
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
        "value": 1014,
        "notes": [
          "59% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 50,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 45,
        "notes": [
          "3% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 15%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
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
              "label": "未展开的其他净调整",
              "notes": [
                "用于在数据层对齐图中显示的税费、Other 费用与净利润。"
              ]
            }
          ]
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
              "利润率 59%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snap-q1-fy26",
    "company": "Snap",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1529,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 851,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 324,
          "notes": [
            "+45% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 354,
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
        "value": 665
      },
      "operatingExpenses": {
        "total": 938,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 478,
            "notes": [
              "31% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 239,
            "notes": [
              "16% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 221,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
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
        "value": 864,
        "notes": [
          "57% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -74,
        "notes": [
          "(5%) margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -74,
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
            "同比 +12%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +45%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 16%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
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
              "利润率 57%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "源图未显示单独的净利润/净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "snap-q2-fy26",
    "company": "Snap",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1599,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 943,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 354,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 302,
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
        "value": 668,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1102,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 542,
            "notes": [
              "34% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 298,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 261,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source-rounded components sum to $1,101M; source total is $1,102M."
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
        "value": 931,
        "notes": [
          "58% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -171,
        "notes": [
          "(11%) margin",
          "+30pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +17%"
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
                "label": "研发",
                "notes": [
                  "占收入 34%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
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
              "利润率 58%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 +30 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "493000000",
        "unit": "count",
        "currency": null,
        "literal": "493M",
        "notes": [
          "+5% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DAU\n493M\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            226,
            187,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America DAU",
        "value": "92000000",
        "unit": "count",
        "currency": null,
        "literal": "92M",
        "notes": [
          "(7%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "North America DAU\n92M\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            520,
            132,
            100
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "98000000",
        "unit": "count",
        "currency": null,
        "literal": "98M",
        "notes": [
          "(2%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Europe DAU\n98M\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            770,
            132,
            100
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world DAU",
        "value": "303000000",
        "unit": "count",
        "currency": null,
        "literal": "303M",
        "notes": [
          "+12% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Rest of world DAU\n303M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            963,
            132,
            105
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00325",
        "unit": "K",
        "currency": "USD",
        "literal": "$3.25",
        "notes": [
          "+13% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$3.25\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            332,
            1130,
            209,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "snap-q1-fy23",
    "company": "Snap",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q1-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 989,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 640,
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 158,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 191,
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
        "value": 440
      },
      "operatingExpenses": {
        "total": 914,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 455,
            "notes": [
              "46% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 268,
            "notes": [
              "27% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 190,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source-rounded components sum to $913M; source total is $914M."
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 549,
        "notes": [
          "56% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -365,
        "notes": [
          "(37%) margin",
          "(11pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "383000000",
        "unit": "count",
        "currency": null,
        "literal": "383M",
        "notes": [
          "+15% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DAU\n383M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1171,
            211,
            150
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00258",
        "unit": "K",
        "currency": "USD",
        "literal": "$2.58",
        "notes": [
          "(19%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$2.58\n(19%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            421,
            1171,
            211,
            150
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
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 (16%)"
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
              "id": "rest_of_world",
              "label": "世界其他地区",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 46%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              }
            ],
            "notes": [
              "原图分项合计 $913M，总额为 $914M，保留舍入差异。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 56%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (37%)",
              "同比 (11 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日均用户数",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (19%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q1-fy24",
    "company": "Snap",
    "period": "Q1 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q1-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1195,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 743,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 196,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 256,
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
        "value": 575
      },
      "operatingExpenses": {
        "total": 953,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 450,
            "notes": [
              "38% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 276,
            "notes": [
              "23% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 227,
            "notes": [
              "19% of revenue",
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
        "value": 620,
        "notes": [
          "52% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -333,
        "notes": [
          "(28%) margin",
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
        "value": "422000000",
        "unit": "count",
        "currency": null,
        "literal": "422M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "DAU\n422M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            56,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America DAU",
        "value": "100000000",
        "unit": "count",
        "currency": null,
        "literal": "100M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "-1% Y/Y"
        ],
        "quote": "North America DAU\n100M\n-1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            82,
            520,
            133,
            94
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "96000000",
        "unit": "count",
        "currency": null,
        "literal": "96M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Europe DAU\n96M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            82,
            827,
            133,
            90
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world DAU",
        "value": "226000000",
        "unit": "count",
        "currency": null,
        "literal": "226M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Rest of world DAU\n226M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            82,
            1052,
            133,
            90
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00283",
        "unit": "K",
        "currency": "USD",
        "literal": "$2.83",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "ARPU\n$2.83\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1166,
            210,
            152
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
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
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
                  "占收入 38%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
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
              "利润率 52%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (28%)",
              "同比 +9 个百分点"
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
            "id": "dau",
            "label": "日活跃用户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "dau_north_america",
            "label": "北美日活跃用户",
            "notes": [
              "同比 -1%"
            ]
          },
          {
            "id": "dau_europe",
            "label": "欧洲日活跃用户",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "dau_rest_of_world",
            "label": "世界其他地区日活跃用户",
            "notes": [
              "同比 +19%"
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
    "key": "snap-q1-fy25",
    "company": "Snap",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1363,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 832,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 224,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 308,
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
        "value": 639
      },
      "operatingExpenses": {
        "total": 918,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 424,
            "notes": [
              "31% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 258,
            "notes": [
              "19% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 235,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
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
        "value": 724,
        "notes": [
          "53% margin",
          "(7pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -194,
        "notes": [
          "(14%) margin",
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
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +20%"
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
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
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
              "利润率 53%",
              "同比 (7 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (14%)",
              "同比 +2 个百分点"
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
            "label": "日活跃用户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "dau_na",
            "label": "北美日活跃用户",
            "notes": [
              "同比 (1%)"
            ]
          },
          {
            "id": "dau_europe",
            "label": "欧洲日活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "dau_row",
            "label": "世界其他地区日活跃用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "460000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "460M",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "DAU\n460M\n+9% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            189,
            169
          ]
        }
      },
      {
        "id": "dau_na",
        "label": "North America DAU",
        "value": "99000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "99M",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "North America DAU\n99M\n(1%) Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            461,
            132,
            247
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "99000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "99M",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Europe DAU\n99M\n+3% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            742,
            132,
            208
          ]
        }
      },
      {
        "id": "dau_row",
        "label": "Rest of world DAU",
        "value": "262000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "262M",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Rest of world DAU\n262M\n+16% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            978,
            132,
            191
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00296",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.96",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "ARPU\n$2.96\n+5% Y/Y",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1130,
            210,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "snap-q2-fy23",
    "company": "Snap",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1068,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 687,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 182,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 199,
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
        "value": 497,
        "notes": []
      },
      "operatingExpenses": {
        "total": 975,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 477,
            "notes": [
              "45% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 281,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 217,
            "notes": [
              "20% of revenue",
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
        "value": 571,
        "notes": [
          "53% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -404,
        "notes": [
          "(38%) margin",
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
        "id": "dau",
        "label": "DAU",
        "value": "397000000",
        "unit": "count",
        "currency": null,
        "literal": "397M",
        "notes": [
          "+14% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DAU\n397M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            204,
            1171,
            210,
            148
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00269",
        "unit": "K",
        "currency": "USD",
        "literal": "$2.69",
        "notes": [
          "(16%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$2.69\n(16%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            422,
            1171,
            210,
            148
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
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +28%"
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
                  "占收入 45%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 26%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
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
              "利润率 53%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (38%)",
              "同比 (2 个百分点)"
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
            "id": "dau",
            "label": "日均用户数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (16%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q2-fy24",
    "company": "Snap",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1237,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 768,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 230,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 239,
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
        "value": 589
      },
      "operatingExpenses": {
        "total": 902,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 406,
            "notes": [
              "33% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 266,
            "notes": [
              "22% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 229,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source-rounded components sum to $901M; source total is $902M."
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
        "value": 648,
        "notes": [
          "52% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -254,
        "notes": [
          "(21%) margin",
          "+17pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "432000000",
        "literal": "432M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "DAU\n432M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America DAU",
        "value": "100000000",
        "literal": "100M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "North America DAU\n100M\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            595,
            132,
            90
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "97000000",
        "literal": "97M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Europe DAU\n97M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            863,
            132,
            90
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world DAU",
        "value": "235000000",
        "literal": "235M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Rest of world DAU\n235M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1052,
            132,
            90
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00286",
        "literal": "$2.86",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "ARPU\n$2.86\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1167,
            210,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "rest_of_world",
              "label": "世界其他地区",
              "notes": [
                "同比 +20%"
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
                  "占收入 33%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 22%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              }
            ],
            "notes": [
              "原图舍入后分项合计为 $901M，总额为 $902M。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (21%)",
              "同比 +17 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活跃用户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "dau_north_america",
            "label": "北美日活跃用户",
            "notes": [
              "同比 (0%)"
            ]
          },
          {
            "id": "dau_europe",
            "label": "欧洲日活跃用户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "dau_rest_of_world",
            "label": "世界其他地区日活跃用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q2-fy25",
    "company": "Snap",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1345,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 821,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 265,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 259,
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
        "value": 653
      },
      "operatingExpenses": {
        "total": 951,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 443,
            "notes": [
              "33% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 258,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 250,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
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
        "value": 692,
        "notes": [
          "51% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -260,
        "notes": [
          "(19%) margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 33%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
                  "同比 (2 个百分点)"
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
              "利润率 51%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (19%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "469000000",
        "unit": "count",
        "currency": null,
        "literal": "469M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "DAU\n469M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America DAU",
        "value": "98000000",
        "unit": "count",
        "currency": null,
        "literal": "98M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(2%) Y/Y"
        ],
        "quote": "North America DAU\n98M\n(2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            539,
            132,
            87
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "100000000",
        "unit": "count",
        "currency": null,
        "literal": "100M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Europe DAU\n100M\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            807,
            132,
            87
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world DAU",
        "value": "271000000",
        "unit": "count",
        "currency": null,
        "literal": "271M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Rest of world DAU\n271M\n+15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1022,
            132,
            87
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00287",
        "unit": "K",
        "currency": "USD",
        "literal": "$2.87",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "ARPU\n$2.87\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1130,
            210,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "snap-q3-fy22",
    "company": "Snap",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q3-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1128,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 812,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 161,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 155,
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
        "value": 467
      },
      "operatingExpenses": {
        "total": 1097,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 564,
            "notes": [
              "50% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 270,
            "notes": [
              "24% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 262,
            "notes": [
              "23% of revenue",
              "+7pp Y/Y"
            ]
          }
        ],
        "notes": [
          "Source-rounded components sum to $1,096M; source total is $1,097M."
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 662,
        "notes": [
          "59% margin",
          "+0.2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -435,
        "notes": [
          "(39%) margin",
          "(22pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "363000000",
        "unit": "count",
        "currency": null,
        "literal": "363M",
        "notes": [
          "+19% Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "DAU\n363M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1171,
            211,
            150
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00311",
        "unit": "K",
        "currency": "USD",
        "literal": "$3.11",
        "notes": [
          "(11%) Y/Y"
        ],
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU\n$3.11\n(11%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            421,
            1171,
            211,
            150
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
            "同比 +6%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +5%"
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
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 50%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 24%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 23%",
                  "同比 +7 个百分点"
                ]
              }
            ],
            "notes": [
              "原图各分项舍入后合计 $1,096M；原图总额为 $1,097M。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 59%",
              "同比 +0.2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (39%)",
              "同比 (22 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "DAU",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "arpu",
            "label": "ARPU",
            "notes": [
              "同比 (11%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q3-fy23",
    "company": "Snap",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1189,
      "notes": [
        "+5% Y/Y",
        "Source-rounded regional components sum to $1,188M; reported total is $1,189M."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 786,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 200,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 202,
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
        "value": 556
      },
      "operatingExpenses": {
        "total": 1013,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 495,
            "notes": [
              "42% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 297,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 221,
            "notes": [
              "19% of revenue",
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
        "value": 633,
        "notes": [
          "53% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -380,
        "notes": [
          "(32%) margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "406000000",
        "unit": "count",
        "currency": null,
        "literal": "406M",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "DAU\n406M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1169,
            211,
            151
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00293",
        "unit": "K",
        "currency": "USD",
        "literal": "$2.93",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "ARPU\n$2.93\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            421,
            1169,
            211,
            151
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
            "同比 +5%",
            "原图地区分项合计为 $1,188M，报告总收入为 $1,189M。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 +24%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 42%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 19%",
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
              "利润率 53%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (32%)",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "DAU",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "arpu",
            "label": "ARPU",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q3-fy24",
    "company": "Snap",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1373,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 858,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 249,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 266,
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
        "value": 639
      },
      "operatingExpenses": {
        "total": 907,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 413,
            "notes": [
              "30% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 273,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 221,
            "notes": [
              "16% of revenue",
              "(3pp) Y/Y"
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
        "value": 734,
        "notes": [
          "53% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -173,
        "notes": [
          "(13%) margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -173,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +32%"
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
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 (3 个百分点)"
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
              "利润率 53%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (13%)",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "源图未显示单独的净利润/净亏损项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "label": "日活跃用户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "label": "北美日活跃用户",
            "notes": [
              "同比 (0%)"
            ]
          },
          {
            "label": "欧洲日活跃用户",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "label": "世界其他地区日活跃用户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "label": "每用户平均收入",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "443000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "443M",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "DAU\n443M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_na",
        "label": "North America DAU",
        "value": "100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "100M",
        "basis": "unspecified",
        "notes": [
          "(0%) Y/Y"
        ],
        "quote": "North America DAU\n100M\n(0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            461,
            132,
            221
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "99000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "99M",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Europe DAU\n99M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            781,
            132,
            124
          ]
        }
      },
      {
        "id": "dau_row",
        "label": "Rest of world DAU",
        "value": "244000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "244M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Rest of world DAU\n244M\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1003,
            132,
            143
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00310",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.10",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "ARPU\n$3.10\n+6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1130,
            210,
            151
          ]
        }
      }
    ]
  },
  {
    "key": "snap-q4-fy22",
    "company": "Snap",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q4-fy22.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1300,
      "notes": [
        "+0.1% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 880,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 219,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 201,
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
        "value": 481,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1106,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 585,
            "notes": [
              "45% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 295,
            "notes": [
              "23% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 226,
            "notes": [
              "15% of revenue",
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
        "value": 818,
        "notes": [
          "63% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -288,
        "notes": [
          "(22%) margin",
          "(20pp) Y/Y"
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
        "value": "375000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "375M",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "DAU\n375M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            203,
            1169,
            211,
            151
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00347",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.47",
        "basis": "unspecified",
        "notes": [
          "(15%) Y/Y"
        ],
        "quote": "ARPU\n$3.47\n(15%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            421,
            1169,
            211,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "世界其他地区",
              "notes": [
                "同比 +28%"
              ]
            }
          ],
          "notes": [
            "同比 +0.1%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "研发",
                "notes": [
                  "占收入 45%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 23%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
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
              "毛利率 63%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 (20 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "operatingMetrics": [
          {
            "id": "dau",
            "label": "日活跃用户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "arpu",
            "label": "每用户平均收入",
            "notes": [
              "同比 (15%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "snap-q4-fy23",
    "company": "Snap",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q4-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1361,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 900,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 238,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 223,
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
        "value": 622
      },
      "operatingExpenses": {
        "total": 988,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 484,
            "notes": [
              "36% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 276,
            "notes": [
              "20% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 229,
            "notes": [
              "17% of revenue",
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
        "value": 739,
        "notes": [
          "54% margin",
          "(9pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -249,
        "notes": [
          "(18%) margin",
          "+4pp Y/Y"
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
        "value": "414000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "414M",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "DAU\n414M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America",
        "value": "100000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "100M",
        "notes": [
          "+0% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "North America\n100M\n+0% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            461,
            132,
            130
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe",
        "value": "96000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "96M",
        "notes": [
          "+4% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Europe\n96M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            807,
            132,
            104
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world",
        "value": "218000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "218M",
        "notes": [
          "+19% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Rest of world\n218M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            1060,
            132,
            104
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00329",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.29",
        "notes": [
          "(5%) Y/Y"
        ],
        "basis": "unspecified",
        "quote": "ARPU\n$3.29\n(5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1165,
            211,
            152
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
            "同比 +5%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +9%"
              ]
            },
            {
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
                "label": "研发",
                "notes": [
                  "占收入 36%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 17%",
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
              "利润率 54%",
              "同比 (9 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (18%)",
              "同比 +4 个百分点"
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
            "label": "日均用户数",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "label": "北美日均用户数",
            "notes": [
              "同比 +0%"
            ]
          },
          {
            "label": "欧洲日均用户数",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "label": "世界其他地区日均用户数",
            "notes": [
              "同比 +19%"
            ]
          },
          {
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
    "key": "snap-q4-fy24",
    "company": "Snap",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/snap-q4-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1557,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 969,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 287,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "rest_of_world",
          "label": "Rest of world",
          "value": 301,
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
        "value": 672,
        "notes": []
      },
      "operatingExpenses": {
        "total": 912,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 423,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 248,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 241,
            "notes": [
              "15% of revenue",
              "(2pp) Y/Y"
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
        "value": 885,
        "notes": [
          "57% margin",
          "(8pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -27,
        "notes": [
          "(2%) margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss; no net result is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "label": "北美",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "label": "欧洲",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "label": "世界其他地区",
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
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "label": "销售与营销",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "管理费用",
                "notes": [
                  "占收入 15%",
                  "同比 (2 个百分点)"
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
              "利润率 57%",
              "同比 (8 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "dau",
        "label": "DAU",
        "value": "453000000",
        "literal": "453M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "DAU\n453M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            227,
            188,
            168
          ]
        }
      },
      {
        "id": "dau_north_america",
        "label": "North America DAU",
        "value": "100000000",
        "literal": "100M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(1%) Y/Y"
        ],
        "quote": "North America DAU\n100M\n(1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            534,
            132,
            91
          ]
        }
      },
      {
        "id": "dau_europe",
        "label": "Europe DAU",
        "value": "99000000",
        "literal": "99M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Europe DAU\n99M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            785,
            132,
            90
          ]
        }
      },
      {
        "id": "dau_rest_of_world",
        "label": "Rest of world DAU",
        "value": "254000000",
        "literal": "254M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Rest of world DAU\n254M\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            60,
            977,
            132,
            90
          ]
        }
      },
      {
        "id": "arpu",
        "label": "ARPU",
        "value": "0.00344",
        "literal": "$3.44",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "ARPU\n$3.44\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            331,
            1130,
            211,
            151
          ]
        }
      }
    ]
  }
]);
})(window);
