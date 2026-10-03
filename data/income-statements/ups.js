/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "ups-q4-fy25",
    "company": "UPS",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ups-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.5,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "us_domestic_package",
          "label": [
            "US Domestic",
            "Package"
          ],
          "value": 16.8,
          "notes": [
            "(3%) Y/Y",
            "9% operating margin"
          ]
        },
        {
          "id": "international_package",
          "label": [
            "International",
            "Package"
          ],
          "value": 5,
          "notes": [
            "+2% Y/Y",
            "18% operating margin"
          ]
        },
        {
          "id": "supply_chain_solutions",
          "label": [
            "Supply Chain",
            "Solutions"
          ],
          "value": 2.7,
          "notes": [
            "(13%) Y/Y",
            "10% operating margin"
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
        "total": 21.9,
        "items": [
          {
            "id": "comp_benefits",
            "label": "Comp & benefits",
            "value": 13
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "Amortization"
            ],
            "value": 1
          },
          {
            "id": "purchased_transportation",
            "label": [
              "Purchased",
              "transportation"
            ],
            "value": 2.9
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "other_occupancy",
            "label": [
              "Other occupancy"
            ],
            "value": 0.6
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 2.5
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
        "label": "Gross profit",
        "value": 24.5,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "11% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "us_domestic_package",
              "label": [
                "美国国内",
                "包裹"
              ],
              "notes": [
                "同比 (3%)",
                "营业利润率 9%"
              ]
            },
            {
              "id": "international_package",
              "label": [
                "国际",
                "包裹"
              ],
              "notes": [
                "同比 +2%",
                "营业利润率 18%"
              ]
            },
            {
              "id": "supply_chain_solutions",
              "label": [
                "供应链",
                "解决方案"
              ],
              "notes": [
                "同比 (13%)",
                "营业利润率 10%"
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
                "id": "comp_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "depreciation_amortization",
                "label": [
                  "折旧与",
                  "摊销"
                ]
              },
              {
                "id": "purchased_transportation",
                "label": [
                  "外购",
                  "运输"
                ]
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "other_occupancy",
                "label": "其他占用成本"
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
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (1 个百分点)"
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
    "key": "ups-q1-fy26",
    "company": "UPS",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ups-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.2,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "us_domestic_package",
          "label": [
            "US Domestic",
            "Package"
          ],
          "value": 14.1,
          "notes": [
            "(2%) Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "international_package",
          "label": [
            "International",
            "Package"
          ],
          "value": 4.5,
          "notes": [
            "+4% Y/Y",
            "12% operating margin"
          ]
        },
        {
          "id": "supply_chain_solutions",
          "label": [
            "Supply Chain",
            "Solutions"
          ],
          "value": 2.5,
          "notes": [
            "(6%) Y/Y",
            "8% operating margin"
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
        "total": 19.9,
        "items": [
          {
            "id": "comp_benefits",
            "label": "Comp & benefits",
            "value": 11.5
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "Amortization"
            ],
            "value": 1
          },
          {
            "id": "purchased_transportation",
            "label": [
              "Purchased",
              "transportation"
            ],
            "value": 2.8
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "other_occupancy",
            "label": "Other occupancy",
            "value": 0.7
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 2.1
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
        "label": "Gross profit",
        "value": 21.2,
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
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
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
              "id": "us_domestic_package",
              "label": [
                "美国国内",
                "包裹"
              ],
              "notes": [
                "同比 (2%)",
                "营业利润率 4%"
              ]
            },
            {
              "id": "international_package",
              "label": [
                "国际",
                "包裹"
              ],
              "notes": [
                "同比 +4%",
                "营业利润率 12%"
              ]
            },
            {
              "id": "supply_chain_solutions",
              "label": [
                "供应链",
                "解决方案"
              ],
              "notes": [
                "同比 (6%)",
                "营业利润率 8%"
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
                "id": "comp_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "depreciation_amortization",
                "label": [
                  "折旧与",
                  "摊销"
                ]
              },
              {
                "id": "purchased_transportation",
                "label": [
                  "外购",
                  "运输"
                ]
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "other_occupancy",
                "label": "其他占用成本"
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
              "利润率 4%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ups-q2-fy26",
    "company": "UPS",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ups-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.8,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "us_domestic_package",
          "label": [
            "US Domestic",
            "Package"
          ],
          "value": 14.9,
          "notes": [
            "+6% Y/Y",
            "0% operating margin"
          ]
        },
        {
          "id": "international_package",
          "label": [
            "International",
            "Package"
          ],
          "value": 5,
          "notes": [
            "+12% Y/Y",
            "12% operating margin"
          ]
        },
        {
          "id": "supply_chain_solutions",
          "label": [
            "Supply Chain",
            "Solutions"
          ],
          "value": 2.9,
          "notes": [
            "+8% Y/Y",
            "10% operating margin"
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
        "total": 21.9,
        "items": [
          {
            "id": "comp_benefits",
            "label": "Comp & benefits",
            "value": 12.7
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "Amortization"
            ],
            "value": 1
          },
          {
            "id": "purchased_transportation",
            "label": [
              "Purchased",
              "transportation"
            ],
            "value": 3.2
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.7
          },
          {
            "id": "other_occupancy",
            "label": "Other occupancy",
            "value": 0.6
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 2
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
          "id": "other_income",
          "label": "Other",
          "value": 0.1
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
        "label": "Gross profit",
        "value": 22.8,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "4% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "3% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "us_domestic_package",
              "label": [
                "美国国内",
                "包裹"
              ],
              "notes": [
                "同比 +6%",
                "营业利润率 0%"
              ]
            },
            {
              "id": "international_package",
              "label": [
                "国际",
                "包裹"
              ],
              "notes": [
                "同比 +12%",
                "营业利润率 12%"
              ]
            },
            {
              "id": "supply_chain_solutions",
              "label": [
                "供应链",
                "解决方案"
              ],
              "notes": [
                "同比 +8%",
                "营业利润率 10%"
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
                "id": "comp_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "depreciation_amortization",
                "label": [
                  "折旧与",
                  "摊销"
                ]
              },
              {
                "id": "purchased_transportation",
                "label": [
                  "外购",
                  "运输"
                ]
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "other_occupancy",
                "label": "其他占用成本"
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
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ups-q1-fy25",
    "company": "UPS",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/ups-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.5,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "us_domestic_package",
          "label": [
            "US Domestic",
            "Package"
          ],
          "value": 14.5,
          "notes": [
            "+1% Y/Y",
            "7% operating margin"
          ]
        },
        {
          "id": "international_package",
          "label": [
            "International",
            "Package"
          ],
          "value": 4.4,
          "notes": [
            "+3% Y/Y",
            "15% operating margin"
          ]
        },
        {
          "id": "supply_chain_solutions",
          "label": [
            "Supply Chain",
            "Solutions"
          ],
          "value": 2.7,
          "notes": [
            "(15%) Y/Y",
            "2% operating margin"
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
        "total": 19.9,
        "items": [
          {
            "id": "comp_benefits",
            "label": "Comp & benefits",
            "value": 11.8
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.7
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "Amortization"
            ],
            "value": 0.9
          },
          {
            "id": "purchased_transportation",
            "label": [
              "Purchased",
              "transportation"
            ],
            "value": 2.7
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "other_occupancy",
            "label": "Other occupancy",
            "value": 0.6
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 2
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
      "total": 0.2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 21.5,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "8% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "us_domestic_package",
              "label": [
                "美国国内",
                "包裹"
              ],
              "notes": [
                "同比 +1%",
                "营业利润率 7%"
              ]
            },
            {
              "id": "international_package",
              "label": [
                "国际",
                "包裹"
              ],
              "notes": [
                "同比 +3%",
                "营业利润率 15%"
              ]
            },
            {
              "id": "supply_chain_solutions",
              "label": [
                "供应链",
                "解决方案"
              ],
              "notes": [
                "同比 (15%)",
                "营业利润率 2%"
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
                "id": "comp_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "depreciation_amortization",
                "label": [
                  "折旧与",
                  "摊销"
                ]
              },
              {
                "id": "purchased_transportation",
                "label": [
                  "外购",
                  "运输"
                ]
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "other_occupancy",
                "label": "其他占用成本"
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
            "label": "毛利润",
            "notes": [
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ups-q4-fy24",
    "company": "UPS",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ups-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.3,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "us_domestic_package",
          "label": [
            "US Domestic",
            "Package"
          ],
          "value": 17.3,
          "notes": [
            "+2% Y/Y",
            "10% operating margin"
          ]
        },
        {
          "id": "international_package",
          "label": [
            "International",
            "Package"
          ],
          "value": 4.9,
          "notes": [
            "+7% Y/Y",
            "21% operating margin"
          ]
        },
        {
          "id": "supply_chain_solutions",
          "label": [
            "Supply Chain",
            "Solutions"
          ],
          "value": 3.1,
          "notes": [
            "(9%) Y/Y",
            "7% operating margin"
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
        "total": 22.4,
        "items": [
          {
            "id": "comp_benefits",
            "label": "Comp & benefits",
            "value": 13,
            "valueText": "($13.0B)"
          },
          {
            "id": "maintenance",
            "label": "Maintenance",
            "value": 0.8
          },
          {
            "id": "depreciation_amortization",
            "label": [
              "Depreciation &",
              "Amortization"
            ],
            "value": 0.9
          },
          {
            "id": "purchased_transportation",
            "label": [
              "Purchased",
              "transportation"
            ],
            "value": 3.7
          },
          {
            "id": "fuel",
            "label": "Fuel",
            "value": 1.1
          },
          {
            "id": "other_occupancy",
            "label": [
              "Other occupancy"
            ],
            "value": 0.5
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 2.3
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
      "total": 0.8,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.6,
          "valueText": "$0.6B"
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Gross profit",
        "value": 25.3,
        "notes": [
          "Bookkeeping value only; the source does not show gross profit."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "12% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "7% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "us_domestic_package",
              "label": [
                "美国国内",
                "包裹"
              ],
              "notes": [
                "同比 +2%",
                "营业利润率 10%"
              ]
            },
            {
              "id": "international_package",
              "label": [
                "国际",
                "包裹"
              ],
              "notes": [
                "同比 +7%",
                "营业利润率 21%"
              ]
            },
            {
              "id": "supply_chain_solutions",
              "label": [
                "供应链",
                "解决方案"
              ],
              "notes": [
                "同比 (9%)",
                "营业利润率 7%"
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
                "id": "comp_benefits",
                "label": "薪酬与福利"
              },
              {
                "id": "maintenance",
                "label": "维修"
              },
              {
                "id": "depreciation_amortization",
                "label": [
                  "折旧与",
                  "摊销"
                ]
              },
              {
                "id": "purchased_transportation",
                "label": [
                  "外购",
                  "运输"
                ]
              },
              {
                "id": "fuel",
                "label": "燃油"
              },
              {
                "id": "other_occupancy",
                "label": "其他占用成本"
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
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            },
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
              "仅用于 SSOT 对齐；来源图未展示毛利润。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
