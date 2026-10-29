/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "elastic-q4-fy26",
    "company": "Elastic",
    "period": "Q4 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q4-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 451,
      "notes": [
        "+16% Y/Y",
        "Elastic reported total revenue of $450.681M; source chart rounds to $451M."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 423,
          "notes": [
            "+17% Y/Y",
            "Elastic reported subscription revenue of $422.446M; source chart displays $423M while visible components sum to $422M."
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 217,
              "notes": [
                "+20% Y/Y",
                "48% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 205,
              "notes": [
                "+14% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 28,
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
        "value": 111
      },
      "operatingExpenses": {
        "total": 356,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 186,
            "notes": [
              "41% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 120,
            "notes": [
              "27% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 50,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 340,
        "notes": [
          "75% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -16,
        "notes": [
          "(4%) margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -16,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +16%",
            "Elastic 披露总收入为 $450.681M；来源图四舍五入为 $451M。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +17%",
                "Elastic 披露订阅收入为 $422.446M；来源图显示 $423M，而可见组成项合计为 $422M。"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +20%",
                    "占收入 48%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +14%"
                  ]
                }
              ]
            },
            {
              "id": "service",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 41%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 +2 个百分点"
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
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (0 个百分点)"
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
    "key": "elastic-q3-fy26",
    "company": "Elastic",
    "period": "Q3 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 450,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 426,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 219,
              "notes": [
                "+21% Y/Y",
                "49% of revenue",
                "+1pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 207,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 106
      },
      "operatingExpenses": {
        "total": 343,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 177,
            "notes": [
              "39% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 114,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 52,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax expense line is shown; the chart instead shows a $2M tax benefit."
        ]
      }
    },
    "otherIncome": {
      "total": 8,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 2
        },
        {
          "id": "other",
          "label": "Other",
          "value": 6
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
        "value": 344,
        "notes": [
          "76% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "0% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 8,
        "notes": [
          "The displayed gross-to-net bridge rounds to $9M (Operating profit $1M + Tax benefit $2M + Other $6M)."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +21%",
                    "占收入 49%",
                    "同比 +1 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +16%"
                  ]
                }
              ]
            },
            {
              "id": "service",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目，而是显示 $2M 的税收收益。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益"
            },
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
              "利润率 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "图表显示的毛利至净利润桥接合计为 $9M（营业利润 $1M + 税收收益 $2M + 其他 $6M）。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "elastic-q2-fy26",
    "company": "Elastic",
    "period": "Q2 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 424,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 398,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 206,
              "notes": [
                "+22% Y/Y",
                "49% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 192,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 26,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 102
      },
      "operatingExpenses": {
        "total": 330,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 174,
            "notes": [
              "41% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 108,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 48,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 322,
        "notes": [
          "76% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -8,
        "notes": [
          "(2%) margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -8,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +22%",
                    "占收入 49%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +5%"
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
                  "占收入 41%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
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
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 (1 个百分点)"
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
    "key": "elastic-q1-fy27",
    "company": "Elastic",
    "period": "Q1 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 478,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 449,
          "notes": [
            "+15% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 235,
              "notes": [
                "+20% Y/Y",
                "49% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 214,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 29,
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
        "value": 122
      },
      "operatingExpenses": {
        "total": 380,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 199,
            "notes": [
              "42% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 113,
            "notes": [
              "24% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 48,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 20,
            "notes": [
              "4% of revenue",
              "+4pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 356,
        "notes": [
          "75% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -24,
        "notes": [
          "(5%) margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -24,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +15%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +20%",
                    "占收入 49%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            },
            {
              "id": "service",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 4%",
                  "同比 +4 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 (3 个百分点)"
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
    "key": "elastic-q3-fy23",
    "company": "Elastic",
    "period": "Q3 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 275,
      "notes": [
        "+23% Y/Y",
        "Source integers differ by $1M across subscription + service, revenue - costs, and gross profit - expenses; retain printed values within rounding intervals."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 255,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 111,
              "notes": [
                "+38% Y/Y",
                "40% of revenue",
                "+4pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 144,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 19,
          "notes": [
            "+33% Y/Y"
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
        "value": 75,
        "notes": []
      },
      "operatingExpenses": {
        "total": 269,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 127,
            "notes": [
              "46% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 78,
            "notes": [
              "28% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 35,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 30,
            "notes": [
              "11% of revenue"
            ]
          }
        ],
        "notes": [
          "Printed expense items total $270M versus $269M printed total; $1M difference is compatible with whole-million rounding."
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown."
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
        "value": 199,
        "notes": [
          "72% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -69,
        "notes": [
          "(25%) margin",
          "(9pp) Y/Y"
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
        "value": "19900",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "19,900",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Customers 19,900 +11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1179,
            466,
            78
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "1110",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,110",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "> $100K 1,110 +25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1257,
            466,
            85
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +23%",
            "订阅加服务、收入减成本、毛利润减营业费用三处按图示整数计算均相差 $1M；保留图示值，差异在舍入范围内。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +22%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +38%",
                    "占收入 40%",
                    "同比 +4 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +33%"
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
                  "占收入 46%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (4 个百分点)"
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
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 11%"
                ]
              }
            ],
            "notes": [
              "图示费用分项合计 $270M，图示总额为 $269M；$1M 差异符合整数百万的舍入范围。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "保持不变"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 (9 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图仅列示至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> $100K 客户",
            "notes": [
              "同比 +25%"
            ]
          }
        ],
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 1 月"
      }
    }
  },
  {
    "key": "elastic-q4-fy23",
    "company": "Elastic",
    "period": "Q4 FY23",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q4-fy23.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 280,
      "notes": [
        "17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 256,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 112,
              "notes": [
                "+28% Y/Y",
                "40% of revenue",
                "+3.5pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 144,
              "notes": [
                "+7% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 74
      },
      "operatingExpenses": {
        "total": 246,
        "notes": [
          "Displayed expense components sum to $248M versus the displayed $246M total; the $2M difference is within their combined integer-M rounding intervals."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 124,
            "notes": [
              "44% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 82,
            "notes": [
              "29% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 40,
            "notes": [
              "14% of revenue",
              "Flat Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 2,
            "notes": [
              "1% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 206,
        "notes": [
          "74% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -40,
        "notes": [
          "(14%) margin",
          "+11pp Y/Y"
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
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +28%",
                    "占收入 40%",
                    "同比 +3.5 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +7%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
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
            "notes": [
              "图示费用分项合计 $248M，图示总额 $246M；差额 $2M 在各整数 M 金额的联合舍入区间内。"
            ],
            "items": [
              {
                "id": "sm",
                "label": [
                  "销售与",
                  "市场"
                ],
                "notes": [
                  "占收入 44%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": [
                  "研究与",
                  "开发"
                ],
                "notes": [
                  "占收入 29%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般与",
                  "行政"
                ],
                "notes": [
                  "占收入 14%",
                  "同比持平"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (14%)",
              "同比 +11 个百分点"
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
            "id": "dbne",
            "label": "净扩张率",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +21%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "literal": "117%",
        "value": "117",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNE\n117%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1177,
            178,
            163
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "literal": "20,200",
        "value": "20200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Customers 20,200 +9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            295,
            1177,
            467,
            163
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "literal": "1,160",
        "value": "1160",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "Customers > $100K 1,160 +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            295,
            1177,
            467,
            163
          ]
        }
      }
    ]
  },
  {
    "key": "elastic-q2-fy23",
    "company": "Elastic",
    "period": "Q2 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q2-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 264,
      "notes": [
        "+28% Y/Y",
        "Displayed revenue $264M versus gross profit $190M plus cost of revenue $75M differs by $1M due to whole-million rounding."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 241,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 103,
              "notes": [
                "+50% Y/Y",
                "39% of revenue",
                "+5pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 138,
              "notes": [
                "+14% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 23,
          "notes": [
            "+48% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 75
      },
      "operatingExpenses": {
        "total": 239,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 128,
            "notes": [
              "48% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 76,
            "notes": [
              "29% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 35,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 190,
        "notes": [
          "72% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "(19%) margin",
          "(0.5pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "19700",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "19,700",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Customers 19,700 +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            320,
            1220,
            420,
            40
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1050",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,050",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "Customers > $100K 1,050 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            350,
            1260,
            390,
            40
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +27%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +50%",
                    "占收入 39%",
                    "同比 +5 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +14%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +48%"
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
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 29%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (19%)",
              "同比 (0.5 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > 10 万美元",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "elastic-q1-fy24",
    "company": "Elastic",
    "period": "Q1 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 294,
      "notes": [
        "17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 270,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 121,
              "notes": [
                "+24% Y/Y",
                "41% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 149,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 78
      },
      "operatingExpenses": {
        "total": 253,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 133,
            "notes": [
              "45% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 81,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 38,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 1,
            "notes": [
              "0% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line shown."
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
        "value": 216,
        "notes": [
          "74% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -36,
        "notes": [
          "(12%) margin",
          "+12pp Y/Y",
          "Source rounded gross profit less expenses is -$37M versus displayed -$36M; $1M difference is within combined integer-million rounding intervals."
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
        "id": "dbne",
        "label": "DBNE",
        "value": "113",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "113%",
        "basis": "unspecified",
        "notes": [
          "(4pp) Q/Q"
        ],
        "quote": "DBNE 113% (4pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1178,
            178,
            163
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "20500",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20,500",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Customers 20,500 +6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1178,
            466,
            100
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1190",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,190",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers > $100K 1,190 +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1278,
            466,
            63
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +24%",
                    "占收入 41%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务"
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
                  "占收入 45%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 0%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未单列税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 +12 个百分点",
              "原图存在整数百万美元的舍入差，保留图印金额。"
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
            "id": "dbne",
            "label": "DBNE"
          },
          {
            "id": "customers",
            "label": "客户"
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K"
          }
        ]
      }
    }
  },
  {
    "key": "elastic-q2-fy24",
    "company": "Elastic",
    "period": "Q2 FY24",
    "periodNote": "Ending Oct, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q2-fy24.png",
    "revenue": {
      "total": 311,
      "notes": [
        "17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 288,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 135,
              "notes": [
                "+31% Y/Y",
                "43% of revenue",
                "+4pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 153,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 23,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 80
      },
      "operatingExpenses": {
        "total": 252,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 133,
            "notes": [
              "43% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 80,
            "notes": [
              "26% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 39,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 231,
        "notes": [
          "74% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -21,
        "notes": [
          "(7%) margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -21,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +31%",
                    "占收入 43%",
                    "同比 +4 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 (1%)"
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
                  "占收入 43%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (3 个百分点)"
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
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 (3 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "customers_gt_100k",
            "label": "年消费超过 $100K 的客户",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "110%",
        "basis": "unspecified",
        "notes": [
          "(3pp) Q/Q"
        ],
        "quote": "DBNE\n110%\n(3pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1178,
            178,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "20700",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20,700",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Customers 20,700 +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1178,
            465,
            164
          ]
        }
      },
      {
        "id": "customers_gt_100k",
        "label": "Customers > $100K",
        "value": "1220",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,220",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Customers > $100K 1,220 +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1178,
            465,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "elastic-q4-fy24",
    "company": "Elastic",
    "period": "Q4 FY24",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q4-fy24.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 335,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 311,
          "notes": [
            "+21% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 148,
              "notes": [
                "+32% Y/Y",
                "44% of revenue",
                "+4pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 163,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 88
      },
      "operatingExpenses": {
        "total": 293,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 152,
            "notes": [
              "45% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 94,
            "notes": [
              "28% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 43,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 4,
            "notes": [
              "1% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 247,
        "notes": [
          "74% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -46,
        "notes": [
          "(14%) margin",
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
        "id": "dbne",
        "label": "DBNE",
        "value": "110",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "110%",
        "basis": "unspecified",
        "notes": [
          "+1pp Q/Q"
        ],
        "quote": "DBNE\n110%\n+1pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1178,
            178,
            162
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "21000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21,000",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Customers 21,000 +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1178,
            466,
            80
          ]
        }
      },
      {
        "id": "customers_100k",
        "label": "Customers > $100K",
        "value": "1330",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,330",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $100K 1,330 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1258,
            466,
            82
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +21%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +32%",
                    "占收入 44%",
                    "同比 +4 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +13%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +1%"
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
                  "占收入 45%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": [
                  "占收入 1%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (14%)",
              "同比 +1 个百分点"
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
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 +1 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "customers_100k",
            "label": "客户 > $100K",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "elastic-q1-fy25",
    "company": "Elastic",
    "period": "Q1 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q1-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 347,
      "notes": [
        "+18% Y/Y",
        "Source amounts are rounded to whole millions. Component sums differ from printed totals by at most one million, within the printed rounding intervals. Source literal values are retained."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 324,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 157,
              "notes": [
                "+30% Y/Y",
                "45% of revenue",
                "+4pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 166,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 92
      },
      "operatingExpenses": {
        "total": 290,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 157,
            "notes": [
              "45% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 89,
            "notes": [
              "26% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 43,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 256,
        "notes": [
          "74% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -34,
        "notes": [
          "(10%) margin",
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
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +18%",
            "原图金额存在舍入差异，保留原图金额。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +30%",
                    "占收入 45%",
                    "同比 +4 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
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
                  "占收入 45%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 (2 个百分点)"
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
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图截止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 +2 个百分点"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "literal": "112%",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+2pp Q/Q"
        ],
        "quote": "DBNE\n112%\n+2pp Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1177,
            178,
            164
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "literal": "21,200",
        "value": "21200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Customers 21,200 +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1177,
            466,
            164
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "literal": "1,370",
        "value": "1370",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $100K 1,370 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            296,
            1177,
            466,
            164
          ]
        }
      }
    ]
  },
  {
    "key": "elastic-q2-fy25",
    "company": "Elastic",
    "period": "Q2 FY25",
    "periodNote": "Ending Oct 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 365,
      "notes": [
        "+18% Y/Y",
        "Source integer rounding: subscription $341M + service $25M = $366M versus total $365M."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 341,
          "notes": [
            "+18% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 169,
              "notes": [
                "+25% Y/Y",
                "46% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 172,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 25,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 93
      },
      "operatingExpenses": {
        "total": 277,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 144,
            "notes": [
              "39% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 88,
            "notes": [
              "24% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 44,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source integer rounding: S&M $144M + R&D $88M + G&A $44M = $276M versus total $277M; gross profit $272M less expenses $277M = ($5M) versus operating loss ($4M)."
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 272,
        "notes": [
          "74% margin",
          "+0pp Y/Y"
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
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -4,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +18%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +25%",
                    "占收入 46%",
                    "同比 +3 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +13%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +7%"
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
                  "占收入 39%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +0 个百分点"
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
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户数",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户数",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "quote": "DBNE\n112%\nFlat Q/Q",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1134,
            177,
            162
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "21300",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21,300",
        "quote": "Customers 21,300 +3% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1420",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,420",
        "quote": "Customers > $100K\n1,420 +16% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      }
    ]
  },
  {
    "key": "elastic-q1-fy26",
    "company": "Elastic",
    "period": "Q1 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 415,
      "notes": [
        "+20% Y/Y",
        "Source rounding: subscription $389M + service $27M = $416M; gross profit $319M + cost of revenue $97M = $416M, versus displayed revenue $415M. Preserve all printed values."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 389,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 196,
              "notes": [
                "+24% Y/Y",
                "47% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 193,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 27,
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
        "value": 97
      },
      "operatingExpenses": {
        "total": 328,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 174,
            "notes": [
              "42% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 109,
            "notes": [
              "26% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 45,
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 319,
        "notes": [
          "77% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -9,
        "notes": [
          "(2%) margin",
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
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +20%",
            "来源图舍入：订阅 $389M + 服务 $27M = $416M；毛利润 $319M + 收入成本 $97M = $416M，而图印总收入为 $415M。保留全部图印值。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +24%",
                    "占收入 47%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +16%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +13%"
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
                  "占收入 42%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 26%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNE\n112%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1134,
            177,
            162
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers > $100K",
        "value": "1550",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,550",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers > $100K\n1,550\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      }
    ]
  },
  {
    "key": "elastic-q3-fy24",
    "company": "Elastic",
    "period": "Q3 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 328,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 308,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 143,
              "notes": [
                "+29% Y/Y",
                "44% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 165,
              "notes": [
                "+14% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 20,
          "notes": [
            "+7% Y/Y"
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
        "value": 85,
        "notes": []
      },
      "operatingExpenses": {
        "total": 270,
        "items": [
          {
            "id": "sm",
            "label": [
              "Sales &",
              "marketing"
            ],
            "value": 142,
            "notes": [
              "43% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": [
              "Research &",
              "development"
            ],
            "value": 87,
            "notes": [
              "27% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": [
              "General &",
              "admin"
            ],
            "value": 41,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source ends at operating loss."
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
        "value": 243,
        "notes": [
          "74% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": [
          "Operating",
          "loss"
        ],
        "value": -26,
        "notes": [
          "(8%) margin",
          "+17pp Y/Y",
          "Displayed gross profit $243M less operating expenses $270M differs from displayed operating loss ($26M) by $1M due to rounding."
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
        "id": "dbne",
        "label": "DBNE",
        "value": "109",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "109%",
        "basis": "unspecified",
        "notes": [
          "(1pp) Q/Q"
        ],
        "quote": "DBNE\n109%\n(1pp) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            108,
            1178,
            177,
            163
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "20800",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20,800",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Customers\n20,800\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            297,
            1178,
            465,
            163
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1270",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,270",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $100K\n1,270\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            297,
            1178,
            465,
            163
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +29%",
                    "占收入 44%",
                    "同比 +3 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +14%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +7%"
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
                  "占收入 43%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 74%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (8%)",
              "同比 +17 个百分点"
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
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比 (1 个百分点)"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 $100K 的客户",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "elastic-q3-fy25",
    "company": "Elastic",
    "period": "Q3 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 382,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 358,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 180,
              "notes": [
                "+26% Y/Y",
                "47% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 178,
              "notes": [
                "+8% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 24,
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
        "value": 97
      },
      "operatingExpenses": {
        "total": 290,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 154,
            "notes": [
              "40% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 94,
            "notes": [
              "24% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 42,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Source stops at operating loss; no tax line reported."
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
        "value": 285,
        "notes": [
          "75% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -5,
        "notes": [
          "(1%) margin",
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
        "id": "dbne",
        "label": "DBNE",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNE\n112%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1134,
            177,
            162
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "21350",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21,350",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Customers 21,350 +3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1460",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,460",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Customers > $100K 1,460 +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +26%",
                    "占收入 47%",
                    "同比 +3 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +8%"
                  ]
                }
              ]
            },
            {
              "id": "service",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 40%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (2 个百分点)"
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
            "label": "税费",
            "notes": [
              "原图止于营业亏损，未披露税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (1%)",
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
        "operatingMetrics": [
          {
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "large_customers",
            "label": "客户 > $100K",
            "notes": [
              "同比 +15%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "elastic-q4-fy25",
    "company": "Elastic",
    "period": "Q4 FY25",
    "periodNote": "Ending Apr 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/elastic-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 388,
      "notes": [
        "+16% Y/Y",
        "Source integer rounding: Subscription $362M + Service $27M = $389M versus Revenue $388M; Gross profit $291M + Cost of revenue $98M = $389M. All printed values are retained."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 362,
          "notes": [
            "+16% Y/Y"
          ],
          "children": [
            {
              "id": "cloud",
              "label": "Cloud",
              "value": 182,
              "notes": [
                "+23% Y/Y",
                "47% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 180,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "service",
          "label": "Service",
          "value": 27,
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
        "value": 98
      },
      "operatingExpenses": {
        "total": 303,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 162,
            "notes": [
              "42% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 95,
            "notes": [
              "24% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 46,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
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
        "value": 291,
        "notes": [
          "75% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -12,
        "notes": [
          "(3%) margin",
          "+11pp Y/Y"
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
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +16%",
            "来源整数舍入：订阅 $362M + 服务 $27M = $389M，收入为 $388M；毛利 $291M + 收入成本 $98M = $389M。保留所有图印值。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +16%"
              ],
              "children": [
                {
                  "id": "cloud",
                  "label": "云",
                  "notes": [
                    "同比 +23%",
                    "占收入 47%",
                    "同比 +3 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +11%"
                  ]
                }
              ]
            },
            {
              "id": "service",
              "label": "服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 42%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 (4 个百分点)"
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
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +11 个百分点"
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
            "id": "dbne",
            "label": "DBNE",
            "notes": [
              "环比持平"
            ]
          },
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +2%"
            ]
          },
          {
            "id": "large_customers",
            "label": "年消费超过 10 万美元的客户",
            "notes": [
              "同比 +14%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dbne",
        "label": "DBNE",
        "value": "112",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "112%",
        "basis": "unspecified",
        "notes": [
          "Flat Q/Q"
        ],
        "quote": "DBNE\n112%\nFlat Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1134,
            177,
            162
          ]
        }
      },
      {
        "id": "customers",
        "label": "Customers",
        "value": "21500",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21,500",
        "basis": "unspecified",
        "notes": [
          "+2% Y/Y"
        ],
        "quote": "Customers\n21,500\n+2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1510",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,510",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers > $100K\n1,510\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            221,
            1134,
            465,
            162
          ]
        }
      }
    ]
  }
]);
})(window);
