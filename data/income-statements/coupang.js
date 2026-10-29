/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "coupang-q3-fy25",
    "company": "Coupang",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.3,
      "notes": [
        "+18% Y/Y",
        "+20% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 8,
          "notes": [
            "+16% Y/Y",
            "9% adjusted margin",
            "+2pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1.3,
          "notes": [
            "+32% Y/Y",
            "(23%) adjusted margin",
            "+10pp Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.5
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.07
      }
    },
    "otherIncome": {
      "total": 0.003,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.003
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
        "value": 2.7,
        "notes": [
          "29% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.162,
        "notes": [
          "2% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.095,
        "notes": [
          "1% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +18%",
            "按固定汇率同比 +20%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +16%",
                "调整后利润率 9%",
                "同比 +2 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +32%",
                "调整后利润率 (23%)",
                "同比 +10 个百分点",
                "Coupang Eats 和 Coupang Play"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
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
              "利润率 29%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "coupang-q4-fy25",
    "company": "Coupang",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/coupang-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.8,
      "notes": [
        "+11% Y/Y",
        "+14% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 7.4,
          "notes": [
            "+8% Y/Y",
            "8% adjusted margin",
            "(0pp) Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1.4,
          "notes": [
            "+32% Y/Y",
            "(21%) adjusted margin",
            "(10pp) Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.3
      },
      "operatingExpenses": {
        "total": 2.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.5
          }
        ]
      },
      "tax": {
        "label": "Income tax expense",
        "value": 0.048
      }
    },
    "otherIncome": {
      "total": 0.047,
      "items": [
        {
          "label": "Interest income",
          "value": 0.047
        }
      ]
    },
    "otherExpenses": {
      "total": 0.033,
      "items": [
        {
          "label": "Interest expense",
          "value": 0.016
        },
        {
          "label": "Other expense, net",
          "value": 0.017
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "29% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.008,
        "notes": [
          "0% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.026
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +11%",
            "按固定汇率同比 +14%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +8%",
                "调整后利润率 8%",
                "同比 0 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +32%",
                "调整后利润率 (21%)",
                "同比 (10 个百分点)",
                "Coupang Eats 和 Coupang Play"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息收入"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "label": "利息费用"
            },
            {
              "label": "其他费用净额"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 0%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "coupang-q1-fy26",
    "company": "Coupang",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/coupang-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.504,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 7.176,
          "notes": [
            "+4% Y/Y",
            "5% adjusted margin",
            "(4pp) Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1.328,
          "notes": [
            "+28% Y/Y",
            "(25%) adjusted margin",
            "(9pp) Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.207
      },
      "operatingExpenses": {
        "total": 2.539,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating, general and administrative",
            "value": 2.539
          }
        ]
      },
      "tax": {
        "label": "Income tax expense",
        "value": 0.011
      }
    },
    "otherIncome": {
      "total": 0.044,
      "items": [
        {
          "label": "Interest income",
          "value": 0.044
        }
      ]
    },
    "otherExpenses": {
      "total": 0.057,
      "items": [
        {
          "label": "Interest expense",
          "value": 0.013
        },
        {
          "label": "Other expense, net",
          "value": 0.044
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.297,
        "notes": [
          "27% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.242,
        "notes": [
          "(3%) of revenue",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "label": "Net loss",
        "value": -0.266
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +4%",
                "调整后利润率 5%",
                "同比 (4 个百分点)",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +28%",
                "调整后利润率 (25%)",
                "同比 (9 个百分点)",
                "Coupang Eats 和 Coupang Play"
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
                "label": "运营、一般及行政费用"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息收入"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "label": "利息费用"
            },
            {
              "label": "其他费用净额"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "占收入 (3%)",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损"
          }
        }
      }
    }
  },
  {
    "key": "coupang-q2-fy26",
    "company": "Coupang",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26 (Source-stated)",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/coupang-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.9,
      "notes": [
        "+4% Y/Y",
        "+10% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 7.4,
          "notes": [
            "+1% Y/Y",
            "5% adjusted margin",
            "(4pp) Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1.4,
          "notes": [
            "+20% Y/Y",
            "(15%) adjusted margin",
            "(4pp) Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.4
      },
      "operatingExpenses": {
        "total": 3.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 3.1
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "28% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.6,
        "notes": [
          "(6%) of revenue",
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
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "24700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "24.7M",
        "basis": "unspecified",
        "quote": "Active Customers 24.7M (+3% Y/Y)",
        "notes": [
          "+3% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            180,
            1269,
            509,
            31
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.301",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$301",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $301 (-2% Y/Y)",
        "notes": [
          "-2% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            95,
            1310,
            679,
            34
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度（原图标注）",
        "revenue": {
          "notes": [
            "同比 +4%",
            "按固定汇率同比 +10%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +1%",
                "调整后利润率 5%",
                "同比 (4 个百分点)",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +20%",
                "调整后利润率 (15%)",
                "同比 (4 个百分点)",
                "Coupang Eats 和 Coupang Play"
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
                "label": "运营费用"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 28%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "占收入 (6%)",
              "同比 (8 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +3%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 -2%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q2-fy23",
    "company": "Coupang",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.8,
      "notes": [
        "+16% Y/Y",
        "+21% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": "Product Commerce",
          "value": 5.7,
          "notes": [
            "+15% Y/Y",
            "7% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": "Developing Offerings",
          "value": 0.2,
          "notes": [
            "(21%) Y/Y",
            "(69%) adjusted margin"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 1.4,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.026,
        "notes": []
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "26% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "2% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 0.029,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.029,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.005,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.005,
          "notes": []
        }
      ]
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "20000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Active Customers 20M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            185,
            1303,
            499,
            35
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.296",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$296",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "quote": "Revenue per Active Customers $296 (+5% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1348,
            685,
            35
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
            "同比 +16%",
            "按固定汇率同比 +21%"
          ],
          "items": [
            {
              "label": "产品商业",
              "notes": [
                "同比 +15%",
                "调整后利润率 7%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": "培育中业务",
              "notes": [
                "同比 (21%)",
                "调整后利润率 (69%)"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 +3 个百分点"
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
              "利润率 2%",
              "同比 +4 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息"
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
        "operatingMetrics": [
          {
            "label": "活跃客户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q1-fy24",
    "company": "Coupang",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.1,
      "notes": [
        "+23% Y/Y",
        "+28% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.5,
          "notes": [
            "+15% Y/Y",
            "7% adjusted margin",
            "+2pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.6,
          "notes": [
            "+337% Y/Y",
            "(30%) adjusted margin",
            "+3pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.2
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 1.9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.083
      }
    },
    "otherIncome": {
      "total": 0.019,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.019
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
        "value": 1.9,
        "notes": [
          "27% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.04,
        "notes": [
          "1% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.024,
        "notes": [
          "(0%) margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +23%",
            "按固定汇率同比 +28%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +15%",
                "调整后利润率 7%",
                "同比 +2 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +337%",
                "调整后利润率 (30%)",
                "同比 +3 个百分点"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 27%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 -1%"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "21500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21.5M",
        "basis": "unspecified",
        "quote": "Active Customers 21.5M (+16% Y/Y)",
        "notes": [
          "+16% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1306,
            530,
            34
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.302",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$302",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $302 (-1% Y/Y)",
        "notes": [
          "-1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            93,
            1347,
            680,
            34
          ]
        }
      }
    ]
  },
  {
    "key": "coupang-q2-fy25",
    "company": "Coupang",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.5,
      "notes": [
        "+16% Y/Y",
        "+19% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": "Product Commerce",
          "value": 7.3,
          "notes": [
            "+14% Y/Y",
            "9% adjusted margin",
            "+1pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": "Developing Offerings",
          "value": 1.2,
          "notes": [
            "+33% Y/Y",
            "(20%) adjusted margin",
            "+3pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.163
      }
    },
    "otherIncome": {
      "total": 0.045,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.045
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
        "value": 2.6,
        "notes": [
          "30% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.149,
        "notes": [
          "2% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.031,
        "notes": [
          "0% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "23900000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "23.9M",
        "notes": [
          "+10% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Active Customers 23.9M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1268,
            535,
            36
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.307",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$307",
        "notes": [
          "+4% Y/Y"
        ],
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $307 (+4% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1308,
            680,
            40
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +16%",
            "按固定汇率同比 +19%"
          ],
          "items": [
            {
              "label": "产品商业",
              "notes": [
                "同比 +14%",
                "调整后利润率 9%",
                "同比 +1 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": "培育中业务",
              "notes": [
                "同比 +33%",
                "调整后利润率 (20%)",
                "同比 +3 个百分点"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
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
              "利润率 30%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 0%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "label": "活跃客户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q3-fy22",
    "company": "Coupang",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.1,
      "notes": [
        "+10% Y/Y",
        "+27% Y/Y fx neutral"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 4.9,
          "notes": [
            "+10% Y/Y",
            "5% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.2,
          "notes": [
            "(6%) Y/Y",
            "(29%) adjusted margin"
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
        "value": 3.9
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Operating",
              "expenses"
            ],
            "value": 1.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.007
      }
    },
    "otherIncome": {
      "total": 0.02,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.009
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.011
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
        "value": 1.2,
        "notes": [
          "24% margin",
          "+7pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.077,
        "notes": [
          "2% margin",
          "+8pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.091,
        "notes": [
          "2% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "18000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "18M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Active Customers 18M (+7% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            65,
            1285,
            735,
            55
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.284",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$284",
        "basis": "unspecified",
        "notes": [
          "+3% Y/Y"
        ],
        "quote": "Revenue per Active Customers $284 (+3% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            65,
            1335,
            735,
            55
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
            "同比 +10%",
            "按固定汇率同比 +27%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +10%",
                "调整后利润率 5%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 (6%)",
                "调整后利润率 (29%)"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息"
            },
            {
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 24%",
              "同比 +7 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +8 个百分点"
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
            "label": "活跃客户",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +3%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q1-fy25",
    "company": "Coupang",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.9,
      "notes": [
        "+11% Y/Y",
        "+21% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.9,
          "notes": [
            "+6% Y/Y",
            "8% adjusted margin",
            "+1pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1,
          "notes": [
            "+67% Y/Y",
            "(16%) adjusted margin",
            "+14pp Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.6
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.2
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
      "total": 0.1,
      "items": [
        {
          "id": "other",
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.3,
        "notes": [
          "29% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "2% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +11%",
            "按固定汇率同比 +21%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +6%",
                "调整后利润率 8%",
                "同比 +1 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +67%",
                "调整后利润率 (16%)",
                "同比 +14 个百分点",
                "Coupang Eats 和 Coupang Play"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
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
              "利润率 29%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 (3%)"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "23400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "23.4M",
        "basis": "unspecified",
        "quote": "Active Customers 23.4M (+9% Y/Y)",
        "notes": [
          "+9% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            180,
            1268,
            510,
            32
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.294",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$294",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $294 ((3%) Y/Y)",
        "notes": [
          "(3%) Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1310,
            690,
            33
          ]
        }
      }
    ]
  },
  {
    "key": "coupang-q4-fy23",
    "company": "Coupang",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.6,
      "notes": [
        "+23% Y/Y",
        "+20% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.3,
          "notes": [
            "+21% Y/Y",
            "7% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.3,
          "notes": [
            "+105% Y/Y",
            "(55%) adjusted margin"
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
        "value": 4.9
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Operating",
              "expenses"
            ],
            "value": 1.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax benefit",
        "value": -0.9
      }
    },
    "otherIncome": {
      "total": 0.041,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.041
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
        "value": 1.7,
        "notes": [
          "26% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "2% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "16% margin",
          "+14pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "21000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21M",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "Active Customers 21M (+16% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1298,
            560,
            40
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.312",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$312",
        "basis": "unspecified",
        "notes": [
          "+6% Y/Y"
        ],
        "quote": "Revenue per Active Customers $312 (+6% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1340,
            690,
            40
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
            "同比 +23%",
            "按固定汇率同比 +20%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +21%",
                "调整后利润率 7%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +105%",
                "调整后利润率 (55%)"
              ]
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
                "label": [
                  "运营",
                  "费用"
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
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 26%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 +14 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "label": "活跃客户",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +6%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q3-fy23",
    "company": "Coupang",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.2,
      "notes": [
        "+21% Y/Y",
        "+18% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6,
          "notes": [
            "+21% Y/Y",
            "7% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.2,
          "notes": [
            "+41% Y/Y",
            "(69%) adjusted margin"
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
        "value": 4.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Operating",
              "expenses"
            ],
            "value": 1.5,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.025,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.037,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.037,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.008,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.008,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.6,
        "notes": [
          "25% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "20400000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "20.4M",
        "basis": "unspecified",
        "quote": "Active Customers 20.4M (+14% Y/Y)",
        "notes": [
          "+14% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1302,
            525,
            35
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.303",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$303",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $303 (+7% Y/Y)",
        "notes": [
          "+7% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            89,
            1343,
            685,
            35
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
            "同比 +21%",
            "按固定汇率同比 +18%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +21%",
                "调整后利润率 7%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +41%",
                "调整后利润率 (69%)"
              ]
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
                "label": [
                  "运营",
                  "费用"
                ]
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息收入"
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
              "利润率 25%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 0 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q1-fy23",
    "company": "Coupang",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.8,
      "notes": [
        "+13% Y/Y",
        "+% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 5.7,
          "notes": [
            "+15% Y/Y",
            "5% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.1,
          "notes": [
            "(21%) Y/Y",
            "(33%) adjusted margin"
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
        "value": 4.4
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Operating",
              "expenses"
            ],
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.032
      }
    },
    "otherIncome": {
      "total": 0.024,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.024
        }
      ]
    },
    "otherExpenses": {
      "total": 0.007,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.007
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.4,
        "notes": [
          "24% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "2% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.1,
        "notes": [
          "2% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "literal": "19M",
        "value": "19000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Active Customers 19M (+5% Y/Y)",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1284,
            736,
            55
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "literal": "$305",
        "value": "0.305",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Revenue per Active Customers $305 (+8% Y/Y)",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1340,
            736,
            55
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
            "同比 +13%",
            "按固定汇率同比 +%"
          ],
          "items": [
            {
              "id": "product_commerce",
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +15%",
                "调整后利润率 5%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "id": "developing_offerings",
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 (21%)",
                "调整后利润率 (33%)"
              ]
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
                "id": "operating_expenses",
                "label": [
                  "运营",
                  "费用"
                ]
              }
            ]
          },
          "tax": {
            "label": "税项"
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
              "利润率 24%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (4 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +5%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +8%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q4-fy24",
    "company": "Coupang",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q4-fy24.png",
    "roundingTolerance": 0.05,
    "revenue": {
      "total": 8,
      "notes": [
        "+21% Y/Y",
        "+28% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.9,
          "notes": [
            "+9% Y/Y",
            "8% adjusted margin",
            "+1pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1.1,
          "notes": [
            "+296% Y/Y",
            "(11%) adjusted margin",
            "+44pp Y/Y"
          ]
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
        "total": 2.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.2
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
      "total": 0.013,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.013
        }
      ]
    },
    "otherExpenses": {
      "total": 0.046,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.046
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "31% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "4% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.131,
        "notes": [
          "1% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Product Commerce Active Customers",
        "literal": "22.8M",
        "value": "22800000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Product Commerce Active Customers 22.8M (+10% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1248,
            927,
            60
          ]
        }
      },
      {
        "id": "revenue_per_active",
        "label": "Revenue per Active",
        "literal": "$302",
        "value": "0.302",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "flat Y/Y"
        ],
        "quote": "Revenue per Active $302 (flat Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1308,
            927,
            52
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +21%",
            "按固定汇率同比 +28%"
          ],
          "items": [
            {
              "id": "product_commerce",
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +9%",
                "调整后利润率 8%",
                "同比 +1 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "id": "developing_offerings",
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +296%",
                "调整后利润率 (11%)",
                "同比 +44 个百分点"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息"
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
              "利润率 31%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "产品商业活跃客户",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "revenue_per_active",
            "label": "每位活跃客户收入",
            "notes": [
              "同比持平"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q4-fy22",
    "company": "Coupang",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.3,
      "notes": [
        "+5% Y/Y",
        "+21% Y/Y fx neutral"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 5.2,
          "notes": [
            "5% adjusted margin",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.1,
          "notes": [
            "(41%) adjusted margin"
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
        "value": 4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": [
              "Operating",
              "expenses"
            ],
            "value": 1.2,
            "notes": []
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0.028,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.019,
          "notes": []
        },
        {
          "id": "tax",
          "label": "Tax",
          "value": 0.009,
          "notes": []
        }
      ]
    },
    "otherExpenses": {
      "total": 0.009,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.009,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.3,
        "notes": [
          "24% margin",
          "+8pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.083,
        "notes": [
          "2% margin",
          "+9pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.102,
        "notes": [
          "2% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "18000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "18M",
        "basis": "unspecified",
        "quote": "Active Customers 18M (+1% Y/Y)",
        "notes": [
          "+1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            193,
            1305,
            485,
            31
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.294",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$294",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $294 (+4% Y/Y)",
        "notes": [
          "+4% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1346,
            682,
            32
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 +5%",
            "按固定汇率同比 +21%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "调整后利润率 5%",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "调整后利润率 (41%)"
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
                "label": "运营费用"
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "利息"
            },
            {
              "label": "税项"
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
              "利润率 24%",
              "同比 +8 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +10 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +1%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "coupang-q3-fy24",
    "company": "Coupang",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.9,
      "notes": [
        "+27% Y/Y",
        "+32% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.9,
          "notes": [
            "+16% Y/Y",
            "7% adjusted margin",
            "+0pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 1,
          "notes": [
            "+347% Y/Y",
            "(13%) adjusted margin",
            "+61pp Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.6
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.068
      }
    },
    "otherIncome": {
      "total": 0.023,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.023
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
        "value": 2.3,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.064,
        "notes": [
          "1% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +4%"
            ]
          }
        ],
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +27%",
            "按固定汇率同比 +32%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +16%",
                "调整后利润率 7%",
                "同比 0 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +347%",
                "调整后利润率 (13%)",
                "同比 +61 个百分点"
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
                "label": "运营费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "otherIncome": {
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
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "active_customers",
        "label": "Active Customers",
        "value": "22500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "22.5M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Active Customers 22.5M (+11% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            170,
            1268,
            560,
            35
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.307",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$307",
        "basis": "unspecified",
        "notes": [
          "+4% Y/Y"
        ],
        "quote": "Revenue per Active Customers $307 (+4% Y/Y)",
        "anchor": {
          "type": "image-box",
          "box": [
            90,
            1310,
            690,
            35
          ]
        }
      }
    ]
  },
  {
    "key": "coupang-q2-fy24",
    "company": "Coupang",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/coupang-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.3,
      "notes": [
        "+25% Y/Y",
        "+30% Y/Y fxn"
      ],
      "items": [
        {
          "id": "product_commerce",
          "label": [
            "Product",
            "Commerce"
          ],
          "value": 6.4,
          "notes": [
            "+13% Y/Y",
            "8% adjusted margin",
            "+1pp Y/Y",
            "Core retail",
            "Marketplace",
            "Rocket Fresh"
          ]
        },
        {
          "id": "developing_offerings",
          "label": [
            "Developing",
            "Offerings"
          ],
          "value": 0.9,
          "notes": [
            "+472% Y/Y",
            "(3%) adjusted margin",
            "+37pp Y/Y",
            "Coupang Eats and Coupang Play"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.2
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 2.2
          }
        ]
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.1,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.025,
        "notes": [
          "(0%) margin",
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
        "id": "active_customers",
        "label": "Active Customers",
        "value": "21700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "21.7M",
        "basis": "unspecified",
        "quote": "Active Customers 21.7M (+12% Y/Y)",
        "notes": [
          "+12% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            132,
            1000,
            408,
            28
          ]
        }
      },
      {
        "id": "revenue_per_active_customer",
        "label": "Revenue per Active Customers",
        "value": "0.296",
        "unit": "K",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$296",
        "basis": "unspecified",
        "quote": "Revenue per Active Customers $296 (+1% Y/Y)",
        "notes": [
          "+1% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            69,
            1030,
            525,
            28
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
            "同比 +25%",
            "按固定汇率同比 +30%"
          ],
          "items": [
            {
              "label": [
                "产品",
                "商业"
              ],
              "notes": [
                "同比 +13%",
                "调整后利润率 8%",
                "同比 +1 个百分点",
                "核心零售",
                "平台业务",
                "火箭生鲜"
              ]
            },
            {
              "label": [
                "培育中",
                "业务"
              ],
              "notes": [
                "同比 +472%",
                "调整后利润率 (3%)",
                "同比 +37 个百分点"
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
                "label": "运营费用"
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "active_customers",
            "label": "活跃客户",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "revenue_per_active_customer",
            "label": "每位活跃客户收入",
            "notes": [
              "同比 +1%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
