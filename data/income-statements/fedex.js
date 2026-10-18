/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "fedex-q3-fy26",
    "company": "FedEx",
    "period": "Q3 FY26",
    "periodNote": "Ending Feb. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q3-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 21.2,
          "notes": [
            "+10% Y/Y",
            "7% operating margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2,
          "notes": [
            "(5%) Y/Y",
            "0% operating margin",
            "(12pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
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
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 22.7,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 8.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 6.1
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 0.9
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.7
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 24,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "6% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 2 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +10%",
                "营业利润率 7%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (5%)",
                "营业利润率 0%",
                "同比 (12 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (4%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q4-fy26",
    "company": "FedEx",
    "period": "Q4 FY26",
    "periodNote": "Ending May 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q4-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 21.6,
          "notes": [
            "+14% Y/Y",
            "8% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.4,
          "notes": [
            "+5% Y/Y",
            "7% operating margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 23.5,
        "notes": [
          "The displayed cost-detail labels sum to $23.4B because of rounding."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 8.6
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 6.2
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.4
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.9
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
      "total": 0.6,
      "items": [
        {
          "id": "other_income",
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
        "label": "Gross profit",
        "value": 25,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "6% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "6% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 5 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +14%",
                "营业利润率 8%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 +5%",
                "营业利润率 7%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "图中展示的费用明细因四舍五入合计为 $23.4B。"
            ],
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q3-fy25",
    "company": "FedEx",
    "period": "Q3 FY25",
    "periodNote": "Ending Feb. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.2,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 19.2,
          "notes": [
            "+3% Y/Y",
            "7% operating margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.1,
          "notes": [
            "(5%) Y/Y",
            "12% operating margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
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
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.9,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.9
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.6
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 0.9
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.3
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.2,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 2 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +3%",
                "营业利润率 7%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (5%)",
                "营业利润率 12%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q1-fy24",
    "company": "FedEx",
    "period": "Q1 FY24",
    "periodNote": "Ending Aug. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.7,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.1,
          "notes": [
            "(9%) Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.4,
          "notes": [
            "+3% Y/Y",
            "13% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.3,
          "notes": [
            "(16%) Y/Y",
            "21% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.8,
          "notes": [
            "(30%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.2,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.1
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.7,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "7% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 8 月",
        "revenue": {
          "notes": [
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 (9%)",
                "营业利润率 2%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx 陆运",
              "notes": [
                "同比 +3%",
                "营业利润率 13%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (16%)",
                "营业利润率 21%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (30%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q4-fy23",
    "company": "FedEx",
    "period": "Q4 FY23",
    "periodNote": "Ending May 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q4-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.9,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.4,
          "notes": [
            "(13%) Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.3,
          "notes": [
            "(2%) Y/Y",
            "12% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.3,
          "notes": [
            "(18%) Y/Y",
            "20% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "(22%) Y/Y"
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
          "Source does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.4,
        "notes": [
          "Displayed expense items sum to $20.5B due to rounding."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.6
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.6
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
      "total": 0.6,
      "items": [
        {
          "id": "other_income",
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
        "value": 21.9,
        "notes": [
          "Bookkeeping only; absent from Source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "7% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 5 月",
        "revenue": {
          "notes": [
            "同比 (10%)"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 (13%)",
                "营业利润率 4%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx 陆运",
              "notes": [
                "同比 (2%)",
                "营业利润率 12%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (18%)",
                "营业利润率 20%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (22%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未单列收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "图中费用明细因四舍五入合计为 $20.5B。"
            ],
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "仅用于账目对齐，原图未展示。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q2-fy25",
    "company": "FedEx",
    "period": "Q2 FY25",
    "periodNote": "Ending Nov. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q2-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22,
      "notes": [
        "(1%) Y/Y",
        "Source rounded components sum to $21.9B versus $22.0B total."
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 18.8,
          "notes": [
            "+0% Y/Y",
            "6% operating margin",
            "+0pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.2,
          "notes": [
            "(11%) Y/Y",
            "14% operating margin",
            "(6pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
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
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.9,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.9
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.5
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.3
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.2
          }
        ],
        "notes": [
          "Source rounded components sum to $21.0B versus $20.9B total."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
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
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "notes": [
          "3% margin",
          "(1pp) Y/Y",
          "Displayed net-profit bridge differs by $0.1B due to source rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 11 月",
        "revenue": {
          "notes": [
            "同比 (1%)",
            "原图收入分项因四舍五入合计为 $21.9B，总额为 $22.0B。"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +0%",
                "营业利润率 6%",
                "同比 +0 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (11%)",
                "营业利润率 14%",
                "同比 (6 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +1%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ],
            "notes": [
              "原图费用分项因四舍五入合计为 $21.0B，总额为 $20.9B。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)",
              "原图净利润桥因四舍五入存在 $0.1B 差异。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q3-fy24",
    "company": "FedEx",
    "period": "Q3 FY24",
    "periodNote": "Ending Feb. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q3-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.7,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.1,
          "notes": [
            "(2%) Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.7,
          "notes": [
            "+1% Y/Y",
            "11% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.1,
          "notes": [
            "(3%) Y/Y",
            "16% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "(26%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "(17%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.5,
        "notes": [
          "Source rounded expense details sum to $20.4B."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.7
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.3
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.2
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.7,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 2 月",
        "revenue": {
          "notes": [
            "同比下降 2%"
          ],
          "items": [
            {
              "id": "express",
              "label": "联邦快递航空快递",
              "notes": [
                "同比下降 2%",
                "营业利润率 2%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx 陆运",
              "notes": [
                "同比增长 1%",
                "营业利润率 11%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比下降 3%",
                "营业利润率 16%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比下降 26%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比下降 17%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ],
            "notes": [
              "原图四舍五入后的费用明细合计为 $20.4B。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q3-fy23",
    "company": "FedEx",
    "period": "Q3 FY23",
    "periodNote": "Ending Feb. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.2,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.3,
          "notes": [
            "(8%) Y/Y",
            "1% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.7,
          "notes": [
            "(2%) Y/Y",
            "10% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.2,
          "notes": [
            "(3%) Y/Y",
            "18% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
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
        "value": 0,
        "notes": [
          "The source does not separately present cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 21.1,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.4
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.4
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.4
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
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.2,
        "notes": [
          "Bookkeeping value only; not shown in the source."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 2 月",
        "revenue": {
          "notes": [
            "同比下降 6%"
          ],
          "items": [
            {
              "id": "express",
              "label": "联邦快递航空",
              "notes": [
                "同比下降 8%",
                "营业利润率 1%"
              ]
            },
            {
              "id": "ground",
              "label": "联邦快递陆运",
              "notes": [
                "同比下降 2%",
                "营业利润率 10%"
              ]
            },
            {
              "id": "freight",
              "label": "联邦快递货运",
              "notes": [
                "同比下降 3%",
                "营业利润率 18%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比增长 34%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比下降 6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未单独列示收入成本和毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_income",
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
              "仅用于数据对账；原图未展示。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比下降 1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比下降 1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q4-fy25",
    "company": "FedEx",
    "period": "Q4 FY25",
    "periodNote": "Ending May 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.2,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 19,
          "notes": [
            "+1% Y/Y",
            "8% operating margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.3,
          "notes": [
            "(4%) Y/Y",
            "21% operating margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.4,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.7
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.4
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 0.9
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.4
          }
        ],
        "notes": [
          "The displayed cost-detail labels sum to $20.5B because of rounding."
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
          "id": "other_income",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 22.2,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "8% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 5 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +1%",
                "营业利润率 8%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (4%)",
                "营业利润率 21%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ],
            "notes": [
              "图中展示的费用明细因四舍五入合计为 $20.5B。"
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
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q4-fy24",
    "company": "FedEx",
    "period": "Q4 FY24",
    "periodNote": "Ending May 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.1,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.4,
          "notes": [
            "+0% Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.7,
          "notes": [
            "+2% Y/Y",
            "13% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.1,
          "notes": [
            "+2% Y/Y",
            "22% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "(22%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.8,
          "notes": [
            "(6%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ],
        "id": "cost_of_revenue"
      },
      "operatingExpenses": {
        "total": 20.6,
        "notes": [
          "Displayed expense details sum to $20.5B due to rounding."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.7
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.1
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.4
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.2
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
          "id": "other_income",
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
        "label": "Gross profit",
        "value": 22.1,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ],
        "id": "gross_profit"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "7% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "7% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 5 月",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +0%",
                "营业利润率 2%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx 地面运输",
              "notes": [
                "同比 +2%",
                "营业利润率 13%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 +2%",
                "营业利润率 22%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (22%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (6%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "费用明细因四舍五入合计为 $20.5B。"
            ],
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "仅用于数据对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (0pp)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q2-fy23",
    "company": "FedEx",
    "period": "Q2 FY23",
    "periodNote": "Ending November 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/fedex-q2-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.8,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.9,
          "notes": [
            "(6%) Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.4,
          "notes": [
            "+2% Y/Y",
            "7% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.5,
          "notes": [
            "+8% Y/Y",
            "18% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 1,
          "notes": [
            "(18%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 21.6,
        "notes": [
          "Source-rounded details total $21.636B."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.7
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.6
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.9
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.036,
            "valueText": "($36M)",
            "decimals": 3
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.4
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
      "total": 0.01,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.01,
          "valueText": "$10M",
          "decimals": 2
        }
      ]
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.8,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "5% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2022 年 11 月",
        "revenue": {
          "notes": [
            "同比 -3%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 -6%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx Ground（陆运）",
              "notes": [
                "同比 +2%",
                "营业利润率 7%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 +8%",
                "营业利润率 18%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 -12%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 -18%"
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
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 -1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q2-fy24",
    "company": "FedEx",
    "period": "Q2 FY24",
    "periodNote": "Ending Nov. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.2,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 10.3,
          "notes": [
            "(6%) Y/Y",
            "1% operating margin"
          ]
        },
        {
          "id": "ground",
          "label": "FedEx Ground",
          "value": 8.6,
          "notes": [
            "+3% Y/Y",
            "10% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.4,
          "notes": [
            "(4%) Y/Y",
            "21% operating margin"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 0.1,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.8,
          "notes": [
            "(18%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.9,
        "notes": [
          "Displayed expense items sum to $20.8B; the source total is $20.9B due to rounding."
        ],
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.4
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.1
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & Amortization",
            "value": 1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.3
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.9
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.2
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.2,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 11 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 (6%)",
                "营业利润率 1%"
              ]
            },
            {
              "id": "ground",
              "label": "FedEx 陆运",
              "notes": [
                "同比 +3%",
                "营业利润率 10%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (4%)",
                "营业利润率 21%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (18%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "原图费用明细因舍入合计为 $20.8B，原图总额为 $20.9B。"
            ],
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q1-fy25",
    "company": "FedEx",
    "period": "Q1 FY25",
    "periodNote": "Ending Aug. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/fedex-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.6,
      "notes": [
        "(0%) Y/Y",
        "Displayed revenue components sum to $21.5B due to source rounding."
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 18.3,
          "notes": [
            "(1%) Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.3,
          "notes": [
            "(2%) Y/Y",
            "19% operating margin"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "+9% Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 20.5,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 7.8
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.3
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.2
          }
        ],
        "notes": [
          "Displayed expense components sum to $20.6B due to source rounding."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.024,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.024
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.6,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "5% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 8 月",
        "revenue": {
          "notes": [
            "同比 (0%)",
            "原图显示的收入明细合计为 $21.5B，与总额的差异来自舍入。"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 (1%)",
                "营业利润率 5%"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (2%)",
                "营业利润率 19%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 +9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
              }
            ],
            "notes": [
              "原图显示的费用明细合计为 $20.6B，与总额的差异来自舍入。"
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
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
        }
      }
    }
  },
  {
    "key": "fedex-q2-fy26",
    "company": "FedEx",
    "period": "Q2 FY26",
    "periodNote": "Ending Nov. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 23.5,
      "notes": [
        "Displayed revenue components sum to $23.4B versus $23.5B total (source rounding).",
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 20.4,
          "notes": [
            "+8% Y/Y",
            "8% operating margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.1,
          "notes": [
            "(2%) Y/Y",
            "4% operating margin",
            "(10pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "(5%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 22.1,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 8.4
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.9
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 0.9
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.9
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.2
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.5
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 23.5,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 11 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +8%",
                "营业利润率 8%",
                "同比 +2 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (2%)",
                "营业利润率 4%",
                "同比 (10 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (5%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "fedex-q1-fy26",
    "company": "FedEx",
    "period": "Q1 FY26",
    "periodNote": "Ending Aug. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/fedex-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.2,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "express",
          "label": "FedEx Express",
          "value": 19.1,
          "notes": [
            "+4% Y/Y",
            "6% operating margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "freight",
          "label": "FedEx Freight",
          "value": 2.3,
          "notes": [
            "(3%) Y/Y",
            "16% operating margin",
            "(3pp) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "(8%) Y/Y"
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
          "The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 21.1,
        "items": [
          {
            "id": "salaries_benefits",
            "label": "Salaries & benefits",
            "value": 8.1
          },
          {
            "id": "purchased_transportation",
            "label": "Purchased transportation",
            "value": 5.5
          },
          {
            "id": "rentals",
            "label": "Rentals",
            "value": 1.2
          },
          {
            "id": "depreciation_amortization",
            "label": "Depreciation & amortization",
            "value": 1.1
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 0.9
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "business_realignment",
            "label": "Business realignment",
            "value": 0.1
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 3.4
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.2,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "5% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 8 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "express",
              "label": "FedEx Express",
              "notes": [
                "同比 +4%",
                "营业利润率 6%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "freight",
              "label": "FedEx Freight",
              "notes": [
                "同比 (3%)",
                "营业利润率 16%",
                "同比 (3 个百分点)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (8%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "salaries_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "purchased_transportation",
                "label": "外购运输"
              },
              {
                "id": "rentals",
                "label": "租赁费用"
              },
              {
                "id": "depreciation_amortization",
                "label": "折旧与摊销"
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "business_realignment",
                "label": "业务重组"
              },
              {
                "id": "other_operating",
                "label": "其他"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
