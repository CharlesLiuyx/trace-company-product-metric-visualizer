/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "ferrari-q2-fy26",
    "company": "Ferrari",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-q2-fy26.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.012,
            "notes": [
              "€12M"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.004,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.004,
          "notes": [
            "€4M"
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.004,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.004,
          "notes": [
            "€4M"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1,
        "notes": [
          "53% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "31% margin",
          "+0pp Y/Y",
          "Gross profit plus €4M investments less €0.4B operating expenses sums to €0.604B; the source chart reports €0.6B after rounding."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "24% margin",
          "+0pp Y/Y",
          "Operating profit less tax and €4M finance expense sums to €0.496B; the source chart reports €0.5B after rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +33%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 11%",
                  "同比（1 个百分点）"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": [
                  "€12M"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "investments",
              "label": "投资收益",
              "notes": [
                "€4M"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "finance",
              "label": "财务费用",
              "notes": [
                "€4M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 53%",
              "同比（0 个百分点）"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 31%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q1-fy26",
    "company": "Ferrari",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ferrari-q1-fy26.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.6,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.003,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.003,
          "notes": [
            "€3M"
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.011,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.011,
          "notes": [
            "€11M"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1,
        "notes": [
          "52% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "30% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "22% margin",
          "(1pp) Y/Y",
          "Operating profit plus €3M investments less tax and finance expense sums to €0.392B; the source chart reports €0.4B net profit after rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +16%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "investments",
              "label": "投资收益",
              "notes": [
                "€3M"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "finance",
              "label": "财务费用",
              "notes": [
                "€11M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比（0 个百分点）"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比（1 个百分点）"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比（1 个百分点）"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q4-fy25",
    "company": "Ferrari",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/ferrari-q4-fy25.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.5,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+31% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "notes": [
              "10% of revenue",
              "+0pp Y/Y"
            ]
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.012,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.012,
          "notes": [
            "€12M"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.9,
        "notes": [
          "52% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "28% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "21% margin",
          "(1pp) Y/Y",
          "Operating profit less tax and finance expense sums to €0.388B; the source chart reports €0.4B net profit after rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +31%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 +0 个百分点"
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
              "id": "finance",
              "label": "财务费用",
              "notes": [
                "€12M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q3-fy25",
    "company": "Ferrari",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/ferrari-q3-fy25.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.5,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+9% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.01,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.01,
          "notes": [
            "€10M"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.9,
        "notes": [
          "50% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "28% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "22% margin",
          "(1pp) Y/Y",
          "Operating profit less tax and finance expense sums to €0.39B; the source chart reports €0.4B net profit after rounding."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +9%"
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
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 13%",
                  "同比（0 个百分点）"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
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
              "id": "finance",
              "label": "财务费用",
              "notes": [
                "€10M"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比（1 个百分点）"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q1-fy25",
    "company": "Ferrari",
    "period": "Q1 FY25",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-q1-fy25.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.5,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.1,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
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
        "value": 0.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.001,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.001,
          "notes": [
            "€1M; source guide enters operating expenses."
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.014,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.014
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.9,
        "notes": [
          "52% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "30% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "23% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounded amounts retained: operating-expense items sum to €0.312B versus €0.4B total; net bridge gives €0.386B versus €0.4B reported."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +32%"
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
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 13%",
                  "同比 -2pp"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 8%",
                  "同比 +0pp"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "investments",
              "label": "投资",
              "notes": [
                "€1M；原图引导线接入营业费用。"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "finance",
              "label": "财务费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 +1pp"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +2pp"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +1pp"
            ]
          }
        },
        "notes": [
          "保留原图舍入金额：营业费用明细合计 €0.312B，总额为 €0.4B；净利润桥接结果为 €0.386B，图示为 €0.4B。"
        ]
      }
    }
  },
  {
    "key": "ferrari-q4-fy24",
    "company": "Ferrari",
    "period": "Q4 FY24",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.7,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.5,
          "valueText": "€1.5B",
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "valueText": "€0.2B",
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "valueText": "€0.1B",
          "notes": [
            "(4%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.9,
        "valueText": "(€0.9B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "valueText": "(€0.2B)",
            "notes": [
              "14% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "valueText": "(€0.2B)",
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.002,
            "valueText": "(€2M)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "valueText": "(€0.1B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.004,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.004,
          "valueText": "€4M"
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
        "value": 0.9,
        "valueText": "€0.9B",
        "notes": [
          "50% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "valueText": "€0.5B",
        "notes": [
          "27% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "valueText": "€0.4B",
        "notes": [
          "22% margin",
          "+3pp Y/Y"
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
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 (4%)"
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
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 14%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 9%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q3-fy24",
    "company": "Ferrari",
    "period": "Q3 FY24",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.6,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.4,
          "valueText": "€1.4B",
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "valueText": "€0.2B",
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "valueText": "€0.1B",
          "notes": [
            "+1% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "valueText": "(€0.2B)",
            "notes": [
              "13% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.1,
            "valueText": "(€0.1B)",
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.006,
            "valueText": "(€6M)",
            "notes": []
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.8,
        "valueText": "(€0.8B)",
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "valueText": "(€0.1B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.002,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.002,
          "valueText": "(€2M)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.8,
        "valueText": "€0.8B",
        "notes": [
          "50% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "valueText": "€0.5B",
        "notes": [
          "28% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "valueText": "€0.4B",
        "notes": [
          "23% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounded amounts retained: revenue components sum to €1.7B against €1.6B total; operating expense components sum to €0.306B against €0.4B total."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "notes": [
          "保留原图舍入金额：收入明细合计 €1.7B，总额 €1.6B；营业费用明细合计 €0.306B，总额 €0.4B。"
        ],
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +20%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 13%"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "id": "finance",
              "label": "财务费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-h1-fy24",
    "company": "Ferrari",
    "period": "H1 FY24",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-h1-fy24.png",
    "roundingTolerance": 0.11,
    "revenue": {
      "total": 3.3,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 2.9,
          "valueText": "€2.9B",
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.3,
          "valueText": "€0.3B",
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "valueText": "€0.1B",
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
        "value": 1.6,
        "valueText": "(€1.6B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.7,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.4,
            "valueText": "(€0.4B)",
            "notes": [
              "13% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.3,
            "valueText": "(€0.3B)",
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.006,
            "valueText": "(€6M)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "valueText": "(€0.2B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.001,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.001,
          "valueText": "(€1M)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.7,
        "valueText": "€1.7B",
        "notes": [
          "50% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "valueText": "€1.0B",
        "notes": [
          "29% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "valueText": "€0.8B",
        "notes": [
          "23% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounded values retained: operating-expense components total €0.706B versus €0.7B; operating profit less tax and finance gives €0.799B versus €0.8B net profit."
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年上半年",
        "notes": [
          "保留原图舍入金额：营业费用明细合计 €0.706B，总额为 €0.7B；净利润桥接为 €0.799B，图示为 €0.8B。"
        ],
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +2%"
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
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 13%"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "id": "finance",
              "label": "财务费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比（0 个百分点）"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "ferrari-q2-fy25",
    "company": "Ferrari",
    "period": "Q2 FY25",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-q2-fy25.png",
    "roundingTolerance": 0.11,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 1.5,
          "notes": [
            "+2% Y/Y"
          ],
          "valueText": "€1.5B"
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.2,
          "notes": [
            "+22% Y/Y"
          ],
          "valueText": "€0.2B"
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "+8% Y/Y"
          ],
          "valueText": "€0.1B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 0.8,
        "valueText": "(€0.8B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 0.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ],
            "valueText": "(€0.2B)"
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.2,
            "notes": [
              "9% of revenue",
              "+1pp Y/Y"
            ],
            "valueText": "(€0.2B)"
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.006,
            "notes": [],
            "valueText": "(€6M)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "valueText": "(€0.1B)",
        "notes": []
      }
    },
    "operatingOtherIncome": {
      "total": 0.002,
      "items": [
        {
          "id": "investments",
          "label": "Investments",
          "value": 0.002,
          "notes": [],
          "valueText": "€2M"
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.007,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.007,
          "valueText": "(€7M)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 0.9,
        "notes": [
          "53% margin",
          "+3pp Y/Y"
        ],
        "valueText": "€0.9B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "31% margin",
          "+1pp Y/Y"
        ],
        "valueText": "€0.6B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.4,
        "notes": [
          "24% margin",
          "(0pp) Y/Y"
        ],
        "valueText": "€0.4B"
      }
    },
    "notes": [
      "Source rounded values retained: revenue less cost of sales gives €1.0B versus €0.9B gross; operating profit less tax and finance gives €0.493B versus €0.4B net."
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 13%",
                  "同比 +1pp"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 9%",
                  "同比 +1pp"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "investments",
              "label": "投资",
              "notes": []
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "finance",
              "label": "财务费用",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 53%",
              "同比 +3pp"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 31%",
              "同比 +1pp"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 (0pp)"
            ]
          }
        },
        "notes": [
          "保留原图舍入值：收入减销售成本为 €1.0B，图示毛利润为 €0.9B；营业利润减税费与财务费用为 €0.493B，图示净利润为 €0.4B。"
        ]
      }
    }
  },
  {
    "key": "ferrari-fy23",
    "company": "Ferrari",
    "period": "FY23",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/ferrari-fy23.png",
    "roundingTolerance": 0.16,
    "revenue": {
      "total": 6,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "cars_and_spare_parts",
          "label": "Cars and spare parts",
          "value": 5.1,
          "valueText": "€5.1B",
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "sponsorships_commercial_brands",
          "label": "Sponsorships, commercial & brands",
          "value": 0.6,
          "valueText": "€0.6B",
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "engines",
          "label": "Engines",
          "value": 0.1,
          "valueText": "€0.1B",
          "notes": [
            "(18%) Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.2,
          "valueText": "€0.2B",
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
        "value": 3,
        "valueText": "(€3.0B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.9,
            "valueText": "(€0.9B)",
            "notes": [
              "15% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 0.5,
            "valueText": "(€0.5B)",
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.018,
            "valueText": "(€18M)",
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4,
        "valueText": "(€0.4B)",
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.015,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 0.015,
          "valueText": "(€15M)",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3,
        "valueText": "€3.0B",
        "notes": [
          "50% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "valueText": "€1.6B",
        "notes": [
          "27% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "valueText": "€1.3B",
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounded values retained. Other expenses shown as €0.0B recovered to €18M from Ferrari FY2023 official results. Revenue items sum to €6.0B; operating-expense items sum to €1.418B; net bridge yields €1.185B versus displayed €1.3B. Original totals are not replaced."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "cars_and_spare_parts",
              "label": "汽车及零部件",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "sponsorships_commercial_brands",
              "label": "赞助、商业与品牌",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "engines",
              "label": "发动机",
              "notes": [
                "同比 (18%)"
              ]
            },
            {
              "id": "other",
              "label": "其他",
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
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 15%"
                ]
              },
              {
                "id": "sga",
                "label": "销管 SG&A",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他",
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
              "id": "finance",
              "label": "财务费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          }
        },
        "notes": [
          "保留原图舍入值。原图其他费用 €0.0B 依据法拉利 2023 财年官方业绩恢复为 €18M。收入明细合计 €6.0B；营业费用明细合计 €1.418B；净利润桥接为 €1.185B，原图显示 €1.3B。"
        ]
      }
    }
  }
]);
})(window);
