/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "kering-fy25",
    "company": "Kering",
    "period": "FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 14.7,
      "notes": [
        "(13%) Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 6,
          "notes": [
            "(22%) Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 2.6,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 1.7,
          "notes": [
            "(0%) Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 2.9,
          "notes": [
            "(10%) Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 1.6,
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
        "value": 4
      },
      "operatingExpenses": {
        "total": 9,
        "items": [
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 6.3,
            "notes": [
              "43% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 2.8,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "operatingOtherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.2,
          "notes": [
            "Source image displays $0.2B despite the euro reporting currency."
          ]
        }
      ]
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
        "value": 10.7,
        "notes": [
          "73% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "11% of revenue",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.039,
        "notes": [
          "0% of revenue",
          "(6pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 (13%)"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci",
              "notes": [
                "同比 (22%)"
              ]
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta",
              "notes": [
                "同比 (0%)"
              ]
            },
            {
              "id": "other_houses",
              "label": "其他品牌",
              "notes": [
                "同比 (10%)"
              ]
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务",
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
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 43%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "源图金额显示为 $0.2B，但报告币种为欧元。"
              ]
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
              "占收入 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 11%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 0%",
              "同比 (6 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-h1-fy26",
    "company": "Kering",
    "period": "H1 FY26",
    "periodNote": "Ending June 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-h1-fy26.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 7.2,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "fashion_leather_goods",
          "label": "Fashion & Leather Goods",
          "value": 5.8,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "kering_jewelry",
          "label": "Kering Jewelry",
          "value": 0.5,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "kering_eyewear",
          "label": "Kering Eyewear",
          "value": 1,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "corporate_other",
          "label": "Corporate & Other",
          "value": 0.1,
          "notes": [
            "(7%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 2.9,
            "notes": [
              "41% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 1.3,
            "notes": [
              "18% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 0.2,
            "notes": [
              "3% of revenue",
              "+3pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "operatingOtherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.1,
          "notes": [
            "Source image displays $0.1B despite the euro reporting currency."
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.2,
        "notes": [
          "72% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "10% of revenue",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "3% of revenue",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年上半年",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "fashion_leather_goods",
              "label": "时装与皮具业务",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "kering_jewelry",
              "label": "开云珠宝",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "kering_eyewear",
              "label": "开云眼镜",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "corporate_other",
              "label": "公司业务及其他",
              "notes": [
                "同比 (7%)"
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
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 41%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 18%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "other_operating",
                "label": "其他",
                "notes": [
                  "占收入 3%",
                  "同比 +3 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "源图金额显示为 $0.1B，但报告币种为欧元。"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_nonoperating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "占收入 72%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 10%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 3%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-fy22",
    "company": "Kering",
    "period": "FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-fy22.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 20.4,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 10.5,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 3.3,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 1.7,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 3.9,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 1.1,
          "notes": [
            "+55% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.1
      },
      "operatingExpenses": {
        "total": 9.8,
        "items": [
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 2.8,
            "notes": [
              "14% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 7,
            "notes": [
              "34% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4
      }
    },
    "operatingOtherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.2,
          "notes": [
            "Source prints a dollar symbol in an otherwise euro chart."
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.2,
        "notes": [
          "75% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "27% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.7,
        "notes": [
          "18% of revenue",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年",
        "periodNote": "截至 2022 年 12 月"
      }
    }
  },
  {
    "key": "kering-h1-fy24",
    "company": "Kering",
    "period": "H1 FY24",
    "periodNote": "Ending June 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-h1-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 9,
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 4.1
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 1.4
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 0.8
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 1.7
        },
        {
          "id": "eyewear_corporate",
          "label": [
            "Kering Eyewear",
            "& Corporate"
          ],
          "value": 1.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.3
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "personnel_expenses",
            "label": [
              "Personnel",
              "expenses"
            ],
            "value": 1.5
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 3.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.1,
          "notes": [
            "Source prints ($0.1B); reporting currency is euros."
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.7
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年上半年",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "gucci",
              "label": "Gucci"
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent"
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta"
            },
            {
              "id": "other_houses",
              "label": "其他品牌"
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务"
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
                "id": "personnel_expenses",
                "label": "人员费用"
              },
              {
                "id": "other_opex",
                "label": "其他运营费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "原图印为 ($0.1B)，报告币种为欧元。"
              ]
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
            "label": "毛利润"
          },
          "operating": {
            "label": "营业利润"
          },
          "net": {
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "kering-fy23",
    "company": "Kering",
    "period": "FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 19.6,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 9.9,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 3.2,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 1.6,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 3.5,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 1.6,
          "notes": [
            "+38% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.6
      },
      "operatingExpenses": {
        "total": 10.2,
        "items": [
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 7.2,
            "notes": [
              "37% of revenue"
            ]
          },
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 3,
            "notes": [
              "15% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
      }
    },
    "operatingOtherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.2,
          "notes": [
            "Source image displays $0.2B despite the euro reporting currency."
          ]
        }
      ]
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
        "value": 14.9,
        "notes": [
          "76% of revenue",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.7,
        "notes": [
          "24% of revenue",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.1,
        "notes": [
          "16% of revenue",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "other_houses",
              "label": "其他品牌",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务",
              "notes": [
                "同比 +38%"
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
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 37%"
                ]
              },
              {
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 15%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "源图金额显示为 $0.2B，但报告币种为欧元。"
              ]
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
              "占收入 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 24%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 16%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-h1-fy22",
    "company": "Kering",
    "period": "H1 FY22",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/kering-h1-fy22.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 9.9,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 5.2,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 1.5,
          "notes": [
            "+42% Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 0.8,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 2,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 0.6,
          "notes": [
            "+49% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 1.4,
            "notes": [
              "14% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 3.2,
            "notes": [
              "32% of revenue"
            ]
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
    "operatingOtherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.1,
          "notes": []
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.017,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.017,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.4,
        "notes": [
          "74% of revenue",
          "+0.5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.8,
        "notes": [
          "28% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "21% of revenue",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年上半年",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent",
              "notes": [
                "同比 +42%"
              ]
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "other_houses",
              "label": "其他品牌",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务",
              "notes": [
                "同比 +49%"
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
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 14%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 32%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项"
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
              "占收入 74%",
              "同比 +0.5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 28%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 21%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-h1-fy25",
    "company": "Kering",
    "period": "H1 FY25",
    "periodNote": "Ending June 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-h1-fy25.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 7.6,
      "notes": [
        "(16%) Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 3,
          "notes": [
            "(26%) Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 1.3,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 0.8,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 1.5,
          "notes": [
            "(15%) Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 1.1,
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
        "value": 2
      },
      "operatingExpenses": {
        "total": 4.5,
        "items": [
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 3.1,
            "notes": [
              "41% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 1.5,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "operatingOtherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.1,
          "notes": [
            "Source prints ($0.1B) in an otherwise euro-denominated chart."
          ]
        }
      ]
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
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
          "73% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1,
        "notes": [
          "13% of revenue",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "7% of revenue",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年上半年",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 (16%)"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci",
              "notes": [
                "同比 (26%)"
              ]
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "other_houses",
              "label": "其他品牌",
              "notes": [
                "同比 (15%)"
              ]
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务",
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
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 41%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "源图抵销项印为 ($0.1B)，其余金额使用欧元。"
              ]
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
              "占收入 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 13%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 7%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-fy24",
    "company": "Kering",
    "period": "FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-fy24.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 17.2,
      "notes": [
        "(12%) Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 7.7,
          "notes": [
            "(23%) Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 2.9,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 1.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 3.2,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": "Kering Eyewear & Corporate",
          "value": 1.9,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.5
      },
      "operatingExpenses": {
        "total": 10.1,
        "items": [
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 7.1,
            "notes": [
              "41% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "personnel_expenses",
            "label": "Personnel expenses",
            "value": 3,
            "notes": [
              "18% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.5
      }
    },
    "operatingOtherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.2,
          "notes": [
            "Source image displays $0.2B despite the euro reporting currency."
          ]
        }
      ]
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
          "value": 0.9
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 12.7,
        "notes": [
          "74% of revenue",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "15% of revenue",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "7% of revenue",
          "(9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (12%)"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci",
              "notes": [
                "同比 (23%)"
              ]
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "other_houses",
              "label": "其他品牌",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务",
              "notes": [
                "同比 +24%"
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
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 41%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 18%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项",
              "notes": [
                "源图金额显示为 $0.2B，但报告币种为欧元。"
              ]
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
              "占收入 74%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 15%",
              "同比 (9 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 7%",
              "同比 (9 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "kering-h1-fy23",
    "company": "Kering",
    "period": "H1 FY23",
    "periodNote": "Ending June 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/kering-h1-fy23.png",
    "roundingTolerance": 0.25,
    "revenue": {
      "total": 10.1,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "gucci",
          "label": "Gucci",
          "value": 5.1,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "saint_laurent",
          "label": "Saint Laurent",
          "value": 1.6,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "bottega_veneta",
          "label": "Bottega Veneta",
          "value": 0.8,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "other_houses",
          "label": "Other Houses",
          "value": 1.9,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "eyewear_corporate",
          "label": [
            "Kering Eyewear",
            "& Corporate"
          ],
          "value": 0.9,
          "notes": [
            "+47% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.4
      },
      "operatingExpenses": {
        "total": 5,
        "items": [
          {
            "id": "personnel_expenses",
            "label": [
              "Personnel",
              "expenses"
            ],
            "value": 1.5,
            "notes": [
              "15% of revenue"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other opex",
            "value": 3.5,
            "notes": [
              "34% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7
      }
    },
    "operatingOtherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "eliminations",
          "label": "Eliminations",
          "value": 0.1
        }
      ]
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
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 7.7,
        "notes": [
          "76% of revenue",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.7,
        "notes": [
          "27% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "18% of revenue",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年上半年",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "gucci",
              "label": "Gucci"
            },
            {
              "id": "saint_laurent",
              "label": "Saint Laurent"
            },
            {
              "id": "bottega_veneta",
              "label": "Bottega Veneta"
            },
            {
              "id": "other_houses",
              "label": "其他品牌"
            },
            {
              "id": "eyewear_corporate",
              "label": "开云眼镜及公司业务"
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
                "id": "personnel_expenses",
                "label": "人员费用",
                "notes": [
                  "占收入 15%"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他运营费用",
                "notes": [
                  "占收入 34%"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherExpenses": {
          "items": [
            {
              "id": "eliminations",
              "label": "抵销项"
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
              "占收入 76%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 27%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 18%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
