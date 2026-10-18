/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "ford-q2-fy26",
    "company": "Ford",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ford-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48.3,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 26.1,
          "notes": [
            "+1% Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1,
          "notes": [
            "(56%) Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 17.8,
          "notes": [
            "(5%) Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.4,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 42.2
      },
      "operatingExpenses": {
        "total": 5.4,
        "notes": [
          "Displayed expense items sum to $5.5B because each amount is rounded."
        ],
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.8
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.7
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax flow is displayed in the source chart."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 1.9
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.1,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "1% margin",
          "+0pp Y/Y",
          "Gross profit less operating expenses is $0.7B; the source reports $0.6B due to rounded line items."
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -1.3
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +1%",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 (56%)",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 (5%)",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +5%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "由于来源图逐项四舍五入，两个显示费用项合计为 55 亿美元。"
            ],
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费流。"
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
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +0 个百分点",
              "毛利润减去运营费用为 7 亿美元；由于各行取整，来源图报告为 6 亿美元。"
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
    "key": "ford-q1-fy26",
    "company": "Ford",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ford-q1-fy26.png",
    "roundingTolerance": 0.21,
    "revenue": {
      "total": 43.3,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 33.4,
          "notes": [
            "+6% Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1.3,
          "notes": [
            "(4%) Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 14.7,
          "notes": [
            "(3%) Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.4,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -9.6,
          "notes": [
            "Eliminations between segment revenue and consolidated revenue."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 35.3
      },
      "operatingExpenses": {
        "total": 5.6,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.8
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.8
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
      "total": 0.9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.9
        }
      ]
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.9,
        "notes": [
          "18% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.6,
        "notes": [
          "6% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +6%",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 (4%)",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 (3%)",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "分部收入与合并收入之间的抵销项。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
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
        "otherExpenses": {
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
              "利润率 18%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ford-fy25",
    "company": "Ford",
    "period": "FY25",
    "periodNote": "Year ended Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ford-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 187.3,
      "notes": [
        "+0% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 101,
          "notes": [
            "(1%) Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 6.7,
          "notes": [
            "+73% Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 66.3,
          "notes": [
            "(1%) Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 13.3,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 174.5
      },
      "operatingExpenses": {
        "total": 22,
        "notes": [
          "Source chart rounds the two displayed expense items to $21.9B."
        ],
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 11.1
          },
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 10.8
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax flow is displayed in the source chart."
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
        "value": 12.8,
        "notes": [
          "7% margin",
          "(8pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -9.2,
        "notes": [
          "(5%) margin",
          "(8pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -9.2,
        "notes": [
          "The source image ends at operating loss and does not display a separate net result."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +0%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 (1%)",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 +73%",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 (1%)",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "来源图将两个显示费用项取整为 $21.9B。"
            ],
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              },
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费流。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 7%",
              "同比 (8 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (5%)",
              "同比 (8 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图止于营业亏损，未显示单独的净利润。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ford-q1-fy25",
    "company": "Ford",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ford-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 40.7,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 31.6,
          "notes": [
            "(6%) Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1.4,
          "notes": [
            "+891% Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 15.2,
          "notes": [
            "(16%) Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -10.7,
          "notes": [
            "Eliminations between segment revenue and consolidated revenue."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 35.2
      },
      "operatingExpenses": {
        "total": 5.2,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.7
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4
          }
        ],
        "notes": [
          "Displayed expense items sum to $5.1B; the Source total is $5.2B due to rounded amounts."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "otherIncome": {
      "total": 0.6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.6
        }
      ]
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.5,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "1% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "1% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (5%)"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 (6%)",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 +891%",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 (16%)",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "分部收入与合并收入之间的抵销项。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ],
            "notes": [
              "来源图逐项四舍五入后，费用明细合计为 $5.1B，总额为 $5.2B。"
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
        "otherExpenses": {
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
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ford-fy24",
    "company": "Ford",
    "period": "FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ford-fy24.png",
    "roundingTolerance": 0.21,
    "revenue": {
      "total": 185,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 101.9,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 3.8,
          "notes": [
            "(35%) Y/Y"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 66.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 12.3,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 158.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 21.3,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 11.1,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 10.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax & other",
        "value": 2.5,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 3.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 3.1,
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
        "value": 26.6,
        "notes": [
          "14% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.2,
        "notes": [
          "3% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.9,
        "notes": [
          "3% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source amounts retained: segment revenue sums to $184.9B versus $185.0B; expenses sum to $21.4B versus $21.3B; gross less operating expenses is $5.3B versus $5.2B; operating plus Other less Tax & other is $5.8B versus $5.9B."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 (35%)"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +19%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ]
          },
          "tax": {
            "label": "税费及其他"
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
              "利润率 14%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +1 个百分点"
            ]
          }
        },
        "notes": [
          "保留原图金额；各项金额分别取整，存在加总差异。"
        ]
      }
    }
  },
  {
    "key": "ford-q2-fy24",
    "company": "Ford",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/ford-q2-fy24.png",
    "roundingTolerance": 0.21,
    "revenue": {
      "total": 47.8,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 38,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1.3,
          "notes": [
            "(37%) Y/Y"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 17,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -11.4,
          "notes": [
            "Eliminations between segment revenue and consolidated revenue."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 40.5
      },
      "operatingExpenses": {
        "total": 5.4,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.8
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.7
          }
        ],
        "notes": [
          "Source expense items sum to $5.5B versus the displayed $5.4B total."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6
      }
    },
    "otherIncome": {
      "total": 0.6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.6
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
        "value": 7.3,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "4% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 (37%)"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "分部收入与合并收入之间的抵销项。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ],
            "notes": [
              "原图费用明细合计 $5.5B，所示总额为 $5.4B。"
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
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "notes": [
          "保留原图分别取整的金额，收入、费用及净利润桥接均存在加总差异。"
        ]
      }
    },
    "notes": [
      "Source rounded values retained: segment revenues less eliminations total $47.9B versus $47.8B; operating expense items sum to $5.5B versus $5.4B; operating profit plus Other less tax totals $1.9B versus net profit $1.8B."
    ]
  },
  {
    "key": "ford-q3-fy24",
    "company": "Ford",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ford-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 46.2,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 26.2,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1.2,
          "notes": [
            "(33%) Y/Y"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 15.7,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.1,
          "notes": [
            "+19% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 40.2
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.7
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5
          }
        ],
        "notes": [
          "Source reports $5.1B total; rounded displayed items sum to $5.2B."
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax flow is displayed in the source."
        ]
      }
    },
    "otherIncome": {
      "total": 0.016,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.016
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
        "value": 6,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "2% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "2% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 (33%)"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +19%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ],
            "notes": [
              "来源图运营费用总额为 51 亿美元；取整后的分项合计为 52 亿美元。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费流。"
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
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ford-q2-fy25",
    "company": "Ford",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/ford-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 50.2,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 39.3,
          "notes": [
            "+4% Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 2.5,
          "notes": [
            "+102% Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 18.8,
          "notes": [
            "+11% Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": -13.7,
          "notes": [
            "Eliminations between segment revenue and consolidated revenue."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 44.2
      },
      "operatingExpenses": {
        "total": 5.4,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.7
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.7
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax flow is displayed in the source chart."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.9,
        "notes": [
          "12% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "1% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.029,
        "notes": [
          "(0%) margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +4%",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 +102%",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 +11%",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "分部收入与合并收入之间的抵销项。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费流。"
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
              "利润率 12%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (4 个百分点)"
            ]
          }
        },
        "notes": [
          "原图金额分别取整：分部收入减抵销项合计 $50.1B，收入为 $50.2B；收入减销售成本为 $6.0B，毛利润为 $5.9B；营业利润减其他费用取整为零，原图净亏损为 $29M。"
        ]
      }
    },
    "notes": [
      "Source amounts are rounded: segment amounts less eliminations sum to $50.1B versus $50.2B; revenue less cost of sales is $6.0B versus $5.9B; operating profit less Other rounds to zero while the source reports a $29M net loss."
    ]
  },
  {
    "key": "ford-q3-fy25",
    "company": "Ford",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/ford-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 50.5,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "ford_blue",
          "label": "Ford Blue",
          "value": 28,
          "notes": [
            "+7% Y/Y",
            "Internal combustion"
          ]
        },
        {
          "id": "model_e",
          "label": "Ford Model e",
          "value": 1.8,
          "notes": [
            "+52% Y/Y",
            "Electric Vehicles"
          ]
        },
        {
          "id": "ford_pro",
          "label": "Ford Pro",
          "value": 17.4,
          "notes": [
            "+11% Y/Y",
            "Commercial division"
          ]
        },
        {
          "id": "ford_credit",
          "label": "Ford Credit",
          "value": 3.3,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 43.4
      },
      "operatingExpenses": {
        "total": 5.6,
        "items": [
          {
            "id": "ford_credit_expenses",
            "label": "Ford Credit expenses",
            "value": 2.8
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.7
          }
        ],
        "notes": [
          "Displayed expense items sum to $5.5B; the Source total is $5.6B due to rounded amounts."
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source shows a tax benefit in other income."
        ]
      }
    },
    "otherIncome": {
      "total": 1.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.6
        },
        {
          "id": "tax",
          "label": "Tax",
          "value": 0.6,
          "notes": [
            "Source-presented tax benefit."
          ]
        }
      ]
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.1,
        "notes": [
          "14% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "3% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "5% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "ford_blue",
              "label": "Ford Blue 燃油车业务",
              "notes": [
                "同比 +7%",
                "内燃机业务"
              ]
            },
            {
              "id": "model_e",
              "label": "Ford Model e 电动车业务",
              "notes": [
                "同比 +52%",
                "电动汽车"
              ]
            },
            {
              "id": "ford_pro",
              "label": "Ford Pro 商用车业务",
              "notes": [
                "同比 +11%",
                "商用车业务"
              ]
            },
            {
              "id": "ford_credit",
              "label": "福特信贷",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "ford_credit_expenses",
                "label": "福特信贷费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              }
            ],
            "notes": [
              "来源图逐项四舍五入后，费用明细合计为 $5.5B，总额为 $5.6B。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图将税收收益列为其他收入。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他"
            },
            {
              "id": "tax",
              "label": "税收收益",
              "notes": [
                "原图列示的税收收益。"
              ]
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 14%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
