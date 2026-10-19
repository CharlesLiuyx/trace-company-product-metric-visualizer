/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "salesforce-q1-fy24",
    "company": "Salesforce",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 7.6,
          "notes": [
            "+11% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 1.8,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2,
              "notes": [
                "+12% Y/Y"
              ],
              "valueText": "$2.0B"
            },
            {
              "id": "platform_other",
              "label": "Platform & Other",
              "value": 1.6,
              "notes": [
                "+10% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.2,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "data",
              "label": "Data",
              "value": 1.1,
              "notes": [
                "+18% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ],
      "total": 8.2
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.1,
        "notes": []
      },
      "operatingExpenses": {
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.2,
            "notes": [
              "38% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.2,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.7,
            "notes": [
              "9% of revenue"
            ]
          }
        ],
        "total": 5.7
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "notes": []
      }
    },
    "otherExpenses": {
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ],
      "total": 0.1
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "74% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +11%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "platform_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +10%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "data",
                  "label": "数据",
                  "notes": [
                    "同比 +18%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +9%"
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
                  "占收入 38%",
                  "同比 (7 个百分点)"
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
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 9%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
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
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q1-fy27",
    "company": "Salesforce",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q1-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.1,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 10.6,
          "notes": [
            "+14% Y/Y"
          ],
          "children": [
            {
              "id": "agentforce_apps",
              "label": "Agentforce Apps",
              "value": 6.9,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "data360_platform",
              "label": "Data 360 Headless Platform & Other",
              "value": 3.7,
              "notes": [
                "+25% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
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
        "value": 2.6
      },
      "operatingExpenses": {
        "total": 6.2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.8,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6,
            "notes": [
              "15% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.6,
        "notes": [
          "77% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "21% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.1,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +14%"
              ],
              "children": [
                {
                  "id": "agentforce_apps",
                  "label": "Agentforce 应用",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "data360_platform",
                  "label": "Data 360 无头平台及其他",
                  "notes": [
                    "同比 +25%"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
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
              "利润率 77%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q4-fy26",
    "company": "Salesforce",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.2,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 10.7,
          "notes": [
            "+13% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.3,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.5,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform, Slack & Other",
              "value": 2.7,
              "notes": [
                "+38% Y/Y",
                "Informatica"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.4,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.8,
              "notes": [
                "+4% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.5
      },
      "operatingExpenses": {
        "total": 6.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 4,
            "notes": [
              "36% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.6,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.9,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7
      }
    },
    "otherIncome": {
      "total": 0.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.8
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.7,
        "notes": [
          "78% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "17% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "17% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +13%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台、Slack 与其他",
                  "notes": [
                    "同比 +38%",
                    "Informatica 数据"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +4%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (3%)"
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
                  "占收入 36%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
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
              "利润率 78%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q2-fy27",
    "company": "Salesforce",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q2-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.3,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 10.8,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "agentforce_apps",
              "label": "Agentforce Apps",
              "value": 7.2,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "data360_platform",
              "label": "Data 360 Headless Platform & Other",
              "value": 3.6,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
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
        "value": 2.6
      },
      "operatingExpenses": {
        "total": 6.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.9,
            "notes": [
              "34% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.7,
            "notes": [
              "15% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+1pp Y/Y"
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
      "total": 2.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 2.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.7,
        "notes": [
          "77% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "21% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.5,
        "notes": [
          "31% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "agentforce_apps",
                  "label": "Agentforce 应用",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "data360_platform",
                  "label": "Data 360 无头平台及其他",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (4%)"
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
                  "占收入 34%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 77%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 +13 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q1-fy25",
    "company": "Salesforce",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 9.1,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8.6,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2,
              "notes": [
                "+10% Y/Y"
              ],
              "valueText": "$2.0B"
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.2,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "platform_other",
              "label": "Platform & Other",
              "value": 1.7,
              "notes": [
                "+10% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.3,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.4,
              "notes": [
                "+24% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
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
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.2,
            "notes": [
              "35% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.4,
            "notes": [
              "15% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.008,
            "notes": [
              "0% of revenue",
              "(9pp) Y/Y"
            ],
            "valueText": "($8M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7,
        "notes": [
          "76% margin",
          "+2pp Y/Y"
        ],
        "valueText": "$7.0B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "19% margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "+14pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 4 月",
        "revenue": {
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "platform_other",
                  "label": "平台及其他",
                  "notes": [
                    "同比 +10%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "市场营销与商务",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +24%",
                    "Mulesoft、Tableau 集成与分析"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (9%)"
              ]
            }
          ],
          "notes": [
            "同比 +11%"
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
                  "占收入 35%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
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
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%",
                  "同比 (9 个百分点)"
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
              "利润率 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +14 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q1-fy26",
    "company": "Salesforce",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.8,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 9.3,
          "notes": [
            "+8% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.1,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.3,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 2,
              "notes": [
                "+14% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.3,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.5,
              "notes": [
                "+10% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 5.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.4,
            "notes": [
              "35% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.5,
            "notes": [
              "15% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.036,
            "notes": [
              "0% of revenue",
              "+0pp Y/Y"
            ],
            "valueText": "($36M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.03,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.03,
          "valueText": "$30M"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.6,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "20% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "16% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +8%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +14%",
                    "Slack 协作"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +10%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (3%)"
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
                  "占收入 35%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%",
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
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q2-fy24",
    "company": "Salesforce",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.6,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 1.9,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.6,
              "notes": [
                "+11% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.2,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Data",
              "value": 1.2,
              "notes": [
                "+16% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
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
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.1,
            "notes": [
              "36% of revenue",
              "(8pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.2,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.049,
            "notes": [
              "1% of revenue"
            ],
            "valueText": "($49M)"
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
      "total": 0.016,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.016,
          "valueText": "$16M"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.5,
        "notes": [
          "75% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "+15pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "14% margin",
          "+13pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台及其他",
                  "notes": [
                    "同比 +11%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "数据",
                  "notes": [
                    "同比 +16%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +3%"
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
                  "占收入 36%",
                  "同比 (8 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%"
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
              "利润率 75%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +15 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +13 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q2-fy25",
    "company": "Salesforce",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.3,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8.8,
          "notes": [
            "+9% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.1,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.3,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.8,
              "notes": [
                "+9% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.3,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.3,
              "notes": [
                "+13% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
          "notes": [
            "(6%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 5.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.2,
            "notes": [
              "35% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.3,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": [
              "1% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.2,
        "notes": [
          "77% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "19% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +9%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +9%",
                    "Slack 协作工具"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +13%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (6%)"
              ]
            }
          ],
          "notes": [
            "同比 +8%"
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
                  "占收入 35%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
                  "同比 +0 个百分点"
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
              "利润率 77%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
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
        }
      }
    }
  },
  {
    "key": "salesforce-q2-fy26",
    "company": "Salesforce",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.2,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 9.7,
          "notes": [
            "+11% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.3,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.5,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 2.1,
              "notes": [
                "+17% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.5,
              "notes": [
                "+13% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 5.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.4,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.5,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.004,
            "notes": [
              "0% of revenue",
              "(1pp) Y/Y"
            ],
            "valueText": "($4M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$8.0B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "23% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "18% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +11%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台及其他",
                  "notes": [
                    "同比 +17%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +13%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (3%)"
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 0%",
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
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q3-fy23",
    "company": "Salesforce",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.8,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 7.2,
          "notes": [
            "+13% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 1.7,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 1.9,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "platform_other",
              "label": "Platform & Other",
              "value": 1.5,
              "notes": [
                "+18% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.1,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "data",
              "label": "Data",
              "value": 1,
              "notes": [
                "+13% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
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
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "sm",
            "label": "Sales & Marketing",
            "value": 3.3,
            "notes": [
              "43% of revenue"
            ]
          },
          {
            "id": "rnd",
            "label": "Research & Development",
            "value": 1.3,
            "notes": [
              "16% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.7,
            "notes": [
              "8% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.015,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.015,
          "valueText": "$15M"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.7,
        "notes": [
          "73% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "6% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "3% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +13%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "platform_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +18%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "data",
                  "label": "数据",
                  "notes": [
                    "同比 +13%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +25%"
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
                  "占收入 43%"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 16%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%"
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
              "利润率 73%",
              "同比持平"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q3-fy24",
    "company": "Salesforce",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q3-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 8.7,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8.1,
          "notes": [
            "+13% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 1.9,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.1,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "platform_other",
              "label": "Platform & Other",
              "value": 1.7,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.2,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "data",
              "label": "Data",
              "value": 1.2,
              "notes": [
                "+22% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
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
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.2,
            "notes": [
              "36% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.2,
            "notes": [
              "14% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.055,
            "notes": [
              "1% of revenue"
            ],
            "valueText": "($55M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "otherExpenses": {
      "total": 0.014,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.014,
          "valueText": "($14M)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.6,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "+11pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "14% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +13%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "platform_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "data",
                  "label": "数据",
                  "notes": [
                    "同比 +22%"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                  "占收入 36%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
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
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +11 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 +11 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q3-fy25",
    "company": "Salesforce",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8.9,
          "notes": [
            "+9% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.1,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.3,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.8,
              "notes": [
                "+8% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.3,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.3,
              "notes": [
                "+5% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
          "notes": [
            "(2%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.3,
            "notes": [
              "35% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.4,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
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
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.3,
        "notes": [
          "78% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "20% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "16% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +9%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +8%",
                    "Slack 协作平台"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +5%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (2%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 35%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
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
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 1%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "otherExpenses": {
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
              "利润率 78%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +3 个百分点"
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
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    }
  },
  {
    "key": "salesforce-q3-fy26",
    "company": "Salesforce",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.3,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 9.7,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.3,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.5,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform, Slack & Other",
              "value": 2.2,
              "notes": [
                "+19% Y/Y"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.4,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.4,
              "notes": [
                "+6% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
          "notes": [
            "(6%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.5,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.4,
            "notes": [
              "14% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "3% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8,
        "notes": [
          "78% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.2,
        "notes": [
          "21% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.1,
        "notes": [
          "20% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台、Slack 与其他",
                  "notes": [
                    "同比 +19%"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +6%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 (6%)"
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
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
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
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
                  "同比 +2 个百分点"
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
              "利润率 78%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q4-fy23",
    "company": "Salesforce",
    "period": "Q4 FY23",
    "periodNote": "Ending January 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.4,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 7.8,
          "notes": [
            "+14% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 1.8,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 1.9,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.6,
              "notes": [
                "+15% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.2,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Data",
              "value": 1.3,
              "notes": [
                "+18% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.6,
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
        "value": 2.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.4,
            "notes": [
              "40% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.1,
            "notes": [
              "13% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.8,
            "notes": [
              "10% of revenue"
            ]
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
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.3,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "4% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.1,
        "notes": []
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +14%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +15%",
                    "Slack 协作"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "数据",
                  "notes": [
                    "同比 +18%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
              "notes": [
                "同比 +19%"
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
                  "占收入 40%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 10%"
                ]
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费",
            "notes": []
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
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
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "id": "net_loss",
            "label": "净亏损",
            "notes": []
          }
        },
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月"
      }
    }
  },
  {
    "key": "salesforce-q4-fy24",
    "company": "Salesforce",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/salesforce-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.3,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 8.7,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.2,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.7,
              "notes": [
                "+10% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.3,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.6,
              "notes": [
                "+21% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
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
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.4,
            "notes": [
              "37% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.3,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2,
            "notes": [
              "2% of revenue",
              "(8pp) Y/Y"
            ]
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
      "total": 0.023,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.023,
          "valueText": "$23M"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.1,
        "notes": [
          "77% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "17% margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "16% margin",
          "+17pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +10%",
                    "Slack 协作"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +21%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 37%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 2%",
                  "同比 (8 个百分点)"
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
              "利润率 77%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +17 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "salesforce-q4-fy25",
    "company": "Salesforce",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/salesforce-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "subscription_support",
          "label": "Subscription and support",
          "value": 9.5,
          "notes": [
            "+8% Y/Y"
          ],
          "children": [
            {
              "id": "sales",
              "label": "Sales",
              "value": 2.1,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "service",
              "label": "Service",
              "value": 2.3,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "platform_slack_other",
              "label": "Platform & Other",
              "value": 1.9,
              "notes": [
                "+12% Y/Y",
                "Slack"
              ]
            },
            {
              "id": "marketing_commerce",
              "label": "Marketing & Commerce",
              "value": 1.4,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "integration_analytics",
              "label": "Integration & Analytics",
              "value": 1.7,
              "notes": [
                "+5% Y/Y",
                "Mulesoft, Tableau"
              ]
            }
          ]
        },
        {
          "id": "professional_services",
          "label": "Professional services",
          "value": 0.5,
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
        "value": 2.2
      },
      "operatingExpenses": {
        "total": 6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3.5,
            "notes": [
              "35% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.4,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.8,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "18% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "subscription_support",
              "label": "订阅与支持",
              "notes": [
                "同比 +8%"
              ],
              "children": [
                {
                  "id": "sales",
                  "label": "销售云",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "service",
                  "label": "服务云",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "platform_slack_other",
                  "label": "平台与其他",
                  "notes": [
                    "同比 +12%",
                    "Slack 协作"
                  ]
                },
                {
                  "id": "marketing_commerce",
                  "label": "营销与商务",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "integration_analytics",
                  "label": "集成与分析",
                  "notes": [
                    "同比 +5%",
                    "MuleSoft、Tableau"
                  ]
                }
              ]
            },
            {
              "id": "professional_services",
              "label": "专业服务",
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
                  "占收入 35%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 3%",
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
              "id": "other",
              "label": "其他"
            }
          ]
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
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
