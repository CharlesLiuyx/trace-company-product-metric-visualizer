/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "paramount-q3-fy25",
    "company": "Paramount",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.7,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.8,
          "notes": [
            "+28% Y/Y",
            "(6%) adjusted OIBDA margin",
            "(7pp) Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 3.8,
          "notes": [
            "(12%) Y/Y",
            "22% adjusted OIBDA margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2.2,
          "notes": [
            "+17% Y/Y",
            "+16% adjusted OIBDA margin",
            "+13pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.017,
          "notes": [
            "Source chart displays eliminations as ($17M)."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart flows revenue directly to operating profit and costs and expenses; no separate gross-profit or cost-of-revenue layer is shown."
        ]
      },
      "operatingExpenses": {
        "total": 6.4,
        "notes": [
          "Source chart labels this bridge as Costs and expenses."
        ],
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.3
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.4
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source chart shows a $0.1B tax benefit rather than a tax expense."
        ]
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax",
          "value": 0.1,
          "notes": [
            "Displayed as a positive green tax benefit in the source chart."
          ]
        }
      ]
    },
    "otherExpenses": {
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
        "label": "Gross profit bridge",
        "value": 6.7,
        "notes": [
          "SSOT bridge for arithmetic only; source chart does not display gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "5% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "3% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +28%",
                "调整后 OIBDA 利润率 (6%)",
                "同比 (7 个百分点)"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (12%)",
                "调整后 OIBDA 利润率 22%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +17%",
                "调整后 OIBDA 利润率 +16%",
                "同比 +13 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表将抵销显示为 ($17M)。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图表将收入直接拆分为营业利润和成本费用；未显示单独毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图表将该桥接项标为成本和费用。"
            ],
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图表显示 $0.1B 税收收益，而非税费。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益",
              "notes": [
                "来源图表以绿色正向流显示该税收收益。"
              ]
            }
          ]
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
            "label": "毛利润桥接",
            "notes": [
              "仅用于 SSOT 算术桥接；来源图表未显示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paramount-q4-fy25",
    "company": "Paramount",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paramount-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.148,
      "notes": [
        "+2% Y/Y",
        "Official Q4 2025 total revenue; source chart displays $8.1B."
      ],
      "items": [
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2.213,
          "notes": [
            "+10% Y/Y",
            "(7%) adjusted OIBDA margin",
            "+7pp Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.714,
          "notes": [
            "(5%) Y/Y",
            "23% adjusted OIBDA margin",
            "+4pp Y/Y"
          ]
        },
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 1.256,
          "notes": [
            "+16% Y/Y",
            "(9%) adjusted OIBDA margin",
            "(6pp) Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.035,
          "notes": [
            "The source chart shows eliminations as ($35M)."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart directly bridges revenue and operating loss to costs and expenses; no separate gross-profit or cost-of-revenue layer is shown."
        ]
      },
      "operatingExpenses": {
        "total": 8.487,
        "notes": [
          "Official Q4 2025 total costs and expenses, calculated as $8.148B revenue plus $0.339B operating loss; source chart displays ($8.5B)."
        ],
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 5.8
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.8
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.5
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.346,
            "notes": [
              "Source chart rounds this visible amount to ($0.4B)."
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.041,
            "notes": [
              "Source chart displays ($41M)."
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source chart ends at operating loss and does not show a separate tax line."
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
        "label": "Gross profit bridge",
        "value": 8.148,
        "notes": [
          "SSOT bridge for arithmetic only; source chart does not display gross profit."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.339,
        "notes": [
          "(4%) margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.339,
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
            "同比 +2%",
            "2025 年第四季度官方总收入；来源图表显示为 $8.1B。"
          ],
          "items": [
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +10%",
                "调整后 OIBDA 利润率 (7%)",
                "同比 +7 个百分点"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (5%)",
                "调整后 OIBDA 利润率 23%",
                "同比 +4 个百分点"
              ]
            },
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +16%",
                "调整后 OIBDA 利润率 (9%)",
                "同比 (6 个百分点)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表将抵销显示为 ($35M)。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图表将收入和营业亏损直接桥接至成本和费用；未显示单独毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "官方 2025 年第四季度成本和费用总额，按 $8.148B 收入加 $0.339B 营业亏损计算；来源图表显示为 ($8.5B)。"
            ],
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组"
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "来源图表将此可见金额四舍五入为 ($0.4B)。"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "来源图表显示为 ($41M)。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图表止于营业亏损，未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润桥接",
            "notes": [
              "仅用于 SSOT 算术桥接；来源图表未显示毛利润。"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (6 个百分点)"
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
    "key": "paramount-q1-fy26",
    "company": "Paramount",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paramount-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 7.4,
      "notes": [
        "+2% Y/Y",
        "Official Q1 2026 total revenues were $7.347B; source chart displays $7.4B."
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 1.3,
          "notes": [
            "+11% Y/Y",
            "13% adj. margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 3.7,
          "notes": [
            "(6%) Y/Y",
            "29% adj. margin",
            "+3pp Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2.4,
          "notes": [
            "+11% Y/Y",
            "10% adj. margin",
            "+11pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart flows revenue directly to operating profit and total costs and expenses; no separate gross-profit or cost-of-revenue layer is shown."
        ]
      },
      "operatingExpenses": {
        "total": 6.7,
        "notes": [
          "Source chart labels this bridge as Costs and expenses; official total costs and expenses were $6.731B.",
          "Rounded source-chart item labels are preserved; official statements list Operating $4.855B, SG&A $1.411B, depreciation and amortization $0.362B, and restructuring/transaction-related items $0.103B."
        ],
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.9
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.4,
            "notes": [
              "Source chart displays Restructuring as ($0.4B); official Q1 statement lists depreciation and amortization as $0.362B."
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "Source chart displays Amortization as ($0.1B); official Q1 statement lists restructuring and transaction-related items as $0.103B."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": [
          "Official provision for income taxes was $155M; source chart displays ($0.2B)."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3,
          "notes": [
            "Source chart groups interest expense, interest income, other items, and equity losses into Other."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit bridge",
        "value": 7.4,
        "notes": [
          "SSOT bridge for arithmetic only; source chart does not display gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "+1pp Y/Y",
          "Official operating income was $616M."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "+0pp Y/Y",
          "Official net earnings attributable to Parent were $168M."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +2%",
            "官方 2026 年第一季度总收入为 $7.347B；来源图表显示为 $7.4B。"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +11%",
                "调整后利润率 13%",
                "同比 +6 个百分点"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (6%)",
                "调整后利润率 29%",
                "同比 +3 个百分点"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +11%",
                "调整后利润率 10%",
                "同比 +11 个百分点"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图表将收入直接拆分为营业利润和总成本费用；未显示单独毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图表将该桥接项标为成本和费用；官方总成本和费用为 $6.731B。",
              "保留来源图表的四舍五入项目标签；官方报表列示运营 $4.855B、SG&A $1.411B、折旧和摊销 $0.362B，以及重组/交易相关项目 $0.103B。"
            ],
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "来源图表将重组显示为 ($0.4B)；官方 Q1 报表列示折旧和摊销为 $0.362B。"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "来源图表将摊销显示为 ($0.1B)；官方 Q1 报表列示重组和交易相关项目为 $0.103B。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "官方所得税拨备为 $155M；来源图表显示为 ($0.2B)。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "来源图表将利息费用、利息收入、其他项目和权益法投资亏损归入其他。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润桥接",
            "notes": [
              "仅用于 SSOT 算术桥接；来源图表未显示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +1 个百分点",
              "官方营业利润为 $616M。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +0 个百分点",
              "归属于母公司的官方净利润为 $168M。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paramount-q3-fy22",
    "company": "Paramount",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.9,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.8,
          "notes": [
            "+48% Y/Y",
            "5% adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.9,
          "notes": [
            "(5%) Y/Y",
            "25% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.2,
          "notes": [
            "+38% Y/Y",
            "(28%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.041
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.5
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.7,
            "notes": [
              "24% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2,
            "notes": [
              "2% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.041,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.041
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
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
        "value": 2.5,
        "notes": [
          "36% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "value": "67000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "67M",
        "basis": "unspecified",
        "quote": "DTC subscribers 67M",
        "anchor": {
          "type": "image-box",
          "box": [
            139,
            1268,
            570,
            121
          ]
        },
        "notes": []
      },
      {
        "id": "paramount_subscribers",
        "label": "Paramount+ subscribers",
        "value": "46000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "46M",
        "basis": "unspecified",
        "quote": "Paramount+ subscribers 46M",
        "anchor": {
          "type": "image-box",
          "box": [
            139,
            1268,
            570,
            121
          ]
        },
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +48%",
                "调整后利润率 5%"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (5%)",
                "调整后利润率 25%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +38%",
                "调整后利润率 (28%)"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ],
          "notes": [
            "同比 +5%"
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
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 24%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 2%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
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
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
            }
          ]
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
              "利润率 36%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (5 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户"
          },
          {
            "id": "paramount_subscribers",
            "label": "Paramount+ 订阅用户"
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q2-fy26",
    "company": "Paramount",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.9,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2.5,
          "notes": [
            "+9% Y/Y",
            "15% adj. margin",
            "+11pp Y/Y"
          ]
        },
        {
          "id": "studios",
          "label": "Studios",
          "value": 1.3,
          "notes": [
            "+16% Y/Y",
            "3% adj. margin",
            "+5pp Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 3.1,
          "notes": [
            "(9%) Y/Y",
            "34% adj. margin",
            "+8pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.003,
          "notes": [
            "Source displays ($0.0B); official Q2 2026 eliminations are $3M. https://www.sec.gov/Archives/edgar/data/2041610/000204161026000052/ex99_q226.htm"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a gross-profit layer."
        ]
      },
      "operatingExpenses": {
        "total": 6.4,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.4
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.4
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
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
        "label": "Gross profit bridge",
        "value": 6.9,
        "notes": [
          "Arithmetic bridge only; not shown in Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.041,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +9%",
                "调整后利润率 15%",
                "同比 +11 个百分点"
              ]
            },
            {
              "id": "studios",
              "label": "制片业务",
              "notes": [
                "同比 +16%",
                "调整后利润率 3%",
                "同比 +5 个百分点"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (9%)",
                "调整后利润率 34%",
                "同比 +8 个百分点"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图显示 ($0.0B)；官方 2026 年第二季度抵销额为 300 万美元。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未展示毛利润层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring",
                "label": "重组"
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
            "label": "毛利润桥接",
            "notes": [
              "仅作算术桥接；原图未显示。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "paramount-q2-fy25",
    "company": "Paramount",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.8,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.7,
          "notes": [
            "+2% Y/Y",
            "(12%) adj. margin",
            "(4pp) Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4,
          "notes": [
            "(6%) Y/Y",
            "22% adj. margin",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2.2,
          "notes": [
            "+15% Y/Y",
            "7% adj. margin",
            "+6pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.012,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source does not show a separate gross-profit layer."
        ]
      },
      "operatingExpenses": {
        "total": 6.5,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.6
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.4
          },
          {
            "id": "restructuring",
            "label": "Restructuring /Impairment",
            "value": 0.3
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
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
        "label": "Gross profit bridge",
        "value": 6.8,
        "notes": [
          "Arithmetic bridge only; not displayed in Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "6% margin",
          "+84pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "+80pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1150,
            568,
            159
          ]
        },
        "label": "Subscribers",
        "value": "78000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "78M",
        "basis": "unspecified",
        "notes": [
          "-1.3M Q/Q"
        ],
        "quote": "Paramount+\nSubscribers 78M (-1.3M Q/Q)"
      },
      {
        "id": "arpu_yoy",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1150,
            568,
            159
          ]
        },
        "label": "ARPU",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Paramount+\nARPU +9% Y/Y"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +2%",
                "调整后利润率 (12%)",
                "同比 (4 个百分点)"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (6%)",
                "调整后利润率 22%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +15%",
                "调整后利润率 7%",
                "同比 +6 个百分点"
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
            "label": "收入成本",
            "notes": [
              "原图未显示独立毛利润层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组/减值"
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
            "label": "毛利润桥接",
            "notes": [
              "仅作算术桥接；原图未显示。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +84 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +80 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "环比减少 130 万"
            ]
          },
          {
            "id": "arpu_yoy",
            "label": "Paramount+ 每用户平均收入同比变化",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q4-fy22",
    "company": "Paramount",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.1,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.9,
          "notes": [
            "+35% Y/Y",
            "9% adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5.9,
          "notes": [
            "(7%) Y/Y",
            "22% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.4,
          "notes": [
            "+30% Y/Y",
            "(41%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.084,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.5
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2,
            "notes": [
              "25% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.3,
            "notes": [
              "4% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "2% of revenue"
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
        "value": 2.6,
        "notes": [
          "33% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "(31pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.021,
        "notes": [
          "0% margin",
          "(26pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "dtc_subscribers",
        "label": "DTC subscribers",
        "value": "77000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "77M",
        "basis": "unspecified",
        "notes": [
          "+11M Q/Q"
        ],
        "quote": "DTC subscribers 77M (+11M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            169,
            1288,
            516,
            42
          ]
        }
      },
      {
        "id": "paramount_plus_subscribers",
        "label": "Paramount+ subscribers",
        "value": "56000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "56M",
        "basis": "unspecified",
        "notes": [
          "+10M Q/Q"
        ],
        "quote": "Paramount+ subscribers 56M (+10M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            111,
            1334,
            630,
            42
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +35%",
                "调整后利润率 9%"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (7%)",
                "调整后利润率 22%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +30%",
                "调整后利润率 (41%)"
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
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 25%"
                ]
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": [
                  "占收入 4%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 2%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
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
              "利润率 33%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (31 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 0%",
              "同比 (26 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "dtc_subscribers",
            "label": "DTC 订阅用户",
            "notes": [
              "环比 +11M"
            ]
          },
          {
            "id": "paramount_plus_subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "环比 +10M"
            ]
          }
        ],
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度"
      }
    }
  },
  {
    "key": "paramount-q1-fy24",
    "company": "Paramount",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.7,
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.6
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5.2
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.9
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.03
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 6.1,
        "label": "Cost of revenue",
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 5
          },
          {
            "id": "programming",
            "label": "Programming",
            "value": 1.1
          }
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.6
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
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
        "value": 1.5
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.4
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
        "id": "subscribers",
        "label": "Paramount+ subscribers",
        "literal": "71M",
        "value": "71000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y",
          "+3.7M Q/Q"
        ],
        "quote": "Paramount+ subscribers\n71M (+18% Y/Y)\n+3.7M Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            194,
            1225,
            466,
            164
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度",
        "revenue": {
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐"
            },
            {
              "id": "tv_media",
              "label": "电视媒体"
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者"
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "programming",
                "label": "节目制作"
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组"
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
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业亏损"
          },
          "net": {
            "label": "净损益未报告",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "同比 +18%",
              "环比 +3.7M"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q1-fy23",
    "company": "Paramount",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.3,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.6,
          "notes": [
            "(6%) Y/Y",
            "(17%) adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5.2,
          "notes": [
            "(8%) Y/Y",
            "25% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.5,
          "notes": [
            "+39% Y/Y",
            "(34%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.026
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "operating",
        "label": "Operating",
        "value": 5
      },
      "operatingExpenses": {
        "total": 3.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.7,
            "notes": [
              "24% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Programming Restructuring",
            "value": 1.7,
            "notes": [
              "23% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.3,
        "notes": [
          "32% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -1.2,
        "notes": [
          "(17%) margin",
          "(27pp) Y/Y"
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
        "id": "paramount_subscribers",
        "label": "Paramount+ subscribers",
        "value": "60000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "60M",
        "basis": "unspecified",
        "notes": [
          "+4M Q/Q"
        ],
        "quote": "Paramount+ subscribers 60M (+4M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            143,
            1274,
            651,
            46
          ]
        }
      },
      {
        "id": "pluto_mau",
        "label": "Pluto TV Monthly Active Users",
        "value": "80000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "80M",
        "basis": "unspecified",
        "notes": [],
        "quote": "Pluto TV Monthly Active Users 80M",
        "anchor": {
          "type": "image-box",
          "box": [
            182,
            1322,
            573,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 (6%)",
                "调整后利润率 (17%)"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (8%)",
                "调整后利润率 25%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +39%",
                "调整后利润率 (34%)"
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
            "label": "运营成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 24%"
                ]
              },
              {
                "id": "restructuring",
                "label": "节目重组",
                "notes": [
                  "占收入 23%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 1%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 32%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (17%)",
              "同比 (27 个百分点)"
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
            "id": "paramount_subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "环比 +4M"
            ]
          },
          {
            "id": "pluto_mau",
            "label": "Pluto TV 月活用户",
            "notes": []
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q2-fy23",
    "company": "Paramount",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.6,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.8,
          "notes": [
            "(39%) Y/Y",
            "1% adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5.2,
          "notes": [
            "(2%) Y/Y",
            "23% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.7,
          "notes": [
            "+40% Y/Y",
            "(25%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.037
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "operating",
        "label": "Operating",
        "value": 5.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.8,
            "notes": [
              "24% of revenue"
            ]
          },
          {
            "id": "programming_restructuring",
            "label": "Programming Restructuring",
            "value": 0.7,
            "notes": [
              "9% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "1% of revenue"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
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
        "value": 2.4,
        "notes": [
          "31% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.3,
        "notes": [
          "(3%) margin",
          "(14pp) Y/Y"
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
        "id": "subscribers",
        "label": "Paramount+ subscribers",
        "value": "61000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "61M",
        "notes": [
          "+1M Q/Q"
        ],
        "quote": "Paramount+ subscribers 61M (+1M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            169,
            1279,
            625,
            39
          ]
        },
        "basis": "unspecified"
      },
      {
        "id": "viewing_hours_growth",
        "label": "Paramount+ & Pluto TV viewing hours",
        "value": "35",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+35%",
        "notes": [
          "Y/Y"
        ],
        "quote": "Paramount+ & Pluto TV viewing hours +35% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            117,
            1326,
            729,
            39
          ]
        },
        "basis": "unspecified"
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 (39%)",
                "调整后利润率 1%"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (2%)",
                "调整后利润率 23%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +40%",
                "调整后利润率 (25%)"
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
            "label": "运营成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 24%"
                ]
              },
              {
                "id": "programming_restructuring",
                "label": "节目制作重组",
                "notes": [
                  "占收入 9%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 1%"
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
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 31%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (14 个百分点)"
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
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "环比 +1M"
            ]
          },
          {
            "id": "viewing_hours_growth",
            "label": "Paramount+ 与 Pluto TV 观看时长增长",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q3-fy23",
    "company": "Paramount",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.1,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.9,
          "notes": [
            "+14% Y/Y",
            "(5%) adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.6,
          "notes": [
            "(8%) Y/Y",
            "25% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.7,
          "notes": [
            "+38% Y/Y",
            "(14%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.017,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "operating",
        "label": "Operating",
        "value": 4.7
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.7
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.04
      }
    },
    "otherExpenses": {
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
        "value": 2.5,
        "notes": [
          "34% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "9% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "Paramount+ subscribers",
        "value": "63400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "63.4M",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "Paramount+ subscribers 63.4M (+31% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            960,
            600,
            65
          ]
        }
      },
      {
        "id": "viewing_hours_growth",
        "label": "Paramount+ & Pluto TV viewing hours",
        "value": "46",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+46%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Paramount+ & Pluto TV viewing hours +46% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            70,
            1015,
            600,
            50
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +14%",
                "调整后利润率 (5%)"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (8%)",
                "调整后利润率 25%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +38%",
                "调整后利润率 (14%)"
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
            "label": "运营成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政"
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
              "利润率 34%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "viewing_hours_growth",
            "label": "Paramount+ 与 Pluto TV 观看时长",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q2-fy24",
    "company": "Paramount",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.8,
      "notes": [
        "(11%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.7,
          "notes": [
            "(18%) Y/Y",
            "(8%) adj. margin",
            "(9pp) Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.3,
          "notes": [
            "(17%) Y/Y",
            "24% adj. margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.9,
          "notes": [
            "+13% Y/Y",
            "1% adj. margin",
            "+27pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.017,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source has no separate gross-profit layer."
        ]
      },
      "operatingExpenses": {
        "total": 12.1,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.4,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.6,
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 6,
            "notes": [
              "88% of revenue"
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
        "label": "Gross profit bridge",
        "value": 6.8,
        "notes": [
          "Arithmetic bridge; not displayed in Source."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -5.3,
        "notes": [
          "(78%) margin",
          "(75pp) Y/Y"
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
        "id": "subscribers",
        "label": "Subscribers",
        "value": "68000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "68M",
        "basis": "unspecified",
        "notes": [
          "(2.8M decline Q/Q)"
        ],
        "quote": "Paramount+\nSubscribers 68M (2.8M decline Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1201,
            568,
            159
          ]
        }
      },
      {
        "id": "arpu_growth",
        "label": "ARPU",
        "value": "26",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+26%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "ARPU +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1201,
            568,
            159
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
            "同比 (11%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 (18%)",
                "调整后利润率 (8%)",
                "同比 (9 个百分点)"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (17%)",
                "调整后利润率 24%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +13%",
                "调整后利润率 1%",
                "同比 +27 个百分点"
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
          "operatingExpenses": {
            "items": [
              {
                "id": "operating",
                "label": "运营成本",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": []
              },
              {
                "id": "restructuring",
                "label": "重组",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": [
                  "占收入 88%"
                ]
              }
            ]
          },
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源未单独列示毛利润层。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (78%)",
              "同比 (75 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          },
          "gross": {
            "label": "毛利润桥接",
            "notes": [
              "仅用于算术桥接；来源未显示。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "订阅用户",
            "notes": [
              "环比减少 2.8M"
            ]
          },
          {
            "id": "arpu_growth",
            "label": "ARPU",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q4-fy23",
    "company": "Paramount",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.6,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.6,
          "notes": [
            "+31% Y/Y",
            "4% adj. margin"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5.2,
          "notes": [
            "(12%) Y/Y",
            "22% adj. margin"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 1.9,
          "notes": [
            "+34% Y/Y",
            "(26%) adj. margin"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.046
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "operating",
        "label": "Operating",
        "value": 5.1
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2,
            "notes": [
              "26% of revenue"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": [
              "2% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "discontinued",
          "label": "Discontinued",
          "value": 0.5
        }
      ]
    },
    "otherExpenses": {
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
        "value": 2.5,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "5% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "7% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "Paramount+ subscribers",
        "literal": "67.5M",
        "value": "67500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Paramount+ subscribers 67.5M (+20% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            159,
            1284,
            651,
            39
          ]
        }
      },
      {
        "id": "viewing_hours_growth",
        "label": "Paramount+ & Pluto TV viewing hours",
        "literal": "+27%",
        "value": "27",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Paramount+ & Pluto TV viewing hours +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            119,
            1323,
            724,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +31%",
                "调整后利润率 4%"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (12%)",
                "调整后利润率 22%"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +34%",
                "调整后利润率 (26%)"
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
            "id": "operating",
            "label": "运营成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政",
                "notes": [
                  "占收入 26%"
                ]
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": [
                  "占收入 2%"
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
              "id": "discontinued",
              "label": "终止经营"
            }
          ]
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
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "viewing_hours_growth",
            "label": "Paramount+ 与 Pluto TV 观看时长",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q3-fy24",
    "company": "Paramount",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.7,
      "items": [
        {
          "id": "filmed_entertainment",
          "label": [
            "Filmed",
            "Entertainment"
          ],
          "value": 0.6
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.3
        },
        {
          "id": "direct_to_consumer",
          "label": [
            "Direct to",
            "consumer"
          ],
          "value": 1.9
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.017
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "Cost of revenue",
        "notes": [
          "Source has no separate gross-profit stage."
        ]
      },
      "operatingExpenses": {
        "total": 6.394,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 4.342
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.531
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.425
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.096
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.045
      }
    },
    "otherExpenses": {
      "total": 0.291,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.291,
          "notes": [
            "Source numeric typo ($0.3M) corrected to ($291M); SEC Q3 2024 operating income 337M less tax 45M less net profit 1M."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit bridge",
        "value": 6.7
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.337
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.001
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "Subscribers",
        "literal": "72M",
        "value": "72000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Paramount+ Subscribers 672M (+3.5M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1151,
            569,
            158
          ]
        },
        "authoritativeCorrection": {
          "sourceLiteral": "672M",
          "reason": "Operator authorized correction: Paramount Q3 2024 official earnings release states subscribers increased 3.5 million to 72 million. https://ir.paramount.com/static-files/792e82ae-2d69-4979-8333-b79c88df48b3",
          "approval": "user-directed-source-correction"
        },
        "notes": []
      },
      {
        "id": "subscriber_growth",
        "label": "Subscribers",
        "literal": "3.5M",
        "value": "3500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Subscribers 672M (+3.5M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            138,
            1151,
            569,
            158
          ]
        },
        "notes": []
      },
      {
        "id": "arpu_growth",
        "label": "ARPU",
        "literal": "11%",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "ARPU +11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            300,
            1250,
            300,
            45
          ]
        },
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐"
            },
            {
              "id": "tv_media",
              "label": "电视媒体"
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者"
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
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组 / 减值"
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
            "label": "毛利润桥接"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户"
          },
          {
            "id": "subscriber_growth",
            "label": "订阅用户环比增长"
          },
          {
            "id": "arpu_growth",
            "label": "ARPU 同比增长"
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q4-fy24",
    "company": "Paramount",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/paramount-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 1.1
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 5
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "Cost of revenue",
        "notes": [
          "Source does not show a gross-profit layer."
        ]
      },
      "operatingExpenses": {
        "total": 7.9,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 5.7
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.9
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "Included in Source Other."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
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
        "label": "Gross profit bridge",
        "value": 8,
        "notes": [
          "Arithmetic bridge only; not shown in Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "2% margin",
          "(4pp) Y/Y",
          "Source $0.1M corrected to $0.1B: official Q4 2024 operating income $129M. https://www.sec.gov/Archives/edgar/data/813828/000119312525036747/d830953dex99.htm"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.2,
        "notes": [
          "(3%) margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "Paramount+ subscribers",
        "literal": "77.5M",
        "value": "77500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y",
          "+5.6M Q/Q"
        ],
        "quote": "Paramount+ subscribers\n77.5M (+15% Y/Y)\n+5.6M Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            103,
            1164,
            468,
            164
          ]
        }
      }
    ],
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
              "id": "filmed_entertainment",
              "label": "影视娱乐"
            },
            {
              "id": "tv_media",
              "label": "电视媒体"
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者"
            },
            {
              "id": "eliminations",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未展示毛利润层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "包含在原图其他费用中。"
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
            "label": "毛利润桥接",
            "notes": [
              "仅用于算术桥接，原图未单列。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (4 个百分点)",
              "原图 $0.1M 更正为 $0.1B；官方本季营业利润为 1.29 亿美元。"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (4 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "同比 +15%",
              "环比 +560 万"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "paramount-q1-fy25",
    "company": "Paramount",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/paramount-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.2,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "filmed_entertainment",
          "label": "Filmed Entertainment",
          "value": 0.6,
          "notes": [
            "+4% Y/Y",
            "3% adj. margin",
            "+4pp Y/Y"
          ]
        },
        {
          "id": "tv_media",
          "label": "TV Media",
          "value": 4.5,
          "notes": [
            "(13%) Y/Y",
            "20% adj. margin",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "direct_to_consumer",
          "label": "Direct to consumer",
          "value": 2,
          "notes": [
            "+9% Y/Y",
            "(5%) adj. margin",
            "+10pp Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -0.017
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0
      },
      "operatingExpenses": {
        "total": 6.7,
        "items": [
          {
            "id": "operating",
            "label": "Operating",
            "value": 5
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.5
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit bridge",
        "value": 7.2
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "+13pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "subscribers",
        "label": "Subscribers",
        "literal": "79M",
        "value": "79000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.5M Q/Q"
        ],
        "quote": "Paramount+\nSubscribers 79M (+1.5M Q/Q)",
        "anchor": {
          "type": "image-box",
          "box": [
            53,
            1160,
            568,
            159
          ]
        }
      },
      {
        "id": "arpu_growth",
        "label": "ARPU",
        "literal": "+2%",
        "value": "2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Paramount+\nARPU +2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            53,
            1160,
            568,
            159
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
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "filmed_entertainment",
              "label": "影视娱乐",
              "notes": [
                "同比 +4%",
                "调整后利润率 3%",
                "同比 +4 个百分点"
              ]
            },
            {
              "id": "tv_media",
              "label": "电视媒体",
              "notes": [
                "同比 (13%)",
                "调整后利润率 20%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "direct_to_consumer",
              "label": "直接面向消费者",
              "notes": [
                "同比 +9%",
                "调整后利润率 (5%)",
                "同比 +10 个百分点"
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
                "id": "operating",
                "label": "运营成本"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政"
              },
              {
                "id": "restructuring",
                "label": "重组"
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
              "id": "interest",
              "label": "利息"
            },
            {
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润桥接"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +13 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +9 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "subscribers",
            "label": "Paramount+ 订阅用户",
            "notes": [
              "环比 +1.5M"
            ]
          },
          {
            "id": "arpu_growth",
            "label": "Paramount+ ARPU 增幅",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
