(function(global){const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};ssot.records.push(...[
  {
    "key": "eli-lilly-q2-fy26",
    "company": "Eli Lilly",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/eli-lilly-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23,
      "notes": [
        "+48% Y/Y"
      ],
      "items": [
        {
          "id": "cardiometabolic",
          "label": "Cardiometabolic Health",
          "value": 18.4,
          "notes": [
            "+52% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 2.6,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "immunology",
          "label": "Immunology",
          "value": 1.4,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "neuroscience",
          "label": "Neurosciences",
          "value": 0.4,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
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
        "value": 3.3
      },
      "operatingExpenses": {
        "total": 10.7,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.8,
            "notes": [
              "17% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "sma",
            "label": "SM&A",
            "value": 3.4,
            "notes": [
              "15% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "acquired_iprd",
            "label": "Acquired IPR&D",
            "value": 2.8,
            "notes": [
              "12% of revenue",
              "+11pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.7
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
        "value": 19.7,
        "notes": [
          "86% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 9,
        "notes": [
          "39% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7.1,
        "notes": [
          "31% margin",
          "(6pp) Y/Y",
          "Operating profit plus other income less tax and interest rounds to $7.0B; the source reports $7.1B net profit."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +48%"
          ],
          "items": [
            {
              "id": "cardiometabolic",
              "label": "心血管代谢健康",
              "notes": [
                "同比 +52%"
              ]
            },
            {
              "id": "oncology",
              "label": "肿瘤",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "immunology",
              "label": "免疫",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "neuroscience",
              "label": "神经科学",
              "notes": [
                "同比 +25%"
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
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "sma",
                "label": "销售、市场与管理",
                "notes": [
                  "占收入 15%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "acquired_iprd",
                "label": "收购的 IPR&D",
                "notes": [
                  "占收入 12%",
                  "同比 +11 个百分点"
                ]
              },
              {
                "id": "other_opex",
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
              "利润率 86%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 39%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 31%",
              "同比 (6 个百分点)",
              "营业利润加其他收入、减税费和利息后为 70 亿美元；原图报告的净利润为 71 亿美元，差额属于列示金额的舍入差异。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "eli-lilly-q1-fy26",
    "company": "Eli Lilly",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/eli-lilly-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.8,
      "notes": [
        "+56% Y/Y"
      ],
      "items": [
        {
          "id": "cardiometabolic",
          "label": "Cardiometabolic Health",
          "value": 15.8,
          "notes": [
            "+71% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 2.3,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "immunology",
          "label": "Immunology",
          "value": 1.2,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "neuroscience",
          "label": "Neurosciences",
          "value": 0.4,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "(12%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 3.6
      },
      "operatingExpenses": {
        "total": 7.3,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.5,
            "notes": [
              "18% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "sma",
            "label": "SM&A",
            "value": 2.9,
            "notes": [
              "15% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "acquired_iprd",
            "label": "Acquired IPR&D",
            "value": 0.6,
            "notes": [
              "3% of revenue",
              "(9pp) Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.3
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
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2
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
        "value": 16.2,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.9,
        "notes": [
          "45% margin",
          "+16pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 7.4,
        "notes": [
          "37% margin",
          "+16pp Y/Y",
          "Operating profit plus other income less tax and interest rounds to $7.3B; the source reports $7.4B net profit."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +56%"
          ],
          "items": [
            {
              "id": "cardiometabolic",
              "label": "心血管代谢健康",
              "notes": [
                "同比 +71%"
              ]
            },
            {
              "id": "oncology",
              "label": "肿瘤",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "immunology",
              "label": "免疫",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "neuroscience",
              "label": "神经科学",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (12%)"
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
                  "占收入 18%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "sma",
                "label": "销售、市场与管理",
                "notes": [
                  "占收入 15%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "acquired_iprd",
                "label": "收购的 IPR&D",
                "notes": [
                  "占收入 3%",
                  "同比 (9 个百分点)"
                ]
              },
              {
                "id": "other_opex",
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
              "利润率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 45%",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 37%",
              "同比 +16 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "eli-lilly-q4-fy25",
    "company": "Eli Lilly",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/eli-lilly-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.3,
      "notes": [
        "+43% Y/Y"
      ],
      "items": [
        {
          "id": "cardiometabolic",
          "label": "Cardiometabolic Health",
          "value": 14.5,
          "notes": [
            "+58% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 2.6,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "immunology",
          "label": "Immunology",
          "value": 1.5,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "neuroscience",
          "label": "Neurosciences",
          "value": 0.5,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
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
        "value": 3.4
      },
      "operatingExpenses": {
        "total": 7.5,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.8,
            "notes": [
              "20% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "sma",
            "label": "SM&A",
            "value": 3.1,
            "notes": [
              "16% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "acquired_iprd",
            "label": "Acquired IPR&D",
            "value": 0.5,
            "notes": [
              "3% of revenue",
              "+1pp Y/Y"
            ]
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
          "id": "interest_other",
          "label": "Interest & other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.9,
        "notes": [
          "83% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.4,
        "notes": [
          "43% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.6,
        "notes": [
          "34% margin",
          "+2pp Y/Y",
          "Operating profit less tax and interest & other rounds to $6.7B; the source reports $6.6B net profit."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +43%"
          ],
          "items": [
            {
              "id": "cardiometabolic",
              "label": "心血管代谢健康",
              "notes": [
                "同比 +58%"
              ]
            },
            {
              "id": "oncology",
              "label": "肿瘤",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "immunology",
              "label": "免疫",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "neuroscience",
              "label": "神经科学",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (1%)"
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
                  "占收入 20%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "sma",
                "label": "销售、市场与管理",
                "notes": [
                  "占收入 16%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "acquired_iprd",
                "label": "收购的 IPR&D",
                "notes": [
                  "占收入 3%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "other_opex",
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 43%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "eli-lilly-q3-fy26",
    "company": "Eli Lilly",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/eli-lilly-q3-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.4,
      "notes": [
        "+39% Y/Y"
      ],
      "items": [
        {
          "id": "cardiometabolic",
          "label": "Cardiometabolic Health",
          "value": 19.8,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 2.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "immunology",
          "label": "Immunology",
          "value": 1.4,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "neuroscience",
          "label": "Neurosciences",
          "value": 0.4,
          "notes": [
            "+40% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.2,
          "notes": [
            "(54%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 3.9
      },
      "operatingExpenses": {
        "total": 11.9,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 4.2,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "sma",
            "label": "SM&A",
            "value": 3.1,
            "notes": [
              "13% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "acquired_iprd",
            "label": "Acquired IPR&D",
            "value": 4.2,
            "notes": [
              "17% of revenue",
              "+13pp Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.3,
            "notes": []
          }
        ],
        "notes": [
          "Printed items total $11.8B versus $11.9B printed; source rounding retained. Verified against https://investor.lilly.com/node/55191."
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 20.5,
        "notes": [
          "84% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.6,
        "notes": [
          "35% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.5,
        "notes": [
          "26% margin",
          "(5pp) Y/Y",
          "Printed components imply $6.4B net profit versus $6.5B printed; retain source rounding, tolerance 0.15B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "revenue": {
          "notes": [
            "同比 +39%"
          ],
          "items": [
            {
              "id": "cardiometabolic",
              "label": "心血管代谢健康",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "oncology",
              "label": "肿瘤",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "immunology",
              "label": "免疫",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "neuroscience",
              "label": "神经科学",
              "notes": [
                "同比 +40%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": [
                "同比 (54%)"
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
                  "占收入 17%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "sma",
                "label": "销售、市场与管理",
                "notes": [
                  "占收入 13%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "acquired_iprd",
                "label": "收购的 IPR&D",
                "notes": [
                  "占收入 17%",
                  "同比 +13 个百分点"
                ]
              },
              {
                "id": "other_opex",
                "label": "其他"
              }
            ],
            "notes": [
              "原图分项合计 $11.8B，总额列示 $11.9B；保留舍入差异。已核对 https://investor.lilly.com/node/55191。"
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
              "利润率 84%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 35%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 (5 个百分点)",
              "原图分项推算净利润为 $6.4B，原图列示 $6.5B；保留原图舍入值，容差 0.15B。"
            ]
          }
        }
      }
    }
  }
]);})(window);
