/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "appfolio-q4-fy25",
    "company": "AppFolio",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q4-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 248,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 56,
          "notes": [
            "+17% Y/Y",
            "Reported as Subscription Services by AppFolio."
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 185,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 8,
          "notes": [
            "+191% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 91
      },
      "operatingExpenses": {
        "total": 114,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 46,
            "notes": [
              "19% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 40,
            "notes": [
              "16% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 23,
            "notes": [
              "9% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
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
        "value": 6
      }
    },
    "otherIncome": {
      "total": 2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 2,
          "notes": [
            "Interest income, net and other income, net; source chart labels the combined line as Interest."
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
        "value": 158,
        "notes": [
          "64% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 44,
        "notes": [
          "18% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 40,
        "notes": [
          "16% margin",
          "(34pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +17%",
                "AppFolio 将其列报为订阅服务。"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +191%"
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
                  "占收入 19%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
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
              "label": "利息",
              "notes": [
                "包括净利息收入和净其他收入；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 (34 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q1-fy26",
    "company": "AppFolio",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q1-fy26.png",
    "roundingTolerance": 0.65,
    "revenue": {
      "total": 262.214,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 58.222,
          "notes": [
            "+18% Y/Y",
            "Reported as Subscription Services by AppFolio."
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 201.363,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2.629,
          "notes": [
            "(25%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 94.975
      },
      "operatingExpenses": {
        "total": 116.491,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 49.629,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 37.501,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 24.341,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5.02,
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
        "value": 10.677
      }
    },
    "otherIncome": {
      "total": 2.353,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 2.353,
          "notes": [
            "Interest income, net plus other income, net; source chart labels the combined line as Interest."
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
        "value": 167.239,
        "notes": [
          "64% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 50.748,
        "notes": [
          "19% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 42.424,
        "notes": [
          "16% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +18%",
                "AppFolio 将其列报为订阅服务。"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (25%)"
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
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
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
              "label": "利息",
              "notes": [
                "包括净利息收入和净其他收入；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +0 个百分点"
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
              "利润率 16%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q2-fy26",
    "company": "AppFolio",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q2-fy26.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 281,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 60,
          "notes": [
            "+14% Y/Y",
            "Reported as Subscription Services by AppFolio."
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 219,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(37%) Y/Y"
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
        "total": 126,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 44,
            "notes": [
              "16% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 51,
            "notes": [
              "18% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 26,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
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
        "value": 13
      }
    },
    "otherIncome": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1,
          "notes": [
            "Interest income, net plus other loss, net; source chart labels the combined line as Interest."
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
        "value": 179,
        "notes": [
          "64% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 53,
        "notes": [
          "19% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 42,
        "notes": [
          "15% margin",
          "(0pp) Y/Y"
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
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +14%",
                "AppFolio 将其列报为订阅服务。"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (37%)"
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
                  "占收入 16%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
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
              "label": "利息",
              "notes": [
                "包括净利息收入和净其他亏损；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q1-fy23",
    "company": "AppFolio",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q1-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 136,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 37,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 97,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(30%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 56
      },
      "operatingExpenses": {
        "total": 106,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 38,
            "notes": [
              "28% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 29,
            "notes": [
              "22% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 32,
            "notes": [
              "23% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 8,
            "notes": [
              "6% of revenue",
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
        "value": 80,
        "notes": [
          "59% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -27,
        "notes": [
          "(19%) margin",
          "(6pp) Y/Y"
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
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (30%)"
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
                  "占收入 28%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 23%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 6%",
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
              "利润率 59%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (19%)",
              "同比 (6 个百分点)"
            ]
          },
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
    "key": "appfolio-q1-fy24",
    "company": "AppFolio",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q1-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 187,
      "notes": [
        "+38% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 43,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 142,
          "notes": [
            "+47% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
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
        "value": 65
      },
      "operatingExpenses": {
        "total": 89,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 38,
            "notes": [
              "20% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 24,
            "notes": [
              "13% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 21,
            "notes": [
              "11% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
            "notes": [
              "3% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_benefit",
        "label": "Tax benefit",
        "value": -2
      }
    },
    "otherIncome": {
      "total": 3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 3,
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
        "value": 123,
        "notes": [
          "66% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 34,
        "notes": [
          "18% margin",
          "+38pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 39,
        "notes": [
          "21% margin",
          "+46pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +38%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +47%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 3%",
                  "同比 (3 个百分点)"
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +38 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +46 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q1-fy25",
    "company": "AppFolio",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q1-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 218,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 50,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 165,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 3,
          "notes": [
            "+60% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 79,
        "notes": []
      },
      "operatingExpenses": {
        "total": 104,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 44,
            "notes": [
              "20% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 31,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 23,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 6,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 5,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 3,
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
        "value": 138,
        "notes": [
          "63% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 34,
        "notes": [
          "16% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 31,
        "notes": [
          "14% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +60%"
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
                  "占收入 20%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (6 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q2-fy23",
    "company": "AppFolio",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 147,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 39,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 106,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(31%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 58
      },
      "operatingExpenses": {
        "total": 90,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 37,
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 27,
            "notes": [
              "18% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 19,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 7,
            "notes": [
              "5% of revenue",
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
        "value": 89,
        "notes": [
          "61% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -1,
        "notes": [
          "(0%) margin",
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
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (31%)"
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
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 5%",
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
              "利润率 61%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (25 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q2-fy24",
    "company": "AppFolio",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q2-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 197,
      "notes": [
        "+34% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 44,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 152,
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(30%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 70
      },
      "operatingExpenses": {
        "total": 92,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 40,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 27,
            "notes": [
              "14% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 20,
            "notes": [
              "10% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
            "notes": [
              "2% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 10
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 128,
        "notes": [
          "65% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 36,
        "notes": [
          "18% margin",
          "+19pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 30,
        "notes": [
          "15% margin",
          "+28pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +34%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (30%)"
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
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 14%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 2%",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +19 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +28 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q2-fy25",
    "company": "AppFolio",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 236,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 52,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 180,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 3,
          "notes": [
            "+71% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 84
      },
      "operatingExpenses": {
        "total": 111,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 47,
            "notes": [
              "20% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 37,
            "notes": [
              "16% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 22,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 6,
            "notes": [
              "2% of revenue",
              "+0pp Y/Y"
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
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
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
        "value": 152,
        "notes": [
          "64% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 41,
        "notes": [
          "17% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 36,
        "notes": [
          "15% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +71%"
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
                  "占收入 20%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 2%",
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
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q3-fy23",
    "company": "AppFolio",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 3,
    "sourceImage": "input/processed/appfolio-q3-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 165,
      "notes": [
        "+32% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 40,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 123,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 62
      },
      "operatingExpenses": {
        "total": 103,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 42,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "18% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 24,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 8,
            "notes": [
              "5% of revenue",
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
        "value": 103,
        "notes": [
          "62% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.067,
        "notes": [
          "(0%) margin",
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
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +32%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (9%)"
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
                  "占收入 25%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 (3 个百分点)"
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
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 5%",
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
              "利润率 62%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q3-fy24",
    "company": "AppFolio",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q3-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 206,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 46,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 158,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(21%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 72
      },
      "operatingExpenses": {
        "total": 92,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 41,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 25,
            "notes": [
              "12% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 21,
            "notes": [
              "10% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 4,
            "notes": [
              "2% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 13
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 4,
          "notes": [
            "Interest income, net and other income, net; source chart labels the combined line as Interest."
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
        "value": 134,
        "notes": [
          "65% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 43,
        "notes": [
          "21% margin",
          "+21pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 33,
        "notes": [
          "16% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (21%)"
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
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 12%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 2%",
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
              "id": "interest",
              "label": "利息",
              "notes": [
                "包括净利息收入和净其他收入；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +21 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q3-fy25",
    "company": "AppFolio",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q3-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 249,
      "notes": [
        "+21% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 54,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 192,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 4,
          "notes": [
            "+77% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 91
      },
      "operatingExpenses": {
        "total": 123,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 36,
            "notes": [
              "14% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 54,
            "notes": [
              "22% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 27,
            "notes": [
              "11% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
            "notes": [
              "2% of revenue",
              "+0pp Y/Y"
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
      "total": 2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 158,
        "notes": [
          "63% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 35,
        "notes": [
          "14% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 34,
        "notes": [
          "13% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +21%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +77%"
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
                  "占收入 14%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 22%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 2%",
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
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (7 个百分点)"
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
    "key": "appfolio-q4-fy22",
    "company": "AppFolio",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q4-fy22.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 124,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 35,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 86,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 2,
          "notes": [
            "(24%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 50,
        "notes": []
      },
      "operatingExpenses": {
        "total": 94,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 31,
            "notes": [
              "25% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 30,
            "notes": [
              "24% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 25,
            "notes": [
              "20% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 8,
            "notes": [
              "7% of revenue",
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
        "value": 74,
        "notes": [
          "59% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -20,
        "notes": [
          "(16%) margin",
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
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (24%)"
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
                  "占收入 25%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 24%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 20%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 7%",
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
              "利润率 59%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 (8 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q4-fy23",
    "company": "AppFolio",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q4-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 172,
      "notes": [
        "+39% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 41,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 128,
          "notes": [
            "+48% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 3,
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
        "value": 61
      },
      "operatingExpenses": {
        "total": 82,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 35,
            "notes": [
              "20% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 22,
            "notes": [
              "13% of revenue",
              "(12pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 19,
            "notes": [
              "11% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 7,
            "notes": [
              "4% of revenue",
              "(3pp) Y/Y"
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
      "total": 3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 3,
          "notes": [
            "Interest income, net and other income, net; source chart labels the combined line as Interest."
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
        "value": 111,
        "notes": [
          "64% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "16% margin",
          "+32pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 30,
        "notes": [
          "18% margin",
          "+33pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +39%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +48%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 20%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 13%",
                  "同比 (12 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 4%",
                  "同比 (3 个百分点)"
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
                "包括净利息收入和净其他收入；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +32 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +33 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "appfolio-q4-fy24",
    "company": "AppFolio",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/appfolio-q4-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 204,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "core_solutions",
          "label": "Core solutions",
          "value": 48,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "value_added_services",
          "label": "Value Added Services",
          "value": 153,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 3,
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
        "value": 76
      },
      "operatingExpenses": {
        "total": 104,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 42,
            "notes": [
              "21% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 33,
            "notes": [
              "16% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 23,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 5,
            "notes": [
              "3% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_benefit",
        "label": "Tax benefit",
        "value": -76
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 4,
          "notes": [
            "Interest income, net and other income, net; source chart labels the combined line as Interest."
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
        "value": 127,
        "notes": [
          "63% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 23,
        "notes": [
          "11% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 102,
        "notes": [
          "50% margin",
          "+32pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "core_solutions",
              "label": "核心解决方案",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "value_added_services",
              "label": "增值服务",
              "notes": [
                "同比 +20%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 21%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "depreciation",
                "label": "折旧",
                "notes": [
                  "占收入 3%",
                  "同比 (2 个百分点)"
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
              "id": "interest",
              "label": "利息",
              "notes": [
                "包括净利息收入和净其他收入；来源图将合并项目标为利息。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 63%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 50%",
              "同比 +32 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
