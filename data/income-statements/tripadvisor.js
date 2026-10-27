/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "tripadvisor-q3-fy25",
    "company": "Tripadvisor",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q3-fy25.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 553,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 235,
          "notes": [
            "(8%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "25% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 294,
          "notes": [
            "+9% Y/Y",
            "Tours, activities & attractions",
            "17% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 63,
          "notes": [
            "+29% Y/Y",
            "Restaurant reservations",
            "22% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -39,
          "notes": [
            "Intersegment eliminations shown as ($39M) in the source chart."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 41
      },
      "operatingExpenses": {
        "total": 442,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 227,
            "notes": [
              "41% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 147,
            "notes": [
              "27% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 26,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24,
            "notes": [
              "4% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 18,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_other",
        "label": "Tax & other",
        "value": 17
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
        "value": 512,
        "notes": [
          "93% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 70,
        "notes": [
          "13% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 53,
        "notes": [
          "10% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (8%)",
                "品牌酒店、展示平台、体验活动及餐饮",
                "调整后利润率 25%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验业务）",
              "notes": [
                "同比 +9%",
                "观光、活动及景点",
                "调整后利润率 17%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +29%",
                "餐厅预订",
                "调整后利润率 22%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表显示分部间抵销为 ($39M)。"
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
                  "占收入 41%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 27%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费及其他"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 93%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q4-fy25",
    "company": "Tripadvisor",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q4-fy25.png",
    "roundingTolerance": 5,
    "revenue": {
      "total": 411,
      "notes": [
        "+0% Y/Y"
      ],
      "items": [
        {
          "id": "hotels_other",
          "label": "Hotels & Other",
          "value": 151,
          "notes": [
            "(15%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "19% adjusted margin"
          ]
        },
        {
          "id": "experiences",
          "label": "Experiences",
          "value": 204,
          "notes": [
            "+10% Y/Y",
            "Tours, activities & attractions",
            "7% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 57,
          "notes": [
            "+19% Y/Y",
            "Restaurant reservations",
            "2% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -1,
          "notes": [
            "Intersegment eliminations shown as ($1M) in the source chart."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 35
      },
      "operatingExpenses": {
        "total": 411,
        "notes": [
          "The source displays a $411M total while its listed operating-expense lines sum to $406M; the $5M presentation gap is retained."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 175,
            "notes": [
              "43% of revenue",
              "+6pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 133,
            "notes": [
              "32% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 33,
            "notes": [
              "8% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 25,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 20,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 20,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No tax line is shown in the source operating-income bridge."
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
        "value": 376,
        "notes": [
          "91% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(9%) margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +0%"
          ],
          "items": [
            {
              "id": "hotels_other",
              "label": "酒店及其他",
              "notes": [
                "同比 (15%)",
                "品牌酒店、展示及平台、体验活动与餐饮",
                "调整后利润率 19%"
              ]
            },
            {
              "id": "experiences",
              "label": "体验业务",
              "notes": [
                "同比 +10%",
                "观光、活动及景点",
                "调整后利润率 7%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +19%",
                "餐厅预订",
                "调整后利润率 2%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表显示分部间抵销为 ($1M)。"
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
              "来源图表显示总运营费用为 $411M，所列费用项合计为 $406M；保留该 $5M 展示差额。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 43%",
                  "同比 +6 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 32%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 8%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源营业利润桥未显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 91%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 (9 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图表未显示单独的净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q1-fy26",
    "company": "Tripadvisor",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q1-fy26.png",
    "roundingTolerance": 5,
    "revenue": {
      "total": 382,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "experiences",
          "label": "Experiences",
          "value": 168,
          "notes": [
            "+8% Y/Y",
            "Tours and activities marketplace",
            "(11%) adjusted margin"
          ]
        },
        {
          "id": "hotels_other",
          "label": "Hotels & Other",
          "value": 158,
          "notes": [
            "(20%) Y/Y",
            "Legacy media and advertising",
            "23% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 57,
          "notes": [
            "+23% Y/Y",
            "Restaurant reservations",
            "8% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -1,
          "notes": [
            "Intersegment eliminations shown as ($1M) in the source chart."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 33
      },
      "operatingExpenses": {
        "total": 375,
        "notes": [
          "The source displays a $375M total while its listed operating-expense lines sum to $376M; the $1M presentation gap is retained."
        ],
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 178,
            "notes": [
              "46% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 130,
            "notes": [
              "34% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 25,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 25,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 15,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 3,
            "notes": []
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No tax line is shown in the source operating-income bridge."
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
          "91% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -25,
        "notes": [
          "(7%) margin",
          "(3pp) Y/Y"
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
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "experiences",
              "label": "体验业务",
              "notes": [
                "同比 +8%",
                "观光与活动市场",
                "调整后利润率 (11%)"
              ]
            },
            {
              "id": "hotels_other",
              "label": "酒店及其他",
              "notes": [
                "同比 (20%)",
                "传统媒体与广告",
                "调整后利润率 23%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +23%",
                "餐厅预订",
                "调整后利润率 8%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表显示分部间抵销为 ($1M)。"
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
              "来源图表显示总运营费用为 $375M，所列费用项合计为 $376M；保留该 $1M 展示差额。"
            ],
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 34%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 7%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源营业利润桥未显示税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 91%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (7%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图表未显示单独的净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q2-fy26",
    "company": "Tripadvisor",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q2-fy26.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 442,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "experiences",
          "label": "Experiences",
          "value": 279,
          "notes": [
            "+3% Y/Y",
            "Tours and activities marketplace"
          ]
        },
        {
          "id": "hotels_other",
          "label": "Hotels & Other",
          "value": 163,
          "notes": [
            "(21%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "hotels_other_components",
          "label": "Revenue components",
          "total": 442,
          "items": [
            {
              "id": "hotels",
              "label": "Hotels",
              "value": 118,
              "notes": [
                "(23%) Y/Y"
              ]
            },
            {
              "id": "media",
              "label": "Media & Advertising",
              "value": 31,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 14,
              "notes": [
                "(20%) Y/Y"
              ]
            },
            {
              "id": "experiences",
              "label": "Experiences",
              "value": 279,
              "notes": [
                "+3% Y/Y",
                "Tours and activities marketplace"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 31,
        "notes": []
      },
      "operatingExpenses": {
        "total": 373,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 215,
            "notes": [
              "49% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 99,
            "notes": [
              "22% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 22,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 19,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 15,
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 4,
            "notes": []
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 10,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 10,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 411,
        "notes": [
          "93% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 38,
        "notes": [
          "9% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 23,
        "notes": [
          "5% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度",
        "revenue": {
          "notes": [
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "experiences",
              "label": "体验业务",
              "notes": [
                "同比 +3%",
                "观光与活动市场"
              ]
            },
            {
              "id": "hotels_other",
              "label": "酒店及其他",
              "notes": [
                "同比 (21%)"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "hotels_other_components",
              "label": "收入明细",
              "items": [
                {
                  "id": "hotels",
                  "label": "酒店",
                  "notes": [
                    "同比 (23%)"
                  ]
                },
                {
                  "id": "media",
                  "label": "媒体与广告",
                  "notes": [
                    "同比 (12%)"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": [
                    "同比 (20%)"
                  ]
                },
                {
                  "id": "experiences",
                  "label": "体验业务",
                  "notes": [
                    "同比 +3%",
                    "观光与活动市场"
                  ]
                }
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
                "label": "销售与营销",
                "notes": [
                  "占收入 49%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 22%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": []
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
              "id": "other_expense",
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
              "利润率 93%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q3-fy22",
    "company": "Tripadvisor",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended Sep. 30, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q3-fy22.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 459,
      "notes": [
        "+51% Y/Y"
      ],
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 284,
          "notes": [
            "+34% Y/Y",
            "Branded hotels, display & platform, experiences & dining"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 174,
          "notes": [
            "+138% Y/Y",
            "Tours, activities & attractions"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 35,
          "notes": [
            "+17% Y/Y",
            "Restaurant reservations"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -34,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 32,
        "notes": []
      },
      "operatingExpenses": {
        "total": 357,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 234,
            "notes": []
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 55,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 45,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 23,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 37,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 8,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 427,
        "notes": [
          "93% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 70,
        "notes": [
          "15% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 25,
        "notes": [
          "5% margin",
          "Unchanged"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "viator_gross_bookings",
        "label": "Viator gross bookings",
        "value": "800",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$800M",
        "basis": "unspecified",
        "notes": [
          "+113% Y/Y"
        ],
        "quote": "Viator gross bookings\n$800M\n+113% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1235,
            401,
            147
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
            "同比 +51%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +34%",
                "品牌酒店、展示与平台、体验活动及餐饮"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验预订）",
              "notes": [
                "同比 +138%",
                "观光、活动及景点"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +17%",
                "餐厅预订"
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
                "id": "sm",
                "label": "销售与营销"
              },
              {
                "id": "technology",
                "label": "技术"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 93%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "未变"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "viator_gross_bookings",
            "label": "Viator 总预订额",
            "notes": [
              "同比 +113%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "tripadvisor-q4-fy22",
    "company": "Tripadvisor",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q4-fy22.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 354,
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 217,
          "notes": [
            "+34% Y/Y",
            "Branded hotels, display & platform, experiences & dining"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 127,
          "notes": [
            "+115% Y/Y",
            "Tours, activities & attractions"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 33,
          "notes": [
            "+10% Y/Y",
            "Restaurant reservations"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -23,
          "notes": []
        }
      ],
      "notes": [
        "+47% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 30,
        "notes": []
      },
      "operatingExpenses": {
        "total": 337,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 194,
            "notes": [
              "55% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 60,
            "notes": [
              "17% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 58,
            "notes": [
              "16% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 25,
            "notes": [
              "7% of revenue",
              "(4pp) Y/Y"
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
        "value": 324,
        "notes": [
          "92% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -13,
        "notes": [
          "(3%) margin",
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
        "id": "viator_gross_bookings",
        "label": "Viator gross bookings",
        "literal": "$800M",
        "value": "800",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Viator gross bookings\n$800M\n+113% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+113% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1236,
            401,
            148
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
            "同比 +47%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +34%",
                "品牌酒店、展示及平台、体验活动与餐饮"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验业务）",
              "notes": [
                "同比 +115%",
                "观光、活动及景点"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +10%",
                "餐厅预订"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 55%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 17%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 7%",
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
              "利润率 92%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "来源图表止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "viator_gross_bookings",
            "label": "Viator 总预订额",
            "notes": [
              "同比 +113%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "tripadvisor-q1-fy23",
    "company": "Tripadvisor",
    "period": "Q1 FY23",
    "periodNote": "Q1 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q1-fy23.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 371,
      "notes": [
        "+42% Y/Y"
      ],
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 244,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 115,
          "notes": [
            "+105% Y/Y"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 35,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -23,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 29
      },
      "operatingExpenses": {
        "total": 356,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 219,
            "notes": [
              "59% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 68,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 48,
            "notes": [
              "13% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 21,
            "notes": [
              "6% of revenue",
              "(4pp) Y/Y"
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
        "value": 342,
        "notes": [
          "92% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -14,
        "notes": [
          "(4%) margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "label": "Net profit",
        "value": null,
        "availability": "not-reported",
        "notes": [
          "The Source stops at operating loss and does not report net profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "viator_gross_bookings",
        "label": "Viator gross bookings",
        "literal": "$800M",
        "value": "800",
        "unit": "M",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+113% Y/Y"
        ],
        "quote": "Viator gross bookings\n$800M\n+113% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1236,
            401,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +42%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验业务）",
              "notes": [
                "同比 +105%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +35%"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 59%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 6%",
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
              "毛利率 92%",
              "同比 +1 个百分点"
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
            "label": "净利润",
            "notes": [
              "原图截至营业亏损，未披露净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "viator_gross_bookings",
            "label": "Viator 总预订额",
            "notes": [
              "同比 +113%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "tripadvisor-q2-fy23",
    "company": "Tripadvisor",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q2-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 494,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 279,
          "notes": [
            "+2% Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "34% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 216,
          "notes": [
            "+59% Y/Y",
            "Tours, activities & attractions",
            "(1%) adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 38,
          "notes": [
            "+19% Y/Y",
            "Restaurant reservations",
            "(11%) adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -39,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 41,
        "notes": []
      },
      "operatingExpenses": {
        "total": 409,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 270,
            "notes": [
              "55% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 71,
            "notes": [
              "14% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 47,
            "notes": [
              "10% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 21,
            "notes": [
              "4% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 20,
        "notes": []
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
        "value": 453,
        "notes": [
          "92% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 44,
        "notes": [
          "9% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 24,
        "notes": [
          "5% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "viator_gross_bookings",
        "label": "Viator gross bookings",
        "value": "1.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.1B",
        "basis": "unspecified",
        "notes": [
          "+40% Y/Y"
        ],
        "quote": "Viator gross bookings\n$1.1B\n+40% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            211,
            1236,
            401,
            147
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
            "同比 +18%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +2%",
                "品牌酒店、展示平台、体验活动及餐饮",
                "调整后利润率 34%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验预订）",
              "notes": [
                "同比 +59%",
                "观光、活动及景点",
                "调整后利润率 (1%)"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +19%",
                "餐厅预订",
                "调整后利润率 (11%)"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 55%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 14%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 4%",
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
              "利润率 92%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "viator_gross_bookings",
            "label": "Viator 总预订额",
            "notes": [
              "同比 +40%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "tripadvisor-q1-fy24",
    "company": "Tripadvisor",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q1-fy24.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 395,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 240,
          "notes": [
            "(2%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "33% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 141,
          "notes": [
            "+23% Y/Y",
            "Tours, activities & attractions",
            "(19%) adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 41,
          "notes": [
            "+17% Y/Y",
            "Restaurant reservations",
            "(10%) adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -27,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 35,
        "notes": []
      },
      "operatingExpenses": {
        "total": 375,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 221,
            "notes": [
              "56% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 76,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 56,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 22,
            "notes": [
              "6% of revenue",
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
        "value": 360,
        "notes": [
          "91% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -15,
        "notes": [
          "(4%) margin",
          "+0pp Y/Y"
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
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (2%)",
                "品牌酒店、展示广告与平台、体验及餐饮",
                "调整后利润率 33%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验预订）",
              "notes": [
                "同比 +23%",
                "旅游、活动与景点",
                "调整后利润率 (19%)"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +17%",
                "餐厅预订",
                "调整后利润率 (10%)"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 56%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
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
                "id": "amortization",
                "label": "摊销",
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
              "利润率 91%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源截至营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q3-fy23",
    "company": "Tripadvisor",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q3-fy23.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 533,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 290,
          "notes": [
            "+2% Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "39% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 245,
          "notes": [
            "+41% Y/Y",
            "Tours, activities & attractions",
            "5% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 42,
          "notes": [
            "+20% Y/Y",
            "Restaurant reservations",
            "(21%) adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -44,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 43,
        "notes": []
      },
      "operatingExpenses": {
        "total": 426,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 272,
            "notes": [
              "51% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 66,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 49,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 21,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 18,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 37,
        "notes": []
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
        "value": 490,
        "notes": [
          "92% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 64,
        "notes": [
          "12% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 27,
        "notes": [
          "5% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +2%",
                "品牌酒店、展示平台、体验活动及餐饮",
                "调整后利润率 39%"
              ]
            },
            {
              "id": "viator",
              "label": "体验业务",
              "notes": [
                "同比 +41%",
                "观光、活动及景点",
                "调整后利润率 5%"
              ]
            },
            {
              "id": "thefork",
              "label": "餐厅预订",
              "notes": [
                "同比 +20%",
                "餐厅预订",
                "调整后利润率 (21%)"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 51%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 12%",
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
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 3%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 92%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q2-fy24",
    "company": "Tripadvisor",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q2-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 497,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 250,
          "notes": [
            "(10%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "34% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 244,
          "notes": [
            "+13% Y/Y",
            "Tours, activities & attractions",
            "4% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 42,
          "notes": [
            "+11% Y/Y",
            "Restaurant reservations",
            "7% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -39
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 46
      },
      "operatingExpenses": {
        "total": 415,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 263,
            "notes": [
              "53% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 75,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 56,
            "notes": [
              "11% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 21,
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
        "value": 14
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
        "value": 451,
        "notes": [
          "91% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 36,
        "notes": [
          "7% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 24,
        "notes": [
          "5% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (10%)",
                "品牌酒店、展示及平台、体验活动与餐饮",
                "调整后利润率 34%"
              ]
            },
            {
              "id": "viator",
              "label": "体验业务",
              "notes": [
                "同比 +13%",
                "观光、活动及景点",
                "调整后利润率 4%"
              ]
            },
            {
              "id": "thefork",
              "label": "餐厅预订",
              "notes": [
                "同比 +11%",
                "餐厅预订",
                "调整后利润率 7%"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 53%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
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
              "利润率 91%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q2-fy25",
    "company": "Tripadvisor",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q2-fy25.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 529,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 242,
          "notes": [
            "(3%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "27% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 270,
          "notes": [
            "+11% Y/Y",
            "Tours, activities & attractions",
            "12% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 54,
          "notes": [
            "+28% Y/Y",
            "Restaurant reservations",
            "17% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -37,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 42
      },
      "operatingExpenses": {
        "total": 428,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 218,
            "notes": [
              "41% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 149,
            "notes": [
              "28% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 25,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 23,
            "notes": [
              "4% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 13,
            "notes": [
              "2% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax_other",
        "label": "Tax",
        "value": 23
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
        "value": 487,
        "notes": [
          "92% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 59,
        "notes": [
          "11% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 36,
        "notes": [
          "7% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (3%)",
                "品牌酒店、展示平台、体验活动及餐饮",
                "调整后利润率 27%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验业务）",
              "notes": [
                "同比 +11%",
                "观光、活动及景点",
                "调整后利润率 12%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +28%",
                "餐厅预订",
                "调整后利润率 17%"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 41%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 28%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 4%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 92%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q3-fy24",
    "company": "Tripadvisor",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q3-fy24.png",
    "roundingTolerance": 0.01,
    "revenue": {
      "total": 532,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 255,
          "notes": [
            "(12%) Y/Y",
            "Branded hotels,",
            "display & platform,",
            "experiences & dining",
            "34% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 270,
          "notes": [
            "+10% Y/Y",
            "Tours, activities",
            "& attractions",
            "11% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 49,
          "notes": [
            "+17% Y/Y",
            "Restaurant",
            "reservations",
            "10% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -42,
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
        "value": 47,
        "notes": []
      },
      "operatingExpenses": {
        "total": 415,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 271,
            "notes": [
              "51% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 73,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 51,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 20,
            "notes": [
              "4% of revenue",
              "(4pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 27,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 4,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 4,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 485,
        "notes": [
          "91% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 70,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 39,
        "notes": [
          "7% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (12%)",
                "品牌酒店、展示与平台",
                "体验活动及餐饮",
                "调整后利润率 34%"
              ]
            },
            {
              "id": "viator",
              "label": "体验业务",
              "notes": [
                "同比 +10%",
                "观光、活动及景点",
                "调整后利润率 11%"
              ]
            },
            {
              "id": "thefork",
              "label": "餐厅预订",
              "notes": [
                "同比 +17%",
                "餐厅预订",
                "调整后利润率 10%"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 51%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 4%",
                  "同比 (4 个百分点)"
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
              "id": "other_expense",
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
              "利润率 91%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q4-fy23",
    "company": "Tripadvisor",
    "period": "Q4 FY23",
    "periodNote": "Q4 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q4-fy23.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 390,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "core",
          "label": "Core",
          "value": 218,
          "notes": [
            "+0% Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "39% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 161,
          "notes": [
            "+27% Y/Y",
            "Tours, activities & attractions",
            "5% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 39,
          "notes": [
            "+18% Y/Y",
            "Restaurant reservations",
            "(21%) adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -28,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 36,
        "notes": []
      },
      "operatingExpenses": {
        "total": 323,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 179,
            "notes": [
              "46% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 68,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 47,
            "notes": [
              "12% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 25,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 4,
            "notes": [
              "1% of revenue"
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
      "total": 1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 1,
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
        "value": 354,
        "notes": [
          "91% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 31,
        "notes": [
          "8% margin",
          "+12pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 32,
        "notes": [
          "8% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "core",
              "label": "核心业务",
              "notes": [
                "同比 +0%",
                "品牌酒店、展示及平台、体验活动与餐饮",
                "调整后利润率 39%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验活动）",
              "notes": [
                "同比 +27%",
                "观光、活动及景点",
                "调整后利润率 5%"
              ]
            },
            {
              "id": "thefork",
              "label": "餐厅预订",
              "notes": [
                "同比 +18%",
                "餐厅预订",
                "调整后利润率 (21%)"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 46%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 1%"
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
              "id": "other_income",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 91%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 +9 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q1-fy25",
    "company": "Tripadvisor",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q1-fy25.png",
    "roundingTolerance": 0,
    "revenue": {
      "total": 398,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 219,
          "notes": [
            "(9%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "30% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 156,
          "notes": [
            "+11% Y/Y",
            "Tours, activities & attractions",
            "(12%) adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 46,
          "notes": [
            "+12% Y/Y",
            "Restaurant reservations",
            "(7%) adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -23,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 27,
        "notes": []
      },
      "operatingExpenses": {
        "total": 386,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 172,
            "notes": [
              "43% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 144,
            "notes": [
              "36% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 22,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 21,
            "notes": [
              "5% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 17,
            "notes": [
              "4% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 10,
            "notes": [
              "3% of revenue",
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
        "value": 371,
        "notes": [
          "93% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -15,
        "notes": [
          "(4%) margin",
          "(0pp) Y/Y"
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
            "同比 +1%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (9%)",
                "品牌酒店、展示平台、体验活动及餐饮",
                "调整后利润率 30%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验预订）",
              "notes": [
                "同比 +11%",
                "观光、活动与景点",
                "调整后利润率 (12%)"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +12%",
                "餐厅预订",
                "调整后利润率 (7%)"
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 43%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 36%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 6%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "da",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 5%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (3 个百分点)"
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
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 93%",
              "同比 (0 个百分点)"
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
            "label": "净利润未披露",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "tripadvisor-q4-fy24",
    "company": "Tripadvisor",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/tripadvisor-q4-fy24.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 411,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "tripadvisor",
          "label": "Tripadvisor",
          "value": 204,
          "notes": [
            "(6%) Y/Y",
            "Branded hotels, display & platform, experiences & dining",
            "26% adjusted margin"
          ]
        },
        {
          "id": "viator",
          "label": "Viator",
          "value": 186,
          "notes": [
            "+16% Y/Y",
            "Tours, activities & attractions",
            "11% adjusted margin"
          ]
        },
        {
          "id": "thefork",
          "label": "TheFork",
          "value": 48,
          "notes": [
            "+23% Y/Y",
            "Restaurant reservations",
            "0% adjusted margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -27
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
        "value": 27
      },
      "operatingExpenses": {
        "total": 384,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 152,
            "notes": [
              "37% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 146,
            "notes": [
              "36% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 43,
            "notes": [
              "10% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "technology",
            "label": "Technology",
            "value": 24,
            "notes": [
              "6% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 19,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No tax line reported in Source."
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
        "value": 384,
        "notes": [
          "93% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "label": "Operating result",
        "value": 0,
        "notes": [
          "Gross profit equals operating expenses in Source."
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating expenses."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "tripadvisor",
              "label": "猫途鹰",
              "notes": [
                "同比 (6%)",
                "品牌酒店、展示及平台、体验活动与餐饮",
                "调整后利润率 26%"
              ]
            },
            {
              "id": "viator",
              "label": "Viator（体验预订）",
              "notes": [
                "同比 +16%",
                "观光、活动及景点",
                "调整后利润率 11%"
              ]
            },
            {
              "id": "thefork",
              "label": "TheFork（餐厅预订）",
              "notes": [
                "同比 +23%",
                "餐厅预订",
                "调整后利润率 0%"
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
            "label": [
              "收入",
              "成本"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 37%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "personnel",
                "label": "人员",
                "notes": [
                  "占收入 36%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 10%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "technology",
                "label": "技术",
                "notes": [
                  "占收入 6%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源未披露税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 93%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业结果",
            "notes": [
              "来源中的毛利润等于运营费用。"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于运营费用。"
            ]
          }
        }
      }
    }
  }
]);
})(window);
