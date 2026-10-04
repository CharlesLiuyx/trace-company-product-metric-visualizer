/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "chevron-q3-fy25",
    "company": "Chevron",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/chevron-q3-fy25.png",
    "sourceUrl": "https://www.sec.gov/Archives/edgar/data/93410/000009341025000108/cvx-20250930.htm",
    "roundingTolerance": 0.05,
    "revenue": {
      "total": 49.726,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales and other operating revenues",
          "value": 48.169,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 15.165,
              "notes": [
                "+28% Y/Y",
                "22% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 32.98,
              "notes": [
                "(11%) Y/Y",
                "3% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.024,
              "notes": [
                "(11%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 0.981,
          "notes": [
            "(22%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.576,
          "notes": [
            "(20%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "No separate cost-of-revenue subtotal",
        "value": 0,
        "notes": [
          "The source aggregates all pre-tax deductions into one reported subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 44.312,
        "notes": [
          "Reported as Costs and Other Deductions in Chevron’s consolidated statement of income."
        ],
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Purchased crude oil and products",
            "value": 27.398
          },
          {
            "id": "opex",
            "label": "Operating expenses",
            "value": 7.534
          },
          {
            "id": "sga",
            "label": "Selling, general and administrative expenses",
            "value": 1.524
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "Depreciation, depletion and amortization",
            "value": 5.781
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes other than on income",
            "value": 1.347
          },
          {
            "id": "interest",
            "label": "Interest and debt expense",
            "value": 0.37
          },
          {
            "id": "exploration",
            "label": "Exploration expenses",
            "value": 0.288
          },
          {
            "id": "other_costs",
            "label": "Other components of net periodic benefit costs",
            "value": 0.07
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.801
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
        "label": "Revenue before reported deductions",
        "value": 49.726,
        "notes": [
          "The source does not publish a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Income before income tax expense",
        "value": 5.414,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.613,
        "notes": [
          "7% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +28%",
                    "净利率 22%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (11%)",
                    "净利率 3%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (11%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (22%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (20%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "Chevron 合并利润表中列为“成本及其他扣除项”。"
            ],
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "购入原油和产品"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息及债务费用"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "other_costs",
                "label": "定期福利净成本的其他组成部分"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未公布单独的毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税费用前利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-fy25",
    "company": "Chevron",
    "period": "FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/chevron-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 189,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales and other operating revenues",
          "value": 184.4,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 53.5,
              "notes": [
                "+14% Y/Y",
                "24% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 130.9,
              "notes": [
                "(11%) Y/Y",
                "2% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.1,
              "notes": [
                "(21%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 3,
          "notes": [
            "(35%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other income",
          "value": 1.6,
          "notes": [
            "(67%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "No separate cost-of-revenue subtotal",
        "value": 0,
        "notes": [
          "The source aggregates all pre-tax deductions into one reported subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 169.3,
        "notes": [
          "Reported as Costs and Other Deductions in Chevron’s consolidated statement of income."
        ],
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Purchased crude oil and products",
            "value": 108.2
          },
          {
            "id": "sga",
            "label": "Selling, general and administrative expenses",
            "value": 28
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "Depreciation, depletion and amortization",
            "value": 20.1
          },
          {
            "id": "opex",
            "label": "Operating expenses",
            "value": 5.1
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes other than on income",
            "value": 5.3
          },
          {
            "id": "interest",
            "label": "Interest and debt expense",
            "value": 1.2
          },
          {
            "id": "exploration",
            "label": "Exploration expenses",
            "value": 1.1
          },
          {
            "id": "other_costs",
            "label": "Other costs and deductions",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 7.3
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
        "label": "Revenue before reported deductions",
        "value": 189,
        "notes": [
          "The source does not publish a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Income before income tax expense",
        "value": 19.7,
        "notes": [
          "10% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 12.5,
        "notes": [
          "7% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 (7%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (5%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +14%",
                    "净利率 24%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (11%)",
                    "净利率 2%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (21%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (35%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (67%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "Chevron 合并利润表中列为“成本及其他扣除项”。"
            ],
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "购入原油和产品"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息及债务费用"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "other_costs",
                "label": "其他成本及扣除项"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未公布单独的毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税费用前利润",
            "notes": [
              "利润率 10%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q1-fy26",
    "company": "Chevron",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/chevron-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48.607,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "upstream",
          "label": "Upstream",
          "value": 13.179,
          "notes": [
            "+6% Y/Y",
            "30% net margin"
          ]
        },
        {
          "id": "downstream",
          "label": "Downstream",
          "value": 34.363,
          "notes": [
            "+2% Y/Y",
            "(2%) net margin"
          ]
        },
        {
          "id": "all_other",
          "label": "All other",
          "value": 0.014,
          "notes": [
            "(26%) Y/Y"
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 0.745,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.306,
          "notes": [
            "(56%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "No separate cost-of-revenue subtotal",
        "value": 0,
        "notes": [
          "The source aggregates all pre-tax deductions into one reported subtotal."
        ]
      },
      "operatingExpenses": {
        "total": 44.661,
        "notes": [
          "Reported as Costs and Other Deductions in Chevron’s consolidated statement of income."
        ],
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Purchased crude oil and products",
            "value": 28.265
          },
          {
            "id": "opex",
            "label": "Operating, selling, general and administrative expenses",
            "value": 8.742
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "Depreciation, depletion and amortization",
            "value": 5.808
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes other than on income",
            "value": 1.314
          },
          {
            "id": "interest",
            "label": "Interest and debt expense",
            "value": 0.345
          },
          {
            "id": "exploration",
            "label": "Exploration expenses",
            "value": 0.205
          },
          {
            "label": "Other components of net periodic benefit costs",
            "value": -0.018
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.653
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
        "label": "Revenue before reported deductions",
        "value": 48.607,
        "notes": [
          "The source does not publish a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Income before income tax expense",
        "value": 3.946,
        "notes": [
          "8% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.293,
        "notes": [
          "5% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "upstream",
              "label": "上游业务",
              "notes": [
                "同比 +6%",
                "净利率 30%"
              ]
            },
            {
              "id": "downstream",
              "label": "下游业务",
              "notes": [
                "同比 +2%",
                "净利率 (2%)"
              ]
            },
            {
              "id": "all_other",
              "label": "其他",
              "notes": [
                "同比 (26%)"
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (56%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "Chevron 合并利润表中列为“成本及其他扣除项”。"
            ],
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "购入原油和产品"
              },
              {
                "id": "opex",
                "label": "运营、销售、一般及管理费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息及债务费用"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未公布单独的毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税费用前利润",
            "notes": [
              "利润率 8%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
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
    "key": "chevron-q1-fy25",
    "company": "Chevron",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q1-fy25.png",
    "roundingTolerance": 0.05,
    "revenue": {
      "total": 47.6,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 46.1,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 12.4,
              "notes": [
                "+9% Y/Y",
                "30% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 33.7,
              "notes": [
                "(4%) Y/Y",
                "1% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.019,
              "notes": [
                "(30%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 0.8,
          "notes": [
            "(43%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 42,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 28.6
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 7.6
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4.1
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.3
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.2
          },
          {
            "id": "other_costs",
            "label": "Other",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.1
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
        "label": "Revenue before reported deductions",
        "value": 47.6,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.6,
        "notes": [
          "12% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.5,
        "notes": [
          "7% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +9%",
                    "净利率 30%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (4%)",
                    "净利率 1%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (30%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (43%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (1%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "other_costs",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税前利润",
            "notes": [
              "利润率 12%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q4-fy24",
    "company": "Chevron",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 52.2,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 48.3,
          "notes": [
            "+4% Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 13,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 35.3,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.045,
              "notes": [
                "+67 Y/Y"
              ],
              "valueText": "$45M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 0.7,
          "notes": [
            "(52%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 3.2,
          "notes": [
            "+361% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 46.2,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 30.1
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 7.6
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.6
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.5
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 5
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.1
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.8
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
        "label": "Revenue before reported deductions",
        "value": 52.2,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.1,
        "notes": [
          "12% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 3.3,
        "notes": [
          "6% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 +4%"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 +67"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (52%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 +361%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用（SG&A）"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "id": "pretax_income",
            "label": "所得税前利润",
            "notes": [
              "利润率 12%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "id": "net_income",
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-fy23",
    "company": "Chevron",
    "period": "FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 200.9,
      "notes": [
        "(18%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 196.9,
          "notes": [
            "(16%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 45.7,
              "notes": [
                "(28%) Y/Y",
                "38% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 151,
              "notes": [
                "(12%) Y/Y",
                "4% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.133,
              "notes": [
                "+15% Y/Y"
              ],
              "valueText": "$133M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 5.1,
          "notes": [
            "(40%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": -1.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "No separate cost-of-revenue subtotal",
        "value": 0
      },
      "operatingExpenses": {
        "total": 171.4,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 119.2,
            "notes": []
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 24.9,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.1,
            "notes": []
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.9,
            "notes": []
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 17.3,
            "notes": []
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 4.2,
            "notes": []
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.7,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 8.2,
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
        "label": "Revenue before reported deductions",
        "value": 200.9
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 29.6,
        "notes": [
          "15% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 21.4,
        "notes": [
          "11% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "revenue": {
          "notes": [
            "同比 (18%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (16%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 (28%)",
                    "净利率 38%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (12%)",
                    "净利率 4%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 +15%"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (40%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入扣减",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本",
                "notes": []
              },
              {
                "id": "opex",
                "label": "运营费用",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": []
              },
              {
                "id": "exploration",
                "label": "勘探费用",
                "notes": []
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销",
                "notes": []
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费",
                "notes": []
              },
              {
                "id": "interest",
                "label": "利息",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入"
          },
          "operating": {
            "id": "pretax_income",
            "label": "所得税前利润",
            "notes": [
              "利润率 15%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "id": "net_income",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q1-fy24",
    "company": "Chevron",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 48.7,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 46.6,
          "notes": [
            "(10%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream 46% net margin",
              "value": 11.4,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream 2% net margin",
              "value": 35.1,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.027,
              "notes": [
                "(10%) Y/Y"
              ],
              "valueText": "$27M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 1.4,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.7,
          "notes": [
            "+91% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 40.8,
        "notes": [
          "Source displays rounded components totaling $40.638B against $40.8B deductions; difference $0.162B is within the aggregate displayed rounding intervals."
        ],
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 27.7,
            "notes": []
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 6.5,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1,
            "notes": []
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4.1,
            "notes": []
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.1,
            "notes": []
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "other_costs",
            "label": "Other",
            "value": 0.038,
            "notes": [],
            "valueText": "($38M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.4,
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
        "label": "Revenue before reported deductions",
        "value": 48.7,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.9,
        "notes": [
          "16% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 5.6,
        "notes": [
          "11% margin",
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
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (10%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务净利率 46%",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务净利率 2%",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (10%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 +91%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本",
                "notes": []
              },
              {
                "id": "opex",
                "label": "运营费用",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销管费用（SG&A）",
                "notes": []
              },
              {
                "id": "exploration",
                "label": "勘探费用",
                "notes": []
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销",
                "notes": []
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费",
                "notes": []
              },
              {
                "id": "interest",
                "label": "利息",
                "notes": []
              },
              {
                "id": "other_costs",
                "label": "其他",
                "notes": []
              }
            ],
            "notes": [
              "原图各费用项按显示金额合计为 $40.638B，与总额 $40.8B 相差 $0.162B，处于各项累计舍入范围内。"
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "id": "pretax_income",
            "label": "税前利润",
            "notes": [
              "利润率 16%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "id": "net_income",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q2-fy24",
    "company": "Chevron",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 51.1,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 49.6,
          "notes": [
            "+5% Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 10.5,
              "notes": [
                "+4% Y/Y",
                "42% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 39,
              "notes": [
                "+5% Y/Y",
                "2% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.033,
              "notes": [
                "(8%) Y/Y"
              ],
              "valueText": "$33M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 1.2,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 44.1,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 30.9,
            "notes": []
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 6.6,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1,
            "notes": []
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4,
            "notes": []
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.2,
            "notes": []
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.6
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
        "label": "Revenue before reported deductions",
        "value": 51.1,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7,
        "notes": [
          "14% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.4,
        "notes": [
          "9% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 +5%"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +4%",
                    "净利率 42%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 +5%",
                    "净利率 2%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (8%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (9%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用（SG&A）"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "id": "pretax_income",
            "label": "所得税前利润",
            "notes": [
              "利润率 14%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "id": "net_income",
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q2-fy25",
    "company": "Chevron",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 44.8,
      "notes": [
        "(12%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 44.4,
          "notes": [
            "(10%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 11.1,
              "notes": [
                "+5% Y/Y",
                "25% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 33.3,
              "notes": [
                "(15%) Y/Y",
                "2% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.03,
              "notes": [
                "(9%) Y/Y"
              ],
              "valueText": "$30M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 0.5,
          "notes": [
            "(56%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 40.7,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 26.9
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 7.6
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4.3
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.3
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.3
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.6
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
          "id": "other_income",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "(78%) Y/Y"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue before reported deductions",
        "value": 44.8,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.1,
        "notes": [
          "9% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 2.5,
        "notes": [
          "6% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 (12%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +5%",
                    "净利率 25%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (15%)",
                    "净利率 2%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (9%)"
                  ]
                }
              ],
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (56%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "interest",
                "label": "利息费用"
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税前利润",
            "notes": [
              "利润率 9%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_income",
              "label": "其他支出",
              "notes": [
                "同比 (78%)"
              ]
            }
          ]
        }
      }
    }
  },
  {
    "key": "chevron-q3-fy23",
    "company": "Chevron",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 54.1,
      "notes": [
        "(19%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 51.9,
          "notes": [
            "(18%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 10.9,
              "notes": [
                "(40%) Y/Y",
                "53% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 41,
              "notes": [
                "(9%) Y/Y",
                "4% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.032,
              "notes": [
                "Flat Y/Y"
              ],
              "valueText": "$32M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 1.4,
          "notes": [
            "(46%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.8,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 45.3,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 32.3
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 7.6
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 0.3
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1
          },
          {
            "id": "interest",
            "label": "Interest",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.2
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
        "label": "Revenue before reported deductions",
        "value": 54.1,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 8.7,
        "notes": [
          "16% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 6.6,
        "notes": [
          "12% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 (19%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (18%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 (40%)",
                    "净利率 53%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (9%)",
                    "净利率 4%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比持平"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (46%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 +16%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本"
              },
              {
                "id": "opex",
                "label": "运营费用"
              },
              {
                "id": "exploration",
                "label": "勘探费用"
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销"
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费"
              },
              {
                "id": "interest",
                "label": "利息"
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "label": "所得税前利润",
            "notes": [
              "利润率 16%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "chevron-q3-fy24",
    "company": "Chevron",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/chevron-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 50.7,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "sales_and_other_operating_revenues",
          "label": "Sales & other operating revenues",
          "value": 48.9,
          "notes": [
            "(6%) Y/Y"
          ],
          "children": [
            {
              "id": "upstream",
              "label": "Upstream",
              "value": 11.9,
              "notes": [
                "+9% Y/Y",
                "39% net margin"
              ]
            },
            {
              "id": "downstream",
              "label": "Downstream",
              "value": 37,
              "notes": [
                "(10%) Y/Y",
                "2% net margin"
              ]
            },
            {
              "id": "all_other",
              "label": "All other",
              "value": 0.027,
              "notes": [
                "(16%) Y/Y"
              ],
              "valueText": "$27M"
            }
          ]
        },
        {
          "id": "income_from_equity_affiliates",
          "label": "Income from equity affiliates",
          "value": 1.3,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.5,
          "notes": [
            "(43%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "value": 0,
        "label": "No separate cost-of-revenue subtotal",
        "notes": [
          "The Source groups all pretax deductions together."
        ]
      },
      "operatingExpenses": {
        "total": 44.2,
        "items": [
          {
            "id": "purchased_crude_oil_and_products",
            "label": "Crude Oil & Products",
            "value": 30.5,
            "notes": []
          },
          {
            "id": "opex",
            "label": "Opex",
            "value": 6.7,
            "notes": []
          },
          {
            "id": "depreciation_depletion_amortization",
            "label": "D&A",
            "value": 4.2,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 1.2,
            "notes": []
          },
          {
            "id": "taxes_non_income",
            "label": "Taxes (non income)",
            "value": 1.3,
            "notes": []
          },
          {
            "id": "other_costs",
            "label": "Other",
            "value": 0.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2,
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
        "label": "Revenue before reported deductions",
        "value": 50.7,
        "notes": [
          "The Source does not show a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5,
        "notes": [
          "13% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 4.4,
        "notes": [
          "9% margin",
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
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "sales_and_other_operating_revenues",
              "label": "销售及其他营业收入",
              "notes": [
                "同比 (6%)"
              ],
              "children": [
                {
                  "id": "upstream",
                  "label": "上游业务",
                  "notes": [
                    "同比 +9%",
                    "净利率 39%"
                  ]
                },
                {
                  "id": "downstream",
                  "label": "下游业务",
                  "notes": [
                    "同比 (10%)",
                    "净利率 2%"
                  ]
                },
                {
                  "id": "all_other",
                  "label": "其他",
                  "notes": [
                    "同比 (16%)"
                  ]
                }
              ]
            },
            {
              "id": "income_from_equity_affiliates",
              "label": "权益法被投资单位收益",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": [
                "同比 (43%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "未单列销售成本小计",
            "notes": [
              "来源将所有税前扣除项合并为一个小计。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchased_crude_oil_and_products",
                "label": "原油及产品采购成本",
                "notes": []
              },
              {
                "id": "opex",
                "label": "运营费用",
                "notes": []
              },
              {
                "id": "depreciation_depletion_amortization",
                "label": "折旧、耗竭及摊销",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用（SG&A）",
                "notes": []
              },
              {
                "id": "taxes_non_income",
                "label": "非所得税税费",
                "notes": []
              },
              {
                "id": "other_costs",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税",
            "notes": []
          }
        },
        "profit": {
          "gross": {
            "label": "扣除项前收入",
            "notes": [
              "来源未单列毛利润小计。"
            ]
          },
          "operating": {
            "id": "pretax_income",
            "label": "所得税前利润",
            "notes": [
              "利润率 13%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_income",
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
