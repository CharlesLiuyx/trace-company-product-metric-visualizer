/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "cisco-q3-fy26",
    "company": "Cisco",
    "period": "Q3 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.841,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "networking",
          "label": "Networking",
          "value": 8.815,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "security",
          "label": "Security",
          "value": 2.008,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "collaboration",
          "label": "Collaboration",
          "value": 1.024,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "observability",
          "label": "Observability",
          "value": 0.269,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.724,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.761,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4.613,
            "notes": [
              "62% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.148,
            "notes": [
              "69% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.12,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.855
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.377
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.661
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.228
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.666
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
        "value": 10.08,
        "notes": [
          "64% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.96,
        "notes": [
          "25% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.373,
        "notes": [
          "21% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "networking",
              "label": "网络",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "security",
              "label": "安全",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "collaboration",
              "label": "协作",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "observability",
              "label": "可观测性",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (1%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 62%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 69%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
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
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q2-fy26",
    "company": "Cisco",
    "period": "Q2 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.349,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "networking",
          "label": "Networking",
          "value": 8.294,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "security",
          "label": "Security",
          "value": 2.018,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "collaboration",
          "label": "Collaboration",
          "value": 1.054,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "observability",
          "label": "Observability",
          "value": 0.277,
          "notes": [
            "Flat Y/Y"
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.707,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.377,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4.205,
            "notes": [
              "64% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.172,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.191,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.881
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.355
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.688
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.231
          },
          {
            "id": "restructuring_other",
            "label": "Other",
            "value": 0.036,
            "notes": [
              "Restructuring and other charges"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.471
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.135,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.135,
          "notes": [
            "Net interest and other expense"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.972,
        "notes": [
          "65% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.781,
        "notes": [
          "25% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.175,
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "networking",
              "label": "网络",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "security",
              "label": "安全",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "collaboration",
              "label": "协作",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "observability",
              "label": "可观测性",
              "notes": [
                "同比持平"
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 (1%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 64%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring_other",
                "label": "其他",
                "notes": [
                  "重组及其他费用"
                ]
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
              "label": "其他",
              "notes": [
                "净利息及其他费用"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q1-fy26",
    "company": "Cisco",
    "period": "Q1 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.883,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 11.077,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 7.768,
              "notes": [
                "+15% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 1.98,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1.055,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.274,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.806,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.138,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.934,
            "notes": [
              "64% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.204,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.382,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.871
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.4
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.733
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.231
          },
          {
            "id": "restructuring_other",
            "label": "Other",
            "value": 0.147,
            "notes": [
              "Restructuring and other charges"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.531
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
        "value": 9.745,
        "notes": [
          "65% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.363,
        "notes": [
          "23% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.86,
        "notes": [
          "19% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 +15%"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 64%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "restructuring_other",
                "label": "其他",
                "notes": [
                  "重组及其他费用"
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
              "利润率 65%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q4-fy26",
    "company": "Cisco",
    "period": "Q4 FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.3,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 13.5,
          "notes": [
            "+24% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 9.8,
              "notes": [
                "+28% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 2.2,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1.2,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.3,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.8,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 6.2,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 5,
            "notes": [
              "63% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "69% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 3,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.5,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
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
      "total": 0.7,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.7,
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
        "value": 11.1,
        "notes": [
          "64% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.3,
        "notes": [
          "25% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.9,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +24%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 +28%"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +0%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 63%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 69%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "利润率 64%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q1-fy24",
    "company": "Cisco",
    "period": "Q1 FY24",
    "periodNote": "Ending Sept. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.7,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 11.1,
          "notes": [
            "+9% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 8.8,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 1,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1.1,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.2,
              "notes": [
                "+21% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.5,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.1,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4,
            "notes": [
              "62% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "65% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.5,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.9,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
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
        "label": "Gross profit",
        "value": 9.6,
        "notes": [
          "65% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.3,
        "notes": [
          "29% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "25% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +9%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +21%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 62%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 65%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "利润率 65%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q1-fy25",
    "company": "Cisco",
    "period": "Q1 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 13.8,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 10.1,
          "notes": [
            "(9%) Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 6.8,
              "notes": [
                "(23%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 2,
              "notes": [
                "+100% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1.1,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.3,
              "notes": [
                "+36% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.7,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": [
          "Cost of",
          "sales"
        ],
        "value": 4.7,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.5,
            "notes": [
              "65% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.8,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.3,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": -0.4,
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
          "id": "other_expense",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.1,
        "notes": [
          "66% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.4,
        "notes": [
          "17% margin",
          "(12pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.7,
        "notes": [
          "20% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 10 月",
        "revenue": {
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 (9%)"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 (23%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +100%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +36%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%"
              ]
            }
          ],
          "notes": [
            "同比 (6%)"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": [
              "销售",
              "成本"
            ],
            "notes": [],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 65%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "利润率 66%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (12 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q2-fy23",
    "company": "Cisco",
    "period": "Q2 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 13.6,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 10.1,
          "notes": [
            "+9% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Secure, Agile Networks",
              "value": 6.7,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "internet",
              "label": "Internet for the Future",
              "value": 1.3,
              "notes": [
                "+22% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "End-to-End security",
              "value": 0.9,
              "notes": [
                "(29%) Y/Y"
              ]
            },
            {
              "id": "applications",
              "label": "Optimized Applications",
              "value": 0.2,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 0.003,
              "notes": []
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.4,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.2,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4,
            "notes": [
              "60% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.1,
            "notes": [
              "67% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.4,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.9,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.6,
        "notes": []
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.4,
        "notes": [
          "62% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.3,
        "notes": [
          "24% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.8,
        "notes": [
          "20% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +9%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": [
                    "安全、",
                    "敏捷网络"
                  ],
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "internet",
                  "label": [
                    "未来",
                    "互联网"
                  ],
                  "notes": [
                    "同比 +22%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "security",
                  "label": [
                    "端到端",
                    "安全"
                  ],
                  "notes": [
                    "同比 (29%)"
                  ]
                },
                {
                  "id": "applications",
                  "label": [
                    "优化",
                    "应用"
                  ],
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": []
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +2%"
              ]
            }
          ],
          "notes": [
            "同比 +7%"
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": [
              "销售",
              "成本"
            ],
            "notes": [],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 60%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 67%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 62%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q2-fy24",
    "company": "Cisco",
    "period": "Q2 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.8,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 9.2,
          "notes": [
            "(9%) Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 7.1,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 1,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.2,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.6,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.6,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.4,
            "notes": [
              "63% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.1,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.5,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.9,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.012,
            "notes": []
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.2,
        "notes": [
          "64% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.1,
        "notes": [
          "24% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.6,
        "notes": [
          "21% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 1 月",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 (9%)"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 (12%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +16%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 63%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
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
              "利润率 64%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q2-fy25",
    "company": "Cisco",
    "period": "Q2 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 10.2,
          "valueText": "$10.2B",
          "notes": [
            "+11% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 6.8,
              "valueText": "$6.8B",
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 2.1,
              "valueText": "$2.1B",
              "notes": [
                "+117% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "valueText": "$1.0B",
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.3,
              "valueText": "$0.3B",
              "notes": [
                "+47% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.8,
          "valueText": "$3.8B",
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": [
          "Cost of",
          "sales"
        ],
        "value": 4.9,
        "valueText": "($4.9B)",
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.7,
            "valueText": "($3.7B)",
            "notes": [
              "64% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "valueText": "($1.2B)",
            "notes": [
              "69% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.7,
            "valueText": "($2.7B)",
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.3,
            "valueText": "($2.3B)",
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8,
            "valueText": "($0.8B)",
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5,
        "valueText": "($0.5B)",
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
          "id": "other_expense",
          "label": "Other",
          "value": 0.2,
          "valueText": "($0.2B)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.1,
        "valueText": "$9.1B",
        "notes": [
          "65% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.1,
        "valueText": "$3.1B",
        "notes": [
          "22% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "valueText": "$2.4B",
        "notes": [
          "17% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +11%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +117%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +47%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": [
              "销售",
              "成本"
            ],
            "notes": [],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 64%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 69%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
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
              "利润率 65%",
              "同比 +1pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q3-fy23",
    "company": "Cisco",
    "period": "Q3 FY23",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.6,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 11.1,
          "notes": [
            "+17% Y/Y"
          ],
          "children": [
            {
              "id": "secure_networks",
              "label": "Secure, Agile Networks",
              "value": 7.6,
              "notes": [
                "+29% Y/Y"
              ]
            },
            {
              "id": "internet",
              "label": "Internet for the Future",
              "value": 1.4,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "(13%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "End-to-End security",
              "value": 1,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "applications",
              "label": "Optimized Applications",
              "value": 0.2,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 0.003,
              "notes": []
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.5,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.3,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4.1,
            "notes": [
              "63% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "65% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.5,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.011,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.011,
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
        "value": 9.2,
        "notes": [
          "63% margin",
          "Flat Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.9,
        "notes": [
          "27% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.2,
        "notes": [
          "22% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +17%"
              ],
              "children": [
                {
                  "id": "secure_networks",
                  "label": "安全敏捷网络",
                  "notes": [
                    "同比 +29%"
                  ]
                },
                {
                  "id": "internet",
                  "label": "未来互联网",
                  "notes": [
                    "同比 +5%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 (13%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "端到端安全",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "applications",
                  "label": "优化应用",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": []
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": [],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 63%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 65%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "amortization",
                "label": "摊销",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "利润率 63%",
              "同比持平"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 4 月"
      }
    }
  },
  {
    "key": "cisco-q3-fy24",
    "company": "Cisco",
    "period": "Q3 FY24",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.7,
      "notes": [
        "(13%) Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 9,
          "notes": [
            "(19%) Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 6.5,
              "notes": [
                "(27%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 1.3,
              "notes": [
                "+36% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.2,
              "notes": [
                "+27% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.7,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.4,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.3,
            "notes": [
              "63% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.1,
            "notes": [
              "69% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.6
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.9
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "other_expense",
            "label": "Other",
            "value": 0.5
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3
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
      "total": 0.044,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.044,
          "valueText": "$44M"
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
        "value": 8.3,
        "notes": [
          "65% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.2,
        "notes": [
          "17% margin",
          "(10pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "15% margin",
          "(7pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (13%)"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 (19%)"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 (27%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +36%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +27%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 63%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 69%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "other_expense",
                "label": "其他"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (10 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (7 个百分点)"
            ]
          }
        },
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 4 月"
      }
    }
  },
  {
    "key": "cisco-q3-fy25",
    "company": "Cisco",
    "period": "Q3 FY25",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q3-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 14.1,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 10.4,
          "notes": [
            "+15% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 7.1,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 2,
              "notes": [
                "+54% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.3,
              "notes": [
                "+24% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.8,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": [
          "Cost of",
          "sales"
        ],
        "value": 4.9,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.7,
            "notes": [
              "64% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "69% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.7
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.3
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.2
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.034
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.3,
        "notes": [
          "66% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "23% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "18% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 4 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +15%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +54%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +24%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": [
              "销售",
              "成本"
            ],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 64%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 69%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "other_opex",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q4-fy23",
    "company": "Cisco",
    "period": "Q4 FY23",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.2,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 11.6,
          "notes": [
            "+20% Y/Y"
          ],
          "children": [
            {
              "id": "secure_agile_networks",
              "label": "Secure, Agile Networks",
              "value": 8.1,
              "notes": [
                "+33% Y/Y"
              ]
            },
            {
              "id": "internet_future",
              "label": "Internet for the Future",
              "value": 1.3,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "End-to-End security",
              "value": 1,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "optimized_applications",
              "label": "Optimized Applications",
              "value": 0.2,
              "notes": [
                "+16% Y/Y"
              ]
            },
            {
              "id": "other_products",
              "label": "Other",
              "value": 0.002,
              "notes": []
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.6,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.5,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 4.3,
            "notes": [
              "64% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "66% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.6,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.2,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.1,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5,
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
        "label": "Gross profit",
        "value": 9.7,
        "notes": [
          "64% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.3,
        "notes": [
          "28% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4,
        "notes": [
          "26% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +20%"
              ],
              "children": [
                {
                  "id": "secure_agile_networks",
                  "label": "安全、敏捷网络",
                  "notes": [
                    "同比 +33%"
                  ]
                },
                {
                  "id": "internet_future",
                  "label": "未来互联网",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 (12%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "端到端安全",
                  "notes": [
                    "同比 (12%)"
                  ]
                },
                {
                  "id": "optimized_applications",
                  "label": "优化应用",
                  "notes": [
                    "同比 +16%"
                  ]
                },
                {
                  "id": "other_products",
                  "label": "其他",
                  "notes": []
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +4%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": [],
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 64%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 66%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 64%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +5 个百分点"
            ]
          }
        },
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 6 月"
      }
    }
  },
  {
    "key": "cisco-q4-fy24",
    "company": "Cisco",
    "period": "Q4 FY24",
    "periodNote": "Ending Jul. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/cisco-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 13.6,
      "notes": [
        "(10%) Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 9.9,
          "notes": [
            "(15%) Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 6.8,
              "notes": [
                "(28%) Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 1.8,
              "notes": [
                "+81% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.2,
              "notes": [
                "+41% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.8,
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
        "value": 4.9,
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.6,
            "notes": [
              "63% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.8
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.2
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.8
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
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
      "total": 0.2,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.8,
        "notes": [
          "65% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "19% margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.2,
        "notes": [
          "16% margin",
          "(10pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 7 月",
        "revenue": {
          "notes": [
            "同比 (10%)"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 (15%)"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 (28%)"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +81%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +41%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 63%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "amortization",
                "label": "摊销"
              },
              {
                "id": "other_opex",
                "label": "其他"
              }
            ]
          },
          "tax": {
            "id": "tax",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 (9pp)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比 (10pp)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "cisco-q4-fy25",
    "company": "Cisco",
    "period": "Q4 FY25",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/cisco-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 14.7,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "products",
          "label": "Products",
          "value": 10.9,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "networking",
              "label": "Networking",
              "value": 7.6,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "security",
              "label": "Security",
              "value": 2,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "collaboration",
              "label": "Collaboration",
              "value": 1,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "observability",
              "label": "Observability",
              "value": 0.3,
              "notes": [
                "+4% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "services",
          "label": "Services",
          "value": 3.8,
          "notes": [
            "+0% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5,
        "notes": [],
        "items": [
          {
            "id": "product_cost_of_sales",
            "label": "Products",
            "value": 3.8,
            "notes": [
              "65% gross margin"
            ]
          },
          {
            "id": "services_cost_of_sales",
            "label": "Services",
            "value": 1.2,
            "notes": [
              "68% gross margin"
            ]
          }
        ]
      },
      "operatingExpenses": {
        "total": 6.2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.8,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.7,
            "notes": []
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.035,
            "notes": []
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 0.3,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5,
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
          "id": "other_expense",
          "label": "Other",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.6,
        "notes": [
          "66% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.4,
        "notes": [
          "23% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.8,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 7 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "products",
              "label": "产品",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "networking",
                  "label": "网络",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "security",
                  "label": "安全",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "collaboration",
                  "label": "协作",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "observability",
                  "label": "可观测性",
                  "notes": [
                    "同比 +4%"
                  ]
                }
              ]
            },
            {
              "id": "services",
              "label": "服务",
              "notes": [
                "同比 +0%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "items": [
              {
                "id": "product_cost_of_sales",
                "label": "产品",
                "notes": [
                  "毛利率 65%"
                ]
              },
              {
                "id": "services_cost_of_sales",
                "label": "服务",
                "notes": [
                  "毛利率 68%"
                ]
              }
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": []
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "利润率 66%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 23%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
