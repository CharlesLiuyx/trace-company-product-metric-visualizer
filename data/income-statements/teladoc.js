/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "teladoc-q4-fy25",
    "company": "Teladoc Health",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q4-fy25.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 642,
      "notes": [
        "+0% Y/Y",
        "Reported revenue was $642.3M; the source chart rounds to $642M."
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 409,
          "notes": [
            "+5% Y/Y",
            "16% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 233,
          "notes": [
            "(7%) Y/Y",
            "8% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 197
      },
      "operatingExpenses": {
        "total": 481,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 197,
            "notes": [
              "31% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 108,
            "notes": [
              "17% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 95,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 72,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 9,
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
        "value": 445,
        "notes": [
          "69% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -36,
        "notes": [
          "(6%) margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -36,
        "notes": [
          "Source chart stops at operating loss; no net-income bridge is rendered."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +0%",
            "披露收入为 6.423 亿美元；源图四舍五入为 6.42 亿美元。"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +5%",
                "调整后利润率 16%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (7%)",
                "调整后利润率 8%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 31%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 17%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
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
              "利润率 69%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "teladoc-q1-fy26",
    "company": "Teladoc Health",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q1-fy26.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 614,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 395,
          "notes": [
            "+2% Y/Y",
            "14% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 218,
          "notes": [
            "(9%) Y/Y",
            "1% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 198
      },
      "operatingExpenses": {
        "total": 478,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 203,
            "notes": [
              "33% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 102,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 92,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 68,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 13
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
        "value": 416,
        "notes": [
          "68% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -62,
        "notes": [
          "(10%) margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -62,
        "notes": [
          "Source chart stops at operating loss; no net-income bridge is rendered."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +2%",
                "调整后利润率 14%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (9%)",
                "调整后利润率 1%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 33%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他"
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
              "利润率 68%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "teladoc-q2-fy26",
    "company": "Teladoc Health",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q2-fy26.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 607,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 394,
          "notes": [
            "+1% Y/Y",
            "17% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 213,
          "notes": [
            "(12%) Y/Y",
            "0% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 191
      },
      "operatingExpenses": {
        "total": 453,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 193,
            "notes": [
              "32% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 104,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 91,
            "notes": [
              "15% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 63,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 3,
            "notes": [
              "0% of revenue"
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
        "value": 416,
        "notes": [
          "69% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -37,
        "notes": [
          "(6%) margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -37,
        "notes": [
          "Source chart stops at operating loss; no net-income bridge is rendered."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +1%",
                "调整后利润率 17%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (12%)",
                "调整后利润率 0%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 32%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 15%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "占收入 0%"
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
              "利润率 69%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (6%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "teladoc-q3-fy22",
    "company": "Teladoc Health",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended September 30, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q3-fy22.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 611,
      "notes": [
        "+17% Y/Y",
        "Source integer-million rounding explains the differences in the revenue item sum and gross-profit bridge."
      ],
      "items": [
        {
          "id": "access_fee",
          "label": "Access Fee",
          "value": 540,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "visit_fee",
          "label": "Visit Fee",
          "value": 66,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 6,
          "notes": [
            "(43%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 186
      },
      "operatingExpenses": {
        "total": 498,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 233
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 113
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 88
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 62
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 2
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
        "value": 426,
        "notes": [
          "70% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -72,
        "notes": [
          "(12%) margin",
          "Unchanged"
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
        "id": "visits",
        "label": "Visits",
        "value": "4600000",
        "unit": "count",
        "literal": "4.6M",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Visits\n4.6M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            1183,
            209,
            150
          ]
        }
      },
      {
        "id": "utilization",
        "label": "Utilization",
        "value": "22.3",
        "unit": "%",
        "literal": "22.3%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+1.3pp Y/Y"
        ],
        "quote": "Utilization\n22.3%\n+1.3pp Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1183,
            209,
            150
          ]
        }
      },
      {
        "id": "paid_membership",
        "label": "US Paid membership",
        "value": "58000000",
        "unit": "count",
        "literal": "58M",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "US Paid membership\n58M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            464,
            1183,
            379,
            150
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
            "同比 +17%",
            "源图金额采用整数舍入，收入分项和毛利润桥存在舍入差额。"
          ],
          "items": [
            {
              "id": "access_fee",
              "label": "接入费",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "visit_fee",
              "label": "就诊费",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (43%)"
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
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政费用"
              },
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "integration_costs",
                "label": "整合成本"
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
              "利润率 70%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)",
              "同比持平"
            ]
          },
          "net": {
            "label": "未披露净损益",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "utilization",
            "label": "使用率",
            "notes": [
              "同比 +1.3 个百分点"
            ]
          },
          {
            "id": "paid_membership",
            "label": "美国付费会员",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "teladoc-q4-fy22",
    "company": "Teladoc Health",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q4-fy22.png",
    "roundingTolerance": 100,
    "revenue": {
      "total": 638,
      "notes": [
        "+15% Y/Y",
        "Source uses mixed M/B display precision; revenue components differ by $1M, operating expense components by $8M, and gross profit minus operating expenses differs from displayed loss by $51M; all reconcile within combined rounding intervals."
      ],
      "items": [
        {
          "id": "access_fee",
          "label": "Access Fee",
          "value": 553,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 84,
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
        "value": 189,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4300,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 203,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 120,
            "notes": []
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 83,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 76,
            "notes": []
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 10,
            "notes": []
          },
          {
            "id": "goodwill_impairment",
            "label": "Goodwill impairment",
            "value": 3800,
            "notes": [
              "Non-recurring",
              "(Livongo)"
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
        "value": 449,
        "notes": [
          "70% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3800,
        "notes": []
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
        "id": "visits",
        "label": "Visits",
        "value": "4800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4.8M",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Visits\n4.8M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            1184,
            211,
            149
          ]
        }
      },
      {
        "id": "betterhelp_users",
        "label": "BetterHelp Paying Users",
        "value": "419000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "419K",
        "basis": "unspecified",
        "notes": [
          "+37% Y/Y"
        ],
        "quote": "BetterHelp Paying Users\n419K\n+37% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            246,
            1184,
            441,
            149
          ]
        }
      },
      {
        "id": "paid_membership",
        "label": "US Paid membership",
        "value": "58400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "58.4M",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "US Paid membership\n58.4M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            694,
            1184,
            381,
            149
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
            "同比 +15%"
          ],
          "items": [
            {
              "id": "access_fee",
              "label": "接入费",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": []
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": []
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": []
              },
              {
                "id": "integration_costs",
                "label": "整合费用",
                "notes": []
              },
              {
                "id": "goodwill_impairment",
                "label": "商誉减值",
                "notes": [
                  "非经常性",
                  "（Livongo 业务）"
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
              "利润率 70%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损"
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
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "betterhelp_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 +37%"
            ]
          },
          {
            "id": "paid_membership",
            "label": "美国付费会员",
            "notes": [
              "同比 +9%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "teladoc-q1-fy23",
    "company": "Teladoc Health",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended Mar. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q1-fy23.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 629,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "access_fee",
          "label": "Access Fee",
          "value": 551,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 78,
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
        "value": 190
      },
      "operatingExpenses": {
        "total": 516,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 231
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 87
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 70
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 14
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
        "value": 439,
        "notes": [
          "70% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -77,
        "notes": [
          "(12%) margin"
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
        "id": "visits",
        "label": "Visits",
        "value": "4900000",
        "literal": "4.9M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Visits\n4.9M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            28,
            1183,
            211,
            150
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "value": "84900000",
        "literal": "84.9M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "US Integrated Care Members\n84.9M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1183,
            500,
            150
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "value": "467000",
        "literal": "467K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+22% Y/Y"
        ],
        "quote": "BetterHelp Paying users\n467K\n+22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "access_fee",
              "label": "接入费",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政费用"
              },
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "integration_costs",
                "label": "整合成本"
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
              "利润率 70%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (12%)"
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
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 +22%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "teladoc-q2-fy23",
    "company": "Teladoc Health",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q2-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 652,
      "notes": [
        "+10% Y/Y",
        "Source integer-million rounding: revenue less cost is $461M versus printed gross profit $462M; operating-expense items sum to $533M versus printed $534M."
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 360,
          "notes": [
            "+5% Y/Y",
            "11% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 292,
          "notes": [
            "+18% Y/Y",
            "12% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 191,
        "notes": []
      },
      "operatingExpenses": {
        "total": 534,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 232,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 126,
            "notes": []
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 87,
            "notes": []
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 76,
            "notes": []
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 12,
            "notes": []
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
        "value": 462,
        "notes": [
          "71% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -72,
        "notes": [
          "(11%) margin",
          "+14pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -72,
        "notes": [
          "Source chart stops at operating loss; no net-income bridge is rendered."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "visits",
        "label": "Visits",
        "literal": "4.7M",
        "value": "4700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Flat Y/Y"
        ],
        "quote": "Visits\n4.7M\nFlat Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            28,
            1183,
            211,
            150
          ]
        }
      },
      {
        "id": "us_integrated_care_members",
        "label": "US Integrated Care Members",
        "literal": "85.9M",
        "value": "85900000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "US Integrated Care Members\n85.9M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1183,
            500,
            150
          ]
        }
      },
      {
        "id": "betterhelp_paying_users",
        "label": "BetterHelp Paying users",
        "literal": "476K",
        "value": "476000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "BetterHelp Paying users\n476K\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            150
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
            "同比 +10%"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +5%",
                "调整后利润率 11%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 +18%",
                "调整后利润率 12%"
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
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政费用"
              },
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "integration_costs",
                "label": "整合成本"
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
              "利润率 71%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (11%)",
              "同比 +14 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比持平"
            ]
          },
          {
            "id": "us_integrated_care_members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "betterhelp_paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 +17%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "teladoc-q3-fy23",
    "company": "Teladoc Health",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q3-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 660,
      "notes": [
        "+8% Y/Y",
        "Source rounds each amount to $1M: $474M gross profit plus $64M operating loss differs from $539M operating expenses by $1M; retain printed values within the 1.5M rounding tolerance."
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 374,
          "notes": [
            "+9% Y/Y",
            "17% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 286,
          "notes": [
            "+8% Y/Y",
            "9% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 186
      },
      "operatingExpenses": {
        "total": 539,
        "items": [
          {
            "id": "sales_marketing",
            "label": [
              "Sales &",
              "marketing"
            ],
            "value": 239
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 116
          },
          {
            "id": "technology_development",
            "label": [
              "Technology &",
              "development"
            ],
            "value": 84
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "amortization"
            ],
            "value": 94
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 6
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
        "value": 474,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -64,
        "notes": [
          "(10%) margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -64,
        "notes": [
          "Source chart stops at operating loss; no net-income bridge is rendered."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +9%",
                "调整后利润率 17%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 +8%",
                "调整后利润率 9%"
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
                "id": "sales_marketing",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "一般及行政费用"
              },
              {
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "integration_costs",
                "label": "整合成本"
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
              "利润率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (10%)",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图停留在营业亏损，未展示净利润桥。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 (4%)"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "visits",
        "label": "Visits",
        "value": "4400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4.4M",
        "basis": "unspecified",
        "notes": [
          "(4%) Y/Y"
        ],
        "quote": "Visits\n4.4M\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            28,
            1183,
            211,
            150
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "value": "90200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "90.2M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "US Integrated Care Members\n90.2M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1183,
            500,
            150
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "value": "459000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "459K",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "BetterHelp Paying users\n459K\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "teladoc-q2-fy24",
    "company": "Teladoc Health",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q2-fy24.png",
    "roundingTolerance": 2.5,
    "revenue": {
      "total": 642,
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 377,
          "notes": [
            "+5% Y/Y",
            "17% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 265,
          "notes": [
            "(9%) Y/Y",
            "10% adjusted margin"
          ]
        }
      ],
      "notes": [
        "(2%) Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 188
      },
      "operatingExpenses": {
        "total": 1295,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 221,
            "notes": [
              "34% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 110,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 77,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 98,
            "notes": [
              "17% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "goodwill_impairment",
            "label": "Goodwill impairment",
            "value": 790,
            "notes": [
              "123% of revenue",
              "+123pp Y/Y"
            ]
          }
        ],
        "notes": [
          "Source integer-million components sum to $1,296M versus the printed $1,295M total; $1M difference is within rounding intervals."
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
        "value": 454,
        "notes": [
          "71% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -841,
        "notes": [
          "(131%) margin",
          "(120pp) Y/Y"
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
        "id": "visits",
        "label": "Visits",
        "value": "4200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "4.2M",
        "quote": "Visits\n4.2M\n(11%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(11%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            28,
            1183,
            211,
            150
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "value": "92400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "92.4M",
        "quote": "US Integrated Care Members\n92.4M\n+8% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1183,
            500,
            150
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "value": "407000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "407K",
        "quote": "BetterHelp Paying users\n407K\n(14%) Y/Y",
        "basis": "unspecified",
        "notes": [
          "(14%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            150
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
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +5%",
                "调整后利润率 17%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (9%)",
                "调整后利润率 10%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 34%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 17%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "goodwill_impairment",
                "label": "商誉减值",
                "notes": [
                  "占收入 123%",
                  "同比 +123 个百分点"
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
              "利润率 71%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (131%)",
              "同比 (120 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "来源图截止营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 (11%)"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 (14%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "teladoc-q3-fy24",
    "company": "Teladoc Health",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q3-fy24.png",
    "roundingTolerance": 0.5,
    "revenue": {
      "total": 641,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 384,
          "notes": [
            "+2% Y/Y",
            "18% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 257,
          "notes": [
            "(10%) Y/Y",
            "6% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 180
      },
      "operatingExpenses": {
        "total": 505,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 225,
            "notes": [
              "35% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114,
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 72,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "goodwill_impairment",
            "label": "Goodwill impairment",
            "value": 4,
            "notes": [
              "1% of revenue"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 90,
            "notes": [
              "14% of revenue",
              "(0pp) Y/Y"
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
        "value": 461,
        "notes": [
          "72% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -44,
        "notes": [
          "(7%) margin",
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
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +2%",
                "调整后利润率 18%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (10%)",
                "调整后利润率 6%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 35%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "goodwill_impairment",
                "label": "商誉减值",
                "notes": [
                  "占收入 1%"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 14%",
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
              "利润率 72%",
              "同比 +0 个百分点"
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
            "label": "未披露净利润",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 (7%)"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +4%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 (13%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "visits",
        "label": "Visits",
        "value": "4100000",
        "literal": "4.1M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(7%) Y/Y"
        ],
        "quote": "Visits\n4.1M\n(7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            1184,
            210,
            148
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "value": "93900000",
        "literal": "93.9M",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "US Integrated Care Members\n93.9M\n+4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1184,
            501,
            148
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "value": "398000",
        "literal": "398K",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(13%) Y/Y"
        ],
        "quote": "BetterHelp Paying users\n398K\n(13%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1184,
            430,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "teladoc-q1-fy24",
    "company": "Teladoc Health",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q1-fy24.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 646,
      "notes": [
        "+3% Y/Y",
        "Source integer rounding: gross profit $451M plus operating loss $87M is $1M below operating expenses $539M."
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 377,
          "notes": [
            "+8% Y/Y",
            "13% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 269,
          "notes": [
            "(4%) Y/Y",
            "6% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 195
      },
      "operatingExpenses": {
        "total": 539,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 238,
            "notes": [
              "37% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 112,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 98,
            "notes": [
              "15% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 81,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 10,
            "notes": [
              "2% of revenue",
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
        "value": 451,
        "notes": [
          "70% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -87,
        "notes": [
          "(13%) margin",
          "(1pp) Y/Y"
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
            "同比 +3%",
            "源图整数金额舍入导致营业费用桥存在 100 万美元差额。"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +8%",
                "调整后利润率 13%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 (4%)",
                "调整后利润率 6%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 37%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 15%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "integration_costs",
                "label": "整合成本",
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (13%)",
              "同比 (1 个百分点)"
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
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 (6%)"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 (11%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "visits",
        "label": "Visits",
        "literal": "4.6M",
        "value": "4600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "Visits\n4.6M\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            1183,
            210,
            148
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "literal": "91.8M",
        "value": "91800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "US Integrated Care Members\n91.8M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            249,
            1183,
            500,
            148
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "literal": "415K",
        "value": "415000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(11%) Y/Y"
        ],
        "quote": "BetterHelp Paying users\n415K\n(11%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "teladoc-q4-fy23",
    "company": "Teladoc Health",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/teladoc-q4-fy23.png",
    "roundingTolerance": 1.5,
    "revenue": {
      "total": 661,
      "notes": [
        "+4% Y/Y",
        "Independent Source rounding: revenue segments sum to $660M versus $661M; gross profit plus cost of revenue sums to $660M; expense items sum to $503M versus $502M."
      ],
      "items": [
        {
          "id": "integrated_care",
          "label": "Teladoc Health Integrated Care",
          "value": 384,
          "notes": [
            "+8% Y/Y",
            "15% adjusted margin"
          ]
        },
        {
          "id": "betterhelp",
          "label": "BetterHelp",
          "value": 276,
          "notes": [
            "+0% Y/Y",
            "21% adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 193
      },
      "operatingExpenses": {
        "total": 502,
        "items": [
          {
            "id": "sales_marketing",
            "label": "Sales & marketing",
            "value": 201,
            "notes": [
              "30% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 109,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 90,
            "notes": [
              "14% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "integration_costs",
            "label": "Integration costs",
            "value": 5,
            "notes": [
              "1% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 98,
            "notes": [
              "15% of revenue",
              "+3pp Y/Y"
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
        "value": 467,
        "notes": [
          "71% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -35,
        "notes": [
          "(5%) margin"
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
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "integrated_care",
              "label": "Teladoc Health 整合护理",
              "notes": [
                "同比 +8%",
                "调整后利润率 15%"
              ]
            },
            {
              "id": "betterhelp",
              "label": "BetterHelp",
              "notes": [
                "同比 +0%",
                "调整后利润率 21%"
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
                "id": "sales_marketing",
                "label": "销售与市场",
                "notes": [
                  "占收入 30%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政费用",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 14%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "integration_costs",
                "label": "整合成本",
                "notes": [
                  "占收入 1%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销",
                "notes": [
                  "占收入 15%",
                  "同比 +3 个百分点"
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
              "利润率 71%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)"
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
            "id": "visits",
            "label": "访问量",
            "notes": [
              "同比 (8%)"
            ]
          },
          {
            "id": "members",
            "label": "美国整合护理会员",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "paying_users",
            "label": "BetterHelp 付费用户",
            "notes": [
              "同比 (6%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "visits",
        "label": "Visits",
        "literal": "4.4M",
        "value": "4400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(8%) Y/Y"
        ],
        "quote": "Visits\n4.4M\n(8%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            28,
            1183,
            211,
            150
          ]
        }
      },
      {
        "id": "members",
        "label": "US Integrated Care Members",
        "literal": "89.6M",
        "value": "89600000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "US Integrated Care Members\n89.6M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            1183,
            500,
            150
          ]
        }
      },
      {
        "id": "paying_users",
        "label": "BetterHelp Paying users",
        "literal": "425K",
        "value": "425000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(6%) Y/Y"
        ],
        "quote": "BetterHelp Paying users\n425K\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            763,
            1183,
            430,
            150
          ]
        }
      }
    ]
  }
]);
})(window);
