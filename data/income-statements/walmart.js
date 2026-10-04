/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "walmart-q3-fy26",
    "company": "Walmart",
    "period": "Q3 FY26",
    "periodNote": "Ending Oct. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/walmart-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 179.5,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 120.7,
          "notes": [
            "+5% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 33.5,
          "notes": [
            "+11% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 23.6,
          "notes": [
            "+3% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership_other",
          "label": "Membership and other",
          "value": 1.7,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 179.5,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 177.8
            },
            {
              "id": "membership_other",
              "label": "Membership and other",
              "value": 1.7
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 134.7
      },
      "operatingExpenses": {
        "total": 38.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 38.1
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
      "total": 2.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 2.1
        }
      ]
    },
    "otherExpenses": {
      "total": 0.6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 44.8,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.7,
        "notes": [
          "4% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.1,
        "notes": [
          "3% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2025 年 10 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "walmart_us",
              "label": "沃尔玛美国",
              "notes": [
                "同比 +5%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "walmart_international",
              "label": "沃尔玛国际",
              "notes": [
                "同比 +11%",
                "营业利润率 4%"
              ]
            },
            {
              "id": "sams_club",
              "label": "山姆会员店",
              "notes": [
                "同比 +3%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "membership_other",
              "label": "会员及其他",
              "notes": [
                "同比 +9%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "reported_revenue_components",
              "label": "已披露收入构成",
              "items": [
                {
                  "id": "net_sales",
                  "label": "净销售额"
                },
                {
                  "id": "membership_other",
                  "label": "会员及其他"
                }
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
                "id": "operating_expenses",
                "label": "运营费用"
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
              "利润率 25%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
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
        }
      }
    }
  },
  {
    "key": "walmart-q4-fy26",
    "company": "Walmart",
    "period": "Q4 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/walmart-q4-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 190.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 129.2,
          "notes": [
            "+5% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 35.9,
          "notes": [
            "+11% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 23.8,
          "notes": [
            "+3% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership_other",
          "label": "Membership and other",
          "value": 1.7,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 143.6
      },
      "operatingExpenses": {
        "total": 38.3,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 38.3
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
      "total": 2.7,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 2.1
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 47,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.7,
        "notes": [
          "5% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.4,
        "notes": [
          "2% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "walmart_us",
              "label": "沃尔玛美国",
              "notes": [
                "同比 +5%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "walmart_international",
              "label": "沃尔玛国际",
              "notes": [
                "同比 +11%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "sams_club",
              "label": "山姆会员店",
              "notes": [
                "同比 +3%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "membership_other",
              "label": "会员及其他",
              "notes": [
                "同比 +1%"
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
                "id": "operating_expenses",
                "label": "运营费用"
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
              "利润率 25%",
              "同比 +0 个百分点"
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
              "利润率 2%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "walmart-q1-fy27",
    "company": "Walmart",
    "period": "Q1 FY27",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/walmart-q1-fy27.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 177.8,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 117.2,
          "notes": [
            "+4% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 35.1,
          "notes": [
            "+18% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 23.4,
          "notes": [
            "+6% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership_other",
          "label": "Membership and other",
          "value": 2.1,
          "notes": [
            "+27% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 133.1
      },
      "operatingExpenses": {
        "total": 37.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 37.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.7
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "otherExpenses": {
      "total": 0.6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 44.7,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.5,
        "notes": [
          "4% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.5,
        "notes": [
          "3% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "walmart_us",
              "label": "沃尔玛美国",
              "notes": [
                "同比 +4%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "walmart_international",
              "label": "沃尔玛国际",
              "notes": [
                "同比 +18%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "sams_club",
              "label": "山姆会员店",
              "notes": [
                "同比 +6%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "membership_other",
              "label": "会员及其他",
              "notes": [
                "同比 +27%"
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
                "id": "operating_expenses",
                "label": "运营费用"
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
              "利润率 25%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "walmart-q2-fy27",
    "company": "Walmart",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q2-fy27.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 187.9,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 125.2,
          "notes": [
            "+4% Y/Y",
            "6% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 35.2,
          "notes": [
            "+13% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 25.7,
          "notes": [
            "+9% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership_other",
          "label": "Membership and other",
          "value": 1.8,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 187.9,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 186.1,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "membership_other",
              "label": "Membership and other",
              "value": 1.8
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 138.8
      },
      "operatingExpenses": {
        "total": 39.8,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 39.8
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.2,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 1.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 49.1,
        "notes": [
          "26% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9.4,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.5,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "walmart_us",
              "label": "沃尔玛美国",
              "notes": [
                "同比 +4%",
                "营业利润率 6%"
              ]
            },
            {
              "id": "walmart_international",
              "label": "沃尔玛国际",
              "notes": [
                "同比 +13%",
                "营业利润率 4%"
              ]
            },
            {
              "id": "sams_club",
              "label": "山姆会员店",
              "notes": [
                "同比 +9%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "membership_other",
              "label": "会员及其他",
              "notes": [
                "同比 +11%"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "reported_revenue_components",
              "label": "已披露收入构成",
              "items": [
                {
                  "id": "net_sales",
                  "label": "净销售额",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "membership_other",
                  "label": "会员及其他"
                }
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
                "id": "operating_expenses",
                "label": "运营费用"
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
              "利润率 26%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    },
    "notes": [
      "Source rounding: gross profit 49.1 vs operating profit 9.4 + operating expenses 39.8; operating profit 9.4 vs net profit 6.5 + tax 1.5 + other expenses 1.2. Source values retained."
    ]
  },
  {
    "key": "walmart-q1-fy26",
    "company": "Walmart",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 165.6,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 112.2,
          "notes": [
            "+3% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 29.8,
          "notes": [
            "(0%) Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 22.1,
          "notes": [
            "+3% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.6,
          "notes": [
            "+4% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 165.6,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 164
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.6
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 124.3
      },
      "operatingExpenses": {
        "total": 34.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 34.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.6
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 41.3,
        "notes": [
          "25% margin",
          "+0.1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.1,
        "notes": [
          "4% margin",
          "+0.1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.6,
        "notes": [
          "3% margin",
          "(0.5pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "4.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4.5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +4.5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1195,
            275,
            148
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "22",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+22%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +22% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1229,
            352,
            40
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "50",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+50%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +50% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1269,
            352,
            40
          ]
        }
      }
    ],
    "notes": [
      "Source rounding: segment net sales sum to 164.1B vs reported Net Sales 164.0B; source values retained."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月"
      }
    }
  },
  {
    "key": "walmart-q4-fy25",
    "company": "Walmart",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 180.6,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 123.5,
          "notes": [
            "+5% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 32.2,
          "notes": [
            "(1%) Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 23.1,
          "notes": [
            "+6% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.7,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 180.6,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 178.8,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.7,
              "notes": [
                "+17% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 136.2
      },
      "operatingExpenses": {
        "total": 36.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 36.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 44.4,
        "notes": [
          "25% margin",
          "+0.6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.9,
        "notes": [
          "4% margin",
          "+0.2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.4,
        "notes": [
          "3% margin",
          "(0.3pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1194,
            275,
            150
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "16",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+16%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1231,
            353,
            42
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "29",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+29%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1275,
            353,
            42
          ]
        }
      }
    ],
    "notes": [
      "Source rounding retained: net sales 178.8B + membership 1.7B = 180.5B vs revenue 180.6B; operating profit 7.9B less tax 1.5B, interest 0.6B and Other 0.3B = 5.5B vs net profit 5.4B."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "advertising",
            "label": "广告",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q1-fy24",
    "company": "Walmart",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 152.3,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 103.9,
          "notes": [
            "+7% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 26.6,
          "notes": [
            "+12% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 20.5,
          "notes": [
            "+5% Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.3,
          "notes": [
            "+1% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 152.3,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 151,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.3,
              "notes": [
                "+1% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 115.3
      },
      "operatingExpenses": {
        "total": 30.8,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 30.8
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 3.6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 3
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 37,
        "notes": [
          "24% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.2,
        "notes": [
          "4% margin",
          "+0.3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "1% margin",
          "(0.2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "7.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+7.4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +7.4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            947,
            211,
            115
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "26",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+26%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            250,
            947,
            211,
            115
          ]
        }
      }
    ],
    "notes": [],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q1-fy25",
    "company": "Walmart",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 161.5,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 108.7,
          "notes": [
            "+5% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 29.8,
          "notes": [
            "+12% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 21.4,
          "notes": [
            "+4% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.6,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 161.5,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 159.9
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.6
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 121.4
      },
      "operatingExpenses": {
        "total": 33.2,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 33.2
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.7
      }
    },
    "otherIncome": {
      "total": 0.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.8
        }
      ]
    },
    "otherExpenses": {
      "total": 0.6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 40.1,
        "notes": [
          "25% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.8,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.3,
        "notes": [
          "3% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            276,
            148
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "21",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+21%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1274,
            354,
            43
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "24",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+24%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1317,
            354,
            43
          ]
        }
      }
    ],
    "notes": [
      "Source rounding retained: gross profit 40.1B vs operating profit 6.8B + operating expenses 33.2B = 40.0B; operating profit 6.8B + Other 0.8B − tax 1.7B − interest 0.6B = 5.3B."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "advertising",
            "label": "广告",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q2-fy24",
    "company": "Walmart",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 161.6,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 110.9,
          "notes": [
            "+5% Y/Y",
            "6% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 27.6,
          "notes": [
            "+13% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 21.8,
          "notes": [
            "(0%) Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.4,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 161.6,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 160.3,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.4,
              "notes": [
                "(9%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 121.9
      },
      "operatingExpenses": {
        "total": 32.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 32.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.7
      }
    },
    "otherIncome": {
      "total": 3.9,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 3.9
        }
      ]
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 39.8,
        "notes": [
          "25% margin",
          "+0.4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.4,
        "notes": [
          "5% margin",
          "+0.1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 8.1,
        "notes": [
          "5% margin",
          "+1.6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "6.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+6.4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +6.4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1235,
            273,
            148
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "24",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+24%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +24% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1235,
            273,
            148
          ]
        }
      }
    ],
    "notes": [
      "Source rounding retained: net sales 160.3B + membership 1.4B = 161.7B vs revenue 161.6B; revenue less cost of sales = 39.7B vs gross profit 39.8B; gross profit less operating expenses = 7.3B vs operating profit 7.4B."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q2-fy25",
    "company": "Walmart",
    "period": "Q2 FY25",
    "periodNote": "Ending Jul. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 169.3,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 115.3,
          "notes": [
            "+4% Y/Y",
            "6% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 29.6,
          "notes": [
            "+7% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 22.9,
          "notes": [
            "+5% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.6,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 169.3,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 167.8,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.6,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 126.8
      },
      "operatingExpenses": {
        "total": 34.6,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 34.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 1.2
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 42.5,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.9,
        "notes": [
          "5% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "3% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "21",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+21%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +21% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1270,
            352,
            46
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "26",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+26%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +26% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1315,
            352,
            46
          ]
        }
      }
    ],
    "notes": [
      "Source rounding retained: Net Sales 167.8B plus Membership 1.6B = 169.4B versus reported revenue 169.3B; operating profit 7.9B less Tax 1.5B, Other 1.2B and Interest 0.6B = 4.6B versus net profit 4.7B."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "advertising",
            "label": "广告",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q2-fy26",
    "company": "Walmart",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 177.4,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 120.9,
          "notes": [
            "+5% Y/Y",
            "6% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 31.2,
          "notes": [
            "+5% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 23.6,
          "notes": [
            "+3% Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "membership_other",
          "label": "Membership and other",
          "value": 1.7,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 177.4,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 175.7,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "membership_other",
              "label": "Membership and other",
              "value": 1.7,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 132.8
      },
      "operatingExpenses": {
        "total": 37.3,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 37.3
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
      "total": 2.7,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 2.7
        }
      ]
    },
    "otherExpenses": {
      "total": 0.7,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.7
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 44.6,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.3,
        "notes": [
          "4% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7.2,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "advertising",
            "label": "广告",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "4.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4.6%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +4.6% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1194,
            310,
            149
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "25",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+25%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1230,
            353,
            43
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "31",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+31%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            353,
            1273,
            353,
            43
          ]
        }
      }
    ],
    "notes": []
  },
  {
    "key": "walmart-q3-fy23",
    "company": "Walmart",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 152.8,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 104.8,
          "notes": [
            "+9% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 25.3,
          "notes": [
            "+7% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam’s Club",
          "value": 21.4,
          "notes": [
            "+13% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.3,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 152.8,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 151.5,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.3
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 115.6
      },
      "operatingExpenses": {
        "total": 34.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 34.5
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
      "total": 4.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        },
        {
          "id": "opioid_settlement",
          "label": "Opioid legal settlement",
          "value": 3.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 37.2,
        "notes": [
          "24% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.7,
        "notes": [
          "2% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -1.8,
        "notes": []
      }
    },
    "notes": [
      "Source rounding retained: operating profit 2.7B minus interest 0.5B, tax 0.3B and settlement 3.6B gives -1.7B versus reported net loss -1.8B."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "items": [
            {
              "id": "sams_club",
              "label": "山姆会员店"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "opioid_settlement",
              "label": "阿片类药物诉讼和解"
            }
          ]
        },
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月"
      }
    }
  },
  {
    "key": "walmart-q3-fy24",
    "company": "Walmart",
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 160.8,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 109.4,
          "notes": [
            "+4% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 28,
          "notes": [
            "+11% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 22,
          "notes": [
            "+3% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.4,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 160.8,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 159.4,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.4,
              "notes": [
                "+2% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 121.2
      },
      "operatingExpenses": {
        "total": 33.4,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 33.4
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
      "total": 5.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 4.8
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 39.6,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.2,
        "notes": [
          "4% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "0% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            276,
            148
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "15",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+15%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1233,
            273,
            148
          ]
        }
      }
    ],
    "notes": [],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q3-fy25",
    "company": "Walmart",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 169.6,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 114.9,
          "notes": [
            "+5% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 30.3,
          "notes": [
            "+8% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 22.9,
          "notes": [
            "+4% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.6,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 169.6,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 168,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.6,
              "notes": [
                "+16% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 127.3
      },
      "operatingExpenses": {
        "total": 35.5,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 35.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 42.2,
        "notes": [
          "25% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.7,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "3% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1194,
            275,
            150
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "27",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+27%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +27% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1231,
            353,
            42
          ]
        }
      },
      {
        "id": "advertising",
        "label": "Advertising",
        "value": "28",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+28%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Advertising +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1275,
            353,
            42
          ]
        }
      }
    ],
    "notes": [
      "Source rounding retained: revenue 169.6B vs gross profit 42.2B + cost of sales 127.3B = 169.5B; segment net sales 168.1B vs Net Sales 168.0B."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "advertising",
            "label": "广告",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "walmart-q4-fy23",
    "company": "Walmart",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 164,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 113.7,
          "notes": [
            "+8% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 27.6,
          "notes": [
            "+2% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 21.4,
          "notes": [
            "+11% Y/Y",
            "2% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.3,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 164,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 162.7,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.3,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 125.4
      },
      "operatingExpenses": {
        "total": 33.1,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 33.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 3.1
      }
    },
    "otherIncome": {
      "total": 3.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 3.8
        }
      ]
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 38.6,
        "notes": [
          "24% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.6,
        "notes": [
          "3% margin",
          "(0.5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.8,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounding retained: gross profit 38.6B versus operating profit 5.6B + operating expenses 33.1B = 38.7B."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月"
      }
    }
  },
  {
    "key": "walmart-q4-fy24",
    "company": "Walmart",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/walmart-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 173.4,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "walmart_us",
          "label": "Walmart US",
          "value": 117.6,
          "notes": [
            "+3% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "walmart_international",
          "label": "Walmart International",
          "value": 32.4,
          "notes": [
            "+18% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "sams_club",
          "label": "Sam's Club",
          "value": 21.9,
          "notes": [
            "+2% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "membership",
          "label": "Membership",
          "value": 1.5,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "reported_revenue_components",
          "label": "Reported revenue components",
          "total": 173.4,
          "items": [
            {
              "id": "net_sales",
              "label": "Net Sales",
              "value": 171.9,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "membership",
              "label": "Membership",
              "value": 1.5,
              "notes": [
                "+13% Y/Y"
              ]
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 131.8
      },
      "operatingExpenses": {
        "total": 34.3,
        "items": [
          {
            "id": "operating_expenses",
            "label": "Operating expenses",
            "value": 34.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.8
      }
    },
    "otherIncome": {
      "total": 0.8,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.8
        }
      ]
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 41.5,
        "notes": [
          "24% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.3,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.7,
        "notes": [
          "3% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "us_comp_sales",
        "label": "US comp sales",
        "value": "4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+4%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "US comp sales +4% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            148
          ]
        }
      },
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "value": "23",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+23%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "E-commerce +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            326,
            1233,
            275,
            148
          ]
        }
      }
    ],
    "notes": [
      "Source period note reads Ending Jan. 2023 despite title Q4 FY24; retained verbatim. Source rounding retained: revenue 173.4B vs gross profit 41.5B + cost of sales 131.8B; gross profit 41.5B vs operating profit 7.3B + operating expenses 34.3B; net profit 5.7B vs operating profit 7.3B + Other income 0.8B - tax 1.8B - interest 0.5B = 5.8B."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "operatingMetrics": [
          {
            "id": "us_comp_sales",
            "label": "美国可比销售额",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ecommerce",
            "label": "电商",
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
