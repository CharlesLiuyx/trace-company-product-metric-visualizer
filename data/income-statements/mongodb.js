/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "mongodb-q4-fy26",
    "company": "MongoDB",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q4-fy26.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 695,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 673,
          "notes": [
            "+27% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 503,
              "notes": [
                "+29% Y/Y",
                "72% of revenue",
                "+1pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 170,
              "notes": [
                "+20% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 22,
          "notes": [
            "+26% Y/Y"
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
        "total": 507,
        "notes": [
          "Visible operating-expense line items sum to $508M because the source chart rounds values."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 249,
            "notes": [
              "36% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 189,
            "notes": [
              "27% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 70,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
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
      "total": 15,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & other",
          "value": 15
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
        "value": 508,
        "notes": [
          "73% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0,
        "notes": [
          "0% margin",
          "(3pp) Y/Y",
          "Gross profit less operating expenses differs by $1M due to rounded source-chart values."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 16,
        "notes": [
          "Operating profit plus interest & other differs by $1M due to rounded source-chart values."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +27%"
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
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +29%",
                    "占收入 72%",
                    "同比 +1 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +20%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +26%"
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
              "可见营业费用明细因项目取整合计为 $508M。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 27%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 (3 个百分点)",
              "毛利润减营业费用因来源图数值取整相差 $1M。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "营业利润加利息及其他因来源图数值取整相差 $1M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mongodb-q1-fy27",
    "company": "MongoDB",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q1-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 688,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 666,
          "notes": [
            "+25% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 512,
              "notes": [
                "+29% Y/Y",
                "75% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 154,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 21,
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
        "value": 191,
        "notes": [
          "Revenue less gross profit differs by $1M due to rounded source-chart values."
        ]
      },
      "operatingExpenses": {
        "total": 521,
        "notes": [
          "Visible operating-expense line items sum to $520M because the source chart rounds values."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 249,
            "notes": [
              "36% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 200,
            "notes": [
              "29% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 71,
            "notes": [
              "10% of revenue",
              "+0pp Y/Y"
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
        "value": 496,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -25,
        "notes": [
          "(4%) margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -25,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +25%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +29%",
                    "占收入 75%",
                    "同比 +2 个百分点"
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
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +22%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "收入减毛利润因来源图数值取整相差 $1M。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "可见营业费用明细因项目取整合计为 $520M。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 36%",
                  "同比 (4 个百分点)"
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
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
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
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未展示单独净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mongodb-q2-fy27",
    "company": "MongoDB",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q2-fy27.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 772,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 747,
          "notes": [
            "+31% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 566,
              "notes": [
                "+29% Y/Y",
                "73% of revenue",
                "(1pp) Y/Y"
              ]
            },
            {
              "id": "enterprise",
              "label": "Enterprise Advanced and other",
              "value": 181,
              "notes": [
                "+36% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 25,
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
        "value": 202,
        "notes": []
      },
      "operatingExpenses": {
        "total": 541,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 253,
            "notes": [
              "33% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 214,
            "notes": [
              "28% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 74,
            "notes": [
              "10% of revenue",
              "(0pp) Y/Y"
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
      "total": 18,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 18,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 5,
      "items": [
        {
          "id": "other_expenses",
          "label": "Other",
          "value": 5,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 570,
        "notes": [
          "74% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 28,
        "notes": [
          "4% margin",
          "+15pp Y/Y",
          "Gross profit less operating expenses differs by $1M due to rounded source-chart values."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 41,
        "notes": [
          "5% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "70600",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "70,600",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers 70,600 +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2999",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,999",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "> $100K 2,999 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +31%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +29%",
                    "占收入 73%",
                    "同比 (1 个百分点)"
                  ]
                },
                {
                  "id": "enterprise",
                  "label": "Enterprise Advanced 及其他",
                  "notes": [
                    "同比 +36%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +29%"
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
                  "占收入 33%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expenses",
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
              "利润率 74%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +15 个百分点",
              "毛利润减营业费用因来源图数值取整相差 $1M。"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +13 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q1-fy25",
    "company": "MongoDB",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q1-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 451,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 437,
          "notes": [
            "+23% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 315,
              "notes": [
                "+32% Y/Y",
                "70% of revenue",
                "+5pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 122,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 14,
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
        "value": 123,
        "notes": []
      },
      "operatingExpenses": {
        "total": 426,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 219,
            "notes": [
              "49% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 146,
            "notes": [
              "32% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 61,
            "notes": [
              "13% of revenue",
              "+3pp Y/Y"
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
        "value": 328,
        "notes": [
          "73% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -98,
        "notes": [
          "(22%) margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -98,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +32%",
                    "占收入 70%",
                    "同比 +5 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +5%"
                  ]
                }
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
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 49%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
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
            "label": "营业亏损",
            "notes": [
              "利润率 (22%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未展示单独净利润或净亏损项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +21%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "49200",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "49,200",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers 49,200 +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2137",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,137",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y"
        ],
        "quote": "> $100K 2,137 +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      }
    ]
  },
  {
    "key": "mongodb-q2-fy25",
    "company": "MongoDB",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q2-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 478,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 464,
          "notes": [
            "+13% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 339,
              "notes": [
                "+27% Y/Y",
                "71% of revenue",
                "+8pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 124,
              "notes": [
                "(13%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 14,
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
        "value": 128,
        "notes": []
      },
      "operatingExpenses": {
        "total": 421,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 222,
            "notes": [
              "46% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 149,
            "notes": [
              "31% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 51,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source line items sum to $422M; original rounded amounts retained."
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
        "value": 350,
        "notes": [
          "73% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -71,
        "notes": [
          "(15%) margin",
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
        "id": "customers",
        "label": "Customers",
        "value": "50700",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "50,700",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers 50,700 +13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            125
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2189",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,189",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "> $100K 2,189 +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            125
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +13%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +27%",
                    "占收入 71%",
                    "同比 +8 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 (13%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
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
                  "占收入 46%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
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
              "利润率 73%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (15%)",
              "同比 (3 个百分点)"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "large-customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +18%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q2-fy24",
    "company": "MongoDB",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 424,
      "notes": [
        "+40% Y/Y",
        "Source rounded subscription and services sum to $423M versus total $424M."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 409,
          "notes": [
            "+40% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 267,
              "notes": [
                "+38% Y/Y",
                "63% of revenue",
                "(1pp) Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 142,
              "notes": [
                "+44% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 14,
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
        "value": 105,
        "notes": [
          "Source rounded values: revenue less cost of revenue is $319M versus gross profit $318M."
        ]
      },
      "operatingExpenses": {
        "total": 367,
        "notes": [],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 196,
            "notes": [
              "46% of revenue",
              "(14pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 125,
            "notes": [
              "30% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 46,
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
        "value": 318,
        "notes": [
          "75% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "(12%) margin",
          "+26pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -49,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "45000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "45,000",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 45,000 +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            228,
            1262,
            410,
            39
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "> $100K",
        "value": "1855",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,855",
        "basis": "unspecified",
        "notes": [
          "+27% Y/Y"
        ],
        "quote": "> $100K 1,855 +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            258,
            1307,
            350,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +40%",
            "来源图订阅与服务取整合计为 $423M，总收入为 $424M。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +40%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +38%",
                    "占收入 63%",
                    "同比 (1 个百分点)"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +44%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +20%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图取整数值：收入减收入成本为 $319M，毛利润标为 $318M。"
            ]
          },
          "operatingExpenses": {
            "notes": [],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 46%",
                  "同比 (14 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比 +26 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未展示单独净利润或净亏损项目。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "large_customers",
            "label": "> 10 万美元",
            "notes": [
              "同比 +27%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q1-fy26",
    "company": "MongoDB",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 549,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 531,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 396,
              "notes": [
                "+26% Y/Y",
                "72% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 136,
              "notes": [
                "+10% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 18,
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
        "value": 158
      },
      "operatingExpenses": {
        "total": 445,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 221,
            "notes": [
              "40% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 169,
            "notes": [
              "31% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 55,
            "notes": [
              "10% of revenue",
              "(3pp) Y/Y"
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
        "value": 391,
        "notes": [
          "71% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -54,
        "notes": [
          "(10%) margin",
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
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +22%"
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
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +26%",
                    "占收入 72%",
                    "同比 +2 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +10%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
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
                "label": "销售与市场",
                "notes": [
                  "占收入 40%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (3 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +12 个百分点"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "57100",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "57,100",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Customers 57,100 +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            528,
            125
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2506",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,506",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "> $100K 2,506 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            528,
            125
          ]
        }
      }
    ]
  },
  {
    "key": "mongodb-q3-fy25",
    "company": "MongoDB",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q3-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 529,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 512,
          "notes": [
            "+22% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 360,
              "notes": [
                "+26% Y/Y",
                "68% of revenue",
                "+2pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 152,
              "notes": [
                "+15% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 17,
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
        "value": 135,
        "notes": []
      },
      "operatingExpenses": {
        "total": 422,
        "notes": [
          "Source line items total $421M versus displayed total $422M (rounding)."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 218,
            "notes": [
              "41% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 151,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 52,
            "notes": [
              "10% of revenue",
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
        "value": 394,
        "notes": [
          "74% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -28,
        "notes": [
          "(5%) margin",
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
        "id": "customers",
        "label": "Customers",
        "value": "52600",
        "literal": "52,600",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "Customers 52,600 +13% Y/Y",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            36,
            1219,
            530,
            128
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2314",
        "literal": "2,314",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "> $100K 2,314 +17% Y/Y",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            36,
            1219,
            530,
            128
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "profit": {
          "net": {
            "label": "未报告净损益",
            "notes": [
              "来源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +17%"
            ]
          }
        ],
        "costs": {
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "图中费用明细合计为 $421M，与标示总额 $422M 存在取整差异。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "mongodb-q3-fy26",
    "company": "MongoDB",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q3-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 628,
      "notes": [
        "+19% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 609,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 469,
              "notes": [
                "+30% Y/Y",
                "75% of revenue",
                "+7pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 140,
              "notes": [
                "(8%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 19,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 179
      },
      "operatingExpenses": {
        "total": 468,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 231,
            "notes": [
              "37% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 177,
            "notes": [
              "28% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 60,
            "notes": [
              "10% of revenue",
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
        "value": 449,
        "notes": [
          "71% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -18,
        "notes": [
          "(3%) margin",
          "+2pp Y/Y",
          "Source prints $18M operating loss; $449M less $468M differs by $1M due to displayed rounding."
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
        "value": "62500",
        "literal": "62,500",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers 62,500 +19% Y/Y",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2694",
        "literal": "2,694",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "> $100K 2,694 +16% Y/Y",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +19%"
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
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +30%",
                    "占收入 75%",
                    "同比 +7 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 (8%)"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +12%"
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
                  "占收入 37%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 28%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
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
              "利润率 71%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +2 个百分点",
              "图示毛利润减营业费用与营业亏损相差 $1M，保留图示取整值。"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q4-fy25",
    "company": "MongoDB",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q4-fy25.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 548,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 531,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 389,
              "notes": [
                "+24% Y/Y",
                "71% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 142,
              "notes": [
                "+7% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 17,
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
        "value": 149,
        "notes": []
      },
      "operatingExpenses": {
        "total": 418,
        "notes": [
          "Source prints $418M; visible expense items sum to $417M."
        ],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 212,
            "notes": [
              "39% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 150,
            "notes": [
              "27% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 55,
            "notes": [
              "10% of revenue",
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
        "value": 399,
        "notes": [
          "73% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -19,
        "notes": [
          "(3%) margin",
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
        "id": "customers",
        "label": "Customers",
        "value": "54500",
        "literal": "54,500",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Customers 54,500 +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1197,
            529,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2396",
        "literal": "2,396",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "> $100K 2,396 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            40,
            1197,
            529,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +20%"
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
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +24%",
                    "占收入 71%",
                    "同比 +3 个百分点"
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
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +34%"
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
            "notes": [
              "原图营业费用为 $418M，明细合计 $417M。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 39%",
                  "同比 (7 个百分点)"
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
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +12 个百分点"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q3-fy24",
    "company": "MongoDB",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q3-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 433,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 418,
          "notes": [
            "+30% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 286,
              "notes": [
                "+36% Y/Y",
                "66% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 132,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 15,
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
        "value": 107,
        "notes": []
      },
      "operatingExpenses": {
        "total": 371,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 193,
            "notes": [
              "45% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 128,
            "notes": [
              "30% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 50,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
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
        "value": 326,
        "notes": [
          "75% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -45,
        "notes": [
          "(10%) margin",
          "+14pp Y/Y"
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
        "value": "46400",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "46,400",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Customers 46,400 +19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            167,
            1240,
            530,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "1972",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,972",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "> $100K 1,972 +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            167,
            1240,
            530,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +30%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +36%",
                    "占收入 66%",
                    "同比 +3 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +21%"
                  ]
                }
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 45%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 30%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "净损益未披露",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q1-fy24",
    "company": "MongoDB",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q1-fy24.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 368,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 355,
          "notes": [
            "+29% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 239,
              "notes": [
                "+40% Y/Y",
                "65% of revenue",
                "+5pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 116,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 14,
          "notes": [
            "+25% Y/Y"
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
        "total": 339,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 183,
            "notes": [
              "50% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 117,
            "notes": [
              "32% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 40,
            "notes": [
              "11% of revenue",
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
        "value": 271,
        "notes": [
          "74% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -69,
        "notes": [
          "(19%) margin",
          "+8pp Y/Y"
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
        "value": "43100",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "43,100",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "Customers 43,100 +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "1761",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,761",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "> $100K 1,761 +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +29%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +40%",
                    "占收入 65%",
                    "同比 +5 个百分点"
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
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +25%"
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
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
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
              "利润率 74%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (19%)",
              "同比 +8 个百分点"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +22%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +28%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q3-fy23",
    "company": "MongoDB",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q3-fy23.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 334,
      "notes": [
        "+47% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 321,
          "notes": [
            "+47% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 211,
              "notes": [
                "+61% Y/Y",
                "63% of revenue",
                "+5pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 110,
              "notes": [
                "+26% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 13,
          "notes": [
            "+43% Y/Y"
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
        "total": 323,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 177,
            "notes": [
              "53% of revenue",
              "Unchanged"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 106,
            "notes": [
              "32% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 39,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          }
        ],
        "notes": [
          "Source line items sum to $322M while the printed total is $323M."
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
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
        "value": 240,
        "notes": [
          "72% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -83,
        "notes": [
          "(25%) margin",
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
        "id": "customers",
        "label": "Customers",
        "value": "39100",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "39,100",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "Customers 39,100 +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            229,
            1266,
            410,
            35
          ]
        }
      },
      {
        "id": "large_customers",
        "label": "Customers > $100K",
        "value": "1545",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,545",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "Customers > $100K 1,545 +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            260,
            1310,
            352,
            34
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +47%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +47%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +61%",
                    "占收入 63%",
                    "同比 +5 个百分点"
                  ]
                },
                {
                  "id": "other_subscription",
                  "label": "其他订阅",
                  "notes": [
                    "同比 +26%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +43%"
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
                  "占收入 53%",
                  "不变（Unchanged）"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              }
            ],
            "notes": [
              "来源明细合计 $322M，图上总额为 $323M。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源未单列税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +26%"
            ]
          },
          {
            "id": "large_customers",
            "label": "超过 $100K 的客户",
            "notes": [
              "同比 +29%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q2-fy26",
    "company": "MongoDB",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 591,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 572,
          "notes": [
            "+23% Y/Y",
            "Atlas and Other subscription sum to $573M versus the displayed $572M subscription total due to source rounding."
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 438,
              "notes": [
                "+29% Y/Y",
                "74% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 135,
              "notes": [
                "+8% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 19,
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
        "value": 171
      },
      "operatingExpenses": {
        "total": 485,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 244,
            "notes": [
              "41% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 182,
            "notes": [
              "31% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 59,
            "notes": [
              "10% of revenue",
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
        "value": 420,
        "notes": [
          "71% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -65,
        "notes": [
          "(11%) margin",
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
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +23%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +29%",
                    "占收入 74%",
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
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +24%"
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
            "notes": [],
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 41%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 (0 个百分点)"
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
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 +4 个百分点"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "59900",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "59,900",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Customers 59,900 +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2564",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,564",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "> $100K 2,564 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            38,
            1220,
            529,
            125
          ]
        }
      }
    ]
  },
  {
    "key": "mongodb-q4-fy24",
    "company": "MongoDB",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q4-fy24.png",
    "roundingTolerance": 1.2,
    "revenue": {
      "total": 458,
      "notes": [
        "+27% Y/Y",
        "Subscription plus services differs from total revenue by $1M due to rounded source-chart values."
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 444,
          "notes": [
            "+28% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 312,
              "notes": [
                "+34% Y/Y",
                "68% of revenue",
                "+3pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 132,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 13,
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
        "value": 115
      },
      "operatingExpenses": {
        "total": 414,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 211,
            "notes": [
              "46% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 146,
            "notes": [
              "32% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 58,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          }
        ],
        "notes": [
          "Visible operating-expense line items sum to $415M because the source chart rounds values."
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
        "value": 343,
        "notes": [
          "75% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -71,
        "notes": [
          "(15%) margin",
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
        "id": "customers",
        "label": "Customers",
        "value": "47800",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "47,800",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "Customers 47,800 +17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "2052",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "2,052",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "> $100K 2,052 +24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +27%",
            "订阅加服务收入因来源图数值取整与总收入相差 $1M。"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +28%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +34%",
                    "占收入 68%",
                    "同比 +3 个百分点"
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
              "id": "services",
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
                  "占收入 46%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 32%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              }
            ],
            "notes": [
              "可见营业费用明细因项目取整合计为 $415M。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (15%)",
              "同比 +5 个百分点"
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
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "large-customers",
            "label": "$100K 以上",
            "notes": [
              "同比 +24%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "mongodb-q4-fy23",
    "company": "MongoDB",
    "period": "Q4 FY23",
    "periodNote": "Ending jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/mongodb-q4-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 361,
      "notes": [
        "+36% Y/Y"
      ],
      "items": [
        {
          "id": "subscription",
          "label": "Subscription",
          "value": 348,
          "notes": [
            "+35% Y/Y"
          ],
          "children": [
            {
              "id": "atlas",
              "label": "Atlas",
              "value": 234,
              "notes": [
                "+50% Y/Y",
                "65% of revenue",
                "+7pp Y/Y"
              ]
            },
            {
              "id": "other_subscription",
              "label": "Other subscription",
              "value": 114,
              "notes": [
                "+11% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 13,
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
        "value": 89,
        "notes": []
      },
      "operatingExpenses": {
        "total": 345,
        "notes": [],
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 190,
            "notes": [
              "53% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 111,
            "notes": [
              "31% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 44,
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
        "value": 272,
        "notes": [
          "75% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -73,
        "notes": [
          "(20%) margin",
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
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +36%"
          ],
          "items": [
            {
              "id": "subscription",
              "label": "订阅",
              "notes": [
                "同比 +35%"
              ],
              "children": [
                {
                  "id": "atlas",
                  "label": "Atlas",
                  "notes": [
                    "同比 +50%",
                    "占收入 65%",
                    "同比 +7 个百分点"
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
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +59%"
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
            "notes": [],
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 31%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "来源图未展示单独税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (20%)",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "customers",
            "label": "客户",
            "notes": [
              "同比 +24%"
            ]
          },
          {
            "id": "large-customers",
            "label": "超过 $100K",
            "notes": [
              "同比 +26%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "customers",
        "label": "Customers",
        "value": "40800",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "40,800",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y"
        ],
        "quote": "Customers 40,800 +24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      },
      {
        "id": "large-customers",
        "label": "> $100K",
        "value": "1651",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "1,651",
        "basis": "unspecified",
        "notes": [
          "+26% Y/Y"
        ],
        "quote": "> $100K 1,651 +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            168,
            1240,
            527,
            126
          ]
        }
      }
    ]
  }
]);
})(window);
