/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "visa-q1-fy26",
    "company": "Visa",
    "period": "Q1 FY26",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q1-fy26.png",
    "roundingTolerance": 0.01,
    "notes": [
      "SEC-reported revenue is $15.170B before $4.269B of client incentives, leaving $10.901B of net revenue.",
      "The seven operating-expense components total $4.164B exactly. Other is the $0.011B net non-operating expense between operating profit and net income; it is not an operating-expense residual."
    ],
    "revenue": {
      "total": 15.17,
      "notes": [],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.76,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 5.544,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.652,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1.214,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 4.269
      },
      "operatingExpenses": {
        "total": 4.164,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.764
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.708
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.41
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.515
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.326
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.208
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.233
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.873
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.011,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.011
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 10.901,
        "notes": [
          "+15% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.737,
        "notes": [
          "62% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.853,
        "notes": [
          "54% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +33%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "network",
                "label": "网络"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +15%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 62%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 54%",
              "同比 0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q2-fy26",
    "company": "Visa",
    "period": "Q2 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q2-fy26.png",
    "roundingTolerance": 0.01,
    "notes": [
      "SEC-reported revenue is $15.475B before $4.245B of client incentives, leaving $11.230B of net revenue.",
      "The seven operating-expense components total $3.996B exactly. Other is the $0.060B net non-operating expense between operating profit and net income; it is not an operating-expense residual."
    ],
    "revenue": {
      "total": 15.475,
      "notes": [],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.981,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 5.543,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.631,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1.32,
          "notes": [
            "+41% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 4.245
      },
      "operatingExpenses": {
        "total": 3.996,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.841
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.545
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.45
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.333
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.329
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.26
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.238
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.153
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.06,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.06
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 11.23,
        "notes": [
          "+17% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.234,
        "notes": [
          "64% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.021,
        "notes": [
          "54% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +41%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +17%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 64%",
              "同比 +8 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 54%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q3-fy26",
    "company": "Visa",
    "period": "Q3 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q3-fy26.png",
    "roundingTolerance": 0.001,
    "notes": [
      "Visa's Q3 FY26 Form 10-Q reports $16.313B of gross revenue components before $4.680B of client incentives, leaving $11.633B of net revenue.",
      "The seven operating-expense components total $4.756B exactly. The Source rounds net non-operating expense to ($0.0B); Visa's Form 10-Q reports the exact amount as $44M, which remains a visible non-zero Other node."
    ],
    "revenue": {
      "total": 16.313,
      "notes": [],
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.922,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 6.042,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.853,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1.496,
          "notes": [
            "+45% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 4.68
      },
      "operatingExpenses": {
        "total": 4.756,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 2.458
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.649
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.503
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.367
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.28
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.253
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.246
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.205
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.044,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.044
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 11.633,
        "notes": [
          "+14% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.877,
        "notes": [
          "59% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.628,
        "notes": [
          "48% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +45%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +14%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 59%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 48%",
              "同比 -3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q2-fy25",
    "company": "Visa",
    "period": "Q2 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q2-fy25.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded operating profit $5.4B less tax $0.9B differs from net profit $4.6B by $0.1B. Source values are retained."
    ],
    "revenue": {
      "total": 13.3,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.4,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.7,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.3,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.2,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.7,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 1,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9,
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
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 9.6,
        "notes": [
          "+9% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "57% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.6,
        "notes": [
          "48% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+8%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1189,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "13",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+13%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1189,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1189,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +24%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +9%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 57%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 48%",
              "同比 -5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "visa-q3-fy25",
    "company": "Visa",
    "period": "Q3 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q3-fy25.png",
    "roundingTolerance": 0.25,
    "notes": [
      "Source-rounded fee inputs sum to $14.1B; the unlabeled gross hub is $14.2B from net revenue $10.2B plus client incentives $4.0B.",
      "Source-rounded net revenue $10.2B less operating expenses $3.8B differs from operating profit $6.2B by $0.2B; expense items total $3.9B versus displayed $3.8B. Original displayed values are retained."
    ],
    "revenue": {
      "total": 14.2,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.3,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 5.2,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.6,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1,
          "notes": [
            "+32% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.8,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.7,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_inc",
          "label": "Other",
          "value": 0.2,
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
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 10.2,
        "notes": [
          "+14% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.2,
        "notes": [
          "61% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.3,
        "notes": [
          "52% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+8%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1189,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "12",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+12%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1189,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1189,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +32%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "litigation",
                "label": "诉讼",
                "notes": []
              },
              {
                "id": "general_admin",
                "label": "综合及行政",
                "notes": []
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧摊销",
                "notes": []
              },
              {
                "id": "network",
                "label": "网络",
                "notes": []
              },
              {
                "id": "professional_fees",
                "label": "专业服务费",
                "notes": []
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
              "id": "other_inc",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +14%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 61%",
              "同比 -6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 52%",
              "同比 -3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "visa-q1-fy25",
    "company": "Visa",
    "period": "Q1 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q1-fy25.png",
    "roundingTolerance": 0.21,
    "notes": [
      "Source-rounded revenue components total $13.2B versus net revenue $9.5B plus client incentives $3.8B; net revenue less operating expenses differs from operating profit by $0.2B; operating-expense items sum to $3.244B versus $3.1B. Source values retained with rounding tolerance."
    ],
    "revenue": {
      "total": 13.2,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.7,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.4,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "+32% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.1,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.8,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.044,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.034,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.034
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 9.5,
        "notes": [
          "+10% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.2,
        "notes": [
          "66% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.1,
        "notes": [
          "54% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1189,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "16",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+16%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1189,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "11",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+11%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1189,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +32%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +10%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 66%",
              "同比 -3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 54%",
              "同比 -3 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "otherExpenses": {
          "items": [
            {
              "id": "other_ded",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "visa-q4-fy23",
    "company": "Visa",
    "period": "Q4 FY23",
    "periodNote": "Ending Sept. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q4-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source amounts are rounded to $0.1B. Retained displayed values have rounding differences of $0.1B in fee inputs, operating expenses and operating-profit bridge. The unlabeled gross fee total is inferred as $12.0B from $8.6B net revenue plus $3.4B incentives."
    ],
    "revenue": {
      "total": 8.6,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 8.6,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "network_revenue",
          "label": "",
          "value": 12,
          "notes": []
        },
        "grossItems": [
          {
            "id": "service",
            "label": "Service",
            "value": 3.9,
            "notes": [
              "+12% Y/Y"
            ]
          },
          {
            "id": "data_processing",
            "label": "Data processing",
            "value": 4.3,
            "notes": [
              "+13% Y/Y"
            ]
          },
          {
            "id": "international",
            "label": "International transaction",
            "value": 3.2,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.7,
            "notes": [
              "+35% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "client_incentives",
          "label": "Client incentives",
          "value": 3.4,
          "notes": []
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "id": "network",
        "label": "Network & processing",
        "value": 0.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross Profit",
        "value": 8.4,
        "notes": [
          "98% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.6,
        "notes": [
          "64% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "54% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "revenue",
              "label": "净收入"
            }
          ],
          "paymentNetwork": {
            "gross": {
              "label": "总收入"
            },
            "grossItems": [
              {
                "id": "service",
                "label": "服务",
                "notes": [
                  "同比 +12%"
                ]
              },
              {
                "id": "data_processing",
                "label": "数据处理",
                "notes": [
                  "同比 +13%"
                ]
              },
              {
                "id": "international",
                "label": "国际交易",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +35%"
                ]
              }
            ],
            "rebates": {
              "label": "客户激励"
            }
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "网络与处理"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
              "利润率 98%",
              "同比 0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 64%",
              "同比 -1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 54%",
              "同比 +4 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "visa-q4-fy25",
    "company": "Visa",
    "period": "Q4 FY25",
    "periodNote": "Ending Sept. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q4-fy25.png",
    "roundingTolerance": 0.25,
    "notes": [
      "Source-rounded revenue components total $15.0B versus net revenue plus client incentives $14.9B; operating expense items total $4.5B versus $4.6B shown. Source net profit $5.3B differs from operating profit $6.1B plus Other $0.1B less tax $1.1B by $0.2B. Original Source values are retained."
    ],
    "revenue": {
      "total": 15,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.6,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 5.4,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.8,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1.2,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 4.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.7,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.9,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_inc",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 10.7,
        "notes": [
          "+12% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.1,
        "notes": [
          "57% margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.3,
        "notes": [
          "47% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "9",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+9%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1189,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "12",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+12%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1189,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1189,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +21%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +12%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 57%",
              "同比 -9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 47%",
              "同比 -8 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "other_inc",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "visa-q1-fy23",
    "company": "Visa",
    "period": "Q1 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q1-fy23.png",
    "roundingTolerance": 0.25,
    "notes": [
      "Source-rounded values are retained: net revenue less network cost differs from gross profit by $0.1B; operating-expense components sum to $2.5B versus the displayed $2.7B total."
    ],
    "revenue": {
      "total": 7.9,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 7.9
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "gross_revenue",
          "label": "Gross revenue",
          "value": 10.7
        },
        "grossItems": [
          {
            "id": "service",
            "label": "Service",
            "value": 3.5,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "data_processing",
            "label": "Data processing",
            "value": 3.8,
            "notes": [
              "+6% Y/Y"
            ]
          },
          {
            "id": "international",
            "label": "International transaction",
            "value": 2.8,
            "notes": [
              "+29% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.6,
            "notes": [
              "+31% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "client_incentives",
          "label": "Client incentives",
          "value": 2.8
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "id": "network",
        "label": "Network & processing",
        "value": 0.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.3,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation provision",
            "value": 0.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross Profit",
        "value": 7.8,
        "notes": [
          "98% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.1,
        "notes": [
          "64% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.2,
        "notes": [
          "53% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "revenue",
              "label": "净收入"
            }
          ],
          "paymentNetwork": {
            "grossItems": [
              {
                "id": "service",
                "label": "服务",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "data_processing",
                "label": "数据处理",
                "notes": [
                  "同比 +6%"
                ]
              },
              {
                "id": "international",
                "label": "国际交易",
                "notes": [
                  "同比 +29%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +31%"
                ]
              }
            ]
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "网络与处理"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "litigation",
                "label": "诉讼拨备"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 98%",
              "同比持平"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 64%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 53%",
              "同比 -3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q3-fy24",
    "company": "Visa",
    "period": "Q3 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q3-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded revenue components total $12.5B; net revenue plus client incentives total $12.4B. Operating-expense components total $3.113B versus the displayed $3.0B. Original Source amounts are retained."
    ],
    "revenue": {
      "total": 12.5,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.5,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 0.8,
          "notes": [
            "+31% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.6,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.013,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_inc",
          "label": "Other",
          "value": 0.1,
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
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 8.9,
        "notes": [
          "+10% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.9,
        "notes": [
          "67% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.9,
        "notes": [
          "55% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+7%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1216,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "14",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+14%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1216,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1216,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +31%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "litigation",
                "label": "诉讼"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +10%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 67%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 55%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "other_inc",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "visa-q2-fy23",
    "company": "Visa",
    "period": "Q2 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q2-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded expense items sum to $2.4B versus the $2.5B total. Source-rounded operating profit less tax and Other differs from net profit by $0.1B."
    ],
    "revenue": {
      "total": 8,
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 8,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "gross_revenue",
          "label": "Gross revenue",
          "value": 10.9
        },
        "grossItems": [
          {
            "id": "service",
            "label": "Service",
            "value": 3.8,
            "notes": [
              "+7% Y/Y"
            ]
          },
          {
            "id": "data_processing",
            "label": "Data processing",
            "value": 3.8,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "international",
            "label": "International transaction",
            "value": 2.7,
            "notes": [
              "+24% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.6,
            "notes": [
              "+16% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "client_incentives",
          "label": "Client incentives",
          "value": 2.9
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "id": "network",
        "label": "Network & processing",
        "value": 0.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_ded",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross Profit",
        "value": 7.8,
        "notes": [
          "98% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.3,
        "notes": [
          "67% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.3,
        "notes": [
          "53% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "revenue",
              "label": "净收入",
              "notes": [
                "同比 +11%"
              ]
            }
          ],
          "paymentNetwork": {
            "grossItems": [
              {
                "id": "service",
                "label": "服务",
                "notes": [
                  "同比 +7%"
                ]
              },
              {
                "id": "data_processing",
                "label": "数据处理",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "international",
                "label": "国际交易",
                "notes": [
                  "同比 +24%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +16%"
                ]
              }
            ]
          }
        },
        "costs": {
          "costOfRevenue": {
            "label": "网络与处理"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
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
              "id": "other_ded",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 98%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 67%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 53%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q4-fy24",
    "company": "Visa",
    "period": "Q4 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q4-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source amounts are rounded independently to $0.1B, except Other income reported as $23M."
    ],
    "revenue": {
      "total": 13.3,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3.5,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 1,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.3,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.6,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.023,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.023,
          "valueText": "$23M"
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 9.6,
        "notes": [
          "+12% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.3,
        "notes": [
          "66% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.3,
        "notes": [
          "55% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "payment_volume",
        "label": "Payment Volume",
        "value": "8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+8%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Payment Volume\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            77,
            1189,
            204,
            148
          ]
        }
      },
      {
        "id": "cross_border_volume",
        "label": "Cross-Border Volume",
        "value": "13",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+13%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Cross-Border Volume\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            290,
            1189,
            292,
            148
          ]
        }
      },
      {
        "id": "processed_transactions",
        "label": "Processed Transactions",
        "value": "10",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+10%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Processed Transactions\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            590,
            1189,
            292,
            148
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +30%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "净收入",
            "notes": [
              "同比 +12%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 66%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 55%",
              "同比 +1 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "payment_volume",
            "label": "支付交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "cross_border_volume",
            "label": "跨境交易额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "processed_transactions",
            "label": "处理交易笔数",
            "notes": [
              "同比"
            ]
          }
        ],
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他"
            }
          ]
        }
      }
    }
  },
  {
    "key": "visa-q2-fy24",
    "company": "Visa",
    "period": "Q2 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q2-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Gross revenue is the sum of the four Source-rounded inputs; the Source leaves its hub unlabeled."
    ],
    "revenue": {
      "total": 12.1,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 4,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.3,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 0.8,
          "notes": [
            "+37% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.3,
        "notes": []
      },
      "operatingExpenses": {
        "total": 3.4,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.6,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.4,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2,
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
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 8.8,
        "notes": [
          "+10% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "61% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "53% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +37%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
            "label": "净收入",
            "notes": [
              "同比 +10%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 61%",
              "同比 -6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 53%",
              "同比 -1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q1-fy24",
    "company": "Visa",
    "period": "Q1 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q1-fy24.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-displayed rounded financial amounts retained; differences in summed totals reflect independent rounding.",
      "Litigation ($0.0B) recovered as $9M from Visa official Q1 FY2024 earnings release and rendered as ($9M).",
      "https://www.sec.gov/Archives/edgar/data/1403161/000140316124000013/q12024earningsrelease.htm"
    ],
    "revenue": {
      "total": 12,
      "items": [
        {
          "id": "service",
          "label": "Service",
          "value": 3.9,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "data_processing",
          "label": "Data processing",
          "value": 4.4,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International transaction",
          "value": 3,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "other_rev",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "+18% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "client_incentives",
        "label": "Client incentives",
        "value": 3.3
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.5
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2
          },
          {
            "id": "network",
            "label": "Network",
            "value": 0.2
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.1
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.009
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "net_revenue",
        "label": "Net revenue",
        "value": 8.6,
        "notes": [
          "+9% Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6,
        "notes": [
          "69% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.9,
        "notes": [
          "57% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "items": [
            {
              "id": "service",
              "label": "服务",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "data_processing",
              "label": "数据处理",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "international",
              "label": "国际交易",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "other_rev",
              "label": "其他",
              "notes": [
                "同比 +18%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "客户激励"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员"
              },
              {
                "id": "general_admin",
                "label": "综合及行政"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "da",
                "label": "折旧摊销"
              },
              {
                "id": "network",
                "label": "网络"
              },
              {
                "id": "professional_fees",
                "label": "专业服务费"
              },
              {
                "id": "litigation",
                "label": "诉讼"
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
            "label": "净收入",
            "notes": [
              "同比 +9%"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 69%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 57%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q3-fy23",
    "company": "Visa",
    "period": "Q3 FY23",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/visa-q3-fy23.png",
    "roundingTolerance": 0.15,
    "notes": [
      "Source-rounded gross fee components sum to $11.3B. Net revenue $8.1B less network and processing $0.2B gives gross profit $7.9B.",
      "Operating profit $5.0B plus other income $0.2B less tax $1.0B equals net profit $4.2B."
    ],
    "revenue": {
      "total": 8.1,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 8.1,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ],
      "paymentNetwork": {
        "gross": {
          "id": "gross_revenue",
          "label": "Gross revenue",
          "value": 11.3,
          "notes": []
        },
        "grossItems": [
          {
            "id": "service",
            "label": "Service",
            "value": 3.7,
            "notes": [
              "+15% Y/Y"
            ]
          },
          {
            "id": "data_processing",
            "label": "Data processing",
            "value": 4.1,
            "notes": [
              "+15% Y/Y"
            ]
          },
          {
            "id": "international",
            "label": "International transaction",
            "value": 2.9,
            "notes": [
              "+14% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.6,
            "notes": [
              "+15% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "client_incentives",
          "label": "Client incentives",
          "value": 3.2,
          "notes": []
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "id": "network",
        "label": "Network & processing",
        "value": 0.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.5,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation",
            "value": 0.5,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2,
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
        "label": "Gross Profit",
        "value": 7.9,
        "notes": [
          "98% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5,
        "notes": [
          "62% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.2,
        "notes": [
          "51% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "paymentNetwork": {
            "gross": {
              "id": "gross_revenue",
              "label": "总收入",
              "notes": []
            },
            "grossItems": [
              {
                "id": "service",
                "label": "服务",
                "notes": [
                  "同比 +15%"
                ]
              },
              {
                "id": "data_processing",
                "label": "数据处理",
                "notes": [
                  "同比 +15%"
                ]
              },
              {
                "id": "international",
                "label": "国际交易",
                "notes": [
                  "同比 +14%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +15%"
                ]
              }
            ],
            "rebates": {
              "id": "client_incentives",
              "label": "客户激励",
              "notes": []
            }
          },
          "items": [
            {
              "id": "revenue",
              "label": "净收入",
              "notes": [
                "同比 +12%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "network",
            "label": "网络与处理",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": []
              },
              {
                "id": "professional_fees",
                "label": "专业服务费",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧摊销",
                "notes": []
              },
              {
                "id": "general_admin",
                "label": "综合及行政",
                "notes": []
              },
              {
                "id": "litigation",
                "label": "诉讼",
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
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
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
              "98% 利润率",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "62% 利润率",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "51% 利润率",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "visa-q4-fy22",
    "company": "Visa",
    "period": "Q4 FY22",
    "periodNote": "Ending Sept. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/visa-q4-fy22.png",
    "roundingTolerance": 0.25,
    "notes": [
      "Source-rounded gross fee inputs sum to $10.8B versus gross revenue $10.6B. Gross revenue $10.6B less client incentives $2.9B differs from net revenue $7.8B by $0.1B. Operating profit $5.1B less tax $0.9B and other $0.2B differs from net profit $3.9B by $0.1B. Source values retained."
    ],
    "revenue": {
      "total": 7.8,
      "items": [
        {
          "id": "revenue",
          "label": "Net revenue",
          "value": 7.8,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ],
      "notes": [
        "+19% Y/Y"
      ],
      "paymentNetwork": {
        "gross": {
          "id": "gross_revenue",
          "label": "Gross revenue",
          "value": 10.6,
          "notes": []
        },
        "grossItems": [
          {
            "id": "service",
            "label": "Service",
            "value": 3.5,
            "notes": [
              "+11% Y/Y"
            ]
          },
          {
            "id": "data_processing",
            "label": "Data processing",
            "value": 3.8,
            "notes": [
              "+10% Y/Y"
            ]
          },
          {
            "id": "international",
            "label": "International transaction",
            "value": 2.9,
            "notes": [
              "+52% Y/Y"
            ]
          },
          {
            "id": "other_rev",
            "label": "Other",
            "value": 0.6,
            "notes": [
              "+13% Y/Y"
            ]
          }
        ],
        "rebates": {
          "id": "client_incentives",
          "label": "Client incentives",
          "value": 2.9,
          "notes": []
        }
      }
    },
    "costs": {
      "costOfRevenue": {
        "id": "network",
        "label": "Network & processing",
        "value": 0.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "personnel",
            "label": "Personnel",
            "value": 1.4,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "general_admin",
            "label": "General & admin",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "professional_fees",
            "label": "Professional fees",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "litigation",
            "label": "Litigation provision",
            "value": 0.003,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9,
        "notes": []
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
          "value": 0.2,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross Profit",
        "value": 7.6,
        "notes": [
          "97% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.1,
        "notes": [
          "66% margin",
          "Unchanged"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.9,
        "notes": [
          "51% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 9 月",
        "notes": [],
        "revenue": {
          "notes": [
            "同比 +19%"
          ],
          "paymentNetwork": {
            "gross": {
              "id": "gross_revenue",
              "label": "总收入",
              "notes": []
            },
            "grossItems": [
              {
                "id": "service",
                "label": "服务",
                "notes": [
                  "同比 +11%"
                ]
              },
              {
                "id": "data_processing",
                "label": "数据处理",
                "notes": [
                  "同比 +10%"
                ]
              },
              {
                "id": "international",
                "label": "国际交易",
                "notes": [
                  "同比 +52%"
                ]
              },
              {
                "id": "other_rev",
                "label": "其他",
                "notes": [
                  "同比 +13%"
                ]
              }
            ],
            "rebates": {
              "id": "client_incentives",
              "label": "客户激励",
              "notes": []
            }
          },
          "items": [
            {
              "id": "revenue",
              "label": "净收入",
              "notes": [
                "同比 +19%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "network",
            "label": "网络及处理",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "personnel",
                "label": "人员",
                "notes": []
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": []
              },
              {
                "id": "general_admin",
                "label": "综合及行政",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧摊销",
                "notes": []
              },
              {
                "id": "professional_fees",
                "label": "专业服务费",
                "notes": []
              },
              {
                "id": "litigation",
                "label": "诉讼拨备",
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
              "id": "other",
              "label": "其他费用",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 97%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 66%",
              "同比持平"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 51%",
              "同比 -4 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
