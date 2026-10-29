/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "blackrock-q1-fy26",
    "company": "BlackRock",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.7,
      "notes": [
        "+27% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 5.4,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.3,
          "notes": [
            "+353% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.5,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.4,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
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
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3.9,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 2.2
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1.3
          },
          {
            "id": "amortization_other",
            "label": "Amortization & other",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.1
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
      "total": 0.028,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.028,
          "valueText": "$28M"
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
        "value": 6.7,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.8,
        "notes": [
          "42% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 2.3,
        "notes": [
          "35% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +27%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +353%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +19%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销及其他"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 42%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 35%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q2-fy26",
    "company": "BlackRock",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.1,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 5.7,
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.3,
          "notes": [
            "+224% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.6,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.4,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
          "notes": [
            "+64% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 2.3
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "amortization_other",
            "label": "Amortization & other",
            "value": 0.3
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
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
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
        "value": 7.1,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "29% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 2.1,
        "notes": [
          "29% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +29%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +224%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +64%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销及其他"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 -2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q4-fy25",
    "company": "BlackRock",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 5.3,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.8,
          "notes": [
            "+67% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.5,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.4,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
          "notes": [
            "+46% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 2.6
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.3
          },
          {
            "id": "amortization_other",
            "label": "Amortization & other",
            "value": 0.3
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
      "total": 0,
      "items": []
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
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "24% margin",
          "(13pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.2,
        "notes": [
          "18% margin",
          "(12pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +67%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +46%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销及其他"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 -13 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 -12 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q2-fy24",
    "company": "BlackRock",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.8,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.8,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.2,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.053,
          "notes": [
            "(5%) Y/Y"
          ],
          "valueText": "$53M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.5
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "amortization_other",
            "label": "Amortization",
            "value": 0.039,
            "valueText": "($39M)"
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
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other income",
          "value": 0.2
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
        "value": 4.8,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "37% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.5,
        "notes": [
          "32% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 -5%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销"
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
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 37%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 32%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q1-fy25",
    "company": "BlackRock",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.3,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 4.4,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.1,
          "notes": [
            "(71%) Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
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
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.7
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1
          },
          {
            "id": "amortization_other",
            "label": "Amortization",
            "value": 0.1
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
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
        "value": 5.3,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "32% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.5,
        "notes": [
          "29% margin",
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
            "同比 +12%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 -71%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 -2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 -6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q3-fy24",
    "company": "BlackRock",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.2,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 4,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.4,
          "notes": [
            "+454% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.053,
          "notes": [
            "+23% Y/Y"
          ],
          "valueText": "$53M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3.2,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.6
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6
          },
          {
            "id": "amortization_other",
            "label": "Amortization",
            "value": 0.1
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
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other income",
          "value": 0.3
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
        "value": 5.2,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "39% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.7,
        "notes": [
          "33% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +454%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 -1%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +23%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
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
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 39%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 33%",
              "同比 -3 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        }
      }
    }
  },
  {
    "key": "blackrock-q4-fy23",
    "company": "BlackRock",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.6,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.6,
          "valueText": "$3.6B",
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.033,
          "valueText": "$33M",
          "notes": [
            "(23%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.5,
            "valueText": "($1.5B)",
            "notes": []
          },
          {
            "id": "distribution_servicing",
            "label": "Distribution & Services",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": []
          },
          {
            "id": "direct_fund",
            "label": "Direct fund expense",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.01,
            "valueText": "($0.01B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.038,
            "valueText": "($38M)",
            "notes": []
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
          "label": "Other income",
          "value": 0.3
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
        "value": 4.6,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "34% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.5,
        "notes": [
          "32% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 -4%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 -23%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利",
                "notes": []
              },
              {
                "id": "distribution_servicing",
                "label": "分销与服务费用",
                "notes": []
              },
              {
                "id": "direct_fund",
                "label": "直接基金费用",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": []
              },
              {
                "id": "restructuring",
                "label": "重组费用",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
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
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 34%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 32%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q1-fy24",
    "company": "BlackRock",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.7,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.8,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.2,
          "notes": [
            "+271% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.059,
          "notes": [
            "+119% Y/Y"
          ],
          "valueText": "$59M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.6
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 0.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.038,
            "valueText": "($38M)"
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
          "id": "other_income",
          "label": "Other income",
          "value": 0.2
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
        "value": 4.7,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "36% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.6,
        "notes": [
          "34% margin",
          "+7pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +271%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +119%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
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
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 36%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +7 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q1-fy23",
    "company": "BlackRock",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.2,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.5,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.1,
          "notes": [
            "(44%) Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.3,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.027,
          "notes": [
            "(41%) Y/Y"
          ],
          "valueText": "$27M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source does not show a separate cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 2.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.4
          },
          {
            "id": "distribution_services",
            "label": "Distribution & Services",
            "value": 0.5
          },
          {
            "id": "direct_fund_expense",
            "label": "Direct fund expense",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.037,
            "valueText": "($37M)"
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
          "id": "other_income",
          "label": "Other income",
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
        "value": 4.2,
        "notes": [
          "Source flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "34% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.2,
        "notes": [
          "28% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 -10%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 -9%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 -44%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 0%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 -16%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 -41%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "distribution_services",
                "label": "分销及服务"
              },
              {
                "id": "direct_fund_expense",
                "label": "直接基金费用"
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
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 34%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 -1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q3-fy25",
    "company": "BlackRock",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.5,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 5,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.5,
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.5,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.4,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
          "notes": [
            "+45% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 2.4
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8
          },
          {
            "id": "amortization_other",
            "label": "Amortization & other",
            "value": 0.3
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
      "total": 0.042,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.042,
          "valueText": "$42M"
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
        "value": 6.5,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2,
        "notes": [
          "30% margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.5,
        "notes": [
          "23% margin",
          "(9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +45%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销及其他"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 -9 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 -9 个百分点"
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
    "key": "blackrock-q4-fy22",
    "company": "BlackRock",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "(15%) Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.4,
          "valueText": "$3.4B",
          "notes": [
            "(14%) Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.2,
          "valueText": "$0.2B",
          "notes": [
            "(31%) Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "(24%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.043,
          "valueText": "$43M",
          "notes": [
            "(27%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.4,
            "valueText": "($1.4B)",
            "notes": []
          },
          {
            "id": "distribution_services",
            "label": "Distribution & Services",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": []
          },
          {
            "id": "direct_fund_expense",
            "label": "Direct fund expense",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": []
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1,
            "valueText": "($0.1B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.037,
            "valueText": "($37M)",
            "notes": []
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
          "id": "other_income",
          "label": "Other income",
          "value": 0.2
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
        "value": 4.3
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "33% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.3,
        "notes": [
          "30% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 -15%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 -14%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 -31%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 -24%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 -27%"
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
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "distribution_services",
                "label": "分销与服务"
              },
              {
                "id": "direct_fund_expense",
                "label": "直接基金费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
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
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 33%",
              "同比 -7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 30%",
              "同比 -2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q4-fy24",
    "company": "BlackRock",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.7,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 4.4,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.5,
          "notes": [
            "+45% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
          "notes": [
            "+79% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3.6,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.9
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1,
            "valueText": "($1.0B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6
          },
          {
            "id": "amortization_other",
            "label": "Amortization",
            "value": 0.1
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
      "total": 0.028,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.028,
          "valueText": "$28M"
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
        "value": 5.7,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.1,
        "notes": [
          "37% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.7,
        "notes": [
          "29% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +45%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +79%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
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
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 37%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 29%",
              "同比 -3 个百分点"
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
    "key": "blackrock-q3-fy23",
    "company": "BlackRock",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.6,
          "valueText": "$3.6B",
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.1,
          "valueText": "$0.1B",
          "notes": [
            "(15%) Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.043,
          "valueText": "$43M",
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source does not show a separate cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.4,
            "valueText": "($1.4B)",
            "notes": []
          },
          {
            "id": "distribution_services",
            "label": "Distribution & Services",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": []
          },
          {
            "id": "direct_fund_expense",
            "label": "Direct fund expense",
            "value": 0.4,
            "valueText": "($0.4B)",
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.039,
            "valueText": "($39M)",
            "notes": []
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
      "total": 0.2,
      "items": [
        {
          "id": "other",
          "label": "Other income",
          "value": 0.2
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
        "value": 4.5
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "36% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.6,
        "notes": [
          "35% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 -15%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 -1%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +23%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未单列收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "distribution_services",
                "label": "分销与服务"
              },
              {
                "id": "direct_fund_expense",
                "label": "直接基金费用"
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
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 36%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 35%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q2-fy23",
    "company": "BlackRock",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/blackrock-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.5,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 3.6,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.1,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.4,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
          "notes": [
            "+44% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 2.8,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.4
          },
          {
            "id": "distribution_services",
            "label": "Distribution & Services",
            "value": 0.5
          },
          {
            "id": "direct_fund_expense",
            "label": "Direct fund expense",
            "value": 0.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.037,
            "valueText": "($37M)"
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
          "label": "Other income",
          "value": 0.3
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
        "value": 4.5,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "36% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.4,
        "notes": [
          "28% margin",
          "+11pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 -1%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 -2%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 -12%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +44%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "distribution_services",
                "label": "分销与服务"
              },
              {
                "id": "direct_fund_expense",
                "label": "直接基金费用"
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
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 36%",
              "同比 -1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 +11 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "blackrock-q2-fy25",
    "company": "BlackRock",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/blackrock-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.4,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "investment_advisory_fees",
          "label": "Investment advisory, fees & securities lending",
          "value": 4.5,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "performance_fees",
          "label": "Investment advisory performance fees",
          "value": 0.1,
          "notes": [
            "(43%) Y/Y"
          ]
        },
        {
          "id": "technology_services",
          "label": "Technology services",
          "value": 0.5,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "distribution_fees",
          "label": "Distribution fees",
          "value": 0.3,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "advisory_other",
          "label": "Advisory & other",
          "value": 0.1,
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
        "value": 0,
        "notes": [
          "Source chart does not show a separate gross profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 3.7,
        "items": [
          {
            "id": "compensation_benefits",
            "label": "Compensation & benefits",
            "value": 1.8
          },
          {
            "id": "sales_asset_account_expenses",
            "label": "Sales, asset & Account expenses",
            "value": 1.1
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "amortization_other",
            "label": "Amortization & other",
            "value": 0.2
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
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.5
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
        "value": 5.4,
        "notes": [
          "Source chart flows revenue directly to operating profit and operating expenses."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "32% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 1.7,
        "notes": [
          "31% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "investment_advisory_fees",
              "label": "投资顾问、费用及证券借贷",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "performance_fees",
              "label": "投资顾问绩效费",
              "notes": [
                "同比 -43%"
              ]
            },
            {
              "id": "technology_services",
              "label": "技术服务",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "distribution_fees",
              "label": "分销费用",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "advisory_other",
              "label": "顾问及其他",
              "notes": [
                "同比 +6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独显示毛利润或收入成本层。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "compensation_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "sales_asset_account_expenses",
                "label": "销售、资产及账户费用"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "amortization_other",
                "label": "摊销及其他"
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
              "来源图将收入直接流向营业利润和运营费用。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 -6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 -1 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
